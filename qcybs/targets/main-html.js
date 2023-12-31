/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function s(a, b) {
        function c() {}
        c.prototype = a;
        var i = new c, d;
        for (d in b)
            i[d] = b[d];
        b.toString !== Object.prototype.toString && (i.toString = b.toString);
        return i
    }
    function Yc(a) {
        return a instanceof Array ? function() {
            return A.iter(a)
        }
        : "function" == typeof a.iterator ? p(a, a.iterator) : a.iterator
    }
    function p(a, b) {
        if (null == b)
            return null;
        null == b.__id__ && (b.__id__ = dd++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope, arguments)
        }
        ,
        c.scope = a,
        c.method = b,
        a.hx__closures__[b.__id__] = c);
        return c
    }
    var e = {}
      , h = function() {
        return L.__string_rec(this, "")
    }
      , wa = function(a, b) {
        b = b.split("u").join("");
        this.r = RegExp(a, b)
    };
    e.EReg = wa;
    wa.__name__ = ["EReg"];
    wa.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length)
                return this.r.m[a];
            throw "EReg::matched";
        },
        matchedPos: function() {
            if (null == this.r.m)
                throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        __class__: wa
    };
    var A = function() {};
    e.HxOverrides = A;
    A.__name__ = ["HxOverrides"];
    A.dateStr = function(a) {
        var b = a.getMonth() + 1
          , c = a.getDate()
          , i = a.getHours()
          , d = a.getMinutes()
          , f = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > i ? "0" + i : "" + i) + ":" + (10 > d ? "0" + d : "" + d) + ":" + (10 > f ? "0" + f : "" + f)
    }
    ;
    A.strDate = function(a) {
        switch (a.length) {
        case 8:
            var a = a.split(":")
              , b = new Date;
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
            throw "Invalid date format : " + a;
        }
    }
    ;
    A.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    }
    ;
    A.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c)
            return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b,
        0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    }
    ;
    A.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c)
            return !1;
        a.splice(c, 1);
        return !0
    }
    ;
    A.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    }
    ;
    var vb = function() {};
    e.Lambda = vb;
    vb.__name__ = ["Lambda"];
    vb.array = function(a) {
        for (var b = [], a = Yc(a)(); a.hasNext(); ) {
            var c = a.next();
            b.push(c)
        }
        return b
    }
    ;
    vb.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var i = Yc(a)(); i.hasNext(); )
                i.next(),
                c++;
        else
            for (i = Yc(a)(); i.hasNext(); ) {
                var d = i.next();
                b(d) && c++
            }
        return c
    }
    ;
    var Ua = function() {
        this.length = 0
    };
    e.List = Ua;
    Ua.__name__ = ["List"];
    Ua.prototype = {
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        push: function(a) {
            this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++
        },
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h)
                        return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        __class__: Ua
    };
    var wb = function() {};
    e.IMap = wb;
    wb.__name__ = ["IMap"];
    Math.__name__ = ["Math"];
    var w = function() {};
    e.Reflect = w;
    w.__name__ = ["Reflect"];
    w.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    }
    ;
    w.callMethod = function(a, b, c) {
        return b.apply(a, c)
    }
    ;
    w.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty, i;
            for (i in a)
                "__id__" != i && "hx__closures__" != i && c.call(a, i) && b.push(i)
        }
        return b
    }
    ;
    w.isFunction = function(a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    }
    ;
    w.compare = function(a, b) {
        return a == b ? 0 : a > b ? 1 : -1
    }
    ;
    w.isEnumValue = function(a) {
        return null != a && null != a.__enum__
    }
    ;
    w.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b))
            return !1;
        delete a[b];
        return !0
    }
    ;
    var y = function() {};
    e.Std = y;
    y.__name__ = ["Std"];
    y.is = function(a, b) {
        return L.__instanceof(a, b)
    }
    ;
    y.instance = function(a, b) {
        return a instanceof b ? a : null
    }
    ;
    y.string = function(a) {
        return L.__string_rec(a, "")
    }
    ;
    y["int"] = function(a) {
        return a | 0
    }
    ;
    y.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == A.cca(a, 1) || 88 == A.cca(a, 1)))
            b = parseInt(a);
        return isNaN(b) ? null : b
    }
    ;
    y.parseFloat = function(a) {
        return parseFloat(a)
    }
    ;
    var xb = function() {
        this.b = ""
    };
    e.StringBuf = xb;
    xb.__name__ = ["StringBuf"];
    xb.prototype = {
        add: function(a) {
            this.b += y.string(a)
        },
        __class__: xb
    };
    var na = function() {};
    e.StringTools = na;
    na.__name__ = ["StringTools"];
    na.startsWith = function(a, b) {
        return a.length >= b.length && A.substr(a, 0, b.length) == b
    }
    ;
    na.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    }
    ;
    var v = e.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    v.TNull = ["TNull", 0];
    v.TNull.toString = h;
    v.TNull.__enum__ = v;
    v.TInt = ["TInt", 1];
    v.TInt.toString = h;
    v.TInt.__enum__ = v;
    v.TFloat = ["TFloat", 2];
    v.TFloat.toString = h;
    v.TFloat.__enum__ = v;
    v.TBool = ["TBool", 3];
    v.TBool.toString = h;
    v.TBool.__enum__ = v;
    v.TObject = ["TObject", 4];
    v.TObject.toString = h;
    v.TObject.__enum__ = v;
    v.TFunction = ["TFunction", 5];
    v.TFunction.toString = h;
    v.TFunction.__enum__ = v;
    v.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = v;
        a.toString = h;
        return a
    }
    ;
    v.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = v;
        a.toString = h;
        return a
    }
    ;
    v.TUnknown = ["TUnknown", 8];
    v.TUnknown.toString = h;
    v.TUnknown.__enum__ = v;
    var M = function() {};
    e.Type = M;
    M.__name__ = ["Type"];
    M.getClassName = function(a) {
        return a.__name__.join(".")
    }
    ;
    M.getEnumName = function(a) {
        return a.__ename__.join(".")
    }
    ;
    M.resolveClass = function(a) {
        a = e[a];
        return null == a || !a.__name__ ? null : a
    }
    ;
    M.resolveEnum = function(a) {
        a = e[a];
        return null == a || !a.__ename__ ? null : a
    }
    ;
    M.createInstance = function(a, b) {
        switch (b.length) {
        case 0:
            return new a;
        case 1:
            return new a(b[0]);
        case 2:
            return new a(b[0],b[1]);
        case 3:
            return new a(b[0],b[1],b[2]);
        case 4:
            return new a(b[0],b[1],b[2],b[3]);
        case 5:
            return new a(b[0],b[1],b[2],b[3],b[4]);
        case 6:
            return new a(b[0],b[1],b[2],b[3],b[4],b[5]);
        case 7:
            return new a(b[0],b[1],b[2],b[3],b[4],b[5],b[6]);
        case 8:
            return new a(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7]);
        default:
            throw "Too many arguments";
        }
    }
    ;
    M.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    }
    ;
    M.createEnum = function(a, b, c) {
        var i = w.field(a, b);
        if (null == i)
            throw "No such constructor " + b;
        if (w.isFunction(i)) {
            if (null == c)
                throw "Constructor " + b + " need parameters";
            return i.apply(a, c)
        }
        if (null != c && 0 != c.length)
            throw "Constructor " + b + " does not need parameters";
        return i
    }
    ;
    M.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    }
    ;
    M["typeof"] = function(a) {
        switch (typeof a) {
        case "boolean":
            return v.TBool;
        case "string":
            return v.TClass(String);
        case "number":
            return Math.ceil(a) == a % 2147483648 ? v.TInt : v.TFloat;
        case "object":
            if (null == a)
                return v.TNull;
            var b = a.__enum__;
            if (null != b)
                return v.TEnum(b);
            a = a instanceof Array && null == a.__enum__ ? Array : a.__class__;
            return null != a ? v.TClass(a) : v.TObject;
        case "function":
            return a.__name__ || a.__ename__ ? v.TObject : v.TFunction;
        case "undefined":
            return v.TNull;
        default:
            return v.TUnknown
        }
    }
    ;
    var ta = function() {};
    e["flambe.util.Disposable"] = ta;
    ta.__name__ = ["flambe", "util", "Disposable"];
    ta.prototype = {
        __class__: ta
    };
    var r = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    e["flambe.Component"] = r;
    r.__name__ = ["flambe", "Component"];
    r.__interfaces__ = [ta];
    r.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: r
    };
    var Ka = function() {
        r.call(this);
        this._disposables = []
    };
    e["flambe.Disposer"] = Ka;
    Ka.__name__ = ["flambe", "Disposer"];
    Ka.__super__ = r;
    Ka.prototype = s(r.prototype, {
        get_name: function() {
            return "Disposer_5"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length; ) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: Ka
    });
    var o = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    e["flambe.Entity"] = o;
    o.__name__ = ["flambe", "Entity"];
    o.__interfaces__ = [ta];
    o.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name()
              , c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c; )
                b = c,
                c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c; ) {
                var i = c.next;
                if (c == a)
                    return null == b ? this.firstComponent = i : (b.owner = this,
                    b.next = i),
                    delete this._compMap[c.get_name()],
                    0 != (c._flags & 1) && (c.onStop(),
                    c._flags &= -2),
                    c.onRemoved(),
                    c.owner = null,
                    c.next = null,
                    !0;
                b = c;
                c = i
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, i = this.firstChild; null != i; )
                    c = i,
                    i = i.next;
                null != c ? c.next = a : this.firstChild = a
            } else
                a.next = this.firstChild,
                this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c; ) {
                var i = c.next;
                if (c == a) {
                    null == b ? this.firstChild = i : b.next = i;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = i
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild; )
                this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent; )
                this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: o
    };
    var Pc = function() {};
    e["flambe.util.PackageLog"] = Pc;
    Pc.__name__ = ["flambe", "util", "PackageLog"];
    var jc = function() {};
    e["flambe.platform.Platform"] = jc;
    jc.__name__ = ["flambe", "platform", "Platform"];
    jc.prototype = {
        __class__: jc
    };
    var ua = function() {};
    e["flambe.platform.html.HtmlPlatform"] = ua;
    ua.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    ua.__interfaces__ = [jc];
    ua.prototype = {
        init: function() {
            var a = this;
            x.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new yb(b);
            this._pointer = new S;
            this._mouse = new zb(this._pointer,b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Aa;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var i = 0
              , d = function(c) {
                if (!(1E3 > c.timeStamp - i)) {
                    var d = b.getBoundingClientRect()
                      , g = a.getX(c, d)
                      , d = a.getY(c, d);
                    switch (c.type) {
                    case "mousedown":
                        c.target == b && (c.preventDefault(),
                        a._mouse.submitDown(g, d, c.button),
                        b.focus());
                        break;
                    case "mousemove":
                        a._mouse.submitMove(g, d);
                        break;
                    case "mouseup":
                        a._mouse.submitUp(g, d, c.button);
                        break;
                    case "mousewheel":
                    case "DOMMouseScroll":
                        a._mouse.submitScroll(g, d, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                    }
                }
            };
            window.addEventListener("mousedown", d, !1);
            window.addEventListener("mousemove", d, !1);
            window.addEventListener("mouseup", d, !1);
            b.addEventListener("mousewheel", d, !1);
            b.addEventListener("DOMMouseScroll", d, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var f = "undefined" != typeof window.ontouchstart
              , d = "msMaxTouchPoints"in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (f || d) {
                var e = new Ab(this._pointer,f ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = e;
                d = function(b) {
                    var c;
                    c = f ? b.changedTouches : [b];
                    var d = b.target.getBoundingClientRect();
                    i = b.timeStamp;
                    switch (b.type) {
                    case "touchstart":
                    case "MSPointerDown":
                    case "pointerdown":
                        b.preventDefault();
                        x.SHOULD_HIDE_MOBILE_BROWSER && x.hideMobileBrowser();
                        for (b = 0; b < c.length; ) {
                            var g = c[b];
                            ++b;
                            var h = a.getX(g, d)
                              , j = a.getY(g, d);
                            e.submitDown((f ? g.identifier : g.pointerId) | 0, h, j)
                        }
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                    case "pointermove":
                        b.preventDefault();
                        for (b = 0; b < c.length; )
                            g = c[b],
                            ++b,
                            h = a.getX(g, d),
                            j = a.getY(g, d),
                            e.submitMove((f ? g.identifier : g.pointerId) | 0, h, j);
                        break;
                    case "touchend":
                    case "touchcancel":
                    case "MSPointerUp":
                    case "pointerup":
                        for (b = 0; b < c.length; )
                            g = c[b],
                            ++b,
                            h = a.getX(g, d),
                            j = a.getY(g, d),
                            e.submitUp((f ? g.identifier : g.pointerId) | 0, h, j)
                    }
                }
                ;
                0 <= window.navigator.userAgent.toLowerCase().indexOf("samsung") && window.addEventListener("touchstart", function(a) {
                    Ba.add(a.target)
                });
                f ? (b.addEventListener("touchstart", d, !1),
                b.addEventListener("touchmove", d, !1),
                b.addEventListener("touchend", d, !1),
                b.addEventListener("touchcancel", d, !1)) : (b.addEventListener("MSPointerDown", d, !1),
                b.addEventListener("MSPointerMove", d, !1),
                b.addEventListener("MSPointerUp", d, !1))
            } else
                this._touch = new Bb;
            var h = window.onerror;
            window.onerror = function(a, b, c) {
                k.uncaughtError.emit(a);
                return null != h ? h(a, b, c) : !1
            }
            ;
            var j = x.loadExtension("hidden", window.document);
            null != j.value ? (d = function() {
                k.hidden.set__(w.field(window.document, j.field))
            }
            ,
            d(null),
            window.document.addEventListener(j.prefix + "visibilitychange", d, !1)) : (d = function(a) {
                k.hidden.set__("pagehide" == a.type)
            }
            ,
            window.addEventListener("pageshow", d, !1),
            window.addEventListener("pagehide", d, !1));
            k.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var l = x.loadExtension("requestAnimationFrame").value;
            if (null != l) {
                var m = window.performance
                  , n = null != m && x.polyfill("now", m);
                n ? this._lastUpdate = m.now() : null;
                var o = null
                  , o = function(c) {
                    a.update(n ? m.now() : c);
                    l(o, b)
                };
                l(o, b)
            } else
                window.setInterval(function() {
                    a.update(Date.now())
                }, 16);
            gb.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) {
            return (new B(this,a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = Qc.getLocalStorage();
                this._storage = null != a ? new Cb(a) : new Db
            }
            return this._storage
        },
        createLogHandler: function() {
            return null
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            k.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b),
            this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getMouse: function() {
            return this._mouse
        },
        getTouch: function() {
            return this._touch
        },
        getKeyboard: function() {
            var a = this;
            if (null == this._keyboard) {
                this._keyboard = new oa;
                var b = function(b) {
                    switch (b.type) {
                    case "keydown":
                        a._keyboard.submitDown(b.keyCode) && b.preventDefault();
                        break;
                    case "keyup":
                        a._keyboard.submitUp(b.keyCode)
                    }
                };
                this._canvas.addEventListener("keydown", b, !1);
                this._canvas.addEventListener("keyup", b, !1)
            }
            return this._keyboard
        },
        getWeb: function() {
            null == this._web && (this._web = new Eb(this._container));
            return this._web
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX - b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            return new Va(a)
        },
        __class__: ua
    };
    var T = function(a, b) {
        this._value = a;
        this._changed = null != b ? new Wa(b) : null
    };
    e["flambe.util.Value"] = T;
    T.__name__ = ["flambe", "util", "Value"];
    T.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a,
            null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new Wa);
            return this._changed
        },
        __class__: T
    };
    var Xa = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    e["flambe.util.SignalConnection"] = Xa;
    Xa.__name__ = ["flambe", "util", "SignalConnection"];
    Xa.__interfaces__ = [ta];
    Xa.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this),
            this._signal = null)
        },
        __class__: Xa
    };
    var O = function(a) {
        this._head = null != a ? new Xa(this,a) : null;
        this._deferredTasks = null
    };
    e["flambe.util.SignalBase"] = O;
    O.__name__ = ["flambe", "util", "SignalBase"];
    O.prototype = {
        connectImpl: function(a, b) {
            var c = this
              , i = new Xa(this,a);
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(i, b)
            }) : this.listAdd(i, b);
            return i
        },
        disconnect: function(a) {
            var b = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c; )
                b = c,
                c = c.next;
            a = new kc(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = O.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a; )
                a.fn(),
                a = a.next
        },
        listAdd: function(a, b) {
            if (b)
                a._next = this._head,
                this._head = a;
            else {
                for (var c = null, i = this._head; null != i; )
                    c = i,
                    i = i._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c; ) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: O
    };
    var Wa = function(a) {
        O.call(this, a)
    };
    e["flambe.util.Signal2"] = Wa;
    Wa.__name__ = ["flambe", "util", "Signal2"];
    Wa.__super__ = O;
    Wa.prototype = s(O.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), i = c; null != i; )
                i._listener(a, b),
                i.stayInList || i.dispose(),
                i = i._next;
            this.didEmit(c)
        },
        __class__: Wa
    });
    var E = function(a) {
        O.call(this, a)
    };
    e["flambe.util.Signal1"] = E;
    E.__name__ = ["flambe", "util", "Signal1"];
    E.__super__ = O;
    E.prototype = s(O.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c; )
                c._listener(a),
                c.stayInList || c.dispose(),
                c = c._next;
            this.didEmit(b)
        },
        __class__: E
    });
    var G = function(a, b) {
        this._behavior = null;
        this.wait = !1;
        T.call(this, a, b)
    };
    e["flambe.animation.AnimatedFloat"] = G;
    G.__name__ = ["flambe", "animation", "AnimatedFloat"];
    G.__super__ = T;
    G.prototype = s(T.prototype, {
        set__: function(a) {
            if (this.wait)
                throw "KIK";
            this._behavior = null;
            return T.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (T.prototype.set__.call(this, this._behavior.update(a)),
            this._behavior.isComplete() && (this._behavior = null))
        },
        animateTo: function(a, b, c) {
            if (this.wait)
                throw "ANIto";
            this.set_behavior(new hb(this._value,a,b,c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: G
    });
    var k = function() {};
    e["flambe.System"] = k;
    k.__name__ = ["flambe", "System"];
    k.init = function() {
        k._calledInit || (k._platform.init(),
        k._calledInit = !0)
    }
    ;
    var lc = function(a) {
        this._handler = a
    };
    e["flambe.util.Logger"] = lc;
    lc.__name__ = ["flambe", "util", "Logger"];
    lc.prototype = {
        __class__: lc
    };
    var gb = function() {};
    e["flambe.Log"] = gb;
    gb.__name__ = ["flambe", "Log"];
    gb.info = function() {
        null
    }
    ;
    gb.__super__ = Pc;
    gb.prototype = s(Pc.prototype, {
        __class__: gb
    });
    var ib = function(a) {
        null == a && (a = 1);
        this._realDt = 0;
        r.call(this);
        this.scale = new G(a)
    };
    e["flambe.SpeedAdjuster"] = ib;
    ib.__name__ = ["flambe", "SpeedAdjuster"];
    ib.__super__ = r;
    ib.prototype = s(r.prototype, {
        get_name: function() {
            return "SpeedAdjuster_6"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt,
            this._realDt = 0);
            this.scale.update(a)
        },
        __class__: ib
    });
    var mc = function() {};
    e["flambe.animation.Behavior"] = mc;
    mc.__name__ = ["flambe", "animation", "Behavior"];
    mc.prototype = {
        __class__: mc
    };
    var Q = function() {};
    e["flambe.animation.Ease"] = Q;
    Q.__name__ = ["flambe", "animation", "Ease"];
    Q.linear = function(a) {
        return a
    }
    ;
    Q.quadOut = function(a) {
        return a * (2 - a)
    }
    ;
    Q.quartOut = function(a) {
        return 1 - --a * a * a * a
    }
    ;
    Q.quintOut = function(a) {
        return (a -= 1) * a * a * a * a + 1
    }
    ;
    Q.expoOut = function(a) {
        return -Math.pow(2, -10 * a) + 1
    }
    ;
    Q.elasticOut = function(a) {
        return 1 * Math.pow(2, -10 * a) * Math.sin(6.283185307179586 * (a - 0.06366197723675814 * Math.asin(1)) / 0.4) + 1
    }
    ;
    var hb = function(a, b, c, i) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != i ? i : Q.linear
    };
    e["flambe.animation.Tween"] = hb;
    hb.__name__ = ["flambe", "animation", "Tween"];
    hb.__interfaces__ = [mc];
    hb.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: hb
    };
    var La = function() {};
    e["flambe.asset.Asset"] = La;
    La.__name__ = ["flambe", "asset", "Asset"];
    La.__interfaces__ = [ta];
    La.prototype = {
        __class__: La
    };
    var m = e["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    m.WEBP = ["WEBP", 0];
    m.WEBP.toString = h;
    m.WEBP.__enum__ = m;
    m.JXR = ["JXR", 1];
    m.JXR.toString = h;
    m.JXR.__enum__ = m;
    m.PNG = ["PNG", 2];
    m.PNG.toString = h;
    m.PNG.__enum__ = m;
    m.JPG = ["JPG", 3];
    m.JPG.toString = h;
    m.JPG.__enum__ = m;
    m.GIF = ["GIF", 4];
    m.GIF.toString = h;
    m.GIF.__enum__ = m;
    m.DDS = ["DDS", 5];
    m.DDS.toString = h;
    m.DDS.__enum__ = m;
    m.PVR = ["PVR", 6];
    m.PVR.toString = h;
    m.PVR.__enum__ = m;
    m.PKM = ["PKM", 7];
    m.PKM.toString = h;
    m.PKM.__enum__ = m;
    m.MP3 = ["MP3", 8];
    m.MP3.toString = h;
    m.MP3.__enum__ = m;
    m.M4A = ["M4A", 9];
    m.M4A.toString = h;
    m.M4A.__enum__ = m;
    m.OPUS = ["OPUS", 10];
    m.OPUS.toString = h;
    m.OPUS.__enum__ = m;
    m.OGG = ["OGG", 11];
    m.OGG.toString = h;
    m.OGG.__enum__ = m;
    m.WAV = ["WAV", 12];
    m.WAV.toString = h;
    m.WAV.__enum__ = m;
    m.Data = ["Data", 13];
    m.Data.toString = h;
    m.Data.__enum__ = m;
    var nc = function(a, b, c, i) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = i
    };
    e["flambe.asset.AssetEntry"] = nc;
    nc.__name__ = ["flambe", "asset", "AssetEntry"];
    nc.prototype = {
        __class__: nc
    };
    var Fb = function() {};
    e["flambe.asset.AssetPack"] = Fb;
    Fb.__name__ = ["flambe", "asset", "AssetPack"];
    Fb.__interfaces__ = [ta];
    Fb.prototype = {
        __class__: Fb
    };
    var Gb = function() {};
    e["flambe.asset.File"] = Gb;
    Gb.__name__ = ["flambe", "asset", "File"];
    Gb.__interfaces__ = [La];
    Gb.prototype = {
        __class__: Gb
    };
    var aa = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    e["flambe.asset.Manifest"] = aa;
    aa.__name__ = ["flambe", "asset", "Manifest"];
    aa.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = w.field(Rc.getType(aa).assets[0], a);
        if (null == c) {
            if (b)
                throw X.withFields("Missing asset pack", ["name", a]);
            return null
        }
        var i = new aa;
        i.set_localBase("assets");
        for (var d = 0; d < c.length; ) {
            var f = c[d];
            ++d;
            var e = f.name
              , h = a + "/" + e + "?v=" + y.string(f.md5)
              , j = aa.inferFormat(e);
            j != m.Data && (e = X.removeFileExtension(e));
            i.add(e, h, f.bytes, j)
        }
        return i
    }
    ;
    aa.inferFormat = function(a) {
        a = X.getUrlExtension(a);
        if (null != a)
            switch (a.toLowerCase()) {
            case "gif":
                return m.GIF;
            case "jpg":
            case "jpeg":
                return m.JPG;
            case "jxr":
            case "wdp":
                return m.JXR;
            case "png":
                return m.PNG;
            case "webp":
                return m.WEBP;
            case "dds":
                return m.DDS;
            case "pvr":
                return m.PVR;
            case "pkm":
                return m.PKM;
            case "m4a":
                return m.M4A;
            case "mp3":
                return m.MP3;
            case "ogg":
                return m.OGG;
            case "opus":
                return m.OPUS;
            case "wav":
                return m.WAV
            }
        else
            null;
        return m.Data
    }
    ;
    aa.prototype = {
        add: function(a, b, c, i) {
            null == c && (c = 0);
            null == i && (i = aa.inferFormat(b));
            a = new nc(a,b,i,c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return A.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && aa._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? X.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && Sc.that(!na.startsWith(a, "http://") && !na.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: aa
    };
    var I = e["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    I.Normal = ["Normal", 0];
    I.Normal.toString = h;
    I.Normal.__enum__ = I;
    I.Add = ["Add", 1];
    I.Add.toString = h;
    I.Add.__enum__ = I;
    I.Multiply = ["Multiply", 2];
    I.Multiply.toString = h;
    I.Multiply.__enum__ = I;
    I.Screen = ["Screen", 3];
    I.Screen.toString = h;
    I.Screen.__enum__ = I;
    I.Mask = ["Mask", 4];
    I.Mask.toString = h;
    I.Mask.__enum__ = I;
    I.Copy = ["Copy", 5];
    I.Copy.toString = h;
    I.Copy.__enum__ = I;
    var Ca = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    e["flambe.math.Point"] = Ca;
    Ca.__name__ = ["flambe", "math", "Point"];
    Ca.prototype = {
        set: function(a, b) {
            this.x = a;
            this.y = b
        },
        distanceTo: function(a, b) {
            return Math.sqrt(this.distanceToSquared(a, b))
        },
        distanceToSquared: function(a, b) {
            var c = this.x - a
              , i = this.y - b;
            return c * c + i * i
        },
        __class__: Ca
    };
    var u = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        r.call(this);
        this._flags |= 54;
        this._localMatrix = new pa;
        var b = function() {
            a._flags |= 24
        };
        this.x = new G(0,b);
        this.y = new G(0,b);
        this.rotation = new G(0,b);
        this.scaleX = new G(1,b);
        this.scaleY = new G(1,b);
        this.anchorX = new G(0,b);
        this.anchorY = new G(0,b);
        this.alpha = new G(1)
    };
    e["flambe.display.Sprite"] = u;
    u.__name__ = ["flambe", "display", "Sprite"];
    u.hitTest = function(a, b, c) {
        var i = a._compMap.Sprite_3;
        if (null != i) {
            if (6 != (i._flags & 6))
                return null;
            i.getLocalMatrix().inverseTransform(b, c, u._scratchPoint) && (b = u._scratchPoint.x,
            c = u._scratchPoint.y);
            var d = i.scissor;
            if (null != d && !d.contains(b, c))
                return null
        }
        a = u.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != i && i.containsLocal(b, c) ? i : null
    }
    ;
    u.render = function(a, b) {
        var c = a._compMap.Sprite_3;
        if (null != c) {
            var i = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= i)
                return;
            b.save();
            1 > i && b.multiplyAlpha(i);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var i = c.getLocalMatrix()
              , d = i.m02
              , f = i.m12;
            0 != (c._flags & 32) && (d = Math.round(d),
            f = Math.round(f));
            b.transform(i.m00, i.m10, i.m01, i.m11, d, f);
            i = c.scissor;
            null != i && b.applyScissor(i.x, i.y, i.width, i.height);
            c.draw(b)
        }
        i = a._compMap.PostRender_8;
        null != i && i.call();
        i = a._compMap.Director_4;
        if (null != i) {
            i = i.occludedScenes;
            for (d = 0; d < i.length; )
                f = i[d],
                ++d,
                u.render(f, b)
        }
        for (i = a.firstChild; null != i; )
            d = i.next,
            u.render(i, b),
            i = d;
        null != c && b.restore()
    }
    ;
    u.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var i = u.hitTestBackwards(a.next, b, c);
            return null != i ? i : u.hitTest(a, b, c)
        }
        return null
    }
    ;
    u.__super__ = r;
    u.prototype = s(r.prototype, {
        get_name: function() {
            return "Sprite_3"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9,
            this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180),
            this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix = null != a ? pa.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);
                ++this._viewMatrixUpdateCount
            }
            return this._viewMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setRotation: function(a) {
            this.rotation.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        setScaleXY: function(a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(),
            this._hoverConnection = null)
        },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function() {},
        isViewMatrixDirty: function() {
            if (0 != (this._flags & 16))
                return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty()
        },
        getParentSprite: function() {
            if (null == this.owner)
                return null;
            for (var a = this.owner.parent; null != a; ) {
                var b = a._compMap.Sprite_3;
                if (null != b)
                    return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new E);
            return this._pointerDown
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new E);
            return this._pointerUp
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new E);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = k._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c; ) {
                    if (c == a)
                        return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                a._hoverConnection.dispose();
                a._hoverConnection = null
            }))
        },
        set_visible: function(a) {
            this._flags = oc.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = oc.set(this._flags, 4, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 == (this._flags & 64) && (this._flags |= 64,
            null != this._pointerIn || null != this._pointerOut))
                null != this._pointerIn && this._pointerIn.emit(a),
                this.connectHover()
        },
        onPointerUp: function(a) {
            switch (a.source[1]) {
            case 1:
                null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a),
                this._flags &= -65,
                null != this._hoverConnection && (this._hoverConnection.dispose(),
                this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: u
    });
    var xa = function(a, b, c) {
        u.call(this);
        this.color = a;
        this.width = new G(b);
        this.height = new G(c)
    };
    e["flambe.display.FillSprite"] = xa;
    xa.__name__ = ["flambe", "display", "FillSprite"];
    xa.__super__ = u;
    xa.prototype = s(u.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        setSize: function(a, b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function(a) {
            u.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: xa
    });
    var Hb = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    e["flambe.display.Glyph"] = Hb;
    Hb.__name__ = ["flambe", "display", "Glyph"];
    Hb.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? y["int"](this._kernings.get(a)) : 0
        },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new ga);
            this._kernings.set(a, b)
        },
        __class__: Hb
    };
    var Da = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    e["flambe.display.Font"] = Da;
    Da.__name__ = ["flambe", "display", "Font"];
    Da.prototype = {
        layoutText: function(a, b, c, i, d) {
            null == d && (d = 0);
            null == i && (i = 0);
            null == c && (c = 0);
            null == b && (b = ha.Left);
            return new Ma(this,a,b,c,i,d)
        },
        reload: function() {
            this._glyphs = new ga;
            this._glyphs.set(Da.NEWLINE.charCode, Da.NEWLINE);
            for (var a = new Ya(this._file.toString()), b = new ga, c = this.name.lastIndexOf("/"), c = 0 <= c ? A.substr(this.name, 0, c + 1) : "", i = a.keywords(); i.hasNext(); )
                switch (i.next()) {
                case "info":
                    for (var d = a.pairs(); d.hasNext(); ) {
                        var f = d.next();
                        switch (f.key) {
                        case "size":
                            this.size = f.getInt()
                        }
                    }
                    break;
                case "common":
                    for (d = a.pairs(); d.hasNext(); )
                        switch (f = d.next(),
                        f.key) {
                        case "lineHeight":
                            this.lineHeight = f.getInt()
                        }
                    break;
                case "page":
                    for (var d = 0, f = null, e = a.pairs(); e.hasNext(); ) {
                        var h = e.next();
                        switch (h.key) {
                        case "id":
                            d = h.getInt();
                            break;
                        case "file":
                            f = h.getString()
                        }
                    }
                    f = this._pack.getTexture(c + X.removeFileExtension(f));
                    b.set(d, f);
                    break;
                case "char":
                    d = null;
                    for (f = a.pairs(); f.hasNext(); )
                        switch (e = f.next(),
                        e.key) {
                        case "id":
                            d = new Hb(e.getInt());
                            break;
                        case "x":
                            d.x = e.getInt();
                            break;
                        case "y":
                            d.y = e.getInt();
                            break;
                        case "width":
                            d.width = e.getInt();
                            break;
                        case "height":
                            d.height = e.getInt();
                            break;
                        case "page":
                            e = e.getInt();
                            d.page = b.get(e);
                            break;
                        case "xoffset":
                            d.xOffset = e.getInt();
                            break;
                        case "yoffset":
                            d.yOffset = e.getInt();
                            break;
                        case "xadvance":
                            d.xAdvance = e.getInt()
                        }
                    this._glyphs.set(d.charCode, d);
                    break;
                case "kerning":
                    d = null;
                    e = f = 0;
                    for (h = a.pairs(); h.hasNext(); ) {
                        var j = h.next();
                        switch (j.key) {
                        case "first":
                            d = this._glyphs.get(j.getInt());
                            break;
                        case "second":
                            f = j.getInt();
                            break;
                        case "amount":
                            e = j.getInt()
                        }
                    }
                    null != d && 0 != e && d.setKerning(f, e)
                }
        },
        __class__: Da
    };
    var ha = e["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    ha.Left = ["Left", 0];
    ha.Left.toString = h;
    ha.Left.__enum__ = ha;
    ha.Center = ["Center", 1];
    ha.Center.toString = h;
    ha.Center.__enum__ = ha;
    ha.Right = ["Right", 2];
    ha.Right.toString = h;
    ha.Right.__enum__ = ha;
    var Ma = function(a, b, c, i, d, f) {
        this.lines = 0;
        var e = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + f);
        this.bounds = new Za;
        for (var h = [], f = b.length, j = 0; j < f; ) {
            var k = j++
              , k = b.charCodeAt(k)
              , k = a._glyphs.get(k);
            null != k ? this._glyphs.push(k) : null
        }
        for (var b = -1, l = 0, m = 0, a = a._glyphs.get(10), f = function() {
            e.bounds.width = qa.max(e.bounds.width, l);
            e.bounds.height += m;
            h[e.lines] = l;
            m = l = 0;
            ++e.lines
        }, j = 0; j < this._glyphs.length; ) {
            k = this._glyphs[j];
            this._offsets[j] = Math.round(l);
            var n = 0 < i && l + k.width > i;
            n || k == a ? (n && (0 <= b ? (this._glyphs[b] = a,
            l = this._offsets[b],
            j = b) : this._glyphs.splice(j, 0, a)),
            b = -1,
            m = this._lineOffset,
            f()) : (32 == k.charCode && (b = j),
            l += k.xAdvance + d,
            m = qa.max(m, k.height + k.yOffset),
            j + 1 < this._glyphs.length && (l += k.getKerning(this._glyphs[j + 1].charCode)));
            ++j
        }
        f();
        d = 0;
        a = Ma.getAlignOffset(c, h[0], i);
        b = 1.79769313486231E308;
        f = -1.79769313486231E308;
        k = j = 0;
        for (n = this._glyphs.length; k < n; ) {
            var o = this._glyphs[k];
            10 == o.charCode && (d += this._lineOffset,
            ++j,
            a = Ma.getAlignOffset(c, h[j], i));
            this._offsets[k] += a;
            var p = d + o.yOffset;
            b < p || (b = p);
            f = qa.max(f, p + o.height);
            ++k
        }
        this.bounds.x = Ma.getAlignOffset(c, this.bounds.width, i);
        this.bounds.y = b;
        this.bounds.height = f - b
    };
    e["flambe.display.TextLayout"] = Ma;
    Ma.__name__ = ["flambe", "display", "TextLayout"];
    Ma.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
        case 0:
            return 0;
        case 2:
            return c - b;
        case 1:
            return Math.round((c - b) / 2)
        }
    }
    ;
    Ma.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, i = this._glyphs.length; c < i; ) {
                var d = this._glyphs[c];
                10 == d.charCode ? b += this._lineOffset : d.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Ma
    };
    var Ya = function(a) {
        this._configText = a;
        this._keywordPattern = new wa("([A-Za-z]+)(.*)","");
        this._pairPattern = new wa('([A-Za-z]+)=("[^"]*"|[^\\s]+)',"")
    };
    e["flambe.display._Font.ConfigParser"] = Ya;
    Ya.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Ya.advance = function(a, b) {
        var c = b.matchedPos();
        return A.substr(a, c.pos + c.len, a.length)
    }
    ;
    Ya.prototype = {
        keywords: function() {
            var a = this
              , b = this._configText;
            return {
                next: function() {
                    b = Ya.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this
              , b = this._pairText;
            return {
                next: function() {
                    b = Ya.advance(b, a._pairPattern);
                    return new pc(a._pairPattern.matched(1),a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Ya
    };
    var pc = function(a, b) {
        this.key = a;
        this._value = b
    };
    e["flambe.display._Font.ConfigPair"] = pc;
    pc.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    pc.prototype = {
        getInt: function() {
            return y.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : A.substr(this._value, 1, this._value.length - 2)
        },
        __class__: pc
    };
    var qc = function() {};
    e["flambe.display.Graphics"] = qc;
    qc.__name__ = ["flambe", "display", "Graphics"];
    qc.prototype = {
        __class__: qc
    };
    var ra = function(a) {
        u.call(this);
        this.texture = a
    };
    e["flambe.display.ImageSprite"] = ra;
    ra.__name__ = ["flambe", "display", "ImageSprite"];
    ra.__super__ = u;
    ra.prototype = s(u.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: ra
    });
    var ia = e["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    ia.Portrait = ["Portrait", 0];
    ia.Portrait.toString = h;
    ia.Portrait.__enum__ = ia;
    ia.Landscape = ["Landscape", 1];
    ia.Landscape.toString = h;
    ia.Landscape.__enum__ = ia;
    var Ea = function(a, b, c) {
        null == c && (c = -1);
        null == b && (b = -1);
        u.call(this);
        this.texture = a;
        0 > b && (b = null != a ? a.get_width() : 0);
        this.width = new G(b);
        0 > c && (c = null != a ? a.get_height() : 0);
        this.height = new G(c)
    };
    e["flambe.display.PatternSprite"] = Ea;
    Ea.__name__ = ["flambe", "display", "PatternSprite"];
    Ea.__super__ = u;
    Ea.prototype = s(u.prototype, {
        draw: function(a) {
            null != this.texture && a.drawPattern(this.texture, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        setSize: function(a, b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function(a) {
            u.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: Ea
    });
    var Ib = function() {};
    e["flambe.display.Texture"] = Ib;
    Ib.__name__ = ["flambe", "display", "Texture"];
    Ib.__interfaces__ = [La];
    Ib.prototype = {
        __class__: Ib
    };
    var Tc = function() {};
    e["flambe.display.SubTexture"] = Tc;
    Tc.__name__ = ["flambe", "display", "SubTexture"];
    Tc.__interfaces__ = [Ib];
    var Na = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        u.call(this);
        this._font = a;
        this._text = b;
        this._align = ha.Left;
        this._flags |= 128;
        var i = function() {
            c._flags |= 128
        };
        this.wrapWidth = new G(0,i);
        this.letterSpacing = new G(0,i);
        this.lineSpacing = new G(0,i)
    };
    e["flambe.display.TextSprite"] = Na;
    Na.__name__ = ["flambe", "display", "TextSprite"];
    Na.__super__ = u;
    Na.prototype = s(u.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value)
              , b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        setLetterSpacing: function(a) {
            this.letterSpacing.set__(a);
            return this
        },
        set_text: function(a) {
            a != this._text && (this._text = a,
            this._flags |= 128);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 128) && (this._flags &= -129,
            this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            u.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: Na
    });
    var d = e["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",")
    };
    d.A = ["A", 0];
    d.A.toString = h;
    d.A.__enum__ = d;
    d.B = ["B", 1];
    d.B.toString = h;
    d.B.__enum__ = d;
    d.C = ["C", 2];
    d.C.toString = h;
    d.C.__enum__ = d;
    d.D = ["D", 3];
    d.D.toString = h;
    d.D.__enum__ = d;
    d.E = ["E", 4];
    d.E.toString = h;
    d.E.__enum__ = d;
    d.F = ["F", 5];
    d.F.toString = h;
    d.F.__enum__ = d;
    d.G = ["G", 6];
    d.G.toString = h;
    d.G.__enum__ = d;
    d.H = ["H", 7];
    d.H.toString = h;
    d.H.__enum__ = d;
    d.I = ["I", 8];
    d.I.toString = h;
    d.I.__enum__ = d;
    d.J = ["J", 9];
    d.J.toString = h;
    d.J.__enum__ = d;
    d.K = ["K", 10];
    d.K.toString = h;
    d.K.__enum__ = d;
    d.L = ["L", 11];
    d.L.toString = h;
    d.L.__enum__ = d;
    d.M = ["M", 12];
    d.M.toString = h;
    d.M.__enum__ = d;
    d.N = ["N", 13];
    d.N.toString = h;
    d.N.__enum__ = d;
    d.O = ["O", 14];
    d.O.toString = h;
    d.O.__enum__ = d;
    d.P = ["P", 15];
    d.P.toString = h;
    d.P.__enum__ = d;
    d.Q = ["Q", 16];
    d.Q.toString = h;
    d.Q.__enum__ = d;
    d.R = ["R", 17];
    d.R.toString = h;
    d.R.__enum__ = d;
    d.S = ["S", 18];
    d.S.toString = h;
    d.S.__enum__ = d;
    d.T = ["T", 19];
    d.T.toString = h;
    d.T.__enum__ = d;
    d.U = ["U", 20];
    d.U.toString = h;
    d.U.__enum__ = d;
    d.V = ["V", 21];
    d.V.toString = h;
    d.V.__enum__ = d;
    d.W = ["W", 22];
    d.W.toString = h;
    d.W.__enum__ = d;
    d.X = ["X", 23];
    d.X.toString = h;
    d.X.__enum__ = d;
    d.Y = ["Y", 24];
    d.Y.toString = h;
    d.Y.__enum__ = d;
    d.Z = ["Z", 25];
    d.Z.toString = h;
    d.Z.__enum__ = d;
    d.Number0 = ["Number0", 26];
    d.Number0.toString = h;
    d.Number0.__enum__ = d;
    d.Number1 = ["Number1", 27];
    d.Number1.toString = h;
    d.Number1.__enum__ = d;
    d.Number2 = ["Number2", 28];
    d.Number2.toString = h;
    d.Number2.__enum__ = d;
    d.Number3 = ["Number3", 29];
    d.Number3.toString = h;
    d.Number3.__enum__ = d;
    d.Number4 = ["Number4", 30];
    d.Number4.toString = h;
    d.Number4.__enum__ = d;
    d.Number5 = ["Number5", 31];
    d.Number5.toString = h;
    d.Number5.__enum__ = d;
    d.Number6 = ["Number6", 32];
    d.Number6.toString = h;
    d.Number6.__enum__ = d;
    d.Number7 = ["Number7", 33];
    d.Number7.toString = h;
    d.Number7.__enum__ = d;
    d.Number8 = ["Number8", 34];
    d.Number8.toString = h;
    d.Number8.__enum__ = d;
    d.Number9 = ["Number9", 35];
    d.Number9.toString = h;
    d.Number9.__enum__ = d;
    d.Numpad0 = ["Numpad0", 36];
    d.Numpad0.toString = h;
    d.Numpad0.__enum__ = d;
    d.Numpad1 = ["Numpad1", 37];
    d.Numpad1.toString = h;
    d.Numpad1.__enum__ = d;
    d.Numpad2 = ["Numpad2", 38];
    d.Numpad2.toString = h;
    d.Numpad2.__enum__ = d;
    d.Numpad3 = ["Numpad3", 39];
    d.Numpad3.toString = h;
    d.Numpad3.__enum__ = d;
    d.Numpad4 = ["Numpad4", 40];
    d.Numpad4.toString = h;
    d.Numpad4.__enum__ = d;
    d.Numpad5 = ["Numpad5", 41];
    d.Numpad5.toString = h;
    d.Numpad5.__enum__ = d;
    d.Numpad6 = ["Numpad6", 42];
    d.Numpad6.toString = h;
    d.Numpad6.__enum__ = d;
    d.Numpad7 = ["Numpad7", 43];
    d.Numpad7.toString = h;
    d.Numpad7.__enum__ = d;
    d.Numpad8 = ["Numpad8", 44];
    d.Numpad8.toString = h;
    d.Numpad8.__enum__ = d;
    d.Numpad9 = ["Numpad9", 45];
    d.Numpad9.toString = h;
    d.Numpad9.__enum__ = d;
    d.NumpadAdd = ["NumpadAdd", 46];
    d.NumpadAdd.toString = h;
    d.NumpadAdd.__enum__ = d;
    d.NumpadDecimal = ["NumpadDecimal", 47];
    d.NumpadDecimal.toString = h;
    d.NumpadDecimal.__enum__ = d;
    d.NumpadDivide = ["NumpadDivide", 48];
    d.NumpadDivide.toString = h;
    d.NumpadDivide.__enum__ = d;
    d.NumpadEnter = ["NumpadEnter", 49];
    d.NumpadEnter.toString = h;
    d.NumpadEnter.__enum__ = d;
    d.NumpadMultiply = ["NumpadMultiply", 50];
    d.NumpadMultiply.toString = h;
    d.NumpadMultiply.__enum__ = d;
    d.NumpadSubtract = ["NumpadSubtract", 51];
    d.NumpadSubtract.toString = h;
    d.NumpadSubtract.__enum__ = d;
    d.F1 = ["F1", 52];
    d.F1.toString = h;
    d.F1.__enum__ = d;
    d.F2 = ["F2", 53];
    d.F2.toString = h;
    d.F2.__enum__ = d;
    d.F3 = ["F3", 54];
    d.F3.toString = h;
    d.F3.__enum__ = d;
    d.F4 = ["F4", 55];
    d.F4.toString = h;
    d.F4.__enum__ = d;
    d.F5 = ["F5", 56];
    d.F5.toString = h;
    d.F5.__enum__ = d;
    d.F6 = ["F6", 57];
    d.F6.toString = h;
    d.F6.__enum__ = d;
    d.F7 = ["F7", 58];
    d.F7.toString = h;
    d.F7.__enum__ = d;
    d.F8 = ["F8", 59];
    d.F8.toString = h;
    d.F8.__enum__ = d;
    d.F9 = ["F9", 60];
    d.F9.toString = h;
    d.F9.__enum__ = d;
    d.F10 = ["F10", 61];
    d.F10.toString = h;
    d.F10.__enum__ = d;
    d.F11 = ["F11", 62];
    d.F11.toString = h;
    d.F11.__enum__ = d;
    d.F12 = ["F12", 63];
    d.F12.toString = h;
    d.F12.__enum__ = d;
    d.F13 = ["F13", 64];
    d.F13.toString = h;
    d.F13.__enum__ = d;
    d.F14 = ["F14", 65];
    d.F14.toString = h;
    d.F14.__enum__ = d;
    d.F15 = ["F15", 66];
    d.F15.toString = h;
    d.F15.__enum__ = d;
    d.Left = ["Left", 67];
    d.Left.toString = h;
    d.Left.__enum__ = d;
    d.Up = ["Up", 68];
    d.Up.toString = h;
    d.Up.__enum__ = d;
    d.Right = ["Right", 69];
    d.Right.toString = h;
    d.Right.__enum__ = d;
    d.Down = ["Down", 70];
    d.Down.toString = h;
    d.Down.__enum__ = d;
    d.Alt = ["Alt", 71];
    d.Alt.toString = h;
    d.Alt.__enum__ = d;
    d.Backquote = ["Backquote", 72];
    d.Backquote.toString = h;
    d.Backquote.__enum__ = d;
    d.Backslash = ["Backslash", 73];
    d.Backslash.toString = h;
    d.Backslash.__enum__ = d;
    d.Backspace = ["Backspace", 74];
    d.Backspace.toString = h;
    d.Backspace.__enum__ = d;
    d.CapsLock = ["CapsLock", 75];
    d.CapsLock.toString = h;
    d.CapsLock.__enum__ = d;
    d.Comma = ["Comma", 76];
    d.Comma.toString = h;
    d.Comma.__enum__ = d;
    d.Command = ["Command", 77];
    d.Command.toString = h;
    d.Command.__enum__ = d;
    d.Control = ["Control", 78];
    d.Control.toString = h;
    d.Control.__enum__ = d;
    d.Delete = ["Delete", 79];
    d.Delete.toString = h;
    d.Delete.__enum__ = d;
    d.End = ["End", 80];
    d.End.toString = h;
    d.End.__enum__ = d;
    d.Enter = ["Enter", 81];
    d.Enter.toString = h;
    d.Enter.__enum__ = d;
    d.Equals = ["Equals", 82];
    d.Equals.toString = h;
    d.Equals.__enum__ = d;
    d.Escape = ["Escape", 83];
    d.Escape.toString = h;
    d.Escape.__enum__ = d;
    d.Home = ["Home", 84];
    d.Home.toString = h;
    d.Home.__enum__ = d;
    d.Insert = ["Insert", 85];
    d.Insert.toString = h;
    d.Insert.__enum__ = d;
    d.LeftBracket = ["LeftBracket", 86];
    d.LeftBracket.toString = h;
    d.LeftBracket.__enum__ = d;
    d.Minus = ["Minus", 87];
    d.Minus.toString = h;
    d.Minus.__enum__ = d;
    d.PageDown = ["PageDown", 88];
    d.PageDown.toString = h;
    d.PageDown.__enum__ = d;
    d.PageUp = ["PageUp", 89];
    d.PageUp.toString = h;
    d.PageUp.__enum__ = d;
    d.Period = ["Period", 90];
    d.Period.toString = h;
    d.Period.__enum__ = d;
    d.Quote = ["Quote", 91];
    d.Quote.toString = h;
    d.Quote.__enum__ = d;
    d.RightBracket = ["RightBracket", 92];
    d.RightBracket.toString = h;
    d.RightBracket.__enum__ = d;
    d.Semicolon = ["Semicolon", 93];
    d.Semicolon.toString = h;
    d.Semicolon.__enum__ = d;
    d.Shift = ["Shift", 94];
    d.Shift.toString = h;
    d.Shift.__enum__ = d;
    d.Slash = ["Slash", 95];
    d.Slash.toString = h;
    d.Slash.__enum__ = d;
    d.Space = ["Space", 96];
    d.Space.toString = h;
    d.Space.__enum__ = d;
    d.Tab = ["Tab", 97];
    d.Tab.toString = h;
    d.Tab.__enum__ = d;
    d.Menu = ["Menu", 98];
    d.Menu.toString = h;
    d.Menu.__enum__ = d;
    d.Search = ["Search", 99];
    d.Search.toString = h;
    d.Search.__enum__ = d;
    d.Unknown = function(a) {
        a = ["Unknown", 100, a];
        a.__enum__ = d;
        a.toString = h;
        return a
    }
    ;
    var rc = function() {
        this.init(0, null)
    };
    e["flambe.input.KeyboardEvent"] = rc;
    rc.__name__ = ["flambe", "input", "KeyboardEvent"];
    rc.prototype = {
        init: function(a, b) {
            this.id = a;
            this.key = b
        },
        __class__: rc
    };
    var U = e["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    U.Left = ["Left", 0];
    U.Left.toString = h;
    U.Left.__enum__ = U;
    U.Middle = ["Middle", 1];
    U.Middle.toString = h;
    U.Middle.__enum__ = U;
    U.Right = ["Right", 2];
    U.Right.toString = h;
    U.Right.__enum__ = U;
    U.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = U;
        a.toString = h;
        return a
    }
    ;
    var sa = e["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    sa.Default = ["Default", 0];
    sa.Default.toString = h;
    sa.Default.__enum__ = sa;
    sa.Button = ["Button", 1];
    sa.Button.toString = h;
    sa.Button.__enum__ = sa;
    sa.None = ["None", 2];
    sa.None.toString = h;
    sa.None.__enum__ = sa;
    var sc = function() {
        this.init(0, 0, 0, null)
    };
    e["flambe.input.MouseEvent"] = sc;
    sc.__name__ = ["flambe", "input", "MouseEvent"];
    sc.prototype = {
        init: function(a, b, c, i) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = i
        },
        __class__: sc
    };
    var Jb = e["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    Jb.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Jb;
        a.toString = h;
        return a
    }
    ;
    Jb.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = Jb;
        a.toString = h;
        return a
    }
    ;
    var tc = function() {
        this.init(0, 0, 0, null, null)
    };
    e["flambe.input.PointerEvent"] = tc;
    tc.__name__ = ["flambe", "input", "PointerEvent"];
    tc.prototype = {
        init: function(a, b, c, i, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = i;
            this.source = d;
            this._stopped = !1
        },
        __class__: tc
    };
    var uc = function(a) {
        this.id = a;
        this._source = Jb.Touch(this)
    };
    e["flambe.input.TouchPoint"] = uc;
    uc.__name__ = ["flambe", "input", "TouchPoint"];
    uc.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: uc
    };
    var qa = function() {};
    e["flambe.math.FMath"] = qa;
    qa.__name__ = ["flambe", "math", "FMath"];
    qa.max = function(a, b) {
        return a > b ? a : b
    }
    ;
    qa.min = function(a, b) {
        return a < b ? a : b
    }
    ;
    var pa = function() {
        this.identity()
    };
    e["flambe.math.Matrix"] = pa;
    pa.__name__ = ["flambe", "math", "Matrix"];
    pa.multiply = function(a, b, c) {
        null == c && (c = new pa);
        var i = a.m00 * b.m00 + a.m01 * b.m10
          , d = a.m00 * b.m01 + a.m01 * b.m11
          , f = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = i;
        c.m01 = d;
        c.m02 = f;
        i = a.m10 * b.m00 + a.m11 * b.m10;
        d = a.m10 * b.m01 + a.m11 * b.m11;
        f = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = i;
        c.m11 = d;
        c.m12 = f;
        return c
    }
    ;
    pa.prototype = {
        set: function(a, b, c, i, d, f) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = d;
            this.m10 = b;
            this.m11 = i;
            this.m12 = f
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(a, b, c, i, d) {
            var f = Math.sin(d)
              , d = Math.cos(d);
            this.set(d * c, f * c, -f * i, d * i, a, b)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        invert: function() {
            var a = this.determinant();
            if (0 == a)
                return !1;
            this.set(this.m11 / a, -this.m01 / a, -this.m10 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) {
            null == c && (c = new Ca);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
        },
        transformArray: function(a, b, c) {
            for (var i = 0; i < b; ) {
                var d = a[i]
                  , f = a[i + 1];
                c[i++] = d * this.m00 + f * this.m01 + this.m02;
                c[i++] = d * this.m10 + f * this.m11 + this.m12
            }
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a, b, c) {
            var i = this.determinant();
            if (0 == i)
                return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / i;
            c.y = (b * this.m00 - a * this.m10) / i;
            return !0
        },
        clone: function(a) {
            null == a && (a = new pa);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: pa
    };
    var Za = function(a, b, c, i) {
        null == i && (i = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, i)
    };
    e["flambe.math.Rectangle"] = Za;
    Za.__name__ = ["flambe", "math", "Rectangle"];
    Za.prototype = {
        set: function(a, b, c, i) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = i
        },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width)
                    return !1
            } else if (0 < a || a < this.width)
                return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height)
                    return !1
            } else if (0 < b || b < this.height)
                return !1;
            return !0
        },
        clone: function(a) {
            null == a && (a = new Za);
            a.set(this.x, this.y, this.width, this.height);
            return a
        },
        equals: function(a) {
            return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        __class__: Za
    };
    var R = function() {
        this._disposed = !1
    };
    e["flambe.platform.BasicAsset"] = R;
    R.__name__ = ["flambe", "platform", "BasicAsset"];
    R.__interfaces__ = [La];
    R.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0,
            this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: R
    };
    var Oa = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Kb;
        this._bytesLoaded = new ba;
        this._pack = new Lb(b,this);
        var i = vb.array(b);
        if (0 == i.length)
            this.handleSuccess();
        else {
            for (var d = new ba, f = 0; f < i.length; ) {
                var e = i[f];
                ++f;
                var h = d.get(e.name);
                null == h && (h = [],
                d.set(e.name, h));
                h.push(e)
            }
            this._assetsRemaining = vb.count(d);
            for (i = d.iterator(); i.hasNext(); )
                d = [i.next()],
                this.pickBestEntry(d[0], function(a) {
                    return function(i) {
                        if (null != i) {
                            var d = b.getFullURL(i);
                            try {
                                c.loadEntry(d, i)
                            } catch (g) {
                                c.handleError(i, "Unexpected error: " + y.string(g))
                            }
                            d = c.promise;
                            d.set_total(d._total + i.bytes)
                        } else
                            i = a[0][0],
                            Oa.isAudio(i.format) ? c.handleLoad(i, ja.getInstance()) : c.handleError(i, "Could not find a supported format to load")
                    }
                }(d))
        }
    };
    e["flambe.platform.BasicAssetPackLoader"] = Oa;
    Oa.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Oa.isAudio = function(a) {
        switch (a[1]) {
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return !0;
        default:
            return !1
        }
    }
    ;
    Oa.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var i = 0; i < c.length; ) {
                    var d = c[i];
                    ++i;
                    for (var f = 0; f < a.length; ) {
                        var e = a[f];
                        ++f;
                        if (e.format == d) {
                            b(e);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    c = this._pack.textures;
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    c = this._pack.sounds;
                    break;
                case 13:
                    c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, i = this._bytesLoaded.iterator(); i.hasNext(); )
                var d = i.next()
                  , c = c + d;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(X.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Oa
    };
    var Lb = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new ba;
        this.sounds = new ba;
        this.files = new ba
    };
    e["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Lb;
    Lb.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    Lb.__interfaces__ = [Fb];
    Lb.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b)
                throw X.withFields("Missing texture", ["name", a]);
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b)
                throw X.withFields("Missing sound", ["name", a]);
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b)
                throw X.withFields("Missing file", ["name", a]);
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext(); )
                    a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext(); )
                    a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext(); )
                    a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: Lb
    };
    var jb = function(a) {
        this._disposed = !1;
        this._content = a
    };
    e["flambe.platform.BasicFile"] = jb;
    jb.__name__ = ["flambe", "platform", "BasicFile"];
    jb.__interfaces__ = [Gb];
    jb.__super__ = R;
    jb.prototype = s(R.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: jb
    });
    var vc = function() {};
    e["flambe.subsystem.KeyboardSystem"] = vc;
    vc.__name__ = ["flambe", "subsystem", "KeyboardSystem"];
    vc.prototype = {
        __class__: vc
    };
    var oa = function() {
        this.down = new E;
        this.up = new E;
        this.backButton = new Fa;
        this._keyStates = new ga
    };
    e["flambe.platform.BasicKeyboard"] = oa;
    oa.__name__ = ["flambe", "platform", "BasicKeyboard"];
    oa.__interfaces__ = [vc];
    oa.prototype = {
        submitDown: function(a) {
            if (16777238 == a)
                return null != this.backButton._head ? (this.backButton.emit(),
                !0) : !1;
            this._keyStates.exists(a) || (this._keyStates.set(a, !0),
            oa._sharedEvent.init(oa._sharedEvent.id + 1, wc.toKey(a)),
            this.down.emit(oa._sharedEvent));
            return !0
        },
        submitUp: function(a) {
            this._keyStates.exists(a) && (this._keyStates.remove(a),
            oa._sharedEvent.init(oa._sharedEvent.id + 1, wc.toKey(a)),
            this.up.emit(oa._sharedEvent))
        },
        __class__: oa
    };
    var xc = function() {};
    e["flambe.subsystem.MouseSystem"] = xc;
    xc.__name__ = ["flambe", "subsystem", "MouseSystem"];
    xc.prototype = {
        __class__: xc
    };
    var da = function(a) {
        this._pointer = a;
        this._source = Jb.Mouse(da._sharedEvent);
        this.down = new E;
        this.move = new E;
        this.up = new E;
        this.scroll = new E;
        this._y = this._x = 0;
        this._cursor = sa.Default;
        this._buttonStates = new ga
    };
    e["flambe.platform.BasicMouse"] = da;
    da.__name__ = ["flambe", "platform", "BasicMouse"];
    da.__interfaces__ = [xc];
    da.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.set(c, !0),
            this.prepare(a, b, yc.toButton(c)),
            this._pointer.submitDown(a, b, this._source),
            this.down.emit(da._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(da._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c),
            this.prepare(a, b, yc.toButton(c)),
            this._pointer.submitUp(a, b, this._source),
            this.up.emit(da._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head)
                return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            da._sharedEvent.init(da._sharedEvent.id + 1, a, b, c)
        },
        __class__: da
    };
    var zc = function() {};
    e["flambe.subsystem.PointerSystem"] = zc;
    zc.__name__ = ["flambe", "subsystem", "PointerSystem"];
    zc.prototype = {
        __class__: zc
    };
    var S = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new E;
        this.move = new E;
        this.up = new E;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    e["flambe.platform.BasicPointer"] = S;
    S.__name__ = ["flambe", "platform", "BasicPointer"];
    S.__interfaces__ = [zc];
    S.prototype = {
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var i = []
                  , d = u.hitTest(k.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do {
                        var e = f._compMap.Sprite_3;
                        null != e && i.push(e);
                        f = f.parent
                    } while (null != f)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < i.length; )
                    if (b = i[a],
                    ++a,
                    b.onPointerDown(S._sharedEvent),
                    S._sharedEvent._stopped)
                        return;
                this.down.emit(S._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var i = []
                  , d = u.hitTest(k.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do {
                        var e = f._compMap.Sprite_3;
                        null != e && i.push(e);
                        f = f.parent
                    } while (null != f)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < i.length; )
                    if (b = i[a],
                    ++a,
                    b.onPointerMove(S._sharedEvent),
                    S._sharedEvent._stopped)
                        return;
                this.move.emit(S._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var i = []
                  , d = u.hitTest(k.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do {
                        var e = f._compMap.Sprite_3;
                        null != e && i.push(e);
                        f = f.parent
                    } while (null != f)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < i.length; )
                    if (b = i[a],
                    ++a,
                    b.onPointerUp(S._sharedEvent),
                    S._sharedEvent._stopped)
                        return;
                this.up.emit(S._sharedEvent)
            }
        },
        prepare: function(a, b, c, i) {
            this._x = a;
            this._y = b;
            S._sharedEvent.init(S._sharedEvent.id + 1, a, b, c, i)
        },
        __class__: S
    };
    var va = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    e["flambe.platform.BasicTexture"] = va;
    va.__name__ = ["flambe", "platform", "BasicTexture"];
    va.__interfaces__ = [Tc];
    va.__super__ = R;
    va.prototype = s(R.prototype, {
        subTexture: function(a, b, c, i) {
            c = this.root.createTexture(c, i);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: va
    });
    var Mb = function() {};
    e["flambe.subsystem.TouchSystem"] = Mb;
    Mb.__name__ = ["flambe", "subsystem", "TouchSystem"];
    Mb.prototype = {
        __class__: Mb
    };
    var Ab = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new ga;
        this._points = [];
        this.down = new E;
        this.move = new E;
        this.up = new E
    };
    e["flambe.platform.BasicTouch"] = Ab;
    Ab.__name__ = ["flambe", "platform", "BasicTouch"];
    Ab.__interfaces__ = [Mb];
    Ab.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.exists(a)) {
                var i = new uc(a);
                i.init(b, c);
                this._pointMap.set(a, i);
                this._points.push(i);
                null == this._pointerTouch && (this._pointerTouch = i,
                this._pointer.submitDown(b, c, i._source));
                this.down.emit(i)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a.init(b, c),
            this._pointerTouch == a && this._pointer.submitMove(b, c, a._source),
            this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var i = this._pointMap.get(a);
            null != i && (i.init(b, c),
            this._pointMap.remove(a),
            A.remove(this._points, i),
            this._pointerTouch == i && (this._pointerTouch = null,
            this._pointer.submitUp(b, c, i._source)),
            this.up.emit(i))
        },
        __class__: Ab
    };
    var $a = function() {};
    e["flambe.sound.Sound"] = $a;
    $a.__name__ = ["flambe", "sound", "Sound"];
    $a.__interfaces__ = [La];
    $a.prototype = {
        __class__: $a
    };
    var ja = function() {
        this._disposed = !1;
        this._playback = new Nb(this)
    };
    e["flambe.platform.DummySound"] = ja;
    ja.__name__ = ["flambe", "platform", "DummySound"];
    ja.__interfaces__ = [$a];
    ja.getInstance = function() {
        null == ja._instance && (ja._instance = new ja);
        return ja._instance
    }
    ;
    ja.__super__ = R;
    ja.prototype = s(R.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: ja
    });
    var Ob = function() {};
    e["flambe.sound.Playback"] = Ob;
    Ob.__name__ = ["flambe", "sound", "Playback"];
    Ob.__interfaces__ = [ta];
    var Nb = function(a) {
        this._sound = a;
        this.volume = new G(0);
        this._complete = new T(!0)
    };
    e["flambe.platform.DummyPlayback"] = Nb;
    Nb.__name__ = ["flambe", "platform", "DummyPlayback"];
    Nb.__interfaces__ = [Ob];
    Nb.prototype = {
        dispose: function() {},
        __class__: Nb
    };
    var Pb = function() {};
    e["flambe.subsystem.StorageSystem"] = Pb;
    Pb.__name__ = ["flambe", "subsystem", "StorageSystem"];
    Pb.prototype = {
        __class__: Pb
    };
    var Db = function() {
        this.clear()
    };
    e["flambe.platform.DummyStorage"] = Db;
    Db.__name__ = ["flambe", "platform", "DummyStorage"];
    Db.__interfaces__ = [Pb];
    Db.prototype = {
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        get: function(a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        clear: function() {
            this._hash = new ba
        },
        __class__: Db
    };
    var Bb = function() {
        this.down = new E;
        this.move = new E;
        this.up = new E
    };
    e["flambe.platform.DummyTouch"] = Bb;
    Bb.__name__ = ["flambe", "platform", "DummyTouch"];
    Bb.__interfaces__ = [Mb];
    Bb.prototype = {
        get_supported: function() {
            return !1
        },
        __class__: Bb
    };
    var kb = function() {
        this._entries = []
    };
    e["flambe.platform.EventGroup"] = kb;
    kb.__name__ = ["flambe", "platform", "EventGroup"];
    kb.__interfaces__ = [ta];
    kb.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new Ac(a,b,c))
        },
        addDisposingListener: function(a, b, c) {
            var i = this;
            this.addListener(a, b, function(a) {
                i.dispose();
                c(a)
            })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length; ) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: kb
    };
    var Ac = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    e["flambe.platform._EventGroup.Entry"] = Ac;
    Ac.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    Ac.prototype = {
        __class__: Ac
    };
    var lb = function() {};
    e["flambe.platform.InternalGraphics"] = lb;
    lb.__name__ = ["flambe", "platform", "InternalGraphics"];
    lb.__interfaces__ = [qc];
    lb.prototype = {
        __class__: lb
    };
    var Bc = function() {};
    e["flambe.subsystem.RendererSystem"] = Bc;
    Bc.__name__ = ["flambe", "subsystem", "RendererSystem"];
    Bc.prototype = {
        __class__: Bc
    };
    var mb = function() {};
    e["flambe.platform.InternalRenderer"] = mb;
    mb.__name__ = ["flambe", "platform", "InternalRenderer"];
    mb.__interfaces__ = [Bc];
    mb.prototype = {
        __class__: mb
    };
    var wc = function() {};
    e["flambe.platform.KeyCodes"] = wc;
    wc.__name__ = ["flambe", "platform", "KeyCodes"];
    wc.toKey = function(a) {
        switch (a) {
        case 65:
            return d.A;
        case 66:
            return d.B;
        case 67:
            return d.C;
        case 68:
            return d.D;
        case 69:
            return d.E;
        case 70:
            return d.F;
        case 71:
            return d.G;
        case 72:
            return d.H;
        case 73:
            return d.I;
        case 74:
            return d.J;
        case 75:
            return d.K;
        case 76:
            return d.L;
        case 77:
            return d.M;
        case 78:
            return d.N;
        case 79:
            return d.O;
        case 80:
            return d.P;
        case 81:
            return d.Q;
        case 82:
            return d.R;
        case 83:
            return d.S;
        case 84:
            return d.T;
        case 85:
            return d.U;
        case 86:
            return d.V;
        case 87:
            return d.W;
        case 88:
            return d.X;
        case 89:
            return d.Y;
        case 90:
            return d.Z;
        case 48:
            return d.Number0;
        case 49:
            return d.Number1;
        case 50:
            return d.Number2;
        case 51:
            return d.Number3;
        case 52:
            return d.Number4;
        case 53:
            return d.Number5;
        case 54:
            return d.Number6;
        case 55:
            return d.Number7;
        case 56:
            return d.Number8;
        case 57:
            return d.Number9;
        case 96:
            return d.Numpad0;
        case 97:
            return d.Numpad1;
        case 98:
            return d.Numpad2;
        case 99:
            return d.Numpad3;
        case 100:
            return d.Numpad4;
        case 101:
            return d.Numpad5;
        case 102:
            return d.Numpad6;
        case 103:
            return d.Numpad7;
        case 104:
            return d.Numpad8;
        case 105:
            return d.Numpad9;
        case 107:
            return d.NumpadAdd;
        case 110:
            return d.NumpadDecimal;
        case 111:
            return d.NumpadDivide;
        case 108:
            return d.NumpadEnter;
        case 106:
            return d.NumpadMultiply;
        case 109:
            return d.NumpadSubtract;
        case 112:
            return d.F1;
        case 113:
            return d.F2;
        case 114:
            return d.F3;
        case 115:
            return d.F4;
        case 116:
            return d.F5;
        case 117:
            return d.F6;
        case 118:
            return d.F7;
        case 119:
            return d.F8;
        case 120:
            return d.F9;
        case 121:
            return d.F10;
        case 122:
            return d.F11;
        case 123:
            return d.F12;
        case 37:
            return d.Left;
        case 38:
            return d.Up;
        case 39:
            return d.Right;
        case 40:
            return d.Down;
        case 18:
            return d.Alt;
        case 192:
            return d.Backquote;
        case 220:
            return d.Backslash;
        case 8:
            return d.Backspace;
        case 20:
            return d.CapsLock;
        case 188:
            return d.Comma;
        case 15:
            return d.Command;
        case 17:
            return d.Control;
        case 46:
            return d.Delete;
        case 35:
            return d.End;
        case 13:
            return d.Enter;
        case 187:
            return d.Equals;
        case 27:
            return d.Escape;
        case 36:
            return d.Home;
        case 45:
            return d.Insert;
        case 219:
            return d.LeftBracket;
        case 189:
            return d.Minus;
        case 34:
            return d.PageDown;
        case 33:
            return d.PageUp;
        case 190:
            return d.Period;
        case 222:
            return d.Quote;
        case 221:
            return d.RightBracket;
        case 186:
            return d.Semicolon;
        case 16:
            return d.Shift;
        case 191:
            return d.Slash;
        case 32:
            return d.Space;
        case 9:
            return d.Tab;
        case 16777234:
            return d.Menu;
        case 16777247:
            return d.Search
        }
        return d.Unknown(a)
    }
    ;
    var Aa = function() {
        this._tickables = []
    };
    e["flambe.platform.MainLoop"] = Aa;
    Aa.__name__ = ["flambe", "platform", "MainLoop"];
    Aa.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_6;
        if (null != c && (c._realDt = b,
        b *= c.scale._value,
        0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c; ) {
            var i = c.next;
            0 == (c._flags & 1) && (c._flags |= 1,
            c.onStart());
            c.onUpdate(b);
            c = i
        }
        for (c = a.firstChild; null != c; )
            i = c.next,
            Aa.updateEntity(c, b),
            c = i
    }
    ;
    Aa.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length; ) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                k.volume.update(a);
                Aa.updateEntity(k.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(),
            u.render(k.root, b),
            a.didRender());
            null != Aa.late && Aa.late(0.016666666666666666)
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: Aa
    };
    var Cc = function() {};
    e["flambe.platform.MathUtil"] = Cc;
    Cc.__name__ = ["flambe", "platform", "MathUtil"];
    Cc.nextPowerOfTwo = function(a) {
        for (var b = 1; b < a; )
            b <<= 1;
        return b
    }
    ;
    var yc = function() {};
    e["flambe.platform.MouseCodes"] = yc;
    yc.__name__ = ["flambe", "platform", "MouseCodes"];
    yc.toButton = function(a) {
        switch (a) {
        case 0:
            return U.Left;
        case 1:
            return U.Middle;
        case 2:
            return U.Right
        }
        return U.Unknown(a)
    }
    ;
    var Qb = function() {};
    e["flambe.platform.TextureRoot"] = Qb;
    Qb.__name__ = ["flambe", "platform", "TextureRoot"];
    Qb.prototype = {
        __class__: Qb
    };
    var Rb = function() {};
    e["flambe.platform.Tickable"] = Rb;
    Rb.__name__ = ["flambe", "platform", "Tickable"];
    Rb.prototype = {
        __class__: Rb
    };
    var Sb = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    e["flambe.platform.html.CanvasGraphics"] = Sb;
    Sb.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Sb.__interfaces__ = [lb];
    Sb.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, i, d, f) {
            this._canvasCtx.transform(a, b, c, i, d, f)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, i, d, f, e) {
            this._firstDraw ? (this._firstDraw = !1,
            this._canvasCtx.globalCompositeOperation = "copy",
            this.drawSubTexture(a, b, c, i, d, f, e),
            this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + i | 0, a.rootY + d | 0, f | 0, e | 0, b | 0, c | 0, f | 0, e | 0)
        },
        drawPattern: function(a, b, c, i, d) {
            this._firstDraw ? (this._firstDraw = !1,
            this._canvasCtx.globalCompositeOperation = "copy",
            this.drawPattern(a, b, c, i, d),
            this._canvasCtx.globalCompositeOperation = "source-over") : (this._canvasCtx.fillStyle = a.getPattern(),
            this._canvasCtx.fillRect(b | 0, c | 0, i | 0, d | 0))
        },
        fillRect: function(a, b, c, i, d) {
            if (this._firstDraw)
                this._firstDraw = !1,
                this._canvasCtx.globalCompositeOperation = "copy",
                this.fillRect(a, b, c, i, d),
                this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length; )
                    a = "0" + y.string(a);
                this._canvasCtx.fillStyle = "#" + y.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, i | 0, d | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
            case 0:
                b = "source-over";
                break;
            case 1:
                b = "lighter";
                break;
            case 2:
                b = "multiply";
                break;
            case 3:
                b = "screen";
                break;
            case 4:
                b = "destination-in";
                break;
            case 5:
                b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, i) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, i | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        onResize: function() {},
        __class__: Sb
    };
    var Va = function(a) {
        this.graphics = new Sb(a,!1);
        this._hasGPU = new T(!0)
    };
    e["flambe.platform.html.CanvasRenderer"] = Va;
    Va.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Va.__interfaces__ = [mb];
    Va.prototype = {
        get_type: function() {
            return ka.Canvas
        },
        createTextureFromImage: function(a) {
            a = new nb(Va.CANVAS_TEXTURES ? x.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: Va
    };
    var Tb = function(a, b, c) {
        this._rootUpdateCount = 0;
        this._pattern = null;
        va.call(this, a, b, c)
    };
    e["flambe.platform.html.CanvasTexture"] = Tb;
    Tb.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Tb.__super__ = va;
    Tb.prototype = s(va.prototype, {
        getPattern: function() {
            if (this._rootUpdateCount != this.root.updateCount || null == this._pattern)
                this._rootUpdateCount = this.root.updateCount,
                this._pattern = this.root.createPattern(this.rootX, this.rootY, this._width, this._height);
            return this._pattern
        },
        __class__: Tb
    });
    var nb = function(a) {
        this._graphics = null;
        this.updateCount = 0;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    e["flambe.platform.html.CanvasTextureRoot"] = nb;
    nb.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    nb.__interfaces__ = [Qb];
    nb.__super__ = R;
    nb.prototype = s(R.prototype, {
        createTexture: function(a, b) {
            return new Tb(this,a,b)
        },
        createPattern: function(a, b, c, i) {
            var d = this.getContext2d()
              , f = this.image;
            if (0 != a || 0 != b || c != this.width || i != this.height)
                f = x.createEmptyCanvas(c, i),
                c = f.getContext("2d"),
                c.globalCompositeOperation = "copy",
                c.drawImage(this.image, -a, -b);
            return d.createPattern(f, "repeat")
        },
        getContext2d: function() {
            L.__instanceof(this.image, HTMLCanvasElement) || (this.image = x.createCanvas(this.image));
            return this.image.getContext("2d")
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: nb
    });
    var B = function(a, b) {
        Oa.call(this, a, b)
    };
    e["flambe.platform.html.HtmlAssetPackLoader"] = B;
    B.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    B.detectImageFormats = function(a) {
        var b = [m.PNG, m.JPG, m.GIF], c = 2, i;
        i = window.document.createElement("img");
        i.onload = i.onerror = function() {
            1 == i.width && b.unshift(m.WEBP);
            --c;
            0 == c && a(b)
        }
        ;
        i.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function() {
            1 == d.width && b.unshift(m.JXR);
            --c;
            0 == c && a(b)
        }
        ;
        d.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    }
    ;
    B.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == p(a, a.canPlayType))
            return [];
        var b = new wa("\\b(iPhone|iPod|iPad|Windows Phone)\\b","")
          , c = window.navigator.userAgent;
        if (!C.get_supported() && b.match(c))
            return [];
        for (var b = [{
            format: m.M4A,
            mimeType: "audio/mp4; codecs=mp4a"
        }, {
            format: m.MP3,
            mimeType: "audio/mpeg"
        }, {
            format: m.OPUS,
            mimeType: "audio/ogg; codecs=opus"
        }, {
            format: m.OGG,
            mimeType: "audio/ogg; codecs=vorbis"
        }, {
            format: m.WAV,
            mimeType: "audio/wav"
        }], c = [], d = 0; d < b.length; ) {
            var g = b[d];
            ++d;
            var f = "";
            try {
                f = a.canPlayType(g.mimeType)
            } catch (e) {}
            "" != f && c.push(g.format)
        }
        return c
    }
    ;
    B.supportsBlob = function() {
        if (B._detectBlobSupport) {
            B._detectBlobSupport = !1;
            if ((new wa("\\bSilk\\b","")).match(window.navigator.userAgent) || null == window.Blob)
                return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType)
                return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType)
                return !1;
            B._URL = x.loadExtension("URL").value
        }
        return null != B._URL && null != B._URL.createObjectURL
    }
    ;
    B.__super__ = Oa;
    B.prototype = s(Oa.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                var d;
                d = window.document.createElement("img");
                var g = new kb;
                g.addDisposingListener(d, "load", function() {
                    B.supportsBlob() && B._URL.revokeObjectURL(d.src);
                    var a = c._platform.getRenderer().createTextureFromImage(d);
                    null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                });
                g.addDisposingListener(d, "error", function() {
                    c.handleError(b, "Failed to load image")
                });
                B.supportsBlob() ? this.download(a, b, "blob", function(a) {
                    d.src = B._URL.createObjectURL(a)
                }) : (d.src = a,
                -1 != navigator.userAgent.indexOf("MSIE") && (d.style.position = "absolute",
                d.style.top = d.style.left = "-9999px",
                window.document.body.appendChild(d)));
                break;
            case 5:
            case 6:
            case 7:
                this.download(a, b, "arraybuffer", function() {
                    var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                    null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                });
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                var g = window.navigator.userAgent.toLowerCase()
                  , f = !1;
                if (-1 < g.indexOf("mozilla/5.0") && -1 < g.indexOf("android") && -1 < g.indexOf("applewebkit") && -1 < g.indexOf("version") && 0 > g.indexOf("chrome")) {
                    var e = new wa("android[ ]?([0-9.]+)","gi");
                    e.match(g);
                    -1 < "4.0,4.0.0,4.0.1,4.0.2,4.0.3,4.0.4,4.1,4.1.1,4.1.2,4.2,4.2.1,4.2.2".split(",").indexOf(e.matched(1)) && (f = !0)
                }
                if (C.get_supported() && !f)
                    this.download(a, b, "arraybuffer", function(a) {
                        C.ctx.decodeAudioData(a, function(a) {
                            c.handleLoad(b, new C(a))
                        }, function() {
                            c.handleLoad(b, ja.getInstance())
                        })
                    });
                else {
                    var h;
                    h = window.document.createElement("audio");
                    h.preload = "auto";
                    var j = ++B._mediaRefCount;
                    null == B._mediaElements && (B._mediaElements = new ga);
                    B._mediaElements.set(j, h);
                    g = new kb;
                    g.addDisposingListener(h, "canplaythrough", function() {
                        B._mediaElements.remove(j);
                        c.handleLoad(b, new ob(h))
                    });
                    g.addDisposingListener(h, "error", function() {
                        B._mediaElements.remove(j);
                        var a = h.error.code;
                        3 == a || 4 == a ? c.handleLoad(b, ja.getInstance()) : c.handleError(b, "Failed to load audio: " + h.error.code)
                    });
                    g.addListener(h, "progress", function() {
                        if (0 < h.buffered.length && 0 < h.duration) {
                            var a = h.buffered.end(0) / h.duration;
                            c.handleProgress(b, a * b.bytes | 0)
                        }
                    });
                    h.src = a;
                    h.load()
                }
                break;
            case 13:
                this.download(a, b, "text", function(a) {
                    c.handleLoad(b, new jb(a))
                })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == B._supportedFormats && (B._supportedFormats = new Kb,
            B.detectImageFormats(function(a) {
                B._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(B.detectAudioFormats()).concat([m.Data]))
            }));
            B._supportedFormats.get(a)
        },
        download: function(a, b, c, d) {
            var g = this
              , f = null
              , e = null
              , h = 0
              , j = !1
              , k = function() {
                j && (j = !1,
                window.clearInterval(h))
            }
              , l = 3
              , m = function() {
                --l;
                return 0 <= l ? (e(),
                !0) : !1
            }
              , e = function() {
                k();
                null != f && f.abort();
                f = new XMLHttpRequest;
                f.open("GET", a, !0);
                f.responseType = c;
                var e = 0;
                f.onprogress = function(a) {
                    j || (j = !0,
                    h = window.setInterval(function() {
                        4 != f.readyState && 5E3 < Date.now() - e && !m() && (k(),
                        g.handleError(b, "Download stalled"))
                    }, 1E3));
                    e = Date.now();
                    g.handleProgress(b, a.loaded)
                }
                ;
                f.onerror = function() {
                    if (0 != f.status || !m())
                        k(),
                        g.handleError(b, "HTTP error " + f.status)
                }
                ;
                f.onload = function() {
                    var a = f.response;
                    null == a && (a = f.responseText);
                    k();
                    d(a)
                }
                ;
                f.send()
            };
            e()
        },
        __class__: B
    });
    var zb = function(a, b) {
        da.call(this, a);
        this._canvas = b
    };
    e["flambe.platform.html.HtmlMouse"] = zb;
    zb.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    zb.__super__ = da;
    zb.prototype = s(da.prototype, {
        __class__: zb
    });
    var ob = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    e["flambe.platform.html.HtmlSound"] = ob;
    ob.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    ob.__interfaces__ = [$a];
    ob.__super__ = R;
    ob.prototype = s(R.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new pb(this,a,!1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new pb(this,a,!0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: ob
    });
    var pb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new G(b,function() {
            d.updateVolume()
        }
        );
        this.updateVolume();
        this._complete = new T(!1);
        this.playAudio();
        k.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._HtmlSound.HtmlPlayback"] = pb;
    pb.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    pb.__interfaces__ = [Rb, Ob];
    pb.prototype = {
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1,
            this._volumeBinding.dispose(),
            this._hideBinding.dispose(),
            !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.loop && !ua.instance.musicPlaying && (ua.instance.musicPlaying = !0,
            this._clonedElement.play(),
            this._tickableAdded || (ua.instance.mainLoop.addTickable(this),
            this._tickableAdded = !0,
            this._volumeBinding = k.volume.get_changed().connect(function() {
                a.updateVolume()
            }),
            this._hideBinding = k.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = a._clonedElement.paused,
                a.set_paused(!0)) : a.set_paused(a._wasPaused)
            })))
        },
        updateVolume: function() {
            this._clonedElement.volume = k.volume._value * this.volume._value
        },
        __class__: pb
    };
    var Dc = function() {};
    e["flambe.subsystem.StageSystem"] = Dc;
    Dc.__name__ = ["flambe", "subsystem", "StageSystem"];
    Dc.prototype = {
        __class__: Dc
    };
    var yb = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new Fa;
        this.scaleFactor = 1;
        x.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            x.callLater(p(b, b.hideMobileBrowser), 200)
        }, !1),
        this.hideMobileBrowser());
        window.addEventListener("resize", p(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new T(null);
        null != window.orientation && (window.addEventListener("orientationchange", p(this, this.onOrientationChange), !1),
        this.onOrientationChange(null));
        this.fullscreen = new T(!1);
        x.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    e["flambe.platform.html.HtmlStage"] = yb;
    yb.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    yb.__interfaces__ = [Dc];
    yb.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        get_fullscreenSupported: function() {
            return !0 == x.loadFirstExtension(["fullscreenEnabled", "fullScreenEnabled"], window.document).value
        },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) {
                var a = window.document.documentElement
                  , b = x.loadFirstExtension(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, [])
            } else
                a = x.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"], window.document).value,
                null != a && w.callMethod(window.document, a, [])
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a
              , d = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == d)
                return !1;
            this._canvas.width = c | 0;
            this._canvas.height = d | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this
              , b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            x.callLater(function() {
                x.hideMobileBrowser();
                x.callLater(function() {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(x.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == x.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: yb
    };
    var Cb = function(a) {
        this._storage = a
    };
    e["flambe.platform.html.HtmlStorage"] = Cb;
    Cb.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    Cb.__interfaces__ = [Pb];
    Cb.prototype = {
        set: function(a, b) {
            var c;
            try {
                var d = new ya;
                d.useCache = !0;
                d.useEnumIndex = !1;
                d.serialize(b);
                c = d.toString()
            } catch (g) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (f) {
                return !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" + a)
            } catch (d) {
                null
            }
            if (null != c)
                try {
                    return Y.run(c)
                } catch (g) {
                    null
                }
            return b
        },
        __class__: Cb
    };
    var x = function() {};
    e["flambe.platform.html.HtmlUtil"] = x;
    x.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    x.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    }
    ;
    x.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    }
    ;
    x.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = w.field(b, a);
        if (null != c)
            return {
                prefix: "",
                field: a,
                value: c
            };
        for (var c = a.charAt(0).toUpperCase() + A.substr(a, 1, null), d = 0, g = x.VENDOR_PREFIXES; d < g.length; ) {
            var f = g[d];
            ++d;
            var e = f + c
              , h = w.field(b, e);
            if (null != h)
                return {
                    prefix: f,
                    field: e,
                    value: h
                }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    }
    ;
    x.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length; ) {
            var d = a[c];
            ++c;
            d = x.loadExtension(d, b);
            if (null != d.field)
                return d
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    }
    ;
    x.polyfill = function(a, b) {
        null == b && (b = window);
        var c = x.loadExtension(a, b).value;
        if (null == c)
            return !1;
        b[a] = c;
        return !0
    }
    ;
    x.addVendorListener = function(a, b, c, d) {
        for (var g = 0, f = x.VENDOR_PREFIXES; g < f.length; ) {
            var e = f[g];
            ++g;
            a.addEventListener(e + b, c, d)
        }
        a.addEventListener(b, c, d)
    }
    ;
    x.orientation = function(a) {
        switch (a) {
        case -90:
        case 90:
            return ia.Landscape;
        case 270:
        case -270:
            return ia.Landscape;
        default:
            return ia.Portrait
        }
    }
    ;
    x.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    }
    ;
    x.createCanvas = function(a) {
        var b = x.createEmptyCanvas(a.width, a.height)
          , c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    }
    ;
    x.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin
              , b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            }
            ;
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    }
    ;
    var Ec = function() {};
    e["flambe.subsystem.WebSystem"] = Ec;
    Ec.__name__ = ["flambe", "subsystem", "WebSystem"];
    Ec.prototype = {
        __class__: Ec
    };
    var Eb = function(a) {
        this._container = a
    };
    e["flambe.platform.html.HtmlWeb"] = Eb;
    Eb.__name__ = ["flambe", "platform", "html", "HtmlWeb"];
    Eb.__interfaces__ = [Ec];
    Eb.prototype = {
        openBrowser: function(a) {},
        __class__: Eb
    };
    var C = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    e["flambe.platform.html.WebAudioSound"] = C;
    C.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    C.__interfaces__ = [$a];
    C.get_supported = function() {
        if (C._detectSupport) {
            C._detectSupport = !1;
            var a = x.loadExtension("AudioContext").value;
            null != a && (C.ctx = new a,
            C.gain = C.createGain(),
            C.gain.connect(C.ctx.destination),
            k.volume.watch(function(a) {
                C.gain.gain.value = a
            }))
        }
        return null != C.ctx
    }
    ;
    C.createGain = function() {
        return null != C.ctx.createGain ? C.ctx.createGain() : C.ctx.createGainNode()
    }
    ;
    C.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    }
    ;
    C.__super__ = R;
    C.prototype = s(R.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new qb(this,a,!1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new qb(this,a,!0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: C
    });
    var qb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = C.gain;
        this._complete = new T(!1);
        this._sourceNode = C.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            d._complete.set__(!0)
        }
        ;
        C.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new G(b,function(a) {
            d.setVolume(a)
        }
        );
        1 != b && this.setVolume(b);
        k.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = qb;
    qb.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    qb.__interfaces__ = [Rb, Ob];
    qb.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(),
            this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (C.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1,
            this._hideBinding.dispose(),
            !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = C.createGain(),
            this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(),
            this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = C.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (ua.instance.mainLoop.addTickable(this),
            this._tickableAdded = !0,
            this._hideBinding = k.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = 0 <= a._pausedAt,
                a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: qb
    };
    var Uc = function() {
        this._quads = this._maxQuads = this._dataOffset = this._backbufferWidth = this._backbufferHeight = 0;
        this._pendingSetScissor = !1;
        this._lastBlendMode = this._lastRenderTarget = this._lastShader = this._lastTexture = this._lastScissor = this._currentBlendMode = this._currentShader = this._currentTexture = this._currentRenderTarget = null
    };
    e["flambe.platform.html.WebGLBatcher"] = Uc;
    Uc.__name__ = ["flambe", "platform", "html", "WebGLBatcher"];
    Uc.prototype = {
        resizeBackbuffer: function(a, b) {
            this._gl.viewport(0, 0, a, b);
            this._backbufferWidth = a;
            this._backbufferHeight = b
        },
        willRender: function() {},
        didRender: function() {
            this.flush()
        },
        bindTexture: function(a) {
            this.flush();
            this._currentTexture = this._lastTexture = null;
            this._gl.bindTexture(3553, a)
        },
        deleteTexture: function(a) {
            null != this._lastTexture && this._lastTexture.root == a && (this.flush(),
            this._currentTexture = this._lastTexture = null);
            this._gl.deleteTexture(a.nativeTexture)
        },
        deleteFramebuffer: function(a) {
            a == this._lastRenderTarget && (this.flush(),
            this._currentRenderTarget = this._lastRenderTarget = null);
            this._gl.deleteFramebuffer(a.framebuffer)
        },
        prepareDrawTexture: function(a, b, c, d) {
            if (null == this._lastTexture || null == this._lastTexture._parent || d._parent != this._lastTexture._parent)
                this.flush(),
                this._lastTexture = d;
            return this.prepareQuad(5, a, b, c, this._drawTextureShader)
        },
        prepareDrawPattern: function(a, b, c, d) {
            d != this._lastTexture && (this.flush(),
            this._lastTexture = d);
            return this.prepareQuad(5, a, b, c, this._drawPatternShader)
        },
        prepareFillRect: function(a, b, c) {
            return this.prepareQuad(6, a, b, c, this._fillRectShader)
        },
        prepareQuad: function(a, b, c, d, g) {
            b != this._lastRenderTarget && (this.flush(),
            this._lastRenderTarget = b);
            c != this._lastBlendMode && (this.flush(),
            this._lastBlendMode = c);
            g != this._lastShader && (this.flush(),
            this._lastShader = g);
            if (null != d || null != this._lastScissor)
                if (null == d || null == this._lastScissor || !this._lastScissor.equals(d))
                    this.flush(),
                    this._lastScissor = null != d ? d.clone(this._lastScissor) : null,
                    this._pendingSetScissor = !0;
            this._quads >= this._maxQuads && this.resize(2 * this._maxQuads);
            ++this._quads;
            b = this._dataOffset;
            this._dataOffset += 4 * a;
            return b
        },
        flush: function() {
            if (!(1 > this._quads)) {
                this._lastRenderTarget != this._currentRenderTarget && this.bindRenderTarget(this._lastRenderTarget);
                if (this._lastBlendMode != this._currentBlendMode) {
                    switch (this._lastBlendMode[1]) {
                    case 0:
                        this._gl.blendFunc(1, 771);
                        break;
                    case 1:
                        this._gl.blendFunc(1, 1);
                        break;
                    case 2:
                        this._gl.blendFunc(774, 771);
                        break;
                    case 3:
                        this._gl.blendFunc(1, 769);
                        break;
                    case 4:
                        this._gl.blendFunc(0, 770);
                        break;
                    case 5:
                        this._gl.blendFunc(1, 0)
                    }
                    this._currentBlendMode = this._lastBlendMode
                }
                this._pendingSetScissor && (null != this._lastScissor ? (this._gl.enable(3089),
                this._gl.scissor(this._lastScissor.x | 0, this._lastScissor.y | 0, this._lastScissor.width | 0, this._lastScissor.height | 0)) : this._gl.disable(3089),
                this._pendingSetScissor = !1);
                this._lastTexture != this._currentTexture && (this._gl.bindTexture(3553, this._lastTexture.root.nativeTexture),
                this._currentTexture = this._lastTexture);
                this._lastShader != this._currentShader && (this._lastShader.useProgram(),
                this._lastShader.prepare(),
                this._currentShader = this._lastShader);
                if (this._lastShader == this._drawPatternShader) {
                    var a = this._lastTexture
                      , b = a.root;
                    this._drawPatternShader.setRegion(a.rootX / b.width, a.rootY / b.height, a._width / b.width, a._height / b.height)
                }
                this._gl.bufferData(34962, this.data.subarray(0, this._dataOffset), 35040);
                this._gl.drawElements(4, 6 * this._quads, 5123, 0);
                this._dataOffset = this._quads = 0
            }
        },
        resize: function(a) {
            this.flush();
            if (!(1024 < a)) {
                this._maxQuads = a;
                this.data = new Float32Array(24 * a);
                this._gl.bufferData(34962, 4 * this.data.length, 35040);
                for (var b = new Uint16Array(6 * a), c = 0; c < a; ) {
                    var d = c++;
                    b[6 * d] = 4 * d;
                    b[6 * d + 1] = 4 * d + 1;
                    b[6 * d + 2] = 4 * d + 2;
                    b[6 * d + 3] = 4 * d + 2;
                    b[6 * d + 4] = 4 * d + 3;
                    b[6 * d + 5] = 4 * d
                }
                this._gl.bufferData(34963, b, 35044)
            }
        },
        bindRenderTarget: function(a) {
            null != a ? (this._gl.bindFramebuffer(36160, a.framebuffer),
            this._gl.viewport(0, 0, a.width, a.height)) : (this._gl.bindFramebuffer(36160, null),
            this._gl.viewport(0, 0, this._backbufferWidth, this._backbufferHeight));
            this._lastRenderTarget = this._currentRenderTarget = a
        },
        __class__: Uc
    };
    var Ga = function() {
        this._inverseProjection = this._stateList = null
    };
    e["flambe.platform.html.WebGLGraphics"] = Ga;
    Ga.__name__ = ["flambe", "platform", "html", "WebGLGraphics"];
    Ga.__interfaces__ = [lb];
    Ga.prototype = {
        save: function() {
            var a = this._stateList
              , b = this._stateList.next;
            null == b && (b = new Ub,
            b.prev = a,
            a.next = b);
            a.matrix.clone(b.matrix);
            b.alpha = a.alpha;
            b.blendMode = a.blendMode;
            b.scissor = null != a.scissor ? a.scissor.clone(b.scissor) : null;
            this._stateList = b
        },
        transform: function(a, b, c, d, g, f) {
            var e = this._stateList;
            Ga._scratchMatrix.set(a, b, c, d, g, f);
            pa.multiply(e.matrix, Ga._scratchMatrix, e.matrix)
        },
        restore: function() {
            this._stateList = this._stateList.prev
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, g, f, e) {
            var h = this._stateList
              , j = a.root
              , b = this.transformQuad(b, c, f, e)
              , c = j.width
              , j = j.height
              , d = (a.rootX + d) / c
              , g = (a.rootY + g) / j
              , f = d + f / c
              , e = g + e / j
              , c = h.alpha
              , a = this._batcher.prepareDrawTexture(this._renderTarget, h.blendMode, h.scissor, a)
              , h = this._batcher.data;
            h[a] = b[0];
            h[++a] = b[1];
            h[++a] = d;
            h[++a] = g;
            h[++a] = c;
            h[++a] = b[2];
            h[++a] = b[3];
            h[++a] = f;
            h[++a] = g;
            h[++a] = c;
            h[++a] = b[4];
            h[++a] = b[5];
            h[++a] = f;
            h[++a] = e;
            h[++a] = c;
            h[++a] = b[6];
            h[++a] = b[7];
            h[++a] = d;
            h[++a] = e;
            h[++a] = c
        },
        drawPattern: function(a, b, c, d, g) {
            var f = this._stateList
              , e = a.root
              , b = this.transformQuad(b, c, d, g)
              , d = d / e.width
              , g = g / e.height
              , e = f.alpha
              , a = this._batcher.prepareDrawPattern(this._renderTarget, f.blendMode, f.scissor, a)
              , f = this._batcher.data;
            f[a] = b[0];
            f[++a] = b[1];
            f[++a] = 0;
            f[++a] = 0;
            f[++a] = e;
            f[++a] = b[2];
            f[++a] = b[3];
            f[++a] = d;
            f[++a] = 0;
            f[++a] = e;
            f[++a] = b[4];
            f[++a] = b[5];
            f[++a] = d;
            f[++a] = g;
            f[++a] = e;
            f[++a] = b[6];
            f[++a] = b[7];
            f[++a] = 0;
            f[++a] = g;
            f[++a] = e
        },
        fillRect: function(a, b, c, d, g) {
            var f = this._stateList
              , b = this.transformQuad(b, c, d, g)
              , c = (a & 16711680) / 16711680
              , d = (a & 65280) / 65280
              , a = (a & 255) / 255
              , g = f.alpha
              , f = this._batcher.prepareFillRect(this._renderTarget, f.blendMode, f.scissor)
              , e = this._batcher.data;
            e[f] = b[0];
            e[++f] = b[1];
            e[++f] = c;
            e[++f] = d;
            e[++f] = a;
            e[++f] = g;
            e[++f] = b[2];
            e[++f] = b[3];
            e[++f] = c;
            e[++f] = d;
            e[++f] = a;
            e[++f] = g;
            e[++f] = b[4];
            e[++f] = b[5];
            e[++f] = c;
            e[++f] = d;
            e[++f] = a;
            e[++f] = g;
            e[++f] = b[6];
            e[++f] = b[7];
            e[++f] = c;
            e[++f] = d;
            e[++f] = a;
            e[++f] = g
        },
        multiplyAlpha: function(a) {
            this._stateList.alpha *= a
        },
        setBlendMode: function(a) {
            this._stateList.blendMode = a
        },
        applyScissor: function(a, b, c, d) {
            var g = this._stateList
              , f = Ga._scratchQuadArray;
            f[0] = a;
            f[1] = b;
            f[2] = a + c;
            f[3] = b + d;
            g.matrix.transformArray(f, 4, f);
            this._inverseProjection.transformArray(f, 4, f);
            a = f[0];
            b = f[1];
            c = f[2] - a;
            d = f[3] - b;
            0 > c && (a += c,
            c = -c);
            0 > d && (b += d,
            d = -d);
            g.applyScissor(a, b, c, d)
        },
        willRender: function() {
            this._batcher.willRender()
        },
        didRender: function() {
            this._batcher.didRender()
        },
        onResize: function(a, b) {
            this._stateList = new Ub;
            var c;
            c = null != this._renderTarget ? -1 : 1;
            this._stateList.matrix.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this._inverseProjection = new pa;
            this._inverseProjection.set(2 / a, 0, 0, 2 / b, -1, -1);
            this._inverseProjection.invert()
        },
        transformQuad: function(a, b, c, d) {
            var c = a + c
              , d = b + d
              , g = Ga._scratchQuadArray;
            g[0] = a;
            g[1] = b;
            g[2] = c;
            g[3] = b;
            g[4] = c;
            g[5] = d;
            g[6] = a;
            g[7] = d;
            this._stateList.matrix.transformArray(g, 8, g);
            return g
        },
        __class__: Ga
    };
    var Ub = function() {
        this.scissor = this.prev = this.next = null;
        this.matrix = new pa;
        this.alpha = 1;
        this.blendMode = I.Normal
    };
    e["flambe.platform.html._WebGLGraphics.DrawingState"] = Ub;
    Ub.__name__ = ["flambe", "platform", "html", "_WebGLGraphics", "DrawingState"];
    Ub.prototype = {
        applyScissor: function(a, b, c, d) {
            if (null != this.scissor)
                var g = qa.max(this.scissor.x, a)
                  , f = qa.max(this.scissor.y, b)
                  , c = qa.min(this.scissor.x + this.scissor.width, a + c)
                  , d = qa.min(this.scissor.y + this.scissor.height, b + d)
                  , a = g
                  , b = f
                  , c = c - g
                  , d = d - f;
            else
                this.scissor = new Za;
            this.scissor.set(Math.round(a), Math.round(b), Math.round(c), Math.round(d))
        },
        __class__: Ub
    };
    var Vb = function() {};
    e["flambe.platform.html.WebGLRenderer"] = Vb;
    Vb.__name__ = ["flambe", "platform", "html", "WebGLRenderer"];
    Vb.__interfaces__ = [mb];
    Vb.prototype = {
        get_type: function() {
            return ka.WebGL
        },
        createTextureFromImage: function(a) {
            if (this.gl.isContextLost())
                return null;
            var b = new Pa(this,a.width,a.height);
            b.uploadImageData(a);
            return b.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            this.gl.isContextLost();
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        onResize: function() {
            var a = this.gl.canvas.width
              , b = this.gl.canvas.height;
            this.batcher.resizeBackbuffer(a, b);
            this.graphics.onResize(a, b)
        },
        __class__: Vb
    };
    var Wb = function(a, b, c) {
        va.call(this, a, b, c)
    };
    e["flambe.platform.html.WebGLTexture"] = Wb;
    Wb.__name__ = ["flambe", "platform", "html", "WebGLTexture"];
    Wb.__super__ = va;
    Wb.prototype = s(va.prototype, {
        __class__: Wb
    });
    var Pa = function(a, b, c) {
        this.framebuffer = this._graphics = null;
        this._disposed = !1;
        this._renderer = a;
        this.width = qa.max(2, Cc.nextPowerOfTwo(b));
        this.height = qa.max(2, Cc.nextPowerOfTwo(c));
        b = a.gl;
        this.nativeTexture = b.createTexture();
        a.batcher.bindTexture(this.nativeTexture);
        b.texParameteri(3553, 10242, 33071);
        b.texParameteri(3553, 10243, 33071);
        b.texParameteri(3553, 10241, 9728)
    };
    e["flambe.platform.html.WebGLTextureRoot"] = Pa;
    Pa.__name__ = ["flambe", "platform", "html", "WebGLTextureRoot"];
    Pa.__interfaces__ = [Qb];
    Pa.drawBorder = function(a, b, c) {
        var d = a.getContext("2d");
        d.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        d.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1)
    }
    ;
    Pa.__super__ = R;
    Pa.prototype = s(R.prototype, {
        createTexture: function(a, b) {
            return new Wb(this,a,b)
        },
        uploadImageData: function(a) {
            if (this.width != a.width || this.height != a.height) {
                var b = x.createEmptyCanvas(this.width, this.height);
                b.getContext("2d").drawImage(a, 0, 0);
                Pa.drawBorder(b, a.width, a.height);
                a = b
            }
            this._renderer.batcher.bindTexture(this.nativeTexture);
            this._renderer.gl.texImage2D(3553, 0, 6408, 6408, 5121, a)
        },
        onDisposed: function() {
            var a = this._renderer.batcher;
            a.deleteTexture(this);
            null != this.framebuffer && a.deleteFramebuffer(this);
            this._graphics = this.framebuffer = this.nativeTexture = null
        },
        __class__: Pa
    });
    var Ha = function() {};
    e["flambe.platform.shader.ShaderGL"] = Ha;
    Ha.__name__ = ["flambe", "platform", "shader", "ShaderGL"];
    Ha.prototype = {
        useProgram: function() {
            this._gl.useProgram(this._program)
        },
        prepare: function() {
            null
        },
        __class__: Ha
    };
    var Fc = function() {};
    e["flambe.platform.shader.DrawPatternGL"] = Fc;
    Fc.__name__ = ["flambe", "platform", "shader", "DrawPatternGL"];
    Fc.__super__ = Ha;
    Fc.prototype = s(Ha.prototype, {
        setRegion: function(a, b, c, d) {
            this._gl.uniform4f(this.u_region, a, b, c, d)
        },
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: Fc
    });
    var Gc = function() {};
    e["flambe.platform.shader.DrawTextureGL"] = Gc;
    Gc.__name__ = ["flambe", "platform", "shader", "DrawTextureGL"];
    Gc.__super__ = Ha;
    Gc.prototype = s(Ha.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: Gc
    });
    var Hc = function() {};
    e["flambe.platform.shader.FillRectGL"] = Hc;
    Hc.__name__ = ["flambe", "platform", "shader", "FillRectGL"];
    Hc.__super__ = Ha;
    Hc.prototype = s(Ha.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_rgb);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 24, 0);
            this._gl.vertexAttribPointer(this.a_rgb, 3, 5126, !1, 24, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 24, 20)
        },
        __class__: Hc
    });
    var Ic = function() {
        this._transitor = null
    };
    e["flambe.scene.Director"] = Ic;
    Ic.__name__ = ["flambe", "scene", "Director"];
    Ic.__super__ = r;
    Ic.prototype = s(r.prototype, {
        get_name: function() {
            return "Director_4"
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length; ) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        show: function(a) {
            a = a._compMap.Scene_9;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a; ) {
                var b = this.scenes[--a]._compMap.Scene_9;
                if (null == b || b.opaque)
                    break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(),
            this._transitor = null,
            this.invalidateVisibility())
        },
        __class__: Ic
    });
    var Vc = function() {};
    e["flambe.scene._Director.Transitor"] = Vc;
    Vc.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    Vc.prototype = {
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: Vc
    };
    var Jc = function() {};
    e["flambe.scene.Scene"] = Jc;
    Jc.__name__ = ["flambe", "scene", "Scene"];
    Jc.__super__ = r;
    Jc.prototype = s(r.prototype, {
        get_name: function() {
            return "Scene_9"
        },
        __class__: Jc
    });
    var Wc = function() {};
    e["flambe.scene.Transition"] = Wc;
    Wc.__name__ = ["flambe", "scene", "Transition"];
    Wc.prototype = {
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: Wc
    };
    var Qa = function() {};
    e["flambe.script.Action"] = Qa;
    Qa.__name__ = ["flambe", "script", "Action"];
    Qa.prototype = {
        __class__: Qa
    };
    var ea = function(a, b, c, d) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = d
    };
    e["flambe.script.AnimateTo"] = ea;
    ea.__name__ = ["flambe", "script", "AnimateTo"];
    ea.__interfaces__ = [Qa];
    ea.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new hb(this._value._value,this._to,this._seconds,this._easing),
            this._value.set_behavior(this._tween),
            this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: ea
    };
    var za = function(a) {
        this._fn = a
    };
    e["flambe.script.CallFunction"] = za;
    za.__name__ = ["flambe", "script", "CallFunction"];
    za.__interfaces__ = [Qa];
    za.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: za
    };
    var rb = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    e["flambe.script.Delay"] = rb;
    rb.__name__ = ["flambe", "script", "Delay"];
    rb.__interfaces__ = [Qa];
    rb.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: rb
    };
    var ab = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Parallel"] = ab;
    ab.__name__ = ["flambe", "script", "Parallel"];
    ab.__interfaces__ = [Qa];
    ab.prototype = {
        update: function(a, b) {
            for (var c = !0, d = 0, g = 0, f = this._runningActions.length; g < f; ) {
                var e = g++
                  , h = this._runningActions[e];
                if (null != h) {
                    var j = h.update(a, b);
                    0 <= j ? (this._runningActions[e] = null,
                    this._completedActions.push(h),
                    j > d && (d = j)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions,
            this._completedActions = [],
            d) : -1
        },
        __class__: ab
    };
    var Ra = function() {
        r.call(this);
        this.stopAll()
    };
    e["flambe.script.Script"] = Ra;
    Ra.__name__ = ["flambe", "script", "Script"];
    Ra.__super__ = r;
    Ra.prototype = s(r.prototype, {
        get_name: function() {
            return "Script_3"
        },
        run: function(a) {
            a = new Xb(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length; ) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: Ra
    });
    var Xb = function(a) {
        this.removed = !1;
        this.action = a
    };
    e["flambe.script._Script.Handle"] = Xb;
    Xb.__name__ = ["flambe", "script", "_Script", "Handle"];
    Xb.__interfaces__ = [ta];
    Xb.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: Xb
    };
    var Ia = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Sequence"] = Ia;
    Ia.__name__ = ["flambe", "script", "Sequence"];
    Ia.__interfaces__ = [Qa];
    Ia.prototype = {
        update: function(a, b) {
            for (var c = 0; ; ) {
                var d = this._runningActions[this._idx];
                if (null != d)
                    if (d = d.update(a - c, b),
                    0 <= d)
                        c += d;
                    else
                        return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a)
                    return -1
            }
            return c
        },
        __class__: Ia
    };
    var ka = e["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    ka.Stage3D = ["Stage3D", 0];
    ka.Stage3D.toString = h;
    ka.Stage3D.__enum__ = ka;
    ka.WebGL = ["WebGL", 1];
    ka.WebGL.toString = h;
    ka.WebGL.__enum__ = ka;
    ka.Canvas = ["Canvas", 2];
    ka.Canvas.toString = h;
    ka.Canvas.__enum__ = ka;
    var Sc = function() {};
    e["flambe.util.Assert"] = Sc;
    Sc.__name__ = ["flambe", "util", "Assert"];
    Sc.that = function() {}
    ;
    var oc = function() {};
    e["flambe.util.BitSets"] = oc;
    oc.__name__ = ["flambe", "util", "BitSets"];
    oc.set = function(a, b, c) {
        return c ? a | b : a & ~b
    }
    ;
    var $c = function() {};
    e["flambe.util.LogHandler"] = $c;
    $c.__name__ = ["flambe", "util", "LogHandler"];
    var Kb = function() {
        this.success = new E;
        this.error = new E;
        this.progressChanged = new Fa;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    e["flambe.util.Promise"] = Kb;
    Kb.__name__ = ["flambe", "util", "Promise"];
    Kb.prototype = {
        set_result: function(a) {
            if (this.hasResult)
                throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result),
            null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a,
            this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a,
            this.progressChanged.emit());
            return a
        },
        __class__: Kb
    };
    var Fa = function(a) {
        O.call(this, a)
    };
    e["flambe.util.Signal0"] = Fa;
    Fa.__name__ = ["flambe", "util", "Signal0"];
    Fa.__super__ = O;
    Fa.prototype = s(O.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b; )
                b._listener(),
                b.stayInList || b.dispose(),
                b = b._next;
            this.didEmit(a)
        },
        __class__: Fa
    });
    var kc = function(a) {
        this.next = null;
        this.fn = a
    };
    e["flambe.util._SignalBase.Task"] = kc;
    kc.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    kc.prototype = {
        __class__: kc
    };
    var X = function() {};
    e["flambe.util.Strings"] = X;
    X.__name__ = ["flambe", "util", "Strings"];
    X.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? A.substr(a, b + 1, null) : null
    }
    ;
    X.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? A.substr(a, 0, b) : a
    }
    ;
    X.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = A.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = A.substr(a, b + 1, null));
        return X.getFileExtension(a)
    }
    ;
    X.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    }
    ;
    X.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[", d = 0; d < c; ) {
                0 < d && (a += ", ");
                var g = b[d]
                  , f = b[d + 1];
                if (y.is(f, Error)) {
                    var e = f.stack;
                    null != e && (f = e)
                }
                a += g + "=" + y.string(f);
                d += 2
            }
            a += "]"
        }
        return a
    }
    ;
    var fa = e["flambeAssets.AtlasType"] = {
        __ename__: ["flambeAssets", "AtlasType"],
        __constructs__: ["ShoeBox", "TexturePacker", "Auto"]
    };
    fa.ShoeBox = ["ShoeBox", 0];
    fa.ShoeBox.toString = h;
    fa.ShoeBox.__enum__ = fa;
    fa.TexturePacker = ["TexturePacker", 1];
    fa.TexturePacker.toString = h;
    fa.TexturePacker.__enum__ = fa;
    fa.Auto = ["Auto", 2];
    fa.Auto.toString = h;
    fa.Auto.__enum__ = fa;
    var Kc = function(a) {
        this.image = a;
        this._texMap = new ba
    };
    e["flambeAssets.Flambatlas"] = Kc;
    Kc.__name__ = ["flambeAssets", "Flambatlas"];
    Kc.prototype = {
        parseJSON: function(a, b) {
            if (b == fa.TexturePacker)
                this.parseTexturePacker(a);
            else if (b == fa.ShoeBox)
                this.parseShoeBox(a);
            else if (b == fa.Auto || null == b) {
                var c = JSON.parse(a);
                Object.prototype.hasOwnProperty.call(c, "frames") && Object.prototype.hasOwnProperty.call(c, "meta") && (w.field(c, "frames")instanceof Array && null == w.field(c, "frames").__enum__ ? this.parseTexturePacker(a) : y.is(w.field(c, "frames"), ad) && this.parseShoeBox(a))
            }
            return this
        },
        parseTexturePacker: function(a) {
            a = JSON.parse(a);
            if (!Object.prototype.hasOwnProperty.call(a, "frames") && !Object.prototype.hasOwnProperty.call(a, "meta"))
                throw "Wrong JSON Format";
            for (var a = w.field(a, "frames"), b = 0; b < a.length; ) {
                var c = a[b];
                ++b;
                if (Object.prototype.hasOwnProperty.call(c, "filename") && Object.prototype.hasOwnProperty.call(c, "frame")) {
                    var d = w.field(c, "filename")
                      , c = w.field(c, "frame")
                      , g = d.lastIndexOf(".")
                      , d = A.substr(d, 0, g)
                      , c = this.image.subTexture(w.field(c, "x"), w.field(c, "y"), w.field(c, "w"), w.field(c, "h"));
                    this._texMap.set(d, c)
                }
            }
        },
        parseShoeBox: function(a) {
            a = JSON.parse(a);
            if (!Object.prototype.hasOwnProperty.call(a, "frames") && !Object.prototype.hasOwnProperty.call(a, "meta"))
                throw "Wrong JSON Format";
            for (var a = w.field(a, "frames"), b = w.fields(a), c = 0; c < b.length; ) {
                var d = b[c];
                ++c;
                var g = w.field(a, d);
                if (Object.prototype.hasOwnProperty.call(g, "frame")) {
                    var g = w.field(g, "frame")
                      , f = d.lastIndexOf(".")
                      , d = A.substr(d, 0, f)
                      , g = this.image.subTexture(w.field(g, "x"), w.field(g, "y"), w.field(g, "w"), w.field(g, "h"));
                    this._texMap.set(d, g)
                }
            }
        },
        get: function(a) {
            return this._texMap.get(a)
        },
        exists: function(a) {
            return this._texMap.exists(a)
        },
        __class__: Kc
    };
    var n = function() {};
    e["flambeAssets.Res"] = n;
    n.__name__ = ["flambeAssets", "Res"];
    n.addPack = function(a) {
        n._init || n.calcModifier();
        null == n._packs && (n._packs = new Ua);
        n._packs.push(a);
        return n
    }
    ;
    n.calcModifier = function() {
        n.mod = 1
    }
    ;
    n.addAtlas = function(a) {
        null == n._atlases && (n._atlases = new Ua);
        n._atlases.add(a);
        return n
    }
    ;
    n.tex = function(a, b) {
        null == b && (b = !1);
        if (!b && null != n._atlases)
            for (var c = n._atlases.iterator(); c.hasNext(); ) {
                var d = c.next();
                if (d.exists(a))
                    return d.get(a)
            }
        if (null != n._packs)
            for (c = n._packs.iterator(); c.hasNext(); )
                if (d = c.next(),
                null != d.getTexture(a))
                    return d.getTexture(a);
        return null
    }
    ;
    n.spr = function(a, b) {
        null == b && (b = !1);
        return (new ra(n.tex(a, b))).setScale(n.mod)
    }
    ;
    n.snd = function(a) {
        if (null != n._packs)
            for (var b = n._packs.iterator(); b.hasNext(); ) {
                var c = b.next();
                if (null != c.getSound(a))
                    return c.getSound(a)
            }
        return null
    }
    ;
    var N = function(a) {
        this.down = this.connected = this.lastFrame = !1;
        r.call(this);
        if (null == a)
            throw "ButtonComponent with null func";
        this.func = [a]
    };
    e["flambeComponents.ButtonComponent"] = N;
    N.__name__ = ["flambeComponents", "ButtonComponent"];
    N.__super__ = r;
    N.prototype = s(r.prototype, {
        get_name: function() {
            return "ButtonComponent_8"
        },
        onAdded: function() {
            this.connected || this.tryConnect()
        },
        onUpdate: function() {
            this.connected || this.tryConnect();
            this.lastFrame = !1
        },
        addCallback: function(a) {
            if (null == a)
                throw "ButtonComponent with null func";
            this.func.push(a)
        },
        tryConnect: function() {
            var a = this.owner._compMap.Sprite_3;
            null != a && (this.disposer = new Ka,
            this.disposer.add(a.get_pointerDown().connect(p(this, this.pDown))),
            this.disposer.add(a.get_pointerUp().connect(p(this, this.pUp))),
            this.disposer.add(a.get_pointerOut().connect(p(this, this.pOut))),
            this.connected = !0)
        },
        onRemoved: function() {
            r.prototype.onRemoved.call(this);
            this.disposer.dispose();
            this.down = this.connected = !1
        },
        pDown: function() {
            this.down = !0;
            null != N.sound && n.snd(N.sound).play(0.3)
        },
        pUp: function(a) {
            if ((this.down || this.lastFrame) && null != this.func)
                for (var b = 0, c = this.func; b < c.length; ) {
                    var d = c[b];
                    ++b;
                    d(a)
                }
            this.down = !1
        },
        pOut: function() {
            this.down = !1;
            this.lastFrame = !0
        },
        __class__: N
    });
    var Sa = function(a) {
        r.call(this);
        this.funcs = [];
        if (null != a)
            for (var b = 0; b < a.length; ) {
                var c = a[b];
                ++b;
                this.funcs.push(c)
            }
    };
    e["flambeComponents.MultiRunner"] = Sa;
    Sa.__name__ = ["flambeComponents", "MultiRunner"];
    Sa.get_self = function() {
        var a = k.root._compMap.MultiRunner_12;
        null == a && (a = new Sa,
        k.root.add(a));
        return a
    }
    ;
    Sa.__super__ = r;
    Sa.prototype = s(r.prototype, {
        get_name: function() {
            return "MultiRunner_12"
        },
        onUpdate: function(a) {
            for (var b = 0, c = this.funcs; b < c.length; ) {
                var d = c[b];
                ++b;
                d(a)
            }
        },
        add: function(a) {
            this.funcs.push(a)
        },
        __class__: Sa
    });
    var bb = function(a) {
        r.call(this);
        this.fn = a
    };
    e["flambeComponents.PostRender"] = bb;
    bb.__name__ = ["flambeComponents", "PostRender"];
    bb.__super__ = r;
    bb.prototype = s(r.prototype, {
        get_name: function() {
            return "PostRender_8"
        },
        call: function() {
            null != this.fn && this.fn()
        },
        __class__: bb
    });
    var Yb = function(a, b) {
        this.layoutUpdating = !0;
        r.call(this);
        if (null == a)
            throw "manifest is null";
        if (null == b)
            throw "onComplete is null";
        this.manifest = a;
        this.onComplete = b
    };
    e["flambeComponents.Preloader"] = Yb;
    Yb.__name__ = ["flambeComponents", "Preloader"];
    Yb.__super__ = r;
    Yb.prototype = s(r.prototype, {
        get_name: function() {
            return "Preloader_1"
        },
        onAdded: function() {
            this.disposer = new Ka;
            this.owner.add(this.disposer);
            var a = aa.fromAssets("preloader");
            k._platform.loadAssetPack(a).get(p(this, this.prepare))
        },
        prepare: function(a) {
            l.get_instance();
            this.preloadPack = a;
            this.disposer.add(this.preloadPack);
            this.owner.addChild(this.base = new o);
            this.back = new xa(0,k._platform.getStage().get_width(),k._platform.getStage().get_height());
            this.bar = new ra(a.getTexture("bar"));
            this.barUnderlay = new ra(a.getTexture("bar"));
            this.notification = new ra(a.getTexture("notification"));
            this.button = new ra(a.getTexture("button"));
            this.base.addChild((new o).add(this.back));
            this.base.addChild((new o).add(this.barUnderlay.centerAnchor().setAlpha(0.5)));
            this.base.addChild((new o).add(this.bar.centerAnchor()));
            this.promise = k._platform.loadAssetPack(this.manifest);
            this.promise.progressChanged.connect(p(this, this.progress));
            this.promise.get(p(this, this.complete));
            this.owner.addChild(this.base);
            this.updateLayout();
            this.bar.scissor = new Za(0,0,150,k._platform.getStage().get_height())
        },
        updateLayout: function() {
            this.bar.setXY(k._platform.getStage().get_width() / 2, 0.3 * k._platform.getStage().get_height()).centerAnchor();
            this.barUnderlay.setXY(k._platform.getStage().get_width() / 2, 0.3 * k._platform.getStage().get_height()).centerAnchor();
            this.bar.setScale(Math.min(1, k._platform.getStage().get_width() / 640));
            this.barUnderlay.setScale(Math.min(1, k._platform.getStage().get_width() / 640));
            this.notification.setXY(k._platform.getStage().get_width() / 2, 0.5 * k._platform.getStage().get_height()).centerAnchor();
            this.notification.setScale(Math.min(1, k._platform.getStage().get_width() / 640));
            this.button.setXY(k._platform.getStage().get_width() / 2, 0.6 * k._platform.getStage().get_height()).centerAnchor();
            this.button.setScale(Math.min(1, k._platform.getStage().get_width() / 640));
            this.back.setSize(k._platform.getStage().get_width(), k._platform.getStage().get_height())
        },
        progress: function() {
            var a = this
              , b = this.promise._progress / this.promise._total;
            this.bar.scissor.width = b * this.bar.texture.get_width();
            this.bar.scissor.height = k._platform.getStage().get_height();
            this.updateLayout();
            if (1 == b) {
                this.base.addChild((new o).add(this.notification.centerAnchor()));
                var c = null
                  , c = function() {
                    a.updateLayout();
                    a.layoutUpdating && J.delay(c, 100)
                };
                c()
            }
        },
        complete: function(a) {
            var b = this;
            this.layoutUpdating = !1;
            null != this.barUnderlay.owner && this.barUnderlay.owner.dispose();
            null != this.bar.owner && this.bar.owner.dispose();
            null != this.notification.owner && this.notification.owner.dispose();
            this.updateLayout();
            this.base.addChild((new o).add(this.button.centerAnchor()));
            this.disposer.add(this.button.get_pointerUp().connect(function() {
                b.owner.dispose();
                b.onComplete(a)
            }))
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this.layoutUpdating = !1
        },
        __class__: Yb
    });
    var sb = function(a) {
        r.call(this);
        this.func = a
    };
    e["flambeComponents.Runner"] = sb;
    sb.__name__ = ["flambeComponents", "Runner"];
    sb.__super__ = r;
    sb.prototype = s(r.prototype, {
        get_name: function() {
            return "Runner_15"
        },
        onUpdate: function(a) {
            this.func(a)
        },
        __class__: sb
    });
    var P = function(a, b, c) {
        null == b && (b = 0.2);
        null == a && (a = 1.1);
        this.duration = 0.2;
        this.easing = Q.quadOut;
        this.scaleTo = 1.1;
        r.call(this);
        this.scaleTo = a;
        this.duration = b;
        this.easing = null == c ? this.easing : c
    };
    e["flambeComponents.ScaleOnClick"] = P;
    P.__name__ = ["flambeComponents", "ScaleOnClick"];
    P.__super__ = r;
    P.prototype = s(r.prototype, {
        get_name: function() {
            return "ScaleOnClick_6"
        },
        onAdded: function() {
            this._listener = this.owner._compMap.Sprite_3.get_pointerDown().connect(p(this, this.onDown));
            this._listener = this.owner._compMap.Sprite_3.get_pointerOut().connect(p(this, this.onUp));
            this._listener2 = this.owner._compMap.Sprite_3.get_pointerUp().connect(p(this, this.onUp))
        },
        onDown: function() {
            this.owner._compMap.Sprite_3.scaleX.animateTo(this.scaleTo, this.duration, this.easing);
            this.owner._compMap.Sprite_3.scaleY.animateTo(this.scaleTo, this.duration, this.easing)
        },
        onUp: function() {
            this.owner._compMap.Sprite_3.scaleX.animateTo(1, this.duration, this.easing);
            this.owner._compMap.Sprite_3.scaleY.animateTo(1, this.duration, this.easing)
        },
        onRemoved: function() {
            this._listener.dispose();
            this._listener2.dispose()
        },
        __class__: P
    });
    var Zb = function(a, b) {
        r.call(this);
        if (null == a)
            throw "ScreenChanger with null";
        this.screenId = a;
        this.changeFunc = b
    };
    e["flambeComponents.ScreenChanger"] = Zb;
    Zb.__name__ = ["flambeComponents", "ScreenChanger"];
    Zb.__super__ = r;
    Zb.prototype = s(r.prototype, {
        get_name: function() {
            return "ScreenChanger_11"
        },
        onAdded: function() {
            var a = this.owner._compMap.ButtonComponent_8;
            null == a ? (a = new N(p(this, this.invoke)),
            this.owner.add(a)) : a.addCallback(p(this, this.invoke))
        },
        onRemoved: function() {},
        invoke: function() {
            l.get_instance().show(this.screenId, this.changeFunc)
        },
        __class__: Zb
    });
    var tb = function(a, b, c) {
        null == c && (c = 10);
        null == b && (b = 5);
        null == a && (a = 3.3);
        this.w = 0;
        r.call(this);
        this._freq = b;
        this._amp = c;
        this._timer = this._timer0 = a
    };
    e["flambeComponents.WiggleAnimation"] = tb;
    tb.__name__ = ["flambeComponents", "WiggleAnimation"];
    tb.__super__ = r;
    tb.prototype = s(r.prototype, {
        get_name: function() {
            return "WiggleAnimation_5"
        },
        onUpdate: function(a) {
            this._timer -= a;
            0 >= this._timer && (this._timer = this._timer0,
            this.w = 0.5 < Math.random() ? 1 : -1);
            a = this.owner._compMap.Sprite_3;
            null != a && a.rotation.set__(this._amp * Math.sin((this._timer0 - this._timer) * this._freq) * (this._timer / this._timer0) * this.w)
        },
        __class__: tb
    });
    var Ja = function() {
        this.hideable = !0;
        this.readyToBeDeleted = new Fa;
        this.display = (new o).add(new u);
        this.disablePointer()
    };
    e["flambeGameMenu.BaseGameMenu"] = Ja;
    Ja.__name__ = ["flambeGameMenu", "BaseGameMenu"];
    Ja.prototype = {
        open: function() {
            this.opened = !0
        },
        hide: function() {
            this.opened = !1;
            this.readyToBeDeleted.emit()
        },
        enablePointer: function() {
            this.display._compMap.Sprite_3.set_pointerEnabled(!0)
        },
        disablePointer: function() {
            this.display._compMap.Sprite_3.set_pointerEnabled(!1)
        },
        onInstantClose: function() {
            this.opened = !1
        },
        __class__: Ja
    };
    var Lc = function() {
        this._menus = [];
        this.menuOpened = !1;
        this.display = new o;
        this.startedHidingProcess = new E;
        this.fullyHidden = new E
    };
    e["flambeGameMenu.GameMenuManager"] = Lc;
    Lc.__name__ = ["flambeGameMenu", "GameMenuManager"];
    Lc.prototype = {
        addMenu: function(a, b) {
            this._menus[b] = a
        },
        show: function(a) {
            if (null == this._menus[a])
                throw "No such menu id: " + (null == a ? "null" : "" + a);
            this._currentlyOpenedMenuID = a;
            this.clear();
            a = this._menus[a];
            this.display.addChild(a.display);
            a.open();
            this.menuOpened = !0
        },
        hide: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = !1);
            null == a && (a = !1);
            for (var d = 0, g = this._menus; d < g.length; ) {
                var f = g[d];
                ++d;
                if (f.opened && (f.hideable || a))
                    b ? (this.clear(),
                    c || this.fullyHidden.emit(this._currentlyOpenedMenuID)) : (f.hide(),
                    this._readyListener = f.readyToBeDeleted.connect(p(this, this.lastMenuReadyToBeDeleted)),
                    c || this.startedHidingProcess.emit(this._currentlyOpenedMenuID))
            }
            this.menuOpened = !1
        },
        lastMenuReadyToBeDeleted: function() {
            this.fullyHidden.emit(this._currentlyOpenedMenuID)
        },
        clear: function() {
            for (; null != this.display.firstChild; )
                this.display.removeChild(this.display.firstChild);
            for (var a = 0, b = this._menus; a < b.length; ) {
                var c = b[a];
                ++a;
                c.onInstantClose()
            }
        },
        __class__: Lc
    };
    var la = function() {
        this.display = (new o).add(new u)
    };
    e["flambeScreen.Screen"] = la;
    la.__name__ = ["flambeScreen", "Screen"];
    la.prototype = {
        onShow: function() {},
        onHide: function() {},
        __class__: la
    };
    var ma = function() {
        la.call(this)
    };
    e["flambeScreen.AnimatedScreen"] = ma;
    ma.__name__ = ["flambeScreen", "AnimatedScreen"];
    ma.__super__ = la;
    ma.prototype = s(la.prototype, {
        addAnim: function(a) {
            null == this._anims && (this._anims = []);
            this._anims.push(a)
        },
        onShow: function() {
            if (null != this._anims)
                for (var a = 0, b = this._anims; a < b.length; ) {
                    var c = b[a];
                    ++a;
                    c.reset();
                    c.run()
                }
        },
        __class__: ma
    });
    var Z = e["flambeScreen.AutoBackgroundScaleMode"] = {
        __ename__: ["flambeScreen", "AutoBackgroundScaleMode"],
        __constructs__: ["Fit", "Stretch", "None", "Fill"]
    };
    Z.Fit = ["Fit", 0];
    Z.Fit.toString = h;
    Z.Fit.__enum__ = Z;
    Z.Stretch = ["Stretch", 1];
    Z.Stretch.toString = h;
    Z.Stretch.__enum__ = Z;
    Z.None = ["None", 2];
    Z.None.toString = h;
    Z.None.__enum__ = Z;
    Z.Fill = ["Fill", 3];
    Z.Fill.toString = h;
    Z.Fill.__enum__ = Z;
    var Mc = function() {
        this.autoUpdate = !0;
        this.marginLeft = this.marginRight = this.marginTop = this.marginBottom = this.x = this.y = 0;
        this.originalWidth = this.originalHeight = -1;
        this._records = [];
        this.point = new Ca
    };
    e["flambeScreen.AutoPositionManager"] = Mc;
    Mc.__name__ = ["flambeScreen", "AutoPositionManager"];
    Mc.prototype = {
        onStageResize: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = -1);
            null == a && (a = -1);
            if (this.autoUpdate || !c)
                for (var c = 0, d = this._records; c < d.length; ) {
                    var g = d[c];
                    ++c;
                    this.updatePos(g, a, b)
                }
        },
        updatePos: function(a, b, c) {
            null == c && (c = -1);
            null == b && (b = -1);
            var d = 0
              , g = 0;
            0 < b || (b = k._platform.getStage().get_width());
            0 < c || (c = k._platform.getStage().get_height());
            g = Math.min(b / (0 < this.originalWidth ? this.originalWidth : k._platform.getStage().get_width()), c / (0 < this.originalHeight ? this.originalHeight : k._platform.getStage().get_height()));
            0 < this.originalWidth || k._platform.getStage().get_width();
            0 < this.originalHeight || k._platform.getStage().get_height();
            switch (a.posX[1]) {
            case 0:
                d = l.get_instance().toLocal(this.marginLeft + a.dx * g, 0, this.point).x;
                break;
            case 1:
                d = l.get_instance().toLocal(b / 2 + a.dx * g, 0, this.point).x;
                break;
            case 2:
                d = l.get_instance().toLocal(b + a.dx * g - this.marginRight, 0, this.point).x;
                break;
            default:
                throw "SpritePositionsX should be Right, Center, Left";
            }
            switch (a.posY[1]) {
            case 3:
                g = l.get_instance().toLocal(0, this.marginTop + a.dy * g, this.point).y;
                break;
            case 1:
                g = l.get_instance().toLocal(0, c / 2 + a.dy * g, this.point).y;
                break;
            case 4:
                g = l.get_instance().toLocal(0, c - this.marginBottom + a.dy * g, this.point).y;
                break;
            default:
                throw "SpritePositionsY should be Top, Center, Bottom";
            }
            a.sprite.setXY(d + this.x, g + this.y)
        },
        add: function(a, b, c, d, g, f) {
            null == f && (f = !1);
            null == g && (g = 0);
            null == d && (d = 0);
            a = {
                sprite: a,
                dx: d,
                dy: g,
                posX: b,
                posY: c,
                scaleOffsets: f
            };
            this._records.push(a);
            this.updatePos(a)
        },
        __class__: Mc
    };
    var V = e["flambeScreen.ExtentsType"] = {
        __ename__: ["flambeScreen", "ExtentsType"],
        __constructs__: ["Horizontal", "Vertical", "None"]
    };
    V.Horizontal = ["Horizontal", 0];
    V.Horizontal.toString = h;
    V.Horizontal.__enum__ = V;
    V.Vertical = ["Vertical", 1];
    V.Vertical.toString = h;
    V.Vertical.__enum__ = V;
    V.None = ["None", 2];
    V.None.toString = h;
    V.None.__enum__ = V;
    var l = function() {
        this.stageResize = new Wa;
        this.fullBrowser = !1;
        this.lastDPR = 1;
        this.autoBackgroundColor = -1;
        this.currentID = -68489441;
        this.autoBackgroundInstance = null;
        this.enableDPRScaling = !0;
        this.autoBackgroundScaleMode = Z.Fit;
        this.mainDivID = "content";
        this.centerScreenX = this.centerScreenY = this.scaleScreensToFit = this.autoDisablePointer = !0;
        this.createNew = !1;
        this.DH = 960;
        this.DW = 640;
        if (null == l._instance)
            this.init();
        else
            throw "Use ScreenManager.instance()";
    };
    e["flambeScreen.ScreenManager"] = l;
    l.__name__ = ["flambeScreen", "ScreenManager"];
    l.get_instance = function() {
        null == l._instance && (l._instance = new l);
        return l._instance
    }
    ;
    l.prototype = {
        init: function() {
            var a = this;
            l.logger = new lc(k._platform.createLogHandler("Screen"));
            this.transitions = new ba;
            this.positionManager = new Mc;
            this.display = (new o).add(new u);
            this.holder = (new o).add(new u);
            this.screenHolder = (new o).add(new u);
            this.defaultTransition = new $b;
            this.display.add(this.rootSprite = new u);
            this.display.addChild(this.extents = (new o).add(new u));
            this.display.addChild(this.underlay = (new o).add(new u));
            this.display.addChild(this.screenHolder);
            this.display.addChild(this.overlay = (new o).add(new u));
            this.display.addChild(this.holder);
            this.display.addChild(this.phoneIconLayer = new o);
            k._platform.getStage().resize.connect(function() {
                J.delay(p(a, a.onStageResize), 400)
            });
            k._platform.getStage().orientation.get_changed().connect(function() {
                J.delay(p(a, a.updatePhoneOrientationIcon), 400);
                J.delay(p(a, a.onStageResize), 400)
            });
            k._platform.getStage().fullscreen.get_changed().connect(function() {
                J.delay(p(a, a.updatePhoneOrientationIcon), 400);
                J.delay(p(a, a.onStageResize), 400)
            });
            l.inited = !0;
            this.onStageResize();
            this.screenClasses = []
        },
        setScreenSize: function(a, b) {
            this.DW = a;
            this.DH = b;
            this.onStageResize()
        },
        addScreen: function(a, b) {
            this.screenClasses[a] = b;
            this.createNew || (null == this.screens && (this.screens = []),
            this.screens[a] = M.createInstance(b, []))
        },
        addTransition: function(a, b, c, d) {
            null == d && (d = !0);
            this.transitions.set(a + ">" + b, c);
            d && a != b && this.transitions.set(b + ">" + a, c)
        },
        show: function(a, b) {
            if (a == j.GAME_SCREEN) {
                if (!window.IS_FIRST) {
                    window.IS_FIRST = true;
                }
                else {
                    setLoadingVisible(true, true, function () {
                    })
                }
            }
            var c = null;
            if (this.createNew) {
                if (null == this.screenClasses[a])
                    throw "No screen " + a;
                c = M.createInstance(this.screenClasses[a], null)
            } else
                c = this.screens[a];
            if (null != this.current) {
                var d = this.defaultTransition;
                this.transitions.exists(this.currentID + ">" + a) && (d = this.transitions.get(this.currentID + ">" + a));
                d.play(this.current, c, b)
            } else
                this.screenHolder.addChild(c.display),
                c.onShow();
            this.currentID = a;
            this.current = c
        },
        toLocal: function(a, b, c) {
            null == c && (c = new Ca);
            this.screenHolder._compMap.Sprite_3.getViewMatrix().inverseTransform(a, b, c);
            return c
        },
        toGlobal: function(a, b, c) {
            null == c && (c = new Ca);
            this.screenHolder._compMap.Sprite_3.getViewMatrix().transform(a, b, c);
            return c
        },
        onStageResize: function() {
            if (l.inited) {
                this.updateDPIScalingState();
                this.ratio = Math.min(k._platform.getStage().get_width() / this.DW, k._platform.getStage().get_height() / this.DH);
                this.scaleScreensToFit && this.screenHolder._compMap.Sprite_3.setScale(this.ratio);
                if (this.centerScreenX || this.centerScreenY)
                    this.screenHolder._compMap.Sprite_3.setXY(this.centerScreenX ? (k._platform.getStage().get_width() - this.DW * this.ratio) / 2 : 0, this.centerScreenY ? (k._platform.getStage().get_height() - this.DH * this.ratio) / 2 : 0);
                this.updateAutoBackground();
                this.positionManager.originalWidth = this.DW;
                this.positionManager.originalHeight = this.DH;
                this.positionManager.onStageResize(-1, -1, !0);
                this.updateExtents();
                this.stageResize.emit(k._platform.getStage().get_width(), k._platform.getStage().get_height())
            }
            try {
                var a;
                a = L.__cast(k._platform.getRenderer(), Vb);
                if (null != a)
                    a.onResize()
            } catch (b) {}
        },
        updateAutoBackground: function() {
            if (null != this.autoBackgroundInstance)
                if (0 < this.autoBackgroundColor && L.__instanceof(this.autoBackgroundInstance, xa))
                    L.__cast(this.autoBackgroundInstance, xa).setSize(k._platform.getStage().get_width(), k._platform.getStage().get_height()).setXY(0, 0);
                else {
                    var a;
                    a = L.__cast(this.autoBackgroundInstance, u);
                    switch (this.autoBackgroundScaleMode[1]) {
                    case 3:
                        var b = Math.max(k._platform.getStage().get_width() / a.getNaturalWidth(), k._platform.getStage().get_height() / a.getNaturalHeight());
                        a.setScale(b).setXY((k._platform.getStage().get_width() - a.getNaturalWidth() * b) / 2, (k._platform.getStage().get_height() - a.getNaturalHeight() * b) / 2);
                        break;
                    case 0:
                        a.setScale(Math.min(k._platform.getStage().get_width() / this.DW, k._platform.getStage().get_height() / this.DH)).setXY((k._platform.getStage().get_width() - a.getNaturalWidth() * this.ratio) / 2, (k._platform.getStage().get_height() - a.getNaturalHeight() * this.ratio) / 2);
                        break;
                    case 1:
                        a.setXY(0, 0).setScaleXY(k._platform.getStage().get_width() / a.getNaturalWidth(), k._platform.getStage().get_height() / a.getNaturalHeight());
                        break;
                    case 2:
                        a.setScale(1).setXY(0, 0)
                    }
                }
        },
        updatePhoneOrientationIcon: function() {
            if (null != this.phoneIcon) {
                var a = k._platform.getStage().orientation._value
                  , b = window.navigator.userAgent.toLowerCase();
                0 <= b.indexOf("android") && 0 <= b.indexOf("mozilla/5.0") && 0 <= b.indexOf("applewebkit") && 0 > b.indexOf("mobile") && (a = window.innerWidth > window.innerHeight ? ia.Landscape : ia.Portrait);
                a == ia.Landscape ? (document.getElementById("turnThePhoneDumbass").style.display = "block",
                document.getElementsByTagName("canvas")[0].style.display = "none",
                this.disablePointer(),
                this.screenHolder.add(new ib(0))) : (document.getElementById("turnThePhoneDumbass").style.display = "none",
                document.getElementsByTagName("canvas")[0].style.display = "block",
                this.enablePointer(),
                null != this.screenHolder._compMap.SpeedAdjuster_6 && this.screenHolder.remove(this.screenHolder._compMap.SpeedAdjuster_6))
            }
        },
        getExtentsType: function() {
            var a = k._platform.getStage().get_width() / k._platform.getStage().get_height()
              , b = this.DW / this.DH;
            return a > b ? V.Horizontal : a < b ? V.Vertical : V.None
        },
        isMobile: function() {
            return window.orientation === Number(window.orientation) || l.fillScreen ? !0 : !1
        },
        updateDPIScalingState: function() {
            if (this.enableDPRScaling) {
                var a = window.devicePixelRatio;
                null == a && (a = 1);
                var b = window.navigator.userAgent.toLowerCase();
                -1 < b.indexOf("mozilla/5.0") && -1 < b.indexOf("android") && -1 < b.indexOf("applewebkit") && -1 < b.indexOf("version") && 0 > b.indexOf("chrome") && (a = 1);
                this.lastDPR = a;
                this.lastCorrectedWidth = window.innerWidth * a | 0;
                this.lastCorrectedHeight = window.innerHeight * a | 0;
                this.lastCorrectedWidth = window.document.documentElement.clientWidth * a | 0;
                this.lastCorrectedHeight = window.document.documentElement.clientHeight * a | 0;
                var b = window.document.getElementById(this.mainDivID + "-canvas")
                  , c = window.document.getElementById(this.mainDivID)
                  , d = window.document.body
                  , g = window.document.documentElement;
                if (null != c && null != b) {
                    var f = this.isMobile();
                    2300 > window.screen.width * a && 2300 > window.screen.height * a && (k._platform.getStage().fullscreen._value || f || this.fullBrowser) ? (b.width = this.lastCorrectedWidth,
                    b.height = this.lastCorrectedHeight,
                    b.style.width = (this.lastCorrectedWidth / a | 0) + "px",
                    c.style.width = (this.lastCorrectedWidth / a | 0) + "px",
                    c.style.height = (this.lastCorrectedHeight / a | 0) + "px",
                    c.style.margin = "0",
                    d.style.padding = "0") : (f = Math.min(1, Math.min(this.lastCorrectedWidth / this.DW / a, this.lastCorrectedHeight / this.DH / a)),
                    c.style.height = (this.DH * f | 0) + "px",
                    c.style.width = (this.DW * f | 0) + "px",
                    c.style.margin = y.string(y["int"](Math.max(0, (this.lastCorrectedHeight / a - this.DH * f) / 2))) + "px auto 0",
                    d.style.padding = "0.06px",
                    b.width = this.DW * a | 0,
                    b.height = this.DH * a | 0);
                    d.style.height = g.style.height = "100%";
                    d.style.width = g.style.width = "100%";
                    b.style.width = c.style.width;
                    b.style.height = c.style.height
                }
            }
        },
        updateExtents: function() {
            var a = null;
            if (null != this.extentsTexture) {
                var b;
                b = this.getExtentsType() == V.Vertical ? this.DW : this.DH;
                for (var c = this.extentsTexture.get_height(), d = this.extents.firstChild; null != d; ) {
                    if (null != y.instance(d._compMap.Sprite_3, Ea)) {
                        a = y.instance(d._compMap.Sprite_3, Ea);
                        a.setSize(b, c).setScale(this.ratio);
                        var g = this.toGlobal(0, 0)
                          , f = this.toGlobal(this.DW, this.DH);
                        d == this.extents.firstChild ? this.getExtentsType() == V.Vertical ? a.setRotation(0).setAnchor(0, this.extentsTexture.get_height()).setXY(g.x, g.y) : a.setRotation(90).setAnchor(0, this.extentsTexture.get_height()).setXY(f.x, g.y) : this.getExtentsType() == V.Vertical ? a.setRotation(180).setAnchor(0, this.extentsTexture.get_height()).setXY(f.x, f.y) : a.setRotation(-90).setAnchor(0, this.extentsTexture.get_height()).setXY(g.x, f.y)
                    }
                    d = d.next
                }
            }
        },
        enablePointer: function() {
            this.display._compMap.Sprite_3.set_pointerEnabled(!0)
        },
        disablePointer: function() {
            this.display._compMap.Sprite_3.set_pointerEnabled(!1)
        },
        __class__: l
    };
    var q = e["flambeScreen.SpritePosition"] = {
        __ename__: ["flambeScreen", "SpritePosition"],
        __constructs__: ["Left", "Center", "Right", "Top", "Bottom"]
    };
    q.Left = ["Left", 0];
    q.Left.toString = h;
    q.Left.__enum__ = q;
    q.Center = ["Center", 1];
    q.Center.toString = h;
    q.Center.__enum__ = q;
    q.Right = ["Right", 2];
    q.Right.toString = h;
    q.Right.__enum__ = q;
    q.Top = ["Top", 3];
    q.Top.toString = h;
    q.Top.__enum__ = q;
    q.Bottom = ["Bottom", 4];
    q.Bottom.toString = h;
    q.Bottom.__enum__ = q;
    var cb = function(a, b) {
        this.sprite = a;
        this.delay = b;
        this.finish = new Fa
    };
    e["flambeScreen.animations.Animation"] = cb;
    cb.__name__ = ["flambeScreen", "animations", "Animation"];
    cb.prototype = {
        run: function() {
            null != this._action && (null == this._script && (this._script = new Ra),
            this.sprite.owner.add(this._script),
            this._script.run(this._action))
        },
        reset: function() {
            null != this._script && this._script.stopAll()
        },
        end: function() {
            this.finish.emit()
        },
        __class__: cb
    };
    var ca = function(a, b, c, d) {
        null == d && (d = !0);
        cb.call(this, a, b);
        this.time = c;
        var g = Q.elasticOut;
        this._action = d ? new Ia([new rb(b), new za(function() {
            n.snd("sound/pop_0").play(0.5 + 0.5 * Math.random())
        }
        ), new ab([new ea(a.scaleX,1,c,g), new ea(a.scaleY,1,c,g)]), new za(p(this, this.end))]) : new Ia([new rb(b), new ab([new ea(a.scaleX,1,c,g), new ea(a.scaleY,1,c,g)]), new za(p(this, this.end))])
    };
    e["flambeScreen.animations.PopAnimation"] = ca;
    ca.__name__ = ["flambeScreen", "animations", "PopAnimation"];
    ca.__super__ = cb;
    ca.prototype = s(cb.prototype, {
        reset: function() {
            cb.prototype.reset.call(this);
            this.sprite.setScale(0)
        },
        __class__: ca
    });
    var db = function() {
        this.init()
    };
    e["flambeScreen.transitions.Transition"] = db;
    db.__name__ = ["flambeScreen", "transitions", "Transition"];
    db.prototype = {
        init: function() {},
        applyFunction: function() {
            null != this.func && this.func()
        },
        elasticEaseOut: function(a) {
            var b = 0
              , c = 0.5;
            if (0 == a)
                return 0;
            if (1 == a)
                return 1;
            1 > c ? (c = 0.5,
            b = 0.125) : b = 0.5 / (2 * Math.PI) * Math.asin(1 / c);
            return c * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / 0.5) + 1
        },
        play: function(a, b, c) {
           
            this.current = a;
            this.target = b;
            this.func = c;
            null == this.holder && (this.holder = l.get_instance().holder);
            null == this.screenHolder && (this.screenHolder = l.get_instance().screenHolder);
            this.startTransition()
        },
        startTransition: function() {
            this.screenHolder.removeChild(this.current.display);
            this.applyFunction();
            this.screenHolder.addChild(this.target.display);
            this.target.onShow();
            this.current.onHide();
            this.endTransition()
        },
        endTransition: function() {},
        __class__: db
    };
    var eb = function(a) {
        null == a && (a = 0);
        this.color = 0;
        this.init();
        this.set_color(a)
    };
    e["flambeScreen.transitions.BlackMaskTransition"] = eb;
    eb.__name__ = ["flambeScreen", "transitions", "BlackMaskTransition"];
    eb.__super__ = db;
    eb.prototype = s(db.prototype, {
        init: function() {
            this.mask = (new o).add(this.maskSpr = new xa(this.color,l.get_instance().DW,l.get_instance().DH))
        },
        startTransition: function() {
            this.maskSpr.width.set__(k._platform.getStage().get_width());
            this.maskSpr.height.set__(k._platform.getStage().get_height());
            this.maskSpr.alpha.set__(0);
            this.holder.addChild(this.mask);
            l.get_instance().autoDisablePointer && l.get_instance().disablePointer();
            var a = new Ra;
            a.run(new Ia([new ea(this.maskSpr.alpha,1,0.3), new za(p(this, this.maskFadeEnd))]));
            null != this.mask._compMap.Script_3 && this.mask.remove(this.mask._compMap.Script_3);
            this.mask.add(a)
        },
        maskFadeEnd: function() {
            if (0.95 < this.maskSpr.alpha._value) {
                this.maskSpr.alpha.set__(1);
                this.current.onHide();
                this.screenHolder.removeChild(this.current.display);
                this.applyFunction();
                this.screenHolder.addChild(this.target.display, !1);
                this.target.onShow();
                var a = new Ra;
                a.run(new Ia([new ea(this.maskSpr.alpha,0,0.3), new za(p(this, this.maskFadeEnd))]));
                null != this.mask._compMap.Script_3 && this.mask.remove(this.mask._compMap.Script_3);
                this.mask.add(a)
            } else
                0.05 > this.maskSpr.alpha._value && this.endTransition()
        },
        endTransition: function() {
            null != this.mask._compMap.Script_3 && this.mask.remove(this.mask._compMap.Script_3);
            this.holder.removeChild(this.mask);
            l.get_instance().enablePointer()
        },
        set_color: function(a) {
            null != this.maskSpr && (this.maskSpr.color = a);
            return this.color = a
        },
        __class__: eb
    });
    var $b = function() {
        this.init()
    };
    e["flambeScreen.transitions.BounceTransition"] = $b;
    $b.__name__ = ["flambeScreen", "transitions", "BounceTransition"];
    $b.__super__ = db;
    $b.prototype = s(db.prototype, {
        init: function() {
            k.root.addChild(this.runner = new o)
        },
        startTransition: function() {
            this.scr = new Ra;
            var a = this.target.level < this.current.level;
            l.get_instance().autoDisablePointer && l.get_instance().disablePointer();
            this.current.display._compMap.Sprite_3.setAlpha(1);
            this.target.display._compMap.Sprite_3.setAlpha(0).setXY(a ? -k._platform.getStage().get_width() - 100 : k._platform.getStage().get_width() + 100, 0);
            this.screenHolder.addChild(this.target.display);
            this.target.onShow();
            null != this.runner._compMap.Script_3 && this.runner.remove(this.runner._compMap.Script_3);
            this.runner.add(this.scr);
            this.scr.run(new Ia([new ab([new ea(this.current.display._compMap.Sprite_3.alpha,0,0.35,Q.quintOut), new ea(this.target.display._compMap.Sprite_3.alpha,1,0.35,Q.quintOut), new ea(this.current.display._compMap.Sprite_3.x,a ? 700 : -700,0.7,p(this, this.elasticEaseOut)), new ea(this.target.display._compMap.Sprite_3.x,0,0.7,p(this, this.elasticEaseOut))]), new za(p(this, this.ending))]))
        },
        ending: function() {
            this.scr.dispose();
            this.screenHolder.removeChild(this.current.display);
            this.current.onHide();
            l.get_instance().enablePointer();
            this.endTransition()
        },
        endTransition: function() {
            this.current.display._compMap.Sprite_3.setAlpha(1).setXY(0, 0);
            this.target.display._compMap.Sprite_3.setAlpha(1).setXY(0, 0)
        },
        __class__: $b
    });
    var ya = function() {
        this.buf = new xb;
        this.cache = [];
        this.useCache = ya.USE_CACHE;
        this.useEnumIndex = ya.USE_ENUM_INDEX;
        this.shash = new ba;
        this.scount = 0
    };
    e["haxe.Serializer"] = ya;
    ya.__name__ = ["haxe", "Serializer"];
    ya.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R",
            this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++),
            this.buf.b += "y",
            a = encodeURIComponent(a),
            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length),
            this.buf.b += ":",
            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d; ) {
                var g = c++
                  , f = this.cache[g];
                if (typeof f == b && f == a)
                    return this.buf.b += "r",
                    this.buf.b = null == g ? this.buf.b + "null" : this.buf.b + ("" + g),
                    !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = w.fields(a); b < c.length; ) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(w.field(a, d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = M["typeof"](a);
            switch (b[1]) {
            case 0:
                this.buf.b += "n";
                break;
            case 1:
                if (0 == a) {
                    this.buf.b += "z";
                    break
                }
                this.buf.b += "i";
                this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                break;
            case 2:
                Math.isNaN(a) ? this.buf.b += "k" : Math.isFinite(a) ? (this.buf.b += "d",
                this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                break;
            case 3:
                this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                break;
            case 6:
                b = b[2];
                if (b == String) {
                    this.serializeString(a);
                    break
                }
                if (this.useCache && this.serializeRef(a))
                    break;
                switch (b) {
                case Array:
                    b = 0;
                    this.buf.b += "a";
                    for (var c = a.length, d = 0; d < c; ) {
                        var g = d++;
                        null == a[g] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u",
                        this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)),
                        b = 0),
                        this.serialize(a[g]))
                    }
                    0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u",
                    this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                    this.buf.b += "h";
                    break;
                case Ua:
                    this.buf.b += "l";
                    for (a = a.iterator(); a.hasNext(); )
                        this.serialize(a.next());
                    this.buf.b += "h";
                    break;
                case Date:
                    this.buf.b += "v";
                    this.buf.add(A.dateStr(a));
                    break;
                case ba:
                    this.buf.b += "b";
                    for (b = a.keys(); b.hasNext(); )
                        c = b.next(),
                        this.serializeString(c),
                        this.serialize(a.get(c));
                    this.buf.b += "h";
                    break;
                case ga:
                    this.buf.b += "q";
                    for (b = a.keys(); b.hasNext(); )
                        c = b.next(),
                        this.buf.b += ":",
                        this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c),
                        this.serialize(a.get(c));
                    this.buf.b += "h";
                    break;
                case Ta:
                    this.buf.b += "M";
                    for (b = a.keys(); b.hasNext(); )
                        c = b.next(),
                        d = w.field(c, "__id__"),
                        w.deleteField(c, "__id__"),
                        this.serialize(c),
                        c.__id__ = d,
                        this.serialize(a.h[c.__id__]);
                    this.buf.b += "h";
                    break;
                case fb:
                    d = 0;
                    g = a.length - 2;
                    b = new xb;
                    for (c = ya.BASE64; d < g; ) {
                        var f = a.get(d++)
                          , e = a.get(d++)
                          , h = a.get(d++);
                        b.add(c.charAt(f >> 2));
                        b.add(c.charAt((f << 4 | e >> 4) & 63));
                        b.add(c.charAt((e << 2 | h >> 6) & 63));
                        b.add(c.charAt(h & 63))
                    }
                    d == g ? (g = a.get(d++),
                    a = a.get(d++),
                    b.add(c.charAt(g >> 2)),
                    b.add(c.charAt((g << 4 | a >> 4) & 63)),
                    b.add(c.charAt(a << 2 & 63))) : d == g + 1 && (a = a.get(d++),
                    b.add(c.charAt(a >> 2)),
                    b.add(c.charAt(a << 4 & 63)));
                    a = b.b;
                    this.buf.b += "s";
                    this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                    this.buf.b += ":";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                default:
                    this.useCache && this.cache.pop(),
                    null != a.hxSerialize ? (this.buf.b += "C",
                    this.serializeString(M.getClassName(b)),
                    this.useCache && this.cache.push(a),
                    a.hxSerialize(this),
                    this.buf.b += "g") : (this.buf.b += "c",
                    this.serializeString(M.getClassName(b)),
                    this.useCache && this.cache.push(a),
                    this.serializeFields(a))
                }
                break;
            case 4:
                if (this.useCache && this.serializeRef(a))
                    break;
                this.buf.b += "o";
                this.serializeFields(a);
                break;
            case 7:
                b = b[2];
                if (this.useCache) {
                    if (this.serializeRef(a))
                        break;
                    this.cache.pop()
                }
                this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                this.serializeString(M.getEnumName(b));
                this.useEnumIndex ? (this.buf.b += ":",
                this.buf.b += y.string(a[1])) : this.serializeString(a[0]);
                this.buf.b += ":";
                b = a.length;
                this.buf.b += y.string(b - 2);
                for (c = 2; c < b; )
                    d = c++,
                    this.serialize(a[d]);
                this.useCache && this.cache.push(a);
                break;
            case 5:
                throw "Cannot serialize function";
            default:
                throw "Cannot serialize " + y.string(a);
            }
        },
        __class__: ya
    };
    var J = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    e["haxe.Timer"] = J;
    J.__name__ = ["haxe", "Timer"];
    J.delay = function(a, b) {
        var c = new J(b);
        c.run = function() {
            c.stop();
            a()
        }
        ;
        return c
    }
    ;
    J.stamp = function() {
        return (new Date).getTime() / 1E3
    }
    ;
    J.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id),
            this.id = null)
        },
        run: function() {},
        __class__: J
    };
    var Y = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = Y.DEFAULT_RESOLVER;
        null == a && (a = M,
        Y.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    e["haxe.Unserializer"] = Y;
    Y.__name__ = ["haxe", "Unserializer"];
    Y.initCodes = function() {
        for (var a = [], b = 0, c = Y.BASE64.length; b < c; ) {
            var d = b++;
            a[Y.BASE64.charCodeAt(d)] = d
        }
        return a
    }
    ;
    Y.run = function(a) {
        return (new Y(a)).unserialize()
    }
    ;
    Y.prototype = {
        setResolver: function(a) {
            this.resolver = null == a ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : a
        },
        get: function(a) {
            return this.buf.charCodeAt(a)
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos; ; ) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d)
                    break;
                if (45 == d) {
                    if (this.pos != c)
                        break;
                    b = !0
                } else {
                    if (48 > d || 57 < d)
                        break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        unserializeObject: function(a) {
            for (; ; ) {
                if (this.pos >= this.length)
                    throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos))
                    break;
                var b = this.unserialize();
                if ("string" != typeof b)
                    throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++))
                throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c)
                return M.createEnum(a, b);
            for (var d = []; 0 < c--; )
                d.push(this.unserialize());
            return M.createEnum(a, b, d)
        },
        unserialize: function() {
            switch (this.get(this.pos++)) {
            case 110:
                return null;
            case 116:
                return !0;
            case 102:
                return !1;
            case 122:
                return 0;
            case 105:
                return this.readDigits();
            case 100:
                for (var a = this.pos; ; ) {
                    var b = this.buf.charCodeAt(this.pos);
                    if (43 <= b && 58 > b || 101 == b || 69 == b)
                        this.pos++;
                    else
                        break
                }
                return y.parseFloat(A.substr(this.buf, a, this.pos - a));
            case 121:
                a = this.readDigits();
                if (58 != this.get(this.pos++) || this.length - this.pos < a)
                    throw "Invalid string length";
                b = A.substr(this.buf, this.pos, a);
                this.pos += a;
                b = decodeURIComponent(b.split("+").join(" "));
                this.scache.push(b);
                return b;
            case 107:
                return Math.NaN;
            case 109:
                return Math.NEGATIVE_INFINITY;
            case 112:
                return Math.POSITIVE_INFINITY;
            case 97:
                a = [];
                for (this.cache.push(a); ; ) {
                    b = this.buf.charCodeAt(this.pos);
                    if (104 == b) {
                        this.pos++;
                        break
                    }
                    117 == b ? (this.pos++,
                    b = this.readDigits(),
                    a[a.length + b - 1] = null) : a.push(this.unserialize())
                }
                return a;
            case 111:
                return a = {},
                this.cache.push(a),
                this.unserializeObject(a),
                a;
            case 114:
                a = this.readDigits();
                if (0 > a || a >= this.cache.length)
                    throw "Invalid reference";
                return this.cache[a];
            case 82:
                a = this.readDigits();
                if (0 > a || a >= this.scache.length)
                    throw "Invalid string reference";
                return this.scache[a];
            case 120:
                throw this.unserialize();
            case 99:
                a = this.unserialize();
                b = this.resolver.resolveClass(a);
                if (null == b)
                    throw "Class not found " + a;
                a = M.createEmptyInstance(b);
                this.cache.push(a);
                this.unserializeObject(a);
                return a;
            case 119:
                a = this.unserialize();
                b = this.resolver.resolveEnum(a);
                if (null == b)
                    throw "Enum not found " + a;
                a = this.unserializeEnum(b, this.unserialize());
                this.cache.push(a);
                return a;
            case 106:
                a = this.unserialize();
                b = this.resolver.resolveEnum(a);
                if (null == b)
                    throw "Enum not found " + a;
                this.pos++;
                var c = this.readDigits()
                  , d = M.getEnumConstructs(b)[c];
                if (null == d)
                    throw "Unknown enum index " + a + "@" + c;
                a = this.unserializeEnum(b, d);
                this.cache.push(a);
                return a;
            case 108:
                a = new Ua;
                for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos); )
                    a.add(this.unserialize());
                this.pos++;
                return a;
            case 98:
                a = new ba;
                for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos); )
                    b = this.unserialize(),
                    a.set(b, this.unserialize());
                this.pos++;
                return a;
            case 113:
                a = new ga;
                this.cache.push(a);
                for (b = this.get(this.pos++); 58 == b; )
                    b = this.readDigits(),
                    a.set(b, this.unserialize()),
                    b = this.get(this.pos++);
                if (104 != b)
                    throw "Invalid IntMap format";
                return a;
            case 77:
                a = new Ta;
                for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos); )
                    b = this.unserialize(),
                    a.set(b, this.unserialize());
                this.pos++;
                return a;
            case 118:
                return a = A.substr(this.buf, this.pos, 19),
                a = A.strDate(a),
                this.cache.push(a),
                this.pos += 19,
                a;
            case 115:
                a = this.readDigits();
                d = this.buf;
                if (58 != this.get(this.pos++) || this.length - this.pos < a)
                    throw "Invalid bytes length";
                var g = Y.CODES;
                null == g && (g = Y.initCodes(),
                Y.CODES = g);
                for (var f = this.pos, e = a & 3, h = f + (a - e), b = fb.alloc(3 * (a >> 2) + (2 <= e ? e - 1 : 0)), c = 0; f < h; ) {
                    var j = g[na.fastCodeAt(d, f++)]
                      , k = g[na.fastCodeAt(d, f++)];
                    b.set(c++, j << 2 | k >> 4);
                    j = g[na.fastCodeAt(d, f++)];
                    b.set(c++, k << 4 | j >> 2);
                    k = g[na.fastCodeAt(d, f++)];
                    b.set(c++, j << 6 | k)
                }
                2 <= e && (k = g[na.fastCodeAt(d, f++)],
                h = g[na.fastCodeAt(d, f++)],
                b.set(c++, k << 2 | h >> 4),
                3 == e && (d = g[na.fastCodeAt(d, f++)],
                b.set(c++, h << 4 | d >> 2)));
                this.pos += a;
                this.cache.push(b);
                return b;
            case 67:
                a = this.unserialize();
                b = this.resolver.resolveClass(a);
                if (null == b)
                    throw "Class not found " + a;
                a = M.createEmptyInstance(b);
                this.cache.push(a);
                a.hxUnserialize(this);
                if (103 != this.get(this.pos++))
                    throw "Invalid custom data";
                return a
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        __class__: Y
    };
    var ac = function() {};
    e["haxe.ds.BalancedTree"] = ac;
    ac.__name__ = ["haxe", "ds", "BalancedTree"];
    ac.prototype = {
        set: function(a, b) {
            this.root = this.setLoop(a, b, this.root)
        },
        setLoop: function(a, b, c) {
            if (null == c)
                return new $(null,a,b,null);
            var d = this.compare(a, c.key);
            if (0 == d)
                return new $(c.left,a,b,c.right,null == c ? 0 : c._height);
            if (0 > d)
                return this.balance(this.setLoop(a, b, c.left), c.key, c.value, c.right);
            a = this.setLoop(a, b, c.right);
            return this.balance(c.left, c.key, c.value, a)
        },
        balance: function(a, b, c, d) {
            var g;
            g = null == a ? 0 : a._height;
            var f;
            f = null == d ? 0 : d._height;
            return g > f + 2 ? function() {
                var b = a.left;
                return null == b ? 0 : b._height
            }(this) >= function() {
                var b = a.right;
                return null == b ? 0 : b._height
            }(this) ? new $(a.left,a.key,a.value,new $(a.right,b,c,d)) : new $(new $(a.left,a.key,a.value,a.right.left),a.right.key,a.right.value,new $(a.right.right,b,c,d)) : f > g + 2 ? function() {
                var a = d.right;
                return null == a ? 0 : a._height
            }(this) > function() {
                var a = d.left;
                return null == a ? 0 : a._height
            }(this) ? new $(new $(a,b,c,d.left),d.key,d.value,d.right) : new $(new $(a,b,c,d.left.left),d.left.key,d.left.value,new $(d.left.right,d.key,d.value,d.right)) : new $(a,b,c,d,(g > f ? g : f) + 1)
        },
        compare: function(a, b) {
            return w.compare(a, b)
        },
        __class__: ac
    };
    var $ = function(a, b, c, d, g) {
        null == g && (g = -1);
        this.left = a;
        this.key = b;
        this.value = c;
        this.right = d;
        this._height = -1 == g ? (function(a) {
            a = a.left;
            return null == a ? 0 : a._height
        }(this) > function(a) {
            a = a.right;
            return null == a ? 0 : a._height
        }(this) ? function(a) {
            a = a.left;
            return null == a ? 0 : a._height
        }(this) : function(a) {
            a = a.right;
            return null == a ? 0 : a._height
        }(this)) + 1 : g
    };
    e["haxe.ds.TreeNode"] = $;
    $.__name__ = ["haxe", "ds", "TreeNode"];
    $.prototype = {
        __class__: $
    };
    var ub = function() {};
    e["haxe.ds.EnumValueMap"] = ub;
    ub.__name__ = ["haxe", "ds", "EnumValueMap"];
    ub.__interfaces__ = [wb];
    ub.__super__ = ac;
    ub.prototype = s(ac.prototype, {
        compare: function(a, b) {
            var c = a[1] - b[1];
            if (0 != c)
                return c;
            var c = a.slice(2)
              , d = b.slice(2);
            return 0 == c.length && 0 == d.length ? 0 : this.compareArgs(c, d)
        },
        compareArgs: function(a, b) {
            var c = a.length - b.length;
            if (0 != c)
                return c;
            for (var c = 0, d = a.length; c < d; ) {
                var g = c++
                  , g = this.compareArg(a[g], b[g]);
                if (0 != g)
                    return g
            }
            return 0
        },
        compareArg: function(a, b) {
            return w.isEnumValue(a) && w.isEnumValue(b) ? this.compare(a, b) : a instanceof Array && null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : w.compare(a, b)
        },
        __class__: ub
    });
    var ga = function() {
        this.h = {}
    };
    e["haxe.ds.IntMap"] = ga;
    ga.__name__ = ["haxe", "ds", "IntMap"];
    ga.__interfaces__ = [wb];
    ga.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        get: function(a) {
            return this.h[a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a))
                return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [], b;
            for (b in this.h)
                this.h.hasOwnProperty(b) && a.push(b | 0);
            return A.iter(a)
        },
        __class__: ga
    };
    var Ta = function() {
        this.h = {};
        this.h.__keys__ = {}
    };
    e["haxe.ds.ObjectMap"] = Ta;
    Ta.__name__ = ["haxe", "ds", "ObjectMap"];
    Ta.__interfaces__ = [wb];
    Ta.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++Ta.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function() {
            var a = [], b;
            for (b in this.h.__keys__)
                this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return A.iter(a)
        },
        __class__: Ta
    };
    var ba = function() {
        this.h = {}
    };
    e["haxe.ds.StringMap"] = ba;
    ba.__name__ = ["haxe", "ds", "StringMap"];
    ba.__interfaces__ = [wb];
    ba.prototype = {
        set: function(a, b) {
            this.h["$" + a] = b
        },
        get: function(a) {
            return this.h["$" + a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty("$" + a)
        },
        keys: function() {
            var a = [], b;
            for (b in this.h)
                this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return A.iter(a)
        },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        __class__: ba
    };
    var fb = function(a, b) {
        this.length = a;
        this.b = b
    };
    e["haxe.io.Bytes"] = fb;
    fb.__name__ = ["haxe", "io", "Bytes"];
    fb.alloc = function(a) {
        for (var b = [], c = 0; c < a; )
            c++,
            b.push(0);
        return new fb(a,b)
    }
    ;
    fb.prototype = {
        get: function(a) {
            return this.b[a]
        },
        set: function(a, b) {
            this.b[a] = b & 255
        },
        __class__: fb
    };
    var Xc = function() {};
    e["haxe.io.Eof"] = Xc;
    Xc.__name__ = ["haxe", "io", "Eof"];
    Xc.prototype = {
        toString: function() {
            return "Eof"
        },
        __class__: Xc
    };
    var Rc = function() {};
    e["haxe.rtti.Meta"] = Rc;
    Rc.__name__ = ["haxe", "rtti", "Meta"];
    Rc.getType = function(a) {
        a = a.__meta__;
        return null == a || null == a.obj ? {} : a.obj
    }
    ;
    var D = function(a, b, c, d, g, f, e, h, j, k, l, m, n, o, p, q) {
        this.m00 = a;
        this.m10 = b;
        this.m20 = c;
        this.m30 = d;
        this.m01 = g;
        this.m11 = f;
        this.m21 = e;
        this.m31 = h;
        this.m02 = j;
        this.m12 = k;
        this.m22 = l;
        this.m32 = m;
        this.m03 = n;
        this.m13 = o;
        this.m23 = p;
        this.m33 = q
    };
    e["hxmath.math.Matrix4x4Default"] = D;
    D.__name__ = ["hxmath", "math", "Matrix4x4Default"];
    D.prototype = {
        __class__: D
    };
    var W = function(a, b) {
        this.x = a;
        this.y = b
    };
    e["hxmath.math.Vector2Default"] = W;
    W.__name__ = ["hxmath", "math", "Vector2Default"];
    W.prototype = {
        __class__: W
    };
    var F = function(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c
    };
    e["hxmath.math.Vector3Default"] = F;
    F.__name__ = ["hxmath", "math", "Vector3Default"];
    F.prototype = {
        __class__: F
    };
    var L = function() {};
    e["js.Boot"] = L;
    L.__name__ = ["js", "Boot"];
    L.getClass = function(a) {
        return a instanceof Array && null == a.__enum__ ? Array : a.__class__
    }
    ;
    L.__string_rec = function(a, b) {
        if (null == a)
            return "null";
        if (5 <= b.length)
            return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__))
            c = "object";
        switch (c) {
        case "object":
            if (a instanceof Array) {
                if (a.__enum__) {
                    if (2 == a.length)
                        return a[0];
                    for (var c = a[0] + "(", b = b + "\t", d = 2, g = a.length; d < g; )
                        var f = d++
                          , c = 2 != f ? c + ("," + L.__string_rec(a[f], b)) : c + L.__string_rec(a[f], b);
                    return c + ")"
                }
                c = a.length;
                d = "[";
                b += "\t";
                for (g = 0; g < c; )
                    f = g++,
                    d += (0 < f ? "," : "") + L.__string_rec(a[f], b);
                return d + "]"
            }
            try {
                d = a.toString
            } catch (e) {
                return "???"
            }
            if (null != d && d != Object.toString && (c = a.toString(),
            "[object Object]" != c))
                return c;
            c = null;
            d = "{\n";
            b += "\t";
            g = null != a.hasOwnProperty;
            for (c in a)
                if (!g || a.hasOwnProperty(c))
                    "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"),
                    d += b + c + " : " + L.__string_rec(a[c], b));
            b = b.substring(1);
            return d + ("\n" + b + "}");
        case "function":
            return "<function>";
        case "string":
            return a;
        default:
            return "" + a
        }
    }
    ;
    L.__interfLoop = function(a, b) {
        if (null == a)
            return !1;
        if (a == b)
            return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, g = c.length; d < g; ) {
                var f = d++
                  , f = c[f];
                if (f == b || L.__interfLoop(f, b))
                    return !0
            }
        return L.__interfLoop(a.__super__, b)
    }
    ;
    L.__instanceof = function(a, b) {
        if (null == b)
            return !1;
        switch (b) {
        case ed:
            return (a | 0) === a;
        case bd:
            return "number" == typeof a;
        case cd:
            return "boolean" == typeof a;
        case String:
            return "string" == typeof a;
        case Array:
            return a instanceof Array && null == a.__enum__;
        case ad:
            return !0;
        default:
            if (null != a) {
                if ("function" == typeof b && (a instanceof b || L.__interfLoop(L.getClass(a), b)))
                    return !0
            } else
                return !1;
            return b == fd && null != a.__name__ || b == gd && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    }
    ;
    L.__cast = function(a, b) {
        if (L.__instanceof(a, b))
            return a;
        throw "Cannot cast " + y.string(a) + " to " + y.string(b);
    }
    ;
    var Qc = function() {};
    e["js.Browser"] = Qc;
    Qc.__name__ = ["js", "Browser"];
    Qc.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return null
        }
    }
    ;
    var z = function() {
        this.keys = new ub;
        this._justShownScale = new G(1);
        this._rotation = new D(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
        this._winColorTimer = this.timeOnLevel = 0;
        this._levelColor = 14698315;
        this._winTimer = 0;
        this._winner = !1;
        this._currentLevel = -1;
        this.freezeControls = this.freezeX = this.freezeY = this.freezeZ = this._pinched = !1;
        this._touchPoints = [];
        this._lastTimeStamp = 0;
        this._currentDragPoint = new W(0,0);
        this._prevDragPoint = new W(0,0);
        this._running = this._dragging = this._pinching = !1;
        this.wAlpha = this.wBeta = this.wGamma = 0;
        if (null != z._instance)
            throw "Game.instance use";
        this.init()
    };
    e["ru.Game"] = z;
    z.__name__ = ["ru", "Game"];
    z.get_instance = function() {
        null == z._instance && (z._instance = new z);
        return z._instance
    }
    ;
    z.prototype = {
        init: function() {
            var a = this;
            this._justShownScale.get_changed().connect(function() {
                a._justShownScaleMatrix = K.scale(a._justShownScale._value, a._justShownScale._value)
            });
            this.display = new o;
            this._tutorial = new Nc;
            this._lineLayer = (new o).add(new bc);
            this._winMask = new xa(16777215,1,1);
            this._winMask.set_visible(this._winMask.set_pointerEnabled(!1));
            k._platform.getKeyboard().down.connect(function(b) {
                a.keys.set(b.key, !0);
                !0
            });
            k._platform.getKeyboard().up.connect(function(b) {
                a.keys.set(b.key, !1);
                !1
            });
            this.retry = n.spr("button_gameplay_retry").centerAnchor().setAlpha(0.6);
            this.menu = n.spr("button_gameplay_level_menu").centerAnchor().setAlpha(0.6);
            this.sound = n.spr("button_gameplay_sound").centerAnchor().setAlpha(0.6);
            this.ui = new Lc;
            this.ui.addMenu(new cc, 0);
            k.root.addChild((new o).add(new sb(p(this, this.update))));
            this.display.addChild(this._lineLayer);
            this.display.addChild(this._tutorial.display);
            this.display.addChild((new o).add(this.retry).add(new P(1.2,0.1)).add(new N(p(this, this.resetCallback))));
            this.display.addChild((new o).add(this.menu).add(new P(1.2,0.1)).add(new N(p(this, this.toLevelMenu))));
            this.display.addChild((new o).add(this.sound).add(new P(1.2,0.1)).add(new N(p(this, this.switchSound))));
            this.display.addChild(this.ui.display);
            this.display.addChild((new o).add(this._winMask));
            l.get_instance().positionManager.add(this.retry, q.Center, q.Top, -100, 55);
            l.get_instance().positionManager.add(this.sound, q.Center, q.Top, 0, 55);
            l.get_instance().positionManager.add(this.menu, q.Center, q.Top, 100, 55)
        },
        addListeners: function() {
            if (null != this._listeners)
                throw "Listeners exist";
            this._listeners = new Ka;
            k._platform.getTouch().get_supported() ? (this._listeners.add(k._platform.getTouch().down.connect(p(this, this.onTouchDown))),
            this._listeners.add(k._platform.getTouch().up.connect(p(this, this.onTouchUp))),
            this._listeners.add(k._platform.getTouch().move.connect(p(this, this.onTouchMove))),
            null) : k._platform.getMouse().get_supported() && (this._listeners.add(k._platform.getMouse().down.connect(p(this, this.onPointerDown))),
            this._listeners.add(k._platform.getMouse().up.connect(p(this, this.onPointerUp))),
            this._listeners.add(k._platform.getMouse().move.connect(p(this, this.onPointerMove))),
            this._listeners.add(k._platform.getMouse().scroll.connect(p(this, this.onMouseWheel))),
            null);
            Ba.clear()
        },
        removeListeners: function() {
            null != this._listeners && this._listeners.dispose();
            this._listeners = null
        },
        start: function() {
            this.addListeners();
            this._running = !0
        },
        stop: function() {
            this.removeListeners();
            this._running = !1
        },
        update: function(a) {
            if (this._running) {
                if (!this._dragging && !this._pinching && null != this._lastDelta && 0 < function(a) {
                    a = a._lastDelta;
                    return a.x * a.x + a.y * a.y
                }(this)) {
                    var b;
                    b = K.rotationY(this._lastDelta.x / 60);
                    var c = K.rotationX(this._lastDelta.y / 60);
                    b = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                    c = this._rotation;
                    this._rotation = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                    b = this._lastDelta;
                    b = new W(b.x,b.y);
                    b.x *= 0.95;
                    b.y *= 0.95;
                    this._lastDelta = b;
                    null != this._lastDelta && 0.02 > function(a) {
                        a = a._lastDelta;
                        return Math.sqrt(a.x * a.x + a.y * a.y)
                    }(this) && (b = this._lastDelta,
                    b.x *= 0,
                    b.y *= 0,
                    b)
                }
                this.timeOnLevel += a;
                this._justShownScale.update(a);
                this.checkWin(a)
            }
        },
        render: function() {
            if (this._running && (function(a) {
                a = a.projection;
                return null == a || null != a && !1
            }(this) && (this.projection = new D(400,0,0,0,0,400,0,0,0,0,-1040 / 960,-8E4 / 960,0,0,-1,0)),
            !function(a) {
                a = a.camera;
                return null == a || null != a && !1
            }(this))) {
                var a, b;
                b = this._justShownScaleMatrix;
                a = this.projection;
                b = new D(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03,b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13,b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23,b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33,b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03,b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13,b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23,b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33,b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03,b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13,b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23,b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33,b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03,b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13,b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23,b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                a = this.view;
                b = new D(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03,b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13,b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23,b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33,b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03,b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13,b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23,b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33,b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03,b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13,b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23,b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33,b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03,b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13,b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23,b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                a = this.translation;
                b = new D(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03,b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13,b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23,b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33,b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03,b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13,b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23,b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33,b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03,b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13,b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23,b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33,b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03,b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13,b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23,b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                a = this._rotation;
                a = new D(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03,b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13,b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23,b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33,b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03,b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13,b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23,b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33,b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03,b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13,b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23,b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33,b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03,b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13,b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23,b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                b = window.document.getElementsByTagName("canvas")[0].getContext("2d");
                b.beginPath();
                for (var c = 0, d = this._lines; c < d.length; ) {
                    var g = d[c];
                    ++c;
                    var f = g.startP1.x
                      , e = g.startP1.y
                      , h = g.startP1.z
                      , k = g.startP2.x
                      , l = g.startP2.y
                      , m = g.startP2.z
                      , g = a
                      , n = g.m03 * f + g.m13 * e + g.m23 * h + g.m33
                      , o = g.m00 * k + g.m10 * l + g.m20 * m + g.m30
                      , p = g.m01 * k + g.m11 * l + g.m21 * m + g.m31
                      , k = g.m03 * k + g.m13 * l + g.m23 * m + g.m33;
                    b.moveTo((g.m00 * f + g.m10 * e + g.m20 * h + g.m30) / n + j.DW / 2, (g.m01 * f + g.m11 * e + g.m21 * h + g.m31) / n + j.DH / 2);
                    b.lineTo(o / k + j.DW / 2, p / k + j.DH / 2)
                }
                b.strokeStyle = "#B8EE46";
                b.lineWidth = 3;
                c = this._levelColor;
                0 < this._winColorTimer && (this._winColorTimer -= 0.016666666666666666,
                c = 255 & this._levelColor >> 16,
                d = 255 & this._levelColor >> 8,
                f = 255 & this._levelColor,
                a = 1 - this._winColorTimer,
                c = 255 + (c - 255) * this._winColorTimer | 0,
                d = 255 + (d - 255) * this._winColorTimer | 0,
                f = 255 + (f - 255) * this._winColorTimer | 0,
                c = y["int"](Math.min(255, c)) << 16 | y["int"](Math.min(255, d)) << 8 | y["int"](Math.min(255, f)),
                b.lineWidth = -7 * Math.pow(a, 0.5) + 10);
                for (a = (16777215 & c).toString(16); 6 > a.length; )
                    a = "0" + y.string(a);
                b.strokeStyle = "#" + y.string(a);
                b.lineCap = "round";
                b.stroke()
            }
        },
        onPointerDown: function(a) {
            this.freezeControls || (this.startDrag(a),
            Ba.clear().add("PNTR"))
        },
        onPointerMove: function(a) {
            this.freezeControls || this._dragging && this.moveDrag(a)
        },
        onPointerUp: function(a) {
            this.freezeControls || this.stopDrag(a)
        },
        onMouseWheel: function(a) {
            if (!this.freezeControls && !this.freezeZ) {
                var a = K.rotationZ(a / 50)
                  , b = this._rotation;
                this._rotation = new D(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03,a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13,a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23,a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33,a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03,a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13,a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23,a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33,a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03,a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13,a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23,a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33,a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03,a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13,a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23,a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33);
                this._pinched = !0
            }
        },
        registerTouchPoint: function(a) {
            var b = l.get_instance().toLocal(a.viewX, a.viewY);
            this._touchPoints.push({
                x: b.x,
                y: b.y,
                id: a.id
            })
        },
        updateTouchPoint: function(a) {
            for (var b = l.get_instance().toLocal(a.viewX, a.viewY), c = 0, d = this._touchPoints; c < d.length; ) {
                var g = d[c];
                ++c;
                if (null != g && g.id == a.id) {
                    g.x = b.x;
                    g.y = b.y;
                    break
                }
            }
        },
        removeTouchPoint: function(a) {
            for (var b = 0, c = this._touchPoints.length; b < c; ) {
                var d = b++;
                if (this._touchPoints[d].id == a.id) {
                    this._touchPoints.splice(d, 1);
                    break
                }
            }
        },
        getTouchPointByID: function(a) {
            for (var b = 0, c = this._touchPoints; b < c.length; ) {
                var d = c[b];
                ++b;
                if (d.id == a)
                    return d
            }
            return null
        },
        onTouchDown: function(a) {
            Ba.clear().add("TOUCH ");
            if (!(this.freezeControls || 2 == this._touchPoints.length))
                if (this.registerTouchPoint(a),
                this._dragging) {
                    if (this._dragging) {
                        this.stopDrag(a);
                        this._touchId1 = a.id;
                        if (null != this._lastDelta) {
                            var b = this._lastDelta;
                            b.x *= 0;
                            b.y *= 0;
                            b
                        }
                        this.startPinch(a)
                    }
                } else
                    this._touchId0 = a.id,
                    this.startDrag(a)
        },
        onTouchMove: function(a) {
            if (!this.freezeControls && (this.updateTouchPoint(a),
            a.id == this._touchId0 || a.id == this._touchId1))
                this._dragging && this.moveDrag(a),
                this._pinching && this.movePinch(a)
        },
        onTouchUp: function(a) {
            if (!this.freezeControls && (this.removeTouchPoint(a),
            a.id == this._touchId0 || a.id == this._touchId1))
                if (this._dragging && this.stopDrag(a),
                this._pinching) {
                    this.stopPinch(a);
                    var b;
                    b = a.id == this._touchId0 ? this._touchId1 : this._touchId0;
                    var c = this.getTouchPointByID(b);
                    null != c && (this._touchId0 = b,
                    this.startDrag(a),
                    null == this._prevDragPoint && (this._prevDragPoint = new W(0,0)),
                    this._prevDragPoint.x = c.x,
                    this._prevDragPoint.y = c.y)
                }
        },
        startDrag: function(a) {
            this._dragging = !0;
            a = l.get_instance().toLocal(a.viewX, a.viewY);
            null == this._prevDragPoint && (this._prevDragPoint = new W(0,0));
            this._prevDragPoint.x = a.x;
            this._prevDragPoint.y = a.y;
            this._lastTimeStamp = J.stamp()
        },
        moveDrag: function(a) {
            a = l.get_instance().toLocal(a.viewX, a.viewY);
            null == this._currentDragPoint && (this._currentDragPoint = new W(0,0));
            this._currentDragPoint.x = a.x;
            this._currentDragPoint.y = a.y;
            var a = this.getSphereVector(this._prevDragPoint.x, this._prevDragPoint.y), b;
            b = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
            0 < b && (a.x /= b,
            a.y /= b,
            a.z /= b,
            a);
            a = this.getSphereVector(this._currentDragPoint.x, this._currentDragPoint.y);
            b = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
            0 < b && (a.x /= b,
            a.y /= b,
            a.z /= b,
            a);
            a = this._prevDragPoint;
            b = this._currentDragPoint;
            b = new W(b.x,b.y);
            b.x -= a.x;
            b.y -= a.y;
            this._lastDelta = b;
            this.freezeX ? this._lastDelta.y = 0 : (a = K.rotationX(this._lastDelta.y / 200),
            b = this._rotation,
            this._rotation = new D(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03,a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13,a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23,a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33,a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03,a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13,a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23,a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33,a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03,a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13,a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23,a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33,a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03,a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13,a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23,a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33));
            this.freezeY ? this._lastDelta.x = 0 : (a = K.rotationY(this._lastDelta.x / 200),
            b = this._rotation,
            this._rotation = new D(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03,a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13,a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23,a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33,a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03,a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13,a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23,a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33,a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03,a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13,a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23,a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33,a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03,a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13,a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23,a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33));
            this._prevDragPoint.x = this._currentDragPoint.x;
            this._prevDragPoint.y = this._currentDragPoint.y;
            this._lastTimeStamp = J.stamp()
        },
        stopDrag: function(a) {
            var b = J.stamp() - this._lastTimeStamp;
            if (null != this._lastDelta) {
                var c;
                if (!(c = 0.1 < b))
                    c = this._lastDelta,
                    c = Math.sqrt(c.x * c.x + c.y * c.y) < 600 * b * k._platform.getStage().get_width() / 720;
                c ? (b = this._lastDelta,
                b.x *= 0,
                b.y *= 0) : (b = this._lastDelta,
                b.x *= 0.6,
                b.y *= 0.6);
                b
            }
            this._dragging = !1;
            a = l.get_instance().toLocal(a.viewX, a.viewY);
            this._currentDragPoint.x = a.x;
            this._currentDragPoint.y = a.y
        },
        startPinch: function() {
            if (!this.freezeZ) {
                var a = this.getTouchPointByID(this._touchId0)
                  , b = this.getTouchPointByID(this._touchId1);
                (null == a || null == b) && this.stopPinch(null);
                this._pinching = !0;
                a = new W(a.x,a.y);
                b = new W(b.x,b.y);
                b = new W(b.x,b.y);
                b.x -= a.x;
                b.y -= a.y;
                this._prevAngle = Math.atan2(b.y, b.x);
                this._pinched = !0
            }
        },
        movePinch: function() {
            if (!this.freezeZ) {
                var a = this.getTouchPointByID(this._touchId0)
                  , b = this.getTouchPointByID(this._touchId1);
                if (null == a || null == b)
                    this.stopPinch(null);
                else {
                    a = new W(a.x,a.y);
                    b = new W(b.x,b.y);
                    b = new W(b.x,b.y);
                    b.x -= a.x;
                    b.y -= a.y;
                    var a = Math.atan2(b.y, b.x)
                      , b = K.rotationZ(-a + this._prevAngle)
                      , c = this._rotation;
                    this._rotation = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                    this._prevAngle = a
                }
            }
        },
        stopPinch: function() {
            this._pinching = !1
        },
        loadLevelFromHolder: function(a) {
            this.loadLevelFromString(t.get(a));
            this._currentLevel = a;
            this._levelColor = t.color(a);
            a = Math.PI;
            this._rotation = this._tutorial.beginLevel(this._currentLevel);
            if (null == this._rotation) {
                this._rotation = new D(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
                var b = K.rotationX((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ? 1 : -1))
                  , c = this._rotation;
                this._rotation = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                b = K.rotationY((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ? 1 : -1));
                c = this._rotation;
                this._rotation = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                a = K.rotationZ(2 * Math.random() * a);
                b = this._rotation;
                this._rotation = new D(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03,a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13,a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23,a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33,a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03,a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13,a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23,a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33,a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03,a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13,a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23,a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33,a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03,a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13,a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23,a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33)
            }
        },
        loadLevelFromArray: function(a) {
            this.clear();
            for (var b = [], c = new W(0,0), d = 0, g = a.length / 2 | 0; d < g; ) {
                var f = d++
                  , e = new F(a[2 * f],-a[2 * f + 1],0);
                b.push(e);
                c.x = Math.max(Math.abs(a[2 * f]), c.x);
                c.y = Math.max(Math.abs(a[2 * f + 1]), c.y)
            }
            this._lines = [];
            this.camera = new F(0,0,3);
            this.translation = K.translation(function(a) {
                a = a.camera;
                return new F(-a.x,-a.y,-a.z)
            }(this));
            this.view = K.view(this.camera, new F(0,0,0));
            a = 0;
            for (d = b.length / 2 | 0; a < d; ) {
                var g = a++, h, f = b[2 * g], f = new F(f.x,f.y,f.z);
                f.x *= 1;
                f.y *= 1;
                f.z *= 1;
                h = f;
                var j, g = b[2 * g + 1], g = new F(g.x,g.y,g.z);
                g.x *= 1;
                g.y *= 1;
                g.z *= 1;
                j = g;
                var f = 1 * Math.max(c.x, c.y), k, g = this.camera, f = h, f = new F(f.x,f.y,f.z);
                f.x -= g.x;
                f.y -= g.y;
                f.z -= g.z;
                k = f;
                var l, g = this.camera, f = j, f = new F(f.x,f.y,f.z);
                f.x -= g.x;
                f.y -= g.y;
                f.z -= g.z;
                l = f;
                var f = 0.7 * Math.max(function() {
                    var a = k;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this), function() {
                    var a = l;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this))
                  , e = 1
                  , m = 0;
                0.99 > Math.random() && (e = 0.1 + (1 < function() {
                    var a = j
                      , a = new F(a.x,a.y,a.z);
                    a.x -= h.x;
                    a.y -= h.y;
                    a.z -= h.z;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this) ? 0.5 * Math.random() : 0),
                m = (f - f * e) * (-0.5 + Math.random()));
                var g = function() {
                    var a = k;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this) + (-0.5 + Math.random()) * f * e + m, n = k, o = n, p;
                p = o;
                p = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
                if (0 < p) {
                    var q = o;
                    q.x /= p;
                    q.y /= p;
                    q.z /= p;
                    q
                }
                o;
                o = n;
                o.x *= g;
                o.y *= g;
                o.z *= g;
                o;
                g = n;
                n = this.camera;
                n = new F(n.x,n.y,n.z);
                n.x += g.x;
                n.y += g.y;
                n.z += g.z;
                g = n;
                f = function() {
                    var a = l;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this) + (-0.5 + Math.random()) * f * e + m;
                n = m = e = l;
                n = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
                0 < n && (o = m,
                o.x /= n,
                o.y /= n,
                o.z /= n,
                o);
                m;
                m = e;
                m.x *= f;
                m.y *= f;
                m.z *= f;
                m;
                f = e;
                e = this.camera;
                e = new F(e.x,e.y,e.z);
                e.x += f.x;
                e.y += f.y;
                e.z += f.z;
                f = new Oc;
                f.startP1 = g;
                f.startP2 = e;
                f.width = 3;
                (function(a) {
                    a = a.center;
                    return null == a || null != a && !1
                }
                )(this) ? (g = new F(g.x,g.y,g.z),
                g.x += e.x,
                g.y += e.y,
                g.z += e.z) : (g = new F(g.x,g.y,g.z),
                g.x += e.x,
                g.y += e.y,
                g.z += e.z,
                g = new F(g.x,g.y,g.z),
                g.x /= 2,
                g.y /= 2,
                g.z /= 2,
                e = this.center,
                e = new F(e.x,e.y,e.z),
                e.x += g.x,
                e.y += g.y,
                e.z += g.z,
                g = e);
                g = new F(g.x,g.y,g.z);
                g.x /= 2;
                g.y /= 2;
                g.z /= 2;
                this.center = g;
                this._lines.push(f)
            }
            null
        },
        loadLevelFromString: function(a) {
            for (var a = a.split(";"), b = [], c = 0; c < a.length; ) {
                var d = a[c];
                ++c;
                for (var d = d.split("|"), e = 0; e < d.length; ) {
                    var f = d[e];
                    ++e;
                    b.push(y.parseFloat(f))
                }
            }
            this.loadLevelFromArray(b)
        },
        clear: function() {
            for (this._dragging = this._pinching = !1; null != this._lineLayer.firstChild; )
                this._lineLayer.removeChild(this._lineLayer.firstChild);
            this._lines = [];
            this.wAlpha = this.wBeta = this.wGamma = 0;
            this._winner = !1;
            this._winColorTimer = this._winTimer = 0;
            this.freezeControls = this._pinched = !1;
            this.ui.hide(!0, !0);
            this._lastDelta = null;
            this.timeOnLevel = 0;
            this._touchPoints = [];
            this._tutorial.clear()
        },
        justShown: function() {
            this._justShownScale.set__(0.1);
            this._justShownScale.animateTo(1, 1.3, Q.elasticOut);
            this.menu.setAlpha(0).alpha.animateTo(0.3, 1.3, Q.quartOut);
            this.retry.setAlpha(0).alpha.animateTo(0.3, 1.3, Q.quartOut);
            this.sound.setAlpha(0).alpha.animateTo(0.3, 1.3, Q.quartOut)
        },
        projectOnSphere: function(a, b) {
            var c = j.DW
              , c = c * c
              , d = a * a
              , e = b * b;
            return d + e <= 0.5 * c ? Math.sqrt(c - (d + e)) : 0.5 * c / Math.sqrt(d + e)
        },
        getSphereVector: function(a, b) {
            var c = this.projectOnSphere(a, b);
            return new F(a,b,c)
        },
        checkWin: function(a) {
            var b = 180 * Math.atan2(this._rotation.m12, this._rotation.m22) / Math.PI
              , c = 180 * Math.atan2(-this._rotation.m02, Math.sqrt(this._rotation.m22 * this._rotation.m22 + this._rotation.m12 * this._rotation.m12)) / Math.PI
              , d = 180 * Math.atan2(this._rotation.m01, this._rotation.m00) / Math.PI;
            if (b = 2.5 > Math.abs(b)) {
                if (c = 2.5 > Math.abs(c)) {
                    if (d = 9 > Math.abs(d))
                        if (d = !this._winner)
                            if (!(d = this._pinching))
                                if (!(d = this._dragging)) {
                                    if (d = null != this._lastDelta)
                                        d = this._lastDelta,
                                        d = 0.01 > Math.sqrt(d.x * d.x + d.y * d.y);
                                    d = d || this._pinched
                                }
                    c = d
                }
                b = c
            }
            if (b) {
                if (this._winTimer += a,
                this._winTimer > (this._pinching || this._dragging ? 2 : 1))
                    this._winner = !0,
                    this.win(),
                    null
            } else
                this._winTimer = 0
        },
        win: function() {
            var a = l.get_instance().toLocal(0, 0)
              , b = l.get_instance().toLocal(k._platform.getStage().get_width(), k._platform.getStage().get_height());
            this.freezeControls = !0;
            if (null != this._lastDelta) {
                var c = this._lastDelta;
                c.x *= 0;
                c.y *= 0;
                c
            }
            this._rotation = new D(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this._winMask.setXY(a.x, a.y);
            this._winMask.setSize(b.x - a.x, b.y - a.y);
            this._winMask.set_visible(!0);
            this._winMask.setAlpha(1).alpha.animateTo(0, 0.9, Q.expoOut);
            this._winColorTimer = 1;
            a = 0;
            3 > this.timeOnLevel ? a = 5 : 6 > this.timeOnLevel ? a = 4 : 10 > this.timeOnLevel ? a = 3 : 15 > this.timeOnLevel ? a = 2 : 30 > this.timeOnLevel && (a = 1);
            H.topLevelCompleted = this._currentLevel + 1;
            H.updateScore(this._currentLevel, a);
            H.save();
            GameAPI.Score.submit(H.getScore());
            this.ui.show(0);
            n.snd("sound/photo").play(0.6)
        },
        toLevelMenu: function(a) {
            a._stopped = !0;
            l.get_instance().show(j.LEVEL_MENU)
        },
        switchSound: function(a) {
            k.volume.set__(1 - k.volume._value);
            a.hit.alpha.set__(0 < k.volume._value ? 0.3 : 0.15)
        },
        reset: function(a) {
            null != a && (a._stopped = !0);
            a = Math.PI;
            this._rotation = this._tutorial.beginLevel(this._currentLevel);
            if (null == this._rotation) {
                this._rotation = new D(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
                var b = K.rotationX((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ? 1 : -1))
                  , c = this._rotation;
                this._rotation = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                b = K.rotationY((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ? 1 : -1));
                c = this._rotation;
                this._rotation = new D(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03,b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13,b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23,b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33,b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03,b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13,b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23,b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33,b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03,b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13,b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23,b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03,b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13,b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23,b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                a = K.rotationZ(2 * Math.random() * a);
                b = this._rotation;
                this._rotation = new D(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03,a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13,a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23,a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33,a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03,a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13,a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23,a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33,a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03,a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13,a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23,a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33,a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03,a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13,a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23,a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33)
            }
            this._winner = this._pinched = !1;
            this.timeOnLevel = this._winColorTimer = this._winTimer = 0;
            this.freezeControls = !1;
            this._touchPoints = [];
            this.ui.hide(!0, !0)
        },
        resetCallback: function(a) {
          
            l.get_instance().show(j.GAME_SCREEN, function() {
                z.get_instance().stop();
                z.get_instance().reset(a);
                z.get_instance().ui.hide(!0, !0)
            })
        },
        get_currentLevel: function() {
            return this._currentLevel
        },
        __class__: z
    };
    var H = function() {};
    e["ru.GameState"] = H;
    H.__name__ = ["ru", "GameState"];
    H.save = function() {
        k._platform.getStorage().set("DHCTOPLEVEL12", H.topLevelCompleted);
        k._platform.getStorage().set("DHCSCORES12", H.scores)
    }
    ;
    H.load = function() {
        H.topLevelCompleted = k._platform.getStorage().get("DHCTOPLEVEL12", 1);
        H.topLevelCompleted = y["int"](Math.max(1, H.topLevelCompleted));
        H.scores = k._platform.getStorage().get("DHCSCORES12", null)
    }
    ;
    H.updateScore = function(a, b) {
        if (null == H.scores) {
            for (var c = [], d = 0, e = 2 * t.numOfLevels(); d < e; )
                d++,
                c.push(0);
            H.scores = c
        }
        H.scores[a] = Math.round(Math.max(H.scores[a], b));
        null
    }
    ;
    H.getScore = function() {
        var a = 0;
        if (null != H.scores)
            for (var b = 0, c = H.scores; b < c.length; ) {
                var d = c[b];
                ++b;
                a = null == d || Math.isNaN(d) ? a + 0 : a + d
            }
        return a
    }
    ;
    var t = function() {};
    e["ru.LevelHolder"] = t;
    t.__name__ = ["ru", "LevelHolder"];
    t.init = function() {
        t._levels = [];
        t.defineColors();
        t.parseLevels();
        t._inited = !0
    }
    ;
    t.parseLevels = function() {
        t._levels = [];
        t._levelNames = [];
        t._levelLinks = [];
        var a = 1;
        null == a && (a = 1);
        for (var b = j.pack.getFile("levels/levels.txt").toString().split("\n"), c = b.length - 1; 0 <= c; )
            ("" == b[c] || null == b[c] || 4 >= b[c].length) && b.splice(c, 1),
            c--;
        for (var c = 0, d = y["int"](Math.floor(b.length / 2)); c < d; ) {
            var e = c++
              , f = b[2 * e]
              , h = b[2 * e + 1]
              , k = "https://www.google.ru/?gfe_rd=cr&ei=op2uVf2fBKW7wQPevK_4Ag#newwindow=1&q=" + f;
            if (1 == e + a || 2 == e + a || 3 == e + a)
                k = "https://en.wikipedia.org/wiki/Tutorial";
            e = a + e;
            t._levels[e] = h;
            t._levelNames[e] = f;
            t._levelLinks[e] = k
        }
    }
    ;
    t.defineColors = function() {
        t._levelColors = [];
        t._levelColors[1] = 12119622;
        for (var a = [12119622, 4574703, 15811474, 15953217, 4322220], b = 0; 100 > b; ) {
            var c = b++;
            t._levelColors[c] = a[Math.floor(Math.random() * a.length)]
        }
    }
    ;
    t.numOfLevels = function() {
        t._inited || t.init();
        return 48
    }
    ;
    t.get = function(a) {
        t._inited || t.init();
        if (0 > a || 48 < a)
            throw "Bad level number";
        return t._levels[a]
    }
    ;
    t.color = function(a) {
        t._inited || t.init();
        return null == t._levelColors[a] ? 16749608 : t._levelColors[a]
    }
    ;
    t.$name = function(a) {
        t._inited || t.init();
        return "" == t._levelNames[a] || null == t._levelNames[a] ? "GENERIC LEVEL NAME" : t._levelNames[a]
    }
    ;
    t.link = function(a) {
        t._inited || t.init();
        return "" == t._levelLinks[a] || null == t._levelLinks[a] ? "http://wikipedia.org" : t._levelLinks[a]
    }
    ;
    var j = function() {};
    e["ru.Main"] = j;
    j.__name__ = ["ru", "Main"];
    j.main = function() {
        k.init();
        var a = aa.fromAssets("bootstrap");
        l.get_instance();
        a = new Yb(a,j.onSuccess);
        k.root.addChild((new o).add(a))
    }
    ;
    j.onSuccess = function(a) {
        j.pack = a;
        n.addPack(a);
        j.font = new Da(a,"fonts/arial");
        j.numberFont = new Da(a,"fonts/doodle");
        j.whiteFont = new Da(a,"fonts/white");
        a = (new Kc(a.getTexture("sprites"))).parseJSON(a.getFile("spritesjson.txt").toString());
        n.addAtlas(a);
        j.initSpilApi();
        H.load();
        t.link(1);
        k.root.addChild((new o).add(new xa(16711680,1,1)));
        j.setupBackground();
        l.fillScreen = !0;
        l.get_instance().addTransition(j.LEVEL_MENU, j.GAME_SCREEN, new eb);
        l.get_instance().addTransition(j.GAME_SCREEN, j.GAME_SCREEN, new eb);
        l.get_instance().addTransition(j.GAME_SCREEN, j.WIN_SCREEN, new eb);
        l.get_instance().setScreenSize(j.DW, j.DH);
        l.get_instance().addScreen(j.GAME_SCREEN, dc);
        l.get_instance().addScreen(j.MAIN_MENU, ec);
        l.get_instance().addScreen(j.LEVEL_MENU, fc);
        l.get_instance().addScreen(j.INFO_SCREEN, gc);
        l.get_instance().addScreen(j.WIN_SCREEN, hc);
        k.root.addChild(l.get_instance().display);
        n.snd("sound/music").loop();
        l.get_instance().show(j.MAIN_MENU);
        null
    }
    ;
    j.setupBackground = function() {
        j.back = new Ea(n.tex("main_pattern"));
        k.root.addChild((new o).add(j.back));
        j.back.setSize(k._platform.getStage().get_width(), k._platform.getStage().get_height());
        l.get_instance().stageResize.connect(function() {
            j.back.setSize(k._platform.getStage().get_width(), k._platform.getStage().get_height())
        })
    }
    ;
    j.initSpilApi = function() {
        k.volume.get_changed().connect(function() {
            j.oldVolume = k.volume._value
        });
        GameAPI.loadAPI(j.onSpilApiLoad, {
            id: "576742227280298259"
        })
    }
    ;
    j.onSpilApiLoad = function(a) {
        j.apiLoaded.set__(!0);
        j.moreGames = a.Branding.getLink("more_games");
        j.logoData = a.Branding.getLogo();
        null != j.logoData.image && "" != j.logoData.image && j.logoData.image != Math.NaN && (a = new aa,
        a.add("logo", j.logoData.image),
        k._platform.loadAssetPack(a).success.connect(j.onSpilLogoLoad))
    }
    ;
    j.globalStop = function() {
        k.volume.set__(0);
        l.get_instance().display.add(new ib(0))
    }
    ;
    j.globalStart = function() {
        k.volume.set__(j.oldVolume);
        null != l.get_instance().display._compMap.SpeedAdjuster_6 && l.get_instance().display.remove(l.get_instance().display._compMap.SpeedAdjuster_6)
    }
    ;
    j.toMoreGames = function() {
        if (null != j.moreGames) {
            var a = j.moreGames.action;
            a()
        }
        return null != j.moreGames ? j.moreGames.action : "nothing"
    }
    ;
    j.toSpilLogo = function() {
        if (null != j.logoData) {
            var a = j.logoData.action;
            a()
        }
    }
    ;
    j.onSpilLogoLoad = function(a) {
        j.logo.set__(a.getTexture("logo"))
    }
    ;
    var K = function() {};
    e["ru.MatUtils"] = K;
    K.__name__ = ["ru", "MatUtils"];
    K.translation = function(a) {
        return new D(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1)
    }
    ;
    K.rotationX = function(a) {
        var b = Math.cos(a)
          , a = Math.sin(a);
        return new D(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1)
    }
    ;
    K.rotationY = function(a) {
        var b = Math.cos(a)
          , a = Math.sin(a);
        return new D(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1)
    }
    ;
    K.rotationZ = function(a) {
        var b = Math.cos(a)
          , a = Math.sin(a);
        return new D(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1)
    }
    ;
    K.view = function(a, b) {
        var c = new F(b.x,b.y,b.z);
        c.x -= a.x;
        c.y -= a.y;
        c.z -= a.z;
        var d;
        d = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
        0 < d && (c.x /= d,
        c.y /= d,
        c.z /= d,
        c);
        d = new F(0,1,0);
        d = new F(d.x,d.y,d.z);
        var e = d.z * c.x - d.x * c.z
          , f = d.x * c.y - d.y * c.x;
        d.x = d.y * c.z - d.z * c.y;
        d.y = e;
        d.z = f;
        e = Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z);
        0 < e && (d.x /= e,
        d.y /= e,
        d.z /= e,
        d);
        var e = new F(c.x,c.y,c.z)
          , f = e.z * d.x - e.x * d.z
          , h = e.x * d.y - e.y * d.x;
        e.x = e.y * d.z - e.z * d.y;
        e.y = f;
        e.z = h;
        var f = d.x
          , h = e.x
          , j = c.x
          , k = d.y
          , l = e.y
          , m = c.y
          , n = d.z
          , o = e.z
          , p = c.z
          , q = new F(-a.x,-a.y,-a.z);
        d = d.x * q.x + d.y * q.y + d.z * q.z;
        q = new F(-a.x,-a.y,-a.z);
        e = e.x * q.x + e.y * q.y + e.z * q.z;
        q = new F(-a.x,-a.y,-a.z);
        return new D(f,h,j,0,k,l,m,0,n,o,p,0,d,e,c.x * q.x + c.y * q.y + c.z * q.z,1)
    }
    ;
    K.scale = function(a, b, c) {
        null == c && (c = 1);
        null == b && (b = 1);
        null == a && (a = 1);
        return new D(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)
    }
    ;
    var Nc = function() {
        this.text = new Na(j.whiteFont,"");
        this.level = 0;
        this.t0 = 3;
        this.t = 0;
        this.display = (new o).add(new u);
        Sa.get_self().add(p(this, this.update));
        this.h1 = n.spr("hand");
        this.h2 = n.spr("hand");
        this.h1.set_pointerEnabled(this.h2.set_pointerEnabled(!1));
        this.display.addChild((new o).add(this.h1.centerAnchor()));
        this.display.addChild((new o).add(this.h2.centerAnchor()));
        this.display.addChild((new o).add(this.text));
        this.h1.set_visible(this.h2.set_visible(!1));
        this.h2.setScaleXY(-1, 1)
    };
    e["ru.Tutorial"] = Nc;
    Nc.__name__ = ["ru", "Tutorial"];
    Nc.prototype = {
        update: function(a) {
            if (!(1 != this.level && 2 != this.level)) {
                this.t += a;
                this.t > this.t0 && (this.t = 0);
                if (1 == this.level) {
                    var b = 0.8 * this.t0
                      , a = j.DW / 2;
                    if (this.t < b)
                        this.h1.setXY((j.DW - a) / 2 + a * (1 - this.t / b), 0.75 * j.DH),
                        this.h1.setAlpha(1);
                    else {
                        var b = (this.t - b) / (this.t0 - b)
                          , c = Math.pow(2 * b - 1, 2) - 1;
                        this.h1.setXY((j.DW - a) / 2 + a * b, 0.75 * j.DH + 100 * c);
                        this.h1.setAlpha(0.3)
                    }
                }
                2 == this.level && (a = 0.8 * this.t0,
                b = 0,
                c = 0.4 * j.DW,
                this.t < a ? (b = 0.3 * this.t / a * Math.PI,
                this.h1.setAlpha(1)) : (b = 0.3 * (1 - (this.t - a) / (this.t0 - a)) * Math.PI,
                this.h1.setAlpha(0.3)),
                this.h1.setXY(j.DW / 2 + Math.cos(b) * c, j.DH / 2 + Math.sin(b) * c),
                this.h2.setXY(j.DW / 2 + Math.cos(b + Math.PI) * c, j.DH / 2 + Math.sin(b + Math.PI) * c))
            }
        },
        beginLevel: function(a) {
            this.clear();
            this.level = 0;
            var b = null;
            1 == a && (b = K.rotationY(Math.PI / 2),
            z.get_instance().freezeX = z.get_instance().freezeZ = !0,
            this.h1.set_visible(this.text.set_visible(!0)),
            this.h2.set_visible(!1),
            this.level = 1,
            this.t0 = 2,
            this.text.set_text("DRAG TO ROTATE"),
            this.text.centerAnchor().setXY(j.DW / 2, 0.9 * j.DH).setScale(0.5));
            2 == a && (this.level = 2,
            b = K.rotationZ(0.3 * Math.PI),
            z.get_instance().freezeY = z.get_instance().freezeX = !0,
            this.h1.set_visible(this.h2.set_visible(this.text.set_visible(!0))),
            this.t0 = 2,
            this.text.set_text("USE TWO FINGERS OR MOUSE WHEEL TO ROTATE"),
            this.text.centerAnchor().setXY(j.DW / 2, 0.9 * j.DH).setScale(0.5));
            3 == a && (this.level = 3,
            this.text.set_visible(!0),
            this.text.set_text("ROTATE THE MODEL UNTIL YOU FIND RIGHT VIEW"),
            this.text.centerAnchor().setXY(j.DW / 2, 0.9 * j.DH).setScale(0.5));
            this.t = 0;
            return b
        },
        clear: function() {
            for (; null != this.display.firstChild; )
                this.display.removeChild(this.display.firstChild);
            this.display.addChild(this.h1.owner);
            this.display.addChild(this.h2.owner);
            this.display.addChild(this.text.owner);
            this.text.set_visible(!1);
            this.h1.set_visible(this.h2.set_visible(!1));
            this.level = 0;
            z.get_instance().freezeControls = z.get_instance().freezeX = z.get_instance().freezeY = z.get_instance().freezeZ = !1
        },
        __class__: Nc
    };
    var cc = function() {
        Ja.call(this);
        this.hideable = !1;
        this.back1 = new Ea(n.tex("pattern_win"));
        this.back2 = new Ea(n.tex("pattern_win"));
        this.display.addChild((new o).add(this.back1));
        this.display.addChild((new o).add(this.back2));
        this.name = new Na(j.whiteFont,"FORD BELLEVILLE, 1968");
        this.back1.owner.addChild((new o).add(this.name.setScale(0.7).setAlpha(1)));
        this.play = n.spr("button_gameplay_next");
        this.retry = n.spr("button_gameplay_retry");
        this.menu = n.spr("button_gameplay_level_menu");
        this.back2.owner.addChild((new o).add(this.play).add(new P(1.1,0.1)).add(new N(p(this, this.nextLevel))));
        this.back2.owner.addChild((new o).add(this.retry).add(new P(1.1,0.1)).add(new N(p(this, this.retryCallback))));
        this.back2.owner.addChild((new o).add(this.menu).add(new P(1.1,0.1)).add(new Zb(j.LEVEL_MENU)));
        this.info = n.spr("button_gameplay_info");
        this.back1.owner.addChild((new o).add(this.info.centerAnchor()));
        this.info.get_pointerUp().connect(function() {
            k._platform.getWeb().openBrowser(t.link(z.get_instance().get_currentLevel()))
        });
        this.t = new G(123);
        this.t.get_changed().connect(p(this, this.updateLayout));
        Sa.get_self().add((Zc = this.t,
        p(Zc, Zc.update)));
        l.get_instance().stageResize.connect(p(this, this.updateLayout))
    };
    e["ru.menus.WinMenu"] = cc;
    cc.__name__ = ["ru", "menus", "WinMenu"];
    cc.__super__ = Ja;
    cc.prototype = s(Ja.prototype, {
        nextLevel: function() {
            z.get_instance().get_currentLevel() + 1 > t.numOfLevels() ? l.get_instance().show(j.WIN_SCREEN) : l.get_instance().show(j.GAME_SCREEN, function() {
                z.get_instance().loadLevelFromHolder(z.get_instance().get_currentLevel() + 1);
                z.get_instance().ui.hide(!0, !0)
            })
        },
        open: function() {
            GameAPI.GameBreak.request(j.globalStop, j.globalStart);
            Ja.prototype.open.call(this);
            this.t.set__(0);
            this.t.animateTo(1, 0.5, Q.quintOut);
            this.enablePointer();
            this.name.set_text(t.$name(z.get_instance().get_currentLevel()).toUpperCase())
        },
        updateLayout: function() {
            var a = l.get_instance().toLocal(0, 0)
              , b = l.get_instance().toLocal(k._platform.getStage().get_width(), k._platform.getStage().get_height());
            this.back1.setSize(b.x - a.x, this.back1.texture.get_height()).setXY(a.x, -this.back1.texture.get_height() * (1 - this.t._value) + a.y);
            this.back2.setSize(b.x - a.x, this.back2.texture.get_height()).setScaleXY(1, -1).setAnchor(0, this.back2.texture.get_height()).setXY(a.x, b.y - this.back2.texture.get_height() * this.t._value);
            this.name.centerAnchor().setXY((b.x - a.x) / 2, this.back1.texture.get_height() / 2);
            this.info.setXY(this.name.x._value + this.name.getNaturalWidth() * this.name.scaleX._value / 2 + 30, this.name.y._value);
            this.menu.centerAnchor().setXY(-100 + this.back2.width._value / 2, this.back2.texture.get_height() / 2).setScaleXY(1, -1);
            this.retry.centerAnchor().setXY(this.back2.width._value / 2, this.back2.texture.get_height() / 2).setScaleXY(1, -1);
            this.play.centerAnchor().setXY(100 + this.back2.width._value / 2, this.back2.texture.get_height() / 2).setScaleXY(1, -1)
        },
        hide: function() {
            this.disablePointer();
            Ja.prototype.hide.call(this)
        },
        onInstantClose: function() {
            Ja.prototype.onInstantClose.call(this)
        },
        retryCallback: function(a) {
            l.get_instance().show(j.GAME_SCREEN, function() {
                z.get_instance().stop();
                z.get_instance().reset(a);
                z.get_instance().ui.hide(!0, !0)
            })
        },
        __class__: cc
    });
    var ic = function(a) {
        this.level = 0;
        r.call(this);
        this.level = a
    };
    e["ru.objects.LevelButton"] = ic;
    ic.__name__ = ["ru", "objects", "LevelButton"];
    ic.__super__ = r;
    ic.prototype = s(r.prototype, {
        get_name: function() {
            return "LevelButton_9"
        },
        onUpdate: function() {
            var a = this.owner._compMap.Sprite_3;
            null != a && (H.topLevelCompleted >= this.level ? a.setAlpha(1) : a.setAlpha(0.6))
        },
        __class__: ic
    });
    var Oc = function() {
        this.width = 2
    };
    e["ru.objects.Line"] = Oc;
    Oc.__name__ = ["ru", "objects", "Line"];
    Oc.prototype = {
        __class__: Oc
    };
    var dc = function() {
        la.call(this);
        this.id = j.GAME_SCREEN;
        this.level = 100;
        this.display.addChild(z.get_instance().display)
    };
    e["ru.screen.GameScreen"] = dc;
    dc.__name__ = ["ru", "screen", "GameScreen"];
    dc.__super__ = la;
    dc.prototype = s(la.prototype, {
        onShow: function() {
            z.get_instance().start();
            z.get_instance().sound.alpha.set__(0 < k.volume._value ? 0.3 : 0.15);
            z.get_instance().justShown();
            j.back.texture = n.tex("game_pattern")
        },
        onHide: function() {
            z.get_instance().stop();
            j.back.texture = n.tex("main_pattern")
        },
        __class__: dc
    });
    var gc = function() {
        la.call(this);
        this.id = j.INFO_SCREEN;
        this.level = 8;
        var a = n.spr("button_main_menu").centerAnchor();
        this.display.addChild((new o).add(a).add(new P(1.3,0.1)).add(new N(p(this, this.toMainMenu))));
        a.setXY(j.DW / 2, 0.9 * j.DH);
        var b = n.spr("info");
        this.display.addChild((new o).add(b.centerAnchor().setXY(j.DW / 2, 0.4 * j.DH)));
        this.addAnim(new ca(b,0.3,0.7));
        this.addAnim(new ca(a,0.5,0.7));
        if (null != j.logo._value)
            this.addSpilLogo();
        else
            j.logo.get_changed().connect(p(this, this.addSpilLogo)).once()
    };
    e["ru.screen.InfoScreen"] = gc;
    gc.__name__ = ["ru", "screen", "InfoScreen"];
    gc.__super__ = ma;
    gc.prototype = s(ma.prototype, {
        addSpilLogo: function() {
            if (null != j.logo._value) {
                var a = (new ra(j.logo._value)).setScale(0.7);
                a.get_pointerUp().connect(j.toSpilLogo);
                this.display.addChild((new o).add(a));
                l.get_instance().positionManager.add(a, q.Left, q.Top, 25, 25)
            }
        },
        toMainMenu: function() {
            l.get_instance().show(j.MAIN_MENU)
        },
        __class__: gc
    });
    var fc = function() {
        this.target = this.amplitude = 0;
        this.start = new Ca;
        this.stamp = this.stamp0 = 0;
        this.down = this.dragging = !1;
        this.scroll = 0;
        la.call(this);
        this.id = j.LEVEL_MENU;
        this.level = 5;
        var a = n.spr("button_main_menu").centerAnchor();
        this.arrLeft = n.spr("button_arrow_left").centerAnchor().setXY(50, j.DH / 2);
        this.arrRight = n.spr("button_arrow_right").centerAnchor().setXY(j.DW - 50, j.DH / 2);
        l.get_instance().positionManager.add(a, q.Left, q.Top, 50, 50);
        l.get_instance().positionManager.add(this.arrLeft, q.Left, q.Center, 50, 0);
        l.get_instance().positionManager.add(this.arrRight, q.Right, q.Center, -50, 0);
        this.display.addChild((new o).add(a).add(new P(1.3,0.1)).add(new N(p(this, this.toMainMenu))));
        this.display.addChild((new o).add(this.arrLeft));
        this.display.addChild((new o).add(this.arrRight));
        this.arrLeft.get_pointerUp().connect(p(this, this.scrollLeft), !0);
        this.arrRight.get_pointerUp().connect(p(this, this.scrollRight), !0);
        this.display.add(new sb(p(this, this.update)));
        this.addRoom("EARLY CARS");
        this.addRoom("THE BEST YEARS");
        this.addRoom("MODERN CARS");
        if (null != j.logo._value)
            this.addSpilLogo();
        else
            j.logo.get_changed().connect(p(this, this.addSpilLogo)).once()
    };
    e["ru.screen.LevelScreen"] = fc;
    fc.__name__ = ["ru", "screen", "LevelScreen"];
    fc.__super__ = ma;
    fc.prototype = s(ma.prototype, {
        addSpilLogo: function() {
            if (null != j.logo._value) {
                var a = (new ra(j.logo._value)).setScale(0.7).centerAnchor();
                a.get_pointerUp().connect(j.toSpilLogo);
                this.display.addChild((new o).add(a));
                l.get_instance().positionManager.add(a, q.Center, q.Bottom, 0, -50)
            }
        },
        scrollLeft: function() {
            this.dragging || (this.target = Math.round(this.scroll) - 1,
            this.amplitude = this.target - this.scroll,
            0 > this.target && (this.amplitude -= this.target,
            this.target = 0),
            this.target > this.rooms.length - 1 && (this.amplitude -= this.target - this.rooms.length + 1,
            this.target = this.rooms.length - 1),
            n.snd("sound/swoosh").play())
        },
        scrollRight: function() {
            this.dragging || (this.target = Math.round(this.scroll) + 1,
            this.amplitude = this.target - this.scroll,
            0 > this.target && (this.amplitude -= this.target,
            this.target = 0),
            this.target > this.rooms.length - 1 && (this.amplitude -= this.target - this.rooms.length + 1,
            this.target = this.rooms.length - 1),
            n.snd("sound/swoosh").play())
        },
        pDown: function(a) {
            this.down = !0;
            this.dragging = !1;
            a = l.get_instance().toLocal(a.viewX, a.viewY);
            this.stamp = this.stamp0 = J.stamp();
            this.last = a;
            this.speed = 0;
            this.start.set(a.x, a.y)
        },
        pMove: function(a) {
            a = l.get_instance().toLocal(a.viewX, a.viewY);
            35 < this.start.distanceTo(a.x, a.y) && (this.dragging = !0);
            if (this.down && this.dragging) {
                var b = a.x - this.last.x, c;
                c = J.stamp() == this.stamp ? 0.016666666666666666 : J.stamp() - this.stamp;
                this.scroll -= b / j.DW * l.get_instance().ratio;
                this.speed = -b / c;
                this.stamp = J.stamp();
                this.last.set(a.x, a.y)
            }
        },
        pUp: function(a) {
            this.down = !1;
            l.get_instance().toLocal(a.viewX, a.viewY);
            this.dragging ? (J.stamp() == this.stamp || J.stamp(),
            this.amplitude = 8 * this.speed / 60 / j.DW * l.get_instance().ratio,
            this.target = this.scroll + this.amplitude,
            0.3 < Math.abs(this.amplitude) && n.snd("sound/swoosh").play(),
            a = Math.round(this.target),
            this.amplitude += a - this.target,
            this.target = a,
            0 > this.target && (this.amplitude -= this.target,
            this.target = 0),
            this.target > this.rooms.length - 1 && (this.amplitude -= this.target - this.rooms.length + 1,
            this.target = this.rooms.length - 1),
            this.stamp = J.stamp(),
            this.dragging = !1) : 0 != this.scroll % 1 && (this.target = Math.round(this.target),
            this.target = Math.max(0, this.target),
            this.target = Math.min(this.rooms.length - 1, this.target),
            this.amplitude = this.target - this.scroll,
            this.stamp = J.stamp())
        },
        update: function() {
            if (!this.down && 0 != this.amplitude && !Math.isNaN(this.amplitude)) {
                var a = J.stamp() - this.stamp
                  , a = -this.amplitude * Math.exp(-a / 0.15);
                this.scroll = this.target + a;
                1.5E-4 > Math.abs(a) && (this.amplitude = 0,
                this.scroll = this.target)
            }
            for (var a = l.get_instance().toLocal(k._platform.getStage().get_width(), 0).x, b = 0, c = this.rooms.length; b < c; ) {
                var d = b++;
                this.rooms[d].x.set__((-this.scroll + d) * a)
            }
            this.arrLeft.set_visible(this.arrLeft.set_pointerEnabled(0.5 > this.scroll ? !1 : !0));
            this.arrRight.set_visible(this.arrRight.set_pointerEnabled(this.scroll > this.rooms.length - 1 - 0.5 ? !1 : !0))
        },
        addRoom: function(a) {
            var b = this;
            null == this.rooms && (this.rooms = []);
            var c = 16 * this.rooms.length + 1
              , d = new u
              , e = (new o).add(d)
              , f = j.DW / 2
              , h = j.DW / 1.7
              , a = new Na(j.whiteFont,a);
            e.addChild((new o).add(a.centerAnchor().setXY(j.DW / 2, 0.12 * j.DH)));
            for (a = 0; 16 > a; ) {
                var k = [a++];
                this.level = c + k[0];
                var m = n.spr("button_level_" + Math.floor(3 * Math.random() + 1)).centerAnchor();
                m.setXY((j.DW - f) / 2 + f / 3 * (k[0] % 4), (j.DH - h) / 2 + h / 3 * Math.floor(k[0] / 4));
                var p = (new o).add(m).add(new ic(this.level));
                m.owner.add(new N(function(a) {
                    return function() {
                        !b.dragging && H.topLevelCompleted >= c + a[0] && (z.get_instance().loadLevelFromHolder(c + a[0]),
                        l.get_instance().show(j.GAME_SCREEN))
                    }
                }(k))).add(new P(1.3,0.1));
                k = (new Na(j.numberFont,y.string(this.level))).setLetterSpacing(4).centerAnchor().setXY(m.getNaturalWidth() / 2, m.getNaturalHeight() / 2);
                p.addChild((new o).add(k));
                e.addChild(p)
            }
            this.rooms.push(d);
            this.display.addChild(e)
        },
        onShow: function() {
            this.disposer = new Ka;
            this.disposer.add(k._platform.getPointer().down.connect(p(this, this.pDown)));
            this.disposer.add(k._platform.getPointer().up.connect(p(this, this.pUp)));
            this.disposer.add(k._platform.getPointer().move.connect(p(this, this.pMove)));
            this.scroll = Math.round(this.scroll)
        },
        onHide: function() {
            this.disposer.dispose()
        },
        toMainMenu: function() {
            this.dragging || l.get_instance().show(j.MAIN_MENU)
        },
        __class__: fc
    });
    var ec = function() {
        la.call(this);
        this.id = j.GAME_SCREEN;
        this.level = 1;
        var a = window.navigator.userAgent.toLowerCase()
          , b = -1 < a.indexOf("mozilla/5.0") && -1 < a.indexOf("android") && -1 < a.indexOf("applewebkit") && -1 < a.indexOf("version") && 0 > a.indexOf("chrome")
          , a = -1 < a.indexOf("built") || -1 < a.indexOf("samsung") || -1 < a.indexOf("galaxy")
          , c = n.spr("logo").centerAnchor()
          , d = n.spr("chapter").centerAnchor()
          , e = n.spr("button_play").centerAnchor();
        this.sound = n.spr("button_sound").centerAnchor();
        var f = n.spr("button_more_games").centerAnchor()
          , h = n.spr("button_info").centerAnchor();
        this.fullscreen = n.spr("button_fullscreen_off").centerAnchor();
        this.display.addChild((new o).add(c).add(new tb));
        this.display.addChild((new o).add(d).add(new tb(4.1,9)));
        this.display.addChild((new o).add(e).add(new P(1.1,0.1)).add(new N(p(this, this.toLevelMenu))));
        this.display.addChild((new o).add(this.sound).add(new P(1.2,0.1)).add(new N(p(this, this.switchSound))));
        this.display.addChild((new o).add(f).add(new P(1.2,0.1)).add(new N(j.toMoreGames)));
        this.display.addChild((new o).add(h).add(new P(1.2,0.1)).add(new N(p(this, this.toInfoScreen))));
        k._platform.getStage().get_fullscreenSupported() && !b && !a && this.display.addChild((new o).add(this.fullscreen).add(new P(1.2,0.1)).add(new N(p(this, this.toFullScreen))));
        l.get_instance().positionManager.add(c, q.Center, q.Top, 0, 180);
        l.get_instance().positionManager.add(d, q.Center, q.Top, 0, 320);
        l.get_instance().positionManager.add(e, q.Center, q.Center, 0, 80);
        l.get_instance().positionManager.add(this.sound, q.Left, q.Bottom, 60, -60);
        l.get_instance().positionManager.add(f, q.Center, q.Bottom, 0, -60);
        l.get_instance().positionManager.add(h, q.Right, q.Bottom, -60, -60);
        k._platform.getStage().get_fullscreenSupported() && !b && !a && l.get_instance().positionManager.add(this.fullscreen, q.Right, q.Top, -60, 60);
        this.addAnim(new ca(c,0.2,0.6));
        this.addAnim(new ca(d,0.4,0.6));
        this.addAnim(new ca(e,0.6,0.6));
        this.addAnim(new ca(this.sound,0.8,0.6));
        this.addAnim(new ca(f,0.85,0.6,!1));
        this.addAnim(new ca(h,0.9,0.6));
        k._platform.getStage().get_fullscreenSupported() && !b && !a && this.addAnim(new ca(this.fullscreen,0.25,0.6));
        if (null != j.logo._value)
            this.addSpilLogo();
        else
            j.logo.get_changed().connect(p(this, this.addSpilLogo)).once()
    };
    e["ru.screen.MainScreen"] = ec;
    ec.__name__ = ["ru", "screen", "MainScreen"];
    ec.__super__ = ma;
    ec.prototype = s(ma.prototype, {
        addSpilLogo: function() {
            if (null != j.logo._value) {
                var a = (new ra(j.logo._value)).setScale(0.7);
                a.get_pointerUp().connect(j.toSpilLogo);
                this.display.addChild((new o).add(a));
                l.get_instance().positionManager.add(a, q.Left, q.Top, 25, 25)
            }
        },
        toFullScreen: function() {
            k._platform.getStage().requestFullscreen(!k._platform.getStage().fullscreen._value);
            this.fullscreen.texture = k._platform.getStage().fullscreen._value ? n.tex("button_fullscreen_off") : n.tex("button_fullscreen_on")
        },
        onShow: function() {
            ma.prototype.onShow.call(this);
            this.sound.alpha.set__(k.volume._value + 0.5)
        },
        toLevelMenu: function() {
            l.get_instance().show(j.LEVEL_MENU)
        },
        toInfoScreen: function() {
            l.get_instance().show(j.INFO_SCREEN)
        },
        switchSound: function(a) {
            k.volume.set__(1 - k.volume._value);
            a.hit.alpha.set__(k.volume._value + 0.5)
        },
        __class__: ec
    });
    var hc = function() {
        la.call(this);
        this.id = j.WIN_SCREEN;
        this.level = 1E3;
        var a = n.spr("button_main_menu").centerAnchor();
        this.display.addChild((new o).add(a).add(new P(1.3,0.1)).add(new N(p(this, this.toMainMenu))));
        a.setXY(j.DW / 2, 0.9 * j.DH);
        var b = n.spr("win");
        this.display.addChild((new o).add(b.centerAnchor().setXY(j.DW / 2, 0.4 * j.DH)));
        this.addAnim(new ca(b,0.3,0.7));
        this.addAnim(new ca(a,0.5,0.7))
    };
    e["ru.screen.WinScreen"] = hc;
    hc.__name__ = ["ru", "screen", "WinScreen"];
    hc.__super__ = ma;
    hc.prototype = s(ma.prototype, {
        toMainMenu: function() {
            l.get_instance().show(j.MAIN_MENU)
        },
        __class__: hc
    });
    var bc = function() {
        bb.call(this)
    };
    e["ru.utils.LineRender"] = bc;
    bc.__name__ = ["ru", "utils", "LineRender"];
    bc.__super__ = bb;
    bc.prototype = s(bb.prototype, {
        call: function() {
            z.get_instance().render()
        },
        __class__: bc
    });
    var Ba = function() {};
    e["utils.DivConsole"] = Ba;
    Ba.__name__ = ["utils", "DivConsole"];
    Ba.clear = function() {
        return Ba
    }
    ;
    Ba.add = function() {
        return Ba
    }
    ;
    var Zc, dd = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    e.Math = Math;
    Math.isFinite = function(a) {
        return isFinite(a)
    }
    ;
    Math.isNaN = function(a) {
        return isNaN(a)
    }
    ;
    String.prototype.__class__ = e.String = String;
    String.__name__ = ["String"];
    e.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = e.Date = Date;
    Date.__name__ = ["Date"];
    var ed = e.Int = {
        __name__: ["Int"]
    }
      , ad = e.Dynamic = {
        __name__: ["Dynamic"]
    }
      , bd = e.Float = Number;
    bd.__name__ = ["Float"];
    var cd = e.Bool = Boolean;
    cd.__ename__ = ["Bool"];
    var fd = e.Class = {
        __name__: ["Class"]
    }
      , gd = {};
    ua.instance = new ua;
    O.DISPATCHING_SENTINEL = new Xa(null,null);
    k.root = new o;
    k.uncaughtError = new E;
    k.hidden = new T(!1);
    k.volume = new G(1);
    k._platform = ua.instance;
    k._calledInit = !1;
    aa.__meta__ = {
        obj: {
            assets: [{
                preloader: [{
                    bytes: 16359,
                    md5: "735b847274ec626009c3049d35207d51",
                    name: "bar.png"
                }, {
                    bytes: 4624,
                    md5: "b59eed7b534427f208b5e3edc8990733",
                    name: "button.png"
                }, {
                    bytes: 6298,
                    md5: "c8668aac1aa2bf2b859d2dd0b7efb5e8",
                    name: "notification.png"
                }],
                bootstrap: [{
                    bytes: 20311,
                    md5: "ba923e59d6648ec4ec0b7fef29faed1b",
                    name: "fonts/arial.fnt"
                }, {
                    bytes: 18385,
                    md5: "0676286f681753a4916889d6a7853255",
                    name: "fonts/arial_0.png"
                }, {
                    bytes: 1547,
                    md5: "d5fb70915a6f5f7cf6652932c3db1ab9",
                    name: "fonts/doodle.fnt"
                }, {
                    bytes: 8038,
                    md5: "55b280dead99211040d3615c2002f9fd",
                    name: "fonts/doodle_0.png"
                }, {
                    bytes: 18942,
                    md5: "7d7e640cf72b599b00dba3429746463e",
                    name: "fonts/white.fnt"
                }, {
                    bytes: 17802,
                    md5: "b732e416cbddb0ecb64cd883e0a91ce3",
                    name: "fonts/white_0.png"
                }, {
                    bytes: 802632,
                    md5: "8f47a382dc94091bc79187544d82995b",
                    name: "levels/levels.txt"
                }, {
                    bytes: 2528,
                    md5: "4704d67d9c0d5f3b2d1142988bce763b",
                    name: "sound/click.mp3"
                }, {
                    bytes: 6358,
                    md5: "f0aad0e01f13a17b5bb0c02269116f5f",
                    name: "sound/click.ogg"
                }, {
                    bytes: 796546,
                    md5: "9f6f6333eee880dab40d189fb9f21c74",
                    name: "sound/music.mp3"
                }, {
                    bytes: 559254,
                    md5: "e203503860d0e559badb93598d3a523a",
                    name: "sound/music.ogg"
                }, {
                    bytes: 3593,
                    md5: "31e01576d5f6be1a7c9043c37566c9b7",
                    name: "sound/photo.mp3"
                }, {
                    bytes: 7595,
                    md5: "d5d968c369c547572e43d9f42d4872fa",
                    name: "sound/photo.ogg"
                }, {
                    bytes: 1560,
                    md5: "df835bb3cff406e4dcfe54d2f785f3b8",
                    name: "sound/pop_0.mp3"
                }, {
                    bytes: 5278,
                    md5: "eb0616239cfe2cfe3fba4012b8b97a08",
                    name: "sound/pop_0.ogg"
                }, {
                    bytes: 14060,
                    md5: "5785214e1b03f073be078e4adc01d9ae",
                    name: "sound/swoosh.mp3"
                }, {
                    bytes: 14303,
                    md5: "fba8c45401497b6f2eddedbc25499ce9",
                    name: "sound/swoosh.ogg"
                }, {
                    bytes: 369384,
                    md5: "7f8920e42bcdcea4579c68d11147f6e4",
                    name: "sprites.png"
                }, {
                    bytes: 5055,
                    md5: "f0e1e54e927bdb13a21c3e19eae64ab8",
                    name: "spritesjson.txt"
                }]
            }]
        }
    };
    aa._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    u._scratchPoint = new Ca;
    Da.NEWLINE = new Hb(10);
    oa._sharedEvent = new rc;
    da._sharedEvent = new sc;
    S._sharedEvent = new tc;
    Va.CANVAS_TEXTURES = (new wa("(iPhone|iPod|iPad)","")).match(window.navigator.userAgent);
    B._mediaRefCount = 0;
    B._detectBlobSupport = !0;
    x.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    x.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new wa("Mobile(/.*)? Safari","")).match(window.navigator.userAgent);
    C._detectSupport = !0;
    Ga._scratchMatrix = new pa;
    n.mod = 1;
    n._init = !1;
    l.inited = !1;
    l.fillScreen = !1;
    ya.USE_CACHE = !1;
    ya.USE_ENUM_INDEX = !1;
    ya.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Y.DEFAULT_RESOLVER = M;
    Y.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Ta.count = 0;
    H.topLevelCompleted = 1;
    t._inited = !1;
    j.GAME_SCREEN = 1;
    j.MAIN_MENU = 2;
    j.LEVEL_MENU = 3;
    j.WIN_SCREEN = 4;
    j.INFO_SCREEN = 5;
    j.DW = 640;
    j.DH = 800;
    j.apiLoaded = new T(!1);
    j.logo = new T(null);
    j.oldVolume = 1;
    j.main()
}
)();
