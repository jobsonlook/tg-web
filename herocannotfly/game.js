!function(t) {
    function e(r) {
        if (i[r])
            return i[r].exports;
        var n = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, e),
        n.l = !0,
        n.exports
    }
    var i = {};
    e.m = t,
    e.c = i,
    e.d = function(t, i, r) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(i, "a", i),
        i
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 80)
}([function(t, e, i) {
    "use strict";
    var r = t.exports = Object.assign(i(1), i(3), {
        utils: i(4),
        ticker: i(93),
        DisplayObject: i(48),
        Container: i(22),
        Sprite: i(52),
        ParticleContainer: i(97),
        SpriteRenderer: i(98),
        ParticleRenderer: i(106),
        Text: i(109),
        Graphics: i(110),
        GraphicsData: i(60),
        GraphicsRenderer: i(111),
        Texture: i(14),
        BaseTexture: i(20),
        RenderTexture: i(33),
        VideoBaseTexture: i(49),
        TextureUvs: i(50),
        CanvasRenderer: i(114),
        CanvasGraphics: i(36),
        CanvasBuffer: i(34),
        WebGLRenderer: i(23),
        WebGLManager: i(12),
        ShaderManager: i(55),
        Shader: i(25),
        TextureShader: i(24),
        PrimitiveShader: i(57),
        ComplexPrimitiveShader: i(56),
        ObjectRenderer: i(15),
        RenderTarget: i(21),
        AbstractFilter: i(35),
        FXAAFilter: i(59),
        SpriteMaskFilter: i(58),
        autoDetectRenderer: function(t, e, i, n) {
            return t = t || 800,
            e = e || 600,
            !n && r.utils.isWebGLSupported() ? new r.WebGLRenderer(t,e,i) : new r.CanvasRenderer(t,e,i)
        }
    })
}
, function(t, e, i) {
    "use strict";
    var r = {
        VERSION: "3.0.10-dev",
        PI_2: 2 * Math.PI,
        RAD_TO_DEG: 180 / Math.PI,
        DEG_TO_RAD: Math.PI / 180,
        TARGET_FPMS: .06,
        RENDERER_TYPE: {
            UNKNOWN: 0,
            WEBGL: 1,
            CANVAS: 2
        },
        BLEND_MODES: {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16
        },
        DRAW_MODES: {
            POINTS: 0,
            LINES: 1,
            LINE_LOOP: 2,
            LINE_STRIP: 3,
            TRIANGLES: 4,
            TRIANGLE_STRIP: 5,
            TRIANGLE_FAN: 6
        },
        SCALE_MODES: {
            DEFAULT: 0,
            LINEAR: 0,
            NEAREST: 1
        },
        RETINA_PREFIX: /@(.+)x/,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        DEFAULT_RENDER_OPTIONS: {
            view: null,
            resolution: 1,
            antialias: !1,
            forceFXAA: !1,
            autoResize: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            roundPixels: !1
        },
        SHAPES: {
            POLY: 0,
            RECT: 1,
            CIRC: 2,
            ELIP: 3,
            RREC: 4
        },
        SPRITE_BATCH_SIZE: 2e3
    };
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        this.fn = t,
        this.context = e,
        this.once = i || !1
    }
    function n() {}
    var o = "function" != typeof Object.create && "~";
    n.prototype._events = void 0,
    n.prototype.listeners = function(t, e) {
        var i = o ? o + t : t
          , r = this._events && this._events[i];
        if (e)
            return !!r;
        if (!r)
            return [];
        if (r.fn)
            return [r.fn];
        for (var n = 0, s = r.length, a = new Array(s); n < s; n++)
            a[n] = r[n].fn;
        return a
    }
    ,
    n.prototype.emit = function(t, e, i, r, n, s) {
        var a = o ? o + t : t;
        if (!this._events || !this._events[a])
            return !1;
        var h, u, l = this._events[a], c = arguments.length;
        if ("function" == typeof l.fn) {
            switch (l.once && this.removeListener(t, l.fn, void 0, !0),
            c) {
            case 1:
                return l.fn.call(l.context),
                !0;
            case 2:
                return l.fn.call(l.context, e),
                !0;
            case 3:
                return l.fn.call(l.context, e, i),
                !0;
            case 4:
                return l.fn.call(l.context, e, i, r),
                !0;
            case 5:
                return l.fn.call(l.context, e, i, r, n),
                !0;
            case 6:
                return l.fn.call(l.context, e, i, r, n, s),
                !0
            }
            for (u = 1,
            h = new Array(c - 1); u < c; u++)
                h[u - 1] = arguments[u];
            l.fn.apply(l.context, h)
        } else {
            var p, d = l.length;
            for (u = 0; u < d; u++)
                switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0),
                c) {
                case 1:
                    l[u].fn.call(l[u].context);
                    break;
                case 2:
                    l[u].fn.call(l[u].context, e);
                    break;
                case 3:
                    l[u].fn.call(l[u].context, e, i);
                    break;
                default:
                    if (!h)
                        for (p = 1,
                        h = new Array(c - 1); p < c; p++)
                            h[p - 1] = arguments[p];
                    l[u].fn.apply(l[u].context, h)
                }
        }
        return !0
    }
    ,
    n.prototype.on = function(t, e, i) {
        var n = new r(e,i || this)
          , s = o ? o + t : t;
        return this._events || (this._events = o ? {} : Object.create(null)),
        this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n,
        this
    }
    ,
    n.prototype.once = function(t, e, i) {
        var n = new r(e,i || this,!0)
          , s = o ? o + t : t;
        return this._events || (this._events = o ? {} : Object.create(null)),
        this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n,
        this
    }
    ,
    n.prototype.removeListener = function(t, e, i, r) {
        var n = o ? o + t : t;
        if (!this._events || !this._events[n])
            return this;
        var s = this._events[n]
          , a = [];
        if (e)
            if (s.fn)
                (s.fn !== e || r && !s.once || i && s.context !== i) && a.push(s);
            else
                for (var h = 0, u = s.length; h < u; h++)
                    (s[h].fn !== e || r && !s[h].once || i && s[h].context !== i) && a.push(s[h]);
        return a.length ? this._events[n] = 1 === a.length ? a[0] : a : delete this._events[n],
        this
    }
    ,
    n.prototype.removeAllListeners = function(t) {
        return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null),
        this) : this
    }
    ,
    n.prototype.off = n.prototype.removeListener,
    n.prototype.addListener = n.prototype.on,
    n.prototype.setMaxListeners = function() {
        return this
    }
    ,
    n.prefixed = o,
    t.exports = n
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        Point: i(30),
        Matrix: i(44),
        GroupD8: i(45),
        Circle: i(86),
        Ellipse: i(87),
        Polygon: i(88),
        Rectangle: i(31),
        RoundedRectangle: i(89)
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(1)
      , n = i(7)
      , o = t.exports = {
        _uid: 0,
        _saidHello: !1,
        EventEmitter: i(2),
        pluginTarget: i(90),
        async: i(32),
        uid: function() {
            return ++o._uid
        },
        hex2rgb: n.hex2rgb,
        hex2string: n.hex2string,
        rgb2hex: n.rgb2hex,
        canUseNewCanvasBlendModes: function() {
            if ("undefined" == typeof document)
                return !1;
            var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/"
              , e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=="
              , i = new Image;
            i.src = t + "AP804Oa6" + e;
            var r = new Image;
            r.src = t + "/wCKxvRF" + e;
            var n = document.createElement("canvas");
            n.width = 6,
            n.height = 1;
            var o = n.getContext("2d");
            o.globalCompositeOperation = "multiply",
            o.drawImage(i, 0, 0),
            o.drawImage(r, 2, 0);
            var s = o.getImageData(2, 0, 1, 1).data;
            return 255 === s[0] && 0 === s[1] && 0 === s[2]
        },
        getNextPowerOfTwo: function(t) {
            if (t > 0 && 0 == (t & t - 1))
                return t;
            for (var e = 1; e < t; )
                e <<= 1;
            return e
        },
        isPowerOfTwo: function(t, e) {
            return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1)
        },
        getResolutionOfUrl: function(t) {
            var e = r.RETINA_PREFIX.exec(t);
            return e ? parseFloat(e[1]) : 1
        },
        sayHello: function(t) {
            if (!o._saidHello) {
                o._saidHello = !0
            }
        },
        isWebGLSupported: function() {
            var t = {
                stencil: !0
            };
            try {
                if (!window.WebGLRenderingContext)
                    return !1;
                var e = document.createElement("canvas")
                  , i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                return !(!i || !i.getContextAttributes().stencil)
            } catch (t) {
                return !1
            }
        },
        sign: function(t) {
            return t ? t < 0 ? -1 : 1 : 0
        },
        removeItems: n.removeItems,
        TextureCache: {},
        BaseTextureCache: {}
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        (p += 1) < l.length ? l[p].start(r, n) : h.emit("complete")
    }
    function n(t, e) {
        d += 1;
        var i = 0;
        for (var r in l)
            i += l[r].getAssetsLength();
        e && h.emit("error", e),
        h.emit("progress", d / i)
    }
    var o = i(2)
      , s = i(38)
      , a = i(10).default
      , h = new o;
    h.ResourceLoader = s,
    Object.assign(h, {
        baseURL: "media"
    }, a.loader);
    var u = []
      , l = []
      , c = []
      , p = 0
      , d = 0
      , f = !1
      , v = null;
    h.registerLoader = function(t) {
        l.push(t)
    }
    ,
    h.start = function() {
        if (f = !0,
        0 !== u.length) {
            if (!v) {
                v = new h.ResourceLoader,
                window.H_ResourceLoader = v;
                for (var t in c)
                    v.use(c[t]());
                v.add(u),
                h.resources = v.resources,
                h.registerLoader({
                    start: function(t, e) {
                        var i = function(t, i) {
                            e(i, i.error)
                        };
                        v.on("progress", i),
                        v.load(function() {
                            setTimeout(t, 0),
                            v.off("progress", i)
                        })
                    },
                    getAssetsLength: function() {
                        return Object.keys(v.resources).length
                    }
                })
            }
            l[p].start(r, n)
        } else
            h.emit("complete")
    }
    ,
    h.addAsset = function(t, e, i) {
        var r = h.baseURL + "/" + t
          , n = Object.assign({
            url: r,
            key: e || t
        }, i);
        return f ? v.add(n) : u.push(n),
        h
    }
    ,
    h.addMiddleware = function(t) {
        c.push(t)
    }
    ,
    h.getTexture = function(t) {
        return Array.isArray(t) ? h.resources[t[0]].textures[t[1]] : "string" == typeof t ? h.resources[t].texture : void 0
    }
    ,
    t.exports = h
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this),
        this.desiredFPS = s.desiredFPS || 30,
        this.updateOrder = [];
        var t, e, i;
        for (t in r.updateOrder)
            e = r.updateOrder[t],
            (i = r.systems[e]) && (this.updateOrder.push(e),
            i.init && i.init(this))
    }
    var n = i(2)
      , o = (i(8),
    i(7),
    i(29))
      , s = i(10).default;
    r.prototype = Object.create(n.prototype),
    r.prototype.constructor = r,
    r.prototype._awake = function() {
        var t, e;
        for (t in this.updateOrder)
            (e = r.systems[this.updateOrder[t]]).awake && e.awake(this);
        this.emit("awake"),
        this.awake()
    }
    ,
    r.prototype._update = function(t, e) {
        var i, n;
        for (i in this.updateOrder)
            (n = r.systems[this.updateOrder[i]]) && n.preUpdate && n.preUpdate(this, t, e);
        this.emit("preUpdate", t, e),
        this.preUpdate(t, e);
        for (i in this.updateOrder)
            (n = r.systems[this.updateOrder[i]]) && n.update && n.update(this, t, e);
        this.emit("update", t, e),
        this.update(t, e);
        for (i in this.updateOrder)
            (n = r.systems[this.updateOrder[i]]) && n.postUpdate && n.postUpdate(this, t, e);
        this.emit("postUpdate", t, e),
        this.postUpdate(t, e)
    }
    ,
    r.prototype._freeze = function() {
        this.emit("freeze"),
        this.freeze();
        var t, e;
        for (t in this.updateOrder)
            (e = r.systems[this.updateOrder[t]]) && e.freeze && e.freeze(this)
    }
    ,
    r.prototype.awake = function() {}
    ,
    r.prototype.preUpdate = function() {}
    ,
    r.prototype.update = function() {}
    ,
    r.prototype.postUpdate = function() {}
    ,
    r.prototype.freeze = function() {}
    ,
    r.prototype.pause = function() {}
    ,
    r.prototype.resume = function() {}
    ,
    r.prototype.createLayer = function(t, e) {
        return o.createLayer(this, t, e),
        this
    }
    ,
    Object.assign(r, {
        systems: {},
        updateOrder: ["Actor", "Animation", "Physics", "Renderer"],
        registerSystem: function(t, e) {
            r.systems[t] && console.log("Warning: override [" + t + "] system!"),
            r.systems[t] = e
        }
    }),
    t.exports = r
}
, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    e.PI_2 = 2 * Math.PI,
    e.HALF_PI = .5 * Math.PI,
    e.clamp = function(t, e, i) {
        return t < e ? e : t > i ? i : t
    }
    ,
    e.wrap = function(t, e, i) {
        return t < e ? i + t % i : t >= i ? t % i : t
    }
    ,
    e.circWrap = function(t) {
        return wrap(t, 0, PI_2)
    }
    ,
    e.round = function(t, e) {
        return e = e ? Math.pow(10, e) : 1,
        Math.round(t * e) / e
    }
    ,
    e.hex2rgb = function(t, e) {
        return e = e || [],
        e[0] = (t >> 16 & 255) / 255,
        e[1] = (t >> 8 & 255) / 255,
        e[2] = (255 & t) / 255,
        e
    }
    ,
    e.hex2string = function(t) {
        return t = t.toString(16),
        "#" + (t = "000000".substr(0, 6 - t.length) + t)
    }
    ,
    e.rgb2hex = function(t) {
        return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
    }
    ,
    e.merge = function(t) {
        var e, r, o;
        for (i = 1; i < arguments.length; i++) {
            e = arguments[i];
            for (r in e)
                o = e[r],
                void 0 !== (0)[r] && "object" === n((0)[r]) ? this.merge((0)[r], o) : (0)[r] = o
        }
        return 0
    }
    ,
    e.removeItems = function(t, e, i) {
        var r = t.length;
        if (!(e >= r || 0 === i)) {
            for (var n = e, o = r - (i = e + i > r ? r - e : i); n < o; ++n)
                t[n] = t[n + i];
            t.length = o
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        S = requestAnimationFrame(n)
    }
    function n(t) {
        S = requestAnimationFrame(n),
        w.paused || a(w.scene, t)
    }
    function o() {
        function t() {
            window.focus()
        }
        window.removeEventListener("load", o),
        document.removeEventListener("DOMContentLoaded", o),
        v();
        var e = Object.assign({
            canvasId: "game"
        }, T.renderer);
        switch (w.view = document.getElementById(e.canvasId),
        w.containerView = document.getElementById("container111"),
        w.view.addEventListener("mousedown", t),
        w.view.addEventListener("touchstart", t),
        g.resolution = e.resolution = w.resolution,
        g.init(w.width, w.height, e),
        r(),
        T.resizeMode) {
        case "letter-box":
            A = l;
            break;
        case "crop":
            A = c;
            break;
        case "scale-inner":
            A = p;
            break;
        case "scale-outer":
            A = d;
            break;
        default:
            A = l
        }
        w.resizeFunc = A,
        window.addEventListener("resize", A, !1),
        window.addEventListener("orientationchange", A, !1),
        A(!0);
        var i = function() {
            T.pauseOnHide && w.resume("visibility")
        }
          , n = function() {
            T.pauseOnHide && w.pause("visibility")
        }
          , a = function() {
            var t, e, i = {
                hidden: "visibilitychange",
                mozHidden: "mozvisibilitychange",
                webkitHidden: "webkitvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (t in i)
                if (t in document) {
                    e = i[t];
                    break
                }
            return function(i) {
                return i && document.addEventListener(e, i, !1),
                !document[t]
            }
        }();
        if (a(function() {
            a() ? setTimeout(i, 300) : n()
        }),
        window.addEventListener ? (window.addEventListener("focus", function() {
            setTimeout(i, 300)
        }, !1),
        window.addEventListener("blur", n, !1)) : (window.attachEvent("focus", function() {
            setTimeout(i, 300)
        }),
        window.attachEvent("blur", n)),
        b.mobile && T.showRotatePrompt) {
            var h = document.createElement("div");
            if (h.innerHTML = T.rotatePromptImg ? "" : T.rotatePromptMsg,
            h.style.position = "absolute",
            h.style.height = "12px",
            h.style.textAlign = "center",
            h.style.left = 0,
            h.style.right = 0,
            h.style.top = 0,
            h.style.bottom = 0,
            h.style.margin = "auto",
            h.style.display = "none",
            h.style.color = T.rotatePromptFontColor || "black",
            w.rotatePromptElm = h,
            document.body.appendChild(h),
            T.rotatePromptImg) {
                var u = new Image;
                u.onload = function() {
                    h.image = u,
                    h.appendChild(u),
                    s()
                }
                ,
                u.src = T.rotatePromptImg,
                u.className = "center",
                w.rotatePromptImg = u
            }
            var f = w.width / w.height >= 1;
            w.on("resize", function() {
                window.innerWidth < window.innerHeight && f ? w.rotatePromptVisible = !0 : window.innerWidth > window.innerHeight && !f ? w.rotatePromptVisible = !0 : w.rotatePromptVisible = !1,
                w.view.style.display = w.rotatePromptVisible ? "none" : "block",
                w.rotatePromptElm.style.backgroundColor = T.rotatePromptBGColor || "black",
                w.rotatePromptElm.style.display = w.rotatePromptVisible ? "-webkit-box" : "none",
                w.rotatePromptElm.style.display = w.rotatePromptVisible ? "-webkit-flex" : "none",
                w.rotatePromptElm.style.display = w.rotatePromptVisible ? "-ms-flexbox" : "none",
                w.rotatePromptElm.style.display = w.rotatePromptVisible ? "flex" : "none",
                s(),
                w.rotatePromptVisible ? w.pause("rotate") : w.resume("rotate")
            })
        }
        w.emit("boot"),
        w.emit("booted")
    }
    function s() {
        w.rotatePromptElm.style.width = window.innerWidth + "px",
        w.rotatePromptElm.style.height = window.innerHeight + "px",
        f(w.rotatePromptElm, window.innerWidth, window.innerHeight);
        var t, e, i = w.rotatePromptImg.width / w.rotatePromptImg.height;
        i < window.innerWidth / window.innerHeight ? (t = Math.floor(.8 * window.innerHeight),
        e = Math.floor(t / i)) : (e = Math.floor(.8 * window.innerWidth),
        t = Math.floor(e * i)),
        w.rotatePromptImg.style.height = t + "px",
        w.rotatePromptImg.style.width = e + "px"
    }
    function a(t, e) {
        if (M > 0 && (R = e - M),
        M = e,
        C > 1)
            O = 0,
            C = 0,
            u(t);
        else {
            for (P = t ? t.desiredFPS : 30,
            B = (L = 1e3 / P) * w.speed,
            O += Math.max(Math.min(3 * L, R), 0),
            I = 0; O >= L; )
                O -= L,
                D = I,
                w.delta = L,
                m.update(B),
                h(t),
                I += 1;
            I > F ? C += 1 : I < F && (C = 0),
            F = I,
            u(t)
        }
    }
    function h(t) {
        if (E) {
            var e = E;
            E = null,
            w.scene && w.scene._freeze(),
            w.scene = null,
            e.inst || (e.inst = new e.ctor),
            w.scene = e.inst,
            w.scene._awake(),
            A()
        }
        t && t._update(B, .001 * B)
    }
    function u(t) {
        (N -= 1) < 0 && (N = T.skipFrame || 0,
        t && g.render(t))
    }
    function l(t) {
        z.x = window.innerWidth,
        z.y = window.innerHeight,
        j = _.outerBoxResize(z, w.viewSize),
        t && g.resize(w.viewSize.x, w.viewSize.y),
        k = Math.floor(w.viewSize.x * j.scale),
        U = Math.floor(w.viewSize.y * j.scale),
        w.view.style.width = k + "px",
        w.view.style.height = U + "px",
        w.containerView.style.width = k + "px",
        w.containerView.style.height = U + "px",
        w.containerView.style.marginTop = Math.floor(j.top) + "px",
        w.containerView.style.marginLeft = Math.floor(j.left) + "px",
        w.emit("resize", w.viewSize.x, w.viewSize.y),
        b.mobile && window.scrollTo(0, 1)
    }
    function c() {
        w.viewSize.set(window.innerWidth, window.innerHeight),
        w.view.style.width = w.containerView.style.width = window.innerWidth + "px",
        w.view.style.height = w.containerView.style.height = window.innerHeight + "px",
        g.resize(w.viewSize.x, w.viewSize.y),
        w.emit("resize", w.viewSize.x, w.viewSize.y),
        b.mobile && window.scrollTo(0, 1)
    }
    function p() {
        w.viewSize.set(window.innerWidth, window.innerHeight),
        w.view.style.width = w.containerView.style.width = window.innerWidth + "px",
        w.view.style.height = w.containerView.style.height = window.innerHeight + "px",
        g.resize(w.viewSize.x, w.viewSize.y),
        w.scene && (G = w.scene.stage,
        j = _.innerBoxResize(w.viewSize, w.size),
        G.scale.set(j.scale),
        G.position.set(j.left, j.top)),
        w.emit("resize", w.viewSize.x, w.viewSize.y),
        b.mobile && window.scrollTo(0, 1)
    }
    function d() {
        w.viewSize.set(window.innerWidth, window.innerHeight),
        w.view.style.width = w.containerView.style.width = window.innerWidth + "px",
        w.view.style.height = w.containerView.style.height = window.innerHeight + "px",
        g.resize(w.viewSize.x, w.viewSize.y),
        w.scene && (G = w.scene.stage,
        j = _.outerBoxResize(w.viewSize, w.size),
        G.scale.set(j.scale),
        G.position.set(j.left, j.top)),
        w.emit("resize", w.viewSize.x, w.viewSize.y),
        b.mobile && window.scrollTo(0, 1)
    }
    function f(t, e, i) {
        t.style.marginLeft = Math.floor((window.innerWidth - e) / 2) + "px",
        t.style.marginTop = Math.floor((window.innerHeight - i) / 2) + "px"
    }
    function v() {
        document.ontouchmove = function(t) {
            t.preventDefault()
        }
    }
    i(42);
    var y = i(2)
      , g = i(29)
      , m = i(43)
      , x = i(18)
      , _ = i(85)
      , b = i(19)
      , T = i(10).default
      , w = new y;
    T.renderer && T.renderer.resolution ? w.resolution = function(t) {
        if (t) {
            if ("number" == typeof t)
                return t;
            t.values.sort(function(t, e) {
                return t - e
            });
            for (var e = w.width / w.height, i = window.innerWidth / window.innerHeight, r = t.retina ? window.devicePixelRatio : 1, n = t.values[0], o = 0; o < t.values.length && (n = t.values[o],
            !(e >= i && window.innerWidth * r <= w.width * n || e < i && window.innerHeight * r <= w.height * n)); o++)
                ;
            return n
        }
        return 1
    }(T.renderer.resolution) : w.resolution = 1;
    var E = null
      , S = 0
      , A = l
      , C = 0
      , M = -1
      , R = 0
      , O = 0
      , P = 30
      , D = 0
      , F = 0
      , L = 0
      , B = 0
      , I = 0
      , N = 0;
    Object.assign(w, {
        version: "v0.4.1-dev",
        view: null,
        containerView: null,
        size: x.create(T.width || 640, T.height || 400),
        viewSize: x.create(T.width || 640, T.height || 400),
        resizeFunc: null,
        scenes: {},
        scene: null,
        pauses: {},
        speed: 1,
        delta: 0,
        rotatePromptElm: null,
        rotatePromptVisible: !1,
        addScene: function(t, e) {
            if (w.scenes[t])
                console.log("Scene [" + t + "] is already defined!");
            else {
                var i = {
                    ctor: e,
                    inst: null
                };
                w.scenes[t] = i
            }
        },
        setScene: function(t, e) {
            if (t == "Playground") {
                var self = this;
                if (!window.IS_FIRST) {
                    window.IS_FIRST = true;
                this.setScene2(t, e);
                }
                else {
                    setLoadingVisible(true, false, function () {
                self.setScene2(t, e);
                    })
                }
            }
            else {
                this.setScene2(t, e);
            }
        },
        setScene2: function(t, e) {
            var i = w.scenes[t];
            i ? (e && (i.inst = null),
            E = i) : console.log("Scene [" + t + "] is not defined!")
        },
        startWithScene: function(t) {
            w.setScene(t),
            window.addEventListener("load", o, !1),
            document.addEventListener("DOMContentLoaded", o, !1)
        },
        start: function() {
            w.startWithScene("Loading")
        },
        pause: function(t) {
            var e, i = t || "untitled", r = !1;
            for (e in w.pauses)
                if (w.pauses.hasOwnProperty(e) && w.pauses[e]) {
                    r = !0;
                    break
                }
            w.pauses[i] = !0,
            r || w.emit("pause", i)
        },
        resume: function(t, e) {
            var i, r = t || "untitled";
            if (e) {
                for (i in w.pauses)
                    w.pauses.hasOwnProperty(i) && (w.pauses[i] = !1);
                w.emit("resume")
            } else if ("boolean" == typeof w.pauses[r]) {
                w.pauses[r] = !1;
                for (i in w.pauses)
                    if (w.pauses.hasOwnProperty(i) && w.pauses[i])
                        return;
                w.emit("resume", r)
            }
        }
    }),
    Object.defineProperty(w, "width", {
        get: function() {
            return this.size.x
        }
    }),
    Object.defineProperty(w, "height", {
        get: function() {
            return this.size.y
        }
    }),
    Object.defineProperty(w, "viewWidth", {
        get: function() {
            return this.viewSize.x
        }
    }),
    Object.defineProperty(w, "viewHeight", {
        get: function() {
            return this.viewSize.y
        }
    }),
    Object.defineProperty(w, "paused", {
        get: function() {
            for (var t in w.pauses)
                if (w.pauses[t])
                    return !0;
            return !1
        }
    });
    var k, U, j, G, z = {
        x: 1,
        y: 1
    };
    t.exports = w,
    window.R_GAME_MANAGER = w
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        if (t)
            return t instanceof u.Texture ? t : t.texture && t.texture instanceof u.Texture ? t.texture : "string" == typeof t || Array.isArray(t) ? p.getTexture(t) : "string" == typeof t.texture || Array.isArray(t.texture) ? p.getTexture(t.texture) : void 0
    }
    function o(t) {
        a.call(this),
        this.id = o.uid++,
        this.name = t,
        this.tag = null,
        this.removed = !1,
        this.canEverTick = !1,
        this.sprite = null,
        this.body = null,
        this.position = h.create(),
        this.scene = null,
        this.layer = null,
        this.behaviorList = [],
        this.behaviors = {},
        this._rotation = 0,
        this.CTOR = o
    }
    function s(t, e) {
        var i;
        for (i in e)
            switch (i) {
            case "alpha":
            case "width":
            case "height":
            case "rotation":
            case "visible":
            case "x":
            case "y":
            case "interactive":
            case "tint":
            case "boundsPadding":
                t[i] = e[i];
                break;
            case "pivot":
            case "position":
            case "scale":
            case "skew":
            case "anchor":
            case "tilePosition":
            case "tileScale":
                t[i].x = e[i].x || 0,
                t[i].y = e[i].y || 0;
                break;
            case "blendMode":
                t.blendMode = u.BLEND_MODES[e[i]]
            }
    }
    var a = r(2)
      , h = r(18)
      , u = r(11)
      , l = r(76)
      , c = r(196)
      , p = r(5)
      , d = r(6)
      , f = r(7)
      , v = [h.create(-4, -4), h.create(4, -4), h.create(4, 4), h.create(-4, 4)];
    o.prototype = Object.create(a.prototype),
    o.prototype.constructor = o,
    o.uid = 0,
    o.canBePooled = !1,
    o.types = {
        Actor: o
    },
    o.register = function(t, e) {
        o.types[t] ? console.log('[WARNING]: "' + t + '" actor is already registered!') : o.types[t] = e
    }
    ,
    Object.defineProperty(o.prototype, "rotation", {
        get: function() {
            return this._rotation
        },
        set: function(t) {
            this._rotation = t,
            this.sprite && (this.sprite.rotation = this._rotation),
            this.body && (this.body.rotation = this._rotation)
        }
    }),
    o.prototype.ready = function() {}
    ,
    o.prototype.update = function(t, e) {}
    ,
    o.prototype.remove = function() {
        this.sprite && this.sprite.remove(),
        this.body && this.body.remove(),
        this.scene && this.scene.removeActor(this),
        this.scene = null,
        this.layer = null
    }
    ,
    o.prototype.initEmpty = function(t) {
        return this.addEmpty(t, null, "sprite", !1),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addEmpty = function(t, e, i, r) {
        var n = new u.Container;
        return s(n, t),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(n) : e && e.addChild(n),
        i && (this[i] = n),
        r ? n : this
    }
    ,
    o.prototype.initSprite = function(t) {
        return this.addSprite(t, null, "sprite"),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addSprite = function(t, e, i, r) {
        var o = n(t.texture)
          , a = new u.Sprite(o);
        return a.anchor.set(.5),
        s(a, t),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(a) : e && e.addChild(a),
        i && (this[i] = a),
        r ? a : this
    }
    ,
    o.prototype.initGraphics = function(t, e, i) {
        return this.addGraphics(t, null, "sprite"),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addGraphics = function(t, e, i, r) {
        var n = t || {}
          , o = new u.Graphics;
        o.beginFill(n.color || 0);
        var a = n.shape || "Box";
        if ("Circle" === a)
            o.drawCircle(0, 0, n.radius || 8);
        else if ("Box" === a) {
            var h = n.width || 8
              , l = n.height || 8;
            o.drawRect(.5 * -h, .5 * -l, h, l)
        } else if ("Polygon" === a) {
            var c = n.points || v;
            o.moveTo(c[0].x, c[0].y);
            for (var p = 1; p < c.length; p++)
                o.lineTo(c[p].x, c[p].y)
        }
        return o.endFill(),
        s(o, n),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(o) : e && e.addChild(o),
        i && (this[i] = o),
        r ? o : this
    }
    ,
    o.prototype.initAnimatedSprite = function(t) {
        return this.addAnimatedSprite(t, null, "sprite"),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addAnimatedSprite = function(t, e, i, r) {
        var n = t || {}
          , o = new u.extras.AnimatedSprite(n.textures);
        o.anchor.set(.5);
        var a = n.anims;
        if (Array.isArray(a))
            for (var h = 0; h < a.length; h++)
                o.addAnim(a[h].name, a[h].frames, a[h].settings);
        return s(o, n),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(o) : e && e.addChild(o),
        i && (this[i] = o),
        r ? o : this
    }
    ,
    o.prototype.initTilingSprite = function(t) {
        return this.addTilingSprite(t, null, "sprite"),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addTilingSprite = function(t, e, i, r) {
        var o = n(t.texture)
          , a = Number.isFinite(t.width) ? t.width : o.width
          , h = Number.isFinite(t.height) ? t.height : o.height
          , l = new u.extras.TilingSprite(o,a,h);
        return l.anchor.set(.5),
        s(l, t),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(l) : e && e.addChild(l),
        i && (this[i] = l),
        r ? l : this
    }
    ,
    o.prototype.initText = function(t) {
        return this.addText(t, null, "sprite"),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addText = function(t, e, i, r) {
        var n = new u.Text(t.text,t,t.resolution || 1);
        return s(n, t),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(n) : e && e.addChild(n),
        i && (this[i] = n),
        r ? n : this
    }
    ,
    o.prototype.initBitmapText = function(t) {
        return this.addBitmapText(t, null, "sprite"),
        this.sprite.position = this.position,
        this.layer && this.layer.addChild(this.sprite),
        this
    }
    ,
    o.prototype.addBitmapText = function(t, e, i, r) {
        var n = new u.extras.BitmapText(t.text,t);
        return s(n, t),
        "string" == typeof e ? e && this[e] && e !== i && this[e].addChild(n) : e && e.addChild(n),
        i && (this[i] = n),
        r ? n : this
    }
    ,
    o.prototype.initFromData = function(t) {
        var e, i = t.sprite, r = t.body;
        if (i && (this["init" + i.type](i),
        Array.isArray(i.children)))
            for (e = 0; e < i.children.length; e++)
                this._addChildFromData(i.children[e], this.sprite);
        return r && this.initBody(r),
        this
    }
    ,
    o.prototype._addChildFromData = function(t, e) {
        var r = this["add" + t.type](t, e, t.key, !0);
        if (Array.isArray(t.children))
            for (i = 0; i < t.children.length; i++)
                this._addChildFromData(t.children[i], r)
    }
    ,
    o.prototype.initBody = function(t) {
        var e = t || {}
          , i = e.shape || "Box";
        if ("Circle" === i) {
            var r = e.radius;
            Number.isFinite(r) || this.sprite && (r = this.sprite.width / 2),
            i = new l.Circle(r)
        } else if ("Box" === i) {
            var n = e.width
              , o = e.height;
            Number.isFinite(n) ? Number.isFinite(o) || (o = n) : this.sprite ? (n = this.sprite.width,
            o = this.sprite.height) : n = o = 8,
            i = new l.Box(n,o)
        } else
            "Polygon" === i && (i = new l.Polygon(e.points || v));
        var s = Object.assign({}, e);
        return delete s.shape,
        delete s.radius,
        delete s.width,
        delete s.height,
        delete s.points,
        s.shape = i,
        this.body = new l.Body(s),
        this.body.position = this.position,
        this.scene && this.scene.world.addBody(this.body),
        this
    }
    ,
    o.prototype.behave = function(t, e) {
        var i = t;
        return "string" == typeof t && (i = c.behaviors[t]),
        "function" == typeof i && (i = new i),
        this.behaviors[i.type] ? (console.log('An instance of behavior "' + i.type + '" is already added!'),
        this) : (this.behaviorList.push(i),
        this.behaviors[i.type] = i,
        i.addTo(this),
        i.setup(e || {}),
        i.activate(),
        this)
    }
    ,
    o.prototype.getBehaviorByType = function(t) {
        return this.behaviors[t]
    }
    ,
    o.prototype.activateBehavior = function(t) {
        var e = this.behaviors[t];
        return e && e.activate(),
        this
    }
    ,
    o.prototype.deactivateBehavior = function(t) {
        var e = this.behaviors[t];
        return e && e.deactivate(),
        this
    }
    ,
    o.prototype.updateBehaviors = function(t, e) {
        var i, r;
        for (i = 0; i < this.behaviorList.length; i++)
            (r = this.behaviorList[i]).isActive && r.update && r.update(t, e)
    }
    ,
    t.exports = o,
    Object.assign(d.prototype, {
        spawnActor: function(t, e, i, r, n) {
            var s, a = n || {}, h = r || "stage";
            "string" == typeof h ? (s = this[h]) || (s = this.stage) : h instanceof u.Container && (s = h);
            var l, c = t;
            return "string" != typeof t || (c = o.types[t]) ? (l = c.canBePooled ? c.create(a) : new c(a),
            l.CTOR = c,
            l.scene = this,
            l.layer = s,
            l.sprite && (l.sprite.actor = l,
            s.addChild(l.sprite)),
            l.body && (l.body.actor = l,
            this.world.addBody(l.body)),
            l.position.set(e || 0, i || 0),
            this.addActor(l, a.tag),
            a.name && (l.name = a.name,
            this.actorSystem.namedActors[a.name] = l),
            l) : void console.log('[WARNING]: Actor type "' + t + '" does not exist!')
        },
        addActor: function(t, e) {
            var i = e || "0";
            t.tag = i,
            this.actorSystem.actors[i] || (this.actorSystem.actors[i] = [],
            this.actorSystem.activeTags.push(i)),
            this.actorSystem.actors[i].indexOf(t) < 0 && (t.removed = !1,
            this.actorSystem.actors[i].push(t)),
            t.ready()
        },
        removeActor: function(t) {
            t && (t.removed = !0),
            t.name && this.actorSystem.namedActors[t.name] === t && (this.actorSystem.namedActors[t.name] = null)
        },
        pauseActorsTagged: function(t) {
            return this.actorSystem.actors[t] && (f.removeItems(this.actorSystem.activeTags, this.actorSystem.activeTags.indexOf(t), 1),
            this.actorSystem.deactiveTags.push(t)),
            this
        },
        resumeActorsTagged: function(t) {
            return this.actorSystem.actors[t] && (f.removeItems(this.actorSystem.deactiveTags, this.actorSystem.deactiveTags.indexOf(t), 1),
            this.actorSystem.activeTags.push(t)),
            this
        }
    }),
    d.registerSystem("Actor", {
        init: function(t) {
            t.actorSystem = {
                activeTags: ["0"],
                deactiveTags: [],
                actors: {
                    0: []
                },
                namedActors: {}
            }
        },
        update: function(t, e, i) {
            var r, n, o, s;
            for (n in t.actorSystem.actors)
                if (!(t.actorSystem.activeTags.indexOf(n) < 0))
                    for (o = t.actorSystem.actors[n],
                    r = 0; r < o.length; r++)
                        (s = o[r]).removed || (s.behaviorList.length > 0 && s.updateBehaviors(e, i),
                        s.canEverTick && s.update(e, i)),
                        s.removed && (s.CTOR.canBePooled && s.CTOR.recycle(s),
                        f.removeItems(o, r--, 1))
        },
        freeze: function(t) {
            var e, i, r, n;
            for (i in t.actorSystem.actors)
                if (!(t.actorSystem.activeTags.indexOf(i) < 0))
                    for (r = t.actorSystem.actors[i],
                    e = 0; e < r.length; e++)
                        (n = r[e]).removed && (n.CTOR.canBePooled && n.CTOR.recycle(n),
                        f.removeItems(r, e--, 1))
        }
    })
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0,
    e.default = {
        width: 480,
        height: 720,
        desiredFPS: 60,
        skipFrame: 0,
        resizeMode: "letter-box",
        pauseOnHide: !0,
        showRotatePrompt: !0,
        rotatePromptBGColor: "black",
        rotatePromptFontColor: "white",
        rotatePromptImg: "media/rotate.png",
        rotatePromptMsg: "Please Rotate Your Device!",
        renderer: {
            webGL: !0,
            resolution: {
                retina: !0,
                values: [1]
            }
        },
        storage: {
            id: "hero-cant-fly"
        },
        physics: {
            solver: "AABB",
            broadPhase: "Simple",
            spatialFactor: 8
        },
        firstScene: "Main"
    }
}
, function(t, e, i) {
    "use strict";
    i(42);
    var r = i(7)
      , n = t.exports = i(0);
    n.extras = i(61),
    n.interaction = i(123),
    n.filters = i(125),
    n.mesh = i(172);
    var o = null;
    n.addObject = function(t) {
        o && o.displayObjects.indexOf(t) < 0 && o.displayObjects.push(t)
    }
    ,
    n.removeObject = function(t) {
        o && r.removeItems(o.displayObjects, o.displayObjects.indexOf(t), 1)
    }
    ,
    Object.assign(n.DisplayObject.prototype, {
        remove: function() {
            this.parent && this.parent.removeChild(this)
        },
        addTo: function(t) {
            return t.addChild(this),
            this
        }
    });
    var s = i(5)
      , a = i(185);
    s.addMiddleware(s.ResourceLoader.middleware.parsing.blob),
    s.addMiddleware(a.textureParser),
    s.addMiddleware(a.spritesheetParser),
    s.addMiddleware(a.bitmapFontParser);
    var h = s.ResourceLoader.Resource;
    h.setExtensionXhrType("fnt", h.XHR_RESPONSE_TYPE.DOCUMENT);
    var u = i(29);
    i(10).default,
    u.init = function(t, e, i) {
        i.view = document.getElementById(i.canvasId),
        i.webGL ? this.instance = n.autoDetectRenderer(t, e, i) : this.instance = new n.CanvasRenderer(t,e,i)
    }
    ,
    u.resize = function(t, e) {
        this.instance.resize(t, e)
    }
    ,
    u.render = function(t) {
        this.instance.render(t.stage)
    }
    ,
    u.createLayer = function(t, e, i) {
        var r = i || "stage";
        t[e] = (new n.Container).addTo(t[r])
    }
    ;
    var l = i(6);
    l.registerSystem("Renderer", {
        init: function(t) {
            t.stage = new n.Container,
            t.displayObjects = [],
            o = t
        },
        awake: function(t) {
            void 0 === t._backgroundColor && (t._backgroundColor = 2228275),
            u.instance.backgroundColor = t._backgroundColor,
            o = t
        },
        update: function(t, e, i) {
            for (var r = 0; r < t.displayObjects.length; r++)
                t.displayObjects[r].update(i)
        }
    }),
    Object.defineProperty(l.prototype, "backgroundColor", {
        get: function() {
            return this._backgroundColor
        },
        set: function(t) {
            u.instance.backgroundColor = this._backgroundColor = t
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        this.renderer = t,
        this.renderer.on("context", this.onContextChange, this)
    }
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.onContextChange = function() {}
    ,
    r.prototype.destroy = function() {
        this.renderer.off("context", this.onContextChange, this),
        this.renderer = null
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(71)
      , n = i(72)
      , o = i(189);
    r.Data = n,
    r.PersistentData = o,
    r.session = new n,
    r.persistent = new o,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, n, o) {
        if (a.call(this),
        this.noFrame = !1,
        e || (this.noFrame = !0,
        e = new h.Rectangle(0,0,1,1)),
        t instanceof r && (t = t.baseTexture),
        this.baseTexture = t,
        this._frame = e,
        this.trim = n,
        this.valid = !1,
        this.requiresUpdate = !1,
        this._uvs = null,
        this.width = 0,
        this.height = 0,
        this.crop = i || e,
        this._rotate = +(o || 0),
        !0 === o)
            this._rotate = 2;
        else if (this._rotate % 2 != 0)
            throw "attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
        t.hasLoaded ? (this.noFrame && (e = new h.Rectangle(0,0,t.width,t.height),
        t.on("update", this.onBaseTextureUpdated, this)),
        this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this)
    }
    var n = i(20)
      , o = i(49)
      , s = i(50)
      , a = i(2)
      , h = i(3)
      , u = i(4);
    r.prototype = Object.create(a.prototype),
    r.prototype.constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        frame: {
            get: function() {
                return this._frame
            },
            set: function(t) {
                if (this._frame = t,
                this.noFrame = !1,
                this.width = t.width,
                this.height = t.height,
                !this.trim && !this.rotate && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height))
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                this.valid = t && t.width && t.height && this.baseTexture.hasLoaded,
                this.trim ? (this.width = this.trim.width,
                this.height = this.trim.height,
                this._frame.width = this.trim.width,
                this._frame.height = this.trim.height) : this.crop = t,
                this.valid && this._updateUvs()
            }
        },
        rotate: {
            get: function() {
                return this._rotate
            },
            set: function(t) {
                this._rotate = t,
                this.valid && this._updateUvs()
            }
        }
    }),
    r.prototype.update = function() {
        this.baseTexture.update()
    }
    ,
    r.prototype.onBaseTextureLoaded = function(t) {
        this.noFrame ? this.frame = new h.Rectangle(0,0,t.width,t.height) : this.frame = this._frame,
        this.emit("update", this)
    }
    ,
    r.prototype.onBaseTextureUpdated = function(t) {
        this._frame.width = t.width,
        this._frame.height = t.height,
        this.emit("update", this)
    }
    ,
    r.prototype.destroy = function(t) {
        this.baseTexture && (t && this.baseTexture.destroy(),
        this.baseTexture.off("update", this.onBaseTextureUpdated, this),
        this.baseTexture.off("loaded", this.onBaseTextureLoaded, this),
        this.baseTexture = null),
        this._frame = null,
        this._uvs = null,
        this.trim = null,
        this.crop = null,
        this.valid = !1,
        this.off("dispose", this.dispose, this),
        this.off("update", this.update, this)
    }
    ,
    r.prototype.clone = function() {
        return new r(this.baseTexture,this.frame,this.crop,this.trim,this.rotate)
    }
    ,
    r.prototype._updateUvs = function() {
        this._uvs || (this._uvs = new s),
        this._uvs.set(this.crop, this.baseTexture, this.rotate)
    }
    ,
    r.fromImage = function(t, e, i) {
        var o = u.TextureCache[t];
        return o || (o = new r(n.fromImage(t, e, i)),
        u.TextureCache[t] = o),
        o
    }
    ,
    r.fromFrame = function(t) {
        var e = u.TextureCache[t];
        if (!e)
            throw new Error('The frameId "' + t + '" does not exist in the texture cache');
        return e
    }
    ,
    r.fromCanvas = function(t, e) {
        return new r(n.fromCanvas(t, e))
    }
    ,
    r.fromVideo = function(t, e) {
        return "string" == typeof t ? r.fromVideoUrl(t, e) : new r(o.fromVideo(t, e))
    }
    ,
    r.fromVideoUrl = function(t, e) {
        return new r(o.fromUrl(t, e))
    }
    ,
    r.addTextureToCache = function(t, e) {
        u.TextureCache[e] = t
    }
    ,
    r.removeTextureFromCache = function(t) {
        var e = u.TextureCache[t];
        return delete u.TextureCache[t],
        delete u.BaseTextureCache[t],
        e
    }
    ,
    r.EMPTY = new r(new n)
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t)
    }
    var n = i(12);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.start = function() {}
    ,
    r.prototype.stop = function() {
        this.flush()
    }
    ,
    r.prototype.flush = function() {}
    ,
    r.prototype.render = function(t) {}
}
, function(t, e, i) {
    "use strict";
    var r = i(6)
      , n = i(7)
      , o = i(193)
      , s = i(194).Action;
    Object.assign(r.prototype, {
        pauseAnimationsTagged: function(t) {
            return this.animationSystem.anims[t] && (n.removeItems(this.animationSystem.activeTags, this.animationSystem.activeTags.indexOf(t), 1),
            this.animationSystem.deactiveTags.push(t)),
            this
        },
        resumeAnimationsTagged: function(t) {
            return this.animationSystem.anims[t] && (n.removeItems(this.animationSystem.deactiveTags, this.animationSystem.deactiveTags.indexOf(t), 1),
            this.animationSystem.activeTags.push(t)),
            this
        }
    }),
    r.registerSystem("Animation", {
        init: function(t) {
            t.animationSystem = {
                activeTags: ["0"],
                deactiveTags: [],
                anims: {
                    0: []
                }
            }
        },
        preUpdate: function(t) {
            var e, i, r, o;
            for (i in t.animationSystem.anims)
                if (!(t.animationSystem.activeTags.indexOf(i) < 0))
                    for (r = t.animationSystem.anims[i],
                    e = 0; e < r.length; e++)
                        (o = r[e]).removed && (o.recycle(),
                        n.removeItems(r, e--, 1))
        },
        update: function(t, e) {
            var i, r, n, o;
            for (r in t.animationSystem.anims)
                if (!(t.animationSystem.activeTags.indexOf(r) < 0))
                    for (n = t.animationSystem.anims[r],
                    i = 0; i < n.length; i++)
                        (o = n[i]).removed || o._step(e)
        }
    }),
    t.exports = {
        Tween: o,
        Action: s
    }
}
, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        this.x = t || 0,
        this.y = e || (0 !== e ? this.x : 0)
    }
    var n = i(7)
      , o = [];
    r.prototype.set = function(t, e) {
        return this.x = t || 0,
        this.y = e || (0 !== e ? this.x : 0),
        this
    }
    ,
    r.prototype.clone = function() {
        return r.create(this.x, this.y)
    }
    ,
    r.prototype.copy = function(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    }
    ,
    r.prototype.add = function(t, e) {
        return this.x += t instanceof r ? t.x : t,
        this.y += t instanceof r ? t.y : e || (0 !== e ? t : 0),
        this
    }
    ,
    r.prototype.subtract = function(t, e) {
        return this.x -= t instanceof r ? t.x : t,
        this.y -= t instanceof r ? t.y : e || (0 !== e ? t : 0),
        this
    }
    ,
    r.prototype.multiply = function(t, e) {
        return this.x *= t instanceof r ? t.x : t,
        this.y *= t instanceof r ? t.y : e || (0 !== e ? t : 0),
        this
    }
    ,
    r.prototype.divide = function(t, e) {
        return this.x /= t instanceof r ? t.x : t,
        this.y /= t instanceof r ? t.y : e || (0 !== e ? t : 0),
        this
    }
    ,
    r.prototype.distance = function(t) {
        var e = t.x - this.x
          , i = t.y - this.y;
        return Math.sqrt(e * e + i * i)
    }
    ,
    r.prototype.squaredDistance = function(t) {
        var e = t.x - this.x
          , i = t.y - this.y;
        return e * e + i * i
    }
    ,
    r.prototype.length = function() {
        return Math.sqrt(this.squaredLength())
    }
    ,
    r.prototype.squaredLength = function() {
        return this.x * this.x + this.y * this.y
    }
    ,
    r.prototype.dot = function(t) {
        return t instanceof r ? this.x * t.x + this.y * t.y : this.x * this.x + this.y * this.y
    }
    ,
    r.prototype.dotNormalized = function(t) {
        var e = this.length()
          , i = this.x / e
          , n = this.y / e;
        if (t instanceof r) {
            var o = t.length();
            return i * (t.x / o) + n * (t.y / o)
        }
        return i * i + n * n
    }
    ,
    r.prototype.rotate = function(t) {
        var e = Math.cos(t)
          , i = Math.sin(t)
          , r = this.x * e - this.y * i
          , n = this.y * e + this.x * i;
        return this.x = r,
        this.y = n,
        this
    }
    ,
    r.prototype.normalize = function() {
        var t = this.length();
        return this.x /= t || 1,
        this.y /= t || 1,
        this
    }
    ,
    r.prototype.limit = function(t) {
        return this.x = n.clamp(this.x, -t.x, t.x),
        this.y = n.clamp(this.y, -t.y, t.y),
        this
    }
    ,
    r.prototype.angle = function(t) {
        return t ? Math.atan2(t.y - this.y, t.x - this.x) : Math.atan2(this.y, this.x)
    }
    ,
    r.prototype.angleFromOrigin = function(t) {
        return Math.atan2(t.y, t.x) - Math.atan2(this.y, this.x)
    }
    ,
    r.prototype.round = function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    ,
    r.prototype.equals = function(t) {
        return t.x === this.x && t.y === this.y
    }
    ,
    r.prototype.perp = function() {
        var t = this.x;
        return this.x = this.y,
        this.y = -t,
        this
    }
    ,
    r.prototype.reverse = function() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    ,
    r.prototype.project = function(t) {
        var e = this.dot(t) / t.squaredLength();
        return this.x = e * t.x,
        this.y = e * t.y,
        this
    }
    ,
    r.prototype.projectN = function(t) {
        var e = this.dot(t);
        return this.x = e * t.x,
        this.y = e * t.y,
        this
    }
    ,
    r.prototype.reflect = function(t) {
        var e = this.x
          , i = this.y;
        return this.project(t).multiply(2),
        this.x -= e,
        this.y -= i,
        this
    }
    ,
    r.prototype.reflectN = function(t) {
        var e = this.x
          , i = this.y;
        return this.projectN(t).multiply(2),
        this.x -= e,
        this.y -= i,
        this
    }
    ,
    r.prototype.sign = function(t) {
        return this.y * t.x > this.x * t.y ? -1 : 1
    }
    ,
    r.create = function(t, e) {
        var i = o.pop();
        return i ? i.set(t, e) : i = new r(t,e),
        i
    }
    ,
    r.recycle = function(t) {
        o.push(t)
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    t.exports = function() {
        var t = {}
          , e = navigator.userAgent
          , i = e.split("[FBAN");
        void 0 !== i[1] && (e = i[0],
        t.facebook = !0),
        void 0 !== (i = e.split("Twitter"))[1] && (e = i[0],
        t.twitter = !0),
        t.linux = /Linux/.test(e),
        t.macOS = /Mac OS/.test(e),
        t.windows = /Windows/.test(e),
        t.ie9 = /MSIE 9/i.test(e),
        t.ie10 = /MSIE 10/i.test(e),
        t.ie11 = /rv:11.0/i.test(e),
        t.ie = t.ie10 || t.ie11 || t.ie9,
        t.iPod = /iPod/i.test(e),
        t.iPhone = /iPhone/i.test(e),
        t.iPhone4 = t.iPhone && 2 === t.pixelRatio && 920 === t.screen.height,
        t.iPhone5 = t.iPhone && 2 === t.pixelRatio && 1096 === t.screen.height,
        t.iPad = /iPad/i.test(e),
        t.iPadRetina = t.iPad && 2 === t.pixelRatio,
        t.iOS = t.iPod || t.iPhone || t.iPad,
        t.iOS5 = t.iOS && /OS 5/i.test(e),
        t.iOS6 = t.iOS && /OS 6/i.test(e),
        t.iOS7 = t.iOS && /OS 7/i.test(e),
        t.iOS71 = t.iOS && /OS 7_1/i.test(e),
        t.iOS8 = t.iOS && /OS 8/i.test(e),
        t.iOS9 = t.iOS && /OS 9/i.test(e),
        t.android = /Android/.test(e),
        t.androidTablet = /Android/i.test(e),
        t.androidPhone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i.test(e);
        var r = e.match(/Android.*AppleWebKit\/([\d.]+)/);
        return t.androidStock = !!(r && r[1] < 537),
        t.amazonPhone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i.test(e),
        t.amazonTablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i.test(e),
        t.windowsPhone = /IEMobile/i.test(e),
        t.windowsTablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i.test(e),
        t.blackberry = /BlackBerry/i.test(e),
        t.blackberry10 = /BB10/i.test(e),
        t.mobileOpera = /Opera Mini/i.test(e),
        t.mobileChrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i.test(e),
        t.mobileFirefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i.test(e),
        t.sevenInch = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i").test(e),
        t.crosswalk = /Crosswalk/i.test(e),
        t.cocoonJS = !!navigator.isCocoonJS,
        t.cocoonCanvasPlus = /CocoonJS/i.test(navigator.browser),
        t.ejecta = /Ejecta/i.test(e),
        t.wiiu = /Nintendo WiiU/i.test(e),
        t.tablet = t.iPad || t.androidTablet || t.windowsTablet,
        t.phone = t.iPhone || t.androidPhone || t.windowsPhone,
        t.mobile = t.iOS || t.androidPhone || t.androidTablet || t.amazonPhone || t.amazonTablet || t.windowsPhone || t.windowsTablet || t.blackberry || t.blackberry10 || t.mobileOpera || t.mobileFirefox || t.mobileChrome || t.sevenInch || t.crosswalk || t.cocoonJS || t.cocoonCanvasPlus || t.ejecta,
        t.desktop = !t.mobile || t.wiiu,
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        s.call(this),
        this.uid = n.uid(),
        this.resolution = i || 1,
        this.width = 100,
        this.height = 100,
        this.realWidth = 100,
        this.realHeight = 100,
        this.scaleMode = e || o.SCALE_MODES.DEFAULT,
        this.hasLoaded = !1,
        this.isLoading = !1,
        this.source = null,
        this.premultipliedAlpha = !0,
        this.imageUrl = null,
        this.isPowerOfTwo = !1,
        this.mipmap = !1,
        this._glTextures = {},
        t && this.loadSource(t)
    }
    var n = i(4)
      , o = i(1)
      , s = i(2);
    (r.prototype = Object.create(s.prototype)).constructor = r,
    t.exports = r,
    r.prototype.update = function() {
        this.realWidth = this.source.naturalWidth || this.source.width,
        this.realHeight = this.source.naturalHeight || this.source.height,
        this.width = this.realWidth / this.resolution,
        this.height = this.realHeight / this.resolution,
        this.isPowerOfTwo = n.isPowerOfTwo(this.realWidth, this.realHeight),
        this.emit("update", this)
    }
    ,
    r.prototype.loadSource = function(t) {
        var e = this.isLoading;
        if (this.hasLoaded = !1,
        this.isLoading = !1,
        e && this.source && (this.source.onload = null,
        this.source.onerror = null),
        this.source = t,
        (this.source.complete || this.source.getContext) && this.source.width && this.source.height)
            this._sourceLoaded();
        else if (!t.getContext) {
            this.isLoading = !0;
            var i = this;
            t.onload = function() {
                t.onload = null,
                t.onerror = null,
                i.isLoading && (i.isLoading = !1,
                i._sourceLoaded(),
                i.emit("loaded", i))
            }
            ,
            t.onerror = function() {
                t.onload = null,
                t.onerror = null,
                i.isLoading && (i.isLoading = !1,
                i.emit("error", i))
            }
            ,
            t.complete && t.src && (this.isLoading = !1,
            t.onload = null,
            t.onerror = null,
            t.width && t.height ? (this._sourceLoaded(),
            e && this.emit("loaded", this)) : e && this.emit("error", this))
        }
    }
    ,
    r.prototype._sourceLoaded = function() {
        this.hasLoaded = !0,
        this.update()
    }
    ,
    r.prototype.destroy = function() {
        this.imageUrl ? (delete n.BaseTextureCache[this.imageUrl],
        delete n.TextureCache[this.imageUrl],
        this.imageUrl = null,
        navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete n.BaseTextureCache[this.source._pixiId],
        this.source = null,
        this.dispose()
    }
    ,
    r.prototype.dispose = function() {
        this.emit("dispose", this)
    }
    ,
    r.prototype.updateSourceImage = function(t) {
        this.source.src = t,
        this.loadSource(this.source)
    }
    ,
    r.fromImage = function(t, e, i) {
        var o = n.BaseTextureCache[t];
        if (void 0 === e && 0 !== t.indexOf("data:") && (e = !0),
        !o) {
            var s = new Image;
            e && (s.crossOrigin = ""),
            (o = new r(s,i)).imageUrl = t,
            s.src = t,
            n.BaseTextureCache[t] = o,
            o.resolution = n.getResolutionOfUrl(t)
        }
        return o
    }
    ,
    r.fromCanvas = function(t, e) {
        t._pixiId || (t._pixiId = "canvas_" + n.uid());
        var i = n.BaseTextureCache[t._pixiId];
        return i || (i = new r(t,e),
        n.BaseTextureCache[t._pixiId] = i),
        i
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(3)
      , n = i(4)
      , o = i(1)
      , s = i(95)
      , a = function(t, e, i, a, h, u) {
        this.gl = t,
        this.frameBuffer = null,
        this.texture = null,
        this.size = new r.Rectangle(0,0,1,1),
        this.resolution = h || o.RESOLUTION,
        this.projectionMatrix = new r.Matrix,
        this.transform = null,
        this.frame = null,
        this.stencilBuffer = null,
        this.stencilMaskStack = new s,
        this.filterStack = [{
            renderTarget: this,
            filter: [],
            bounds: this.size
        }],
        this.scaleMode = a || o.SCALE_MODES.DEFAULT,
        this.root = u,
        this.root || (this.frameBuffer = t.createFramebuffer(),
        this.texture = t.createTexture(),
        t.bindTexture(t.TEXTURE_2D, this.texture),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST),
        n.isPowerOfTwo(e, i) ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)),
        t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
        t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0)),
        this.resize(e, i)
    };
    a.prototype.constructor = a,
    t.exports = a,
    a.prototype.clear = function(t) {
        var e = this.gl;
        t && e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer),
        e.clearColor(0, 0, 0, 0),
        e.clear(e.COLOR_BUFFER_BIT)
    }
    ,
    a.prototype.attachStencilBuffer = function() {
        if (!this.stencilBuffer && !this.root) {
            var t = this.gl;
            this.stencilBuffer = t.createRenderbuffer(),
            t.bindRenderbuffer(t.RENDERBUFFER, this.stencilBuffer),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencilBuffer),
            t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution)
        }
    }
    ,
    a.prototype.activate = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
        var e = this.frame || this.size;
        this.calculateProjection(e),
        this.transform && this.projectionMatrix.append(this.transform),
        t.viewport(0, 0, e.width * this.resolution, e.height * this.resolution)
    }
    ,
    a.prototype.calculateProjection = function(t) {
        var e = this.projectionMatrix;
        e.identity(),
        this.root ? (e.a = 1 / t.width * 2,
        e.d = -1 / t.height * 2,
        e.tx = -1 - t.x * e.a,
        e.ty = 1 - t.y * e.d) : (e.a = 1 / t.width * 2,
        e.d = 1 / t.height * 2,
        e.tx = -1 - t.x * e.a,
        e.ty = -1 - t.y * e.d)
    }
    ,
    a.prototype.resize = function(t, e) {
        if (t |= 0,
        e |= 0,
        this.size.width !== t || this.size.height !== e) {
            if (this.size.width = t,
            this.size.height = e,
            !this.root) {
                var i = this.gl;
                i.bindTexture(i.TEXTURE_2D, this.texture),
                i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t * this.resolution, e * this.resolution, 0, i.RGBA, i.UNSIGNED_BYTE, null),
                this.stencilBuffer && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencilBuffer),
                i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t * this.resolution, e * this.resolution))
            }
            var r = this.frame || this.size;
            this.calculateProjection(r)
        }
    }
    ,
    a.prototype.destroy = function() {
        var t = this.gl;
        t.deleteRenderbuffer(this.stencilBuffer),
        t.deleteFramebuffer(this.frameBuffer),
        t.deleteTexture(this.texture),
        this.frameBuffer = null,
        this.texture = null
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        s.call(this),
        this.children = []
    }
    var n = i(3)
      , o = i(4)
      , s = i(48)
      , a = i(33)
      , h = new n.Matrix;
    (r.prototype = Object.create(s.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        width: {
            get: function() {
                return this.scale.x * this.getLocalBounds().width
            },
            set: function(t) {
                var e = this.getLocalBounds().width;
                this.scale.x = 0 !== e ? t / e : 1,
                this._width = t
            }
        },
        height: {
            get: function() {
                return this.scale.y * this.getLocalBounds().height
            },
            set: function(t) {
                var e = this.getLocalBounds().height;
                this.scale.y = 0 !== e ? t / e : 1,
                this._height = t
            }
        }
    }),
    r.prototype.onChildrenChange = function() {}
    ,
    r.prototype.addChild = function(t) {
        var e = arguments.length;
        if (e > 1)
            for (var i = 0; i < e; i++)
                this.addChild(arguments[i]);
        else
            t.parent && t.parent.removeChild(t),
            t.parent = this,
            this.children.push(t),
            this.onChildrenChange(this.children.length - 1),
            t.emit("added", this);
        return t
    }
    ,
    r.prototype.addChildAt = function(t, e) {
        if (e >= 0 && e <= this.children.length)
            return t.parent && t.parent.removeChild(t),
            t.parent = this,
            this.children.splice(e, 0, t),
            this.onChildrenChange(e),
            t.emit("added", this),
            t;
        throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
    }
    ,
    r.prototype.swapChildren = function(t, e) {
        if (t !== e) {
            var i = this.getChildIndex(t)
              , r = this.getChildIndex(e);
            if (i < 0 || r < 0)
                throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
            this.children[i] = e,
            this.children[r] = t,
            this.onChildrenChange(i < r ? i : r)
        }
    }
    ,
    r.prototype.getChildIndex = function(t) {
        var e = this.children.indexOf(t);
        if (-1 === e)
            throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
    }
    ,
    r.prototype.setChildIndex = function(t, e) {
        if (e < 0 || e >= this.children.length)
            throw new Error("The supplied index is out of bounds");
        var i = this.getChildIndex(t);
        o.removeItems(this.children, i, 1),
        this.children.splice(e, 0, t),
        this.onChildrenChange(e)
    }
    ,
    r.prototype.getChildAt = function(t) {
        if (t < 0 || t >= this.children.length)
            throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
        return this.children[t]
    }
    ,
    r.prototype.removeChild = function(t) {
        var e = arguments.length;
        if (e > 1)
            for (var i = 0; i < e; i++)
                this.removeChild(arguments[i]);
        else {
            var r = this.children.indexOf(t);
            if (-1 === r)
                return;
            t.parent = null,
            o.removeItems(this.children, r, 1),
            this.onChildrenChange(r),
            t.emit("removed", this)
        }
        return t
    }
    ,
    r.prototype.removeChildAt = function(t) {
        var e = this.getChildAt(t);
        return e.parent = null,
        o.removeItems(this.children, t, 1),
        this.onChildrenChange(t),
        e.emit("removed", this),
        e
    }
    ,
    r.prototype.removeChildren = function(t, e) {
        var i, r, n = t || 0, o = "number" == typeof e ? e : this.children.length, s = o - n;
        if (s > 0 && s <= o) {
            for (i = this.children.splice(n, s),
            r = 0; r < i.length; ++r)
                i[r].parent = null;
            for (this.onChildrenChange(t),
            r = 0; r < i.length; ++r)
                i[r].emit("removed", this);
            return i
        }
        if (0 === s && 0 === this.children.length)
            return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    ,
    r.prototype.generateTexture = function(t, e, i) {
        var r = this.getLocalBounds()
          , n = new a(t,0 | r.width,0 | r.height,i,e);
        return h.tx = -r.x,
        h.ty = -r.y,
        n.render(this, h),
        n
    }
    ,
    r.prototype.updateTransform = function() {
        if (this.visible) {
            this.displayObjectUpdateTransform();
            for (var t = 0, e = this.children.length; t < e; ++t)
                this.children[t].updateTransform()
        }
    }
    ,
    r.prototype.containerUpdateTransform = r.prototype.updateTransform,
    r.prototype.getBounds = function() {
        if (!this._currentBounds) {
            if (0 === this.children.length)
                return n.Rectangle.EMPTY;
            for (var t, e, i, r = 1 / 0, o = 1 / 0, s = -1 / 0, a = -1 / 0, h = !1, u = 0, l = this.children.length; u < l; ++u)
                this.children[u].visible && (h = !0,
                t = this.children[u].getBounds(),
                r = r < t.x ? r : t.x,
                o = o < t.y ? o : t.y,
                e = t.width + t.x,
                i = t.height + t.y,
                s = s > e ? s : e,
                a = a > i ? a : i);
            if (!h)
                return n.Rectangle.EMPTY;
            var c = this._bounds;
            c.x = r,
            c.y = o,
            c.width = s - r,
            c.height = a - o,
            this._currentBounds = c
        }
        return this._currentBounds
    }
    ,
    r.prototype.containerGetBounds = r.prototype.getBounds,
    r.prototype.getLocalBounds = function() {
        var t = this.worldTransform;
        this.worldTransform = n.Matrix.IDENTITY;
        for (var e = 0, i = this.children.length; e < i; ++e)
            this.children[e].updateTransform();
        return this.worldTransform = t,
        this._currentBounds = null,
        this.getBounds(n.Matrix.IDENTITY)
    }
    ,
    r.prototype.renderWebGL = function(t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
            var e, i;
            if (this._mask || this._filters) {
                for (t.currentRenderer.flush(),
                this._filters && this._filters.length && t.filterManager.pushFilter(this, this._filters),
                this._mask && t.maskManager.pushMask(this, this._mask),
                t.currentRenderer.start(),
                this._renderWebGL(t),
                e = 0,
                i = this.children.length; e < i; e++)
                    this.children[e].renderWebGL(t);
                t.currentRenderer.flush(),
                this._mask && t.maskManager.popMask(this, this._mask),
                this._filters && t.filterManager.popFilter(),
                t.currentRenderer.start()
            } else
                for (this._renderWebGL(t),
                e = 0,
                i = this.children.length; e < i; ++e)
                    this.children[e].renderWebGL(t)
        }
    }
    ,
    r.prototype._renderWebGL = function(t) {}
    ,
    r.prototype._renderCanvas = function(t) {}
    ,
    r.prototype.renderCanvas = function(t) {
        if (this.visible && !(this.alpha <= 0) && this.renderable) {
            this._mask && t.maskManager.pushMask(this._mask, t),
            this._renderCanvas(t);
            for (var e = 0, i = this.children.length; e < i; ++e)
                this.children[e].renderCanvas(t);
            this._mask && t.maskManager.popMask(t)
        }
    }
    ,
    r.prototype.destroy = function(t) {
        if (s.prototype.destroy.call(this),
        t)
            for (var e = 0, i = this.children.length; e < i; ++e)
                this.children[e].destroy(t);
        this.removeChildren(),
        this.children = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        i = i || {},
        n.call(this, "WebGL", t, e, i),
        this.type = f.RENDERER_TYPE.WEBGL,
        this.handleContextLost = this.handleContextLost.bind(this),
        this.handleContextRestored = this.handleContextRestored.bind(this),
        this.view.addEventListener("webglcontextlost", this.handleContextLost, !1),
        this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1),
        this._useFXAA = !!i.forceFXAA && i.antialias,
        this._FXAAFilter = null,
        this._contextOptions = {
            alpha: this.transparent,
            antialias: i.antialias,
            premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
            stencil: !0,
            preserveDrawingBuffer: i.preserveDrawingBuffer
        },
        this.drawCount = 0,
        this.shaderManager = new o(this),
        this.maskManager = new s(this),
        this.stencilManager = new a(this),
        this.filterManager = new h(this),
        this.blendModeManager = new u(this),
        this.currentRenderTarget = null,
        this.currentRenderer = new c(this),
        this.initPlugins(),
        this._createContext(),
        this._initContext(),
        this._mapGlModes(),
        this._managedTextures = [],
        this._renderTargetStack = []
    }
    var n = i(54)
      , o = i(55)
      , s = i(99)
      , a = i(102)
      , h = i(51)
      , u = i(103)
      , l = i(21)
      , c = i(15)
      , p = i(59)
      , d = i(4)
      , f = i(1);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    d.pluginTarget.mixin(r),
    r.glContextId = 0,
    r.prototype._createContext = function() {
        var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
        if (this.gl = t,
        !t)
            throw new Error("This browser does not support webGL. Try using the canvas renderer");
        this.glContextId = r.glContextId++,
        t.id = this.glContextId,
        t.renderer = this
    }
    ,
    r.prototype._initContext = function() {
        var t = this.gl;
        t.disable(t.DEPTH_TEST),
        t.disable(t.CULL_FACE),
        t.enable(t.BLEND),
        this.renderTarget = new l(t,this.width,this.height,null,this.resolution,!0),
        this.setRenderTarget(this.renderTarget),
        this.emit("context", t),
        this.resize(this.width, this.height),
        this._useFXAA || (this._useFXAA = this._contextOptions.antialias && !t.getContextAttributes().antialias),
        this._useFXAA && (window.console.warn("FXAA antialiasing being used instead of native antialiasing"),
        this._FXAAFilter = [new p])
    }
    ,
    r.prototype.render = function(t) {
        if (this.emit("prerender"),
        !this.gl.isContextLost()) {
            this.drawCount = 0,
            this._lastObjectRendered = t,
            this._useFXAA && (this._FXAAFilter[0].uniforms.resolution.value.x = this.width,
            this._FXAAFilter[0].uniforms.resolution.value.y = this.height,
            t.filterArea = this.renderTarget.size,
            t.filters = this._FXAAFilter);
            var e = t.parent;
            t.parent = this._tempDisplayObjectParent,
            t.updateTransform(),
            t.parent = e;
            var i = this.gl;
            this.setRenderTarget(this.renderTarget),
            this.clearBeforeRender && (this.transparent ? i.clearColor(0, 0, 0, 0) : i.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1),
            i.clear(i.COLOR_BUFFER_BIT)),
            this.renderDisplayObject(t, this.renderTarget),
            this.emit("postrender")
        }
    }
    ,
    r.prototype.renderDisplayObject = function(t, e, i) {
        this.setRenderTarget(e),
        i && e.clear(),
        this.filterManager.setFilterStack(e.filterStack),
        t.renderWebGL(this),
        this.currentRenderer.flush()
    }
    ,
    r.prototype.setObjectRenderer = function(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(),
        this.currentRenderer = t,
        this.currentRenderer.start())
    }
    ,
    r.prototype.setRenderTarget = function(t) {
        this.currentRenderTarget !== t && (this.currentRenderTarget = t,
        this.currentRenderTarget.activate(),
        this.stencilManager.setMaskStack(t.stencilMaskStack))
    }
    ,
    r.prototype.resize = function(t, e) {
        n.prototype.resize.call(this, t, e),
        this.filterManager.resize(t, e),
        this.renderTarget.resize(t, e),
        this.currentRenderTarget === this.renderTarget && (this.renderTarget.activate(),
        this.gl.viewport(0, 0, this.width, this.height))
    }
    ,
    r.prototype.updateTexture = function(t) {
        if ((t = t.baseTexture || t).hasLoaded) {
            var e = this.gl;
            return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture(),
            t.on("update", this.updateTexture, this),
            t.on("dispose", this.destroyTexture, this),
            this._managedTextures.push(t)),
            e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST),
            t.mipmap && t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST),
            e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST),
            t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)),
            t._glTextures[e.id]
        }
    }
    ,
    r.prototype.destroyTexture = function(t, e) {
        if ((t = t.baseTexture || t).hasLoaded && t._glTextures[this.gl.id] && (this.gl.deleteTexture(t._glTextures[this.gl.id]),
        delete t._glTextures[this.gl.id],
        !e)) {
            var i = this._managedTextures.indexOf(t);
            -1 !== i && d.removeItems(this._managedTextures, i, 1)
        }
    }
    ,
    r.prototype.handleContextLost = function(t) {
        t.preventDefault()
    }
    ,
    r.prototype.handleContextRestored = function() {
        this._initContext();
        for (var t = 0; t < this._managedTextures.length; ++t) {
            var e = this._managedTextures[t];
            e._glTextures[this.gl.id] && delete e._glTextures[this.gl.id]
        }
    }
    ,
    r.prototype.destroy = function(t) {
        this.destroyPlugins(),
        this.view.removeEventListener("webglcontextlost", this.handleContextLost),
        this.view.removeEventListener("webglcontextrestored", this.handleContextRestored);
        for (var e = 0; e < this._managedTextures.length; ++e) {
            var i = this._managedTextures[e];
            this.destroyTexture(i, !0),
            i.off("update", this.updateTexture, this),
            i.off("dispose", this.destroyTexture, this)
        }
        n.prototype.destroy.call(this, t),
        this.uid = 0,
        this.shaderManager.destroy(),
        this.maskManager.destroy(),
        this.stencilManager.destroy(),
        this.filterManager.destroy(),
        this.blendModeManager.destroy(),
        this.shaderManager = null,
        this.maskManager = null,
        this.filterManager = null,
        this.blendModeManager = null,
        this.currentRenderer = null,
        this.handleContextLost = null,
        this.handleContextRestored = null,
        this._contextOptions = null,
        this._managedTextures = null,
        this.drawCount = 0,
        this.gl.useProgram(null),
        this.gl.flush(),
        this.gl = null
    }
    ,
    r.prototype._mapGlModes = function() {
        var t = this.gl;
        this.blendModes || (this.blendModes = {},
        this.blendModes[f.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA],
        this.blendModes[f.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR],
        this.blendModes[f.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        this.blendModes[f.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
        this.drawModes || (this.drawModes = {},
        this.drawModes[f.DRAW_MODES.POINTS] = t.POINTS,
        this.drawModes[f.DRAW_MODES.LINES] = t.LINES,
        this.drawModes[f.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP,
        this.drawModes[f.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP,
        this.drawModes[f.DRAW_MODES.TRIANGLES] = t.TRIANGLES,
        this.drawModes[f.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP,
        this.drawModes[f.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, o, s) {
        var a = {
            uSampler: {
                type: "sampler2D",
                value: 0
            },
            projectionMatrix: {
                type: "mat3",
                value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
            }
        };
        if (o)
            for (var h in o)
                a[h] = o[h];
        var u = {
            aVertexPosition: 0,
            aTextureCoord: 0,
            aColor: 0
        };
        if (s)
            for (var l in s)
                u[l] = s[l];
        e = e || r.defaultVertexSrc,
        i = i || r.defaultFragmentSrc,
        n.call(this, t, e, i, a, u)
    }
    var n = i(25);
    r.prototype = Object.create(n.prototype),
    r.prototype.constructor = r,
    t.exports = r,
    r.defaultVertexSrc = ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"),
    r.defaultFragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"].join("\n")
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r, o) {
        if (!e || !i)
            throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");
        this.uid = n.uid(),
        this.gl = t.renderer.gl,
        this.shaderManager = t,
        this.program = null,
        this.uniforms = r || {},
        this.attributes = o || {},
        this.textureCount = 1,
        this.vertexSrc = e,
        this.fragmentSrc = i,
        this.init()
    }
    var n = i(4);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.init = function() {
        this.compile(),
        this.gl.useProgram(this.program),
        this.cacheUniformLocations(Object.keys(this.uniforms)),
        this.cacheAttributeLocations(Object.keys(this.attributes))
    }
    ,
    r.prototype.cacheUniformLocations = function(t) {
        for (var e = 0; e < t.length; ++e)
            this.uniforms[t[e]]._location = this.gl.getUniformLocation(this.program, t[e])
    }
    ,
    r.prototype.cacheAttributeLocations = function(t) {
        for (var e = 0; e < t.length; ++e)
            this.attributes[t[e]] = this.gl.getAttribLocation(this.program, t[e])
    }
    ,
    r.prototype.compile = function() {
        var t = this.gl
          , e = this._glCompile(t.VERTEX_SHADER, this.vertexSrc)
          , i = this._glCompile(t.FRAGMENT_SHADER, this.fragmentSrc)
          , r = t.createProgram();
        return t.attachShader(r, e),
        t.attachShader(r, i),
        t.linkProgram(r),
        t.getProgramParameter(r, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."),
        console.error("gl.VALIDATE_STATUS", t.getProgramParameter(r, t.VALIDATE_STATUS)),
        console.error("gl.getError()", t.getError()),
        "" !== t.getProgramInfoLog(r) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(r)),
        t.deleteProgram(r),
        r = null),
        t.deleteShader(e),
        t.deleteShader(i),
        this.program = r
    }
    ,
    r.prototype.syncUniform = function(t) {
        var e, i, r = t._location, o = t.value, s = this.gl;
        switch (t.type) {
        case "b":
        case "bool":
        case "boolean":
            s.uniform1i(r, o ? 1 : 0);
            break;
        case "i":
        case "1i":
            s.uniform1i(r, o);
            break;
        case "f":
        case "1f":
            s.uniform1f(r, o);
            break;
        case "2f":
            s.uniform2f(r, o[0], o[1]);
            break;
        case "3f":
            s.uniform3f(r, o[0], o[1], o[2]);
            break;
        case "4f":
            s.uniform4f(r, o[0], o[1], o[2], o[3]);
            break;
        case "v2":
            s.uniform2f(r, o.x, o.y);
            break;
        case "v3":
            s.uniform3f(r, o.x, o.y, o.z);
            break;
        case "v4":
            s.uniform4f(r, o.x, o.y, o.z, o.w);
            break;
        case "1iv":
            s.uniform1iv(r, o);
            break;
        case "2iv":
            s.uniform2iv(r, o);
            break;
        case "3iv":
            s.uniform3iv(r, o);
            break;
        case "4iv":
            s.uniform4iv(r, o);
            break;
        case "1fv":
            s.uniform1fv(r, o);
            break;
        case "2fv":
            s.uniform2fv(r, o);
            break;
        case "3fv":
            s.uniform3fv(r, o);
            break;
        case "4fv":
            s.uniform4fv(r, o);
            break;
        case "m2":
        case "mat2":
        case "Matrix2fv":
            s.uniformMatrix2fv(r, t.transpose, o);
            break;
        case "m3":
        case "mat3":
        case "Matrix3fv":
            s.uniformMatrix3fv(r, t.transpose, o);
            break;
        case "m4":
        case "mat4":
        case "Matrix4fv":
            s.uniformMatrix4fv(r, t.transpose, o);
            break;
        case "c":
            "number" == typeof o && (o = n.hex2rgb(o)),
            s.uniform3f(r, o[0], o[1], o[2]);
            break;
        case "iv1":
            s.uniform1iv(r, o);
            break;
        case "iv":
            s.uniform3iv(r, o);
            break;
        case "fv1":
            s.uniform1fv(r, o);
            break;
        case "fv":
            s.uniform3fv(r, o);
            break;
        case "v2v":
            for (t._array || (t._array = new Float32Array(2 * o.length)),
            e = 0,
            i = o.length; e < i; ++e)
                t._array[2 * e] = o[e].x,
                t._array[2 * e + 1] = o[e].y;
            s.uniform2fv(r, t._array);
            break;
        case "v3v":
            for (t._array || (t._array = new Float32Array(3 * o.length)),
            e = 0,
            i = o.length; e < i; ++e)
                t._array[3 * e] = o[e].x,
                t._array[3 * e + 1] = o[e].y,
                t._array[3 * e + 2] = o[e].z;
            s.uniform3fv(r, t._array);
            break;
        case "v4v":
            for (t._array || (t._array = new Float32Array(4 * o.length)),
            e = 0,
            i = o.length; e < i; ++e)
                t._array[4 * e] = o[e].x,
                t._array[4 * e + 1] = o[e].y,
                t._array[4 * e + 2] = o[e].z,
                t._array[4 * e + 3] = o[e].w;
            s.uniform4fv(r, t._array);
            break;
        case "t":
        case "sampler2D":
            if (!t.value || !t.value.baseTexture.hasLoaded)
                break;
            s.activeTexture(s["TEXTURE" + this.textureCount]);
            var a = t.value.baseTexture._glTextures[s.id];
            a || (this.initSampler2D(t),
            a = t.value.baseTexture._glTextures[s.id]),
            s.bindTexture(s.TEXTURE_2D, a),
            s.uniform1i(t._location, this.textureCount),
            this.textureCount++;
            break;
        default:
            console.warn("Pixi.js Shader Warning: Unknown uniform type: " + t.type)
        }
    }
    ,
    r.prototype.syncUniforms = function() {
        this.textureCount = 1;
        for (var t in this.uniforms)
            this.syncUniform(this.uniforms[t])
    }
    ,
    r.prototype.initSampler2D = function(t) {
        var e = this.gl
          , i = t.value.baseTexture;
        if (i.hasLoaded)
            if (t.textureData) {
                var r = t.textureData;
                i._glTextures[e.id] = e.createTexture(),
                e.bindTexture(e.TEXTURE_2D, i._glTextures[e.id]),
                e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultipliedAlpha),
                e.texImage2D(e.TEXTURE_2D, 0, r.luminance ? e.LUMINANCE : e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i.source),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, r.magFilter ? r.magFilter : e.LINEAR),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, r.wrapS ? r.wrapS : e.CLAMP_TO_EDGE),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, r.wrapS ? r.wrapS : e.CLAMP_TO_EDGE),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, r.wrapT ? r.wrapT : e.CLAMP_TO_EDGE)
            } else
                this.shaderManager.renderer.updateTexture(i)
    }
    ,
    r.prototype.destroy = function() {
        this.gl.deleteProgram(this.program),
        this.gl = null,
        this.uniforms = null,
        this.attributes = null,
        this.vertexSrc = null,
        this.fragmentSrc = null
    }
    ,
    r.prototype._glCompile = function(t, e) {
        var i = this.gl.createShader(t);
        return this.gl.shaderSource(i, e),
        this.gl.compileShader(i),
        this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS) ? i : (console.log(this.gl.getShaderInfoLog(i)),
        null)
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, i(129), i(64), {
            strength: {
                type: "1f",
                value: 1
            }
        }),
        this.passes = 1,
        this.strength = 4
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i, r) {
        var n = this.getShader(t);
        if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width),
        1 === this.passes)
            t.filterManager.applyFilter(n, e, i, r);
        else {
            for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, h = 0; h < this.passes - 1; h++) {
                t.filterManager.applyFilter(n, s, a, !0);
                var u = a;
                a = s,
                s = u
            }
            t.filterManager.applyFilter(n, s, i, r),
            t.filterManager.returnRenderTarget(o)
        }
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.strength
            },
            set: function(t) {
                this.padding = .5 * Math.abs(t),
                this.strength = t
            }
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, o, s) {
        n.Container.call(this),
        this._texture = null,
        this.uvs = i || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]),
        this.indices = o || new Uint16Array([0, 1, 3, 2]),
        this.dirty = !0,
        this.blendMode = n.BLEND_MODES.NORMAL,
        this.canvasPadding = 0,
        this.drawMode = s || r.DRAW_MODES.TRIANGLE_MESH,
        this.texture = t,
        this.shader = null
    }
    var n = i(0)
      , o = new n.Point
      , s = new n.Polygon;
    r.prototype = Object.create(n.Container.prototype),
    r.prototype.constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        texture: {
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture !== t && (this._texture = t,
                t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
        }
    }),
    r.prototype._renderWebGL = function(t) {
        t.setObjectRenderer(t.plugins.mesh),
        t.plugins.mesh.render(this)
    }
    ,
    r.prototype._renderCanvas = function(t) {
        var e = t.context
          , i = this.worldTransform
          , n = t.resolution;
        t.roundPixels ? e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n | 0, i.ty * n | 0) : e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n),
        this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
    }
    ,
    r.prototype._renderCanvasTriangleMesh = function(t) {
        for (var e = this.vertices, i = this.uvs, r = e.length / 2, n = 0; n < r - 2; n++) {
            var o = 2 * n;
            this._renderCanvasDrawTriangle(t, e, i, o, o + 2, o + 4)
        }
    }
    ,
    r.prototype._renderCanvasTriangles = function(t) {
        for (var e = this.vertices, i = this.uvs, r = this.indices, n = r.length, o = 0; o < n; o += 3) {
            var s = 2 * r[o]
              , a = 2 * r[o + 1]
              , h = 2 * r[o + 2];
            this._renderCanvasDrawTriangle(t, e, i, s, a, h)
        }
    }
    ,
    r.prototype._renderCanvasDrawTriangle = function(t, e, i, r, n, o) {
        var s = this._texture.baseTexture
          , a = s.source
          , h = s.width
          , u = s.height
          , l = e[r]
          , c = e[n]
          , p = e[o]
          , d = e[r + 1]
          , f = e[n + 1]
          , v = e[o + 1]
          , y = i[r] * s.width
          , g = i[n] * s.width
          , m = i[o] * s.width
          , x = i[r + 1] * s.height
          , _ = i[n + 1] * s.height
          , b = i[o + 1] * s.height;
        if (this.canvasPadding > 0) {
            var T = this.canvasPadding / this.worldTransform.a
              , w = this.canvasPadding / this.worldTransform.d
              , E = (l + c + p) / 3
              , S = (d + f + v) / 3
              , A = l - E
              , C = d - S
              , M = Math.sqrt(A * A + C * C);
            l = E + A / M * (M + T),
            d = S + C / M * (M + w),
            C = f - S,
            c = E + (A = c - E) / (M = Math.sqrt(A * A + C * C)) * (M + T),
            f = S + C / M * (M + w),
            C = v - S,
            p = E + (A = p - E) / (M = Math.sqrt(A * A + C * C)) * (M + T),
            v = S + C / M * (M + w)
        }
        t.save(),
        t.beginPath(),
        t.moveTo(l, d),
        t.lineTo(c, f),
        t.lineTo(p, v),
        t.closePath(),
        t.clip();
        var R = y * _ + x * m + g * b - _ * m - x * g - y * b
          , O = l * _ + x * p + c * b - _ * p - x * c - l * b
          , P = y * c + l * m + g * p - c * m - l * g - y * p
          , D = y * _ * p + x * c * m + l * g * b - l * _ * m - x * g * p - y * c * b
          , F = d * _ + x * v + f * b - _ * v - x * f - d * b
          , L = y * f + d * m + g * v - f * m - d * g - y * v
          , B = y * _ * v + x * f * m + d * g * b - d * _ * m - x * g * v - y * f * b;
        t.transform(O / R, F / R, P / R, L / R, D / R, B / R),
        t.drawImage(a, 0, 0, h * s.resolution, u * s.resolution, 0, 0, h, u),
        t.restore()
    }
    ,
    r.prototype.renderMeshFlat = function(t) {
        var e = this.context
          , i = t.vertices
          , r = i.length / 2;
        e.beginPath();
        for (var n = 1; n < r - 2; n++) {
            var o = 2 * n
              , s = i[o]
              , a = i[o + 2]
              , h = i[o + 4]
              , u = i[o + 1]
              , l = i[o + 3]
              , c = i[o + 5];
            e.moveTo(s, u),
            e.lineTo(a, l),
            e.lineTo(h, c)
        }
        e.fillStyle = "#FF0000",
        e.fill(),
        e.closePath()
    }
    ,
    r.prototype._onTextureUpdate = function() {
        this.updateFrame = !0
    }
    ,
    r.prototype.getBounds = function(t) {
        if (!this._currentBounds) {
            for (var e = t || this.worldTransform, i = e.a, r = e.b, o = e.c, s = e.d, a = e.tx, h = e.ty, u = -1 / 0, l = -1 / 0, c = 1 / 0, p = 1 / 0, d = this.vertices, f = 0, v = d.length; f < v; f += 2) {
                var y = d[f]
                  , g = d[f + 1]
                  , m = i * y + o * g + a
                  , x = s * g + r * y + h;
                c = m < c ? m : c,
                p = x < p ? x : p,
                u = m > u ? m : u,
                l = x > l ? x : l
            }
            if (c === -1 / 0 || l === 1 / 0)
                return n.Rectangle.EMPTY;
            var _ = this._bounds;
            _.x = c,
            _.width = u - c,
            _.y = p,
            _.height = l - p,
            this._currentBounds = _
        }
        return this._currentBounds
    }
    ,
    r.prototype.containsPoint = function(t) {
        if (!this.getBounds().contains(t.x, t.y))
            return !1;
        this.worldTransform.applyInverse(t, o);
        var e, i, n = this.vertices, a = s.points;
        if (this.drawMode === r.DRAW_MODES.TRIANGLES) {
            var h = this.indices;
            for (i = this.indices.length,
            e = 0; e < i; e += 3) {
                var u = 2 * h[e]
                  , l = 2 * h[e + 1]
                  , c = 2 * h[e + 2];
                if (a[0] = n[u],
                a[1] = n[u + 1],
                a[2] = n[l],
                a[3] = n[l + 1],
                a[4] = n[c],
                a[5] = n[c + 1],
                s.contains(o.x, o.y))
                    return !0
            }
        } else
            for (i = n.length,
            e = 0; e < i; e += 6)
                if (a[0] = n[e],
                a[1] = n[e + 1],
                a[2] = n[e + 2],
                a[3] = n[e + 3],
                a[4] = n[e + 4],
                a[5] = n[e + 5],
                s.contains(o.x, o.y))
                    return !0;
        return !1
    }
    ,
    r.DRAW_MODES = {
        TRIANGLE_MESH: 0,
        TRIANGLES: 1
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return l.baseURL + "/" + t
    }
    function n(t, e) {
        if (!f[e]) {
            var i = new c({
                src: t.map(r),
                preload: !1,
                onload: o.bind(void 0, i),
                onloaderror: o.bind(void 0, i, "Failed to load sound[" + t + "]")
            });
            f[e] = i,
            v += 1
        }
    }
    function o(t, e) {
        y += 1,
        s && s(t, e),
        y === v && a && (setTimeout(a, 0),
        a = null,
        s = null)
    }
    var s, a, h = i(8), u = i(190), l = i(5), c = u.Howl, p = u.Howler, d = i(2), f = {}, v = 0, y = 0;
    l.registerLoader({
        start: function(t, e) {
            s = e,
            a = t;
            for (var i in f)
                f[i].load();
            0 === Object.keys(f).length && t()
        },
        getAssetsLength: function() {
            return v
        }
    }),
    l.addSound = n;
    var g = null
      , m = Object.assign(new d, {
        sounds: f,
        addSound: n,
        muted: !1,
        mute: function() {
            p.mute(!0),
            m.muted = !0,
            m.emit("mute", !0)
        },
        unmute: function() {
            p.mute(!1),
            m.muted = !1,
            m.emit("mute", !1)
        },
        volume: function(t) {
            p.volume(t)
        },
        play: function(t) {
            return (g = f[t]) && g.play(),
            g
        }
    })
      , x = !1;
    h.on("pause", function() {
        m.muted && (x = !0),
        m.mute()
    }),
    h.on("resume", function() {
        x || m.unmute()
    }),
    t.exports = m
}
, function(t, e, i) {
    "use strict";
    var r = {
        instance: void 0,
        resolution: 1,
        init: function(t, e, i) {
            console.log("[Warning]: No working renderer!")
        },
        resize: function(t, e) {
            console.log("[Warning]: Renderer can not be resized!")
        },
        render: function(t) {
            console.log("[Warning]: Renderer does not render!")
        },
        createLayer: function(t, e, i) {
            console.log("[Warning]: Renderer cannot create layer!")
        }
    };
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    t.exports = i(18)
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r) {
        this.x = t || 0,
        this.y = e || 0,
        this.width = i || 0,
        this.height = r || 0,
        this.type = n.SHAPES.RECT
    }
    var n = i(1);
    r.prototype.constructor = r,
    t.exports = r,
    r.EMPTY = new r(0,0,0,0),
    r.prototype.clone = function() {
        return new r(this.x,this.y,this.width,this.height)
    }
    ,
    r.prototype.contains = function(t, e) {
        return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
    }
}
, function(t, e, i) {
    "use strict";
    (function(t, i, r, n) {
        var o, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        !function() {
            function h() {}
            function u(t) {
                return t
            }
            function l(t) {
                return !!t
            }
            function c(t) {
                return !t
            }
            function p(t) {
                return function() {
                    if (null === t)
                        throw new Error("Callback was already called.");
                    t.apply(this, arguments),
                    t = null
                }
            }
            function d(t) {
                return function() {
                    null !== t && (t.apply(this, arguments),
                    t = null)
                }
            }
            function f(t) {
                return X(t) || "number" == typeof t.length && t.length >= 0 && t.length % 1 == 0
            }
            function v(t, e) {
                for (var i = -1, r = t.length; ++i < r; )
                    e(t[i], i, t)
            }
            function y(t, e) {
                for (var i = -1, r = t.length, n = Array(r); ++i < r; )
                    n[i] = e(t[i], i, t);
                return n
            }
            function g(t) {
                return y(Array(t), function(t, e) {
                    return e
                })
            }
            function m(t, e, i) {
                return v(t, function(t, r, n) {
                    i = e(i, t, r, n)
                }),
                i
            }
            function x(t, e) {
                v(H(t), function(i) {
                    e(t[i], i)
                })
            }
            function _(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }
            function b(t) {
                var e, i, r = -1;
                return f(t) ? (e = t.length,
                function() {
                    return r++,
                    e > r ? r : null
                }
                ) : (i = H(t),
                e = i.length,
                function() {
                    return r++,
                    e > r ? i[r] : null
                }
                )
            }
            function T(t, e) {
                return e = null == e ? t.length - 1 : +e,
                function() {
                    for (var i = Math.max(arguments.length - e, 0), r = Array(i), n = 0; i > n; n++)
                        r[n] = arguments[n + e];
                    switch (e) {
                    case 0:
                        return t.call(this, r);
                    case 1:
                        return t.call(this, arguments[0], r)
                    }
                }
            }
            function w(t) {
                return function(e, i, r) {
                    return t(e, r)
                }
            }
            function E(t) {
                return function(e, i, r) {
                    r = d(r || h);
                    var n = b(e = e || []);
                    if (0 >= t)
                        return r(null);
                    var o = !1
                      , s = 0
                      , a = !1;
                    !function h() {
                        if (o && 0 >= s)
                            return r(null);
                        for (; t > s && !a; ) {
                            var u = n();
                            if (null === u)
                                return o = !0,
                                void (0 >= s && r(null));
                            s += 1,
                            i(e[u], u, p(function(t) {
                                s -= 1,
                                t ? (r(t),
                                a = !0) : h()
                            }))
                        }
                    }()
                }
            }
            function S(t) {
                return function(e, i, r) {
                    return t(G.eachOf, e, i, r)
                }
            }
            function A(t) {
                return function(e, i, r, n) {
                    return t(E(i), e, r, n)
                }
            }
            function C(t) {
                return function(e, i, r) {
                    return t(G.eachOfSeries, e, i, r)
                }
            }
            function M(t, e, i, r) {
                r = d(r || h);
                var n = f(e = e || []) ? [] : {};
                t(e, function(t, e, r) {
                    i(t, function(t, i) {
                        n[e] = i,
                        r(t)
                    })
                }, function(t) {
                    r(t, n)
                })
            }
            function R(t, e, i, r) {
                var n = [];
                t(e, function(t, e, r) {
                    i(t, function(i) {
                        i && n.push({
                            index: e,
                            value: t
                        }),
                        r()
                    })
                }, function() {
                    r(y(n.sort(function(t, e) {
                        return t.index - e.index
                    }), function(t) {
                        return t.value
                    }))
                })
            }
            function O(t, e, i, r) {
                R(t, e, function(t, e) {
                    i(t, function(t) {
                        e(!t)
                    })
                }, r)
            }
            function P(t, e, i) {
                return function(r, n, o, s) {
                    function a() {
                        s && s(i(!1, void 0))
                    }
                    function h(t, r, n) {
                        return s ? void o(t, function(r) {
                            s && e(r) && (s(i(!0, t)),
                            s = o = !1),
                            n()
                        }) : n()
                    }
                    arguments.length > 3 ? t(r, n, h, a) : (s = o,
                    o = n,
                    t(r, h, a))
                }
            }
            function D(t, e) {
                return e
            }
            function F(t, e, i) {
                i = i || h;
                var r = f(e) ? [] : {};
                t(e, function(t, e, i) {
                    t(T(function(t, n) {
                        n.length <= 1 && (n = n[0]),
                        r[e] = n,
                        i(t)
                    }))
                }, function(t) {
                    i(t, r)
                })
            }
            function L(t, e, i, r) {
                var n = [];
                t(e, function(t, e, r) {
                    i(t, function(t, e) {
                        n = n.concat(e || []),
                        r(t)
                    })
                }, function(t) {
                    r(t, n)
                })
            }
            function B(t, e, i) {
                function r(t, e, i, r) {
                    if (null != r && "function" != typeof r)
                        throw new Error("task callback must be a function");
                    return t.started = !0,
                    X(e) || (e = [e]),
                    0 === e.length && t.idle() ? G.setImmediate(function() {
                        t.drain()
                    }) : (v(e, function(e) {
                        var n = {
                            data: e,
                            callback: r || h
                        };
                        i ? t.tasks.unshift(n) : t.tasks.push(n),
                        t.tasks.length === t.concurrency && t.saturated()
                    }),
                    void G.setImmediate(t.process))
                }
                function n(t, e) {
                    return function() {
                        o -= 1;
                        var i = !1
                          , r = arguments;
                        v(e, function(t) {
                            v(s, function(e, r) {
                                e !== t || i || (s.splice(r, 1),
                                i = !0)
                            }),
                            t.callback.apply(t, r)
                        }),
                        t.tasks.length + o === 0 && t.drain(),
                        t.process()
                    }
                }
                if (null == e)
                    e = 1;
                else if (0 === e)
                    throw new Error("Concurrency must not be zero");
                var o = 0
                  , s = []
                  , a = {
                    tasks: [],
                    concurrency: e,
                    payload: i,
                    saturated: h,
                    empty: h,
                    drain: h,
                    started: !1,
                    paused: !1,
                    push: function(t, e) {
                        r(a, t, !1, e)
                    },
                    kill: function() {
                        a.drain = h,
                        a.tasks = []
                    },
                    unshift: function(t, e) {
                        r(a, t, !0, e)
                    },
                    process: function() {
                        for (; !a.paused && o < a.concurrency && a.tasks.length; ) {
                            var e = a.payload ? a.tasks.splice(0, a.payload) : a.tasks.splice(0, a.tasks.length)
                              , i = y(e, function(t) {
                                return t.data
                            });
                            0 === a.tasks.length && a.empty(),
                            o += 1,
                            s.push(e[0]);
                            var r = p(n(a, e));
                            t(i, r)
                        }
                    },
                    length: function() {
                        return a.tasks.length
                    },
                    running: function() {
                        return o
                    },
                    workersList: function() {
                        return s
                    },
                    idle: function() {
                        return a.tasks.length + o === 0
                    },
                    pause: function() {
                        a.paused = !0
                    },
                    resume: function() {
                        if (!1 !== a.paused) {
                            a.paused = !1;
                            for (var t = Math.min(a.concurrency, a.tasks.length), e = 1; t >= e; e++)
                                G.setImmediate(a.process)
                        }
                    }
                };
                return a
            }
            function I(t) {
                return T(function(e, i) {
                    e.apply(null, i.concat([T(function(e, i) {
                        "object" == ("undefined" == typeof console ? "undefined" : a(console)) && (e ? console.error && console.error(e) : console[t] && v(i, function(e) {
                            console[t](e)
                        }))
                    })]))
                })
            }
            function N(t) {
                return function(e, i, r) {
                    t(g(e), i, r)
                }
            }
            function k(t) {
                return T(function(e, i) {
                    var r = T(function(i) {
                        var r = this
                          , n = i.pop();
                        return t(e, function(t, e, n) {
                            t.apply(r, i.concat([n]))
                        }, n)
                    });
                    return i.length ? r.apply(this, i) : r
                })
            }
            function U(t) {
                return T(function(e) {
                    var i = e.pop();
                    e.push(function() {
                        var t = arguments;
                        r ? G.setImmediate(function() {
                            i.apply(null, t)
                        }) : i.apply(null, t)
                    });
                    var r = !0;
                    t.apply(this, e),
                    r = !1
                })
            }
            var j, G = {}, z = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self.self === self && self || "object" == (void 0 === t ? "undefined" : a(t)) && t.global === t && t || this;
            null != z && (j = z.async),
            G.noConflict = function() {
                return z.async = j,
                G
            }
            ;
            var W = Object.prototype.toString
              , X = Array.isArray || function(t) {
                return "[object Array]" === W.call(t)
            }
              , Y = function(t) {
                var e = void 0 === t ? "undefined" : a(t);
                return "function" === e || "object" === e && !!t
            }
              , H = Object.keys || function(t) {
                var e = [];
                for (var i in t)
                    t.hasOwnProperty(i) && e.push(i);
                return e
            }
              , V = "function" == typeof i && i
              , q = V ? function(t) {
                V(t)
            }
            : function(t) {
                setTimeout(t, 0)
            }
            ;
            "object" == (void 0 === r ? "undefined" : a(r)) && "function" == typeof r.nextTick ? G.nextTick = r.nextTick : G.nextTick = q,
            G.setImmediate = V ? q : G.nextTick,
            G.forEach = G.each = function(t, e, i) {
                return G.eachOf(t, w(e), i)
            }
            ,
            G.forEachSeries = G.eachSeries = function(t, e, i) {
                return G.eachOfSeries(t, w(e), i)
            }
            ,
            G.forEachLimit = G.eachLimit = function(t, e, i, r) {
                return E(e)(t, w(i), r)
            }
            ,
            G.forEachOf = G.eachOf = function(t, e, i) {
                i = d(i || h);
                for (var r, n = b(t = t || []), o = 0; null != (r = n()); )
                    o += 1,
                    e(t[r], r, p(function(t) {
                        o--,
                        t ? i(t) : null === r && 0 >= o && i(null)
                    }));
                0 === o && i(null)
            }
            ,
            G.forEachOfSeries = G.eachOfSeries = function(t, e, i) {
                function r() {
                    var s = !0;
                    return null === o ? i(null) : (e(t[o], o, p(function(t) {
                        if (t)
                            i(t);
                        else {
                            if (null === (o = n()))
                                return i(null);
                            s ? G.setImmediate(r) : r()
                        }
                    })),
                    void (s = !1))
                }
                i = d(i || h);
                var n = b(t = t || [])
                  , o = n();
                r()
            }
            ,
            G.forEachOfLimit = G.eachOfLimit = function(t, e, i, r) {
                E(e)(t, i, r)
            }
            ,
            G.map = S(M),
            G.mapSeries = C(M),
            G.mapLimit = A(M),
            G.inject = G.foldl = G.reduce = function(t, e, i, r) {
                G.eachOfSeries(t, function(t, r, n) {
                    i(e, t, function(t, i) {
                        e = i,
                        n(t)
                    })
                }, function(t) {
                    r(t, e)
                })
            }
            ,
            G.foldr = G.reduceRight = function(t, e, i, r) {
                var n = y(t, u).reverse();
                G.reduce(n, e, i, r)
            }
            ,
            G.transform = function(t, e, i, r) {
                3 === arguments.length && (r = i,
                i = e,
                e = X(t) ? [] : {}),
                G.eachOf(t, function(t, r, n) {
                    i(e, t, r, n)
                }, function(t) {
                    r(t, e)
                })
            }
            ,
            G.select = G.filter = S(R),
            G.selectLimit = G.filterLimit = A(R),
            G.selectSeries = G.filterSeries = C(R),
            G.reject = S(O),
            G.rejectLimit = A(O),
            G.rejectSeries = C(O),
            G.any = G.some = P(G.eachOf, l, u),
            G.someLimit = P(G.eachOfLimit, l, u),
            G.all = G.every = P(G.eachOf, c, c),
            G.everyLimit = P(G.eachOfLimit, c, c),
            G.detect = P(G.eachOf, u, D),
            G.detectSeries = P(G.eachOfSeries, u, D),
            G.detectLimit = P(G.eachOfLimit, u, D),
            G.sortBy = function(t, e, i) {
                function r(t, e) {
                    var i = t.criteria
                      , r = e.criteria;
                    return r > i ? -1 : i > r ? 1 : 0
                }
                G.map(t, function(t, i) {
                    e(t, function(e, r) {
                        e ? i(e) : i(null, {
                            value: t,
                            criteria: r
                        })
                    })
                }, function(t, e) {
                    return t ? i(t) : void i(null, y(e.sort(r), function(t) {
                        return t.value
                    }))
                })
            }
            ,
            G.auto = function(t, e, i) {
                function r(t) {
                    p.unshift(t)
                }
                function n(t) {
                    var e = _(p, t);
                    e >= 0 && p.splice(e, 1)
                }
                function o() {
                    a--,
                    v(p.slice(0), function(t) {
                        t()
                    })
                }
                "function" == typeof arguments[1] && (i = e,
                e = null),
                i = d(i || h);
                var s = H(t)
                  , a = s.length;
                if (!a)
                    return i(null);
                e || (e = a);
                var u = {}
                  , l = 0
                  , c = !1
                  , p = [];
                r(function() {
                    a || i(null, u)
                }),
                v(s, function(s) {
                    function a() {
                        return e > l && m(v, function(t, e) {
                            return t && u.hasOwnProperty(e)
                        }, !0) && !u.hasOwnProperty(s)
                    }
                    function h() {
                        a() && (l++,
                        n(h),
                        d[d.length - 1](f, u))
                    }
                    if (!c) {
                        for (var p, d = X(t[s]) ? t[s] : [t[s]], f = T(function(t, e) {
                            if (l--,
                            e.length <= 1 && (e = e[0]),
                            t) {
                                var r = {};
                                x(u, function(t, e) {
                                    r[e] = t
                                }),
                                r[s] = e,
                                c = !0,
                                i(t, r)
                            } else
                                u[s] = e,
                                G.setImmediate(o)
                        }), v = d.slice(0, d.length - 1), y = v.length; y--; ) {
                            if (!(p = t[v[y]]))
                                throw new Error("Has nonexistent dependency in " + v.join(", "));
                            if (X(p) && _(p, s) >= 0)
                                throw new Error("Has cyclic dependencies")
                        }
                        a() ? (l++,
                        d[d.length - 1](f, u)) : r(h)
                    }
                })
            }
            ,
            G.retry = function(t, e, i) {
                function r(t, e) {
                    for (; o.times; ) {
                        var i = !(o.times -= 1);
                        n.push(function(t, i) {
                            return function(r) {
                                t(function(t, e) {
                                    r(!t || i, {
                                        err: t,
                                        result: e
                                    })
                                }, e)
                            }
                        }(o.task, i)),
                        !i && o.interval > 0 && n.push(function(t) {
                            return function(e) {
                                setTimeout(function() {
                                    e(null)
                                }, t)
                            }
                        }(o.interval))
                    }
                    G.series(n, function(e, i) {
                        i = i[i.length - 1],
                        (t || o.callback)(i.err, i.result)
                    })
                }
                var n = []
                  , o = {
                    times: 5,
                    interval: 0
                }
                  , s = arguments.length;
                if (1 > s || s > 3)
                    throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
                return 2 >= s && "function" == typeof t && (i = e,
                e = t),
                "function" != typeof t && function(t, e) {
                    if ("number" == typeof e)
                        t.times = parseInt(e, 10) || 5;
                    else {
                        if ("object" != (void 0 === e ? "undefined" : a(e)))
                            throw new Error("Unsupported argument type for 'times': " + (void 0 === e ? "undefined" : a(e)));
                        t.times = parseInt(e.times, 10) || 5,
                        t.interval = parseInt(e.interval, 10) || 0
                    }
                }(o, t),
                o.callback = i,
                o.task = e,
                o.callback ? r() : r
            }
            ,
            G.waterfall = function(t, e) {
                function i(t) {
                    return T(function(r, n) {
                        if (r)
                            e.apply(null, [r].concat(n));
                        else {
                            var o = t.next();
                            o ? n.push(i(o)) : n.push(e),
                            U(t).apply(null, n)
                        }
                    })
                }
                if (e = d(e || h),
                !X(t)) {
                    var r = new Error("First argument to waterfall must be an array of functions");
                    return e(r)
                }
                return t.length ? void i(G.iterator(t))() : e()
            }
            ,
            G.parallel = function(t, e) {
                F(G.eachOf, t, e)
            }
            ,
            G.parallelLimit = function(t, e, i) {
                F(E(e), t, i)
            }
            ,
            G.series = function(t, e) {
                F(G.eachOfSeries, t, e)
            }
            ,
            G.iterator = function(t) {
                function e(i) {
                    function r() {
                        return t.length && t[i].apply(null, arguments),
                        r.next()
                    }
                    return r.next = function() {
                        return i < t.length - 1 ? e(i + 1) : null
                    }
                    ,
                    r
                }
                return e(0)
            }
            ,
            G.apply = T(function(t, e) {
                return T(function(i) {
                    return t.apply(null, e.concat(i))
                })
            }),
            G.concat = S(L),
            G.concatSeries = C(L),
            G.whilst = function(t, e, i) {
                if (i = i || h,
                t()) {
                    var r = T(function(n, o) {
                        n ? i(n) : t.apply(this, o) ? e(r) : i.apply(null, [null].concat(o))
                    });
                    e(r)
                } else
                    i(null)
            }
            ,
            G.doWhilst = function(t, e, i) {
                var r = 0;
                return G.whilst(function() {
                    return ++r <= 1 || e.apply(this, arguments)
                }, t, i)
            }
            ,
            G.until = function(t, e, i) {
                return G.whilst(function() {
                    return !t.apply(this, arguments)
                }, e, i)
            }
            ,
            G.doUntil = function(t, e, i) {
                return G.doWhilst(t, function() {
                    return !e.apply(this, arguments)
                }, i)
            }
            ,
            G.during = function(t, e, i) {
                i = i || h;
                var r = T(function(e, r) {
                    e ? i(e) : (r.push(n),
                    t.apply(this, r))
                })
                  , n = function(t, n) {
                    t ? i(t) : n ? e(r) : i(null)
                };
                t(n)
            }
            ,
            G.doDuring = function(t, e, i) {
                var r = 0;
                G.during(function(t) {
                    r++ < 1 ? t(null, !0) : e.apply(this, arguments)
                }, t, i)
            }
            ,
            G.queue = function(t, e) {
                return B(function(e, i) {
                    t(e[0], i)
                }, e, 1)
            }
            ,
            G.priorityQueue = function(t, e) {
                function i(t, e) {
                    return t.priority - e.priority
                }
                function r(t, e, i) {
                    for (var r = -1, n = t.length - 1; n > r; ) {
                        var o = r + (n - r + 1 >>> 1);
                        i(e, t[o]) >= 0 ? r = o : n = o - 1
                    }
                    return r
                }
                function n(t, e, n, o) {
                    if (null != o && "function" != typeof o)
                        throw new Error("task callback must be a function");
                    return t.started = !0,
                    X(e) || (e = [e]),
                    0 === e.length ? G.setImmediate(function() {
                        t.drain()
                    }) : void v(e, function(e) {
                        var s = {
                            data: e,
                            priority: n,
                            callback: "function" == typeof o ? o : h
                        };
                        t.tasks.splice(r(t.tasks, s, i) + 1, 0, s),
                        t.tasks.length === t.concurrency && t.saturated(),
                        G.setImmediate(t.process)
                    })
                }
                var o = G.queue(t, e);
                return o.push = function(t, e, i) {
                    n(o, t, e, i)
                }
                ,
                delete o.unshift,
                o
            }
            ,
            G.cargo = function(t, e) {
                return B(t, 1, e)
            }
            ,
            G.log = I("log"),
            G.dir = I("dir"),
            G.memoize = function(t, e) {
                var i = {}
                  , r = {}
                  , n = Object.prototype.hasOwnProperty;
                e = e || u;
                var o = T(function(o) {
                    var s = o.pop()
                      , a = e.apply(null, o);
                    n.call(i, a) ? G.setImmediate(function() {
                        s.apply(null, i[a])
                    }) : n.call(r, a) ? r[a].push(s) : (r[a] = [s],
                    t.apply(null, o.concat([T(function(t) {
                        i[a] = t;
                        var e = r[a];
                        delete r[a];
                        for (var n = 0, o = e.length; o > n; n++)
                            e[n].apply(null, t)
                    })])))
                });
                return o.memo = i,
                o.unmemoized = t,
                o
            }
            ,
            G.unmemoize = function(t) {
                return function() {
                    return (t.unmemoized || t).apply(null, arguments)
                }
            }
            ,
            G.times = N(G.map),
            G.timesSeries = N(G.mapSeries),
            G.timesLimit = function(t, e, i, r) {
                return G.mapLimit(g(t), e, i, r)
            }
            ,
            G.seq = function() {
                var t = arguments;
                return T(function(e) {
                    var i = this
                      , r = e[e.length - 1];
                    "function" == typeof r ? e.pop() : r = h,
                    G.reduce(t, e, function(t, e, r) {
                        e.apply(i, t.concat([T(function(t, e) {
                            r(t, e)
                        })]))
                    }, function(t, e) {
                        r.apply(i, [t].concat(e))
                    })
                })
            }
            ,
            G.compose = function() {
                return G.seq.apply(null, Array.prototype.reverse.call(arguments))
            }
            ,
            G.applyEach = k(G.eachOf),
            G.applyEachSeries = k(G.eachOfSeries),
            G.forever = function(t, e) {
                function i(t) {
                    return t ? r(t) : void n(i)
                }
                var r = p(e || h)
                  , n = U(t);
                i()
            }
            ,
            G.ensureAsync = U,
            G.constant = T(function(t) {
                var e = [null].concat(t);
                return function(t) {
                    return t.apply(this, e)
                }
            }),
            G.wrapSync = G.asyncify = function(t) {
                return T(function(e) {
                    var i, r = e.pop();
                    try {
                        i = t.apply(this, e)
                    } catch (t) {
                        return r(t)
                    }
                    Y(i) && "function" == typeof i.then ? i.then(function(t) {
                        r(null, t)
                    }).catch(function(t) {
                        r(t.message ? t : new Error(t))
                    }) : r(null, i)
                })
            }
            ,
            "object" == a(n) && n.exports ? n.exports = G : (o = [],
            void 0 !== (s = function() {
                return G
            }
            .apply(e, o)) && (n.exports = s))
        }()
    }
    ).call(e, i(17), i(91).setImmediate, i(46), i(47)(t))
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r, c) {
        if (!t)
            throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");
        e = e || 100,
        i = i || 100,
        c = c || l.RESOLUTION;
        var p = new n;
        if (p.width = e,
        p.height = i,
        p.resolution = c,
        p.scaleMode = r || l.SCALE_MODES.DEFAULT,
        p.hasLoaded = !0,
        o.call(this, p, new u.Rectangle(0,0,e,i)),
        this.width = e,
        this.height = i,
        this.resolution = c,
        this.render = null,
        this.renderer = t,
        this.renderer.type === l.RENDERER_TYPE.WEBGL) {
            var d = this.renderer.gl;
            this.textureBuffer = new s(d,this.width,this.height,p.scaleMode,this.resolution),
            this.baseTexture._glTextures[d.id] = this.textureBuffer.texture,
            this.filterManager = new a(this.renderer),
            this.filterManager.onContextChange(),
            this.filterManager.resize(e, i),
            this.render = this.renderWebGL,
            this.renderer.currentRenderer.start(),
            this.renderer.currentRenderTarget.activate()
        } else
            this.render = this.renderCanvas,
            this.textureBuffer = new h(this.width * this.resolution,this.height * this.resolution),
            this.baseTexture.source = this.textureBuffer.canvas;
        this.valid = !0,
        this._updateUvs()
    }
    var n = i(20)
      , o = i(14)
      , s = i(21)
      , a = i(51)
      , h = i(34)
      , u = i(3)
      , l = i(1)
      , c = new u.Matrix;
    (r.prototype = Object.create(o.prototype)).constructor = r,
    t.exports = r,
    r.prototype.resize = function(t, e, i) {
        t === this.width && e === this.height || (this.valid = t > 0 && e > 0,
        this.width = this._frame.width = this.crop.width = t,
        this.height = this._frame.height = this.crop.height = e,
        i && (this.baseTexture.width = this.width,
        this.baseTexture.height = this.height),
        this.valid && (this.textureBuffer.resize(this.width, this.height),
        this.filterManager && this.filterManager.resize(this.width, this.height)))
    }
    ,
    r.prototype.clear = function() {
        this.valid && (this.renderer.type === l.RENDERER_TYPE.WEBGL && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer),
        this.textureBuffer.clear())
    }
    ,
    r.prototype.renderWebGL = function(t, e, i, r) {
        if (this.valid) {
            if (r = void 0 === r || r,
            this.textureBuffer.transform = e,
            this.textureBuffer.activate(),
            t.worldAlpha = 1,
            r) {
                t.worldTransform.identity(),
                t.currentBounds = null;
                var n, o, s = t.children;
                for (n = 0,
                o = s.length; n < o; ++n)
                    s[n].updateTransform()
            }
            var a = this.renderer.filterManager;
            this.renderer.filterManager = this.filterManager,
            this.renderer.renderDisplayObject(t, this.textureBuffer, i),
            this.renderer.filterManager = a
        }
    }
    ,
    r.prototype.renderCanvas = function(t, e, i, r) {
        if (this.valid) {
            r = !!r;
            var n = c;
            n.identity(),
            e && n.append(e);
            var o = t.worldTransform;
            t.worldTransform = n,
            t.worldAlpha = 1;
            var s, a, h = t.children;
            for (s = 0,
            a = h.length; s < a; ++s)
                h[s].updateTransform();
            i && this.textureBuffer.clear();
            var u = this.textureBuffer.context
              , l = this.renderer.resolution;
            this.renderer.resolution = this.resolution,
            this.renderer.renderDisplayObject(t, u),
            this.renderer.resolution = l,
            t.worldTransform === n && (t.worldTransform = o)
        }
    }
    ,
    r.prototype.destroy = function() {
        o.prototype.destroy.call(this, !0),
        this.textureBuffer.destroy(),
        this.filterManager && this.filterManager.destroy(),
        this.renderer = null
    }
    ,
    r.prototype.getImage = function() {
        var t = new Image;
        return t.src = this.getBase64(),
        t
    }
    ,
    r.prototype.getBase64 = function() {
        return this.getCanvas().toDataURL()
    }
    ,
    r.prototype.getCanvas = function() {
        if (this.renderer.type === l.RENDERER_TYPE.WEBGL) {
            var t = this.renderer.gl
              , e = this.textureBuffer.size.width
              , i = this.textureBuffer.size.height
              , r = new Uint8Array(4 * e * i);
            t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer),
            t.readPixels(0, 0, e, i, t.RGBA, t.UNSIGNED_BYTE, r),
            t.bindFramebuffer(t.FRAMEBUFFER, null);
            var n = new h(e,i)
              , o = n.context.getImageData(0, 0, e, i);
            return o.data.set(r),
            n.context.putImageData(o, 0, 0),
            n.canvas
        }
        return this.textureBuffer.canvas
    }
    ,
    r.prototype.getPixels = function() {
        var t, e;
        if (this.renderer.type === l.RENDERER_TYPE.WEBGL) {
            var i = this.renderer.gl;
            t = this.textureBuffer.size.width,
            e = this.textureBuffer.size.height;
            var r = new Uint8Array(4 * t * e);
            return i.bindFramebuffer(i.FRAMEBUFFER, this.textureBuffer.frameBuffer),
            i.readPixels(0, 0, t, e, i.RGBA, i.UNSIGNED_BYTE, r),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            r
        }
        return t = this.textureBuffer.canvas.width,
        e = this.textureBuffer.canvas.height,
        this.textureBuffer.canvas.getContext("2d").getImageData(0, 0, t, e).data
    }
    ,
    r.prototype.getPixel = function(t, e) {
        if (this.renderer.type === l.RENDERER_TYPE.WEBGL) {
            var i = this.renderer.gl
              , r = new Uint8Array(4);
            return i.bindFramebuffer(i.FRAMEBUFFER, this.textureBuffer.frameBuffer),
            i.readPixels(t, e, 1, 1, i.RGBA, i.UNSIGNED_BYTE, r),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            r
        }
        return this.textureBuffer.canvas.getContext("2d").getImageData(t, e, 1, 1).data
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        this.canvas = document.createElement("canvas"),
        this.context = this.canvas.getContext("2d"),
        this.canvas.width = t,
        this.canvas.height = e
    }
    r.prototype.constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        width: {
            get: function() {
                return this.canvas.width
            },
            set: function(t) {
                this.canvas.width = t
            }
        },
        height: {
            get: function() {
                return this.canvas.height
            },
            set: function(t) {
                this.canvas.height = t
            }
        }
    }),
    r.prototype.clear = function() {
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    ,
    r.prototype.resize = function(t, e) {
        this.canvas.width = t,
        this.canvas.height = e
    }
    ,
    r.prototype.destroy = function() {
        this.context = null,
        this.canvas = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        this.shaders = [],
        this.padding = 0,
        this.uniforms = i || {},
        this.vertexSrc = t || n.defaultVertexSrc,
        this.fragmentSrc = e || n.defaultFragmentSrc
    }
    var n = i(24);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.getShader = function(t) {
        var e = t.gl
          , i = this.shaders[e.id];
        return i || (i = new n(t.shaderManager,this.vertexSrc,this.fragmentSrc,this.uniforms,this.attributes),
        this.shaders[e.id] = i),
        i
    }
    ,
    r.prototype.applyFilter = function(t, e, i, r) {
        var n = this.getShader(t);
        t.filterManager.applyFilter(n, e, i, r)
    }
    ,
    r.prototype.syncUniform = function(t) {
        for (var e = 0, i = this.shaders.length; e < i; ++e)
            this.shaders[e].syncUniform(t)
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(1)
      , n = {};
    t.exports = n,
    n.renderGraphics = function(t, e) {
        var i = t.worldAlpha;
        t.dirty && (this.updateGraphicsTint(t),
        t.dirty = !1);
        for (var n = 0; n < t.graphicsData.length; n++) {
            var o = t.graphicsData[n]
              , s = o.shape
              , a = o._fillTint
              , h = o._lineTint;
            if (e.lineWidth = o.lineWidth,
            o.type === r.SHAPES.POLY) {
                e.beginPath();
                var u = s.points;
                e.moveTo(u[0], u[1]);
                for (var l = 1; l < u.length / 2; l++)
                    e.lineTo(u[2 * l], u[2 * l + 1]);
                s.closed && e.lineTo(u[0], u[1]),
                u[0] === u[u.length - 2] && u[1] === u[u.length - 1] && e.closePath(),
                o.fill && (e.globalAlpha = o.fillAlpha * i,
                e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                e.fill()),
                o.lineWidth && (e.globalAlpha = o.lineAlpha * i,
                e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6),
                e.stroke())
            } else if (o.type === r.SHAPES.RECT)
                (o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * i,
                e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                e.fillRect(s.x, s.y, s.width, s.height)),
                o.lineWidth && (e.globalAlpha = o.lineAlpha * i,
                e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6),
                e.strokeRect(s.x, s.y, s.width, s.height));
            else if (o.type === r.SHAPES.CIRC)
                e.beginPath(),
                e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI),
                e.closePath(),
                o.fill && (e.globalAlpha = o.fillAlpha * i,
                e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                e.fill()),
                o.lineWidth && (e.globalAlpha = o.lineAlpha * i,
                e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6),
                e.stroke());
            else if (o.type === r.SHAPES.ELIP) {
                var c = 2 * s.width
                  , p = 2 * s.height
                  , d = s.x - c / 2
                  , f = s.y - p / 2;
                e.beginPath();
                var v = c / 2 * .5522848
                  , y = p / 2 * .5522848
                  , g = d + c
                  , m = f + p
                  , x = d + c / 2
                  , _ = f + p / 2;
                e.moveTo(d, _),
                e.bezierCurveTo(d, _ - y, x - v, f, x, f),
                e.bezierCurveTo(x + v, f, g, _ - y, g, _),
                e.bezierCurveTo(g, _ + y, x + v, m, x, m),
                e.bezierCurveTo(x - v, m, d, _ + y, d, _),
                e.closePath(),
                o.fill && (e.globalAlpha = o.fillAlpha * i,
                e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                e.fill()),
                o.lineWidth && (e.globalAlpha = o.lineAlpha * i,
                e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6),
                e.stroke())
            } else if (o.type === r.SHAPES.RREC) {
                var b = s.x
                  , T = s.y
                  , w = s.width
                  , E = s.height
                  , S = s.radius
                  , A = Math.min(w, E) / 2 | 0;
                S = S > A ? A : S,
                e.beginPath(),
                e.moveTo(b, T + S),
                e.lineTo(b, T + E - S),
                e.quadraticCurveTo(b, T + E, b + S, T + E),
                e.lineTo(b + w - S, T + E),
                e.quadraticCurveTo(b + w, T + E, b + w, T + E - S),
                e.lineTo(b + w, T + S),
                e.quadraticCurveTo(b + w, T, b + w - S, T),
                e.lineTo(b + S, T),
                e.quadraticCurveTo(b, T, b, T + S),
                e.closePath(),
                (o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * i,
                e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                e.fill()),
                o.lineWidth && (e.globalAlpha = o.lineAlpha * i,
                e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6),
                e.stroke())
            }
        }
    }
    ,
    n.renderGraphicsMask = function(t, e) {
        var i = t.graphicsData.length;
        if (0 !== i) {
            e.beginPath();
            for (var n = 0; n < i; n++) {
                var o = t.graphicsData[n]
                  , s = o.shape;
                if (o.type === r.SHAPES.POLY) {
                    var a = s.points;
                    e.moveTo(a[0], a[1]);
                    for (var h = 1; h < a.length / 2; h++)
                        e.lineTo(a[2 * h], a[2 * h + 1]);
                    a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
                } else if (o.type === r.SHAPES.RECT)
                    e.rect(s.x, s.y, s.width, s.height),
                    e.closePath();
                else if (o.type === r.SHAPES.CIRC)
                    e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI),
                    e.closePath();
                else if (o.type === r.SHAPES.ELIP) {
                    var u = 2 * s.width
                      , l = 2 * s.height
                      , c = s.x - u / 2
                      , p = s.y - l / 2
                      , d = u / 2 * .5522848
                      , f = l / 2 * .5522848
                      , v = c + u
                      , y = p + l
                      , g = c + u / 2
                      , m = p + l / 2;
                    e.moveTo(c, m),
                    e.bezierCurveTo(c, m - f, g - d, p, g, p),
                    e.bezierCurveTo(g + d, p, v, m - f, v, m),
                    e.bezierCurveTo(v, m + f, g + d, y, g, y),
                    e.bezierCurveTo(g - d, y, c, m + f, c, m),
                    e.closePath()
                } else if (o.type === r.SHAPES.RREC) {
                    var x = s.x
                      , _ = s.y
                      , b = s.width
                      , T = s.height
                      , w = s.radius
                      , E = Math.min(b, T) / 2 | 0;
                    w = w > E ? E : w,
                    e.moveTo(x, _ + w),
                    e.lineTo(x, _ + T - w),
                    e.quadraticCurveTo(x, _ + T, x + w, _ + T),
                    e.lineTo(x + b - w, _ + T),
                    e.quadraticCurveTo(x + b, _ + T, x + b, _ + T - w),
                    e.lineTo(x + b, _ + w),
                    e.quadraticCurveTo(x + b, _, x + b - w, _),
                    e.lineTo(x + w, _),
                    e.quadraticCurveTo(x, _, x, _ + w),
                    e.closePath()
                }
            }
        }
    }
    ,
    n.updateGraphicsTint = function(t) {
        if (16777215 !== t.tint || t._prevTint !== t.tint) {
            t._prevTint = t.tint;
            for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
                var o = t.graphicsData[n]
                  , s = 0 | o.fillColor
                  , a = 0 | o.lineColor;
                o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * i * 255 << 8) + (255 & s) / 255 * r * 255,
                o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
            }
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, i(130), i(64), {
            strength: {
                type: "1f",
                value: 1
            }
        }),
        this.passes = 1,
        this.strength = 4
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i, r) {
        var n = this.getShader(t);
        if (this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (e.frame.height / e.size.height),
        1 === this.passes)
            t.filterManager.applyFilter(n, e, i, r);
        else {
            for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, h = 0; h < this.passes - 1; h++) {
                t.filterManager.applyFilter(n, s, a, !0);
                var u = a;
                a = s,
                s = u
            }
            t.filterManager.applyFilter(n, s, i, r),
            t.filterManager.returnRenderTarget(o)
        }
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.strength
            },
            set: function(t) {
                this.padding = .5 * Math.abs(t),
                this.strength = t
            }
        }
    })
}
, function(t, e, i) {
    "use strict";
    t.exports = i(177),
    t.exports.Resource = i(39),
    t.exports.middleware = {
        caching: {
            memory: i(182)
        },
        parsing: {
            blob: i(183)
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        if (s.call(this),
        i = i || {},
        "string" != typeof t || "string" != typeof e)
            throw new Error("Both name and url are required for constructing a resource.");
        this.name = t,
        this.url = e,
        this.isDataUrl = 0 === this.url.indexOf("data:"),
        this.data = null,
        this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin,
        this.loadType = i.loadType || this._determineLoadType(),
        this.xhrType = i.xhrType,
        this.metadata = i.metadata || {},
        this.error = null,
        this.xhr = null,
        this.isJson = !1,
        this.isXml = !1,
        this.isImage = !1,
        this.isAudio = !1,
        this.isVideo = !1,
        this._dequeue = null,
        this._boundComplete = this.complete.bind(this),
        this._boundOnError = this._onError.bind(this),
        this._boundOnProgress = this._onProgress.bind(this),
        this._boundXhrOnError = this._xhrOnError.bind(this),
        this._boundXhrOnAbort = this._xhrOnAbort.bind(this),
        this._boundXhrOnLoad = this._xhrOnLoad.bind(this),
        this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
    }
    function n(t) {
        return t.toString().replace("object ", "")
    }
    function o(t, e, i) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)),
        e && (t[e] = i)
    }
    var s = i(2)
      , a = i(68)
      , h = !(!window.XDomainRequest || "withCredentials"in new XMLHttpRequest)
      , u = null;
    (r.prototype = Object.create(s.prototype)).constructor = r,
    t.exports = r,
    r.prototype.complete = function() {
        this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError),
        this.data.removeEventListener("load", this._boundComplete),
        this.data.removeEventListener("progress", this._boundOnProgress),
        this.data.removeEventListener("canplaythrough", this._boundComplete)),
        this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError),
        this.xhr.removeEventListener("abort", this._boundXhrOnAbort),
        this.xhr.removeEventListener("progress", this._boundOnProgress),
        this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null,
        this.xhr.ontimeout = null,
        this.xhr.onprogress = null,
        this.xhr.onload = null)),
        this.emit("complete", this)
    }
    ,
    r.prototype.load = function(t) {
        switch (this.emit("start", this),
        t && this.once("complete", t),
        !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)),
        this.loadType) {
        case r.LOAD_TYPE.IMAGE:
            this._loadImage();
            break;
        case r.LOAD_TYPE.AUDIO:
            this._loadElement("audio");
            break;
        case r.LOAD_TYPE.VIDEO:
            this._loadElement("video");
            break;
        case r.LOAD_TYPE.XHR:
        default:
            h && this.crossOrigin ? this._loadXdr() : this._loadXhr()
        }
    }
    ,
    r.prototype._loadImage = function() {
        this.data = new Image,
        this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
        this.data.src = this.url,
        this.isImage = !0,
        this.data.addEventListener("error", this._boundOnError, !1),
        this.data.addEventListener("load", this._boundComplete, !1),
        this.data.addEventListener("progress", this._boundOnProgress, !1)
    }
    ,
    r.prototype._loadElement = function(t) {
        if ("audio" === t && "undefined" != typeof Audio ? this.data = new Audio : this.data = document.createElement(t),
        null === this.data)
            return this.error = new Error("Unsupported element " + t),
            void this.complete();
        if (navigator.isCocoonJS)
            this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
        else if (Array.isArray(this.url))
            for (var e = 0; e < this.url.length; ++e)
                this.data.appendChild(this._createSource(t, this.url[e]));
        else
            this.data.appendChild(this._createSource(t, this.url));
        this["is" + t[0].toUpperCase() + t.substring(1)] = !0,
        this.data.addEventListener("error", this._boundOnError, !1),
        this.data.addEventListener("load", this._boundComplete, !1),
        this.data.addEventListener("progress", this._boundOnProgress, !1),
        this.data.addEventListener("canplaythrough", this._boundComplete, !1),
        this.data.load()
    }
    ,
    r.prototype._loadXhr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var t = this.xhr = new XMLHttpRequest;
        t.open("GET", this.url, !0),
        this.xhrType === r.XHR_RESPONSE_TYPE.JSON || this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = r.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType,
        t.addEventListener("error", this._boundXhrOnError, !1),
        t.addEventListener("abort", this._boundXhrOnAbort, !1),
        t.addEventListener("progress", this._boundOnProgress, !1),
        t.addEventListener("load", this._boundXhrOnLoad, !1),
        t.send()
    }
    ,
    r.prototype._loadXdr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var t = this.xhr = new XDomainRequest;
        t.timeout = 5e3,
        t.onerror = this._boundXhrOnError,
        t.ontimeout = this._boundXdrOnTimeout,
        t.onprogress = this._boundOnProgress,
        t.onload = this._boundXhrOnLoad,
        t.open("GET", this.url, !0),
        setTimeout(function() {
            t.send()
        }, 0)
    }
    ,
    r.prototype._createSource = function(t, e, i) {
        i || (i = t + "/" + e.substr(e.lastIndexOf(".") + 1));
        var r = document.createElement("source");
        return r.src = e,
        r.type = i,
        r
    }
    ,
    r.prototype._onError = function(t) {
        this.error = new Error("Failed to load element using " + t.target.nodeName),
        this.complete()
    }
    ,
    r.prototype._onProgress = function(t) {
        t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
    }
    ,
    r.prototype._xhrOnError = function() {
        this.error = new Error(n(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'),
        this.complete()
    }
    ,
    r.prototype._xhrOnAbort = function() {
        this.error = new Error(n(this.xhr) + " Request was aborted by the user."),
        this.complete()
    }
    ,
    r.prototype._xdrOnTimeout = function() {
        this.error = new Error(n(this.xhr) + " Request timed out."),
        this.complete()
    }
    ,
    r.prototype._xhrOnLoad = function() {
        var t = this.xhr
          , e = void 0 !== t.status ? t.status : 200;
        if (200 === e || 204 === e || 0 === e && t.responseText.length > 0)
            if (this.xhrType === r.XHR_RESPONSE_TYPE.TEXT)
                this.data = t.responseText;
            else if (this.xhrType === r.XHR_RESPONSE_TYPE.JSON)
                try {
                    this.data = JSON.parse(t.responseText),
                    this.isJson = !0
                } catch (t) {
                    this.error = new Error("Error trying to parse loaded json:",t)
                }
            else if (this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT)
                try {
                    if (window.DOMParser) {
                        var i = new DOMParser;
                        this.data = i.parseFromString(t.responseText, "text/xml")
                    } else {
                        var n = document.createElement("div");
                        n.innerHTML = t.responseText,
                        this.data = n
                    }
                    this.isXml = !0
                } catch (t) {
                    this.error = new Error("Error trying to parse loaded xml:",t)
                }
            else
                this.data = t.response || t.responseText;
        else
            this.error = new Error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
        this.complete()
    }
    ,
    r.prototype._determineCrossOrigin = function(t, e) {
        if (0 === t.indexOf("data:"))
            return "";
        e = e || window.location,
        u || (u = document.createElement("a")),
        u.href = t;
        var i = !(t = a.parse(u.href)).port && "" === e.port || t.port === e.port;
        return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
    }
    ,
    r.prototype._determineXhrType = function() {
        return r._xhrTypeMap[this._getExtension()] || r.XHR_RESPONSE_TYPE.TEXT
    }
    ,
    r.prototype._determineLoadType = function() {
        return r._loadTypeMap[this._getExtension()] || r.LOAD_TYPE.XHR
    }
    ,
    r.prototype._getExtension = function() {
        var t, e = this.url;
        if (this.isDataUrl) {
            var i = e.indexOf("/");
            t = e.substring(i + 1, e.indexOf(";", i))
        } else {
            var r = e.indexOf("?");
            -1 !== r && (e = e.substring(0, r)),
            t = e.substring(e.lastIndexOf(".") + 1)
        }
        return t.toLowerCase()
    }
    ,
    r.prototype._getMimeFromXhrType = function(t) {
        switch (t) {
        case r.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";
        case r.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";
        case r.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";
        case r.XHR_RESPONSE_TYPE.JSON:
            return "application/json";
        case r.XHR_RESPONSE_TYPE.DEFAULT:
        case r.XHR_RESPONSE_TYPE.TEXT:
        default:
            return "text/plain"
        }
    }
    ,
    r.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    },
    r.XHR_READY_STATE = {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
    },
    r.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    },
    r._loadTypeMap = {
        gif: r.LOAD_TYPE.IMAGE,
        png: r.LOAD_TYPE.IMAGE,
        bmp: r.LOAD_TYPE.IMAGE,
        jpg: r.LOAD_TYPE.IMAGE,
        jpeg: r.LOAD_TYPE.IMAGE,
        tif: r.LOAD_TYPE.IMAGE,
        tiff: r.LOAD_TYPE.IMAGE,
        webp: r.LOAD_TYPE.IMAGE,
        tga: r.LOAD_TYPE.IMAGE,
        "svg+xml": r.LOAD_TYPE.IMAGE
    },
    r._xhrTypeMap = {
        xhtml: r.XHR_RESPONSE_TYPE.DOCUMENT,
        html: r.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: r.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: r.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: r.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: r.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: r.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: r.XHR_RESPONSE_TYPE.BLOB,
        png: r.XHR_RESPONSE_TYPE.BLOB,
        bmp: r.XHR_RESPONSE_TYPE.BLOB,
        jpg: r.XHR_RESPONSE_TYPE.BLOB,
        jpeg: r.XHR_RESPONSE_TYPE.BLOB,
        tif: r.XHR_RESPONSE_TYPE.BLOB,
        tiff: r.XHR_RESPONSE_TYPE.BLOB,
        webp: r.XHR_RESPONSE_TYPE.BLOB,
        tga: r.XHR_RESPONSE_TYPE.BLOB,
        json: r.XHR_RESPONSE_TYPE.JSON,
        text: r.XHR_RESPONSE_TYPE.TEXT,
        txt: r.XHR_RESPONSE_TYPE.TEXT
    },
    r.setExtensionLoadType = function(t, e) {
        o(r._loadTypeMap, t, e)
    }
    ,
    r.setExtensionXhrType = function(t, e) {
        o(r._xhrTypeMap, t, e)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = r(i(9))
      , h = r(i(19))
      , u = i(7)
      , l = function(t) {
        function e(i) {
            var r = i.texture;
            n(this, e);
            var s = o(this, t.call(this));
            return s.startY = 0,
            s.isDown = !1,
            s.initSprite({
                texture: r,
                interactive: !0
            }),
            h.default.mobile ? (s.sprite.on("touchstart", s.inputDown, s),
            s.sprite.on("touchend", s.inputUp, s)) : (s.sprite.on("mousedown", s.inputDown, s),
            s.sprite.on("mouseup", s.inputUp, s)),
            s
        }
        return s(e, t),
        e.prototype.ready = function() {
            this.startY = this.position.y
        }
        ,
        e.prototype.update = function() {
            this.sprite.alpha = (0,
            u.round)(this.sprite.alpha, .4)
        }
        ,
        e.prototype.inputDown = function() {
            this.isDown || (this.isDown = !0,
            this.sprite.alpha = .5,
            this.position.y = this.startY + 4,
            this.emit("down"))
        }
        ,
        e.prototype.inputUp = function() {
            this.isDown && (this.isDown = !1,
            this.sprite.alpha = 1,
            this.position.y = this.startY,
            this.emit("click"))
        }
        ,
        e
    }(a.default);
    e.default = l
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0,
    e.GROUPS = void 0;
    var r = i(76);
    e.GROUPS = {
        ME: (0,
        r.getGroupMask)(0),
        DANGER: (0,
        r.getGroupMask)(1),
        TRIGGER: (0,
        r.getGroupMask)(2)
    }
}
, function(t, e, i) {
    i(81),
    i(82),
    i(83),
    i(84),
    window.ArrayBuffer || (window.ArrayBuffer = Array),
    window.Float32Array || (window.Float32Array = Array),
    window.Uint32Array || (window.Uint32Array = Array),
    window.Uint16Array || (window.Uint16Array = Array)
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        this._count = 0,
        this.duration = 0,
        this.repeat = !1,
        this.removed = !1,
        this.callback = null,
        this.callbackCtx = null,
        this.set(t)
    }
    function n(t) {
        var e = a.pop();
        return e ? r.call(e, t) : e = new r(t),
        e
    }
    function o(t) {
        a.push(t)
    }
    var s = (i(6),
    i(7));
    r.prototype.set = function(t) {
        return this.duration = "number" != typeof t ? 0 : t,
        this.reset()
    }
    ,
    r.prototype.reset = function() {
        return this.removed = !1,
        this._count = this.duration,
        this
    }
    ,
    r.prototype.pause = function() {
        return this.paused = !0,
        this
    }
    ,
    r.prototype.resume = function() {
        return this.paused = !1,
        this
    }
    ,
    r.prototype.update = function(t) {
        this.removed || this.paused || (this._count -= t,
        this._count < 0 && (this._count = 0,
        "function" == typeof this.callback && this.callback.call(this.callbackCtx),
        this.repeat && !this.removed ? this.reset() : this.removed = !0))
    }
    ,
    Object.defineProperty(r.prototype, "elapsed", {
        get: function() {
            return this.duration - this._count
        }
    }),
    Object.defineProperty(r.prototype, "left", {
        get: function() {
            return this._count
        }
    });
    var a = [];
    Object.assign(r, {
        delta: 0,
        now: 0,
        timers: {
            0: []
        },
        activeTags: ["0"],
        deactiveTags: [],
        update: function(t) {
            this.delta = t,
            this.now += t;
            var e, i, r;
            for (i in this.timers)
                if (!(this.activeTags.indexOf(i) < 0))
                    for (r = this.timers[i],
                    e = 0; e < r.length; e++)
                        r[e].removed || r[e].update(t),
                        r[e].removed && (o(r[e]),
                        s.removeItems(r, e--, 1))
        },
        later: function(t, e, i, r) {
            var o = r || "0"
              , s = n(t);
            return s.repeat = !1,
            s.callback = e,
            s.callbackCtx = i,
            this.timers[o] || (this.timers[o] = [],
            this.activeTags.push(o)),
            this.timers[o].indexOf(s) < 0 && this.timers[o].push(s),
            s
        },
        laterSec: function(t, e, i, r) {
            this.later(Math.floor(1e3 * t), e, i, r)
        },
        interval: function(t, e, i, r) {
            var o = r || "0"
              , s = n(t);
            return s.repeat = !0,
            s.callback = e,
            s.callbackCtx = i,
            this.timers[o] || (this.timers[o] = [],
            this.activeTags.push(o)),
            this.timers[o].indexOf(s) < 0 && this.timers[o].push(s),
            s
        },
        intervalSec: function(t, e, i, r) {
            this.later(Math.floor(1e3 * t), e, i, r)
        },
        remove: function(t) {
            t && (t.removed = !0)
        },
        pauseTimersTagged: function(t) {
            return this.timers[t] && (s.removeItems(this.activeTags, this.activeTags.indexOf(t), 1),
            this.deactiveTags.push(t)),
            this
        },
        resumeTimersTagged: function(t) {
            return this.timers[t] && (s.removeItems(this.deactiveTags, this.deactiveTags.indexOf(t), 1),
            this.activeTags.push(t)),
            this
        }
    }),
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r() {
        this.a = 1,
        this.b = 0,
        this.c = 0,
        this.d = 1,
        this.tx = 0,
        this.ty = 0
    }
    var n = i(30);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.fromArray = function(t) {
        this.a = t[0],
        this.b = t[1],
        this.c = t[3],
        this.d = t[4],
        this.tx = t[2],
        this.ty = t[5]
    }
    ,
    r.prototype.set = function(t, e, i, r, n, o) {
        return this.a = t,
        this.b = e,
        this.c = i,
        this.d = r,
        this.tx = n,
        this.ty = o,
        this
    }
    ,
    r.prototype.toArray = function(t, e) {
        this.array || (this.array = new Float32Array(9));
        var i = e || this.array;
        return t ? (i[0] = this.a,
        i[1] = this.b,
        i[2] = 0,
        i[3] = this.c,
        i[4] = this.d,
        i[5] = 0,
        i[6] = this.tx,
        i[7] = this.ty,
        i[8] = 1) : (i[0] = this.a,
        i[1] = this.c,
        i[2] = this.tx,
        i[3] = this.b,
        i[4] = this.d,
        i[5] = this.ty,
        i[6] = 0,
        i[7] = 0,
        i[8] = 1),
        i
    }
    ,
    r.prototype.apply = function(t, e) {
        e = e || new n;
        var i = t.x
          , r = t.y;
        return e.x = this.a * i + this.c * r + this.tx,
        e.y = this.b * i + this.d * r + this.ty,
        e
    }
    ,
    r.prototype.applyInverse = function(t, e) {
        e = e || new n;
        var i = 1 / (this.a * this.d + this.c * -this.b)
          , r = t.x
          , o = t.y;
        return e.x = this.d * i * r + -this.c * i * o + (this.ty * this.c - this.tx * this.d) * i,
        e.y = this.a * i * o + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i,
        e
    }
    ,
    r.prototype.translate = function(t, e) {
        return this.tx += t,
        this.ty += e,
        this
    }
    ,
    r.prototype.scale = function(t, e) {
        return this.a *= t,
        this.d *= e,
        this.c *= t,
        this.b *= e,
        this.tx *= t,
        this.ty *= e,
        this
    }
    ,
    r.prototype.rotate = function(t) {
        var e = Math.cos(t)
          , i = Math.sin(t)
          , r = this.a
          , n = this.c
          , o = this.tx;
        return this.a = r * e - this.b * i,
        this.b = r * i + this.b * e,
        this.c = n * e - this.d * i,
        this.d = n * i + this.d * e,
        this.tx = o * e - this.ty * i,
        this.ty = o * i + this.ty * e,
        this
    }
    ,
    r.prototype.append = function(t) {
        var e = this.a
          , i = this.b
          , r = this.c
          , n = this.d;
        return this.a = t.a * e + t.b * r,
        this.b = t.a * i + t.b * n,
        this.c = t.c * e + t.d * r,
        this.d = t.c * i + t.d * n,
        this.tx = t.tx * e + t.ty * r + this.tx,
        this.ty = t.tx * i + t.ty * n + this.ty,
        this
    }
    ,
    r.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
        var u, l, c, p, d, f, v, y, g, m;
        return d = Math.sin(s),
        f = Math.cos(s),
        v = Math.cos(h),
        y = Math.sin(h),
        g = -Math.sin(a),
        m = Math.cos(a),
        u = f * n,
        l = d * n,
        c = -d * o,
        p = f * o,
        this.a = v * u + y * c,
        this.b = v * l + y * p,
        this.c = g * u + m * c,
        this.d = g * l + m * p,
        this.tx = t + (i * u + r * c),
        this.ty = e + (i * l + r * p),
        this
    }
    ,
    r.prototype.prepend = function(t) {
        var e = this.tx;
        if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
            var i = this.a
              , r = this.c;
            this.a = i * t.a + this.b * t.c,
            this.b = i * t.b + this.b * t.d,
            this.c = r * t.a + this.d * t.c,
            this.d = r * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx,
        this.ty = e * t.b + this.ty * t.d + t.ty,
        this
    }
    ,
    r.prototype.invert = function() {
        var t = this.a
          , e = this.b
          , i = this.c
          , r = this.d
          , n = this.tx
          , o = t * r - e * i;
        return this.a = r / o,
        this.b = -e / o,
        this.c = -i / o,
        this.d = t / o,
        this.tx = (i * this.ty - r * n) / o,
        this.ty = -(t * this.ty - e * n) / o,
        this
    }
    ,
    r.prototype.identity = function() {
        return this.a = 1,
        this.b = 0,
        this.c = 0,
        this.d = 1,
        this.tx = 0,
        this.ty = 0,
        this
    }
    ,
    r.prototype.clone = function() {
        var t = new r;
        return t.a = this.a,
        t.b = this.b,
        t.c = this.c,
        t.d = this.d,
        t.tx = this.tx,
        t.ty = this.ty,
        t
    }
    ,
    r.prototype.copy = function(t) {
        return t.a = this.a,
        t.b = this.b,
        t.c = this.c,
        t.d = this.d,
        t.tx = this.tx,
        t.ty = this.ty,
        t
    }
    ,
    r.IDENTITY = new r,
    r.TEMP_MATRIX = new r
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
    }
    var n = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
      , o = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
      , s = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
      , a = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
      , h = []
      , u = i(44)
      , l = [];
    !function() {
        for (var t = 0; t < 16; t++) {
            var e = [];
            l.push(e);
            for (var i = 0; i < 16; i++)
                for (var c = r(n[t] * n[i] + s[t] * o[i]), p = r(o[t] * n[i] + a[t] * o[i]), d = r(n[t] * s[i] + s[t] * a[i]), f = r(o[t] * s[i] + a[t] * a[i]), v = 0; v < 16; v++)
                    if (n[v] === c && o[v] === p && s[v] === d && a[v] === f) {
                        e.push(v);
                        break
                    }
        }
        for (t = 0; t < 16; t++) {
            var y = new u;
            y.set(n[t], o[t], s[t], a[t], 0, 0),
            h.push(y)
        }
    }();
    var c = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MIRROR_HORIZONTAL: 12,
        uX: function(t) {
            return n[t]
        },
        uY: function(t) {
            return o[t]
        },
        vX: function(t) {
            return s[t]
        },
        vY: function(t) {
            return a[t]
        },
        inv: function(t) {
            return 8 & t ? 15 & t : 7 & -t
        },
        add: function(t, e) {
            return l[t][e]
        },
        sub: function(t, e) {
            return l[t][c.inv(e)]
        },
        rotate180: function(t) {
            return 4 ^ t
        },
        isSwapWidthHeight: function(t) {
            return 2 == (3 & t)
        },
        byDirection: function(t, e) {
            return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? c.S : c.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? c.E : c.W : e > 0 ? t > 0 ? c.SE : c.SW : t > 0 ? c.NE : c.NW
        },
        matrixAppendRotationInv: function(t, e, i, r) {
            var n = h[c.inv(e)];
            i = i || 0,
            r = r || 0,
            n.tx = i,
            n.ty = r,
            t.append(n)
        }
    };
    t.exports = c
}
, function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function n(t) {
        if (l === setTimeout)
            return setTimeout(t, 0);
        if ((l === i || !l) && setTimeout)
            return l = setTimeout,
            setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }
    function o(t) {
        if (c === clearTimeout)
            return clearTimeout(t);
        if ((c === r || !c) && clearTimeout)
            return c = clearTimeout,
            clearTimeout(t);
        try {
            return c(t)
        } catch (e) {
            try {
                return c.call(null, t)
            } catch (e) {
                return c.call(this, t)
            }
        }
    }
    function s() {
        v && d && (v = !1,
        d.length ? f = d.concat(f) : y = -1,
        f.length && a())
    }
    function a() {
        if (!v) {
            var t = n(s);
            v = !0;
            for (var e = f.length; e; ) {
                for (d = f,
                f = []; ++y < e; )
                    d && d[y].run();
                y = -1,
                e = f.length
            }
            d = null,
            v = !1,
            o(t)
        }
    }
    function h(t, e) {
        this.fun = t,
        this.array = e
    }
    function u() {}
    var l, c, p = t.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            l = i
        }
        try {
            c = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            c = r
        }
    }();
    var d, f = [], v = !1, y = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
        f.push(new h(t,e)),
        1 !== f.length || v || n(a)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = u,
    p.addListener = u,
    p.once = u,
    p.off = u,
    p.removeListener = u,
    p.removeAllListeners = u,
    p.emit = u,
    p.prependListener = u,
    p.prependOnceListener = u,
    p.listeners = function(t) {
        return []
    }
    ,
    p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    p.cwd = function() {
        return "/"
    }
    ,
    p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    p.umask = function() {
        return 0
    }
}
, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        s.call(this),
        this.position = new n.Point,
        this.scale = new n.Point(1,1),
        this.pivot = new n.Point(0,0),
        this.skew = new n.Point(0,0),
        this.rotation = 0,
        this.alpha = 1,
        this.visible = !0,
        this.renderable = !0,
        this.parent = null,
        this.worldAlpha = 1,
        this.worldTransform = new n.Matrix,
        this.filterArea = null,
        this._sr = 0,
        this._cr = 1,
        this._bounds = new n.Rectangle(0,0,1,1),
        this._currentBounds = null,
        this._mask = null
    }
    var n = i(3)
      , o = i(33)
      , s = i(2)
      , a = i(1)
      , h = new n.Matrix
      , u = {
        worldTransform: new n.Matrix,
        worldAlpha: 1,
        children: []
    };
    (r.prototype = Object.create(s.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        x: {
            get: function() {
                return this.position.x
            },
            set: function(t) {
                this.position.x = t
            }
        },
        y: {
            get: function() {
                return this.position.y
            },
            set: function(t) {
                this.position.y = t
            }
        },
        worldVisible: {
            get: function() {
                var t = this;
                do {
                    if (!t.visible)
                        return !1;
                    t = t.parent
                } while (t);return !0
            }
        },
        mask: {
            get: function() {
                return this._mask
            },
            set: function(t) {
                this._mask && (this._mask.renderable = !0),
                this._mask = t,
                this._mask && (this._mask.renderable = !1)
            }
        },
        filters: {
            get: function() {
                return this._filters && this._filters.slice()
            },
            set: function(t) {
                this._filters = t && t.slice()
            }
        }
    }),
    r.prototype.updateTransform = function() {
        var t, e, i, r, n, o, s = this.parent.worldTransform, u = this.worldTransform;
        this.skew.x || this.skew.y ? (h.setTransform(this.position.x, this.position.y, this.pivot.x, this.pivot.y, this.scale.x, this.scale.y, this.rotation, this.skew.x, this.skew.y),
        u.a = h.a * s.a + h.b * s.c,
        u.b = h.a * s.b + h.b * s.d,
        u.c = h.c * s.a + h.d * s.c,
        u.d = h.c * s.b + h.d * s.d,
        u.tx = h.tx * s.a + h.ty * s.c + s.tx,
        u.ty = h.tx * s.b + h.ty * s.d + s.ty) : this.rotation % a.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation,
        this._sr = Math.sin(this.rotation),
        this._cr = Math.cos(this.rotation)),
        t = this._cr * this.scale.x,
        e = this._sr * this.scale.x,
        i = -this._sr * this.scale.y,
        r = this._cr * this.scale.y,
        n = this.position.x,
        o = this.position.y,
        (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * i,
        o -= this.pivot.x * e + this.pivot.y * r),
        u.a = t * s.a + e * s.c,
        u.b = t * s.b + e * s.d,
        u.c = i * s.a + r * s.c,
        u.d = i * s.b + r * s.d,
        u.tx = n * s.a + o * s.c + s.tx,
        u.ty = n * s.b + o * s.d + s.ty) : (t = this.scale.x,
        r = this.scale.y,
        n = this.position.x - this.pivot.x * t,
        o = this.position.y - this.pivot.y * r,
        u.a = t * s.a,
        u.b = t * s.b,
        u.c = r * s.c,
        u.d = r * s.d,
        u.tx = n * s.a + o * s.c + s.tx,
        u.ty = n * s.b + o * s.d + s.ty),
        this.worldAlpha = this.alpha * this.parent.worldAlpha,
        this._currentBounds = null
    }
    ,
    r.prototype.displayObjectUpdateTransform = r.prototype.updateTransform,
    r.prototype.getBounds = function(t) {
        return n.Rectangle.EMPTY
    }
    ,
    r.prototype.getLocalBounds = function() {
        return this.getBounds(n.Matrix.IDENTITY)
    }
    ,
    r.prototype.toGlobal = function(t) {
        return this.parent ? this.displayObjectUpdateTransform() : (this.parent = u,
        this.displayObjectUpdateTransform(),
        this.parent = null),
        this.worldTransform.apply(t)
    }
    ,
    r.prototype.toLocal = function(t, e, i) {
        return e && (t = e.toGlobal(t)),
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = u,
        this.displayObjectUpdateTransform(),
        this.parent = null),
        this.worldTransform.applyInverse(t, i)
    }
    ,
    r.prototype.renderWebGL = function(t) {}
    ,
    r.prototype.renderCanvas = function(t) {}
    ,
    r.prototype.generateTexture = function(t, e, i) {
        var r = this.getLocalBounds()
          , n = new o(t,0 | r.width,0 | r.height,e,i);
        return h.tx = -r.x,
        h.ty = -r.y,
        n.render(this, h),
        n
    }
    ,
    r.prototype.setParent = function(t) {
        if (!t || !t.addChild)
            throw new Error("setParent: Argument must be a Container");
        return t.addChild(this),
        t
    }
    ,
    r.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
        return this.position.x = t || 0,
        this.position.y = e || 0,
        this.scale.x = i || 1,
        this.scale.y = r || 1,
        this.rotation = n || 0,
        this.skew.x = o || 0,
        this.skew.y = s || 0,
        this.pivot.x = a || 0,
        this.pivot.y = h || 0,
        this
    }
    ,
    r.prototype.destroy = function() {
        this.position = null,
        this.scale = null,
        this.pivot = null,
        this.skew = null,
        this.parent = null,
        this._bounds = null,
        this._currentBounds = null,
        this._mask = null,
        this.worldTransform = null,
        this.filterArea = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        if (!t)
            throw new Error("No video source element specified.");
        (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0),
        o.call(this, t, e),
        this.autoUpdate = !1,
        this._onUpdate = this._onUpdate.bind(this),
        this._onCanPlay = this._onCanPlay.bind(this),
        t.complete || (t.addEventListener("canplay", this._onCanPlay),
        t.addEventListener("canplaythrough", this._onCanPlay),
        t.addEventListener("play", this._onPlayStart.bind(this)),
        t.addEventListener("pause", this._onPlayStop.bind(this))),
        this.__loaded = !1
    }
    function n(t, e) {
        e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
        var i = document.createElement("source");
        return i.src = t,
        i.type = e,
        i
    }
    var o = i(20)
      , s = i(4);
    (r.prototype = Object.create(o.prototype)).constructor = r,
    t.exports = r,
    r.prototype._onUpdate = function() {
        this.autoUpdate && (window.requestAnimationFrame(this._onUpdate),
        this.update())
    }
    ,
    r.prototype._onPlayStart = function() {
        this.autoUpdate || (window.requestAnimationFrame(this._onUpdate),
        this.autoUpdate = !0)
    }
    ,
    r.prototype._onPlayStop = function() {
        this.autoUpdate = !1
    }
    ,
    r.prototype._onCanPlay = function() {
        this.hasLoaded = !0,
        this.source && (this.source.removeEventListener("canplay", this._onCanPlay),
        this.source.removeEventListener("canplaythrough", this._onCanPlay),
        this.width = this.source.videoWidth,
        this.height = this.source.videoHeight,
        this.source.play(),
        this.__loaded || (this.__loaded = !0,
        this.emit("loaded", this)))
    }
    ,
    r.prototype.destroy = function() {
        this.source && this.source._pixiId && (delete s.BaseTextureCache[this.source._pixiId],
        delete this.source._pixiId),
        o.prototype.destroy.call(this)
    }
    ,
    r.fromVideo = function(t, e) {
        t._pixiId || (t._pixiId = "video_" + s.uid());
        var i = s.BaseTextureCache[t._pixiId];
        return i || (i = new r(t,e),
        s.BaseTextureCache[t._pixiId] = i),
        i
    }
    ,
    r.fromUrls = r.fromUrl = function(t, e) {
        var i = document.createElement("video");
        if (Array.isArray(t))
            for (var o = 0; o < t.length; ++o)
                i.appendChild(n(t[o].src || t[o], t[o].mime));
        else
            i.appendChild(n(t.src || t, t.mime));
        return i.load(),
        i.play(),
        r.fromVideo(i, e)
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        this.x0 = 0,
        this.y0 = 0,
        this.x1 = 1,
        this.y1 = 0,
        this.x2 = 1,
        this.y2 = 1,
        this.x3 = 0,
        this.y3 = 1
    }
    t.exports = r;
    var n = i(45);
    r.prototype.set = function(t, e, i) {
        var r = e.width
          , o = e.height;
        if (i) {
            var s = n.isSwapWidthHeight(i)
              , a = (s ? t.height : t.width) / 2 / r
              , h = (s ? t.width : t.height) / 2 / o
              , u = t.x / r + a
              , l = t.y / o + h;
            i = n.add(i, n.NW),
            this.x0 = u + a * n.uX(i),
            this.y0 = l + h * n.uY(i),
            i = n.add(i, 2),
            this.x1 = u + a * n.uX(i),
            this.y1 = l + h * n.uY(i),
            i = n.add(i, 2),
            this.x2 = u + a * n.uX(i),
            this.y2 = l + h * n.uY(i),
            i = n.add(i, 2),
            this.x3 = u + a * n.uX(i),
            this.y3 = l + h * n.uY(i)
        } else
            this.x0 = t.x / r,
            this.y0 = t.y / o,
            this.x1 = (t.x + t.width) / r,
            this.y1 = t.y / o,
            this.x2 = (t.x + t.width) / r,
            this.y2 = (t.y + t.height) / o,
            this.x3 = t.x / r,
            this.y3 = (t.y + t.height) / o
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.filterStack = [],
        this.filterStack.push({
            renderTarget: t.currentRenderTarget,
            filter: [],
            bounds: null
        }),
        this.texturePool = [],
        this.textureSize = new h.Rectangle(0,0,t.width,t.height),
        this.currentFrame = null
    }
    var n = i(12)
      , o = i(21)
      , s = i(1)
      , a = i(96)
      , h = i(3);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.onContextChange = function() {
        this.texturePool.length = 0;
        var t = this.renderer.gl;
        this.quad = new a(t)
    }
    ,
    r.prototype.setFilterStack = function(t) {
        this.filterStack = t
    }
    ,
    r.prototype.pushFilter = function(t, e) {
        var i = t.filterArea ? t.filterArea.clone() : t.getBounds();
        i.x = 0 | i.x,
        i.y = 0 | i.y,
        i.width = 0 | i.width,
        i.height = 0 | i.height;
        var r = 0 | e[0].padding;
        if (i.x -= r,
        i.y -= r,
        i.width += 2 * r,
        i.height += 2 * r,
        this.renderer.currentRenderTarget.transform) {
            var n = this.renderer.currentRenderTarget.transform;
            i.x += n.tx,
            i.y += n.ty,
            this.capFilterArea(i),
            i.x -= n.tx,
            i.y -= n.ty
        } else
            this.capFilterArea(i);
        if (i.width > 0 && i.height > 0) {
            this.currentFrame = i;
            var o = this.getRenderTarget();
            this.renderer.setRenderTarget(o),
            o.clear(),
            this.filterStack.push({
                renderTarget: o,
                filter: e
            })
        } else
            this.filterStack.push({
                renderTarget: null,
                filter: e
            })
    }
    ,
    r.prototype.popFilter = function() {
        var t = this.filterStack.pop()
          , e = this.filterStack[this.filterStack.length - 1]
          , i = t.renderTarget;
        if (t.renderTarget) {
            var r = e.renderTarget
              , n = this.renderer.gl;
            this.currentFrame = i.frame,
            this.quad.map(this.textureSize, i.frame),
            n.bindBuffer(n.ARRAY_BUFFER, this.quad.vertexBuffer),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
            var o = t.filter;
            if (n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, n.FLOAT, !1, 0, 0),
            n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, n.FLOAT, !1, 0, 32),
            n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, n.FLOAT, !1, 0, 64),
            this.renderer.blendModeManager.setBlendMode(s.BLEND_MODES.NORMAL),
            1 === o.length)
                o[0].uniforms.dimensions && (o[0].uniforms.dimensions.value[0] = this.renderer.width,
                o[0].uniforms.dimensions.value[1] = this.renderer.height,
                o[0].uniforms.dimensions.value[2] = this.quad.vertices[0],
                o[0].uniforms.dimensions.value[3] = this.quad.vertices[5]),
                o[0].applyFilter(this.renderer, i, r),
                this.returnRenderTarget(i);
            else {
                for (var a = i, h = this.getRenderTarget(!0), u = 0; u < o.length - 1; u++) {
                    var l = o[u];
                    l.uniforms.dimensions && (l.uniforms.dimensions.value[0] = this.renderer.width,
                    l.uniforms.dimensions.value[1] = this.renderer.height,
                    l.uniforms.dimensions.value[2] = this.quad.vertices[0],
                    l.uniforms.dimensions.value[3] = this.quad.vertices[5]),
                    l.applyFilter(this.renderer, a, h);
                    var c = a;
                    a = h,
                    h = c
                }
                o[o.length - 1].applyFilter(this.renderer, a, r),
                this.returnRenderTarget(a),
                this.returnRenderTarget(h)
            }
            return t.filter
        }
    }
    ,
    r.prototype.getRenderTarget = function(t) {
        var e = this.texturePool.pop() || new o(this.renderer.gl,this.textureSize.width,this.textureSize.height,s.SCALE_MODES.LINEAR,this.renderer.resolution * s.FILTER_RESOLUTION);
        return e.frame = this.currentFrame,
        t && e.clear(!0),
        e
    }
    ,
    r.prototype.returnRenderTarget = function(t) {
        this.texturePool.push(t)
    }
    ,
    r.prototype.applyFilter = function(t, e, i, r) {
        var n = this.renderer.gl;
        this.renderer.setRenderTarget(i),
        r && i.clear(),
        this.renderer.shaderManager.setShader(t),
        t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0),
        t.syncUniforms(),
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, e.texture),
        n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0),
        this.renderer.drawCount++
    }
    ,
    r.prototype.calculateMappedMatrix = function(t, e, i) {
        var r = e.worldTransform.copy(h.Matrix.TEMP_MATRIX)
          , n = e._texture.baseTexture
          , o = i.identity()
          , s = this.textureSize.height / this.textureSize.width;
        o.translate(t.x / this.textureSize.width, t.y / this.textureSize.height),
        o.scale(1, s);
        var a = this.textureSize.width / n.width
          , u = this.textureSize.height / n.height;
        return r.tx /= n.width * a,
        r.ty /= n.width * a,
        r.invert(),
        o.prepend(r),
        o.scale(1, 1 / s),
        o.scale(a, u),
        o.translate(e.anchor.x, e.anchor.y),
        o
    }
    ,
    r.prototype.capFilterArea = function(t) {
        t.x < 0 && (t.width += t.x,
        t.x = 0),
        t.y < 0 && (t.height += t.y,
        t.y = 0),
        t.x + t.width > this.textureSize.width && (t.width = this.textureSize.width - t.x),
        t.y + t.height > this.textureSize.height && (t.height = this.textureSize.height - t.y)
    }
    ,
    r.prototype.resize = function(t, e) {
        this.textureSize.width = t,
        this.textureSize.height = e;
        for (var i = 0; i < this.texturePool.length; i++)
            this.texturePool[i].resize(t, e)
    }
    ,
    r.prototype.destroy = function() {
        this.quad.destroy(),
        n.prototype.destroy.call(this),
        this.filterStack = null,
        this.offsetY = 0;
        for (var t = 0; t < this.texturePool.length; t++)
            this.texturePool[t].destroy();
        this.texturePool = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        s.call(this),
        this.anchor = new n.Point,
        this._texture = null,
        this._width = 0,
        this._height = 0,
        this.tint = 16777215,
        this.blendMode = u.BLEND_MODES.NORMAL,
        this.shader = null,
        this.cachedTint = 16777215,
        this.texture = t || o.EMPTY
    }
    var n = i(3)
      , o = i(14)
      , s = i(22)
      , a = i(53)
      , h = i(4)
      , u = i(1)
      , l = new n.Point
      , c = n.GroupD8
      , p = new n.Matrix;
    (r.prototype = Object.create(s.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        width: {
            get: function() {
                return Math.abs(this.scale.x) * this.texture._frame.width
            },
            set: function(t) {
                var e = h.sign(this.scale.x) || 1;
                this.scale.x = e * t / this.texture._frame.width,
                this._width = t
            }
        },
        height: {
            get: function() {
                return Math.abs(this.scale.y) * this.texture._frame.height
            },
            set: function(t) {
                var e = h.sign(this.scale.y) || 1;
                this.scale.y = e * t / this.texture._frame.height,
                this._height = t
            }
        },
        texture: {
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture !== t && (this._texture = t,
                this.cachedTint = 16777215,
                t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
        }
    }),
    r.prototype._onTextureUpdate = function() {
        this._width && (this.scale.x = h.sign(this.scale.x) * this._width / this.texture.frame.width),
        this._height && (this.scale.y = h.sign(this.scale.y) * this._height / this.texture.frame.height)
    }
    ,
    r.prototype._renderWebGL = function(t) {
        t.setObjectRenderer(t.plugins.sprite),
        t.plugins.sprite.render(this)
    }
    ,
    r.prototype.getBounds = function(t) {
        if (!this._currentBounds) {
            var e, i, r, n, o = this._texture._frame.width, s = this._texture._frame.height, a = o * (1 - this.anchor.x), h = o * -this.anchor.x, u = s * (1 - this.anchor.y), l = s * -this.anchor.y, c = t || this.worldTransform, p = c.a, d = c.b, f = c.c, v = c.d, y = c.tx, g = c.ty, m = p * h + f * l + y, x = v * l + d * h + g, _ = p * a + f * l + y, b = v * l + d * a + g, T = p * a + f * u + y, w = v * u + d * a + g, E = p * h + f * u + y, S = v * u + d * h + g;
            if (e = m,
            e = _ < e ? _ : e,
            e = T < e ? T : e,
            e = E < e ? E : e,
            r = x,
            r = b < r ? b : r,
            r = w < r ? w : r,
            r = S < r ? S : r,
            i = m,
            i = _ > i ? _ : i,
            i = T > i ? T : i,
            i = E > i ? E : i,
            n = x,
            n = b > n ? b : n,
            n = w > n ? w : n,
            n = S > n ? S : n,
            this.children.length) {
                var A = this.containerGetBounds();
                a = A.x,
                h = A.x + A.width,
                u = A.y,
                l = A.y + A.height,
                e = e < a ? e : a,
                r = r < u ? r : u,
                i = i > h ? i : h,
                n = n > l ? n : l
            }
            var C = this._bounds;
            C.x = e,
            C.width = i - e,
            C.y = r,
            C.height = n - r,
            this._currentBounds = C
        }
        return this._currentBounds
    }
    ,
    r.prototype.getLocalBounds = function() {
        return this._bounds.x = -this._texture._frame.width * this.anchor.x,
        this._bounds.y = -this._texture._frame.height * this.anchor.y,
        this._bounds.width = this._texture._frame.width,
        this._bounds.height = this._texture._frame.height,
        this._bounds
    }
    ,
    r.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, l);
        var e, i = this._texture._frame.width, r = this._texture._frame.height, n = -i * this.anchor.x;
        return l.x > n && l.x < n + i && (e = -r * this.anchor.y,
        l.y > e && l.y < e + r)
    }
    ,
    r.prototype._renderCanvas = function(t) {
        if (!(this.texture.crop.width <= 0 || this.texture.crop.height <= 0)) {
            var e = t.blendModes[this.blendMode];
            if (e !== t.context.globalCompositeOperation && (t.context.globalCompositeOperation = e),
            this.texture.valid) {
                var i, r, n = this._texture, o = this.worldTransform, s = n.crop.width, h = n.crop.height;
                t.context.globalAlpha = this.worldAlpha;
                var l = n.baseTexture.scaleMode === u.SCALE_MODES.LINEAR;
                t.smoothProperty && t.context[t.smoothProperty] !== l && (t.context[t.smoothProperty] = l),
                2 == (3 & n.rotate) && (s = n.crop.height,
                h = n.crop.width),
                n.trim ? (i = n.crop.width / 2 + n.trim.x - this.anchor.x * n.trim.width,
                r = n.crop.height / 2 + n.trim.y - this.anchor.y * n.trim.height) : (i = (.5 - this.anchor.x) * n._frame.width,
                r = (.5 - this.anchor.y) * n._frame.height),
                n.rotate && (o.copy(p),
                o = p,
                c.matrixAppendRotationInv(o, n.rotate, i, r),
                i = 0,
                r = 0),
                i -= s / 2,
                r -= h / 2,
                t.roundPixels ? (t.context.setTransform(o.a, o.b, o.c, o.d, o.tx * t.resolution | 0, o.ty * t.resolution | 0),
                i |= 0,
                r |= 0) : t.context.setTransform(o.a, o.b, o.c, o.d, o.tx * t.resolution, o.ty * t.resolution);
                var d = n.baseTexture.resolution;
                16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint,
                this.tintedTexture = a.getTintedTexture(this, this.tint)),
                t.context.drawImage(this.tintedTexture, 0, 0, s * d, h * d, i * t.resolution, r * t.resolution, s * t.resolution, h * t.resolution)) : t.context.drawImage(n.baseTexture.source, n.crop.x * d, n.crop.y * d, s * d, h * d, i * t.resolution, r * t.resolution, s * t.resolution, h * t.resolution)
            }
        }
    }
    ,
    r.prototype.destroy = function(t, e) {
        s.prototype.destroy.call(this),
        this.anchor = null,
        t && this._texture.destroy(e),
        this._texture = null,
        this.shader = null
    }
    ,
    r.fromFrame = function(t) {
        var e = h.TextureCache[t];
        if (!e)
            throw new Error('The frameId "' + t + '" does not exist in the texture cache');
        return new r(e)
    }
    ,
    r.fromImage = function(t, e, i) {
        return new r(o.fromImage(t, e, i))
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(4)
      , n = {};
    t.exports = n,
    n.getTintedTexture = function(t, e) {
        var i = t.texture
          , r = "#" + ("00000" + (0 | (e = n.roundColor(e))).toString(16)).substr(-6);
        if (i.tintCache = i.tintCache || {},
        i.tintCache[r])
            return i.tintCache[r];
        var o = n.canvas || document.createElement("canvas");
        if (n.tintMethod(i, e, o),
        n.convertTintToImage) {
            var s = new Image;
            s.src = o.toDataURL(),
            i.tintCache[r] = s
        } else
            i.tintCache[r] = o,
            n.canvas = null;
        return o
    }
    ,
    n.tintWithMultiply = function(t, e, i) {
        var r = i.getContext("2d")
          , n = t.baseTexture.resolution
          , o = t.crop.clone();
        o.x *= n,
        o.y *= n,
        o.width *= n,
        o.height *= n,
        i.width = o.width,
        i.height = o.height,
        r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6),
        r.fillRect(0, 0, o.width, o.height),
        r.globalCompositeOperation = "multiply",
        r.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height),
        r.globalCompositeOperation = "destination-atop",
        r.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height)
    }
    ,
    n.tintWithOverlay = function(t, e, i) {
        var r = i.getContext("2d")
          , n = t.baseTexture.resolution
          , o = t.crop.clone();
        o.x *= n,
        o.y *= n,
        o.width *= n,
        o.height *= n,
        i.width = o.width,
        i.height = o.height,
        r.globalCompositeOperation = "copy",
        r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6),
        r.fillRect(0, 0, o.width, o.height),
        r.globalCompositeOperation = "destination-atop",
        r.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height)
    }
    ,
    n.tintWithPerPixel = function(t, e, i) {
        var n = i.getContext("2d")
          , o = t.baseTexture.resolution
          , s = t.crop.clone();
        s.x *= o,
        s.y *= o,
        s.width *= o,
        s.height *= o,
        i.width = s.width,
        i.height = s.height,
        n.globalCompositeOperation = "copy",
        n.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
        for (var a = r.hex2rgb(e), h = a[0], u = a[1], l = a[2], c = n.getImageData(0, 0, s.width, s.height), p = c.data, d = 0; d < p.length; d += 4)
            p[d + 0] *= h,
            p[d + 1] *= u,
            p[d + 2] *= l;
        n.putImageData(c, 0, 0)
    }
    ,
    n.roundColor = function(t) {
        var e = n.cacheStepsPerColorChannel
          , i = r.hex2rgb(t);
        return i[0] = Math.min(255, i[0] / e * e),
        i[1] = Math.min(255, i[1] / e * e),
        i[2] = Math.min(255, i[2] / e * e),
        r.rgb2hex(i)
    }
    ,
    n.cacheStepsPerColorChannel = 8,
    n.convertTintToImage = !1,
    n.canUseMultiply = r.canUseNewCanvasBlendModes(),
    n.tintMethod = n.canUseMultiply ? n.tintWithMultiply : n.tintWithPerPixel
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r) {
        if (a.call(this),
        n.sayHello(t),
        r)
            for (var h in s.DEFAULT_RENDER_OPTIONS)
                void 0 === r[h] && (r[h] = s.DEFAULT_RENDER_OPTIONS[h]);
        else
            r = s.DEFAULT_RENDER_OPTIONS;
        this.type = s.RENDERER_TYPE.UNKNOWN,
        this.width = e || 800,
        this.height = i || 600,
        this.view = r.view || document.createElement("canvas"),
        this.resolution = r.resolution,
        this.transparent = r.transparent,
        this.autoResize = r.autoResize || !1,
        this.blendModes = null,
        this.preserveDrawingBuffer = r.preserveDrawingBuffer,
        this.clearBeforeRender = r.clearBeforeRender,
        this.roundPixels = r.roundPixels,
        this._backgroundColor = 0,
        this._backgroundColorRgb = [0, 0, 0],
        this._backgroundColorString = "#000000",
        this.backgroundColor = r.backgroundColor || this._backgroundColor,
        this._tempDisplayObjectParent = {
            worldTransform: new o.Matrix,
            worldAlpha: 1,
            children: []
        },
        this._lastObjectRendered = this._tempDisplayObjectParent
    }
    var n = i(4)
      , o = i(3)
      , s = i(1)
      , a = i(2);
    (r.prototype = Object.create(a.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        backgroundColor: {
            get: function() {
                return this._backgroundColor
            },
            set: function(t) {
                this._backgroundColor = t,
                this._backgroundColorString = n.hex2string(t),
                n.hex2rgb(t, this._backgroundColorRgb)
            }
        }
    }),
    r.prototype.resize = function(t, e) {
        this.width = t * this.resolution,
        this.height = e * this.resolution,
        this.view.width = this.width,
        this.view.height = this.height,
        this.autoResize && (this.view.style.width = this.width / this.resolution + "px",
        this.view.style.height = this.height / this.resolution + "px")
    }
    ,
    r.prototype.destroy = function(t) {
        t && this.view.parentNode && this.view.parentNode.removeChild(this.view),
        this.type = s.RENDERER_TYPE.UNKNOWN,
        this.width = 0,
        this.height = 0,
        this.view = null,
        this.resolution = 0,
        this.transparent = !1,
        this.autoResize = !1,
        this.blendModes = null,
        this.preserveDrawingBuffer = !1,
        this.clearBeforeRender = !1,
        this.roundPixels = !1,
        this._backgroundColor = 0,
        this._backgroundColorRgb = null,
        this._backgroundColorString = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.maxAttibs = 10,
        this.attribState = [],
        this.tempAttribState = [];
        for (var e = 0; e < this.maxAttibs; e++)
            this.attribState[e] = !1;
        this.stack = [],
        this._currentId = -1,
        this.currentShader = null
    }
    var n = i(12)
      , o = i(24)
      , s = i(56)
      , a = i(57)
      , h = i(4);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    h.pluginTarget.mixin(r),
    t.exports = r,
    r.prototype.onContextChange = function() {
        this.initPlugins();
        var t = this.renderer.gl;
        this.maxAttibs = t.getParameter(t.MAX_VERTEX_ATTRIBS),
        this.attribState = [];
        for (var e = 0; e < this.maxAttibs; e++)
            this.attribState[e] = !1;
        this.defaultShader = new o(this),
        this.primitiveShader = new a(this),
        this.complexPrimitiveShader = new s(this)
    }
    ,
    r.prototype.setAttribs = function(t) {
        var e;
        for (e = 0; e < this.tempAttribState.length; e++)
            this.tempAttribState[e] = !1;
        for (var i in t)
            this.tempAttribState[t[i]] = !0;
        var r = this.renderer.gl;
        for (e = 0; e < this.attribState.length; e++)
            this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e],
            this.attribState[e] ? r.enableVertexAttribArray(e) : r.disableVertexAttribArray(e))
    }
    ,
    r.prototype.setShader = function(t) {
        return this._currentId !== t.uid && (this._currentId = t.uid,
        this.currentShader = t,
        this.renderer.gl.useProgram(t.program),
        this.setAttribs(t.attributes),
        !0)
    }
    ,
    r.prototype.destroy = function() {
        this.primitiveShader.destroy(),
        this.complexPrimitiveShader.destroy(),
        n.prototype.destroy.call(this),
        this.destroyPlugins(),
        this.attribState = null,
        this.tempAttribState = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t, ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
            tint: {
                type: "3f",
                value: [0, 0, 0]
            },
            alpha: {
                type: "1f",
                value: 0
            },
            color: {
                type: "3f",
                value: [0, 0, 0]
            },
            translationMatrix: {
                type: "mat3",
                value: new Float32Array(9)
            },
            projectionMatrix: {
                type: "mat3",
                value: new Float32Array(9)
            }
        }, {
            aVertexPosition: 0
        })
    }
    var n = i(25);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
            tint: {
                type: "3f",
                value: [0, 0, 0]
            },
            alpha: {
                type: "1f",
                value: 0
            },
            translationMatrix: {
                type: "mat3",
                value: new Float32Array(9)
            },
            projectionMatrix: {
                type: "mat3",
                value: new Float32Array(9)
            }
        }, {
            aVertexPosition: 0,
            aColor: 0
        })
    }
    var n = i(25);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        var e = new o.Matrix;
        n.call(this, i(100), i(101), {
            mask: {
                type: "sampler2D",
                value: t._texture
            },
            alpha: {
                type: "f",
                value: 1
            },
            otherMatrix: {
                type: "mat3",
                value: e.toArray(!0)
            }
        }),
        this.maskSprite = t,
        this.maskMatrix = e
    }
    var n = i(35)
      , o = i(3);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager;
        this.uniforms.mask.value = this.maskSprite._texture,
        r.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix),
        this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0),
        this.uniforms.alpha.value = this.maskSprite.worldAlpha;
        var n = this.getShader(t);
        r.applyFilter(n, e, i)
    }
    ,
    Object.defineProperties(r.prototype, {
        map: {
            get: function() {
                return this.uniforms.mask.value
            },
            set: function(t) {
                this.uniforms.mask.value = t
            }
        },
        offset: {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(t) {
                this.uniforms.offset.value = t
            }
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this, i(104), i(105), {
            resolution: {
                type: "v2",
                value: {
                    x: 1,
                    y: 1
                }
            }
        })
    }
    var n = i(35);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager
          , n = this.getShader(t);
        r.applyFilter(n, e, i)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r, n, o, s) {
        this.lineWidth = t,
        this.lineColor = e,
        this.lineAlpha = i,
        this._lineTint = e,
        this.fillColor = r,
        this.fillAlpha = n,
        this._fillTint = r,
        this.fill = o,
        this.shape = s,
        this.type = s.type
    }
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.clone = function() {
        return new r(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)
    }
    ,
    r.prototype.destroy = function() {
        this.shape = null
    }
}
, function(t, e, i) {
    "use strict";
    i(116),
    i(117),
    i(118),
    t.exports = {
        AnimatedSprite: i(119),
        TilingSprite: i(120),
        BitmapText: i(121),
        Text: i(122)
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        this.global = new n.Point,
        this.target = null,
        this.originalEvent = null
    }
    var n = i(0);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.getLocalPosition = function(t, e, i) {
        return t.worldTransform.applyInverse(i || this.global, e)
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        interactive: !1,
        buttonMode: !1,
        interactiveChildren: !0,
        defaultCursor: "pointer",
        _over: !1,
        _touchDown: !1
    }
}
, function(t, e) {
    t.exports = "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this)
    }
    var n = i(66);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.updateDelta = function() {
        var t = this.uniforms.end.value.x - this.uniforms.start.value.x
          , e = this.uniforms.end.value.y - this.uniforms.start.value.y
          , i = Math.sqrt(t * t + e * e);
        this.uniforms.delta.value.x = t / i,
        this.uniforms.delta.value.y = e / i
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(169), {
            blur: {
                type: "1f",
                value: 100
            },
            gradientBlur: {
                type: "1f",
                value: 600
            },
            start: {
                type: "v2",
                value: {
                    x: 0,
                    y: window.innerHeight / 2
                }
            },
            end: {
                type: "v2",
                value: {
                    x: 600,
                    y: window.innerHeight / 2
                }
            },
            delta: {
                type: "v2",
                value: {
                    x: 30,
                    y: 30
                }
            },
            texSize: {
                type: "v2",
                value: {
                    x: window.innerWidth,
                    y: window.innerHeight
                }
            }
        }),
        this.updateDelta()
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.updateDelta = function() {
        this.uniforms.delta.value.x = 0,
        this.uniforms.delta.value.y = 0
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.uniforms.blur.value
            },
            set: function(t) {
                this.uniforms.blur.value = t
            }
        },
        gradientBlur: {
            get: function() {
                return this.uniforms.gradientBlur.value
            },
            set: function(t) {
                this.uniforms.gradientBlur.value = t
            }
        },
        start: {
            get: function() {
                return this.uniforms.start.value
            },
            set: function(t) {
                this.uniforms.start.value = t,
                this.updateDelta()
            }
        },
        end: {
            get: function() {
                return this.uniforms.end.value
            },
            set: function(t) {
                this.uniforms.end.value = t,
                this.updateDelta()
            }
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this)
    }
    var n = i(66);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.updateDelta = function() {
        var t = this.uniforms.end.value.x - this.uniforms.start.value.x
          , e = this.uniforms.end.value.y - this.uniforms.start.value.y
          , i = Math.sqrt(t * t + e * e);
        this.uniforms.delta.value.x = -e / i,
        this.uniforms.delta.value.y = t / i
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }
    function n(t, e, i) {
        if (t && s(t) && t instanceof r)
            return t;
        var n = new r;
        return n.parse(t, e, i),
        n
    }
    function o(t) {
        return "string" == typeof t
    }
    function s(t) {
        return "object" === (void 0 === t ? "undefined" : u(t)) && null !== t
    }
    function a(t) {
        return null === t
    }
    function h(t) {
        return null == t
    }
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , l = i(178);
    e.parse = n,
    e.resolve = function(t, e) {
        return n(t, !1, !0).resolve(e)
    }
    ,
    e.resolveObject = function(t, e) {
        return t ? n(t, !1, !0).resolveObject(e) : e
    }
    ,
    e.format = function(t) {
        return o(t) && (t = n(t)),
        t instanceof r ? t.format() : r.prototype.format.call(t)
    }
    ,
    e.Url = r;
    var c = /^([a-z0-9.+-]+:)/i
      , p = /:[0-9]*$/
      , d = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])
      , f = ["'"].concat(d)
      , v = ["%", "/", "?", ";", "#"].concat(f)
      , y = ["/", "?", "#"]
      , g = /^[a-z0-9A-Z_-]{0,63}$/
      , m = /^([a-z0-9A-Z_-]{0,63})(.*)$/
      , x = {
        javascript: !0,
        "javascript:": !0
    }
      , _ = {
        javascript: !0,
        "javascript:": !0
    }
      , b = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    }
      , T = i(179);
    r.prototype.parse = function(t, e, i) {
        if (!o(t))
            throw new TypeError("Parameter 'url' must be a string, not " + (void 0 === t ? "undefined" : u(t)));
        var r = t;
        r = r.trim();
        var n = c.exec(r);
        if (n) {
            var s = (n = n[0]).toLowerCase();
            this.protocol = s,
            r = r.substr(n.length)
        }
        if (i || n || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var a = "//" === r.substr(0, 2);
            !a || n && _[n] || (r = r.substr(2),
            this.slashes = !0)
        }
        if (!_[n] && (a || n && !b[n])) {
            for (var h = -1, p = 0; p < y.length; p++)
                -1 !== (E = r.indexOf(y[p])) && (-1 === h || E < h) && (h = E);
            var d, w;
            -1 !== (w = -1 === h ? r.lastIndexOf("@") : r.lastIndexOf("@", h)) && (d = r.slice(0, w),
            r = r.slice(w + 1),
            this.auth = decodeURIComponent(d)),
            h = -1;
            for (p = 0; p < v.length; p++) {
                var E = r.indexOf(v[p]);
                -1 !== E && (-1 === h || E < h) && (h = E)
            }
            -1 === h && (h = r.length),
            this.host = r.slice(0, h),
            r = r.slice(h),
            this.parseHost(),
            this.hostname = this.hostname || "";
            var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!S)
                for (var A = this.hostname.split(/\./), p = 0, C = A.length; p < C; p++) {
                    var M = A[p];
                    if (M && !M.match(g)) {
                        for (var R = "", O = 0, P = M.length; O < P; O++)
                            M.charCodeAt(O) > 127 ? R += "x" : R += M[O];
                        if (!R.match(g)) {
                            var D = A.slice(0, p)
                              , F = A.slice(p + 1)
                              , L = M.match(m);
                            L && (D.push(L[1]),
                            F.unshift(L[2])),
                            F.length && (r = "/" + F.join(".") + r),
                            this.hostname = D.join(".");
                            break
                        }
                    }
                }
            if (this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
            !S) {
                for (var B = this.hostname.split("."), I = [], p = 0; p < B.length; ++p) {
                    W = B[p];
                    I.push(W.match(/[^A-Za-z0-9_-]/) ? "xn--" + l.encode(W) : W)
                }
                this.hostname = I.join(".")
            }
            var N = this.port ? ":" + this.port : ""
              , k = this.hostname || "";
            this.host = k + N,
            this.href += this.host,
            S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
            "/" !== r[0] && (r = "/" + r))
        }
        if (!x[s])
            for (var p = 0, C = f.length; p < C; p++) {
                var U = f[p]
                  , j = encodeURIComponent(U);
                j === U && (j = escape(U)),
                r = r.split(U).join(j)
            }
        var G = r.indexOf("#");
        -1 !== G && (this.hash = r.substr(G),
        r = r.slice(0, G));
        var z = r.indexOf("?");
        if (-1 !== z ? (this.search = r.substr(z),
        this.query = r.substr(z + 1),
        e && (this.query = T.parse(this.query)),
        r = r.slice(0, z)) : e && (this.search = "",
        this.query = {}),
        r && (this.pathname = r),
        b[s] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search) {
            var N = this.pathname || ""
              , W = this.search || "";
            this.path = N + W
        }
        return this.href = this.format(),
        this
    }
    ,
    r.prototype.format = function() {
        var t = this.auth || "";
        t && (t = encodeURIComponent(t),
        t = t.replace(/%3A/i, ":"),
        t += "@");
        var e = this.protocol || ""
          , i = this.pathname || ""
          , r = this.hash || ""
          , n = !1
          , o = "";
        this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
        this.port && (n += ":" + this.port)),
        this.query && s(this.query) && Object.keys(this.query).length && (o = T.stringify(this.query));
        var a = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"),
        this.slashes || (!e || b[e]) && !1 !== n ? (n = "//" + (n || ""),
        i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""),
        r && "#" !== r.charAt(0) && (r = "#" + r),
        a && "?" !== a.charAt(0) && (a = "?" + a),
        i = i.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        }),
        a = a.replace("#", "%23"),
        e + n + i + a + r
    }
    ,
    r.prototype.resolve = function(t) {
        return this.resolveObject(n(t, !1, !0)).format()
    }
    ,
    r.prototype.resolveObject = function(t) {
        if (o(t)) {
            var e = new r;
            e.parse(t, !1, !0),
            t = e
        }
        var i = new r;
        if (Object.keys(this).forEach(function(t) {
            i[t] = this[t]
        }, this),
        i.hash = t.hash,
        "" === t.href)
            return i.href = i.format(),
            i;
        if (t.slashes && !t.protocol)
            return Object.keys(t).forEach(function(e) {
                "protocol" !== e && (i[e] = t[e])
            }),
            b[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"),
            i.href = i.format(),
            i;
        if (t.protocol && t.protocol !== i.protocol) {
            if (!b[t.protocol])
                return Object.keys(t).forEach(function(e) {
                    i[e] = t[e]
                }),
                i.href = i.format(),
                i;
            if (i.protocol = t.protocol,
            t.host || _[t.protocol])
                i.pathname = t.pathname;
            else {
                for (f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()); )
                    ;
                t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== f[0] && f.unshift(""),
                f.length < 2 && f.unshift(""),
                i.pathname = f.join("/")
            }
            if (i.search = t.search,
            i.query = t.query,
            i.host = t.host || "",
            i.auth = t.auth,
            i.hostname = t.hostname || t.host,
            i.port = t.port,
            i.pathname || i.search) {
                var n = i.pathname || ""
                  , s = i.search || "";
                i.path = n + s
            }
            return i.slashes = i.slashes || t.slashes,
            i.href = i.format(),
            i
        }
        var u = i.pathname && "/" === i.pathname.charAt(0)
          , l = t.host || t.pathname && "/" === t.pathname.charAt(0)
          , c = l || u || i.host && t.pathname
          , p = c
          , d = i.pathname && i.pathname.split("/") || []
          , f = t.pathname && t.pathname.split("/") || []
          , v = i.protocol && !b[i.protocol];
        if (v && (i.hostname = "",
        i.port = null,
        i.host && ("" === d[0] ? d[0] = i.host : d.unshift(i.host)),
        i.host = "",
        t.protocol && (t.hostname = null,
        t.port = null,
        t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)),
        t.host = null),
        c = c && ("" === f[0] || "" === d[0])),
        l)
            i.host = t.host || "" === t.host ? t.host : i.host,
            i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname,
            i.search = t.search,
            i.query = t.query,
            d = f;
        else if (f.length)
            d || (d = []),
            d.pop(),
            d = d.concat(f),
            i.search = t.search,
            i.query = t.query;
        else if (!h(t.search))
            return v && (i.hostname = i.host = d.shift(),
            (w = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = w.shift(),
            i.host = i.hostname = w.shift())),
            i.search = t.search,
            i.query = t.query,
            a(i.pathname) && a(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")),
            i.href = i.format(),
            i;
        if (!d.length)
            return i.pathname = null,
            i.search ? i.path = "/" + i.search : i.path = null,
            i.href = i.format(),
            i;
        for (var y = d.slice(-1)[0], g = (i.host || t.host) && ("." === y || ".." === y) || "" === y, m = 0, x = d.length; x >= 0; x--)
            "." == (y = d[x]) ? d.splice(x, 1) : ".." === y ? (d.splice(x, 1),
            m++) : m && (d.splice(x, 1),
            m--);
        if (!c && !p)
            for (; m--; m)
                d.unshift("..");
        !c || "" === d[0] || d[0] && "/" === d[0].charAt(0) || d.unshift(""),
        g && "/" !== d.join("/").substr(-1) && d.push("");
        var T = "" === d[0] || d[0] && "/" === d[0].charAt(0);
        if (v) {
            i.hostname = i.host = T ? "" : d.length ? d.shift() : "";
            var w = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
            w && (i.auth = w.shift(),
            i.host = i.hostname = w.shift())
        }
        return (c = c || i.host && d.length) && !T && d.unshift(""),
        d.length ? i.pathname = d.join("/") : (i.pathname = null,
        i.path = null),
        a(i.pathname) && a(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")),
        i.auth = t.auth || i.auth,
        i.slashes = i.slashes || t.slashes,
        i.href = i.format(),
        i
    }
    ,
    r.prototype.parseHost = function() {
        var t = this.host
          , e = p.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)),
        t = t.substr(0, t.length - e.length)),
        t && (this.hostname = t)
    }
}
, function(t, e) {
    (function(e) {
        t.exports = e
    }
    ).call(e, {})
}
, function(t, e, i) {
    "use strict";
    var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
      , n = function(t) {
        return r.exec(t).slice(1)
    };
    t.exports = function(t) {
        var e = n(t)
          , i = e[0]
          , r = e[1];
        return i || r ? (r && (r = r.substr(0, r.length - 1)),
        i + r) : "."
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        this.id = t.id,
        this.supported = this._isSupported()
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , o = i(10).default;
    r.prototype.set = function(t, e) {
        if (!this.supported)
            return !1;
        localStorage.setItem(this.id + "." + t, this._encode(e))
    }
    ,
    r.prototype.get = function(t, e) {
        var i = localStorage.getItem(this.id + "." + t);
        if (null === i)
            return e;
        try {
            return this._decode(i)
        } catch (t) {
            return i
        }
    }
    ,
    r.prototype.has = function(t) {
        return null !== localStorage.getItem(this.id + "." + t)
    }
    ,
    r.prototype.remove = function(t) {
        localStorage.removeItem(this.id + "." + t)
    }
    ,
    r.prototype.reset = function() {
        for (var t = localStorage.length - 1; t >= 0; t--) {
            var e = localStorage.key(t);
            -1 !== e.indexOf(this.id + ".") && localStorage.removeItem(e)
        }
    }
    ,
    r.prototype._encode = function(t) {
        return JSON.stringify(t)
    }
    ,
    r.prototype._decode = function(t) {
        return JSON.parse(t)
    }
    ,
    r.prototype._isSupported = function() {
        if ("object" !== ("undefined" == typeof localStorage ? "undefined" : n(localStorage)))
            return !1;
        try {
            localStorage.setItem("localStorage", 1),
            localStorage.removeItem("localStorage")
        } catch (t) {
            return !1
        }
        return !0
    }
    ,
    t.exports = new r(Object.assign({
        id: "lpanda-debug"
    }, o.storage))
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this),
        this.data = {},
        this.keys = [],
        this.defaultVal = {}
    }
    var n = i(2);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    r.prototype.validKey = function(t) {
        return !(this.keys.indexOf(t) >= 0 && (console.log('Data field "' + t + '" is already defined!'),
        1))
    }
    ,
    r.prototype.addBool = function(t, e) {
        return this.validKey(t) && (this.keys.push(t),
        this.data[t] = Boolean(e),
        this.defaultVal[t] = this.data[t]),
        this
    }
    ,
    r.prototype.addInt = function(t, e) {
        return this.validKey(t) && (this.keys.push(t),
        this.data[t] = parseInt(e),
        this.defaultVal[t] = this.data[t]),
        this
    }
    ,
    r.prototype.addFloat = function(t, e) {
        return this.validKey(t) && (this.keys.push(t),
        this.data[t] = parseFloat(e),
        this.defaultVal[t] = this.data[t]),
        this
    }
    ,
    r.prototype.addString = function(t, e) {
        return this.validKey(t) && (this.keys.push(t),
        this.data[t] = JSON.stringify(e),
        this.defaultVal[t] = this.data[t]),
        this
    }
    ,
    r.prototype.addArray = function(t, e) {
        return this.validKey(t) && (this.keys.push(t),
        this.data[t] = e || [],
        this.defaultVal[t] = this.data[t]),
        this
    }
    ,
    r.prototype.has = function(t) {
        return this.keys.indexOf(t) >= 0
    }
    ,
    r.prototype.set = function(t, e) {
        return this.has(t) && (this.data[t] = e,
        this.emit(t, e)),
        this
    }
    ,
    r.prototype.setBool = function(t, e) {
        return this.set(t, Boolean(e))
    }
    ,
    r.prototype.setInt = function(t, e) {
        return this.set(t, parseInt(e))
    }
    ,
    r.prototype.setFloat = function(t, e) {
        return this.set(t, parseFloat(e))
    }
    ,
    r.prototype.setString = function(t, e) {
        return this.set(t, JSON.stringify(e))
    }
    ,
    r.prototype.setArrayItem = function(t, e, i) {
        var r = this.get(t);
        return r && r.length > e && (r[e] = i,
        this.emit(t, r)),
        this
    }
    ,
    r.prototype.get = function(t) {
        if (this.has(t))
            return this.data[t]
    }
    ,
    r.prototype.getArrayItem = function(t, e) {
        var i = this.get(t);
        if (i && i.length > e)
            return i[e]
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    t.exports.getTargetAndKey = function(t, e) {
        var i = e.split(".");
        if (1 === i.length)
            return [t, e];
        for (var r = t, n = 0; n < i.length - 1; n++) {
            if (!r.hasOwnProperty(i[n]))
                return void console.log('[Warning]: anim target "' + i[n] + '" not found');
            r = r[i[n]]
        }
        return r.hasOwnProperty(i[i.length - 1]) ? [r, i[i.length - 1]] : void console.log('[Warning]: anim target "' + i[i.length - 1] + '" not found')
    }
}
, function(t, e, i) {
    "use strict";
    t.exports.Easing = {
        Linear: {
            None: function(t) {
                return t
            }
        },
        Quadratic: {
            In: function(t) {
                return t * t
            },
            Out: function(t) {
                return t * (2 - t)
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }
        },
        Cubic: {
            In: function(t) {
                return t * t * t
            },
            Out: function(t) {
                return --t * t * t + 1
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }
        },
        Quartic: {
            In: function(t) {
                return t * t * t * t
            },
            Out: function(t) {
                return 1 - --t * t * t * t
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }
        },
        Quintic: {
            In: function(t) {
                return t * t * t * t * t
            },
            Out: function(t) {
                return --t * t * t * t * t + 1
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }
        },
        Sinusoidal: {
            In: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Out: function(t) {
                return Math.sin(t * Math.PI / 2)
            },
            InOut: function(t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }
        },
        Exponential: {
            In: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            Out: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            InOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }
        },
        Circular: {
            In: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Out: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
        },
        Elastic: {
            In: function(t) {
                var e, i = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1,
                e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI),
                -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
            },
            Out: function(t) {
                var e, i = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1,
                e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI),
                i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
            },
            InOut: function(t) {
                var e, i = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1,
                e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI),
                (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
            }
        },
        Back: {
            In: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            Out: function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            InOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }
        },
        Bounce: {
            In: function(t) {
                return 1 - Tween.Easing.Bounce.Out(1 - t)
            },
            Out: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            InOut: function(t) {
                return t < .5 ? .5 * Tween.Easing.Bounce.In(2 * t) : .5 * Tween.Easing.Bounce.Out(2 * t - 1) + .5
            }
        }
    },
    t.exports.Interpolation = {
        Linear: function(t, e) {
            var i = t.length - 1
              , r = i * e
              , n = Math.floor(r)
              , o = Tween.Interpolation.Utils.Linear;
            return e < 0 ? o(t[0], t[1], r) : e > 1 ? o(t[i], t[i - 1], i - r) : o(t[n], t[n + 1 > i ? i : n + 1], r - n)
        },
        Bezier: function(t, e) {
            var i, r = 0, n = t.length - 1, o = Math.pow, s = Tween.Interpolation.Utils.Bernstein;
            for (i = 0; i <= n; i++)
                r += o(1 - e, n - i) * o(e, i) * t[i] * s(n, i);
            return r
        },
        CatmullRom: function(t, e) {
            var i = t.length - 1
              , r = i * e
              , n = Math.floor(r)
              , o = Tween.Interpolation.Utils.CatmullRom;
            return t[0] === t[i] ? (e < 0 && (n = Math.floor(r = i * (1 + e))),
            o(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], r - n)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -r) - t[0]) : e > 1 ? t[i] - (o(t[i], t[i], t[i - 1], t[i - 1], r - i) - t[i]) : o(t[n ? n - 1 : 0], t[n], t[i < n + 1 ? i : n + 1], t[i < n + 2 ? i : n + 2], r - n)
        },
        Utils: {
            Linear: function(t, e, i) {
                return (e - t) * i + t
            },
            Bernstein: function(t, e) {
                var i = Tween.Interpolation.Utils.Factorial;
                return i(t) / i(e) / i(t - e)
            },
            Factorial: function() {
                var t = [1];
                return function(e) {
                    var i, r = 1;
                    if (t[e])
                        return t[e];
                    for (i = e; i > 1; i--)
                        r *= i;
                    return t[e] = r
                }
            }(),
            CatmullRom: function(t, e, i, r, n) {
                var o = .5 * (i - t)
                  , s = .5 * (r - e)
                  , a = n * n;
                return (2 * e - 2 * i + o + s) * (n * a) + (-3 * e + 3 * i - 2 * o - s) * a + o * n + e
            }
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        void 0 === t && (t = []),
        this.c = 1,
        this.s0 = 0,
        this.s1 = 0,
        this.s2 = 0,
        "string" == typeof t ? this.state(t) : this.sow(t)
    }
    Object.assign(r.prototype, {
        rnd: function() {
            var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            return this.c = 0 | t,
            this.s0 = this.s1,
            this.s1 = this.s2,
            this.s2 = t - this.c,
            this.s2
        },
        sow: function(t) {
            if (this.s0 = this.hash(" "),
            this.s1 = this.hash(this.s0),
            this.s2 = this.hash(this.s1),
            this.c = 1,
            t)
                for (var e = 0; e < t.length && null != t[e]; e++) {
                    var i = t[e];
                    this.s0 -= this.hash(i),
                    this.s0 += ~~(this.s0 < 0),
                    this.s1 -= this.hash(i),
                    this.s1 += ~~(this.s1 < 0),
                    this.s2 -= this.hash(i),
                    this.s2 += ~~(this.s2 < 0)
                }
        },
        hash: function(t) {
            var e, i, r;
            for (r = 4022871197,
            t = t.toString(),
            i = 0; i < t.length; i++)
                r += t.charCodeAt(i),
                e = .02519603282416938 * r,
                r = e >>> 0,
                e -= r,
                e *= r,
                r = e >>> 0,
                e -= r,
                r += 4294967296 * e;
            return 2.3283064365386963e-10 * (r >>> 0)
        },
        integer: function() {
            return 4294967296 * this.rnd.apply(this)
        },
        frac: function() {
            return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
        },
        real: function() {
            return this.integer() + this.frac()
        },
        integerInRange: function(t, e) {
            return Math.floor(this.realInRange(0, e - t + 1) + t)
        },
        between: function(t, e) {
            return this.integerInRange(t, e)
        },
        realInRange: function(t, e) {
            return this.frac() * (e - t) + t
        },
        normal: function() {
            return 1 - 2 * this.frac()
        },
        uuid: function() {
            var t = ""
              , e = "";
            for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-")
                ;
            return e
        },
        pick: function(t) {
            return t[this.integerInRange(0, t.length - 1)]
        },
        weightedPick: function(t) {
            return t[~~(Math.pow(this.frac(), 2) * (t.length - 1) + .5)]
        },
        state: function(t) {
            return "string" == typeof t && t.match(/^!rnd/) && (t = t.split(","),
            this.c = parseFloat(t[1]),
            this.s0 = parseFloat(t[2]),
            this.s1 = parseFloat(t[3]),
            this.s2 = parseFloat(t[4])),
            ["!rnd", this.c, this.s0, this.s1, this.s2].join(",")
        }
    }),
    t.exports = new r([(Date.now() * Math.random()).toString()])
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        return t < e ? e - t < O : t - e < O
    }
    function n(t, e) {
        return t < e || r(t, e)
    }
    function o(t, e) {
        return t > e || r(e, t)
    }
    function s(t, e, i) {
        var r = t.slice((i || e) + 1 || t.length);
        return t.length = e < 0 ? t.length + e : e,
        t.push.apply(t, r)
    }
    function a(t, e) {
        var i = t.indexOf(e);
        -1 !== i && s(t, i)
    }
    function h(t) {
        t._lastLeft = t.last.x - .5 * t.shape.width,
        t._lastRight = t._lastLeft + t.shape.width,
        t._lastTop = t.last.y - .5 * t.shape.height,
        t._lastBottom = t._lastTop + t.shape.height,
        t._left = t.position.x - .5 * t.shape.width,
        t._right = t._left + t.shape.width,
        t._top = t.position.y - .5 * t.shape.height,
        t._bottom = t._top + t.shape.height
    }
    function u(t, e) {
        this.gravity = S.create(t || 0, e || 980),
        this.tree = new M(R.spatialFactor),
        this.solver = "SAT" === R.solver ? new g : new l,
        this.response = new y,
        this.bodies = [],
        this.collisionGroups = {},
        this.checks = {},
        this.collisionChecks = 0
    }
    function l() {}
    function c(t) {
        this.id = c.uid++,
        this.world = null,
        this.shape = null,
        this.position = S.create(),
        this.last = S.create(),
        this.velocity = S.create(),
        this.velocityLimit = S.create(400, 400),
        this.mass = 0,
        this.collisionGroup = null,
        this.collideAgainst = 0,
        this.force = S.create(),
        this.damping = 0,
        this._left = 0,
        this._right = 0,
        this._top = 0,
        this._bottom = 0,
        this._lastLeft = 0,
        this._lastRight = 0,
        this._lastTop = 0,
        this._lastBottom = 0,
        p(this, t),
        "SAT" === R.solver && this.shape.type === P && (this.shape = this.shape.toPolygon()),
        "SpatialHash" === R.broadPhase ? Array.isArray(this.collideAgainst) && this.setCollideAgainst(this.collideAgainst) : this.collideAgainst = this.collideAgainst || []
    }
    function p(t, e) {
        for (var i in e)
            switch (i) {
            case "mass":
            case "damping":
            case "rotation":
            case "shape":
            case "collisionGroup":
            case "collideAgainst":
            case "collide":
            case "beforeCollide":
                t[i] = e[i];
                break;
            case "position":
            case "velocity":
            case "force":
                t[i].x = e[i].x || 0,
                t[i].y = e[i].y || 0;
                break;
            case "velocityLimit":
                t[i].x = e[i].x || 400,
                t[i].y = e[i].y || 400
            }
    }
    function d(t) {
        this.width = 1,
        this.height = 1,
        this.points = [],
        this.calcPoints = [],
        this.edges = [],
        this.normals = [],
        this.offset = new S,
        this._rotation = 0,
        this.setPoints(t || [])
    }
    function f(t, e) {
        this.width = t || 50,
        this.height = e || 50,
        this.rotation = 0,
        this.type = P
    }
    function v(t) {
        this.radius = t || 50,
        this.rotation = 0,
        this.type = D
    }
    function y() {
        this.a = null,
        this.b = null,
        this.aInB = !0,
        this.bInA = !0,
        this.overlap = Number.MAX_VALUE,
        this.overlapN = new S,
        this.overlapV = new S
    }
    function g() {}
    function m(t, e, i) {
        for (var r = Number.MAX_VALUE, n = -Number.MAX_VALUE, o = t.length, s = 0; s < o; s++) {
            var a = t[s].dot(e);
            a < r && (r = a),
            a > n && (n = a)
        }
        i[0] = r,
        i[1] = n
    }
    function x(t, e, i, r, n, o) {
        var s = k.pop()
          , a = k.pop()
          , h = I.pop().copy(e).subtract(t)
          , u = h.dot(n);
        if (m(i, n, s),
        m(r, n, a),
        a[0] += u,
        a[1] += u,
        s[0] > a[1] || a[0] > s[1])
            return I.push(h),
            k.push(s),
            k.push(a),
            !0;
        if (o) {
            var l = 0;
            if (s[0] < a[0])
                o.aInB = !1,
                s[1] < a[1] ? (l = s[1] - a[0],
                o.bInA = !1) : l = (c = s[1] - a[0]) < (p = a[1] - s[0]) ? c : -p;
            else if (o.bInA = !1,
            s[1] > a[1])
                l = s[0] - a[1],
                o.aInB = !1;
            else {
                var c = s[1] - a[0]
                  , p = a[1] - s[0];
                l = c < p ? c : -p
            }
            var d = Math.abs(l);
            d < o.overlap && (o.overlap = d,
            o.overlapN.copy(n),
            l < 0 && o.overlapN.reverse())
        }
        return I.push(h),
        k.push(s),
        k.push(a),
        !1
    }
    function _(t, e) {
        var i = t.squaredLength()
          , r = e.dot(t);
        return r < 0 ? F : r > i ? B : L
    }
    function b(t, e, i) {
        var r = I.pop().copy(e.position).subtract(t.position)
          , n = t.shape.radius + e.shape.radius
          , o = n * n
          , s = r.squaredLength();
        if (s > o)
            return I.push(r),
            !1;
        if (i) {
            var a = Math.sqrt(s);
            i.a = t,
            i.b = e,
            i.overlap = n - a,
            i.overlapN.copy(r.normalize()),
            i.overlapV.copy(r).multiply(i.overlap),
            i.aInB = t.shape.radius <= e.shape.radius && a <= e.shape.radius - t.shape.radius,
            i.bInA = e.shape.radius <= t.shape.radius && a <= t.shape.radius - e.shape.radius
        }
        return I.push(r),
        !0
    }
    function T(t, e, i) {
        for (var r = I.pop().copy(e.position).subtract(t.position), n = e.shape.radius, o = n * n, s = t.shape.calcPoints, a = s.length, h = I.pop(), u = I.pop(), l = 0; l < a; l++) {
            var c = l === a - 1 ? 0 : l + 1
              , p = 0 === l ? a - 1 : l - 1
              , d = 0
              , f = null;
            h.copy(t.shape.edges[l]),
            u.copy(r).subtract(s[l]),
            i && u.squaredLength() > o && (i.aInB = !1);
            var v = _(h, u);
            if (v === F) {
                h.copy(t.shape.edges[p]);
                var y = I.pop().copy(r).subtract(s[p]);
                if ((v = _(h, y)) === B) {
                    if ((m = u.length()) > n)
                        return I.push(r),
                        I.push(h),
                        I.push(u),
                        I.push(y),
                        !1;
                    i && (i.bInA = !1,
                    f = u.normalize(),
                    d = n - m)
                }
                I.push(y)
            } else if (v === B) {
                if (h.copy(t.shape.edges[c]),
                u.copy(r).subtract(s[c]),
                (v = _(h, u)) === F) {
                    if ((m = u.length()) > n)
                        return I.push(r),
                        I.push(h),
                        I.push(u),
                        !1;
                    i && (i.bInA = !1,
                    f = u.normalize(),
                    d = n - m)
                }
            } else {
                var g = h.perp().normalize()
                  , m = u.dot(g)
                  , x = Math.abs(m);
                if (m > 0 && x > n)
                    return I.push(r),
                    I.push(g),
                    I.push(u),
                    !1;
                i && (f = g,
                d = n - m,
                (m >= 0 || d < 2 * n) && (i.bInA = !1))
            }
            f && i && Math.abs(d) < Math.abs(i.overlap) && (i.overlap = d,
            i.overlapN.copy(f))
        }
        return i && (i.a = t,
        i.b = e,
        i.overlapV.copy(i.overlapN).multiply(i.overlap)),
        I.push(r),
        I.push(h),
        I.push(u),
        !0
    }
    function w(t, e, i) {
        var r = T(e, t, i);
        if (r && i) {
            var n = i.a
              , o = i.aInB;
            i.overlapN.reverse(),
            i.overlapV.reverse(),
            i.a = i.b,
            i.b = n,
            i.aInB = i.bInA,
            i.bInA = o
        }
        return r
    }
    function E(t, e, i) {
        for (var r = t.shape.calcPoints, n = r.length, o = e.shape.calcPoints, s = o.length, a = 0; a < n; a++)
            if (x(t.position, e.position, r, o, t.shape.normals[a], i))
                return !1;
        for (a = 0; a < s; a++)
            if (x(t.position, e.position, r, o, e.shape.normals[a], i))
                return !1;
        return i && (i.a = t,
        i.b = e,
        i.overlapV.copy(i.overlapN).multiply(i.overlap)),
        !0
    }
    var S = i(18)
      , A = i(6)
      , C = i(7)
      , M = i(195)
      , R = i(10).default.physics
      , O = 1e-6
      , P = 0
      , D = 1;
    u.prototype.addBody = function(t) {
        t.world = this,
        t._remove = !1,
        -1 === this.bodies.indexOf(t) && this.bodies.push(t),
        this.addBodyCollision(t)
    }
    ,
    u.prototype.removeBody = function(t) {
        t.world && (t.world = null,
        t._remove = !0)
    }
    ,
    u.prototype.addBodyCollision = function(t) {
        "number" == typeof t.collisionGroup && (this.collisionGroups[t.collisionGroup] = this.collisionGroups[t.collisionGroup] || [],
        -1 === this.collisionGroups[t.collisionGroup].indexOf(t) && this.collisionGroups[t.collisionGroup].push(t))
    }
    ,
    u.prototype.removeBodyCollision = function(t) {
        "number" == typeof t.collisionGroup && this.collisionGroups[t.collisionGroup] && -1 !== this.collisionGroups[t.collisionGroup].indexOf(t) && a(this.collisionGroups[t.collisionGroup], t)
    }
    ,
    u.prototype.collide = function(t) {
        var e, i, r, n, o;
        if (t.beforeCollide(),
        "SpatialHash" === R.broadPhase)
            for (n = this.tree.retrieve(t),
            i = 0; i < n.length; i++)
                (r = n[i]) !== t && 0 != (t.collideAgainst & r.collisionGroup) && (o = t.id + ":" + r.id,
                this.checks[o] || (this.collisionChecks++,
                this.checks[o] = !0,
                this.response.clear(),
                this.solver.hitTest(t, r, this.response) && this.solver.hitResponse(t, r, !0, (r.collideAgainst & t.collisionGroup) === t.collisionGroup, this.response) && t.afterCollide(r)));
        else
            for (e = 0; e < t.collideAgainst.length; e++)
                if (n = this.collisionGroups[t.collideAgainst[e]])
                    for (i = n.length - 1; i >= 0 && n; i--)
                        r = n[i],
                        t !== r && (this.response.clear(),
                        this.solver.hitTest(t, r, this.response) && this.solver.hitResponse(t, r, !0, -1 !== r.collideAgainst.indexOf(t.collisionGroup), this.response) && t.afterCollide(r))
    }
    ,
    u.prototype.preUpdate = function(t) {
        var e;
        for (e = 0; e < this.bodies.length; e++)
            this.bodies[e]._remove ? (this.removeBodyCollision(this.bodies[e]),
            C.removeItems(this.bodies, e, 1)) : this.bodies[e].last.copy(this.bodies[e].position);
        "SpatialHash" === R.broadPhase && (this.tree.clear(),
        this.checks = {})
    }
    ,
    u.prototype.update = function(t) {
        var e, i, r, n = "SpatialHash" === R.broadPhase;
        for (e = 0; e < this.bodies.length; e++)
            (r = this.bodies[e]).update(t),
            n && this.tree.insert(r);
        for (e in this.collisionGroups)
            if (0 !== this.collisionGroups[e].length)
                for (i = this.collisionGroups[e].length - 1; i >= 0; i--)
                    n ? this.collisionGroups[e][i] && this.collisionGroups[e][i].collideAgainst > 0 && this.collide(this.collisionGroups[e][i]) : this.collisionGroups[e][i] && this.collisionGroups[e][i].collideAgainst.length > 0 && this.collide(this.collisionGroups[e][i]);
            else
                delete this.collisionGroups[e]
    }
    ,
    u.prototype.cleanup = function() {
        this.bodies.length = 0,
        this.collisionGroups = {}
    }
    ,
    l.prototype.hitTest = function(t, e) {
        if (!t.shape || !e.shape)
            return !1;
        if (t.shape.type === P && e.shape.type === P)
            return !(t._bottom <= e._top || t._top >= e._bottom || t._left >= e._right || t._right <= e._left);
        if (t.shape.type === D && e.shape.type === D)
            return !(t._bottom <= e._top || t._top >= e._bottom || t._left >= e._right || t._right <= e._left) && t.position.squaredDistance(e.position) < (t.shape.radius + e.shape.radius) * (t.shape.radius + e.shape.radius);
        if (t.shape.type === P && e.shape.type === D || t.shape.type === D && e.shape.type === P) {
            var i = t.shape.type === P ? t : e
              , r = t.shape.type === D ? t : e;
            if (!(t._bottom <= e._top || t._top >= e._bottom || t._left >= e._right || t._right <= e._left)) {
                var n = r.position.x - C.clamp(r.position.x, i._left, i._right)
                  , o = r.position.y - C.clamp(r.position.y, i._top, i._bottom);
                return n * n + o * o < r.shape.radius * r.shape.radius
            }
        }
        return !1
    }
    ,
    l.prototype.hitResponse = function(t, e) {
        if (t.shape.type === P && e.shape.type === P || t.shape.type === P && e.shape.type === D || t.shape.type === D && e.shape.type === P) {
            if (n(t._lastBottom, e._lastTop)) {
                if (t.collide(e, 2))
                    return t.position.y = e.position.y - .5 * e.shape.height - .5 * t.shape.height,
                    !0
            } else if (o(t._lastTop, e._lastBottom)) {
                if (t.collide(e, 1))
                    return t.position.y = e.position.y + .5 * e.shape.height + .5 * t.shape.height,
                    !0
            } else if (n(t._lastRight, e._lastLeft)) {
                if (t.collide(e, 8))
                    return t.position.x = e.position.x - .5 * e.shape.width - .5 * t.shape.width,
                    !0
            } else if (o(t._lastLeft, e._lastRight)) {
                if (t.collide(e, 4))
                    return t.position.x = e.position.x + .5 * e.shape.width + .5 * t.shape.width,
                    !0
            } else if (t.collide(e, 16))
                return !0;
            return !1
        }
        if (t.shape.type === D && e.shape.type === D) {
            var i = e.position.angle(t.position);
            if (t.collide(e, i)) {
                var r = t.shape.radius + e.shape.radius;
                return t.position.x = e.position.x + Math.cos(i) * r,
                t.position.y = e.position.y + Math.sin(i) * r,
                !0
            }
        }
    }
    ,
    c.uid = 0,
    Object.defineProperty(c.prototype, "rotation", {
        get: function() {
            return this.shape ? this.shape.rotation : 0
        },
        set: function(t) {
            this.shape && (this.shape.rotation = t)
        }
    }),
    Object.defineProperty(c.prototype, "width", {
        get: function() {
            return this.shape ? this.shape.width : 0
        },
        set: function(t) {
            this.shape && (this.shape.width = t)
        }
    }),
    Object.defineProperty(c.prototype, "height", {
        get: function() {
            return this.shape ? this.shape.height : 0
        },
        set: function(t) {
            this.shape && (this.shape.height = t)
        }
    }),
    c.prototype.beforeCollide = function() {}
    ,
    c.prototype.collide = function() {
        return !0
    }
    ,
    c.prototype.afterCollide = function() {}
    ,
    c.prototype.setCollisionGroup = function(t) {
        this.world && "number" == typeof this.collisionGroup && this.world.removeBodyCollision(this),
        this.collisionGroup = t,
        this.world && this.world.addBodyCollision(this)
    }
    ,
    c.prototype.setCollideAgainst = function(t) {
        if ("SpatialHash" === R.broadPhase) {
            this.collideAgainst = 0;
            for (var e = 0; e < t.length; e++)
                this.collideAgainst |= t[e]
        } else
            this.collideAgainst = t
    }
    ,
    c.prototype.addTo = function(t) {
        if (!this.world)
            return t.addBody(this),
            this
    }
    ,
    c.prototype.remove = function() {
        this.world && this.world.removeBody(this)
    }
    ,
    c.prototype.removeCollision = function() {
        this.world && this.world.removeBodyCollision(this)
    }
    ,
    c.prototype.update = function(t) {
        this.world && (0 !== this.mass && this.velocity.add(this.world.gravity.x * this.mass * t, this.world.gravity.y * this.mass * t),
        this.velocity.add(this.force.x * t, this.force.y * t),
        this.damping > 0 && this.damping < 1 && this.velocity.multiply(Math.pow(1 - this.damping, t)),
        this.velocityLimit.x > 0 && (this.velocity.x = C.clamp(this.velocity.x, -this.velocityLimit.x, this.velocityLimit.x)),
        this.velocityLimit.y > 0 && (this.velocity.y = C.clamp(this.velocity.y, -this.velocityLimit.y, this.velocityLimit.y)),
        this.position.add(this.velocity.x * t, this.velocity.y * t),
        this.shape && h(this))
    }
    ,
    d.prototype.setPoints = function(t) {
        if (!this.points || this.points.length !== t.length)
            for (var e = this.calcPoints = [], i = this.edges = [], r = this.normals = [], n = 0, o = t.length; n < o; n++)
                e.push(new S),
                i.push(new S),
                r.push(new S);
        return this.points = t,
        this._recalc(),
        this
    }
    ,
    d.prototype.setOffset = function(t) {
        return this.offset = t,
        this._recalc(),
        this
    }
    ,
    d.prototype.rotate = function(t) {
        for (var e = this.points, i = 0, r = e.length; i < r; i++)
            e[i].rotate(t);
        return this._recalc(),
        this
    }
    ,
    d.prototype.translate = function(t, e) {
        for (var i = this.points, r = 0, n = i.length; r < n; r++)
            i[r].x += t,
            i[r].y += e;
        return this._recalc(),
        this
    }
    ,
    d.prototype._recalc = function() {
        var t, e = this.calcPoints, i = this.edges, r = this.normals, n = this.points, o = this.offset, s = this._rotation, a = n.length, h = 1 / 0, u = 1 / 0, l = -1 / 0, c = -1 / 0;
        for (t = 0; t < a; t++) {
            var p = e[t].copy(n[t]);
            p.x += o.x,
            p.y += o.y,
            0 !== s && p.rotate(s),
            h = Math.min(h, p.x),
            u = Math.min(u, p.y),
            l = Math.max(l, p.x),
            c = Math.max(c, p.y)
        }
        for (t = 0; t < a; t++) {
            var d = e[t]
              , f = t < a - 1 ? e[t + 1] : e[0]
              , v = i[t].copy(f).subtract(d);
            r[t].copy(v).perp().normalize()
        }
        return this.width = l - h,
        this.height = c - u,
        this
    }
    ,
    Object.defineProperty(d.prototype, "rotation", {
        get: function() {
            return this._rotation
        },
        set: function(t) {
            this._rotation = t,
            this._recalc()
        }
    }),
    f.prototype.toPolygon = function() {
        var t = .5 * this.width
          , e = .5 * this.height;
        return new d([new S(-t,-e), new S(t,-e), new S(t,e), new S(-t,e)])
    }
    ,
    Object.defineProperty(v.prototype, "width", {
        get: function() {
            return 2 * this.radius
        }
    }),
    Object.defineProperty(v.prototype, "height", {
        get: function() {
            return 2 * this.radius
        }
    }),
    y.prototype.clear = function() {
        return this.aInB = !0,
        this.bInA = !0,
        this.overlap = Number.MAX_VALUE,
        this
    }
    ,
    g.prototype.hitTest = function(t, e, i) {
        if (t.shape.points && e.shape.points)
            return E(t, e, i);
        if (t.shape.radius && e.shape.radius)
            return b(t, e, i);
        if (t.shape.points && e.shape.radius)
            return T(t, e, i);
        if (t.shape.radius && e.shape.points)
            return w(t, e, i);
        throw "Hit test should not go so far!"
    }
    ,
    g.prototype.hitResponse = function(t, e, i, r, n) {
        var o = t === n.a ? t : e
          , s = e === n.b ? e : t
          , a = !1
          , h = !1;
        i && !r ? a = o.collide(s, n) : !i && r ? h = s.collide(o, n) : i && r && (a = o.collide(s, n),
        h = s.collide(o, n)),
        a && !h ? (o.position.subtract(n.overlapV),
        o.afterCollide(s)) : !a && h ? (s.position.add(n.overlapV),
        s.afterCollide(o)) : a && h && (n.overlapV.multiply(.5),
        o.position.subtract(n.overlapV),
        s.position.add(n.overlapV),
        o.afterCollide(s),
        s.afterCollide(o))
    }
    ;
    for (var F = -1, L = 0, B = 1, I = [], N = 0; N < 10; N++)
        I.push(new S);
    for (var k = [], N = 0; N < 5; N++)
        k.push([]);
    new y,
    new c({
        position: new S,
        shape: new f(1,1).toPolygon()
    }),
    A.registerSystem("Physics", {
        init: function(t) {
            t.world = new u
        },
        preUpdate: function(t, e, i) {
            t.world.preUpdate(i)
        },
        update: function(t, e, i) {
            t.world.update(i)
        },
        postUpdate: function(t) {
            t.world.collisionChecks = 0
        }
    }),
    t.exports = {
        getGroupMask: function(t) {
            return t < 31 ? 1 << t : (console.log("Warning: only 0-30 indexed collisionGroups are supported!"),
            0)
        },
        World: u,
        Body: c,
        Box: f,
        Polygon: d,
        Circle: v,
        UP: 1,
        DOWN: 2,
        LEFT: 4,
        RIGHT: 8,
        OVERLAP: 16
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = r(i(28))
      , h = function(t) {
        function e(i) {
            var r = i.texOn
              , s = i.texOff;
            n(this, e);
            var h = o(this, t.call(this, [r, s], !a.default.muted));
            return a.default.on("mute", function() {
                a.default.muted ? h.isOn = !1 : h.isOn = !0,
                h.updateTexture()
            }),
            h.on("toggle", h.onToggle, h),
            h
        }
        return s(e, t),
        e.prototype.onToggle = function(t) {
            t ? a.default.unmute() : a.default.mute()
        }
        ,
        e
    }(r(i(197)).default);
    e.default = h
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i(5))
      , n = function(t, e) {
        return [t[e + "/left/1"], t[e + "/left/2"], t[e + "/left/3"], t[e + "/left/4"], t[e + "/left/5"], t[e + "/left/6"], t[e + "/left/7"], t[e + "/left/8"], t[e + "/right/1"], t[e + "/right/2"], t[e + "/right/3"], t[e + "/right/4"], t[e + "/right/5"], t[e + "/right/6"], t[e + "/right/7"], t[e + "/right/8"], t[e + "/jump/1"], t[e + "/jump/2"], t[e + "/jump/3"], t[e + "/jump/4"], t[e + "/jump/5"], t[e + "/jump/6"], t[e + "/jump/7"], t[e + "/jump/8"]]
    }
      , o = void 0;
    r.default.once("complete", function() {
        var t = r.default.resources.char.textures;
        o = [n(t, "superman"), n(t, "flash"), n(t, "starman"), n(t, "nightwing"), n(t, "green_lantern"), n(t, "aquaman"), n(t, "sinestrol"), n(t, "atom"), n(t, "robin")]
    }),
    e.default = function() {
        return o
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(5);
    t.exports = function(t, e) {
        var i = e || 20;
        return t.canBePooled = !0,
        r.once("complete", function() {
            t.pool = Array(i);
            for (var e = 0; e < i; e++)
                t.pool[e] = new t
        }),
        t.create = function(t) {
            var e = this.pool.pop();
            return e || (e = new this),
            e.init(t),
            e
        }
        ,
        t.recycle = function(t) {
            this.pool.push(t)
        }
        ,
        t
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = r(i(8))
      , h = r(i(6))
      , u = r((r(i(11)),
    i(5)))
      , l = i(13)
      , c = r(i(28));
    i(191),
    i(192),
    i(199),
    u.default.addAsset("lakes.fnt"),
    u.default.addAsset("bm.fnt"),
    u.default.addAsset("ui.json", "ui"),
    l.session.addInt("score", 0).addInt("coin", 0),
    l.persistent.addInt("coin", 0).addInt("char", 0).addInt("best", 0).addArray("unlock", [1, 0, 0, 0, 0, 0, 0, 0, 0]),
    c.default.addSound(["bgm.mp3", "bgm.ogg"], "bgm");
    var p = function(t) {
        function e() {
            return n(this, e),
            o(this, t.apply(this, arguments))
        }
        return s(e, t),
        e.prototype.awake = function() {
            l.persistent.load(),
            c.default.sounds.bgm.volume(.5).loop(!0).play(),
            a.default.setScene("Title")
        }
        ,
        e
    }(h.default);
    a.default.addScene("Main", p),
    a.default.start()
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        if (null === t || void 0 === t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var n = Object.prototype.hasOwnProperty
      , o = Object.prototype.propertyIsEnumerable;
    "function" != typeof Object.assign && (Object.assign = function(t, e) {
        for (var i, s, a = r(t), h = 1; h < arguments.length; h++) {
            i = Object(arguments[h]);
            for (var u in i)
                n.call(i, u) && (a[u] = i[u]);
            if (Object.getOwnPropertySymbols) {
                s = Object.getOwnPropertySymbols(i);
                for (var l = 0; l < s.length; l++)
                    o.call(i, s[l]) && (a[s[l]] = i[s[l]])
            }
        }
        return a
    }
    )
}
, function(t, e, i) {
    (function(t) {
        if (Date.now && Date.prototype.getTime || (Date.now = function() {
            return (new Date).getTime()
        }
        ),
        !t.performance || !t.performance.now) {
            var e = Date.now();
            t.performance || (t.performance = {}),
            t.performance.now = function() {
                return Date.now() - e
            }
        }
        for (var i = Date.now(), r = ["ms", "moz", "webkit", "o"], n = 0; n < r.length && !t.requestAnimationFrame; ++n)
            t.requestAnimationFrame = t[r[n] + "RequestAnimationFrame"],
            t.cancelAnimationFrame = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
            if ("function" != typeof t)
                throw new TypeError(t + "is not a function");
            var e = Date.now()
              , r = 16 + i - e;
            return r < 0 && (r = 0),
            i = e,
            setTimeout(function() {
                i = Date.now(),
                t(performance.now())
            }, r)
        }
        ),
        t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }
        )
    }
    ).call(e, i(17))
}
, function(t, e) {
    Math.sign || (Math.sign = function(t) {
        return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
    }
    )
}
, function(t, e) {
    "function" != typeof Number.isFinite && (Number.isFinite = function(t) {
        return "number" == typeof t && t == t && t !== 1 / 0 && t !== -1 / 0
    }
    )
}
, function(t, e, i) {
    "use strict";
    var r = 1
      , n = 1;
    t.exports.outerBoxResize = function(t, e) {
        r = t.x / t.y,
        n = e.x / e.y;
        var i = {
            left: 0,
            top: 0,
            scale: 1
        };
        return r > n ? (i.scale = t.y / e.y,
        i.left = .5 * (t.x - e.x * i.scale)) : (i.scale = t.x / e.x,
        i.top = .5 * (t.y - e.y * i.scale)),
        i
    }
    ,
    t.exports.innerBoxResize = function(t, e) {
        r = t.x / t.y,
        n = e.x / e.y;
        var i = {
            left: 0,
            top: 0,
            scale: 1
        };
        return r < n ? (i.scale = t.y / e.y,
        i.left = .5 * (t.x - e.x * i.scale)) : (i.scale = t.x / e.x,
        i.top = .5 * (t.y - e.y * i.scale)),
        i
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        this.x = t || 0,
        this.y = e || 0,
        this.radius = i || 0,
        this.type = o.SHAPES.CIRC
    }
    var n = i(31)
      , o = i(1);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.clone = function() {
        return new r(this.x,this.y,this.radius)
    }
    ,
    r.prototype.contains = function(t, e) {
        if (this.radius <= 0)
            return !1;
        var i = this.x - t
          , r = this.y - e;
        return i *= i,
        r *= r,
        i + r <= this.radius * this.radius
    }
    ,
    r.prototype.getBounds = function() {
        return new n(this.x - this.radius,this.y - this.radius,2 * this.radius,2 * this.radius)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r) {
        this.x = t || 0,
        this.y = e || 0,
        this.width = i || 0,
        this.height = r || 0,
        this.type = o.SHAPES.ELIP
    }
    var n = i(31)
      , o = i(1);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.clone = function() {
        return new r(this.x,this.y,this.width,this.height)
    }
    ,
    r.prototype.contains = function(t, e) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        var i = (t - this.x) / this.width
          , r = (e - this.y) / this.height;
        return i *= i,
        r *= r,
        i + r <= 1
    }
    ,
    r.prototype.getBounds = function() {
        return new n(this.x - this.width,this.y - this.height,this.width,this.height)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        var e = t;
        if (!Array.isArray(e)) {
            e = new Array(arguments.length);
            for (var i = 0; i < e.length; ++i)
                e[i] = arguments[i]
        }
        if (e[0]instanceof n) {
            for (var r = [], s = 0, a = e.length; s < a; s++)
                r.push(e[s].x, e[s].y);
            e = r
        }
        this.closed = !0,
        this.points = e,
        this.type = o.SHAPES.POLY
    }
    var n = i(30)
      , o = i(1);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.clone = function() {
        return new r(this.points.slice())
    }
    ,
    r.prototype.contains = function(t, e) {
        for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; n < r; o = n++) {
            var s = this.points[2 * n]
              , a = this.points[2 * n + 1]
              , h = this.points[2 * o]
              , u = this.points[2 * o + 1];
            a > e != u > e && t < (h - s) * (e - a) / (u - a) + s && (i = !i)
        }
        return i
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r, o) {
        this.x = t || 0,
        this.y = e || 0,
        this.width = i || 0,
        this.height = r || 0,
        this.radius = o || 20,
        this.type = n.SHAPES.RREC
    }
    var n = i(1);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.clone = function() {
        return new r(this.x,this.y,this.width,this.height,this.radius)
    }
    ,
    r.prototype.contains = function(t, e) {
        return !(this.width <= 0 || this.height <= 0) && t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        t.__plugins = {},
        t.registerPlugin = function(e, i) {
            t.__plugins[e] = i
        }
        ,
        t.prototype.initPlugins = function() {
            this.plugins = this.plugins || {};
            for (var e in t.__plugins)
                this.plugins[e] = new t.__plugins[e](this)
        }
        ,
        t.prototype.destroyPlugins = function() {
            for (var t in this.plugins)
                this.plugins[t].destroy(),
                this.plugins[t] = null;
            this.plugins = null
        }
    }
    t.exports = {
        mixin: function(t) {
            r(t)
        }
    }
}
, function(t, e, i) {
    function r(t, e) {
        this._id = t,
        this._clearFn = e
    }
    var n = Function.prototype.apply;
    e.setTimeout = function() {
        return new r(n.call(setTimeout, window, arguments),clearTimeout)
    }
    ,
    e.setInterval = function() {
        return new r(n.call(setInterval, window, arguments),clearInterval)
    }
    ,
    e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }
    ,
    r.prototype.unref = r.prototype.ref = function() {}
    ,
    r.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }
    ,
    e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId),
        t._idleTimeout = e
    }
    ,
    e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId),
        t._idleTimeout = -1
    }
    ,
    e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
            t._onTimeout && t._onTimeout()
        }, e))
    }
    ,
    i(92),
    e.setImmediate = setImmediate,
    e.clearImmediate = clearImmediate
}
, function(t, e, i) {
    (function(t, e) {
        !function(t, i) {
            "use strict";
            function r(t) {
                delete h[t]
            }
            function n(t) {
                var e = t.callback
                  , r = t.args;
                switch (r.length) {
                case 0:
                    e();
                    break;
                case 1:
                    e(r[0]);
                    break;
                case 2:
                    e(r[0], r[1]);
                    break;
                case 3:
                    e(r[0], r[1], r[2]);
                    break;
                default:
                    e.apply(i, r)
                }
            }
            function o(t) {
                if (u)
                    setTimeout(o, 0, t);
                else {
                    var e = h[t];
                    if (e) {
                        u = !0;
                        try {
                            n(e)
                        } finally {
                            r(t),
                            u = !1
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var s, a = 1, h = {}, u = !1, l = t.document, c = Object.getPrototypeOf && Object.getPrototypeOf(t);
                c = c && c.setTimeout ? c : t,
                "[object process]" === {}.toString.call(t.process) ? s = function(t) {
                    e.nextTick(function() {
                        o(t)
                    })
                }
                : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0
                          , i = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }
                        ,
                        t.postMessage("", "*"),
                        t.onmessage = i,
                        e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$"
                      , i = function(i) {
                        i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && o(+i.data.slice(e.length))
                    };
                    t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i),
                    s = function(i) {
                        t.postMessage(e + i, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        o(t.data)
                    }
                    ,
                    s = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : l && "onreadystatechange"in l.createElement("script") ? function() {
                    var t = l.documentElement;
                    s = function(e) {
                        var i = l.createElement("script");
                        i.onreadystatechange = function() {
                            o(e),
                            i.onreadystatechange = null,
                            t.removeChild(i),
                            i = null
                        }
                        ,
                        t.appendChild(i)
                    }
                }() : s = function(t) {
                    setTimeout(o, 0, t)
                }
                ,
                c.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++)
                        e[i] = arguments[i + 1];
                    var r = {
                        callback: t,
                        args: e
                    };
                    return h[a] = r,
                    s(a),
                    a++
                }
                ,
                c.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }
    ).call(e, i(17), i(46))
}
, function(t, e, i) {
    "use strict";
    var r = i(94)
      , n = new r;
    n.autoStart = !0,
    t.exports = {
        shared: n,
        Ticker: r
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        var t = this;
        this._tick = function(e) {
            t._requestId = null,
            t.started && (t.update(e),
            t.started && null === t._requestId && t._emitter.listeners(s, !0) && (t._requestId = requestAnimationFrame(t._tick)))
        }
        ,
        this._emitter = new o,
        this._requestId = null,
        this._maxElapsedMS = 100,
        this.autoStart = !1,
        this.deltaTime = 1,
        this.elapsedMS = 1 / n.TARGET_FPMS,
        this.lastTime = 0,
        this.speed = 1,
        this.started = !1
    }
    var n = i(1)
      , o = i(2)
      , s = "tick";
    Object.defineProperties(r.prototype, {
        FPS: {
            get: function() {
                return 1e3 / this.elapsedMS
            }
        },
        minFPS: {
            get: function() {
                return 1e3 / this._maxElapsedMS
            },
            set: function(t) {
                var e = Math.min(Math.max(0, t) / 1e3, n.TARGET_FPMS);
                this._maxElapsedMS = 1 / e
            }
        }
    }),
    r.prototype._requestIfNeeded = function() {
        null === this._requestId && this._emitter.listeners(s, !0) && (this.lastTime = performance.now(),
        this._requestId = requestAnimationFrame(this._tick))
    }
    ,
    r.prototype._cancelIfNeeded = function() {
        null !== this._requestId && (cancelAnimationFrame(this._requestId),
        this._requestId = null)
    }
    ,
    r.prototype._startIfPossible = function() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }
    ,
    r.prototype.add = function(t, e) {
        return this._emitter.on(s, t, e),
        this._startIfPossible(),
        this
    }
    ,
    r.prototype.addOnce = function(t, e) {
        return this._emitter.once(s, t, e),
        this._startIfPossible(),
        this
    }
    ,
    r.prototype.remove = function(t, e) {
        return this._emitter.off(s, t, e),
        this._emitter.listeners(s, !0) || this._cancelIfNeeded(),
        this
    }
    ,
    r.prototype.start = function() {
        this.started || (this.started = !0,
        this._requestIfNeeded())
    }
    ,
    r.prototype.stop = function() {
        this.started && (this.started = !1,
        this._cancelIfNeeded())
    }
    ,
    r.prototype.update = function(t) {
        var e;
        t = t || performance.now(),
        (e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS),
        this.deltaTime = e * n.TARGET_FPMS * this.speed,
        this._emitter.emit(s, this.deltaTime),
        this.lastTime = t
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r() {
        this.stencilStack = [],
        this.reverse = !0,
        this.count = 0
    }
    r.prototype.constructor = r,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        this.gl = t,
        this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]),
        this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
        this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]),
        this.vertexBuffer = t.createBuffer(),
        this.indexBuffer = t.createBuffer(),
        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
        t.bufferData(t.ARRAY_BUFFER, 128, t.DYNAMIC_DRAW),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
        this.upload()
    }
    r.prototype.constructor = r,
    r.prototype.map = function(t, e) {
        var i = 0
          , r = 0;
        this.uvs[0] = i,
        this.uvs[1] = r,
        this.uvs[2] = i + e.width / t.width,
        this.uvs[3] = r,
        this.uvs[4] = i + e.width / t.width,
        this.uvs[5] = r + e.height / t.height,
        this.uvs[6] = i,
        this.uvs[7] = r + e.height / t.height,
        i = e.x,
        r = e.y,
        this.vertices[0] = i,
        this.vertices[1] = r,
        this.vertices[2] = i + e.width,
        this.vertices[3] = r,
        this.vertices[4] = i + e.width,
        this.vertices[5] = r + e.height,
        this.vertices[6] = i,
        this.vertices[7] = r + e.height,
        this.upload()
    }
    ,
    r.prototype.upload = function() {
        var t = this.gl;
        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
        t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices),
        t.bufferSubData(t.ARRAY_BUFFER, 32, this.uvs),
        t.bufferSubData(t.ARRAY_BUFFER, 64, this.colors)
    }
    ,
    r.prototype.destroy = function() {
        var t = this.gl;
        t.deleteBuffer(this.vertexBuffer),
        t.deleteBuffer(this.indexBuffer)
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        n.call(this),
        i = i || 15e3,
        t = t || 15e3,
        i > 16384 && (i = 16384),
        i > t && (i = t),
        this._properties = [!1, !0, !1, !1, !1],
        this._maxSize = t,
        this._batchSize = i,
        this._buffers = null,
        this._bufferToUpdate = 0,
        this.interactiveChildren = !1,
        this.blendMode = o.BLEND_MODES.NORMAL,
        this.roundPixels = !0,
        this.setProperties(e)
    }
    var n = i(22)
      , o = i(1);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.setProperties = function(t) {
        t && (this._properties[0] = "scale"in t ? !!t.scale : this._properties[0],
        this._properties[1] = "position"in t ? !!t.position : this._properties[1],
        this._properties[2] = "rotation"in t ? !!t.rotation : this._properties[2],
        this._properties[3] = "uvs"in t ? !!t.uvs : this._properties[3],
        this._properties[4] = "alpha"in t ? !!t.alpha : this._properties[4])
    }
    ,
    r.prototype.updateTransform = function() {
        this.displayObjectUpdateTransform()
    }
    ,
    r.prototype.renderWebGL = function(t) {
        this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (t.setObjectRenderer(t.plugins.particle),
        t.plugins.particle.render(this))
    }
    ,
    r.prototype.onChildrenChange = function(t) {
        var e = Math.floor(t / this._batchSize);
        e < this._bufferToUpdate && (this._bufferToUpdate = e)
    }
    ,
    r.prototype.renderCanvas = function(t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
            var e = t.context
              , i = this.worldTransform
              , r = !0
              , n = 0
              , o = 0
              , s = 0
              , a = 0
              , h = t.blendModes[this.blendMode];
            h !== e.globalCompositeOperation && (e.globalCompositeOperation = h),
            e.globalAlpha = this.worldAlpha,
            this.displayObjectUpdateTransform();
            for (var u = 0; u < this.children.length; ++u) {
                var l = this.children[u];
                if (l.visible) {
                    var c = l.texture.frame;
                    if (e.globalAlpha = this.worldAlpha * l.alpha,
                    l.rotation % (2 * Math.PI) == 0)
                        r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty),
                        r = !1),
                        n = l.anchor.x * (-c.width * l.scale.x) + l.position.x + .5,
                        o = l.anchor.y * (-c.height * l.scale.y) + l.position.y + .5,
                        s = c.width * l.scale.x,
                        a = c.height * l.scale.y;
                    else {
                        r || (r = !0),
                        l.displayObjectUpdateTransform();
                        var p = l.worldTransform;
                        t.roundPixels ? e.setTransform(p.a, p.b, p.c, p.d, 0 | p.tx, 0 | p.ty) : e.setTransform(p.a, p.b, p.c, p.d, p.tx, p.ty),
                        n = l.anchor.x * -c.width + .5,
                        o = l.anchor.y * -c.height + .5,
                        s = c.width,
                        a = c.height
                    }
                    e.drawImage(l.texture.baseTexture.source, c.x, c.y, c.width, c.height, n, o, s, a)
                }
            }
        }
    }
    ,
    r.prototype.destroy = function() {
        if (n.prototype.destroy.apply(this, arguments),
        this._buffers)
            for (var t = 0; t < this._buffers.length; ++t)
                this._buffers[t].destroy();
        this._properties = null,
        this._buffers = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.vertSize = 5,
        this.vertByteSize = 4 * this.vertSize,
        this.size = s.SPRITE_BATCH_SIZE;
        var e = 4 * this.size * this.vertByteSize
          , i = 6 * this.size;
        this.vertices = new ArrayBuffer(e),
        this.positions = new Float32Array(this.vertices),
        this.colors = new Uint32Array(this.vertices),
        this.indices = new Uint16Array(i);
        for (var r = 0, o = 0; r < i; r += 6,
        o += 4)
            this.indices[r + 0] = o + 0,
            this.indices[r + 1] = o + 1,
            this.indices[r + 2] = o + 2,
            this.indices[r + 3] = o + 0,
            this.indices[r + 4] = o + 2,
            this.indices[r + 5] = o + 3;
        this.currentBatchSize = 0,
        this.sprites = [],
        this.shader = null
    }
    var n = i(15)
      , o = i(23)
      , s = i(1);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    o.registerPlugin("sprite", r),
    r.prototype.onContextChange = function() {
        var t = this.renderer.gl;
        this.shader = this.renderer.shaderManager.defaultShader,
        this.vertexBuffer = t.createBuffer(),
        this.indexBuffer = t.createBuffer(),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
        t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW),
        this.currentBlendMode = 99999
    }
    ,
    r.prototype.render = function(t) {
        var e = t._texture;
        this.currentBatchSize >= this.size && this.flush();
        var i = e._uvs;
        if (i) {
            var r, n, o, s, a = t.anchor.x, h = t.anchor.y;
            if (e.trim && void 0 === t.tileScale) {
                var u = e.trim;
                r = (n = u.x - a * u.width) + e.crop.width,
                o = (s = u.y - h * u.height) + e.crop.height
            } else
                r = e._frame.width * (1 - a),
                n = e._frame.width * -a,
                o = e._frame.height * (1 - h),
                s = e._frame.height * -h;
            var l = this.currentBatchSize * this.vertByteSize
              , c = t.worldTransform
              , p = c.a
              , d = c.b
              , f = c.c
              , v = c.d
              , y = c.tx
              , g = c.ty
              , m = this.colors
              , x = this.positions;
            if (this.renderer.roundPixels) {
                var _ = this.renderer.resolution;
                x[l] = ((p * n + f * s + y) * _ | 0) / _,
                x[l + 1] = ((v * s + d * n + g) * _ | 0) / _,
                x[l + 5] = ((p * r + f * s + y) * _ | 0) / _,
                x[l + 6] = ((v * s + d * r + g) * _ | 0) / _,
                x[l + 10] = ((p * r + f * o + y) * _ | 0) / _,
                x[l + 11] = ((v * o + d * r + g) * _ | 0) / _,
                x[l + 15] = ((p * n + f * o + y) * _ | 0) / _,
                x[l + 16] = ((v * o + d * n + g) * _ | 0) / _
            } else
                x[l] = p * n + f * s + y,
                x[l + 1] = v * s + d * n + g,
                x[l + 5] = p * r + f * s + y,
                x[l + 6] = v * s + d * r + g,
                x[l + 10] = p * r + f * o + y,
                x[l + 11] = v * o + d * r + g,
                x[l + 15] = p * n + f * o + y,
                x[l + 16] = v * o + d * n + g;
            x[l + 2] = i.x0,
            x[l + 3] = i.y0,
            x[l + 7] = i.x1,
            x[l + 8] = i.y1,
            x[l + 12] = i.x2,
            x[l + 13] = i.y2,
            x[l + 17] = i.x3,
            x[l + 18] = i.y3;
            var b = t.tint;
            m[l + 4] = m[l + 9] = m[l + 14] = m[l + 19] = (b >> 16) + (65280 & b) + ((255 & b) << 16) + (255 * t.worldAlpha << 24),
            this.sprites[this.currentBatchSize++] = t
        }
    }
    ,
    r.prototype.flush = function() {
        if (0 !== this.currentBatchSize) {
            var t, e = this.renderer.gl;
            if (this.currentBatchSize > .5 * this.size)
                e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
            else {
                var i = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
                e.bufferSubData(e.ARRAY_BUFFER, 0, i)
            }
            for (var r, n, o, s, a = 0, h = 0, u = null, l = this.renderer.blendModeManager.currentBlendMode, c = null, p = !1, d = !1, f = 0, v = this.currentBatchSize; f < v; f++)
                s = this.sprites[f],
                r = s._texture.baseTexture,
                n = s.blendMode,
                o = s.shader || this.shader,
                p = l !== n,
                d = c !== o,
                (u !== r || p || d) && (this.renderBatch(u, a, h),
                h = f,
                a = 0,
                u = r,
                p && (l = n,
                this.renderer.blendModeManager.setBlendMode(l)),
                d && (c = o,
                (t = c.shaders ? c.shaders[e.id] : c) || (t = c.getShader(this.renderer)),
                this.renderer.shaderManager.setShader(t),
                t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0),
                t.syncUniforms(),
                e.activeTexture(e.TEXTURE0))),
                a++;
            this.renderBatch(u, a, h),
            this.currentBatchSize = 0
        }
    }
    ,
    r.prototype.renderBatch = function(t, e, i) {
        if (0 !== e) {
            var r = this.renderer.gl;
            t._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, t._glTextures[r.id]) : this.renderer.updateTexture(t),
            r.drawElements(r.TRIANGLES, 6 * e, r.UNSIGNED_SHORT, 6 * i * 2),
            this.renderer.drawCount++
        }
    }
    ,
    r.prototype.start = function() {
        var t = this.renderer.gl;
        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var e = this.vertByteSize;
        t.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, t.FLOAT, !1, e, 0),
        t.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, t.FLOAT, !1, e, 8),
        t.vertexAttribPointer(this.shader.attributes.aColor, 4, t.UNSIGNED_BYTE, !0, e, 16)
    }
    ,
    r.prototype.destroy = function() {
        this.renderer.gl.deleteBuffer(this.vertexBuffer),
        this.renderer.gl.deleteBuffer(this.indexBuffer),
        n.prototype.destroy.call(this),
        this.shader.destroy(),
        this.renderer = null,
        this.vertices = null,
        this.positions = null,
        this.colors = null,
        this.indices = null,
        this.vertexBuffer = null,
        this.indexBuffer = null,
        this.sprites = null,
        this.shader = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.stencilStack = [],
        this.reverse = !0,
        this.count = 0,
        this.alphaMaskPool = []
    }
    var n = i(12)
      , o = i(58);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.pushMask = function(t, e) {
        e.texture ? this.pushSpriteMask(t, e) : this.pushStencilMask(t, e)
    }
    ,
    r.prototype.popMask = function(t, e) {
        e.texture ? this.popSpriteMask(t, e) : this.popStencilMask(t, e)
    }
    ,
    r.prototype.pushSpriteMask = function(t, e) {
        var i = this.alphaMaskPool.pop();
        i || (i = [new o(e)]),
        i[0].maskSprite = e,
        this.renderer.filterManager.pushFilter(t, i)
    }
    ,
    r.prototype.popSpriteMask = function() {
        var t = this.renderer.filterManager.popFilter();
        this.alphaMaskPool.push(t)
    }
    ,
    r.prototype.pushStencilMask = function(t, e) {
        this.renderer.stencilManager.pushMask(e)
    }
    ,
    r.prototype.popStencilMask = function(t, e) {
        this.renderer.stencilManager.popMask(e)
    }
}
, function(t, e) {
    t.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"
}
, function(t, e) {
    t.exports = "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.stencilMaskStack = null
    }
    var n = i(12)
      , o = i(4);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.setMaskStack = function(t) {
        this.stencilMaskStack = t;
        var e = this.renderer.gl;
        0 === t.stencilStack.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
    }
    ,
    r.prototype.pushStencil = function(t, e) {
        this.renderer.currentRenderTarget.attachStencilBuffer();
        var i = this.renderer.gl
          , r = this.stencilMaskStack;
        this.bindGraphics(t, e),
        0 === r.stencilStack.length && (i.enable(i.STENCIL_TEST),
        i.clear(i.STENCIL_BUFFER_BIT),
        r.reverse = !0,
        r.count = 0),
        r.stencilStack.push(e);
        var n = r.count;
        i.colorMask(!1, !1, !1, !1),
        i.stencilFunc(i.ALWAYS, 0, 255),
        i.stencilOp(i.KEEP, i.KEEP, i.INVERT),
        1 === e.mode ? (i.drawElements(i.TRIANGLE_FAN, e.indices.length - 4, i.UNSIGNED_SHORT, 0),
        r.reverse ? (i.stencilFunc(i.EQUAL, 255 - n, 255),
        i.stencilOp(i.KEEP, i.KEEP, i.DECR)) : (i.stencilFunc(i.EQUAL, n, 255),
        i.stencilOp(i.KEEP, i.KEEP, i.INCR)),
        i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
        r.reverse ? i.stencilFunc(i.EQUAL, 255 - (n + 1), 255) : i.stencilFunc(i.EQUAL, n + 1, 255),
        r.reverse = !r.reverse) : (r.reverse ? (i.stencilFunc(i.EQUAL, n, 255),
        i.stencilOp(i.KEEP, i.KEEP, i.INCR)) : (i.stencilFunc(i.EQUAL, 255 - n, 255),
        i.stencilOp(i.KEEP, i.KEEP, i.DECR)),
        i.drawElements(i.TRIANGLE_STRIP, e.indices.length, i.UNSIGNED_SHORT, 0),
        r.reverse ? i.stencilFunc(i.EQUAL, n + 1, 255) : i.stencilFunc(i.EQUAL, 255 - (n + 1), 255)),
        i.colorMask(!0, !0, !0, !0),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        r.count++
    }
    ,
    r.prototype.bindGraphics = function(t, e) {
        var i, r = this.renderer.gl;
        1 === e.mode ? (i = this.renderer.shaderManager.complexPrimitiveShader,
        this.renderer.shaderManager.setShader(i),
        r.uniformMatrix3fv(i.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)),
        r.uniformMatrix3fv(i.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),
        r.uniform3fv(i.uniforms.tint._location, o.hex2rgb(t.tint)),
        r.uniform3fv(i.uniforms.color._location, e.color),
        r.uniform1f(i.uniforms.alpha._location, t.worldAlpha),
        r.bindBuffer(r.ARRAY_BUFFER, e.buffer),
        r.vertexAttribPointer(i.attributes.aVertexPosition, 2, r.FLOAT, !1, 8, 0),
        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (i = this.renderer.shaderManager.primitiveShader,
        this.renderer.shaderManager.setShader(i),
        r.uniformMatrix3fv(i.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)),
        r.uniformMatrix3fv(i.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),
        r.uniform3fv(i.uniforms.tint._location, o.hex2rgb(t.tint)),
        r.uniform1f(i.uniforms.alpha._location, t.worldAlpha),
        r.bindBuffer(r.ARRAY_BUFFER, e.buffer),
        r.vertexAttribPointer(i.attributes.aVertexPosition, 2, r.FLOAT, !1, 24, 0),
        r.vertexAttribPointer(i.attributes.aColor, 4, r.FLOAT, !1, 24, 8),
        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
    }
    ,
    r.prototype.popStencil = function(t, e) {
        var i = this.renderer.gl
          , r = this.stencilMaskStack;
        if (r.stencilStack.pop(),
        r.count--,
        0 === r.stencilStack.length)
            i.disable(i.STENCIL_TEST);
        else {
            var n = r.count;
            this.bindGraphics(t, e),
            i.colorMask(!1, !1, !1, !1),
            1 === e.mode ? (r.reverse = !r.reverse,
            r.reverse ? (i.stencilFunc(i.EQUAL, 255 - (n + 1), 255),
            i.stencilOp(i.KEEP, i.KEEP, i.INCR)) : (i.stencilFunc(i.EQUAL, n + 1, 255),
            i.stencilOp(i.KEEP, i.KEEP, i.DECR)),
            i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
            i.stencilFunc(i.ALWAYS, 0, 255),
            i.stencilOp(i.KEEP, i.KEEP, i.INVERT),
            i.drawElements(i.TRIANGLE_FAN, e.indices.length - 4, i.UNSIGNED_SHORT, 0),
            this.renderer.drawCount += 2,
            r.reverse ? i.stencilFunc(i.EQUAL, n, 255) : i.stencilFunc(i.EQUAL, 255 - n, 255)) : (r.reverse ? (i.stencilFunc(i.EQUAL, n + 1, 255),
            i.stencilOp(i.KEEP, i.KEEP, i.DECR)) : (i.stencilFunc(i.EQUAL, 255 - (n + 1), 255),
            i.stencilOp(i.KEEP, i.KEEP, i.INCR)),
            i.drawElements(i.TRIANGLE_STRIP, e.indices.length, i.UNSIGNED_SHORT, 0),
            this.renderer.drawCount++,
            r.reverse ? i.stencilFunc(i.EQUAL, n, 255) : i.stencilFunc(i.EQUAL, 255 - n, 255)),
            i.colorMask(!0, !0, !0, !0),
            i.stencilOp(i.KEEP, i.KEEP, i.KEEP)
        }
    }
    ,
    r.prototype.destroy = function() {
        n.prototype.destroy.call(this),
        this.stencilMaskStack.stencilStack = null
    }
    ,
    r.prototype.pushMask = function(t) {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
        t.dirty && this.renderer.plugins.graphics.updateGraphics(t, this.renderer.gl),
        t._webGL[this.renderer.gl.id].data.length && this.pushStencil(t, t._webGL[this.renderer.gl.id].data[0])
    }
    ,
    r.prototype.popMask = function(t) {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
        this.popStencil(t, t._webGL[this.renderer.gl.id].data[0])
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.currentBlendMode = 99999
    }
    var n = i(12);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.setBlendMode = function(t) {
        if (this.currentBlendMode === t)
            return !1;
        this.currentBlendMode = t;
        var e = this.renderer.blendModes[this.currentBlendMode];
        return this.renderer.gl.blendFunc(e[0], e[1]),
        !0
    }
}
, function(t, e) {
    t.exports = "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n"
}
, function(t, e) {
    t.exports = 'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n'
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t),
        this.indices = new Uint16Array(98304);
        for (var e = 0, i = 0; e < 98304; e += 6,
        i += 4)
            this.indices[e + 0] = i + 0,
            this.indices[e + 1] = i + 1,
            this.indices[e + 2] = i + 2,
            this.indices[e + 3] = i + 0,
            this.indices[e + 4] = i + 2,
            this.indices[e + 5] = i + 3;
        this.shader = null,
        this.indexBuffer = null,
        this.properties = null,
        this.tempMatrix = new h.Matrix
    }
    var n = i(15)
      , o = i(23)
      , s = i(107)
      , a = i(108)
      , h = i(3);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    o.registerPlugin("particle", r),
    r.prototype.onContextChange = function() {
        var t = this.renderer.gl;
        this.shader = new s(this.renderer.shaderManager),
        this.indexBuffer = t.createBuffer(),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
        this.properties = [{
            attribute: this.shader.attributes.aVertexPosition,
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0
        }, {
            attribute: this.shader.attributes.aPositionCoord,
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0
        }, {
            attribute: this.shader.attributes.aRotation,
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0
        }, {
            attribute: this.shader.attributes.aTextureCoord,
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0
        }, {
            attribute: this.shader.attributes.aColor,
            size: 1,
            uploadFunction: this.uploadAlpha,
            offset: 0
        }]
    }
    ,
    r.prototype.start = function() {
        var t = this.renderer.gl;
        t.activeTexture(t.TEXTURE0),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var e = this.shader;
        this.renderer.shaderManager.setShader(e)
    }
    ,
    r.prototype.render = function(t) {
        var e = t.children
          , i = e.length
          , r = t._maxSize
          , n = t._batchSize;
        if (0 !== i) {
            i > r && (i = r),
            t._buffers || (t._buffers = this.generateBuffers(t)),
            this.renderer.blendModeManager.setBlendMode(t.blendMode);
            var o = this.renderer.gl
              , s = t.worldTransform.copy(this.tempMatrix);
            s.prepend(this.renderer.currentRenderTarget.projectionMatrix),
            o.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, !1, s.toArray(!0)),
            o.uniform1f(this.shader.uniforms.uAlpha._location, t.worldAlpha);
            var a = e[0]._texture.baseTexture;
            if (a._glTextures[o.id])
                o.bindTexture(o.TEXTURE_2D, a._glTextures[o.id]);
            else {
                if (!this.renderer.updateTexture(a))
                    return;
                t._properties[0] && t._properties[3] || (t._bufferToUpdate = 0)
            }
            for (var h = 0, u = 0; h < i; h += n,
            u += 1) {
                var l = i - h;
                l > n && (l = n);
                var c = t._buffers[u];
                c.uploadDynamic(e, h, l),
                t._bufferToUpdate === u && (c.uploadStatic(e, h, l),
                t._bufferToUpdate = u + 1),
                c.bind(this.shader),
                o.drawElements(o.TRIANGLES, 6 * l, o.UNSIGNED_SHORT, 0),
                this.renderer.drawCount++
            }
        }
    }
    ,
    r.prototype.generateBuffers = function(t) {
        var e, i = this.renderer.gl, r = [], n = t._maxSize, o = t._batchSize, s = t._properties;
        for (e = 0; e < n; e += o)
            r.push(new a(i,this.properties,s,o));
        return r
    }
    ,
    r.prototype.uploadVertices = function(t, e, i, r, n, o) {
        for (var s, a, h, u, l, c, p, d, f, v = 0; v < i; v++)
            s = t[e + v],
            a = s._texture,
            u = s.scale.x,
            l = s.scale.y,
            a.trim ? (h = a.trim,
            p = h.x - s.anchor.x * h.width,
            c = p + a.crop.width,
            f = h.y - s.anchor.y * h.height,
            d = f + a.crop.height) : (c = a._frame.width * (1 - s.anchor.x),
            p = a._frame.width * -s.anchor.x,
            d = a._frame.height * (1 - s.anchor.y),
            f = a._frame.height * -s.anchor.y),
            r[o] = p * u,
            r[o + 1] = f * l,
            r[o + n] = c * u,
            r[o + n + 1] = f * l,
            r[o + 2 * n] = c * u,
            r[o + 2 * n + 1] = d * l,
            r[o + 3 * n] = p * u,
            r[o + 3 * n + 1] = d * l,
            o += 4 * n
    }
    ,
    r.prototype.uploadPosition = function(t, e, i, r, n, o) {
        for (var s = 0; s < i; s++) {
            var a = t[e + s].position;
            r[o] = a.x,
            r[o + 1] = a.y,
            r[o + n] = a.x,
            r[o + n + 1] = a.y,
            r[o + 2 * n] = a.x,
            r[o + 2 * n + 1] = a.y,
            r[o + 3 * n] = a.x,
            r[o + 3 * n + 1] = a.y,
            o += 4 * n
        }
    }
    ,
    r.prototype.uploadRotation = function(t, e, i, r, n, o) {
        for (var s = 0; s < i; s++) {
            var a = t[e + s].rotation;
            r[o] = a,
            r[o + n] = a,
            r[o + 2 * n] = a,
            r[o + 3 * n] = a,
            o += 4 * n
        }
    }
    ,
    r.prototype.uploadUvs = function(t, e, i, r, n, o) {
        for (var s = 0; s < i; s++) {
            var a = t[e + s]._texture._uvs;
            a ? (r[o] = a.x0,
            r[o + 1] = a.y0,
            r[o + n] = a.x1,
            r[o + n + 1] = a.y1,
            r[o + 2 * n] = a.x2,
            r[o + 2 * n + 1] = a.y2,
            r[o + 3 * n] = a.x3,
            r[o + 3 * n + 1] = a.y3,
            o += 4 * n) : (r[o] = 0,
            r[o + 1] = 0,
            r[o + n] = 0,
            r[o + n + 1] = 0,
            r[o + 2 * n] = 0,
            r[o + 2 * n + 1] = 0,
            r[o + 3 * n] = 0,
            r[o + 3 * n + 1] = 0,
            o += 4 * n)
        }
    }
    ,
    r.prototype.uploadAlpha = function(t, e, i, r, n, o) {
        for (var s = 0; s < i; s++) {
            var a = t[e + s].alpha;
            r[o] = a,
            r[o + n] = a,
            r[o + 2 * n] = a,
            r[o + 3 * n] = a,
            o += 4 * n
        }
    }
    ,
    r.prototype.destroy = function() {
        this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer),
        n.prototype.destroy.apply(this, arguments),
        this.shader.destroy(),
        this.indices = null,
        this.tempMatrix = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"), {
            uAlpha: {
                type: "1f",
                value: 1
            }
        }, {
            aPositionCoord: 0,
            aRotation: 0
        })
    }
    var n = i(24);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r) {
        this.gl = t,
        this.vertSize = 2,
        this.vertByteSize = 4 * this.vertSize,
        this.size = r,
        this.dynamicProperties = [],
        this.staticProperties = [];
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            i[n] ? this.dynamicProperties.push(o) : this.staticProperties.push(o)
        }
        this.staticStride = 0,
        this.staticBuffer = null,
        this.staticData = null,
        this.dynamicStride = 0,
        this.dynamicBuffer = null,
        this.dynamicData = null,
        this.initBuffers()
    }
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.initBuffers = function() {
        var t, e, i = this.gl, r = 0;
        for (this.dynamicStride = 0,
        t = 0; t < this.dynamicProperties.length; t++)
            e = this.dynamicProperties[t],
            e.offset = r,
            r += e.size,
            this.dynamicStride += e.size;
        this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4),
        this.dynamicBuffer = i.createBuffer(),
        i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer),
        i.bufferData(i.ARRAY_BUFFER, this.dynamicData, i.DYNAMIC_DRAW);
        var n = 0;
        for (this.staticStride = 0,
        t = 0; t < this.staticProperties.length; t++)
            e = this.staticProperties[t],
            e.offset = n,
            n += e.size,
            this.staticStride += e.size;
        this.staticData = new Float32Array(this.size * this.staticStride * 4),
        this.staticBuffer = i.createBuffer(),
        i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer),
        i.bufferData(i.ARRAY_BUFFER, this.staticData, i.DYNAMIC_DRAW)
    }
    ,
    r.prototype.uploadDynamic = function(t, e, i) {
        for (var r = this.gl, n = 0; n < this.dynamicProperties.length; n++) {
            var o = this.dynamicProperties[n];
            o.uploadFunction(t, e, i, this.dynamicData, this.dynamicStride, o.offset)
        }
        r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer),
        r.bufferSubData(r.ARRAY_BUFFER, 0, this.dynamicData)
    }
    ,
    r.prototype.uploadStatic = function(t, e, i) {
        for (var r = this.gl, n = 0; n < this.staticProperties.length; n++) {
            var o = this.staticProperties[n];
            o.uploadFunction(t, e, i, this.staticData, this.staticStride, o.offset)
        }
        r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer),
        r.bufferSubData(r.ARRAY_BUFFER, 0, this.staticData)
    }
    ,
    r.prototype.bind = function() {
        var t, e, i = this.gl;
        for (i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer),
        t = 0; t < this.dynamicProperties.length; t++)
            e = this.dynamicProperties[t],
            i.vertexAttribPointer(e.attribute, e.size, i.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
        for (i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer),
        t = 0; t < this.staticProperties.length; t++)
            e = this.staticProperties[t],
            i.vertexAttribPointer(e.attribute, e.size, i.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
    }
    ,
    r.prototype.destroy = function() {
        this.dynamicProperties = null,
        this.dynamicData = null,
        this.gl.deleteBuffer(this.dynamicBuffer),
        this.staticProperties = null,
        this.staticData = null,
        this.gl.deleteBuffer(this.staticBuffer)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        this.canvas = document.createElement("canvas"),
        this.context = this.canvas.getContext("2d"),
        this.resolution = i || h.RESOLUTION,
        this._text = null,
        this._style = null;
        var r = o.fromCanvas(this.canvas);
        r.trim = new s.Rectangle,
        n.call(this, r),
        this.text = t,
        this.style = e
    }
    var n = i(52)
      , o = i(14)
      , s = i(3)
      , a = i(4)
      , h = i(1);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.fontPropertiesCache = {},
    r.fontPropertiesCanvas = document.createElement("canvas"),
    r.fontPropertiesContext = r.fontPropertiesCanvas.getContext("2d"),
    Object.defineProperties(r.prototype, {
        width: {
            get: function() {
                return this.dirty && this.updateText(),
                this.scale.x * this._texture._frame.width
            },
            set: function(t) {
                this.scale.x = t / this._texture._frame.width,
                this._width = t
            }
        },
        height: {
            get: function() {
                return this.dirty && this.updateText(),
                this.scale.y * this._texture._frame.height
            },
            set: function(t) {
                this.scale.y = t / this._texture._frame.height,
                this._height = t
            }
        },
        style: {
            get: function() {
                return this._style
            },
            set: function(t) {
                "number" == typeof (t = t || {}).fill && (t.fill = a.hex2string(t.fill)),
                "number" == typeof t.stroke && (t.stroke = a.hex2string(t.stroke)),
                "number" == typeof t.dropShadowColor && (t.dropShadowColor = a.hex2string(t.dropShadowColor)),
                t.font = t.font || "bold 20pt Arial",
                t.fill = t.fill || "black",
                t.align = t.align || "left",
                t.stroke = t.stroke || "black",
                t.strokeThickness = t.strokeThickness || 0,
                t.wordWrap = t.wordWrap || !1,
                t.wordWrapWidth = t.wordWrapWidth || 100,
                t.breakWords = t.breakWords || !1,
                t.letterSpacing = t.letterSpacing || 0,
                t.dropShadow = t.dropShadow || !1,
                t.dropShadowColor = t.dropShadowColor || "#000000",
                t.dropShadowAngle = void 0 !== t.dropShadowAngle ? t.dropShadowAngle : Math.PI / 6,
                t.dropShadowDistance = void 0 !== t.dropShadowDistance ? t.dropShadowDistance : 5,
                t.dropShadowBlur = void 0 !== t.dropShadowBlur ? t.dropShadowBlur : 0,
                t.padding = t.padding || 0,
                t.textBaseline = t.textBaseline || "alphabetic",
                t.lineJoin = t.lineJoin || "miter",
                t.miterLimit = t.miterLimit || 10,
                this._style = t,
                this.dirty = !0
            }
        },
        text: {
            get: function() {
                return this._text
            },
            set: function(t) {
                t = t.toString() || " ",
                this._text !== t && (this._text = t,
                this.dirty = !0)
            }
        }
    }),
    r.prototype.updateText = function() {
        var t = this._style;
        this.context.font = t.font;
        for (var e = (t.wordWrap ? this.wordWrap(this._text) : this._text).split(/(?:\r\n|\r|\n)/), i = new Array(e.length), r = 0, n = this.determineFontProperties(t.font), o = 0; o < e.length; o++) {
            var s = this.context.measureText(e[o]).width + (e[o].length - 1) * t.letterSpacing;
            i[o] = s,
            r = Math.max(r, s)
        }
        var a = r + t.strokeThickness;
        t.dropShadow && (a += t.dropShadowDistance),
        this.canvas.width = Math.ceil((a + this.context.lineWidth) * this.resolution);
        var h = this.style.lineHeight || n.fontSize + t.strokeThickness
          , u = h * e.length;
        t.dropShadow && (u += t.dropShadowDistance),
        this.canvas.height = Math.ceil((u + 2 * this._style.padding) * this.resolution),
        this.context.scale(this.resolution, this.resolution),
        navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
        this.context.font = t.font,
        this.context.strokeStyle = t.stroke,
        this.context.lineWidth = t.strokeThickness,
        this.context.textBaseline = t.textBaseline,
        this.context.lineJoin = t.lineJoin,
        this.context.miterLimit = t.miterLimit;
        var l, c;
        if (t.dropShadow) {
            t.dropShadowBlur > 0 ? (this.context.shadowColor = t.dropShadowColor,
            this.context.shadowBlur = t.dropShadowBlur) : this.context.fillStyle = t.dropShadowColor;
            var p = Math.cos(t.dropShadowAngle) * t.dropShadowDistance
              , d = Math.sin(t.dropShadowAngle) * t.dropShadowDistance;
            for (o = 0; o < e.length; o++)
                l = t.strokeThickness / 2,
                c = t.strokeThickness / 2 + o * h + n.ascent,
                "right" === t.align ? l += r - i[o] : "center" === t.align && (l += (r - i[o]) / 2),
                t.fill && this.drawLetterSpacing(e[o], l + p, c + d + t.padding)
        }
        for (this.context.fillStyle = t.fill,
        o = 0; o < e.length; o++)
            l = t.strokeThickness / 2,
            c = t.strokeThickness / 2 + o * h + n.ascent,
            "right" === t.align ? l += r - i[o] : "center" === t.align && (l += (r - i[o]) / 2),
            t.stroke && t.strokeThickness && this.drawLetterSpacing(e[o], l, c + t.padding, !0),
            t.fill && this.drawLetterSpacing(e[o], l, c + t.padding);
        this.updateTexture()
    }
    ,
    r.prototype.drawLetterSpacing = function(t, e, i, r) {
        var n = this._style.letterSpacing;
        if (0 !== n)
            for (var o, s = String.prototype.split.call(t, ""), a = 0, h = e; a < t.length; )
                o = s[a++],
                r ? this.context.strokeText(o, h, i) : this.context.fillText(o, h, i),
                h += this.context.measureText(o).width + n;
        else
            r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i)
    }
    ,
    r.prototype.updateTexture = function() {
        var t = this._texture
          , e = this._style;
        t.baseTexture.hasLoaded = !0,
        t.baseTexture.resolution = this.resolution,
        t.baseTexture.width = this.canvas.width / this.resolution,
        t.baseTexture.height = this.canvas.height / this.resolution,
        t.crop.width = t._frame.width = this.canvas.width / this.resolution,
        t.crop.height = t._frame.height = this.canvas.height / this.resolution,
        t.trim.x = 0,
        t.trim.y = -e.padding,
        t.trim.width = t._frame.width,
        t.trim.height = t._frame.height - 2 * e.padding,
        this._width = this.canvas.width / this.resolution,
        this._height = this.canvas.height / this.resolution,
        t.baseTexture.emit("update", t.baseTexture),
        this.dirty = !1
    }
    ,
    r.prototype.renderWebGL = function(t) {
        this.dirty && this.updateText(),
        n.prototype.renderWebGL.call(this, t)
    }
    ,
    r.prototype._renderCanvas = function(t) {
        this.dirty && this.updateText(),
        n.prototype._renderCanvas.call(this, t)
    }
    ,
    r.prototype.determineFontProperties = function(t) {
        var e = r.fontPropertiesCache[t];
        if (!e) {
            e = {};
            var i = r.fontPropertiesCanvas
              , n = r.fontPropertiesContext;
            n.font = t;
            var o = Math.ceil(n.measureText("|MÉq").width)
              , s = Math.ceil(n.measureText("M").width)
              , a = 2 * s;
            s = 1.4 * s | 0,
            i.width = o,
            i.height = a,
            n.fillStyle = "#f00",
            n.fillRect(0, 0, o, a),
            n.font = t,
            n.textBaseline = "alphabetic",
            n.fillStyle = "#000",
            n.fillText("|MÉq", 0, s);
            var h, u, l = n.getImageData(0, 0, o, a).data, c = l.length, p = 4 * o, d = 0, f = !1;
            for (h = 0; h < s; h++) {
                for (u = 0; u < p; u += 4)
                    if (255 !== l[d + u]) {
                        f = !0;
                        break
                    }
                if (f)
                    break;
                d += p
            }
            for (e.ascent = s - h,
            d = c - p,
            f = !1,
            h = a; h > s; h--) {
                for (u = 0; u < p; u += 4)
                    if (255 !== l[d + u]) {
                        f = !0;
                        break
                    }
                if (f)
                    break;
                d -= p
            }
            e.descent = h - s,
            e.fontSize = e.ascent + e.descent,
            r.fontPropertiesCache[t] = e
        }
        return e
    }
    ,
    r.prototype.wordWrap = function(t) {
        for (var e = "", i = t.split("\n"), r = this._style.wordWrapWidth, n = 0; n < i.length; n++) {
            for (var o = r, s = i[n].split(" "), a = 0; a < s.length; a++) {
                var h = this.context.measureText(s[a]).width;
                if (this._style.breakWords && h > r)
                    for (var u = s[a].split(""), l = 0; l < u.length; l++) {
                        var c = this.context.measureText(u[l]).width;
                        c > o ? (e += "\n" + u[l],
                        o = r - c) : (0 === l && (e += " "),
                        e += u[l],
                        o -= c)
                    }
                else {
                    var p = h + this.context.measureText(" ").width;
                    0 === a || p > o ? (a > 0 && (e += "\n"),
                    e += s[a],
                    o = r - h) : (o -= p,
                    e += " " + s[a])
                }
            }
            n < i.length - 1 && (e += "\n")
        }
        return e
    }
    ,
    r.prototype.getBounds = function(t) {
        return this.dirty && this.updateText(),
        n.prototype.getBounds.call(this, t)
    }
    ,
    r.prototype.destroy = function(t) {
        this.context = null,
        this.canvas = null,
        this._style = null,
        this._texture.destroy(void 0 === t || t)
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this),
        this.fillAlpha = 1,
        this.lineWidth = 0,
        this.lineColor = 0,
        this.graphicsData = [],
        this.tint = 16777215,
        this._prevTint = 16777215,
        this.blendMode = l.BLEND_MODES.NORMAL,
        this.currentPath = null,
        this._webGL = {},
        this.isMask = !1,
        this.boundsPadding = 0,
        this._localBounds = new u.Rectangle(0,0,1,1),
        this.dirty = !0,
        this.glDirty = !1,
        this.boundsDirty = !0,
        this.cachedSpriteDirty = !1
    }
    var n = i(22)
      , o = i(14)
      , s = i(34)
      , a = i(36)
      , h = i(60)
      , u = i(3)
      , l = i(1)
      , c = new u.Point;
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.clone = function() {
        var t = new r;
        t.renderable = this.renderable,
        t.fillAlpha = this.fillAlpha,
        t.lineWidth = this.lineWidth,
        t.lineColor = this.lineColor,
        t.tint = this.tint,
        t.blendMode = this.blendMode,
        t.isMask = this.isMask,
        t.boundsPadding = this.boundsPadding,
        t.dirty = !0,
        t.glDirty = !0,
        t.cachedSpriteDirty = this.cachedSpriteDirty;
        for (var e = 0; e < this.graphicsData.length; ++e)
            t.graphicsData.push(this.graphicsData[e].clone());
        return t.currentPath = t.graphicsData[t.graphicsData.length - 1],
        t.updateLocalBounds(),
        t
    }
    ,
    r.prototype.lineStyle = function(t, e, i) {
        if (this.lineWidth = t || 0,
        this.lineColor = e || 0,
        this.lineAlpha = void 0 === i ? 1 : i,
        this.currentPath)
            if (this.currentPath.shape.points.length) {
                var r = new u.Polygon(this.currentPath.shape.points.slice(-2));
                r.closed = !1,
                this.drawShape(r)
            } else
                this.currentPath.lineWidth = this.lineWidth,
                this.currentPath.lineColor = this.lineColor,
                this.currentPath.lineAlpha = this.lineAlpha;
        return this
    }
    ,
    r.prototype.moveTo = function(t, e) {
        var i = new u.Polygon([t, e]);
        return i.closed = !1,
        this.drawShape(i),
        this
    }
    ,
    r.prototype.lineTo = function(t, e) {
        return this.currentPath.shape.points.push(t, e),
        this.dirty = !0,
        this
    }
    ,
    r.prototype.quadraticCurveTo = function(t, e, i, r) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        var n, o, s = this.currentPath.shape.points;
        0 === s.length && this.moveTo(0, 0);
        for (var a = s[s.length - 2], h = s[s.length - 1], u = 0, l = 1; l <= 20; ++l)
            u = l / 20,
            n = a + (t - a) * u,
            o = h + (e - h) * u,
            s.push(n + (t + (i - t) * u - n) * u, o + (e + (r - e) * u - o) * u);
        return this.dirty = this.boundsDirty = !0,
        this
    }
    ,
    r.prototype.bezierCurveTo = function(t, e, i, r, n, o) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        for (var s, a, h, u, l, c = this.currentPath.shape.points, p = c[c.length - 2], d = c[c.length - 1], f = 0, v = 1; v <= 20; ++v)
            f = v / 20,
            s = 1 - f,
            a = s * s,
            h = a * s,
            u = f * f,
            l = u * f,
            c.push(h * p + 3 * a * f * t + 3 * s * u * i + l * n, h * d + 3 * a * f * e + 3 * s * u * r + l * o);
        return this.dirty = this.boundsDirty = !0,
        this
    }
    ,
    r.prototype.arcTo = function(t, e, i, r, n) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
        var o = this.currentPath.shape.points
          , s = o[o.length - 2]
          , a = o[o.length - 1] - e
          , h = s - t
          , u = r - e
          , l = i - t
          , c = Math.abs(a * l - h * u);
        if (c < 1e-8 || 0 === n)
            o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e);
        else {
            var p = a * a + h * h
              , d = u * u + l * l
              , f = a * u + h * l
              , v = n * Math.sqrt(p) / c
              , y = n * Math.sqrt(d) / c
              , g = v * f / p
              , m = y * f / d
              , x = v * l + y * h
              , _ = v * u + y * a
              , b = h * (y + g)
              , T = a * (y + g)
              , w = l * (v + m)
              , E = u * (v + m)
              , S = Math.atan2(T - _, b - x)
              , A = Math.atan2(E - _, w - x);
            this.arc(x + t, _ + e, n, S, A, h * u > l * a)
        }
        return this.dirty = this.boundsDirty = !0,
        this
    }
    ,
    r.prototype.arc = function(t, e, i, r, n, o) {
        if (o = o || !1,
        r === n)
            return this;
        !o && n <= r ? n += 2 * Math.PI : o && r <= n && (r += 2 * Math.PI);
        var s = o ? -1 * (r - n) : n - r
          , a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
        if (0 === s)
            return this;
        var h = t + Math.cos(r) * i
          , u = e + Math.sin(r) * i;
        this.currentPath ? this.currentPath.shape.points.push(h, u) : this.moveTo(h, u);
        for (var l = this.currentPath.shape.points, c = s / (2 * a), p = 2 * c, d = Math.cos(c), f = Math.sin(c), v = a - 1, y = v % 1 / v, g = 0; g <= v; g++) {
            var m = c + r + p * (g + y * g)
              , x = Math.cos(m)
              , _ = -Math.sin(m);
            l.push((d * x + f * _) * i + t, (d * -_ + f * x) * i + e)
        }
        return this.dirty = this.boundsDirty = !0,
        this
    }
    ,
    r.prototype.beginFill = function(t, e) {
        return this.filling = !0,
        this.fillColor = t || 0,
        this.fillAlpha = void 0 === e ? 1 : e,
        this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling,
        this.currentPath.fillColor = this.fillColor,
        this.currentPath.fillAlpha = this.fillAlpha),
        this
    }
    ,
    r.prototype.endFill = function() {
        return this.filling = !1,
        this.fillColor = null,
        this.fillAlpha = 1,
        this
    }
    ,
    r.prototype.drawRect = function(t, e, i, r) {
        return this.drawShape(new u.Rectangle(t,e,i,r)),
        this
    }
    ,
    r.prototype.drawRoundedRect = function(t, e, i, r, n) {
        return this.drawShape(new u.RoundedRectangle(t,e,i,r,n)),
        this
    }
    ,
    r.prototype.drawCircle = function(t, e, i) {
        return this.drawShape(new u.Circle(t,e,i)),
        this
    }
    ,
    r.prototype.drawEllipse = function(t, e, i, r) {
        return this.drawShape(new u.Ellipse(t,e,i,r)),
        this
    }
    ,
    r.prototype.drawPolygon = function(t) {
        var e = t
          , i = !0;
        if (e instanceof u.Polygon && (i = e.closed,
        e = e.points),
        !Array.isArray(e)) {
            e = new Array(arguments.length);
            for (var r = 0; r < e.length; ++r)
                e[r] = arguments[r]
        }
        var n = new u.Polygon(e);
        return n.closed = i,
        this.drawShape(n),
        this
    }
    ,
    r.prototype.clear = function() {
        return this.lineWidth = 0,
        this.filling = !1,
        this.dirty = !0,
        this.clearDirty = !0,
        this.graphicsData = [],
        this
    }
    ,
    r.prototype.generateTexture = function(t, e, i) {
        e = e || 1;
        var r = this.getLocalBounds()
          , n = new s(r.width * e,r.height * e)
          , h = o.fromCanvas(n.canvas, i);
        return h.baseTexture.resolution = e,
        n.context.scale(e, e),
        n.context.translate(-r.x, -r.y),
        a.renderGraphics(this, n.context),
        h
    }
    ,
    r.prototype._renderWebGL = function(t) {
        this.glDirty && (this.dirty = !0,
        this.glDirty = !1),
        t.setObjectRenderer(t.plugins.graphics),
        t.plugins.graphics.render(this)
    }
    ,
    r.prototype._renderCanvas = function(t) {
        if (!0 !== this.isMask) {
            this._prevTint !== this.tint && (this.dirty = !0);
            var e = t.context
              , i = this.worldTransform
              , r = t.blendModes[this.blendMode];
            r !== e.globalCompositeOperation && (e.globalCompositeOperation = r);
            var n = t.resolution;
            e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n),
            a.renderGraphics(this, e)
        }
    }
    ,
    r.prototype.getBounds = function(t) {
        if (!this._currentBounds) {
            if (!this.renderable)
                return u.Rectangle.EMPTY;
            this.boundsDirty && (this.updateLocalBounds(),
            this.glDirty = !0,
            this.cachedSpriteDirty = !0,
            this.boundsDirty = !1);
            var e = this._localBounds
              , i = e.x
              , r = e.width + e.x
              , n = e.y
              , o = e.height + e.y
              , s = t || this.worldTransform
              , a = s.a
              , h = s.b
              , l = s.c
              , c = s.d
              , p = s.tx
              , d = s.ty
              , f = a * r + l * o + p
              , v = c * o + h * r + d
              , y = a * i + l * o + p
              , g = c * o + h * i + d
              , m = a * i + l * n + p
              , x = c * n + h * i + d
              , _ = a * r + l * n + p
              , b = c * n + h * r + d
              , T = f
              , w = v
              , E = f
              , S = v;
            E = _ < (E = m < (E = y < E ? y : E) ? m : E) ? _ : E,
            S = b < (S = x < (S = g < S ? g : S) ? x : S) ? b : S,
            T = _ > (T = m > (T = y > T ? y : T) ? m : T) ? _ : T,
            w = b > (w = x > (w = g > w ? g : w) ? x : w) ? b : w,
            this._bounds.x = E,
            this._bounds.width = T - E,
            this._bounds.y = S,
            this._bounds.height = w - S,
            this._currentBounds = this._bounds
        }
        return this._currentBounds
    }
    ,
    r.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, c);
        for (var e = this.graphicsData, i = 0; i < e.length; i++) {
            var r = e[i];
            if (r.fill && r.shape && r.shape.contains(c.x, c.y))
                return !0
        }
        return !1
    }
    ,
    r.prototype.updateLocalBounds = function() {
        var t = 1 / 0
          , e = -1 / 0
          , i = 1 / 0
          , r = -1 / 0;
        if (this.graphicsData.length)
            for (var n, o, s, a, h, u, c = 0; c < this.graphicsData.length; c++) {
                var p = this.graphicsData[c]
                  , d = p.type
                  , f = p.lineWidth;
                if (n = p.shape,
                d === l.SHAPES.RECT || d === l.SHAPES.RREC)
                    s = n.x - f / 2,
                    a = n.y - f / 2,
                    h = n.width + f,
                    u = n.height + f,
                    t = s < t ? s : t,
                    e = s + h > e ? s + h : e,
                    i = a < i ? a : i,
                    r = a + u > r ? a + u : r;
                else if (d === l.SHAPES.CIRC)
                    s = n.x,
                    a = n.y,
                    h = n.radius + f / 2,
                    u = n.radius + f / 2,
                    t = s - h < t ? s - h : t,
                    e = s + h > e ? s + h : e,
                    i = a - u < i ? a - u : i,
                    r = a + u > r ? a + u : r;
                else if (d === l.SHAPES.ELIP)
                    s = n.x,
                    a = n.y,
                    h = n.width + f / 2,
                    u = n.height + f / 2,
                    t = s - h < t ? s - h : t,
                    e = s + h > e ? s + h : e,
                    i = a - u < i ? a - u : i,
                    r = a + u > r ? a + u : r;
                else {
                    o = n.points;
                    for (var v = 0; v < o.length; v += 2)
                        s = o[v],
                        a = o[v + 1],
                        t = s - f < t ? s - f : t,
                        e = s + f > e ? s + f : e,
                        i = a - f < i ? a - f : i,
                        r = a + f > r ? a + f : r
                }
            }
        else
            t = 0,
            e = 0,
            i = 0,
            r = 0;
        var y = this.boundsPadding;
        this._localBounds.x = t - y,
        this._localBounds.width = e - t + 2 * y,
        this._localBounds.y = i - y,
        this._localBounds.height = r - i + 2 * y
    }
    ,
    r.prototype.drawShape = function(t) {
        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(),
        this.currentPath = null;
        var e = new h(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,t);
        return this.graphicsData.push(e),
        e.type === l.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling,
        this.currentPath = e),
        this.dirty = this.boundsDirty = !0,
        e
    }
    ,
    r.prototype.destroy = function() {
        n.prototype.destroy.apply(this, arguments);
        for (var t = 0; t < this.graphicsData.length; ++t)
            this.graphicsData[t].destroy();
        for (var e in this._webgl)
            for (var i = 0; i < this._webgl[e].data.length; ++i)
                this._webgl[e].data[i].destroy();
        this.graphicsData = null,
        this.currentPath = null,
        this._webgl = null,
        this._localBounds = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        a.call(this, t),
        this.graphicsDataPool = [],
        this.primitiveShader = null,
        this.complexPrimitiveShader = null,
        this.maximumSimplePolySize = 200
    }
    var n = i(4)
      , o = i(3)
      , s = i(1)
      , a = i(15)
      , h = i(23)
      , u = i(112)
      , l = i(113);
    (r.prototype = Object.create(a.prototype)).constructor = r,
    t.exports = r,
    h.registerPlugin("graphics", r),
    r.prototype.onContextChange = function() {}
    ,
    r.prototype.destroy = function() {
        a.prototype.destroy.call(this);
        for (var t = 0; t < this.graphicsDataPool.length; ++t)
            this.graphicsDataPool[t].destroy();
        this.graphicsDataPool = null
    }
    ,
    r.prototype.render = function(t) {
        var e, i = this.renderer, r = i.gl, o = i.shaderManager.plugins.primitiveShader;
        !t.dirty && t._webGL[r.id] || this.updateGraphics(t);
        var s = t._webGL[r.id];
        i.blendModeManager.setBlendMode(t.blendMode);
        for (var a = 0, h = s.data.length; a < h; a++)
            e = s.data[a],
            1 === s.data[a].mode ? (i.stencilManager.pushStencil(t, e),
            r.uniform1f(i.shaderManager.complexPrimitiveShader.uniforms.alpha._location, t.worldAlpha * e.alpha),
            r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
            i.stencilManager.popStencil(t, e)) : (o = i.shaderManager.primitiveShader,
            i.shaderManager.setShader(o),
            r.uniformMatrix3fv(o.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)),
            r.uniformMatrix3fv(o.uniforms.projectionMatrix._location, !1, i.currentRenderTarget.projectionMatrix.toArray(!0)),
            r.uniform3fv(o.uniforms.tint._location, n.hex2rgb(t.tint)),
            r.uniform1f(o.uniforms.alpha._location, t.worldAlpha),
            r.bindBuffer(r.ARRAY_BUFFER, e.buffer),
            r.vertexAttribPointer(o.attributes.aVertexPosition, 2, r.FLOAT, !1, 24, 0),
            r.vertexAttribPointer(o.attributes.aColor, 4, r.FLOAT, !1, 24, 8),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer),
            r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0)),
            i.drawCount++
    }
    ,
    r.prototype.updateGraphics = function(t) {
        var e = this.renderer.gl
          , i = t._webGL[e.id];
        i || (i = t._webGL[e.id] = {
            lastIndex: 0,
            data: [],
            gl: e
        }),
        t.dirty = !1;
        var r;
        if (t.clearDirty) {
            for (t.clearDirty = !1,
            r = 0; r < i.data.length; r++) {
                var n = i.data[r];
                n.reset(),
                this.graphicsDataPool.push(n)
            }
            i.data = [],
            i.lastIndex = 0
        }
        var o;
        for (r = i.lastIndex; r < t.graphicsData.length; r++) {
            var a = t.graphicsData[r];
            a.type === s.SHAPES.POLY ? (a.points = a.shape.points.slice(),
            a.shape.closed && (a.points[0] === a.points[a.points.length - 2] && a.points[1] === a.points[a.points.length - 1] || a.points.push(a.points[0], a.points[1])),
            a.fill && a.points.length >= 6 && (a.points.length < 2 * this.maximumSimplePolySize ? (o = this.switchMode(i, 0),
            this.buildPoly(a, o) || (o = this.switchMode(i, 1),
            this.buildComplexPoly(a, o))) : (o = this.switchMode(i, 1),
            this.buildComplexPoly(a, o))),
            a.lineWidth > 0 && (o = this.switchMode(i, 0),
            this.buildLine(a, o))) : (o = this.switchMode(i, 0),
            a.type === s.SHAPES.RECT ? this.buildRectangle(a, o) : a.type === s.SHAPES.CIRC || a.type === s.SHAPES.ELIP ? this.buildCircle(a, o) : a.type === s.SHAPES.RREC && this.buildRoundedRectangle(a, o)),
            i.lastIndex++
        }
        for (r = 0; r < i.data.length; r++)
            (o = i.data[r]).dirty && o.upload()
    }
    ,
    r.prototype.switchMode = function(t, e) {
        var i;
        return t.data.length ? ((i = t.data[t.data.length - 1]).points.length > 32e4 || i.mode !== e || 1 === e) && (i = this.graphicsDataPool.pop() || new u(t.gl),
        i.mode = e,
        t.data.push(i)) : (i = this.graphicsDataPool.pop() || new u(t.gl),
        i.mode = e,
        t.data.push(i)),
        i.dirty = !0,
        i
    }
    ,
    r.prototype.buildRectangle = function(t, e) {
        var i = t.shape
          , r = i.x
          , o = i.y
          , s = i.width
          , a = i.height;
        if (t.fill) {
            var h = n.hex2rgb(t.fillColor)
              , u = t.fillAlpha
              , l = h[0] * u
              , c = h[1] * u
              , p = h[2] * u
              , d = e.points
              , f = e.indices
              , v = d.length / 6;
            d.push(r, o),
            d.push(l, c, p, u),
            d.push(r + s, o),
            d.push(l, c, p, u),
            d.push(r, o + a),
            d.push(l, c, p, u),
            d.push(r + s, o + a),
            d.push(l, c, p, u),
            f.push(v, v, v + 1, v + 2, v + 3, v + 3)
        }
        if (t.lineWidth) {
            var y = t.points;
            t.points = [r, o, r + s, o, r + s, o + a, r, o + a, r, o],
            this.buildLine(t, e),
            t.points = y
        }
    }
    ,
    r.prototype.buildRoundedRectangle = function(t, e) {
        var i = t.shape
          , r = i.x
          , o = i.y
          , s = i.width
          , a = i.height
          , h = i.radius
          , u = [];
        if (u.push(r, o + h),
        this.quadraticBezierCurve(r, o + a - h, r, o + a, r + h, o + a, u),
        this.quadraticBezierCurve(r + s - h, o + a, r + s, o + a, r + s, o + a - h, u),
        this.quadraticBezierCurve(r + s, o + h, r + s, o, r + s - h, o, u),
        this.quadraticBezierCurve(r + h, o, r, o, r, o + h + 1e-10, u),
        t.fill) {
            var c = n.hex2rgb(t.fillColor)
              , p = t.fillAlpha
              , d = c[0] * p
              , f = c[1] * p
              , v = c[2] * p
              , y = e.points
              , g = e.indices
              , m = y.length / 6
              , x = l(u, null, 2)
              , _ = 0;
            for (_ = 0; _ < x.length; _ += 3)
                g.push(x[_] + m),
                g.push(x[_] + m),
                g.push(x[_ + 1] + m),
                g.push(x[_ + 2] + m),
                g.push(x[_ + 2] + m);
            for (_ = 0; _ < u.length; _++)
                y.push(u[_], u[++_], d, f, v, p)
        }
        if (t.lineWidth) {
            var b = t.points;
            t.points = u,
            this.buildLine(t, e),
            t.points = b
        }
    }
    ,
    r.prototype.quadraticBezierCurve = function(t, e, i, r, n, o, s) {
        function a(t, e, i) {
            return t + (e - t) * i
        }
        for (var h, u, l, c, p, d, f = s || [], v = 0, y = 0; y <= 20; y++)
            v = y / 20,
            h = a(t, i, v),
            u = a(e, r, v),
            l = a(i, n, v),
            c = a(r, o, v),
            p = a(h, l, v),
            d = a(u, c, v),
            f.push(p, d);
        return f
    }
    ,
    r.prototype.buildCircle = function(t, e) {
        var i, r, o = t.shape, a = o.x, h = o.y;
        t.type === s.SHAPES.CIRC ? (i = o.radius,
        r = o.radius) : (i = o.width,
        r = o.height);
        var u = Math.floor(30 * Math.sqrt(o.radius)) || Math.floor(15 * Math.sqrt(o.width + o.height))
          , l = 2 * Math.PI / u
          , c = 0;
        if (t.fill) {
            var p = n.hex2rgb(t.fillColor)
              , d = t.fillAlpha
              , f = p[0] * d
              , v = p[1] * d
              , y = p[2] * d
              , g = e.points
              , m = e.indices
              , x = g.length / 6;
            for (m.push(x),
            c = 0; c < u + 1; c++)
                g.push(a, h, f, v, y, d),
                g.push(a + Math.sin(l * c) * i, h + Math.cos(l * c) * r, f, v, y, d),
                m.push(x++, x++);
            m.push(x - 1)
        }
        if (t.lineWidth) {
            var _ = t.points;
            for (t.points = [],
            c = 0; c < u + 1; c++)
                t.points.push(a + Math.sin(l * c) * i, h + Math.cos(l * c) * r);
            this.buildLine(t, e),
            t.points = _
        }
    }
    ,
    r.prototype.buildLine = function(t, e) {
        var i = 0
          , r = t.points;
        if (0 !== r.length) {
            var s = new o.Point(r[0],r[1])
              , a = new o.Point(r[r.length - 2],r[r.length - 1]);
            if (s.x === a.x && s.y === a.y) {
                (r = r.slice()).pop(),
                r.pop();
                var h = (a = new o.Point(r[r.length - 2],r[r.length - 1])).x + .5 * (s.x - a.x)
                  , u = a.y + .5 * (s.y - a.y);
                r.unshift(h, u),
                r.push(h, u)
            }
            var l, c, p, d, f, v, y, g, m, x, _, b, T, w, E, S, A, C, M, R, O, P, D = e.points, F = e.indices, L = r.length / 2, B = r.length, I = D.length / 6, N = t.lineWidth / 2, k = n.hex2rgb(t.lineColor), U = t.lineAlpha, j = k[0] * U, G = k[1] * U, z = k[2] * U;
            for (p = r[0],
            d = r[1],
            f = r[2],
            m = -(d - (v = r[3])),
            x = p - f,
            m /= P = Math.sqrt(m * m + x * x),
            x /= P,
            m *= N,
            x *= N,
            D.push(p - m, d - x, j, G, z, U),
            D.push(p + m, d + x, j, G, z, U),
            i = 1; i < L - 1; i++)
                p = r[2 * (i - 1)],
                d = r[2 * (i - 1) + 1],
                f = r[2 * i],
                v = r[2 * i + 1],
                y = r[2 * (i + 1)],
                g = r[2 * (i + 1) + 1],
                m = -(d - v),
                x = p - f,
                P = Math.sqrt(m * m + x * x),
                m /= P,
                x /= P,
                m *= N,
                x *= N,
                _ = -(v - g),
                b = f - y,
                P = Math.sqrt(_ * _ + b * b),
                _ /= P,
                b /= P,
                _ *= N,
                b *= N,
                E = -x + d - (-x + v),
                S = -m + f - (-m + p),
                A = (-m + p) * (-x + v) - (-m + f) * (-x + d),
                C = -b + g - (-b + v),
                M = -_ + f - (-_ + y),
                R = (-_ + y) * (-b + v) - (-_ + f) * (-b + g),
                O = E * M - C * S,
                Math.abs(O) < .1 ? (O += 10.1,
                D.push(f - m, v - x, j, G, z, U),
                D.push(f + m, v + x, j, G, z, U)) : (l = (S * R - M * A) / O,
                c = (C * A - E * R) / O,
                (l - f) * (l - f) + (c - v) * (c - v) > 19600 ? (T = m - _,
                w = x - b,
                P = Math.sqrt(T * T + w * w),
                T /= P,
                w /= P,
                T *= N,
                w *= N,
                D.push(f - T, v - w),
                D.push(j, G, z, U),
                D.push(f + T, v + w),
                D.push(j, G, z, U),
                D.push(f - T, v - w),
                D.push(j, G, z, U),
                B++) : (D.push(l, c),
                D.push(j, G, z, U),
                D.push(f - (l - f), v - (c - v)),
                D.push(j, G, z, U)));
            for (p = r[2 * (L - 2)],
            d = r[2 * (L - 2) + 1],
            f = r[2 * (L - 1)],
            m = -(d - (v = r[2 * (L - 1) + 1])),
            x = p - f,
            m /= P = Math.sqrt(m * m + x * x),
            x /= P,
            m *= N,
            x *= N,
            D.push(f - m, v - x),
            D.push(j, G, z, U),
            D.push(f + m, v + x),
            D.push(j, G, z, U),
            F.push(I),
            i = 0; i < B; i++)
                F.push(I++);
            F.push(I - 1)
        }
    }
    ,
    r.prototype.buildComplexPoly = function(t, e) {
        var i = t.points.slice();
        if (!(i.length < 6)) {
            var r = e.indices;
            e.points = i,
            e.alpha = t.fillAlpha,
            e.color = n.hex2rgb(t.fillColor);
            for (var o, s, a = 1 / 0, h = -1 / 0, u = 1 / 0, l = -1 / 0, c = 0; c < i.length; c += 2)
                o = i[c],
                s = i[c + 1],
                a = o < a ? o : a,
                h = o > h ? o : h,
                u = s < u ? s : u,
                l = s > l ? s : l;
            i.push(a, u, h, u, h, l, a, l);
            var p = i.length / 2;
            for (c = 0; c < p; c++)
                r.push(c)
        }
    }
    ,
    r.prototype.buildPoly = function(t, e) {
        var i = t.points;
        if (!(i.length < 6)) {
            var r = e.points
              , o = e.indices
              , s = i.length / 2
              , a = n.hex2rgb(t.fillColor)
              , h = t.fillAlpha
              , u = a[0] * h
              , c = a[1] * h
              , p = a[2] * h
              , d = l(i, null, 2);
            if (!d)
                return !1;
            var f = r.length / 6
              , v = 0;
            for (v = 0; v < d.length; v += 3)
                o.push(d[v] + f),
                o.push(d[v] + f),
                o.push(d[v + 1] + f),
                o.push(d[v + 2] + f),
                o.push(d[v + 2] + f);
            for (v = 0; v < s; v++)
                r.push(i[2 * v], i[2 * v + 1], u, c, p, h);
            return !0
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        this.gl = t,
        this.color = [0, 0, 0],
        this.points = [],
        this.indices = [],
        this.buffer = t.createBuffer(),
        this.indexBuffer = t.createBuffer(),
        this.mode = 1,
        this.alpha = 1,
        this.dirty = !0,
        this.glPoints = null,
        this.glIndices = null
    }
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.reset = function() {
        this.points.length = 0,
        this.indices.length = 0
    }
    ,
    r.prototype.upload = function() {
        var t = this.gl;
        this.glPoints = new Float32Array(this.points),
        t.bindBuffer(t.ARRAY_BUFFER, this.buffer),
        t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW),
        this.glIndices = new Uint16Array(this.indices),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndices, t.STATIC_DRAW),
        this.dirty = !1
    }
    ,
    r.prototype.destroy = function() {
        this.color = null,
        this.points = null,
        this.indices = null,
        this.gl.deleteBuffer(this.buffer),
        this.gl.deleteBuffer(this.indexBuffer),
        this.gl = null,
        this.buffer = null,
        this.indexBuffer = null,
        this.glPoints = null,
        this.glIndices = null
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i, r, n) {
        var o, s, a, h = 0;
        for (o = e,
        s = i - r; o < i; o += r)
            h += (t[s] - t[o]) * (t[o + 1] + t[s + 1]),
            s = o;
        if (n === h > 0)
            for (o = e; o < i; o += r)
                a = C(o, t[o], t[o + 1], a);
        else
            for (o = i - r; o >= e; o -= r)
                a = C(o, t[o], t[o + 1], a);
        return a
    }
    function n(t, e) {
        if (!t)
            return t;
        e || (e = t);
        var i, r = t;
        do {
            if (i = !1,
            r.steiner || !b(r, r.next) && 0 !== _(r.prev, r, r.next))
                r = r.next;
            else {
                if (M(r),
                (r = e = r.prev) === r.next)
                    return null;
                i = !0
            }
        } while (i || r !== e);return e
    }
    function o(t, e, i, r, l, c, p) {
        if (t) {
            !p && c && f(t, r, l, c);
            for (var d, v, y = t; t.prev !== t.next; )
                if (d = t.prev,
                v = t.next,
                c ? a(t, r, l, c) : s(t))
                    e.push(d.i / i),
                    e.push(t.i / i),
                    e.push(v.i / i),
                    M(t),
                    t = v.next,
                    y = v.next;
                else if ((t = v) === y) {
                    p ? 1 === p ? (t = h(t, e, i),
                    o(t, e, i, r, l, c, 2)) : 2 === p && u(t, e, i, r, l, c) : o(n(t), e, i, r, l, c, 1);
                    break
                }
        }
    }
    function s(t) {
        var e = t.prev
          , i = t
          , r = t.next;
        if (_(e, i, r) >= 0)
            return !1;
        for (var n = t.next.next; n !== t.prev; ) {
            if (m(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && _(n.prev, n, n.next) >= 0)
                return !1;
            n = n.next
        }
        return !0
    }
    function a(t, e, i, r) {
        var n = t.prev
          , o = t
          , s = t.next;
        if (_(n, o, s) >= 0)
            return !1;
        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = y(a, h, e, i, r), p = y(u, l, e, i, r), d = t.nextZ; d && d.z <= p; ) {
            if (d !== t.prev && d !== t.next && m(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && _(d.prev, d, d.next) >= 0)
                return !1;
            d = d.nextZ
        }
        for (d = t.prevZ; d && d.z >= c; ) {
            if (d !== t.prev && d !== t.next && m(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && _(d.prev, d, d.next) >= 0)
                return !1;
            d = d.prevZ
        }
        return !0
    }
    function h(t, e, i) {
        var r = t;
        do {
            var n = r.prev
              , o = r.next.next;
            T(n, r, r.next, o) && E(n, o) && E(o, n) && (e.push(n.i / i),
            e.push(r.i / i),
            e.push(o.i / i),
            M(r),
            M(r.next),
            r = t = o),
            r = r.next
        } while (r !== t);return r
    }
    function u(t, e, i, r, s, a) {
        var h = t;
        do {
            for (var u = h.next.next; u !== h.prev; ) {
                if (h.i !== u.i && x(h, u)) {
                    var l = A(h, u);
                    return h = n(h, h.next),
                    l = n(l, l.next),
                    o(h, e, i, r, s, a),
                    void o(l, e, i, r, s, a)
                }
                u = u.next
            }
            h = h.next
        } while (h !== t)
    }
    function l(t, e, i, o) {
        var s, a, h, u, l, d = [];
        for (s = 0,
        a = e.length; s < a; s++)
            h = e[s] * o,
            u = s < a - 1 ? e[s + 1] * o : t.length,
            (l = r(t, h, u, o, !1)) === l.next && (l.steiner = !0),
            d.push(g(l));
        for (d.sort(c),
        s = 0; s < d.length; s++)
            p(d[s], i),
            i = n(i, i.next);
        return i
    }
    function c(t, e) {
        return t.x - e.x
    }
    function p(t, e) {
        if (e = d(t, e)) {
            var i = A(e, t);
            n(i, i.next)
        }
    }
    function d(t, e) {
        var i, r = e, n = t.x, o = t.y, s = -1 / 0;
        do {
            if (o <= r.y && o >= r.next.y) {
                var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                a <= n && a > s && (s = a,
                i = r.x < r.next.x ? r : r.next)
            }
            r = r.next
        } while (r !== e);if (!i)
            return null;
        if (t.x === i.x)
            return i.prev;
        var h, u = i, l = 1 / 0;
        for (r = i.next; r !== u; )
            n >= r.x && r.x >= i.x && m(o < i.y ? n : s, o, i.x, i.y, o < i.y ? s : n, o, r.x, r.y) && ((h = Math.abs(o - r.y) / (n - r.x)) < l || h === l && r.x > i.x) && E(r, t) && (i = r,
            l = h),
            r = r.next;
        return i
    }
    function f(t, e, i, r) {
        var n = t;
        do {
            null === n.z && (n.z = y(n.x, n.y, e, i, r)),
            n.prevZ = n.prev,
            n.nextZ = n.next,
            n = n.next
        } while (n !== t);n.prevZ.nextZ = null,
        n.prevZ = null,
        v(n)
    }
    function v(t) {
        var e, i, r, n, o, s, a, h, u = 1;
        do {
            for (i = t,
            t = null,
            o = null,
            s = 0; i; ) {
                for (s++,
                r = i,
                a = 0,
                e = 0; e < u && (a++,
                r = r.nextZ); e++)
                    ;
                for (h = u; a > 0 || h > 0 && r; )
                    0 === a ? (n = r,
                    r = r.nextZ,
                    h--) : 0 !== h && r ? i.z <= r.z ? (n = i,
                    i = i.nextZ,
                    a--) : (n = r,
                    r = r.nextZ,
                    h--) : (n = i,
                    i = i.nextZ,
                    a--),
                    o ? o.nextZ = n : t = n,
                    n.prevZ = o,
                    o = n;
                i = r
            }
            o.nextZ = null,
            u *= 2
        } while (s > 1);return t
    }
    function y(t, e, i, r, n) {
        return t = 32767 * (t - i) / n,
        e = 32767 * (e - r) / n,
        t = 16711935 & (t | t << 8),
        t = 252645135 & (t | t << 4),
        t = 858993459 & (t | t << 2),
        t = 1431655765 & (t | t << 1),
        e = 16711935 & (e | e << 8),
        e = 252645135 & (e | e << 4),
        e = 858993459 & (e | e << 2),
        e = 1431655765 & (e | e << 1),
        t | e << 1
    }
    function g(t) {
        var e = t
          , i = t;
        do {
            e.x < i.x && (i = e),
            e = e.next
        } while (e !== t);return i
    }
    function m(t, e, i, r, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (r - a) - (i - s) * (e - a) >= 0 && (i - s) * (o - a) - (n - s) * (r - a) >= 0
    }
    function x(t, e) {
        return b(t, e) || t.next.i !== e.i && t.prev.i !== e.i && !w(t, e) && E(t, e) && E(e, t) && S(t, e)
    }
    function _(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }
    function b(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function T(t, e, i, r) {
        return _(t, e, i) > 0 != _(t, e, r) > 0 && _(i, r, t) > 0 != _(i, r, e) > 0
    }
    function w(t, e) {
        var i = t;
        do {
            if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && T(i, i.next, t, e))
                return !0;
            i = i.next
        } while (i !== t);return !1
    }
    function E(t, e) {
        return _(t.prev, t, t.next) < 0 ? _(t, e, t.next) >= 0 && _(t, t.prev, e) >= 0 : _(t, e, t.prev) < 0 || _(t, t.next, e) < 0
    }
    function S(t, e) {
        var i = t
          , r = !1
          , n = (t.x + e.x) / 2
          , o = (t.y + e.y) / 2;
        do {
            i.y > o != i.next.y > o && n < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (r = !r),
            i = i.next
        } while (i !== t);return r
    }
    function A(t, e) {
        var i = new R(t.i,t.x,t.y)
          , r = new R(e.i,e.x,e.y)
          , n = t.next
          , o = e.prev;
        return t.next = e,
        e.prev = t,
        i.next = n,
        n.prev = i,
        r.next = i,
        i.prev = r,
        o.next = r,
        r.prev = o,
        r
    }
    function C(t, e, i, r) {
        var n = new R(t,e,i);
        return r ? (n.next = r.next,
        n.prev = r,
        r.next.prev = n,
        r.next = n) : (n.prev = n,
        n.next = n),
        n
    }
    function M(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function R(t, e, i) {
        this.i = t,
        this.x = e,
        this.y = i,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
    }
    t.exports = function(t, e, i) {
        i = i || 2;
        var n = e && e.length
          , s = n ? e[0] * i : t.length
          , a = r(t, 0, s, i, !0)
          , h = [];
        if (!a)
            return h;
        var u, c, p, d, f, v, y;
        if (n && (a = l(t, e, a, i)),
        t.length > 80 * i) {
            u = p = t[0],
            c = d = t[1];
            for (var g = i; g < s; g += i)
                f = t[g],
                v = t[g + 1],
                f < u && (u = f),
                v < c && (c = v),
                f > p && (p = f),
                v > d && (d = v);
            y = Math.max(p - u, d - c)
        }
        return o(a, h, i, u, c, y),
        h
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        i = i || {},
        n.call(this, "Canvas", t, e, i),
        this.type = h.RENDERER_TYPE.CANVAS,
        this.context = this.view.getContext("2d", {
            alpha: this.transparent
        }),
        this.refresh = !0,
        this.maskManager = new o,
        this.smoothProperty = "imageSmoothingEnabled",
        this.context.imageSmoothingEnabled || (this.context.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.context.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.context.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.context.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")),
        this.initPlugins(),
        this._mapBlendModes(),
        this._tempDisplayObjectParent = {
            worldTransform: new a.Matrix,
            worldAlpha: 1
        },
        this.resize(t, e)
    }
    var n = i(54)
      , o = i(115)
      , s = i(4)
      , a = i(3)
      , h = i(1);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    s.pluginTarget.mixin(r),
    r.prototype.render = function(t) {
        this.emit("prerender");
        var e = t.parent;
        this._lastObjectRendered = t,
        t.parent = this._tempDisplayObjectParent,
        t.updateTransform(),
        t.parent = e,
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        this.context.globalAlpha = 1,
        this.context.globalCompositeOperation = this.blendModes[h.BLEND_MODES.NORMAL],
        navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black",
        this.context.clear()),
        this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = this._backgroundColorString,
        this.context.fillRect(0, 0, this.width, this.height))),
        this.renderDisplayObject(t, this.context),
        this.emit("postrender")
    }
    ,
    r.prototype.destroy = function(t) {
        this.destroyPlugins(),
        n.prototype.destroy.call(this, t),
        this.context = null,
        this.refresh = !0,
        this.maskManager.destroy(),
        this.maskManager = null,
        this.smoothProperty = null
    }
    ,
    r.prototype.renderDisplayObject = function(t, e) {
        var i = this.context;
        this.context = e,
        t.renderCanvas(this),
        this.context = i
    }
    ,
    r.prototype.resize = function(t, e) {
        n.prototype.resize.call(this, t, e),
        this.smoothProperty && (this.context[this.smoothProperty] = h.SCALE_MODES.DEFAULT === h.SCALE_MODES.LINEAR)
    }
    ,
    r.prototype._mapBlendModes = function() {
        this.blendModes || (this.blendModes = {},
        s.canUseNewCanvasBlendModes() ? (this.blendModes[h.BLEND_MODES.NORMAL] = "source-over",
        this.blendModes[h.BLEND_MODES.ADD] = "lighter",
        this.blendModes[h.BLEND_MODES.MULTIPLY] = "multiply",
        this.blendModes[h.BLEND_MODES.SCREEN] = "screen",
        this.blendModes[h.BLEND_MODES.OVERLAY] = "overlay",
        this.blendModes[h.BLEND_MODES.DARKEN] = "darken",
        this.blendModes[h.BLEND_MODES.LIGHTEN] = "lighten",
        this.blendModes[h.BLEND_MODES.COLOR_DODGE] = "color-dodge",
        this.blendModes[h.BLEND_MODES.COLOR_BURN] = "color-burn",
        this.blendModes[h.BLEND_MODES.HARD_LIGHT] = "hard-light",
        this.blendModes[h.BLEND_MODES.SOFT_LIGHT] = "soft-light",
        this.blendModes[h.BLEND_MODES.DIFFERENCE] = "difference",
        this.blendModes[h.BLEND_MODES.EXCLUSION] = "exclusion",
        this.blendModes[h.BLEND_MODES.HUE] = "hue",
        this.blendModes[h.BLEND_MODES.SATURATION] = "saturate",
        this.blendModes[h.BLEND_MODES.COLOR] = "color",
        this.blendModes[h.BLEND_MODES.LUMINOSITY] = "luminosity") : (this.blendModes[h.BLEND_MODES.NORMAL] = "source-over",
        this.blendModes[h.BLEND_MODES.ADD] = "lighter",
        this.blendModes[h.BLEND_MODES.MULTIPLY] = "source-over",
        this.blendModes[h.BLEND_MODES.SCREEN] = "source-over",
        this.blendModes[h.BLEND_MODES.OVERLAY] = "source-over",
        this.blendModes[h.BLEND_MODES.DARKEN] = "source-over",
        this.blendModes[h.BLEND_MODES.LIGHTEN] = "source-over",
        this.blendModes[h.BLEND_MODES.COLOR_DODGE] = "source-over",
        this.blendModes[h.BLEND_MODES.COLOR_BURN] = "source-over",
        this.blendModes[h.BLEND_MODES.HARD_LIGHT] = "source-over",
        this.blendModes[h.BLEND_MODES.SOFT_LIGHT] = "source-over",
        this.blendModes[h.BLEND_MODES.DIFFERENCE] = "source-over",
        this.blendModes[h.BLEND_MODES.EXCLUSION] = "source-over",
        this.blendModes[h.BLEND_MODES.HUE] = "source-over",
        this.blendModes[h.BLEND_MODES.SATURATION] = "source-over",
        this.blendModes[h.BLEND_MODES.COLOR] = "source-over",
        this.blendModes[h.BLEND_MODES.LUMINOSITY] = "source-over"))
    }
}
, function(t, e, i) {
    "use strict";
    function r() {}
    var n = i(36);
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.pushMask = function(t, e) {
        e.context.save();
        var i = t.alpha
          , r = t.worldTransform
          , o = e.resolution;
        e.context.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o),
        t.texture || (n.renderGraphicsMask(t, e.context),
        e.context.clip()),
        t.worldAlpha = i
    }
    ,
    r.prototype.popMask = function(t) {
        t.context.restore()
    }
    ,
    r.prototype.destroy = function() {}
}
, function(t, e, i) {
    "use strict";
    var r = i(0)
      , n = r.DisplayObject
      , o = new r.Matrix;
    n.prototype._cacheAsBitmap = !1,
    n.prototype._originalRenderWebGL = null,
    n.prototype._originalRenderCanvas = null,
    n.prototype._originalUpdateTransform = null,
    n.prototype._originalHitTest = null,
    n.prototype._originalDestroy = null,
    n.prototype._cachedSprite = null,
    Object.defineProperties(n.prototype, {
        cacheAsBitmap: {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(t) {
                this._cacheAsBitmap !== t && (this._cacheAsBitmap = t,
                t ? (this._originalRenderWebGL = this.renderWebGL,
                this._originalRenderCanvas = this.renderCanvas,
                this._originalUpdateTransform = this.updateTransform,
                this._originalGetBounds = this.getBounds,
                this._originalDestroy = this.destroy,
                this._originalContainsPoint = this.containsPoint,
                this.renderWebGL = this._renderCachedWebGL,
                this.renderCanvas = this._renderCachedCanvas,
                this.destroy = this._cacheAsBitmapDestroy) : (this._cachedSprite && this._destroyCachedDisplayObject(),
                this.renderWebGL = this._originalRenderWebGL,
                this.renderCanvas = this._originalRenderCanvas,
                this.getBounds = this._originalGetBounds,
                this.destroy = this._originalDestroy,
                this.updateTransform = this._originalUpdateTransform,
                this.containsPoint = this._originalContainsPoint))
            }
        }
    }),
    n.prototype._renderCachedWebGL = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t),
        this._cachedSprite.worldAlpha = this.worldAlpha,
        t.setObjectRenderer(t.plugins.sprite),
        t.plugins.sprite.render(this._cachedSprite))
    }
    ,
    n.prototype._initCachedDisplayObject = function(t) {
        if (!this._cachedSprite) {
            t.currentRenderer.flush();
            var e = this.getLocalBounds().clone();
            if (this._filters) {
                var i = this._filters[0].padding;
                e.x -= i,
                e.y -= i,
                e.width += 2 * i,
                e.height += 2 * i
            }
            var n = t.currentRenderTarget
              , s = t.filterManager.filterStack
              , a = new r.RenderTexture(t,0 | e.width,0 | e.height)
              , h = o;
            h.tx = -e.x,
            h.ty = -e.y,
            this.renderWebGL = this._originalRenderWebGL,
            a.render(this, h, !0, !0),
            t.setRenderTarget(n),
            t.filterManager.filterStack = s,
            this.renderWebGL = this._renderCachedWebGL,
            this.updateTransform = this.displayObjectUpdateTransform,
            this.getBounds = this._getCachedBounds,
            this._cachedSprite = new r.Sprite(a),
            this._cachedSprite.worldTransform = this.worldTransform,
            this._cachedSprite.anchor.x = -e.x / e.width,
            this._cachedSprite.anchor.y = -e.y / e.height,
            this.updateTransform(),
            this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
        }
    }
    ,
    n.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t),
        this._cachedSprite.worldAlpha = this.worldAlpha,
        this._cachedSprite.renderCanvas(t))
    }
    ,
    n.prototype._initCachedDisplayObjectCanvas = function(t) {
        if (!this._cachedSprite) {
            var e = this.getLocalBounds()
              , i = t.context
              , n = new r.RenderTexture(t,0 | e.width,0 | e.height)
              , s = o;
            s.tx = -e.x,
            s.ty = -e.y,
            this.renderCanvas = this._originalRenderCanvas,
            n.render(this, s, !0),
            t.context = i,
            this.renderCanvas = this._renderCachedCanvas,
            this.updateTransform = this.displayObjectUpdateTransform,
            this.getBounds = this._getCachedBounds,
            this._cachedSprite = new r.Sprite(n),
            this._cachedSprite.worldTransform = this.worldTransform,
            this._cachedSprite.anchor.x = -e.x / e.width,
            this._cachedSprite.anchor.y = -e.y / e.height,
            this.updateTransform(),
            this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
        }
    }
    ,
    n.prototype._getCachedBounds = function() {
        return this._cachedSprite._currentBounds = null,
        this._cachedSprite.getBounds()
    }
    ,
    n.prototype._destroyCachedDisplayObject = function() {
        this._cachedSprite._texture.destroy(),
        this._cachedSprite = null
    }
    ,
    n.prototype._cacheAsBitmapDestroy = function() {
        this.cacheAsBitmap = !1,
        this._originalDestroy()
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(0);
    r.DisplayObject.prototype.name = null,
    r.Container.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++)
            if (this.children[e].name === t)
                return this.children[e];
        return null
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(0);
    r.DisplayObject.prototype.getGlobalPosition = function(t) {
        return t = t || new r.Point,
        this.parent ? (this.displayObjectUpdateTransform(),
        t.x = this.worldTransform.tx,
        t.y = this.worldTransform.ty) : (t.x = this.position.x,
        t.y = this.position.y),
        t
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        this.loop = !0,
        this.random = !1,
        this.reverse = !1,
        this.speed = 10,
        this.frames = t,
        Object.assign(this, e)
    }
    function n(t) {
        this.anims = {},
        this.currentAnim = "default",
        this.currentFrame = 0,
        this.playing = !1,
        this.finished = !1,
        this._willTick = !1,
        this._finishEvtEmit = !1,
        this._frameTime = 0,
        this.textures = t,
        this.addAnim("default"),
        o.Sprite.call(this, this.textures[0])
    }
    var o = i(0);
    (n.prototype = Object.create(o.Sprite.prototype)).constructor = n,
    n.prototype.remove = function() {
        o.Sprite.prototype.remove.call(this),
        this._willTick && (this._willTick = !1,
        o.removeObject(this))
    }
    ,
    n.prototype.addAnim = function(t, e, i) {
        if (t) {
            if (!e) {
                e = [];
                for (var n = 0; n < this.textures.length; n++)
                    e.push(n)
            }
            var o = new r(e,i);
            return this.anims[t] = o,
            this
        }
    }
    ,
    n.prototype.play = function(t, e) {
        t = t || this.currentAnim;
        var i = this.anims[t];
        if (i)
            return this.playing = !0,
            this._finishEvtEmit = !1,
            this.finished = !1,
            this.currentAnim = t,
            "number" != typeof e && i.reverse && (e = i.frames.length - 1),
            this.gotoFrame(e || 0),
            this._willTick || (this._willTick = !0,
            o.addObject(this)),
            this
    }
    ,
    n.prototype.stop = function(t) {
        return this.playing = !1,
        "number" == typeof t && this.gotoFrame(t),
        this._willTick && (this._willTick = !1,
        o.removeObject(this)),
        this
    }
    ,
    n.prototype.gotoFrame = function(t) {
        var e = this.anims[this.currentAnim];
        if (e)
            return this.currentFrame = t,
            this._frameTime = 0,
            this.texture = this.textures[e.frames[t]],
            this
    }
    ,
    n.prototype.update = function(t) {
        var e = this.anims[this.currentAnim];
        if (this.finished)
            this._finishEvtEmit || (this._willTick && (this._willTick = !1,
            o.removeObject(this)),
            this.emit("finish", this.currentAnim));
        else if (this.playing && (this._frameTime += e.speed * t),
        this._frameTime > 1) {
            if (this._frameTime -= 1,
            e.random && e.frames.length > 1) {
                for (i = this.currentFrame; i === this.currentFrame; )
                    var i = Math.round(Math.random(0, e.frames.length - 1));
                return this.currentFrame = i,
                void (this.texture = this.textures[e.frames[i]])
            }
            (i = this.currentFrame + (e.reverse ? -1 : 1)) >= e.frames.length ? e.loop ? (this.currentFrame = 0,
            this.texture = this.textures[e.frames[0]]) : (this.playing = !1,
            this.finished = !0,
            this._finishEvtEmit = !1) : i < 0 ? e.loop ? (this.currentFrame = e.frames.length - 1,
            this.texture = this.textures[e.frames.last()]) : (this.playing = !1,
            this.finished = !0,
            this._finishEvtEmit = !1) : (this.currentFrame = i,
            this.texture = this.textures[e.frames[i]])
        }
    }
    ,
    Object.assign(n, {
        fromSpriteSheet: function(t, e, i, r) {
            var s = t;
            s instanceof o.Texture || (s = o.Texture.fromAsset(s));
            for (var a, h, u = s.crop, l = s.baseTexture, c = Math.floor(s.width / e), p = Math.floor(s.height / i), d = Math.min(r, c * p), f = [], v = 0; v < d; v++)
                a = v % c * e,
                h = Math.floor(v / c) * i,
                f.push(new o.Texture(l,new o.Rectangle(a + u.x,h + u.y,e,i)));
            return new n(f)
        }
    }),
    t.exports = n
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        n.Sprite.call(this, t),
        this.tileScale = new n.Point(1,1),
        this.tilePosition = new n.Point(0,0),
        this._width = e || 100,
        this._height = i || 100,
        this._uvs = new n.TextureUvs,
        this._canvasPattern = null,
        this.shader = new n.AbstractFilter(["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "uniform vec4 uFrame;", "uniform vec4 uTransform;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vec2 coord = aTextureCoord;", "   coord -= uTransform.xy;", "   coord /= uTransform.zw;", "   vTextureCoord = coord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"),["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform vec4 uFrame;", "uniform vec2 uPixelSize;", "void main(void){", "   vec2 coord = mod(vTextureCoord, uFrame.zw);", "   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);", "   coord += uFrame.xy;", "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;", "}"].join("\n"),{
            uFrame: {
                type: "4fv",
                value: [0, 0, 1, 1]
            },
            uTransform: {
                type: "4fv",
                value: [0, 0, 1, 1]
            },
            uPixelSize: {
                type: "2fv",
                value: [1, 1]
            }
        })
    }
    var n = i(0)
      , o = new n.Point
      , s = i(53);
    (r.prototype = Object.create(n.Sprite.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        width: {
            get: function() {
                return this._width
            },
            set: function(t) {
                this._width = t
            }
        },
        height: {
            get: function() {
                return this._height
            },
            set: function(t) {
                this._height = t
            }
        }
    }),
    r.prototype._onTextureUpdate = function() {}
    ,
    r.prototype._renderWebGL = function(t) {
        var e = this._texture;
        if (e && e._uvs) {
            var i = e._uvs
              , r = e._frame.width
              , n = e._frame.height
              , o = e.baseTexture.width
              , s = e.baseTexture.height;
            e._uvs = this._uvs,
            e._frame.width = this.width,
            e._frame.height = this.height,
            this.shader.uniforms.uPixelSize.value[0] = 1 / o,
            this.shader.uniforms.uPixelSize.value[1] = 1 / s,
            this.shader.uniforms.uFrame.value[0] = i.x0,
            this.shader.uniforms.uFrame.value[1] = i.y0,
            this.shader.uniforms.uFrame.value[2] = i.x1 - i.x0,
            this.shader.uniforms.uFrame.value[3] = i.y2 - i.y0,
            this.shader.uniforms.uTransform.value[0] = this.tilePosition.x % (r * this.tileScale.x) / this._width,
            this.shader.uniforms.uTransform.value[1] = this.tilePosition.y % (n * this.tileScale.y) / this._height,
            this.shader.uniforms.uTransform.value[2] = o / this._width * this.tileScale.x,
            this.shader.uniforms.uTransform.value[3] = s / this._height * this.tileScale.y,
            t.setObjectRenderer(t.plugins.sprite),
            t.plugins.sprite.render(this),
            e._uvs = i,
            e._frame.width = r,
            e._frame.height = n
        }
    }
    ,
    r.prototype._renderCanvas = function(t) {
        var e = this._texture;
        if (e.baseTexture.hasLoaded) {
            var i = t.context
              , r = this.worldTransform
              , o = t.resolution
              , a = e.baseTexture
              , h = this.tilePosition.x / this.tileScale.x % e._frame.width
              , u = this.tilePosition.y / this.tileScale.y % e._frame.height;
            if (!this._canvasPattern) {
                var l = new n.CanvasBuffer(e._frame.width * o,e._frame.height * o);
                16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint,
                this.tintedTexture = s.getTintedTexture(this, this.tint)),
                l.context.drawImage(this.tintedTexture, 0, 0)) : l.context.drawImage(a.source, -e._frame.x * o, -e._frame.y * o),
                this._canvasPattern = l.context.createPattern(l.canvas, "repeat")
            }
            i.globalAlpha = this.worldAlpha,
            i.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o),
            i.scale(this.tileScale.x / o, this.tileScale.y / o),
            i.translate(h + this.anchor.x * -this._width, u + this.anchor.y * -this._height);
            var c = t.blendModes[this.blendMode];
            c !== t.context.globalCompositeOperation && (i.globalCompositeOperation = c),
            i.fillStyle = this._canvasPattern,
            i.fillRect(-h, -u, this._width * o / this.tileScale.x, this._height * o / this.tileScale.y)
        }
    }
    ,
    r.prototype.getBounds = function() {
        var t, e, i, r, n = this._width, o = this._height, s = n * (1 - this.anchor.x), a = n * -this.anchor.x, h = o * (1 - this.anchor.y), u = o * -this.anchor.y, l = this.worldTransform, c = l.a, p = l.b, d = l.c, f = l.d, v = l.tx, y = l.ty, g = c * a + d * u + v, m = f * u + p * a + y, x = c * s + d * u + v, _ = f * u + p * s + y, b = c * s + d * h + v, T = f * h + p * s + y, w = c * a + d * h + v, E = f * h + p * a + y;
        t = w < (t = b < (t = x < (t = g) ? x : t) ? b : t) ? w : t,
        i = E < (i = T < (i = _ < (i = m) ? _ : i) ? T : i) ? E : i,
        e = w > (e = b > (e = x > (e = g) ? x : e) ? b : e) ? w : e,
        r = E > (r = T > (r = _ > (r = m) ? _ : r) ? T : r) ? E : r;
        var S = this._bounds;
        return S.x = t,
        S.width = e - t,
        S.y = i,
        S.height = r - i,
        this._currentBounds = S,
        S
    }
    ,
    r.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, o);
        var e, i = this._width, r = this._height, n = -i * this.anchor.x;
        return o.x > n && o.x < n + i && (e = -r * this.anchor.y,
        o.y > e && o.y < e + r)
    }
    ,
    r.prototype.destroy = function() {
        n.Sprite.prototype.destroy.call(this),
        this.tileScale = null,
        this._tileScaleOffset = null,
        this.tilePosition = null,
        this._uvs = null
    }
    ,
    r.fromFrame = function(t, e, i) {
        var o = n.utils.TextureCache[t];
        if (!o)
            throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
        return new r(o,e,i)
    }
    ,
    r.fromImage = function(t, e, i, o, s) {
        return new r(n.Texture.fromImage(t, o, s),e,i)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        n.Container.call(this),
        e = e || {},
        this.textWidth = 0,
        this.textHeight = 0,
        this._glyphs = [],
        this._font = {
            tint: void 0 !== e.tint ? e.tint : 16777215,
            align: e.align || "left",
            name: null,
            size: 0
        },
        this.font = e.font,
        this._text = t,
        this.maxWidth = 0,
        this.maxLineHeight = 0,
        this.dirty = !1,
        this.updateText()
    }
    var n = i(0);
    (r.prototype = Object.create(n.Container.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        tint: {
            get: function() {
                return this._font.tint
            },
            set: function(t) {
                this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215,
                this.dirty = !0
            }
        },
        align: {
            get: function() {
                return this._font.align
            },
            set: function(t) {
                this._font.align = t || "left",
                this.dirty = !0
            }
        },
        font: {
            get: function() {
                return this._font
            },
            set: function(t) {
                t && ("string" == typeof t ? (t = t.split(" "),
                this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "),
                this._font.size = t.length >= 2 ? parseInt(t[0], 10) : r.fonts[this._font.name].size) : (this._font.name = t.name,
                this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)),
                this.dirty = !0)
            }
        },
        text: {
            get: function() {
                return this._text
            },
            set: function(t) {
                t = t.toString() || " ",
                this._text !== t && (this._text = t,
                this.dirty = !0)
            }
        }
    }),
    r.prototype.updateText = function() {
        for (var t = r.fonts[this._font.name], e = new n.Point, i = null, o = [], s = 0, a = 0, h = [], u = 0, l = this._font.size / t.size, c = -1, p = 0, d = 0; d < this.text.length; d++) {
            var f = this.text.charCodeAt(d);
            if (c = /(\s)/.test(this.text.charAt(d)) ? d : c,
            /(?:\r\n|\r|\n)/.test(this.text.charAt(d)))
                h.push(s),
                a = Math.max(a, s),
                u++,
                e.x = 0,
                e.y += t.lineHeight,
                i = null;
            else if (-1 !== c && this.maxWidth > 0 && e.x * l > this.maxWidth)
                n.utils.removeItems(o, c, d - c),
                d = c,
                c = -1,
                h.push(s),
                a = Math.max(a, s),
                u++,
                e.x = 0,
                e.y += t.lineHeight,
                i = null;
            else {
                var v = t.chars[f];
                v && (i && v.kerning[i] && (e.x += v.kerning[i]),
                o.push({
                    texture: v.texture,
                    line: u,
                    charCode: f,
                    position: new n.Point(e.x + v.xOffset,e.y + v.yOffset)
                }),
                s = e.x + (v.texture.width + v.xOffset),
                e.x += v.xAdvance,
                p = Math.max(p, v.yOffset + v.texture.height),
                i = f)
            }
        }
        h.push(s),
        a = Math.max(a, s);
        var y = [];
        for (d = 0; d <= u; d++) {
            var g = 0;
            "right" === this._font.align ? g = a - h[d] : "center" === this._font.align && (g = (a - h[d]) / 2),
            y.push(g)
        }
        var m = o.length
          , x = this.tint;
        for (d = 0; d < m; d++) {
            var _ = this._glyphs[d];
            _ ? _.texture = o[d].texture : (_ = new n.Sprite(o[d].texture),
            this._glyphs.push(_)),
            _.position.x = (o[d].position.x + y[o[d].line]) * l,
            _.position.y = o[d].position.y * l,
            _.scale.x = _.scale.y = l,
            _.tint = x,
            _.parent || this.addChild(_)
        }
        for (d = m; d < this._glyphs.length; ++d)
            this.removeChild(this._glyphs[d]);
        this.textWidth = a * l,
        this.textHeight = (e.y + t.lineHeight) * l,
        this.maxLineHeight = p * l
    }
    ,
    r.prototype.updateTransform = function() {
        this.validate(),
        this.containerUpdateTransform()
    }
    ,
    r.prototype.getLocalBounds = function() {
        return this.validate(),
        n.Container.prototype.getLocalBounds.call(this)
    }
    ,
    r.prototype.validate = function() {
        this.dirty && (this.updateText(),
        this.dirty = !1)
    }
    ,
    r.fonts = {}
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        this.canvas = null,
        this.context = null,
        this.resolution = i || s.TEXT_RESOLUTION || n.RESOLUTION,
        this._text = null,
        this._style = null,
        this._generatedStyle = null,
        this._pixiId = t + JSON.stringify(e) + this.resolution;
        var r = n.utils.BaseTextureCache[this._pixiId];
        r ? (this.canvas = r.source,
        this.cacheDirty = !1) : (this.canvas = document.createElement("canvas"),
        this.canvas._pixiId = this._pixiId,
        this.cacheDirty = !0),
        this.context = this.canvas.getContext("2d");
        var a = n.Texture.fromCanvas(this.canvas);
        a.trim = new o.Rectangle,
        n.Sprite.call(this, a),
        this.text = t,
        this.style = e,
        this.switchNeeded = !1
    }
    var n = i(0)
      , o = i(3)
      , s = {
        TEXT_RESOLUTION: 1
    };
    (r.prototype = Object.create(n.Sprite.prototype)).constructor = r,
    Object.defineProperties(r.prototype, {
        width: {
            get: function() {
                return this.dirty && this.updateText(),
                this.scale.x * this._texture._frame.width
            },
            set: function(t) {
                this.scale.x = t / this._texture._frame.width,
                this._width = t
            }
        },
        height: {
            get: function() {
                return this.dirty && this.updateText(),
                this.scale.y * this._texture._frame.height
            },
            set: function(t) {
                this.scale.y = t / this._texture._frame.height,
                this._height = t
            }
        },
        style: {
            get: function() {
                return this._style
            },
            set: function(t) {
                var e = {};
                e.font = t.font || "bold 20px Arial",
                e.fill = t.fill || "black",
                e.align = t.align || "left",
                e.stroke = t.stroke || "black",
                e.strokeThickness = t.strokeThickness || 0,
                e.wordWrap = t.wordWrap || !1,
                e.wordWrapWidth = t.wordWrapWidth || 100,
                e.dropShadow = t.dropShadow || !1,
                e.dropShadowColor = t.dropShadowColor || "#000000",
                e.dropShadowAngle = t.dropShadowAngle || Math.PI / 6,
                e.dropShadowDistance = t.dropShadowDistance || 5,
                e.padding = t.padding || 0,
                e.textBaseline = t.textBaseline || "alphabetic",
                e.lineJoin = t.lineJoin || "miter",
                e.miterLimit = t.miterLimit || 10,
                this._generatedStyle = {
                    font: e.font.replace(/[0-9]+/, Math.round(parseInt(e.font.match(/[0-9]+/)[0], 10) * this.resolution)),
                    fill: e.fill,
                    align: e.align,
                    stroke: e.stroke,
                    strokeThickness: Math.round(e.strokeThickness * this.resolution),
                    wordWrap: e.wordWrap,
                    wordWrapWidth: Math.round(e.wordWrapWidth * this.resolution),
                    dropShadow: e.dropShadow,
                    dropShadowColor: e.dropShadowColor,
                    dropShadowAngle: e.dropShadowAngle,
                    dropShadowDistance: Math.round(e.dropShadowDistance * this.resolution),
                    padding: Math.round(e.padding * this.resolution),
                    textBaseline: e.textBaseline,
                    lineJoin: e.lineJoin,
                    miterLimit: e.miterLimit
                },
                null !== this._style && this.prepareUpdateText(this._text, t),
                this._style = e,
                this.dirty = !0
            }
        },
        text: {
            get: function() {
                return this._text
            },
            set: function(t) {
                t = t.toString() || " ",
                this._text !== t && (null !== this._text && this.prepareUpdateText(t, this._style),
                this._text = t,
                this.dirty = !0)
            }
        }
    }),
    r.prototype.prepareUpdateText = function(t, e) {
        this._pixiId = t + JSON.stringify(e) + this.resolution,
        this.switchNeeded = !0
    }
    ,
    r.prototype.switchCanvas = function() {
        var t = n.utils.BaseTextureCache[this._pixiId];
        t ? (this.canvas = t.source,
        this.context = this.canvas.getContext("2d"),
        this.cacheDirty = !1) : (this.canvas = document.createElement("canvas"),
        this.context = this.canvas.getContext("2d"),
        this.canvas._pixiId = this._pixiId,
        this.cacheDirty = !0);
        var e = n.Texture.fromCanvas(this.canvas);
        e.trim = new n.math.Rectangle,
        this.texture = e,
        this._texture = e,
        this.switchNeeded = !1
    }
    ,
    r.prototype.updateText = function() {
        if (this.switchNeeded && this.switchCanvas(),
        this.cacheDirty) {
            var t = this._generatedStyle;
            this.context.font = t.font;
            for (var e = (t.wordWrap ? this.wordWrap(this._text) : this._text).split(/(?:\r\n|\r|\n)/), i = new Array(e.length), r = 0, n = this.determineFontProperties(t.font), o = 0; o < e.length; o++) {
                var s = this.context.measureText(e[o]).width;
                i[o] = s,
                r = Math.max(r, s)
            }
            var a = r + t.strokeThickness;
            t.dropShadow && (a += t.dropShadowDistance),
            this.canvas.width = a + this.context.lineWidth;
            var h = this.style.lineHeight || n.fontSize + t.strokeThickness
              , u = h * e.length;
            t.dropShadow && (u += t.dropShadowDistance),
            this.canvas.height = u + 2 * t.padding,
            navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.context.font = t.font,
            this.context.strokeStyle = t.stroke,
            this.context.lineWidth = t.strokeThickness,
            this.context.textBaseline = t.textBaseline,
            this.context.lineJoin = t.lineJoin,
            this.context.miterLimit = t.miterLimit;
            var l, c;
            if (t.dropShadow) {
                this.context.fillStyle = t.dropShadowColor;
                var p = Math.cos(t.dropShadowAngle) * t.dropShadowDistance
                  , d = Math.sin(t.dropShadowAngle) * t.dropShadowDistance;
                for (o = 0; o < e.length; o++)
                    l = t.strokeThickness / 2,
                    c = t.strokeThickness / 2 + o * h + n.ascent,
                    "right" === t.align ? l += r - i[o] : "center" === t.align && (l += (r - i[o]) / 2),
                    t.fill && this.context.fillText(e[o], l + p, c + d + t.padding)
            }
            for (this.context.fillStyle = t.fill,
            o = 0; o < e.length; o++)
                l = t.strokeThickness / 2,
                c = t.strokeThickness / 2 + o * h + n.ascent,
                "right" === t.align ? l += r - i[o] : "center" === t.align && (l += (r - i[o]) / 2),
                t.stroke && t.strokeThickness && this.context.strokeText(e[o], l, c + t.padding),
                t.fill && this.context.fillText(e[o], l, c + t.padding)
        }
        this.updateTexture()
    }
    ,
    r.prototype.updateTexture = function() {
        var t = this._texture;
        this.cacheDirty && (t.baseTexture.hasLoaded = !0,
        t.baseTexture.resolution = this.resolution,
        t.baseTexture.width = this.canvas.width / this.resolution,
        t.baseTexture.height = this.canvas.height / this.resolution),
        t.crop.width = t._frame.width = this.canvas.width / this.resolution,
        t.crop.height = t._frame.height = this.canvas.height / this.resolution,
        t.trim.x = 0,
        t.trim.y = -this._style.padding,
        t.trim.width = t._frame.width,
        t.trim.height = t._frame.height - 2 * this._style.padding,
        this._width = this.canvas.width / this.resolution,
        this._height = this.canvas.height / this.resolution,
        this.scale.x = 1,
        this.scale.y = 1,
        this.cacheDirty && t.baseTexture.emit("update", t.baseTexture),
        this.dirty = !1,
        this.cacheDirty = !1
    }
    ,
    r.prototype.determineFontProperties = function(t) {
        var e = n.Text.fontPropertiesCache[t];
        if (!e) {
            e = {};
            var i = n.Text.fontPropertiesCanvas
              , r = n.Text.fontPropertiesContext;
            r.font = t;
            var o = Math.ceil(r.measureText("|MÉq").width)
              , s = Math.ceil(r.measureText("M").width)
              , a = 2 * s;
            s = 1.2 * s | 0,
            i.width = o,
            i.height = a,
            r.fillStyle = "#f00",
            r.fillRect(0, 0, o, a),
            r.font = t,
            r.textBaseline = "alphabetic",
            r.fillStyle = "#000",
            r.fillText("|MÉq", 0, s);
            var h, u, l = r.getImageData(0, 0, o, a).data, c = l.length, p = 4 * o, d = 0, f = !1;
            for (h = 0; h < s; h++) {
                for (u = 0; u < p; u += 4)
                    if (255 !== l[d + u]) {
                        f = !0;
                        break
                    }
                if (f)
                    break;
                d += p
            }
            for (e.ascent = s - h,
            d = c - p,
            f = !1,
            h = a; h > s; h--) {
                for (u = 0; u < p; u += 4)
                    if (255 !== l[d + u]) {
                        f = !0;
                        break
                    }
                if (f)
                    break;
                d -= p
            }
            e.descent = h - s,
            e.fontSize = e.ascent + e.descent,
            n.Text.fontPropertiesCache[t] = e
        }
        return e
    }
    ,
    r.prototype.wordWrap = function(t) {
        for (var e = "", i = t.split("\n"), r = this._generatedStyle.wordWrapWidth, n = 0; n < i.length; n++) {
            for (var o = r, s = i[n].split(" "), a = 0; a < s.length; a++) {
                var h = this.context.measureText(s[a]).width
                  , u = h + this.context.measureText(" ").width;
                0 === a || u > o ? (a > 0 && (e += "\n"),
                e += s[a],
                o = r - h) : (o -= u,
                e += " " + s[a])
            }
            n < i.length - 1 && (e += "\n")
        }
        return e
    }
    ,
    r.prototype.renderWebGL = function(t) {
        this.dirty && this.updateText(),
        n.Sprite.prototype.renderWebGL.call(this, t)
    }
    ,
    r.prototype._renderCanvas = function(t) {
        this.dirty && this.updateText(),
        n.Sprite.prototype._renderCanvas.call(this, t)
    }
    ,
    r.prototype.getBounds = function(t) {
        return this.dirty && this.updateText(),
        n.Sprite.prototype.getBounds.call(this, t)
    }
    ,
    r.prototype.destroy = function(t) {
        this.context = null,
        this.canvas = null,
        this._style = null,
        this._texture.destroy(void 0 === t || t)
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        InteractionData: i(62),
        InteractionManager: i(124),
        interactiveTarget: i(63)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        e = e || {},
        this.renderer = t,
        this.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault,
        this.interactionFrequency = e.interactionFrequency || 10,
        this.mouse = new o,
        this.eventData = {
            stopped: !1,
            target: null,
            type: null,
            data: this.mouse,
            stopPropagation: function() {
                this.stopped = !0
            }
        },
        this.interactiveDataPool = [],
        this.interactionDOMElement = null,
        this.moveWhenInside = !1,
        this.eventsAdded = !1,
        this.onMouseUp = this.onMouseUp.bind(this),
        this.processMouseUp = this.processMouseUp.bind(this),
        this.onMouseDown = this.onMouseDown.bind(this),
        this.processMouseDown = this.processMouseDown.bind(this),
        this.onMouseMove = this.onMouseMove.bind(this),
        this.processMouseMove = this.processMouseMove.bind(this),
        this.onMouseOut = this.onMouseOut.bind(this),
        this.processMouseOverOut = this.processMouseOverOut.bind(this),
        this.onTouchStart = this.onTouchStart.bind(this),
        this.processTouchStart = this.processTouchStart.bind(this),
        this.onTouchEnd = this.onTouchEnd.bind(this),
        this.processTouchEnd = this.processTouchEnd.bind(this),
        this.onTouchMove = this.onTouchMove.bind(this),
        this.processTouchMove = this.processTouchMove.bind(this),
        this.last = 0,
        this.currentCursorStyle = "inherit",
        this._tempPoint = new n.Point,
        this.resolution = 1,
        this.setTargetElement(this.renderer.view, this.renderer.resolution)
    }
    var n = i(0)
      , o = i(62);
    Object.assign(n.DisplayObject.prototype, i(63)),
    r.prototype.constructor = r,
    t.exports = r,
    r.prototype.setTargetElement = function(t, e) {
        this.removeEvents(),
        this.interactionDOMElement = t,
        this.resolution = e || 1,
        this.addEvents()
    }
    ,
    r.prototype.addEvents = function() {
        this.interactionDOMElement && (n.ticker.shared.add(this.update, this),
        window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none",
        this.interactionDOMElement.style["-ms-touch-action"] = "none"),
        window.document.addEventListener("mousemove", this.onMouseMove, !0),
        this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0),
        this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0),
        this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0),
        this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0),
        this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0),
        window.addEventListener("mouseup", this.onMouseUp, !0),
        this.eventsAdded = !0)
    }
    ,
    r.prototype.removeEvents = function() {
        this.interactionDOMElement && (n.ticker.shared.remove(this.update),
        window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "",
        this.interactionDOMElement.style["-ms-touch-action"] = ""),
        window.document.removeEventListener("mousemove", this.onMouseMove, !0),
        this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0),
        this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0),
        this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0),
        this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0),
        this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0),
        this.interactionDOMElement = null,
        window.removeEventListener("mouseup", this.onMouseUp, !0),
        this.eventsAdded = !1)
    }
    ,
    r.prototype.update = function(t) {
        if (this._deltaTime += t,
        !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0,
        this.interactionDOMElement)) {
            if (this.didMove)
                return void (this.didMove = !1);
            this.cursor = "inherit",
            this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0),
            this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor,
            this.interactionDOMElement.style.cursor = this.cursor)
        }
    }
    ,
    r.prototype.dispatchEvent = function(t, e, i) {
        i.stopped || (i.target = t,
        i.type = e,
        t.emit(e, i),
        t[e] && t[e](i))
    }
    ,
    r.prototype.mapPositionToPoint = function(t, e, i) {
        var r = this.interactionDOMElement.getBoundingClientRect();
        t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) / this.resolution,
        t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) / this.resolution
    }
    ,
    r.prototype.processInteractive = function(t, e, i, r, n) {
        if (!e || !e.visible)
            return !1;
        var o = !1
          , s = n = e.interactive || n;
        if (e.hitArea && (s = !1),
        e.interactiveChildren)
            for (var a = e.children, h = a.length - 1; h >= 0; h--) {
                var u = a[h];
                if (this.processInteractive(t, u, i, r, s)) {
                    if (!u.parent)
                        continue;
                    o = !0,
                    s = !1,
                    r = !1
                }
            }
        return n && (r && !o && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint),
        o = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (o = e.containsPoint(t))),
        e.interactive && i(e, o)),
        o
    }
    ,
    r.prototype.onMouseDown = function(t) {
        this.mouse.originalEvent = t,
        this.eventData.data = this.mouse,
        this.eventData.stopped = !1,
        this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
        this.autoPreventDefault && this.mouse.originalEvent.preventDefault(),
        this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0)
    }
    ,
    r.prototype.processMouseDown = function(t, e) {
        var i = this.mouse.originalEvent
          , r = 2 === i.button || 3 === i.which;
        e && (t[r ? "_isRightDown" : "_isLeftDown"] = !0,
        this.dispatchEvent(t, r ? "rightdown" : "mousedown", this.eventData))
    }
    ,
    r.prototype.onMouseUp = function(t) {
        this.mouse.originalEvent = t,
        this.eventData.data = this.mouse,
        this.eventData.stopped = !1,
        this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
        this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0)
    }
    ,
    r.prototype.processMouseUp = function(t, e) {
        var i = this.mouse.originalEvent
          , r = 2 === i.button || 3 === i.which
          , n = r ? "_isRightDown" : "_isLeftDown";
        e ? (this.dispatchEvent(t, r ? "rightup" : "mouseup", this.eventData),
        t[n] && (t[n] = !1,
        this.dispatchEvent(t, r ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1,
        this.dispatchEvent(t, r ? "rightupoutside" : "mouseupoutside", this.eventData))
    }
    ,
    r.prototype.onMouseMove = function(t) {
        this.mouse.originalEvent = t,
        this.eventData.data = this.mouse,
        this.eventData.stopped = !1,
        this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
        this.didMove = !0,
        this.cursor = "inherit",
        this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0),
        this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor,
        this.interactionDOMElement.style.cursor = this.cursor)
    }
    ,
    r.prototype.processMouseMove = function(t, e) {
        this.processMouseOverOut(t, e),
        this.moveWhenInside && !e || this.dispatchEvent(t, "mousemove", this.eventData)
    }
    ,
    r.prototype.onMouseOut = function(t) {
        this.mouse.originalEvent = t,
        this.eventData.stopped = !1,
        this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
        this.interactionDOMElement.style.cursor = "inherit",
        this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
        this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1)
    }
    ,
    r.prototype.processMouseOverOut = function(t, e) {
        e ? (t._over || (t._over = !0,
        this.dispatchEvent(t, "mouseover", this.eventData)),
        t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1,
        this.dispatchEvent(t, "mouseout", this.eventData))
    }
    ,
    r.prototype.onTouchStart = function(t) {
        this.autoPreventDefault && t.preventDefault();
        for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
            var n = e[r]
              , o = this.getTouchData(n);
            o.originalEvent = t,
            this.eventData.data = o,
            this.eventData.stopped = !1,
            this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchStart, !0),
            this.returnTouchData(o)
        }
    }
    ,
    r.prototype.processTouchStart = function(t, e) {
        e && (t._touchDown = !0,
        this.dispatchEvent(t, "touchstart", this.eventData))
    }
    ,
    r.prototype.onTouchEnd = function(t) {
        this.autoPreventDefault && t.preventDefault();
        for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
            var n = e[r]
              , o = this.getTouchData(n);
            o.originalEvent = t,
            this.eventData.data = o,
            this.eventData.stopped = !1,
            this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0),
            this.returnTouchData(o)
        }
    }
    ,
    r.prototype.processTouchEnd = function(t, e) {
        e ? (this.dispatchEvent(t, "touchend", this.eventData),
        t._touchDown && (t._touchDown = !1,
        this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1,
        this.dispatchEvent(t, "touchendoutside", this.eventData))
    }
    ,
    r.prototype.onTouchMove = function(t) {
        this.autoPreventDefault && t.preventDefault();
        for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
            var n = e[r]
              , o = this.getTouchData(n);
            o.originalEvent = t,
            this.eventData.data = o,
            this.eventData.stopped = !1,
            this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside),
            this.returnTouchData(o)
        }
    }
    ,
    r.prototype.processTouchMove = function(t, e) {
        this.moveWhenInside && !e || this.dispatchEvent(t, "touchmove", this.eventData)
    }
    ,
    r.prototype.getTouchData = function(t) {
        var e = this.interactiveDataPool.pop();
        return e || (e = new o),
        e.identifier = t.identifier,
        this.mapPositionToPoint(e.global, t.clientX, t.clientY),
        navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution,
        e.global.y = e.global.y / this.resolution),
        t.globalX = e.global.x,
        t.globalY = e.global.y,
        e
    }
    ,
    r.prototype.returnTouchData = function(t) {
        this.interactiveDataPool.push(t)
    }
    ,
    r.prototype.destroy = function() {
        this.removeEvents(),
        this.renderer = null,
        this.mouse = null,
        this.eventData = null,
        this.interactiveDataPool = null,
        this.interactionDOMElement = null,
        this.onMouseUp = null,
        this.processMouseUp = null,
        this.onMouseDown = null,
        this.processMouseDown = null,
        this.onMouseMove = null,
        this.processMouseMove = null,
        this.onMouseOut = null,
        this.processMouseOverOut = null,
        this.onTouchStart = null,
        this.processTouchStart = null,
        this.onTouchEnd = null,
        this.processTouchEnd = null,
        this.onTouchMove = null,
        this.processTouchMove = null,
        this._tempPoint = null
    }
    ,
    n.WebGLRenderer.registerPlugin("interaction", r),
    n.CanvasRenderer.registerPlugin("interaction", r)
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        AsciiFilter: i(126),
        BloomFilter: i(128),
        BlurFilter: i(131),
        BlurXFilter: i(26),
        BlurYFilter: i(37),
        BlurDirFilter: i(132),
        ColorMatrixFilter: i(135),
        ColorStepFilter: i(137),
        ConvolutionFilter: i(139),
        CrossHatchFilter: i(141),
        DisplacementFilter: i(143),
        DotScreenFilter: i(146),
        GrayFilter: i(148),
        DropShadowFilter: i(150),
        InvertFilter: i(154),
        NoiseFilter: i(156),
        PixelateFilter: i(158),
        RGBSplitFilter: i(160),
        ShockwaveFilter: i(162),
        SepiaFilter: i(164),
        SmartBlurFilter: i(166),
        TiltShiftFilter: i(168),
        TiltShiftXFilter: i(65),
        TiltShiftYFilter: i(67),
        TwistFilter: i(170)
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(127), {
            dimensions: {
                type: "4fv",
                value: new Float32Array([0, 0, 0, 0])
            },
            pixelSize: {
                type: "1f",
                value: 8
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        size: {
            get: function() {
                return this.uniforms.pixelSize.value
            },
            set: function(t) {
                this.uniforms.pixelSize.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this),
        this.blurXFilter = new o,
        this.blurYFilter = new s,
        this.defaultFilter = new n.AbstractFilter
    }
    var n = i(0)
      , o = i(26)
      , s = i(37);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager.getRenderTarget(!0);
        this.defaultFilter.applyFilter(t, e, i),
        this.blurXFilter.applyFilter(t, e, r),
        t.blendModeManager.setBlendMode(n.BLEND_MODES.SCREEN),
        this.blurYFilter.applyFilter(t, r, i),
        t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL),
        t.filterManager.returnRenderTarget(r)
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t
            }
        },
        blurX: {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = t
            }
        },
        blurY: {
            get: function() {
                return this.blurYFilter.blur
            },
            set: function(t) {
                this.blurYFilter.blur = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"
}
, function(t, e) {
    t.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this),
        this.blurXFilter = new o,
        this.blurYFilter = new s
    }
    var n = i(0)
      , o = i(26)
      , s = i(37);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager.getRenderTarget(!0);
        this.blurXFilter.applyFilter(t, e, r),
        this.blurYFilter.applyFilter(t, r, i),
        t.filterManager.returnRenderTarget(r)
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.padding = .5 * Math.abs(t),
                this.blurXFilter.blur = this.blurYFilter.blur = t
            }
        },
        passes: {
            get: function() {
                return this.blurXFilter.passes
            },
            set: function(t) {
                this.blurXFilter.passes = this.blurYFilter.passes = t
            }
        },
        blurX: {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = t
            }
        },
        blurY: {
            get: function() {
                return this.blurYFilter.blur
            },
            set: function(t) {
                this.blurYFilter.blur = t
            }
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        n.AbstractFilter.call(this, i(133), i(134), {
            strength: {
                type: "1f",
                value: 1
            },
            dirX: {
                type: "1f",
                value: t || 0
            },
            dirY: {
                type: "1f",
                value: e || 0
            }
        }),
        this.defaultFilter = new n.AbstractFilter,
        this.passes = 1,
        this.dirX = t || 0,
        this.dirY = e || 0,
        this.strength = 4
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i, r) {
        var n = this.getShader(t);
        if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width),
        1 === this.passes)
            t.filterManager.applyFilter(n, e, i, r);
        else {
            var o = t.filterManager.getRenderTarget(!0);
            t.filterManager.applyFilter(n, e, o, r);
            for (var s = 0; s < this.passes - 2; s++)
                t.filterManager.applyFilter(n, o, o, r);
            t.filterManager.applyFilter(n, o, i, r),
            t.filterManager.returnRenderTarget(o)
        }
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.strength
            },
            set: function(t) {
                this.padding = .5 * t,
                this.strength = t
            }
        },
        dirX: {
            get: function() {
                return this.dirX
            },
            set: function(t) {
                this.uniforms.dirX.value = t
            }
        },
        dirY: {
            get: function() {
                return this.dirY
            },
            set: function(t) {
                this.uniforms.dirY.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"
}
, function(t, e) {
    t.exports = "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(136), {
            m: {
                type: "1fv",
                value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype._loadMatrix = function(t, e) {
        var i = t;
        (e = !!e) && (this._multiply(i, this.uniforms.m.value, t),
        i = this._colorMatrix(i)),
        this.uniforms.m.value = i
    }
    ,
    r.prototype._multiply = function(t, e, i) {
        return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15],
        t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16],
        t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17],
        t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18],
        t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19],
        t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15],
        t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16],
        t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17],
        t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18],
        t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19],
        t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15],
        t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16],
        t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17],
        t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18],
        t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19],
        t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15],
        t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16],
        t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17],
        t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18],
        t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19],
        t
    }
    ,
    r.prototype._colorMatrix = function(t) {
        var e = new Float32Array(t);
        return e[4] /= 255,
        e[9] /= 255,
        e[14] /= 255,
        e[19] /= 255,
        e
    }
    ,
    r.prototype.brightness = function(t, e) {
        var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, e)
    }
    ,
    r.prototype.greyscale = function(t, e) {
        var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, e)
    }
    ,
    r.prototype.grayscale = r.prototype.greyscale,
    r.prototype.blackAndWhite = function(t) {
        this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.hue = function(t, e) {
        t = (t || 0) / 180 * Math.PI;
        var i = Math.cos(t)
          , r = Math.sin(t)
          , n = [.213 + .787 * i + -.213 * r, .715 + -.715 * i + -.715 * r, .072 + -.072 * i + .928 * r, 0, 0, .213 + -.213 * i + .143 * r, .715 + i * (1 - .715) + .14 * r, .072 + -.072 * i + -.283 * r, 0, 0, .213 + -.213 * i + -.787 * r, .715 + -.715 * i + .715 * r, .072 + .928 * i + .072 * r, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.contrast = function(t, e) {
        var i = (t || 0) + 1
          , r = -128 * (i - 1)
          , n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.saturate = function(t, e) {
        var i = 2 * (t || 0) / 3 + 1
          , r = -.5 * (i - 1)
          , n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.desaturate = function(t) {
        this.saturate(-1)
    }
    ,
    r.prototype.negative = function(t) {
        this._loadMatrix([0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.sepia = function(t) {
        this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.technicolor = function(t) {
        this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.polaroid = function(t) {
        this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.toBGR = function(t) {
        this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.kodachrome = function(t) {
        this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.browni = function(t) {
        this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.vintage = function(t) {
        this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.colorTone = function(t, e, i, r, n) {
        t = t || .2,
        e = e || .15;
        var o = ((i = i || 16770432) >> 16 & 255) / 255
          , s = (i >> 8 & 255) / 255
          , a = (255 & i) / 255
          , h = ((r = r || 3375104) >> 16 & 255) / 255
          , u = (r >> 8 & 255) / 255
          , l = (255 & r) / 255
          , c = [.3, .59, .11, 0, 0, o, s, a, t, 0, h, u, l, e, 0, o - h, s - u, a - l, 0, 0];
        this._loadMatrix(c, n)
    }
    ,
    r.prototype.night = function(t, e) {
        var i = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, e)
    }
    ,
    r.prototype.predator = function(t, e) {
        var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
        this._loadMatrix(i, e)
    }
    ,
    r.prototype.lsd = function(t) {
        this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
    }
    ,
    r.prototype.reset = function() {
        this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
    }
    ,
    Object.defineProperties(r.prototype, {
        matrix: {
            get: function() {
                return this.uniforms.m.value
            },
            set: function(t) {
                this.uniforms.m.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(138), {
            step: {
                type: "1f",
                value: 5
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        step: {
            get: function() {
                return this.uniforms.step.value
            },
            set: function(t) {
                this.uniforms.step.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r(t, e, r) {
        n.AbstractFilter.call(this, null, i(140), {
            matrix: {
                type: "1fv",
                value: new Float32Array(t)
            },
            texelSize: {
                type: "v2",
                value: {
                    x: 1 / e,
                    y: 1 / r
                }
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        matrix: {
            get: function() {
                return this.uniforms.matrix.value
            },
            set: function(t) {
                this.uniforms.matrix.value = new Float32Array(t)
            }
        },
        width: {
            get: function() {
                return 1 / this.uniforms.texelSize.value.x
            },
            set: function(t) {
                this.uniforms.texelSize.value.x = 1 / t
            }
        },
        height: {
            get: function() {
                return 1 / this.uniforms.texelSize.value.y
            },
            set: function(t) {
                this.uniforms.texelSize.value.y = 1 / t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(142))
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        var r = new n.Matrix;
        t.renderable = !1,
        n.AbstractFilter.call(this, i(144), i(145), {
            mapSampler: {
                type: "sampler2D",
                value: t.texture
            },
            otherMatrix: {
                type: "mat3",
                value: r.toArray(!0)
            },
            scale: {
                type: "v2",
                value: {
                    x: 1,
                    y: 1
                }
            }
        }),
        this.maskSprite = t,
        this.maskMatrix = r,
        null !== e && void 0 !== e || (e = 20),
        this.scale = new n.Point(e,e)
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager;
        r.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix),
        this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0),
        this.uniforms.scale.value.x = this.scale.x * (1 / e.frame.width),
        this.uniforms.scale.value.y = this.scale.y * (1 / e.frame.height);
        var n = this.getShader(t);
        r.applyFilter(n, e, i)
    }
    ,
    Object.defineProperties(r.prototype, {
        map: {
            get: function() {
                return this.uniforms.mapSampler.value
            },
            set: function(t) {
                this.uniforms.mapSampler.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(147), {
            scale: {
                type: "1f",
                value: 1
            },
            angle: {
                type: "1f",
                value: 5
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        scale: {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(t) {
                this.uniforms.scale.value = t
            }
        },
        angle: {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(t) {
                this.uniforms.angle.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(149), {
            gray: {
                type: "1f",
                value: 1
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        gray: {
            get: function() {
                return this.uniforms.gray.value
            },
            set: function(t) {
                this.uniforms.gray.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this),
        this.blurXFilter = new o,
        this.blurYTintFilter = new s,
        this.defaultFilter = new n.AbstractFilter,
        this.padding = 30,
        this._dirtyPosition = !0,
        this._angle = 45 * Math.PI / 180,
        this._distance = 10,
        this.alpha = .75,
        this.hideObject = !1,
        this.blendMode = n.BLEND_MODES.MULTIPLY
    }
    var n = i(0)
      , o = i(26)
      , s = i(151);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager.getRenderTarget(!0);
        this._dirtyPosition && (this._dirtyPosition = !1,
        this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance,
        this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance),
        this.blurXFilter.applyFilter(t, e, r),
        t.blendModeManager.setBlendMode(this.blendMode),
        this.blurYTintFilter.applyFilter(t, r, i),
        t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL),
        this.hideObject || this.defaultFilter.applyFilter(t, e, i),
        t.filterManager.returnRenderTarget(r)
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = this.blurYTintFilter.blur = t
            }
        },
        blurX: {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = t
            }
        },
        blurY: {
            get: function() {
                return this.blurYTintFilter.blur
            },
            set: function(t) {
                this.blurYTintFilter.blur = t
            }
        },
        color: {
            get: function() {
                return n.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)
            },
            set: function(t) {
                this.blurYTintFilter.uniforms.color.value = n.utils.hex2rgb(t)
            }
        },
        alpha: {
            get: function() {
                return this.blurYTintFilter.uniforms.alpha.value
            },
            set: function(t) {
                this.blurYTintFilter.uniforms.alpha.value = t
            }
        },
        distance: {
            get: function() {
                return this._distance
            },
            set: function(t) {
                this._dirtyPosition = !0,
                this._distance = t
            }
        },
        angle: {
            get: function() {
                return this._angle
            },
            set: function(t) {
                this._dirtyPosition = !0,
                this._angle = t
            }
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, i(152), i(153), {
            blur: {
                type: "1f",
                value: 1 / 512
            },
            color: {
                type: "c",
                value: [0, 0, 0]
            },
            alpha: {
                type: "1f",
                value: .7
            },
            offset: {
                type: "2f",
                value: [5, 5]
            },
            strength: {
                type: "1f",
                value: 1
            }
        }),
        this.passes = 1,
        this.strength = 4
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i, r) {
        var n = this.getShader(t);
        if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.height / e.size.height),
        1 === this.passes)
            t.filterManager.applyFilter(n, e, i, r);
        else {
            for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, h = 0; h < this.passes - 1; h++) {
                t.filterManager.applyFilter(n, s, a, r);
                var u = a;
                a = s,
                s = u
            }
            t.filterManager.applyFilter(n, s, i, r),
            t.filterManager.returnRenderTarget(o)
        }
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.strength
            },
            set: function(t) {
                this.padding = .5 * t,
                this.strength = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"
}
, function(t, e) {
    t.exports = "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(155), {
            invert: {
                type: "1f",
                value: 1
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        invert: {
            get: function() {
                return this.uniforms.invert.value
            },
            set: function(t) {
                this.uniforms.invert.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(157), {
            noise: {
                type: "1f",
                value: .5
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        noise: {
            get: function() {
                return this.uniforms.noise.value
            },
            set: function(t) {
                this.uniforms.noise.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(159), {
            dimensions: {
                type: "4fv",
                value: new Float32Array([0, 0, 0, 0])
            },
            pixelSize: {
                type: "v2",
                value: {
                    x: 10,
                    y: 10
                }
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        size: {
            get: function() {
                return this.uniforms.pixelSize.value
            },
            set: function(t) {
                this.uniforms.pixelSize.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(161), {
            red: {
                type: "v2",
                value: {
                    x: 20,
                    y: 20
                }
            },
            green: {
                type: "v2",
                value: {
                    x: -20,
                    y: 20
                }
            },
            blue: {
                type: "v2",
                value: {
                    x: 20,
                    y: -20
                }
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        red: {
            get: function() {
                return this.uniforms.red.value
            },
            set: function(t) {
                this.uniforms.red.value = t
            }
        },
        green: {
            get: function() {
                return this.uniforms.green.value
            },
            set: function(t) {
                this.uniforms.green.value = t
            }
        },
        blue: {
            get: function() {
                return this.uniforms.blue.value
            },
            set: function(t) {
                this.uniforms.blue.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(163), {
            center: {
                type: "v2",
                value: {
                    x: .5,
                    y: .5
                }
            },
            params: {
                type: "v3",
                value: {
                    x: 10,
                    y: .8,
                    z: .1
                }
            },
            time: {
                type: "1f",
                value: 0
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        center: {
            get: function() {
                return this.uniforms.center.value
            },
            set: function(t) {
                this.uniforms.center.value = t
            }
        },
        params: {
            get: function() {
                return this.uniforms.params.value
            },
            set: function(t) {
                this.uniforms.params.value = t
            }
        },
        time: {
            get: function() {
                return this.uniforms.time.value
            },
            set: function(t) {
                this.uniforms.time.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(165), {
            sepia: {
                type: "1f",
                value: 1
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        sepia: {
            get: function() {
                return this.uniforms.sepia.value
            },
            set: function(t) {
                this.uniforms.sepia.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(167), {
            delta: {
                type: "v2",
                value: {
                    x: .1,
                    y: 0
                }
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this),
        this.tiltShiftXFilter = new o,
        this.tiltShiftYFilter = new s
    }
    var n = i(0)
      , o = i(65)
      , s = i(67);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    r.prototype.applyFilter = function(t, e, i) {
        var r = t.filterManager.getRenderTarget(!0);
        this.tiltShiftXFilter.applyFilter(t, e, r),
        this.tiltShiftYFilter.applyFilter(t, r, i),
        t.filterManager.returnRenderTarget(r)
    }
    ,
    Object.defineProperties(r.prototype, {
        blur: {
            get: function() {
                return this.tiltShiftXFilter.blur
            },
            set: function(t) {
                this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = t
            }
        },
        gradientBlur: {
            get: function() {
                return this.tiltShiftXFilter.gradientBlur
            },
            set: function(t) {
                this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = t
            }
        },
        start: {
            get: function() {
                return this.tiltShiftXFilter.start
            },
            set: function(t) {
                this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = t
            }
        },
        end: {
            get: function() {
                return this.tiltShiftXFilter.end
            },
            set: function(t) {
                this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n"
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.AbstractFilter.call(this, null, i(171), {
            radius: {
                type: "1f",
                value: .5
            },
            angle: {
                type: "1f",
                value: 5
            },
            offset: {
                type: "v2",
                value: {
                    x: .5,
                    y: .5
                }
            }
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.AbstractFilter.prototype)).constructor = r,
    t.exports = r,
    Object.defineProperties(r.prototype, {
        offset: {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(t) {
                this.uniforms.offset.value = t
            }
        },
        radius: {
            get: function() {
                return this.uniforms.radius.value
            },
            set: function(t) {
                this.uniforms.radius.value = t
            }
        },
        angle: {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(t) {
                this.uniforms.angle.value = t
            }
        }
    })
}
, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n"
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        Mesh: i(27),
        Plane: i(173),
        Rope: i(174),
        MeshRenderer: i(175),
        MeshShader: i(176)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        n.call(this, t),
        this._ready = !0,
        this.segmentsX = e || 10,
        this.segmentsY = i || 10,
        this.drawMode = n.DRAW_MODES.TRIANGLES,
        this.refresh()
    }
    var n = i(27);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.refresh = function() {
        var t = this.segmentsX * this.segmentsY
          , e = []
          , i = []
          , r = []
          , n = this.texture
          , o = this.segmentsX - 1
          , s = this.segmentsY - 1
          , a = 0
          , h = n.width / o
          , u = n.height / s;
        for (a = 0; a < t; a++) {
            var l = a % this.segmentsX
              , c = a / this.segmentsX | 0;
            e.push(l * h, c * u),
            i.push(n._uvs.x0 + (n._uvs.x1 - n._uvs.x0) * (l / (this.segmentsX - 1)), n._uvs.y0 + (n._uvs.y3 - n._uvs.y0) * (c / (this.segmentsY - 1)))
        }
        var p = o * s;
        for (a = 0; a < p; a++) {
            var d = a % o
              , f = a / o | 0
              , v = f * this.segmentsX + d
              , y = f * this.segmentsX + d + 1
              , g = (f + 1) * this.segmentsX + d
              , m = (f + 1) * this.segmentsX + d + 1;
            r.push(v, y, g),
            r.push(y, m, g)
        }
        this.vertices = new Float32Array(e),
        this.uvs = new Float32Array(i),
        this.colors = new Float32Array([]),
        this.indices = new Uint16Array(r)
    }
    ,
    r.prototype._onTextureUpdate = function() {
        n.prototype._onTextureUpdate.call(this),
        this._ready && this.refresh()
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        n.call(this, t),
        this.points = e,
        this.vertices = new Float32Array(4 * e.length),
        this.uvs = new Float32Array(4 * e.length),
        this.colors = new Float32Array(2 * e.length),
        this.indices = new Uint16Array(2 * e.length),
        this._ready = !0,
        this.refresh()
    }
    var n = i(27)
      , o = i(0);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    t.exports = r,
    r.prototype.refresh = function() {
        var t = this.points;
        if (!(t.length < 1) && this._texture._uvs) {
            var e = this.uvs
              , i = this.indices
              , r = this.colors
              , n = this._texture._uvs
              , s = new o.Point(n.x0,n.y0)
              , a = new o.Point(n.x2 - n.x0,n.y2 - n.y0);
            e[0] = 0 + s.x,
            e[1] = 0 + s.y,
            e[2] = 0 + s.x,
            e[3] = 1 * a.y + s.y,
            r[0] = 1,
            r[1] = 1,
            i[0] = 0,
            i[1] = 1;
            for (var h, u, l = t.length, c = 1; c < l; c++)
                t[c],
                h = 4 * c,
                u = c / (l - 1),
                e[h] = u * a.x + s.x,
                e[h + 1] = 0 + s.y,
                e[h + 2] = u * a.x + s.x,
                e[h + 3] = 1 * a.y + s.y,
                h = 2 * c,
                r[h] = 1,
                r[h + 1] = 1,
                h = 2 * c,
                i[h] = h,
                i[h + 1] = h + 1;
            this.dirty = !0
        }
    }
    ,
    r.prototype._onTextureUpdate = function() {
        n.prototype._onTextureUpdate.call(this),
        this._ready && this.refresh()
    }
    ,
    r.prototype.updateTransform = function() {
        var t = this.points;
        if (!(t.length < 1)) {
            for (var e, i, r, n, o, s = t[0], a = 0, h = 0, u = this.vertices, l = t.length, c = 0; c < l; c++)
                i = t[c],
                r = 4 * c,
                e = c < t.length - 1 ? t[c + 1] : i,
                h = -(e.x - s.x),
                a = e.y - s.y,
                10 * (1 - c / (l - 1)) > 1 && 1,
                n = Math.sqrt(a * a + h * h),
                o = this._texture.height / 2,
                a /= n,
                h /= n,
                a *= o,
                h *= o,
                u[r] = i.x + a,
                u[r + 1] = i.y + h,
                u[r + 2] = i.x - a,
                u[r + 3] = i.y - h,
                s = i;
            this.containerUpdateTransform()
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.ObjectRenderer.call(this, t),
        this.indices = new Uint16Array(15e3);
        for (var e = 0, i = 0; e < 15e3; e += 6,
        i += 4)
            this.indices[e + 0] = i + 0,
            this.indices[e + 1] = i + 1,
            this.indices[e + 2] = i + 2,
            this.indices[e + 3] = i + 0,
            this.indices[e + 4] = i + 2,
            this.indices[e + 5] = i + 3;
        this.currentShader = null
    }
    var n = i(0)
      , o = i(27);
    (r.prototype = Object.create(n.ObjectRenderer.prototype)).constructor = r,
    t.exports = r,
    n.WebGLRenderer.registerPlugin("mesh", r),
    r.prototype.onContextChange = function() {}
    ,
    r.prototype.render = function(t) {
        t._vertexBuffer || this._initWebGL(t);
        var e = this.renderer
          , i = e.gl
          , r = t._texture.baseTexture
          , n = t.shader
          , s = t.drawMode === o.DRAW_MODES.TRIANGLE_MESH ? i.TRIANGLE_STRIP : i.TRIANGLES;
        e.blendModeManager.setBlendMode(t.blendMode),
        n = n ? n.shaders[i.id] || n.getShader(e) : e.shaderManager.plugins.meshShader,
        this.renderer.shaderManager.setShader(n),
        n.uniforms.translationMatrix.value = t.worldTransform.toArray(!0),
        n.uniforms.projectionMatrix.value = e.currentRenderTarget.projectionMatrix.toArray(!0),
        n.uniforms.alpha.value = t.worldAlpha,
        n.syncUniforms(),
        t.dirty ? (t.dirty = !1,
        i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer),
        i.bufferData(i.ARRAY_BUFFER, t.vertices, i.STATIC_DRAW),
        i.vertexAttribPointer(n.attributes.aVertexPosition, 2, i.FLOAT, !1, 0, 0),
        i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer),
        i.bufferData(i.ARRAY_BUFFER, t.uvs, i.STATIC_DRAW),
        i.vertexAttribPointer(n.attributes.aTextureCoord, 2, i.FLOAT, !1, 0, 0),
        i.activeTexture(i.TEXTURE0),
        r._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, r._glTextures[i.id]) : this.renderer.updateTexture(r),
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer),
        i.bufferData(i.ELEMENT_ARRAY_BUFFER, t.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer),
        i.bufferSubData(i.ARRAY_BUFFER, 0, t.vertices),
        i.vertexAttribPointer(n.attributes.aVertexPosition, 2, i.FLOAT, !1, 0, 0),
        i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer),
        i.vertexAttribPointer(n.attributes.aTextureCoord, 2, i.FLOAT, !1, 0, 0),
        i.activeTexture(i.TEXTURE0),
        r._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, r._glTextures[i.id]) : this.renderer.updateTexture(r),
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer),
        i.bufferSubData(i.ELEMENT_ARRAY_BUFFER, 0, t.indices)),
        i.drawElements(s, t.indices.length, i.UNSIGNED_SHORT, 0)
    }
    ,
    r.prototype._initWebGL = function(t) {
        var e = this.renderer.gl;
        t._vertexBuffer = e.createBuffer(),
        t._indexBuffer = e.createBuffer(),
        t._uvBuffer = e.createBuffer(),
        e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer),
        e.bufferData(e.ARRAY_BUFFER, t.vertices, e.DYNAMIC_DRAW),
        e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer),
        e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW),
        t.colors && (t._colorBuffer = e.createBuffer(),
        e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer),
        e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW)),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer),
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
    }
    ,
    r.prototype.flush = function() {}
    ,
    r.prototype.start = function() {
        this.currentShader = null
    }
    ,
    r.prototype.destroy = function() {
        n.ObjectRenderer.prototype.destroy.call(this)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.Shader.call(this, t, ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;", "}"].join("\n"), {
            alpha: {
                type: "1f",
                value: 0
            },
            translationMatrix: {
                type: "mat3",
                value: new Float32Array(9)
            },
            projectionMatrix: {
                type: "mat3",
                value: new Float32Array(9)
            }
        }, {
            aVertexPosition: 0,
            aTextureCoord: 0
        })
    }
    var n = i(0);
    (r.prototype = Object.create(n.Shader.prototype)).constructor = r,
    t.exports = r,
    n.ShaderManager.registerPlugin("meshShader", r)
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        h.call(this),
        e = e || 10,
        this.baseUrl = t || "",
        this.progress = 0,
        this.loading = !1,
        this._progressChunk = 0,
        this._beforeMiddleware = [],
        this._afterMiddleware = [],
        this._boundLoadResource = this._loadResource.bind(this),
        this._boundOnLoad = this._onLoad.bind(this),
        this._buffer = [],
        this._numToLoad = 0,
        this._queue = o.queue(this._boundLoadResource, e),
        this.resources = {}
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , o = i(32)
      , s = i(68)
      , a = i(39)
      , h = i(2);
    (r.prototype = Object.create(h.prototype)).constructor = r,
    t.exports = r,
    r.prototype.add = r.prototype.enqueue = function(t, e, i, r) {
        if (Array.isArray(t)) {
            for (var o = 0; o < t.length; ++o)
                this.add(t[o]);
            return this
        }
        if ("object" === (void 0 === t ? "undefined" : n(t)) && (r = e || t.callback || t.onComplete,
        i = t,
        e = t.url,
        t = t.name || t.key || t.url),
        "string" != typeof e && (r = i,
        i = e,
        e = t),
        "string" != typeof e)
            throw new Error("No url passed to add resource to loader.");
        if ("function" == typeof i && (r = i,
        i = null),
        this.resources[t])
            throw new Error('Resource with name "' + t + '" already exists.');
        return e = this._handleBaseUrl(e),
        this.resources[t] = new a(t,e,i),
        "function" == typeof r && this.resources[t].once("afterMiddleware", r),
        this._numToLoad++,
        this._queue.started ? (this._queue.push(this.resources[t]),
        this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]),
        this._progressChunk = 100 / this._buffer.length),
        this
    }
    ,
    r.prototype._handleBaseUrl = function(t) {
        var e = s.parse(t);
        return e.protocol || !e.pathname || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t
    }
    ,
    r.prototype.before = r.prototype.pre = function(t) {
        return this._beforeMiddleware.push(t),
        this
    }
    ,
    r.prototype.after = r.prototype.use = function(t) {
        return this._afterMiddleware.push(t),
        this
    }
    ,
    r.prototype.reset = function() {
        this.progress = 0,
        this.loading = !1,
        this._progressChunk = 0,
        this._buffer.length = 0,
        this._numToLoad = 0,
        this._queue.kill(),
        this._queue.started = !1,
        this.resources = {}
    }
    ,
    r.prototype.load = function(t) {
        if ("function" == typeof t && this.once("complete", t),
        this._queue.started)
            return this;
        this.emit("start", this);
        for (var e = 0; e < this._buffer.length; ++e)
            this._queue.push(this._buffer[e]);
        return this._buffer.length = 0,
        this
    }
    ,
    r.prototype._loadResource = function(t, e) {
        var i = this;
        t._dequeue = e,
        this._runMiddleware(t, this._beforeMiddleware, function() {
            t.load(i._boundOnLoad)
        })
    }
    ,
    r.prototype._onComplete = function() {
        this.emit("complete", this, this.resources)
    }
    ,
    r.prototype._onLoad = function(t) {
        this.progress += this._progressChunk,
        this.emit("progress", this, t),
        this._runMiddleware(t, this._afterMiddleware, function() {
            t.emit("afterMiddleware", t),
            this._numToLoad--,
            t.error ? this.emit("error", t.error, this, t) : this.emit("load", this, t),
            0 === this._numToLoad && (this.progress = 100,
            this._onComplete())
        }),
        t._dequeue()
    }
    ,
    r.prototype._runMiddleware = function(t, e, i) {
        var r = this;
        o.eachSeries(e, function(e, i) {
            e.call(r, t, i)
        }, i.bind(this, t))
    }
    ,
    r.LOAD_TYPE = a.LOAD_TYPE,
    r.XHR_READY_STATE = a.XHR_READY_STATE,
    r.XHR_RESPONSE_TYPE = a.XHR_RESPONSE_TYPE
}
, function(t, e, i) {
    "use strict";
    (function(t, r) {
        var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        !function(s) {
            function a(t) {
                throw RangeError(L[t])
            }
            function h(t, e) {
                for (var i = t.length, r = []; i--; )
                    r[i] = e(t[i]);
                return r
            }
            function u(t, e) {
                var i = t.split("@")
                  , r = "";
                return i.length > 1 && (r = i[0] + "@",
                t = i[1]),
                t = t.replace(F, "."),
                r + h(t.split("."), e).join(".")
            }
            function l(t) {
                for (var e, i, r = [], n = 0, o = t.length; n < o; )
                    (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (i = t.charCodeAt(n++))) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e),
                    n--) : r.push(e);
                return r
            }
            function c(t) {
                return h(t, function(t) {
                    var e = "";
                    return t > 65535 && (t -= 65536,
                    e += N(t >>> 10 & 1023 | 55296),
                    t = 56320 | 1023 & t),
                    e += N(t)
                }).join("")
            }
            function p(t) {
                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : w
            }
            function d(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }
            function f(t, e, i) {
                var r = 0;
                for (t = i ? I(t / C) : t >> 1,
                t += I(t / e); t > B * S >> 1; r += w)
                    t = I(t / B);
                return I(r + (B + 1) * t / (t + A))
            }
            function v(t) {
                var e, i, r, n, o, s, h, u, l, d, v = [], y = t.length, g = 0, m = R, x = M;
                for ((i = t.lastIndexOf(O)) < 0 && (i = 0),
                r = 0; r < i; ++r)
                    t.charCodeAt(r) >= 128 && a("not-basic"),
                    v.push(t.charCodeAt(r));
                for (n = i > 0 ? i + 1 : 0; n < y; ) {
                    for (o = g,
                    s = 1,
                    h = w; n >= y && a("invalid-input"),
                    ((u = p(t.charCodeAt(n++))) >= w || u > I((T - g) / s)) && a("overflow"),
                    g += u * s,
                    l = h <= x ? E : h >= x + S ? S : h - x,
                    !(u < l); h += w)
                        d = w - l,
                        s > I(T / d) && a("overflow"),
                        s *= d;
                    x = f(g - o, e = v.length + 1, 0 == o),
                    I(g / e) > T - m && a("overflow"),
                    m += I(g / e),
                    g %= e,
                    v.splice(g++, 0, m)
                }
                return c(v)
            }
            function y(t) {
                var e, i, r, n, o, s, h, u, c, p, v, y, g, m, x, _ = [];
                for (y = (t = l(t)).length,
                e = R,
                i = 0,
                o = M,
                s = 0; s < y; ++s)
                    (v = t[s]) < 128 && _.push(N(v));
                for (r = n = _.length,
                n && _.push(O); r < y; ) {
                    for (h = T,
                    s = 0; s < y; ++s)
                        (v = t[s]) >= e && v < h && (h = v);
                    for (h - e > I((T - i) / (g = r + 1)) && a("overflow"),
                    i += (h - e) * g,
                    e = h,
                    s = 0; s < y; ++s)
                        if ((v = t[s]) < e && ++i > T && a("overflow"),
                        v == e) {
                            for (u = i,
                            c = w; p = c <= o ? E : c >= o + S ? S : c - o,
                            !(u < p); c += w)
                                x = u - p,
                                m = w - p,
                                _.push(N(d(p + x % m, 0))),
                                u = I(x / m);
                            _.push(N(d(u, 0))),
                            o = f(i, g, r == n),
                            i = 0,
                            ++r
                        }
                    ++i,
                    ++e
                }
                return _.join("")
            }
            var g = "object" == o(e) && e && !e.nodeType && e
              , m = "object" == o(t) && t && !t.nodeType && t
              , x = "object" == (void 0 === r ? "undefined" : o(r)) && r;
            x.global !== x && x.window !== x && x.self !== x || (s = x);
            var _, b, T = 2147483647, w = 36, E = 1, S = 26, A = 38, C = 700, M = 72, R = 128, O = "-", P = /^xn--/, D = /[^\x20-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, L = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, B = w - E, I = Math.floor, N = String.fromCharCode;
            if (_ = {
                version: "1.3.2",
                ucs2: {
                    decode: l,
                    encode: c
                },
                decode: v,
                encode: y,
                toASCII: function(t) {
                    return u(t, function(t) {
                        return D.test(t) ? "xn--" + y(t) : t
                    })
                },
                toUnicode: function(t) {
                    return u(t, function(t) {
                        return P.test(t) ? v(t.slice(4).toLowerCase()) : t
                    })
                }
            },
            "object" == o(i(69)) && i(69))
                void 0 !== (n = function() {
                    return _
                }
                .call(e, i, e, t)) && (t.exports = n);
            else if (g && m)
                if (t.exports == g)
                    m.exports = _;
                else
                    for (b in _)
                        _.hasOwnProperty(b) && (g[b] = _[b]);
            else
                s.punycode = _
        }(void 0)
    }
    ).call(e, i(47)(t), i(17))
}
, function(t, e, i) {
    "use strict";
    e.decode = e.parse = i(180),
    e.encode = e.stringify = i(181)
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, i, o) {
        e = e || "&",
        i = i || "=";
        var s = {};
        if ("string" != typeof t || 0 === t.length)
            return s;
        var a = /\+/g;
        t = t.split(e);
        var h = 1e3;
        o && "number" == typeof o.maxKeys && (h = o.maxKeys);
        var u = t.length;
        h > 0 && u > h && (u = h);
        for (var l = 0; l < u; ++l) {
            var c, p, d, f, v = t[l].replace(a, "%20"), y = v.indexOf(i);
            y >= 0 ? (c = v.substr(0, y),
            p = v.substr(y + 1)) : (c = v,
            p = ""),
            d = decodeURIComponent(c),
            f = decodeURIComponent(p),
            r(s, d) ? n(s[d]) ? s[d].push(f) : s[d] = [s[d], f] : s[d] = f
        }
        return s
    }
    ;
    var n = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        if (t.map)
            return t.map(e);
        for (var i = [], r = 0; r < t.length; r++)
            i.push(e(t[r], r));
        return i
    }
    var n = function(t) {
        switch (typeof t) {
        case "string":
            return t;
        case "boolean":
            return t ? "true" : "false";
        case "number":
            return isFinite(t) ? t : "";
        default:
            return ""
        }
    };
    t.exports = function(t, e, i, a) {
        return e = e || "&",
        i = i || "=",
        null === t && (t = void 0),
        "object" == typeof t ? r(s(t), function(s) {
            var a = encodeURIComponent(n(s)) + i;
            return o(t[s]) ? r(t[s], function(t) {
                return a + encodeURIComponent(n(t))
            }).join(e) : a + encodeURIComponent(n(t[s]))
        }).join(e) : a ? encodeURIComponent(n(a)) + i + encodeURIComponent(n(t)) : ""
    }
    ;
    var o = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
      , s = Object.keys || function(t) {
        var e = [];
        for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
        return e
    }
}
, function(t, e, i) {
    "use strict";
    var r = {};
    t.exports = function() {
        return function(t, e) {
            r[t.url] ? (t.data = r[t.url],
            t.complete()) : t.once("complete", function() {
                r[this.url] = this.data
            }),
            e()
        }
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(39)
      , n = i(184)
      , o = window.URL || window.webkitURL;
    t.exports = function() {
        return function(t, e) {
            if (!t.data)
                return e();
            if (t.xhr && t.xhrType === r.XHR_RESPONSE_TYPE.BLOB)
                if (window.Blob && "string" != typeof t.data) {
                    if (0 === t.data.type.indexOf("image")) {
                        var i = o.createObjectURL(t.data);
                        t.blob = t.data,
                        t.data = new Image,
                        t.data.src = i,
                        t.isImage = !0,
                        t.data.onload = function() {
                            o.revokeObjectURL(i),
                            t.data.onload = null,
                            e()
                        }
                    }
                } else {
                    var s = t.xhr.getResponseHeader("content-type");
                    s && 0 === s.indexOf("image") && (t.data = new Image,
                    t.data.src = "data:" + s + ";base64," + n.encodeBinary(t.xhr.responseText),
                    t.isImage = !0,
                    t.data.onload = function() {
                        t.data.onload = null,
                        e()
                    }
                    )
                }
            else
                e()
        }
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encodeBinary: function(t) {
            for (var e, i = "", r = new Array(4), n = 0, o = 0; n < t.length; ) {
                for (e = new Array(3),
                o = 0; o < e.length; o++)
                    n < t.length ? e[o] = 255 & t.charCodeAt(n++) : e[o] = 0;
                switch (r[0] = e[0] >> 2,
                r[1] = (3 & e[0]) << 4 | e[1] >> 4,
                r[2] = (15 & e[1]) << 2 | e[2] >> 6,
                r[3] = 63 & e[2],
                n - (t.length - 1)) {
                case 2:
                    r[3] = 64,
                    r[2] = 64;
                    break;
                case 1:
                    r[3] = 64
                }
                for (o = 0; o < r.length; o++)
                    i += this._keyStr.charAt(r[o])
            }
            return i
        }
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        bitmapFontParser: i(186),
        spritesheetParser: i(187),
        textureParser: i(188)
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        var i = {}
          , r = t.data.getElementsByTagName("info")[0]
          , n = t.data.getElementsByTagName("common")[0];
        i.font = r.getAttribute("face"),
        i.size = parseInt(r.getAttribute("size"), 10),
        i.lineHeight = parseInt(n.getAttribute("lineHeight"), 10),
        i.chars = {};
        for (var a = t.data.getElementsByTagName("char"), h = 0; h < a.length; h++) {
            var u = parseInt(a[h].getAttribute("id"), 10)
              , l = new o.Rectangle(parseInt(a[h].getAttribute("x"), 10) + e.frame.x,parseInt(a[h].getAttribute("y"), 10) + e.frame.y,parseInt(a[h].getAttribute("width"), 10),parseInt(a[h].getAttribute("height"), 10));
            i.chars[u] = {
                xOffset: parseInt(a[h].getAttribute("xoffset"), 10),
                yOffset: parseInt(a[h].getAttribute("yoffset"), 10),
                xAdvance: parseInt(a[h].getAttribute("xadvance"), 10),
                kerning: {},
                texture: new o.Texture(e.baseTexture,l)
            }
        }
        var c = t.data.getElementsByTagName("kerning");
        for (h = 0; h < c.length; h++) {
            var p = parseInt(c[h].getAttribute("first"), 10)
              , d = parseInt(c[h].getAttribute("second"), 10)
              , f = parseInt(c[h].getAttribute("amount"), 10);
            i.chars[d] && (i.chars[d].kerning[p] = f)
        }
        t.bitmapFont = i,
        s.BitmapText.fonts[i.font] = i
    }
    var n = i(38).Resource
      , o = i(0)
      , s = i(61)
      , a = i(70);
    t.exports = function() {
        return function(t, e) {
            if (!t.data || !t.isXml)
                return e();
            if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face"))
                return e();
            var i = a(t.url);
            "." === i && (i = ""),
            this.baseUrl && i && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/"),
            i = i.replace(this.baseUrl, "")),
            i && "/" !== i.charAt(i.length - 1) && (i += "/");
            var s = i + t.data.getElementsByTagName("page")[0].getAttribute("file");
            if (o.utils.TextureCache[s])
                r(t, o.utils.TextureCache[s]),
                e();
            else {
                var h = {
                    crossOrigin: t.crossOrigin,
                    loadType: n.LOAD_TYPE.IMAGE,
                    metadata: t.metadata.imageMetadata
                };
                this.add(t.name + "_image", s, h, function(i) {
                    r(t, i.texture),
                    e()
                })
            }
        }
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(38).Resource
      , n = i(70)
      , o = i(0)
      , s = i(32)
      , a = 1e3;
    t.exports = function() {
        return function(t, e) {
            var i = t.name + "_image";
            if (!t.data || !t.isJson || !t.data.frames || this.resources[i])
                return e();
            var h = {
                crossOrigin: t.crossOrigin,
                loadType: r.LOAD_TYPE.IMAGE,
                metadata: t.metadata.imageMetadata
            }
              , u = n(t.url.replace(this.baseUrl, ""));
            this.add(i, u + "/" + t.data.meta.image, h, function(i) {
                function r(e, r) {
                    for (var s = e; s - e < r && s < h.length; ) {
                        var a = n[h[s]]
                          , l = a.frame;
                        if (l) {
                            var c = null
                              , p = null;
                            if (c = a.rotated ? new o.Rectangle(l.x,l.y,l.h,l.w) : new o.Rectangle(l.x,l.y,l.w,l.h),
                            a.trimmed && (p = new o.Rectangle(a.spriteSourceSize.x / u,a.spriteSourceSize.y / u,a.sourceSize.w / u,a.sourceSize.h / u)),
                            a.rotated) {
                                var d = c.width;
                                c.width = c.height,
                                c.height = d
                            }
                            c.x /= u,
                            c.y /= u,
                            c.width /= u,
                            c.height /= u,
                            t.textures[h[s]] = new o.Texture(i.texture.baseTexture,c,c.clone(),p,a.rotated),
                            o.utils.TextureCache[h[s]] = t.textures[h[s]]
                        }
                        s++
                    }
                }
                t.textures = {};
                var n = t.data.frames
                  , h = Object.keys(n)
                  , u = o.utils.getResolutionOfUrl(t.url)
                  , l = 0;
                h.length <= a ? (r(0, a),
                e()) : s.whilst(function() {
                    return l * a < h.length
                }, function(t) {
                    r(l * a, a),
                    l++,
                    setTimeout(t, 0)
                }, e)
            })
        }
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(0);
    t.exports = function() {
        return function(t, e) {
            if (t.data && t.isImage) {
                var i = new r.BaseTexture(t.data,null,r.utils.getResolutionOfUrl(t.url));
                i.imageUrl = t.url,
                t.texture = new r.Texture(i),
                r.utils.BaseTextureCache[t.url] = i,
                r.utils.TextureCache[t.url] = t.texture
            }
            e()
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r() {
        n.call(this)
    }
    var n = i(72)
      , o = i(71);
    (r.prototype = Object.create(n.prototype)).constructor = r,
    r.prototype.save = function() {
        o.set("savedata", this.data)
    }
    ,
    r.prototype.load = function() {
        var t, e, i, r, n = o.get("savedata", this.defaultVal);
        for (t = 0; t < this.keys.length; t++)
            i = this.keys[t],
            r = n[i],
            e = !1,
            this.defaultVal[i]instanceof Array && r instanceof Array && r.length >= this.defaultVal[i].length ? e = !0 : ("boolean" == typeof this.defaultVal[i] && "boolean" == typeof r || "number" == typeof this.defaultVal[i] && "number" == typeof r || "string" == typeof this.defaultVal[i] && "string" == typeof r) && (e = !0),
            this.set(i, e ? n[i] : this.defaultVal[i])
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    var r;
    !function() {
        var n = null
          , o = !0
          , s = !1;
        if (function() {
            try {
                "undefined" != typeof AudioContext ? n = new AudioContext : "undefined" != typeof webkitAudioContext ? n = new webkitAudioContext : o = !1
            } catch (t) {
                o = !1
            }
            if (!o)
                if ("undefined" != typeof Audio)
                    try {
                        new Audio
                    } catch (t) {
                        s = !0
                    }
                else
                    s = !0;
            (new Audio).muted && (s = !0)
        }(),
        o) {
            var a = void 0 === n.createGain ? n.createGainNode() : n.createGain();
            a.gain.value = 1,
            a.connect(n.destination)
        }
        var h = function() {
            this.init()
        };
        h.prototype = {
            init: function() {
                var t = this || u;
                return t._codecs = {},
                t._howls = [],
                t._muted = !1,
                t._volume = 1,
                t.iOSAutoEnable = !0,
                t.noAudio = s,
                t.usingWebAudio = o,
                t.ctx = n,
                s || t._setupCodecs(),
                t
            },
            volume: function(t) {
                var e = this || u;
                if (void 0 !== (t = parseFloat(t)) && t >= 0 && t <= 1) {
                    e._volume = t,
                    o && (a.gain.value = t);
                    for (var i = 0; i < e._howls.length; i++)
                        if (!e._howls[i]._webAudio)
                            for (var r = e._howls[i]._getSoundIds(), n = 0; n < r.length; n++) {
                                var s = e._howls[i]._soundById(r[n]);
                                s && s._node && (s._node.volume = s._volume * t)
                            }
                    return e
                }
                return e._volume
            },
            mute: function(t) {
                var e = this || u;
                e._muted = t,
                o && (a.gain.value = t ? 0 : e._volume);
                for (var i = 0; i < e._howls.length; i++)
                    if (!e._howls[i]._webAudio)
                        for (var r = e._howls[i]._getSoundIds(), n = 0; n < r.length; n++) {
                            var s = e._howls[i]._soundById(r[n]);
                            s && s._node && (s._node.muted = !!t || s._muted)
                        }
                return e
            },
            unload: function() {
                for (var t = this || u, e = t._howls.length - 1; e >= 0; e--)
                    t._howls[e].unload();
                return t
            },
            codecs: function(t) {
                return (this || u)._codecs[t]
            },
            _setupCodecs: function() {
                var t = this || u
                  , e = new Audio
                  , i = e.canPlayType("audio/mpeg;").replace(/^no$/, "")
                  , r = /OPR\//.test(navigator.userAgent);
                return t._codecs = {
                    mp3: !(r || !i && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    mpeg: !!i,
                    opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    webm: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                },
                t
            },
            _enableiOSAudio: function() {
                var t = this || u;
                if (!n || !t._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    t._iOSEnabled = !1;
                    return document.addEventListener("touchend", function e() {
                        var i = n.createBuffer(1, 1, 22050)
                          , r = n.createBufferSource();
                        r.buffer = i,
                        r.connect(n.destination),
                        void 0 === r.start ? r.noteOn(0) : r.start(0),
                        setTimeout(function() {
                            r.playbackState !== r.PLAYING_STATE && r.playbackState !== r.FINISHED_STATE || (t._iOSEnabled = !0,
                            t.iOSAutoEnable = !1,
                            document.removeEventListener("touchend", e, !1))
                        }, 0)
                    }, !1),
                    t
                }
            }
        };
        var u = new h
          , l = function(t) {
            var e = this;
            t.src && 0 !== t.src.length ? e.init(t) : console.error("An array of source files must be passed with any new Howl.")
        };
        l.prototype = {
            init: function(t) {
                var e = this;
                return e._autoplay = t.autoplay || !1,
                e._ext = t.ext || null,
                e._html5 = t.html5 || !1,
                e._muted = t.mute || !1,
                e._loop = t.loop || !1,
                e._pool = t.pool || 5,
                e._preload = "boolean" != typeof t.preload || t.preload,
                e._rate = t.rate || 1,
                e._sprite = t.sprite || {},
                e._src = "string" != typeof t.src ? t.src : [t.src],
                e._volume = void 0 !== t.volume ? t.volume : 1,
                e._duration = 0,
                e._loaded = !1,
                e._sounds = [],
                e._endTimers = {},
                e._onend = t.onend ? [{
                    fn: t.onend
                }] : [],
                e._onfaded = t.onfaded ? [{
                    fn: t.onfaded
                }] : [],
                e._onload = t.onload ? [{
                    fn: t.onload
                }] : [],
                e._onloaderror = t.onloaderror ? [{
                    fn: t.onloaderror
                }] : [],
                e._onpause = t.onpause ? [{
                    fn: t.onpause
                }] : [],
                e._onplay = t.onplay ? [{
                    fn: t.onplay
                }] : [],
                e._onstop = t.onstop ? [{
                    fn: t.onstop
                }] : [],
                e._webAudio = o && !e._html5,
                void 0 !== n && n && u.iOSAutoEnable && u._enableiOSAudio(),
                u._howls.push(e),
                e._preload && e.load(),
                e
            },
            load: function() {
                var t = this
                  , e = null;
                {
                    if (!s) {
                        "string" == typeof t._src && (t._src = [t._src]);
                        for (var i = 0; i < t._src.length; i++) {
                            var r, n;
                            if (t._ext && t._ext[i] ? r = t._ext[i] : (n = t._src[i],
                            (r = /^data:audio\/([^;,]+);/i.exec(n)) || (r = /\.([^.]+)$/.exec(n.split("?", 1)[0])),
                            r && (r = r[1].toLowerCase())),
                            u.codecs(r)) {
                                e = t._src[i];
                                break
                            }
                        }
                        return e ? (t._src = e,
                        new c(t),
                        t._webAudio && d(t),
                        t) : void t._emit("loaderror")
                    }
                    t._emit("loaderror")
                }
            },
            play: function(t) {
                var e = this
                  , i = arguments
                  , r = null;
                if ("number" == typeof t)
                    r = t,
                    t = null;
                else if (void 0 === t) {
                    t = "__default";
                    for (var o = 0, s = 0; s < e._sounds.length; s++)
                        e._sounds[s]._paused && !e._sounds[s]._ended && (o++,
                        r = e._sounds[s]._id);
                    1 === o ? t = null : r = null
                }
                var a = r ? e._soundById(r) : e._inactiveSound();
                if (!a)
                    return null;
                if (r && !t && (t = a._sprite || "__default"),
                !e._loaded && !e._sprite[t])
                    return e.once("load", function() {
                        e.play(e._soundById(a._id) ? a._id : void 0)
                    }),
                    a._id;
                if (r && !a._paused)
                    return a._id;
                var h = a._seek > 0 ? a._seek : e._sprite[t][0] / 1e3
                  , l = (e._sprite[t][0] + e._sprite[t][1]) / 1e3 - h
                  , c = 1e3 * l / Math.abs(a._rate);
                e._endTimers[a._id] = setTimeout(e._ended.bind(e, a), c),
                a._paused = !1,
                a._ended = !1,
                a._sprite = t,
                a._seek = h,
                a._start = e._sprite[t][0] / 1e3,
                a._stop = (e._sprite[t][0] + e._sprite[t][1]) / 1e3,
                a._loop = !(!a._loop && !e._sprite[t][2]);
                var p = a._node;
                if (e._webAudio) {
                    var d = function() {
                        e._refreshBuffer(a);
                        var t = a._muted || e._muted ? 0 : a._volume * u.volume();
                        p.gain.setValueAtTime(t, n.currentTime),
                        a._playStart = n.currentTime,
                        void 0 === p.bufferSource.start ? a._loop ? p.bufferSource.noteGrainOn(0, h, 86400) : p.bufferSource.noteGrainOn(0, h, l) : a._loop ? p.bufferSource.start(0, h, 86400) : p.bufferSource.start(0, h, l),
                        e._endTimers[a._id] || (e._endTimers[a._id] = setTimeout(e._ended.bind(e, a), c)),
                        i[1] || setTimeout(function() {
                            e._emit("play", a._id)
                        }, 0)
                    };
                    e._loaded ? d() : (e.once("load", d),
                    e._clearTimer(a._id))
                } else {
                    var f = function() {
                        p.currentTime = h,
                        p.muted = a._muted || e._muted || u._muted || p.muted,
                        p.volume = a._volume * u.volume(),
                        p.playbackRate = a._rate,
                        setTimeout(function() {
                            p.play(),
                            i[1] || e._emit("play", a._id)
                        }, 0)
                    };
                    if (4 === p.readyState || !p.readyState && navigator.isCocoonJS)
                        f();
                    else {
                        p.addEventListener("canplaythrough", function t() {
                            e._endTimers[a._id] = setTimeout(e._ended.bind(e, a), c),
                            f(),
                            p.removeEventListener("canplaythrough", t, !1)
                        }, !1),
                        e._clearTimer(a._id)
                    }
                }
                return a._id
            },
            pause: function(t) {
                var e = this;
                if (!e._loaded)
                    return e.once("play", function() {
                        e.pause(t)
                    }),
                    e;
                for (var i = e._getSoundIds(t), r = 0; r < i.length; r++) {
                    e._clearTimer(i[r]);
                    var n = e._soundById(i[r]);
                    if (n && !n._paused) {
                        if (n._seek = e.seek(i[r]),
                        n._paused = !0,
                        e._stopFade(i[r]),
                        e._webAudio) {
                            if (!n._node.bufferSource)
                                return e;
                            void 0 === n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0),
                            n._node.bufferSource = null
                        } else
                            isNaN(n._node.duration) || n._node.pause();
                        arguments[1] || e._emit("pause", n._id)
                    }
                }
                return e
            },
            stop: function(t) {
                var e = this;
                if (!e._loaded)
                    return void 0 !== e._sounds[0]._sprite && e.once("play", function() {
                        e.stop(t)
                    }),
                    e;
                for (var i = e._getSoundIds(t), r = 0; r < i.length; r++) {
                    e._clearTimer(i[r]);
                    var n = e._soundById(i[r]);
                    if (n && !n._paused) {
                        if (n._seek = n._start || 0,
                        n._paused = !0,
                        n._ended = !0,
                        e._stopFade(i[r]),
                        e._webAudio && n._node) {
                            if (!n._node.bufferSource)
                                return e;
                            void 0 === n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0),
                            n._node.bufferSource = null
                        } else
                            n._node && !isNaN(n._node.duration) && (n._node.pause(),
                            n._node.currentTime = n._start || 0);
                        e._emit("stop", n._id)
                    }
                }
                return e
            },
            mute: function(t, e) {
                var i = this;
                if (!i._loaded)
                    return i.once("play", function() {
                        i.mute(t, e)
                    }),
                    i;
                if (void 0 === e) {
                    if ("boolean" != typeof t)
                        return i._muted;
                    i._muted = t
                }
                for (var r = i._getSoundIds(e), o = 0; o < r.length; o++) {
                    var s = i._soundById(r[o]);
                    s && (s._muted = t,
                    i._webAudio && s._node ? s._node.gain.setValueAtTime(t ? 0 : s._volume * u.volume(), n.currentTime) : s._node && (s._node.muted = !!u._muted || t))
                }
                return i
            },
            volume: function() {
                var t, e, i = this, r = arguments;
                if (0 === r.length)
                    return i._volume;
                1 === r.length ? i._getSoundIds().indexOf(r[0]) >= 0 ? e = parseInt(r[0], 10) : t = parseFloat(r[0]) : r.length >= 2 && (t = parseFloat(r[0]),
                e = parseInt(r[1], 10));
                var o;
                if (!(void 0 !== t && t >= 0 && t <= 1))
                    return (o = e ? i._soundById(e) : i._sounds[0]) ? o._volume : 0;
                if (!i._loaded)
                    return i.once("play", function() {
                        i.volume.apply(i, r)
                    }),
                    i;
                void 0 === e && (i._volume = t),
                e = i._getSoundIds(e);
                for (var s = 0; s < e.length; s++)
                    (o = i._soundById(e[s])) && (o._volume = t,
                    r[2] || i._stopFade(e[s]),
                    i._webAudio && o._node && !o._muted ? o._node.gain.setValueAtTime(t * u.volume(), n.currentTime) : o._node && !o._muted && (o._node.volume = t * u.volume()));
                return i
            },
            fade: function(t, e, i, r) {
                var o = this;
                if (!o._loaded)
                    return o.once("play", function() {
                        o.fade(t, e, i, r)
                    }),
                    o;
                o.volume(t, r);
                for (var s = o._getSoundIds(r), a = 0; a < s.length; a++) {
                    var h = o._soundById(s[a]);
                    if (h)
                        if (o._webAudio && !h._muted) {
                            var u = n.currentTime
                              , l = u + i / 1e3;
                            h._volume = t,
                            h._node.gain.setValueAtTime(t, u),
                            h._node.gain.linearRampToValueAtTime(e, l),
                            h._timeout = setTimeout(function(t, i) {
                                delete i._timeout,
                                setTimeout(function() {
                                    i._volume = e,
                                    o._emit("faded", t)
                                }, l - n.currentTime > 0 ? Math.ceil(1e3 * (l - n.currentTime)) : 0)
                            }
                            .bind(o, s[a], h), i)
                        } else {
                            var c = Math.abs(t - e)
                              , p = t > e ? "out" : "in"
                              , d = i / (c / .01);
                            !function() {
                                var i = t;
                                h._interval = setInterval(function(t, r) {
                                    i += "in" === p ? .01 : -.01,
                                    i = Math.max(0, i),
                                    i = Math.min(1, i),
                                    i = Math.round(100 * i) / 100,
                                    o.volume(i, t, !0),
                                    i === e && (clearInterval(r._interval),
                                    delete r._interval,
                                    o._emit("faded", t))
                                }
                                .bind(o, s[a], h), d)
                            }()
                        }
                }
                return o
            },
            _stopFade: function(t) {
                var e = this
                  , i = e._soundById(t);
                return i._interval ? (clearInterval(i._interval),
                delete i._interval,
                e._emit("faded", t)) : i._timeout && (clearTimeout(i._timeout),
                delete i._timeout,
                i._node.gain.cancelScheduledValues(n.currentTime),
                e._emit("faded", t)),
                e
            },
            loop: function() {
                var t, e, i, r = this, n = arguments;
                if (0 === n.length)
                    return r._loop;
                if (1 === n.length) {
                    if ("boolean" != typeof n[0])
                        return !!(i = r._soundById(parseInt(n[0], 10))) && i._loop;
                    t = n[0],
                    r._loop = t
                } else
                    2 === n.length && (t = n[0],
                    e = parseInt(n[1], 10));
                for (var o = r._getSoundIds(e), s = 0; s < o.length; s++)
                    (i = r._soundById(o[s])) && (i._loop = t,
                    r._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = t));
                return r
            },
            rate: function() {
                var t, e, i = this, r = arguments;
                0 === r.length ? e = i._sounds[0]._id : 1 === r.length ? i._getSoundIds().indexOf(r[0]) >= 0 ? e = parseInt(r[0], 10) : t = parseFloat(r[0]) : 2 === r.length && (t = parseFloat(r[0]),
                e = parseInt(r[1], 10));
                var n;
                if ("number" != typeof t)
                    return (n = i._soundById(e)) ? n._rate : i._rate;
                if (!i._loaded)
                    return i.once("load", function() {
                        i.rate.apply(i, r)
                    }),
                    i;
                void 0 === e && (i._rate = t),
                e = i._getSoundIds(e);
                for (var o = 0; o < e.length; o++)
                    if (n = i._soundById(e[o])) {
                        n._rate = t,
                        i._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.value = t : n._node && (n._node.playbackRate = t);
                        var s = i.seek(e[o])
                          , a = 1e3 * ((i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - s) / Math.abs(n._rate);
                        i._clearTimer(e[o]),
                        i._endTimers[e[o]] = setTimeout(i._ended.bind(i, n), a)
                    }
                return i
            },
            seek: function() {
                var t, e, i = this, r = arguments;
                if (0 === r.length ? e = i._sounds[0]._id : 1 === r.length ? i._getSoundIds().indexOf(r[0]) >= 0 ? e = parseInt(r[0], 10) : (e = i._sounds[0]._id,
                t = parseFloat(r[0])) : 2 === r.length && (t = parseFloat(r[0]),
                e = parseInt(r[1], 10)),
                void 0 === e)
                    return i;
                if (!i._loaded)
                    return i.once("load", function() {
                        i.seek.apply(i, r)
                    }),
                    i;
                var o = i._soundById(e);
                if (o) {
                    if (!(t >= 0))
                        return i._webAudio ? o._seek + (i.playing(e) ? n.currentTime - o._playStart : 0) : o._node.currentTime;
                    var s = i.playing(e);
                    s && i.pause(e, !0),
                    o._seek = t,
                    i._clearTimer(e),
                    s && i.play(e, !0)
                }
                return i
            },
            playing: function(t) {
                var e = this
                  , i = e._soundById(t) || e._sounds[0];
                return !!i && !i._paused
            },
            duration: function() {
                return this._duration
            },
            unload: function() {
                for (var t = this, e = t._sounds, i = 0; i < e.length; i++) {
                    e[i]._paused || (t.stop(e[i]._id),
                    t._emit("end", e[i]._id)),
                    t._webAudio || (e[i]._node.src = "",
                    e[i]._node.removeEventListener("error", e[i]._errorFn, !1),
                    e[i]._node.removeEventListener("canplaythrough", e[i]._loadFn, !1)),
                    delete e[i]._node,
                    t._clearTimer(e[i]._id);
                    var r = u._howls.indexOf(t);
                    r >= 0 && u._howls.splice(r, 1)
                }
                return p && delete p[t._src],
                t = null,
                null
            },
            on: function(t, e, i, r) {
                var n = this
                  , o = n["_on" + t];
                return "function" == typeof e && o.push(r ? {
                    id: i,
                    fn: e,
                    once: r
                } : {
                    id: i,
                    fn: e
                }),
                n
            },
            off: function(t, e, i) {
                var r = this
                  , n = r["_on" + t];
                if (e) {
                    for (var o = 0; o < n.length; o++)
                        if (e === n[o].fn && i === n[o].id) {
                            n.splice(o, 1);
                            break
                        }
                } else
                    r["on" + t] = [];
                return r
            },
            once: function(t, e, i) {
                var r = this;
                return r.on(t, e, i, 1),
                r
            },
            _emit: function(t, e, i) {
                for (var r = this, n = r["_on" + t], o = 0; o < n.length; o++)
                    n[o].id && n[o].id !== e || (setTimeout(function(t) {
                        t.call(this, e, i)
                    }
                    .bind(r, n[o].fn), 0),
                    n[o].once && r.off(t, n[o].fn, n[o].id));
                return r
            },
            _ended: function(t) {
                var e = this
                  , i = t._sprite
                  , r = !(!t._loop && !e._sprite[i][2]);
                if (e._emit("end", t._id),
                !e._webAudio && r && e.stop(t._id).play(t._id),
                e._webAudio && r) {
                    e._emit("play", t._id),
                    t._seek = t._start || 0,
                    t._playStart = n.currentTime;
                    var o = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                    e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), o)
                }
                return e._webAudio && !r && (t._paused = !0,
                t._ended = !0,
                t._seek = t._start || 0,
                e._clearTimer(t._id),
                t._node.bufferSource = null),
                e._webAudio || r || e.stop(t._id),
                e
            },
            _clearTimer: function(t) {
                var e = this;
                return e._endTimers[t] && (clearTimeout(e._endTimers[t]),
                delete e._endTimers[t]),
                e
            },
            _soundById: function(t) {
                for (var e = this, i = 0; i < e._sounds.length; i++)
                    if (t === e._sounds[i]._id)
                        return e._sounds[i];
                return null
            },
            _inactiveSound: function() {
                var t = this;
                t._drain();
                for (var e = 0; e < t._sounds.length; e++)
                    if (t._sounds[e]._ended)
                        return t._sounds[e].reset();
                return new c(t)
            },
            _drain: function() {
                var t = this
                  , e = t._pool
                  , i = 0
                  , r = 0;
                if (!(t._sounds.length < e)) {
                    for (r = 0; r < t._sounds.length; r++)
                        t._sounds[r]._ended && i++;
                    for (r = t._sounds.length - 1; r >= 0; r--) {
                        if (i <= e)
                            return;
                        t._sounds[r]._ended && (t._webAudio && t._sounds[r]._node && t._sounds[r]._node.disconnect(0),
                        t._sounds.splice(r, 1),
                        i--)
                    }
                }
            },
            _getSoundIds: function(t) {
                var e = this;
                if (void 0 === t) {
                    for (var i = [], r = 0; r < e._sounds.length; r++)
                        i.push(e._sounds[r]._id);
                    return i
                }
                return [t]
            },
            _refreshBuffer: function(t) {
                var e = this;
                return t._node.bufferSource = n.createBufferSource(),
                t._node.bufferSource.buffer = p[e._src],
                t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node),
                t._node.bufferSource.loop = t._loop,
                t._loop && (t._node.bufferSource.loopStart = t._start || 0,
                t._node.bufferSource.loopEnd = t._stop),
                t._node.bufferSource.playbackRate.value = e._rate,
                e
            }
        };
        var c = function(t) {
            this._parent = t,
            this.init()
        };
        if (c.prototype = {
            init: function() {
                var t = this
                  , e = t._parent;
                return t._muted = e._muted,
                t._loop = e._loop,
                t._volume = e._volume,
                t._muted = e._muted,
                t._rate = e._rate,
                t._seek = 0,
                t._paused = !0,
                t._ended = !0,
                t._id = Math.round(Date.now() * Math.random()),
                e._sounds.push(t),
                t.create(),
                t
            },
            create: function() {
                var t = this
                  , e = t._parent
                  , i = u._muted || t._muted || t._parent._muted ? 0 : t._volume * u.volume();
                return e._webAudio ? (t._node = void 0 === n.createGain ? n.createGainNode() : n.createGain(),
                t._node.gain.setValueAtTime(i, n.currentTime),
                t._node.paused = !0,
                t._node.connect(a)) : (t._node = new Audio,
                t._errorFn = t._errorListener.bind(t),
                t._node.addEventListener("error", t._errorFn, !1),
                t._loadFn = t._loadListener.bind(t),
                t._node.addEventListener("canplaythrough", t._loadFn, !1),
                t._node.src = e._src,
                t._node.preload = "auto",
                t._node.volume = i,
                t._node.load()),
                t
            },
            reset: function() {
                var t = this
                  , e = t._parent;
                return t._muted = e._muted,
                t._loop = e._loop,
                t._volume = e._volume,
                t._muted = e._muted,
                t._rate = e._rate,
                t._seek = 0,
                t._paused = !0,
                t._ended = !0,
                t._sprite = null,
                t._id = Math.round(Date.now() * Math.random()),
                t
            },
            _errorListener: function() {
                var t = this;
                t._node.error && 4 === t._node.error.code && (u.noAudio = !0),
                t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0),
                t._node.removeEventListener("error", t._errorListener, !1)
            },
            _loadListener: function() {
                var t = this
                  , e = t._parent;
                e._duration = Math.ceil(10 * t._node.duration) / 10,
                0 === Object.keys(e._sprite).length && (e._sprite = {
                    __default: [0, 1e3 * e._duration]
                }),
                e._loaded || (e._loaded = !0,
                e._emit("load")),
                e._autoplay && e.play(),
                t._node.removeEventListener("canplaythrough", t._loadFn, !1)
            }
        },
        o)
            var p = {}
              , d = function(t) {
                var e = t._src;
                if (p[e])
                    return t._duration = p[e].duration,
                    void y(t);
                if (/^data:[^;]+;base64,/.test(e)) {
                    window.atob = window.atob || function(t) {
                        for (var e, i, r = String(t).replace(/=+$/, ""), n = 0, o = 0, s = ""; i = r.charAt(o++); ~i && (e = n % 4 ? 64 * e + i : i,
                        n++ % 4) ? s += String.fromCharCode(255 & e >> (-2 * n & 6)) : 0)
                            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
                        return s
                    }
                    ;
                    for (var i = atob(e.split(",")[1]), r = new Uint8Array(i.length), n = 0; n < i.length; ++n)
                        r[n] = i.charCodeAt(n);
                    v(r.buffer, t)
                } else {
                    var o = new XMLHttpRequest;
                    o.open("GET", e, !0),
                    o.responseType = "arraybuffer",
                    o.onload = function() {
                        v(o.response, t)
                    }
                    ,
                    o.onerror = function() {
                        t._webAudio && (t._html5 = !0,
                        t._webAudio = !1,
                        t._sounds = [],
                        delete p[e],
                        t.load())
                    }
                    ,
                    f(o)
                }
            }
              , f = function(t) {
                try {
                    t.send()
                } catch (e) {
                    t.onerror()
                }
            }
              , v = function(t, e) {
                n.decodeAudioData(t, function(t) {
                    t && (p[e._src] = t,
                    y(e, t))
                }, function() {
                    e._emit("loaderror")
                })
            }
              , y = function(t, e) {
                e && !t._duration && (t._duration = e.duration),
                0 === Object.keys(t._sprite).length && (t._sprite = {
                    __default: [0, 1e3 * t._duration]
                }),
                t._loaded || (t._loaded = !0,
                t._emit("load")),
                t._autoplay && t.play()
            };
        void 0 !== (r = function() {
            return {
                Howler: u,
                Howl: l
            }
        }
        .call(e, i, e, t)) && (t.exports = r),
        e.Howler = u,
        e.Howl = l,
        "undefined" != typeof window && (window.HowlerGlobal = h,
        window.Howler = u,
        window.Howl = l,
        window.Sound = c)
    }()
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = r(i(8))
      , h = r(i(6))
      , u = r(i(5))
      , l = r(i(11))
      , c = r(i(10))
      , p = 200
      , d = 20
      , f = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            return i.barBg = (new l.default.Graphics).addTo(i.stage),
            i.barBg.beginFill(6248271),
            i.barBg.drawRect(0, .5 * -d, p, d),
            i.barBg.endFill(),
            i.bar = (new l.default.Graphics).addTo(i.stage),
            i.bar.beginFill(16777215),
            i.bar.drawRect(0, .5 * -d, 1, d),
            i.bar.endFill(),
            i.barBg.position = i.bar.position.set(.5 * a.default.width - .5 * p, .5 * a.default.height),
            i
        }
        return s(e, t),
        e.prototype.awake = function() {
            var t = this
              , e = function(e) {
                t.bar.clear(),
                t.bar.beginFill(16777215),
                t.bar.drawRect(0, .5 * -d, Math.floor(p * e), d),
                t.bar.endFill()
            };
            u.default.on("progress", e),
            u.default.once("complete", function() {
                u.default.off("progress", e),
                a.default.setScene(c.default.firstScene || "Main")
            }),
            u.default.start()
        }
        ,
        e
    }(h.default);
    a.default.addScene("Loading", f)
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = r(i(8))
      , h = r(i(6))
      , u = r(i(11));
    i(16);
    var l = r(i(75))
      , c = r(i(5))
      , p = i(13)
      , d = r(i(40))
      , f = r(i(77))
      , v = r(i(198))
      , y = r(i(78));
    c.default.addAsset("shop.json", "shop");
    var g = [["cube", "normal/1"], ["cube", "normal/2"], ["cube", "normal/3"], ["cube", "normal/4"], ["cube", "normal/5"], ["cube", "normal/6"], ["cube", "normal/7"], ["cube", "normal/8"], ["cube", "normal/9"]]
      , m = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            i.backgroundColor = 3591900,
            i.blocks = Array(7),
            i.createLayer("act").createLayer("ui");
            var r = a.default.width / 2 | 0
              , s = new u.default.Sprite(c.default.getTexture(["ui", "title"])).addTo(i.ui);
            s.anchor.set(.5),
            s.position.set(r, 150);
            var h = new u.default.Sprite(c.default.getTexture(["ui", "promot"])).addTo(i.ui);
            h.anchor.set(1),
            h.position.set(a.default.width - 2, a.default.height - 2),
            i.playBtn = i.spawnActor(d.default, r, 520, "ui", {
                texture: ["ui", "4"]
            }).on("click", function() {
                a.default.setScene("Playground", !0)
            }),
            i.sndBtn = i.spawnActor(f.default, 100, 600, "ui", {
                texOn: ["ui", "2"],
                texOff: ["ui", "1"]
            }),
            i.shopBtn = i.spawnActor(d.default, a.default.width - 100, 600, "ui", {
                texture: ["ui", "shop-btn"]
            }).on("click", function() {
                i.shop.open()
            }),
            i.shop = i.spawnActor(v.default, 0, 0, "ui"),
            i.shop.close(),
            i.tween(i.playBtn.sprite.scale).wait(100).to({
                x: 1.1,
                y: 1.1
            }, 80).to({
                x: 1,
                y: 1
            }, 120).repeat(1 / 0),
            i.tween(i.sndBtn.sprite.scale).wait(200).to({
                x: 1.1,
                y: 1.1
            }, 240).to({
                x: 1,
                y: 1
            }, 240).repeat(1 / 0),
            i.tween(i.shopBtn.sprite.scale).wait(200).to({
                x: 1.1,
                y: 1.1
            }, 240).to({
                x: 1,
                y: 1
            }, 240).repeat(1 / 0);
            var l = void 0
              , m = void 0;
            for (l = 0; l < 7; l++)
                (m = new u.default.Sprite(c.default.getTexture(g[0])).addTo(i.act)).anchor.set(.5),
                m.position.set(i.xAtGrid(l, 0), i.yAtGrid(l, 0)),
                i.blocks[l] = m;
            i.me = new u.default.extras.AnimatedSprite((0,
            y.default)()[p.persistent.get("char")]).addTo(i.act),
            i.me.anchor.set(.5, 1),
            i.me.position.set(i.xAtGridTop(0, 0), i.yAtGridTop(0, 0)),
            i.me.addAnim("left", [0, 1, 2, 3, 4, 5, 6, 7], {
                loop: !0,
                speed: 12
            }),
            i.me.addAnim("right", [8, 9, 10, 11, 12, 13, 14, 15], {
                loop: !0,
                speed: 12
            }),
            p.persistent.on("char", function(t) {
                i.me.textures = (0,
                y.default)()[t]
            });
            var x = new u.default.Sprite(c.default.getTexture(["object", "gem"])).addTo(i.ui);
            x.position.set(5, 5);
            var _ = new u.default.extras.BitmapText("X 0",{
                font: "24px Bm"
            }).addTo(i.ui);
            return _.position.copy(x.position).add(60, 15),
            p.persistent.on("coin", function(t) {
                _.text = "X " + t
            }),
            i.meCol = 0,
            i.moveRight(),
            i
        }
        return s(e, t),
        e.prototype.awake = function() {
            for (var t = c.default.getTexture(l.default.pick(g)), e = 0; e < 7; e++)
                this.blocks[e].texture = t
        }
        ,
        e.prototype.update = function() {
            this.dir > 0 ? "right" !== this.me.currentAnim && this.me.play("right") : this.dir < 0 && "left" !== this.me.currentAnim && this.me.play("left")
        }
        ,
        e.prototype.moveLeft = function() {
            this.meLand(),
            this.meCol > 0 ? (this.meCol -= 1,
            this.dir = -1,
            this.tween(this.me.position).to({
                x: this.xAtGridTop(this.meCol, 0),
                y: this.yAtGridTop(this.meCol, 0)
            }, 200).once("finish", this.moveLeft, this)) : this.moveRight()
        }
        ,
        e.prototype.moveRight = function() {
            this.meLand(),
            this.meCol < 6 ? (this.meCol += 1,
            this.dir = 1,
            this.tween(this.me.position).to({
                x: this.xAtGridTop(this.meCol, 0),
                y: this.yAtGridTop(this.meCol, 0)
            }, 200).once("finish", this.moveRight, this)) : this.moveLeft()
        }
        ,
        e.prototype.meLand = function() {
            var t = this.blocks[this.meCol].position;
            this.tween(t).to({
                y: t.y + 6
            }, 80, "Quadratic.In").to({
                y: t.y
            }, 80, "Quadratic.Out")
        }
        ,
        e.prototype.xAtGrid = function(t, e) {
            return 56 * t + 80 + 15 * e
        }
        ,
        e.prototype.yAtGrid = function(t, e) {
            return 78 * -e + 350 + 9 * t
        }
        ,
        e.prototype.xAtGridTop = function(t, e) {
            return this.xAtGrid(t, e)
        }
        ,
        e.prototype.yAtGridTop = function(t, e) {
            return this.yAtGrid(t, e) - 20
        }
        ,
        e
    }(h.default);
    a.default.addScene("Title", m)
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        n.call(this),
        this.context = t,
        this.actions = [],
        this.index = -1,
        this.current = null,
        this.currentAction = null,
        this.delta = 0,
        this.duration = 500,
        this.progress = 0,
        this.easing = h.Linear.None,
        this.interpolation = u.Linear,
        this.finished = !1,
        this.removed = !1,
        this.paused = !1,
        this.repeatCount = 0,
        this.propCtx = [],
        this.propKey = [],
        this.before = [],
        this.change = [],
        this.types = []
    }
    var n = i(2)
      , o = i(6)
      , s = (i(7),
    i(73)).getTargetAndKey
      , a = i(74)
      , h = a.Easing
      , u = a.Interpolation
      , l = {
        REPEAT: 0,
        WAIT: 1,
        ANIMATE: 2
    };
    (r.prototype = Object.create(n.prototype)).constructor = r,
    r.prototype.to = function(t, e, i, r) {
        var n = i || h.Linear.None
          , o = r || u.Linear;
        "string" == typeof i && (i = i.split("."),
        n = h[i[0]][i[1]]),
        "string" == typeof r && (o = u[r]);
        for (var a, l = [], c = Object.keys(t), p = 0; p < c.length; p++)
            a = s(this.context, c[p]),
            l.push(a[0], a[1], t[c[p]]);
        return this.actions.push([l, e, n, o]),
        this
    }
    ,
    r.prototype.repeat = function(t) {
        return this.actions.push([l.REPEAT, t]),
        this
    }
    ,
    r.prototype.wait = function(t) {
        return this.actions.push([l.WAIT, t]),
        this
    }
    ,
    r.prototype.stop = function() {
        return this.removed = !0,
        this
    }
    ,
    r.prototype.pause = function() {
        return this.paused = !0,
        this
    }
    ,
    r.prototype.resume = function() {
        return this.paused = !1,
        this
    }
    ,
    r.prototype._next = function() {
        if (this.delta = 0,
        ++this.index >= this.actions.length)
            return this.finished = !0,
            this.removed = !0,
            void this.emit("finish", this);
        if (this.current = this.actions[this.index],
        this.current[0] === l.WAIT)
            this.duration = this.current[1],
            this.currentAction = l.WAIT;
        else if (this.current[0] === l.REPEAT)
            this.current.counter || (this.current.counter = this.current[1]),
            this.current.counter--,
            this.current.counter > 0 ? (this.emit("repeat", this),
            this.index = -1,
            this.current = null,
            this._step(0)) : (this.current.counter = this.current[1],
            this.current = null,
            this.currentAction = null,
            this._step(0));
        else {
            this.properties = this.current[0],
            this.propCtx.length = 0,
            this.propKey.length = 0,
            this.change.length = 0,
            this.before.length = 0,
            this.types.length = 0;
            for (var t = 0; t < this.properties.length; t += 3) {
                var e = this.properties[t]
                  , i = this.properties[t + 1]
                  , r = e[i]
                  , n = this.properties[t + 2];
                this.propKey.push(i),
                this.propCtx.push(e),
                "number" == typeof r ? (this.before.push(r),
                this.change.push(n - r),
                this.types.push(0)) : "string" == typeof r ? (this.before.push(r),
                this.change.push(n),
                this.types.push(1)) : (this.before.push(r),
                this.change.push(n),
                this.types.push(2))
            }
            this.currentAction = l.ANIMATE,
            this.duration = this.current[1],
            this.easing = this.current[2],
            this.interpolation = this.current[3]
        }
    }
    ,
    r.prototype._step = function(t) {
        if (!this.removed && !this.paused)
            switch (this.delta += t,
            this.current || this._next(),
            this.currentAction) {
            case l.ANIMATE:
                this._doAnimate();
                break;
            case l.WAIT:
                this._doWait()
            }
    }
    ,
    r.prototype._doAnimate = function() {
        this.progress = Math.min(1, this.delta / this.duration);
        var t, e, i = this.easing(this.progress);
        for (t = 0; t < this.change.length; t++)
            switch (e = this.propKey[t],
            this.types[t]) {
            case 0:
                this.propCtx[t][e] = this.before[t] + this.change[t] * i;
                break;
            case 1:
                this.propCtx[t][e] = this.change[t].slice(0, Math.floor(this.change[t].length * i));
                break;
            case 2:
                this.progress >= 1 && (this.propCtx[t][e] = this.change[t])
            }
        this.progress >= 1 && this._next()
    }
    ,
    r.prototype._doWait = function() {
        this.delta >= this.duration && this._next()
    }
    ,
    r.prototype.recycle = function() {
        c.push(this)
    }
    ;
    for (var c = [], p = 0; p < 20; p++)
        c.push(new r(null));
    r.create = function(t) {
        var e = c.shift();
        return e ? r.call(e, t) : e = new r(t),
        e
    }
    ,
    r.ACTION_TYPES = l,
    Object.assign(o.prototype, {
        tween: function(t, e) {
            var i = e || "0";
            this.animationSystem.anims[i] || (this.animationSystem.anims[i] = [],
            this.animationSystem.activeTags.push(i));
            var n = r.create(t);
            return this.animationSystem.anims[i].push(n),
            n
        }
    }),
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t, e, i) {
        this.time = t,
        this.value = e;
        var r = i || c.Linear.None;
        "string" == typeof i && (i = i.split("."),
        r = c[i[0]][i[1]]),
        this.easing = r
    }
    function n(t, e, i) {
        this.owner = e,
        this.path = t;
        var r = i || p.VALUE;
        "string" == typeof i && (r = p[i.toUpperCase()]),
        this.type = r,
        this.keys = [],
        this.duration = 0
    }
    function o(t) {
        this.id = t,
        this.duration = 0,
        this.channels = [],
        this.channelMap = {},
        this._latestChannel = null
    }
    function s(t, e) {
        h.call(this),
        this.action = t,
        this.context = e,
        this.channelCache = [],
        this.speed = 1,
        this.time = 0,
        this.finished = !1,
        this.looped = !0;
        for (var i, r = this.action.channels, n = 0; n < r.length; n++)
            (i = u(this.context, r[n].path)).push(r[n].keys, 0),
            this.channelCache.push(i)
    }
    var a = i(6)
      , h = i(2)
      , u = i(73).getTargetAndKey
      , l = i(74)
      , c = l.Easing
      , p = (l.Interpolation,
    {
        VALUE: 0,
        EVENT: 1
    });
    n.prototype.insert = function(t) {
        this.keys.push(t);
        var e, i;
        for (e = this.keys.length - 1; e > 0 && this.keys[e].time < this.keys[e - 1].time; e--)
            i = this.keys[e - 1],
            this.keys[e - 1] = this.keys[e],
            this.keys[e] = i;
        this.duration = this.keys[this.keys.length - 1].time,
        this.owner.duration = Math.max(this.owner.duration, this.duration)
    }
    ,
    n.prototype.findKey = function(t) {
        if (0 !== this.keys.length) {
            if (t > this.duration)
                return this.keys[this.keys.length - 1];
            var e, i = this.keys[0];
            for (e = 0; e < this.keys.length - 1; e++)
                if (i = this.keys[e],
                this.keys[e + 1].time > t)
                    return i;
            return i
        }
    }
    ,
    o.prototype.channel = function(t, e) {
        var i = new n(t,this,e);
        return this.channels.push(i),
        this.channelMap[t] = i,
        this._latestChannel = i,
        this
    }
    ,
    o.prototype.key = function(t, e, i) {
        return this._latestChannel ? (this._latestChannel.insert(new r(t,e,i)),
        this) : (console.log("[Warning]: can not insert key without a channel!"),
        this)
    }
    ,
    o.prototype.findChannel = function(t) {
        return this.channelMap[t]
    }
    ;
    var d = 0;
    o.create = function() {
        return new o(d++)
    }
    ,
    (s.prototype = Object.create(h.prototype)).constructor = s,
    s.prototype._step = function(t) {
        var e, i, r, n, o, s, a, h, u, l;
        if (this.time += t * this.speed,
        this.speed > 0) {
            if (this.time >= this.action.duration) {
                if (!this.looped)
                    return this.time = this.action.duration,
                    this.finished = !0,
                    void this.emit("finish", this);
                for (this.time = this.time % this.action.duration,
                e = 0; e < this.channelCache.length; e++)
                    i = this.channelCache[e],
                    i[3] = 0;
                this.emit("loop", this)
            }
            for (e = 0; e < this.channelCache.length; e++)
                i = this.channelCache[e],
                this.time > i.duration || (r = i[2],
                (n = i[3]) < i[2].length - 2 && this.time >= i[2][n + 1].time && (n += 1,
                i[3] = n),
                o = r[n],
                s = r[n + 1],
                a = s.time - o.time,
                l = s.value - o.value,
                h = (this.time - o.time) / a,
                u = o.easing(h),
                i[0][i[1]] = o.value + l * u)
        } else if (this.speed < 0) {
            if (this.time < 0) {
                if (!this.looped)
                    return this.time = 0,
                    this.finished = !0,
                    void this.emit("finish", this);
                for (this.time += this.action.duration,
                e = 0; e < this.channelCache.length; e++)
                    i = this.channelCache[e],
                    i[3] = Math.max(i[2].length - 2, 0);
                this.emit("loop", this)
            }
            for (e = 0; e < this.channelCache.length; e++)
                i = this.channelCache[e],
                r = i[2],
                (n = i[3]) > 0 && this.time < i[2][n].time && (n -= 1,
                i[3] = n),
                o = r[n],
                s = r[n + 1],
                a = s.time - o.time,
                l = s.value - o.value,
                h = (this.time - o.time) / a,
                u = o.easing(h),
                i[0][i[1]] = o.value + l * u
        }
    }
    ,
    s.prototype.goto = function(t) {}
    ,
    s.create = function(t, e) {
        return new s(t,e)
    }
    ,
    Object.assign(a.prototype, {
        runAction: function(t, e, i) {
            var r = i || "0";
            this.animationSystem.anims[r] || (this.animationSystem.anims[r] = [],
            this.animationSystem.activeTags.push(r));
            var n = s.create(t, e);
            return this.animationSystem.anims[r].push(n),
            n
        }
    }),
    t.exports = {
        CHANNEL_TYPE: p,
        Key: r,
        Channel: n,
        Action: o,
        ActionPlayer: s
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return function(e) {
            var i, r, n = e._left >> t, o = e._top >> t, s = e._right >> t, a = e._bottom >> t, h = [];
            for (r = o; r <= a; r++)
                for (i = n; i <= s; i++)
                    h.push(i + ":" + r);
            return h
        }
    }
    function n(t) {
        t || (t = o),
        this.getKeys = r(t),
        this.hash = {},
        this.list = [],
        this._lastTotalCleared = 0
    }
    var o = 5;
    n.prototype.clear = function() {
        var t;
        for (t in this.hash)
            0 === this.hash[t].length ? delete this.hash[t] : this.hash[t].length = 0;
        this.list.length = 0
    }
    ,
    n.prototype.getNumBuckets = function() {
        var t, e = 0;
        for (t in this.hash)
            this.hash.hasOwnProperty(t) && this.hash[t].length > 0 && e++;
        return e
    }
    ,
    n.prototype.insert = function(t, e) {
        var i, r, n = this.getKeys(e || t);
        for (this.list.push(t),
        r = 0; r < n.length; r++)
            i = n[r],
            this.hash[i] ? this.hash[i].push(t) : this.hash[i] = [t]
    }
    ,
    n.prototype.retrieve = function(t, e) {
        var i, r, n, o = [];
        if (!t && !e)
            return this.list;
        for (i = this.getKeys(e || t),
        r = 0; r < i.length; r++)
            n = i[r],
            this.hash[n] && (o = o.concat(this.hash[n]));
        return o
    }
    ,
    t.exports = n
}
, function(t, e, i) {
    "use strict";
    function r() {
        this.type = "",
        this.isActive = !1,
        this.target = null
    }
    r.prototype.addTo = function(t) {
        return this.target = t,
        this
    }
    ,
    r.prototype.setup = function(t) {
        Object.assign(this, this.defaultSettings || {}, t)
    }
    ,
    r.prototype.activate = function() {
        return this.isActive = !0,
        this
    }
    ,
    r.prototype.deactivate = function() {
        return this.isActive = !1,
        this
    }
    ,
    r.behaviors = {},
    r.register = function(t, e) {
        r.behaviors[t] ? console.log('Behavior "' + t + '" is already defined!') : r.behaviors[t] = e
    }
    ,
    t.exports = r
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    function a(t) {
        var e, i = [];
        for (e = 0; e < t.length; e++)
            "string" == typeof t[e] || Array.isArray(t[e]) ? i.push((0,
            l.getTexture)(t[e])) : i.push(t[e]);
        return i
    }
    e.__esModule = !0;
    var h = r(i(9))
      , u = r(i(19))
      , l = i(5)
      , c = function(t) {
        function e(i) {
            var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            n(this, e);
            var s = o(this, t.call(this));
            return s.isOn = r,
            s.textures = a(i),
            s.initSprite({
                texture: i[s.isOn ? 0 : 1],
                interactive: !0
            }),
            u.default.mobile ? s.sprite.on("touchstart", s.inputDown, s) : s.sprite.on("mousedown", s.inputDown, s),
            s
        }
        return s(e, t),
        e.prototype.inputDown = function() {
            this.isOn = !this.isOn,
            this.updateTexture(),
            this.emit("toggle", this.isOn)
        }
        ,
        e.prototype.updateTexture = function() {
            this.sprite.texture = this.isOn ? this.textures[0] : this.textures[1]
        }
        ,
        e
    }(h.default);
    e.default = c
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = r(i(8))
      , h = r(i(9))
      , u = r(i(11))
      , l = i(13)
      , c = r(i(5))
      , p = r(i(40))
      , d = [0, 40, 40, 80, 80, 80, 120, 120, 120]
      , f = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            i.selectedIdx = 0;
            var r = .8 * a.default.width
              , s = .9 * a.default.height;
            return i.initEmpty({}).addGraphics({
                width: r,
                height: s,
                color: 16708565,
                position: {
                    x: a.default.width / 2,
                    y: a.default.height / 2
                }
            }, "sprite").addSprite({
                texture: ["ui", "shop-title"],
                position: {
                    x: a.default.width / 2,
                    y: 80
                }
            }, "sprite").addSprite({
                texture: ["object", "gem"],
                position: {
                    x: a.default.width / 2 - 60,
                    y: a.default.height - 70
                }
            }, "sprite").addBitmapText({
                text: "X 2000",
                font: "24px Bm",
                tint: 1394807,
                position: {
                    x: a.default.width / 2 - 30,
                    y: a.default.height - 80
                }
            }, "sprite", "gemText"),
            i
        }
        return s(e, t),
        e.prototype.ready = function() {
            var t = this;
            this.scene.spawnActor(p.default, 100, 80, this.sprite, {
                texture: ["ui", "back"]
            }).on("click", this.close, this),
            this.selectRect = (new u.default.Graphics).addTo(this.sprite),
            this.selectRect.beginFill(2731519),
            this.selectRect.drawRoundedRect(-50, -60, 100, 120, 20),
            this.selectRect.endFill();
            var e = void 0
              , i = void 0
              , r = void 0
              , n = {
                x: 0,
                y: 0
            }
              , o = 0
              , s = void 0
              , a = void 0;
            for (i = 0; i < 3; i++)
                for (e = 0; e < 3; e++)
                    o = 3 * i + e,
                    a = !!l.persistent.getArrayItem("unlock", o),
                    this.posAtGrid(n, e, i),
                    r = this.scene.spawnActor(p.default, n.x, n.y, this.sprite, {
                        texture: ["shop", (a ? "unlock" : "lock") + "/" + (o + 1)]
                    }).on("click", function() {
                        l.persistent.getArrayItem("unlock", this.idx) ? t.chooseChar(this.idx) : l.persistent.get("coin") >= d[this.idx] && (l.persistent.set("coin", l.persistent.get("coin") - d[this.idx]),
                        l.persistent.setArrayItem("unlock", this.idx, 1),
                        l.persistent.save(),
                        this.sprite.texture = c.default.getTexture(["shop", "unlock/" + (this.idx + 1)]),
                        this.price.visible = !1)
                    }),
                    r.idx = o,
                    a || ((s = new u.default.extras.BitmapText("" + d[o],{
                        font: "20px lakes",
                        tint: 1394807
                    }).addTo(this.sprite)).position.copy(n).add(-s.width / 2, 60),
                    r.price = s);
            this.chooseChar(l.persistent.get("char"))
        }
        ,
        e.prototype.open = function() {
            this.gemText.text = "X " + l.persistent.get("coin"),
            this.sprite.visible = !0
        }
        ,
        e.prototype.close = function() {
            this.sprite.visible = !1,
            l.persistent.save()
        }
        ,
        e.prototype.chooseChar = function(t) {
            t !== this.selectedIdx && (this.selectedIdx = t,
            l.persistent.set("char", t)),
            this.posAtGrid(this.selectRect.position, t % 3, t / 3 | 0)
        }
        ,
        e.prototype.posAtGrid = function(t, e, i) {
            t.x = 140 + 100 * e,
            t.y = 200 + 160 * i
        }
        ,
        e
    }(h.default);
    e.default = f
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    function a(t, e) {
        return t.position.y - e.position.y
    }
    var h = r(i(8))
      , u = r(i(6))
      , l = r(i(9));
    i(16);
    var c = r(i(79))
      , p = r(i(5))
      , d = r(i(75))
      , f = r(i(19))
      , v = r(i(11))
      , y = (r(i(43)),
    i(13))
      , g = r(i(200))
      , m = r(i(201))
      , x = r(i(202))
      , _ = r(i(203))
      , b = i(204);
    p.default.addAsset("cube.json", "cube"),
    p.default.addAsset("char.json", "char"),
    p.default.addAsset("object.json", "object");
    var T = [];
    p.default.once("complete", function() {
        for (var t = p.default.resources.cube.textures, e = 1; e < 10; e++)
            T.push([t["normal/" + e], t["blue/" + e], t["red/" + e]])
    });
    var w = 1
      , E = 0
      , S = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            return i.q = 0,
            i.r = 0,
            i.type = w,
            i.terrain = 0,
            i.state = E,
            i.fallTimer = 0,
            i.isAlive = !0,
            i.canEverTick = !0,
            i.initSprite({
                texture: ["cube", "normal/1"]
            }).addSprite({
                texture: ["cube", "mark"],
                pivot: {
                    x: 10,
                    y: -6
                }
            }, "sprite", "logo"),
            i
        }
        return s(e, t),
        e.prototype.init = function(t) {
            var e = t.type
              , i = t.terrain;
            this.type = e,
            this.terrain = i,
            this.fallTimer = 0,
            this.isAlive = !0,
            0 !== this.type ? (this.state = E,
            this.sprite.texture = T[i][0],
            this.sprite.visible = !0,
            this.sprite.alpha = 1,
            this.logo.visible = d.default.frac() < .1) : this.sprite.visible = !1
        }
        ,
        e.prototype.ready = function() {
            var t = this.position.x
              , e = this.position.y;
            this.q = t,
            this.r = e,
            this.position.x = this.scene.xAtGrid(t, e),
            this.position.y = this.scene.yAtGrid(t, e);
            var i = void 0;
            2 === this.type ? i = this.scene.spawnActor(m.default, t, e, "actLayer") : 3 === this.type ? (i = this.scene.spawnActor(m.default, t, e, "actLayer")).moveDown() : 4 === this.type ? (i = this.scene.spawnActor(m.default, t, e, "actLayer")).moveLR() : 5 === this.type && (i = this.scene.spawnActor(x.default, t, e, "actLayer")),
            i && i.boot()
        }
        ,
        e.prototype.update = function(t) {
            this.isAlive && this.fallTimer > 0 && (this.fallTimer -= t,
            this.fallTimer < 0 && (this.fallTimer = 0,
            this.fallAndRemove()))
        }
        ,
        e.prototype.fallAndRemove = function() {
            this.isAlive && (this.isAlive = !1,
            this.scene.grid[this.r - this.scene.lowestR][this.q] = null,
            this.scene.tween(this.sprite).to({
                alpha: 0
            }, 300).once("finish", this.remove, this))
        }
        ,
        e.prototype.onCubeTouch = function(t) {
            0 === this.type ? t.fall() : (this.state === E ? (this.state = 1,
            this.sprite.texture = T[this.terrain][1]) : 1 === this.state && (this.state = 2,
            this.sprite.texture = T[this.terrain][2],
            this.fallTimer = 400),
            this.bounce())
        }
        ,
        e.prototype.bounce = function() {
            this.scene.tween(this.position).to({
                y: this.position.y + 6
            }, 80, "Quadratic.In").to({
                y: this.position.y
            }, 80, "Quadratic.Out")
        }
        ,
        e
    }(l.default);
    (0,
    c.default)(S, 100);
    var A = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            return i.backgroundColor = 3591900,
            i.lastR = 0,
            i.lowestR = 0,
            i.blockConfig = {
                type: w,
                terrain: 0
            },
            i.blockTerrain = 0,
            i.currentPattern = null,
            i.patternIndex = 0,
            i.coin = 0,
            i.score = 0,
            i.createLayer("worldLayer").createLayer("gridLayer", "worldLayer").createLayer("actLayer", "worldLayer").createLayer("uiLayer"),
            i.worldLayer.interactive = !0,
            i.worldLayer.containsPoint = function() {
                return !0
            }
            ,
            f.default.mobile ? (i.worldLayer.on("touchstart", i.inputDown, i),
            i.worldLayer.on("touchend", i.inputUp, i)) : (i.worldLayer.on("mousedown", i.inputDown, i),
            i.worldLayer.on("mouseup", i.inputUp, i),
            i.worldLayer.on("mouseout", i.inputUp, i)),
            i.grid = [],
            i.me = i.spawnActor(g.default, 0, 0, "actLayer"),
            i.me.on("moveUp", i.scrollDown, i),
            i.setupUI(),
            i
        }
        return s(e, t),
        e.prototype.awake = function() {
            this.coin = 0,
            this.score = 0,
            this.blockTerrain = 0,
            this.currentPattern = d.default.pick(b.START_PATTERNS),
            this.patternIndex = 0;
            var t = void 0;
            for (t = 0; t < 10; t++)
                this.pushNewRow();
            this.me.boot()
        }
        ,
        e.prototype.update = function() {
            this.actLayer.children.sort(a)
        }
        ,
        e.prototype.freeze = function() {
            this.gameover.remove(),
            this.gameover = null;
            var t = void 0
              , e = void 0
              , i = void 0
              , r = void 0;
            for (t = 0; t < this.grid.length; t++)
                for (i = this.grid[t],
                e = 0; e < i.length; e++)
                    (r = i[e]) && r.remove(),
                    i[e] = null;
            this.grid = null,
            this.currentPattern = null,
            this.blockConfig = null,
            y.session.set("score", 0),
            y.session.set("coin", 0)
        }
        ,
        e.prototype.setupUI = function() {
            this.scoreNumber = new v.default.extras.BitmapText("0",{
                font: "30px Bm"
            }).addTo(this.uiLayer),
            this.scoreNumber.position.set(6, 4);
            var t = new v.default.Sprite(p.default.getTexture(["object", "gem"])).addTo(this.uiLayer);
            t.position.set(h.default.width / 2 - 80, h.default.height - 80);
            var e = new v.default.extras.BitmapText("+ 0",{
                font: "24px Bm"
            }).addTo(this.uiLayer);
            e.position.copy(t.position).add(60, 15),
            y.session.on("coin", function(t) {
                e.text = "+ " + t
            }),
            this.gameover = this.spawnActor(_.default, .5 * h.default.width, .5 * h.default.height, "uiLayer"),
            this.gameover.hide()
        }
        ,
        e.prototype.gameOver = function() {
            y.persistent.set("coin", y.persistent.get("coin") + this.coin),
            y.persistent.save(),
            this.gameover.show()
        }
        ,
        e.prototype.scrollDown = function() {
            this.getScore(),
            this.grid.length > 10 && this.dropFirstRow(),
            this.pushNewRow(),
            this.tween(this.worldLayer.position).wait(0).to({
                x: this.worldLayer.position.x - 15,
                y: this.worldLayer.position.y + 80
            }, 200)
        }
        ,
        e.prototype.getCoin = function() {
            this.coin += 1,
            y.session.set("coin", this.coin)
        }
        ,
        e.prototype.getScore = function() {
            this.score += 1,
            this.scoreNumber.text = "" + this.score,
            y.session.set("score", this.score),
            this.score > y.persistent.get("best") && y.persistent.set("best", this.score)
        }
        ,
        e.prototype.onCubeMoveEnd = function(t) {
            var e = this.getBlockAt(t.r, t.q);
            e ? e.onCubeTouch(t) : t.fall()
        }
        ,
        e.prototype.onHazardMoveEnd = function(t) {
            this.getBlockAt(t.r, t.q) || t.fall()
        }
        ,
        e.prototype.dropFirstRow = function() {
            for (var t = this.grid[0], e = 0; e < 7; e++)
                t[e] && t[e].fallAndRemove();
            this.grid.shift(),
            this.lowestR += 1
        }
        ,
        e.prototype.pushNewRow = function() {
            var t = this.currentPattern[this.patternIndex];
            this.patternIndex += 1,
            this.patternIndex >= this.currentPattern.length && (this.currentPattern = d.default.pick(b.PATTERNS),
            this.patternIndex = 0);
            for (var e = Array(7), i = 0; i < 7; i++)
                this.blockConfig.type = t[i],
                this.blockConfig.terrain = this.blockTerrain,
                e[i] = this.spawnActor(S, i, this.lastR, "gridLayer", this.blockConfig);
            this.grid.push(e),
            this.lastR += 1,
            this.lastR % 5 == 0 && (this.blockTerrain = Math.min(this.blockTerrain + 1, 8))
        }
        ,
        e.prototype.getBlockAt = function(t, e) {
            if (this.grid) {
                var i = this.grid[t - this.lowestR];
                return i ? i[e] : void 0
            }
        }
        ,
        e.prototype.isGridEmpty = function(t, e) {
            var i = this.getBlockAt(t, e);
            return !i || 0 === i.type
        }
        ,
        e.prototype.inputDown = function() {
            this.isMovingUp = !0
        }
        ,
        e.prototype.inputUp = function() {
            this.isMovingUp = !1
        }
        ,
        e.prototype.xAtGrid = function(t, e) {
            return 56 * t + 60 + 15 * e
        }
        ,
        e.prototype.yAtGrid = function(t, e) {
            return 78 * -e + 500 + 9 * t
        }
        ,
        e.prototype.xAtGridTop = function(t, e) {
            return this.xAtGrid(t, e)
        }
        ,
        e.prototype.yAtGridTop = function(t, e) {
            return this.yAtGrid(t, e) - 20
        }
        ,
        e
    }(u.default);
    h.default.addScene("Playground", A)
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = r(i(9));
    i(16);
    var h = r(i(28))
      , u = (r(i(5)),
    i(13))
      , l = i(41)
      , c = r(i(78));
    h.default.addSound(["death.mp3", "death.ogg"], "death");
    var p = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            return i.q = 0,
            i.nextQ = 0,
            i.r = 0,
            i.nextR = 0,
            i.dir = 1,
            i.isEnd = !1,
            i.progress = 0,
            i.isMovingUp = !1,
            i.initAnimatedSprite({
                textures: (0,
                c.default)()[0],
                anims: [{
                    name: "left",
                    frames: [0, 1, 2, 3, 4, 5, 6, 7],
                    settings: {
                        loop: !0,
                        speed: 12
                    }
                }, {
                    name: "right",
                    frames: [8, 9, 10, 11, 12, 13, 14, 15],
                    settings: {
                        loop: !0,
                        speed: 12
                    }
                }, {
                    name: "jump",
                    frames: [16, 17, 18, 19, 20, 21, 22, 23],
                    settings: {
                        loop: !0,
                        speed: 16
                    }
                }, {
                    name: "stop",
                    frames: [16],
                    settings: {
                        loop: !0,
                        speed: 12
                    }
                }, {
                    name: "death",
                    frames: [18],
                    settings: {
                        loop: !0,
                        speed: 10
                    }
                }],
                anchor: {
                    x: .5,
                    y: 1
                }
            }).initBody({
                width: 30,
                height: 30,
                collisionGroup: l.GROUPS.ME,
                collideAgainst: [l.GROUPS.DANGER, l.GROUPS.TRIGGER],
                collide: function(t) {
                    return !i.isEnd && (t.collisionGroup === l.GROUPS.DANGER ? (h.default.play("death"),
                    i.fall()) : t.collisionGroup !== l.GROUPS.TRIGGER || t.actor.isEnd || (i.scene.getCoin(),
                    t.actor.collect()),
                    !1)
                }
            }),
            i
        }
        return s(e, t),
        e.prototype.ready = function() {
            var t = this.position.x
              , e = this.position.y;
            this.q = this.nextQ = t,
            this.r = this.nextR = e,
            this.position.x = this.scene.xAtGridTop(t, e),
            this.position.y = this.scene.yAtGridTop(t, e),
            this.sprite.textures = (0,
            c.default)()[u.persistent.get("char")]
        }
        ,
        e.prototype.update = function(t, e) {
            this.isEnd || (this.progress += .075,
            this.progress > 1 && (this.progress = 0,
            this.isMovingUp ? this.r = this.nextR : this.q = this.nextQ,
            this.scene.isMovingUp ? (this.isMovingUp = !0,
            this.nextR += 1,
            this.emit("moveUp")) : (this.isMovingUp = !1,
            this.dir < 0 && this.scene.isGridEmpty(this.r, this.q - 1) ? this.dir = 1 : this.dir > 0 && this.scene.isGridEmpty(this.r, this.q + 1) && (this.dir = -1),
            this.scene.isGridEmpty(this.r, this.q - 1) && this.scene.isGridEmpty(this.r, this.q + 1) || (this.nextQ += this.dir)),
            this.scene.onCubeMoveEnd(this)),
            this.scene.isMovingUp && !this.isMovingUp && (this.progress < .5 ? this.nextQ = this.q : (this.q = this.nextQ,
            this.scene.onCubeMoveEnd(this)),
            this.nextR = this.r + 1,
            this.emit("moveUp"),
            this.isMovingUp = !0,
            this.progress = 0),
            this.position.x = this.scene.xAtGridTop(this.q, this.r) + (this.scene.xAtGridTop(this.nextQ, this.nextR) - this.scene.xAtGridTop(this.q, this.r)) * this.progress,
            this.position.y = this.scene.yAtGridTop(this.q, this.r) + (this.scene.yAtGridTop(this.nextQ, this.nextR) - this.scene.yAtGridTop(this.q, this.r)) * this.progress,
            this.isMovingUp ? "jump" !== this.sprite.currentAnim && this.sprite.play("jump") : this.dir < 0 && "left" !== this.sprite.currentAnim ? this.sprite.play("left") : this.dir > 0 && "right" !== this.sprite.currentAnim ? this.sprite.play("right") : 0 === this.dir && "stop" !== this.sprite.currentAnim && this.sprite.play("stop"))
        }
        ,
        e.prototype.remove = function() {
            this.removeAllListeners(),
            this.scene.gameOver(),
            t.prototype.remove.call(this)
        }
        ,
        e.prototype.boot = function() {
            this.canEverTick = !0,
            this.nextQ = 1,
            this.scene.onCubeMoveEnd(this)
        }
        ,
        e.prototype.fall = function() {
            this.isEnd = !0,
            this.scene.tween(this.sprite).to({
                alpha: 0
            }, 300).once("finish", this.remove, this),
            this.sprite.play("death")
        }
        ,
        e
    }(a.default);
    e.default = p
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function o(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, i, r) {
            return i && t(e.prototype, i),
            r && t(e, r),
            e
        }
    }()
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i(9));
    i(16);
    var h = i(5)
      , u = i(41)
      , l = ["object", "box"]
      , c = ["object", "fire"]
      , p = function(t) {
        function e() {
            r(this, e);
            var i = n(this, t.call(this));
            return i.q = 0,
            i.nextQ = 0,
            i.r = 0,
            i.nextR = 0,
            i.dir = 1,
            i.isEnd = !1,
            i.progress = 0,
            i.isMovingDown = !1,
            i.shouldMoveLR = !1,
            i.shouldMoveDown = !1,
            i.initSprite({
                texture: l,
                anchor: {
                    x: .5,
                    y: 1
                }
            }).initBody({
                width: 30,
                height: 30,
                collisionGroup: u.GROUPS.DANGER
            }),
            i
        }
        return o(e, t),
        s(e, [{
            key: "shouldMove",
            get: function() {
                return this.shouldMoveDown || this.shouldMoveLR
            }
        }]),
        e.prototype.ready = function() {
            var t = this.position.x
              , e = this.position.y;
            this.q = this.nextQ = t,
            this.r = this.nextR = e,
            this.position.x = this.scene.xAtGridTop(t, e),
            this.position.y = this.scene.yAtGridTop(t, e),
            this.sprite.scale.x = 1
        }
        ,
        e.prototype.update = function(t, e) {
            this.isEnd || (this.shouldMove || this.scene.onHazardMoveEnd(this),
            this.progress += .03,
            this.progress > 1 && (this.progress = 0,
            this.isMovingDown ? this.r = this.nextR : this.q = this.nextQ,
            this.shouldMoveDown ? (this.isMovingDown = !0,
            this.shouldMoveLR = !1,
            this.nextR -= 1) : this.shouldMoveLR && (this.shouldMoveDown = !1,
            this.isMovingDown = !1,
            this.dir < 0 && this.scene.isGridEmpty(this.r, this.q - 1) ? this.dir = 1 : this.dir > 0 && this.scene.isGridEmpty(this.r, this.q + 1) && (this.dir = -1),
            this.scene.isGridEmpty(this.r, this.q - 1) && this.scene.isGridEmpty(this.r, this.q + 1) || (this.nextQ += this.dir)),
            this.scene.onHazardMoveEnd(this)),
            this.position.x = this.scene.xAtGridTop(this.q, this.r) + (this.scene.xAtGridTop(this.nextQ, this.nextR) - this.scene.xAtGridTop(this.q, this.r)) * this.progress,
            this.position.y = this.scene.yAtGridTop(this.q, this.r) + (this.scene.yAtGridTop(this.nextQ, this.nextR) - this.scene.yAtGridTop(this.q, this.r)) * this.progress,
            this.shouldMoveLR && (this.sprite.scale.x = -this.dir))
        }
        ,
        e.prototype.boot = function() {
            this.canEverTick = !0
        }
        ,
        e.prototype.moveDown = function() {
            this.shouldMoveDown = !0,
            this.sprite.texture = (0,
            h.getTexture)(l)
        }
        ,
        e.prototype.moveLR = function() {
            this.shouldMoveLR = !0,
            this.sprite.texture = (0,
            h.getTexture)(c)
        }
        ,
        e.prototype.fall = function() {
            this.isEnd = !0,
            this.scene.tween(this.sprite).to({
                alpha: 0
            }, 300).once("finish", this.remove, this)
        }
        ,
        e
    }(a.default);
    e.default = p
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = r(i(9));
    i(16);
    var h = r(i(28))
      , u = i(41);
    h.default.addSound(["coin.mp3", "coin.ogg"], "coin");
    var l = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            return i.q = 0,
            i.r = 0,
            i.isEnd = !1,
            i.initSprite({
                texture: ["object", "gem"],
                anchor: {
                    x: .5,
                    y: 1
                }
            }).initBody({
                width: 30,
                height: 30,
                collisionGroup: u.GROUPS.TRIGGER
            }),
            i
        }
        return s(e, t),
        e.prototype.ready = function() {
            var t = this.position.x
              , e = this.position.y;
            this.q = t,
            this.r = e,
            this.position.x = this.scene.xAtGridTop(t, e),
            this.position.y = this.scene.yAtGridTop(t, e)
        }
        ,
        e.prototype.update = function(t, e) {
            this.isEnd || this.scene.onHazardMoveEnd(this)
        }
        ,
        e.prototype.boot = function() {
            this.canEverTick = !0
        }
        ,
        e.prototype.collect = function() {
            this.isEnd || (this.isEnd = !0,
            this.scene.tween(this.sprite).to({
                alpha: 0
            }, 120).once("finish", this.remove, this),
            h.default.play("coin"))
        }
        ,
        e.prototype.fall = function() {
            this.isEnd || (this.isEnd = !0,
            this.scene.tween(this.sprite).to({
                alpha: 0
            }, 300).once("finish", this.remove, this))
        }
        ,
        e
    }(a.default);
    e.default = l
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = r(i(8))
      , h = i(5)
      , u = r(h)
      , l = r(i(11))
      , c = r(i(9))
      , p = r(i(79))
      , d = i(13)
      , f = r(i(40))
      , v = r(i(77))
      , y = function(t) {
        function e() {
            n(this, e);
            var i = o(this, t.call(this));
            i.initialized = !1,
            i.initEmpty().addGraphics({
                width: a.default.width,
                height: a.default.height,
                color: 0,
                alpha: .6
            }, "sprite").addGraphics({
                width: 390,
                height: 590,
                color: 16708564
            }, "sprite");
            var r = new l.default.Sprite(u.default.getTexture(["ui", "gameover"])).addTo(i.sprite);
            r.position.set(-r.width / 2, -260);
            var s = new l.default.Sprite(u.default.getTexture(["ui", "score"])).addTo(i.sprite);
            s.position.set(-s.width / 2, -180);
            var c = new l.default.extras.BitmapText("0",{
                font: "30px Bm",
                tint: 1132409
            }).addTo(i.sprite);
            c.position.set(-c.width / 2, -135),
            i.scoreNum = c;
            var p = new l.default.Sprite(u.default.getTexture(["ui", "hiscore"])).addTo(i.sprite);
            p.position.set(-p.width / 2, -90);
            var d = new l.default.extras.BitmapText("0",{
                font: "30px Bm",
                tint: 1132409
            }).addTo(i.sprite);
            d.position.set(-d.width / 2, -45),
            i.bestNum = d;
            var f = (new l.default.Graphics).addTo(i.sprite);
            f.beginFill(3969245),
            f.drawRect(0, 0, 360, 70),
            f.endFill(),
            f.position.set(-f.width / 2, 67.5 - f.height / 2);
            var v = new l.default.Sprite((0,
            h.getTexture)(["object", "gem"])).addTo(i.sprite);
            v.anchor.set(.5),
            v.position.set(-56, 67.5);
            var y = new l.default.extras.BitmapText("X 1",{
                font: "30px Bm",
                tint: 1132409
            }).addTo(i.sprite);
            return y.position.set(-18, 67.5 - .4 * y.height),
            i.coinNum = y,
            i
        }
        return s(e, t),
        e.prototype.init = function() {}
        ,
        e.prototype.ready = function() {
            this.initialized || (this.initialized = !0,
            this.scene.spawnActor(f.default, 0, 200, this.sprite, {
                texture: ["ui", "6"]
            }).on("click", function() {
                a.default.setScene("Playground", !0)
            }),
            this.scene.spawnActor(f.default, -120, 240, this.sprite, {
                texture: ["ui", "5"]
            }).on("click", function() {
                a.default.setScene("Title", !1)
            }),
            this.scene.spawnActor(v.default, 120, 240, this.sprite, {
                texOn: ["ui", "2"],
                texOff: ["ui", "1"]
            }))
        }
        ,
        e.prototype.show = function() {
            this.updateInfo(),
            this.sprite.visible = !0
        }
        ,
        e.prototype.hide = function() {
            this.sprite.visible = !1
        }
        ,
        e.prototype.updateInfo = function() {
            this.scoreNum.text = "" + d.session.get("score"),
            this.bestNum.text = "" + d.persistent.get("best"),
            this.coinNum.text = "X " + d.session.get("coin"),
            this.scoreNum.position.x = -this.scoreNum.width / 2,
            this.bestNum.position.x = -this.bestNum.width / 2
        }
        ,
        e
    }(c.default);
    e.default = y,
    (0,
    p.default)(y, 1)
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0,
    e.START_PATTERNS = [[[1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [1, 1, 1, 5, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [1, 5, 1, 1, 1, 5, 1], [1, 5, 1, 0, 1, 5, 1], [1, 5, 0, 0, 0, 5, 1], [1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [1, 1, 2, 5, 2, 1, 1], [1, 2, 1, 5, 1, 2, 1], [0, 2, 0, 5, 0, 2, 0]], [[1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1], [1, 5, 0, 0, 0, 5, 1], [1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1], [1, 5, 0, 0, 0, 5, 1], [1, 5, 0, 0, 0, 5, 1], [0, 1, 0, 1, 0, 1, 0], [1, 1, 5, 1, 5, 1, 1], [1, 1, 1, 5, 1, 1, 1], [0, 1, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1], [0, 0, 2, 1, 2, 0, 0], [1, 1, 2, 5, 2, 1, 1], [1, 1, 2, 5, 2, 1, 1], [0, 1, 0, 5, 0, 1, 0]], [[1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 5, 5, 5, 1, 1], [0, 0, 1, 5, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1], [0, 0, 2, 1, 2, 0, 0], [1, 2, 2, 5, 2, 2, 1], [1, 1, 2, 1, 2, 1, 1], [0, 1, 0, 1, 0, 1, 0]]],
    e.PATTERNS = [[[1, 1, 1, 1, 1, 1, 1], [1, 5, 1, 0, 0, 0, 0], [1, 5, 1, 1, 0, 0, 0], [1, 5, 1, 1, 1, 0, 0]], [[1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 0, 2, 1, 1], [1, 0, 1, 0, 1, 0, 1]], [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 2, 1, 1, 0, 0, 0], [0, 2, 1, 1, 1, 0, 0], [0, 2, 1, 1, 1, 1, 0], [1, 1, 1, 0, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 0, 1, 1, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 0, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 0, 1]], [[1, 1, 1, 1, 1, 1, 1], [0, 0, 5, 1, 1, 0, 0], [0, 1, 5, 0, 2, 1, 0], [0, 1, 5, 0, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 2, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 5, 1], [0, 0, 0, 0, 0, 5, 1], [0, 0, 1, 1, 1, 5, 1], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 0]], [[1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 5, 1, 5, 0, 0], [0, 1, 1, 0, 1, 1, 1], [2, 0, 1, 0, 1, 0, 1], [2, 2, 0, 0, 0, 1, 1], [2, 0, 0, 0, 0, 0, 5], [0, 0, 0, 0, 0, 1, 5], [0, 0, 0, 0, 1, 1, 2], [0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0], [0, 5, 0, 0, 0, 0, 0], [0, 5, 0, 0, 0, 0, 0], [0, 5, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 0, 5, 0, 0, 0, 0], [0, 0, 5, 0, 0, 0, 0], [0, 0, 5, 0, 0, 0, 0]], [[1, 1, 1, 1, 1, 1, 1], [1, 0, 2, 1, 2, 0, 1], [1, 0, 2, 1, 2, 0, 1], [1, 0, 5, 5, 0, 1, 1], [1, 0, 1, 0, 0, 1, 1], [1, 0, 5, 0, 0, 1, 1], [1, 0, 1, 0, 0, 0, 1], [1, 0, 5, 0, 0, 0, 2], [1, 0, 1, 0, 0, 0, 1], [1, 1, 5, 0, 0, 1, 1], [1, 1, 1, 1, 0, 1, 1], [0, 0, 0, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1], [1, 1, 5, 0, 5, 1, 1], [1, 3, 1, 1, 1, 3, 1], [1, 1, 1, 1, 1, 1, 1], [1, 3, 1, 1, 1, 3, 1]], [[1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1], [3, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 3], [1, 1, 5, 5, 5, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 2, 0, 0, 0, 2, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 0, 1, 1, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 5, 0, 5, 0, 0], [0, 0, 5, 0, 5, 0, 0], [0, 0, 5, 0, 5, 0, 0]], [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1], [1, 1, 5, 0, 5, 1, 1], [1, 3, 1, 0, 1, 3, 1], [1, 1, 0, 0, 0, 1, 1], [1, 3, 1, 0, 1, 3, 1], [1, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 1, 0], [1, 0, 0, 1, 1, 0, 0], [1, 0, 1, 1, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1]]]
}
]);
