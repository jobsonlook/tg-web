var isFirstLogin = true;
require = function c(o, s, r) {
    function h(t, e) {
        if (!s[t]) {
            if (!o[t]) {
                var n = "function" == typeof require && require;
                if (!e && n)
                    return n(t, !0);
                if (l)
                    return l(t, !0);
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND",
                a
            }
            var i = s[t] = {
                exports: {}
            };
            o[t][0].call(i.exports, function(e) {
                return h(o[t][1][e] || e)
            }, i, i.exports, c, o, s, r)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < r.length; e++)
        h(r[e]);
    return h
}({
    block: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98313d7bZFJqKdxyYnvxjBm", "block"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.mid = this.node.getChildByName("New Node").getChildByName("mid"),
                this.up = this.node.getChildByName("New Node").getChildByName("up"),
                this.down = this.node.getChildByName("New Node").getChildByName("down"),
                this.left = this.node.getChildByName("New Node").getChildByName("left"),
                this.right = this.node.getChildByName("New Node").getChildByName("right"),
                this.scoreLab = this.node.getChildByName("scoreLab"),
                this.beforeLen = 0
            },
            is_jump_on_block: function(e, t) {
                var n = this.mid.convertToWorldSpaceAR(cc.p(0, 0))
                  , a = cc.pSub(e, n)
                  , i = cc.pLength(a)
                  , c = n;
                if (1 === t) {
                    var o = this.up.convertToWorldSpaceAR(cc.p(0, 0));
                    a = cc.pSub(e, o),
                    (h = cc.pLength(a)) < i && (i = h,
                    c = o);
                    var s = this.down.convertToWorldSpaceAR(cc.p(0, 0));
                    a = cc.pSub(e, s),
                    (h = cc.pLength(a)) < i && (i = h,
                    c = s)
                } else {
                    var r = this.left.convertToWorldSpaceAR(cc.p(0, 0));
                    a = cc.pSub(e, r),
                    (h = cc.pLength(a)) < i && (i = h,
                    c = r);
                    var h, l = this.right.convertToWorldSpaceAR(cc.p(0, 0));
                    a = cc.pSub(e, l),
                    (h = cc.pLength(a)) < i && (i = h,
                    c = l)
                }
                return a = cc.pSub(e, c),
                cc.log("==============len:", cc.pLength(a)),
                cc.pLength(a) < 100 && (e.x = c.x,
                e.y = c.y,
                !0)
            },
            is_jump_on_curBlock: function(e, t) {
                var n = this.mid.convertToWorldSpaceAR(cc.p(0, 0))
                  , a = this.up.convertToWorldSpaceAR(cc.p(0, 0))
                  , i = this.left.convertToWorldSpaceAR(cc.p(0, 0));
                if (1 === t) {
                    var c = cc.pSub(n, e)
                      , o = cc.pLength(c)
                      , s = cc.pSub(n, a);
                    if (-30 < cc.pLength(s) - o)
                        return !0
                } else {
                    c = cc.pSub(n, e),
                    o = cc.pLength(c),
                    s = cc.pSub(n, i);
                    if (-30 <= cc.pLength(s) - o)
                        return !0
                }
                return !1
            },
            getBlockName: function() {
                return this.name
            },
            getBlockMidPos: function() {
                return this.mid.convertToWorldSpaceAR(cc.p(0, 0))
            },
            jumpMidPoint: function(e) {
                var t = this.mid.convertToWorldSpaceAR(cc.p(0, 0))
                  , n = cc.pSub(e, t)
                  , a = cc.pLength(n);
                return cc.log("min_len2:", a),
                0 <= a && a < 10
            },
            addScore: function(e) {
                this.scoreLab.getComponent(cc.Label).string = "+" + e,
                this.scoreLab.opacity = 255;
                var t = this.mid.convertToWorldSpaceAR(cc.p(0, 0))
                  , n = (t.x,
                t.y,
                cc.jumpBy(1.6, cc.p(0, 0), 80, 1))
                  , a = cc.fadeOut(.8);
                this.scoreLab.runAction(cc.spawn(n, a))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    game_scene: [function(e, t, n) {
        "use strict";
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        cc._RF.push(t, "0fd31d27O1JdLPDqO4p8XV+", "game_scene");
        var i = e("global_data");
        cc.Class({
            extends: cc.Component,
            properties: {
                player: {
                    type: cc.Node,
                    default: null
                },
                block_prefab: {
                    default: [],
                    type: cc.Prefab
                },
                block_root: {
                    type: cc.Node,
                    default: null
                },
                left_org: cc.p(0, 0),
                map_root: {
                    type: cc.Node,
                    default: null
                },
                y_radio: .5560472,
                checkout: {
                    type: cc.Node,
                    default: null
                },
                endLayer: {
                    type: cc.Node,
                    default: null
                },
                headSp: {
                    default: [],
                    type: cc.Sprite
                },
                rank_prefab: {
                    type: cc.Prefab,
                    default: null
                },
                audio: {
                    default: [],
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                this.score = 0,
                this.blockNum = 1,
                this.jsonIndex = 0,
                this.jsonDataArray = i.jsonDataArray,
                this.highestScore = 0,
                this.candleArray = [],
                this.reviveNum = 1

                if (isFirstLogin) {
                    isFirstLogin = false;
                }
                else {
                    setLoadingVisible(true, true, function () {
                        
                    })
                }
            },
            start: function() {
                cc.log("type:", i.SDK_TYPE),
                this.lightNode = cc.find("Canvas/game/light");
                for (var e = 0; e < 6; e++) {
                    var t = "Canvas/game/light/tyt_object" + (15 + e)
                      , n = cc.find(t);
                    this.candleArray[e] = n
                }
                this.cur_block = cc.instantiate(this.block_prefab[Math.floor(3 * Math.random())]),
                this.block_root.addChild(this.cur_block),
                this.cur_block.setPosition(this.block_root.convertToNodeSpaceAR(this.left_org));
                var a = this.cur_block.getChildByName("New Node").getChildByName("mid").convertToWorldSpaceAR(cc.p(0, 0));
                this.player.setPosition(this.map_root.convertToNodeSpaceAR(a)),
                this.next_block = this.cur_block,
                this.player_com = this.player.getComponent("player"),
                this.block_zorder = -1,
                this.addBlockEnd = !0,
                this.setPauseAllEffect(),
                this.add_block(),
                this.setLayerRank()
            },
            setLayerRank: function() {
                var e = cc.find("Canvas/tyt_score_bg")
                  , t = cc.find("Canvas/game")
                  , n = cc.find("Canvas/check_out")
                  , a = cc.find("Canvas/endLayer")
                  , i = cc.find("Canvas/rain_node")
                  , c = cc.find("Canvas/touchButton")
                  , o = cc.find("Canvas/check_out")
                  , s = cc.find("Canvas/endLayer");
                e.zIndex = 2,
                i.zIndex = 2,
                t.zIndex = 2,
                n.zIndex = 2,
                a.zIndex = 2,
                c.zIndex = 2,
                o.zIndex = 3,
                s.zIndex = 3
            },
            setPauseAllEffect: function() {
                cc.audioEngine.pauseAllEffects(),
                cc.audioEngine.pauseAll()
            },
            setPlayerData: function() {
                var a = this;
                if ("undefined" != typeof FBInstant)
                    if (this.entries = [],
                    i.FB_RandData) {
                        this.entries = i.FB_RandData;
                        for (var e = 0; e < this.entries.length; e++)
                            this.entries[e].isSelf && (this.playerNum = e);
                        this.set_endlayer()
                    } else
                        FBInstant.getLeaderboardAsync("global_test").then(function(e) {
                            return e.getEntriesAsync()
                        }).then(function(e) {
                            for (var t = [], n = a.playerNum = 0; n < e.length; n++)
                                t.push({
                                    headUrl: e[n].getPlayer().getPhoto(),
                                    nickName: e[n].getPlayer().getName(),
                                    score: e[n].getScore(),
                                    rankNum: e[n].getRank(),
                                    isSelf: e[n].getPlayer().getID() == FBInstant.player.getID()
                                }),
                                e[n].getPlayer().getID() == FBInstant.player.getID() && (a.playerNum = n);
                            a.entries = t,
                            i.FB_RandData = t
                        }).then(function() {
                            a.set_endlayer()
                        })
            },
            chooseEnvironment: function() {
                "undefined" != typeof FBInstant && FBInstant.context.chooseAsync({
                    filters: ["NEW_CONTEXT_ONLY"],
                    minSize: 3
                }).then(function() {
                    var e;
                    console.log("updateAsync"),
                    FBInstant.updateAsync((e = {
                        action: "CUSTOM",
                        cta: "play_turn",
                        text: "Kun just played HELLO. Now it's Alissa's turn!",
                        image: this.getImgBase64()
                    },
                    a(e, "text", {
                        default: "Let us play game together",
                        localizations: {
                            en_US: "Let us play game together",
                            zh_CN: "来玩吧"
                        }
                    }),
                    a(e, "template", "VILLAGE_INVASION"),
                    a(e, "data", {
                        myReplayData: "..."
                    }),
                    a(e, "strategy", "IMMEDIATE"),
                    a(e, "notification", "NO_PUSH"),
                    e)).then(function() {
                        console.log("Message was sent successfully")
                    }).catch(function(e) {
                        console.log("update Async:", e)
                    })
                })
            },
            add_block: function() {
                var e = 1
                  , t = 1;
                this.player_com.set_cur_JsonIndex(this.jsonIndex),
                this.jsonDataArray.length && (this.jsonIndex = this.getRandNum(),
                t = parseInt(this.jsonDataArray[this.jsonIndex].name),
                e = parseInt(this.jsonDataArray[this.jsonIndex].scaleRatio) / 100,
                cc.log("-----------index,blockIndex:", this.jsonIndex, t, e)),
                this.player_com.set_next_JsonIndex(this.jsonIndex),
                this.cur_block = this.next_block,
                this.player_com.set_cur_block(this.cur_block.getComponent("block")),
                this.next_block = cc.instantiate(this.block_prefab[t - 1]),
                this.next_block.getChildByName("New Node").setScale(e),
                this.block_root.addChild(this.next_block),
                this.next_block.setLocalZOrder(this.block_zorder),
                this.block_zorder--;
                var n = 200 + 200 * Math.random()
                  , a = n * this.y_radio
                  , i = this.cur_block.getPosition();
                i.x += n * this.player_com.direction,
                i.y += a,
                this.next_block.setPosition(i),
                this.player_com.set_next_block(this.next_block.getComponent("block")),
                this.add_candle(),
                this.blockNum++,
                this.addBlockEnd = !0
            },
            add_candle: function() {
                var e = this.cur_block.getPosition().y
                  , t = this.cur_block.getPosition()
                  , n = 180 * Math.random()
                  , a = n * this.y_radio;
                t.x += -n * this.player_com.direction,
                t.y += a + 500,
                this.lightNode = cc.find("Canvas/game/light");
                for (var i = Math.floor(6 * Math.random()), c = Math.floor(6 * Math.random()), o = Math.floor(6 * Math.random()), s = 0; s < 6; s++)
                    if (1280 <= e - this.candleArray[i].getPosition().y) {
                        if (this.candleArray[i].setPosition(t.x - 40, t.y + 100),
                        2 === i || 4 === i)
                            (r = cc.instantiate(this.candleArray[c])).setPosition(t.x + 20, t.y + 60),
                            this.lightNode.addChild(r),
                            r.opacity = 0,
                            r.runAction(cc.fadeIn(3));
                        else if (3 === i || 5 === i) {
                            var r;
                            (r = cc.instantiate(this.candleArray[c])).setPosition(t.x + 20, t.y + 70),
                            this.lightNode.addChild(r);
                            var h = cc.instantiate(this.candleArray[o]);
                            h.setPosition(t.x - 30, t.y + 40),
                            this.lightNode.addChild(h),
                            r.opacity = 0,
                            h.opacity = 0,
                            r.runAction(cc.fadeIn(3)),
                            h.runAction(cc.fadeIn(3))
                        }
                        this.candleArray[i].opacity = 0,
                        this.candleArray[i].runAction(cc.fadeIn(3))
                    }
            },
            getRandNum: function() {
                var e = 0
                  , t = 0
                  , n = 0
                  , a = !1;
                cc.log("-------------score:", this.getGameScore());
                for (var i = 0; i < this.jsonDataArray.length; i++) {
                    var c = this.jsonDataArray[i].scoreInterval
                      , o = parseInt(c[0])
                      , s = parseInt(c[1]);
                    (this.getGameScore() >= o && this.getGameScore() < s || this.getGameScore() >= o && -1 === s) && (a || (t = i,
                    a = !0),
                    n = i)
                }
                if (t === n)
                    return t;
                for (var r = t; r < n + 1; r++)
                    e += parseInt(this.jsonDataArray[r].occurrenceRadio);
                var h = Math.floor(Math.random() * e);
                cc.log("------------randNum,minInde,maxIndex,sum", h, t, n, e);
                var l = 0;
                for (r = t; r < n + 1; r++)
                    if (h <= (l += parseInt(this.jsonDataArray[r].occurrenceRadio)))
                        return r
            },
            move_map: function(e, t) {
                this.addBlockEnd = !1;
                var n = cc.moveBy(.5, e, t)
                  , a = cc.callFunc(function() {
                    this.add_block()
                }
                .bind(this))
                  , i = cc.sequence(a, n);
                this.map_root.runAction(i)
            },
            set_endlayer: function() {
                var e = 0
                  , t = 0;
                this.entries.length <= 3 ? this.entries[0] && (e = 0) : this.entries[this.playerNum + 0 - 1] ? e = this.playerNum + 0 - 1 : this.entries[this.playerNum + 0] && (e = this.playerNum + 0),
                console.log("startIndex:", e);
                for (var n = e; n < 3 + e; n++)
                    if (this.entries[n]) {
                        var a = this.entries[n].headUrl;
                        this.getHighestScore(n, a, t),
                        t++
                    }
            },
            getHighestScore: function(e, t, n) {
                var a = this;
                if (console.log("=============getHighestScore"),
                "undefined" != typeof FBInstant) {
                    var i = "Canvas/endLayer/tyt_settle_accounts_bg/tyt_infor_bg0/tyt_infor_bg" + (n + 1);
                    cc.find(i).active = !0,
                    cc.loader.load(t, function(e, t) {
                        a.headSp[n].spriteFrame = new cc.SpriteFrame(t)
                    }),
                    console.log("========i:", n, e);
                    var c = "Canvas/endLayer/tyt_settle_accounts_bg/tyt_infor_bg0/tyt_infor_bg" + (n + 1) + "/numLab"
                      , o = "Canvas/endLayer/tyt_settle_accounts_bg/tyt_infor_bg0/tyt_infor_bg" + (n + 1) + "/nameLab"
                      , s = cc.find(c)
                      , r = cc.find(o)
                      , h = s.getComponent(cc.Label)
                      , l = r.getComponent(cc.Label);
                    h.string = this.entries[e].rankNum,
                    l.string = this.entries[e].nickName
                }
            },
            on_game_again: function() {
                cc.director.loadScene("game_scene")
            },
            return_lobby_scene: function() {
                cc.director.loadScene("lobby_scene")
            },
            setGameScore: function(e) {
                this.score = e
            },
            getGameScore: function() {
                return this.score
            },
            add_block_end: function() {
                return this.addBlockEnd
            },
            getBlockNum: function() {
                return this.blockNum
            },
            on_checkout_game: function() {
                console.log("on_checkout_game"),
                this.checkout.active = !0;
                var e = cc.find("Canvas/check_out/shareLayer");
                e.setScale(0),
                e.runAction(cc.scaleTo(.3, 1)),
                cc.find("Canvas/check_out/shareLayer/scoreLab").getComponent(cc.Label).string = this.getGameScore(),
                this.ranklayer = cc.instantiate(this.rank_prefab),
                this.ranklayer.setPosition(360, 640),
                this.ranklayer.setAnchorPoint(.5, .5),
                cc.director.getScene().addChild(this.ranklayer),
                this.ranklayer.zIndex = 3,
                this.ranklayer.active = !1
            },
            clickNoThanksBtn: function() {
                this.checkout.active = !1,
                this.endLayer.active = !0;
                var e = cc.callFunc(function() {
                    (console.log("hightScore:", this.highestScore),
                    this.getGameScore() > this.highestScore) && (this.endLayer.getChildByName("end_effect").active = !0);
                    cc.find("Canvas/endLayer/tyt_settle_accounts_bg/scoreLab").getComponent(cc.Label).string = this.getGameScore(),
                    cc.find("Canvas/endLayer/tyt_settle_accounts_bg/highestScore").getComponent(cc.Label).string = "HIGHEST SCORE:" + this.highestScore
                }
                .bind(this))
                  , t = this.endLayer.getChildByName("tyt_settle_accounts_bg");
                t.setScale(0),
                setLoadingVisible(true, true, function () {
                }),
                cc.director.loadScene("lobby_scene")
                // t.runAction(cc.sequence(cc.scaleTo(.3, 1), e))
            },
            clickShareBtn: function(e) {
                var t = this;

                if (t.reviveNum <= 0) {
                    this.clickNoThanksBtn();
                    return;
                }

                setLoadingVisible(true, true, function () {
                    t.reviveNum--,
                    0 === t.reviveNum && (t.checkout.active = !1)
                });
            },
            clickRankBtn: function() {
                this.endLayer.active = !1,
                this.ranklayer.active = !0,
                this.ranklayer.getComponent("rank_layer").getRemoveBtn().active = !1,
                this.ranklayer.getComponent("rank_layer").getReturnBtn().active = !0
            }, 
            end_layer_clickShareBtn: function(e) {
                console.log("share"),
                cc.director.loadScene("lobby_scene")
            },
            getImgBase64: function() {
                var e = cc.find("Canvas/share")
                  , t = e.width
                  , n = e.height;
                console.log("width,", t, n);
                var a = new cc.RenderTexture(t,n);
                a.begin(),
                e._sgNode.visit(),
                a.end();
                var i = document.createElement("canvas")
                  , c = i.getContext("2d");
                if (i.width = t,
                i.height = n,
                cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                    var o = a.getSprite().getTexture().getHtmlElementObj();
                    c.drawImage(o, 0, 0)
                } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                    var s = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, s);
                    var r = a.getSprite().getTexture()._glID;
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, r, 0);
                    var h = new Uint8Array(t * n * 4);
                    gl.readPixels(0, 0, t, n, gl.RGBA, gl.UNSIGNED_BYTE, h),
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    for (var l = 4 * t, d = 0; d < n; d++) {
                        var u = n - 1 - d
                          , g = new Uint8ClampedArray(h.buffer,u * t * 4,l)
                          , m = new ImageData(g,t,1);
                        c.putImageData(m, 0, d)
                    }
                }
                return i.toDataURL("image/png")
            },
            add_ring_effect: function(e) {
                var t = cc.find("Canvas/rain_node/ring_node")
                  , n = t.getChildByName("ring");
                n.setScale(0);
                for (var a = 0; a < 6; a++) {
                    var i = cc.instantiate(n)
                      , c = 360 - 720 * Math.random()
                      , o = 400 - 1e3 * Math.random();
                    i.setPosition(c, o),
                    t.addChild(i);
                    var s = cc.scaleTo(1, .8)
                      , r = cc.fadeOut(1)
                      , h = cc.callFunc(function() {
                        cc.isValid(i) && (i.removeFromParent(!0),
                        i.destroy())
                    }
                    .bind(this));
                    i.runAction(cc.sequence(cc.spawn(s, r), h))
                }
            },
            getArray: function() {
                return this.jsonDataArray
            },
            get_reviveNum: function() {
                return this.reviveNum
            },
            set_reviveNum: function(e) {
                this.reviveNum = e
            },
            setHighestScore: function(e) {
                this.highestScore = e
            }
        }),
        cc._RF.pop()
    }
    , {
        global_data: "global_data"
    }],
    global_data: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dd77daKZEBKPaUzbyh/FXWT", "global_data"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                t.exports = {
                    SDK_TYPE: 0,
                    userId: 0,
                    FB_RandData: [],
                    jsonDataArray: []
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    lobby_scene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "018d3uW4wpLZaY1Y4K5t3Pu", "lobby_scene");
        var o = e("global_data");
        cc.Class({
            extends: cc.Component,
            properties: {
                rank_prefab1: {
                    type: cc.Prefab,
                    default: null
                },
                setting_prefab: {
                    type: cc.Prefab,
                    default: null
                }
            },
            onLoad: function() {
                this.game_start = !1,
                this.getJsonData();
                if ((o.SDK_TYPE = 1001) === o.SDK_TYPE) {
                    if ("undefined" == typeof XMGame)
                        return cc.log("XMGame is undefined"),
                        void console.log("XMGame is undefined");
                    console.log("number:", this.number),
                    this.game_start || (XMGame.game_start(this.foo("")),
                    this.game_start = !0)
                }
            },
            foo: function(e) {
                if ("undefined" == typeof XMGame)
                    return cc.log("XMGame is undefined"),
                    void console.log("XMGame is undefined");
                "3" === e.code && XMGame.game_over({
                    cost_time: 1e4,
                    score: 0
                })
            },
            start: function() {
                cc.view.enableAntiAlias(!0),
                cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.EXACT_FIT),
                this.createdLayer = !1;
                var e = 0;
                cc.sys.localStorage.getItem("score") && (e = parseInt(cc.sys.localStorage.getItem("score"))),
                cc.sys.localStorage.getItem("userId") && (o.userId = cc.sys.localStorage.getItem("userId")),
                o.userId || (o.userId = this.rand_userId(),
                cc.sys.localStorage.setItem("userId", o.userId)),
                cc.log("score,userId:", e, o.userId);
                var t = {
                    accountId: "" + o.userId,
                    level: e,
                    gameServer: "XM",
                    accountType: o.SDK_TYPE,
                    age: 1,
                    accountName: "" + o.userId,
                    gender: 1
                };
                "undefined" == typeof TDGA ? console.log("TDGA is undefined") : (console.log("TDGA:", o.userId),
                TDGA.Account(t))
            },
            rand_userId: function() {
                for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)
                    e[n] = t.substr(Math.floor(16 * Math.random()), 1);
                return e[14] = "4",
                e[19] = t.substr(3 & e[19] | 8, 1),
                e[8] = e[13] = e[18] = e[23] = "-",
                e.join("")
            },
            setLobbyRankLayer: function() {
                this.rankLayer = cc.instantiate(this.rank_prefab1),
                this.rankLayer.setPosition(189, 100),
                this.rankLayer.setAnchorPoint(.5, .5),
                cc.director.getScene().addChild(this.rankLayer),
                this.rankLayer.getComponent("rank_layer").getRankLayer().active = !1
            },
            clickPlayBtn: function(e) {
                var t = cc.find("Canvas/lobby_bg/play_btn");
                cc.find("Canvas/lobby_bg/loading_effect").active = !0,
                t.active = !1,
                1e3 === o.SDK_TYPE && cc.loader.release(this.rankLayer),
                cc.director.loadScene("game_scene")
            },
            clickRankBtn: function() {
                this.createdLayer ? (this.rankLayer.getComponent("rank_layer").getRankLayer().active = !0,
                this.rankView.setScale(0),
                this.rankView.runAction(cc.scaleTo(.3, 1))) : (this.rankLayer = cc.instantiate(this.rank_prefab1),
                this.rankLayer.setPosition(360, 640),
                this.rankLayer.setAnchorPoint(.5, .5),
                cc.director.getScene().addChild(this.rankLayer),
                this.rankView = this.rankLayer.getChildByName("scrollview"),
                this.rankView.setScale(0),
                this.rankView.runAction(cc.scaleTo(.3, 1)),
                this.createdLayer = !0)
            },
            clickSettingBtn: function() {
                this.settingLayer ? this.settingLayer.active = !0 : (this.settingLayer = cc.instantiate(this.setting_prefab),
                this.settingLayer.setPosition(360, 640),
                this.settingLayer.setAnchorPoint(.5, .5),
                cc.director.getScene().addChild(this.settingLayer),
                this.layer = this.settingLayer.getChildByName("setting_layer")),
                this.layer.setScale(0),
                this.layer.runAction(cc.scaleTo(.3, 1))
            },
            clickReturnBtn: function() {
                cc.log("no thank")
            },
            getJsonData: function() {
                var e = cc.url.raw("resources/jump.json")
                  , i = []
                  , c = new Array;
                cc.loader.load(e, this, function(e, t) {
                    if (!e) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n].scoreInterval;
                            c = a.split(","),
                            i.push({
                                id: t[n].id,
                                name: t[n].name,
                                score: t[n].score,
                                scaleRatio: t[n].scaleRatio,
                                scoreInterval: c,
                                occurrenceRadio: t[n].occurrenceRadio,
                                effect: t[n].effect
                            })
                        }
                        return cc.log("id:%s", i[1].id),
                        o.jsonDataArray = i
                    }
                    cc.log("error:%s", e)
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        global_data: "global_data"
    }],
    player: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "21c8axcsehOF7uRiV385w6I", "player");
        var a = e("game_scene")
          , k = e("global_data");
        cc.Class({
            extends: cc.Component,
            properties: {
                init_speed: 150,
                a_power: 600,
                y_radio: .5560472,
                game_manager: {
                    type: a,
                    default: null
                }
            },
            onLoad: function() {
                this.next_block = null,
                this.direction = 1,
                this.score = 0,
                this.cur_block = null,
                this.cur_JsonIndex = 0,
                this.next_JsonIndex = 0,
                this.game_time = 0,
                this.rain_time = 0
            },
            player_jumpOnCurBlack: function() {
                cc.log("7777777777777curBlock jump77777777777777777777"),
                this.junmpEnd = !1,
                this.node.getComponent(cc.MotionStreak).reset(),
                this.node.getComponent(cc.MotionStreak)._onNodePositionChanged();
                var e = cc.jumpBy(.35, cc.p(0, 0), 200, 1)
                  , t = cc.callFunc(function() {
                    this.junmpEnd = !0,
                    cc.audioEngine.playEffect(this.game_manager.audio[0], 0, cc.audioEngine.getEffectsVolume()),
                    this.node.getComponent(cc.MotionStreak).reset()
                }
                .bind(this))
                  , n = cc.sequence(e, t);
                this.node.runAction(n)
            },
            player_jump: function() {
                this.junmpEnd = !1;
                var e = this.x_distance * this.direction
                  , t = this.x_distance * this.y_radio
                  , n = this.node.getPosition();
                n.x += e,
                n.y += t,
                cc.log("vvvvvvvvvvvv addBlockEnd:%d vvvvvvvvvvvvvvv", this.game_manager.add_block_end());
                var y = this.next_JsonIndex;
                cc.log("player jsonIndex:", y);
                var v = this.node.parent.convertToWorldSpaceAR(n);
                this.jumpNum1 = this.cur_block.is_jump_on_curBlock(v, this.direction);
                var b = this.next_block.is_jump_on_block(v, this.direction);
                b ? n = this.node.parent.convertToNodeSpaceAR(v) : this.jumpNum1 || (cc.log("gameover"),
                this.is_game_over = !0);
                var a = cc.jumpTo(.35, n, 200, 1)
                  , i = cc.callFunc(function() {
                    if (this.is_game_over) {
                        cc.audioEngine.playEffect(this.game_manager.audio[2], 0, cc.audioEngine.getEffectsVolume()),
                        this.game_manager.setGameScore(this.score);
                        var e = .8;
                        1e3 === k.SDK_TYPE ? this.setRankScore(this.score) : 1001 === k.SDK_TYPE && (e = 1),
                        this.anim_node.active = !1;
                        var t = this.rot_node.getChildByName("dead_effect");
                        t.active = !0;
                        var n = t.getComponent(dragonBones.ArmatureDisplay);
                        -1 === this.direction ? n.playAnimation("lady_r", .7) : n.playAnimation("lady_b", .7),
                        this.scheduleOnce(function() {
                            this.game_manager.on_checkout_game();

                            // 1e3 === k.SDK_TYPE ? this.game_manager.on_checkout_game() : 1001 === k.SDK_TYPE && this.setXMRankScore(this.score)
                        }, e)
                    } else {
                        if (cc.log("jumpNum:%d,jumpNum1:%d", b, this.jumpNum1),
                        b && !this.jumpNum1) {
                            var a = this.cur_block.getBlockMidPos()
                              , i = this.next_block.getBlockMidPos()
                              , c = Math.abs(a.x - i.x) * this.y_radio;
                            this.direction = Math.random() < .5 ? -1 : 1,
                            -1 === this.direction ? (this.game_manager.move_map(580 - v.x, -c),
                            this.reverse_anim.active = !0,
                            this.normal_anim.active = !1) : (this.game_manager.move_map(180 - v.x, -c),
                            this.reverse_anim.active = !1,
                            this.normal_anim.active = !0)
                        }
                        this.jumpNum1 && cc.audioEngine.playEffect(this.game_manager.audio[0], 0, cc.audioEngine.getEffectsVolume())
                    }
                    if (b) {
                        this.x_distance,
                        this.direction,
                        this.x_distance,
                        this.y_radio;
                        var o = this.node.convertToWorldSpaceAR(cc.p(0, 0));
                        this.jsonDataArray = this.game_manager.getArray();
                        var s = parseInt(this.jsonDataArray[y].score);
                        this.next_block.jumpMidPoint(o) ? (this.continuous_jumpNum++,
                        this.effectPath.active || (this.effectPath.active = !0),
                        this.effectPath2.active || (this.effectPath2.active = !0),
                        this.effectPath.active = !0,
                        this.effectPath2.active = !0,
                        this.jump_effect.clearTracks(),
                        this.reward_effect.clearTracks(),
                        1 === this.continuous_jumpNum ? (cc.audioEngine.playEffect(this.game_manager.audio[3], 0, cc.audioEngine.getEffectsVolume()),
                        this.jump_effect.setAnimation(0, "eff_tyt_youxinei_ring_a", !1),
                        this.reward_effect.setAnimation(0, "eff_tyt_youxinei_xx1", !1)) : 2 === this.continuous_jumpNum ? (-1 === this.direction ? cc.audioEngine.playEffect(this.game_manager.audio[5], 0, cc.audioEngine.getEffectsVolume()) : cc.audioEngine.playEffect(this.game_manager.audio[4], 0, cc.audioEngine.getEffectsVolume()),
                        this.jump_effect.setAnimation(0, "eff_tyt_youxinei_ring_b", !1),
                        this.reward_effect.setAnimation(0, "eff_tyt_youxinei_xx2", !1)) : (-1 === this.direction ? cc.audioEngine.playEffect(this.game_manager.audio[7], 0, cc.audioEngine.getEffectsVolume()) : cc.audioEngine.playEffect(this.game_manager.audio[6], 0, cc.audioEngine.getEffectsVolume()),
                        this.jump_effect.setAnimation(0, "eff_tyt_youxinei_ring_b", !1),
                        this.reward_effect.setAnimation(0, "eff_tyt_youxinei_xx3", !1))) : (cc.audioEngine.playEffect(this.game_manager.audio[0], 0, cc.audioEngine.getEffectsVolume()),
                        this.continuous_jumpNum = 0,
                        this.effectPath2.active || (this.effectPath2.active = !0),
                        this.reward_effect.clearTracks(),
                        this.reward_effect.setAnimation(0, "eff_tyt_youxinei_xx1", !1)),
                        1 <= this.continuous_jumpNum && (s = 2 * s * this.continuous_jumpNum),
                        this.score = this.score + s;
                        var r = this.score;
                        this.scoreLab.string = r,
                        cc.log("score:", s),
                        this.next_block.addScore(s),
                        this.game_manager.setGameScore(this.score)
                    }
                    var h = this.game_manager.getBlockNum()
                      , l = cc.find("Canvas/game_bg2");
                    if (h % 20 == 0 && 0 != this.score) {
                        if (5 < this.index && (this.index = 1),
                        255 === l.opacity && 255 === this.bgNode.opacity) {
                            var d = cc.callFunc(function() {
                                l.zIndex = 0,
                                this.bgNode.zIndex = 1
                            }
                            .bind(this));
                            this.bgNode.runAction(cc.fadeOut(7)),
                            l.runAction(cc.sequence(d, cc.fadeIn(6)))
                        } else {
                            var u = "resources/bg/game_bg" + this.index + ".jpg"
                              , g = cc.url.raw(u);
                            if (l.opacity < 255) {
                                var m = l.getComponent(cc.Sprite);
                                cc.loader.load(g, function(e, t) {
                                    m.spriteFrame = new cc.SpriteFrame(t)
                                });
                                var _ = cc.callFunc(function() {
                                    l.zIndex = 0,
                                    this.bgNode.zIndex = 1
                                }
                                .bind(this));
                                this.bgNode.runAction(cc.fadeOut(7)),
                                l.runAction(cc.sequence(_, cc.fadeIn(6)))
                            } else {
                                var f = this.bgNode.getComponent(cc.Sprite);
                                cc.loader.load(g, function(e, t) {
                                    f.spriteFrame = new cc.SpriteFrame(t)
                                });
                                var p = cc.callFunc(function() {
                                    this.bgNode.zIndex = 0,
                                    l.zIndex = 1
                                }
                                .bind(this));
                                l.runAction(cc.fadeOut(7)),
                                this.bgNode.runAction(cc.sequence(p, cc.fadeIn(6)))
                            }
                        }
                        this.rain_effect(),
                        this.index++
                    }
                    this.junmpEnd = !0
                }
                .bind(this))
                  , c = cc.sequence(a, i);
                this.node.runAction(c)
            },
            rain_effect: function() {
                var e = cc.find("Canvas/rain_node");
                1 === this.index || 5 === this.index ? e.active = !0 : (cc.log("this.index:true true"),
                e.active = !1)
            },
            set_next_block: function(e) {
                this.next_block = e
            },
            set_cur_block: function(e) {
                this.cur_block = e
            },
            set_cur_JsonIndex: function(e) {
                this.cur_JsonIndex = e
            },
            set_next_JsonIndex: function(e) {
                this.next_JsonIndex = e
            },
            getGameScore: function() {
                return this.score
            },
            start: function() {
                cc.log("globalData.userId:", k.userId),
                this.index = 2,
                this.is_game_over = !1,
                this.canTouch = !0,
                this.rot_node = this.node.getChildByName("rotate"),
                this.anim_node = this.rot_node.getChildByName("anim"),
                this.touchBtn = cc.find("Canvas/touchButton"),
                this.normal_anim = this.anim_node.getChildByName("normal_anim"),
                this.reverse_anim = this.anim_node.getChildByName("reverse_anim"),
                this.bgNode = cc.find("Canvas/bg");
                var e = cc.find("Canvas/tyt_score_bg/scoreLab");
                this.scoreLab = e.getComponent(cc.Label),
                this.effectPath = this.anim_node.getChildByName("jump_effect"),
                this.jump_effect = this.effectPath.getComponent(sp.Skeleton),
                this.effectPath2 = this.anim_node.getChildByName("reward_effect"),
                this.reward_effect = this.effectPath2.getComponent(sp.Skeleton),
                this.is_power_mode = !1,
                this.speed = 0,
                this.x_distance = 0,
                this.junmpEnd = !0,
                this.continuous_jumpNum = 0,
                this.bgNode.on(cc.Node.EventType.TOUCH_START, function(e) {
                    this.is_power_mode = !0,
                    this.x_distance = 0,
                    this.speed = this.init_speed,
                    this.anim_node.stopAllActions(),
                    this.cur_block.node.stopAllActions(),
                    this.next_block.node.stopAllActions(),
                    this.animPoint = this.anim_node.getPosition();
                    var t = cc.p(0, 0);
                    t.x = this.animPoint.x + 5,
                    t.y = this.animPoint.y - 68,
                    this.anim_node.runAction(cc.scaleTo(2, 1, .5)),
                    this.anim_node.runAction(cc.moveTo(2, t)),
                    this.game_manager.add_block_end() && this.junmpEnd ? this.cur_block.node.runAction(cc.scaleTo(2, 1, .5)) : this.next_block.node.runAction(cc.scaleTo(2, 1, .5))
                }
                .bind(this), this),
                this.bgNode.on(cc.Node.EventType.TOUCH_END, function(e) {
                    this.effectPath.active = !1,
                    this.effectPath2.active = !1,
                    this.is_power_mode = !1,
                    this.anim_node.stopAllActions(),
                    this.cur_block.node.stopAllActions(),
                    this.next_block.node.stopAllActions(),
                    this.anim_node.runAction(cc.scaleTo(.5, 1, 1)),
                    this.anim_node.runAction(cc.moveTo(.5, this.animPoint)),
                    this.game_manager.add_block_end() && this.junmpEnd ? this.cur_block.node.runAction(cc.scaleTo(.5, 1, 1)) : this.next_block.node.runAction(cc.scaleTo(.5, 1, 1)),
                    this.game_manager.add_block_end() && this.junmpEnd && this.next_block.mid ? this.player_jump() : (!this.game_manager.add_block_end() && this.junmpEnd || !this.next_block.mid && this.junmpEnd) && this.player_jumpOnCurBlack()
                }
                .bind(this), this),
                this.bgNode.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                    this.is_power_mode = !1,
                    this.anim_node.stopAllActions(),
                    this.cur_block.node.stopAllActions(),
                    this.next_block.node.stopAllActions(),
                    this.anim_node.runAction(cc.scaleTo(.5, 1, 1)),
                    this.anim_node.runAction(cc.moveTo(.5, this.animPoint)),
                    this.game_manager.add_block_end() && this.junmpEnd ? this.cur_block.node.runAction(cc.scaleTo(.5, 1, 1)) : this.next_block.node.runAction(cc.scaleTo(.5, 1, 1)),
                    this.game_manager.add_block_end() && this.junmpEnd && this.next_block.mid ? this.player_jump() : (!this.game_manager.add_block_end() && this.junmpEnd || !this.next_block.mid && this.junmpEnd) && this.player_jumpOnCurBlack()
                }
                .bind(this), this)
            },
            update: function(e) {
                if (this.is_power_mode && (this.speed += this.a_power * e,
                this.x_distance += this.speed * e,
                this.node.getComponent(cc.MotionStreak).reset(),
                this.node.getComponent(cc.MotionStreak)._onNodePositionChanged()),
                this.rain_time % 30 != 0 && 0 !== this.rain_time || this.game_manager.add_ring_effect(),
                this.rain_time++,
                this.is_game_over ? this.canTouch && (this.touchBtn.active = !0,
                cc.log("can touch this.game_time:", this.game_time),
                this.game_time = parseInt(1e3 * this.game_time),
                this.canTouch = !1) : this.game_time += e,
                0 === this.game_manager.get_reviveNum()) {
                    this.rot_node.getChildByName("dead_effect").active = !1;
                    var t = this.cur_block.getBlockMidPos()
                      , n = cc.find("Canvas/game").convertToNodeSpaceAR(t);
                    cc.log("mid:", n.x, n.y),
                    this.node.setPosition(n),
                    this.anim_node.active = !0,
                    this.game_manager.set_reviveNum(-1),
                    this.touchBtn.active = !1,
                    this.is_game_over = !1
                }
            },
            setRankScore: function(e) {
                var a = this
                  , t = parseInt(e)
                  , i = 0;
                if ("undefined" != typeof FBInstant) {
                    if (k.FB_RankData) {
                        for (var n = 0; n < k.FB_RankData.length; n++)
                            k.FB_RankData[n].isSelf && (this.playerNum = n,
                            i = k.FB_RankData[n].score,
                            this.game_manager.setHighestScore(k.FB_RankData[n].score));
                        i < t ? this.save_fb_score(t) : this.game_manager.setPlayerData()
                    } else
                        FBInstant.getLeaderboardAsync("global_test").then(function(e) {
                            return e.getEntriesAsync()
                        }).then(function(e) {
                            var t = [];
                            k.FB_RankData = [];
                            for (var n = 0; n < e.length; n++)
                                t.push({
                                    headUrl: e[n].getPlayer().getPhoto(),
                                    nickName: e[n].getPlayer().getName(),
                                    score: e[n].getScore(),
                                    rankNum: e[n].getRank(),
                                    isSelf: e[n].getPlayer().getID() == FBInstant.player.getID()
                                }),
                                t[n].isSelf && (a.playerNum = n,
                                i = e[n].getScore(),
                                a.game_manager.setHighestScore(e[n].getScore()));
                            k.FB_RankData = t
                        }).then(function() {
                            i < t ? a.save_fb_score(t) : a.game_manager.setPlayerData()
                        });
                    FBInstant.updateAsync({
                        action: "LEADERBOARD",
                        name: "global_test"
                    }).then(function() {
                        return console.log("Update Posted")
                    }).catch(function(e) {
                        return console.error(e)
                    })
                }
            },
            save_fb_score: function(t) {
                var a = this;
                FBInstant.getLeaderboardAsync("global_test").then(function(e) {
                    return e.setScoreAsync(t, "global score"),
                    e.getEntriesAsync()
                }).then(function(e) {
                    var t = [];
                    k.FB_RankData = [];
                    for (var n = 0; n < e.length; n++)
                        console.log("============json"),
                        t.push({
                            headUrl: e[n].getPlayer().getPhoto(),
                            nickName: e[n].getPlayer().getName(),
                            score: e[n].getScore(),
                            rankNum: e[n].getRank(),
                            isSelf: e[n].getPlayer().getID() == FBInstant.player.getID()
                        });
                    k.FB_RankData = t,
                    a.game_manager.setPlayerData(),
                    console.log("global rank Score saved")
                }).catch(function(e) {
                    console.error(e)
                })
            },
            setXMRankScore: function(e) {
                cc.sys.localStorage.getItem("score") ? cc.sys.localStorage.getItem("score") < e && cc.sys.localStorage.setItem("score", e) : cc.sys.localStorage.setItem("score", e);
                var t = {
                    accountId: "" + k.userId,
                    level: e,
                    gameServer: "XM",
                    accountType: k.SDK_TYPE,
                    age: 1,
                    accountName: "" + k.userId,
                    gender: 1
                };
                "undefined" == typeof TDGA ? console.log("TDGA is undefined") : TDGA.Account(t);
                var n = {
                    cost_time: this.game_time,
                    score: e
                };
                if (cc.log("this.game_time:", this.game_time),
                "undefined" == typeof XMGame)
                    return cc.log("player XMGame is undefined"),
                    void console.log("XMGame is undefined");
                XMGame.game_over(n)
            }
        }),
        cc._RF.pop()
    }
    , {
        game_scene: "game_scene",
        global_data: "global_data"
    }],
    rank_layer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "08fd4pbzs9GcrjT4rtzMIqe", "rank_layer");
        var s = e("global_data");
        cc.Class({
            extends: cc.Component,
            properties: {
                rankLayer: {
                    type: cc.Node,
                    default: null
                },
                rankItem: {
                    type: cc.Node,
                    default: null
                },
                content: {
                    type: cc.Node,
                    default: null
                }
            },
            start: function() {
                this.setLeaderboardData()
            },
            setLeaderboardData: function() {
                var c = this;
                if ("undefined" != typeof FBInstant) {
                    var o = cc.find("rankLayer/scrollview/view/content");
                    if (s.FB_RandData) {
                        console.log("global data"),
                        this.items = [],
                        this.entries = s.FB_RandData;
                        var e = parseInt(s.FB_RandData.length);
                        o.setContentSize(630, 1100 + 110 * e);
                        for (var t = 0; t < this.entries.length; t++) {
                            this.rankItem.active = !0;
                            var n = cc.instantiate(this.rankItem);
                            n.setPosition(-284, -251 - 110 * t),
                            n.setAnchorPoint(.5, .5),
                            this.content.addChild(n),
                            this.items.push(n);
                            var a = this.items[t].getChildByName("headSpNode").getChildByName("headSp").getComponent(cc.Sprite)
                              , i = this.entries[t].headUrl;
                            this.updateItem(t, i, a)
                        }
                    } else
                        FBInstant.getLeaderboardAsync("global_test").then(function(e) {
                            return e.getEntriesAsync()
                        }).then(function(e) {
                            c.items = [];
                            var t = [];
                            c.entries = [];
                            for (var n = 0; n < e.length; n++) {
                                console.log("============json"),
                                t.push({
                                    headUrl: e[n].getPlayer().getPhoto(),
                                    nickName: e[n].getPlayer().getName(),
                                    score: e[n].getScore(),
                                    rankNum: e[n].getRank(),
                                    isSelf: e[n].getPlayer().getID() == FBInstant.player.getID()
                                }),
                                c.rankItem.active = !0;
                                var a = cc.instantiate(c.rankItem);
                                a.setPosition(-284, -251 - 110 * n),
                                a.setAnchorPoint(.5, .5),
                                c.content.addChild(a),
                                c.items.push(a)
                            }
                            return c.entries = t,
                            s.FB_RandData = t
                        }).then(function(e) {
                            var t = parseInt(s.FB_RandData.length);
                            o.setContentSize(630, 1100 + 110 * t);
                            for (var n = 0; n < e.length; n++) {
                                console.log("global data index======", n);
                                var a = c.items[n].getChildByName("headSpNode").getChildByName("headSp").getComponent(cc.Sprite)
                                  , i = c.entries[n].headUrl;
                                c.updateItem(n, i, a)
                            }
                        })
                }
            },
            updateItem: function(e, t, n) {
                cc.loader.load(t, function(e, t) {
                    n.spriteFrame = new cc.SpriteFrame(t)
                });
                var a = this.items[e].getChildByName("numLab")
                  , i = a.getComponent(cc.Label)
                  , c = this.items[e].getChildByName("tyt_rank_icon")
                  , o = c.getComponent(cc.Sprite);
                if (2 < e)
                    c.active = !1,
                    a.active = !0,
                    i.string = this.entries[e].rankNum;
                else if (1 === e) {
                    var s = cc.url.raw("resources/tyt_rank_icon2.png");
                    cc.loader.load(s, function(e, t) {
                        o.spriteFrame = new cc.SpriteFrame(t)
                    })
                } else if (2 === e) {
                    s = cc.url.raw("resources/tyt_rank_icon3.png");
                    cc.loader.load(s, function(e, t) {
                        o.spriteFrame = new cc.SpriteFrame(t)
                    })
                }
                var r = this.items[e].getChildByName("tyt_rank_bg1")
                  , h = this.items[e].getChildByName("tyt_rank_bg2");
                this.entries[e].isSelf ? (r.active = !1,
                h.active = !0) : (r.active = !0,
                h.active = !1),
                this.items[e].getChildByName("nameLab").getComponent(cc.Label).string = this.entries[e].nickName,
                this.items[e].getChildByName("scoreLab").getComponent(cc.Label).string = this.entries[e].score
            },
            return_lobby_scene: function() {
                cc.director.loadScene("lobby_scene")
            },
            remove_layer: function() {
                this.rankLayer.active = !1
            },
            getRemoveBtn: function() {
                return this.rankLayer.getChildByName("scrollview").getChildByName("removeBtn")
            },
            getReturnBtn: function() {
                return this.rankLayer.getChildByName("scrollview").getChildByName("returnBtn")
            },
            getRankLayer: function() {
                return this.rankLayer
            }
        }),
        cc._RF.pop()
    }
    , {
        global_data: "global_data"
    }],
    setting_layer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f0957/pWMNB3aO9jeRQYxVk", "setting_layer"),
        cc.Class({
            extends: cc.Component,
            properties: {
                settingLayer: {
                    type: cc.Node,
                    default: null
                },
                buttonSp: {
                    type: cc.Node,
                    default: []
                }
            },
            start: function() {
                0 === cc.audioEngine.getEffectsVolume() ? (this.buttonSp[0].active = !1,
                this.buttonSp[1].active = !0) : (this.buttonSp[0].active = !0,
                this.buttonSp[1].active = !1)
            },
            clickMusicBtn: function() {
                console.log("clickMusicBtn"),
                0 === cc.audioEngine.getEffectsVolume() ? (cc.audioEngine.setEffectsVolume(1),
                this.buttonSp[0].active = !0,
                this.buttonSp[1].active = !1) : (cc.audioEngine.setEffectsVolume(0),
                this.buttonSp[0].active = !1,
                this.buttonSp[1].active = !0)
            },
            clickVibrateBtn: function() {
                console.log("kdkf")
            },
            clickCloseBtn: function() {
                this.settingLayer.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["block", "game_scene", "global_data", "lobby_scene", "player", "rank_layer", "setting_layer"]);
