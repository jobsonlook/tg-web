var CryptoJS = CryptoJS || function(t, e) {
    var n = {}
      , i = n.lib = {}
      , r = function() {}
      , s = i.Base = {
        extend: function(t) {
            r.prototype = this;
            var e = new r;
            return t && e.mixIn(t),
            e.hasOwnProperty("init") || (e.init = function() {
                e.$super.init.apply(this, arguments)
            }
            ),
            e.init.prototype = e,
            e.$super = this,
            e
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments),
            t
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , o = i.WordArray = s.extend({
        init: function(t, n) {
            t = this.words = t || [],
            this.sigBytes = n != e ? n : 4 * t.length
        },
        toString: function(t) {
            return (t || c).stringify(this)
        },
        concat: function(t) {
            var e = this.words
              , n = t.words
              , i = this.sigBytes;
            if (t = t.sigBytes,
            this.clamp(),
            i % 4)
                for (var r = 0; t > r; r++)
                    e[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4);
            else if (65535 < n.length)
                for (r = 0; t > r; r += 4)
                    e[i + r >>> 2] = n[r >>> 2];
            else
                e.push.apply(e, n);
            return this.sigBytes += t,
            this
        },
        clamp: function() {
            var e = this.words
              , n = this.sigBytes;
            e[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4),
            e.length = t.ceil(n / 4)
        },
        clone: function() {
            var t = s.clone.call(this);
            return t.words = this.words.slice(0),
            t
        },
        random: function(e) {
            for (var n = [], i = 0; e > i; i += 4)
                n.push(4294967296 * t.random() | 0);
            return new o.init(n,e)
        }
    })
      , a = n.enc = {}
      , c = a.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; t > i; i++) {
                var r = e[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                n.push((r >>> 4).toString(16)),
                n.push((15 & r).toString(16))
            }
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], i = 0; e > i; i += 2)
                n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - 4 * (i % 8);
            return new o.init(n,e / 2)
        }
    }
      , u = a.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; t > i; i++)
                n.push(String.fromCharCode(e[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], i = 0; e > i; i++)
                n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - 8 * (i % 4);
            return new o.init(n,e)
        }
    }
      , f = a.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(u.stringify(t)))
            } catch (t) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(t) {
            return u.parse(unescape(encodeURIComponent(t)))
        }
    }
      , h = i.BufferedBlockAlgorithm = s.extend({
        reset: function() {
            this._data = new o.init,
            this._nDataBytes = 0
        },
        _append: function(t) {
            "string" == typeof t && (t = f.parse(t)),
            this._data.concat(t),
            this._nDataBytes += t.sigBytes
        },
        _process: function(e) {
            var n = this._data
              , i = n.words
              , r = n.sigBytes
              , s = this.blockSize
              , a = r / (4 * s)
              , a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0);
            if (e = a * s,
            r = t.min(4 * e, r),
            e) {
                for (var c = 0; e > c; c += s)
                    this._doProcessBlock(i, c);
                c = i.splice(0, e),
                n.sigBytes -= r
            }
            return new o.init(c,r)
        },
        clone: function() {
            var t = s.clone.call(this);
            return t._data = this._data.clone(),
            t
        },
        _minBufferSize: 0
    });
    i.Hasher = h.extend({
        cfg: s.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t),
            this.reset()
        },
        reset: function() {
            h.reset.call(this),
            this._doReset()
        },
        update: function(t) {
            return this._append(t),
            this._process(),
            this
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, n) {
                return new t.init(n).finalize(e)
            }
        },
        _createHmacHelper: function(t) {
            return function(e, n) {
                return new l.HMAC.init(t,n).finalize(e)
            }
        }
    });
    var l = n.algo = {};
    return n
}(Math);
!function(t) {
    for (var e = CryptoJS, n = e.lib, i = n.WordArray, r = n.Hasher, n = e.algo, s = [], o = [], a = function(t) {
        return 4294967296 * (t - (0 | t)) | 0
    }, c = 2, u = 0; 64 > u; ) {
        var f;
        t: {
            f = c;
            for (var h = t.sqrt(f), l = 2; h >= l; l++)
                if (!(f % l)) {
                    f = !1;
                    break t
                }
            f = !0
        }
        f && (8 > u && (s[u] = a(t.pow(c, .5))),
        o[u] = a(t.pow(c, 1 / 3)),
        u++),
        c++
    }
    var d = []
      , n = n.SHA256 = r.extend({
        _doReset: function() {
            this._hash = new i.init(s.slice(0))
        },
        _doProcessBlock: function(t, e) {
            for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], a = n[3], c = n[4], u = n[5], f = n[6], h = n[7], l = 0; 64 > l; l++) {
                if (16 > l)
                    d[l] = 0 | t[e + l];
                else {
                    var v = d[l - 15]
                      , p = d[l - 2];
                    d[l] = ((v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3) + d[l - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + d[l - 16]
                }
                v = h + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & u ^ ~c & f) + o[l] + d[l],
                p = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & r ^ i & s ^ r & s),
                h = f,
                f = u,
                u = c,
                c = a + v | 0,
                a = s,
                s = r,
                r = i,
                i = v + p | 0
            }
            n[0] = n[0] + i | 0,
            n[1] = n[1] + r | 0,
            n[2] = n[2] + s | 0,
            n[3] = n[3] + a | 0,
            n[4] = n[4] + c | 0,
            n[5] = n[5] + u | 0,
            n[6] = n[6] + f | 0,
            n[7] = n[7] + h | 0
        },
        _doFinalize: function() {
            var e = this._data
              , n = e.words
              , i = 8 * this._nDataBytes
              , r = 8 * e.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32,
            n[(r + 64 >>> 9 << 4) + 14] = t.floor(i / 4294967296),
            n[(r + 64 >>> 9 << 4) + 15] = i,
            e.sigBytes = 4 * n.length,
            this._process(),
            this._hash
        },
        clone: function() {
            var t = r.clone.call(this);
            return t._hash = this._hash.clone(),
            t
        }
    });
    e.SHA256 = r._createHelper(n),
    e.HmacSHA256 = r._createHmacHelper(n)
}(Math),
function() {
    var t = CryptoJS
      , e = t.enc.Utf8;
    t.algo.HMAC = t.lib.Base.extend({
        init: function(t, n) {
            t = this._hasher = new t.init,
            "string" == typeof n && (n = e.parse(n));
            var i = t.blockSize
              , r = 4 * i;
            n.sigBytes > r && (n = t.finalize(n)),
            n.clamp();
            for (var s = this._oKey = n.clone(), o = this._iKey = n.clone(), a = s.words, c = o.words, u = 0; i > u; u++)
                a[u] ^= 1549556828,
                c[u] ^= 909522486;
            s.sigBytes = o.sigBytes = r,
            this.reset()
        },
        reset: function() {
            var t = this._hasher;
            t.reset(),
            t.update(this._iKey)
        },
        update: function(t) {
            return this._hasher.update(t),
            this
        },
        finalize: function(t) {
            var e = this._hasher;
            return t = e.finalize(t),
            e.reset(),
            e.finalize(this._oKey.clone().concat(t))
        }
    })
}(),
function() {
    var t = CryptoJS
      , e = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function(t) {
            var e = t.words
              , n = t.sigBytes
              , i = this._map;
            t.clamp(),
            t = [];
            for (var r = 0; n > r; r += 3)
                for (var s = (e[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | e[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, o = 0; 4 > o && n > r + .75 * o; o++)
                    t.push(i.charAt(s >>> 6 * (3 - o) & 63));
            if (e = i.charAt(64))
                for (; t.length % 4; )
                    t.push(e);
            return t.join("")
        },
        parse: function(t) {
            var n = t.length
              , i = this._map
              , r = i.charAt(64);
            r && (r = t.indexOf(r),
            -1 != r && (n = r));
            for (var r = [], s = 0, o = 0; n > o; o++)
                if (o % 4) {
                    var a = i.indexOf(t.charAt(o - 1)) << 2 * (o % 4)
                      , c = i.indexOf(t.charAt(o)) >>> 6 - 2 * (o % 4);
                    r[s >>> 2] |= (a | c) << 24 - 8 * (s % 4),
                    s++
                }
            return e.create(r, s)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}();
var GA;
!function(t) {
    !function(t) {
        t[t.ios = 0] = "ios",
        t[t.android = 1] = "android",
        t[t.windows = 2] = "windows",
        t[t.windows_phone = 3] = "windows_phone",
        t[t.blackberry = 4] = "blackberry",
        t[t.roku = 5] = "roku",
        t[t.tizen = 6] = "tizen",
        t[t.nacl = 7] = "nacl",
        t[t.mac_osx = 8] = "mac_osx",
        t[t.webplayer = 9] = "webplayer"
    }(t.Platform || (t.Platform = {})),
    t.Platform,
    !function(t) {
        t[t.male = 0] = "male",
        t[t.female = 1] = "female"
    }(t.Gender || (t.Gender = {})),
    t.Gender
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = /^[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}:[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}$/
          , n = function() {
            function t(t, n, i, r, s, o) {
                if (this.category = 1,
                this.transaction_num = 0,
                !t || null === t.match(e))
                    throw new Error("Invalid event_id supplied for BusinessEvent");
                if (this.event_id = t,
                this.amount = n,
                !i || null === i.match(/^[A-Z]{3}$/))
                    throw new Error("Invalid currency supplied for BusinessEvent");
                if (this.currency = i,
                this.transaction_num = r,
                s) {
                    if (s.length > 32)
                        throw new Error("A too long cart_type was supplied, should be max 32 characters");
                    this.cart_type = s
                }
                void 0 !== o && (this.receipt_info = o)
            }
            return t
        }();
        t.Business = n
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = /^[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}(:[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}){0,4}$/
          , n = function() {
            function t(t, n) {
                if (this.category = 0,
                null === t.match(e))
                    throw new Error("Invalid event_id supplied for DesignEvent");
                this.event_id = t,
                void 0 !== n && (this.value = n)
            }
            return t
        }();
        t.Design = n
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        !function(t) {
            t[t.design = 0] = "design",
            t[t.business = 1] = "business",
            t[t.error = 2] = "error",
            t[t.user = 3] = "user",
            t[t.session_end = 4] = "session_end",
            t[t.progression = 5] = "progression",
            t[t.resource = 6] = "resource"
        }(t.Category || (t.Category = {})),
        t.Category
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        !function(t) {
            t[t.debug = 0] = "debug",
            t[t.info = 1] = "info",
            t[t.warning = 2] = "warning",
            t[t.error = 3] = "error",
            t[t.critical = 4] = "critical"
        }(t.ErrorSeverity || (t.ErrorSeverity = {}));
        var e = t.ErrorSeverity
          , n = function() {
            function t(t, n) {
                this.category = 2,
                this.message = "",
                this.severity = e[t],
                void 0 !== n && (this.message = n.substr(0, 8192))
            }
            return t
        }();
        t.Exception = n
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t() {}
            return t
        }();
        t.InitResponse = e;
        var n = function() {
            function t(t) {
                this.data = t
            }
            return t.prototype.toString = function() {
                return JSON.stringify(this.data)
            }
            ,
            t
        }();
        t.Init = n
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = /^(Start|Fail|Complete):[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}(:[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}){0,2}$/
          , n = function() {
            function t(t, n, i) {
                if (this.category = 5,
                null === t.match(e))
                    throw new Error("Invalid event_id supplied for ProgressionEvent");
                this.event_id = t,
                void 0 !== n && (this.attempt_num = n),
                void 0 !== i && (this.score = i)
            }
            return t
        }();
        t.Progression = n
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = /^(Sink|Source):[A-Za-z]{1,64}:[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}:[A-Za-z0-9\\s\\-_\\.\\(\\)\\!\\?]{1,64}/
          , n = function() {
            function t(t, n) {
                if (this.category = 6,
                null === t.match(e))
                    throw new Error("Invalid event_id supplied for ResourceEvent");
                this.event_id = t,
                this.amount = n
            }
            return t
        }();
        t.Resource = n
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t(t) {
                this.category = 4,
                this.length = 0,
                this.length = t
            }
            return t
        }();
        t.SessionEnd = e
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t() {
                this.category = 3
            }
            return t
        }();
        t.User = e
    }(e = t.Events || (t.Events = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    function e() {
        return null === n.instance && (n.instance = new n),
        n.instance
    }
    t.getInstance = e;
    var n = function() {
        function e() {
            this.sessionId = t.Utils.createUniqueId(),
            this.messageQueue = new t.Utils.MessageQueue,
            this.enabled = !1,
            this.initProcessed = !1,
            this.timeoutId = 0,
            this.timeOffset = 0
        }
        return e.prototype.init = function(n, i, r, s) {
            var o = this;
            if (null === e.instance)
                throw new Error("No instance Available!");
            this.gameKey = n,
            this.secretKey = i,
            this.build = r,
            this.user = s,
            this.incrementSessionNum(s);
            var a = new t.Events.Init(t.Utils.getBaseAnnotations());
            return this.sendEvent(a.toString(), "init", function(t) {
                o.initProcessed = !0,
                t.enabled === !0 && (o.enabled = !0,
                o.timeOffset = (Date.now() / 1e3 | 0) - t.server_ts)
            }),
            this.scheduleSendData(e.SCHEDULE_TIME),
            window.addEventListener("beforeunload", function() {
                o.sendData()
            }),
            this
        }
        ,
        e.prototype.incrementSessionNum = function(e) {
            var n = t.Utils.LocalStorage.getItem(e.user_id);
            n ? t.Utils.LocalStorage.setItem(e.user_id, (parseInt(n) + 1).toString()) : (n = "1",
            t.Utils.LocalStorage.setItem(e.user_id, n))
        }
        ,
        e.prototype.addEvent = function(n) {
            if (null === e.instance)
                throw new Error("No instance Available!");
            var i = new t.Utils.Message(n,t.Utils.getDefaultAnnotations(this.user, this.sessionId, this.build, this.timeOffset));
            return this.messageQueue.push(i),
            this
        }
        ,
        e.prototype.sendData = function() {
            if (this.initProcessed === !1)
                return this.scheduleSendData(1e3),
                this;
            if (this.enabled === !1)
                return this;
            if (null === e.instance)
                throw new Error("No instance Available!");
            for (var t = [], n = ""; this.messageQueue.length > 0; ) {
                var i = this.messageQueue.pop();
                t.push(i.data)
            }
            if (0 === t.length)
                return this.scheduleSendData(e.SCHEDULE_TIME),
                this;
            try {
                n = JSON.stringify(t)
            } catch (t) {}
            return this.sendEvent(n, "events"),
            this.scheduleSendData(e.SCHEDULE_TIME),
            this
        }
        ,
        e.prototype.scheduleSendData = function(t) {
            var e = this;
            clearTimeout(this.timeoutId),
            this.timeoutId = setTimeout(function() {
                e.sendData()
            }, t)
        }
        ,
        e.prototype.sendEvent = function(n, i, r) {
            if (void 0 === r && (r = null),
            null === e.instance && null === this.gameKey)
                throw new Error("No instance Available!");
            if (!(n.length < 1)) {
                var s = CryptoJS.HmacSHA256(n, this.secretKey)
                  , o = CryptoJS.enc.Base64.stringify(s)
                  , a = e.API_URL + this.gameKey + "/" + i;
                t.Utils.postRequest(a, n, o, function(t) {
                    if (t.success === !1 && window.console && console.log(t.message),
                    null != r) {
                        var e = "";
                        try {
                            e = JSON.parse(t.message)
                        } catch (t) {}
                        r(e)
                    }
                })
            }
        }
        ,
        e.SCHEDULE_TIME = 15e3,
        e.SDK_VERSION = "rest api v2",
        e.API_URL = ("https:" === document.location.protocol ? "." : ".") + "/",
        e.instance = null,
        e
    }();
    t.GameAnalytics = n
}(GA || (GA = {}));
var GA;
!function(t) {
    var e = function() {
        function e(e, n, i, r) {
            if (this.user_id = "",
            e)
                this.user_id = e;
            else {
                var s = t.Utils.LocalStorage.getItem("user");
                this.user_id = s || t.Utils.createUniqueUserId()
            }
            n && n.length > 0 && (this.facebook_id = n,
            this.user_id = n),
            t.Utils.LocalStorage.setItem("user", this.user_id),
            1 !== i && 0 !== i || (this.gender = i),
            r && r.toString().match(/^[0-9]{4}$/gi) && (this.birth_year = r)
        }
        return e
    }();
    t.User = e
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(e) {
        function n(e, n, i, s) {
            var o = {
                sdk_version: t.GameAnalytics.SDK_VERSION,
                platform: t.Platform[2],
                os_version: t.Platform[2] + " 8",
                device: "unknown",
                v: 2,
                user_id: e.user_id,
                client_ts: (Date.now() / 1e3 | 0) + s,
                manufacturer: "unknown",
                session_id: n,
                session_num: r(e.user_id),
                build: i
            };
            e.facebook_id && (o.facebook_id = e.facebook_id),
            0 !== e.gender && 1 !== e.gender || (o.gender = t.Gender[e.gender]),
            e.birth_year && (o.birth_year = e.birth_year);
            var a = navigator.userAgent
              , c = navigator.platform.toLowerCase();
            return a.match(/iPad|iPod|iPhone/i) ? (o.platform = t.Platform[0],
            o.device = a.match(/iPad|iPod|iPhone/i)[0],
            o.manufacturer = "Apple",
            o.os_version = t.Platform[0] + " " + a.match(/OS (\b[0-9]+_[0-9]+(?:_[0-9]+)?\b)/)[1].replace(/_/gi, ".")) : a.match(/Android/i) ? (o.platform = t.Platform[1],
            o.device = a.match(/Mobile/i) ? "Phone" : "Tablet",
            o.os_version = t.Platform[1] + " " + a.match(/Android (\d+(?:\.\d+)+);/)[1]) : a.match(/Windows Phone/i) ? (o.platform = t.Platform[2],
            o.device = "Windows Phone",
            o.os_version = t.Platform[2] + " " + a.match(/Phone (\d+(?:\.\d+)+);/)[1]) : c.indexOf("mac") > -1 ? (o.platform = t.Platform[8],
            o.os_version = o.platform + " 10") : c.indexOf("win") > -1 && (o.platform = t.Platform[2],
            o.os_version = o.platform + " 10"),
            o
        }

        function i() {
            var e = {
                sdk_version: t.GameAnalytics.SDK_VERSION,
                platform: "unknown",
                os_version: "unknown"
            }
              , n = navigator.userAgent;
            return n.match(/iPad|iPod|iPhone/i) ? (e.platform = t.Platform[0],
            e.os_version = t.Platform[0] + " " + n.match(/OS (\b[0-9]+_[0-9]+(?:_[0-9]+)?\b)/)[1].replace(/_/gi, ".")) : n.match(/Android/i) ? (e.platform = t.Platform[1],
            e.os_version = t.Platform[1] + " " + n.match(/Android (\d+(?:\.\d+)+);/)[1]) : n.match(/Windows Phone/i) && (e.platform = t.Platform[2],
            e.os_version = t.Platform[2] + " " + n.match(/Phone (\d+(?:\.\d+)+);/)[1]),
            e
        }

        function r(t) {
            var n = e.LocalStorage.getItem(t);
            return n ? parseInt(n) : 1
        }
        e.getDefaultAnnotations = n,
        e.getBaseAnnotations = i
    }(e = t.Utils || (t.Utils = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t() {}
            return t.getItem = function(e) {
                return t.Available ? localStorage.getItem(t.CacheKey + e) : void 0
            }
            ,
            t.setItem = function(e, n) {
                t.Available && localStorage.setItem(t.CacheKey + e, n)
            }
            ,
            t.Available = !1,
            t.CacheKey = "GA:",
            t
        }();
        t.LocalStorage = e;
        try {
            "object" == typeof localStorage && (localStorage.setItem("testingLocalStorage", "yes"),
            localStorage.removeItem("testingLocalStorage"),
            e.Available = !0)
        } catch (t) {}
    }(e = t.Utils || (t.Utils = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(e) {
        var n = function() {
            function e(t, e) {
                this.event = t,
                this.annotations = e
            }
            return Object.defineProperty(e.prototype, "data", {
                get: function() {
                    for (var e in this.event)
                        this.event.hasOwnProperty(e) && ("category" === e ? this.annotations[e] = t.Events.Category[this.event[e]] : this.annotations[e] = this.event[e]);
                    return this.annotations
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }();
        e.Message = n
    }(e = t.Utils || (t.Utils = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t() {
                this.queue = [],
                this.load()
            }
            return t.prototype.push = function(t) {
                this.queue.push(t)
            }
            ,
            t.prototype.pop = function() {
                return this.queue.pop()
            }
            ,
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this.queue.length
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.save = function() {}
            ,
            t.prototype.load = function() {}
            ,
            t
        }();
        t.MessageQueue = e
    }(e = t.Utils || (t.Utils = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        function e(t, e, n, i) {
            var r;
            if (!window.XMLHttpRequest)
                return void i({
                    success: !1,
                    message: "Error: Unable to send request, XMLHttpRequest not supported"
                });
            r = new XMLHttpRequest,
            r.onreadystatechange = function() {
                4 == r.readyState && (200 === r.status ? i({
                    success: !0,
                    message: r.responseText
                }) : r.status > 0 && i({
                    success: !1,
                    message: "Error: There was a problem with the request: status " + r.status
                }))
            }
            ;
            try {
                r.open("POST", t, !0),
                r.setRequestHeader("Authorization", n),
                r.setRequestHeader("Content-Type", "application/json"),
                r.send(e)
            } catch (t) {
                i({
                    success: !1,
                    message: "Error: Unable to send request, CORS not allowed."
                })
            }
        }
        var n = function() {
            function t() {
                this.success = !1,
                this.message = ""
            }
            return t
        }();
        t.Response = n,
        t.postRequest = e
    }(e = t.Utils || (t.Utils = {}))
}(GA || (GA = {}));
var GA;
!function(t) {
    var e;
    !function(t) {
        function e() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0
                  , n = "x" == t ? e : 3 & e | 8;
                return n.toString(16)
            })
        }

        function n() {
            return e()
        }
        t.createUniqueId = e,
        t.createUniqueUserId = n
    }(e = t.Utils || (t.Utils = {}))
}(GA || (GA = {}));
var application = pc.Application.getApplication()
  , VERSION = "6.0.0"
  , Analytics = {
    init: function(n, a) {
        var t = new GA.User(a)
          , e = GA.getInstance();
        e.init("d1f396ba3b7ef94a2e7936e672c87f3d", "17019d03af8e276a16db0f32f563586a215233a3", n, t);
        var i = function(n, a) {
            var t = new GA.Events.Design(n,a);
            e.addEvent(t)
        }
          , o = !1
          , s = 0;
        application.on("game-state", function(n) {
            n === STATE_MENU && (o ? (i("game:stage:restart"),
            o = !1) : i("game:stage:start"),
            s = 0),
            n === STATE_SWITCH_LEVEL_START && (s++,
            i("game:stage:level", s))
        }),
        application.on("game-streak", function() {
            i("game:bonus:streak")
        }),
        application.on("game-perfect-bonus", function() {
            i("game:bonus:perfect")
        }),
        application.on("game-amazing-bonus", function() {
            i("game:bonus:amazing")
        }),
        application.on("game-letter-collected", function(n) {
            i("game:bonus:letter:" + n)
        }),
        application.on("fb:instant:score", function(n) {
            i("game:stage:gameover", n)
        }),
        application.on("fb:instant:reset", function() {
            o = !0
        })
    }
};
"FBInstant"in window ? application.on("fb:instant:init", function() {
    FBInstant.getPlatform ? build = FBInstant.getPlatform() + " " + VERSION : build = FBInstant.platform + " " + VERSION,
    FBInstant.player.getID ? playerId = FBInstant.player.getID() : playerId = FBInstant.player.id,
    Analytics.init(build, playerId)
}) : Analytics.init("browser " + VERSION);
if ("FBInstant"in window) {
    var application = pc.Application.getApplication();
    FBInstant.initializeAsync().then(function() {
        application.fire("fb:instant:init")
    }),
    application.on("start", function() {
        FBInstant.startGameAsync()
    }),
    application.on("preload:progress", function(n) {
        n = Math.min(1, Math.max(0, n));
        var t = 100 * n;
        FBInstant.setLoadingProgress(t)
    }),
    application.on("fb:instant:score", function(n) {
        FBInstant.setScore(n),
        FBInstant.takeScreenshot(),
        FBInstant.endGameAsync().then(function() {
            application.fire("fb:instant:reset")
        })
    })
}
var spine = {
    radDeg: 180 / Math.PI,
    degRad: Math.PI / 180,
    Float32Array: "undefined" == typeof Float32Array ? Array : Float32Array,
    Uint32Array: "undefined" == typeof Uint32Array ? Array : Uint32Array,
    Uint16Array: "undefined" == typeof Uint16Array ? Array : Uint16Array
};
spine.temp = new spine.Float32Array(2),
spine.BoneData = function(t, e) {
    this.name = t,
    this.parent = e
}
,
spine.BoneData.prototype = {
    length: 0,
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    inheritScale: !0,
    inheritRotation: !0
},
spine.BlendMode = {
    normal: 0,
    additive: 1,
    multiply: 2,
    screen: 3
},
spine.SlotData = function(t, e) {
    this.name = t,
    this.boneData = e
}
,
spine.SlotData.prototype = {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    attachmentName: null,
    blendMode: spine.BlendMode.normal
},
spine.IkConstraintData = function(t) {
    this.name = t,
    this.bones = []
}
,
spine.IkConstraintData.prototype = {
    target: null,
    bendDirection: 1,
    mix: 1
},
spine.TransformConstraintData = function(t) {
    this.name = t
}
,
spine.TransformConstraintData.prototype = {
    bone: null,
    target: null,
    translateMix: 1,
    x: 0,
    y: 0
},
spine.Bone = function(t, e, n) {
    this.data = t,
    this.skeleton = e,
    this.parent = n,
    this.setToSetupPose()
}
,
spine.Bone.yDown = !1,
spine.Bone.prototype = {
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    a: 0,
    b: 0,
    worldX: 0,
    c: 0,
    d: 0,
    worldY: 0,
    worldSignX: 1,
    worldSignY: 1,
    update: function() {
        this.updateWorldTransform(this.x, this.y, this.rotation, this.scaleX, this.scaleY)
    },
    updateWorldTransformWith: function() {
        this.updateWorldTransform(this.x, this.y, this.rotation, this.scaleX, this.scaleY)
    },
    updateWorldTransform: function(t, e, n, i, s) {
        this.appliedRotation = n,
        this.appliedScaleX = i,
        this.appliedScaleY = s,
        n *= spine.degRad;
        var a = Math.cos(n)
          , r = Math.sin(n)
          , o = a * i
          , h = -r * s
          , l = r * i
          , p = a * s
          , f = this.parent;
        if (!f) {
            var u = this.skeleton;
            return u.flipX && (t = -t,
            o = -o,
            h = -h),
            u.flipY != spine.Bone.yDown && (e = -e,
            l = -l,
            p = -p),
            this.a = o,
            this.b = h,
            this.c = l,
            this.d = p,
            this.worldX = t,
            this.worldY = e,
            this.worldSignX = 0 > i ? -1 : 1,
            void (this.worldSignY = 0 > s ? -1 : 1)
        }
        var d = f.a
          , c = f.b
          , m = f.c
          , g = f.d;
        if (this.worldX = d * t + c * e + f.worldX,
        this.worldY = m * t + g * e + f.worldY,
        this.worldSignX = f.worldSignX * (0 > i ? -1 : 1),
        this.worldSignY = f.worldSignY * (0 > s ? -1 : 1),
        this.data.inheritRotation && this.data.inheritScale)
            this.a = d * o + c * l,
            this.b = d * h + c * p,
            this.c = m * o + g * l,
            this.d = m * h + g * p;
        else {
            if (this.data.inheritRotation) {
                d = 1,
                c = 0,
                m = 0,
                g = 1;
                do {
                    n = f.appliedRotation * spine.degRad,
                    a = Math.cos(n),
                    r = Math.sin(n);
                    var v = d * a + c * r;
                    if (c = d * -r + c * a,
                    d = v,
                    v = m * a + g * r,
                    g = m * -r + g * a,
                    m = v,
                    !f.data.inheritRotation)
                        break;
                    f = f.parent
                } while (f);this.a = d * o + c * l,
                this.b = d * h + c * p,
                this.c = m * o + g * l,
                this.d = m * h + g * p
            } else if (this.data.inheritScale) {
                d = 1,
                c = 0,
                m = 0,
                g = 1;
                do {
                    n = f.appliedRotation * spine.degRad,
                    a = Math.cos(n),
                    r = Math.sin(n);
                    var y = f.appliedScaleX
                      , w = f.appliedScaleY
                      , A = a * y
                      , x = -r * w
                      , b = r * y
                      , k = a * w
                      , v = d * A + c * b;
                    if (c = d * x + c * k,
                    d = v,
                    v = m * A + g * b,
                    g = m * x + g * k,
                    m = v,
                    0 > y && (n = -n),
                    a = Math.cos(-n),
                    r = Math.sin(-n),
                    v = d * a + c * r,
                    c = d * -r + c * a,
                    d = v,
                    v = m * a + g * r,
                    g = m * -r + g * a,
                    m = v,
                    !f.data.inheritScale)
                        break;
                    f = f.parent
                } while (f);this.a = d * o + c * l,
                this.b = d * h + c * p,
                this.c = m * o + g * l,
                this.d = m * h + g * p
            } else
                this.a = o,
                this.b = h,
                this.c = l,
                this.d = p;
            this.skeleton.flipX && (this.a = -this.a,
            this.b = -this.b),
            this.skeleton.flipY != spine.Bone.yDown && (this.c = -this.c,
            this.d = -this.d)
        }
    },
    setToSetupPose: function() {
        var t = this.data;
        this.x = t.x,
        this.y = t.y,
        this.rotation = t.rotation,
        this.scaleX = t.scaleX,
        this.scaleY = t.scaleY
    },
    getWorldRotationX: function() {
        return Math.atan2(this.c, this.a) * spine.radDeg
    },
    getWorldRotationY: function() {
        return Math.atan2(this.d, this.b) * spine.radDeg
    },
    getWorldScaleX: function() {
        return Math.sqrt(this.a * this.a + this.b * this.b) * this.worldSignX
    },
    getWorldScaleY: function() {
        return Math.sqrt(this.c * this.c + this.d * this.d) * this.worldSignY
    },
    worldToLocal: function(t) {
        var e = t[0] - this.worldX
          , n = t[1] - this.worldY
          , i = this.a
          , s = this.b
          , a = this.c
          , r = this.d
          , o = 1 / (i * r - s * a);
        return t[0] = e * r * o - n * s * o,
        t[1] = n * i * o - e * a * o,
        t
    },
    localToWorld: function(t) {
        var e = t[0]
          , n = t[1];
        return t[0] = e * this.a + n * this.b + this.worldX,
        t[1] = e * this.c + n * this.d + this.worldY,
        t
    }
},
spine.Slot = function(t, e) {
    this.data = t,
    this.bone = e,
    this.attachmentVertices = new spine.Float32Array,
    this.setToSetupPose()
}
,
spine.Slot.prototype = {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    _attachmentTime: 0,
    attachment: null,
    setAttachment: function(t) {
        this.attachment != t && (this.attachment = t,
        this._attachmentTime = this.bone.skeleton.time,
        this.attachmentVertices.length = 0)
    },
    setAttachmentTime: function(t) {
        this._attachmentTime = this.bone.skeleton.time - t
    },
    getAttachmentTime: function() {
        return this.bone.skeleton.time - this._attachmentTime
    },
    setToSetupPose: function() {
        var t = this.data;
        if (this.r = t.r,
        this.g = t.g,
        this.b = t.b,
        this.a = t.a,
        t.attachmentName) {
            for (var e = this.bone.skeleton.data.slots, n = 0, i = e.length; i > n; n++)
                if (e[n] == t) {
                    this.attachment = null,
                    this.setAttachment(this.bone.skeleton.getAttachmentBySlotIndex(n, t.attachmentName));
                    break
                }
        } else
            this.setAttachment(null)
    }
},
spine.IkConstraint = function(t, e) {
    this.data = t,
    this.mix = t.mix,
    this.bendDirection = t.bendDirection,
    this.bones = [];
    for (var n = 0, i = t.bones.length; i > n; n++)
        this.bones[n] = e.findBone(t.bones[n].name);
    this.target = e.findBone(t.target.name)
}
,
spine.IkConstraint.prototype = {
    apply: function() {
        this.update()
    },
    update: function() {
        var t = this.target
          , e = this.bones;
        switch (e.length) {
        case 1:
            spine.IkConstraint.apply1(e[0], t.worldX, t.worldY, this.mix);
            break;
        case 2:
            spine.IkConstraint.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.mix)
        }
    }
},
spine.IkConstraint.apply1 = function(t, e, n, i) {
    var s = t.parent ? t.parent.getWorldRotationX() : 0
      , a = t.rotation
      , r = Math.atan2(n - t.worldY, e - t.worldX) * spine.radDeg - s;
    t.worldSignX != t.worldSignY != (t.skeleton.flipX != (t.skeleton.flipY != spine.Bone.yDown)) && (r = 360 - r),
    r > 180 ? r -= 360 : -180 > r && (r += 360),
    t.updateWorldTransform(t.x, t.y, a + (r - a) * i, t.appliedScaleX, t.appliedScaleY)
}
,
spine.IkConstraint.apply2 = function(t, e, n, i, s, a) {
    if (0 != a) {
        var r, o, h, l = t.x, p = t.y, f = t.appliedScaleX, u = t.appliedScaleY;
        0 > f ? (f = -f,
        r = 180,
        h = -1) : (r = 0,
        h = 1),
        0 > u && (u = -u,
        h = -h);
        var d = e.x
          , c = e.y
          , m = e.appliedScaleX
          , g = Math.abs(f - u) <= 1e-4;
        g || 0 == c || (e.worldX = t.a * d + t.worldX,
        e.worldY = t.c * d + t.worldY,
        c = 0),
        0 > m ? (m = -m,
        o = 180) : o = 0;
        var v, y, w, A, x = t.parent;
        if (x) {
            var b = x.a
              , k = x.b
              , S = x.c
              , C = x.d
              , T = 1 / (b * C - k * S)
              , M = x.worldX
              , I = x.worldY
              , O = n - M
              , _ = i - I;
            v = (O * C - _ * k) * T - l,
            y = (_ * b - O * S) * T - p,
            O = e.worldX - M,
            _ = e.worldY - I,
            w = (O * C - _ * k) * T - l,
            A = (_ * b - O * S) * T - p
        } else
            v = n - l,
            y = i - p,
            w = e.worldX - l,
            A = e.worldY - p;
        var X, D, V = Math.sqrt(w * w + A * A), F = e.data.length * m;
        t: if (g) {
            F *= f;
            var Y = (v * v + y * y - V * V - F * F) / (2 * V * F);
            -1 > Y ? Y = -1 : Y > 1 && (Y = 1),
            D = Math.acos(Y) * s;
            var b = V + F * Y
              , P = F * Math.sin(D);
            X = Math.atan2(y * b - v * P, v * b + y * P)
        } else {
            var b = f * F
              , k = u * F
              , U = Math.atan2(y, v)
              , R = b * b
              , W = k * k
              , B = V * V
              , E = v * v + y * y
              , L = W * B + R * E - R * W
              , N = -2 * W * V
              , H = W - R
              , C = N * N - 4 * H * L;
            if (C >= 0) {
                var j = Math.sqrt(C);
                0 > N && (j = -j),
                j = -(N + j) / 2;
                var z = j / H
                  , q = L / j
                  , J = Math.abs(z) < Math.abs(q) ? z : q;
                if (E >= J * J) {
                    var _ = Math.sqrt(E - J * J) * s;
                    X = U - Math.atan2(_, J),
                    D = Math.atan2(_ / u, (J - V) / f);
                    break t
                }
            }
            var G = 0
              , K = Number.MAX_VALUE
              , $ = 0
              , Q = 0
              , Z = 0
              , tt = 0
              , et = 0
              , nt = 0
              , O = V + b
              , it = O * O;
            it > tt && (Z = 0,
            tt = it,
            et = O),
            O = V - b,
            it = O * O,
            K > it && (G = Math.PI,
            K = it,
            $ = O);
            var st = Math.acos(-b * V / (R - W));
            O = b * Math.cos(st) + V;
            var _ = k * Math.sin(st);
            it = O * O + _ * _,
            K > it && (G = st,
            K = it,
            $ = O,
            Q = _),
            it > tt && (Z = st,
            tt = it,
            et = O,
            nt = _),
            (K + tt) / 2 >= E ? (X = U - Math.atan2(Q * s, $),
            D = G * s) : (X = U - Math.atan2(nt * s, et),
            D = Z * s)
        }
        var at = Math.atan2(c, d) * h;
        X = (X - at) * spine.radDeg + r,
        D = (D + at) * spine.radDeg * h + o,
        X > 180 ? X -= 360 : -180 > X && (X += 360),
        D > 180 ? D -= 360 : -180 > D && (D += 360);
        var rt = t.rotation;
        t.updateWorldTransform(l, p, rt + (X - rt) * a, t.appliedScaleX, t.appliedScaleY),
        rt = e.rotation,
        e.updateWorldTransform(d, c, rt + (D - rt) * a, e.appliedScaleX, e.appliedScaleY)
    }
}
,
spine.TransformConstraint = function(t, e) {
    this.data = t,
    this.translateMix = t.translateMix,
    this.x = t.x,
    this.y = t.y,
    this.bone = e.findBone(t.bone.name),
    this.target = e.findBone(t.target.name)
}
,
spine.TransformConstraint.prototype = {
    apply: function() {
        this.update()
    },
    update: function() {
        var t = this.translateMix;
        if (t > 0) {
            var e = spine.temp;
            e[0] = x,
            e[1] = y,
            this.target.localToWorld(e);
            var n = this.bone;
            n.worldX += (e[0] - n.worldX) * t,
            n.worldY += (e[1] - n.worldY) * t
        }
    }
},
spine.Skin = function(t) {
    this.name = t,
    this.attachments = {}
}
,
spine.Skin.prototype = {
    addAttachment: function(t, e, n) {
        this.attachments[t + ":" + e] = n
    },
    getAttachment: function(t, e) {
        return this.attachments[t + ":" + e]
    },
    _attachAll: function(t, e) {
        for (var n in e.attachments) {
            var i = n.indexOf(":")
              , s = parseInt(n.substring(0, i))
              , a = n.substring(i + 1)
              , r = t.slots[s];
            if (r.attachment && r.attachment.name == a) {
                var o = this.getAttachment(s, a);
                o && r.setAttachment(o)
            }
        }
    }
},
spine.Animation = function(t, e, n) {
    this.name = t,
    this.timelines = e,
    this.duration = n
}
,
spine.Animation.prototype = {
    apply: function(t, e, n, i, s) {
        i && 0 != this.duration && (n %= this.duration,
        e > 0 && (e %= this.duration));
        for (var a = this.timelines, r = 0, o = a.length; o > r; r++)
            a[r].apply(t, e, n, s, 1)
    },
    mix: function(t, e, n, i, s, a) {
        i && 0 != this.duration && (n %= this.duration,
        e > 0 && (e %= this.duration));
        for (var r = this.timelines, o = 0, h = r.length; h > o; o++)
            r[o].apply(t, e, n, s, a)
    }
},
spine.Animation.binarySearch = function(t, e, n) {
    var i = 0
      , s = Math.floor(t.length / n) - 2;
    if (!s)
        return n;
    for (var a = s >>> 1; ; ) {
        if (t[(a + 1) * n] <= e ? i = a + 1 : s = a,
        i == s)
            return (i + 1) * n;
        a = i + s >>> 1
    }
}
,
spine.Animation.binarySearch1 = function(t, e) {
    var n = 0
      , i = t.length - 2;
    if (!i)
        return 1;
    for (var s = i >>> 1; ; ) {
        if (t[s + 1] <= e ? n = s + 1 : i = s,
        n == i)
            return n + 1;
        s = n + i >>> 1
    }
}
,
spine.Animation.linearSearch = function(t, e, n) {
    for (var i = 0, s = t.length - n; s >= i; i += n)
        if (t[i] > e)
            return i;
    return -1
}
,
spine.Curves = function(t) {
    var e = 19 * (t - 1);
    this.curves = new spine.Float32Array(e),
    this.curves.length = e
}
,
spine.Curves.prototype = {
    setLinear: function(t) {
        this.curves[19 * t] = 0
    },
    setStepped: function(t) {
        this.curves[19 * t] = 1
    },
    setCurve: function(t, e, n, i, s) {
        var a = .1
          , r = a * a
          , o = r * a
          , h = 3 * a
          , l = 3 * r
          , p = 6 * r
          , f = 6 * o
          , u = 2 * -e + i
          , d = 2 * -n + s
          , c = 3 * (e - i) + 1
          , m = 3 * (n - s) + 1
          , g = e * h + u * l + c * o
          , v = n * h + d * l + m * o
          , y = u * p + c * f
          , w = d * p + m * f
          , A = c * f
          , x = m * f
          , b = 19 * t
          , k = this.curves;
        k[b++] = 2;
        for (var S = g, C = v, T = b + 19 - 1; T > b; b += 2)
            k[b] = S,
            k[b + 1] = C,
            g += y,
            v += w,
            y += A,
            w += x,
            S += g,
            C += v
    },
    getCurvePercent: function(t, e) {
        e = 0 > e ? 0 : e > 1 ? 1 : e;
        var n = this.curves
          , i = 19 * t
          , s = n[i];
        if (0 === s)
            return e;
        if (1 == s)
            return 0;
        i++;
        for (var a = 0, r = i, o = i + 19 - 1; o > i; i += 2)
            if (a = n[i],
            a >= e) {
                var h, l;
                return i == r ? (h = 0,
                l = 0) : (h = n[i - 2],
                l = n[i - 1]),
                l + (n[i + 1] - l) * (e - h) / (a - h)
            }
        var p = n[i - 1];
        return p + (1 - p) * (e - a) / (1 - a)
    }
},
spine.RotateTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(2 * t),
    this.frames.length = 2 * t
}
,
spine.RotateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 2
    },
    setFrame: function(t, e, n) {
        t *= 2,
        this.frames[t] = e,
        this.frames[t + 1] = n
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (!(n < a[0])) {
            var r = t.bones[this.boneIndex];
            if (n >= a[a.length - 2]) {
                for (var o = r.data.rotation + a[a.length - 1] - r.rotation; o > 180; )
                    o -= 360;
                for (; -180 > o; )
                    o += 360;
                return void (r.rotation += o * s)
            }
            var h = spine.Animation.binarySearch(a, n, 2)
              , l = a[h - 1]
              , p = a[h]
              , f = 1 - (n - p) / (a[h - 2] - p);
            f = this.curves.getCurvePercent(h / 2 - 1, f);
            for (var o = a[h + 1] - l; o > 180; )
                o -= 360;
            for (; -180 > o; )
                o += 360;
            for (o = r.data.rotation + (l + o * f) - r.rotation; o > 180; )
                o -= 360;
            for (; -180 > o; )
                o += 360;
            r.rotation += o * s
        }
    }
},
spine.TranslateTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(3 * t),
    this.frames.length = 3 * t
}
,
spine.TranslateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 3
    },
    setFrame: function(t, e, n, i) {
        t *= 3,
        this.frames[t] = e,
        this.frames[t + 1] = n,
        this.frames[t + 2] = i
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (!(n < a[0])) {
            var r = t.bones[this.boneIndex];
            if (n >= a[a.length - 3])
                return r.x += (r.data.x + a[a.length - 2] - r.x) * s,
                void (r.y += (r.data.y + a[a.length - 1] - r.y) * s);
            var o = spine.Animation.binarySearch(a, n, 3)
              , h = a[o - 2]
              , l = a[o - 1]
              , p = a[o]
              , f = 1 - (n - p) / (a[o + -3] - p);
            f = this.curves.getCurvePercent(o / 3 - 1, f),
            r.x += (r.data.x + h + (a[o + 1] - h) * f - r.x) * s,
            r.y += (r.data.y + l + (a[o + 2] - l) * f - r.y) * s
        }
    }
},
spine.ScaleTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(3 * t),
    this.frames.length = 3 * t
}
,
spine.ScaleTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 3
    },
    setFrame: function(t, e, n, i) {
        t *= 3,
        this.frames[t] = e,
        this.frames[t + 1] = n,
        this.frames[t + 2] = i
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (!(n < a[0])) {
            var r = t.bones[this.boneIndex];
            if (n >= a[a.length - 3])
                return r.scaleX += (r.data.scaleX * a[a.length - 2] - r.scaleX) * s,
                void (r.scaleY += (r.data.scaleY * a[a.length - 1] - r.scaleY) * s);
            var o = spine.Animation.binarySearch(a, n, 3)
              , h = a[o - 2]
              , l = a[o - 1]
              , p = a[o]
              , f = 1 - (n - p) / (a[o + -3] - p);
            f = this.curves.getCurvePercent(o / 3 - 1, f),
            r.scaleX += (r.data.scaleX * (h + (a[o + 1] - h) * f) - r.scaleX) * s,
            r.scaleY += (r.data.scaleY * (l + (a[o + 2] - l) * f) - r.scaleY) * s
        }
    }
},
spine.ColorTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(5 * t),
    this.frames.length = 5 * t
}
,
spine.ColorTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 5
    },
    setFrame: function(t, e, n, i, s, a) {
        t *= 5,
        this.frames[t] = e,
        this.frames[t + 1] = n,
        this.frames[t + 2] = i,
        this.frames[t + 3] = s,
        this.frames[t + 4] = a
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (!(n < a[0])) {
            var r, o, h, l;
            if (n >= a[a.length - 5]) {
                var p = a.length - 1;
                r = a[p - 3],
                o = a[p - 2],
                h = a[p - 1],
                l = a[p]
            } else {
                var f = spine.Animation.binarySearch(a, n, 5)
                  , u = a[f - 4]
                  , d = a[f - 3]
                  , c = a[f - 2]
                  , m = a[f - 1]
                  , g = a[f]
                  , v = 1 - (n - g) / (a[f - 5] - g);
                v = this.curves.getCurvePercent(f / 5 - 1, v),
                r = u + (a[f + 1] - u) * v,
                o = d + (a[f + 2] - d) * v,
                h = c + (a[f + 3] - c) * v,
                l = m + (a[f + 4] - m) * v
            }
            var y = t.slots[this.slotIndex];
            1 > s ? (y.r += (r - y.r) * s,
            y.g += (o - y.g) * s,
            y.b += (h - y.b) * s,
            y.a += (l - y.a) * s) : (y.r = r,
            y.g = o,
            y.b = h,
            y.a = l)
        }
    }
},
spine.AttachmentTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(t),
    this.frames.length = t,
    this.attachmentNames = [],
    this.attachmentNames.length = t
}
,
spine.AttachmentTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(t, e, n) {
        this.frames[t] = e,
        this.attachmentNames[t] = n
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (n < a[0])
            return void (e > n && this.apply(t, e, Number.MAX_VALUE, null, 0));
        e > n && (e = -1);
        var r = n >= a[a.length - 1] ? a.length - 1 : spine.Animation.binarySearch1(a, n) - 1;
        if (!(a[r] < e)) {
            var o = this.attachmentNames[r];
            t.slots[this.slotIndex].setAttachment(o ? t.getAttachmentBySlotIndex(this.slotIndex, o) : null)
        }
    }
},
spine.EventTimeline = function(t) {
    this.frames = new spine.Float32Array(t),
    this.frames.length = t,
    this.events = [],
    this.events.length = t
}
,
spine.EventTimeline.prototype = {
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(t, e) {
        this.frames[t] = e.time,
        this.events[t] = e
    },
    apply: function(t, e, n, i, s) {
        if (i) {
            var a = this.frames
              , r = a.length;
            if (e > n)
                this.apply(t, e, Number.MAX_VALUE, i, s),
                e = -1;
            else if (e >= a[r - 1])
                return;
            if (!(n < a[0])) {
                var o;
                if (e < a[0])
                    o = 0;
                else {
                    o = spine.Animation.binarySearch1(a, e);
                    for (var h = a[o]; o > 0 && a[o - 1] == h; )
                        o--
                }
                for (var l = this.events; r > o && n >= a[o]; o++)
                    i[i.length] = l[o]
            }
        }
    }
},
spine.DrawOrderTimeline = function(t) {
    this.frames = new spine.Float32Array(t),
    this.frames.length = t,
    this.drawOrders = [],
    this.drawOrders.length = t
}
,
spine.DrawOrderTimeline.prototype = {
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(t, e, n) {
        this.frames[t] = e,
        this.drawOrders[t] = n
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (!(n < a[0])) {
            var r;
            r = n >= a[a.length - 1] ? a.length - 1 : spine.Animation.binarySearch1(a, n) - 1;
            var o = t.drawOrder
              , h = t.slots
              , l = this.drawOrders[r];
            if (l)
                for (var p = 0, f = l.length; f > p; p++)
                    o[p] = t.slots[l[p]];
            else
                for (var p = 0, f = h.length; f > p; p++)
                    o[p] = h[p]
        }
    }
},
spine.FfdTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(t),
    this.frames.length = t,
    this.frameVertices = [],
    this.frameVertices.length = t
}
,
spine.FfdTimeline.prototype = {
    slotIndex: 0,
    attachment: 0,
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(t, e, n) {
        this.frames[t] = e,
        this.frameVertices[t] = n
    },
    apply: function(t, e, n, i, s) {
        var a = t.slots[this.slotIndex]
          , r = a.attachment;
        if (r && (r == this.attachment || r.inheritFFD && r.parentMesh == this.attachment)) {
            var o = this.frames;
            if (!(n < o[0])) {
                var h = this.frameVertices
                  , l = h[0].length
                  , p = a.attachmentVertices;
                if (p.length != l && (a.attachmentVertices = p = new spine.Float32Array(l),
                s = 1),
                n >= o[o.length - 1]) {
                    var f = h[o.length - 1];
                    if (1 > s)
                        for (var u = 0; l > u; u++)
                            p[u] += (f[u] - p[u]) * s;
                    else
                        for (var u = 0; l > u; u++)
                            p[u] = f[u]
                } else {
                    var d = spine.Animation.binarySearch1(o, n)
                      , c = o[d]
                      , m = 1 - (n - c) / (o[d - 1] - c);
                    m = this.curves.getCurvePercent(d - 1, 0 > m ? 0 : m > 1 ? 1 : m);
                    var g = h[d - 1]
                      , v = h[d];
                    if (1 > s)
                        for (var u = 0; l > u; u++) {
                            var y = g[u];
                            p[u] += (y + (v[u] - y) * m - p[u]) * s
                        }
                    else
                        for (var u = 0; l > u; u++) {
                            var y = g[u];
                            p[u] = y + (v[u] - y) * m
                        }
                }
            }
        }
    }
},
spine.IkConstraintTimeline = function(t) {
    this.curves = new spine.Curves(t),
    this.frames = new spine.Float32Array(3 * t),
    this.frames.length = 3 * t
}
,
spine.IkConstraintTimeline.prototype = {
    ikConstraintIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 3
    },
    setFrame: function(t, e, n, i) {
        t *= 3,
        this.frames[t] = e,
        this.frames[t + 1] = n,
        this.frames[t + 2] = i
    },
    apply: function(t, e, n, i, s) {
        var a = this.frames;
        if (!(n < a[0])) {
            var r = t.ikConstraints[this.ikConstraintIndex];
            if (n >= a[a.length - 3])
                return r.mix += (a[a.length - 2] - r.mix) * s,
                void (r.bendDirection = a[a.length - 1]);
            var o = spine.Animation.binarySearch(a, n, 3)
              , h = a[o + -2]
              , l = a[o]
              , p = 1 - (n - l) / (a[o + -3] - l);
            p = this.curves.getCurvePercent(o / 3 - 1, p);
            var f = h + (a[o + 1] - h) * p;
            r.mix += (f - r.mix) * s,
            r.bendDirection = a[o + -1]
        }
    }
},
spine.SkeletonData = function() {
    this.bones = [],
    this.slots = [],
    this.skins = [],
    this.events = [],
    this.animations = [],
    this.ikConstraints = [],
    this.transformConstraints = []
}
,
spine.SkeletonData.prototype = {
    name: null,
    defaultSkin: null,
    width: 0,
    height: 0,
    version: null,
    hash: null,
    findBone: function(t) {
        for (var e = this.bones, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    },
    findBoneIndex: function(t) {
        for (var e = this.bones, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return n;
        return -1
    },
    findSlot: function(t) {
        for (var e = this.slots, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return slot[n];
        return null
    },
    findSlotIndex: function(t) {
        for (var e = this.slots, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return n;
        return -1
    },
    findSkin: function(t) {
        for (var e = this.skins, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    },
    findEvent: function(t) {
        for (var e = this.events, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    },
    findAnimation: function(t) {
        for (var e = this.animations, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    },
    findIkConstraint: function(t) {
        for (var e = this.ikConstraints, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    },
    findTransformConstraints: function(t) {
        for (var e = this.transformConstraints, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    }
},
spine.Skeleton = function(t) {
    this.data = t,
    this.bones = [];
    for (var e = 0, n = t.bones.length; n > e; e++) {
        var i = t.bones[e]
          , s = i.parent ? this.bones[t.bones.indexOf(i.parent)] : null;
        this.bones[e] = new spine.Bone(i,this,s)
    }
    this.slots = [],
    this.drawOrder = [];
    for (var e = 0, n = t.slots.length; n > e; e++) {
        var a = t.slots[e]
          , r = this.bones[t.bones.indexOf(a.boneData)]
          , o = new spine.Slot(a,r);
        this.slots[e] = o,
        this.drawOrder[e] = o
    }
    this.ikConstraints = [];
    for (var e = 0, n = t.ikConstraints.length; n > e; e++)
        this.ikConstraints[e] = new spine.IkConstraint(t.ikConstraints[e],this);
    this.transformConstraints = [];
    for (var e = 0, n = t.transformConstraints.length; n > e; e++)
        this.transformConstraints[e] = new spine.TransformConstraint(t.transformConstraints[e],this);
    this.cache = [],
    this.updateCache()
}
,
spine.Skeleton.prototype = {
    x: 0,
    y: 0,
    skin: null,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    time: 0,
    flipX: !1,
    flipY: !1,
    updateCache: function() {
        var t = this.bones
          , e = this.cache
          , n = this.ikConstraints
          , i = this.transformConstraints
          , s = n.length
          , a = i.length;
        e.length = 0;
        for (var r = 0, o = t.length; o > r; r++) {
            var h = t[r];
            e[e.length] = h;
            for (var l = 0; s > l; l++) {
                var p = n[l];
                if (h == p.bones[p.bones.length - 1]) {
                    e[e.length] = p;
                    break
                }
            }
        }
        for (var r = 0; a > r; r++)
            for (var f = i[r], l = e.length - 1; l >= 0; l--) {
                var u = e[l];
                if (u == f.bone || u == f.target) {
                    e.splice(l + 1, 0, f);
                    break
                }
            }
    },
    updateWorldTransform: function() {
        for (var t = this.cache, e = 0, n = t.length; n > e; e++)
            t[e].update()
    },
    setToSetupPose: function() {
        this.setBonesToSetupPose(),
        this.setSlotsToSetupPose()
    },
    setBonesToSetupPose: function() {
        for (var t = this.bones, e = 0, n = t.length; n > e; e++)
            t[e].setToSetupPose();
        for (var i = this.ikConstraints, e = 0, n = i.length; n > e; e++) {
            var s = i[e];
            s.bendDirection = s.data.bendDirection,
            s.mix = s.data.mix
        }
        for (var a = this.transformConstraints, e = 0, n = a.length; n > e; e++) {
            var s = a[e];
            s.translateMix = s.data.translateMix,
            s.x = s.data.x,
            s.y = s.data.y
        }
    },
    setSlotsToSetupPose: function() {
        for (var t = this.slots, e = this.drawOrder, n = 0, i = t.length; i > n; n++)
            e[n] = t[n],
            t[n].setToSetupPose(n)
    },
    getRootBone: function() {
        return this.bones.length ? this.bones[0] : null
    },
    findBone: function(t) {
        for (var e = this.bones, n = 0, i = e.length; i > n; n++)
            if (e[n].data.name == t)
                return e[n];
        return null
    },
    findBoneIndex: function(t) {
        for (var e = this.bones, n = 0, i = e.length; i > n; n++)
            if (e[n].data.name == t)
                return n;
        return -1
    },
    findSlot: function(t) {
        for (var e = this.slots, n = 0, i = e.length; i > n; n++)
            if (e[n].data.name == t)
                return e[n];
        return null
    },
    findSlotIndex: function(t) {
        for (var e = this.slots, n = 0, i = e.length; i > n; n++)
            if (e[n].data.name == t)
                return n;
        return -1
    },
    setSkinByName: function(t) {
        var e = this.data.findSkin(t);
        if (!e)
            throw "Skin not found: " + t;
        this.setSkin(e)
    },
    setSkin: function(t) {
        if (t)
            if (this.skin)
                t._attachAll(this, this.skin);
            else
                for (var e = this.slots, n = 0, i = e.length; i > n; n++) {
                    var s = e[n]
                      , a = s.data.attachmentName;
                    if (a) {
                        var r = t.getAttachment(n, a);
                        r && s.setAttachment(r)
                    }
                }
        this.skin = t
    },
    getAttachmentBySlotName: function(t, e) {
        return this.getAttachmentBySlotIndex(this.data.findSlotIndex(t), e)
    },
    getAttachmentBySlotIndex: function(t, e) {
        if (this.skin) {
            var n = this.skin.getAttachment(t, e);
            if (n)
                return n
        }
        return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
    },
    setAttachment: function(t, e) {
        for (var n = this.slots, i = 0, s = n.length; s > i; i++) {
            var a = n[i];
            if (a.data.name == t) {
                var r = null;
                if (e && (r = this.getAttachmentBySlotIndex(i, e),
                !r))
                    throw "Attachment not found: " + e + ", for slot: " + t;
                return void a.setAttachment(r)
            }
        }
        throw "Slot not found: " + t
    },
    findIkConstraint: function(t) {
        for (var e = this.ikConstraints, n = 0, i = e.length; i > n; n++)
            if (e[n].data.name == t)
                return e[n];
        return null
    },
    findTransformConstraint: function(t) {
        for (var e = this.transformConstraints, n = 0, i = e.length; i > n; n++)
            if (e[n].data.name == t)
                return e[n];
        return null
    },
    update: function(t) {
        this.time += t
    }
},
spine.EventData = function(t) {
    this.name = t
}
,
spine.EventData.prototype = {
    intValue: 0,
    floatValue: 0,
    stringValue: null
},
spine.Event = function(t, e) {
    this.time = t,
    this.data = e
}
,
spine.Event.prototype = {
    intValue: 0,
    floatValue: 0,
    stringValue: null
},
spine.AttachmentType = {
    region: 0,
    boundingbox: 1,
    mesh: 2,
    weightedmesh: 3,
    linkedmesh: 4,
    weightedlinkedmesh: 5
},
spine.RegionAttachment = function(t) {
    this.name = t,
    this.offset = new spine.Float32Array(8),
    this.offset.length = 8,
    this.uvs = new spine.Float32Array(8),
    this.uvs.length = 8
}
,
spine.RegionAttachment.prototype = {
    type: spine.AttachmentType.region,
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    width: 0,
    height: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    rendererObject: null,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    setUVs: function(t, e, n, i, s) {
        var a = this.uvs;
        s ? (a[2] = t,
        a[3] = i,
        a[4] = t,
        a[5] = e,
        a[6] = n,
        a[7] = e,
        a[0] = n,
        a[1] = i) : (a[0] = t,
        a[1] = i,
        a[2] = t,
        a[3] = e,
        a[4] = n,
        a[5] = e,
        a[6] = n,
        a[7] = i)
    },
    updateOffset: function() {
        var t = this.width / this.regionOriginalWidth * this.scaleX
          , e = this.height / this.regionOriginalHeight * this.scaleY
          , n = -this.width / 2 * this.scaleX + this.regionOffsetX * t
          , i = -this.height / 2 * this.scaleY + this.regionOffsetY * e
          , s = n + this.regionWidth * t
          , a = i + this.regionHeight * e
          , r = this.rotation * spine.degRad
          , o = Math.cos(r)
          , h = Math.sin(r)
          , l = n * o + this.x
          , p = n * h
          , f = i * o + this.y
          , u = i * h
          , d = s * o + this.x
          , c = s * h
          , m = a * o + this.y
          , g = a * h
          , v = this.offset;
        v[0] = l - u,
        v[1] = f + p,
        v[2] = l - g,
        v[3] = m + p,
        v[4] = d - g,
        v[5] = m + c,
        v[6] = d - u,
        v[7] = f + c
    },
    computeVertices: function(t, e, n, i) {
        t += n.worldX,
        e += n.worldY;
        var s = n.a
          , a = n.b
          , r = n.c
          , o = n.d
          , h = this.offset;
        i[0] = h[0] * s + h[1] * a + t,
        i[1] = h[0] * r + h[1] * o + e,
        i[2] = h[2] * s + h[3] * a + t,
        i[3] = h[2] * r + h[3] * o + e,
        i[4] = h[4] * s + h[5] * a + t,
        i[5] = h[4] * r + h[5] * o + e,
        i[6] = h[6] * s + h[7] * a + t,
        i[7] = h[6] * r + h[7] * o + e
    }
},
spine.MeshAttachment = function(t) {
    this.name = t
}
,
spine.MeshAttachment.prototype = {
    type: spine.AttachmentType.mesh,
    vertices: null,
    uvs: null,
    regionUVs: null,
    triangles: null,
    hullLength: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    inheritFFD: !0,
    parentMesh: null,
    rendererObject: null,
    regionU: 0,
    regionV: 0,
    regionU2: 0,
    regionV2: 0,
    regionRotate: !1,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    edges: null,
    width: 0,
    height: 0,
    updateUVs: function() {
        var t = this.regionU2 - this.regionU
          , e = this.regionV2 - this.regionV
          , n = this.regionUVs.length;
        if (this.uvs && this.uvs.length == n || (this.uvs = new spine.Float32Array(n)),
        this.regionRotate)
            for (var i = 0; n > i; i += 2)
                this.uvs[i] = this.regionU + this.regionUVs[i + 1] * t,
                this.uvs[i + 1] = this.regionV + e - this.regionUVs[i] * e;
        else
            for (var i = 0; n > i; i += 2)
                this.uvs[i] = this.regionU + this.regionUVs[i] * t,
                this.uvs[i + 1] = this.regionV + this.regionUVs[i + 1] * e
    },
    computeWorldVertices: function(t, e, n, i) {
        var s = n.bone;
        t += s.worldX,
        e += s.worldY;
        var a = s.a
          , r = s.b
          , o = s.c
          , h = s.d
          , l = this.vertices
          , p = l.length;
        n.attachmentVertices.length == p && (l = n.attachmentVertices);
        for (var f = 0; p > f; f += 2) {
            var u = l[f]
              , d = l[f + 1];
            i[f] = u * a + d * r + t,
            i[f + 1] = u * o + d * h + e
        }
    },
    setParentMesh: function(t) {
        this.parentMesh = t,
        t && (this.vertices = t.vertices,
        this.regionUVs = t.regionUVs,
        this.triangles = t.triangles,
        this.hullLength = t.hullLength,
        this.edges = t.edges,
        this.width = t.width,
        this.height = t.height)
    }
},
spine.WeightedMeshAttachment = function(t) {
    this.name = t
}
,
spine.WeightedMeshAttachment.prototype = {
    type: spine.AttachmentType.weightedmesh,
    bones: null,
    weights: null,
    uvs: null,
    regionUVs: null,
    triangles: null,
    hullLength: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    inheritFFD: !0,
    parentMesh: null,
    rendererObject: null,
    regionU: 0,
    regionV: 0,
    regionU2: 0,
    regionV2: 0,
    regionRotate: !1,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    edges: null,
    width: 0,
    height: 0,
    updateUVs: function(t, e, n, i, s) {
        var a = this.regionU2 - this.regionU
          , r = this.regionV2 - this.regionV
          , o = this.regionUVs.length;
        if (this.uvs && this.uvs.length == o || (this.uvs = new spine.Float32Array(o)),
        this.regionRotate)
            for (var h = 0; o > h; h += 2)
                this.uvs[h] = this.regionU + this.regionUVs[h + 1] * a,
                this.uvs[h + 1] = this.regionV + r - this.regionUVs[h] * r;
        else
            for (var h = 0; o > h; h += 2)
                this.uvs[h] = this.regionU + this.regionUVs[h] * a,
                this.uvs[h + 1] = this.regionV + this.regionUVs[h + 1] * r
    },
    computeWorldVertices: function(t, e, n, i) {
        var s, a, r, o, h, l, p, f = n.bone.skeleton.bones, u = this.weights, d = this.bones, c = 0, m = 0, g = 0, v = 0, y = d.length;
        if (n.attachmentVertices.length)
            for (var w = n.attachmentVertices; y > m; c += 2) {
                for (a = 0,
                r = 0,
                s = d[m++] + m; s > m; m++,
                g += 3,
                v += 2)
                    o = f[d[m]],
                    h = u[g] + w[v],
                    l = u[g + 1] + w[v + 1],
                    p = u[g + 2],
                    a += (h * o.a + l * o.b + o.worldX) * p,
                    r += (h * o.c + l * o.d + o.worldY) * p;
                i[c] = a + t,
                i[c + 1] = r + e
            }
        else
            for (; y > m; c += 2) {
                for (a = 0,
                r = 0,
                s = d[m++] + m; s > m; m++,
                g += 3)
                    o = f[d[m]],
                    h = u[g],
                    l = u[g + 1],
                    p = u[g + 2],
                    a += (h * o.a + l * o.b + o.worldX) * p,
                    r += (h * o.c + l * o.d + o.worldY) * p;
                i[c] = a + t,
                i[c + 1] = r + e
            }
    },
    setParentMesh: function(t) {
        this.parentMesh = t,
        t && (this.bones = t.bones,
        this.weights = t.weights,
        this.regionUVs = t.regionUVs,
        this.triangles = t.triangles,
        this.hullLength = t.hullLength,
        this.edges = t.edges,
        this.width = t.width,
        this.height = t.height)
    }
},
spine.BoundingBoxAttachment = function(t) {
    this.name = t,
    this.vertices = new spine.Float32Array
}
,
spine.BoundingBoxAttachment.prototype = {
    type: spine.AttachmentType.boundingbox,
    computeWorldVertices: function(t, e, n, i) {
        t += n.worldX,
        e += n.worldY;
        for (var s = n.a, a = n.b, r = n.c, o = n.d, h = this.vertices, l = 0, p = h.length; p > l; l += 2) {
            var f = h[l]
              , u = h[l + 1];
            i[l] = f * s + u * a + t,
            i[l + 1] = f * r + u * o + e
        }
    }
},
spine.AnimationStateData = function(t) {
    this.skeletonData = t,
    this.animationToMixTime = {}
}
,
spine.AnimationStateData.prototype = {
    defaultMix: 0,
    setMixByName: function(t, e, n) {
        var i = this.skeletonData.findAnimation(t);
        if (!i)
            throw "Animation not found: " + t;
        var s = this.skeletonData.findAnimation(e);
        if (!s)
            throw "Animation not found: " + e;
        this.setMix(i, s, n)
    },
    setMix: function(t, e, n) {
        this.animationToMixTime[t.name + ":" + e.name] = n
    },
    getMix: function(t, e) {
        var n = t.name + ":" + e.name;
        return this.animationToMixTime.hasOwnProperty(n) ? this.animationToMixTime[n] : this.defaultMix
    }
},
spine.TrackEntry = function() {}
,
spine.TrackEntry.prototype = {
    next: null,
    previous: null,
    animation: null,
    loop: !1,
    delay: 0,
    time: 0,
    lastTime: -1,
    endTime: 0,
    timeScale: 1,
    mixTime: 0,
    mixDuration: 0,
    mix: 1,
    onStart: null,
    onEnd: null,
    onComplete: null,
    onEvent: null
},
spine.AnimationState = function(t) {
    this.data = t,
    this.tracks = [],
    this.events = []
}
,
spine.AnimationState.prototype = {
    onStart: null,
    onEnd: null,
    onComplete: null,
    onEvent: null,
    timeScale: 1,
    update: function(t) {
        t *= this.timeScale;
        for (var e = 0; e < this.tracks.length; e++) {
            var n = this.tracks[e];
            if (n) {
                if (n.time += t * n.timeScale,
                n.previous) {
                    var i = t * n.previous.timeScale;
                    n.previous.time += i,
                    n.mixTime += i
                }
                var s = n.next;
                s ? (s.time = n.lastTime - s.delay,
                s.time >= 0 && this.setCurrent(e, s)) : !n.loop && n.lastTime >= n.endTime && this.clearTrack(e)
            }
        }
    },
    apply: function(t) {
        for (var e = 0; e < this.tracks.length; e++) {
            var n = this.tracks[e];
            if (n) {
                this.events.length = 0;
                var i = n.time
                  , s = n.lastTime
                  , a = n.endTime
                  , r = n.loop;
                !r && i > a && (i = a);
                var o = n.previous;
                if (o) {
                    var h = o.time;
                    !o.loop && h > o.endTime && (h = o.endTime),
                    o.animation.apply(t, h, h, o.loop, null);
                    var l = n.mixTime / n.mixDuration * n.mix;
                    l >= 1 && (l = 1,
                    n.previous = null),
                    n.animation.mix(t, n.lastTime, i, r, this.events, l)
                } else
                    1 == n.mix ? n.animation.apply(t, n.lastTime, i, r, this.events) : n.animation.mix(t, n.lastTime, i, r, this.events, n.mix);
                for (var p = 0, f = this.events.length; f > p; p++) {
                    var u = this.events[p];
                    n.onEvent && n.onEvent(e, u),
                    this.onEvent && this.onEvent(e, u)
                }
                if (r ? s % a > i % a : a > s && i >= a) {
                    var d = Math.floor(i / a);
                    n.onComplete && n.onComplete(e, d),
                    this.onComplete && this.onComplete(e, d)
                }
                n.lastTime = n.time
            }
        }
    },
    clearTracks: function() {
        for (var t = 0, e = this.tracks.length; e > t; t++)
            this.clearTrack(t);
        this.tracks.length = 0
    },
    clearTrack: function(t) {
        if (!(t >= this.tracks.length)) {
            var e = this.tracks[t];
            e && (e.onEnd && e.onEnd(t),
            this.onEnd && this.onEnd(t),
            this.tracks[t] = null)
        }
    },
    _expandToIndex: function(t) {
        if (t < this.tracks.length)
            return this.tracks[t];
        for (; t >= this.tracks.length; )
            this.tracks[this.tracks.length] = null;
        return null
    },
    setCurrent: function(t, e) {
        var n = this._expandToIndex(t);
        if (n) {
            var i = n.previous;
            n.previous = null,
            n.onEnd && n.onEnd(t),
            this.onEnd && this.onEnd(t),
            e.mixDuration = this.data.getMix(n.animation, e.animation),
            e.mixDuration > 0 && (e.mixTime = 0,
            i && n.mixTime / n.mixDuration < .5 ? e.previous = i : e.previous = n)
        }
        this.tracks[t] = e,
        e.onStart && e.onStart(t),
        this.onStart && this.onStart(t)
    },
    setAnimationByName: function(t, e, n) {
        var i = this.data.skeletonData.findAnimation(e);
        if (!i)
            throw "Animation not found: " + e;
        return this.setAnimation(t, i, n)
    },
    setAnimation: function(t, e, n) {
        var i = new spine.TrackEntry;
        return i.animation = e,
        i.loop = n,
        i.endTime = e.duration,
        this.setCurrent(t, i),
        i
    },
    addAnimationByName: function(t, e, n, i) {
        var s = this.data.skeletonData.findAnimation(e);
        if (!s)
            throw "Animation not found: " + e;
        return this.addAnimation(t, s, n, i)
    },
    addAnimation: function(t, e, n, i) {
        var s = new spine.TrackEntry;
        s.animation = e,
        s.loop = n,
        s.endTime = e.duration;
        var a = this._expandToIndex(t);
        if (a) {
            for (; a.next; )
                a = a.next;
            a.next = s
        } else
            this.tracks[t] = s;
        return 0 >= i && (a ? i += a.endTime - this.data.getMix(a.animation, e) : i = 0),
        s.delay = i,
        s
    },
    getCurrent: function(t) {
        return t >= this.tracks.length ? null : this.tracks[t]
    }
},
spine.SkeletonJson = function(t) {
    this.attachmentLoader = t,
    this.linkedMeshes = []
}
,
spine.SkeletonJson.prototype = {
    scale: 1,
    readSkeletonData: function(t, e) {
        var n = new spine.SkeletonData;
        n.name = e;
        var i = t.skeleton;
        i && (n.hash = i.hash,
        n.version = i.spine,
        n.width = i.width || 0,
        n.height = i.height || 0);
        for (var s = t.bones, a = 0, r = s.length; r > a; a++) {
            var o = s[a]
              , h = null;
            if (o.parent && (h = n.findBone(o.parent),
            !h))
                throw "Parent bone not found: " + o.parent;
            var l = new spine.BoneData(o.name,h);
            l.length = (o.length || 0) * this.scale,
            l.x = (o.x || 0) * this.scale,
            l.y = (o.y || 0) * this.scale,
            l.rotation = o.rotation || 0,
            l.scaleX = o.hasOwnProperty("scaleX") ? o.scaleX : 1,
            l.scaleY = o.hasOwnProperty("scaleY") ? o.scaleY : 1,
            l.inheritScale = !o.hasOwnProperty("inheritScale") || o.inheritScale,
            l.inheritRotation = !o.hasOwnProperty("inheritRotation") || o.inheritRotation,
            n.bones[a] = l
        }
        var p = t.ik;
        if (p)
            for (var a = 0, r = p.length; r > a; a++) {
                for (var f = p[a], u = new spine.IkConstraintData(f.name), s = f.bones, d = 0, c = s.length; c > d; d++) {
                    var m = n.findBone(s[d]);
                    if (!m)
                        throw "IK bone not found: " + s[d];
                    u.bones[d] = m
                }
                if (u.target = n.findBone(f.target),
                !u.target)
                    throw "Target bone not found: " + f.target;
                u.bendDirection = !f.hasOwnProperty("bendPositive") || f.bendPositive ? 1 : -1,
                u.mix = f.hasOwnProperty("mix") ? f.mix : 1,
                n.ikConstraints[a] = u
            }
        var g = t.transform;
        if (g)
            for (var a = 0, r = g.length; r > a; a++) {
                var v = g[a]
                  , y = new spine.TransformConstraintData(v.name);
                if (y.bone = n.findBone(v.bone),
                !y.bone)
                    throw "Bone not found: " + v.bone;
                if (y.target = n.findBone(v.target),
                !y.target)
                    throw "Target bone not found: " + v.target;
                y.mix = v.hasOwnProperty("translateMix") ? f.translateMix : 1,
                y.x = (v.x || 0) * this.scale,
                y.y = (v.y || 0) * this.scale,
                n.transformConstraints[a] = y
            }
        for (var w = t.slots, a = 0, r = w.length; r > a; a++) {
            var A = w[a]
              , l = n.findBone(A.bone);
            if (!l)
                throw "Slot bone not found: " + A.bone;
            var x = new spine.SlotData(A.name,l)
              , b = A.color;
            b && (x.r = this.toColor(b, 0),
            x.g = this.toColor(b, 1),
            x.b = this.toColor(b, 2),
            x.a = this.toColor(b, 3)),
            x.attachmentName = A.attachment,
            x.blendMode = spine.BlendMode[A.blend || "normal"],
            n.slots[a] = x
        }
        var k = t.skins;
        for (var S in k)
            if (k.hasOwnProperty(S)) {
                var C = k[S]
                  , T = new spine.Skin(S);
                for (var M in C)
                    if (C.hasOwnProperty(M)) {
                        var I = n.findSlotIndex(M)
                          , O = C[M];
                        for (var _ in O)
                            if (O.hasOwnProperty(_)) {
                                var X = this.readAttachment(T, I, _, O[_]);
                                X && T.addAttachment(I, _, X);
                            }
                    }
                n.skins[n.skins.length] = T,
                "default" == T.name && (n.defaultSkin = T)
            }
        for (var a = 0, r = this.linkedMeshes.length; r > a; a++) {
            var D = this.linkedMeshes[a]
              , T = D.skin ? n.findSkin(D.skin) : n.defaultSkin;
            if (!T)
                throw "Skin not found: " + D.skin;
            var h = T.getAttachment(D.slotIndex, D.parent);
            if (!h)
                throw "Parent mesh not found: " + D.parent;
            D.mesh.setParentMesh(h),
            D.mesh.updateUVs()
        }
        this.linkedMeshes.length = 0;
        var V = t.events;
        for (var F in V)
            if (V.hasOwnProperty(F)) {
                var Y = V[F]
                  , P = new spine.EventData(F);
                P.intValue = Y["int"] || 0,
                P.floatValue = Y["float"] || 0,
                P.stringValue = Y.string || null,
                n.events[n.events.length] = P
            }
        var U = t.animations;
        for (var R in U)
            U.hasOwnProperty(R) && this.readAnimation(R, U[R], n);
        return n
    },
    readAttachment: function(t, e, n, i) {
        n = i.name || n;
        var s = i.type || "region";
        "skinnedmesh" == s && (s = "weightedmesh"),
        s = spine.AttachmentType[s];
        var a = i.path || n
          , r = this.scale;
        switch (s) {
        case spine.AttachmentType.region:
            var o = this.attachmentLoader.newRegionAttachment(t, n, a);
            if (!o)
                return null;
            o.path = a,
            o.x = (i.x || 0) * r,
            o.y = (i.y || 0) * r,
            o.scaleX = i.hasOwnProperty("scaleX") ? i.scaleX : 1,
            o.scaleY = i.hasOwnProperty("scaleY") ? i.scaleY : 1,
            o.rotation = i.rotation || 0,
            o.width = (i.width || 0) * r,
            o.height = (i.height || 0) * r;
            var h = i.color;
            return h && (o.r = this.toColor(h, 0),
            o.g = this.toColor(h, 1),
            o.b = this.toColor(h, 2),
            o.a = this.toColor(h, 3)),
            o.updateOffset(),
            o;
        case spine.AttachmentType.mesh:
        case spine.AttachmentType.linkedmesh:
            var l = this.attachmentLoader.newMeshAttachment(t, n, a);
            return l ? (l.path = a,
            h = i.color,
            h && (l.r = this.toColor(h, 0),
            l.g = this.toColor(h, 1),
            l.b = this.toColor(h, 2),
            l.a = this.toColor(h, 3)),
            l.width = (i.width || 0) * r,
            l.height = (i.height || 0) * r,
            i.parent ? (l.inheritFFD = !i.hasOwnProperty("ffd") || i.ffd,
            this.linkedMeshes[this.linkedMeshes.length] = {
                mesh: l,
                skin: i.skin,
                slotIndex: e,
                parent: i.parent
            }) : (l.vertices = this.getFloatArray(i, "vertices", r),
            l.triangles = this.getUint32Array(i, "triangles"),
            l.regionUVs = this.getFloatArray(i, "uvs", 1),
            l.updateUVs(),
            l.hullLength = 2 * (i.hull || 0),
            i.edges && (l.edges = this.getUint16Array(i, "edges"))),
            l) : null;
        case spine.AttachmentType.weightedmesh:
        case spine.AttachmentType.weightedlinkedmesh:
            var l = this.attachmentLoader.newWeightedMeshAttachment(t, n, a);
            if (!l)
                return null;
            if (l.path = a,
            h = i.color,
            h && (l.r = this.toColor(h, 0),
            l.g = this.toColor(h, 1),
            l.b = this.toColor(h, 2),
            l.a = this.toColor(h, 3)),
            l.width = (i.width || 0) * r,
            l.height = (i.height || 0) * r,
            i.parent)
                l.inheritFFD = !i.hasOwnProperty("ffd") || i.ffd,
                this.linkedMeshes[this.linkedMeshes.length] = {
                    mesh: l,
                    skin: i.skin,
                    slotIndex: e,
                    parent: i.parent
                };
            else {
                for (var p = this.getFloatArray(i, "uvs", 1), f = this.getFloatArray(i, "vertices", 1), u = new spine.Float32Array(3 * p.length * 3), d = new spine.Uint32Array(3 * p.length), c = 0, m = 0, g = 0, v = f.length; v > c; ) {
                    var y = 0 | f[c++];
                    d[m++] = y;
                    for (var w = c + 4 * y; w > c; )
                        d[m++] = f[c],
                        u[g++] = f[c + 1] * r,
                        u[g++] = f[c + 2] * r,
                        u[g++] = f[c + 3],
                        c += 4
                }
                l.bones = d,
                l.weights = u,
                l.triangles = this.getUint32Array(i, "triangles"),
                l.regionUVs = p,
                l.updateUVs(),
                l.hullLength = 2 * (i.hull || 0),
                i.edges && (l.edges = this.getUint16Array(i, "edges"))
            }
            return l;
        case spine.AttachmentType.boundingbox:
            for (var A = this.attachmentLoader.newBoundingBoxAttachment(t, n), f = i.vertices, c = 0, v = f.length; v > c; c++)
                A.vertices[c] = f[c] * r;
            return A
        }
        throw "Unknown attachment type: " + s
    },
    readAnimation: function(t, e, n) {
        var i = []
          , s = 0
          , a = e.slots;
        for (var r in a)
            if (a.hasOwnProperty(r)) {
                var o = a[r]
                  , h = n.findSlotIndex(r);
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var p = o[l];
                        if ("color" == l) {
                            var f = new spine.ColorTimeline(p.length);
                            f.slotIndex = h;
                            for (var u = 0, d = 0, c = p.length; c > d; d++) {
                                var m = p[d]
                                  , g = m.color
                                  , v = this.toColor(g, 0)
                                  , y = this.toColor(g, 1)
                                  , w = this.toColor(g, 2)
                                  , A = this.toColor(g, 3);
                                f.setFrame(u, m.time, v, y, w, A),
                                this.readCurve(f, u, m),
                                u++
                            }
                            i[i.length] = f,
                            s = Math.max(s, f.frames[5 * f.getFrameCount() - 5])
                        } else {
                            if ("attachment" != l)
                                throw "Invalid timeline type for a slot: " + l + " (" + r + ")";
                            var f = new spine.AttachmentTimeline(p.length);
                            f.slotIndex = h;
                            for (var u = 0, d = 0, c = p.length; c > d; d++) {
                                var m = p[d];
                                f.setFrame(u++, m.time, m.name)
                            }
                            i[i.length] = f,
                            s = Math.max(s, f.frames[f.getFrameCount() - 1])
                        }
                    }
            }
        var x = e.bones;
        for (var b in x)
            if (x.hasOwnProperty(b)) {
                var k = n.findBoneIndex(b);
                if (-1 == k)
                    throw "Bone not found: " + b;
                var S = x[b];
                for (var l in S)
                    if (S.hasOwnProperty(l)) {
                        var p = S[l];
                        if ("rotate" == l) {
                            var f = new spine.RotateTimeline(p.length);
                            f.boneIndex = k;
                            for (var u = 0, d = 0, c = p.length; c > d; d++) {
                                var m = p[d];
                                f.setFrame(u, m.time, m.angle),
                                this.readCurve(f, u, m),
                                u++
                            }
                            i[i.length] = f,
                            s = Math.max(s, f.frames[2 * f.getFrameCount() - 2])
                        } else {
                            if ("translate" != l && "scale" != l)
                                throw "Invalid timeline type for a bone: " + l + " (" + b + ")";
                            var f, C = 1;
                            "scale" == l ? f = new spine.ScaleTimeline(p.length) : (f = new spine.TranslateTimeline(p.length),
                            C = this.scale),
                            f.boneIndex = k;
                            for (var u = 0, d = 0, c = p.length; c > d; d++) {
                                var m = p[d]
                                  , T = (m.x || 0) * C
                                  , M = (m.y || 0) * C;
                                f.setFrame(u, m.time, T, M),
                                this.readCurve(f, u, m),
                                u++
                            }
                            i[i.length] = f,
                            s = Math.max(s, f.frames[3 * f.getFrameCount() - 3])
                        }
                    }
            }
        var I = e.ik;
        for (var O in I)
            if (I.hasOwnProperty(O)) {
                var _ = n.findIkConstraint(O)
                  , p = I[O]
                  , f = new spine.IkConstraintTimeline(p.length);
                f.ikConstraintIndex = n.ikConstraints.indexOf(_);
                for (var u = 0, d = 0, c = p.length; c > d; d++) {
                    var m = p[d]
                      , X = m.hasOwnProperty("mix") ? m.mix : 1
                      , D = !m.hasOwnProperty("bendPositive") || m.bendPositive ? 1 : -1;
                    f.setFrame(u, m.time, X, D),
                    this.readCurve(f, u, m),
                    u++
                }
                i[i.length] = f,
                s = Math.max(s, f.frames[3 * f.getFrameCount() - 3])
            }
        var V = e.ffd;
        for (var F in V) {
            var Y = n.findSkin(F)
              , o = V[F];
            for (r in o) {
                var h = n.findSlotIndex(r)
                  , P = o[r];
                for (var U in P) {
                    var p = P[U]
                      , f = new spine.FfdTimeline(p.length)
                      , R = Y.getAttachment(h, U);
                    if (!R)
                        throw "FFD attachment not found: " + U;
                    f.slotIndex = h,
                    f.attachment = R;
                    var W, B = R.type == spine.AttachmentType.mesh;
                    W = B ? R.vertices.length : R.weights.length / 3 * 2;
                    for (var u = 0, d = 0, c = p.length; c > d; d++) {
                        var E, m = p[d];
                        if (m.vertices) {
                            var L = m.vertices
                              , E = new spine.Float32Array(W);
                            E.length = W;
                            var N = m.offset || 0
                              , H = L.length;
                            if (1 == this.scale)
                                for (var j = 0; H > j; j++)
                                    E[j + N] = L[j];
                            else
                                for (var j = 0; H > j; j++)
                                    E[j + N] = L[j] * this.scale;
                            if (B)
                                for (var z = R.vertices, j = 0, H = E.length; H > j; j++)
                                    E[j] += z[j]
                        } else
                            B ? E = R.vertices : (E = new spine.Float32Array(W),
                            E.length = W);
                        f.setFrame(u, m.time, E),
                        this.readCurve(f, u, m),
                        u++
                    }
                    i[i.length] = f,
                    s = Math.max(s, f.frames[f.getFrameCount() - 1])
                }
            }
        }
        var q = e.drawOrder;
        if (q || (q = e.draworder),
        q) {
            for (var f = new spine.DrawOrderTimeline(q.length), J = n.slots.length, u = 0, d = 0, c = q.length; c > d; d++) {
                var G = q[d]
                  , K = null;
                if (G.offsets) {
                    K = new spine.Uint32Array(J),
                    K.length = J;
                    for (var j = J - 1; j >= 0; j--)
                        K[j] = 4294967295;
                    var $ = G.offsets
                      , Q = new spine.Uint32Array(J - $.length);
                    Q.length = J - $.length;
                    for (var Z = 0, tt = 0, j = 0, H = $.length; H > j; j++) {
                        var et = $[j]
                          , h = n.findSlotIndex(et.slot);
                        if (-1 == h)
                            throw "Slot not found: " + et.slot;
                        for (; Z != h; )
                            Q[tt++] = Z++;
                        K[Z + et.offset] = Z++
                    }
                    for (; J > Z; )
                        Q[tt++] = Z++;
                    for (var j = J - 1; j >= 0; j--)
                        4294967295 == K[j] && (K[j] = Q[--tt])
                }
                f.setFrame(u++, G.time, K)
            }
            i[i.length] = f,
            s = Math.max(s, f.frames[f.getFrameCount() - 1])
        }
        var nt = e.events;
        if (nt) {
            for (var f = new spine.EventTimeline(nt.length), u = 0, d = 0, c = nt.length; c > d; d++) {
                var it = nt[d]
                  , st = n.findEvent(it.name);
                if (!st)
                    throw "Event not found: " + it.name;
                var at = new spine.Event(it.time,st);
                at.intValue = it.hasOwnProperty("int") ? it["int"] : st.intValue,
                at.floatValue = it.hasOwnProperty("float") ? it["float"] : st.floatValue,
                at.stringValue = it.hasOwnProperty("string") ? it.string : st.stringValue,
                f.setFrame(u++, at)
            }
            i[i.length] = f,
            s = Math.max(s, f.frames[f.getFrameCount() - 1])
        }
        n.animations[n.animations.length] = new spine.Animation(t,i,s)
    },
    readCurve: function(t, e, n) {
        var i = n.curve;
        i ? "stepped" == i ? t.curves.setStepped(e) : i instanceof Array && t.curves.setCurve(e, i[0], i[1], i[2], i[3]) : t.curves.setLinear(e)
    },
    toColor: function(t, e) {
        if (8 != t.length)
            throw "Color hexidecimal length must be 8, recieved: " + t;
        return parseInt(t.substring(2 * e, 2 * e + 2), 16) / 255
    },
    getFloatArray: function(t, e, n) {
        var i = t[e]
          , s = new spine.Float32Array(i.length)
          , a = 0
          , r = i.length;
        if (1 == n)
            for (; r > a; a++)
                s[a] = i[a];
        else
            for (; r > a; a++)
                s[a] = i[a] * n;
        return s
    },
    getUint32Array: function(t, e) {
        for (var n = t[e], i = new spine.Uint32Array(n.length), s = 0, a = n.length; a > s; s++)
            i[s] = 0 | n[s];
        return i
    },
    getUint16Array: function(t, e) {
        for (var n = t[e], i = new spine.Uint16Array(n.length), s = 0, a = n.length; a > s; s++)
            i[s] = 0 | n[s];
        return i
    }
},
spine.Atlas = function(t, e) {
    this.textureLoader = e,
    this.pages = [],
    this.regions = [];
    var n = new spine.AtlasReader(t)
      , i = [];
    i.length = 4;
    for (var s = null; ; ) {
        var a = n.readLine();
        if (null === a)
            break;
        if (a = n.trim(a),
        a.length)
            if (s) {
                var r = new spine.AtlasRegion;
                r.name = a,
                r.page = s,
                r.rotate = "true" == n.readValue(),
                n.readTuple(i);
                var o = parseInt(i[0])
                  , h = parseInt(i[1]);
                n.readTuple(i);
                var l = parseInt(i[0])
                  , p = parseInt(i[1]);
                r.u = o / s.width,
                r.v = h / s.height,
                r.rotate ? (r.u2 = (o + p) / s.width,
                r.v2 = (h + l) / s.height) : (r.u2 = (o + l) / s.width,
                r.v2 = (h + p) / s.height),
                r.x = o,
                r.y = h,
                r.width = Math.abs(l),
                r.height = Math.abs(p),
                4 == n.readTuple(i) && (r.splits = [parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseInt(i[3])],
                4 == n.readTuple(i) && (r.pads = [parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseInt(i[3])],
                n.readTuple(i))),
                r.originalWidth = parseInt(i[0]),
                r.originalHeight = parseInt(i[1]),
                n.readTuple(i),
                r.offsetX = parseInt(i[0]),
                r.offsetY = parseInt(i[1]),
                r.index = parseInt(n.readValue()),
                this.regions[this.regions.length] = r
            } else {
                s = new spine.AtlasPage,
                s.name = a,
                2 == n.readTuple(i) && (s.width = parseInt(i[0]),
                s.height = parseInt(i[1]),
                n.readTuple(i)),
                s.format = spine.Atlas.Format[i[0]],
                n.readTuple(i),
                s.minFilter = spine.Atlas.TextureFilter[i[0]],
                s.magFilter = spine.Atlas.TextureFilter[i[1]];
                var f = n.readValue();
                s.uWrap = spine.Atlas.TextureWrap.clampToEdge,
                s.vWrap = spine.Atlas.TextureWrap.clampToEdge,
                "x" == f ? s.uWrap = spine.Atlas.TextureWrap.repeat : "y" == f ? s.vWrap = spine.Atlas.TextureWrap.repeat : "xy" == f && (s.uWrap = s.vWrap = spine.Atlas.TextureWrap.repeat),
                e.load(s, a, this),
                this.pages[this.pages.length] = s
            }
        else
            s = null
    }
}
,
spine.Atlas.prototype = {
    findRegion: function(t) {
        for (var e = this.regions, n = 0, i = e.length; i > n; n++)
            if (e[n].name == t)
                return e[n];
        return null
    },
    dispose: function() {
        for (var t = this.pages, e = 0, n = t.length; n > e; e++)
            this.textureLoader.unload(t[e].rendererObject)
    },
    updateUVs: function(t) {
        for (var e = this.regions, n = 0, i = e.length; i > n; n++) {
            var s = e[n];
            s.page == t && (s.u = s.x / t.width,
            s.v = s.y / t.height,
            s.rotate ? (s.u2 = (s.x + s.height) / t.width,
            s.v2 = (s.y + s.width) / t.height) : (s.u2 = (s.x + s.width) / t.width,
            s.v2 = (s.y + s.height) / t.height))
        }
    }
},
spine.Atlas.Format = {
    alpha: 0,
    intensity: 1,
    luminanceAlpha: 2,
    rgb565: 3,
    rgba4444: 4,
    rgb888: 5,
    rgba8888: 6
},
spine.Atlas.TextureFilter = {
    nearest: 0,
    linear: 1,
    mipMap: 2,
    mipMapNearestNearest: 3,
    mipMapLinearNearest: 4,
    mipMapNearestLinear: 5,
    mipMapLinearLinear: 6
},
spine.Atlas.TextureWrap = {
    mirroredRepeat: 0,
    clampToEdge: 1,
    repeat: 2
},
spine.AtlasPage = function() {}
,
spine.AtlasPage.prototype = {
    name: null,
    format: null,
    minFilter: null,
    magFilter: null,
    uWrap: null,
    vWrap: null,
    rendererObject: null,
    width: 0,
    height: 0
},
spine.AtlasRegion = function() {}
,
spine.AtlasRegion.prototype = {
    page: null,
    name: null,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    u: 0,
    v: 0,
    u2: 0,
    v2: 0,
    offsetX: 0,
    offsetY: 0,
    originalWidth: 0,
    originalHeight: 0,
    index: 0,
    rotate: !1,
    splits: null,
    pads: null
},
spine.AtlasReader = function(t) {
    this.lines = t.split(/\r\n|\r|\n/)
}
,
spine.AtlasReader.prototype = {
    index: 0,
    trim: function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    },
    readLine: function() {
        return this.index >= this.lines.length ? null : this.lines[this.index++]
    },
    readValue: function() {
        var t = this.readLine()
          , e = t.indexOf(":");
        if (-1 == e)
            throw "Invalid line: " + t;
        return this.trim(t.substring(e + 1))
    },
    readTuple: function(t) {
        var e = this.readLine()
          , n = e.indexOf(":");
        if (-1 == n)
            throw "Invalid line: " + e;
        for (var i = 0, s = n + 1; 3 > i; i++) {
            var a = e.indexOf(",", s);
            if (-1 == a)
                break;
            t[i] = this.trim(e.substr(s, a - s)),
            s = a + 1
        }
        return t[i] = this.trim(e.substring(s)),
        i + 1
    }
},
spine.AtlasAttachmentLoader = function(t) {
    this.atlas = t
}
,
spine.AtlasAttachmentLoader.prototype = {
    newRegionAttachment: function(t, e, n) {
        var i = this.atlas.findRegion(n);
        if (!i)
            throw "Region not found in atlas: " + n + " (region attachment: " + e + ")";
        var s = new spine.RegionAttachment(e);
        return s.rendererObject = i,
        s.setUVs(i.u, i.v, i.u2, i.v2, i.rotate),
        s.regionOffsetX = i.offsetX,
        s.regionOffsetY = i.offsetY,
        s.regionWidth = i.width,
        s.regionHeight = i.height,
        s.regionOriginalWidth = i.originalWidth,
        s.regionOriginalHeight = i.originalHeight,
        s
    },
    newMeshAttachment: function(t, e, n) {
        var i = this.atlas.findRegion(n);
        if (!i)
            throw "Region not found in atlas: " + n + " (mesh attachment: " + e + ")";
        var s = new spine.MeshAttachment(e);
        return s.rendererObject = i,
        s.regionU = i.u,
        s.regionV = i.v,
        s.regionU2 = i.u2,
        s.regionV2 = i.v2,
        s.regionRotate = i.rotate,
        s.regionOffsetX = i.offsetX,
        s.regionOffsetY = i.offsetY,
        s.regionWidth = i.width,
        s.regionHeight = i.height,
        s.regionOriginalWidth = i.originalWidth,
        s.regionOriginalHeight = i.originalHeight,
        s
    },
    newWeightedMeshAttachment: function(t, e, n) {
        var i = this.atlas.findRegion(n);
        if (!i)
            throw "Region not found in atlas: " + n + " (weighted mesh attachment: " + e + ")";
        var s = new spine.WeightedMeshAttachment(e);
        return s.rendererObject = i,
        s.regionU = i.u,
        s.regionV = i.v,
        s.regionU2 = i.u2,
        s.regionV2 = i.v2,
        s.regionRotate = i.rotate,
        s.regionOffsetX = i.offsetX,
        s.regionOffsetY = i.offsetY,
        s.regionWidth = i.width,
        s.regionHeight = i.height,
        s.regionOriginalWidth = i.originalWidth,
        s.regionOriginalHeight = i.originalHeight,
        s
    },
    newBoundingBoxAttachment: function(t, e) {
        return new spine.BoundingBoxAttachment(e)
    }
},
spine.SkeletonBounds = function() {
    this.polygonPool = [],
    this.polygons = [],
    this.boundingBoxes = []
}
,
spine.SkeletonBounds.prototype = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
    update: function(t, e) {
        var n = t.slots
          , i = n.length
          , s = t.x
          , a = t.y
          , r = this.boundingBoxes
          , o = this.polygonPool
          , h = this.polygons;
        r.length = 0;
        for (var l = 0, p = h.length; p > l; l++)
            o[o.length] = h[l];
        h.length = 0;
        for (var l = 0; i > l; l++) {
            var f = n[l]
              , u = f.attachment;
            if (u.type == spine.AttachmentType.boundingbox) {
                r[r.length] = u;
                var d, c = o.length;
                c > 0 ? (d = o[c - 1],
                o.splice(c - 1, 1)) : d = new spine.Float32Array,
                h[h.length] = d,
                d.length = u.vertices.length,
                u.computeWorldVertices(s, a, f.bone, d)
            }
        }
        e && this.aabbCompute()
    },
    aabbCompute: function() {
        for (var t = this.polygons, e = Number.MAX_VALUE, n = Number.MAX_VALUE, i = -Number.MAX_VALUE, s = -Number.MAX_VALUE, a = 0, r = t.length; r > a; a++)
            for (var o = t[a], h = 0, l = o.length; l > h; h += 2) {
                var p = o[h]
                  , f = o[h + 1];
                e = Math.min(e, p),
                n = Math.min(n, f),
                i = Math.max(i, p),
                s = Math.max(s, f)
            }
        this.minX = e,
        this.minY = n,
        this.maxX = i,
        this.maxY = s
    },
    aabbContainsPoint: function(t, e) {
        return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
    },
    aabbIntersectsSegment: function(t, e, n, i) {
        var s = this.minX
          , a = this.minY
          , r = this.maxX
          , o = this.maxY;
        if (s >= t && s >= n || a >= e && a >= i || t >= r && n >= r || e >= o && i >= o)
            return !1;
        var h = (i - e) / (n - t)
          , l = h * (s - t) + e;
        if (l > a && o > l)
            return !0;
        if (l = h * (r - t) + e,
        l > a && o > l)
            return !0;
        var p = (a - e) / h + t;
        return p > s && r > p || (p = (o - e) / h + t,
        p > s && r > p)
    },
    aabbIntersectsSkeleton: function(t) {
        return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
    },
    containsPoint: function(t, e) {
        for (var n = this.polygons, i = 0, s = n.length; s > i; i++)
            if (this.polygonContainsPoint(n[i], t, e))
                return this.boundingBoxes[i];
        return null
    },
    intersectsSegment: function(t, e, n, i) {
        for (var s = this.polygons, a = 0, r = s.length; r > a; a++)
            if (s[a].intersectsSegment(t, e, n, i))
                return this.boundingBoxes[a];
        return null
    },
    polygonContainsPoint: function(t, e, n) {
        for (var i = t.length, s = i - 2, a = !1, r = 0; i > r; r += 2) {
            var o = t[r + 1]
              , h = t[s + 1];
            if (n > o && h >= n || n > h && o >= n) {
                var l = t[r];
                l + (n - o) / (h - o) * (t[s] - l) < e && (a = !a)
            }
            s = r
        }
        return a
    },
    polygonIntersectsSegment: function(t, e, n, i, s) {
        for (var a = t.length, r = e - i, o = n - s, h = e * s - n * i, l = t[a - 2], p = t[a - 1], f = 0; a > f; f += 2) {
            var u = t[f]
              , d = t[f + 1]
              , c = l * d - p * u
              , m = l - u
              , g = p - d
              , v = r * g - o * m
              , y = (h * m - r * c) / v;
            if ((y >= l && u >= y || y >= u && l >= y) && (y >= e && i >= y || y >= i && e >= y)) {
                var w = (h * g - o * c) / v;
                if ((w >= p && d >= w || w >= d && p >= w) && (w >= n && s >= w || w >= s && n >= w))
                    return !0
            }
            l = u,
            p = d
        }
        return !1
    },
    getPolygon: function(t) {
        var e = this.boundingBoxes.indexOf(t);
        return -1 == e ? null : this.polygons[e]
    },
    getWidth: function() {
        return this.maxX - this.minX
    },
    getHeight: function() {
        return this.maxY - this.minY
    }
},
pc.extend(pc, function() {
    var t = function(t) {
        this._textureData = t
    };
    t.prototype = {
        load: function(t, e, n) {
            var i = this._textureData[e];
            i && (t.rendererObject = i,
            t.width = i.width,
            t.height = i.height,
            n.updateUVs(t))
        },
        unload: function(t) {
            t.destroy()
        }
    };
    var e = function(e, n, i, s) {
        this._app = e,
        this._position = new pc.Vec3;
        var a = new spine.Atlas(n,new t(s))
          , r = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(a));
        r.scale *= .01;
        var o = r.readSkeletonData(i);
        this.skeleton = new spine.Skeleton(o),
        this.skeleton.updateWorldTransform(),
        this.stateData = new spine.AnimationStateData(this.skeleton.data),
        this.states = [new spine.AnimationState(this.stateData)],
        this._node = new pc.GraphNode,
        this._meshInstances = [],
        this._materials = {},
        this._priority = 0,
        this.update(0),
        this.autoUpdate = !0,
        this._model = new pc.Model,
        this._model.graph = this._node,
        this._model.meshInstances = this._meshInstances,
        this._modelChanged = !0,
        this._reordered = !0,
        this._hidden = !1
    };
    return e.prototype = {
        destroy: function() {
            this._app.scene.removeModel(this._model),
            this._model = null,
            this._meshInstances = [],
            this.skeleton = null,
            this.stateData = null,
            this.state = null,
            this._materials = {},
            this._node = null
        },
        hide: function() {
            if (!this._hidden) {
                for (var t = this.skeleton.drawOrder, e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    i.current && i.current.meshInstance && (i.current.meshInstance.visible = !1)
                }
                this._hidden = !0
            }
        },
        show: function() {
            if (this._hidden) {
                for (var t = this.skeleton.drawOrder, e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    i.current && i.current.meshInstance && (i.current.meshInstance.visible = !0)
                }
                this._hidden = !1
            }
        },
        updateSlot: function(t, e) {
            var n = e.attachment;
            if (e.current && e.current.meshInstance && (e.current.meshInstance.visible = !1),
            n) {
                var i = n.name;
                if (void 0 === e.positions && (e.vertices = [],
                e.positions = []),
                void 0 === e.meshes && (e.current = {
                    mesh: null,
                    meshInstance: null
                },
                e.meshes = {},
                e.meshInstances = {},
                e.materials = {}),
                n.computeVertices && n.computeVertices(this.skeleton.x, this.skeleton.y, e.bone, e.vertices),
                n.computeWorldVertices && n.computeWorldVertices(this.skeleton.x, this.skeleton.y, e, e.vertices),
                n instanceof spine.RegionAttachment) {
                    if (e.positions = [e.vertices[0], e.vertices[1], this._position.z, e.vertices[2], e.vertices[3], this._position.z, e.vertices[4], e.vertices[5], this._position.z, e.vertices[6], e.vertices[7], this._position.z],
                    void 0 === e.meshes[i]) {
                        var s = {
                            normals: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                            uvs: [n.uvs[0], 1 - n.uvs[1], n.uvs[2], 1 - n.uvs[3], n.uvs[4], 1 - n.uvs[5], n.uvs[6], 1 - n.uvs[7]],
                            indices: [0, 3, 2, 2, 1, 0]
                        };
                        e.meshes[i] = pc.createMesh(this._app.graphicsDevice, e.positions, s),
                        e.meshes[i].name = i
                    }
                } else if (n instanceof spine.WeightedMeshAttachment || n instanceof spine.MeshAttachment) {
                    for (var a = 0, r = [], o = 0, h = e.vertices.length; h > o; o += 2)
                        e.positions[a] = e.vertices[o],
                        e.positions[a + 1] = e.vertices[o + 1],
                        e.positions[a + 2] = this._position.z,
                        r[a] = 0,
                        r[a + 1] = 1,
                        r[a + 2] = 0,
                        a += 3;
                    if (void 0 === e.meshes[i]) {
                        var l = n.uvs.map(function(t, e) {
                            return e % 2 ? 1 - t : t
                        })
                          , s = {
                            normals: r,
                            uvs: l,
                            indices: n.triangles.reverse()
                        };
                        e.meshes[i] = pc.createMesh(this._app.graphicsDevice, e.positions, s),
                        e.meshes[i].name = i
                    }
                }
                if (void 0 === e.materials[i]) {
                    var p = n.rendererObject.page.rendererObject;
                    if (p)
                        if (p instanceof pc.StandardMaterial)
                            e.materials[i] = p,
                            this._materials[p.name] = p;
                        else {
                            var f = null;
                            p.getSource()instanceof Image && (f = p.getSource().getAttribute("src")),
                            f && void 0 !== this._materials[f] ? e.materials[i] = this._materials[f] : (e.materials[i] = new pc.StandardMaterial,
                            e.materials[i].shadingModel = pc.SPECULAR_BLINN,
                            e.materials[i].diffuse = new pc.Color(0,0,0),
                            e.materials[i].emissiveMap = p,
                            e.materials[i].opacityMap = p,
                            e.materials[i].opacityMapChannel = "a",
                            e.materials[i].depthWrite = !1,
                            e.materials[i].cull = pc.CULLFACE_NONE,
                            e.materials[i].blendType = pc.BLEND_PREMULTIPLIED,
                            e.materials[i].update(),
                            e.materials[i].chunks.outputAlphaPremulPS = pc.shaderChunks.outputAlphaPS,
                            f && (this._materials[f] = e.materials[i]))
                        }
                }
                void 0 === e.meshInstances[i] && (e.meshInstances[i] = new pc.MeshInstance(this._node,e.meshes[i],e.materials[i]),
                this._meshInstances.push(e.meshInstances[i]),
                this._modelChanged = !0,
                this._reordered = !0),
                e.meshes[i].updateVertices(e.positions),
                e.current.mesh = e.meshes[i],
                e.current.meshInstance = e.meshInstances[i],
                e.current.meshInstance.visible = !0
            }
        },
        reorder: function() {
            for (var t = this.skeleton.drawOrder, e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                if (i.attachment) {
                    var s = i.attachment.name
                      , a = i.meshInstances[s];
                    a && (a.drawOrder = e + 1e3 * this.priority)
                }
            }
        },
        update: function(t) {
            if (!this._hidden) {
                for (var e = 0, n = this.states.length; n > e; e++)
                    this.states[e].update(t);
                for (var e = 0, n = this.states.length; n > e; e++)
                    this.states[e].apply(this.skeleton);
                this.autoUpdate && this.skeleton.updateWorldTransform();
                for (var i = this.skeleton.drawOrder, e = 0, n = i.length; n > e; e++) {
                    var s = i[e];
                    this.updateSlot(e, s)
                }
                this._modelChanged && this._model && (this._app.scene.removeModel(this._model),
                this._app.scene.addModel(this._model),
                this._modelChanged = !1),
                this._reordered && this.reorder(),
                this._reordered = !1
            }
        },
        setPosition: function(t) {
            this._position.copy(t)
        }
    },
    Object.defineProperty(e.prototype, "state", {
        get: function() {
            return this.states[0]
        }
    }),
    Object.defineProperty(e.prototype, "priority", {
        get: function() {
            return this._priority
        },
        set: function(t) {
            this._priority = t,
            this._reordered = !0
        }
    }),
    {
        Spine: e
    }
}()),
pc.extend(pc, function() {
    var t = function(t) {
        this.id = "spine",
        this.description = "",
        t.systems.add(this.id, this),
        this.ComponentType = pc.SpineComponent,
        this.DataType = pc.SpineComponentData,
        this.schema = ["enabled", "atlasAsset", "textureAssets", "skeletonAsset", "atlasData", "textures", "skeletonData", "speed", "spine"],
        this.on("remove", this.onRemove, this),
        pc.ComponentSystem.on("update", this.onUpdate, this)
    };
    return t = pc.inherits(t, pc.ComponentSystem),
    pc.extend(t.prototype, {
        initializeComponentData: function(e, n, i) {
            i = ["enabled", "atlasAsset", "textureAssets", "skeletonAsset", "atlasData", "textures", "skeletonData", "spine"],
            t._super.initializeComponentData.call(this, e, n, i)
        },
        removeComponent: function(t) {
            var e = t.spine.data;
            e.spine && e.spine.destroy()
        },
        onUpdate: function(t) {
            var e = this.store;
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n]
                      , s = i.data;
                    s.enabled && i.entity.enabled && s.spine && (s.spine.setPosition(i.entity.getPosition()),
                    s.spine.update(s.speed * t))
                }
        },
        onRemove: function(t, e) {}
    }),
    {
        SpineComponentSystem: t
    }
}()),
pc.extend(pc, function() {
    var t = function(t, e) {
        this.on("set_atlasAsset", this.onSetAsset, this),
        this.on("set_textureAssets", this.onSetAssets, this),
        this.on("set_skeletonAsset", this.onSetAsset, this),
        this.on("set_atlasData", this.onSetResource, this),
        this.on("set_textures", this.onSetResource, this),
        this.on("set_skeletonData", this.onSetResource, this)
    };
    return t = pc.inherits(t, pc.Component),
    pc.extend(t.prototype, {
        _createSpine: function() {
            this.data.spine && (this.data.spine.destroy(),
            this.data.spine = null);
            for (var t = {}, e = 0, n = this.textureAssets.length; n > e; e++) {
                var i = this.system.app.assets.get(this.textureAssets[e])
                  , s = pc.path.getBasename(i.file.url)
                  , a = s.indexOf("?");
                -1 !== a && (s = s.substring(0, a)),
                t[s] = i.resource
            }
            this.data.spine = new pc.Spine(this.system.app,this.atlasData,this.skeletonData,t),
            this.state = this.data.spine.state,
            this.states = this.data.spine.states,
            this.skeleton = this.data.spine.skeleton,
            this.entity.addChild(this.data.spine._node)
        },
        _onAssetReady: function(t) {
            "texture" === t.type && this.textures.push(t.resource),
            "json" === t.type && (this.skeletonData = t.resource),
            "text" === t.type && (this.atlasData = t.resource)
        },
        _onAssetAdd: function(t) {
            t.off("change", this.onAssetChanged, this),
            t.on("change", this.onAssetChanged, this),
            t.off("remove", this.onAssetRemoved, this),
            t.on("remove", this.onAssetRemoved, this),
            t.ready(this._onAssetReady, this),
            this.system.app.assets.load(t)
        },
        onSetResource: function() {
            this.data.atlasData && this.data.textures.length && this.data.skeletonData && this._createSpine()
        },
        onSetAsset: function(t, e, n) {
            var i = this.system.app.assets
              , s = null;
            if (e && (s = i.get(e),
            s && (s.off("change", this.onAssetChanged),
            s.off("remove", this.onAssetRemoved))),
            n) {
                var a = n;
                n instanceof pc.Asset && (a = n.id,
                this.data[t] = a),
                s = i.get(a),
                s ? this._onAssetAdd(s) : i.on("add:" + a)
            }
        },
        onSetAssets: function(t, e, n) {
            var i, s, a = this.system.app.assets, r = null;
            if (e.length)
                for (i = 0,
                s = e.length; s > i; i++)
                    r = a.get(e[i]),
                    r && (r.off("change", this.onAssetChanged),
                    r.off("remove", this.onAssetRemoved));
            if (n && n.length) {
                var o = n.map(function(t) {
                    return t instanceof pc.Asset ? t.id : t
                });
                for (i = 0,
                s = n.length; s > i; i++)
                    r = a.get(o[i]),
                    r ? this._onAssetAdd(r) : a.on("add:" + o[i])
            }
        },
        onAssetChanged: function(t, e, n, i) {},
        onAssetRemoved: function(t) {},
        onEnable: function() {
            t._super.onEnable.call(this);
            var e = this.data.spine;
            e && e._model && this.system.app.scene.addModel(e._model)
        },
        onDisable: function() {
            t._super.onDisable.call(this);
            var e = this.data.spine;
            e && e._model && this.system.app.scene.removeModel(e._model)
        },
        hide: function() {
            this.data.spine && this.data.spine.hide()
        },
        show: function() {
            this.data.spine && this.data.spine.show()
        }
    }),
    {
        SpineComponent: t
    }
}()),
pc.extend(pc, function() {
    var t = function() {
        this.enabled = !0,
        this.atlasAsset = null,
        this.textureAssets = [],
        this.skeletonAsset = null,
        this.speed = 1,
        this.spine = null,
        this.atlasData = null,
        this.textures = [],
        this.skeletonData = null
    };
    return t = pc.inherits(t, pc.ComponentData),
    {
        SpineComponentData: t
    }
}()),
function() {
    if (pc.Mesh.prototype.updateVertices = function(t, e, n, i) {
        for (var s = t.length / 3, a = new pc.VertexIterator(this.vertexBuffer), r = 0; s > r; r++)
            a.element[pc.SEMANTIC_POSITION].set(t[3 * r], t[3 * r + 1], t[3 * r + 2]),
            e && a.element[pc.SEMANTIC_NORMAL].set(e[3 * r], e[3 * r + 1], e[3 * r + 2]),
            n && a.element[pc.SEMANTIC_TANGENT].set(n[4 * r], n[4 * r + 1], n[4 * r + 2], n[4 * r + 3]),
            i && a.element[pc.SEMANTIC_TEXCOORD0].set(i[2 * r], i[2 * r + 1]),
            a.next();
        a.end()
    }
    ,
    pc.Application.registerPlugin) {
        var t = function(t) {
            new pc.SpineComponentSystem(t)
        };
        pc.Application.registerPlugin("spine", t)
    } else {
        var e = pc.Application.getApplication();
        new pc.SpineComponentSystem(e)
    }
}();
pc.BoundingCircle = function() {
    this.center = new pc.Vec3,
    this.radius = .5,
    this.tmpVecA = new pc.Vec3
}
,
pc.BoundingCircle.prototype.containsPoint = function(t) {
    return this.tmpVecA.sub2(t, this.center),
    this.tmpVecA.z = 0,
    this.tmpVecA.lengthSq() <= this.radius * this.radius
}
,
pc.BoundingRect = pc.inherits(function() {}, pc.BoundingBox),
pc.BoundingRect.prototype = pc.extend(pc.BoundingRect.prototype, {
    containsPoint: function(t) {
        var n, i = this.getMin(), c = this.getMax();
        for (n = 0; 2 > n; ++n)
            if (t.data[n] < i.data[n] || t.data[n] > c.data[n])
                return !1;
        return !0
    }
});
var EntityPool = function(t, e) {
    this._template = t,
    this._pool = [],
    this._freelist = [],
    this._nextFree = 0,
    this._allocated = 0,
    this._total = 0,
    this.expand(e),
    pc.events.attach(this)
};
EntityPool.prototype = {
    expand: function(t) {
        for (var e = this._total; t > e; e++)
            this._pool.push(this._template.clone()),
            this._freelist.push(!0);
        this._total = t
    },
    alloc: function() {
        var t = this._pool[this._nextFree];
        if (this._freelist[this._nextFree] = !1,
        this._allocated++,
        this._allocated >= this._total) {
            var e = this._total < 20 ? 2 * this._total : this._total + 20;
            this.expand(e)
        }
        for (var i = 0; !this._freelist[this._nextFree]; )
            i++,
            this._nextFree++,
            this._nextFree >= this._total && (this._nextFree = 0);
        return this.fire("alloc", t),
        t
    },
    free: function(t) {
        var e = this._pool.indexOf(t);
        return -1 === e || this._freelist[e] ? void 0 : (this._freelist[e] = !0,
        this._allocated--,
        this.fire("free", t),
        !0)
    },
    freeAll: function() {
        for (var t = 0; t < this._total; t++) {
            var e = this._pool[t];
            this._freelist[t] || (this._freelist[t] = !0,
            this.fire("free", e))
        }
        this._allocated = 0
    }
};
SelectionManager = function(e, t) {
    this._app = e,
    this._device = t,
    this._width = 1024,
    this._height = 1024,
    this._picker = new pc.Picker(t,this._width,this._height),
    this._rect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    this._prepared = !1,
    this._events = {},
    this._over = [null],
    this._down = [!1]
}
,
SelectionManager.prototype = {
    attach: function(e) {
        e.mouse && (e.mouse.on("mousedown", this._onMouseDown, this),
        e.mouse.on("mouseup", this._onMouseUp, this),
        e.mouse.on("mousemove", this._onMouseMove, this)),
        e.touch && (e.touch.on("touchstart", this._onTouchStart, this),
        e.touch.on("touchend", this._onTouchEnd, this),
        e.touch.on("touchmove", this._onTouchMove, this),
        e.touch.on("touchcancel", this._onTouchCancel, this))
    },
    select: function(e, t, i, o) {
        this._prepared || this._picker.prepare(this.camera, this._app.scene),
        this._rect.x = e * this._picker.width / this._app.graphicsDevice.canvas.clientWidth,
        this._rect.y = this._picker.height - Math.floor(t * this._picker.height / this._app.graphicsDevice.canvas.clientHeight),
        i && o ? (this._rect.width = i,
        this._rect.height = o) : (this._rect.width = 0,
        this._rect.height = 0);
        var n = this._picker.getSelection(this._rect);
        if (n.length > 0) {
            for (var s = n[0], r = s.node; r && !(r instanceof pc.Entity); )
                r = r._parent;
            return r
        }
        return null
    },
    addEvent: function(e) {
        void 0 === this._events[e] && (this._events[e] = 0),
        this._events[e]++
    },
    removeEvent: function(e) {
        this._events[e]--
    },
    _onMouseDown: function(e) {
        if (this._events.pointerdown) {
            var t = 0
              , i = this.select(e.x, e.y);
            i && i.selector && i.selector.fire("pointerdown", i, e.x, e.y),
            this._down[t] = i
        }
    },
    _onMouseUp: function(e) {
        if (this._events.pointerup) {
            var t = this.select(e.x, e.y);
            t && t.selector && (t.selector.fire("pointerup", t, e.x, e.y),
            t.selector.fire("pointerclick", t, e.x, e.y));
            var i = 0;
            this._down[i] = null
        }
    },
    _onMouseMove: function(e) {
        if (this._events.pointerenter || this._events.pointerexit || this._events.pointermove) {
            var t = 0
              , i = this.select(e.x, e.y)
              , o = this._over[t];
            !i || o && o === i ? i && i === o ? i.selector && i.selector.fire("pointermove", e.x, e.y) : !i && o && o.selector && o.selector.fire("pointerleave", e.x, e.y) : (i.selector && i.selector.fire("pointerenter", e.x, e.y),
            o && o.selector && o.selector.fire("pointerleave", e.x, e.y)),
            this._over[t] = i
        }
    },
    _onTouchStart: function(e) {
        if (this._events.pointerdown) {
            var t = 0
              , i = e.changedTouches[t]
              , o = this.select(i.x, i.y);
            o && o.selector && o.selector.fire("pointerdown", o, i.x, i.y),
            e.event.preventDefault(),
            this._down[t] = o
        }
    },
    _onTouchEnd: function(e) {
        if (this._events.pointerup || this._events.pointerclick) {
            var t = 0
              , i = e.changedTouches[t]
              , o = this.select(i.x, i.y);
            o && o.selector && (o.selector.fire("pointerup", o, i.x, i.y),
            o.selector.fire("pointerclick", o, i.x, i.y)),
            this._down[t] = null
        }
    },
    _onTouchCancel: function(e) {
        if (this._events.pointerup || this._events.pointerclick) {
            var t = 0
              , i = e.changedTouches[t]
              , o = this.select(i.x, i.y);
            o && o.selector && o.selector.fire("pointerup", o, i.x, i.y),
            this._down[t] = null
        }
    },
    _onTouchMove: function(e) {
        if (this._events.pointerenter || this._events.pointerexit) {
            var t = 0
              , i = e.changedTouches[t]
              , o = this.select(i.x, i.y)
              , n = this._over[t];
            !o || n && n === o ? o && o === n ? o.selector && o.selector.fire("pointermove", i.x, i.y) : !o && n && n.selector && n.selector.fire("pointerleave", i.x, i.y) : (o.selector && o.selector.fire("pointerenter", i.x, i.y),
            n && n.selector && n.selector.fire("pointerleave", i.x, i.y)),
            this._over[t] = o
        }
    }
},
Object.defineProperty(SelectionManager.prototype, "camera", {
    get: function() {
        return this._camera || (this._camera = this._app.systems.camera.cameras[0].camera),
        this._camera
    },
    set: function(e) {
        this._camera = e
    }
});
var Selector = function(e, t) {
    this._entity = e,
    this._manager = t,
    this._tap = -1,
    pc.events.attach(Selector.prototype),
    this.on = function(e, t, i) {
        this._manager.addEvent(e),
        Selector.prototype.on.call(this, e, t, i)
    }
};
Object.defineProperty(Selector.prototype, "isPointerDown", {
    get: function() {
        for (var e = 0; e < this._manager._down.length; e++)
            if (this._manager._down[e] === this._entity)
                return !0;
        return !1
    }
});
var application = pc.Application.getApplication();
application && (application.selectionManager = new SelectionManager(application,application.graphicsDevice),
application.selectionManager.attach(application));
var Game = pc.createScript("game");
Game.attributes.add("gravity", {
    type: "number",
    "default": -9.8
}),
Game.attributes.add("powerSpeed", {
    type: "number",
    "default": 15
}),
Game.attributes.add("minChargeTime", {
    type: "number",
    "default": .3
}),
Game.attributes.add("maxPower", {
    type: "number"
}),
Game.attributes.add("maxAttempts", {
    type: "number",
    "default": 3
}),
Game.attributes.add("angleSpeed", {
    type: "number"
}),
Game.attributes.add("switchLevelDelay", {
    type: "number"
}),
Game.attributes.add("perfectShotDelay", {
    type: "number",
    "default": .5
}),
Game.attributes.add("letterDelay", {
    type: "number",
    "default": .5
}),
Game.attributes.add("gameoverDelay", {
    type: "number",
    "default": .5
}),
Game.attributes.add("gameoverDelayAfterBonus", {
    type: "number",
    "default": .5
}),
Game.attributes.add("retryDelay", {
    type: "number",
    "default": .1
}),
Game.attributes.add("streakDelay", {
    type: "number",
    "default": .5
}),
Game.attributes.add("tutorialDelay", {
    type: "number",
    "default": 1
}),
Game.attributes.add("showAimLine", {
    type: "boolean",
    "default": !1
}),
Game.attributes.add("streakShots", {
    type: "number",
    "default": 3
}),
Game.attributes.add("streakMultiplier", {
    type: "number",
    "default": 2
}),
Game.attributes.add("minX", {
    type: "number"
}),
Game.attributes.add("maxX", {
    type: "number"
}),
Game.attributes.add("minY", {
    type: "number"
}),
Game.attributes.add("maxY", {
    type: "number"
}),
Game.attributes.add("bonusLetters", {
    type: "entity"
}),
Game.attributes.add("bonusLettersLevelInterval", {
    type: "number",
    "default": 3
}),
Game.attributes.add("fallingGravityMultiplier", {
    type: "number",
    "default": 2
}),
Game.attributes.add("fallingVelocityMultiplier", {
    type: "number",
    "default": .8
}),
Game.attributes.add("fallingAngularVelocityMultiplier", {
    type: "number",
    "default": 50
}),
Game.attributes.add("amazingMultiplier", {
    type: "number",
    "default": 10
}),
Game.attributes.add("perfectMultiplier", {
    type: "number",
    "default": 5
}),
Game.attributes.add("toughShotLimitX", {
    type: "number",
    "default": .5
}),
Game.attributes.add("toughShotLimitY", {
    type: "number",
    "default": 4
}),
Game.attributes.add("freezeFrameDuration", {
    type: "number",
    "default": .03
}),
Game.attributes.add("turnsPerFruit", {
    type: "number",
    "default": 3
}),
Game.attributes.add("maxPixelRatio", {
    type: "number",
    "default": 1.5
});
var MIN_STATE = 1
  , MAX_STATE = MIN_STATE
  , STATE_MENU = MAX_STATE++
  , STATE_SWITCH_LEVEL_START = MAX_STATE++
  , STATE_SWITCH_LEVEL = MAX_STATE++
  , STATE_PLAYING = MAX_STATE++
  , STATE_GAMEOVER = MAX_STATE++;
Game.prototype.initialize = function() {
    this.app.game = this,
    this.app.on("arrow-impact", this.onArrowImpact, this),
    this.app.on("arrow-miss", this.onArrowMiss, this),
    this.app.on("player-release", this.onRelease, this),
    this.app.on("level-ready", this.onLevelReady, this),
    this.app.on("game-letter-collected", this.collectLetter, this),
    this.app.on("game-letter-bonus", this.onLetterBonus, this),
    this.app.on("game-letter-bonus-reset", this.onResetLetters, this),
    this.idealZoom = this.app.root.findByName("camera").camera.orthoHeight,
    this.setResolution(),
    window.addEventListener("resize", this.setResolution.bind(this)),
    this.stateSetters = [];
    for (var t = function(t) {
        return function() {
            return this.setState(t)
        }
        .bind(this)
    }
    .bind(this), e = MIN_STATE; MAX_STATE > e; e++)
        this.stateSetters[e] = t(e);
    this.timerRetry = new Timer({
        scope: this,
        time: this.retryDelay,
        callback: this.retryLevel
    }),
    this.timerMiss = new Timer({
        scope: this,
        time: this.retryDelay,
        callback: this.onArrowMiss
    }),
    this.timerNextLevel = new Timer({
        scope: this,
        time: this.switchLevelDelay,
        callback: this.stateSetters[STATE_SWITCH_LEVEL_START]
    }),
    this.timerOneFrame = new Timer({
        scope: this,
        time: 0
    }),
    this.timerFreezeFrame = new Timer({
        scope: this,
        time: 0,
        callback: function() {
            this.app.timeScale = 0,
            this.timerRestoreTimeScale.time = this.freezeFrameDuration,
            this.timerRestoreTimeScale.start()
        }
    }),
    this.timerRestoreTimeScale = new Timer({
        scope: this,
        time: .1,
        async: !0,
        callback: function() {
            this.app.timeScale = 1
        }
    }),
    this.timerGameOver = new Timer({
        scope: this,
        time: this.gameoverDelay,
        callback: this.stateSetters[STATE_GAMEOVER]
    }),
    this.timerGameOverAfterBonus = new Timer({
        scope: this,
        time: this.gameoverDelayAfterBonus,
        callback: this.stateSetters[STATE_GAMEOVER]
    }),
    this.timerStreak = new Timer({
        scope: this,
        time: this.streakDelay,
        callback: function() {
            this.streak && this.app.fire("game-streak")
        }
    }),
    this.timerTutorial = new Timer({
        scope: this,
        time: this.tutorialDelay,
        callback: function() {
            this.app.fire("tutorial-show")
        }
    }),
    this.showTutorial = !0
}
,
Game.prototype.postInitialize = function() {
    this.setState(STATE_MENU)
}
,
Game.prototype.reset = function() {
    this.score = 0,
    this.attempts = this.maxAttempts,
    this.state = STATE_MENU,
    this.successfulShots = 0,
    this.level = 1,
    this.hasLetterBonus = !1,
    this.collectedLetters = {},
    this.streak ? (this.streak = !1,
    this.app.fire("game-streak-end")) : this.streak = !1,
    this.keepStreak = !1,
    this.hitTarget = !1
}
,
Game.prototype.setState = function(t) {
    this.state = t,
    t === STATE_MENU ? this.reset() : t === STATE_SWITCH_LEVEL_START ? this.level++ : t === STATE_PLAYING ? (this.showTutorial && (this.showTutorial = !1,
    this.app.fire("game-input-toggle", !1),
    this.timerTutorial.start()),
    !this.streak && this.successfulShots >= this.streakShots && (this.streak = !0,
    this.timerStreak.start()),
    this.keepStreak = !1,
    this.hitTarget = !1) : t === STATE_GAMEOVER && this.streak && (this.streak = !1,
    this.app.fire("game-streak-end")),
    this.app.fire("game-state", t)
}
,
Game.prototype.setScore = function(t) {
    this.score = t,
    this.app.fire("game-score", this.score)
}
,
Game.prototype.applyBonuses = function(t, e, s) {
    var i = t;
    return this.successfulShots > this.streakShots && (i *= this.streakMultiplier),
    e && (i *= s ? this.amazingMultiplier : this.perfectMultiplier),
    i
}
,
Game.prototype.setAttempts = function(t) {
    return 0 > t ? void (this.hasLetterBonus && this.app.fire("game-letter-bonus-reset")) : (this.attempts = t,
    void this.app.fire("game-attempts", this.attempts))
}
,
Game.prototype.hasAttempts = function() {
    return this.attempts || this.hasLetterBonus
}
,
Game.prototype.collectLetter = function(t) {
    this.collectedLetters[t] || (this.collectedLetters[t] = !0,
    this.app.fire("game-letter-collected", t),
    this.collectedLetters.b && this.collectedLetters.o && this.collectedLetters.n && this.collectedLetters.u && this.collectedLetters.s && this.app.fire("game-letter-bonus"))
}
,
Game.prototype.onLetterBonus = function() {
    this.hasLetterBonus = !0
}
,
Game.prototype.onResetLetters = function() {
    this.hasLetterBonus = !1,
    this.collectedLetters = {}
}
,
Game.prototype.onArrowImpact = function(t) {
    if (t.perfect || t.thing instanceof Letter || this.freezeFrameDuration && (this.streak && t.thing.isBonus || this.timerFreezeFrame.start()),
    t.thing instanceof Fruit)
        if (this.keepStreak = !0,
        t.perfect && (t.far ? this.app.fire("game-amazing-bonus") : this.app.fire("game-perfect-bonus"),
        this.streak && t.thing.isBonus || this.timerFreezeFrame.start()),
        t.thing.isBonus)
            this.setScore(this.score + this.applyBonuses(t.thing.points, t.perfect, t.far)),
            this.streak || (this.hasAttempts() ? this.timerRetry.start() : t.perfect ? this.timerGameOverAfterBonus.start() : this.timerGameOver.start());
        else {
            this.hitTarget = !0,
            this.successfulShots++,
            this.setScore(this.score + this.applyBonuses(t.thing.points, t.perfect, t.far));
            var e = 0;
            t.perfect && (e = this.perfectShotDelay),
            this.streak && !this.hasLetterBonus && (e = Math.max(e, this.letterDelay)),
            e ? (this.timerNextLevel.time = e,
            this.timerNextLevel.start()) : this.setState(STATE_SWITCH_LEVEL_START)
        }
    else
        (t.thing instanceof Boy || t.thing instanceof Stump) && this.timerMiss.start()
}
,
Game.prototype.onArrowMiss = function() {
    this.hitTarget || this.state === STATE_PLAYING && (this.keepStreak || (this.successfulShots = 0,
    this.streak && (this.streak = !1,
    this.app.fire("game-streak-end"))),
    this.hasAttempts() ? this.retryLevel() : this.timerGameOver.start())
}
,
Game.prototype.onRelease = function() {
    this.setAttempts(this.attempts - 1)
}
,
Game.prototype.onLevelReady = function() {
    if (this.level == 1) {
			if (!window.IS_FIRST) {
				window.IS_FIRST = true;
			}
			else {
				setLoadingVisible(true, false, function () {
				})
			}
    }
    this.setAttempts(this.maxAttempts),
    this.timerOneFrame.callback = this.stateSetters[STATE_PLAYING],
    this.timerOneFrame.start()
}
,
Game.prototype.retryLevel = function() {
    this.setState(STATE_PLAYING),
    this.app.fire("level-retry")
}
,
Game.prototype.setResolution = function() {
    var t = window.screen.width;
    window.screen.height;
    if (this.app.graphicsDevice.maxPixelRatio = Math.min(this.maxPixelRatio, window.devicePixelRatio),
    480 > t)
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO),
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    else {
        var e = 720
          , s = 1280;
        window.screen.width < e && (e = window.screen.width,
        s = 1280 * e / 720),
        window.screen.height < s && (s = window.screen.height,
        e = 720 * s / 1280),
        this.app.setCanvasResolution(pc.RESOLUTION_FIXED, e, s),
        this.app.setCanvasFillMode(pc.FILLMODE_KEEP_ASPECT)
    }
    var i = this.app.root.findByName("camera");
    i.camera.orthoHeight = Math.min(.5625 * this.idealZoom / (this.app.graphicsDevice.width / this.app.graphicsDevice.height), 11)
}
;
var Spine = pc.createScript("spine");
Spine.attributes.add("atlas", {
    type: "asset",
    assetType: "text"
}),
Spine.attributes.add("skeleton", {
    type: "asset",
    assetType: "json"
}),
Spine.attributes.add("textures", {
    type: "asset",
    array: !0,
    assetType: "texture"
}),
Spine.attributes.add("priority", {
    type: "number",
    "default": 1
}),
Spine.prototype.initialize = function() {
    this.atlas && this.textures && this.skeleton && (this.entity.addComponent("spine", {
        atlasAsset: this.atlas.id,
        textureAssets: this.textures.map(function(t) {
            return t.id
        }),
        skeletonAsset: this.skeleton.id
    }),
    this.entity.spine && (this.priority = this.priority ? this.priority : 0,
    this.entity.spine.spine.priority = this.priority)),
    this.on("attr:priority", function(t) {
        this.entity.spine && (this.entity.spine.spine.priority = t)
    }, this)
}
;
var Player = pc.createScript("player");
Player.attributes.add("arrowPrefab", {
    type: "entity"
}),
Player.prototype.initialize = function() {
    this.app.on("game-state", this.onGameState, this),
    this.app.on("player-charge", this.startCharge, this),
    this.app.on("player-charge-cancel", this.cancelCharge, this),
    this.app.on("player-release", this.release, this),
    this.app.on("game-streak", this.onStreakStart, this),
    this.app.on("game-streak-end", this.onStreakEnd, this),
    this.arrowPool = new EntityPool(this.arrowPrefab,4),
    this.timerAnimation = new Timer({
        callback: function() {
            if (!this.isCharging) {
                var t = this.getCurrentTrack(this.spine);
                t && (t.timeScale = -2)
            }
        },
        scope: this,
        time: .5
    }),
    this.lineStart = new pc.Vec3,
    this.lineEnd = new pc.Vec3,
    this.lineColor = new pc.Color(1,1,1),
    this.streak = !1
}
,
Player.prototype.postInitialize = function() {
    this.spine = this.entity.findByName("spine").spine,
    this.bow = this.entity.findByName("bow"),
    this.bowAttachment = this.spine.skeleton.findBone("bow_attachment"),
    this.arrowAttachment = this.bow.spine.skeleton.findBone("arrow_attachment")
}
,
Player.prototype.setupDrawOrder = function() {
    for (var t, e, i, r = this.spine.skeleton.drawOrder, a = 0, s = r.length; s > a; a++)
        t = r[a],
        t.attachment && (e = t.attachment.name,
        i = t.meshInstances[e],
        i && (i.layer = pc.LAYER_WORLD - 1,
        "Will_BowArm_Hand" !== e && "Will_StringForeArm" !== e || (i.drawOrder += 1e3)));
    r = this.bow.spine.skeleton.drawOrder;
    for (var a = 0, s = r.length; s > a; a++)
        t = r[a],
        t.attachment && (e = t.attachment.name,
        i = t.meshInstances[e],
        i && (i.layer = pc.LAYER_WORLD - 1))
}
,
Player.prototype.reset = function() {
    this.clear(),
    this.arrow = this.arrowPool.alloc(),
    this.arrow.reparent(this.bow);
    var t = this.arrow.findByName("model").model.meshInstances[0];
    t.drawOrder = 1006,
    t.layer = pc.LAYER_WORLD - 1,
    this.arrow.enabled = !0,
    this.positionArrow(this.arrow),
    this.arrow.script.arrow.enabled = !0,
    this.arrow.script.arrow.softReset(),
    this.arrow.script.arrow.toggleEffects(this.streak)
}
,
Player.prototype.clear = function() {
    this.isCharging = !1,
    this.isReleased = !1,
    this.arrow && (this.arrow.script.arrow.enabled = !1,
    this.arrow.script.arrow.toggleEffects(!1),
    this.arrowPool.free(this.arrow))
}
,
Player.prototype.onStreakStart = function() {
    this.streak = !0,
    this.arrow && this.arrow.script.arrow.toggleEffects(!0)
}
,
Player.prototype.onStreakEnd = function() {
    this.streak = !1,
    this.arrow && this.arrow.script.arrow.toggleEffects(!1)
}
,
Player.prototype.onGameState = function(t) {
    if (t === STATE_MENU)
        this.clear();
    else if (t === STATE_SWITCH_LEVEL) {
        for (var e = 0, i = this.entity.children.length; i > e; e++)
            this.entity.children[e].script && this.entity.children[e].script.arrow && (this.entity.children[e].script.arrow.toggleEffects(!1, !0),
            this.entity.children[e].enabled = !1);
        this.getCurrentTrack(this.spine) || (this.spine.state.setAnimationByName(0, "idle", !0),
        this.setupDrawOrder()),
        this.spine.state.timeScale = 1
    } else
        t === STATE_PLAYING && this.reset()
}
,
Player.prototype.startCharge = function() {
    this.isCharging = !0,
    this.isReleased = !1;
    var t = this.spine.state.setAnimationByName(0, "draw", !1);
    t.timeScale = this.app.game.angleSpeed,
    t = this.bow.spine.state.setAnimationByName(0, "draw", !1),
    t.timeScale = this.app.game.angleSpeed
}
,
Player.prototype.cancelCharge = function() {
    this.isCharging = !1,
    this.isReleased = !1;
    var t = this.getCurrentTrack(this.spine);
    t || (t = this.spine.state.setAnimationByName(0, "draw", !1),
    t.time = t.endTime),
    t.timeScale = -2,
    t = this.getCurrentTrack(this.bow.spine),
    t || (t = this.bow.spine.state.setAnimationByName(0, "draw", !1),
    t.time = t.endTime),
    t.timeScale = -2
}
,
Player.prototype.release = function() {
    var t = this.arrow.getPosition()
      , e = this.arrow.getRotation();
    this.arrow.reparent(this.entity),
    this.arrow.setPosition(t),
    this.arrow.setRotation(e),
    this.isCharging = !1,
    this.isReleased = !0;
    var i = this.getCurrentTrack(this.spine);
    i || (i = this.spine.state.setAnimationByName(0, "draw", !1),
    i.time = i.endTime),
    i.timeScale = -.2,
    this.timerAnimation.start(),
    i = this.getCurrentTrack(this.bow.spine),
    i || (i = this.bow.spine.state.setAnimationByName(0, "draw", !1),
    i.time = i.endTime),
    i.timeScale = -9
}
,
Player.prototype.getCurrentTrack = function(t) {
    return t.state && t.state.tracks ? t.state.tracks[0] : null
}
,
Player.prototype.positionArrow = function(t) {
    var e = t.getLocalPosition();
    e.x = this.arrowAttachment.worldX,
    e.y = this.arrowAttachment.worldY,
    t.setLocalPosition(e),
    t.setLocalEulerAngles(0, 0, this.arrowAttachment.getWorldRotationX())
}
,
Player.prototype.update = function(t) {
    var e = this.getCurrentTrack(this.spine);
    e && e.time < 0 && this.spine.state.setAnimationByName(0, "idle", !0),
    e && "idle" === e.animation.name && this.app.game.state === STATE_GAMEOVER && (this.spine.state.timeScale = 0),
    e = this.getCurrentTrack(this.bow.spine),
    e && e.time < 0 && (e.timeScale = 0,
    e.time = 0),
    this.bow.setLocalPosition(this.bowAttachment.worldX, this.bowAttachment.worldY, 0),
    this.bow.setLocalEulerAngles(0, 0, this.bowAttachment.getWorldRotationX()),
    !this.isReleased && this.arrow && (this.positionArrow(this.arrow),
    this.isCharging && this.app.game.showAimLine && (this.lineStart.copy(this.arrow.right).scale(.5).add(this.arrow.getPosition()),
    this.lineEnd.copy(this.arrow.right).scale(2).add(this.arrow.getPosition()),
    this.app.renderLine(this.lineStart, this.lineEnd, this.lineColor)))
}
;
var Input = pc.createScript("input");
Input.prototype.initialize = function() {
    this.app.touch && (this.app.touch.on("touchstart", this.touchStart, this),
    this.app.touch.on("touchend", this.touchEnd, this)),
    this.app.on("game-state", this.onGameState, this),
    this.app.on("game-input-toggle", this.onToggleInput, this),
    this.app.on("fb:instant:reset", function() {
        this.app.game.setState(STATE_MENU)
    }, this),
    this.app.on("tutorial-show", function() {
        this.tutorial = !0
    }, this),
    this.app.on("tutorial-dismiss", function() {
        this.tutorial = !1
    }, this),
    this.timerCharge = new Timer({
        scope: this,
        callback: function() {
            this.startCharge()
        },
        time: .025
    }),
    this.tutorial = !1,
    this.reset()
}
,
window.oncontextmenu = function(t) {
    return t.preventDefault(),
    t.stopPropagation(),
    !1
}
,
Input.prototype.reset = function() {
    this.initialTouch = new pc.Vec2,
    this.currentTouch = new pc.Vec2,
    this.inputEnabled = !0,
    this.softReset()
}
,
Input.prototype.softReset = function() {
    this.charging = !1,
    this.released = !1,
    this.chargeTime = 0,
    this.chargeDelay = .1,
    this.initialTouch.set(0, 0, 0),
    this.currentTouch.set(0, 0, 0)
}
,
Input.prototype.onGameState = function(t) {
    this.state = t,
    t === STATE_MENU ? this.reset() : t === STATE_PLAYING ? this.softReset() : t === STATE_GAMEOVER
}
,
Input.prototype.update = function(t) {
    this.debugInput(t),
    this.inputEnabled && (this.state === STATE_MENU ? this.menuInput(t) : this.state === STATE_PLAYING ? this.gameInput(t) : this.state === STATE_GAMEOVER && this.gameOverInput(t))
}
,
Input.prototype.debugInput = function(t) {
    this.app.keyboard.wasPressed(pc.KEY_R) && this.app.game.setState(STATE_MENU),
    this.app.keyboard.wasPressed(pc.KEY_S) && (this.app.game.streak = !0,
    this.app.fire("game-streak")),
    this.app.keyboard.wasPressed(pc.KEY_T) && this.app.game.setState(STATE_SWITCH_LEVEL_START),
    this.app.keyboard.wasPressed(pc.KEY_D) && (this.app.game.level++,
    this.app.game.entity.script.level.difficulty++)
}
,
Input.prototype.menuInput = function(t) {
    this.app.mouse.wasReleased(pc.MOUSEBUTTON_LEFT) && this.app.game.setState(STATE_SWITCH_LEVEL)
}
,
Input.prototype.gameInput = function(t) {
    return this.tutorial ? void (this.app.mouse.wasReleased(pc.MOUSEBUTTON_LEFT) && this.app.fire("tutorial-dismiss")) : void (this.released || (this.charging ? this.charging && (this.timerCharge.paused = !0,
    this.chargeTime += t,
    this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT) || this.touching || this.stopCharge()) : this.touching || this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT) ? this.timerCharge.paused && this.timerCharge.start() : this.timerCharge.paused = !0))
}
,
Input.prototype.gameOverInput = function(t) {
    this.app.mouse.wasReleased(pc.MOUSEBUTTON_LEFT) && this.app.game.setState(STATE_MENU)
}
,
Input.prototype.touchStart = function(t) {
    t.event.preventDefault(),
    this.touching = !0
}
,
Input.prototype.touchEnd = function(t) {
    return t.event.preventDefault(),
    this.touching = !1,
    this.inputEnabled ? this.tutorial ? void this.app.fire("tutorial-dismiss") : void (this.state === STATE_MENU ? this.app.game.setState(STATE_SWITCH_LEVEL) : this.state === STATE_GAMEOVER && this.app.game.setState(STATE_MENU)) : void 0
}
,
Input.prototype.startCharge = function() {
    this.charging || (this.charging = !0,
    this.chargeTime = 0,
    this.app.fire("player-charge"))
}
,
Input.prototype.stopCharge = function() {
    this.charging && (this.charging = !1,
    this.chargeTime >= this.app.game.minChargeTime ? (this.released = !0,
    this.app.fire("player-release")) : (this.released = !1,
    this.app.fire("player-charge-cancel")))
}
,
Input.prototype.onToggleInput = function(t) {
    this.inputEnabled = t,
    t || (this.timerCharge.paused = !0)
}
;
var Arrow = pc.createScript("arrow")
  , ArrowState = function() {
    this.velocity = new pc.Vec3,
    this.position = new pc.Vec3,
    this.rotation = new pc.Quat
};
ArrowState.prototype.copy = function(t) {
    this.velocity.copy(t.velocity),
    this.position.copy(t.position),
    this.rotation.copy(t.rotation)
}
,
ArrowState.prototype.blend = function(t, i, e) {
    this.velocity.lerp(t.velocity, i.velocity, e),
    this.position.lerp(t.position, i.position, e),
    this.rotation.slerp(t.rotation, i.rotation, e)
}
,
Arrow.physicsItems = [],
Arrow.curvePoint1 = new pc.Vec3,
Arrow.curvePoint2 = new pc.Vec3,
Arrow.curveVelocity = new pc.Vec3,
Arrow.curveColor = new pc.Color(1,1,1,1),
Arrow.curveAlpha = 1,
pc.Application.getApplication().on("physics-add", function(t) {
    t.thing instanceof Fruit ? Arrow.physicsItems.splice(0, 0, t) : Arrow.physicsItems.push(t)
}),
pc.Application.getApplication().on("physics-remove", function(t) {
    var i = Arrow.physicsItems.indexOf(t);
    i >= 0 && Arrow.physicsItems.splice(i, 1)
}),
Arrow.prototype.initialize = function() {
    this.on("enable", this.onEnable, this),
    this.on("disable", this.onDisable, this),
    this.app.on("game-state", this.onGameState, this),
    this.arrowImpactEvt = {
        thing: null,
        arrow: this,
        velocity: null,
        perfect: !1,
        far: !1,
        volume: null
    },
    this.timer = new Timer({
        callback: this.fireCollisionEvents,
        scope: this,
        time: .025
    }),
    this.prevState = new ArrowState,
    this.currState = new ArrowState,
    this.model = this.entity.findByName("model"),
    this.tip = this.entity.findByTag("arrow-tip")[0],
    this.particles = this.entity.findByName("particles").particlesystem,
    this.fireEffect = this.entity.findByName("fire"),
    this.fireModel = this.fireEffect.findByName("plane"),
    this.fireFade = new Timer({
        scope: this,
        data: {
            fadeIn: !0
        },
        onTick: function(t, i, e, s) {
            var o = i / e;
            s.fadeIn || (o = 1 - o),
            this.fireModel.model.meshInstances[0].setParameter("material_opacity", pc.QuadraticIn(o)),
            this.fireEffect.setLocalScale(1, Math.max(1e-5, pc.QuadraticIn(o)), 1)
        },
        callback: function(t) {
            this.fireModel.model.meshInstances[0].setParameter("material_opacity", t.fadeIn ? 1 : 0),
            t.fadeIn || (this.fireModel.enabled = !1)
        },
        time: .5
    }),
    this.fireWind = new Timer({
        scope: this,
        data: {
            fromAngle: 0
        },
        onTick: function(t, i, e, s) {
            this.fireEffect.setLocalEulerAngles(0, 0, pc.math.lerp(s.fromAngle, 45, i / e))
        },
        time: .1
    }),
    this.reset(),
    this.onEnable()
}
,
Arrow.prototype.postInitialize = function() {}
,
Arrow.prototype.onEnable = function() {
    this.app.on("player-charge", this.startCharge, this),
    this.app.on("player-charge-cancel", this.cancelCharge, this),
    this.app.on("player-release", this.release, this),
    this.model.enabled = !0
}
,
Arrow.prototype.onDisable = function() {
    this.app.off("player-charge", this.startCharge, this),
    this.app.off("player-charge-cancel", this.cancelCharge, this),
    this.app.off("player-release", this.release, this),
    this.timer.paused = !0,
    this.released && (this.collided && !(this.collided instanceof Letter) || this.missed) || (this.model.enabled = !1,
    this.enabled = !1),
    this.softReset()
}
,
Arrow.prototype.reset = function() {
    this.temp = new pc.Vec3,
    this.mat1 = new pc.Mat4,
    this.mat2 = new pc.Mat4,
    this.softReset()
}
,
Arrow.prototype.onGameState = function(t) {
    t === STATE_MENU ? (this.reset(),
    this.model.enabled = !1,
    this.enabled = !1) : t === STATE_SWITCH_LEVEL && (this.enabled || (this.model.enabled = !1))
}
,
Arrow.prototype.softReset = function() {
    this.released = !1,
    this.collided = null,
    this.missed = !1,
    this.charging = !1,
    this.timeAccumulator = 0,
    this.power = 0,
    this.fireFade.paused = !0,
    this.fireWind.paused = !0,
    this.currState.position.copy(this.entity.getLocalPosition()),
    this.currState.velocity.set(0, 0, 0),
    this.currState.rotation.copy(this.entity.getLocalRotation())
}
,
Arrow.prototype.toggleEffects = function(t, i) {
    t ? (this.particles.reset(),
    this.particles.play(),
    this.particles.emitter.meshInstance.layer = 10,
    this.fireModel.enabled = !0,
    this.fireModel.model.meshInstances[0].layer = 10,
    this.fireFade.data.fadeIn = !0,
    this.fireFade.start()) : (this.particles.isPlaying() && (i && this.particles.reset(),
    this.particles.stop()),
    this.fireFade.data.fadeIn = !1,
    this.fireFade.start())
}
,
Arrow.prototype.startCharge = function() {
    this.charging = !0
}
,
Arrow.prototype.cancelCharge = function() {
    this.charging = !1,
    this.power = 0
}
,
Arrow.prototype.release = function() {
    this.released || (this.currState.position.copy(this.entity.getLocalPosition()),
    this.currState.velocity.copy(this.entity.right).scale(this.power),
    this.currState.rotation.copy(this.entity.getLocalRotation()),
    this.prevState.copy(this.currState),
    this.timeAccumulator = 0,
    this.charging = !1,
    this.released = !0,
    this.fireWind.data.fromAngle = this.fireEffect.getLocalEulerAngles().z,
    this.fireWind.start())
}
,
Arrow.prototype.integrate = function(t, i) {
    this.temp.copy(t.velocity).scale(i),
    this.temp.add(t.position),
    this.mat1.setLookAt(t.position, this.temp, pc.Vec3.UP),
    this.mat2.setFromEulerAngles(0, 90, 0),
    this.mat1.mul(this.mat2),
    t.rotation.setFromMat4(this.mat1),
    t.position.copy(this.temp),
    t.velocity.y += this.app.game.gravity * i
}
,
Arrow.prototype.fixedStep = function(t) {
    var i = 1 / 60;
    for (this.timeAccumulator += t; this.timeAccumulator >= i && (this.prevState.copy(this.currState),
    this.integrate(this.currState, i),
    this.timeAccumulator -= i,
    this.entity.setLocalPosition(this.prevState.position),
    this.entity.setLocalRotation(this.prevState.rotation),
    this.checkCollisions(),
    this.shouldCheckCollisions()); )
        ;
    this.prevState.blend(this.prevState, this.currState, this.timeAccumulator / i),
    this.entity.setLocalPosition(this.prevState.position),
    this.entity.setLocalRotation(this.prevState.rotation),
    this.shouldCheckCollisions() && this.checkCollisions()
}
,
Arrow.prototype.shouldCheckCollisions = function() {
    if (!this.released || this.missed)
        return !1;
    if (this.collided) {
        if (!this.app.game.streak)
            return !1;
        if (!(this.collided instanceof Letter || this.collided instanceof Fruit))
            return !1
    }
    return !0
}
,
Arrow.prototype.update = function(t) {
    this.released || this.fireModel.enabled && this.fireEffect.setEulerAngles(0, 0, 0),
    this.charging && (this.power = this.app.game.maxPower,
    this.drawAimCurve()),
    this.shouldCheckCollisions() && this.fixedStep(t)
}
,
Arrow.prototype.drawAimCurve = function() {
    var t = Arrow.curveAlpha;
    if (!(0 >= t)) {
        var i = 1 / 60
          , e = 10
          , s = Arrow.curvePoint1
          , o = Arrow.curvePoint2
          , r = Arrow.curveVelocity
          , a = Arrow.curveColor;
        s.copy(this.tip.getPosition()),
        o.copy(s),
        r.copy(this.entity.right).scale(this.power);
        for (var h = 0; 10 >= h; h++)
            o.x += r.x * i,
            o.y += r.y * i,
            r.y += this.app.game.gravity * i,
            a.a = t * pc.math.clamp(pc.math.lerp(1, 0, h / e), 0, 1),
            this.app.renderLine(s, o, a, pc.LINEBATCH_OVERLAY),
            s.copy(o)
    }
}
,
Arrow.prototype.onCollision = function(t, i) {
    var e = t.entity.getPosition()
      , s = i.bv;
    this.collided = t.thing,
    this.arrowImpactEvt.thing = t.thing,
    this.arrowImpactEvt.volume = s,
    this.arrowImpactEvt.velocity = this.prevState.velocity,
    this.arrowImpactEvt.perfect = !1,
    this.arrowImpactEvt.far = e.x > this.app.game.maxX - this.app.game.toughShotLimitX || e.y > this.app.game.maxY - this.app.game.toughShotLimitY;
    var o = this.tip.getPosition();
    this.arrowImpactEvt.perfect = o.y > i.center - i.height / 6 && o.y < i.center + i.height / 6,
    this.timer.time = this.app.game.streak ? 0 : .0025,
    this.timer.start()
}
,
Arrow.prototype.fireCollisionEvents = function() {
    if (this.missed) {
        var t = this.entity.getPosition()
          , i = t.y < .5;
        this.app.fire("arrow-miss", this, i),
        t.x > this.app.game.maxX + 4 && (this.model.enabled = !1,
        this.enabled = !1)
    } else
        this.collided && (Arrow.curveAlpha -= 1 / 7,
        this.app.fire("arrow-impact", this.arrowImpactEvt));
    !this.missed && this.collided instanceof Fruit || this.particles.isPlaying() && this.toggleEffects(!1)
}
,
Arrow.prototype.checkCollisions = function() {
    var t = this.entity.getPosition();
    if (t.y < .5 || t.x > this.app.game.maxX + 4)
        return this.missed = !0,
        void this.timer.start();
    for (var i = Arrow.physicsItems.length, e = this.tip.getPosition(); i--; ) {
        var s = Arrow.physicsItems[i]
          , o = s.checkCollision(e);
        if (o) {
            s.entity.fire("collision"),
            this.onCollision(s, o);
            break
        }
    }
}
;
var Boy = pc.createScript("boy");
Boy.prototype.initialize = function() {
    this.app.on("game-state", this.onGameState, this),
    this.app.on("arrow-impact", this.onArrowImpact, this),
    this.entity.script.collision.thing = this,
    this.fruitSlot = new pc.GraphNode,
    this.entity.addChild(this.fruitSlot),
    this.headNode = new pc.GraphNode,
    this.entity.addChild(this.headNode),
    this.torsoNode = new pc.GraphNode,
    this.entity.addChild(this.torsoNode),
    this.onAnimationEndHandler = function() {
        this.state === STATE_GAMEOVER && (this.spine.state.timeScale = 0)
    }
    .bind(this)
}
,
Boy.prototype.postInitialize = function() {
    this.spine = this.entity.findByName("spine").spine,
    this.appleAttachment = this.spine.skeleton.findBone("apple_attachment"),
    this.headBone = this.spine.skeleton.findBone("Bob_Head"),
    this.torsoBone = this.spine.skeleton.findBone("Bob_torso");
    for (var t = this.spine.skeleton.drawOrder, e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        if (o.attachment) {
            var n = o.attachment.name
              , s = o.meshInstances[n];
            s && (s.layer = pc.LAYER_WORLD - 1)
        }
    }
}
,
Boy.prototype.syncBoneToNode = function(t, e, i) {
    var o = e.getLocalPosition();
    if (o.x = t.worldX,
    o.y = t.worldY,
    e.setLocalPosition(o),
    i) {
        var n = e.getLocalEulerAngles();
        n.z = t.getWorldRotationX(),
        e.setLocalEulerAngles(n)
    }
}
,
Boy.prototype.postUpdate = function(t) {
    this.syncBoneToNode(this.appleAttachment, this.fruitSlot),
    this.syncBoneToNode(this.headBone, this.headNode, !0),
    this.syncBoneToNode(this.torsoBone, this.torsoNode, !0)
}
,
Boy.prototype.onGameState = function(t) {
    this.state = t,
    t === STATE_PLAYING ? this.onRetry() : t === STATE_GAMEOVER && "idle" === this.spine.state.tracks[0].animation.name && (this.spine.state.timeScale = 0)
}
,
Boy.prototype.onRetry = function() {
    if (!this.spine.state.tracks[0]) {
        var t = this.spine.state.setAnimationByName(0, "idle", !0);
        t.timeScale = .5
    }
    this.spine.state.timeScale = 1
}
,
Boy.prototype.onArrowImpact = function(t) {
    var e;
    if (t.thing instanceof Fruit && !t.thing.isBonus)
        e = this.spine.state.setAnimationByName(0, "apple_hit", !1),
        e.onEnd = this.onAnimationEndHandler,
        e.timeScale = 2;
    else {
        if (t.thing !== this)
            return;
        e = this.spine.state.setAnimationByName(0, "hit", !1),
        e.onEnd = this.onAnimationEndHandler,
        e.timeScale = 3
    }
    e = this.spine.state.addAnimationByName(0, "idle", !0, 0),
    e.timeScale = .5
}
,
Boy.prototype.getAttachmentNode = function(t) {
    return "torso" === t.name ? this.torsoNode : "head" === t.name ? this.headNode : this.entity
}
;
var Fruit = pc.createScript("fruit");
Fruit.attributes.add("points", {
    type: "number"
}),
Fruit.attributes.add("isBonus", {
    type: "boolean",
    "default": !1
}),
Fruit.prototype.initialize = function() {
    this.entity.script.collision.thing = this,
    this.entity.findByName("model").model.meshInstances[0].layer = 9
}
;
var Utils = pc.createScript("utils");
Utils.prototype.initialize = function() {
    this.app.utils = this
}
,
Utils.prototype.swapEvent = function(t, i, s, e) {
    this.app.off(t, i[s], i),
    this.app.on(t, e[s], e)
}
,
Utils.prototype.randElement = function(t) {
    return t[Math.floor(pc.math.random(0, t.length))]
}
,
Utils.prototype.update = function(t) {
    for (var i = 0, s = _timers.length; s > i; i++)
        _timers[i].paused || _timers[i].async || _timers[i].tick(t)
}
;
var _timers = []
  , Timer = function(t) {
    this.callback = t.callback,
    this.time = t.time,
    this.elapsed = 0,
    this.scope = t.scope,
    this.paused = !0,
    t.loop && (this.loop = t.loop),
    t.async && (this.async = t.async,
    this.timeout = null,
    this.asyncCallback = function() {
        this.timeout = null,
        this.callback.call(this.scope, this.data)
    }
    .bind(this)),
    t.data && (this.data = t.data),
    t.onTick && (this.onTick = t.onTick),
    _timers.push(this)
};
Timer.prototype.tick = function(t) {
    this.elapsed += t,
    this.onTick && this.onTick.call(this.scope, t, this.elapsed, this.time, this.data),
    this.elapsed >= this.time && (this.elapsed = 0,
    this.loop || (this.paused = !0),
    this.callback && this.callback.call(this.scope, this.data))
}
,
Timer.prototype.reset = function() {
    this.timeout && (this.clearTimeout(this.timeout),
    this.timeout = null),
    this.elapsed = 0
}
,
Timer.prototype.start = function() {
    this.async ? this.timeout = setTimeout(this.asyncCallback, 1e3 * this.time) : (this.elapsed = 0,
    this.paused = !1)
}
,
Timer.prototype.destroy = function() {
    this.timeout && (this.clearTimeout(this.timeout),
    this.timeout = null);
    var t = _timers.indexOf(this);
    -1 !== t && _timers.splice(t, 1)
}
;
var Ui = pc.createScript("ui");
Ui.attributes.add("globalSpeed", {
    type: "number",
    "default": 1
}),
Ui.attributes.add("menuEffectDuration", {
    type: "number",
    "default": .5
}),
Ui.attributes.add("playEffectBoardDuration", {
    type: "number",
    "default": .7
}),
Ui.attributes.add("playEffectShieldDelay", {
    type: "number",
    "default": .3
}),
Ui.attributes.add("playEffectShieldDuration", {
    type: "number",
    "default": .2
}),
Ui.attributes.add("playEffectQuiverDelay", {
    type: "number",
    "default": .6
}),
Ui.attributes.add("playEffectQuiverDuration", {
    type: "number",
    "default": .2
}),
Ui.attributes.add("playEffectArrowDelay", {
    type: "number",
    "default": .8
}),
Ui.attributes.add("playEffectArrowBetweenDelay", {
    type: "number",
    "default": .1
}),
Ui.attributes.add("playEffectArrowDuration", {
    type: "number",
    "default": .2
}),
Ui.attributes.add("playEffectLeavesDelay", {
    type: "number",
    "default": .8
}),
Ui.attributes.add("playEffectLeavesBetweenDelay", {
    type: "number",
    "default": .1
}),
Ui.attributes.add("playEffectLeavesDuration", {
    type: "number",
    "default": .2
}),
Ui.prototype.initialize = function() {
    for (var t = 0, e = this.entity.children.length; e > t; t++) {
        var a = this.entity.children[t];
        this[a.name] = a
    }
    this.score = this.entity.findByName("score"),
    this.shield = this.entity.findByName("shield"),
    this.quiver = this.entity.findByName("quiver_group"),
    this.app.on("game-state", this.onGameState, this),
    this.app.on("game-score", this.onScoreChange, this),
    this.app.on("game-attempts", this.onAttemptsChange, this),
    this.app.on("player-release", this.onRelease, this),
    this.app.on("game-perfect-bonus", this.onPerfectShot, this),
    this.app.on("game-amazing-bonus", this.onAmazingShot, this),
    this.app.on("ui:button:press:sound_on", this.onSoundOff, this),
    this.app.on("ui:button:press:sound_off", this.onSoundOn, this);
    var o = this;
    this.soundEnabled = !0,
    this.enablePlayEffect = !0;
    var n = function(t) {
        return t / (o.globalSpeed || 1e-5)
    }
      , i = Math.abs(o.board.getLocalPosition().y + 270);
    this.stateEffects = {},
    this.stateEffects[STATE_MENU] = {
        logo: function() {
            var t = o.logo.getLocalPosition().clone();
            o.logo.setLocalPosition(t.x - 1e3, t.y, t.z);
            var e = o.logo.tween(o.logo.getLocalPosition()).to(t, n(o.menuEffectDuration), pc.QuadraticOut);
            return e.on("complete", function() {
                o.app.game.sound.play("whoosh")
            }),
            {
                start: function() {
                    e.duration = n(o.menuEffectDuration),
                    e.start()
                },
                stop: function() {
                    e.stop()
                }
            }
        }(),
        board: function() {
            var t = o.board.getLocalPosition().clone()
              , e = o.board.tween(o.board.getLocalPosition()).to(t, n(o.menuEffectDuration), pc.QuadraticOut);
            return e.on("complete", function() {
                o.app.game.sound.play("whoosh")
            }),
            {
                start: function() {
                    o.board.enabled = !0,
                    e.start()
                },
                stop: function() {
                    e.stop()
                }
            }
        }(),
        start: function() {
            var t = o.start.getLocalPosition().clone()
              , e = o.start.tween(o.start.getLocalPosition()).to(t, n(o.menuEffectDuration), pc.QuadraticOut).delay(n(.2));
            return e.on("complete", function() {
                o.app.game.sound.play("whoosh")
            }),
            {
                start: function() {
                    o.start.setLocalPosition(t.x + 1e3, t.y, t.z),
                    e.duration = n(o.menuEffectDuration),
                    e.start()
                },
                stop: function() {
                    e.stop()
                }
            }
        }(),
        playcanvas: function() {
            var t = o.playcanvas.getLocalPosition().clone();
            o.playcanvas.setLocalPosition(t.x - 500, t.y, t.z);
            var e = o.playcanvas.tween(o.playcanvas.getLocalPosition()).to(t, n(o.menuEffectDuration), pc.QuadraticOut).delay(n(.4));
            return e.on("complete", function() {
                o.app.game.sound.play("whoosh")
            }),
            {
                start: function() {
                    e.duration = n(o.menuEffectDuration),
                    e.start()
                },
                stop: function() {
                    e.stop()
                }
            }
        }(),
        others: function() {
            o.leaves1.enabled = !1,
            o.leaves2.enabled = !1,
            o.leaves3.enabled = !1,
            o.shield.enabled = !1,
            o.quiver.enabled = !1,
            o.attempt1.enabled = !1,
            o.attempt2.enabled = !1,
            o.attempt3.enabled = !1,
            o.sound_off.enabled = !o.soundEnabled,
            o.sound_on.enabled = o.soundEnabled,
            o.score.element.text = o.app.game.score.toString(),
            o.score.enabled = !1
        }
    },
    this.stateEffects[STATE_SWITCH_LEVEL] = {
        board: function() {
            var t = o.board.getLocalPosition().clone();
            t.y += i;
            var e = o.board.tween(o.board.getLocalPosition()).to(t, n(o.playEffectBoardDuration), pc.BackOut);
            return function() {
                e.duration = n(o.playEffectBoardDuration),
                e.start()
            }
        }(),
        logo: function() {
            var t = o.logo.getLocalPosition().clone();
            t.x -= 1e3;
            var e = o.logo.tween(o.logo.getLocalPosition()).to(t, n(o.playEffectBoardDuration / 2), pc.SineOut);
            return function() {
                e.duration = n(o.playEffectBoardDuration / 2),
                e.start()
            }
        }(),
        start: function() {
            var t = o.start.getLocalPosition().clone();
            t.x += 1e3;
            var e = o.start.tween(o.start.getLocalPosition()).to(t, n(o.playEffectBoardDuration / 2), pc.SineOut);
            return function() {
                e.duration = n(o.playEffectBoardDuration / 2),
                e.start()
            }
        }(),
        playcanvas: function() {
            var t = o.playcanvas.getLocalPosition().clone();
            t.x -= 500;
            var e = o.playcanvas.tween(o.playcanvas.getLocalPosition()).to(t, n(o.playEffectBoardDuration / 2), pc.SineOut);
            return function() {
                e.duration = n(o.playEffectBoardDuration / 2),
                e.start()
            }
        }(),
        shield: function() {
            var t = o.shield.getLocalPosition().clone()
              , e = new pc.Vec3(0,300,0)
              , a = t.clone().add(e)
              , i = o.shield.tween(o.shield.getLocalPosition()).to(t, n(o.playEffectShieldDuration), pc.QuadraticOut).delay(n(o.playEffectShieldDelay))
              , s = o.shield.getLocalScale().clone();
            return i.on("complete", function() {
                o.app.game.sound.play("shield_appear")
            }),
            function() {
                o.shield.enabled = !0,
                o.score.enabled = !0,
                o.shield.setLocalScale(s),
                o.shield.setLocalPosition(a),
                i.delay(n(o.playEffectShieldDelay)),
                i.duration = n(o.playEffectShieldDuration),
                i.start()
            }
        }(),
        quiver: function() {
            var t = o.quiver.getLocalPosition().clone()
              , e = t.clone();
            e.y += 400;
            var a = o.quiver.tween(o.quiver.getLocalPosition()).to(t, n(o.playEffectQuiverDuration), pc.QuadraticOut).delay(n(o.playEffectQuiverDelay));
            return a.on("complete", function() {
                o.app.game.sound.play("quiver_appear")
            }),
            function() {
                o.quiver.enabled = !0,
                o.quiver.setLocalPosition(e),
                a.delay(n(o.playEffectQuiverDelay)),
                a.duration = n(o.playEffectQuiverDuration),
                a.start()
            }
        }(),
        arrows: function() {
            var t = new pc.Vec3(0,400,0)
              , e = o.attempt1.getLocalPosition().clone().add(t)
              , a = o.attempt2.getLocalPosition().clone().add(t)
              , i = o.attempt3.getLocalPosition().clone().add(t)
              , s = o.attempt1.tween(o.attempt1.getLocalPosition()).to(o.attempt1.getLocalPosition(), n(o.playEffectArrowDuration), pc.QuadraticOut).delay(n(o.playEffectArrowDelay))
              , l = o.attempt2.tween(o.attempt2.getLocalPosition()).to(o.attempt2.getLocalPosition(), n(o.playEffectArrowDuration), pc.QuadraticOut).delay(n(o.playEffectArrowDelay + o.playEffectArrowBetweenDelay))
              , r = o.attempt3.tween(o.attempt3.getLocalPosition()).to(o.attempt3.getLocalPosition(), n(o.playEffectArrowDuration), pc.QuadraticOut).delay(n(o.playEffectArrowDelay + 2 * o.playEffectArrowBetweenDelay))
              , c = function() {
                o.app.game.sound.play("arrows_appear")
            };
            return s.on("complete", c),
            l.on("complete", c),
            r.on("complete", c),
            function() {
                o.attempt1.enabled = !0,
                o.attempt2.enabled = !0,
                o.attempt3.enabled = !0,
                o.attempt1.setLocalPosition(e),
                o.attempt2.setLocalPosition(a),
                o.attempt3.setLocalPosition(i),
                s.delay(n(o.playEffectArrowDelay)),
                s.duration = n(o.playEffectArrowDuration),
                s.start(),
                l.delay(n(o.playEffectArrowDelay + o.playEffectArrowBetweenDelay)),
                l.duration = n(o.playEffectArrowDuration),
                l.start(),
                r.delay(n(o.playEffectArrowDelay + 2 * o.playEffectArrowBetweenDelay)),
                r.duration = n(o.playEffectArrowDuration),
                r.start();
                var t = function(e) {
                    3 > e && r.stop(),
                    2 > e && l.stop(),
                    1 > e && s.stop(),
                    o.app.off("game-attempts", t)
                };
                o.app.on("game-attempts", t),
                r.on("complete", function() {
                    o.app.off("game-attempts", t)
                })
            }
        }(),
        leaves: function() {
            var t = o.leaves1.tween(o.leaves1.getLocalScale()).to(o.leaves1.getLocalScale(), n(o.playEffectLeavesDuration), pc.QuadraticOut).delay(n(o.playEffectLeavesDelay))
              , e = o.leaves2.tween(o.leaves2.getLocalScale()).to(o.leaves2.getLocalScale(), n(o.playEffectLeavesDuration), pc.QuadraticOut).delay(n(o.playEffectLeavesDelay + o.playEffectLeavesBetweenDelay))
              , a = o.leaves3.tween(o.leaves3.getLocalScale()).to(o.leaves3.getLocalScale(), n(o.playEffectLeavesDuration), pc.QuadraticOut).delay(n(o.playEffectLeavesDelay + 2 * o.playEffectLeavesBetweenDelay));
            return function() {
                o.leaves1.enabled = !0,
                o.leaves2.enabled = !0,
                o.leaves3.enabled = !0;
                var i = new pc.Vec3(1e-4,1e-4,1e-4);
                o.leaves1.setLocalScale(i),
                t.delay(n(o.playEffectLeavesDelay)),
                t.duration = n(o.playEffectLeavesDuration),
                t.start(),
                o.leaves2.setLocalScale(i),
                e.delay(n(o.playEffectLeavesDelay + o.playEffectLeavesBetweenDelay)),
                e.duration = n(o.playEffectLeavesDuration),
                e.start(),
                o.leaves3.setLocalScale(i),
                a.delay(n(o.playEffectLeavesDelay + 2 * o.playEffectLeavesBetweenDelay)),
                a.duration = n(o.playEffectLeavesDuration),
                a.start()
            }
        }()
    },
    this.stateEffects[STATE_GAMEOVER] = {
        board: function() {
            var t = o.board.tween(o.board.getLocalPosition()).to(new pc.Vec3(0,-400,0), n(.7), pc.QuadraticOut).delay(n(.3));
            return function() {
                o.app.fire("game-input-toggle", !1),
                t.start()
            }
        }(),
        shield: function() {
            var t = o.shield.getLocalPosition().clone()
              , e = o.shield.getLocalScale().clone()
              , a = o.shield.tween(o.shield.getLocalPosition()).to(new pc.Vec3(t.x,-440,t.z), n(.6), pc.BounceOut)
              , i = o.shield.tween(o.shield.getLocalScale()).to(e.clone().scale(1.3), n(.6), pc.BounceOut);
            return function() {
                o.app.game.sound.play("shield_drop", .2),
                a.start(),
                i.start()
            }
        }(),
        quiver: function() {
            var t = o.quiver.getLocalPosition().clone();
            t.y += 440;
            var e = o.quiver.tween(o.quiver.getLocalPosition()).to(t, n(.3), pc.SineIn);
            return e.on("complete", function() {
                o.quiver.enabled = !1
            }, o),
            function() {
                e.start()
            }
        }(),
        logo: function() {
            var t = new pc.Vec3(0,0,0)
              , e = new pc.Vec3(0,-315,0)
              , a = o.logo.tween(o.logo.getLocalPosition()).to(e, n(.7), pc.QuadraticOut).delay(n(.3));
            return a.on("complete", function() {
                o.app.fire("fb:instant:score", o.app.game.score),
                o.app.fire("game-input-toggle", !0)
            }),
            {
                start: function() {
                    o.logo.enabled = !0,
                    o.logo.setLocalPosition(t),
                    a.start()
                },
                stop: function() {
                    a.stop()
                }
            }
        }(),
        playcanvas: function() {
            var t = o.playcanvas.getLocalPosition().clone();
            t.x = 15;
            var e = o.playcanvas.tween(o.playcanvas.getLocalPosition()).to(t, n(o.menuEffectDuration), pc.QuadraticOut).delay(n(.4));
            return {
                start: function() {
                    o.playcanvas.setLocalPosition(t.x - 500, t.y, t.z),
                    e.duration = n(o.menuEffectDuration),
                    e.start()
                },
                stop: function() {
                    e.stop()
                }
            }
        }(),
        others: function() {
            o.leaves1.enabled = !1,
            o.leaves2.enabled = !1,
            o.leaves3.enabled = !1,
            o.attempt1.enabled = !1,
            o.attempt2.enabled = !1,
            o.attempt3.enabled = !1,
            o.sound_on.enabled = !1,
            o.sound_off.enabled = !1
        }
    },
    this.arrowPositions = [],
    this.arrowTweens = [];
    for (var s = (new pc.Quat).setFromEulerAngles(0, 0, -8), t = 1; 3 >= t; t++) {
        var l = this["attempt" + t];
        this.arrowPositions.push(l.getLocalPosition().clone());
        var r = l.up.clone();
        s.transformVector(r, r);
        var c = r.scale(400).add(l.getLocalPosition());
        this.arrowTweens.push(l.tween(l.getLocalPosition()).to(c, n(this.playEffectArrowDuration), pc.QuadraticIn))
    }
    var p = this.score.getLocalScale().clone().scale(1.1);
    this.scoreTween = this.score.tween(this.score.getLocalScale()).to(p, n(.1), pc.SineOut).yoyo(!0).repeat(2)
}
,
Ui.prototype.onGameState = function(t) {
    this.state && this.state !== t && this.stopStateEffects(this.state),
    this.state = t,
    (t !== STATE_SWITCH_LEVEL || this.enablePlayEffect) && (this.playStateEffects(t),
    t === STATE_MENU ? this.enablePlayEffect = !0 : t === STATE_SWITCH_LEVEL ? this.enablePlayEffect = !1 : t === STATE_PLAYING && (this.last_shot.enabled = this.app.game.hasLetterBonus ? 0 === this.app.game.attempts : 1 === this.app.game.attempts))
}
,
Ui.prototype.playStateEffects = function(t) {
    var e = this.stateEffects[t];
    if (e)
        for (var a in e) {
            var o = e[a];
            o.start ? o.start() : o()
        }
}
,
Ui.prototype.stopStateEffects = function(t) {
    var e = this.stateEffects[t];
    if (e)
        for (var a in e) {
            var o = e[a];
            o.stop && o.stop()
        }
}
,
Ui.prototype.onScoreChange = function(t) {
    var e = this.score.element.text.length;
    this.score.element.text = t.toString();
    var a = this.score.element.text.length;
    if (a !== e) {
        var o = 110;
        a > 3 && (o -= 25 * Math.sqrt(a - 3)),
        this.score.element.fontSize !== o && (this.score.element.fontSize = o)
    }
    this.scoreTween.playing || this.scoreTween.start()
}
,
Ui.prototype.onAttemptsChange = function(t) {
    for (var e = 0; t > e; e++)
        this["attempt" + (e + 1)].setLocalPosition(this.arrowPositions[e])
}
,
Ui.prototype.onPerfectShot = function() {
    this.perfect_shot.enabled = !0
}
,
Ui.prototype.onAmazingShot = function() {
    this.amazing_shot.enabled = !0
}
,
Ui.prototype.onRelease = function() {
    var t = this.app.game.attempts;
    2 === t ? this.arrowTweens[2].start() : 1 === t ? this.arrowTweens[1].start() : 0 === t && this.arrowTweens[0].start()
}
,
Ui.prototype.onSoundOn = function() {
    this.sound_on.enabled = !0,
    this.sound_off.enabled = !1,
    this.app.fire("audio-on"),
    this.soundEnabled = !0
}
,
Ui.prototype.onSoundOff = function() {
    this.sound_on.enabled = !1,
    this.sound_off.enabled = !0,
    this.app.fire("audio-off"),
    this.soundEnabled = !1
}
;
var Element = pc.createScript("element");
Element.attributes.add("type", {
    type: "string",
    "enum": [{
        group: "group"
    }, {
        text: "text"
    }, {
        image: "image"
    }],
    "default": "text"
}),
Element.attributes.add("anchor", {
    type: "vec4"
}),
Element.attributes.add("pivot", {
    type: "vec2"
}),
Element.attributes.add("width", {
    type: "number",
    "default": 32
}),
Element.attributes.add("height", {
    type: "number",
    "default": 32
}),
Element.attributes.add("text", {
    type: "string"
}),
Element.attributes.add("fontAsset", {
    type: "asset",
    assetType: "font"
}),
Element.attributes.add("color", {
    type: "rgba",
    "default": [1, 1, 1, 1]
}),
Element.attributes.add("fontSize", {
    type: "number",
    "default": 32
}),
Element.attributes.add("textureAsset", {
    type: "asset",
    assetType: "texture"
}),
Element.attributes.add("opacity", {
    type: "number",
    "default": 1
}),
Element.attributes.add("rect", {
    type: "vec4",
    "default": [0, 0, 1, 1]
}),
Element.prototype.initialize = function() {
    "text" === this.type ? this.entity.addComponent("element", {
        type: "text",
        width: this.width,
        height: this.height,
        anchor: this.anchor,
        pivot: this.pivot,
        text: this.text,
        fontAsset: this.fontAsset,
        fontSize: this.fontSize,
        color: this.color,
        opacity: this.opacity
    }) : "image" === this.type ? this.entity.addComponent("element", {
        type: "image",
        width: this.width,
        height: this.height,
        anchor: this.anchor,
        pivot: this.pivot,
        textureAsset: this.textureAsset,
        opacity: this.opacity,
        rect: this.rect,
        color: new pc.Color(1,1,1,1)
    }) : "group" === this.type && this.entity.addComponent("element", {
        type: "group",
        width: this.width,
        height: this.height,
        anchor: this.anchor,
        pivot: this.pivot
    }),
    this.on("attr", function(t, e, i) {
        this.entity.element[t] = e
    })
}
;
var Screen = pc.createScript("screen");
Screen.attributes.add("resolution", {
    type: "vec2",
    "default": [1024, 768]
}),
Screen.attributes.add("referenceResolution", {
    type: "vec2",
    "default": [1024, 768]
}),
Screen.attributes.add("screenSpace", {
    type: "boolean"
}),
Screen.attributes.add("scaleMode", {
    type: "string",
    "enum": [{
        none: "none"
    }, {
        blend: "blend"
    }],
    "default": "blend"
}),
Screen.attributes.add("scaleBlend", {
    type: "number",
    "default": .5
}),
Screen.prototype.initialize = function() {
    this.entity.addComponent("screen", {
        resolution: this.resolution,
        referenceResolution: this.referenceResolution,
        scaleMode: this.scaleMode,
        scaleBlend: this.scaleBlend,
        screenSpace: this.screenSpace
    }),
    this.on("attr", function(e, t, n) {
        this.entity.screen[e] = t
    })
}
;
var Level = pc.createScript("level");
Level.attributes.add("prefabs", {
    type: "entity"
}),
Level.attributes.add("boy", {
    type: "entity"
}),
Level.attributes.add("player", {
    type: "entity"
}),
Level.prototype.initialize = function() {
    this.fruit = [];
    for (var t = 0, e = this.prefabs.children.length; e > t; t++) {
        var i = this.prefabs.children[t];
        i.script && i.script.fruit && this.fruit.push(i)
    }
    this.fruitPools = this.fruit.map(function(t) {
        return t.enabled = !1,
        new EntityPool(t,2)
    }),
    this.fruitExplosions = {};
    for (var t = 0; t < this.fruit.length; t++) {
        var o = this.getPrefab(this.fruit[t].name + "_explosion");
        o.particlesystem.play(),
        o.particlesystem.reset(),
        this.fruitExplosions[o.name] = o
    }
    this.bonusLetters = this.getPrefab("bonusLetters"),
    this.stumpPool = new EntityPool(this.getPrefab("stump"),1),
    this.floatingScore = this.getPrefab("floating_score"),
    this.getPrefab("stump").enabled = !1;
    var a = new pc.Entity;
    a.enabled = !1,
    a.addComponent("script"),
    a.script.create("falling"),
    this.fallingPool = new EntityPool(a,4),
    this.levelParent = new pc.Entity,
    this.levelParent.name = "levelParent",
    this.app.root.addChild(this.levelParent),
    this.fallingParent = new pc.Entity,
    this.fallingParent.name = "fallingParent",
    this.app.root.addChild(this.fallingParent),
    this.app.on("game-state", this.onGameState, this),
    this.app.on("arrow-impact", this.onArrowImpact, this),
    this.initialPlayerPosition = this.player.getPosition().clone(),
    this.reset(),
    this.temp = new pc.Vec3
}
,
Level.prototype.reset = function() {
    this.difficulty = 0,
    this.previousFruitPoolIndex = 0
}
,
Level.prototype.getPrefab = function(t) {
    return this.prefabs.findByName(t)
}
,
Level.prototype.clear = function() {
    this.player.setPosition(1e3, 0, 0),
    this.boy.setPosition(1e3, 0, 0);
    var t, e = this.boy.script.boy.fruitSlot, i = e.children;
    for (t = 0; t < i.length; t++)
        i[t].enabled = !1,
        e.removeChild(i[t]);
    for (t = this.levelParent.children.length; t--; ) {
        var o = this.levelParent.children[t];
        o.enabled = !1,
        this.levelParent.removeChild(o)
    }
    for (t = this.fallingParent.children.length; t--; ) {
        var o = this.fallingParent.children[t];
        o.enabled = !1,
        this.fallingParent.removeChild(o)
    }
    for (t = 0; t < this.bonusLetters.children.length; t++)
        this.bonusLetters.children[t].enabled = !1,
        Letter.all && this.bonusLetters.children[t].script.letter.reset();
    Letter.all && (Letter.all = !1,
    this.app.fire("game-letter-bonus-reset"));
    for (var t = 0, a = this.fruitPools.length; a > t; t++)
        this.fruitPools[t].freeAll();
    this.fallingPool.freeAll(),
    this.stumpPool.freeAll(),
    this.floatingScore.enabled = !1
}
,
Level.prototype.placePlayer = function() {
    this.player.setPosition(this.initialPlayerPosition)
}
,
Level.prototype.placeBoy = function() {
    var t, e, i = this.app.game.minX, o = this.app.game.maxX, a = this.app.game.minY, r = this.app.game.maxY, n = 2;
    this.difficulty < 4 ? (r = 0,
    i = pc.math.lerp(i, o, .6),
    o = i) : (a = Math.max(this.app.game.minY, n),
    this.difficulty < 6 ? r = this.app.game.maxY / 2 : this.difficulty < 12 ? r = this.app.game.maxY / 1.5 : this.difficulty < 18 && (r = this.app.game.maxY)),
    t = pc.math.random(i, o),
    i + .5 * (o - i) >= t && (r = Math.min(r, 3 * this.app.game.maxY / 4)),
    e = pc.math.random(a, Math.max(a, r)),
    e > n && this.placeStump(t, e + .5),
    this.boy.setLocalPosition(t, e, 0),
    this.boy.findByName("shadow").enabled = n > e
}
,
Level.prototype.placeStump = function(t, e) {
    var i = this.boy.getPosition()
      , o = this.stumpPool.alloc();
    o.reparent(this.levelParent),
    o.setPosition(t, 0, i.z),
    o.enabled = !0,
    o.script.stump.setHeight(e)
}
,
Level.prototype.placeTarget = function() {
    var t = this.fruitPools[0];
    if (this.difficulty > 1) {
        for (var e = this.difficulty < 6 ? 4 : this.fruitPools.length, i = 0; ; )
            if (i = Math.floor(pc.math.random(0, e)),
            i !== this.previousFruitPoolIndex)
                break;
        t = this.fruitPools[i],
        this.previousFruitPoolIndex = i
    }
    var o = t.alloc();
    o.reparent(this.boy.script.boy.fruitSlot),
    o.setLocalPosition(0, 0, 0),
    o.setLocalEulerAngles(0, 0, 0),
    o.enabled = !0
}
,
Level.prototype.placeBonusLetter = function(t) {
    for (var e = 0; e < this.bonusLetters.children.length; e++) {
        var i = this.bonusLetters.children[e];
        if (!this.app.game.collectedLetters[i.name]) {
            this.app.game.collectLetter(i.name),
            i.setPosition(t.x, t.y + 1, t.z),
            i.enabled = !0;
            break
        }
    }
}
,
Level.prototype.placeFloatingScore = function(t, e) {
    this.floatingScore.setPosition(t.x, t.y + 1, t.z);
    var i = .75;
    e.perfect && (i *= e.far ? 1.5 : 1.25),
    this.app.game.streak && (i *= 1.2),
    this.floatingScore.setLocalScale(i, i, i),
    this.floatingScore.element.text = "+" + this.app.game.applyBonuses(e.thing.points, e.perfect, e.far),
    this.floatingScore.enabled = !0
}
,
Level.prototype.placeBonusWord = function() {
    var t = this.bonusLetters.children
      , e = t.length
      , i = 1
      , o = this.boy.script.boy.fruitSlot.getPosition().clone()
      , a = this.player.getPosition().clone();
    a.y += 1.5,
    a.x += .5;
    var r = (new pc.Vec3).sub2(o, a)
      , n = r.length()
      , s = .3
      , l = Math.min(1, (n - i) / e);
    r.normalize().scale(l);
    for (var h = o.clone(), p = new pc.Curve([0, 0, .5, 1, 1, 0]), c = e - 1; c >= 0; c--) {
        h.sub(r);
        var f = t[c].getPosition();
        f.copy(h),
        f.y += s + p.value((f.x - a.x) / n) * n * .1,
        t[c].setPosition(f),
        t[c].enabled = !0
    }
}
,
Level.prototype.placeEntityRandomly = function(t, e) {
    var i, o = pc.math.random(this.app.game.minX, this.boy.getPosition().x - e / 2), a = 1.9, r = Math.max(this.app.game.minY, this.boy.getPosition().y + a), n = Math.min(this.boy.getPosition().y + a + 3, this.app.game.maxY);
    i = pc.math.random(0, 1) < .5 ? pc.math.random(this.app.game.minY, r) : pc.math.random(n, this.app.game.maxY),
    t.setPosition(o, i, 0)
}
,
Level.prototype.next = function() {
    this.clear(),
    this.placePlayer(),
    this.placeBoy(),
    this.placeTarget(),
    this.app.fire("level-ready")
}
,
Level.prototype.onGameState = function(t) {
    t === STATE_MENU ? (this.reset(),
    this.clear()) : t === STATE_SWITCH_LEVEL && (this.difficulty++,
    this.next())
}
,
Level.prototype.onArrowImpact = function(t) {
    if (t.thing instanceof Fruit) {
        var e = t.thing.entity.getPosition();
        this.placeFloatingScore(e, t),
        this.app.game.streak ? (this.placeBonusLetter(e),
        this.explodeFruit(t.thing, t.arrow.tip.getPosition())) : this.attachArrowToFruit(t)
    } else
        t.thing instanceof Boy ? this.attachArrowToBoy(t) : t.thing instanceof Stump && this.attachArrowToStump(t)
}
,
Level.prototype.attachArrowToFruit = function(t) {
    for (var e = this.fallingPool.alloc(), i = e.children.length; i--; )
        e.removeChild(e.children[i]);
    var o = t.volume.center;
    e.setPosition(o),
    o = t.thing.entity.getPosition(),
    rot = t.thing.entity.getRotation(),
    t.thing.entity.reparent(e),
    t.thing.entity.setPosition(o),
    t.thing.entity.setRotation(rot),
    t.arrow.enabled = !1,
    o = t.arrow.entity.getPosition(),
    rot = t.arrow.entity.getRotation(),
    t.arrow.entity.reparent(e),
    t.arrow.entity.setPosition(o),
    t.arrow.entity.setRotation(rot),
    e.reparent(this.fallingParent),
    e.enabled = !0,
    e.script.falling.velocity.copy(t.velocity),
    e.script.falling.velocity.x *= this.app.game.fallingVelocityMultiplier,
    e.script.falling.velocity.z *= this.app.game.fallingVelocityMultiplier,
    e.script.falling.angularVelocity = e.script.falling.velocity.length() * this.app.game.fallingAngularVelocityMultiplier,
    e.translate(0, 0, 6)
}
,
Level.prototype.attachArrowToBoy = function(t) {
    t.arrow.enabled = !1;
    var e = t.arrow.entity.getPosition()
      , i = t.arrow.entity.getRotation()
      , o = this.boy.script.boy.getAttachmentNode(t.volume);
    t.arrow.entity.reparent(o),
    t.arrow.entity.setPosition(e),
    t.arrow.entity.setRotation(i)
}
,
Level.prototype.attachArrowToStump = function(t) {
    t.thing.attachArrow(t.arrow)
}
,
Level.prototype.explodeFruit = function(t, e) {
    var i = t.entity
      , o = this.fruitExplosions[i.name + "_explosion"]
      , a = t.entity.getPosition()
      , r = o.getPosition();
    r.x = e.x,
    r.z = a.z,
    r.y = a.y + .5,
    o.setPosition(r),
    o.particlesystem.reset(),
    o.particlesystem.play(),
    o.particlesystem.emitter.meshInstance.layer = 10,
    t.entity.enabled = !1
}
;
var Collision = pc.createScript("collision");
Collision.attributes.add("boundingVolumesParent", {
    type: "string"
}),
Collision.prototype.initialize = function() {
    this.initBoundingVolume(),
    this.on("enable", this.onEnable, this),
    this.on("disable", this.onDisable, this),
    this.app.on("debug-volumes", this.toggleDebugVolumes, this),
    this._collisionResult = {
        bv: null,
        center: 0,
        height: 0
    },
    this.onEnable()
}
,
Collision.prototype.initBoundingVolume = function() {
    var n = this.entity.findByName(this.boundingVolumesParent);
    n || console.error("Cannot find collision volumes for " + this.entity.name),
    this.boundingVolumes = [];
    for (var e = 0; e < n.children.length; e++)
        if (n.children[e]._enabled) {
            var i = this.createBoundingVolume(n.children[e]);
            this.boundingVolumes.push(i)
        } else
            console.log("skipping bounding volume " + n.children[e].name + " for " + this.entity.name)
}
,
Collision.prototype.createBoundingVolume = function(n) {
    var e = n.model.type
      , i = {
        entity: n,
        bv: null
    };
    return "box" === e ? i.bv = new pc.BoundingRect : "sphere" === e && (i.bv = new pc.BoundingCircle),
    i.bv && (i.bv.name = n.name),
    i
}
,
Collision.prototype.onEnable = function() {
    this.app.fire("physics-add", this)
}
,
Collision.prototype.onDisable = function() {
    this.app.fire("physics-remove", this)
}
,
Collision.prototype.toggleDebugVolumes = function() {
    this.boundingVolumes.forEach(function(n) {
        n.entity.model.enabled = !n.entity.model.enabled
    })
}
,
Collision.prototype.checkCollision = function(n) {
    var e = this.boundingVolumes.length;
    if (!e)
        return null;
    var i = this._collisionResult;
    i.bv = null,
    i.height = 0,
    i.center = 0;
    for (var t = 1e5, o = -1e5, l = 0, s = 0; e > s; s++) {
        var r = this.boundingVolumes[s];
        r.bv instanceof pc.BoundingRect ? (r.bv.center.copy(r.entity.getPosition()),
        r.bv.halfExtents.copy(r.entity.getLocalScale()).scale(.5),
        l = r.bv.center.y - r.bv.halfExtents.y,
        t > l && (t = l),
        l = r.bv.center.y + r.bv.halfExtents.y,
        l > o && (o = l)) : r.bv instanceof pc.BoundingCircle && (r.bv.center.copy(r.entity.getPosition()),
        r.bv.radius = r.entity.getLocalScale().x / 2,
        l = r.bv.center.y - r.bv.radius,
        t > l && (t = l),
        l = r.bv.center.y + r.bv.radius,
        l > o && (o = l)),
        i.bv || r.bv.containsPoint(n) && (i.bv = r.bv)
    }
    return i.bv ? (i.height = o - t,
    i.center = (o + t) / 2,
    i) : null
}
;
var Letter = pc.createScript("letter");
Letter.attributes.add("destinationEntity", {
    type: "entity"
}),
Letter.attributes.add("duration", {
    type: "number",
    "default": 1
}),
Letter.attributes.add("delay", {
    type: "number",
    "default": .5
}),
Letter.attributes.add("easing", {
    type: "string",
    "default": "Linear",
    "enum": ["Linear", "QuadraticIn", "QuadraticOut", "QuadraticInOut", "CubicIn", "CubicOut", "CubicInOut", "QuarticIn", "QuarticOut", "QuarticInOut", "QuinticIn", "QuinticOut", "QuinticInOut", "SineIn", "SineOut", "SineInOut", "ExponentialIn", "ExponentialOut", "ExponentialInOut", "CircularIn", "CircularOut", "CircularInOut", "ElasticIn", "ElasticOut", "ElasticInOut", "BackIn", "BackOut", "BackInOut", "BounceIn", "BounceOut", "BounceInOut"].map(function(t) {
        var i = {};
        return i[t] = t,
        i
    })
}),
Letter.attributes.add("ui", {
    type: "entity"
}),
Letter.pos = new pc.Vec3,
Letter.prototype.initialize = function() {
    this.initialPosition = new pc.Vec3,
    this.scaledDestination = new pc.Vec3,
    this.on("enable", this.onEnable, this),
    this.onEnable(),
    this.camera = this.app.root.findByName("camera").camera
}
,
Letter.prototype.postInitialize = function() {
    var t = this.entity.findByName("image").element._image;
    t._meshInstance.layer = pc.LAYER_HUD,
    t._material.depthWrite = !1,
    t._material.update()
}
,
Letter.prototype.onEnable = function() {
    this.timer = 0,
    this.timerDelay = 0
}
,
Letter.prototype.update = function(t) {
    if (this.timerDelay < this.delay) {
        if (this.timerDelay += t,
        !(this.timerDelay >= this.delay))
            return;
        this.initialPosition.copy(this.entity.getPosition());
        var i = this.destinationEntity.element.canvasPosition;
        this.camera.screenToWorld(i.x, i.y, 70, this.scaledDestination)
    }
    if (this.timer += t,
    this.timer >= this.duration)
        return void (this.entity.enabled = !1);
    var e = pc[this.easing](this.timer / this.duration);
    Letter.pos.lerp(this.initialPosition, this.scaledDestination, e),
    this.entity.setPosition(Letter.pos)
}
;
var Falling = pc.createScript("falling");
Falling.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.position = new pc.Vec3,
    this.angularVelocity = 0
}
,
Falling.prototype.update = function(i) {
    this.position.copy(this.velocity).scale(i),
    this.entity.translate(this.position.x, this.position.y, this.position.z),
    this.entity.rotate(0, 0, -this.angularVelocity * i),
    this.velocity.y += this.app.game.gravity * this.app.game.fallingGravityMultiplier * i;
    var t = this.entity.getPosition();
    (t.y < -10 || t.x > this.app.game.maxX + 8) && (this.entity.enabled = !1)
}
,
Falling.prototype.swap = function(i) {
    this.velocity = i.velocity,
    this.position = i.position,
    this.angularVelocity = i.angularVelocity
}
;
var Stump = pc.createScript("stump");
Stump.prototype.initialize = function() {
    this.bottom = this.entity.findByName("base"),
    this.top = this.entity.findByName("top"),
    this.body = this.entity.findByName("body"),
    this.boundingBox = this.entity.findByName("bounding_box"),
    this.entity.script.collision.thing = this,
    this.height = 0,
    this.boy = this.app.root.findByName("boy"),
    this.easings = ["QuadraticIn", "QuadraticOut", "QuadraticInOut", "CubicIn", "CubicOut", "CubicInOut", "QuarticIn", "QuarticOut", "QuarticInOut", "QuinticIn", "QuinticOut", "QuinticInOut", "SineIn", "SineOut", "SineInOut", "ExponentialIn", "ExponentialOut", "ExponentialInOut", "CircularIn", "CircularOut", "CircularInOut"],
    this.app.on("game-state", function(t) {
        t === STATE_GAMEOVER ? this.enabled = !1 : t === STATE_MENU ? this.enabled = !0 : t === STATE_SWITCH_LEVEL && (this.currentLocator = 0)
    }, this),
    this.arrows = [],
    this.arrowLocators = [];
    for (var t = 0; t < this.app.game.maxAttempts + 1; t++) {
        var i = new pc.GraphNode;
        this.arrowLocators.push(i),
        this.arrows.push(null)
    }
    this.currentLocator = 0;
    var e = this.top.findByName("model").model.meshInstances[0];
    e.drawOrder = 1007,
    e.layer = pc.LAYER_WORLD - 1,
    e = this.bottom.findByName("model").model.meshInstances[0],
    e.drawOrder = 1007,
    e.layer = pc.LAYER_WORLD - 1,
    e = this.body.findByName("model").model.meshInstances[0],
    e.drawOrder = 1007,
    e.layer = pc.LAYER_WORLD - 1
}
,
Stump.prototype.setHeight = function(t) {
    if (this.app.game.level < 9)
        this.initialHeight = t,
        this.finalHeight = t;
    else {
        this.initialHeight = t;
        var i = pc.math.clamp((this.app.game.level - 9) / 5, 0, 1)
          , e = pc.math.lerp(1.5, this.app.game.maxY, i)
          , o = pc.math.lerp(0, e, i)
          , a = pc.math.random(o, e);
        this.finalHeight = pc.math.clamp(t > 3 * this.app.game.maxY / 4 ? t - a : t + a, 2, this.app.game.maxY),
        this.timer = 0,
        this.easing = this.app.utils.randElement(this.easings)
    }
    this._setHeight(t)
}
,
Stump.prototype._setHeight = function(t) {
    this.height = t;
    var i = this.top.getLocalPosition()
      , e = this.top.getLocalScale()
      , o = this.bottom.getLocalPosition()
      , a = this.bottom.getLocalScale()
      , s = this.boundingBox.getLocalScale()
      , n = this.boundingBox.getLocalPosition();
    t = Math.max(t - e.y - a.y, 1e-4);
    var h = this.body.getLocalScale();
    this.body.setLocalScale(h.x, t, h.z);
    var r = this.body.getLocalPosition();
    r.y = o.y + a.y + t / 2,
    this.body.setLocalPosition(r),
    i.y = r.y + t / 2,
    this.top.setLocalPosition(i.x, i.y, i.z),
    this.boundingBox.setLocalScale(s.x, t + e.y / 2 + a.y, s.z),
    this.boundingBox.setLocalPosition(n.x, t / 2 + o.y + a.y - e.y / 4, n.z);
    for (var c = 0; c < this.currentLocator; c++)
        this.arrows[c].setPosition(this.arrowLocators[c].getPosition())
}
,
Stump.prototype.update = function(t) {
    if (this.initialHeight !== this.finalHeight) {
        if (this.timer += t,
        this.timer > 1) {
            var i = this.initialHeight;
            this.initialHeight = this.finalHeight,
            this.finalHeight = i,
            this.timer = 0
        }
        var e = pc.math.lerp(this.initialHeight, this.finalHeight, pc[this.easing](this.timer))
          , o = e - this.height;
        this._setHeight(e),
        this.boy.translateLocal(0, o, 0)
    }
}
,
Stump.prototype.attachArrow = function(t) {
    this.arrows[this.currentLocator] = t.entity;
    var i = t.tip.getPosition()
      , e = t.entity.getPosition()
      , o = (t.entity.getRotation(),
    t.entity.getLocalScale(),
    this.arrowLocators[this.currentLocator]);
    i.y >= this.top.getPosition().y ? o.reparent(this.top) : i.y >= this.bottom.getPosition().y + this.bottom.getLocalScale().y ? o.reparent(this.body) : o.reparent(this.bottom),
    o.setPosition(e),
    this.currentLocator++
}
;
var LevelTransition = pc.createScript("levelTransition");
LevelTransition.attributes.add("duration", {
    type: "number",
    "default": 1
}),
LevelTransition.attributes.add("switchLevelDelay", {
    type: "number",
    "default": 1.4
}),
LevelTransition.attributes.add("enableInputDelay", {
    type: "number",
    "default": 1.9
}),
LevelTransition.attributes.add("layerSpeeds", {
    type: "string"
}),
LevelTransition.attributes.add("playerLayerSpeed", {
    type: "number",
    "default": 2
}),
LevelTransition.attributes.add("globalSpeed", {
    type: "number",
    "default": 1
}),
LevelTransition.attributes.add("smoothReset", {
    type: "boolean",
    "default": !0
});
var TransitionLayer = function(e, t) {
    this.entities = e,
    this.offset = 0,
    this.speed = t || 1
};
TransitionLayer.prototype.move = function(e) {
    this.offset += this.speed * e;
    for (var t = 0; t < this.entities.length; t++) {
        var i = this.entities[t]
          , s = i.getLocalPosition();
        s.x -= e * this.speed,
        i.setLocalPosition(s)
    }
}
,
TransitionLayer.prototype.resetToTheRight = function(e) {
    for (var t = e * this.speed, i = 0; i < this.entities.length; i++) {
        var s = this.entities[i]
          , a = s.getLocalPosition();
        a.x += this.offset + t,
        s.setLocalPosition(a)
    }
    this.offset = -t
}
,
TransitionLayer.prototype.reset = function() {
    for (var e = 0; e < this.entities.length; e++) {
        var t = this.entities[e]
          , i = t.getLocalPosition();
        i.x += this.offset,
        t.setLocalPosition(i)
    }
    this.offset = 0
}
,
LevelTransition.prototype.initialize = function() {
    this.app.on("game-state", this.onGameState, this),
    this.on("attr:layerSpeeds", this.onSpeedsChanged, this),
    this.on("attr:playerLayerSpeed", this.onPlayerSpeedChanged, this),
    this.timer = new Timer({
        scope: this,
        callback: function() {
            this.enabled = !0,
            this.transitionTimer = 0,
            this.switchLevelTimer = 0
        }
    }),
    this.timerInput = new Timer({
        scope: this,
        callback: function() {
            this.app.fire("game-input-toggle", !0)
        }
    }),
    this.transitionTimer = 0,
    this.switchLevelTimer = 0,
    this.layers = [];
    for (var e = this.layerSpeeds.split(",").length, t = 0; e > t; t++) {
        var i = this.entity.findByName("layer " + (t + 1));
        this.layers.push(new TransitionLayer([i]))
    }
    for (var s = this.entity.findByName("layer " + e), t = 0; t < s.children.length; t++) {
        var a = s.children[t];
        a.model.meshInstances[0].drawOrder = 3e8 + t,
        a.model.meshInstances[0].layer = pc.LAYER_HUD
    }
    this.onSpeedsChanged(this.layerSpeeds)
}
,
LevelTransition.prototype.postInitialize = function() {
    this.playerLayer = new TransitionLayer([this.app.root.findByName("player"), this.app.root.findByName("boy"), this.app.root.findByName("levelParent"), this.app.root.findByPath("root/prefabs/bonusLetters")],this.playerLayerSpeed),
    this.enabled = !1
}
,
LevelTransition.prototype.onSpeedsChanged = function(e) {
    for (var t = e.split(",").map(function(e) {
        return parseFloat(e.trim())
    }), i = 0; i < t.length; i++)
        this.layers[i].speed = t[i]
}
,
LevelTransition.prototype.onPlayerSpeedChanged = function(e) {
    this.playerLayer.speed = e
}
,
LevelTransition.prototype.onGameState = function(e) {
    e === STATE_SWITCH_LEVEL_START && this.app.game.level > 1 && (this.app.fire("game-input-toggle", !1),
    this.timer.time = this.app.game.switchLevelDelay,
    this.timer.start(),
    this.timerInput.time = this.enableInputDelay,
    this.timerInput.start())
}
,
LevelTransition.prototype.update = function(e) {
    if (e *= this.globalSpeed,
    this.switchLevelTimer < this.switchLevelDelay && (this.switchLevelTimer += e,
    this.switchLevelTimer >= this.switchLevelDelay)) {
        for (var t = this.smoothReset ? this.duration - this.switchLevelTimer : 0, i = 0; i < this.layers.length - 1; i++)
            this.layers[i].resetToTheRight(t);
        this.app.game.setState(STATE_SWITCH_LEVEL),
        this.playerLayer.offset = 0,
        this.playerLayer.resetToTheRight(t)
    }
    if (this.switchLevelTimer < this.switchLevelDelay || this.smoothReset) {
        for (var i = 0; i < this.layers.length - 1; i++)
            this.layers[i].move(e);
        this.playerLayer.move(e)
    }
    if (this.transitionTimer += e,
    this.transitionTimer >= this.duration) {
        this.enabled = !1;
        for (var i = 0; i < this.layers.length; i++)
            this.layers[i].reset();
        this.playerLayer.reset()
    } else
        this.layers[this.layers.length - 1].move(e)
}
;
"undefined" != typeof document && (!function(t, e) {
    function n(t, e) {
        for (var n in e)
            try {
                t.style[n] = e[n]
            } catch (o) {}
        return t
    }

    function o(t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof t
    }

    function a(t, e) {
        if ("array" !== o(e))
            return -1;
        if (e.indexOf)
            return e.indexOf(t);
        for (var n = 0, a = e.length; a > n; n++)
            if (e[n] === t)
                return n;
        return -1
    }

    function i() {
        var t, e = arguments;
        for (t in e[1])
            if (e[1].hasOwnProperty(t))
                switch (o(e[1][t])) {
                case "object":
                    e[0][t] = i({}, e[0][t], e[1][t]);
                    break;
                case "array":
                    e[0][t] = e[1][t].slice(0);
                    break;
                default:
                    e[0][t] = e[1][t]
                }
        return 2 < e.length ? i.apply(null, [e[0]].concat(Array.prototype.slice.call(e, 2))) : e[0]
    }

    function r(t) {
        return t = Math.round(255 * t).toString(16),
        1 === t.length ? "0" + t : t
    }

    function h(t, e, n, o) {
        t.addEventListener ? t[o ? "removeEventListener" : "addEventListener"](e, n, !1) : t.attachEvent && t[o ? "detachEvent" : "attachEvent"]("on" + e, n)
    }

    function l(t, s) {
        function d(t, e, n, o) {
            return F[0 | t][Math.round(Math.min((e - n) / (o - n) * q, q))]
        }

        function g() {
            j.legend.fps !== G && (j.legend.fps = G,
            j.legend[f] = G ? "FPS" : "ms"),
            E = G ? H.fps : H.duration,
            j.count[f] = E > 999 ? "999+" : E.toFixed(E > 99 ? 0 : T.decimals)
        }

        function m() {
            for (S = p(),
            N < S - T.threshold && (H.fps -= H.fps / Math.max(1, 60 * T.smoothing / T.interval),
            H.duration = 1e3 / H.fps),
            A = T.history; A--; )
                V[A] = 0 === A ? H.fps : V[A - 1],
                W[A] = 0 === A ? H.duration : W[A - 1];
            if (g(),
            T.heat) {
                if (D.length)
                    for (A = D.length; A--; )
                        D[A].el.style[O[D[A].name].heatOn] = G ? d(O[D[A].name].heatmap, H.fps, 0, T.maxFps) : d(O[D[A].name].heatmap, H.duration, T.threshold, 0);
                if (j.graph && O.column.heatOn)
                    for (A = I.length; A--; )
                        I[A].style[O.column.heatOn] = G ? d(O.column.heatmap, V[A], 0, T.maxFps) : d(O.column.heatmap, W[A], T.threshold, 0)
            }
            if (j.graph)
                for (P = 0; P < T.history; P++)
                    I[P].style.height = (G ? V[P] ? Math.round(z / T.maxFps * Math.min(V[P], T.maxFps)) : 0 : W[P] ? Math.round(z / T.threshold * Math.min(W[P], T.threshold)) : 0) + "px"
        }

        function w() {
            20 > T.interval ? (C = u(w),
            m()) : (C = setTimeout(w, T.interval),
            M = u(m))
        }

        function y(t) {
            t = t || window.event,
            t.preventDefault ? (t.preventDefault(),
            t.stopPropagation()) : (t.returnValue = !1,
            t.cancelBubble = !0),
            H.toggle()
        }

        function v() {
            T.toggleOn && h(j.container, T.toggleOn, y, 1),
            t.removeChild(j.container)
        }

        function k() {
            if (j.container && v(),
            O = l.theme[T.theme],
            F = O.compiledHeatmaps || [],
            !F.length && O.heatmaps.length) {
                for (P = 0; P < O.heatmaps.length; P++)
                    for (F[P] = [],
                    A = 0; q >= A; A++) {
                        var e, o = F[P], a = A;
                        e = .33 / q * A;
                        var i = O.heatmaps[P].saturation
                          , p = O.heatmaps[P].lightness
                          , s = void 0
                          , c = void 0
                          , u = void 0
                          , d = u = void 0
                          , m = s = c = void 0
                          , m = void 0
                          , u = .5 >= p ? p * (1 + i) : p + i - p * i;
                        0 === u ? e = "#000" : (d = 2 * p - u,
                        c = (u - d) / u,
                        e *= 6,
                        s = Math.floor(e),
                        m = e - s,
                        m *= u * c,
                        0 === s || 6 === s ? (s = u,
                        c = d + m,
                        u = d) : 1 === s ? (s = u - m,
                        c = u,
                        u = d) : 2 === s ? (s = d,
                        c = u,
                        u = d + m) : 3 === s ? (s = d,
                        c = u - m) : 4 === s ? (s = d + m,
                        c = d) : (s = u,
                        c = d,
                        u -= m),
                        e = "#" + r(s) + r(c) + r(u)),
                        o[a] = e
                    }
                O.compiledHeatmaps = F
            }
            j.container = n(document.createElement("div"), O.container),
            j.count = j.container.appendChild(n(document.createElement("div"), O.count)),
            j.legend = j.container.appendChild(n(document.createElement("div"), O.legend)),
            j.graph = T.graph ? j.container.appendChild(n(document.createElement("div"), O.graph)) : 0,
            D.length = 0;
            for (var f in j)
                j[f] && O[f].heatOn && D.push({
                    name: f,
                    el: j[f]
                });
            if (I.length = 0,
            j.graph)
                for (j.graph.style.width = T.history * O.column.width + (T.history - 1) * O.column.spacing + "px",
                A = 0; A < T.history; A++)
                    I[A] = j.graph.appendChild(n(document.createElement("div"), O.column)),
                    I[A].style.position = "absolute",
                    I[A].style.bottom = 0,
                    I[A].style.right = A * O.column.width + A * O.column.spacing + "px",
                    I[A].style.width = O.column.width + "px",
                    I[A].style.height = "0px";
            n(j.container, T),
            g(),
            t.appendChild(j.container),
            j.graph && (z = j.graph.clientHeight),
            T.toggleOn && ("click" === T.toggleOn && (j.container.style.cursor = "pointer"),
            h(j.container, T.toggleOn, y))
        }
        "object" === o(t) && t.nodeType === e && (s = t,
        t = document.body),
        t || (t = document.body);
        var O, F, S, C, M, z, E, A, P, H = this, T = i({}, l.defaults, s || {}), j = {}, I = [], q = 100, D = [], L = 0, R = T.threshold, B = 0, N = p() - R, V = [], W = [], G = "fps" === T.show;
        H.options = T,
        H.fps = 0,
        H.duration = 0,
        H.isPaused = 0,
        H.tickStart = function() {
            B = p()
        }
        ,
        H.tick = function() {
            S = p(),
            L = S - N,
            R += (L - R) / T.smoothing,
            H.fps = 1e3 / R,
            H.duration = N > B ? R : S - B,
            N = S
        }
        ,
        H.pause = function() {
            return C && (H.isPaused = 1,
            clearTimeout(C),
            c(C),
            c(M),
            C = M = 0),
            H
        }
        ,
        H.resume = function() {
            return C || (H.isPaused = 0,
            w()),
            H
        }
        ,
        H.set = function(t, e) {
            return T[t] = e,
            G = "fps" === T.show,
            -1 !== a(t, x) && k(),
            -1 !== a(t, b) && n(j.container, T),
            H
        }
        ,
        H.showDuration = function() {
            return H.set("show", "ms"),
            H
        }
        ,
        H.showFps = function() {
            return H.set("show", "fps"),
            H
        }
        ,
        H.toggle = function() {
            return H.set("show", G ? "ms" : "fps"),
            H
        }
        ,
        H.hide = function() {
            return H.pause(),
            j.container.style.display = "none",
            H
        }
        ,
        H.show = function() {
            return H.resume(),
            j.container.style.display = "block",
            H
        }
        ,
        H.destroy = function() {
            H.pause(),
            v(),
            H.tick = H.tickStart = function() {}
        }
        ,
        k(),
        w()
    }
    var p, s = t.performance;
    p = s && (s.now || s.webkitNow) ? s[s.now ? "now" : "webkitNow"].bind(s) : function() {
        return +new Date
    }
    ;
    for (var c = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, u = t.requestAnimationFrame, s = ["moz", "webkit", "o"], d = 0, g = 0, m = s.length; m > g && !c; ++g)
        u = (c = t[s[g] + "CancelAnimationFrame"] || t[s[g] + "CancelRequestAnimationFrame"]) && t[s[g] + "RequestAnimationFrame"];
    c || (u = function(e) {
        var n = p()
          , o = Math.max(0, 16 - (n - d));
        return d = n + o,
        t.setTimeout(function() {
            e(n + o)
        }, o)
    }
    ,
    c = function(t) {
        clearTimeout(t)
    }
    );
    var f = "string" === o(document.createElement("div").textContent) ? "textContent" : "innerText";
    l.extend = i,
    window.FPSMeter = l,
    l.defaults = {
        interval: 100,
        smoothing: 10,
        show: "fps",
        toggleOn: "click",
        decimals: 1,
        maxFps: 60,
        threshold: 100,
        position: "absolute",
        zIndex: 10,
        left: "5px",
        top: "5px",
        right: "auto",
        bottom: "auto",
        margin: "0 0 0 0",
        theme: "dark",
        heat: 0,
        graph: 0,
        history: 20
    };
    var x = ["toggleOn", "theme", "heat", "graph", "history"]
      , b = "position zIndex left top right bottom margin".split(" ")
}(window),
function(t, e) {
    e.theme = {};
    var n = e.theme.base = {
        heatmaps: [],
        container: {
            heatOn: null,
            heatmap: null,
            padding: "5px",
            minWidth: "95px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "right",
            textShadow: "none"
        },
        count: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            right: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "24px",
            fontFamily: "Consolas, Andale Mono, monospace",
            zIndex: 2
        },
        legend: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            left: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "12px",
            lineHeight: "32px",
            fontFamily: "sans-serif",
            textAlign: "left",
            zIndex: 2
        },
        graph: {
            heatOn: null,
            heatmap: null,
            position: "relative",
            boxSizing: "padding-box",
            MozBoxSizing: "padding-box",
            height: "100%",
            zIndex: 1
        },
        column: {
            width: 4,
            spacing: 1,
            heatOn: null,
            heatmap: null
        }
    };
    e.theme.dark = e.extend({}, n, {
        heatmaps: [{
            saturation: .8,
            lightness: .8
        }],
        container: {
            background: "#222",
            color: "#fff",
            border: "1px solid #1a1a1a",
            textShadow: "1px 1px 0 #222"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#3f3f3f"
        }
    }),
    e.theme.light = e.extend({}, n, {
        heatmaps: [{
            saturation: .5,
            lightness: .5
        }],
        container: {
            color: "#666",
            background: "#fff",
            textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#eaeaea"
        }
    }),
    e.theme.colorful = e.extend({}, n, {
        heatmaps: [{
            saturation: .5,
            lightness: .6
        }],
        container: {
            heatOn: "backgroundColor",
            background: "#888",
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.2)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        column: {
            background: "#777",
            backgroundColor: "rgba(0,0,0,.2)"
        }
    }),
    e.theme.transparent = e.extend({}, n, {
        heatmaps: [{
            saturation: .8,
            lightness: .5
        }],
        container: {
            padding: 0,
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.5)"
        },
        count: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "40px"
        },
        legend: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "42px"
        },
        graph: {
            height: "40px"
        },
        column: {
            width: 5,
            background: "#999",
            heatOn: "backgroundColor",
            opacity: .5
        }
    })
}(window, FPSMeter));
var Fps = pc.createScript("fps");
Fps.prototype.initialize = function() {
    this.fps = new FPSMeter({
        heat: !0,
        graph: !0
    })
}
,
Fps.prototype.update = function(t) {
    this.fps.tick()
}
;
var AnimatedTexture = pc.createScript("animatedTexture");
AnimatedTexture.attributes.add("numFrames", {
    type: "number",
    "default": 1,
    description: "Number of frames to play before looping"
}),
AnimatedTexture.attributes.add("startFrame", {
    type: "number",
    "default": 0,
    description: "Frame to start animation from"
}),
AnimatedTexture.attributes.add("width", {
    type: "number",
    "default": 1,
    description: "Number of frames wide"
}),
AnimatedTexture.attributes.add("height", {
    type: "number",
    "default": 1,
    description: "Number of frames high"
}),
AnimatedTexture.attributes.add("frameRate", {
    type: "number",
    "default": 1,
    description: "Playback frames per second"
}),
AnimatedTexture.prototype.initialize = function() {
    this.timer = 1 / this.frameRate,
    this.frame = this.startFrame,
    this.transform = new pc.Vec4,
    this.animate(this.frame)
}
,
AnimatedTexture.prototype.update = function(t) {
    this.timer -= t,
    this.timer < 0 && (this.frame++,
    this.frame >= this.numFrames + this.startFrame && (this.frame = this.startFrame),
    this.animate(this.frame),
    this.timer = 1 / this.frameRate)
}
,
AnimatedTexture.prototype.animate = function(t) {
    var e = 1 / this.width
      , a = 1 / this.height
      , r = t % this.width
      , i = Math.floor(t / this.width)
      , s = this.entity.model.meshInstances;
    this.transform.set(e, a, r * e, 1 - a - i * a);
    for (var m = 0; m < s.length; m++) {
        var n = s[m];
        n.setParameter("texture_emissiveMapTransform", this.transform.data),
        n.setParameter("texture_opacityMapTransform", this.transform.data)
    }
}
;
pc.extend(pc, function() {
    var t = function(t, i, s) {
        pc.events.attach(this),
        this.manager = i,
        s && (this.entity = null),
        this.time = 0,
        this.complete = !1,
        this.playing = !1,
        this.stopped = !0,
        this.pending = !1,
        this.target = t,
        this.duration = 0,
        this._currentDelay = 0,
        this.timeScale = 1,
        this._reverse = !1,
        this._delay = 0,
        this._yoyo = !1,
        this._count = 0,
        this._numRepeats = 0,
        this._repeatDelay = 0,
        this._from = !1,
        this._slerp = !1,
        this._fromQuat = new pc.Quat,
        this._toQuat = new pc.Quat,
        this._quat = new pc.Quat,
        this.easing = pc.EASE_LINEAR,
        this._sv = {},
        this._ev = {}
    };
    return t.prototype = {
        to: function(t, i, s, e, r, h) {
            return t instanceof pc.Vec3 ? this._properties = {
                x: t.x,
                y: t.y,
                z: t.z
            } : t instanceof pc.Color ? (this._properties = {
                r: t.r,
                g: t.g,
                b: t.b
            },
            void 0 !== t.a && (this._properties.a = t.a)) : this._properties = t,
            this.duration = i,
            s && (this.easing = s),
            e && this.delay(e),
            r && this.repeat(r),
            h && this.yoyo(h),
            this
        },
        from: function(t, i, s, e, r, h) {
            return t instanceof pc.Vec3 ? this._properties = {
                x: t.x,
                y: t.y,
                z: t.z
            } : t instanceof pc.Color ? (this._properties = {
                r: t.r,
                g: t.g,
                b: t.b
            },
            void 0 !== t.a && (this._properties.a = t.a)) : this._properties = t,
            this.duration = i,
            s && (this.easing = s),
            e && this.delay(e),
            r && this.repeat(r),
            h && this.yoyo(h),
            this._from = !0,
            this
        },
        rotate: function(t, i, s, e, r, h) {
            return t instanceof pc.Quat ? this._properties = {
                x: t.x,
                y: t.y,
                z: t.z,
                w: t.w
            } : t instanceof pc.Vec3 ? this._properties = {
                x: t.x,
                y: t.y,
                z: t.z
            } : t instanceof pc.Color ? (this._properties = {
                r: t.r,
                g: t.g,
                b: t.b
            },
            void 0 !== t.a && (this._properties.a = t.a)) : this._properties = t,
            this.duration = i,
            s && (this.easing = s),
            e && this.delay(e),
            r && this.repeat(r),
            h && this.yoyo(h),
            this._slerp = !0,
            this
        },
        start: function() {
            if (this.playing = !0,
            this.complete = !1,
            this.stopped = !1,
            this._count = 0,
            this.pending = this._delay > 0,
            this._reverse && !this.pending ? this.time = this.duration : this.time = 0,
            this._from) {
                for (var t in this._properties)
                    this._sv[t] = this._properties[t],
                    this._ev[t] = this.target[t];
                if (this._slerp) {
                    this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);
                    var i = void 0 !== this._properties.x ? this._properties.x : this.target.x
                      , s = void 0 !== this._properties.y ? this._properties.y : this.target.y
                      , e = void 0 !== this._properties.z ? this._properties.z : this.target.z;
                    this._fromQuat.setFromEulerAngles(i, s, e)
                }
            } else {
                for (var t in this._properties)
                    this._sv[t] = this.target[t],
                    this._ev[t] = this._properties[t];
                if (this._slerp) {
                    this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);
                    var i = void 0 !== this._properties.x ? this._properties.x : this.target.x
                      , s = void 0 !== this._properties.y ? this._properties.y : this.target.y
                      , e = void 0 !== this._properties.z ? this._properties.z : this.target.z;
                    this._toQuat.setFromEulerAngles(i, s, e)
                }
            }
            return this._currentDelay = this._delay,
            this.manager.add(this),
            this
        },
        pause: function() {
            this.playing = !1
        },
        resume: function() {
            this.playing = !0
        },
        stop: function() {
            this.playing = !1,
            this.stopped = !0
        },
        delay: function(t) {
            return this._delay = t,
            this.pending = !0,
            this
        },
        repeat: function(t, i) {
            return this._count = 0,
            this._numRepeats = t,
            i ? this._repeatDelay = i : this._repeatDelay = 0,
            this
        },
        loop: function(t) {
            return t ? (this._count = 0,
            this._numRepeats = 1 / 0) : this._numRepeats = 0,
            this
        },
        yoyo: function(t) {
            return this._yoyo = t,
            this
        },
        reverse: function() {
            return this._reverse = !this._reverse,
            this
        },
        chain: function() {
            for (var t = arguments.length; t--; )
                t > 0 ? arguments[t - 1]._chained = arguments[t] : this._chained = arguments[t];
            return this
        },
        update: function(t) {
            if (this.stopped)
                return !1;
            if (!this.playing)
                return !0;
            if (!this._reverse || this.pending ? this.time += t * this.timeScale : this.time -= t * this.timeScale,
            this.pending) {
                if (!(this.time > this._currentDelay))
                    return !0;
                this._reverse ? this.time = this.duration - (this.time - this._currentDelay) : this.time = this.time - this._currentDelay,
                this.pending = !1
            }
            var i = 0;
            (!this._reverse && this.time > this.duration || this._reverse && this.time < 0) && (this._count++,
            this.complete = !0,
            this.playing = !1,
            this._reverse ? (i = this.duration - this.time,
            this.time = 0) : (i = this.time - this.duration,
            this.time = this.duration));
            var s, e, r = this.time / this.duration, h = this.easing(r);
            for (var o in this._properties)
                s = this._sv[o],
                e = this._ev[o],
                this.target[o] = s + (e - s) * h;
            if (this._slerp && this._quat.slerp(this._fromQuat, this._toQuat, h),
            this.entity && (this.entity.dirtyLocal = !0,
            this.entity.dirtyWorld = !0,
            this._slerp && this.entity.setLocalRotation(this._quat)),
            this.fire("update", t),
            this.complete) {
                var n = this._repeat(i);
                return n ? this.fire("loop") : (this.fire("complete", i),
                this._chained && this._chained.start()),
                n
            }
            return !0
        },
        _repeat: function(t) {
            if (this._count < this._numRepeats) {
                if (this._reverse ? this.time = this.duration - t : this.time = t,
                this.complete = !1,
                this.playing = !0,
                this._currentDelay = this._repeatDelay,
                this.pending = !0,
                this._yoyo) {
                    for (var i in this._properties)
                        tmp = this._sv[i],
                        this._sv[i] = this._ev[i],
                        this._ev[i] = tmp;
                    this._slerp && (this._quat.copy(this._fromQuat),
                    this._fromQuat.copy(this._toQuat),
                    this._toQuat.copy(this._quat))
                }
                return !0
            }
            return !1
        }
    },
    {
        Tween: t
    }
}());
pc.extend(pc, function() {
    var t = function(t) {
        this._app = t,
        this._tweens = [],
        this._add = []
    };
    return t.prototype = {
        add: function(t) {
            return this._add.push(t),
            t
        },
        update: function(t) {
            for (var e = 0, n = this._tweens.length; n > e; )
                this._tweens[e].update(t) ? e++ : (this._tweens.splice(e, 1),
                n--);
            this._add.length && (this._tweens = this._tweens.concat(this._add),
            this._add.length = 0)
        }
    },
    {
        TweenManager: t
    }
}());
if (pc.TweenManager) {
    var application = pc.Application.getApplication();
    application._tweenManager = new pc.TweenManager(application),
    application.on("update", function(n) {
        application._tweenManager.update(n)
    }),
    pc.Application.prototype.tween = function(n) {
        return new pc.Tween(n,this._tweenManager)
    }
    ,
    pc.Entity.prototype.tween = function(n) {
        var e = this._app.tween(n);
        return e.entity = this,
        e
    }
}
pc.extend(pc, function() {
    var n = function(n) {
        return n
    }
      , t = function(n) {
        return n * n
    }
      , u = function(n) {
        return n * (2 - n)
    }
      , r = function(n) {
        return (n *= 2) < 1 ? .5 * n * n : -.5 * (--n * (n - 2) - 1)
    }
      , i = function(n) {
        return n * n * n
    }
      , a = function(n) {
        return --n * n * n + 1
    }
      , c = function(n) {
        return (n *= 2) < 1 ? .5 * n * n * n : .5 * ((n -= 2) * n * n + 2)
    }
      , o = function(n) {
        return n * n * n * n
    }
      , e = function(n) {
        return 1 - --n * n * n * n
    }
      , f = function(n) {
        return (n *= 2) < 1 ? .5 * n * n * n * n : -.5 * ((n -= 2) * n * n * n - 2)
    }
      , h = function(n) {
        return n * n * n * n * n
    }
      , M = function(n) {
        return --n * n * n * n * n + 1
    }
      , I = function(n) {
        return (n *= 2) < 1 ? .5 * n * n * n * n * n : .5 * ((n -= 2) * n * n * n * n + 2)
    }
      , O = function(n) {
        return 0 === n ? 0 : 1 === n ? 1 : 1 - Math.cos(n * Math.PI / 2)
    }
      , s = function(n) {
        return 0 === n ? 0 : 1 === n ? 1 : Math.sin(n * Math.PI / 2)
    }
      , p = function(n) {
        return 0 === n ? 0 : 1 === n ? 1 : .5 * (1 - Math.cos(Math.PI * n))
    }
      , P = function(n) {
        return 0 === n ? 0 : Math.pow(1024, n - 1)
    }
      , l = function(n) {
        return 1 === n ? 1 : 1 - Math.pow(2, -10 * n)
    }
      , Q = function(n) {
        return 0 === n ? 0 : 1 === n ? 1 : (n *= 2) < 1 ? .5 * Math.pow(1024, n - 1) : .5 * (-Math.pow(2, -10 * (n - 1)) + 2)
    }
      , w = function(n) {
        return 1 - Math.sqrt(1 - n * n)
    }
      , v = function(n) {
        return Math.sqrt(1 - --n * n)
    }
      , B = function(n) {
        return (n *= 2) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
    }
      , C = function(n) {
        var t, u = .1, r = .4;
        return 0 === n ? 0 : 1 === n ? 1 : (!u || 1 > u ? (u = 1,
        t = r / 4) : t = r * Math.asin(1 / u) / (2 * Math.PI),
        -(u * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * (2 * Math.PI) / r)))
    }
      , E = function(n) {
        var t, u = .1, r = .4;
        return 0 === n ? 0 : 1 === n ? 1 : (!u || 1 > u ? (u = 1,
        t = r / 4) : t = r * Math.asin(1 / u) / (2 * Math.PI),
        u * Math.pow(2, -10 * n) * Math.sin((n - t) * (2 * Math.PI) / r) + 1)
    }
      , d = function(n) {
        var t, u = .1, r = .4;
        return 0 === n ? 0 : 1 === n ? 1 : (!u || 1 > u ? (u = 1,
        t = r / 4) : t = r * Math.asin(1 / u) / (2 * Math.PI),
        (n *= 2) < 1 ? -.5 * (u * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * (2 * Math.PI) / r)) : u * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - t) * (2 * Math.PI) / r) * .5 + 1)
    }
      , q = function(n) {
        var t = 1.70158;
        return n * n * ((t + 1) * n - t)
    }
      , x = function(n) {
        var t = 1.70158;
        return --n * n * ((t + 1) * n + t) + 1
    }
      , b = function(n) {
        var t = 2.5949095;
        return (n *= 2) < 1 ? .5 * (n * n * ((t + 1) * n - t)) : .5 * ((n -= 2) * n * ((t + 1) * n + t) + 2)
    }
      , k = function(n) {
        return 1 - S(1 - n)
    }
      , S = function(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }
      , L = function(n) {
        return .5 > n ? .5 * k(2 * n) : .5 * S(2 * n - 1) + .5
    };
    return {
        Linear: n,
        QuadraticIn: t,
        QuadraticOut: u,
        QuadraticInOut: r,
        CubicIn: i,
        CubicOut: a,
        CubicInOut: c,
        QuarticIn: o,
        QuarticOut: e,
        QuarticInOut: f,
        QuinticIn: h,
        QuinticOut: M,
        QuinticInOut: I,
        SineIn: O,
        SineOut: s,
        SineInOut: p,
        ExponentialIn: P,
        ExponentialOut: l,
        ExponentialInOut: Q,
        CircularIn: w,
        CircularOut: v,
        CircularInOut: B,
        BackIn: q,
        BackOut: x,
        BackInOut: b,
        BounceIn: k,
        BounceOut: S,
        BounceInOut: L,
        ElasticIn: C,
        ElasticOut: E,
        ElasticInOut: d
    }
}());
var SimpleButton = pc.createScript("simpleButton");
SimpleButton.attributes.add("uiComponentName", {
    type: "string",
    "default": ""
}),
SimpleButton.prototype.initialize = function() {
    this.fireOnDown = !1,
    "" === this.uiComponentName && (this.uiComponentName = this.entity.name),
    this.attach()
}
,
SimpleButton.prototype.attach = function() {
    this.entity.selector || (this.entity.selector = new Selector(this,this.app.selectionManager)),
    this.entity.selector && (this.entity.selector.on("pointerdown", this._onPointerDown, this),
    this.entity.selector.on("pointerup", this._onPointerUp, this))
}
,
SimpleButton.prototype.detach = function() {
    this.entity.selector && (this.entity.selector.off("pointerdown", this._onPointerDown, this),
    this.entity.selector.off("pointerup", this._onPointerUp, this))
}
,
SimpleButton.prototype._onPointerDown = function(t, i) {
    this.fireOnDown && (this.app.fire("ui:button:press:*", this.uiComponentName, this),
    this.app.fire("ui:button:press:" + this.uiComponentName, this),
    this.fire("press"))
}
,
SimpleButton.prototype._onPointerUp = function(t, i) {
    this.fireOnDown || (this.app.fire("ui:button:press:*", this.uiComponentName, this),
    this.app.fire("ui:button:press:" + this.uiComponentName, this),
    this.fire("press"))
}
;
var UiPerfectShot = pc.createScript("uiPerfectShot");
UiPerfectShot.prototype.initialize = function() {
    this.app.on("game-state", function(t) {
        t === STATE_SWITCH_LEVEL && (this.entity.enabled = !1)
    }, this)
}
;
var EntityTween = pc.createScript("entityTween");
EntityTween.attributes.add("field", {
    type: "string"
}),
EntityTween.attributes.add("resetField", {
    type: "string"
}),
EntityTween.attributes.add("fromVec3", {
    type: "vec3",
    "default": [1, 1, 1]
}),
EntityTween.attributes.add("toVec3", {
    type: "vec3",
    "default": [1, 1, 1]
}),
EntityTween.attributes.add("fromAngles", {
    type: "vec3",
    "default": [0, 0, 0]
}),
EntityTween.attributes.add("toAngles", {
    type: "vec3",
    "default": [0, 0, 0]
}),
EntityTween.attributes.add("fromColor", {
    type: "rgba"
}),
EntityTween.attributes.add("toColor", {
    type: "rgba"
}),
EntityTween.attributes.add("fromFloat", {
    type: "number",
    "default": 0
}),
EntityTween.attributes.add("toFloat", {
    type: "number",
    "default": 1
}),
EntityTween.attributes.add("duration", {
    type: "number",
    "default": 1
}),
EntityTween.attributes.add("delay", {
    type: "number",
    "default": 0
}),
EntityTween.attributes.add("easing", {
    type: "string",
    "default": "Linear",
    "enum": ["Linear", "QuadraticIn", "QuadraticOut", "QuadraticInOut", "CubicIn", "CubicOut", "CubicInOut", "QuarticIn", "QuarticOut", "QuarticInOut", "QuinticIn", "QuinticOut", "QuinticInOut", "SineIn", "SineOut", "SineInOut", "ExponentialIn", "ExponentialOut", "ExponentialInOut", "CircularIn", "CircularOut", "CircularInOut", "ElasticIn", "ElasticOut", "ElasticInOut", "BackIn", "BackOut", "BackInOut", "BounceIn", "BounceOut", "BounceInOut"].map(function(t) {
        var e = {};
        return e[t] = t,
        e
    })
}),
EntityTween.attributes.add("yoyo", {
    type: "boolean",
    "default": !1
}),
EntityTween.attributes.add("loop", {
    type: "boolean",
    "default": !1
}),
EntityTween.attributes.add("repeat", {
    type: "number",
    "default": 0
}),
EntityTween.attributes.add("additive", {
    type: "boolean",
    "default": !1
}),
EntityTween.attributes.add("applyOnStart", {
    type: "boolean",
    "default": !1
}),
EntityTween.attributes.add("disableOnEnd", {
    type: "entity"
}),
EntityTween.attributes.add("target", {
    type: "entity"
}),
EntityTween.tempVec3 = new pc.Vec3,
EntityTween.tempQuat = new pc.Quat,
EntityTween.tempColor = new pc.Color,
EntityTween.prototype.initialize = function() {
    this.on("enable", this.onEnable, this),
    this.on("disable", this.onDisable, this),
    this.on("attr", this.createTween, this),
    this.createTween()
}
,
EntityTween.prototype.getField = function() {
    for (var t, e = this.fieldParts, i = this.target || this.entity, n = 0; n < e.length; n++)
        t = i,
        i = i[e[n]];
    return "function" == typeof i && (i = i.call(t)),
    i || 0
}
,
EntityTween.prototype.setField = function(t) {
    for (var e = this.resetFieldParts, i = this.target || this.entity, n = i, a = 0; a < e.length - 1; a++)
        n = i,
        i = i[e[a]];
    this.additive && (t instanceof pc.Vec3 ? (EntityTween.tempVec3.add2(this.initialField, t),
    t = EntityTween.tempVec3) : t instanceof pc.Quat ? (EntityTween.tempQuat.mul2(this.initialField, t),
    t = EntityTween.tempQuat) : t instanceof pc.Color ? (EntityTween.tempColor.r = this.initialField.r + t.r,
    EntityTween.tempColor.g = this.initialField.g + t.g,
    EntityTween.tempColor.b = this.initialField.b + t.b,
    EntityTween.tempColor.a = this.initialField.a + t.a,
    t = EntityTween.tempColor) : t += this.initialField),
    "function" == typeof i[e[e.length - 1]] ? i[e[e.length - 1]].call(n, t) : i[e[e.length - 1]] = t
}
,
EntityTween.prototype.createTween = function() {
    this.tween && this.tween.stop();
    this.target || this.entity;
    this.field && (this.fieldParts = this.field.split(".")),
    this.resetField ? this.resetFieldParts = this.resetField.split(".") : this.resetFieldParts = this.fieldParts;
    var t, e = this.getField(), i = "to";
    e instanceof pc.Vec3 ? (this.initialValue = this.fromVec3,
    this.tweenedValue = this.initialValue.clone(),
    t = this.toVec3) : e instanceof pc.Quat ? (this.initialValue = (new pc.Quat).setFromEulerAngles(this.fromAngles.x, this.fromAngles.y, this.fromAngles.z),
    this.tweenedValue = this.initialValue.clone(),
    t = (new pc.Quat).setFromEulerAngles(this.toAngles.x, this.toAngles.y, this.toAngles.z),
    i = "rotate") : e instanceof pc.Color ? (this.initialValue = this.fromColor,
    this.tweenedValue = this.initialValue.clone(),
    t = this.toColor) : (this.initialValue = {
        value: this.fromFloat
    },
    this.tweenedValue = {
        value: this.initialValue
    },
    t = {
        value: this.toFloat
    }),
    this.additive && (this.initialField = e.clone ? e.clone() : e);
    var n = pc[this.easing];
    n || (console.error("Invalid easing " + this.easing),
    n = pc.Linear),
    this.tween = this.app.tween(this.tweenedValue)[i](t, this.duration, n, this.delay, this.repeat, this.yoyo),
    this.loop && this.tween.loop(this.loop),
    this.tween.name = this.entity.name,
    this.tween.on("update", function(t) {
        var e = this.tweenedValue;
        this.tween._slerp ? e = this.tween._quat : void 0 !== this.tweenedValue.value && (e = this.tweenedValue.value),
        this.setField(e)
    }, this),
    this.tween.on("complete", function() {
        this.entity.fire("tween:complete"),
        this.disableOnEnd && (this.disableOnEnd.enabled = !1)
    }, this),
    this.tween.on("loop", function() {
        this.entity.fire("tween:loop")
    }, this),
    this.enabled && this.onEnable()
}
,
EntityTween.prototype.onEnable = function() {
    if (this.reset(),
    this.additive) {
        var t = this.getField();
        t.copy ? this.initialField.copy(t) : this.initialField = t
    }
    if (this.applyOnStart) {
        var e = this.initialValue;
        void 0 !== this.initialValue.value && (e = this.initialValue.value),
        this.setField(e)
    }
    this.tween.start()
}
,
EntityTween.prototype.onDisable = function() {
    this.tween && this.tween.stop()
}
,
EntityTween.prototype.reset = function() {
    this.initialValue.copy ? this.tweenedValue.copy(this.initialValue) : this.tweenedValue.value = this.initialValue.value
}
;
var Rotate = pc.createScript("rotate");
Rotate.attributes.add("speed", {
    type: "vec3",
    "default": [0, 0, -20]
}),
Rotate.attributes.add("target", {
    type: "entity"
}),
Rotate.prototype.update = function(t) {
    var e = this.target || this.entity;
    e.rotate(this.speed.x * t, this.speed.y * t, this.speed.z * t)
}
;
var UiLastShot = pc.createScript("uiLastShot");
UiLastShot.attributes.add("duration", {
    type: "number",
    "default": 1.5
}),
UiLastShot.attributes.add("redOverlay", {
    type: "asset",
    assetType: "material"
}),
UiLastShot.attributes.add("overlayEntity", {
    type: "entity"
}),
UiLastShot.prototype.initialize = function() {
    this.hideTweens = this.entity.findByName("hide"),
    this.hideTimer = new Timer({
        scope: this,
        callback: function() {
            this.hideTweens.enabled = !0
        },
        time: this.duration
    }),
    this.app.on("player-release", function() {
        this.overlayEntity.enabled && (this.hideTimer.paused = !0,
        this.hideTweens.enabled = !0,
        this.overlayTween.stop(),
        this.reverseOverlayTween.start())
    }, this),
    this.on("enable", this.onEnable, this);
    var e = {
        intensity: 0
    };
    this.overlayTween = this.app.tween(e).to({
        intensity: 1
    }, .5, pc.SineOut),
    this.overlayTween.on("update", function() {
        this.redOverlay.resource.setParameter("material_opacity", e.intensity)
    }, this),
    this.reverseOverlayTween = this.app.tween(e).to({
        intensity: 0
    }, .5, pc.SineIn).delay(.2),
    this.reverseOverlayTween.on("complete", function() {
        this.overlayEntity.enabled = !1
    }, this),
    this.reverseOverlayTween.on("update", function() {
        this.redOverlay.resource.setParameter("material_opacity", e.intensity)
    }, this),
    this.onEnable()
}
,
UiLastShot.prototype.onEnable = function() {
    this.hideTweens.enabled = !1,
    this.hideTimer.time = this.duration,
    this.hideTimer.start(),
    this.overlayEntity.enabled = !0,
    this.overlayTween.start()
}
;
var UiStreak = pc.createScript("uiStreak");
UiStreak.prototype.initialize = function() {
    this.app.on("game-streak", this.onStreak, this),
    this.app.on("game-streak-end", this.onStreakEnd, this),
    this.hide = !1,
    this.entity.on("tween:complete", function() {
        this.hide && (this.entity.script.entityTween.tween.reverse(),
        this.entity.enabled = !1)
    }, this),
    this.entity.enabled = !1
}
,
UiStreak.prototype.onStreak = function() {
    this.hide = !1,
    this.entity.enabled = !0
}
,
UiStreak.prototype.onStreakEnd = function() {
    if (this.entity.enabled) {
        this.hide = !0;
        var t = this.entity.script.entityTween;
        t.reset(),
        t.tween.reverse().start()
    }
}
;
var UiBonus = pc.createScript("uiBonus");
UiBonus.attributes.add("bonusGlow", {
    type: "entity"
}),
UiBonus.attributes.add("quiverGlow", {
    type: "entity"
}),
UiBonus.prototype.initialize = function() {
    this.app.on("game-letter-collected", this.onLetter, this),
    this.app.on("game-letter-bonus", this.onBonus, this),
    this.app.on("game-letter-bonus-reset", this.onReset, this),
    this.app.on("game-state", this.onGameState, this),
    this.quiver = this.entity.findByName("quiver"),
    this.bonusGlow.enabled = !1,
    this.quiverGlow.enabled = !1,
    this.letters = {},
    ["b", "o", "n", "u", "s"].forEach(function(e) {
        this.letters[e] = this.entity.findByName(e),
        this.letters[e].on("tween:complete", function() {
            this.hide && (this.letters[e].script.entityTween.tween.reverse(),
            this.letters[e].enabled = !1)
        }, this)
    }
    .bind(this)),
    this.hide = !1,
    this.bonusGlow.on("tween:complete", function() {
        this.hide && (this.bonusGlow.script.entityTween.tween.reverse(),
        this.bonusGlow.enabled = !1)
    }, this),
    this.quiverGlow.on("tween:complete", function() {
        this.quiverGlow.enabled = !1
    }, this)
}
,
UiBonus.prototype.onLetter = function(e) {
    this.hide = !1,
    this.letters[e].enabled = !0,
    this.quiverGlow.enabled = !0
}
,
UiBonus.prototype.onBonus = function() {
    this.bonusGlow.enabled = !0
}
,
UiBonus.prototype.onReset = function() {
    this.bonusGlow.enabled && (this.hide = !0,
    this.bonusGlow.script.entityTween.reset(),
    this.bonusGlow.script.entityTween.tween.reverse().start());
    for (var e in this.letters)
        this.letters[e].enabled && (this.hide = !0,
        this.letters[e].script.entityTween.reset(),
        this.letters[e].script.entityTween.tween.reverse().start())
}
,
UiBonus.prototype.postInitialize = function() {
    for (var e in this.letters) {
        var t = this.letters[e]
          , i = t.element.material.clone();
        i.blendType = pc.BLEND_ADDITIVEALPHA,
        i.update(),
        t.element.material = i,
        t.enabled = !1
    }
}
,
UiBonus.prototype.onGameState = function(e) {
    if (e === STATE_MENU) {
        this.hide = !1,
        this.bonusGlow.enabled = !1;
        var t = this.bonusGlow.script.entityTween.tween;
        t && (t._reverse = !1);
        for (var i in this.letters)
            this.letters[i].enabled = !1,
            t = this.letters[i].script.entityTween.tween,
            t && (t._reverse = !1)
    }
}
;
var Audio = pc.createScript("audio");
Audio.attributes.add("fireDelay", {
    type: "number",
    "default": .5
}),
Audio.attributes.add("music", {
    type: "asset",
    assetType: "audio"
}),
Audio.attributes.add("tension", {
    type: "asset",
    assetType: "audio"
}),
Audio.prototype.initialize = function() {
    this.app.game.sound = this,
    this.app.on("audio-on", this.onAudioOn, this),
    this.app.on("audio-off", this.onAudioOff, this),
    this.app.on("game-state", this.onGameState, this),
    this.app.on("player-charge", this.onCharge, this),
    this.app.on("player-charge-cancel", this.onChargeCancel, this),
    this.app.on("player-release", this.onRelease, this),
    this.app.on("game-streak", this.onStreak, this),
    this.app.on("game-streak-end", this.onStreakEnd, this),
    this.app.on("game-letter-collected", this.onLetterCollected, this),
    this.app.on("game-letter-bonus", this.onLetterBonus, this),
    this.app.on("arrow-impact", this.onImpact, this),
    this.app.on("arrow-miss", this.onMiss, this),
    this.app.on("level-retry", this.onRetry, this),
    this.timerFire = new Timer({
        scope: this,
        callback: function() {
            this.entity.sound.play("fire_arrow")
        }
    }),
    this.delayTimers = [],
    this.musicVolume = 1,
    this.tensionVolume = 0,
    this.musicSlot = this.entity.sound.slot("music"),
    this.tensionSlot = this.entity.sound.slot("tension"),
    this.musicSlot.volume = 0,
    this.tensionSlot.volume = 0,
    this.musicFadeSpeed = 2,
    this.tensionFadeSpeed = 2;
    var t = !1
      , i = !1
      , e = this;
    this.music.on("load", function() {
        t = !0,
        i && (e.entity.sound.play("music"),
        e.entity.sound.play("tension"))
    }),
    this.tension.on("load", function() {
        i = !0,
        t && (e.entity.sound.play("music"),
        e.entity.sound.play("tension"))
    })
}
,
Audio.prototype.play = function(t, i, e) {
    if (i) {
        for (var s = null, o = 0; o < this.delayTimers.length; o++)
            if (this.delayTimers[o].paused) {
                s = this.delayTimers[o];
                break
            }
        s ? (s.time = i,
        s.data = t) : (s = new Timer({
            scope: this,
            data: t,
            callback: function(t) {
                var i = this.entity.sound.play(t);
                e && e(i)
            },
            time: i
        }),
        this.delayTimers.push(s)),
        s.start()
    } else {
        var n = this.entity.sound.play(t);
        e && e(n)
    }
}
,
Audio.prototype.onAudioOn = function() {
    this.app.systems.sound.volume = 1
}
,
Audio.prototype.onAudioOff = function() {
    this.app.systems.sound.volume = 0
}
,
Audio.prototype.playFire = function() {
    this.timerFire.time = this.fireDelay,
    this.timerFire.start()
}
,
Audio.prototype.onGameState = function(t) {
    t === STATE_MENU ? (this.musicFadeSpeed = 2,
    this.tensionFadeSpeed = 2,
    this.musicVolume = 1) : t === STATE_SWITCH_LEVEL_START ? (this.tensionVolume = 0,
    this.play("level_transition", .3)) : t === STATE_PLAYING ? this.app.game.streak && this.playFire() : t === STATE_GAMEOVER && (this.musicVolume = 0,
    this.tensionVolume = 0,
    this.musicFadeSpeed = 5,
    this.tensionFadeSpeed = 6)
}
,
Audio.prototype.onCharge = function() {
    this.play("charge")
}
,
Audio.prototype.onChargeCancel = function() {
    this.entity.sound.stop("charge")
}
,
Audio.prototype.onRelease = function() {
    this.entity.sound.stop("charge"),
    this.app.game.streak ? this.entity.sound.play("release_streak") : this.entity.sound.play("release")
}
,
Audio.prototype.onStreak = function() {
    this.playFire(),
    this.play("whoosh")
}
,
Audio.prototype.onStreakEnd = function() {
    this.entity.sound.stop("fire_arrow"),
    this.play("whoosh", .5)
}
,
Audio.prototype.onLetterCollected = function() {
    this.play("letter_pickup"),
    this.play("letter_glow", 1.5)
}
,
Audio.prototype.onLetterBonus = function() {}
,
Audio.prototype.onImpact = function(t) {
    if (this.entity.sound.stop("fire_arrow"),
    t.thing instanceof Fruit)
        t.perfect && (t.far ? this.entity.sound.play("amazing_shot") : this.entity.sound.play("perfect_shot")),
        this.entity.sound.play("hit_fruit");
    else if (t.thing instanceof Boy) {
        this.entity.sound.play("hit_fruit");
        var i = Math.floor(pc.math.random(1, 4));
        this.entity.sound.play("hit_boy_" + i).pitch = pc.math.random(1, 1.2)
    } else
        t.thing instanceof Stump && this.entity.sound.play("hit_ground")
}
,
Audio.prototype.onMiss = function(t, i) {
    i && this.entity.sound.play("hit_ground")
}
,
Audio.prototype.onRetry = function() {
    var t = this.app.game.attempts;
    this.app.game.hasLetterBonus && t++;
    var i = 0;
    i = t >= 3 ? .1 : t >= 2 ? .2 : .9,
    this.tensionVolume = i,
    1 === t && this.entity.sound.play("last_shot")
}
,
Audio.prototype.update = function(t) {
    this.musicSlot.isPlaying && this.musicSlot.volume !== this.musicVolume && (this.musicSlot.volume = pc.math.lerp(this.musicSlot.volume, this.musicVolume, t * this.musicFadeSpeed)),
    this.tensionSlot.isPlaying && this.tensionSlot.volume !== this.tensionVolume && (this.tensionSlot.volume = pc.math.lerp(this.tensionSlot.volume, this.tensionVolume, t * this.tensionFadeSpeed))
}
;
var FallingLeaves = pc.createScript("fallingLeaves");
FallingLeaves.prototype.initialize = function() {
    this.app.on("game-state", this.onGameState, this),
    this.start(),
    this.stop()
}
,
FallingLeaves.prototype.onGameState = function(t) {
    t === STATE_MENU && this.stop(),
    t === STATE_GAMEOVER && this.start()
}
,
FallingLeaves.prototype.start = function() {
    this.entity.enabled = !0;
    for (var t = 0; t < this.entity.children.length; t++)
        this.entity.children[t].particlesystem.play()
}
,
FallingLeaves.prototype.stop = function() {
    for (var t = 0; t < this.entity.children.length; t++)
        this.entity.children[t].particlesystem.stop(),
        this.entity.children[t].particlesystem.reset();
    this.entity.enabled = !1
}
;
var RecordShaders = pc.createScript("recordShaders");
RecordShaders.prototype.initialize = function() {
    this.app.on("debug-shaders", function() {
        var r = ""
          , e = pc.app.graphicsDevice.programLib._cache;
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var i = e[a].definition
                  , o = i.vshader
                  , t = i.fshader
                  , c = i.attributes;
                r += "^SH^",
                r += a,
                r += "^VS^",
                r += o,
                r += "^PS^",
                r += t,
                r += "^AT^";
                for (var s in c)
                    c.hasOwnProperty(s) && (r += s,
                    r += ",",
                    r += c[s],
                    r += ",")
            }
        console.log(r)
    }, this)
}
;
var LoadShaders = pc.createScript("loadShaders");
LoadShaders.attributes.add("cache", {
    type: "asset",
    assetType: "text"
}),
LoadShaders.prototype.initialize = function() {
    if (this.cache)
        for (var e = this.app.graphicsDevice, a = e.programLib._cache, t = this.cache.resource, r = t.split("^SH^"), s = 1; s < r.length; s++) {
            var i = r[s]
              , h = i.indexOf("^VS^")
              , d = i.indexOf("^PS^")
              , c = i.indexOf("^AT^")
              , n = i.substring(0, h);
            if (!a[n]) {
                for (var p = i.substring(h + 4, d), o = i.substring(d + 4, c), S = i.substring(c + 4, i.length), f = S.split(","), g = {}, u = 0; u < f.length - 1; u += 2)
                    g[f[u]] = f[u + 1];
                var b = {
                    vshader: p,
                    fshader: o,
                    attributes: g
                };
                a[n] = new pc.Shader(e,b),
                e.setShader(a[n])
            }
        }
}
;
var CameraShake = pc.createScript("cameraShake");
CameraShake.prototype.initialize = function() {
    this.app.on("game-state", function(e) {
        e === STATE_GAMEOVER && (this.entity.enabled = !0)
    }, this),
    this.entity.enabled = !1
}
;
var UiTutorial = pc.createScript("uiTutorial");
UiTutorial.prototype.initialize = function() {
    this.app.on("tutorial-show", function() {
        this.entity.enabled = !0;
        var i = this.app;
        setTimeout(function() {
            i.fire("game-input-toggle", !0)
        }, 500)
    }, this),
    this.app.on("tutorial-dismiss", function() {
        this.entity.findByName("disable").enabled = !0
    }, this),
    this.entity.enabled = !1
}
;
