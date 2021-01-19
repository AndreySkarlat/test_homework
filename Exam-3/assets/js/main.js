const BOT_KEY = '1488549434:AAHSlU7W6fxg_pH5-HC-bW6fr90VgRjQVaA';
const CHAT_ID = '-1001361932841';

$(document).ready(function() {
    //hamburger
    $(".link-mobile").click(function() {
        $('.hamburger').each(function() { this.checked = false; });
    });

    //Scroll menu
    $(window).scroll(function() {

        if ($(window).scrollTop() > 220) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

    //Menu active
    let btnContainer = document.getElementById("nav-list");
    let btns = btnContainer.getElementsByClassName("nav-link");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("nav-link--active");
            current[0].className = current[0].className.replace(" nav-link--active", "");
            this.className += " nav-link--active";
        });
    }

    // Lazy
    /*$(function() {
        $('.lazy').lazyLoad();
    });*/

    //scroll
    $("a.scrollto").on("click", function(e) {
        e.preventDefault();
        let anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60 //60 - высота фиксированной плавающей шапки
        }, 800);
    });

    //send E-mail
    $("#send").click(function() {
        let email = $("#email").val(),
            msg_text = encodeURI("Email:" + email);
        let re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email != "") {
            if (re.test(email)) {
                $.ajax({
                    url: 'https://api.telegram.org/bot' + BOT_KEY + '/sendMessage',
                    data: 'chat_id=' + CHAT_ID + 'parse_mode=html&&text=' + msg_text,
                    type: 'get',
                    dataType: 'json',
                    success: function(json) {
                        if (json.ok) {
                            $("#message").val('');
                        } else {
                            alert("Some error/ Try again.")
                        }
                        console.log(json);
                    },
                    error: function(err) {
                        alert(err.description);
                    }
                });
            } else {
                vanillaToast.error("Enter valid E-mail", { duration: 2000, fadeDuration: 1, closeButton: false, className: 'custom' });
            }
        } else {
            vanillaToast.error("Enter E-mail", { duration: 2000, fadeDuration: 1, closeButton: false, className: 'custom' });
        }
    })
});


Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
              <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return { tabs: [] };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false }
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#tabs'
});

Vue.use(VueAwesomeSwiper)
new Vue({
    el: '#app',
    data() {
        return {
            products_list: '',
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 40,
                keyboard: {
                    enabled: true,
                },
                breakpoints: {
                    1921: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted() {
        const url = "assets/json/product.json";
        axios.get(url).then(response => {
            this.products_list = response.data
            this.getHTML();
        })
    },
    methods: {
        onSetTranslate() {
            console.log('onSetTranslate')
        },
        onSwiperSlideChangeTransitionStart() {
            console.log('onSwiperSlideChangeTransitionStart')
        },
        onSwiperClickSlide(index, reallyIndex) {
            console.log('Swiper click slide!', reallyIndex)
        },
        getHTML() {
            console.log(this.products_list.products.length);
            let html = '';
            for (let i = 0; i < this.products_list.products.length; i++) {
                let item = this.products_list.products[i];
                html += `
                <div id="item_${item.id}" class="swiper-slide item">`;
                let rating = parseInt(item.rating);
                let star_1 = (rating >= 1) ? '#6e774a' : '#f1f1f1',
                    star_2 = (rating >= 2) ? '#6e774a' : '#f1f1f1',
                    star_3 = (rating >= 3) ? '#6e774a' : '#f1f1f1',
                    star_4 = (rating >= 4) ? '#6e774a' : '#f1f1f1',
                    star_5 = (rating == 5) ? '#6e774a' : '#f1f1f1';
                html += `
                <div class="prod_top">
                    <div class="rating_wrap">
                        <span class="star" style="color:${star_1};">&#9733;</span>
                        <span class="star" style="color:${star_2};">&#9733;</span>
                        <span class="star" style="color:${star_3};">&#9733;</span>
                        <span class="star" style="color:${star_4};">&#9733;</span>
                        <span class="star" style="color:${star_5};">&#9733;</span>
                    </div>`;
                html += `<h3 class="name">${item.name}</h3>
                <img src="${item.img}" alt="${item.name}">
                </div>
                    <div class="prod_bottom">
                    <div class="price">${item.price}</div>
                    <button class="btn" type="button">SHOP</button>
                    </div>
                </div>
                `;
            }
            this.item = html;
        },
    }
});

Vue.component('accordion', {
    props: {
        content: {
            type: Array,
            required: true
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            groupId: null
        }
    },
    template: `
      <dl class="accordion box" role="presentation">
        <accordion-item
          v-for="item in content"
          :multiple="multiple"
          :item="item"
          :groupId="groupId"
          :key="item.id">
        </accordion-item>
      </dl>
    `,
    mounted() {
        this.groupId = this.$el.id
    }
})

Vue.component('accordion-item', {
    props: ['item', 'multiple', 'groupId'],
    template: `
      <div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
        <dt class="accordion-item-title">
          <button @click="toggle" class="accordion-item-trigger">
            <h4 class="accordion-item-title-text">{{item.title}}</h4>
            <span class="accordion-item-trigger-icon"></span>
          </button>
        </dt>
        <transition
          name="accordion-item"
          @enter="startTransition"
          @after-enter="endTransition"
          @before-leave="startTransition"
          @after-leave="endTransition">
          <dd v-if="item.active" class="accordion-item-details">
            <div v-html="item.details" class="accordion-item-details-inner"></div>
          </dd>
        </transition>
      </div>
    `,
    methods: {
        toggle(event) {
            if (this.multiple) this.item.active = !this.item.active
            else {
                this.$parent.$children.forEach((item, index) => {
                    if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
                    else item.item.active = false
                })
            }
        },
        startTransition(el) {
            el.style.height = el.scrollHeight + 'px'
        },
        endTransition(el) {
            el.style.height = ''
        }
    }
})

new Vue({
    el: '#accordion',
    data() {
        return {
            faqs_list: ''
        }
    },
    mounted() {
        const url = "assets/json/faqs.json";
        axios.get(url).then(response => {
            this.faqs_list = response.data;
        })
    }
})

new Vue({
    el: '#appComment',
    data() {
        return {
            products_list: '',
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                effect: 'fade',
                keyboard: {
                    enabled: true,
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted() {
        const url = "assets/json/comment.json";
        axios.get(url).then(response => {
            this.products_list = response.data
            this.getHTML();
        })
    },
    methods: {
        onSetTranslate() {
            console.log('onSetTranslate')
        },
        onSwiperSlideChangeTransitionStart() {

            console.log('onSwiperSlideChangeTransitionStart')
        },
        onSwiperClickSlide(index, reallyIndex) {
            console.log('Swiper click slide!', reallyIndex)
        },
        getHTML() {
            console.log(this.products_list.length);
            let html = '';
            for (let i = 0; i < this.products_list.length; i++) {
                let item2 = this.products_list[i];
                html += `
                <div id="item_${item2.id}" class="swiper-slide item" style="background: url('${item2.img}') center center no-repeat;">`;
                let rating = parseInt(item2.rating);
                let star_1 = (rating >= 1) ? '#aab384' : '#f1f1f1',
                    star_2 = (rating >= 2) ? '#aab384' : '#f1f1f1',
                    star_3 = (rating >= 3) ? '#aab384' : '#f1f1f1',
                    star_4 = (rating >= 4) ? '#aab384' : '#f1f1f1',
                    star_5 = (rating == 5) ? '#aab384' : '#f1f1f1';
                html += `
                    <div class="rating_wrap">
                        <span class="star" style="color:${star_1};">&#9733;</span>
                        <span class="star" style="color:${star_2};">&#9733;</span>
                        <span class="star" style="color:${star_3};">&#9733;</span>
                        <span class="star" style="color:${star_4};">&#9733;</span>
                        <span class="star" style="color:${star_5};">&#9733;</span>
                    </div>`;
                html += `
                    <p>${item2.content}</p>
                    <div class="name">${item2.name }</div>
                </div>
                `;
            }
            this.item2 = html;
        },
    }
});