var __reflect = this && this.__reflect || function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
}
  , __extends = this && this.__extends || function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var a in t)
        t.hasOwnProperty(a) && (e[a] = t[a]);
    i.prototype = t.prototype,
    e.prototype = new i
}
  , __awaiter = this && this.__awaiter || function(e, t, i, a) {
    return new (i || (i = Promise))(function(r, s) {
        function n(e) {
            try {
                o(a.next(e))
            } catch (t) {
                s(t)
            }
        }
        function h(e) {
            try {
                o(a["throw"](e))
            } catch (t) {
                s(t)
            }
        }
        function o(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }
            ).then(n, h)
        }
        o((a = a.apply(e, t || [])).next())
    }
    )
}
  , __generator = this && this.__generator || function(e, t) {
    function i(e) {
        return function(t) {
            return a([e, t])
        }
    }
    function a(i) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; o; )
            try {
                if (r = 1,
                s && (n = s[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(n = n.call(s, i[1])).done)
                    return n;
                switch (s = 0,
                n && (i = [0, n.value]),
                i[0]) {
                case 0:
                case 1:
                    n = i;
                    break;
                case 4:
                    return o.label++,
                    {
                        value: i[1],
                        done: !1
                    };
                case 5:
                    o.label++,
                    s = i[1],
                    i = [0];
                    continue;
                case 7:
                    i = o.ops.pop(),
                    o.trys.pop();
                    continue;
                default:
                    if (n = o.trys,
                    !(n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                        o = 0;
                        continue
                    }
                    if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                        o.label = i[1];
                        break
                    }
                    if (6 === i[0] && o.label < n[1]) {
                        o.label = n[1],
                        n = i;
                        break
                    }
                    if (n && o.label < n[2]) {
                        o.label = n[2],
                        o.ops.push(i);
                        break
                    }
                    n[2] && o.ops.pop(),
                    o.trys.pop();
                    continue
                }
                i = t.call(e, o)
            } catch (a) {
                i = [6, a],
                s = 0
            } finally {
                r = n = 0
            }
        if (5 & i[0])
            throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, n, h, o = {
        label: 0,
        sent: function() {
            if (1 & n[0])
                throw n[1];
            return n[1]
        },
        trys: [],
        ops: []
    };
    return h = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (h[Symbol.iterator] = function() {
        return this
    }
    ),
    h
}
  , BaseSprite = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.listenerArray = [],
        t.messageArray = [],
        t.addListener(t, egret.Event.REMOVED_FROM_STAGE, t.remove_view_handler, t),
        t.addListener(t, egret.Event.ADDED_TO_STAGE, t.add_view_handler, t),
        t
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.add_view_handler, this)
    }
    ,
    t.prototype.addListener = function(e, t, i, a, r) {
        void 0 === r && (r = !1),
        this.listenerArray.push([e, t, i, a, r]),
        e.addEventListener(t, i, a, r)
    }
    ,
    t.prototype.removeListener = function(e, t, i, a, r) {
        void 0 === r && (r = !1);
        for (var s = 0; s < this.listenerArray.length; ++s)
            this.listenerArray[s][0] == e && this.listenerArray[s][1] == t && this.listenerArray[s][2] == i && this.listenerArray[s][3] == a && this.listenerArray[s][4] == r && (e.removeEventListener(t, i, this, r),
            this.listenerArray.splice(s, 1),
            s--)
    }
    ,
    t.prototype.addMessage = function(e, t) {
        this.messageArray.push([e, t]),
        Message.instance.add(e, t)
    }
    ,
    t.prototype.remove_view_handler = function(e) {
        this.destroy()
    }
    ,
    t.prototype.destroy = function() {
        for (; this.numChildren > 0; )
            this.removeChildAt(0);
        if (this.listenerArray)
            for (var e = 0; e < this.listenerArray.length; e++)
                this.listenerArray[e][0].removeEventListener(this.listenerArray[e][1], this.listenerArray[e][2], this.listenerArray[e][3], this.listenerArray[e][4]);
        if (this.listenerArray = null,
        this.messageArray)
            for (var e = 0; e < this.messageArray.length; ++e)
                Message.instance.remove(this.messageArray[e][0], this.messageArray[e][1]);
        this.messageArray = null
    }
    ,
    t
}(egret.Sprite);
__reflect(BaseSprite.prototype, "BaseSprite");
var ObjectModel = function() {
    function e() {}
    return e
}();
__reflect(ObjectModel.prototype, "ObjectModel");
var BaseModule = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.listenerArray = [],
        t.messageArray = [],
        t.addListener(t, egret.Event.REMOVED_FROM_STAGE, t.remove_view_handler, t),
        t.addListener(t, egret.Event.ADDED_TO_STAGE, t.add_view_handler, t),
        t
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.add_view_handler, this)
    }
    ,
    t.prototype.addListener = function(e, t, i, a, r) {
        void 0 === r && (r = !1),
        this.listenerArray.push([e, t, i, a, r]),
        e.addEventListener(t, i, a, r)
    }
    ,
    t.prototype.removeListener = function(e, t, i, a, r) {
        void 0 === r && (r = !1);
        for (var s = 0; s < this.listenerArray.length; ++s)
            this.listenerArray[s][0] == e && this.listenerArray[s][1] == t && this.listenerArray[s][2] == i && this.listenerArray[s][3] == a && this.listenerArray[s][4] == r && (e.removeEventListener(t, i, this, r),
            this.listenerArray.splice(s, 1),
            s--)
    }
    ,
    t.prototype.addMessage = function(e, t) {
        this.messageArray.push([e, t]),
        Message.instance.add(e, t)
    }
    ,
    t.prototype.remove_view_handler = function(e) {
        this.destroy()
    }
    ,
    t.prototype.destroy = function() {
        for (; this.numChildren > 0; )
            this.removeChildAt(0);
        if (this.listenerArray)
            for (var e = 0; e < this.listenerArray.length; e++)
                this.listenerArray[e][0].removeEventListener(this.listenerArray[e][1], this.listenerArray[e][2], this.listenerArray[e][3], this.listenerArray[e][4]);
        if (this.listenerArray = null,
        this.messageArray) {
            for (var e = 0; e < this.messageArray.length; ++e)
                Message.instance.remove(this.messageArray[e][0], this.messageArray[e][1]);
            this.messageArray = null
        }
    }
    ,
    t
}(eui.Component);
__reflect(BaseModule.prototype, "BaseModule");
var BaseConfig = function() {
    function e() {}
    return e.prototype.init = function(e, t, i) {
        for (var a = RES.getRes(e), r = a.split("\n"), s = 1; s < r.length; ++s) {
            var n = r[s].split("	");
            i.push(new t(n))
        }
    }
    ,
    e
}();
__reflect(BaseConfig.prototype, "BaseConfig");
var ObjectModule = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.vis = !0,
        t.isShip = !1,
        t
    }
    return __extends(t, e),
    t
}(BaseSprite);
__reflect(ObjectModule.prototype, "ObjectModule");
var X_Transparent = function() {
    function e() {}
    return e.onFake = function() {
        var t = new e;
        return t.gameId = "10002",
        t.gameType = "6",
        t.userId = 1131454,
        t.taskId = 1,
        t.clientInfo = "eyJkZXZpY2VJbmZvIjp7InNjcmVlbldpZHRoIjoxMDgwLCJzY3JlZW5IZWlnaHQiOjE4MDYsInNjcmVlbkRlbnNpdHkiOjMsIm1vZGVsIjoiS05ULVVMMTAiLCJkZXZpY2UiOiJIV0tOVCIsImFuZHJvaWRWZXJzaW9uIjoiNy4wIiwibWl1aVZlcnNpb24iOiJDMDBCMzk3IiwibWl1aVZlcnNpb25OYW1lIjoiIiwiYmMiOiJTIiwibWFrZSI6Imh1YXdlaSIsImlzSW50ZXIiOmZhbHNlLCJvcyI6ImFuZHJvaWQifSwidXNlckluZm8iOnsibG9jYWxlIjoiemhfQ04iLCJsYW5ndWFnZSI6InpoIiwiY291bnRyeSI6IkNOIiwiY3VzdG9taXphdGlvbiI6IiIsIm5ldHdvcmtUeXBlIjoxNSwiY29ubmVjdGlvblR5cGUiOiJNTjNHIiwidWEiOiJEYWx2aWtcLzIuMS4wIChMaW51eDsgVTsgQW5kcm9pZCA3LjA7IEtOVC1VTDEwIEJ1aWxkXC9IVUFXRUlLTlQtVUwxMCkiLCJzZXJ2aWNlUHJvdmlkZXIiOiI0NjAwMCIsInRyaWdnZXJJZCI6IjM3MWE0NzkzZmUzMzJlNjNkYWI2OWJjYjgwZTg4ODNlIiwiaW1laSI6IjlhOWRhYmI5N2RlMWRmMjMxOGJkOGU5NDcxYmI0ZDhhIiwibWFjIjoiMGY2MDcyNjRmYzYzMThhOTJiOWUxM2M2NWRiN2NkM2MiLCJhYWlkIjoiIiwiYW5kcm9pZElkIjoiNjA2Y2IwY2FhYzFkZGUyNjQxODcwYWZlNmVmNGU2ODciLCJpcCI6IjEwLjQuMTkyLjEwMSIsImRpZCI6IkR1Q3Y4VnBZT1BQaHQ1ZW1CQlRkN0lkSkRNTnBnaDNhNVV5dkp4dTdUcjRTSk02emkzR3dDdCtvamd5ZnVQNm9wTm5Odkd2aWlNbjJzTVd4SW8zZ3hFNUEifSwiYXBwbGljYXRpb25JbmZvIjp7InBsYXRmb3JtIjoieGlhb21pIiwicGFja2FnZU5hbWUiOiJjb20uYmFpd2FuLnBrIiwidmVyc2lvbiI6MjAxODA0MTIsInZlcnNpb25OYW1lIjoiVjEuMTAifX0=",
        t
    }
    ,
    e
}();
__reflect(X_Transparent.prototype, "X_Transparent");
var XiaoMi = function(e) {
    function t() {
        var i = e.call(this) || this;
        i.version = "1",
        i.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJYR0FNRSIsImF1ZCI6IlhHQU1FX0JBSUxVIiwic3ViIjoiWEdBTUVfQkFJTFVfVE9LRU4iLCJpYXQiOjE1MjM1MjQ4MzQsImV4cCI6MTUyNDEyOTYzNCwidHZlciI6MSwidXNlcklkIjoxMTMxNDU0fQ.aGRBYZclSV7yfmSZ_LWTeFBU4m3mDpV536wgopAWy-M",
        i.score = 520,
        i.x_transparent = X_Transparent.onFake();
        var a = '{"score":520}'
          , r = {};
        r.clientInfo = i.x_transparent.clientInfo,
        r.gameId = i.x_transparent.gameId,
        r.gameType = i.x_transparent.gameType,
        r.taskId = i.x_transparent.taskId,
        r.userId = i.x_transparent.userId;
        var s = JSON.stringify(r);
        s = s.replace("=", "\\u003d");
        var n = new HashMap;
        n.put("X_Transparent", s),
        n.put("appSecret", t.App_Secret),
        n.put("result", a),
        n.put("token", i.token),
        n.put("version", i.version);
        var h = t.sign2(n);
        return console.log(h),
        i
    }
    return __extends(t, e),
    t.sign2 = function(e) {
        for (var t = e.keys(), i = "", a = 0; a < t.length; ++a)
            i += t[a] + "=" + e.get(t[a]) + "&";
        var r = hex_md5(i);
        return r
    }
    ,
    t.prototype.stringToHex = function(e) {
        for (var t = "", i = 0; i < e.length; i++)
            "" == t ? t = e.charCodeAt(i).toString(16) : t += "," + e.charCodeAt(i).toString(16);
        return t
    }
    ,
    t.prototype.stringToBytes = function(e) {
        for (var t, i, a = [], r = 0; r < e.length; r++) {
            t = e.charCodeAt(r),
            i = [];
            do
                i.push(255 & t),
                t >>= 8;
            while (t);a = a.concat(i.reverse())
        }
        return a
    }
    ,
    t.App_Secret = "3MiOiJYR0FNRSIsImF1ZCI6IlhHQU1FX1VTRVIiLCJzdWIiOiJYR0FNRV9UT0t",
    t
}(egret.Sprite);
__reflect(XiaoMi.prototype, "XiaoMi");
var BaseItemrenerer = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.listenerArray = [],
        t.messageArray = [],
        t.addListener(t, egret.Event.REMOVED_FROM_STAGE, t.remove_view_handler, t),
        t.addListener(t, egret.Event.ADDED_TO_STAGE, t.add_view_handler, t),
        t
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.add_view_handler, this)
    }
    ,
    t.prototype.addListener = function(e, t, i, a, r) {
        void 0 === r && (r = !1),
        this.listenerArray.push([e, t, i, a, r]),
        e.addEventListener(t, i, a, r)
    }
    ,
    t.prototype.removeListener = function(e, t, i, a, r) {
        void 0 === r && (r = !1);
        for (var s = 0; s < this.listenerArray.length; ++s)
            this.listenerArray[s][0] == e && this.listenerArray[s][1] == t && this.listenerArray[s][2] == i && this.listenerArray[s][3] == a && this.listenerArray[s][4] == r && (e.removeEventListener(t, i, this, r),
            this.listenerArray.splice(s, 1),
            s--)
    }
    ,
    t.prototype.addMessage = function(e, t) {
        this.messageArray.push([e, t]),
        Message.instance.add(e, t)
    }
    ,
    t.prototype.remove_view_handler = function(e) {
        this.destroy()
    }
    ,
    t.prototype.destroy = function() {
        for (; this.numChildren > 0; )
            this.removeChildAt(0);
        if (this.listenerArray)
            for (var e = 0; e < this.listenerArray.length; e++)
                this.listenerArray[e][0].removeEventListener(this.listenerArray[e][1], this.listenerArray[e][2], this.listenerArray[e][3], this.listenerArray[e][4]);
        if (this.listenerArray = null,
        this.messageArray) {
            for (var e = 0; e < this.messageArray.length; ++e)
                Message.instance.remove(this.messageArray[e][0], this.messageArray[e][1]);
            this.messageArray = null
        }
    }
    ,
    t
}(eui.ItemRenderer);
__reflect(BaseItemrenerer.prototype, "BaseItemrenerer");
var AssetAdapter = function() {
    function e() {}
    return e.prototype.getAsset = function(e, t, i) {
        function a(a) {
            t.call(i, a, e)
        }
        if (RES.hasRes(e)) {
            var r = RES.getRes(e);
            r ? a(r) : RES.getResAsync(e, a, this)
        } else
            RES.getResByUrl(e, a, this, RES.ResourceItem.TYPE_IMAGE)
    }
    ,
    e
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Main = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e),
    t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this),
        egret.lifecycle.addLifecycleListener(function(e) {}),
        egret.lifecycle.onPause = function() {
            // egret.ticker.pause()
        }
        ,
        egret.lifecycle.onResume = function() {
            // egret.ticker.resume()
        }
        ;
        var t = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", t),
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter),
        this.runGame()["catch"](function(e) {
            console.log(e)
        })
    }
    ,
    t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, this.loadResource()];
                case 1:
                    return t.sent(),
                    this.createGameScene(),
                    [4, RES.getResAsync("description_json")];
                case 2:
                    return e = t.sent(),
                    [2]
                }
            })
        })
    }
    ,
    t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(i) {
                switch (i.label) {
                case 0:
                    return i.trys.push([0, 4, , 5]),
                    e = new LoadingUI,
                    this.stage.addChild(e),
                    [4, RES.loadConfig("resource/default.res.json", "resource/")];
                case 1:
                    return i.sent(),
                    [4, this.loadTheme()];
                case 2:
                    return i.sent(),
                    [4, RES.loadGroup("preload", 0, e)];
                case 3:
                    return i.sent(),
                    this.stage.removeChild(e),
                    [3, 5];
                case 4:
                    return t = i.sent(),
                    console.error(t),
                    [3, 5];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, i) {
            var a = new eui.Theme("resource/default.thm.json",e.stage);
            a.addEventListener(eui.UIEvent.COMPLETE, function() {
                t()
            }, e)
        }
        )
    }
    ,
    t.prototype.createGameScene = function() {
        Global.windows_width = this.stage.stageWidth,
        Global.windows_height = this.stage.stageHeight;
        // this.stage.addEventListener(egret.Event.ACTIVATE, function() {
        //     console.log("激活"),
        //     BackGroundService.instance.IsPlaySound && SoundManager.instance.startBgMusic("bgmIngame_hi_mp3")
        // }, this),
        // this.stage.addEventListener(egret.Event.DEACTIVATE, function() {
        //     console.log("取消"),
        //     SoundManager.instance.stopBgMusic()
        // }, this);
        var e = egret.getOption("token")
          , t = "1"
          , i = new HashMap;
        i.put("appSecret", XiaoMi.App_Secret),
        i.put("token", e),
        i.put("version", t);
        var a = XiaoMi.sign2(i)
          , r = {};
        r.token = e,
        r.version = t,
        r.sign = a,
        egret.setTimeout(function() {
            this.addChild(new MainModule)
        }, this, 100),
        onLoaded()
    }
    ,
    t.prototype.resposen = function(e) {
        console.log(e);
        var t = egret.getOption("redirectUrl");
        (null == t || "" == t) && (onLoaded(),
        console.log(e))
    }
    ,
    t
}(eui.UILayer);
__reflect(Main.prototype, "Main");
var Contents = function() {
    function e() {}
    return e.TIP_TEXT_COLOR_GREEN = 58624,
    e.TIP_TEXT_COLOR_RED = 16724016,
    e
}();
__reflect(Contents.prototype, "Contents");
var Global = function() {
    function e() {}
    return e.design_width = 480,
    e.design_height = 900,
    e.map_width = 819,
    e.map_height = 1414,
    e.map_one_height = 54.4,
    e.map_add_width = 31.4,
    e.map_one_width = 80.4,
    e.map_add_height = 22,
    e.start_height = -566,
    e.ip = "127.0.0.1",
    e.serverPath = "https://api.xgame.wali.com/v1/",
    e
}();
__reflect(Global.prototype, "Global");
var HashMap = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e),
    t.prototype.put = function(e, t) {
        this[e] = t
    }
    ,
    t.prototype.get = function(e) {
        return this[e]
    }
    ,
    t.prototype.remove = function(e) {
        var t = this[e];
        return t && delete this[e],
        t
    }
    ,
    t.prototype.contains = function(e) {
        return null != this[e]
    }
    ,
    t.prototype.keys = function() {
        var e = Object.keys(this)
          , t = e.indexOf("_hashCode");
        t > -1 && e.splice(t, 1);
        var t = e.indexOf("$hashCode");
        return t > -1 && e.splice(t, 1),
        e
    }
    ,
    t.prototype.clear = function() {
        for (var e = this.keys(), t = e.length, i = 0; t > i; i++)
            this.remove(e[i])
    }
    ,
    t.prototype.toArray = function() {
        for (var e = [], t = this.keys(), i = t.length, a = 0; i > a; ++a)
            e.push(this.get(t[a]));
        return e
    }
    ,
    t
}(egret.HashObject);
__reflect(HashMap.prototype, "HashMap");
var Message = function() {
    function e() {
        this.msgMap = new HashMap
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return this._instance || (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.add = function(e, t) {
        var i = this.msgMap.get(e);
        i || (i = [],
        this.msgMap.put(e, i)),
        -1 == i.indexOf(t) && i.push(t)
    }
    ,
    e.prototype.remove = function(e, t) {
        var i = this.msgMap.get(e);
        if (i)
            for (var a = i.length, r = 0; a > r; r++)
                i[r] == t && (i[r] = null)
    }
    ,
    e.prototype.send = function(e, t) {
        void 0 === t && (t = null);
        var i = this.msgMap.get(e);
        if (i) {
            for (var a = i.length, r = 0; a > r; )
                i[r] ? (i[r].recvMsg.call(i[r], e, t),
                r++) : (i.splice(r, 1),
                a--);
            0 >= a && this.msgMap.remove(e)
        }
    }
    ,
    e
}();
__reflect(Message.prototype, "Message");
var MsgCMD = function() {
    function e() {}
    return e.SHOW_EXAMPLE_1_MODULE = 1e7,
    e.SHOW_EXAMPLE_2_MODULE = 10000001,
    e.UPDATE_EXAMPLE_CLICK_NUM = 10000002,
    e.MOVIECLIP_PLAY_OVER = 9e7,
    e.MENU_BACK = 11e6,
    e.SHOW_TRAIN_LIGHT = 111e5,
    e.START_GAME = 11111111,
    e.IS_BEGIN = 22222222,
    e.MOVE_WIDTH = 33333333,
    e.GAME_OVER = 44444444,
    e.PLAYER_MOVE = 55555555,
    e.REMOVE_OBJECT = 66666666,
    e.ADD_OBJECT = 77777777,
    e.PLAYER_MOVE_WIDTH = 88888888,
    e.CHANGE_INDEX = 99999999,
    e
}();
__reflect(MsgCMD.prototype, "MsgCMD");
var AnimationCompnent = function(e) {
    function t(t, i) {
        var a = e.call(this) || this;
        return a.aniName = t,
        a.defaultAniName = i,
        a.aniIndex = 0,
        a.aniHash = new HashMap,
        a
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.MOVIECLIP_PLAY_OVER, this),
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this),
        RES.loadGroup(this.aniName)
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.MOVIECLIP_PLAY_OVER:
            this.mc == t && this.playNextAni()
        }
    }
    ,
    t.prototype.onResourceLoadComplete = function(e) {
        if (e.groupName == this.aniName) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            for (var t = RES.getRes(this.aniName + "_ani_json").desc, i = 0; i < t.length; ++i)
                this.aniHash.put(t[i].name, new AnimationDataModel(t[i]));
            this.play(this.defaultAniName)
        }
    }
    ,
    t.prototype.onItemLoadError = function(e) {
        console.warn("Url:" + e.resItem.url + " has failed to load")
    }
    ,
    t.prototype.onResourceLoadError = function(e) {
        console.warn("Group:" + e.groupName + " has failed to load"),
        this.onResourceLoadComplete(e)
    }
    ,
    t.prototype.play = function(e) {
        var t = this.aniHash.get(e);
        null == t ? egret.warn("aniName:" + e + "is not exist") : (this.aniName = t.name,
        this.aniIndex = 0,
        this.playAni(t.getAniByIndex(this.aniIndex), t.getPlayTimeByIndex(this.aniIndex)))
    }
    ,
    t.prototype.playNextAni = function() {
        var e = this.aniHash.get(this.aniName);
        this.aniIndex++;
        var t = e.ani;
        this.aniIndex >= t.length ? (this.aniIndex = 0,
        this.play(this.defaultAniName)) : this.playAni(e.getAniByIndex(this.aniIndex), e.getPlayTimeByIndex(this.aniIndex))
    }
    ,
    t.prototype.playAni = function(e, t) {
        var i = this.mc;
        egret.setTimeout(this.removeDis, this, 20, i),
        this.mc = new MovieClipCompnent(e,!1),
        this.mc.gotoAndPlay(e, t),
        this.addChild(this.mc)
    }
    ,
    t.prototype.removeDis = function(e) {
        null != e && this.contains(e) && (this.removeChild(e),
        e.stop(),
        e = null)
    }
    ,
    t.prototype.getAniName = function() {
        return this.aniName
    }
    ,
    t.prototype.getDefaultAniName = function() {
        return this.defaultAniName
    }
    ,
    t
}(BaseSprite);
__reflect(AnimationCompnent.prototype, "AnimationCompnent", ["IMessage"]);
var AnimationDataModel = function() {
    function e(e) {
        this._name = e.name,
        this._ani = e.ani.split(","),
        this._playTime = [];
        for (var t = e.playTime.split(","), i = 0; i < t.length; ++i)
            this._playTime.push(parseInt(t[i]))
    }
    return Object.defineProperty(e.prototype, "name", {
        get: function() {
            return this._name
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "ani", {
        get: function() {
            return this._ani
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.getAniByIndex = function(e) {
        return 0 > e || e >= this._ani.length ? (egret.warn("getAniByIndex,index不合法:" + e),
        "") : this._ani[e]
    }
    ,
    e.prototype.getPlayTimeByIndex = function(e) {
        return 0 > e || e >= this._playTime.length ? (egret.warn("getPlayTimeByIndex,index不合法:" + e),
        0) : this._playTime[e]
    }
    ,
    e
}();
__reflect(AnimationDataModel.prototype, "AnimationDataModel");
var game;
!function(e) {
    var t = function(e) {
        function t(t, i) {
            var a = e.call(this) || this;
            return a.imageKey = t,
            a.url = i,
            a
        }
        return __extends(t, e),
        t.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            null != this.imageKey && "" != this.imageKey ? RES.getResAsync(this.imageKey, this.completeHandler, this) : null != this.url && "" != this.url ? RES.getResByUrl(this.url, this.completeHandler, this) : egret.warn("game.Image:imageKey或url不合法")
        }
        ,
        t.prototype.setByKey = function(e) {
            return null == e || "" == e ? void egret.warn("game.Image:imageKey不合法") : void RES.getResAsync(this.imageKey, this.completeHandler, this)
        }
        ,
        t.prototype.setByUrl = function(e) {
            return null == e || "" == e ? void egret.warn("game.Image:url不合法") : void RES.getResByUrl(this.url, this.completeHandler, this)
        }
        ,
        t.prototype.completeHandler = function(e, t) {
            return null == e ? void egret.warn("读取资源失败:imageKey:" + this.imageKey + ",url:" + this.url) : void (this.source = e)
        }
        ,
        t
    }(eui.Image);
    e.Image = t,
    __reflect(t.prototype, "game.Image")
}(game || (game = {}));
var game;
!function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.textFlowArr = [],
            t
        }
        return __extends(t, e),
        t.prototype.addTextFlow = function(e, t, i, a, r, s, n) {
            var h = {};
            t && (h.textColor = t),
            i && (h.size = i),
            a && (h.fontFamily = a),
            r && (h.italic = r),
            s && (h.strokeColor = s),
            n && (h.stroke = n),
            this.textFlowArr.push({
                text: e,
                style: h
            }),
            this.textFlow.push({
                text: e,
                style: h
            }),
            this.textFlow = this.textFlowArr
        }
        ,
        t
    }(eui.Label);
    e.Label = t,
    __reflect(t.prototype, "game.Label")
}(game || (game = {}));
var MovieClipCompnent = function(e) {
    function t(t, i) {
        var a = e.call(this) || this;
        return RES.getResAsync(t + "_json", a.loadMcDataHandler, a),
        RES.getResAsync(t + "_png", a.loadTexHandler, a),
        a.aniName = t,
        a.removeAfterComplete = i,
        a.isStop = !1,
        a.playTimes = 1,
        a.frame = 1,
        a.addEventListener(egret.Event.REMOVED_FROM_STAGE, a.onRemoveFromStage, a),
        a
    }
    return __extends(t, e),
    t.prototype.onRemoveFromStage = function(e) {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this),
        this.mc && (this.mc.removeEventListener(egret.Event.COMPLETE, this.completeHandler, this),
        this.mc.stop(),
        this.mc = null)
    }
    ,
    t.prototype.loadMcDataHandler = function(e, t) {
        this.mcData = e,
        this.createMc()
    }
    ,
    t.prototype.loadTexHandler = function(e, t) {
        this.texture = e,
        this.createMc()
    }
    ,
    t.prototype.createMc = function() {
        if (this.mcData && this.texture) {
            var e = new egret.MovieClipDataFactory(this.mcData,this.texture);
            this.mc = new egret.MovieClip(e.generateMovieClipData(this.aniName)),
            this.mc.addEventListener(egret.Event.COMPLETE, this.completeHandler, this),
            this.addChild(this.mc),
            this.isStop ? this.stop() : this.gotoAndPlay(this.frame, this.playTimes)
        }
    }
    ,
    t.prototype.stop = function() {
        this.isStop = !0,
        this.mc && this.mc.stop()
    }
    ,
    t.prototype.gotoAndPlay = function(e, t) {
        void 0 === t && (t = -1),
        this.frame = e,
        this.playTimes = t,
        this.mc && this.mc.gotoAndPlay(e, t)
    }
    ,
    t.prototype.gotoAndStop = function(e) {
        this.mc && this.mc.gotoAndStop(e)
    }
    ,
    t.prototype.completeHandler = function(e) {
        this.removeAfterComplete && this.parent && this.parent.contains(this) && this.parent.removeChild(this),
        Message.instance.send(MsgCMD.MOVIECLIP_PLAY_OVER, this)
    }
    ,
    t
}(egret.Sprite);
__reflect(MovieClipCompnent.prototype, "MovieClipCompnent");
var DebugPlatform = function() {
    function e() {}
    return e.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }
    ,
    e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }
    ,
    e
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]),
window.platform || (window.platform = new DebugPlatform);
var ExampleConfig = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e),
    Object.defineProperty(t, "instnace", {
        get: function() {
            return null == this._instance && (this._instance = new t),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.init = function() {
        this.dataList = [],
        e.prototype.init.call(this, "exampleConfig_txt", ExampleConfigModel, this.dataList)
    }
    ,
    t.prototype.getExampleArr = function() {
        return this.dataList
    }
    ,
    t.prototype.getExamnpleById = function(e) {
        for (var t = 0; t < this.dataList.length; ++t)
            if (parseInt(this.dataList[t].id) == e)
                return this.dataList[t];
        return null
    }
    ,
    t
}(BaseConfig);
__reflect(ExampleConfig.prototype, "ExampleConfig");
var ExampleConfigModel = function() {
    function e(e) {
        this.id = e[0],
        this.name = e[1],
        this.lv = e[2],
        this.dps = e[3]
    }
    return e
}();
__reflect(ExampleConfigModel.prototype, "ExampleConfigModel");
var ExampleDataManager = function() {
    function e() {
        this._clickNum = 0
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "clickNum", {
        get: function() {
            return this._clickNum
        },
        set: function(e) {
            this._clickNum = e,
            Message.instance.send(MsgCMD.UPDATE_EXAMPLE_CLICK_NUM)
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}();
__reflect(ExampleDataManager.prototype, "ExampleDataManager");
var GameData = function() {
    function e() {
        this.startTime = (new Date).getTime()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}();
__reflect(GameData.prototype, "GameData");
var BackGroundService = function() {
    function e() {
        this.mapDataArr = [[1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 3, 3, 3, 1, 1, 1, 3, 1, 1, 1], [1, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 4, 1, 1, 3, 3, 3, 1, 1, 3, 1, 4, 3, 1], [1, 1, 4, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 4], [1, 3, 1, 4, 4, 1, 2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 4, 1, 1, 1, 3, 3, 3, 3, 3, 1], [1, 1, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 4, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1], [1, 1, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1], [1, 3, 3, 3, 3, 1, 4, 4, 4, 1, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1]],
        this.showScore = 0,
        this.isPlaySound = !0,
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        this.childIndex = [],
        this.playerIndex = [],
        this.childIndex1 = [],
        this.mapArr = [],
        this.mapArr1 = [],
        this.playerX = 9,
        this.playerY = 5,
        this.speedArr = [],
        this.speedArr1 = [],
        this.score = 0,
        this.showScore = 0,
        PlayerService.instance.setPlayerLife(1),
        this.mapIndex = 0,
        this.resetMap(),
        this.resetMap1(),
        this.mapArr[this.playerY][this.playerX] = -100,
        this.playerIndex.push([this.playerX + 5, this.playerY, this.mapArr[this.playerY][this.playerX]]),
        this.addMapData(),
        this.addMapData1()
    }
    ,
    e.prototype.resetMap = function() {
        for (var e = 0; e < this.mapDataArr[this.mapIndex].length; e++) {
            this.mapArr[e] = [];
            for (var t = 0; 15 > t; t++)
                this.mapArr[e][t] = this.mapDataArr[this.mapIndex][e];
            if (1 == this.mapDataArr[this.mapIndex][e]) {
                this.mapArr[e][0] = 50;
                for (var i = Math.floor(4 * Math.random() + 1), a = 0; i > a; a++) {
                    var r = Math.floor(14 * Math.random() + 1);
                    this.mapArr[e][r] = 10
                }
            } else if (4 == this.mapDataArr[this.mapIndex][e])
                this.mapArr[e][1] = 80;
            else if (2 == this.mapDataArr[this.mapIndex][e])
                this.mapArr[e][0] = 60;
            else if (3 == this.mapDataArr[this.mapIndex][e]) {
                var s = Math.floor(2 * Math.random());
                if (0 == s)
                    this.mapArr[e][0] = 31;
                else if (this.createShip(e),
                this.mapDataArr[this.mapIndex][e - 1]) {
                    if (3 == this.mapDataArr[this.mapIndex][e - 1] && 31 != this.mapArr[e - 1][0]) {
                        for (var n = !1, h = 1; 15 > h; h++)
                            30 == this.mapArr[e][h] && 30 == this.mapArr[e - 1][h] && (n = !0);
                        0 == n && this.createShip(e)
                    }
                } else {
                    for (var n = !1, h = 1; 15 > h; h++)
                        30 == this.mapArr[e][h] && (n = !0);
                    0 == n && this.createShip(e)
                }
            }
        }
    }
    ,
    e.prototype.resetMap1 = function() {
        for (var e = 0; e < this.mapDataArr[this.mapIndex].length; e++) {
            this.mapArr1[e] = [];
            for (var t = 0; 15 > t; t++)
                this.mapArr1[e][t] = this.mapDataArr[this.mapIndex][e];
            if (1 == this.mapDataArr[this.mapIndex][e]) {
                this.mapArr1[e][0] = 50;
                for (var i = Math.floor(4 * Math.random() + 1), a = 0; i > a; a++) {
                    var r = Math.floor(14 * Math.random() + 1);
                    this.mapArr1[e][r] = 10
                }
            } else if (2 == this.mapDataArr[this.mapIndex][e])
                this.mapArr1[e][0] = 60;
            else if (4 == this.mapDataArr[this.mapIndex][e])
                this.mapArr1[e][1] = 80;
            else if (3 == this.mapDataArr[this.mapIndex][e]) {
                var s = Math.floor(2 * Math.random());
                if (0 == s)
                    this.mapArr1[e][0] = 31;
                else if (this.createShip1(e),
                this.mapDataArr[this.mapIndex][e - 1]) {
                    if (3 == this.mapDataArr[this.mapIndex][e - 1] && 31 != this.mapArr1[e - 1][0]) {
                        for (var n = !1, h = 1; 15 > h; h++)
                            30 == this.mapArr1[e][h] && 30 == this.mapArr1[e - 1][h] && (n = !0);
                        0 == n && this.createShip1(e)
                    }
                } else {
                    for (var n = !1, h = 1; 15 > h; h++)
                        30 == this.mapArr1[e][h] && (n = !0);
                    0 == n && this.createShip1(e)
                }
            }
        }
    }
    ,
    e.prototype.createShip1 = function(e) {
        for (var t = 1; 15 > t; t++) {
            var i = Math.floor(100 * Math.random() + 1);
            i >= 40 && (this.mapArr1[e][t] = 30)
        }
    }
    ,
    e.prototype.createShip = function(e) {
        for (var t = 1; 15 > t; t++) {
            var i = Math.floor(100 * Math.random() + 1);
            i >= 40 && (this.mapArr[e][t] = 30)
        }
    }
    ,
    e.prototype.addMapData = function() {
        this.childIndex = [],
        this.speedArr = [];
        for (var e = this.mapDataArr[this.mapIndex].length - 1; e >= 0; e--)
            for (var t = 0; 15 > t; t++)
                if (0 == t) {
                    if (1 == this.mapDataArr[this.mapIndex][e] && this.childIndex.push([0, e, 50]),
                    60 == this.mapArr[e][t]) {
                        var i = Math.floor(2 * Math.random())
                          , a = 0;
                        a = 0 == i ? Math.floor(100 * (1 * Math.random() + 1)) / 100 : Math.floor(100 * (1 * -Math.random() - 1)) / 100,
                        this.childIndex.push([t, e, this.mapArr[e][t], a])
                    }
                    if (31 == this.mapArr[e][t]) {
                        var i = Math.floor(2 * Math.random())
                          , a = 0;
                        a = this.mapArr[e + 1][t] && 31 == this.mapArr[e + 1][t] ? this.childIndex[this.childIndex.length - 1][3] >= 0 ? Math.floor(10 * (.5 * -Math.random() - 1.5)) / 10 : Math.floor(10 * (.5 * Math.random() + 1.5)) / 10 : 0 == i ? Math.floor(10 * (.5 * Math.random() + 1.5)) / 10 : Math.floor(10 * (.5 * -Math.random() - 1.5)) / 10,
                        this.childIndex.push([t, e, this.mapArr[e][t], a]),
                        this.speedArr.push([e, a])
                    }
                } else if (10 == this.mapArr[e][t] && this.childIndex.push([t + 5, e, this.mapArr[e][t], -1]),
                30 == this.mapArr[e][t] && this.childIndex.push([t + 5, e, this.mapArr[e][t]]),
                80 == this.mapArr[e][t]) {
                    var i = Math.floor(2 * Math.random())
                      , a = 0;
                    a = 0 == i ? Math.floor(100 * (1 * Math.random() + 5)) / 100 : Math.floor(100 * (1 * -Math.random() - 5)) / 100,
                    this.childIndex.push([t, e, this.mapArr[e][t], a])
                }
    }
    ,
    e.prototype.addMapData1 = function() {
        this.childIndex1 = [],
        this.speedArr1 = [];
        for (var e = this.mapDataArr[this.mapIndex].length - 1; e >= 0; e--)
            for (var t = 0; 15 > t; t++)
                if (0 == t) {
                    if (1 == this.mapDataArr[this.mapIndex][e] && this.childIndex1.push([0, e, 50]),
                    60 == this.mapArr1[e][t]) {
                        var i = Math.floor(2 * Math.random())
                          , a = 0;
                        a = 0 == i ? Math.floor(100 * (1 * Math.random() + 1)) / 100 : Math.floor(100 * (1 * -Math.random() - 1)) / 100,
                        this.childIndex1.push([t, e, this.mapArr1[e][t], a])
                    }
                    if (31 == this.mapArr1[e][t]) {
                        var i = Math.floor(2 * Math.random())
                          , a = 0;
                        a = this.mapArr1[e + 1][t] && 31 == this.mapArr1[e + 1][t] ? this.childIndex1[this.childIndex1.length - 1][3] >= 0 ? Math.floor(10 * (.5 * -Math.random() - 1.5)) / 10 : Math.floor(10 * (.5 * Math.random() + 1.5)) / 10 : 0 == i ? Math.floor(10 * (.5 * Math.random() + 1.5)) / 10 : Math.floor(10 * (.5 * -Math.random() - 1.5)) / 10,
                        this.childIndex1.push([t, e, this.mapArr1[e][t], a]),
                        this.speedArr1.push([e, a])
                    }
                } else if (10 == this.mapArr1[e][t] && this.childIndex1.push([t + 5, e, this.mapArr1[e][t]]),
                30 == this.mapArr1[e][t] && this.childIndex1.push([t + 5, e, this.mapArr1[e][t]]),
                80 == this.mapArr1[e][t]) {
                    var i = Math.floor(2 * Math.random())
                      , a = 0;
                    a = 0 == i ? Math.floor(100 * (1 * Math.random() + 5)) / 100 : Math.floor(100 * (1 * -Math.random() - 5)) / 100,
                    this.childIndex1.push([t, e, this.mapArr1[e][t], a])
                }
    }
    ,
    e.prototype.reset = function(e) {
        switch (e) {
        case 0:
            this.resetMap(),
            this.addMapData();
            break;
        case 1:
            this.resetMap1(),
            this.addMapData1()
        }
    }
    ,
    Object.defineProperty(e.prototype, "MapArr", {
        get: function() {
            return this.mapArr
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setMapArr = function(e, t, i, a) {
        var r = "";
        r = a % 2 == 0 ? "" : "1",
        t >= 26 || -1 >= t || (t + 26 * a == this.playerY && i == this.playerX && -1 == e && Message.instance.send(MsgCMD.PLAYER_MOVE, 6),
        this["mapArr" + r][t][i] = e)
    }
    ,
    Object.defineProperty(e.prototype, "ChildIndex", {
        get: function() {
            return this.childIndex
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "PlayerIndex", {
        get: function() {
            return this.playerIndex
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "MapArr1", {
        get: function() {
            return this.mapArr1
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "ChildIndex1", {
        get: function() {
            return this.childIndex1
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "PlayerX", {
        get: function() {
            return this.playerX
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setPlayerX = function(e) {
        this.playerX += e
    }
    ,
    e.prototype.setMapIndex = function(e) {
        this.mapIndex = e
    }
    ,
    Object.defineProperty(e.prototype, "PlayerY", {
        get: function() {
            return this.playerY
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.IsCrash = function(t) {
        var i = ""
          , a = 0;
        switch (a = this.playerY % 26,
        i = Math.floor(this.playerY / 26) % 2 == 0 ? "" : "1",
        t) {
        case 1:
            if (25 == a) {
                if ("" == i) {
                    switch (this.mapArr1[0][this.playerX]) {
                    case -1:
                        break;
                    case 31:
                        break;
                    case 10:
                        return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                        1
                    }
                    this.IsCrashOver(i)
                } else if ("1" == i) {
                    switch (this.mapArr[0][this.playerX]) {
                    case -1:
                        break;
                    case 10:
                        return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                        1
                    }
                    this.IsCrashOver(i)
                }
            } else {
                switch (this["mapArr" + i][a + 1][this.playerX]) {
                case -1:
                    break;
                case 10:
                    return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                    1
                }
                this.IsCrashOver(i)
            }
            this.playerY++,
            this.score++,
            this.showScore < this.score && this.showScore++;
            break;
        case 2:
            if (0 == a) {
                if ("" == i) {
                    switch (this.mapArr1[25][this.playerX]) {
                    case -1:
                        break;
                    case 10:
                        return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                        1
                    }
                    this.IsCrashOver(i)
                } else if ("1" == i) {
                    switch (this.mapArr[25][this.playerX]) {
                    case -1:
                        break;
                    case 10:
                        return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                        1
                    }
                    this.IsCrashOver(i)
                }
            } else {
                switch (this["mapArr" + i][a - 1][this.playerX]) {
                case -1:
                    break;
                case 10:
                    return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                    1
                }
                this.IsCrashOver(i)
            }
            this.playerY--,
            this.score--;
            break;
        case 3:
            if (this.playerX - 1 == 0)
                return 1;
            switch (this["mapArr" + i][a][this.playerX - 1]) {
            case -1:
                break;
            case 10:
                return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                1
            }
            this.IsCrashOver(i),
            this.playerX--;
            break;
        case 4:
            if (this.playerX + 1 == 15)
                return 1;
            switch (this["mapArr" + i][a][this.playerX + 1]) {
            case -1:
                break;
            case 10:
                return e.instance.IsPlaySound && SoundManager.instance.playEffect("woodHit_mp3"),
                1
            }
            this.IsCrashOver(i),
            this.playerX++
        }
        return 0
    }
    ,
    e.prototype.IsCrashOver = function(e) {
        egret.setTimeout(function() {
            switch (this["mapArr" + e][this.playerY % 26][this.playerX]) {
            case -1:
                Message.instance.send(MsgCMD.PLAYER_MOVE, 6);
                break;
            case 3:
                Message.instance.send(MsgCMD.PLAYER_MOVE, 5);
                break;
            case 31:
                for (var t = 0; t < this["speedArr" + e].length; t++)
                    if (this["speedArr" + e][t][0] == this.playerY % 26) {
                        Message.instance.send(MsgCMD.PLAYER_MOVE_WIDTH, {
                            speed: this["speedArr" + e][t][1],
                            addY: this.playerY % 26
                        });
                        break
                    }
            }
        }, this, 200)
    }
    ,
    Object.defineProperty(e.prototype, "ShowScore", {
        get: function() {
            return this.showScore
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsPlaySound", {
        get: function() {
            return this.isPlaySound
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setIsPlaySound = function(e) {
        this.isPlaySound = e
    }
    ,
    e.maxScore = 0,
    e
}();
__reflect(BackGroundService.prototype, "BackGroundService");
var CarModel = function(e) {
    function t(t) {
        var i = e.call(this) || this;
        switch (t) {
        case 0:
            i.texture = "car_blue_02_png",
            i.anchorOffsetX = 60,
            i.anchorOffsetY = 45;
            break;
        case 1:
            i.texture = "car_pink_02_png",
            i.anchorOffsetX = 60,
            i.anchorOffsetY = 45;
            break;
        case 2:
            i.texture = "feng_01_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 3:
            i.texture = "hong_01_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 4:
            i.texture = "huang_01_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 5:
            i.texture = "lan_01_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 6:
            i.texture = "paoche_1_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 7:
            i.texture = "paoche_2_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 8:
            i.texture = "paoche_3_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 50;
            break;
        case 9:
            i.texture = "z_1_png",
            i.anchorOffsetX = 75,
            i.anchorOffsetY = 70;
            break;
        case 10:
            i.texture = "z_2_png",
            i.anchorOffsetX = 75,
            i.anchorOffsetY = 70;
            break;
        case 11:
            i.texture = "z_3_png",
            i.anchorOffsetX = 75,
            i.anchorOffsetY = 70;
            break;
        case 12:
            i.texture = "che_1_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 125;
            break;
        case 13:
            i.texture = "bus_blue_02_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 125;
            break;
        case 14:
            i.texture = "bus_white_02_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 125;
            break;
        case 15:
            i.texture = "bus_yellow_02_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 125;
            break;
        case 16:
            i.texture = "che_01_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 150;
            break;
        case 17:
            i.texture = "che_2_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 125;
            break;
        case 18:
            i.texture = "che_3_png",
            i.anchorOffsetX = 145,
            i.anchorOffsetY = 125;
            break;
        case 19:
            i.texture = "kache_1_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 115;
            break;
        case 20:
            i.texture = "kache_3_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 115;
            break;
        case 34:
            i.texture = "che_6_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 130;
            break;
        case 35:
            i.texture = "bus_blue_01_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 120;
            break;
        case 36:
            i.texture = "bus_white_01_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 120;
            break;
        case 37:
            i.texture = "bus_yellow_01_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 120;
            break;
        case 38:
            i.texture = "che_02_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 145;
            break;
        case 39:
            i.texture = "che_4_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 130;
            break;
        case 40:
            i.texture = "che_5_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 130;
            break;
        case 21:
            i.texture = "car_blue_01_png",
            i.anchorOffsetX = 60,
            i.anchorOffsetY = 45;
            break;
        case 22:
            i.texture = "car_pink_01_png",
            i.anchorOffsetX = 60,
            i.anchorOffsetY = 45;
            break;
        case 23:
            i.texture = "chuzuche_02_png",
            i.anchorOffsetX = 65,
            i.anchorOffsetY = 45;
            break;
        case 24:
            i.texture = "f_1_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 65;
            break;
        case 25:
            i.texture = "f_2_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 65;
            break;
        case 26:
            i.texture = "f_3_png",
            i.anchorOffsetX = 70,
            i.anchorOffsetY = 65;
            break;
        case 27:
            i.texture = "feng_02_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 45;
            break;
        case 28:
            i.texture = "hong_02_png",
            i.anchorOffsetX = 65,
            i.anchorOffsetY = 45;
            break;
        case 29:
            i.texture = "huang_02_png",
            i.anchorOffsetX = 65,
            i.anchorOffsetY = 45;
            break;
        case 30:
            i.texture = "lan_02_png",
            i.anchorOffsetX = 65,
            i.anchorOffsetY = 45;
            break;
        case 31:
            i.texture = "paoche_4_png",
            i.anchorOffsetX = 85,
            i.anchorOffsetY = 60;
            break;
        case 32:
            i.texture = "paoche_5_png",
            i.anchorOffsetX = 85,
            i.anchorOffsetY = 60;
            break;
        case 33:
            i.texture = "paoche_6_png",
            i.anchorOffsetX = 85,
            i.anchorOffsetY = 60;
            break;
        case 41:
            i.texture = "che_6_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 130;
            break;
        case 42:
            i.texture = "kache_2_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 110;
            break;
        case 43:
            i.texture = "kache_4_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 110;
            break;
        case 44:
            i.texture = "huoche_png",
            i.anchorOffsetX = 170,
            i.anchorOffsetY = 120;
            break;
        case 45:
            i.texture = "huoche_2_png",
            i.anchorOffsetX = 140,
            i.anchorOffsetY = 112;
            break;
        case 46:
            i.texture = "huoche_3_png",
            i.anchorOffsetX = 150,
            i.anchorOffsetY = 115
        }
        return i
    }
    return __extends(t, e),
    t
}(ObjectModel);
__reflect(CarModel.prototype, "CarModel");
var CarService = function() {
    function e() {
        this.carModel = [],
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        for (var e = 0; 47 > e; e++)
            this.carModel.push(new CarModel(e))
    }
    ,
    e.prototype.getCarDataModel = function(e) {
        return this.carModel[e]
    }
    ,
    e
}();
__reflect(CarService.prototype, "CarService");
var HttpMessage = function() {
    function e() {
        this.serverTime = 0
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return this._instance || (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.send = function(e, t, i, a) {
        function r(e) {
            e ? null != e.code && 200 == e.code ? i.call(a, e.data) : egret.log(e.msg) : egret.log("data is null")
        }
        t = t || {};
        var s = new egret.HttpRequest;
        s.addEventListener(egret.Event.COMPLETE, function(e) {
            r(JSON.parse(e.target.response))
        }, this),
        s.addEventListener(egret.IOErrorEvent.IO_ERROR, function(e) {
            console.log("HTTP_IO_ERROR")
        }, this);
        var n = ""
          , h = "";
        for (var o in t)
            n += t[o]instanceof Array ? h + o + "=" + JSON.stringify(t[o]) : h + o + "=" + t[o],
            h = "&";
        s.open(Global.serverPath + e, egret.HttpMethod.POST),
        s.responseType = egret.HttpResponseType.TEXT,
        s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        s.send(n),
        console.log("request:" + Global.serverPath + e + "——paramStr:" + n)
    }
    ,
    e.prototype.getServerTime = function() {
        return this.serverTime + Math.floor(egret.getTimer() / 1e3)
    }
    ,
    e
}();
__reflect(HttpMessage.prototype, "HttpMessage");
var HttpMsgCMD = function() {
    function e() {}
    return e.USER_GAME_START = "suotuo/userinfo",
    e.USER_GAME_OVER = "suotuo/battleresult",
    e.USER_LOGIN = "user/login",
    e
}();
__reflect(HttpMsgCMD.prototype, "HttpMsgCMD");
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.createView(),
        t
    }
    return __extends(t, e),
    t.prototype.createView = function() {
        this.textField = new egret.TextField,
        this.addChild(this.textField),
        this.textField.y = 300,
        this.textField.width = 480,
        this.textField.height = 100,
        this.textField.textAlign = "center"
    }
    ,
    t.prototype.onProgress = function(e, t) {
        this.textField.text = "Loading..." + e + "/" + t
    }
    ,
    t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var PlayerModel = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.anchorOffsetX = 65,
        t.anchorOffsetY = 52,
        t.texture = "yd_1_png",
        t
    }
    return __extends(t, e),
    t
}(ObjectModel);
__reflect(PlayerModel.prototype, "PlayerModel");
var PlayerService = function() {
    function e() {
        this.playerLife = 0,
        this.texRight = [],
        this.texLeft = [],
        this.texUp = [],
        this.texDown = [],
        this.tex = [],
        this.texWaiter = [],
        this.playerIndex = 1,
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        this.userPlayer = new PlayerModel;
        var e = new egret.Bitmap;
        e.texture = RES.getRes("hero_png");
        var t = new egret.Bitmap;
        t.texture = RES.getRes("hero1_png");
        var i = new egret.Bitmap;
        i.texture = RES.getRes("hero2_png");
        var a = new egret.Bitmap;
        a.texture = RES.getRes("hero3_png");
        var r = new egret.Bitmap;
        r.texture = RES.getRes("heroLogo_png");
        var s = new egret.Bitmap;
        s.texture = RES.getRes("watersplash_png");
        for (var n = 0; 18 > n; n++)
            this.texRight[n] = new egret.RenderTexture,
            this.texRight[n].drawToTexture(e, new egret.Rectangle(10 + n * e.width / 18,0,e.width / 18,140));
        for (var n = 0; 18 > n; n++)
            this.texLeft[n] = new egret.RenderTexture,
            this.texLeft[n].drawToTexture(t, new egret.Rectangle(10 + n * t.width / 18,0,t.width / 18,140));
        for (var n = 0; 18 > n; n++)
            this.texUp[n] = new egret.RenderTexture,
            this.texUp[n].drawToTexture(i, new egret.Rectangle(10 + n * i.width / 18,0,i.width / 18,140));
        for (var n = 0; 18 > n; n++)
            this.texDown[n] = new egret.RenderTexture,
            this.texDown[n].drawToTexture(a, new egret.Rectangle(10 + n * a.width / 18,0,a.width / 18,140));
        for (var n = 0; 28 > n; n++) {
            var h = Math.floor(n / 14)
              , o = n % 14;
            this.tex[n] = new egret.RenderTexture,
            this.tex[n].drawToTexture(r, new egret.Rectangle(10 + o * r.width / 14,h * r.height / 2,r.width / 14,140))
        }
        for (var n = 0; 20 > n; n++) {
            var h = Math.floor(n / 5)
              , o = n % 5;
            this.texWaiter[n] = new egret.RenderTexture,
            this.texWaiter[n].drawToTexture(s, new egret.Rectangle(o * s.width / 5,h * s.height / 8,s.width / 5,s.height / 8))
        }
    }
    ,
    Object.defineProperty(e.prototype, "UserPlayer", {
        get: function() {
            return this.userPlayer
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "PlayerLife", {
        get: function() {
            return this.playerLife
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setPlayerLife = function(e) {
        this.playerLife += e
    }
    ,
    Object.defineProperty(e.prototype, "PlayerIndex", {
        get: function() {
            return this.playerIndex
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setPlayerIndex = function(e) {
        this.playerIndex = e
    }
    ,
    e
}();
__reflect(PlayerService.prototype, "PlayerService");
var RandomTreeModel = function(e) {
    function t(t) {
        var i = e.call(this) || this;
        switch (t) {
        case 0:
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 15,
            i.texture = "wugui_png";
            break;
        case 1:
            i.texture = "shu_4_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 110;
            break;
        case 2:
            i.texture = "shu_5_png",
            i.anchorOffsetX = 45,
            i.anchorOffsetY = 85;
            break;
        case 3:
            i.texture = "shu_2_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 125;
            break;
        case 4:
            i.texture = "shitou_01_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 40;
            break;
        case 5:
            i.texture = "shitou_02_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 40;
            break;
        case 6:
            i.texture = "shitou_03_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 40;
            break;
        case 7:
            i.texture = "shu_1_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 75;
            break;
        case 8:
            i.texture = "shu_3_png",
            i.anchorOffsetX = 50,
            i.anchorOffsetY = 125;
            break;
        case 9:
            i.texture = "shugan_png",
            i.anchorOffsetX = 40,
            i.anchorOffsetY = 33
        }
        return i
    }
    return __extends(t, e),
    t
}(ObjectModel);
__reflect(RandomTreeModel.prototype, "RandomTreeModel");
var RandomTreeService = function() {
    function e() {
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        this.arr = [];
        for (var e = 0; 11 > e; e++) {
            var t = new RandomTreeModel(e);
            this.arr.push(t)
        }
    }
    ,
    e.prototype.getRandomMapTree = function(e) {
        return this.arr[e]
    }
    ,
    e
}();
__reflect(RandomTreeService.prototype, "RandomTreeService");
var MoveShipModel = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.anchorOffsetX = 81.5,
        t.anchorOffsetY = 28.5,
        t.speed = 1,
        t.texture = "ban_1_png",
        t
    }
    return __extends(t, e),
    t
}(ObjectModel);
__reflect(MoveShipModel.prototype, "MoveShipModel");
var MoveShipService = function() {
    function e() {
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        this.moveShipModel = new MoveShipModel
    }
    ,
    Object.defineProperty(e.prototype, "MoveShipDataModel", {
        get: function() {
            return this.moveShipModel
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}();
__reflect(MoveShipService.prototype, "MoveShipService");
var TrainLightModel = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.anchorOffsetX = 30,
        t.anchorOffsetY = 13,
        t.texture = "xinhaodeng_1_png",
        t
    }
    return __extends(t, e),
    t
}(ObjectModel);
__reflect(TrainLightModel.prototype, "TrainLightModel");
var TrainLightService = function() {
    function e() {
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        this.trainLightModel = new TrainLightModel
    }
    ,
    Object.defineProperty(e.prototype, "trainLightDataModel", {
        get: function() {
            return this.trainLightModel
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}();
__reflect(TrainLightService.prototype, "TrainLightService");
var TreeModel = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.anchorOffsetX = 25,
        t.anchorOffsetY = 55,
        t.texture = "paishu_png",
        t
    }
    return __extends(t, e),
    t
}(ObjectModel);
__reflect(TreeModel.prototype, "TreeModel");
var TreeService = function() {
    function e() {
        this.init()
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        this.mapTree = new TreeModel
    }
    ,
    Object.defineProperty(e.prototype, "MapTree", {
        get: function() {
            return this.mapTree
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}();
__reflect(TreeService.prototype, "TreeService");
var SoundManager = function() {
    function e() {
        this.volume = 1
    }
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.startBgMusic = function(e) {
        this.stopBgMusic();
        var t = RES.getRes(e);
        this.loadBgMusicHandler(t, "")
    }
    ,
    e.prototype.loadBgMusicHandler = function(e, t) {
        this.stopBgMusic(),
        this.bgSound = e,
        this.bgSound.type = egret.Sound.MUSIC,
        this.bgSoundChannel = this.bgSound.play(0, 0),
        this.bgSoundChannel.volume = this.volume,
        this.bgSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this)
    }
    ,
    e.prototype.setVolume = function(e) {
        this.volume = e
    }
    ,
    e.prototype.stopBgMusic = function() {
        this.bgSound && (this.bgSound = null),
        this.bgSoundChannel && (this.bgSoundChannel.stop(),
        this.bgSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
        this.bgSoundChannel = null)
    }
    ,
    e.prototype.onSoundComplete = function(e) {
        egret.log("bgSoundComplete")
    }
    ,
    e.prototype.playEffect = function(e) {
        RES.getResAsync(e, this.loadEffectHandler, this)
    }
    ,
    e.prototype.loadEffectHandler = function(e, t) {
        e.type = egret.Sound.EFFECT,
        e.play(0, 1)
    }
    ,
    e
}();
__reflect(SoundManager.prototype, "SoundManager");
var TestSignUtil = function() {
    function e() {}
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.test = function() {
        var e = {};
        e.score = BackGroundService.instance.ShowScore;
        var t = egret.getOption("token")
          , i = "1"
          , a = JSON.stringify(e)
          , r = egret.getOption("X_Transparent");
        r = decodeURIComponent(r),
        t = decodeURIComponent(t);
        var s = new HashMap;
        s.put("X_Transparent", r),
        s.put("appSecret", XiaoMi.App_Secret),
        s.put("result", a),
        s.put("token", t),
        s.put("version", i);
        var n = XiaoMi.sign2(s)
          , h = {};
        h.token = t,
        h.version = i,
        h.result = a,
        h.X_Transparent = r,
        h.sign = n
    }
    ,
    e
}();
__reflect(TestSignUtil.prototype, "TestSignUtil");
var TimeUtil = function() {
    function e() {}
    return e.format = function(e) {
        var t = e % 60
          , i = Math.floor(e / 60 % 60)
          , a = Math.floor(e / 3600)
          , r = i > 9 ? i + "" : "0" + i
          , s = t > 9 ? t + "" : "0" + t
          , n = a > 9 ? a + "" : "0" + a;
        return n + ":" + r + ":" + s
    }
    ,
    e
}();
__reflect(TimeUtil.prototype, "TimeUtil");
var MainModule = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.viewSp = new egret.Sprite,
        t.addChild(t.viewSp),
        t.firstSp = new egret.Sprite,
        t.addChild(t.firstSp),
        t.firstSp.addChild(PanelController.instance),
        t.firstSp.addChild(TipTextController.instance);
        var i;
        return i = egret.setTimeout(function() {
            this.viewSp.addChild(new BackGroundModule),
            egret.clearTimeout(i)
        }, t, 250),
        PanelController.instance.add(new GameMenu),
        t.addMessage(MsgCMD.GAME_OVER, t),
        t.addMessage(MsgCMD.SHOW_EXAMPLE_1_MODULE, t),
        t.addMessage(MsgCMD.START_GAME, t),
        t
    }
    return __extends(t, e),
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.SHOW_EXAMPLE_1_MODULE:
            this.removeAll(),
            this.addMessage(MsgCMD.GAME_OVER, this),
            BackGroundService.instance.init(),
            PanelController.instance.add(new GameMenu);
            var i;
            i = egret.setTimeout(function() {
                this.viewSp.addChild(new BackGroundModule),
                egret.clearTimeout(i)
            }, this, 250);
            break;
        case MsgCMD.SHOW_EXAMPLE_2_MODULE:
            this.removeAll();
            break;
        case MsgCMD.GAME_OVER:
            Message.instance.send(MsgCMD.PLAYER_MOVE_WIDTH, {
                speed: 0
            });
            var i;
            i = egret.setTimeout(function() {
                2 == this.firstSp.numChildren && (this.firstSp.addChild(new GameOver),
                Message.instance.remove(MsgCMD.GAME_OVER, this)),
                egret.clearTimeout(i)
            }, this, 500);
            break;
        case MsgCMD.START_GAME:
            var i;
            i = egret.setTimeout(function() {
                this.viewSp.addChild(new BackGroundModule),
                egret.clearTimeout(i)
            }, this, 250),
            PanelController.instance.add(new GameMenu)
        }
    }
    ,
    t.prototype.removeAll = function() {
        for (var e = this.viewSp.numChildren, t = 0; e > t; ++t)
            this.viewSp.removeChildAt(t)
    }
    ,
    t
}(BaseSprite);
__reflect(MainModule.prototype, "MainModule", ["IMessage"]);
var PanelController = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.panelArr = [],
        t.addListener(t, egret.Event.ADDED_TO_STAGE, t.onAddToStage, t),
        t
    }
    return __extends(t, e),
    Object.defineProperty(t, "instance", {
        get: function() {
            return this._instance || (this._instance = new t),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.onAddToStage = function(e) {}
    ,
    t.prototype.add = function(e) {
        -1 == this.panelArr.indexOf(e) && (this.addChild(e),
        this.panelArr.push(e))
    }
    ,
    t.prototype.remove = function(e) {
        var t = this.panelArr.indexOf(e);
        -1 != t && (this.panelArr.splice(t, 1),
        this.removeChild(e),
        e = null)
    }
    ,
    t.prototype.removeAll = function() {
        for (var e = 0; e < this.panelArr.length; ++e)
            this.removeChild(this.panelArr[e]),
            this.panelArr[e] = null;
        this.panelArr = []
    }
    ,
    t.prototype.hide = function(e) {
        for (var t = 0; t < this.panelArr.length; ++t)
            this.panelArr[t]instanceof e && (this.panelArr[t].visible = !1)
    }
    ,
    t.prototype.show = function(e) {
        for (var t = 0; t < this.panelArr.length; ++t)
            this.panelArr[t]instanceof e && (this.panelArr[t].visible = !0)
    }
    ,
    t
}(BaseSprite);
__reflect(PanelController.prototype, "PanelController");
var BackGroundModule = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.speed = 0,
        t.skinName = "BackGroundSkin",
        t.isDown = !1,
        t.isBegin = !1,
        t.isCanDown = !0,
        t.mapIndex = 1,
        t.temp = 0,
        t.bufferState = 0,
        t.playerService = BackGroundService.instance.PlayerIndex,
        t.mapService = BackGroundService.instance.ChildIndex,
        t.map = BackGroundService.instance.MapArr,
        t.mapService1 = BackGroundService.instance.ChildIndex1,
        t.map1 = BackGroundService.instance.MapArr1,
        t.childArr = new Array,
        t.childArr1 = new Array,
        t.playerdArr = new Array,
        t
    }
    return __extends(t, e),
    t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this),
        this.timer = new egret.Timer(30),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.start(),
        this.init()
    }
    ,
    t.prototype.init = function() {
        BackGroundService.instance.IsPlaySound && (SoundManager.instance.setVolume(.5),
        SoundManager.instance.startBgMusic("bgmIngame_hi_mp3"));
        var e = new PlayerModule(this.playerService[0][0],this.playerService[0][1]);
        this.exml_contentGroup0.addChild(e),
        this.playerdArr.push(e),
        this.resetMap(0),
        this.resetMap1(1),
        egret.Tween.get(this, {
            loop: !0
        }).wait(500).call(function() {
            this.bufferZ()
        }, this)
    }
    ,
    t.prototype.resetMap = function(e) {
        for (var t = 0; t < this.childArr.length; t++)
            this.exml_contentGroup0.removeChild(this.childArr[t]);
        this.childArr = [];
        for (var t = 0; t < this.mapService.length; t++) {
            var i = null;
            switch (this.mapService[t][2]) {
            case 50:
                i = new TreeModule(this.mapService[t][1],e);
                break;
            case 10:
                i = new RandomTreeModule(this.mapService[t][0],this.mapService[t][1],Math.floor(9 * Math.random() + 1),e);
                break;
            case 30:
                i = new RandomTreeModule(this.mapService[t][0],this.mapService[t][1],0,e);
                break;
            case 31:
                i = new MoveShipModule(this.mapService[t][0],this.mapService[t][1],e,this.mapService[t][3]);
                break;
            case 60:
                i = new CarModule(this.mapService[t][0],this.mapService[t][1],e,this.mapService[t][3]);
                break;
            case 80:
                i = new TrainModule(this.mapService[t][0],this.mapService[t][1],e,this.mapService[t][3])
            }
            if (this.exml_contentGroup0.addChild(i),
            this.childArr.push(i),
            80 == this.mapService[t][2]) {
                var a = null;
                a = new TrainLightModule(0,this.mapService[t][1],e),
                this.exml_contentGroup0.addChild(a),
                this.childArr.push(a)
            }
        }
    }
    ,
    t.prototype.resetMap1 = function(e) {
        for (var t = 0; t < this.childArr1.length; t++)
            this.exml_contentGroup0.removeChild(this.childArr1[t]);
        this.childArr1 = [];
        for (var t = 0; t < this.mapService1.length; t++) {
            var i = null;
            switch (this.mapService1[t][2]) {
            case 50:
                i = new TreeModule(this.mapService1[t][1],e);
                break;
            case 10:
                i = new RandomTreeModule(this.mapService1[t][0],this.mapService1[t][1],Math.floor(9 * Math.random() + 1),e);
                break;
            case 30:
                i = new RandomTreeModule(this.mapService1[t][0],this.mapService1[t][1],0,e);
                break;
            case 31:
                i = new MoveShipModule(this.mapService1[t][0],this.mapService1[t][1],e,this.mapService1[t][3]);
                break;
            case 60:
                i = new CarModule(this.mapService1[t][0],this.mapService1[t][1],e,this.mapService1[t][3]);
                break;
            case 80:
                i = new TrainModule(this.mapService1[t][0],this.mapService1[t][1],e,this.mapService1[t][3])
            }
            if (this.exml_contentGroup0.addChild(i),
            this.childArr1.push(i),
            80 == this.mapService1[t][2]) {
                var a = null;
                a = new TrainLightModule(0,this.mapService1[t][1],e),
                this.exml_contentGroup0.addChild(a),
                this.childArr1.push(a)
            }
        }
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.REMOVE_OBJECT:
            switch (t % 2) {
            case 0:
                for (var i = 0; i < this.childArr.length; i++)
                    0 == this.childArr[i].vis && (this.exml_contentGroup0.removeChild(this.childArr[i]),
                    this.childArr.splice(i, 1),
                    i--);
                break;
            case 1:
                for (var i = 0; i < this.childArr1.length; i++)
                    0 == this.childArr1[i].vis && (this.exml_contentGroup0.removeChild(this.childArr1[i]),
                    this.childArr1.splice(i, 1),
                    i--)
            }
            break;
        case MsgCMD.ADD_OBJECT:
            var a = null;
            if (t[3] % 2 == 1) {
                switch (t[0]) {
                case 0:
                    a = new CarModule(t[1],t[2],t[3],t[4]);
                    break;
                case 1:
                    a = new MoveShipModule(t[1],t[2],t[3],t[4])
                }
                this.exml_contentGroup0.addChild(a),
                this.childArr1.push(a)
            } else {
                switch (t[0]) {
                case 0:
                    a = new CarModule(t[1],t[2],t[3],t[4]);
                    break;
                case 1:
                    a = new MoveShipModule(t[1],t[2],t[3],t[4]);
                    break;
                case 2:
                    a = new TrainModule(t[1],t[2],t[3],t[4])
                }
                this.exml_contentGroup0.addChild(a),
                this.childArr.push(a)
            }
            break;
        case MsgCMD.PLAYER_MOVE_WIDTH:
            this.speed = -Math.floor(10 * t.speed) / 10;
            break;
        case MsgCMD.PLAYER_MOVE:
            if (6 == t || 5 == t) {
                egret.clearTimeout(this.setTimeNum),
                this.isCanDown = !1;
                var r = 0;
                r = egret.setTimeout(function() {
                    this.isCanDown = !0,
                    egret.clearTimeout(r)
                }, this, 500)
            }
            break;
        case MsgCMD.GAME_OVER:
            this.isBegin = !1,
            egret.Tween.get(this.exml_sound).to({
                y: -56
            }, 500),
            egret.Tween.removeTweens(this.exml_BGGroup),
            this.removeListener(this, egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHandler, this),
            this.removeListener(this, egret.TouchEvent.TOUCH_END, this.touchEndHandler, this);
            break;
        case MsgCMD.IS_BEGIN:
            GameData.instance.startTime = (new Date).getTime(),
            this.isBegin = !0,
            BackGroundService.instance.IsPlaySound ? (this.exml_sound.texture = RES.getRes("nomute_png"),
            SoundManager.instance.playEffect("startGame_mp3")) : this.exml_sound.texture = RES.getRes("mute_png"),
            egret.Tween.get(this.exml_sound).to({
                y: 7
            }, 500)
        }
    }
    ,
    t.prototype.bufferZ = function() {
        if (1 != this.mapIndex) {
            if (0 == this.bufferState) {
                for (var e = 25; e >= 0; e--) {
                    this.playerdArr[0].addY % 26 == e && Math.floor(this.playerdArr[0].addY / 26) % 2 == 0 && this.exml_contentGroup0.addChild(this.playerdArr[0]);
                    for (var t = 0; t < this.childArr.length; t++)
                        this.childArr[t].addY == e && 0 == this.childArr[t].isShip && this.exml_contentGroup0.addChild(this.childArr[t])
                }
                for (var e = 25; e >= 0; e--) {
                    this.playerdArr[0].addY % 26 == e && Math.floor(this.playerdArr[0].addY / 26) % 2 == 1 && this.exml_contentGroup0.addChild(this.playerdArr[0]);
                    for (var t = 0; t < this.childArr1.length; t++)
                        this.childArr1[t].addY == e && 0 == this.childArr1[t].isShip && this.exml_contentGroup0.addChild(this.childArr1[t])
                }
            } else if (1 == this.bufferState) {
                for (var e = 25; e >= 0; e--) {
                    this.playerdArr[0].addY % 26 == e && Math.floor(this.playerdArr[0].addY / 26) % 2 == 1 && this.exml_contentGroup0.addChild(this.playerdArr[0]);
                    for (var t = 0; t < this.childArr1.length; t++)
                        this.childArr1[t].addY == e && 0 == this.childArr1[t].isShip && this.exml_contentGroup0.addChild(this.childArr1[t])
                }
                for (var e = 25; e >= 0; e--) {
                    this.playerdArr[0].addY % 26 == e && Math.floor(this.playerdArr[0].addY / 26) % 2 == 0 && this.exml_contentGroup0.addChild(this.playerdArr[0]);
                    for (var t = 0; t < this.childArr.length; t++)
                        this.childArr[t].addY == e && 0 == this.childArr[t].isShip && this.exml_contentGroup0.addChild(this.childArr[t])
                }
            }
        } else {
            for (var e = 25; e >= 0; e--) {
                this.playerdArr[0].addY % 26 == e && Math.floor(this.playerdArr[0].addY / 26) % 2 == 1 && this.exml_contentGroup0.addChild(this.playerdArr[0]);
                for (var t = 0; t < this.childArr1.length; t++)
                    this.childArr1[t].addY == e && 0 == this.childArr1[t].isShip && this.exml_contentGroup0.addChild(this.childArr1[t])
            }
            for (var e = 25; e >= 0; e--) {
                this.playerdArr[0].addY % 26 == e && Math.floor(this.playerdArr[0].addY / 26) % 2 == 0 && this.exml_contentGroup0.addChild(this.playerdArr[0]);
                for (var t = 0; t < this.childArr.length; t++)
                    this.childArr[t].addY == e && 0 == this.childArr[t].isShip && this.exml_contentGroup0.addChild(this.childArr[t])
            }
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addListener(this, egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHandler, this),
        this.addListener(this, egret.TouchEvent.TOUCH_END, this.touchEndHandler, this),
        this.addListener(this.exml_sound, egret.TouchEvent.TOUCH_TAP, this.touchHandler, this),
        this.addMessage(MsgCMD.REMOVE_OBJECT, this),
        this.addMessage(MsgCMD.ADD_OBJECT, this),
        this.addMessage(MsgCMD.PLAYER_MOVE_WIDTH, this),
        this.addMessage(MsgCMD.PLAYER_MOVE, this),
        this.addMessage(MsgCMD.GAME_OVER, this),
        this.addMessage(MsgCMD.IS_BEGIN, this)
    }
    ,
    t.prototype.touchHandler = function(e) {
        e.target == this.exml_sound && (BackGroundService.instance.IsPlaySound ? (BackGroundService.instance.setIsPlaySound(!1),
        this.exml_sound.texture = RES.getRes("mute_png"),
        SoundManager.instance.stopBgMusic()) : (SoundManager.instance.startBgMusic("bgmIngame_hi_mp3"),
        BackGroundService.instance.setIsPlaySound(!0),
        this.exml_sound.texture = RES.getRes("nomute_png")))
    }
    ,
    t.prototype.timerHandler = function(e) {
        if (1 == this.isDown) {
            var t = this.nx - this.ox
              , i = this.ny - this.oy
              , a = Math.sqrt(t * t + i * i)
              , r = Math.atan2(i, t)
              , s = 0;
            if (s = 180 * r / Math.PI,
            40 > a) {
                switch (BackGroundService.instance.IsCrash(1)) {
                case 0:
                    Message.instance.send(MsgCMD.PLAYER_MOVE, 1),
                    this.bufferZ();
                    var n;
                    n = BackGroundService.instance.ShowScore >= 100 ? "" + BackGroundService.instance.ShowScore : BackGroundService.instance.ShowScore >= 10 ? "0" + BackGroundService.instance.ShowScore : "00" + BackGroundService.instance.ShowScore,
                    this.exml_score.text = n
                }
                this.isDown = !1
            } else if (60 > s && s >= -30) {
                switch (BackGroundService.instance.IsCrash(4)) {
                case 0:
                    Message.instance.send(MsgCMD.PLAYER_MOVE, 4),
                    this.bufferZ(),
                    this.moveWidth(-1)
                }
                this.isDown = !1
            } else if (150 > s && s >= 60) {
                switch (BackGroundService.instance.IsCrash(2)) {
                case 0:
                    Message.instance.send(MsgCMD.PLAYER_MOVE, 2),
                    this.bufferZ()
                }
                this.isDown = !1
            } else if (-120 > s || s >= 150) {
                switch (BackGroundService.instance.IsCrash(3)) {
                case 0:
                    Message.instance.send(MsgCMD.PLAYER_MOVE, 3),
                    this.bufferZ(),
                    this.moveWidth(1)
                }
                this.isDown = !1
            } else {
                switch (BackGroundService.instance.IsCrash(1)) {
                case 0:
                    Message.instance.send(MsgCMD.PLAYER_MOVE, 1);
                    var n;
                    n = BackGroundService.instance.ShowScore >= 100 ? "" + BackGroundService.instance.ShowScore : BackGroundService.instance.ShowScore >= 10 ? "0" + BackGroundService.instance.ShowScore : "00" + BackGroundService.instance.ShowScore,
                    this.exml_score.text = n,
                    this.bufferZ()
                }
                this.isDown = !1
            }
            this.setTimeNum = egret.setTimeout(function() {
                this.isCanDown = !0
            }, this, 200)
        }
        if (-this.playerdArr[0].image.x > this.exml_BGGroup.x - 200 && (this.exml_BGGroup.x += 1),
        -this.playerdArr[0].image.x < this.exml_BGGroup.x - 260 && (this.exml_BGGroup.x -= 1),
        0 != this.speed && (this.exml_BGGroup.x += 3 * this.speed,
        this.exml_BGGroup.y += 3 / 3.65 * this.speed),
        this.isBegin && (this.mapIndex < 2 ? (this.exml_BGGroup.y += 1.038,
        this.exml_BGGroup.x -= .6) : this.mapIndex < 3 ? (this.exml_BGGroup.y += 1.73 * .7,
        this.exml_BGGroup.x -= .7) : this.mapIndex < 4 ? (this.exml_BGGroup.y += 1.73 * .8,
        this.exml_BGGroup.x -= .8) : (this.exml_BGGroup.y += 1.557,
        this.exml_BGGroup.x -= .9),
        this.playerdArr[0].image.y + this.exml_BGGroup.y > -1e3 ? (Message.instance.send(MsgCMD.GAME_OVER),
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("bgmLose_Hi_mp3")) : this.playerdArr[0].image.y + this.exml_BGGroup.y < -1550 && this.moveHeight(-1)),
        1 == this.temp ? this.exml_BGGroup.y -= 10 : 2 == this.temp ? this.exml_BGGroup.y += 10 : 3 == this.temp ? this.exml_BGGroup.x -= 10 : 4 == this.temp && (this.exml_BGGroup.x += 10),
        this.exml_BGGroup.y >= this.mapIndex * Global.map_height - 640) {
            this.mapIndex++;
            var h = Math.floor(6 * Math.random() + 1);
            BackGroundService.instance.setMapIndex(h);
            var n = "level" + (h + 1) + "_png";
            this.mapIndex % 2 == 0 ? (this.exml_map0.source = n,
            this.bufferState = 0,
            BackGroundService.instance.reset(0),
            this.mapService = BackGroundService.instance.ChildIndex,
            this.map = BackGroundService.instance.MapArr,
            this.resetMap(this.mapIndex),
            this.exml_map0.x += 2 * Global.map_width,
            this.exml_map0.y -= 2 * Global.map_height) : (this.exml_map1.source = n,
            this.bufferState = 1,
            BackGroundService.instance.reset(1),
            this.mapService1 = BackGroundService.instance.ChildIndex1,
            this.map1 = BackGroundService.instance.MapArr1,
            this.resetMap1(this.mapIndex),
            this.exml_map1.x += 2 * Global.map_width,
            this.exml_map1.y -= 2 * Global.map_height)
        }
    }
    ,
    t.prototype.moveHeight = function(e) {
        egret.Tween.get(this.exml_BGGroup).to({
            y: this.exml_BGGroup.y - Global.map_one_height * e,
            x: this.exml_BGGroup.x + Global.map_add_width * e
        }, 200)
    }
    ,
    t.prototype.moveWidth = function(e) {
        egret.Tween.get(this.exml_BGGroup).to({
            y: this.exml_BGGroup.y + Global.map_add_height * e,
            x: this.exml_BGGroup.x + Global.map_one_width * e
        }, 200)
    }
    ,
    t.prototype.touchBeginHandler = function(e) {
        1 == this.isCanDown && e.target != this.exml_sound && (this.ox = e.stageX,
        this.oy = e.stageY)
    }
    ,
    t.prototype.touchEndHandler = function(e) {
        1 == this.isCanDown && e.target != this.exml_sound && (this.nx = e.stageX,
        this.ny = e.stageY,
        this.isDown = !0,
        this.isCanDown = !1)
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t)
    }
    ,
    t
}(BaseModule);
__reflect(BackGroundModule.prototype, "BackGroundModule", ["IMessage"]);
var CarModule = function(e) {
    function t(t, i, a, r) {
        var s = e.call(this) || this;
        s.difficult = 0;
        var n = 0;
        return n = 0 > r ? Math.floor(21 * Math.random()) : Math.floor(21 * Math.random()) + 21,
        s.carId = n,
        s.model = CarService.instance.getCarDataModel(n),
        s.addX = t,
        s.addY = i,
        s.mapIndex = a,
        r >= 6 ? s.speed = 6 : (s.speed = r,
        -6 >= r ? s.speed = -6 : s.speed = r),
        s.crashX = 1,
        s.init(),
        s
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes(this.model.texture),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(.5),
        this.image.anchorOffsetX > 100 ? this.carLength = 3 : this.carLength = 2,
        this.addHeight(this.addY),
        this.speed < 0 ? (this.addWidth(25.5),
        this.carId < 9 ? this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 15 * Global.map_one_width + this.mapIndex * Global.map_width : 9 == this.carId || 10 == this.carId || 11 == this.carId ? this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 16 * Global.map_one_width + this.mapIndex * Global.map_width - 90 + this.image.anchorOffsetX : this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 16 * Global.map_one_width + this.mapIndex * Global.map_width - 70 + this.image.anchorOffsetX,
        this.crashX = 14) : (this.addWidth(-.5),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + this.mapIndex * Global.map_width - 70 + this.image.anchorOffsetX),
        this.timer = new egret.Timer(30),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.start()
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.CHANGE_INDEX:
            if (t == this.mapIndex % 2)
                break
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.CHANGE_INDEX, this)
    }
    ,
    t.prototype.timerHandler = function(e) {
        if (this.image.x += 3 * this.speed,
        this.image.y += 3 / 3.65 * this.speed,
        this.speed < 0) {
            if (this.image.x + this.image.anchorOffsetX <= this.crash) {
                if (this.crash -= Global.map_one_width,
                BackGroundService.instance.setMapArr(-1, this.addY, this.crashX, this.mapIndex),
                this.crashX < 15 - this.carLength && BackGroundService.instance.setMapArr(2, this.addY, this.crashX + this.carLength, this.mapIndex),
                this.mapIndex >= 3 && (this.difficult = 1),
                this.mapIndex >= 4 && (this.difficult = 2),
                this.mapIndex >= 5 && (this.difficult = 3),
                this.crashX == 8 + this.difficult && (Message.instance.send(MsgCMD.ADD_OBJECT, [0, this.addX, this.addY, this.mapIndex, this.speed - .1 * this.difficult]),
                (this.addY + 26 * this.mapIndex - 1 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex - 2 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex == BackGroundService.instance.PlayerY) && BackGroundService.instance.IsPlaySound)) {
                    var t = Math.floor(6 * Math.random());
                    switch (t) {
                    case 0:
                        SoundManager.instance.playEffect("carPassing1_mp3");
                        break;
                    case 1:
                        SoundManager.instance.playEffect("carPassing2_mp3");
                        break;
                    case 2:
                        SoundManager.instance.playEffect("carPassing3_mp3");
                        break;
                    case 3:
                        SoundManager.instance.playEffect("horn1_mp3");
                        break;
                    case 4:
                        SoundManager.instance.playEffect("horn2_mp3");
                        break;
                    case 5:
                        SoundManager.instance.playEffect("horn3_mp3")
                    }
                }
                -8 == this.crashX && (this.vis = !1,
                Message.instance.send(MsgCMD.REMOVE_OBJECT, this.mapIndex)),
                this.crashX--
            }
        } else if (this.image.x + this.image.anchorOffsetX >= this.crash) {
            if (this.crash += Global.map_one_width,
            this.crashX < 15 && BackGroundService.instance.setMapArr(-1, this.addY, this.crashX, this.mapIndex),
            this.crashX > this.carLength && this.crashX < 18 && BackGroundService.instance.setMapArr(2, this.addY, this.crashX - this.carLength, this.mapIndex),
            this.mapIndex >= 3 && (this.difficult = 1),
            this.mapIndex >= 4 && (this.difficult = 2),
            this.mapIndex >= 5 && (this.difficult = 3),
            this.crashX == 8 - this.difficult && (Message.instance.send(MsgCMD.ADD_OBJECT, [0, this.addX, this.addY, this.mapIndex, this.speed + .1 * this.difficult]),
            (this.addY + 26 * this.mapIndex - 1 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex - 2 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex == BackGroundService.instance.PlayerY) && BackGroundService.instance.IsPlaySound)) {
                var t = Math.floor(6 * Math.random());
                switch (t) {
                case 0:
                    SoundManager.instance.playEffect("carPassing1_mp3");
                    break;
                case 1:
                    SoundManager.instance.playEffect("carPassing2_mp3");
                    break;
                case 2:
                    SoundManager.instance.playEffect("carPassing3_mp3");
                    break;
                case 3:
                    SoundManager.instance.playEffect("horn1_mp3");
                    break;
                case 4:
                    SoundManager.instance.playEffect("horn2_mp3");
                    break;
                case 5:
                    SoundManager.instance.playEffect("horn3_mp3")
                }
            }
            26 == this.crashX && (this.vis = !1,
            Message.instance.send(MsgCMD.REMOVE_OBJECT, this.mapIndex)),
            this.crashX++
        }
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.stop(),
        this.timer = null
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e
    }
    ,
    t
}(ObjectModule);
__reflect(CarModule.prototype, "CarModule", ["IMessage"]);
var GameMenu = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "GameMenuSkin",
        t
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.MENU_BACK, this),
        this.addListener(this.exml_rect, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_sound, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this)
    }
    ,
    t.prototype.init = function() {
        BackGroundService.instance.IsPlaySound ? this.exml_sound.texture = RES.getRes("nomute_png") : this.exml_sound.texture = RES.getRes("mute_png"),
        this.exml_select.y -= 900 - Global.windows_height,
        this.exml_rect.height = Global.windows_height,
        this.exml_rect0.height = Global.windows_height,
        this.exml_rectBg.height = Global.windows_height,
        egret.Tween.get(this.exml_image).to({
            y: 300
        }, 500),
        egret.Tween.get(this.exml_rectBg).to({
            alpha: 1
        }, 220).wait(100).to({
            alpha: 0
        }, 200),
        egret.Tween.get(this.exml_label, {
            loop: !0
        }).wait(300).to({
            visible: !1
        }).wait(300).to({
            visible: !0
        }),
        egret.Tween.get(this.exml_select).to({
            x: 0
        }, 500),
        egret.Tween.get(this.exml_sound).to({
            y: 7
        }, 500)
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.MENU_BACK:
            this.addListener(this.exml_rect, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
            this.addListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
            this.addListener(this.exml_sound, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
            egret.Tween.get(this.exml_image).to({
                y: 300
            }, 500),
            this.exml_label.alpha = 1,
            egret.Tween.get(this.exml_select).to({
                x: 0
            }, 500),
            egret.Tween.get(this.exml_sound).to({
                y: 7
            }, 500)
        }
    }
    ,
    t.prototype.touchEndHandler = function(e) {
        e.target == this.exml_rect && (BackGroundService.instance.IsPlaySound && (SoundManager.instance.startBgMusic("bgmIngame_hi_mp3"),
        SoundManager.instance.playEffect("tapBTN2_mp3")),
        this.removeListener(this.exml_rect, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_sound, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        egret.Tween.get(this.exml_image).to({
            y: 900
        }, 500),
        egret.Tween.get(this.exml_group0).to({
            alpha: 0
        }, 500),
        egret.Tween.get(this.exml_group1).wait(500).to({
            alpha: 1
        }, 500),
        egret.Tween.get(this.exml_time).wait(1500).to({
            visible: !0
        }).wait(1e3).to({
            text: 2
        }).wait(1e3).to({
            text: 1
        }).wait(1e3).to({
            text: 0
        }).call(function() {
            egret.Tween.get(this.exml_group1).to({
                alpha: 0
            }, 500).call(function() {
                PanelController.instance.removeAll(),
                Message.instance.send(MsgCMD.IS_BEGIN)
            }, this)
        }, this)),
        e.target == this.exml_select && (BackGroundService.instance.IsPlaySound && (SoundManager.instance.startBgMusic("bgmIngame_hi_mp3"),
        SoundManager.instance.playEffect("tapBTN2_mp3")),
        this.removeListener(this.exml_rect, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_sound, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        egret.Tween.get(this.exml_sound).to({
            y: -56
        }, 500),
        egret.Tween.get(this.exml_select).to({
            x: -150
        }, 500),
        this.exml_label.visible = !1,
        egret.Tween.get(this.exml_image).to({
            y: -232
        }, 500).call(function() {
            PanelController.instance.add(new PlayerChoose),
            this.exml_label.alpha = 0
        }, this)),
        e.target == this.exml_sound && (BackGroundService.instance.IsPlaySound ? (BackGroundService.instance.setIsPlaySound(!1),
        this.exml_sound.texture = RES.getRes("mute_png"),
        SoundManager.instance.stopBgMusic()) : (SoundManager.instance.playEffect("tapBTN2_mp3"),
        SoundManager.instance.startBgMusic("bgmIngame_hi_mp3"),
        BackGroundService.instance.setIsPlaySound(!0),
        this.exml_sound.texture = RES.getRes("nomute_png")))
    }
    ,
    t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this),
        this.init()
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        egret.Tween.removeTweens(this.exml_image),
        egret.Tween.removeTweens(this.exml_rectBg),
        egret.Tween.removeTweens(this.exml_label),
        egret.Tween.removeTweens(this.exml_select),
        egret.Tween.removeTweens(this.exml_sound),
        egret.Tween.removeTweens(this.exml_group0),
        egret.Tween.removeTweens(this.exml_group1)
    }
    ,
    t
}(BaseModule);
__reflect(GameMenu.prototype, "GameMenu", ["IMessage"]);
var PlayerChoose = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "PlayerChooseSkin",
        t
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addListener(this.exml_rect0, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_rect1, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_rect2, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_rect3, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_back, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this)
    }
    ,
    t.prototype.init = function() {
        switch (this.exml_back.y -= 900 - Global.windows_height,
        egret.Tween.get(this.exml_group).to({
            y: 365
        }, 500),
        egret.Tween.get(this.exml_back).to({
            x: -8.5
        }, 500),
        PlayerService.instance.PlayerIndex) {
        case 1:
            this.exml_select.x = this.exml_rect0.x;
            break;
        case 2:
            this.exml_select.x = this.exml_rect1.x;
            break;
        case 3:
            this.exml_select.x = this.exml_rect2.x;
            break;
        case 4:
            this.exml_select.x = this.exml_rect3.x
        }
    }
    ,
    t.prototype.touchEndHandler = function(e) {
        e.target == this.exml_rect0 && (PlayerService.instance.setPlayerIndex(1),
        this.exml_select.x = this.exml_rect0.x,
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerSelect_mp3")),
        e.target == this.exml_rect1 && (PlayerService.instance.setPlayerIndex(2),
        this.exml_select.x = this.exml_rect1.x,
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerSelect_mp3")),
        e.target == this.exml_rect2 && (PlayerService.instance.setPlayerIndex(3),
        this.exml_select.x = this.exml_rect2.x,
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerSelect_mp3")),
        e.target == this.exml_rect3 && (PlayerService.instance.setPlayerIndex(5),
        this.exml_select.x = this.exml_rect3.x,
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerSelect_mp3")),
        e.target == this.exml_back && (BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("tapBTN2_mp3"),
        this.removeListener(this.exml_rect0, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_rect1, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_rect2, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_rect3, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_back, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        egret.Tween.get(this.exml_group).to({
            y: -171
        }, 500),
        egret.Tween.get(this.exml_back).to({
            x: -150
        }, 500).call(function() {
            Message.instance.send(MsgCMD.MENU_BACK),
            PanelController.instance.remove(this)
        }, this))
    }
    ,
    t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this),
        this.init()
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        egret.Tween.removeTweens(this.exml_back),
        egret.Tween.removeTweens(this.exml_group)
    }
    ,
    t
}(BaseModule);
__reflect(PlayerChoose.prototype, "PlayerChoose");
var GameOver = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.talkResult = {},
        t.skinName = "GameOverSkin",
        BackGroundService.instance.setPlayerX(100),
        egret.Tween.get(t.exml_scoreGroup).to({
            y: 268
        }, 300),
        egret.Tween.get(t.exml_select).to({
            x: 0
        }, 500),
        egret.Tween.get(t.exml_startGame).to({
            x: 360
        }, 500),
        t.init(),
        t
    }
    return __extends(t, e),
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.MENU_BACK:
            this.addListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
            this.addListener(this.exml_startGame, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
            egret.Tween.get(this.exml_scoreGroup).to({
                y: 268
            }, 300),
            egret.Tween.get(this.exml_select).to({
                x: 0
            }, 500),
            egret.Tween.get(this.exml_startGame).to({
                x: 360
            }, 500)
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addListener(this.exml_startGame, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.addMessage(MsgCMD.MENU_BACK, this)
    }
    ,
    t.prototype.init = function() {
        BackGroundService.maxScore < BackGroundService.instance.ShowScore && (BackGroundService.maxScore = BackGroundService.instance.ShowScore),
        this.exml_select.y -= 900 - Global.windows_height,
        this.exml_startGame.y -= 900 - Global.windows_height;
        var e;
        e = BackGroundService.instance.ShowScore >= 100 ? "" + BackGroundService.instance.ShowScore : BackGroundService.instance.ShowScore >= 10 ? "0" + BackGroundService.instance.ShowScore : "00" + BackGroundService.instance.ShowScore,
        this.exml_score.text = e;
        var t;
        t = BackGroundService.maxScore >= 100 ? "" + BackGroundService.maxScore : BackGroundService.maxScore >= 10 ? "0" + BackGroundService.maxScore : "00" + BackGroundService.maxScore,
        this.exml_maxScore.text = t;
        var i = null == egret.getOption("targetScore") ? 100 : parseInt(egret.getOption("targetScore"));
        this.exml_targetScore.text = i + "";
        var a = BackGroundService.instance.ShowScore;
        a >= i ? (this.talkResult.result = "3",
        this.talkResult.score = a) : (this.talkResult.result = "1",
        this.talkResult.score = a),
        this.talkResult.cost_time = Math.floor(((new Date).getTime() - GameData.instance.startTime) / 1e3);
        var r = {};
        r.score = BackGroundService.instance.ShowScore,
        r.cost_time = Math.floor(((new Date).getTime() - GameData.instance.startTime) / 1e3);
        var s = egret.getOption("token")
          , n = "1"
          , h = JSON.stringify(r)
          , o = egret.getOption("X_Transparent");
        o = decodeURIComponent(o),
        o = o.replace(/\s+/g, ""),
        s = decodeURIComponent(s);
        var c = new HashMap;
        c.put("X_Transparent", o),
        c.put("appSecret", XiaoMi.App_Secret),
        c.put("result", h),
        c.put("token", s),
        c.put("version", n);
        var l = XiaoMi.sign2(c)
          , d = {};
        d.token = s,
        d.version = n,
        d.result = h,
        d.X_Transparent = o,
        d.sign = l,
        onGameOver(JSON.stringify(this.talkResult))
    }
    ,
    t.prototype.resposen = function(e) {
        var t = egret.getOption("redirectUrl");
        t && "" != t ? (console.log("window"),
        window.location.href = t + "?cost_time=" + this.talkResult.cost_time + "&score=" + this.talkResult.score + "&result=" + this.talkResult.result) : (onGameOver(JSON.stringify(this.talkResult)),
        console.log("over")),
        console.log(e)
    }
    ,
    t.prototype.touchEndHandler = function(e) {
        if (e.target == this.exml_startGame) {
            if (!window.IS_FIRST) {
				window.IS_FIRST = true;
			}
			else {
				setLoadingVisible(true, false, function () {
				})
			}
        }
        e.target == this.exml_startGame && (BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("tapBTN2_mp3"),
        this.removeListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_startGame, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        egret.Tween.get(this.exml_scoreGroup).to({
            y: -321
        }, 300),
        egret.Tween.get(this.exml_select).to({
            x: -144
        }, 500),
        egret.Tween.get(this.exml_startGame).to({
            x: 480
        }, 500).call(function() {
            Message.instance.send(MsgCMD.SHOW_EXAMPLE_1_MODULE),
            this.parent.removeChild(this)
        }, this)),
        e.target == this.exml_select && (BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("tapBTN2_mp3"),
        this.removeListener(this.exml_select, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        this.removeListener(this.exml_startGame, egret.TouchEvent.TOUCH_TAP, this.touchEndHandler, this),
        egret.Tween.get(this.exml_scoreGroup).to({
            y: -321
        }, 300),
        egret.Tween.get(this.exml_select).to({
            x: -144
        }, 500),
        egret.Tween.get(this.exml_startGame).to({
            x: 480
        }, 500).call(function() {
            PanelController.instance.add(new PlayerChoose)
        }, this))
    }
    ,
    t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this)
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        egret.Tween.removeTweens(this.exml_scoreGroup),
        egret.Tween.removeTweens(this.exml_select),
        egret.Tween.removeTweens(this.exml_startGame)
    }
    ,
    t
}(BaseModule);
__reflect(GameOver.prototype, "GameOver", ["IMessage"]);
var OverWait = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "BackGroundSkin",
        t
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t)
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t)
    }
    ,
    t
}(BaseModule);
__reflect(OverWait.prototype, "OverWait");
var ThemeAdapter = function() {
    function e() {}
    return e.prototype.getTheme = function(e, t, i, a) {
        function r(e) {
            t.call(a, e)
        }
        function s(t) {
            t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, s, null),
            i.call(a))
        }
        var n = this;
        "undefined" != typeof generateEUI ? egret.callLater(function() {
            t.call(a, generateEUI)
        }, this) : "undefined" != typeof generateEUI2 ? RES.getResByUrl("resource/gameEui.bin", function(e, i) {
            window.JSONParseClass.setData(e),
            r(e),
            egret.callLater(function() {
                t.call(a, generateEUI2)
            }, n)
        }, this, RES.ResourceItem.TYPE_BIN) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, s, null),
        RES.getResByUrl(e, r, this, RES.ResourceItem.TYPE_TEXT))
    }
    ,
    e
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var PlayerModule = function(e) {
    function t(t, i) {
        var a = e.call(this) || this;
        return a.isInvincible = !1,
        a.model = PlayerService.instance.UserPlayer,
        a.addX = t,
        a.addY = i,
        a.nowX = 0,
        a.speed = 0,
        a.playerName = "",
        a.init(),
        a
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.fi = 0,
        this.dirction = 0,
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes(this.model.texture),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.y = Global.start_height,
        this.addHeight(.5),
        this.addWidth(.5),
        this.addWidth(this.addX),
        this.addHeight(this.addY),
        this.timer = new egret.Timer(15),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.start(),
        this.timer1 = new egret.Timer(30),
        this.timer1.addEventListener(egret.TimerEvent.TIMER, this.timerHandler1, this),
        this.timer1.start()
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.PLAYER_MOVE:
            switch (this.fi = 2,
            t) {
            case 1:
                this.moveHeight(1),
                this.dirction = 1;
                break;
            case 2:
                this.moveHeight(-1),
                this.dirction = 2;
                break;
            case 3:
                this.moveWidth(-1),
                this.dirction = 3;
                break;
            case 4:
                this.moveWidth(1),
                this.dirction = 4;
                break;
            case 5:
                if (this.dirction = 5,
                BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerWater_mp3"),
                PlayerService.instance.setPlayerLife(-1),
                PlayerService.instance.PlayerLife <= 0)
                    Message.instance.send(MsgCMD.GAME_OVER),
                    BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("bgmLose_Hi_mp3");
                else {
                    var i;
                    i = egret.setTimeout(function() {
                        this.isInvincible = !0,
                        this.dirction = 0,
                        egret.clearTimeout(i)
                    }, this, 500)
                }
                break;
            case 6:
                if (this.dirction = 6,
                BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("carHit_mp3"),
                PlayerService.instance.setPlayerLife(-1),
                PlayerService.instance.PlayerLife <= 0)
                    Message.instance.send(MsgCMD.GAME_OVER),
                    BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("bgmLose_Hi_mp3");
                else {
                    var i;
                    i = egret.setTimeout(function() {
                        this.isInvincible = !0,
                        this.dirction = 0,
                        egret.clearTimeout(i)
                    }, this, 500)
                }
                break;
            case 7:
                this.isInvincible = !0,
                this.dirction = 0
            }
            this.speed = 0,
            Message.instance.send(MsgCMD.PLAYER_MOVE_WIDTH, {
                speed: 0
            });
            break;
        case MsgCMD.PLAYER_MOVE_WIDTH:
            this.speed = Math.floor(10 * t.speed) / 10,
            this.nowX = this.image.x
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.PLAYER_MOVE, this),
        this.addMessage(MsgCMD.PLAYER_MOVE_WIDTH, this)
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        egret.Tween.removeTweens(this.image)
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e
    }
    ,
    t.prototype.moveHeight = function(e) {
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerJump_mp3"),
        this.addY += e,
        this.playerMove()
    }
    ,
    t.prototype.moveWidth = function(e) {
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("playerJump_mp3"),
        this.addX += e,
        this.playerMove()
    }
    ,
    t.prototype.playerMove = function() {
        var e = Math.floor(this.addY / 26)
          , t = Global.start_height - (.5 + this.addY % 26) * Global.map_one_height - e * Global.map_height + (.5 + this.addX) * Global.map_add_height
          , i = (.5 + this.addY % 26) * Global.map_add_width + e * Global.map_width + (.5 + this.addX) * Global.map_one_width;
        egret.Tween.get(this.image).to({
            y: t,
            x: i
        }, 200)
    }
    ,
    t.prototype.timerHandler1 = function(e) {
        0 != this.speed && (this.image.x += 3 * this.speed,
        this.image.y += 3 / 3.65 * this.speed,
        this.speed > 0 ? this.nowX + Global.map_one_width / 2 <= this.image.x && (this.addX <= 18 ? (this.nowX += Global.map_one_width,
        BackGroundService.instance.setPlayerX(1),
        this.addX++) : (Message.instance.send(MsgCMD.GAME_OVER),
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("bgmLose_Hi_mp3"),
        this.speed = 0)) : this.nowX - Global.map_one_width / 2 >= this.image.x && (this.addX > 6 ? (this.nowX -= Global.map_one_width,
        BackGroundService.instance.setPlayerX(-1),
        this.addX--) : (Message.instance.send(MsgCMD.GAME_OVER),
        BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("bgmLose_Hi_mp3"),
        this.speed = 0)))
    }
    ,
    t.prototype.timerHandler = function(e) {
        switch (this.isInvincible && (this.invincible(),
        this.isInvincible = !1),
        this.dirction) {
        case 0:
            this.move1();
            break;
        case 1:
            this.moveUp();
            break;
        case 2:
            this.moveDown();
            break;
        case 3:
            this.moveLeft();
            break;
        case 4:
            this.moveRight();
            break;
        case 5:
            this.moveOver();
            break;
        case 6:
            switch (PlayerService.instance.PlayerIndex) {
            case 3:
                this.playerName = "si_2_png";
                break;
            case 2:
                this.playerName = "laoshu_si_2_png";
                break;
            case 5:
                this.playerName = "tuzi_si_png";
                break;
            case 4:
                this.playerName = "siwang_xia_01_png";
                break;
            case 6:
                this.playerName = "xiaozhu_yabian_02_png";
                break;
            case 1:
                this.playerName = "xiaoji_si_png"
            }
            this.image.texture = RES.getRes(this.playerName),
            this.image.anchorOffsetX = this.image.width / 2,
            this.image.anchorOffsetY = this.image.height / 2,
            this.dirction = 10
        }
    }
    ,
    t.prototype.moveRight = function() {
        switch (PlayerService.instance.PlayerIndex) {
        case 3:
            this.playerName = "you_";
            break;
        case 2:
            this.playerName = "laoshu_";
            break;
        case 5:
            this.playerName = "you00";
            break;
        case 4:
            this.playerName = "you_00";
            break;
        case 6:
            this.playerName = "xiaozhu_you_00";
            break;
        case 1:
            this.playerName = "xiaoji_you_"
        }
        this.image.texture = RES.getRes(this.playerName + Math.floor(this.fi / 2) + "_png"),
        this.fi += 2,
        this.fi >= 36 && (this.fi = 36)
    }
    ,
    t.prototype.moveLeft = function() {
        switch (PlayerService.instance.PlayerIndex) {
        case 3:
            this.playerName = "zuo_";
            break;
        case 2:
            this.playerName = "laoshu_zuo_";
            break;
        case 5:
            this.playerName = "zuo00";
            break;
        case 4:
            this.playerName = "zhuo_00";
            break;
        case 6:
            this.playerName = "xiaozhu_zuo_00";
            break;
        case 1:
            this.playerName = "xiaoji_zuo_"
        }
        this.image.texture = RES.getRes(this.playerName + Math.floor(this.fi / 2) + "_png"),
        this.fi += 2,
        this.fi >= 36 && (this.fi = 36)
    }
    ,
    t.prototype.moveUp = function() {
        switch (PlayerService.instance.PlayerIndex) {
        case 3:
            this.playerName = "shang_";
            break;
        case 2:
            this.playerName = "laoshu_qian_";
            break;
        case 5:
            this.playerName = "hou00";
            break;
        case 4:
            this.playerName = "shang_00";
            break;
        case 6:
            this.playerName = "xiaozhu_shang_00";
            break;
        case 1:
            this.playerName = "xiaoji_qian_"
        }
        this.image.texture = RES.getRes(this.playerName + Math.floor(this.fi / 2) + "_png"),
        this.fi += 2,
        this.fi >= 36 && (this.fi = 36)
    }
    ,
    t.prototype.moveDown = function() {
        switch (PlayerService.instance.PlayerIndex) {
        case 3:
            this.playerName = "xia_";
            break;
        case 2:
            this.playerName = "laoshu_hou_";
            break;
        case 5:
            this.playerName = "xia00";
            break;
        case 4:
            this.playerName = "xia_00";
            break;
        case 6:
            this.playerName = "xiaozhu_xia_00";
            break;
        case 1:
            this.playerName = "xiaoji_qian00"
        }
        this.image.texture = RES.getRes(this.playerName + Math.floor(this.fi / 2) + "_png"),
        this.fi += 2,
        this.fi >= 36 && (this.fi = 36)
    }
    ,
    t.prototype.move1 = function() {
        switch (PlayerService.instance.PlayerIndex) {
        case 3:
            this.playerName = "yd_";
            break;
        case 2:
            this.playerName = "laoshu_yd_";
            break;
        case 5:
            this.playerName = "rudong00";
            break;
        case 4:
            this.playerName = "daiji_";
            break;
        case 6:
            this.playerName = "xiaozhu_rudong_00";
            break;
        case 1:
            this.playerName = "xiaoji_yd_"
        }
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.texture = RES.getRes(this.playerName + Math.floor(this.fi / 2) + "_png"),
        this.fi += 1,
        this.fi >= 36 && (this.fi = 2)
    }
    ,
    t.prototype.invincible = function() {
        egret.Tween.get(this.image).wait(100).to({
            visible: !1
        }).wait(100).to({
            visible: !0
        }).wait(100).to({
            visible: !1
        }).wait(100).to({
            visible: !0
        }).wait(100).to({
            visible: !1
        }).wait(100).to({
            visible: !0
        }).wait(100).to({
            visible: !1
        }).wait(100).to({
            visible: !0
        }).wait(100).to({
            visible: !1
        }).wait(100).to({
            visible: !0
        }).wait(100).to({
            visible: !1
        }).wait(100).to({
            visible: !0
        }).wait(100).to({
            visible: !1
        }).call(function() {
            this.image.visible = !0
        }, this)
    }
    ,
    t.prototype.moveOver = function() {
        this.image.anchorOffsetX = 150,
        this.image.anchorOffsetY = 113,
        this.image.texture = PlayerService.instance.texWaiter[Math.floor(this.fi / 4)],
        this.fi += 2,
        this.fi >= 79 && (this.fi = 80)
    }
    ,
    t
}(ObjectModule);
__reflect(PlayerModule.prototype, "PlayerModule", ["IMessage"]);
var RandomTreeModule = function(e) {
    function t(t, i, a, r) {
        var s = e.call(this) || this;
        return s.model = RandomTreeService.instance.getRandomMapTree(a),
        s.addY = i,
        s.addX = t,
        s.mapIndex = r,
        0 == a && (s.isShip = !0),
        s.init(),
        s
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes(this.model.texture),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(.5),
        this.addWidth(.5),
        this.addWidth(this.addX),
        this.addHeight(this.addY)
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e
    }
    ,
    t
}(ObjectModule);
__reflect(RandomTreeModule.prototype, "RandomTreeModule");
var MoveShipModule = function(e) {
    function t(t, i, a, r) {
        var s = e.call(this) || this;
        return s.fi = 1,
        s.isPlay = !1,
        s.model = MoveShipService.instance.MoveShipDataModel,
        s.addX = t,
        s.addY = i,
        s.speed = r,
        s.mapIndex = a,
        s.crashX = 1,
        s.isShip = !0,
        s.init(),
        s
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes(this.model.texture),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(.5),
        this.addWidth(-.5),
        this.speed < 0 ? (this.addWidth(this.addX + 25),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 15 * Global.map_one_width + this.mapIndex * Global.map_width + 10,
        this.crashX = 14) : (this.addWidth(this.addX),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + this.mapIndex * Global.map_width + 10),
        this.addHeight(this.addY),
        this.timer = new egret.Timer(30),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.start()
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.PLAYER_MOVE_WIDTH:
            this.addY == t.addY && (this.isPlay = !0)
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.PLAYER_MOVE_WIDTH, this)
    }
    ,
    t.prototype.timerHandler = function(e) {
        this.image.x += 3 * this.speed,
        this.image.y += 3 / 3.65 * this.speed,
        this.speed < 0 ? this.image.x + this.image.anchorOffsetX <= this.crash && (this.crash -= Global.map_one_width,
        BackGroundService.instance.setMapArr(31, this.addY, this.crashX, this.mapIndex),
        this.crashX < 13 && BackGroundService.instance.setMapArr(3, this.addY, this.crashX + 2, this.mapIndex),
        12 == this.crashX && Message.instance.send(MsgCMD.ADD_OBJECT, [1, this.addX, this.addY, this.mapIndex, this.speed]),
        this.crashX <= -8 && (this.vis = !1,
        Message.instance.send(MsgCMD.REMOVE_OBJECT, this.mapIndex)),
        this.crashX--) : this.image.x + this.image.anchorOffsetX >= this.crash && (this.crash += Global.map_one_width,
        BackGroundService.instance.setMapArr(31, this.addY, this.crashX, this.mapIndex),
        this.crashX > 2 && BackGroundService.instance.setMapArr(3, this.addY, this.crashX - 2, this.mapIndex),
        4 == this.crashX && Message.instance.send(MsgCMD.ADD_OBJECT, [1, this.addX, this.addY, this.mapIndex, this.speed]),
        this.crashX >= 19 && (this.vis = !1,
        Message.instance.send(MsgCMD.REMOVE_OBJECT, this.mapIndex)),
        this.crashX++),
        this.isPlay && this.animation()
    }
    ,
    t.prototype.animation = function() {
        this.image.texture = RES.getRes("ban_" + Math.floor(this.fi) + "_png"),
        this.fi++,
        this.fi >= 11 && (this.fi = 1,
        this.isPlay = !1)
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.stop(),
        this.timer = null
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e
    }
    ,
    t
}(ObjectModule);
__reflect(MoveShipModule.prototype, "MoveShipModule");
var TipTextController = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.touchEnabled = !1,
        t.touchChildren = !1,
        t
    }
    return __extends(t, e),
    Object.defineProperty(t, "instance", {
        get: function() {
            return this._instance || (this._instance = new t),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.show = function(e, t) {
        var i = new TipView(e,t);
        i.x = this.stage.stageWidth / 2 - i.width / 2,
        i.y = 420,
        this.addChild(i)
    }
    ,
    t
}(egret.Sprite);
__reflect(TipTextController.prototype, "TipTextController");
var TipView = function(e) {
    function t(t, i) {
        var a = e.call(this) || this;
        return a.skinName = "TipsSkin",
        a.info = t,
        a.textColor = i,
        a
    }
    return __extends(t, e),
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.init()
    }
    ,
    t.prototype.init = function() {
        this.touchEnabled = !1,
        this.touchChildren = !1,
        this.exml_infoLabel.textColor = this.textColor,
        this.exml_infoLabel.text = this.info;
        var e = egret.Tween.get(this);
        e.to({
            y: this.y - 100
        }, 1e3),
        e.call(this.removeMySelf, this)
    }
    ,
    t.prototype.removeMySelf = function() {
        this.parent && this.parent.contains(this) && this.parent.removeChild(this)
    }
    ,
    t
}(BaseModule);
__reflect(TipView.prototype, "TipView");
var TrainModule = function(e) {
    function t(t, i, a, r) {
        var s = e.call(this) || this;
        return r > 0 ? (s.model = CarService.instance.getCarDataModel(45),
        s.model1 = CarService.instance.getCarDataModel(46)) : (s.model = CarService.instance.getCarDataModel(44),
        s.model1 = CarService.instance.getCarDataModel(46)),
        s.addX = t,
        s.addY = i,
        s.mapIndex = a,
        s.speed = r,
        s.timer = new egret.Timer(30),
        s.timer.addEventListener(egret.TimerEvent.TIMER, s.timerHandler, s),
        s.timer.start(),
        s.init(),
        s
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.crashX = 1,
        this.crashX1 = 1,
        this.image1 = [],
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes(this.model.texture),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.x = 0,
        this.image.y = 0;
        for (var e = 0; 6 > e; e++)
            this.image1[e] = new egret.Bitmap,
            this.image1[e].texture = RES.getRes(this.model1.texture),
            this.addChild(this.image1[e]),
            this.image1[e].anchorOffsetX = this.model1.anchorOffsetX,
            this.image1[e].anchorOffsetY = this.model1.anchorOffsetY,
            this.image1[e].y = Global.start_height,
            this.image1[e].x += Global.map_width * this.mapIndex,
            this.image1[e].y -= Global.map_height * this.mapIndex,
            this.speed > 0 ? this.addLastWidth(3.2 * -(e + 1), e) : this.addLastWidth(3.2 * (e + 1), e);
        if (this.speed > 0) {
            for (var e = 5; e >= 0; e--)
                this.addChild(this.image1[e]);
            this.addChild(this.image)
        }
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(.5),
        this.addHeight(this.addY),
        this.speed < 0 ? (this.addWidth(25.5),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 17 * Global.map_one_width + this.mapIndex * Global.map_width - 70 + this.image.anchorOffsetX,
        this.crashX = 14,
        this.crash1 = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 18 * Global.map_one_width + this.mapIndex * Global.map_width - 70 + this.image.anchorOffsetX,
        this.crashX1 = 14) : (this.addWidth(-.5),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + this.mapIndex * Global.map_width,
        this.crash1 = (this.addY + .5) * Global.map_add_width + 5 * Global.map_one_width + this.mapIndex * Global.map_width)
    }
    ,
    t.prototype.resetMap = function() {
        this.crashX = 1,
        this.crashX1 = 1,
        this.image.x = 0,
        this.image.y = 0;
        for (var e = 0; 6 > e; e++)
            this.image1[e].x = 0,
            this.image1[e].y = 0,
            this.image1[e].y = Global.start_height,
            this.image1[e].x += Global.map_width * this.mapIndex,
            this.image1[e].y -= Global.map_height * this.mapIndex,
            this.speed > 0 ? this.addLastWidth(3.2 * -(e + 1), e) : this.addLastWidth(3.2 * (e + 1), e);
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(.5),
        this.addHeight(this.addY),
        this.speed < 0 ? (this.addWidth(25.5),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 17 * Global.map_one_width + this.mapIndex * Global.map_width - 70 + this.image.anchorOffsetX,
        this.crashX = 14,
        this.crash1 = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + 15 * Global.map_one_width + this.mapIndex * Global.map_width - 70 + this.image.anchorOffsetX,
        this.crashX1 = 14) : (this.addWidth(-.5),
        this.crash = (this.addY + .5) * Global.map_add_width + 6 * Global.map_one_width + this.mapIndex * Global.map_width,
        this.crash1 = (this.addY + .5) * Global.map_add_width + 8 * Global.map_one_width + this.mapIndex * Global.map_width)
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.CHANGE_INDEX:
            if (t == this.mapIndex % 2)
                break
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.CHANGE_INDEX, this)
    }
    ,
    t.prototype.timerHandler = function(e) {
        this.image.x += 3 * this.speed,
        this.image.y += 3 / 3.65 * this.speed;
        for (var t = 0; 6 > t; t++)
            this.image1[t].x += 3 * this.speed,
            this.image1[t].y += 3 / 3.65 * this.speed;
        this.speed < 0 ? this.image.x + this.image.anchorOffsetX <= this.crash && (this.crash -= Global.map_one_width,
        BackGroundService.instance.setMapArr(-1, this.addY, this.crashX, this.mapIndex),
        13 == this.crashX && ((this.addY + 26 * this.mapIndex - 1 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex - 2 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex == BackGroundService.instance.PlayerY) && BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("trainBells_mp3"),
        Message.instance.send(MsgCMD.SHOW_TRAIN_LIGHT, {
            index: 0,
            addY: this.addY + 26 * this.mapIndex
        })),
        8 == this.crashX && ((this.addY + 26 * this.mapIndex - 1 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex - 2 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex == BackGroundService.instance.PlayerY) && BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("trainPassing_mp3"),
        Message.instance.send(MsgCMD.SHOW_TRAIN_LIGHT, {
            index: 1,
            addY: this.addY + 26 * this.mapIndex
        })),
        this.crashX--) : this.image.x + this.image.anchorOffsetX >= this.crash && (this.crash += Global.map_one_width,
        this.crashX < 15 && BackGroundService.instance.setMapArr(-1, this.addY, this.crashX, this.mapIndex),
        2 == this.crashX && ((this.addY + 26 * this.mapIndex - 1 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex - 2 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex == BackGroundService.instance.PlayerY) && BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("trainBells_mp3"),
        Message.instance.send(MsgCMD.SHOW_TRAIN_LIGHT, {
            index: 0,
            addY: this.addY + 26 * this.mapIndex
        })),
        8 == this.crashX && ((this.addY + 26 * this.mapIndex - 1 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex - 2 == BackGroundService.instance.PlayerY || this.addY + 26 * this.mapIndex == BackGroundService.instance.PlayerY) && BackGroundService.instance.IsPlaySound && SoundManager.instance.playEffect("trainPassing_mp3"),
        Message.instance.send(MsgCMD.SHOW_TRAIN_LIGHT, {
            index: 1,
            addY: this.addY + 26 * this.mapIndex
        })),
        this.crashX++),
        this.speed < 0 ? this.image1[5].x + this.image1[5].anchorOffsetX <= this.crash1 && (this.crash1 -= Global.map_one_width,
        this.crashX1 < 13 && BackGroundService.instance.setMapArr(4, this.addY, this.crashX1 + 2, this.mapIndex),
        -10 == this.crashX1 && this.resetMap(),
        this.crashX1--) : this.image1[5].x + this.image1[5].anchorOffsetX >= this.crash1 && (this.crash1 += Global.map_one_width,
        this.crashX1 > 2 && this.crashX1 < 18 && BackGroundService.instance.setMapArr(4, this.addY, this.crashX1 - 2, this.mapIndex),
        24 == this.crashX1 && this.resetMap(),
        this.crashX1++)
    }
    ,
    t.prototype.remove_view_handler = function(t) {
        e.prototype.remove_view_handler.call(this, t),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHandler, this),
        this.timer.stop(),
        this.timer = null
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e;
        for (var t = 0; 6 > t; t++)
            this.image1[t].y -= Global.map_one_height * e,
            this.image1[t].x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e;
        for (var t = 0; 6 > t; t++)
            this.image1[t].y += Global.map_add_height * e,
            this.image1[t].x += Global.map_one_width * e
    }
    ,
    t.prototype.addLastHeight = function(e, t) {
        this.image1[t].y -= Global.map_one_height * e,
        this.image1[t].x += Global.map_add_width * e
    }
    ,
    t.prototype.addLastWidth = function(e, t) {
        this.image1[t].y += Global.map_add_height * e,
        this.image1[t].x += Global.map_one_width * e
    }
    ,
    t
}(ObjectModule);
__reflect(TrainModule.prototype, "TrainModule", ["IMessage"]);
var TrainLightModule = function(e) {
    function t(t, i, a) {
        var r = e.call(this) || this;
        return r.model = TrainLightService.instance.trainLightDataModel,
        r.addY = i,
        r.addX = t,
        r.mapIndex = a,
        r.init(),
        r
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes("xinhaodeng_png"),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(1.5),
        this.addWidth(.5),
        this.addWidth(14),
        this.addHeight(this.addY)
    }
    ,
    t.prototype.recvMsg = function(e, t) {
        switch (e) {
        case MsgCMD.SHOW_TRAIN_LIGHT:
            if (t.addY != this.addY + 26 * this.mapIndex)
                return;
            0 == t.index ? egret.Tween.get(this.image).wait(100).to({
                texture: RES.getRes("xinhaodeng_1_png")
            }).wait(100).to({
                texture: RES.getRes("xinhaodeng_png")
            }).wait(100).to({
                texture: RES.getRes("xinhaodeng_1_png")
            }).wait(100).to({
                texture: RES.getRes("xinhaodeng_png")
            }).wait(100).to({
                texture: RES.getRes("xinhaodeng_1_png")
            }) : egret.Tween.get(this.image).wait(3e3).to({
                texture: RES.getRes("xinhaodeng_png")
            })
        }
    }
    ,
    t.prototype.add_view_handler = function(t) {
        e.prototype.add_view_handler.call(this, t),
        this.addMessage(MsgCMD.SHOW_TRAIN_LIGHT, this)
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e
    }
    ,
    t
}(ObjectModule);
__reflect(TrainLightModule.prototype, "TrainLightModule", ["IMessage"]);
var TreeModule = function(e) {
    function t(t, i) {
        var a = e.call(this) || this;
        return a.model = TreeService.instance.MapTree,
        a.addY = t,
        a.mapIndex = i,
        a.init(),
        a
    }
    return __extends(t, e),
    t.prototype.init = function() {
        this.image = new egret.Bitmap,
        this.image.texture = RES.getRes(this.model.texture),
        this.addChild(this.image),
        this.image.anchorOffsetX = this.model.anchorOffsetX,
        this.image.anchorOffsetY = this.model.anchorOffsetY,
        this.image.scaleX = 2,
        this.image.scaleY = 2,
        this.image.y = Global.start_height,
        this.image.x += Global.map_width * this.mapIndex,
        this.image.y -= Global.map_height * this.mapIndex,
        this.addHeight(.5),
        this.addWidth(.5),
        this.addHeight(this.addY)
    }
    ,
    t.prototype.addHeight = function(e) {
        this.image.y -= Global.map_one_height * e,
        this.image.x += Global.map_add_width * e
    }
    ,
    t.prototype.addWidth = function(e) {
        this.image.y += Global.map_add_height * e,
        this.image.x += Global.map_one_width * e
    }
    ,
    t
}(ObjectModule);
__reflect(TreeModule.prototype, "TreeModule");
