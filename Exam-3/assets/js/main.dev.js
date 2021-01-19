"use strict";

var BOT_KEY = '1488549434:AAHSlU7W6fxg_pH5-HC-bW6fr90VgRjQVaA';
var CHAT_ID = '-1001361932841';
$(document).ready(function () {
  //hamburger
  $(".link-mobile").click(function () {
    $('.hamburger').each(function () {
      this.checked = false;
    });
  }); //Scroll menu

  $(window).scroll(function () {
    if ($(window).scrollTop() > 220) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  }); //Menu active

  var btnContainer = document.getElementById("nav-list");
  var btns = btnContainer.getElementsByClassName("nav-link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("nav-link--active");
      current[0].className = current[0].className.replace(" nav-link--active", "");
      this.className += " nav-link--active";
    });
  } // Lazy

  /*$(function() {
      $('.lazy').lazyLoad();
  });*/
  //scroll


  $("a.scrollto").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60 //60 - высота фиксированной плавающей шапки

    }, 800);
  }); //send E-mail

  $("#send").click(function () {
    var email = $("#email").val(),
        msg_text = encodeURI("Email:" + email);
    var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email != "") {
      if (re.test(email)) {
        $.ajax({
          url: 'https://api.telegram.org/bot' + BOT_KEY + '/sendMessage',
          data: 'chat_id=' + CHAT_ID + 'parse_mode=html&&text=' + msg_text,
          type: 'get',
          dataType: 'json',
          success: function success(json) {
            if (json.ok) {
              $("#message").val('');
            } else {
              alert("Some error/ Try again.");
            }

            console.log(json);
          },
          error: function error(err) {
            alert(err.description);
          }
        });
      } else {
        vanillaToast.error("Enter valid E-mail", {
          duration: 2000,
          fadeDuration: 1,
          closeButton: false,
          className: 'custom'
        });
      }
    } else {
      vanillaToast.error("Enter E-mail", {
        duration: 2000,
        fadeDuration: 1,
        closeButton: false,
        className: 'custom'
      });
    }
  });
});
Vue.component('tabs', {
  template: "\n        <div>\n            <div class=\"tabs\">\n              <ul>\n                <li v-for=\"tab in tabs\" :class=\"{ 'is-active': tab.isActive }\">\n                    <a :href=\"tab.href\" @click=\"selectTab(tab)\">{{ tab.name }}</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"tabs-details\">\n                <slot></slot>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      tabs: []
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function selectTab(selectedTab) {
      this.tabs.forEach(function (tab) {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
});
Vue.component('tab', {
  template: "\n        <div v-show=\"isActive\"><slot></slot></div>\n    ",
  props: {
    name: {
      required: true
    },
    selected: {
      "default": false
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  computed: {
    href: function href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted: function mounted() {
    this.isActive = this.selected;
  }
});
new Vue({
  el: '#tabs'
});
Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#app',
  data: function data() {
    return {
      products_list: '',
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 40,
        keyboard: {
          enabled: true
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
    };
  },
  mounted: function mounted() {
    var _this = this;

    var url = "assets/json/product.json";
    axios.get(url).then(function (response) {
      _this.products_list = response.data;

      _this.getHTML();
    });
  },
  methods: {
    onSetTranslate: function onSetTranslate() {
      console.log('onSetTranslate');
    },
    onSwiperSlideChangeTransitionStart: function onSwiperSlideChangeTransitionStart() {
      console.log('onSwiperSlideChangeTransitionStart');
    },
    onSwiperClickSlide: function onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex);
    },
    getHTML: function getHTML() {
      console.log(this.products_list.products.length);
      var html = '';

      for (var i = 0; i < this.products_list.products.length; i++) {
        var item = this.products_list.products[i];
        html += "\n                <div id=\"item_".concat(item.id, "\" class=\"swiper-slide item\">");
        var rating = parseInt(item.rating);
        var star_1 = rating >= 1 ? '#6e774a' : '#f1f1f1',
            star_2 = rating >= 2 ? '#6e774a' : '#f1f1f1',
            star_3 = rating >= 3 ? '#6e774a' : '#f1f1f1',
            star_4 = rating >= 4 ? '#6e774a' : '#f1f1f1',
            star_5 = rating == 5 ? '#6e774a' : '#f1f1f1';
        html += "\n                <div class=\"prod_top\">\n                    <div class=\"rating_wrap\">\n                        <span class=\"star\" style=\"color:".concat(star_1, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_2, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_3, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_4, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_5, ";\">&#9733;</span>\n                    </div>");
        html += "<h3 class=\"name\">".concat(item.name, "</h3>\n                <img src=\"").concat(item.img, "\" alt=\"").concat(item.name, "\">\n                </div>\n                    <div class=\"prod_bottom\">\n                    <div class=\"price\">").concat(item.price, "</div>\n                    <button class=\"btn\" type=\"button\">SHOP</button>\n                    </div>\n                </div>\n                ");
      }

      this.item = html;
    }
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
      "default": false
    }
  },
  data: function data() {
    return {
      groupId: null
    };
  },
  template: "\n      <dl class=\"accordion box\" role=\"presentation\">\n        <accordion-item\n          v-for=\"item in content\"\n          :multiple=\"multiple\"\n          :item=\"item\"\n          :groupId=\"groupId\"\n          :key=\"item.id\">\n        </accordion-item>\n      </dl>\n    ",
  mounted: function mounted() {
    this.groupId = this.$el.id;
  }
});
Vue.component('accordion-item', {
  props: ['item', 'multiple', 'groupId'],
  template: "\n      <div :id=\"groupId + '-' + item.id\" class=\"accordion-item\" :class=\"{'is-active': item.active}\">\n        <dt class=\"accordion-item-title\">\n          <button @click=\"toggle\" class=\"accordion-item-trigger\">\n            <h4 class=\"accordion-item-title-text\">{{item.title}}</h4>\n            <span class=\"accordion-item-trigger-icon\"></span>\n          </button>\n        </dt>\n        <transition\n          name=\"accordion-item\"\n          @enter=\"startTransition\"\n          @after-enter=\"endTransition\"\n          @before-leave=\"startTransition\"\n          @after-leave=\"endTransition\">\n          <dd v-if=\"item.active\" class=\"accordion-item-details\">\n            <div v-html=\"item.details\" class=\"accordion-item-details-inner\"></div>\n          </dd>\n        </transition>\n      </div>\n    ",
  methods: {
    toggle: function toggle(event) {
      if (this.multiple) this.item.active = !this.item.active;else {
        this.$parent.$children.forEach(function (item, index) {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active;else item.item.active = false;
        });
      }
    },
    startTransition: function startTransition(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    endTransition: function endTransition(el) {
      el.style.height = '';
    }
  }
});
new Vue({
  el: '#accordion',
  data: function data() {
    return {
      faqs_list: ''
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    var url = "assets/json/faqs.json";
    axios.get(url).then(function (response) {
      _this2.faqs_list = response.data;
    });
  }
});
new Vue({
  el: '#appComment',
  data: function data() {
    return {
      products_list: '',
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        keyboard: {
          enabled: true
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
    };
  },
  mounted: function mounted() {
    var _this3 = this;

    var url = "assets/json/comment.json";
    axios.get(url).then(function (response) {
      _this3.products_list = response.data;

      _this3.getHTML();
    });
  },
  methods: {
    onSetTranslate: function onSetTranslate() {
      console.log('onSetTranslate');
    },
    onSwiperSlideChangeTransitionStart: function onSwiperSlideChangeTransitionStart() {
      console.log('onSwiperSlideChangeTransitionStart');
    },
    onSwiperClickSlide: function onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex);
    },
    getHTML: function getHTML() {
      console.log(this.products_list.length);
      var html = '';

      for (var i = 0; i < this.products_list.length; i++) {
        var item2 = this.products_list[i];
        html += "\n                <div id=\"item_".concat(item2.id, "\" class=\"swiper-slide item\" style=\"background: url('").concat(item2.img, "') center center no-repeat;\">");
        var rating = parseInt(item2.rating);
        var star_1 = rating >= 1 ? '#aab384' : '#f1f1f1',
            star_2 = rating >= 2 ? '#aab384' : '#f1f1f1',
            star_3 = rating >= 3 ? '#aab384' : '#f1f1f1',
            star_4 = rating >= 4 ? '#aab384' : '#f1f1f1',
            star_5 = rating == 5 ? '#aab384' : '#f1f1f1';
        html += "\n                    <div class=\"rating_wrap\">\n                        <span class=\"star\" style=\"color:".concat(star_1, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_2, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_3, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_4, ";\">&#9733;</span>\n                        <span class=\"star\" style=\"color:").concat(star_5, ";\">&#9733;</span>\n                    </div>");
        html += "\n                    <p>".concat(item2.content, "</p>\n                    <div class=\"name\">").concat(item2.name, "</div>\n                </div>\n                ");
      }

      this.item2 = html;
    }
  }
});