require = function a(l, o, r) {
    function c(i, t) {
        if (!o[i]) {
            if (!l[i]) {
                var s = "function" == typeof require && require;
                if (!t && s)
                    return s(i, !0);
                if (n)
                    return n(i, !0);
                var h = new Error("Cannot find module '" + i + "'");
                throw h.code = "MODULE_NOT_FOUND",
                h
            }
            var e = o[i] = {
                exports: {}
            };
            l[i][0].call(e.exports, function(t) {
                return c(l[i][1][t] || t)
            }, e, e.exports, a, l, o, r)
        }
        return o[i].exports
    }
    for (var n = "function" == typeof require && require, t = 0; t < r.length; t++)
        c(r[t]);
    return c
}({
    Game: [function(t, i, s) {
        "use strict";
        cc._RF.push(i, "ff2a9pMxBdGmYCFzl1KrvVl", "Game"),
        cc.Class({
            extends: cc.Component,
            properties: {
                cheer: {
                    default: null,
                    url: cc.AudioClip
                },
                hit: {
                    default: null,
                    url: cc.AudioClip
                }
            },
            start: function() {
                this.main = cc.find("main", this.node),
                this.bg = cc.find("main/bg", this.node),
                this.tree = cc.find("main/tree", this.node),
                this.near = cc.find("main/near", this.node),
                this.cather1 = cc.find("main/near/eles/cather1", this.node),
                this.cather2 = cc.find("main/near/eles/cather2", this.node),
                this.cather3 = cc.find("main/near/eles/cather3", this.node),
                this.cather4 = cc.find("main/near/eles/cather4", this.node),
                this.cather5 = cc.find("main/near/eles/cather5", this.node),
                this.cather6 = cc.find("main/near/eles/cather6", this.node),
                this.cather7 = cc.find("main/near/eles/cather7", this.node),
                this.cather8 = cc.find("main/near/eles/cather8", this.node),
                this.bg4 = cc.find("main/near/bg_4", this.node),
                this.guardrail = cc.find("main/near/bg_9", this.node),
                this.tv = cc.find("main/near/bg_6", this.node),
                this.light = cc.find("main/near/bg_5", this.node),
                this.referee = cc.find("referee", this.node),
                this.cather1.ox = this.cather1.x,
                this.cather1.oy = this.cather1.y,
                this.cather2.ox = this.cather2.x,
                this.cather2.oy = this.cather2.y,
                this.cather3.ox = this.cather3.x,
                this.cather3.oy = this.cather3.y,
                this.cather4.ox = this.cather4.x,
                this.cather4.oy = this.cather4.y,
                this.cather5.ox = this.cather5.x,
                this.cather5.oy = this.cather5.y,
                this.cather6.ox = this.cather6.x,
                this.cather6.oy = this.cather6.y,
                this.cather7.ox = this.cather7.x,
                this.cather7.oy = this.cather7.y,
                this.cather8.ox = this.cather8.x,
                this.cather8.oy = this.cather8.y,
                this.fxrange = 100,
                this.fyrange = 30,
                this.fvx = 1,
                this.fvy = .2,
                this.bxrange = 100,
                this.byrange = 20,
                this.bvx = .5,
                this.bvy = .1,
                this.cathers = [this.cather1, this.cather2, this.cather5, this.cather6, this.cather3, this.cather4, this.cather7, this.cather8],
                this.player1 = cc.find("main/near/eles/player1", this.node),
                this.player2 = cc.find("main/near/eles/player2", this.node),
                this.ball1 = cc.find("main/near/eles/ball_1", this.node),
                this.ball2 = cc.find("main/near/eles/ball_2", this.node),
                this.pitcher = cc.find("main/near/eles/pitcher", this.node),
                this.door = cc.find("main/near/eles/door1", this.node),
                this.doorani = cc.find("main/near/eles/doorani", this.node),
                this.backrun = cc.find("main/near/eles/backrun", this.node),
                this.change = cc.find("main/near/eles/change", this.node),
                this.btn_play1 = cc.find("playbtn/btn_play1", this.node),
                this.label1 = cc.find("main/near/label1", this.node),
                this.label2 = cc.find("main/near/label2", this.node),
                this.scoreLabel1 = cc.find("main/near/label1", this.node).getComponent(cc.Label),
                this.scoreLabel2 = cc.find("main/near/label2", this.node).getComponent(cc.Label),
                this.eles = cc.find("main/near/eles", this.node),
                this.btn_play = cc.find("playbtn", this.node),
                this.fire1 = cc.find("fireWorks_1").getComponent(cc.Sprite).spriteFrame,
                this.fire2 = cc.find("fireWorks_2").getComponent(cc.Sprite).spriteFrame,
                this.fire3 = cc.find("fireWorks_3").getComponent(cc.Sprite).spriteFrame,
                this.fire4 = cc.find("fireWorks_4").getComponent(cc.Sprite).spriteFrame,
                this.fire5 = cc.find("fireWorks_5").getComponent(cc.Sprite).spriteFrame,
                this.fireframes = [this.fire1, this.fire2, this.fire3, this.fire4, this.fire5],
                this.audience1 = cc.find("main/near/bg_7", this.node),
                this.audience2 = cc.find("main/near/bg_8", this.node),
                this.green = cc.find("main/near/bg_3", this.node),
                this.balloon_0 = cc.find("balloon_0").getComponent(cc.Sprite).spriteFrame,
                this.balloon_1 = cc.find("balloon_1").getComponent(cc.Sprite).spriteFrame,
                this.balloon_2 = cc.find("balloon_2").getComponent(cc.Sprite).spriteFrame,
                this.balloon_3 = cc.find("balloon_3").getComponent(cc.Sprite).spriteFrame,
                this.balloon_4 = cc.find("balloon_4").getComponent(cc.Sprite).spriteFrame,
                this.balloon_6 = cc.find("balloon_6").getComponent(cc.Sprite).spriteFrame,
                this.balloonFrames = {
                    0: this.balloon_0,
                    1: this.balloon_1,
                    2: this.balloon_2,
                    3: this.balloon_3,
                    4: this.balloon_4,
                    6: this.balloon_6
                },
                this.balloons = [],
                this.doorPos = -280,
                this.menus = cc.find("endmenus", this.node),
                this.btn_restart = cc.find("endmenus/btn_reStart", this.node),
                this.btn_share = cc.find("endmenus/btn_share", this.node),
                this.btn_share.active = !1;
                this.btn_restart.on(cc.Node.EventType.TOUCH_START, this.restartDownHandler, this),
                this.btn_restart.on(cc.Node.EventType.TOUCH_END, this.restartUpHandler, this),
                this.btn_share.on(cc.Node.EventType.TOUCH_START, this.shareDownHandler, this),
                this.btn_share.on(cc.Node.EventType.TOUCH_END, this.shareUpHandler, this),
                this.cn = cc.find("guideFont_1", this.node),
                this.en = cc.find("guideFont_2", this.node),
                this.ind = cc.find("guideFont_3", this.node),
                this.ru = cc.find("guideFont_4", this.node),
                this.es = cc.find("guideFont_5", this.node),
                this.id = cc.find("guideFont_6", this.node);
                var t = this.getQueryStringForLocation("lang");
                "en" === t ? this.en.active = !0 : "ind" === t ? this.ind.active = !0 : "ch" === t ? this.cn.active = !0 : "ru" === t ? this.ru.active = !0 : "es" === t ? this.es.active = !0 : "id" === t && (this.id.active = !0),
                this.click = cc.find("click", this.node),
                this.click.active = !0,
                this.click.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .5, .5), cc.scaleTo(.5, 1, 1)))),
                this.status = 1,
                this.shadows = [],
                this.fires = [],
                this.fragments = [],
                console.log(this.near),
                this.reStart(!0),
                this.node.on(cc.Node.EventType.TOUCH_START, this.onDownHandler, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onUpHandler, this),
                window.NativeInterface ? (NativeInterface.onGameLoaded(),
                console.log("NativeInterface.onGameLoaded")) : window.onGameLoaded && (onGameLoaded(),
                console.log("onGameLoaded"))
            },
            getQueryStringForLocation: function(t) {
                var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
                  , s = window.location.search.substr(1).match(i);
                return null != s ? decodeURI(s[2]) : null
            },
            restartDownHandler: function() {
                this.btn_restart.y = -450
            },
            restartUpHandler: function() {
                this.btn_restart.y = -430;

                var self = this;
                setLoadingVisible(true, false, function () {
                    self.reStart(!1)
                })
            },
            shareDownHandler: function() {
                this.btn_share.y = -450
            },
            shareUpHandler: function() {
                this.btn_share.y = -430
            },
            onDownHandler: function(t) {
                if (this.btn_play.active && (this.click.active && (this.click.active = !1,
                this.click.stopAllActions(),
                this.cn.active = this.en.active = this.ind.active = this.ru.active = this.es.active = this.id.active = !1),
                this.btn_play1.y = -450,
                console.log("down", this.status),
                1 == this.status || 2 == this.status || 8 == this.status)) {
                    var i = this.player1.getComponent(cc.Animation);
                    if (this.player1Status && this.player1Status.isPlaying)
                        return;
                    console.log("status", this.player1Status, this.status),
                    this.player1Status = i.play("catching"),
                    1 == this.status ? this.pitching() : 2 == this.status && setTimeout(function() {
                        this.catching()
                    }
                    .bind(this), 125)
                }
            },
            updateScore: function(t) {
                Math.floor(this.score / 50) != Math.floor((this.score + t) / 50) && this.showFireWorks(),
                this.audience1.runAction(cc.repeatForever(cc.sequence(cc.moveTo(.5, 0, 265), cc.moveTo(.5, 0, 270)))),
                this.audience2.runAction(cc.repeatForever(cc.sequence(cc.moveTo(.5, 0, 248), cc.moveTo(.5, 0, 243)))),
                clearTimeout(this.actiontimeout),
                this.actiontimeout = setTimeout(function() {
                    this.audience1.stopAllActions(),
                    this.audience2.stopAllActions()
                }
                .bind(this), 2e3),
                this.score += t,
                99 < this.score ? this.scoreLabel2.string = this.score + "" : 9 < this.score ? this.scoreLabel2.string = "0" + this.score : this.scoreLabel2.string = "00" + this.score;
                var i = cc.callFunc(function() {
                    99 < this.score ? this.scoreLabel1.string = this.score + "" : 9 < this.score ? this.scoreLabel1.string = "0" + this.score : this.scoreLabel1.string = "00" + this.score,
                    this.label1.scaleY = 1
                }, this);
                this.label1.runAction(cc.sequence(cc.scaleTo(.5, 1, 0), i));
                for (var s = 0; s < 20; s++) {
                    var h = new cc.Node;
                    h.addComponent(cc.Sprite).spriteFrame = this.balloonFrames[t],
                    this.main.addChild(h),
                    h.setSiblingIndex(2),
                    this.balloons.push(h),
                    h.x = 100 * s - 1e3,
                    h.y = 100,
                    h.vy = Math.random() + 4
                }
                console.log("updateScore")
            },
            onUpHandler: function() {
                this.btn_play1.y = -430
            },
            reStart: function(t) {
                (console.log("restart", !t),
                this.change.active = !1,
                this.player1.active = !0,
                this.door.active = !0,
                this.doorani.active = !1,
                this.score = 0,
                this.scoreLabel1.string = "000",
                this.scoreLabel2.string = "000",
                this.frame = 0,
                this.path = 0,
                this.ball1.active = !1,
                this.ball2.active = !1,
                this.reCamera(),
                this.doorani.active = !1,
                this.backrun.active = !1,
                // this.btn_play.active = !0,
                this.menus.active = !1,
                this.player1.getComponent(cc.Animation).play("catchend"),
                t || (this.status = 8,
                this.pitchtimeout = setTimeout(function() {
                    this.pitching()
                }
                .bind(this), 3e3)),
                this.referee.active) ? (this.referee.getComponent(cc.Animation).play("referee").wrapMode = cc.WrapMode.Reverse,
                setTimeout(function() {
                    this.over = 2,
                    this.overtime = 0,
                    this.overpower = 1 / 60,
                    this.eles.active = !0
                }
                .bind(this), 1600)) : this.main.scaleX = this.main.scaleY = 1
            },
            nextRound: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1e3;
                console.log("nextRound", t),
                this.status = 8,
                setTimeout(function() {
                    this.mt = 0,
                    this.move = 1,
                    this.power1 = .09,
                    this.mx = this.near.x * this.power1,
                    this.my = this.main.y * this.power1
                }
                .bind(this), t),
                this.pitchtimeout = setTimeout(function() {
                    this.pitching()
                }
                .bind(this), 3e3)
            },
            pitching: function() {
                this.btn_play.active = !0;
                console.log("pitching", this.status),
                clearTimeout(this.pitchtimeout),
                console.log("real pitching"),
                this.status = 2,
                this.pitcher.getComponent(cc.Animation).play("pitch"),
                setTimeout(function() {
                    this.pitched()
                }
                .bind(this), 1495),
                this.ball1.active = this.ball2.active = !1,
                this.ball1.x = this.ball1.sx = 33,
                this.ball1.y = this.ball1.sy = 148,
                this.ball2.x = this.ball2.sx = 33,
                this.ball2.y = this.ball2.sy = 110,
                this.ball1.hx = this.ball2.hx = 100 * Math.random() - 30,
                this.ball1.hy = 30 * -Math.random() - 20,
                this.ball2.hy = this.ball1.hy - 13,
                this.ball1.tx = this.ball2.tx = 20 * Math.random() - 10,
                this.ball1.ty = -700,
                this.ball2.ty = -800,
                this.ball1.cx1 = this.ball1.sx + .7 * (this.ball1.hx - this.ball1.sx),
                this.ball1.cy1 = this.ball1.sy + .1 * (this.ball1.hy - this.ball1.sy),
                this.ball1.cx2 = this.ball1.hx - .6 * (this.ball1.tx - this.ball1.hx),
                this.ball1.cy2 = this.ball1.hy + .1 * (this.ball1.ty - this.ball1.hy),
                this.time = 0,
                this.power1 = .03,
                this.power1 += this.power1 * this.score * .01,
                this.power2 = .5 * this.power1,
                this.ball2.vy1 = (this.ball2.hy - this.ball2.sy) * this.power1
            },
            pitched: function() {
                console.log("pitched"),
                this.ball1.active = this.ball2.active = !0,
                this.path = 1
            },
            catching: function() {
                if (console.log("catching", this.ball1.y),
                this.ball1.y > this.doorPos) {
                    if (this.ball1.y < -180)
                        if (this.status = 3,
                        cc.audioEngine.playEffect(this.hit),
                        this.ball1.y < -230 && -260 < this.ball1.y)
                            Math.random() < .05 ? (console.log("zero!"),
                            this.path = 8,
                            this.time = 0,
                            this.power1 = .03,
                            this.ball1.sx = this.ball1.x,
                            this.ball1.sy = this.ball1.y,
                            this.ball2.sx = this.ball2.x,
                            this.ball2.sy = this.ball2.y,
                            .5 < Math.random() ? (this.ball1.tx = this.cather1.x,
                            this.ball1.ty = this.cather1.y) : (this.ball1.tx = this.cather5.x,
                            this.ball1.ty = this.cather5.y),
                            this.ball2.tx = this.ball1.tx,
                            this.ball2.ty = this.ball1.ty - 30,
                            this.ball1.cx = this.ball1.sx + .5 * (this.ball1.tx - this.ball1.sx),
                            this.ball1.cy = this.ball1.sy + .5 * (this.ball1.ty - this.ball1.sy),
                            this.runcount = 0) : (console.log("perfect!"),
                            this.path = 3,
                            this.time = 0,
                            this.ball1.sx = this.ball1.x,
                            this.ball1.sy = this.ball1.y,
                            this.scale = this.ball1.scaleX,
                            this.ball1.tx = 800 * Math.random() - 400,
                            this.ball1.ty = 340,
                            this.ball1.cx = this.ball1.tx - .1 * (this.ball1.tx - this.ball1.sx),
                            this.ball1.cy = this.ball1.ty + 2.8 * (this.ball1.ty - this.ball1.sy),
                            this.power1 = .015,
                            this.ball2.sx = this.ball2.x,
                            this.ball2.sy = this.ball2.y,
                            this.ball2.tx = this.ball1.tx,
                            this.ball2.ty = this.ball1.ty - 13,
                            this.ball2.vx1 = (this.ball2.tx - this.ball2.sx) * this.power1,
                            this.ball2.vy1 = (this.ball2.ty - this.ball2.sy) * this.power1,
                            this.power2 = 2 * this.power1,
                            this.mx = this.ball2.tx * this.power2,
                            this.my = (this.ball2.ty + 60) * this.power2,
                            this.mt = 0);
                        else {
                            this.path = 4,
                            this.time = 0,
                            this.ball1.sx = this.ball1.x,
                            this.ball1.sy = this.ball1.y,
                            this.ball2.sx = this.ball2.x,
                            this.ball2.sy = this.ball2.y,
                            .5 < Math.random() ? (this.ball1.tx = 400 * -Math.random() - 200,
                            this.ball1.ty = 212,
                            console.log("left!")) : (this.ball1.tx = 400 * Math.random() + 200,
                            this.ball1.ty = 212,
                            console.log("right!"));
                            var t = Math.atan2(this.ball1.ty - this.ball1.y, this.ball1.tx - this.ball1.x)
                              , i = this.ball1.tx - this.ball1.sx
                              , s = this.ball1.ty - this.ball1.sy
                              , h = (Math.sqrt(i * i + s * s),
                            250 + 100 * Math.random());
                            this.ball1.tx1 = this.ball1.sx + Math.cos(t) * h,
                            this.ball1.ty1 = this.ball1.sy + Math.sin(t) * h,
                            this.ball1.tx2 = this.ball1.tx1 + Math.cos(t) * h * .3,
                            this.ball1.ty2 = this.ball1.ty1 + Math.sin(t) * h * .3,
                            this.ball1.tx3 = this.ball1.tx2 + Math.cos(t) * h * .1,
                            this.ball1.ty3 = this.ball1.ty2 + Math.sin(t) * h * .1,
                            this.ball1.hx1 = this.ball1.sx + .3 * (this.ball1.tx1 - this.ball1.sx),
                            this.ball1.hy1 = this.ball1.sy + .6 * (this.ball1.ty1 - this.ball1.sy),
                            this.ball1.hx2 = this.ball1.tx1 + .2 * (this.ball1.tx2 - this.ball1.tx1),
                            this.ball1.hy2 = this.ball1.ty1 + .8 * (this.ball1.ty2 - this.ball1.ty1),
                            this.ball1.hx3 = this.ball1.tx2 + .4 * (this.ball1.tx3 - this.ball1.tx2),
                            this.ball1.hy3 = this.ball1.ty2 + .8 * (this.ball1.ty3 - this.ball1.ty2),
                            this.ball1.hx4 = this.ball1.tx3 + .5 * (this.ball1.tx - this.ball1.tx3),
                            this.ball1.hy4 = this.ball1.ty3 + .5 * (this.ball1.ty - this.ball1.ty3),
                            this.cspeed = .013,
                            this.mx = this.ball1.tx * this.cspeed,
                            this.my = this.ball1.ty * this.cspeed,
                            this.mt = 0,
                            this.camerax = 150,
                            this.power1 = .045,
                            this.pitcherrun()
                        this.btn_play.active = !1;
                        }
                } else
                    this.gameOver()
            },
            doPerfect: function() {
                this.ball1.active = this.ball2.active = !1,
                this.updateScore(6),
                this.nextRound(),
                cc.audioEngine.playEffect(this.cheer)
            },
            doScore: function(t) {
                this.updateScore(t),
                this.nextRound(200)
            },
            makeCircle: function(t, i) {
                var s = new cc.Node
                  , h = s.addComponent(cc.Graphics);
                h.circle(0, 0, 13),
                h.fillColor = cc.Color.WHITE,
                h.fill(),
                s.x = t,
                s.y = i,
                this.near.addChild(s)
            },
            gameOver: function() {
                var self = this;
                if (9 != this.status) {
                    this.status = 9,
                    console.log("game over"),
                    this.btn_play.active = !1;
                    this.menus.active = !0;
                    var t = 1500;
                    0 < this.score ? (this.over = 1,
                    this.overtime = 0,
                    this.overpower = 1 / 90,
                    t = 3500) : (this.change.active = !0,
                    this.player1.active = !1,
                    this.change.getComponent(cc.Animation).play("change"),
                    t = 2e3),
                    setTimeout(function() {
                        // console.log("set"),
                        // window.NativeInterface ? (window.NativeInterface.onGameOver(JSON.stringify({
                        //     result: 0,
                        //     score: this.score
                        // })),
                        // console.log("NativeInterface.onGameOver:" + JSON.stringify({
                        //     result: 0,
                        //     score: this.score
                        // }))) : window.onGameLoaded && (window.onGameOver(JSON.stringify({
                        //     result: 0,
                        //     score: this.score
                        // })),
                        // console.log("onGameOver:" + JSON.stringify({
                        //     result: 0,
                        //     score: this.score
                        // })))
                        
                        // self.reStart();
                    }
                    .bind(this), t)
                }
            },
            moveCamera: function(t, i) {
                this.main.y += i,
                this.near.x += t,
                this.tree.x += .7 * t,
                this.bg.x += .2 * t
            },
            reCamera: function() {
                this.main.y = 0,
                this.near.x = this.tree.x = this.bg.x = 0
            },
            update: function(t) {
                this.frame += 1;
                var i = 1;
                if (i = 200 < this.ball1.y ? .3 : this.ball1.y < -500 ? 1.5 : .3 + (700 - (this.ball1.y + 500)) / 700 * 1.2,
                this.ball1.scaleX = this.ball1.scaleY = this.ball2.scaleX = this.ball2.scaleY = i,
                1 == this.path) {
                    this.time += this.power1;
                    var s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.sx + 2 * this.time * s * this.ball1.cx1 + this.time * this.time * this.ball1.hx,
                    this.ball1.y = s * s * this.ball1.sy + 2 * this.time * s * this.ball1.cy1 + this.time * this.time * this.ball1.hy,
                    this.ball2.x = this.ball1.x,
                    this.ball2.y += this.ball2.vy1,
                    console.log("c1"),
                    1 <= this.time && (this.path = 2,
                    this.time = 0)
                } else if (2 == this.path) {
                    this.time += this.power2;
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.hx + 2 * this.time * s * this.ball1.cx2 + this.time * this.time * this.ball1.tx,
                    this.ball1.y = s * s * this.ball1.hy + 2 * this.time * s * this.ball1.cy2 + this.time * this.time * this.ball1.ty,
                    this.ball2.x = this.ball1.x,
                    this.ball2.y = this.ball1.y - 200 * this.time,
                    console.log("c2"),
                    this.ball1.y < -320 && this.gameOver(),
                    this.ball1.y <= this.doorPos && this.door.active && (this.door.active = !1,
                    this.doorani.active = !0,
                    this.doorani.getComponent(cc.Animation).play("destroy")),
                    this.ball1.y < -660 && (this.path = 0,
                    this.time = 0)
                } else if (3 == this.path) {
                    this.power1 *= .9858,
                    this.time += this.power1;
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.sx + 2 * this.time * s * this.ball1.cx + this.time * this.time * this.ball1.tx,
                    this.ball1.y = s * s * this.ball1.sy + 2 * this.time * s * this.ball1.cy + this.time * this.time * this.ball1.ty,
                    this.ball2.x += this.ball2.vx1,
                    this.ball2.y += this.ball2.vy1,
                    this.ball2.vx1 = (this.ball2.tx - this.ball2.sx) * this.power1,
                    this.ball2.vy1 = (this.ball2.ty - this.ball2.sy) * this.power1,
                    this.ball1.scaleX = this.ball1.scaleY = this.ball2.scaleX = this.ball2.scaleY = .9 < s ? this.scale : this.scale * (s + .1),
                    console.log("c3"),
                    this.mt < 1 && (this.mt += this.power2,
                    this.moveCamera(-this.mx, -this.my)),
                    this.makeshadow(),
                    1 <= this.time && (this.path = 0,
                    this.doPerfect())
                } else if (4 == this.path) {
                    this.time += this.power1,
                    1 < this.time && (this.time = 1);
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.sx + 2 * this.time * s * this.ball1.hx1 + this.time * this.time * this.ball1.tx1,
                    this.ball1.y = s * s * this.ball1.sy + 2 * this.time * s * this.ball1.hy1 + this.time * this.time * this.ball1.ty1,
                    this.ball2.x += (this.ball1.tx1 - this.ball2.sx) * this.power1,
                    this.ball2.y += (this.ball1.ty1 - 13 - this.ball2.sy) * this.power1,
                    console.log("c4"),
                    this.mt < 1 && (this.cscale = .99,
                    this.cspeed *= this.cscale,
                    this.mt += this.cspeed,
                    this.mx *= this.cscale,
                    this.my *= this.cscale,
                    this.moveCamera(-this.mx, -this.my)),
                    this.makeshadow(),
                    1 <= this.time && (this.power2 = this.power1,
                    this.path = 5,
                    this.time = 0)
                } else if (5 == this.path) {
                    this.power2 *= .998,
                    this.time += this.power2,
                    1 < this.time && (this.time = 1);
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.tx1 + 2 * this.time * s * this.ball1.hx2 + this.time * this.time * this.ball1.tx2,
                    this.ball1.y = s * s * this.ball1.ty1 + 2 * this.time * s * this.ball1.hy2 + this.time * this.time * this.ball1.ty2,
                    this.ball2.x += (this.ball1.tx2 - this.ball1.tx1) * this.power2,
                    this.ball2.y += (this.ball1.ty2 - this.ball1.ty1 + 5) * this.power2,
                    console.log("c5"),
                    this.mt < 1 && (this.cscale = .99,
                    this.cspeed *= this.cscale,
                    this.mt += this.cspeed,
                    this.mx *= this.cscale,
                    this.my *= this.cscale,
                    this.moveCamera(-this.mx, -this.my)),
                    this.makeshadow(),
                    1 <= this.time && (console.log(this.ball1.x, this.ball1.y, this.ball2.x, this.ball2.y),
                    this.power3 = 1.3 * this.power2,
                    this.path = 6,
                    this.time = 0)
                } else if (6 == this.path) {
                    this.power3 *= .998,
                    this.time += this.power3,
                    1 < this.time && (this.time = 1);
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.tx2 + 2 * this.time * s * this.ball1.hx3 + this.time * this.time * this.ball1.tx3,
                    this.ball1.y = s * s * this.ball1.ty2 + 2 * this.time * s * this.ball1.hy3 + this.time * this.time * this.ball1.ty3,
                    this.ball2.x += this.ball1.x,
                    this.ball2.y += this.ball1.x - 15,
                    console.log("c6"),
                    this.mt < 1 && 1 != this.move && (this.cscale = .99,
                    this.cspeed *= this.cscale,
                    this.mt += this.cspeed,
                    this.mx *= this.cscale,
                    this.my *= this.cscale,
                    this.moveCamera(-this.mx, -this.my)),
                    this.makeshadow(),
                    1 <= this.time && (this.power4 = .15 * this.power3,
                    this.path = 7,
                    this.time = 0)
                } else if (7 == this.path) {
                    this.power4 *= .995,
                    this.time += this.power4,
                    1 < this.time && (this.time = 1);
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.tx3 + 2 * this.time * s * this.ball1.hx4 + this.time * this.time * this.ball1.tx,
                    this.ball1.y = s * s * this.ball1.ty3 + 2 * this.time * s * this.ball1.hy4 + this.time * this.time * this.ball1.ty,
                    this.ball2.x = this.ball1.x,
                    this.ball2.y = this.ball1.y - 5,
                    console.log("c7"),
                    this.mt < 1 && 1 != this.move && (this.cscale = .99,
                    this.cspeed *= this.cscale,
                    this.mt += this.cspeed,
                    this.mx *= this.cscale,
                    this.my *= this.cscale,
                    this.moveCamera(-this.mx, -this.my)),
                    (1 <= this.time || 212 < this.ball1.y) && (this.path = 0,
                    this.time = 0,
                    this.ball1.active = this.ball2.active = !1)
                } else if (8 == this.path) {
                    this.time += this.power1;
                    s = 1 - this.time;
                    this.ball1.rotation += 1,
                    this.ball1.x = s * s * this.ball1.sx + 2 * this.time * s * this.ball1.cx + this.time * this.time * this.ball1.tx,
                    this.ball1.y = s * s * this.ball1.sy + 2 * this.time * s * this.ball1.cy + this.time * this.time * this.ball1.ty,
                    this.ball2.vx1 = (this.ball2.tx - this.ball2.sx) * this.power1,
                    this.ball2.vy1 = (this.ball2.ty - this.ball2.sy) * this.power1,
                    this.ball2.x += this.ball2.vx1,
                    this.ball2.y += this.ball2.vy1,
                    this.makeshadow(),
                    console.log("c8"),
                    1 <= this.time && (this.path = 0,
                    this.time = 0)
                }
                if (this.back) {
                    console.log("back"),
                    this.time += this.backPower;
                    s = 1 - this.time;
                    this.ball1.x = s * s * this.ball1.sx + 2 * this.time * s * this.ball1.hx + this.time * this.time * this.ball1.tx,
                    this.ball1.y = s * s * this.ball1.sy + 2 * this.time * s * this.ball1.hy + this.time * this.time * this.ball1.ty,
                    this.ball2.x = this.ball1.x,
                    this.ball2.y += this.ball2.vy1,
                    1 <= this.time && (this.back = !1,
                    this.time = 0)
                }
                (1 == this.move && (console.log("move"),
                this.moveCamera(-this.mx, -this.my),
                this.mt += this.power1,
                1 <= this.mt && (this.move = 0,
                this.main.y = 0,
                this.near.x = 0)),
                1 == this.over) ? (console.log("over1"),
                this.overpower += .001,
                this.overtime += this.overpower,
                this.eles.y -= 880 * this.overpower,
                this.eles.scaleX += 1.5 * this.overpower,
                this.eles.scaleY += 1.5 * this.overpower,
                this.bg4.scaleX += 4.5 * this.overpower,
                this.bg4.scaleY += 4.5 * this.overpower,
                this.guardrail.scaleX += 1 * this.overpower,
                this.guardrail.scaleY += 1 * this.overpower,
                this.audience1.scaleX += 1 * this.overpower,
                this.audience1.scaleY += 1 * this.overpower,
                this.audience2.scaleX += 1 * this.overpower,
                this.audience2.scaleY += 1 * this.overpower,
                this.tv.scaleX += .5 * this.overpower,
                this.tv.scaleY += .5 * this.overpower,
                this.label1.scaleX += .5 * this.overpower,
                this.label1.scaleY += .5 * this.overpower,
                this.label2.scaleX += .5 * this.overpower,
                this.label2.scaleY += .5 * this.overpower,
                this.light.scaleX += .5 * this.overpower,
                this.light.scaleY += .5 * this.overpower,
                this.guardrail.y -= 180 * this.overpower,
                this.audience1.y -= 150 * this.overpower,
                this.audience2.y -= 150 * this.overpower,
                this.tree.y -= 150 * this.overpower,
                this.bg.y -= 150 * this.overpower,
                this.tv.y -= 80 * this.overpower,
                this.label1.y -= 20 * this.overpower,
                this.label2.y -= 40 * this.overpower,
                this.light.y -= 150 * this.overpower,
                this.green.y -= 150 * this.overpower,
                this.bg4.y -= (2.25 * this.bg4.height + 150) * this.overpower,
                1 <= this.overtime && (this.eles.active = !1,
                this.over = 0,
                this.btn_play.active = !1,
                this.referee.active = !0,
                this.referee.getComponent(cc.Animation).play("referee").wrapMode = cc.WrapMode.Normal)) : 2 == this.over && (console.log("over2"),
                this.overpower += .001,
                this.overtime += this.overpower,
                this.eles.y += 880 * this.overpower,
                this.eles.scaleX -= 1.5 * this.overpower,
                this.eles.scaleY -= 1.5 * this.overpower,
                this.bg4.scaleX -= 4.5 * this.overpower,
                this.bg4.scaleY -= 4.5 * this.overpower,
                this.guardrail.scaleX -= 1 * this.overpower,
                this.guardrail.scaleY -= 1 * this.overpower,
                this.audience1.scaleX -= 1 * this.overpower,
                this.audience1.scaleY -= 1 * this.overpower,
                this.audience2.scaleX -= 1 * this.overpower,
                this.audience2.scaleY -= 1 * this.overpower,
                this.tv.scaleX -= .5 * this.overpower,
                this.tv.scaleY -= .5 * this.overpower,
                this.label1.scaleX -= .5 * this.overpower,
                this.label1.scaleY -= .5 * this.overpower,
                this.label2.scaleX -= .5 * this.overpower,
                this.label2.scaleY -= .5 * this.overpower,
                this.light.scaleX -= .5 * this.overpower,
                this.light.scaleY -= .5 * this.overpower,
                this.guardrail.y += 180 * this.overpower,
                this.audience1.y += 150 * this.overpower,
                this.audience2.y += 150 * this.overpower,
                this.tree.y += 150 * this.overpower,
                this.bg.y += 150 * this.overpower,
                this.tv.y += 80 * this.overpower,
                this.label1.y += 20 * this.overpower,
                this.label2.y += 40 * this.overpower,
                this.light.y += 150 * this.overpower,
                this.green.y += 150 * this.overpower,
                this.bg4.y += (2.25 * this.bg4.height + 150) * this.overpower,
                1 <= this.overtime && (this.eles.y = 0,
                this.eles.scaleX = this.eles.scaleY = 1,
                this.bg4.scaleX = this.bg4.scaleY = 1,
                this.guardrail.scaleX = this.guardrail.scaleY = 1,
                this.audience1.scaleX = this.audience1.scaleY = 1,
                this.audience2.scaleX = this.audience2.scaleY = 1,
                this.tv.scaleX = this.tv.scaleY = 1,
                this.label1.scaleX = this.label1.scaleY = 1,
                this.label2.scaleX = this.label2.scaleY = 1,
                this.light.scaleX = this.light.scaleY = 1,
                this.green.y = -199,
                this.bg4.y = -224,
                this.light.y = 449,
                this.tv.y = 432,
                this.audience1.y = 260,
                this.audience2.y = 243,
                this.guardrail.y = 216,
                this.label1.y = 516,
                this.label2.y = 478,
                this.main.y = 0,
                this.over = 0,
                this.referee.active = !1));
                for (var h = 0; h < this.balloons.length; h++) {
                    var e = this.balloons[h];
                    e.y += e.vy,
                    800 <= e.y && (e.destroy(),
                    this.balloons.splice(h, 1),
                    h--)
                }
                for (h = 0; h < this.fires.length; h++) {
                    var a = this.fires[h];
                    a.y += a.vy,
                    a.ay += a.vy,
                    a.ay >= a.ty && (this.bomb(a.x, a.y),
                    a.destroy(),
                    this.fires.splice(h, 1),
                    h--)
                }
                for (h = 0; h < this.fragments.length; h++) {
                    var l = this.fragments[h];
                    l.frame++,
                    l.vx *= .98,
                    l.vy *= .98,
                    l.x += l.vx,
                    25 <= l.frame && (l.opacity -= 25.5),
                    l.y += l.vy,
                    l.opacity <= 0 && (l.destroy(),
                    this.fragments.splice(h, 1),
                    h--)
                }
                for (h = 0; h < this.shadows.length; h++)
                    this.shadows[h].opacity -= 12.75,
                    this.shadows[h].scaleX -= .05,
                    this.shadows[h].scaleY -= .05,
                    (this.shadows[h].opacity <= 0 || this.shadows[h].scaleX <= 0) && (this.shadows[h].destroy(),
                    this.shadows.splice(h, 1),
                    h--);
                if (3 != this.path && this.catherrun(),
                this.backrun.active && (this.runtime = 1 < this.runtime + this.runpower ? 1 : this.runtime + this.runpower,
                this.player2.x += this.player2.vx,
                this.player2.y += this.player2.vy,
                this.backrun.x += this.backrun.vx,
                this.backrun.y += this.backrun.vy,
                this.player2.scaleX = this.player2.scaleY = .4 + .6 * this.runtime,
                this.backrun.scaleX = this.backrun.scaleY = 1 - .6 * this.runtime,
                1 <= this.runtime))
                    if (this.runcount += 1,
                    this.pitcherrunrecovery(),
                    this.runend || 4 <= this.runcount) {
                        this.doScore(this.runcount),
                        this.player1.active = !0,
                        this.backrun.active = !1,
                        this.backrun.getComponent(cc.Animation).stop("backrun");
                        var o = this.player2.getComponent(cc.Animation);
                        o.setCurrentTime(0),
                        o.stop("frontrun")
                    } else
                        this.runtime = 0;
                var r = this.eles.children.sort(this.sortY);
                for (h = 0; h < r.length; h++) {
                    r[h].setSiblingIndex(h + 1)
                }
            },
            sortY: function(t, i) {
                return t.y > i.y ? -1 : t.y < i.y ? 1 : 0
            },
            pitcherrun: function() {
                this.runcount = 0,
                this.runend = !1,
                setTimeout(function() {
                    this.pitcherrunrecovery()
                }
                .bind(this), 200),
                this.player2.getComponent(cc.Animation).play("frontrun"),
                this.backrun.getComponent(cc.Animation).play("backrun"),
                this.runpower = .015,
                this.runtime = 0,
                this.player2.vx = (this.backrun.x - this.player2.x) * this.runpower,
                this.player2.vy = (this.backrun.y - this.player2.y) * this.runpower,
                this.backrun.vx = (this.player2.x - this.backrun.x) * this.runpower,
                this.backrun.vy = (this.player2.y - this.backrun.y) * this.runpower
            },
            pitcherrunrecovery: function() {
                this.player2.x = -62,
                this.player2.y = 129,
                this.player2.scaleX = this.player2.scaleY = .4,
                this.player1.active = !1,
                this.backrun.active = !0,
                this.backrun.x = -104,
                this.backrun.y = -214,
                this.backrun.scaleX = this.backrun.scaleY = 1
            },
            catherrun: function() {
                for (var t = 0; t < this.cathers.length; t++) {
                    var i = this.cathers[t];
                    if (t < 4)
                        if (3 <= this.path) {
                            if (this.ball1.y < i.y ? this.catherMoveY(i, -(i.y - this.ball1.y > this.fvy ? this.fvy : i.y - this.ball1.y), this.fyrange) : this.catherMoveY(i, this.ball1.y - i.y > this.fvy ? this.fvy : this.ball1.y - i.y, this.fyrange),
                            this.cscale = 1.3 + (i.oy - i.y) / this.fyrange * .2,
                            i.scaleY = this.cscale,
                            this.ball1.x < i.x ? (this.catherMoveX(i, -(i.x - this.ball1.x > this.fvx ? this.fvx : i.x - this.ball1.x), this.fxrange),
                            i.scaleX = -this.cscale) : (this.catherMoveX(i, this.ball1.x - i.x > this.fvx ? this.fvx : this.ball1.x - i.x, this.fxrange),
                            i.scaleX = this.cscale),
                            3 != this.path) {
                                var s = this.ball1.x - i.x
                                  , h = this.ball1.y - i.y;
                                Math.sqrt(s * s + h * h) < 20 && (this.time = 0,
                                this.ball1.sx = this.ball1.x = 0 < i.scaleX ? i.x + 20 : i.x - 20,
                                this.ball1.sy = this.ball1.y = i.y + 30,
                                this.ball1.tx = 35,
                                this.ball1.ty = 117,
                                this.ball1.hx = this.ball1.sx + .5 * (this.ball1.tx - this.ball1.sx),
                                this.ball1.hy = this.ball1.sy + .7 * (this.ball1.ty - this.ball1.sy),
                                this.backPower = .02,
                                this.ball2.vy1 = (this.ball1.ty - this.ball1.sy) * this.backPower,
                                this.ball2.x = this.ball1.x,
                                this.ball2.y = this.ball1.y - 30,
                                console.log("catherrun"),
                                this.runend = !0,
                                8 == this.path && this.doScore(0),
                                this.path = 0,
                                setTimeout(function() {
                                    this.back = !0
                                }
                                .bind(this), 500))
                            }
                        } else
                            i.oy < i.y ? (i.y -= this.fvy,
                            i.oy >= i.y && (i.y = i.oy)) : i.oy > i.y && (i.y += this.fvy,
                            i.oy <= i.y && (i.y = i.oy)),
                            this.cscale = 1.3 + (i.oy - i.y) / this.fyrange * .2,
                            i.scaleX = t < 2 ? this.cscale : -this.cscale,
                            i.scaleY = this.cscale,
                            i.ox < i.x ? (i.x -= this.fvx,
                            i.ox >= i.x && (i.x = i.ox)) : i.ox > i.x && (i.x += this.fvx,
                            i.ox <= i.x && (i.x = i.ox));
                    else if (3 <= this.path) {
                        if (this.ball1.y < i.y ? this.catherMoveY(i, -(i.y - this.ball1.y > this.bvy ? this.bvy : i.y - this.ball1.y), this.byrange) : this.catherMoveY(i, this.ball1.y - i.y > this.bvy ? this.bvy : this.ball1.y - i.y, this.byrange),
                        this.cscale = .7 + (i.oy - i.y) / this.byrange * .1,
                        i.scaleY = this.cscale,
                        this.ball1.x < i.x ? (this.catherMoveX(i, -(i.x - this.ball1.x > this.bvx ? this.bvx : i.x - this.ball1.x), this.bxrange),
                        i.scaleX = -this.cscale) : (this.catherMoveX(i, this.ball1.x - i.x > this.bvx ? this.bvx : this.ball1.x - i.x, this.bxrange),
                        i.scaleX = this.cscale),
                        3 != this.path) {
                            s = this.ball1.x - i.x,
                            h = this.ball1.y - i.y;
                            Math.sqrt(s * s + h * h) < 10 && (this.time = 0,
                            this.path = 0,
                            this.ball1.sx = this.ball1.x = 0 < i.scaleX ? i.x + 10 : i.x - 10,
                            this.ball1.sy = this.ball1.y = i.y + 15,
                            this.ball1.tx = 35,
                            this.ball1.ty = 117,
                            this.ball1.hx = this.ball1.sx + .5 * (this.ball1.tx - this.ball1.sx),
                            this.ball1.hy = this.ball1.sy + .7 * (this.ball1.ty - this.ball1.sy),
                            this.backPower = .02,
                            this.ball2.vy1 = (this.ball1.ty - this.ball1.sy) * this.backPower,
                            this.ball2.x = this.ball1.x,
                            this.ball2.y = this.ball1.y - 15,
                            console.log("catherrun1"),
                            this.runend = !0,
                            setTimeout(function() {
                                this.back = !0
                            }
                            .bind(this), 500))
                        }
                    } else
                        i.oy < i.y ? (i.y -= this.bvy,
                        i.oy >= i.y && (i.y = i.oy)) : i.oy > i.y && (i.y += this.bvy,
                        i.oy <= i.y && (i.y = i.oy)),
                        this.cscale = .7 + (i.oy - i.y) / this.byrange * .1,
                        i.scaleX = t < 6 ? this.cscale : -this.cscale,
                        i.scaleY = this.cscale,
                        i.ox < i.x ? (i.x -= this.bvx,
                        i.ox >= i.x && (i.x = i.ox)) : i.ox > i.x && (i.x += this.bvx,
                        i.ox <= i.x && (i.x = i.ox));
                    i.x != i.ox || i.y != i.oy ? i.run || (i.getComponent(cc.Animation).play("catcherrun"),
                    i.run = !0) : i.run && (i.getComponent(cc.Animation).stop("catcherrun"),
                    i.run = !1)
                }
            },
            catherMoveX: function(t, i, s) {
                Math.abs(t.x - t.ox + i) < s && (t.x += i)
            },
            catherMoveY: function(t, i, s) {
                Math.abs(t.y - t.oy + i) < s && (t.y += i)
            },
            makeshadow: function() {
                var t = new cc.Node
                  , i = t.addComponent(cc.Graphics);
                i.circle(0, 0, 13),
                i.fillColor = cc.Color.WHITE,
                i.fill(),
                t.x = this.ball1.x,
                t.y = this.ball1.y,
                t.scaleX = t.scaleY = this.ball1.scaleX,
                this.near.addChild(t),
                this.shadows.push(t),
                t.setSiblingIndex(this.ball1.getSiblingIndex() - 1)
            },
            bomb: function(t, i) {
                for (var s = Math.floor(10 * Math.random() + 10), h = 0, e = 0; e < s; e++) {
                    var a = new cc.Node;
                    h += Math.random(),
                    a.addComponent(cc.Sprite).spriteFrame = this.fireframes[Math.floor(Math.random() * this.fireframes.length)];
                    var l = 30 * Math.random();
                    a.x = t + Math.cos(h) * l,
                    a.y = i + Math.sin(h) * l,
                    l += 30,
                    a.tx = t + Math.cos(h) * l,
                    a.ty = i + Math.sin(h) * l,
                    a.vx = (a.tx - a.x) / 8,
                    a.vy = (a.ty - a.y) / 8,
                    a.frame = 0,
                    this.main.addChild(a),
                    this.fragments.push(a),
                    a.setSiblingIndex(2)
                }
            },
            showFireWorks: function() {
                for (var t = 0; t < 20; t++)
                    this.fireworks(this.main.x - 1e3 + t * (90 + 30 * Math.random()), 320);
                setTimeout(function() {
                    for (var t = 0; t < 20; t++)
                        this.fireworks(this.main.x - 1e3 + t * (90 + 30 * Math.random()), 320)
                }
                .bind(this), 800),
                setTimeout(function() {
                    for (var t = 0; t < 20; t++)
                        this.fireworks(this.main.x - 1e3 + t * (90 + 30 * Math.random()), 320)
                }
                .bind(this), 1700),
                setTimeout(function() {
                    for (var t = 0; t < 20; t++)
                        this.fireworks(this.main.x - 1e3 + t * (90 + 30 * Math.random()), 320)
                }
                .bind(this), 2500),
                setTimeout(function() {
                    for (var t = 0; t < 20; t++)
                        this.fireworks(this.main.x - 1e3 + t * (90 + 30 * Math.random()), 320)
                }
                .bind(this), 3300)
            },
            fireworks: function(t, i) {
                var s = new cc.Node;
                s.addComponent(cc.Sprite).spriteFrame = this.fireframes[Math.floor(Math.random() * this.fireframes.length)],
                this.main.addChild(s),
                this.fires.push(s),
                s.setSiblingIndex(2),
                s.vy = 5 * Math.random() + 6,
                s.ay = 0,
                s.ty = 150 + 100 * Math.random(),
                s.x = t,
                s.y = i
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["Game"]);
