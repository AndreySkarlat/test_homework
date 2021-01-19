"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/vue-awesome-swiper@4.1.1/dist/vue-awesome-swiper.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("swiper"), require("vue")) : "function" == typeof define && define.amd ? define(["exports", "swiper", "vue"], t) : t((e = e || self).VueAwesomeSwiper = {}, e.Swiper, e.Vue);
}(void 0, function (e, t, n) {
  "use strict";

  var i;
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n["default"] : n, function (e) {
    e.SwiperComponent = "Swiper", e.SwiperSlideComponent = "SwiperSlide", e.SwiperDirective = "swiper", e.SwiperInstance = "$swiper";
  }(i || (i = {}));
  var o,
      r,
      l = Object.freeze({
    containerClass: "swiper-container",
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide"
  });
  !function (e) {
    e.Ready = "ready", e.ClickSlide = "clickSlide";
  }(o || (o = {})), function (e) {
    e.AutoUpdate = "autoUpdate", e.AutoDestroy = "autoDestroy", e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy", e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy";
  }(r || (r = {}));
  var a = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize", "observerUpdate", "beforeLoopFix", "loopFix"];

  function s() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
      e += arguments[t].length;
    }

    var i = Array(e),
        o = 0;

    for (t = 0; t < n; t++) {
      for (var r = arguments[t], l = 0, a = r.length; l < a; l++, o++) {
        i[o] = r[l];
      }
    }

    return i;
  }

  var d,
      u = function u(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
  },
      p = function p(e, t, n) {
    var i, r, l;

    if (e && !e.destroyed) {
      var a = (null === (i = t.composedPath) || void 0 === i ? void 0 : i.call(t)) || t.path;

      if ((null == t ? void 0 : t.target) && a) {
        var s = Array.from(e.slides),
            d = Array.from(a);

        if (s.includes(t.target) || d.some(function (e) {
          return s.includes(e);
        })) {
          var p = e.clickedIndex,
              c = Number(null === (l = null === (r = e.clickedSlide) || void 0 === r ? void 0 : r.dataset) || void 0 === l ? void 0 : l.swiperSlideIndex),
              v = Number.isInteger(c) ? c : null;
          n(o.ClickSlide, p, v), n(u(o.ClickSlide), p, v);
        }
      }
    }
  },
      c = function c(e, t) {
    a.forEach(function (n) {
      e.on(n, function () {
        for (var e = arguments, i = [], o = 0; o < arguments.length; o++) {
          i[o] = e[o];
        }

        t.apply(void 0, s([n], i));
        var r = u(n);
        r !== n && t.apply(void 0, s([r], i));
      });
    });
  },
      v = "instanceName";

  function f(e, t) {
    var n = function n(e, t) {
      var n,
          i,
          o,
          r,
          l = null === (i = null === (n = e.data) || void 0 === n ? void 0 : n.attrs) || void 0 === i ? void 0 : i[t];
      return void 0 !== l ? l : null === (r = null === (o = e.data) || void 0 === o ? void 0 : o.attrs) || void 0 === r ? void 0 : r[u(t)];
    },
        a = function a(e, t, o) {
      return t.arg || n(o, v) || e.id || i.SwiperInstance;
    },
        s = function s(e, t, n) {
      var i = a(e, t, n);
      return n.context[i] || null;
    },
        d = function d(e) {
      return e.value || t;
    },
        f = function f(e) {
      return [!0, void 0, null, ""].includes(e);
    },
        h = function h(e) {
      var t,
          n,
          i = (null === (t = e.data) || void 0 === t ? void 0 : t.on) || (null === (n = e.componentOptions) || void 0 === n ? void 0 : n.listeners);
      return function (e) {
        for (var t, n = arguments, o = [], r = 1; r < arguments.length; r++) {
          o[r - 1] = n[r];
        }

        var l = null === (t = i) || void 0 === t ? void 0 : t[e];
        l && l.fns.apply(l, o);
      };
    };

    return {
      bind: function bind(e, t, n) {
        -1 === e.className.indexOf(l.containerClass) && (e.className += (e.className ? " " : "") + l.containerClass), e.addEventListener("click", function (i) {
          var o = h(n),
              r = s(e, t, n);
          p(r, i, o);
        });
      },
      inserted: function inserted(t, n, i) {
        var r = i.context,
            l = d(n),
            s = a(t, n, i),
            u = h(i),
            p = r,
            v = null == p ? void 0 : p[s];
        v && !v.destroyed || (v = new e(t, l), p[s] = v, c(v, u), u(o.Ready, v));
      },
      componentUpdated: function componentUpdated(e, t, i) {
        var o,
            l,
            a,
            u,
            p,
            c,
            v,
            h,
            w,
            S,
            y,
            m,
            C = n(i, r.AutoUpdate);

        if (f(C)) {
          var g = s(e, t, i);

          if (g) {
            var I = d(t).loop;
            I && (null === (l = null === (o = g) || void 0 === o ? void 0 : o.loopDestroy) || void 0 === l || l.call(o)), null === (a = null == g ? void 0 : g.update) || void 0 === a || a.call(g), null === (p = null === (u = g.navigation) || void 0 === u ? void 0 : u.update) || void 0 === p || p.call(u), null === (v = null === (c = g.pagination) || void 0 === c ? void 0 : c.render) || void 0 === v || v.call(c), null === (w = null === (h = g.pagination) || void 0 === h ? void 0 : h.update) || void 0 === w || w.call(h), I && (null === (y = null === (S = g) || void 0 === S ? void 0 : S.loopCreate) || void 0 === y || y.call(S), null === (m = null == g ? void 0 : g.update) || void 0 === m || m.call(g));
          }
        }
      },
      unbind: function unbind(e, t, i) {
        var o,
            l = n(i, r.AutoDestroy);

        if (f(l)) {
          var a = s(e, t, i);
          a && a.initialized && (null === (o = null == a ? void 0 : a.destroy) || void 0 === o || o.call(a, f(n(i, r.DeleteInstanceOnDestroy)), f(n(i, r.CleanupStylesOnDestroy))));
        }
      }
    };
  }

  function h(e) {
    var t;
    return n.extend({
      name: i.SwiperComponent,
      props: (t = {
        defaultOptions: {
          type: Object,
          required: !1,
          "default": function _default() {
            return {};
          }
        },
        options: {
          type: Object,
          required: !1
        }
      }, t[r.AutoUpdate] = {
        type: Boolean,
        "default": !0
      }, t[r.AutoDestroy] = {
        type: Boolean,
        "default": !0
      }, t[r.DeleteInstanceOnDestroy] = {
        type: Boolean,
        required: !1,
        "default": !0
      }, t[r.CleanupStylesOnDestroy] = {
        type: Boolean,
        required: !1,
        "default": !0
      }, t),
      data: function data() {
        var e;
        return (e = {})[i.SwiperInstance] = null, e;
      },
      computed: {
        swiperInstance: {
          cache: !1,
          set: function set(e) {
            this[i.SwiperInstance] = e;
          },
          get: function get() {
            return this[i.SwiperInstance];
          }
        },
        swiperOptions: function swiperOptions() {
          return this.options || this.defaultOptions;
        },
        wrapperClass: function wrapperClass() {
          return this.swiperOptions.wrapperClass || l.wrapperClass;
        }
      },
      methods: {
        handleSwiperClick: function handleSwiperClick(e) {
          p(this.swiperInstance, e, this.$emit.bind(this));
        },
        autoReLoopSwiper: function autoReLoopSwiper() {
          var e, t;

          if (this.swiperInstance && this.swiperOptions.loop) {
            var n = this.swiperInstance;
            null === (e = null == n ? void 0 : n.loopDestroy) || void 0 === e || e.call(n), null === (t = null == n ? void 0 : n.loopCreate) || void 0 === t || t.call(n);
          }
        },
        updateSwiper: function updateSwiper() {
          var e, t, n, i, o, l, a, s;
          this[r.AutoUpdate] && this.swiperInstance && (this.autoReLoopSwiper(), null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.update) || void 0 === t || t.call(e), null === (i = null === (n = this.swiperInstance.navigation) || void 0 === n ? void 0 : n.update) || void 0 === i || i.call(n), null === (l = null === (o = this.swiperInstance.pagination) || void 0 === o ? void 0 : o.render) || void 0 === l || l.call(o), null === (s = null === (a = this.swiperInstance.pagination) || void 0 === a ? void 0 : a.update) || void 0 === s || s.call(a));
        },
        destroySwiper: function destroySwiper() {
          var e, t;
          this[r.AutoDestroy] && this.swiperInstance && this.swiperInstance.initialized && (null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.destroy) || void 0 === t || t.call(e, this[r.DeleteInstanceOnDestroy], this[r.CleanupStylesOnDestroy]));
        },
        initSwiper: function initSwiper() {
          this.swiperInstance = new e(this.$el, this.swiperOptions), c(this.swiperInstance, this.$emit.bind(this)), this.$emit(o.Ready, this.swiperInstance);
        }
      },
      mounted: function mounted() {
        this.swiperInstance || this.initSwiper();
      },
      activated: function activated() {
        this.updateSwiper();
      },
      updated: function updated() {
        this.updateSwiper();
      },
      beforeDestroy: function beforeDestroy() {
        this.$nextTick(this.destroySwiper);
      },
      render: function render(e) {
        return e("div", {
          staticClass: l.containerClass,
          on: {
            click: this.handleSwiperClick
          }
        }, [this.$slots[d.ParallaxBg], e("div", {
          "class": this.wrapperClass
        }, this.$slots["default"]), this.$slots[d.Pagination], this.$slots[d.PrevButton], this.$slots[d.NextButton], this.$slots[d.Scrollbar]]);
      }
    });
  }

  !function (e) {
    e.ParallaxBg = "parallax-bg", e.Pagination = "pagination", e.Scrollbar = "scrollbar", e.PrevButton = "button-prev", e.NextButton = "button-next";
  }(d || (d = {}));

  var w = n.extend({
    name: i.SwiperSlideComponent,
    computed: {
      slideClass: function slideClass() {
        var e, t;
        return (null === (t = null === (e = this.$parent) || void 0 === e ? void 0 : e.swiperOptions) || void 0 === t ? void 0 : t.slideClass) || l.slideClass;
      }
    },
    methods: {
      update: function update() {
        var e,
            t = this.$parent;
        t[r.AutoUpdate] && (null === (e = null == t ? void 0 : t.swiperInstance) || void 0 === e || e.update());
      }
    },
    mounted: function mounted() {
      this.update();
    },
    updated: function updated() {
      this.update();
    },
    render: function render(e) {
      return e("div", {
        "class": this.slideClass
      }, this.$slots["default"]);
    }
  }),
      S = function S(e) {
    var t = function t(n, o) {
      if (!t.installed) {
        var r = h(e);
        o && (r.options.props.defaultOptions["default"] = function () {
          return o;
        }), n.component(i.SwiperComponent, r), n.component(i.SwiperSlideComponent, w), n.directive(i.SwiperDirective, f(e, o)), t.installed = !0;
      }
    };

    return t;
  };

  var y = function (e) {
    var t;
    return (t = {
      version: "4.1.1",
      install: S(e),
      directive: f(e)
    })[i.SwiperComponent] = h(e), t[i.SwiperSlideComponent] = w, t;
  }(t),
      m = y.version,
      C = y.install,
      g = y.directive,
      I = y.Swiper,
      O = y.SwiperSlide;

  e.Swiper = I, e.SwiperSlide = O, e["default"] = y, e.directive = g, e.install = C, e.version = m, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});