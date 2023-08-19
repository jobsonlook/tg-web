var Uc = "function" == typeof Object.defineProperties ? Object.defineProperty : function(y, w, ca) {
    y != Array.prototype && y != Object.prototype && (y[w] = ca.value)
}
  , Xe = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function Ye() {
    Ye = function() {}
    ;
    Xe.Symbol || (Xe.Symbol = Cg)
}
var Cg = function() {
    var y = 0;
    return function(w) {
        return "jscomp_symbol_" + (w || "") + y++
    }
}();
function Dg() {
    Ye();
    var y = Xe.Symbol.iterator;
    y || (y = Xe.Symbol.iterator = Xe.Symbol("iterator"));
    "function" != typeof Array.prototype[y] && Uc(Array.prototype, y, {
        configurable: !0,
        writable: !0,
        value: function() {
            return Eg(this)
        }
    });
    Dg = function() {}
}
function Eg(y) {
    var w = 0;
    return Fg(function() {
        return w < y.length ? {
            done: !1,
            value: y[w++]
        } : {
            done: !0
        }
    })
}
function Fg(y) {
    Dg();
    y = {
        next: y
    };
    y[Xe.Symbol.iterator] = function() {
        return this
    }
    ;
    return y
}
function Ig(y, w) {
    Dg();
    y instanceof String && (y += "");
    var ca = 0
      , S = {
        next: function() {
            if (ca < y.length) {
                var Aa = ca++;
                return {
                    value: w(Aa, y[Aa]),
                    done: !1
                }
            }
            S.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return S.next()
        }
    };
    S[Symbol.iterator] = function() {
        return S
    }
    ;
    return S
}
function Jg(y, w) {
    if (w) {
        var ca = Xe;
        y = y.split(".");
        for (var S = 0; S < y.length - 1; S++) {
            var Aa = y[S];
            Aa in ca || (ca[Aa] = {});
            ca = ca[Aa]
        }
        y = y[y.length - 1];
        S = ca[y];
        w = w(S);
        w != S && null != w && Uc(ca, y, {
            configurable: !0,
            writable: !0,
            value: w
        })
    }
}
Jg("Array.prototype.keys", function(y) {
    return y ? y : function() {
        return Ig(this, function(w) {
            return w
        })
    }
});
function Kg(y) {
    Dg();
    var w = y[Symbol.iterator];
    return w ? w.call(y) : Eg(y)
}
Jg("Promise", function(y) {
    function w(Y) {
        this.zm = 0;
        this.ux = void 0;
        this.mm = [];
        var w = this.Ku();
        try {
            Y(w.resolve, w.reject)
        } catch (pd) {
            w.reject(pd)
        }
    }
    function ca() {
        this.Rg = null
    }
    function S(Y) {
        return Y instanceof w ? Y : new w(function(w) {
            w(Y)
        }
        )
    }
    if (y)
        return y;
    ca.prototype.Sy = function(Y) {
        null == this.Rg && (this.Rg = [],
        this.DF());
        this.Rg.push(Y)
    }
    ;
    ca.prototype.DF = function() {
        var Y = this;
        this.Ty(function() {
            Y.vG()
        })
    }
    ;
    var Aa = Xe.setTimeout;
    ca.prototype.Ty = function(Y) {
        Aa(Y, 0)
    }
    ;
    ca.prototype.vG = function() {
        for (; this.Rg && this.Rg.length; ) {
            var Y = this.Rg;
            this.Rg = [];
            for (var w = 0; w < Y.length; ++w) {
                var y = Y[w];
                delete Y[w];
                try {
                    y()
                } catch (zb) {
                    this.EF(zb)
                }
            }
        }
        this.Rg = null
    }
    ;
    ca.prototype.EF = function(w) {
        this.Ty(function() {
            throw w;
        })
    }
    ;
    w.prototype.Ku = function() {
        function w(w) {
            return function(Y) {
                S || (S = !0,
                w.call(y, Y))
            }
        }
        var y = this
          , S = !1;
        return {
            resolve: w(this.sK),
            reject: w(this.rx)
        }
    }
    ;
    w.prototype.sK = function(Y) {
        if (Y === this)
            this.rx(new TypeError("A Promise cannot resolve to itself"));
        else if (Y instanceof w)
            this.WK(Y);
        else {
            a: switch (typeof Y) {
            case "object":
                var y = null != Y;
                break a;
            case "function":
                y = !0;
                break a;
            default:
                y = !1
            }
            y ? this.rK(Y) : this.Oz(Y)
        }
    }
    ;
    w.prototype.rK = function(w) {
        var y = void 0;
        try {
            y = w.then
        } catch (pd) {
            this.rx(pd);
            return
        }
        "function" == typeof y ? this.XK(y, w) : this.Oz(w)
    }
    ;
    w.prototype.rx = function(w) {
        this.bD(2, w)
    }
    ;
    w.prototype.Oz = function(w) {
        this.bD(1, w)
    }
    ;
    w.prototype.bD = function(w, y) {
        if (0 != this.zm)
            throw Error("Cannot settle(" + w + ", " + y | "): Promise already settled in state" + this.zm);
        this.zm = w;
        this.ux = y;
        this.wG()
    }
    ;
    w.prototype.wG = function() {
        if (null != this.mm) {
            for (var w = this.mm, y = 0; y < w.length; ++y)
                w[y].call(),
                w[y] = null;
            this.mm = null
        }
    }
    ;
    var Ba = new ca;
    w.prototype.WK = function(w) {
        var y = this.Ku();
        w.oo(y.resolve, y.reject)
    }
    ;
    w.prototype.XK = function(w, y) {
        var Y = this.Ku();
        try {
            w.call(y, Y.resolve, Y.reject)
        } catch (zb) {
            Y.reject(zb)
        }
    }
    ;
    w.prototype.then = function(y, S) {
        function Y(w, y) {
            return "function" == typeof w ? function(y) {
                try {
                    ca(w(y))
                } catch (qd) {
                    Aa(qd)
                }
            }
            : y
        }
        var ca, Aa, Ba = new w(function(w, y) {
            ca = w;
            Aa = y
        }
        );
        this.oo(Y(y, ca), Y(S, Aa));
        return Ba
    }
    ;
    w.prototype.catch = function(w) {
        return this.then(void 0, w)
    }
    ;
    w.prototype.oo = function(w, y) {
        function Y() {
            switch (S.zm) {
            case 1:
                w(S.ux);
                break;
            case 2:
                y(S.ux);
                break;
            default:
                throw Error("Unexpected state: " + S.zm);
            }
        }
        var S = this;
        null == this.mm ? Ba.Sy(Y) : this.mm.push(function() {
            Ba.Sy(Y)
        })
    }
    ;
    w.resolve = S;
    w.reject = function(y) {
        return new w(function(w, S) {
            S(y)
        }
        )
    }
    ;
    w.race = function(y) {
        return new w(function(w, Y) {
            for (var ca = Kg(y), Aa = ca.next(); !Aa.done; Aa = ca.next())
                S(Aa.value).oo(w, Y)
        }
        )
    }
    ;
    w.all = function(y) {
        var Y = Kg(y)
          , ca = Y.next();
        return ca.done ? S([]) : new w(function(w, y) {
            function Aa(y) {
                return function(S) {
                    Ba[y] = S;
                    zb--;
                    0 == zb && w(Ba)
                }
            }
            var Ba = []
              , zb = 0;
            do
                Ba.push(void 0),
                zb++,
                S(ca.value).oo(Aa(Ba.length - 1), y),
                ca = Y.next();
            while (!ca.done)
        }
        )
    }
    ;
    return w
});
Jg("Array.prototype.find", function(y) {
    return y ? y : function(w, y) {
        a: {
            var S = this;
            S instanceof String && (S = String(S));
            for (var ca = S.length, Ba = 0; Ba < ca; Ba++) {
                var Y = S[Ba];
                if (w.call(y, Y, Ba, S)) {
                    w = Y;
                    break a
                }
            }
            w = void 0
        }
        return w
    }
});
Jg("Array.prototype.fill", function(y) {
    return y ? y : function(w, y, S) {
        var ca = this.length || 0;
        0 > y && (y = Math.max(0, ca + y));
        if (null == S || S > ca)
            S = ca;
        S = Number(S);
        0 > S && (S = Math.max(0, ca + S));
        for (y = Number(y || 0); y < S; y++)
            this[y] = w;
        return this
    }
});
(function(y, w) {
    function ca() {
        var a = Vc.decode(ca.zL)
          , b = new Wc(a);
        b.SK(!0);
        this.wI = b.Vd();
        this.rI = b.Vd();
        var c = b.Vd();
        a = a.sub(12, a.length - 12);
        b = new Ka(new Kb(c));
        c = new Ka(new Kb(c));
        Ba.Xb(a, b);
        Ba.Xb(b, c);
        this.a = [];
        a = Lg.LG(c);
        b = 0;
        for (c = a.length; b < c; ) {
            var d = b++;
            this.a[d] = a[d]
        }
    }
    function S(a, b) {
        this.Bz = new Aa;
        this.BA = new Aa;
        this.sourceIndex = this.tag = this.O = this.yj = 0;
        this.source = a;
        this.Vg = b
    }
    function Aa() {
        this.Fe = [];
        this.table = [];
        for (var a = [], b = 0; 16 > b; )
            b++,
            a.push(0);
        this.table = a;
        a = [];
        for (b = 0; 288 > b; )
            b++,
            a.push(0);
        this.Fe = a
    }
    function Ba() {}
    function Y() {}
    function Ze() {
        this.lf = this.xg = null;
        this.mb = this.si = 0;
        this.PF = new ca;
        this.reset()
    }
    function pd() {}
    function zb(a) {
        this.zI = a
    }
    function $e(a) {
        this.po = [];
        this.mp = [];
        try {
            if (a instanceof Ka)
                this.GJ(a);
            else if ("string" == typeof a)
                (new V('<\\?xml version="1.0"\\?>',"")).match(a) ? this.IJ(a) : this.HJ(a);
            else
                throw 0;
            this.Ug.lineHeight < this.info.size && (this.Ug.lineHeight = this.info.size)
        } catch (b) {
            throw 0;
        }
    }
    function bf() {
        this.Oj = new vc(1024);
        this.Cu = new Td(1024);
        this.padding = Array(4);
        for (var a = 0; 4 > a; ) {
            var b = a++;
            this.padding[b] = 0
        }
    }
    function af() {
        this.x = this.y = this.W = this.G = this.offsetX = this.offsetY = this.qu = 0;
        this.code = -1
    }
    function le(a) {
        this.Jw = a
    }
    function me() {}
    function qd() {
        this.Nh = new $a;
        this.Ox = !1;
        this.xb = new $a;
        this.kb = new Xc
    }
    function ne() {
        this.Fm = null;
        this.frames = [];
        this.scale = 1
    }
    function oe(a, b) {
        this.id = b.id;
        this.name = b.name;
        a = a.ae;
        var c = a.xb
          , d = b.kb;
        this.qL = d = new Yc(d.x,d.y,d.W,d.G);
        this.hD = new Yc(d.x,d.y,d.W,d.G);
        d.x /= c.x;
        d.y /= c.y;
        d.W /= c.x;
        d.G /= c.y;
        if (a.hp) {
            var f = c.x / a.Ch.x;
            a = c.y / a.Ch.y;
            d.x *= f;
            d.y *= a;
            d.W *= f;
            d.G *= a
        }
        (this.Px = b.Ox) ? (a = b.Nh,
        this.Nh = new $a(a.x,a.y),
        b = b.xb,
        this.xb = new $a(b.x,b.y)) : (this.Nh = new $a,
        this.xb = new $a(b.kb.W,b.kb.G))
    }
    function cf(a, b) {
        this.Fp = new cb;
        this.ae = a;
        this.scale = b.scale;
        this.Fm = b.Fm;
        this.Vw = b.frames.length;
        a = new Q(this.Vw);
        for (var c = 0, d = b.frames; c < d.length; ) {
            var f = d[c];
            ++c;
            f = f.id;
            a.f == a.B && a.T();
            a.a[a.f++] = f
        }
        a.sort(function(a, b) {
            return a - b
        }, !0);
        this.Wj = !0;
        c = a.a[0];
        d = 1;
        for (f = this.Vw; d < f; ) {
            var g = d++;
            if (c + 1 != a.a[g]) {
                this.Wj = !1;
                break
            }
            ++c
        }
        this.Wj && 16384 < a.a[a.f - 1] && (this.Wj = !1);
        if (this.Wj)
            for (this.$v = (new Q).wa(a.a[a.f - 1] + 1, null),
            a = 0,
            b = b.frames; a < b.length; )
                f = b[a],
                ++a,
                c = new oe(this,f),
                this.$v.a[c.id] = c,
                d = this.Fp,
                f = f.name,
                null != ea[f] ? d.cc(f, c) : d.G[f] = c;
        else
            for (a = this.Vw - 1,
            a |= a >> 1,
            a |= a >> 2,
            a |= a >> 4,
            a |= a >> 8,
            this.aw = new Td((a | a >> 16) + 1),
            a = 0,
            b = b.frames; a < b.length; )
                f = b[a],
                ++a,
                c = new oe(this,f),
                this.aw.set(c.id, c),
                d = this.Fp,
                f = f.name,
                null != ea[f] ? d.cc(f, c) : d.G[f] = c
    }
    function La() {}
    function rd() {
        this.scale = 1;
        this.Xx = this.QH = !1;
        this.Iv = this.rA = !0;
        this.hp = !1;
        this.uA = null;
        this.xb = new $a;
        this.pl = null;
        this.key = ++rd.next;
        this.Ch = this.xb
    }
    function pe(a) {
        this.ik = 0;
        this.D = a
    }
    function Ca() {}
    function df() {
        this.size = 0;
        this.a = []
    }
    function Zc() {
        this.NI = new E;
        this.MI = new E;
        this.rp = new Q(64);
        this.KA = new df;
        null == Zc.yy && (Zc.yy = new Ze)
    }
    function qe() {
        this.lI = new Q(32);
        this.rp = new Q(32)
    }
    function ef() {
        this.sd = new E;
        this.overflow = !1;
        this.Le = new Q(256);
        this.ee = new Q(64)
    }
    function ff() {
        this.multiline = !1;
        this.Oj = !0;
        this.cz = 0;
        this.op = -1;
        this.lD = this.Kv = 0;
        this.align = -1;
        this.width = this.height = 100;
        this.size = 10;
        this.text = ""
    }
    function re() {}
    function se(a) {
        this.$o = 0;
        Ab.call(this, a)
    }
    function ta(a, b) {
        this.gq = this.cw = !1;
        this.ub = !0;
        this.Ia = new Bb("SpriteText");
        this.Ia.o |= 4096;
        ra.call(this, this.Ia, 3);
        this.Mi = new qe;
        this.qa = new ff;
        this.md = new ef;
        null != a && a.appendChild(this);
        null != b && (this.Dd(b),
        this.qa.size = this.jg.pm);
        ta.Zg++
    }
    function dc(a) {
        this.$p = -1;
        this.lB = 0;
        this.Bf = null;
        this.length = -1;
        this.D = a
    }
    function ma(a, b, c) {
        ra.call(this, new Bb(a), 4);
        this.o |= 1024;
        this.Ia = M.ib(this.node, Bb);
        null != b && b.appendChild(this);
        if (null != c)
            for (a = 0; a < c.length; )
                b = c[a],
                ++a,
                this.appendChild(b);
        ma.Zg++
    }
    function gf(a) {
        this.D = a
    }
    function I(a, b, c) {
        this.lk = null;
        this.Bl = -1;
        this.cb = this.wb = 0;
        ra.call(this, this.Vc = new Ab, 7);
        null != a && a.appendChild(this);
        null != b && this.Dd(b);
        null != c && this.dc(c);
        I.Zg++
    }
    function ra(a, b) {
        this.pk = this.iw = null;
        this.o = 96;
        this.vc = !0;
        this.xf = 1;
        this.Ob = this.Pb = this.og = this.pg = this.Tc = 0;
        this.Na = this.Uc = 1;
        this.Ea = this.Ha = 0;
        this.node = a;
        this.node.client = this;
        this.type = b;
        ra.count++
    }
    function wc() {
        this.K = new Lb(1,1,1);
        this.R = new Lb(0,0,0);
        this.na = new Ud;
        this.u = 15;
        var a = this.na;
        a.m11 = 1;
        a.m12 = 0;
        a.m13 = 0;
        a.m21 = 0;
        a.m22 = 1;
        a.m23 = 0;
        a.m31 = 0;
        a.m32 = 0;
        a.m33 = 1;
        a = this.R;
        a.x = a.y = a.z = 0;
        this.K.x = 1;
        this.K.y = 1;
        this.K.z = 1;
        this.u |= 63
    }
    function hf() {}
    function pb() {}
    function Ab(a) {
        qb.call(this, a);
        this.type = 1
    }
    function jf() {
        this.a = [];
        this.count = 0
    }
    function Bb(a) {
        this.Ce = 0;
        this.Ja = null;
        Sa.call(this, a);
        this.o |= 256
    }
    function rb() {}
    function Cb(a) {
        this.state = a
    }
    function kf(a) {
        this.bm = !0;
        this.J = new E;
        this.qg = a;
        this.cm = new Q(1024);
        this.cm.Tb = !0;
        a = [];
        for (var b = 0; 4 > b; )
            b++,
            a.push(new $c);
        this.Nl = a;
        a = [];
        for (b = 0; 4 > b; )
            b++,
            a.push(new Lb);
        this.Yp = a
    }
    function Vd() {
        ec.call(this, 1)
    }
    function lf(a) {
        this.Mw = this.gw = !0;
        this.hw = new fc;
        this.xh = new fc;
        this.Tc = this.Rw = 0;
        this.ne = new B;
        this.f = new $a;
        this.qg = a;
        this.reset(new Xc(0,0,512,512))
    }
    function ad() {
        this.c = this.b = this.j = this.i = 0;
        ec.call(this, 2)
    }
    function ec(a) {
        this.type = a;
        this.Ya = new Lb;
        this.Sb = 0
    }
    function Wd(a) {
        null == a && (a = 1);
        sb.call(this, Da.$f);
        this.value = a
    }
    function tb(a) {
        sb.call(this, Da.Qh);
        this.uu = a;
        var b = sb.en;
        this.rj |= 1 << a[1] << b;
        if (5 == a[1]) {
            var c = a[3];
            this.rj |= 1 << a[2][1] << b + 8;
            this.rj |= 1 << c[1] << b + 16
        }
    }
    function sb(a) {
        this.type = a;
        this.ym = a[1];
        this.rj = 1 << this.ym
    }
    function sd(a) {
        this.Uj = new $a(-1,-1);
        this.Rc = [];
        this.Vj = !1;
        this.Kd = 1;
        this.bw = !1;
        var b = this;
        td.call(this);
        var c = window.document
          , d = window
          , f = c.createElement("div");
        f.id = "tmpdiv";
        f.style.height = "1in";
        f.style.width = "1in";
        c.body.appendChild(f);
        var g = Math.max(c.getElementById("tmpdiv").offsetWidth * d.devicePixelRatio, c.getElementById("tmpdiv").offsetHeight * d.devicePixelRatio) | 0;
        this.Pu = 96 < g ? g : 96;
        c.body.removeChild(f);
        f = null;
        this.Vj = !1;
        null != a && (this.canvas = c.getElementById(a),
        this.Vj = null != this.canvas);
        if (navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
            try {
                c.body.addEventListener("touchmove", function(a) {
                    a.preventDefault()
                }, !1),
                document.addEventListener("touchmove", function(a) {
                    a.preventDefault()
                }, {
                    passive: !1
                })
            } catch (n) {}
        this.Vj || (this.canvas = c.createElement("canvas"),
        this.canvas.id = "surface_" + sd.Gu++,
        this.canvas.width = 320,
        this.canvas.height = 240,
        this.canvas.style.setProperty("touch-action", "none"),
        this.canvas.style.setProperty("-ms-touch-action", "none"),
        this.canvas.style.setProperty("-webkit-overflow-scrolling", "auto"),
        this.canvas.style.setProperty("-webkit-overflow-scrolling", "none"),
        c.body.appendChild(this.canvas),
        a = this.f,
        a.x = 320,
        a.y = 240);
        this.SH() && this.addListener(c, "fullscreenchange", !0, function() {
            var a = b.Au(window.document, null, ["isFullScreen", "fullScreen"]);
            null != a ? b.bw = a : (a = b.Au(window.document, "fullscreenElement"),
            b.bw = null != a);
            null != b.tJ && b.tJ(b.bw)
        });
        this.addListener(c, "visibilitychange", null, function() {
            null != b.jC && b.jC(!window.document.hidden)
        });
        this.addListener(d, "resize", null, function() {
            if (!b.Vj) {
                var a = b.Eq();
                b.resize(a.x, a.y)
            }
        });
        c = this.Eq();
        this.resize(c.x, c.y);
        this.Uj.x = c.x;
        this.Uj.y = c.y;
        (new Db(1E3)).Xb = function() {
            var a = b.Eq();
            if (b.Uj.x != a.x || b.Uj.y != a.y)
                b.Uj.x = a.x,
                b.Uj.y = a.y,
                b.resize(a.x, a.y)
        }
    }
    function te() {
        this.nI = ["none", "source-over", "multiply", "lighter", "screen", null];
        this.zp = null;
        this.Sa = new fc;
        this.Ci = -1;
        this.Cf = "source-over";
        this.$j = null;
        bd.call(this);
        this.DB = this.GB = !0;
        var a = window.navigator.userAgent;
        this.AB = 0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/7.0") ? "msImageSmoothingEnabled" : "imageSmoothingEnabled"
    }
    function ue(a) {
        ib.call(this, 11);
        this.Qu = a
    }
    function ud(a) {
        this.Fl = -1;
        this.Yx = this.Zx = 0;
        this.$x = this.ay = 1;
        this.kb = new Yc;
        this.Vo = 0;
        ib.call(this, 6);
        if (null != a) {
            this.active = a.active;
            this.nm = a.nm;
            var b = this.kb
              , c = a.kb;
            b.x = c.x;
            b.y = c.y;
            b.W = c.W;
            b.G = c.G;
            this.Fl = a.Fl;
            this.Vo = a.Vo;
            this.ae = a.ae;
            this.Yx = a.Yx;
            this.Zx = a.Zx;
            this.$x = a.$x;
            this.ay = a.ay
        }
    }
    function Xd(a) {
        ib.call(this, 13);
        null != a && (this.active = a.active,
        this.nm = a.nm,
        this.color = a.color)
    }
    function ib(a) {
        this.active = this.nm = !0;
        this.type = a
    }
    function bd() {
        this.zB = !0;
        this.yI = new fc;
        this.rh = new fc;
        this.DB = this.GB = !1;
        this.UJ = !0;
        this.GG = !1;
        this.Fd = 1;
        this.cl = null;
        this.NB = !1;
        this.Mu = new fc;
        this.hG = new fc;
        this.QA = new kf(this);
        this.Tj = new lf(this);
        this.ei = 0;
        this.ei |= 1 << Da.Qh[1];
        this.ei |= 1 << Da.$f[1]
    }
    function td() {
        this.Pu = 96;
        vd.call(this)
    }
    function vd() {
        this.Pw = !0;
        this.HB = new Xc;
        this.wg = new Xc;
        this.RI = new Yc(0,0,1,1);
        this.f = new $a(0,0);
        var a = new Lb(1,1,1);
        a.W = 1;
        this.color = a
    }
    function ve() {
        Ea.call(this, 10)
    }
    function mf() {}
    function nf(a) {
        a = a.frames;
        this.Dm = 0;
        this.fj = a.length;
        var b = 0;
        this.Eu = a[b++].Wo;
        for (var c = a[b++].Wo; b < this.fj; )
            if (a[b++].Wo != c) {
                this.Eu = 0;
                break
            }
        this.Fk = Array(this.fj + 1);
        this.names = Array(this.fj);
        for (b = 0; b < this.fj; )
            c = a[b],
            this.Fk[b] = this.Dm,
            this.names[b] = c.value,
            this.Dm += c.Wo,
            ++b;
        this.Fk[b] = this.Dm
    }
    function xc() {
        this.Uf = this.Kl = this.Jl = 0;
        Ea.call(this, 8);
        null == xc.cache && (xc.cache = new cb)
    }
    function of() {}
    function pf() {
        this.jB = new qf;
        this.mc = 0;
        Ea.call(this, 9)
    }
    function qf() {
        this.alpha = 1;
        this.rotation = this.mD = this.nD = 0;
        this.AC = this.BC = 1
    }
    function Ea(a) {
        this.ke = !1;
        this.Xc = 0;
        this.Yq = 1;
        this.Sd = this.Mf = this.Ag = 0;
        this.type = a;
        this.repeat = Fa.$h;
        Ea.gj++
    }
    function we(a, b) {
        this.value = a;
        this.Wo = b
    }
    function rf(a, b) {
        this.name = a;
        this.frames = b
    }
    function yc(a, b, c, d, f) {
        Tb.call(this);
        this.bb = this.Wd;
        this.Wd = new sf(a,b,c,d);
        this.sh = f;
        this.Ta = Array(4);
        this.Ig();
        this.Zf()
    }
    function gc(a) {
        Tb.call(this);
        this.sh = new B(.5 * (a.j - a.c),.5 * (a.i - a.b));
        this.ne = a.tv();
        this.zc = new E(a.c,a.b,a.j,a.i);
        this.Ta = Array(8);
        this.Ig()
    }
    function wd(a, b, c, d) {
        null == d && (d = 3E38);
        null == c && (c = -3E38);
        this.key = cd.next();
        this.axis = a;
        this.level = b;
        this.min = c;
        this.max = d
    }
    function xe() {}
    function Tb() {
        this.current = !1;
        this.jk = new E;
        this.qk = !0
    }
    function Eb() {
        this.list = new Q;
        null == this.A && (this.A = 7614);
        v.call(this)
    }
    function xd(a) {
        this.Ce = 0;
        this.children = [];
        this.rk = this.parent = null;
        this.shape = a;
        a.qk && (a.Zf(),
        a.qk = !1);
        a = a.jk;
        this.sd = new E(a.c,a.b,a.j,a.i);
        a = Eb.X().list;
        a.f == a.B && a.T();
        a.a[a.f++] = this
    }
    function dd() {
        this.padding = this.vd = 0;
        Mb.call(this)
    }
    function ye() {
        ab.call(this, null, "window");
        this.Ic(null)
    }
    function ze(a) {
        this.te = a;
        var b = a.Ma
          , c = b.ma();
        0 == a.axis ? (a = c.b + (c.i - c.b) * a.Fi,
        a = new yc(c.c,a,c.j,a,16),
        this.yi = a.nu(new wd(1,c.c + .5 * (c.j - c.c),c.b,c.i))) : (a = c.c + (c.j - c.c) * a.Fi,
        a = new yc(a,c.b,a,c.i,16),
        this.yi = a.nu(new wd(0,c.b + .5 * (c.i - c.b),c.c,c.j)));
        this.Sj = new xd(a);
        this.Sj.rk = G(this, this.nJ);
        for (this.Sj.name = "split"; null != b; )
            b instanceof na && M.ib(b, na).button.Hb(this.Sj),
            b = b.parent
    }
    function Gg() {}
    function Ae(a, b) {
        Fb.call(this, a, b)
    }
    function Fb(a, b) {
        null == b && (b = .5);
        this.nq = 0;
        Mb.call(this);
        this.axis = a;
        this.aD(b)
    }
    function tf(a) {
        this.a = a
    }
    function zc(a, b) {
        this.Eg = 2;
        Mb.call(this);
        this.rows = b;
        this.cols = a;
        for (var c = [], d = 0; d < a; )
            d++,
            c.push(1 / a);
        a = [];
        for (d = 0; d < b; )
            d++,
            a.push(1 / b);
        this.ve = [c, a]
    }
    function Mb() {
        this.type = this.Ij()
    }
    function na(a) {
        this.WA = Array(4);
        this.Ta = Array(4);
        this.wB = !0;
        ab.call(this, null, a);
        this.button = new xd(new gc(this.J));
        a = this.J.c;
        var b = this.J.b
          , c = this.J;
        c = c.j - c.c;
        var d = this.J;
        d = d.i - d.b;
        this.Ta[0] = new B(a,b);
        this.Ta[1] = new B(a,b + d);
        this.Ta[2] = new B(a + c,b + d);
        this.Ta[3] = new B(a + c,b);
        this.kc = Array(9);
        this.kc[0] = this.button;
        this.kc[0].rk = G(this, this.mJ);
        if (this.wB)
            for (a = 0; 4 > a; ) {
                b = a++;
                c = this.Ta[b];
                d = this.Ta[(b + 1) % 4];
                var f = new xd(gc.qq(c.x, c.y, na.xs, na.xs));
                f.rk = G(this, this.oJ);
                f.id = b;
                this.kc[1 + b] = f;
                this.kc[0].Hb(f);
                f = na.qy;
                var g = 4 * b;
                f = this.kc[b + 5] = new xd(new yc(c.x + f[g],c.y + f[g + 1],d.x + f[g + 2],d.y + f[g + 3],na.xs));
                f.rk = G(this, this.lJ);
                f.id = b;
                this.kc[0].Hb(f);
                c = b & 1;
                d = f.shape.Ne();
                this.WA[b] = f.shape.nu(new wd(c,0 == c ? d.y : d.x))
            }
    }
    function ab(a, b) {
        this.Vi = this.Wi = 0;
        this.scale = new B(1,1);
        this.position = new B(0,0);
        this.sH = !1;
        this.Ze = new B(0,0);
        this.size = new B(0,0);
        this.vi = [];
        this.J = new E(0,0,0,0);
        this.rd = null;
        this.Ce = 0;
        null != b && (this.name = b);
        null != a && this.La(a)
    }
    function yd() {}
    function Yd() {
        this.Rc = new Be
    }
    function Ub() {}
    function Ce(a) {
        this.dw = -1;
        null != a && this.ZC(a)
    }
    function jb() {}
    function A() {}
    function uf() {}
    function Vb(a) {
        null == a && (a = 0);
        this.kg = a;
        this.elapsedTime = 0;
        this.oc = this.kg
    }
    function vf() {}
    function wf() {
        this.zg = NaN;
        this.Ui = new B(0,0);
        this.bp = 3E38;
        this.zv = NaN;
        this.ap = new B(0,0);
        this.ni = new B(0,0);
        this.oi = new B(0,0)
    }
    function xf() {
        this.Ui = new B(0,0);
        this.AH = Array(256);
        this.bp = 3E38;
        this.nA = new E;
        this.ni = new B(0,0);
        this.oi = new B(0,0);
        for (var a = 0; 256 > a; ) {
            var b = a++;
            this.AH[b] = new E
        }
    }
    function yf() {
        this.Aq = new B(0,0);
        this.t = Zd.POSITIVE_INFINITY
    }
    function sf(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.aa = new B(a,b);
        this.C = new B(c,d)
    }
    function Ac(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.p = new B(a,b);
        this.d = new B(c,d)
    }
    function $c() {
        this.d = 0;
        this.n = new B(0,0)
    }
    function zd(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.pa = new B(a,b);
        this.r = c
    }
    function Wb() {}
    function De(a) {
        null == a && (a = 5489);
        this.Fw = 0;
        this.pc = Array(624);
        this.Hl = Array(2);
        this.Hl[0] = 0;
        this.Hl[1] = -1727483681;
        this.Fx(a)
    }
    function $d() {
        this.Fw = 0
    }
    function Lb(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        ae.call(this, a, b, c);
        this.W = 1
    }
    function Xc(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b;
        this.W = c;
        this.G = d
    }
    function Yc(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b;
        this.W = c;
        this.G = d
    }
    function Zd() {}
    function fc() {
        this.HC()
    }
    function Ud() {
        this.m11 = 1;
        this.m21 = this.m13 = this.m12 = 0;
        this.m22 = 1;
        this.m32 = this.m31 = this.m23 = 0;
        this.m33 = 1
    }
    function Z() {}
    function ae(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c
    }
    function $a(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    }
    function B(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    }
    function zf() {}
    function Af(a) {
        this.RJ = a
    }
    function Ga() {
        this.Ae = new B(0,0);
        this.qe = this.Vv = null;
        this.Np = 2;
        this.Kd = 1;
        null == this.A && (this.A = 3518);
        hc.call(this);
        window.document.body.style.setProperty("touch-action", "none");
        window.document.body.style.setProperty("-ms-touch-action", "none");
        window.document.body.style.setProperty("-webkit-overflow-scrolling", "touch");
        var a = window;
        null == window.document.createTouch ? (a.addEventListener("mousedown", G(this, this.cC)),
        a.addEventListener("mouseup", G(this, this.eC)),
        a.addEventListener("mousemove", G(this, this.dC))) : (a.addEventListener("touchstart", G(this, this.hC)),
        a.addEventListener("touchend", G(this, this.fC)),
        a.addEventListener("touchmove", G(this, this.gC)));
        this.Kd = window.devicePixelRatio
    }
    function hc() {
        this.kI = this.mw = !1;
        this.YA = new Q(128);
        this.hk = new B(0,0);
        this.Bb = new Yd;
        this.qC = null;
        this.Me = !1;
        this.enabled = !0;
        null == this.A && (this.A = 3134);
        v.call(this);
        for (var a = [], b = 0; 4 > b; )
            b++,
            a.push(-1);
        this.Zp = a
    }
    function Gb() {
        this.Bb = new Yd;
        this.location = xa.ij;
        this.ctrlKey = this.shiftKey = this.altKey = !1;
        null == this.A && (this.A = 9918);
        v.call(this);
        this.Ff = Array(255);
        this.vw = Array(255);
        for (var a = 0; 255 > a; ) {
            var b = a++;
            this.vw[b] = 0
        }
        window.addEventListener("keydown", G(this, this.aC), !0);
        window.addEventListener("keyup", G(this, this.bC), !0)
    }
    function Bf() {}
    function Hb() {
        this.ke = !0;
        this.Mp = this.Bp = 0;
        null == this.A && (this.A = 1460);
        v.call(this);
        this.Rj = Array(131068);
        this.ye = Array(131068);
        this.Up = Array(131068);
        A.ra = G(this, this.ra);
        A.qc = G(this, this.qc)
    }
    function fb() {}
    function m() {}
    function be(a, b, c) {
        null == this.A && (this.A = 8766);
        v.call(this);
        a.subscribe(this, null, b);
        this.MA = c
    }
    function Ta() {}
    function Cf() {
        this.wl = 0;
        this.Yv = !1;
        this.f = this.ua = this.pw = 0;
        this.Qd = Array(262144);
        ba.wa(this.Qd, 0);
        this.FA = new ce(32768);
        this.a = Array(32768);
        ba.wa(this.a, null);
        this.vl = []
    }
    function qa() {}
    function Df(a, b) {
        this.dd = a;
        this.index = b
    }
    function Ef() {}
    function ed(a, b, c) {
        null == c && (c = -1);
        this.fd = 16;
        this.size = 0;
        this.Bc = -1;
        this.Df = a;
        this.Ld = null == b ? function() {}
        : b;
        this.We = c;
        this.hb = Array(this.fd)
    }
    function ba() {}
    function ic() {}
    function Ff() {}
    function pg() {}
    function Ad(a, b) {
        this.oa = a;
        this.Nb = b
    }
    function Be(a, b) {
        null == a && (a = 0);
        this.f = this.ue = 0;
        this.Fv = !1;
        this.If = a;
        0 < a && (this.lg = this.mk = new Ad(null,this));
        if (null != b && 0 < b.length) {
            this.f = b.length;
            a = b[0];
            if (0 == this.If || 0 == this.ue)
                a = new Ad(a,this);
            else {
                var c = this.lg;
                this.lg = this.lg.next;
                this.ue--;
                c.oa = a;
                c.next = null;
                a = c
            }
            this.head = this.$d = a;
            a = 1;
            for (c = this.f; a < c; ) {
                var d = a++;
                d = b[d];
                if (0 == this.If || 0 == this.ue)
                    d = new Ad(d,this);
                else {
                    var f = this.lg;
                    this.lg = this.lg.next;
                    this.ue--;
                    f.oa = d;
                    f.next = null;
                    d = f
                }
                this.$d = this.$d.next = d
            }
        } else
            this.head = this.$d = null
    }
    function de(a) {
        this.bb = a;
        this.reset()
    }
    function Ee(a, b, c) {
        null == b && (b = !1);
        null == a && (a = 1);
        this.Mb = null;
        this.f = 0;
        this.Tb = !1;
        this.Bc = -2;
        this.lh = 1 > a ? 1 : a;
        this.B = a;
        this.se = b;
        null != c && (a = this.f = c.length,
        b = this.B,
        this.B = a > b ? a : b);
        this.a = Array(this.B + 1);
        this.a[0] = null;
        if (null != c) {
            a = this.a;
            b = 1;
            for (var d = this.f + 1; b < d; ) {
                var f = b++;
                a[f] = c[f - 1]
            }
            this.mK()
        }
    }
    function Fe(a, b) {
        null == a && (a = 16);
        this.f = 0;
        this.Bc = -2;
        this.B = this.lh = 1 > a ? 1 : a;
        null != b && (this.B = b.length);
        this.a = Array(this.B);
        if (null != b)
            for (a = 0; a < b.length; ) {
                var c = b[a];
                ++a;
                this.set(c)
            }
    }
    function vc(a, b) {
        null == b && (b = -1);
        this.ka = this.f = 0;
        this.Bc = -3;
        -1 == b && (b = a);
        this.B = b;
        this.ab = a - 1;
        this.Xa = ba.wa(Array(a), -1);
        this.a = Array(3 * this.B);
        this.Ba = Array(this.B);
        b = 2;
        a = this.a;
        for (var c = 0, d = this.B; c < d; )
            c++,
            a[b - 1] = -2147483648,
            a[b] = -1,
            b += 3;
        a = this.Ba;
        b = 0;
        for (c = this.B - 1; b < c; )
            d = b++,
            a[d] = d + 1;
        a[this.B - 1] = -1
    }
    function Td(a, b) {
        null == b && (b = -1);
        this.ka = this.f = 0;
        -1 == b && (b = a);
        this.B = 2 > b ? 2 : b;
        this.Fa = new vc(a,this.B);
        this.wh = Array(this.B);
        this.Ba = Array(this.B);
        this.Ff = ba.wa(Array(this.B), -2147483648, 0, this.B);
        a = this.Ba;
        b = 0;
        for (var c = this.B - 1; b < c; ) {
            var d = b++;
            a[d] = d + 1
        }
        a[this.B - 1] = -1
    }
    function Gf() {}
    function qg() {}
    function ee() {}
    function cd() {}
    function Bd(a) {
        this.kh = null;
        this.Tw = 0;
        this.oa = a;
        this.jb = null;
        this.Db = !1
    }
    function fe(a, b) {
        this.node = a;
        this.Fm = b;
        this.Jc = this.next = null
    }
    function ge(a) {
        this.bb = a;
        this.Ia = this.bb.Jb
    }
    function Ge() {
        this.eq = this.Wp = 16;
        this.Mb = null;
        this.f = 0;
        this.Jb = null;
        this.Vy = this.Tb = !1;
        this.ye = Array(this.eq);
        this.Qd = Array(this.Wp)
    }
    function Bc() {}
    function rg() {}
    function jc(a, b, c) {
        null == a && (a = 16);
        this.V = 0;
        this.Bc = -2;
        this.B = this.lh = 1 > a ? 1 : a;
        if (null != b) {
            a = this.V = b.length;
            var d = this.B;
            this.B = a > d ? a : d
        }
        this.a = Array(this.B);
        if (null != b) {
            a = this.a;
            d = 0;
            for (var f = this.V; d < f; ) {
                var g = d++;
                a[g] = b[g]
            }
        }
        c && (this.Bc = 0)
    }
    function sg() {}
    function ce(a, b, c) {
        null == a && (a = 16);
        this.f = this.ua = 0;
        this.Bc = -2;
        this.B = this.lh = 1 > a ? 1 : a;
        if (null != b) {
            a = this.f = b.length;
            var d = this.B;
            this.B = a > d ? a : d
        }
        this.a = Array(this.B);
        if (null != b) {
            a = this.a;
            d = 0;
            for (var f = this.f; d < f; ) {
                var g = d++;
                a[g] = b[g]
            }
        }
        c && (this.Bc = 0)
    }
    function Hf() {}
    function he(a) {
        this.bb = a;
        this.a = this.bb.a;
        this.th = this.bb.f;
        this.Ef = 0
    }
    function He(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    }
    function ie() {}
    function kc(a, b, c) {
        if (null != c) {
            this.Z = a;
            this.Fa = b;
            a = this.a = Array(this.Z * this.Fa);
            b = 0;
            for (var d = this.Z * this.Fa; b < d; ) {
                var f = b++;
                a[f] = c[f]
            }
        } else
            this.Z = a,
            this.Fa = b,
            this.a = Array(this.Z * this.Fa)
    }
    function If(a, b) {
        this.offset = 0;
        this.loop = !1;
        this.gk = a;
        this.a = b;
        this.zd = O.getContext()
    }
    function tg() {}
    function O() {}
    function Ie() {}
    function Jf(a, b, c) {
        this.name = a;
        this.data = b;
        this.bh = c
    }
    function Cd() {
        this.Ga = 0;
        this.Nw = new cb;
        this.Cl = null;
        this.nb = new Vb(1);
        null == this.A && (this.A = 820);
        v.call(this)
    }
    function Kf(a) {
        this.bb = a
    }
    function Lf(a) {
        this.bb = a
    }
    function Cc(a) {
        this.bb = {};
        if (null != a)
            if (a instanceof Array && null == a.l)
                for (var b = 0, c = a.length; b < c; )
                    this.set(a[b], a[b + 1]),
                    b += 2;
            else
                this.set(D.Qa(a));
        this.has = new Kf(this.bb);
        this.get = new Lf(this.bb)
    }
    function Dc(a, b) {
        this.caller = a;
        this.Aj = b instanceof Cc ? b : new Cc(b)
    }
    function gb() {
        this.Lv = [];
        null == this.A && (this.A = 702);
        v.call(this);
        this.Ni = this.add(Cd)
    }
    function Ec() {}
    function Mf(a, b, c) {
        this.sb = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c;
        if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength)
            throw 0;
        this.byteLength = this.length;
        this.byteOffset = this.offset;
        this.buffer = this.sb
    }
    function Xb(a) {
        if (a instanceof Array && null == a.l)
            this.aa = a,
            this.byteLength = a.length;
        else {
            this.aa = [];
            for (var b = 0; b < a; ) {
                var c = b++;
                this.aa[c] = 0
            }
            this.byteLength = a
        }
    }
    function ug() {}
    function M() {}
    function Fc(a) {
        this.oa = a;
        Error.captureStackTrace && Error.captureStackTrace(this, Fc)
    }
    function je(a) {
        this.ha = new Gc;
        this.Dh = a
    }
    function Hc() {}
    function Je() {}
    function Ia() {}
    function Nf() {}
    function Wc(a, b, c) {
        null == b && (b = 0);
        null == c && (c = a.length - b);
        if (0 > b || 0 > c || b + c > a.length)
            throw 0;
        this.C = a.C;
        this.mb = b;
        this.Mx = this.wf = c
    }
    function Ke() {}
    function Of() {
        this.size = this.mb = 0
    }
    function cb() {
        this.G = {}
    }
    function Pf(a, b) {
        this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length
    }
    function Qf(a) {
        this.head = a
    }
    function Rf(a, b) {
        this.item = a;
        this.next = b
    }
    function Le() {
        this.length = 0
    }
    function Sf(a) {
        for (var b = a.length, c = 1; b > 1 << c; )
            ++c;
        if (8 < c || b != 1 << c)
            throw 0;
        this.fi = a;
        this.ZI = c
    }
    function Vc() {}
    function Ka(a) {
        this.length = a.byteLength;
        this.C = new ke(a);
        this.C.HF = a;
        a.wH = this;
        a.LF = this.C
    }
    function Db(a) {
        var b = this;
        this.id = setInterval(function() {
            b.Xb()
        }, a)
    }
    function Tf(a, b) {
        this.high = a;
        this.low = b
    }
    function Yb(a) {
        this.Zi = 0;
        this.url = a;
        null == Yb.HA && (Yb.HA = this.OH(),
        a = ua.getFeature("URL", window).Wu,
        null != a && null != T.fa(a, "createObjectURL") && (Yb.QI = a))
    }
    function Uf(a) {
        a = a.split(".");
        this.SI = D.parseInt(a[0]);
        this.YI = D.parseInt(a[1]);
        this.JJ = D.parseInt(a[2])
    }
    function Vf(a, b) {
        this.id = a;
        this.sj = [b]
    }
    function Ic() {}
    function Me(a, b) {
        this.nd = new Yb(a);
        this.Pf = b
    }
    function Wf() {}
    function N() {}
    function H() {}
    function lc() {}
    function fd(a) {
        null == this.A && (this.A = 2622);
        v.call(this);
        this.fk = new I(a,55,"plank_window");
        this.D = new I(a,66)
    }
    function Nb(a, b, c, d) {
        null == this.A && (this.A = 7740);
        v.call(this);
        this.nb = new Vb(c);
        this.Jw = a;
        this.TA = b;
        this.Sp = d
    }
    function Dd(a, b) {
        null == this.A && (this.A = 15668);
        Ob.call(this, a, b);
        this.nb = new Vb(.5);
        this.D.sa(0);
        if (J.X().ah)
            switch (this.vh) {
            case 1:
                a = H.translate(e.Gn);
                break;
            case 2:
                a = H.translate(e.In);
                break;
            case 3:
                a = H.translate(e.Kn);
                break;
            case 4:
                a = H.translate(e.Mn);
                break;
            default:
                a = null
            }
        else
            switch (this.vh) {
            case 1:
                a = H.translate(e.Fn);
                break;
            case 2:
                a = H.translate(e.Hn);
                break;
            case 3:
                a = H.translate(e.Jn);
                break;
            case 4:
                a = H.translate(e.Ln);
                break;
            default:
                a = null
            }
        var c = 1.1 * this.mi().zoom | 0;
        this.U = new ub(b,90,-1);
        this.U.sa(0);
        this.U.ia(a);
        this.U.Ca.PC(-c / 2);
        this.U.WC(c);
        this.U.Ih();
        r.play(r.GE)
    }
    function Ob(a, b) {
        this.ac = this.Rp = 0;
        null == this.A && (this.A = 15412);
        v.call(this);
        this.vh = a;
        this.D = new I(b,40,this.Ej());
        this.D.ea();
        this.D.Oa()
    }
    function Ne(a) {
        this.alpha = 0;
        qb.call(this);
        this.vh = a;
        this.gc = new ue(G(this, this.Qu))
    }
    function qb(a) {
        this.cj = null;
        Sa.call(this, a);
        this.o |= 512;
        switch (this.Wg()) {
        case 1:
            var b = new Vd;
            break;
        case 2:
            b = new ad
        }
        this.yh = b;
        this.Ux();
        this.cj = Array(sb.en)
    }
    function Sa(a) {
        this.client = null;
        this.Kc = new wc;
        this.local = new wc;
        Ed.call(this);
        this.name = a;
        this.key = cd.next();
        switch (this.Wg()) {
        case 1:
            var b = new Vd;
            break;
        case 2:
            b = new ad
        }
        this.Jg = b;
        this.o = 2280
    }
    function Ed() {
        this.bG = !0;
        this.controllers = null
    }
    function Fd(a, b) {
        this.ih = Z.Eb(2);
        null == this.A && (this.A = 15924);
        v.call(this);
        this.vh = a;
        this.ih = Z.Eb(2);
        this.nb = new Vb(.5);
        var c = R.Wa;
        c.$c([74, 40]);
        c.va(90, 70);
        this.cq = new Ne(a);
        M.ib(b.node, Bb).appendChild(this.cq);
        this.iI = this.add(null, new Ob(a,b));
        this.uc = this.add(null, new Dd(a,b));
        Db.xj(G(this, this.enable), 1E3)
    }
    function Gd() {}
    function ub(a, b, c) {
        null == c && (c = -1);
        this.NA = !1;
        this.jw = 200;
        this.lw = 8;
        this.f = -1;
        this.J = new E;
        this.U = null;
        null == this.A && (this.A = 3646);
        v.call(this);
        this.Ca = new ta(a,b);
        this.Ca.RC(b);
        this.Ka = this.Ca;
        -1 != c && (this.Ka = new ta(a,c),
        this.Ka.RC(c))
    }
    function Oe() {
        this.pI = Z.om();
        this.qI = Z.Eb(2)
    }
    function Xf() {}
    function Jc() {
        this.CB = !1;
        this.OA = 0;
        this.Da = [];
        null == this.A && (this.A = 2364);
        L.call(this)
    }
    function mc() {
        null == this.A && (this.A = 7998);
        L.call(this)
    }
    function gd(a) {
        this.vc = !1;
        null == this.A && (this.A = 3902);
        v.call(this);
        this.button = new vb(a,55,"icon_settings");
        this.button.Td = G(this, this.Td);
        this.add(null, this.button);
        this.Fc = new I(a,55,"icon_music");
        this.Fc.I(!1);
        this.Fc.ea();
        this.Hc = new I(a,55,"icon_sound");
        this.Hc.I(!1);
        this.Hc.ea()
    }
    function hd() {
        null == this.A && (this.A = 4158);
        v.call(this);
        this.group = new ma("menu_bar_highscore");
        new I(this.group,17,"highscore");
        this.Ad = new ub(this.group,94,99);
        this.Ad.La(E.Qi(120, 20, 250, 60));
        this.update()
    }
    function id() {
        null == this.A && (this.A = 4414);
        v.call(this);
        this.group = new ma("menu_bar_coins");
        new I(this.group,17,"coins");
        this.wi = new ub(this.group,94,99);
        this.wi.La(E.Qi(90, 20, 110, 60));
        this.wi.ia("" + yd.nl(l.iv()), 8, 200);
        this.wi.Ac();
        this.wi.af(0, 0);
        this.zl = new ma(null,this.group)
    }
    function jd() {
        this.ac = this.Qw = 0;
        null == this.A && (this.A = 4668);
        v.call(this);
        this.group = new ma("menu_bar_xp");
        new I(this.group,17,"bg");
        this.EA = new I(this.group,17,"bar0025");
        this.eh = new I(this.group,17,"bar0025");
        this.eh.I(!1);
        this.eh.Hd().add();
        new I(this.group,17,"fg");
        this.nc = new ub(this.group,94,99);
        this.nc.La(E.Qi(15, 10, 80, 75));
        this.nc.ia("" + l.je(), 8, 200);
        this.nc.Ac();
        this.nc.af(0, 0);
        this.nc.ea();
        this.TC()
    }
    function wb() {
        null == this.A && (this.A = 4926);
        v.call(this);
        var a = R.Wa;
        a.$c([48, 17]);
        a.va(94, 70);
        a.va(99, 70);
        a.va(49, 42);
        a.va(72, 42);
        0 > wb.to && (wb.to = F.Jj)
    }
    function Kc() {
        null == this.A && (this.A = 5182);
        v.call(this);
        this.group = new ma;
        new I(this.group,88);
        this.button = new vb(this.group,80);
        var a = H.translate(e.Sn);
        this.button.OC(a, 81, -1, null, new B(.7,.7));
        this.button.La(E.Qi(20, 108, 358, 140));
        this.add(null, this.button)
    }
    function Ua() {
        this.bk = null;
        null == this.A && (this.A = 5438);
        L.call(this)
    }
    function Hd() {
        this.fq = 1;
        this.Ga = 0;
        this.VA = Z.Eb(2);
        this.oI = Z.qj(.2);
        this.nb = new Vb(.5);
        null == this.A && (this.A = 16188);
        Ib.call(this)
    }
    function nc() {
        null == this.A && (this.A = 7230);
        L.call(this)
    }
    function Pe(a, b, c) {
        this.ZA = !1;
        this.Mv = [0, 0];
        this.Ck = new I(a,b,c)
    }
    function kb() {
        null == this.A && (this.A = 6460);
        L.call(this)
    }
    function Jb() {
        null == this.A && (this.A = 6718);
        L.call(this)
    }
    function Pb() {
        null == this.A && (this.A = 6974);
        L.call(this)
    }
    function Id(a, b, c) {
        this.Aw = !1;
        this.ac = 0;
        null == this.A && (this.A = 5692);
        vb.call(this, a, b, c)
    }
    function vb(a, b, c) {
        this.vc = this.qp = !0;
        this.Xl = new B;
        this.J = new E;
        this.fz = .25;
        null == this.A && (this.A = 2876);
        v.call(this);
        this.L = new ma("button",a);
        this.Qj = new I(this.L,b,c);
        Ga.X().subscribe(G(this, this.Rb))
    }
    function oc(a, b) {
        this.K = 1;
        this.Da = [];
        var c = this;
        null == this.A && (this.A = 5950);
        v.call(this);
        this.group = new ma(null,a);
        this.Kf = b;
        a = new I(this.group,55,"boost_frame");
        this.Da[0] = a;
        a.N(.5);
        b = new I(this.group,55,this.Io());
        b.ea();
        b.Oa();
        b.P(a.za() / 2);
        b.S(a.Aa() / 2);
        b.N(.75);
        this.Da[1] = b;
        a = new I(this.group,55,"box_amount_a");
        a.P(-8);
        a.S(-8);
        a.N(.5);
        this.Da[2] = a;
        a = new I(this.group,55,"check");
        a.P(70);
        a.S(-7);
        this.Da[3] = a;
        a = new I(this.group,55,"lock");
        a.P(72);
        a.S(80);
        a.N(.5);
        this.Da[4] = a;
        this.button = new Id(this.group,55,"plus_button");
        this.button.La(E.Qi(70, 91, 40, 40));
        this.button.Td = function() {
            c.Td(c.Kf)
        }
        ;
        this.add(null, this.button);
        Ga.X().subscribe(G(this, this.Rb))
    }
    function xb() {}
    function yb() {
        null == this.A && (this.A = 6206);
        L.call(this)
    }
    function L() {
        this.Xp = !0;
        this.fB = new cb;
        this.Kw = new cb;
        this.kc = [];
        null == this.A && (this.A = 2108);
        la.call(this)
    }
    function Ib() {
        this.Qp = -1;
        la.call(this)
    }
    function la() {
        null == this.A && (this.A = 1598);
        ya.call(this)
    }
    function ya() {
        this.ir = !1;
        null == this.A && (this.A = 1086);
        v.call(this);
        this.name = Ub.rv(this);
        this.state = U.cg;
        this.Ec = new Dc(null,null);
        this.A |= 2
    }
    function Lc() {
        this.Ga = this.ac = 0;
        null == this.A && (this.A = 14908);
        K.call(this)
    }
    function Mc() {
        this.yp = -1;
        this.Gc = 0;
        this.Ew = 60;
        this.Sl = 1;
        this.hh = new E;
        this.kk = 1;
        this.GA = !1;
        this.fh = [];
        null == this.A && (this.A = 14388);
        K.call(this)
    }
    function Nc(a, b, c, d) {
        this.ih = null;
        null == this.A && (this.A = 12860);
        v.call(this);
        this.ih = c;
        this.JI = b;
        this.nb = new Vb(a);
        this.DI = d
    }
    function Zb(a, b) {
        this.tI = Z.om();
        this.Xv = new Vb;
        this.Dp = 3E38;
        this.L = new ma;
        this.vd = 0;
        null == this.A && (this.A = 13364);
        Qb.call(this);
        Zb.gj++;
        this.Kf = a;
        var c = J.X().F.viewport
          , d = 20 * c.zoom;
        c = 4 * c.zoom;
        switch (a[1]) {
        case 0:
            a = a[2];
            switch (a[1]) {
            case 2:
            case 5:
            case 6:
            case 7:
                c *= .75
            }
            this.Wl = new E(-d / 2,-c / 2,d / 2,c / 2);
            switch (a[1]) {
            case 2:
                var f = 35;
                break;
            case 3:
            case 4:
                f = 34;
                break;
            case 5:
                f = 64;
                break;
            case 0:
            case 1:
            case 6:
                f = 77;
                break;
            case 7:
                f = 19
            }
            this.ck = new ta(this.L,16);
            this.ck.Xd(d, c);
            this.ck.ia(b);
            this.ck.De(200);
            this.ck.Ee();
            this.ck.yb(this.Wl, 0, 0);
            this.U = new ta(this.L,f);
            this.U.Xd(d, c);
            this.U.ia(b);
            this.U.De(200);
            this.U.Ee();
            this.U.yb(this.Wl, 0, 0);
            break;
        case 1:
        case 2:
            this.Wl = new E(.3 * -d,.4 * -c,.3 * d,.4 * c);
            this.U = new ta(this.L,93);
            "" == b && (b = "00000",
            this.U.I(!1));
            this.U.Xd(d, c);
            this.U.De(200);
            this.U.ia(b);
            this.U.Ee();
            this.U.yb(this.Wl, 0, 0);
            break;
        case 3:
            this.D = new I(this.L,31,"extra_time"),
            this.D.Oa(),
            this.D.ea(),
            this.D.N(c / this.D.Aa())
        }
        J.X().Fb.hc(7).appendChild(this.L)
    }
    function Jd() {
        null == this.A && (this.A = 11324);
        K.call(this)
    }
    function kd() {
        this.zw = 0;
        null == this.A && (this.A = 13630);
        K.call(this)
    }
    function Yf(a) {
        this.Sa = a;
        this.Yj = new Q(100);
        for (a = 0; 100 > a; ) {
            a++;
            var b = new Q;
            b.Tb = !0;
            b.iterator();
            var c = this.Yj;
            c.f == c.B && c.T();
            c.a[c.f++] = b
        }
        this.mg = new Q;
        this.mg.Tb = !0;
        this.Qb = new Zf
    }
    function Zf() {
        this.Ke = new Q;
        this.Ke.Tb = !0;
        this.fg = new Q;
        this.fg.Tb = !0;
        this.jf = new Q;
        this.jf.Tb = !0;
        this.ce = new Q;
        this.ce.Tb = !0;
        this.$k = new Q;
        this.$k.Tb = !0;
        this.em = new Q;
        this.em.Tb = !0;
        this.al = new Q;
        this.al.Tb = !0;
        this.Xi = !1
    }
    function Qe(a) {
        this.Bd = a;
        this.a = new Q;
        this.zi = -1;
        this.Al = null
    }
    function ld() {
        this.Sv = !1;
        null == this.A && (this.A = 11838);
        K.call(this)
    }
    function Kd() {
        this.Bw = !0;
        null == this.A && (this.A = 13884);
        K.call(this)
    }
    function $f() {
        this.Il = [];
        this.root = new Bb;
        for (var a = [], b = 0; 8 > b; )
            b++,
            a.push(new ma);
        this.Il = a;
        a = 0;
        for (b = this.Il; a < b.length; ) {
            var c = b[a];
            ++a;
            this.root.appendChild(c.node)
        }
    }
    function Ld() {
        this.Ol = !0;
        null == this.A && (this.A = 14140);
        K.call(this)
    }
    function lb() {}
    function ag(a) {
        this.rw = this.sw = 0;
        this.Bd = a;
        var b = 1E4 / 3 | 0;
        this.we = new Qe(a);
        this.we.add(1, b);
        this.we.add(2, b);
        this.we.add(4, b);
        this.we.Bk();
        this.$A = this.JB(!0);
        this.sw = 0;
        this.uI = 0 != (J.X().Zk & 1 << ka.Mg[1])
    }
    function Pa(a, b, c) {
        this.pp = new Q;
        this.XA = [];
        this.FI = [];
        this.Dw = [];
        this.Dl = Va.jj;
        this.iB = [];
        this.ye = [];
        Pa.FH();
        this.Bd = a;
        this.Za = new kc(b,c);
        this.AI = new kc(b,c);
        for (a = 0; a < b; )
            c = a++,
            this.XA[c] = 0;
        this.jI = new ag(this.Bd);
        this.zG()
    }
    function Oc() {
        null == this.A && (this.A = 10300);
        K.call(this)
    }
    function Oa() {}
    function t() {}
    function pc() {
        this.G = {}
    }
    function vg() {}
    function Ha() {}
    function qc() {
        null == this.A && (this.A = 9278);
        K.call(this)
    }
    function Qb() {
        this.Wf = new B(0,0);
        this.xD = new B(0,0);
        this.Nc = 0;
        this.alpha = this.scale = 1;
        this.rotation = 0;
        this.force = new B(0,0);
        this.Y = new B(0,0);
        this.position = new B(0,0);
        null == this.A && (this.A = 13108);
        K.call(this)
    }
    function Wa() {}
    function J() {
        this.bq = !1;
        this.kq = 0;
        this.bB = !0;
        this.Hw = this.Lw = !1;
        this.El = 0;
        this.Ga = this.kB = -1;
        this.Tg = null;
        this.freeze = !1;
        this.di = this.tu = !0;
        this.Jv = new B;
        this.np = -1;
        this.he = this.rl = this.lu = this.paused = this.Bm = this.su = !1;
        this.so = this.fc = this.Gd = this.Bg = this.Nj = this.time = 0;
        this.Fb = new $f;
        this.ah = !1;
        this.Xf = 0;
        null == this.A && (this.A = 8620);
        Xa.call(this)
    }
    function Xa() {
        null == this.A && (this.A = 8254);
        v.call(this);
        this.Kb = ba.wa(Array(qa.Ar + 1 + 1), null);
        this.Kb[0] = new Q(4);
        this.Ji = new vc(1024);
        this.vB = new Q(16);
        null == Xa.wk && (Xa.wk = new ed(function() {
            return new Q
        }
        ));
        Xa.count++
    }
    function Pc() {
        this.K = 1;
        this.xi = new E;
        null == this.A && (this.A = 14644);
        K.call(this)
    }
    function Md() {
        this.Ae = new B;
        null == this.A && (this.A = 10812);
        K.call(this)
    }
    function md() {
        this.Y = 0;
        null == this.A && (this.A = 10044);
        K.call(this)
    }
    function Nd() {
        this.Vl = new E;
        this.ww = !1;
        null == this.A && (this.A = 9534);
        K.call(this)
    }
    function bg(a) {
        this.yf = new ce(8);
        this.Dc = a;
        this.Bd = a.vx;
        this.we = new Qe(this.Bd);
        for (var b = [], c = 0, d = a.Wy; c < d; )
            c++,
            b.push(0);
        this.Pp = b;
        b = [];
        c = 0;
        for (d = a.Wy; c < d; )
            c++,
            b.push(0);
        this.ph = b;
        0 != (a.Zk & 1 << ka.He[1]) && (this.IA = this.IB(!0),
        this.ph[ka.He[1]] = 0);
        0 != (a.Zk & 1 << ka.Ie[1]) && (this.sB = this.KB(!0),
        this.ph[ka.Ie[1]] = 0);
        a = 1E3 / 3 | 0;
        this.we.add(1, a);
        this.we.add(2, a);
        this.we.add(4, a);
        this.we.Bk();
        a = this.yg();
        b = this.yg();
        for (c = this.yg(); c == a || c == b; )
            c = this.yg();
        for (d = this.yg(); d == b || d == c; )
            d = this.yg();
        this.enqueue(a);
        this.enqueue(b);
        this.enqueue(c);
        this.enqueue(d);
        this.Ib = this.next();
        this.Nf = this.next()
    }
    function $b() {
        this.Hi = -1;
        this.nk = 0;
        null == this.A && (this.A = 11580);
        K.call(this)
    }
    function mb() {
        this.o = 0;
        null == this.A && (this.A = 10548);
        v.call(this)
    }
    function nb(a) {
        this.Dc = null;
        this.Ga = 0;
        this.kx = new B(0,0);
        this.LB = !1;
        this.rotation = 0;
        this.scale = 1;
        this.visible = !0;
        this.CC = 1;
        this.Wf = new B;
        null == this.A && (this.A = 15164);
        v.call(this);
        this.Dc = J.X();
        this.F = a;
        this.F.gf = this;
        this.F.aA(this.Wf);
        var b = this.kx
          , c = this.Wf;
        b.x = c.x;
        b.y = c.y;
        this.visible = 0 >= (a.M & 2)
    }
    function Re() {}
    function rc() {
        this.Ue = 1;
        this.Ei = 0;
        null == this.A && (this.A = 12092);
        v.call(this)
    }
    function sc() {
        this.Ue = 1;
        this.Ei = 0;
        null == this.A && (this.A = 12348);
        v.call(this)
    }
    function Od() {
        null == this.A && (this.A = 12606);
        K.call(this)
    }
    function hb() {
        this.Pv = -1;
        this.oh = [];
        this.nh = [];
        this.Ql = new B(0,0);
        this.gb = new B(0,0);
        this.Ra = new B(0,0);
        null == this.A && (this.A = 11060);
        K.call(this)
    }
    function E(a, b, c, d) {
        null == d && (d = -1);
        null == c && (c = -1);
        null == b && (b = 1);
        null == a && (a = 1);
        a <= c && b <= d ? (this.c = a,
        this.b = b,
        this.j = c,
        this.i = d) : (this.c = this.b = Infinity,
        this.j = this.i = -Infinity)
    }
    function K() {
        null == this.A && (this.A = 9022);
        v.call(this)
    }
    function nd() {
        Ja.call(this)
    }
    function r() {}
    function F() {}
    function R() {}
    function tc() {
        this.BI = this.xl = 0;
        this.mB = this.Iw = this.nw = 1;
        this.xw = new cb;
        this.xe = new Q;
        this.DA = new cb
    }
    function cg() {
        this.Tp = 0;
        this.Cw = !1;
        this.Fb = new Bb("root")
    }
    function Se() {}
    function oa() {}
    function l() {}
    function sa() {
        null == this.A && (this.A = 300);
        v.call(this)
    }
    function ua() {}
    function v() {
        null == this.A && (this.A = 62);
        m.register(this)
    }
    function dg(a, b, c, d) {
        this.ui = a;
        this.ew = b;
        this.Ip = c;
        this.BB = d;
        this.BB || (a = this.ui.position,
        b = this.ew,
        a.x = b.x,
        a.y = b.y)
    }
    function wg() {}
    function ac() {
        Ja.call(this)
    }
    function Te() {
        this.iq = new Ac;
        Ja.call(this)
    }
    function Rb() {
        this.anchor = new B(0,0);
        Ja.call(this)
    }
    function Pd() {
        Ja.call(this)
    }
    function Qd() {
        Ja.call(this)
    }
    function Ja() {
        this.type = this.bi();
        this.Ag = this.li()
    }
    function eg(a) {
        this.Cp = new B;
        this.Ve = new B;
        this.zoom = 1;
        this.Sa = a;
        this.J = new E(0,0,320,480);
        this.JA = new E;
        this.Lq(.5, .5)
    }
    function fa() {}
    function fg(a) {
        this.EB = new Ue;
        this.FB = new wf;
        this.qB = [];
        this.uk = new Q;
        this.vq = new B;
        this.wq = new B;
        this.vk = null;
        this.oA = !1;
        this.Cv = !0;
        this.Bv = 1;
        this.Lj = new Ac;
        this.Sa = a;
        this.jq = new zd;
        this.uk.Tb = !0
    }
    function gg(a) {
        this.hB = new xf;
        this.Vp = new E;
        this.jq = new zd(0,0,1);
        this.iq = new Ac;
        this.cd = 0;
        this.Sa = a;
        this.result = new hg;
        this.result.Co = new Q;
        this.result.Bj = null;
        this.result.uj = new Q;
        this.result.Cq = new B;
        this.result.Bq = new B;
        this.result.ix = -1;
        this.Cd = new fg(a)
    }
    function hg() {}
    function ig(a) {
        this.gB = new yf;
        this.Sa = a;
        this.Sc = new Q(4);
        this.Sc.wa(4, null);
        var b = this.Sc
          , c = b.a
          , d = 0;
        for (b = b.f; d < b; ) {
            var f = d++;
            c[f] = new $c
        }
        c = this.Sc;
        d = new $c;
        d.n.x = 1;
        d.n.y = 0;
        d.d = 0;
        c.a[3] = d;
        c = this.Sc;
        d = new $c;
        a = a.pv();
        d.n.x = -1;
        d.n.y = 0;
        d.d = -1 * a;
        c.a[1] = d;
        this.Sc.Tb = !0;
        this.LJ = 15;
        this.Ek()
    }
    function jg() {}
    function kg() {
        this.tg = new Ac;
        this.ug = new B(0,0);
        this.KI = 0;
        this.Bb = new Yd;
        this.Bi = new Q(1024);
        this.Pi = this.Lf = 0;
        this.cols = -1;
        this.uG = !1;
        this.$u = 0;
        this.de = new Q(4);
        this.$i = new E;
        this.jc = null;
        this.time = A.yo;
        this.viewport = new eg(this);
        var a = Rd.dJ();
        a.Gh = 1;
        a.Fh = 0;
        this.QC(a, 0);
        this.Zl = new Q;
        this.hq = new Q
    }
    function Ve(a) {
        this.hb = new Q(32);
        this.Df = a;
        this.hb.Tb = !0
    }
    function lg(a) {
        this.Sa = a;
        this.dB = new Ve(function() {
            var a = new Q(32);
            a.Tb = !0;
            return a
        }
        );
        this.cB = new Ve(function() {
            var a = new Q(4);
            a.Tb = !0;
            return a
        }
        );
        this.yB = new vc(64,64)
    }
    function Rd() {
        this.Gh = 1;
        this.Fh = 0;
        this.tb = null
    }
    function mg(a, b, c) {
        this.Xj = a;
        this.mI = b;
        this.Nb = Array(6);
        this.EI = c
    }
    function ng() {
        this.mh = new pc
    }
    function xg() {}
    function Qa() {}
    function Ue() {
        this.zg = NaN;
        this.Av = new B(0,0);
        this.ep = NaN;
        this.Yg = new B(0,0);
        this.ql = new B(0,0);
        this.cp = NaN;
        this.Kj = new B(0,0)
    }
    function Q(a, b, c) {
        null == a && (a = 2);
        this.Mb = null;
        this.f = 0;
        this.Tb = !1;
        this.Bc = -2;
        this.lh = 2 > a ? 2 : a;
        null != b && 0 < b.length ? (this.f = b.length,
        this.a = b.slice(0, b.length),
        this.B = this.f) : (this.B = this.lh,
        this.a = Array(this.B));
        c && (this.Bc = 0)
    }
    function og() {}
    function bc() {}
    function Sd() {}
    function We() {}
    function Sb(a) {
        this.Ny = this.rotation = this.M = this.Nv = 0;
        this.Cz = this.$g = 1;
        this.Nc = this.Lh = this.vd = 0;
        this.scale = 1;
        this.fb = new zd;
        this.force = new B(0,0);
        this.Y = new B(0,0);
        this.position = new B(0,0);
        this.Ab = null;
        this.Ub = this.pd = -1;
        this.code = 0;
        this.gf = Sd.X;
        Sb.count++;
        this.key = cd.next();
        this.F = a;
        this.fb.r = 1 - fa.BD / 2;
        this.position = this.fb.pa;
        this.Y = new B(0,0);
        this.force = new B(0,0);
        this.ig = new Q(4);
        this.ig.Tb = !0;
        this.Og(Pd.X)
    }
    function Qc() {}
    function z(a) {
        this.nodeType = a;
        this.children = [];
        this.ko = new cb
    }
    function cc() {}
    function ob() {}
    function Gc() {
        this.C = ""
    }
    function D() {}
    function T() {}
    function pa() {}
    function C() {}
    function V(a, b) {
        this.r = new RegExp(a,b.split("u").join(""))
    }
    function h() {
        return M.pj(this, "")
    }
    function x(a, b) {
        function c() {}
        c.prototype = a;
        a = new c;
        for (var d in b)
            a[d] = b[d];
        b.toString !== Object.prototype.toString && (a.toString = b.toString);
        return a
    }
    function Rc(a) {
        return a instanceof Array ? C.xd(a) : a.iterator()
    }
    function G(a, b) {
        if (null == b)
            return null;
        null == b.iu && (b.iu = Mg++);
        var c;
        null == a.wv ? a.wv = {} : c = a.wv[b.iu];
        null == c && (c = b.bind(a),
        a.wv[b.iu] = c);
        return c
    }
    y.Bubblewoods = y.Bubblewoods || {};
    V.g = ["0"];
    V.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.Se = this.r.exec(a);
            this.r.zC = a;
            return null != this.r.Se
        },
        eb: function(a) {
            if (null != this.r.Se && 0 <= a && a < this.r.Se.length)
                return this.r.Se[a];
            throw 0;
        },
        WI: function() {
            if (null == this.r.Se)
                throw 0;
            return {
                mb: this.r.Se.index,
                wf: this.r.Se[0].length
            }
        },
        VI: function(a, b, c) {
            null == c && (c = -1);
            if (this.r.global) {
                this.r.lastIndex = b;
                this.r.Se = this.r.exec(0 > c ? a : C.substr(a, 0, b + c));
                if (b = null != this.r.Se)
                    this.r.zC = a;
                return b
            }
            if (c = this.match(0 > c ? C.substr(a, b, null) : C.substr(a, b, c)))
                this.r.zC = a,
                this.r.Se.index += b;
            return c
        },
        split: function(a) {
            return a.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        replace: function(a, b) {
            return a.replace(this.r, b)
        },
        map: function(a, b) {
            for (var c = 0, d = ""; !(c >= a.length); ) {
                if (!this.VI(a, c)) {
                    d += D.Qa(C.substr(a, c, null));
                    break
                }
                var f = this.WI();
                d += D.Qa(C.substr(a, c, f.mb - c));
                d += D.Qa(b(this));
                0 == f.wf ? (d += D.Qa(C.substr(a, f.mb, 1)),
                c = f.mb + 1) : c = f.mb + f.wf;
                if (!this.r.global)
                    break
            }
            !this.r.global && 0 < c && c < a.length && (d += D.Qa(C.substr(a, c, null)));
            return d
        },
        m: V
    };
    C.g = ["1"];
    C.eO = function(a) {
        switch (a.length) {
        case 8:
            a = a.split(":");
            var b = new Date;
            b.setTime(0);
            b.setUTCHours(a[0]);
            b.setUTCMinutes(a[1]);
            b.setUTCSeconds(a[2]);
            return b;
        case 10:
            return a = a.split("-"),
            new Date(a[0],a[1] - 1,a[2],0,0,0);
        case 19:
            return b = a.split(" "),
            a = b[0].split("-"),
            b = b[1].split(":"),
            new Date(a[0],a[1] - 1,a[2],b[0],b[1],b[2]);
        default:
            throw 0;
        }
    }
    ;
    C.kf = function(a, b) {
        a = a.charCodeAt(b);
        if (a == a)
            return a
    }
    ;
    C.substr = function(a, b, c) {
        if (null == c)
            c = a.length;
        else if (0 > c)
            if (0 == b)
                c = a.length + c;
            else
                return "";
        return a.substr(b, c)
    }
    ;
    C.remove = function(a, b) {
        b = a.indexOf(b);
        if (-1 == b)
            return !1;
        a.splice(b, 1);
        return !0
    }
    ;
    C.xd = function(a) {
        return {
            pz: 0,
            Py: a,
            ga: function() {
                return this.pz < this.Py.length
            },
            next: function() {
                return this.Py[this.pz++]
            }
        }
    }
    ;
    pa.g = ["2"];
    pa.Qy = function(a) {
        var b = [];
        for (a = Rc(a); a.ga(); ) {
            var c = a.next();
            b.push(c)
        }
        return b
    }
    ;
    pa.map = function(a, b) {
        var c = new Le;
        for (a = Rc(a); a.ga(); ) {
            var d = a.next();
            c.add(b(d))
        }
        return c
    }
    ;
    pa.ji = function(a, b) {
        for (a = Rc(a); a.ga(); ) {
            var c = a.next();
            if (b(c))
                return !0
        }
        return !1
    }
    ;
    pa.xd = function(a, b) {
        for (a = Rc(a); a.ga(); ) {
            var c = a.next();
            b(c)
        }
    }
    ;
    pa.filter = function(a, b) {
        var c = new Le;
        for (a = Rc(a); a.ga(); ) {
            var d = a.next();
            b(d) && c.add(d)
        }
        return c
    }
    ;
    pa.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (b = Rc(a); b.ga(); )
                b.next(),
                ++c;
        else
            for (a = Rc(a); a.ga(); ) {
                var d = a.next();
                b(d) && ++c
            }
        return c
    }
    ;
    pa.indexOf = function(a, b) {
        var c = 0;
        for (a = Rc(a); a.ga(); ) {
            var d = a.next();
            if (b == d)
                return c;
            ++c
        }
        return -1
    }
    ;
    pa.find = function(a, b) {
        for (a = Rc(a); a.ga(); ) {
            var c = a.next();
            if (b(c))
                return c
        }
        return null
    }
    ;
    Math.g = ["3"];
    T.g = ["4"];
    T.fa = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    }
    ;
    D.g = ["5"];
    D.Qa = function(a) {
        return M.pj(a, "")
    }
    ;
    D.parseInt = function(a) {
        var b = parseInt(a, 10);
        0 != b || 120 != C.kf(a, 1) && 88 != C.kf(a, 1) || (b = parseInt(a));
        return isNaN(b) ? null : b
    }
    ;
    Gc.g = ["6"];
    Gc.prototype = {
        m: Gc
    };
    ob.g = ["7"];
    ob.lA = function(a, b) {
        a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
        return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a
    }
    ;
    ob.vA = function(a, b) {
        a = C.kf(a, b);
        return 8 < a && 14 > a ? !0 : 32 == a
    }
    ;
    ob.CA = function(a) {
        for (var b = a.length, c = 0; c < b && ob.vA(a, c); )
            ++c;
        return 0 < c ? C.substr(a, c, b - c) : a
    }
    ;
    ob.uK = function(a) {
        for (var b = a.length, c = 0; c < b && ob.vA(a, b - c - 1); )
            ++c;
        return 0 < c ? C.substr(a, 0, b - c) : a
    }
    ;
    ob.trim = function(a) {
        return ob.CA(ob.uK(a))
    }
    ;
    cc.g = ["8"];
    cc.Oe = function(a) {
        a = a.g;
        return null == a ? null : a.join(".")
    }
    ;
    cc.Iu = function(a, b) {
        return new (Function.prototype.bind.apply(a, [null].concat(b)))
    }
    ;
    var Sc = {
        g: ["9"],
        Gg: function(a) {
            return 0 > a ? 4294967296 + a : a + 0
        }
    };
    z.g = ["10"];
    z.parse = function(a) {
        return Hc.parse(a)
    }
    ;
    z.createElement = function(a) {
        var b = new z(z.Element);
        if (b.nodeType != z.Element)
            throw 0;
        b.nodeName = a;
        return b
    }
    ;
    z.ro = function(a) {
        var b = new z(z.YD);
        if (b.nodeType == z.Document || b.nodeType == z.Element)
            throw 0;
        b.nodeValue = a;
        return b
    }
    ;
    z.dG = function(a) {
        var b = new z(z.DD);
        if (b.nodeType == z.Document || b.nodeType == z.Element)
            throw 0;
        b.nodeValue = a;
        return b
    }
    ;
    z.createComment = function(a) {
        var b = new z(z.Comment);
        if (b.nodeType == z.Document || b.nodeType == z.Element)
            throw 0;
        b.nodeValue = a;
        return b
    }
    ;
    z.eG = function(a) {
        var b = new z(z.OD);
        if (b.nodeType == z.Document || b.nodeType == z.Element)
            throw 0;
        b.nodeValue = a;
        return b
    }
    ;
    z.createProcessingInstruction = function(a) {
        var b = new z(z.ProcessingInstruction);
        if (b.nodeType == z.Document || b.nodeType == z.Element)
            throw 0;
        b.nodeValue = a;
        return b
    }
    ;
    z.createDocument = function() {
        return new z(z.Document)
    }
    ;
    z.prototype = {
        get: function(a) {
            if (this.nodeType != z.Element)
                throw 0;
            var b = this.ko;
            return null != ea[a] ? b.ad(a) : b.G[a]
        },
        set: function(a, b) {
            if (this.nodeType != z.Element)
                throw 0;
            var c = this.ko;
            null != ea[a] ? c.cc(a, b) : c.G[a] = b
        },
        ji: function(a) {
            if (this.nodeType != z.Element)
                throw 0;
            var b = this.ko;
            return null != ea[a] ? b.fl(a) : b.G.hasOwnProperty(a)
        },
        attributes: function() {
            if (this.nodeType != z.Element)
                throw 0;
            return this.ko.keys()
        },
        Ru: function(a) {
            if (this.nodeType != z.Document && this.nodeType != z.Element)
                throw 0;
            for (var b = [], c = 0, d = this.children; c < d.length; ) {
                var f = d[c];
                ++c;
                if (f.nodeType == z.Element) {
                    if (f.nodeType != z.Element)
                        throw 0;
                    var g = f.nodeName == a
                } else
                    g = !1;
                g && b.push(f)
            }
            return C.xd(b)
        },
        EG: function() {
            if (this.nodeType != z.Document && this.nodeType != z.Element)
                throw 0;
            for (var a = 0, b = this.children; a < b.length; ) {
                var c = b[a];
                ++a;
                if (c.nodeType == z.Element)
                    return c
            }
            return null
        },
        Hb: function(a) {
            if (this.nodeType != z.Document && this.nodeType != z.Element)
                throw 0;
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != z.Document && this.nodeType != z.Element)
                throw 0;
            return C.remove(this.children, a) ? (a.parent = null,
            !0) : !1
        },
        toString: function() {
            return je.print(this)
        },
        m: z
    };
    Qc.g = ["11"];
    Sb.g = ["12"];
    Sb.$ = [Qc];
    Sb.prototype = {
        s: function() {
            this.fb = this.force = this.Y = this.position = this.Ab = this.gf = this.F = null;
            this.ig.s();
            this.ig = null
        },
        Nu: function() {
            Sb.count--;
            if (0 < (this.M & 4)) {
                for (var a = this.Ab.jb; null != a; )
                    this.F.sD(a.node.oa),
                    a = a.next;
                this.F.tz(this)
            }
            -1 != this.Ub && this.F.tb.vC(this);
            this.F.Mc.remove(this);
            this.F = this.fb = this.force = this.Y = this.position = this.Ab = null;
            this.ig.s();
            this.ig = null;
            this.gf.VB(this);
            this.gf = null
        },
        Og: function(a) {
            a.wa(this);
            this.Dz(null, a.type);
            var b = this.ig;
            b.f == b.B && b.T();
            b.a[b.f++] = a
        },
        Sf: function(a, b) {
            return null != a ? this.Sf(null, this.MG(a)) : this.ig.remove(b)
        },
        MG: function(a, b) {
            null == b && (b = 0);
            0 == b && (b = a.TYPE);
            for (a = this.ig.iterator(); a.ga(); ) {
                var c = a.next();
                if (c.type == b)
                    return c
            }
            return null
        },
        Dz: function(a, b) {
            null == b && (b = 0);
            0 == b && (b = a.TYPE);
            this.Nv |= 1 << b
        },
        gA: function(a) {
            this.F.bz(this.Ub, this.pd, a)
        },
        bj: function() {
            this.gA(this.position)
        },
        tj: function(a) {
            this.code = a;
            this.gf.QB(this, a, this.code)
        },
        disconnect: function() {
            this.F.tz(this)
        },
        aA: function(a) {
            this.F.viewport.Cm(this.fb.pa, a)
        },
        MH: function(a) {
            var b = this.fb
              , c = a.fb
              , d = b.pa
              , f = c.pa;
            a = f.x - d.x;
            d = f.y - d.y;
            b = b.r + c.r;
            return a * a + d * d < b * b
        },
        FC: function(a, b, c) {
            null == c && (c = -1);
            null == b && (b = -1);
            if (null == a || null == a.F || null == this.F)
                return !1;
            b = -1 == b ? this.$g : b;
            c = -1 == c ? a.$g : c;
            var d = this.position
              , f = a.position
              , g = d.x - f.x
              , n = d.y - f.y
              , e = g * g + n * n;
            a = this.fb.r + a.fb.r;
            return e < a * a ? (e = Math.sqrt(e),
            g /= e,
            n /= e,
            a = a - e + .01,
            e = 1 / (b + c),
            d.x += g * a * b * e,
            d.y += n * a * b * e,
            f.x -= g * a * c * e,
            f.y -= n * a * c * e,
            !0) : !1
        },
        m: Sb
    };
    We.g = ["13"];
    We.prototype = {
        m: We
    };
    Sd.g = ["14"];
    Sd.$ = [We];
    Sd.prototype = {
        VB: function() {},
        QB: function() {},
        m: Sd
    };
    bc.g = ["15"];
    bc.$ = [Qc];
    bc.prototype = {
        m: bc
    };
    og.g = ["16"];
    og.$ = [bc];
    Q.g = ["17"];
    Q.$ = [og];
    Q.prototype = {
        uC: function(a) {
            for (var b = this.a, c = b[a], d = --this.f; a < d; )
                b[a++] = b[a];
            return c
        },
        trim: function(a) {
            this.f = a;
            return this
        },
        sort: function(a, b, c, d) {
            null == d && (d = -1);
            null == c && (c = 0);
            null == b && (b = !1);
            if (1 < this.f)
                if (-1 == d && (d = this.f - c),
                null == a)
                    b ? this.LH(c, d) : this.ox(c, d);
                else if (b) {
                    b = this.a;
                    for (var f = c + 1, g = c + d; f < g; ) {
                        var n = f++;
                        for (d = b[n]; n > c; ) {
                            var e = b[n - 1];
                            if (0 < a(e, d))
                                b[n] = e,
                                --n;
                            else
                                break
                        }
                        b[n] = d
                    }
                } else
                    this.nx(c, d, a);
            return this
        },
        Bk: function(a) {
            var b = this.f
              , c = this.a;
            if (null == a)
                for (; 1 < --b; ) {
                    a = Ef.Ay() * b | 0;
                    var d = c[b];
                    c[b] = c[a];
                    c[a] = d
                }
            else
                for (d = 0; 1 < --b; ) {
                    var f = a[d++] * b | 0
                      , g = c[b];
                    c[b] = c[f];
                    c[f] = g
                }
            return this
        },
        nx: function(a, b, c) {
            var d = a + b - 1
              , f = a
              , g = d
              , n = this.a;
            if (1 < b) {
                var e = a + (b >> 1);
                b = a + b - 1;
                var u = n[a];
                var Tc = n[e];
                var h = n[b];
                var q = c(u, h);
                e = 0 > q && 0 > c(u, Tc) ? 0 > c(Tc, h) ? e : b : 0 > c(Tc, u) && 0 > c(Tc, h) ? 0 > q ? a : b : 0 > c(h, u) ? e : a;
                b = n[e];
                for (n[e] = n[a]; f < g; ) {
                    for (; 0 > c(b, n[g]) && f < g; )
                        --g;
                    g != f && (n[f] = n[g],
                    ++f);
                    for (; 0 < c(b, n[f]) && f < g; )
                        ++f;
                    g != f && (n[g] = n[f],
                    --g)
                }
                n[f] = b;
                this.nx(a, f - a, c);
                this.nx(f + 1, d - f, c)
            }
        },
        ox: function(a, b) {
            var c = this.a
              , d = a + b - 1
              , f = a
              , g = d;
            if (1 < b) {
                var n = a + (b >> 1);
                b = a + b - 1;
                var e = M.ib(c[a], Bc);
                var u = M.ib(c[n], Bc);
                var Tc = M.ib(c[b], Bc);
                var h = e.compare(Tc);
                n = 0 > h && 0 > e.compare(u) ? 0 > u.compare(Tc) ? n : b : 0 > u.compare(e) && 0 > u.compare(Tc) ? 0 > h ? a : b : 0 > Tc.compare(e) ? n : a;
                b = M.ib(c[n], Bc);
                for (c[n] = c[a]; f < g; ) {
                    for (; 0 > b.compare(c[g]) && f < g; )
                        --g;
                    g != f && (c[f] = c[g],
                    ++f);
                    for (; 0 < b.compare(c[f]) && f < g; )
                        ++f;
                    g != f && (c[g] = c[f],
                    --g)
                }
                c[f] = b;
                this.ox(a, f - a);
                this.ox(f + 1, d - f)
            }
        },
        LH: function(a, b) {
            for (var c = this.a, d, f, g, n, e = a + 1, u = a + b; e < u; ) {
                d = e++;
                b = c[d];
                for (g = M.ib(b, Bc); d > a; )
                    if (f = c[d - 1],
                    n = M.ib(f, Bc),
                    0 < g.compare(n))
                        c[d] = f,
                        --d;
                    else
                        break;
                c[d] = b
            }
        },
        od: function(a) {
            a > this.B && (this.B = a,
            this.Vf(a));
            return this
        },
        wa: function(a, b) {
            this.od(a);
            this.f = a;
            for (var c = this.a, d = 0; d < a; ) {
                var f = d++;
                c[f] = b
            }
            return this
        },
        T: function() {
            this.B = ic.fe(this.Bc, this.B);
            this.Vf(this.B)
        },
        Vf: function(a) {
            a = Array(a);
            ba.Yb(this.a, 0, a, 0, this.f);
            this.a = a
        },
        s: function() {
            ba.Be(this.a);
            this.a = null;
            null != this.Mb && (this.Mb.s(),
            this.Mb = null)
        },
        contains: function(a) {
            for (var b = this.a, c = 0, d = this.f; c < d; ) {
                var f = c++;
                if (b[f] == a)
                    return !0
            }
            return !1
        },
        remove: function(a) {
            if (this.vf())
                return !1;
            for (var b = 0, c, d, f = this.f, g = this.a; b < f; )
                if (g[b] == a) {
                    for (c = b + 1; c < f; )
                        if (g[c] == a)
                            ++c;
                        else
                            break;
                    d = c - b;
                    f -= d;
                    for (d = b; d < f; )
                        g[d] = g[c++],
                        ++d
                } else
                    ++b;
            a = 0 != this.f - f;
            this.f = f;
            return a
        },
        clear: function(a) {
            null == a && (a = !1);
            a && ba.Be(this.a);
            this.f = 0
        },
        iterator: function() {
            if (this.Tb) {
                if (null == this.Mb)
                    this.Mb = new he(this);
                else {
                    var a = this.Mb;
                    a.a = a.bb.a;
                    a.th = a.bb.f;
                    a.Ef = 0
                }
                return this.Mb
            }
            return new he(this)
        },
        vf: function() {
            return 0 == this.f
        },
        Zq: function() {
            return ba.Zq(this.a, 0, this.f, [])
        },
        m: Q
    };
    Ue.g = ["18"];
    Ue.prototype = {
        test: function() {
            var a = this.Yg.x - this.Kj.x
              , b = this.Yg.y - this.Kj.y
              , c = this.Av.x - this.ql.x
              , d = this.Av.y - this.ql.y
              , f = this.cp + this.ep
              , g = a * a + b * b - f * f;
            if (0 > g)
                return this.zg = 0,
                !0;
            f = c * c + d * d;
            if (1E-6 > f)
                return !1;
            a = c * a + d * b;
            if (0 <= a)
                return !1;
            b = a * a - f * g;
            if (0 > b)
                return !1;
            this.zg = (-a - Math.sqrt(b)) / f;
            return !0
        },
        m: Ue
    };
    Qa.g = ["19"];
    Qa.oL = function(a, b) {
        var c = Qa.lF;
        c.clear();
        var d = a.Mc;
        a = d.a;
        var f = 0;
        for (d = d.f; f < d; ) {
            var g = f++;
            g = a[g];
            0 < (g.M & 16) && 0 >= (g.M & 32) && 0 >= (g.M & 64) && (c.f == c.B && c.T(),
            c.a[c.f++] = g)
        }
        a = c.a;
        f = 0;
        d = c.f;
        for (g = d - 1; f < g; ) {
            for (c = f + 1; c < d; )
                Qa.test(a[f], a[c], b),
                ++c;
            ++f
        }
    }
    ;
    Qa.test = function(a, b, c) {
        var d = a.Y;
        var f = d.x;
        var g = d.y;
        var n = b.Y;
        d = n.x;
        var e = n.y;
        n = !1;
        var u = a.fb
          , h = b.fb
          , l = u.pa
          , q = h.pa
          , p = q.x - l.x;
        l = q.y - l.y;
        u = u.r + h.r;
        if (p * p + l * l < u * u)
            Qa.FC(a, b),
            n = !0;
        else {
            p = Qa.Dk;
            u = a.fb;
            p.Kj.x = u.pa.x;
            p.Kj.y = u.pa.y;
            p.cp = u.r;
            p = Qa.Dk.ql;
            p.x = f;
            p.y = g;
            f = Qa.Dk;
            g = b.fb;
            f.Yg.x = g.pa.x;
            f.Yg.y = g.pa.y;
            f.ep = g.r;
            f = Qa.Dk.Av;
            f.x = d;
            f.y = e;
            if (!Qa.Dk.test())
                return;
            d = Qa.Dk.zg;
            0 <= d && d < c && (a.position.x += d * a.Y.x,
            a.position.y += d * a.Y.y,
            b.position.x += d * b.Y.x,
            b.position.y += d * b.Y.y,
            n = !0)
        }
        n && Qa.VF(a, b)
    }
    ;
    Qa.VF = function(a, b) {
        var c = a.position.x - b.position.x
          , d = a.position.y - b.position.y
          , f = Math.sqrt(c * c + d * d);
        c /= f;
        d /= f;
        var g = a.Y.x - b.Y.x;
        f = a.Y.y - b.Y.y;
        var n = g * c + f * d;
        c *= n;
        d *= n;
        n = a.Cz;
        var e = b.Cz;
        n = n > e ? n : e;
        g = (g - c) * -Qa.ny + c * -(1 + n);
        f = (f - d) * -Qa.ny + d * -(1 + n);
        d = 1 / (a.$g + b.$g);
        c = a.$g * d;
        d *= b.$g;
        a.Y.x += g * c;
        a.Y.y += f * c;
        b.Y.x -= g * d;
        b.Y.y -= f * d
    }
    ;
    Qa.FC = function(a, b) {
        var c = a.position.x - b.position.x
          , d = a.position.y - b.position.y
          , f = Math.sqrt(c * c + d * d);
        c /= f;
        d /= f;
        f = a.fb.r + b.fb.r - f;
        f += 1E-6;
        0 == a.$g ? (b.position.x -= c * f,
        b.position.y -= d * f) : 0 == b.$g ? (a.position.x += c * f,
        a.position.y += d * f) : (f *= .5,
        a.position.x += c * f,
        a.position.y += d * f,
        b.position.x -= c * f,
        b.position.y -= d * f)
    }
    ;
    xg.g = ["20"];
    ng.g = ["21"];
    ng.prototype = {
        s: function() {
            for (var a = this.mh.keys(); a.ga(); ) {
                var b = a.next();
                this.mh.remove(b)
            }
            this.mh = null
        },
        get: function(a, b) {
            return this.mh.G[b + 16777215 << 6 | a]
        },
        mu: function(a) {
            this.mh.G[a.pd + 16777215 << 6 | a.Ub] = a
        },
        vC: function(a) {
            this.mh.remove(a.pd + 16777215 << 6 | a.Ub);
            a.Ub = -1
        },
        iterator: function() {
            for (var a = [], b = this.mh.keys(); b.ga(); ) {
                var c = b.next();
                a.push(this.mh.G[c])
            }
            return C.xd(a)
        },
        m: ng
    };
    mg.g = ["22"];
    mg.prototype = {
        ga: function() {
            return this.Ba < this.f
        },
        next: function() {
            return this.Nb[this.Ba++]
        },
        wa: function(a, b, c) {
            null == c && (c = !1);
            this.Ba = this.f = 0;
            var d = this.mI
              , f = (b & 1) == this.EI ? 1 : 0
              , g = a + 1;
            if (0 <= g && g < d) {
                var n = this.Xj.get(g, b);
                null != n ? this.Nb[this.f++] = n : c && (this.Nb[this.f++] = this.wj(g, b))
            }
            g = a + f;
            n = b + 1;
            if (0 <= g && g < d) {
                var e = this.Xj.get(g, n);
                null != e ? this.Nb[this.f++] = e : c && (this.Nb[this.f++] = this.wj(g, n))
            }
            g = a - 1 + f;
            n = b + 1;
            0 <= g && g < d && (e = this.Xj.get(g, n),
            null != e ? this.Nb[this.f++] = e : c && (this.Nb[this.f++] = this.wj(g, n)));
            g = a - 1;
            0 <= g && g < d && (n = this.Xj.get(g, b),
            null != n ? this.Nb[this.f++] = n : c && (this.Nb[this.f++] = this.wj(g, b)));
            g = a - 1 + f;
            n = b - 1;
            0 <= g && g < d && (e = this.Xj.get(g, n),
            null != e ? this.Nb[this.f++] = e : c && (this.Nb[this.f++] = this.wj(g, n)));
            a += f;
            --b;
            0 <= a && a < d && (d = this.Xj.get(a, b),
            null != d ? this.Nb[this.f++] = d : c && (this.Nb[this.f++] = this.wj(a, b)));
            return this
        },
        wj: function(a, b) {
            var c = Object.create(Sb.prototype);
            c.code = 0;
            c.Ub = a;
            c.pd = b;
            return c
        },
        m: mg
    };
    Rd.g = ["23"];
    Rd.dJ = function() {
        for (var a = [], b = ["0 0 0 0 0", "0 0 0 0"], c = 0, d = b.length; c < d; ) {
            var f = c++;
            f = (new V("\\s+","g")).split(b[f]);
            if (!(1 >= f.length)) {
                for (var g = [], n = 0; n < f.length; ) {
                    var e = f[n];
                    ++n;
                    null != D.parseInt(e) && g.push(D.parseInt(e))
                }
                a.push(g)
            }
        }
        b = a[0].length;
        c = a[1].length;
        b = (new kc(b > c ? b : c,a.length)).zx(0);
        c = 0;
        for (d = a.length; c < d; )
            for (f = c++,
            g = 0,
            n = a[f].length; g < n; )
                e = g++,
                b.a[f * b.Z + e] = a[f][e];
        a = new kc(b.Z,b.Fa);
        c = a.a;
        d = 0;
        for (f = a.Z * a.Fa; d < f; )
            g = d++,
            c[g] = b.a[(g / a.Z | 0) * b.Z + g % a.Z];
        b = new Rd;
        b.tb = a;
        return b
    }
    ;
    Rd.prototype = {
        m: Rd
    };
    lg.g = ["24"];
    lg.prototype = {
        s: function() {
            this.dB.s();
            this.dB = null;
            this.cB.s();
            this.Sa = this.cB = null;
            this.yB.s();
            this.yB = null
        },
        m: lg
    };
    Ve.g = ["25"];
    Ve.prototype = {
        s: function() {
            this.hb.s();
            this.Df = this.hb = null
        },
        m: Ve
    };
    kg.g = ["26"];
    kg.prototype = {
        s: function() {
            this.viewport.s();
            this.viewport = null;
            for (var a = this.Mc.iterator(); a.ga(); )
                a.next().s();
            this.jc = this.Mc = null;
            this.tb.s();
            this.tb = null;
            this.bd.s();
            this.bd = null;
            this.Fq.s();
            this.Fq = null;
            this.MB.s();
            this.$i = this.MB = null;
            this.Qf.s();
            this.de.s();
            this.de = null;
            for (a = this.Bi.iterator(); a.ga(); )
                a.next().s();
            this.Bi.s();
            this.Bi = null;
            this.Bb.clear();
            this.Bb = null;
            null != this.Hp && this.Hp.s();
            this.ja = null;
            this.Zl.s();
            this.Zl = null;
            this.hq.s();
            this.tg = this.ug = this.hq = null
        },
        addListener: function(a) {
            return this.Bb.add(a)
        },
        removeListener: function(a) {
            return this.Bb.remove(a)
        },
        update: function(a) {
            this.time = A.yo;
            this.IL(a);
            var b = this.Mc
              , c = b.a
              , d = 0;
            for (b = b.f; d < b; ) {
                var f = d++;
                f = c[f];
                var g = this.viewport
                  , n = f.fb;
                f.M = g.ej(n.pa.y + n.r) > g.J.b ? f.M & -3 : f.M | 2
            }
            0 <= fa.Jm && Qa.oL(this, a)
        },
        DC: function(a) {
            this.viewport.Hg(a)
        },
        QK: function(a) {
            this.viewport.La(a);
            this.Qf.Ek()
        },
        Lq: function(a, b) {
            this.viewport.Lq(a, b);
            this.Qf.Ek()
        },
        QC: function(a, b) {
            var c = this;
            this.$u = b;
            b = a.tb;
            this.Mc = new Q(b.Z * b.Fa);
            this.Mc.Tb = !0;
            this.Fh = a.Fh;
            this.Gh = a.Gh;
            this.cols = a.tb.Z;
            this.tb = new ng;
            this.viewport.VC();
            this.bd = new Ge;
            this.bd.yu = function(a, b) {
                if (c.Bi.vf())
                    return new fe(a,b);
                b = c.Bi;
                b = b.a[--b.f];
                b.node = a;
                return b
            }
            ;
            this.bd.qm = function(a) {
                if (1024 > c.Bi.f) {
                    var b = c.Bi;
                    b.f == b.B && b.T();
                    b.a[b.f++] = a
                }
            }
            ;
            this.fm = 0;
            this.KJ(a.tb);
            this.$i = new E;
            this.Rx();
            this.ja = new Ac;
            this.ja.p.x = this.pv() / 2;
            this.ja.p.y = 0;
            this.ja.d.x = 0;
            this.ja.d.y = -1;
            this.MB = new lg(this);
            this.Qf = new ig(this);
            this.Fq = new gg(this);
            this.Qf.Ek()
        },
        ZH: function() {
            return this.viewport.ej(this.eA()) >= this.viewport.J.b
        },
        zA: function(a) {
            var b = new Sb(this);
            b.code = a;
            b.M |= 16;
            b.M |= 32;
            b.M &= -5;
            a = b.fb.pa;
            var c = this.ja.p;
            a.x = c.x;
            a.y = c.y;
            a = this.Mc;
            a.f == a.B && a.T();
            this.jc = a.a[a.f++] = b;
            b.Og(ac.X);
            for (a = this.Bb.Rc.head; null != a; )
                c = a.next,
                a.oa.kJ(b),
                a = c
        },
        tz: function(a) {
            a.M &= -5;
            this.fm--;
            null != a.Ab && (this.bd.removeNode(a.Ab),
            a.Ab.s(),
            a.Ab = null);
            this.tb.vC(a)
        },
        bz: function(a, b, c) {
            c.x = 1;
            c.x += 2 * a;
            (b & 1) == this.Gh && (c.x += 1);
            c.y = 1 + 1.7320508075 * b + this.$u;
            c.y = -c.y
        },
        MF: function() {
            if (null == this.jc || 0 >= (this.jc.M & 32) || 0 > fa.Jm && !this.de.vf() || this.time - this.KI < fa.Jm)
                return !1;
            if (0 <= fa.Jm) {
                var a = !1
                  , b = this.de
                  , c = b.a
                  , d = 0;
                for (b = b.f; d < b; ) {
                    var f = d++;
                    c[f].MH(this.jc) && (a = !0)
                }
                if (a)
                    return !1
            }
            return !0
        },
        aL: function() {
            this.jc.M &= -33;
            this.jc.Sf(ac);
            this.jc.Og(new Te);
            var a = this.de
              , b = this.jc;
            a.f == a.B && a.T();
            a.a[a.f++] = b;
            this.jc = null
        },
        IL: function(a) {
            var b = this.Mc.f * xg.VD
              , c = 7 * b;
            this.Zl.f < c && (this.Zl.wa(c, null),
            this.hq.wa(c, null));
            c = this.hq;
            for (var d = this.Zl, f = wg.Gu, g = 0; 7 > g; ) {
                var n = g++;
                f[n] = 0
            }
            var e = this.Mc;
            g = e.a;
            n = 0;
            for (var u = e.f; n < u; ) {
                e = n++;
                var h = g[e];
                h.gg = a;
                e = h.ig;
                for (var l = e.a, q = 0, p = e.f; q < p; ) {
                    e = q++;
                    var m = l[e];
                    var r = e = m.Ag;
                    var t = f[r];
                    f[r] = t + 1;
                    r = t;
                    e = e * b + r;
                    c.a[e] = m;
                    d.a[e] = h
                }
            }
            for (e = 0; 7 > e; ) {
                r = f[e];
                a = b * e;
                for (u = a + r; a < u; )
                    g = d.a[a],
                    null != g.F && (n = c.a[a],
                    0 < (g.Nv & 1 << n.type) && n.update(g)),
                    ++a;
                ++e
            }
        },
        Zw: function(a, b) {
            for (var c = this.Bb.Rc.head, d; null != c; )
                d = c.next,
                c.oa.Zw(a, b),
                c = d
        },
        $w: function(a, b) {
            null != this.Kp && 0 < (this.Kp.M & 4) && 0 >= (this.Kp.M & 64) && this.Kp.bj();
            this.Kp = a;
            this.de.remove(a);
            this.fm++;
            a.M &= -17;
            var c = a.position;
            c = new B(c.x,c.y);
            this.$F(a, b);
            a.Lh = fa.hi.xo.no.Lh;
            a.Nc = fa.hi.xo.no.Nc;
            a.Og(new Rb);
            var d = a.force;
            d.x = 0;
            d.y = 0;
            d = a.Y;
            d = new B(d.x,d.y);
            var f = d.x * d.x + d.y * d.y;
            0 < f && (f = Math.sqrt(f),
            d.x /= f,
            d.y /= f);
            f = a.Y;
            f.x = 0;
            f.y = 0;
            fa.QD && (this.Hp = new dg(a,c,d,fa.RD));
            for (c = this.Bb.Rc.head; null != c; )
                d = c.next,
                c.oa.$w(a, b),
                c = d;
            this.Rx()
        },
        BF: function() {
            this.Hp.apply();
            this.Hp = null
        },
        rq: function(a, b) {
            for (var c = this.Bb.Rc.head, d; null != c; )
                d = c.next,
                c.oa.rq(a, b),
                c = d;
            this.de.remove(a);
            a.Nu()
        },
        Yw: function(a, b) {
            for (var c = this.Bb.Rc.head, d; null != c; )
                d = c.next,
                c.oa.Yw(a, b),
                c = d
        },
        CK: function(a, b) {
            this.ja.p.x = a;
            this.ja.p.y = b;
            this.Qf.Ek()
        },
        yL: function(a, b) {
            var c = this.ja.p;
            this.CK(c.x + a, c.y + b)
        },
        jH: function(a) {
            var b = 0
              , c = this.Mc
              , d = c.a
              , f = 0;
            for (c = c.f; f < c; ) {
                var g = f++;
                g = d[g];
                var n = this.viewport
                  , e = g.fb;
                n.ej(e.pa.y + e.r) > n.J.b && (a[b++] = g)
            }
            return b
        },
        Rx: function() {
            var a = this.$i;
            a.c = a.b = Infinity;
            a.j = a.i = -Infinity;
            if (0 == this.fm)
                a = this.$i,
                a.c = 0,
                a.b = 0,
                a.j = 0,
                a.i = 0;
            else {
                var b = this.Mc;
                a = b.a;
                var c = 0;
                for (b = b.f; c < b; ) {
                    var d = c++;
                    d = a[d];
                    if (0 < (d.M & 4)) {
                        var f = d.fb.pa;
                        d = this.$i;
                        var g = f.x;
                        f = f.y;
                        g < d.c && (d.c = g);
                        g > d.j && (d.j = g);
                        f < d.b && (d.b = f);
                        f > d.i && (d.i = f)
                    }
                }
                a = this.$i;
                --a.c;
                --a.b;
                a.j += 1;
                a.i += 1
            }
        },
        eA: function() {
            var a = this.Lf;
            return -(this.$u + (2 * a - .26794919249999993 * (a - 1)))
        },
        pv: function() {
            return 2 * this.cols + 1 * this.Fh
        },
        Xz: function() {
            for (var a = this.Pi, b; a <= this.Lf; ) {
                for (var c = 0, d = this.cols; c < d; )
                    if (b = c++,
                    b = this.tb.get(b, a),
                    null != b && 0 >= (b.M & 64))
                        return b;
                ++a
            }
            return null
        },
        trim: function() {
            for (var a = this.Pi, b; a <= this.Lf; ) {
                for (var c = 0, d = this.cols; c < d; )
                    if (b = c++,
                    b = this.tb.get(b, a),
                    null != b && 0 >= (b.M & 64)) {
                        this.Pi = b.pd;
                        return
                    }
                ++a
            }
        },
        VJ: function(a) {
            this.Lf++;
            for (var b = [], c = 0, d = a.length; c < d; ) {
                var f = c++
                  , g = a[f];
                if (0 != g) {
                    var n = new Sb(this);
                    n.code = g;
                    b.push(n);
                    n.pd = this.Lf;
                    n.Ub = f;
                    n.bj();
                    this.tb.mu(n);
                    f = this.Mc;
                    f.f == f.B && f.T();
                    f.a[f.f++] = n;
                    n.Ab = new Bd(n);
                    this.bd.ou(n.Ab);
                    this.kz(n);
                    this.LC(n);
                    this.fm++
                }
            }
            this.Vx();
            for (a = 0; a < b.length; )
                for (c = b[a],
                ++a,
                d = this.Bb.Rc.head; null != d; )
                    n = d.next,
                    d.oa.SB(c),
                    d = n;
            this.Qf.Ek();
            this.Rx()
        },
        XF: function(a, b) {
            var c = a[0].fb;
            b.pa.x = c.pa.x;
            b.pa.y = c.pa.y;
            b.r = c.r;
            c = 1;
            for (var d = a.length; c < d; ) {
                var f = c++;
                b.tF(a[f].fb)
            }
        },
        KJ: function(a) {
            this.Pi = 0;
            this.Lf = a.Fa - 1;
            for (var b = a.a, c = 0, d = a.Z * a.Fa; c < d; ) {
                var f = c++
                  , g = f;
                var n = b[f];
                var e = f % a.Z
                  , u = f / a.Z | 0;
                0 == n || 0 == this.Fh && (u & 1) == this.Gh && e == a.Z - 1 || (this.fm++,
                f = new Sb(this),
                f.code = n,
                f.Ub = e,
                f.pd = this.Lf - u,
                f.bj(),
                this.tb.mu(f),
                e = this.Mc,
                e.f == e.B && e.T(),
                e.a[e.f++] = f,
                f.Ab = new Bd(f),
                this.bd.ou(f.Ab),
                this.LC(f));
                b[g] = n
            }
            b = a.a;
            c = 0;
            for (d = a.Z * a.Fa; c < d; )
                g = c++,
                n = this.tb.get(g % a.Z, g / a.Z | 0),
                this.kz(n),
                b[g] = b[g];
            this.Vx();
            for (a = this.tb.iterator(); a.ga(); )
                for (b = a.next(),
                c = this.Bb.Rc.head; null != c; )
                    d = c.next,
                    c.oa.SB(b),
                    c = d
        },
        kz: function(a) {
            if (null != a && 0 != a.code) {
                a.M |= 4;
                var b = this.Ju(a);
                for (a = a.Ab; b.Ba < b.f; ) {
                    var c = b.Nb[b.Ba++];
                    null != c && 0 != c.code && (c = c.Ab,
                    null != a.Pz(c) && null != c.Pz(a) || this.bd.Iy(a, c))
                }
            }
        },
        LC: function(a) {
            a.Og(new Rb);
            a.Lh = fa.hi.xo.no.Lh;
            a.Nc = fa.hi.xo.no.Nc
        },
        Vx: function() {
            for (var a = this.Mc.iterator(); a.ga(); ) {
                var b = a.next();
                0 < (b.M & 4) && this.sD(b)
            }
        },
        sD: function(a) {
            a.M &= -2;
            if (null != a.Ab) {
                for (var b = 0, c = a.Ab.jb; null != c; )
                    ++b,
                    c = c.next;
                if (6 == b)
                    a.M |= 1;
                else {
                    c = a.Ub;
                    var d = a.pd
                      , f = d == this.Lf;
                    if (this.uG)
                        if (f && 4 == b)
                            a.M |= 1;
                        else {
                            var g = 1 == this.Gh ? 0 : 1
                              , e = this.cols - 1;
                            if (0 == this.Fh) {
                                if (0 == c || c == e - (d + 1 & 1))
                                    f ? b == 2 + g && (a.M |= 1) : 1 == (d & 1) ? b == 5 - 2 * g && (a.M |= 1) : b == 3 + 2 * g && (a.M |= 1)
                            } else
                                0 == c ? f ? b == 2 + g && (a.M |= 1) : 1 == (d & 1) ? b == 5 - 2 * g && (a.M |= 1) : b == 3 + 2 * g && (a.M |= 1) : c == e && (f ? b == 3 - g && (a.M |= 1) : 1 == (d & 1) ? b == 3 + 2 * g && (a.M |= 1) : b == 5 - 2 * g && (a.M |= 1))
                        }
                }
            }
        },
        UC: function(a) {
            var b = this.ja.p
              , c = this.ja.d
              , d = c.x
              , f = c.y
              , g = this.ug;
            g.x = a.x;
            g.y = a.y;
            this.DC(g);
            c.x = g.x - b.x;
            c.y = g.y - b.y;
            a = c.x * c.x + c.y * c.y;
            0 < a && (a = Math.sqrt(a),
            c.x /= a,
            c.y /= a);
            .25 > a ? (c.x = d,
            c.y = f) : (d = fa.hi.Bu.XI,
            f = 57.29577951308232 * Math.atan2(c.y, c.x),
            a = 1,
            fa.Qk ? 0 <= f ? (a = -1,
            f < 90 - d ? f = 90 - d : f > 180 - (90 - d) && (f = 180 - (90 - d))) : f > -90 + d ? f = -90 + d : f < -90 - d && (f = -90 - d) : 0 > f ? f > -90 + d ? f = -90 + d : f < -90 - d && (f = -90 - d) : 90 > f ? f = -90 + d : 270 > f && (f = -90 - d),
            c.x = Math.cos(.017453292519943295 * f) * a,
            c.y = Math.sin(.017453292519943295 * f) * a)
        },
        Ju: function(a) {
            var b = new mg(this.tb,this.cols,this.Gh);
            null != a && b.wa(a.Ub, a.pd);
            return b
        },
        $F: function(a, b) {
            a.M |= 4;
            if (null == b) {
                a.Ub = a.position.x / 2 | 0;
                a.pd = 0;
                b = 2 * a.Ub + 1;
                if (null != this.tb.get(a.Ub, a.pd))
                    if (a.position.x < b) {
                        if (0 == a.Ub)
                            throw 0;
                        a.Ub--
                    } else if (a.position.x > b) {
                        if (a.Ub == this.cols - 1)
                            throw 0;
                        a.Ub++
                    }
                a.position.x = 2 * a.Ub + 1;
                a.position.y = 1
            } else {
                b.bj();
                for (var c = b.Ab.jb, d; null != c; )
                    d = c.node.oa,
                    d.bj(),
                    c = c.next;
                b = this.CG(new He(b.Ub,b.pd), a.position);
                a.Ub = b.x;
                a.pd = b.y;
                a.bj();
                b.y < this.Pi && (this.Pi = b.y)
            }
            this.tb.mu(a);
            a.Ab = new Bd(a);
            this.bd.ou(a.Ab);
            for (b = this.Ju(a); b.Ba < b.f; )
                c = b.Nb[b.Ba++],
                this.bd.Iy(a.Ab, c.Ab)
        },
        CG: function(a, b) {
            var c = 20
              , d = new He(-1,-1)
              , f = new B
              , g = this.Ju();
            for (g.wa(a.x, a.y, !0); g.Ba < g.f; ) {
                var e = g.Nb[g.Ba++];
                if (0 == e.code) {
                    a = e.Ub;
                    e = e.pd;
                    this.bz(a, e, f);
                    var k = f.x - b.x
                      , u = f.y - b.y;
                    k = k * k + u * u;
                    k < c && (c = k,
                    d.x = a,
                    d.y = e)
                }
            }
            return d
        },
        m: kg
    };
    jg.g = ["27"];
    jg.prototype = {
        m: jg
    };
    ig.g = ["28"];
    ig.prototype = {
        s: function() {
            this.Du = null;
            this.Sc.s();
            this.Sa = this.gB = this.Sc = null
        },
        UF: function(a, b, c) {
            var d = this.gB;
            this.Sg = -1;
            this.Du = null;
            for (var f = 0, g = this.Sc.iterator(); g.Ef < g.th; ) {
                var e = g.a[g.Ef++];
                0 < (this.LJ & 1 << f) && d.AG(a.pa.x, a.pa.y, a.r, b.x, b.y, e.n.x, e.n.y, e.d) && 0 < d.t && d.t < c && (c = d.t,
                this.Du = e,
                this.Sg = f);
                ++f
            }
            return c
        },
        Ek: function() {
            var a = this.Sa.viewport
              , b = a.ma()
              , c = this.Sc.a[3];
            c.n.x = 1;
            c.n.y = 0;
            c.d = 0;
            c = this.Sc.a[1];
            var d = this.Sa.pv();
            c.n.x = -1;
            c.n.y = 0;
            c.d = -1 * d;
            c = this.Sa.eA();
            d = this.Sc.a[0];
            d.n.x = 0;
            d.n.y = 1;
            d.d = c;
            a = a.kD(b.i);
            b = this.Sc.a[2];
            b.n.x = 0;
            b.n.y = -1;
            b.d = -1 * a
        },
        m: ig
    };
    hg.g = ["29"];
    hg.prototype = {
        s: function() {
            this.Co.s();
            this.Bq = this.Cq = this.Bj = this.Co = null;
            this.uj.s();
            this.uj = null
        },
        reset: function() {
            this.Co.clear();
            this.Bq = this.Cq = this.Bj = null;
            this.uj.clear()
        },
        m: hg
    };
    gg.g = ["30"];
    gg.prototype = {
        s: function() {
            this.result.s();
            this.result = null;
            this.Cd.s();
            this.Sa = this.hB = this.Vp = this.jq = this.iq = this.Cd = null
        },
        SJ: function(a, b, c) {
            this.result.Cq = null;
            this.result.Bq = null;
            this.result.Bj = null;
            this.result.ix = -1;
            var d = this.iq
              , f = d.p
              , g = a.p;
            f.x = g.x;
            f.y = g.y;
            f = d.d;
            a = a.d;
            f.x = a.x;
            f.y = a.y;
            a = this.jq;
            f = a.pa;
            g = d.p;
            f.x = g.x;
            f.y = g.y;
            a.r = b;
            this.Cd.Lj = d;
            this.Cd.Bv = b;
            f = this.result.Co;
            f.clear();
            g = d.p.x;
            f.f == f.B && f.T();
            f.a[f.f++] = g;
            g = d.p.y;
            f.f == f.B && f.T();
            f.a[f.f++] = g;
            g = this.Sa.Qf;
            var e = 0;
            if (0 < (this.cd & 8)) {
                var k = this.Sa.Mc;
                var u = k.a;
                var h = 0;
                for (k = k.f; h < k; ) {
                    var l = h++;
                    u[l].M &= -9
                }
            }
            u = this.Vp;
            h = this.Sa.$i;
            u.c = h.c;
            u.b = h.b;
            u.j = h.j;
            u.i = h.i;
            u = this.Vp;
            u.c -= b;
            u.b -= b;
            u.j += b;
            u.i += b;
            b = this.hB;
            for (u = 0; u++ < c + 1; ) {
                k = g.UF(a, d.d, Zd.POSITIVE_INFINITY);
                h = Zd.POSITIVE_INFINITY;
                l = b.oi;
                l.x = d.p.x;
                l.y = d.p.y;
                l = b.ni;
                l.x = d.d.x;
                l.y = d.d.y;
                b.nA = this.Vp;
                if (b.test() && (this.result.uj.clear(),
                this.Cd.reset(),
                this.Cd.Cv = 0 < (this.cd & 8) && 1 == u,
                this.Cd.oA = 0 < (this.cd & 16),
                this.Cd.Xb(),
                h = this.Cd.uq,
                this.Cd.Cv))
                    for (l = this.Cd.uk.iterator(); l.ga(); ) {
                        var q = l.next()
                          , p = this.result.uj;
                        p.f == p.B && p.T();
                        p.a[p.f++] = q
                    }
                e += k < h ? k : h;
                if (k < h) {
                    this.result.ix = g.Sg;
                    d.p.x += d.d.x * k;
                    d.p.y += d.d.y * k;
                    h = d.p.x;
                    f.f == f.B && f.T();
                    f.a[f.f++] = h;
                    h = d.p.y;
                    f.f == f.B && f.T();
                    f.a[f.f++] = h;
                    if (2 == g.Sg && 0 == (this.cd & 2))
                        break;
                    if (0 == g.Sg && 0 == (this.cd & 1))
                        break;
                    h = a.pa;
                    k = d.p;
                    h.x = k.x;
                    h.y = k.y;
                    h = d.d;
                    k = g.Du.n;
                    l = d.d;
                    q = 2 * (h.x * k.x + h.y * k.y);
                    l.x = h.x - q * k.x;
                    l.y = h.y - q * k.y
                } else
                    return this.result.Cq = this.Cd.wq,
                    this.result.Bq = this.Cd.vq,
                    this.result.Bj = this.Cd.vk,
                    d.p.x += d.d.x * h,
                    d.p.y += d.d.y * h,
                    c = d.p.x,
                    f.f == f.B && f.T(),
                    f.a[f.f++] = c,
                    d = d.p.y,
                    f.f == f.B && f.T(),
                    f.a[f.f++] = d,
                    h
            }
            return e
        },
        m: gg
    };
    fg.g = ["31"];
    fg.prototype = {
        s: function() {
            this.vq = this.wq = this.vk = this.Lj = null;
            this.uk.s();
            this.EB = this.FB = this.qB = this.jq = this.Sa = this.uk = null
        },
        reset: function() {},
        Xb: function() {
            this.uq = this.kC = Zd.POSITIVE_INFINITY;
            this.vk = null;
            this.uk.clear();
            var a = this.Lj.p.x
              , b = this.Lj.p.y
              , c = this.Lj.d.x
              , d = this.Lj.d.y
              , f = this.EB;
            f.Kj.x = a;
            f.Kj.y = b;
            f.ql.x = c;
            f.ql.y = d;
            var g = this.FB;
            g.oi.x = a;
            g.oi.y = b;
            g.ni.x = c;
            g.ni.y = d;
            g.bp = 1;
            for (var e = this.qB, k = 0, u = this.Sa.jH(e); k < u; ) {
                var h = k++;
                h = e[h];
                if (null != h && !(!this.oA && 0 < (h.M & 1) || 0 == 0 < (h.M & 4) || 0 < (h.M & 64))) {
                    var l = h.fb;
                    if (this.Cv && 0 >= (h.M & 8)) {
                        var q = l.r;
                        l.r *= 2;
                        g.ap.x = l.pa.x;
                        g.ap.y = l.pa.y;
                        g.zv = l.r;
                        if (g.test()) {
                            h.M |= 8;
                            var p = this.uk;
                            p.f == p.B && p.T();
                            p.a[p.f++] = h
                        }
                        l.r = q
                    }
                    f.cp = this.Bv * fa.AD;
                    f.Yg.x = l.pa.x;
                    f.Yg.y = l.pa.y;
                    f.ep = l.r;
                    f.test() && (l = f.zg,
                    l >= this.kC || (this.kC = l,
                    this.vk = h,
                    this.wq.x = a + c * l,
                    this.wq.y = b + d * l))
                }
            }
            null != this.vk && (g = this.vk.fb,
            f.Yg.x = g.pa.x,
            f.Yg.y = g.pa.y,
            f.ep = g.r,
            f.cp = this.Bv,
            f.test(),
            this.uq = f.zg,
            this.vq.x = a + c * this.uq,
            this.vq.y = b + d * this.uq)
        },
        m: fg
    };
    fa.g = ["32"];
    eg.g = ["33"];
    eg.prototype = {
        s: function() {
            this.Sa = this.Cp = this.Ve = this.JA = this.J = null
        },
        ma: function() {
            var a = this.JA
              , b = this.J;
            a.c = b.c;
            a.b = b.b;
            a.j = b.j;
            a.i = b.i;
            return a
        },
        La: function(a) {
            this.J = new E(a.c,a.b,a.j,a.i);
            this.rD();
            this.VC()
        },
        Lq: function(a, b) {
            var c = this.Cp;
            c.x = a;
            c.y = b;
            this.rD()
        },
        VC: function(a) {
            null == a && (a = 0);
            this.zoom = a;
            0 == a && (a = this.J,
            this.zoom = (a.j - a.c) / (2 * (this.Sa.cols + (1 == this.Sa.Fh ? .5 : 0))))
        },
        Cm: function(a, b, c) {
            null == c && (c = this.Sa.ja.p);
            b.x = this.Ve.x + (a.x - c.x) * this.zoom;
            b.y = this.Ve.y + (a.y - c.y) * this.zoom
        },
        uL: function(a) {
            return this.Ve.x + (a - this.Sa.ja.p.x) * this.zoom
        },
        ej: function(a) {
            return this.Ve.y + (a - this.Sa.ja.p.y) * this.zoom
        },
        vL: function(a) {
            return (a - this.Ve.x) / this.zoom + this.Sa.ja.p.x
        },
        kD: function(a) {
            return (a - this.Ve.y) / this.zoom + this.Sa.ja.p.y
        },
        Hg: function(a) {
            a.x = (a.x - this.Ve.x) / this.zoom + this.Sa.ja.p.x;
            a.y = (a.y - this.Ve.y) / this.zoom + this.Sa.ja.p.y
        },
        rD: function() {
            var a = this.J;
            this.Ve.x = this.J.c + this.Cp.x * (a.j - a.c);
            a = this.J;
            this.Ve.y = this.J.b + this.Cp.y * (a.i - a.b)
        },
        m: eg
    };
    Ja.g = ["34"];
    Ja.prototype = {
        update: function() {},
        wa: function() {},
        li: function() {
            return 0
        },
        bi: function() {
            return 0
        },
        m: Ja
    };
    Qd.g = ["35"];
    Qd.H = Ja;
    Qd.prototype = x(Ja.prototype, {
        wa: function(a) {
            Ja.prototype.wa.call(this, a);
            a.vd = fa.cF;
            a.Nc = 0
        },
        update: function(a) {
            a.force.y += a.vd
        },
        li: function() {
            return 1
        },
        bi: function() {
            return 4
        },
        m: Qd
    });
    Pd.g = ["36"];
    Pd.H = Ja;
    Pd.prototype = x(Ja.prototype, {
        update: function(a) {
            var b = a.gg
              , c = a.Y;
            c.x += a.force.x * b;
            c.y += a.force.y * b;
            0 < a.Nc && (c.x *= 1 - a.Nc,
            c.y *= 1 - a.Nc);
            a.position.x += c.x * b;
            a.position.y += c.y * b;
            c = a.force;
            c.x = 0;
            c.y = 0;
            0 != a.Ny && (a.rotation += a.Ny * b)
        },
        li: function() {
            return 4
        },
        bi: function() {
            return 2
        },
        m: Pd
    });
    Rb.g = ["37"];
    Rb.H = Ja;
    Rb.prototype = x(Ja.prototype, {
        wa: function(a) {
            a.gA(this.anchor)
        },
        update: function(a) {
            if (0 != a.Lh) {
                var b = a.position.x - this.anchor.x
                  , c = a.position.y - this.anchor.y;
                1E-12 > b * b + c * c ? (a.position.x = this.anchor.x,
                a.position.y = this.anchor.y) : (a.force.x += -a.Lh * b,
                a.force.y += -a.Lh * c)
            }
        },
        li: function() {
            return 1
        },
        bi: function() {
            return 1
        },
        m: Rb
    });
    Te.g = ["38"];
    Te.H = Ja;
    Te.prototype = x(Ja.prototype, {
        wa: function(a) {
            Ja.prototype.wa.call(this, a);
            var b = fa.hi.Bu.Fz
              , c = a.F
              , d = c.tg
              , f = c.ja
              , g = d.p
              , e = f.p;
            g.x = e.x;
            g.y = e.y;
            d = d.d;
            f = f.d;
            d.x = f.x;
            d.y = f.y;
            c = c.tg;
            f = a.position;
            d = c.p;
            f.x = d.x;
            f.y = d.y;
            a.Y.x = c.d.x * b;
            a.Y.y = c.d.y * b;
            b = a.force;
            b.x = 0;
            b.y = 0;
            a.M &= -5
        },
        update: function(a) {
            var b = a.F
              , c = b.Fq
              , d = b.Qf
              , f = a.position
              , g = a.Y;
            if (0 < (a.M & 2))
                d = d.Sc.a[0],
                b.rq(a, 0 > f.x * d.n.x + f.y * d.n.y - d.d ? 0 : 2);
            else {
                var e = this.iq
                  , k = e.p;
                k.x = f.x;
                k.y = f.y;
                e.d.x = g.x * a.gg;
                e.d.y = g.y * a.gg;
                c.cd = 0;
                "bounce" == fa.wy && (c.cd |= 1);
                fa.vy && (c.cd |= 2);
                fa.dF && (c.cd |= 8);
                0 < (a.M & 256) && (c.cd |= 16);
                k = c.SJ(e, a.fb.r, 0);
                if (0 < (c.cd & 8)) {
                    var u = c.result.uj;
                    if (0 < u.f) {
                        var h = u.a
                          , l = 0;
                        for (u = u.f; l < u; ) {
                            var q = l++;
                            b.Zw(a, h[q])
                        }
                    }
                }
                if (-1 != c.result.ix) {
                    if (!(1 <= k)) {
                        f.x += k * e.d.x;
                        f.y += k * e.d.y;
                        if (0 == d.Sg)
                            switch (fa.wy) {
                            case "escape":
                                return;
                            case "stick":
                                if (b.ZH()) {
                                    this.ZB(a, null);
                                    a.gg = 0;
                                    return
                                }
                            }
                        else if (2 == d.Sg && !fa.vy) {
                            b.rq(a, 2);
                            return
                        }
                        f = d.Sc.a[d.Sg].n;
                        e = 2 * (g.x * f.x + g.y * f.y);
                        g.x -= e * f.x;
                        g.y -= e * f.y;
                        b.Yw(a, d.Sg);
                        a.gg = 0
                    }
                } else
                    0 >= (a.M & 256) && null != c.result.Bj && (b = c.result.Bj,
                    1 > k && (f.x += k * e.d.x,
                    f.y += k * e.d.y,
                    a.gg = 0,
                    this.ZB(a, b)))
            }
        },
        ZB: function(a, b) {
            a.Sf(null, this);
            a.F.Fq.result.reset();
            a.F.$w(a, b)
        },
        li: function() {
            return 3
        },
        bi: function() {
            return 6
        },
        m: Te
    });
    ac.g = ["39"];
    ac.H = Ja;
    ac.prototype = x(Ja.prototype, {
        update: function(a) {
            var b = a.F
              , c = a.position;
            null == c && (c = b.ug);
            c.x = b.ja.p.x;
            c.y = b.ja.p.y;
            a.gg = 0
        },
        li: function() {
            return 2
        },
        bi: function() {
            return 3
        },
        m: ac
    });
    wg.g = ["40"];
    dg.g = ["42"];
    dg.prototype = {
        s: function() {
            this.Ip = this.ew = this.ui = null
        },
        apply: function() {
            this.ui.F.bd.clearMarks();
            this.ui.F.bd.uz(fa.my, !1, this.ui.Ab, G(this, this.WJ), this.ui);
            this.ui = this.ew = this.Ip = null
        },
        WJ: function(a, b, c) {
            if (this.BB && a.oa == c)
                return !0;
            a.oa.Dz(Rb);
            b = (fa.my + 1 - a.depth) * fa.PD;
            a = a.oa.Y;
            a.x += this.Ip.x * b;
            a.y += this.Ip.y * b;
            return !0
        },
        m: dg
    };
    v.g = ["43"];
    v.prototype = {
        s: function() {
            null != this.ta && (null != m.getParent(this) && m.getParent(this).remove(this),
            m.gl(this))
        },
        add: function(a, b, c) {
            null == b && (b = cc.Iu(a, null == c ? [] : c));
            m.SC(b, this);
            m.JC(this, m.gv(this) + 1);
            a = m.lb(b) + 1;
            m.Oq(this, m.lb(this) + a);
            for (c = m.getParent(this); null != c; )
                m.Oq(c, m.lb(c) + a),
                c = m.getParent(c);
            if (null == m.sc(this)) {
                m.NC(this, b);
                m.Nq(b, null);
                for (a = b; null != m.sc(a); )
                    a = m.rf(a);
                m.Jh(a, m.sf(this));
                m.Jh(this, b)
            } else {
                for (a = m.rf(this); null != m.sc(a); )
                    a = m.rf(a);
                for (c = b; null != m.sc(c); )
                    c = m.rf(c);
                m.Jh(c, m.sf(a));
                m.Jh(a, b);
                m.Nq(m.rf(this), b)
            }
            a = m.kl(this) + 1;
            c = b;
            for (var d = m.lb(b) + 1; 0 < d--; )
                m.MC(c, m.kl(c) + a),
                c = m.sf(c);
            m.Ax(this, b);
            b.A &= -33;
            b.Pa();
            m.Vq(b, 1);
            return b
        },
        remove: function(a, b) {
            if (null != b)
                a = fb.ud(this, b),
                this.remove(a);
            else if (null == a)
                m.getParent(this).remove(this);
            else {
                m.JC(this, m.gv(this) - 1);
                b = m.lb(a) + 1;
                m.Oq(this, m.lb(this) - b);
                for (var c = m.getParent(this); null != c; )
                    m.Oq(c, m.lb(c) - b),
                    c = m.getParent(c);
                if (m.sc(this) == a) {
                    null == m.Pe(a) && m.Ax(this, null);
                    for (b = a; null != m.sc(b); )
                        b = m.rf(b);
                    m.Jh(this, m.sf(b));
                    m.Jh(b, null);
                    m.NC(this, m.Pe(a))
                } else {
                    for (b = m.sc(this); null != b && m.Pe(b) != a; )
                        b = m.Pe(b);
                    null == m.Pe(a) && m.Ax(this, b);
                    for (c = b; null != m.sc(c); )
                        c = m.rf(c);
                    for (var d = a; null != m.sc(d); )
                        d = m.rf(d);
                    m.Jh(c, m.sf(d));
                    m.Jh(d, null);
                    m.Nq(b, m.Pe(a))
                }
                m.Nq(a, null);
                b = m.kl(this) + 1;
                c = a;
                for (d = m.lb(a) + 1; 0 < d--; )
                    m.MC(c, m.kl(c) - b),
                    c = m.sf(c);
                a.A |= 32;
                m.SC(a, null);
                m.Vq(a, 2)
            }
        },
        Pa: function() {},
        ya: function() {},
        ra: function() {},
        qc: function() {},
        cx: function() {},
        Ua: function() {},
        m: v
    };
    ua.g = ["44"];
    ua.nv = function() {
        if (null != ua.be)
            return ua.be;
        ua.be = aa.$n;
        var a = window.navigator.userAgent;
        (new V("Windows Phone","")).match(a) ? ua.be = aa.bo : (new V("Windows","")).match(a) ? ua.be = aa.ao : (new V("Android","")).match(a) ? ua.be = aa.Im : (new V("iPhone","")).match(a) ? ua.be = aa.yv(bb.Yo) : (new V("iPad","")).match(a) ? ua.be = aa.yv(bb.Xo) : (new V("iPod","")).match(a) ? ua.be = aa.yv(bb.Zo) : (new V("Linux","")).match(a) ? ua.be = aa.Wm : (new V("Mac OS","")).match(a) ? ua.be = aa.Xm : (new V("CrOS","")).match(a) && (ua.be = aa.Km);
        return ua.be
    }
    ;
    ua.ah = function() {
        var a = navigator.userAgent || navigator.vendor || window.opera
          , b = new V("(android|bb\\d+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino","i")
          , c = new V("1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-","i");
        return b.match(a) ? !0 : c.match(C.substr(a, 0, 4))
    }
    ;
    ua.hH = function() {
        var a = new cb;
        (new V("[?&]+([^=&]+)=([^&]*)","gi")).map(window.location.href, function(b) {
            var c = b.eb(1);
            b = b.eb(2);
            null != ea[c] ? a.cc(c, b) : a.G[c] = b;
            return null
        });
        return a
    }
    ;
    ua.NH = function() {
        try {
            var a = window.navigator.userAgent
              , b = -1 < a.indexOf("Android") && -1 < a.indexOf("Mozilla/5.0") && -1 < a.indexOf("AppleWebKit")
              , c = new V("AppleWebKit/([\\d.]+)","");
            if (c.match(a)) {
                var d = parseFloat(c.eb(1));
                if (b)
                    return 537 > d
            }
        } catch (f) {}
        return !1
    }
    ;
    ua.jA = function() {
        if (1 != ua.nv()[1])
            return null;
        var a = new V("OS (\\d+)_(\\d+)_?(\\d+)?","");
        if (a.match(window.navigator.appVersion)) {
            var b = D.parseInt(a.eb(1))
              , c = D.parseInt(a.eb(2));
            try {
                var d = a.eb(3)
            } catch (f) {
                d = "la"
            }
            return [b, c, D.parseInt(d)]
        }
        return []
    }
    ;
    ua.getFeature = function(a, b) {
        var c = T.fa(b, a);
        if (null != c)
            return {
                Wu: c,
                fD: !0,
                prefix: "",
                Gz: a
            };
        c = 0;
        for (var d = ["webkit", "moz", "ms", "o", "khtml"]; c < d.length; ) {
            var f = d[c];
            ++c;
            var g = "" + f + (a.charAt(0).toUpperCase() + C.substr(a, 1, null))
              , e = T.fa(b, g);
            if (null != e)
                return b[a] = e,
                {
                    Wu: e,
                    fD: !0,
                    prefix: f,
                    Gz: g
                }
        }
        return {
            Wu: null,
            fD: !1,
            prefix: null,
            Gz: null
        }
    }
    ;
    sa.g = ["45"];
    sa.xu = function(a) {
        sa.wa(a)
    }
    ;
    sa.wa = function(a) {
        sa.nL = new Ce;
        sa.nL.ZC(sa.CJ);
        sa.ZK(a);
        sa.YK();
        F.load();
        F.bf || R.audio.Cx(0);
        F.Xe || R.audio.Bx(0);
        l.wa();
        R.Wa = new cg;
        R.Wa.wa(sa.uJ)
    }
    ;
    sa.ZK = function(a) {
        H.LK(a);
        var b = "\u011eG\u011fg\u0130I\u015eS\u015fs".split("");
        t.Ri(78, function(a) {
            H.zH(t.getData(a), b)
        });
        a = ["A", "E", 198, "a", "e", 230, "O", "E", 338, "f", "i", 64257, "f", "l", 64258];
        for (var c = 0, d = [90, 12, 53, 99, 71, 94, 86, 79]; c < a.length; )
            for (var f = a[c++], g = a[c++], e = a[c++], k = 0; k < d.length; ) {
                var u = d[k];
                ++k;
                ta.iK(u, f, g, e)
            }
    }
    ;
    sa.YK = function() {
        if (Ie.isSupported()) {
            var a = Ie.hv();
            if (null != a) {
                a = (null == a ? "null" : "" + a).toLowerCase();
                var b = new Fe(4);
                pa.xd(t.Jo(), function(a) {
                    return b.set(D.Qa(a).toLowerCase())
                });
                b.has(a) && (t.Qg = a)
            }
        }
    }
    ;
    sa.uJ = function() {
        lc.load(sa.xJ, sa.Pf)
    }
    ;
    sa.CJ = function(a) {
        A.update(a)
    }
    ;
    sa.xJ = function() {
        sa.start()
    }
    ;
    sa.Pf = function() {}
    ;
    sa.start = function() {
        Hb.X().add(sa)
    }
    ;
    sa.H = v;
    sa.prototype = x(v.prototype, {
        Pa: function() {
            v.prototype.Pa.call(this);
            R.Wa.Fb.appendChild(la.Po().node);
            r.My();
            var a = this.add(gb)
              , b = new Oe;
            a.td(null, Jc, null);
            a.td(Jc, Ua, b);
            a.td(Ua, yb, b);
            a.td(yb, kb, b);
            a.td(kb, Jb, b);
            a.td(Jb, Pb, b);
            a.td(Jb, nc, b);
            a.td(Jb, Ua, b);
            a.td(Jb, kb, b);
            a.td(Jb, yb, b);
            a.td(nc, Pb, b);
            a.td(nc, Ua, b);
            a.td(Pb, Ua, b);
            a.td(Pb, yb, b);
            a = Jc;
            gb.X().jL(a)
        },
        ra: function(a) {
            R.Wa.xc(a)
        },
        cx: function() {
            R.Wa.ii()
        },
        Ua: function(a) {
            switch (a.type) {
            case 1:
                a = R.Wa.window.lb();
                for (var b = 0, c = gb.X().NG(); b < c.length; ) {
                    var d = c[b];
                    ++b;
                    M.ib(d, la).resize(a)
                }
                break;
            case 2:
                A.resume();
                R.audio.Hh(1);
                break;
            case 3:
                A.pause(),
                R.audio.Hh(0)
            }
        },
        m: sa
    });
    l.g = ["46"];
    l.wa = function() {
        l.cf = [-1, -1, -1, -1];
        var a = Vc.decode(l.data, !0);
        for (a = new Wc(a); a.mb < a.Mx; ) {
            var b = a.dK()
              , c = a.ca()
              , d = a.ca()
              , f = a.ca();
            l.cf.push(b);
            l.cf.push(c);
            l.cf.push(d);
            l.cf.push(f)
        }
        l.nc = F.level;
        l.Rd = F.jr;
        l.Jd = F.qo;
        l.Ad = F.Jj;
        l.le = F.mo;
        l.Tl = 0;
        l.am = F.br;
        l.$l = F.ar;
        l.dz()
    }
    ;
    l.$I = function() {
        l.Op = !1;
        l.ow = !1;
        l.Tl = 0;
        l.Lp = !1
    }
    ;
    l.UH = function() {
        return l.Lp
    }
    ;
    l.KK = function() {
        l.Lp = !0;
        l.wd() || (l.am++,
        l.save())
    }
    ;
    l.dz = function() {
        2 == l.Ro() && (l.am = 3,
        l.save())
    }
    ;
    l.bA = function() {
        return l.Tl
    }
    ;
    l.Ho = function(a) {
        return l.le[a[1]]
    }
    ;
    l.Gy = function(a, b) {
        null == b && (b = 1);
        l.le[a[1]] += b;
        l.save();
        return l.le[a[1]]
    }
    ;
    l.RL = function() {
        for (var a = 0, b = l.le.length; a < b; ) {
            var c = a++;
            0 < l.le[c] && (l.le[c]--,
            l.Tl |= 1 << Re.Dv(c)[1])
        }
        l.save()
    }
    ;
    l.KF = function(a) {
        if (l.Jd < l.hl(a))
            return !1;
        l.Jd -= l.hl(a);
        l.save();
        return !0
    }
    ;
    l.hl = function(a) {
        switch (a[1]) {
        case 0:
            return 150;
        case 1:
            return 200;
        case 2:
            return 300
        }
    }
    ;
    l.QG = function(a) {
        switch (a[1]) {
        case 0:
            return 1;
        case 1:
            return 3;
        case 2:
            return 8
        }
    }
    ;
    l.qv = function() {
        if (!l.wd())
            return null;
        for (var a = 0, b = l.le.length; a < b; ) {
            var c = a++;
            if (-1 == l.le[c] && (c = Re.Dv(c),
            l.sA(c)))
                return c
        }
        return null
    }
    ;
    l.EL = function(a) {
        switch (a[1]) {
        case 0:
            var b = 3;
            break;
        case 1:
            b = 0;
            break;
        case 2:
            b = 0
        }
        l.le[a[1]] = b;
        l.save()
    }
    ;
    l.sA = function(a) {
        var b = l.je();
        switch (a[1]) {
        case 0:
            var c = 1;
            break;
        case 1:
            c = 3;
            break;
        case 2:
            c = 8
        }
        return b >= c
    }
    ;
    l.hA = function() {
        return l.Rd
    }
    ;
    l.iv = function() {
        return l.Jd
    }
    ;
    l.uF = function(a) {
        l.Jd += a;
        l.save()
    }
    ;
    l.vF = function(a) {
        l.Rd += a;
        if (l.Rd >= l.ll()) {
            for (; l.Rd >= l.ll(); )
                l.nc++,
                200 < l.nc && (l.nc = 200);
            l.ow = !0
        }
        l.save()
    }
    ;
    l.je = function() {
        return l.nc
    }
    ;
    l.Go = function() {
        return l.cf[4 * l.je() + 1]
    }
    ;
    l.Sz = function() {
        return l.wd() ? l.Af : 0
    }
    ;
    l.ll = function(a) {
        null == a && (a = -1);
        0 > a && (a = l.je());
        200 > a && ++a;
        return l.cf[4 * a]
    }
    ;
    l.Ko = function(a, b) {
        null == b && (b = -1);
        0 > b && (b = l.je());
        if (200 == b)
            return 1;
        var c = l.cf[4 * b];
        return (a - c) / (l.cf[4 * (b + 1)] - c)
    }
    ;
    l.XG = function() {
        return Re.Dv(l.cf[4 * l.je() + 2])
    }
    ;
    l.YG = function() {
        return l.cf[4 * l.je() + 3]
    }
    ;
    l.WF = function(a) {
        return 5 * Math.floor(10 * Math.pow(a, .21) / 5)
    }
    ;
    l.YF = function(a) {
        return 5 * Math.floor(1.6 * Math.pow(a, .34) / 5)
    }
    ;
    l.wd = function() {
        return 3 == l.Ro()
    }
    ;
    l.Ro = function() {
        return l.am
    }
    ;
    l.dv = function() {
        return l.Lp && l.wd() ? l.WF(l.Xg()) : 0
    }
    ;
    l.Rz = function() {
        return l.Lp && l.wd() ? l.YF(l.Xg()) : 0
    }
    ;
    l.TH = function() {
        return l.Op
    }
    ;
    l.WH = function() {
        return l.ow
    }
    ;
    l.Xg = function() {
        return l.Gc
    }
    ;
    l.PK = function(a) {
        l.Gc = a;
        l.Af = Math.round(a * l.Go() / 100);
        l.Gc += l.Af;
        l.wd() ? l.Xg() > l.Ad && (l.Op = !0,
        l.Ad = l.Xg(),
        l.save()) : l.Xg() > l.$l && (0 == l.$l ? l.$l = l.Xg() : l.Op = !0,
        l.save())
    }
    ;
    l.save = function() {
        F.level = l.nc;
        F.jr = l.Rd;
        F.qo = l.Jd;
        F.Jj = l.Ad;
        F.mo = l.le;
        F.br = l.am;
        F.ar = l.$l;
        F.save()
    }
    ;
    oa.g = ["47"];
    oa.bI = function() {
        var a = null;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        b.reason = "dead";
        return oa.send("EVENT_LEVELFAIL", b)
    }
    ;
    oa.eI = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return oa.send("EVENT_LEVELSUCCESS", b)
    }
    ;
    oa.cI = function() {
        var a;
        try {
            null == a && (a = "");
            var b = {};
            b.levelName = a;
            oa.send("EVENT_LEVELRESTART", b)
        } catch (c) {}
    }
    ;
    oa.dI = function() {
        var a;
        try {
            null == a && (a = "");
            var b = {};
            b.levelName = a;
            oa.send("EVENT_LEVELSTART", b)
        } catch (c) {}
    }
    ;
    oa.wL = function(a) {
        try {
            var b = {};
            b.totalScore = a;
            oa.send("EVENT_TOTALSCORE", b)
        } catch (c) {}
    }
    ;
    oa.AL = function() {
        oa.send("EVENT_TUTORIALCOMPLETED")
    }
    ;
    oa.yD = function(a, b) {
        var c = {};
        c.bgmVolume = a;
        c.sfxVolume = b;
        oa.send("EVENT_VOLUMECHANGE", c)
    }
    ;
    oa.Mh = function(a) {
        try {
            window.famobi_analytics.trackScreen(a)
        } catch (b) {}
    }
    ;
    oa.send = function(a, b) {
        try {
            return null != b ? window.famobi_analytics.trackEvent(a, b) : window.famobi_analytics.trackEvent(a)
        } catch (c) {
            return new Promise(function(a, b) {
                b(null)
            }
            )
        }
    }
    ;
    Se.g = ["48"];
    Se.load = function(a) {
        try {
            var b = window.famobi.getMoreGamesButtonImage()
        } catch (c) {
            b = "more_games_graphic.png"
        }
        N.load(b, function(b, d) {
            a(d)
        })
    }
    ;
    Se.click = function() {
        try {
            window.famobi.moreGamesLink()
        } catch (a) {}
    }
    ;
    cg.g = ["49"];
    cg.prototype = {
        wa: function(a) {
            var b = this;
            this.pB = a;
            this.window = new sd;
            this.window.BH(!1);
            this.window.uH();
            this.jJ();
            this.window.Ic = function() {
                b.resize()
            }
            ;
            this.window.jC = function(a) {
                Ta.EC(Hb.X(), a ? 2 : 3)
            }
            ;
            this.window.Ic(this.window.lb())
        },
        xc: function(a) {
            this.Tp += a;
            ra.Cj && 5 < this.Tp && (ra.Cj = !1,
            this.Tp = 0,
            Ca.Cj())
        },
        ii: function() {
            Ca.Yc(this.Fb);
            this.Fb.gr();
            this.Fb.tD();
            this.Tf.clear();
            this.Tf.nG(this.Fb)
        },
        ec: function(a) {
            La.vv(a) || this.Tf.createTexture(a, t.getData(a))
        },
        $c: function(a) {
            var b = t.cH(a);
            a = b.filter(function(a) {
                return (new V("\\.(?:json|bin)$","")).match(a)
            });
            b = b.filter(function(a) {
                return (new V("\\.(?:atf|png|jpg)$","")).match(a)
            });
            a.sort(Ff.gz);
            b.sort(Ff.gz);
            for (var c = 0, d = a.length; c < d; ) {
                var f = c++
                  , g = t.Fj(b[f]);
                if (!La.vv(g)) {
                    f = t.getData(t.Fj(a[f]));
                    if ("string" != typeof f) {
                        var e = new ke(f);
                        f = 84 == e[0] && 80 == e[1] && 74 == e[2] ? pd.FL(Ka.Ww(f)) : t.Yy(f)
                    }
                    this.Tf.createTexture(g, t.getData(g), new zb(f))
                }
            }
        },
        va: function(a, b, c) {
            null == c && (c = !0);
            La.vv(a) || (b = t.getData(b),
            c = new le(c ? Ka.Ww(b) : t.Yy(b)),
            this.Tf.createTexture(a, t.getData(a), c))
        },
        zj: function(a) {
            this.Tf.zj(a);
            t.dl(a)
        },
        resize: function() {
            var a = this.window.lb();
            this.Tf.Tj.reset(new Xc(0,0,a.x,a.y));
            this.Cw = !0
        },
        jJ: function() {
            var a = this;
            this.Tf = new te;
            this.Tf.NB = !0;
            this.window.NK(this.Tf);
            var b = new Lb(Sc.Gg(0) / 255,Sc.Gg(0) / 255,Sc.Gg(0) / 255);
            b.W = Sc.Gg(0) / 255;
            this.window.color = b;
            this.pB();
            this.pB = null;
            (new Db(100)).Xb = function() {
                a.Cw && (a.Cw = !1,
                Ta.EC(Hb.X(), 1))
            }
        },
        m: cg
    };
    tc.g = ["50"];
    tc.prototype = {
        tC: function(a, b) {
            this.sC(b, a, !0)
        },
        hK: function(a, b, c) {
            a = tg.xG(a, c);
            c = 0;
            for (var d = b.length; c < d; ) {
                var f = c++;
                this.sC(b[f], a[f])
            }
        },
        sC: function(a, b, c) {
            null == c && (c = !1);
            var d = this.DA;
            b = new Jf(a,b,c);
            null != ea[a] ? d.cc(a, b) : d.G[a] = b
        },
        play: function(a, b, c, d, f) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            var g = this.DA;
            g = null != ea[a] ? g.ad(a) : g.G[a];
            if (null == g)
                return -1;
            if (b && this.ip(a))
                return this.Fj(a);
            if (g.bh || b)
                c = !0;
            if (!c) {
                var e = tc.bF
                  , k = (new Date).getTime() / 1E3
                  , u = this.xw;
                if (null != ea[a] ? u.fl(a) : u.G.hasOwnProperty(a))
                    if (u = this.xw,
                    k - (null != ea[a] ? u.ad(a) : u.G[a]) < e)
                        return -1;
                e = this.xw;
                null != ea[a] ? e.cc(a, k) : e.G[a] = k
            }
            a = this.Jz();
            if (0 > a)
                if (c) {
                    c = null;
                    a = 0;
                    for (k = this.xe.iterator(); k.ga(); )
                        e = k.next(),
                        !e.hf.bh && !e.loop && e.No() > a && (a = e.No(),
                        c = e);
                    if (null == c)
                        return -1;
                    c.s();
                    this.tq(c);
                    a = this.Jz()
                } else
                    return -1;
            c = new If(this,g.data);
            k = this.xe;
            k.f == k.B && k.T();
            k.a[k.f++] = c;
            c.id = this.BI++;
            c.channel = a;
            c.hf = g;
            c.loop = b;
            c.offset = d;
            c.wc = f;
            c.play();
            return c.id
        },
        stop: function(a) {
            if ("string" == typeof a) {
                for (var b = !1, c = pa.filter(this.xe, function(b) {
                    return b.hf.name == a
                }).G; null != c; ) {
                    b = c.item;
                    c = c.next;
                    var d = b;
                    b = !0;
                    d.stop();
                    this.tq(d)
                }
                return b
            }
            if ("number" == typeof a && (a | 0) === a) {
                if (0 > a)
                    return !1;
                c = pa.find(this.xe, function(b) {
                    return b.id == a
                });
                if (null != c)
                    return c.stop(),
                    this.tq(c),
                    !0
            }
            return !1
        },
        ip: function(a) {
            return "string" == typeof a ? pa.ji(this.xe, function(b) {
                return b.hf.name == a
            }) : "number" == typeof a && (a | 0) === a ? pa.ji(this.xe, function(b) {
                return b.id == a
            }) : !1
        },
        Fj: function(a) {
            var b = pa.find(this.xe, function(b) {
                return b.hf.name == a
            });
            return null != b ? b.id : -1
        },
        Hh: function(a) {
            this.mB != a && (this.mB = a,
            O.Hh(a))
        },
        Cx: function(a, b) {
            null == b && (b = -1);
            if (0 > b) {
                this.Iw = a;
                var c = this.xe;
                b = c.a;
                var d = 0;
                for (c = c.f; d < c; ) {
                    var f = d++;
                    f = b[f];
                    f.hf.bh || f.zk(a)
                }
            } else
                for (f = this.xe,
                d = f.a,
                c = 0,
                f = f.f; c < f; ) {
                    var g = c++;
                    g = d[g];
                    g.hf.bh || g.id != b || g.zk(a)
                }
        },
        Bx: function(a, b) {
            null == b && (b = -1);
            if (0 > b) {
                this.nw = a;
                var c = this.xe;
                b = c.a;
                var d = 0;
                for (c = c.f; d < c; ) {
                    var f = d++;
                    f = b[f];
                    f.hf.bh && f.zk(a)
                }
            } else
                for (f = this.xe,
                d = f.a,
                c = 0,
                f = f.f; c < f; ) {
                    var g = c++;
                    g = d[g];
                    g.hf.bh && g.id == b && g.zk(a)
                }
        },
        Jz: function() {
            for (var a = 0; a < tc.WD; ) {
                if (0 == (this.xl & 1 << a))
                    return this.xl |= 1 << a,
                    a;
                ++a
            }
            return -1
        },
        tq: function(a) {
            this.xe.remove(a);
            this.xl &= ~(1 << a.channel)
        },
        m: tc
    };
    R.g = ["51"];
    var yg = y.Bubblewoods = function() {}
    ;
    yg.g = ["52"];
    yg.xu = y.Bubblewoods.boot = function(a) {
        sa.xu(a)
    }
    ;
    yg.UN = function() {
        sa.xu(null)
    }
    ;
    F.g = ["53"];
    F.load = function() {
        if (null == Ic.read("bubblewoods"))
            F.save();
        else {
            var a = Ic.read("bubblewoods");
            try {
                var b = JSON.parse(a);
                F.level = T.fa(b, "level");
                F.jr = T.fa(b, "xp");
                F.qo = T.fa(b, "coins");
                F.Jj = T.fa(b, "highscore");
                F.mo = T.fa(b, "boosters");
                F.Xe = T.fa(b, "music");
                F.bf = T.fa(b, "sound");
                F.br = T.fa(b, "tutorialProgress");
                F.ar = T.fa(b, "tutorialHighscore")
            } catch (c) {
                F.save()
            }
        }
    }
    ;
    F.save = function() {
        var a = {
            format: 1
        };
        a.version = lc.So().toString();
        a.level = F.level;
        a.xp = F.jr;
        a.coins = F.qo;
        a.highscore = F.Jj;
        a.music = F.Xe;
        a.sound = F.bf;
        a.boosters = F.mo;
        a.tutorialProgress = F.br;
        a.tutorialHighscore = F.ar;
        Ic.write("bubblewoods", JSON.stringify(a))
    }
    ;
    r.g = ["54"];
    r.My = function() {
        var a;
        null == a && (a = function() {
            return {}
        }
        );
        t.Ri(6, function(b) {
            R.audio.tC(t.getData(b), r.Br);
            a(b)
        });
        t.Ri(44, function(b) {
            R.audio.tC(t.getData(b), r.Cr);
            a(b)
        });
        t.Ri(7, function(a) {
            R.audio.hK(t.getData(a), r.XE, r.YE)
        })
    }
    ;
    r.play = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = !1);
        null == b && (b = !1);
        R.audio.play(a, b, c, d)
    }
    ;
    r.stop = function(a) {
        R.audio.stop(a)
    }
    ;
    nd.g = ["55"];
    nd.H = Ja;
    nd.prototype = x(Ja.prototype, {
        wa: function(a) {
            Ja.prototype.wa.call(this, a);
            this.nb = new Vb(.1);
            a.Sf(null, ac.X)
        },
        update: function(a) {
            var b = a.F
              , c = b.ug;
            c.x = b.ja.p.x;
            c.y = b.ja.p.y;
            b = this.nb;
            b.uf || (b.elapsedTime += a.gg);
            b = b.elapsedTime / b.oc;
            b = 1 > b ? b : 1;
            var d = c.x - 3.2;
            a.position.x = d + (c.x - d) * b;
            d = c.y + .72;
            a.position.y = d + (c.y - d) * b;
            a.scale = .75 + .25 * b;
            1 == b && (J.X().Va(16),
            a.Sf(null, this),
            a.Og(ac.X));
            a.gg = 0
        },
        li: function() {
            return 2
        },
        bi: function() {
            return 5
        },
        m: nd
    });
    K.g = ["56"];
    K.H = v;
    K.prototype = x(v.prototype, {
        Pa: function() {},
        v: function() {
            return m.getParent(this)
        },
        Qe: function() {
            return m.getParent(this).F
        },
        m: K
    });
    E.g = ["57"];
    E.Qi = function(a, b, c, d) {
        return new E(a,b,a + c,b + d)
    }
    ;
    E.qq = function(a, b, c, d) {
        return new E(a - c,b - d,a + c,b + d)
    }
    ;
    E.prototype = {
        tv: function() {
            return new B(this.c + .5 * (this.j - this.c),this.b + .5 * (this.i - this.b))
        },
        TK: function(a) {
            var b = .5 * (this.j - this.c);
            this.c = a.x - b;
            this.j = a.x + b;
            b = .5 * (this.i - this.b);
            this.b = a.y - b;
            this.i = a.y + b;
            return a
        },
        m: E
    };
    hb.g = ["58"];
    hb.H = K;
    hb.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            this.hd = this.v().Fb.hc(3);
            for (var a = 0; 10 > a; ) {
                var b = a++
                  , c = new I(this.hd,101,"aim_marker_small_0");
                c.node.name = "AimMarkerSmall" + b;
                c.Oa();
                c.ea();
                c.I(!1);
                c.Hd().add();
                this.nh[b] = c
            }
            for (a = 0; 2 > a; )
                b = a++,
                c = new I(this.hd,101,"aim_marker_big_0"),
                c.node.name = "AimMarkerBig" + b,
                c.Oa(),
                c.ea(),
                c.I(!1),
                c.Hd().add(),
                this.oh[b] = c;
            this.Pv = -1;
            this.v().subscribe(this);
            this.v().ah && (Ga.X().subscribe(G(this, this.Rb)),
            this.aj(!1))
        },
        ya: function() {
            Ga.X().unsubscribe(G(this, this.Rb));
            for (var a = 0, b = this.nh; a < b.length; ) {
                var c = b[a];
                ++a;
                c.s()
            }
            a = 0;
            for (b = this.oh; a < b.length; )
                c = b[a],
                ++a,
                c.s();
            this.hd = this.oh = this.nh = null
        },
        Rb: function(a) {
            switch (a.action[1]) {
            case 0:
                var b = a.x;
                a = a.y;
                var c = this.v().pi;
                b >= c.c && b <= c.j && a >= c.b && a <= c.i && this.aj(!0);
                break;
            case 1:
                this.aj(!1)
            }
        },
        Ua: function(a) {
            K.prototype.Ua.call(this, a);
            8 == a.type && (this.v().ah || this.aj(!0))
        },
        ra: function() {
            var a = Ga.X()
              , b = !1
              , c = hb.pi;
            if (!(c.c > c.j || c.b > c.i)) {
                b = a.To().x;
                c = a.To().y;
                var d = hb.pi;
                b = !(b >= d.c && b <= d.j && c >= d.b && c <= d.i)
            }
            d = b || !this.v().XH() || this.v().he || !this.v().di;
            this.GC(d ? .25 : 1);
            b = this.v().F;
            var f = b.tg;
            c = b.ja;
            var g = f.p
              , e = c.p;
            g.x = e.x;
            g.y = e.y;
            f = f.d;
            c = c.d;
            f.x = c.x;
            f.y = c.y;
            b = b.tg;
            c = this.Ra;
            c.x = b.p.x;
            c.y = b.p.y;
            f = a.To().x;
            a = a.To().y;
            c = this.v().F.viewport;
            this.gb.x = c.vL(f);
            this.gb.y = c.kD(a);
            f = this.gb.x - this.Ra.x;
            g = this.gb.y - this.Ra.y;
            e = Math.sqrt(f * f + g * g);
            d || (a = (e - 2) / 2,
            this.GC(0 > a ? 0 : 1 < a ? 1 : a));
            a = !1;
            d = 0;
            var k = this.Qe().Qf.Sc.a[1];
            0 > -1 * this.gb.x + 0 * this.gb.y - (k.d + 1 + 2.5) && (vf.Hz(b.p.x, b.p.y, b.d.x, b.d.y, -1, k.d + 1, this.gb),
            a = !0,
            d = 1);
            k = this.Qe().Qf.Sc.a[3];
            0 > this.gb.x + 0 * this.gb.y - (k.d + 1 + 2.5) && (vf.Hz(b.p.x, b.p.y, b.d.x, b.d.y, 1, k.d + 1, this.gb),
            a = !0,
            d = -1);
            !a && this.v().ah && (k = 4 + .4 * e,
            4 < k && (k = 4),
            this.gb.x += f / e * k,
            this.gb.y += g / e * k);
            a && (f = Ng.cJ(this.Ra, this.gb),
            g = this.Ql,
            e = 2 * (f.x * d + 0 * f.y),
            g.x = f.x - e * d,
            g.y = f.y - 0 * e);
            c.Cm(this.Ra, this.Ra);
            c.Cm(this.gb, this.gb);
            f = this.Ra.x - this.gb.x;
            g = this.Ra.y - this.gb.y;
            c = Math.sqrt(f * f + g * g);
            1500 < c && (c = 1500,
            a = !1);
            g = this.v().qb.Ib;
            e = g != this.Pv;
            this.Pv = g;
            d = f = null;
            if (e) {
                4 >= (g & -65) ? (d = this.v().jl(g),
                f = "aim_marker_big_" + d,
                d = "aim_marker_small_" + d) : 8 == g ? (f = "aim_marker_big_fireball",
                d = "aim_marker_small_fireball") : 16 == g ? (f = "aim_marker_big_painter",
                d = "aim_marker_small_painter") : 32 == g && (f = "aim_marker_big_bomb",
                d = "aim_marker_small_bomb");
                g = 0;
                for (e = this.oh; g < e.length; )
                    k = e[g],
                    ++g,
                    k.dc(f),
                    k.ea();
                f = 0;
                for (g = this.nh; f < g.length; )
                    e = g[f],
                    ++f,
                    e.dc(d),
                    e.ea()
            }
            d = 0;
            for (f = this.nh; d < f.length; )
                g = f[d],
                ++d,
                g.I(!1);
            d = 0;
            for (f = this.oh; d < f.length; )
                g = f[d],
                ++d,
                g.I(!1);
            c /= 8;
            for (g = f = d = 0; 7 > g; )
                g++,
                this.Ra.x += b.d.x * c,
                this.Ra.y += b.d.y * c,
                e = this.nh[d++],
                e.P(this.Ra.x),
                e.S(this.Ra.y),
                e.I(!0);
            if (a) {
                for (b = 0; 2 > b; )
                    a = b++,
                    this.Ra.x = this.gb.x + this.Ql.x * a * c,
                    this.Ra.y = this.gb.y + this.Ql.y * a * c,
                    a = this.nh[d++],
                    a.P(this.Ra.x),
                    a.S(this.Ra.y),
                    a.I(!0);
                this.Ra.x = this.gb.x + 2 * this.Ql.x * c;
                this.Ra.y = this.gb.y + 2 * this.Ql.y * c
            } else
                this.Ra.x += b.d.x * c,
                this.Ra.y += b.d.y * c;
            b = this.oh[f++];
            b.P(this.Ra.x);
            b.S(this.Ra.y);
            b.I(!0)
        },
        qc: function() {
            for (var a = this.v().F.viewport.zoom / 40, b = 0, c = this.nh; b < c.length; ) {
                var d = c[b];
                ++b;
                d.N(a)
            }
            b = 0;
            for (c = this.oh; b < c.length; )
                d = c[b],
                ++b,
                d.N(a)
        },
        aj: function(a) {
            this.hd.I(a)
        },
        GC: function(a) {
            this.hd.sa(a)
        },
        m: hb
    });
    Od.g = ["59"];
    Od.H = K;
    Od.prototype = x(K.prototype, {
        Pa: function() {
            this.v().subscribe(this)
        },
        Ua: function(a) {
            switch (a.type) {
            case 6:
                a = this.Zb(za.nj(W.kn), H.translate(e.Cn));
                this.Mo(a.position, 10);
                a.Em(.5, .01, 1, Z.Eb(3));
                a.cr(.5, .01, 1, Z.Eb(3));
                a.ge(.35, .9);
                a.Y.y = 12;
                a.vd = -40;
                break;
            case 7:
                a = this.Zb(za.nj(W.Vm), H.translate(e.Bn));
                this.Mo(a.position, 10);
                a.Em(.5, .01, 1, Z.qj(.3));
                a.cr(.5, .01, 1, Z.qj(.3));
                a.ge(.35, .9);
                a.Y.y = 12;
                a.vd = -40;
                break;
            case 10:
                a = this.Zb(za.nj(W.Wn), H.translate(e.Dn));
                this.Mo(a.position, 10);
                a.ge(.35, 1);
                a.Y.y = 15;
                a.vd = -40;
                break;
            case 11:
                a = this.Zb(za.nj(W.Um), H.translate(e.An));
                this.Mo(a.position, 10);
                a.ge(.35, 1);
                a.Y.y = 15;
                a.vd = -40;
                break;
            case 15:
                8 == this.v().so && (this.aB = !0);
                break;
            case 23:
                a = this.Zb(za.nj(W.Tm), H.translate(e.zn));
                a.Em(.5, .01, 1, Z.Eb(3));
                a.BL(.5, 0, 360, Z.Eb(3));
                a.ge(.3, 1);
                var b = this.v().F
                  , c = a.position;
                null == c && (c = b.ug);
                c.x = b.ja.p.x;
                c.y = b.ja.p.y;
                a.position.y -= 6;
                a.Y.y = 15;
                a.vd = -40;
                break;
            case 26:
                a = this.Zb(za.Xn, null);
                b = a.position;
                c = this.v().xA.position;
                b.x = c.x;
                b.y = c.y;
                a.Y.y = 15;
                a.vd = -40;
                a.cr(.5, .01, 1, Z.Eb(3));
                a.Em(.5, .01, 1, Z.Eb(3));
                a.ge(.3, 1);
                break;
            case 27:
                this.aB && (this.aB = !1,
                a = this.Zb(za.Zh, ""),
                b = a.position,
                c = this.v().wA.position,
                b.x = c.x,
                b.y = c.y,
                a.position.x = this.v().F.ja.p.x,
                a.Y.y = -4,
                a.Nc = .05,
                a.add(rc));
                break;
            case 30:
                a = [W.co, W.Mm, W.Sm][this.v().np];
                switch (a[1]) {
                case 5:
                    b = H.translate(e.xn);
                    break;
                case 6:
                    b = H.translate(e.En);
                    break;
                case 7:
                    b = H.translate(e.yn);
                    break;
                default:
                    b = null
                }
                a = this.Zb(za.nj(a), b);
                b = a.position;
                c = this.v().Jv;
                b.x = c.x;
                b.y = c.y;
                a.position.y += 2;
                a.Y.y = 15;
                a.vd = -40;
                a.rotation = Wb.JG();
                a.ge(.3, 1);
                break;
            case 33:
                c = this.ev(this.v().dh.fg);
                a = this.Zb(za.Zh, lb.format(this.v().Gd));
                b = a.position;
                c = c.pa;
                b.x = c.x;
                b.y = c.y;
                a.ge(.2, .5);
                break;
            case 34:
                c = this.ev(this.v().dh.ce);
                a = this.Zb(za.Zh, lb.format(this.v().Gd));
                b = a.position;
                c = c.pa;
                b.x = c.x;
                b.y = c.y;
                a.Nc = .05;
                a.Y.y = -4;
                a.scale = 1.3;
                a.ge(1.6, 0);
                break;
            case 35:
                a = this.v().dh.jf;
                b = this.ev(a);
                a = this.Zb(za.Zh, "");
                a.position.x = b.pa.x;
                b = a.position;
                c = this.v().F;
                var d = c.ug;
                d.x = c.ja.p.x;
                d.y = c.ja.p.y;
                b.y = d.y - 4;
                a.Nc = .05;
                a.add(sc);
                break;
            case 37:
                a = this.Zb(za.Yn, lb.format(this.v().Gd)),
                b = a.position,
                c = this.v().Jv,
                b.x = c.x,
                b.y = c.y,
                a.Y.y = -15,
                a.Nc = .05,
                a.ge(.2, 1),
                a.cr(.5, .01, 1.3, Z.Eb(3)),
                a.Em(.5, .01, 1.3, Z.Eb(3))
            }
        },
        Zb: function(a, b) {
            a = new Zb(a,b);
            this.v().add(null, a);
            return a
        },
        Mo: function(a, b) {
            var c = this.v().F;
            if (null != a)
                a.x = c.ja.p.x,
                a.y = c.ja.p.y;
            else {
                var d = c.ug;
                d.x = c.ja.p.x;
                d.y = c.ja.p.y
            }
            a.y -= b
        },
        ev: function(a) {
            var b = new zd;
            this.v().F.XF(a.Zq(), b);
            return b
        },
        m: Od
    });
    sc.g = ["60"];
    sc.H = v;
    sc.prototype = x(v.prototype, {
        Pa: function() {
            this.U = m.getParent(this);
            this.Dc = this.U.v();
            this.Dc.subscribe(this);
            this.Dc.dh.jf.Zq()
        },
        ya: function() {
            this.Dc = this.U = null
        },
        Ua: function(a) {
            if (28 == a.type) {
                a = this.U;
                var b = fb.ud(this.Dc, ld).Zz();
                this.Ei += b;
                0 == a.Y.y ? a.Y.y = -10 : (this.Ue += .02,
                2 < this.Ue && (this.Ue = 2));
                a.wD(lb.format(this.Ei));
                a.alpha = 1;
                a.ge(.5, 0)
            }
        },
        ra: function() {
            this.U.scale += .5 * (this.Ue - this.U.scale)
        },
        m: sc
    });
    rc.g = ["61"];
    rc.H = v;
    rc.prototype = x(v.prototype, {
        Pa: function() {
            this.U = m.getParent(this);
            this.Dc = this.U.v();
            this.Dc.subscribe(this)
        },
        ya: function() {
            this.Dc = this.U = null
        },
        Ua: function(a) {
            36 == a.type && (this.Ei += this.Dc.Gd,
            this.U.wD(lb.format(this.Ei)),
            this.Ue += .02,
            2 < this.Ue && (this.Ue = 2),
            this.U.alpha = 1,
            this.U.ge(.5, 0))
        },
        ra: function() {
            this.U.scale += .5 * (this.Ue - this.U.scale)
        },
        m: rc
    });
    Re.g = ["62"];
    Re.Dv = function(a) {
        switch (a) {
        case 0:
            return ka.Mg;
        case 1:
            return ka.Ie;
        case 2:
            return ka.He;
        default:
            return null
        }
    }
    ;
    var ka = {
        pb: !0,
        ob: ["Time", "Painter", "Bomb"],
        Mg: ["Time", 0]
    };
    ka.Mg.toString = h;
    ka.Mg.l = ka;
    ka.Ie = ["Painter", 1];
    ka.Ie.toString = h;
    ka.Ie.l = ka;
    ka.He = ["Bomb", 2];
    ka.He.toString = h;
    ka.He.l = ka;
    ka.Gb = [ka.Mg, ka.Ie, ka.He];
    nb.g = ["63"];
    nb.$ = [We];
    nb.H = v;
    nb.prototype = x(v.prototype, {
        jl: function() {
            return this.Dc.jl(this.F.code)
        },
        ya: function() {
            this.Dc = this.kx = this.Wf = this.F = null
        },
        pop: function() {
            if (0 == this.Ga) {
                this.F.disconnect();
                this.F.Sf(Rb);
                var a = this.F.Y;
                a.x = 0;
                a.y = 0
            }
            fb.ud(this, mb).PJ()
        },
        rG: function() {
            this.F.disconnect();
            this.F.Sf(Rb);
            this.F.Og(Qd.X);
            this.F.Nc = 0;
            this.Ga = 1
        },
        IF: function(a) {
            this.sI = a;
            this.F.Sf(Rb);
            this.F.disconnect();
            this.Ga = 2
        },
        JF: function() {
            this.F.Sf(Rb);
            this.F.disconnect();
            fb.ud(this, mb).NJ()
        },
        EJ: function(a) {
            this.rB = a;
            fb.ud(this, mb).OJ()
        },
        wJ: function() {
            this.F.tj(this.rB);
            this.rB = -1
        },
        VB: function() {
            this.s()
        },
        QB: function() {
            Ta.yK(this)
        },
        ra: function() {
            if (this.LB)
                this.F.Nu();
            else {
                switch (this.Ga) {
                case 1:
                    var a = this.F.F.ja.p.y + 1;
                    .65 > Ha.zD && (a += 3);
                    this.F.position.y > a && (this.Dc.aI = this.F,
                    this.Dc.Va(28),
                    this.F.Y.y = -20,
                    this.F.Y.y += .8 * fb.ud(this.Dc, md).Y,
                    this.pop(),
                    this.Ga = 0);
                    break;
                case 2:
                    0 >= --this.sI && (fb.ud(this, mb).MJ(),
                    this.Ga = 0)
                }
                if (null != this.F) {
                    this.rotation = this.F.rotation;
                    this.scale = this.F.scale;
                    this.visible = 0 >= (this.F.M & 2);
                    a = this.kx;
                    var b = this.Wf;
                    a.x = b.x;
                    a.y = b.y;
                    this.F.aA(this.Wf);
                    this.CC = this.F.fb.r * this.F.F.viewport.zoom
                }
            }
        },
        m: nb
    });
    mb.g = ["64"];
    mb.H = v;
    mb.prototype = x(v.prototype, {
        Pa: function() {
            var a = m.getParent(this);
            32 == a.F.code ? this.wz() : 16 == a.F.code ? this.zz() : (this.D = new I(this.hc()),
            this.D.Dd(68, this.Ej()),
            this.D.ea(),
            this.D.Oa(),
            0 != (a.F.code & 64) && (this.ze = new I(this.hc(),68,"bubble_hourglass"),
            this.ze.ea(),
            this.ze.Oa(),
            this.o |= 256))
        },
        ya: function() {
            null != this.D && (this.D.s(),
            this.D = null);
            null != this.la && (this.la.s(),
            this.la = null);
            null != this.ze && (this.ze.s(),
            this.ze = null);
            null != this.lc && (this.lc.s(),
            this.lc = null)
        },
        Ua: function(a) {
            40 == a.type && 0 != m.getParent(this).F.code && (a = m.getParent(this),
            8 == a.F.code ? this.mG() : 32 == a.F.code ? this.wz() : 16 == a.F.code ? this.zz() : 0 < (this.o & 6) ? (this.o &= -7,
            null != this.la && (this.la.s(),
            this.la = null),
            this.D.Dd(68, this.Ej()),
            this.D.yC(),
            this.D.Oa(),
            this.D.ea()) : this.D.dc(this.Ej()))
        },
        ra: function(a) {
            null != this.D && this.D.xc(a);
            null != this.la && this.la.xc(a);
            if (0 != this.o)
                if (0 < (this.o & 1)) {
                    var b = this.la;
                    b.Ed(b.Tc + 10);
                    this.lc.xc(a)
                } else
                    0 < (this.o & 4) ? (a = this.D,
                    a.Ed(a.Tc + 5)) : 0 < (this.o & 8) ? this.bv(2) : 0 < (this.o & 16) ? this.bv(11) : 0 < (this.o & 32) ? this.bv(10) : 0 < (this.o & 64) && 0 == (this.o & 128) && .2 < this.la.Pc().iA() && (m.getParent(this).wJ(),
                    this.o |= 128)
        },
        qc: function() {
            var a = m.getParent(this)
              , b = a.Wf;
            var c = b.x;
            b = b.y;
            var d = 2 * a.CC / 106 * a.scale;
            null != this.D && (this.D.P(c),
            this.D.S(b),
            this.D.N(d),
            this.D.I(a.visible));
            if (null != this.la) {
                this.la.I(a.visible);
                this.la.P(c);
                this.la.S(b);
                var f = d;
                0 < (this.o & 120) && (f = 2 * d);
                this.la.N(f)
            }
            0 < (this.o & 256) && (this.ze.I(a.visible),
            this.ze.P(c),
            this.ze.S(b),
            this.ze.N(d));
            0 < (this.o & 1) && (f = a.F.Y,
            f = 57.29577951308232 * Math.atan2(f.y, f.x) + 90,
            this.lc.N(1.2 * d),
            this.lc.Ed(f),
            this.lc.P(c),
            this.lc.S(b),
            this.lc.I(0 >= (a.F.M & 32)))
        },
        PJ: function() {
            0 < (this.o & 64) && null != this.la && (this.la.s(),
            this.la = null);
            var a = m.getParent(this).jl();
            switch (a) {
            case 0:
                var b = 0;
                break;
            case 1:
                b = 1;
                break;
            case 2:
                b = 2;
                break;
            case 3:
                b = 3;
                break;
            case 4:
                b = 4;
                break;
            default:
                b = -1
            }
            b = Oa.ie(b);
            this.Zb(Oa.ZD[a], b.frames[0].value);
            this.la.Oa();
            this.la.ea();
            this.la.Pc().wm(0).play(b, null, G(this, this.Ou));
            this.Mq();
            this.o |= 8
        },
        MJ: function() {
            0 < (this.o & 2) && this.la.s();
            this.Zb(69, "anim_bubble_burst_bomb_0001");
            this.la.Oa();
            this.la.ea();
            this.la.Hd().add();
            this.Mq();
            this.la.Pc().play(Oa.ie(6), null, G(this, this.Ou));
            this.o |= 16
        },
        NJ: function() {
            this.Zb(10, "anim_bubble_burst_fireball_0001");
            this.la.Oa();
            this.la.ea();
            this.la.Hd().add();
            this.Mq();
            this.la.Pc().wm(0).play(Oa.ie(5), null, G(this, this.Ou));
            this.o |= 32
        },
        OJ: function() {
            0 < (this.o & 4) && (this.o &= -5,
            this.D.Ed(0));
            this.Zb(39, "anim_bubble_paint_0001");
            this.la.Oa();
            this.la.ea();
            this.la.Hd().add();
            this.Mq();
            this.la.Pc().play(Oa.ie(7), null, G(this, this.vJ));
            this.o |= 64
        },
        mG: function() {
            null == this.D ? (this.D = new I(this.hc(),47,"bubble_fireball"),
            this.D.Oa(),
            this.D.ea()) : this.D.Dd(47, "bubble_fireball");
            this.Zb(47, "bubble_fireball_flames");
            this.la.Oa();
            this.la.ea();
            this.la.Hd().add();
            this.lc = new I(this.D.tc(),47,"anim_bubble_firetail_0001");
            this.lc.Hd().add();
            this.lc.Ak(this.lc.za() / 2);
            this.lc.Dg(this.lc.za() / 2);
            this.lc.I(!1);
            this.lc.tc().Uq(this.D, this.lc);
            this.lc.tc().Uq(this.D, this.la);
            this.lc.Pc().play(Oa.ie(12));
            this.o = 1
        },
        wz: function() {
            null == this.D ? this.D = new I(this.hc(),29,"anim_bomb_0001") : (this.D.yC(),
            this.D.Dd(29, "anim_bomb_0001"));
            this.D.ea();
            this.D.Oa();
            this.Zb(29, "anim_bomb_0001");
            this.la.Oa();
            this.la.ea();
            this.la.Pc().wm(-1).play(Oa.ie(8));
            this.o = 2
        },
        zz: function() {
            null != this.D && this.D.s();
            null != this.la && this.la.s();
            this.D = new I(this.hc(),68,"bubble_painter0");
            this.Ya(this.D);
            this.Zb(68, "bubble_painter1");
            this.Ya(this.la);
            this.o = 4
        },
        Ej: function() {
            return "bubble" + m.getParent(this).jl()
        },
        hc: function() {
            return J.X().Fb.hc(2)
        },
        Ou: function() {
            m.getParent(this).LB = !0
        },
        vJ: function() {
            this.la.s();
            this.la = null;
            this.o &= -193
        },
        bv: function(a) {
            null != this.D && this.la.Pc().iA() > a / 60 && (this.D.s(),
            this.D = null,
            null != this.ze && (this.ze.s(),
            this.ze = null,
            this.o &= -257))
        },
        Mq: function() {
            this.la.Ed(Math.round(360 * Math.random()))
        },
        Ya: function(a) {
            a.ea();
            a.Oa()
        },
        Zb: function(a, b) {
            null != this.la && this.la.s();
            this.la = new I(this.D.tc(),a,b)
        },
        m: mb
    });
    $b.g = ["65"];
    $b.H = K;
    $b.prototype = x(K.prototype, {
        Pa: function() {
            this.sg = R.Wa.Fb;
            this.v().subscribe(this)
        },
        ra: function(a) {
            this.nk += a;
            if (8 == this.v().qb.Ib) {
                a = 1 + this.nk / 3;
                2 < a && (a = 2);
                a = 1.7 * Math.sin(40 * this.nk * a);
                var b = this.sg.local;
                b.R.x = 0;
                b.R.y = a;
                b.u &= -2;
                b.u |= 32;
                this.sg.o |= 8
            } else
                -1 != this.Hi && (this.Hi *= .97,
                .5 > this.Hi ? (a = this.sg.local,
                a.R.x = 0,
                a.R.y = 0,
                a.u &= -2,
                a.u |= 32,
                this.sg.o |= 8,
                this.Hi = -1) : (a = Math.sin(40 * this.nk) * this.Hi,
                b = this.sg.local,
                b.R.x = 0,
                b.R.y = a,
                b.u &= -2,
                b.u |= 32,
                this.sg.o |= 8))
        },
        Ua: function(a) {
            switch (a.type) {
            case 22:
                0 < this.v().dh.ce.f && (this.Hi = 4);
                break;
            case 23:
                this.nk = 0
            }
        },
        m: $b
    });
    bg.g = ["66"];
    bg.prototype = {
        s: function() {
            this.Dc = null
        },
        reload: function() {
            this.Ib = this.Nf;
            this.Nf = this.next()
        },
        $y: function() {
            return 8 == this.Ib || this.Ib == this.Nf ? !1 : !0
        },
        mL: function() {
            if (!this.$y())
                return !1;
            var a = this.Ib;
            this.Ib = this.Nf;
            this.Nf = a;
            a = this.yf;
            a = a.a[a.ua % a.B];
            var b = this.yf
              , c = this.yf;
            c.a[c.ua % c.B] = b.a[(1 + b.ua) % b.B];
            b = this.yf;
            b.a[(1 + b.ua) % b.B] = a;
            a = this.yf;
            a = a.a[(2 + a.ua) % a.B];
            b = this.yf;
            for (b = b.a[(3 + b.ua) % b.B]; a == b; )
                b = this.yg();
            return !0
        },
        hI: function() {
            0 != (this.Ib & 48) && (this.Nf = this.Ib);
            this.Ib = 8
        },
        qx: function() {
            var a = J.X()
              , b = this.yf;
            b = b.a[(1 + b.ua) % b.B];
            var c = this.yf;
            c = c.a[(2 + c.ua) % c.B];
            if (0 != (a.Zk & 1 << ka.He[1])) {
                var d = ka.He[1];
                if (6 > this.Pp[d] && this.ph[d] >= this.IA) {
                    this.enqueue(32);
                    this.IA = this.IB();
                    this.Pp[d]++;
                    this.ph[d] = 0;
                    return
                }
            }
            if (0 != (a.Zk & 1 << ka.Ie[1]) && (a = ka.Ie[1],
            6 > this.Pp[a] && this.ph[a] >= this.sB)) {
                this.enqueue(16);
                this.sB = this.KB();
                this.Pp[a]++;
                this.ph[a] = 0;
                return
            }
            a = this.yg();
            if (b == c)
                for (; a == c && a == b; )
                    a = this.yg();
            this.enqueue(a)
        },
        next: function() {
            var a = this.yf
              , b = a.a[a.ua++];
            a.ua == a.B && (a.ua = 0);
            a.f--;
            this.qx();
            return b
        },
        IB: function(a) {
            null == a && (a = !1);
            return this.lq(a, Wa.FD)
        },
        KB: function(a) {
            null == a && (a = !1);
            return this.lq(a, Wa.KD)
        },
        lq: function(a, b) {
            null == a && (a = !1);
            if (a) {
                var c = 0;
                a = 1
            } else
                c = 2,
                a = 3;
            c = b[c] - .4999;
            return (c + (b[a] + .4999 - c) * this.Bd.$e() + 16384.5 | 0) - 16384
        },
        enqueue: function(a) {
            var b = this.yf;
            b.B == b.f && b.T();
            b.a[(b.f++ + b.ua) % b.B] = a;
            a = 0;
            for (b = this.ph.length; a < b; ) {
                var c = a++;
                this.ph[c]++
            }
        },
        yg: function() {
            return this.we.next()
        },
        m: bg
    };
    Nd.g = ["67"];
    Nd.H = K;
    Nd.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            var a = Ga.X();
            a.sG();
            a.subscribe(G(this, this.Rb));
            Gb.X().subscribe(G(this, this.$B))
        },
        ya: function() {
            Ga.X().unsubscribe(G(this, this.Rb));
            Gb.X().unsubscribe(G(this, this.$B))
        },
        Rb: function(a) {
            if (!this.v().paused) {
                switch (a.action[1]) {
                case 0:
                case 1:
                    var b = a.x
                      , c = a.y
                      , d = this.v().pi;
                    if (!(b >= d.c && b <= d.j && c >= d.b && c <= d.i) || 0 < this.v().Fb.hc(6).rc(a.Re()))
                        return
                }
                switch (a.action[1]) {
                case 0:
                    if (0 < (a.hint & 8)) {
                        this.v().Kx();
                        break
                    }
                    if (this.lC(a.Re())) {
                        this.ww = !0;
                        break
                    }
                    this.v().F.UC(a.Re());
                    break;
                case 1:
                    if (0 < (a.hint & 8))
                        break;
                    if (this.v().he)
                        break;
                    if (this.lC(a.Re())) {
                        this.ww && (this.ww = !1,
                        this.v().Kx());
                        break
                    }
                    this.v().di && this.v().F.MF() && this.$K();
                    break;
                case 2:
                    this.v().F.UC(a.Re())
                }
            }
        },
        $B: function(a) {
            a.Me || 32 == a.code && this.v().Kx()
        },
        lC: function(a) {
            a = new B(a.x,a.y);
            this.v().F.DC(a);
            var b = this.v().F
              , c = b.ug;
            c.x = b.ja.p.x;
            c.y = b.ja.p.y;
            this.Vl.c = c.x + -3.2 - 1;
            this.Vl.i = c.y + .72 + 2;
            this.Vl.j = c.x + 1;
            this.Vl.b = c.y - 2;
            b = this.Vl;
            c = a.x;
            a = a.y;
            return c >= b.c && c <= b.j && a >= b.b ? a <= b.i : !1
        },
        $K: function() {
            this.v().dD()
        },
        m: Nd
    });
    md.g = ["68"];
    md.H = K;
    md.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            this.A |= 2;
            this.v().subscribe(this)
        },
        Ua: function(a) {
            8 == a.type && (this.Pj = this.Kz(),
            this.A &= -3)
        },
        ra: function(a) {
            K.prototype.ra.call(this, a);
            this.v().freeze || (this.OL(a),
            this.v().F.yL(0, this.Y * a))
        },
        OL: function() {
            if (this.v().he) {
                var a = Math.abs(this.Y);
                this.Y = (0 < a ? .001 > a : .001 > -a) ? 0 : .9 * this.Y
            } else {
                var b = this.Kz()
                  , c = Wa.ED
                  , d = Wa.ky;
                a = c[c.length - 1];
                var f = this.tA();
                f && (a = 5);
                (f = f || 0 < this.v().Nj) && this.Pj >= d.length - 1 && (this.Pj = 2);
                b == this.Pj || f || (this.Pj = b);
                b = c[this.Pj];
                b > a && (b = a);
                a = Math.abs(this.Y);
                a += (b - a) * (a < b ? .1 : .06);
                c = a - b;
                if (0 < c ? .001 > c : .001 > -c)
                    a = b;
                this.Y = -a
            }
        },
        Kz: function() {
            var a = this.v().F;
            if (this.tA())
                return this.Pj;
            var b = a.viewport.ej(a.Xz().position.y + 1);
            a = a.viewport.ma();
            var c = a.b;
            b = 1 - (b - c) / (a.i - c);
            a = Wa.ky;
            c = a.length - 1;
            for (var d = 0; d <= c; ) {
                if (b < a[d])
                    return d;
                ++d
            }
            return c
        },
        tA: function() {
            return 0 < this.Qe().de.f && 8 == this.Qe().de.a[0].code ? !0 : !1
        },
        m: md
    });
    Md.g = ["69"];
    Md.H = K;
    Md.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            this.v().subscribe(this);
            var a = this.v().Fb.hc(1);
            this.L = new ma(null,a);
            this.Zv = new I(this.L,31,"foliage1");
            this.Zv.Oa();
            this.Zv.ea();
            this.sp = new I(this.L,31,"cannon");
            this.sp.Oa();
            this.sp.ea();
            this.Ai = new I(this.v().Fb.hc(4),31,"foliage2");
            this.Ai.Oa();
            this.Ai.ea();
            this.gd = new I(this.L,31,"cannon_bubble_glow");
            this.gd.Oa();
            this.gd.ea();
            this.gd.N(2);
            this.gd.sa(0);
            this.gd.I(!1)
        },
        ya: function() {
            this.L.s();
            this.gd = this.sp = this.Zv = null;
            this.Ai.s();
            this.Ai = null
        },
        Ua: function(a) {
            switch (a.type) {
            case 15:
                this.gd.I(!1);
                this.gd.sa(0);
                break;
            case 16:
                this.gd.I(!0),
                a = M.ib(a.sender, J).qb.Ib,
                this.gd.dc(32 == a ? "cannon_bubble_bomb_glow" : 16 == a ? "cannon_bubble_painter_glow" : "cannon_bubble_glow")
            }
        },
        ra: function() {
            if (this.gd.vc && 1 > this.gd.xf) {
                var a = this.gd;
                a.sa(a.xf + .05);
                1 < this.gd.xf && this.gd.sa(1)
            }
            a = this.Qe();
            var b = a.tg
              , c = a.ja
              , d = b.p
              , f = c.p;
            d.x = f.x;
            d.y = f.y;
            b = b.d;
            c = c.d;
            b.x = c.x;
            b.y = c.y;
            a = a.tg;
            c = 2 * this.v().F.viewport.zoom / 106;
            this.L.N(c);
            this.sp.Ed(57.29577951308232 * Math.atan2(a.d.y, a.d.x) + 90);
            this.Qe().viewport.Cm(a.p, this.Ae);
            this.L.P(this.Ae.x);
            this.L.S(this.Ae.y);
            this.Ai.N(c);
            this.Ai.P(this.Ae.x);
            this.Ai.S(this.Ae.y)
        },
        m: Md
    });
    Pc.g = ["70"];
    Pc.H = K;
    Pc.prototype = x(K.prototype, {
        Ne: function() {
            var a = this.L.ma(this.L);
            return this.L.Hg(new B(a.c + .5 * (a.j - a.c),a.b + .5 * (a.i - a.b)), new B)
        },
        Pa: function() {
            this.v().subscribe(this);
            var a = this.v().Fb.hc(4);
            this.L = new ma(null,a);
            this.D = new I(this.L,4,"anim_combo_pergament_roll_0001");
            this.D.Pc().wm(0);
            this.D.ea();
            this.D.I(!1);
            this.oe = new ta(this.L,103);
            this.oe.Pq();
            this.oe.Xd(this.D.za(), this.D.Aa());
            this.oe.ia("Chain");
            this.oe.Ee();
            this.oe.xk();
            this.oe.P(0);
            this.oe.S(.08 * -this.D.Aa());
            this.oe.I(!1);
            this.pe = new ta(this.L,9);
            this.pe.Pq();
            this.pe.Xd(this.D.za(), .75 * this.D.Aa());
            this.pe.ia("1");
            this.pe.Ee();
            this.xi.c = 0;
            this.xi.b = 0;
            this.xi.j = this.D.za();
            this.xi.i = this.D.Aa();
            this.pe.P(0);
            this.pe.S(0);
            this.pe.I(!1);
            this.resize()
        },
        ya: function() {
            this.L.s();
            this.pe = this.oe = this.D = this.L = null
        },
        ra: function(a) {
            this.K += .5 * (1 - this.K);
            this.D.xc(a)
        },
        qc: function() {
            this.D.N(this.K)
        },
        Ua: function(a) {
            switch (a.type) {
            case 5:
                this.resize();
                break;
            case 31:
                1 == this.v().fc ? (this.D.I(!0),
                this.oe.I(!0),
                this.pe.I(!0),
                this.D.Pc().play(Oa.ie(13))) : this.K = 1.2;
                this.pe.ia("" + this.v().fc);
                9 > this.v().fc ? this.xi.c = 0 : (a = this.D.za(),
                this.xi.c = .1 * a);
                this.pe.yb(this.xi, 0, 0);
                break;
            case 32:
                this.oe.vc && (this.oe.I(!1),
                this.pe.I(!1),
                this.D.Pc().play(Oa.ie(14), !0))
            }
        },
        resize: function() {
            var a = this.v().F.viewport
              , b = a.ma();
            b = new E(b.c,b.b,b.j,b.i);
            a = 3 * a.zoom / this.D.Aa();
            this.L.N(a);
            this.L.P(b.j - 1.1 * this.L.za());
            this.L.S(this.v().F.viewport.ej(this.v().F.ja.p.y) - .6 * this.L.Aa())
        },
        m: Pc
    });
    Xa.g = ["71"];
    Xa.H = v;
    Xa.prototype = x(v.prototype, {
        s: function() {
            for (var a = 0, b = this.Kb.length; a < b; ) {
                var c = a++;
                null != this.Kb[c] && this.Kb[c].s()
            }
            ba.Be(this.Kb);
            this.Kb = null;
            this.Ji.s();
            this.Ji = null;
            this.vB.s();
            this.vB = null;
            0 == --Xa.count && (Xa.wk.s(),
            Xa.wk = null);
            v.prototype.s.call(this)
        },
        subscribe: function(a, b, c) {
            null == c && (c = -1);
            if (null == a.ta)
                return !1;
            var d = a.ta;
            if (null != b) {
                c = !0;
                for (d = 0; d < b.length; ) {
                    var f = b[d];
                    ++d;
                    c = c && this.subscribe(a, null, f)
                }
                return c
            }
            b = d.dd;
            a = this.Ji;
            f = a.Xa[73856093 * b & a.ab];
            if (-1 == f)
                f = !1;
            else {
                var g = a.a;
                if (g[f] == b)
                    f = !0;
                else {
                    var e = !1;
                    for (f = g[f + 2]; -1 != f; ) {
                        if (g[f] == b) {
                            e = !0;
                            break
                        }
                        f = g[f + 2]
                    }
                    f = e
                }
            }
            if (f) {
                f = a.Xa[73856093 * b & a.ab];
                if (-1 == f)
                    f = -2147483648;
                else if (g = a.a,
                g[f] == b)
                    f = g[f + 1];
                else {
                    e = -2147483648;
                    for (f = g[f + 2]; -1 != f; ) {
                        if (g[f] == b) {
                            e = g[f + 1];
                            break
                        }
                        f = g[f + 2]
                    }
                    f = e
                }
                if (0 > f) {
                    if (0 > c)
                        return !1;
                    this.Kb[0].remove(d);
                    f = this.Kb[c + 1];
                    null == f && (f = new Q(4),
                    this.Kb[c + 1] = f);
                    f.f == f.B && f.T();
                    f.a[f.f++] = d;
                    d = a.Xa[73856093 * b & a.ab];
                    if (-1 != d)
                        if (a = a.a,
                        a[d] == b)
                            a[d + 1] = c;
                        else
                            for (d = a[d + 2]; -1 != d; ) {
                                if (a[d] == b) {
                                    a[d + 1] = c;
                                    break
                                }
                                d = a[d + 2]
                            }
                } else {
                    if (0 > c) {
                        f = 0;
                        for (g = this.Kb; f < g.length; )
                            e = g[f],
                            ++f,
                            null != e && e.remove(d);
                        for (; ; ) {
                            e = 73856093 * b & a.ab;
                            var k = a.Xa;
                            f = k[e];
                            if (-1 == f)
                                f = !1;
                            else if (g = a.a,
                            b == g[f])
                                k[e] = -1 == g[f + 2] ? -1 : g[f + 2],
                                e = f / 3 | 0,
                                a.Ba[e] = a.ka,
                                a.ka = e,
                                g[f + 1] = -2147483648,
                                g[f + 2] = -1,
                                a.f--,
                                f = !0;
                            else {
                                e = !1;
                                k = f;
                                for (f = g[f + 2]; -1 != f; ) {
                                    if (g[f] == b) {
                                        e = !0;
                                        break
                                    }
                                    k = f;
                                    f = g[k + 2]
                                }
                                e ? (g[k + 2] = g[f + 2],
                                e = f / 3 | 0,
                                a.Ba[e] = a.ka,
                                a.ka = e,
                                g[f + 1] = -2147483648,
                                g[f + 2] = -1,
                                a.f--,
                                f = !0) : f = !1
                            }
                            if (!f)
                                break
                        }
                    } else if (f = this.Kb[c + 1],
                    null != f && f.contains(d))
                        return !1;
                    f = this.Kb[c + 1];
                    null == f && (f = new Q(4),
                    this.Kb[c + 1] = f);
                    f.f == f.B && f.T();
                    f.a[f.f++] = d;
                    a.f == a.B && a.T();
                    d = a.a;
                    g = a.Xa;
                    f = 3 * a.ka;
                    a.ka = a.Ba[a.ka];
                    d[f] = b;
                    d[f + 1] = c;
                    b = 73856093 * b & a.ab;
                    c = g[b];
                    if (-1 == c)
                        g[b] = f;
                    else {
                        for (b = d[c + 2]; -1 != b; )
                            c = b,
                            b = d[b + 2];
                        d[c + 2] = f
                    }
                    a.f++
                }
            } else {
                a.f == a.B && a.T();
                f = a.a;
                e = a.Xa;
                g = 3 * a.ka;
                a.ka = a.Ba[a.ka];
                f[g] = b;
                f[g + 1] = c;
                k = 73856093 * b & a.ab;
                b = e[k];
                if (-1 == b)
                    e[k] = g;
                else {
                    for (e = f[b + 2]; -1 != e; )
                        b = e,
                        e = f[e + 2];
                    f[b + 2] = g
                }
                a.f++;
                a = this.Kb[c + 1];
                null == a && (a = new Q(4),
                this.Kb[c + 1] = a);
                a.f == a.B && a.T();
                a.a[a.f++] = d
            }
            return !0
        },
        unsubscribe: function(a, b, c) {
            null == c && (c = -1);
            if (null == this.Kb || null == a.ta)
                return !1;
            var d = this.Ji
              , f = a.ta
              , g = f.dd
              , e = d.Xa[73856093 * g & d.ab];
            if (-1 == e)
                e = !1;
            else {
                var k = d.a;
                if (k[e] == g)
                    e = !0;
                else {
                    var u = !1;
                    for (e = k[e + 2]; -1 != e; ) {
                        if (k[e] == g) {
                            u = !0;
                            break
                        }
                        e = k[e + 2]
                    }
                    e = u
                }
            }
            if (!e)
                return !1;
            if (null != b) {
                d = !0;
                for (f = 0; f < b.length; )
                    g = b[f],
                    ++f,
                    d = d && this.unsubscribe(a, null, g);
                return d
            }
            if (d.rH(g, -1)) {
                if (0 <= c)
                    return !1;
                this.Kb[0].remove(f);
                b = 73856093 * g & d.ab;
                c = d.Xa;
                f = c[b];
                if (-1 != f)
                    if (a = d.a,
                    g == a[f])
                        c[b] = -1 == a[f + 2] ? -1 : a[f + 2],
                        g = f / 3 | 0,
                        d.Ba[g] = d.ka,
                        d.ka = g,
                        a[f + 1] = -2147483648,
                        a[f + 2] = -1,
                        d.f--;
                    else {
                        b = !1;
                        c = f;
                        for (f = a[f + 2]; -1 != f; ) {
                            if (a[f] == g) {
                                b = !0;
                                break
                            }
                            c = f;
                            f = a[c + 2]
                        }
                        b && (a[c + 2] = a[f + 2],
                        g = f / 3 | 0,
                        d.Ba[g] = d.ka,
                        d.ka = g,
                        a[f + 1] = -2147483648,
                        a[f + 2] = -1,
                        d.f--)
                    }
                return !0
            }
            a = !1;
            if (0 > c) {
                g = f.dd;
                b = d.Xa[73856093 * g & d.ab];
                if (-1 == b)
                    b = -2147483648;
                else if (c = d.a,
                c[b] == g)
                    b = c[b + 1];
                else {
                    e = -2147483648;
                    for (b = c[b + 2]; -1 != b; ) {
                        if (c[b] == g) {
                            e = c[b + 1];
                            break
                        }
                        b = c[b + 2]
                    }
                    b = e
                }
                for (; -2147483648 != b; ) {
                    k = 73856093 * g & d.ab;
                    u = d.Xa;
                    c = u[k];
                    if (-1 == c)
                        c = !1;
                    else if (e = d.a,
                    g == e[c])
                        u[k] = -1 == e[c + 2] ? -1 : e[c + 2],
                        k = c / 3 | 0,
                        d.Ba[k] = d.ka,
                        d.ka = k,
                        e[c + 1] = -2147483648,
                        e[c + 2] = -1,
                        d.f--,
                        c = !0;
                    else {
                        k = !1;
                        u = c;
                        for (c = e[c + 2]; -1 != c; ) {
                            if (e[c] == g) {
                                k = !0;
                                break
                            }
                            u = c;
                            c = e[u + 2]
                        }
                        k ? (e[u + 2] = e[c + 2],
                        k = c / 3 | 0,
                        d.Ba[k] = d.ka,
                        d.ka = k,
                        e[c + 1] = -2147483648,
                        e[c + 2] = -1,
                        d.f--,
                        c = !0) : c = !1
                    }
                    c && (this.Kb[b + 1].remove(f),
                    a = !0);
                    b = d.Xa[73856093 * g & d.ab];
                    if (-1 == b)
                        b = -2147483648;
                    else if (c = d.a,
                    c[b] == g)
                        b = c[b + 1];
                    else {
                        e = -2147483648;
                        for (b = c[b + 2]; -1 != b; ) {
                            if (c[b] == g) {
                                e = c[b + 1];
                                break
                            }
                            b = c[b + 2]
                        }
                        b = e
                    }
                }
            } else
                b = this.Kb[c + 1],
                null != b && (d.HL(g, c),
                a = b.remove(f));
            return a
        },
        Va: function(a, b, c) {
            null == c && (c = !1);
            if (0 != this.Ji.f) {
                var d = this.TF(a);
                if (c)
                    Ta.nB.zK(this, d, a, b);
                else {
                    a = qa.get(a, b, this);
                    b = 0;
                    for (c = d.f; b < c; ) {
                        var f = b++;
                        f = d.a[f];
                        null != f.ta && f.Ua(a)
                    }
                    qa.put(a)
                }
                d.clear(!0);
                null != Xa.wk && (a = Xa.wk,
                a.size == a.We ? a.Ld(d) : (a.size == a.fd && a.resize(),
                a.hb[a.size++] = d))
            }
        },
        TF: function(a) {
            var b = this.Kb[0];
            a = this.Kb[a + 1];
            var c = b.f + (null != a ? a.f : 0)
              , d = Xa.wk;
            d = 0 < d.size ? d.hb[--d.size] : d.Df();
            d.od(c);
            c = m.hg;
            for (var f, g = 0, e = b.f; g < e; )
                if (f = b.a[g],
                0 <= f.dd)
                    f = c[f.index],
                    d.a[d.f++] = f,
                    ++g;
                else {
                    var k = b.a;
                    k[g] = k[--b.f];
                    --e;
                    k = this.Ji;
                    var u = f.dd & 2147483647
                      , h = 73856093 * u & k.ab
                      , l = k.Xa
                      , q = l[h];
                    if (-1 != q) {
                        var p = k.a;
                        if (u == p[q])
                            l[h] = -1 == p[q + 2] ? -1 : p[q + 2],
                            u = q / 3 | 0,
                            k.Ba[u] = k.ka,
                            k.ka = u,
                            p[q + 1] = -2147483648,
                            p[q + 2] = -1,
                            k.f--;
                        else {
                            h = !1;
                            l = q;
                            for (q = p[q + 2]; -1 != q; ) {
                                if (p[q] == u) {
                                    h = !0;
                                    break
                                }
                                l = q;
                                q = p[l + 2]
                            }
                            h && (p[l + 2] = p[q + 2],
                            u = q / 3 | 0,
                            k.Ba[u] = k.ka,
                            k.ka = u,
                            p[q + 1] = -2147483648,
                            p[q + 2] = -1,
                            k.f--)
                        }
                    }
                    this.Kb[0].remove(f)
                }
            if (null == a)
                return d;
            g = 0;
            for (e = a.f; g < e; )
                if (f = a.a[g],
                0 <= f.dd)
                    f = c[f.index],
                    d.a[d.f++] = f,
                    ++g;
                else {
                    b = a.a;
                    b[g] = b[--a.f];
                    --e;
                    b = f.dd & 2147483647;
                    k = 0;
                    for (q = this.Kb; k < q.length; )
                        p = q[k],
                        ++k,
                        null != p && p.remove(f);
                    for (; ; ) {
                        f = this.Ji;
                        p = 73856093 * b & f.ab;
                        u = f.Xa;
                        k = u[p];
                        if (-1 == k)
                            f = !1;
                        else if (q = f.a,
                        b == q[k])
                            u[p] = -1 == q[k + 2] ? -1 : q[k + 2],
                            p = k / 3 | 0,
                            f.Ba[p] = f.ka,
                            f.ka = p,
                            q[k + 1] = -2147483648,
                            q[k + 2] = -1,
                            f.f--,
                            f = !0;
                        else {
                            p = !1;
                            u = k;
                            for (k = q[k + 2]; -1 != k; ) {
                                if (q[k] == b) {
                                    p = !0;
                                    break
                                }
                                u = k;
                                k = q[u + 2]
                            }
                            p ? (q[u + 2] = q[k + 2],
                            p = k / 3 | 0,
                            f.Ba[p] = f.ka,
                            f.ka = p,
                            q[k + 1] = -2147483648,
                            q[k + 2] = -1,
                            f.f--,
                            f = !0) : f = !1
                        }
                        if (!f)
                            break
                    }
                }
            return d
        },
        m: Xa
    });
    J.g = ["72"];
    J.$ = [jg];
    J.X = function() {
        return m.Gj(J)
    }
    ;
    J.H = Xa;
    J.prototype = x(Xa.prototype, {
        wa: function(a, b, c) {
            a.add(null, this);
            b.appendChild(this.Fb.root);
            this.Zk = c;
            this.HH();
            this.Wy = ka.ob.slice().length;
            this.Ov = this.add(v);
            fa.Qk = ua.ah();
            this.wK();
            this.F = new kg;
            this.F.addListener(this);
            this.EH();
            this.cD();
            this.qb = new bg(this);
            this.F.zA(this.qb.Ib);
            this.add(Nd);
            this.add(md);
            this.add(Oc);
            this.add(Md);
            this.add(hb);
            this.add(Jd);
            this.add($b);
            this.add(ld);
            this.add(Od);
            this.add(kd);
            this.add(Kd);
            this.add(Ld);
            this.add(Mc);
            this.add(Pc);
            this.add(qc);
            this.Ii = new Yf(this.F)
        },
        hL: function() {
            this.bq = !0,
            this.Ga = 0
        },
        rF: function() {
            this.he = this.lu = !0
        },
        kL: function() {
            this.bq = !1;
            this.time = this.Ga = 1;
            this.add(Lc)
        },
        tK: function() {
            fb.ud(this, Lc).next() || fb.ud(this, Lc).s()
        },
        pause: function() {
            this.paused = !0;
            this.A |= 1;
            this.Va(38)
        },
        resume: function() {
            this.A &= -2;
            this.paused = !1
        },
        fA: function() {
            var a = Ha.window;
            return new E(a.c,a.b,a.j,a.i)
        },
        Qo: function() {
            var a = R.Wa.window.lb();
            return new $a(a.x,a.y)
        },
        jl: function(a) {
            return this.up[a & 7]
        },
        XH: function() {
            return 2 == this.Ga
        },
        ya: function() {
            this.F.removeListener(this);
            this.F.s();
            this.F = null;
            this.qb.s();
            this.qb = null;
            this.Fb.s();
            this.xA = this.aI = this.wA = this.dh = this.Fb = null;
            this.Ii.s();
            this.Ov = this.yw = this.Ii = null
        },
        ra: function(a) {
            switch (this.Ga) {
            case 0:
                this.Va(6);
                this.time = 0;
                this.Ga++;
                break;
            case 1:
                this.time += a;
                1 <= this.time && (this.time = 60,
                this.Ga++,
                this.bq && this.Va(7),
                this.Va(8));
                break;
            case 2:
                this.update(a);
                break;
            case 3:
                this.Ga = -1,
                this.Va(9)
            }
        },
        cx: function() {
            R.Wa.ii()
        },
        Ua: function(a) {
            Xa.prototype.Ua.call(this, a);
            1 == a.type && (this.cD(),
            this.Va(5))
        },
        qx: function(a) {
            null == a && (a = -1);
            if (-1 == a) {
                var b = this.F;
                a = 19 - (b.Lf - b.Pi + 1)
            }
            for (b = 0; b < a; ) {
                b++;
                for (var c = this.yw.Yz(), d = [], f = 0, g = this.F.cols; f < g; ) {
                    var e = f++;
                    d.push(c[e])
                }
                this.F.VJ(d)
            }
        },
        dD: function() {
            this.he || (this.su && (this.su = !1,
            this.he = !0),
            this.F.jc.Sf(null, nd.X),
            fa.hi.Bu.Fz = 8 == this.qb.Ib ? 90 : 120,
            8 == this.F.jc.code && (this.F.jc.M |= 256),
            this.so = this.F.jc.code,
            this.F.aL(),
            this.qb.reload(),
            8 == this.qb.Ib && (this.El = 0),
            this.Va(15),
            this.F.zA(this.qb.Ib))
        },
        Kx: function() {
            !this.he && this.tu && (this.qb.mL() ? (this.F.jc.tj(this.qb.Ib),
            this.Va(18)) : this.Va(19))
        },
        gL: function() {
            this.El = 0;
            var a = this.fc / 10 | 0;
            this.qb.Ib = 8;
            this.F.jc.tj(8);
            this.Va(23, {
                count: a
            })
        },
        HH: function() {
            0 == this.Xf && (this.Xf = 0);
            0 == this.Xf && (this.Xf = 65535 * Math.random() | 0);
            this.vx = new De(this.Xf)
        },
        EH: function() {
            var a = new Rd;
            a.Fh = 1;
            a.Gh = 1;
            this.yw = new Pa(this.vx,13,19);
            a.tb = new kc(13,20);
            a.tb.zx(0);
            for (var b = a.tb.Fa - 2; 0 <= b; ) {
                for (var c = this.yw.Yz(), d = a.tb, f = [], g = 0; 13 > g; ) {
                    var e = g++;
                    f.push(c[e])
                }
                d.Kh(b, f);
                --b
            }
            a.tb.resize(a.tb.Z, a.tb.Fa - 1);
            this.F.QC(a, 10)
        },
        wK: function() {
            if (null == this.Tg) {
                for (var a = [], b = 0; 5 > b; ) {
                    var c = b++;
                    a.push(c)
                }
                this.Tg = a;
                for (a = 0; 3 > a; ) {
                    a++;
                    b = [];
                    c = 0;
                    for (var d = this.Tg.length; c < d; )
                        c++,
                        b.push(this.vx.$e());
                    pg.Bk(this.Tg, b)
                }
            }
            this.up = [];
            this.up[1] = this.Tg.pop();
            this.up[2] = this.Tg.pop();
            this.up[4] = this.Tg.pop()
        },
        update: function(a) {
            this.Bm || this.freeze || (this.kq -= a,
            0 >= this.kq && (this.di = !0),
            this.time -= a,
            !this.Lw && 10 >= this.time && (this.Lw = !0,
            this.Va(14)),
            0 >= this.time && (this.time = 0,
            this.Bm = !0,
            8 == this.qb.Ib || 0 != (this.qb.Ib & 48) ? this.su = !0 : this.he = !0,
            this.Va(10)));
            this.F.update(a);
            if (this.he) {
                if (this.F.de.vf()) {
                    for (a = this.F.Mc.iterator(); a.ga(); ) {
                        var b = a.next();
                        if (!(0 < (b.M & 16)) && 0 >= (b.M & 4))
                            return
                    }
                    0 < Zb.gj || this.Ga++
                }
            } else
                this.Nj -= a,
                0 > this.Nj && (this.Nj = 0),
                this.Hw && (this.Ii.ez(),
                b = this.Ii.eD(),
                this.az(b, 8),
                this.Hw = !1),
                this.rl || (b = this.F.Xz(),
                0 >= this.F.ja.p.y - (b.position.y + 1) && (this.he = this.rl = !0,
                this.Va(11))),
                0 < this.fc && this.kB != this.fc && (this.kB = this.fc,
                0 == this.fc % 10 && (this.qb.hI(),
                this.gL())),
                8 == this.qb.Ib && (this.El += a,
                a = this.El / 5,
                (this.rl || 1 <= a) && this.dD())
        },
        cD: function() {
            var a = this.Qo();
            a = new E(0,0,a.x,a.y);
            var b = new E;
            Ha.mA = 0;
            Ha.fe(a, b);
            this.F.QK(b);
            this.F.Lq(.5, .9);
            a = this.F.viewport.ma();
            b = this.Qo();
            this.pi = new E(0,0,b.x,b.y);
            switch (Ha.mode) {
            case 1:
            case 2:
            case 4:
                this.pi.b = a.b;
                break;
            case 3:
                this.pi.b = qc.iz()
            }
        },
        az: function(a, b) {
            this.dh = a;
            for (var c = a.jf.iterator(); c.ga(); ) {
                var d = c.next();
                M.ib(d.gf, nb).rG()
            }
            for (c = a.al.iterator(); c.ga(); )
                d = c.next(),
                this.hz(d);
            for (c = a.fg.iterator(); c.ga(); )
                d = c.next(),
                M.ib(d.gf, nb).pop();
            if (0 < a.ce.f) {
                this.Nj = .75;
                c = 1;
                d = Math.round(.01 / A.dj);
                for (var f = a.ce.iterator(); f.ga(); ) {
                    var g = f.next();
                    M.ib(g.gf, nb).IF(c);
                    c += d
                }
                this.kq = c * A.dj;
                this.di = !1
            }
            if (a.Xi)
                for (c = a.$k.iterator(); c.ga(); )
                    d = c.next(),
                    f = b & 7 | d.code & 64,
                    d.code = f,
                    M.ib(d.gf, nb).EJ(f);
            0 < a.Ke.f && (this.F.trim(),
            this.qx());
            this.F.Vx()
        },
        hz: function(a) {
            this.time += 3;
            this.Bm && (this.Bm = this.he = !1);
            10 < this.time && (this.Lw = !1);
            this.xA = a;
            this.Va(26)
        },
        SB: function(a) {
            a = new nb(a);
            a.add(mb);
            this.Ov.add(null, a)
        },
        kJ: function(a) {
            this.bB || a.Og(nd.X);
            this.bB = !1;
            a = new nb(a);
            a.add(mb);
            this.Ov.add(null, a)
        },
        Zw: function(a, b) {
            8 == a.code && (0 != (b.code & 64) && this.hz(b),
            b.M |= 64,
            M.ib(b.gf, nb).JF(),
            this.wA = b,
            this.Va(27),
            this.Hw = !0)
        },
        rq: function() {
            this.Va(17)
        },
        $w: function(a, b) {
            var c = b.code;
            b = this.Jv;
            var d = a.position;
            b.x = d.x;
            b.y = d.y;
            this.Ii.ez();
            this.Ii.TI(a, c);
            b = this.Ii.Qb;
            b.Xi || 0 < b.ce.f ? a.bj() : 0 == b.Ke.f && this.F.BF();
            this.az(b, c);
            this.Va(22);
            b.Xi && (a = c & 7,
            0 != (this.qb.Ib & 48) && (this.qb.Nf = this.qb.Ib),
            this.qb.Ib = a,
            this.F.jc.tj(a),
            this.Va(29));
            if (0 < b.Ke.f)
                for (a = Wa.ID,
                c = a.length; 0 < c--; )
                    if (b.Ke.f >= a[c]) {
                        this.np = c;
                        this.Va(30);
                        break
                    }
        },
        Yw: function(a) {
            0 < a.Y.x ? this.Va(20) : this.Va(21)
        },
        m: J
    });
    Wa.g = ["73"];
    Qb.g = ["74"];
    Qb.H = K;
    Qb.prototype = x(K.prototype, {
        ra: function(a) {
            this.Y.x += this.force.x * a;
            this.Y.y += this.force.y * a;
            var b = this.Nc;
            0 < b && (this.Y.x *= 1 - b,
            this.Y.y *= 1 - b);
            this.position.x += this.Y.x * a;
            this.position.y += this.Y.y * a;
            this.force.x = 0;
            this.force.y = 0
        },
        qc: function() {
            this.v().F.viewport.Cm(this.position, this.Wf, this.xD)
        },
        m: Qb
    });
    qc.g = ["75"];
    qc.iz = function() {
        var a = R.Wa.window.Pu;
        sa.Qk || (a = 144);
        return .9 / 2.54 * a | 0
    }
    ;
    qc.H = K;
    qc.prototype = x(K.prototype, {
        Pa: function() {
            this.v().subscribe(this);
            this.hd = this.v().Fb.hc(6);
            this.$b = new I(this.hd,31,"icon_sound");
            F.bf || this.$b.sa(.5);
            this.jd = new I(this.hd,31,"icon_music");
            F.Xe || this.jd.sa(.5);
            this.kd = new I(this.hd,31,"icon_pause");
            Ga.X().subscribe(G(this, this.Rb));
            this.resize()
        },
        ya: function() {
            this.$b.s();
            this.jd.s();
            this.kd.s();
            Ga.X().unsubscribe(G(this, this.Rb))
        },
        Ua: function(a) {
            5 == a.type && this.resize()
        },
        Rb: function(a) {
            if (a.action == va.bg && !this.v().freeze) {
                a = a.Re();
                if (this.$b.rc(a)) {
                    var b = F.bf = !F.bf;
                    F.save();
                    R.audio.Cx(b ? 1 : 0);
                    this.$b.sa(b ? 1 : .5);
                    this.hm()
                }
                this.jd.rc(a) && (b = F.Xe = !F.Xe,
                F.save(),
                R.audio.Bx(b ? 1 : 0),
                this.jd.sa(b ? 1 : .5),
                this.hm());
                this.kd.rc(a) && this.v().pause()
            }
        },
        hm: function() {
            oa.yD(F.Xe ? 1 : 0, F.bf ? 1 : 0)
        },
        resize: function() {
            var a = qc.iz()
              , b = this.$b.SG().x;
            this.$b.N(1);
            this.jd.N(1);
            this.kd.N(1);
            var c = a / b;
            this.$b.N(c);
            this.jd.N(c);
            this.kd.N(c);
            var d = this.v().Qo()
              , f = d.x
              , g = this.v().F.viewport.ma();
            c = this.$b.za();
            g = (g.b - this.$b.Aa()) / 2;
            var e = this.kd.P(f - 3 * c * 1.1);
            e < .75 * f && (e /= .75 * f,
            c *= e,
            e = a * e / b,
            this.$b.N(e),
            this.jd.N(e),
            this.kd.N(e));
            switch (Ha.mode) {
            case 1:
            case 2:
            case 4:
                this.jd.P(f - 1.1 * c);
                this.jd.S(g);
                this.$b.P(f - 2.2 * c);
                this.$b.S(g);
                this.kd.P(f - 3 * c * 1.1);
                this.kd.S(g);
                break;
            case 3:
                this.jd.P(f - 1.1 * c),
                this.jd.S(0),
                this.$b.P(f - 2.2 * c),
                this.$b.S(0),
                this.kd.P(f - 3 * c * 1.1),
                this.kd.S(0),
                b = this.v().F.viewport.ma().j,
                a = d.x - b,
                a < 1.2 * c ? (b = this.$b,
                b.P(b.Ea - a),
                b = this.jd,
                b.P(b.Ea - a),
                b = this.kd,
                b.P(b.Ea - a)) : this.$b.Ea < b && (this.kd.P(this.$b.P(this.jd.Ea)),
                this.$b.S(1.1 * c),
                this.kd.S(2.2 * c))
            }
            2 == Ha.mode && (a = .5 * c,
            b = this.$b,
            b.P(b.Ea - a),
            b = this.jd,
            b.P(b.Ea - a),
            b = this.kd,
            b.P(b.Ea - a),
            this.$b.S(this.jd.S(this.kd.S(.1 * c))))
        },
        m: qc
    });
    Ha.g = ["76"];
    Ha.fe = function(a, b, c) {
        null == c && (c = 0);
        if (!(10 < Ha.mA++)) {
            if (.85 > (a.j - a.c) / (a.i - a.b)) {
                var d = (a.j - a.c) / .85
                  , f = a.c + (a.j - a.c)
                  , g = a.b + d;
                b.c = a.c;
                b.b = a.b;
                b.j = f;
                b.i = g;
                f = a.c + (a.j - a.c - (b.j - b.c)) / 2;
                g = b.j - b.c;
                b.c = f;
                b.j = f + g;
                f = a.b + (a.i - a.b - (b.i - b.b)) / 2;
                g = b.i - b.b;
                b.b = f;
                b.i = f + g;
                0 == c ? (Ha.mode = 1,
                d = a.i - a.b - d,
                f = d / (b.i - b.b),
                .3 > f && (g = 1,
                .2 <= f && (g = 1 + (f - .2) / .09999999999999998 * -1),
                d = b.b + d / 2 * g,
                f = b.i - b.b,
                b.b = d,
                b.i = d + f),
                b.b < .15 * (a.i - a.b) && (d = .15 * (a.i - a.b) - b.b,
                a.i - a.b - b.i >= d ? (c = b.b + d,
                d = b.i - b.b,
                b.b = c,
                b.i = c + d) : (a = new E(a.c,a.b,a.j,a.i),
                a.b = .15 * (a.i - a.b),
                Ha.fe(a, b, ++c)))) : Ha.mode = 2
            } else
                d = .85 * (a.i - a.b),
                f = a.c + d,
                g = a.b + (a.i - a.b),
                b.c = a.c,
                b.b = a.b,
                b.j = f,
                b.i = g,
                f = a.c + (a.j - a.c - (b.j - b.c)) / 2,
                g = b.j - b.c,
                b.c = f,
                b.j = f + g,
                f = a.b + (a.i - a.b - (b.i - b.b)) / 2,
                g = b.i - b.b,
                b.b = f,
                b.i = f + g,
                0 == c ? (Ha.mode = 3,
                d = a.j - a.c - d,
                f = d / (b.j - b.c),
                .4 > f && (g = 1,
                .2 <= f && (g = 1 + (f - .2) / .2 * -1),
                d = b.c + d / 2 * g,
                f = b.j - b.c,
                b.c = d,
                b.j = d + f),
                b.c < .2 * (a.j - a.c) && (d = .2 * (a.j - a.c) - b.c,
                a.j - a.c - b.j >= d ? (c = b.c + d,
                d = b.j - b.c,
                b.c = c,
                b.j = c + d) : (a = new E(a.c,a.b,a.j,a.i),
                a.c = .2 * (a.j - a.c),
                Ha.fe(a, b, ++c)))) : Ha.mode = 4;
            Ha.window = new E(a.c,a.b,a.j,a.i);
            Ha.zD = (a.j - a.c) / (a.i - a.b)
        }
    }
    ;
    vg.g = ["77"];
    pc.g = ["78"];
    pc.$ = [vg];
    pc.prototype = {
        remove: function(a) {
            if (!this.G.hasOwnProperty(a))
                return !1;
            delete this.G[a];
            return !0
        },
        keys: function() {
            var a = [], b;
            for (b in this.G)
                this.G.hasOwnProperty(b) && a.push(b | 0);
            return C.xd(a)
        },
        m: pc
    };
    t.g = ["79"];
    t.cH = function(a) {
        null == a && (a = t.kv());
        for (var b = [], c = 0; c < a.length; ) {
            var d = a[c];
            ++c;
            b.push(t.Hj(d))
        }
        return b
    }
    ;
    t.Hj = function(a) {
        if (t.ho.G.hasOwnProperty(a))
            return t.ho.G[a];
        var b = t.ku[a]
          , c = new V("{(?:language|audio|quality)}","");
        if (c.match(b)) {
            c = new V("{language}","");
            c.match(b) && (b = b.replace(c.r, D.Qa(H.Uz())));
            c = new V("{audio}","g");
            if (null == t.Qg)
                return null;
            c.match(b) && (b = b.replace(c.r, t.Qg.toLowerCase()));
            c = new V("{quality}","g");
            c.match(b) && (b = b.replace(c.r, D.Qa(t.rN).toLowerCase()))
        }
        t.ho.G[a] = "res" + b;
        return t.ho.G[a]
    }
    ;
    t.kv = function() {
        for (var a = [], b = 0; 104 > b; ) {
            var c = b++;
            a.push(c)
        }
        return a
    }
    ;
    t.Fj = function(a) {
        var b = new V("^(res)(/.*)","");
        b.match(a) && (a = b.replace(a, "$2"));
        if (null == t.By) {
            b = [];
            for (var c = 0, d = []; c < d.length; ) {
                var f = d[c];
                ++c;
                b.push(D.Qa(f))
            }
            t.By = b.join("|")
        }
        b = new V("([/_])(" + t.By + ")(/|(\\.\\S{3,4}$))","");
        b.match(a) && (a = b.replace(a, "$1{language}$3"));
        b = new V("([/_])(sd|hd)(/|(\\.\\S{3,4}$))","");
        b.match(a) && (a = b.replace(a, "$1{quality}$3"));
        if (null == t.fo) {
            b = [];
            c = 0;
            for (d = t.Jo(); c < d.length; )
                f = d[c],
                ++c,
                b.push(D.Qa(f).toLowerCase());
            t.fo = b.join("|")
        }
        "" != t.fo && (b = new V("(.*?)\\.(" + t.fo + ")$",""),
        b.match(a) && (a = b.replace(a, "$1.{audio}")),
        b = new V("((" + t.fo + ")\\/)",""),
        b.match(a) && (a = b.replace(a, "{audio}/")));
        return t.ku.indexOf(a)
    }
    ;
    t.getData = function(a) {
        return null == t.dg ? null : t.dg.G[a]
    }
    ;
    t.setData = function(a, b) {
        null == t.dg && (t.dg = new pc);
        var c = t.dg.G.hasOwnProperty(a);
        t.dg.G[a] = b;
        if (!c && null != t.Wk)
            for (b = t.Wk,
            c = 0; c < b.length; ) {
                var d = b[c];
                if (d.id == a) {
                    for (var f = 0, g = d.sj; f < g.length; ) {
                        var e = g[f];
                        ++f;
                        e(d.id)
                    }
                    d.sj = null;
                    b[c] = b[b.length - 1];
                    b.pop()
                } else
                    ++c
            }
    }
    ;
    t.Uo = function(a) {
        return null == t.dg ? !1 : null != t.dg.G[a]
    }
    ;
    t.dl = function(a) {
        var b = t.getData(a);
        if (null != b)
            try {
                b instanceof HTMLImageElement && (t.dg.G[a] = null,
                M.ib(b, HTMLImageElement).src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
            } catch (c) {}
        return t.dg.remove(a)
    }
    ;
    t.Ev = function(a) {
        return (new V("{audio}","")).match(t.ku[a])
    }
    ;
    t.gp = function() {
        return null != t.Qg
    }
    ;
    t.Ri = function(a, b) {
        if (null != t.Hj(a))
            if (t.Uo(a))
                b(a);
            else {
                null == t.Wk && (t.Wk = []);
                for (var c = 0, d = t.Wk; c < d.length; ) {
                    var f = d[c];
                    ++c;
                    if (f.id == a) {
                        f.sj.push(b);
                        return
                    }
                }
                t.Wk.push(new Vf(a,b))
            }
    }
    ;
    t.Yy = function(a) {
        if (a instanceof Kb) {
            if ("TextDecoder"in window)
                return a = new zg(a),
                (new TextDecoder("utf-8")).decode(a);
            a = Ka.Ww(a);
            return a.dA(0, a.length)
        }
        return D.Qa(a)
    }
    ;
    t.AN = function() {
        return []
    }
    ;
    t.Jo = function() {
        return [Ma.gn, Ma.Gm, Ma.dn]
    }
    ;
    t.BN = function() {
        return [78, 83, 57, 65, 92, 37, 38, 97, 73, 22, 45, 76]
    }
    ;
    t.CN = function() {
        return [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 44, 43, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 74, 75, 77, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103]
    }
    ;
    t.TM = function() {
        return [84, 75, 25, 89, 85]
    }
    ;
    t.SM = function() {
        return [30, 60, 1, 51, 26]
    }
    ;
    t.UM = function() {
        return [16, 77, 19, 35, 64, 34, 20, 32, 103, 102, 93, 96, 9, 54, 14, 5, 15, 62, 8, 101, 61, 29, 18, 69, 95, 10, 87, 43, 2, 39, 30, 84, 60, 75, 1, 25, 51, 89, 26, 85, 56, 68, 23, 50, 33, 47, 82, 31, 100, 4, 59, 21]
    }
    ;
    t.hN = function() {
        return [48, 17, 74, 40, 3, 55]
    }
    ;
    t.jN = function() {
        return [74, 40]
    }
    ;
    t.cN = function() {
        return [82, 31]
    }
    ;
    t.WM = function() {
        return [61, 29]
    }
    ;
    t.iN = function() {
        return [48, 17]
    }
    ;
    t.fN = function() {
        return [46, 36]
    }
    ;
    t.eN = function() {
        return [59, 21]
    }
    ;
    t.bN = function() {
        return [33, 47]
    }
    ;
    t.kN = function() {
        return [3, 55]
    }
    ;
    t.VM = function() {
        return [8, 101]
    }
    ;
    t.XM = function() {
        return [56, 68]
    }
    ;
    t.aN = function() {
        return [23, 50]
    }
    ;
    t.gN = function() {
        return [24, 81]
    }
    ;
    t.$M = function() {
        return [2, 39]
    }
    ;
    t.dN = function() {
        return [100, 4]
    }
    ;
    t.ZM = function() {
        return [95, 10]
    }
    ;
    t.YM = function() {
        return [18, 69]
    }
    ;
    Oa.g = ["80"];
    Oa.ie = function(a) {
        return Oa.wu[a]
    }
    ;
    Oa.xF = function() {
        function a(a, b, g, e) {
            var d = 0;
            (null != ea[b] ? c.fl(b) : c.G.hasOwnProperty(b)) ? (d = (null != ea[b] ? c.ad(b) : c.G[b]) + 1,
            null != ea[b] ? c.cc(b, d) : c.G[b] = d) : null != ea[b] ? c.cc(b, 0) : c.G[b] = 0;
            Oa.wu[a] = dc.jG(b + d, dc.oz(b, g, e));
            return Oa.wu[a]
        }
        var b = R.Wa
          , c = new cb;
        b.ec(5);
        b.ec(62);
        b.ec(15);
        b.$c([56, 68]);
        b.$c([82, 31]);
        b.$c([8, 101]);
        b.$c([23, 50]);
        b.$c([84, 75, 25, 89, 85].concat([30, 60, 1, 51, 26]));
        a(0, "anim_bubble_pop_0_", 1, 45);
        a(1, "anim_bubble_pop_1_", 1, 45);
        a(2, "anim_bubble_pop_2_", 1, 45);
        a(3, "anim_bubble_pop_3_", 1, 45);
        a(4, "anim_bubble_pop_4_", 1, 45);
        b.$c([18, 69]);
        a(6, "anim_bubble_burst_bomb_", 1, 45);
        b.$c([95, 10]);
        a(5, "anim_bubble_burst_fireball_", 1, 45);
        b.$c([61, 29]);
        a(8, "anim_bomb_", 2, 31);
        b.$c([59, 21]);
        a(9, "squirrel_", 18, 47).frames.push(new we("squirrel_0001",.016666666666666666));
        a(10, "squirrel_", 1, 18);
        b.$c([33, 47]);
        a(11, "anim_pole_flames_", 1, 16);
        a(12, "anim_bubble_firetail_", 1, 16);
        b.$c([2, 39]);
        a(7, "anim_bubble_paint_", 1, 25);
        b.$c([100, 4]);
        a(14, "anim_combo_pergament_roll_", 1, 18);
        a(13, "anim_combo_pergament_roll_", 18, 31);
        b.va(16, 20);
        b.va(77, 20);
        b.va(19, 20);
        b.va(35, 20);
        b.va(64, 20);
        b.va(34, 20);
        b.va(93, 102);
        b.va(9, 96);
        b.va(14, 54);
        b.va(103, 32)
    }
    ;
    Oc.g = ["81"];
    Oc.H = K;
    Oc.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            this.v().subscribe(this);
            this.uc = new Sb(this.v().F);
            this.uc.code = this.v().qb.Nf;
            this.uc.M |= 16;
            this.uc.M |= 32;
            this.uc.scale = .75;
            var a = new nb(this.uc);
            this.Ow = a.add(mb);
            this.add(null, a)
        },
        ya: function() {
            this.uc.Nu();
            this.Ow = this.uc = null
        },
        ra: function() {
            this.uc.fb.pa.x = this.Qe().ja.p.x + -3.2;
            this.uc.fb.pa.y = this.Qe().ja.p.y + .72;
            var a = this.uc.scale;
            .75 > a && (a += .6 * (.75 - a),
            .75 < a && (a = .75));
            this.uc.scale = a
        },
        Ua: function(a) {
            switch (a.type) {
            case 15:
                this.Ow.D.sa(0);
                break;
            case 16:
                this.uc.tj(this.v().qb.Nf);
                this.Ow.D.sa(1);
                this.uc.scale = .1;
                break;
            case 18:
            case 29:
                this.uc.tj(this.v().qb.Nf)
            }
        },
        m: Oc
    });
    var Va = {
        pb: !0,
        ob: ["Regular", "SplitStart", "SplitEnd"],
        jj: ["Regular", 0]
    };
    Va.jj.toString = h;
    Va.jj.l = Va;
    Va.Un = ["SplitStart", 1];
    Va.Un.toString = h;
    Va.Un.l = Va;
    Va.Tn = ["SplitEnd", 2];
    Va.Tn.toString = h;
    Va.Tn.l = Va;
    Va.Gb = [Va.jj, Va.Un, Va.Tn];
    Pa.g = ["82"];
    Pa.FH = function() {
        Pa.dm = new kc(12,2);
        Pa.dm.Kh(0, [-1, 0, 1, 0, -1, -1, 0, -1, -1, 1, 0, 1]);
        Pa.dm.Kh(1, [-1, 0, 1, 0, 0, -1, 1, -1, 0, 1, 1, 1])
    }
    ;
    Pa.prototype = {
        Yz: function() {
            0 == this.ul && this.rC();
            var a = this.Za.dH(this.ul, this.FI);
            this.Za.Kh(this.ul, this.XA);
            this.ul--;
            return a
        },
        zG: function() {
            for (var a = this.Za.Fa, b = 0; b < a; ) {
                var c = b++;
                this.Za.Kh(c, this.nz())
            }
            this.ul = a - 1;
            this.tx(a)
        },
        rC: function() {
            switch (this.Dl[1]) {
            case 0:
                if (.5 > this.Bd.$e()) {
                    var a = Pa.hy[0] - .4999;
                    this.RA = (a + (Pa.hy[1] + .4999 - a) * this.Bd.$e() + 16384.5 | 0) - 16384;
                    this.Dl = Va.Un;
                    this.rC();
                    return
                }
                this.gK();
                break;
            case 1:
                this.fK();
                this.Dl = Va.Tn;
                break;
            case 2:
                this.eK(),
                this.Dl = Va.jj
            }
            a = this.Za.Fa;
            this.ul = a - 1;
            this.tx(a - 1)
        },
        gK: function() {
            var a = this.Za.Fa;
            this.Za.Fu(0, a - 1);
            for (var b = 0, c = a - 1; b < c; ) {
                var d = b++;
                this.Za.Kh(d, this.nz())
            }
            this.tx(a - 1)
        },
        nz: function() {
            var a = this.Za.Z
              , b = Pa.iy[0]
              , c = Pa.iy[1]
              , d = b - .4999;
            d = (d + (c + .4999 - d) * this.Bd.$e() + 16384.5 | 0) - 16384;
            var f = a >> 1;
            d = f < d ? f : d;
            b -= .4999;
            b = (b + (c + .4999 - b) * this.Bd.$e() + 16384.5 | 0) - 16384;
            c = a >> 1;
            b = c < b ? c : b;
            if (d + b == a)
                for (; ; ) {
                    --d;
                    if (3 == a - d - b)
                        break;
                    --b;
                    if (3 == a - d - b)
                        break
                }
            c = this.Dw;
            for (f = 0; f < a; ) {
                var g = f++;
                c[g] = 0
            }
            for (a -= b; d < a; )
                b = d++,
                c[b] = 1;
            this.Xu(c);
            return c
        },
        fK: function() {
            var a = this.Za.Fa;
            this.Za.Fu(0, a - 1);
            var b = 1
              , c = this.RA
              , d = 1;
            for (--a; 0 < a--; ) {
                var f = this.Oo()
                  , g = this.Oo();
                f = this.mz(f, g, b);
                this.Xu(f);
                ++d;
                2 == d && (b < c && ++b,
                d = 0);
                this.Za.Kh(a, f)
            }
        },
        eK: function() {
            var a = this.Za.Fa;
            this.Za.Fu(0, a - 1);
            var b = this.RA
              , c = 1;
            for (--a; 0 < a--; ) {
                var d = this.Oo()
                  , f = this.Oo();
                d = this.mz(d, f, b);
                this.Xu(d);
                ++c;
                2 == c && (0 < b && --b,
                c = 0);
                this.Za.Kh(a, d)
            }
        },
        mz: function(a, b, c) {
            for (var d = this.Za.Z, f = this.CH(this.Dw), g = a, e = d - b; g < e; ) {
                var k = g++;
                f[k] = 1
            }
            if (0 < c)
                for (g = d >> 1,
                e = d >> 1,
                k = 0; k < c; )
                    0 == (k++ & 1) ? (2 <= g - a && (f[g] = 0),
                    ++e) : (2 < d - b - e && (f[e] = 0),
                    --g);
            return f
        },
        tx: function(a) {
            for (var b = this.Za.Z; 0 < --a; ) {
                for (var c = 0; c < b; ) {
                    var d = c++
                      , f = this.Za
                      , g = f.a[a * f.Z + d]
                      , e = 0 != (g & 64);
                    g &= 7;
                    if (0 != g) {
                        this.pp.clear();
                        var k = !0;
                        f = this.Dw;
                        for (var u = 0, h = this.PG(d, a, f); u < h; ) {
                            var l = u++;
                            if (g == f[l]) {
                                k = !1;
                                break
                            }
                            var q = this.pp;
                            q.f == q.B && q.T();
                            l = f[l];
                            q.a[q.f++] = l
                        }
                        if (k) {
                            g = -1;
                            if (0 < this.pp.f) {
                                g = this.pp.a[0];
                                if (e) {
                                    f = this.Za;
                                    f.a[a * f.Z + d] = g | 64;
                                    continue
                                }
                                if (this.Dl != Va.jj) {
                                    f = this.Za;
                                    f.a[a * f.Z + d] = g;
                                    continue
                                }
                            }
                            e = this.Za;
                            e.a[a * e.Z + d] = 0;
                            if (-1 != g)
                                for (e = 0,
                                k = this.OG(d, a, f); e < k; )
                                    if (u = f[e++],
                                    h = f[e++],
                                    u = this.WG(u, h),
                                    0 != u)
                                        for (h = this.Za,
                                        h.a[a * h.Z + d] = g,
                                        h = this.iB,
                                        q = 0; q < u; )
                                            l = this.Za,
                                            l.a[h[q + 1] * l.Z + h[q]] = 0,
                                            q += 2
                        }
                    }
                }
                break
            }
        },
        WG: function(a, b) {
            var c = this.Za
              , d = Pa.dm
              , f = this.Za.Z - 1
              , g = this.Za.Fa - 1
              , e = this.AI
              , k = 0
              , u = this.iB
              , h = this.ye;
            h[0] = a;
            h[1] = b;
            a = 2;
            for (e.zx(!1); 0 < a; ) {
                b = h[--a];
                var l = h[--a];
                if (!e.a[b * e.Z + l]) {
                    u[k++] = l;
                    u[k++] = b;
                    if (0 == b)
                        return 0;
                    e.a[b * e.Z + l] = !0;
                    for (var q = 0, p = b & 1; 12 > q; ) {
                        var m = l + d.a[p * d.Z + q++];
                        if (0 > m || m > f)
                            ++q;
                        else {
                            var r = b + d.a[p * d.Z + q++];
                            !(0 > r || r > g) && 0 < c.a[r * c.Z + m] && (h[a++] = m,
                            h[a++] = r)
                        }
                    }
                }
            }
            return k
        },
        PG: function(a, b, c) {
            for (var d = this.Za, f = Pa.dm, g = d.Z - 1, e = d.Fa - 1, k = 0, u = 0; 12 > u; ) {
                var h = a + f.a[(b & 1) * f.Z + u++];
                if (0 > h || h > g)
                    ++u;
                else {
                    var l = b + f.a[(b & 1) * f.Z + u++];
                    0 > l || l > e || (h = d.a[l * d.Z + h],
                    0 != h && (c[k++] = h & 7))
                }
            }
            return k
        },
        OG: function(a, b, c) {
            for (var d = this.Za, f = Pa.dm, g = d.Z - 1, e = d.Fa - 1, k = 0, u = 0; 12 > u; ) {
                var h = a + f.a[(b & 1) * f.Z + u++];
                if (0 > h || h > g)
                    ++u;
                else {
                    var l = b + f.a[(b & 1) * f.Z + u++];
                    !(0 > l || l > e) && 0 < d.a[l * d.Z + h] && (c[k++] = h,
                    c[k++] = l)
                }
            }
            return k
        },
        CH: function(a) {
            for (var b = 0, c = this.Za.Z; b < c; ) {
                var d = b++;
                a[d] = 0
            }
            return a
        },
        Xu: function(a) {
            for (var b = 0, c = this.Za.Z; b < c; ) {
                var d = b++;
                1 == a[d] && (a[d] = this.jI.next())
            }
        },
        Oo: function() {
            var a = Pa.jy[0] - .4999;
            return (a + (Pa.jy[1] + .4999 - a) * this.Bd.$e() + 16384.5 | 0) - 16384
        },
        m: Pa
    };
    ag.g = ["83"];
    ag.prototype = {
        next: function() {
            if (this.uI) {
                if (this.rw >= this.$A && 7 > this.sw)
                    return this.$A = this.JB(),
                    this.rw = 0,
                    this.sw++,
                    this.we.next() | 64;
                this.rw++
            }
            return this.we.next()
        },
        JB: function(a) {
            null == a && (a = !1);
            return this.lq(a, Wa.JD)
        },
        lq: function(a, b) {
            null == a && (a = !1);
            if (a) {
                var c = 0;
                a = 1
            } else
                c = 2,
                a = 3;
            c = b[c] - .4999;
            return (c + (b[a] + .4999 - c) * this.Bd.$e() + 16384.5 | 0) - 16384
        },
        m: ag
    };
    lb.g = ["84"];
    lb.format = function(a) {
        var b = lb.LA.G[a];
        if (null != b)
            return b;
        lb.LA.G[a] = yd.nl(a);
        return lb.format(a)
    }
    ;
    Ld.g = ["85"];
    Ld.H = K;
    Ld.prototype = x(K.prototype, {
        Pa: function() {
            this.hd = this.v().Fb.hc(4);
            this.qh = Array(2);
            this.qh[0] = 0;
            this.qh[1] = 0;
            this.ld = Array(2);
            var a = new I(this.hd,31,"pole_left");
            a.Dg(a.za() / 2);
            a.Ak(a.za() / 2);
            this.ld[0] = a;
            a = new I(this.hd,31,"pole_right");
            a.Dg(a.za() / 2);
            a.Ak(a.za() / 2);
            this.ld[1] = a;
            this.jh = new ma(null,this.hd);
            this.jh.Hd().add();
            this.vb = Array(2);
            a = new I(this.jh,47,"anim_pole_flames_0001");
            a.Dg(a.za() / 2);
            a.ea();
            a.sa(0);
            a.Hd().add();
            this.vb[0] = a;
            a = new I(this.jh,47,"anim_pole_flames_0001");
            a.Dg(a.za() / 2);
            a.ea();
            a.sa(0);
            a.Hd().add();
            this.vb[1] = a;
            this.jh.I(!1);
            this.Jf = Array(2);
            this.Jf[0] = new I(this.hd,31,"stone_left");
            this.Jf[1] = new I(this.hd,31,"stone_right");
            this.v().subscribe(this);
            this.resize()
        },
        ya: function() {
            for (var a = 0, b = this.ld; a < b.length; ) {
                var c = b[a];
                ++a;
                c.s()
            }
            a = 0;
            for (b = this.Jf; a < b.length; )
                c = b[a],
                ++a,
                c.s();
            a = 0;
            for (b = this.vb; a < b.length; )
                c = b[a],
                ++a,
                c.s();
            this.vb = this.Jf = this.ld = null;
            this.jh.s();
            this.jh = null
        },
        Ua: function(a) {
            switch (a.type) {
            case 5:
                this.resize();
                break;
            case 15:
                8 == this.v().F.de.a[0].code && (this.Ep = 3);
                break;
            case 20:
                a = this.qh;
                var b = .2 * this.v().F.viewport.zoom;
                a[0] -= b;
                break;
            case 21:
                a = this.qh;
                b = .2 * this.v().F.viewport.zoom;
                a[1] += b;
                break;
            case 23:
                this.Ep = 1,
                this.re = 0,
                this.jh.I(!0),
                this.vb[0].Pc().play(Oa.ie(11)),
                this.vb[1].Pc().play(Oa.ie(11))
            }
        },
        ra: function(a) {
            if (this.Ol) {
                this.ld[0].P(this.J.c + this.qh[0]);
                this.ld[1].P(this.J.j + this.qh[1]);
                var b = this.qh;
                b[0] *= .5;
                b = this.qh;
                b[1] *= .5
            }
            switch (this.Ep) {
            case 1:
                this.re += .1;
                1 <= this.re && (this.re = 1,
                this.Ep = 2);
                this.vb[0].sa(this.re);
                this.vb[1].sa(this.re);
                break;
            case 3:
                this.re -= .1,
                0 >= this.re && (this.Ep = this.re = 0,
                this.jh.I(!1)),
                this.vb[0].sa(this.re),
                this.vb[1].sa(this.re)
            }
            this.vb[0].xc(a);
            this.vb[1].xc(a)
        },
        resize: function() {
            var a = this.v().F.viewport.ma();
            this.J = new E(a.c,a.b,a.j,a.i);
            var b = this.v().fA()
              , c = this.v().F.viewport.zoom;
            a = 12 * c;
            for (var d = 0, f = this.vb; d < f.length; ) {
                var g = f[d];
                ++d;
                g.N(1);
                g.qK();
                g.pK();
                g.Ak(g.za() / 2);
                g.Dg(g.za() / 2);
                g.N(a / g.Aa())
            }
            a = 2 * c;
            c *= 2;
            if (1 == Ha.mode) {
                this.Ol = !1;
                this.vb[0].P(this.J.c + c);
                this.vb[0].S(this.J.i - this.vb[0].Aa());
                this.vb[1].P(this.J.j - c);
                this.vb[1].S(this.J.i - this.vb[1].Aa());
                b = 0;
                for (d = this.Jf; b < d.length; )
                    f = d[b],
                    ++b,
                    f.I(!0),
                    f.N(1),
                    f.ea(),
                    f.Oa(),
                    f.N(a / f.Aa()),
                    f.S(this.J.i - a / 4);
                this.Jf[0].P(this.J.c + c);
                this.Jf[1].P(this.J.j - c)
            } else {
                this.Ol = !0;
                c = 0;
                for (d = this.ld; c < d.length; )
                    f = d[c],
                    ++c,
                    f.N(1),
                    f.N(.95 * (b.i - b.b) / f.Aa()),
                    f.S(b.b);
                this.vb[0].P(this.J.c);
                this.vb[1].P(this.J.j);
                this.vb[0].S(this.ld[0].Aa() - this.vb[0].Aa());
                this.vb[1].S(this.ld[1].Aa() - this.vb[1].Aa());
                b = 0;
                for (c = this.Jf; b < c.length; )
                    d = c[b],
                    ++b,
                    d.I(!0),
                    d.N(1),
                    d.ea(),
                    d.Oa(),
                    d.N(a / d.Aa()),
                    d.S(this.ld[0].Ha + .98 * this.ld[0].Aa());
                this.Jf[0].P(this.J.c);
                this.Jf[1].P(this.J.j)
            }
            this.ld[0].I(this.Ol);
            this.ld[1].I(this.Ol);
            this.ld[0].P(this.J.c);
            this.ld[1].P(this.J.j)
        },
        m: Ld
    });
    $f.g = ["86"];
    $f.prototype = {
        s: function() {
            for (var a = 0, b = this.Il; a < b.length; ) {
                var c = b[a];
                ++a;
                c.s()
            }
            this.Il = null;
            this.root.s()
        },
        hc: function(a) {
            return this.Il[a]
        },
        m: $f
    };
    Kd.g = ["87"];
    Kd.H = K;
    Kd.prototype = x(K.prototype, {
        Pa: function() {
            this.v().subscribe(this);
            var a = this.v().Fb.hc(0);
            this.yd = new I(a,5);
            this.Nd = new I(a,15);
            this.vg = new I(this.v().Fb.hc(5),62);
            this.resize()
        },
        ra: function() {},
        ya: function() {
            this.yd.s();
            this.yd = null;
            this.Nd.s();
            this.Nd = null;
            this.vg.s();
            this.vg = null
        },
        Ua: function(a) {
            5 == a.type && this.resize()
        },
        resize: function() {
            var a = this.v().Qo()
              , b = this.v().fA()
              , c = this.v().F.viewport.ma();
            this.yd.N(1);
            var d = this.yd.za();
            var f = this.yd.Aa();
            var g = (b.j - b.c) / d
              , e = (c.i - c.b) / f;
            g < e ? (f = c.i - c.b,
            d = -(e * d - (b.j - b.c)) / 2,
            f = c.i - f,
            this.yd.N(e),
            1.5 < a.y / a.x && 1 == Ha.mode && this.Bw && (.25 > Math.random() ? (d -= .75 * d,
            this.Bw = !1) : .75 < Math.random() && (d += .75 * d,
            this.Bw = !1))) : (d = 0,
            f = c.i - c.b - g * f,
            this.yd.N(g));
            this.yd.P(d);
            this.yd.S(f);
            switch (Ha.mode) {
            case 1:
                this.jo(c.c, c.b, c.j - c.c);
                this.Jy(c.c, c.i, c.j - c.c);
                this.Nd.I(Math.round(c.i) < a.y);
                break;
            case 2:
                this.jo(0, c.b, a.x);
                this.Jy(0, c.i, a.x);
                this.Nd.I(Math.round(c.i) < a.y);
                break;
            case 3:
                this.jo(c.c, 0, c.j - c.c);
                this.Nd.I(!1);
                break;
            case 4:
                this.jo(b.c, b.b, b.j - b.c),
                this.Nd.I(!1)
            }
        },
        jo: function(a, b, c) {
            this.vg.N(1);
            this.vg.P(a);
            this.vg.S(b);
            this.vg.N(c / this.vg.za());
            a = this.vg;
            a.S(a.Ha - .9 * this.vg.Aa())
        },
        Jy: function(a, b, c) {
            this.Nd.N(1);
            this.Nd.P(a);
            this.Nd.S(b);
            this.Nd.N(c / this.Nd.za());
            a = this.Nd;
            a.S(a.Ha - 60 * this.Nd.Na)
        },
        m: Kd
    });
    ld.g = ["88"];
    ld.H = K;
    ld.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            this.v().subscribe(this);
            this.v().Bg = 0;
            this.v().fc = 0;
            this.v().so = -1
        },
        Ua: function(a) {
            switch (a.type) {
            case 17:
                if (8 == this.v().so)
                    break;
                this.v().fc = 0;
                this.v().Va(32);
                break;
            case 22:
                a = this.v().dh;
                0 < a.fg.f && this.pH(a.fg.f);
                0 < a.jf.f && this.oH(a.jf.f);
                0 < a.ce.f && this.lH(a.ce.f);
                null == a.Xf || a.Xi || 0 != a.Ke.f || (2 <= this.v().fc && this.v().Va(32),
                1 == this.v().fc && (this.Sv = !0),
                this.v().fc = 0);
                break;
            case 27:
                this.nH();
                break;
            case 30:
                this.mH(this.v().np)
            }
        },
        Lo: function() {
            var a = Wa.GD;
            return 100 + (this.v().fc / a[0] | 0) * a[1]
        },
        Zz: function() {
            return 2 * this.Lo() | 0
        },
        pH: function(a) {
            this.pA();
            var b = this.Lo();
            this.v().Gd = b * a;
            this.v().Bg += this.v().Gd;
            this.v().Va(33)
        },
        lH: function(a) {
            this.pA();
            var b = this.Lo();
            this.v().Gd = b * a;
            this.v().Bg += this.v().Gd;
            this.v().Va(34)
        },
        oH: function(a) {
            var b = this.Zz();
            this.v().Gd = b * a;
            this.v().Bg += this.v().Gd;
            this.v().Va(35)
        },
        nH: function() {
            var a = 10 * this.Lo() | 0;
            this.v().Gd = a;
            this.v().Bg += this.v().Gd;
            this.v().Va(36)
        },
        mH: function(a) {
            a = Wa.HD[a];
            this.v().Gd = a;
            this.v().Bg += a;
            this.v().Va(37)
        },
        pA: function() {
            99 > this.v().fc && (this.v().fc++,
            this.Sv ? this.Sv = !1 : this.v().Va(31))
        },
        m: ld
    });
    Qe.g = ["89"];
    Qe.prototype = {
        add: function(a, b) {
            this.a.od(this.a.f + b);
            for (var c = 0; c < b; ) {
                c++;
                var d = this.a;
                d.a[d.f++] = a
            }
            this.zi = this.a.f - 1
        },
        next: function() {
            if (1 > this.zi)
                return this.zi = this.a.f - 1,
                this.Al = this.a.a[0];
            var a = Math.floor(this.Bd.$e() * this.zi);
            this.Al = this.a.a[a];
            this.a.a[a] = this.a.a[this.zi];
            this.a.a[this.zi] = this.Al;
            this.zi--;
            return this.Al
        },
        Bk: function() {
            for (var a = [], b = 0, c = this.a.f; b < c; ) {
                var d = b++;
                a[d] = this.Bd.$e()
            }
            this.a.Bk(a)
        },
        m: Qe
    };
    Zf.g = ["90"];
    Zf.prototype = {
        reset: function() {
            this.Xf = null;
            this.Xi = !1;
            this.Ke.clear();
            this.fg.clear();
            this.jf.clear();
            this.ce.clear();
            this.$k.clear();
            this.em.clear();
            this.al.clear()
        },
        s: function() {
            this.Xf = null;
            this.Ke.s();
            this.fg.s();
            this.jf.s();
            this.ce.s();
            this.$k.s();
            this.em.s();
            this.al.s()
        },
        m: Zf
    };
    Yf.g = ["91"];
    Yf.prototype = {
        ez: function() {
            this.Qb.reset()
        },
        s: function() {
            this.Sa = null;
            this.Qb.s();
            this.Qb = null;
            this.Yj.s();
            this.Yj = null;
            this.mg.s();
            this.mg = null
        },
        TI: function(a, b) {
            var c = a.code;
            this.Qb.Xf = a;
            this.Qb.Xi = 16 == c;
            if (16 == c)
                return this.eL(a, b),
                this.Qb;
            32 == c ? this.dL(a) : this.UI(a);
            this.eD();
            return this.Qb
        },
        eD: function() {
            var a = this.Sa.bd;
            this.mg.clear();
            a.clearMarks();
            for (var b = a.iterator(); b.ga(); ) {
                var c = b.next();
                c.Ab.Db = 0 == c.code || 0 < (c.M & 64)
            }
            for (b = a.Jb; null != b; ) {
                if (!b.Db) {
                    c = this.Yj;
                    var d = [c.a[--c.f]];
                    d[0].clear();
                    a.sz(!1, b, function(a) {
                        return function(b) {
                            b = b.oa;
                            a[0].f == a[0].B && a[0].T();
                            a[0].a[a[0].f++] = b;
                            return !0
                        }
                    }(d));
                    c = this.mg;
                    c.f == c.B && c.T();
                    d = d[0];
                    c.a[c.f++] = d
                }
                b = b.next
            }
            if (this.mg.vf())
                return this.Qb;
            for (b = this.mg.iterator(); b.ga(); ) {
                c = b.next();
                a.clearMarks();
                for (d = !0; d; ) {
                    for (var f = c.iterator(); f.ga(); ) {
                        var g = f.next();
                        if (g.pd == g.F.Lf) {
                            d = !1;
                            break
                        }
                    }
                    break
                }
                d || (b.remove(),
                d = this.Yj,
                d.f == d.B && d.T(),
                d.a[d.f++] = c)
            }
            if (this.mg.vf())
                return this.Qb;
            a = 0;
            for (b = this.mg.iterator(); b.ga(); ) {
                c = b.next();
                d = this.Qb.em;
                d.f == d.B && d.T();
                d = d.a[d.f++] = 0;
                for (f = c.iterator(); f.ga(); ) {
                    g = f.next();
                    this.Qb.em.a[a] = ++d;
                    var e = this.Qb.jf;
                    e.f == e.B && e.T();
                    e.a[e.f++] = g;
                    e = this.Qb.Ke;
                    e.f == e.B && e.T();
                    e.a[e.f++] = g;
                    g.M |= 64
                }
                ++a;
                d = this.Yj;
                d.f == d.B && d.T();
                d.a[d.f++] = c
            }
            this.Yu(this.Qb.jf);
            return this.Qb
        },
        UI: function(a) {
            var b = new Q;
            this.DG(a, b);
            this.xC(b);
            if (!(3 > b.f))
                for (this.Yu(b),
                a = b.iterator(); a.ga(); ) {
                    b = a.next();
                    var c = this.Qb.fg;
                    c.f == c.B && c.T();
                    c.a[c.f++] = b;
                    c = this.Qb.Ke;
                    c.f == c.B && c.T();
                    c.a[c.f++] = b;
                    b.M |= 64
                }
        },
        dL: function(a) {
            var b = new Q;
            this.Iz(a, 10, b);
            if (!b.vf())
                for (this.Yu(b),
                a = b.iterator(); a.ga(); )
                    if (b = a.next(),
                    !(0 < (b.M & 64))) {
                        var c = this.Qb.ce;
                        c.f == c.B && c.T();
                        c.a[c.f++] = b;
                        c = this.Qb.Ke;
                        c.f == c.B && c.T();
                        c.a[c.f++] = b;
                        b.M |= 64
                    }
        },
        eL: function(a, b) {
            var c = new Q;
            this.Iz(a, 5, c);
            for (c = c.iterator(); c.ga(); ) {
                var d = c.next();
                if (!((d.code & 7) == (b & 7) && d != a || 0 < (d.M & 64))) {
                    var f = this.Qb.$k;
                    f.f == f.B && f.T();
                    f.a[f.f++] = d
                }
            }
        },
        DG: function(a, b) {
            b.clear();
            var c = this.Sa.bd;
            c.clearMarks();
            c.RF();
            c.sz(!0, a.Ab, function(a, c) {
                if (c)
                    return (a.oa.code & 7) == (a.parent.oa.code & 7);
                0 >= (a.oa.M & 64) && (a = a.oa,
                b.f == b.B && b.T(),
                b.a[b.f++] = a);
                return !0
            });
            return b
        },
        Iz: function(a, b, c) {
            c.clear();
            var d = this.Sa.bd;
            d.clearMarks();
            d.uz(b, !1, a.Ab, function(a) {
                a = a.oa;
                c.f == c.B && c.T();
                c.a[c.f++] = a;
                return !0
            });
            this.xC(c);
            return c
        },
        xC: function(a) {
            for (a = a.iterator(); a.ga(); ) {
                var b = a.next()
                  , c = this.Sa.viewport;
                b = b.fb;
                c.ej(b.pa.y + b.r) > c.J.b || a.remove()
            }
        },
        Yu: function(a) {
            for (a = a.iterator(); a.ga(); ) {
                var b = a.next();
                if (0 != (b.code & 64)) {
                    var c = this.Qb.al;
                    c.f == c.B && c.T();
                    c.a[c.f++] = b
                }
            }
        },
        m: Yf
    };
    kd.g = ["92"];
    kd.H = K;
    kd.prototype = x(K.prototype, {
        Pa: function() {
            K.prototype.Pa.call(this);
            this.v().subscribe(this)
        },
        Ua: function(a) {
            switch (a.type) {
            case 6:
                this.play(r.FE);
                break;
            case 7:
                this.play(r.EE);
                break;
            case 10:
            case 11:
                this.stop(r.nn);
                this.stop(r.ty);
                this.stop(r.on);
                this.v().Bm && this.play(r.LE);
                (this.v().rl || this.v().lu) && this.play(r.KE);
                break;
            case 14:
                this.play(r.on);
                break;
            case 15:
                8 == this.v().F.de.a[0].code ? (this.play(r.JE),
                this.play(r.IE),
                this.stop(r.nn)) : this.play(r.mE);
                break;
            case 17:
                this.play(r.lE);
                break;
            case 18:
                this.play(r.iE);
                break;
            case 19:
                this.play(r.jE);
                break;
            case 20:
            case 21:
                this.play(r.kE);
                break;
            case 22:
                a = this.v().dh;
                0 < a.fg.f && this.play(r.fE);
                0 < a.ce.f && this.play(r.dE);
                a.Xi && this.play(r.QE);
                break;
            case 23:
                this.play(r.ty);
                this.play(r.UE);
                this.play(r.nn);
                break;
            case 26:
                this.stop(r.on);
                this.play(r.sE);
                10 >= this.v().time && this.play(r.on, !1, !1, 10 - this.v().time);
                break;
            case 27:
                this.play(r.gE);
                break;
            case 28:
                this.play(r.hE);
                break;
            case 30:
                switch (this.v().np) {
                case 0:
                    this.play(r.RE);
                    break;
                case 1:
                    this.play(r.SE);
                    break;
                case 2:
                    this.play(r.TE)
                }
                break;
            case 31:
                this.zw++;
                1 < this.v().fc && this.play(r.tE);
                break;
            case 32:
                2 <= this.zw && (this.play(r.uE),
                this.stop(r.nn));
                this.zw = 0;
                break;
            case 33:
                a = this.v().fc;
                switch (10 > a ? a : 10) {
                case 1:
                    a = r.vE;
                    break;
                case 2:
                    a = r.wE;
                    break;
                case 3:
                    a = r.xE;
                    break;
                case 4:
                    a = r.yE;
                    break;
                case 5:
                    a = r.zE;
                    break;
                case 6:
                    a = r.AE;
                    break;
                case 7:
                    a = r.BE;
                    break;
                case 8:
                    a = r.CE;
                    break;
                case 9:
                    a = r.DE;
                    break;
                case 10:
                    a = r.ry;
                    break;
                default:
                    a = r.ry
                }
                this.play(a)
            }
        },
        play: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            R.audio.play(a, b, c, d)
        },
        stop: function(a) {
            R.audio.stop(a)
        },
        m: kd
    });
    Jd.g = ["93"];
    Jd.H = K;
    Jd.prototype = x(K.prototype, {
        ya: function() {
            this.D.s();
            this.D = null
        },
        Pa: function() {
            this.D = new I(this.v().Fb.hc(1),21,"squirrel_0001");
            this.D.ea();
            this.D.Oa();
            this.D.Pc().wm(0);
            this.v().subscribe(this)
        },
        Ua: function(a) {
            K.prototype.Ua.call(this, a);
            switch (a.type) {
            case 15:
                this.D.Pc().play(Oa.ie(10));
                break;
            case 30:
                this.D.Pc().play(Oa.ie(9))
            }
        },
        ra: function(a) {
            K.prototype.ra.call(this, a);
            var b = this.Qe()
              , c = b.tg
              , d = b.ja
              , f = c.p
              , g = d.p;
            f.x = g.x;
            f.y = g.y;
            c = c.d;
            d = d.d;
            c.x = d.x;
            c.y = d.y;
            c = b.tg;
            b = 2 * this.v().F.viewport.zoom / 106 * 1.1;
            d = c.p.x - 5.6;
            c = c.p.y - 1;
            d = this.Qe().viewport.uL(d);
            c = this.Qe().viewport.ej(c);
            this.D.P(d);
            this.D.S(c);
            this.D.N(b);
            this.D.xc(a)
        },
        m: Jd
    });
    var W = {
        pb: !0,
        ob: "Ready Go Fireball TimeUp GameOver Crazy Wow Fabulous".split(" "),
        kn: ["Ready", 0]
    };
    W.kn.toString = h;
    W.kn.l = W;
    W.Vm = ["Go", 1];
    W.Vm.toString = h;
    W.Vm.l = W;
    W.Tm = ["Fireball", 2];
    W.Tm.toString = h;
    W.Tm.l = W;
    W.Wn = ["TimeUp", 3];
    W.Wn.toString = h;
    W.Wn.l = W;
    W.Um = ["GameOver", 4];
    W.Um.toString = h;
    W.Um.l = W;
    W.Mm = ["Crazy", 5];
    W.Mm.toString = h;
    W.Mm.l = W;
    W.co = ["Wow", 6];
    W.co.toString = h;
    W.co.l = W;
    W.Sm = ["Fabulous", 7];
    W.Sm.toString = h;
    W.Sm.l = W;
    W.Gb = [W.kn, W.Vm, W.Tm, W.Wn, W.Um, W.Mm, W.co, W.Sm];
    var za = {
        pb: !0,
        ob: ["TypeAnnouncer", "TypePoints", "TypeReward", "TypeExtraTime"],
        nj: function(a) {
            a = ["TypeAnnouncer", 0, a];
            a.l = za;
            a.toString = h;
            return a
        },
        Zh: ["TypePoints", 1]
    };
    za.Zh.toString = h;
    za.Zh.l = za;
    za.Yn = ["TypeReward", 2];
    za.Yn.toString = h;
    za.Yn.l = za;
    za.Xn = ["TypeExtraTime", 3];
    za.Xn.toString = h;
    za.Xn.l = za;
    za.Gb = [za.Zh, za.Yn, za.Xn];
    Zb.g = ["94"];
    Zb.H = Qb;
    Zb.prototype = x(Qb.prototype, {
        wD: function(a) {
            this.U.I(!0);
            this.U.ia(a);
            this.U.yb(this.Wl, 0, 0)
        },
        ge: function(a, b) {
            var c = this.Xv;
            c.kg = a;
            c.elapsedTime = 0;
            c.oc = c.kg;
            this.Dp = b
        },
        Em: function(a, b, c, d) {
            this.scale = b;
            this.add(null, new Nc(a,c,d,0))
        },
        cr: function(a, b, c, d) {
            this.alpha = b;
            this.add(null, new Nc(a,c,d,1))
        },
        BL: function(a, b, c, d) {
            this.rotation = b;
            this.add(null, new Nc(a,c,d,2))
        },
        Pa: function() {
            var a = this.v().F
              , b = this.xD;
            null == b && (b = a.ug);
            b.x = a.ja.p.x;
            b.y = a.ja.p.y;
            this.v().subscribe(this)
        },
        ya: function() {
            this.L.s();
            this.D = this.ck = this.U = this.L = null;
            Qb.prototype.ya.call(this);
            Zb.gj--
        },
        Ua: function(a) {
            5 == a.type && this.s()
        },
        ra: function(a) {
            this.force.y += this.vd;
            this.Dp -= a;
            if (0 > this.Dp) {
                var b = this.Xv;
                b.uf || (b.elapsedTime += a);
                b = b.elapsedTime / b.oc;
                this.alpha = 1 - this.tI(1 > b ? b : 1);
                b = this.Xv;
                b = b.elapsedTime / b.oc;
                if (1 <= (1 > b ? b : 1)) {
                    this.s();
                    return
                }
            }
            Qb.prototype.ra.call(this, a)
        },
        qc: function(a) {
            Qb.prototype.qc.call(this, a);
            a = this.L;
            a.sa(this.alpha);
            a.N(this.scale);
            a.Ed(this.rotation);
            a.P(this.Wf.x);
            a.S(this.Wf.y)
        },
        m: Zb
    });
    Nc.g = ["95"];
    Nc.H = v;
    Nc.prototype = x(v.prototype, {
        ra: function(a) {
            var b = this.nb;
            b.uf || (b.elapsedTime += a);
            a = b.elapsedTime / b.oc;
            a = 1 > a ? a : 1;
            b = m.getParent(this);
            var c = this.ih(a) * this.JI;
            switch (this.DI) {
            case 0:
                b.scale = c;
                break;
            case 1:
                b.alpha = c;
                break;
            case 2:
                b.rotation = c
            }
            1 == a && this.s()
        },
        m: Nc
    });
    Mc.g = ["96"];
    Mc.H = K;
    Mc.prototype = x(K.prototype, {
        Ne: function() {
            var a = this.L.ma(this.L);
            return this.L.Hg(new B(a.c + .5 * (a.j - a.c),a.b + .5 * (a.i - a.b)), new B)
        },
        Pa: function() {
            this.v().subscribe(this);
            var a = this.v().Fb.hc(6);
            this.L = new ma(null,a);
            this.yl = new I(this.L,31,"clockface");
            a = dc.oz("anim_clock_face_", 1, 12);
            for (var b = 0; 12 > b; ) {
                var c = b++
                  , d = new I(this.L,50,a[c]);
                d.P(167);
                d.S(91);
                d.Oa();
                d.ea();
                d.N(2);
                d.I(!1);
                this.fh[c] = d
            }
            this.Di = 11;
            this.fh[this.Di].I(!0);
            this.xB = E.qq(167, 91, 30, 30);
            this.uh = new ta(this.L,9);
            this.Cb = new ta(this.L,14);
            this.resize();
            this.A |= 2
        },
        ya: function() {
            this.L.s();
            this.Cb = this.uh = this.fh = this.yl = this.L = null
        },
        Ua: function(a) {
            switch (a.type) {
            case 5:
                this.resize();
                break;
            case 8:
                this.A &= -3;
                break;
            case 10:
                this.kk = 1.3;
                this.fh[this.Di].I(!1);
                break;
            case 14:
                this.GA = !0;
                this.tl = 0;
                break;
            case 26:
                this.kk = 1.3
            }
        },
        ra: function(a) {
            var b = Math.round(this.v().time);
            this.Ew != b && (this.Ew = b,
            this.Wx());
            this.Gc != this.v().Bg && (this.Sl = 1.3,
            this.Gc = this.v().Bg,
            this.vD());
            this.Sl += .5 * (1 - this.Sl);
            this.kk += .1 * (1 - this.kk);
            0 != this.v().time && (b = this.v().time,
            b = 0 >= b ? -1 : b / 5 | 0,
            11 < b && (b = 11),
            b != this.Di && (this.fh[this.Di].I(!1),
            -1 != b && (this.fh[b].I(!0),
            this.Di = b)),
            this.GA && (b = .25,
            5 > this.v().time && (b /= 2),
            this.tl += a,
            this.tl > b && (this.tl -= b,
            this.fh[this.Di].I(!this.fh[this.Di].vc))))
        },
        qc: function() {
            this.Cb.N(this.Sl);
            this.uh.N(this.kk)
        },
        resize: function() {
            var a = Ha.mode
              , b = 0 > this.yp
              , c = 1 == this.yp || 4 == this.yp;
            switch (a) {
            case 1:
            case 4:
                !b && c || this.tL();
                this.NL();
                break;
            case 2:
            case 3:
                (b || c) && this.sL(),
                this.ML()
            }
            this.yp = a
        },
        tL: function() {
            this.L.N(1);
            null != this.tp && this.L.removeChild(this.tp);
            this.Ly();
            var a = this.L.tc();
            this.L.removeChild(this.Cb);
            a.appendChild(this.Cb);
            this.Cb.Dd(9)
        },
        NL: function() {
            var a = this.v().F.viewport
              , b = a.ma()
              , c = .8 * b.b;
            a = 4 * a.zoom;
            c = c < a ? c : a;
            this.L.N(1);
            c /= this.L.Aa();
            this.L.N(c);
            this.L.P(.02 * -this.L.za());
            this.L.S((b.b - this.L.Aa()) / 2);
            this.Cb.Xd(.5 * (b.j - b.c), b.b);
            this.Cb.Pq();
            this.Cb.De(1.6 * this.Cb.qa.size | 0);
            this.Cb.ia(lb.format(1E7));
            this.Cb.Ee();
            this.Cb.ia(lb.format(this.Gc));
            this.hh = new E(b.c,0,b.j,b.b);
            this.Cb.yb(this.hh, 0, 0);
            this.Wx()
        },
        sL: function() {
            this.Ly();
            this.tp = new I(null,31,"clockface_score");
            this.tp.S(.75 * this.yl.Aa());
            this.yl.tc().Xk(this.tp, 0);
            this.Cb.remove();
            this.L.appendChild(this.Cb);
            this.Cb.Dd(14);
            var a = this.yl.za()
              , b = this.yl.Aa();
            this.hh.c = -20;
            this.hh.j = a + 20;
            this.hh.b = 105 + b - 80;
            this.hh.i = 105 + b;
            this.Cb.Dd(14);
            this.Cb.Xd(a + 20, 80);
            this.Cb.ia(lb.format(1E6));
            this.Cb.Ee();
            this.Cb.yb(this.hh, 0, 0)
        },
        ML: function() {
            var a = this.v().F.viewport;
            this.L.N(1);
            var b = a.ma();
            a = 8 * a.zoom / this.L.Aa();
            this.L.N(a);
            1.05 * this.L.za() > b.c && (this.L.N(1),
            this.L.N(.9 * b.c / this.L.za()));
            this.L.P(b.c - 1.05 * this.L.za());
            this.L.S(.1 * (b.i - b.b));
            this.vD()
        },
        Ly: function() {
            this.uh.ia("60");
            this.uh.Ee();
            this.uh.yb(this.xB, 0, 0);
            this.Wx()
        },
        Wx: function() {
            this.uh.ia(D.Qa(this.Ew));
            this.uh.yb(this.xB, 0, 0);
            this.uh.ea()
        },
        vD: function() {
            this.Cb.ia(lb.format(this.Gc));
            this.Cb.yb(this.hh, 0, 0);
            this.Cb.ea()
        },
        m: Mc
    });
    Lc.g = ["97"];
    Lc.H = K;
    Lc.prototype = x(K.prototype, {
        next: function() {
            this.v().freeze = !1;
            this.v().di = !0;
            if (10 == this.Ga)
                return !1;
            this.Ga++;
            return !0
        },
        Pa: function() {
            this.v().tu = !1;
            this.v().di = !1;
            this.v().subscribe(this);
            this.A |= 2
        },
        Ua: function(a) {
            8 == a.type && (this.A &= -3)
        },
        ra: function(a) {
            if (!this.v().freeze) {
                var b = 60 - this.v().time;
                switch (this.Ga) {
                case 0:
                    1 < b && (this.Sq(1),
                    this.Ga++);
                    break;
                case 2:
                    this.Ga++;
                    break;
                case 3:
                    2 == this.v().fc && (this.Sq(2),
                    this.Ga++);
                    break;
                case 5:
                    this.ac = 0;
                    this.Ga++;
                    break;
                case 6:
                    this.ac += a;
                    if (3 < this.ac || 20 > this.v().time)
                        this.Sq(3),
                        this.Ga++;
                    break;
                case 8:
                    this.ac = 0;
                    this.Ga++;
                    break;
                case 9:
                    this.ac += a,
                    (10 < this.ac || 10 > this.v().time) && this.v().qb.$y() && (this.v().tu = !0,
                    this.Sq(4),
                    this.Ga = 10,
                    this.A |= 2)
                }
            }
        },
        Sq: function(a) {
            this.v().he ? this.A |= 2 : (this.v().freeze = !0,
            this.v().di = !1,
            this.v().Va(39, a))
        },
        m: Lc
    });
    ya.g = ["98"];
    ya.H = v;
    ya.prototype = x(v.prototype, {
        Mj: function() {
            return !0
        },
        ri: function() {
            return !0
        },
        NN: function() {
            return !0
        },
        RH: function() {
            return null == this.ta
        },
        Tq: function(a, b) {
            gb.X().start(this, a, !0, b)
        },
        Jx: function(a, b) {
            gb.X().start(this, a, !1, b)
        },
        finish: function(a) {
            gb.X().finish(this, a)
        },
        PH: function() {
            return null != m.getParent(this) ? m.getParent(this)instanceof ya : !1
        },
        jp: function() {
            return null != m.getParent(this) ? !(m.getParent(this)instanceof ya) : !1
        },
        fv: function() {
            for (var a = m.sc(this); null != a; ) {
                if (a instanceof ya)
                    return a;
                a = m.Pe(a)
            }
            return null
        },
        DN: function() {
            return this.Ec
        },
        ax: function() {
            this.gi(U.Jk)
        },
        gx: function() {
            this.gi(U.ln)
        },
        Bh: function() {
            this.gi(U.Vn);
            this.A &= -2
        },
        Ti: function() {
            this.gi(U.Sk);
            this.A &= -9;
            this.A &= -3
        },
        Si: function() {
            this.gi(U.Rk);
            this.A |= 8;
            this.A |= 2
        },
        sk: function() {
            this.gi(U.Uk)
        },
        UB: function() {},
        ya: function() {
            this.state != U.cg && (this.gi(U.Om),
            this.UB(),
            this.Ec = null)
        },
        gi: function(a) {
            this.state = a
        },
        m: ya
    });
    la.g = ["99"];
    la.Po = function() {
        null == la.root && (la.root = new ma("scene_root"),
        new ma("bg",la.root),
        new ma("fg",la.root));
        return la.root
    }
    ;
    la.ov = function(a) {
        a = Object.create(a.prototype);
        a.Ec = new Dc(null,null);
        var b = a.ic();
        a.s();
        return b
    }
    ;
    la.H = ya;
    la.prototype = x(ya.prototype, {
        resize: function(a) {
            this.Ic(a)
        },
        Ic: function() {},
        Wb: function() {},
        Ud: function() {},
        km: function() {},
        Wc: function() {},
        im: function() {},
        Ah: function() {},
        ic: function() {
            return []
        },
        Vz: function() {
            throw 0;
        },
        Zd: function(a, b) {
            this.AA(a, b, !1) || ya.prototype.Jx.call(this, a, b)
        },
        fL: function(a, b) {
            this.AA(a, b, !0) || ya.prototype.Tq.call(this, a, b)
        },
        Jx: function() {
            throw 0;
        },
        Tq: function() {
            throw 0;
        },
        AA: function(a, b, c) {
            var d = Object.create(a.prototype);
            d.Ec = new Dc(this,b);
            var f = d.Wz();
            d.Ec = null;
            var g = 0 < f.length;
            if (g) {
                for (var e = 0; e < f.length; )
                    ++e;
                a = new Cc(["assets", f, "extras", b, "target", a, "child", c, "loaded", !1]);
                ya.prototype.Tq.call(this, d.Vz(), (new Cc).set("loaderInfo", a))
            }
            d.s();
            return g
        },
        ya: function() {
            ya.prototype.ya.call(this)
        },
        ax: function() {
            ya.prototype.ax.call(this);
            if (null == this.Qc) {
                for (var a = this.Wz(), b = 0; b < a.length; )
                    ++b;
                this.Qc = new ma("[" + Ub.rv(this) + "]");
                this.yd = new ma("bg",this.Qc);
                this.yd.I(!1);
                this.$a = new ma("content",this.Qc);
                this.$a.I(!1);
                this.Te = new ma("fg",this.Qc);
                this.Te.I(!1);
                this.Wb()
            }
        },
        Bh: function() {
            ya.prototype.Bh.call(this);
            this.uD(!0);
            this.aj(!0);
            this.Ud();
            this.Ic(R.Wa.window.lb())
        },
        Ti: function() {
            ya.prototype.Ti.call(this);
            this.setActive(!0)
        },
        Si: function() {
            ya.prototype.Si.call(this);
            this.setActive(!1)
        },
        sk: function() {
            ya.prototype.sk.call(this);
            this.uD(!1);
            this.aj(!1);
            this.km()
        },
        UB: function() {
            null != this.Qc && (Ca.gl(this.Qc, !0),
            this.Qc = this.$a = this.yd = this.Te = null,
            this.Ah())
        },
        aj: function() {},
        setActive: function(a) {
            if (a) {
                if (this.Ec.Aj.has.resolve("loaderInfo") && (a = this.Ec.Aj.get.resolve("loaderInfo"),
                a.get.resolve("loaded"))) {
                    var b = a.get.resolve("target")
                      , c = a.get.resolve("extras");
                    a.get.resolve("child") ? ya.prototype.Tq.call(this, b, c) : ya.prototype.Jx.call(this, b, c);
                    return
                }
                this.Wc()
            } else
                this.im()
        },
        uD: function(a) {
            if (a)
                null == this.Qc.tc() && (this.jp() ? M.ib(la.Po().pf("fg"), ma).appendChild(this.Qc) : M.ib(m.getParent(this), la).Qc.appendChild(this.Qc)),
                this.$a.I(!0),
                this.yd.I(!0),
                this.Te.I(!0);
            else {
                for (a = this.fv(); null != a; ) {
                    if (a.Mj()) {
                        this.$a.I(!1);
                        this.yd.I(!1);
                        this.Te.I(!1);
                        return
                    }
                    a = a.fv()
                }
                this.Qc.remove()
            }
        },
        Wz: function() {
            for (var a = [], b = 0, c = this.ic(); b < c.length; ) {
                var d = c[b];
                ++b;
                if (!t.Ev(d) || t.gp())
                    t.Uo(d) || a.push(d)
            }
            return a
        },
        m: la
    });
    Ib.g = ["100"];
    Ib.H = la;
    Ib.prototype = x(la.prototype, {
        ri: function() {
            return !1
        },
        Wc: function() {
            la.prototype.Wc.call(this);
            for (var a = this.Qp = 0, b = this.Ec.Aj.get.resolve("loaderInfo").get.resolve("assets"); a < b.length; ) {
                var c = b[a];
                ++a;
                var d = t.Hj(c);
                if (!t.Ev(c) || t.gp())
                    this.Qp++,
                    N.Hv(d) ? N.Vu(d) : N.load(d),
                    t.Ri(c, G(this, this.Ri))
            }
        },
        iL: function() {
            this.A |= 2;
            this.Ec.Aj.get.resolve("loaderInfo").set("loaded", !0);
            this.finish((new Cc).set("loaderInfo", this.Ec.Aj.get.resolve("loaderInfo")))
        },
        VH: function() {
            return 0 == this.Qp
        },
        Ri: function() {
            this.Qp--
        },
        m: Ib
    });
    L.g = ["101"];
    L.H = la;
    L.prototype = x(la.prototype, {
        ri: function() {
            return !1
        },
        ic: function() {
            var a = [48, 17, 74, 40, 3, 55];
            a = a.concat([52, 66, 11, 41, 86, 99, 70]);
            a = a.concat(wb.ic());
            a.push(44);
            return a
        },
        Vz: function() {
            return Hd
        },
        Wb: function() {
            la.prototype.Wb.call(this);
            this.Zc()
        },
        Ud: function() {
            la.prototype.Ud.call(this);
            this.Gx();
            this.Xp = !1
        },
        Wc: function() {
            la.prototype.Wc.call(this)
        },
        km: function() {
            la.prototype.km.call(this)
        },
        Ic: function(a) {
            null != this.Ma && this.Ma.La(new E(0,0,a.x,a.y));
            null != this.Pd && this.Pd.resize(a);
            this.wF(a);
            a = this.Kw;
            for (a = new Pf(a,a.Ry()); a.ga(); )
                a.next().Ac()
        },
        ra: function(a) {
            la.prototype.ra.call(this, a);
            this.Qc.xc(a)
        },
        Zc: function() {
            var a = R.Wa;
            a.$c([3, 55]);
            a.ec(11);
            a.ec(66);
            a.va(86, 70);
            a.va(99, 70)
        },
        Gx: function() {
            null == this.Fo() && (R.Wa.ec(52),
            (new I(la.Po().pf("bg"),52)).node.name = "bg")
        },
        tH: function() {
            null != this.Fo() && this.Fo().s()
        },
        Fo: function() {
            return la.Po().pf("bg").pf("bg")
        },
        wF: function(a) {
            var b = this.Fo();
            if (null != b) {
                b.N(1);
                var c = a.x / b.za()
                  , d = a.y / b.Aa();
                c < d ? (b.N(d),
                .6 > a.x / a.y ? this.Xp ? (b.P(Wb.Nz(0, a.x - b.za())),
                this.Xp = !1) : b.P((a.x - b.za()) / 2) : (b.P(-(b.za() - a.x) / 2),
                this.Xp = !0),
                b.S(0)) : (b.N(c),
                b.P(0),
                b.S(-(b.Aa() - a.y) / 2))
            }
        },
        Cg: function(a) {
            if (!t.Uo(41))
                return null;
            var b = JSON.parse(t.getData(41));
            b = T.fa(b, a);
            return null == b ? null : this.Ma = (new tf(b)).read()
        },
        Hx: function(a) {
            null == a && (a = !1);
            this.Pd = this.add(wb);
            this.$a.appendChild(this.Pd.group);
            a && this.Pd.LL()
        },
        Vb: function(a, b, c, d) {
            null == c && (c = "");
            null == d && (d = this.$a);
            1 == b.length && (b[1] = -1);
            b = new ub(d,b[0],b[1]);
            b.ia(c, 9, 200);
            b.xk();
            this.add(null, b);
            this.Ma.find(a).rd = b;
            c = this.Kw;
            null != ea[a] ? c.cc(a, b) : c.G[a] = b;
            return b
        },
        vj: function(a, b, c) {
            var d = new vb(this.$a,55,"button_red");
            d.OC(b, 86, 99, null, new B(.9,.6));
            d.Td = c;
            this.add(null, d);
            this.kc.push(d);
            return this.Ma.find(a).rd = d
        },
        Zu: function(a) {
            var b = this.fB;
            return null != ea[a] ? b.ad(a) : b.G[a]
        },
        findText: function(a) {
            var b = this.Kw;
            return null != ea[a] ? b.ad(a) : b.G[a]
        },
        ia: function(a, b, c) {
            null == c && (c = !1);
            c && (b = this.HG(b));
            this.findText(a).ia(b)
        },
        HG: function(a) {
            return yd.nl(a)
        },
        Lb: function(a, b, c, d) {
            null == d && (d = this.$a);
            b = new Pe(d,b,c);
            this.Ma.find(a).rd = b;
            c = this.fB;
            null != ea[a] ? c.cc(a, b) : c.G[a] = b;
            return b
        },
        bl: function(a) {
            var b = new fd(this.$a);
            return this.Ma.find(a).rd = b
        },
        translate: function(a) {
            return H.translate(a)
        },
        Tz: function(a) {
            return this.kc[a]
        },
        mf: function(a) {
            for (var b = 0, c = this.kc; b < c.length; ) {
                var d = c[b];
                ++b;
                d.Yd(a)
            }
        },
        Hy: function() {
            if (null == this.Te.pf("solid")) {
                var a = R.Wa.window.lb()
                  , b = new I(this.Te)
                  , c = new Lb(Sc.Gg(0) / 255,Sc.Gg(0) / 255,Sc.Gg(0) / 255);
                c.W = Sc.Gg(0) / 255;
                b.EK(c, a.x, a.y).node.name = "solid"
            }
        },
        wC: function() {
            var a = this.Te.pf("solid");
            null != a && a.s()
        },
        m: L
    });
    yb.g = ["102"];
    yb.H = L;
    yb.prototype = x(L.prototype, {
        ic: function() {
            var a = L.prototype.ic.call(this);
            return a = a.concat([90, 79, 63, 67, 0])
        },
        Zc: function() {
            L.prototype.Zc.call(this);
            var a = R.Wa;
            a.va(90, 70);
            a.va(79, 70);
            a.va(63, 0);
            a.va(67, 0)
        },
        Wb: function() {
            function a(a, c) {
                l.sA(c) ? (b.Vb("amount" + a, [79, 90], l.hl(c) + "").af(-1, 0),
                b.Lb("coin" + a, 55, "coin").AK(1, 0)) : (c = e.$E(l.QG(c)),
                c = b.translate(c),
                b.Vb("info" + a, [79, 90], c).Ih().xk())
            }
            var b = this;
            L.prototype.Wb.call(this);
            l.$I();
            this.Cg("BoostSelectScene");
            this.Hx(!0);
            this.bl("pane");
            this.Lb("frame", 11).Tu();
            this.Vb("title", Gd.Pk, this.translate(e.Rn));
            this.vj("ok", this.translate(e.Qn), G(this, this.ok));
            this.Cc = [];
            this.Cc.push(this.add(null, new oc(this.$a,ka.Mg)));
            this.Cc.push(this.add(null, new oc(this.$a,ka.Ie)));
            this.Cc.push(this.add(null, new oc(this.$a,ka.He)));
            var c = this.Ma.find("booster1");
            c.rd = this.Cc[0];
            c = this.Ma.find("booster2");
            c.rd = this.Cc[1];
            c = this.Ma.find("booster3");
            c.rd = this.Cc[2];
            a(1, ka.Mg);
            a(2, ka.Ie);
            a(3, ka.He);
            this.Cc[0].rm(l.Ho(ka.Mg));
            this.Cc[1].rm(l.Ho(ka.Ie));
            this.Cc[2].rm(l.Ho(ka.He));
            this.Cc[0].Td = G(this, this.hx);
            this.Cc[1].Td = G(this, this.hx);
            this.Cc[2].Td = G(this, this.hx)
        },
        Wc: function() {
            L.prototype.Wc.call(this);
            this.mf(!0);
            this.Pd.Yd(!0);
            oa.Mh("SCREEN_SHOP")
        },
        im: function() {
            L.prototype.im.call(this);
            this.Pd.Yd(!1)
        },
        mf: function(a) {
            L.prototype.mf.call(this, a);
            for (var b = 0, c = this.Cc; b < c.length; ) {
                var d = c[b];
                ++b;
                d.enabled && d.button.Yd(a)
            }
        },
        hx: function(a) {
            var b = l.hl(a);
            if (l.KF(a)) {
                var c = l.Gy(a);
                this.Cc[a[1]].rm(c);
                this.Cc[a[1]].AF();
                r.play(r.rE);
                this.Pd.zq(-b);
                this.Pd.Sx()
            }
        },
        ok: function() {
            function a() {
                g += 1;
                g == e && b.Zd(kb)
            }
            var b = this;
            this.mf(!1);
            for (var c = 0, d = this.Cc; c < d.length; ) {
                var f = d[c];
                ++c;
                f.button.Yd(!1)
            }
            l.RL();
            c = this.Ma.find("ok").ma();
            c = new B(c.c + .5 * (c.j - c.c),c.b + .5 * (c.i - c.b));
            d = l.bA();
            for (var g = f = 0, e = 0, k = 0; 4 > k; ) {
                var u = k++;
                0 < (d & 1 << u) && (this.Cc[u].zF(c, f, a),
                f += .5,
                e += 1)
            }
            0 == e && this.Zd(kb)
        },
        m: yb
    });
    xb.g = ["103"];
    xb.prototype = {
        m: xb
    };
    oc.g = ["104"];
    oc.$ = [xb];
    oc.H = v;
    oc.prototype = x(v.prototype, {
        AF: function() {
            var a = new I(this.group.tc(),55,"plus_one");
            a.ea();
            a.Oa();
            var b = this.group.Hg(new B(this.Da[1].Ea,this.Da[1].Ha), new B);
            a.P(b.x);
            a.S(b.y);
            a.N(this.group.Na / 2);
            a.zb().y(a.Ha - this.group.Aa() / 2, 1, Z.Eb(2));
            a.zb().alpha(0, 1, Z.om())
        },
        zF: function(a, b, c) {
            function d() {
                r.play(r.WE);
                e.zb().alpha(0, .25, Z.om(), null, f);
                return e.zb().Gk(3, .25, Z.Eb(2), null, f)
            }
            function f() {
                2 == (u += 1) && c()
            }
            var g = this
              , e = new I(this.group.tc(),55,this.Io());
            e.ea();
            e.Oa();
            var k = this.group.Hg(new B(this.Da[1].Ea,this.Da[1].Ha), new B);
            e.P(k.x);
            e.S(k.y);
            e.N(this.Da[1].Na * this.group.Na);
            var u = 0;
            Db.xj(function() {
                e.zb().position(a.x, a.y, 1, Z.Eb(2), null, d);
                g.rm(l.Ho(g.Kf))
            }, 1E3 * b | 0)
        },
        ya: function() {
            v.prototype.ya.call(this);
            Ga.X().unsubscribe(G(this, this.Rb))
        },
        rm: function(a) {
            0 > a ? (this.Da[0].dc("boost_frame_locked"),
            this.Da[1].dc(this.Io() + "_disabled"),
            this.Da[1].sa(.3),
            this.Da[2].I(!1),
            this.Da[3].I(!1),
            this.Da[4].I(!0),
            this.button.I(!1)) : (this.button.nC(!1),
            l.iv() < l.hl(this.Kf) ? (this.button.I(!1),
            this.enabled = !1) : (this.button.I(!0),
            this.enabled = !0,
            0 == a && this.button.nC(!0)),
            this.Da[0].dc(0 < a ? "boost_frame_selected" : "boost_frame"),
            this.Da[1].dc(this.Io()),
            this.Da[1].sa(1),
            this.Da[2].I(!0),
            this.Da[2].dc("box_amount_" + (0 == a ? "b" : "a")),
            this.Da[3].I(0 < a),
            this.Da[4].I(!1),
            this.gG(0 == a ? 67 : 63),
            this.zf.ia("" + a),
            this.zf.Ac(),
            this.zf.af(0, 0))
        },
        La: function(a) {
            this.group.ea();
            this.group.nf(a);
            this.K = this.group.Na
        },
        gG: function(a) {
            null != this.zf && this.zf.s();
            this.zf = new ub(this.group,a);
            this.zf.La(E.Qi(-15, -7, 60, 36));
            this.zf.ia("0", 9, 200);
            this.zf.af(0, 0);
            this.zf.Ac();
            this.add(null, this.zf)
        },
        Io: function() {
            switch (this.Kf[1]) {
            case 0:
                return "booster_time";
            case 1:
                return "booster_painter";
            case 2:
                return "booster_bomb"
            }
        },
        Rb: function(a) {
            if (this.button.vc) {
                var b = a.Re();
                if (!this.button.vH(b) && this.Da[1].rc(b) && this.button.Wv)
                    switch (a.action[1]) {
                    case 0:
                        this.group.zb().Gk(1.1 * this.K, 1, Z.el(.5));
                        break;
                    case 1:
                        this.group.zb().Gk(this.K, 1, Z.el(.25)),
                        this.Td(this.Kf)
                    }
            }
        },
        m: oc
    });
    vb.g = ["105"];
    vb.$ = [xb];
    vb.H = v;
    vb.prototype = x(v.prototype, {
        ya: function() {
            Ga.X().unsubscribe(G(this, this.Rb));
            this.L.s();
            this.Td = null
        },
        DL: function(a) {
            for (var b = this.Gf.qa.size, c = 0; c < a.length; ) {
                var d = a[c];
                ++c;
                d = d.Gf.qa.size;
                b = b < d ? b : d
            }
            this.De(b);
            for (c = 0; c < a.length; )
                d = a[c],
                ++c,
                d.De(b)
        },
        vH: function(a) {
            return this.Qj.rc(a)
        },
        ma: function() {
            var a = this.J;
            return new E(a.c,a.b,a.j,a.i)
        },
        La: function(a) {
            var b = this.J;
            b.c = a.c;
            b.b = a.b;
            b.j = a.j;
            b.i = a.i;
            this.Qj.N(1);
            a = this.J;
            this.Qj.VK(a.j - a.c);
            a = this.J;
            this.Qj.YC(a.i - a.b);
            this.L.P(this.J.c);
            this.L.S(this.J.b);
            this.L.ea();
            this.yA()
        },
        LN: function() {
            return this.vc
        },
        I: function(a) {
            this.L.I(a);
            return this.vc = a
        },
        HN: function() {
            return this.Wv
        },
        Yd: function(a) {
            return this.Wv = a
        },
        OC: function(a, b, c, d, f) {
            null == f && (f = new B(1,1));
            var g = this.Xl;
            g.x = f.x;
            g.y = f.y;
            this.Gf = new ta(this.L,b);
            this.Gf.ia(a);
            d && this.Gf.Ih();
            -1 < c && (this.ng = new ta(this.L,c),
            this.ng.ia(a),
            d && this.ng.Ih());
            this.yA()
        },
        yA: function() {
            if (null != this.Gf) {
                var a = this.J;
                if (!(a.c > a.j || a.b > a.i)) {
                    var b = a = this.J;
                    a = new E(0,0,a.j - a.c,b.i - b.b);
                    var c = b = this.J;
                    this.Gf.Xd((b.j - b.c) * this.Xl.x, (c.i - c.b) * this.Xl.y);
                    this.Gf.lo(10, 200);
                    this.Gf.yb(a, 0, 0);
                    null != this.ng && (c = b = this.J,
                    this.ng.Xd((b.j - b.c) * this.Xl.x, (c.i - c.b) * this.Xl.y),
                    this.ng.lo(10, 200),
                    this.ng.yb(a, 0, 0))
                }
            }
        },
        Rb: function(a) {
            if (this.Wv && !this.Gi && this.vc && this.qp)
                switch (a.action[1]) {
                case 0:
                    if (this.Pl)
                        break;
                    if (this.Gi)
                        break;
                    if (!this.Qj.rc(a.Re()))
                        break;
                    this.Pl = !0;
                    this.L.zb().Gk(1.2, 1, Z.el(.5));
                    r.play(r.qE);
                    break;
                case 1:
                    this.Pl && !this.Gi && (this.Qj.rc(a.Re()) ? (r.play(r.nE),
                    this.L.zb().Gk(1, 1, Z.el(.25)),
                    this.Gi = !0,
                    this.Pl = !1,
                    this.LI = A.elapsedTime,
                    0 == this.fz && this.select()) : (r.play(r.pE),
                    this.L.zb().Gk(1, 1, Z.el(.25)),
                    this.Pl = !1))
                }
        },
        ra: function(a) {
            this.qp || (this.Uv += a,
            .5 < this.Uv && (this.qp = !0,
            this.Gi = !1));
            this.Gi && A.elapsedTime - this.LI > this.fz && this.select()
        },
        select: function() {
            null != this.Td && this.Td();
            Ta.xK(this);
            this.Uv = 0;
            this.Gi = this.qp = !1
        },
        De: function(a) {
            var b = this.J
              , c = this.J;
            b = new E(0,0,b.j - b.c,c.i - c.b);
            this.Gf.De(a);
            this.Gf.yb(b, 0, 0);
            null != this.ng && (this.ng.De(a),
            this.ng.yb(b, 0, 0))
        },
        m: vb
    });
    Id.g = ["106"];
    Id.H = vb;
    Id.prototype = x(vb.prototype, {
        nC: function(a) {
            this.Aw = a;
            this.L.N(1)
        },
        ra: function(a) {
            vb.prototype.ra.call(this, a);
            this.Gi && (this.Aw = !1);
            this.Aw && !this.Pl && (this.ac += a,
            this.L.N(.9 + (Math.sin(8 * this.ac) - -1) / 2 * .20000000000000007))
        },
        m: Id
    });
    Pb.g = ["107"];
    Pb.H = L;
    Pb.prototype = x(L.prototype, {
        ic: function() {
            var a = L.prototype.ic.call(this);
            a.push(71);
            a.push(94);
            a.push(12);
            a.push(79);
            return a
        },
        Zc: function() {
            L.prototype.Zc.call(this);
            var a = R.Wa;
            a.va(71, 70);
            a.va(94, 70);
            a.va(12, 70);
            a.va(79, 70)
        },
        Wb: function() {
            L.prototype.Wb.call(this);
            this.Cg("BoostUnlockedScene");
            var a = l.qv();
            l.EL(a);
            var b = null
              , c = null;
            switch (a[1]) {
            case 0:
                b = this.translate(e.bn);
                c = this.translate(e.Zm);
                break;
            case 1:
                b = this.translate(e.cn);
                c = this.translate(e.$m);
                break;
            case 2:
                b = this.translate(e.an),
                c = this.translate(e.Ym)
            }
            this.bl("pane");
            this.Lb("banderole", 55, "banderole");
            this.Vb("title", [71, 99], this.translate(e.pn));
            this.Lb("rays", 55, "sun_rays").pu();
            this.Lb("frame", 55, "boost_frame");
            switch (a[1]) {
            case 0:
                var d = "booster_time";
                break;
            case 1:
                d = "booster_painter";
                break;
            case 2:
                d = "booster_bomb"
            }
            this.Lb("boost", 55, d);
            this.Lb("highlight", 55, "gloss_star").pu();
            this.Vb("name", [94, 99], b);
            a = this.Vb("info", [79, 12]);
            b = this.Ma.find("info").ma();
            a.ia(c, 8, (b.i - b.b) / 3 | 0);
            a.Ih();
            this.vj("ok", this.translate(e.hj), G(this, this.ok))
        },
        Ud: function() {
            L.prototype.Ud.call(this);
            r.play(r.eE)
        },
        Wc: function() {
            this.mf(!0);
            oa.Mh("SCREEN_BONUS")
        },
        ok: function() {
            this.Zd(yb)
        },
        m: Pb
    });
    Jb.g = ["108"];
    Jb.H = L;
    Jb.prototype = x(L.prototype, {
        ri: function() {
            return !1
        },
        ic: function() {
            var a = L.prototype.ic.call(this);
            return a = a.concat([36, 98, 46, 27, 90, 79, 99, 94, 53, 12])
        },
        Zc: function() {
            L.prototype.Zc.call(this);
            var a = R.Wa;
            a.ec(27);
            a.va(36, 46);
            a.va(98, 46);
            a.va(53, 70);
            a.va(90, 70);
            a.va(12, 70);
            a.va(94, 70);
            a.va(99, 70);
            a.va(79, 70)
        },
        Wb: function() {
            L.prototype.Wb.call(this);
            this.Cg("GameResultsScene");
            l.wd() && this.Hx();
            this.rg = new ma;
            this.bl("pane");
            this.Lb("star0", 55, "sun_rays").pu();
            this.Lb("star1", 55, "gloss_star");
            this.Lb("star2", 55, "gloss_star");
            this.Lb("star3", 55, "gloss_star");
            this.Lb("star4", 55, "gloss_star");
            this.Lb("rewards_bg", 11, null, this.rg).Tu();
            this.Lb("level_star", 55, "level_star", this.rg);
            this.Lb("coin", 55, "coin", this.rg);
            this.Lb("squirrel", 27);
            this.Vb("xp_amount", Gd.Pk, null, this.rg).yk();
            this.Vb("coin_amount", Gd.Pk, null, this.rg).yk();
            this.Vb("title", Gd.Pk);
            this.Vb("info", [79, 12]);
            this.Vb("points", [36]).ia("0").af(0, 0);
            this.Vb("bonus", [79, 53]);
            this.Vb("rewards_info", [94, 99], this.translate(e.sn), this.rg);
            this.$a.appendChild(this.rg);
            this.vj("button", this.translate(e.hj), G(this, this.ok))
        },
        Ud: function() {
            L.prototype.Ud.call(this);
            this.Af = l.Sz();
            this.Gc = l.Xg() - this.Af;
            this.Gp = l.TH();
            switch (1E3 > this.Gc ? 1 : 1E5 > this.Gc ? 2 : 5E5 > this.Gc ? 3 : 4) {
            case 1:
                var a = e.tn;
                break;
            case 2:
                a = e.un;
                break;
            case 3:
                a = e.vn;
                break;
            case 4:
                a = e.wn;
                break;
            default:
                a = null
            }
            a = this.translate(a).split("::")[Wb.aK()];
            this.ia("title", a);
            a = this.translate(this.Gp ? e.qn : e.rn);
            this.ia("info", a);
            this.findText("info").I(!1);
            a = this.findText("points");
            a.I(!1);
            a.Ca.Dd(this.Gp ? 98 : 36);
            a.ea();
            a.N(0 < this.Af ? .6 : .8);
            this.rg.I(!1);
            a = this.findText("bonus").ol();
            0 < this.Af && a.ia(this.translate(e.ZE(l.Go(), l.Sz())));
            a = l.dv();
            var b = l.Rz();
            this.vI = 0 < a + b;
            this.ia("xp_amount", a, !0);
            this.ia("coin_amount", b, !0);
            a = this.Zu("squirrel");
            this.Gp ? a.show() : a.ol();
            this.kc[0].I(!1)
        },
        Wc: function() {
            0 == this.Gc ? (this.kc[0].I(!0),
            this.mf(!0)) : (this.Gp && r.play(r.PE),
            Db.xj(G(this, this.yF), 500));
            oa.Mh("SCREEN_GAMERESULT")
        },
        yF: function() {
            var a = this
              , b = this.findText("points")
              , c = this.findText("bonus")
              , d = this.findText("info");
            d = this.Uu(d, 0, 1);
            var f = this.lz(b, 0, this.Gc)
              , g = this.mC(b, 0 < this.Af ? .8 : 1)
              , e = {
                Xb: function() {
                    a.gJ()
                },
                next: null
            };
            if (0 < this.Af) {
                var k = this.Uu(c, 0, 1)
                  , u = this.lz(b, this.Gc, this.Gc + this.Af);
                b = this.mC(b, 1);
                c = this.Uu(c, 1, 0);
                g.next = k;
                k.next = u;
                u.next = b;
                b.next = c;
                c.next = e
            } else
                g.next = e;
            f.next = g;
            d.next = f;
            d.Xb()
        },
        gJ: function() {
            if (this.vI) {
                var a = this.yG(this.rg)
                  , b = {
                    Xb: G(this, this.zJ),
                    next: null
                };
                a.next = b;
                a.Xb()
            } else
                this.BJ()
        },
        zJ: function() {
            r.play(r.HE);
            var a = l.Rz();
            0 < a && (this.Pd.zq(a),
            l.uF(a),
            this.Pd.Sx());
            a = l.dv();
            this.Pd.jx(a);
            l.vF(a);
            oa.wL(l.Xg());
            Db.xj(G(this, this.TB), 1E3)
        },
        TB: function() {
            var a = this;
            R.audio.Hh(0);
            var b = l.UH() ? oa.eI() : oa.bI();
            console.info(b);
            b.then(function() {
                a.RB()
            }, function() {
                a.RB()
            })
        },
        RB: function() {
            R.audio.Hh(1);
            console.info("onCloseAds");
            this.kc[0].I(!0);
            this.mf(!0)
        },
        BJ: function() {
            Db.xj(G(this, this.TB), 1E3)
        },
        ok: function() {
            var self = this;
            setLoadingVisible(true, false, function () {
                self.ok2();
            })
        },
        ok2: function() {
            console.log(1111111)
            this.mf(!1);
            2 > l.Ro() ? this.Zd(kb) : (l.dz(),
            l.wd() && oa.AL(),
            l.wd() && 1 == l.je() && null != l.qv() ? this.Zd(Pb) : l.WH() ? this.Zd(nc) : this.Zd(yb))
        },
        Uu: function(a, b, c) {
            var d = this
              , f = null;
            return f = {
                Xb: function() {
                    a.I(!0);
                    a.sa(b);
                    var g = (new Nb(b,c,.3,function(b) {
                        return a.sa(b)
                    }
                    )).Kq(Z.Eb(2)).wc(function() {
                        f.next.Xb()
                    });
                    d.add(null, g)
                },
                next: null
            }
        },
        yG: function(a) {
            var b = this
              , c = null;
            return c = {
                Xb: function() {
                    a.I(!0);
                    a.sa(0);
                    var d = (new Nb(0,1,.3,function(b) {
                        return a.sa(b)
                    }
                    )).Kq(Z.Eb(2)).wc(function() {
                        c.next.Xb()
                    });
                    b.add(null, d)
                },
                next: null
            }
        },
        lz: function(a, b, c) {
            function d(b) {
                a.ia(yd.nl(b | 0))
            }
            var f = this
              , g = {
                Xb: function() {
                    a.I(!0);
                    var e = (new Nb(b,c,1,d)).Kq(Z.Eb(2)).wc(function() {
                        g.next.Xb()
                    });
                    f.add(null, e);
                    r.play(r.VE)
                },
                next: null
            };
            return g
        },
        mC: function(a, b) {
            function c(b) {
                a.N(b)
            }
            var d = this
              , f = null;
            return f = {
                Xb: function() {
                    a.ea();
                    a.af(0, 0);
                    var g = (new Nb(a.Ca.Na,b,.3,c)).Kq(Z.qj(.5)).wc(function() {
                        f.next.Xb()
                    });
                    d.add(null, g)
                },
                next: null
            }
        },
        m: Jb
    });
    kb.g = ["109"];
    kb.H = L;
    kb.prototype = x(L.prototype, {
        Gx: function() {},
        ic: function() {
            var a = [16, 77, 19, 35, 64, 34, 20, 32, 103, 102, 93, 96, 9, 54, 14, 5, 15, 62, 8, 101, 61, 29, 18, 69, 95, 10, 87, 43, 2, 39, 30, 84, 60, 75, 1, 25, 51, 89, 26, 85, 56, 68, 23, 50, 33, 47, 82, 31, 100, 4, 59, 21];
            a.push(7);
            a.push(6);
            a = a.concat(la.ov(mc));
            l.wd() || (a.push(90),
            a.push(70),
            a = a.concat([74, 40]));
            return a
        },
        Zc: function() {},
        Wb: function() {
            L.prototype.Wb.call(this);
            this.DH()
        },
        Ah: function() {
            L.prototype.Ah.call(this);
            r.stop(r.Br)
        },
        Ud: function() {
            L.prototype.Ud.call(this);
            this.tH();
            this.Ec.caller instanceof mc || (r.stop(r.Cr),
            r.play(r.Br, !0))
        },
        km: function() {
            L.prototype.km.call(this);
            J.X().paused || this.KG()
        },
        Wc: function() {
            L.prototype.Wc.call(this);
            this.Ec.caller instanceof mc ? this.Ec.Aj.has.resolve("end") ? (J.X().rF(),
            this.qF()) : (J.X().resume(),
            oa.Mh("SCREEN_LEVEL")) : (oa.dI(),
            oa.Mh("SCREEN_LEVEL"))
        },
        ra: function() {},
        Ua: function(a) {
            L.prototype.Ua.call(this, a);
            switch (a.type) {
            case 9:
                this.tG();
                break;
            case 38:
                this.fL(mc);
                break;
            case 39:
                this.add(null, new Fd(a.data,this.$a))
            }
        },
        DH: function() {
            r.My();
            Oa.xF();
            var a = l.Ro()
              , b = J.X();
            b.ah = sa.Qk;
            0 == a && (b.Tg = Wa.LD.slice(),
            b.Xf = 4085);
            b.wa(this, this.$a.node, l.bA());
            b.subscribe(this);
            0 == a ? b.kL() : b.hL()
        },
        qF: function() {
            oa.cI();
            this.Zd(Ua)
        },
        tG: function() {
            var a = J.X();
            a.rl || a.lu || l.KK();
            l.PK(a.Bg);
            this.Zd(Jb)
        },
        KG: function() {
            M.ib(this.$a.node, Bb).removeChild(J.X().Fb.root);
            J.X().s();
            Gb.X().QF()
        },
        m: kb
    });
    Pe.g = ["110"];
    Pe.$ = [xb];
    Pe.prototype = {
        I: function(a) {
            this.Ck.I(!1);
            return a
        },
        dc: function(a) {
            this.Ck.dc(a);
            return a
        },
        La: function(a) {
            this.Ck.nf(a, this.ZA ? Na.Th : Na.Xh, this.Mv[0], this.Mv[1])
        },
        AK: function(a, b) {
            this.Mv = [a, b];
            return this
        },
        Tu: function() {
            this.ZA = !0;
            return this
        },
        pu: function() {
            this.Ck.Hd().add();
            return this
        },
        ol: function() {
            this.Ck.I(!1);
            return this
        },
        show: function() {
            this.Ck.I(!0);
            return this
        },
        m: Pe
    };
    nc.g = ["111"];
    nc.H = L;
    nc.prototype = x(L.prototype, {
        ic: function() {
            var a = L.prototype.ic.call(this);
            return a = a.concat([27, 28, 94, 71, 12, 13, 91, 79, 90])
        },
        Zc: function() {
            L.prototype.Zc.call(this);
            var a = R.Wa;
            a.ec(27);
            a.ec(28);
            a.va(94, 70);
            a.va(71, 70);
            a.va(12, 70);
            a.va(99, 70);
            a.va(79, 70);
            a.va(90, 70);
            a.va(13, 91)
        },
        Wb: function() {
            L.prototype.Wb.call(this);
            this.Cg("LevelUpScene");
            this.bl("pane");
            this.Lb("banderole", 55, "banderole");
            this.Vb("title", [71, 99], this.translate(e.Pn));
            this.Lb("squirrel", 27);
            this.Lb("star", 28);
            var a = "+" + l.Go() + "%"
              , b = new ma("bonusGroup",this.$a);
            this.Lb("frame", 11, null, b).Tu();
            this.Vb("bonus", [94, 99], this.translate(e.On), b);
            this.Vb("percent", [79, 90], a, b);
            this.Vb("percent_with_bonus", [79, 90], a, b);
            this.Lb("item", 55, "booster_painter_outline", b);
            this.Vb("item_amount", [79, 90], "+1", b).yk();
            a = "" + l.je();
            this.Vb("info", [79, 12], this.translate(e.Nn));
            this.Vb("level", [13], a).Ac().af(0, 0).ea();
            this.vj("ok", this.translate(e.hj), G(this, this.ok))
        },
        Ah: function() {
            R.Wa.zj(28)
        },
        Ud: function() {
            L.prototype.Ud.call(this);
            r.play(r.NE);
            var a = l.Go()
              , b = l.XG()
              , c = l.YG();
            l.Gy(b, c);
            this.$a.pf("bonusGroup").I(!1);
            if (null != b) {
                this.findText("percent").I(!1);
                this.findText("percent_with_bonus").ia("+" + a + "%");
                this.findText("item_amount").ia("+" + c);
                switch (b[1]) {
                case 0:
                    var d = "booster_time";
                    break;
                case 1:
                    d = "booster_painter";
                    break;
                case 2:
                    d = "booster_bomb"
                }
                this.Zu("item").dc(d + "_outline")
            } else
                this.findText("percent").ia("+" + a + "%"),
                this.findText("percent_with_bonus").I(!1),
                this.findText("item_amount").I(!1),
                this.Zu("item").I(!1);
            var f = this.findText("level")
              , g = Z.qj(.1);
            this.add(null, (new Nb(.01,1,1,function(a) {
                a = g(a);
                return f.N(a)
            }
            )).wc(G(this, this.bL)));
            oa.Mh("SCREEN_BONUS")
        },
        bL: function() {
            var a = this.$a.pf("bonusGroup");
            a.I(!0);
            a.sa(0);
            a.zb().alpha(1, .5, Z.Eb(2), null, G(this, this.eJ))
        },
        eJ: function() {
            this.mf(!0)
        },
        ok: function() {
            null != l.qv() ? this.Zd(Pb) : this.Zd(yb)
        },
        m: nc
    });
    Hd.g = ["112"];
    Hd.H = Ib;
    Hd.prototype = x(Ib.prototype, {
        Mj: function() {
            return !1
        },
        ya: function() {
            this.L.s();
            Ib.prototype.ya.call(this)
        },
        Wb: function() {
            var a = R.Wa;
            a.ec(37);
            a.ec(38);
            this.L = new ma(null,this.$a);
            this.Ca = new I(this.L,37);
            this.Ca.ea();
            this.Ca.Oa();
            this.Ka = new I(this.L,38);
            this.Ka.ea();
            this.Ka.Oa();
            Ib.prototype.Wb.call(this)
        },
        Wc: function() {
            Ib.prototype.Wc.call(this)
        },
        ra: function(a) {
            var b = this.Ca;
            b.Ed(b.Tc + 10);
            switch (this.Ga) {
            case 0:
                b = this.nb;
                b.uf || (b.elapsedTime += a);
                a = b.elapsedTime / b.oc;
                this.L.N(.01 + this.oI(1 > a ? a : 1) * this.fq);
                this.VH() ? (a = this.nb,
                a = a.elapsedTime / a.oc,
                a = 1 <= (1 > a ? a : 1)) : a = !1;
                a && (a = this.nb,
                a.kg = .5,
                a.elapsedTime = 0,
                a.oc = a.kg,
                this.Ga = 1);
                break;
            case 1:
                b = this.nb;
                b.uf || (b.elapsedTime += a);
                a = this.nb;
                a = a.elapsedTime / a.oc;
                1 <= (1 > a ? a : 1) && (a = this.nb,
                a.kg = .25,
                a.elapsedTime = 0,
                a.oc = a.kg,
                this.Ga = 2);
                break;
            case 2:
                b = this.nb;
                b.uf || (b.elapsedTime += a);
                b = b.elapsedTime / b.oc;
                this.L.N(this.fq - (.01 + this.VA(1 > b ? b : 1)) * this.fq);
                b = this.nb;
                b.uf || (b.elapsedTime += a);
                a = b.elapsedTime / b.oc;
                this.L.sa(1 - this.VA(1 > a ? a : 1));
                a = this.nb;
                a = a.elapsedTime / a.oc;
                1 <= (1 > a ? a : 1) && (this.Ga = 3);
                break;
            case 3:
                this.iL()
            }
        },
        Ud: function() {
            Ib.prototype.Ud.call(this);
            this.Ic(R.Wa.window.lb())
        },
        Ic: function(a) {
            var b = R.Wa.window.Pu;
            150 > b && (b = 150);
            b /= 2;
            this.L.N(1);
            this.fq = this.L.N(b / this.L.za());
            this.L.P(a.x - 1.1 * this.L.za());
            this.L.S(a.y - 1.1 * this.L.za())
        },
        m: Hd
    });
    Ua.g = ["113"];
    Ua.H = L;
    Ua.prototype = x(L.prototype, {
        ic: function() {
            var a = L.prototype.ic.call(this);
            a = a.concat([58, 88, 80]);
            return a = a.concat([24, 81])
        },
        Zc: function() {
            L.prototype.Zc.call(this);
            var a = R.Wa;
            a.ec(58);
            a.ec(88);
            a.ec(80);
            a.va(81, 24, !0)
        },
        Wb: function() {
            L.prototype.Wb.call(this);
            this.Cg("MainMenuScene");
            this.Hx(!0);
            this.Lb("logo", 58);
            var a = new Kc;
            a.button.Td = G(this, this.play);
            this.add(null, a);
            this.$a.appendChild(a.group);
            this.Ma.find("play").rd = a;
            Ua.Lz ? (Ua.Lz = !1,
            this.TJ(),
            this.GH()) : Ua.oB && (this.bk = new I(this.$a,65535))
        },
        Wc: function() {
            L.prototype.Wc.call(this);
            fb.ud(this, Kc).button.Yd(!0);
            R.audio.play(r.Cr, !0);
            Ga.X().subscribe(G(this, this.Rb));
            oa.Mh("SCREEN_HOME");
            this.Pd.Yd(!0)
        },
        im: function() {
            L.prototype.im.call(this);
            Ga.X().unsubscribe(G(this, this.Rb));
            this.Pd.Yd(!1)
        },
        Ic: function(a) {
            L.prototype.Ic.call(this, a);
            null != this.bk && this.Ky()
        },
        play: function() {
            this.Zd(yb)
        },
        TJ: function() {
            var a = la.ov(kb);
            a = pa.map(a, function(a) {
                return t.Hj(a)
            });
            pa.xd(a, function(a) {
                N.load(a)
            });
            pa.xd(a, function(a) {
                N.Vu(a)
            })
        },
        GH: function() {
            var a = this;
            Se.load(function(b) {
                R.Wa.Tf.createTexture(65535, b);
                a.bk = new I(a.$a,65535);
                Ua.oB = !0;
                a.Ky()
            })
        },
        Ky: function() {
            var a = this.Ma.find("play").ma();
            a = new E(a.c,a.b,a.j,a.i);
            a.b = a.i - .3 * (a.i - a.b);
            var b = R.Wa.window.lb()
              , c = b.x > .8 * b.y;
            b = -(a.j - a.c) * (c ? .3 : .2);
            c = c ? .1 * -(a.i - a.b) : 0;
            a.c -= b;
            a.b -= c;
            a.j += b;
            a.i += c;
            this.bk.nf(a, null, 0, 0)
        },
        Rb: function(a) {
            a.action == va.Kg && null != this.bk && this.bk.rc(a.Re()) && Se.click()
        },
        m: Ua
    });
    Kc.g = ["114"];
    Kc.$ = [xb];
    Kc.H = v;
    Kc.prototype = x(v.prototype, {
        La: function(a) {
            var b = R.Wa.window.lb();
            this.group.nf(a, null, 0, 1);
            this.group.yb(new E(0,0,b.x,b.y), 0, 1)
        },
        m: Kc
    });
    wb.g = ["115"];
    wb.ic = function() {
        var a = [];
        a = a.concat([48, 17]);
        a = a.concat([46, 36]);
        return a = a.concat([94, 99, 49, 72, 42])
    }
    ;
    wb.H = v;
    wb.prototype = x(v.prototype, {
        ya: function() {
            v.prototype.ya.call(this);
            this.group = null;
            this.Ma.s();
            this.Ma = null
        },
        Yd: function(a) {
            this.Gw.button.Yd(a);
            return a
        },
        resize: function(a) {
            this.Ma.La(new E(0,0,a.x,.08 * a.y));
            a = this.Ma.find("3,0").ma();
            var b = a.j - a.c
              , c = a.i - a.b;
            b = .8 * (b < c ? b : c);
            b = new E(0,0,b,b);
            b.TK(a.tv());
            this.Gw.La(b)
        },
        Pa: function() {
            function a(a) {
                var b = La.ml(17).Pg.Fp;
                return (null != ea[a] ? b.ad(a) : b.G[a]).xb.x
            }
            this.group = new ma;
            var b = a("bg")
              , c = a("coins")
              , d = a("highscore")
              , f = b + c + d + 80;
            b /= f;
            c /= f;
            d /= f;
            f = 80 / f;
            this.Ma = new ab;
            var g = new zc(4,1);
            this.Ma.UK(.01);
            g.um(0, b);
            g.um(1, c);
            g.um(2, d);
            g.um(3, f);
            g.Eg = 4;
            this.Ma.Cg(g);
            this.Rd = this.add(jd);
            this.group.appendChild(this.Rd.group);
            this.Ma.find("0,0").rd = this.Rd;
            this.Jd = this.add(id);
            this.group.appendChild(this.Jd.group);
            this.Ma.find("1,0").rd = this.Jd;
            this.Ad = this.add(hd);
            this.group.appendChild(this.Ad.group);
            this.Ma.find("2,0").rd = this.Ad;
            this.Gw = this.add(null, new gd(this.group));
            this.Ma.find("3,0").rd = this.Gw;
            this.QL();
            this.Sx()
        },
        zq: function(a) {
            this.Jd.zq(a)
        },
        QL: function() {
            this.Rd.TC();
            this.Rd.JK()
        },
        Sx: function() {
            this.Jd.update()
        },
        jx: function(a) {
            this.Rd.jx(a)
        },
        LL: function() {
            wb.to = F.Jj;
            this.Ad.update()
        },
        m: wb
    });
    jd.g = ["116"];
    jd.$ = [xb];
    jd.H = v;
    jd.prototype = x(v.prototype, {
        JK: function() {
            this.nc.ia("" + l.je());
            this.nc.Ac();
            this.nc.af(0, 0)
        },
        TC: function() {
            var a = Math.round(1 + l.Ko(l.hA()) / 1 * 49);
            1 > a && (a = 1);
            50 < a && (a = 50);
            this.EA.dc("bar00" + (10 > a ? "0" : "") + a);
            this.eh.dc("bar00" + (10 > a ? "0" : "") + a);
            this.eh.Hd().screen()
        },
        La: function(a) {
            this.group.nf(a, Na.Xh, 0, 0);
            this.nc.ia("" + l.je());
            this.nc.Ac()
        },
        jx: function() {
            var a = l.hA()
              , b = l.dv()
              , c = l.je();
            this.Qw = c;
            for (this.ve = []; a + b > l.ll(c); )
                this.ve.push(l.Ko(a, c)),
                this.ve.push(1),
                b -= l.ll() - a,
                a = l.ll(c),
                ++c;
            this.ve.push(l.Ko(a, c));
            this.ve.push(l.Ko(a + b, c));
            this.fill()
        },
        ra: function(a) {
            this.ac += a;
            this.eh.sa((1 + Math.sin(10 * this.ac)) / 2)
        },
        fill: function() {
            this.eh.I(!0);
            this.A &= -3;
            var a = this.ve.shift()
              , b = this.ve.shift();
            this.add(null, new Nb(a,b,3,G(this, this.lG))).wc(G(this, this.sJ))
        },
        sJ: function() {
            this.A |= 2;
            this.eh.I(!1);
            0 < this.ve.length && (this.Qw++,
            this.nc.ia("" + this.Qw),
            this.nc.Ac(),
            r.play(r.ME),
            r.play(r.OE),
            this.fill())
        },
        lG: function(a) {
            a = Math.round(1 + a / 1 * 49);
            1 > a && (a = 1);
            50 < a && (a = 50);
            this.EA.dc("bar00" + (10 > a ? "0" : "") + a);
            this.eh.dc("bar00" + (10 > a ? "0" : "") + a)
        },
        m: jd
    });
    id.g = ["117"];
    id.$ = [xb];
    id.H = v;
    id.prototype = x(v.prototype, {
        update: function() {
            this.wi.ia("" + l.iv());
            this.wi.Ac()
        },
        La: function(a) {
            this.group.nf(a, null, 0, 0);
            this.wi.Ac()
        },
        zq: function(a) {
            this.PB();
            var b = null == a ? "null" : "" + a;
            0 < a && (b = "+" + b);
            this.gh = new ub(this.zl,0 < a ? 49 : 72);
            this.gh.La(E.Qi(80, 20, 120, 80));
            this.gh.ia(b, 8, 200);
            this.gh.Ac();
            this.gh.af(0, 0);
            this.add(null, this.gh);
            this.zl.sa(1);
            this.zl.S(20);
            this.zl.zb().alpha(0, 1, Z.om());
            this.zl.zb().y(60, 1, Z.Eb(2), null, G(this, this.PB))
        },
        PB: function() {
            null != this.gh && (this.gh.s(),
            this.gh = null)
        },
        m: id
    });
    hd.g = ["118"];
    hd.$ = [xb];
    hd.H = v;
    hd.prototype = x(v.prototype, {
        update: function() {
            this.Ad.ia(yd.nl(wb.to), 8, 200);
            this.Ad.Ac();
            this.Ad.af(-1, 0)
        },
        La: function(a) {
            this.group.nf(a, null, 0, 0);
            this.Ad.Ac()
        },
        m: hd
    });
    gd.g = ["119"];
    gd.$ = [xb];
    gd.H = v;
    gd.prototype = x(v.prototype, {
        ya: function() {
            v.prototype.ya.call(this);
            Ga.X().unsubscribe(G(this, this.Rb))
        },
        La: function(a) {
            this.button.La(a);
            this.vc && (this.button.L.Ed(0),
            this.Fc.I(!1),
            this.Hc.I(!1),
            this.button.Yd(!0),
            this.vc = !1,
            this.Fc.sa(0),
            this.Hc.sa(0),
            a = this.button.ma().b,
            this.Fc.S(a),
            this.Hc.S(a))
        },
        Td: function() {
            this.vc ? this.ol() : this.show()
        },
        show: function() {
            function a() {
                4 == (f += 1) && (b.vc = !0)
            }
            var b = this
              , c = F.Xe ? 1 : .5
              , d = F.bf ? 1 : .5
              , f = 0
              , g = this.button.ma()
              , e = .3 * (g.j - g.c)
              , k = .3 * (g.i - g.b);
            g.c -= e;
            g.b -= k;
            g.j += e;
            g.i += k;
            e = g.b;
            k = g.b + 1.2 * (g.i - g.b);
            var u = g.i - g.b;
            g.b = k;
            g.i = k + u;
            this.Fc.nf(g);
            this.Fc.I(!0);
            k = g.b + 1.2 * (g.i - g.b);
            u = g.i - g.b;
            g.b = k;
            g.i = k + u;
            this.Hc.nf(g);
            g = Z.Eb(2);
            k = this.Fc.Ha;
            this.Fc.S(e);
            this.Fc.zb().y(k, .25, g, null, a);
            this.Fc.sa(0);
            this.Fc.zb().alpha(c, .25, g, null, a);
            k = this.Hc.Ha;
            this.Hc.S(e);
            this.Hc.I(!0);
            this.Hc.zb().y(k, .25, g, null, a);
            this.Hc.sa(0);
            this.Hc.zb().alpha(d, .25, g, null, a);
            this.button.L.zb().rotation(180, .25, g);
            Ga.X().subscribe(G(this, this.Rb))
        },
        ol: function() {
            function a() {
                4 == (d += 1) && (b.Fc.I(!1),
                b.Hc.I(!1),
                b.button.Yd(!0),
                b.vc = !1)
            }
            var b = this;
            this.button.Yd(!1);
            var c = Z.Eb(2);
            this.button.L.zb().rotation(0, .25, c);
            var d = 0
              , f = this.button.ma().b;
            this.Fc.zb().y(f, .25, c, null, a);
            this.Fc.zb().alpha(0, .25, c, null, a);
            this.Hc.zb().y(f, .25, c, null, a);
            this.Hc.zb().alpha(0, .25, c, null, a)
        },
        Rb: function(a) {
            if (this.vc && a.action == va.bg) {
                a = a.Re();
                if (this.Hc.rc(a)) {
                    var b = F.bf = !F.bf;
                    F.save();
                    R.audio.Cx(b ? 1 : 0);
                    this.Hc.sa(b ? 1 : .5);
                    this.hm()
                }
                this.Fc.rc(a) && (a = F.Xe = !F.Xe,
                F.save(),
                R.audio.Bx(a ? 1 : 0),
                this.Fc.sa(a ? 1 : .5),
                this.hm())
            }
        },
        hm: function() {
            oa.yD(F.Xe ? 1 : 0, F.bf ? 1 : 0)
        },
        m: gd
    });
    mc.g = ["120"];
    mc.H = L;
    mc.prototype = x(L.prototype, {
        Mj: function() {
            return !0
        },
        Wb: function() {
            L.prototype.Wb.call(this);
            this.Cg("PauseDialog");
            R.audio.Hh(0);
            this.bl("pane");
            this.Vb("title", Gd.Pk, this.translate(e.Rm));
            this.vj("resume", this.translate(e.Qm), G(this, this.resume));
            l.wd() && this.vj("end", this.translate(e.Pm), G(this, this.end))
        },
        Ah: function() {
            L.prototype.Ah.call(this);
            R.audio.Hh(1)
        },
        ic: function() {
            var a = L.prototype.ic.call(this);
            return a = a.concat([79, 90])
        },
        Zc: function() {
            L.prototype.Zc.call(this);
            var a = R.Wa;
            a.va(79, 70);
            a.va(90, 70)
        },
        Wc: function() {
            this.mf(!0);
            oa.Mh("SCREEN_PAUSE")
        },
        Ic: function(a) {
            L.prototype.Ic.call(this, a);
            l.wd() && this.Tz(0).DL([this.Tz(1)])
        },
        resume: function() {
            this.finish()
        },
        end: function() {
            this.finish(new Cc("end"))
        },
        m: mc
    });
    Jc.g = ["121"];
    Jc.H = L;
    Jc.prototype = x(L.prototype, {
        ic: function() {
            return []
        },
        Zc: function() {
            var a = R.Wa;
            a.ec(76);
            a.ec(57);
            a.ec(22);
            a.ec(45);
            a.ec(73);
            a.va(97, 83)
        },
        Gx: function() {},
        Wb: function() {
            L.prototype.Wb.call(this);
            var a = Ua;
            l.wd() || (a = kb);
            this.ek = la.ov(a).map(function(a) {
                return t.Hj(a)
            });
            pa.xd(this.ek, function(a) {
                N.load(a)
            });
            pa.xd(this.ek, function(a) {
                N.Vu(a)
            });
            this.Da[0] = new I(this.$a,76);
            this.Da[1] = new I(this.$a,57);
            this.Da[2] = new I(this.$a,22);
            this.Da[3] = new I(this.$a,45);
            this.Da[4] = new I(this.$a,73);
            this.U = new ta(this.$a,97);
            this.U.ia("0");
            this.Oi = new ta(this.$a,97);
            this.Oi.sa(.5)
        },
        Ah: function() {
            L.prototype.Ah.call(this);
            for (var a = 0, b = this.Da; a < b.length; ) {
                var c = b[a];
                ++a;
                c.s()
            }
            this.U.s();
            this.Oi.s();
            this.ek = this.Oi = this.U = this.Da = null;
            a = R.Wa;
            a.zj(76);
            a.zj(57);
            a.zj(22)
        },
        ra: function() {
            var a = this.Da[3];
            a.Ed(a.Tc + 10);
            0 == this.OA && null != this.ek && (a = N.No(this.ek),
            this.U.ia("" + Math.round(100 * a)),
            this.U.Ee(),
            this.U.Oa(),
            1 > a || (this.ek = null,
            this.OA = 1,
            O.YH() ? (this.U.Xd(this.Da[2].za(), this.Da[3].Aa()),
            this.U.ia(H.translate(e.Lm)),
            this.U.Ee(),
            this.U.Oa(),
            window.addEventListener("click", G(this, this.sq)),
            window.addEventListener("touchstart", G(this, this.sq))) : this.next()))
        },
        sq: function() {
            this.CB || (this.CB = !0,
            window.removeEventListener("click", G(this, this.sq)),
            window.removeEventListener("touchstart", G(this, this.sq)),
            O.resume(),
            this.next())
        },
        next: function() {
            var a = Ua;
            l.wd() || (a = kb);
            this.Zd(a)
        },
        Ic: function(a) {
            function b(b) {
                b.N(1);
                b.ea();
                b.Oa();
                b.P(a.x / 2);
                b.S(a.y / 2)
            }
            var c = this.Da[0];
            b(c);
            var d = a.x / c.za()
              , f = a.y / c.Aa();
            c.N(d > f ? d : f);
            c = this.Da[2];
            b(c);
            d = a.x;
            f = a.y;
            c.N((d < f ? d : f) / c.za() * .5);
            d = this.Da[1];
            b(d);
            d.N(c.Na);
            d.P(d.Ea - .1 * d.za());
            d.S(d.Ha - 1.1 * c.Aa());
            d = this.Da[3];
            d.Ed(0);
            b(d);
            d.N(c.Na);
            d.S(d.Ha + .8 * c.Aa());
            f = this.Da[4];
            b(f);
            f.N(d.Na);
            f.P(d.Ea);
            f.S(d.Ha);
            this.U.Pq();
            this.U.De(this.U.qa.size * c.Na * .5 | 0);
            this.U.Ee();
            this.U.P(d.Ea);
            this.U.S(d.Ha + 1.1 * d.Aa());
            this.U.Oa();
            this.Oi.Xd(.1 * a.x, .03 * a.y);
            this.Oi.ia("v" + lc.So().toString());
            this.Oi.Ee();
            this.Oi.yb(new E(0,0,a.x - 10,a.y - 10), 1, 1)
        },
        m: Jc
    });
    Xf.g = ["122"];
    Xf.prototype = {
        m: Xf
    };
    Oe.g = ["123"];
    Oe.$ = [Xf];
    Oe.prototype = {
        fJ: function(a, b, c) {
            switch (c[1]) {
            case 0:
            case 1:
                throw 0;
            case 2:
                r.play(r.sy),
                a.Hy(),
                a.Te.sa(0),
                a = b,
                a.Hy(),
                a.Te.sa(1),
                a.Qc.I(!1),
                this.eB = !1
            }
        },
        ex: function(a, b, c, d) {
            switch (d[1]) {
            case 0:
            case 1:
                throw 0;
            case 2:
                .5 > c ? (b = this.pI(c / .5),
                a.Te.sa(b)) : (this.eB || (this.eB = !0,
                a.Qc.I(!1),
                b.Qc.I(!0)),
                a = this.qI((c - .5) / .5),
                b.Te.sa(1 - a))
            }
        },
        pJ: function(a, b, c) {
            c == Ya.Ik && (a.wC(),
            b.wC())
        },
        m: Oe
    };
    ub.g = ["124"];
    ub.$ = [xb];
    ub.H = v;
    ub.prototype = x(v.prototype, {
        KN: function() {
            return this.Ca
        },
        sa: function(a) {
            this.Ca.sa(a);
            this.Ka.sa(a);
            return a
        },
        I: function(a) {
            this.Ca.I(a);
            this.Ka.I(a);
            return a
        },
        JN: function() {
            return this.Ca.Na
        },
        N: function(a) {
            this.NA && (this.Ca.N(1),
            this.Ka.N(1),
            this.Ca.ea(),
            this.Ka.ea());
            this.Ca.N(a);
            this.Ka.N(a);
            return a
        },
        ol: function() {
            this.Ca.I(!1);
            this.Ka.I(!1);
            return this
        },
        yk: function() {
            this.Ca.yk();
            this.Ka.yk();
            return this
        },
        xk: function() {
            this.Ca.xk();
            this.Ka.xk();
            return this
        },
        WC: function(a) {
            this.f = a;
            this.Ca.De(a);
            this.Ka.De(a);
            return a
        },
        Ih: function() {
            this.Ca.Ih();
            null != this.Ka && this.Ka.Ih();
            return this
        },
        ia: function(a, b, c) {
            null == c && (c = 200);
            null == b && (b = 8);
            this.lw = b;
            this.jw = c;
            if (this.U == a)
                return this;
            this.U = a;
            b = this.J;
            if (b.c > b.j || b.b > b.i)
                return this;
            this.Ca.ia(a);
            null != this.Ka && this.Ka.ia(a);
            return this
        },
        La: function(a) {
            var b = this.Ca.Na;
            this.Ca.N(1);
            this.J = new E(a.c,a.b,a.j,a.i);
            this.Ca.P(a.c | 0);
            this.Ca.S(a.b | 0);
            this.Ca.Xd(a.j - a.c | 0, a.i - a.b | 0);
            null != this.U && this.Ca.ia(this.U);
            null != this.Ka && (this.Ka.P(this.Ca.Ea),
            this.Ka.S(this.Ca.Ha),
            this.Ka.Xd(a.j - a.c | 0, a.i - a.b | 0),
            null != this.U && this.Ka.ia(this.U));
            this.Ac();
            this.Ca.N(b);
            null != this.Ka && this.Ka.N(b);
            this.yb(a)
        },
        Ac: function() {
            if (-1 != this.f)
                return this;
            this.Ca.lo(this.lw, this.jw);
            null != this.Ka && this.Ka.lo(this.lw, this.jw);
            return this
        },
        ea: function() {
            this.NA = !0;
            this.Ca.ea();
            null != this.Ka && this.Ka.ea()
        },
        af: function(a, b) {
            this.sl = [a, b];
            var c = this.J;
            if (c.c > c.j || c.b > c.i)
                return this;
            this.Ca.yb(this.J, a, b);
            null != this.Ka && this.Ka.yb(this.J, a, b);
            return this
        },
        ya: function() {
            this.Ca.s();
            this.Ca = null;
            null != this.Ka && (this.Ka.s(),
            this.Ka = null);
            v.prototype.ya.call(this)
        },
        yb: function(a) {
            null != this.sl && (this.Ca.yb(a, this.sl[0], this.sl[1]),
            null != this.Ka && this.Ka.yb(a, this.sl[0], this.sl[1]))
        },
        m: ub
    });
    Gd.g = ["125"];
    Fd.g = ["126"];
    Fd.H = v;
    Fd.prototype = x(v.prototype, {
        ya: function() {
            v.prototype.ya.call(this);
            this.cq.s();
            this.cq = null;
            this.iI.s();
            this.uc.s()
        },
        Pa: function() {
            v.prototype.Pa.call(this)
        },
        ra: function(a) {
            v.prototype.ra.call(this, a);
            var b = this.nb;
            b.uf || (b.elapsedTime += a);
            a = b.elapsedTime / b.oc;
            a = this.ih(1 > a ? a : 1);
            this.cq.alpha = .5 * a
        },
        qc: function(a) {
            v.prototype.qc.call(this, a)
        },
        enable: function() {
            Ga.X().subscribe(G(this, this.Rb))
        },
        Rb: function(a) {
            a.action == va.Kg && (a.RJ.unsubscribe(),
            r.play(r.oE),
            r.play(r.sy),
            Db.xj((Ag = J.X(),
            G(Ag, Ag.tK)), 100),
            this.s())
        },
        m: Fd
    });
    Ed.g = ["127"];
    Ed.prototype = {
        s: function() {
            for (var a = this.controllers, b; null != a; )
                b = a.next,
                a.s(),
                a = b
        },
        Uy: function(a) {
            null != this.controllers && (a.next = this.controllers);
            this.controllers = a;
            a.bb = this
        },
        detach: function(a) {
            if (this.controllers == a)
                this.controllers = this.controllers.next;
            else {
                for (var b = this.controllers; b.next != a; )
                    b = b.next;
                b.next = a.next
            }
            a.next = null;
            a.bb = null
        },
        BG: function(a) {
            for (var b = this.controllers; null != b; ) {
                if (b.type == a)
                    return b;
                b = b.next
            }
            return null
        },
        KL: function(a) {
            if (null == this.controllers || !this.bG)
                return !1;
            for (var b = !1, c = this.controllers, d; null != c; )
                d = c.next,
                c.update(a) && (b = !0),
                c = d;
            return b
        },
        m: Ed
    };
    Sa.g = ["128"];
    Sa.$ = [Qc];
    Sa.H = Ed;
    Sa.prototype = x(Ed.prototype, {
        s: function() {
            Ed.prototype.s.call(this);
            null != this.parent && this.parent.removeChild(this);
            this.da = this.parent = null;
            this.local.s();
            this.local = null;
            this.Kc.s();
            this.Jg = this.Kc = null;
            this.kK();
            this.client = this.gc = null;
            this.o = 1024
        },
        Dx: function(a) {
            switch (a[1]) {
            case 0:
                this.o &= -4;
                break;
            case 1:
                this.o &= -3;
                this.o |= 1;
                break;
            case 2:
                this.o |= 2,
                this.o &= -2
            }
            return a
        },
        XB: function(a, b) {
            if (!(0 < (this.o & 1))) {
                0 < (this.o & 2) && (b = !0);
                var c = a.Ml;
                (b || a.$H(this.Jg)) && this.sv(a, b);
                a.Ml = c
            }
        },
        sv: function() {
            throw 0;
        },
        rc: function() {
            throw 0;
        },
        Dj: function() {
            throw 0;
        },
        gr: function(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            this.o |= 2048;
            this.hr(b);
            b && (this.Oh(),
            a && this.lx())
        },
        oD: function(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            if (a && 0 < (this.o & 256))
                for (var c = this.Ja; null != c; )
                    c.oD(a, !1),
                    c = c.da;
            this.Oh();
            b && this.lx()
        },
        hr: function() {
            0 < (this.o & 4) || (this.o &= -9,
            this.o |= 32,
            null != this.parent ? this.Kc.MK(this.parent.Kc, this.local) : this.Kc.of(this.local))
        },
        Oh: function() {
            null != this.parent && (this.parent.o |= 32)
        },
        lx: function() {
            null != this.parent && (this.parent.Oh(),
            this.parent.lx())
        },
        tD: function(a) {
            var b = null == a;
            if (b)
                a = rb.YJ(this);
            else
                for (var c = this.Md, d; null != c; ) {
                    d = c.state;
                    var f = a.a[d.ym];
                    f.V == f.B && f.T();
                    f.a[f.V++] = d;
                    c = c.next
                }
            this.mx(a);
            if (b)
                rb.SF();
            else
                for (b = this.Md; null != b; )
                    --a.a[b.state.ym].V,
                    b = b.next;
            this.o &= -129
        },
        UG: function(a) {
            for (var b = this.Md; null != b; ) {
                if (b.state.type == a)
                    return b.state;
                b = b.next
            }
            return null
        },
        vm: function(a) {
            this.o |= 128;
            if (null == this.Md) {
                null == Cb.Yi && (Cb.Yi = new ed(function() {
                    return new Cb(null)
                }
                ,null,512));
                var b = Cb.Yi;
                b = 0 < b.size ? b.hb[--b.size] : b.Df();
                b.state = a
            } else {
                b = this.Md;
                for (var c = a.type; null != b; ) {
                    if (b.state.type == c) {
                        b.state = a;
                        return
                    }
                    b = b.next
                }
                null == Cb.Yi && (Cb.Yi = new ed(function() {
                    return new Cb(null)
                }
                ,null,512));
                b = Cb.Yi;
                b = 0 < b.size ? b.hb[--b.size] : b.Df();
                b.state = a;
                b.next = this.Md
            }
            this.Md = b
        },
        lK: function(a) {
            this.o |= 128;
            for (var b = this.Md, c = null; null != b; ) {
                if (b.state.type == a) {
                    null != c ? c.next = b.next : this.Md = b.next;
                    b.next = null;
                    a = Cb.Yi;
                    a.size == a.We ? a.Ld(b) : (a.size == a.fd && a.resize(),
                    a.hb[a.size++] = b);
                    break
                }
                c = b;
                b = b.next
            }
        },
        kK: function() {
            this.o |= 128;
            for (var a = this.Md, b; null != a; ) {
                b = a.next;
                a.next = null;
                var c = Cb.Yi;
                c.size == c.We ? c.Ld(a) : (c.size == c.fd && c.resize(),
                c.hb[c.size++] = a);
                a = b
            }
            this.Md = null
        },
        mx: function() {
            throw 0;
        },
        Wg: function() {
            return Sa.ND
        },
        m: Sa
    });
    qb.g = ["129"];
    qb.H = Sa;
    qb.prototype = x(Sa.prototype, {
        s: function() {
            this.yh.s();
            this.yh = null;
            ba.Be(this.cj);
            this.cj = null;
            Sa.prototype.s.call(this)
        },
        Ux: function() {
            this.o |= 64
        },
        rc: function() {
            throw 0;
        },
        Oh: function() {
            0 < (this.o & 16) || 0 == (this.o & 96) || (this.yh.Nx(this.Kc, this.Jg),
            this.o &= -97,
            Sa.prototype.Oh.call(this))
        },
        sv: function(a) {
            null != this.gc && (a = a.cm,
            a.f == a.B && a.T(),
            a.a[a.f++] = this)
        },
        mx: function(a) {
            for (var b, c = 0, d = a.f; c < d; ) {
                var f = c++;
                b = a.a[f];
                0 == b.V ? this.cj[f] = null : (b = b.a[b.V - 1].collapse(b),
                this.cj[f] = b)
            }
        },
        Wg: function() {
            return null != qb.il ? qb.il() : Sa.prototype.Wg.call(this)
        },
        m: qb
    });
    Ne.g = ["130"];
    Ne.H = qb;
    Ne.prototype = x(qb.prototype, {
        Qu: function(a) {
            var b = 0
              , c = 0
              , d = 0
              , f = J.X()
              , g = f.F.viewport
              , e = g.ma();
            switch (this.vh) {
            case 1:
                b = e.c + .6 * (e.j - e.c);
                c = e.b + .72 * (e.i - e.b);
                d = 8 * g.zoom;
                break;
            case 2:
                c = fb.ud(f, Pc).Ne();
                b = c.x;
                c = c.y;
                d = 6 * g.zoom;
                break;
            case 3:
                c = fb.ud(f, Mc).Ne();
                b = c.x;
                c = c.y;
                d = 6 * g.zoom;
                break;
            case 4:
                b = e.c + .45 * (e.j - e.c),
                c = e.b + .9 * (e.i - e.b),
                d = 4 * g.zoom
            }
            f = a.Rl;
            g = f.getContext();
            a.Cf != a.$j && (a.$j = a.Cf,
            g.globalCompositeOperation = a.Cf);
            a.Fd != a.Ci && (a.Ci = a.Fd,
            g.globalAlpha = a.Fd);
            a = f.lb();
            g.setTransform(1, 0, 0, 1, 0, 0);
            g.fillStyle = "rgba(0,0,0," + this.alpha + ")";
            g.beginPath();
            g.rect(0, 0, a.x, a.y);
            g.arc(b, c, d, 0, 2 * Math.PI, !0);
            g.closePath();
            g.fill()
        },
        m: Ne
    });
    Ob.g = ["131"];
    Ob.H = v;
    Ob.prototype = x(v.prototype, {
        ya: function() {
            this.D.s();
            this.D = null
        },
        ra: function(a) {
            v.prototype.ra.call(this, a);
            this.ac += a;
            this.Rp = Math.sin(3 * this.ac) * this.mi().zoom / 4
        },
        qc: function() {
            var a = this.Oc();
            this.D.P(a.x);
            this.D.S(a.y);
            this.D.N(this.mi().zoom / 60);
            switch (this.vh) {
            case 1:
            case 2:
                a = this.D;
                a.S(a.Ha + this.Rp);
                break;
            case 3:
                this.D.Ed(90);
                a = this.D;
                a.P(a.Ea + this.Rp);
                break;
            case 4:
                this.D.Ed(-90),
                a = this.D,
                a.P(a.Ea + this.Rp)
            }
        },
        Ej: function() {
            return "arrow"
        },
        Oc: function() {
            var a = J.X()
              , b = this.mi()
              , c = b.ma()
              , d = new B;
            switch (this.vh) {
            case 1:
                d.x = c.c + .67 * (c.j - c.c);
                d.y = c.b + .48 * (c.i - c.b);
                break;
            case 2:
                a = fb.ud(a, Pc).Ne();
                d.x = a.x;
                d.y = a.y - 4 * b.zoom;
                break;
            case 3:
                a = fb.ud(a, Mc).Ne();
                d.x = a.x + 5 * b.zoom;
                d.y = a.y;
                break;
            case 4:
                d.x = c.c + .45 * (c.j - c.c) - 6 * b.zoom,
                d.y = c.b + .9 * (c.i - c.b)
            }
            return d
        },
        mi: function() {
            return J.X().F.viewport
        },
        m: Ob
    });
    Dd.g = ["132"];
    Dd.H = Ob;
    Dd.prototype = x(Ob.prototype, {
        ya: function() {
            Ob.prototype.ya.call(this);
            this.U.s();
            this.U = null
        },
        Ej: function() {
            return "bubble"
        },
        ra: function(a) {
            var b = this.mi().zoom / 36;
            if (null != this.nb) {
                var c = this.nb;
                c.uf || (c.elapsedTime += a);
                c = c.elapsedTime / c.oc;
                c = 1 > c ? c : 1;
                this.D.sa(Z.Eb(2)(c));
                this.D.N(Z.qj(.1)(c) * b);
                1 == c && (this.nb = null,
                this.U.Ca.zb().alpha(1, .5, Z.Eb(2)))
            } else
                this.D.N(b);
            this.D.xc(a);
            this.U.Ca.xc(a)
        },
        qc: function() {
            var a = this.mi().zoom
              , b = this.Oc();
            this.D.P(b.x);
            this.D.S(b.y);
            b = this.D.ma(this.D.tc());
            var c = -a
              , d = -a;
            b.c -= c;
            b.b -= d;
            b.j += c;
            b.i += d;
            b.i += a;
            this.U.La(b);
            a = 1.1 * a | 0;
            this.U.Ca.PC(.3 * -a);
            this.U.WC(a)
        },
        Oc: function() {
            var a = Ob.prototype.Oc.call(this)
              , b = this.mi().zoom;
            switch (this.vh) {
            case 1:
                a.x -= 2 * b;
                a.y -= 5 * b;
                break;
            case 2:
                a.x -= 8 * b;
                a.y -= 7 * b;
                break;
            case 3:
                a.x += 9 * b;
                a.y += 5 * b;
                break;
            case 4:
                a.x += 4 * b,
                a.y -= 7 * b
            }
            return a
        },
        m: Dd
    });
    Nb.g = ["133"];
    Nb.H = v;
    Nb.prototype = x(v.prototype, {
        ya: function() {
            this.nb = this.Ap = this.Sp = this.tw = null
        },
        Kq: function(a) {
            this.Ap = a;
            return this
        },
        wc: function(a) {
            this.tw = a;
            return this
        },
        ra: function(a) {
            var b = this.nb;
            b.uf || (b.elapsedTime += a);
            a = b.elapsedTime / b.oc;
            a = 1 > a ? a : 1;
            null != this.Ap && (a = this.Ap(a));
            b = this.Jw;
            this.Sp(b + a / 1 * (this.TA - b));
            1 == a && (this.Sp(this.TA),
            a = this.tw,
            this.Ap = this.Sp = this.tw = null,
            this.s(),
            null != a && a())
        },
        m: Nb
    });
    fd.g = ["134"];
    fd.$ = [xb];
    fd.H = v;
    fd.prototype = x(v.prototype, {
        ya: function() {
            this.D = this.fk = null
        },
        La: function(a) {
            this.D.nf(a, Na.Th);
            this.fk.P(a.j - .89 * this.fk.za());
            this.fk.S(a.b + .05 * (a.i - a.b));
            this.fk.N(1);
            this.fk.YC(.15 * this.D.Aa())
        },
        m: fd
    });
    lc.g = ["135"];
    lc.So = function() {
        return new Uf("0.9.42")
    }
    ;
    lc.load = function(a, b) {
        null == b && (b = function() {}
        );
        lc.gI(a, b)
    }
    ;
    lc.gI = function(a, b) {
        function c(a, b) {
            for (var c = 0; c < a.length; ) {
                var d = a[c];
                ++c;
                N.load(d)
            }
            0 == N.gm ? b() : N.wc = function() {
                N.wc = null;
                b()
            }
        }
        function d(a) {
            return t.Hj(a)
        }
        function f(a) {
            return !l.hasOwnProperty(a)
        }
        function g() {
            for (var a = 0, b = t.kv(); a < b.length; ) {
                var c = b[a];
                ++a;
                t.Ev(c) && (l[c] = c)
            }
        }
        for (var e = {}, k = 0, u = [78, 83, 57, 65, 92, 37, 38, 97, 73, 22, 45, 76]; k < u.length; ) {
            var h = u[k];
            ++k;
            e[h] = h
        }
        var l = {};
        k = 0;
        for (u = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 44, 43, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 74, 75, 77, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103]; k < u.length; )
            h = u[k],
            ++k,
            l[h] = h;
        t.gp() && pa.ji(t.Jo(), function(a) {
            return D.Qa(a).toLowerCase() == t.Qg.toLowerCase()
        }) || g();
        k = [78, 83, 57, 65, 92, 37, 38, 97, 73, 22, 45, 76].filter(f).map(d);
        var q = t.kv().filter(function(a) {
            return !e.hasOwnProperty(a)
        }).filter(f).map(d);
        N.WB = function(a, b) {
            a = t.Fj(a);
            -1 != a && t.setData(a, b)
        }
        ;
        c(k, function() {
            a();
            0 == q.length ? b() : c(q, function() {
                b()
            })
        })
    }
    ;
    var Ma = {
        pb: !0,
        ob: ["Aac", "Mp3", "Ogg", "Wav"],
        Gm: ["Aac", 0]
    };
    Ma.Gm.toString = h;
    Ma.Gm.l = Ma;
    Ma.dn = ["Mp3", 1];
    Ma.dn.toString = h;
    Ma.dn.l = Ma;
    Ma.gn = ["Ogg", 2];
    Ma.gn.toString = h;
    Ma.gn.l = Ma;
    Ma.hu = ["Wav", 3];
    Ma.hu.toString = h;
    Ma.hu.l = Ma;
    Ma.Gb = [Ma.Gm, Ma.dn, Ma.gn, Ma.hu];
    var bb = {
        pb: !0,
        ob: ["iPad", "iPod", "iPhone"],
        Xo: ["iPad", 0]
    };
    bb.Xo.toString = h;
    bb.Xo.l = bb;
    bb.Zo = ["iPod", 1];
    bb.Zo.toString = h;
    bb.Zo.l = bb;
    bb.Yo = ["iPhone", 2];
    bb.Yo.toString = h;
    bb.Yo.l = bb;
    bb.Gb = [bb.Xo, bb.Zo, bb.Yo];
    var aa = {
        pb: !0,
        ob: "Android iOs Linux Windows WindowsPhone MacOs ChromeOs Unknown".split(" "),
        Im: ["Android", 0]
    };
    aa.Im.toString = h;
    aa.Im.l = aa;
    aa.yv = function(a) {
        a = ["iOs", 1, a];
        a.l = aa;
        a.toString = h;
        return a
    }
    ;
    aa.Wm = ["Linux", 2];
    aa.Wm.toString = h;
    aa.Wm.l = aa;
    aa.ao = ["Windows", 3];
    aa.ao.toString = h;
    aa.ao.l = aa;
    aa.bo = ["WindowsPhone", 4];
    aa.bo.toString = h;
    aa.bo.l = aa;
    aa.Xm = ["MacOs", 5];
    aa.Xm.toString = h;
    aa.Xm.l = aa;
    aa.Km = ["ChromeOs", 6];
    aa.Km.toString = h;
    aa.Km.l = aa;
    aa.$n = ["Unknown", 7];
    aa.$n.toString = h;
    aa.$n.l = aa;
    aa.Gb = [aa.Im, aa.Wm, aa.ao, aa.bo, aa.Xm, aa.Km, aa.$n];
    H.g = ["136"];
    H.LK = function(a) {
        var b = !1;
        null == b && (b = !1);
        H.OI = !1;
        null == a && (a = function() {
            var a = ua.hH();
            a = null != ea.lang ? a.ad("lang") : a.G.lang;
            null == a && (a = navigator.languages ? navigator.languages[0] : navigator.language || navigator.jO);
            return a
        }());
        null == a && (a = "en-US");
        var c = new V("^([a-z]{2})-([a-z]{2})$","i");
        c.match(a) ? (H.Hf = c.eb(1).toLowerCase(),
        H.PA = c.eb(2).toUpperCase()) : (c = new V("^[a-z]{2}$","i"),
        c.match(a) && (H.Hf = a.toLowerCase(),
        H.PA = "US"));
        if (b)
            try {
                if (a = [],
                0 == a.length)
                    H.Hf = "en";
                else {
                    var d = H.Uz();
                    pa.ji(a, function(a) {
                        return a == d
                    }) || (H.Hf = "en")
                }
            } catch (f) {
                H.Hf = "en"
            }
        null != H.Li && (H.Jp = pa.indexOf(H.Ul, H.Hf))
    }
    ;
    H.Uz = function() {
        switch (H.Hf) {
        case "de":
            return P.uo;
        case "en":
            return P.Ao;
        case "es":
            return P.Bo;
        case "fr":
            return P.Eo;
        case "it":
            return P.kp;
        case "nl":
            return P.pq;
        case "pl":
            return P.yq;
        case "pt":
            return P.Dq;
        case "ru":
            return P.Iq;
        case "tr":
            return P.$q;
        default:
            return null
        }
    }
    ;
    H.zH = function(a, b) {
        a = a.replace(/\r\n/g, "");
        a = a.split("\n");
        var c = 0
          , d = 0
          , f = a.length - 1;
        H.Ll = D.parseInt(a[d++]);
        H.Li = Array((f / (H.Ll + 1) | 0) * H.Ll);
        H.Ul = [];
        H.tB = Array(H.Li.length);
        for (var g = /\\n/g; d < f; ) {
            H.Ul.push(a[d++]);
            for (var e = 0, k = H.Ll; e < k; )
                e++,
                H.Li[c] = a[d++].replace(g, "\n"),
                H.tB[c] = (new V("::(\\w+)::","")).match(H.Li[c]),
                ++c
        }
        pa.ji(H.Ul, function(a) {
            return a == H.Hf
        }) || (H.Hf = "en");
        H.Jp = pa.indexOf(H.Ul, H.Hf);
        if (null != b) {
            a = new cb;
            c = [];
            for (d = 0; d < b.length; )
                f = b[d++],
                g = b[d++],
                null != ea[f] ? a.cc(f, g) : a.G[f] = g,
                c.push(f);
            b = new V(c.join("|"),"");
            c = 0;
            for (d = H.Li.length; c < d; )
                for (f = c++,
                f = H.Li[f]; b.match(f); )
                    g = b.eb(0),
                    f = f.replace(b.r, null != ea[g] ? a.ad(g) : a.G[g])
        }
    }
    ;
    H.translate = function(a) {
        var b = a[1] + H.Jp * H.Ll
          , c = H.Li[b];
        if (null == c)
            return H.Ul[H.Jp] + "?" + a[0];
        if (H.tB[b] && (a = a.slice(2),
        0 < a.length)) {
            b = new V("::(\\w+)::","");
            for (var d = 0; d < a.length; ) {
                var f = a[d];
                ++d;
                b.match(c);
                c = c.replace(b.r, D.Qa(f))
            }
        }
        return c
    }
    ;
    var P = {
        pb: !0,
        ob: "en de fr it es pt tr pl ru nl".split(" "),
        Ao: ["en", 0]
    };
    P.Ao.toString = h;
    P.Ao.l = P;
    P.uo = ["de", 1];
    P.uo.toString = h;
    P.uo.l = P;
    P.Eo = ["fr", 2];
    P.Eo.toString = h;
    P.Eo.l = P;
    P.kp = ["it", 3];
    P.kp.toString = h;
    P.kp.l = P;
    P.Bo = ["es", 4];
    P.Bo.toString = h;
    P.Bo.l = P;
    P.Dq = ["pt", 5];
    P.Dq.toString = h;
    P.Dq.l = P;
    P.$q = ["tr", 6];
    P.$q.toString = h;
    P.$q.l = P;
    P.yq = ["pl", 7];
    P.yq.toString = h;
    P.yq.l = P;
    P.Iq = ["ru", 8];
    P.Iq.toString = h;
    P.Iq.l = P;
    P.pq = ["nl", 9];
    P.pq.toString = h;
    P.pq.l = P;
    P.Gb = [P.Ao, P.uo, P.Eo, P.kp, P.Bo, P.Dq, P.$q, P.yq, P.Iq, P.pq];
    N.g = ["137"];
    N.No = function(a) {
        if (null == N.Je || 0 == N.gm)
            return 1;
        var b = 0;
        if (null != a) {
            for (var c = function(b) {
                for (var c = 0; c < a.length; ) {
                    var d = a[c];
                    ++c;
                    if (-1 != d.indexOf(b))
                        return !0
                }
                return !1
            }, d = 0, f = 0, g = N.Ng; f < g.length; ) {
                var e = g[f];
                ++f;
                c(e.nd.url) && (++d,
                b += e.nd.Zi)
            }
            for (f = N.Je.iterator(); f.ga(); )
                g = f.next(),
                c(g.nd.url) && (++d,
                b += g.nd.Zi);
            for (c = 0; c < a.length; )
                f = a[c],
                ++c,
                t.Uo(t.Fj(f)) && (++d,
                ++b);
            return 0 == d ? 0 : b / d
        }
        d = 0;
        for (c = N.Ng; d < c.length; )
            f = c[d],
            ++d,
            b += f.nd.Zi;
        b += N.Uw;
        return b / N.gm
    }
    ;
    N.Vu = function(a) {
        if (N.Hv(a)) {
            var b = pa.find(N.Je, function(b) {
                return -1 != b.nd.url.indexOf(a)
            });
            null != b && N.Je.oK(b, N.Lu++)
        }
    }
    ;
    N.Hv = function(a) {
        function b(b) {
            return -1 != b.nd.url.indexOf(a)
        }
        return null == N.Je ? !1 : 0 < pa.count(N.Je, b) + pa.count(N.Ng, b)
    }
    ;
    N.load = function(a, b, c) {
        null == c && (c = -1);
        null == N.Je && (N.Je = new Ee,
        N.Ng = []);
        N.Hv(a) || (N.gm++,
        a = new Me(a),
        a.Pf = b,
        a.ba = 0 > c ? N.Lu++ : c,
        2 == N.Ng.length ? N.Je.enqueue(a) : (N.Ng.push(a),
        a.load()))
    }
    ;
    N.stop = function() {
        N.Je.clear()
    }
    ;
    N.yJ = function(a) {
        null != N.WB && N.WB(a.nd.url, a.nd.data);
        null != a.Pf && (a.Pf(a.nd.url, a.nd.data),
        a.Pf = null);
        C.remove(N.Ng, a);
        N.Uw++;
        0 == N.Je.f ? 0 == N.Ng.length && (N.Lu = 0,
        N.gm = 0,
        null != N.wc && N.wc(),
        N.Uw = 0) : (a = N.Je.rz(),
        N.Ng.push(a),
        a.load())
    }
    ;
    Wf.g = ["138"];
    Wf.prototype = {
        m: Wf
    };
    Me.g = ["139"];
    Me.$ = [Wf];
    Me.prototype = {
        load: function() {
            var a = this;
            this.nd.jm = N.stop;
            this.nd.load(function() {
                N.yJ(a);
                a.nd.Pf = null;
                a.nd = null
            })
        },
        m: Me
    };
    Ic.g = ["140"];
    Ic.read = function(a) {
        return Ic.cA().getItem(a)
    }
    ;
    Ic.write = function(a, b) {
        Ic.cA().setItem(a, b)
    }
    ;
    Ic.cA = function() {
        var a = null;
        try {
            a = window.famobi.localStorage
        } catch (b) {
            a = ug.ZG()
        }
        null == a && (a = {
            getItem: function() {
                return null
            },
            setItem: function() {},
            removeItem: function() {}
        });
        return a
    }
    ;
    Vf.g = ["141"];
    Vf.prototype = {
        m: Vf
    };
    var e = {
        pb: !0,
        ob: "Screen_Error_Title Screen_Tournament_Rank Screen_Game_Announcer_GameOver Screen_GameResult_InfoHighScore Screen_TournamentResult_Top3 Screen_Tournament_Countdown_Minutes Screen_Feedback_Submit Screen_SelectBoost_Play Screen_Invite_HasNoFriends Misc_Tooltip_Fullscreen Screen_TournamentResult_Rank Screen_Game_Tutorial_Step2 Screen_BuyLives_PlusLives Screen_SelectBoost_Unlock Screen_GameResult_Title4 Screen_TournamentResult_LowerHalf Time_Minute Screen_Game_Tutorial_Step3mobile Common_Pause Screen_Tournament_Tooltip_TabTournament Misc_MenuBar_Tooltip_GetMoreLives Misc_MenuBar_Tooltip_MoreIn Screen_TournamentResult_Top Screen_Game_Announcer_Ready Misc_Feedback_Bubble_Version4 Screen_BuyCurrency_Tooltip_Proceed Misc_Discount Screen_Tournament_Tooltip_FirstMedal Screen_BuyLives_Tooltip_BuyUnlimited Screen_Game_Tutorial_Step4mobile Screen_Tournament_NewPlayer Screen_Feedback_Input Misc_Feedback_Bubble_Version2 Screen_GameResult_InfoScore Misc_MenuBar_HelpDropDown_Facebook Misc_Booster_Description_Painter Screen_BuyLives_Title_OneLifeLeft Time_Wednesday Screen_TournamentResult_Score Screen_BuyLives_Tooltip_Buy Screen_SelectBoost_Premium Screen_LevelUp_ScoreBonus Screen_RankUp_Continue Screen_BuyLives_Only Misc_Booster_Description_Laser Common_Later Screen_Game_Announcer_Crazy Dialog_Pause_End Screen_GameResult_ScoreBonus Misc_Booster_Description_ExtraTime Screen_LevelUp_Title Screen_RankUp_Info Screen_BuyLives_Info_InfoLives Screen_IntroducingCoins_Title Misc_Booster_Description_Bomb Common_ThousandsSeparator Screen_Tournament_Invite Screen_Tournament_Countdown_Seconds Screen_BuyLaser_Title Screen_TournamentStarted_Title Screen_IntroducingCoins_Banderole Misc_MenuBar_Tooltip_InfoLives Screen_Game_Tutorial_Step1mobile Screen_GameResult_Rewards Misc_PaymentStatus_Success_Title Common_Ok Common_Yes Misc_Booster_Name_Laser Misc_Booster_Description_Locked Screen_Game_Announcer_Fabulous Screen_Feedback_Title Misc_PaymentStatus_Fail_Info Screen_Tournament_Tooltip_SecondMedal Misc_Feedback_Bubble_Version1 Screen_Invite_MoreFriends Dialog_BuyUnlimitedLivesSuccess_Info Screen_Game_Announcer_Fireball Common_Error Time_Saturday Screen_Game_Tutorial_Step4 Misc_PaymentStatus_Info_Continue Common_Tap Screen_Game_Tutorial_Step1 Screen_TournamentResult_Title Time_Sunday Misc_PaymentStatus_Info_Title Screen_LevelUp_Level Screen_Tournament_TabFriends Screen_Tournament_Countdown_Days Screen_Tournament_Tooltip_Online Screen_TournamentResult_Range Common_No Screen_BuyCurrency_ItemName Screen_BuyLives_Title_OutOfLives Screen_Feedback_Fail Time_Thursday Screen_Game_Tutorial_Step3 Screen_BoostUnlocked_Banderole Time_Hours Misc_MenuBar_Tooltip_CoinBalance Misc_PaymentStatus_Success_Info Common_Reload Screen_BuyCurrency_Missing Screen_BuyLives_Title_GetExtraLives Screen_BuyLives_Special Screen_GameResult_Title2 Screen_Tournament_Tooltip_ScrollStart Misc_MenuBar_Tooltip_GetMoreCoins Misc_MenuBar_Tooltip_InfoXp Common_Info Screen_Invite_HasFriends Screen_SelectBoost_Title Misc_MenuBar_HelpDropDown_Support Time_Seconds Screen_Invite_InviteFriends Misc_PaymentStatus_Pending_Title Time_EndsIn Screen_Tournament_Play Misc_Tooltip_ToggleSound Misc_MenuBar_HelpDropDown_Imprint Screen_Error_Info Misc_MenuBar_Tooltip_InfoLevel Time_Monday Misc_MenuBar_HelpDropDown_Terms Time_Second Dialog_Pause_Resume Screen_Tournament_Tooltip_ThirdMedal Time_EndsNow Misc_PaymentStatus_Info_Info Misc_PaymentStatus_Success_Continue Screen_IntroducingCoins_Info Screen_Tournament_TabTournament Misc_MenuBar_Tooltip_LifeBalance Screen_Game_Announcer_Go Misc_PaymentStatus_Fail_Title Screen_Feedback_Info Screen_GameResult_Tooltip_Xp Screen_TournamentResult_Winners Misc_Feedback_Bubble_Version3 Time_Minutes Screen_BuyCurrency_Title Misc_Feedback Misc_Booster_Name_ExtraTime Screen_GameResult_Title3 Screen_GameResult_Tooltip_Coins Misc_PaymentStatus_Fail_Continue Screen_Tournament_Tooltip_TabFriends Time_Tuesday Screen_Tournament_Countdown_Hours Misc_Tooltip_ToggleMusic Misc_PaymentStatus_Pending_Info Screen_Feedback_Success Screen_SelectBoost_Tooltip_Buy Misc_MenuBar_HelpDropDown_Site Misc_MenuBar_Tooltip_InfoCoins Misc_PaymentStatus_Pending_Continue Screen_GameResult_Title1 Screen_BuyLives_Info_InfoUnlimitedLives Screen_Game_Announcer_TimeUp Screen_TournamentStarted_Tournament Misc_Booster_Name_Painter Time_Hour Misc_Tooltip_Help Misc_Booster_Name_Bomb Screen_Game_Announcer_Combo Screen_BuyLives_Info Screen_TournamentStarted_Achievement Dialog_BuyUnlimitedLivesSuccess_Title Screen_Game_Announcer_Wow Screen_Game_Tutorial_Step2mobile Screen_BuyLaser_ItemName Dialog_Pause_Title Time_Friday Screen_BuyCurrency_Continue Screen_RankUp_Title Misc_MenuBar_Tooltip_UnlimitedLives Screen_Tournament_Title".split(" "),
        Ss: ["Screen_Error_Title", 0]
    };
    e.Ss.toString = h;
    e.Ss.l = e;
    e.Gt = ["Screen_Tournament_Rank", 1];
    e.Gt.toString = h;
    e.Gt.l = e;
    e.An = ["Screen_Game_Announcer_GameOver", 2];
    e.An.toString = h;
    e.An.l = e;
    e.qn = ["Screen_GameResult_InfoHighScore", 3];
    e.qn.toString = h;
    e.qn.l = e;
    e.vt = ["Screen_TournamentResult_Top3", 4];
    e.vt.toString = h;
    e.vt.l = e;
    e.Ct = ["Screen_Tournament_Countdown_Minutes", 5];
    e.Ct.toString = h;
    e.Ct.l = e;
    e.Ws = ["Screen_Feedback_Submit", 6];
    e.Ws.toString = h;
    e.Ws.l = e;
    e.Qn = ["Screen_SelectBoost_Play", 7];
    e.Qn.toString = h;
    e.Qn.l = e;
    e.ft = ["Screen_Invite_HasNoFriends", 8];
    e.ft.toString = h;
    e.ft.l = e;
    e.ns = ["Misc_Tooltip_Fullscreen", 9];
    e.ns.toString = h;
    e.ns.l = e;
    e.rt = ["Screen_TournamentResult_Rank", 10];
    e.rt.toString = h;
    e.rt.l = e;
    e.Hn = ["Screen_Game_Tutorial_Step2", 11];
    e.Hn.toString = h;
    e.Hn.l = e;
    e.Ks = ["Screen_BuyLives_PlusLives", 12];
    e.Ks.toString = h;
    e.Ks.l = e;
    e.$E = function(a) {
        a = ["Screen_SelectBoost_Unlock", 13, a];
        a.l = e;
        a.toString = h;
        return a
    }
    ;
    e.wn = ["Screen_GameResult_Title4", 14];
    e.wn.toString = h;
    e.wn.l = e;
    e.pt = ["Screen_TournamentResult_LowerHalf", 15];
    e.pt.toString = h;
    e.pt.l = e;
    e.Yt = ["Time_Minute", 16];
    e.Yt.toString = h;
    e.Yt.l = e;
    e.Kn = ["Screen_Game_Tutorial_Step3mobile", 17];
    e.Kn.toString = h;
    e.Kn.l = e;
    e.rr = ["Common_Pause", 18];
    e.rr.toString = h;
    e.rr.l = e;
    e.Pt = ["Screen_Tournament_Tooltip_TabTournament", 19];
    e.Pt.toString = h;
    e.Pt.l = e;
    e.Tr = ["Misc_MenuBar_Tooltip_GetMoreLives", 20];
    e.Tr.toString = h;
    e.Tr.l = e;
    e.Zr = ["Misc_MenuBar_Tooltip_MoreIn", 21];
    e.Zr.toString = h;
    e.Zr.l = e;
    e.ut = ["Screen_TournamentResult_Top", 22];
    e.ut.toString = h;
    e.ut.l = e;
    e.Cn = ["Screen_Game_Announcer_Ready", 23];
    e.Cn.toString = h;
    e.Cn.l = e;
    e.Lr = ["Misc_Feedback_Bubble_Version4", 24];
    e.Lr.toString = h;
    e.Lr.l = e;
    e.Ds = ["Screen_BuyCurrency_Tooltip_Proceed", 25];
    e.Ds.toString = h;
    e.Ds.l = e;
    e.Gr = ["Misc_Discount", 26];
    e.Gr.toString = h;
    e.Gr.l = e;
    e.Kt = ["Screen_Tournament_Tooltip_FirstMedal", 27];
    e.Kt.toString = h;
    e.Kt.l = e;
    e.Qs = ["Screen_BuyLives_Tooltip_BuyUnlimited", 28];
    e.Qs.toString = h;
    e.Qs.l = e;
    e.Mn = ["Screen_Game_Tutorial_Step4mobile", 29];
    e.Mn.toString = h;
    e.Mn.l = e;
    e.Ft = ["Screen_Tournament_NewPlayer", 30];
    e.Ft.toString = h;
    e.Ft.l = e;
    e.Vs = ["Screen_Feedback_Input", 31];
    e.Vs.toString = h;
    e.Vs.l = e;
    e.Jr = ["Misc_Feedback_Bubble_Version2", 32];
    e.Jr.toString = h;
    e.Jr.l = e;
    e.rn = ["Screen_GameResult_InfoScore", 33];
    e.rn.toString = h;
    e.rn.l = e;
    e.Mr = ["Misc_MenuBar_HelpDropDown_Facebook", 34];
    e.Mr.toString = h;
    e.Mr.l = e;
    e.$m = ["Misc_Booster_Description_Painter", 35];
    e.$m.toString = h;
    e.$m.l = e;
    e.Ns = ["Screen_BuyLives_Title_OneLifeLeft", 36];
    e.Ns.toString = h;
    e.Ns.l = e;
    e.gu = ["Time_Wednesday", 37];
    e.gu.toString = h;
    e.gu.l = e;
    e.st = ["Screen_TournamentResult_Score", 38];
    e.st.toString = h;
    e.st.l = e;
    e.Ps = ["Screen_BuyLives_Tooltip_Buy", 39];
    e.Ps.toString = h;
    e.Ps.l = e;
    e.nt = ["Screen_SelectBoost_Premium", 40];
    e.nt.toString = h;
    e.nt.l = e;
    e.On = ["Screen_LevelUp_ScoreBonus", 41];
    e.On.toString = h;
    e.On.l = e;
    e.jt = ["Screen_RankUp_Continue", 42];
    e.jt.toString = h;
    e.jt.l = e;
    e.Js = ["Screen_BuyLives_Only", 43];
    e.Js.toString = h;
    e.Js.l = e;
    e.Dr = ["Misc_Booster_Description_Laser", 44];
    e.Dr.toString = h;
    e.Dr.l = e;
    e.pr = ["Common_Later", 45];
    e.pr.toString = h;
    e.pr.l = e;
    e.xn = ["Screen_Game_Announcer_Crazy", 46];
    e.xn.toString = h;
    e.xn.l = e;
    e.Pm = ["Dialog_Pause_End", 47];
    e.Pm.toString = h;
    e.Pm.l = e;
    e.ZE = function(a, b) {
        a = ["Screen_GameResult_ScoreBonus", 48, a, b];
        a.l = e;
        a.toString = h;
        return a
    }
    ;
    e.Zm = ["Misc_Booster_Description_ExtraTime", 49];
    e.Zm.toString = h;
    e.Zm.l = e;
    e.Pn = ["Screen_LevelUp_Title", 50];
    e.Pn.toString = h;
    e.Pn.l = e;
    e.kt = ["Screen_RankUp_Info", 51];
    e.kt.toString = h;
    e.kt.l = e;
    e.Hs = ["Screen_BuyLives_Info_InfoLives", 52];
    e.Hs.toString = h;
    e.Hs.l = e;
    e.dt = ["Screen_IntroducingCoins_Title", 53];
    e.dt.toString = h;
    e.dt.l = e;
    e.Ym = ["Misc_Booster_Description_Bomb", 54];
    e.Ym.toString = h;
    e.Ym.l = e;
    e.tr = ["Common_ThousandsSeparator", 55];
    e.tr.toString = h;
    e.tr.l = e;
    e.Et = ["Screen_Tournament_Invite", 56];
    e.Et.toString = h;
    e.Et.l = e;
    e.Dt = ["Screen_Tournament_Countdown_Seconds", 57];
    e.Dt.toString = h;
    e.Dt.l = e;
    e.Fs = ["Screen_BuyLaser_Title", 58];
    e.Fs.toString = h;
    e.Fs.l = e;
    e.yt = ["Screen_TournamentStarted_Title", 59];
    e.yt.toString = h;
    e.yt.l = e;
    e.bt = ["Screen_IntroducingCoins_Banderole", 60];
    e.bt.toString = h;
    e.bt.l = e;
    e.Wr = ["Misc_MenuBar_Tooltip_InfoLives", 61];
    e.Wr.toString = h;
    e.Wr.l = e;
    e.Gn = ["Screen_Game_Tutorial_Step1mobile", 62];
    e.Gn.toString = h;
    e.Gn.l = e;
    e.sn = ["Screen_GameResult_Rewards", 63];
    e.sn.toString = h;
    e.sn.l = e;
    e.ms = ["Misc_PaymentStatus_Success_Title", 64];
    e.ms.toString = h;
    e.ms.l = e;
    e.hj = ["Common_Ok", 65];
    e.hj.toString = h;
    e.hj.l = e;
    e.ur = ["Common_Yes", 66];
    e.ur.toString = h;
    e.ur.l = e;
    e.Fr = ["Misc_Booster_Name_Laser", 67];
    e.Fr.toString = h;
    e.Fr.l = e;
    e.Er = ["Misc_Booster_Description_Locked", 68];
    e.Er.toString = h;
    e.Er.l = e;
    e.yn = ["Screen_Game_Announcer_Fabulous", 69];
    e.yn.toString = h;
    e.yn.l = e;
    e.Ys = ["Screen_Feedback_Title", 70];
    e.Ys.toString = h;
    e.Ys.l = e;
    e.bs = ["Misc_PaymentStatus_Fail_Info", 71];
    e.bs.toString = h;
    e.bs.l = e;
    e.Nt = ["Screen_Tournament_Tooltip_SecondMedal", 72];
    e.Nt.toString = h;
    e.Nt.l = e;
    e.Ir = ["Misc_Feedback_Bubble_Version1", 73];
    e.Ir.toString = h;
    e.Ir.l = e;
    e.it = ["Screen_Invite_MoreFriends", 74];
    e.it.toString = h;
    e.it.l = e;
    e.wr = ["Dialog_BuyUnlimitedLivesSuccess_Info", 75];
    e.wr.toString = h;
    e.wr.l = e;
    e.zn = ["Screen_Game_Announcer_Fireball", 76];
    e.zn.toString = h;
    e.zn.l = e;
    e.nr = ["Common_Error", 77];
    e.nr.toString = h;
    e.nr.l = e;
    e.au = ["Time_Saturday", 78];
    e.au.toString = h;
    e.au.l = e;
    e.Ln = ["Screen_Game_Tutorial_Step4", 79];
    e.Ln.toString = h;
    e.Ln.l = e;
    e.ds = ["Misc_PaymentStatus_Info_Continue", 80];
    e.ds.toString = h;
    e.ds.l = e;
    e.Lm = ["Common_Tap", 81];
    e.Lm.toString = h;
    e.Lm.l = e;
    e.Fn = ["Screen_Game_Tutorial_Step1", 82];
    e.Fn.toString = h;
    e.Fn.l = e;
    e.tt = ["Screen_TournamentResult_Title", 83];
    e.tt.toString = h;
    e.tt.l = e;
    e.du = ["Time_Sunday", 84];
    e.du.toString = h;
    e.du.l = e;
    e.fs = ["Misc_PaymentStatus_Info_Title", 85];
    e.fs.toString = h;
    e.fs.l = e;
    e.Nn = ["Screen_LevelUp_Level", 86];
    e.Nn.toString = h;
    e.Nn.l = e;
    e.Ht = ["Screen_Tournament_TabFriends", 87];
    e.Ht.toString = h;
    e.Ht.l = e;
    e.At = ["Screen_Tournament_Countdown_Days", 88];
    e.At.toString = h;
    e.At.l = e;
    e.Lt = ["Screen_Tournament_Tooltip_Online", 89];
    e.Lt.toString = h;
    e.Lt.l = e;
    e.qt = ["Screen_TournamentResult_Range", 90];
    e.qt.toString = h;
    e.qt.l = e;
    e.qr = ["Common_No", 91];
    e.qr.toString = h;
    e.qr.l = e;
    e.As = ["Screen_BuyCurrency_ItemName", 92];
    e.As.toString = h;
    e.As.l = e;
    e.Os = ["Screen_BuyLives_Title_OutOfLives", 93];
    e.Os.toString = h;
    e.Os.l = e;
    e.Ts = ["Screen_Feedback_Fail", 94];
    e.Ts.toString = h;
    e.Ts.l = e;
    e.eu = ["Time_Thursday", 95];
    e.eu.toString = h;
    e.eu.l = e;
    e.Jn = ["Screen_Game_Tutorial_Step3", 96];
    e.Jn.toString = h;
    e.Jn.l = e;
    e.pn = ["Screen_BoostUnlocked_Banderole", 97];
    e.pn.toString = h;
    e.pn.l = e;
    e.Xt = ["Time_Hours", 98];
    e.Xt.toString = h;
    e.Xt.l = e;
    e.Rr = ["Misc_MenuBar_Tooltip_CoinBalance", 99];
    e.Rr.toString = h;
    e.Rr.l = e;
    e.ls = ["Misc_PaymentStatus_Success_Info", 100];
    e.ls.toString = h;
    e.ls.l = e;
    e.sr = ["Common_Reload", 101];
    e.sr.toString = h;
    e.sr.l = e;
    e.Bs = ["Screen_BuyCurrency_Missing", 102];
    e.Bs.toString = h;
    e.Bs.l = e;
    e.Ms = ["Screen_BuyLives_Title_GetExtraLives", 103];
    e.Ms.toString = h;
    e.Ms.l = e;
    e.Ls = ["Screen_BuyLives_Special", 104];
    e.Ls.toString = h;
    e.Ls.l = e;
    e.un = ["Screen_GameResult_Title2", 105];
    e.un.toString = h;
    e.un.l = e;
    e.Mt = ["Screen_Tournament_Tooltip_ScrollStart", 106];
    e.Mt.toString = h;
    e.Mt.l = e;
    e.Sr = ["Misc_MenuBar_Tooltip_GetMoreCoins", 107];
    e.Sr.toString = h;
    e.Sr.l = e;
    e.Xr = ["Misc_MenuBar_Tooltip_InfoXp", 108];
    e.Xr.toString = h;
    e.Xr.l = e;
    e.or = ["Common_Info", 109];
    e.or.toString = h;
    e.or.l = e;
    e.et = ["Screen_Invite_HasFriends", 110];
    e.et.toString = h;
    e.et.l = e;
    e.Rn = ["Screen_SelectBoost_Title", 111];
    e.Rn.toString = h;
    e.Rn.l = e;
    e.Pr = ["Misc_MenuBar_HelpDropDown_Support", 112];
    e.Pr.toString = h;
    e.Pr.l = e;
    e.cu = ["Time_Seconds", 113];
    e.cu.toString = h;
    e.cu.l = e;
    e.ht = ["Screen_Invite_InviteFriends", 114];
    e.ht.toString = h;
    e.ht.l = e;
    e.js = ["Misc_PaymentStatus_Pending_Title", 115];
    e.js.toString = h;
    e.js.l = e;
    e.Tt = ["Time_EndsIn", 116];
    e.Tt.toString = h;
    e.Tt.l = e;
    e.Sn = ["Screen_Tournament_Play", 117];
    e.Sn.toString = h;
    e.Sn.l = e;
    e.qs = ["Misc_Tooltip_ToggleSound", 118];
    e.qs.toString = h;
    e.qs.l = e;
    e.Nr = ["Misc_MenuBar_HelpDropDown_Imprint", 119];
    e.Nr.toString = h;
    e.Nr.l = e;
    e.Rs = ["Screen_Error_Info", 120];
    e.Rs.toString = h;
    e.Rs.l = e;
    e.Vr = ["Misc_MenuBar_Tooltip_InfoLevel", 121];
    e.Vr.toString = h;
    e.Vr.l = e;
    e.$t = ["Time_Monday", 122];
    e.$t.toString = h;
    e.$t.l = e;
    e.Qr = ["Misc_MenuBar_HelpDropDown_Terms", 123];
    e.Qr.toString = h;
    e.Qr.l = e;
    e.bu = ["Time_Second", 124];
    e.bu.toString = h;
    e.bu.l = e;
    e.Qm = ["Dialog_Pause_Resume", 125];
    e.Qm.toString = h;
    e.Qm.l = e;
    e.Qt = ["Screen_Tournament_Tooltip_ThirdMedal", 126];
    e.Qt.toString = h;
    e.Qt.l = e;
    e.Ut = ["Time_EndsNow", 127];
    e.Ut.toString = h;
    e.Ut.l = e;
    e.es = ["Misc_PaymentStatus_Info_Info", 128];
    e.es.toString = h;
    e.es.l = e;
    e.ks = ["Misc_PaymentStatus_Success_Continue", 129];
    e.ks.toString = h;
    e.ks.l = e;
    e.ct = ["Screen_IntroducingCoins_Info", 130];
    e.ct.toString = h;
    e.ct.l = e;
    e.It = ["Screen_Tournament_TabTournament", 131];
    e.It.toString = h;
    e.It.l = e;
    e.Yr = ["Misc_MenuBar_Tooltip_LifeBalance", 132];
    e.Yr.toString = h;
    e.Yr.l = e;
    e.Bn = ["Screen_Game_Announcer_Go", 133];
    e.Bn.toString = h;
    e.Bn.l = e;
    e.cs = ["Misc_PaymentStatus_Fail_Title", 134];
    e.cs.toString = h;
    e.cs.l = e;
    e.Us = ["Screen_Feedback_Info", 135];
    e.Us.toString = h;
    e.Us.l = e;
    e.$s = ["Screen_GameResult_Tooltip_Xp", 136];
    e.$s.toString = h;
    e.$s.l = e;
    e.wt = ["Screen_TournamentResult_Winners", 137];
    e.wt.toString = h;
    e.wt.l = e;
    e.Kr = ["Misc_Feedback_Bubble_Version3", 138];
    e.Kr.toString = h;
    e.Kr.l = e;
    e.Zt = ["Time_Minutes", 139];
    e.Zt.toString = h;
    e.Zt.l = e;
    e.Cs = ["Screen_BuyCurrency_Title", 140];
    e.Cs.toString = h;
    e.Cs.l = e;
    e.Hr = ["Misc_Feedback", 141];
    e.Hr.toString = h;
    e.Hr.l = e;
    e.bn = ["Misc_Booster_Name_ExtraTime", 142];
    e.bn.toString = h;
    e.bn.l = e;
    e.vn = ["Screen_GameResult_Title3", 143];
    e.vn.toString = h;
    e.vn.l = e;
    e.Zs = ["Screen_GameResult_Tooltip_Coins", 144];
    e.Zs.toString = h;
    e.Zs.l = e;
    e.as = ["Misc_PaymentStatus_Fail_Continue", 145];
    e.as.toString = h;
    e.as.l = e;
    e.Ot = ["Screen_Tournament_Tooltip_TabFriends", 146];
    e.Ot.toString = h;
    e.Ot.l = e;
    e.fu = ["Time_Tuesday", 147];
    e.fu.toString = h;
    e.fu.l = e;
    e.Bt = ["Screen_Tournament_Countdown_Hours", 148];
    e.Bt.toString = h;
    e.Bt.l = e;
    e.ps = ["Misc_Tooltip_ToggleMusic", 149];
    e.ps.toString = h;
    e.ps.l = e;
    e.hs = ["Misc_PaymentStatus_Pending_Info", 150];
    e.hs.toString = h;
    e.hs.l = e;
    e.Xs = ["Screen_Feedback_Success", 151];
    e.Xs.toString = h;
    e.Xs.l = e;
    e.ot = ["Screen_SelectBoost_Tooltip_Buy", 152];
    e.ot.toString = h;
    e.ot.l = e;
    e.Or = ["Misc_MenuBar_HelpDropDown_Site", 153];
    e.Or.toString = h;
    e.Or.l = e;
    e.Ur = ["Misc_MenuBar_Tooltip_InfoCoins", 154];
    e.Ur.toString = h;
    e.Ur.l = e;
    e.gs = ["Misc_PaymentStatus_Pending_Continue", 155];
    e.gs.toString = h;
    e.gs.l = e;
    e.tn = ["Screen_GameResult_Title1", 156];
    e.tn.toString = h;
    e.tn.l = e;
    e.Is = ["Screen_BuyLives_Info_InfoUnlimitedLives", 157];
    e.Is.toString = h;
    e.Is.l = e;
    e.Dn = ["Screen_Game_Announcer_TimeUp", 158];
    e.Dn.toString = h;
    e.Dn.l = e;
    e.zt = ["Screen_TournamentStarted_Tournament", 159];
    e.zt.toString = h;
    e.zt.l = e;
    e.cn = ["Misc_Booster_Name_Painter", 160];
    e.cn.toString = h;
    e.cn.l = e;
    e.Wt = ["Time_Hour", 161];
    e.Wt.toString = h;
    e.Wt.l = e;
    e.os = ["Misc_Tooltip_Help", 162];
    e.os.toString = h;
    e.os.l = e;
    e.an = ["Misc_Booster_Name_Bomb", 163];
    e.an.toString = h;
    e.an.l = e;
    e.at = ["Screen_Game_Announcer_Combo", 164];
    e.at.toString = h;
    e.at.l = e;
    e.Gs = ["Screen_BuyLives_Info", 165];
    e.Gs.toString = h;
    e.Gs.l = e;
    e.xt = ["Screen_TournamentStarted_Achievement", 166];
    e.xt.toString = h;
    e.xt.l = e;
    e.xr = ["Dialog_BuyUnlimitedLivesSuccess_Title", 167];
    e.xr.toString = h;
    e.xr.l = e;
    e.En = ["Screen_Game_Announcer_Wow", 168];
    e.En.toString = h;
    e.En.l = e;
    e.In = ["Screen_Game_Tutorial_Step2mobile", 169];
    e.In.toString = h;
    e.In.l = e;
    e.Es = ["Screen_BuyLaser_ItemName", 170];
    e.Es.toString = h;
    e.Es.l = e;
    e.Rm = ["Dialog_Pause_Title", 171];
    e.Rm.toString = h;
    e.Rm.l = e;
    e.Vt = ["Time_Friday", 172];
    e.Vt.toString = h;
    e.Vt.l = e;
    e.zs = ["Screen_BuyCurrency_Continue", 173];
    e.zs.toString = h;
    e.zs.l = e;
    e.mt = ["Screen_RankUp_Title", 174];
    e.mt.toString = h;
    e.mt.l = e;
    e.$r = ["Misc_MenuBar_Tooltip_UnlimitedLives", 175];
    e.$r.toString = h;
    e.$r.l = e;
    e.Jt = ["Screen_Tournament_Title", 176];
    e.Jt.toString = h;
    e.Jt.l = e;
    e.Gb = [e.Ss, e.Gt, e.An, e.qn, e.vt, e.Ct, e.Ws, e.Qn, e.ft, e.ns, e.rt, e.Hn, e.Ks, e.wn, e.pt, e.Yt, e.Kn, e.rr, e.Pt, e.Tr, e.Zr, e.ut, e.Cn, e.Lr, e.Ds, e.Gr, e.Kt, e.Qs, e.Mn, e.Ft, e.Vs, e.Jr, e.rn, e.Mr, e.$m, e.Ns, e.gu, e.st, e.Ps, e.nt, e.On, e.jt, e.Js, e.Dr, e.pr, e.xn, e.Pm, e.Zm, e.Pn, e.kt, e.Hs, e.dt, e.Ym, e.tr, e.Et, e.Dt, e.Fs, e.yt, e.bt, e.Wr, e.Gn, e.sn, e.ms, e.hj, e.ur, e.Fr, e.Er, e.yn, e.Ys, e.bs, e.Nt, e.Ir, e.it, e.wr, e.zn, e.nr, e.au, e.Ln, e.ds, e.Lm, e.Fn, e.tt, e.du, e.fs, e.Nn, e.Ht, e.At, e.Lt, e.qt, e.qr, e.As, e.Os, e.Ts, e.eu, e.Jn, e.pn, e.Xt, e.Rr, e.ls, e.sr, e.Bs, e.Ms, e.Ls, e.un, e.Mt, e.Sr, e.Xr, e.or, e.et, e.Rn, e.Pr, e.cu, e.ht, e.js, e.Tt, e.Sn, e.qs, e.Nr, e.Rs, e.Vr, e.$t, e.Qr, e.bu, e.Qm, e.Qt, e.Ut, e.es, e.ks, e.ct, e.It, e.Yr, e.Bn, e.cs, e.Us, e.$s, e.wt, e.Kr, e.Zt, e.Cs, e.Hr, e.bn, e.vn, e.Zs, e.as, e.Ot, e.fu, e.Bt, e.ps, e.hs, e.Xs, e.ot, e.Or, e.Ur, e.gs, e.tn, e.Is, e.Dn, e.zt, e.cn, e.Wt, e.os, e.an, e.at, e.Gs, e.xt, e.xr, e.En, e.In, e.Es, e.Rm, e.Vt, e.zs, e.mt, e.$r, e.Jt];
    Uf.g = ["142"];
    Uf.prototype = {
        toString: function() {
            return "" + this.SI + "." + this.YI + "." + this.JJ
        },
        m: Uf
    };
    var uc = {
        pb: !0,
        ob: ["SD", "HD"],
        ys: ["SD", 0]
    };
    uc.ys.toString = h;
    uc.ys.l = uc;
    uc.zr = ["HD", 1];
    uc.zr.toString = h;
    uc.zr.l = uc;
    uc.Gb = [uc.ys, uc.zr];
    Yb.g = ["143"];
    Yb.prototype = {
        load: function(a, b) {
            var c = this;
            this.Pf = a;
            this.jm = b;
            a = "";
            var d = new V("\\.(\\w+)$","g");
            d.match(this.url) && (a = d.eb(1));
            b = t.Jo();
            d = [];
            for (var f = 0; f < b.length; ) {
                var g = b[f];
                ++f;
                d.push(D.Qa(g).toLowerCase())
            }
            d = new V("(?:" + d.join("|") + ")","");
            0 < b.length && d.match(a) ? t.gp() && this.ey(this.url, "arraybuffer", function(a) {
                O.getContext().decodeAudioData(a, function(a) {
                    c.wc(c.url, a)
                }, function() {
                    c.wc(c.url, "decode audio data failed")
                })
            }) : (new V("(?:png|jpg)","")).match(a) ? (this.Zj = window.document.createElement("img"),
            this.Zj.addEventListener("load", G(this, this.YB)),
            Yb.HA ? this.ey(this.url, "blob", function(a) {
                c.Zj.src = Yb.QI.createObjectURL(a)
            }) : (a = "" + this.url + "?v=",
            b = D.Qa(lc.So()),
            this.Zj.src = a + b)) : (b = "arraybuffer",
            (new V(Yb.aF.join("|"),"")).match(a) && (b = "text"),
            this.ey(this.url, b, function(a) {
                c.wc(c.url, a)
            }))
        },
        wc: function(a, b) {
            this.data = b;
            this.Pf();
            this.Pf = null
        },
        YB: function() {
            this.Zj.removeEventListener("load", G(this, this.YB));
            this.wc(this.url, this.Zj);
            this.Zj = null
        },
        ey: function(a, b, c) {
            var d = this;
            var f = 1 == ua.nv()[1] && 6 == ua.jA()[0];
            var g = new XMLHttpRequest;
            g.onerror = function() {
                null != d.jm && d.jm()
            }
            ;
            g.onload = function() {
                if (404 == g.status)
                    null != d.jm && d.jm();
                else {
                    var a = g.response;
                    null == a ? a = g.responseText : f && "blob" == b && (a = new Blob([g.response]));
                    g.onerror = g.onload = null;
                    c(a)
                }
            }
            ;
            try {
                var e = "" + a + "?v=" + D.Qa(lc.So());
                g.open("GET", e, !0);
                g.responseType = f && "blob" == b ? "arraybuffer" : b;
                g.send()
            } catch (k) {}
            return g
        },
        OH: function() {
            if (ua.NH())
                return !1;
            try {
                var a = new XMLHttpRequest;
                a.responseType = "blob";
                a.open("GET", ".", !0);
                return "" == a.responseType && 1 == ua.nv()[1] && 6 == ua.jA()[0] ? !0 : "blob" == a.responseType
            } catch (b) {
                return !1
            }
        },
        m: Yb
    };
    Tf.g = ["144"];
    Tf.prototype = {
        m: Tf
    };
    Db.g = ["145"];
    Db.xj = function(a, b) {
        var c = new Db(b);
        c.Xb = function() {
            c.stop();
            a()
        }
    }
    ;
    Db.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id),
            this.id = null)
        },
        Xb: function() {},
        m: Db
    };
    Ka.g = ["146"];
    Ka.sN = function(a) {
        return new Ka(new Kb(a))
    }
    ;
    Ka.OB = function(a) {
        for (var b = [], c = 0; c < a.length; ) {
            var d = a.charCodeAt(c++);
            55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023);
            127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18),
            b.push(128 | d >> 12 & 63)),
            b.push(128 | d >> 6 & 63)),
            b.push(128 | d & 63))
        }
        return new Ka((new ke(b)).buffer)
    }
    ;
    Ka.Ww = function(a) {
        var b = a.wH;
        return null != b ? b : new Ka(a)
    }
    ;
    Ka.xN = function(a, b) {
        return a.LF[b]
    }
    ;
    Ka.prototype = {
        sub: function(a, b) {
            if (0 > a || 0 > b || a + b > this.length)
                throw 0;
            return new Ka(this.C.buffer.slice(a + this.C.byteOffset, a + this.C.byteOffset + b))
        },
        dA: function(a, b) {
            if (0 > a || 0 > b || a + b > this.length)
                throw 0;
            var c = ""
              , d = this.C
              , f = String.fromCharCode
              , g = a;
            for (a += b; g < a; )
                if (b = d[g++],
                128 > b) {
                    if (0 == b)
                        break;
                    c += f(b)
                } else if (224 > b)
                    c += f((b & 63) << 6 | d[g++] & 127);
                else if (240 > b) {
                    var e = d[g++];
                    c += f((b & 31) << 12 | (e & 127) << 6 | d[g++] & 127)
                } else {
                    e = d[g++];
                    var k = d[g++];
                    b = (b & 15) << 18 | (e & 127) << 12 | (k & 127) << 6 | d[g++] & 127;
                    c += f((b >> 10) + 55232);
                    c += f(b & 1023 | 56320)
                }
            return c
        },
        toString: function() {
            return this.dA(0, this.length)
        },
        m: Ka
    };
    Vc.g = ["147"];
    Vc.decode = function(a, b) {
        null == b && (b = !0);
        if (b)
            for (; 61 == C.kf(a, a.length - 1); )
                a = C.substr(a, 0, -1);
        return (new Sf(Vc.CD)).iG(Ka.OB(a))
    }
    ;
    Sf.g = ["148"];
    Sf.prototype = {
        JH: function() {
            for (var a = [], b = 0; 256 > b; ) {
                var c = b++;
                a[c] = -1
            }
            b = 0;
            for (c = this.fi.length; b < c; ) {
                var d = b++;
                a[this.fi.C[d]] = d
            }
            this.gD = a
        },
        iG: function(a) {
            var b = this.ZI;
            null == this.gD && this.JH();
            for (var c = this.gD, d = a.length * b >> 3, f = new Ka(new Kb(d)), g = 0, e = 0, k = 0, u = 0; u < d; ) {
                for (; 8 > e; ) {
                    e += b;
                    g <<= b;
                    var h = c[a.C[k++]];
                    if (-1 == h)
                        throw 0;
                    g |= h
                }
                e -= 8;
                f.C[u++] = g >> e & 255
            }
            return f
        },
        m: Sf
    };
    Le.g = ["149"];
    Le.prototype = {
        add: function(a) {
            a = new Rf(a,null);
            null == this.G ? this.G = a : this.q.next = a;
            this.q = a;
            this.length++
        },
        first: function() {
            return null == this.G ? null : this.G.item
        },
        iterator: function() {
            return new Qf(this.G)
        },
        m: Le
    };
    Rf.g = ["150"];
    Rf.prototype = {
        m: Rf
    };
    Qf.g = ["151"];
    Qf.prototype = {
        ga: function() {
            return null != this.head
        },
        next: function() {
            var a = this.head.item;
            this.head = this.head.next;
            return a
        },
        m: Qf
    };
    Pf.g = ["152"];
    Pf.prototype = {
        ga: function() {
            return this.index < this.count
        },
        next: function() {
            var a = this.map
              , b = this.keys[this.index++];
            return null != ea[b] ? a.ad(b) : a.G[b]
        },
        m: Pf
    };
    cb.g = ["153"];
    cb.$ = [vg];
    cb.prototype = {
        cc: function(a, b) {
            null == this.Eh && (this.Eh = {});
            this.Eh["$" + a] = b
        },
        ad: function(a) {
            return null == this.Eh ? null : this.Eh["$" + a]
        },
        fl: function(a) {
            return null == this.Eh ? !1 : this.Eh.hasOwnProperty("$" + a)
        },
        keys: function() {
            return C.xd(this.Ry())
        },
        Ry: function() {
            var a = [], b;
            for (b in this.G)
                this.G.hasOwnProperty(b) && a.push(b);
            if (null != this.Eh)
                for (b in this.Eh)
                    36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        m: cb
    };
    Of.g = ["154"];
    Of.prototype = {
        sF: function(a) {
            this.mb == this.size && this.T(1);
            this.view.setUint8(this.mb++, a)
        },
        T: function(a) {
            var b = this.mb + a;
            for (a = 0 == this.size ? 16 : this.size; a < b; )
                a = 3 * a >> 1;
            b = new Kb(a);
            var c = new ke(b);
            0 < this.size && c.set(this.CL);
            this.size = a;
            this.buffer = b;
            this.CL = c;
            this.view = new zg(this.buffer)
        },
        RG: function() {
            if (0 == this.size)
                return new Ka(new Kb(0));
            var a = new Ka(this.buffer);
            a.length = this.mb;
            return a
        },
        m: Of
    };
    Ke.g = ["155"];
    Ke.prototype = {
        ca: function() {
            throw 0;
        },
        oC: function(a, b, c) {
            var d = c
              , f = a.C;
            if (0 > b || 0 > c || b + c > a.length)
                throw 0;
            try {
                for (; 0 < d; )
                    f[b] = this.ca(),
                    ++b,
                    --d
            } catch (g) {
                if (!((g instanceof Fc ? g.oa : g)instanceof Nf))
                    throw g;
            }
            return c - d
        },
        SK: function(a) {
            return this.Yk = a
        },
        cK: function(a, b, c) {
            for (; 0 < c; ) {
                var d = this.oC(a, b, c);
                if (0 == d)
                    throw 0;
                b += d;
                c -= d
            }
        },
        pC: function(a) {
            for (var b = new Of, c; ; ) {
                c = this.ca();
                if (c == a)
                    break;
                b.sF(c)
            }
            return b.RG().toString()
        },
        bK: function() {
            var a = this.Vd()
              , b = this.Vd();
            return this.Yk ? Ia.xv(b, a) : Ia.xv(a, b)
        },
        bc: function() {
            var a = this.ca()
              , b = this.ca();
            a = this.Yk ? b | a << 8 : a | b << 8;
            return 0 != (a & 32768) ? a - 65536 : a
        },
        Rf: function() {
            var a = this.ca()
              , b = this.ca();
            return this.Yk ? b | a << 8 : a | b << 8
        },
        dK: function() {
            var a = this.ca()
              , b = this.ca()
              , c = this.ca();
            a = this.Yk ? c | b << 8 | a << 16 : a | b << 8 | c << 16;
            return 0 != (a & 8388608) ? a - 16777216 : a
        },
        Vd: function() {
            var a = this.ca()
              , b = this.ca()
              , c = this.ca()
              , d = this.ca();
            return this.Yk ? d | c << 8 | b << 16 | a << 24 : a | b << 8 | c << 16 | d << 24
        },
        px: function(a) {
            var b = new Ka(new Kb(a));
            this.cK(b, 0, a);
            return b.toString()
        },
        m: Ke
    };
    Wc.g = ["156"];
    Wc.H = Ke;
    Wc.prototype = x(Ke.prototype, {
        ca: function() {
            if (0 == this.wf)
                throw 0;
            this.wf--;
            return this.C[this.mb++]
        },
        oC: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length)
                throw 0;
            if (0 == this.wf && 0 < c)
                throw 0;
            this.wf < c && (c = this.wf);
            var d = this.C;
            a = a.C;
            for (var f = 0, g = c; f < g; ) {
                var e = f++;
                a[b + e] = d[this.mb + e]
            }
            this.mb += c;
            this.wf -= c;
            return c
        },
        m: Wc
    });
    Nf.g = ["157"];
    Nf.prototype = {
        toString: function() {
            return "Eof"
        },
        m: Nf
    };
    var db = {
        pb: !0,
        ob: ["Blocked", "Overflow", "OutsideBounds", "Custom"],
        lr: ["Blocked", 0]
    };
    db.lr.toString = h;
    db.lr.l = db;
    db.ws = ["Overflow", 1];
    db.ws.toString = h;
    db.ws.l = db;
    db.vs = ["OutsideBounds", 2];
    db.vs.toString = h;
    db.vs.l = db;
    db.WL = function(a) {
        a = ["Custom", 3, a];
        a.l = db;
        a.toString = h;
        return a
    }
    ;
    db.Gb = [db.lr, db.ws, db.vs];
    Ia.g = ["158"];
    Ia.xH = function(a) {
        Ia.tf.setInt32(0, a, !0);
        return Ia.tf.getFloat32(0, !0)
    }
    ;
    Ia.FG = function(a) {
        Ia.tf.setFloat32(0, a, !0);
        return Ia.tf.getInt32(0, !0)
    }
    ;
    Ia.xv = function(a, b) {
        Ia.tf.setInt32(0, a, !0);
        Ia.tf.setInt32(4, b, !0);
        return Ia.tf.getFloat64(0, !0)
    }
    ;
    Ia.kG = function(a) {
        var b = Ia.yH;
        Ia.tf.setFloat64(0, a, !0);
        b.low = Ia.tf.getInt32(0, !0);
        b.high = Ia.tf.getInt32(4, !0);
        return b
    }
    ;
    var Lg = {
        g: ["159"],
        LG: function(a, b, c) {
            null == b && (b = 0);
            null == c && (c = a.length - b >> 2);
            return new Int32Array(a.C.HF,b,c)
        }
    };
    Je.g = ["160"];
    Je.Ij = function(a) {
        a = Je.$G(a);
        return null == a || null == a.zh ? {} : a.zh
    }
    ;
    Je.$G = function(a) {
        return a.ci
    }
    ;
    var od = {
        g: ["161"],
        resolve: function(a, b) {
            a = a.Ru(b).next();
            if (null == a)
                throw 0;
            if (a.nodeType != z.Document && a.nodeType != z.Element)
                throw 0;
            return a
        }
    }
      , eb = {
        g: ["162"],
        resolve: function(a, b) {
            if (a.nodeType == z.Document)
                throw 0;
            a = a.get(b);
            if (null == a)
                throw 0;
            return a
        }
    }
      , Og = {
        g: ["163"],
        resolve: function(a, b) {
            return a.Ru(b).ga()
        }
    }
      , Hg = {
        g: ["164"],
        resolve: function(a, b) {
            var c = [];
            for (a = a.Ru(b); a.ga(); ) {
                b = a.next();
                if (b.nodeType != z.Document && b.nodeType != z.Element)
                    throw 0;
                c.push(b)
            }
            return c
        }
    };
    Hc.g = ["166"];
    Hc.parse = function(a, b) {
        null == b && (b = !1);
        var c = z.createDocument();
        Hc.vz(a, b, 0, c);
        return c
    }
    ;
    Hc.vz = function(a, b, c, d) {
        null == c && (c = 0);
        for (var f = null, g = 1, e = 1, k = null, u = 0, h = 0, l = 0, q = a.charCodeAt(c), p = new Gc, m = 1, r = -1; q == q; ) {
            switch (g) {
            case 0:
                switch (q) {
                case 9:
                case 10:
                case 13:
                case 32:
                    break;
                default:
                    g = e;
                    continue
                }
                break;
            case 1:
                if (60 == q)
                    g = 0,
                    e = 2;
                else {
                    u = c;
                    g = 13;
                    continue
                }
                break;
            case 2:
                switch (q) {
                case 33:
                    if (91 == a.charCodeAt(c + 1)) {
                        c += 2;
                        if ("CDATA[" != C.substr(a, c, 6).toUpperCase())
                            throw 0;
                        c += 5;
                        g = 17
                    } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                        if ("OCTYPE" != C.substr(a, c + 2, 6).toUpperCase())
                            throw 0;
                        c += 8;
                        g = 16
                    } else {
                        if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2))
                            throw 0;
                        c += 2;
                        g = 15
                    }
                    u = c + 1;
                    break;
                case 47:
                    if (null == d)
                        throw 0;
                    u = c + 1;
                    g = 0;
                    e = 10;
                    break;
                case 63:
                    g = 14;
                    u = c;
                    break;
                default:
                    g = 3;
                    u = c;
                    continue
                }
                break;
            case 3:
                if (!(97 <= q && 122 >= q || 65 <= q && 90 >= q || 48 <= q && 57 >= q || 58 == q || 46 == q || 95 == q || 45 == q)) {
                    if (c == u)
                        throw 0;
                    f = z.createElement(C.substr(a, u, c - u));
                    d.Hb(f);
                    ++h;
                    g = 0;
                    e = 4;
                    continue
                }
                break;
            case 4:
                switch (q) {
                case 47:
                    g = 11;
                    break;
                case 62:
                    g = 9;
                    break;
                default:
                    g = 5;
                    u = c;
                    continue
                }
                break;
            case 5:
                if (!(97 <= q && 122 >= q || 65 <= q && 90 >= q || 48 <= q && 57 >= q || 58 == q || 46 == q || 95 == q || 45 == q)) {
                    if (u == c)
                        throw 0;
                    k = C.substr(a, u, c - u);
                    if (f.ji(k))
                        throw 0;
                    g = 0;
                    e = 6;
                    continue
                }
                break;
            case 6:
                if (61 == q)
                    g = 0,
                    e = 7;
                else
                    throw 0;
                break;
            case 7:
                switch (q) {
                case 34:
                case 39:
                    p = new Gc;
                    g = 8;
                    u = c + 1;
                    r = q;
                    break;
                default:
                    throw 0;
                }
                break;
            case 8:
                switch (q) {
                case 38:
                    m = c - u;
                    p.C += null == m ? C.substr(a, u, null) : C.substr(a, u, m);
                    g = 18;
                    m = 8;
                    u = c + 1;
                    break;
                case 60:
                case 62:
                    if (b)
                        throw 0;
                    q == r && (e = c - u,
                    p.C += null == e ? C.substr(a, u, null) : C.substr(a, u, e),
                    e = p.C,
                    p = new Gc,
                    f.set(k, e),
                    g = 0,
                    e = 4);
                    break;
                default:
                    q == r && (e = c - u,
                    p.C += null == e ? C.substr(a, u, null) : C.substr(a, u, e),
                    e = p.C,
                    p = new Gc,
                    f.set(k, e),
                    g = 0,
                    e = 4)
                }
                break;
            case 9:
                u = c = Hc.vz(a, b, c, f);
                g = 1;
                break;
            case 10:
                if (!(97 <= q && 122 >= q || 65 <= q && 90 >= q || 48 <= q && 57 >= q || 58 == q || 46 == q || 95 == q || 45 == q)) {
                    if (u == c)
                        throw 0;
                    e = C.substr(a, u, c - u);
                    if (d.nodeType != z.Element)
                        throw 0;
                    if (e != d.nodeName)
                        throw 0;
                    g = 0;
                    e = 12;
                    continue
                }
                break;
            case 11:
                if (62 == q)
                    g = 1;
                else
                    throw 0;
                break;
            case 12:
                if (62 == q)
                    return 0 == h && d.Hb(z.ro("")),
                    c;
                throw 0;
            case 13:
                60 == q ? (e = c - u,
                p.C += null == e ? C.substr(a, u, null) : C.substr(a, u, e),
                e = z.ro(p.C),
                p = new Gc,
                d.Hb(e),
                ++h,
                g = 0,
                e = 2) : 38 == q && (m = c - u,
                p.C += null == m ? C.substr(a, u, null) : C.substr(a, u, m),
                g = 18,
                m = 13,
                u = c + 1);
                break;
            case 14:
                63 == q && 62 == a.charCodeAt(c + 1) && (++c,
                d.Hb(z.createProcessingInstruction(C.substr(a, u + 1, c - u - 2))),
                ++h,
                g = 1);
                break;
            case 15:
                45 == q && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.Hb(z.createComment(C.substr(a, u, c - u))),
                ++h,
                c += 2,
                g = 1);
                break;
            case 16:
                91 == q ? ++l : 93 == q ? --l : 62 == q && 0 == l && (d.Hb(z.eG(C.substr(a, u, c - u))),
                ++h,
                g = 1);
                break;
            case 17:
                93 == q && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (q = z.dG(C.substr(a, u, c - u)),
                d.Hb(q),
                ++h,
                c += 2,
                g = 1);
                break;
            case 18:
                if (59 == q) {
                    u = C.substr(a, u, c - u);
                    if (35 == u.charCodeAt(0))
                        u = 120 == u.charCodeAt(1) ? D.parseInt("0" + C.substr(u, 1, u.length - 1)) : D.parseInt(C.substr(u, 1, u.length - 1)),
                        p.C += String.fromCharCode(u);
                    else if (q = Hc.Ez,
                    null != ea[u] ? q.fl(u) : q.G.hasOwnProperty(u))
                        q = Hc.Ez,
                        p.C += D.Qa(null != ea[u] ? q.ad(u) : q.G[u]);
                    else {
                        if (b)
                            throw 0;
                        p.C += D.Qa("&" + u + ";")
                    }
                    u = c + 1;
                    g = m
                } else if (!(97 <= q && 122 >= q || 65 <= q && 90 >= q || 48 <= q && 57 >= q || 58 == q || 46 == q || 95 == q || 45 == q) && 35 != q) {
                    if (b)
                        throw 0;
                    p.C += "&";
                    q = c - u;
                    p.C += null == q ? C.substr(a, u, null) : C.substr(a, u, q);
                    u = c--;
                    g = m
                }
            }
            q = a.charCodeAt(++c)
        }
        1 == g && (u = c,
        g = 13);
        if (13 == g) {
            if (c != u || 0 == h)
                b = c - u,
                p.C += null == b ? C.substr(a, u, null) : C.substr(a, u, b),
                d.Hb(z.ro(p.C));
            return c
        }
        if (!b && 18 == g && 13 == m)
            return p.C += "&",
            b = c - u,
            p.C += null == b ? C.substr(a, u, null) : C.substr(a, u, b),
            d.Hb(z.ro(p.C)),
            c;
        throw 0;
    }
    ;
    je.g = ["167"];
    je.print = function(a, b) {
        null == b && (b = !1);
        b = new je(b);
        b.cy(a, "");
        return b.ha.C
    }
    ;
    je.prototype = {
        cy: function(a, b) {
            switch (a.nodeType) {
            case 0:
                this.ha.C += D.Qa(b + "<");
                if (a.nodeType != z.Element)
                    throw 0;
                this.ha.C += D.Qa(a.nodeName);
                for (var c = a.attributes(); c.ga(); ) {
                    var d = c.next();
                    this.ha.C += D.Qa(" " + d + '="');
                    d = ob.lA(a.get(d), !0);
                    this.ha.C += D.Qa(d);
                    this.ha.C += '"'
                }
                if (this.qH(a)) {
                    this.ha.C += ">";
                    this.Dh && (this.ha.C += "\n");
                    if (a.nodeType != z.Document && a.nodeType != z.Element)
                        throw 0;
                    for (c = C.xd(a.children); c.ga(); )
                        d = c.next(),
                        this.cy(d, this.Dh ? b + "\t" : b);
                    this.ha.C += D.Qa(b + "</");
                    if (a.nodeType != z.Element)
                        throw 0;
                    this.ha.C += D.Qa(a.nodeName);
                    this.ha.C += ">"
                } else
                    this.ha.C += "/>";
                this.Dh && (this.ha.C += "\n");
                break;
            case 1:
                if (a.nodeType == z.Document || a.nodeType == z.Element)
                    throw 0;
                a = a.nodeValue;
                0 != a.length && (b += ob.lA(a),
                this.ha.C += D.Qa(b),
                this.Dh && (this.ha.C += "\n"));
                break;
            case 2:
                this.ha.C += D.Qa(b + "<![CDATA[");
                if (a.nodeType == z.Document || a.nodeType == z.Element)
                    throw 0;
                b = ob.trim(a.nodeValue);
                this.ha.C += D.Qa(b);
                this.ha.C += "]]\x3e";
                this.Dh && (this.ha.C += "\n");
                break;
            case 3:
                if (a.nodeType == z.Document || a.nodeType == z.Element)
                    throw 0;
                a = a.nodeValue;
                a = a.replace(/[\n\r\t]+/g, "");
                this.ha.C += null == b ? "null" : "" + b;
                b = ob.trim("\x3c!--" + a + "--\x3e");
                this.ha.C += D.Qa(b);
                this.Dh && (this.ha.C += "\n");
                break;
            case 4:
                if (a.nodeType == z.Document || a.nodeType == z.Element)
                    throw 0;
                this.ha.C += D.Qa("<!DOCTYPE " + a.nodeValue + ">");
                this.Dh && (this.ha.C += "\n");
                break;
            case 5:
                if (a.nodeType == z.Document || a.nodeType == z.Element)
                    throw 0;
                this.ha.C += D.Qa("<?" + a.nodeValue + "?>");
                this.Dh && (this.ha.C += "\n");
                break;
            case 6:
                if (a.nodeType != z.Document && a.nodeType != z.Element)
                    throw 0;
                for (a = C.xd(a.children); a.ga(); )
                    c = a.next(),
                    this.cy(c, b)
            }
        },
        qH: function(a) {
            if (a.nodeType != z.Document && a.nodeType != z.Element)
                throw 0;
            for (a = C.xd(a.children); a.ga(); ) {
                var b = a.next();
                switch (b.nodeType) {
                case 0:
                case 1:
                    return !0;
                case 2:
                case 3:
                    if (b.nodeType == z.Document || b.nodeType == z.Element)
                        throw 0;
                    if (0 != ob.CA(b.nodeValue).length)
                        return !0
                }
            }
            return !1
        },
        m: je
    };
    Fc.g = ["168"];
    Fc.kO = function(a) {
        return a instanceof Error ? a : new Fc(a)
    }
    ;
    Fc.H = Error;
    Fc.prototype = x(Error.prototype, {
        m: Fc
    });
    M.g = ["169"];
    M.qf = function(a) {
        if (a instanceof Array && null == a.l)
            return Array;
        var b = a.m;
        if (null != b)
            return b;
        a = M.xy(a);
        return null != a ? M.fF(a) : null
    }
    ;
    M.pj = function(a, b) {
        if (null == a)
            return "null";
        if (5 <= b.length)
            return "<...>";
        var c = typeof a;
        "function" == c && (a.g || a.pb) && (c = "object");
        switch (c) {
        case "function":
            return "<function>";
        case "object":
            if (a instanceof Array) {
                if (a.l) {
                    if (2 == a.length)
                        return a[0];
                    c = a[0] + "(";
                    b += "\t";
                    for (var d = 2, f = a.length; d < f; ) {
                        var g = d++;
                        c = 2 != g ? c + ("," + M.pj(a[g], b)) : c + M.pj(a[g], b)
                    }
                    return c + ")"
                }
                c = a.length;
                d = "[";
                b += "\t";
                for (f = 0; f < c; )
                    g = f++,
                    d += (0 < g ? "," : "") + M.pj(a[g], b);
                return d + "]"
            }
            try {
                d = a.toString
            } catch (n) {
                return "???"
            }
            if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(),
            "[object Object]" != c))
                return c;
            c = null;
            d = "{\n";
            b += "\t";
            f = null != a.hasOwnProperty;
            for (c in a)
                f && !a.hasOwnProperty(c) || "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"),
                d += b + c + " : " + M.pj(a[c], b));
            b = b.substring(1);
            return d + ("\n" + b + "}");
        case "string":
            return a;
        default:
            return String(a)
        }
    }
    ;
    M.ju = function(a, b) {
        if (null == a)
            return !1;
        if (a == b)
            return !0;
        var c = a.$;
        if (null != c)
            for (var d = 0, f = c.length; d < f; ) {
                var g = d++;
                g = c[g];
                if (g == b || M.ju(g, b))
                    return !0
            }
        return M.ju(a.H, b)
    }
    ;
    M.eo = function(a, b) {
        if (null == b)
            return !1;
        switch (b) {
        case Array:
            return a instanceof Array ? null == a.l : !1;
        case Pg:
            return "boolean" == typeof a;
        case Qg:
            return !0;
        case Rg:
            return "number" == typeof a;
        case Sg:
            return "number" == typeof a ? (a | 0) === a : !1;
        case String:
            return "string" == typeof a;
        default:
            if (null != a)
                if ("function" == typeof b) {
                    if (a instanceof b || M.ju(M.qf(a), b))
                        return !0
                } else {
                    if ("object" == typeof b && M.eF(b) && a instanceof b)
                        return !0
                }
            else
                return !1;
            return b == Bg && null != a.g || b == Tg && null != a.pb ? !0 : a.l == b
        }
    }
    ;
    M.ib = function(a, b) {
        if (M.eo(a, b))
            return a;
        throw 0;
    }
    ;
    M.xy = function(a) {
        a = M.gF.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    }
    ;
    M.eF = function(a) {
        return null != M.xy(a)
    }
    ;
    M.fF = function(a) {
        return w[a]
    }
    ;
    ug.g = ["170"];
    ug.ZG = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            if (0 == a.length) {
                var b = "_hx_" + Math.random();
                a.setItem(b, b);
                a.removeItem(b)
            }
            return a
        } catch (c) {
            return null
        }
    }
    ;
    Xb.g = ["171"];
    Xb.cL = function(a, b) {
        a = new ke(this,a,null == b ? null : b - a);
        b = new Kb(a.byteLength);
        (new ke(b)).set(a);
        return b
    }
    ;
    Xb.prototype = {
        slice: function(a, b) {
            return new Xb(this.aa.slice(a, b))
        },
        m: Xb
    };
    Mf.g = ["172"];
    Mf.prototype = {
        getInt8: function(a) {
            a = this.sb.aa[this.offset + a];
            return 128 <= a ? a - 256 : a
        },
        getUint8: function(a) {
            return this.sb.aa[this.offset + a]
        },
        getInt16: function(a, b) {
            a = this.getUint16(a, b);
            return 32768 <= a ? a - 65536 : a
        },
        getUint16: function(a, b) {
            return b ? this.sb.aa[this.offset + a] | this.sb.aa[this.offset + a + 1] << 8 : this.sb.aa[this.offset + a] << 8 | this.sb.aa[this.offset + a + 1]
        },
        getInt32: function(a, b) {
            var c = this.offset + a;
            a = this.sb.aa[c++];
            var d = this.sb.aa[c++]
              , f = this.sb.aa[c++];
            c = this.sb.aa[c++];
            return b ? a | d << 8 | f << 16 | c << 24 : c | f << 8 | d << 16 | a << 24
        },
        getUint32: function(a, b) {
            a = this.getInt32(a, b);
            return 0 > a ? a + 4294967296 : a
        },
        getFloat32: function(a, b) {
            return Ia.xH(this.getInt32(a, b))
        },
        getFloat64: function(a, b) {
            var c = this.getInt32(a, b);
            a = this.getInt32(a + 4, b);
            return Ia.xv(b ? c : a, b ? a : c)
        },
        setInt8: function(a, b) {
            this.sb.aa[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255
        },
        setUint8: function(a, b) {
            this.sb.aa[a + this.offset] = b & 255
        },
        setInt16: function(a, b, c) {
            this.setUint16(a, 0 > b ? b + 65536 : b, c)
        },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.sb.aa[a] = b & 255,
            this.sb.aa[a++] = b >> 8 & 255) : (this.sb.aa[a++] = b >> 8 & 255,
            this.sb.aa[a] = b & 255)
        },
        setInt32: function(a, b, c) {
            this.setUint32(a, b, c)
        },
        setUint32: function(a, b, c) {
            a += this.offset;
            c ? (this.sb.aa[a++] = b & 255,
            this.sb.aa[a++] = b >> 8 & 255,
            this.sb.aa[a++] = b >> 16 & 255,
            this.sb.aa[a++] = b >>> 24) : (this.sb.aa[a++] = b >>> 24,
            this.sb.aa[a++] = b >> 16 & 255,
            this.sb.aa[a++] = b >> 8 & 255,
            this.sb.aa[a++] = b & 255)
        },
        setFloat32: function(a, b, c) {
            this.setUint32(a, Ia.FG(b), c)
        },
        setFloat64: function(a, b, c) {
            b = Ia.kG(b);
            c ? (this.setUint32(a, b.low),
            this.setUint32(a, b.high)) : (this.setUint32(a, b.high),
            this.setUint32(a, b.low))
        },
        m: Mf
    };
    Ec.g = ["174"];
    Ec.Cy = function(a, b, c) {
        if ("number" == typeof a) {
            c = [];
            for (b = 0; b < a; ) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new Xb(c)
        } else if (a instanceof Xb)
            null == b && (b = 0),
            null == c && (c = a.byteLength - b),
            c = 0 == b ? a.aa : a.aa.slice(b, b + c),
            c.byteLength = c.length,
            c.byteOffset = b,
            c.buffer = a;
        else if (a instanceof Array && null == a.l)
            c = a.slice(),
            c.byteLength = c.length,
            c.byteOffset = 0,
            c.buffer = new Xb(c);
        else
            throw 0;
        c.subarray = Ec.kF;
        c.set = Ec.iF;
        return c
    }
    ;
    Ec.iF = function(a, b) {
        if (a.buffer instanceof Xb) {
            if (a.byteLength + b > this.byteLength)
                throw 0;
            for (var c = 0, d = a.byteLength; c < d; ) {
                var f = c++;
                this[f + b] = a[f]
            }
        } else if (a instanceof Array && null == a.l) {
            if (a.length + b > this.byteLength)
                throw 0;
            c = 0;
            for (d = a.length; c < d; )
                f = c++,
                this[f + b] = a[f]
        } else
            throw 0;
    }
    ;
    Ec.kF = function(a, b) {
        b = Ec.Cy(this.slice(a, b));
        b.byteOffset = a;
        return b
    }
    ;
    gb.g = ["175"];
    gb.X = function() {
        return m.Gj(gb)
    }
    ;
    gb.H = v;
    gb.prototype = x(v.prototype, {
        td: function(a, b, c) {
            this.Ni.register(a, b, c)
        },
        NG: function() {
            for (var a = [], b = this.V; null != b && b instanceof ya; )
                a.push(b),
                b = m.getParent(b);
            for (b = []; 0 < a.length; )
                b.push(a.pop());
            return b
        },
        FN: function() {
            return this.V
        },
        jL: function(a, b) {
            this.start(null, a, !1, b)
        },
        start: function(a, b, c, d) {
            function f(a) {
                for (; null != a && a instanceof ya; ) {
                    var b = a;
                    b.state == U.Sk && b.Si();
                    if (m.getParent(a) == e)
                        break;
                    a = m.getParent(a)
                }
            }
            var g = !1
              , e = pa.filter(this.Lv, function(a) {
                return (null == a ? null : M.qf(a)) == b
            }).first();
            null == e && (e = cc.Iu(b, []),
            e.ri() && this.Lv.push(e),
            g = !0);
            e.Ec = new Dc(a,d);
            e.Ec.MN = c;
            g && e.ax();
            a = null == e.ta;
            (e.RH() || a) && C.remove(this.Lv, e);
            !g && null != m.getParent(e) && m.getParent(e)instanceof ya ? (f(this.V),
            c = e.fv(),
            this.V = e,
            this.Ni.pop(c, e)) : (g = this.V,
            c ? (g.Si(),
            g.add(null, e),
            this.V = e,
            this.Ni.push(g, e)) : null != g ? (f(g),
            this.V = e,
            this.add(null, e),
            this.Ni.OF(g, e)) : (this.V = e,
            this.add(null, e),
            this.Ni.push(null, e)))
        },
        finish: function(a, b) {
            if (a.state == U.Jk)
                a.s();
            else if (a.PH()) {
                this.V = m.getParent(a);
                a.Si();
                this.V.Ec = new Dc(a,b);
                if (this.V.state == U.Uk) {
                    if (!this.V.Mj())
                        for (b = this.V; b = m.getParent(b),
                        b.Ec = new Dc(null,null),
                        b.gx(),
                        b.Bh(),
                        b.Ti(),
                        b.Si(),
                        !b.jp() && !b.Mj(); )
                            ;
                    this.V.gx();
                    this.V.Bh()
                }
                this.Ni.pop(a, this.V)
            } else
                a.Si(),
                this.Ni.pop(a, null)
        },
        m: gb
    });
    var U = {
        pb: !0,
        ob: "None Created Started Running Restarted Paused Stopped Destroyed".split(" "),
        cg: ["None", 0]
    };
    U.cg.toString = h;
    U.cg.l = U;
    U.Jk = ["Created", 1];
    U.Jk.toString = h;
    U.Jk.l = U;
    U.Vn = ["Started", 2];
    U.Vn.toString = h;
    U.Vn.l = U;
    U.Sk = ["Running", 3];
    U.Sk.toString = h;
    U.Sk.l = U;
    U.ln = ["Restarted", 4];
    U.ln.toString = h;
    U.ln.l = U;
    U.Rk = ["Paused", 5];
    U.Rk.toString = h;
    U.Rk.l = U;
    U.Uk = ["Stopped", 6];
    U.Uk.toString = h;
    U.Uk.l = U;
    U.Om = ["Destroyed", 7];
    U.Om.toString = h;
    U.Om.l = U;
    U.Gb = [U.cg, U.Jk, U.Vn, U.Sk, U.ln, U.Rk, U.Uk, U.Om];
    Dc.g = ["176"];
    Dc.prototype = {
        m: Dc
    };
    Cc.g = ["177"];
    Cc.prototype = {
        set: function(a, b) {
            this.bb[a] = b;
            return this
        },
        m: Cc
    };
    Lf.g = ["178"];
    Lf.prototype = {
        resolve: function(a) {
            if (Object.prototype.hasOwnProperty.call(this.bb, a))
                return T.fa(this.bb, a);
            throw 0;
        },
        m: Lf
    };
    Kf.g = ["179"];
    Kf.prototype = {
        resolve: function(a) {
            return Object.prototype.hasOwnProperty.call(this.bb, a)
        },
        m: Kf
    };
    Cd.g = ["180"];
    Cd.H = v;
    Cd.prototype = x(v.prototype, {
        push: function(a, b) {
            function c() {
                b.fx = null;
                b.ir = !1;
                b.Bh();
                d.start(a, b, Ya.jn)
            }
            var d = this;
            b.ir ? b.fx = c : c()
        },
        pop: function(a, b) {
            this.start(a, b, Ya.hn)
        },
        OF: function(a, b) {
            function c() {
                b.fx = null;
                b.ir = !1;
                b.Bh();
                d.start(a, b, Ya.Ik)
            }
            var d = this;
            b.ir ? b.fx = c : c()
        },
        register: function(a, b, c) {
            a = null == a ? "*" : Ub.Oe(a);
            var d = null == b ? "*" : Ub.Oe(b);
            b = this.Nw;
            a = "" + a + "-" + d;
            null != ea[a] ? b.cc(a, c) : b.G[a] = c
        },
        GK: function(a, b) {
            function c(a) {
                var b = d.Nw;
                e = null != ea[a] ? b.ad(a) : b.G[a];
                b = d.Nw;
                return null != ea[a] ? b.fl(a) : b.G.hasOwnProperty(a)
            }
            var d = this, f = null == a ? "null" : Ub.Oe(a), g = Ub.Oe(b), e;
            this.Cl = function(a, b) {
                if (c("" + f + "-" + g))
                    return e;
                if (null != b)
                    for (b = (null == b ? null : M.qf(b)).H; null != b && b != ya; ) {
                        var d = "" + f + "-" + cc.Oe(b);
                        if (c(d))
                            return e;
                        b = b.H
                    }
                if (null != a)
                    for (a = (null == a ? null : M.qf(a)).H; null != a && a != ya; ) {
                        b = "" + cc.Oe(a) + "-" + g;
                        if (c(b))
                            return e;
                        a = a.H
                    }
                return c("*-" + g) || c("" + f + "-*") || c("*-*") ? e : null
            }(a, b)
        },
        start: function(a, b, c) {
            this.GK(a, b);
            if (null == this.Cl)
                this.finish(a, b, c);
            else {
                this.Ra = a;
                this.gb = b;
                this.Kf = c;
                var d = this.nb;
                d.kg = .5;
                d.elapsedTime = 0;
                d.oc = d.kg;
                this.Cl.fJ(a, b, c);
                this.Ga = 1
            }
        },
        ra: function(a) {
            switch (this.Ga) {
            case 1:
                var b = this.nb;
                b.uf || (b.elapsedTime += a);
                a = b.elapsedTime / b.oc;
                this.Cl.ex(this.Ra, this.gb, 1 > a ? a : 1, this.Kf);
                a = this.nb;
                a = a.elapsedTime / a.oc;
                1 <= (1 > a ? a : 1) && (this.Cl.pJ(this.Ra, this.gb, this.Kf),
                this.Ga = 2);
                break;
            case 3:
                a = this.Ra,
                b = this.gb,
                this.gb = this.Ra = null,
                this.Ga = 0,
                this.finish(a, b, this.Kf)
            }
        },
        qc: function() {
            2 == this.Ga && (this.Ga = 3)
        },
        finish: function(a, b, c) {
            switch (c[1]) {
            case 0:
                if (b.Mj() && null != a)
                    for (a = this.fH(a),
                    c = 0; c < a.length; ) {
                        var d = a[c];
                        ++c;
                        d.state == U.Rk && d.sk()
                    }
                b.Ti();
                break;
            case 1:
                if (null == b) {
                    a.sk();
                    a.remove();
                    a.ri() || a.s();
                    break
                }
                a = this.eH(a);
                for (c = 0; c < a.length; )
                    d = a[c],
                    ++c,
                    d.sk(),
                    d.remove(),
                    d.ri() || d.s();
                switch (b.state[1]) {
                case 2:
                case 5:
                    b.Ti();
                    break;
                case 6:
                    b.gx(),
                    b.Bh(),
                    b.Ti()
                }
                break;
            case 2:
                for (; ; ) {
                    c = m.getParent(a);
                    d = a.jp();
                    a.sk();
                    a.remove();
                    a.ri() || a.s();
                    if (d)
                        break;
                    a = c
                }
                b.Ti()
            }
        },
        fH: function(a) {
            for (var b = []; !a.jp(); )
                b.push(a),
                a = m.getParent(a);
            b.push(a);
            return b
        },
        eH: function(a) {
            for (var b = a, c = null; null != m.sc(b); ) {
                c = null;
                for (var d = m.sc(b); null != d; ) {
                    if (d instanceof ya) {
                        c = d;
                        break
                    }
                    d = m.Pe(d)
                }
                if (null == c) {
                    c = b;
                    break
                }
                b = c
            }
            null == c && (c = a);
            for (b = []; c != a; )
                b.push(c),
                c = m.getParent(c);
            b.push(a);
            return b
        },
        m: Cd
    });
    var Ya = {
        pb: !0,
        ob: ["Push", "Pop", "Change"],
        jn: ["Push", 0]
    };
    Ya.jn.toString = h;
    Ya.jn.l = Ya;
    Ya.hn = ["Pop", 1];
    Ya.hn.toString = h;
    Ya.hn.l = Ya;
    Ya.Ik = ["Change", 2];
    Ya.Ik.toString = h;
    Ya.Ik.l = Ya;
    Ya.Gb = [Ya.jn, Ya.hn, Ya.Ik];
    Jf.g = ["181"];
    Jf.prototype = {
        m: Jf
    };
    Ie.g = ["182"];
    Ie.isSupported = function() {
        return O.isSupported()
    }
    ;
    Ie.hv = function() {
        return O.hv()
    }
    ;
    O.g = ["183"];
    O.YH = function() {
        return null != O.Hk && O.Hk ? "suspended" == O.context.state : !1
    }
    ;
    O.resume = function() {
        "running" != O.context.state && O.context.resume()
    }
    ;
    O.isSupported = function() {
        function a() {
            try {
                if ("undefined" !== typeof AudioContext)
                    return new AudioContext;
                if ("undefined" !== typeof webkitAudioContext)
                    return new webkitAudioContext
            } catch (d) {}
            return null
        }
        if (null != O.Hk)
            return O.Hk;
        O.Hk = !1;
        try {
            if (O.context = a(),
            O.Hk = null != O.context,
            (new V("i(Phone|Pad|Pod)","")).match(window.navigator.userAgent) && null != O.context && 44100 != O.context.sampleRate) {
                var b = O.context.createBuffer(1, 1, 44100)
                  , c = O.context.createBufferSource();
                c.buffer = b;
                c.connect(O.context.destination);
                c.start(0);
                c.disconnect();
                O.context.close();
                O.context = a()
            }
        } catch (d) {}
        return O.Hk
    }
    ;
    O.hv = function() {
        function a(b) {
            if (b instanceof Array && null == b.l) {
                for (var f = 0, g = 0; g < b.length; ) {
                    var e = b[g];
                    ++g;
                    e = a(e);
                    e > f && (f = e)
                }
                return f
            }
            b = c.canPlayType(b).replace(/^no$/, "");
            return T.fa(d, b)
        }
        var b = O.Qg;
        if ("undefined" !== typeof b)
            return b;
        var c = null;
        try {
            c = "undefined" !== typeof Audio ? new Audio : null
        } catch (k) {
            return null
        }
        if (!c || "function" !== typeof c.canPlayType)
            return null;
        var d = {
            probably: 2,
            maybe: 1,
            "": 0
        };
        b = {};
        b.wav = a('audio/wav; codecs="1"');
        b.ogg = a('audio/ogg; codecs="vorbis"');
        b.aac = a("audio/aac;");
        -1 < window.navigator.userAgent.indexOf("OPR") && (b.aac = 0);
        for (var f = 0, g = ["aac", "ogg", "wav"]; f < g.length; ) {
            var e = g[f];
            ++f;
            if (0 < T.fa(b, e))
                return O.Qg = e
        }
        return O.Qg = null
    }
    ;
    O.getContext = function() {
        O.isSupported();
        return O.context
    }
    ;
    O.Hh = function(a) {
        O.isSupported() && (O.lv().gain.value = a)
    }
    ;
    O.lv = function() {
        null == O.Sw && (O.Sw = O.createGainNode(),
        O.Sw.connect(O.getContext().destination));
        return O.Sw
    }
    ;
    O.createGainNode = function() {
        try {
            return O.getContext().createGain()
        } catch (a) {}
        try {
            return O.getContext().createGainNode()
        } catch (a) {
            return null
        }
    }
    ;
    O.cG = function() {
        var a = O.getContext().createBufferSource();
        a.connect(O.lv());
        return a
    }
    ;
    tg.g = ["184"];
    tg.xG = function(a, b) {
        var c = O.getContext()
          , d = a.sampleRate
          , f = []
          , g = 0
          , e = b.length;
        if (1 == a.numberOfChannels)
            for (var k = a.getChannelData(0); g < e; ) {
                var u = d / 1E3 * b[g++] | 0
                  , h = d / 1E3 * b[g++] | 0;
                a = c.createBuffer(1, h - u, d);
                u = k.subarray(u, h);
                try {
                    a.copyToChannel(u, 0)
                } catch (p) {
                    a.getChannelData(0).set(u)
                }
                f.push(a)
            }
        else
            for (k = a.getChannelData(0),
            a = a.getChannelData(1); g < e; ) {
                var l = d / 1E3 * b[g++] | 0
                  , q = d / 1E3 * b[g++] | 0;
                u = c.createBuffer(2, q - l, d);
                h = k.subarray(l, q);
                l = a.subarray(l, q);
                try {
                    u.copyToChannel(h, 0),
                    u.copyToChannel(l, 1)
                } catch (p) {
                    u.getChannelData(0).set(h),
                    u.getChannelData(1).set(l)
                }
                f.push(u)
            }
        return f
    }
    ;
    If.g = ["185"];
    If.prototype = {
        s: function() {
            this.stop();
            if (null != this.Jb) {
                for (var a = 0, b = this.Jb; a < b.length; ) {
                    var c = b[a];
                    ++a;
                    c.disconnect()
                }
                this.Jb = null
            }
            null != this.me && (this.me = this.me.onended = null);
            this.wc = this.a = this.gk = this.zd = this.Gl = null
        },
        play: function() {
            if (0 < this.offset && this.offset > this.a.length - 50)
                this.onended();
            else {
                this.II = this.zd.currentTime;
                null == this.me && (this.me = O.cG(),
                this.Jb = [this.me]);
                var a = this.me;
                a.buffer = this.a;
                a.loop = this.loop;
                a.start(0, this.offset);
                a.onended = G(this, this.onended);
                this.hf.bh ? 1 > this.gk.nw && this.zk(1) : 1 > this.gk.Iw && this.zk(1)
            }
        },
        stop: function() {
            null != this.me && this.me.stop(0)
        },
        zk: function(a) {
            if (tc.SD && O.UD && null != this.me) {
                if (null == this.Gl) {
                    this.Gl = O.createGainNode();
                    if (null == this.Gl)
                        return;
                    this.KH(this.Gl)
                }
                this.Gl.gain.setValueAtTime(a * (this.hf.bh ? this.gk.nw : this.gk.Iw), this.zd.currentTime)
            }
        },
        No: function() {
            return (this.zd.currentTime - this.II) % this.a.duration / this.a.duration
        },
        KH: function(a) {
            var b = this.Jb[this.Jb.length - 1];
            b.disconnect();
            this.Jb.push(a);
            b.connect(a);
            a.connect(O.lv())
        },
        onended: function() {
            null != this.me && (this.me.onended = null);
            this.me = null;
            var a = this.wc;
            this.gk.tq(this);
            this.s();
            null != a && a()
        },
        m: If
    };
    kc.g = ["186"];
    kc.$ = [bc];
    kc.prototype = {
        zx: function(a) {
            for (var b = this.a, c = 0, d = this.Z * this.Fa; c < d; ) {
                var f = c++;
                b[f] = a
            }
            return this
        },
        dH: function(a, b) {
            a *= this.Z;
            for (var c = this.a, d = 0, f = this.Z; d < f; ) {
                var g = d++;
                b[g] = c[a + g]
            }
            return b
        },
        Kh: function(a, b) {
            a *= this.Z;
            for (var c = this.a, d = 0, f = this.Z; d < f; ) {
                var g = d++;
                c[a + g] = b[g]
            }
            return this
        },
        resize: function(a, b) {
            if (a == this.Z && b == this.Fa)
                return this;
            var c = this.a;
            this.a = Array(a * b);
            if (a == this.Z)
                return ba.Yb(c, 0, this.a, 0, this.Z * (b < this.Fa ? b : this.Fa)),
                this.Z = a,
                this.Fa = b,
                this;
            for (var d = a < this.Z ? a : this.Z, f, g, e = this.a, k = 0, u = b < this.Fa ? b : this.Fa; k < u; ) {
                g = k++;
                f = g * a;
                g *= this.Z;
                for (var h = 0, l = d; h < l; ) {
                    var q = h++;
                    e[f + q] = c[g + q]
                }
            }
            this.Z = a;
            this.Fa = b;
            return this
        },
        Fu: function(a, b) {
            if (a != b) {
                a *= this.Z;
                b *= this.Z;
                for (var c = this.a, d = 0, f = this.Z; d < f; ) {
                    var g = d++;
                    c[b + g] = c[a + g]
                }
            }
            return this
        },
        m: kc
    };
    ie.g = ["187"];
    ie.prototype = {
        m: ie
    };
    He.g = ["188"];
    He.prototype = {
        m: He
    };
    he.g = ["189"];
    he.$ = [ie];
    he.prototype = {
        s: function() {
            this.a = this.bb = null
        },
        ga: function() {
            return this.Ef < this.th
        },
        next: function() {
            return this.a[this.Ef++]
        },
        remove: function() {
            this.bb.uC(--this.Ef);
            this.th--
        },
        m: he
    };
    Hf.g = ["190"];
    Hf.$ = [bc];
    ce.g = ["191"];
    ce.$ = [Hf];
    ce.prototype = {
        T: function() {
            var a = this.B;
            this.B = ic.fe(this.Bc, this.B);
            this.Vf(a, this.B)
        },
        Vf: function(a, b) {
            var c = Array(b);
            a < b ? this.ua + this.f > a ? (b = a - this.ua,
            a -= b,
            ba.Yb(this.a, this.ua, c, 0, b),
            ba.Yb(this.a, 0, c, b, a)) : ba.Yb(this.a, this.ua, c, 0, this.f) : this.ua + this.f > a ? (b = this.f - this.ua,
            ba.Yb(this.a, this.ua, c, 0, a - this.ua),
            ba.Yb(this.a, 0, c, this.ua, b)) : ba.Yb(this.a, this.ua, c, 0, this.f);
            this.a = c;
            this.ua = 0
        },
        m: ce
    };
    sg.g = ["192"];
    sg.$ = [bc];
    jc.g = ["193"];
    jc.$ = [sg];
    jc.prototype = {
        clear: function(a) {
            null == a && (a = !1);
            a && ba.Be(this.a);
            this.V = 0
        },
        T: function() {
            this.B = ic.fe(this.Bc, this.B);
            this.Vf(this.B)
        },
        Vf: function(a) {
            a = Array(a);
            ba.Yb(this.a, 0, a, 0, this.V);
            this.a = a
        },
        m: jc
    };
    rg.g = ["194"];
    Bc.g = ["195"];
    Bc.prototype = {
        m: Bc
    };
    Ge.g = ["198"];
    Ge.$ = [bc];
    Ge.prototype = {
        ou: function(a) {
            if (null != a.kh)
                return a;
            this.f++;
            a.next = this.Jb;
            null != a.next && (a.next.Jc = a);
            this.Jb = a;
            a.kh = this;
            return a
        },
        removeNode: function(a) {
            if (0 == this.f || null == a.kh)
                return this;
            this.Qx(a);
            null != a.Jc && (a.Jc.next = a.next);
            null != a.next && (a.next.Jc = a.Jc);
            this.Jb == a && (this.Jb = a.next);
            this.f--;
            a.kh = null;
            return this
        },
        Iy: function(a, b) {
            for (var c = this.Jb; null != c; ) {
                if (c == a) {
                    a = c;
                    for (c = this.Jb; null != c; ) {
                        if (c == b) {
                            a.Fy(c);
                            c.Fy(a);
                            break
                        }
                        c = c.next
                    }
                    break
                }
                c = c.next
            }
            return this
        },
        Qx: function(a) {
            if (null == a.kh)
                return a;
            for (var b = a.jb; null != b; ) {
                for (var c = b.node, d = c.jb; null != d; ) {
                    var f = d.next;
                    d.node == a && (null != d.Jc && (d.Jc.next = f),
                    null != f && (f.Jc = d.Jc),
                    c.jb == d && (c.jb = f),
                    d.s(),
                    c.Tw--,
                    null != this.qm && this.qm(d));
                    d = f
                }
                c = b.next;
                null != b.Jc && (b.Jc.next = c);
                null != c && (c.Jc = b.Jc);
                a.jb == b && (a.jb = c);
                b.s();
                a.Tw--;
                null != this.qm && this.qm(b);
                b = c
            }
            a.jb = null;
            return a
        },
        clearMarks: function() {
            for (var a = this.Jb; null != a; )
                a.Db = !1,
                a = a.next;
            return this
        },
        RF: function() {
            for (var a = this.Jb; null != a; )
                a.parent = null,
                a = a.next;
            return this
        },
        sz: function(a, b, c, d, f) {
            null == f && (f = !1);
            null == a && (a = !1);
            if (0 == this.f)
                return this;
            this.Vy && this.clearMarks();
            var g = 1;
            null == b && (b = this.Jb);
            var e = this.eq
              , k = this.ye;
            k[0] = b;
            b.parent = b;
            b.depth = 0;
            if (a)
                if (null == c)
                    if (f)
                        b.oa.qd(!0, d) && this.wo(b, !0, d);
                    else {
                        c = k[0];
                        b = c.oa;
                        if (!b.qd(!0, d))
                            return this;
                        for (; 0 < g; )
                            if (c = k[--g],
                            !c.Db) {
                                c.Db = !0;
                                b = c.oa;
                                if (!b.qd(!1, d))
                                    break;
                                for (a = c.jb; null != a; )
                                    b = c.oa,
                                    a.node.parent = c,
                                    a.node.depth = c.depth + 1,
                                    b.qd(!0, d) && (b = a.node,
                                    g == e && (k = this.Hq(e *= 2)),
                                    k[g++] = b),
                                    a = a.next
                            }
                    }
                else if (f)
                    c(b, !0, d) && this.vo(b, c, !0, d);
                else {
                    a = k[0];
                    if (!c(a, !0, d))
                        return this;
                    for (; 0 < g; )
                        if (a = k[--g],
                        !a.Db) {
                            a.Db = !0;
                            if (!c(a, !1, d))
                                break;
                            for (b = a.jb; null != b; )
                                b.node.parent = a,
                                b.node.depth = a.depth + 1,
                                c(b.node, !0, d) && (f = b.node,
                                g == e && (k = this.Hq(e *= 2)),
                                k[g++] = f),
                                b = b.next
                        }
                }
            else if (null == c)
                if (f)
                    this.wo(b, !1, d);
                else
                    for (; 0 < g; ) {
                        if (c = k[--g],
                        !c.Db) {
                            c.Db = !0;
                            a = c.oa;
                            if (!a.qd(!1, d))
                                break;
                            for (a = c.jb; null != a; )
                                b = a.node,
                                g == e && (k = this.Hq(e *= 2)),
                                k[g++] = b,
                                a.node.parent = c,
                                a.node.depth = c.depth + 1,
                                a = a.next
                        }
                    }
            else if (f)
                this.vo(b, c, !1, d);
            else
                for (; 0 < g; )
                    if (a = k[--g],
                    !a.Db) {
                        a.Db = !0;
                        if (!c(a, !1, d))
                            break;
                        for (b = a.jb; null != b; )
                            f = b.node,
                            g == e && (k = this.Hq(e *= 2)),
                            k[g++] = f,
                            b.node.parent = a,
                            b.node.depth = a.depth + 1,
                            b = b.next
                    }
            return this
        },
        uz: function(a, b, c, d, f) {
            null == b && (b = !1);
            if (0 == this.f)
                return this;
            this.Vy && this.clearMarks();
            for (var g = 0, e = 1, k = this.Qd, u = this.Wp, h = this.Jb; null != h; )
                h.depth = 0,
                h = h.next;
            null == c && (c = this.Jb);
            c.Db = !0;
            c.parent = c;
            k[0] = c;
            if (b)
                if (null == d) {
                    d = k[g];
                    h = d.oa;
                    if (!h.qd(!0, f))
                        return this;
                    for (; 0 < e; ) {
                        d = k[g];
                        h = d.oa;
                        if (!h.qd(!1, f))
                            break;
                        for (b = d.jb; null != b; )
                            c = b.node,
                            c.Db || (c.Db = !0,
                            c.parent = d,
                            c.depth = d.depth + 1,
                            c.depth <= a && (h = c.oa,
                            h.qd(!0, f) && (h = e++ + g,
                            h == u && (this.Gq(u *= 2),
                            k = this.Qd),
                            k[h] = c))),
                            b = b.next;
                        ++g;
                        --e
                    }
                } else {
                    b = k[g];
                    if (!d(b, !0, f))
                        return this;
                    for (; 0 < e; ) {
                        b = k[g];
                        if (!d(b, !1, f))
                            break;
                        for (c = b.jb; null != c; ) {
                            h = c.node;
                            if (!h.Db && (h.Db = !0,
                            h.parent = b,
                            h.depth = b.depth + 1,
                            h.depth <= a && d(h, !0, f))) {
                                var l = e++ + g;
                                l == u && (this.Gq(u *= 2),
                                k = this.Qd);
                                k[l] = h
                            }
                            c = c.next
                        }
                        ++g;
                        --e
                    }
                }
            else if (null == d)
                for (; 0 < e; ) {
                    d = k[g];
                    b = d.oa;
                    if (!b.qd(!1, f))
                        break;
                    for (b = d.jb; null != b; )
                        c = b.node,
                        c.Db || (c.Db = !0,
                        c.depth = d.depth + 1,
                        c.parent = d,
                        c.depth <= a && (h = e++ + g,
                        h == u && (this.Gq(u *= 2),
                        k = this.Qd),
                        k[h] = c)),
                        b = b.next;
                    ++g;
                    --e
                }
            else
                for (; 0 < e; )
                    if (b = k[g],
                    !(b.depth > a)) {
                        if (!d(b, !1, f))
                            break;
                        for (c = b.jb; null != c; )
                            h = c.node,
                            h.Db || (h.Db = !0,
                            h.depth = b.depth + 1,
                            h.parent = b,
                            h.depth <= a && (l = e++ + g,
                            l == u && (this.Gq(u *= 2),
                            k = this.Qd),
                            k[l] = h)),
                            c = c.next;
                        ++g;
                        --e
                    }
            return this
        },
        s: function() {
            for (var a = this.Jb; null != a; ) {
                for (var b = a.next, c = a.jb; null != c; ) {
                    var d = c.next;
                    c.next = c.Jc = null;
                    c.node = null;
                    c = d
                }
                a.s();
                a = b
            }
            this.Jb = null;
            ba.Be(this.ye);
            this.ye = null;
            ba.Be(this.Qd);
            this.Qd = null;
            null != this.Mb && (this.Mb.s(),
            this.Mb = null);
            this.qm = this.yu = null
        },
        iterator: function() {
            if (this.Tb) {
                if (null == this.Mb)
                    this.Mb = new ge(this);
                else {
                    var a = this.Mb;
                    a.Ia = a.bb.Jb
                }
                return this.Mb
            }
            return new ge(this)
        },
        wo: function(a, b, c) {
            a.Db = !0;
            var d = a.oa;
            if (!d.qd(!1, c))
                return !1;
            for (var f = a.jb; null != f; ) {
                var g = f.node;
                if (!g.Db)
                    if (f.node.parent = a,
                    f.node.depth = a.depth + 1,
                    b) {
                        if (d = g.oa,
                        d.qd(!0, c) && !this.wo(g, !0, c))
                            return !1
                    } else if (!this.wo(g, !1, c))
                        return !1;
                f = f.next
            }
            return !0
        },
        vo: function(a, b, c, d) {
            a.Db = !0;
            if (!b(a, !1, d))
                return !1;
            for (var f = a.jb; null != f; ) {
                var g = f.node;
                if (!g.Db)
                    if (f.node.parent = a,
                    f.node.depth = a.depth + 1,
                    c) {
                        if (b(g, !0, d) && !this.vo(g, b, !0, d))
                            return !1
                    } else if (!this.vo(g, b, !1, d))
                        return !1;
                f = f.next
            }
            return !0
        },
        Hq: function(a) {
            var b = Array(a);
            ba.Yb(this.ye, 0, b, 0, this.eq);
            this.ye = b;
            this.eq = a;
            return this.ye
        },
        Gq: function(a) {
            var b = Array(a);
            ba.Yb(this.Qd, 0, b, 0, this.Wp);
            this.Qd = b;
            this.Wp = a
        },
        m: Ge
    };
    ge.g = ["199"];
    ge.$ = [ie];
    ge.prototype = {
        s: function() {
            this.Ia = this.bb = null
        },
        ga: function() {
            return null != this.Ia
        },
        next: function() {
            var a = this.Ia.oa;
            this.Ia = this.Ia.next;
            return a
        },
        remove: function() {
            throw 0;
        },
        m: ge
    };
    fe.g = ["200"];
    fe.$ = [Qc];
    fe.prototype = {
        s: function() {
            this.next = this.Jc = this.node = null
        },
        m: fe
    };
    Bd.g = ["201"];
    Bd.$ = [Qc];
    Bd.prototype = {
        s: function() {
            this.kh = this.jb = this.next = this.Jc = this.oa = null
        },
        Pz: function(a) {
            for (var b = !1, c = this.jb; null != c; ) {
                if (c.node == a) {
                    b = !0;
                    break
                }
                c = c.next
            }
            return b ? c : null
        },
        Fy: function(a, b) {
            null == b && (b = 1);
            a = null != this.kh.yu ? this.kh.yu(a, b) : new fe(a,b);
            a.next = this.jb;
            null != this.jb && (this.jb.Jc = a);
            this.jb = a;
            this.Tw++;
            return this
        },
        m: Bd
    };
    cd.g = ["202"];
    cd.next = function() {
        null == cd.zy && (cd.zy = 0);
        return cd.zy++
    }
    ;
    ee.g = ["203"];
    ee.$ = [Qc];
    ee.prototype = {
        m: ee
    };
    qg.g = ["206"];
    qg.$ = [bc];
    Gf.g = ["207"];
    Gf.$ = [bc];
    Td.g = ["208"];
    Td.$ = [Gf];
    Td.prototype = {
        set: function(a, b) {
            this.f == this.B && this.T();
            var c = this.ka
              , d = this.Fa;
            d.f == d.B && d.T();
            var f = d.a
              , g = d.Xa
              , e = 3 * d.ka;
            d.ka = d.Ba[d.ka];
            f[e] = a;
            f[e + 1] = c;
            var k = 73856093 * a & d.ab
              , h = g[k];
            if (-1 == h)
                g[k] = e,
                d.f++,
                d = !0;
            else {
                g = f[h] != a;
                for (k = f[h + 2]; -1 != k; )
                    f[k] == a && (g = !1),
                    h = k,
                    k = f[k + 2];
                f[h + 2] = e;
                d.f++;
                d = g
            }
            this.wh[c] = b;
            this.Ff[c] = a;
            this.ka = this.Ba[c];
            this.f++;
            return d
        },
        dr: function(a) {
            var b = this.Fa
              , c = b.Xa[73856093 * a & b.ab];
            if (-1 == c)
                c = -2147483648;
            else if (b = b.a,
            b[c] == a)
                c = b[c + 1];
            else {
                var d = -2147483648;
                for (c = b[c + 2]; -1 != c; ) {
                    if (b[c] == a) {
                        d = b[c + 1];
                        break
                    }
                    c = b[c + 2]
                }
                c = d
            }
            if (-2147483648 == c)
                return !1;
            this.wh[c] = null;
            this.Ff[c] = -2147483648;
            this.Ba[c] = this.ka;
            this.ka = c;
            c = this.Fa;
            var f = 73856093 * a & c.ab
              , g = c.Xa;
            b = g[f];
            if (-1 != b)
                if (d = c.a,
                a == d[b])
                    g[f] = -1 == d[b + 2] ? -1 : d[b + 2],
                    a = b / 3 | 0,
                    c.Ba[a] = c.ka,
                    c.ka = a,
                    d[b + 1] = -2147483648,
                    d[b + 2] = -1,
                    c.f--;
                else {
                    f = !1;
                    g = b;
                    for (b = d[b + 2]; -1 != b; ) {
                        if (d[b] == a) {
                            f = !0;
                            break
                        }
                        g = b;
                        b = d[g + 2]
                    }
                    f && (d[g + 2] = d[b + 2],
                    a = b / 3 | 0,
                    c.Ba[a] = c.ka,
                    c.ka = a,
                    d[b + 1] = -2147483648,
                    d[b + 2] = -1,
                    c.f--)
                }
            this.f--;
            return !0
        },
        T: function() {
            var a = this.B;
            this.B = ic.fe(this.Fa.Bc, this.B);
            var b = Array(this.B);
            ba.Yb(this.Ba, 0, b, 0, a);
            this.Ba = b;
            b = Array(this.B);
            ba.Yb(this.Ff, 0, b, 0, a);
            b = this.Ff = b;
            for (var c = a, d = this.B; c < d; ) {
                var f = c++;
                b[f] = -2147483648
            }
            b = this.Ba;
            c = a - 1;
            for (d = this.B - 1; c < d; )
                f = c++,
                b[f] = f + 1;
            b[this.B - 1] = -1;
            this.ka = a;
            b = Array(this.B);
            ba.Yb(this.wh, 0, b, 0, a);
            this.wh = b
        },
        m: Td
    };
    vc.g = ["209"];
    vc.$ = [Gf];
    vc.prototype = {
        rH: function(a, b) {
            var c = this.Xa[73856093 * a & this.ab];
            if (-1 != c) {
                var d = this.a;
                if (d[c] == a && d[c + 1] == b)
                    return !0;
                for (c = d[c + 2]; -1 != c; ) {
                    if (d[c] == a && d[c + 1] == b)
                        return !0;
                    c = d[c + 2]
                }
            }
            return !1
        },
        HL: function(a, b) {
            var c = 73856093 * a & this.ab
              , d = this.Xa
              , f = d[c];
            if (-1 == f)
                return !1;
            var g = this.a;
            if (a == g[f] && b == g[f + 1])
                return d[c] = -1 == g[f + 2] ? -1 : g[f + 2],
                a = f / 3 | 0,
                this.Ba[a] = this.ka,
                this.ka = a,
                g[f + 1] = -2147483648,
                g[f + 2] = -1,
                this.f--,
                !0;
            c = !1;
            d = f;
            for (f = g[f + 2]; -1 != f; ) {
                if (g[f] == a && g[f + 1] == b) {
                    c = !0;
                    break
                }
                d = f;
                f = g[d + 2]
            }
            return c ? (g[d + 2] = g[f + 2],
            a = f / 3 | 0,
            this.Ba[a] = this.ka,
            this.ka = a,
            g[f + 1] = -2147483648,
            g[f + 2] = -1,
            --this.f,
            !0) : !1
        },
        T: function() {
            var a = this.B;
            this.B = ic.fe(this.Bc, this.B);
            var b = Array(this.B);
            ba.Yb(this.Ba, 0, b, 0, a);
            this.Ba = b;
            b = Array(3 * this.B);
            ba.Yb(this.a, 0, b, 0, 3 * a);
            this.a = b;
            b = this.Ba;
            for (var c = a - 1, d = this.B - 1; c < d; ) {
                var f = c++;
                b[f] = f + 1
            }
            b[this.B - 1] = -1;
            this.ka = a;
            c = 3 * a + 2;
            b = this.a;
            d = 0;
            for (a = this.B - a; d < a; )
                d++,
                b[c - 1] = -2147483648,
                b[c] = -1,
                c += 3
        },
        s: function() {
            this.Ba = this.a = this.Xa = null;
            null != this.Mb && (this.Mb.s(),
            this.Mb = null)
        },
        m: vc
    };
    Fe.g = ["211"];
    Fe.$ = [qg];
    Fe.prototype = {
        has: function(a) {
            if (this.vf())
                return !1;
            for (var b = this.a, c = 0, d = this.f; c < d; ) {
                var f = c++;
                if (b[f] == a)
                    return !0
            }
            return !1
        },
        set: function(a) {
            for (var b = this.a, c = 0, d = this.f; c < d; ) {
                var f = c++;
                if (b[f] == a)
                    return !1
            }
            this.f == this.B && (this.T(),
            b = this.a);
            b[this.f++] = a;
            return !0
        },
        vf: function() {
            return 0 == this.f
        },
        T: function() {
            this.B = ic.fe(this.Bc, this.B);
            this.Vf(this.B)
        },
        Vf: function(a) {
            a = Array(a);
            ba.Yb(this.a, 0, a, 0, this.f);
            this.a = a
        },
        m: Fe
    };
    Ee.g = ["212"];
    Ee.$ = [Hf];
    Ee.prototype = {
        enqueue: function(a) {
            this.f == this.B && this.T();
            this.a[++this.f] = a;
            a = a.position = this.f;
            var b = this.a
              , c = a >> 1
              , d = b[a]
              , f = d.ba;
            if (this.se)
                for (; 0 < c; ) {
                    var g = b[c];
                    if (0 > f - g.ba)
                        b[a] = g,
                        g.position = a,
                        a = c,
                        c >>= 1;
                    else
                        break
                }
            else
                for (; 0 < c; )
                    if (g = b[c],
                    0 < f - g.ba)
                        b[a] = g,
                        g.position = a,
                        a = c,
                        c >>= 1;
                    else
                        break;
            b[a] = d;
            d.position = a
        },
        rz: function() {
            var a = this.a
              , b = a[1];
            b.position = -1;
            a[1] = a[this.f];
            a = 1;
            var c = this.a
              , d = a << 1
              , f = c[a]
              , g = f.ba;
            if (this.se)
                for (; d < this.f; ) {
                    d < this.f - 1 && 0 < c[d].ba - c[d + 1].ba && ++d;
                    var e = c[d];
                    if (0 < g - e.ba)
                        c[a] = e,
                        e.position = a,
                        a = f.position = d,
                        d <<= 1;
                    else
                        break
                }
            else
                for (; d < this.f; )
                    if (d < this.f - 1 && 0 > c[d].ba - c[d + 1].ba && ++d,
                    e = c[d],
                    0 > g - e.ba)
                        c[a] = e,
                        e.position = a,
                        a = f.position = d,
                        d <<= 1;
                    else
                        break;
            c[a] = f;
            f.position = a;
            this.f--;
            return b
        },
        oK: function(a, b) {
            var c = a.ba;
            if (c == b)
                return this;
            a.ba = b;
            a = a.position;
            if (this.se)
                if (b < c) {
                    b = a;
                    c = this.a;
                    a = b >> 1;
                    var d = c[b]
                      , f = d.ba;
                    if (this.se)
                        for (; 0 < a; ) {
                            var g = c[a];
                            if (0 > f - g.ba)
                                c[b] = g,
                                g.position = b,
                                b = a,
                                a >>= 1;
                            else
                                break
                        }
                    else
                        for (; 0 < a; )
                            if (g = c[a],
                            0 < f - g.ba)
                                c[b] = g,
                                g.position = b,
                                b = a,
                                a >>= 1;
                            else
                                break
                } else {
                    b = a;
                    c = this.a;
                    a = b << 1;
                    f = c[b];
                    g = f.ba;
                    if (this.se)
                        for (; a < this.f; )
                            if (a < this.f - 1 && 0 < c[a].ba - c[a + 1].ba && ++a,
                            d = c[a],
                            0 < g - d.ba)
                                c[b] = d,
                                d.position = b,
                                b = f.position = a,
                                a <<= 1;
                            else
                                break;
                    else
                        for (; a < this.f; )
                            if (a < this.f - 1 && 0 > c[a].ba - c[a + 1].ba && ++a,
                            d = c[a],
                            0 > g - d.ba)
                                c[b] = d,
                                d.position = b,
                                b = f.position = a,
                                a <<= 1;
                            else
                                break;
                    c[b] = f;
                    f.position = b;
                    b = this.f;
                    c = this.a;
                    a = b >> 1;
                    d = c[b];
                    f = d.ba;
                    if (this.se)
                        for (; 0 < a; )
                            if (g = c[a],
                            0 > f - g.ba)
                                c[b] = g,
                                g.position = b,
                                b = a,
                                a >>= 1;
                            else
                                break;
                    else
                        for (; 0 < a; )
                            if (g = c[a],
                            0 < f - g.ba)
                                c[b] = g,
                                g.position = b,
                                b = a,
                                a >>= 1;
                            else
                                break
                }
            else {
                if (b > c)
                    b = a;
                else {
                    b = a;
                    c = this.a;
                    a = b << 1;
                    f = c[b];
                    g = f.ba;
                    if (this.se)
                        for (; a < this.f; )
                            if (a < this.f - 1 && 0 < c[a].ba - c[a + 1].ba && ++a,
                            d = c[a],
                            0 < g - d.ba)
                                c[b] = d,
                                d.position = b,
                                b = f.position = a,
                                a <<= 1;
                            else
                                break;
                    else
                        for (; a < this.f; )
                            if (a < this.f - 1 && 0 > c[a].ba - c[a + 1].ba && ++a,
                            d = c[a],
                            0 > g - d.ba)
                                c[b] = d,
                                d.position = b,
                                b = f.position = a,
                                a <<= 1;
                            else
                                break;
                    c[b] = f;
                    f.position = b;
                    b = this.f
                }
                c = this.a;
                a = b >> 1;
                d = c[b];
                f = d.ba;
                if (this.se)
                    for (; 0 < a; )
                        if (g = c[a],
                        0 > f - g.ba)
                            c[b] = g,
                            g.position = b,
                            b = a,
                            a >>= 1;
                        else
                            break;
                else
                    for (; 0 < a; )
                        if (g = c[a],
                        0 < f - g.ba)
                            c[b] = g,
                            g.position = b,
                            b = a,
                            a >>= 1;
                        else
                            break
            }
            c[b] = d;
            d.position = b;
            return this
        },
        remove: function(a) {
            if (0 == this.f)
                return !1;
            if (1 == a.position)
                this.rz();
            else {
                a = a.position;
                var b = this.a;
                b[a] = b[this.f];
                b = a;
                var c = this.a
                  , d = b << 1
                  , f = c[b]
                  , g = f.ba;
                if (this.se)
                    for (; d < this.f; ) {
                        d < this.f - 1 && 0 < c[d].ba - c[d + 1].ba && ++d;
                        var e = c[d];
                        if (0 < g - e.ba)
                            c[b] = e,
                            e.position = b,
                            b = f.position = d,
                            d <<= 1;
                        else
                            break
                    }
                else
                    for (; d < this.f; )
                        if (d < this.f - 1 && 0 > c[d].ba - c[d + 1].ba && ++d,
                        e = c[d],
                        0 > g - e.ba)
                            c[b] = e,
                            e.position = b,
                            b = f.position = d,
                            d <<= 1;
                        else
                            break;
                c[b] = f;
                f.position = b;
                b = this.a;
                c = a >> 1;
                d = b[a];
                e = d.ba;
                if (this.se)
                    for (; 0 < c; )
                        if (f = b[c],
                        0 > e - f.ba)
                            b[a] = f,
                            f.position = a,
                            a = c,
                            c >>= 1;
                        else
                            break;
                else
                    for (; 0 < c; )
                        if (f = b[c],
                        0 < e - f.ba)
                            b[a] = f,
                            f.position = a,
                            a = c,
                            c >>= 1;
                        else
                            break;
                b[a] = d;
                d.position = a;
                this.f--
            }
            return !0
        },
        clear: function(a) {
            null == a && (a = !1);
            a && ba.Be(this.a);
            this.f = 0
        },
        iterator: function() {
            if (this.Tb) {
                if (null == this.Mb)
                    return new de(this);
                this.Mb.reset();
                return this.Mb
            }
            return new de(this)
        },
        mK: function() {
            for (var a = this.f >> 1; 1 <= a; )
                this.kA(a, this.f),
                --a
        },
        kA: function(a, b) {
            var c = this.a
              , d = a << 1
              , f = d + 1
              , g = a;
            this.se ? (d <= b && 0 > c[d].ba - c[g].ba && (g = d),
            d + 1 <= b && 0 > c[d + 1].ba - c[g].ba && (g = f)) : (d <= b && 0 < c[d].ba - c[g].ba && (g = d),
            d + 1 <= b && 0 < c[d + 1].ba - c[g].ba && (g = f));
            g != a && (d = c[g],
            f = c[a],
            c[g] = f,
            c[a] = d,
            a = d.position,
            d.position = f.position,
            f.position = a,
            this.kA(g, b))
        },
        T: function() {
            this.B = ic.fe(this.Bc, this.B);
            this.Vf(this.B)
        },
        Vf: function(a) {
            a = Array(a + 1);
            ba.Yb(this.a, 0, a, 0, this.f + 1);
            this.a = a
        },
        m: Ee
    };
    de.g = ["213"];
    de.$ = [ie];
    de.prototype = {
        reset: function() {
            this.Ef = 0;
            this.th = this.bb.f;
            this.a = Array(this.th);
            ba.Yb(this.bb.a, 1, this.a, 0, this.th);
            return this
        },
        ga: function() {
            return this.Ef < this.th
        },
        next: function() {
            return this.a[this.Ef++]
        },
        remove: function() {
            this.bb.remove(this.a[this.Ef - 1])
        },
        m: de
    };
    Be.g = ["214"];
    Be.$ = [og];
    Be.prototype = {
        append: function(a) {
            if (0 == this.If || 0 == this.ue)
                a = new Ad(a,this);
            else {
                var b = this.lg;
                this.lg = this.lg.next;
                this.ue--;
                b.oa = a;
                b.next = null;
                a = b
            }
            null != this.$d ? this.$d.next = a : this.head = a;
            this.$d = a;
            this.Fv && (this.$d.next = this.head);
            this.f++;
            return a
        },
        add: function(a) {
            this.append(a)
        },
        contains: function(a) {
            for (var b = this.head, c = 0, d = this.f; c < d; ) {
                c++;
                if (b.oa == a)
                    return !0;
                b = b.next
            }
            return !1
        },
        remove: function(a) {
            var b = this.f;
            if (0 == b)
                return !1;
            for (var c = this.head, d = this.head.next, f = 1, g = this.f; f < g; )
                if (f++,
                d.oa == a) {
                    d == this.$d && (this.$d = c,
                    this.Fv && (this.$d.next = this.head));
                    var e = d.next;
                    c.next = e;
                    0 < this.If && this.ue < this.If ? (this.mk = this.mk.next = d,
                    d.oa = null,
                    d.next = null,
                    this.ue++) : d.Nb = null;
                    d = e;
                    this.f--
                } else
                    c = d,
                    d = d.next;
            this.head.oa == a && (a = this.head.next,
            c = this.head,
            0 < this.If && this.ue < this.If ? (this.mk = this.mk.next = c,
            c.oa = null,
            c.next = null,
            this.ue++) : c.Nb = null,
            this.head = a,
            null == this.head ? this.$d = null : this.Fv && (this.$d.next = this.head),
            this.f--);
            return this.f < b
        },
        clear: function(a) {
            null == a && (a = !1);
            if (a || 0 < this.If) {
                a = this.head;
                for (var b = 0, c = this.f; b < c; ) {
                    b++;
                    var d = a.next;
                    a.next = null;
                    0 < this.If && this.ue < this.If ? (this.mk = this.mk.next = a,
                    a.oa = null,
                    a.next = null,
                    this.ue++) : a.Nb = null;
                    a = d
                }
            }
            this.head = this.$d = null;
            this.f = 0
        },
        m: Be
    };
    Ad.g = ["215"];
    Ad.prototype = {
        m: Ad
    };
    pg.g = ["217"];
    pg.Bk = function(a, b) {
        var c = a.length;
        if (null == b)
            for (; 1 < --c; ) {
                b = Ef.Ay() * c | 0;
                var d = a[c];
                a[c] = a[b];
                a[b] = d
            }
        else
            for (d = 0; 1 < --c; ) {
                var f = b[d++] * c | 0
                  , g = a[c];
                a[c] = a[f];
                a[f] = g
            }
    }
    ;
    Ff.g = ["218"];
    Ff.gz = function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    ic.g = ["219"];
    ic.fe = function(a, b) {
        if (0 < a)
            b += a;
        else
            switch (a) {
            case -3:
                b <<= 1;
                break;
            case -2:
                b = (3 * b >> 1) + 1;
                break;
            case -1:
                a = b + 1;
                b = (a >> 3) + (9 > a ? 3 : 6) + a;
                break;
            case 0:
                throw 0;
            }
        return b
    }
    ;
    ba.g = ["220"];
    ba.Zq = function(a, b, c) {
        if (0 == c)
            return [];
        var d = Array(c);
        if (0 == b)
            for (b = 0; b < c; ) {
                var f = b++;
                d[f] = a[f]
            }
        else
            for (f = b,
            c = b + c; f < c; ) {
                var g = f++;
                d[g - b] = a[g]
            }
        return d
    }
    ;
    ba.Yb = function(a, b, c, d, f) {
        if (0 < f)
            if (a == c)
                if (b < d)
                    for (c = b + f,
                    d += f,
                    b = 0; b < f; )
                        b++,
                        --c,
                        --d,
                        a[d] = a[c];
                else {
                    if (b > d)
                        for (c = b,
                        b = 0; b < f; )
                            b++,
                            a[d] = a[c],
                            ++c,
                            ++d
                }
            else if (0 == b && 0 == d)
                for (d = 0; d < f; )
                    b = d++,
                    c[b] = a[b];
            else if (0 == b)
                for (b = 0; b < f; ) {
                    var g = b++;
                    c[d + g] = a[g]
                }
            else if (0 == d)
                for (d = 0; d < f; )
                    g = d++,
                    c[g] = a[b + g];
            else
                for (g = 0; g < f; ) {
                    var e = g++;
                    c[d + e] = a[b + e]
                }
    }
    ;
    ba.wa = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        for (d = 0 >= d ? a.length : c + d; c < d; )
            a[c++] = b;
        return a
    }
    ;
    ba.Be = function(a, b) {
        var c;
        null == c && (c = 0);
        null == b && (b = 0);
        for (c = 0 >= c ? a.length : b + c; b < c; )
            a[b++] = null
    }
    ;
    ba.FF = function(a, b, c) {
        for (var d = 0, f, g = c + 1; d < g; )
            f = d + (g - d >> 1),
            a[f] < b ? d = f + 1 : g = f;
        return d <= c && a[d] == b ? d : ~d
    }
    ;
    ed.g = ["221"];
    ed.prototype = {
        s: function() {
            for (var a = 0, b = this.fd; a < b; ) {
                var c = a++;
                this.Ld(this.hb[c])
            }
            ba.Be(this.hb);
            this.Ld = this.Df = this.hb = null
        },
        iterator: function() {
            var a = 0
              , b = this.size
              , c = this.hb;
            return {
                ga: function() {
                    return a < b
                },
                next: function() {
                    a += 1;
                    return c[a - 1]
                }
            }
        },
        resize: function() {
            var a = ic.fe(this.Bc, this.fd)
              , b = Array(a);
            this.fd = a;
            ba.Yb(this.hb, 0, b, 0, this.size);
            this.hb = b
        },
        m: ed
    };
    Ef.g = ["222"];
    Ef.Ay = function() {
        return Math.random()
    }
    ;
    Df.g = ["223"];
    Df.prototype = {
        m: Df
    };
    qa.g = ["224"];
    qa.ON = function(a) {
        return 0 <= a ? a <= qa.Ar : !1
    }
    ;
    qa.aO = function() {
        return null
    }
    ;
    qa.Cj = function() {
        for (var a = qa.kw.iterator(); a.ga(); ) {
            var b = a.next();
            b.data = null;
            b.sender = null
        }
    }
    ;
    qa.get = function(a, b, c) {
        var d = qa.kw;
        d = 0 < d.size ? d.hb[--d.size] : d.Df();
        d.type = a;
        d.data = b;
        d.sender = c;
        d.o = 0;
        return d
    }
    ;
    qa.put = function(a) {
        var b = qa.kw;
        b.size == b.We ? b.Ld(a) : (b.size == b.fd && b.resize(),
        b.hb[b.size++] = a)
    }
    ;
    qa.prototype = {
        m: qa
    };
    Cf.g = ["225"];
    Cf.prototype = {
        zK: function(a, b, c, d) {
            if (null != a.ta) {
                var f = a.ta.index;
                a = a.ta.dd;
                if (null != d) {
                    var g = this.pw++;
                    this.a[g] = d;
                    d = g
                } else
                    d = -1;
                g = b.f;
                var e = this.FA;
                e.a[(e.f++ + e.ua) % e.B] = g;
                e = 0;
                for (var k = this.Qd, h = this.ua + this.f, l, r; e < g; )
                    r = b.a[e++],
                    l = (h++ & 32767) << 3,
                    k[l] = f,
                    k[l + 1] = a,
                    k[l + 2] = r.ta.index,
                    k[l + 3] = r.ta.dd,
                    k[l + 4] = m.lb(r),
                    k[l + 5] = c,
                    k[l + 6] = d;
                this.f += g
            }
        },
        flush: function(a) {
            if (0 == this.f) {
                for (var b = 0, c = this.wl; b < c; ) {
                    var d = b++;
                    this.vl[d]();
                    this.vl[d] = null
                }
                this.wl = 0;
                null != a && a()
            } else if (null != a && (this.vl[this.wl++] = a),
            !this.Yv) {
                this.Yv = !0;
                b = m.hg;
                c = this.Qd;
                for (a = qa.get(-1, null, null); 0 < this.f; ) {
                    d = this.ua << 3;
                    var f = this.FA;
                    var g = f.a[f.ua++];
                    f.ua == f.B && (f.ua = 0);
                    f.f--;
                    f = g;
                    if (1 < f)
                        if (g = b[c[d]],
                        null == g || g.ta.dd != c[d + 1])
                            this.ua = this.ua + f & 32767,
                            this.f -= f;
                        else
                            for (a.type = c[d + 5],
                            a.data = this.a[c[d + 6]],
                            a.sender = g; 0 < f; ) {
                                this.ua = this.ua + 1 & 32767;
                                --this.f;
                                var e = b[c[d + 2]];
                                if (null != e && e.ta.dd == c[d + 3] && (e.Ua(a),
                                0 < (a.o & 1)))
                                    if (g = 0 < (a.o & 2),
                                    a.o = 0,
                                    g) {
                                        this.ua = this.ua + f & 32767;
                                        this.f -= f;
                                        break
                                    } else
                                        g = c[d + 4],
                                        this.ua = this.ua + g & 32767,
                                        this.f -= g,
                                        d += 8 * g,
                                        f -= g;
                                d += 8;
                                --f
                            }
                    else
                        this.ua = this.ua + 1 & 32767,
                        --this.f,
                        g = b[c[d]],
                        null != g && g.ta.dd == c[d + 1] && (e = b[c[d + 2]],
                        null != e && e.ta.dd == c[d + 3] && (a.sender = g,
                        a.type = c[d + 5],
                        a.data = this.a[c[d + 6]],
                        e.Ua(a)))
                }
                b = 0;
                for (c = this.pw; b < c; )
                    d = b++,
                    this.a[d] = null;
                this.pw = 0;
                qa.put(a);
                this.Yv = !1;
                a = 0;
                for (b = this.wl; a < b; )
                    c = a++,
                    this.vl[c](),
                    this.vl[c] = null;
                this.wl = 0
            }
        },
        m: Cf
    };
    Ta.g = ["226"];
    Ta.wa = function() {
        Ta.nB = new Cf;
        Ta.ak = new ed(function() {
            return new Q
        }
        ,function(a) {
            a.s()
        }
        ,1024)
    }
    ;
    Ta.yK = function(a) {
        if (null != a.ta) {
            var b = m.sc(a);
            if (null != b) {
                var c = qa.get(40, void 0, a);
                a = m.gv(a);
                var d = Ta.ak;
                d = (0 < d.size ? d.hb[--d.size] : d.Df()).od(a);
                for (var f = d.a, g = 0; g < a; )
                    f[g] = b,
                    b = m.Pe(b),
                    ++g;
                for (g = 0; g < a; )
                    if (f[g].Ua(c),
                    f[g] = null,
                    ++g,
                    0 < (c.o & 1)) {
                        for (; g < a; )
                            f[g++] = null;
                        break
                    }
                b = Ta.ak;
                b.size == b.We ? b.Ld(d) : (b.size == b.fd && b.resize(),
                b.hb[b.size++] = d);
                qa.put(c)
            }
        }
    }
    ;
    Ta.EC = function(a, b) {
        if (null != a.ta) {
            var c = m.sc(a);
            if (null != c) {
                b = qa.get(b, void 0, a);
                a = m.lb(a);
                var d = Ta.ak;
                d = (0 < d.size ? d.hb[--d.size] : d.Df()).od(a);
                for (var f = d.a, g = [], e = 0; e < a; )
                    f[e] = c,
                    g[e] = m.lb(c),
                    ++e,
                    c = m.sf(c);
                for (e = 0; e < a; )
                    if (f[e].Ua(b),
                    f[e] = null,
                    ++e,
                    0 < (b.o & 1)) {
                        if (c = 0 < (b.o & 2)) {
                            for (; e < a; )
                                f[e++] = null;
                            break
                        }
                        c = e;
                        for (e += g[e - 1]; c < e; )
                            f[c++] = null
                    }
                c = Ta.ak;
                c.size == c.We ? c.Ld(d) : (c.size == c.fd && c.resize(),
                c.hb[c.size++] = d);
                qa.put(b)
            }
        }
    }
    ;
    Ta.xK = function(a) {
        if (null != a.ta) {
            var b = m.getParent(a);
            if (null != b) {
                var c = qa.get(4, void 0, a);
                a = m.kl(a);
                var d = Ta.ak;
                d = (0 < d.size ? d.hb[--d.size] : d.Df()).od(a);
                for (var f = d.a, e = 0; e < a; )
                    f[e] = b,
                    b = m.getParent(b),
                    ++e;
                for (e = 0; e < a; )
                    if (f[e].Ua(c),
                    f[e] = null,
                    ++e,
                    0 < (c.o & 1)) {
                        for (; e < a; )
                            f[e++] = null;
                        break
                    }
                b = Ta.ak;
                b.size == b.We ? b.Ld(d) : (b.size == b.fd && b.resize(),
                b.hb[b.size++] = d);
                qa.put(c)
            }
        }
    }
    ;
    be.g = ["227"];
    be.H = v;
    be.prototype = x(v.prototype, {
        Ua: function(a) {
            a.sender.unsubscribe(this);
            a = this.MA;
            this.MA = null;
            this.s();
            a()
        },
        m: be
    });
    m.g = ["228"];
    m.wa = function() {
        if (!m.fp) {
            m.fp = !0;
            var a = m.TD;
            m.hg = Array(1 + a);
            m.next = Array(1 + a);
            for (var b = 1; b < a; ) {
                var c = b++;
                m.next[c] = c + 1
            }
            m.next[a] = -1;
            m.yc = Array(8 * (1 + a));
            ba.wa(m.yc, 0);
            m.sj = Array(4);
            for (a = 0; 4 > a; )
                b = a++,
                m.sj[b] = [];
            Ta.wa();
            m.Su = Array(513);
            m.bJ = 0;
            m.oq = 1
        }
    }
    ;
    m.Gj = function(a) {
        var b = cc.Oe(a)
          , c = m.test;
        if (null != ea[b] ? c.ad(b) : c.G[b])
            throw 0;
        c = m.test;
        null != ea[b] ? c.cc(b, !0) : c.G[b] = !0;
        m.fp || m.wa();
        c = m.Su[a.ENTITY_TYPE];
        null == c && (c = cc.Iu(a, []));
        a = m.test;
        null != ea[b] ? a.cc(b, !1) : a.G[b] = !1;
        return c
    }
    ;
    m.register = function(a) {
        m.fp || m.wa();
        var b = m.oq;
        m.oq = m.next[b];
        m.hg[b] = a;
        a.ta = new Df(m.bJ++,b);
        m.oy++;
        0 < (a.A & 128) && (b = (null == a ? null : M.qf(a)).ENTITY_TYPE,
        m.Su[b] = a);
        m.Vq(a, 0)
    }
    ;
    m.unregister = function(a) {
        var b = a.ta.index;
        m.hg[b] = null;
        for (var c = b << 3, d = 0; 8 > d; ) {
            var f = d++;
            m.yc[c + f] = 0
        }
        m.next[b] = m.oq;
        m.oq = b;
        0 < (a.A & 128) && (m.Su[(null == a ? null : M.qf(a)).ENTITY_TYPE] = null);
        a.ta.dd |= -2147483648;
        a.A |= 64;
        a.ta = null;
        m.oy--;
        m.Vq(a, 3)
    }
    ;
    m.Vq = function(a, b) {
        b = m.sj[b];
        var c = b.length;
        if (0 != c)
            for (var d = 0; d < c; )
                b[d](a) ? ++d : (b[d] = b.pop(),
                --c)
    }
    ;
    m.gl = function(a) {
        for (var b = []; null != a; )
            b.push(a),
            a = m.sf(a);
        for (var c = 0, d = b.length; c < d; )
            c++,
            a = b.pop(),
            a.ya(),
            m.unregister(a)
    }
    ;
    m.sf = function(a) {
        return m.hg[m.yc[a.ta.index << 3]]
    }
    ;
    m.Jh = function(a, b) {
        m.yc[a.ta.index << 3] = null == b ? 0 : b.ta.index
    }
    ;
    m.getParent = function(a) {
        return m.hg[m.yc[(a.ta.index << 3) + 1]]
    }
    ;
    m.SC = function(a, b) {
        m.yc[(a.ta.index << 3) + 1] = null == b ? 0 : b.ta.index
    }
    ;
    m.sc = function(a) {
        return m.hg[m.yc[(a.ta.index << 3) + 2]]
    }
    ;
    m.NC = function(a, b) {
        m.yc[(a.ta.index << 3) + 2] = null == b ? 0 : b.ta.index
    }
    ;
    m.rf = function(a) {
        return m.hg[m.yc[(a.ta.index << 3) + 3]]
    }
    ;
    m.Ax = function(a, b) {
        m.yc[(a.ta.index << 3) + 3] = null == b ? 0 : b.ta.index
    }
    ;
    m.Pe = function(a) {
        return m.hg[m.yc[(a.ta.index << 3) + 4]]
    }
    ;
    m.Nq = function(a, b) {
        m.yc[(a.ta.index << 3) + 4] = null == b ? 0 : b.ta.index
    }
    ;
    m.lb = function(a) {
        return m.yc[(a.ta.index << 3) + 5]
    }
    ;
    m.Oq = function(a, b) {
        m.yc[(a.ta.index << 3) + 5] = b
    }
    ;
    m.kl = function(a) {
        return m.yc[(a.ta.index << 3) + 6]
    }
    ;
    m.MC = function(a, b) {
        m.yc[(a.ta.index << 3) + 6] = b
    }
    ;
    m.gv = function(a) {
        return m.yc[(a.ta.index << 3) + 7]
    }
    ;
    m.JC = function(a, b) {
        m.yc[(a.ta.index << 3) + 7] = b
    }
    ;
    fb.g = ["229"];
    fb.ud = function(a, b) {
        for (a = m.sc(a); null != a; ) {
            if (M.eo(a, b))
                return a;
            a = m.Pe(a)
        }
        return null
    }
    ;
    Hb.g = ["230"];
    Hb.X = function() {
        return m.Gj(Hb)
    }
    ;
    Hb.H = v;
    Hb.prototype = x(v.prototype, {
        GN: function() {
            return this.ke
        },
        ya: function() {
            ba.Be(this.Rj);
            this.Rj = null;
            ba.Be(this.ye);
            this.Up = this.ye = null
        },
        ra: function(a) {
            this.ke && (jb.update(),
            this.Bp += a,
            30 < this.Bp && (this.Bp = 0,
            ba.Be(this.Rj, this.Mp),
            this.Mp = 0),
            this.ZJ(a),
            Ta.nB.flush(null))
        },
        qc: function(a) {
            this.ke && this.XJ(a)
        },
        ZJ: function(a) {
            for (var b = this.Rj, c = this.Up, d, f, e = 0, n = this.Xy(); e < n; ) {
                var k = e++;
                d = b[k];
                f = d.A;
                0 < (f & 96) || c[k] || 0 != (f & 2) || d.ra(a)
            }
        },
        XJ: function(a) {
            for (var b = this.Rj, c = this.Up, d, f, e = 0, n = this.Xy(); e < n; ) {
                var k = e++;
                d = b[k];
                f = d.A;
                0 < (f & 96) || (c[k] ? 0 == (f & 16) && d.cx(a) : 0 == (f & 8) && d.qc(a))
            }
        },
        Xy: function() {
            for (var a = this.Rj, b = this.Up, c = this.ye, d = 0, f = 0, e, n = m.sc(this), k = null; null != n; )
                if (0 < (n.A & 1))
                    if (e = m.Pe(n),
                    null != e)
                        n = e;
                    else {
                        for (; null != m.sc(n); )
                            n = m.rf(n);
                        n = m.sf(n)
                    }
                else
                    null != m.sc(n) && (c[f++] = n,
                    k = m.rf(n)),
                    a[d] = n,
                    b[d] = !1,
                    ++d,
                    0 < f && k == n && (e = c[--f],
                    a[d] = e,
                    b[d] = !0,
                    ++d),
                    n = m.sf(n);
            for (; 0 < f; )
                e = c[--f],
                a[d] = e,
                b[d] = !0,
                ++d;
            d > this.Mp && (this.Mp = d);
            return d
        },
        m: Hb
    });
    Bf.g = ["231"];
    Bf.prototype = {
        m: Bf
    };
    var xa = {
        pb: !0,
        ob: ["EStandard", "ELeft", "ERight", "ENumPad"],
        ij: ["EStandard", 0]
    };
    xa.ij.toString = h;
    xa.ij.l = xa;
    xa.Mk = ["ELeft", 1];
    xa.Mk.toString = h;
    xa.Mk.l = xa;
    xa.Ok = ["ERight", 2];
    xa.Ok.toString = h;
    xa.Ok.l = xa;
    xa.Nk = ["ENumPad", 3];
    xa.Nk.toString = h;
    xa.Nk.l = xa;
    xa.Gb = [xa.ij, xa.Mk, xa.Ok, xa.Nk];
    Gb.g = ["232"];
    Gb.X = function() {
        return m.Gj(Gb)
    }
    ;
    Gb.H = v;
    Gb.prototype = x(v.prototype, {
        ya: function() {
            this.Bb.clear();
            this.Ff = this.Bb = null;
            window.removeEventListener("keydown", G(this, this.aC), !0);
            window.removeEventListener("keyup", G(this, this.bC), !0)
        },
        subscribe: function(a) {
            this.Bb.add(a);
            return this
        },
        unsubscribe: function(a) {
            this.Bb.remove(a);
            return this
        },
        QF: function() {
            this.Bb.clear();
            return this
        },
        aC: function(a) {
            var b = a.keyCode;
            if (!this.Ff[b]) {
                this.Ff[b] = !0;
                this.vw[b] += 1;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.altKey = a.altKey;
                switch (a.location) {
                case 1:
                    a = xa.Mk;
                    break;
                case 2:
                    a = xa.Ok;
                    break;
                case 3:
                    a = xa.Nk;
                    break;
                default:
                    a = xa.ij
                }
                this.location = a;
                this.zo(!0, b)
            }
        },
        bC: function(a) {
            var b = a.keyCode;
            this.Ff[b] = !1;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            this.altKey = a.altKey;
            switch (a.location) {
            case 1:
                a = xa.Mk;
                break;
            case 2:
                a = xa.Ok;
                break;
            case 3:
                a = xa.Nk;
                break;
            default:
                a = xa.ij
            }
            this.location = a;
            this.zo(!1, b)
        },
        zo: function(a, b) {
            var c = new Bf;
            c.Me = a;
            c.er = !a;
            c.code = b;
            c.shift = this.shiftKey;
            for (a = this.Bb.Rc.head; null != a; )
                b = a.next,
                a.oa(c),
                a = b
        },
        m: Gb
    });
    hc.g = ["233"];
    hc.H = v;
    hc.prototype = x(v.prototype, {
        To: function() {
            var a = this.hk;
            return new B(a.x,a.y)
        },
        ya: function() {
            this.hk = null;
            this.Bb.clear();
            this.SA = this.YA = this.Bb = null
        },
        subscribe: function(a) {
            this.Bb.add(a)
        },
        unsubscribe: function(a) {
            null == a && (a = this.SA);
            this.Bb.remove(a)
        },
        Ye: function(a, b, c, d, f) {
            null == f && (f = 0);
            null == d && (d = 0);
            a |= 0;
            var e = b | 0;
            null != this.qC && this.qC(a, e, c, d, f);
            this.kI ? (b = this.YA,
            b.od(b.f + 5),
            b.a[b.f++] = a,
            b.a[b.f++] = e,
            c = c[1],
            b.a[b.f++] = c,
            b.a[b.f++] = d,
            b.a[b.f++] = f) : this.zo(a, e, c, d, f)
        },
        zo: function(a, b, c, d, f) {
            var e = new Af(this);
            e.action = c;
            e.iO = d;
            e.hint = f;
            e.x = a;
            e.y = b;
            for (b = this.Bb.Rc.head; null != b; )
                a = b.next,
                this.SA = b = b.oa,
                b(e),
                b = a
        },
        pL: function(a) {
            var b = !1;
            0 > this.Zp[a] ? this.Zp[a] = (new Date).getTime() / 1E3 : (.5 > (new Date).getTime() / 1E3 - this.Zp[a] && (b = !0),
            this.Zp[a] = -1);
            return b
        },
        m: hc
    });
    Ga.g = ["234"];
    Ga.X = function() {
        return m.Gj(Ga)
    }
    ;
    Ga.H = hc;
    Ga.prototype = x(hc.prototype, {
        sG: function() {
            this.Np |= 8
        },
        ya: function() {
            var a = window;
            a.removeEventListener("mousedown", G(this, this.cC));
            a.removeEventListener("mouseup", G(this, this.eC));
            a.removeEventListener("mousemove", G(this, this.dC));
            a.removeEventListener("touchstart", G(this, this.hC));
            a.removeEventListener("touchend", G(this, this.fC));
            a.removeEventListener("touchmove", G(this, this.gC));
            this.Vv = null;
            hc.prototype.ya.call(this)
        },
        cC: function(a) {
            if (this.enabled) {
                var b = 1 << a.which;
                0 != (this.Np & b) && (0 < (b & 2) && (this.Me = !0),
                a = this.Oc(a, !0),
                this.Ye(a.x, a.y, va.Kg, 0, b))
            }
        },
        eC: function(a) {
            if (this.enabled) {
                var b = 1 << a.which;
                if (0 != (this.Np & b)) {
                    0 < (b & 2) && (this.Me = !1);
                    var c = this.Oc(a, !0);
                    this.pL(a.which) && (b |= 16);
                    this.Ye(c.x, c.y, va.bg, 0, b)
                }
            }
        },
        dC: function(a) {
            this.enabled && (a = this.Oc(a, !0),
            this.Ye(a.x, a.y, va.Sh, 0, 0))
        },
        hC: function(a) {
            if (this.enabled)
                if (this.mw) {
                    var b = 0;
                    for (a = a.changedTouches; b < a.length; ) {
                        var c = a[b];
                        ++b;
                        var d = this.Oc(c, !1);
                        if (null == this.qe) {
                            this.qe = c.identifier;
                            this.Me = !0;
                            var f = this.hk;
                            f.x = d.x;
                            f.y = d.y
                        }
                        this.Ye(d.x, d.y, va.Kg, c.identifier)
                    }
                } else
                    for (b = 0,
                    a = a.changedTouches; b < a.length; )
                        if (c = a[b],
                        ++b,
                        null == this.qe) {
                            this.qe = c.identifier;
                            this.Me = !0;
                            b = this.Oc(c, !0);
                            this.Ye(b.x, b.y, va.Kg);
                            break
                        }
        },
        fC: function(a) {
            if (this.enabled)
                if (this.mw)
                    for (var b = 0, c = a.changedTouches; b < c.length; ) {
                        var d = c[b];
                        ++b;
                        a = this.Oc(d);
                        if (d.identifier == this.qe) {
                            var f = this.hk;
                            f.x = a.x;
                            f.y = a.y;
                            this.qe = null
                        }
                        this.Ye(a.x, a.y, va.bg, d.identifier)
                    }
                else {
                    b = 0;
                    for (c = a.changedTouches; b < c.length; )
                        if (d = c[b],
                        ++b,
                        d.identifier == this.qe) {
                            this.qe = null;
                            this.Me = !1;
                            a = this.Oc(d);
                            this.Ye(a.x, a.y, va.bg);
                            return
                        }
                    b = a.changedTouches[0];
                    this.qe = b.identifier;
                    a = this.Oc(b);
                    this.Ye(a.x, a.y, va.bg)
                }
        },
        gC: function(a) {
            if (this.enabled)
                if (this.mw)
                    for (var b = 0, c = a.changedTouches; b < c.length; ) {
                        var d = c[b];
                        ++b;
                        a = this.Oc(d);
                        if (d.identifier == this.qe) {
                            var f = this.hk;
                            f.x = a.x;
                            f.y = a.y
                        }
                        this.Ye(a.x, a.y, va.Sh, d.identifier)
                    }
                else {
                    c = 0;
                    for (d = a.changedTouches; c < d.length; )
                        if (b = d[c],
                        ++c,
                        b.identifier == this.qe) {
                            a = this.Oc(b, !0);
                            this.Ye(a.x, a.y, va.Sh, b.identifier);
                            return
                        }
                    a = a.changedTouches[0];
                    this.qe = a.identifier;
                    a = this.Oc(a, !0);
                    this.Ye(a.x, a.y, va.Sh)
                }
        },
        Oc: function(a, b) {
            null == b && (b = !1);
            if (null == this.Vv)
                this.Ae.x = a.clientX * this.Kd | 0,
                this.Ae.y = a.clientY * this.Kd | 0;
            else {
                var c = this.Vv.getBoundingClientRect()
                  , d = a.clientX;
                a = a.clientY;
                d < c.left && (d = c.left);
                d > c.right && (d = c.right);
                a < c.top && (a = c.top);
                a > c.bottom && (a = c.bottom);
                this.Ae.x = (d - c.left) * this.Kd | 0;
                this.Ae.y = (a - c.top) * this.Kd | 0
            }
            b && (b = this.hk,
            c = this.Ae,
            b.x = c.x,
            b.y = c.y);
            return this.Ae
        },
        m: Ga
    });
    var va = {
        pb: !0,
        ob: ["EPress", "ERelease", "EMove"],
        Kg: ["EPress", 0]
    };
    va.Kg.toString = h;
    va.Kg.l = va;
    va.bg = ["ERelease", 1];
    va.bg.toString = h;
    va.bg.l = va;
    va.Sh = ["EMove", 2];
    va.Sh.toString = h;
    va.Sh.l = va;
    va.Gb = [va.Kg, va.bg, va.Sh];
    Af.g = ["235"];
    Af.prototype = {
        Re: function() {
            return new B(this.x,this.y)
        },
        m: Af
    };
    zf.g = ["236"];
    B.g = ["237"];
    B.prototype = {
        m: B
    };
    $a.g = ["238"];
    $a.prototype = {
        m: $a
    };
    ae.g = ["239"];
    ae.prototype = {
        m: ae
    };
    Z.g = ["240"];
    Z.fI = function() {
        return function(a) {
            return a
        }
    }
    ;
    Z.om = function() {
        var a = Math;
        return function(b) {
            return a.pow(b, 2)
        }
    }
    ;
    Z.Eb = function(a) {
        var b = 0 == (a & 1) ? -1 : 1
          , c = Math;
        return function(d) {
            return c.pow(d - 1, a) * b + 1
        }
    }
    ;
    Z.qj = function(a) {
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            --a;
            return a * a * ((b + 1) * a + b) + 1
        }
    }
    ;
    Z.el = function(a) {
        var b = 0;
        null == a && (a = .3);
        null == b && (b = 0);
        var c = Math;
        if (1 > b) {
            var d = 1;
            var f = .25 * a
        } else
            d = b,
            f = a / 6.283185307179586 * c.asin(1 / d);
        return function(b) {
            return d * c.pow(2, -10 * b) * c.sin(6.283185307179586 * (b - f) / a) + 1
        }
    }
    ;
    Ud.g = ["241"];
    Ud.prototype = {
        m: Ud
    };
    fc.g = ["242"];
    fc.prototype = {
        of: function(a) {
            this.m11 = a.m11;
            this.m12 = a.m12;
            this.m13 = a.m13;
            this.m14 = a.m14;
            this.m21 = a.m21;
            this.m22 = a.m22;
            this.m23 = a.m23;
            this.m24 = a.m24;
            this.m31 = a.m31;
            this.m32 = a.m32;
            this.m33 = a.m33;
            this.m34 = a.m34;
            this.m41 = a.m41;
            this.m42 = a.m42;
            this.m43 = a.m43;
            this.m44 = a.m44;
            return this
        },
        HC: function() {
            this.m11 = 1;
            this.m21 = this.m14 = this.m13 = this.m12 = 0;
            this.m22 = 1;
            this.m32 = this.m31 = this.m24 = this.m23 = 0;
            this.m33 = 1;
            this.m43 = this.m42 = this.m41 = this.m34 = 0;
            this.m44 = 1;
            return this
        },
        IC: function(a, b, c) {
            this.m11 = 1;
            this.m13 = this.m12 = 0;
            this.m14 = a;
            this.m21 = 0;
            this.m22 = 1;
            this.m23 = 0;
            this.m24 = b;
            this.m32 = this.m31 = 0;
            this.m33 = 1;
            this.m34 = c;
            this.m43 = this.m42 = this.m41 = 0;
            this.m44 = 1;
            return this
        },
        NF: function(a) {
            var b = Math.sin(a);
            a = Math.cos(a);
            var c = this.m11
              , d = this.m21;
            this.m11 = a * c - b * d;
            this.m21 = b * c + a * d;
            c = this.m12;
            d = this.m22;
            this.m12 = a * c - b * d;
            this.m22 = b * c + a * d;
            c = this.m13;
            d = this.m23;
            this.m13 = a * c - b * d;
            this.m23 = b * c + a * d;
            c = this.m14;
            d = this.m24;
            this.m14 = a * c - b * d;
            this.m24 = b * c + a * d
        },
        rL: function(a) {
            var b = a.m11
              , c = a.m12
              , d = a.m13
              , f = a.m14
              , e = a.m21
              , n = a.m22
              , k = a.m23
              , h = a.m24
              , l = a.m31
              , m = a.m32
              , q = a.m33
              , p = a.m34
              , r = a.m41
              , t = a.m42
              , y = a.m43;
            a = a.m44;
            var w = this.m11
              , ja = this.m12
              , v = this.m13
              , x = this.m14;
            this.m11 = w * b + ja * e + v * l + x * r;
            this.m12 = w * c + ja * n + v * m + x * t;
            this.m13 = w * d + ja * k + v * q + x * y;
            this.m14 = w * f + ja * h + v * p + x * a;
            w = this.m21;
            ja = this.m22;
            v = this.m23;
            x = this.m24;
            this.m21 = w * b + ja * e + v * l + x * r;
            this.m22 = w * c + ja * n + v * m + x * t;
            this.m23 = w * d + ja * k + v * q + x * y;
            this.m24 = w * f + ja * h + v * p + x * a;
            w = this.m31;
            ja = this.m32;
            v = this.m33;
            x = this.m34;
            this.m31 = w * b + ja * e + v * l + x * r;
            this.m32 = w * c + ja * n + v * m + x * t;
            this.m33 = w * d + ja * k + v * q + x * y;
            this.m34 = w * f + ja * h + v * p + x * a;
            w = this.m41;
            ja = this.m42;
            v = this.m43;
            x = this.m44;
            this.m41 = w * b + ja * e + v * l + x * r;
            this.m42 = w * c + ja * n + v * m + x * t;
            this.m43 = w * d + ja * k + v * q + x * y;
            this.m44 = w * f + ja * h + v * p + x * a
        },
        qA: function(a) {
            var b = this.m11 * this.m22 - this.m12 * this.m21
              , c = this.m11 * this.m23 - this.m13 * this.m21
              , d = this.m11 * this.m24 - this.m14 * this.m21
              , f = this.m12 * this.m23 - this.m13 * this.m22
              , e = this.m12 * this.m24 - this.m14 * this.m22
              , n = this.m13 * this.m24 - this.m14 * this.m23
              , k = this.m31 * this.m42 - this.m32 * this.m41
              , h = this.m31 * this.m43 - this.m33 * this.m41
              , l = this.m31 * this.m44 - this.m34 * this.m41
              , m = this.m32 * this.m43 - this.m33 * this.m42
              , q = this.m32 * this.m44 - this.m34 * this.m42
              , p = this.m33 * this.m44 - this.m34 * this.m43
              , r = 1 / (b * p - c * q + d * m + f * l - e * h + n * k);
            a.m11 = (this.m22 * p - this.m23 * q + this.m24 * m) * r;
            a.m21 = (-this.m21 * p + this.m23 * l - this.m24 * h) * r;
            a.m31 = (this.m21 * q - this.m22 * l + this.m24 * k) * r;
            a.m41 = (-this.m21 * m + this.m22 * h - this.m23 * k) * r;
            a.m12 = (-this.m12 * p + this.m13 * q - this.m14 * m) * r;
            a.m22 = (this.m11 * p - this.m13 * l + this.m14 * h) * r;
            a.m32 = (-this.m11 * q + this.m12 * l - this.m14 * k) * r;
            a.m42 = (this.m11 * m - this.m12 * h + this.m13 * k) * r;
            a.m13 = (this.m42 * n - this.m43 * e + this.m44 * f) * r;
            a.m23 = (-this.m41 * n + this.m43 * d - this.m44 * c) * r;
            a.m33 = (this.m41 * e - this.m42 * d + this.m44 * b) * r;
            a.m43 = (-this.m41 * f + this.m42 * c - this.m43 * b) * r;
            a.m14 = (-this.m32 * n + this.m33 * e - this.m34 * f) * r;
            a.m24 = (this.m31 * n - this.m33 * d + this.m34 * c) * r;
            a.m34 = (-this.m31 * e + this.m32 * d - this.m34 * b) * r;
            a.m44 = (this.m31 * f - this.m32 * c + this.m33 * b) * r;
            return a
        },
        m: fc
    };
    Zd.g = ["243"];
    Yc.g = ["244"];
    Yc.prototype = {
        m: Yc
    };
    Xc.g = ["245"];
    Xc.prototype = {
        m: Xc
    };
    var Ng = {
        g: ["246"],
        cJ: function(a, b) {
            var c = b.x - a.x;
            a = b.y - a.y;
            b = Math.sqrt(c * c + a * a);
            return new B(c / b,a / b)
        }
    };
    Lb.g = ["247"];
    Lb.H = ae;
    Lb.prototype = x(ae.prototype, {
        m: Lb
    });
    $d.g = ["248"];
    $d.prototype = {
        Fx: function(a) {
            return this.Fw = a
        },
        $e: function() {
            throw 0;
        },
        m: $d
    };
    De.g = ["249"];
    De.H = $d;
    De.prototype = x($d.prototype, {
        Fx: function(a) {
            $d.prototype.Fx.call(this, a);
            this.pc[0] = this.Fw;
            for (var b = 1; 624 > b; ) {
                var c = b++
                  , d = this.pc[c - 1] ^ this.pc[c - 1] >>> 30;
                d = 0 > d ? (d ^ -2147483648) + -2147483648 : d;
                for (var f = 0, e = 0; 32 > e; ) {
                    var n = e++;
                    0 != (1812433253 >>> n & 1) && (n = d << n,
                    f = f + (0 > n ? (n ^ -2147483648) + -2147483648 : n) & -1,
                    f = 0 > f ? (f ^ -2147483648) + -2147483648 : f)
                }
                d = f + c & -1;
                this.pc[c] = 0 > d ? (d ^ -2147483648) + -2147483648 : d;
                d = this.pc[c] & -1;
                this.pc[c] = 0 > d ? (d ^ -2147483648) + -2147483648 : d
            }
            this.Tv = 624;
            return a
        },
        $J: function() {
            if (624 <= this.Tv) {
                for (var a, b = 0; 227 > b; ) {
                    var c = b++;
                    a = this.pc[c] & -2147483648 | this.pc[c + 1] & -2147483649;
                    a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                    a = this.pc[c + 397] ^ a >>> 1 ^ this.Hl[a & 1];
                    this.pc[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a
                }
                for (b = 227; 623 > b; )
                    c = b++,
                    a = this.pc[c] & -2147483648 | this.pc[c + 1] & -2147483649,
                    a = 0 > a ? (a ^ -2147483648) + -2147483648 : a,
                    a = this.pc[c + -227] ^ a >>> 1 ^ this.Hl[a & 1],
                    this.pc[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                a = this.pc[623] & -2147483648 | this.pc[0] & -2147483649;
                a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                a = this.pc[396] ^ a >>> 1 ^ this.Hl[a & 1];
                this.pc[623] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                this.Tv = 0
            }
            a = this.pc[this.Tv++];
            a ^= a >>> 11;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a << 7 & -1658038656;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a << 15 & -272236544;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a >>> 18;
            return Sc.Gg((0 > a ? (a ^ -2147483648) + -2147483648 : a) >>> 0)
        },
        $e: function() {
            return 2.3283064365386963E-10 * this.$J()
        },
        m: De
    });
    Wb.g = ["250"];
    Wb.aK = function() {
        return ((2 + .4999 - -.4999) * Wb.Mz() + 16384.0001 | 0) - 16384
    }
    ;
    Wb.Mz = function() {
        return Math.random()
    }
    ;
    Wb.Nz = function(a, b) {
        return a + (b - a) * Wb.Mz()
    }
    ;
    Wb.JG = function() {
        return Wb.Nz(-10, 10)
    }
    ;
    zd.g = ["251"];
    zd.prototype = {
        tF: function(a) {
            var b = a.pa.x - this.pa.x
              , c = a.pa.y - this.pa.y
              , d = a.r - this.r
              , f = b * b + c * c;
            d * d >= f ? 0 <= d && (this.pa.x = a.pa.x,
            this.pa.y = a.pa.y,
            this.r = a.r) : (d = 1 / (1 / Math.sqrt(f)),
            f = (d + a.r - this.r) / (2 * d),
            this.pa.x += f * b,
            this.pa.y += f * c,
            this.r = (d + this.r + a.r) / 2);
            return this
        },
        m: zd
    };
    $c.g = ["252"];
    $c.$ = [rg];
    $c.prototype = {
        m: $c
    };
    Ac.g = ["253"];
    Ac.$ = [rg];
    Ac.prototype = {
        m: Ac
    };
    sf.g = ["254"];
    sf.prototype = {
        aH: function(a) {
            a.x = this.aa.x + .5 * (this.C.x - this.aa.x);
            a.y = this.aa.y + .5 * (this.C.y - this.aa.y);
            return a
        },
        ma: function(a) {
            this.aa.x < this.C.x ? this.aa.y < this.C.y ? (a.c = this.aa.x,
            a.j = this.C.x,
            a.b = this.aa.y,
            a.i = this.C.y) : (a.c = this.aa.x,
            a.j = this.C.x,
            a.b = this.C.y,
            a.i = this.aa.y) : this.aa.y < this.C.y ? (a.c = this.C.x,
            a.j = this.aa.x,
            a.b = this.aa.y,
            a.i = this.C.y) : (a.c = this.C.x,
            a.j = this.aa.x,
            a.b = this.C.y,
            a.i = this.aa.y);
            return a
        },
        m: sf
    };
    yf.g = ["255"];
    yf.prototype = {
        AG: function(a, b, c, d, f, e, n, k) {
            k = e * a + n * b - k;
            if (Math.abs(k) <= c)
                return this.Aq.x = a - e * k,
                this.Aq.y = b - n * k,
                this.t = 0,
                !0;
            var g = e * d + n * f;
            if (0 <= g * k)
                return this.t = -1,
                !1;
            c = 0 < k ? c : -c;
            this.t = (c - k) / g;
            this.Aq.x = a + this.t * d - c * e;
            this.Aq.y = b + this.t * f - c * n;
            return !0
        },
        m: yf
    };
    xf.g = ["256"];
    xf.prototype = {
        test: function() {
            var a = 0
              , b = this.bp
              , c = this.nA
              , d = this.oi
              , f = this.ni;
            if (1E-6 > Math.abs(f.x)) {
                if (d.x < c.c || d.x > c.j)
                    return !1
            } else {
                var e = (c.c - d.x) / f.x;
                var n = (c.j - d.x) / f.x;
                if (e > n) {
                    var k = e;
                    e = n;
                    n = k
                }
                e > a && (a = e);
                n < b && (b = n);
                if (a > b)
                    return !1
            }
            if (1E-6 > Math.abs(f.y)) {
                if (d.y < c.b || d.y > c.i)
                    return !1
            } else if (e = (c.b - d.y) / f.y,
            n = (c.i - d.y) / f.y,
            e > n && (c = e,
            e = n,
            n = c),
            e > a && (a = e),
            n < b && (b = n),
            a > b)
                return !1;
            this.zg = a;
            this.Ui.x = d.x + f.x * a;
            this.Ui.y = d.y + f.y * a;
            return !0
        },
        m: xf
    };
    wf.g = ["257"];
    wf.prototype = {
        test: function() {
            var a = this.oi.x
              , b = this.oi.y
              , c = this.ni.x
              , d = this.ni.y
              , f = a - this.ap.x
              , e = b - this.ap.y
              , n = f * c + e * d;
            f = f * f + e * e - this.zv * this.zv;
            if (0 < f && 0 < n)
                return !1;
            f = n * n - f;
            if (0 > f)
                return !1;
            n = -n - Math.sqrt(f);
            if (n > this.bp)
                return !1;
            0 > n ? (this.Ui.x = a,
            this.Ui.y = b,
            this.zg = 0) : (this.Ui.x = a + n * c,
            this.Ui.y = b + n * d,
            this.zg = n);
            return !0
        },
        m: wf
    };
    vf.g = ["258"];
    vf.Hz = function(a, b, c, d, f, e, n) {
        f = (e - (f * a + 0 * b)) / (f * c + 0 * d);
        0 <= f && 3E38 > f && (n.x = a + f * c,
        n.y = b + f * d)
    }
    ;
    Vb.g = ["259"];
    Vb.prototype = {
        m: Vb
    };
    uf.g = ["260"];
    uf.prototype = {
        m: uf
    };
    A.g = ["261"];
    A.ra = function() {}
    ;
    A.qc = function() {}
    ;
    A.pause = function() {
        A.paused || (A.paused = !0,
        A.ff = 0)
    }
    ;
    A.resume = function() {
        A.paused && (A.paused = !1,
        A.ff = 0)
    }
    ;
    A.update = function(a) {
        if (!A.paused)
            if (0 > A.xq)
                A.xq = a;
            else {
                var b = a - A.xq;
                A.xq = a;
                A.Lx = b;
                A.elapsedTime += b;
                A.av++;
                A.Do += b;
                1 <= A.Do && (A.Do = 0,
                A.IG = A.av,
                A.av = 0);
                if (0 < A.sx)
                    A.sx -= A.Lx,
                    A.Ag = 1,
                    A.ra(0),
                    A.Xq++,
                    A.Ag = 2,
                    A.qc(1),
                    A.yz++;
                else {
                    A.ff += A.Lx * A.Yq;
                    A.ff > A.Ey && (A.ff = A.Ey);
                    for (a = A.Xq; A.ff >= A.dj && (A.ff -= A.dj,
                    A.cv = A.dj * A.Yq,
                    A.yo += A.cv,
                    A.Ag = 1,
                    A.ra(A.cv),
                    A.Xq++,
                    !A.paused); )
                        ;
                    A.Xq > a && (A.Ag = 2,
                    A.qc(A.ff / A.dj),
                    A.yz++)
                }
                A.Ag = 0
            }
    }
    ;
    jb.g = ["262"];
    jb.update = function() {
        if (jb.xI) {
            var a = A.elapsedTime
              , b = jb.SN
              , c = jb.PN
              , d = jb.QN
              , f = jb.RN;
            for (jb.CI = 1; 0 != d.f; ) {
                var e = d.a[d.ua++];
                d.ua == d.B && (d.ua = 0);
                d.f--;
                0 > e.Fg || (e.xc = jb.CI++,
                b.add(e))
            }
            for (; 0 != b.f; )
                if (e = b.a[1],
                0 > e.Fg) {
                    b.pop();
                    e.listener.iJ(e.id);
                    e.listener = null;
                    var n = jb.qw;
                    n.size == n.We ? n.Ld(e) : (n.size == n.fd && n.resize(),
                    n.hb[n.size++] = e);
                    f.dr(e.id)
                } else if (e.Fg <= a)
                    b.pop(),
                    e.Fg == e.Am ? (e.listener.YN(e.id, e.lp),
                    0 != e.Uf ? (e.Fg = e.Am + e.nK,
                    e.Am = e.Fg + e.duration,
                    0 != e.Uf && (e.Uf--,
                    e.lp++),
                    d.B == d.f && d.T(),
                    d.a[(d.f++ + d.ua) % d.B] = e) : (e.listener = null,
                    n = jb.qw,
                    n.size == n.We ? n.Ld(e) : (n.size == n.fd && n.resize(),
                    n.hb[n.size++] = e),
                    f.dr(e.id))) : (e.Zi = 0,
                    e.listener.Bh(e.id, e.lp),
                    e.listener.ex(e.Zi),
                    c.append(e));
                else
                    break;
            for (b = c.head; null != b; )
                e = b.oa,
                0 > e.Fg ? (b = b.Nb.Qx(b),
                e.listener.iJ(e.id),
                e.listener = null,
                c = jb.qw,
                c.size == c.We ? c.Ld(e) : (c.size == c.fd && c.resize(),
                c.hb[c.size++] = e),
                f.dr(e.id)) : (c = (a - e.Fg) / e.duration,
                e.Zi = 0 > c ? 0 : 1 < c ? 1 : c,
                e.listener.ex(e.Zi),
                e.Am <= a ? (b = b.Nb.Qx(b),
                e.listener.Of(e.id, e.lp),
                0 != e.Uf ? (e.Fg = e.Am + e.nK,
                e.Am = e.Fg + e.duration,
                0 != e.Uf && (e.Uf--,
                e.lp++),
                d.B == d.f && d.T(),
                d.a[(d.f++ + d.ua) % d.B] = e) : (e.listener = null,
                c = jb.qw,
                c.size == c.We ? c.Ld(e) : (c.size == c.fd && c.resize(),
                c.hb[c.size++] = e),
                f.dr(e.id))) : b = b.next)
        }
    }
    ;
    Ce.g = ["265"];
    Ce.$ = [uf];
    Ce.prototype = {
        ZC: function(a) {
            this.uB = a;
            if (null == a)
                return window.cancelAnimationFrame(this.dw),
                null;
            this.dw = window.requestAnimationFrame(G(this, this.Zy));
            return a
        },
        Zy: function(a) {
            null != this.uB && (this.uB(a / 1E3),
            this.dw = window.requestAnimationFrame(G(this, this.Zy)))
        },
        m: Ce
    };
    Ub.g = ["266"];
    Ub.Oe = function(a) {
        return M.eo(a, Bg) ? cc.Oe(a) : null != (null == a ? null : M.qf(a)) ? Ub.Oe(null == a ? null : M.qf(a)) : null
    }
    ;
    Ub.rv = function(a) {
        return M.eo(a, Bg) ? (a = cc.Oe(a),
        C.substr(a, a.lastIndexOf(".") + 1, null)) : null != (null == a ? null : M.qf(a)) ? Ub.rv(null == a ? null : M.qf(a)) : null
    }
    ;
    Yd.g = ["267"];
    Yd.prototype = {
        add: function(a) {
            return this.Rc.contains(a) ? !1 : (this.Rc.add(a),
            !0)
        },
        remove: function(a) {
            return this.Rc.remove(a)
        },
        clear: function() {
            this.Rc.clear(!0)
        },
        m: Yd
    };
    yd.g = ["268"];
    yd.nl = function(a) {
        var b = " ";
        null == b && (b = ".");
        var c = a + "";
        if (1E6 > a) {
            if (1E3 > a)
                return c;
            if (1E4 > a)
                return C.substr(c, 0, 1) + b + C.substr(c, 1, null);
            if (1E5 > a)
                return C.substr(c, 0, 2) + b + C.substr(c, 2, null);
            if (1E6 > a)
                return C.substr(c, 0, 3) + b + C.substr(c, 3, null)
        } else {
            if (1E7 > a)
                return C.substr(c, 0, 1) + b + C.substr(c, 1, 3) + b + C.substr(c, 4, null);
            if (1E8 > a)
                return C.substr(c, 0, 2) + b + C.substr(c, 2, 3) + b + C.substr(c, 5, null);
            if (1E9 > a)
                return C.substr(c, 0, 3) + b + C.substr(c, 3, 3) + b + C.substr(c, 6, null)
        }
        return 1E10 > a ? C.substr(c, 0, 1) + b + C.substr(c, 1, 3) + b + C.substr(c, 4, 3) + b + C.substr(c, 7, null) : null
    }
    ;
    ab.g = ["269"];
    ab.$ = [xb];
    ab.prototype = {
        UK: function(a) {
            return this.Vi = this.Wi = a
        },
        s: function() {
            for (var a = 0, b = this.vi; a < b.length; ) {
                var c = b[a];
                ++a;
                c.s()
            }
            null != this.parent && this.parent.removeChild(this);
            this.vi = null
        },
        ma: function() {
            var a = this.J;
            return new E(a.c,a.b,a.j,a.i)
        },
        fr: function() {
            if (null != this.te)
                this.te.ed();
            else
                for (var a = 0, b = this.vi; a < b.length; ) {
                    var c = b[a];
                    ++a;
                    c.update()
                }
        },
        update: function() {
            if ("window" == this.Ac) {
                var a = this.vK();
                a = this.align(a, 0, 0);
                this.scale.x = (a.j - a.c) / this.Ze.x;
                this.scale.y = (a.i - a.b) / this.Ze.y;
                this.parent.ma();
                this.La(a)
            } else if (0 < this.Ze.x)
                if (null == this.parent) {
                    a = new E;
                    var b = this.position.x
                      , c = a.j - a.c;
                    a.c = b;
                    a.j = b + c;
                    b = this.position.y;
                    c = a.i - a.b;
                    a.b = b;
                    a.i = b + c;
                    a.j = a.c + this.Ze.x;
                    a.i = a.b + this.Ze.y;
                    this.La(a)
                } else {
                    a = this.parent.ma();
                    var d = this.parent.scale.x;
                    b = this.parent.scale.y;
                    c = this.position.x * d;
                    var f = this.position.y * b;
                    d *= this.Ze.x;
                    var e = this.Ze.y * b;
                    b = new E;
                    b.c = c;
                    b.b = f;
                    b.j = c + d;
                    b.i = f + e;
                    c = b.c + a.c;
                    f = b.j - b.c;
                    b.c = c;
                    b.j = c + f;
                    a = b.b + a.b;
                    c = b.i - b.b;
                    b.b = a;
                    b.i = a + c;
                    this.La(b)
                }
        },
        La: function(a) {
            a = this.CF(a);
            var b = this.J;
            b.c = a.c;
            b.b = a.b;
            b.j = a.j;
            b.i = a.i;
            null != this.rd && this.rd.La(this.J);
            this.fr()
        },
        CF: function(a) {
            var b = new E(a.c,a.b,a.j,a.i);
            if (0 < this.Vi) {
                var c = 1 > this.Vi ? -(a.j - a.c) * this.Vi : -this.Vi;
                b.c -= c;
                b.b -= 0;
                b.j += c;
                b.i += 0
            }
            0 < this.Wi && (a = 1 > this.Wi ? -(a.i - a.b) * this.Wi : -this.Wi,
            b.c -= 0,
            b.b -= a,
            b.j += 0,
            b.i += a);
            return b
        },
        Cg: function(a) {
            this.te = a;
            this.te.FK(this)
        },
        Hb: function(a, b) {
            null == a ? a = new ab(null,b) : null != b && (a.name = b);
            a.parent = this;
            this.Ce++;
            this.vi.push(a);
            return a
        },
        removeChild: function(a) {
            return C.remove(this.vi, a) ? (this.Ce--,
            !0) : !1
        },
        ki: function(a) {
            return this.vi[a]
        },
        find: function(a) {
            if (this.name == a)
                return this;
            for (var b = null, c = 0, d = this.vi; c < d.length; ) {
                var f = d[c];
                ++c;
                f = f.find(a);
                null != f && (b = f)
            }
            return b
        },
        vK: function() {
            var a = this.parent.ma()
              , b = this.Ze
              , c = (a.j - a.c) / b.x
              , d = (a.i - a.b) / b.y
              , f = new E;
            c <= d ? (b = b.y * c,
            f.c = a.c,
            f.b = a.b,
            f.j = f.c + (a.j - a.c),
            f.i = f.b + b) : (b = b.x * d,
            f.c = a.c,
            c = a.b,
            d = f.i - f.b,
            f.b = c,
            f.i = c + d,
            f.j = f.c + b,
            f.i = f.b + (a.i - a.b));
            return f
        },
        align: function(a, b, c) {
            var d = this.parent.ma();
            if (0 > b) {
                b = d.c;
                var f = a.j - a.c
            } else
                b = 0 < b ? d.j - (a.j - a.c) : d.c + (d.j - d.c - (a.j - a.c)) / 2,
                f = a.j - a.c;
            a.c = b;
            a.j = b + f;
            c = 0 > c ? d.b : 0 < c ? d.i - (a.i - a.b) : d.b + (d.i - d.b - (a.i - a.b)) / 2;
            d = a.i - a.b;
            a.b = c;
            a.i = c + d;
            return a
        },
        m: ab
    };
    na.g = ["270"];
    na.H = ab;
    na.prototype = x(ab.prototype, {
        update: function() {
            ab.prototype.update.call(this);
            this.pD()
        },
        Hb: function(a, b) {
            a = ab.prototype.Hb.call(this, a, b);
            a instanceof na && this.button.Hb(M.ib(a, na).button);
            return a
        },
        s: function() {
            ab.prototype.s.call(this);
            null != this.kc && this.kc[0].s()
        },
        mJ: function(a) {
            var b = this.J;
            a = M.ib(a.shape, gc).zc;
            b.c = a.c;
            b.b = a.b;
            b.j = a.j;
            b.i = a.i;
            this.bx()
        },
        lJ: function(a) {
            var b = a.shape
              , c = b.Wd.aa;
            b = b.Wd.C;
            switch (a.id) {
            case 0:
                this.J.c = c.x;
                this.J.b = c.y - na.Lc;
                this.J.i = b.y + na.Lc;
                break;
            case 1:
                this.J.c = c.x - na.Lc;
                this.J.i = c.y;
                this.J.j = b.x + na.Lc;
                break;
            case 2:
                this.J.j = c.x;
                this.J.i = c.y + na.Lc;
                this.J.b = b.y - na.Lc;
                break;
            case 3:
                this.J.j = c.x + na.Lc,
                this.J.b = c.y,
                this.J.c = b.x - na.Lc
            }
            this.bx()
        },
        oJ: function(a) {
            var b = a.shape.Ne();
            switch (a.id) {
            case 0:
                this.J.c = b.x;
                this.J.b = b.y;
                break;
            case 1:
                this.J.c = b.x;
                this.J.i = b.y;
                break;
            case 2:
                this.J.j = b.x;
                this.J.i = b.y;
                break;
            case 3:
                this.J.j = b.x,
                this.J.b = b.y
            }
            this.bx()
        },
        bx: function() {
            this.position.x = this.J.c;
            this.position.y = this.J.b;
            var a = this.J;
            this.Ze.x = this.size.x = a.j - a.c;
            a = this.J;
            this.Ze.y = this.size.y = a.i - a.b;
            this.pD();
            a = this.J;
            this.La(new E(a.c,a.b,a.j,a.i));
            null != this.rk && this.rk()
        },
        pD: function() {
            this.Ta[0].x = this.J.c;
            this.Ta[0].y = this.J.b;
            this.Ta[1].x = this.J.c;
            this.Ta[1].y = this.J.i;
            this.Ta[2].x = this.J.j;
            this.Ta[2].y = this.J.i;
            this.Ta[3].x = this.J.j;
            this.Ta[3].y = this.J.b;
            var a = M.ib(this.kc[0].shape, gc).zc
              , b = this.J;
            a.c = b.c;
            a.b = b.b;
            a.j = b.j;
            a.i = b.i;
            this.kc[0].shape.tm();
            if (this.wB) {
                for (a = 0; 4 > a; )
                    b = a++,
                    this.kc[b + 1].shape.sm(this.Ta[b]);
                for (a = 0; 4 > a; ) {
                    b = a++;
                    var c = this.kc[b + 5].shape
                      , d = M.ib(c, yc).Wd
                      , f = d.aa;
                    d = d.C;
                    var e = na.qy
                      , n = (b + 1) % 4
                      , k = 4 * b;
                    f.x = this.Ta[b].x + e[k];
                    f.y = this.Ta[b].y + e[k + 1];
                    d.x = this.Ta[n].x + e[k + 2];
                    d.y = this.Ta[n].y + e[k + 3];
                    c.tm();
                    this.WA[b].level = 0 == (b & 1) ? f.y + .5 * (d.y - f.y) : f.x + .5 * (d.x - f.x)
                }
            }
        },
        m: na
    });
    Mb.g = ["271"];
    Mb.prototype = {
        FK: function(a) {
            this.Ma = a;
            this.wa();
            this.ed()
        },
        ed: function() {
            throw 0;
        },
        wa: function() {},
        Ij: function() {
            throw 0;
        },
        m: Mb
    };
    zc.g = ["272"];
    zc.H = Mb;
    zc.prototype = x(Mb.prototype, {
        um: function(a, b) {
            this.ve[0][a] = b
        },
        OK: function(a, b) {
            this.ve[1][a] = b
        },
        ed: function() {
            var a = this.Ma
              , b = a.ma()
              , c = 0
              , d = 0;
            0 < this.Eg && (1 > this.Eg ? (c = -((b.j - b.c) * this.Eg) / 2,
            d = -((b.i - b.b) * this.Eg) / 2) : c = d = -this.Eg / 2,
            b.c -= c,
            b.b -= d,
            b.j += c,
            b.i += d);
            for (var f = [], e = 0, n = b.j - b.c, k = 0, h = this.cols; k < h; ) {
                var l = k++;
                f[l] = e;
                e += this.ve[0][l] * n
            }
            f.push(n);
            e = [];
            n = 0;
            k = b.i - b.b;
            h = 0;
            for (l = this.rows; h < l; ) {
                var m = h++;
                e[m] = n;
                n += this.ve[1][m] * k
            }
            e.push(k);
            n = b.c;
            b = b.b;
            k = new E;
            h = 0;
            for (l = this.rows; h < l; ) {
                m = h++;
                for (var q = 0, p = this.cols; q < p; ) {
                    var r = q++;
                    k.c = n + f[r];
                    k.j = n + f[r + 1];
                    k.b = b + e[m];
                    k.i = b + e[m + 1];
                    0 < this.Eg && (k.c -= c,
                    k.b -= d,
                    k.j += c,
                    k.i += d);
                    a.ki(m * this.cols + r).La(k)
                }
            }
        },
        wa: function() {
            for (var a = this.Ma, b = 0, c = this.rows; b < c; )
                for (var d = b++, f = 0, e = this.cols; f < e; ) {
                    var n = f++;
                    a.Hb().name = "" + n + "," + d
                }
        },
        Ij: function() {
            return zc.Lg
        },
        m: zc
    });
    tf.g = ["273"];
    tf.prototype = {
        read: function() {
            "string" == typeof this.a && (this.a = JSON.parse(this.a));
            var a = this.qd(T.fa(this.a, "container"), null);
            a.update();
            return a
        },
        qd: function(a, b) {
            null == b && (b = this.Hu(a));
            if (Object.prototype.hasOwnProperty.call(a, "layout")) {
                var c = this.fG(T.fa(a, "layout"));
                b.Cg(c)
            }
            a = T.fa(a, "container");
            if (null == a)
                return b;
            c = null != b.te;
            if (a instanceof Array && null == a.l)
                if (c)
                    for (var d = 0, f = a.length; d < f; ) {
                        var e = d++;
                        c = b.ki(e);
                        this.KC(c, a[e]);
                        this.qd(a[e], c)
                    }
                else
                    for (d = 0,
                    f = a.length; d < f; )
                        e = d++,
                        c = this.Hu(a[e]),
                        b.Hb(c),
                        this.qd(a[e], c);
            else
                c ? (c = b.ki(0),
                c.name = T.fa(a, "name")) : (c = this.Hu(a),
                b.Hb(c)),
                this.qd(a, c);
            return b
        },
        fG: function(a) {
            switch (T.fa(a, "type")) {
            case dd.Lg:
                Object.prototype.hasOwnProperty.call(a, "aspect");
                var b = new dd
                  , c = Object.prototype.hasOwnProperty.call(a, "padding") ? T.fa(a, "padding") : 0;
                a = Object.prototype.hasOwnProperty.call(a, "gravity") ? T.fa(a, "gravity") : 0;
                b.padding = c;
                b.vd = a;
                return b;
            case zc.Lg:
                c = T.fa(a, "cols");
                b = T.fa(a, "rows");
                var d = c instanceof Array && null == c.l ? c.length : c
                  , f = b instanceof Array && null == b.l ? b.length : b
                  , e = Object.prototype.hasOwnProperty.call(a, "spacing") ? T.fa(a, "spacing") : 0;
                a = new zc(d,f);
                a.Eg = e;
                if (c instanceof Array && null == c.l)
                    for (d = 0,
                    f = c.length; d < f; )
                        e = d++,
                        a.um(e, c[e]);
                if (b instanceof Array && null == b.l)
                    for (c = 0,
                    d = b.length; c < d; )
                        f = c++,
                        a.OK(f, b[f]);
                return a;
            case Fb.Lg:
                return b = T.fa(a, "axis"),
                c = Object.prototype.hasOwnProperty.call(a, "ratio") ? T.fa(a, "ratio") : .5,
                Object.prototype.hasOwnProperty.call(a, "widget") ? new Ae(b,c) : new Fb(b,c);
            default:
                throw 0;
            }
        },
        Hu: function(a) {
            var b = T.fa(a, "name");
            b = Object.prototype.hasOwnProperty.call(a, "window") ? new ye : Object.prototype.hasOwnProperty.call(a, "widget") ? new na(b) : new ab(null,b);
            this.KC(b, a);
            return b
        },
        KC: function(a, b) {
            Object.prototype.hasOwnProperty.call(b, "name") && (a.name = T.fa(b, "name"));
            if (Object.prototype.hasOwnProperty.call(b, "padding")) {
                var c = T.fa(b, "padding");
                c instanceof Array && null == c.l ? (a.Vi = c[0],
                a.Wi = c[1]) : (a.Vi = c,
                a.Wi = c)
            }
            if (Object.prototype.hasOwnProperty.call(b, "size")) {
                c = T.fa(b, "size");
                a.sH = !0;
                var d = a.Ze;
                d.x = c[0];
                d.y = c[1];
                d = a.size;
                d.x = c[0];
                d.y = c[1]
            }
            Object.prototype.hasOwnProperty.call(b, "position") && (c = T.fa(b, "position"),
            d = a.position,
            d.x = c[0],
            d.y = c[1]);
            Object.prototype.hasOwnProperty.call(b, "fit") && (a.Ac = T.fa(b, "fit"))
        },
        m: tf
    };
    Fb.g = ["274"];
    Fb.H = Mb;
    Fb.prototype = x(Mb.prototype, {
        IN: function() {
            return this.Fi
        },
        aD: function(a) {
            this.Fi = .01 > a ? .01 : .99 < a ? .99 : a;
            null != this.Ma && this.fr();
            return a
        },
        ed: function() {
            this.fr()
        },
        wa: function() {
            var a = this.Ma
              , b = a.Hb();
            a = a.Hb();
            b.name = "split0";
            a.name = "split1"
        },
        Ij: function() {
            return Fb.Lg
        },
        fr: function() {
            var a = this.Ma
              , b = a.ma();
            switch (this.axis) {
            case 0:
                var c = b.b + this.Fi * (b.i - b.b);
                c - b.b < this.nq ? c = b.b + this.nq : b.i - c < this.nq && (c = b.i - this.nq);
                var d = new E(b.c,b.b,b.j,b.i);
                d.i = c;
                a.ki(0).La(d);
                d = new E(b.c,b.b,b.j,b.i);
                d.b = c;
                a.ki(1).La(d);
                break;
            case 1:
                c = b.c + this.Fi * (b.j - b.c),
                d = new E(b.c,b.b,b.j,b.i),
                d.j = c,
                a.ki(0).La(d),
                d = new E(b.c,b.b,b.j,b.i),
                d.c = c,
                a.ki(1).La(d)
            }
        },
        m: Fb
    });
    Ae.g = ["275"];
    Ae.H = Fb;
    Ae.prototype = x(Fb.prototype, {
        wa: function() {
            Fb.prototype.wa.call(this);
            this.GI = new ze(this)
        },
        ed: function() {
            Fb.prototype.ed.call(this);
            this.GI.update()
        },
        m: Ae
    });
    Gg.g = ["276"];
    ze.g = ["277"];
    ze.$ = [Gg];
    ze.prototype = {
        update: function() {
            var a = this.te.Ma.ma()
              , b = M.ib(this.Sj.shape, yc).Wd;
            switch (this.te.axis) {
            case 0:
                b.aa.y = b.C.y = a.b + (a.i - a.b) * this.te.Fi;
                b.aa.x = a.c;
                b.C.x = a.j;
                this.yi.level = a.c + .5 * (a.j - a.c);
                this.yi.min = a.b;
                this.yi.max = a.i;
                break;
            case 1:
                b.aa.x = b.C.x = a.c + (a.j - a.c) * this.te.Fi,
                b.aa.y = a.b,
                b.C.y = a.i,
                this.yi.level = a.b + .5 * (a.i - a.b),
                this.yi.min = a.c,
                this.yi.max = a.j
            }
            this.Sj.shape.tm()
        },
        nJ: function() {
            var a = this.Sj.shape.Ne()
              , b = this.te.Ma.ma();
            this.te.aD(0 == this.te.axis ? (a.y - b.b) / (b.i - b.b) : (a.x - b.c) / (b.j - b.c))
        },
        m: ze
    };
    ye.g = ["278"];
    ye.H = ab;
    ye.prototype = x(ab.prototype, {
        update: function() {
            this.Ic(null)
        },
        s: function() {
            ab.prototype.s.call(this)
        },
        Ic: function() {
            var a = window;
            ab.prototype.La.call(this, new E(10,10,(a.innerWidth * a.devicePixelRatio | 0) - 10,(a.innerHeight * a.devicePixelRatio | 0) - 10))
        },
        m: ye
    });
    dd.g = ["279"];
    dd.H = Mb;
    dd.prototype = x(Mb.prototype, {
        ed: function() {
            throw 0;
        },
        wa: function() {
            this.Ma.Hb(null, "window")
        },
        Ij: function() {
            return dd.Lg
        },
        m: dd
    });
    xd.g = ["280"];
    xd.prototype = {
        s: function() {
            if (null != this.children) {
                Eb.X().list.remove(this);
                null != this.parent && (C.remove(this.parent.children, this),
                this.parent.Ce--);
                for (var a = 0, b = this.children; a < b.length; ) {
                    var c = b[a];
                    ++a;
                    c.parent = null;
                    c.s()
                }
                this.shape.s()
            }
        },
        Hb: function(a) {
            Eb.X().list.remove(a);
            this.children[this.Ce++] = a;
            a.parent = this;
            this.qD(!0)
        },
        qD: function(a) {
            null == a && (a = !0);
            for (var b = 0, c = this.Ce; b < c; ) {
                var d = b++;
                this.children[d].qD(!1)
            }
            b = this.sd;
            c = this.shape;
            c.qk && (c.Zf(),
            c.qk = !1);
            c = c.jk;
            b.c = c.c;
            b.b = c.b;
            b.j = c.j;
            b.i = c.i;
            b = 0;
            for (c = this.Ce; b < c; ) {
                var f = b++;
                d = this.sd;
                f = this.children[f].sd;
                f.c < d.c && (d.c = f.c);
                f.b < d.b && (d.b = f.b);
                f.j > d.j && (d.j = f.j);
                f.i > d.i && (d.i = f.i)
            }
            if (a)
                for (a = this; null != a.parent; )
                    b = a.parent.sd,
                    c = a.parent.shape,
                    c.qk && (c.Zf(),
                    c.qk = !1),
                    c = c.jk,
                    b.c = c.c,
                    b.b = c.b,
                    b.j = c.j,
                    b.i = c.i,
                    b = a.parent.sd,
                    c = a.sd,
                    c.c < b.c && (b.c = c.c),
                    c.b < b.b && (b.b = c.b),
                    c.j > b.j && (b.j = c.j),
                    c.i > b.i && (b.i = c.i),
                    a = a.parent
        },
        m: xd
    };
    Eb.g = ["281"];
    Eb.X = function() {
        return m.Gj(Eb)
    }
    ;
    Eb.H = v;
    Eb.prototype = x(v.prototype, {
        m: Eb
    });
    Tb.g = ["282"];
    Tb.prototype = {
        s: function() {},
        tm: function() {},
        Ne: function() {
            throw 0;
        },
        sm: function(a) {
            if (null != this.vp) {
                var b = this.vp
                  , c = b.a
                  , d = 0;
                for (b = b.f; d < b; ) {
                    var f = d++;
                    c[f].aG(a)
                }
            }
        },
        update: function() {
            this.Ig();
            this.Zf();
            this.current = !0
        },
        nu: function(a) {
            null == this.vp && (this.vp = new Q);
            var b = this.vp;
            b.f == b.B && b.T();
            b.a[b.f++] = a;
            this.update();
            return a
        },
        Ig: function() {},
        Zf: function() {
            throw 0;
        },
        m: Tb
    };
    xe.g = ["283"];
    xe.$ = [Qc];
    xe.prototype = {
        m: xe
    };
    wd.g = ["284"];
    wd.$ = [xe];
    wd.prototype = {
        aG: function(a) {
            switch (this.axis) {
            case 0:
                var b = a.x
                  , c = this.min
                  , d = this.max;
                a.x = b < c ? c : b > d ? d : b;
                a.y = this.level;
                break;
            case 1:
                a.x = this.level,
                b = a.y,
                c = this.min,
                d = this.max,
                a.y = b < c ? c : b > d ? d : b
            }
        },
        m: wd
    };
    gc.g = ["285"];
    gc.qq = function(a, b, c, d) {
        return new gc(E.qq(a, b, c, d))
    }
    ;
    gc.H = Tb;
    gc.prototype = x(Tb.prototype, {
        tm: function() {
            var a = this.zc;
            this.sh = new B(.5 * (a.j - a.c),.5 * (a.i - a.b));
            this.ne = this.zc.tv();
            this.Ig();
            this.Zf()
        },
        Ne: function() {
            var a = this.ne;
            return new B(a.x,a.y)
        },
        sm: function(a) {
            Tb.prototype.sm.call(this, a);
            var b = this.ne;
            b.x = a.x;
            b.y = a.y;
            this.zc.c = this.ne.x - this.sh.x;
            this.zc.b = this.ne.y - this.sh.y;
            this.zc.j = this.ne.x + this.sh.x;
            this.zc.i = this.ne.y + this.sh.y;
            this.Ig();
            this.Zf()
        },
        Ig: function() {
            this.Ta[0] = this.zc.c;
            this.Ta[1] = this.zc.b;
            this.Ta[2] = this.zc.c;
            this.Ta[3] = this.zc.i;
            this.Ta[4] = this.zc.j;
            this.Ta[5] = this.zc.i;
            this.Ta[6] = this.zc.j;
            this.Ta[7] = this.zc.b
        },
        Zf: function() {
            var a = this.jk
              , b = this.zc;
            a.c = b.c;
            a.b = b.b;
            a.j = b.j;
            a.i = b.i
        },
        m: gc
    });
    yc.g = ["286"];
    yc.H = Tb;
    yc.prototype = x(Tb.prototype, {
        tm: function() {
            this.Ig();
            this.Zf()
        },
        Ne: function() {
            var a = [];
            return this.Wd.aH(new B(a[0],a[1]))
        },
        sm: function(a) {
            Tb.prototype.sm.call(this, a);
            var b = this.Wd
              , c = a.x
              , d = .5 * (b.C.x - b.aa.x);
            b.aa.x = c - d;
            b.C.x = c + d;
            b = this.Wd;
            a = a.y;
            c = .5 * (b.C.y - b.aa.y);
            b.aa.y = a - c;
            b.C.y = a + c;
            this.Ig()
        },
        Ig: function() {
            this.Ta[0] = this.Wd.aa.x;
            this.Ta[1] = this.Wd.aa.y;
            this.Ta[2] = this.Wd.C.x;
            this.Ta[3] = this.Wd.C.y
        },
        Zf: function() {
            this.Wd.ma(this.jk);
            var a = this.jk
              , b = this.sh
              , c = this.sh;
            a.c -= b;
            a.b -= c;
            a.j += b;
            a.i += c
        },
        m: yc
    });
    rf.g = ["287"];
    rf.prototype = {
        m: rf
    };
    we.g = ["288"];
    we.prototype = {
        m: we
    };
    var Fa = {
        pb: !0,
        ob: ["Clamp", "Wrap", "Cycle"],
        ag: ["Clamp", 0]
    };
    Fa.ag.toString = h;
    Fa.ag.l = Fa;
    Fa.$h = ["Wrap", 1];
    Fa.$h.toString = h;
    Fa.$h.l = Fa;
    Fa.Nm = ["Cycle", 2];
    Fa.Nm.toString = h;
    Fa.Nm.l = Fa;
    Fa.Gb = [Fa.ag, Fa.$h, Fa.Nm];
    Ea.g = ["289"];
    Ea.$ = [zf];
    Ea.prototype = {
        s: function() {
            null != this.bb && (this.bb.detach(this),
            this.bb = null);
            this.repeat = null;
            this.type = -1;
            Ea.gj--
        },
        mq: function() {
            this.dl = !0;
            0 != this.ke && Ea.kr--;
            this.ke = !1;
            this.Xc = 0;
            this.Mf = Ea.ly
        },
        update: function(a) {
            return this.ke ? (this.Xc += a * this.Yq,
            null == this.bb ? !1 : this.tk(this.Xc)) : this.dl ? (this.Xc += a,
            this.Xc > Ea.ly && this.s(),
            !0) : !1
        },
        tk: function() {
            throw 0;
        },
        jv: function() {
            var a = this.Xc + this.Ag;
            if (this.repeat == Fa.ag) {
                var b = this.Sd
                  , c = this.Mf;
                return a < b ? b : a > c ? c : a
            }
            b = this.Mf - this.Sd;
            return 0 < b ? (a = (a - this.Sd) / b,
            c = a | 0,
            0 > a && c != a && --c,
            a -= c,
            this.repeat == Fa.$h ? this.Sd + a * b : 0 == (c & 1) ? this.Sd + a * b : this.Mf - a * b) : this.Sd
        },
        m: Ea
    };
    var X = {
        pb: !0,
        ob: "ScaleX ScaleY Rotate TranslateX TranslateY Alpha".split(" "),
        df: ["ScaleX", 0]
    };
    X.df.toString = h;
    X.df.l = X;
    X.ef = ["ScaleY", 1];
    X.ef.toString = h;
    X.ef.l = X;
    X.kj = ["Rotate", 2];
    X.kj.toString = h;
    X.kj.l = X;
    X.lj = ["TranslateX", 3];
    X.lj.toString = h;
    X.lj.l = X;
    X.mj = ["TranslateY", 4];
    X.mj.toString = h;
    X.mj.l = X;
    X.Ge = ["Alpha", 5];
    X.Ge.toString = h;
    X.Ge.l = X;
    X.Gb = [X.df, X.ef, X.kj, X.lj, X.mj, X.Ge];
    qf.g = ["292"];
    qf.prototype = {
        m: qf
    };
    pf.g = ["293"];
    pf.H = Ea;
    pf.prototype = x(Ea.prototype, {
        s: function() {
            this.Of = this.Od = null;
            Ea.prototype.s.call(this)
        },
        tk: function(a) {
            var b = this.jv(), c = this.a.Fk, d;
            if (b <= c[0])
                var f = d = this.mc = b = 0;
            else if (b >= c[this.a.fj - 1])
                b = 0,
                f = d = this.mc = this.a.fj - 1;
            else if (b > c[this.mc]) {
                for (d = this.mc + 1; b >= c[d]; )
                    this.mc = d,
                    ++d;
                f = this.mc;
                b = (b - c[f]) / (c[d] - c[f])
            } else if (b < c[this.mc]) {
                for (d = this.mc - 1; b <= c[d]; )
                    this.mc = d,
                    --d;
                f = d;
                d = this.mc;
                b = (b - c[f]) / (c[d] - c[f])
            } else
                b = 0,
                f = d = this.mc;
            this.IK(f, d, b);
            this.Od.ZN(this.jB);
            return a > this.Mf && this.repeat == Fa.ag ? (null != this.Of && (this.Of(),
            this.Of = null),
            this.mq(),
            !1) : !0
        },
        IK: function(a, b, c) {
            var d = this.a.parameters
              , f = this.jB;
            if (a != b) {
                c = this.a.wN[a](c);
                var e = this.a.vN[a];
                if (0 != (e & 1 << X.df[1])) {
                    var n = X.df[1]
                      , k = d[6 * a + n];
                    f.AC = k + (d[6 * b + n] - k) * c
                }
                0 != (e & 1 << X.ef[1]) && (n = X.ef[1],
                k = d[6 * a + n],
                f.BC = k + (d[6 * b + n] - k) * c);
                0 != (e & 1 << X.kj[1]) && (n = X.kj[1],
                k = d[6 * a + n],
                f.rotation = k + (d[6 * b + n] - k) * c);
                0 != (e & 1 << X.lj[1]) && (n = X.lj[1],
                k = d[6 * a + n],
                f.mD = k + (d[6 * b + n] - k) * c);
                0 != (e & 1 << X.mj[1]) && (n = X.mj[1],
                k = d[6 * a + n],
                f.nD = k + (d[6 * b + n] - k) * c);
                0 != (e & 1 << X.Ge[1]) && (e = X.Ge[1],
                a = d[6 * a + e],
                f.alpha = a + (d[6 * b + e] - a) * c)
            } else
                f.AC = d[6 * b + X.df[1]],
                f.BC = d[6 * b + X.ef[1]],
                f.rotation = d[6 * b + X.kj[1]],
                f.mD = d[6 * b + X.lj[1]],
                f.nD = d[6 * b + X.mj[1]],
                f.alpha = d[6 * b + X.Ge[1]]
        },
        m: pf
    });
    of.g = ["295"];
    of.prototype = {
        m: of
    };
    xc.g = ["296"];
    xc.H = Ea;
    xc.prototype = x(Ea.prototype, {
        s: function() {
            this.Od = this.Id = null;
            Ea.prototype.s.call(this)
        },
        play: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = -1);
            null == b && (b = 0);
            var f = xc.cache
              , e = a.name;
            this.Id = null != ea[e] ? f.ad(e) : f.G[e];
            if (null == this.Id) {
                this.Id = new nf(a);
                f = xc.cache;
                e = a.name;
                var n = this.Id;
                null != ea[e] ? f.cc(e, n) : f.G[e] = n
            }
            this.Kl = b;
            this.Jl = 0 > c ? a.frames.length - 1 : c;
            this.Sd = this.Id.Fk[this.Kl];
            this.Mf = this.Id.Fk[this.Jl + 1];
            this.Xc = this.Sd;
            this.Xc += d;
            1 != this.ke && Ea.kr++;
            this.ke = !0;
            this.dl = !1;
            this.fw = -1;
            this.mc = b;
            this.tk(this.Xc)
        },
        tk: function() {
            var a = this.jv()
              , b = this.Id.fj;
            if (1 == b)
                var c = this.mc = 0;
            else if (a >= this.Id.Dm)
                c = this.mc = b - 1;
            else {
                if (0 < this.Id.Eu)
                    c = a / this.Id.Eu | 0;
                else {
                    c = 0;
                    var d = this.Id.Fk
                      , f = d[this.mc + 1];
                    if (a >= d[this.mc] && a <= f)
                        c = this.mc;
                    else if (16 > b)
                        for (f = 0; f <= b; ) {
                            if (d[f] >= a) {
                                c = f - 1;
                                break
                            }
                            ++f
                        }
                    else
                        c = ba.FF(d, a, b - 1),
                        0 > c && (c = ~c,
                        --c)
                }
                this.mc = c
            }
            c < this.Kl ? c = this.Kl : c > this.Jl && (c = this.Jl);
            c != this.fw && (this.fw = c,
            this.Od.rJ(this.Id.names[c], c, a),
            c >= this.Jl && (this.Od.qJ(),
            this.repeat == Fa.ag && (0 < this.Uf-- ? (this.Xc = this.Sd,
            this.fw = -1,
            this.mc = this.Kl,
            this.tk(this.Xc)) : (this.mq(),
            this.Id = null))));
            return !0
        },
        m: xc
    });
    nf.g = ["297"];
    nf.prototype = {
        m: nf
    };
    mf.g = ["298"];
    mf.prototype = {
        m: mf
    };
    ve.g = ["299"];
    ve.H = Ea;
    ve.prototype = x(Ea.prototype, {
        s: function() {
            this.Of = this.Od = this.ih = null;
            Ea.prototype.s.call(this)
        },
        Yf: function(a, b, c, d, f) {
            this.key = a;
            this.HI = b;
            this.UA = c;
            this.ih = f;
            this.Sd = this.Xc = 0;
            this.Mf = d;
            1 != this.ke && Ea.kr++;
            this.ke = !0;
            this.dl = !1
        },
        stop: function() {
            this.Of = null;
            this.mq()
        },
        tk: function(a) {
            if (a >= this.Mf && this.repeat == Fa.ag)
                return this.mq(),
                this.Od.iC(this.key, this.UA),
                this.Od.DJ(this.key),
                null != this.Of && (a = this.Of,
                this.Of = null,
                a()),
                !1;
            a = this.HI;
            a += (this.UA - a) * this.ih((this.jv() - this.Sd) / (this.Mf - this.Sd));
            this.Od.iC(this.key, a);
            return !0
        },
        m: ve
    });
    vd.g = ["300"];
    vd.prototype = {
        getContext: function() {
            throw 0;
        },
        NK: function(a) {
            this.qg = a;
            this.qg.AJ(this);
            null != this.getContext() && this.qg.lm(this.getContext())
        },
        lb: function() {
            var a = this.f;
            return new $a(a.x,a.y)
        },
        mv: function() {
            if (this.Pw) {
                this.Pw = !1;
                var a = this.RI
                  , b = this.f.x
                  , c = this.f.y;
                null == a ? (this.wg.x = 0,
                this.wg.y = 0,
                this.wg.W = b,
                this.wg.G = c) : (this.wg.x = b * a.x + .5 | 0,
                this.wg.y = c * a.y + .5 | 0,
                this.wg.W = b * a.W | 0,
                this.wg.G = c * a.G | 0)
            }
            a = this.HB;
            b = this.wg;
            a.x = b.x;
            a.y = b.y;
            a.W = b.W;
            a.G = b.G;
            return this.HB
        },
        resize: function(a, b) {
            var c = this.f;
            c.x = a;
            c.y = b;
            this.Pw = !0;
            this.jz()
        },
        jz: function() {
            throw 0;
        },
        lm: function() {
            null != this.qg && this.qg.lm(this.getContext())
        },
        m: vd
    };
    td.g = ["301"];
    td.H = vd;
    td.prototype = x(vd.prototype, {
        resize: function(a, b) {
            vd.prototype.resize.call(this, a, b);
            null != this.Ic && this.Ic(this.lb())
        },
        m: td
    });
    bd.g = ["302"];
    bd.prototype = {
        nG: function(a) {
            var b = this.Rl;
            null != b && null != b.getContext() && 0 != b.lb().x && (this.PL(),
            this.Fd = 1,
            this.cl = null,
            this.Jq(tb.py.uu),
            this.Xw(),
            a = this.QA.ZF(a, this.NB),
            this.pG(a),
            this.dx())
        },
        clear: function() {},
        PL: function() {
            this.rh = this.$z();
            this.rh.qA(this.yI);
            this.Mu.of(this.rh);
            null != this.Tj && this.Mu.rL(this.Tj.iH())
        },
        pG: function(a) {
            var b = a.a
              , c = 0;
            for (a = a.f; c < a; ) {
                var d = c++;
                this.qG(b[d])
            }
        },
        qG: function(a) {
            var b = a.gc;
            b.active && (this.qz = a,
            this.vm(a),
            0 != this.Fd && b.ii(this))
        },
        $z: function() {
            throw 0;
        },
        createTexture: function(a, b, c) {
            var d = new rd;
            d.rA = this.UJ;
            d.Xx = this.GB;
            d.HK(b, !this.DB || this.GG);
            null != c && d.BK(c);
            La.jK(a, d);
            return d
        },
        zj: function(a) {
            La.ml(a).s();
            La.GL(a)
        },
        Xw: function() {},
        dx: function() {},
        xz: function() {},
        Az: function() {},
        oG: function(a) {
            a.Qu(this)
        },
        lm: function() {},
        AJ: function(a) {
            this.Rl = a
        },
        hJ: function() {
            this.QA.bm = !0
        },
        vm: function(a) {
            if (0 != this.ei) {
                if (0 != (this.ei & 1 << Da.$f[1])) {
                    var b = a.cj[Da.$f[1]];
                    b = null != b ? b.value : 1;
                    b != this.Fd && (this.Fd = b)
                }
                0 != (this.ei & 1 << Da.Qh[1]) && (a = a.cj[Da.Qh[1]],
                a != this.cl && (null != a ? (this.cl = a,
                this.Jq(this.cl.uu)) : (this.cl = null,
                this.Jq(tb.py.uu))))
            }
        },
        Jq: function() {},
        m: bd
    };
    ib.g = ["303"];
    ib.$ = [zf];
    ib.H = ee;
    ib.prototype = x(ee.prototype, {
        s: function() {},
        ii: function() {
            throw 0;
        },
        m: ib
    });
    Xd.g = ["304"];
    Xd.H = ib;
    Xd.prototype = x(ib.prototype, {
        ii: function(a) {
            a.xz(this)
        },
        m: Xd
    });
    ud.g = ["305"];
    ud.H = ib;
    ud.prototype = x(ib.prototype, {
        XC: function(a) {
            if (this.Fl == a)
                return a;
            this.Fl = a;
            var b = this.ae.Pg;
            if (b.Wj)
                var c = b.$v.a[a];
            else {
                b = b.aw;
                var d = b.Fa;
                c = d.Xa[73856093 * a & d.ab];
                if (-1 == c)
                    c = -2147483648;
                else if (d = d.a,
                d[c] == a)
                    c = d[c + 1];
                else {
                    var f = -2147483648;
                    for (c = d[c + 2]; -1 != c; ) {
                        if (d[c] == a) {
                            f = d[c + 1];
                            break
                        }
                        c = d[c + 2]
                    }
                    c = f
                }
                c = -2147483648 == c ? null : b.wh[c]
            }
            b = this.kb;
            c = this.ae.Xx ? c.hD : c.qL;
            b.x = c.x;
            b.y = c.y;
            b.W = c.W;
            b.G = c.G;
            return a
        },
        Dd: function(a) {
            this.ae = a;
            var b = a.xb.x
              , c = a.xb.y;
            this.kb.x = 0;
            this.kb.y = 0;
            this.kb.W = b;
            this.kb.G = c;
            a.Xx || (this.kb.W /= a.Ch.x,
            this.kb.G /= a.Ch.y);
            this.Fl = -1;
            this.Vo = 0;
            this.nm = a.rA;
            return this
        },
        s: function() {
            ib.prototype.s.call(this);
            this.ae = this.kb = null
        },
        ii: function(a) {
            this.ae.Iv && a.Az(this)
        },
        m: ud
    });
    ue.g = ["306"];
    ue.H = ib;
    ue.prototype = x(ib.prototype, {
        ii: function(a) {
            a.oG(this)
        },
        m: ue
    });
    te.g = ["307"];
    te.H = bd;
    te.prototype = x(bd.prototype, {
        clear: function() {
            var a = this.Rl;
            if (null != a && null != this.zd) {
                var b = a.mv()
                  , c = b.W;
                b = b.G;
                this.zd.setTransform(1, 0, 0, 1, 0, 0);
                var d = this.zd;
                d.globalAlpha = 1;
                d.globalCompositeOperation = "source-over";
                this.Ci = -1;
                d.clearRect(0, 0, c, b);
                a = a.color;
                if (0 < a.W) {
                    var f = 255 * a.x | 0
                      , e = 255 * a.y | 0
                      , n = 255 * a.z | 0;
                    d.fillStyle = 1 == a.W ? "rgb(" + f + "," + e + "," + n + ")" : "rgba(" + f + "," + e + "," + n + "," + a.W + ")";
                    d.fillRect(0, 0, c, b)
                }
            }
        },
        Xw: function() {
            bd.prototype.Xw.call(this);
            this.zd.setTransform(1, 0, 0, 1, 0, 0)
        },
        dx: function() {
            bd.prototype.dx.call(this);
            this.zd.setTransform(1, 0, 0, 1, 0, 0)
        },
        xz: function(a) {
            var b = this.qz.Kc
              , c = b.K
              , d = b.na
              , f = b.R;
            b = this.zd;
            var e = this.zB;
            e != this.zp && (this.zp = e,
            b[this.AB] = e);
            this.Cf != this.$j && (this.$j = this.Cf,
            b.globalCompositeOperation = this.Cf);
            this.Fd != this.Ci && (this.Ci = this.Fd,
            b.globalAlpha = this.Fd);
            b.setTransform(d.m11, d.m21, d.m12, d.m22, f.x, f.y);
            a = a.color;
            b.fillStyle = "rgb(" + (255 * a.x | 0) + "," + (255 * a.y | 0) + "," + (255 * a.z | 0) + ")";
            b.fillRect(0, 0, c.x, c.y)
        },
        Az: function(a) {
            var b = this.zd
              , c = this.zB;
            c != this.zp && (this.zp = c,
            b[this.AB] = c);
            this.Cf != this.$j && (this.$j = this.Cf,
            b.globalCompositeOperation = this.Cf);
            this.Fd != this.Ci && (this.Ci = this.Fd,
            b.globalAlpha = this.Fd);
            c = a.ae.pl;
            var d = a.kb
              , f = this.qz.Kc
              , e = f.K
              , n = f.na
              , k = f.R;
            if (null == this.Tj)
                b.setTransform(n.m11, n.m21, n.m12, n.m22, k.x, k.y);
            else {
                f = this.hG;
                var h = this.Sa;
                h.m11 = n.m11;
                h.m21 = n.m21;
                h.m12 = n.m12;
                h.m22 = n.m22;
                h.m14 = k.x;
                h.m24 = k.y;
                n = this.Mu;
                k = h.m11;
                var l = h.m12
                  , m = h.m14
                  , q = h.m21
                  , p = h.m22;
                h = h.m24;
                var r = n.m11
                  , t = n.m12;
                f.m11 = r * k + t * q;
                f.m12 = r * l + t * p;
                f.m14 = r * m + t * h + n.m14;
                r = n.m21;
                t = n.m22;
                f.m21 = r * k + t * q;
                f.m22 = r * l + t * p;
                f.m24 = r * m + t * h + n.m24;
                b.setTransform(f.m11, f.m21, f.m12, f.m22, f.m14, f.m24)
            }
            if (0 > e.x || 0 > e.y)
                b.save(),
                b.scale(0 > e.x ? -1 : 1, 0 > e.y ? -1 : 1),
                b.drawImage(c, d.x, d.y, d.W, d.G, 0, 0, Math.abs(e.x), Math.abs(e.y)),
                b.restore();
            else if (f = d.x,
            n = d.y,
            k = d.W,
            d = d.G,
            l = e.x,
            e = e.y,
            0 < (a.Vo & 12)) {
                t = a.Yx % 1;
                0 > t && (t = 1 + t);
                m = 1 / a.$x;
                var w = 1 / m | 0;
                h = 1 - w * m;
                q = [];
                p = [];
                r = [];
                for (var v = 0; v < w; ) {
                    var ja = t
                      , x = ja
                      , y = ja + m;
                    1 < y ? (q.push(t),
                    p.push(1 - x),
                    r.push(0),
                    q.push(0),
                    p.push(y - 1),
                    r.push(1)) : (q.push(ja),
                    p.push(m),
                    r.push(0));
                    ++v;
                    t += m;
                    t %= 1
                }
                0 < h && (w = t,
                v = w + h,
                1 < v ? (q.push(t),
                p.push(1 - w),
                r.push(0),
                q.push(0),
                p.push(v - 1),
                r.push(1)) : (q.push(t),
                p.push(h),
                r.push(0)));
                r = [];
                h = [];
                w = a.Zx % 1;
                0 > w && (w = 1 + w);
                a = 1 / a.ay;
                v = 1 / a | 0;
                t = 1 - v * a;
                for (ja = 0; ja < v; )
                    r.push(w),
                    h.push(a),
                    ++ja,
                    w += a,
                    w %= 1;
                0 < t && (v = w,
                ja = v + t,
                1 < ja ? (r.push(w),
                h.push(1 - v),
                r.push(0),
                h.push(ja - 1)) : (r.push(w),
                h.push(t)));
                t = 0;
                for (w = r.length; t < w; ) {
                    t = t++;
                    r = r[t];
                    h = h[t];
                    t = 0;
                    for (w = q.length; t < w; )
                        v = t++,
                        ja = p[v],
                        b.drawImage(c, f, n, ja / m * k, h / a * d, l * q[v], e * r, l * ja, e * h);
                    break
                }
            } else
                b.drawImage(c, f, n, k, d, 0, 0, l, e)
        },
        $z: function() {
            var a = this.Tj;
            if (null == a)
                return this.rh.HC(),
                this.rh;
            this.rh.IC(a.f.x / 2, a.f.y / 2, 0);
            var b = this.Rl.mv()
              , c = this.rh
              , d = b.W / a.f.x;
            a = b.G / a.f.y;
            c.m11 *= d;
            c.m12 *= d;
            c.m13 *= d;
            c.m14 *= d;
            c.m21 *= a;
            c.m22 *= a;
            c.m23 *= a;
            c.m24 *= a;
            c.m31 *= 1;
            c.m32 *= 1;
            c.m33 *= 1;
            c.m34 *= 1;
            return this.rh
        },
        Jq: function(a) {
            this.Cf = this.nI[a[1]]
        },
        lm: function(a) {
            this.zd = a
        },
        m: te
    });
    sd.g = ["308"];
    sd.H = td;
    sd.prototype = x(td.prototype, {
        BH: function(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            this.zd = this.canvas.getContext("2d", {
                alpha: a
            });
            a = this.f;
            var c = this.Eq();
            a.x = c.x;
            a.y = c.y;
            b && (this.canvas.style.setProperty("image-rendering", "pixelated"),
            this.canvas.style.setProperty("image-rendering", "-moz-crisp-edges"),
            this.canvas.style.setProperty("image-rendering", "-o-crisp-edges"),
            this.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor"));
            this.lm()
        },
        getContext: function() {
            return this.zd
        },
        uH: function() {
            window.oncontextmenu = function() {
                return !1
            }
        },
        SH: function() {
            return 1 == this.Au(window.document, null, ["fullscreenEnabled", "fullScreenEnabled"])
        },
        jz: function() {
            if (!this.Vj) {
                var a = this.mv()
                  , b = this.canvas.style;
                b.position = "absolute";
                b.left = "" + (a.x / this.Kd | 0) + "px";
                b.top = "" + (a.y / this.Kd | 0) + "px";
                b.width = "" + (a.W / this.Kd | 0) + "px";
                b.height = "" + (a.G / this.Kd | 0) + "px";
                this.canvas.width = a.W;
                this.canvas.height = a.G;
                this.getContext()instanceof WebGLRenderingContext && this.getContext().viewport(0, 0, this.canvas.width, this.canvas.height);
                window.scrollTo(0, 1)
            }
        },
        Eq: function() {
            var a = new $a;
            this.Vj ? (a.x = this.canvas.width,
            a.y = this.canvas.height) : (a.x = window.innerWidth,
            a.y = window.innerHeight,
            this.Kd = window.devicePixelRatio,
            a.x = a.x * this.Kd | 0,
            a.y = a.y * this.Kd | 0);
            return a
        },
        Au: function(a, b, c) {
            b = [b];
            null != c && (b = c);
            for (c = 0; c < b.length; ) {
                var d = b[c];
                ++c;
                for (var f = 0, e = ["webkit", "moz", "ms", "o", ""]; f < e.length; ) {
                    var n = e[f];
                    ++f;
                    var k = d;
                    "" != n && (k = C.substr(d, 0, 1).toUpperCase() + C.substr(d, 1, null));
                    k = n + k;
                    if ("undefined" !== typeof a[k])
                        return "function" === typeof a[k] ? a[k]() : a[k]
                }
            }
            return null
        },
        addListener: function(a, b, c, d) {
            null == c && (c = !1);
            if (c) {
                c = 0;
                for (var f = ["webkit", "moz", "ms", "o", ""]; c < f.length; ) {
                    var e = f[c];
                    ++c;
                    this.Rc.push({
                        target: a,
                        type: e + b,
                        listener: d
                    });
                    a.addEventListener(e + b, d)
                }
            } else
                this.Rc.push({
                    target: a,
                    type: b,
                    listener: d
                }),
                a.addEventListener(b, d)
        },
        m: sd
    });
    var wa = {
        pb: !0,
        ob: "None Normal Multiply Add Screen User".split(" "),
        cg: ["None", 0]
    };
    wa.cg.toString = h;
    wa.cg.l = wa;
    wa.fn = ["Normal", 1];
    wa.fn.toString = h;
    wa.fn.l = wa;
    wa.rs = ["Multiply", 2];
    wa.rs.toString = h;
    wa.rs.l = wa;
    wa.Hm = ["Add", 3];
    wa.Hm.toString = h;
    wa.Hm.l = wa;
    wa.Screen = ["Screen", 4];
    wa.Screen.toString = h;
    wa.Screen.l = wa;
    wa.pN = function(a, b) {
        a = ["User", 5, a, b];
        a.l = wa;
        a.toString = h;
        return a
    }
    ;
    wa.Gb = [wa.cg, wa.fn, wa.rs, wa.Hm, wa.Screen];
    var ha = {
        pb: !0,
        ob: "Zero One DstColor OneMinusDstColor SrcAlpha OneMinusSrcAlpha DstAlpha OneMinusDstAlpha".split(" "),
        ai: ["Zero", 0]
    };
    ha.ai.toString = h;
    ha.ai.l = ha;
    ha.Uh = ["One", 1];
    ha.Uh.toString = h;
    ha.Uh.l = ha;
    ha.yr = ["DstColor", 2];
    ha.yr.toString = h;
    ha.yr.l = ha;
    ha.ts = ["OneMinusDstColor", 3];
    ha.ts.toString = h;
    ha.ts.l = ha;
    ha.Yh = ["SrcAlpha", 4];
    ha.Yh.toString = h;
    ha.Yh.l = ha;
    ha.Wh = ["OneMinusSrcAlpha", 5];
    ha.Wh.toString = h;
    ha.Wh.l = ha;
    ha.Rh = ["DstAlpha", 6];
    ha.Rh.toString = h;
    ha.Rh.l = ha;
    ha.Vh = ["OneMinusDstAlpha", 7];
    ha.Vh.toString = h;
    ha.Vh.l = ha;
    ha.Gb = [ha.ai, ha.Uh, ha.yr, ha.ts, ha.Yh, ha.Wh, ha.Rh, ha.Vh];
    var ia = {
        pb: !0,
        ob: "Zero One SrcColor OneMinusSrcColor SrcAlpha OneMinusSrcAlpha DstAlpha OneMinusDstAlpha".split(" "),
        ai: ["Zero", 0]
    };
    ia.ai.toString = h;
    ia.ai.l = ia;
    ia.Uh = ["One", 1];
    ia.Uh.toString = h;
    ia.Uh.l = ia;
    ia.Rt = ["SrcColor", 2];
    ia.Rt.toString = h;
    ia.Rt.l = ia;
    ia.us = ["OneMinusSrcColor", 3];
    ia.us.toString = h;
    ia.us.l = ia;
    ia.Yh = ["SrcAlpha", 4];
    ia.Yh.toString = h;
    ia.Yh.l = ia;
    ia.Wh = ["OneMinusSrcAlpha", 5];
    ia.Wh.toString = h;
    ia.Wh.l = ia;
    ia.Rh = ["DstAlpha", 6];
    ia.Rh.toString = h;
    ia.Rh.l = ia;
    ia.Vh = ["OneMinusDstAlpha", 7];
    ia.Vh.toString = h;
    ia.Vh.l = ia;
    ia.Gb = [ia.ai, ia.Uh, ia.Rt, ia.us, ia.Yh, ia.Wh, ia.Rh, ia.Vh];
    var Da = {
        pb: !0,
        ob: ["AlphaMultiplier", "AlphaBlend", "ColorTransform"],
        $f: ["AlphaMultiplier", 0]
    };
    Da.$f.toString = h;
    Da.$f.l = Da;
    Da.Qh = ["AlphaBlend", 1];
    Da.Qh.toString = h;
    Da.Qh.l = Da;
    Da.mr = ["ColorTransform", 2];
    Da.mr.toString = h;
    Da.mr.l = Da;
    Da.Gb = [Da.$f, Da.Qh, Da.mr];
    sb.g = ["309"];
    sb.prototype = {
        collapse: function() {
            throw 0;
        },
        m: sb
    };
    tb.g = ["310"];
    tb.H = sb;
    tb.prototype = x(sb.prototype, {
        collapse: function() {
            return this
        },
        m: tb
    });
    Wd.g = ["311"];
    Wd.H = sb;
    Wd.prototype = x(sb.prototype, {
        collapse: function(a) {
            for (var b = 1, c = 0, d = a.V; c < d; ) {
                var f = c++;
                b *= a.a[f].value
            }
            null == this.Rv && (this.Rv = new Wd(this.value));
            this.Rv.value = b;
            return this.Rv
        },
        m: Wd
    });
    ec.g = ["312"];
    ec.prototype = {
        s: function() {
            this.Ya = null
        },
        contains: function() {
            throw 0;
        },
        uv: function() {},
        of: function() {},
        by: function() {
            throw 0;
        },
        Nx: function(a, b) {
            a.Oy(this.Ya, b.Ya);
            b.Sb = a.bH() * this.Sb
        },
        m: ec
    };
    ad.g = ["313"];
    ad.H = ec;
    ad.prototype = x(ec.prototype, {
        contains: function(a) {
            return a.x >= this.c && a.x <= this.j && a.y >= this.b ? a.y <= this.i : !1
        },
        uv: function(a) {
            switch (a.type) {
            case 1:
                var b = a.Ya;
                a = a.Sb;
                b.x - a < this.c && (this.c = b.x - a);
                b.y - a < this.b && (this.b = b.y - a);
                b.x + a > this.j && (this.j = b.x + a);
                b.y + a > this.i && (this.i = b.y + a);
                break;
            case 2:
                a.c < this.c && (this.c = a.c),
                a.b < this.b && (this.b = a.b),
                a.j > this.j && (this.j = a.j),
                a.i > this.i && (this.i = a.i)
            }
            b = (this.j - this.c) / 2;
            a = (this.i - this.b) / 2;
            this.Ya.x = this.c + b;
            this.Ya.y = this.b + a;
            this.Sb = Math.sqrt(b * b + a * a)
        },
        of: function(a) {
            var b = a.Ya
              , c = a.Sb;
            switch (a.type) {
            case 1:
                this.c = b.x - c;
                this.b = b.y - c;
                this.j = b.x + c;
                this.i = b.y + c;
                break;
            case 2:
                this.c = a.c,
                this.b = a.b,
                this.j = a.j,
                this.i = a.i
            }
            this.Ya.x = b.x;
            this.Ya.y = b.y;
            this.Sb = c
        },
        by: function(a) {
            var b = a.n.x
              , c = a.n.y;
            a = a.d;
            if (1 == b)
                return this.j < a ? -1 : this.c > a ? 1 : 0;
            if (-1 == b)
                return this.c > -a ? -1 : this.j < -a ? 1 : 0;
            if (1 == c)
                return this.i < a ? -1 : this.b > a ? 1 : 0;
            if (-1 == b)
                return this.b > -a ? -1 : this.i < -a ? 1 : 0;
            var d = 0 | 0 > this.c * b + this.b * c - a;
            d |= (0 > this.j * b + this.b * c - a) << 1;
            d |= (0 > this.c * b + this.i * c - a) << 2;
            d |= (0 > this.j * b + this.i * c - a) << 3;
            return 15 == d ? -1 : 0 == d ? 1 : 0
        },
        Nx: function(a, b) {
            ec.prototype.Nx.call(this, a, b);
            var c = ad.hF;
            c.x = this.c + .5 * (this.j - this.c);
            c.y = this.b + .5 * (this.i - this.b);
            c.z = 0;
            a.Oy(c, c);
            b.c = c.x;
            b.b = c.y;
            b.j = c.x;
            b.i = c.y;
            if (0 < (a.u & 2)) {
                c = a.na;
                var d = a.K;
                a = .5 * d.x;
                d = .5 * d.y;
                0 < c.m11 ? (b.c -= c.m11 * a,
                b.j += c.m11 * a) : (b.c += c.m11 * a,
                b.j -= c.m11 * a);
                0 < c.m12 ? (b.c -= c.m12 * d,
                b.j += c.m12 * d) : (b.c += c.m12 * d,
                b.j -= c.m12 * d);
                0 < c.m21 ? (b.b -= c.m21 * a,
                b.i += c.m21 * a) : (b.b += c.m21 * a,
                b.i -= c.m21 * a);
                0 < c.m22 ? (b.b -= c.m22 * d,
                b.i += c.m22 * d) : (b.b += c.m22 * d,
                b.i -= c.m22 * d)
            } else {
                a = a.na;
                d = a.m11;
                var f = a.m12
                  , e = Math.sqrt(d * d + f * f);
                c = .5 * e;
                a = (d * a.m22 - f * a.m21) / e * .5;
                f = Math.atan2(f, d);
                d = Math.cos(f);
                f = Math.sin(f);
                0 < d ? (b.c -= d * c,
                b.j += d * c) : (b.c += d * c,
                b.j -= d * c);
                0 < f ? (b.c -= f * a,
                b.j += f * a) : (b.c += f * a,
                b.j -= f * a);
                0 < -f ? (b.b -= -f * c,
                b.i += -f * c) : (b.b += -f * c,
                b.i -= -f * c);
                0 < d ? (b.b -= d * a,
                b.i += d * a) : (b.b += d * a,
                b.i -= d * a)
            }
        },
        m: ad
    });
    lf.g = ["314"];
    lf.prototype = {
        lb: function() {
            var a = this.f;
            return new $a(a.x,a.y)
        },
        reset: function(a) {
            this.ne.x = a.x + a.W / 2;
            this.ne.y = a.y + a.G / 2;
            this.f.x = a.W;
            this.f.y = a.G;
            this.Tc = 0;
            this.Rw = 1;
            this.gw = this.Mw = !0;
            this.qg.hJ()
        },
        iH: function() {
            if (!this.Mw)
                return this.xh;
            this.Mw = !1;
            var a = this.ne.x
              , b = this.ne.y;
            this.xh.IC(-a, -b, 0);
            var c = this.xh
              , d = this.Rw
              , f = this.Rw;
            c.m11 *= d;
            c.m12 *= d;
            c.m13 *= d;
            c.m14 *= d;
            c.m21 *= f;
            c.m22 *= f;
            c.m23 *= f;
            c.m24 *= f;
            c.m31 *= 1;
            c.m32 *= 1;
            c.m33 *= 1;
            c.m34 *= 1;
            this.xh.NF(.017453292519943295 * this.Tc);
            c = this.xh;
            c.m14 += a;
            c.m24 += b;
            c.m34 += 0;
            c = this.xh;
            c.m14 += -a;
            c.m24 += -b;
            c.m34 += 0;
            return this.xh
        },
        VG: function() {
            if (!this.gw)
                return this.hw;
            this.gw = !1;
            this.xh.qA(this.hw);
            return this.hw
        },
        m: lf
    };
    Vd.g = ["315"];
    Vd.H = ec;
    Vd.prototype = x(ec.prototype, {
        contains: function(a) {
            var b = a.x - this.Ya.x;
            a = a.y - this.Ya.y;
            return b * b + a * a <= this.Sb * this.Sb
        },
        uv: function(a) {
            var b = a.Ya.x - this.Ya.x
              , c = a.Ya.y - this.Ya.y
              , d = a.Sb - this.Sb
              , f = b * b + c * c;
            d * d >= f ? 0 <= d && this.of(a) : (d = Math.sqrt(f),
            f = (d + a.Sb - this.Sb) / (2 * d),
            this.Ya.x += f * b,
            this.Ya.y += f * c,
            this.Sb = (d + this.Sb + a.Sb) / 2)
        },
        of: function(a) {
            this.Ya.x = a.Ya.x;
            this.Ya.y = a.Ya.y;
            this.Sb = a.Sb
        },
        by: function(a) {
            var b = a.n;
            a = this.Ya.x * b.x + this.Ya.y * b.y - a.d;
            return a <= -this.Sb ? -1 : a >= this.Sb ? 1 : 0
        },
        m: Vd
    });
    kf.g = ["316"];
    kf.prototype = {
        ZF: function(a, b) {
            this.cm.clear();
            b ? pb.kH(a, this.cm) : (this.Ml = 15,
            this.bm && (this.bm = !1,
            this.JL()),
            a.XB(this, b));
            return this.cm
        },
        $H: function(a) {
            if (!isFinite(a.Sb))
                return !0;
            for (var b = 0; 4 > b; ) {
                var c = b++
                  , d = 1 << c;
                if (0 != (this.Ml & d)) {
                    c = a.by(this.Nl[c]);
                    if (0 > c)
                        return !1;
                    0 < c && (this.Ml &= ~d)
                }
            }
            return !0
        },
        JL: function() {
            if (this.bm) {
                this.bm = !1;
                var a = this.qg.Tj
                  , b = null == a ? this.qg.Rl.lb() : a.lb()
                  , c = b.x / 2
                  , d = b.y / 2;
                b = this.Yp[0];
                var f = this.Yp[1]
                  , e = this.Yp[2]
                  , n = this.Yp[3];
                b.x = -c;
                b.y = -d;
                f.x = c;
                f.y = -d;
                e.x = -c;
                e.y = d;
                n.x = c;
                n.y = d;
                if (null != a) {
                    a = a.VG();
                    c = b.x;
                    d = b.y;
                    var k = b.z
                      , h = b.W;
                    b.x = a.m11 * c + a.m12 * d + a.m13 * k + a.m14 * h;
                    b.y = a.m21 * c + a.m22 * d + a.m23 * k + a.m24 * h;
                    b.z = a.m31 * c + a.m32 * d + a.m33 * k + a.m34 * h;
                    b.W = a.m41 * c + a.m42 * d + a.m43 * k + a.m44 * h;
                    c = f.x;
                    d = f.y;
                    k = f.z;
                    h = f.W;
                    f.x = a.m11 * c + a.m12 * d + a.m13 * k + a.m14 * h;
                    f.y = a.m21 * c + a.m22 * d + a.m23 * k + a.m24 * h;
                    f.z = a.m31 * c + a.m32 * d + a.m33 * k + a.m34 * h;
                    f.W = a.m41 * c + a.m42 * d + a.m43 * k + a.m44 * h;
                    c = e.x;
                    d = e.y;
                    k = e.z;
                    h = e.W;
                    e.x = a.m11 * c + a.m12 * d + a.m13 * k + a.m14 * h;
                    e.y = a.m21 * c + a.m22 * d + a.m23 * k + a.m24 * h;
                    e.z = a.m31 * c + a.m32 * d + a.m33 * k + a.m34 * h;
                    e.W = a.m41 * c + a.m42 * d + a.m43 * k + a.m44 * h;
                    c = n.x;
                    d = n.y;
                    k = n.z;
                    h = n.W;
                    n.x = a.m11 * c + a.m12 * d + a.m13 * k + a.m14 * h;
                    n.y = a.m21 * c + a.m22 * d + a.m23 * k + a.m24 * h;
                    n.z = a.m31 * c + a.m32 * d + a.m33 * k + a.m34 * h;
                    n.W = a.m41 * c + a.m42 * d + a.m43 * k + a.m44 * h
                }
                a = this.Nl[0];
                c = b.x;
                d = b.y;
                k = f.x - c;
                h = f.y - d;
                var l = Math.sqrt(k * k + h * h);
                a.n.x = -(h / l);
                a.n.y = k / l;
                a.d = a.n.x * c + a.n.y * d;
                a = this.Nl[1];
                c = n.x;
                d = n.y;
                k = e.x - c;
                h = e.y - d;
                l = Math.sqrt(k * k + h * h);
                a.n.x = -(h / l);
                a.n.y = k / l;
                a.d = a.n.x * c + a.n.y * d;
                a = this.Nl[2];
                c = e.x;
                e = e.y;
                d = b.x - c;
                k = b.y - e;
                h = Math.sqrt(d * d + k * k);
                a.n.x = -(k / h);
                a.n.y = d / h;
                a.d = a.n.x * c + a.n.y * e;
                e = this.Nl[3];
                a = f.x;
                f = f.y;
                c = n.x - a;
                d = n.y - f;
                k = Math.sqrt(c * c + d * d);
                e.n.x = -(d / k);
                e.n.y = c / k;
                e.d = e.n.x * a + e.n.y * f;
                this.J.c = b.x;
                this.J.b = b.y;
                this.J.j = n.x;
                this.J.i = n.y
            }
        },
        m: kf
    };
    var Za = {
        pb: !0,
        ob: ["CullDynamic", "CullAlways", "CullNever"],
        Lk: ["CullDynamic", 0]
    };
    Za.Lk.toString = h;
    Za.Lk.l = Za;
    Za.Kk = ["CullAlways", 1];
    Za.Kk.toString = h;
    Za.Kk.l = Za;
    Za.vr = ["CullNever", 2];
    Za.vr.toString = h;
    Za.vr.l = Za;
    Za.Gb = [Za.Lk, Za.Kk, Za.vr];
    Cb.g = ["317"];
    Cb.prototype = {
        m: Cb
    };
    rb.g = ["318"];
    rb.SF = function() {
        for (var a = 0, b = sb.en; a < b; ) {
            var c = a++;
            rb.io.a[c].clear()
        }
    }
    ;
    rb.YJ = function(a) {
        null == rb.io && rb.IH();
        var b = rb.io
          , c = rb.pF
          , d = a;
        for (c.clear(); null != d.parent; ) {
            var f = d.parent;
            c.V == c.B && c.T();
            c.a[c.V++] = f;
            d = d.parent
        }
        d = 0;
        for (f = c.V; d < f; ) {
            d++;
            for (var e = c.a[--c.V].Md, n; null != e; ) {
                n = e.state;
                var k = b.a[n.ym];
                k.V == k.B && k.T();
                k.a[k.V++] = n;
                e = e.next
            }
        }
        for (a = a.Md; null != a; )
            d = a.state,
            f = b.a[d.ym],
            f.V == f.B && f.T(),
            f.a[f.V++] = d,
            a = a.next;
        c.clear(!0);
        return b
    }
    ;
    rb.IH = function() {
        var a = sb.en;
        rb.io = new Q(a);
        for (var b = 0; b < a; ) {
            b++;
            var c = rb.io
              , d = new jc;
            c.f == c.B && c.T();
            c.a[c.f++] = d
        }
        rb.pF = new jc(16)
    }
    ;
    Bb.g = ["319"];
    Bb.H = Sa;
    Bb.prototype = x(Sa.prototype, {
        s: function() {
            Sa.prototype.s.call(this);
            this.Ja = null
        },
        sv: function(a, b) {
            for (var c = this.Ja; null != c; )
                c.XB(a, b),
                c = c.da
        },
        Dj: function(a, b) {
            return pb.Dj(this, a, b)
        },
        rc: function(a, b) {
            var c = 0;
            if (this.Jg.contains(a))
                for (var d = this.Ja; null != d; )
                    c += d.rc(a, b),
                    d = d.da;
            return c
        },
        appendChild: function(a) {
            if (null == this.Ja)
                this.Ja = a,
                a.da = null;
            else {
                for (var b = this.Ja; null != b.da; )
                    b = b.da;
                b.da = a
            }
            a.parent = this;
            this.Ce++;
            return this
        },
        Xk: function(a, b) {
            if (0 == b)
                a.da = this.Ja,
                this.Ja = a;
            else {
                var c = this.Ja
                  , d = 0;
                for (--b; d < b; )
                    d++,
                    c = c.da;
                a.da = c.da;
                c.da = a
            }
            a.parent = this;
            this.Ce++;
            return this
        },
        removeChild: function(a) {
            if (this.Ja == a)
                this.Ja = a.da;
            else {
                for (var b = this.Ja; b.da != a; )
                    b = b.da;
                b.da = a.da
            }
            a.da = null;
            a.parent = null;
            this.Ce--;
            return this
        },
        DK: function(a, b) {
            this.removeChild(a);
            this.Xk(a, b);
            return this
        },
        pf: function(a) {
            for (var b = this.Ja; null != b; ) {
                if (b.name == a)
                    return b;
                b = b.da
            }
            return null
        },
        Uq: function(a, b) {
            for (var c = null, d = null, f = 0, e = this.Ja; 2 > f && null != e; )
                e.da == a ? (c = e,
                ++f) : e.da == b && (d = e,
                ++f),
                e = e.da;
            f = a.da;
            e = b.da;
            a.da = null;
            b.da = null;
            f == b ? (null != c ? c.da = b : this.Ja = b,
            b.da = a,
            a.da = e) : e == a ? (null != d ? d.da = a : this.Ja = a,
            a.da = b,
            b.da = f) : (null != c ? c.da = b : this.Ja = b,
            b.da = f,
            null != d ? d.da = a : this.Ja = a,
            a.da = e);
            return this
        },
        hr: function(a, b) {
            null == b && (b = !0);
            Sa.prototype.hr.call(this, a);
            if (b)
                for (b = this.Ja; null != b; )
                    b.gr(!1, a),
                    b = b.da
        },
        Oh: function() {
            if (!(0 < (this.o & 16)) && null != this.Ja) {
                var a = this.Ja;
                this.Jg.of(a.Jg);
                for (a = a.da; null != a; )
                    this.Jg.uv(a.Jg),
                    a = a.da;
                this.o &= -33;
                Sa.prototype.Oh.call(this)
            }
        },
        mx: function(a) {
            for (var b = this.Ja; null != b; )
                b.tD(a),
                b = b.da
        },
        Wg: function() {
            return null != Bb.il ? Bb.il() : Sa.prototype.Wg.call(this)
        },
        m: Bb
    });
    jf.g = ["320"];
    jf.prototype = {
        m: jf
    };
    Ab.g = ["321"];
    Ab.H = qb;
    Ab.prototype = x(qb.prototype, {
        rc: function(a, b) {
            if (!this.Jg.contains(a))
                return 0;
            var c = Ab.jD;
            c.x = 0;
            c.y = 0;
            this.Kc.eg(a, c);
            a = c.x;
            c = c.y;
            return 0 <= a && 1 >= a && 0 <= c && 1 >= c ? (null != b && (b.a[b.count++] = this),
            1) : 0
        },
        Dj: function(a, b) {
            var c = Ab.jD
              , d = 3E38
              , f = 3E38
              , e = -3E38
              , n = -3E38;
            if (a == this)
                f = d = 0,
                n = e = 1;
            else {
                if (a == this.parent) {
                    var k = this.local;
                    c.x = 0;
                    c.y = 0;
                    k.rb(c, c);
                    c.x < d && (d = c.x);
                    c.x > e && (e = c.x);
                    c.y < f && (f = c.y);
                    c.y > n && (n = c.y);
                    c.x = 1;
                    c.y = 0;
                    k.rb(c, c);
                    c.x < d && (d = c.x);
                    c.x > e && (e = c.x);
                    c.y < f && (f = c.y);
                    c.y > n && (n = c.y);
                    c.x = 1;
                    c.y = 1;
                    k.rb(c, c);
                    c.x < d && (d = c.x);
                    c.x > e && (e = c.x);
                    c.y < f && (f = c.y);
                    c.y > n && (n = c.y);
                    c.x = 0;
                    c.y = 1;
                    k.rb(c, c)
                } else
                    null == a.parent ? (k = this.Kc,
                    c.x = 0,
                    c.y = 0,
                    k.rb(c, c),
                    c.x < d && (d = c.x),
                    c.x > e && (e = c.x),
                    c.y < f && (f = c.y),
                    c.y > n && (n = c.y),
                    c.x = 1,
                    c.y = 0,
                    k.rb(c, c),
                    c.x < d && (d = c.x),
                    c.x > e && (e = c.x),
                    c.y < f && (f = c.y),
                    c.y > n && (n = c.y),
                    c.x = 1,
                    c.y = 1,
                    k.rb(c, c),
                    c.x < d && (d = c.x),
                    c.x > e && (e = c.x),
                    c.y < f && (f = c.y),
                    c.y > n && (n = c.y),
                    c.x = 0,
                    c.y = 1,
                    k.rb(c, c)) : (k = this.Kc,
                    a = a.Kc,
                    c.x = 0,
                    c.y = 0,
                    k.rb(c, c),
                    a.eg(c, c),
                    c.x < d && (d = c.x),
                    c.x > e && (e = c.x),
                    c.y < f && (f = c.y),
                    c.y > n && (n = c.y),
                    c.x = 1,
                    c.y = 0,
                    k.rb(c, c),
                    a.eg(c, c),
                    c.x < d && (d = c.x),
                    c.x > e && (e = c.x),
                    c.y < f && (f = c.y),
                    c.y > n && (n = c.y),
                    c.x = 1,
                    c.y = 1,
                    k.rb(c, c),
                    a.eg(c, c),
                    c.x < d && (d = c.x),
                    c.x > e && (e = c.x),
                    c.y < f && (f = c.y),
                    c.y > n && (n = c.y),
                    c.x = 0,
                    c.y = 1,
                    k.rb(c, c),
                    a.eg(c, c));
                c.x < d && (d = c.x);
                c.x > e && (e = c.x);
                c.y < f && (f = c.y);
                c.y > n && (n = c.y)
            }
            b.c = d;
            b.b = f;
            b.j = e;
            b.i = n;
            return b
        },
        Ux: function() {
            qb.prototype.Ux.call(this);
            this.yh.Ya.x = .5;
            this.yh.Ya.y = .5;
            this.yh.Sb = Math.sqrt(.5);
            switch (this.yh.type) {
            case 2:
                var a = this.yh;
                a.c = 0;
                a.b = 0;
                a.j = 1;
                a.i = 1
            }
        },
        Wg: function() {
            return null != Ab.il ? Ab.il() : qb.prototype.Wg.call(this)
        },
        m: Ab
    });
    pb.g = ["322"];
    pb.kH = function(a, b) {
        var c = pb.Dy
          , d = pb.jF;
        c.clear();
        c.V == c.B && c.T();
        for (c.a[c.V++] = a; 0 < c.V; )
            if (a = c.a[--c.V],
            !(0 < (a.o & 1)))
                if (0 < (a.o & 512))
                    null != a.gc && (d.V == d.B && d.T(),
                    d.a[d.V++] = a);
                else if (0 < (a.o & 256))
                    for (a = a.Ja; null != a; )
                        c.V == c.B && c.T(),
                        c.a[c.V++] = a,
                        a = a.da;
        b.clear();
        b.od(d.V);
        c = 0;
        for (a = d.V; c < a; ) {
            c++;
            var f = d.a[--d.V];
            b.a[b.f++] = f
        }
    }
    ;
    pb.Dj = function(a, b, c) {
        var d = 3E38
          , f = 3E38
          , e = -3E38
          , n = -3E38
          , k = pb.Dy;
        k.clear();
        k.V == k.B && k.T();
        for (k.a[k.V++] = a; 0 < k.V; )
            if (a = k.a[--k.V],
            0 < (a.o & 512))
                a.Dj(b, c),
                c.c < d && (d = c.c),
                c.b < f && (f = c.b),
                c.j > e && (e = c.j),
                c.i > n && (n = c.i);
            else if (0 < (a.o & 256))
                for (a = a.Ja; null != a; )
                    k.V == k.B && k.T(),
                    k.a[k.V++] = a,
                    a = a.da;
        c.c = d;
        c.b = f;
        c.j = e;
        c.i = n;
        return c
    }
    ;
    pb.xL = function(a, b, c) {
        var d;
        null == d && (d = new E);
        var f = c.c
          , e = c.b
          , n = c.j
          , k = c.i
          , h = 3E38
          , l = 3E38
          , m = -3E38
          , q = -3E38
          , p = pb.mF;
        b == a ? (h = c.c,
        l = c.b,
        m = c.j,
        q = c.i) : (b == a.parent ? (b = a.local,
        p.x = f,
        p.y = e,
        b.rb(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = n,
        p.y = e,
        b.rb(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = n,
        p.y = k,
        b.rb(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = f,
        p.y = k,
        b.rb(p, p)) : null == b.parent ? (b = a.Kc,
        p.x = f,
        p.y = e,
        b.rb(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = n,
        p.y = e,
        b.rb(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = n,
        p.y = k,
        b.rb(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = f,
        p.y = k,
        b.rb(p, p)) : (a = a.Kc,
        b = b.Kc,
        p.x = f,
        p.y = e,
        a.rb(p, p),
        b.eg(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = n,
        p.y = e,
        a.rb(p, p),
        b.eg(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = n,
        p.y = k,
        a.rb(p, p),
        b.eg(p, p),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y),
        p.x = f,
        p.y = k,
        a.rb(p, p),
        b.eg(p, p)),
        p.x < h && (h = p.x),
        p.x > m && (m = p.x),
        p.y < l && (l = p.y),
        p.y > q && (q = p.y));
        d.c = h;
        d.b = l;
        d.j = m;
        d.i = q;
        return d
    }
    ;
    hf.g = ["323"];
    hf.prototype = {
        m: hf
    };
    wc.g = ["324"];
    wc.prototype = {
        s: function() {
            this.na = this.R = this.K = null
        },
        of: function(a) {
            var b = this.R
              , c = a.R;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b = this.K;
            c = a.K;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b = this.na;
            c = a.na;
            b.m11 = c.m11;
            b.m12 = c.m12;
            b.m13 = c.m13;
            b.m21 = c.m21;
            b.m22 = c.m22;
            b.m23 = c.m23;
            b.m31 = c.m31;
            b.m32 = c.m32;
            b.m33 = c.m33;
            this.u = a.u | 32;
            return this
        },
        MK: function(a, b) {
            if (0 < (a.u & 1)) {
                this.R.x = b.R.x;
                this.R.y = b.R.y;
                this.K.x = b.K.x;
                this.K.y = b.K.y;
                a = this.na;
                var c = b.na;
                a.m11 = c.m11;
                a.m12 = c.m12;
                a.m21 = c.m21;
                a.m22 = c.m22;
                this.u = b.u | 32;
                return this
            }
            if (0 < (b.u & 1))
                return this.R.x = a.R.x,
                this.R.y = a.R.y,
                this.K.x = a.K.x,
                this.K.y = a.K.y,
                b = this.na,
                c = a.na,
                b.m11 = c.m11,
                b.m12 = c.m12,
                b.m21 = c.m21,
                b.m22 = c.m22,
                this.u = a.u | 32,
                this;
            this.u = 43;
            if (0 < (a.u & 2) && 0 < (b.u & 2) && 0 < (a.u & 8)) {
                c = this.na;
                if (0 < (a.u & 16)) {
                    var d = b.na;
                    c.m11 = d.m11;
                    c.m12 = d.m12;
                    c.m21 = d.m21;
                    c.m22 = d.m22;
                    0 < (b.u & 16) && (this.u |= 16)
                } else {
                    if (0 < (b.u & 16)) {
                        var f = a.na;
                        c.m11 = f.m11;
                        c.m12 = f.m12;
                        c.m21 = f.m21;
                        c.m22 = f.m22
                    } else {
                        f = a.na;
                        d = b.na;
                        var e = d.m11;
                        var n = d.m12;
                        var k = d.m21;
                        var h = d.m22;
                        d = f.m11;
                        var l = f.m12;
                        c.m11 = d * e + l * k;
                        c.m12 = d * n + l * h;
                        d = f.m21;
                        l = f.m22;
                        c.m21 = d * e + l * k;
                        c.m22 = d * n + l * h
                    }
                    this.na != c && (f = this.na,
                    f.m11 = c.m11,
                    f.m12 = c.m12,
                    f.m13 = c.m13,
                    f.m21 = c.m21,
                    f.m22 = c.m22,
                    f.m23 = c.m23,
                    f.m31 = c.m31,
                    f.m32 = c.m32,
                    f.m33 = c.m33);
                    this.u &= -18;
                    this.u |= 34
                }
                k = this.R;
                f = a.R;
                0 < (a.u & 16) ? (k.x = b.R.x,
                k.y = b.R.y) : (e = b.R.x,
                n = b.R.y,
                c = a.na,
                k.x = c.m11 * e + c.m12 * n,
                k.y = c.m21 * e + c.m22 * n);
                a = a.K.x;
                k.x = k.x * a + f.x;
                k.y = k.y * a + f.y;
                0 < (b.u & 8) ? (this.K.x = this.K.y = a * b.K.x,
                this.u &= -6,
                this.u |= 40) : (b = b.K,
                this.K.x = a * b.x,
                this.K.y = a * b.y,
                this.u &= -14,
                this.u |= 32);
                return this
            }
            f = a.na;
            0 < (a.u & 2) && (f = wc.nF,
            e = a.K.x,
            n = a.K.y,
            c = a.na,
            f.m11 = c.m11 * e,
            f.m12 = c.m12 * n,
            f.m21 = c.m21 * e,
            f.m22 = c.m22 * n);
            d = b.na;
            0 < (b.u & 2) && (f = wc.oF,
            e = b.K.x,
            n = b.K.y,
            c = b.na,
            d.m11 = c.m11 * e,
            d.m12 = c.m12 * n,
            d.m21 = c.m21 * e,
            d.m22 = c.m22 * n);
            c = this.na;
            e = d.m11;
            n = d.m12;
            k = d.m21;
            h = d.m22;
            d = f.m11;
            l = f.m12;
            c.m11 = d * e + l * k;
            c.m12 = d * n + l * h;
            d = f.m21;
            l = f.m22;
            c.m21 = d * e + l * k;
            c.m22 = d * n + l * h;
            k = this.R;
            e = b.R.x;
            n = b.R.y;
            k.x = f.m11 * e + f.m12 * n;
            k.y = f.m21 * e + f.m22 * n;
            f = a.R;
            k.x += f.x;
            k.y += f.y;
            this.u &= -12;
            this.u |= 32;
            return this
        },
        Oy: function(a, b) {
            if (0 < (this.u & 1))
                b.x = a.x,
                b.y = a.y,
                b.z = a.z;
            else {
                if (0 < (this.u & 2)) {
                    if (b.x = a.x * this.K.x,
                    b.y = a.y * this.K.y,
                    b.z = a.z * this.K.z,
                    0 >= (this.u & 16)) {
                        a = this.na;
                        var c = b.x
                          , d = b.y
                          , f = b.z;
                        b.x = a.m11 * c + a.m12 * d + a.m13 * f;
                        b.y = a.m21 * c + a.m22 * d + a.m23 * f;
                        b.z = a.m31 * c + a.m32 * d + a.m33 * f
                    }
                } else
                    b.x = a.x,
                    b.y = a.y,
                    b.z = a.z,
                    a = this.na,
                    c = b.x,
                    d = b.y,
                    f = b.z,
                    b.x = a.m11 * c + a.m12 * d + a.m13 * f,
                    b.y = a.m21 * c + a.m22 * d + a.m23 * f,
                    b.z = a.m31 * c + a.m32 * d + a.m33 * f;
                b.x += this.R.x;
                b.y += this.R.y;
                b.z += this.R.z
            }
            return b
        },
        rb: function(a, b) {
            if (0 < (this.u & 1))
                b.x = a.x,
                b.y = a.y;
            else {
                if (0 < (this.u & 2)) {
                    var c = a.x * this.K.x;
                    a = a.y * this.K.y;
                    if (0 >= (this.u & 16)) {
                        var d = c
                          , f = this.na;
                        c = f.m11 * c + f.m12 * a;
                        a = f.m21 * d + f.m22 * a
                    }
                } else
                    c = a.x,
                    a = a.y,
                    d = c,
                    f = this.na,
                    c = f.m11 * c + f.m12 * a,
                    a = f.m21 * d + f.m22 * a;
                b.x = c + this.R.x;
                b.y = a + this.R.y
            }
            return b
        },
        eg: function(a, b) {
            if (0 < (this.u & 1))
                b.x = a.x,
                b.y = a.y;
            else {
                var c = a.x - this.R.x;
                a = a.y - this.R.y;
                if (0 < (this.u & 2)) {
                    if (0 >= (this.u & 16)) {
                        var d = c
                          , f = this.na;
                        c = c * f.m11 + a * f.m21;
                        a = d * f.m12 + a * f.m22
                    }
                    b.x = c / this.K.x;
                    b.y = a / this.K.y
                } else
                    d = this.na,
                    f = 1 / (d.m11 * d.m22 - d.m12 * d.m21),
                    b.x = d.m22 * f * c - d.m12 * f * a,
                    b.y = -(d.m21 * f) * c + d.m11 * f * a
            }
            return b
        },
        bH: function() {
            if (0 < (this.u & 2)) {
                var a = Math.abs(this.K.x)
                  , b = Math.abs(this.K.y);
                return a > b ? a : b
            }
            a = Math.abs(this.na.m11) + Math.abs(this.na.m12);
            b = Math.abs(this.na.m21) + Math.abs(this.na.m22);
            return a > b ? a : b
        },
        m: wc
    };
    ra.g = ["325"];
    ra.$ = [zf, hf];
    ra.prototype = {
        s: function() {
            this.remove();
            null != this.pk && (this.pk.s(),
            this.pk = null);
            null != this.iw && (this.iw.s(),
            this.iw = null);
            this.node = null;
            ra.Cj = !0;
            ra.count--
        },
        remove: function() {
            null != this.node.parent && this.node.parent.removeChild(this.node)
        },
        tc: function() {
            var a = this.node.parent;
            return null != a && (a = a.client,
            null != a && 4 == a.type) ? a : null
        },
        sa: function(a) {
            this.xf != a && (this.xf = 0 > a ? 0 : 1 < a ? 1 : a,
            this.o |= 2);
            return this.xf
        },
        I: function(a) {
            this.vc != a && (this.vc = a,
            this.o |= 4);
            return a
        },
        P: function(a) {
            this.Ea != a && (this.Ea = a,
            this.o |= 1);
            return a
        },
        S: function(a) {
            this.Ha != a && (this.Ha = a,
            this.o |= 1);
            return a
        },
        Ed: function(a) {
            this.Tc != a && (this.Tc = a,
            this.o |= 9);
            return a
        },
        N: function(a) {
            if (this.Na != a || this.Uc != a)
                this.Na = this.Uc = a,
                this.o |= 49,
                this.o &= -65;
            return a
        },
        Qq: function(a) {
            this.Na != a && (this.Na = a,
            this.o &= -97,
            this.o |= 17);
            return a
        },
        Rq: function(a) {
            this.Uc != a && (this.Uc = a,
            this.o &= -97,
            this.o |= 17);
            return a
        },
        za: function() {
            throw 0;
        },
        Aa: function() {
            throw 0;
        },
        Dg: function(a) {
            this.Ob != a && (this.Ob = a,
            this.o |= 1);
            return a
        },
        Ex: function(a) {
            this.Pb != a && (this.Pb = a,
            this.o |= 1);
            return a
        },
        Ak: function(a) {
            this.og != a && (this.og = a,
            this.o |= 1);
            return a
        },
        $C: function(a) {
            this.pg != a && (this.pg = a,
            this.o |= 1);
            return a
        },
        pK: function() {
            this.Ob = this.Pb = 0;
            this.o |= 1
        },
        qK: function() {
            this.og = this.pg = 0;
            this.o |= 1
        },
        yC: function() {
            this.Ha = this.pg = this.Pb = this.Ea = this.og = this.Ob = 0;
            this.Uc = this.Na = 1;
            this.Tc = 0;
            this.o &= -25;
            this.o |= 97;
            var a = this.node.local
              , b = a.na;
            b.m11 = 1;
            b.m12 = 0;
            b.m21 = 0;
            b.m22 = 1;
            a.R.x = 0;
            a.R.y = 0;
            a.K.x = 1;
            a.K.y = 1;
            a.u |= 63
        },
        ma: function() {
            throw 0;
        },
        yb: function(a, b, c) {
            this.Yc();
            var d = this.ma(this.tc())
              , f = this.Ea - d.c
              , e = this.Ha - d.b;
            switch (b) {
            case -1:
                this.P(a.c + f);
                break;
            case 0:
                this.P(a.c + .5 * (a.j - a.c) + f - (d.j - d.c) / 2);
                break;
            case 1:
                this.P(a.j + f - (d.j - d.c))
            }
            switch (c) {
            case -1:
                this.S(a.b + e);
                break;
            case 0:
                this.S(a.b + .5 * (a.i - a.b) + e - (d.i - d.b) / 2);
                break;
            case 1:
                this.S(a.i + e - (d.i - d.b))
            }
        },
        nf: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = Na.Xh);
            this.N(1);
            var f = (a.j - a.c) / this.za()
              , e = (a.i - a.b) / this.Aa();
            b == Na.Th ? (this.Qq(f),
            this.Rq(e)) : b == Na.Xh ? this.N(Math.min(f, e)) : this.N(Math.max(f, e));
            this.P(a.c);
            this.S(a.b);
            e = this.ma(this.tc());
            f = a.c - e.c;
            e = a.b - e.b;
            if (b != Na.Th) {
                switch (c) {
                case -1:
                    this.P(a.c);
                    break;
                case 0:
                    this.P(a.c + (a.j - a.c - this.za()) / 2);
                    break;
                case 1:
                    this.P(a.j - this.za())
                }
                switch (d) {
                case -1:
                    this.S(a.b);
                    break;
                case 0:
                    this.S(a.b + (a.i - a.b - this.Aa()) / 2);
                    break;
                case 1:
                    this.S(a.i - this.Aa())
                }
            }
            this.P(this.Ea + f);
            this.S(this.Ha + e)
        },
        Hg: function(a, b) {
            null == b && (b = new B);
            Ca.Ph(this);
            return this.node.Kc.rb(a, b)
        },
        xc: function(a) {
            null != this.node.controllers && this.node.KL(a)
        },
        zb: function() {
            null == this.pk && (this.pk = new pe(this));
            return this.pk
        },
        Hd: function() {
            return new gf(this)
        },
        Yc: function() {
            if (0 == (this.o & 7))
                return this;
            0 < (this.o & 1) && this.Tx();
            0 < (this.o & 4) && (this.node.Dx(this.vc ? Za.Lk : Za.Kk),
            this.o &= -5);
            if (0 < (this.o & 2)) {
                if (1 > this.xf) {
                    var a = this.node.UG(Da.$f);
                    null == a ? this.node.vm(new Wd(this.xf)) : a.value = this.xf
                } else
                    this.node.lK(Da.$f);
                this.o &= -3;
                this.node.o |= 128
            }
            return this
        },
        Tx: function() {
            this.o &= -2;
            this.node.o |= 8;
            var a = this.node.local
              , b = this.og
              , c = this.pg
              , d = this.o & 120;
            if (0 < (d & 8)) {
                var f = this.Tc;
                f %= 360;
                0 > f && (f += 360);
                var e = .017453292519943295 * f;
                f = Math.sin(e);
                e = Math.cos(e);
                var n = a.na;
                n.m11 = e;
                n.m12 = -f;
                n.m21 = f;
                n.m22 = e;
                if (a.na != n) {
                    var k = a.na;
                    k.m11 = n.m11;
                    k.m12 = n.m12;
                    k.m13 = n.m13;
                    k.m21 = n.m21;
                    k.m22 = n.m22;
                    k.m23 = n.m23;
                    k.m31 = n.m31;
                    k.m32 = n.m32;
                    k.m33 = n.m33
                }
                a.u &= -18;
                a.u |= 34;
                if (0 < (d & 64))
                    a.R.x = -(b * e) + c * f + b + this.Ea - this.Ob,
                    a.R.y = -(b * f) - c * e + c + this.Ha - this.Pb;
                else if (0 < (d & 32))
                    d = this.Na,
                    d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d,
                    n = d * b,
                    k = d * c,
                    a.K.x = a.K.y = d,
                    a.u &= -6,
                    a.u |= 40,
                    a.R.x = -(n * e) + k * f + b + this.Ea - this.Ob,
                    a.R.y = -(n * f) - k * e + c + this.Ha - this.Pb;
                else {
                    d = this.Na;
                    d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d;
                    n = this.Uc;
                    n = 0 > n ? -.001 < n ? -.001 : n : .001 > n ? .001 : n;
                    k = d * b;
                    var h = n * c;
                    a.K.x = d;
                    a.K.y = n;
                    a.u &= -14;
                    a.u |= 32;
                    a.R.x = -(k * e) + h * f + b + this.Ea - this.Ob;
                    a.R.y = -(k * f) - h * e + c + this.Ha - this.Pb
                }
            } else
                0 < (d & 64) ? (a.R.x = this.Ea - this.Ob,
                a.R.y = this.Ha - this.Pb) : 0 < (d & 32) ? (f = this.Na,
                f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f,
                a.K.x = a.K.y = f,
                a.u &= -6,
                a.u |= 40,
                a.R.x = -(f * b) + b + this.Ea - this.Ob,
                a.R.y = -(f * c) + c + this.Ha - this.Pb) : (f = this.Na,
                f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f,
                e = this.Uc,
                e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e,
                a.K.x = f,
                a.K.y = e,
                a.u &= -14,
                a.u |= 32,
                a.R.x = -(f * b) + b + this.Ea - this.Ob,
                a.R.y = -(e * c) + c + this.Ha - this.Pb);
            a.u &= -2;
            a.u |= 32
        },
        m: ra
    };
    I.g = ["326"];
    I.H = ra;
    I.prototype = x(ra.prototype, {
        s: function() {
            null != this.node && (ra.prototype.s.call(this),
            null != this.lk && (this.lk.s(),
            this.lk = null),
            this.Vc.s(),
            this.xa = this.Vc = null,
            this.Bl = -1,
            this.wp = null,
            I.Zg--)
        },
        za: function() {
            var a = Math;
            if (0 == (this.o & 8))
                return this.cb * a.abs(this.Na);
            var b = this.cb * a.abs(this.Na) * .5
              , c = this.wb * a.abs(this.Uc) * .5
              , d = this.Tc;
            d %= 360;
            0 > d && (d += 360);
            var f = .017453292519943295 * d;
            d = -a.sin(f);
            a = a.cos(f);
            var e = f = 0;
            0 < a ? (f -= a * b,
            e += a * b) : (f += a * b,
            e -= a * b);
            0 < d ? (f -= d * c,
            e += d * c) : (f += d * c,
            e -= d * c);
            return e - f
        },
        VK: function(a) {
            this.Na = a / this.cb;
            this.o &= -97;
            this.o |= 17;
            return a
        },
        Aa: function() {
            var a = Math;
            if (0 == (this.o & 8))
                return this.wb * a.abs(this.Uc);
            var b = this.cb * a.abs(this.Na) / 2
              , c = this.wb * a.abs(this.Uc) / 2
              , d = this.Tc;
            d %= 360;
            0 > d && (d += 360);
            var f = .017453292519943295 * d;
            d = a.sin(f);
            a = a.cos(f);
            var e = f = 0;
            0 < d ? (f -= d * b,
            e += d * b) : (f += d * b,
            e -= d * b);
            0 < a ? (f -= a * c,
            e += a * c) : (f += a * c,
            e -= a * c);
            return e - f
        },
        YC: function(a) {
            this.Uc = a / this.wb;
            this.o &= -97;
            this.o |= 17;
            return a
        },
        SG: function() {
            return new B(this.cb,this.wb)
        },
        Oa: function() {
            this.Dg(this.cb / 2);
            this.Ex(this.wb / 2);
            this.o |= 1
        },
        ea: function() {
            this.og = this.cb / 2;
            this.pg = this.wb / 2;
            this.o |= 1
        },
        Dd: function(a, b) {
            if (this.Bl == a)
                return null != b && this.dc(b),
                this;
            this.Bl = a;
            this.wp = null;
            if (null == this.Vc.gc) {
                var c = new ud;
                this.Vc.gc = c
            } else
                6 == this.Vc.gc.type ? c = this.Vc.gc : (this.Vc.gc.s(),
                c = new ud,
                this.Vc.gc = c);
            a = La.ml(a);
            c.Dd(a, a.Pg);
            this.cb = c.ae.xb.x;
            this.wb = c.ae.xb.y;
            null == b && (this.cb *= a.scale,
            this.wb *= a.scale);
            this.o = this.cb == this.wb ? this.o | 256 : this.o & -257;
            this.o &= -513;
            this.o |= 129;
            null != b && this.dc(b);
            return this
        },
        dc: function(a) {
            if (this.wp == a)
                return a;
            this.wp = a;
            var b = this.Vc.gc.ae.Pg.Fp;
            this.RK((null != ea[a] ? b.ad(a) : b.G[a]).id);
            return a
        },
        Pc: function() {
            null == this.lk && (this.lk = new dc(this));
            return this.lk
        },
        EK: function(a, b, c) {
            this.cb = b;
            this.wb = c;
            this.o = this.cb == this.wb ? this.o | 256 : this.o & -257;
            this.o &= -513;
            this.o |= 129;
            0 > this.Bl ? null == this.Vc.gc && (this.Vc.gc = new Xd) : (this.Bl = -1,
            this.wp = null,
            this.Vc.gc.s(),
            this.Vc.gc = new Xd);
            this.Vc.gc.color = a;
            return this
        },
        rc: function(a) {
            Ca.Ph(this);
            0 < (this.node.o & 32) && this.node.Oh();
            return 1 == this.Vc.rc(a, null)
        },
        ma: function(a) {
            var b = new E;
            if (a == this)
                return b.c = 0,
                b.b = 0,
                b.j = this.cb,
                b.i = this.wb,
                b;
            if (0 == (this.o & 128))
                return b.c = 0,
                b.b = 0,
                b.j = 0,
                b.i = 0,
                b;
            var c = 512 == (this.o & 4608);
            c && (this.o &= -513,
            this.o |= 1);
            0 == (this.o & 8192) && (Ca.Ph(this),
            null == a || Ca.Gv(this, a) || Ca.Ph(a));
            var d = this.node;
            if (null == a)
                for (a = this.node; null != a.parent; )
                    a = a.parent;
            else
                a = a.node;
            d.Dj(a, b);
            c && (this.o |= 513);
            this.o &= -12289;
            return b
        },
        Yc: function() {
            return 0 == (this.o & 128) ? this : ra.prototype.Yc.call(this)
        },
        Hg: function(a, b) {
            a = new B(a.x,a.y);
            a.x /= this.cb;
            a.y /= this.wb;
            0 < (this.o & 512) ? (this.o &= -513,
            this.o |= 1,
            ra.prototype.Hg.call(this, a, b),
            this.o |= 513) : ra.prototype.Hg.call(this, a, b);
            return b
        },
        Tx: function() {
            this.o &= -2;
            this.node.o |= 8;
            var a = this.node.local;
            if (0 < (this.o & 512)) {
                var b = this.og - this.xa.x
                  , c = this.pg - this.xa.y
                  , d = this.o & 376;
                if (0 < (d & 8)) {
                    var f = this.Tc;
                    f %= 360;
                    0 > f && (f += 360);
                    var e = .017453292519943295 * f;
                    f = Math.sin(e);
                    e = Math.cos(e);
                    var h = a.na;
                    h.m11 = e;
                    h.m12 = -f;
                    h.m21 = f;
                    h.m22 = e;
                    if (a.na != h) {
                        var k = a.na;
                        k.m11 = h.m11;
                        k.m12 = h.m12;
                        k.m13 = h.m13;
                        k.m21 = h.m21;
                        k.m22 = h.m22;
                        k.m23 = h.m23;
                        k.m31 = h.m31;
                        k.m32 = h.m32;
                        k.m33 = h.m33
                    }
                    a.u &= -18;
                    a.u |= 34;
                    if (0 < (d & 64))
                        0 < (d & 256) ? (a.K.x = a.K.y = this.xa.W,
                        a.u &= -6,
                        a.u |= 40) : (a.K.x = this.xa.W,
                        a.K.y = this.xa.G,
                        a.u &= -14,
                        a.u |= 32),
                        a.R.x = -(b * e) + c * f + b + this.Ea - this.Ob + this.xa.x,
                        a.R.y = -(b * f) - c * e + c + this.Ha - this.Pb + this.xa.y;
                    else {
                        if (0 < (d & 32)) {
                            h = this.Na;
                            h = 0 > h ? -.001 < h ? -.001 : h : .001 > h ? .001 : h;
                            k = h * b;
                            var l = h * c;
                            0 < (d & 256) ? (a.K.x = a.K.y = this.xa.W * h,
                            a.u &= -6,
                            a.u |= 40) : (a.K.x = this.xa.W * h,
                            a.K.y = this.xa.G * h,
                            a.u &= -14,
                            a.u |= 32)
                        } else
                            d = this.Na,
                            d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d,
                            h = this.Uc,
                            h = 0 > h ? -.001 < h ? -.001 : h : .001 > h ? .001 : h,
                            k = d * b,
                            l = h * c,
                            a.K.x = this.xa.W * d,
                            a.K.y = this.xa.G * h,
                            a.u &= -14,
                            a.u |= 32;
                        a.R.x = -(k * e) + l * f + b + this.Ea - this.Ob + this.xa.x;
                        a.R.y = -(k * f) - l * e + c + this.Ha - this.Pb + this.xa.y
                    }
                } else
                    0 < (d & 64) ? (0 < (d & 256) ? (a.K.x = a.K.y = this.xa.W,
                    a.u &= -6,
                    a.u |= 40) : (a.K.x = this.xa.W,
                    a.K.y = this.xa.G,
                    a.u &= -14,
                    a.u |= 32),
                    a.R.x = this.Ea - this.Ob + this.xa.x,
                    a.R.y = this.Ha - this.Pb + this.xa.y) : 0 < (d & 32) ? (f = this.Na,
                    f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f,
                    0 < (d & 256) ? (a.K.x = a.K.y = this.xa.W * f,
                    a.u &= -6,
                    a.u |= 40) : (a.K.x = this.xa.W * f,
                    a.K.y = this.xa.G * f,
                    a.u &= -14,
                    a.u |= 32),
                    a.R.x = -(f * b) + b + this.Ea - this.Ob + this.xa.x,
                    a.R.y = -(f * c) + c + this.Ha - this.Pb + this.xa.y) : (f = this.Na,
                    f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f,
                    e = this.Uc,
                    e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e,
                    a.K.x = this.xa.W * f,
                    a.K.y = this.xa.G * e,
                    a.u &= -14,
                    a.u |= 32,
                    a.R.x = -(f * b) + b + this.Ea - this.Ob + this.xa.x,
                    a.R.y = -(e * c) + c + this.Ha - this.Pb + this.xa.y)
            } else
                b = this.og,
                c = this.pg,
                d = this.o & 376,
                0 < (d & 8) ? (f = this.Tc,
                f %= 360,
                0 > f && (f += 360),
                e = .017453292519943295 * f,
                f = Math.sin(e),
                e = Math.cos(e),
                h = a.na,
                h.m11 = e,
                h.m12 = -f,
                h.m21 = f,
                h.m22 = e,
                a.na != h && (k = a.na,
                k.m11 = h.m11,
                k.m12 = h.m12,
                k.m13 = h.m13,
                k.m21 = h.m21,
                k.m22 = h.m22,
                k.m23 = h.m23,
                k.m31 = h.m31,
                k.m32 = h.m32,
                k.m33 = h.m33),
                a.u &= -18,
                a.u |= 34,
                0 < (d & 64) ? (0 < (d & 256) ? (a.K.x = a.K.y = this.cb,
                a.u &= -6,
                a.u |= 40) : (a.K.x = this.cb,
                a.K.y = this.wb,
                a.u &= -14,
                a.u |= 32),
                a.R.x = -(b * e) + c * f + b + this.Ea - this.Ob,
                a.R.y = -(b * f) - c * e + c + this.Ha - this.Pb) : (0 < (d & 32) ? (h = this.Na,
                h = 0 > h ? -.001 < h ? -.001 : h : .001 > h ? .001 : h,
                k = h * b,
                l = h * c,
                0 < (d & 256) ? (a.K.x = a.K.y = this.cb * h,
                a.u &= -6,
                a.u |= 40) : (a.K.x = this.cb * h,
                a.K.y = this.wb * h,
                a.u &= -14,
                a.u |= 32)) : (d = this.Na,
                d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d,
                h = this.Uc,
                h = 0 > h ? -.001 < h ? -.001 : h : .001 > h ? .001 : h,
                k = d * b,
                l = h * c,
                a.K.x = this.cb * d,
                a.K.y = this.wb * h,
                a.u &= -14,
                a.u |= 32),
                a.R.x = -(k * e) + l * f + b + this.Ea - this.Ob,
                a.R.y = -(k * f) - l * e + c + this.Ha - this.Pb)) : 0 < (d & 64) ? (0 < (d & 256) ? (a.K.x = a.K.y = this.cb,
                a.u &= -6,
                a.u |= 40) : (a.K.x = this.cb,
                a.K.y = this.wb,
                a.u &= -14,
                a.u |= 32),
                a.R.x = this.Ea - this.Ob,
                a.R.y = this.Ha - this.Pb) : 0 < (d & 32) ? (f = this.Na,
                f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f,
                0 < (d & 256) ? (a.K.x = a.K.y = this.cb * f,
                a.u &= -6,
                a.u |= 40) : (a.K.x = this.cb * f,
                a.K.y = this.wb * f,
                a.u &= -14,
                a.u |= 32),
                a.R.x = -(f * b) + b + this.Ea - this.Ob,
                a.R.y = -(f * c) + c + this.Ha - this.Pb) : (f = this.Na,
                f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f,
                e = this.Uc,
                e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e,
                a.K.x = this.cb * f,
                a.K.y = this.wb * e,
                a.u &= -14,
                a.u |= 32,
                a.R.x = -(f * b) + b + this.Ea - this.Ob,
                a.R.y = -(e * c) + c + this.Ha - this.Pb);
            a.u &= -2;
            a.u |= 32
        },
        RK: function(a) {
            var b = this.Vc.gc;
            b.XC(a);
            b = b.ae.Pg;
            if (b.Wj)
                a = b.$v.a[a];
            else {
                var c = b.aw
                  , d = c.Fa
                  , f = d.Xa[73856093 * a & d.ab];
                if (-1 == f)
                    a = -2147483648;
                else if (d = d.a,
                d[f] == a)
                    a = d[f + 1];
                else {
                    var e = -2147483648;
                    for (f = d[f + 2]; -1 != f; ) {
                        if (d[f] == a) {
                            e = d[f + 1];
                            break
                        }
                        f = d[f + 2]
                    }
                    a = e
                }
                a = -2147483648 == a ? null : c.wh[a]
            }
            this.cb = a.xb.x;
            this.wb = a.xb.y;
            a.Px ? (this.o |= 512,
            c = a.Nh,
            f = a.hD,
            null == this.xa ? this.xa = new Yc(c.x,c.y,f.W,f.G) : (this.xa.x = c.x,
            this.xa.y = c.y,
            this.xa.W = f.W,
            this.xa.G = f.G),
            this.o = f.W == f.G ? this.o | 256 : this.o & -257) : (this.o &= -513,
            this.o = this.cb == this.wb ? this.o | 256 : this.o & -257);
            1 != b.scale && (b = 1 / b.scale,
            this.cb *= b,
            this.wb *= b,
            a.Px && (this.xa.x *= b,
            this.xa.y *= b,
            this.xa.W *= b,
            this.xa.G *= b));
            this.o |= 1
        },
        m: I
    });
    var Na = {
        pb: !0,
        ob: ["ShowAll", "NoBorder", "ExactFit"],
        Xh: ["ShowAll", 0]
    };
    Na.Xh.toString = h;
    Na.Xh.l = Na;
    Na.ss = ["NoBorder", 1];
    Na.ss.toString = h;
    Na.ss.l = Na;
    Na.Th = ["ExactFit", 2];
    Na.Th.toString = h;
    Na.Th.l = Na;
    Na.Gb = [Na.Xh, Na.ss, Na.Th];
    gf.g = ["327"];
    gf.prototype = {
        add: function() {
            this.D.node.vm(tb.$D);
            return this.D
        },
        screen: function() {
            this.D.node.vm(tb.aE);
            return this.D
        },
        m: gf
    };
    ma.g = ["328"];
    ma.H = ra;
    ma.prototype = x(ra.prototype, {
        Yc: function() {
            ra.prototype.Yc.call(this);
            for (var a = this.Ia.Ja, b; null != a; ) {
                if (null != a.client)
                    switch (a.client.type) {
                    case 3:
                    case 4:
                    case 7:
                        b = a.client,
                        b.Yc()
                    }
                a = a.da
            }
            return this
        },
        s: function() {
            null != this.Ia && (Ca.gl(this),
            this.Ia = null,
            ra.prototype.s.call(this),
            ma.Zg--)
        },
        appendChild: function(a) {
            this.Ia.appendChild(a.node);
            return this
        },
        Xk: function(a, b) {
            this.Ia.Xk(a.node, b);
            return this
        },
        removeChild: function(a) {
            this.Ia.removeChild(a.node);
            return this
        },
        pf: function(a) {
            a = this.Ia.pf(a);
            return null == a ? null : a.client
        },
        Uq: function(a, b) {
            this.Ia.Uq(a.node, b.node);
            return this
        },
        rc: function(a, b) {
            0 < (this.o & 1) && this.Yc();
            var c = this.node.o;
            0 < (c & 8) ? this.node.gr(!1, !0) : 0 < (c & 32) && this.node.oD(!0, !1);
            null == this.aq && (this.aq = new jf);
            this.aq.count = 0;
            a = this.Ia.rc(a, this.aq);
            if (null != b)
                for (c = 0; c < a; ) {
                    var d = c++;
                    b[d] = this.aq.a[d].client
                }
            return a
        },
        xc: function(a) {
            ra.prototype.xc.call(this, a);
            if (null != this.Ia && 0 != (this.o & 1024))
                for (var b = this.Ia.Ja, c; null != b; )
                    c = b.da,
                    b = b.client,
                    null != b && b.xc(a),
                    b = c
        },
        ma: function(a) {
            var b = new E(0,0,0,0);
            if (0 == this.Ia.Ce)
                return b;
            var c = new Q(32)
              , d = new jc(32)
              , f = this.node;
            d.V == d.B && d.T();
            d.a[d.V++] = f;
            for (var e; 0 < d.V; ) {
                f = d.a[--d.V];
                if (256 == (f.o & 4352))
                    for (e = f,
                    e = e.Ja; null != e; )
                        d.V == d.B && d.T(),
                        d.a[d.V++] = e,
                        e = e.da;
                if (null != f.client)
                    switch (f.client.type) {
                    case 3:
                        f = f.client;
                        c.f == c.B && c.T();
                        c.a[c.f++] = f;
                        break;
                    case 7:
                        f = f.client,
                        c.f == c.B && c.T(),
                        c.a[c.f++] = f,
                        0 < (f.o & 512) && (f.o &= -513,
                        f.o |= 1,
                        f.o |= 2048)
                    }
            }
            Ca.Ph(this, !0);
            null == a || Ca.Gv(this, a) || Ca.Ph(a);
            b.c = 3E38;
            b.b = 3E38;
            b.j = -3E38;
            b.i = -3E38;
            d = c.a;
            f = 0;
            for (e = c.f; f < e; ) {
                var h = f++;
                h = d[h];
                h.o |= 12288;
                h = h.ma(a);
                h.c < b.c && (b.c = h.c);
                h.b < b.b && (b.b = h.b);
                h.j > b.j && (b.j = h.j);
                h.i > b.i && (b.i = h.i)
            }
            a = c.a;
            d = 0;
            for (c = c.f; d < c; )
                f = d++,
                f = a[f],
                0 < (f.o & 2048) && (M.ib(f, I).o |= 513,
                f.o &= -2049);
            return b
        },
        za: function() {
            var a = this.ma(this.tc());
            return a.j - a.c
        },
        Aa: function() {
            var a = this.ma(this.tc());
            return a.i - a.b
        },
        Qq: function(a) {
            return a
        },
        Rq: function(a) {
            return a
        },
        ea: function() {
            var a = this.ma(this);
            this.og = (a.j - a.c) / 2;
            this.pg = (a.i - a.b) / 2;
            this.o |= 1
        },
        m: ma
    });
    dc.g = ["330"];
    dc.$ = [of];
    dc.oz = function(a, b, c) {
        function d(b) {
            f.push(a + (10 > b ? "000" : 100 > b ? "00" : "0") + b)
        }
        var f = []
          , e = b;
        if (b > c)
            for (; e >= c; )
                d(e--);
        else
            for (; e <= c; )
                d(e++);
        return f
    }
    ;
    dc.jG = function(a, b) {
        for (var c = [], d = 0, f = b.length; d < f; ) {
            var e = d++;
            c.push(new we(b[e],.016666666666666666))
        }
        return new rf(a,c)
    }
    ;
    dc.prototype = {
        iA: function() {
            return this.ip ? this.Bf.Xc : 0
        },
        s: function() {
            null != this.Bf && (this.Bf.s(),
            this.Bf = null);
            this.D = this.uw = null
        },
        play: function(a, b, c) {
            null == b && (b = !0);
            return this.QJ(a, 0, -1, b, c)
        },
        QJ: function(a, b, c, d, f) {
            null == d && (d = !0);
            this.ip = !0;
            var e = this.TG();
            -2 == this.$p ? (e.repeat = Fa.Nm,
            e.Uf = -1) : -1 == this.$p ? (e.repeat = Fa.$h,
            e.Uf = -1) : (e.repeat = Fa.ag,
            e.Uf = this.$p);
            e.play(a, b, c, d ? 0 : this.lB);
            this.length = e.Mf - e.Sd;
            this.uw = f;
            return this
        },
        wm: function(a) {
            this.$p = a;
            return this
        },
        TG: function() {
            if (null == this.Bf || 0 > this.Bf.type) {
                var a = this.D.node
                  , b = a.BG(8);
                null == b && (b = new xc,
                a.Uy(b));
                b.Od = this;
                this.Bf = b
            }
            return this.Bf
        },
        rJ: function(a, b, c) {
            this.lB = c;
            this.D.dc(a)
        },
        qJ: function() {
            null != this.uw && this.uw();
            null != this.Bf && this.Bf.repeat != Fa.$h && (this.ip = !1,
            this.length = -1)
        },
        m: dc
    };
    ta.g = ["331"];
    ta.iK = function(a, b, c, d) {
        null == ta.ti && (ta.ti = new pc);
        if (!ta.ti.G.hasOwnProperty(a)) {
            var f = ta.ti
              , e = new vc(16);
            f.G[a] = e
        }
        a = ta.ti.G[a];
        e = C.kf(c, 0) << 16 | C.kf(b, 0);
        a.f == a.B && a.T();
        b = a.a;
        f = a.Xa;
        c = 3 * a.ka;
        a.ka = a.Ba[a.ka];
        b[c] = e;
        b[c + 1] = d;
        e = 73856093 * e & a.ab;
        d = f[e];
        if (-1 == d)
            f[e] = c;
        else {
            for (f = b[d + 2]; -1 != f; )
                d = f,
                f = b[f + 2];
            b[d + 2] = c
        }
        a.f++
    }
    ;
    ta.H = ra;
    ta.prototype = x(ra.prototype, {
        s: function() {
            if (null != this.Ia) {
                for (var a = this.Ia.Ja; null != a; ) {
                    var b = a.da;
                    a.s();
                    a = b
                }
                ra.prototype.s.call(this);
                this.md = this.qa = this.jg = this.Yl = this.Ia = null;
                ta.Zg--
            }
        },
        ia: function(a) {
            this.ub = this.ub || this.qa.text != a;
            this.qa.text = a;
            return this
        },
        EN: function() {
            return this.qa.size
        },
        De: function(a) {
            this.ub = this.ub || this.qa.size != a;
            this.qa.size = a;
            return this
        },
        Xd: function(a, b) {
            this.ub = (this.ub = this.ub || this.qa.width != a) || this.qa.height != b;
            this.qa.width = a;
            this.qa.height = b;
            return this
        },
        yk: function() {
            this.ub = this.ub || -1 != this.qa.align;
            this.qa.align = -1;
            return this
        },
        xk: function() {
            this.ub = this.ub || 0 != this.qa.align;
            this.qa.align = 0;
            return this
        },
        Ih: function() {
            this.ub = this.ub || 0 == this.qa.multiline;
            this.qa.multiline = !0;
            this.ub && (this.Mi = new Zc);
            return this
        },
        PC: function(a) {
            this.ub = this.ub || this.qa.Kv != a;
            this.qa.Kv = a;
            return this
        },
        RC: function(a) {
            null != ta.ti && ta.ti.G.hasOwnProperty(a) && (this.ub = this.ub || this.qa.op != a,
            this.qa.op = a);
            return this
        },
        Pq: function() {
            var a = this.jg.pm;
            this.ub = this.ub || this.qa.size != a;
            this.qa.size = a;
            return this
        },
        Dd: function(a) {
            this.Yl = La.ml(a);
            this.jg = this.Yl.Pg.Fm;
            this.gq = !0
        },
        lo: function(a, b) {
            this.qa.size = b - a >> 1;
            this.Mi.ed(this.jg, this.qa, this.md);
            var c = this.qa.size;
            if (this.md.overflow) {
                if (c < a)
                    return;
                c = this.zu(a, c - 1)
            } else {
                if (c > b)
                    return;
                c = this.zu(c, b + 1)
            }
            this.qa.size = c < a ? a : c > b ? b : c;
            this.ub = !0;
            this.Mi.ed(this.jg, this.qa, this.md)
        },
        Ee: function(a) {
            null == a && (a = 4);
            this.Mi.ed(this.jg, this.qa, this.md);
            if (this.md.overflow) {
                var b = this.qa.size;
                b < a || (this.qa.size = this.zu(a, b - 1),
                this.ub = !0,
                this.Mi.ed(this.jg, this.qa, this.md))
            }
        },
        ma: function(a) {
            this.Yc();
            var b = this.md.sd;
            b = new E(b.c,b.b,b.j,b.i);
            if (b.c > b.j || b.b > b.i)
                return b.c = 0,
                b.b = 0,
                b.j = 0,
                b.i = 0,
                b;
            if (a == this)
                return b;
            0 == (this.o & 8192) && (Ca.Ph(this),
            null != a && 0 == Ca.Gv(this, a) && Ca.Ph(a));
            if (null == a)
                for (a = this.node; null != a.parent; )
                    a = a.parent;
            else
                a = a.node;
            return pb.xL(this.node, a, b)
        },
        yb: function(a, b, c) {
            this.Yc();
            if (!this.md.overflow) {
                var d = this.md.sd;
                d.c > d.j || d.b > d.i || ra.prototype.yb.call(this, a, b, c)
            }
        },
        xc: function(a) {
            ra.prototype.xc.call(this, a);
            if (this.cw) {
                for (var b = 0, c = this.Ia.Ja, d; null != c; ) {
                    if (0 < (c.o & 1))
                        if (d = c,
                        d.$o += a,
                        10 < d.$o) {
                            d = c.da;
                            this.Ia.removeChild(c);
                            c.s();
                            c = d;
                            continue
                        } else
                            ++b;
                    c = c.da
                }
                this.cw = 0 < b
            }
        },
        Yc: function() {
            ra.prototype.Yc.call(this);
            if (null == this.Yl || null == this.qa.text || !this.ub && !this.gq)
                return this;
            this.ub = !1;
            if (this.gq) {
                this.gq = !1;
                for (var a = this.Ia.Ja, b; null != a; )
                    b = a.da,
                    this.Ia.removeChild(a),
                    a.s(),
                    a = b
            }
            this.Mi.ed(this.jg, this.qa, this.md);
            b = this.md.ee;
            var c = this.md.Le;
            a = this.Ia.Ja;
            for (var d = 0, f, e, h, k, l, m, r, q = 0, p = b.f; q < p; )
                l = q++,
                e = b.a[l],
                f = l << 2,
                h = c.a[f],
                k = c.a[f + 1],
                l = c.a[f + 2],
                m = c.a[f + 3],
                r = String.fromCharCode(e),
                null != a ? (f = a,
                f.name = r,
                f.Dx(Za.Lk),
                this.Ia.DK(f, d++),
                a = a.da) : (f = new se(r),
                r = (new ud).Dd(this.Yl, this.Yl.Pg),
                f.gc = r,
                this.Ia.Xk(f, d++)),
                r = f.local,
                r.R.x = h,
                r.R.y = k,
                r.u &= -2,
                r.u |= 32,
                h = f.local,
                h.K.x = l,
                h.K.y = m,
                h.u &= -14,
                h.u |= 32,
                r = f.gc,
                r.XC(e);
            this.Ia.o |= 8;
            for (b = 0; null != a; )
                100 > b++ ? (this.cw = !0,
                f = a,
                f.$o = 0,
                a.Dx(Za.Kk),
                a = a.da) : (c = a.da,
                this.Ia.removeChild(a),
                a.s(),
                a = c);
            return this
        },
        ea: function() {
            var a = this.ma(this);
            a.c > a.j || a.b > a.i ? this.Ak(this.$C(0)) : (this.Ak(a.c + .5 * (a.j - a.c)),
            this.$C(a.b + .5 * (a.i - a.b)))
        },
        Oa: function() {
            var a = this.ma(this);
            a.c > a.j || a.b > a.i ? this.Dg(this.Ex(0)) : (this.Dg(a.c + (a.j - a.c) / 2),
            this.Ex(a.b + (a.i - a.b) / 2))
        },
        za: function() {
            var a = this.ma(this.tc());
            return a.j - a.c
        },
        Aa: function() {
            var a = this.ma(this.tc());
            return a.i - a.b
        },
        Qq: function() {
            throw 0;
        },
        Rq: function() {
            throw 0;
        },
        zu: function(a, b) {
            for (var c = a, d = -1, f = c + (b - c >> 1); this.qa.size = f,
            this.Mi.ed(this.jg, this.qa, this.md),
            this.md.overflow ? b = f : c = d = f,
            f = c + (b - c >> 1),
            f != c; )
                ;
            return 0 > d ? a : d
        },
        m: ta
    });
    se.g = ["332"];
    se.H = Ab;
    se.prototype = x(Ab.prototype, {
        m: se
    });
    re.g = ["333"];
    re.prototype = {
        m: re
    };
    ff.g = ["334"];
    ff.prototype = {
        m: ff
    };
    ef.g = ["335"];
    ef.prototype = {
        m: ef
    };
    qe.g = ["336"];
    qe.$ = [re];
    qe.prototype = {
        ed: function(a, b, c) {
            c.overflow = !1;
            var d = c.sd;
            d.c = d.b = Infinity;
            d.j = d.i = -Infinity;
            var f = b.text
              , e = f.length;
            if (0 != e) {
                var h = c.ee;
                h.od(e);
                h.clear();
                var k = c.Le;
                k.od(e);
                k.clear();
                var l = a.Cu
                  , m = this.lI;
                m.clear();
                m.od(e);
                for (var r = 0; r < e; ) {
                    var q = r++;
                    q = C.kf(f, q);
                    m.a[m.f++] = q
                }
                if (-1 < b.op && (f = ta.ti.G[b.op],
                null != f)) {
                    e = 0;
                    r = m.f - 1;
                    for (var p; e < r; ) {
                        q = m.a[e];
                        p = m.a[e + 1];
                        var t = p << 16 | q
                          , w = f.Xa[73856093 * t & f.ab];
                        if (-1 == w)
                            t = !1;
                        else {
                            var v = f.a;
                            if (v[w] == t)
                                t = !0;
                            else {
                                var x = !1;
                                for (w = v[w + 2]; -1 != w; ) {
                                    if (v[w] == t) {
                                        x = !0;
                                        break
                                    }
                                    w = v[w + 2]
                                }
                                t = x
                            }
                        }
                        if (t) {
                            q |= p << 16;
                            p = f.Xa[73856093 * q & f.ab];
                            if (-1 == p)
                                q = -2147483648;
                            else if (t = f.a,
                            t[p] == q)
                                q = t[p + 1];
                            else {
                                w = -2147483648;
                                for (p = t[p + 2]; -1 != p; ) {
                                    if (t[p] == q) {
                                        w = t[p + 1];
                                        break
                                    }
                                    p = t[p + 2]
                                }
                                q = w
                            }
                            m.a[e] = q;
                            m.uC(e + 1);
                            --r
                        }
                        ++e
                    }
                }
                f = this.rp;
                f.clear();
                f.od(m.f);
                e = 0;
                for (r = m.f; e < r; ) {
                    q = e++;
                    q = m.a[q];
                    t = l.Fa;
                    p = t.Xa[73856093 * q & t.ab];
                    if (-1 == p)
                        p = !1;
                    else if (t = t.a,
                    t[p] == q)
                        p = !0;
                    else {
                        w = !1;
                        for (p = t[p + 2]; -1 != p; ) {
                            if (t[p] == q) {
                                w = !0;
                                break
                            }
                            p = t[p + 2]
                        }
                        p = w
                    }
                    if (p) {
                        t = l.Fa;
                        p = t.Xa[73856093 * q & t.ab];
                        if (-1 == p)
                            q = -2147483648;
                        else if (t = t.a,
                        t[p] == q)
                            q = t[p + 1];
                        else {
                            w = -2147483648;
                            for (p = t[p + 2]; -1 != p; ) {
                                if (t[p] == q) {
                                    w = t[p + 1];
                                    break
                                }
                                p = t[p + 2]
                            }
                            q = w
                        }
                        q = -2147483648 == q ? null : l.wh[q];
                        f.a[f.f++] = q
                    }
                }
                if (!f.vf())
                    if (m = b.width,
                    e = b.Oj,
                    l = b.align,
                    r = a.Oj,
                    q = b.size / a.pm,
                    p = b.lD * q,
                    1 > b.height / (a.lineHeight * q))
                        c.overflow = !0;
                    else {
                        w = f.a[0];
                        t = -(w.offsetX * q);
                        a = a.padding;
                        v = a[0] * q;
                        x = a[1] * q;
                        var ja = a[2] * q
                          , y = a[3] * q
                          , A = 0;
                        a = f.f;
                        for (var z = 0, B, Ra = 0; A < a; ) {
                            w = f.a[A++];
                            var D = t + w.offsetX * q;
                            var E = w.offsetY * q;
                            var G = w.W * q;
                            var H = w.G * q;
                            B = D + G - x;
                            if (e) {
                                z |= w.code << 16;
                                Ra = r.Xa[73856093 * z & r.ab];
                                if (-1 == Ra)
                                    Ra = -2147483648;
                                else {
                                    var F = r.a;
                                    if (F[Ra] == z)
                                        Ra = F[Ra + 1];
                                    else {
                                        var I = -2147483648;
                                        for (Ra = F[Ra + 2]; -1 != Ra; ) {
                                            if (F[Ra] == z) {
                                                I = F[Ra + 1];
                                                break
                                            }
                                            Ra = F[Ra + 2]
                                        }
                                        Ra = I
                                    }
                                }
                                -2147483648 == Ra && (Ra = 0);
                                Ra *= q;
                                z = w.code;
                                B += Ra
                            }
                            if (B > m) {
                                c.overflow = !0;
                                return
                            }
                            D += Ra;
                            h.a[h.f++] = w.code;
                            k.a[k.f++] = D;
                            k.a[k.f++] = E;
                            k.a[k.f++] = G;
                            k.a[k.f++] = H;
                            32 < w.code && (B = D + y,
                            F = E + v,
                            B < d.c && (d.c = B),
                            B > d.j && (d.j = B),
                            F < d.b && (d.b = F),
                            F > d.i && (d.i = F),
                            D = D + G - x,
                            E = E + H - ja,
                            D < d.c && (d.c = D),
                            D > d.j && (d.j = D),
                            E < d.b && (d.b = E),
                            E > d.i && (d.i = E));
                            t = 0 < b.cz ? t + (b.cz * q + Ra + p) : t + (w.qu * q + Ra + p)
                        }
                        if (-1 != l) {
                            b = m - d.j;
                            0 == l && (b /= 2);
                            for (h = 0; h < a; )
                                c = h++ << 2,
                                k.a[c] += b;
                            k = d.c + b;
                            b = d.j - d.c;
                            d.c = k;
                            d.j = k + b
                        }
                    }
            }
        },
        m: qe
    };
    Zc.g = ["337"];
    Zc.$ = [re];
    Zc.prototype = {
        ed: function(a, b, c) {
            this.Qv = a;
            this.qa = b;
            this.dk = c;
            c.overflow = !1;
            var d = c.sd;
            d.c = d.b = Infinity;
            d.j = d.i = -Infinity;
            var f = b.text
              , e = f.length;
            if (0 != e) {
                c.ee.od(e);
                c.ee.clear();
                c.Le.od(4 * e);
                c.Le.clear();
                var h = !1
                  , k = a.Cu;
                d = this.rp;
                d.clear();
                d.od(e);
                for (var l = 0; l < e; ) {
                    var m = l++;
                    m = C.kf(f, m);
                    if (10 == m)
                        d.a[d.f++] = null;
                    else {
                        var r = k.Fa
                          , q = r.Xa[73856093 * m & r.ab];
                        if (-1 == q)
                            q = !1;
                        else if (r = r.a,
                        r[q] == m)
                            q = !0;
                        else {
                            var p = !1;
                            for (q = r[q + 2]; -1 != q; ) {
                                if (r[q] == m) {
                                    p = !0;
                                    break
                                }
                                q = r[q + 2]
                            }
                            q = p
                        }
                        if (q) {
                            r = k.Fa;
                            q = r.Xa[73856093 * m & r.ab];
                            if (-1 == q)
                                m = -2147483648;
                            else if (r = r.a,
                            r[q] == m)
                                m = r[q + 1];
                            else {
                                p = -2147483648;
                                for (q = r[q + 2]; -1 != q; ) {
                                    if (r[q] == m) {
                                        p = r[q + 1];
                                        break
                                    }
                                    q = r[q + 2]
                                }
                                m = p
                            }
                            m = -2147483648 == m ? null : k.wh[m];
                            d.a[d.f++] = m
                        } else
                            h = !0
                    }
                }
                if (h) {
                    e = "";
                    for (h = d.iterator(); h.ga(); )
                        f = h.next(),
                        null != f && (e += String.fromCharCode(f.code));
                    f = e
                }
                e = b.size / a.pm;
                a = (a.lineHeight + b.Kv) * e;
                h = b.height / a | 0;
                if (0 == h)
                    c.overflow = !0;
                else {
                    this.GF(f);
                    var t = 0;
                    m = 0;
                    q = 1;
                    p = r = 0;
                    var w = !0
                      , v = !1
                      , x = this.MI;
                    f = this.NI;
                    var ja = this.KA;
                    k = 0;
                    l = ja.size;
                    f.c = f.b = Infinity;
                    for (f.j = f.i = -Infinity; k < l && !v; ) {
                        var y = ja.a[k];
                        var z = r;
                        r = y.position;
                        w && (w = !1,
                        t = -d.a[z].offsetX * e);
                        var A = c.ee.f;
                        var B = this.write(t, m, z, r, x);
                        if (v = Infinity == B) {
                            c.ee.trim(A);
                            for (c.Le.trim(4 * A); r > z && 32 >= d.a[r - 1].code; )
                                --r;
                            A = c.ee.f;
                            this.write(t, m, z, r, x);
                            if (v = Infinity == B) {
                                c.ee.trim(A);
                                c.Le.trim(4 * A);
                                r = z;
                                t = c.ee.f - 1;
                                this.ru(b.align, p, t, f);
                                p = t;
                                t = c.sd;
                                f.c < t.c && (t.c = f.c);
                                f.b < t.b && (t.b = f.b);
                                f.j > t.j && (t.j = f.j);
                                f.i > t.i && (t.i = f.i);
                                f.c = f.b = Infinity;
                                f.j = f.i = -Infinity;
                                t = 0;
                                m += a;
                                ++q;
                                w = !0;
                                v = q > h;
                                continue
                            }
                        }
                        x.c < f.c && (f.c = x.c);
                        x.b < f.b && (f.b = x.b);
                        x.j > f.j && (f.j = x.j);
                        x.i > f.i && (f.i = x.i);
                        ++k;
                        y.required ? (t = c.ee.f - 1,
                        this.ru(b.align, p, t, f),
                        p = t,
                        t = c.sd,
                        f.c < t.c && (t.c = f.c),
                        f.b < t.b && (t.b = f.b),
                        f.j > t.j && (t.j = f.j),
                        f.i > t.i && (t.i = f.i),
                        f.c = f.b = Infinity,
                        f.j = f.i = -Infinity,
                        t = 0,
                        m += a,
                        ++q,
                        w = !0,
                        v = q > h) : t = B
                    }
                    t = c.ee.f - 1;
                    f.c > f.j || f.b > f.i || this.ru(b.align, p, t, f);
                    b = c.sd;
                    f.c < b.c && (b.c = f.c);
                    f.b < b.b && (b.b = f.b);
                    f.j > b.j && (b.j = f.j);
                    f.i > b.i && (b.i = f.i);
                    c.overflow = k < l
                }
            }
        },
        GF: function(a) {
            var b = Zc.yy
              , c = this.KA;
            b.ia(a);
            for (var d = c.size = 0, f; ; ) {
                f = b.aJ();
                if (null == f)
                    break;
                d = a.substring(d, f.position);
                var e = c.a[c.size];
                null == e && (e = c.a[c.size] = {
                    Qa: null,
                    position: -1,
                    required: !1
                });
                e.Qa = d;
                e.position = f.position;
                e.required = f.required;
                c.size++;
                d = f.position
            }
        },
        write: function(a, b, c, d, f) {
            var e = this.qa.size / this.Qv.pm
              , h = this.rp;
            var k = this.Qv.padding;
            var l = k[0] * e
              , m = k[1] * e
              , r = k[2] * e
              , q = k[3] * e;
            f.c = f.b = Infinity;
            f.j = f.i = -Infinity;
            for (var p, t = 0, w = this.qa.width, v = 0, x = this.Qv.Oj, ja = this.qa.Oj, y = this.qa.lD; c < d; )
                if (k = h.a[c++],
                null != k) {
                    var z = a + k.offsetX * e;
                    var A = b + k.offsetY * e;
                    var B = k.W * e;
                    var D = k.G * e;
                    p = z + B - m;
                    if (ja) {
                        t = k.code << 16 | v;
                        v = x.Xa[73856093 * t & x.ab];
                        if (-1 == v)
                            t = -2147483648;
                        else {
                            var C = x.a;
                            if (C[v] == t)
                                t = C[v + 1];
                            else {
                                var E = -2147483648;
                                for (v = C[v + 2]; -1 != v; ) {
                                    if (C[v] == t) {
                                        E = C[v + 1];
                                        break
                                    }
                                    v = C[v + 2]
                                }
                                t = E
                            }
                        }
                        -2147483648 == t && (t = 0);
                        t *= e;
                        v = k.code;
                        p += t
                    }
                    if (p > w) {
                        a = Infinity;
                        break
                    }
                    z += t;
                    p = this.dk.ee;
                    p.a[p.f++] = k.code;
                    p = this.dk.Le;
                    p.a[p.f++] = z;
                    p = this.dk.Le;
                    p.a[p.f++] = A;
                    p = this.dk.Le;
                    p.a[p.f++] = B;
                    p = this.dk.Le;
                    p.a[p.f++] = D;
                    32 < k.code && (p = z + q,
                    C = A + l,
                    p < f.c && (f.c = p),
                    p > f.j && (f.j = p),
                    C < f.b && (f.b = C),
                    C > f.i && (f.i = C),
                    z = z + B - m,
                    A = A + D - r,
                    z < f.c && (f.c = z),
                    z > f.j && (f.j = z),
                    A < f.b && (f.b = A),
                    A > f.i && (f.i = A));
                    a += k.qu * e + t + y
                }
            return a
        },
        ru: function(a, b, c, d) {
            if (-1 != a) {
                var f = this.qa.width - d.j;
                0 == a && (f /= 2);
                f |= 0;
                a = d.c + f;
                var e = d.j - d.c;
                d.c = a;
                d.j = a + e;
                for (a = this.dk.Le; b <= c; )
                    d = b << 2,
                    a.a[d] += f,
                    ++b
            }
        },
        m: Zc
    };
    df.g = ["338"];
    df.prototype = {
        m: df
    };
    Ca.g = ["339"];
    Ca.Cj = function() {
        Ca.Ix.clear(!0)
    }
    ;
    Ca.Yc = function(a) {
        var b = Ca.Ix
          , c = null
          , d = null;
        b.clear();
        b.V == b.B && b.T();
        for (b.a[b.V++] = a; 0 < b.V; ) {
            a = b.a[--b.V];
            0 < (a.o & 256) && (c = a,
            d = c.Ja);
            var f = a.client;
            if (null != f)
                switch (f.type) {
                case 3:
                case 7:
                    f.Yc();
                    break;
                case 4:
                    c.Ja = null,
                    f.Yc(),
                    c.Ja = d
                }
            if (0 < (a.o & 256))
                for (; null != d; )
                    b.V == b.B && b.T(),
                    b.a[b.V++] = d,
                    d = d.da
        }
    }
    ;
    Ca.gl = function(a, b) {
        null == b && (b = !1);
        if (4 == a.type)
            for (var c = M.ib(a, ma).Ia.Ja, d; null != c; )
                d = c.da,
                Ca.gl(c.client, !0),
                c = d;
        b && a.s()
    }
    ;
    Ca.Gv = function(a, b) {
        for (a = a.tc(); null != a; ) {
            if (a == b)
                return !0;
            a = a.tc()
        }
        return !1
    }
    ;
    Ca.Ph = function(a, b) {
        var c;
        null == c && (c = !1);
        null == b && (b = !1);
        var d = Ca.Ix
          , f = a.node;
        for (d.clear(); null != f; ) {
            if (null != f.client) {
                var e = f.client;
                0 < (e.o & 1) && e.Tx()
            }
            d.V == d.B && d.T();
            d.a[d.V++] = f;
            f = f.parent
        }
        if (b)
            a.Yc(),
            a.node.gr(!0, c);
        else
            for (; 0 < d.V; )
                f = d.a[--d.V],
                0 < (f.o & 8) && f.hr(c, !1)
    }
    ;
    var da = {
        pb: !0,
        ob: "X Y ScaleX ScaleY UniformScale Rotation Alpha".split(" "),
        Vk: ["X", 0]
    };
    da.Vk.toString = h;
    da.Vk.l = da;
    da.oj = ["Y", 1];
    da.oj.toString = h;
    da.oj.l = da;
    da.df = ["ScaleX", 2];
    da.df.toString = h;
    da.df.l = da;
    da.ef = ["ScaleY", 3];
    da.ef.toString = h;
    da.ef.l = da;
    da.Zn = ["UniformScale", 4];
    da.Zn.toString = h;
    da.Zn.l = da;
    da.mn = ["Rotation", 5];
    da.mn.toString = h;
    da.mn.l = da;
    da.Ge = ["Alpha", 6];
    da.Ge.toString = h;
    da.Ge.l = da;
    da.Gb = [da.Vk, da.oj, da.df, da.ef, da.Zn, da.mn, da.Ge];
    pe.g = ["340"];
    pe.$ = [mf];
    pe.prototype = {
        s: function() {
            this.lL();
            this.D = null
        },
        y: function(a, b, c, d, f) {
            this.Yf(da.oj, a, b, c, d, f);
            return this
        },
        position: function(a, b, c, d, f, e) {
            if (null != e) {
                var g = 0
                  , h = function() {
                    2 == (g += 1) && e()
                };
                this.Yf(da.Vk, a, c, d, f, h);
                this.Yf(da.oj, b, c, d, f, h)
            } else
                this.Yf(da.Vk, a, c, d, f, e),
                this.Yf(da.oj, b, c, d, f, e);
            return this
        },
        Gk: function(a, b, c, d, f) {
            this.Yf(da.Zn, a, b, c, d, f);
            return this
        },
        rotation: function(a, b, c, d, f) {
            this.Yf(da.mn, a, b, c, d, f);
            return this
        },
        alpha: function(a, b, c, d, f) {
            this.Yf(da.Ge, a, b, c, d, f);
            return this
        },
        lL: function() {
            for (var a = this.D.node.controllers; null != a; ) {
                var b = a.next;
                10 == a.type && (a.stop(),
                a.Od = null);
                a = b
            }
            this.ik = 0
        },
        Yf: function(a, b, c, d, f, e) {
            switch (a[1]) {
            case 0:
                var g = this.D.Ea;
                break;
            case 1:
                g = this.D.Ha;
                break;
            case 2:
                g = this.D.Na;
                break;
            case 3:
                g = this.D.Uc;
                break;
            case 4:
                g = this.D.Na;
                break;
            case 5:
                g = this.D.Tc;
                break;
            case 6:
                g = this.D.xf
            }
            var h = a[1];
            a = this.gH(a, c);
            a.Yf(h, g, b, c, null == d ? Z.fI() : d);
            a.repeat = null == f ? Fa.ag : f;
            a.Of = e;
            this.ik |= 1 << h;
            return a
        },
        gH: function(a) {
            var b = a[1]
              , c = this.D.node.controllers;
            if (null != c)
                if (0 < (this.ik & 1 << b))
                    for (; null != c; ) {
                        if (10 == c.type && (a = c,
                        a.key == b))
                            return a.Od = this,
                            a;
                        c = c.next
                    }
                else
                    for (; null != c; ) {
                        if (10 == c.type && !c.ke)
                            return a = c,
                            a.Od = this,
                            a;
                        c = c.next
                    }
            a = new ve;
            a.Od = this;
            this.D.node.Uy(a);
            return a
        },
        iC: function(a, b) {
            switch (a) {
            case 0:
                this.D.P(b);
                break;
            case 1:
                this.D.S(b);
                break;
            case 2:
                this.D.Qq(b);
                break;
            case 3:
                this.D.Rq(b);
                break;
            case 4:
                this.D.N(b);
                break;
            case 5:
                this.D.Ed(b);
                break;
            case 6:
                this.D.sa(b)
            }
        },
        DJ: function(a) {
            this.ik &= ~(1 << a)
        },
        m: pe
    };
    rd.g = ["341"];
    rd.$ = [Qc];
    rd.prototype = {
        HK: function(a, b) {
            var c = this;
            this.pl = a;
            var d = this.xb;
            d.x = a.width;
            d.y = a.height;
            a = this.xb.x;
            0 < a && 0 == (a & a - 1) ? (a = this.xb.y,
            a = 0 < a && 0 == (a & a - 1)) : a = !1;
            this.uA = a;
            if (b && !this.uA && !this.hp) {
                b = this.xb.x - 1;
                b |= b >> 1;
                b |= b >> 2;
                b |= b >> 4;
                b |= b >> 8;
                a = this.xb.y - 1;
                a |= a >> 1;
                a |= a >> 2;
                a |= a >> 4;
                a |= a >> 8;
                this.Ch = new $a((b | b >> 16) + 1,(a | a >> 16) + 1);
                this.hp = !0;
                this.Iv = !1;
                b = window.document.createElement("canvas");
                b.width = this.Ch.x;
                b.height = this.Ch.y;
                b.getContext("2d", null).drawImage(this.pl, 0, 0);
                var f = window.document.createElement("img");
                f.src = b.toDataURL("image/png");
                f.onload = function() {
                    f.onload = null;
                    return c.Iv = !0
                }
            }
        },
        BK: function(a) {
            this.Pg = new cf(this,a.Qz());
            return this
        },
        s: function() {
            this.hp && !this.QH && (this.pl.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
            this.Pg = this.Ch = this.xb = this.pl = null;
            this.key = -1
        },
        m: rd
    };
    La.g = ["342"];
    La.ml = function(a) {
        return La.Wq.G[a]
    }
    ;
    La.vv = function(a) {
        return La.Wq.G.hasOwnProperty(a)
    }
    ;
    La.jK = function(a, b) {
        La.Wq.G[a] = b;
        La.iD++
    }
    ;
    La.GL = function(a) {
        var b = La.ml(a);
        null != b && (La.Wq.remove(a),
        b.s(),
        La.iD--)
    }
    ;
    cf.g = ["343"];
    cf.prototype = {
        m: cf
    };
    oe.g = ["344"];
    oe.prototype = {
        m: oe
    };
    ne.g = ["345"];
    ne.prototype = {
        m: ne
    };
    qd.g = ["346"];
    qd.prototype = {
        m: qd
    };
    me.g = ["347"];
    me.prototype = {
        m: me
    };
    le.g = ["348"];
    le.$ = [me];
    le.prototype = {
        Qz: function() {
            var a = new ne
              , b = new $e(this.Jw)
              , c = new bf;
            c.pm = b.info.size;
            c.lineHeight = b.Ug.lineHeight;
            c.fi = b.Ug.fi;
            c.gO = b.Ug.xx;
            c.fO = b.Ug.wx;
            c.padding[0] = b.info.padding.er;
            c.padding[1] = b.info.padding.right;
            c.padding[2] = b.info.padding.Me;
            c.padding[3] = b.info.padding.left;
            a.Fm = c;
            for (var d = 0, f = b.po; d < f.length; ) {
                var e = f[d];
                ++d;
                var h = e.id
                  , k = new af;
                k.code = h;
                k.x = e.x;
                k.y = e.y;
                k.offsetX = e.fy;
                k.offsetY = e.gy;
                k.qu = e.dy;
                k.W = e.width;
                k.G = e.height;
                c.Cu.set(k.code, k);
                -1 != h && (e = new qd,
                a.frames.push(e),
                e.id = h,
                e.name = String.fromCharCode(h),
                e.kb.x = k.x,
                e.kb.y = k.y,
                e.kb.W = k.W,
                e.kb.G = k.G,
                e.xb.x = k.W,
                e.xb.y = k.G)
            }
            d = 0;
            for (b = b.mp; d < b.length; ) {
                h = b[d];
                ++d;
                f = c.Oj;
                var l = h.yx << 16 | h.first
                  , m = h.vu;
                f.f == f.B && f.T();
                h = f.a;
                e = f.Xa;
                k = 3 * f.ka;
                f.ka = f.Ba[f.ka];
                h[k] = l;
                h[k + 1] = m;
                m = 73856093 * l & f.ab;
                l = e[m];
                if (-1 == l)
                    e[m] = k;
                else {
                    for (e = h[l + 2]; -1 != e; )
                        l = e,
                        e = h[e + 2];
                    h[l + 2] = k
                }
                f.f++
            }
            return a
        },
        m: le
    };
    af.g = ["349"];
    af.prototype = {
        m: af
    };
    bf.g = ["350"];
    bf.prototype = {
        m: bf
    };
    $e.g = ["351"];
    $e.prototype = {
        GJ: function(a) {
            a = new Wc(a);
            var b = a.ca()
              , c = a.ca()
              , d = a.ca();
            if (66 != b || 77 != c || 70 != d)
                throw 0;
            if (3 != a.ca())
                throw 0;
            a.ca();
            b = a.Vd();
            c = a.bc();
            a.ca();
            a.ca();
            a.Rf();
            a.ca();
            d = a.ca();
            var f = a.ca()
              , e = a.ca()
              , h = a.ca();
            a.ca();
            a.ca();
            a.ca();
            a.px(b - 14);
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    er: d,
                    right: f,
                    Me: e,
                    left: h
                }
            };
            a.ca();
            a.Vd();
            b = a.Rf();
            c = a.Rf();
            d = a.Rf();
            f = a.Rf();
            a.Rf();
            a.ca();
            a.ca();
            a.ca();
            a.ca();
            a.ca();
            this.Ug = {
                lineHeight: b,
                fi: c,
                xx: d,
                wx: f
            };
            a.ca();
            b = a.Vd();
            c = a.mb;
            a.pC(0);
            c = a.mb - c;
            for (b -= c; 0 < b; )
                a.pC(0),
                b -= c;
            a.ca();
            b = 0;
            for (c = a.Vd() / 20 | 0; b < c; ) {
                b++;
                d = a.Vd();
                f = a.Rf();
                e = a.Rf();
                h = a.Rf();
                var k = a.Rf()
                  , l = a.bc()
                  , m = a.bc()
                  , r = a.bc();
                a.ca();
                a.ca();
                this.po.push({
                    id: d,
                    x: f,
                    y: e,
                    width: h,
                    height: k,
                    fy: l,
                    gy: m,
                    dy: r
                })
            }
            if (a.mb != a.Mx)
                for (a.ca(),
                a.Vd(); a.mb < a.Mx; )
                    b = a.Vd(),
                    c = a.Vd(),
                    d = a.bc(),
                    this.mp.push({
                        first: b,
                        yx: c,
                        vu: d
                    })
        },
        IJ: function(a) {
            a = z.parse(a).EG();
            if (a.nodeType != z.Document && a.nodeType != z.Element)
                throw 0;
            var b = pa.Qy(pa.map(eb.resolve(od.resolve(a, "info"), "padding").split(","), function(a) {
                return D.parseInt(a)
            }))
              , c = D.parseInt(eb.resolve(od.resolve(a, "info"), "size"));
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    er: b[0],
                    right: b[1],
                    Me: b[2],
                    left: b[3]
                }
            };
            this.Ug = {
                lineHeight: D.parseInt(eb.resolve(od.resolve(a, "common"), "lineHeight")),
                fi: D.parseInt(eb.resolve(od.resolve(a, "common"), "base")),
                xx: D.parseInt(eb.resolve(od.resolve(a, "common"), "scaleW")),
                wx: D.parseInt(eb.resolve(od.resolve(a, "common"), "scaleH"))
            };
            b = 0;
            for (c = Hg.resolve(od.resolve(a, "chars"), "char"); b < c.length; ) {
                var d = c[b];
                ++b;
                this.po.push({
                    id: D.parseInt(eb.resolve(d, "id")),
                    x: D.parseInt(eb.resolve(d, "x")),
                    y: D.parseInt(eb.resolve(d, "y")),
                    width: D.parseInt(eb.resolve(d, "width")),
                    height: D.parseInt(eb.resolve(d, "height")),
                    fy: D.parseInt(eb.resolve(d, "xoffset")),
                    gy: D.parseInt(eb.resolve(d, "yoffset")),
                    dy: D.parseInt(eb.resolve(d, "xadvance"))
                })
            }
            if (Og.resolve(a, "kernings"))
                for (b = 0,
                a = Hg.resolve(od.resolve(a, "kernings"), "kerning"); b < a.length; )
                    c = a[b],
                    ++b,
                    this.mp.push({
                        first: D.parseInt(eb.resolve(c, "first")),
                        yx: D.parseInt(eb.resolve(c, "second")),
                        vu: D.parseInt(eb.resolve(c, "amount"))
                    })
        },
        HJ: function(a) {
            a = (new V("\r\n","g")).match(a) ? a.split("\r\n") : a.split("\n");
            var b = 0
              , c = new V('^info face=".*?" size=(-?\\d+).*?padding="(\\d+,\\d+,\\d+,\\d+)"',"");
            c.match(a[b++]);
            var d = pa.Qy(pa.map(c.eb(2).split(","), function(a) {
                return D.parseInt(a)
            }));
            c = D.parseInt(c.eb(1));
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    er: d[0],
                    right: d[1],
                    Me: d[2],
                    left: d[3]
                }
            };
            d = new V("^common lineHeight=(\\d+) base=(\\d+) scaleW=(\\d+) scaleH=(\\d+)","");
            d.match(a[b++]);
            this.Ug = {
                lineHeight: D.parseInt(d.eb(1)),
                fi: D.parseInt(d.eb(2)),
                xx: D.parseInt(d.eb(3)),
                wx: D.parseInt(d.eb(4))
            };
            d = new V("chars count=(\\d+)","");
            c = new V("^char id=(\\d+)\\s+x=(\\d+)\\s+y=(\\d+)\\s+width=(\\d+)\\s+height=(\\d+)\\s+xoffset=(-?\\d+)\\s+yoffset=(-?\\d+)\\s+xadvance=(\\d+)","");
            for (var f = new V("kernings count=(\\d+)",""), e = new V("kerning first=(\\d+)\\s+second=(\\d+)\\s+amount=(-?\\d+)",""), h = 0, k = 0, l = 0, m = 0; b < a.length; ) {
                var r = a[b++];
                0 == k ? d.match(r) && (k = D.parseInt(d.eb(1))) : h < k ? (c.match(r),
                this.po.push({
                    id: D.parseInt(c.eb(1)),
                    x: D.parseInt(c.eb(2)),
                    y: D.parseInt(c.eb(3)),
                    width: D.parseInt(c.eb(4)),
                    height: D.parseInt(c.eb(5)),
                    fy: D.parseInt(c.eb(6)),
                    gy: D.parseInt(c.eb(7)),
                    dy: D.parseInt(c.eb(8))
                }),
                ++h) : 0 == m ? f.match(r) && (m = D.parseInt(f.eb(1))) : l < m && (e.match(r),
                this.mp.push({
                    first: D.parseInt(e.eb(1)),
                    yx: D.parseInt(e.eb(2)),
                    vu: D.parseInt(e.eb(3))
                }),
                ++l)
            }
        },
        m: $e
    };
    zb.g = ["352"];
    zb.$ = [me];
    zb.prototype = {
        Qz: function() {
            var a = new ne
              , b = JSON.parse(this.zI)
              , c = T.fa(b, "meta");
            null != c && (a.scale = T.fa(c, "scale"));
            c = 0;
            b = T.fa(b, "frames");
            for (var d = 0; d < b.length; ) {
                var f = b[d];
                ++d;
                var e = new qd;
                a.frames.push(e);
                e.id = c++;
                e.name = T.fa(f, "filename");
                var h = T.fa(f, "frame");
                e.kb.x = T.fa(h, "x");
                e.kb.y = T.fa(h, "y");
                e.kb.W = T.fa(h, "w");
                e.kb.G = T.fa(h, "h");
                Object.prototype.hasOwnProperty.call(f, "trimmed") ? e.Ox = T.fa(f, "trimmed") : e.Ox = !1;
                Object.prototype.hasOwnProperty.call(f, "sourceSize") ? (h = T.fa(f, "sourceSize"),
                e.xb.x = T.fa(h, "w"),
                e.xb.y = T.fa(h, "h")) : (e.xb.x = e.kb.W,
                e.xb.y = e.kb.G);
                Object.prototype.hasOwnProperty.call(f, "spriteSourceSize") ? (h = T.fa(f, "spriteSourceSize"),
                e.Nh.x = T.fa(h, "x"),
                e.Nh.y = T.fa(h, "y")) : (e.Nh.x = 0,
                e.Nh.y = 0)
            }
            return a
        },
        m: zb
    };
    pd.g = ["353"];
    pd.FL = function(a) {
        function b() {
            var a = c.ca()
              , b = {}
              , d = {};
            b.frame = d;
            d.x = 0 < (a & 1) ? c.ca() : c.bc();
            d.y = 0 < (a & 2) ? c.ca() : c.bc();
            d.w = 0 < (a & 4) ? c.ca() : c.bc();
            d.h = 0 < (a & 8) ? c.ca() : c.bc();
            d = {};
            b.sourceSize = d;
            d.w = 0 < (a & 16) ? c.ca() : c.bc();
            d.h = 0 < (a & 32) ? c.ca() : c.bc();
            d = {};
            b.spriteSourceSize = d;
            d.x = 0 < (a & 64) ? c.ca() : c.bc();
            d.y = 0 < (a & 128) ? c.ca() : c.bc();
            b.trimmed = 1 == c.ca();
            return b
        }
        var c = new Wc(a);
        a = c.ca();
        var d = c.ca()
          , f = c.ca();
        if ("TPJ" != String.fromCharCode(a) + String.fromCharCode(d) + String.fromCharCode(f))
            throw 0;
        a = [];
        f = {};
        d = {};
        f.size = d;
        d.w = c.bc();
        d.h = c.bc();
        f.scale = c.bK();
        d = {};
        d.frames = a;
        d.meta = f;
        var e = c.bc();
        for (f = 0; f < e; ) {
            f++;
            var h = c.bc();
            h = c.px(h);
            var k = b();
            k.filename = h;
            a.push(k)
        }
        e = c.bc();
        for (f = 0; f < e; ) {
            f++;
            var l = c.bc();
            h = c.bc();
            h = c.px(h);
            k = 0;
            for (var m = l; k < m; ) {
                var r = k++
                  , q = b();
                l = "" + r;
                1E3 > r && (l = "0" + l);
                100 > r && (l = "0" + l);
                10 > r && (l = "0" + l);
                q.filename = h + "/" + l;
                a.push(q)
            }
        }
        return JSON.stringify(d)
    }
    ;
    Ze.g = ["354"];
    Ze.prototype = {
        ia: function(a) {
            this.Ki = a;
            this.reset()
        },
        reset: function() {
            this.si = this.mb = 0;
            this.xg = this.lf = null
        },
        aJ: function() {
            function a() {
                var a = b.PF
                  , c = C.kf(b.Ki, b.mb++)
                  , d = C.kf(b.Ki, b.mb);
                55296 <= c && 56319 >= c && 56320 <= d && 57343 >= d && (b.mb++,
                c = 1024 * (c - 55296) + (d - 56320) + 65536);
                a = a.get(c);
                switch (a) {
                case 32:
                    return 5;
                case 29:
                case 36:
                case 37:
                case 39:
                    return 12;
                default:
                    return a
                }
            }
            var b = this
              , c = Y.FJ
              , d = -1;
            if (null == this.lf) {
                var f = a();
                switch (f) {
                case 31:
                    f = 17;
                    break;
                case 34:
                case 35:
                    f = 30;
                    break;
                case 38:
                    f = 22
                }
                this.lf = f
            }
            for (; this.mb < this.Ki.length; ) {
                this.si = this.mb;
                f = this.xg;
                this.xg = a();
                if (30 == this.lf || 33 == this.lf && 34 != this.xg) {
                    c = this.xg;
                    switch (c) {
                    case 32:
                        c = 5;
                        break;
                    case 29:
                    case 36:
                    case 37:
                    case 39:
                        c = 12
                    }
                    switch (c) {
                    case 31:
                        c = 17;
                        break;
                    case 34:
                    case 35:
                        c = 30;
                        break;
                    case 38:
                        c = 22
                    }
                    this.lf = c;
                    return {
                        position: this.si,
                        required: !0
                    }
                }
                switch (this.xg) {
                case 31:
                    d = 17;
                    break;
                case 33:
                    d = 33;
                    break;
                case 30:
                case 34:
                case 35:
                    d = 30;
                    break;
                case 38:
                    d = this.lf;
                    break;
                default:
                    d = -1
                }
                if (-1 != d) {
                    if (this.lf = d,
                    31 == this.xg)
                        return {
                            position: this.si,
                            required: !1
                        }
                } else {
                    d = !1;
                    switch (c[this.lf][this.xg]) {
                    case 0:
                        d = !0;
                        break;
                    case 1:
                        d = 38 == f;
                        break;
                    case 2:
                        d = 38 == f;
                        if (!d)
                            continue;
                        break;
                    case 3:
                        if (38 != f)
                            continue
                    }
                    this.lf = this.xg;
                    if (d)
                        return {
                            position: this.si,
                            required: !1
                        }
                }
            }
            return this.mb >= this.Ki.length && this.si < this.Ki.length ? (this.si = this.Ki.length,
            {
                position: this.Ki.length,
                required: !1
            }) : null
        },
        m: Ze
    };
    Y.g = ["355"];
    Ba.g = ["356"];
    Ba.Xb = function(a, b) {
        function c(a, b, c) {
            for (; 24 > a.O; )
                a.tag |= a.source.C[a.sourceIndex++] << a.O,
                a.O += 8;
            var d = a.tag & 31;
            a.tag >>>= 5;
            a.O -= 5;
            for (d += 257; 24 > a.O; )
                a.tag |= a.source.C[a.sourceIndex++] << a.O,
                a.O += 8;
            var f = a.tag & 31;
            a.tag >>>= 5;
            a.O -= 5;
            for (f += 1; 24 > a.O; )
                a.tag |= a.source.C[a.sourceIndex++] << a.O,
                a.O += 8;
            var e = a.tag & 15;
            a.tag >>>= 4;
            a.O -= 4;
            e += 4;
            for (var g = 0; 19 > g; ) {
                var h = g++;
                p[h] = 0
            }
            for (g = 0; g < e; ) {
                h = g++;
                for (h = r[h]; 24 > a.O; )
                    a.tag |= a.source.C[a.sourceIndex++] << a.O,
                    a.O += 8;
                var k = a.tag & 7;
                a.tag >>>= 3;
                a.O -= 3;
                p[h] = k
            }
            for (e = 0; 16 > e; )
                g = e++,
                t.table[g] = 0;
            for (e = 0; 19 > e; )
                g = e++,
                t.table[p[g]]++;
            for (g = e = t.table[0] = 0; 16 > g; )
                h = g++,
                q[h] = e,
                e += t.table[h];
            for (e = 0; 19 > e; )
                g = e++,
                0 != p[g] && (t.Fe[q[p[g]]++] = g);
            for (e = 0; e < d + f; ) {
                for (; 24 > a.O; )
                    a.tag |= a.source.C[a.sourceIndex++] << a.O,
                    a.O += 8;
                k = h = g = 0;
                for (var l = a.tag; h = 2 * h + (l & 1),
                l >>>= 1,
                ++k,
                g += t.table[k],
                h -= t.table[k],
                0 <= h; )
                    ;
                a.tag = l;
                a.O -= k;
                g = t.Fe[g + h];
                switch (g) {
                case 16:
                    for (g = p[e - 1]; 24 > a.O; )
                        a.tag |= a.source.C[a.sourceIndex++] << a.O,
                        a.O += 8;
                    h = a.tag & 3;
                    a.tag >>>= 2;
                    a.O -= 2;
                    for (h += 3; 0 < h; )
                        p[e++] = g,
                        --h;
                    break;
                case 17:
                    for (; 24 > a.O; )
                        a.tag |= a.source.C[a.sourceIndex++] << a.O,
                        a.O += 8;
                    g = a.tag & 7;
                    a.tag >>>= 3;
                    a.O -= 3;
                    for (g += 3; 0 < g; )
                        p[e++] = 0,
                        --g;
                    break;
                case 18:
                    for (; 24 > a.O; )
                        a.tag |= a.source.C[a.sourceIndex++] << a.O,
                        a.O += 8;
                    g = a.tag & 127;
                    a.tag >>>= 7;
                    a.O -= 7;
                    for (g += 11; 0 < g; )
                        p[e++] = 0,
                        --g;
                    break;
                default:
                    p[e++] = g
                }
            }
            for (a = 0; 16 > a; )
                e = a++,
                b.table[e] = 0;
            for (a = 0; a < d; )
                e = a++,
                b.table[p[e]]++;
            for (e = a = b.table[0] = 0; 16 > e; )
                g = e++,
                q[g] = a,
                a += b.table[g];
            for (a = 0; a < d; )
                e = a++,
                0 != p[e] && (b.Fe[q[p[e]]++] = e);
            for (b = 0; 16 > b; )
                a = b++,
                c.table[a] = 0;
            for (b = 0; b < f; )
                a = b++,
                c.table[p[d + a]]++;
            for (a = b = c.table[0] = 0; 16 > a; )
                e = a++,
                q[e] = b,
                b += c.table[e];
            for (b = 0; b < f; )
                a = b++,
                0 != p[d + a] && (c.Fe[q[p[d + a]]++] = a)
        }
        function d(a, b, c) {
            for (; ; ) {
                for (; 24 > a.O; )
                    a.tag |= a.source.C[a.sourceIndex++] << a.O,
                    a.O += 8;
                for (var d = 0, f = 0, g = 0, h = a.tag; f = 2 * f + (h & 1),
                h >>>= 1,
                ++g,
                d += b.table[g],
                f -= b.table[g],
                0 <= f; )
                    ;
                a.tag = h;
                a.O -= g;
                f = b.Fe[d + f];
                if (256 == f)
                    return Ba.St;
                if (256 > f)
                    a.Vg.C[a.yj++] = f & 255;
                else {
                    f -= 257;
                    d = e[f];
                    f = k[f];
                    if (0 == d)
                        d = f;
                    else {
                        for (; 24 > a.O; )
                            a.tag |= a.source.C[a.sourceIndex++] << a.O,
                            a.O += 8;
                        g = a.tag & 65535 >>> 16 - d;
                        a.tag >>>= d;
                        a.O -= d;
                        d = g + f
                    }
                    for (; 24 > a.O; )
                        a.tag |= a.source.C[a.sourceIndex++] << a.O,
                        a.O += 8;
                    h = g = f = 0;
                    for (var n = a.tag; g = 2 * g + (n & 1),
                    n >>>= 1,
                    ++h,
                    f += c.table[h],
                    g -= c.table[h],
                    0 <= g; )
                        ;
                    a.tag = n;
                    a.O -= h;
                    h = c.Fe[f + g];
                    f = a.yj;
                    g = l[h];
                    h = m[h];
                    if (0 == g)
                        g = h;
                    else {
                        for (; 24 > a.O; )
                            a.tag |= a.source.C[a.sourceIndex++] << a.O,
                            a.O += 8;
                        n = a.tag & 65535 >>> 16 - g;
                        a.tag >>>= g;
                        a.O -= g;
                        g = n + h
                    }
                    f = g = f - g;
                    for (d = g + d; f < d; )
                        g = f++,
                        g = a.Vg.C[g] & 255,
                        a.Vg.C[a.yj++] = g
                }
            }
        }
        function f(a) {
            for (; 8 < a.O; )
                a.sourceIndex--,
                a.O -= 8;
            var b = a.source.C[a.sourceIndex + 1];
            b = 256 * b + a.source.C[a.sourceIndex];
            var c = a.source.C[a.sourceIndex + 3];
            c = 256 * c + a.source.C[a.sourceIndex + 2];
            if (b != (~c & 65535))
                return Ba.uy;
            for (a.sourceIndex += 4; 0 < b; )
                c = a.source.C[a.sourceIndex++] & 255,
                a.Vg.C[a.yj++] = c,
                --b;
            a.O = 0;
            return Ba.St
        }
        for (var e = [], h = 0; 30 > h; )
            h++,
            e.push(0);
        var k = [];
        for (h = 0; 30 > h; )
            h++,
            k.push(0);
        var l = [];
        for (h = 0; 30 > h; )
            h++,
            l.push(0);
        var m = [];
        for (h = 0; 30 > h; )
            h++,
            m.push(0);
        var r = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
          , q = [];
        for (h = 0; 16 > h; )
            h++,
            q.push(0);
        var p = [];
        for (h = 0; 320 > h; )
            h++,
            p.push(0);
        var t = new Aa;
        h = new Aa;
        var w = new Aa;
        a = new S(a,b);
        for (b = 0; 7 > b; ) {
            var v = b++;
            h.table[v] = 0
        }
        h.table[7] = 24;
        h.table[8] = 152;
        h.table[9] = 112;
        for (b = 0; 24 > b; )
            v = b++,
            h.Fe[v] = 256 + v;
        for (b = 0; 144 > b; )
            v = b++,
            h.Fe[24 + v] = v;
        for (b = 0; 8 > b; )
            v = b++,
            h.Fe[168 + v] = 280 + v;
        for (b = 0; 112 > b; )
            v = b++,
            h.Fe[176 + v] = 144 + v;
        for (b = 0; 5 > b; )
            v = b++,
            w.table[v] = 0;
        w.table[5] = 32;
        for (b = 0; 32 > b; )
            v = b++,
            w.Fe[v] = v;
        for (b = 0; 4 > b; )
            v = b++,
            e[v] = 0;
        for (b = 0; 26 > b; )
            v = b++,
            e[v + 4] = v / 4 | 0;
        b = 3;
        for (v = 0; 30 > v; ) {
            var x = v++;
            k[x] = b;
            b += 1 << e[x]
        }
        for (b = 0; 2 > b; )
            v = b++,
            l[v] = 0;
        for (b = 0; 28 > b; )
            v = b++,
            l[v + 2] = v / 2 | 0;
        b = 1;
        for (v = 0; 30 > v; )
            x = v++,
            m[x] = b,
            b += 1 << l[x];
        e[28] = 0;
        for (k[28] = 258; ; ) {
            0 == a.O-- && (a.tag = a.source.C[a.sourceIndex++],
            a.O = 7);
            b = a.tag & 1;
            for (a.tag >>>= 1; 24 > a.O; )
                a.tag |= a.source.C[a.sourceIndex++] << a.O,
                a.O += 8;
            v = a.tag & 3;
            a.tag >>>= 2;
            a.O -= 2;
            switch (v) {
            case 0:
                v = f(a);
                break;
            case 1:
                v = d(a, h, w);
                break;
            case 2:
                c(a, a.BA, a.Bz);
                v = d(a, a.BA, a.Bz);
                break;
            default:
                v = Ba.uy
            }
            if (v != Ba.St)
                throw 0;
            if (0 != b)
                break
        }
        a.yj < a.Vg.length && (a.Vg = a.Vg.sub(0, a.yj));
        return a.Vg
    }
    ;
    Aa.g = ["357"];
    Aa.prototype = {
        m: Aa
    };
    S.g = ["358"];
    S.prototype = {
        m: S
    };
    ca.g = ["359"];
    ca.prototype = {
        get: function(a) {
            if (0 > a || 1114111 < a)
                return this.rI;
            var b = this.a;
            if (55296 > a || 56319 < a && 65535 >= a) {
                var c = (b[a >> 5] << 2) + (a & 31);
                return b[c]
            }
            return 65535 >= a ? (c = (b[2048 + (a - 55296 >> 5)] << 2) + (a & 31),
            b[c]) : a < this.wI ? (c = b[2080 + (a >> 11)],
            c = b[c + (a >> 5 & 63)],
            b[(c << 2) + (a & 31)]) : b[this.a.length - 4]
        },
        m: ca
    };
    var Ag, Mg = 0;
    String.prototype.m = String;
    String.g = ["360"];
    Array.g = ["361"];
    Date.prototype.m = Date;
    Date.g = ["362"];
    var Sg = {}
      , Qg = {}
      , Rg = Number
      , Pg = Boolean
      , Bg = {}
      , Tg = {}
      , ea = {};
    Object.defineProperty(Fc.prototype, "message", {
        get: function() {
            return String(this.oa)
        }
    });
    var Kb = w.ArrayBuffer || Xb;
    null == Kb.prototype.slice && (Kb.prototype.slice = Xb.cL);
    var zg = w.DataView || Mf
      , ke = w.Uint8Array || Ec.Cy;
    z.Element = 0;
    z.YD = 1;
    z.DD = 2;
    z.Comment = 3;
    z.OD = 4;
    z.ProcessingInstruction = 5;
    z.Document = 6;
    Sb.count = 0;
    Sd.X = new Sd;
    Qa.lF = new Q;
    Qa.Dk = new Ue;
    Qa.ny = 0;
    xg.VD = 8;
    fa.Qk = !1;
    fa.hi = {
        Kc: {
            tN: !1,
            uN: !1,
            hO: "escape",
            vd: 33,
            $N: !0
        },
        bubbles: {
            WN: 7,
            dO: .3,
            Eg: 0,
            VN: 5
        },
        xo: {
            no: {
                XN: !0,
                Nc: .2,
                Lh: 500,
                bO: !1,
                TN: 3.01,
                Sb: 3
            }
        },
        Bu: {
            XI: 85,
            zN: 3,
            yN: -1,
            Fz: 20
        },
        cO: .1
    };
    fa.vy = !1;
    fa.wy = "escape";
    fa.cF = 33;
    fa.dF = !0;
    fa.AD = .3;
    fa.BD = 0;
    fa.QD = !0;
    fa.RD = !1;
    fa.PD = 3.01;
    fa.my = 3;
    fa.Jm = -1;
    Qd.X = new Qd;
    Pd.X = new Pd;
    Rb.TYPE = 1;
    ac.X = new ac;
    ac.TYPE = 3;
    wg.Gu = Array(7);
    v.ENTITY_TYPE = 0;
    v.ENTITY_NAME = "Entity";
    sa.Qk = ua.ah();
    sa.ENTITY_TYPE = 1;
    sa.ENTITY_NAME = "Bubblewoods";
    l.data = "AAAAAAABUAAAAgAB5gAAAwAB4AEABAABPgMABQABAAUABgABJgcABwEBsAkACAIBngwACQMB8A8ACgEFphMACwIBwBcADAMBPhwADQQBICEADgEBZiYADwMBECwAEAIBHjIAEQEBkDgAEgQBZj8AEwMBoEYAFAIFPk4AFQQCQFYAFgICpl4AFwMCcGcAGAICnnAAGQECMHoAGgMCJoQAGwICgI4AHAQCPpkAHQECYKQAHgQF5q8AHwQD0LsAIAIDHsgAIQED0NQAIgQD5uEAIwEDYO8AJAIDPv0AJQQDgAsBJgMDJhoBJwIDMCkBKAMFnjgBKQEEcEgBKgMEplgBKwQEQGkBLAQEPnoBLQIEoIsBLgMEZp0BLwEEkK8BMAIEHsIBMQMEENUBMgQKZugBMwIFIPwBNAEFPhACNQQFwCQCNgEFpjkCNwIF8E4COAQFnmQCOQIFsHoCOgQFJpECOwMFAKgCPAEKPr8CPQQF4NYCPgEF5u4CPwIFUAcDQAMFHiADQQEFUDkDQgMF5lIDQwIF4GwDRAEFPocDRQMFAKIDRgEKJr0DRwIFsNgDSAQFnvQDSQMF8BAESgQFpi0ESwIFwEoETAMFPmgETQEFIIYETgIFZqQETwQFEMMEUAEKHuIEUQIFkAEFUgMFZiEFUwEFoEEFVAIFPmIFVQQFQIMFVgEFpqQFVwQFcMYFWAEFnugFWQMFMAsGWgEKJi4GWwMFgFEGXAIFPnUGXQMFYJkGXgQF5r0GXwMF0OIGYAEFHggHYQQF0C0HYgIF5lMHYwQFYHoHZAMZPqEHZAQKgMgHZAIKJvAHZAEKMBgIZAMKnkAIZAEKcGkIZAQKppIIZAMKQLwIZAEKPuYIZAMKoBAJZAEZZjsJZAIKkGYJZAQKHpIJZAEKEL4JZAIKZuoJZAQKIBcKZAMKPkQKZAEKwHEKZAIKpp8KZAQK8M0KZAEZnvwKZAIKsCsLZAMKJlsLZAEKAIsLZAIKPrsLZAQK4OsLZAEK5hwMZAIKUE4MZAQKHoAMZAEKULIMZAQZ5uQMZAMK4BcNZAQKPksNZAIKAH8NZAQKJrMNZAEKsOcNZAMKnhwOZAQK8FEOZAIKpocOZAMKwL0OZAIZPvQOZAMKICsPZAIKZmIPZAEKEJoPZAIKHtIPZAEKkAoQZAMKZkMQZAQKoHwQZAIKPrYQZAEKQPAQZAMZpioRZAIPcGURZAEPnqARZAIPMNwRZAQPJhgSZAIPgFQSZAQPPpESZAMPYM4SZAQP5gsTZAIP0EkTZAEZHogTZAQP0MYTZAIP5gUUZAEPYEUUZAIPPoUUZAMPgMUUZAQPJgYVZAQPMEcVZAMPnogVZAQPcMoVZAEZpgwWZAMPQE8WZAIPPpIWZAQPoNUWZAEPZhkXZAIPkF0XZAEPHqIXZAIPEOcXZAEPZiwYZAMPIHIYZAIZPrgYZAQPwP4YZAEPpkUZZAIP8IwZZAEPntQZZAIPsBwaZAQPJmUaZAIPAK4aZAMPPvcaZAQP4EAbZAMZ5oobZAEPUNUbZAIPHiAcZAQPUGscZAMP5rYcZAIP4AIdZAQPPk8dZAEPAJwdZAQPJukdZAMPsDYeZAEy";
    l.Gc = 0;
    l.Rd = 0;
    l.Ad = 0;
    l.Op = !1;
    l.ow = !1;
    l.nc = 1;
    l.Jd = 3E3;
    l.le = [-1, -1, -1];
    l.Tl = 0;
    l.am = 0;
    l.$l = 0;
    l.Af = 0;
    tc.WD = 32;
    tc.SD = !0;
    tc.bF = .05;
    R.audio = new tc;
    F.level = 1;
    F.jr = 0;
    F.qo = 3E3;
    F.Jj = 0;
    F.Xe = !0;
    F.bf = !0;
    F.mo = [-1, -1, -1];
    F.br = 0;
    F.ar = 0;
    r.Br = "m1";
    r.Cr = "m2";
    r.dE = "0";
    r.eE = "1";
    r.fE = "2";
    r.gE = "3";
    r.hE = "4";
    r.iE = "5";
    r.jE = "6";
    r.kE = "7";
    r.lE = "8";
    r.mE = "9";
    r.nE = "B";
    r.oE = "C";
    r.pE = "D";
    r.qE = "E";
    r.rE = "F";
    r.sE = "10";
    r.nn = "11";
    r.tE = "12";
    r.uE = "13";
    r.vE = "14";
    r.ry = "15";
    r.wE = "16";
    r.xE = "17";
    r.yE = "18";
    r.zE = "19";
    r.AE = "1A";
    r.BE = "1B";
    r.CE = "1C";
    r.DE = "1D";
    r.EE = "1E";
    r.FE = "1F";
    r.sy = "20";
    r.GE = "22";
    r.HE = "23";
    r.ty = "24";
    r.IE = "25";
    r.JE = "26";
    r.KE = "27";
    r.LE = "28";
    r.ME = "29";
    r.NE = "2A";
    r.OE = "2B";
    r.PE = "2C";
    r.QE = "2D";
    r.RE = "2E";
    r.SE = "2F";
    r.TE = "30";
    r.UE = "31";
    r.VE = "32";
    r.on = "34";
    r.WE = "37";
    r.XE = "0 1 2 3 4 5 6 7 8 9 A B C D E F 10 11 12 13 14 15 16 17 18 19 1A 1B 1C 1D 1E 1F 20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F 30 31 32 33 34 35 36 37".split(" ");
    r.YE = [0, 2118, 2217, 4843, 4942, 5691, 5790, 5896, 5995, 6101, 6200, 6504, 6603, 6784, 6883, 7073, 7172, 8626, 8725, 9916, 10015, 10471, 10570, 10740, 10839, 11121, 11220, 11540, 11639, 11794, 11893, 13394, 13493, 15678, 15777, 18045, 18144, 18796, 18895, 20259, 20358, 21911, 22010, 23605, 23704, 24901, 25E3, 26191, 26290, 28520, 28619, 30811, 30910, 33065, 33164, 35284, 35383, 37471, 37570, 39627, 39726, 40524, 40623, 41697, 41796, 42273, 42372, 44320, 44419, 47226, 47325, 49482, 49581, 51345, 51444, 54423, 54522, 55328, 55427, 59844, 59943, 64360, 64459, 67156, 67255, 70631, 70730, 71666, 71765, 75423, 75522, 76763, 76862, 77878, 77977, 79230, 79329, 81553, 81652, 83119, 83218, 85791, 85890, 88427, 88526, 98632, 98731, 101920, 102019, 104645, 104744, 105682];
    nd.X = new nd;
    K.ENTITY_TYPE = 35;
    K.ENTITY_NAME = "GameEntity";
    hb.pi = new E;
    hb.cM = 1500;
    hb.dM = 100;
    hb.RM = 2.5;
    hb.aM = 8;
    hb.bM = 2;
    hb.SL = .25;
    hb.ENTITY_TYPE = 43;
    hb.ENTITY_NAME = "AimView";
    Od.ENTITY_TYPE = 49;
    Od.ENTITY_NAME = "Announcer";
    sc.cE = .02;
    sc.XD = 2;
    sc.bE = .5;
    sc.ENTITY_TYPE = 48;
    sc.ENTITY_NAME = "DropPointsRefresh";
    rc.cE = .02;
    rc.XD = 2;
    rc.bE = .5;
    rc.ENTITY_TYPE = 47;
    rc.ENTITY_NAME = "FireballRefresh";
    nb.ENTITY_TYPE = 59;
    nb.ENTITY_NAME = "BubbleObject";
    mb.VL = 106;
    mb.ENTITY_TYPE = 41;
    mb.ENTITY_NAME = "BubbleViewComponent";
    mb.OM = 9;
    $b.YL = 1.7;
    $b.XL = 40;
    $b.UL = 4;
    $b.TL = 40;
    $b.ENTITY_TYPE = 45;
    $b.ENTITY_NAME = "CameraShake";
    Nd.ENTITY_TYPE = 37;
    Nd.ENTITY_NAME = "CannonInput";
    md.ENTITY_TYPE = 39;
    md.ENTITY_NAME = "CannonMovement";
    Md.ENTITY_TYPE = 42;
    Md.ENTITY_NAME = "CannonView";
    Pc.ENTITY_TYPE = 57;
    Pc.ENTITY_NAME = "ComboView";
    Xa.count = 0;
    Xa.ENTITY_TYPE = 32;
    Xa.ENTITY_NAME = "EntitySubject";
    J.ci = {
        zh: {
            xm: null
        }
    };
    J.mN = 0;
    J.nN = 1;
    J.oN = 2;
    J.lN = 3;
    J.ENTITY_TYPE = 33;
    J.ENTITY_NAME = "Game";
    J.Tk = !0;
    J.uM = 5;
    J.oM = 6;
    J.rM = 7;
    J.xM = 8;
    J.wM = 9;
    J.HM = 10;
    J.sM = 11;
    J.tM = 12;
    J.vM = 13;
    J.GM = 14;
    J.yM = 15;
    J.kM = 16;
    J.hM = 17;
    J.EM = 18;
    J.FM = 19;
    J.fM = 20;
    J.gM = 21;
    J.AM = 22;
    J.CM = 23;
    J.BM = 24;
    J.DM = 25;
    J.qM = 26;
    J.iM = 27;
    J.jM = 28;
    J.eM = 29;
    J.pM = 30;
    J.lM = 31;
    J.mM = 32;
    J.LM = 33;
    J.IM = 34;
    J.KM = 35;
    J.JM = 36;
    J.MM = 37;
    J.nM = 38;
    J.zM = 39;
    Wa.LD = [0, 1, 4];
    Wa.ky = [0, .3, .5, 1];
    Wa.ED = [0, .3, .4, 17.5];
    Wa.ID = [20, 30, 45];
    Wa.HD = [5E3, 1E4, 2E4];
    Wa.GD = [10, 25];
    Wa.JD = [10, 20, 100, 100];
    Wa.FD = [5, 10, 8, 16];
    Wa.KD = [5, 10, 8, 16];
    Qb.ENTITY_TYPE = 51;
    Qb.ENTITY_NAME = "GameObject";
    qc.ENTITY_TYPE = 36;
    qc.ENTITY_NAME = "IconView";
    Ha.mode = 0;
    Ha.window = new E(0,0,100,100);
    Ha.zD = 1;
    Ha.mA = 0;
    t.ho = new pc;
    t.ku = "/meta/bmf/digits2.fnt /game/sheets/bubble_pop_2.bin /game/sheets/bubble_paint.bin /meta/sheets/ui.bin /game/sheets/pergament_roll.png /game/images/bg.jpg /audio/{audio}/music_game.{audio} /audio/{audio}/sounds.{audio} /game/sheets/aim.bin /game/bmf/digits2.png /game/sheets/bubble_burst_fireball.png /meta/images/frame.png /meta/bmf/inner_brown3.png /meta/bmf/digits3.png /game/bmf/digits3.png /game/images/green.png /game/bmf/announcer_0.png /meta/sheets/menubar.png /game/sheets/bubble_burst_bomb.bin /game/bmf/announcer_2.png /game/bmf/announcer.fnt /game/sheets/squirrel.png /preloader/bubblewoods.png /game/sheets/clock_face.bin /meta/bmf/play_button.fnt /game/sheets/bubble_pop_2.png /game/sheets/bubble_pop_4.bin /meta/images/squirrel_pose_1.png /meta/images/star_level_up.png /game/sheets/bomb.png /game/sheets/bubble_pop_0.bin /game/sheets/misc.png /game/bmf/combo.fnt /game/sheets/flames.bin /game/bmf/announcer_5.png /game/bmf/announcer_3.png /meta/bmf/digits1.png /loader/bubble.png /loader/bubble_gloss.png /game/sheets/bubble_paint.png /meta/sheets/tutorial.png /meta/layout.json /meta/bmf/digits4.fnt /game/sheets/bubble_fireball.png /audio/{audio}/music_meta.{audio} /preloader/bubble.png /meta/bmf/digits1.fnt /game/sheets/flames.png /meta/sheets/menubar.bin /meta/bmf/digits6.png /game/sheets/clock_face.png /game/sheets/bubble_pop_3.bin /meta/images/bg.jpg /meta/bmf/inner_orange.png /game/bmf/digits3.fnt /meta/sheets/ui.png /game/sheets/bubbles.bin /preloader/squirrel.png /meta/images/logo.png /game/sheets/squirrel.bin /game/sheets/bubble_pop_1.bin /game/sheets/bomb.bin /game/images/treetop.png /meta/bmf/digits4.png /game/bmf/announcer_4.png /preloader/preloader_0.png /meta/images/pergament.png /meta/bmf/digits5.png /game/sheets/bubbles.png /game/sheets/bubble_burst_bomb.png /meta/bmf/text.fnt /meta/bmf/outer_brown1.png /meta/bmf/digits7.png /preloader/bubble_gloss.png /meta/sheets/tutorial.bin /game/sheets/bubble_pop_1.png /preloader/bg.jpg /game/bmf/announcer_1.png /strings.txt /meta/bmf/outer_white.png /meta/images/button_sign.png /meta/bmf/play_button.png /game/sheets/misc.bin /preloader/text.fnt /game/sheets/bubble_pop_0.png /game/sheets/bubble_pop_4.png /meta/bmf/outer_red.png /game/sheets/bubble_fireball.bin /meta/images/play_sign.png /game/sheets/bubble_pop_3.png /meta/bmf/inner_brown2.png /meta/bmf/digits3.fnt /preloader/preloader.fnt /game/bmf/digits1.png /meta/bmf/outer_brown2.png /game/sheets/bubble_burst_fireball.bin /game/bmf/digits2.fnt /preloader/text.png /meta/bmf/digits2.png /meta/bmf/inner_white.png /game/sheets/pergament_roll.bin /game/sheets/aim.png /game/bmf/digits1.fnt /game/bmf/combo.png".split(" ");
    Oa.wu = [];
    Oa.ZD = [84, 75, 25, 89, 85];
    Oc.PM = -3.2;
    Oc.QM = .72;
    Oc.ENTITY_TYPE = 40;
    Oc.ENTITY_NAME = "NextBubbleView";
    Pa.hy = [5, 6];
    Pa.iy = [2, 4];
    Pa.jy = [1, 2];
    lb.LA = new pc;
    Ld.ENTITY_TYPE = 55;
    Ld.ENTITY_NAME = "PoleView";
    Kd.ENTITY_TYPE = 54;
    Kd.ENTITY_NAME = "SceneView";
    ld.ENTITY_TYPE = 46;
    ld.ENTITY_NAME = "Scoring";
    kd.NM = 10;
    kd.ENTITY_TYPE = 53;
    kd.ENTITY_NAME = "SoundEffects";
    Jd.ENTITY_TYPE = 44;
    Jd.ENTITY_NAME = "SquirrelView";
    Zb.gj = 0;
    Zb.ENTITY_TYPE = 52;
    Zb.ENTITY_NAME = "TextOverlay";
    Nc.ENTITY_TYPE = 50;
    Nc.ENTITY_NAME = "Tween";
    Mc.ENTITY_TYPE = 56;
    Mc.ENTITY_NAME = "TimeScoreView";
    Lc.ENTITY_TYPE = 58;
    Lc.ENTITY_NAME = "Tutorial";
    ya.ENTITY_TYPE = 4;
    ya.ENTITY_NAME = "Activity";
    la.ENTITY_TYPE = 6;
    la.ENTITY_NAME = "Scene";
    Ib.ENTITY_TYPE = 7;
    Ib.ENTITY_NAME = "AbstractLoadingScene";
    L.ENTITY_TYPE = 8;
    L.ENTITY_NAME = "AbstractScene";
    yb.ENTITY_TYPE = 24;
    yb.ENTITY_NAME = "BoostSelectScene";
    oc.ENTITY_TYPE = 23;
    oc.ENTITY_NAME = "Boost";
    vb.ENTITY_TYPE = 11;
    vb.ENTITY_NAME = "ButtonView";
    Id.ENTITY_TYPE = 22;
    Id.ENTITY_NAME = "PlusButton";
    Pb.ENTITY_TYPE = 27;
    Pb.ENTITY_NAME = "BoostUnlockedScene";
    Jb.ENTITY_TYPE = 26;
    Jb.ENTITY_NAME = "GameResultsScene";
    kb.ENTITY_TYPE = 25;
    kb.ENTITY_NAME = "GameScene";
    nc.ENTITY_TYPE = 28;
    nc.ENTITY_NAME = "LevelUpScene";
    Hd.ENTITY_TYPE = 63;
    Hd.ENTITY_NAME = "LoadingOverlay";
    Ua.Lz = !0;
    Ua.oB = !1;
    Ua.ENTITY_TYPE = 21;
    Ua.ENTITY_NAME = "MainMenuScene";
    Kc.ENTITY_TYPE = 20;
    Kc.ENTITY_NAME = "PlaySign";
    wb.to = -1;
    wb.ENTITY_TYPE = 19;
    wb.ENTITY_NAME = "MenuBar";
    jd.ENTITY_TYPE = 18;
    jd.ENTITY_NAME = "XpWidget";
    id.ENTITY_TYPE = 17;
    id.ENTITY_NAME = "CoinWidget";
    hd.ENTITY_TYPE = 16;
    hd.ENTITY_NAME = "HighscoreWidget";
    gd.ENTITY_TYPE = 15;
    gd.ENTITY_NAME = "Settings";
    mc.ENTITY_TYPE = 31;
    mc.ENTITY_NAME = "PauseDialog";
    Jc.ENTITY_TYPE = 9;
    Jc.ENTITY_NAME = "PreloadingScene";
    ub.ENTITY_TYPE = 14;
    ub.ENTITY_NAME = "TextField";
    Gd.Pk = [79, 90];
    Fd.ENTITY_TYPE = 62;
    Fd.ENTITY_NAME = "TutorialOverlay";
    Sa.ND = 1;
    Ob.ENTITY_TYPE = 60;
    Ob.ENTITY_NAME = "Arrow";
    Dd.ENTITY_TYPE = 61;
    Dd.ENTITY_NAME = "Bubble";
    Nb.ENTITY_TYPE = 30;
    Nb.ENTITY_NAME = "Tween";
    fd.ENTITY_TYPE = 10;
    fd.ENTITY_NAME = "WindowView";
    H.Jp = -1;
    H.Ll = 0;
    H.OI = !1;
    H.Hf = "en";
    H.PA = "US";
    N.Uw = 0;
    N.gm = 0;
    N.Lu = 0;
    Yb.aF = ["txt", "csv", "xml", "json", "properties"];
    Vc.MD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Vc.CD = Ka.OB(Vc.MD);
    Ia.yH = new Tf(0,0);
    Ia.tf = new zg(new Kb(8));
    Hc.Ez = function() {
        var a = new cb;
        null != ea.lt ? a.cc("lt", "<") : a.G.lt = "<";
        null != ea.gt ? a.cc("gt", ">") : a.G.gt = ">";
        null != ea.amp ? a.cc("amp", "&") : a.G.amp = "&";
        null != ea.quot ? a.cc("quot", '"') : a.G.quot = '"';
        null != ea.apos ? a.cc("apos", "'") : a.G.apos = "'";
        return a
    }(this);
    M.gF = {}.toString;
    Ec.BYTES_PER_ELEMENT = 1;
    gb.ci = {
        zh: {
            xm: null
        }
    };
    gb.ENTITY_TYPE = 2;
    gb.ENTITY_NAME = "ActivityManager";
    gb.Tk = !0;
    Cd.ENTITY_TYPE = 3;
    Cd.ENTITY_NAME = "Transition";
    O.UD = !0;
    O.Qg = void 0;
    qa.ci = {
        zh: {
            qN: [40]
        }
    };
    qa.$L = 1;
    qa.ZL = 2;
    qa.Ar = -1;
    qa.kw = new ed(function() {
        return new qa
    }
    );
    qa.wa = function() {
        try {
            var a = Je.Ij(qa);
            qa.Ar = T.fa(a, "__max")[0]
        } catch (b) {}
        return 0
    }(this);
    be.ENTITY_TYPE = 34;
    be.ENTITY_NAME = "MessageCallback";
    m.TD = 32768;
    m.oy = 0;
    m.fp = !1;
    m.test = new cb;
    Hb.ci = {
        zh: {
            xm: null
        }
    };
    Hb.ENTITY_TYPE = 5;
    Hb.ENTITY_NAME = "MainLoop";
    Hb.Tk = !0;
    Gb.ci = {
        zh: {
            xm: null
        }
    };
    Gb.ENTITY_TYPE = 38;
    Gb.ENTITY_NAME = "Keyboard";
    Gb.Tk = !0;
    hc.ENTITY_TYPE = 12;
    hc.ENTITY_NAME = "PointerBase";
    Ga.ci = {
        zh: {
            xm: null
        }
    };
    Ga.ENTITY_TYPE = 13;
    Ga.ENTITY_NAME = "Pointer";
    Ga.Tk = !0;
    Zd.POSITIVE_INFINITY = Infinity;
    A.dj = .01666666;
    A.Ey = 10 * A.dj;
    A.elapsedTime = 0;
    A.yo = 0;
    A.Lx = 0;
    A.cv = 0;
    A.Yq = 1;
    A.Xq = 0;
    A.yz = 0;
    A.IG = 30;
    A.Ag = 0;
    A.sx = 0;
    A.ff = 0;
    A.av = 0;
    A.Do = 0;
    A.xq = 0;
    jb.xI = !1;
    na.xs = 4;
    na.Lc = 16;
    na.qy = [0, na.Lc, 0, -na.Lc, na.Lc, 0, -na.Lc, 0, 0, -na.Lc, 0, na.Lc, -na.Lc, 0, na.Lc, 0];
    zc.Lg = "grid";
    Fb.Lg = "split";
    dd.Lg = "window";
    Eb.ci = {
        zh: {
            xm: null
        }
    };
    Eb.ENTITY_TYPE = 29;
    Eb.ENTITY_NAME = "ButtonManager";
    Eb.Tk = !0;
    Ea.gj = 0;
    Ea.kr = 0;
    Ea.ly = 10;
    sd.Gu = 0;
    sb.en = Da.ob.slice().length;
    tb.py = new tb(wa.fn);
    tb.$D = new tb(wa.Hm);
    tb.aE = new tb(wa.Screen);
    ad.hF = new Lb;
    Ab.jD = new B;
    pb.mF = new B;
    pb.Dy = new jc;
    pb.jF = new jc;
    wc.nF = new Ud;
    wc.oF = new Ud;
    ra.count = 0;
    ra.Cj = !1;
    I.Zg = 0;
    ma.Zg = 0;
    ta.Zg = 0;
    Ca.Ix = new jc;
    rd.next = 0;
    La.iD = 0;
    La.Wq = new pc;
    Y.FJ = [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4], [0, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1], [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 1, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 0, 1, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 4, 4, 1, 0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 4, 4, 2, 4, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0], [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 1, 1, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 1, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 0, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 1, 1, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 1, 0], [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 1]];
    Ba.St = 0;
    Ba.uy = -3;
    ca.zL = "AA4IAAAAAAAAAhqg5VV7NJtZvz7fTC8zU5deplUlMrQoWqmqahD5So0aipYWrUhVFSVBQ10iSTtUtW6nKDVF6k7d75eQfEUbFcQ9KiFS90tQEolcP23nrLPmO+esr/+f39rr/a293t/e7/P8nmfvlz0O6RvrBJADtbBNaD88IOKTOmOrCqhu9zE770vc1pBV/xL5dxj2V7Zj4FGSomFKStCWNlV7hG1VabZfZ1LaHbFrRwzzLjzPoi1UHDnlV/lWbhgIIJvLBp/pu7AHEdRnIY+ROdXxg4fNpMdTxVnnm08OjozejAVsBqwqz8kddGRlRxsd8c55dNZoPuex6a7Dt6L0NNb03sqgTlR2/OT7eTt0Y0WnpUXxLsp5SMANc4DsmX4zJUBQvznwexm9tsMH+C9uRYMPOd96ZHB29NZjCIM2nfO7tsmQveX3l2r7ft0N4/SRJ7kO6Y8ZCaeuUQ4gMTZ67cp7TgxvlNDsPgOBdZi2YTam5Q7m3+00l+XG7PrDe6YoPmHgK+yLih7fAR16ZFCeD9WvOVt+gfNW/KT5/M6rb/9KERt+N1lad5RneVjzxXHsLofuU+TvrEsr3+26sVz5WJh6L/svoPK3qepFH9bysDljWtD1F7KrxzW1i9r+e/NLxV/acts7zuo304J9+t3Pd6Y6u8f3EAqxNRgv5DZjaI3unyvkvHPya/v3mWVYOC38qBq11+yHZ2bAyP1HbkV92vdno7r2lxz9UwCdCJVfd14NLcpO2CadHS/XPJ9doXgz5vLv/1OBVS3gX0D9n6LiNIDfpilO9RsLgZ2W/wIy8W/Rh93jfoz4qmRV2xElv6p2lRXQdO6/Cv8f5nGn3u0wLXjhnvClabL1o+7yvIpvLfT/xsKG30y/sTvq30ia9Czxp9dr9v/e7Yn/O0QJXxxBOJmceP/DBFa1q1v6oudn/e6qc/37dUoNvnYL4plQ9OoneYOh/r8fOFm7yl7FETHY9dXd5K2n/qEc53dOEe1TTJcvCfp1dpTC334l0vyaFL6mttNEbFjzO+ZV2mLk0qc3BrxJ4d9gweMmjRorxb7vic0rSq6D4wzAyFWas1TqPE0sLI8XLAryC8tPChaN3ALEZSWmtB34SyZcxXYn/E4Tg0LeMIPhgPKD9zyHGMxxhxnDDih7eI86xECTM8zodUCdgffUmRh4rQ8zyA6ow/Aei+01a8OMfziQQ+GAEkhwN/cqUFYAVzA9ex4n6jgtsiMvXf5BtXxEU4hSphvx3v8+9au8eEekEEpkrkne/zB1M+HAPuXIz3paxKlfe8aDMfGWAX6Md6PuuAdKHFVH++Ed5LEji94Z5zeiJIxbmWeN7rr1/ZcaBl5/nimdHsHgIH/ssyLUXZ4fDQ46HnBb+hQqG8yNiKRrXL/b1IPYDUsu3dFKtRMcjqlRvONd4xBvOufx2cUHuk8pmG1D7PyOQmUmluisVFS9OWS8fPIe8LiCtjwJKnEC9hrS9uKmISI3Wa5+vdXUG9dtyfr7g/oJv2wbzeZU838G6mEvntUb3SVV/fBZ6H/sL+lElzeRrHy2Xbe7UWX1q5sgOQ81rv+2baej4fP4m5Mf/GkoxfDtT3++KP7do9Jn26aa6xAhCf5L9RZVfkWKCcjI1eYbm2plvTEqkDxKC402bGzXCYaGnuALHabBT1dFLuOSB7RorOPEhZah1NjZIgR/UFGfK3p1ElYnevOMBDLURdpIjrI+qZk4sffGbRFiXuEmdFjiAODlQCJvIaB1rW61Ljg3y4eS4LAcSgDxxZQs0DYa15wA032Z+lGUfpoyOrFo3mg1sRQtN/fHHCx3TrM8eTrldMbYisDLXbUDoXMLejSq0fUNuO1muX0gEa8vgyegkqiqqbC3W0S4cC9Kmt8MuS/hFO7Xei3f8rSvIjeveMM7kxjUixOrl6gJshe4JU7PhOHpfrRYvu7yoAZKa3Buyk2J+K5W+nNTz1nhJDhRUfDJLiUXxjxXCJeeaOe/r7HlBP/uURc/5efaZEPxr55Qj39rfTLkugUGyMrwo7HAglfEjDriehF1jXtwJkPoiYkYQ5aoXSA7qbCBGKq5hwtu2VkpI9xVDop/1xrC52eiIvCoPWx4lLl40jm9upvycVPfpaH9/o2D4xKXpeNjE2HPQRS+3RFaYTc4Txw7Dvq5X6JBRwzs9mvoB49BK6b+XgsZVJYiInTlSXZ+62FT18mkFVcPKCJsoF5ahb19WheZLUYsSwdrrVM3aQ2XE6SzU2xHDS6iWkodk5AF6F8WUNmmushi8aVpMPwiIfEiQWo3CApONDRjrhDiVnkaFsaP5rjIJkmsN6V26li5LNM3JxGSyKgomknTyyrhcnwv9Qcqaq5utAh44W30SWo8Q0XHKR0glPF4fWst1FUCnk2woFq3iy9fAbzcjJ8fvSjgKVOfn14RDqyQuIgaGJZuswTywdCFSa89SakMf6fe+9KaQMYQlKxiJBczuPSho4wmBjdA+ag6QUOr2GdpcbSl51Ay6khhBt5UXdrnxc7ZGMxCvz96A4oLocxh2+px+1zkyLacCGrxnPzTRSgrLKpStFpH5ppKWm7PgMKZtwgytKLOjbGCOQLTm+KOowqa1sdut9raj1CZFkZD0jbaKNLpJUarSH5Qknx1YiOxdA5L6d5sfI/unmkSF65Ic/AvtXt98Pnrdwl5vgppQ3dYzWFwknZsy6xh2llmLxpegF8ayLwniknlXRHiF4hzzrgB8jQ4wdIqcaHCEAxyJwCeGkXPBZYSrrGa4vMwZvNN9aK0F4JBOK9mQ8g8EjEbIQVwvfS2D8GuCYsdqwqSWbQrfWdTRUJMqmpnWPax4Z7E137I6brHbvjpPlfNZpF1d7PP7HB/MPHcHVKTMhLO4f3CZcaccZEOiS2DpKiQB5KXDJ+Ospcz4qTRCRxgrKEQIgUkKLTKKwskdx2DWo3bg3PEoB5h2nA24olwfKSR+QR6TAvEDi/0czhUT59RZmO1MGeKGeEfuOSPWfL+XKmhqpZmOVR9mJVNDPKOS49Lq+Um10YsBybzDMtemlPCOJEtE8zaXhsaqEs9bngSJGhlOTTMlCXly9Qv5cRN3PVLK7zoMptutf7ihutrQ/Xj7VqeCdUwleTTKklOI8Wep9h7fCY0kVtDtIWKnubWAvbNZtsRRqOYl802vebPEkZRSZc6wXOfPtpPtN5HI63EUFfsy7U/TLr8NkIzaY3vx4A28x765XZMzRZTpMk81YIMuwJ5+/zoCuZj1wGnaHObxa5rpKZj4WhT670maRw04w0e3cZW74Z0aZe2n05hjZaxm6urenz8Ef5O6Yu1J2aqYAlqsCXs5ZB5o1JJ5l3xkTVr8rJQ09NLsBqRRDT2IIjOPmcJa6xQ1R5yGP9jAsj23xYDTezdyqG8YWZ7vJBIWK56K+iDgcHimiQOTIasNSua1fOBxsKMMEKd15jxTl+3CyvGCR+UyRwuSI2XuwRIPoNNclPihfJhaq2mKkNijwYLY6feqohktukmI3KDvOpN7ItCqHHhNuKlxMfBAEO5LjW2RKh6lE5Hd1dtAOopac/Z4FdsNsjMhXz/ug8JGmbVJTA+VOBJXdrYyJcIn5+OEeoK8kWEWF+wdG8ZtZHKSquWDtDVyhFPkRVqguKFkLkKCz46hcU1SUY9oJ2Sk+dmq0kglqk4kqKT1CV9JDELPjK1WsWGkEXF87g9P98e5ff0mIupm/w6vc3kCeq04X5bgJQlcMFRjlFWmSk+kssXCAVikfeAlMuzpUvCSdXiG+dc6KrIiLxxhbEVuKf7vW7KmDQI95bZe3H9mN3/77F6fZ2Yx/F9yClllj8gXpLWLpd5+v90iOaFa9sd7Pvx0lNa1o1+bkiZ69wCiC2x9UIb6/boBCuNMB/HYR0RC6+FD9Oe5qrgQl6JbXtkaYn0wkdNhROLqyhv6cKvyMj1Fvs2o3OOKoMYTubGENLfY5F6H9d8wX1cnINsvz+wZFQu3zhWVlwJvwBEp69Dqu/ZnkBf3nIfbx4TK7zOVJH5sGJX+IMwkn1vVBn38GbpTg9bJnMcTOb5F6Ci5gOn9Fcy6Qzcu+FL6mYJJ+f2ZZJGda1VqruZ0JRXItp8X0aTjIcJgzdaXlha7q7kV4ebrMsunfsRyRa9qYuryBHA0hc1KVsKdE+oI0ljLmSAyMze8lWmc5/lQ18slyTVC/vADTc+SNM5++gztTBLz4m0aVUKcfgOEExuKVomJ7XQDZuziMDjG6JP9tgR7JXZTeo9RGetW/Xm9/TgPJpTgHACPOGvmy2mDm9fl09WeMm9sQUAXP3Su2uApeCwJVT5iWCXDgmcuTsFgU9Nm6/PusJzSbDQIMfl6INY/OAEvZRN54BSSXUClM51im6Wn9VhVamKJmzOaFJErgJcs0etFZ40LIF3EPkjFTjGmAhsd174NnOwJW8TdJ1Dja+E6Wa6FVS22Haj1DDA474EesoMP5nbspAPJLWJ8rYcP1DwCslhnn+gTFm+sS9wY+U6SogAa9tiwpoxuaFeqm2OK+uozR6SfiLCOPz36LiDlzXr6UWd7BpY6mlrNANkTOeme5EgnnAkQRTGo9T6iYxbUKfGJcI9B+ub2PcyUOgpwXbOf3bHFWtygD7FYbRhb+vkzi87dB0JeXl/vBpBUz93VtqZi7AL7C1VowTF+tGmyurw7DBcktc+UMY0E10Jw4URojf8NdaNpN6E1q4+Oz+4YePtMLy8FPRP"
}
)("undefined" != typeof exports ? exports : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this, "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
