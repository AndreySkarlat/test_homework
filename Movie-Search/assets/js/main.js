const OMDB_API_KEY = 'ff9dd2a9';
const app = Vue.createApp({
    data() {
        return {
            search_query: '',
            search_year: '',
            search_type: '',
            movies_list: [],
            movie_info: [],
            showModal: false,
            blocksView: true,
            favorites: [],
            activeLink: undefined,
            btn: false,
            page: 1
        }
    },
    created() {
        window.goToPage = this.goToPage.bind(this);
        let fav_list = localStorage.getItem('favorites');
        if (fav_list != null) {
            this.favorites = JSON.parse(fav_list);
        }
        let view = this.getCookie('view');
        if (typeof(view) != "undefined") {
            if (view == "blocks") {
                this.blocksView = true;
                this.activeLink = 1;
            } else {
                this.blocksView = false;
                this.activeLink = 2;
            }
        }
    },
    methods: {
        searchMovie(reset_page) {
            document.body.className = 'loading';
            if (this.searchMovie != '') {
                if (reset_page) {
                    this.page = 1;
                }
                let url = 'https://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + this.search_query + '&page=' + this.page;
                if (this.search_year != "") {
                    url += '&y=' + this.search_year;
                }
                if (this.search_type != "") {
                    url += '&type=' + this.search_type;
                }
                axios.get(url)
                    .then((resp) => {
                        if (resp.data.Response == "True") {
                            resp.data.Search.map((obj) => {
                                obj.favoritesHeart = 'bi-heart';
                                for (let i = 0; i < this.favorites.length; i++) {
                                    if (obj.imdbID == this.favorites[i].imdbID) {
                                        obj.favoritesHeart = 'bi-heart-fill';
                                        break;
                                    }
                                }

                            });
                            this.movies_list = resp.data.Search;
                            this.pagination(resp.data.totalResults);
                            document.body.className = '';
                        } else {
                            vanillaToast.error(resp.data.Error, { duration: 2000, fadeDuration: 1, closeButton: false, className: 'custom' });
                            document.body.className = '';
                        }
                    }).catch((err) => {
                        vanillaToast.error(err, { duration: 2000, fadeDuration: 1, closeButton: false, className: 'custom' });
                        document.body.className = '';
                    })
            }
        },
        pagination(total) {
            const per_page = 10;
            const pages = Math.floor(total / per_page);
            let list = '';
            if (this.page > 1) {
                list += `<li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous" onclick="goToPage(${this.page-1})"><span aria-hidden="true">&laquo;</span></a></li>`;
            }
            for (let i = 1; i <= pages; i++) {
                if (i == this.page) {
                    list += `<li class="page-item active"><span class="page-link" href="#">${i}</span></li>`;
                } else {
                    if (i < this.page - 3 || i > this.page + 3) {} else {
                        list += `<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="goToPage(${i})">${i}</a></li>`;
                    }
                }
            }
            if (this.page != pages) {
                list += `<li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next" onclick="goToPage(${this.page+1})"><span aria-hidden="true">&raquo;</span></a></li>`;
            }
            document.getElementById("pagination").innerHTML = list;
        },
        goToPage(p) {
            this.page = p;
            this.searchMovie(false);
        },
        getDetail(id) {
            axios.get('https://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + id)
                .then((resp) => {
                    if (resp.data.Response == "True") {
                        this.movie_info = resp.data;
                        this.getRatingHTML();
                        this.toggleModalDetail(true);
                    } else {
                        alert(resp.data.Error);
                    }
                    console.log(resp.data);
                }).catch((err) => {
                    console.log(err);
                })
        },
        getRatingHTML() {
            let html = '';
            for (let i = 0; i < this.movie_info.Ratings.length; i++) {
                let rating = this.movie_info.Ratings[i];
                html += ` 
                <div class="row">
                    <div class="col-6">
                        ${rating.Source}
                    </div>
                    <div class="col-6 text-end">
                        ${rating.Value}
                    </div>
                </div>
                `;
                let width = 0;
                switch (rating.Source) {
                    case 'Internet Movie Database':
                        width = 100 - parseFloat(rating.Value.split("/")[0]) * 10;
                        break;
                    case 'Rotten Tomatoes':
                        width = 100 - parseInt(rating.Value);
                        break;
                    case 'Metacritic':
                        width = 100 - parseInt(rating.Value.split("/")[0]);
                        break;
                }
                html += `
                <div class="rating_wrap">
                    <div class="scale" style="width:${width}%"></div>
                </div>`;
            }
            this.ratings = html;
        },
        toggleModalDetail(show) {
            this.showModal = show;
            document.getElementById("exampleModal").style.display = (show) ? 'block' : 'none';
        },
        toggleFavorites(item) {
            let a = this.favorites.findIndex(function(el) {
                return el.imdbID == item.imdbID;
            });
            if (a == -1) {
                item.favoritesHeart = 'bi-heart-fill';
                this.favorites.push(item);
            } else {
                item.favoritesHeart = 'bi-heart';
                this.favorites.splice(a, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        toggleView(is_blocks) {
            if (this.blocksView != is_blocks) {
                this.blocksView = is_blocks;
                let view = (is_blocks) ? 'blocks' : 'rows';
                this.setCookie('view', view, { expires: 60 * 60 * 24 * 365 })
            }
        },
        toggleBtn(is_btn) {
            if (this.btn != is_btn) {
                this.btn = is_btn;
            } else {
                this.btn = true;
            }
        },
        setCookie(name, value, props) {
            props = props || {}
            var exp = props.expires
            if (typeof exp == "number" && exp) {
                var d = new Date()
                d.setTime(d.getTime() + exp * 1000)
                exp = props.expires = d
            }
            if (exp && exp.toUTCString) { props.expires = exp.toUTCString() }
            value = encodeURIComponent(value)
            var updatedCookie = name + "=" + value
            for (var propName in props) {
                updatedCookie += "; " + propName
                var propValue = props[propName]
                if (propValue !== true) { updatedCookie += "=" + propValue }
            }
            document.cookie = updatedCookie
        },
        getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ))
            return matches ? decodeURIComponent(matches[1]) : undefined
        },

    }
});

app.component('movie-item', {
    props: ['item'],
    methods: {
        getDetail(id) {
            this.$parent.getDetail(id);
        },
        toggleFavorites(item) {
            this.$parent.toggleFavorites(item);
        }
    },
    template: '#movie_item'
});

app.mount("#app");