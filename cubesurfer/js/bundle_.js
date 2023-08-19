!function() {
    "use strict";
    class e extends Laya.View {
        constructor() {
            super(), this.autoDestroyAtClosed = !0, this.name = this.constructor.name, this._event = {}, 
            this._aniArr = [], this.$updateArr = [];
        }
        onOpened(e) {
            super.onOpened(), this.argObj = e, this.initData(), this.initUI(), this.initEvent();
        }
        initUI() {}
        initData() {}
        initEvent() {}
        addEvent(e, t) {
            this._event[e] = t.bind(this), eventDispatcher.addEventListen(e, this, this._event[e]);
        }
        removeEvent(e) {
            eventDispatcher.removeEventListen(e, this, this._event[e]);
        }
        removeAllEvent() {
            for (var e in this._event) this.removeEvent(e);
        }
        dispatchEvent(e, t) {
            eventDispatcher.dispatchEvent(e, t);
        }
        playAni(e, t) {
            e._aniID && this._aniArr.push(e), e.play(0, t), e.$isPlaying = !0;
        }
        stopAllAni() {
            for (var e = 0; e < this._aniArr.length; e++) {
                var t = this._aniArr[e];
                t.$isPlaying && t.stop();
            }
        }
        resumeAllAni() {
            for (var e = 0; e < this._aniArr.length; e++) {
                var t = this._aniArr[e];
                t.$isPlaying && t.play(0, t.loop);
            }
        }
        removeTimer() {
            if (this.$updateArr) for (var e = 0; e < this.$updateArr.length; e++) updateManager.clear(this.$updateArr[e]);
        }
        doClose() {
            uiManager.closeUI(this.url);
        }
        onClosed() {
            this.removeTimer(), this.stopAllAni(), this.removeAllEvent();
        }
    }
    class t extends e {
        constructor() {
            super();
        }
        initData() {
            this.canTouch = !0;
        }
        initUI() {
            // platform.getInstance().initList(this.appList);
            this.btnScale.play(0, !0); 
            // uiManager.openUI("prefab/GridAD.scene", null, {
            //     centerY: -80
            // });
        }
        initEvent() {
            utils.onBtnScaleEvent(this.btn_revive, this, this.onRevive), 
            utils.onBtnScaleEvent(this.btn_restart, this, this.onRestart); 
            //G.ZSCONFIG && G.ZSCONFIG.zs_switch ? 
            // (this.btn_restart.y = Laya.stage.height - 140, 
            // this.moveBtn()); 
            //: uleeSDK && uleeSDK.showAD(!0);
        }
        moveBtn() {
            G.ZSCONFIG && G.ZSCONFIG.zs_banner_horizontal_enable && (updateManager.timeOnce(G.ZSCONFIG.zs_banner_banner_time / 1e3, this, function() {
                this.isTouchBtn || !uleeSDK || this.destroyed || uleeSDK.bannerAd && uleeSDK.bannerAd.show();
            }), updateManager.timeOnce(G.ZSCONFIG.zs_banner_text_time / 1e3, this, function() {
                var e = new Laya.TimeLine();
                e.to(this.btn_restart, {
                    y: Laya.stage.height - 320
                }, G.ZSCONFIG.zs_banner_move_time, null, 0).play(0, !1), e.on(Laya.Event.COMPLETE, this, function() {
                    this.canTouch = !0;
                });
            }), this.canTouch = !1);
        }
        onRevive() {
            console.log("激励广告");

                var e = this;
            setLoadingVisible(true, true, function () {
                    battleMgr.ownerBlock = [], battleMgr.revive(), e.doClose();
            })
            // if(platform.getInstance().initialized_)
            // {
                // platform.getInstance().showReward(function() {
                    // battleMgr.ownerBlock = [], battleMgr.revive(), e.doClose();
                // }, function(){
                    // utils.prompt("Advertisement failed to play!");
                // });
            // }else
            // {
                // battleMgr.ownerBlock = [], 
                // battleMgr.revive(), 
                // this.doClose();
            // }
        }
        onRestart() {
            // if(platform.getInstance().initialized_)
            // {
                var e = this;
                // platform.getInstance().showInterstitial(function(){
                    e.canTouch 
                    && (e.isTouchBtn = !0, 
                        battleMgr.restartGame(), 
                        uleeSDK && uleeSDK.hideBox(), 
                        e.doClose());
                // })
            // }
            // else
            // {
                // this.canTouch 
                // && (this.isTouchBtn = !0, 
                //     battleMgr.restartGame(), 
                //     uleeSDK && uleeSDK.hideBox(), 
                //     //uiManager.openUI("prefab/ADPage.scene"), 
                //     //G.SideAD && G.SideAD.onSwitch(), 
                //     this.doClose());
            // }
        }
        doClose() {
            //uiManager.getUI("prefab/GridAD.scene") && uiManager.getUI("prefab/GridAD.scene").doClose(), 
            super.doClose();
        }
    }
    class i extends e {
        constructor() {
            super(), this.loadItems = [], this.currItem = null, this.value = 0, this.count = 0, 
            this.currCount = 0, this.countMax = 0;
        }
        initUI() {
            super.initUI.call(this), this.updateKey = updateManager.frameLoop(1, this, this.update);
        }
        addItem(e) {
            this.countMax += e.count, this.loadItems.push(e), e.loading = this;
        }
        updateProgress() {
            this.value = this.count / this.countMax, this.value >= 1 && this.onLoaded();
        }
        update() {
            if (null == this.currItem) if (0 == this.loadItems.length) {
                if (this.count >= this.countMax) return;
            } else this.count >= this.currCount && (this.currItem = this.loadItems.shift(), 
            this.currItem.start(), this.currCount += this.currItem.count); else this.currItem.loaded ? this.currItem = null : this.currItem.checkFn && this.currItem.checkFn();
            this.count < this.currCount && this.count++, this.updateProgress();
        }
        onLoaded() {
            updateManager.clear(this.updateKey, this);
        }
    }
    class a {
        static copyForm(e, t) {
            for (let i in t) e[i] = t[i];
        }
        static copyForm2(e, t) {
            for (let i in t) "string" != typeof t[i] && "number" != typeof t[i] && "boolean" != typeof t[i] && "object" != typeof t[i] || (e[i] = t[i]);
        }
        static isEqualDateTime(e, t) {
            if (!e || !t || 0 == e || 0 == t) return !1;
            let i = new Date(e), a = new Date(t);
            return i.getFullYear() == a.getFullYear() && i.getMonth() == a.getMonth() && i.getDate() == a.getDate();
        }
        static getAngleByTwoPoint(e, t) {
            let i = t.x - e.x, a = t.y - e.y;
            return 180 * Math.atan2(a, i) / Math.PI;
        }
        static norTime(e) {
            let t = Math.floor(e / 3600), i = e % 60;
            return t + ":" + t % 60 + ":" + (i > 9 ? "" + i : "0" + i);
        }
        static norSecondTime(e) {
            let t = e % 60;
            return Math.floor(e / 60) + ":" + (t > 9 ? "" + t : "0" + t);
        }
        static get3D22Dpos(e, t) {
            let i = new Laya.Vector3();
            return t.viewport.project(e, t.projectionViewMatrix, i), i;
        }
        static in3DPosInScene(e, t) {
            let i = this.get3D22Dpos(e, t);
            return i.x >= 0 && i.x <= Laya.stage.width && i.y >= 0 && i.y <= Laya.stage.height;
        }
        static pointInRect(e, t, i) {
            let a = (i.b.x - i.a.x) * (t - i.a.y) - (i.b.y - i.a.y) * (e - i.a.x), s = (i.c.x - i.b.x) * (t - i.b.y) - (i.c.y - i.b.y) * (e - i.b.x), n = (i.d.x - i.c.x) * (t - i.c.y) - (i.d.y - i.c.y) * (e - i.c.x), o = (i.a.x - i.d.x) * (t - i.d.y) - (i.a.y - i.d.y) * (e - i.d.x);
            return a > 0 && s > 0 && n > 0 && o > 0 || a < 0 && s < 0 && n < 0 && o < 0;
        }
        static getLineMethodParam(e, t, i, a) {
            let s = 0;
            return i != e && (s = (a - t) / (i - e)), {
                k: s,
                b: a - s * i
            };
        }
        static getPointDistLine(e, t, i, a) {
            return Math.abs(i * e - t + a) / Math.sqrt(i * i + 1);
        }
        static getTwoPointDist(e, t, i, a) {
            return Math.sqrt((i - e) * (i - e) + (a - t) * (a - t));
        }
        static isIn(e, t, i) {
            return e >= t && e <= i;
        }
        static getBerizPoint(e, t, i, a) {
            return [ Math.pow(1 - e, 2) * t.x + 2 * e * (1 - e) * i.x + Math.pow(e, 2) * a.x, Math.pow(1 - e, 2) * t.y + 2 * e * (1 - e) * i.y + Math.pow(e, 2) * a.y ];
        }
        static getStrColorToRbg(e) {
            let t = [];
            for (let i = 1; i < e.length; i += 2) 255 == parseInt("0x" + e.slice(i, i + 2)) ? t.push(255) : t.push(parseInt("0x" + e.slice(i, i + 2)) / 255);
            return t;
        }
        static flyImg(e, t, i = 6, a, s, n, o, r) {
            let l, h = t || Laya.stage;
            for (let t = 0; t < i; t++) (l = new Laya.Image(e)).x = a, l.y = s, h.addChild(l), 
            Laya.Tween.to(l, {
                x: n,
                y: o
            }, 500, null, new Laya.Handler(this, function(e, a) {
                e.removeSelf(), e = null, t == i - 1 && r();
            }, [ l, t ]), 60 * t);
        }
        static imgComarse(e, t, i, a, s) {
            if (!t) return 0;
            let n = new Laya.Image();
            n.loadImage(e);
            n.drawToCanvas(i, a, 0, 0);
            Laya.Browser.onQGMiniGame;
            let o = n.drawToCanvas(i, a, 0, 0);
            Laya.SubmitCanvas;
            let r = t.drawToCanvas(i, a, 0, 0);
            s(this.pixelsContrast(o.getTexture().getPixels(0, 0, 500, 375), r.getTexture().getPixels(0, 0, i, a), i, a));
        }
        static pixelsContrast(e, t, i, a) {
            var s = i || 8, n = a || 8;
            e = this.pixelsToBinary(e, 1), t = this.pixelsToBinary(t, 1);
            var o = 0, r = 0, l = 0;
            let h = s * n / 2;
            for (var d = 0; d < h; d++) 1 != e[d] && 0 != e[d] && console.log(e[d]), 0 == e[d] && 0 == t[d] || (0 == e[d] && 1 == t[d] ? l++ : 1 == e[d] && (r++, 
            1 == t[d] && o++));
            var c = (o - l) / r * 100;
            return c < 0 && (c = 0), (c = Math.floor(c)) > 97 && (c = 100), c;
        }
        static pixelsToBinary(e, t) {
            var i = 0, a = e.length, s = 0, n = new Uint8Array(a / 8);
            if (!t) {
                for (var o = 0; o < a; o += 8) i += .299 * e[o] + .587 * e[o + 1] + .114 * e[o + 2];
                t = i /= a / 4;
            }
            let r = 0;
            for (o = 0; o < a; o += 8) .299 * e[o] + .587 * e[o + 1] + .114 * e[o + 2] >= t ? (n[s++] = 1, 
            r++) : n[s++] = 0;
            return console.log("tcount:" + r), n;
        }
        static getSpPixels(e, t, i) {
            let a = new Laya.Image();
            return a.loadImage(e), a.drawToCanvas(tmplw, tmplh, 0, 0).getTexture().getPixels(0, 0, t, i);
        }
        static createColorFilter(e = 0, t = 0, i = 0) {
            let a = [ e, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, 1, 0 ];
            return [ new Laya.ColorFilter(a) ];
        }
        static twMoveList(e) {
            let t = e;
            t.scrollTo(0), t.tweenTo(9, 2e4);
        }
        static stopMove(e) {
            let t = e;
            Laya.Tween.clearTween(t);
        }
        static random(e, t) {
            return Math.floor(Math.random() * (t + 1 - e) + e);
        }
        static arrayRandom(e) {
            return e[this.random(0, e.length - 1)];
        }
        static shiftRandom(e) {
            var t = this.random(0, e.length - 1), i = e[t];
            return e.removeAt(t), i;
        }
        static randomIndexByWeight(e, t) {
            if (!t) {
                t = 0;
                for (var i = 0; i < e.length; i++) t += e[i];
            }
            for (var a = this.random(0, t + 1), s = 0; s < e.length; s++) if ((a -= e[s]) <= 0) return s;
            return 0;
        }
    }
    Laya.Sprite.drawToCanvas = function(e, t, i, a, s, n) {
        s -= e.x, n -= e.y, s |= 0, n |= 0, i |= 0, a |= 0;
        var o = new Context();
        o.size(i, a), o.asBitmap = !0, o._targets.start(), o._targets.clear(0, 0, 0, 0), 
        RenderSprite.renders[t]._fun(e, o, s, n), o.flush(), o._targets.end(), o._targets.restore();
        var r = o._targets.getData(0, 0, i, a);
        o.destroy();
        var l = new HTMLCanvas(!0);
        l.size(i, a);
        for (var h = l.getContext("2d").getImageData(0, 0, i, a), d = 4 * i, c = h.data, u = a - 1, g = u * d, p = 0; u >= 0; u--) c.set(r.subarray(p, p + d), g), 
        g -= d, p += d;
        var m = new HTMLCanvas(!0);
        return m.size(i, a), m.getContext("2d").putImageData(h, 0, 0), m;
    };
    class s {
        constructor() {
            this.name = "", this.id = 0, this.gold = 0, this.level = 1, this.diamand = 0;
            let e = new Date();
            this.firstLoginDate = e.getFullYear() + "_" + e.getMonth() + "_" + e.getDate(), 
            this.isNewUser = !0, this.isSound = !0, this.isVibrate = !0;
        }
        addAtt(e, t, i = !1) {
            i ? this[e] = t : this[e] ? this[e] += t : this[e] = t;
        }
        addGold(e) {
            this.gold += e, this.save();
        }
        levelup(e = 1) {
            return this.level += e, this.save(), this.level;
        }
        setSound(e) {
            this.isSound = e, this.save();
        }
        setVibrate(e) {
            this.isVibrate = e, this.save();
        }
        copyFrom(e) {
            a.copyForm(this, e);
        }
        save() {
            let e = {};
            a.copyForm2(e, this), dataManager.setStorage(e);
        }
    }
    class n extends s {
        constructor() {
            super(), this.gates = "", this.roundId = 1, this.diamond = 0, this.lookShopArr = "1", 
            this.curEquipId = 1, this.isSound = !0, this.isVibrate = !0;
        }
        setGatePorss(e, t) {
            if (this.gates) {
                let i, a, s, n = "", o = this.gates.split("|");
                for (let r = 0; r < o.length; r++) i = o[r].split("_"), parseInt(i[0]) == e && t > parseInt(i[1]) ? (a = e + "_" + t, 
                s = !0) : a = i[0] + "_" + i[1], a && (n ? n += "|" + a : n = a);
                s ? this.gates = n : this.gates += "|" + e + "_" + t;
            } else this.gates = e + "_" + t;
            this.save();
        }
        getGatePross(e) {
            if (this.gates) {
                let t = this.gates.split("|");
                for (let i = 0; i < t.length; i++) if (t[i].split("_")[0] == e + "") return parseInt(t[i].split("_")[1]);
            }
            return 0;
        }
        isUnlock(e) {
            let t = this.gates.split("|");
            for (let i = 0; i < t.length; i++) if (parseInt(t[i].split("_")[0]) == e) return !0;
            return !1;
        }
        copyFrom(e) {
            super.copyFrom(e);
            let t = new Date(), i = t.getFullYear() + "_" + t.getMonth() + "_" + t.getDate();
            i != this.day && (this.nativeAdClickTimes = 0, this.day = i), i != this.firstLoginDate && (this.isNewUser = !1), 
            this.save();
        }
        setRoundId(e) {
            var t = utils.getObjLength(D.roundConfig);
            e > t && (e = t), this.roundId = e, this.save();
        }
        getRoundId() {
            return this.roundId;
        }
        setDiamond(e) {
            this.diamond += e, this.save();
        }
        getDiamond() {
            return this.diamond;
        }
        setCurEquipID(e) {
            this.curEquipId = e, this.save();
        }
        getCurEquipID() {
            return this.curEquipId;
        }
        setLookShop(e) {
            var t = this.getLookShop();
            t.push(Number(e)), this.lookShopArr = t.toString(), this.save();
        }
        getLookShop() {
            return this.lookShopArr.split(",");
        }
        setSound(e) {
            this.isSound = e, this.save();
        }
        getSound() {
            return this.isSound;
        }
        setVibrate(e) {
            this.isVibrate = e, this.save();
        }
        getVibrate() {
            return this.isVibrate;
        }
        static getIns() {
            return this._ins || (this._ins = new n()), this._ins;
        }
    }
    window.PlayerData = n;
    class o extends i {
        constructor() {
            super(), this.autoDestroyAtClosed = !0;
        }
        initUI() {
            //Laya.LocalStorage.clear();
            super.initUI.call(this), this.bar_loading.value = this.value, this.loading.play(0, !0);
            // this.addItem(new ulee.LoadItem(function() {
            //     var e = this;
            //     uleeSDK ? uleeSDK.initSDK({
            //         platform: "wx",
            //         appid: "wxc662119da271a2c0"
            //     }, function() {
            //         e.onComplete();
            //     }) : this.onComplete();
            // }, 10)), 
            
            this.addItem(new ulee.LoadItem(function() {
                console.log("加载模型");
                var e = this;
                ModelCfg.getIns().initModels(function() {
                    e.onComplete();
                });
            }, 10)), 
            this.addItem(new ulee.LoadItem(function() {
                console.log("加载界面");
                var e = this;
                // platform.getInstance().startup("Cube-Surfer","",()=>{
                    let yad     = new Laya.Image();
                    yad.scale(0.8,0.8);
                    yad.skin    = "common/yad.png";
                    yad.bottom  = 5;
                    yad.centerX = 0;
                    //yad.top   = 10;
                    yad.zOrder  = 1e3;
                   // yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                    Laya.stage.addChild(yad);
                    window.yad  = yad;

                    uiManager.openUI("game/MainView.scene", e, {
                        callback: function() {
                            e.onComplete();
                        }
                    });
                // });
                
                   
            }, 10)), 
            this.addItem(new ulee.LoadItem(function() {
                console.log("加载模型");
                battleMgr.initRound(), battleMgr.updateHero();
            }, 10), 
            function() {
                battleMgr.hero && battleMgr.hero.transform && this.onComplete();
            });
        }
        updateProgress() {
            super.updateProgress.call(this), this.bar_loading.value = this.value;
        }
        onLoaded() {
            if (super.onLoaded.call(this), 
            uiManager.getUI("game/MainView.scene").visible = !0, 
            uleeSDK) {
                var e = {
                    music: null
                };
                for (var t in e) e[t] = wx.loadSubpackage({
                    name: t,
                    success: function(e) {
                        console.log("music分包加载完毕"), G.LOADMUSIC = !0, battleMgr.gameStep == G.GAME_STEP.START && audioManager.playMusic(10);
                    },
                    fail: function(e) {
                        console.log("music分包加载失败", e);
                    }
                });
            }
            this.doClose();
        }
    }
    class r extends e {
        constructor() {
            super(), G.Main = this;
        }
        initUI() {
            this.panel_mask.height = .1, 
            battleMgr.createScene(this.box_scene), 
            this.visible = !1, 
            this.argObj.callback(), 
            this.updateCoin(), 
            this.initSet(), 
            this.updateRoundId(), 
            this.handAnim.play(0, !0), 
            this.shopAnim.play(0, !0), 
            //uleeSDK && uleeSDK.showAD(!0), 
            //uiManager.openUI("prefab/SideAD.scene"), 
            PlayerData.getIns().isNewUser;// || uiManager.openUI("prefab/PopupAD.scene");
        }
        initData() {
            this.roundArr = [], this.isPlayGiftAnim = !1, this.playerIndex = 0;
        }
        initEvent() {
            utils.onBtnScaleEvent(this.btn_shop, this, function() {
                uiManager.openUI("game/ShopView.scene");
            }), utils.onBtnScaleEvent(this.btn_set, this, this.onSet), 
            utils.onBtnScaleEvent(this.btn_sound, this, this.onSound), 
            //utils.onBtnScaleEvent(this.btn_vibrate, this, this.onVibrate),
            eventDispatcher.addEventListen(ulee.Event.ON_CHANGE_DIAMOND, this, this.updateCoin);
        }
        restart() {
            this.playerIndex = 0, this.isPlayGiftAnim = !1, this.clearTimeLine(), this.updateRoundId(), 
            this.initRoleAnim(), this.showRole();
        }
        updateCoin() {
            this.label_diamond.text = PlayerData.getIns().getDiamond();
        }
        onSet() {
            129 == this.img_setBg.height ? this.initSet(!0) : (this.img_setBg.height = 129, 
            this.mask_set.height = 130);
        }
        initSet(e) {
            if (e) return this.img_setBg.height = 60, void (this.mask_set.height = 60);
            this.img_setBg.height = 60, this.mask_set.height = 60;
            var t = utils.getChildDeep(this.btn_sound, "img_on"), 
            i = utils.getChildDeep(this.btn_sound, "img_off");
            t.visible = !1, 
            i.visible = !1, 
            t.visible = G.ISSOUND, 
            i.visible = !G.ISSOUND;
            if(!G.ISSOUND){
                audioManager.setMusicMuted(0);
            }
            // var a = utils.getChildDeep(this.btn_vibrate, "img_on"), 
            // s = utils.getChildDeep(this.btn_vibrate, "img_off");
            // a.visible = !1, s.visible = !1, 
            // uleeSDK ? (a.visible = uleeSDK.vibration, s.visible = !uleeSDK.vibration) : (a.visible = PlayerData.getIns().getVibrate(), 
            // s.visible = !PlayerData.getIns().getVibrate());
        }
        onSound() {
            var e = utils.getChildDeep(this.btn_sound, "img_on"), t = utils.getChildDeep(this.btn_sound, "img_off");
            G.ISSOUND 
            ? (e.visible = !1, 
                t.visible = !0, 
                G.ISSOUND = !1, 
                PlayerData.getIns().setSound(!1), 
                //audioManager.setMusicVolume(0),
                audioManager.stopAllSound(),
                audioManager.setMusicMuted(0),
                audioManager.setSoundVolume(0))
                //audioManager.stopMusic())
            : (e.visible = !0, 
                t.visible = !1, 
                G.ISSOUND = !0, 
                PlayerData.getIns().setSound(!0), 
                //audioManager.setMusicVolume(1),
                audioManager.setMusicMuted(1),
                !G.GAME_STEP.READY && audioManager.playMusic(10),
                audioManager.setSoundVolume(1));
        }
        onVibrate() {
            var e = utils.getChildDeep(this.btn_vibrate, "img_on"), t = utils.getChildDeep(this.btn_vibrate, "img_off");
            e.visible ? (e.visible = !1, t.visible = !0, PlayerData.getIns().setVibrate(!1), 
            uleeSDK && uleeSDK.setVibrate(!1)) : (e.visible = !0, t.visible = !1, PlayerData.getIns().setVibrate(!0), 
            uleeSDK && uleeSDK.setVibrate(!0), uleeSDK && uleeSDK.startVibrate(!1));
        }
        updateProgress(e) {
            var t = e / battleMgr.totalLength * 294;
            this.mask_progress.width = t, this.img_tag.x = t - 9;
        }
        updateRoundId() {
            this.label_roundId.text = PlayerData.getIns().getRoundId(), this.countRoundInterval();
            for (var e = 0; e < this.box_round._children.length; e++) {
                var t = this.roundArr[e], i = this.box_round._children[e];
                if (i.rotation = 0, 1 != e && e != this.box_round._children.length - 1) {
                    var a = utils.getChildDeep(i, "img_lv"), s = utils.getChildDeep(i, "img_qing"), n = utils.getChildDeep(i, "label_roundId");
                    a.visible = !1, s.visible = !1, n.text = t, t < PlayerData.getIns().getRoundId() && (a.visible = !0), 
                    t == PlayerData.getIns().getRoundId() && (s.visible = !0);
                } else t == PlayerData.getIns().getRoundId() && (console.log("播放礼物盒动画"), this.isPlayGiftAnim = !0, 
                this.giftBoxAnim(i));
            }
        }
        countRoundInterval() {
            var e = -1, t = [], i = PlayerData.getIns().getRoundId();
            if (i % 5 == 1) for (var a = 0; a < 5; a++) t.push(i), i++; else {
                i % 5 == 2 ? e = 1 : i % 5 == 3 ? e = 2 : i % 5 == 4 ? e = 3 : i % 5 == 0 && (e = 4);
                var s = e;
                for (a = 0; a < 5; a++) a < e ? (t.push(i - s), s--) : (t.push(i), i++);
            }
            this.roundArr = t;
        }
        giftBoxAnim(e) {
            var t = this;
            null == this.timeLine && (this.timeLine = new Laya.TimeLine()), this.timeLine.addLabel("gift", 0).to(e, {
                rotation: 8 * parseInt(3 * (Math.random() + 1))
            }, 100).to(e, {
                rotation: 0
            }, 100).to(e, {
                rotation: -8 * parseInt(3 * (Math.random() + 1))
            }, 100).to(e, {
                rotation: 0
            }, 100).to(e, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 300).to(e, {
                scaleX: .8,
                scaleY: .8
            }, 300).play(0, !1), this.timeLine.on(Laya.Event.COMPLETE, this, function() {
                if (!this.isPlayGiftAnim) return e.rotation = 0, e.scaleX = .8, void (e.scaleY = .8);
                updateManager.timeOnce(2, t, function() {
                    t.timeLine && t.timeLine.play("gift", !1);
                });
            });
        }
        clearTimeLine() {
            this.timeLine && (this.timeLine.pause(), this.timeLine.destroy(), this.timeLine = null);
        }
        blockProgress() {
            var e = battleMgr.ownerBlock.length, t = 0;
            t = e <= 3 && e > 0 ? e / 3 * 84 : e <= 5 && e > 0 ? e / 5 * 140 : e <= 8 && e > 0 ? e / 8 * 224 : 0 == e ? .1 : 229, 
            this.panel_mask.height = t, 3 == e && 0 == this.playerIndex ? (this.img_xl.visible = !0, 
            this.img_yj.visible = !0, this.threeXing.play(0, !1), this.playerIndex++) : 5 == e && 1 == this.playerIndex ? (this.img_xy.visible = !0, 
            this.fiveXing.play(0, !1), updateManager.timeOnce(.8, this, function() {
                this.fiveXing2.play(0, !0);
            }.bind(this)), this.playerIndex++) : 8 == e && 2 == this.playerIndex && (this.fiveXing2.stop(), 
            this.eightXing.play(0, !0), this.playerIndex++);
        }
        initRoleAnim() {
            this.img_xl.visible = !1, this.img_yj.visible = !1, this.img_xy.visible = !1, this.fiveXing2.gotoAndStop(0), 
            this.eightXing.gotoAndStop(0);
        }
        hideRole() {
            this.hideRoleAnim.play(0, !1);
        }
        showRole() {
            this.img_role.visible = !0, this.img_role.scaleX = 1, this.img_role.scaleY = 1;
        }
    }
    class l extends e {
        constructor() {
            super();
        }
        initData() {
            for (var e in this.selectNodeIndex = -1, this.angle = 0, this.shopNodeArr = [], 
            this.curId = PlayerData.getIns().getCurEquipID(), this.array = [], D.shopConfig) this.array.push(D.shopConfig[e]);
            this.img_property.visible = !1, this.label_tag.visible = !1;
        }
        initUI() {
            this.newScene = this.box_scene.addChild(new Laya.Scene3D()), this.camera = cameraUtils.createCamera(new Laya.Vector3(0, -.2, 3), new Laya.Vector3(-15, 0, 0), !1), 
            this.newScene.addChild(this.camera);
            var e = new Laya.DirectionLight();
            this.newScene.addChild(e), e.color = new Laya.Vector3(.6, .6, .6);
            var t = e.transform.worldMatrix;
            t.setForward(new Laya.Vector3(-.5, -1, -.5)), e.transform.worldMatrix = t, this.img_guang.visible = !1, 
            ModelCfg.getIns().getModelById(10001, function(e) {
                this.newScene.addChild(e), this.img_guang.visible = !0, this.model = e, ModelCfg.getIns().setLocalScale(e, 20, 20, 20), 
                ModelCfg.getIns().setLocalRotation(e, 0, 45, 0), ModelCfg.getIns().setMaterialPic(e, "res/obj_texture/" + D.shopConfig[this.curId].picture), 
                updateManager.timeLoop(.01, this, this.loop);
            }.bind(this)), this.label_getCoin.text = D.CommonParameter.drawDiamond.value, this.shopNodeFilter(), 
            // PlayerData.getIns().getDiamond() < D.CommonParameter.drawDiamond.value ? (this.btn_get.visible = !1, 
            // this.btn_getSkin.visible = !0) : (this.btn_get.visible = !0, this.btn_getSkin.visible = !1), 
            PlayerData.getIns().getLookShop().length == this.array.length && (this.btn_get.visible = !1, 
            this.btn_getSkin.visible = !1), this.updateDiamond(), uleeSDK && uleeSDK.showAD(!0);
        }
        loop() {
            360 == this.angle && (this.angle = 1), this.angle += 2, this.model.transform.rotationEuler = new Laya.Vector3(45, this.angle, 0);
        }
        initEvent() {
            utils.onBtnScaleEvent(this.btn_close, this, this.doClose), 
            utils.onBtnScaleEvent(this.btn_get, this, this.onGet), 
            utils.onBtnScaleEvent(this.btn_getSkin, this, this.onGetSkin), 
            utils.listHandler(this.list_shop, this, this.renderHander, this.selectHander), 
            this.list_shop.array = this.array;
        }
        onGet() {
            var e = this;
            if (PlayerData.getIns().getDiamond() < D.CommonParameter.drawDiamond.value) utils.prompt("Diamond is not enough"); else {
                uleeSDK && uleeSDK.aldEvent("钻石购买", !1, {
                    origin: "商店界面"
                }), e.btn_get.mouseEnabled = !1;
                var t = function() {
                    PlayerData.getIns().setCurEquipID(e.curId), PlayerData.getIns().setLookShop(e.curId), 
                    updateManager.timeOnce(.3, e, function() {
                        ModelCfg.getIns().setMaterialPic(e.model, "res/obj_texture/" + D.shopConfig[this.curId].picture), 
                        e.selectNodeIndex = e.curId - 1, e.btn_get.mouseEnabled = !0, e.list_shop.refresh();
                    }), audioManager.playSound(5), uleeSDK && uleeSDK.startVibrate(!1), 
                    utils.prompt("Successful purchase"), 
                    PlayerData.getIns().setDiamond(-Number(D.CommonParameter.drawDiamond.value)), e.updateDiamond();
                    // PlayerData.getIns().getDiamond() < D.CommonParameter.drawDiamond.value ? (e.btn_get.visible = !1, 
                    // e.btn_getSkin.visible = !0) : (e.btn_get.visible = !0, e.btn_getSkin.visible = !1);
                };
                PlayerData.getIns().getLookShop().length != this.array.length 
                && (PlayerData.getIns().getLookShop().length == this.array.length - 1 ? (this.shopNodeFilter(), 
                this.curId = this.shopNodeArr[0].dataSource.id, 
                //this.btn_get.visible = !1, this.btn_getSkin.visible = !1, 
                t()) : this.getShopAnim(function() {
                    t();
                }.bind(this)));
            }
        }
        onGetSkin() {
            var e = this;
           setLoadingVisible(true, true, function () {
                    PlayerData.getIns().setDiamond(500);
                    e.updateDiamond();
                    e.btn_getSkin.mouseEnabled = !0;
            })

            // var e = this;
            // this.btn_getSkin.mouseEnabled = !1, 
            // uleeSDK && uleeSDK.aldEvent("视频购买", !1, {
            //     origin: "商店界面"
            // });
            // if(platform.getInstance().initialized_)
            // {
            //     platform.getInstance().showReward(function(){
            //         PlayerData.getIns().setDiamond(500);
            //         e.updateDiamond();
            //         e.btn_getSkin.mouseEnabled = !0;
            //     },function(){
            //         utils.prompt("Advertisement failed to play!"),
            //         e.btn_getSkin.mouseEnabled = !0;
            //     });
            // }
            // else{
            //     e.btn_getSkin.mouseEnabled = !0;
            // }
        }
        renderHander(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_select"), s = utils.getChildDeep(e, "img_icon"), n = utils.getChildDeep(e, "img_selectBg");
            a.visible = !1, n.visible = !1, this.lookShopFilter(i.id) && (s.skin = i.icon), 
            this.selectNodeIndex != t && this.curId != i.id || (a.visible = !0), this.shopNodeArr.length < this.array.length && this.shopNodeArr.push(e), 
            this.array.length == PlayerData.getIns().getLookShop().length && (this.btn_getSkin.visible = !1, 
            this.btn_get.visible = !1);
        }
        selectHander(e) {
            var t = e + 1;
            this.lookShopFilter(t) && (this.selectNodeIndex = e, this.curId = t, ModelCfg.getIns().setMaterialPic(this.model, "res/obj_texture/" + D.shopConfig[this.curId].picture), 
            PlayerData.getIns().setCurEquipID(this.curId));
        }
        lookShopFilter(e) {
            for (var t = PlayerData.getIns().getLookShop(), i = 0; i < t.length; i++) if (t[i] == e) return !0;
            return !1;
        }
        shopNodeFilter() {
            for (var e = [], t = 0; t < this.shopNodeArr.length; t++) {
                var i = this.shopNodeArr[t].dataSource;
                this.lookShopFilter(i.id) || e.push(this.shopNodeArr[t]);
            }
            this.shopNodeArr = e;
        }
        getShopAnim(e) {
            this.shopNodeFilter();
            var t = 0, i = parseInt(Math.random() * this.shopNodeArr.length), a = 1, s = !1, n = updateManager.timeLoop(.2, this, function() {
                if (s) updateManager.clear(n, this); else {
                    if (t >= this.shopNodeArr.length) return utils.getChildDeep(this.shopNodeArr[this.shopNodeArr.length - 1], "img_selectBg").visible = !1, 
                    t = 0, void a--;
                    var o = this.shopNodeArr[t], r = this.shopNodeArr[t - 1];
                    if (utils.getChildDeep(o, "img_selectBg").visible = !0, r) utils.getChildDeep(r, "img_selectBg").visible = !1;
                    if (i == t && 0 == a) return s = !0, this.curId = this.shopNodeArr[t].dataSource.id, 
                    void (e && e());
                    t++;
                }
            });
        }
        updateDiamond() {
            this.label_diamond.text = PlayerData.getIns().getDiamond();
        }
        doClose() {
            eventDispatcher.dispatchEvent(ulee.Event.ON_CHANGE_DIAMOND), battleMgr.updateHeroBase(),
            super.doClose();
            //uleeSDK && uleeSDK.showAD(!1), uiManager.openUI("prefab/ADPage.scene");
        }
    }
    class h extends e {
        constructor() {
            super();
        }
        initData() {
            this.clickCount = 3, this.animCount = 3, this.clickedArr = [], this.timeLineArr = [], 
            this.diamondArr = D.CommonParameter.balloonDiamondNum.value.split(","), uleeSDK && uleeSDK.bannerAd && uleeSDK.bannerAd.show();
        }
        initUI() {
            for (var e = this.list_coin._children, t = 0; t < e.length; t++) {
                var i = e[t], a = utils.getChildDeep(i, "box_diamond"), s = utils.getChildDeep(i, "label_diamond");
                a.visible = !1;
                var n = parseInt(Math.random() * this.diamondArr.length);
                s.text = this.diamondArr[n], i.coin = this.diamondArr[n], this.diamondArr.splice(n, 1), 
                this.scaleAnim(i);
            }
            var o = 0;
            updateManager.timeLoop(.01, this, function() {
                360 == o && (o = 0), o += 1, this.img_guang.rotation = o;
            }.bind(this)), this.updateDiamond();
        }
        initEvent() {
            var e = this.list_coin._children;
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                i.name = t, utils.onBtnScaleEvent(i, this, function(e) {
                    audioManager.playSound(4), uleeSDK && uleeSDK.startVibrate(!1), 0 != this.clickCount ? this.timeLineArr[i.name] && (this.clickedArr.push(this.timeLineArr[t]), 
                    this.clickCount--, this.selectNodeIndex = t, this.label_num.text = "Available times: " + this.clickCount, 
                    this.timeLineArr[t] && (this.timeLineArr[t].pause(), this.timeLineArr[t].destroy(), 
                    this.timeLineArr[t] = null), this.showReward(i)) : utils.prompt("The number of receive has been exhausted!");
                }.bind(this));
            }
        }
        scaleAnim(e) {
            var t = new Laya.TimeLine();
            this.timeLineArr.push(t);
            var i = utils.getChildDeep(e, "img_qiu");
            t.to(i, {
                scaleX: 1.1,
                scaleY: 1.1,
                rotation: 8
            }, 500).to(i, {
                scaleX: 1,
                scaleY: 1,
                rotation: 0
            }, 600).play(0, !0);
        }
        showReward(e) {
            var t = this, i = utils.getChildDeep(e, "img_qiu"), a = utils.getChildDeep(e, "box_diamond"), s = new Laya.TimeLine();
            s.to(i, {
                scaleX: 1,
                scaleY: .5,
                rotation: 0,
                alpha: .5
            }, 600).play(0, !1), s.on(Laya.Event.COMPLETE, this, function() {
                i.visible = !1, s.pause(), s.destroy(), t.sclaeBigAnim(a, function() {
                    console.log("所有动画播放完毕"), t.createCoin(e);
                });
            });
        }
        sclaeBigAnim(e, t) {
            e.scaleX = 0, e.scaleY = 0, e.alpha = 0, e.visible = !0;
            var i = new Laya.TimeLine();
            i.to(e, {
                scaleX: 1.2,
                scaleY: 1.2,
                alpha: 1
            }, 200).to(e, {
                scaleX: 1,
                scaleY: 1
            }, 200).play(0, !1), i.on(Laya.Event.COMPLETE, this, function() {
                i.pause(), i.destroy(), t && t();
            });
        }
        createCoin(e) {
            for (var t = [], i = [ new Laya.Vector2(0, 0), new Laya.Vector2(0, -80), new Laya.Vector2(80, -30), new Laya.Vector2(80, 80), new Laya.Vector2(0, 80), new Laya.Vector2(-80, 50), new Laya.Vector2(-80, -80) ], a = utils.transPos(e, Laya.stage), s = 0; s < 7; s++) {
                var n = new Laya.Image();
                n.skin = "common/img_diamond.png", n.x = a.x + i[s].x + 35, n.y = a.y + i[s].y + 80, 
                n.anchorX = .5, n.anchorY = .5, n.scaleX = 0, n.scaleY = 0, n.alpha = 0, Laya.stage.addChild(n);
                var o = new Laya.TimeLine();
                o.to(n, {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 100).to(n, {
                    scaleX: .8,
                    scaleY: .8
                }, 100).play(0, !1), t.push(n);
            }
            o.on(Laya.Event.COMPLETE, this, function() {
                7 == t.length && this.diamondAnim(t, e.coin);
            }.bind(this));
        }
        diamondAnim(e, t) {
            var i = this;
            for (let a = 0; a < e.length; a++) updateManager.timeOnce(.5 + Number((.6 * Math.random()).toFixed(1)), this, function() {
                var s = e[a], n = new Laya.TimeLine();
                n.to(s, {
                    x: i.img_diamondBox.x + 60,
                    y: i.img_diamondBox.y,
                    scaleX: .6,
                    scaleY: .6
                }, 500).play(0, !1), n.on(Laya.Event.COMPLETE, this, function() {
                    s.visible = !1, n.pause(), n.destroy(), a == e.length - 1 && (i.animCount--, PlayerData.getIns().setDiamond(Number(t)), 
                    this.updateDiamond(!0)), 0 == i.animCount && a == e.length - 1 && i.doClose();
                });
            });
        }
        updateDiamond(e) {
            if (e) {
                var t = new Laya.TimeLine();
                t.to(this.img_diamondBox, {
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100).to(this.img_diamondBox, {
                    scaleX: 1,
                    scaleY: 1
                }, 100).play(0, !1), t.on(Laya.Event.COMPLETE, this, function() {
                    this.label_diamond.text = PlayerData.getIns().getDiamond();
                }.bind(this));
            } else this.label_diamond.text = PlayerData.getIns().getDiamond();
        }
        doClose() {
            for (var e = 0; e < this.timeLineArr.length; e++) this.timeLineArr[e] && (this.timeLineArr[e].pause(), 
            this.timeLineArr[e].destroy());
            eventDispatcher.dispatchEvent(ulee.Event.ON_CHANGE_DIAMOND), updateManager.timeOnce(1, this, super.doClose); 
            //uleeSDK && uleeSDK.bannerAd && uleeSDK.bannerAd.hide();
        }
    }
    class d extends e {
        constructor() {
            super();
        }
        initData() {
            this.canTouch = !0;
        }
        initUI() {
            
           
            // platform.getInstance().initList(this.appList);
            this.img_diamond.text = battleMgr.curDiamondNum, 
            this.label_multiple.text = "X" + battleMgr.curMultiple, 
            // this.img_diamond.y = 494;
            // this.label_multiple.y = 494;
            this.btn_next.visible = !1, 
            this.btn_openTreasureBox.visible = !1, 
            //G.ZSCONFIG && G.ZSCONFIG.zs_switch 
            //? (this.btn_next.y = Laya.stage.height - 140, 
            //    this.btn_openTreasureBox.y = Laya.stage.height - 140) 
            //: uleeSDK && uleeSDK.bannerAd && uleeSDK.bannerAd.show(), 
                battleMgr.curMultiple > 1 
                ? updateManager.timeOnce(1, this, this.addDiamondAnim) 
                : PlayerData.getIns().getRoundId() % 5 == 0 
                    ? (this.btn_openTreasureBox.visible = !0, 
                    updateManager.timeOnce(1, this, function() {
                        G.ZSCONFIG && G.ZSCONFIG.zs_switch && this.moveBtn();
                    }.bind(this))) 
                    : (this.btn_next.visible = !0, 
                        updateManager.timeOnce(1, this, function() {
                            G.ZSCONFIG && G.ZSCONFIG.zs_switch && this.moveBtn();
                        }.bind(this))), 
                        audioManager.playSound(9);
            
            // uiManager.openUI("prefab/GridAD.scene", 
            // null, {
            //     centerY: -120
            // }), uleeSDK && uleeSDK.showBox(5, this.box_ad.y);
        }
        moveBtn() {
            G.ZSCONFIG && G.ZSCONFIG.zs_banner_horizontal_enable && (updateManager.timeOnce(G.ZSCONFIG.zs_banner_banner_time / 1e3, this, function() {
                this.isTouchBtn || !uleeSDK || this.destroyed || uleeSDK.bannerAd && uleeSDK.bannerAd.show();
            }), updateManager.timeOnce(G.ZSCONFIG.zs_banner_text_time / 1e3, this, function() {
                this.canTouch = !0, new Laya.TimeLine().to(this.btn_next, {
                    y: Laya.stage.height - 320
                }, G.ZSCONFIG.zs_banner_move_time, null, 0).play(0, !1), new Laya.TimeLine().to(this.btn_openTreasureBox, {
                    y: Laya.stage.height - 320
                }, G.ZSCONFIG.zs_banner_move_time, null, 0).play(0, !1);
            }), this.canTouch = !1);
        }
        initEvent() {
            utils.onBtnScaleEvent(this.btn_next, this, this.onNext), utils.onBtnScaleEvent(this.btn_openTreasureBox, this, this.onOpenTreasureBox);
        }
        onNext() {
            // if(platform.getInstance().initialized_)
            // {
                var e = this;
                // platform.getInstance().showInterstitial(function(){
                    e.canTouch && 
                    (e.isTouchBtn = !0, 
                        uleeSDK && uleeSDK.aldEvent("下一关"), 
                        PlayerData.getIns().setRoundId(PlayerData.getIns().getRoundId() + 1), 
                        battleMgr.restartGame(), 
                        //uiManager.openUI("prefab/ADPage.scene"), 
                        //G.SideAD && G.SideAD.onSwitch(), 
                        e.doClose(), 
                        audioManager.stopSound(9));
                // });
            // }
            // else
            // {
                // platform.getInstance().showInterstitial(function(){
                    // this.canTouch && 
                    // (this.isTouchBtn = !0, 
                    //     uleeSDK && uleeSDK.aldEvent("下一关"), 
                    //     PlayerData.getIns().setRoundId(PlayerData.getIns().getRoundId() + 1), 
                    //     battleMgr.restartGame(), 
                    //     //uiManager.openUI("prefab/ADPage.scene"), 
                    //     //G.SideAD && G.SideAD.onSwitch(), 
                    //     this.doClose(), 
                    //     audioManager.stopSound(9));
                // });
            // }
        }
        onOpenTreasureBox() {
            // if(platform.getInstance().initialized_)
            // {
                var e = this;
                // platform.getInstance().showInterstitial(function(){
                    e.canTouch && (e.isTouchBtn = !0, PlayerData.getIns().setRoundId(PlayerData.getIns().getRoundId() + 1), 
                    battleMgr.restartGame(), e.doClose(), uiManager.openUI("game/TreasureBoxView.scene"), 
                    audioManager.stopSound(9));
                // });
            // }
            // else
            // {
                // this.canTouch && (this.isTouchBtn = !0, PlayerData.getIns().setRoundId(PlayerData.getIns().getRoundId() + 1), 
                // battleMgr.restartGame(), this.doClose(), uiManager.openUI("game/TreasureBoxView.scene"), 
                // audioManager.stopSound(9));
            // }
        }
        addDiamondAnim() {
            this.img_diamond.text = "", this.img_diamond.text = battleMgr.curDiamondNum * battleMgr.curMultiple;
            var e = new Laya.TimeLine();
            e.to(this.box_diamond, {
                scaleX: 0,
                scaleY: 0
            }, 200).to(this.box_diamond, {
                scaleX: 1.5,
                scaleY: 1.5
            }, 200).to(this.box_diamond, {
                scaleX: 1,
                scaleY: 1
            }, 200).play(0, !1), e.on(Laya.Event.COMPLETE, this, function() {
                PlayerData.getIns().getRoundId() % 5 == 0 ? this.btn_openTreasureBox.visible = !0 : this.btn_next.visible = !0, 
                this.moveBtn(), PlayerData.getIns().setDiamond(battleMgr.curDiamondNum * battleMgr.curMultiple - battleMgr.curDiamondNum), 
                eventDispatcher.dispatchEvent(ulee.Event.ON_CHANGE_DIAMOND);
            }.bind(this));
        }
        doClose() {
            //uleeSDK && uleeSDK.hideBox(), uiManager.getUI("prefab/GridAD.scene") && uiManager.getUI("prefab/GridAD.scene").doClose(), 
            super.doClose();
        }
    }
    class c extends e {
        constructor() {
            super();
        }
        initData() {
            if (this.arr = [], G.ADDATA.length < 20) for (var e = 0, t = 0; t < 20; t++) this.arr.push(G.ADDATA[e++]), 
            e >= G.ADDATA.length && (e = 0); else for (t = 0; t < G.ADDATA.length; t++) this.arr.push(G.ADDATA[t]);
            uleeSDK && uleeSDK.showAD(!1);
        }
        initUI() {
            utils.onBtnScaleEvent(this.btn_close, this, this.doClose), this.touchTimes = 0, 
            utils.onBtnScaleEvent(this.btn_go, this, function() {
                if (0 == this.touchTimes) G.ZSCONFIG && G.ZSCONFIG.zs_switch ? (updateManager.timeOnce(.5, this, function() {
                    uleeSDK && uleeSDK.showAD(!0, !1);
                }), this.canTouch = !1, updateManager.timeOnce(1.3, this, function() {
                    uleeSDK && uleeSDK.showAD(!1), this.canTouch = !0;
                }), this.touchTimes++) : (this.touchTimes++, this.canTouch = !0); else {
                    if (!this.canTouch) return;
                    if ("继续游戏" == this.label_go.text) this.doClose(); else {
                        var e = G.ADDATA[utils.random(0, G.ADDATA.length - 1)], t = G.openId;
                        zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {}), this.label_go.text = "继续游戏";
                    }
                }
            }), utils.listHandler(this.list_ad1, this, this.renderHander1, this.selectHander1), 
            utils.listHandler(this.list_ad2, this, this.renderHander2, this.selectHander2), 
            this.list_ad1.array = G.ADDATA, this.list_ad2.array = this.arr, this.list_ad1.on("mouseup", this, function() {
                var e = G.ADDATA[utils.random(0, G.ADDATA.length - 1)], t = G.openId;
                this.list_ad1.isStop = !0, this.list_ad1.stopTime = 2e3, zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {});
            }), this.list_ad1.on("mousedown", this, function() {
                this.list_ad2.isStop = !0, this.list_ad2.stopTime = 1e4;
            }), this.list_ad2.on("mouseup", this, function() {
                var e = this.arr[utils.random(0, this.arr.length - 1)], t = G.openId;
                this.list_ad2.stopTime = 2e3, zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {});
            }), this.dir1 = 1;
            var e = this.list_ad1;
            this.maxWidth = 168 * e.array.length - e.width - 30, this.dir2 = 1, e = this.list_ad2, 
            this.maxheight = 309 * Math.ceil(e.array.length / e.repeatX) - e.height - 40, updateManager.frameLoop(1, this, this.loop), 
            this.list_ad2._scrollBar.on("change", this, function() {
                this.list_ad1.isStop || this.list_ad2._scrollBar.value > this.list_ad2._cellSize && (this.list_ad2._scrollBar.value = this.list_ad2._scrollBar.value - this.list_ad2._cellSize, 
                this.resetArr());
            });
        }
        resetArr() {
            for (var e = 0; e < this.list_ad2.repeatX; e++) {
                let e = this.arr.removeAt(0);
                this.arr.push(e);
            }
            this.list_ad2.array = this.arr;
        }
        loop() {
            this.listRoll1(), this.listRoll2();
        }
        listRoll1() {
            if (this.list_ad1.isStop) {
                if (this.list_ad1.stopTime > 0) return void (this.list_ad1.stopTime -= Laya.timer.delta);
                this.list_ad1.isStop = !1;
            }
            this.list_ad1._scrollBar.value += this.dir1, this.list_ad1._scrollBar.value >= this.maxWidth ? this.dir1 = -1 : this.list_ad1._scrollBar.value <= 0 && (this.dir1 = 1);
        }
        listRoll2() {
            if (this.list_ad2.isStop) {
                if (this.list_ad2.stopTime >= 0) return void (this.list_ad2.stopTime -= Laya.timer.delta);
                this.list_ad2.isStop = !1;
            }
            this.list_ad2._scrollBar.value += this.dir2, this.list_ad2._scrollBar.value >= this.maxheight ? this.dir2 = -1 : this.list_ad2._scrollBar.value <= 0 && (this.dir2 = 1);
        }
        initEvent() {}
        renderHander1(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_icon"), s = utils.getChildDeep(e, "label_name");
            a.skin = i.app_icon, s.text = i.app_title;
        }
        selectHander1(e) {
            if (zs && zs.sdk) {
                var t = G.ADDATA[e], i = G.openId;
                zs.sdk.navigate2Mini(t, i, function(e) {}, function(e) {}, function(e) {});
            }
        }
        renderHander2(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_icon"), s = utils.getChildDeep(e, "label_name");
            utils.getChildDeep(e, "img_di");
            a.skin = i.app_icon, s.text = i.app_title;
        }
        selectHander2(e) {
            if (zs && zs.sdk) {
                var t = this.arr[e], i = G.openId;
                zs.sdk.navigate2Mini(t, i, function(e) {}, function(e) {}, function(e) {});
            }
        }
        doClose() {
            uleeSDK && uleeSDK.showAD(!0, !1, !0), super.doClose();
        }
    }
    class u extends e {
        constructor() {
            super();
        }
        initData() {}
        initUI() {
            utils.listHandler(this.list_ad, this, this.renderHander, this.selectHander), this.list_ad.array = G.ADDATA, 
            this.list_ad.on("mouseup", this, function() {
                var e = G.ADDATA[utils.random(0, G.ADDATA.length - 1)], t = G.openId;
                zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {});
            });
            var e = 1, t = this.list_ad, i = 162 * t.array.length - Laya.stage.width;
            this.listRoll = function() {
                t.isStop || (t.stopTime > 0 ? t.stopTime -= Laya.timer.delta : (t._scrollBar.value += e, 
                t._scrollBar.value >= i ? e = -1 : t._scrollBar.value <= 0 && (e = 1)));
            }, Laya.timer.frameLoop(1, this, this.listRoll);
        }
        initEvent() {}
        renderHander(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_icon"), s = utils.getChildDeep(e, "label_name");
            a.skin = i.app_icon, s.text = i.app_title;
        }
        selectHander(e) {
            if (window.zs && window.zs.sdk) {
                var t = G.ADDATA[e], i = G.openId;
                zs.sdk.navigate2Mini(t, i, function(e) {}, function(e) {}, function(e) {});
            }
        }
    }
    class g extends e {
        constructor() {
            super();
        }
        initData() {}
        initUI() {
            this.centerX = 0, this.centerY = this.argObj.centerY, utils.listHandler(this.list_ad, this, this.renderHander, this.selectHander), 
            this.list_ad.array = G.ADDATA, this.list_ad.on("mouseup", this, function() {
                var e = G.ADDATA[utils.random(0, G.ADDATA.length - 1)], t = G.openId;
                zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {});
            });
            var e = 1, t = this.list_ad, i = 264 * Math.ceil(t.array.length / t.repeatX) + 28 - 542;
            this.listRoll = function() {
                t.isStop || (t.stopTime > 0 ? t.stopTime -= Laya.timer.delta : (t._scrollBar.value += e, 
                t._scrollBar.value >= i ? e = -1 : t._scrollBar.value <= 0 && (e = 1)));
            }, Laya.timer.frameLoop(1, this, this.listRoll);
        }
        initEvent() {}
        renderHander(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_icon"), s = utils.getChildDeep(e, "label_name"), n = (utils.getChildDeep(e, "img_new"), 
            utils.getChildDeep(e, "img_di"));
            a.skin = i.app_icon, s.text = i.app_title, e.isinit || (e.isinit = !0, n.skin = "sdk/" + utils.random(1, 9) + ".png");
        }
        selectHander(e) {
            if (window.zs && window.zs.sdk) {
                var t = G.ADDATA[e], i = G.openId;
                zs.sdk.navigate2Mini(t, i, function(e) {}, function(e) {}, function(e) {});
            }
        }
    }
    class p extends e {
        constructor() {
            super();
        }
        initData() {}
        initUI() {
            utils.onBtnScaleEvent(this.btn_close, this, this.doClose), utils.listHandler(this.list_ad, this, this.renderHander, this.selectHander), 
            this.list_ad.array = G.ADDATA, this.list_ad.on("mouseup", this, function() {
                var e = G.ADDATA[utils.random(0, G.ADDATA.length - 1)], t = G.openId;
                zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {});
            });
            var e = 1, t = this.list_ad, i = t.height / 3;
            this.listRoll = function() {
                t.isStop || (t.stopTime > 0 ? t.stopTime -= Laya.timer.delta : (t._scrollBar.value += e, 
                t._scrollBar.value >= i ? e = -1 : t._scrollBar.value <= 0 && (e = 1)));
            }, Laya.timer.frameLoop(1, this, this.listRoll);
        }
        initEvent() {}
        renderHander(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_icon"), s = utils.getChildDeep(e, "label_name");
            a.skin = i.app_icon, s.text = i.app_title;
        }
        selectHander(e) {
            if (window.zs && window.zs.sdk) {
                var t = G.ADDATA[e], i = G.openId;
                zs.sdk.navigate2Mini(t, i, function(e) {}, function(e) {}, function(e) {});
            }
        }
        doClose() {
            uiManager.openUI("prefab/ADPage.scene"), this.listRoll && Laya.timer.clear(this, this.listRoll), 
            super.doClose();
        }
    }
    class m extends e {
        constructor() {
            super(), G.SideAD = this;
        }
        initData() {
            this.isIn = !1;
        }
        initUI() {
            this.box_ad.x = Laya.stage.width, utils.onBtnScaleEvent(this.btn_switch, this, this.onSwitch), 
            utils.listHandler(this.list_ad, this, this.renderHander, this.selectHander), this.list_ad.array = G.ADDATA, 
            this.list_ad.on("mouseup", this, function() {
                var e = G.ADDATA[utils.random(0, G.ADDATA.length - 1)], t = G.openId;
                zs.sdk.navigate2Mini(e, t, function(e) {}, function(e) {}, function(e) {});
            });
            var e = 1, t = this.list_ad, i = Math.ceil(t.array.length / t.repeatX) * (221 + t.spaceY) - t.height - t.spaceY;
            this.listRoll = function() {
                t.isStop || (t.stopTime > 0 ? t.stopTime -= Laya.timer.delta : (t._scrollBar.value += e, 
                t._scrollBar.value >= i ? e = -1 : t._scrollBar.value <= 0 && (e = 1)));
            }, Laya.timer.frameLoop(1, this, this.listRoll);
        }
        initEvent() {}
        renderHander(e, t) {
            var i = e.dataSource, a = utils.getChildDeep(e, "img_icon"), s = utils.getChildDeep(e, "label_name");
            a.skin = i.app_icon, s.text = i.app_title;
        }
        selectHander(e) {
            if (window.zs && window.zs.sdk) {
                var t = G.ADDATA[e], i = G.openId;
                zs.sdk.navigate2Mini(t, i, function(e) {}, function(e) {}, function(e) {});
            }
        }
        onSwitch() {
            this.isIn ? this.outAnim(this.box_ad) : this.inAnim(this.box_ad);
        }
        inAnim(e) {
            this.isIn = !0;
            var t = new Laya.TimeLine();
            t.to(e, {
                x: Laya.stage.width - 590
            }, 200).play(0, !1), t.on(Laya.Event.COMPLETE, this, function() {
                t.pause(), t.destroy();
            });
        }
        outAnim(e) {
            this.isIn = !1;
            var t = new Laya.TimeLine();
            t.to(e, {
                x: Laya.stage.width
            }, 200).play(0, !1), t.on(Laya.Event.COMPLETE, this, function() {
                t.pause(), t.destroy();
            });
        }
    }
    class f {
        static init() {
            let e = Laya.ClassUtils.regClass;
            e("script/ui/DefeatedUI.js", t), e("script/GameLoading.js", o), e("script/MainUI.js", r), 
            e("script/ui/ShopUI.js", l), e("script/ui/TreasureBoxUI.js", h), e("script/ui/VictoryUI.js", d), 
            e("script/prefab/ADPage.js", c), e("script/prefab/BottomAD.js", u), e("script/prefab/GridAD.js", g), 
            e("script/prefab/PopupAD.js", p), e("script/prefab/SideAD.js", m);
        }
    }
    f.width = 720, f.height = 1559, f.scaleMode = "fixedheight", f.screenMode = "none", 
    f.alignV = "middle", f.alignH = "center", f.startScene = "game/LoadingView.scene", f.sceneRoot = "", 
    f.debug = !1, f.stat = !1, f.physicsDebug = !1, f.exportSceneToJson = !0, f.init(), 
    window.ulee = {}, ulee.io = {}, window.G = {}, window.D = {}, window.Vector3 = Laya.Vector3, 
    window.Pool = Laya.Pool, window.Handler = Laya.Handler, G.VERSION = 1, G.DEBUG = !1, 
    G.ONLINE = !1, G.PRINT_CLICK = !1, G.LOAD_DATA_JS = !0, G.setDebugMode = function() {
        G.PRINT_CLICK = !0, G.DEBUG = !0, Laya.Stat.show(0, 0);
    }, G.ENUM_LOOP_TYPE = {
        FRAME: 0,
        TIME: 1
    }, G.FRAME_INTERVAL = 0, G.NOW = Laya.Browser.now(), G.DELAYTIME = null, G.ADGUSTTIME = null, 
    G.SERVER_FRAMETIME = null, Math.RAD_1_ANGLE = Math.PI / 180, Math.ANGLE_1_RAD = 180 / Math.PI, 
    G.SCREEN_MODETYPE = {
        H: 0,
        V: 1
    }, G.SCREEN_MODE = G.SCREEN_MODETYPE.V, G.LOGIN_URL = "http://192.168.1.12:8080/bikeServer", 
    G.SDKTYPE = null, G.ShareLimitTime = 2e3, G.GAME_STEP = {
        READY: 0,
        OPENROOM: 1,
        HEROGO: 2,
        HEROSHOOT: 3,
        GAMEOVER: 4
    }, G.ADDATA = null, G.ISTREASUREBOX = !1, Array.prototype.pushAll = function(e) {
        if (e) {
            if (!(e instanceof Array)) throw new error("参数items必须为数组类型");
            for (var t = 0; t < e.length; t++) this.push(e[t]);
        }
    }, Array.prototype.insert = function(e, t) {
        this.splice(e, 0, t);
    }, Array.prototype.remove = function(e) {
        for (var t = this.length - 1; t >= 0; t--) this[t] == e && this.splice(t, 1);
    }, Array.prototype.removeAt = function(e) {
        var t = this[e];
        return this.splice(e, 1), t;
    }, Array.prototype.removeAll = function() {
        this.length = 0;
    }, Array.prototype.contains = function(e) {
        return -1 != this.indexOf(e);
    }, Array.prototype.last = function() {
        return this[this.length - 1];
    }, Array.prototype.disposeArray = function() {
        if (this && 0 != this.length) {
            for (var e = this.length - 1; e >= 0; e--) this[e].dispose();
            this.removeAll();
        }
    }, Array.prototype.isEmpty = function() {
        return 0 == this.length;
    }, G.clone = function(e) {
        if (null == e || "object" != typeof e) return e;
        if (e instanceof Date) return t.setTime(e.getTime()), t;
        if (e instanceof Array) {
            for (var t = [], i = 0; i < e.length; ++i) t[i] = G.clone(e[i]);
            return t;
        }
        if (e instanceof Object) {
            for (var a in t = {}, e) e.hasOwnProperty(a) && (t[a] = G.clone(e[a]));
            return t;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    }, Date.prototype.format = function(e) {
        var t = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        for (var i in /(y+)/i.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), 
        t) new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[i] : ("00" + t[i]).substr(("" + t[i]).length)));
        return e;
    }, String.prototype.startWith = function(e) {
        var t = "^" + e, i = Pool.getItem(t, RegExp);
        null == i && (i = new RegExp(t));
        var a = i.test(this);
        return Pool.recover(t, i), a;
    }, String.prototype.endWith = function(e) {
        var t = e + "$", i = Pool.getItem(t, RegExp);
        null == i && (i = new RegExp(t));
        var a = i.test(this);
        return Pool.recover(t, i), a;
    }, String.prototype.replaceAll = function(e, t) {
        return this.split(e).join(t);
    }, G.resManager = {
        img: {}
    }, G.delResCount = function(e) {
        if (e) for (var t = G.resManager.img, i = 0; i < e.length; i++) {
            var a = e[i].url;
            t[a] -= 1, 0 == t[a] && G.clearRes(a);
        }
    }, G.clearRes = function(e) {
        Laya.loader.clearRes(e), e = laya.net.URL.formatURL(e), Laya.loader.clearRes(e);
    }, G.addResCount = function(e, t) {
        var i = G.resManager[e];
        i[t] ? i[t] += 1 : i[t] = 1;
    }, G.copyProperties = function(e, t) {
        for (var i in e) t[i] = e[i];
    }, G.getLength = function(e) {
        var t = 0;
        for (var i in e) t++;
        return t;
    }, Laya.Loader.cacheRes = function(e, t) {
        e = Laya.URL.formatURL(e), null != !Laya.Loader.loadedMap[e] && (Laya.Loader.loadedMap[e] = t);
    }, D = {}, D.properties = {}, D.CommonParameter = {
        balloonDiamondNum: [ "10,20,30,40,50,60,70,80,90" ],
        drawDiamond: [ "1000" ]
    }, D.properties.CommonParameter = [ "id", "value" ], D.roundConfig = {
        1: [ [ 51, 52, 53 ], .16 ],
        10: [ [ 88, 89, 90, 91, 92, 93, 94 ], .25 ],
        11: [ [ 77, 78, 79, 80, 66, 81 ], .26 ],
        12: [ [ 82, 83, 84, 85, 86, 87, 78 ], .27 ],
        13: [ [ 70, 71, 72, 73, 74, 75, 76 ], .28 ],
        14: [ [ 57, 58, 59, 60, 62, 63, 64, 65 ], .29 ],
        15: [ [ 57, 66, 67, 69 ], .3 ],
        16: [ [ 70, 71, 72, 73, 74, 75, 76 ], .31 ],
        17: [ [ 77, 78, 79, 80, 66, 81 ], .32 ],
        18: [ [ 82, 83, 84, 85, 86, 87, 78 ], .33 ],
        19: [ [ 88, 89, 90, 91, 92, 93, 94 ], .34 ],
        2: [ [ 54, 55, 56 ], .17 ],
        20: [ [ 95, 96, 97 ], .34 ],
        21: [ [ 50, 12, 20, 42, 27, 9, 3, 39, 9, 25, 3, 4, 24, 17, 16 ], .34 ],
        22: [ [ 28, 33, 19, 26, 27, 3, 44, 28, 15, 50, 29, 43, 16, 32, 17 ], .34 ],
        23: [ [ 34, 33, 14, 16, 44, 42, 15, 42, 8, 15, 40, 18, 50, 50, 17 ], .34 ],
        24: [ [ 21, 19, 26, 27, 13, 50, 17, 47, 15, 32, 38, 43, 28, 9, 32 ], .34 ],
        25: [ [ 19, 42, 50, 50, 14, 27, 12, 3, 29, 23, 19, 40, 21, 7, 48 ], .34 ],
        26: [ [ 28, 34, 20, 7, 16, 50, 23, 42, 4, 23, 39, 19, 46, 50, 17 ], .35 ],
        27: [ [ 46, 41, 50, 40, 24, 50, 15, 35, 15, 17, 42, 8, 15, 14, 32 ], .35 ],
        28: [ [ 34, 33, 19, 40, 28, 50, 28, 9, 14, 24, 44, 7, 32, 7, 9, 39 ], .35 ],
        29: [ [ 24, 35, 18, 46, 50, 36, 28, 26, 15, 8, 17, 50, 21, 7, 48 ], .35 ],
        3: [ [ 57, 58, 59, 60, 62, 63, 64, 65 ], .18 ],
        30: [ [ 44, 43, 18, 48, 38, 37, 50, 35, 24, 6, 47, 35, 32, 14, 32 ], .35 ],
        31: [ [ 19, 25, 34, 15, 29, 26, 23, 43, 17, 46, 28, 16, 22, 9, 48 ], .36 ],
        32: [ [ 31, 44, 22, 28, 7, 50, 40, 16, 46, 25, 41, 50, 50, 28, 17 ], .36 ],
        33: [ [ 28, 14, 16, 44, 50, 28, 17, 50, 15, 8, 40, 16, 10, 44, 32 ], .36 ],
        34: [ [ 23, 38, 16, 47, 40, 18, 13, 25, 50, 24, 17, 16, 25, 15, 17 ], .36 ],
        35: [ [ 47, 32, 33, 34, 44, 23, 8, 37, 15, 23, 14, 16, 3, 44, 47 ], .36 ],
        36: [ [ 42, 46, 41, 47, 14, 24, 12, 36, 50, 40, 32, 33, 13, 6, 32 ], .37 ],
        37: [ [ 38, 50, 45, 42, 39, 9, 26, 34, 3, 24, 16, 29, 24, 17, 16 ], .37 ],
        38: [ [ 12, 33, 19, 26, 27, 3, 40, 4, 23, 15, 26, 50, 17, 32, 48 ], .37 ],
        39: [ [ 34, 33, 14, 16, 44, 42, 50, 25, 26, 27, 14, 24, 38, 50, 17 ], .37 ],
        4: [ [ 57, 66, 67, 69 ], .19 ],
        40: [ [ 50, 50, 50, 42, 39, 18, 9, 3, 26, 46, 44, 7, 32, 17, 18, 46, 16 ], .37 ],
        41: [ [ 42, 42, 50, 50, 14, 12, 44, 15, 27, 28, 32, 40, 7, 29, 19, 48 ], .38 ],
        42: [ [ 44, 34, 20, 16, 4, 25, 43, 39, 25, 16, 29, 18, 19, 48, 38, 17 ], .38 ],
        43: [ [ 46, 46, 50, 35, 40, 24, 35, 17, 33, 26, 18, 33, 29, 3, 15, 32 ], .38 ],
        44: [ [ 43, 43, 19, 40, 28, 42, 26, 15, 28, 9, 18, 44, 22, 35, 28, 39 ], .38 ],
        45: [ [ 46, 45, 18, 27, 46, 50, 50, 42, 43, 21, 7, 19, 42, 22, 15, 48 ], .38 ],
        46: [ [ 44, 43, 18, 24, 6, 48, 33, 45, 27, 46, 38, 25, 37, 24, 6, 32 ], .4 ],
        47: [ [ 19, 22, 34, 3, 15, 19, 15, 44, 27, 42, 29, 23, 33, 17, 46, 48 ], .4 ],
        48: [ [ 31, 44, 24, 41, 42, 28, 35, 7, 27, 40, 43, 46, 50, 43, 43, 17 ], .4 ],
        49: [ [ 42, 14, 16, 44, 35, 38, 26, 50, 41, 50, 28, 17, 44, 46, 19, 50, 32 ], .4 ],
        5: [ [ 70, 71, 72, 73, 74, 75, 76 ], .2 ],
        50: [ [ 50, 46, 50, 47, 50, 44, 50, 42, 50, 44, 50, 43, 50, 41, 50, 17, 26, 50, 27, 50, 46, 50, 17, 17 ], .4 ],
        6: [ [ 77, 78, 79, 80, 66, 81 ], .21 ],
        7: [ [ 82, 83, 84, 85, 86, 87, 78 ], .22 ],
        8: [ [ 88, 89, 90, 91, 92, 93, 94 ], .23 ],
        9: [ [ 95, 96, 97 ], .24 ]
    }, D.properties.roundConfig = [ "mapId", "roadIds", "moveSpeed" ], D.roadConfig = {
        1: [ [ "0", "0", "0", "0", "13", "0", "0", "13", "0", "0", "14", "0", "0", "14", "0", "0", "14", "0", "0", "0", "4", "0", "0", "0", "0" ], 20009 ],
        10: [ [ "0", "0", "0", "0", "17", "0", "0", "17", "0", "0", "15", "0", "0", "15", "0", "0", "0", "2", "0", "0", "2", "0", "0", "0", "0" ], 20009 ],
        11: [ [ "0", "0", "0", "18", "0", "0", "18", "0", "0", "18", "0", "0", "19", "0", "0", "19", "0", "0", "14", "0", "0", "14", "0", "0", "0" ], 20009 ],
        12: [ [ "0", "0", "13", "0", "0", "13", "0", "0", "13", "0", "13", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ], 20005 ],
        13: [ [ "0", "0", "0", "0", "19", "0", "22", "0", "19", "0", "13", "0", "15", "0", "13", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0" ], 20009 ],
        14: [ [ "0", "15", "0", "15", "0", "15", "0", "0", "0", "0", "18", "0", "18", "0", "18", "0", "0", "0", "0", "15", "0", "15", "0", "15", "0" ], 20001 ],
        15: [ [ "0", "0", "13", "0", "13", "0", "13", "0", "0", "0", "4", "0", "0", "19", "0", "19", "0", "19", "0", "23", "0", "0", "2", "0", "0" ], 20009 ],
        16: [ [ "0", "0", "0", "15", "0", "0", "13", "0", "0", "15", "0", "0", "13", "0", "15", "0", "0", "11", "0", "0", "0", "0", "0", "0", "0" ], 20009 ],
        17: [ [ "0", "0", "21", "0", "21", "20", "19", "18", "17", "0", "17", "18", "19", "20", "21", "0", "21", "20", "19", "18", "17", "0", "17", "0", "0" ], 20009 ],
        18: [ [ "0", "0", "0", "0", "13", "0", "0", "15", "0", "0", "13", "0", "0", "15", "0", "0", "13", "0", "0", "0", "10", "0", "0", "0", "0" ], 20009 ],
        19: [ [ "0", "0", "0", "0", "14", "0", "0", "14", "0", "0", "14", "0", "0", "1", "0", "0", "14", "0", "0", "1", "0", "0", "0", "0", "0" ], 20002 ],
        2: [ [ "0", "0", "0", "0", "20", "0", "0", "20", "0", "0", "13", "0", "0", "13", "0", "0", "13", "0", "0", "0", "4", "0", "0", "0", "0" ], 20009 ],
        20: [ [ "0", "0", "0", "0", "7", "0", "0", "15", "0", "15", "0", "0", "13", "0", "0", "13", "0", "0", "0", "0", "2", "0", "0", "0", "0" ], 20009 ],
        21: [ [ "0", "0", "0", "23", "0", "0", "0", "2", "0", "0", "0", "23", "0", "0", "0", "2", "0", "0", "19", "19", "19", "19", "0", "0", "0" ], 20009 ],
        22: [ [ "0", "0", "0", "20", "0", "0", "15", "0", "0", "15", "0", "0", "23", "0", "0", "13", "0", "0", "13", "0", "0", "18", "0", "0", "0" ], 20003 ],
        23: [ [ "0", "0", "0", "0", "14", "0", "0", "14", "0", "0", "18", "0", "18", "0", "0", "0", "0", "5", "0", "0", "19", "19", "0", "0", "0" ], 20009 ],
        24: [ [ "0", "0", "14", "0", "14", "0", "14", "0", "14", "0", "0", "0", "0", "0", "0", "0", "0", "0", "19", "0", "19", "0", "19", "0", "0" ], 20004 ],
        25: [ [ "0", "0", "15", "0", "0", "13", "0", "0", "15", "0", "0", "13", "0", "2", "0", "0", "2", "0", "0", "2", "0", "0", "2", "0", "0" ], 20009 ],
        26: [ [ "0", "0", "0", "12", "0", "0", "12", "0", "0", "16", "0", "0", "16", "0", "0", "2", "0", "0", "2", "0", "0", "2", "0", "0", "0" ], 20009 ],
        27: [ [ "0", "0", "0", "16", "0", "0", "16", "0", "0", "12", "0", "0", "12", "0", "0", "2", "0", "0", "2", "0", "0", "2", "0", "0", "0" ], 20009 ],
        28: [ [ "0", "0", "0", "0", "16", "0", "16", "0", "16", "0", "0", "5", "0", "0", "14", "0", "14", "0", "14", "0", "0", "4", "0", "0", "0" ], 20009 ],
        29: [ [ "0", "0", "0", "19", "0", "19", "0", "19", "0", "0", "18", "0", "18", "0", "18", "0", "0", "20", "0", "20", "0", "20", "0", "0", "0" ], 20009 ],
        3: [ [ "0", "0", "0", "21", "0", "0", "21", "0", "0", "21", "0", "14", "0", "0", "0", "14", "0", "0", "14", "0", "0", "3", "0", "0", "0" ], 20009 ],
        30: [ [ "0", "0", "0", "20", "0", "0", "20", "0", "0", "20", "0", "0", "22", "0", "0", "18", "0", "0", "18", "0", "0", "18", "0", "0", "0" ], 20003 ],
        31: [ [ "0", "0", "0", "23", "0", "0", "0", "2", "0", "0", "12", "0", "0", "2", "0", "0", "16", "0", "0", "2", "0", "0", "23", "0", "0" ], 20009 ],
        32: [ [ "0", "0", "0", "0", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "0", "0", "0", "0" ], 20006 ],
        33: [ [ "0", "0", "0", "0", "0", "17", "0", "17", "0", "17", "0", "17", "0", "17", "0", "17", "0", "17", "0", "17", "0", "0", "0", "0", "0" ], 20007 ],
        34: [ [ "0", "0", "14", "0", "14", "0", "14", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "19", "0", "19", "0", "19", "0", "0" ], 20004 ],
        35: [ [ "14", "0", "14", "0", "14", "0", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "0", "0", "0", "0" ], 20008 ],
        36: [ [ "0", "0", "0", "16", "0", "0", "12", "0", "0", "12", "0", "0", "16", "0", "0", "14", "0", "0", "0", "9", "0", "0", "0", "0", "0" ], 20009 ],
        37: [ [ "0", "0", "0", "0", "8", "0", "0", "13", "0", "13", "0", "0", "21", "0", "0", "21", "0", "0", "0", "0", "2", "0", "0", "0", "0" ], 20009 ],
        38: [ [ "0", "0", "0", "0", "16", "0", "0", "19", "0", "19", "0", "0", "2", "0", "0", "12", "0", "0", "0", "2", "0", "0", "0", "0", "0" ], 20009 ],
        39: [ [ "0", "0", "0", "0", "12", "0", "0", "0", "0", "0", "25", "0", "0", "0", "16", "0", "0", "0", "0", "24", "0", "0", "0", "0", "0" ], 20009 ],
        4: [ [ "0", "0", "0", "17", "0", "0", "17", "0", "0", "20", "0", "0", "20", "0", "0", "13", "0", "0", "13", "0", "0", "2", "0", "0", "0" ], 20009 ],
        40: [ [ "0", "0", "0", "0", "14", "0", "0", "0", "0", "0", "24", "0", "0", "0", "13", "0", "0", "0", "0", "26", "0", "0", "0", "0", "0" ], 20009 ],
        41: [ [ "0", "0", "0", "0", "12", "0", "0", "16", "0", "0", "14", "0", "0", "0", "28", "0", "0", "18", "0", "18", "0", "18", "0", "0", "0" ], 20009 ],
        42: [ [ "0", "0", "0", "0", "16", "0", "0", "12", "0", "0", "14", "0", "0", "0", "30", "0", "0", "19", "0", "19", "0", "19", "0", "0", "0" ], 20009 ],
        43: [ [ "0", "0", "0", "17", "0", "17", "0", "17", "0", "21", "0", "21", "0", "21", "0", "0", "29", "0", "0", "19", "0", "19", "0", "0", "0" ], 20009 ],
        44: [ [ "0", "0", "0", "12", "0", "0", "16", "0", "0", "12", "0", "0", "16", "0", "0", "12", "0", "0", "14", "0", "0", "31", "0", "0", "0" ], 20009 ],
        45: [ [ "0", "0", "0", "23", "0", "0", "23", "0", "0", "23", "0", "19", "0", "19", "0", "21", "0", "21", "0", "0", "0", "0", "0", "0", "0" ], 20008 ],
        46: [ [ "0", "0", "0", "0", "13", "0", "14", "0", "15", "0", "0", "0", "32", "0", "0", "0", "21", "0", "21", "0", "21", "0", "0", "0", "0" ], 20009 ],
        47: [ [ "0", "0", "0", "0", "29", "0", "0", "13", "0", "0", "14", "0", "0", "19", "0", "0", "0", "0", "33", "0", "0", "0", "2", "0", "0" ], 20009 ],
        48: [ [ "0", "0", "0", "0", "18", "0", "18", "0", "18", "0", "20", "0", "20", "0", "20", "0", "18", "0", "18", "0", "18", "0", "0", "0", "0" ], 20009 ],
        49: [ [ "0", "0", "0", "0", "20", "0", "20", "0", "20", "0", "19", "0", "19", "0", "19", "0", "18", "0", "18", "0", "18", "0", "0", "0", "0" ], 20009 ],
        5: [ [ "0", "0", "0", "0", "17", "0", "0", "17", "0", "0", "19", "0", "0", "19", "0", "0", "21", "0", "0", "21", "0", "0", "0", "0", "0" ], 20009 ],
        50: [ [ "0", "0", "0", "0", "21", "0", "0", "21", "7", "20", "19", "18", "0", "17", "8", "17", "0", "17", "0", "18", "0", "19", "0", "0", "0" ], 20009 ],
        51: [ [ "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15", "0", "0", "13", "0", "0", "0", "2", "0", "0", "0", "0", "0", "0", "0" ], 20009 ],
        52: [ [ "0", "0", "0", "0", "0", "15", "0", "0", "15", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "34", "0", "0", "0" ], 20009 ],
        53: [ [ "35", "0", "0", "0", "13", "0", "0", "0", "0", "0", "15", "0", "0", "0", "0", "14", "0", "0", "13", "0", "0", "19", "0", "0", "0" ], 20009 ],
        54: [ [ "0", "0", "0", "14", "0", "0", "14", "0", "0", "14", "0", "0", "0", "0", "15", "0", "0", "15", "0", "0", "15", "0", "0", "0", "0" ], 20009 ],
        55: [ [ "0", "0", "0", "19", "0", "0", "14", "0", "0", "14", "0", "0", "0", "0", "18", "0", "13", "0", "0", "13", "0", "0", "13", "0", "0" ], 20009 ],
        56: [ [ "0", "0", "0", "0", "0", "0", "14", "0", "0", "14", "0", "0", "19", "0", "0", "19", "0", "0", "19", "0", "0", "0", "0", "0", "0" ], 20009 ],
        57: [ [ "0", "0", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0" ], 20009 ],
        58: [ [ "0", "0", "2", "0", "0", "0", "2", "0", "0", "0", "2", "0", "19", "0", "2", "0", "0", "0", "2", "0", "0", "0", "2", "0", "0" ], 20009 ],
        59: [ [ "0", "2", "0", "0", "0", "2", "0", "0", "0", "2", "0", "20", "0", "2", "0", "0", "0", "2", "0", "0", "0", "19", "0", "0", "0" ], 20009 ],
        6: [ [ "0", "0", "0", "21", "0", "0", "21", "0", "0", "14", "0", "0", "14", "0", "0", "12", "0", "0", "12", "0", "0", "5", "0", "0", "0" ], 20009 ],
        60: [ [ "0", "0", "14", "0", "0", "13", "0", "0", "14", "0", "0", "15", "0", "0", "14", "0", "0", "13", "0", "0", "14", "0", "0", "15", "0" ], 20009 ],
        61: [ [ "0", "14", "0", "0", "13", "0", "0", "14", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ], 20004 ],
        62: [ [ "0", "19", "18", "17", "18", "0", "17", "18", "19", "19", "20", "20", "0", "0", "19", "19", "19", "19", "19", "19", "19", "19", "0", "0", "0" ], 20009 ],
        63: [ [ "0", "19", "0", "0", "19", "0", "0", "19", "0", "0", "19", "0", "0", "19", "0", "0", "19", "0", "0", "19", "0", "0", "19", "0", "0" ], 20009 ],
        64: [ [ "0", "0", "0", "0", "14", "0", "0", "14", "0", "0", "0", "0", "0", "12", "0", "12", "0", "12", "0", "0", "0", "4", "0", "0", "0" ], 20009 ],
        65: [ [ "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "0", "0", "0", "0", "0" ], 20009 ],
        66: [ [ "14", "0", "14", "0", "14", "0", "14", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "19", "0", "19", "0", "19", "0", "0", "0" ], 20004 ],
        67: [ [ "0", "0", "13", "0", "0", "13", "0", "0", "13", "0", "13", "0", "0", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ], 20005 ],
        68: [ [ "0", "0", "0", "0", "14", "0", "0", "14", "0", "0", "0", "0", "0", "14", "0", "14", "0", "0", "0", "0", "0", "4", "0", "0", "0" ], 20009 ],
        69: [ [ "0", "0", "36", "36", "36", "36", "0", "3", "0", "0", "0", "0", "0", "14", "0", "0", "14", "0", "0", "14", "0", "0", "0", "0", "0" ], 20009 ],
        7: [ [ "0", "0", "0", "14", "0", "0", "14", "0", "0", "14", "0", "0", "15", "0", "0", "15", "0", "0", "15", "0", "0", "6", "0", "0", "0" ], 20009 ],
        70: [ [ "0", "0", "0", "14", "0", "0", "14", "0", "0", "3", "0", "0", "0", "0", "15", "0", "0", "15", "0", "0", "2", "0", "0", "0", "0" ], 20009 ],
        71: [ [ "0", "0", "0", "0", "0", "0", "13", "0", "0", "13", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ], 20009 ],
        72: [ [ "0", "15", "0", "15", "0", "15", "0", "0", "0", "0", "13", "0", "13", "0", "13", "0", "0", "0", "0", "15", "0", "15", "0", "15", "0" ], 20001 ],
        73: [ [ "0", "0", "0", "0", "0", "0", "13", "0", "0", "3", "0", "0", "0", "0", "19", "0", "19", "0", "19", "0", "2", "0", "0", "0", "0" ], 20009 ],
        74: [ [ "0", "0", "0", "0", "0", "0", "13", "0", "0", "3", "0", "0", "0", "0", "19", "0", "19", "0", "19", "0", "2", "0", "0", "0", "0" ], 20009 ],
        75: [ [ "0", "0", "15", "0", "14", "0", "13", "0", "12", "0", "0", "14", "0", "14", "0", "0", "15", "0", "13", "0", "0", "37", "0", "0", "0" ], 20009 ],
        76: [ [ "0", "0", "0", "0", "0", "0", "0", "21", "20", "19", "18", "17", "18", "19", "20", "21", "20", "19", "18", "17", "0", "0", "0", "0", "0" ], 20009 ],
        77: [ [ "0", "0", "14", "0", "14", "0", "0", "2", "0", "13", "0", "2", "0", "14", "0", "2", "0", "15", "0", "2", "0", "0", "0", "0", "0" ], 20009 ],
        78: [ [ "0", "0", "0", "15", "0", "0", "15", "0", "0", "15", "0", "0", "23", "0", "0", "13", "0", "0", "13", "0", "0", "13", "0", "0", "0" ], 20003 ],
        79: [ [ "0", "0", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "19", "0", "0", "0", "0", "0", "0", "5", "0", "0", "0", "0" ], 20009 ],
        8: [ [ "0", "0", "0", "0", "18", "0", "18", "0", "18", "0", "0", "13", "0", "0", "13", "0", "0", "13", "0", "0", "5", "0", "0", "0", "0" ], 20009 ],
        80: [ [ "0", "0", "0", "13", "0", "0", "0", "2", "0", "0", "0", "15", "0", "0", "15", "0", "0", "0", "5", "0", "0", "0", "0", "0", "0" ], 20009 ],
        81: [ [ "13", "0", "15", "0", "13", "0", "15", "0", "0", "0", "2", "0", "0", "0", "2", "0", "0", "0", "2", "0", "0", "0", "2", "0", "0" ], 20009 ],
        82: [ [ "0", "0", "15", "0", "0", "10", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "0", "38", "0", "0", "17", "17", "0", "0" ], 20009 ],
        83: [ [ "0", "20", "20", "0", "14", "0", "0", "1", "0", "0", "14", "0", "0", "1", "0", "0", "14", "0", "0", "1", "0", "0", "0", "0", "0" ], 20002 ],
        84: [ [ "0", "0", "0", "12", "0", "12", "0", "0", "0", "5", "0", "0", "0", "20", "0", "20", "0", "20", "0", "0", "0", "4", "0", "0", "0" ], 20009 ],
        85: [ [ "0", "0", "0", "12", "0", "12", "0", "0", "0", "5", "0", "0", "0", "17", "0", "0", "17", "0", "0", "17", "0", "0", "18", "0", "0" ], 20009 ],
        86: [ [ "0", "0", "0", "39", "0", "20", "0", "15", "0", "0", "2", "0", "20", "0", "18", "0", "17", "0", "40", "0", "18", "0", "18", "0", "0" ], 20009 ],
        87: [ [ "0", "0", "0", "19", "0", "19", "0", "19", "0", "0", "2", "0", "0", "0", "17", "0", "17", "0", "18", "0", "39", "0", "19", "0", "0" ], 20009 ],
        88: [ [ "0", "0", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "14", "0", "0", "0", "0", "5", "0", "0", "0", "0", "0", "0" ], 20009 ],
        89: [ [ "0", "15", "0", "15", "0", "15", "0", "0", "0", "0", "0", "6", "0", "0", "0", "14", "0", "14", "0", "0", "5", "0", "0", "0", "0" ], 20009 ],
        9: [ [ "0", "0", "0", "17", "0", "8", "0", "17", "0", "0", "0", "20", "0", "7", "0", "20", "0", "0", "0", "17", "0", "8", "0", "23", "0" ], 20009 ],
        90: [ [ "0", "0", "0", "15", "0", "15", "0", "15", "0", "0", "13", "0", "13", "0", "13", "0", "0", "8", "0", "0", "7", "0", "0", "8", "0" ], 20009 ],
        91: [ [ "0", "0", "0", "12", "0", "12", "0", "0", "0", "5", "0", "0", "0", "18", "0", "18", "0", "18", "0", "0", "0", "6", "0", "0", "0" ], 20009 ],
        92: [ [ "0", "0", "0", "0", "0", "20", "0", "20", "0", "0", "0", "5", "0", "0", "0", "14", "0", "14", "0", "14", "0", "0", "2", "0", "18" ], 20009 ],
        93: [ [ "18", "18", "0", "2", "0", "21", "21", "21", "0", "2", "0", "18", "0", "18", "0", "18", "0", "2", "0", "0", "0", "0", "0", "0", "0" ], 20009 ],
        94: [ [ "0", "0", "0", "0", "0", "0", "20", "0", "20", "0", "20", "0", "0", "0", "17", "0", "17", "0", "17", "0", "0", "0", "0", "0", "0" ], 20009 ],
        95: [ [ "0", "0", "0", "0", "0", "0", "14", "0", "14", "0", "14", "0", "0", "0", "0", "15", "0", "15", "0", "15", "0", "0", "0", "0", "0" ], 20009 ],
        96: [ [ "0", "0", "0", "0", "0", "0", "19", "0", "14", "0", "14", "0", "0", "0", "0", "18", "0", "13", "0", "13", "0", "0", "0", "0", "0" ], 20009 ],
        97: [ [ "0", "0", "0", "0", "0", "0", "19", "0", "14", "0", "14", "0", "0", "0", "0", "20", "0", "15", "0", "15", "0", "0", "0", "0", "0" ], 20009 ]
    }, D.properties.roadConfig = [ "roadId", "obstacle", "landform" ], D.PrefabsPath = {
        10001: [ 2, "cube", , 1, , 1 ],
        10002: [ 2, "diamond", , 1, , 1 ],
        20001: [ 2, "scene1", , 1, , 1 ],
        20002: [ 2, "scene2", , 1, , 1 ],
        20003: [ 2, "scene3", , 1, , 1 ],
        20004: [ 2, "scene4", , 1, , 1 ],
        20005: [ 2, "scene5", , 1, , 1 ],
        20006: [ 2, "scene6", , 1, , 1 ],
        20007: [ 2, "scene7", , 1, , 1 ],
        20008: [ 2, "scene8", , 1, , 1 ],
        20009: [ 2, "scene9", , 1, , 1 ],
        20010: [ 2, "end", , 1, , 1 ],
        30001: [ 2, "host", , 2, , 1 ],
        40001: [ 3, "blockWhiteEffect", , 1, , 1 ],
        40002: [ 3, "colourBar", , 1, , 1 ],
        40003: [ 3, "trail", , 1, , 1 ]
    }, D.properties.PrefabsPath = [ "1", "type", "chs", "subModel", "scale", "additionalId", "modelPlayRate", "actionFile", "actionInShop", "note3", "rotation", "directional" ], 
    D.shopConfig = {
        1: [ "1.png", "icon/q1.png", 4e3 ],
        2: [ "2.png", "icon/q2.png", 4e3 ],
        3: [ "3.png", "icon/q3.png", 4e3 ],
        4: [ "4.png", "icon/q4.png", 4e3 ],
        5: [ "5.png", "icon/q5.png", 4e3 ],
        6: [ "6.png", "icon/q6.png", 4e3 ],
        7: [ "7.png", "icon/q7.png", 4e3 ],
        8: [ "8.png", "icon/q8.png", 4e3 ],
        9: [ "9.png", "icon/q9.png", 4e3 ]
    }, D.properties.shopConfig = [ "id", "picture", "icon", "flapSpeed" ], D.musicBasic = {
        1: [ 2, "music/ui_start.mp3", 100 ],
        10: [ 1, "music/fight_bgm.mp3", 100 ],
        2: [ 2, "music/ui_victory.mp3", 100 ],
        3: [ 2, "music/ui_fail.mp3", 100 ],
        4: [ 2, "music/ui_click.mp3", 100 ],
        5: [ 2, "music/ui_reward.mp3", 100 ],
        6: [ 2, "music/fight_getItem.mp3", 100 ],
        7: [ 2, "music/fight_hit.mp3", 100 ],
        8: [ 2, "music/fight_diamond.mp3", 100 ],
        9: [ 2, "music/Cheer.mp3", 100 ]
    }, D.properties.musicBasic = [ "ID", "type", "file", "musicPower" ], D.obstacleConfig = {
        1: [ [ "00100" ] ],
        10: [ [ "11111", "10001", "10001", "10001", "11111" ] ],
        11: [ [ "11111", "11111", "11111", "11111", "11111" ] ],
        12: [ [ "20000" ] ],
        13: [ [ "02000" ] ],
        14: [ [ "00200" ] ],
        15: [ [ "00020" ] ],
        16: [ [ "00002" ] ],
        17: [ [ "30000" ] ],
        18: [ [ "03000" ] ],
        19: [ [ "00300" ] ],
        2: [ [ "11111" ] ],
        20: [ [ "00030" ] ],
        21: [ [ "00003" ] ],
        22: [ [ "03030" ] ],
        23: [ [ "02020" ] ],
        24: [ [ "11111", "10011" ] ],
        25: [ [ "11000", "11000" ] ],
        26: [ [ "00011", "00011" ] ],
        27: [ [ "11111", "00111", "00111" ] ],
        28: [ [ "11111", "11100", "11100" ] ],
        29: [ [ "10001", "10001", "10001", "10001" ] ],
        3: [ [ "11111", "11111" ] ],
        30: [ [ "11111", "11001", "11001" ] ],
        31: [ [ "11111", "10001", "10001", "10001", "11111", "11111" ] ],
        32: [ [ "11111", "00100", "00100", "00100", "00100" ] ],
        33: [ [ "11111", "00100", "00100", "00100", "00100", "00100", "11111" ] ],
        34: [ [ "11030" ] ],
        35: [ [ "03011" ] ],
        36: [ [ "33333" ] ],
        37: [ [ "11111", "11111", "11111", "11111", "11111", "11111" ] ],
        38: [ [ "10001", "10001", "10001", "11111" ] ],
        39: [ [ "11030", "11000", "11000" ] ],
        4: [ [ "11111", "11111", "11111" ] ],
        40: [ [ "03011", "00011", "00011" ] ],
        5: [ [ "11111", "00000", "11111" ] ],
        6: [ [ "11111", "00000", "11111", "00000", "11111" ] ],
        7: [ [ "11000", "11000", "11000" ] ],
        8: [ [ "00011", "00011", "00011" ] ],
        9: [ [ "10001", "10001", "10001", "11111" ] ]
    }, D.properties.obstacleConfig = [ "id", "position" ], function() {
        ulee.Utils = function() {
            this._pool = Laya.Pool;
        }, (0, Laya.ClassUtils.regClass)(ulee.Utils, "ulee.Utils");
        var e = ulee.Utils.prototype;
        e.getColor = function(e) {
            return this.colorConfig[e];
        }, e.onBtnEvent = function(e, t, i) {
            null == e && console.log("控件不存在"), e.offAll(), e.on(Laya.Event.MOUSE_DOWN, t, function(e) {
                e.stopPropagation();
            }), e.on(Laya.Event.ROLL_OUT, t, function(e) {
                e.stopPropagation();
            }), e.on(Laya.Event.MOUSE_UP, t, function(e) {
                e.stopPropagation();
            }), e.on(Laya.Event.CLICK, t, function(e) {
                null != i && i.bind(t)(e), null != e.stopPropagation && e.stopPropagation();
            });
        }, e.offBtnEvent = function(e, t, i) {
            null == e && console.log("控件不存在"), e.off(Event.CLICK, t, i);
        }, e.onBtnScaleEvent = function(e, t, i) {
            null == e && console.log("控件不存在");
            var a = e.scaleX ? e.scaleX : 1, s = e.scaleY ? e.scaleY : 1;
            e.offAll(), e.anchorX = isNaN(e.anchorX) ? 0 : e.anchorX, e.anchorY = isNaN(e.anchorY) ? 0 : e.anchorY;
            var n = e.x + (.5 * e.width - e.width * e.anchorX), o = e.y + (.5 * e.height - e.height * e.anchorY);
            e.anchorX = .5, e.anchorY = .5, e.x = n, e.y = o, e.on(Laya.Event.MOUSE_DOWN, t, function(e) {
                e.target.scale(.9 * a, .9 * s), e.stopPropagation();
            }), e.on(Laya.Event.ROLL_OUT, t, function(e) {
                e.currentTarget.scale(a, s), e.stopPropagation();
            }), e.on(Laya.Event.MOUSE_UP, t, function(e) {
                e.target.scale(a, s), e.stopPropagation();
            }), e.on(Laya.Event.CLICK, t, function(e) {
                null != i && i.bind(t)(e), null != e.stopPropagation && e.stopPropagation();
            });
        }, e.getString = function(t, i) {
            if (!D.GameText[t]) return t + i;
            var a = D.GameText[t].chs;
            return a ? i ? e.stringFormat(a, i) : a : "";
        }, e.getLength = function(e) {
            return e.replace(/[\u0391-\uFFE5]/g, "aa").length;
        }, e.getObjLength = function(e) {
            return Object.keys(e).length;
        }, e.stringFormat = function(e, t) {
            if (!e) return t;
            var i = e;
            if (t) for (var a = 0; a < t.length; a++) i = i.replaceAll("{" + a + "}", t[a]);
            return i;
        }, e.setImgBlur = function(e, t) {
            if (e) {
                t = t || 5;
                var i = new Laya.BlurFilter();
                i.strength = t, e.filters = [ i ];
            }
        }, e.setImgGlow = function(e, t, i) {
            if (e) {
                i = i || 10, t = "#ffff00";
                var a = new Laya.GlowFilter(t, i, 0, 0);
                e.filters = [ a ];
            }
        }, e.setImgColor = function(e, t) {
            var i = new Laya.ColorFilter(t);
            e.filters = [ i ];
        }, e.clearFilters = function(e) {
            e.filters = [];
        }, e.getChildDeep = function(e, t) {
            var i = e.getChildByName(t);
            if (i) return i;
            for (var a = 0; a < e._children.length; a++) if (i = utils.getChildDeep(e._children[a], t)) return i;
        }, e.listSelectEx = function(e) {
            Laya.getset(0, e, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(e) {
                this._selectedIndex != e && (this._selectedIndex = e, this.changeSelectStatus(), 
                this.event("change"), this.selectHandler && this.selectHandler.runWith([ e, this.getCell(e), this ]), 
                this.startIndex = this._startIndex);
            });
        }, e.setHtmlLabel = function(e, t, i) {
            i || (e.style.fontSize = 24, e.style.font = "黑体", e.style.color = "#ffffff", e.style.align = "center"), 
            e.innerHTML = utils.getString(t);
        }, e.setResUsed = function(e) {
            for (var t = 0; t < e.length; t++) G.addResCount("img", e[t].url);
        }, e.setResUnused = function(e) {
            for (var t = 0; t < e.length; t++) G.delResCount(e[t].url);
        }, e.getTimeLine = function(e) {
            var t = this, i = this._pool.getItemByClass("TimeLine", Laya.TimeLine);
            i.reset();
            return i.on(Laya.Event.COMPLETE, this, function() {
                t._pool.recover("TimeLine", i), e && e.run();
            }), i;
        }, e.transPos = function(e, t) {
            var i = new Laya.Point();
            return e.localToGlobal(i), t.globalToLocal(i, !0);
        }, e.prompt = function(e) {
            e && (this.m_systemPrompt || (this.m_systemPrompt = window.promptUtils, this.m_systemPrompt.init()), 
            this.m_systemPrompt.prompt(e));
        }, e.movePrompt = function(e) {}, e.promptImg = function(e) {
            e && (this.m_systemPrompt || (this.m_systemPrompt = uiManager.openUI(ulee.Prompt)), 
            this.m_systemPrompt.prompt1(e));
        }, e.sendParamHttp = function(e, t, i) {
            var a = new Laya.HttpRequest();
            a._loadedSize = 0, a._totalSize = 5e6, a.once(Laya.Event.COMPLETE, this, this.onHttpCompelete, [ a, i ]);
            for (key in t) e += this.stringFormat("&{0}={1}", [ key, t[key] ]);
            a.send(e, null, "get", "text");
        }, e.onHttpCompelete = function(e, t) {
            t && t.runWith(e.data);
        }, e.formatTime = function(e, t) {
            var i = Math.floor(e / 60);
            if (e %= 60, !t || i < 60) return utils.timeNumberFormat(i) + ":" + utils.timeNumberFormat(e);
            var a = Math.floor(i / 60);
            return i %= 60, a + ":" + utils.timeNumberFormat(i) + ":" + utils.timeNumberFormat(e);
        }, e.timeNumberFormat = function(e) {
            return (e < 10 ? "0" : "") + parseInt(e);
        }, e.updateCircleHead = function(e) {
            var t = new Laya.Sprite();
            t.graphics.drawCircle(e.width / 2, e.width / 2, e.width / 2, "#ffff00"), t.pos(0, 0), 
            e.mask = t;
        }, e.listSelectEx = function(e) {
            Laya.getset(0, e, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(e) {
                this._selectedIndex != e && (this._selectedIndex = e, this.changeSelectStatus(), 
                this.event("change"), this.selectHandler && this.selectHandler.runWith([ e, this.getCell(e), this ]), 
                this.startIndex = this._startIndex);
            });
        }, e.listHandler = function(e, t, i, a) {
            e && (i && (e.renderHandler = new Handler(t, i.bind(t))), a && (e.selectHandler = new Handler(t, a.bind(t))), 
            e.scrollBar && (e.scrollBar.visible = !1), e.selectEnable = !0);
        }, e.cutstr = function(e, t) {
            for (var i = "", a = 0; a < e.length; a++) if (i += e[a], a + 1 == t) {
                i += "...";
                break;
            }
            return i;
        }, e.setVector3 = function(e, t, i, a) {
            e.x = t, e.y = i, e.z = a;
        }, e.getImgUrl = function(e) {
            if (e) {
                try {
                    imgUrl = D.SpritePath[e].chs;
                } catch (t) {
                    console.error("找不到图片资源,id:" + e + "/使用临时资源替换"), imgUrl = D.SpritePath[100].chs;
                }
                return imgUrl;
            }
        }, e.rayCast = function(e, t, i) {
            for (var a = new Laya.RaycastHit(), s = 0, n = t.length; s < n; s++) {
                var o = t[s];
                if (o.enable && (o.raycast(e, a, i), -1 !== a.distance)) return !0;
            }
        }, e.getYearWeek = function(e, t, i) {
            var a = new Date(e, parseInt(t) - 1, i), s = new Date(e, 0, 1), n = Math.round((a.valueOf() - s.valueOf()) / 864e5);
            return Math.ceil((n + (s.getDay() + 1 - 1)) / 7);
        }, e.gameCoinAnimation = function(e, t, i, a, s, n) {
            this.timeLineArr = [];
            var o = 5;
            1 == t ? (o = e) > 25 && (o = 25) : e > 1e6 ? o = 30 : e > 1e5 ? o = 20 : e > 1e4 && (o = 10);
            var r = new Laya.FontClip("fnt/number1.png", "1234567890");
            r.x = i.x + 50, r.y = i.y + 18, r.alpha = 0, r.value = e, r.scale(0, 0), r.anchorX = .5, 
            r.anchorY = .5, s.addChild(r);
            var l = new Laya.TimeLine();
            l.name = "moneyAni", this.timeLineArr.push(l), l.to(r, {
                scaleX: .4,
                scaleY: .4,
                alpha: 1
            }, 300).to(r, {
                scaleX: .2,
                scaleY: .2,
                alpha: 0
            }, 400, null, 600), l.on(Laya.Event.COMPLETE, this, function() {
                n && n(), r.destroy();
            });
            for (var h = !1, d = 0; d < o; d++) this.createCoin(t, a, s, function(e) {
                var t = new Laya.TimeLine();
                this.timeLineArr.push(t), t.to(e, {
                    x: i.x,
                    y: i.y
                }, math.random(100, 400), Laya.Ease.backIn, 0), d == o && t.play(-300, !1), t.on(Laya.Event.COMPLETE, this, function() {
                    e.removeSelf(), h || (h = !0, l.play(0, !1));
                });
            }.bind(this));
        }, e.createCoin = function(e, t, i, a) {
            var s = new Laya.Image();
            1 == e ? s.skin = "common/img_diamond.png" : 2 == e && (s.skin = "common/img_coin.png"), 
            s.x = t.x, s.y = t.y, s.scale(0, 0), i.addChild(s);
            var n = new Laya.TimeLine();
            n.name = "coin", this.timeLineArr.push(n);
            var o = s.x + math.random(0, 230), r = s.y + math.random(-100, 100);
            n.addLabel("move", 0).to(s, {
                scaleX: .8,
                scaleY: .8,
                x: o,
                y: r
            }, 100, Laya.Ease.backOut, 0).play(100, !1), n.on(Laya.Event.COMPLETE, this, function() {
                a && a(s);
            });
        }, e.clearGameCoinAnimation = function() {
            if (!(null == this.timeLineArr || this.timeLineArr.length <= 0)) for (var e = 0; e < this.timeLineArr.length; e++) {
                var t = this.timeLineArr[e];
                t.name = "", t.pause(), t.destroy(), t = null;
            }
        }, e.checkPrompt = function() {
            !G.ISSHOWSIGN && dataManager.getUserData("isCanSign") ? (G.ISSHOWSIGN = !0, updateManager.timeOnce(.5, this, function() {
                uiManager.openUI("game/SignInUI.scene");
            })) : !G.ISTURNTABLE && dataManager.getUserData("turntableFreeTimes") > 0 && (G.ISTURNTABLE = !0, 
            updateManager.timeOnce(.5, this, function() {
                uiManager.openUI("game/LuckyTurntableView.scene");
            }));
        }, e.create3DFont = function(e, t, i) {
            var a = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(1, 1));
            a.transform.rotate(new Laya.Vector3(90, 0, 0), !0, !0), a.transform.localPosition = new Laya.Vector3(0, 1.05, 0), 
            e.addChild(a);
            var s = new Laya.UnlitMaterial();
            a.meshRenderer.sharedMaterial = s;
            var n = Laya.Browser.createElement("canvas");
            n.width = 200, n.height = 200;
            var o = n.getContext("2d"), r = new Image();
            r.src = "models/obj/obj_texture/img_bubble.png";
            var l = this;
            return r.onload = function() {
                o.drawImage(r, 0, 0, 200, 120), o.fillStyle = i || "rgb(255，255，255)", o.font = "bold 35px 微软雅黑", 
                o.textAlign = "left", o.textBaseline = "middle", l.drawText(o, t, 15, 5, 150);
                var e = new Laya.Texture2D(120, 75);
                e.loadImageSource(n), s.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT, 
                s.albedoTexture = e, a.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE;
            }, a;
        }, e.randomSlogan = function() {
            for (;;) {
                var e = math.random(1, 10);
                if ((!this.oldArr || null == this.oldArr || Object.keys(this.oldArr).length >= Object.keys(this.sloganMap).length) && (this.sloganMap = D.sloganConfig, 
                this.oldArr = {}), null == this.oldArr[this.sloganMap[e].id]) return this.oldArr[this.sloganMap[e].id] = this.sloganMap[e], 
                this.sloganMap[e].content;
            }
        }, e.drawText = function(e, t, i, a, s) {
            for (var n = t.split(""), o = "", r = [], l = 0; l < n.length; l++) e.measureText(o).width < s || (r.push(o), 
            o = ""), o += n[l];
            r.push(o);
            for (var h = 0; h < r.length; h++) e.fillText(r[h], i, a + 35 * (h + 1));
            return r.length;
        }, e.random = function(e, t) {
            return Math.floor(Math.random() * (t + 1 - e) + e);
        };
    }(), window.utils = new ulee.Utils(), ulee.Event = {}, ulee.Event.ON_DATA_LOAD = 1e3, 
    ulee.Event.ON_CHANGE_DIAMOND = 1001, ulee.Event.ON_SIGN = 1002, ulee.Event.ON_CHECK_SHOP_RED = 1003, 
    ulee.Event.ON_TURNTABLE = 1004, ulee.Event.ON_GET_WEAPON = 1005;
    class y extends Laya.Script3D {
        constructor() {
            super(), this._tempVector3 = new Laya.Vector3(), this.yawPitchRoll = new Laya.Vector3(), 
            this.resultRotation = new Laya.Quaternion(), this.tempRotationZ = new Laya.Quaternion(), 
            this.tempRotationX = new Laya.Quaternion(), this.tempRotationY = new Laya.Quaternion(), 
            this.rotaionSpeed = 6e-5;
        }
        onAwake() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp), 
            this.camera = this.owner;
        }
        _onDestroy() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        }
        onUpdate(e) {
            var t = Laya.timer.delta;
            if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
                this.owner.scene;
                Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-.01 * t), 
                Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(.01 * t), 
                Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-.01 * t), 
                Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(.01 * t), 
                Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(.01 * t), 
                Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-.01 * t);
                var i = Laya.stage.mouseX - this.lastMouseX, X
                a = Laya.stage.mouseY - this.lastMouseY, 
                s = this.yawPitchRoll;
                s.x -= i * this.rotaionSpeed * t, 
                s.y -= a * this.rotaionSpeed * t, 
                this.updateRotation();
            }
            this.lastMouseX = Laya.stage.mouseX, 
            this.lastMouseY = Laya.stage.mouseY;
           
        }
        mouseDown(e) {
            this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll), this.lastMouseX = Laya.stage.mouseX, 
            this.lastMouseY = Laya.stage.mouseY, this.isMouseDown = !0;
        }
        mouseUp(e) {
            this.isMouseDown = !1;
        }
        moveForward(e) {
            this._tempVector3.x = 0, 
            this._tempVector3.y = 0, 
            this._tempVector3.z = e, 
            this.camera.transform.translate(this._tempVector3);
        }
        moveRight(e) {
            this._tempVector3.y = 0, 
            this._tempVector3.z = 0, 
            this._tempVector3.x = e, 
            this.camera.transform.translate(this._tempVector3);
        }
        moveVertical(e) {
            this._tempVector3.x = this._tempVector3.z = 0, 
            this._tempVector3.y = e, 
            this.camera.transform.translate(this._tempVector3, !1);
        }
        updateRotation() {
            Math.abs(this.yawPitchRoll.y) < 1.5 && (Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ), 
            this.tempRotationZ.cloneTo(this.camera.transform.localRotation), this.camera.transform.localRotation = this.camera.transform.localRotation);
        }
    }
    !function() {
        ulee.CameraUtils = function() {}, (0, Laya.ClassUtils.regClass)("ulee.CameraUtils", ulee.CameraUtils);
        var e = ulee.CameraUtils.prototype;
        e.createCamera = function(e, t, i) {
            let a = new Laya.Camera(0, .1, 1e3);
            return e && a.transform.translate(e), t && a.transform.rotate(t, !0, !1), i || (a.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY), 
            a;
        }, e.controlCamera = function(e) {
            e.addComponent(y);
        }, e.moveCamera = function(e, t, i, a, s) {
            if (e.transform.localPositionX != t || e.transform.localPositionY != i || e.transform.localPositionZ != a) {
                var n = new Laya.TimeLine();
                s && n.on(Laya.Event.COMPLETE, this, s), n.to(e.transform, {
                    localPositionX: t,
                    localPositionY: i,
                    localPositionZ: a
                }, 500).play(0, !1);
            }
        }, e.setTarget = function() {};
    }(), window.cameraUtils = new ulee.CameraUtils(), function(e) {
        ulee.EventDispatcher = function() {
            this.eventDispatcher = new Laya.EventDispatcher();
        }, (0, Laya.ClassUtils.regClass)(ulee.EventDispatcher, "ulee.EventDispatcher", void 0);
        var t = ulee.EventDispatcher.prototype;
        t.addEventListen = function(e, t, i) {
            this.eventDispatcher.on(e, t, i);
        }, t.removeEventListen = function(e, t, i) {
            this.eventDispatcher.off(e, t, i);
        }, t.dispatchEvent = function(e, t) {
            var i = {
                msg: t,
                name: e
            };
            this.eventDispatcher.event(e, i), i = null;
        };
    }(), window.eventDispatcher = new ulee.EventDispatcher(), function() {
        ulee.io.DataInputStream = function(e) {
            this.arrayBuffer = e, this.index = 0, this.dv = new DataView(this.arrayBuffer);
        }, (0, Laya.ClassUtils.regClass)(ulee.io.DataInputStream, "ulee.io.DataInputStream");
        var e = ulee.io.DataInputStream.prototype;
        e.readByte = function() {
            return this.dv.getInt8(this.index++);
        }, e.readShort = function() {
            var e = this.dv.getInt16(this.index);
            return this.index += 2, e;
        }, e.readInt = function() {
            var e = this.dv.getInt32(this.index);
            return this.index += 4, e;
        }, e.readUint = function() {
            var e = this.dv.getUint32(this.index);
            return this.index += 4, e;
        }, e.readLong = function() {
            var e = this.readInt(), t = this.readUint();
            return e * Math.POW_2_32 + t;
        }, e.readFloat = function() {
            var e = this.dv.getFloat32(this.index);
            return this.index += 4, e;
        }, e.readUTF = function() {
            var e = this.readShort();
            return this.readText(e);
        }, e.readText = function(e) {
            for (var t = this.arrayBuffer.slice(this.index, this.index + e), i = new Uint8Array(t), a = "", s = e, n = 0, o = String.fromCharCode, r = 0, l = i; r < s; ) (n = l[r++]) < 128 ? 0 != n && (a += o(n)) : a += o(n < 224 ? (63 & n) << 6 | 127 & l[r++] : n < 240 ? (31 & n) << 12 | (127 & l[r++]) << 6 | 127 & l[r++] : (15 & n) << 18 | (127 & l[r++]) << 12 | l[r++] << 6 & 127 | 127 & l[r++]), 
            0;
            return this.index += e, a;
        }, e.readArrayBuffer = function(e) {
            var t = this.arrayBuffer.slice(this.index, this.index + e);
            return this.index += e, t;
        };
    }(), function() {
        ulee.ListHeightVariable = function() {}, (0, Laya.ClassUtils.regClass)(ulee.ListHeightVariable, "ulee.ListHeightVariable");
        ulee.ListHeightVariable.prototype;
        ulee.ListHeightVariable.Convert = function(e) {
            e.$renderItems = e.renderItems, e._ys = [ 0 ], e.renderItems = function() {
                for (var t = 0, i = e._cells.length; t < i; t++) e.renderItem(e._cells[t], e._startIndex + t);
                e.changeSelectStatus();
            }, e.$renderItem = e.renderItem, e.renderItem = function(t, i) {
                if (e.$renderItem(t, i), t.y = e._ys[i], e._ys.length === i + 1 && i < e.array.length) {
                    var a = t.y + t.height;
                    e._ys.push(a), e._scrollBar.setScroll(0, a - e._content.height, e._scrollBar.value);
                }
            }, e.$onScrollBarChange = e.onScrollBarChange, e.onScrollBarChange = function(t) {
                e.runCallLater(e.changeCells);
                var i, a = e._scrollBar.value, s = e.repeatY, n = 0;
                for (i = 0; i < e._ys.length && !(e._ys[i] > a); i++) n = i;
                if (n > e._startIndex) {
                    var o = n - e._startIndex, r = !0, l = e._startIndex + 1 * (s + 1);
                    e._isMoved = !0;
                } else n < e._startIndex && (o = e._startIndex - n, r = !1, l = e._startIndex - 1, 
                e._isMoved = !0);
                for (i = 0; i < o; i++) {
                    if (r) {
                        var h = e._cells.shift();
                        e._cells[e._cells.length] = h;
                        var d = l + i;
                    } else h = e._cells.pop(), e._cells.unshift(h), d = l - i;
                    e.renderItem(h, d);
                }
                e._startIndex = n, e._content.scrollRect.y = a;
            }, e.$posCell = e.posCell, e.posCell = function(t, i) {
                e._scrollBar && (t.y = e._ys[i]);
            }, e.$changeCells = e.changeCells, e.changeCells = function() {
                if (e._cellChanged = !1, e._itemRender) {
                    e.scrollBar = this.getChildByName("scrollBar");
                    var t = this._getOneCell(), i = t.width + this._spaceX || 1, a = t.height + this._spaceY || 1;
                    this._width > 0 && (this._repeatX2 = this._isVertical ? Math.round(this._width / i) : Math.ceil(this._width / i)), 
                    this._height > 0 && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / a) : Math.round(this._height / a));
                    var s = this._width ? this._width : i * this.repeatX - this._spaceX, n = this._height ? this._height : a * this.repeatY - this._spaceY;
                    this._cellSize = this._isVertical ? a : i, this._cellOffset = this._isVertical ? a * Math.max(this._repeatY2, this._repeatY) - n - this._spaceY : i * Math.max(this._repeatX2, this._repeatX) - s - this._spaceX, 
                    this._isVertical && this._scrollBar ? this._scrollBar.height = n : !this._isVertical && this._scrollBar && (this._scrollBar.width = s), 
                    this.setContentSize(s, n);
                    var o = this._isVertical ? this.repeatX : this.repeatY, r = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                    this._createItems(0, o, r), this._createdLine = r, this._array && (this.array = this._array, 
                    this.runCallLater(this.renderItems));
                }
            }, Laya.getset(0, e, "array", function() {
                return this._array;
            }, function(t) {
                this.runCallLater(this.changeCells), this._array = t || [];
                var i = this._array.length;
                if (this.totalPage = Math.ceil(i / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < i ? this._selectedIndex : i - 1, 
                this.startIndex = this._startIndex, this._scrollBar) {
                    this._scrollBar.stopScroll();
                    var a = this._isVertical ? this.repeatX : this.repeatY, s = this._isVertical ? this.repeatY : this.repeatX, n = Math.ceil(i / a);
                    (this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage) > 1 ? (this._scrollBar.scrollSize = this._cellSize, 
                    this._scrollBar.thumbPercent = s / n, this._scrollBar.setScroll(0, this._ys[this._ys.length - 1] - e._content.height, this._scrollBar.value), 
                    this._scrollBar.target = this._content) : (this._scrollBar.setScroll(0, 0, 0), this._scrollBar.target = this._content);
                }
            }), e.tweenTo = function(t, i, a) {
                if (void 0 === i && (i = 200), e._scrollBar) {
                    var s = e._ys[t];
                    Tween.to(e._scrollBar, {
                        value: s
                    }, i, null, a, 0, !0);
                } else e.startIndex = t, a && a.run();
            }, e._scrollBar && (e._scrollBar.off("change", e, e.$onScrollBarChange), e._scrollBar.on("change", e, e.onScrollBarChange));
        };
    }();
    class _ extends Laya.AnimatorStateScript {
        constructor() {
            super(), this._onAniComplete = null, this._onAniStart = null;
        }
        onStateEnter() {
            this._onAniStart && this._onAniStart();
        }
        onStateUpdate() {}
        onStateExit() {
            this._onAniComplete && this._onAniComplete();
        }
        setComplete(e) {
            this._onAniComplete = e;
        }
        setStart(e) {
            this._onAniStart = e;
        }
    }
    !function() {
        ulee.Model = function(e, t, i) {
            this._modelId = 0, this._sprite = null, this.animator = null, this.avater = null, 
            this._canimators = [], this._parent = null, this._addModels = [], this._bones = {}, 
            this._loadedHandler = null, this._localPosition = new Vector3(0, 0, 0), this._localScale = new Vector3(1, 1, 1), 
            this._localRotation = new Vector3(0, 0, 0), this._localRotation2 = new Vector3(0, 0, 0), 
            this.loaded = !1, this._active = !0, this.modelConfig = null, this._alpha = 1, t && this.create(e, t, i);
        }, (0, Laya.ClassUtils.regClass)(ulee.Model, "ulee.Model");
        var e = ulee.Model.prototype;
        ulee.Model.create = function(e, t, i) {
            var a = Laya.Pool.getItem("ccModel");
            return a ? a.create(e, t, i) : a = new ulee.Model(e, t, i), a;
        }, e.prepareLoad = function(e) {
            Laya.loader.create(e, Laya.Handler.create(this, this.LoadResComplete));
        }, e.create = function(e, t, i) {
            this._parent = e, this._modelId = t, this._loadedHandler = i, this._isDestroyed = !1, 
            this._config = D.PrefabsPath[t];
            var a = this._config.chs;
            this.url = ulee.Model.fullChs(a), this.name = a.substring(a.lastIndexOf("/") + 1), 
            this.prepareLoad(this.url);
        }, ulee.Model.fullChs = function(e) {
            var t = e.substring(e.lastIndexOf("/") + 1);
            return e + "/" + t + ".lh";
        }, e.LoadResComplete = function() {
            if (!this._isDestroyed) {
                var e = Laya.Loader.getRes(this.url);
                this._sprite = Laya.Sprite3D.instantiate(e), this._sprite.$model = this, this._sprite.$name = "Model_" + this._modelId, 
                this.avater = this._sprite.getChildAt(0), this.animator = this.avater.getComponent(Laya.Animator);
                for (var t = 0; t < this._config.subModel.length; t++) {
                    var i = this._config.subModel[t];
                    if ("0" == i) break;
                    var a = this.avater.getChildByName(i);
                    if (a) {
                        var s = a.getComponentByType(Laya.Animator);
                        s && this._canimators.push(s);
                    }
                }
                Laya.timer.once(1, this, this._onAllCompleted);
            }
        }, e.setLocalPosition = function(e, t, i) {
            utils.setVector3(this._localPosition, e, t, i), this.loaded && (this._sprite.transform.localPosition = this._localPosition);
        }, e.setLocalScale = function(e, t, i) {
            void 0 === e && (e = 1), void 0 === t && (t = e), void 0 === i && (i = e), utils.setVector3(this._localScale, e, t, i), 
            this.loaded && (this._sprite.transform.localScale = this._localScale);
        }, e.setLocalRotation = function(e, t, i, a) {
            a || (a = this._sprite), this._localRotation2.x = e, this._localRotation2.y = t, 
            this._localRotation2.z = i, utils.setVector3(this._localRotation, e * Math.RAD_1_ANGLE, t * Math.RAD_1_ANGLE, i * Math.RAD_1_ANGLE);
            var s = a.transform;
            Laya.Quaternion.createFromYawPitchRoll(this._localRotation.x, this._localRotation.y, this._localRotation.z, s._localRotation), 
            s.localRotation = s._localRotation;
        }, e.setActive = function(e) {
            this._active != e && (this._active = e, this.loaded && (this._sprite.active = e));
        }, e.isActive = function() {
            return this._active;
        }, e.setAlpha = function(e) {
            this._alpha != e && (this.setAlalbedo(this._sprite, e, 1, 1, 1), this._alpha = e);
        }, e._setRenderMode = function(e, t) {
            t || (t = this._sprite);
            var i = t.meshRenderer || t.skinnedMeshRenderer || t.particleRenderer || t.ShurikenParticleRenderer;
            if (i) i.material && (i.material.renderMode = e); else {
                for (var a = 0; a < t.numChildren; a++) {
                    var s = t.getChildAt(a);
                    this._setRenderMode(e, s);
                }
                this.renderMode = e;
            }
        }, e.setAlalbedo = function(e, t, i, a, s) {
            if (e) {
                var n = e.meshRenderer || e.skinnedMeshRenderer;
                if (n) for (var o = n.materials, r = o.length - 1; r >= 0; r--) {
                    var l = o[r];
                    0 == l.cull && 1 == l.blend && 770 == l.srcBlend && 1 == l.dstBlend || (t < 1 && (l.renderMode = Laya[l.constructor.name].RENDERMODE_TRANSPARENT), 
                    l.albedoColorA = t, l.albedoColorR = i, l.albedoColorG = a, l.albedoColorB = s);
                } else for (var h = 0; h < e.numChildren; h++) {
                    var d = e.getChildAt(h);
                    this.setAlalbedo(d, t, i, a, s);
                }
            }
        }, e.setIntensity = function(e, t) {
            if (e) {
                var i = e.meshRenderer || e.skinnedMeshRenderer;
                if (i) for (var a = i.materials, s = a.length - 1; s >= 0; s--) {
                    a[s].albedoIntensity = t;
                } else for (var n = 0; n < e.numChildren; n++) {
                    var o = e.getChildAt(n);
                    this.setIntensity(o, t);
                }
            }
        }, e.receiveShadow = function() {
            for (var e = 0; e < this._sprite.numChildren; e++) {
                var t = this._sprite.getChildAt(e);
                t instanceof Laya.MeshSprite3D ? t.meshRender.receiveShadow = !0 : t instanceof Laya.SkinnedMeshSprite3D && (t.skinnedMeshRender.receiveShadow = !0);
            }
        }, e.showShashow = function(e, t) {
            t = null == t || t;
            for (var i = 0; i < e.numChildren; i++) {
                var a = e.getChildAt(i);
                a instanceof Laya.MeshSprite3D ? a.meshRender.castShadow = t : a instanceof Laya.SkinnedMeshSprite3D && (a.skinnedMeshRender.castShadow = t), 
                a.numChildren > 0 && this.showShashow(a, t);
            }
        }, e.rotate = function(e, t, i) {
            this.loaded && this._sprite.transform.rotate(e, t, i);
        }, e._onLoadedModel = function(e) {
            if (!this._isDestroyed) {
                this._sprite = Laya.Sprite3D.instantiate(e), this.avater = this._sprite.getChildAt(0), 
                this.animator = this.avater.getComponentByType(Laya.Animator);
                for (var t = 0; t < this._config.subModel.length; t++) {
                    var i = this._config.subModel[t];
                    if ("0" == i) break;
                    var a = this.avater.getChildByName(i);
                    if (a) {
                        var s = a.getComponentByType(Laya.Animator);
                        s && this._canimators.push(s);
                    }
                }
                this._loadAdds();
            }
        }, e._loadAdds = function() {
            this._isDestroyed || (this._addLoadIndex >= this._adds.length ? this._onAllCompleted() : this._addModels.push(ulee.Model.create(void 0, this._adds[this._addLoadIndex][0], Laya.Handler.create(this, this.onAddLoaded))));
        }, e.onAddLoaded = function() {
            if (!this._isDestroyed) {
                var e = this._addModels.last(), t = this._adds[this._addLoadIndex][1];
                this.bindBone(t, e._sprite), this._addLoadIndex++, this._loadAdds();
            }
        }, e._onAllCompleted = function() {
            this.loaded = !0, this._isDestroyed || (this._waitDestroy ? this.dispose() : (this._parent && this._parent.addChild(this._sprite), 
            this.setLocalPosition(0, 0, 0), this.setLocalRotation(0, 0, 0), this.setLocalScale(this._config.scale), 
            this._sprite.active = this._active, this._loadedHandler && this._loadedHandler.run()));
        }, e.getChildBeep = function(e, t) {
            if (t.name == e) return t;
            for (var i = t.numChildren, a = 0; a < i; a++) {
                var s = this.getChildBeep(e, t._childs[a]);
                if (s) return s;
            }
        }, e.bindBone = function(e, t) {
            var i = this.getBone(e);
            i && i.addChild(t);
        }, e.getBone = function(e) {
            var t = this._bones[e];
            if (!t) {
                if (e !== G.ORBIT_POINT.POINT3 || this.animator._avatarNodeMap[e]) {
                    if (!this.animator._avatarNodeMap[e]) return console.log("无该模型:" + this._modelId + "的绑点:" + e + "!"), 
                    null;
                    t = this._sprite.addChild(new Laya.Sprite3D()), this.animator.linkSprite3DToAvatarNode(e, t);
                } else t = this.avater;
                this._bones[e] = t;
            }
            return t;
        }, e.stopAnim = function(e) {
            this.setAnimSpeed(e, 0);
        }, e.setAnimSpeed = function(e, t) {
            this.animator && (this.animator.play(e), this.animator._controllerLayers[0]._statesMap[e].speed = t);
        }, e.clearAnim = function() {
            this.animator._controllerLayers[0]._statesMap = [];
        }, e.playAnim = function(e, t, i, a, s) {
            if (this.animator) {
                s ? this.animator.crossFade(e, s, 0) : this.animator.play(e);
                var n = this.animator._controllerLayers[0]._statesMap[e];
                n.script || (n.addScript(_), n.script = n._scripts[0]), a || (a = 1), n.speed = a, 
                i && (i = i.bind(t)), n.script.setComplete(i), this.curAnim = e, this.curAnimSpeed = a;
            } else t && i && i.call(t);
        }, e.replay = function() {
            this.setActive(!1), this.setActive(!0);
        }, e.dispose = function() {
            if (!this._isDestroyed && this.loaded) {
                this._isDestroyed = !0, this.loaded = !1;
                for (var e = 0; e < this._addModels.length; e++) this._addModels[e].dispose();
                this._sprite.destroy(!0) && (this._sprite = null), this.animator = null, this.avater = null, 
                this._canimators = [], this._parent = null, this._addModels = [], this._bones = {}, 
                this._loadedHandler = null, this._active = !0, this._waitDestroy = !1, this._position = new Vector3(NaN, NaN, NaN), 
                this._localPosition = new Vector3(0, 0, 0), this._localScale = new Vector3(1, 1, 1), 
                this._localRotation = new Vector3(0, 0, 0), Laya.Pool.recover("ccModel", this);
            } else this._waitDestroy = !0;
        }, e.removeParent = function() {
            this._sprite.removeSelf();
        }, e.resetAmbientColor = function(e, t) {
            for (var i = 0; i < e.numChildren; i++) {
                var a = e.getChildAt(i);
                if (a instanceof Laya.MeshSprite3D) for (var s = a.meshRender.materials, n = 0; n < s.length; n++) {
                    (o = s[n]).ambientColor.x = t, o.ambientColor.y = t, o.ambientColor.z = t;
                } else if (a instanceof Laya.SkinnedMeshSprite3D) for (s = a.skinnedMeshRender.materials, 
                n = 0; n < s.length; n++) {
                    var o;
                    (o = s[n]).ambientColor.x = t, o.ambientColor.y = t, o.ambientColor.z = t;
                }
                a.numChildren > 0 && this.resetAmbientColor(a, t);
            }
        }, e.resetAlbedo = function(e, t) {
            for (var i = 0; i < e.numChildren; i++) {
                var a = e.getChildAt(i);
                if (a instanceof Laya.MeshSprite3D) for (var s = a.meshRender.materials, n = 0; n < s.length; n++) {
                    s[n].albedo = new Laya.Vector4(t, t, t, 1);
                } else if (a instanceof Laya.SkinnedMeshSprite3D) for (s = a.skinnedMeshRender.materials, 
                n = 0; n < s.length; n++) {
                    s[n].albedo = new Laya.Vector4(t, t, t, 1);
                }
                a.numChildren > 0 && this.resetAlbedo(a, t);
            }
        }, e.resetSpecularColor = function(e, t) {
            for (var i = 0; i < e.numChildren; i++) {
                var a = e.getChildAt(i);
                if (a instanceof Laya.MeshSprite3D) for (var s = a.meshRender.materials, n = 0; n < s.length; n++) {
                    s[n].specularColor = new Laya.Vector4(t, t, t, 1);
                } else if (a instanceof Laya.SkinnedMeshSprite3D) for (s = a.skinnedMeshRender.materials, 
                n = 0; n < s.length; n++) {
                    s[n].specularColor = new Laya.Vector4(t, t, t, 1);
                }
                a.numChildren > 0 && this.resetAlbedo(a, t);
            }
        }, e.setDisableLight = function(e) {
            for (var t = 0; t < e.numChildren; t++) {
                var i = e.getChildAt(t);
                i instanceof Laya.MeshSprite3D ? i.meshRender.sharedMaterial && i.meshRender.sharedMaterial.disableLight() : i instanceof Laya.SkinnedMeshSprite3D && i.skinnedMeshRender.sharedMaterial && i.skinnedMeshRender.sharedMaterial.disableLight(), 
                i.numChildren > 0 && this.setDisableLight(i);
            }
        }, e.setMaterial2 = function(e, t) {
            if (e instanceof Laya.MeshSprite3D) var i = e.meshRenderer; else if (e instanceof Laya.SkinnedMeshSprite3D) i = e.skinnedMeshRenderer;
            i.material = t;
        }, e.setMaterial = function(e, t, i) {
            if (t || (t = this._sprite), t instanceof Laya.MeshSprite3D) var a = t.meshRenderer; else if (t instanceof Laya.SkinnedMeshSprite3D) a = t.skinnedMeshRenderer;
            if (a) if (a.material) Laya.Texture2D.load(e, Laya.Handler.create(this, function(e) {
                a.material.albedoTexture = e, i || (i = 1), a.material.albedoIntensity = i;
            })); else {
                var s = new Laya.BlinnPhongMaterial();
                Laya.Texture2D.load(e, Laya.Handler.create(this, function(e) {
                    s.albedoTexture = e, i || (i = 1), s.albedoIntensity = i, console.log(i), this.renderMode && (s.renderMode = this.renderMode);
                })), a.material = s;
            }
            for (var n = 0; n < t.numChildren; n++) this.setMaterial(e, t._children[n], i);
        }, e.addMeshCollider = function(e, t) {
            if (e.meshFilter) {
                var i = e.addComponent(Laya.PhysicsCollider);
                let a = new Laya.MeshColliderShape();
                a.mesh = e.meshFilter.sharedMesh, i.colliderShape = a, t && t.push(i);
            }
            for (var a = e.numChildren, s = 0; s < a; s++) this.addMeshCollider(e._children[s], t);
        }, e.addBoxCollider = function(e) {
            for (var t = e.numChildren, i = [], a = 0; a < t; a++) {
                if (e._childs[a].meshFilter) {
                    var s = this._sprite.addComponent(Laya.BoxCollider);
                    s.setFromBoundBox(e._childs[a].meshFilter.sharedMesh.boundingBox), i.push(s);
                }
                var n = this.addBoxCollider(e._childs[a]);
                if (n.length > 0) for (var o = 0; o < n.length; o++) i.push(n[o]);
            }
            return i;
        }, e.getCollider = function() {
            return this._sprite._colliders;
        }, ulee.Model._setShader = function(e) {
            for (var t = 0; t < e.numChildren; t++) {
                var i = e.getChildAt(t);
                if (i instanceof Laya.MeshSprite3D) {
                    for (var a = i.meshRender.materials, s = 0; s < a.length; s++) {
                        (n = a[s]).setShaderName("CustomShader"), n.normalTexture = ulee.shader.CartoonMaterial.matCap, 
                        n._tempMatrix4x40 = new Laya.Matrix4x4();
                    }
                    i.meshRender.materials = a;
                } else if (i instanceof Laya.SkinnedMeshSprite3D) {
                    for (a = i.skinnedMeshRender.materials, s = 0; s < a.length; s++) {
                        var n;
                        (n = a[s]).setShaderName("CustomShader"), n.normalTexture = ulee.shader.CartoonMaterial.matCap, 
                        n._tempMatrix4x40 = new Laya.Matrix4x4();
                    }
                    i.skinnedMeshRender.materials = a;
                } else this._setShader(i);
            }
        }, e.addSkinComponent = function(e, t) {
            if (e instanceof Laya.MeshSprite3D) {
                var i = e.addComponent(Laya.SkinAnimations);
                i.templet = Laya.AnimationTemplet.load(t), i.player.play();
            }
            for (var a = 0, s = e._childs.length; a < s; a++) this.addSkinComponent(e._childs[a], t);
        };
    }(), window.initData = function() {
        G.dataload = function() {
            for (var e in D) if ("properties" != e) {
                var t = D[e], i = D.properties[e];
                if (i) for (var a in t) {
                    var s = t[a], n = {};
                    n[i[0]] = a;
                    for (var o = 1, r = i.length; o < r; o++) {
                        var l = s[o - 1];
                        void 0 !== l && (n[i[o]] = l);
                    }
                    t[a] = n;
                }
            }
            !function() {
                (function() {
                    var e;
                    for (var t in D.ScreenShow) {
                        var i = D.ScreenShow[t];
                        1 == t && (e = i.screenPixel), e > 10 && (i.screenPixel /= e);
                    }
                })(), function() {
                    for (var e in D.musicBasic) {
                        var t = D.musicBasic[e];
                        t.musicPower *= .01;
                    }
                }(), function() {
                    var e = [];
                    for (var t in D.PrefabsPath) {
                        var i = D.PrefabsPath[t];
                        i.subModel ? i.subModel = i.subModel.split("#") : i.subModel = e, i.actionInShop ? i.actionInShop = i.actionInShop.split("#") : i.actionInShop = e;
                    }
                }(), "undefined" != typeof addModelConfig && (addModelConfig(), function() {
                    function addHead(e, t) {
                        if (e) for (var i = 0, a = e.length; i < a; i++) e[i] = t + e[i];
                    }
                    var e;
                    for (var t in D.ModelConfig) addHead((e = D.ModelConfig[t]).resource, t), addHead(e.zipResource, t);
                }());
                D._inited = !0, eventDispatcher.dispatchEvent(ulee.Event.ON_DATA_LOAD);
            }();
        }, G.dataload();
    }, function(e) {
        ulee.UIManager = function() {
            this.scene = Laya.Scene, this._dialogList = {}, this._childList = {};
        }, (0, Laya.ClassUtils.regClass)(ulee.UIManager, "ulee.UIManager", void 0);
        var t = ulee.UIManager.prototype;
        t.openUI = function(e, t, i, a) {
            if (Laya.Scene.open(e, !1, i, a), t) {
                var s = t.url;
                this._childList[s] || (this._childList[s] = []), this._childList[s].push(e);
            }
        }, t.openDialog = function(e, t, i, a) {
            if (Laya.Scene.open(e, !1, i, a), t) {
                var s = t.url;
                this._dialogList[s] || (this._dialogList[s] = []), this._dialogList[s].push(e);
            }
        }, t.closeDialog = function(e) {
            for (var t = Laya.stage._children[1]._children, i = 0; i < t.length; i++) if (t[i].url == e) {
                t[i].close();
                break;
            }
        }, t.closeUI = function(e) {
            var t = this.getUI(e);
            if (t) {
                var i = t.url;
                if (this._dialogList[i]) for (var a = this._dialogList[i], s = 0; s < a.length; s++) this.closeDialog(a[s]);
                if (this._dialogList[i] = null, this._childList[i]) for (a = this._childList[i], 
                s = 0; s < a.length; s++) this.closeUI(a[s]);
                this._childList[i] = null, t.close();
            }
        }, t.getUI = function(e) {
            if (this._uiList = Laya.stage._children[0]._children, !this._uiList) return void console.error("未从uimanager打开任何场景");
            let t = null;
            for (let i = 0; i < this._uiList.length; i++) if ((t = this._uiList[i]).url == e) return t;
            return console.error("查无此UI"), null;
        };
    }(), window.uiManager = new ulee.UIManager(), function() {
        ulee.DataManager = function() {
            this._data = {}, this.init();
        }, (0, Laya.ClassUtils.regClass)(ulee.DataManager, "ulee.DataManager");
        var e = ulee.DataManager.prototype;
        e.init = function() {
            this._localData = Laya.LocalStorage, this._userData = {};
        }, e.initData = function() {
            this.dataName = "PlayerData", this.getStorage(function(e) {
                n.getIns().copyFrom(e), this.compareTime(n.getIns().firstLoginDate) && (G.OLDUSER = !0), 
                G.ISVIBRATE = n.getIns().isVibrate, G.ISSOUND = n.getIns().isSound, uleeSDK && uleeSDK.setVibrate(G.ISVIBRATE);
            }.bind(this));
        }, e.compareTime = function(e, t) {
            if (t) t = t.getTime(); else {
                var i = new Date();
                t = new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
            }
            if (e < t) return !0;
        }, e.getData = function(e) {
            return this._data[e];
        }, e.setData = function(e, t, i) {
            this._data[e] ? i ? this._data[e] = t : console.log("已存在数据") : this._data[e] = t;
        }, e.clearData = function() {
            this._data = {}, this.init();
        }, e.setStorage = function(e, t) {
            let i = t || this.dataName;
            Laya.Browser.onMiniGame ? wx.setStorage({
                key: i,
                data: e
            }) : Laya.LocalStorage.setItem(i, JSON.stringify(e));
        }, e.getStorage = function(e, t) {
            let i, a = t || this.dataName;
            Laya.Browser.onMiniGame ? wx.getStorage({
                key: a,
                success(t) {
                    e && e(t.data);
                },
                fail(t) {
                    (i = Laya.LocalStorage.getItem(a)) && (i = JSON.parse(i)), e && e(i);
                }
            }) : ((i = Laya.LocalStorage.getItem(a)) && (i = JSON.parse(i)), e && e(i));
        }, e.removeStorage = function(e, t) {
            let i = t || this.dataName;
            Laya.Browser.onMiniGame ? wx.removeStorage({
                key: i,
                success(t) {
                    e && e(t.data);
                },
                fail(t) {
                    e && e(-1);
                }
            }) : Laya.LocalStorage.removeItem(i);
        }, e.clearStorage = function(e) {
            Laya.Browser.onMiniGame ? wx.clearStorage({
                success(t) {
                    e && e(t.data);
                },
                fail(t) {
                    e && e(-1);
                }
            }) : Laya.LocalStorage.clear();
        };
    }(), function(e) {
        ulee.UpdateManager = function() {
            this.id = 0, this.totalTime = 0, this.LoopArr = {}, Laya.timer.frameLoop(1, this, this.update);
        }, (0, Laya.ClassUtils.regClass)(ulee.UpdateManager, "ulee.UpdateManager", void 0);
        var t = ulee.UpdateManager.prototype;
        t.update = function(e) {
            var t = Laya.timer.delta / 1e3;
            for (var i in this.totalTime += t, G.FPSAVERAGE = parseInt(1 / t), G.FRAME_INTERVAL = t > .03 ? .03 : t, 
            G.NOW = Laya.Browser.now(), this.LoopArr) {
                var a = this.LoopArr[i];
                a.caller ? a.type == G.ENUM_LOOP_TYPE.FRAME ? (a.frame++, a.frame == a.targetFrame && (a.func(), 
                a.isOnce ? delete this.LoopArr[i] : a.frame = 0)) : a.type == G.ENUM_LOOP_TYPE.TIME && (a.time += t, 
                a.time >= a.targetTime && (a.func(), a.isOnce ? delete this.LoopArr[i] : a.time = 0)) : console.log("warning:有方法没被移除" + a.func);
            }
        }, t.frameLoop = function(e, t, i, a) {
            var s = this.id++, n = "FL" + s, o = {
                frame: 0,
                targetFrame: e,
                func: i.bind(t, a),
                args: a,
                caller: t,
                type: G.ENUM_LOOP_TYPE.FRAME,
                id: s
            };
            return this.LoopArr[n] = o, t.$updateArr ? t.$updateArr.push(n) : t.$updateArr = [ n ], 
            n;
        }, t.frameOnce = function(e, t, i, a) {
            var s = this.id++, n = "FO" + s, o = {
                frame: 0,
                targetFrame: e,
                func: i.bind(t, a),
                args: a,
                isOnce: !0,
                caller: t,
                type: G.ENUM_LOOP_TYPE.FRAME,
                id: s
            };
            return t.$updateArr ? t.$updateArr.push(n) : t.$updateArr = [ n ], this.LoopArr[n] = o, 
            n;
        }, t.timeLoop = function(e, t, i, a) {
            var s = this.id++, n = "TL" + s, o = {
                time: 0,
                targetTime: e,
                func: i.bind(t, a),
                args: a,
                caller: t,
                type: G.ENUM_LOOP_TYPE.TIME,
                id: s
            };
            return t.$updateArr ? t.$updateArr.push(n) : t.$updateArr = [ n ], this.LoopArr[n] = o, 
            n;
        }, t.timeOnce = function(e, t, i, a) {
            var s = this.id++, n = "TO" + s, o = {
                time: 0,
                targetTime: e,
                func: i.bind(t, a),
                args: a,
                isOnce: !0,
                caller: t,
                type: G.ENUM_LOOP_TYPE.TIME,
                id: s
            };
            return t.$updateArr ? t.$updateArr.push(n) : t.$updateArr = [ n ], this.LoopArr[n] = o, 
            n;
        }, t.clear = function(e, t) {
            this.LoopArr[e] && delete this.LoopArr[e], t && t.$updateArr.remove(e);
        }, t.clearAll = function(e) {
            if (e.$updateArr) {
                for (var t = 0; t < e.$updateArr.length; t++) {
                    var i = e.$updateArr[t];
                    this.clear(i);
                }
                e.$updateArr = null;
            }
        };
    }(), function() {
        ulee.AudioManager = function() {
            this.soundManager = Laya.SoundManager, this.soundManager.autoReleaseSound = !1, 
            this.setMusicVolume(.5), this.setSoundVolume(.5), this.musicConfig = D.musicBasic, 
            this.onceSoundArr = {}, this.soundMgr = {}, this.isBGM || (this.hasChangeMusic = !0), 
            this.curSounds = {};
        }, (0, Laya.ClassUtils.regClass)(ulee.AudioManager, "ulee.AudioManager");
        var e = ulee.AudioManager.prototype;
        e.playMusic = function(e) {
            G.ISSOUND && 
            e && (this.bgmId != e ? this.hasChangeMusic = !0 : this.hasChangeMusic = !1, 
            this.bgmId = e || this.bgmId, 
            this.soundManager.playMusic(this.getResurl(this.bgmId), 10), 
            this.isPlaying = !0);
        }, e.stopMusic = function() {
            this.soundManager.stopMusic(), this.isPlaying = !1;
        }, e.setMusicMuted = function(e) {
            this.soundManager.musicMuted = !e, this.hasChangeMusic && (this.playMusic(), this.hasChangeMusic = !1);
        }, e.setMusicVolume = function(e) {
            this.soundManager.musicVolume = e;
        }, e.playSound = function(e, t, i) {
            if (G.ISSOUND) {
                if (this.curSounds[e]) {
                    if (!i && this.curSounds[e].length > 0) return;
                } else this.curSounds[e] = [];
                if (Laya.Browser.onMiniGame) (a = uleeSDK.pf.createInnerAudioContext()).src = this.getResurl(e), 
                a.onEnded(function() {
                    this.curSounds[e].removeAt(this.curSounds[e].indexOf(e)), t && t();
                }.bind(this)), a.play(); else var a = this.soundManager.playSound(this.getResurl(e), 1, new Handler(this, function() {
                    this.curSounds[e].removeAt(this.curSounds[e].indexOf(e)), t && t();
                }));
                this.curSounds[e].push(a);
            }
        }, e.stopSound = function(e) {
            if (this.curSounds[e] && this.curSounds[e].length > 0) for (var t = 0; t < this.curSounds[e].length; t++) Laya.Browser.onMiniGame ? this.curSounds[e][t].destroy() : this.soundManager.stopSound(this.getResurl(e)), 
            this.curSounds[e].removeAt(t);
        }, e.setSoundVolume = function(e) {
            this.soundManager.soundVolume = e;
        }, e.stopAllSound = function() {
            this.soundManager.stopAllSound();
        }, e.getResurl = function(e) {
            return this.musicConfig[e].file;
        };
    }(), function() {
        ulee.LoadItem = function(e, t, i) {
            this.loaded = !1, this.loadFn = e, this.count = t, this.checkFn = i, this.loading = null;
        }, (0, Laya.ClassUtils.regClass)(ulee.LoadItem, "ulee.LoadItem");
        var e = ulee.LoadItem.prototype;
        e.onComplete = function() {
            this.loaded = !0;
        }, e.start = function() {
            this.loadFn();
        };
    }(), function() {
        ulee.PromptUtils = function() {}, (0, Laya.ClassUtils.regClass)(ulee.PromptUtils, "ulee.PromptUtils");
        var e = ulee.PromptUtils.prototype;
        e.init = function() {
            this.bgSprite = new Laya.Image("common/img_infoBase.png"), this.bgSprite.width = Laya.stage.width - 40, 
            this.bgSprite.height = 50, this.bgSprite.anchorX = .5, this.bgSprite.anchorY = .5, 
            this.bgSprite.x = Laya.stage.width / 2, this.bgSprite.y = Laya.stage.height / 9, 
            this.textOffx = 30, this.textOffy = 15, this.tipText = new Laya.Label(), this.bgSprite.addChild(this.tipText), 
            this.tipText.width = this.bgSprite.width - 2 * this.textOffx, this.tipText.fontSize = 30, 
            this.tipText.align = "center", this.tipText.color = "#ffffff", this.tipText.y = this.textOffy, 
            this.bgSprite.zOrder = 2e3, Laya.stage.addChild(this.bgSprite), this.timeLine = new Laya.TimeLine(), 
            this.timeLine.addLabel("scale", 0).to(this.bgSprite, {
                scaleX: 1.2,
                scaleY: 1.2,
                alpha: 1
            }, 100, null, 0).addLabel("back", 0).to(this.bgSprite, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 100, null, 0).addLabel("show", 0).to(this.bgSprite, {
                alpha: 1
            }, 1e3, null, 0).addLabel("hide", 0).to(this.bgSprite, {
                alpha: 0
            }, 1e3, null, 0), this.timeLine.on(Laya.Event.COMPLETE, this, this.onComplete), 
            this.mouseThrough = !0;
        }, e.removeRes = function() {
            this.timeLine.destroy();
        }, e.onComplete = function() {
            this.visible = !1, this.mouseThrough = !0;
        }, e.prompt = function(e) {
            this.tipText.text = e, this.tipText.x = this.textOffx, this.bgSprite.height = 30 + this.textOffx, 
            this.timeLine.play(0, !1), this.visible = !0;
        }, e.prompt1 = function(e) {
            this.bgSprite.skin = e, this.bgSprite.height = null, this.bgSprite.width = null, 
            this.timeLine.play(0, !1), this.visible = !0;
        }, e.resize = function() {
            this.bgSprite && (this.bgSprite.width = Laya.stage.width - 40, this.bgSprite.height = this.tipText.contextHeight + this.textOffx, 
            this.bgSprite.x = Laya.stage.width / 2, this.bgSprite.y = Laya.stage.height / 8, 
            this.tipText && (this.tipText.style.width = this.bgSprite.width - 2 * this.textOffx));
        };
    }(), window.promptUtils = new ulee.PromptUtils(), function() {
        ulee.BattleMgr = function() {
            this.$updateArr = [], G.GAME_STEP = {
                READY: 0,
                START: 1,
                END: 2
            }, G.COLLIDERGROUP = {
                ROAD: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1,
                ARRIVE: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2,
                BET: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3
            }, this.ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), 
            this.outHitInfo = new Laya.HitResult(), this.point = new Laya.Vector3(), this.heroSpeed = .2, 
            this.openCheck = 1, this.diamondImgArr = [], this.diamondRot = new Laya.Vector3(0, .05, 0);
        }, (0, Laya.ClassUtils.regClass)("ulee.BattleMgr", ulee.BattleMgr);
        var e = ulee.BattleMgr.prototype;
        e.initData = function() {
            this.downZ = null, this.curRoad = null, this.roadArr = [], this.ownerBlock = [], 
            this.gameStep = G.GAME_STEP.READY, this.totalLength = 0, this.curLength = 0, this.onWater = !1, 
            this.waterLength = .06, this.waterLimit = .04, this.curDiamondNum = 0, this.curMultiple = 1, 
            this.endBanArr = [], this.blockNum = 0, this.arriveLength = 0, this.isArrive = !1, 
            this.canRotation = !1, this.isEndRotation = !1;
        }, e.initRound = function(e, t) {
            this.heroSpeed = .23, this.initData(), this.createRoad(), G.Main.box_mune.visible = !0, 
            G.Main.box_battleUI.visible = !1, this.camera && (this.cameraAngle = 20, ModelCfg.getIns().setLocalPosition(this.cameraBase, 0, 0, 0), 
            this.camera.transform.localPositionX = .3 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), 
            this.camera.transform.localPositionY = .135, this.camera.transform.localPositionZ = .3 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE), 
            this.lookPos.x = .015, this.lookPos.y = .08, this.lookPos.z = 0, this.camera.transform.lookAt(this.lookPos, new Laya.Vector3(0, 1, 0))), 
            this.heroBase && (this.heroBase.eff2.active = !1), G.Main.img_bg.skin = "bg/img_bg" + utils.random(1, 3) + ".png";
        }, e.startGame = function() {}, e.endGame = function(e) {
            this.isWin = e;
            var t = PlayerData.getIns().getRoundId();
            audioManager.stopMusic(10), 
            e ? 
            (G.Main.hideRole(), uleeSDK && "wx" == uleeSDK.platform && uleeSDK.pf.aldStage.onEnd({
                stageId: t + "",
                stageName: "第" + t + "关",
                event: "complete",
                params: {
                    desc: "关卡完成"
                }
            }), 
            audioManager.playSound(2), 
            ModelCfg.getIns().playAnim(this.hero, "dance")) 
            : (uleeSDK && "wx" == uleeSDK.platform && uleeSDK.pf.aldStage.onEnd({
                stageId: t + "",
                stageName: "第" + t + "关",
                event: "fail",
                params: {
                    desc: "失败"
                }
            }), this.downZ = null, audioManager.playSound(3), 
            uleeSDK && uleeSDK.startVibrate(!0), 
            ModelCfg.getIns().playAnim(this.hero, "death", null, function() {
                uiManager.openUI("game/DefeatedView.scene");
            }, 2)),
            this.gameStep = G.GAME_STEP.END;
            //uiManager.getUI("prefab/BottomAD.scene") && (uiManager.getUI("prefab/BottomAD.scene").visible = !1);
        }, e.revive = function() {
            console.log(), 
            this.gameStep = G.GAME_STEP.READY, 
            this.curLength += .1, 
            G.Main.updateProgress(this.curLength);
            var e = this.heroBase.transform.localPosition;
            this.resetBlock(), 
            this.updateHero(), 
            ModelCfg.getIns().setLocalPosition(this.heroBase, e.x, e.y, this.curRoad.transform.localPositionZ), 
            ModelCfg.getIns().setLocalPosition(this.cameraBase, 0, 0, this.heroBase.transform.localPositionZ);
            this.blockNum = 5;
            for (var t = 0, i = 0; i < this.blockNum; i++) t++, ModelCfg.getIns().getModelById(10001, function(e) {
                this.heroBase.addChild(e), this.ownerBlock.push(e), ModelCfg.getIns().setMaterialPic(e, "res/obj_texture/" + D.shopConfig[PlayerData.getIns().getCurEquipID()].picture), 
                ModelCfg.getIns().setLocalPosition(e, 0, .01 + .02 * (i + 1), 0), t == this.blockNum && ModelCfg.getIns().setLocalPosition(this.hero, 0, .025 + .02 * t, 0);
            }.bind(this));
            //uiManager.getUI("prefab/BottomAD.scene").visible = !0;
        }, e.restartGame = function() {
            this.gameStep = G.GAME_STEP.READY, this.clearModel(), this.initRound(), this.updateHero(), 
            G.Main.restart();
        }, e.showGuideView = function() {}, e.loop = function() {
            var e = G.FRAME_INTERVAL;
            this.moveCloud(e), this.cameraMove(), G.Main.blockProgress();
            for (var t = 0; t < this.roadArr.length; t++) {
                let e = this.roadArr[t];
                for (let t = 0; t < e.blockArr.length; t++) {
                    let i = e.blockArr[t];
                    i.transform._localPosition;
                    3 == i.type && i.transform.rotate(this.diamondRot);
                }
            }
            if (this.gameStep == G.GAME_STEP.START) {
                var i = this.heroSpeed * e;
                if (this.curLength += i, this.totalLength > this.curLength && G.Main.updateProgress(this.curLength), 
                this.onWater && (this.waterLength += i, this.waterLength >= this.waterLimit && (this.waterLength = 0, 
                this.reduceBlock())), this.isArrive && (this.arriveLength += i, this.arriveLength > .05 && (this.arriveLength = -1, 
                1 == this.ownerBlock.length))) return void this.endGame(!0);
                var a = this.heroBase.transform._localPosition;
                if (a.z -= i, ModelCfg.getIns().setLocalPosition(this.heroBase, a.x, a.y, a.z), 
                ModelCfg.getIns().setLocalPosition(this.cameraBase, 0, 0, a.z), 1 == this.openCheck) {
                    if (this.ray.origin.x = a.x, this.ray.origin.y = 1, this.ray.origin.z = a.z, this.ray.direction.x = 0, 
                    this.ray.direction.y = -1, this.ray.direction.z = 0, this.isArrive) {
                        s = G.COLLIDERGROUP.BET;
                        this.newScene.physicsSimulation.rayCast(this.ray, this.outHitInfo, 1.5, s, s), this.outHitInfo.succeeded && this.outHitInfo.collider.owner != this.curRoad && (this.curRoad = this.outHitInfo.collider.owner, 
                        console.log("切换终点路段"), this.arriveLength = 0, this.ownerBlock.length > 1 && this.reduceBlock(), 
                        this.curMultiple = this.curRoad.multipe);
                    } else {
                        var s = G.COLLIDERGROUP.ROAD;
                        if (this.newScene.physicsSimulation.rayCast(this.ray, this.outHitInfo, 1.5, s, s), 
                        this.outHitInfo.succeeded) {
                            if (this.outHitInfo.point.y - this.bottomHeight > .05) {
                                for (let e, t = 0, i = null, s = null; t < this.ownerBlock.length; t++) if ((e = (s = (i = this.ownerBlock[t]).transform._localPosition).y + a.y) < this.outHitInfo.point.y) {
                                    if (i.removeSelf(), i.destroy(), this.ownerBlock.removeAt(t--), 0 == this.ownerBlock.length) return void this.endGame();
                                    ModelCfg.getIns().playAnim(this.hero, "land", this, function() {
                                        ModelCfg.getIns().playAnim(this.hero, "idle");
                                    }.bind(this), 4, .2);
                                } else s.y = .02 * t + .01, ModelCfg.getIns().setLocalPosition(i, s.x, s.y, s.z);
                                ModelCfg.getIns().setLocalPosition(this.hero, 0, .02 * (this.ownerBlock.length - 1) + .025, 0);
                            }
                            this.bottomHeight = this.outHitInfo.point.y, this.onWater = !1, this.waterLength = .06, 
                            this.outHitInfo.collider.owner.parent != this.curRoad && (this.curRoad = this.outHitInfo.collider.owner.parent, 
                            this.blockNum = 0, console.log("切换路段"));
                        } else {
                            var s = G.COLLIDERGROUP.ARRIVE;
                            if (this.newScene.physicsSimulation.rayCast(this.ray, this.outHitInfo, 1.5, s, s), 
                            this.outHitInfo.succeeded) for (this.isArrive = !0, this.arriveLength = -1, console.log("到达终点"), 
                            this.heroSpeed = .5; this.ownerBlock.length > 16; ) this.reduceBlock(); else this.onWater = !0, 
                            this.bottomHeight = 0, console.log("没有检测到路段");
                        }
                    }
                    ModelCfg.getIns().setLocalPosition(this.heroBase, a.x, this.bottomHeight - 5e-4, a.z);
                }
                if (this.openCheck++, this.openCheck > 2 && (this.openCheck = 1), !this.isArrive) {
                    let e = null, t = null;
                    if (this.curRoad) {
                        for (let i = 0; i < this.curRoad.blockArr.length; i++) if (t = (e = this.curRoad.blockArr[i]).transform._localPosition, 
                        2 == e.type) {
                            if (Math.abs(t.z - a.z) < .02 && Math.abs(t.x - a.x) < .02) {
                                e.removeSelf(), ModelCfg.getIns().setLocalPosition(e, 0, .02 * this.ownerBlock.length + .01, 0), 
                                ModelCfg.getIns().setLocalPosition(this.hero, 0, .02 * this.ownerBlock.length + .025, 0), 
                                this.showEffect(1, .02 * this.ownerBlock.length), this.heroBase.addChild(e), this.ownerBlock.push(e), 
                                this.curRoad.blockArr.removeAt(i), ModelCfg.getIns().playAnim(this.hero, "jump", this, function() {
                                    ModelCfg.getIns().playAnim(this.hero, "idle");
                                }.bind(this), 2, .2), audioManager.playSound(6, null, !0), uleeSDK && uleeSDK.startVibrate(!1), 
                                this.blockNum++;
                                break;
                            }
                        } else Math.abs(t.z - a.z) < .015 && Math.abs(t.x - a.x) < .015 && (this.showEffect(2, .02), 
                        this.eatDiamond(e), e.destroy(), this.curRoad.blockArr.removeAt(i--), audioManager.playSound(8, null, !0), 
                        uleeSDK && uleeSDK.startVibrate(!1));
                        if (null == this.downZ) {
                            for (var n, o, r, l = 0, h = null, d = null; l < this.ownerBlock.length; l++) {
                                n = (d = (h = this.ownerBlock[l]).transform._localPosition).x + a.x, o = d.y + a.y, 
                                r = d.z + a.z;
                                for (let i = 0; i < this.curRoad.obstacleArr.length; i++) if (t = (e = this.curRoad.obstacleArr[i]).transform._localPosition, 
                                Math.abs(r - t.z) < .02 && Math.abs(t.x - n) < .019 && Math.abs(t.y - o) < .019) {
                                    audioManager.playSound(7, null, !0), h.needRemove = !0, this.downZ = t.z;
                                    break;
                                }
                            }
                            n = (d = this.hero.transform._localPosition).x + a.x, o = d.y + a.y + .01, r = d.z + a.z;
                            for (let i = 0; i < this.curRoad.obstacleArr.length; i++) if (t = (e = this.curRoad.obstacleArr[i]).transform._localPosition, 
                            Math.abs(r - t.z) < .02 && Math.abs(t.x - n) < .019 && Math.abs(t.y - o) < .01) return void this.endGame();
                        } else {
                            let e = this.ownerBlock[0];
                            if (!e) return void this.endGame();
                            let t = e.transform._localPosition;
                            this.downZ - t.z - a.z > .02 && this.resetBlock() && (this.downZ = null);
                        }
                        for (let e = 0, t = null; e < this.ownerBlock.length; e++) (t = this.ownerBlock[e]).needRemove && (t.removeSelf(), 
                        t.destroy(), this.ownerBlock.removeAt(e), e--, ModelCfg.getIns().playAnim(this.hero, "land", this, function() {
                            ModelCfg.getIns().playAnim(this.hero, "idle");
                        }.bind(this), 4, .2));
                    }
                }
            }
        }, e.showEffect = function(e, t) {
            1 == e ? (this.heroBase.eff._children[0]._particleSystem.startColorConstant = new Laya.Vector4(.9622642, .7770658, .4130474, 1), 
            this.heroBase.eff._children[0]._particleSystem.startColorConstantMax = new Laya.Vector4(.9622642, .7770658, .4130474, 1)) : (this.heroBase.eff._children[0]._particleSystem.startColorConstant = new Laya.Vector4(.96, .39, .96, 1), 
            this.heroBase.eff._children[0]._particleSystem.startColorConstantMax = new Laya.Vector4(.96, .39, .96, 1)), 
            this.heroBase.eff.active = !1, this.heroBase.eff.active = !0, ModelCfg.getIns().setLocalPosition(this.heroBase.eff, 0, t, 0);
        }, e.moveCloud = function(e) {
            for (var t = 1; t < 6; t++) G.Main["cloud" + t].x -= 10 * e, G.Main["cloud" + t].x < -G.Main["cloud" + t].width && (G.Main["cloud" + t].x = Laya.stage.width, 
            G.Main["cloud" + t].y = utils.random(100, 600));
        }, e.cameraMove = function() {
            var e = this;
            if (this.gameStep == G.GAME_STEP.START) this.ownerBlock.length > 13 ? .22 != this.cameraY && (this.cameraY = .22, 
            cameraUtils.moveCamera(this.camera, .4 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), .22, .4 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE))) : this.ownerBlock.length > 10 ? .2 != this.cameraY && (this.cameraY = .2, 
            cameraUtils.moveCamera(this.camera, .4 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), .2, .4 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE))) : this.ownerBlock.length > 5 ? .17 != this.cameraY && (this.cameraY = .17, 
            cameraUtils.moveCamera(this.camera, .35 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), .17, .35 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE))) : this.ownerBlock.length > 3 ? .15 != this.cameraY && (this.cameraY = .15, 
            cameraUtils.moveCamera(this.camera, .3 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), .15, .3 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE))) : .135 != this.cameraY && (this.cameraY = .135, 
            cameraUtils.moveCamera(this.camera, .3 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), .135, .3 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE))); else if (this.gameStep == G.GAME_STEP.END && this.isWin) if (this.canRotation) e.camera.transform.localPositionX = .3 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), 
            e.camera.transform.localPositionY = .135, e.camera.transform.localPositionZ = .3 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE), 
            this.camera.transform.lookAt(this.lookPos, this.upPos), this.cameraAngle++; else {
                var t = this.heroBase.transform.localPosition, i = this.hero.transform.localPosition;
                if (.135 != this.cameraY) this.cameraY = .135, this.isEndRotation = !0, cameraUtils.moveCamera(this.camera, .3 * Math.sin(this.cameraAngle * Math.RAD_1_ANGLE), .135, .3 * Math.cos(this.cameraAngle * Math.RAD_1_ANGLE), function() {
                    e.canRotation = !0;
                    var a = new Laya.TimeLine();
                    new Laya.Vector3(.015, .08, 0), e.lookPos.x += t.x + .015, e.lookPos.y += t.y + .008, 
                    e.lookPos.z += t.z, a.to(e.lookPos, {
                        x: t.x,
                        y: t.y + i.y,
                        z: t.z
                    }, 2e3).play(0, !1);
                }), e.heroBase.eff2.active = !1, e.heroBase.eff2.active = !0; else if (!this.isEndRotation) {
                    this.canRotation = !0;
                    var a = new Laya.TimeLine();
                    e.lookPos.x += t.x + .015, e.lookPos.y += t.y + .008, e.lookPos.z += t.z, a.to(this.lookPos, {
                        x: t.x,
                        y: t.y + i.y,
                        z: t.z
                    }, 2e3).play(0, !1), a.on(Laya.Event.COMPLETE, this, function() {
                        uiManager.openUI("game/VictoryView.scene");
                    }), e.heroBase.eff2.active = !1, e.heroBase.eff2.active = !0;
                }
            }
        }, e.eatDiamond = function(e) {
            this.camera.viewport.project(e.transform._localPosition, this.camera.projectionViewMatrix, this.point), 
            this.diamondAnim(), this.curDiamondNum++;
        }, e.diamondAnim = function() {
            var e, t = new Laya.Vector2(G.Main.img_diamondBox.x, G.Main.img_diamondBox.y), i = new Laya.TimeLine();
            this.diamondImgArr.length <= 0 ? e = new Laya.Image() : (e = this.diamondImgArr[0], 
            this.diamondImgArr.splice(0, 1)), e.visible = !0, e.skin = "common/img_diamond.png", 
            e.x = this.point.x, e.y = this.point.y, e.anchorX = .5, e.anchorY = .5, e.scaleX = 0, 
            e.scaleY = 0, Laya.stage.addChild(e), i.to(e, {
                scaleX: .7,
                scaleY: .7
            }, 100).to(e, {
                x: t.x + 50,
                y: t.y
            }, 300, Laya.Ease.cubicOut).play(0, !1), i.on(Laya.Event.COMPLETE, this, function() {
                e.visible = !1, i.pause(), i.destroy(), this.diamondImgArr.push(e), PlayerData.getIns().setDiamond(1), 
                eventDispatcher.dispatchEvent(ulee.Event.ON_CHANGE_DIAMOND);
            }.bind(this));
        }, e.resetBlock = function() {
            let e = !1;
            for (var t = 0, i = null, a = null; t < this.ownerBlock.length; t++) (a = (i = this.ownerBlock[t]).transform._localPosition).y > .02 * t + .01 && (e = !0, 
            a.y -= .005, a.y < .02 * t + .01 && (a.y = .02 * t + .01), ModelCfg.getIns().setLocalPosition(i, a.x, a.y, a.z));
            let s = this.hero.transform._localPosition;
            return s.y > .02 * (t - 1) + .025 && (e = !0, s.y -= .005, s.y < .02 * (t - 1) + .025 && (s.y = .02 * (t - 1) + .025), 
            ModelCfg.getIns().setLocalPosition(this.hero, s.x, s.y, s.z)), !e;
        }, e.reduceBlock = function() {
            if (audioManager.playSound(7, null, !0), (t = this.ownerBlock[0]).removeSelf(), 
            t.destroy(), this.ownerBlock.removeAt(0), this.hero.transform._localPosition.y > .02 * (this.ownerBlock.length - 1) + .025 && (ModelCfg.getIns().setLocalPosition(this.hero, 0, .02 * (this.ownerBlock.length - 1) + .025, 0), 
            ModelCfg.getIns().playAnim(this.hero, "land", this, function() {
                ModelCfg.getIns().playAnim(this.hero, "idle");
            }.bind(this), 4, .2)), 0 != this.ownerBlock.length) for (var e = 0, t = null, i = null; e < this.ownerBlock.length; e++) (i = (t = this.ownerBlock[e]).transform._localPosition).y = .02 * e + .01, 
            ModelCfg.getIns().setLocalPosition(t, i.x, i.y, i.z); else this.endGame();
        }, e.createScene = function(e) {
            this.touchNode = e, this.newScene = this.touchNode.addChild(new Laya.Scene3D()), 
            this.cameraBase = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1e-4, 1e-4, 1e-4))), 
            this.cameraBase.transform.position = new Laya.Vector3(0, 0, 0), this.cameraBase.meshRenderer.material = this.alpahMaterial, 
            this.cameraBase.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), this.cameraAngle = 0, 
            this.camera = cameraUtils.createCamera(new Laya.Vector3(.1, .135, .3), new Laya.Vector3(0, 0, 0), !1), 
            this.lookPos = new Laya.Vector3(.015, .08, 0), this.upPos = new Laya.Vector3(0, 1, 0), 
            this.camera.transform.lookAt(this.lookPos, this.upPos), this.cameraBase.addChild(this.camera), 
            this.newScene.enableFog = !0, this.newScene.fogColor = new Vector3(176 / 255, 224 / 255, 230 / 255), 
            this.newScene.fogStart = 1, this.newScene.fogRange = 2;
            var t = new Laya.DirectionLight();
            this.newScene.addChild(t), t.color = new Laya.Vector3(.2, .2, .2);
            var i = t.transform.worldMatrix;
            i.setForward(new Laya.Vector3(.5, -1, -.5)), 
            t.transform.worldMatrix = i, 
            this.touchNode.on(Laya.Event.MOUSE_DOWN, this, this.onTouch), 
            this.touchNode.on(Laya.Event.MOUSE_UP, this, this.onTouchUp), 
            this.touchNode.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
        }, e.initMaterial = function() {
            this.alpahMaterial = new Laya.BlinnPhongMaterial(), this.alpahMaterial.renderMode = 2, 
            this.alpahMaterial.albedoColorA = 0;
        }, e.updateHero = function() {
            this.heroBase && this.heroBase.destroy();
            var e = this;
            ModelCfg.getIns().getModelById(40003, function(t) {
                e.heroBase = t, t._children[0]._geometryFilter.alignment = 1, t._children[0].transform.localPositionY = .001, 
                this.newScene.addChild(t), this.ownerBlock = [], ModelCfg.getIns().getModelById(40001, function(t) {
                    e.heroBase.eff = t, e.heroBase.eff.active = !1, e.heroBase.addChild(t), ModelCfg.getIns().setLocalScale(t, .04, .04, .04);
                }), ModelCfg.getIns().getModelById(40002, function(t) {
                    e.heroBase.eff2 = t, e.heroBase.eff2.active = !1, e.heroBase.addChild(t), ModelCfg.getIns().setLocalPosition(t, 0, .1, 0), 
                    ModelCfg.getIns().setLocalScale(t, .04, .04, .04);
                }), ModelCfg.getIns().getModelById(10001, function(t) {
                    ModelCfg.getIns().setMaterialPic(t, "res/obj_texture/" + D.shopConfig[PlayerData.getIns().getCurEquipID()].picture), 
                    e.heroBase.addChild(t), ModelCfg.getIns().setLocalPosition(t, 0, .01, 0), e.ownerBlockModel = t, 
                    e.ownerBlock.push(t);
                }), ModelCfg.getIns().getModelById(30001, function(t) {
                    e.hero = t, ModelCfg.getIns().setLocalRotation(e.hero, 0, 180, 0), ModelCfg.getIns().setLocalPosition(e.hero, 0, .025, 0), 
                    e.heroBase.addChild(e.hero);
                });
            }.bind(this));
        }, e.updateHeroBase = function() {
            ModelCfg.getIns().setMaterialPic(this.ownerBlock[0], "res/obj_texture/" + D.shopConfig[PlayerData.getIns().getCurEquipID()].picture);
            for (var e = 0; e < this.roadArr.length; e++) for (var t = this.roadArr[e].blockArr, i = 0; i < t.length; i++) 2 == t[i].type && ModelCfg.getIns().setMaterialPic(t[i], "res/obj_texture/" + D.shopConfig[PlayerData.getIns().getCurEquipID()].picture);
        }, e.createRoad = function() {
            var e = D.roundConfig[PlayerData.getIns().getRoundId()].roadIds;
            let t = this;
            ModelCfg.getIns().getModelById(20009, function(e) {
                var i = utils.getChildDeep(e, "road").addComponent(Laya.PhysicsCollider);
                i.collisionGroup = G.COLLIDERGROUP.ROAD;
                var a = new Laya.MeshColliderShape();
                a.mesh = utils.getChildDeep(e, "road").meshFilter.sharedMesh, i.colliderShape = a, 
                t.newScene.addChild(e), e.transform.rotate(new Laya.Vector3(-90 * Math.RAD_1_ANGLE, 0, 0)), 
                ModelCfg.getIns().setLocalPosition(e, 0, -.02, .25), e.blockArr = [], e.obstacleArr = [];
            }), this.totalLength += .25;
            let i = null;
            for (let a = 0, s = 0; a < e.length; a++) {
                i = D.roadConfig[e[a]], this.totalLength += .5;
                let n = i.obstacle;
                ModelCfg.getIns().getModelById(i.landform, function(e) {
                    e.transform.rotate(new Laya.Vector3(-90 * Math.RAD_1_ANGLE, 0, 0));
                    var i = utils.getChildDeep(e, "road").addComponent(Laya.PhysicsCollider);
                    i.collisionGroup = G.COLLIDERGROUP.ROAD;
                    var o = new Laya.MeshColliderShape();
                    o.mesh = utils.getChildDeep(e, "road").meshFilter.sharedMesh, i.colliderShape = o, 
                    t.newScene.addChild(e), t.roadArr.push(e), ModelCfg.getIns().setLocalPosition(e, 0, -.02, .5 * -a - .25), 
                    e.blockArr = [], e.obstacleArr = [];
                    let r = 0;
                    for (s = 0; s < n.length; s++) if (0 != (r = parseInt(n[s]))) {
                        let i = r, n = .5 * -a - .25 - .02 * s, o = e;
                        Laya.timer.once(5, this, function() {
                            t.createObstacle(o, i, n);
                        });
                    }
                });
            }
            let a = 0, s = 1;
            for (let e = 0; e < 16; e++) ModelCfg.getIns().getModelById(20010, function(i) {
                t.newScene.addChild(i), t.endBanArr.push(i);
                let n = i.addComponent(Laya.PhysicsCollider), o = new Laya.MeshColliderShape();
                o.mesh = i._children[0].meshFilter.sharedMesh, n.colliderShape = o, 0 != e ? (4 == a && (4 == ++s && (s = 5), 
                a = 0), ModelCfg.getIns().setMaterialPic(i, "res/obj_texture/" + s + "x.png"), i.multipe = s, 
                n.collisionGroup = G.COLLIDERGROUP.BET, a++) : n.collisionGroup = G.COLLIDERGROUP.ARRIVE, 
                i.transform.rotate(new Laya.Vector3(-90 * Math.RAD_1_ANGLE, 0, 0)), ModelCfg.getIns().setLocalPosition(i, 0, -.02, .1 * -e - t.totalLength);
            });
        }, e.createObstacle = function(e, t, i) {
            let a = this, s = D.obstacleConfig[t].position;
            for (let t = 0, n = 0; t < s.length; t++) {
                let o = s[t].split("");
                for (let s = 0; s < o.length; s++) {
                    n = parseInt(o[s]);
                    let r = .02 * s - .04, l = .01 + .02 * t;
                    1 == n ? ModelCfg.getIns().getModelById(10001, function(t) {
                        e.obstacleArr.push(t), a.ray.origin.x = r, a.ray.origin.y = 1, a.ray.origin.z = i, 
                        a.ray.direction.x = 0, a.ray.direction.y = -1, a.ray.direction.z = 0;
                        var s = G.COLLIDERGROUP.ROAD;
                        a.newScene.physicsSimulation.rayCast(a.ray, a.outHitInfo, 1.5, s, s), a.outHitInfo.succeeded && (l = a.outHitInfo.point.y + l), 
                        ModelCfg.getIns().setLocalPosition(t, r, l, i), a.newScene.addChild(t);
                    }) : 2 == n ? ModelCfg.getIns().getModelById(10001, function(t) {
                        e.blockArr.push(t), t.type = 2, ModelCfg.getIns().setMaterialPic(t, "res/obj_texture/" + D.shopConfig[PlayerData.getIns().getCurEquipID()].picture), 
                        a.ray.origin.x = r, a.ray.origin.y = 1, a.ray.origin.z = i, a.ray.direction.x = 0, 
                        a.ray.direction.y = -1, a.ray.direction.z = 0;
                        var s = G.COLLIDERGROUP.ROAD;
                        a.newScene.physicsSimulation.rayCast(a.ray, a.outHitInfo, 1.5, s, s), a.outHitInfo.succeeded && (l = a.outHitInfo.point.y + l), 
                        ModelCfg.getIns().setLocalPosition(t, r, l, i), a.newScene.addChild(t);
                    }) : 3 == n && ModelCfg.getIns().getModelById(10002, function(t) {
                        e.blockArr.push(t), t.type = 3, a.ray.origin.x = r, a.ray.origin.y = 1, a.ray.origin.z = i, 
                        a.ray.direction.x = 0, a.ray.direction.y = -1, a.ray.direction.z = 0;
                        var s = G.COLLIDERGROUP.ROAD;
                        a.newScene.physicsSimulation.rayCast(a.ray, a.outHitInfo, 1.5, s, s), a.outHitInfo.succeeded && (l = a.outHitInfo.point.y + l), 
                        ModelCfg.getIns().setLocalPosition(t, r, l, i), a.newScene.addChild(t);
                    });
                }
            }
        }, e.clearModel = function() {
            for (var e = 0; e < this.endBanArr.length; e++) {
                this.endBanArr[e].destroy();
            }
            for (e = 0; e < this.roadArr.length; e++) {
                var t = this.roadArr[e];
                if (t.obstacleArr.length > 0) for (var i = 0; i < t.obstacleArr.length; i++) {
                    t.obstacleArr[i].destroy();
                }
                if (t.blockArr.length > 0) for (var a = 0; a < t.blockArr.length; a++) {
                    t.blockArr[a].destroy();
                }
                t.destroy();
            }
        }, e.onTouch = function(e) {
            //!uiManager.getUI("prefab/PopupAD.scene") && this.hero && this.hero.transform && (G.SideAD.isIn ? G.SideAD.onSwitch() : this.gameStep != G.GAME_STEP.END && (this.isTouch = !0, 
            this.hero && this.hero.transform && (this.gameStep != G.GAME_STEP.END && (this.isTouch = !0, 
            this.gameStep == G.GAME_STEP.READY && 
            // (uleeSDK 
            //     ? ("wx" == uleeSDK.platform && uleeSDK.pf.aldStage.onStart({
            //     stageId: PlayerData.getIns().getRoundId() + "",
            //     stageName: "第" + PlayerData.getIns().getRoundId() + "关"}), 
            //     "0" != G.ZSCONFIG.zs_click_award_num 
            //     ? uleeSDK.showClickUI(function() {
            //     this.updateKey || (this.updateKey = updateManager.frameLoop(1, this, this.loop)), 
            //     this.gameStep = G.GAME_STEP.START, 
            //     G.Main.box_mune.visible = !1, 
            //     G.Main.box_battleUI.visible = !0, 
            //     G.Main.initSet(!0), 
            //     audioManager.playSound(1);
            //     }.bind(this)) 
            //     : (this.updateKey || (this.updateKey = updateManager.frameLoop(1, this, this.loop)), 
            //     this.gameStep = G.GAME_STEP.START, G.Main.box_mune.visible = !1, G.Main.box_battleUI.visible = !0, 
            //     G.Main.initSet(!0), audioManager.playSound(1)), G.LOADMUSIC && audioManager.playMusic(10), 
            //     uleeSDK.showAD(!1), uiManager.getUI("prefab/BottomAD.scene") 
            //     ? uiManager.getUI("prefab/BottomAD.scene").visible = !0 
            //     : uiManager.openUI("prefab/BottomAD.scene")) 
            //     : 
            (this.updateKey || (this.updateKey = updateManager.frameLoop(1, this, this.loop)), 
            this.gameStep = G.GAME_STEP.START, 
            G.Main.box_mune.visible = !1, 
            G.Main.box_battleUI.visible = !0, 
            G.Main.initSet(!0),
            audioManager.playSound(1),
            audioManager.playMusic(10)
            ), 
            e && (this.lastTouchX = e.stageX), 
            console.log("onTouch")));
        }, e.onTouchUp = function(e) {
            this.isTouch && this.gameStep != G.GAME_STEP.END && (this.isTouch = !1, console.log("onTouchUp"));
        }, e.onTouchMove = function(e) {
            if (this.isTouch && this.gameStep != G.GAME_STEP.END) {
                var t = D.shopConfig[PlayerData.getIns().getCurEquipID()].flapSpeed;
                this.lastTouchX -= .5;
                var i = this.heroBase.transform._localPosition;
                e.stageX - this.lastTouchX > 0 ? (i.x < .04 && (i.x += (e.stageX - this.lastTouchX) / t, 
                i.x = i.x > .04 ? .04 : i.x), ModelCfg.getIns().setLocalPosition(this.heroBase, i.x, i.y, i.z)) : e.stageX - this.lastTouchX < 0 && (i.x > -.04 && (i.x += (e.stageX - this.lastTouchX) / t, 
                i.x = i.x < -.04 ? -.04 : i.x), ModelCfg.getIns().setLocalPosition(this.heroBase, i.x, i.y, i.z)), 
                this.lastTouchX = e.stageX;
            }
        };
    }(), window.battleMgr = new ulee.BattleMgr();
    class v {
        constructor() {
            this.filePath = "res/Conventional/", this.initModelId = [ 10001, 20001, 20002, 20003, 20004, 20005, 30001, 40001 ], 
            this.models = {};
        }
        getModelUrlByName(e) {
            return this.filePath + e + ".lh";
        }
        getInitModelNames() {
            let e = [], t = this.initModelId;
            for (let i = 0; i < t.length; i++) {
                let a = D.PrefabsPath[t[i]].chs;
                e.push(a);
            }
            return e;
        }
        getInitModelUrls() {
            let e = [], t = this.initModelId;
            for (let i = 0; i < t.length; i++) {
                let a = D.PrefabsPath[t[i]].chs;
                e.push(this.getModelUrlByName(a));
            }
            return e;
        }
        initModels(e = null) {
            let t = this.getInitModelUrls();
            Laya.loader.create(t, new Laya.Handler(this, function() {
                let i = this.getInitModelNames();
                for (let e = 0; e < i.length; e++) this.models[i[e]] = Laya.loader.getRes(t[e].url);
                e && e();
            }));
        }
        loadModel(e, t) {
            let i = this.getModelUrlByName(e);
            Laya.loader.create([ i ], new Laya.Handler(this, function() {
                this.models[e] = Laya.loader.getRes(i);
                let a = this.models[e].clone();
                t && t(a);
            }));
        }
        getModelByName(e, t) {
            let i = this.models[e];
            if (!i) return this.loadModel(e, t);
            t(i.clone());
        }
        getModelById(e, t) {
            let i = D.PrefabsPath[e].chs;
            return this.getModelByName(i, t);
        }
        getPosition(e) {
            return e.transform._localPosition;
        }
        setLocalPosition(e, t, i, a) {
            let s = e.transform._localPosition;
            s.x = t, s.y = i, s.z = a, e.transform.localPosition = e.transform._localPosition;
        }
        setLocalScale(e, t, i, a) {
            void 0 === t && (t = 1), void 0 === i && (i = t), void 0 === a && (a = t);
            let s = e.transform._localScale;
            s.x = t, s.y = i, s.z = a, e.transform.localScale = e.transform._localScale;
        }
        setLocalRotation(e, t, i, a) {
            if (!e) return;
            e.angleV3 || (e.angleV3 = new Laya.Vector3(), e.radV3 = new Laya.Vector3()), e.angleV3.x = i, 
            e.angleV3.y = t, e.angleV3.z = a;
            let s = e.radV3;
            s.x = i * Math.RAD_1_ANGLE, s.y = t * Math.RAD_1_ANGLE, s.z = a * Math.RAD_1_ANGLE;
            var n = e.transform;
            Laya.Quaternion.createFromYawPitchRoll(s.x, s.y, s.z, n._localRotation), n.localRotation = n._localRotation;
        }
        setAlpha(e, t) {
            e && e._alpha != t && (this.setAlalbedo(e, t), this._alpha = t);
        }
        setAlalbedo(e, t, i, a, s) {
            if (e) {
                var n = e.meshRenderer || e.skinnedMeshRenderer;
                if (n) for (var o = n.materials, r = o.length - 1; r >= 0; r--) {
                    var l = o[r];
                    0 == l.cull && 1 == l.blend && 770 == l.srcBlend && 1 == l.dstBlend || (t < 1 && (l.renderMode = Laya[l.constructor.name].RENDERMODE_TRANSPARENT), 
                    void 0 === i && (i = l.albedoColorR), void 0 === a && (a = l.albedoColorG), void 0 === s && (s = l.albedoColorB), 
                    l.albedoColorA = t, l.albedoColorR = i, l.albedoColorG = a, l.albedoColorB = s);
                } else for (var h = 0; h < e.numChildren; h++) {
                    var d = e.getChildAt(h);
                    this.setAlalbedo(d, t, i, a, s);
                }
            }
        }
        receiveShadow(e) {
            for (var t = 0; t < e.numChildren; t++) {
                var i = e.getChildAt(t);
                i instanceof Laya.MeshSprite3D ? i.meshRender.receiveShadow = !0 : i instanceof Laya.SkinnedMeshSprite3D && (i.skinnedMeshRender.receiveShadow = !0);
            }
        }
        showShashow(e, t) {
            t = null == t || t;
            for (var i = 0; i < e.numChildren; i++) {
                var a = e.getChildAt(i);
                a instanceof Laya.MeshSprite3D ? a.meshRender.castShadow = t : a instanceof Laya.SkinnedMeshSprite3D && (a.skinnedMeshRender.castShadow = t), 
                a.numChildren > 0 && this.showShashow(a, t);
            }
        }
        playAnim(e, t, i, a, s, n) {
            let o = e.getChildAt(0).getComponent(Laya.Animator);
            if (o) {
                n ? o.crossFade(t, n, 0) : o.play(t);
                var r = o._controllerLayers[0]._statesMap[t];
                r.script || (r.addScript(_), r.script = r._scripts[0]), s || (s = 1), r.speed = s, 
                a && (a = a.bind(i)), r.script.setComplete(a), e.curAnim = t, e.curAnimSpeed = s;
            } else console.error(e, "动作控制器未加载！"), a && a.call(i);
        }
        stopAnim(e, t) {
            let i = e.getChildAt(0).getComponent(Laya.Animator);
            i && (t || (t = e.curAnim), t && (i._controllerLayers[0]._statesMap[t].speed = 0));
        }
        clearAnim(e) {
            e.getChildAt(0).getComponent(Laya.Animator)._controllerLayers[0]._statesMap = [];
        }
        setMaterialPic(e, t) {
            if (e) {
                if (e instanceof Laya.MeshSprite3D) var i = e.meshRenderer; else if (e instanceof Laya.SkinnedMeshSprite3D) i = e.skinnedMeshRenderer;
                if (i) if (i.material) Laya.Texture2D.load(t, Laya.Handler.create(this, function(e) {
                    i.material.albedoTexture = e;
                })); else {
                    var a = new Laya.BlinnPhongMaterial();
                    Laya.Texture2D.load(t, Laya.Handler.create(this, function(e) {
                        a.albedoTexture = e, a.albedoIntensity = 1;
                    })), i.material = a;
                }
                for (var s = 0; s < e.numChildren; s++) this.setMaterialPic(e._children[s], t);
            }
        }
        addMeshCollider(e, t) {
            if (t || (e.colliders = [], t = e.colliders), e.meshFilter) {
                var i = e.addComponent(Laya.PhysicsCollider);
                let a = new Laya.MeshColliderShape();
                a.mesh = e.meshFilter.sharedMesh, i.colliderShape = a, t.push(i);
            }
            for (var a = e.numChildren, s = 0; s < a; s++) this.addMeshCollider(e._children[s], t);
        }
        static getIns() {
            return this._ins || (this._ins = new v()), this._ins;
        }
    }
    window.ModelCfg = v;
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(f.width, f.height) : Laya.init(f.width, f.height, Laya.WebGL), 
            Laya.stage.bgColor = "#000000", 
            Laya.Physics && Laya.Physics.enable(), 
            Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = "showall", 
            //Laya.stage.screenMode = f.screenMode, 
            Laya.stage.alignV = f.alignV, 
            Laya.stage.alignH = f.alignH, 
            Laya.URL.exportSceneToJson = f.exportSceneToJson, 
            (f.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            f.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), 
            f.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, 
            // Laya.stage._setScreenSize = Laya.stage.setScreenSize, 
            // Laya.stage.setScreenSize = function(e, t, i) {
            //     if (!Laya.stage._isInputting()) {
            //         var a = function() {
            //             if (G.SCREEN_MODE == G.SCREEN_MODETYPE.H) {
            //                 var e = {}, t = Laya.Browser.clientWidth * Laya.Browser.pixelRatio, i = Laya.Browser.clientHeight * Laya.Browser.pixelRatio, a = 1559 / 854, s = 1559 / 720, n = o = Laya.Browser.onPC ? i / t : i > t ? i / t : t / i;
            //                 o > 1559 / 720 ? (e.scaleMode = Laya.Stage.SCALE_FIXED_AUTO, e.height = 720, e.width = 1559, 
            //                 G.ratio = Laya.Browser.clientWidth / Laya.stage.width) : o < 1559 / 720 ? (e.scaleMode = Laya.Stage.SCALE_FIXED_AUTO, 
            //                 e.height = 854, e.width = 1559, G.ratio = Laya.Browser.clientHeight / Laya.stage.height) : (e.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT, 
            //                 e.height = 720, e.width = 1559, G.ratio = Laya.Browser.clientWidth / Laya.stage.width), 
            //                 e.trueRate = n;
            //             } else {
            //                 var o;
            //                 e = {}, t = Laya.Browser.clientWidth * Laya.Browser.pixelRatio, i = Laya.Browser.clientHeight * Laya.Browser.pixelRatio, 
            //                 a = 1559 / 854, s = 1559 / 720, n = o = Laya.Browser.onPC ? i / t : i > t ? i / t : t / i, 
            //                 o > s ? (e.scaleMode = Laya.Stage.SCALE_FIXED_AUTO, e.height = 1559, e.width = 720, 
            //                 G.ratio = Laya.Browser.clientWidth / Laya.stage.width) : o < a ? (e.scaleMode = Laya.Stage.SCALE_FIXED_AUTO, 
            //                 e.height = 1559, e.width = 854, G.ratio = Laya.Browser.clientHeight / Laya.stage.height) : (e.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT, 
            //                 e.height = 1559, e.width = 854, G.ratio = Laya.Browser.clientWidth / Laya.stage.width), 
            //                 e.trueRate = n;
            //             }
            //             return e;
            //         }();
            //         this._scaleMode = a.scaleMode, this.designHeight = a.height, this.designWidth = a.width, 
            //         this._setScreenSize(e, t), i || Laya.timer.once(2e3, null, function() {
            //             Laya.stage.setScreenSize(Laya.Browser.clientWidth * Laya.Browser.pixelRatio, Laya.Browser.clientHeight * Laya.Browser.pixelRatio, !0);
            //         });
            //     }
            // }, 
            Laya.stage._changeCanvasSize(), 
            //Laya.LocalStorage.clear();
            
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya.Browser.onMiniGame || (window.zs = null, window.uleeSDK = null), window.updateManager = new ulee.UpdateManager(), 
            window.uiManager = new ulee.UIManager(), window.audioManager = new ulee.AudioManager(), 
            uleeSDK && uleeSDK.setVibrate(PlayerData.getIns().getVibrate()), window.bondSDK || (window.bondSDK = null), 
            G.ISSOUND = PlayerData.getIns().getSound(), window.zs && window.zs.sdk && (zs.sdk.loadAd(function(e) {
                console.log(e), G.ADDATA = e.promotion;
            }), zs.sdk.login(function(e) {
                console.log("登录", e), G.openId = e;
            }, function(e) {
                console.log(e);
            }), zs.sdk.loadCfg(function(e) {
                console.log(e), G.ZSCONFIG = e;
            }, function(e) {
                console.log(e);
            })), eventDispatcher.addEventListen(ulee.Event.ON_DATA_LOAD, this, function() {
                window.dataManager = new ulee.DataManager(), dataManager.initData(), f.startScene && uiManager.openUI(f.startScene);
            }), initData();
        }
    }();
}();