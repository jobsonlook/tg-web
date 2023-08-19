require = function n(s, r, c) {
    function h(e, t) {
        if (!r[e]) {
            if (!s[e]) {
                var o = "function" == typeof require && require;
                if (!t && o)
                    return o(e, !0);
                if (l)
                    return l(e, !0);
                var i = new Error("Cannot find module '" + e + "'");
                throw i.code = "MODULE_NOT_FOUND",
                i
            }
            var a = r[e] = {
                exports: {}
            };
            s[e][0].call(a.exports, function(t) {
                return h(s[e][1][t] || t)
            }, a, a.exports, n, s, r, c)
        }
        return r[e].exports
    }
    for (var l = "function" == typeof require && require, t = 0; t < c.length; t++)
        h(c[t]);
    return h
}({
    AdButtonAdjust: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "81c95tMRqlBr5P6ftX87Az1", "AdButtonAdjust");
        var i = t("GameUtil");
        cc.Class({
            extends: cc.Component,
            editor: {
                executionOrder: -1
            },
            onLoad: function() {
                if (!1 === i.isFitHeight()) {
                    var t = this.node.getPositionX();
                    this.node.setPositionX(t - 30)
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil"
    }],
    AdManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "99f29RSNTFNnIzm6Stl/bDh", "AdManager");
        var i = t("../modules/Types").RewardVideoType
          , a = cc.Class({
            statics: {
                instance: null
            },
            ctor: function() {
                (this.instance = this).testBannerNode = null,
                this.testInterNode = null,
                this.testRewardVideoNode = null,
                this.isLoadedBanner = !1,
                this.isShowBanner = !0,
                this.isLoadedInterstitial = !1,
                this.isShowingInterstitial = !1,
                this.interEndCallback = null,
                this.onLoadedRewardVideoEvents = [],
                this.isLoadedRewardVideo = !1,
                this.isPlayingRewardVideo = !1,
                this.rewardEndCallback = null,
                this.loadAds()
            },
            setTestAdViews: function(n) {
                var s = this;
                cc.loader.loadRes("adTest/AdTest", cc.Prefab, function(t, e) {
                    var o = cc.instantiate(e);
                    o.parent = n;
                    for (var i = o.children, a = 0; a < i.length; ++a)
                        switch (i[a].name) {
                        case "Banner":
                            s.testBannerNode = i[a];
                            break;
                        case "Interstitial":
                            s.testInterNode = i[a];
                            break;
                        case "RewardVideo":
                            s.testRewardVideoNode = i[a]
                        }
                    s.onLoadedBanner(),
                    s.onLoadedInterstitial(),
                    s.onLoadedRewardVideo(),
                    s.testInterNode.on(cc.Node.EventType.TOUCH_START, function(t) {
                        s.onInterstitialEnded()
                    }),
                    s.testRewardVideoNode.on(cc.Node.EventType.TOUCH_START, function(t) {
                        s.onRewardVideoEnded()
                    })
                })
            },
            loadAds: function() {},
            sceneChanged: function() {
                this.onLoadedRewardVideoEvents = []
            },
            onLoadedBanner: function() {},
            showBanner: function() {
                !(this.isShowBanner = !0) !== this.isLoadedBanner && null !== this.testBannerNode && (this.testBannerNode.active = !0)
            },
            hideBanner: function() {
                (this.isShowBanner = !1) !== this.isLoadedBanner && null !== this.testBannerNode && (this.testBannerNode.active = !1)
            },
            canShowInterstitial: function() {
                return !0 === this.isLoadedInterstitial
            },
            showInterstitial: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                !1 !== this.canShowInterstitial() ? !0 !== this.isShowingInterstitial && (this.interEndCallback = t,
                this.onInterstitialStarted(),
                this.testInterNode.active = !0) : null !== t && t()
            },
            onLoadedInterstitial: function() {
                this.isLoadedInterstitial = !0
            },
            onInterstitialStarted: function() {
                cc.director.pause(),
                this.isShowingInterstitial = !0
            },
            onInterstitialEnded: function() {
                cc.director.resume(),
                null !== this.interEndCallback && this.interEndCallback(),
                this.isShowingInterstitial = !1,
                this.isLoadedInterstitial = !1,
                this.onLoadedInterstitial(),
                this.testInterNode.active = !1
            },
            canPlayingRewardVideo: function(t) {
                var e = !1;
                switch (t) {
                case i.Coin:
                case i.Continue:
                    e = !0
                }
                return !0 === this.isLoadedRewardVideo && !0 === e
            },
            playRewardVideo: function(t, e) {
                cc.log(t),
                !1 !== this.canPlayingRewardVideo(t) && !0 !== this.isPlayingRewardVideo && (this.rewardEndCallback = e,
                this.curRewardType = t,
                this.onRewardVideoStarted(),
                this.testRewardVideoNode.active = !0)
            },
            onLoadedRewardVideo: function() {
                this.isLoadedRewardVideo = !0;
                for (var t = 0; t < this.onLoadedRewardVideoEvents.length; ++t) {
                    var e = this.onLoadedRewardVideoEvents[t];
                    e.event(e.self)
                }
            },
            onRewardVideoStarted: function() {
                cc.director.pause(),
                this.isPlayingRewardVideo = !0
            },
            onRewardVideoEnded: function() {
                cc.director.resume(),
                this.isPlayingRewardVideo = !1,
                null !== this.rewardEndCallback && this.rewardEndCallback(),
                this.onLoadedRewardVideo(),
                this.testRewardVideoNode.active = !1
            }
        });
        a = new a,
        e.exports = {
            AdManager: a
        },
        cc._RF.pop()
    }
    , {
        "../modules/Types": "Types"
    }],
    BillingManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2925dTco39HfLj192GFz/fI", "BillingManager");
        t("../modules/Types").RewardVideoType;
        var a = t("CommonConfig").commonConfig
          , i = cc.Class({
            statics: {
                instance: null
            },
            ctor: function() {
                (this.instance = this).isInit = !1,
                this.initBillingManager()
            },
            initBillingManager: function() {
                1 != this.isInit && this.onInitialized()
            },
            buyProduct: function(t, e) {
                !1 !== this.isInit && (this.onComplete = e,
                this.onSucceedPurchase())
            },
            getProductIdsByKeyword: function(t) {
                if (!1 === this.isInit)
                    return null;
                for (var e = [], o = a.consumableProductIDs, i = 0; i < o.length; ++i)
                    0 <= o[i].indexOf(t) && e.push(o[i]);
                return e
            },
            getPriceByKeyword: function(t) {
                if (!1 === this.isInit)
                    return null;
                var e = []
                  , o = this.getProductIdsByKeyword(t);
                if (null === o)
                    return null;
                for (var i = 0; i < o.length; ++i)
                    e.push("￥10");
                return e
            },
            getPriceByProductId: function(t) {
                return "￥10"
            },
            onInitialized: function() {
                this.isInit = !0
            },
            onSucceedPurchase: function() {
                null !== this.onComplete && this.onComplete()
            }
        });
        i = new i,
        e.exports = {
            BillingManager: i
        },
        cc._RF.pop()
    }
    , {
        "../modules/Types": "Types",
        CommonConfig: "CommonConfig"
    }],
    BlockDynamicPool: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7e4e2A6WHROTLGfggz3zYE+", "BlockDynamicPool");
        var i = t("MPObject")
          , r = (t("OnBoardBlock"),
        t("Types").OnBlockType)
          , c = t("../../config/ShapeConfig").shapeArray;
        cc.Class({
            extends: i,
            properties: {
                normalBlockCount: 100,
                specialBlockCount: 20,
                normalBlockPrefab: cc.Prefab,
                boomBlockPrefab: cc.Prefab,
                boomRangeBlockPrefab: cc.Prefab,
                layer2BlockPrefab: cc.Prefab,
                boomIcons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                boomRangeIcons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                layerIcons: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            preInit: function() {
                this.blockPoolDic = {},
                this.normalBlockPool = new cc.NodePool("NormalBlock"),
                this.boomBlockPool = new cc.NodePool("BoomBlock"),
                this.boomRangeBlockPool = new cc.NodePool("BoomRangeBlock"),
                this.layer2BlockPool = new cc.NodePool("Layer2Block"),
                this.blockPoolDic[r.NormalBlock] = this.normalBlockPool,
                this.blockPoolDic[r.BoomBlock] = this.boomBlockPool,
                this.blockPoolDic[r.BoomRangeBlock] = this.boomRangeBlockPool,
                this.blockPoolDic[r.LayerBlock2] = this.layer2BlockPool,
                this.preInitBlockPool(this.normalBlockPool, this.normalBlockPrefab, this.normalBlockCount),
                this.preInitBlockPool(this.boomBlockPool, this.boomBlockPrefab, this.specialBlockCount),
                this.preInitBlockPool(this.boomRangeBlockPool, this.boomRangeBlockPrefab, this.specialBlockCount),
                this.preInitBlockPool(this.layer2BlockPool, this.layer2BlockPrefab, this.specialBlockCount)
            },
            preInitBlockPool: function(t, e, o) {
                for (var i = 0; i < o; ++i) {
                    var a = cc.instantiate(e);
                    a.getComponent("OnBoardBlock").preInit(),
                    t.put(a)
                }
            },
            getBlock: function(t, e) {
                var o = this.blockPoolDic[t]._pool.length
                  , i = {
                    blockType: t,
                    shapeId: e,
                    blockColor: c[e].shapeColor,
                    specialIcon: null,
                    colorType: c[e].colorType
                };
                switch (t) {
                case r.BoomBlock:
                    i.specialIcon = this.boomIcons[e];
                    break;
                case r.LayerBlock2:
                    i.specialIcon = this.layerIcons[e];
                    break;
                case r.BoomRangeBlock:
                    i.specialIcon = this.boomRangeIcons[e]
                }
                if (o <= 0) {
                    var a = null;
                    switch (t) {
                    case r.NormalBlock:
                        a = cc.instantiate(this.normalBlockPrefab);
                        break;
                    case r.BoomBlock:
                        a = cc.instantiate(this.boomBlockPrefab);
                        break;
                    case r.LayerBlock2:
                        a = cc.instantiate(this.layer2BlockPrefab);
                        break;
                    case r.BoomRangeBlock:
                        a = cc.instantiate(this.boomRangeBlockPrefab)
                    }
                    var n = a.getComponent("OnBoardBlock");
                    return n.preInit(),
                    n.reuseBlock(i),
                    n
                }
                var s = this.blockPoolDic[t].get().getComponent("OnBoardBlock");
                return s.reuseBlock(i),
                s
            },
            putBlock: function(t, e) {
                t.unUseBlock(),
                this.blockPoolDic[e].put(t.node)
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/ShapeConfig": "ShapeConfig",
        MPObject: "MPObject",
        OnBoardBlock: "OnBoardBlock",
        Types: "Types"
    }],
    Block: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "91530v34XxLDLYkSzvdPCxS", "Block");
        var i = t("MPObject");
        cc.Class({
            extends: i,
            properties: {
                colorNode: cc.Node,
                colorSpriteArr: {
                    type: cc.SpriteFrame,
                    default: []
                },
                overSpriteArr: {
                    type: cc.SpriteFrame,
                    default: []
                }
            },
            setBlockColor: function(t, e) {
                e && (this.initColor = t),
                t = t || this.initColor || 0,
                this.colorNode.getComponent("cc.Sprite").spriteFrame = this.colorSpriteArr[t]
            },
            changeBlockColor: function(t) {
                t = t || 0,
                this.colorNode.getComponent("cc.Sprite").spriteFrame = this.colorSpriteArr[t]
            },
            resetBlockColor: function() {
                this.initColor = this.initColor || 0,
                this.colorNode.getComponent("cc.Sprite").spriteFrame = this.colorSpriteArr[this.initColor]
            },
            setOverColor: function() {
                this.initColor = this.initColor || 0,
                this.colorNode.getComponent("cc.Sprite").spriteFrame = this.overSpriteArr[this.initColor]
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    BoardAction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b0a95rw0tdHJpqN6QIj5fQl", "BoardAction");
        var i = function() {
            function i(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, o) {
                return e && i(t.prototype, e),
                o && i(t, o),
                t
            }
        }();
        var a = function() {
            function t() {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t)
            }
            return i(t, [{
                key: "playBoardAction",
                value: function(t) {}
            }]),
            t
        }();
        e.exports = {
            BoardAction: a
        },
        cc._RF.pop()
    }
    , {}],
    BoardBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4a30c+o4pdE6a8d8dvEATTn", "BoardBlock");
        var i = t("Block");
        cc.Class({
            extends: i,
            properties: {
                isLocked: !1
            },
            preInit: function(t, e) {
                this.baseColor = t,
                this.shadowColor = e,
                this.isLocked = !1
            },
            setShadowColor: function(t) {
                this.colorNode.active = !0,
                this.colorNode.opacity = 122,
                this.setBlockColor(t)
            },
            resetColor: function() {
                this.colorNode.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        Block: "Block"
    }],
    BoardParticlePool: [function(h, t, e) {
        "use strict";
        cc._RF.push(t, "f6aa6o9PH9JF7nOAdFPuHfS", "BoardParticlePool");
        var o = h("MPObject")
          , i = h("../../modules/Types").BoardParticleType;
        h("../../config/ShapeConfig").shapeArray;
        cc.Class({
            extends: o,
            statics: {
                instance: null
            },
            properties: {
                normalBlockPS: {
                    type: cc.Prefab,
                    default: null
                },
                layer2BlockPS: {
                    type: cc.Prefab,
                    default: null
                },
                boomLaserPS: cc.Prefab,
                boomRangePS: cc.Prefab,
                normalBlockPS_max: 10,
                layer2BlockPS_max: 10,
                boomLaserPS_max: 10,
                boomRangePS_max: 10
            },
            preInit: function() {
                this.particlePoolDic = [],
                this.normalBlockPSList = [],
                this.boomLaserPSList = [],
                this.layer2BlockPSList = [],
                this.boomRangePSList = [],
                this.preInitPSList(i.Normal, this.normalBlockPSList, this.normalBlockPS_max, this.normalBlockPS),
                this.preInitPSList(i.BoomLaser, this.boomLaserPSList, this.boomLaserPS_max, this.boomLaserPS),
                this.preInitPSList(i.Layer2, this.layer2BlockPSList, this.layer2BlockPS_max, this.layer2BlockPS),
                this.preInitPSList(i.BoomRange, this.boomRangePSList, this.boomRangePS_max, this.boomRangePS)
            },
            preInitPSList: function(t, e, o, i) {
                for (var a = 0; a < o; ++a) {
                    var n = cc.instantiate(i);
                    n.parent = this.node,
                    e.push(n.getComponent("MPParticle"))
                }
                this.particlePoolDic[t] = {
                    list: e,
                    currIdx: 0,
                    max: o
                }
            },
            playBoardParticle: function(t, e, o, i, a) {
                5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                var n = this.particlePoolDic[t];
                n.currIdx > n.max - 1 && (n.currIdx = 0);
                var s = this.node.convertToNodeSpace(e)
                  , r = (h("ShapeConfig").shapeArray,
                0 | i)
                  , c = n.list[n.currIdx].newBoom;
                c.active = !0,
                c.setPosition(s.x, s.y - 45),
                c.getComponent("sp.Skeleton").setSkin(r),
                c.getComponent("sp.Skeleton").setAnimation(0, "animation", !1),
                ++n.currIdx
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/ShapeConfig": "ShapeConfig",
        "../../modules/Types": "Types",
        MPObject: "MPObject",
        ShapeConfig: "ShapeConfig"
    }],
    BoardTest: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e0673LGGIpMvLta3ifwlRPt", "BoardTest");
        var i = t("Types")
          , a = i.BoomDir
          , s = i.OnBlockType
          , n = i.GetShapeType
          , r = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 4, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 3, 1, 2, 0, 0, 0, 0], [1, 1, 1, 1, 4, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 3, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
          , c = [5, 10]
          , h = cc.v2(10, 10)
          , l = cc.Class({
            statics: {
                instance: null
            },
            preInit: function(t, e, o, i) {
                this.ingame = t,
                this.board = e,
                this.blockPool = o,
                this.shapePool = i;
                for (var a = 0; a < h.y; ++a)
                    for (var n = 0; n < h.x; ++n)
                        switch (r[n][a]) {
                        case 1:
                            r[n][a] = s.NormalBlock;
                            break;
                        case 2:
                            r[n][a] = s.BoomBlock;
                            break;
                        case 3:
                            r[n][a] = s.LayerBlock2;
                            break;
                        case 4:
                            r[n][a] = s.BoomRangeBlock
                        }
            },
            playTest: function() {
                for (var t = 0; t < h.y; ++t)
                    for (var e = 0; e < h.x; ++e)
                        this.board.destroyBlock(cc.v2(e, t), a.Width, !0, !0),
                        null !== this.board.animationBoard[e][t] && this.board.animationBoard[e][t].breakBlock(this.board.blockPool, 0),
                        this.board.animationBoard[e][t] = null;
                var o = this.shapePool.shapeList;
                for (t = o.length - 1; 0 <= t; --t)
                    this.shapePool.returnShape(o[t], !1, !0);
                var i = this.shapePool.shapeStartPos.clone();
                for (t = 0; t < c.length; ++t)
                    this.shapePool.showAndAddShape(i.clone(), n.Specific, c[t], 0, !0),
                    i.x += this.shapePool.widthAndMargin;
                for (t = 0; t < h.y; ++t)
                    for (e = 0; e < h.x; ++e)
                        this.board.attachBlockInBoard(null, cc.v2(t, e), r[e][t])
            }
        });
        l.instance = new l,
        e.exports = {
            BoardTest: l
        },
        cc._RF.pop()
    }
    , {
        Types: "Types"
    }],
    BoomBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a5c9dvXXJlDkao6zarAiJ02", "BoomBlock");
        var i = t("OnBoardBlock")
          , s = t("../../modules/Types").BoomDir;
        t("GameUtil");
        cc.Class({
            extends: i,
            properties: {
                mainIcon: cc.Sprite,
                fade: cc.Node,
                animator: cc.Animation,
                boomBreakEffectNodes: {
                    type: cc.Node,
                    default: []
                }
            },
            preInit: function() {
                this.animator.on("finished", function(t) {
                    "breakBoom" === t.currentTarget.name && this.endBreakBoomAni()
                }, this)
            },
            reuseBlock: function(t) {
                this._super(t),
                this.mainIcon.node.active = !0,
                this.mainIcon.node.rotation = 0,
                this.mainIcon.node.color = new cc.color(255,255,255,255),
                this.mainIcon.spriteFrame = t.specialIcon,
                this.isUsed = !1,
                this.isAnimatied = !1,
                this.fade.color = t.blockColor,
                this.fade.active = !1;
                for (var e = 0; e < this.boomBreakEffectNodes.length; ++e)
                    this.boomBreakEffectNodes[e].color = t.blockColor,
                    this.boomBreakEffectNodes[e].active = !1
            },
            onDestroyBlock: function(t, e, o, i) {
                if (!0 !== this.isUsed) {
                    this.isUsed = !0,
                    ++t.specialBlockCnt;
                    var a = cc.v2(0, 0);
                    if (i === s.Width || i === s.Both)
                        for (var n = 0; n < e.y; ++n)
                            a = cc.v2(o.x, o.y + n + 1),
                            t.destroyBlock(a, s.Height, !1),
                            a = cc.v2(o.x, o.y - (n + 1)),
                            t.destroyBlock(a, s.Height, !1);
                    if (i === s.Height || i === s.Both)
                        for (n = 0; n < e.x; ++n)
                            a = cc.v2(o.x + n + 1, o.y),
                            t.destroyBlock(a, s.Width, !1),
                            a = cc.v2(o.x - (n + 1), o.y),
                            t.destroyBlock(a, s.Width, !1)
                }
            },
            breakBlock: function(t, e) {
                this.seq = cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                    this.animator.play("breakBoom")
                }, this)),
                this.seq.setTag(1),
                this.endSeq = cc.sequence(cc.delayTime(.4), cc.scaleTo(.08, 1.1), cc.scaleTo(.1, 0), cc.callFunc(function() {
                    this.fade.active = !1,
                    t.putBlock(this, this.blockType)
                }, this)),
                this.endSeq.setTag(2),
                this.node.runAction(this.seq)
            },
            endBreakBoomAni: function() {
                this.node.stopActionByTag(1),
                this.node.runAction(this.endSeq)
            },
            activateBlock: function(t, e, o) {
                this._super(t, e, o),
                this.mainIcon.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../modules/Types": "Types",
        GameUtil: "GameUtil",
        OnBoardBlock: "OnBoardBlock"
    }],
    BoomLaserParticle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "38808ZPoKRCYaM3SVyYu5Ti", "BoomLaserParticle");
        var i = t("MPParticle")
          , a = (t("GameUtil"),
        t("Types"))
          , n = a.BoomDir
          , s = a.SoundType
          , r = t("SoundManager");
        cc.Class({
            extends: i,
            properties: {
                laserNode: cc.Node
            },
            playParticle: function(t, e, o) {
                this.node.rotation = 0,
                e === n.Height && (this.node.rotation = 90),
                this.laserNode.color = t,
                this.laserNode.opacity = 0,
                this.laserNode.setScale(1, 1);
                var i = cc.sequence(cc.delayTime(o), cc.callFunc(function() {
                    this.laserNode.opacity = 128
                }, this), cc.delayTime(1), cc.callFunc(function() {
                    r.instance.playSFX(s.BoomLaser);
                    for (var t = 0; t < this.emitters.length; ++t)
                        this.emitters[t].resetSystem();
                    this.laserNode.runAction(cc.scaleTo(.5, 1, 0))
                }, this));
                this.node.runAction(i)
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil",
        MPParticle: "MPParticle",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    BoomRangeBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "950986UBphDrJA3HOxl5rtn", "BoomRangeBlock");
        var i = t("BoomBlock")
          , a = t("GameUtil")
          , n = t("ParticleManager")
          , s = t("SoundManager")
          , r = t("../../modules/Types")
          , c = r.BoomDir
          , h = r.BoardParticleType
          , l = r.SoundType;
        cc.Class({
            extends: i,
            properties: {
                boomRange: 1,
                circleLaserNodes: {
                    type: cc.Node,
                    default: []
                }
            },
            preInit: function() {
                this._super()
            },
            reuseBlock: function(t) {
                this._super(t),
                this.mainIcon.node.setScale(1);
                for (var e = 0; e < this.circleLaserNodes.length; ++e)
                    this.circleLaserNodes[e].color = t.blockColor,
                    this.circleLaserNodes[e].active = !1
            },
            onDestroyBlock: function(t, e, o, i) {
                if (!0 !== this.isUsed) {
                    this.isUsed = !0,
                    ++t.specialBlockCnt;
                    for (var a = cc.v2(o.x - this.boomRange, o.y - this.boomRange), n = a.clone(), s = 0; s < 3; ++s) {
                        n.x = a.x;
                        for (var r = 0; r < 3; ++r)
                            t.destroyBlock(n, c.Both, !1),
                            ++n.x;
                        ++n.y
                    }
                }
            },
            breakBlock: function(t, e) {
                this.node.setSiblingIndex(-1),
                this.seq = cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                    this.animator.play("breakBoom")
                }, this)),
                this.seq.setTag(1),
                this.endSeq = cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                    this.fade.active = !1,
                    t.putBlock(this, this.blockType)
                }, this)),
                this.endSeq.setTag(2),
                this.node.runAction(this.seq)
            },
            endBreakBoomAni: function() {
                s.instance.playSFX(l.BoomLaser),
                n.instance.playBoardParticle(h.BoomRange, a.getWorldPosition(this.node), 0, null, .1),
                this.node.stopActionByTag(1),
                this.node.runAction(this.endSeq)
            },
            activateBlock: function(t, e, o) {
                this._super(t, e, o),
                this.mainIcon.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../modules/Types": "Types",
        BoomBlock: "BoomBlock",
        GameUtil: "GameUtil",
        ParticleManager: "ParticleManager",
        SoundManager: "SoundManager"
    }],
    ButtonSound: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fd753nvs+hIGYqfORbuCnTI", "ButtonSound");
        var i = t("MPObject")
          , a = t("SoundManager")
          , n = t("Types").SoundType;
        cc.Class({
            extends: i,
            onLoad: function() {
                this.getComponent(cc.Button).node.on("click", this.effectSound, this)
            },
            effectSound: function() {
                a.instance.playSFX(n.ButtonClick, 0)
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    ChangeShapeItemEffect: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3f34eYYKSJPqJwhoshz8KQF", "ChangeShapeItemEffect");
        var i = t("MPObject")
          , a = t("GameUtil");
        cc.Class({
            extends: i,
            properties: {
                effectFade: cc.Node,
                effectParticle: cc.ParticleSystem,
                iconNode: cc.Node
            },
            preInit: function() {
                this.effectFade.active = !1,
                this.effectFadingAction = cc.repeatForever(cc.sequence(cc.scaleTo(.4, .8), cc.scaleTo(.4, 1))).easing(cc.easeSineInOut()),
                this.effectFadingAction.setTag(1);
                this.iconIdleEffect = cc.repeatForever(cc.sequence(cc.delayTime(a.randomRangeFloat(10, 15)), cc.rotateTo(.05, -15), cc.rotateTo(.1, 15), cc.rotateTo(.1, -15), cc.rotateTo(.1, 15), cc.rotateTo(.1, -15), cc.rotateTo(.1, 15), cc.rotateTo(.1, -15), cc.rotateTo(.05, 0))),
                this.iconIdleEffect.setTag(1),
                this.effectIconRotateAction = cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.1), cc.rotateTo(.05, -20), cc.rotateTo(.1, 20), cc.rotateTo(.1, -20), cc.rotateTo(.1, 20), cc.rotateTo(.1, -20), cc.rotateTo(.1, 20), cc.rotateTo(.05, 0), cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.delayTime(.5))),
                this.effectIconRotateAction.setTag(2),
                this.isChangingPlaying = !1,
                this.isIdlePlaying = !1
            },
            playIdleEffect: function() {
                !0 === this.isChangingPlaying && this.stopChangeEffect(),
                !0 === this.isIdlePlaying && this.stopIdleEffect(),
                this.iconNode.runAction(this.iconIdleEffect),
                this.isIdlePlaying = !0
            },
            stopIdleEffect: function() {
                this.isIdlePlaying = !1,
                this.iconNode.stopAllActions(),
                this.iconNode.stopAllActions(),
                this.iconNode.setScale(1),
                this.iconNode.rotation = 0
            },
            playChangeEffect: function() {
                !0 === this.isChangingPlaying && this.stopChangeEffect(),
                !0 === this.isIdlePlaying && this.stopIdleEffect(),
                this.isChangingPlaying = !0,
                this.effectFade.active = !0,
                this.effectFade.runAction(this.effectFadingAction),
                this.effectParticle.resetSystem(),
                this.iconNode.runAction(this.effectIconRotateAction)
            },
            stopChangeEffect: function() {
                this.isChangingPlaying = !1,
                this.effectFade.stopActionByTag(1),
                this.iconNode.stopActionByTag(2),
                this.iconNode.rotation = 0,
                this.effectParticle.stopSystem(),
                this.effectFade.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil",
        MPObject: "MPObject"
    }],
    ChangeShapeItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9a5f6YHNxBG8Z5IUVLmlADc", "ChangeShapeItem");
        var i = t("ItemBase")
          , a = t("ShapePool")
          , n = t("Ingame")
          , s = t("EndCounter")
          , r = t("ChangeShapeItemEffect")
          , c = t("DataManager").DataManager
          , h = t("GoodsStatusBar")
          , l = t("Types")
          , u = l.SoundType
          , p = l.DataType
          , d = t("../../config/CommonConfig").commonConfig
          , f = t("SoundManager")
          , g = t("ItemTutorial")
          , m = t("GameUtil");
        cc.Class({
            extends: i,
            properties: {
                shapePool: {
                    type: a,
                    default: null
                },
                colorNodes: {
                    type: cc.Node,
                    default: []
                },
                changeShapeItemEffect: r,
                button: {
                    type: cc.Button,
                    default: null
                },
                endCounter: {
                    type: s,
                    default: null
                },
                itemTutorial: g,
                changeShapeCostLabel: cc.Label
            },
            preInit: function() {
                this.changeShapeCostLabel.string = d.changeShapeItemCost,
                this.ingame = n.instance,
                this.itemTutorial.preInit(),
                this.isEffecting = !1,
                this.changeShapeItemEffect.preInit()
            },
            init: function(t) {
                this._super(),
                this.leftCount = t,
                this.setEnableButton(0 < t)
            },
            release: function() {
                this.setEffectButton(!1)
            },
            setEnableButton: function(t) {
                this.curEnable = t;
                for (var e = 0; e < this.colorNodes.length; ++e)
                    !0 === t ? (this.colorNodes[e].color = new cc.color("#35AAA1"),
                    this.changeShapeItemEffect.playIdleEffect()) : (this.colorNodes[e].color = new cc.color("#BFBFBF"),
                    this.changeShapeItemEffect.stopIdleEffect())
            },
            setEffectButton: function(t) {
                this.isEffecting = t,
                !0 === this.isEffecting ? (!0 === this.ingame.userData.isItemUseFirst && !0 === this.ingame.fsm.is("Counting") && this.itemTutorial.playChangeButtonPoint(m.getWorldPosition(this.node)),
                this.changeShapeItemEffect.playChangeEffect()) : (this.itemTutorial.stopItemTuto(),
                this.changeShapeItemEffect.stopChangeEffect())
            },
            onStartItemUsing: function() {
                this.setEffectButton(!1),
                this.ingame.checkUseChangeItemFirst(this.ingame.fsm.is("Counting")),
                this._super(),
                this.shapePool.startUsingItem(this),
                !0 === this.ingame.userData.isItemUseFirst && !0 === this.ingame.fsm.is("Counting") && this.itemTutorial.playChangeShapePoint(m.getWorldPosition(this.shapePool.shapeList[0].node))
            },
            onCancelUsingItem: function() {
                !0 === this.ingame.fsm.is("Counting") ? (this.endCounter.onPauseCounter(!1),
                this.setEffectButton(!0),
                !0 === this.ingame.userData.isItemUseFirst && (this.ingame.userData.isItemUseFirst = !1,
                c.instance.saveData(p.UserData),
                this.itemTutorial.stopItemTuto())) : this.changeShapeItemEffect.playIdleEffect(),
                this._super(),
                this.shapePool.stopUsingItem()
            },
            isCanItemUse: function() {
                return 0 < this.leftCount
            },
            releaseItemUse: function() {},
            onClickShape: function(t) {
                f.instance.playSFX(u.ShapeChange),
                --this.leftCount,
                --this.ingame.leftShapeChangeCount,
                !0 === this.endCounter.isCounting && this.endCounter.onStopCounter(),
                !0 === this.ingame.userData.isItemUseFirst && (this.ingame.userData.isItemUseFirst = !1,
                c.instance.saveData(p.UserData),
                this.itemTutorial.stopItemTuto());
                var e = this.ingame.userData;
                e.coin -= d.changeShapeItemCost,
                h.instance.changedCoin(e.coin),
                c.instance.saveData(p.UserData),
                this.shapePool.returnShape(t, !0),
                this.shapePool.stopUsingItem(),
                this.isUsingItem = !1,
                this.setEnableButton(0 < this.leftCount),
                !0 === this.ingame.fsm.is("Counting") && this.ingame.fsm.UsedItem(),
                this.ingame.saveIngameData()
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/CommonConfig": "CommonConfig",
        ChangeShapeItemEffect: "ChangeShapeItemEffect",
        DataManager: "DataManager",
        EndCounter: "EndCounter",
        GameUtil: "GameUtil",
        GoodsStatusBar: "GoodsStatusBar",
        Ingame: "Ingame",
        ItemBase: "ItemBase",
        ItemTutorial: "ItemTutorial",
        ShapePool: "ShapePool",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    CharacterBase: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3b0c4j4mHZLorHHQH0v1z+C", "CharacterBase");
        var i = t("MPObject")
          , r = t("GameUtil")
          , a = t("CommonConfig").commonConfig
          , n = t("../modules/Types")
          , c = n.CharacterEmotionType
          , h = n.CharAnimType;
        cc.Class({
            extends: i,
            properties: {
                animator: {
                    default: null,
                    type: cc.Animation
                }
            },
            init: function(t, e) {
                switch (this.animator.on("finished", function(t) {
                    var e = t.currentTarget.name;
                    e !== c.Eating && e !== c.Happy && e !== c.Sad && e !== c.IdleEffect || this.playAnimation(c.Idle)
                }, this),
                t) {
                case h.Ingame:
                    var o = this.getOffsetY(e)
                      , i = this.node.getPositionY();
                    this.node.setPositionY(i + o),
                    this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(r.randomRangeFloat(3, 5)), cc.callFunc(function() {
                        this.currEmotion === c.Idle && this.playAnimation(c.IdleEffect)
                    }, this))));
                    break;
                case h.Title:
                    var a = this.getTitleScale(e);
                    this.node.setScale(a),
                    this.playOnceTitle = !0,
                    this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(!0 === this.playOnceTitle ? 2 : 0), cc.callFunc(function() {
                        !0 === this.playOnceTitle && this.playAnimation(c.IdleEffect),
                        this.playOnceTitle = !1
                    }, this), cc.delayTime(r.randomRangeFloat(5, 8)), cc.callFunc(function() {
                        0 === r.randomRange(0, 2) ? this.playAnimation(c.Happy) : this.playAnimation(c.IdleEffect)
                    }, this))))
                }
                for (var n = this.node.children, s = 0; s < n.length; ++s)
                    n[s].getComponent(cc.Sprite).spriteFrame.getTexture().setAliasTexParameters();
                this.playAnimation(c.Idle)
            },
            getTitleScale: function(t) {
                for (var e = a.characters, o = 0; o < e.length; ++o)
                    if (e[o].charName === t)
                        return e[o].titleScale;
                return 1.5
            },
            getOffsetY: function(t) {
                for (var e = a.characters, o = 0; o < e.length; ++o)
                    if (void 0 !== e[o].offsetY && e[o].charName === t)
                        return e[o].offsetY;
                return 0
            },
            playAnimation: function(t) {
                (this.currEmotion = t) === c.Eating ? this.animator.play(t, 1) : this.animator.play(t)
            },
            backToIdle: function() {
                this.playAnimation(c.Idle)
            },
            spawnSpecialBlockToBoard: function() {}
        }),
        cc._RF.pop()
    }
    , {
        "../modules/Types": "Types",
        CommonConfig: "CommonConfig",
        GameUtil: "GameUtil",
        MPObject: "MPObject"
    }],
    CharacterBuyButton: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b9a51XhZmRKsb+b3a3vVZmB", "CharacterBuyButton");
        var i = t("MPObject");
        t("./CharacterStore");
        cc.Class({
            extends: i,
            properties: {
                characterStoreNode: cc.Node,
                cashNode: cc.Node,
                starNode: cc.Node,
                cashLabel: cc.Label,
                starLabel: cc.Label
            },
            preInit: function() {
                this.characterStore = this.characterStoreNode.getComponent("CharacterStore")
            },
            init: function(t, e) {
                this.cashNode.active = !1,
                this.starNode.active = !1,
                this.charIdx = e,
                this.charType = t.charName,
                this.priceType = t.priceType,
                this.starPrice = t.starPrice,
                "Star" === this.priceType ? this.setLabelNode(this.starNode, this.starLabel, this.starPrice) : this.priceType
            },
            setLabelNode: function(t, e, o) {
                t.active = !0,
                e.string = o
            },
            release: function() {},
            onBuyButtonPressed: function() {
                "Star" === this.priceType ? this.characterStore.charStarBuy(this.charType, this.starPrice, this.charIdx) : "Cash" === this.priceType && this.characterStore.charCashBuy(this.charIdx)
            }
        }),
        cc._RF.pop()
    }
    , {
        "./CharacterStore": "CharacterStore",
        MPObject: "MPObject"
    }],
    CharacterController: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e55d9yiBb1EQ4LXldEy7g4b", "CharacterController");
        var i = t("MPObject");
        t("../modules/Types").CharacterType,
        t("CharacterBase"),
        t("GameConfig").gameConfig;
        cc.Class({
            extends: i,
            preInit: function(o, i) {
                var a = this;
                this.currCharacter = null,
                this.currCharType = o,
                this.loadedCharacter = !0,
                cc.loader.loadRes("characters/" + o, function(t, e) {
                    a.currCharacter = cc.instantiate(e).getComponent("CharacterBase"),
                    a.currCharacter.init(i, o),
                    a.currCharacter.node.parent = a.node,
                    a.loadedCharacter = !0
                })
            },
            changeCharacter: function(o, i) {
                if (this.currCharType !== o) {
                    null !== this.currCharacter && void 0 !== this.currCharacter && (this.currCharacter.node.destroy(),
                    this.currCharacter = null);
                    var a = this;
                    cc.loader.loadRes("characters/" + o, function(t, e) {
                        a.currCharacter = cc.instantiate(e).getComponent("CharacterBase"),
                        a.currCharacter.init(i, o),
                        a.currCharacter.node.parent = a.node
                    }),
                    this.currCharType = o
                }
            },
            playAnimation: function(t) {
                null !== this.currCharacter && this.currCharacter.playAnimation(t)
            },
            getCharacterEmotion: function() {
                return null === this.currCharacter ? null : this.currCharacter.currEmotion
            },
            spawnSpecialBlockToBoard: function(t, e) {
                null !== this.currCharacter && this.currCharacter.spawnSpecialBlockToBoard(t, e)
            }
        }),
        cc._RF.pop()
    }
    , {
        "../modules/Types": "Types",
        CharacterBase: "CharacterBase",
        GameConfig: "GameConfig",
        MPObject: "MPObject"
    }],
    CharacterNotiIcon: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9cadfPwshdN4ok4U6SYjwi5", "CharacterNotiIcon");
        var i = t("MPObject");
        cc.Class({
            extends: i,
            properties: {},
            preInit: function() {
                this.movingSeq = cc.repeatForever(cc.sequence(cc.moveBy(.3, 0, 10), cc.moveBy(.3, 0, -10))),
                this.movingSeq.setTag(1),
                this.oriPos = this.node.getPosition(),
                this.node.active = !1
            },
            enableIcon: function(t) {
                this.node.active = t,
                this.node.setPosition(this.oriPos),
                this.node.stopActionByTag(1),
                !0 === t && this.node.runAction(this.movingSeq)
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    CharacterPlayButton: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "32abelmTM1CZJ8BVUAXnqXi", "CharacterPlayButton");
        var i = t("MPObject")
          , a = t("DataManager").DataManager
          , n = t("Types")
          , s = n.CharacterType
          , r = n.DataType;
        cc.Class({
            extends: i,
            properties: {
                usingColor: cc.Color,
                unUsingColor: cc.Color
            },
            preInit: function() {
                this.curCharType = s.Panda
            },
            init: function(t, e) {
                !0 === t ? this.setPlayButtonColor(this.usingColor) : this.setPlayButtonColor(this.unUsingColor),
                this.curCharType = e
            },
            setPlayButtonColor: function(t) {
                this.node.color = t
            },
            release: function() {},
            onPressedPlayButton: function() {
                a.instance.getData(r.UserData).currChar = this.curCharType,
                a.instance.saveData(r.UserData),
                cc.director.loadScene("Ingame")
            }
        }),
        cc._RF.pop()
    }
    , {
        DataManager: "DataManager",
        MPObject: "MPObject",
        Types: "Types"
    }],
    CharacterScrollView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0ec5derBrBDzI826pdtemlu", "CharacterScrollView");
        var i = t("MPObject")
          , a = t("LabelLocalized")
          , n = (t("CharacterSnapObject"),
        t("CharacterPlayButton"))
          , s = t("CharacterBuyButton")
          , r = t("../../config/CommonConfig").commonConfig
          , c = t("DataManager").DataManager
          , h = t("../../modules/Types")
          , l = h.DataType
          , u = h.CharacterType;
        cc.Class({
            extends: i,
            properties: {
                characterSnapPrefab: cc.Prefab,
                contentNode: cc.Node,
                characterName: a,
                characterPlayButton: n,
                characterBuyButton: s,
                minTreshold: 50,
                canvasNode: cc.Node
            },
            preInit: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onScrollViewDown, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onScrolling, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onScrollViewUp, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onScrollViewUp, this),
                this.node.width = cc.director.getVisibleSize().width,
                this.characterConfigs = r.characters,
                this.characterPlayButton.preInit(),
                this.characterBuyButton.preInit();
                var a = this.charCount = Object.keys(u).length
                  , t = this.objectSpace = this.canvasNode.getContentSize().width / 2
                  , e = this.contentNode.getContentSize();
                this.contentNode.setContentSize(t * (a + 1), e.height),
                this.snapObjList = [],
                this.wayXPoints = [];
                for (var o = 0; o < a; ++o) {
                    var i = cc.instantiate(this.characterSnapPrefab);
                    i.parent = this.contentNode,
                    i.setPosition(t + t * o, 0);
                    var n = i.getComponent("CharacterSnapObject");
                    this.snapObjList.push(n),
                    this.wayXPoints.push(o / (a - 1))
                }
                var s = this;
                cc.loader.loadRes("portraits/Portraits", cc.SpriteAtlas, function(t, e) {
                    for (var o = 0; o < a; ++o) {
                        var i = e.getSpriteFrame(s.characterConfigs[o].charName);
                        s.snapObjList[o].preInit(i)
                    }
                }),
                this.max = t + t * (a - 2),
                this.contentNode.setPosition(0, 0)
            },
            init: function() {
                for (var t = c.instance.getData(l.UserData).currChar, e = 0, o = 0; o < this.charCount; ++o)
                    if (t === this.characterConfigs[o].charName) {
                        e = o;
                        break
                    }
                this.currIdx = e,
                this.currVal = this.wayXPoints[e];
                var i = -this.wayXPoints[e] * this.max;
                this.contentNode.setPosition(i, 0),
                this.snapObjList[e].selectCell(!0, 0),
                this.acceptCurrIdx(this.currIdx)
            },
            release: function() {
                for (var t = 0; t < this.snapObjList.length; ++t)
                    this.snapObjList[t].selectCell(!1)
            },
            acceptCurrIdx: function(t) {
                this.characterName.textKey = "char_" + this.characterConfigs[t].charName.toLowerCase(),
                this.updatePlayAndBuyButton(t)
            },
            onScrollViewDown: function(t) {
                this.stopScrollLerping(),
                this.startTouchLocationX = t.getLocationX(),
                this.startPosX = this.contentNode.getPositionX()
            },
            onScrollViewUp: function(t) {
                this.endTouchLocationX = t.getLocationX(),
                this.startScrollLerping()
            },
            onScrolling: function(t) {
                var e = t.getLocationX() - this.startTouchLocationX
                  , o = (this.startPosX + e).clamp(-this.objectSpace * (this.charCount - 1), 0);
                this.contentNode.setPositionX(o)
            },
            startScrollLerping: function(t) {
                var e = 0 === this.currIdx ? this.wayXPoints.length - 1 : 0
                  , o = !1;
                if (this.currVal = this.getCurrVal(),
                void 0 !== t)
                    e = t;
                else {
                    Math.abs(this.endTouchLocationX - this.startTouchLocationX) > this.minTreshold && (o = 0 === this.currIdx ? !(0 < this.endTouchLocationX - this.startTouchLocationX) : this.currIdx !== this.wayXPoints.length - 1 || !(this.endTouchLocationX - this.startTouchLocationX < 0));
                    for (var i = 0; i < this.wayXPoints.length; ++i)
                        !0 === o && this.currIdx === i || Math.abs(this.wayXPoints[i] - this.currVal) < Math.abs(this.wayXPoints[e] - this.currVal) && (e = i)
                }
                this.snapObjList[e].selectCell(!0),
                this.currIdx !== e && this.snapObjList[this.currIdx].selectCell(!1);
                var a = e
                  , n = cc.moveTo(.2, -this.wayXPoints[a] / 1 * this.max, 0);
                n.setTag(1),
                this.currIdx = e,
                this.acceptCurrIdx(this.currIdx),
                this.contentNode.runAction(n)
            },
            stopScrollLerping: function() {
                this.contentNode.stopActionByTag(1)
            },
            updatePlayAndBuyButton: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : -1;
                -1 === t && (t = this.currIdx);
                var e = this.isHaveChar(this.characterConfigs[t].charName);
                this.characterBuyButton.node.active = !e,
                !0 === (this.characterPlayButton.node.active = e) ? this.characterPlayButton.init(this.isEquipChar(this.currIdx), this.characterConfigs[t].charName) : this.characterBuyButton.init(this.characterConfigs[t], t)
            },
            isHaveChar: function(t) {
                return c.instance.getData(l.UserData).haveCharList.isInclude(t)
            },
            isEquipChar: function(t) {
                return this.characterConfigs[t].charName === c.instance.getData(l.UserData).currChar
            },
            playCharCongAnim: function(t) {
                this.snapObjList[t].playEffect()
            },
            onPressedArrowButton: function(t, e) {
                this.stopScrollLerping();
                var o = this.currIdx;
                "left" === e ? --o : "right" === e && ++o,
                o = o.clamp(0, this.snapObjList.length - 1),
                this.startScrollLerping(o)
            },
            getCurrVal: function() {
                return -this.contentNode.getPositionX() / this.max
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/CommonConfig": "CommonConfig",
        "../../modules/Types": "Types",
        CharacterBuyButton: "CharacterBuyButton",
        CharacterPlayButton: "CharacterPlayButton",
        CharacterSnapObject: "CharacterSnapObject",
        DataManager: "DataManager",
        LabelLocalized: "LabelLocalized",
        MPObject: "MPObject"
    }],
    CharacterSnapObject: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c58feEYU2BJvK1p7emixfJn", "CharacterSnapObject");
        var i = t("MPObject");
        cc.Class({
            extends: i,
            properties: {
                selectBG: cc.SpriteFrame,
                unSelectBG: cc.SpriteFrame,
                selectColor: cc.Color,
                unSelectColor: cc.Color,
                bgSprite: cc.Sprite,
                portraitSprite: cc.Sprite
            },
            preInit: function(t) {
                this.selectCell(!1),
                this.portraitSprite.spriteFrame = t
            },
            init: function() {},
            release: function() {},
            selectCell: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .4;
                this.node.stopActionByTag(1),
                this.portraitSprite.node.stopActionByTag(2),
                this.bgSprite.spriteFrame = !0 === t ? this.selectBG : this.unSelectBG,
                this.bgSprite.node.color = !0 === t ? this.selectColor : this.unSelectColor;
                var o = !0 === t ? cc.scaleTo(e, 1) : cc.scaleTo(e, .6);
                o.setTag(1),
                this.node.runAction(o);
                var i = !0 === t ? cc.fadeTo(.2, 255) : cc.fadeTo(.2, 128);
                i.setTag(2),
                this.portraitSprite.node.runAction(i)
            },
            playEffect: function() {
                this.portraitSprite.node.stopActionByTag(1),
                this.portraitSprite.node.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.rotateTo(.08, 15), cc.rotateTo(.15, -15), cc.rotateTo(.15, 15), cc.rotateTo(.08, 0), cc.scaleTo(.2, 1)))
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    CharacterStore: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c70d0ZIoYFDd5f/PuBxXfkr", "CharacterStore");
        var i = t("MPObject")
          , a = t("CharacterScrollView")
          , n = t("GoodsArea")
          , s = t("DataManager").DataManager
          , r = t("SoundManager")
          , c = t("GoodsStatusBar")
          , h = t("MPParticle")
          , l = t("Types")
          , u = l.DataType
          , p = l.PopupType
          , d = l.SoundType;
        cc.Class({
            extends: i,
            properties: {
                characterScrollView: a,
                goodsArea: n,
                buyParticle: h
            },
            preInit: function(t, e) {
                this.home = t,
                this.popupManager = e,
                c.instance.setStarArea(this.goodsArea),
                this.characterScrollView.preInit(),
                this.userData = s.instance.getData(u.UserData),
                this.goodsArea.preInit(this.popupManager),
                this.node.active = !1
            },
            init: function() {
                this.node.active = !0,
                this.goodsArea.init(this.userData.star),
                this.characterScrollView.init()
            },
            release: function() {
                this.node.active = !1,
                this.buyParticle.stopParticle(),
                this.characterScrollView.release()
            },
            onPressedBackKey: function() {
                this.home.changeSection("Title")
            },
            charStarBuy: function(t, e, o) {
                var i = this.userData.star - e;
                i < 0 ? this.popupManager.showPopup(p.StarLack) : (r.instance.playSFX(d.BuyCharacter),
                this.buyParticle.playParticle(),
                this.characterScrollView.playCharCongAnim(o),
                c.instance.changedStar(i),
                this.userData.star = i,
                this.userData.haveCharList.push(t),
                this.userData.currChar = t,
                s.instance.saveData(u.UserData),
                this.characterScrollView.updatePlayAndBuyButton())
            },
            charCashBuy: function() {}
        }),
        cc._RF.pop()
    }
    , {
        CharacterScrollView: "CharacterScrollView",
        DataManager: "DataManager",
        GoodsArea: "GoodsArea",
        GoodsStatusBar: "GoodsStatusBar",
        MPObject: "MPObject",
        MPParticle: "MPParticle",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    CoinArea: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e5cd3IOwUtCNZLx1cjRh2VR", "CoinArea");
        var i = t("GoodsArea")
          , a = t("Types").PopupType;
        cc.Class({
            extends: i,
            properties: {},
            preInit: function(t) {
                this._super(t)
            },
            onPresedCoinArea: function() {
                void 0 !== this.popupManager && null !== this.popupManager && this.popupManager.showPopup(a.Shop)
            }
        }),
        cc._RF.pop()
    }
    , {
        GoodsArea: "GoodsArea",
        Types: "Types"
    }],
    CoinCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "eb863f/LzJFPJYDjbdl5pjR", "CoinCell");
        var i = t("ShopCell")
          , a = (t("DataManager").DataManager,
        t("Types").DataType)
          , n = t("GoodsStatusBar")
          , s = t("BillingManager").BillingManager;
        cc.Class({
            extends: i,
            properties: {
                productIconSprite: cc.Sprite
            },
            preInit: function(t, e, o) {
                this._super(),
                this.coinValue = t,
                this.productLabel.formatValue = t,
                this.buyButtonLabel.string = e,
                this.productId = o
            },
            updateProduct: function() {
                this._super(),
                this.buyButtonLabel.string = s.instance.getPriceByProductId(this.productId)
            },
            onPressedCellButton: function() {
                this._super();
                var e = this;
                s.instance.buyProduct(this.productId, function() {
                    var t = e.dataManager.getData(a.UserData);
                    t.coin += e.coinValue,
                    e.dataManager.saveData(a.UserData),
                    n.instance.changedCoin(t.coin)
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BillingManager: "BillingManager",
        DataManager: "DataManager",
        GoodsStatusBar: "GoodsStatusBar",
        ShopCell: "ShopCell",
        Types: "Types"
    }],
    CommonCharacter: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9492bptAeNFwYFT7KCqd44q", "CommonCharacter");
        var i = t("CharacterBase")
          , l = t("../modules/Types").OnBlockType
          , u = t("Ingame")
          , p = t("../config/GameConfig").gameConfig;
        cc.Class({
            extends: i,
            properties: {},
            spawnSpecialBlockToBoard: function(t, e) {
                var o = t.getRandomPosIdxByNormalBlock();
                if (null !== o) {
                    var i = t.getOnBoardBlock(o.x, o.y)
                      , a = l.BoomBlock
                      , n = p.boomRangeStartTime
                      , s = p.boomRangeInterval
                      , r = u.instance.spawnBoomCount;
                    r === n ? a = l.BoomRangeBlock : n < r && (r - n) % s == 0 && (a = l.BoomRangeBlock),
                    t.replaceSaveBlock(a, o);
                    var c = t.getNewOnBoardBlock(a, i.shapeId).node
                      , h = cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                        c.parent = t.node,
                        c.setPosition(0, 350)
                    }, this), cc.jumpTo(.7, i.node.getPosition(), 80, 1), cc.callFunc(function() {
                        t.showReplaceBlock(o, c.getComponent("OnBoardBlock"), i)
                    }, this));
                    c.runAction(h)
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        "../config/GameConfig": "GameConfig",
        "../modules/Types": "Types",
        CharacterBase: "CharacterBase",
        Ingame: "Ingame"
    }],
    CommonConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "208fbkTwEZBp54kSiOdLdvu", "CommonConfig");
        var i = {
            coins: [650, 1800, 1e4, 2e4],
            stars: [120, 200],
            adReward: 60,
            coinPrices: ["￥10", "￥28", "￥85", "￥110"],
            starPrices: ["￥9", "￥12"],
            consumableProductIDs: ["bd_coin1", "bd_coin2", "bd_coin3", "bd_coin4", "bd_star1", "bd_star2"],
            changeShapeItemCost: 60,
            reviveBoardCost: 90,
            characters: [{
                charName: "Panda",
                priceType: "Star",
                starPrice: 90,
                titleScale: 1.5
            }, {
                charName: "Dragon",
                priceType: "Star",
                starPrice: 180,
                titleScale: 1.5
            }, {
                charName: "Beaver",
                priceType: "Star",
                starPrice: 90,
                titleScale: 1.3
            }, {
                charName: "Rhino",
                priceType: "Star",
                starPrice: 120,
                titleScale: 1.3
            }, {
                charName: "Rooster",
                priceType: "Star",
                starPrice: 90,
                titleScale: 1.3,
                offsetY: 15
            }, {
                charName: "Moose",
                priceType: "Star",
                starPrice: 90,
                titleScale: 1.5
            }, {
                charName: "Seal",
                priceType: "Star",
                starPrice: 90,
                titleScale: 1.3,
                offsetY: 20
            }, {
                charName: "Knight",
                priceType: "Star",
                starPrice: 120,
                titleScale: 1.5
            }, {
                charName: "Zombie",
                priceType: "Star",
                starPrice: 150,
                titleScale: 1.5
            }, {
                charName: "Skull",
                priceType: "Star",
                starPrice: 120,
                titleScale: 1.5
            }, {
                charName: "Yeti",
                priceType: "Star",
                starPrice: 120,
                titleScale: 1.5
            }, {
                charName: "Unicorn",
                priceType: "Star",
                starPrice: 150,
                titleScale: 1.5
            }],
            adRewardCoinCost: 60,
            adDisableButtonColor: new cc.color("#B0C6C6"),
            adDisableTextColor: new cc.color("#DFEFEE")
        };
        e.exports = {
            commonConfig: i
        },
        cc._RF.pop()
    }
    , {}],
    CongImageText: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "540d08kLBFMoJl4AS2RROAs", "CongImageText");
        t("MPObject");
        var i = t("Types")
          , a = i.CongTextType
          , n = t("SoundManager")
          , s = i.SoundType;
        cc.Class({
            extends: cc.Component,
            properties: {
                textImage: cc.Sprite,
                congTextSprites: {
                    type: cc.SpriteFrame,
                    default: []
                },
                highScoreSprite: {
                    type: cc.SpriteFrame,
                    default: null
                },
                startSprite: {
                    type: cc.SpriteFrame,
                    default: null
                }
            },
            preInit: function() {
                this.currIdx = 0,
                this.seq = cc.sequence(cc.callFunc(function() {
                    this.node.opacity = 255,
                    this.node.setScale(0)
                }, this), cc.scaleTo(.3, .9).easing(cc.easeBackOut()), cc.delayTime(1), cc.fadeOut(.3)),
                this.seq.setTag("CongText"),
                this.node.opacity = 0
            },
            showCongText: function(t, e) {
                var o = null;
                switch (t) {
                case a.Common:
                    o = this.congTextSprites[this.currIdx++],
                    n.instance.playSFX(s.Congratulate);
                    break;
                case a.HighScore:
                    o = this.highScoreSprite,
                    n.instance.playSFX(s.HighScoreText);
                    break;
                case a.Start:
                    o = this.startSprite;
                    break;
                default:
                    return
                }
                return this.textImage.spriteFrame = o,
                this.textImage.node.setContentSize(o.getOriginalSize()),
                this.currIdx === this.congTextSprites.length && (this.currIdx = 0),
                this.scheduleOnce(function() {
                    this.node.stopActionByTag("CongText"),
                    this.node.runAction(this.seq)
                }, e),
                e + 1.5
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    ContinuePopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0c88c3ZBC9Lq6FV5CMcEjiz", "ContinuePopup");
        var i = t("MPPopup")
          , a = t("Ingame")
          , n = t("../config/CommonConfig").commonConfig
          , s = t("AdManager").AdManager
          , r = t("Types")
          , c = r.RewardVideoType
          , h = r.PopupType;
        cc.Class({
            extends: i,
            properties: {
                reviveCostText: cc.Label
            },
            preInit: function(t) {
                this._super(t),
                this.reviveCostText.string = n.reviveBoardCost
            },
            showPopup: function(t, e) {
                this._super(t, e)
            },
            onPressedWatchAds: function() {
                if (!1 !== this.isShown) {
                    var t = this;
                    s.instance.playRewardVideo(c.Continue, function() {
                        t.continueGame()
                    })
                }
            },
            onPressedCoinButton: function() {
                !1 !== this.isShown && (a.instance.userData.coin < n.reviveBoardCost ? this.popupManager.showPopup(h.CoinLack, {
                    isLack: !0
                }) : this.continueGame())
            },
            continueGame: function() {
                this.popupManager.popHidePopup(),
                a.instance.fsm.Revive()
            },
            onPressedCloseButton: function() {
                this._super(),
                a.instance.fsm.NoContinue()
            }
        }),
        cc._RF.pop()
    }
    , {
        "../config/CommonConfig": "CommonConfig",
        AdManager: "AdManager",
        Ingame: "Ingame",
        MPPopup: "MPPopup",
        Types: "Types"
    }],
    DataManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9b27bjilrVNEIHje1mWI5yY", "DataManager");
        var i = t("DataSet")
          , a = cc.Class({
            statics: {
                instance: null
            },
            properties: {
                isReset: !1
            },
            ctor: function() {
                !((this.instance = this).isLoadedData = !1) === this.isReset && this.resetAllData(),
                this.dataDic = [],
                this.loadData()
            },
            loadData: function() {
                this.initEachData("UserData", new i.UserData),
                this.initEachData("GameData", new i.GameData),
                this.isLoadedData = !0
            },
            initEachData: function(t, e) {
                this.dataDic[t] = e
            },
            saveData: function(t) {},
            resetAllData: function() {
                cc.sys.localStorage.clear()
            },
            resetData: function(t) {
                switch (cc.sys.localStorage.removeItem(t),
                t) {
                case "UserData":
                    this.dataDic.UserData = new i.UserData;
                    break;
                case "GameData":
                    this.dataDic.GameData = new i.GameData
                }
                this.saveData(t)
            },
            getData: function(t) {
                return !1 === this.isLoadedData ? null : this.dataDic[t]
            }
        });
        a = new a,
        e.exports = {
            DataManager: a
        },
        cc._RF.pop()
    }
    , {
        DataSet: "DataSet"
    }],
    DataSet: [function(t, e, o) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        cc._RF.push(e, "7c873KhI+NMT6XHxXIF5sCB", "DataSet");
        var a = t("Types");
        e.exports = {
            UserData: function t() {
                i(this, t),
                this.coin = 320,
                this.star = 0,
                this.highScore = 0,
                this.haveCharList = ["Panda"],
                this.currChar = "Panda",
                this.unBlockList = [],
                this.sfxOn = !0,
                this.bgmOn = !0,
                this.isFirstTuto = !0,
                this.isItemUseFirst = !0
            },
            GameData: function t() {
                i(this, t),
                this.boardData = [],
                this.overlapShapeDataList = [],
                this.currShapeDataList = [],
                this.currScore = 0,
                this.breakLineCount = 0,
                this.saveLineForStar = 0,
                this.leftShapeChangeCount = 5,
                this.spawnBoomCount = 0,
                this.isContinued = !1,
                this.isCounted = !1,
                this.endStateName = "Solving",
                this.isShowedHighScore = !1,
                this.nextLineDic = {
                    LayerBlock2: 0,
                    BoomBlock: 0
                }
            },
            SaveBlockData: function t() {
                i(this, t),
                this.onBlockType = a.OnBlockType.None,
                this.shapeId = 0
            },
            SaveShapeData: function t() {
                i(this, t),
                this.shapeId = 0,
                this.blockTypeArr = []
            }
        },
        cc._RF.pop()
    }
    , {
        Types: "Types"
    }],
    EndCounter: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "568b2hzS1VIj5Q/xayGoqPG", "EndCounter");
        var i = t("MPObject")
          , a = t("Types").SoundType
          , n = t("SoundManager");
        cc.Class({
            extends: i,
            properties: {
                counterLabel: cc.Label,
                microFillImage: cc.Sprite,
                skipButton: cc.Node,
                timeSkipButton: cc.Button
            },
            preInit: function(t, e) {
                this.maxTime = t,
                this.isCounting = !1,
                this.isPause = !1,
                this.microMaxTime = 2,
                this.currCountingTime = 0,
                this.ingame = e,
                this.node.opacity = 0,
                this.timeSkipButton.interactable = !1,
                this.node.active = !1,
                this.textScaleAction = cc.repeatForever(cc.sequence(cc.scaleTo(.5, .8), cc.scaleTo(.5, 1))).easing(cc.easeSineInOut())
            },
            onStartCounter: function() {
                n.instance.playSFX(a.EndCounter, 0),
                this.node.active = !0,
                this.setCurrTime(this.maxTime),
                this.isCounting = !0,
                this.isPause = !1,
                this.counterLabel.node.runAction(this.textScaleAction);
                var t = this.skipButton.getPositionY();
                this.skipButton.setPositionX(-450),
                this.skipButton.runAction(cc.moveTo(.3, 0, t).easing(cc.easeQuadraticActionOut())),
                this.timeSkipButton.interactable = !0,
                this.schedule(this.repeatSound, 1, 99, 0, !1),
                this.node.runAction(cc.fadeIn(.2))
            },
            repeatSound: function() {
                n.instance.playSFX(a.EndCounter, 0)
            },
            onStopCounter: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                this.unschedule(this.repeatSound),
                this.isCounting = !1,
                this.ingame.isCounted = !0,
                this.node.active = !1,
                this.microFillImage.fillRange = 0,
                this.counterLabel.node.stopAllActions(),
                !(this.timeSkipButton.interactable = !1) === t && (!0 === this.ingame.isContinued ? this.ingame.fsm.CountingTimeOverToEnd() : this.ingame.fsm.CountingTimeOverToContinue())
            },
            onPauseCounter: function(t) {
                !1 !== this.isCounting && (this.isPause = t,
                !0 === this.isPause ? (this.counterLabel.node.stopAllActions(),
                this.unschedule(this.repeatSound)) : (this.counterLabel.node.runAction(this.textScaleAction),
                this.schedule(this.repeatSound, 1, 99, 0, !1)))
            },
            update: function(t) {
                if (!1 !== this.isCounting)
                    if (0 < this.currCountingTime) {
                        if (!0 === this.isPause)
                            return;
                        if (0 < this.microTime && 1 <= this.currCountingTime)
                            return this.microFillImage.fillRange = this.microTime / this.microMaxTime,
                            void (this.microTime -= t);
                        this.setCurrTime(-1, !0)
                    } else
                        this.onStopCounter(!0)
            },
            setCurrTime: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                this.currCountingTime = !0 === e ? this.currCountingTime + t : t,
                this.counterLabel.string = this.currCountingTime,
                this.microTime = this.microMaxTime
            },
            onTimeSkipButton: function() {
                !0 !== this.isPause && this.setCurrTime(-1, !0)
            },
            onSkipButton: function() {
                this.setCurrTime(0, !1)
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    GameBoard: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f3313gy/M1PZImeLps5odmY", "GameBoard");
        var i = t("MPObject")
          , h = t("../../util/GameUtil")
          , l = t("../../config/GameConfig").gameConfig
          , a = t("../../modules/Types")
          , n = t("LayerBlock")
          , s = t("BoomBlock")
          , r = a.BreakBlockAniType
          , c = a.OnBlockType
          , u = a.DestroyBlockState
          , p = a.Direction
          , d = a.BoomDir
          , f = a.ShapeControlType
          , g = t("./boardAction/LineBreakAction").LineBreakAction
          , m = t("./boardAction/ReviveBreakAction").ReviveBreakAction
          , y = (t("ParticleManager"),
        t("../../config/ShapeConfig").shapeArray,
        t("DataSet"));
        t("DataManager");
        cc.Class({
            extends: i,
            properties: {
                boardBlockPrefab: {
                    default: null,
                    type: cc.Prefab
                },
                boardSize: {
                    default: cc.Vec2.ZERO
                },
                blockMargin: 0
            },
            isBoardAnimating: function() {
                return this.ingame.fsm.is("lineBreak")
            },
            preInit: function(t, e) {
                this.closeBoardBlockMinPosIdx = cc.v2(99, 99),
                this.onBoardBlocks = [],
                this.spawnBoardBlocks(),
                this.ingame = t,
                this.blockPool = e,
                this.lastBlockPosIdxList = [],
                this.boardActionDic = {},
                this.boardActionDic[r.NormalBreak] = new g,
                this.boardActionDic[r.ReviveBreak] = new m
            },
            spawnBoardBlocks: function() {
                var t = this.boardSize
                  , e = l.gameBoardCellSize
                  , o = this.boardBlockRect = new cc.Size(e,e);
                this.boardBlocks = h.create2DArray(t.x, t.y),
                this.onBoardBlocks = h.create2DArray(t.x, t.y),
                this.animationBoard = h.create2DArray(t.x, t.y);
                for (var i = h.getDivideStartPos(o.width, this.blockMargin, t.x, !0), a = new cc.Vec2(i,h.getDivideStartPos(o.height, this.blockMargin, t.y, !1)), n = 0; n < t.y; n++) {
                    a.x = i;
                    for (var s = 0; s < t.x; s++) {
                        var r = cc.instantiate(this.boardBlockPrefab)
                          , c = r.getComponent("BoardBlock");
                        r.parent = this.node,
                        r.setPosition(a.x, a.y),
                        c.getComponent("BoardBlock").preInit(l.boardColor, l.shadowColor),
                        this.boardBlocks[s][n] = c,
                        this.onBoardBlocks[s][n] = null,
                        this.animationBoard[s][n] = null,
                        a.x += o.width + this.blockMargin
                    }
                    a.y -= o.height + this.blockMargin
                }
            },
            init: function(t) {
                if ((this.specialBlockCnt = 0) !== t.boardData.length) {
                    this.saveBlockBoard = t.boardData;
                    for (o = 0; o < this.boardSize.y; ++o)
                        for (i = 0; i < this.boardSize.x; ++i) {
                            var e = this.saveBlockBoard[i][o];
                            e.onBlockType !== c.None && this.attachBlockInBoard(null, cc.v2(i, o), e.onBlockType, e.shapeId)
                        }
                } else {
                    this.saveBlockBoard = h.create2DArray(this.boardSize.x, this.boardSize.y);
                    for (var o = 0; o < this.boardSize.y; ++o)
                        for (var i = 0; i < this.boardSize.x; ++i)
                            this.saveBlockBoard[i][o] = new y.SaveBlockData
                }
            },
            initForTutorial: function(t, e) {
                this.tutorial = e;
                for (var o = 0; o < this.boardSize.y; ++o)
                    for (var i = 0; i < this.boardSize.x; ++i)
                        this.destroyBlock(cc.v2(i, o), d.Width, !0, !0),
                        null !== this.animationBoard[i][o] && this.animationBoard[i][o].breakBlock(this.board.blockPool, 0),
                        this.animationBoard[i][o] = null;
                for (o = 0; o < this.boardSize.y; ++o)
                    for (i = 0; i < this.boardSize.x; ++i)
                        t[i][o] < 0 || this.attachBlockInBoard(null, cc.v2(o, i), c.NormalBlock, t[i][o])
            },
            release: function() {
                for (var t = 0; t < this.boardSize.y; ++t)
                    for (var e = 0; e < this.boardSize.x; ++e) {
                        var o = this.onBoardBlocks[e][t];
                        null !== o && this.blockPool.putBlock(o, o.blockType);
                        var i = this.animationBoard[e][t];
                        null !== i && this.blockPool.putBlock(i, i.blockType),
                        this.saveBlockBoard[e][t].onBlockType = c.None,
                        this.onBoardBlocks[e][t] = null,
                        this.animationBoard[e][t] = null
                    }
            },
            updateShape: function(t) {
                this.isExceptionBlock = !0;
                var e = h.getWorldPosition(t.node);
                if (this.clearBoardColor(),
                !this.isBoardAnimating()) {
                    var o = this.getCloseBoardBlockPos(e);
                    if (this.resetBlockColor(),
                    !1 !== this.isInSideBoard(e, o)) {
                        var i = t.shapeArr
                          , a = cc.v2(i[0].length, i.length);
                        this.closeBoardBlockMinPosIdx = this.getCloseBoardBlockPosIdx(a, e, o).clone(),
                        !1 !== this.isCorrectBlockOnBoard(t.shapeBlocks, t.shapeSize) && (this.placeChangeColor(t),
                        t.shapeControlType !== f.NoLand && (this.drawShadowWithShape(t.shapeBlocks, t.shapeSize, t.colorType),
                        this.isExceptionBlock = !1))
                    }
                }
            },
            placeChangeColor: function(t) {
                var e, o = this.checkPlaceIsFull(t.shapeBlocks, t.shapeSize), i = 0, a = 0;
                for (i = 0; i < o.horArr.length; i++)
                    for (a = 0; a < this.boardSize.x; ++a)
                        (e = this.onBoardBlocks[a][o.horArr[i]]) && e.changeBlockColor(t.colorType);
                for (i = 0; i < o.verArr.length; i++)
                    for (a = 0; a < this.boardSize.y; ++a)
                        (e = this.onBoardBlocks[o.verArr[i]][a]) && e.changeBlockColor(t.colorType)
            },
            resetBlockColor: function() {
                for (var t = 0; t < this.boardSize.y; ++t)
                    for (var e = 0; e < this.boardSize.x; ++e) {
                        var o = this.onBoardBlocks[e][t];
                        o && o.resetBlockColor()
                    }
            },
            showBlockOver: function() {
                for (var o = [], t = 0; t < this.boardSize.y; ++t)
                    for (var e = 0; e < this.boardSize.x; ++e) {
                        var i = this.onBoardBlocks[e][t];
                        i && o.push(i)
                    }
                (function t() {
                    var e = Math.random() * o.length | 0;
                    o[e] && (o[e].setOverColor(),
                    o.splice(e, 1)),
                    0 < o.length && setTimeout(function() {
                        t()
                    }, 20)
                }
                )()
            },
            getCloseBoardBlockPos: function(o) {
                var t = cc.v2(0, 0)
                  , i = this;
                function e(t, e) {
                    return h.getDistanceTwoDotsMagSqr(o, h.getWorldPosition(i.getBlockNode(e.x, e.y)))
                }
                for (var a = e(0, t), n = 0; n < this.boardSize.y; ++n)
                    for (var s = 0; s < this.boardSize.x; ++s) {
                        var r = e(0, cc.v2(s, n));
                        r < a && (t = cc.v2(s, n),
                        a = r)
                    }
                return t
            },
            clearBoardColor: function() {
                for (var t = 0; t < this.boardSize.y; ++t)
                    for (var e = 0; e < this.boardSize.y; ++e)
                        this.boardBlocks[e][t].resetColor()
            },
            isInSideBoard: function(t, e) {
                var o = h.getWorldPosition(this.boardBlocks[e.x][e.y].node)
                  , i = cc.v2(Math.abs(t.x - o.x), Math.abs(t.y - o.y));
                return 0 !== e.x && e.x !== this.boardSize.x - 1 && 0 !== e.y && e.y !== this.boardSize.y - 1 || !(this.boardBlockRect.width / 2 + 30 <= i.x || this.boardBlockRect.height / 2 + 30 <= i.y)
            },
            getCloseBoardBlockPosIdx: function(t, e, o) {
                var i = cc.v2(0, 0)
                  , a = h.getWorldPosition(this.boardBlocks[o.x][o.y].node);
                return t.x % 2 == 0 ? i.x = e.x - a.x < 0 ? o.x - Math.floor(t.x / 2) : o.x - Math.floor(t.x / 2 - 1) : i.x = o.x - Math.floor(t.x / 2),
                t.y % 2 == 0 ? i.y = e.y - a.y < 0 ? o.y - (Math.floor(t.y / 2) - 1) : o.y - Math.floor(t.y / 2) : i.y = o.y - Math.floor(t.y / 2),
                i
            },
            isCorrectBlockOnBoard: function(t, e) {
                for (var o = cc.v2(0, 0), i = 0; i < e.height; ++i)
                    for (var a = 0; a < e.width; ++a)
                        if (o.x = this.closeBoardBlockMinPosIdx.x + a,
                        o.y = this.closeBoardBlockMinPosIdx.y + i,
                        void 0 !== t[a][i]) {
                            if (o.x < 0 || o.x >= this.boardSize.x || o.y < 0 || o.y >= this.boardSize.y)
                                return !1;
                            if (!0 === this.boardBlocks[o.x][o.y].isLocked || null !== this.onBoardBlocks[o.x][o.y])
                                return !1
                        }
                return !0
            },
            drawShadowWithShape: function(t, e, o) {
                for (var i = 0; i < e.height; ++i)
                    for (var a = 0; a < e.width; ++a)
                        if (void 0 !== t[a][i]) {
                            var n = cc.v2(this.closeBoardBlockMinPosIdx.x + a, this.closeBoardBlockMinPosIdx.y + i);
                            this.boardBlocks[n.x][n.y].setShadowColor(o)
                        }
            },
            checkInBoard: function(t) {
                if (this.lastBlockPosIdxList = [],
                !0 === this.isBoardAnimating())
                    return !1;
                if (99 == this.closeBoardBlockMinPosIdx.x)
                    return !1;
                if (1 == this.isExceptionBlock)
                    return !1;
                for (var e = t.shapeBlocks, o = cc.v2(e.length, e[0].length), i = 0; i < o.y; ++i)
                    for (var a = 0; a < o.x; ++a) {
                        if (void 0 !== e[a][i]) {
                            var n = cc.v2(this.closeBoardBlockMinPosIdx.x + a, this.closeBoardBlockMinPosIdx.y + i);
                            if (null !== this.onBoardBlocks[n.x][n.y])
                                return !1
                        }
                    }
                return !0
            },
            attachShapeInBoard: function(t) {
                for (var e = t.shapeBlocks, o = cc.v2(e.length, e[0].length), i = 0, a = 0; a < o.y; ++a)
                    for (var n = 0; n < o.x; ++n) {
                        var s = e[n][a];
                        if (void 0 !== s) {
                            var r = cc.v2(this.closeBoardBlockMinPosIdx.x + n, this.closeBoardBlockMinPosIdx.y + a);
                            this.attachBlockInBoard(s, r, s.blockType),
                            this.lastBlockPosIdxList.push(r.clone()),
                            this.lastShapeColorType = t.colorType,
                            ++i
                        }
                    }
                return i
            },
            attachBlockInBoard: function(t, e, o) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0
                  , a = this.getBlockNode(e.x, e.y)
                  , n = t;
                if (null == t) {
                    if (o === c.None)
                        return;
                    n = this.blockPool.getBlock(o, i)
                }
                n.attachToBoard(this.node, a.getPosition()),
                this.onBoardBlocks[e.x][e.y] = n,
                this.saveBlockBoard[e.x][e.y].onBlockType = n.blockType,
                this.saveBlockBoard[e.x][e.y].shapeId = n.shapeId,
                this.boardBlocks[e.x][e.y].resetColor()
            },
            checkBoardFullLines: function(t) {
                this.ingame.isWillPlayAbility = !1,
                this.horizontalLines = [],
                this.verticalLines = [],
                this.boomBlockList = [],
                this.boomCrossLinePosIdxList = [],
                this.boomAniPosIdxList = [],
                this.boomLaserInfoList = [];
                for (var e = this.specialBlockCnt = 0; e < this.boardSize.y; ++e) {
                    for (var o = !0, i = 0; i < this.boardSize.x; ++i)
                        if (null === this.onBoardBlocks[i][e]) {
                            o = !1;
                            break
                        }
                    1 == o && this.horizontalLines.push(e)
                }
                for (i = 0; i < this.boardSize.x; ++i) {
                    for (o = !0,
                    e = 0; e < this.boardSize.y; ++e)
                        if (null === this.onBoardBlocks[i][e]) {
                            o = !1;
                            break
                        }
                    1 == o && this.verticalLines.push(i)
                }
                if (0 < this.horizontalLines.length || 0 < this.verticalLines.length) {
                    for (e = 0; e < this.boardSize.y; ++e)
                        for (i = 0; i < this.boardSize.x; ++i)
                            null !== this.onBoardBlocks[i][e] && this.onBoardBlocks[i][e].initBeforeAnimation();
                    this.clearFullLines(),
                    this.ingame.currBreakLine = this.verticalLines.length + this.horizontalLines.length,
                    cc.log("ver: " + this.verticalLines.length),
                    cc.log("ho: " + this.horizontalLines.length),
                    cc.log("boom: " + this.boomCrossLinePosIdxList.length),
                    this.ingame.addScoreBlock(t, !1),
                    this.ingame.addScoreLine(this.verticalLines.length + this.horizontalLines.length, this.specialBlockCnt),
                    !0 === this.ingame.isSpawnSpecialBlock(a.OnBlockType.BoomBlock) && (++this.ingame.spawnBoomCount,
                    this.ingame.isWillPlayAbility = !0),
                    this.ingame.fsm.StartLineAnim(r.NormalBreak)
                } else
                    this.ingame.addScoreBlock(t)
            },
            checkPlaceIsFull: function(t, e) {
                for (var o = {
                    horArr: [],
                    verArr: []
                }, i = h.create2DArray(this.boardSize.x, this.boardSize.y), a = 0; a < this.boardSize.y; ++a)
                    for (var n = 0; n < this.boardSize.x; ++n) {
                        this.onBoardBlocks[n][a] && (i[n][a] = 1)
                    }
                for (a = 0; a < e.height; ++a)
                    for (n = 0; n < e.width; ++n)
                        if (void 0 !== t[n][a]) {
                            var s = cc.v2(this.closeBoardBlockMinPosIdx.x + n, this.closeBoardBlockMinPosIdx.y + a);
                            i[s.x][s.y] = 1
                        }
                for (a = 0; a < this.boardSize.y; ++a) {
                    var r = !0;
                    for (n = 0; n < this.boardSize.x; ++n)
                        if (!i[n][a]) {
                            r = !1;
                            break
                        }
                    1 == r && o.horArr.push(a)
                }
                for (n = 0; n < this.boardSize.x; ++n) {
                    for (r = !0,
                    a = 0; a < this.boardSize.y; ++a)
                        if (!i[n][a]) {
                            r = !1;
                            break
                        }
                    1 == r && o.verArr.push(n)
                }
                return o
            },
            clearFullLines: function() {
                for (var t = 0; t < this.horizontalLines.length; ++t)
                    for (var e = this.horizontalLines[t], o = 0; o < this.boardSize.x; ++o)
                        this.destroyBlock(cc.v2(o, e), d.Width, !0);
                for (t = 0; t < this.verticalLines.length; ++t)
                    for (e = this.verticalLines[t],
                    o = 0; o < this.boardSize.y; ++o)
                        this.destroyBlock(cc.v2(e, o), d.Height, !0);
                for (; 0 < this.boomBlockList.length; ) {
                    var i = [];
                    for (t = 0; t < this.boomBlockList.length; ++t) {
                        var a = !1;
                        for (o = 0; o < i.length; ++o)
                            if (i[o].boomPos.x === this.boomBlockList[t].boomPos.x && i[o].boomPos.y === this.boomBlockList[t].boomPos.y) {
                                i[o].boomDir = d.Both,
                                this.boomCrossLinePosIdxList.push(this.boomBlockList[t].boomPos),
                                a = !0;
                                break
                            }
                        !0 !== a && i.push(this.boomBlockList[t])
                    }
                    this.boomBlockList = [];
                    for (t = 0; t < i.length; ++t) {
                        var n = i[t].boomPos
                          , s = i[t].boomDir;
                        i[t].boomObj.onDestroyBlock(this, this.boardSize, n, s),
                        this.onBoardBlocks[n.x][n.y] = null
                    }
                }
            },
            destroyBlock: function(t, e, o) {
                var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                if (!(t.x < 0 || t.x >= this.boardSize.x || t.y < 0 || t.y >= this.boardSize.y)) {
                    var a = this.onBoardBlocks[t.x][t.y];
                    if (null !== a) {
                        if (this.animationBoard[t.x][t.y] = a,
                        1 == i)
                            return this.saveBlockBoard[t.x][t.y].onBlockType = c.None,
                            this.saveBlockBoard[t.x][t.y].shapeId = 0,
                            void (this.onBoardBlocks[t.x][t.y] = null);
                        if (a instanceof n) {
                            if (!0 === o && !0 === a.isFirstBreakOnce)
                                return;
                            if (!1 === a.onDisruptBlock(o))
                                return void (this.saveBlockBoard[t.x][t.y].onBlockType = a.savingBlockType)
                        } else if (a instanceof s)
                            return this.boomBlockList.push({
                                boomPos: t.clone(),
                                boomDir: e,
                                boomObj: a
                            }),
                            this.saveBlockBoard[t.x][t.y].onBlockType = c.None,
                            void (this.saveBlockBoard[t.x][t.y].shapeId = 0);
                        null != a && (this.saveBlockBoard[t.x][t.y].onBlockType = c.None,
                        this.saveBlockBoard[t.x][t.y].shapeId = 0,
                        this.onBoardBlocks[t.x][t.y] = null)
                    }
                }
            },
            playBoardAnimation: function(t) {
                void 0 !== this.tutorial && null !== this.tutorial && (this.tutorial.clearObjs(),
                ++this.tutorial.currTutoDragCnt),
                this.boardActionDic[t].playBoardAction(this, this.ingame, this.blockPool)
            },
            endBoardAnimation: function(t) {
                this.ingame.fsm.EndLineAnim(t)
            },
            playDestroyBlockAnimation: function(t, e) {
                var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : u.Normal
                  , i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : p.None;
                if (t.x < 0 || t.x >= this.boardSize.x || t.y < 0 || t.y >= this.boardSize.y)
                    return !1;
                if (o === u.First)
                    for (var a = 0; a < this.lastBlockPosIdxList.length; ++a)
                        if (t === this.lastBlockPosIdxList[a])
                            return !1;
                var n = this.animationBoard[t.x][t.y];
                if (null === n)
                    return o === u.Boom;
                switch (n.blockType) {
                case c.NormalBlock:
                    break;
                case c.LayerBlock2:
                    if (!0 === n.breakAnimationLayerBlock(o === u.First, e))
                        return !0;
                    break;
                case c.BoomBlock:
                    if (!0 === n.isAnimatied)
                        return !0;
                    n.isAnimatied = !0,
                    o === u.BoomRange && this.boomCrossLinePosIdxList.push(t);
                    for (a = 0; a < this.boomCrossLinePosIdxList.length; ++a)
                        if (!1 !== t.equals(this.boomCrossLinePosIdxList[a]))
                            return this.addBoomLaserInfo(d.Width, n.shapeId, t),
                            this.addBoomLaserInfo(d.Height, n.shapeId, t),
                            this.boomAniPosIdxList.push(h.createSourceBlockData(t, d.Both, u.Boom)),
                            !0;
                    return i === p.Down || i === p.Up ? (this.addBoomLaserInfo(d.Width, n.shapeId, t),
                    this.boomAniPosIdxList.push(h.createSourceBlockData(t, d.Width, u.Boom))) : i !== p.Left && i !== p.Right || (this.addBoomLaserInfo(d.Height, n.shapeId, t),
                    this.boomAniPosIdxList.push(h.createSourceBlockData(t, d.Height, u.Boom))),
                    !0;
                case c.BoomRangeBlock:
                    return !0 === n.isAnimatied || (n.isAnimatied = !0,
                    this.boomAniPosIdxList.push(h.createSourceBlockData(t, d.Both, u.BoomRange))),
                    !0
                }
                this.animationBoard[t.x][t.y] = null;
                return n.breakBlock(this.blockPool, e, this.lastShapeColorType),
                !0
            },
            forceBreakBlockAni: function(t, e, o) {
                this.animationBoard[e.x][e.y] = null,
                t.breakBlock(this.blockPool, o)
            },
            reviveBoard: function(t) {
                this.lastBlockPosIdxList = [];
                for (var e = l.reviveHoleSize, o = cc.v2(h.randomRange(0, this.boardSize.x - e) + 1, h.randomRange(0, this.boardSize.y - e) + 1), i = o.y; i < o.y + e; ++i)
                    for (var a = o.x; a < o.x + e; ++a)
                        null !== this.onBoardBlocks[a][i] && (this.destroyBlock(cc.v2(a, i), d.Width, !0, !0),
                        this.lastBlockPosIdxList.push(cc.v2(a, i)));
                t.updateCanLandShapeList(),
                this.ingame.fsm.StartLineAnim(r.ReviveBreak)
            },
            replaceSaveBlock: function(t, e) {
                null !== this.onBoardBlocks[e.x][e.y] && (this.saveBlockBoard[e.x][e.y].onBlockType = t)
            },
            showReplaceBlock: function(t, e, o) {
                this.blockPool.putBlock(o, o.blockType),
                this.onBoardBlocks[t.x][t.y] = e
            },
            getBlockNode: function(t, e) {
                return this.boardBlocks[t][e].node
            },
            getOnBoardBlock: function(t, e) {
                return this.onBoardBlocks[t][e]
            },
            getRandomPosIdxByNormalBlock: function() {
                for (var t = [], e = 0; e < this.boardSize.y; ++e)
                    for (var o = 0; o < this.boardSize.x; ++o) {
                        var i = this.saveBlockBoard[o][e];
                        null !== i && (i.onBlockType === c.NormalBlock && t.push(cc.v2(o, e)))
                    }
                return 0 === t.length ? null : t[h.randomIdxInArray(t.length)]
            },
            getNewOnBoardBlock: function(t, e) {
                return this.blockPool.getBlock(t, e)
            },
            addBoomLaserInfo: function(t, e, o) {
                var i;
                switch (t) {
                case d.Width:
                    i = cc.v2(h.getWorldPosition(this.node).x, h.getWorldPosition(this.getBlockNode(4, o.y)).y);
                    break;
                case d.Height:
                    i = cc.v2(h.getWorldPosition(this.getBlockNode(o.x, 4)).x, h.getWorldPosition(this.node).y)
                }
                this.boomLaserInfoList.push({
                    boomDir: t,
                    shapeId: e,
                    destroyWorldPos: i
                })
            },
            isGameOver: function(t) {
                for (var e = 0; e < t.length; ++e)
                    if (!0 === this.isOverlapedShape(t[e].shapeArr, 4))
                        return !1;
                return !0
            },
            isClear: function() {
                for (var t = 0; t < this.boardSize.y; ++t)
                    for (var e = 0; e < this.boardSize.x; ++e)
                        if (null !== this.onBoardBlocks[e][t])
                            return !1;
                return !0
            },
            isOverlapedShape: function(t, e) {
                for (var o = h.copy2DArray(t), i = 0; i < 1; ++i)
                    for (var a = cc.v2(o[0].length, o.length), n = cc.v2(this.boardSize.x + 1 - a.x, this.boardSize.y + 1 - a.y), s = 0; s < n.y; ++s)
                        for (var r = 0; r < n.x; ++r)
                            if (!1 === this.shapeOverlaped(o, a, cc.v2(r, s)))
                                return !0;
                return !1
            },
            shapeOverlaped: function(t, e, o) {
                for (var i = 0; i < e.y; ++i)
                    for (var a = 0; a < e.x; ++a)
                        if (0 !== t[i][a] && null !== this.onBoardBlocks[o.x + a][o.y + i])
                            return !0;
                return !1
            },
            disableAllBlock: function() {
                for (var t = 0, e = 0; e < this.boardSize.y; ++e) {
                    for (var o = 0; o < this.boardSize.x; ++o)
                        null !== this.onBoardBlocks[o][e] && this.onBoardBlocks[o][e].activateBlock(!1, .2, t);
                    t += .05
                }
            },
            allSetLockBoardBlocks: function(t) {
                for (var e = 0; e < this.boardSize.y; ++e)
                    for (var o = 0; o < this.boardSize.x; ++o)
                        this.boardBlocks[o][e].isLocked = t
            },
            setLockBoardBlocks: function(t, e) {
                for (var o = 0; o < e.length; ++o) {
                    var i = e[o];
                    this.boardBlocks[i.x][i.y].isLocked = t
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/GameConfig": "GameConfig",
        "../../config/ShapeConfig": "ShapeConfig",
        "../../modules/Types": "Types",
        "../../util/GameUtil": "GameUtil",
        "./boardAction/LineBreakAction": "LineBreakAction",
        "./boardAction/ReviveBreakAction": "ReviveBreakAction",
        BoomBlock: "BoomBlock",
        DataManager: "DataManager",
        DataSet: "DataSet",
        LayerBlock: "LayerBlock",
        MPObject: "MPObject",
        ParticleManager: "ParticleManager"
    }],
    GameConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ac298wH2EhHMYXt+U5NyrHC", "GameConfig");
        var i = t("../modules/Types").OnBlockType
          , a = (i.BoomBlock,
        i.LayerBlock2,
        {
            specialBlockCycle: {
                BoomBlock: {
                    requireLine: [5],
                    cycleLine: [8]
                },
                LayerBlock2: {
                    requireLine: [20, 100],
                    cycleLine: [4, 3]
                }
            },
            changeIgnoreBlockIDs: [6, 10, 12, 16],
            overlapIgnoreBlockIds: [6, 10, 12, 16],
            ignoreUnLockNotifyIds: [6, 10],
            oneShotLines_cong: 3,
            specCountMin_cong: 1,
            oneShotLines_star: 4,
            cycleLine_star: 20,
            endCountingTime: 5,
            reviveHoleSize: 5,
            gameScoreSet: {
                breakLineScore: [0, 8, 30, 60, 100, 150, 210, 210, 210, 210],
                spawnBlockScore: 1
            },
            boomRangeStartTime: 2,
            boomRangeInterval: 5,
            shapeDragThreshold: 3e3,
            boardColor: cc.color("#DCE0E2FF"),
            shadowColor: cc.color("#A8A8A8FF"),
            gameBoardCellSize: 81.5,
            blockSize: 80,
            gameBoardStartAndX: -1,
            gameBoardStartAddX: 1.5
        });
        e.exports = {
            gameConfig: a
        },
        cc._RF.pop()
    }
    , {
        "../modules/Types": "Types"
    }],
    GameUtil: [function(t, e, o) {
        "use strict";
        function s(t, e) {
            for (var o = new Array(t), i = 0; i < t; i++)
                o[i] = new Array(e);
            return o
        }
        cc._RF.push(e, "4dc79vDQ1ZOp79WKBf5OIym", "GameUtil"),
        e.exports = {
            randomIdxInArray: function(t) {
                return Math.floor(Math.random() * t)
            },
            create2DArray: s,
            copy2DArray: function(t) {
                for (var e = [], o = 0; o < t.length; o++)
                    e[o] = t[o].slice();
                return e
            },
            getDivideStartPos: function(t, e, o) {
                return (3 < arguments.length && void 0 !== arguments[3] && !arguments[3] ? 1 : -1) * (t / 2 + e / 2) * (o - 1)
            },
            randomRange: function(t, e) {
                return Math.floor(Math.random() * (e - t) + t)
            },
            randomRangeFloat: function(t, e) {
                return Math.random() * (e - t) + t
            },
            rotateToRightArray: function(t) {
                for (var e = cc.v2(t.length, t[0].length), o = cc.v2(e.y, e.x), i = s(o.x, o.y), a = 0; a < o.y; ++a)
                    for (var n = 0; n < o.x; ++n)
                        i[n][a] = t[a][e.y - 1 - n];
                return i
            },
            getWorldPosition: function(t) {
                return t.parent.convertToWorldSpaceAR(t.getPosition())
            },
            getDistanceTwoDotsMagSqr: function(t, e) {
                return cc.v2(t).sub(e).magSqr()
            },
            isSpawnSpecialBlock: function(t, e, o) {
                for (var i = -1, a = 0; a < t.requireLine.length; ++a) {
                    if (e < t.requireLine[a]) {
                        if (0 == a)
                            return {
                                ret: !1,
                                cycleIdx: i
                            };
                        i = a - 1;
                        break
                    }
                    i = a
                }
                return e < o ? {
                    ret: !1,
                    cycleIdx: i
                } : {
                    ret: !0,
                    cycleIdx: i
                }
            },
            createSourceBlockData: function(t, e, o) {
                return {
                    destroyPosIdx: t.clone(),
                    boomDir: e,
                    destroyBlockState: o
                }
            },
            isContainInArray: function(t, e) {
                for (var o = 0; o < t.length; ++o)
                    if (t[o] === e)
                        return !0;
                return !1
            },
            isFitHeight: function() {
                var t = cc.director.getVisibleSize();
                return .5625 <= t.width / t.height
            },
            isIphoneX: function() {
                var t = cc.view.getFrameSize();
                return 375 === t.width && 812 === t.height
            }
        },
        cc._RF.pop()
    }
    , {}],
    GoodsArea: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ffde5Legn9DoLwoXZNF3hxe", "GoodsArea");
        var i = t("MPObject")
          , a = t("HitValueLabel");
        cc.Class({
            extends: i,
            properties: {
                goodsLabel: a
            },
            preInit: function(t) {
                this.popupManager = t
            },
            init: function(t) {
                this.goodsLabel.string = t
            },
            updateGoodsValue: function(t) {
                this.goodsLabel.playUpdateValue(t)
            }
        }),
        cc._RF.pop()
    }
    , {
        HitValueLabel: "HitValueLabel",
        MPObject: "MPObject"
    }],
    GoodsStatusBar: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f23dbrkQ0JIYL2osYa79DdG", "GoodsStatusBar");
        var i = t("GoodsArea")
          , a = cc.Class({
            extends: cc.Component,
            editor: {
                executionOrder: -2
            },
            statics: {
                instance: null
            },
            properties: {
                coinArea: {
                    default: [],
                    type: i
                },
                starArea: {
                    default: [],
                    type: i
                }
            },
            onLoad: function() {
                a.instance = this
            },
            changedScene: function() {
                this.coinArea = [],
                this.starArea = []
            },
            setCoinArea: function(t) {
                this.coinArea.push(t)
            },
            setStarArea: function(t) {
                this.starArea.push(t)
            },
            changedCoin: function(t) {
                for (var e = 0; e < this.coinArea.length; ++e)
                    this.coinArea[e].updateGoodsValue(t)
            },
            changedStar: function(t) {
                for (var e = 0; e < this.starArea.length; ++e)
                    this.starArea[e].updateGoodsValue(t)
            }
        });
        cc._RF.pop()
    }
    , {
        GoodsArea: "GoodsArea"
    }],
    GoodsToast: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "430dfugg5dANJ2fpyCxfc3o", "GoodsToast");
        t("MPObject");
        var i = t("Types").SoundType
          , a = t("SoundManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                starLabel: cc.Label
            },
            preInit: function() {
                this.startPos = cc.v2(0, 230),
                this.middlePos = cc.v2(0, 65 + this.startPos.y),
                this.endPos = cc.v2(0, 100 + this.middlePos.y),
                this.showSeq = cc.sequence(cc.callFunc(function() {
                    a.instance.playSFX(i.GetStar)
                }, this), cc.spawn(cc.moveTo(.2, this.middlePos), cc.fadeIn(.2)), cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1), cc.delayTime(.4), cc.spawn(cc.moveTo(.2, this.endPos), cc.fadeOut(.2)), cc.callFunc(function() {
                    this.node.active = !1
                }, this)),
                this.showSeq.setTag(1),
                this.node.active = !1
            },
            init: function() {},
            showGoodsToast: function(t, e) {
                this.starLabel.string = "+" + t,
                this.node.setPosition(this.startPos),
                this.node.opacity = 0,
                this.node.active = !0,
                this.scheduleOnce(function() {
                    this.node.stopActionByTag(1),
                    this.node.runAction(this.showSeq)
                }, e)
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    HitValueLabel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3bce19oHrdEfaUlWtX1MSxC", "HitValueLabel");
        t("MPObject");
        cc.Class({
            extends: cc.Label,
            properties: {},
            playUpdateValue: function(t) {
                this.node.stopActionByTag(1);
                var e = cc.sequence(cc.scaleTo(.1, 1.3), cc.callFunc(function() {
                    this.string = t
                }, this), cc.scaleTo(.1, 1));
                e.setTag(1),
                this.node.runAction(e)
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    Home: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "787b7w+e7xIerT46tKnwOTy", "Home");
        var i = t("MPObject")
          , a = t("Title")
          , n = t("CharacterStore")
          , s = t("PopupManager")
          , r = (t("SoundManager"),
        t("Types").SoundType,
        t("GoodsStatusBar"))
          , c = t("GameUtil")
          , h = t("AdManager").AdManager;
        cc.Class({
            extends: i,
            properties: {
                title: a,
                characterStore: n,
                popupManager: s
            },
            onLoad: function() {
                r.instance.changedScene(),
                h.instance.sceneChanged(),
                h.instance.setTestAdViews(this.node),
                h.instance.hideBanner();
                var t = this.getComponent(cc.Canvas)
                  , e = c.isFitHeight();
                t.fitHeight = e,
                t.fitWidth = !e,
                setTimeout(function() {
                    cc.director.loadScene("Ingame", function() {})
                }
                .bind(this), 0)
            },
            init: function() {},
            release: function() {},
            changeSection: function(t) {
                if ("" === this.currSection)
                    return this.sectionDic[t].init(),
                    void (this.currSection = t);
                this.sectionDic[this.currSection].release(),
                this.sectionDic[t].init(),
                this.currSection = t
            }
        });
        cc._RF.pop()
    }
    , {
        AdManager: "AdManager",
        CharacterStore: "CharacterStore",
        GameUtil: "GameUtil",
        GoodsStatusBar: "GoodsStatusBar",
        MPObject: "MPObject",
        PopupManager: "PopupManager",
        SoundManager: "SoundManager",
        Title: "Title",
        Types: "Types"
    }],
    InfoToast: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "97a5aVvIOhOkLIJAWEtaSLh", "InfoToast");
        var i = t("MPObject")
          , a = t("RichTextLocalized");
        cc.Class({
            extends: i,
            properties: {
                descRichText: a
            },
            preInit: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchDownToast, this),
                this.showSeq = cc.scaleTo(.2, 1, 1),
                this.showSeq.easing(cc.easeBackOut()),
                this.showSeq.setTag(1),
                this.hideSeq = cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                    this.node.active = !1
                }, this)),
                this.hideSeq.setTag(2)
            },
            init: function() {},
            release: function() {},
            showToast: function(t, e) {
                this.node.stopActionByTag(1),
                this.node.stopActionByTag(2),
                this.unscheduleAllCallbacks(),
                this.descRichText.textKey = t,
                this.node.active = !0,
                this.node.opacity = 255,
                this.node.setScale(0),
                this.node.runAction(this.showSeq),
                this.scheduleOnce(this.hideToast, e)
            },
            hideToast: function() {
                this.node.stopActionByTag(1),
                this.unscheduleAllCallbacks(),
                this.node.runAction(this.hideSeq)
            },
            onTouchDownToast: function() {
                this.hideToast()
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject",
        RichTextLocalized: "RichTextLocalized"
    }],
    IngameUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3b5b18PK8NG1acOacE2m/nw", "IngameUI");
        var i = t("MPObject")
          , a = t("CongImageText")
          , n = (t("GameConfig").gameConfig,
        t("CommonConfig").commonConfig,
        t("GoodsToast"),
        t("InfoToast"),
        t("HitValueLabel"))
          , s = (t("GoodsArea"),
        t("GoodsStatusBar"),
        t("AdManager").AdManager)
          , r = t("GameUtil")
          , c = (t("DataManager").DataManager,
        t("Types"));
        c.CongTextType,
        c.PopupType,
        c.RewardVideoType,
        c.DataType;
        cc.Class({
            extends: i,
            properties: {
                scoreText: n,
                congText: {
                    type: a,
                    default: null
                },
                addingPlusWidget: cc.Widget,
                newScoreChange: cc.Node,
                scoreChangeImgArr: {
                    type: cc.SpriteFrame,
                    default: []
                }
            },
            preInit: function(t) {
                this.popupManager = t;
                s.instance.onLoadedRewardVideoEvents.push({
                    event: this.onLoadedRewardVideo,
                    self: this
                }),
                this.congText.preInit();
                this.crownAction = cc.repeatForever(cc.sequence(cc.delayTime(r.randomRangeFloat(20, 30)), cc.rotateTo(.05, 15), cc.rotateTo(.1, -15), cc.rotateTo(.1, 15), cc.rotateTo(.1, -15), cc.rotateTo(.1, 15), cc.rotateTo(.05, 0)))
            },
            init: function(t, e, o) {
                this.onChangedScoreText(t),
                this.lastScore = t
            },
            onChangedScoreText: function(t, e) {
                var o = t - this.lastScore;
                this.scoreText.playUpdateValue(t);
                var i = -1;
                "number" == typeof e && (2 === e ? i = 0 : 3 === e ? i = 1 : 3 < e && (i = 2)),
                -1 !== i && (this.upAnimation && (clearTimeout(this.upAnimation),
                this.upAnimation = null),
                this.newScoreChange.stopAllActions(),
                this.newScoreChange.active = !0,
                this.newScoreChange.opacity = 255,
                this.newScoreChange.y = 134,
                this.newScoreChange.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.scoreChangeImgArr[i],
                this.newScoreChange.getChildByName("addNum").getComponent(cc.Label).string = o,
                this.upAnimation = setTimeout(function() {
                    this.newScoreChange.runAction(cc.fadeOut(1)),
                    this.newScoreChange.runAction(cc.moveBy(1, cc.p(0, 180)))
                }
                .bind(this), 300)),
                this.lastScore = t
            },
            showCongText: function(t, e) {},
            showGoodsToast: function(t, e) {},
            showInfoToast: function(t) {
                1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            },
            onPressedPauseButton: function() {},
            onLoadedRewardVideo: function(t) {}
        }),
        cc._RF.pop()
    }
    , {
        AdManager: "AdManager",
        CommonConfig: "CommonConfig",
        CongImageText: "CongImageText",
        DataManager: "DataManager",
        GameConfig: "GameConfig",
        GameUtil: "GameUtil",
        GoodsArea: "GoodsArea",
        GoodsStatusBar: "GoodsStatusBar",
        GoodsToast: "GoodsToast",
        HitValueLabel: "HitValueLabel",
        InfoToast: "InfoToast",
        MPObject: "MPObject",
        Types: "Types"
    }],
    Ingame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f0d43DRhTdOs7zZlFbTQhND", "Ingame");
        var i = t("GameBoard")
          , a = t("state-machine")
          , n = t("BlockDynamicPool")
          , s = t("ShapePool")
          , r = t("IngameUI")
          , c = t("ItemManager")
          , h = t("MPParticle")
          , l = (t("EndCounter"),
        t("Tutorial"),
        t("DataManager").DataManager)
          , u = t("AdManager").AdManager
          , p = t("DataSet")
          , d = (t("ShapeConfig").shapeArray,
        t("../modules/Types"))
          , f = d.BreakBlockAniType
          , g = (d.CharacterType,
        d.CharacterEmotionType,
        d.OnBlockType,
        d.BoardParticleType,
        d.PopupType,
        d.ShapeControlType)
          , m = d.DataType
          , y = d.CongTextType
          , B = (d.CharAnimType,
        d.SoundType)
          , S = t("BoardParticlePool")
          , C = t("../config/GameConfig").gameConfig
          , v = C.gameScoreSet
          , P = C.specialBlockCycle
          , T = t("../util/GameUtil")
          , k = t("ParticleManager")
          , b = (t("PopupManager"),
        t("SoundManager"))
          , I = t("GoodsStatusBar")
          , L = (t("BoardTest").BoardTest,
        cc.Class({
            extends: cc.Component,
            statics: {
                instance: null
            },
            editor: {
                executionOrder: -1
            },
            properties: {
                gameBoard: {
                    default: null,
                    type: i
                },
                blockDynamicPool: {
                    default: null,
                    type: n
                },
                shapePool: {
                    default: null,
                    type: s
                },
                ingameUI: {
                    default: null,
                    type: r
                },
                itemManager: {
                    default: null,
                    type: c
                },
                boardParticlePool: {
                    default: null,
                    type: S
                },
                charEatingParticle: {
                    default: null,
                    type: h
                },
                bottomWidget: cc.Widget,
                guideNode: cc.Node,
                overShowBtn: cc.Button
            },
            onLoad: function() {
                L.instance = this,
                I.instance.changedScene(),
                u.instance.sceneChanged(),
                u.instance.setTestAdViews(this.node),
                u.instance.showBanner();
                var t = this.getComponent(cc.Canvas)
                  , e = T.isFitHeight();
                t.fitHeight = e,
                t.fitWidth = !e,
                this.userData = l.instance.getData(m.UserData),
                this.gameBoard.preInit(this, this.blockDynamicPool),
                this.blockDynamicPool.preInit(),
                this.shapePool.preInit(this, this.gameBoard),
                this.boardParticlePool.preInit(),
                this.itemManager.preInit(this),
                k.instance.preInit(this.boardParticlePool, this.charEatingParticle);
                this.fsm = a.create({
                    initial: "GameStart",
                    events: [{
                        name: "Start",
                        from: "GameStart",
                        to: "Solving"
                    }, {
                        name: "StartLineAnim",
                        from: "Solving",
                        to: "LineBreak"
                    }, {
                        name: "EndLineAnim",
                        from: "LineBreak",
                        to: "Solving"
                    }, {
                        name: "NoLandShape",
                        from: "Solving",
                        to: "Counting"
                    }, {
                        name: "PauseRestart",
                        from: "Solving",
                        to: "GameStart"
                    }, {
                        name: "CountingTimeOverToEnd",
                        from: "Counting",
                        to: "GameEnd"
                    }, {
                        name: "UsedItem",
                        from: "Counting",
                        to: "Solving"
                    }, {
                        name: "CountingTimeOverToContinue",
                        from: "Counting",
                        to: "Continue"
                    }, {
                        name: "NoCountingToContinue",
                        from: "Solving",
                        to: "Continue"
                    }, {
                        name: "Revive",
                        from: "Continue",
                        to: "Solving"
                    }, {
                        name: "NoContinue",
                        from: "Continue",
                        to: "GameEnd"
                    }, {
                        name: "NoChanceGameOver",
                        from: "Solving",
                        to: "GameEnd"
                    }, {
                        name: "EndGameRestart",
                        from: "GameEnd",
                        to: "GameStart"
                    }],
                    callbacks: {
                        onStart: this.onStart.bind(this),
                        onStartLineAnim: this.onStartLineAnim.bind(this),
                        onEndLineAnim: this.onEndLineAnim.bind(this),
                        onRevive: this.onRevive.bind(this),
                        onEndGameRestart: this.onEndGameRestart.bind(this),
                        onPauseRestart: this.onPauseRestart.bind(this),
                        onGameStart: this.onGameStart.bind(this),
                        onSolving: this.onSolving.bind(this),
                        onCounting: this.onCounting.bind(this),
                        onContinue: this.onContinue.bind(this),
                        onGameEnd: this.onGameEnd.bind(this)
                    }
                });
                this.fsm.Start()
            },
            releaseGame: function() {
                this.gameBoard.release();
                // this.shapePool.release()
            },
            onGameStart: function() {},
            onStartTutorial: function() {},
            onEndTutorial: function() {},
            onStart: function() {
                this.gameData = l.instance.getData(m.GameData),
                window.NativeInterface && NativeInterface.onGameLoaded && NativeInterface.onGameLoaded(),
                this.currBreakLine = 0,
                this.starCount = 0,
                this.isTutorial = !1,
                this.lastBlockScore = 0,
                this.spawnBoomCount = 0,
                this.isWillPlayAbility = !1,
                this.initIngameData(this.gameData),
                this.gameBoard.init(this.gameData),
                // this.ingameUI.init(this.score, this.userData.highScore, this.userData.coin),
                this.shapePool.init(this.gameData),
                this.itemManager.init({
                    leftChangeShapeCount: this.leftShapeChangeCount
                }),
                this.shapePool.updateCanLandShapeList(),
                cc.log("endState!: " + this.endStateName),
                "Solving" !== this.endStateName && this.deadProcessOnSolving()
            },
            onStartLineAnim: function(t, e, o, i) {
                this.shapePool.setShapeControlTypes(g.NoLand),
                i === f.NormalBreak && b.instance.playSFX(B.LineClear),
                this.gameBoard.playBoardAnimation(i)
            },
            onEndLineAnim: function(t, e, o, i) {
                if (f.ReviveBreak,
                !0 !== this.isDead) {
                    f.NormalBreak,
                    this.shapePool.setShapeControlTypes(g.Free);
                    var a = 0
                      , n = !1;
                    !1 === this.isShowedHighScore && this.score > this.userData.highScore && 0 < this.userData.highScore && !1 === this.isTutorial && i === f.NormalBreak && (n = !0,
                    this.isShowedHighScore = !0);
                    var s = this.getCongTextType(n);
                    s !== y.None && (a = this.ingameUI.showCongText(s, a)),
                    0 < this.currGetStarCount && this.ingameUI.showGoodsToast(this.currGetStarCount, a),
                    !(this.currBreakLine = 0) !== this.isTutorial && this.checkAndShowUnlockPopup()
                } else
                    this.deadProcessOnSolving()
            },
            getCongTextType: function(t) {
                var e = y.None;
                return !0 === t ? e = y.HighScore : (this.currBreakLine >= C.oneShotLines_cong || this.gameBoard.specialBlockCnt >= C.specCountMin_cong || !0 === this.gameBoard.isClear()) && (e = y.Common),
                e
            },
            checkAndShowUnlockPopup: function() {},
            onEndGameRestart: function() {},
            onPauseRestart: function() {
                this.releaseGame(),
                l.instance.resetData(m.GameData),
                this.fsm.Start()
            },
            onRevive: function() {
                b.instance.playSFX(B.ReviveBoard),
                this.isContinued = !0,
                this.isDead = !1,
                this.gameBoard.reviveBoard(this.shapePool),
                this.itemManager.onRevive(),
                this.saveIngameData()
            },
            onSolving: function() {
                !1 === this.isDead && (this.endStateName = "Solving")
            },
            onCounting: function() {},
            onContinue: function() {},
            onGameEnd: function() {},
            deadProcessOnSolving: function() {
                var t = !1 === this.fsm.is("Solving");
                if (!1 === this.isCounted) {
                    if (0 < this.shapePool.canLandShapeList.length)
                        return !0 === t ? "Counting" : void this.fsm.NoLandShape();
                    if (!1 === this.isContinued) {
                        if (!0 === t)
                            return "Continue";
                        this.fsm.NoCountingToContinue()
                    } else {
                        if (!0 === t)
                            return "GameEnd";
                        this.fsm.NoChanceGameOver()
                    }
                } else if (!1 === this.isContinued) {
                    if (!0 === t)
                        return "Continue";
                    this.fsm.NoCountingToContinue()
                } else {
                    if (!0 === t)
                        return "GameEnd";
                    this.fsm.NoChanceGameOver()
                }
            },
            onLandShape: function() {
                b.instance.playSFX(B.LandBlock);
                this.shapePool.updateCanLandShapeList();
                this.isDead = this.gameBoard.isGameOver(this.shapePool.shapeList);
                
                // this.newGameOver();
                // // this.releaseGame();
                if (this.isDead) {
                    this.onStart();    
                }

                return;
                !0 !== this.isDead ? (!0 === this.isDead && (this.endStateName = this.deadProcessOnSolving()),
                !0 !== this.isTutorial && (this.checkGetStar(),
                this.saveIngameData())) : this.newGameOver()
            },
            newGameOver: function() {
                if (this.gameBoard.showBlockOver(),
                this.overShowBtn.node.active = !0,
                this.shapePool.node.opacity = 121,
                console.log("游戏结束"),
                b.instance.stopBGM(),
                b.instance.playSFX(B.GameOver),
                window.NativeInterface && NativeInterface.onGameOver) {
                    var t = {
                        result: "0",
                        score: this.score + ""
                    };
                    t = JSON.stringify(t),
                    console.log("游戏结果 :" + t),
                    NativeInterface.onGameOver(t)
                }
            },
            checkGetStar: function() {
                this.saveLineForStar += this.currBreakLine,
                this.currGetStarCount = 0,
                this.currBreakLine > C.oneShotLines_star && ++this.currGetStarCount,
                this.saveLineForStar >= C.cycleLine_star && (++this.currGetStarCount,
                this.saveLineForStar = 0),
                0 < this.currGetStarCount && (this.userData.star += this.currGetStarCount,
                l.instance.saveData(m.UserData))
            },
            initIngameData: function(t) {
                void 0 === t && (t = new p.GameData),
                this.score = t.currScore,
                this.breakLineCount = t.breakLineCount,
                this.saveLineForStar = t.saveLineForStar,
                this.leftShapeChangeCount = t.leftShapeChangeCount,
                this.isCounted = t.isCounted,
                this.isContinued = t.isContinued,
                this.endStateName = t.endStateName,
                this.isShowedHighScore = t.isShowedHighScore,
                this.nextClearedLine = t.nextLineDic,
                this.spawnBoomCount = t.spawnBoomCount,
                this.setBreakLine(this.breakLineCount, !1);
                this.isFirst = true;
                this.guideNode.getChildByName("fontType0").active = !1,
                this.guideNode.getChildByName("fontType1").active = !1,
                this.guideNode.getChildByName("fontType2").active = !1;
                var e, o, i = (e = new RegExp("(^|&)" + "lang" + "=([^&]*)(&|$)"),
                null != (o = window.location.search.substr(1).match(e)) ? decodeURI(o[2]) : null);
                "en" === "en" ? this.guideNode.getChildByName("fontType2").active = !0 : "ind" === i ? this.guideNode.getChildByName("fontType1").active = !0 : this.guideNode.getChildByName("fontType0").active = !0,
                this.shapePool.node.active = !1,
                this.guideNode.active = !0,
                this.guideNode.getComponent("sp.Skeleton").setAnimation(0, "animation", !0);

                var self = this;
                this.guideNode.getChildByName("button").on("touchend", function() {
                    self.ingameUI.init(this.score, this.userData.highScore, this.userData.coin);
                    if (!self.isFirst) {
                        self.releaseGame();
                        setLoadingVisible(true, true, function () {
                            self.guideNode.active = !1,
                            self.shapePool.node.active = !0;
                        })
                    }
                    else {
                        self.guideNode.active = !1,
                        self.shapePool.node.active = !0;
                    }
                    self.isFirst = false;
                }
                .bind(this)),
                cc.sys.localStorage.setItem("isGuide", "1")
            },
            saveIngameData: function() {
                if (!0 !== this.isTutorial) {
                    var t = this.gameData;
                    t.boardData = this.gameBoard.saveBlockBoard,
                    t.currShapeDataList = this.shapePool.getCurrShapeDataList(),
                    t.overlapShapeDataList = this.shapePool.overlapShapeDataList,
                    t.currScore = this.score,
                    t.breakLineCount = this.breakLineCount,
                    t.saveLineForStar = this.saveLineForStar,
                    t.leftShapeChangeCount = this.leftShapeChangeCount,
                    t.isCounted = this.isCounted,
                    t.isContinued = this.isContinued,
                    t.endStateName = "LineBreak" === this.fsm.current ? "Solving" : this.fsm.current,
                    t.isShowedHighScore = this.isShowedHighScore,
                    t.nextLineDic = this.nextClearedLine,
                    t.spawnBoomCount = this.spawnBoomCount,
                    l.instance.saveData(m.GameData)
                }
            },
            addScoreLine: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = (1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                0);
                e += v.breakLineScore[t],
                this.lastClearLine = t,
                this.setBreakLine(t),
                this.setScore(e)
            },
            addScoreBlock: function(t) {
                var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                  , o = v.spawnBlockScore * t;
                this.setScore(o, !0, e),
                this.lastBlockScore = o
            },
            isSpawnSpecialBlock: function(t) {
                var e = T.isSpawnSpecialBlock(P[t], this.breakLineCount, this.nextClearedLine[t]);
                return !0 === e.ret && (this.nextClearedLine[t] = this.breakLineCount + P[t].cycleLine[e.cycleIdx]),
                e.ret = !1,
                e.ret
            },
            setBreakLine: function(t) {
                var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                this.breakLineCount = !0 === e ? this.breakLineCount + t : t,
                this.shapePool.updateCanUseShapeList(this.breakLineCount)
            },
            setScore: function(t) {
                var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                  , o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                this.score = !0 === e ? this.score + t : t,
                this.timeShowScore && (clearTimeout(this.timeShowScore),
                this.timeShowScore = null),
                !0 === o ? this.updateScoreText(!1) : this.timeShowScore = setTimeout(function() {
                    this.updateScoreText(!1)
                }
                .bind(this), 100)
            },
            updateScoreText: function() {
                0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                this.ingameUI.onChangedScoreText(this.score, this.lastClearLine),
                this.lastClearLine = 0
            },
            checkUseChangeItemFirst: function(t) {
                !1 !== this.userData.isItemUseFirst && (!1 === t && (this.userData.isItemUseFirst = !1,
                l.instance.saveData(m.UserData)),
                this.ingameUI.showInfoToast("tutorial_change", 3))
            }
        }));
        cc._RF.pop()
    }
    , {
        "../config/GameConfig": "GameConfig",
        "../modules/Types": "Types",
        "../util/GameUtil": "GameUtil",
        AdManager: "AdManager",
        BlockDynamicPool: "BlockDynamicPool",
        BoardParticlePool: "BoardParticlePool",
        BoardTest: "BoardTest",
        DataManager: "DataManager",
        DataSet: "DataSet",
        EndCounter: "EndCounter",
        GameBoard: "GameBoard",
        GoodsStatusBar: "GoodsStatusBar",
        IngameUI: "IngameUI",
        ItemManager: "ItemManager",
        MPParticle: "MPParticle",
        ParticleManager: "ParticleManager",
        PopupManager: "PopupManager",
        ShapeConfig: "ShapeConfig",
        ShapePool: "ShapePool",
        SoundManager: "SoundManager",
        Tutorial: "Tutorial",
        "state-machine": "state-machine"
    }],
    ItemBase: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e5bb4Z2rrVHPbLHfIxnU1Gz", "ItemBase");
        var i = t("MPObject");
        cc.Class({
            extends: i,
            properties: {},
            preInit: function() {},
            init: function() {
                this.isUsingItem = !1
            },
            onStartItemUsing: function() {
                this.isUsingItem = !0
            },
            onCancelUsingItem: function() {
                this.isUsingItem = !1
            },
            isCanItemUse: function() {},
            setEffectButton: function(t) {}
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    ItemManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b5af2TGw09NUpOXYVKJvTw+", "ItemManager");
        var i = t("MPObject")
          , a = t("ItemBase")
          , n = t("Types")
          , s = n.ItemType
          , r = n.PopupType
          , c = t("CommonConfig").commonConfig;
        cc.Class({
            extends: i,
            properties: {
                changeShapeItem: {
                    default: null,
                    type: a
                }
            },
            preInit: function(t) {
                this.itemDic = {},
                this.ingame = t,
                this.curItemType = s.None
            },
            init: function(t) {},
            onStartCounting: function() {},
            onCountEnd: function() {
                this.changeShapeItem.onCancelUsingItem(),
                this.changeShapeItem.setEffectButton(!1)
            },
            onRevive: function() {},
            onPressedItemButton: function(t, e) {
                var o = this.itemDic[e];
                if (!0 !== o.isUsingItem)
                    !1 !== o.isCanItemUse() ? !0 !== this.ingame.fsm.is("LineBreak") && !0 !== this.ingame.isTutorial && (!0 === this.ingame.fsm.is("Counting") && this.ingame.endCounter.onPauseCounter(!0),
                    this.ingame.userData.coin < c.changeShapeItemCost ? this.ingame.popupManager.showPopup(r.CoinLack, {
                        isLack: !0
                    }) : (o.onStartItemUsing(),
                    this.curItemType = e)) : this.ingame.ingameUI.showInfoToast("itemlackDesc", 3);
                else {
                    if (e !== this.curItemType)
                        return;
                    o.onCancelUsingItem()
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        CommonConfig: "CommonConfig",
        ItemBase: "ItemBase",
        MPObject: "MPObject",
        Types: "Types"
    }],
    ItemTutorial: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7f92f08li5A17ede/gj8gRC", "ItemTutorial");
        var i = t("MPObject")
          , a = t("TutoFinger");
        t("GameUtil");
        cc.Class({
            extends: i,
            properties: {
                finger: a
            },
            preInit: function() {
                this.finger.preInit(),
                this.node.active = !1
            },
            playChangeButtonPoint: function(t) {
                this.node.active = !0,
                this.finger.playTouchFinger(t)
            },
            playChangeShapePoint: function(t) {
                this.node.active = !0,
                this.finger.playTouchFinger(cc.v2(t.x + 80, t.y - 60))
            },
            stopItemTuto: function() {
                this.finger.clearFinger(),
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil",
        MPObject: "MPObject",
        TutoFinger: "TutoFinger"
    }],
    LabelLocalized: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff21e3Sd6FChJAW9UuAvDdp", "LabelLocalized");
        var i = t("i18n");
        cc.Class({
            extends: cc.Label,
            properties: {
                textKey: {
                    default: "TEXT_KEY",
                    multiline: !0,
                    tooltip: "Enter i18n key here",
                    notify: function() {
                        this._sgNode && (this._sgNode.setString(this.string),
                        this._updateNodeSize())
                    }
                },
                isFormatted: !1,
                format: "XX",
                formatValue: 0,
                string: {
                    override: !0,
                    tooltip: "Here shows the localized string of Text Key",
                    get: function() {
                        var t = i.t(this.textKey);
                        return !0 === this.isFormatted && (t = t.replace(this.format, this.formatValue)),
                        t
                    },
                    set: function(t) {
                        this.textKey = t
                    }
                }
            },
            setFormattedTextKey: function(t) {
                this.formatValue = t
            }
        }),
        cc._RF.pop()
    }
    , {
        i18n: "i18n"
    }],
    Layer2BlockParticle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "55352k5I+dCyLPlXF6SzUKW", "Layer2BlockParticle");
        var i = t("MPParticle");
        t("GameUtil");
        cc.Class({
            extends: i,
            properties: {},
            playParticle: function(t) {
                for (var e = 0; e < this.emitters.length; ++e) {
                    var o = this.emitters[e];
                    o.startColor = t,
                    o.resetSystem()
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil",
        MPParticle: "MPParticle"
    }],
    LayerBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e9b95fhnb9A8ppHA5Z65Lh5", "LayerBlock");
        var i = t("OnBoardBlock")
          , a = t("../../modules/Types").OnBlockType
          , n = t("ParticleManager")
          , s = t("Types").BoardParticleType
          , r = t("GameUtil");
        cc.Class({
            extends: i,
            properties: {
                animator: cc.Animation,
                mainIcon: cc.Sprite,
                blockingCount: 1
            },
            preInit: function() {
                this.animator.on("finished", function(t) {
                    "breakLayer2" === t.currentTarget.name && this.endedBreakLayer2()
                }, this),
                this.animQueue = []
            },
            init: function(t) {
                this._super(t)
            },
            reuseBlock: function(t) {
                this._super(t),
                this.mainIcon.node.setScale(1, 1),
                this.mainIcon.spriteFrame = t.specialIcon,
                this.mainIcon.node.active = !0,
                this.currBlockingCnt = this.blockingCount,
                this.currBlockingMaxCnt = this.currBlockingCnt,
                this.savingBlockType = this.blockType
            },
            initBeforeAnimation: function() {
                this.animQueue = [],
                this.isFirstBreakOnce = !1,
                this.isFirstBreakAniOnce = !1,
                this.currAnimCount = 0
            },
            onDisruptBlock: function(t) {
                return !0 === t && (this.isFirstBreakOnce = !0),
                --this.currBlockingCnt,
                1 != this.currBlockingCnt && (0 == this.currBlockingCnt ? (this.savingBlockType = a.NormalBlock,
                this.animQueue.push(a.NormalBlock),
                !1) : (this.currBlockingCnt < 0 && (this.savingBlockType = a.None,
                this.animQueue.push(a.None)),
                !0))
            },
            breakAnimationLayerBlock: function(t, e) {
                if (!0 === t) {
                    if (0 === this.animQueue.length)
                        return this.isFirstBreakAniOnce = !0;
                    if (!0 === this.isFirstBreakAniOnce)
                        return !0;
                    this.isFirstBreakAniOnce = !0
                }
                var o = this.animQueue.shift();
                if (o === a.NormalBlock) {
                    var i = cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                        this.animator.play("breakLayer2")
                    }, this));
                    return this.node.runAction(i),
                    !0
                }
                return a.None,
                !1
            },
            endedBreakLayer2: function() {
                this.mainIcon.node.active = !1,
                n.instance.playBoardParticle(s.Layer2, r.getWorldPosition(this.node), this.shapeId)
            },
            activateBlock: function(t, e, o) {
                this._super(t, e, o),
                this.mainIcon.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../modules/Types": "Types",
        GameUtil: "GameUtil",
        OnBoardBlock: "OnBoardBlock",
        ParticleManager: "ParticleManager",
        Types: "Types"
    }],
    LineBreakAction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "25d331f1fdNtom70jktEufe", "LineBreakAction");
        var i = function() {
            function i(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, o) {
                return e && i(t.prototype, e),
                o && i(t, o),
                t
            }
        }();
        var a = t("./BoardAction").BoardAction
          , n = t("../../../util/GameUtil")
          , k = t("../../../modules/Types")
          , b = k.DestroyBlockState
          , I = k.BoomDir
          , L = k.Direction
          , A = k.BoardParticleType
          , D = t("ParticleManager")
          , s = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return function(t, e) {
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
            }(e, a),
            i(e, [{
                key: "addSourceBlock",
                value: function(t, e, o) {
                    this.sourceBlockList.push(n.createSourceBlockData(t, e, o))
                }
            }, {
                key: "playBoardAction",
                value: function(t, e, o) {
                    this.board = t;
                    var i = this;
                    this.sourceBlockList = [];
                    for (var a = (t = i.board).lastBlockPosIdxList, n = t.horizontalLines, s = t.verticalLines, r = 0, c = 0; c < a.length; ++c) {
                        for (var h = !1, l = a[c], u = 0; u < n.length; ++u)
                            if (a[c].y === n[u] && !0 === t.playDestroyBlockAnimation(l, r)) {
                                for (var p = 0; p < s.length; ++p)
                                    a[c].x === s[p] && (i.addSourceBlock(l.clone(), I.Height, b.First),
                                    h = !0);
                                i.addSourceBlock(l.clone(), I.Width, b.First)
                            }
                        if (1 != h)
                            for (u = 0; u < s.length; ++u)
                                a[c].x === s[u] && !0 === t.playDestroyBlockAnimation(l, r) && i.addSourceBlock(l.clone(), I.Height, b.First)
                    }
                    for (; 0 < i.sourceBlockList.length; ) {
                        var d = i.sourceBlockList[0].destroyBlockState === b.First;
                        if (cc.log("isFirstLineClear: " + d),
                        t.boomAniPosIdxList = [],
                        !0 === d || i.sourceBlockList[0].destroyBlockState === b.Normal)
                            for (c = 0; c < 10; ++c) {
                                for (u = 0; u < i.sourceBlockList.length; ++u) {
                                    (f = i.sourceBlockList[u]).boomDir !== I.Width && f.boomDir !== I.Both || (t.playDestroyBlockAnimation(f.destroyPosIdx.sub(cc.v2(c, 0)), r, f.destroyBlockState, L.Left),
                                    t.playDestroyBlockAnimation(f.destroyPosIdx.add(cc.v2(c, 0)), r, f.destroyBlockState, L.Right)),
                                    f.boomDir !== I.Height && f.boomDir !== I.Both || (t.playDestroyBlockAnimation(f.destroyPosIdx.sub(cc.v2(0, c)), r, f.destroyBlockState, L.Up),
                                    t.playDestroyBlockAnimation(f.destroyPosIdx.add(cc.v2(0, c)), r, f.destroyBlockState, L.Down))
                                }
                                r += .06
                            }
                        else
                            for (c = 0; c < i.sourceBlockList.length; ++c) {
                                var f;
                                switch ((f = i.sourceBlockList[c]).destroyBlockState) {
                                case b.Boom:
                                    for (u = 0; u < 10; ++u)
                                        f.boomDir !== I.Width && f.boomDir !== I.Both || (t.playDestroyBlockAnimation(f.destroyPosIdx.sub(cc.v2(u, 0)), r, f.destroyBlockState, L.Left),
                                        t.playDestroyBlockAnimation(f.destroyPosIdx.add(cc.v2(u, 0)), r, f.destroyBlockState, L.Right)),
                                        f.boomDir !== I.Height && f.boomDir !== I.Both || (t.playDestroyBlockAnimation(f.destroyPosIdx.sub(cc.v2(0, u)), r, f.destroyBlockState, L.Up),
                                        t.playDestroyBlockAnimation(f.destroyPosIdx.add(cc.v2(0, u)), r, f.destroyBlockState, L.Down));
                                    break;
                                case b.BoomRange:
                                    for (var g = cc.v2(f.destroyPosIdx.x - 1, f.destroyPosIdx.y - 1), m = g.clone(), y = 0; y < 3; ++y) {
                                        m.x = g.x;
                                        for (var B = 0; B < 3; ++B)
                                            t.playDestroyBlockAnimation(m, r, f.destroyBlockState),
                                            ++m.x;
                                        ++m.y
                                    }
                                }
                            }
                        i.sourceBlockList = [],
                        0 < t.boomAniPosIdxList.length && (r += .1);
                        for (c = 0; c < t.boomAniPosIdxList.length; ++c) {
                            var S = t.boomAniPosIdxList[c]
                              , C = S.destroyPosIdx
                              , v = t.animationBoard[C.x][C.y];
                            if (i.addSourceBlock(C, S.boomDir, S.destroyBlockState),
                            S.destroyBlockState === b.Boom) {
                                var P = S.boomDir === I.Both ? 2 : 1;
                                for (u = 0; u < P; ++u) {
                                    var T = t.boomLaserInfoList.shift();
                                    D.instance.playBoomLaserParticle(A.BoomLaser, T.destroyWorldPos, T.shapeId, T.boomDir, r)
                                }
                            }
                            t.forceBreakBlockAni(v, C, r)
                        }
                        0 < i.sourceBlockList.length && (r += 1.1)
                    }
                    !0 === e.isWillPlayAbility && (r += 1),
                    setTimeout(function() {
                        i.board.endBoardAnimation(k.BreakBlockAniType.NormalBreak)
                    }, 1e3 * r)
                }
            }]),
            e
        }();
        e.exports = {
            LineBreakAction: s
        },
        cc._RF.pop()
    }
    , {
        "../../../modules/Types": "Types",
        "../../../util/GameUtil": "GameUtil",
        "./BoardAction": "BoardAction",
        ParticleManager: "ParticleManager"
    }],
    MPObject: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ded49uk7wdEEqObiTvCEs+D", "MPObject"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            preInit: function() {},
            init: function() {},
            release: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    MPParticle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "26f8aE7/kpMApcJ89UueXR9", "MPParticle");
        var i = t("MPObject");
        cc.Class({
            extends: i,
            properties: {
                emitters: {
                    type: cc.ParticleSystem,
                    default: []
                },
                newBoom: {
                    type: cc.Node,
                    default: null
                }
            },
            playParticle: function(t) {
                this.node.stopActionByTag(1);
                var e = cc.sequence(cc.delayTime(t), cc.callFunc(function() {
                    for (var t = 0; t < this.emitters.length; ++t)
                        this.emitters[t].enabled = !0,
                        this.emitters[t].resetSystem()
                }, this));
                e.setTag(1),
                this.node.runAction(e)
            },
            stopParticle: function() {
                for (var t = 0; t < this.emitters.length; ++t)
                    this.emitters[t].stopSystem(),
                    this.emitters[t].enabled = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    MPPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2cf405/Df9DZJTi2841jim1", "MPPopup");
        var i = t("MPObject")
          , a = t("Types").PopupType;
        cc.Class({
            extends: i,
            properties: {
                popupType: {
                    type: a,
                    default: a.Pause
                }
            },
            preInit: function(t) {
                this.node.active = !1,
                this.popupManager = t,
                this.showDelay = 0,
                this.isShown = !1
            },
            showPopup: function(t, e) {
                this.showDelay = 0,
                this.node.active = !0,
                this.node.setScale(0);
                var o = cc.sequence(cc.scaleTo(t, 1).easing(cc.easeBackOut()), cc.callFunc(function() {
                    this.isShown = !0
                }, this));
                this.node.runAction(o),
                this.showDelay += t
            },
            hidePopup: function() {
                this.node.active = !1,
                this.isShown = !1
            },
            onPressedCloseButton: function() {
                !1 !== this.isShown && this.popupManager.popHidePopup()
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject",
        Types: "Types"
    }],
    NormalBlockParticle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f52e7867PVP8pZudU1TYG03", "NormalBlockParticle");
        var i = t("MPParticle")
          , a = t("GameUtil");
        cc.Class({
            extends: i,
            properties: {
                randomColorCount: 2
            },
            playParticle: function() {
                for (var t = this.getRandomIdxs(this.emitters.length, this.randomColorCount), e = 0; e < t.length; ++e)
                    this.emitters[t[e]].resetSystem()
            },
            getRandomIdxs: function(t, e) {
                var o = [];
                if (t <= e) {
                    for (var i = 0; i < t; ++i)
                        o.push(i);
                    return o
                }
                for (; o.length < e; )
                    for (i = 0; i < t; ++i) {
                        if (o.length >= e)
                            return o;
                        !0 === (1 === a.randomRange(0, 2)) && !1 === a.isContainInArray(o, i) && o.push(i)
                    }
                return o
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil",
        MPParticle: "MPParticle"
    }],
    NormalBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "85ae13rt6dHirHzPME6Gr9V", "NormalBlock");
        var i = t("OnBoardBlock");
        cc.Class({
            extends: i,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        OnBoardBlock: "OnBoardBlock"
    }],
    OnBoardBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "23614mNRh5Dk4j6Zj8TVP/j", "OnBoardBlock");
        var i = t("Block")
          , n = t("ParticleManager")
          , s = t("Types").BoardParticleType
          , r = t("GameUtil");
        cc.Class({
            extends: i,
            reuseBlock: function(t) {
                this.node.active = !0,
                this.node.opacity = 255,
                this.blockType = t.blockType,
                this.shapeId = t.shapeId,
                this.setBlockColor(t.colorType, !0),
                this.oriColor = t.blockColor,
                this.node.setScale(1, 1)
            },
            unUseBlock: function() {
                this.node.stopAllActions(),
                this.node.active = !1
            },
            unuse: function() {},
            attachToBoard: function(t, e) {
                this.node.parent = t,
                this.node.setPosition(e)
            },
            initBeforeAnimation: function() {},
            breakBlock: function(t, e, o) {
                var i = this
                  , a = cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                    n.instance.playBoardParticle(s.Normal, r.getWorldPosition(i.node), i.shapeId, o)
                }), cc.scaleTo(.08, 1.1), cc.scaleTo(.1, 0), cc.callFunc(function() {
                    t.putBlock(i, i.blockType)
                }));
                this.node.runAction(a)
            },
            startFallAnimation: function(t) {
                var e = cc.sequence(cc.moveBy(r.randomRangeFloat(.1, .2), 30, 0), cc.moveBy(r.randomRangeFloat(.1, .2), -20, 0), cc.moveBy(r.randomRangeFloat(.1, .2), 10, 0), cc.moveBy(r.randomRangeFloat(.1, .2), -20, 0), cc.delayTime(.1), cc.moveBy(r.randomRangeFloat(.2, .5), 0, -600), cc.callFunc(function() {
                    t.putBlock(this, this.blockType)
                }, this));
                this.node.runAction(e)
            },
            deleteSelf: function(t) {
                t.putBlock(this, this.blockType)
            },
            activateBlock: function(t, e, o) {
                var i = t ? oriColor : new cc.Color(180,180,180,255)
                  , a = cc.sequence(cc.delayTime(o), cc.tintTo(e, i));
                this.colorNode.runAction(a)
            }
        }),
        cc._RF.pop()
    }
    , {
        Block: "Block",
        GameUtil: "GameUtil",
        ParticleManager: "ParticleManager",
        Types: "Types"
    }],
    ParticleManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7ccffwk6rRMhp+8ht52afiH", "ParticleManager");
        var i = cc.Class({
            statics: {
                instance: null
            },
            preInit: function(t, e) {
                this.boardParticlePool = t,
                this.eatingParticle = e
            },
            playBoardParticle: function(t, e, o, i) {
                this.boardParticlePool.playBoardParticle(t, e, o, i)
            },
            playBoomLaserParticle: function(t, e, o, i, a) {
                this.boardParticlePool.playBoardParticle(t, e, o, i, a)
            },
            playCharEatingParticle: function(t) {
                this.eatingParticle.playParticle(t)
            }
        });
        i.instance = new i,
        e.exports = i,
        cc._RF.pop()
    }
    , {}],
    PausePopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "08c28dxvsJAcJd4NIIpmgv6", "PausePopup");
        var i = t("MPPopup")
          , a = t("Ingame")
          , n = t("DataManager").DataManager
          , s = t("Types").DataType
          , r = t("SoundManager")
          , c = t("AdManager").AdManager;
        cc.Class({
            extends: i,
            properties: {
                soundToggle: cc.Toggle,
                musicToggle: cc.Toggle
            },
            preInit: function(t) {
                this._super(t),
                this.userData = n.instance.getData(s.UserData)
            },
            init: function() {},
            showPopup: function(t, e) {
                this._super(t, e),
                this.soundToggle.isChecked = !this.userData.sfxOn,
                this.musicToggle.isChecked = !this.userData.bgmOn
            },
            onPressedPausePopupButton: function(t, e) {
                if (!1 !== this.isShown)
                    switch (e) {
                    case "GoHome":
                        cc.director.loadScene("Home", function() {});
                        break;
                    case "Resume":
                        this.popupManager.popHidePopup();
                        break;
                    case "Restart":
                        c.instance.showInterstitial(function() {
                            !0 === a.instance.fsm.is("Solving") && a.instance.fsm.PauseRestart()
                        })
                    }
            },
            onChangedSFXToggle: function(t) {
                var e = !t.isChecked;
                r.instance.setSFXSound(e)
            },
            onChangedBGMToggle: function(t) {
                var e = !t.isChecked;
                r.instance.setBGMSound(e)
            }
        }),
        cc._RF.pop()
    }
    , {
        AdManager: "AdManager",
        DataManager: "DataManager",
        Ingame: "Ingame",
        MPPopup: "MPPopup",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    PopupManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "37860ZtxM9Mva5gK6BnTRcM", "PopupManager");
        var i = t("MPObject")
          , a = t("../base/MPPopup")
          , n = t("Types").PopupType;
        cc.Class({
            extends: i,
            properties: {
                popups: {
                    type: a,
                    default: []
                },
                dimmingPrefab: {
                    type: cc.Prefab,
                    default: null
                }
            },
            preInit: function() {
                this.popupDic = [],
                this.dimmingNodeList = [],
                this.popupStack = [],
                this.dimmingStack = [],
                this.isTransition = !1,
                this.shapePool = null;
                for (var t = 0; t < this.popups.length; ++t) {
                    var e = this.popups[t];
                    (this.popupDic[e.popupType] = e).popupType === n.Shop && (this.popupDic[n.CoinLack] = this.popupDic[e.popupType]),
                    e.getComponent("MPPopup").preInit(this);
                    var o = cc.instantiate(this.dimmingPrefab);
                    o.active = !1,
                    o.parent = this.node,
                    o.opacity = 0,
                    this.dimmingNodeList.push(o)
                }
                this.childCount = this.node.childrenCount
            },
            showPopup: function(t, e) {},
            popHidePopup: function() {
                if (!(this.popupStack.length <= 0) && !0 !== this.isTransition) {
                    this.popHideDimming();
                    var t = this.popupStack.pop();
                    this.popupDic[t].hidePopup()
                }
            },
            showDimming: function() {
                var t = this.dimmingNodeList.pop();
                t.active = !0,
                t.opacity = 128,
                this.setLastSibling(t),
                this.dimmingStack.push(t)
            },
            popHideDimming: function() {
                var t = this.dimmingStack.pop();
                t.opacity = 0,
                t.active = !1,
                this.dimmingNodeList.push(t)
            },
            onPressedBackKey: function() {},
            isInPopupDic: function(t) {
                return void 0 !== this.popupDic[t]
            },
            isOverlapPopup: function(t) {
                for (var e = 0; e < this.popupStack.length; ++e) {
                    if (this.popupStack[e] === t)
                        return !0;
                    if (this.popupStack[e] === n.Shop && t === n.CoinLack)
                        return cc.log("shop and coin lack is same!"),
                        !0
                }
                return !1
            },
            setLastSibling: function(t) {
                t.setSiblingIndex(this.childCount - 1)
            }
        }),
        cc._RF.pop()
    }
    , {
        "../base/MPPopup": "MPPopup",
        MPObject: "MPObject",
        Types: "Types"
    }],
    PrototypeUtil: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "800f8dt0KBPTpVO33wQYMPc", "PrototypeUtil"),
        Number.prototype.clamp = function(t, e) {
            return Math.min(Math.max(this, t), e)
        }
        ,
        Array.prototype.isInclude = function(t) {
            for (var e = 0; e < this.length; ++e)
                if (this[e] === t)
                    return !0;
            return !1
        }
        ,
        cc._RF.pop()
    }
    , {}],
    ResultPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8182dLjO4tHVZzcX5JF5hhW", "ResultPopup");
        var i = t("MPPopup")
          , a = t("Ingame")
          , n = t("UpdateValueLabel")
          , s = t("DataManager").DataManager
          , r = t("MPParticle")
          , c = t("SoundManager")
          , h = t("AdManager").AdManager
          , l = t("Types")
          , u = l.SoundType
          , p = l.DataType;
        cc.Class({
            extends: i,
            properties: {
                scoreNameText: cc.Label,
                scoreText: n,
                crownNode: cc.Node,
                flowerParticle: {
                    default: null,
                    type: r
                }
            },
            preInit: function(t) {
                this._super(t),
                this.scoreText.preInit()
            },
            init: function() {},
            showPopup: function(t, e) {
                this._super(t, e),
                c.instance.playSFX(u.ScoreText);
                var o = void 0 !== e && e.isBestScore
                  , i = e.score;
                this.scoreNameText.textKey = o ? "highScore" : "score",
                this.crownNode.active = o,
                this.scoreText.string = 0;
                var a = cc.sequence(cc.delayTime(t), cc.callFunc(function() {
                    this.scoreText.playUpdateValue(0, i, .4),
                    !0 === o && (c.instance.playSFX(u.GameOverHighScore),
                    this.flowerParticle.playParticle())
                }, this));
                a.setTag(1),
                this.node.runAction(a)
            },
            hidePopup: function() {
                this._super(),
                this.node.stopActionByTag(1),
                this.flowerParticle.stopParticle()
            },
            onPressedHome: function() {
                !1 !== this.isShown && h.instance.showInterstitial(function() {
                    s.instance.resetData(p.GameData),
                    cc.director.loadScene("Home", function() {})
                })
            },
            onPressedRetry: function() {
                !1 !== this.isShown && h.instance.showInterstitial(function() {
                    a.instance.fsm.EndGameRestart()
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        AdManager: "AdManager",
        DataManager: "DataManager",
        Ingame: "Ingame",
        MPParticle: "MPParticle",
        MPPopup: "MPPopup",
        SoundManager: "SoundManager",
        Types: "Types",
        UpdateValueLabel: "UpdateValueLabel"
    }],
    ReviveBreakAction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3f92554re5NmL+hDbQFqqqu", "ReviveBreakAction");
        var i = function() {
            function i(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, o) {
                return e && i(t.prototype, e),
                o && i(t, o),
                t
            }
        }();
        var a = t("./BoardAction").BoardAction
          , n = (t("GameUtil"),
        t("../../../modules/Types").BreakBlockAniType)
          , s = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return function(t, e) {
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
            }(e, a),
            i(e, [{
                key: "playBoardAction",
                value: function(t, e, o) {
                    t.lastBlockPosIdxList;
                    for (var i = 0; i < t.lastBlockPosIdxList.length; ++i) {
                        var a = t.lastBlockPosIdxList[i];
                        if (null !== t.animationBoard[a.x][a.y])
                            t.animationBoard[a.x][a.y].startFallAnimation(o)
                    }
                    setTimeout(function() {
                        t.endBoardAnimation(n.ReviveBreak)
                    }, 1300)
                }
            }]),
            e
        }();
        e.exports = {
            ReviveBreakAction: s
        },
        cc._RF.pop()
    }
    , {
        "../../../modules/Types": "Types",
        "./BoardAction": "BoardAction",
        GameUtil: "GameUtil"
    }],
    RichTextLocalized: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e8203pF/kRHqJc83pZg0CYV", "RichTextLocalized");
        var i = t("i18n");
        cc.Class({
            extends: cc.RichText,
            properties: {
                textKey: {
                    default: "TEXT_KEY",
                    multiline: !0,
                    tooltip: "Enter i18n key here",
                    notify: function() {
                        this._updateRichTextStatus()
                    }
                },
                string: {
                    override: !0,
                    tooltip: "Here shows the localized string of Text Key",
                    get: function() {
                        return i.t(this.textKey)
                    },
                    set: function(t) {
                        this.textKey = t,
                        cc.warn("Please set label text key in Text Key property.")
                    }
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        i18n: "i18n"
    }],
    SafeAreaSetter: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4f278GHEkdPk69XyUflZd/8", "SafeAreaSetter");
        var i = t("GameUtil");
        cc.Class({
            extends: cc.Component,
            editor: {
                executionOrder: -1
            },
            properties: {
                isTopStretch: !1,
                isBottomStretch: !1,
                isRightStrech: !1,
                editVal: 94
            },
            onLoad: function() {
                if (!0 === i.isIphoneX()) {
                    var t = this.getComponent(cc.Widget);
                    if (null !== t)
                        !0 === this.isTopStretch && !0 === t.isAlignTop && (t.top += this.editVal),
                        !0 === this.isBottomStretch && !0 === t.isAlignBottom && (t.bottom += this.editVal),
                        t.updateAlignment();
                    else {
                        var e = this.node.getPositionY();
                        !0 === this.isTopStretch && (e -= this.editVal),
                        !0 === this.isBottomStretch && (e += this.editVal),
                        this.node.setPositionY(e)
                    }
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        GameUtil: "GameUtil"
    }],
    SettingPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "52660OeeKhCVq2GCjJEVKuX", "SettingPopup");
        var i = t("MPPopup")
          , a = t("DataManager").DataManager
          , n = t("Types").DataType
          , s = t("SoundManager");
        cc.Class({
            extends: i,
            properties: {
                soundToggle: cc.Toggle,
                musicToggle: cc.Toggle
            },
            preInit: function(t) {
                this._super(t),
                this.userData = a.instance.getData(n.UserData)
            },
            showPopup: function(t, e) {
                this._super(t, e),
                this.soundToggle.isChecked = !this.userData.sfxOn,
                this.musicToggle.isChecked = !this.userData.bgmOn
            },
            onChangedSFXToggle: function(t) {
                var e = !t.isChecked;
                s.instance.setSFXSound(e)
            },
            onChangedBGMToggle: function(t) {
                var e = !t.isChecked;
                s.instance.setBGMSound(e)
            }
        }),
        cc._RF.pop()
    }
    , {
        DataManager: "DataManager",
        MPPopup: "MPPopup",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    ShapeConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "72fb3KfuNpFH7gw93a7l8Mm", "ShapeConfig");
        var i = [{
            arr: [[1]],
            shapeId: 0,
            frequency: 1,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 1,
            shapeColor: cc.color("#FF8431"),
            layer2Particle: cc.color("#CE5300")
        }, {
            arr: [[1, 1]],
            shapeId: 1,
            frequency: 1.25,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 4,
            shapeColor: cc.color("#7691CE"),
            layer2Particle: cc.color("#3C73B5")
        }, {
            arr: [[1, 1, 1]],
            shapeId: 2,
            frequency: 2.5,
            rotateCnt: 4,
            requireLine: 0,
            colorType: 4,
            shapeColor: cc.color("#C26CC4"),
            layer2Particle: cc.color("#AF45AF")
        }, {
            arr: [[1, 1, 1, 1]],
            shapeId: 3,
            frequency: 1.5,
            rotateCnt: 4,
            requireLine: 0,
            colorType: 0,
            shapeColor: cc.color("#C2D346"),
            layer2Particle: cc.color("#5F8E35")
        }, {
            arr: [[1], [1]],
            shapeId: 4,
            frequency: 1.92,
            rotateCnt: 4,
            requireLine: 0,
            colorType: 3,
            shapeColor: cc.color("#F7B42F"),
            layer2Particle: cc.color("#E88F00")
        }, {
            arr: [[1], [1], [1]],
            shapeId: 5,
            frequency: .4,
            rotateCnt: 4,
            requireLine: 0,
            colorType: 4,
            shapeColor: cc.color("#8D50B5"),
            layer2Particle: cc.color("#663199")
        }, {
            arr: [[1], [1], [1], [1]],
            shapeId: 6,
            frequency: .5,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 0,
            shapeColor: cc.color("#F27466"),
            layer2Particle: cc.color("#E24C49")
        }, {
            arr: [[1, 1], [1, 1]],
            shapeId: 7,
            frequency: .75,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 3,
            shapeColor: cc.color("#ED8395"),
            layer2Particle: cc.color("#CE5276")
        }, {
            arr: [[1, 1], [1, 0]],
            shapeId: 8,
            frequency: 1.5,
            rotateCnt: 1,
            requireLine: 0,
            colorType: 1,
            shapeColor: cc.color("#46C3E0"),
            layer2Particle: cc.color("#2596A5")
        }, {
            arr: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
            shapeId: 9,
            frequency: .65,
            rotateCnt: 1,
            requireLine: 0,
            colorType: 2,
            shapeColor: cc.color("#5265B2"),
            layer2Particle: cc.color("#395099")
        }, {
            arr: [[0, 1, 0], [1, 1, 1]],
            shapeId: 10,
            frequency: .4,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 4,
            shapeColor: cc.color("#D84444"),
            layer2Particle: cc.color("#CC3A3A")
        }, {
            arr: [[1, 0, 0], [1, 1, 1]],
            shapeId: 11,
            frequency: .7,
            rotateCnt: 1,
            requireLine: 0,
            colorType: 3,
            shapeColor: cc.color("#966544"),
            layer2Particle: cc.color("#8C4F25")
        }, {
            arr: [[0, 1, 1], [1, 1, 0]],
            shapeId: 12,
            frequency: .18,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 2,
            shapeColor: cc.color("#66CCCA"),
            layer2Particle: cc.color("#2FA39B")
        }, {
            arr: [[1, 1, 1], [0, 0, 1], [0, 0, 1]],
            shapeId: 13,
            frequency: .18,
            rotateCnt: 2,
            requireLine: 0,
            colorType: 0,
            shapeColor: cc.color("#FF8431"),
            layer2Particle: cc.color("#CE5300")
        }];
        e.exports = {
            shapeArray: i
        },
        cc._RF.pop()
    }
    , {}],
    ShapePool: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4e6f7zG0OdPYbfcs+yi/E9e", "ShapePool");
        var n = t("ShapeConfig").shapeArray
          , i = t("MPObject")
          , s = (t("Shape"),
        t("../../util/GameUtil"))
          , a = t("BlockDynamicPool")
          , r = t("../../modules/Types")
          , c = r.OnBlockType
          , h = r.GetShapeType
          , l = t("../../config/GameConfig").gameConfig
          , u = t("DataSet");
        cc.Class({
            extends: i,
            properties: {
                shapePrefab: cc.Prefab,
                blockCount: 2,
                blockPool: {
                    default: null,
                    type: a
                },
                shapePosNodeList: {
                    default: [],
                    type: cc.Node
                }
            },
            preInit: function(t, e) {
                this.ingame = t,
                this.gameBoard = e,
                this.preInitShapePool(),
                this.usnigItemShapeAction = 99
            },
            preInitShapePool: function() {
                this.preInitPool(),
                this.shapeStartPos = new cc.Vec2(s.getDivideStartPos(170, 50, this.blockCount),0,!0),
                this.widthAndMargin = 220,
                this.shapeList = [],
                this.canUseShapeList = [],
                this.canLandShapeList = [],
                this.overlapShapeDataList = []
            },
            preInitPool: function() {
                this.shapePool = new cc.NodePool("Shape");
                for (var t = 0; t < this.blockCount + 2; ++t) {
                    var e = cc.instantiate(this.shapePrefab);
                    e.getComponent("Shape").preInit(this, this.gameBoard, this.ingame),
                    this.shapePool.put(e)
                }
            },
            init: function(t) {
                this.isUsingItem = !1;
                var e = this.shapeStartPos.clone()
                  , o = t.currShapeDataList;
                if (null == o && (o = []),
                0 < o.length)
                    for (var i = 0; i < o.length; ++i)
                        this.showAndAddShape_save(e.clone(), o[i]),
                        e.x += this.widthAndMargin;
                else
                    this.overlapShapeDataList = t.overlapShapeDataList,
                    this.reloadShape()
            },
            initForTutorial: function(t, e) {
                this.tutorial = e;
                for (var o = this.shapeList.length - 1; 0 <= o; --o)
                    this.returnShape(this.shapeList[o], !1, !0);
                var i = this.shapeStartPos.clone();
                for (o = 0; o < t.length; ++o)
                    this.showAndAddShape(i.clone(), h.Specific, t[o], 0, !0),
                    i.x += this.widthAndMargin
            },
            release: function() {
                for (var t = 0; t < this.shapeList.length; ++t) {
                    for (var e = this.shapeList[t], o = this.shapeList[t].blockRefArr, i = 0; i < o.length; ++i)
                        this.blockPool.putBlock(o[i], o[i].blockType);
                    e.isEnable = !1,
                    this.shapePool.put(e.node)
                }
                this.shapeList = []
            },
            reloadShape: function() {
                if (!(0 < this.shapeList.length)) {
                    for (var t = this.shapeStartPos.clone(), e = 0; e < this.blockCount; ++e) {
                        this.showAndAddShape(t.clone(), h.Random);
                        t.x += this.widthAndMargin
                    }
                    this.overlapShapeDataList = []
                }
            },
            returnShape: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                e.isEnable = !1;
                var i = e.node.getPosition()
                  , a = e.shapeId
                  , n = e.blockRefArr;
                if (this.shapePool.put(e.node),
                this.shapeList = this.shapeList.filter(function(t) {
                    return t !== e
                }),
                1 == t) {
                    for (var s = 0; s < n.length; ++s)
                        this.blockPool.putBlock(n[s], n[s].blockType);
                    this.showAndAddShape(i, h.CanLand, a)
                } else {
                    if (!0 === o) {
                        for (s = 0; s < n.length; ++s)
                            this.blockPool.putBlock(n[s], n[s].blockType);
                        return
                    }
                    this.overlapShapeDataList.push(e.shapeId),
                    this.shapeList.length <= 0 && this.reloadShape()
                }
            },
            showAndAddShape: function(t, e) {
                2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                var o, i, a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : -1, n = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
                return o = this.getRandomShapeDataByFrequency(),
                i = this.getBlocksByShape(o.arr, o.shapeId),
                -1 === a && (a = s.randomRange(0, o.rotateCnt)),
                this.initShapePrefab(t, o.arr, a, o.shapeId, i, o.colorType, n),
                o.shapeId
            },
            showAndAddShape_save: function(t, e) {
                var o = n[e.shapeId]
                  , i = this.getBlocksByShape(o.arr, e.shapeId, e.blockTypeArr);
                return this.initShapePrefab(t, o.arr, 0, o.shapeId, i, o.colorType, !1),
                o.shapeId
            },
            initShapePrefab: function(t, e, o, i, a, n, s) {
                var r = this.shapePool.get(e, o, i, a, t, n, s);
                r.colorType = n,
                r.parent = this.node;
                var c = r.getComponent("Shape");
                c.showShape(t),
                this.shapeList.push(c)
            },
            getRandomShapeDataByFrequency: function() {
                for (var t = !1, e = 0; !1 === t; ) {
                    for (var o = s.randomRangeFloat(0, this.canUseShapeFrequency), i = 0, a = 0; a < this.canUseShapeList.length; ++a)
                        if (o <= (i += this.canUseShapeList[a].frequency)) {
                            e = this.canUseShapeList[a].shapeId;
                            break
                        }
                    t = !0;
                    for (a = 0; a < this.overlapShapeDataList.length; ++a)
                        if (!0 === l.overlapIgnoreBlockIds.isInclude(this.overlapShapeDataList[a]) && e === this.overlapShapeDataList[a]) {
                            t = !1;
                            break
                        }
                    for (a = 0; a < this.shapeList.length; ++a)
                        if (!0 === l.overlapIgnoreBlockIds.isInclude(this.shapeList[a].shapeId) && e === this.shapeList[a].shapeId) {
                            t = !1;
                            break
                        }
                }
                return n[e]
            },
            getShapeDataFromBoard: function(t, e) {
                if (!0 !== e) {
                    if (this.canLandShapeList.length <= 0)
                        return null;
                    for (var o = this.canLandShapeList.slice(0), i = o.length - 1; 0 <= i; --i)
                        if (o[i].shapeId !== t)
                            for (var a = 0; a < this.shapeList.count; ++a)
                                o[i].shapeId !== this.shapeList[a].shapeId || (o = o.filter(function(t) {
                                    return t !== o[i]
                                }));
                        else
                            o = o.filter(function(t) {
                                return t !== o[i]
                            });
                    return 0 === o.length ? 0 < shapeList.length ? n[shapeList[0].shapeId] : n[t] : o[s.randomRange(0, o.length)]
                }
            },
            getBlocksByShape: function(t, e) {
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                for (var o = 0, i = [], a = 0; a < t.length; ++a)
                    for (var n = t[a], s = 0; s < n.length; ++s)
                        1 == n[s] && ++o;
                for (var a = 0; a < o; ++a)
                    i.push(this.blockPool.getBlock(c.NormalBlock, e));
                return i
            },
            disableAllBlock: function() {
                for (var t = 0; t < this.shapeList.length; ++t)
                    this.shapeList[t].setActivateBlocks(!1)
            },
            allCancelShpaes: function() {
                for (var t = 0; t < this.shapeList.length; ++t)
                    this.shapeList[t].cancelShape();
                this.gameBoard.clearBoardColor()
            },
            startUsingItem: function(t) {
                this.isUsingItem = !0;
                for (var e = 0; e < this.shapeList.length; ++e) {
                    var o = this.shapeList[e].curOriScale
                      , i = cc.repeatForever(cc.sequence(cc.scaleTo(.4, o - .2), cc.scaleTo(.4, o))).easing(cc.easeSineInOut());
                    i.setTag(this.usnigItemShapeAction),
                    this.shapeList[e].node.runAction(i),
                    this.shapeList[e].curUsingItem = t
                }
            },
            stopUsingItem: function() {
                if (!1 !== this.isUsingItem) {
                    this.isUsingItem = !1;
                    for (var t = 0; t < this.shapeList.length; ++t) {
                        var e = this.shapeList[t];
                        e.node.stopActionByTag(this.usnigItemShapeAction),
                        e.node.setScale(e.curOriScale)
                    }
                }
            },
            updateCanUseShapeList: function(t) {
                this.canUseShapeList = [];
                for (var e = this.canUseShapeFrequency = 0; e < n.length; ++e) {
                    var o = n[e];
                    t >= o.requireLine && (this.canUseShapeFrequency += o.frequency,
                    this.canUseShapeList.push(o))
                }
            },
            updateCanLandShapeList: function() {
                this.canLandShapeList = [];
                for (var t = 0; t < this.canUseShapeList.length; ++t) {
                    var e = this.canUseShapeList[t];
                    if (!1 !== this.gameBoard.isOverlapedShape(e.arr, e.rotateCnt)) {
                        for (var o = !1, i = 0; i < l.changeIgnoreBlockIDs.length; ++i)
                            if (l.changeIgnoreBlockIDs[i] === e.shapeId) {
                                o = !0;
                                break
                            }
                        !0 !== o && this.canLandShapeList.push(e)
                    }
                }
            },
            setShapeControlTypes: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1;
                if (-1 !== e)
                    this.shapeList[e].shapeControlType = t;
                else
                    for (var o = 0; o < this.shapeList.length; ++o)
                        this.shapeList[o].shapeControlType = t
            },
            addTutoRotateCnt: function() {
                void 0 !== this.tutorial && null !== this.tutorial && ++this.tutorial.currTutoRotateCnt
            },
            getCurrShapeDataList: function() {
                for (var t = [], e = 0; e < this.shapeList.length; ++e) {
                    var o = this.shapeList[e]
                      , i = new u.SaveShapeData;
                    i.shapeId = o.shapeId;
                    for (var a = 0; a < o.blockRefArr.length; ++a) {
                        var n = o.blockRefArr[a].blockType;
                        i.blockTypeArr.push(n)
                    }
                    t.push(i)
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/GameConfig": "GameConfig",
        "../../modules/Types": "Types",
        "../../util/GameUtil": "GameUtil",
        BlockDynamicPool: "BlockDynamicPool",
        DataSet: "DataSet",
        MPObject: "MPObject",
        Shape: "Shape",
        ShapeConfig: "ShapeConfig"
    }],
    ShapeUnlockPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "05b76LuVltPKLk4osLyGVBu", "ShapeUnlockPopup");
        var i = t("MPPopup")
          , n = t("SoundManager")
          , a = t("Ingame")
          , s = t("MPParticle")
          , r = t("ShapePool")
          , c = t("ShapeConfig").shapeArray
          , h = t("Shape")
          , l = t("Types").SoundType;
        cc.Class({
            extends: i,
            properties: {
                shapePool: r,
                particle_L: s,
                particle_R: s,
                showShape: h
            },
            preInit: function(t) {
                this._super(t),
                this.showShape.preInit(this.shapePool, null, a.instance)
            },
            showPopup: function(t, e) {
                this._super(t, e),
                n.instance.playSFX(l.BuyCharacter);
                var o = void 0 === e ? 0 : e.unlockShapeIdx
                  , i = c[o];
                this.blocks = this.shapePool.getBlocksByShape(i.arr, i.shapeId, null, !0),
                this.showShape.reuse(i.arr, 0, i.shapeId, this.blocks, cc.v2(0, 0), i.shapeColor, !1),
                this.particle_L.playParticle(),
                this.particle_R.playParticle();
                var a = cc.sequence(cc.delayTime(t + 5), cc.callFunc(function() {
                    this.popupManager.popHidePopup()
                }, this));
                a.setTag("AutoDestroy"),
                this.node.runAction(a)
            },
            hidePopup: function() {
                this._super(),
                this.node.stopActionByTag("AutoDestroy");
                for (var t = a.instance.blockDynamicPool, e = 0; e < this.blocks.length; ++e)
                    t.putBlock(this.blocks[e], this.blocks[e].blockType)
            }
        }),
        cc._RF.pop()
    }
    , {
        Ingame: "Ingame",
        MPParticle: "MPParticle",
        MPPopup: "MPPopup",
        Shape: "Shape",
        ShapeConfig: "ShapeConfig",
        ShapePool: "ShapePool",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    Shape: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f5b7bGobFZFroFKeijUyFu3", "Shape");
        var i = t("MPObject")
          , l = t("../../util/GameUtil")
          , c = t("../../config/GameConfig").gameConfig
          , h = t("../../modules/Types").ShapeControlType
          , a = t("SoundManager")
          , n = t("Types").SoundType;
        cc.Class({
            extends: i,
            properties: {},
            preInit: function(t, e, o) {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onShapeButtonDown, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onShapeButtonPressing, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onShapeButtonUp, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onShapeButtonUp, this),
                this.ingame = o,
                this.shapePool = t,
                this.shapeId = 0,
                this.shapeArr = [],
                this.shapeBlocks = [],
                this.blockSize = c.blockSize,
                this.shapeMargin = 2,
                this.gameBoard = e,
                this.oriScale = this.node.getScale(),
                this.fingerShowHeight = 0,
                this.fingerMargin = 1,
                this.endAngle = 0,
                this.rotIdx = 0
            },
            reuse: function(t, e, o, i, a, n, s) {
                this.shapeId = o,
                this.shapeArr = l.copy2DArray(t),
                this.shapeColor = n,
                this.colorType = n || 0,
                this.node.rotation = 0,
                this.endAngle = 0,
                this.originalPos = a.clone(),
                this.curUsingItem = null,
                this.blockRefArr = [],
                this.isShowing = !0,
                this.shapeControlType = h.Free,
                this.isTuto = s,
                this.acceptShape(i, e)
            },
            unuse: function() {
                this.shapeControlType = h.AllDisable,
                this.blockRefArr = null,
                this.curUsingItem = null,
                this.completeRotateShape(),
                this.shapeBlocks = null
            },
            acceptShape: function(t, e) {
                this.shapeSize = new cc.Size(this.shapeArr[0].length,this.shapeArr.length);
                var o = this.shapeSize;
                this.curOriScale = this.oriScale,
                4 <= o.width || 4 <= o.height ? this.curOriScale = .4 : this.curOriScale = .5,
                this.node.setScale(this.curOriScale);
                var i = new cc.Vec2(l.getDivideStartPos(this.blockSize, this.shapeMargin, o.width, !0),l.getDivideStartPos(this.blockSize, this.shapeMargin, o.height, !1))
                  , a = i.clone();
                this.blockSizeAndMargin = this.blockSize + this.shapeMargin;
                var n = 0;
                this.shapeBlocks = l.create2DArray(o.width, o.height),
                this.fingerShowHeight = this.getFingerShowHeight();
                for (var s = 0; s < this.shapeArr.length; ++s) {
                    var r = this.shapeArr[s];
                    a.x = i.x;
                    for (var c = 0; c < r.length; ++c) {
                        if (1 === this.shapeArr[s][c]) {
                            var h = t[n++];
                            h.node.parent = this.node,
                            h.node.setPosition(a),
                            this.blockRefArr.push(h),
                            this.shapeBlocks[c][s] = h
                        }
                        a.x += this.blockSizeAndMargin
                    }
                    a.y -= this.blockSizeAndMargin
                }
            },
            showShape: function(t) {
                this.node.stopActionByTag("ShapeSpawn"),
                this.node.setPosition(cc.v2(500, 0));
                var e = cc.sequence(cc.moveTo(.4, cc.v2(t)), cc.callFunc(function() {
                    this.isShowing = !1
                }, this));
                e.setTag("ShapeSpawn"),
                this.node.runAction(e).easing(cc.easeQuarticActionOut())
            },
            rotateShape: function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                if (this.shapeBlocks = l.rotateToRightArray(this.shapeBlocks),
                this.shapeArr = l.rotateToRightArray(this.shapeArr),
                this.shapeSize = new cc.Size(this.shapeBlocks.length,this.shapeBlocks[0].length),
                this.fingerShowHeight = this.getFingerShowHeight(),
                !0 === t) {
                    a.instance.playSFX(n.ShapeRotate),
                    this.completeRotateShape(),
                    this.endAngle = this.node.rotation + 90;
                    var e = cc.rotateTo(.3, this.endAngle);
                    e.easing(cc.easeQuadraticActionOut()),
                    e.setTag("Rotate"),
                    this.node.runAction(e)
                } else
                    this.endAngle = this.node.rotation + 90,
                    this.node.rotation = this.endAngle
            },
            completeRotateShape: function() {
                this.node.stopActionByTag("Rotate"),
                360 === this.endAngle && (this.endAngle = 0),
                this.node.rotation = this.endAngle
            },
            onShapeButtonDown: function(t) {
                this.shapeControlType !== h.AllDisable && !0 !== this.isShowing && (!0 !== this.shapePool.isUsingItem ? (this.gameBoard.isExceptionBlock = !0,
                this.startPos = t.getLocation(),
                this.isDragging = !1) : null !== this.curUsingItem && this.curUsingItem.onClickShape(this))
            },
            onShapeButtonPressing: function(t) {
                if (this.gameBoard.clearBoardColor(),
                this.shapeControlType !== h.AllDisable && this.shapeControlType !== h.NoDrag && !0 !== this.isShowing) {
                    var e = t.getLocation();
                    if (0 == this.isDragging) {
                        if (l.getDistanceTwoDotsMagSqr(this.startPos, e) < c.shapeDragThreshold)
                            return;
                        this.node.setScale(.9)
                    }
                    this.completeRotateShape(),
                    this.isDragging = !0;
                    var o = cc.director.getVisibleSize()
                      , i = cc.v2(o.width / 2, o.height / 2)
                      , a = this.node.parent.parent.getPosition()
                      , n = this.node.parent.getPosition()
                      , s = new cc.Vec2(0,-this.fingerShowHeight);
                    i = new cc.Vec2(i.x + a.x,i.y + a.y),
                    i = new cc.Vec2(i.x + n.x,i.y + n.y),
                    i = new cc.Vec2(i.x + s.x,i.y + s.y);
                    var r = new cc.Vec2(e.x - i.x,e.y - i.y);
                    this.node.setPosition(r),
                    this.gameBoard.updateShape(this)
                }
            },
            onShapeButtonUp: function(t) {
                if (this.shapeControlType !== h.AllDisable && !0 !== this.isShowing) {
                    if (this.node.setScale(this.curOriScale),
                    1 == this.gameBoard.checkInBoard(this)) {
                        if (this.shapeControlType === h.NoLand)
                            return;
                        var e = this.gameBoard.attachShapeInBoard(this);
                        this.shapePool.returnShape(this),
                        this.gameBoard.checkBoardFullLines(e),
                        this.ingame.onLandShape()
                    } else if (this.gameBoard.resetBlockColor(),
                    !0 === this.isDragging)
                        this.node.setPosition(this.originalPos);
                    else if (this.shapeControlType === h.NoRotate)
                        return;
                    this.isDragging = !1
                }
            },
            getFingerShowHeight: function() {
                return 100 * this.fingerMargin + this.blockSizeAndMargin * this.shapeSize.height * .57
            },
            setActivateBlocks: function(t) {
                for (var e = 0, o = 0; o < this.shapeSize.height; ++o) {
                    for (var i = 0; i < this.shapeSize.width; ++i)
                        void 0 !== this.shapeBlocks[i][o] && this.shapeBlocks[i][o].activateBlock(t, .2, e);
                    e += .05
                }
            },
            cancelShape: function() {
                this.completeRotateShape(),
                this.isDragging = !1,
                this.node.setPosition(this.originalPos),
                this.node.setScale(this.curOriScale)
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../config/GameConfig": "GameConfig",
        "../../modules/Types": "Types",
        "../../util/GameUtil": "GameUtil",
        MPObject: "MPObject",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    ShopCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "34813biecdEbZCeVxLGuSiL", "ShopCell");
        var i = t("MPObject")
          , a = t("LabelLocalized")
          , n = t("DataManager").DataManager;
        t("SoundManager"),
        t("Types");
        cc.Class({
            extends: i,
            properties: {
                productLabel: a,
                buyButtonLabel: cc.Label
            },
            preInit: function() {
                this.dataManager = n.instance
            },
            init: function() {},
            release: function() {},
            updateProduct: function() {},
            onPressedCellButton: function() {}
        }),
        cc._RF.pop()
    }
    , {
        DataManager: "DataManager",
        LabelLocalized: "LabelLocalized",
        MPObject: "MPObject",
        SoundManager: "SoundManager",
        Types: "Types"
    }],
    ShopPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aa985pqyjRMj4zlE4ErfreQ", "ShopPopup");
        var i = t("MPPopup")
          , s = t("CommonConfig").commonConfig
          , a = t("Ingame")
          , n = t("Types")
          , r = (n.PopupType,
        n.DataType)
          , c = t("LabelLocalized")
          , h = t("GoodsArea")
          , l = t("GoodsStatusBar")
          , u = t("DataManager").DataManager
          , p = t("BillingManager").BillingManager;
        cc.Class({
            extends: i,
            properties: {
                titleLabel: c,
                cellParentNode: cc.Node,
                adCellPrefab: cc.Prefab,
                starCellPrefab: cc.Prefab,
                coinCellPrefab: cc.Prefab,
                coinArea: h,
                starArea: h,
                startY: 320
            },
            preInit: function(t) {
                this._super(t),
                this.spawnY = this.startY,
                null !== this.coinArea && l.instance.setCoinArea(this.coinArea),
                null !== this.starArea && l.instance.setStarArea(this.starArea),
                this.adCell = this.createCell(this.adCellPrefab),
                this.adCell.preInit(s.adReward),
                this.coinCellList = [];
                for (var e = p.instance.getProductIdsByKeyword("coin"), o = 0; o < s.coins.length; ++o) {
                    var i = this.createCell(this.coinCellPrefab);
                    i.preInit(s.coins[o], s.coinPrices[o], e[o]),
                    this.coinCellList.push(i)
                }
                this.starCellList = [];
                var a = p.instance.getProductIdsByKeyword("star");
                for (o = 0; o < s.stars.length; ++o) {
                    var n = this.createCell(this.starCellPrefab);
                    n.preInit(s.stars[o], s.starPrices[o], a[o]),
                    this.starCellList.push(n)
                }
            },
            showPopup: function(t, e) {
                this._super(t, e),
                void 0 === e && (e = {
                    isLack: !1
                }),
                e.isLack = void 0 !== e.isLack && e.isLack,
                this.titleLabel.textKey = !0 === e.isLack ? "lackCoinTitle" : "storeTitle",
                null !== this.coinArea && this.scheduleOnce(function() {
                    this.coinArea.node.active = !0,
                    this.coinArea.init(u.instance.getData(r.UserData).coin)
                }, t),
                null !== this.starArea && this.scheduleOnce(function() {
                    this.starArea.node.active = !0,
                    this.starArea.init(u.instance.getData(r.UserData).star)
                }, t),
                this.adCell.updateProduct();
                for (var o = 0; o < this.coinCellList.length; ++o)
                    this.coinCellList[o].updateProduct();
                for (o = 0; o < this.starCellList.length; ++o)
                    this.starCellList[o].updateProduct()
            },
            hidePopup: function() {
                this._super(),
                null !== this.coinArea && (this.coinArea.node.active = !1),
                null !== this.starArea && (this.starArea.node.active = !1),
                null !== a.instance && null !== a.instance.node && a.instance.endCounter.onPauseCounter(!1)
            },
            createCell: function(t) {
                var e = cc.instantiate(t);
                return e.parent = this.cellParentNode,
                e.setPosition(0, this.spawnY),
                this.spawnY -= 105,
                e.getComponent("ShopCell")
            }
        }),
        cc._RF.pop()
    }
    , {
        BillingManager: "BillingManager",
        CommonConfig: "CommonConfig",
        DataManager: "DataManager",
        GoodsArea: "GoodsArea",
        GoodsStatusBar: "GoodsStatusBar",
        Ingame: "Ingame",
        LabelLocalized: "LabelLocalized",
        MPPopup: "MPPopup",
        Types: "Types"
    }],
    SoundManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b1752wxvKlPB4+mVS01hiyM", "SoundManager");
        var i = t("../modules/Types")
          , a = i.DataType
          , n = (i.SoundType,
        t("DataManager").DataManager)
          , r = cc.Class({
            extends: cc.Component,
            editor: {
                executionOrder: -1
            },
            statics: {
                instance: null
            },
            properties: {
                sfxAudio: cc.AudioSource,
                bgmClipTest: cc.AudioClip
            },
            onLoad: function() {
                cc.log("onLoad~"),
                (r.instance = this).bgmSource = cc.audioEngine,
                this.bgmSource.setMusicVolume(.5),
                this.userData = n.instance.getData(a.UserData),
                this.isBgmOn = this.userData.bgmOn,
                this.isSfxOn = this.userData.sfxOn,
                this.effectDic = [],
                this.bgmClip = null,
                this.effectLoaded = !1,
                this.isBGMPlaying = !1,
                cc.game.addPersistRootNode(this.node);
                var s = this;
                cc.loader.loadRes("Sound/BGM/Main", cc.AudioClip, function(t, e) {
                    s.bgmClip = e,
                    s.applySetting()
                }),
                cc.loader.loadResDir("Sound/SFX", cc.AudioClip, function(t, e, o) {
                    s.effectLoaded = !0;
                    for (var i = 0; i < e.length; ++i) {
                        var a = o[i].split("/")
                          , n = a[a.length - 1];
                        s.effectDic[n] = e[i]
                    }
                })
            },
            pauseMusic: function() {
                this.bgmSource.pauseMusic()
            },
            resumeMusic: function() {
                this.bgmSource.resumeMusic()
            },
            applySetting: function() {
                !0 === this.isBgmOn ? this.playBGM() : this.stopBGM()
            },
            setBGMSound: function(t) {
                this.isBgmOn = t,
                this.userData.bgmOn = t,
                n.instance.saveData(a.UserData),
                this.applySetting()
            },
            playBGM: function() {
                !1 === this.isBGMPlaying && (this.isBGMPlaying = !0,
                this.bgmSource.playMusic(this.bgmClip, !0))
            },
            stopBGM: function() {
                this.bgmSource.stopMusic(),
                this.isBGMPlaying = !1
            },
            setSFXSound: function(t) {
                this.isSfxOn = t,
                this.userData.sfxOn = t,
                n.instance.saveData(a.UserData),
                this.applySetting()
            },
            playSFX: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!1 !== this.isSfxOn && !1 !== this.effectLoaded) {
                    var o = this.effectDic[t];
                    0 === e && this.bgmSource.playEffect(o, !1)
                }
            }
        });
        cc._RF.pop()
    }
    , {
        "../modules/Types": "Types",
        DataManager: "DataManager"
    }],
    StarCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b5529Ya0kVHsbIqMujWkHyT", "StarCell");
        var i = t("ShopCell")
          , a = t("GoodsStatusBar")
          , n = t("Types").DataType
          , s = t("BillingManager").BillingManager;
        cc.Class({
            extends: i,
            properties: {},
            preInit: function(t, e, o) {
                this._super(),
                this.starValue = t,
                this.productLabel.formatValue = t,
                this.buyButtonLabel.string = e,
                this.productId = o
            },
            updateProduct: function() {
                this._super(),
                this.buyButtonLabel.string = s.instance.getPriceByProductId(this.productId)
            },
            onPressedCellButton: function() {
                this._super();
                var e = this;
                s.instance.buyProduct(this.productId, function() {
                    var t = e.dataManager.getData(n.UserData);
                    t.star += e.starValue,
                    e.dataManager.saveData(n.UserData),
                    a.instance.changedStar(t.star)
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BillingManager: "BillingManager",
        GoodsStatusBar: "GoodsStatusBar",
        ShopCell: "ShopCell",
        Types: "Types"
    }],
    StarLackPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a3b91kQa/dLy4H/IHCiipBP", "StarLackPopup");
        var i = t("MPPopup")
          , a = t("Types").PopupType;
        cc.Class({
            extends: i,
            properties: {},
            preInit: function(t) {
                this._super(t)
            },
            init: function() {},
            onPressedBuyStars: function() {
                !1 !== this.isShown && (this.popupManager.popHidePopup(),
                this.popupManager.showPopup(a.Shop))
            }
        }),
        cc._RF.pop()
    }
    , {
        MPPopup: "MPPopup",
        Types: "Types"
    }],
    Title: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b0d41AZJxFINK68CZ15+sDQ", "Title");
        var i = t("MPObject")
          , a = t("CharacterController")
          , n = t("CharacterNotiIcon")
          , s = t("../../modules/Types");
        s.CharacterType,
        s.CharAnimType,
        s.PopupType,
        s.DataType,
        t("PopupManager"),
        t("DataManager").DataManager,
        t("CommonConfig").commonConfig,
        t("SoundManager");
        cc.Class({
            extends: i,
            properties: {
                characterController: a,
                highScoreLabel: cc.Label,
                characterNotiIcon: n
            },
            preInit: function(t, e) {}
        }),
        cc._RF.pop()
    }
    , {
        "../../modules/Types": "Types",
        CharacterController: "CharacterController",
        CharacterNotiIcon: "CharacterNotiIcon",
        CommonConfig: "CommonConfig",
        DataManager: "DataManager",
        MPObject: "MPObject",
        PopupManager: "PopupManager",
        SoundManager: "SoundManager"
    }],
    TutoFinger: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d55ceyq5fZLaZRWVmgtJViU", "TutoFinger");
        var i = t("MPObject");
        cc.Class({
            extends: i,
            properties: {
                fireObj: cc.Node
            },
            preInit: function() {
                this.fireObj.active = !1
            },
            playTouchFinger: function(t) {
                this.node.stopActionByTag("Tuto");
                var e = this.node
                  , o = this.node.parent.convertToNodeSpace(t);
                this.fireObj.active = !1,
                e.active = !0,
                e.setPosition(o);
                var i = cc.v2(o.x + 50, o.y - 50)
                  , a = cc.repeatForever(cc.sequence(cc.moveTo(.5, i), cc.moveTo(.5, o), cc.callFunc(this.firePoint, this)));
                a.easing(cc.easeQuadraticActionInOut()),
                a.setTag("Tuto"),
                e.runAction(a)
            },
            playDragFinger: function(t, e) {
                this.node.stopActionByTag("Tuto");
                var o = this.node.parent.convertToNodeSpace(t)
                  , i = this.node.parent.convertToNodeSpace(e);
                this.node.active = !0;
                var a = cc.v2(o.x + 50, o.y - 50);
                this.node.setPosition(a);
                var n = cc.repeatForever(cc.sequence(cc.moveTo(.4, o).easing(cc.easeQuadraticActionOut()), cc.callFunc(this.firePoint, this), cc.moveTo(1, i).easing(cc.easeCubicActionInOut()), cc.callFunc(this.firePoint, this), cc.delayTime(.5), cc.callFunc(function() {
                    this.node.setPosition(a)
                }, this)));
                n.setTag("Tuto"),
                this.node.runAction(n)
            },
            clearFinger: function() {
                this.node.stopActionByTag("Tuto"),
                this.node.active = !1
            },
            firePoint: function() {
                this.fireObj.active = !0,
                this.fireObj.setPosition(this.node.getPosition()),
                this.fireObj.setScale(1, 1),
                this.fireObj.opacity = 255;
                var t = cc.sequence(cc.spawn(cc.fadeOut(.4), cc.scaleTo(.4, 1.4)), cc.callFunc(function() {
                    this.fireObj.active = !1
                }, this));
                t.setTag("FireObj"),
                this.fireObj.stopActionByTag("FireObj"),
                this.fireObj.runAction(t)
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    TutorialPopup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "461e16Yhr1DT6Vqv+u3b93p", "TutorialPopup");
        var i = t("MPPopup")
          , a = t("Ingame");
        cc.Class({
            extends: i,
            properties: {
                tutoGroup: {
                    default: [],
                    type: cc.Node
                }
            },
            preInit: function(t) {
                this._super(t)
            },
            showPopup: function(t) {
                this._super(t),
                this.currIdx = 0,
                this.setTutoGroup(this.currIdx)
            },
            onPressedTutoPopup: function() {
                if (!1 !== this.isShown) {
                    if (this.node.stopActionByTag(1),
                    ++this.currIdx,
                    this.currIdx >= this.tutoGroup.length)
                        return this.onPressedCloseButton(),
                        void a.instance.onEndTutorial();
                    this.setTutoGroup(this.currIdx)
                }
            },
            setTutoGroup: function(t) {
                if (!(t < 0 || t >= this.tutoGroup.length)) {
                    for (var e = 0; e < this.tutoGroup.length; ++e)
                        this.tutoGroup[e].active = e !== t;
                    this.currIdx = t;
                    var o = cc.sequence(cc.delayTime(4), cc.callFunc(function() {
                        this.onPressedTutoPopup()
                    }, this));
                    o.setTag(1),
                    this.node.runAction(o)
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        Ingame: "Ingame",
        MPPopup: "MPPopup"
    }],
    Tutorial: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0ea41gOE5tOjb+WSq09rX5r", "Tutorial");
        var i = t("MPObject")
          , a = (t("state-machine"),
        t("../../modules/Types"))
          , n = t("TutoFinger")
          , s = a.PopupType
          , r = (t("PopupManager"),
        t("GameUtil"))
          , c = a.ShapeControlType;
        cc.Class({
            extends: i,
            properties: {
                blockOutLine: cc.Sprite,
                finger: n,
                tutoDimming: cc.Node,
                rotSprNode: cc.Node,
                tutoShapeSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                _tutoStep: 0,
                tutoStep: {
                    get: function() {
                        return this._tutoStep
                    },
                    set: function(t) {
                        this._tutoStep = t,
                        this.processTutorialByStep(t)
                    }
                },
                shape1EndPointNode: cc.Node,
                shape2EndPointNode: cc.Node
            },
            init: function(t, e, o) {
                this.finger.preInit(),
                this.boardData = [[-1, -1, -1, 9, 3, 3, -1, -1, -1, -1], [-1, -1, -1, 9, 4, 4, -1, -1, -1, -1], [-1, -1, -1, 8, 5, 4, -1, -1, -1, -1], [-1, -1, -1, 8, 5, 4, -1, -1, -1, -1], [2, 8, 10, 10, 10, 11, 11, 11, -1, 5], [2, 8, 10, 10, 10, 7, 6, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 11, 4, 6, -1, -1, -1, -1], [-1, -1, -1, 11, 5, 6, -1, -1, -1, -1], [-1, -1, -1, 11, 5, 6, -1, -1, -1, -1]],
                this.tutoShapeIDs = [2, 10],
                this.unlockPos1 = [cc.v2(8, 4), cc.v2(7, 5), cc.v2(8, 5), cc.v2(9, 5)],
                this.unlockPos2 = [cc.v2(3, 4), cc.v2(4, 4), cc.v2(5, 4), cc.v2(3, 5), cc.v2(4, 5), cc.v2(5, 5), cc.v2(3, 6), cc.v2(4, 6), cc.v2(5, 6)],
                this.ingame = t,
                this.gameBoard = e,
                this.shapePool = o,
                this.currTutoRotateCnt = 0,
                this.currTutoDragCnt = 0,
                this.isTutoPlay = !0,
                this.node.active = !0,
                this.gameBoard.initForTutorial(this.boardData, this),
                this.shapePool.initForTutorial(this.tutoShapeIDs, this),
                this.node.active = !0,
                this.tutoStep = 1
            },
            release: function() {
                this.gameBoard.allSetLockBoardBlocks(!1),
                this.shapePool.setShapeControlTypes(c.Free),
                this.shapePool.tutorial = null,
                this.gameBoard.tutorial = null,
                this.ingame.tutorial = null,
                this.node.destroy()
            },
            update: function(t) {
                if (!1 !== this.isTutoPlay)
                    switch (this.tutoStep) {
                    case 1:
                        2 <= this.currTutoRotateCnt && ++this.tutoStep;
                        break;
                    case 2:
                        1 <= this.currTutoDragCnt && !0 === this.ingame.fsm.is("Solving") && ++this.tutoStep;
                        break;
                    case 3:
                        2 <= this.currTutoDragCnt && !0 === this.ingame.fsm.is("Solving") && ++this.tutoStep
                    }
            },
            processTutorialByStep: function(t) {
                if (1 === t) {
                    this.gameBoard.allSetLockBoardBlocks(!0),
                    this.tutoDimming.active = !0,
                    this.shapePool.setShapeControlTypes(c.AllDisable),
                    this.shapePool.setShapeControlTypes(c.NoDrag, 0);
                    var e = r.getWorldPosition(this.shapePool.shapePosNodeList[0]);
                    this.finger.playTouchFinger(e),
                    this.playRotSprite(e),
                    this.hideBlockOutLine()
                } else if (2 === t) {
                    this.tutoDimming.active = !1,
                    this.gameBoard.setLockBoardBlocks(!1, this.unlockPos1),
                    this.shapePool.setShapeControlTypes(c.NoRotate, 0);
                    var o = r.getWorldPosition(this.shapePool.shapePosNodeList[0])
                      , i = r.getWorldPosition(this.shape1EndPointNode);
                    this.finger.playDragFinger(o, i),
                    this.showBlockOutLine(0, i),
                    this.stopRotSprite()
                } else if (3 === t) {
                    this.gameBoard.setLockBoardBlocks(!1, this.unlockPos2),
                    this.shapePool.setShapeControlTypes(c.NoRotate, 0);
                    var a = r.getWorldPosition(this.shapePool.shapePosNodeList[1])
                      , n = r.getWorldPosition(this.shape2EndPointNode);
                    this.finger.playDragFinger(a, n),
                    this.showBlockOutLine(1, n)
                } else
                    4 === t && (this.isTutoPlay = !1,
                    this.ingame.popupManager.showPopup(s.Tutorial))
            },
            playTutorialRoutine: function() {},
            playRotSprite: function(t) {
                this.rotSprNode.stopActionByTag("Rot"),
                this.rotSprNode.active = !0;
                var e = this.node.convertToNodeSpace(t);
                this.rotSprNode.setPosition(e);
                var o = cc.repeatForever(cc.rotateBy(2, 360));
                o.setTag("Rot"),
                this.rotSprNode.runAction(o)
            },
            stopRotSprite: function() {
                this.rotSprNode.stopActionByTag("Rot"),
                this.rotSprNode.active = !1
            },
            showBlockOutLine: function(t, e) {
                this.blockOutLine.spriteFrame = this.tutoShapeSpriteFrame[t];
                var o = this.node.convertToNodeSpace(e);
                this.blockOutLine.node.setPosition(o),
                this.blockOutLine.node.active = !0;
                var i = cc.repeatForever(cc.sequence(cc.scaleTo(.4, .9), cc.scaleTo(.4, 1)));
                i.setTag("OutLine"),
                this.blockOutLine.node.runAction(i)
            },
            hideBlockOutLine: function() {
                this.blockOutLine.node.stopActionByTag("OutLine"),
                this.blockOutLine.node.active = !1
            },
            clearObjs: function() {
                this.hideBlockOutLine(),
                this.stopRotSprite(),
                this.finger.clearFinger()
            }
        }),
        cc._RF.pop()
    }
    , {
        "../../modules/Types": "Types",
        GameUtil: "GameUtil",
        MPObject: "MPObject",
        PopupManager: "PopupManager",
        TutoFinger: "TutoFinger",
        "state-machine": "state-machine"
    }],
    Types: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d3e95owEpNKuJlD/00bDk9F", "Types");
        var i = cc.Enum({
            None: 0,
            NormalBlock: "NormalBlock",
            BoomBlock: "BoomBlock",
            LayerBlock2: "LayerBlock2",
            BoomRangeBlock: "BoomRangeBlock"
        })
          , a = cc.Enum({
            NormalBreak: "normal",
            ReviveBreak: "revive"
        })
          , n = cc.Enum({
            First: 0,
            Normal: 1,
            Boom: 2,
            BoomRange: 3
        })
          , s = cc.Enum({
            Width: 0,
            Height: 1,
            Both: 2
        })
          , r = cc.Enum({
            None: 0,
            Up: 1,
            Down: 2,
            Left: 3,
            Right: 4
        })
          , c = cc.Enum({
            Panda: "Panda",
            Dragon: "Dragon",
            Beaver: "Beaver",
            Rhino: "Rhino",
            Moose: "Moose",
            Rooster: "Rooster",
            Seal: "Seal",
            Knight: "Knight",
            Zombie: "Zombie",
            Skull: "Skull",
            Yeti: "Yeti",
            Unicorn: "Unicorn"
        })
          , h = cc.Enum({
            None: "",
            Idle: "ideal",
            IdleEffect: "ideal_effect",
            Happy: "happy",
            Sad: "sad",
            OpenMouth: "openmouth",
            Eating: "eating"
        })
          , l = cc.Enum({
            Normal: 0,
            BoomLaser: 1,
            Layer2: 2,
            BoomRange: 3
        })
          , u = cc.Enum({
            None: "None",
            ChangeShape: "ChangeShape"
        })
          , p = cc.Enum({
            Random: 0,
            CanLand: 1,
            Specific: 2
        })
          , d = cc.Enum({
            Pause: 0,
            Continue: 1,
            GameOver: 2,
            Shop: 3,
            CoinLack: 4,
            StarLack: 5,
            Setting: 6,
            ShapeUnlock: 7,
            Tutorial: 8,
            CoinEvent: 9
        })
          , f = cc.Enum({
            Free: 0,
            NoLand: 1,
            NoRotate: 2,
            NoDrag: 4,
            AllDisable: 5
        })
          , g = cc.Enum({
            None: 0,
            Common: 1,
            HighScore: 2,
            Start: 3
        })
          , m = cc.Enum({
            UserData: "UserData",
            GameData: "GameData"
        })
          , y = cc.Enum({
            Title: 0,
            Ingame: 1
        })
          , B = cc.Enum({
            BoomLaser: "BoomLaser",
            ButtonClick: "ButtonClick",
            BuyCharacter: "BuyCharacter",
            Congratulate: "Congratulate",
            EndCounter: "EndCounter",
            GameOverHighScore: "GameOverHighScore",
            GameOver: "GameOver",
            GetStar: "GetStar",
            HighScoreText: "HighScoreText",
            LandBlock: "LandBlock",
            LineClear: "LineClear",
            ReviveBoard: "ReviveBoard",
            RevivePopup: "RevivePopup",
            ScoreText: "ScoreText",
            ShapeChange: "ShapeChange",
            ShapeRotate: "ShapeRotate"
        })
          , S = cc.Enum({
            Coin: "Coin",
            Continue: "Continue"
        });
        e.exports = {
            OnBlockType: i,
            BreakBlockAniType: a,
            DestroyBlockState: n,
            BoomDir: s,
            Direction: r,
            CharacterType: c,
            CharacterEmotionType: h,
            BoardParticleType: l,
            ItemType: u,
            GetShapeType: p,
            PopupType: d,
            ShapeControlType: f,
            CongTextType: g,
            DataType: m,
            CharAnimType: y,
            SoundType: B,
            RewardVideoType: S
        },
        cc._RF.pop()
    }
    , {}],
    UpdateValueLabel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "eb832vsC9pNdrs2NbOGWvBY", "UpdateValueLabel");
        t("MPObject");
        cc.Class({
            extends: cc.Label,
            properties: {},
            preInit: function() {
                this.isPlaying = !1
            },
            playUpdateValue: function(t, e, o) {
                this.startVal = t,
                this.endVal = e,
                this.diffVal = this.endVal - this.startVal,
                this.currTime = 0,
                this.changingTime = o,
                this.string = 0,
                this.isPlaying = !0
            },
            update: function(t) {
                if (!1 !== this.isPlaying) {
                    if (this.currTime < this.changingTime) {
                        this.currTime += t;
                        var e = this.startVal + parseInt(this.currTime / this.changingTime * this.diffVal);
                        return e = e.clamp(this.startVal, this.endVal),
                        void (this.string = this.startVal + parseInt(this.currTime / this.changingTime * this.diffVal))
                    }
                    this.string = this.endVal,
                    this.isPlaying = !1
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        MPObject: "MPObject"
    }],
    WatchAdsCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2843NumdlL650zYRA9guzc", "WatchAdsCell");
        var i = t("ShopCell")
          , a = t("AdManager").AdManager
          , n = t("GoodsStatusBar")
          , s = t("CommonConfig").commonConfig
          , r = t("Types")
          , c = r.RewardVideoType
          , h = r.DataType;
        cc.Class({
            extends: i,
            properties: {
                watchButton: cc.Button,
                enableColor: cc.Color,
                disableColor: cc.Color
            },
            preInit: function(t) {
                this._super(),
                this.productLabel.formatValue = t
            },
            updateProduct: function() {
                this.setEnableButton(a.instance.canPlayingRewardVideo(c.Coin))
            },
            onPressedCellButton: function() {
                this._super();
                var e = this;
                a.instance.playRewardVideo(c.Coin, function() {
                    var t = e.dataManager.getData(h.UserData);
                    t.coin += s.adReward,
                    e.dataManager.saveData(h.UserData),
                    n.instance.changedCoin(t.coin),
                    e.updateProduct()
                })
            },
            setEnableButton: function(t) {
                this.watchButton.interactable = t,
                this.watchButton.node.color = !0 === t ? this.enableColor : this.disableColor
            }
        }),
        cc._RF.pop()
    }
    , {
        AdManager: "AdManager",
        CommonConfig: "CommonConfig",
        GoodsStatusBar: "GoodsStatusBar",
        ShopCell: "ShopCell",
        Types: "Types"
    }],
    en: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ee6a0jWzDpEDJOgeBEG6ohI", "en"),
        e.exports = {
            play: "PLAY!",
            coin: "XX Coins",
            star: "XX Stars",
            restore: "restore",
            character: "CHARACTER",
            storeTitle: "STORE",
            freeCoin: "Free XX coins",
            watch: "WATCH",
            lackCoinTitle: "NOT ENOUGH COINS!",
            credit: "CREDIT",
            settingTitle: "SETTING",
            sound: "SOUND",
            music: "MUSIC",
            soundAndMusic: "SOUND & MUSIC",
            continueTitle: "CONTINUE?",
            continueDesc1: "continue to play the game?",
            continueDesc2: "We will clear some of your blocks! ",
            gameoverTitle: "GAME OVER",
            best: "BEST",
            highScore: "HIGH SCORE",
            newHighScore: "New high score",
            score: "SCORE",
            coinAdDesc: "ONLY FOR NOW! \n Watch a video and get XX FREE coins!",
            starlackDesc1: "You can ONLY get stars from the game play.",
            starlackDesc2: "Play more and collect your stars!",
            starlackTitle: "NOT ENOUGH STARS!",
            itemlackDesc: "Can NOT use “Change” item anymore in this time!",
            tutorialTitle: "How to play?",
            tutorial_tap: "Touch!",
            tutorial_drag: "Drag!",
            tutorial_line: "Complete a line either vertically or horizontally!",
            unlockShapeTitle: "Unlock",
            unlockShapeDesc: "wow!\nYou unlock the new block!",
            reviewTitle: "Rate Our App",
            reviewDesc: "If you love our app, please take a moment to rate it.",
            reviewRate: "Rate",
            reviewFeedback: "Send Feedback",
            reviewClose: "Close",
            removeAdTitle: "No Ads",
            removeAdDesc: "Remove all Ads in the game! \n (even you buy this item, you can\n watch FREE reward Ads if you want to.)",
            tutorial: "Tutorial",
            tutorial_2layer: "2 layer block will be disappeared, when you clear the lines twice!",
            tutorial_3layer: "3 layer block will be disappeared, when you clear the lines thrice!",
            tutorial_bomb: "Bomb block will clear the lines in horizonally and vertically.",
            tutorial_movingblock: "Moving block is move around each times when you put the block.",
            tutorial_change: "Touch the block you want to change to another block!",
            changeItem: "Block Change",
            tutorial_changeblock: "If you do not like your blocks, you can switch to another block!",
            coinAdTitle: "Get coins for FREE!",
            or: "OR",
            skip: "Skip",
            buyStars: "Buy stars!",
            char_knight: "Knight",
            char_rooster: "Rooster",
            char_skull: "Skull",
            char_zombie: "Zombie",
            char_seal: "Seal",
            char_panda: "Panda",
            char_dragon: "Dragon",
            char_beaver: "Beaver",
            char_unicorn: "Unicorn",
            char_lama: "Lama",
            char_yeti: "Yeti",
            char_moose: "Moose",
            char_monkey: "Monkey",
            char_parrot: "Parrot",
            char_rhino: "Rhino",
            char_tiger: "Tiger",
            char_rudolph: "Rudolph"
        },
        cc._RF.pop()
    }
    , {}],
    i18n: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1982aZFPb5HVasuXbE+T7W0", "i18n");
        var i = e("polyglot")
          , a = cc.sys.language;
        "zh" !== a && (a = "en");
        var n = e(a = "zh")
          , s = new i({
            phrases: n,
            allowMissing: !0
        });
        t.exports = {
            init: function(t) {
                n = e(a = t),
                s.replace(n)
            },
            t: function(t, e) {
                return s.t(t, e)
            }
        },
        cc._RF.pop()
    }
    , {
        polyglot: "polyglot"
    }],
    polyglot: [function(t, i, a) {
        (function(t) {
            "use strict";
            cc._RF.push(i, "7d869QNUwxB8ZGsBDDtBqRf", "polyglot");
            var e, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ;
            e = void 0 !== t ? t : void 0,
            o = function(e) {
                var u = String.prototype.replace;
                function t(t) {
                    t = t || {},
                    this.phrases = {},
                    this.extend(t.phrases || {}),
                    this.currentLocale = t.locale || "en",
                    this.allowMissing = !!t.allowMissing,
                    this.warn = t.warn || o
                }
                t.VERSION = "1.0.0",
                t.prototype.locale = function(t) {
                    return t && (this.currentLocale = t),
                    this.currentLocale
                }
                ,
                t.prototype.extend = function(t, e) {
                    var o;
                    for (var i in t)
                        t.hasOwnProperty(i) && (o = t[i],
                        e && (i = e + "." + i),
                        "object" === (void 0 === o ? "undefined" : s(o)) ? this.extend(o, i) : this.phrases[i] = o)
                }
                ,
                t.prototype.unset = function(t, e) {
                    var o;
                    if ("string" == typeof t)
                        delete this.phrases[t];
                    else
                        for (var i in t)
                            t.hasOwnProperty(i) && (o = t[i],
                            e && (i = e + "." + i),
                            "object" === (void 0 === o ? "undefined" : s(o)) ? this.unset(o, i) : delete this.phrases[i])
                }
                ,
                t.prototype.clear = function() {
                    this.phrases = {}
                }
                ,
                t.prototype.replace = function(t) {
                    this.clear(),
                    this.extend(t)
                }
                ,
                t.prototype.t = function(t, e) {
                    var o, i;
                    return "number" == typeof (e = null == e ? {} : e) && (e = {
                        smart_count: e
                    }),
                    "string" == typeof this.phrases[t] ? o = this.phrases[t] : "string" == typeof e._ ? o = e._ : this.allowMissing ? o = t : (this.warn('Missing translation for key: "' + t + '"'),
                    i = t),
                    "string" == typeof o && (e = function(t) {
                        var e = {};
                        for (var o in t)
                            e[o] = t[o];
                        return e
                    }(e),
                    i = function(t, e) {
                        for (var o in e)
                            if ("_" !== o && e.hasOwnProperty(o)) {
                                var i = e[o];
                                "string" == typeof i && (i = u.call(e[o], a, n)),
                                t = u.call(t, new RegExp("%\\{" + o + "\\}","g"), i)
                            }
                        return t
                    }(i = function(t, e, o) {
                        var i, a, n;
                        null != o && t ? (a = t.split(p),
                        n = a[(r = e,
                        c = o,
                        d[(h = r,
                        l = function(t) {
                            var e, o, i, a = {};
                            for (e in t)
                                if (t.hasOwnProperty(e))
                                    for (i in o = t[e])
                                        a[o[i]] = e;
                            return a
                        }(f),
                        l[h] || l.en)](c))] || a[0],
                        s = n,
                        i = u.call(s, g, "")) : i = t;
                        var s;
                        var r, c, h, l;
                        return i
                    }(o, this.currentLocale, e.smart_count), e)),
                    i
                }
                ,
                t.prototype.has = function(t) {
                    return t in this.phrases
                }
                ;
                var p = "||||"
                  , d = {
                    chinese: function(t) {
                        return 0
                    },
                    german: function(t) {
                        return 1 !== t ? 1 : 0
                    },
                    french: function(t) {
                        return 1 < t ? 1 : 0
                    },
                    russian: function(t) {
                        return t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                    },
                    czech: function(t) {
                        return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
                    },
                    polish: function(t) {
                        return 1 === t ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                    },
                    icelandic: function(t) {
                        return t % 10 != 1 || t % 100 == 11 ? 1 : 0
                    }
                }
                  , f = {
                    chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                    german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                    french: ["fr", "tl", "pt-br"],
                    russian: ["hr", "ru"],
                    czech: ["cs", "sk"],
                    polish: ["pl"],
                    icelandic: ["is"]
                };
                var g = /^\s+|\s+$/g;
                var a = /\$/g
                  , n = "$$$$";
                function o(t) {
                    e.console && e.console.warn && e.console.warn("WARNING: " + t)
                }
                return t
            }
            ,
            "function" == typeof define && define.amd ? define([], function() {
                return o(e)
            }) : "object" === (void 0 === a ? "undefined" : s(a)) ? i.exports = o(e) : e.Polyglot = o(e),
            cc._RF.pop()
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    "state-machine": [function(t, e, o) {
        "use strict";
        var p;
        cc._RF.push(e, "b18a0/NnvNMtLOX4XlImdfP", "state-machine"),
        p = {
            VERSION: "2.4.0",
            Result: {
                SUCCEEDED: 1,
                NOTRANSITION: 2,
                CANCELLED: 3,
                PENDING: 4
            },
            Error: {
                INVALID_TRANSITION: 100,
                PENDING_TRANSITION: 200,
                INVALID_CALLBACK: 300
            },
            WILDCARD: "*",
            ASYNC: "async",
            create: function(t, e) {
                var o = "string" == typeof t.initial ? {
                    state: t.initial
                } : t.initial
                  , i = t.terminal || t.final
                  , a = e || t.target || {}
                  , n = t.events || []
                  , s = t.callbacks || {}
                  , r = {}
                  , c = {}
                  , h = function(t) {
                    var e = Array.isArray(t.from) ? t.from : t.from ? [t.from] : [p.WILDCARD];
                    r[t.name] = r[t.name] || {};
                    for (var o = 0; o < e.length; o++)
                        c[e[o]] = c[e[o]] || [],
                        c[e[o]].push(t.name),
                        r[t.name][e[o]] = t.to || e[o];
                    t.to && (c[t.to] = c[t.to] || [])
                };
                o && (o.event = o.event || "startup",
                h({
                    name: o.event,
                    from: "none",
                    to: o.state
                }));
                for (var l = 0; l < n.length; l++)
                    h(n[l]);
                for (var u in r)
                    r.hasOwnProperty(u) && (a[u] = p.buildEvent(u, r[u]));
                for (var u in s)
                    s.hasOwnProperty(u) && (a[u] = s[u]);
                return a.current = "none",
                a.is = function(t) {
                    return Array.isArray(t) ? 0 <= t.indexOf(this.current) : this.current === t
                }
                ,
                a.can = function(t) {
                    return !this.transition && void 0 !== r[t] && (r[t].hasOwnProperty(this.current) || r[t].hasOwnProperty(p.WILDCARD))
                }
                ,
                a.cannot = function(t) {
                    return !this.can(t)
                }
                ,
                a.transitions = function() {
                    return (c[this.current] || []).concat(c[p.WILDCARD] || [])
                }
                ,
                a.isFinished = function() {
                    return this.is(i)
                }
                ,
                a.error = t.error || function(t, e, o, i, a, n, s) {
                    throw s || n
                }
                ,
                a.states = function() {
                    return Object.keys(c).sort()
                }
                ,
                o && !o.defer && a[o.event](),
                a
            },
            doCallback: function(e, t, o, i, a, n) {
                if (t)
                    try {
                        return t.apply(e, [o, i, a].concat(n))
                    } catch (t) {
                        return e.error(o, i, a, n, p.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", t)
                    }
            },
            beforeAnyEvent: function(t, e, o, i, a) {
                return p.doCallback(t, t.onbeforeevent, e, o, i, a)
            },
            afterAnyEvent: function(t, e, o, i, a) {
                return p.doCallback(t, t.onafterevent || t.onevent, e, o, i, a)
            },
            leaveAnyState: function(t, e, o, i, a) {
                return p.doCallback(t, t.onleavestate, e, o, i, a)
            },
            enterAnyState: function(t, e, o, i, a) {
                return p.doCallback(t, t.onenterstate || t.onstate, e, o, i, a)
            },
            changeState: function(t, e, o, i, a) {
                return p.doCallback(t, t.onchangestate, e, o, i, a)
            },
            beforeThisEvent: function(t, e, o, i, a) {
                return p.doCallback(t, t["onbefore" + e], e, o, i, a)
            },
            afterThisEvent: function(t, e, o, i, a) {
                return p.doCallback(t, t["onafter" + e] || t["on" + e], e, o, i, a)
            },
            leaveThisState: function(t, e, o, i, a) {
                return p.doCallback(t, t["onleave" + o], e, o, i, a)
            },
            enterThisState: function(t, e, o, i, a) {
                return p.doCallback(t, t["onenter" + i] || t["on" + i], e, o, i, a)
            },
            beforeEvent: function(t, e, o, i, a) {
                if (!1 === p.beforeThisEvent(t, e, o, i, a) || !1 === p.beforeAnyEvent(t, e, o, i, a))
                    return !1
            },
            afterEvent: function(t, e, o, i, a) {
                p.afterThisEvent(t, e, o, i, a),
                p.afterAnyEvent(t, e, o, i, a)
            },
            leaveState: function(t, e, o, i, a) {
                var n = p.leaveThisState(t, e, o, i, a)
                  , s = p.leaveAnyState(t, e, o, i, a);
                return !1 !== n && !1 !== s && (p.ASYNC === n || p.ASYNC === s ? p.ASYNC : void 0)
            },
            enterState: function(t, e, o, i, a) {
                p.enterThisState(t, e, o, i, a),
                p.enterAnyState(t, e, o, i, a)
            },
            buildEvent: function(n, s) {
                return function() {
                    var t = this.current
                      , e = s[t] || (s[p.WILDCARD] != p.WILDCARD ? s[p.WILDCARD] : t) || t
                      , o = Array.prototype.slice.call(arguments);
                    if (this.transition)
                        return this.error(n, t, e, o, p.Error.PENDING_TRANSITION, "event " + n + " inappropriate because previous transition did not complete");
                    if (this.cannot(n))
                        return this.error(n, t, e, o, p.Error.INVALID_TRANSITION, "event " + n + " inappropriate in current state " + this.current);
                    if (!1 === p.beforeEvent(this, n, t, e, o))
                        return p.Result.CANCELLED;
                    if (t === e)
                        return p.afterEvent(this, n, t, e, o),
                        p.Result.NOTRANSITION;
                    var i = this;
                    this.transition = function() {
                        return i.transition = null,
                        i.current = e,
                        p.enterState(i, n, t, e, o),
                        p.changeState(i, n, t, e, o),
                        p.afterEvent(i, n, t, e, o),
                        p.Result.SUCCEEDED
                    }
                    ,
                    this.transition.cancel = function() {
                        i.transition = null,
                        p.afterEvent(i, n, t, e, o)
                    }
                    ;
                    var a = p.leaveState(this, n, t, e, o);
                    return !1 === a ? (this.transition = null,
                    p.Result.CANCELLED) : p.ASYNC === a ? p.Result.PENDING : this.transition ? this.transition() : void 0
                }
            }
        },
        void 0 !== o ? (void 0 !== e && e.exports && (o = e.exports = p),
        o.StateMachine = p) : "function" == typeof define && define.amd ? define(function(t) {
            return p
        }) : "undefined" != typeof window ? window.StateMachine = p : "undefined" != typeof self && (self.StateMachine = p),
        cc._RF.pop()
    }
    , {}],
    zh: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5a40fOwNAJBlLpNnToc4iQX", "zh"),
        e.exports = {
            play: "开始！",
            coin: "XX硬币",
            star: "XX星星",
            restore: "复原",
            character: "角色",
            storeTitle: "商店",
            freeCoin: "免费获取XX硬币！",
            watch: "查看",
            lackCoinTitle: "硬币不够了！",
            credit: "信用",
            settingTitle: "设置",
            sound: "声音",
            music: "音乐",
            soundAndMusic: "声音 & 音乐",
            continueTitle: "继续？",
            continueDesc1: "要继续玩吗？",
            continueDesc2: "消除板块中的部分方块！",
            gameoverTitle: "游戏结束",
            best: "高分",
            highScore: "高分",
            newHighScore: "新高分",
            score: "分数",
            coinAdDesc: "现在观看视频硬币XX倍！\n现在就去获取吧！",
            starlackDesc1: "只能通过玩游戏获得星星！",
            starlackDesc2: "玩游戏并收集星星吧！",
            starlackTitle: "星星不够了！",
            itemlackDesc: "本次游戏中无法再使用替换道具。",
            tutorialTitle: "游戏规则",
            tutorial_tap: "请点击！",
            tutorial_drag: "请拖动！",
            tutorial_line: "请横向或竖向完成直线！",
            unlockShapeTitle: "解锁",
            unlockShapeDesc: "登场了新的方块！",
            reviewTitle: "玩得开心吗？",
            reviewDesc: "那就，请您来评价我们！我们将制作更加精良的游戏！:)",
            reviewRate: "评价",
            reviewFeedback: "发送反馈",
            reviewClose: "关闭",
            removeAdTitle: "消除广告",
            removeAdDesc: "将消除游戏中的所有广告！ *购买道具后也可自由观看奖励视频！",
            tutorial: "教程",
            tutorial_2layer: "2层方块需要完成两次直线才可清除！",
            tutorial_3layer: "3层方块需要完成三次直线才可清除！",
            tutorial_bomb: "炸弹方块爆炸时，将全部清除横线和竖线！",
            tutorial_movingblock: "在每次放方块时，移动方块会移动到其他空位。",
            tutorial_change: "请点击想要替换的方块！",
            changeItem: "替换方块",
            tutorial_changeblock: "不喜欢的方块可以替换成其他方块！",
            coinAdTitle: "获取免费硬币吧！",
            or: "或",
            skip: "跳过",
            buyStars: "购买星星.",
            char_knight: "骑士",
            char_rooster: "鸡",
            char_skull: "头骨",
            char_zombie: "僵尸",
            char_seal: "海豹",
            char_panda: "熊猫",
            char_dragon: "龙",
            char_beaver: "河狸",
            char_unicorn: "独角兽",
            char_lama: "美洲驼",
            char_yeti: "雪人",
            char_moose: "驼鹿",
            char_monkey: "猴子",
            char_parrot: "鹦鹉",
            char_rhino: "犀牛",
            char_tiger: "老虎",
            char_rudolph: "鲁道夫"
        },
        cc._RF.pop()
    }
    , {}]
}, {}, ["AdManager", "MPObject", "MPParticle", "MPPopup", "BillingManager", "CharacterBase", "CharacterController", "CommonCharacter", "CommonConfig", "GameConfig", "ShapeConfig", "DataManager", "DataSet", "GoodsStatusBar", "SoundManager", "Home", "CharacterBuyButton", "CharacterPlayButton", "CharacterScrollView", "CharacterSnapObject", "CharacterStore", "CharacterNotiIcon", "Title", "LabelLocalized", "RichTextLocalized", "en", "zh", "i18n", "polyglot", "Ingame", "Block", "BoardBlock", "BoomBlock", "BoomRangeBlock", "LayerBlock", "NormalBlock", "OnBoardBlock", "GameBoard", "BoardAction", "LineBreakAction", "ReviveBreakAction", "ChangeShapeItem", "ChangeShapeItemEffect", "ItemBase", "ItemManager", "BoardParticlePool", "BoomLaserParticle", "Layer2BlockParticle", "NormalBlockParticle", "ParticleManager", "BlockDynamicPool", "ShapePool", "Shape", "BoardTest", "ItemTutorial", "TutoFinger", "Tutorial", "AdButtonAdjust", "ButtonSound", "CongImageText", "EndCounter", "GoodsToast", "InfoToast", "IngameUI", "SafeAreaSetter", "Types", "ContinuePopup", "PausePopup", "PopupManager", "ResultPopup", "SettingPopup", "ShapeUnlockPopup", "ShopPopup", "StarLackPopup", "TutorialPopup", "CoinArea", "GoodsArea", "HitValueLabel", "CoinCell", "ShopCell", "StarCell", "WatchAdsCell", "UpdateValueLabel", "GameUtil", "PrototypeUtil", "state-machine"]);
