window.__require = function t(e, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var r = a.split("/");
                if (r = r[r.length - 1],
                !e[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l)
                        return l(r, !0);
                    if (c)
                        return c(r, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var h = n[a] = {
                exports: {}
            };
            e[a][0].call(h.exports, function(t) {
                return i(e[a][1][t] || t)
            }, h, h.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var c = "function" == typeof __require && __require, a = 0; a < o.length; a++)
        i(o[a]);
    return i
}({
    AdBackItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8f0b5x+onJKFIcnI96QhtAC", "AdBackItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                iconSprite: cc.Sprite,
                nameLabel: cc.Label,
                startND: cc.Node
            },
            update: function(t) {},
            onEnable: function() {
                this.startND.active = Math.random() > .5,
                this.node.on(cc.Node.EventType.TOUCH_END, this.navigate2Mini, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.TOUCH_END, this.navigate2Mini, this)
            },
            initAdItem: function(t, e) {
                var n = this;
                this.jumpObj = t,
                this.from = e,
                this.nameLabel.string = this.jumpObj.name,
                cc.loader.load(this.jumpObj.icon, function(t, e) {
                    if (e) {
                        var o = new cc.SpriteFrame(e);
                        o && (n.iconSprite.spriteFrame = o)
                    }
                })
            },
            navigate2Mini: function() {
                if (!Gameconfig.isTest && this.jumpObj.appid) {
                    var t = this;
                    cc.vv.sdk.bananaReportClick(this.jumpObj.icon);
                    var e = "gamelist_back"
                      , n = function() {};
                    switch (this.from) {
                    case 1:
                        e = "gamelist",
                        n = function() {
                            cc.vv.likeAd && cc.vv.likeAd.onQuitBtn()
                        }
                        ;
                        break;
                    case 2:
                        e = "gamelist_over",
                        n = function() {
                            cc.vv.overAd && cc.vv.overAd.onQuitBtn()
                        }
                        ;
                        break;
                    case 3:
                        e = "gamelist",
                        n = function() {
                            cc.vv.homeUI && cc.vv.homeUI.onQuitBtn(),
                            cc.vv.game && cc.vv.game.reStart()
                        }
                    }
                    wx.navigateToMiniProgram({
                        appId: this.jumpObj.appid,
                        path: this.jumpObj.path,
                        success: function(n) {
                            console.log("\u8df3\u8f6c\u6210\u529f"),
                            cc.vv.sdk.bananaReportNavigate(t.jumpObj.icon),
                            cc.vv.useAld && wx.aldSendEvent(t.jumpObj.appid, e)
                        },
                        fail: function(t) {
                            console.log("\u8df3\u8f6c\u5931\u8d25"),
                            cc.vv.backAd.node.active && cc.vv.sdk.bananaReportExposure(cc.vv.backAd.iconUrls),
                            n()
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AdItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b28b5BwRz9ONoJBpvNyoewB", "AdItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                iconSprite: cc.Sprite,
                mask: cc.Node,
                icon_frame: cc.Node,
                bone: dragonBones.ArmatureDisplay
            },
            update: function(t) {
                3 != this.from && 2 == this.jumpObj.icon_type && this.list_loaded && (this.frameTime += t,
                this.frameTime >= this.frameInterval && (this.frameTime = 0,
                this.frameIndex++,
                this.frameIndex >= this.frames.length && (this.frameIndex = 0),
                this.iconSprite.spriteFrame = this.frames[this.frameIndex]))
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.navigate2Mini, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.TOUCH_END, this.navigate2Mini, this)
            },
            initAdItem: function(t, e) {
                var n = this
                  , o = this;
                if (this.jumpObj = t,
                this.from = e,
                1 == this.from && (this.bone.node.active = !0,
                this.node.width = 202,
                this.node.height = 202,
                this.iconSprite.node.width = 190,
                this.iconSprite.node.height = 190,
                this.mask.width = 190,
                this.mask.height = 190,
                this.icon_frame.width = 202,
                this.icon_frame.height = 202,
                this.bone.node.scaleX = 1.295,
                this.bone.node.scaleY = 1.295),
                2 == this.from && (this.bone.node.active = !0),
                cc.loader.load(this.jumpObj.icon, function(t, e) {
                    if (e) {
                        var n = new cc.SpriteFrame(e);
                        n && (o.iconSprite.spriteFrame = n)
                    }
                }),
                3 != this.from && 2 == this.jumpObj.icon_type) {
                    this.list_loaded = !1,
                    this.frames = [],
                    this.frameInterval = .15,
                    this.frameTime = 0,
                    this.frameIndex = 0;
                    for (var i = function(t) {
                        cc.loader.load(n.jumpObj.icon_list[t], function(e, n) {
                            if (n) {
                                var i = new cc.SpriteFrame(n);
                                i && (o.frames.push(i),
                                t == o.jumpObj.icon_list.length - 1 && (o.list_loaded = !0,
                                o.iconSprite.spriteFrame = o.frames[0]))
                            }
                        })
                    }, c = 0; c < this.jumpObj.icon_list.length; c++)
                        i(c)
                }
            },
            navigate2Mini: function() {
                if (!Gameconfig.isTest && this.jumpObj.appid) {
                    var t = this;
                    cc.vv.sdk.bananaReportClick(this.jumpObj.icon);
                    var e = "gamelist_back"
                      , n = function() {};
                    switch (this.from) {
                    case 1:
                        e = "gamelist",
                        n = function() {
                            cc.vv.likeAd && cc.vv.likeAd.onQuitBtn()
                        }
                        ;
                        break;
                    case 2:
                        e = "gamelist_over",
                        n = function() {
                            cc.vv.overAd && cc.vv.overAd.onQuitBtn()
                        }
                        ;
                        break;
                    case 3:
                        e = "gamelist",
                        n = function() {
                            cc.vv.homeUI && cc.vv.homeUI.onQuitBtn(),
                            cc.vv.game && cc.vv.game.reStart()
                        }
                    }
                    wx.navigateToMiniProgram({
                        appId: this.jumpObj.appid,
                        path: this.jumpObj.path,
                        success: function(n) {
                            console.log("\u8df3\u8f6c\u6210\u529f"),
                            cc.vv.sdk.bananaReportNavigate(t.jumpObj.icon),
                            cc.vv.useAld && wx.aldSendEvent(t.jumpObj.appid, e)
                        },
                        fail: function(t) {
                            console.log("\u8df3\u8f6c\u5931\u8d25"),
                            cc.vv.backAd.node.active && cc.vv.sdk.bananaReportExposure(cc.vv.backAd.iconUrls),
                            n()
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AudioMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1fb10USqCRMfbGLjVRt8RjF", "AudioMgr"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bgmVolume: 1,
                sfxVolume: 1,
                bgmAudioID: -1,
                sfxAudioID: -1
            },
            init: function() {
                this._isPlayCollider = !1;
                var t = cc.sys.localStorage.getItem(Gameconfig.userId + Gameconfig.appId + "bgmVolume");
                null != t ? (this.bgmVolume = parseFloat(t),
                isNaN(this.bgmVolume) && (this.bgmVolume = 1)) : this.bgmVolume = 1;
                var e = cc.sys.localStorage.getItem(Gameconfig.userId + Gameconfig.appId + "sfxVolume");
                null != e ? (this.sfxVolume = parseFloat(e),
                isNaN(this.sfxVolume) && (this.sfxVolume = 1)) : this.sfxVolume = 1,
                this.bgmAudioID = -1,
                this.sfxAudioID = -1
            },
            playBGM: function(t) {
                if (!(this.bgmVolume <= 0)) {
                    this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
                    var e = this;
                    cc.loader.loadRes("audio/" + t, cc.AudioClip, function(t, n) {
                        e.bgmAudioID = cc.audioEngine.play(n, !0, e.bgmVolume)
                    })
                }
            },
            pauseall: function() {
                cc.audioEngine.pauseAll()
            },
            resumeall: function() {
                cc.audioEngine.resumeAll()
            },
            pauseBGM: function() {
                this.bgmAudioID >= 0 && cc.audioEngine.getState(this.bgmAudioID) == cc.audioEngine.AudioState.PLAYING && cc.audioEngine.pause(this.bgmAudioID)
            },
            pausesfxAndrole: function() {
                this.sfxAudioID >= 0 && cc.audioEngine.getState(this.sfxAudioID) == cc.audioEngine.AudioState.PLAYING && cc.audioEngine.pause(this.sfxAudioID)
            },
            resumeBGM: function() {
                this.bgmAudioID >= 0 && cc.audioEngine.getState(this.bgmAudioID) == cc.audioEngine.AudioState.PAUSED && cc.audioEngine.resume(this.bgmAudioID)
            },
            resumesfxAndrole: function() {
                this.sfxAudioID >= 0 && cc.audioEngine.getState(this.sfxAudioID) == cc.audioEngine.AudioState.PAUSED && cc.audioEngine.resume(this.sfxAudioID)
            },
            playCollider: function(t) {
                var e = this;
                if (!this._isPlayCollider) {
                    this._isPlayCollider = !0;
                    var n = this;
                    cc.loader.loadRes("audio/" + t, cc.AudioClip, function(t, e) {
                        n.sfxAudioID = cc.audioEngine.play(e, !1, n.sfxVolume)
                    }),
                    setTimeout(function() {
                        e._isPlayCollider = !1
                    }, 50)
                }
            },
            playSFX: function(t) {
                if (!(this.sfxVolume <= 0)) {
                    var e = this;
                    cc.loader.loadRes("audio/" + t, cc.AudioClip, function(t, n) {
                        e.sfxAudioID = cc.audioEngine.play(n, !1, e.sfxVolume)
                    })
                }
            },
            setSFXVolume: function(t) {
                this.sfxVolume != t && (cc.sys.localStorage.setItem(Gameconfig.userId + Gameconfig.appId + "sfxVolume", t),
                this.sfxVolume = t)
            },
            setBGMVolume: function(t, e) {
                this.bgmAudioID >= 0 && (t > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID)),
                (this.bgmVolume != t || e) && (cc.sys.localStorage.setItem(Gameconfig.userId + Gameconfig.appId + "bgmVolume", t),
                this.bgmVolume = t,
                cc.audioEngine.setVolume(this.bgmAudioID, t))
            },
            pauseAll: function() {
                cc.audioEngine.pauseAll()
            },
            resumeAll: function() {
                cc.audioEngine.resumeAll()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AwardUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "df92bO9LndCmoS3xy40aSDJ", "AwardUI"),
        cc.Class({
            extends: t("PopupUI"),
            properties: {
                bgLight: cc.Node,
                icon: cc.Sprite,
                titleLabel: cc.Label,
                textLabel: cc.Label,
                coinsf: [cc.SpriteFrame]
            },
            onLoad: function() {
                this.bgLight.stopAllActions(),
                this.bgLight.runAction(cc.repeatForever(cc.rotateBy(1, 90))),
                this.setBanner()
            },
            onDestroy: function() {
                cc.vv.sdk.navigateToBanner(!1),
                cc.vv.winUI && cc.vv.winUI.updateBtnState(!0)
            },
            checkIsFull: function() {
                for (var t = !0, e = 18; e < 27; e++)
                    if (0 == cc.vv.userData.ballsState[e]) {
                        t = !1;
                        break
                    }
                return t
            },
            init: function() {
                var t = this
                  , e = 0;
                if (e = Math.random() <= cc.vv.userData.luckProgress ? 1 : 0,
                cc.vv.userData.luckProgress >= 1 && (e = 1),
                1 == e && this.checkIsFull() && (e = 0,
                cc.vv.userData.luckProgress = .5),
                0 == e) {
                    var n = Math.floor(60 + 21 * Math.random());
                    this.icon.spriteFrame = this.coinsf[0],
                    cc.vv.gameData.coins += n,
                    this.titleLabel.string = "\u91d1\u5e01\u5956\u52b1!",
                    this.textLabel.string = "+" + n,
                    cc.vv.userData.luckProgress += .25,
                    cc.vv.audioMgr.playSFX("LuckyBoxOpenCoins")
                } else {
                    cc.vv.userData.luckProgress = .5;
                    var o = 0;
                    this.titleLabel.string = "\u7f55\u89c1!",
                    this.textLabel.string = "\u65b0\u7403";
                    for (var i = 18; i < 27; i++)
                        if (0 == cc.vv.userData.ballsState[i]) {
                            o = i,
                            cc.vv.userData.ballsState[i] = 1,
                            cc.vv.userData.ballSkinID = o,
                            cc.vv.game.useSkin(cc.vv.userData.ballSkinID),
                            cc.vv.UIMng.updateBulletCountLabel(),
                            cc.vv.netMng.SaveNetData("AwardUI");
                            break
                        }
                    cc.loader.loadRes("tex/skinUI/ball" + o, cc.SpriteFrame, function(e, n) {
                        t.icon.spriteFrame = n
                    }),
                    cc.vv.audioMgr.playSFX("LuckyBoxOpenBalls")
                }
            },
            onNextBtnClick: function() {
                this.isJumpStart || (cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy())
            }
        }),
        cc._RF.pop()
    }
    , {
        PopupUI: "PopupUI"
    }],
    BackAd: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e7ddb/jsIdOuqLNadEYyhCj", "BackAd"),
        cc.Class({
            extends: cc.Component,
            properties: {
                backNode: cc.Widget,
                titleNode: cc.Widget,
                contentNode: cc.Node,
                backAdItemPrefab: cc.Prefab,
                backAdItemBox: cc.Node,
                view: cc.Node,
                adaptiveND: cc.Node
            },
            onLoad: function() {
                Gameconfig.isTest ? this.node.active = !1 : (cc.vv.backAd = this,
                this.node.width = 2 * cc.vv.halfWidth,
                this.node.height = 2 * cc.vv.halfHeight,
                cc.vv.halfWidth / cc.vv.halfHeight < .56 ? (this.backNode.top = 192,
                this.titleNode.top = 192) : (this.backNode.top = 125,
                this.titleNode.top = 125),
                this.initBackAd(),
                this.node.active = !1)
            },
            initBackAd: function() {
                this.iconUrls = []
            },
            onEnable: function() {
                cc.vv.sdk.bananaReportExposure(this.iconUrls),
                cc.vv.sdk.navigateToBanner(!0)
            },
            onBackBtn: function() {
                cc.vv.failUI ? cc.vv.overAd && (cc.vv.overAd.node.active = !0) : (cc.vv.sdk.navigateToBanner(!1),
                cc.vv.homeUI.showHomeUI(),
                cc.vv.likeAd && (cc.vv.likeAd.node.active = !0)),
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BananaQuitBtn: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "73da8Gi631MsKvpxgaRSnYg", "BananaQuitBtn"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.vv.gameQuit = this,
                cc.vv.gameQuit.canClick = !0
            },
            start: function() {
                Gameconfig.isTest ? this.node.active = !1 : this.node.position = cc.vv.homeUI.quitkNode.node.position
            },
            onQuitBtn: function() {
                cc.vv.gameQuit.canClick && (cc.vv.game.reStart(),
                cc.vv.backAd && (cc.vv.backAd.node.active = !0))
            },
            update: function(t) {
                cc.vv.homeUI.quitkNode.node.y != this.node.y && (this.node.y = cc.vv.homeUI.quitkNode.node.y)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BananaSKDMng: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7f4e5e1ukRKvaNr8lWGSq1n", "BananaSKDMng"),
        window.BananaCancelState = {
            DestorySelf: 0,
            Normal: 1
        },
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.vv.BananaMng = this,
                this.state = BananaCancelState.Normal
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BossStartUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f2614m4eLlO44r0h9Mq4Wuu", "BossStartUI"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var t = this;
                cc.vv.audioMgr.playSFX("BossFightLayer"),
                this.scheduleOnce(function() {
                    t.node.stopAllActions(),
                    t.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                        t.node.destroy()
                    })))
                }, 1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BossWinUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0d377EOhatCoJebG+mSMTsR", "BossWinUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                dotsSpriet: [cc.Sprite],
                dotSF: [cc.SpriteFrame],
                bone: dragonBones.ArmatureDisplay,
                icons: [cc.Sprite],
                iconBox: cc.Node,
                progressBox: cc.Node,
                awardBox: cc.Node,
                awardBtn: cc.Node,
                okBtn: cc.Node,
                bgLight: cc.Node,
                closeBtn: cc.Node,
                btnShareRecord: cc.Node
            },
            start: function() {
                var t = this;
                cc.vv.bossWinUI = this,
                this.progressBox.active = !0,
                this.awardBox.active = !1,
                cc.vv.userData.bossLevel % 5 == 0 ? (this.awardBtn.active = !0,
                this.okBtn.active = !1,
                this.normalY = cc.vv.sdk.bannerTopLine,
                cc.vv.banner_jump ? (this.isJumpStart = !0,
                cc.vv.sdk.navigateToBanner(!1),
                this.awardBtn.y = cc.vv.sdk.bannerCneterLine,
                this.scheduleOnce(function() {
                    t.isJumpStart = !1,
                    cc.vv.sdk.navigateToBanner(!0),
                    t.awardBtn.y = t.normalY
                }, 2)) : cc.vv.sdk.navigateToBanner(!0)) : (this.awardBtn.active = !1,
                this.okBtn.active = !0,
                this.normalY = cc.vv.sdk.bannerTopLine,
                cc.vv.banner_jump ? (this.isJumpStart = !0,
                cc.vv.sdk.navigateToBanner(!1),
                this.okBtn.y = cc.vv.sdk.bannerCneterLine,
                this.scheduleOnce(function() {
                    t.isJumpStart = !1,
                    cc.vv.sdk.navigateToBanner(!0),
                    t.okBtn.y = t.normalY
                }, 2)) : cc.vv.sdk.navigateToBanner(!0)),
                this.updateAllDot(),
                this.isAleadyGetAward = !1,
                this.bgLight.stopAllActions(),
                this.bgLight.runAction(cc.repeatForever(cc.rotateBy(1, 90))),
                this.canClosebanner = !0
            },
            onDestroy: function() {
                cc.vv.bossWinUI && (cc.vv.bossWinUI = null),
                this.levelUpBossLevel(),
                cc.vv.UIMng.updateCurLevel(),
                cc.vv.UIMng.setCanReStar(!0),
                cc.vv.game.bossIconBG.active = !1,
                cc.vv.game.changeState(GameState.Idle),
                cc.vv.UIMng.updateCurLevel(),
                cc.vv.netMng.SaveNetData("AwardUI"),
                this.canClosebanner && cc.vv.sdk.navigateToBanner(!1)
            },
            levelUpBossLevel: function() {
                cc.vv.userData.bossLevelState = 0,
                cc.vv.userData.bossLevel++,
                cc.vv.userData.bossLevel > 20 && (cc.vv.userData.bossLevel = 1)
            },
            updateAllDot: function() {
                for (var t = this, e = Math.floor((cc.vv.userData.bossLevel - 1) / 5), n = (cc.vv.userData.bossLevel - 1) % 5 + 1, o = function(o) {
                    o < n ? (t.dotsSpriet[o].spriteFrame = t.dotSF[1],
                    t.icons[o].node.children[0].active = !0) : (t.dotsSpriet[o].spriteFrame = t.dotSF[0],
                    t.icons[o].node.children[0].active = !1);
                    var i = 5 * e + 1 + o;
                    cc.loader.loadRes("tex/boss/boss" + i, cc.SpriteFrame, function(e, n) {
                        t.node && (t.icons[o].spriteFrame = n)
                    })
                }, i = 0; i < this.icons.length; i++)
                    o(i)
            },
            playAnima: function() {
                var t = this;
                this.bone.node.stopAllActions(),
                this.bone.node.runAction(cc.sequence(cc.moveTo(.3, 0, 120).easing(cc.easeIn(.5)), cc.callFunc(function() {
                    t.bone.playAnimation("open", 1),
                    setTimeout(function() {
                        t.awardBox.active = !0,
                        cc.vv.sdk.navigateToBanner(!1),
                        t.normalY = cc.vv.sdk.bannerTopLine,
                        cc.vv.banner_jump ? (t.closeBtn.y = cc.vv.sdk.bannerCneterLine,
                        t.isJumpStart = !0,
                        t.scheduleOnce(function() {
                            t.isJumpStart = !1,
                            cc.vv.sdk.navigateToBanner(!0),
                            t.closeBtn.y = t.normalY
                        }, 2)) : cc.vv.sdk.navigateToBanner(!0),
                        t.bone.node.active = !1
                    }, 1250)
                })))
            },
            onAwardBtnClick: function() {
                if (!this.isJumpStart && !this.isAleadyGetAward) {
                    cc.vv.sdk.navigateToBanner(!1),
                    cc.vv.audioMgr.playSFX("BossListEpicLootSeq"),
                    this.isAleadyGetAward = !0,
                    this.progressBox.active = !1;
                    for (var t = 54, e = 54; e < 63; e++)
                        if (0 == cc.vv.userData.ballsState[e]) {
                            t = e,
                            cc.vv.userData.ballsState[e] = 1,
                            cc.vv.userData.ballSkinID = t,
                            cc.vv.game.useSkin(cc.vv.userData.ballSkinID),
                            cc.vv.UIMng.updateBulletCountLabel();
                            break
                        }
                    this.playAnima()
                }
            },
            onOkBtnClick: function() {
                this.isJumpStart || (cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy())
            },
            onCloseBtnClick: function() {
                this.isJumpStart || (cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy())
            },
            update: function(t) {
                this.isAleadyGetAward
            },
            onShareRecordeVideo: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    BottomAd: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "857c1nMGZhC84oDOxSJb2Yr", "BottomAd");
        var o = "TouchStart"
          , i = "TouchEnd"
          , c = "TouchIng";
        cc.Class({
            extends: cc.Component,
            properties: {
                scrollView: cc.ScrollView,
                bottonContent: cc.Node
            },
            closeBottomAb: function() {},
            onLoad: function() {
                cc.vv.bottomAd = this,
                Gameconfig.isTest ? this.node.active = !1 : (cc.vv.halfWidth / cc.vv.halfHeight < .56 ? this.node.height = 230 : this.node.height = 196,
                this.node.y = -471 - (cc.vv.halfHeight - 667),
                this.scrollView.node.on("touch-up", this.touchUp.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCANCEL.bind(this)),
                this.iconUrls = [],
                this.touchDir = -1,
                this.changeState(i),
                this.moveMinX = -(156 * this.bottonContent.children.length + 20 * (this.bottonContent.children.length - 1) + 40 - 724))
            },
            start: function() {},
            touchUp: function() {
                this.changeState(i)
            },
            touchStart: function() {
                this.changeState(o)
            },
            touchMove: function() {
                this.changeState(c)
            },
            touchEnd: function() {
                this.changeState(i)
            },
            touchCANCEL: function() {
                this.changeState(i)
            },
            changeState: function(t) {
                this.state = t
            },
            update: function(t) {
                switch (this.state) {
                case i:
                    this.bottonContent.x <= this.moveMinX ? this.touchDir = 1 : this.bottonContent.x >= 0 && (this.touchDir = -1),
                    this.bottonContent.x += this.touchDir * t * 70;
                    break;
                default:
                    this.bottonContent.x <= this.moveMinX ? this.bottonContent.x = this.moveMinX + 1 : this.bottonContent.x >= 0 && (this.bottonContent.x = -1)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Bullet: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c370bnoKG5Cdrk2KPzcRfjB", "Bullet");
        var o = 0
          , i = 1;
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite
            },
            onLoad: function() {
                this.bulletID = cc.vv.bulletID,
                cc.vv.bulletID++,
                this.rigidbody = this.getComponent(cc.RigidBody),
                this.state = o,
                this.existTime = 12,
                this.curExistTime = 0,
                this.isRecycle = !1,
                this.buletRotate = 0,
                this.isDie = !1,
                this.node.opacity = 255
            },
            shoot: function(t, e) {
                this.isDie = !1,
                this.node.opacity = 255;
                var n = Math.floor(3 * Math.random());
                cc.vv.curBallSF[n] && (this.icon.spriteFrame = cc.vv.curBallSF[n]),
                this.changeState(i),
                this.isRecycle = !1,
                this.rigidbody.type = cc.RigidBodyType.Dynamic,
                this.existTime = 12,
                this.curExistTime = 0,
                this.rigidbody.linearVelocity = this.rigidbody.linearVelocity.add(t.mul(e))
            },
            useBounce: function(t) {
                var e = this.rigidbody.linearVelocity.neg()
                  , n = e.signAngle(t);
                this.rigidbody.linearVelocity = e.rotate(2 * n).add(t)
            },
            addVelocity: function(t) {
                this.rigidbody.linearVelocity = this.rigidbody.linearVelocity.add(t)
            },
            setVelocity: function(t) {
                this.rigidbody.linearVelocity = t
            },
            rotateVelocity: function(t) {
                this.rigidbody.linearVelocity = t.mul(this.rigidbody.linearVelocity.mag())
            },
            setRigidbodyPos: function(t) {
                this.node.position = t
            },
            enterCup: function() {
                this.recycle()
            },
            die: function() {
                var t = this;
                if (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0])
                    cc.vv.audioMgr.playSFX("Saw1"),
                    cc.vv.UIMng.showBulletDie(this.node.position),
                    this.recycle();
                else {
                    if (this.isDie)
                        return;
                    this.isDie = !0,
                    this.node.stopAllActions(),
                    this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                        t.recycle()
                    })))
                }
            },
            updateExistTime: function() {
                this.curExistTime = 0
            },
            recycle: function() {
                this.isRecycle || (this.isRecycle = !0,
                this.changeState(o),
                this.rigidbody.linearVelocity = cc.Vec2.ZERO,
                this.rigidbody.type = cc.RigidBodyType.Kinematic,
                this.node.x = 1e3,
                cc.vv.game.bulletPool.push(this.node),
                cc.vv.game.state == GameState.Playing && cc.vv.game.checkIsGameOver())
            },
            changeState: function(t) {
                this.state != t && (this.state = t)
            },
            update: function(t) {
                if (!this.isRecycle)
                    switch (this.buletRotate = this.rigidbody.linearVelocity.mag() * t,
                    this.buletRotate > 10 && (this.buletRotate = 10),
                    this.rigidbody.linearVelocity.x > 0 ? this.node.angle -= this.buletRotate : this.node.angle += this.buletRotate,
                    cc.vv.game.state == GameState.GameOver && this.recycle(),
                    this.node.y < -860 && this.recycle(),
                    this.state) {
                    case o:
                        break;
                    case i:
                        this.curExistTime += t,
                        this.curExistTime >= this.existTime && this.die(!1)
                    }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Connon: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "85b73pET2ZKi6k8ujbvqHZ7", "Connon"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                bulletVelocity: 0,
                bulletCount: 20,
                auxiliaryDots: [cc.Node],
                bulletCountLabel: cc.Label,
                labelBox: cc.Node,
                gunHead: cc.Node,
                shootPoint: cc.Node,
                cannonRoot: cc.Node,
                icon: cc.Sprite,
                iconBottom: cc.Sprite,
                subline: cc.Node,
                c_target: cc.Node,
                yanBone: dragonBones.ArmatureDisplay
            },
            onLoad: function() {
                this._super(),
                this.curBulletCount = this.bulletCount,
                this.updateBulletCountLabel(),
                this.dir = cc.Vec2.UP,
                this.canPlayAnima = !0
            },
            start: function() {
                cc.vv.edit && (cc.vv.game.cannonComp.push(this),
                this.editMode())
            },
            setLineInit: function() {
                this.dir = this.getDir(),
                this.subline.position = this.startPos,
                this.vX = this.bulletVelocity * this.dir.x,
                this.vY = this.bulletVelocity * this.dir.y
            },
            getShootPosPosition: function() {
                return cc.vv.game.node.convertToNodeSpaceAR(this.shootPoint.parent.convertToWorldSpaceAR(this.shootPoint.position))
            },
            updateSkin: function() {
                cc.vv.cannonSF[0] && (this.icon.spriteFrame = cc.vv.cannonSF[0],
                this.iconBottom.spriteFrame = cc.vv.cannonSF[1])
            },
            createInit: function() {
                this._super(),
                this.node.angle = 0,
                this.curBulletCount = this.bulletCount,
                this.updateBulletCountLabel(),
                this.updateSkin(),
                this.subline.parent = cc.vv.game.doyBox,
                this.canPlayAnima = !0
            },
            getDir: function() {
                return -1 != this.parentID ? cc.Vec2.UP.rotate((this.gunHead.angle + this.node.angle + this.node.parent.angle) / 180 * Math.PI).normalize() : cc.Vec2.UP.rotate((this.gunHead.angle + this.node.angle) / 180 * Math.PI).normalize()
            },
            getShootPointPos: function() {
                return cc.vv.game.node.convertToNodeSpaceAR(this.shootPoint.parent.convertToWorldSpaceAR(this.shootPoint.position))
            },
            updateBulletCountLabel: function() {
                this.bulletCountLabel.string = this.curBulletCount
            },
            recycle: function() {
                this._super(),
                this.myTimer && clearTimeout(this.myTimer),
                this.subline.parent = this.node,
                this.subline.setSiblingIndex(0)
            },
            shootBullet: function() {
                var t = this;
                if (this.curBulletCount > 0) {
                    if (this.icon.node.stopAllActions(),
                    this.icon.node.runAction(cc.sequence(cc.scaleTo(.05, .95, 1.15), cc.scaleTo(.05, 1, .95), cc.scaleTo(.05, 1, 1))),
                    this.myTimer = setTimeout(function() {
                        t.curBulletCount--,
                        cc.vv.game.createBullet(t.getShootPointPos()).shoot(t.getDir(), t.bulletVelocity),
                        t.updateBulletCountLabel(),
                        t.myTimer = null
                    }, 80),
                    !this.canPlayAnima)
                        return;
                    this.canPlayAnima = !1,
                    this.yanBone.playAnimation("idle", 1),
                    this.yanBone.node.opacity = 255,
                    this.scheduleOnce(function() {
                        t.canPlayAnima = !0,
                        t.yanBone.node.opacity = 0
                    }, .3)
                }
            },
            update: function(t) {
                this._super(t),
                this.startPos = this.getShootPosPosition();
                for (var e = 0; e < this.subline.children.length; e++)
                    0 == e ? (this.subline.children[e].position.x = this.startPos.x,
                    this.subline.children[e].position.y = this.startPos.y) : (this.vY += -90,
                    this.subline.children[e].x = this.subline.children[e - 1].x + .1 * this.vX,
                    this.subline.children[e].y = this.subline.children[e - 1].y + .1 * this.vY),
                    e == this.subline.children.length - 1 && this.setLineInit()
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    CupContainer: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8061b7ypLhBB7KnoKcSi7F3", "CupContainer"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.bulletCompArr = [],
                this.cup = this.node.parent.getComponent("Cup")
            },
            onBeginContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                o && this.bulletCompArr.push(o)
            },
            update: function(t) {
                if (0 != this.node.x && (this.node.x = 0),
                -15 != this.node.y && (this.node.y = -15),
                this.bulletCompArr.length > 0) {
                    if (cc.vv.game.state == GameState.Idle)
                        return;
                    this.cup.key && this.cup.acquireKey(),
                    this.cup.showWaterEff(),
                    this.cup.curEnterCount++,
                    cc.vv.audioMgr.playSFX("EnterBucket1"),
                    this.cup.updateMaskProgress();
                    var e = this.bulletCompArr.pop();
                    if (cc.vv.game.isWin) {
                        var n = cc.v2(50 * Math.random() - 25, 50 * Math.random() - 25);
                        cc.vv.uiOtherCount++,
                        -1 != this.cup.parentID ? cc.vv.UIMng.showStarEff(this.node.position.add(this.node.parent.position).add(this.node.parent.parent.position).add(n), function() {
                            cc.vv.game.state != GameState.Idle && (cc.vv.otherCount++,
                            cc.vv.UIMng.updateStarMask(cc.vv.otherCount / 16))
                        }) : cc.vv.UIMng.showStarEff(this.node.position.add(n).add(this.node.parent.position), function() {
                            cc.vv.game.state != GameState.Idle && (cc.vv.otherCount++,
                            cc.vv.UIMng.updateStarMask(cc.vv.otherCount / 16))
                        })
                    }
                    e.enterCup(),
                    cc.vv.game.checkIsGameWin()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Cup: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7da32M2ijFAn6PrcpHJLJh3", "Cup"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Cup,
                    type: ElementType,
                    override: !0
                },
                key: !1,
                skinIndex: 0,
                capacity: 20,
                countLabel: cc.Label,
                light: cc.Node,
                numBG: cc.Node,
                fullND: cc.Node,
                keyPrefab: cc.Prefab,
                keyBox: cc.Node,
                mask: cc.Node,
                boneBox: cc.Node,
                waterEffPrefab: cc.Prefab,
                waterBone: dragonBones.ArmatureDisplay
            },
            onLoad: function() {
                this.isFull = !1,
                this.curEnterCount = 0,
                cc.vv.otherCount = 0,
                cc.vv.uiOtherCount = 0,
                this.keyComp = null,
                this.waterEffPool = [],
                this.curTime = 0,
                this.unUseEffTime = .15,
                this.canUseEff = !0
            },
            showWaterEff: function() {
                var t = this;
                if (this.canUseEff) {
                    this.canUseEff = !1;
                    var e = null
                      , n = null;
                    this.waterEffPool.length > 0 ? (e = this.waterEffPool.pop(),
                    n = e.node) : ((n = cc.instantiate(this.waterEffPrefab)).parent = this.boneBox,
                    e = n.getComponent(dragonBones.ArmatureDisplay)),
                    n.opacity = 255,
                    n.position = cc.v2(0, this.mask.height - 10),
                    e.playAnimation("idle", 1),
                    this.scheduleOnce(function() {
                        n.opacity = 0,
                        t.waterEffPool.push(e)
                    }, .5)
                }
            },
            updateMaskProgress: function() {
                var t = this.curEnterCount / this.capacity
                  , e = 0;
                t > 1 ? (t = 1,
                this.waterBone.node.opacity = 0,
                e = 10) : this.waterBone.node.opacity = 255,
                this.mask.height = 10 + 65 * t + e,
                this.waterBone.node.y = this.mask.height - 42,
                this.waterBone.node.scaleX = .15 * t + .9,
                this.waterBone.node.scaleY = .15 * t + .9
            },
            doLightAnima: function() {
                this.light && (this.numBG.opacity = 0,
                this.fullND.opacity = 255,
                this.light.opacity = 255,
                this.light.stopAllActions(),
                this.light.runAction(cc.repeatForever(cc.rotateBy(1, 60))))
            },
            stopLightAnima: function() {
                this.light && (this.numBG.opacity = 255,
                this.fullND.opacity = 0,
                this.light.opacity = 0,
                this.light.stopAllActions())
            },
            start: function() {
                cc.vv.edit && this.editMode()
            },
            updateEnterCupCountLabel: function() {
                this.curEnterCount >= this.capacity && (this.isFull || (cc.vv.audioMgr.playSFX("FillComplete"),
                cc.vv.UIMng.showCaiDai(cc.vv.UIMng.effBox.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.position)))),
                this.isFull = !0,
                this.doLightAnima()),
                this.curEnterCount > this.capacity && (this.curEnterCount = this.capacity),
                this.countLabel.string = this.curEnterCount + "/" + this.capacity
            },
            clearKey: function() {
                this.keyComp && (this.keyComp.node.destroy(),
                this.keyComp = null)
            },
            createKey: function() {
                var t = cc.instantiate(this.keyPrefab);
                t.parent = this.keyBox,
                t.position = cc.v2();
                var e = t.getComponent("Key");
                return e.init(this),
                e
            },
            recycle: function() {
                this._super(),
                this.clearKey()
            },
            acquireKey: function() {
                this.key = !1,
                cc.vv.audioMgr.playSFX("KeyCollect"),
                cc.vv.userData.keyCount++,
                cc.vv.userData.keyCount >= 3 && (cc.vv.userData.keyCount = 3),
                cc.vv.userData.keyLevel = cc.vv.userData.level,
                this.keyComp && (this.keyComp.doAnima(),
                this.keyComp = null),
                cc.vv.netMng.SaveNetData("acquireKey")
            },
            initWaterEff: function() {
                this.waterEffPool.length = 0;
                for (var t = 0; t < this.boneBox.children.length; t++)
                    this.boneBox.children[t].opacity = 0,
                    this.waterEffPool.push(this.boneBox.children[t].getComponent(dragonBones.ArmatureDisplay));
                this.canUseEff = !0,
                this.curTime = 0
            },
            createInit: function() {
                if (this._super(),
                this.stopLightAnima(),
                cc.vv.userData.keyLevel == cc.vv.userData.level && (this.key = !1),
                this.key)
                    this.keyComp = this.createKey();
                else if (this.keyBox.children.length > 0)
                    for (var t = this.keyBox.children.length, e = 0; e < t; e++)
                        this.keyBox.children[e].destroy();
                this.curEnterCount = 0,
                this.isFull = !1,
                this.countLabel.string = this.curEnterCount + "/" + this.capacity,
                cc.vv.otherCount = 0,
                cc.vv.uiOtherCount = 0,
                this.updateMaskProgress(),
                this.initWaterEff()
            },
            moveRigidbodyPos: function() {
                this.allCollider[0].node.position = cc.v2(-41.3, -1.3)
            },
            update: function(t) {
                this._super(t),
                this.canUseEff || (this.curTime += t,
                this.curTime >= this.unUseEffTime && (this.curTime = 0,
                this.canUseEff = !0))
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    CustomSprite: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6ddd6iPRdFHuoOr7BM20+th", "CustomSprite"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Edit: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1f388SFC/tB3pDI5e1Qioen", "Edit"),
        cc.Class({
            extends: cc.Component,
            properties: {
                level: 1
            },
            onLoad: function() {
                cc.vv.edit = this,
                this.TouchBox = cc.find("TouchBox", cc.vv.game.node),
                this.ElementBox = cc.find("ElementBox", cc.vv.game.node),
                this.DotBox = cc.find("DotBox", cc.vv.game.node),
                this.BulletBox = cc.find("BulletBox", cc.vv.game.node),
                this.CupBox = cc.find("CupBox", cc.vv.game.node),
                this.ConnonBox = cc.find("ConnonBox", cc.vv.game.node),
                this.ConnonComps = [],
                this.CupComps = [],
                this.Element_BossComps = [],
                this.Element_CircleComps = [],
                this.Element_FanComps = [],
                this.Element_KnifeComps = [],
                this.Element_RectangleComps = [],
                this.Element_SpaceComps = [],
                this.Element_SpineComps = [],
                this.Element_TrampolineComps = [],
                this.RotateToolComps = [],
                this.SliderToolComps = [],
                this.bindArr("Connon", this.ConnonComps, this.ConnonBox),
                this.bindArr("Cup", this.CupComps, this.CupBox),
                this.bindArr("Element_Boss", this.Element_BossComps, this.ElementBox),
                this.bindArr("Element_Circle", this.Element_CircleComps, this.ElementBox),
                this.bindArr("Element_Fan", this.Element_FanComps, this.ElementBox),
                this.bindArr("Element_Knife", this.Element_KnifeComps, this.ElementBox),
                this.bindArr("Element_Rectangle", this.Element_RectangleComps, this.ElementBox),
                this.bindArr("Element_Space", this.Element_SpaceComps, this.ElementBox),
                this.bindArr("Element_Spine", this.Element_SpineComps, this.ElementBox),
                this.bindArr("Element_Trampoline", this.Element_TrampolineComps, this.ElementBox),
                this.bindArr("RotateTool", this.RotateToolComps, this.TouchBox),
                this.bindArr("SliderTool", this.SliderToolComps, this.TouchBox)
            },
            bindArr: function(t, e, n) {
                for (var o = null, i = 0; i < n.children.length; i++)
                    (o = n.children[i].getComponent(t)) && e.push(o)
            },
            start: function() {
                this.saveGameJson()
            },
            eData: function(t, e) {
                return e.i++,
                t[e.i]
            },
            getMotionData: function(t) {
                if (!t)
                    return 0;
                var e = [];
                switch (t.motionType) {
                case MotionType.Null:
                    e = 0;
                    break;
                case MotionType.Translation:
                    e = [t.motionType, this.fixNum(t.t_startPos.x), this.fixNum(t.t_startPos.y), this.fixNum(t.t_endPos.x), this.fixNum(t.t_endPos.y), t.t_moveToEndPosTime, t.t_moveToStartPosTime, t.t_startDelayTime, t.t_endDelayTime];
                    break;
                case MotionType.RotateByPos:
                    e = [t.motionType, this.fixNum(t.r_circleCenter.x), this.fixNum(t.r_circleCenter.y), t.r_roateAngle, t.r_rotateTime, t.r_delayTime];
                    break;
                case MotionType.RotateBySelf:
                    e = [t.motionType, t.rs_isPingPong, t.rs_rotateAngle, t.rs_rotateTime, t.rs_delayTime]
                }
                return e
            },
            saveGameJson: function() {
                for (var t, e = {
                    Level: this.level,
                    Bg: 0,
                    Gravity: 3,
                    ElementBox: [],
                    CustomElement: {
                        prefabName: "54_pipe"
                    }
                }, n = null, o = 0, i = [], c = 0; c < this.ConnonComps.length; c++)
                    n = this.ConnonComps[c],
                    o = this.ConnonComps[c].getComponent("Motion"),
                    i.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.gunHead.angle), this.fixNum(n.cannonRoot.angle), this.fixNum(n.labelBox.x), this.fixNum(n.labelBox.y), n.bulletVelocity, n.bulletCount],
                        motionData: this.getMotionData(o)
                    });
                for (var a = [], s = 0; s < this.CupComps.length; s++)
                    n = this.CupComps[s],
                    o = this.CupComps[s].getComponent("Motion"),
                    a.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), n.key, n.skinIndex, n.capacity],
                        motionData: this.getMotionData(o)
                    });
                for (var r = [], l = 0; l < this.Element_BossComps.length; l++)
                    n = this.Element_BossComps[l],
                    o = this.Element_BossComps[l].getComponent("Motion"),
                    r.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), n.phyBoxCollider.offset.x, n.phyBoxCollider.offset.y, n.phyBoxCollider.size.width, n.phyBoxCollider.size.height, n.icon.spriteFrame.name, n.capacity, n.icon.node.x, n.icon.node.y],
                        motionData: this.getMotionData(o)
                    });
                for (var h = [], u = 0; u < this.Element_CircleComps.length; u++)
                    n = this.Element_CircleComps[u],
                    o = this.Element_CircleComps[u].getComponent("Motion"),
                    h.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.node.height), this.fixNum(n.node.width), n.icon.spriteFrame.name, n.phyCircleCollider.radius],
                        motionData: this.getMotionData(o)
                    });
                for (var v = [], d = 0; d < this.Element_FanComps.length; d++)
                    n = this.Element_FanComps[d],
                    o = this.Element_FanComps[d].getComponent("Motion"),
                    v.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.node.angle), n.skinIndex, n.funAddVelocity, n.phyBoxCollider.offset.x, n.phyBoxCollider.offset.y, n.phyBoxCollider.size.width, n.phyBoxCollider.size.height],
                        motionData: this.getMotionData(o)
                    });
                for (var p = [], m = 0; m < this.Element_KnifeComps.length; m++)
                    n = this.Element_KnifeComps[m],
                    o = this.Element_KnifeComps[m].getComponent("Motion"),
                    p.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY)],
                        motionData: this.getMotionData(o)
                    });
                for (var f = [], g = 0; g < this.Element_RectangleComps.length; g++)
                    n = this.Element_RectangleComps[g],
                    o = this.Element_RectangleComps[g].getComponent("Motion"),
                    f.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.node.height), this.fixNum(n.node.width), n.phyBoxCollider.offset.x, n.phyBoxCollider.offset.y, n.phyBoxCollider.size.width, n.phyBoxCollider.size.height, n.icon.spriteFrame.name, this.fixNum(n.node.angle)],
                        motionData: this.getMotionData(o)
                    });
                for (var y = [], C = 0; C < this.Element_SpaceComps.length; C++)
                    n = this.Element_SpaceComps[C],
                    o = this.Element_SpaceComps[C].getComponent("Motion"),
                    y.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.node.angle), n.spaceID],
                        motionData: this.getMotionData(o)
                    });
                for (var b = [], S = 0; S < this.Element_SpineComps.length; S++)
                    n = this.Element_SpineComps[S],
                    o = this.Element_SpineComps[S].getComponent("Motion"),
                    b.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.node.angle)],
                        motionData: this.getMotionData(o)
                    });
                for (var B = [], T = 0; T < this.Element_TrampolineComps.length; T++)
                    n = this.Element_TrampolineComps[T],
                    o = this.Element_TrampolineComps[T].getComponent("Motion"),
                    B.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.scaleX), this.fixNum(n.node.scaleY), this.fixNum(n.node.angle), n.springVelocity],
                        motionData: this.getMotionData(o)
                    });
                for (var D = [], k = 0; k < this.RotateToolComps.length; k++)
                    n = this.RotateToolComps[k],
                    o = this.RotateToolComps[k].getComponent("Motion"),
                    D.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), n.isCentre, n.rotateSpeed, n.rotateDir],
                        motionData: this.getMotionData(o)
                    });
                for (var I = [], A = 0; A < this.SliderToolComps.length; A++)
                    n = this.SliderToolComps[A],
                    o = this.SliderToolComps[A].getComponent("Motion"),
                    I.push({
                        compData: [n.elementType, n.ElementID, n.isParent ? 1 : 0, n.parentID, n.rotateToolID, n.sliderToolID, this.fixNum(n.node.x), this.fixNum(n.node.y), this.fixNum(n.node.height), this.fixNum(n.node.width), this.fixNum(n.node.angle), n.sliider.progress],
                        motionData: this.getMotionData(o)
                    });
                t = [].concat(i, a, r, h, v, p, f, y, b, B, D, I),
                e.ElementBox = t,
                this.gameJosn = e.ElementBox
            },
            onJsonBtnClick: function() {
                console.log(JSON.stringify(this.gameJosn))
            },
            fixNum: function(t) {
                return Number(t.toFixed(2))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ElementBasics: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3d72dpV7ohJMZUalbopkIlr", "ElementBasics"),
        window.ElementType = cc.Enum({
            Cup: 0,
            Element_Boss: 1,
            Element_Circle: 2,
            Element_Fan: 3,
            Element_Knife: 4,
            Element_Rectangle: 5,
            Element_Space: 6,
            Element_Spine: 7,
            Element_Trampoline: 8,
            RotateTool: 9,
            SliderTool: 10,
            Cannon: 11
        }),
        cc.Class({
            extends: cc.Component,
            properties: {
                elementType: {
                    default: ElementType.Element_Rectangle,
                    type: ElementType
                },
                ElementID: {
                    default: -1,
                    type: cc.Integer
                },
                isParent: !1,
                parentID: -1,
                rotateToolID: -1,
                sliderToolID: -1,
                isRecycle: {
                    default: !1,
                    visible: !1
                },
                createPos: {
                    default: cc.v2(),
                    visible: !1
                },
                isFindParentSuccee: {
                    default: !1,
                    visible: !1
                },
                allCollider: [cc.PhysicsCollider]
            },
            onLoad: function() {
                this.motionComp = this.getComponent("Motion")
            },
            closeAllCollider: function() {
                for (var t = 0; t < this.allCollider.length; t++)
                    this.allCollider[t].enabled = !1
            },
            openAllCollider: function() {
                for (var t = 0; t < this.allCollider.length; t++)
                    this.allCollider[t].enabled = !0
            },
            switchV2: function(t) {
                return cc.v2(t.x, t.y)
            },
            createInit: function() {
                this.recyclePool = cc.vv.game.getPoolByElementType(this.elementType),
                this.findParent(),
                this.findRotateTool(),
                this.findSliderTool(),
                this.motionComp && this.motionComp.startMotion()
            },
            getDir: function() {
                return -1 != this.parentID ? cc.Vec2.UP.rotate((this.node.angle + this.node.parent.angle) / 180 * Math.PI).normalize() : cc.Vec2.UP.rotate(this.node.angle / 180 * Math.PI).normalize()
            },
            getDirPos: function(t) {
                return this.node.position.sub(t.position)
            },
            saveCreateData: function(t) {
                this.elementType == ElementType.Cannon && (this.node.angle = 0),
                this.createPos = this.switchV2(this.getDirPos(t)).rotate(-t.angle / 180 * Math.PI),
                this.createAngle = this.node.angle - t.angle
            },
            useCreateData: function() {
                this.node.position = this.createPos,
                this.node.angle = this.createAngle
            },
            editMode: function() {
                var t = this;
                cc.vv.edit && (this.isParent && cc.vv.game.parentComp.push(this),
                setTimeout(function() {
                    t.findParent(),
                    t.findRotateTool(),
                    t.findSliderTool(),
                    t.motionComp && t.motionComp.startMotion()
                }, 50))
            },
            findParent: function() {
                if (-1 != this.parentID)
                    for (var t = 0; t < cc.vv.game.parentComp.length; t++)
                        if (cc.vv.game.parentComp[t].ElementID == this.parentID) {
                            this.saveCreateData(cc.vv.game.parentComp[t].node),
                            this.node.parent = cc.vv.game.parentComp[t].node,
                            this.isFindParentSuccee = !0;
                            break
                        }
            },
            recycle: function() {
                this.isFindParentSuccee = !1,
                this.motionComp && this.motionComp.stopMotion(),
                this.node.active = !1,
                this.recyclePool.push(this)
            },
            _findCompByArr: function(t) {
                for (var e = 0; e < t.length; e++)
                    t[e].ElementID,
                    this.parentID
            },
            findRotateTool: function() {
                if (-1 != this.rotateToolID)
                    for (var t = 0; t < cc.vv.game.rotateToolComp.length; t++)
                        if (cc.vv.game.rotateToolComp[t].ElementID == this.rotateToolID) {
                            cc.vv.game.rotateToolComp[t].setTarget(this);
                            break
                        }
            },
            findSliderTool: function() {
                if (-1 != this.sliderToolID)
                    for (var t = 0; t < cc.vv.game.sliderToolComp.length; t++)
                        if (cc.vv.game.sliderToolComp[t].ElementID == this.sliderToolID) {
                            cc.vv.game.sliderToolComp[t].setTarget(this);
                            break
                        }
            },
            update: function() {
                -1 != this.parentID && this.isFindParentSuccee && this.motionComp.motionType == MotionType.Null && this.useCreateData()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ElementFactory: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bbfb6SxDPlFIoxkeMw3LhzP", "ElementFactory"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touchBox: cc.Node,
                elementBox: cc.Node,
                cupBox: cc.Node,
                connonBox: cc.Node,
                bossBox: cc.Node,
                recycleBox: cc.Node,
                elementPrefab: [cc.Prefab]
            },
            onLoad: function() {
                cc.vv.elementFactory = this
            },
            start: function() {},
            recycleAll: function() {
                this.recycleByCompArr(cc.vv.game.cannonComp),
                this.recycleByCompArr(cc.vv.game.cupComp),
                this.recycleByCompArr(cc.vv.game.circleComp),
                this.recycleByCompArr(cc.vv.game.fanComp),
                this.recycleByCompArr(cc.vv.game.knifeComp),
                this.recycleByCompArr(cc.vv.game.rectangleComp),
                this.recycleByCompArr(cc.vv.game.spaceComp),
                this.recycleByCompArr(cc.vv.game.spineComp),
                this.recycleByCompArr(cc.vv.game.trampolineComp),
                this.recycleByCompArr(cc.vv.game.rotateToolComp),
                this.recycleByCompArr(cc.vv.game.sliderToolComp),
                this.recycleByCompArr(cc.vv.game.bossComp),
                cc.vv.game.parentComp.length = 0,
                cc.vv.game.deleteAllCustomND()
            },
            recycleByCompArr: function(t) {
                for (var e = t.length, n = 0; n < e; n++)
                    t.pop().recycle()
            },
            setElementBasicsByType: function(t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , o = null;
                switch (e) {
                case ElementType.Cannon:
                    o = t.getComponent("Connon"),
                    t.parent = this.connonBox;
                    break;
                case ElementType.Cup:
                    o = t.getComponent("Cup"),
                    t.parent = this.cupBox;
                    break;
                case ElementType.Element_Boss:
                    o = t.getComponent("Element_Boss"),
                    t.parent = this.bossBox;
                    break;
                case ElementType.Element_Circle:
                    o = t.getComponent("Element_Circle"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.Element_Fan:
                    o = t.getComponent("Element_Fan"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.Element_Knife:
                    o = t.getComponent("Element_Knife"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.Element_Rectangle:
                    o = t.getComponent("Element_Rectangle"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.Element_Space:
                    o = t.getComponent("Element_Space"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.Element_Spine:
                    o = t.getComponent("Element_Spine"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.Element_Trampoline:
                    o = t.getComponent("Element_Trampoline"),
                    t.parent = this.elementBox;
                    break;
                case ElementType.RotateTool:
                    o = t.getComponent("RotateTool"),
                    t.parent = this.touchBox;
                    break;
                case ElementType.SliderTool:
                    o = t.getComponent("SliderTool"),
                    t.parent = this.touchBox
                }
                return cc.vv.game.getCompArrByElementType(e).push(o),
                n || (t.active = !0),
                o
            },
            createElementByData: function(t, e) {
                var n = null
                  , o = t.compData
                  , i = t.motionData
                  , c = cc.vv.game.getPoolByElementType(o[0])
                  , a = null;
                c && c.length > 0 ? (n = c.pop().node,
                a = this.setElementBasicsByType(n, o[0], !1)) : (n = cc.instantiate(this.elementPrefab[o[0]]),
                a = this.setElementBasicsByType(n, o[0])),
                "number" == typeof e && n.setSiblingIndex(e),
                o[2] && cc.vv.game.parentComp.push(a),
                this.setElementData(a, o);
                var s = n.getComponent("Motion");
                return s && (i[0] ? this.setMotionData(s, i) : (s.motionType = MotionType.Null,
                s.stopMotion()),
                s.createInit()),
                a
            },
            setMotionData: function(t, e) {
                var n = {
                    i: 0
                };
                switch (e[0]) {
                case 0:
                    t.motionType = MotionType.Null;
                    break;
                case 1:
                    t.motionType = MotionType.Translation;
                    break;
                case 2:
                    t.motionType = MotionType.RotateByPos;
                    break;
                case 3:
                    t.motionType = MotionType.RotateBySelf
                }
                switch (t.motionType) {
                case MotionType.Null:
                    break;
                case MotionType.Translation:
                    t.t_startPos.x = this.eData(e, n),
                    t.t_startPos.y = this.eData(e, n),
                    t.t_endPos.x = this.eData(e, n),
                    t.t_endPos.y = this.eData(e, n),
                    t.t_moveToEndPosTime = this.eData(e, n),
                    t.t_moveToStartPosTime = this.eData(e, n),
                    t.t_startDelayTime = this.eData(e, n),
                    t.t_endDelayTime = this.eData(e, n);
                    break;
                case MotionType.RotateByPos:
                    t.r_circleCenter.x = this.eData(e, n),
                    t.r_circleCenter.y = this.eData(e, n),
                    t.r_roateAngle = this.eData(e, n),
                    t.r_rotateTime = this.eData(e, n),
                    t.r_delayTime = this.eData(e, n);
                    break;
                case MotionType.RotateBySelf:
                    t.rs_isPingPong = this.eData(e, n),
                    t.rs_rotateAngle = this.eData(e, n),
                    t.rs_rotateTime = this.eData(e, n),
                    t.rs_delayTime = this.eData(e, n)
                }
            },
            eData: function(t, e) {
                return e.i++,
                t[e.i]
            },
            setElementData: function(t, e) {
                var n = {
                    i: 0
                };
                t.ElementID = this.eData(e, n),
                t.isParent = this.eData(e, n),
                t.parentID = this.eData(e, n),
                t.rotateToolID = this.eData(e, n),
                t.sliderToolID = this.eData(e, n);
                var o = this.eData(e, n)
                  , i = this.eData(e, n);
                switch (t.node.position = cc.v2(o, i),
                e[0]) {
                case ElementType.Cannon:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.gunHead.angle = this.eData(e, n),
                    t.cannonRoot.angle = this.eData(e, n),
                    t.labelBox.x = this.eData(e, n),
                    t.labelBox.y = this.eData(e, n),
                    t.bulletVelocity = this.eData(e, n),
                    t.bulletCount = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Cup:
                    t.closeAllCollider(),
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.key = this.eData(e, n),
                    t.skinIndex = this.eData(e, n),
                    t.capacity = this.eData(e, n),
                    t.openAllCollider(),
                    t.moveRigidbodyPos();
                    break;
                case ElementType.Element_Boss:
                    t.phyBoxCollider.offset.x = this.eData(e, n),
                    t.phyBoxCollider.offset.y = this.eData(e, n),
                    t.phyBoxCollider.size.width = this.eData(e, n),
                    t.phyBoxCollider.size.height = this.eData(e, n);
                    this.eData(e, n);
                    t.capacity = this.eData(e, n),
                    t.icon.node.x = this.eData(e, n),
                    t.icon.node.y = this.eData(e, n),
                    cc.loader.loadRes("tex/boss/boss" + cc.vv.userData.bossLevel, cc.SpriteFrame, function(e, n) {
                        t.icon.spriteFrame = n
                    }),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Circle:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.node.height = this.eData(e, n),
                    t.node.width = this.eData(e, n);
                    var c = this.eData(e, n);
                    cc.loader.loadRes("tex/circle/" + c, cc.SpriteFrame, function(e, n) {
                        t.icon.spriteFrame = n
                    }),
                    t.phyCircleCollider.radius = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Fan:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.node.angle = this.eData(e, n),
                    t.skinIndex = this.eData(e, n),
                    t.funAddVelocity = this.eData(e, n),
                    t.phyBoxCollider.offset.x = this.eData(e, n),
                    t.phyBoxCollider.offset.y = this.eData(e, n),
                    t.phyBoxCollider.size.width = this.eData(e, n),
                    t.phyBoxCollider.size.height = this.eData(e, n),
                    t.moveRigidbodyPos(),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Knife:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Rectangle:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.node.height = this.eData(e, n),
                    t.node.width = this.eData(e, n),
                    t.phyBoxCollider.offset.x = this.eData(e, n),
                    t.phyBoxCollider.offset.y = this.eData(e, n),
                    t.phyBoxCollider.size.width = this.eData(e, n),
                    t.phyBoxCollider.size.height = this.eData(e, n);
                    var a = this.eData(e, n);
                    cc.loader.loadRes("tex/pillar/" + a, cc.SpriteFrame, function(e, n) {
                        t.icon.spriteFrame = n
                    }),
                    t.node.angle = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Space:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.node.angle = this.eData(e, n),
                    t.spaceID = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Spine:
                    t.closeAllCollider(),
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.node.angle = this.eData(e, n),
                    t.openAllCollider();
                    break;
                case ElementType.Element_Trampoline:
                    t.node.scaleX = this.eData(e, n),
                    t.node.scaleY = this.eData(e, n),
                    t.node.angle = this.eData(e, n),
                    t.springVelocity = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.RotateTool:
                    t.isCentre = this.eData(e, n),
                    t.rotateSpeed = this.eData(e, n),
                    t.rotateDir = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider();
                    break;
                case ElementType.SliderTool:
                    t.node.height = this.eData(e, n),
                    t.node.width = this.eData(e, n),
                    t.node.angle = this.eData(e, n),
                    t.sliider.progress = this.eData(e, n),
                    t.closeAllCollider(),
                    t.openAllCollider()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Element_Boss: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fbd8fg2SSJLfKF8i5BnfBGe", "Element_Boss"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Boss,
                    type: ElementType,
                    override: !0
                },
                capacity: 20,
                phyBoxCollider: cc.PhysicsBoxCollider,
                bloodMask: cc.Node,
                icon: cc.Sprite,
                bloodBox: cc.Node,
                effBone: dragonBones.ArmatureDisplay
            },
            onLoad: function() {
                this._super(),
                this.bulletCompArr = [],
                this.curHp = 20,
                this.isDie = !1,
                this.material = this.icon.getMaterial(0),
                this.hitTime = 0,
                this.dieTime = 0
            },
            start: function() {
                cc.vv.edit && (cc.vv.game.bossComp.push(this),
                this.createInit(),
                this.editMode())
            },
            onBeginContact: function(t, e, n) {
                if (!this.isDie) {
                    var o = n.node.getComponent("Bullet");
                    o && this.bulletCompArr.push(o)
                }
            },
            createInit: function() {
                this._super(),
                this.curHp = this.capacity,
                this.updateBlood(),
                this.isDie = !1,
                this.doIdleAnima(),
                this.bloodBox.opacity = 255,
                this.icon.scaleX = 1,
                this.icon.scaleY = 1
            },
            updateBlood: function() {
                this.bloodMask.width = 110 * this.curHp / this.capacity
            },
            recycle: function() {
                cc.vv.game.deleteCompFromCompArr(this),
                this.node.destroy()
            },
            update: function(t) {
                if (this._super(t),
                -1 != this.parentID && this.node.getSiblingIndex() != this.node.parent.children.length - 1 && this.node.setSiblingIndex(this.node.parent.children.length - 1),
                0 != this.dieTime && (this.dieTime -= t,
                this.dieTime <= 0 && (this.dieTime = 0)),
                !this.isDie) {
                    if (this.bulletCompArr.length > 0) {
                        if (cc.vv.game.state == GameState.Idle)
                            return;
                        if (this.bulletCompArr.pop().die(),
                        this.doHitAnima(.75),
                        this.curHp--,
                        this.curHp < 0 && (this.curHp = 0,
                        this.die()),
                        this.updateBlood(),
                        cc.vv.edit)
                            return;
                        cc.vv.game.checkIsGameWinBoss()
                    }
                    0 != this.hitTime && (this.hitTime -= 3 * t,
                    this.hitTime <= 0 && (this.hitTime = 0))
                }
            },
            doIdleAnima: function() {
                this.icon.node.stopAllActions(),
                this.icon.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.35, .97, 1.03), cc.scaleTo(.35, 1.03, .97))))
            },
            doHitAnima: function(t) {
                var e = this;
                this.hitTime = t,
                this.icon.node.stopAllActions(),
                this.icon.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.05, .95, 1.05), cc.scaleTo(.05, 1, 1), cc.callFunc(function() {
                    e.doIdleAnima()
                }))))
            },
            doDieAnima: function() {
                var t = this;
                this.effBone.node.active = !0,
                this.effBone.playAnimation("idle", 1),
                this.dieTime = 1,
                this.icon.node.stopAllActions(),
                this.icon.node.stopAllActions(),
                this.icon.node.scaleX = 1,
                this.icon.node.scaleY = 1,
                this.icon.node.runAction(cc.repeatForever(cc.spawn(cc.fadeOut(1).easing(cc.easeOut(1)), cc.sequence(cc.scaleTo(.3, 1.3, 1.3), cc.scaleTo(.7, 1.5, 1.5).easing(cc.easeIn(.3)), cc.callFunc(function() {
                    t.node.destroy()
                }))))),
                this.bloodBox.stopAllActions(),
                this.bloodBox.runAction(cc.fadeOut(.2))
            },
            die: function() {
                this.isDie || (cc.vv.audioMgr.playSFX("BossEpicKill"),
                cc.vv.game.deleteCompFromCompArr(this),
                this.doDieAnima(),
                this.isDie = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Circle: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "53ac8tHMptOCooYnv0VgjQl", "Element_Circle"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Circle,
                    type: ElementType,
                    override: !0
                },
                phyCircleCollider: cc.PhysicsCircleCollider,
                icon: cc.Sprite
            },
            onLoad: function() {
                this._super()
            },
            start: function() {
                cc.vv.edit && this.editMode()
            },
            onBeginContact: function(t, e, n) {
                n.node.getComponent("Bullet") && cc.vv.audioMgr.playCollider("Glass01")
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Custom: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "393efaR5y1Nm6FPy0UqTpNr", "Element_Custom"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                sprites: []
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Fan: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "51a540vPRdABLk8otahFPUA", "Element_Fan"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Fan,
                    type: ElementType,
                    override: !0
                },
                skinIndex: 0,
                funAddVelocity: 100,
                phyBoxCollider: cc.PhysicsBoxCollider
            },
            onLoad: function() {
                this._super()
            },
            onDestroy: function() {
                this.fanArea = null
            },
            start: function() {
                cc.vv.edit && this.editMode()
            },
            moveRigidbodyPos: function() {
                this.phyBoxCollider.node.position = cc.v2(50, 0),
                this.phyBoxCollider.node.angle = 0
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Knife: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "07c10CgNGdOk6KqtKbeoBLe", "Element_Knife"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Knife,
                    type: ElementType,
                    override: !0
                },
                kinfe: cc.Node
            },
            onLoad: function() {
                this._super(),
                this.bulletCompArr = []
            },
            start: function() {
                cc.vv.edit && (this.createInit(),
                this.editMode())
            },
            createInit: function() {
                this._super(),
                this.kinfe.stopAllActions(),
                this.kinfe.runAction(cc.repeatForever(cc.rotateBy(1, -360)))
            },
            onDestroy: function() {
                this.kinfe.stopAllActions()
            },
            onBeginContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                o && this.bulletCompArr.push(o)
            },
            update: function(t) {
                (this._super(t),
                this.bulletCompArr.length > 0) && this.bulletCompArr.pop().die()
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Rectangle: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e0a20njnN9Azrzu1wRyTEkg", "Element_Rectangle"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Rectangle,
                    type: ElementType,
                    override: !0
                },
                phyBoxCollider: cc.PhysicsBoxCollider,
                icon: cc.Sprite
            },
            onLoad: function() {
                this._super()
            },
            start: function() {
                cc.vv.edit && this.editMode()
            },
            onBeginContact: function(t, e, n) {
                n.node.getComponent("Bullet") && cc.vv.audioMgr.playCollider("Glass01")
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Space: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "56d07fkYFlDD5G8+wd0ENNa", "Element_Space"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Space,
                    type: ElementType,
                    override: !0
                },
                spaceID: -1,
                bone: dragonBones.ArmatureDisplay
            },
            onLoad: function() {
                this._super(),
                this.bulletCompArr = [],
                this.unTriggerbulletIds = []
            },
            start: function() {
                var t = this;
                cc.vv.edit && (cc.vv.game.spaceComp.push(this),
                this.editMode(),
                setTimeout(function() {
                    t.findSpace()
                }, 100))
            },
            setTarget: function(t) {
                this.target = t
            },
            findSpace: function() {
                if (-1 != this.spaceID)
                    for (var t = 0; t < cc.vv.game.spaceComp.length; t++)
                        if (cc.vv.game.spaceComp[t].ElementID == this.spaceID) {
                            this.setTarget(cc.vv.game.spaceComp[t]);
                            break
                        }
            },
            createInit: function() {
                this._super(),
                this.findSpace(),
                this.bulletCompArr.length = 0,
                this.unTriggerbulletIds.length = 0,
                -1 != this.spaceID ? this.bone.playAnimation("goin", 0) : this.bone.playAnimation("comeout", 0)
            },
            recycle: function() {
                this._super(),
                this.target = null
            },
            setDontTriggerColliderBullet: function(t) {
                this.unTriggerbulletIds.push(t)
            },
            switchV2: function(t) {
                return cc.v2(t.x, t.y)
            },
            getBulletPos: function(t) {
                var e = this.switchV2(this.getDir())
                  , n = Math.PI / 2 - e.signAngle(t)
                  , o = t.mag() * Math.cos(n);
                return t = -1 != this.parentID ? t.rotate(n).normalize().mul(o).add(this.switchV2(cc.vv.game.node.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.position)))) : t.rotate(n).normalize().mul(o).add(this.switchV2(this.node.position))
            },
            onBeginContact: function(t, e, n) {
                if (this.target && !this.target.isRecycle) {
                    var o = n.node.getComponent("Bullet");
                    if (o) {
                        for (var i = 0; i < this.unTriggerbulletIds.length; i++)
                            if (this.unTriggerbulletIds[i] == o.bulletID)
                                return;
                        this.target.setDontTriggerColliderBullet(o.bulletID),
                        this.bulletCompArr.push(o)
                    }
                }
            },
            onEndContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                if (o)
                    for (var i = 0; i < this.unTriggerbulletIds.length; i++)
                        if (this.unTriggerbulletIds[i] == o.bulletID) {
                            1 == this.unTriggerbulletIds.length ? this.unTriggerbulletIds.length = 0 : (this.unTriggerbulletIds[i] = this.unTriggerbulletIds[this.unTriggerbulletIds.length - 1],
                            this.unTriggerbulletIds.pop());
                            break
                        }
            },
            update: function(t) {
                if (this._super(t),
                this.bulletCompArr.length > 0 && !this.target.isRecycle) {
                    var e = this.bulletCompArr.pop();
                    -1 != this.parentID ? e.node.position = this.target.getBulletPos(this.switchV2(e.node.position.sub(cc.vv.game.node.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.position))))) : e.node.position = this.target.getBulletPos(this.switchV2(e.node.position.sub(this.node.position)));
                    var n = this.getDir().signAngle(e.rigidbody.linearVelocity);
                    e.rotateVelocity(this.target.getDir().rotate(n + Math.PI)),
                    e = null
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Spine: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "649a21jAUBPXIXgRLlEbEuF", "Element_Spine"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Spine,
                    type: ElementType,
                    override: !0
                }
            },
            onLoad: function() {
                this._super(),
                this.bulletCompArr = []
            },
            start: function() {
                cc.vv.edit && this.editMode()
            },
            onBeginContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                o && (o.curExistTime = 0,
                this.bulletCompArr.push(o))
            },
            update: function(t) {
                (this._super(t),
                this.bulletCompArr.length > 0) && this.bulletCompArr.pop().die()
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Element_Trampoline: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9300e6xaF1FPoWwZP5fK0uR", "Element_Trampoline"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.Element_Trampoline,
                    type: ElementType,
                    override: !0
                },
                springVelocity: 100,
                iconND: cc.Node
            },
            onLoad: function() {
                this._super(),
                this.isPlayAnima = !1
            },
            start: function() {
                cc.vv.edit && this.editMode()
            },
            onBeginContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                this.isPlayAnima = !0,
                0 == this.springVelocity ? o.useBounce(this.getDir()) : o.useBounce(this.getDir().mul(this.springVelocity))
            },
            update: function(t) {
                this.isPlayAnima && (cc.vv.audioMgr.playSFX("JumpPad"),
                this.isPlayAnima = !1,
                this.iconND.stopAllActions(),
                this.iconND.runAction(cc.sequence(cc.scaleTo(.05, 1, .75), cc.scaleTo(.05, 1, 1))))
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    FailUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e20aaXThhpDs7zBWy1EUuM7", "FailUI"),
        cc.Class({
            extends: t("PopupUI"),
            properties: {
                adShare: cc.Sprite,
                adShareSF: [cc.SpriteFrame],
                skipBtn: cc.Node,
                againBtn: cc.Node
            },
            onLoad: function() {
                cc.vv.failUI = this,
                this.updateADShare(),
                cc.vv.userData.bossLevelState >= 4 && (this.skipBtn.active = !1),
                this.againBtn.active = !1,
                this.closeBtn = this.againBtn,
                this.setBanner()
            },
            onDestroy: function() {
                cc.vv.failUI = null,
                cc.vv.sdk.navigateToBanner(!1)
            },
            updateADShare: function() {
                var t = cc.vv.utilMng.getSharAndADState();
                0 == t ? this.adShare.spriteFrame = this.adShareSF[0] : 1 == t && (this.adShare.spriteFrame = this.adShareSF[1])
            },
            onSkipBtnClick: function() {
                var t = this
                  , e = cc.vv.utilMng.getSharAndADState();
                0 == e ? cc.vv.sdk.navigateToAd(function() {
                    cc.vv.audioMgr.playSFX("UIClick"),
                    t.node.destroy(),
                    cc.vv.sdk.navigateToBanner(!1),
                    cc.vv.game.initLevel(),
                    cc.vv.game.changeState(GameState.Idle),
                    cc.vv.userData.level++,
                    cc.vv.gameData.enterNextBossLevelState(),
                    cc.vv.UIMng.updateCurLevel(),
                    cc.vv.game.loadLevelData(),
                    t.updateADShare(),
                    cc.vv.netMng.SaveNetData("gameWin")
                }) : 1 == e && cc.vv.sdk.shareAppMessage(function() {
                    cc.vv.audioMgr.playSFX("UIClick"),
                    t.node.destroy(),
                    cc.vv.sdk.navigateToBanner(!1),
                    cc.vv.game.initLevel(),
                    cc.vv.game.changeState(GameState.Idle),
                    cc.vv.userData.level++,
                    cc.vv.gameData.enterNextBossLevelState(),
                    cc.vv.UIMng.updateCurLevel(),
                    cc.vv.game.loadLevelData(),
                    cc.vv.netMng.SaveNetData("gameWin")
                }, null, 3)
            },
            onReTryBtnClick: function() {
                console.log("onretrybtnclick"),
                this.isJumpStart || (cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy(),
                cc.vv.sdk.navigateToBanner(!1),
                cc.vv.game.reStart(),
                cc.vv.backAd && (cc.vv.backAd.node.active = !0))
            },
            onMoreGameBtnClick: function() {
                cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy(),
                cc.vv.game.reStart(),
                cc.vv.backAd && (cc.vv.backAd.node.active = !0)
            },
            onTryAgainClick: function() {
                cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy(),
                cc.vv.game.reStart()
            },
            onHomeBtnClick: function() {
                cc.vv.audioMgr.playSFX("UIClick"),
                this.node.destroy(),
                cc.vv.game.reStart(),
                cc.vv.homeUI.showHomeUI(),
                console.log("homeui\u663e\u793a\u63d2\u5c4f\u5e7f\u544a"),
                cc.vv.sdk.showInterstitialAd()
            }
        }),
        cc._RF.pop()
    }
    , {
        PopupUI: "PopupUI"
    }],
    FanArea: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d00camwfU5JMLyWO2cpf+vO", "FanArea"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.fan = this.node.parent.getComponent("Element_Fan"),
                this.bulletCompArr = []
            },
            init: function() {
                this.bulletCompArr.length = 0
            },
            onBeginContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                o && this.bulletCompArr.push(o)
            },
            onEndContact: function(t, e, n) {
                var o = n.node.getComponent("Bullet");
                o && this.removeBulletByComp(o)
            },
            removeBulletByComp: function(t) {
                for (var e = 0, n = 0; n < this.bulletCompArr.length; n++)
                    if (this.bulletCompArr[n] == t) {
                        e = n;
                        break
                    }
                this.bulletCompArr.length > 0 && (1 == this.bulletCompArr.length ? this.bulletCompArr.pop() : (this.bulletCompArr[e] = this.bulletCompArr[this.bulletCompArr.length - 1],
                this.bulletCompArr.pop()))
            },
            getDir: function() {
                return cc.Vec2.UP.rotate((this.node.parent.angle - 90) / 180 * Math.PI).normalize()
            },
            update: function(t) {
                if (this.bulletCompArr.length > 0)
                    for (var e = 0; e < this.bulletCompArr.length; e++)
                        this.bulletCompArr[e].addVelocity(this.getDir().mul(this.fan.funAddVelocity * t));
                this.node.x = 50,
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GameData: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e8dadzKB1xA8qdttEf7PyGv", "GameData");
        var o = {
            get coins() {
                return cc.vv.userData.coins
            },
            set coins(t) {
                isNaN(t) || (cc.vv.userData.coins = Math.ceil(t),
                cc.vv.skinUI && cc.vv.skinUI.updateCoinLabel())
            },
            get golds() {
                return cc.vv.userData.golds
            },
            set golds(t) {
                isNaN(t) || (cc.vv.userData.golds = Math.ceil(t),
                cc.vv.menubarUI && (cc.vv.menubarUI.goldLabel.string = cc.vv.utilMng.coinFormat(cc.vv.userData.golds)))
            },
            cannonJson: null,
            bossJson: null,
            loadLevelJson: function(t, e) {
                cc.vv.userData.level > 100 && (cc.vv.userData.level = 1);
                var n = Math.floor((cc.vv.userData.level - 1) / 10);
                cc.loader.loadRes("json/cannon" + n, function(n, o) {
                    e && e(),
                    n ? console.log(n) : (cc.vv.gameData.cannonJson = o.json,
                    t && t(o.json))
                })
            },
            loadBossJson: function(t, e) {
                cc.vv.userData.bossLevel > 20 && (cc.vv.userData.bossLevel = 1),
                cc.loader.loadRes("json/boss" + cc.vv.userData.bossLevel, function(n, o) {
                    e && e(),
                    n ? console.log(n) : (cc.vv.gameData.bossJson = o.json,
                    t && t(o.json))
                })
            },
            enterNextBossLevelState: function() {
                cc.vv.userData.bossLevelState++,
                cc.vv.userData.bossLevelState > 5 && (cc.vv.userData.bossLevelState = 5)
            }
        };
        e.exports = o,
        cc._RF.pop()
    }
    , {}],
    GameUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b794fRMYyJIQ4w39p8uM9SF", "GameUI"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            flushAdItem: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    GameUtil: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cbf6eYpzjNOMKBuejiyP/vt", "GameUtil");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = (t("httpUtil"),
        {
            timeFormat: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = Math.floor(t / 36e5)
                  , n = t % 36e5
                  , o = Math.floor(n / 6e4)
                  , i = n % 6e4
                  , c = Math.ceil(i / 1e3)
                  , a = "";
                return a = e < 10 ? "0" + e + ":" : e + ":",
                a += o < 10 ? "0" + o + ":" : o + ":",
                a += c < 10 ? "0" + c : "" + c
            },
            timeFormat2: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = Math.floor(t / 60)
                  , n = Math.floor(t % 60)
                  , o = "";
                return o = e < 10 ? "0" + e + ":" : e + ":",
                o += n < 10 ? "0" + n : n
            },
            weightRandom: function(t) {
                for (var e = 0, n = 0; n < t.length; n++)
                    e += t[n];
                for (var o = Math.floor(Math.random() * e), i = 0, c = 0; c < t.length; c++)
                    if (o <= (i += t[c]))
                        return c;
                return -1
            },
            commonlyUse: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            shuffleArray: function(t) {
                for (var e, n, o = t.length; o; )
                    n = Math.floor(Math.random() * o--),
                    e = t[o],
                    t[o] = t[n],
                    t[n] = e;
                return t
            },
            getRandom: function(t, e, n) {
                for (var o = [], i = [], c = t; c < e; c++)
                    o[c] = c;
                var a = 0;
                do {
                    var s = Math.floor(Math.random() * o.length)
                      , r = !0;
                    i.push(o[s]),
                    o.splice(s, 1),
                    a++,
                    (0 == o.length || a >= n) && (r = !1)
                } while (r);return i
            },
            deepCopy: function(t) {
                function e(e) {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }
                ,
                e
            }(function(t) {
                var e = Array.isArray(t) ? [] : {};
                for (var n in t)
                    t.hasOwnProperty(n) && ("object" === o(t[n]) ? e[n] = deepCopy(t[n]) : e[n] = t[n]);
                return e
            }),
            NumberFormat: function(t) {
                var e = (t = Math.floor(t)) / 1e3
                  , n = "";
                if (parseInt(e) > 0) {
                    for (var o = 0; o < 2 && (0 == o && (n = "K"),
                    1 == o && (n = "M"),
                    e > 1e3); o++)
                        e /= 1e3;
                    return e > 99 ? e.toFixed(1) + n : e > 9 ? e.toFixed(2) + n : e.toFixed(3) + n
                }
                return t
            },
            parseTime: function(t) {
                return new Date(parseInt(t)).toDateString()
            },
            coinFormat: function(t) {
                for (var e = 0; e < 5; e++) {
                    if (t < 1e3)
                        return "" + (t = e > 0 ? t > 100 ? Math.floor(t) : (t += "").slice(0, 4) : Math.floor(t)) + c[e];
                    t /= 1e3
                }
                return 0
            },
            getBlankIndex: function(t) {
                for (var e = 0; e < cc.vv.userData.equipBag[t].length; e++)
                    if (cc.vv.userData.equipBag[t][e] < 0)
                        return e;
                return -1
            },
            getBlankNum: function(t) {
                for (var e = 0, n = 0; n < cc.vv.userData.equipBag[t].length; n++)
                    cc.vv.userData.equipBag[t][n] < 0 && e++;
                return e
            },
            checkHadBox: function() {
                for (var t = 0; t < cc.vv.userData.equipBag.length; t++) {
                    for (var e = !1, n = 0; n < cc.vv.userData.equipBag[t].length; n++)
                        if (99 == cc.vv.userData.equipBag[t][n]) {
                            e = !0;
                            break
                        }
                    cc.vv.hadBox[t] = e
                }
            },
            flushShareSuceessTime: function() {
                cc.vv.shareSucessTime = 3e3 + 500 * cc.vv.userData.Daysharenum,
                cc.vv.shareSucessTime > 5e3 && (cc.vv.shareSucessTime = 5e3)
            },
            checkIsAvatarHttpUrl: function(t) {
                return "string" == typeof t && "http" == t.substring(0, 4)
            },
            forMatName: function(t) {
                for (var e = !1, n = 0; n < t.length; n++)
                    this.isChinese(t[n]) && (e = !0);
                return e ? t.length > 5 && (t = t.substring(0, 5) + "...") : t.length > 10 && (t = t.substring(0, 10) + "..."),
                t
            },
            isChinese: function(t) {
                return /^[\u4e00-\u9fa5]+$/.test(t)
            },
            getSharAndADState: function() {
                var t = 0;
                return t
            },
            showCoinEff: function(t, e) {
                cc.vv.audioMgr.playSFX("coin");
                for (var n = 0; n < 10; n++)
                    cc.vv.gameIns.createCoinEff(t, e, n, 10)
            },
            loadBone: function(t) {
                var e = this
                  , n = "";
                cc.vv.userData.rank < 9 && (n += "0"),
                n += cc.vv.userData.rank + 1,
                cc.vv.userData.rank > 2 && (n = "03"),
                this.isBoneLoadCount = 0,
                cc.loader.loadRes("bone/role" + n + "_1_ske", dragonBones.DragonBonesAsset, function(o, i) {
                    o && cc.error(o),
                    cc.vv.boneAsset[0] = i,
                    cc.loader.loadRes("bone/role" + n + "_1_tex", dragonBones.DragonBonesAtlasAsset, function(n, o) {
                        n && cc.error(n),
                        cc.vv.boneAsset[1] = o,
                        e.checkIsLoadBoneOver(t)
                    })
                }),
                cc.loader.loadRes("bone/role" + n + "_2_ske", dragonBones.DragonBonesAsset, function(o, i) {
                    o && cc.error(o),
                    cc.vv.boneAsset[2] = i,
                    cc.loader.loadRes("bone/role" + n + "_2_tex", dragonBones.DragonBonesAtlasAsset, function(n, o) {
                        n && cc.error(n),
                        cc.vv.boneAsset[3] = o,
                        e.checkIsLoadBoneOver(t)
                    })
                })
            },
            checkIsLoadBoneOver: function(t) {
                this.isBoneLoadCount++,
                this.isBoneLoadCount >= 2 && t && t()
            }
        })
          , c = ["", "K", "M", "G", "T", "P"];
        e.exports = i,
        cc._RF.pop()
    }
    , {
        httpUtil: "httpUtil"
    }],
    Gameconfig: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6de5fAgY0NLm6D0LMdO5UcF", "Gameconfig");
        var o = {
            url: "https://dataapi.yuanqiyouxi.com/",
            platfromId: "tt",
            userId: "cyh130",
            appId: "Cannon",
            appCode: "30008",
            commonCode: "30002",
            isTest: !1,
            version: "0.2.0"
        };
        o.isTest = !window.h5api,
        console.log("==test", o.isTest),
        window.Gameconfig = o,
        window.wx = window.tt,
        e.exports = o,
        cc._RF.pop()
    }
    , {}],
    Game: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2fe33ET8sJEJbNd3gi0QuIi", "Game");
        var o = [cc.v2(216, 137), cc.v2(0, -472)];
        window.GameState = {
            Idle: "Idle",
            Playing: "Playing",
            GameOver: "GameOver"
        },
        cc.Class({
            extends: cc.Component,
            properties: {
                bulletBox: cc.Node,
                bulletPrefab: cc.Prefab,
                effBox: cc.Node,
                keyBox: cc.Node,
                customBox: cc.Node,
                bgSprite: cc.Sprite,
                tutorialPrefabOne: cc.Prefab,
                tutorialPrefabTow: cc.Prefab,
                doyBox: cc.Node,
                adItemPre: cc.Prefab,
                bossIconBG: cc.Node,
                recycleBox: cc.Node
            },
            onLoad: function() {
                cc.vv.game = this,
                this.state = GameState.Idle,
                this.bulletPool = [],
                cc.vv.game.bulletCompArr = [],
                this.gameInit(),
                this.initPool(),
                this.fillBullet(),
                this.isWin = !1,
                this.useSkin(cc.vv.userData.ballSkinID),
                this.bgSprite.spriteFrame = cc.vv.bgSF,
                this.curTutorial = null,
                this.updateTutorial(),
                buryPoint.report("leve_start", {
                    level: "" + cc.vv.userData.level
                }),
                this.bgSprite.node.height = 2 * cc.vv.halfHeight,
                this.showTipsTime = 5,
                this.curShowTipsTime = 0
            },
            updateTutorial: function() {
                if (cc.vv.userData.tutorialState < 3) {
                    var t = null;
                    switch (cc.vv.userData.tutorialState) {
                    case 0:
                        (t = cc.instantiate(this.tutorialPrefabOne)).parent = this.effBox,
                        t.position = cc.v2(o[0]),
                        this.curTutorial = t;
                        break;
                    case 1:
                        this.curTutorial && this.curTutorial.destroy(),
                        (t = cc.instantiate(this.tutorialPrefabTow)).parent = this.effBox,
                        t.position = cc.v2(o[1]),
                        this.curTutorial = t;
                        break;
                    case 2:
                        this.curTutorial && this.curTutorial.destroy(),
                        cc.vv.userData.tutorialState++
                    }
                }
            },
            gameInit: function() {
                var t = cc.director.getPhysicsManager();
                t.enabled = !0,
                t.enabledAccumulator = !0
            },
            start: function() {
                this.initLevel(),
                cc.vv.game.createMap(),
                cc.vv.likeAd && (cc.vv.likeAd.node.active = !0)
            },
            debug: function() {
                cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_pairBit | cc.PhysicsManager.DrawBits.e_centerOfMassBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit
            },
            initPool: function() {
                cc.vv.game.cannonComp = [],
                cc.vv.game.cupComp = [],
                cc.vv.game.circleComp = [],
                cc.vv.game.fanComp = [],
                cc.vv.game.knifeComp = [],
                cc.vv.game.rectangleComp = [],
                cc.vv.game.spaceComp = [],
                cc.vv.game.spineComp = [],
                cc.vv.game.trampolineComp = [],
                cc.vv.game.rotateToolComp = [],
                cc.vv.game.sliderToolComp = [],
                cc.vv.game.bossComp = [],
                cc.vv.game.cannonPool = [],
                cc.vv.game.cupPool = [],
                cc.vv.game.circlePool = [],
                cc.vv.game.fanPool = [],
                cc.vv.game.knifePool = [],
                cc.vv.game.rectanglePool = [],
                cc.vv.game.spacePool = [],
                cc.vv.game.spinePool = [],
                cc.vv.game.trampolinePool = [],
                cc.vv.game.rotateToolPool = [],
                cc.vv.game.sliderToolPool = [],
                cc.vv.game.parentComp = [],
                cc.vv.customNDs = []
            },
            checkIsGameOver: function() {
                var t = this;
                if (cc.vv.game.state != GameState.GameOver) {
                    for (var e = !0, n = 0; n < cc.vv.game.cannonComp.length; n++)
                        if (0 != cc.vv.game.cannonComp[n].curBulletCount) {
                            e = !1;
                            break
                        }
                    if (e)
                        for (var o = 0; o < cc.vv.game.bulletCompArr.length; o++)
                            if (!cc.vv.game.bulletCompArr[o].isRecycle) {
                                e = !1;
                                break
                            }
                    e && cc.vv.UIMng.starComp.length > 0 && (e = !1),
                    cc.vv.game.cupComp.length <= 0 ? e && !this.isWin && this.gameFail() : e && (this.changeState(GameState.GameOver),
                    this.isWin ? setTimeout(function() {
                        t.gameWin()
                    }, 300) : setTimeout(function() {
                        t.gameFail()
                    }, 300))
                }
            },
            checkIsGameWinBoss: function() {
                var t = this;
                if (this.state != GameState.GameOver && !this.isWin) {
                    for (var e = !0, n = 0; n < cc.vv.game.bossComp.length; n++)
                        if (!cc.vv.game.bossComp[n].isDie) {
                            e = !1;
                            break
                        }
                    e && (this.isWin = !0,
                    cc.vv.gameQuit && (cc.vv.gameQuit.canClick = !1),
                    this.scheduleOnce(function() {
                        t.changeState(GameState.GameOver),
                        cc.vv.gameQuit && (cc.vv.gameQuit.canClick = !0),
                        cc.vv.UIMng.showBossLevelWinUI(function() {
                            t.bossLevelGameWin()
                        })
                    }, 2))
                }
            },
            checkIsGameWin: function() {
                if (this.state != GameState.GameOver && !this.isWin) {
                    this.updateEnterCupCount();
                    for (var t = !0, e = 0; e < cc.vv.game.cupComp.length; e++)
                        if (!cc.vv.game.cupComp[e].isFull) {
                            t = !1;
                            break
                        }
                    t && (cc.vv.UIMng.showStar(),
                    cc.vv.UIMng.showCompleteBtn(),
                    this.isWin = !0)
                }
            },
            gameFail: function() {
                cc.vv.UIMng.showFailUI()
            },
            bossLevelGameWin: function() {
                this.initLevel(),
                cc.vv.game.loadLevelData()
            },
            gameWin: function() {
                var t = this;
                cc.vv.UIMng.checkIsShowLuckAwardUI() ? (cc.vv.isShowLuckUI = !0,
                cc.vv.UIMng.showWinUI(),
                cc.vv.isShowLuckUI = !1,
                cc.vv.UIMng.showLuckAwardUI(function() {
                    t.initLevel(),
                    cc.vv.userData.level++,
                    cc.vv.gameData.enterNextBossLevelState(),
                    cc.vv.game.createMap(),
                    cc.vv.netMng.SaveNetData("gameWin")
                })) : (cc.vv.UIMng.showWinUI(),
                this.initLevel(),
                cc.vv.gameData.enterNextBossLevelState(),
                cc.vv.userData.level++,
                buryPoint.report("leve_start", {
                    level: "" + cc.vv.userData.level
                }),
                cc.vv.game.createMap(),
                cc.vv.netMng.SaveNetData("gameWin"))
            },
            updateEnterCupCount: function() {
                for (var t = 0; t < cc.vv.game.cupComp.length; t++)
                    cc.vv.game.cupComp[t].updateEnterCupCountLabel()
            },
            shootBullet: function() {
                for (var t = !1, e = 0; e < this.cannonComp.length; e++)
                    this.cannonComp[e].shootBullet(),
                    this.cannonComp[e].curBulletCount > 0 && (t = !0);
                cc.vv.UIMng.hideTipsBone(),
                t && (this.curShowTipsTime = 0,
                cc.vv.UIMng.updateTpisCount(),
                cc.vv.audioMgr.playSFX("Shot1"))
            },
            fillBullet: function() {
                for (var t = null, e = null, n = 0; n < 20; n++)
                    (t = cc.instantiate(this.bulletPrefab)).parent = this.bulletBox,
                    (e = t.getComponent("Bullet")).recycle(),
                    cc.vv.game.bulletCompArr.push(e)
            },
            createBullet: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc.Vec2.ZERO
                  , e = null
                  , n = null;
                return cc.vv.game.bulletPool.length > 0 ? n = (e = cc.vv.game.bulletPool.pop()).getComponent("Bullet") : ((e = cc.instantiate(this.bulletPrefab)).parent = this.bulletBox,
                n = e.getComponent("Bullet"),
                cc.vv.game.bulletCompArr.push(n)),
                e.position = t,
                n
            },
            clearAllBullet: function() {
                for (var t = 0; t < cc.vv.game.bulletCompArr.length; t++)
                    cc.vv.game.bulletCompArr[t].recycle()
            },
            useSkin: function(t) {
                for (var e = function(e) {
                    cc.loader.loadRes("tex/bullet/ball" + t + "_" + e, cc.SpriteFrame, function(t, n) {
                        cc.vv.curBallSF[e - 1] = n
                    })
                }, n = 1; n < 4; n++)
                    e(n)
            },
            initLevel: function() {
                this.isWin = !1,
                this.clearAllBullet(),
                cc.vv.elementFactory.recycleAll(),
                cc.vv.UIMng.updateStarMask(0),
                cc.vv.UIMng.hideStar(),
                cc.vv.UIMng.hideCompleteBtn(),
                cc.vv.UIMng.updateGameKey(),
                cc.vv.UIMng.clearAllStar()
            },
            reStart: function() {
                this.changeState(GameState.Idle),
                this.initLevel(),
                this.createMap(),
                this.isWin = !1
            },
            createMap: function() {
                0 != cc.vv.userData.bossLevelState && cc.vv.userData.bossLevelState >= 5 ? (this.bossIconBG.active = !0,
                cc.vv.UIMng.setCanReStar(!1),
                this.loadBossData()) : this.loadLevelData()
            },
            loadBossData: function() {
                var t = this;
                cc.vv.edit || (cc.vv.UIMng.setLoadMask(!0),
                cc.vv.gameData.loadBossJson(function() {
                    cc.vv.UIMng.setLoadMask(!1),
                    t.useBossData()
                }))
            },
            loadLevelData: function() {
                var t = this;
                if (!cc.vv.edit) {
                    for (var e = !0, n = 0; n < cc.vv.gameData.cannonJson.length; n++)
                        if (cc.vv.gameData.cannonJson[n].Level == cc.vv.userData.level) {
                            e = !1;
                            break
                        }
                    e ? (cc.vv.UIMng.setLoadMask(!0),
                    cc.vv.gameData.loadLevelJson(function() {
                        cc.vv.UIMng.setLoadMask(!1),
                        t.useLevelData()
                    })) : this.useLevelData()
                }
            },
            useBossData: function() {
                var t = this
                  , e = []
                  , n = cc.vv.gameData.bossJson.ElementBox
                  , o = cc.vv.gameData.bossJson.CustomElement;
                cc.vv.game.bgSprite.spriteFrame = cc.vv.UIMng.bossBGSF;
                for (var i = 0; i < n.length; i++) {
                    var c = cc.vv.elementFactory.createElementByData(n[i], i);
                    e.push(c)
                }
                if (o.length > 0) {
                    cc.vv.UIMng.setLoadMask(!0);
                    for (var a = 0; a < o.length; a++)
                        cc.loader.loadRes("customPrefab/" + o[a], cc.Prefab, function(e, n) {
                            var o = cc.instantiate(n);
                            o.parent = t.customBox,
                            cc.vv.customNDs.push(o),
                            cc.vv.UIMng.setLoadMask(!1)
                        })
                }
                for (var s = 0; s < e.length; s++)
                    e[s].createInit();
                this.destroyResidueCompFromPool(),
                e.length = 0
            },
            useLevelData: function() {
                for (var t = this, e = [], n = null, o = null, i = 0; i < cc.vv.gameData.cannonJson.length; i++)
                    if (cc.vv.gameData.cannonJson[i].Level == cc.vv.userData.level) {
                        n = cc.vv.gameData.cannonJson[i].ElementBox,
                        o = cc.vv.gameData.cannonJson[i].CustomElement,
                        cc.loader.loadRes("tex/bg/" + cc.vv.gameData.cannonJson[i].Bg, cc.SpriteFrame, function(t, e) {
                            cc.vv.bgSF = e,
                            cc.vv.game.bgSprite.spriteFrame = cc.vv.bgSF
                        });
                        break
                    }
                for (var c = 0; c < n.length; c++) {
                    var a = cc.vv.elementFactory.createElementByData(n[c]);
                    e.push(a)
                }
                if (o.length > 0) {
                    cc.vv.UIMng.setLoadMask(!0);
                    for (var s = 0; s < o.length; s++)
                        cc.loader.loadRes("customPrefab/" + o[s], cc.Prefab, function(e, n) {
                            var o = cc.instantiate(n);
                            o.parent = t.customBox,
                            cc.vv.customNDs.push(o),
                            cc.vv.UIMng.setLoadMask(!1)
                        })
                }
                for (var r = 0; r < e.length; r++)
                    e[r].createInit();
                this.destroyResidueCompFromPool(),
                e.length = 0
            },
            deleteAllCustomND: function() {
                for (var t = cc.vv.customNDs.length, e = 0; e < t; e++)
                    cc.vv.customNDs.pop().destroy()
            },
            deleteCompFromCompArr: function(t) {
                for (var e = this.getCompArrByElementType(t.elementType), n = 0, o = 0; o < e.length; o++)
                    if (e[o] == t) {
                        n = o;
                        break
                    }
                1 == e.length && e.pop(),
                e.length > 1 && (e[n] = e[e.length - 1],
                e.pop())
            },
            destroyResidueCompFromPool: function() {
                this.destroyByPool(cc.vv.game.cannonPool),
                this.destroyByPool(cc.vv.game.cupPool),
                this.destroyByPool(cc.vv.game.circlePool),
                this.destroyByPool(cc.vv.game.fanPool),
                this.destroyByPool(cc.vv.game.knifePool),
                this.destroyByPool(cc.vv.game.rectanglePool),
                this.destroyByPool(cc.vv.game.spacePool),
                this.destroyByPool(cc.vv.game.spinePool),
                this.destroyByPool(cc.vv.game.trampolinePool),
                this.destroyByPool(cc.vv.game.rotateToolPool),
                this.destroyByPool(cc.vv.game.sliderToolPool)
            },
            destroyByPool: function(t) {
                for (var e = 0; e < t.length; e++)
                    t.pop().node.destroy()
            },
            getCompArrByElementType: function(t) {
                switch (t) {
                case ElementType.Cannon:
                    return cc.vv.game.cannonComp;
                case ElementType.Cup:
                    return cc.vv.game.cupComp;
                case ElementType.Element_Boss:
                    return cc.vv.game.bossComp;
                case ElementType.Element_Circle:
                    return cc.vv.game.circleComp;
                case ElementType.Element_Fan:
                    return cc.vv.game.fanComp;
                case ElementType.Element_Knife:
                    return cc.vv.game.knifeComp;
                case ElementType.Element_Rectangle:
                    return cc.vv.game.rectangleComp;
                case ElementType.Element_Space:
                    return cc.vv.game.spaceComp;
                case ElementType.Element_Spine:
                    return cc.vv.game.spineComp;
                case ElementType.Element_Trampoline:
                    return cc.vv.game.trampolineComp;
                case ElementType.RotateTool:
                    return cc.vv.game.rotateToolComp;
                case ElementType.SliderTool:
                    return cc.vv.game.sliderToolComp
                }
            },
            getPoolByElementType: function(t) {
                switch (t) {
                case ElementType.Cannon:
                    return cc.vv.game.cannonPool;
                case ElementType.Cup:
                    return cc.vv.game.cupPool;
                case ElementType.Element_Boss:
                    return null;
                case ElementType.Element_Circle:
                    return cc.vv.game.circlePool;
                case ElementType.Element_Fan:
                    return cc.vv.game.fanPool;
                case ElementType.Element_Knife:
                    return cc.vv.game.knifePool;
                case ElementType.Element_Rectangle:
                    return cc.vv.game.rectanglePool;
                case ElementType.Element_Space:
                    return cc.vv.game.spacePool;
                case ElementType.Element_Spine:
                    return cc.vv.game.spinePool;
                case ElementType.Element_Trampoline:
                    return cc.vv.game.trampolinePool;
                case ElementType.RotateTool:
                    return cc.vv.game.rotateToolPool;
                case ElementType.SliderTool:
                    return cc.vv.game.sliderToolPool
                }
            },
            changeState: function(t) {
                this.state = t
            },
            update: function(t) {
                switch (this.state) {
                case GameState.Idle:
                    this.curShowTipsTime = 0;
                    break;
                case GameState.Playing:
                    this.isWin && this.curShowTipsTime != this.showTipsTime && (this.curShowTipsTime += t,
                    this.curShowTipsTime > this.showTipsTime && (this.curShowTipsTime = this.showTipsTime,
                    cc.vv.UIMng.checkIsShowTipsBone()));
                    break;
                case GameState.GameOver:
                    cc.vv.UIMng.hideTipsBone()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GiveUpTips: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "637d1fN5/JH8pgGlKlFCp3v", "GiveUpTips"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function(t, e) {
                this.giveUpCallb = t,
                this.adCallb = e,
                cc.vv.sdk.navigateToBanner(!0)
            },
            onGiveUpBtnClick: function() {
                this.giveUpCallb && (this.giveUpCallb(),
                this.giveUpCallb = null),
                cc.vv.sdk.navigateToBanner(!1),
                this.node.destroy()
            },
            onAdBtnClick: function() {
                this.adCallb && (this.adCallb(),
                this.adCallb = null),
                cc.vv.sdk.navigateToBanner(!1),
                this.node.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Global: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4ab73IJVsBAYLWO44aFGQPt", "Global"),
        window.IsCanLinkNet = !0,
        window.LinkNetCount = 0,
        window.Globle_login = !1;
        var o = t("Gameconfig");
        function i() {
            cc.vv = {},
            cc.vv.needToFix = !1,
            cc.vv.isShowStory = !1,
            cc.vv.isLegal = !0,
            cc.vv.isShowLuckUI = !1,
            cc.vv.uid = 0,
            cc.vv.shareChance = 0,
            cc.vv.shareFails = 0,
            cc.vv.shareSucessTime = 3e3,
            cc.vv.splashIns = null,
            cc.vv.cannonSF = [null, null],
            cc.vv.otherCount = 0,
            cc.vv.uiOtherCount = 0,
            cc.vv.bgSF = null,
            cc.vv.curBallSF = [null, null, null],
            cc.vv.bulletID = 0,
            cc.vv.pause = !0,
            cc.vv.diamondSecond = 60,
            cc.vv.videoDiamond = 1,
            cc.vv.authSetting = !1,
            cc.vv.halfWidth = 0,
            cc.vv.halfHeight = 0,
            cc.vv.saveDataOver = !0,
            cc.vv.isAlreadyGetNetData = !1,
            cc.vv.userName = o.userId,
            cc.vv.userAvatar = null,
            cc.vv.avatarUrl = null,
            cc.vv.supportsVibrate = "vibrate"in navigator,
            cc.vv.userData = {
                userId: o.userId,
                platfromId: o.platfromId,
                tutorialState: 0,
                level: 1,
                bossLevel: 1,
                bossLevelState: 0,
                coins: 0,
                shareTime: 0,
                adTimes: 0,
                Dayadnum: 0,
                Daysharenum: 0,
                lastGameTime: -1,
                lastAdTime: -1,
                ballsState: [],
                ballSkinID: 0,
                keyCount: 0,
                buyData: [0, 0],
                skinProgress: 0,
                cannonSkinIndex: 1,
                curCannonSkin: 1,
                luckProgress: .5,
                keyLevel: 0
            },
            cc.vv.netMng = t("NetDataManager"),
            cc.vv.utilMng = t("GameUtil");
            var e = t("AudioMgr");
            cc.vv.audioMgr = new e,
            cc.vv.audioMgr.init();
            var n = t("SDK4399");
            cc.vv.sdk = new n,
            cc.vv.sdk.init(),
            cc.vv.gameData = t("GameData"),
            cc.vv.likeAdPos = [[-184, 184], [0, 184], [184, 184], [-184, 0], [0, 0], [184, 0], [-184, -184], [0, -184], [184, -184]],
            cc.vv.newlikeAdPos = [[-202, 202], [0, 202], [202, 202], [-202, 0], [0, 0], [202, 0], [-202, -202], [0, -202], [202, -202]]
        }
        i(),
        window.BannerAdId = ["1m0ag2n7e411c6i0e6"],
        window.VideoAdID = "1239qh4lbdln2hsr6l",
        window.InterstitialAdID = "7oa7qe0s08d2159jh0",
        cc._RF.pop()
    }
    , {
        AudioMgr: "AudioMgr",
        GameData: "GameData",
        GameUtil: "GameUtil",
        Gameconfig: "Gameconfig",
        NetDataManager: "NetDataManager",
        SDK4399: "SDK4399"
    }],
    HomeUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "94b36VFG31LMa7Lgcy4jydg", "HomeUI");
        var o = "TouchStart"
          , i = "TouchEnd"
          , c = "TouchIng";
        cc.Class({
            extends: cc.Component,
            properties: {
                quitkNode: cc.Widget,
                bottomNode: cc.Node,
                bottonContent: cc.Node,
                scrollView: cc.ScrollView,
                leftBox: cc.Node,
                rightBox: cc.Node,
                likeAdBtn: cc.Node
            },
            onLoad: function() {
                if (cc.vv.homeUI = this,
                this.node.width = 2 * cc.vv.halfWidth,
                this.node.height = 2 * cc.vv.halfHeight,
                cc.vv.halfWidth / cc.vv.halfHeight < .56 ? (this.quitkNode.top = 183,
                this.bottomNode.height = 230) : (this.quitkNode.top = 95,
                this.bottomNode.height = 196),
                this.isTouch = !1,
                this.scrollView.node.on("touch-up", this.touchUp.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCANCEL.bind(this)),
                this.touchDir = -1,
                this.changeState(i),
                Gameconfig.isTest)
                    return this.quitkNode.node.active = !1,
                    void (this.bottomNode.active = !1);
                this.iconUrls = [];
                this.rigihtAnimas = [],
                this.leftAnimas = [],
                this.moveMinX = -(156 * this.bottonContent.children.length + 20 * (this.bottonContent.children.length - 1) + 40 - 724),
                this.randomRankTime = 2.95,
                this.bottomNode.active = !1,
                this.leftBox.active = !1,
                this.rightBox.active = !1,
                this.quitkNode.active = !1,
                cc.vv.sdk.navigateToBanner(!0)
            },
            randomFixPos: function() {
                for (var t = [], e = 0; e < 5; e++)
                    t.push(332 - 166 * e);
                t.sort(function(t, e) {
                    return Math.random() > .5 ? -1 : 1
                });
                for (var n = 0; n < this.leftBox.children.length; n++)
                    this.leftBox.children[n].y = t[n];
                for (var o = 0; o < this.rightBox.children.length; o++)
                    this.rightBox.children[o].y = t[o]
            },
            touchUp: function() {
                this.changeState(i)
            },
            touchStart: function() {
                this.changeState(o)
            },
            touchMove: function() {
                this.changeState(c)
            },
            touchEnd: function() {
                this.changeState(i)
            },
            touchCANCEL: function() {
                this.changeState(i)
            },
            showHomeUI: function() {
                this.node.active = !0,
                cc.vv.game.node.active = !1,
                cc.vv.UIMng.showSkinBtn(),
                cc.vv.sdk.navigateToBanner(!0)
            },
            hideHomeUI: function() {
                this.node.active = !1,
                cc.vv.game.node.active = !0
            },
            onStartBtnClick: function() {
                cc.vv.UIMng.hideSkinBtn(),
                this.hideHomeUI(),
                this.likeAdBtn.stopAllActions(),
                this.likeAdBtn.x = -375,
                cc.vv.sdk.navigateToBanner(!1)
            },
            onMoreBtnClick: function() {
                cc.vv.backAd && (cc.vv.backAd.node.active = !0)
            },
            onQuitBtn: function() {
                cc.vv.backAd && (cc.vv.backAd.node.active = !0)
            },
            onInviteBtn: function() {
                cc.vv.sdk.shareAppMessage(null, null, 1)
            },
            flushAdItem: function() {},
            changeState: function(t) {
                this.state = t
            },
            update: function(t) {
                var e = this;
                if (this.randomRankTime -= t,
                t = t > .02 ? .02 : t,
                3 != this.randomRankTime && this.randomRankTime < 0) {
                    this.randomRankTime = 3;
                    for (var n = 0; n < this.rigihtAnimas.length; n++)
                        this.rigihtAnimas[n].play("shake"),
                        this.leftAnimas[n].play("shake");
                    this.scheduleOnce(function() {
                        e.randomFixPos(),
                        e.randomRankTime = 2.95
                    }, 1)
                }
                switch (this.state) {
                case i:
                    this.bottonContent.x <= this.moveMinX ? this.touchDir = 1 : this.bottonContent.x >= 0 && (this.touchDir = -1),
                    this.bottonContent.x += this.touchDir * t * 70
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Key: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9d20bpcnqBKFI+eHPLewVYL", "Key"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function(t) {
                this.cup = t
            },
            doAnima: function() {
                var t = this
                  , e = cc.vv.game.node.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.position))
                  , n = cc.vv.userData.keyCount - 1;
                n < 0 && (n = 0),
                n >= 2 && (n = 2);
                var o = cc.vv.UIMng.getKeyPos(n).sub(e);
                this.node.stopAllActions(),
                this.node.runAction(cc.sequence(cc.moveTo(1, o).easing(cc.easeOut(.7)), cc.callFunc(function() {
                    cc.vv.audioMgr.playSFX("KeyCounter"),
                    t.cup && (t.cup.clearKey(),
                    t.cup = null),
                    t.node.destroy(),
                    cc.vv.UIMng.updateGameKey()
                })))
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    LikeAd: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f1624R2hphMiLtoZGdT9qsa", "LikeAd"),
        cc.Class({
            extends: t("PopupUI"),
            properties: {
                bgNode: cc.Node,
                contentNode: cc.Node,
                quitkNode: cc.Widget
            },
            onLoad: function() {
                Gameconfig.isTest ? this.node.active = !1 : (cc.vv.likeAd = this,
                this.node.width = 2 * cc.vv.halfWidth,
                this.node.height = 2 * cc.vv.halfHeight,
                this.bgNode.width = 2 * cc.vv.halfWidth,
                this.bgNode.height = 2 * cc.vv.halfHeight,
                cc.vv.halfWidth / cc.vv.halfHeight < .56 ? this.quitkNode.top = 183 : this.quitkNode.top = 95,
                this.iconUrls = [],
                this.itmeNDArr = [],
                this.node.active = !1,
                this.curSortTime = 0,
                this.canShowIAd = !1,
                cc.vv.banner_jump ? (cc.find("commonBack", this.node).active = !1,
                this.closeBtn.active = !0) : (cc.find("commonBack", this.node).active = !0,
                this.closeBtn.active = !1))
            },
            onEnable: function() {
                this.randomSortItem(),
                Gameconfig.isTest,
                this.setBanner()
            },
            onDisable: function() {
                cc.vv.sdk.navigateToBanner(!1)
            },
            randomSortItem: function() {
                for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = [], n = [], o = 0; e.length > 0 && !(o >= cc.vv.newlikeAdPos.length); ) {
                    var i = Math.floor(Math.random() * e.length);
                    this.contentNode.children[e[i]].x = cc.vv.newlikeAdPos[o][0],
                    this.contentNode.children[e[i]].y = cc.vv.newlikeAdPos[o][1],
                    n.push(this.iconUrls[e[i]]),
                    o++,
                    e.splice(i, 1)
                }
                for (var c = 0; c < e.length; c++)
                    this.contentNode.children[e[c]].x = 1500;
                t && cc.vv.sdk.bananaReportExposure(n),
                this.curSortTime = 0
            },
            onDestroy: function() {},
            onBackBtn: function() {
                this.isJumpStart || (cc.vv.sdk.navigateToBanner(!1),
                this.node.active = !1,
                this.canShowIAd ? cc.vv.sdk.showInterstitialAd() : this.canShowIAd = !0)
            },
            onQuitBtn: function() {
                cc.vv.sdk.navigateToBanner(!1),
                this.node.active = !1,
                cc.vv.backAd && (cc.vv.backAd.node.active = !0)
            },
            update: function(t) {
                this.curSortTime += t,
                this.curSortTime >= 3 && (this.curSortTime = 0,
                this.randomSortItem(!1))
            }
        }),
        cc._RF.pop()
    }
    , {
        PopupUI: "PopupUI"
    }],
    LoadUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "25aedyqxPhJ+qPmp8Z3c86J", "LoadUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                iconND: cc.Node
            },
            onEnable: function() {
                this.iconND.stopAllActions(),
                this.iconND.runAction(cc.repeatForever(cc.rotateBy(1, 90)))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LuckAwardUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fbc90n4T0tDvqAYqEJShckR", "LuckAwardUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bone: dragonBones.ArmatureDisplay,
                bgLight: cc.Node,
                blood: cc.Node,
                bloadLabel: cc.Label,
                luckBtn: cc.Node,
                adShare: cc.Sprite,
                adShareSF: [cc.SpriteFrame],
                closeBtnND: cc.Node
            },
            onLoad: function() {
                cc.vv.audioMgr.playSFX("LuckyBoxAppear"),
                this.bgLight.stopAllActions(),
                this.bgLight.runAction(cc.repeatForever(cc.rotateBy(1, 90))),
                this.canClickBtn = !0,
                this.updateADShare(),
                this.maxClickCount = 10,
                this.luckBtn.y = -267,
                this.closeBtnND.y = -405,
                cc.vv.sdk.navigateToBanner(!0)
            },
            updateADShare: function() {
                var t = cc.vv.utilMng.getSharAndADState();
                0 == t ? this.adShare.spriteFrame = this.adShareSF[0] : 1 == t && (this.adShare.spriteFrame = this.adShareSF[1])
            },
            updateProgress: function() {},
            onLuckBtnClick: function() {
                var t = this;
                if (cc.vv.audioMgr.playSFX("UIClick"),
                this.canClickBtn) {
                    var e = cc.vv.utilMng.getSharAndADState();
                    0 == e ? cc.vv.sdk.navigateToAd(function() {
                        t.updateADShare(),
                        console.log("\u770b\u5b8c\u4e86\u7ed9\u6211\u6253\u5f00\u9b54\u76d2\uff01"),
                        t.canClickBtn = !1,
                        t.luckBtn.active = !1,
                        t.closeBtnND.active = !1,
                        t.bone.playAnimation("open", 1),
                        console.log("\u770b\u5b8c\u4e86\u7ed9\u6211\u6253\u5f00\u9b54\u76d2\uff011"),
                        setTimeout(function() {
                            console.log("\u770b\u5b8c\u4e86\u7ed9\u6211\u6253\u5f00\u9b54\u76d2\uff012"),
                            cc.vv.UIMng.showAwardUI(function() {
                                console.log("\u770b\u5b8c\u4e86\u7ed9\u6211\u6253\u5f00\u9b54\u76d2\uff013"),
                                t.node.destroy()
                            })
                        }, 1500)
                    }) : 1 == e && cc.vv.sdk.shareAppMessage(function() {
                        t.canClickBtn = !1,
                        t.luckBtn.active = !1,
                        t.closeBtnND.active = !1,
                        t.bone.playAnimation("open", 1),
                        setTimeout(function() {
                            cc.vv.UIMng.showAwardUI(function() {
                                t.node.destroy()
                            })
                        }, 1500)
                    }, null, 2)
                }
            },
            onCloseBtnClick: function() {
                this.isJumpStart || (cc.vv.audioMgr.playSFX("UIClick"),
                this.canClickBtn && (this.node.destroy(),
                cc.vv.sdk.navigateToBanner(!1),
                cc.vv.winUI && cc.vv.winUI.updateBtnState(!0),
                cc.vv.game.changeState(GameState.Idle),
                cc.vv.UIMng.updateCurLevel()))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Motion: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "419ba2Qwg5G3ZK+hFMzkGO4", "Motion"),
        window.MotionType = cc.Enum({
            Null: 0,
            Translation: 1,
            RotateByPos: 2,
            RotateBySelf: 3
        });
        var o = 0
          , i = 1
          , c = 2;
        cc.Class({
            extends: cc.Component,
            properties: {
                customId: -1,
                motionType: {
                    default: MotionType.Null,
                    type: MotionType
                },
                t_: "\u5e73\u79fb(\u5faa\u73af\u5f80\u8fd4\u8fd0\u52a8)",
                t_startPos: cc.v2(),
                t_endPos: cc.v2(),
                t_moveToEndPosTime: 0,
                t_moveToStartPosTime: 0,
                t_startDelayTime: 0,
                t_endDelayTime: 0,
                r_: "\u7ed5\u5706\u5fc3\u8fd0\u52a8(\u5faa\u73af\u5f80\u8fd4\u8fd0\u52a8)",
                r_circleCenter: cc.v2(),
                r_roateAngle: 0,
                r_rotateTime: 0,
                r_delayTime: 0,
                rs_: "\u81ea\u8f6c(\u5faa\u73af\u8fd0\u52a8)",
                rs_isPingPong: !1,
                rs_rotateAngle: 0,
                rs_rotateTime: 0,
                rs_delayTime: 0
            },
            onLoad: function() {
                this.elementComp = this.getComponent("ElementBasics"),
                this.canMove = !1
            },
            startMotion: function() {
                this.motionType != MotionType.Null && (this.canMove = !0)
            },
            stopMotion: function() {
                this.node.stopAllActions(),
                this.canMove = !1
            },
            switchV2: function(t) {
                return cc.v2(t.x, t.y)
            },
            createInit: function() {
                this.chooseMotion(),
                this._r_endAngle = 0,
                this._r_startAngle = 0,
                this._r_curRotatTime = 0,
                this._r_curDelayTime = 0,
                this._r_rotateFix = 1,
                this._r_startDir = this.switchV2(this.node.position.sub(this.r_circleCenter)),
                this._r_endDir = this.switchV2(this.node.position.sub(this.r_circleCenter)).rotate(-this.r_roateAngle / 180 * Math.PI),
                this._r_curDir = this._r_startDir;
                var t = this.node.angle % 360;
                cc.Vec2.ZERO.equals(this._r_curDir) && (this._r_curDir = cc.Vec2.UP),
                this._r_fixAngle = t - cc.Vec2.UP.signAngle(this._r_curDir) / Math.PI * 360,
                this._r_curStartDir = this._r_startDir
            },
            start: function() {
                cc.vv.edit && this.createInit()
            },
            onDestroy: function() {
                this.node.stopAllActions(),
                this.changeR_State(o)
            },
            changeR_State: function(t) {
                this.r_State = t
            },
            chooseMotion: function() {
                switch (this.motionType) {
                case MotionType.Null:
                    break;
                case MotionType.Translation:
                    this.node.stopAllActions(),
                    this.node.position = this.t_startPos,
                    this.node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(this.t_moveToEndPosTime, this.t_endPos), cc.delayTime(this.t_endDelayTime), cc.moveTo(this.t_moveToStartPosTime, this.t_startPos), cc.delayTime(this.t_startDelayTime))));
                    break;
                case MotionType.RotateByPos:
                    this.changeR_State(c),
                    this.node.stopAllActions();
                    break;
                case MotionType.RotateBySelf:
                    this.node.stopAllActions(),
                    this.rs_isPingPong ? this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(this.rs_rotateTime, this.rs_rotateAngle), cc.delayTime(this.rs_delayTime), cc.rotateBy(this.rs_rotateTime, -this.rs_rotateAngle), cc.delayTime(this.rs_delayTime)))) : this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(this.rs_rotateTime, this.rs_rotateAngle), cc.delayTime(this.rs_delayTime))))
                }
            },
            update: function(t) {
                if (this.canMove && this.motionType == MotionType.RotateByPos)
                    switch (t = t > .02 ? .02 : t,
                    this.r_State) {
                    case o:
                        break;
                    case c:
                        this._r_curRotatTime += t,
                        this._r_curDir = this._r_curStartDir.rotate(this._r_rotateFix * -this.r_roateAngle * (this._r_curRotatTime / this.r_rotateTime) / 180 * Math.PI),
                        this.node.position = this.r_circleCenter.add(this._r_curDir),
                        this.node.angle = cc.Vec2.UP.signAngle(this._r_curDir) / Math.PI * 360 + this._r_fixAngle,
                        this._r_curRotatTime >= this.r_rotateTime && (this._r_rotateFix > 0 ? this._r_curStartDir = this._r_endDir : this._r_curStartDir = this._r_startDir,
                        this._r_rotateFix = -this._r_rotateFix,
                        this._r_curDelayTime = 0,
                        this._r_curRotatTime = 0,
                        this.changeR_State(i));
                        break;
                    case i:
                        this._r_curDelayTime += t,
                        this._r_curDelayTime >= this.r_delayTime && (this._r_curDelayTime = 0,
                        this._r_curRotatTime = 0,
                        this.changeR_State(c))
                    }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MyBase64: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "03772XfUThLWLJd5M3QicJ0", "MyBase64");
        var o = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(t) {
                var e, n, o, i, c, a, s, r = "", l = 0;
                for (t = this._utf8_encode(t); l < t.length; )
                    i = (e = t.charCodeAt(l++)) >> 2,
                    c = (3 & e) << 4 | (n = t.charCodeAt(l++)) >> 4,
                    a = (15 & n) << 2 | (o = t.charCodeAt(l++)) >> 6,
                    s = 63 & o,
                    isNaN(n) ? a = s = 64 : isNaN(o) && (s = 64),
                    r = r + this._keyStr.charAt(i) + this._keyStr.charAt(c) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
                return r
            },
            decode: function(t) {
                var e, n, o, i, c, a, s = "", r = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); r < t.length; )
                    e = this._keyStr.indexOf(t.charAt(r++)) << 2 | (i = this._keyStr.indexOf(t.charAt(r++))) >> 4,
                    n = (15 & i) << 4 | (c = this._keyStr.indexOf(t.charAt(r++))) >> 2,
                    o = (3 & c) << 6 | (a = this._keyStr.indexOf(t.charAt(r++))),
                    s += String.fromCharCode(e),
                    64 != c && (s += String.fromCharCode(n)),
                    64 != a && (s += String.fromCharCode(o));
                return s = this._utf8_decode(s)
            },
            _utf8_encode: function(t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", n = 0; n < t.length; n++) {
                    var o = t.charCodeAt(n);
                    o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192),
                    e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224),
                    e += String.fromCharCode(o >> 6 & 63 | 128),
                    e += String.fromCharCode(63 & o | 128))
                }
                return e
            },
            _utf8_decode: function(t) {
                for (var e = "", n = 0, o = 0, i = 0, c = 0; n < t.length; )
                    (o = t.charCodeAt(n)) < 128 ? (e += String.fromCharCode(o),
                    n++) : o > 191 && o < 224 ? (i = t.charCodeAt(n + 1),
                    e += String.fromCharCode((31 & o) << 6 | 63 & i),
                    n += 2) : (i = t.charCodeAt(n + 1),
                    c = t.charCodeAt(n + 2),
                    e += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & c),
                    n += 3);
                return e
            }
        };
        e.exports = o,
        cc._RF.pop()
    }
    , {}],
    NetDataManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "de88djedXdFT7vbmAgSS4Hd", "NetDataManager");
        t("httpUtil"),
        t("Gameconfig");
        e.exports = {
            SaveNetData: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.vv.sdk.saveData()
            },
            GetNetData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , e = arguments[1];
                console.log("GetNetData", t);
                cc.vv.sdk.getData(function() {
                    e()
                })
            }
        },
        cc._RF.pop()
    }
    , {
        Gameconfig: "Gameconfig",
        httpUtil: "httpUtil"
    }],
    OverAd: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cdb42IEPidGBoJ14ZS/a21n", "OverAd"),
        cc.Class({
            extends: cc.Component,
            properties: {
                contentNode: cc.Node,
                quitkNode: cc.Widget
            },
            onLoad: function() {
                Gameconfig.isTest ? this.node.active = !1 : (cc.vv.overAd = this,
                this.node.width = 2 * cc.vv.halfWidth,
                this.node.height = 2 * cc.vv.halfHeight,
                cc.vv.halfWidth / cc.vv.halfHeight < .56 ? this.quitkNode.top = 183 : this.quitkNode.top = 95,
                this.iconUrls = [],
                this.node.active = !1,
                this.curSortTime = 0)
            },
            onEnable: function() {
                this.randomSortItem(),
                this.curSortTime = 0
            },
            randomSortItem: function() {
                for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = [], n = [], o = 0; e.length > 0 && !(o >= cc.vv.likeAdPos.length); ) {
                    var i = Math.floor(Math.random() * e.length);
                    this.contentNode.children[e[i]].x = cc.vv.likeAdPos[o][0],
                    this.contentNode.children[e[i]].y = cc.vv.likeAdPos[o][1],
                    n.push(this.iconUrls[e[i]]),
                    o++,
                    e.splice(i, 1)
                }
                for (var c = 0; c < e.length; c++)
                    this.contentNode.children[e[c]].x = 1500;
                t && cc.vv.sdk.bananaReportExposure(n)
            },
            onQuitBtn: function() {
                cc.vv.winUI && (cc.vv.winUI.canClosebanner = !1,
                cc.vv.winUI.onNextLevelBtnClick()),
                cc.vv.bossWinUI && (cc.vv.bossWinUI.canClosebanner = !1,
                cc.vv.bossWinUI.onCloseBtnClick()),
                this.node.active = !1,
                cc.vv.backAd && (cc.vv.backAd.node.active = !0)
            },
            update: function(t) {
                this.curSortTime += t,
                this.curSortTime >= 3 && (this.curSortTime = 0,
                this.randomSortItem(!1))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PopupUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c6c13BsDFRL6p3ICHMyFUcA", "PopupUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                closeBtn: cc.Node,
                delayClose: {
                    default: !0
                }
            },
            onLoad: function() {
                this.setBanner()
            },
            start: function() {},
            setBanner: function() {
                var t = this;
                this.normalY = cc.vv.sdk.bannerTopLine,
                this.isJumpStart = !0,
                this.closeBtn.y = -420,
                cc.vv.banner_jump ? (this.sendPointEvent = !1,
                this.isCanClose = !1,
                this.closeBtn.y = -420,
                this.scheduleOnce(function() {
                    t.sendPointEvent = !1,
                    t.isCanClose = !0,
                    t.isJumpStart = !1,
                    cc.vv.sdk.navigateToBanner(!0),
                    t.closeBtn.y = -420
                }, 2)) : (this.sendPointEvent = !1,
                this.isJumpStart = !1,
                this.closeBtn.y = -420,
                this.setCloseDelay(),
                cc.vv.sdk.navigateToBanner(!0))
            },
            setCloseDelay: function() {
                this.isCanClose = !0
            },
            onDestroy: function() {
                cc.vv.sdk.navigateToBanner(!1)
            },
            onCloseBtnClick: function() {
                this.sendPointEvent || (this.sendPointEvent = !0,
                this.isCanClose ? buryPoint.report("banner_closebtn_normal") : buryPoint.report("banner_closebtn_move")),
                this.isCanClose && this.node.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PrefabMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "dfbff/oY3dLK6MgFunkxM8w", "PrefabMgr"),
        cc.Class({
            extends: cc.Component,
            properties: {
                prefabs: [cc.Prefab]
            },
            onLoad: function() {
                this.saveLoadingPrefabName = [],
                cc.vv.prefabMng = this
            },
            createNode: function(t) {
                for (var e = 0, n = !1, o = 0; o < this.prefabs.length; o++)
                    if (this.prefabs[o] && t == this.prefabs[o].name) {
                        e = o,
                        n = !0;
                        break
                    }
                return n ? cc.instantiate(this.prefabs[e]) : (console.warn("\u540d\u5b57\u6709\u8bef\u6216\u672a\u62d6\u62fd\u8fdb\u9762\u677f\u5c5e\u6027\u91cc\uff01"),
                null)
            },
            loadResOnce: function(t, e) {
                var n = "prefab/" + t
                  , o = this._findPrefabInfo(t);
                if (o) {
                    if (o.isLoading)
                        return
                } else
                    o = {
                        name: t,
                        isLoading: !0,
                        isClosing: !1
                    },
                    this.saveLoadingPrefabName.push(o);
                o.isLoading = !0,
                cc.loader.loadRes(n, cc.Prefab, function(t, n) {
                    if (!t) {
                        o && (o.isLoading = !1);
                        var i = cc.instantiate(n);
                        e && e(i, n)
                    }
                })
            },
            _findPrefabInfo: function(t) {
                var e = null;
                if (this.saveLoadingPrefabName.length > 0)
                    for (var n in this.saveLoadingPrefabName)
                        this.saveLoadingPrefabName[n].name == t && (e = this.saveLoadingPrefabName[n]);
                return e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    RotateTool: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f1533VBVR5Fra78IFQI9L74", "RotateTool");
        var o = 0
          , i = 1;
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.RotateTool,
                    type: ElementType,
                    override: !0
                },
                isCentre: !0,
                rotateSpeed: 90,
                rotateDir: 1,
                touchBtnND: cc.Node,
                rotateToolTipsPrefa: cc.Prefab
            },
            onLoad: function() {
                this.registerEvent(),
                this.state = i,
                this.target = null,
                this.tips = null,
                this.touchBtnND.stopAllActions(),
                this.touchBtnND.runAction(cc.repeatForever(cc.rotateBy(1, 30)))
            },
            createTips: function() {
                var t = cc.instantiate(this.rotateToolTipsPrefa);
                return t.parent = cc.vv.game.effBox,
                t.position = this.node.position,
                t
            },
            createInit: function() {
                this._super(),
                this.rotateToolTipsPrefa && (this.tips = this.createTips())
            },
            start: function() {
                cc.vv.edit && cc.vv.game.rotateToolComp.push(this)
            },
            onDestroy: function() {
                this.touchBtnND.off(cc.Node.EventType.TOUCH_START, this.onEventStart, this),
                this.touchBtnND.off(cc.Node.EventType.TOUCH_END, this.onEventEnd, this),
                this.touchBtnND.off(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this)
            },
            setTarget: function(t) {
                this.target = t,
                this.isCentre && (this.target.node.position = this.node.position)
            },
            recycle: function() {
                this._super(),
                this.target = null,
                this.tips && (this.tips.destroy(),
                this.tips = null)
            },
            registerEvent: function() {
                this.touchBtnND.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this),
                this.touchBtnND.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this),
                this.touchBtnND.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this)
            },
            onEventStart: function(t) {
                cc.vv.game.state == GameState.Idle && cc.vv.game.changeState(GameState.Playing),
                this.changeState(o)
            },
            onEventEnd: function(t) {
                this.changeState(i)
            },
            onEventCancel: function(t) {
                this.changeState(i)
            },
            changeState: function(t) {
                this.state = t
            },
            update: function(t) {
                switch (this._super(t),
                this.state) {
                case o:
                    this.target && (this.target.isRecycle || (this.target.node.angle -= this.rotateSpeed * t * this.rotateDir,
                    this.target.node.angle = this.target.node.angle % 360))
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    SDK4399: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f51c4PhgC1LSo/IwkanSCyH", "SDK4399"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function() {
                Gameconfig.isTest && (cc.vv.is_ad = !0,
                cc.vv.is_share = !0,
                cc.vv.banner_jump = !1,
                cc.vv.adCount = 20,
                cc.vv.adCdtime = 1,
                Globle_login = !0,
                cc.vv.authSetting = !0,
                cc.vv.sdk.bannerTopLine = -405,
                cc.vv.isCanShowIAd = !1)
            },
            login: function() {
                Gameconfig.isTest || console.log("isLogin", window.h5api.isLogin())
            },
            saveData: function() {
                if (!Gameconfig.isTest) {
                    cc.vv.saveDataOver = !1;
                    var t = JSON.stringify(cc.vv.userData);
                    console.log("savedata"),
                    cc.sys.localStorage.setItem("saveDataCannon", t),
                    cc.vv.userData.lastGameTime = (new Date).getTime(),
                    cc.vv.saveDataOver = !0
                }
            },
            getData: function(t) {
                if (Gameconfig.isTest)
                    t();
                else {
                    var e = "";
                    e = cc.sys.localStorage.getItem("saveDataCannon"),
                    console.log("\u672a\u767b\u5f55,\u8bfb\u672c\u5730\u6863\uff1a"),
                    e ? (cc.vv.userData = JSON.parse(e),
                    console.log("\u8bfb\u6863\u6210\u529f")) : console.log("\u5b58\u6863\u83b7\u53d6\u5931\u8d25"),
                    t && t()
                }
            },
            canPlayAd: function(t) {
                Gameconfig.isTest ? t(!0, 10) : window.h5api.canPlayAd(function(e) {
                    console.log("canPlayAd? ", e),
                    t(e.canPlayAd, e.remain),
                    e.remain <= 0 || e.canPlayAd ? cc.vv.UIMng.showTips("\u4eca\u65e5\u5e7f\u544a\u6b21\u6570\u5df2\u7528\u5b8c\uff0c\u8bf7\u660e\u65e5\u518d\u6765") : cc.vv.UIMng.showTips("\u5e7f\u544a\u64ad\u653e\u672a\u5b8c\u6210")
                })
            },
            navigateToAd: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Gameconfig.isTest)
                    return cc.vv.userData.lastAdTime = (new Date).getTime(),
                    99 != cc.vv.adCount && cc.vv.userData.Dayadnum++,
                    cc.vv.userData.adTimes++,
                    void (t && t());
                cc.audioEngine.pauseAll(),
                setLoadingVisible(true, true, function () {
					e && e(),
                    cc.vv.sdk.canPlayAd(function() {})
				})
                
                // window.h5api.playAd(function(n) {
                //     console.log("\u5e7f\u544a\u64ad\u653e\u4ee3\u7801:" + n.code + ",\u6d88\u606f:" + n.message),
                //     1e4 === n.code || (10001 === n.code ? t() : (e && e(),
                //     cc.vv.sdk.canPlayAd(function() {})))
                // })
            },
            showAdOrShare: function(t, e) {
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                cc.vv.sdk.navigateToAd(e, null)
            },
            authorization: function(t, e, n) {
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
            },
            translateBanner: function(t) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            },
            showInterstitialAd: function() {},
            onShareAppMessage: function() {},
            shareAppMessage: function(t) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            },
            getShareInfo: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            },
            createNewBanner: function() {},
            initAd: function() {},
            navigateToBanner: function(t, e) {},
            canUseAd: function() {
                return !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SDKInstance: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7adb0Hi2EhCsoQmc+O27f9B", "SDKInstance");
        var o = t("httpUtil")
          , i = t("Gameconfig");
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            init: function() {
                i.isTest && (cc.vv.is_ad = !0,
                cc.vv.is_share = !0,
                cc.vv.banner_jump = !1,
                cc.vv.adCount = 20,
                cc.vv.adCdtime = 1,
                Globle_login = !0,
                cc.vv.authSetting = !0,
                cc.vv.sdk.bannerTopLine = -405,
                cc.vv.isCanShowIAd = !1)
            },
            login: function() {
                cc.vv.sdk.sysInfo = wx.getSystemInfoSync(),
                wx.login({
                    force: !1,
                    success: function(t) {
                        if (cc.vv.sdk.getSetting(),
                        t.code || t.anonymousCode) {
                            var e = {
                                code: t.isLogin ? t.code : null,
                                anonymousCode: t.anonymousCode
                            };
                            o.getLoginInfo(e, function() {
                                cc.vv.bananaConfig = !1,
                                Globle_login = !0
                            })
                        } else
                            cc.vv.needretry = !0,
                            console.log("\u767b\u5f55\u5931\u8d25\uff01" + t.errMsg)
                    }
                })
            },
            getSetting: function() {
                wx.getSetting({
                    success: function(t) {
                        t.authSetting["scope.userInfo"] ? (cc.vv.authSetting = !0,
                        wx.getUserInfo({
                            success: function(t) {
                                cc.vv.userName = t.userInfo.nickName,
                                cc.vv.avatarUrl = t.userInfo.avatarUrl
                            }
                        })) : cc.vv.authSetting = !1
                    }
                })
            },
            authorization: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = cc.vv.sdk.sysInfo.screenHeight
                  , o = cc.vv.sdk.sysInfo.screenWidth;
                if (e)
                    cc.vv.sdk.authorButton = wx.createUserInfoButton({
                        type: "text",
                        text: "",
                        lang: "en",
                        style: {
                            left: 0,
                            top: 0,
                            width: o,
                            height: n
                        }
                    });
                else {
                    var i = cc.vv.sdk.sysInfo.screenHeight
                      , c = cc.vv.sdk.sysInfo.screenWidth;
                    cc.vv.sdk.authorButton = wx.createUserInfoButton({
                        type: "text",
                        text: " ",
                        lang: "en",
                        withCredentials: !0,
                        style: {
                            left: .3544 * c,
                            top: i / 2 - 81.5 / cc.vv.halfHeight * i,
                            width: .291 * c,
                            height: 39 / cc.vv.halfHeight * i
                        }
                    })
                }
                cc.vv.sdk.authorButton.onTap(function(e) {
                    cc.vv.sdk.authorButton.destroy(),
                    cc.vv.sdk.authorButton = null,
                    e.userInfo ? (cc.vv.authSetting = !0,
                    cc.vv.userName = e.userInfo.nickName,
                    cc.vv.avatarUrl = e.userInfo.avatarUrl) : cc.vv.authSetting = !1,
                    "function" == typeof t && t()
                })
            },
            onShareAppMessage: function() {},
            shareAppMessage: function(t) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            },
            getShareInfo: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = Math.floor(5 * Math.random())
                  , n = "inviteId=" + cc.vv.userData.userId;
                switch (t) {
                case 1:
                    n += "&ch=home_share";
                    break;
                case 2:
                    n += "&ch=game_share";
                    break;
                case 3:
                    n += "&ch=game_over_share"
                }
                var o = Math.random() > .5 ? 1 : 2;
                return {
                    title: ["\u770b\u5230\u8fd9\u4e2a\u7403\u6211\u5c31\u77e5\u9053\u5b83\u505c\u4e0d\u4e0b\u6765\uff01", "\u542c\u8bf4\u4f60\u7684\u7269\u7406\u5b66\u5f88\u597d\uff0c\u8fd9\u4e2a\u7403\u4f60\u4f1a\u6253\u5417\uff1f", "\u8fd9\u6e38\u620f\u4e5f\u592a\u8650\u4e86\uff0c\u4e3a\u4ec0\u4e48\u8981\u624b\u8d31\u70b9\u8fdb\u6765...", "\u5f00\u5c40\u5341\u9897\u7403\uff0c\u4f60\u80fd\u73a9\u5230\u591a\u5c11\u5173\uff01", "\u8fd9\u5173\u6709\u70b9\u96be\uff0c\u4f60\u80fd\u5b8c\u6210\u5f97\u6bd4\u6211\u66f4\u5feb\u5417\uff1f"][e],
                    imageUrl: "https://imgsecond.yuanqiyouxi.com/Cannon/share/share" + o + ".jpg",
                    query: n
                }
            },
            initAd: function() {},
            showInterstitialAd: function() {},
            navigateToAd: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (i.isTest)
                    console.log("navigateToAd"),
                    cc.vv.userData.lastAdTime = (new Date).getTime(),
                    99 != cc.vv.adCount && cc.vv.userData.Dayadnum++,
                    cc.vv.userData.adTimes++,
                    t && t();
                else {
                    if (console.log("\u770b\u5e7f\u544a"),
                    !cc.vv.sdk.videoCanUse)
                        return console.log("\u770b\u5e7f\u544a\u5931\u8d25"),
                        cc.vv.UIMng.showTips("\u5e7f\u544a\u8bfb\u53d6\u4e2d\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"),
                        void ("function" == typeof e && e());
                    console.log("\u770b\u5e7f\u544a\u6210\u529f"),
                    cc.vv.audioMgr && cc.vv.audioMgr.pauseall(),
                    cc.vv.watchingAd = !0,
                    cc.vv.sdk.adcallback = t,
                    cc.vv.sdk.adfail = e,
                    cc.vv.sdk.videoAd.show().catch(function(t) {
                        cc.vv.sdk.videoAd.load().then(function() {
                            return cc.vv.sdk.videoAd.show()
                        })
                    })
                }
            },
            navigateToBanner: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                !i.isTest && cc.vv.sdk.bannerCanUse[e] && (t ? (cc.vv.sdk.bannerAd[e].show(),
                cc.vv.showBanner = !0) : (cc.vv.sdk.bannerAd[e].hide(),
                cc.vv.showBanner = !1))
            },
            canUseAd: function() {
                return !!cc.vv.is_ad && (!(cc.vv.userData.Dayadnum >= cc.vv.adCount) && (!cc.vv.is_share || (new Date).getTime() - cc.vv.userData.lastAdTime > 1e3 * cc.vv.adCdtime))
            },
            bananaReportLoad: function() {},
            bananaReportExposure: function(t) {
                t && t.length
            },
            bananaReportClick: function(t) {},
            bananaReportNavigate: function(t) {},
            RecorderStart: function() {},
            RecordeStop: function() {},
            shareRecordeVideo: function(t) {},
            RecordOnStop: function() {}
        }),
        cc._RF.pop()
    }
    , {
        Gameconfig: "Gameconfig",
        httpUtil: "httpUtil"
    }],
    SkinItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d1ba8PwK4tNKZ4a3ktuL53O", "SkinItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite,
                bgSpirte: cc.Sprite,
                ownSprite: cc.SpriteFrame
            },
            init: function(t) {
                var e = this;
                this.typeIndex = t,
                cc.loader.loadRes("tex/skinUI/ball" + t, cc.SpriteFrame, function(t, n) {
                    e.icon.spriteFrame = n
                }),
                this.updateUnlockState()
            },
            onBtnClick: function() {
                this.chooseThis()
            },
            updateUnlockState: function() {
                1 == cc.vv.userData.ballsState[this.typeIndex] ? (this.icon.node.color = new cc.Color(255,255,255),
                this.icon.node.opacity = 255,
                this.bgSpirte.spriteFrame = this.ownSprite) : (this.icon.node.color = new cc.Color(0,0,0),
                this.icon.node.opacity = 30)
            },
            updatekK: function() {
                cc.vv.skinUI.curChooseBallTypeIndex == this.typeIndex && (cc.vv.skinUI.kk.active = !0,
                cc.vv.skinUI.kk.parent = this.node,
                cc.vv.skinUI.setKKPosByNode(this.node))
            },
            chooseThis: function() {
                (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && cc.vv.skinUI.curChooseBallTypeIndex == this.typeIndex && (cc.vv.userData.ballSkinID = this.typeIndex,
                cc.vv.skinUI.onCloseBtnClick()),
                1 == cc.vv.userData.ballsState[this.typeIndex] && (cc.vv.game.useSkin(this.typeIndex),
                cc.vv.skinUI.curChooseBallTypeIndex = this.typeIndex,
                cc.vv.skinUI.setKKPosByNode(this.node),
                cc.vv.skinUI.updateBtnSate(),
                cc.vv.netMng.SaveNetData("chooseThis"))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SkinUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a8d0cLWp4xH37FxwwXrmvIY", "SkinUI");
        var o = "TouchStart"
          , i = "TouchEnd"
          , c = "TouchIng"
          , a = "TouchLerp";
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                dotBox: cc.Node,
                scrollView: cc.ScrollView,
                kk: cc.Node,
                bottomNode: [],
                itemBallPrefab: cc.Prefab,
                coinLabel: cc.Label,
                bottomText: cc.Sprite,
                bottomTextSF: [cc.SpriteFrame],
                keyBox: cc.Node,
                keys: [cc.Node],
                unlockBtn: cc.Node,
                btnCoinLabel: cc.Label,
                unEnoughCoin: cc.Node
            },
            updateADShare: function() {},
            showUnEnoughCoin: function() {
                var t = this;
                this.unEnoughCoin.active = !0,
                this.unEnoughCoin.stopAllActions(),
                this.unEnoughCoin.y = -50,
                this.unEnoughCoin.opacity = 255,
                this.unEnoughCoin.runAction(cc.spawn(cc.fadeOut(1.5).easing(cc.easeOut(.5)), cc.sequence(cc.moveTo(1.5, 0, 100).easing(cc.easeIn(.5)), cc.callFunc(function() {
                    t.unEnoughCoin.active = !1
                }))))
            },
            onLoad: function() {
                cc.vv.skinUI = this,
                this.changeState(i),
                this.ballCompArr = [];
                for (var t = 0; t < 7; t++)
                    this.ballCompArr.push([]);
                this.ballBox = [],
                this.boallBoxFlags = [];
                for (var e = 0; e < this.content.children.length; e++)
                    this.ballBox.push(this.content.children[e]),
                    this.boallBoxFlags.push(!1);
                this.boallBoxFlags[0] = !0,
                this.scrollView.node.on("touch-up", this.touchUp.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this)),
                this.scrollView.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCANCEL.bind(this)),
                this.chooseIndex = 0
            },
            updateCoinLabel: function() {
                this.coinLabel.string = cc.vv.userData.coins
            },
            touchUp: function() {
                this.changeState(i)
            },
            touchStart: function() {
                this.changeState(o)
            },
            touchMove: function() {
                this.changeState(c)
            },
            touchEnd: function() {
                this.changeState(i)
            },
            touchCANCEL: function() {
                this.changeState(i)
            },
            start: function() {
                this.updateDot(),
                this.curCreateNum = 9;
                for (var t = 0; t < 9; t++)
                    this.createBallItem(t, 0);
                cc.vv.userData.ballSkinID < 9 ? this.chooseBallItemByIndex(cc.vv.userData.ballSkinID, !1) : this.kk.active = !1,
                this.updateUseBallState()
            },
            onEnable: function() {
                cc.vv.homeUI.hideHomeUI(),
                this.updateCoinLabel(),
                this.updateADShare(),
                this.updateAllItem(),
                cc.vv.sdk.navigateToBanner(!0),
                console.log("skinUI navigateToBanner")
            },
            onDisable: function() {
                cc.vv.homeUI.showHomeUI()
            },
            setKKPosByNode: function(t) {
                this.kk.parent = t,
                this.kk.position = cc.Vec2.ZERO
            },
            updateDot: function() {
                this.dotBox.children[this.chooseIndex].color = new cc.Color(255,255,255);
                for (var t = 0; t < this.dotBox.children.length; t++)
                    this.chooseIndex != t && (this.dotBox.children[t].color = (new cc.color).fromHEX("#51AEF7"))
            },
            createBallItem: function(t, e) {
                var n = cc.instantiate(this.itemBallPrefab);
                n.parent = this.ballBox[e];
                var o = n.getComponent("SkinItem");
                o.init(t),
                this.ballCompArr[e].push(o)
            },
            changeState: function(t) {
                this.state = t
            },
            update: function(t) {
                switch (this.state) {
                case o:
                case c:
                    break;
                case i:
                    if (this.content.position.x < -252.5 - 555 * this.chooseIndex - 100 ? (this.chooseIndex++,
                    this.chooseIndex > this.ballBox.length - 1 && (this.chooseIndex = this.ballBox.length - 1)) : this.content.position.x > -252.5 - 555 * this.chooseIndex + 100 && (this.chooseIndex--,
                    this.chooseIndex < 0 && (this.chooseIndex = 0)),
                    0 == this.boallBoxFlags[this.chooseIndex]) {
                        this.boallBoxFlags[this.chooseIndex] = !0;
                        for (var e = 0; e < 9; e++)
                            this.createBallItem(e + 9 * this.chooseIndex, this.chooseIndex)
                    }
                    this.updateBtnSate(),
                    this.updateDot(),
                    this.changeState(a),
                    this.updateAllKK();
                    break;
                case a:
                    var n = -252.5 - 555 * this.chooseIndex;
                    this.content.x = this.lerp(n, .2, this.content.x)
                }
            },
            showAnima: function() {},
            hideAnima: function() {},
            updateAllKK: function() {
                for (var t = 0; t < this.ballCompArr.length; t++)
                    if (this.ballCompArr[t].length > 0)
                        for (var e = 0; e < 9; e++)
                            this.ballCompArr[t][e].updatekK()
            },
            updateAllItem: function() {
                for (var t = 0; t < this.ballCompArr.length; t++)
                    if (this.ballCompArr[t].length > 0)
                        for (var e = 0; e < 9; e++)
                            this.ballCompArr[t][e].updateUnlockState()
            },
            lerp: function(t, e, n) {
                return n + (t - n) * e
            },
            updateKey: function() {
                for (var t = 0; t < this.keys.length; t++)
                    t < cc.vv.userData.keyCount ? (this.keys[t].color = new cc.Color(255,255,255),
                    this.keys[t].opacity = 255) : (this.keys[t].color = new cc.Color(0,0,0),
                    this.keys[t].opacity = 30)
            },
            updateBtnSate: function() {
                switch (this.chooseIndex) {
                case 0:
                    this.bottomText.node.active = !1,
                    this.keyBox.active = !1,
                    this.btnCoinLabel.string = 500 + 250 * cc.vv.userData.buyData[0];
                    for (var t = !0, e = 9 * this.chooseIndex; e < 9; e++)
                        if (0 == cc.vv.userData.ballsState[e]) {
                            t = !1;
                            break
                        }
                    this.unlockBtn.active = !t;
                    break;
                case 1:
                    this.unlockBtn.active = !1,
                    this.bottomText.node.active = !0,
                    this.bottomText.spriteFrame = this.bottomTextSF[2],
                    this.keyBox.active = !1,
                    this.btnCoinLabel.string = 1e3 + 500 * cc.vv.userData.buyData[1];
                    break;
                case 2:
                    this.unlockBtn.active = !1,
                    this.bottomText.node.active = !0,
                    this.bottomText.spriteFrame = this.bottomTextSF[0],
                    this.keyBox.active = !1;
                    break;
                case 3:
                    this.unlockBtn.active = !1,
                    this.bottomText.node.active = !0,
                    this.bottomText.spriteFrame = this.bottomTextSF[2],
                    this.keyBox.active = !1;
                    break;
                case 4:
                    this.unlockBtn.active = !1,
                    this.bottomText.node.active = !1,
                    this.keyBox.active = !0,
                    this.updateKey();
                    break;
                case 5:
                    this.unlockBtn.active = !1,
                    this.bottomText.node.active = !0,
                    this.bottomText.spriteFrame = this.bottomTextSF[2],
                    this.keyBox.active = !1;
                    break;
                case 6:
                    this.unlockBtn.active = !1,
                    this.bottomText.node.active = !0,
                    this.bottomText.spriteFrame = this.bottomTextSF[1],
                    this.keyBox.active = !1
                }
            },
            chooseBallItemByIndex: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.ballCompArr[this.chooseIndex][t].chooseThis(e)
            },
            updateUseBallState: function() {},
            onUnlockBtnClick: function() {
                cc.vv.audioMgr.playSFX("UIClick");
                var t = 0;
                if (t = 0 == this.chooseIndex ? 500 + 250 * cc.vv.userData.buyData[0] : 1e3 + 500 * cc.vv.userData.buyData[1],
                this.checkIsEnoughMoney(t)) {
                    cc.vv.gameData.coins -= t;
                    var e = [];
                    if (0 == this.chooseIndex) {
                        cc.vv.userData.buyData[0]++;
                        for (var n = 0; n < 9; n++)
                            0 == cc.vv.userData.ballsState[n] && e.push(n)
                    } else if (1 == this.chooseIndex) {
                        cc.vv.userData.buyData[1]++;
                        for (var o = 0; o < 9; o++)
                            0 == cc.vv.userData.ballsState[o] && e.push(o)
                    }
                    var i = Math.floor(Math.random() * e.length);
                    cc.vv.userData.ballsState[e[i]] = 1,
                    this.updateAllItem(),
                    this.updateBtnSate(),
                    cc.vv.UIMng.updateBulletCountLabel(),
                    cc.vv.netMng.SaveNetData("SkinUI")
                }
            },
            checkIsEnoughMoney: function(t) {
                return cc.vv.gameData.coins >= t || (this.showUnEnoughCoin(),
                !1)
            },
            onCloseBtnClick: function() {
                cc.vv.audioMgr.playSFX("UIClick"),
                this.node.active = !1,
                console.log("homeui\u663e\u793a\u63d2\u5c4f\u5e7f\u544a"),
                cc.vv.sdk.showInterstitialAd()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SliderTool: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6dc52WXi6FBErF8Ggy49fCN", "SliderTool"),
        cc.Class({
            extends: t("ElementBasics"),
            properties: {
                elementType: {
                    default: ElementType.SliderTool,
                    type: ElementType,
                    override: !0
                },
                sliderBtnNd: cc.Node,
                sliider: cc.Slider,
                bgSliider: cc.Node,
                handle: cc.Node,
                touchTipsPrefab: cc.Prefab
            },
            onLoad: function() {
                this.registerEvent(),
                this.touchTips = null
            },
            start: function() {
                cc.vv.edit && cc.vv.game.sliderToolComp.push(this)
            },
            createTouchTips: function() {
                var t = cc.instantiate(this.touchTipsPrefab);
                return t.parent = cc.vv.game.effBox,
                t.position = this.node.position,
                t.getComponent("TouchTips")
            },
            createInit: function() {
                this._super(),
                this.bgSliider.width = this.node.width + 29,
                this.touchTipsPrefab && (this.touchTips = this.createTouchTips())
            },
            setTarget: function(t) {
                this.target = t
            },
            recycle: function() {
                this._super(),
                this.target = null,
                this.touchTips && (this.touchTips.node.destroy(),
                this.touchTips = null)
            },
            registerEvent: function() {
                this.handle.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this),
                this.handle.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this),
                this.handle.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this),
                this.sliider.node.on(cc.Node.EventType.TOUCH_START, this.sliderCallback, this),
                this.sliider.node.on(cc.Node.EventType.TOUCH_END, this.onEventSliiderEnd, this),
                this.sliider.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventSliiderCancel, this)
            },
            sliderCallback: function() {
                this.touchTips && this.touchTips.showAnima(),
                0 == cc.vv.userData.tutorialState && (cc.vv.userData.tutorialState++,
                cc.vv.game.updateTutorial())
            },
            onDestroy: function() {
                this.sliider.node.off(cc.Node.EventType.TOUCH_START, this.sliderCallback, this),
                this.handle.off(cc.Node.EventType.TOUCH_START, this.onEventStart, this)
            },
            onEventStart: function(t) {
                this.touchTips && this.touchTips.showAnima(),
                cc.vv.game.state == GameState.Idle && cc.vv.game.changeState(GameState.Playing),
                0 == cc.vv.userData.tutorialState && (cc.vv.userData.tutorialState++,
                cc.vv.game.updateTutorial())
            },
            onEventSliiderEnd: function() {
                this.touchTips && this.touchTips.hideAnima()
            },
            onEventSliiderCancel: function() {
                this.touchTips && this.touchTips.hideAnima()
            },
            onEventEnd: function(t) {
                this.touchTips && this.touchTips.hideAnima()
            },
            onEventCancel: function(t) {
                this.touchTips && this.touchTips.hideAnima()
            },
            update: function(t) {
                this._super(t),
                this.target && (this.target.isRecycle || (this.target.node.position = cc.vv.game.node.convertToNodeSpaceAR(this.sliderBtnNd.parent.convertToWorldSpaceAR(this.sliderBtnNd.position)),
                this.touchTips && (this.touchTips.node.position = this.target.node.position)))
            }
        }),
        cc._RF.pop()
    }
    , {
        ElementBasics: "ElementBasics"
    }],
    Splash: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "467eaqtEq1Mdr+Rl6ufqaG7", "Splash");
        var o = t("httpUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                loginFail: cc.Node,
                text: cc.Node,
                splashbtn: cc.Node,
                loadblood: cc.Node
            },
            onLoad: function() {
                cc.vv.splash = this,
                this.preloading = !1,
                this.isLoadBoneOver = !1,
                this.isLoadTutorialOver = !1,
                Gameconfig.isTest || o.getShareAdConfig(function() {
                    cc.vv.sdk.login(),
                    cc.vv.sdk.onShareAppMessage(),
                    cc.vv.sdk.initAd()
                }),
                Globle_login = !0,
                cc.vv.halfWidth = this.node.width / 2,
                cc.vv.halfHeight = this.node.height / 2,
                this.initUserData(),
                this.isPreloadOver = !1,
                this.step = 0,
                this.pro = 0
            },
            initUserData: function() {
                for (var t = 0; t < 63; t++)
                    cc.vv.userData.ballsState.push(0);
                cc.vv.userData.ballsState[0] = 1
            },
            update: function(t) {
                Globle_login && !this._isStarLoad && (this._isStarLoad = !0,
                this.preloadMain(),
                this.loadNetData())
            },
            preloadMain: function() {
                var t = this
                  , e = 0;
                cc.director.preloadScene("Main", function(n, o, i) {
                    var c = n / o
                      , a = c - e;
                    e = c,
                    t.updateProgres(.7 * a)
                }, function(e) {
                    t.nextStep("===>preloadMain"),
                    cc.find("Canvas/loading").active = !1,
                    cc.vv.userData.tutorialState ? buryPoint.report("game_loaded", {
                        new_user: "false"
                    }) : buryPoint.report("game_loaded", {
                        new_user: "true"
                    })
                })
            },
            loadNetData: function() {
                var t = this;
                cc.vv.netMng.GetNetData("splash", function() {
                    t.updateProgres(.05),
                    t.nextStep("===>loadNetData"),
                    t.loadLevelData(),
                    cc.vv.isAlreadyGetNetData = !0,
                    t.checkIsLoadTutorial(),
                    t.compatibleUserData(),
                    t.updateAdCount()
                })
            },
            loadLevelData: function() {
                var t = this;
                cc.vv.gameData.loadLevelJson(function() {
                    t.updateProgres(.05),
                    t.nextStep("===>loadLevelData"),
                    t.loadBG(),
                    t.loadSkin()
                })
            },
            loadBG: function() {
                for (var t = this, e = 0; e < cc.vv.gameData.cannonJson.length; e++)
                    if (cc.vv.gameData.cannonJson[e].Level == cc.vv.userData.level) {
                        cc.loader.loadRes("tex/bg/" + cc.vv.gameData.cannonJson[e].Bg, cc.SpriteFrame, function(e, n) {
                            cc.vv.bgSF = n,
                            t.updateProgres(.05),
                            t.nextStep("===>loadBG")
                        });
                        break
                    }
            },
            loadSkin: function() {
                var t = this;
                cc.loader.loadRes("tex/connon/cannon_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                    cc.vv.cannonSF[0] = n,
                    t.updateProgres(.05),
                    cc.loader.loadRes("tex/connon/guncarriage_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                        cc.vv.cannonSF[1] = n,
                        t.updateProgres(.05),
                        t.nextStep("===>loadSkin")
                    })
                })
            },
            updateProgres: function(t) {
                this.pro += t,
                this.pro > .95 && (this.pro = .95),
                this.loadblood.width = 571 * (this.pro + .05)
            },
            nextStep: function() {
                this.step++,
                this.step >= 5 && (this.step = 0,
                this.onsplashbtn())
            },
            updateAdCount: function() {
                new Date(cc.vv.userData.lastGameTime).toDateString() != (new Date).toDateString() && (cc.vv.userData.Dayadnum = 0,
                cc.vv.userData.Daysharenum = 0)
            },
            compatibleUserData: function() {
                "number" != typeof cc.vv.userData.luckProgress && (cc.vv.userData.luckProgress = 0),
                "number" != typeof cc.vv.userData.keyLevel && (cc.vv.userData.keyLevel = 0),
                "number" != typeof cc.vv.userData.bossLevel && (cc.vv.userData.bossLevel = 1),
                "number" != typeof cc.vv.userData.bossLevelState && (cc.vv.userData.bossLevelState = 0),
                cc.vv.userData.tutorialState ? buryPoint.report("splash_loading", {
                    new_user: "false"
                }) : buryPoint.report("splash_loading", {
                    new_user: "true"
                })
            },
            onsplashbtn: function() {
                cc.vv.userData.tutorialState > 0 ? (cc.director.loadScene("Main"),
                buryPoint.report("splash_loaded", {
                    new_user: "false"
                })) : (cc.director.loadScene("Main"),
                buryPoint.report("splash_loaded", {
                    new_user: "true"
                }))
            },
            checkIsLoadTutorial: function() {},
            onRetry: function() {
                cc.vv.needretry = !1,
                cc.vv.sdk.login()
            }
        }),
        cc._RF.pop()
    }
    , {
        httpUtil: "httpUtil"
    }],
    StarEff: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c9a1clb2BFHFqvg5wvLGkXs", "StarEff"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function() {
                this.isRecycle = !1
            },
            doAnima: function(t, e) {
                var n = this
                  , o = cc.vv.UIMng.getStarPos(t);
                this.node.stopAllActions(),
                this.node.runAction(cc.spawn(cc.rotateBy(1, 220), cc.sequence(cc.moveTo(1, o).easing(cc.easeOut(.7)), cc.callFunc(function() {
                    cc.vv.audioMgr.playSFX("StarCount"),
                    n.recycle(),
                    e && e()
                }))))
            },
            recycle: function() {
                this.isRecycle || (cc.vv.UIMng.deletStarComp(this),
                this.node.stopAllActions(),
                this.isRecycle = !0,
                this.node.x = -2e3,
                this.node.opacity = 0,
                cc.vv.UIMng.starPool.push(this.node),
                cc.vv.game.state == GameState.Playing && cc.vv.game.checkIsGameOver())
            },
            update: function(t) {
                this.isRecycle || cc.vv.game.state == GameState.GameOver && this.recycle()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TAward: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4a42bqYig5IUa7l4LM9ydAq", "TAward"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bgLight: cc.Node,
                coinIcon: cc.Sprite,
                coinLabel: cc.Label,
                icon: cc.Sprite
            },
            init: function(t, e, n, o) {
                var i = this;
                this.tui = t,
                e < 8 ? (this.icon.node.active = !1,
                this.bgLight.active = !1,
                this.coinLabel.string = n,
                cc.vv.gameData.coins += n,
                this.tui.updateCoinLabel(),
                this.tui = null,
                cc.vv.netMng.SaveNetData("ChestOpenCoins")) : (this.bgLight.active = !0,
                this.icon.node.active = !0,
                this.coinIcon.node.active = !1,
                this.coinLabel.node.active = !1,
                cc.vv.userData.ballsState[o] = 1,
                cc.vv.userData.ballSkinID = o,
                cc.vv.game.useSkin(cc.vv.userData.ballSkinID),
                cc.vv.UIMng.updateBulletCountLabel(),
                cc.vv.netMng.SaveNetData("ChestOpenBalls"),
                cc.loader.loadRes("tex/skinUI/ball" + o, cc.SpriteFrame, function(t, e) {
                    i.icon.spriteFrame = e
                })),
                this.bgLight.active && (this.bgLight.stopAllActions(),
                this.bgLight.runAction(cc.repeatForever(cc.rotateBy(1, 60)))),
                cc.vv.netMng.SaveNetData("TAward")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TouchArea: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7a16eK8KzpHv4IsFzfty6Ki", "TouchArea");
        var o = 0
          , i = 1;
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.vv.touchArea = this,
                this.registerEvent(),
                this.shootInterval = .15,
                this.curShootTime = 0,
                this.state = i
            },
            registerEvent: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this)
            },
            onEventStart: function(t) {
                if (1 == cc.vv.userData.tutorialState && (cc.vv.userData.tutorialState++,
                cc.vv.game.updateTutorial()),
                cc.vv.game.state == GameState.Idle && cc.vv.game.changeState(GameState.Playing),
                cc.vv.game.state != GameState.GameOver) {
                    this.curShootTime = 0,
                    this.changeState(o);
                    this.checkClickPos(t)
                }
            },
            onEventEnd: function(t) {
                this.changeState(i)
            },
            onEventCancel: function(t) {
                this.changeState(i)
            },
            checkClickPos: function(t) {
                var e = t.getLocation();
                return e = this.node.convertToNodeSpaceAR(e)
            },
            changeState: function(t) {
                this.state = t
            },
            update: function(t) {
                if (cc.vv.game.state != GameState.GameOver)
                    switch (this.state) {
                    case o:
                        0 == this.curShootTime && cc.vv.game.shootBullet(),
                        this.curShootTime += t,
                        this.curShootTime >= this.shootInterval && (this.curShootTime = 0)
                    }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TouchTips: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "51e15lL0wlGoqr574oMgPXu", "TouchTips"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.opacity = 0
            },
            showAnima: function() {
                this.node.opacity = 255,
                this.node.stopAllActions(),
                this.node.scale = 0,
                this.node.runAction(cc.sequence(cc.scaleTo(.2, 1.1, 1.1), cc.scaleTo(.05, 1, 1)))
            },
            hideAnima: function() {
                var t = this;
                this.node.opacity = 255,
                this.node.stopAllActions(),
                this.node.scale = 1,
                this.node.runAction(cc.sequence(cc.scaleTo(.05, 1.1, 1.1), cc.scaleTo(.2, 0, 0), cc.callFunc(function() {
                    t.node.opacity = 0
                })))
            },
            update: function(t) {
                0 != this.node.opacity && (this.node.angle += 30 * t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TreasureItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "aeddcmUo6xJ65LuOnuAvl79", "TreasureItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bone: dragonBones.ArmatureDisplay
            },
            onLoad: function() {
                this.isRreadyClick = !1
            },
            init: function(t, e) {
                this.tUI = t,
                this.typeIndex = e,
                this.money = 20 + 5 * this.typeIndex
            },
            onBtnClick: function() {
                var t = this;
                cc.vv.userData.keyCount <= 0 || this.isRreadyClick || (cc.vv.userData.keyCount--,
                this.tUI.openCont++,
                this.tUI.updateKey(),
                this.tUI.updateBtnState(),
                this.isRreadyClick = !0,
                this.bone.playAnimation("open", 1),
                this.tUI.playAnima(),
                this.typeIndex < 8 ? cc.vv.audioMgr.playSFX("ChestOpenCoins") : cc.vv.audioMgr.playSFX("ChestOpenBalls"),
                setTimeout(function() {
                    t.tUI && t.tUI.node && (t.tUI.createTA(t.node.position.add(cc.v2(0, 59)), t.typeIndex, t.money),
                    t.node.destroy(),
                    t.tUI = null)
                }, 1650))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TreasureUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d0a89NDc3tJeLgrg+9rHm6a", "TreasureUI"),
        cc.Class({
            extends: t("PopupUI"),
            properties: {
                treasureItemPrafab: cc.Prefab,
                tAwardPrefab: cc.Prefab,
                coinLabel: cc.Label,
                keys: [cc.Sprite],
                keySF: [cc.SpriteFrame],
                treasureBox: cc.Node,
                icon: cc.Sprite,
                keyBottomBox: cc.Node,
                adBtn: cc.Node,
                nextLevelLabel: cc.Label,
                tABox: cc.Node,
                adShare: cc.Sprite,
                adShareSF: [cc.SpriteFrame],
                box: cc.Node
            },
            onLoad: function() {
                this.setBanner(),
                this.commonBack = cc.find("commonBack", this.node),
                cc.vv.sdk.navigateToBanner(!0)
            },
            start: function() {
                var t = this;
                this.canClick = !0,
                this.curTime = 0;
                var e = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                e.sort(function(t, e) {
                    return Math.random() > .5 ? -1 : 1
                });
                for (var n = 0; n < 9; n++)
                    this.createT(n, e[n]);
                this.skinIndex = 0;
                for (var o = 36; o < 45; o++)
                    if (0 == cc.vv.userData.ballsState[o]) {
                        this.skinIndex = o;
                        break
                    }
                cc.loader.loadRes("tex/skinUI/ball" + this.skinIndex, cc.SpriteFrame, function(e, n) {
                    t.icon.spriteFrame = n
                }),
                this.adBtn.active = !1,
                this.closeBtn.active = !1,
                this.commonBack.active = !1,
                this.openCont = 0,
                cc.vv.audioMgr.playSFX("ChestroomAppear"),
                this.updateADShare()
            },
            updateADShare: function() {
                var t = cc.vv.utilMng.getSharAndADState();
                0 == t ? this.adShare.spriteFrame = this.adShareSF[0] : 1 == t && (this.adShare.spriteFrame = this.adShareSF[1])
            },
            updateKey: function() {
                for (var t = 0; t < this.keys.length; t++)
                    t < cc.vv.userData.keyCount ? this.keys[t].spriteFrame = this.keySF[0] : this.keys[t].spriteFrame = this.keySF[1]
            },
            updateBtnState: function() {
                this.openCont <= 6 ? 0 == cc.vv.userData.keyCount ? (this.adBtn.active = !0,
                this.closeBtn.active = !0,
                this.keyBottomBox.active = !1) : (this.adBtn.active = !1,
                this.closeBtn.active = !1,
                this.keyBottomBox.active = !0) : 0 == cc.vv.userData.keyCount ? (this.adBtn.active = !1,
                this.closeBtn.active = !0,
                this.keyBottomBox.active = !1) : (this.adBtn.active = !1,
                this.closeBtn.active = !1,
                this.commonBack.active = !1,
                this.keyBottomBox.active = !0)
            },
            updateCoinLabel: function() {
                this.coinLabel.string = cc.vv.gameData.coins
            },
            onDestroy: function() {
                this._super(),
                cc.vv.UIMng.updateGameKey(),
                cc.vv.sdk.navigateToBanner(!1)
            },
            createT: function(t, e) {
                var n = 0
                  , o = 0;
                t < 3 ? (o = 150.5,
                n = 160 * t - 160) : t < 6 ? (o = -4.5,
                n = 160 * (t - 3) - 160) : t < 9 && (o = -159.5,
                n = 160 * (t - 6) - 160);
                var i = cc.instantiate(this.treasureItemPrafab)
                  , c = i.getComponent("TreasureItem");
                i.parent = this.treasureBox,
                c.init(this, e),
                i.position = cc.v2(n, o)
            },
            createTA: function(t, e, n) {
                var o = cc.instantiate(this.tAwardPrefab)
                  , i = o.getComponent("TAward");
                o.parent = this.tABox,
                o.position = t,
                i.init(this, e, n, this.skinIndex)
            },
            onGetKeyBtnClick: function() {
                var t = this;
                if (this.canClick) {
                    this.canClick = !1,
                    cc.vv.sdk.navigateToBanner(!1);
                    var e = cc.vv.utilMng.getSharAndADState();
                    0 == e ? cc.vv.sdk.navigateToAd(function() {
                        cc.vv.userData.keyCount = 3,
                        t.updateKey(),
                        t.updateBtnState(),
                        t.updateADShare()
                    }) : 1 == e && cc.vv.sdk.shareAppMessage(function() {
                        cc.vv.userData.keyCount = 3,
                        t.updateKey(),
                        t.updateBtnState()
                    }, null, 2)
                }
            },
            onNextLevelBtnClick: function() {
                this.isJumpStart || this.canClick && (this.canClick = !1,
                this.hideAnima(),
                cc.vv.game.changeState(GameState.Idle),
                cc.vv.UIMng.updateCurLevel())
            },
            playAnima: function() {
                this.curTime = 0,
                this.canClick = !1
            },
            hideAnima: function(t) {
                var e = this;
                this.box.stopAllActions(),
                this.box.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                    e.node.destroy(),
                    t && t()
                })))
            },
            update: function(t) {
                this.canClick || (this.curTime += t,
                this.curTime >= 2 && (this.canClick = !0))
            }
        }),
        cc._RF.pop()
    }
    , {
        PopupUI: "PopupUI"
    }],
    UIMng: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "846d9hqaaBHRokoXxLzxtyD", "UIMng"),
        cc.Class({
            extends: cc.Component,
            properties: {
                winUIPrefab: cc.Prefab,
                failUIPrefab: cc.Prefab,
                luckAwardUIPrefab: cc.Prefab,
                skinUI: cc.Node,
                skinBtn: cc.Node,
                levelLabel: cc.Label,
                reStartBtn: cc.Node,
                starMask: cc.Node,
                starBox: cc.Node,
                levelBox: cc.Node,
                keyBox: cc.Node,
                starEffPrefab: cc.Prefab,
                effBox: cc.Node,
                popBox: cc.Node,
                loadMask: cc.Node,
                bulletCountLabel: cc.Label,
                tips: cc.Node,
                tipsLabel: cc.Label,
                bdEffPrefab: cc.Prefab,
                bulletDieBox: cc.Node,
                caiDaiPrefab: cc.Prefab,
                bossBGSF: cc.SpriteFrame,
                levelTopText: cc.Sprite,
                levelTopTextSF: [cc.SpriteFrame],
                completeBtn: cc.Node,
                tipsBone: dragonBones.ArmatureDisplay,
                tipsCount: cc.Label,
                giveUpTipsPrefab: cc.Prefab,
                systemBox: cc.Node
            },
            onLoad: function() {
                cc.vv.UIMng = this,
                this.starComp = [],
                this.updateCurLevel(),
                this.starProgress = 0,
                this.starPool = [],
                this.canRestart = !0,
                cc.vv.UIMng.updateBulletCountLabel(),
                cc.vv.userData.tutorialState < 2 && (this.skinBtn.active = !1),
                this.curBDTime = 0,
                this.unUseBDEffTime = .1,
                this.bdEffPool = [],
                this.updateGameKey()
            },
            checkIsShowTipsBone: function() {
                if (!this.tipsBone.node.active) {
                    for (var t = !1, e = 0; e < cc.vv.game.cannonComp.length; e++)
                        if (cc.vv.game.cannonComp[e].curBulletCount > 0) {
                            t = !0;
                            break
                        }
                    t && this.showTipsBone()
                }
            },
            showTipsBone: function() {
                this.updateTpisCount(),
                this.tipsBone.node.opacity = 0,
                this.tipsBone.node.active = !0,
                this.tipsBone.node.stopAllActions(),
                this.tipsBone.node.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {})))
            },
            hideTipsBone: function() {
                var t = this;
                this.tipsBone.node.opacity < 255 || (this.tipsBone.node.opacity = 254,
                this.tipsBone.node.stopAllActions(),
                this.tipsBone.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                    t.tipsBone.node.active = !1
                }))))
            },
            updateTpisCount: function() {
                for (var t = 0, e = 0; e < cc.vv.game.cannonComp.length; e++)
                    t += cc.vv.game.cannonComp[e].curBulletCount;
                this.tipsCount.string = t
            },
            setTopUIText: function(t) {
                this.levelTopText.spriteFrame = this.levelTopTextSF[t]
            },
            showCompleteBtn: function() {
                this.completeBtn.active = !0,
                this.completeBtn.stopAllActions(),
                this.completeBtn.runAction(cc.sequence(cc.moveTo(.25, cc.v2(375, 296.5)).easing(cc.easeOut(1)), cc.callFunc(function() {})))
            },
            hideCompleteBtn: function() {
                this.completeBtn.position = cc.v2(567, 296.5),
                this.completeBtn.active = !1,
                this.completeBtn.stopAllActions()
            },
            showBossStartUI: function(t) {
                var e = this;
                this.bossStartPrefab ? (cc.instantiate(this.bossStartPrefab).parent = this.popBox,
                t && t()) : (this.setLoadMask(!0),
                cc.loader.loadRes("prefab/BossStartUI", cc.Prefab, function(n, o) {
                    e.bossStartPrefab = o,
                    cc.instantiate(e.bossStartPrefab).parent = e.popBox,
                    e.setLoadMask(!1),
                    t && t()
                }))
            },
            showBossLevelWinUI: function(t) {
                var e = this;
                this.bossWinUIPrefab ? (cc.instantiate(this.bossWinUIPrefab).parent = this.popBox,
                t && t()) : (this.setLoadMask(!0),
                cc.loader.loadRes("prefab/BossWinUI", cc.Prefab, function(n, o) {
                    e.bossWinUIPrefab = o,
                    cc.instantiate(o).parent = e.popBox,
                    e.setLoadMask(!1),
                    t && t()
                }))
            },
            showCaiDai: function(t) {
                var e = cc.instantiate(this.caiDaiPrefab);
                e.parent = this.effBox,
                t.y += 30,
                e.position = t,
                e.getComponent(dragonBones.ArmatureDisplay).playAnimation("idle", 1),
                this.scheduleOnce(function() {
                    e.destroy()
                }, 3)
            },
            showBulletDie: function(t) {
                var e = this;
                if (this.canUseBDEff) {
                    this.canUseBDEff = !1;
                    var n = null
                      , o = null;
                    this.bdEffPool.length > 0 ? (n = this.bdEffPool.pop(),
                    o = n.node) : ((o = cc.instantiate(this.bdEffPrefab)).parent = this.bulletDieBox,
                    n = o.getComponent(dragonBones.ArmatureDisplay)),
                    o.opacity = 255,
                    o.position = t,
                    n.playAnimation("idle", 1),
                    this.scheduleOnce(function() {
                        o.opacity = 0,
                        e.bdEffPool.push(n)
                    }, .5)
                }
            },
            checkIsShowLuckAwardUI: function() {
                return Math.random() <= .2
            },
            showAwardUI: function(t) {
                var e = this
                  , n = null;
                this.awardUIPrefab ? ((n = cc.instantiate(this.awardUIPrefab)).parent = this.popBox,
                n.getComponent("AwardUI").init(),
                t && t()) : (this.setLoadMask(!0),
                cc.loader.loadRes("prefab/AwardUI", cc.Prefab, function(o, i) {
                    e.awardUIPrefab = i,
                    (n = cc.instantiate(e.awardUIPrefab)).parent = e.popBox,
                    n.getComponent("AwardUI").init(),
                    e.setLoadMask(!1),
                    t && t()
                }))
            },
            showLuckAwardUI: function(t) {
                this.luckAwardUIPrefab && (cc.instantiate(this.luckAwardUIPrefab).parent = this.popBox,
                t && t())
            },
            showTips: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                this.tips.active = !0,
                this.tipsLabel.string = e,
                this.tips.opacity = 255,
                this.tips.stopAllActions(),
                this.tips.runAction(cc.sequence(cc.fadeOut(1.5).easing(cc.easeOut(.5)), cc.callFunc(function() {
                    t.tips.active = !1
                })))
            },
            setLoadMask: function(t) {
                this.loadMask.active = t
            },
            updateBulletCountLabel: function() {
                for (var t = 0, e = 0; e < cc.vv.userData.ballsState.length; e++)
                    1 == cc.vv.userData.ballsState[e] && t++;
                this.bulletCountLabel.string = t + "/27"
            },
            initStar: function() {
                for (var t = null, e = 0; e < 10; e++)
                    (t = cc.instantiate(this.starEffPrefab)).parent = this.effBox,
                    t.x = -2e3,
                    t.opacity = 0,
                    this.starPool.push(t)
            },
            showStar: function() {
                this.starBox.active || (this.starBox.active = !0,
                this.levelBox.active = !1,
                this.setCanReStar(!1),
                this.updateStarMask(0))
            },
            setCanReStar: function(t) {
                t ? (this.canRestart = !0,
                this.reStartBtn.opacity = 255) : (this.canRestart = !1,
                this.reStartBtn.opacity = 90)
            },
            hideStar: function() {
                this.starBox.active && (this.starBox.active = !1,
                this.levelBox.active = !0,
                this.starProgress = 0,
                this.setCanReStar(!0))
            },
            showTreasureUI: function(t) {
                var e = this;
                this.treasureUIPrefab ? (cc.instantiate(this.treasureUIPrefab).parent = this.popBox,
                t && t()) : (this.setLoadMask(!0),
                cc.loader.loadRes("prefab/TreasureUI", cc.Prefab, function(n, o) {
                    e.treasureUIPrefab = o,
                    cc.instantiate(o).parent = e.popBox,
                    e.setLoadMask(!1),
                    t && t()
                }))
            },
            getKeyPos: function(t) {
                return this.keyBox.children[t].position.add(this.keyBox.position)
            },
            getStarPos: function(t) {
                return cc.vv.game.node.convertToNodeSpaceAR(this.starMask.children[t].parent.convertToWorldSpaceAR(this.starMask.children[t].position))
            },
            clearAllStar: function() {
                for (var t = 0; t < this.starComp.length; t++)
                    this.starComp[t].recycle();
                this.starComp.length = 0
            },
            deletStarComp: function(t) {
                for (var e = 0, n = 0; n < this.starComp.length; n++)
                    if (this.starComp[n] == t) {
                        e = n;
                        break
                    }
                1 != this.starComp.length ? this.starComp.length > 1 && (this.starComp[e] = this.starComp[this.starComp.length - 1],
                this.starComp.pop()) : this.starComp.pop()
            },
            showStarEff: function(t, e) {
                var n = null
                  , o = null;
                this.starPool.length > 0 ? (n = this.starPool.pop()).opacity = 255 : n = cc.instantiate(this.starEffPrefab),
                o = n.getComponent("StarEff"),
                this.starComp.push(o),
                n.parent = this.effBox,
                n.position = t;
                var i = 0;
                cc.vv.uiOtherCount >= 8 && (i = 1),
                o.init(),
                o.doAnima(i, e),
                n = null,
                o = null
            },
            updateGameKey: function() {
                for (var t = 0; t < this.keyBox.children.length; t++)
                    t < cc.vv.userData.keyCount ? (this.keyBox.children[t].color = new cc.Color(255,255,255),
                    this.keyBox.children[t].opacity = 255) : (this.keyBox.children[t].color = new cc.Color(0,0,0),
                    this.keyBox.children[t].opacity = 30)
            },
            updateStarMask: function(t) {
                t >= 1 && (t = 1),
                this.starProgress = t,
                this.starMask.width = 153 * t
            },
            updateCurLevel: function() {
                cc.vv.userData.bossLevelState >= 5 ? (this.levelLabel.string = cc.vv.userData.bossLevel,
                this.setTopUIText(1)) : (this.levelLabel.string = cc.vv.userData.level,
                this.setTopUIText(0)),
                console.log("level", cc.vv.userData.level, cc.vv.userData.level % 5),
                cc.vv.userData.level % 5 == 0 && (console.log("\u663e\u793a\u63d2\u5c4f\u5e7f\u544a"),
                cc.vv.sdk.showInterstitialAd())
            },
            showFailUI: function() {
                cc.instantiate(this.failUIPrefab).parent = this.popBox
            },
            showWinUI: function() {
                var t = cc.instantiate(this.winUIPrefab);
                t.parent = this.popBox;
                var e = 1;
                this.starProgress >= .5 && (e = 2),
                this.starProgress >= 1 && (e = 3);
                var n = t.getComponent("WinUI");
                n.setStartCount(e),
                n.init(),
                n = null
            },
            onSkinBtnClick: function() {
                cc.vv.audioMgr.playSFX("UIClick"),
                this.skinUI.active = !0
            },
            onReStartBtnClick: function() {
                var t = this;
                cc.vv.audioMgr.playSFX("UIClick"),
                this.canRestart && (this.setCanReStar(!1),
                cc.vv.game.reStart(),
                setTimeout(function() {
                    t.setCanReStar(!0)
                }, 3e3))
            },
            showSkinBtn: function() {
                cc.vv.userData.tutorialState < 2 || (this.skinBtn.active = !0,
                this.skinBtn.stopAllActions(),
                this.skinBtn.runAction(cc.sequence(cc.moveTo(.25, cc.v2(375, -360)).easing(cc.easeOut(1)), cc.callFunc(function() {}))))
            },
            hideSkinBtn: function() {
                var t = this;
                this.skinBtn.stopAllActions(),
                this.skinBtn.runAction(cc.sequence(cc.moveTo(.35, cc.v2(562, -360)).easing(cc.easeIn(1)), cc.callFunc(function() {
                    t.skinBtn.active = !1
                })))
            },
            bulletDieEffUpdate: function(t) {
                this.canUseBDEff || (this.curBDTime += t,
                this.curBDTime >= this.unUseBDEffTime && (this.curBDTime = 0,
                this.canUseBDEff = !0))
            },
            update: function(t) {
                this.bulletDieEffUpdate(t)
            },
            onCompleteBtnClick: function() {
                cc.vv.game.state != GameState.GameOver && (cc.vv.game.changeState(GameState.GameOver),
                cc.vv.game.gameWin())
            },
            onLikeADBtnClick: function() {
                cc.vv.likeAd && (cc.vv.likeAd.node.active = !0)
            },
            showGiveUpTips: function(t, e) {
                var n = cc.instantiate(this.giveUpTipsPrefab);
                n.parent = this.systemBox,
                n.getComponent("GiveUpTips").init(t, e)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    WinUI: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "aeedapKaWlCQob3ybg7b81b", "WinUI"),
        cc.Class({
            extends: t("PopupUI"),
            properties: {
                levelLabel: cc.Label,
                startNDs: [cc.Node],
                keys: [cc.Sprite],
                nextBtn: cc.Node,
                treasureBtn: cc.Node,
                cannonIcon: cc.Sprite,
                cannonBottom: cc.Sprite,
                w_cannon: cc.Sprite,
                w_ol_cannon: cc.Sprite,
                cannonProgress: cc.Node,
                progressLabel: cc.Label,
                cannonBox: cc.Node,
                bloodBox: cc.Node,
                light: cc.Node,
                getCannonSkinBtn: cc.Node,
                giveUpBtn: cc.Node,
                backBtn: cc.Node,
                bossBtn: cc.Node,
                bossStateDotSprites: [cc.Sprite],
                bossDotSF: [cc.SpriteFrame],
                progress: cc.ProgressBar,
                bossLight: cc.Node,
                adShare: cc.Sprite,
                adShareSF: [cc.SpriteFrame],
                box: cc.Node,
                btnShareRecord: cc.Node
            },
            onLoad: function() {
                this.bossLevelState = cc.vv.userData.bossLevelState + 1,
                this.bossLevelState > 5 && (this.bossLevelState = 5),
                this.levelLabel.string = cc.vv.userData.level,
                cc.vv.audioMgr.playSFX("LevelCompleteMelody"),
                this.updateADShare(),
                cc.vv.overAd && (cc.vv.overAd.node.active = !0),
                cc.vv.winUI = this,
                this.box.opacity = 0,
                this.box.stopAction(),
                this.box.runAction(cc.fadeIn(.3)),
                this.canClick = !0,
                this.normalY = cc.vv.sdk.bannerTopLine,
                this.canClosebanner = !0,
                cc.vv.sdk.navigateToBanner(!0)
            },
            init: function() {
                this.updateBtnState(),
                this.updateCannonModle(),
                this.upateKeyCount(),
                this.updateBossState()
            },
            updateCannonModle: function() {
                var t = this
                  , e = cc.vv.userData.cannonSkinIndex + 1;
                e >= 6 && (e = 6),
                cc.loader.loadRes("tex/connon/cannon_" + e, cc.SpriteFrame, function(e, n) {
                    t.node && (t.cannonIcon.spriteFrame = n)
                }),
                cc.loader.loadRes("tex/connon/guncarriage_" + e, cc.SpriteFrame, function(e, n) {
                    t.node && (cc.vv.UIMng.setLoadMask(!1),
                    t.cannonBottom.spriteFrame = n)
                })
            },
            updateBtnState: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this.bossLevelState >= 5 ? (this.bossBtn.active = !0,
                this.nextBtn.active = !1,
                this.treasureBtn.active = !1,
                this.getCannonSkinBtn.active = !1,
                this.giveUpBtn.active = !1,
                void (cc.vv.isShowLuckUI && !t || cc.vv.sdk.navigateToBanner(!0))) : cc.vv.userData.keyCount >= 3 ? (this.bossBtn.active = !1,
                this.nextBtn.active = !1,
                this.treasureBtn.active = !0,
                this.getCannonSkinBtn.active = !1,
                this.giveUpBtn.active = !1,
                void (cc.vv.isShowLuckUI && !t || cc.vv.sdk.navigateToBanner(!0))) : cc.vv.userData.skinProgress >= 1 ? (this.bossBtn.active = !1,
                this.nextBtn.active = !1,
                this.treasureBtn.active = !1,
                this.getCannonSkinBtn.active = !0,
                void (this.giveUpBtn.active = !0)) : (this.bossBtn.active = !1,
                this.treasureBtn.active = !1,
                this.getCannonSkinBtn.active = !1,
                this.giveUpBtn.active = !1,
                void (this.nextBtn.active = !0))
            },
            updateSkinProgress: function() {
                this.cannonProgress.width = 386 * cc.vv.userData.skinProgress;
                var t = Math.floor(100 * cc.vv.userData.skinProgress);
                this.progressLabel.string = t + "%"
            },
            upateKeyCount: function() {
                for (var t = 0; t < this.keys.length; t++)
                    t < cc.vv.userData.keyCount ? (this.keys[t].node.color = new cc.Color(255,255,255),
                    this.keys[t].node.opacity = 255) : (this.keys[t].node.color = new cc.Color(0,0,0),
                    this.keys[t].node.opacity = 30)
            },
            setStartCount: function(t) {
                for (var e = 0; e < this.startNDs.length; e++)
                    this.startNDs[e].active = e < t;
                var n = 0;
                switch (t) {
                case 1:
                    n = .06;
                    break;
                case 2:
                    n = .09;
                    break;
                case 3:
                    n = .12
                }
                cc.vv.userData.skinProgress += n,
                cc.vv.userData.skinProgress >= 1 ? (cc.vv.userData.skinProgress = 1,
                this.light.active = !0,
                this.light.stopAllActions(),
                this.light.runAction(cc.repeatForever(cc.rotateBy(1, 60)))) : this.light.active = !1,
                this.updateSkinProgress()
            },
            updateADShare: function() {
                var t = cc.vv.utilMng.getSharAndADState();
                0 == t ? this.adShare.spriteFrame = this.adShareSF[0] : 1 == t && (this.adShare.spriteFrame = this.adShareSF[1])
            },
            updateBossState: function() {
                this.progress.progress = this.bossLevelState / 5;
                for (var t = 0; t < 5; t++)
                    t < this.bossLevelState ? this.bossStateDotSprites[t].spriteFrame = this.bossDotSF[0] : this.bossStateDotSprites[t].spriteFrame = this.bossDotSF[1];
                this.bossLevelState >= 5 && (this.bossLight.opacity = 255,
                this.bossLight.stopAllActions(),
                this.bossLight.runAction(cc.repeatForever(cc.rotateBy(1, 60))))
            },
            onDestroy: function() {
                this.canClosebanner && cc.vv.sdk.navigateToBanner(!1);
                var t = cc.vv.userData.level - 1;
                buryPoint.report("leve_finish", {
                    level: "" + t
                }),
                cc.vv.winUI = null
            },
            onGetCannonBtnClick: function() {
                var t = this;
                cc.vv.audioMgr.playSFX("UIClick");
                var e = cc.vv.utilMng.getSharAndADState();
                0 == e ? cc.vv.sdk.navigateToAd(function() {
                    cc.vv.userData.cannonSkinIndex++,
                    cc.vv.userData.skinProgress = 0,
                    cc.vv.userData.cannonSkinIndex > 6 && (cc.vv.userData.cannonSkinIndex = 2),
                    cc.vv.userData.curCannonSkin = cc.vv.userData.cannonSkinIndex,
                    cc.vv.UIMng.setLoadMask(!0),
                    cc.loader.loadRes("tex/connon/cannon_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                        cc.vv.cannonSF[0] = n,
                        cc.loader.loadRes("tex/connon/guncarriage_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                            cc.vv.UIMng.setLoadMask(!1),
                            cc.vv.cannonSF[1] = n;
                            for (var o = 0; o < cc.vv.game.cannonComp.length; o++)
                                cc.vv.game.cannonComp[o].updateSkin();
                            t.onNextLevelBtnClick()
                        })
                    }),
                    t.updateADShare()
                }) : 1 == e ? cc.vv.sdk.shareAppMessage(function() {
                    cc.vv.userData.cannonSkinIndex++,
                    cc.vv.userData.skinProgress = 0,
                    cc.vv.userData.cannonSkinIndex > 6 && (cc.vv.userData.cannonSkinIndex = 2),
                    cc.vv.userData.curCannonSkin = cc.vv.userData.cannonSkinIndex,
                    cc.vv.UIMng.setLoadMask(!0),
                    cc.loader.loadRes("tex/connon/cannon_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                        cc.vv.cannonSF[0] = n,
                        cc.loader.loadRes("tex/connon/guncarriage_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                            cc.vv.UIMng.setLoadMask(!1),
                            cc.vv.cannonSF[1] = n;
                            for (var o = 0; o < cc.vv.game.cannonComp.length; o++)
                                cc.vv.game.cannonComp[o].updateSkin();
                            t.onNextLevelBtnClick()
                        })
                    })
                }, null, 3) : (cc.vv.userData.cannonSkinIndex++,
                cc.vv.userData.skinProgress = 0,
                cc.vv.userData.cannonSkinIndex > 6 && (cc.vv.userData.cannonSkinIndex = 2),
                cc.vv.userData.curCannonSkin = cc.vv.userData.cannonSkinIndex,
                cc.vv.UIMng.setLoadMask(!0),
                cc.loader.loadRes("tex/connon/cannon_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                    cc.vv.cannonSF[0] = n,
                    cc.loader.loadRes("tex/connon/guncarriage_" + cc.vv.userData.curCannonSkin, cc.SpriteFrame, function(e, n) {
                        cc.vv.UIMng.setLoadMask(!1),
                        cc.vv.cannonSF[1] = n;
                        for (var o = 0; o < cc.vv.game.cannonComp.length; o++)
                            cc.vv.game.cannonComp[o].updateSkin();
                        t.onNextLevelBtnClick()
                    })
                }),
                this.updateADShare())
            },
            onNextLevelBtnClick: function() {
                this.isJumpStart || this.canClick && (cc.vv.audioMgr.playSFX("UIClick"),
                cc.vv.game.changeState(GameState.Idle),
                cc.vv.UIMng.updateCurLevel(),
                this.hideAnima(),
                cc.vv.netMng.SaveNetData("onNextLevelBtnClick "))
            },
            onTreasureBtnClick: function() {
                var t = this;
                this.canClick && (cc.vv.audioMgr.playSFX("UIClick"),
                cc.vv.UIMng.showTreasureUI(function() {
                    t.node.destroy(),
                    setTimeout(function() {
                        cc.vv.sdk.navigateToBanner(!0)
                    }, 500)
                }))
            },
            onBackClick: function() {
                this.canClick && (cc.vv.audioMgr.playSFX("UIClick"),
                this.onNextLevelBtnClick())
            },
            onGiveUpBtnClick: function() {
                var t = this;
                this.isJumpStart || this.canClick && (cc.vv.audioMgr.playSFX("UIClick"),
                cc.vv.UIMng.showGiveUpTips(function() {
                    t.canClosebanner = !1,
                    t.onNextLevelBtnClick(),
                    cc.vv.backAd && (cc.vv.backAd.node.active = !0)
                }, function() {
                    t.onGetCannonBtnClick()
                }))
            },
            onBossBtnClick: function() {
                var t = this;
                this.canClick && (cc.vv.audioMgr.playSFX("UIClick"),
                cc.vv.UIMng.showBossStartUI(function() {
                    t.onNextLevelBtnClick()
                }))
            },
            hideAnima: function(t) {
                var e = this;
                this.canClick = !1,
                this.node.stopAllActions(),
                this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                    e.node.destroy(),
                    t && t()
                })))
            },
            onHomeBtnClick: function() {
                cc.vv.audioMgr.playSFX("UIClick"),
                cc.vv.game.changeState(GameState.Idle),
                cc.vv.UIMng.updateCurLevel(),
                this.hideAnima(),
                cc.vv.netMng.SaveNetData("onNextLevelBtnClick "),
                cc.vv.homeUI.showHomeUI(),
                console.log("homeui\u663e\u793a\u63d2\u5c4f\u5e7f\u544a"),
                cc.vv.sdk.showInterstitialAd()
            },
            onShareRecordeVideoBtnClick: function() {}
        }),
        cc._RF.pop()
    }
    , {
        PopupUI: "PopupUI"
    }],
    buryPoint: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3f4b8vRQ5JEWbVjUvbnA2O2", "buryPoint");
        var o = t("Gameconfig")
          , i = {
            report: function(t, e) {
                cc.vv.useAld && (o.isTest || (e ? wx.aldSendEvent(t, e) : wx.aldSendEvent(t)))
            }
        };
        window.buryPoint = i,
        cc._RF.pop()
    }
    , {
        Gameconfig: "Gameconfig"
    }],
    canvas: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "84c28xZp/1Dbah/+zYOPnmO", "canvas"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.director.getWinSizeInPixels().height / cc.director.getWinSizeInPixels().width <= 1.4 && (this.node.getComponent(cc.Canvas).fitHeight = !0,
                this.node.getComponent(cc.Canvas).fitWidth = !1)
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    httpUtil: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c86ae33dulKpZ5X0nWHq2ye", "httpUtil");
        var o = t("http")
          , i = t("Gameconfig");
        window.httpUtil = {
            getLoginInfo: function(t, e) {
                console.log("\u767b\u5f55\u6821\u9a8c\u4fe1\u606f:", t);
                var n = {
                    requestCode: i.commonCode,
                    subCode: "checkTtLogin",
                    data: {
                        appid: "tt4c553ae8d37fa282",
                        code: t.code,
                        anonymous_code: t.anonymousCode
                    }
                };
                o.httpPost("", n, function(t) {
                    if (t) {
                        var n = JSON.parse(t.data);
                        console.log("\u767b\u5f55\u6821\u9a8c\u56de\u8c03", n),
                        n.openid && n.openid.length > 0 ? cc.vv.userData.userId = n.openid : n.anonymous_openid && n.anonymous_openid.length > 0 && (cc.vv.userData.userId = n.anonymous_openid),
                        "function" == typeof e && e()
                    }
                })
            },
            getShareAdConfig: function(t) {
                t && t()
            },
            httpSaveData: function(t) {
                cc.vv.saveDataOver = !1,
                cc.vv.userData.lastGameTime = (new Date).getTime();
                var e = {
                    requestCode: i.appCode,
                    subCode: "reportCannonData",
                    data: {
                        dataJson: cc.vv.userData,
                        appId: i.appId,
                        platformChanleId: cc.vv.userData.platfromId,
                        openId: cc.vv.userData.userId
                    }
                };
                o.httpPost("", e, function(e) {
                    if (e) {
                        var n = JSON.parse(e.data);
                        "function" == typeof t && t(n),
                        cc.vv.saveDataOver = !0
                    }
                })
            },
            httpGetData: function(t) {
                var e = {
                    requestCode: i.appCode,
                    subCode: "getCannonGameData",
                    data: {
                        appId: i.appId,
                        platformChanleId: cc.vv.userData.platfromId,
                        openId: cc.vv.userData.userId
                    }
                };
                o.httpPost("", e, function(e) {
                    if (e) {
                        var n = JSON.parse(e.data);
                        n && (cc.vv.userData = n),
                        "function" == typeof t && t()
                    }
                })
            },
            httpTongjiSaveData: function(t, e) {
                var n = {
                    inviteId: t.inviteid,
                    beinvitedId: t.beinvitedid,
                    appId: i.appId,
                    platformChanleId: i.platfromId
                };
                if (!e)
                    e = function(t) {}
                    ;
                o.httpPost("heroPlaneDataSdk/reportInvite", n, e)
            },
            httpTongjiGetData: function(t, e) {
                var n = {
                    inviteId: cc.vv.userData.userId,
                    appId: i.appId,
                    platformChanleId: i.platfromId
                };
                o.httpPost("heroPlaneDataSdk/gainInvite", n, function(t) {
                    if (t) {
                        if (t.appId == i.appId)
                            if (t.inviteId == cc.vv.userData.userId) {
                                var n = t.beinvitedId;
                                cc.vv.shareArr = n.split(",")
                            } else
                                cc.vv.shareArr = [];
                        else
                            cc.vv.shareArr = [];
                        e && "function" == typeof e && e(t)
                    }
                })
            }
        },
        e.exports = httpUtil,
        cc._RF.pop()
    }
    , {
        Gameconfig: "Gameconfig",
        http: "http"
    }],
    http: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "72c71Qf14xC+JR9O9nx9VvG", "http");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = t("MyBase64")
          , c = {
            url: t("Gameconfig").url,
            httpGets: function(t, e) {
                var n = cc.loader.getXMLHttpRequest();
                n.timeout = 5e3;
                var o = setTimeout(function() {
                    n.abort()
                }, n.timeout);
                n.onreadystatechange = function() {
                    if (clearTimeout(o),
                    4 === n.readyState && n.status >= 200 && n.status < 300) {
                        var t = n.responseText;
                        if (t) {
                            var i = JSON.parse(t);
                            e(i)
                        } else
                            e(!1)
                    }
                }
                ,
                n.open("GET", t, !0),
                cc.sys.isNative && n.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                n.send()
            },
            httpPost: function(t, e, n) {
                var c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , a = cc.loader.getXMLHttpRequest();
                a.timeout = 5e3;
                var s = setTimeout(function() {
                    a.abort(),
                    IsCanLinkNet = !1
                }, a.timeout)
                  , r = this.url + t;
                c && (r = t),
                "object" == (void 0 === e ? "undefined" : o(e)) && (e = JSON.stringify(e)),
                c || (e = i.encode(e));
                a.onreadystatechange = function() {
                    if (4 === a.readyState && a.status >= 200 && a.status < 300) {
                        clearTimeout(s);
                        var t = a.responseText;
                        if (t) {
                            LinkNetCount = 0;
                            var e = t;
                            c || (e = i.decode(t));
                            var o = JSON.parse(e);
                            n(o),
                            IsCanLinkNet = !0
                        }
                    }
                }
                ,
                a.open("POST", r, !0),
                cc.sys.isNative && a.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                a.send(e)
            }
        };
        e.exports = c,
        cc._RF.pop()
    }
    , {
        Gameconfig: "Gameconfig",
        MyBase64: "MyBase64"
    }],
    resize: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "162e5cFeyxCJa83dsutD1Gi", "resize"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node
            },
            onLoad: function() {
                cc.director.getWinSizeInPixels().height / cc.director.getWinSizeInPixels().width <= 1.4 && (this.node.width = this.bg.width,
                this.node.height = this.bg.height)
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    wx_xj_sdk: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "78d0bSkB0tJw6s6U4dhRWUg", "wx_xj_sdk"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(e, n, o) {
                return n && t(e.prototype, n),
                o && t(e, o),
                e
            }
        }();
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        n.default = function() {
            var t = "https://api.xiaozigame.com/api"
              , e = !1
              , n = []
              , c = function() {
                function t(e, n) {
                    i(this, t),
                    this.url = e,
                    this.params = n,
                    this.request = this.request.bind(this)
                }
                return o(t, [{
                    key: "request",
                    value: function() {
                        g(this.url, this.params),
                        n.splice(n.indexOf(this), 1)
                    }
                }]),
                t
            }();
            function a() {
                function t() {
                    var t = 0;
                    n.forEach(function(e) {
                        setTimeout(e.request, t += 100)
                    }),
                    t = 0
                }
                e || (e = !0,
                wx.getNetworkType({
                    success: function(t) {
                        t.networkType
                    }
                }),
                wx.onNetworkStatusChange(function(e) {
                    e.isConnected,
                    e.isConnected && n.length > 0 && t()
                }))
            }
            function s(t) {
                var e = t.fn;
                return delete t.fn,
                g("/openid", t).then(function(t) {
                    return t && 200 == t.data.code ? (wx.setStorageSync("count_openid", t.data.openid),
                    wx.getStorageSync("load_event") && d(),
                    e && e(t.data),
                    t) : !1 !== t ? (console.log(t.data.message, "\u4e0a\u62a5\u521d\u59cb\u5316\u9519\u8bef1"),
                    t) : void 0
                }).catch(function(t) {
                    console.log(t)
                })
            }
            function r() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.appKey = wx.getStorageSync("count_appkey") || "",
                t.openid = wx.getStorageSync("count_openid") || "",
                t.channel = wx.getStorageSync("count_ch") || "",
                t.eventName = t.eventName || "",
                t.subEventName = t.subEventName || "",
                t.eventName,
                t.subEventName,
                t.openid && t.appKey ? l(t) : void console.log("\u81ea\u5b9a\u4e49\u7f3a\u53c2\u6570")
            }
            function l(t) {
                return t.eventName ? g("/event", t).then(function(t) {
                    return t && 200 == t.data.code ? t : !1 !== t ? (console.log(t.data.message, "\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u9519\u8bef1"),
                    t) : void 0
                }).catch(function(t) {
                    console.log("\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5931\u8d252"),
                    console.log(t)
                }) : (console.log("reportCustomEvent errMsg: \u53c2\u6570\u9519\u8bef"),
                "err")
            }
            function h() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.appKey = wx.getStorageSync("count_appkey") || "",
                t.openid = wx.getStorageSync("count_openid") || "",
                t.channel = wx.getStorageSync("count_ch") || "",
                t.eventName = t.eventName || "",
                t.subEventName = t.subEventName || "",
                t.eventName,
                t.subEventName,
                t.openid && t.appKey ? u(t) : void console.log("\u81ea\u5b9a\u4e49\u7f3a\u53c2\u6570_a")
            }
            function u(t) {
                return t.eventName ? g("/event_a", t).then(function(t) {
                    return t && 200 == t.data.code ? t : !1 !== t ? (console.log(t.data.message, "\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u9519\u8bef_a1"),
                    t) : void 0
                }).catch(function(t) {
                    console.log("\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5931\u8d25_a2"),
                    console.log(t)
                }) : (console.log("reportCustomEvent_a errMsg: \u53c2\u6570\u9519\u8bef"),
                "err")
            }
            function v() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.appKey = wx.getStorageSync("count_appkey") || "",
                t.openid = wx.getStorageSync("count_openid") || "",
                t.channel = wx.getStorageSync("count_ch") || "",
                t.appKey && t.openid ? g("/login", t).then(function(t) {
                    return t && 200 == t.data.code ? t : !1 !== t ? (console.log(t.data.message, "\u9996\u6b21\u6388\u6743\u9519\u8bef1"),
                    t) : void 0
                }).catch(function(t) {
                    console.log("\u9996\u6b21\u6388\u6743\u4e0a\u62a5\u9519\u8bef2"),
                    console.log(t)
                }) : (console.log("\u6388\u6743\u7f3a\u53c2\u6570"),
                "err")
            }
            function d() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.appKey = wx.getStorageSync("count_appkey") || "",
                t.openid = wx.getStorageSync("count_openid") || "",
                t.channel = wx.getStorageSync("count_ch") || "",
                t.appKey && t.openid ? g("/load", t).then(function(t) {
                    return t && 200 == t.data.code ? t : !1 !== t ? (console.log(t.data.message, "\u9996\u6b21\u52a0\u8f7d\u9519\u8bef1"),
                    t) : void 0
                }).catch(function(t) {
                    console.log("\u9996\u6b21\u52a0\u8f7d\u4e0a\u62a5\u9519\u8bef2"),
                    console.log(t)
                }) : (wx.setStorageSync("load_event", !0),
                console.log("\u9996\u6b21\u52a0\u8f7d\u7f3a\u53c2\u6570"),
                "err")
            }
            function p() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.appKey = wx.getStorageSync("count_appkey") || "",
                t.openid = wx.getStorageSync("count_openid") || "",
                t.channel = wx.getStorageSync("count_ch") || "",
                t.appKey && t.openid ? g("/role", t).then(function(t) {
                    return t && 200 == t.data.code ? t : !1 !== t ? (console.log(t.data.message, "\u9996\u6b21\u521b\u89d2\u9519\u8bef1"),
                    t) : void 0
                }).catch(function(t) {
                    console.log("\u9996\u6b21\u521b\u89d2\u4e0a\u62a5\u9519\u8bef2"),
                    console.log(t)
                }) : (console.log("\u9996\u6b21\u521b\u89d2\u7f3a\u53c2\u6570"),
                "err")
            }
            var m = !0;
            function f() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t)
                    return "err";
                (function(t) {
                    var e = wx.getStorageSync(t);
                    return e ? wx.setStorageSync(t, e + 1) : wx.setStorageSync(t, 1),
                    e >= 8 && (setTimeout(function() {
                        wx.setStorageSync(t, 0)
                    }, 6e4),
                    !0)
                }
                )("rep_" + t) || setTimeout(function() {
                    "/openid" == t && s(e),
                    "/event" == t && r(e),
                    "/load" == t && d(e),
                    "/login" == t && v(e),
                    "/role" == t && p(e)
                }, 5e3)
            }
            function g(e, o) {
                return e ? new Promise(function(i, a) {
                    wx.request({
                        url: t + e,
                        method: "POST",
                        data: o,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: i,
                        fail: function(t) {
                            wx.getNetworkType({
                                success: function(t) {
                                    "none" == t.networkType ? n.push(new c(e,o)) : f(e, o)
                                }
                            }),
                            a(t)
                        },
                        complete: function() {}
                    })
                }
                ).catch(function(t) {
                    console.log(t)
                }) : "err"
            }
            return {
                init: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = arguments[3];
                    if (a(),
                    !t)
                        return console.log("\u8bf7\u4f20\u5165\u6b63\u786e\u7684appKey"),
                        new Promise(function(t, e) {
                            t("\u8bf7\u4f20\u5165\u6b63\u786e\u7684appKey")
                        }
                        );
                    wx.setStorageSync("count_appkey", t),
                    e ? wx.setStorageSync("count_openid", e) : e = wx.getStorageSync("count_openid") || "",
                    n.query = n.query || {};
                    var i = "";
                    n.ch ? i = n.ch : n.query.ch ? i = n.query.ch : n.query.scene && (i = decodeURIComponent(n.query.scene)),
                    wx.setStorageSync("count_ch", i);
                    var c = {
                        code: "",
                        channel: i,
                        scene: n.scene || "1001",
                        appKey: t,
                        openid: e,
                        options: JSON.stringify(n) || "",
                        aldstat_uuid: wx.getStorageSync("aldstat_uuid"),
                        fn: o
                    };
                    return e ? s(c) : new Promise(function(t, e) {
                        wx.login({
                            success: function(e) {
                                t(e.code)
                            },
                            fail: function() {
                                console.log("\u83b7\u53d6code\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6")
                            }
                        })
                    }
                    ).then(function(t) {
                        return c.code = t,
                        s(c)
                    })
                },
                reportCustomEvent: r,
                load: d,
                login: v,
                role: p,
                exposureMiniProgram: function(t) {
                    h({
                        eventName: "exposureMiniProgram_a",
                        subEventName: t = t.join(",")
                    })
                },
                clickMiniProgram: function(t) {
                    r({
                        eventName: "clickMiniProgram",
                        subEventName: t
                    })
                },
                navigateToMiniProgram: function(t) {
                    r({
                        eventName: "navigateToMiniProgram",
                        subEventName: t
                    })
                },
                gameUserPay: function(t, e, n, o, i, c, a) {
                    m && (m = !1,
                    wx.request({
                        url: "https://api.xiaozigame.com/pay/create?openid=" + t + "&out_trade_no=" + e + "&total_fee=" + n + "&goods_id=" + o + "&goods_name=" + i + "&notify_url=" + c + "&extra=" + a,
                        success: function(t) {
                            return m = !0,
                            t
                        },
                        fail: function(t) {
                            return m = !0,
                            t
                        }
                    }))
                },
                getGuide: function(t, e) {
                    var n = wx.getLaunchOptionsSync();
                    n.query = n.query || {};
                    var o = "";
                    n.ch ? o = n.ch : n.query.ch ? o = n.query.ch : n.query.scene && (o = decodeURIComponent(n.query.scene)),
                    wx.setStorageSync("count_ch", o);
                    var i = {
                        version: t,
                        channel: o
                    };
                    /^[1-9]\d*$/.test(i.version) ? wx.request({
                        url: "https://api.xiaozigame.com/guide/data",
                        data: i,
                        success: function(t) {
                            e && e(t.data)
                        },
                        fail: function(t) {
                            console.log("guide\u8bf7\u6c42\u62a5\u9519", t)
                        }
                    }) : console.log("guide\u7248\u672c\u53f7\u586b\u5199\u9519\u8bef")
                }
            }
        }(),
        e.exports = n.default,
        cc._RF.pop()
    }
    , {}]
}, {}, ["AudioMgr", "GameUtil", "Gameconfig", "Global", "PrefabMgr", "SDK4399", "SDKInstance", "buryPoint", "canvas", "resize", "Edit", "Connon", "Cup", "CupContainer", "CustomSprite", "ElementBasics", "ElementFactory", "Element_Boss", "Element_Circle", "Element_Custom", "Element_Fan", "Element_Knife", "Element_Rectangle", "Element_Space", "Element_Spine", "Element_Trampoline", "FanArea", "Motion", "RotateTool", "SliderTool", "Bullet", "Game", "GameData", "Key", "Splash", "StarEff", "TouchArea", "TouchTips", "AdBackItem", "AdItem", "AwardUI", "BackAd", "BananaQuitBtn", "BananaSKDMng", "BossStartUI", "BossWinUI", "BottomAd", "FailUI", "GameUI", "GiveUpTips", "HomeUI", "LikeAd", "LoadUI", "LuckAwardUI", "OverAd", "PopupUI", "SkinItem", "SkinUI", "TAward", "TreasureItem", "TreasureUI", "UIMng", "WinUI", "MyBase64", "NetDataManager", "http", "httpUtil", "wx_xj_sdk"]);
