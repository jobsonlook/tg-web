function gameMain() {
    o = document.getElementById("container"), i = document.getElementById("shake_container"), r = document.getElementById("game_area"), a = document.getElementById("rotate-device-instruction"), s = document.getElementById("fullscreen-button"), setTimeout(function() {
        l = new n.goldenratio.Main
    }, 100)
}

function t() {
    m = !1;
    var t = 9e4;
    setTimeout(function() {
        m = !0
    }, t)
}
var e = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        };
        return function(e, n) {
            function o() {
                this.constructor = e
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
    }(),
    n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.LAUNCH_GAME = "com.goldenratio.CoreEventType.LAUNCH_GAME", t.SOUND_LOADED = "com.goldenratio.CoreEventType.SOUND_LOADED", t.SOUND_ERROR = "com.goldenratio.CoreEventType.SOUND_ERROR", t.SOUND_PROGRESS = "com.goldenratio.CoreEventType.SOUND_PROGRESS", t
        }();
        t.CoreEventType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.getUA = function() {
                return navigator.userAgent ? navigator.userAgent : ""
            }, t.isTouchDevice = function() {
                return "ontouchstart" in window || window.navigator.msMaxTouchPoints > 0 || window.navigator.maxTouchPoints > 0
            }, t.isGyroSupported = function() {
                return "ondeviceorientation" in window
            }, t.isMobileDevice = function() {
                var e = t.UA;
                return !!(e.indexOf("mobile") >= 0 || e.match(/android/i) || e.match(/webos/i) || e.match(/iphone/i) || e.match(/ipad/i) || e.match(/ipod/i) || e.match(/blackberry/i) || e.match(/windows phone/i) || e.match(/mobile/i) || e.match(/tablet/i) || e.match(/silk/i))
            }, t.isConsoleDevice = function() {
                var e = t.UA;
                return !!(e.match(/playstation/i) || e.match(/xbox/i) || e.match(/ouya/i) || e.match(/nintendo/i))
            }, t.lockScreenToPortrait = function() {
                var t = "portrait-primary";
                screen.orientation && screen.orientation.lock && screen.orientation.lock(t).then(function() {}).catch(function() {});
                var e = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || null;
                e && e(t)
            }, t.lockScreenToLandscape = function() {
                var t = "landscape-primary";
                screen.orientation && screen.orientation.lock && screen.orientation.lock(t).then(function() {}).catch(function() {});
                var e = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || null;
                e && e(t)
            }, t.isLandscapeMode = function() {
                var t = screen.orientation || screen.mozOrientation || screen.msOrientation || null;
                if (t && ("landscape-primary" == t.type || "landscape-secondary" == t.type)) return !0;
                var e = "number" == typeof window.orientation;
                if (e) {
                    var n = window.orientation || NaN;
                    return 90 === n || n === -90
                }
                return window.innerWidth > window.innerHeight
            }, t.supportsGamePad = function() {
                return "undefined" != typeof navigator.getGamepads || "undefined" != typeof navigator.webkitGetGamepads
            }, t.getGamePads = function() {
                return "undefined" != typeof navigator.getGamepads ? navigator.getGamepads() : "undefined" != typeof navigator.webkitGetGamepads ? navigator.webkitGetGamepads : null
            }, t.atleastOneGamepadConnected = function() {
                var e = t.getGamePads();
                if (e)
                    for (var n = e.length - 1; n >= 0; n--) {
                        var o = e[n];
                        if (o && o.connected) return !0
                    }
                return !1
            }, t.UA = t.getUA().toLowerCase(), t
        }();
        t.DeviceUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.PREFIX = "mobi.labrat.cardinal_run.", t.MUTE_KEY = t.PREFIX + "MUTE_KEY", t.FULLSCREEN_CHECKBOX = t.PREFIX + "FULLSCREEN_CHECKBOX", t.CONTROL_TYPE = t.PREFIX + "CONTROL_TYPE", t.OPTIONS_SCALE_FIT = t.PREFIX + "OPTIONS_SCALE_FIT", t.SCORE = t.PREFIX + "SCORE", t
        }();
        t.LocalKey = e;
        var n = function() {
            function e() {}
            return e.saveAsPromise = function(t, n) {
                return new Promise(function(o, i) {
                    localforage.setItem(t, n, function(n, r) {
                        if (n) return void i();
                        var a = e.convertValueToHash(r),
                            s = t + "_data";
                        localforage.setItem(s, a, function(t, e) {
                            return t ? void i() : void o(!0)
                        })
                    })
                })
            }, e.save = function(t, n, o) {
                localforage.setItem(t, n, function(n, i) {
                    if (n && o) return void o(!1);
                    var r = e.convertValueToHash(i),
                        a = t + "_data";
                    localforage.setItem(a, r, function(t, e) {
                        o && o(!0)
                    })
                })
            }, e.convertValueToHash = function(t) {
                var n = t + e.HASH;
                return CryptoJS.MD5(n).toString()
            }, e.get = function(t) {
                return new Promise(function(n, o) {
                    localforage.getItem(t).then(function(i) {
                        if (!i) return void o();
                        var r = i;
                        localforage.getItem(t + "_data").then(function(t) {
                            var i = t;
                            if (r && i) {
                                var a = e.convertValueToHash(r);
                                a == i ? n(r) : o()
                            } else o()
                        }).catch(function() {
                            o()
                        })
                    }).catch(function() {
                        o()
                    })
                })
            }, e.getNumber = function(t) {
                return new Promise(function(n, o) {
                    var i = e.get(t);
                    i.then(function(t) {
                        n(parseInt(t))
                    }).catch(function() {
                        o("local storage doesn't contain value fro key " + t)
                    })
                })
            }, e.getBoolean = function(n) {
                return new Promise(function(o, i) {
                    var r = e.get(n);
                    r.then(function(e) {
                        o(t.StringUtils.convertToBoolean(e))
                    }).catch(function() {
                        i()
                    })
                })
            }, e.HASH = "0dE;RC=@unZXB`[H=1x3Y^G47Pv5ST", e
        }();
        t.LocalStorageUtils = n
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.setBackgroundColor = function(t, e) {
                t.style.backgroundColor = e
            }, t.setWidth = function(t, e) {
                t.style.width = e + "px"
            }, t.setHeight = function(t, e) {
                t.style.height = e + "px"
            }, t.setWidthHeight = function(e, n, o) {
                t.setWidth(e, n), t.setHeight(e, o)
            }, t.setVisible = function(t, e) {
                t.style.display = e ? "block" : "none"
            }, t.setVisibleByDivID = function(e, n, o) {
                t.setVisible(n.getElementById(e), o)
            }, t.setTransformTranslate = function(t, e, n) {
                var o = "translate(" + e + "px, " + n + "px)";
                t.style.transform = o, t.style.webkitTransform = o, t.style.msTransform = o, t.style.MozTransform = o, t.style.OTransform = o
            }, t
        }();
        t.DOMUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.UP_ARROW = 12, t.DOWN_ARROW = 13, t.LEFT_ARROW = 14, t.RIGHT_ARROW = 15, t.A_BUTTON = 0, t.B_BUTTON = 1, t.X_BUTTON = 2, t.Y_BUTTON = 3, t.LEFT_SHOULDER = 4, t.RIGHT_SHOULDER = 5, t.BACK_BUTTON = 8, t.START_BUTTON = 9, t
        }();
        t.GamepadButtonIndex = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this.type = t, this.gamepadIndex = 0
            }
            return t.prototype.toString = function() {
                return "GamepadControlEvent, " + this.type + " gamepadIndex = " + this.gamepadIndex
            }, t.BUTTON_DOWN = "GamepadControlEvent.event.down", t.BUTTON_UP = "GamepadControlEvent.event.up", t.CONNECTED = "GamepadControlEvent.event.CONNECTED", t.DISCONNECTED = "GamepadControlEvent.event.DISCONNECTED", t
        }();
        t.GamepadControlEvent = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.removeAllChildren = function(t) {
                if (null != t)
                    for (var e = t.children.length - 1, n = e; n >= 0; n--) t.removeChild(t.children[n])
            }, t.removeFromParent = function(t) {
                t && t.parent && t.parent.removeChild(t)
            }, t.removeListFromParent = function(t) {
                if (t)
                    for (var e = t.length - 1, n = e; n >= 0; n--) this.removeFromParent(t[n])
            }, t.drawDummyRect = function(t, e) {
                t.lineStyle(1, 16711680, 1), t.drawRect(e.x, e.y, e.width, e.height)
            }, t.moveToTop = function(t) {
                var e = t.parent;
                e && e.addChild(t)
            }, t
        }();
        t.DisplayObjectUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e;
        ! function(t) {
            var e = function() {
                function t() {
                    this.bg_square = "bg_square", this.grid_bg = "grid_bg", this.particle = "particle", this.crt_frame_scanlines = "crt_frame_scanlines", this.levelup_txt = "levelup_txt", this.bestscore_txt = "bestscore_txt", this.gameover_txt = "gameover_txt", this.go_txt = "go_txt", this.paused_txt = "paused_txt", this.playagain_txt = "playagain_txt", this.quit_txt = "quit_txt", this.ready_txt = "ready_txt", this.youwin_txt = "youwin_txt", this.more_games_txt = "more_games_txt", this.wininfo_txt = "wininfo_txt", this.resume_txt = "resume_txt", this.score_txt = "score_txt", this.title_txt = "title_txt", this.clickinfo = "clickinfo", this.combo = "combo", this.copy_labrat = "copy_labrat", this.go_score_0 = "go_score_0", this.go_score_1 = "go_score_1", this.go_score_2 = "go_score_2", this.go_score_3 = "go_score_3", this.go_score_4 = "go_score_4", this.go_score_5 = "go_score_5", this.go_score_6 = "go_score_6", this.go_score_7 = "go_score_7", this.go_score_8 = "go_score_8", this.go_score_9 = "go_score_9", this.mute_button = "mute_button", this.new_score = "new_score", this.pause_button = "pause_button", this.plusone = "plusone", this.score_0_txt = "score_0_txt", this.score_1_txt = "score_1_txt", this.score_2_txt = "score_2_txt", this.score_3_txt = "score_3_txt", this.score_4_txt = "score_4_txt", this.score_5_txt = "score_5_txt", this.score_6_txt = "score_6_txt", this.score_7_txt = "score_7_txt", this.score_8_txt = "score_8_txt", this.score_9_txt = "score_9_txt", this.startgame = "startgame", this.tapinfo = "tapinfo", this.unmute_button = "unmute_button"
                }
                return t
            }();
            t.Frame = e;
            var n = function() {
                function t() {}
                return t.prototype.bg_square = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("bg_square");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.grid_bg = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("grid_bg");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.particle = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("particle");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.crt_frame_scanlines = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("crt_frame_scanlines");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.levelup_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("levelup_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.bestscore_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("bestscore_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.gameover_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("gameover_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.paused_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("paused_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.playagain_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("playagain_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.quit_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("quit_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.ready_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("ready_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.youwin_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("youwin_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.more_games_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("more_games_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.wininfo_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("wininfo_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.resume_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("resume_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.title_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("title_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.clickinfo = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("clickinfo");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.combo = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("combo");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.copy_labrat = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("copy_labrat");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_0 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_0");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_1 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_1");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_2 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_2");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_3 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_3");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_4 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_4");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_5 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_5");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_6 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_6");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_7 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_7");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_8 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_8");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.go_score_9 = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("go_score_9");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.mute_button = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("mute_button");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.new_score = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("new_score");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.pause_button = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("pause_button");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.plusone = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("plusone");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_0_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_0_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_1_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_1_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_2_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_2_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_3_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_3_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_4_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_4_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_5_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_5_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_6_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_6_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_7_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_7_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_8_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_8_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.score_9_txt = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("score_9_txt");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.startgame = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("startgame");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.tapinfo = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("tapinfo");
                    return e.cacheAsBitmap = t, e
                }, t.prototype.unmute_button = function(t) {
                    void 0 === t && (t = !1);
                    var e = PIXI.Sprite.fromFrame("unmute_button");
                    return e.cacheAsBitmap = t, e
                }, t
            }();
            t.Sprite = n;
            var o = function() {
                function t() {}
                return t.prototype.bg_square = function() {
                    return PIXI.Texture.fromFrame("bg_square")
                }, t.prototype.grid_bg = function() {
                    return PIXI.Texture.fromFrame("grid_bg")
                }, t.prototype.particle = function() {
                    return PIXI.Texture.fromFrame("particle")
                }, t.prototype.crt_frame_scanlines = function() {
                    return PIXI.Texture.fromFrame("crt_frame_scanlines")
                }, t.prototype.levelup_txt = function() {
                    return PIXI.Texture.fromFrame("levelup_txt")
                }, t.prototype.bestscore_txt = function() {
                    return PIXI.Texture.fromFrame("bestscore_txt")
                }, t.prototype.gameover_txt = function() {
                    return PIXI.Texture.fromFrame("gameover_txt")
                }, t.prototype.go_txt = function() {
                    return PIXI.Texture.fromFrame("go_txt")
                }, t.prototype.paused_txt = function() {
                    return PIXI.Texture.fromFrame("paused_txt")
                }, t.prototype.playagain_txt = function() {
                    return PIXI.Texture.fromFrame("playagain_txt")
                }, t.prototype.quit_txt = function() {
                    return PIXI.Texture.fromFrame("quit_txt")
                }, t.prototype.ready_txt = function() {
                    return PIXI.Texture.fromFrame("ready_txt")
                }, t.prototype.youwin_txt = function() {
                    return PIXI.Texture.fromFrame("youwin_txt")
                }, t.prototype.more_games_txt = function() {
                    return PIXI.Texture.fromFrame("more_games_txt")
                }, t.prototype.wininfo_txt = function() {
                    return PIXI.Texture.fromFrame("wininfo_txt")
                }, t.prototype.resume_txt = function() {
                    return PIXI.Texture.fromFrame("resume_txt")
                }, t.prototype.score_txt = function() {
                    return PIXI.Texture.fromFrame("score_txt")
                }, t.prototype.title_txt = function() {
                    return PIXI.Texture.fromFrame("title_txt")
                }, t.prototype.clickinfo = function() {
                    return PIXI.Texture.fromFrame("clickinfo")
                }, t.prototype.combo = function() {
                    return PIXI.Texture.fromFrame("combo")
                }, t.prototype.copy_labrat = function() {
                    return PIXI.Texture.fromFrame("copy_labrat")
                }, t.prototype.go_score_0 = function() {
                    return PIXI.Texture.fromFrame("go_score_0")
                }, t.prototype.go_score_1 = function() {
                    return PIXI.Texture.fromFrame("go_score_1")
                }, t.prototype.go_score_2 = function() {
                    return PIXI.Texture.fromFrame("go_score_2")
                }, t.prototype.go_score_3 = function() {
                    return PIXI.Texture.fromFrame("go_score_3")
                }, t.prototype.go_score_4 = function() {
                    return PIXI.Texture.fromFrame("go_score_4")
                }, t.prototype.go_score_5 = function() {
                    return PIXI.Texture.fromFrame("go_score_5")
                }, t.prototype.go_score_6 = function() {
                    return PIXI.Texture.fromFrame("go_score_6")
                }, t.prototype.go_score_7 = function() {
                    return PIXI.Texture.fromFrame("go_score_7")
                }, t.prototype.go_score_8 = function() {
                    return PIXI.Texture.fromFrame("go_score_8")
                }, t.prototype.go_score_9 = function() {
                    return PIXI.Texture.fromFrame("go_score_9")
                }, t.prototype.mute_button = function() {
                    return PIXI.Texture.fromFrame("mute_button")
                }, t.prototype.new_score = function() {
                    return PIXI.Texture.fromFrame("new_score")
                }, t.prototype.pause_button = function() {
                    return PIXI.Texture.fromFrame("pause_button")
                }, t.prototype.plusone = function() {
                    return PIXI.Texture.fromFrame("plusone")
                }, t.prototype.score_0_txt = function() {
                    return PIXI.Texture.fromFrame("score_0_txt")
                }, t.prototype.score_1_txt = function() {
                    return PIXI.Texture.fromFrame("score_1_txt")
                }, t.prototype.score_2_txt = function() {
                    return PIXI.Texture.fromFrame("score_2_txt")
                }, t.prototype.score_3_txt = function() {
                    return PIXI.Texture.fromFrame("score_3_txt")
                }, t.prototype.score_4_txt = function() {
                    return PIXI.Texture.fromFrame("score_4_txt")
                }, t.prototype.score_5_txt = function() {
                    return PIXI.Texture.fromFrame("score_5_txt")
                }, t.prototype.score_6_txt = function() {
                    return PIXI.Texture.fromFrame("score_6_txt")
                }, t.prototype.score_7_txt = function() {
                    return PIXI.Texture.fromFrame("score_7_txt")
                }, t.prototype.score_8_txt = function() {
                    return PIXI.Texture.fromFrame("score_8_txt")
                }, t.prototype.score_9_txt = function() {
                    return PIXI.Texture.fromFrame("score_9_txt")
                }, t.prototype.startgame = function() {
                    return PIXI.Texture.fromFrame("startgame")
                }, t.prototype.tapinfo = function() {
                    return PIXI.Texture.fromFrame("tapinfo")
                }, t.prototype.unmute_button = function() {
                    return PIXI.Texture.fromFrame("unmute_button")
                }, t
            }();
            t.Texture = o
        }(e = t.res || (t.res = {}))
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e;
        ! function(t) {
            var e = function() {
                function t(t, e, n, o) {
                    this.type = t, this.startTime = e, this.duration = n, this.loop = o
                }
                return t
            }();
            t.AudioSpriteData = e;
            var n = function() {
                function t() {
                    this.click = new e("click", 0, 261.2244897959184, (!1)), this.die = new e("die", 2e3, 669.2290249433106, (!1)), this.go_speech = new e("go_speech", 4e3, 380.2040816326535, (!1)), this.jump = new e("jump", 6e3, 119.5011337868479, (!1)), this.levelup = new e("levelup", 8e3, 1010.0680272108846, (!1)), this.ready_speech = new e("ready_speech", 11e3, 539.8866213151923, (!1)), this.rollover = new e("rollover", 13e3, 331.8367346938782, (!1)), this.howlerData = {
                        click: [0, 261.2244897959184],
                        die: [2e3, 669.2290249433106],
                        go_speech: [4e3, 380.2040816326535],
                        jump: [6e3, 119.5011337868479],
                        levelup: [8e3, 1010.0680272108846],
                        ready_speech: [11e3, 539.8866213151923],
                        rollover: [13e3, 331.8367346938782]
                    }
                }
                return t
            }();
            t.AudioSprite = n
        }(e = t.res || (t.res = {}))
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.addExtraRes = function(t, e) {
                this.extra[t] = e
            }, e.getExtraRes = function(t) {
                return this.extra[t]
            }, e.frame = new t.res.Frame, e.sprite = new t.res.Sprite, e.texture = new t.res.Texture, e.audio = new t.res.AudioSprite, e.extra = {}, e
        }();
        t.Res = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.distanceBetweenTwoPoints = function(t, e, n, o) {
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2))
            }, t.degreesToRadians = function(t) {
                return t * Math.PI / 180
            }, t.radiansToDegrees = function(t) {
                return 180 * t / Math.PI
            }, t.oppositeDegree = function(t) {
                return (180 + t) % 360
            }, t.angleBetweenTwoPointsInRadians = function(t, e, n, o) {
                return Math.atan2(o - e, n - t)
            }, t.angleBetweenTwoPointsInDegree = function(t, e) {
                return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI
            }, t.roundToOneDecimal = function(t) {
                return Math.round(10 * t) / 10
            }, t.randomInt = function(t, e) {
                return Math.random() * (e - t) + t >> 0
            }, t.mapRange = function(t, e, n, o, i) {
                return (t - e) * (i - o) / (n - e) + o
            }, t
        }();
        t.MathUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t() {}
            return t.NONE = 0, t.UP = 1, t.RIGHT = 2, t.DOWN = 4, t.LEFT = 8, t
        }();
        t.AnalogStickDirection = n;
        var o = function() {
            function t() {
                this.direction = 0, this.isMoved = !1
            }
            return t.prototype.toString = function() {
                var t = this.direction,
                    e = (t & n.UP) > 0,
                    o = (t & n.DOWN) > 0,
                    i = (t & n.RIGHT) > 0,
                    r = (t & n.LEFT) > 0;
                return "{up: " + e + (e ? " (" + this.strengthY.toString() + ")" : "") + ", down: " + o + (o ? " (" + this.strengthY.toString() + ")" : "") + ", right: " + i + (i ? " (" + this.strengthX.toString() + ")" : "") + ", left: " + r + (r ? " (" + this.strengthX.toString() + ")" : "") + ", joyStickIndex " + this.index + " }"
            }, Object.defineProperty(t.prototype, "isUp", {
                get: function() {
                    return (this.direction & n.UP) > 0 && this.strengthY > 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isDown", {
                get: function() {
                    return (this.direction & n.DOWN) > 0 && this.strengthY > 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isRight", {
                get: function() {
                    return (this.direction & n.RIGHT) > 0 && this.strengthX > 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isLeft", {
                get: function() {
                    return (this.direction & n.LEFT) > 0 && this.strengthX > 0
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dispose = function() {}, t
        }();
        t.AnalogStickData = o;
        var i = function() {
            function t() {
                this.buttonCodes = []
            }
            return t.prototype.toString = function() {
                return "{ id: " + this.id.type + " }"
            }, t.prototype.dispose = function() {
                this.id = null, this.buttonCodes && (this.buttonCodes.length = 0)
            }, t
        }();
        t.GamepadButtonHitData = i;
        var r = function() {
            function t() {}
            return t.PLAYER_A = 0, t.PLAYER_B = 1, t
        }();
        t.GamepadIndex = r;
        var a = function(a) {
            function s() {
                var t = a.call(this) || this;
                return t._isEnabled = !1, t._hitList = [], t._gamePadButtons = {}, t.analogSticks = {}, t._connectionState = {}, t._isAnalogStickEnabled = !1, t._onePlayerMode = !0, t.mapBinds(), t.setEnabled(!1), t
            }
            return e(s, a), s.prototype.mapBinds = function() {
                this.onConnectHandler = this.onConnectHandler.bind(this), this.onDisconnectHandler = this.onDisconnectHandler.bind(this)
            }, s.prototype.setAnalogStickEnabled = function(t) {
                this._isAnalogStickEnabled = t
            }, s.prototype.setOnePlayerMode = function(t) {
                this._onePlayerMode = t
            }, s.prototype.setConnected = function(e, n) {
                var o = e.toString(),
                    i = this._connectionState.hasOwnProperty(o) || !1,
                    r = this._connectionState[o] || !1;
                if (!i || r != n) {
                    this._connectionState[o] = n;
                    var a = n ? t.GamepadControlEvent.CONNECTED : t.GamepadControlEvent.DISCONNECTED,
                        s = new t.GamepadControlEvent(a);
                    s.gamepadIndex = e, this.emit(s.type, s)
                }
            }, s.prototype.getLeftAnalogStick = function(t) {
                return void 0 === t && (t = r.PLAYER_A), this.getAnalogStickByAxesIndex(0, t)
            }, s.prototype.getRightAnalogStick = function(t) {
                return void 0 === t && (t = r.PLAYER_A), this.getAnalogStickByAxesIndex(1, t)
            }, s.prototype.setEnabled = function(t) {
                if (this._isEnabled != t) {
                    this._isEnabled = t;
                    for (var e in this._gamePadButtons)
                        if (this._gamePadButtons.hasOwnProperty(e)) {
                            var o = this._gamePadButtons[e];
                            o.isPressedList && (o.isPressedList.length = 0)
                        }
                    for (var e in this.analogSticks)
                        if (this.analogSticks.hasOwnProperty(e)) {
                            var i = this.analogSticks[e];
                            if (i)
                                for (var r in i) i.hasOwnProperty(r) && (i[r].direction = n.NONE)
                        }
                    window.removeEventListener("gamepadconnected", this.onConnectHandler), window.removeEventListener("gamepaddisconnected", this.onDisconnectHandler), this._isEnabled && (window.addEventListener("gamepadconnected", this.onConnectHandler), window.addEventListener("gamepaddisconnected", this.onDisconnectHandler))
                }
            }, s.prototype.addButtonMonitor = function(t, e) {
                var n, o = this.getKeyDataIndexByInputHitRectID(e);
                o > -1 ? (n = this._hitList[o], n.id = e, n.buttonCodes = t) : (n = new i, n.id = e, n.buttonCodes = t, this._hitList.push(n))
            }, s.prototype.getKeyDataIndexByInputHitRectID = function(t) {
                for (var e = this._hitList.length, n = 0; n < e; n++) {
                    var o = this._hitList[n];
                    if (t == o.id) return n
                }
                return -1
            }, s.prototype.onConnectHandler = function(t) {
                var e = t.gamepad.index;
                t.gamepad.id;
                this.setConnected(e, !0)
            }, s.prototype.onDisconnectHandler = function(t) {
                var e = t.gamepad.index;
                t.gamepad.id;
                this.setConnected(e, !1)
            }, s.prototype.getGamePadButtonsByGamePadIndex = function(t) {
                return this._gamePadButtons ? (this._gamePadButtons[t] || (this._gamePadButtons[t] = {
                    isPressedList: [],
                    hitList: this._hitList
                }), this._gamePadButtons[t]) : null
            }, s.prototype.update = function(e) {
                if (this._isEnabled) {
                    var n = t.DeviceUtils.getGamePads();
                    if (n && 0 != n.length)
                        for (var o = n.length, i = 0; i < o; i++) {
                            var r = n[i];
                            if ("undefined" != typeof r && r) {
                                var a = this.getGamePadButtonsByGamePadIndex(r.index);
                                if (a) {
                                    for (var s = a.isPressedList, u = a.hitList, c = u.length, l = 0; l < c && (u && u[l]); l++)
                                        for (var h = u[l], d = h.buttonCodes.length, p = 0; p < d; p++) {
                                            var m = h.buttonCodes[p],
                                                _ = this.isButtonPressed(r.buttons[m]);
                                            this.setButtonPressed(_, s, m, h, r.index)
                                        }
                                    this.updateAxes(r)
                                }
                            }
                        }
                }
            }, s.prototype.setButtonPressed = function(t, e, n, o, i) {
                t ? "undefined" != typeof e[n] && e[n] !== !1 || (e[n] = !0, this.dispatchKeyDownEvent(o.id, i)) : e[n] === !0 && (e[n] = !1, this.dispatchKeyUpEvent(o.id, i))
            }, s.prototype.updateAxes = function(e) {
                if (this._isAnalogStickEnabled) {
                    var o = e.axes.length;
                    if (o % 2 == 0 && 0 != o)
                        for (var i = 0, r = 0; r < o; r += 2, i++) {
                            var a = e.axes[r],
                                s = e.axes[r + 1],
                                u = t.MathUtils.roundToOneDecimal(Math.abs(a)),
                                c = t.MathUtils.roundToOneDecimal(Math.abs(s));
                            s < 0 ? this.setAxisMoved(n.UP, c, i, e.index) : this.setAxisMoved(n.DOWN, c, i, e.index), a < 0 ? this.setAxisMoved(n.LEFT, u, i, e.index) : this.setAxisMoved(n.RIGHT, u, i, e.index)
                        }
                }
            }, s.prototype.getAnalogStickByAxesIndex = function(t, e) {
                var n = this.analogSticks[e] || null;
                return n ? n[t] || null : null
            }, s.prototype.setAxisMoved = function(t, e, i, r) {
                var a = this.getAnalogStickByAxesIndex(i, r);
                a || (a = new o, this.analogSticks[r] || (this.analogSticks[r] = {}), this.analogSticks[r][i] = a), a.index = i, a.gamePadIndex = r;
                var s = a.direction,
                    u = a.strengthX,
                    c = a.strengthY;
                e = e <= .1 ? 0 : e, t == n.UP ? (a.direction &= ~n.DOWN, a.strengthY = e) : t == n.DOWN && (a.direction &= ~n.UP, a.strengthY = e), t == n.RIGHT ? (a.direction &= ~n.LEFT, a.strengthX = e) : t == n.LEFT && (a.direction &= ~n.RIGHT, a.strengthX = e), a.direction |= t, a.direction != s || a.strengthX != u || a.strengthY != c ? a.isMoved = !0 : a.isMoved = !1
            }, s.prototype.dispatchKeyUpEvent = function(e, n) {
                if (!this._onePlayerMode || n == r.PLAYER_A) {
                    var o = new t.GamepadControlEvent(t.GamepadControlEvent.BUTTON_UP);
                    o.keyID = e, o.gamepadIndex = n, this.emit(o.type, o)
                }
            }, s.prototype.dispatchKeyDownEvent = function(e, n) {
                if (!this._onePlayerMode || n == r.PLAYER_A) {
                    var o = new t.GamepadControlEvent(t.GamepadControlEvent.BUTTON_DOWN);
                    o.keyID = e, o.gamepadIndex = n, this.emit(o.type, o)
                }
            }, s.prototype.isButtonPressed = function(t) {
                return "object" == typeof t ? t.pressed : 1 == t
            }, s.prototype.dispose = function() {
                if (this.setEnabled(!1), this._hitList) {
                    for (var t = this._hitList.length - 1, e = t; e >= 0; e--) this._hitList[e] && (this._hitList[e].dispose(), this._hitList[e] = null);
                    this._hitList.length = 0, this._hitList = null
                }
                this._gamePadButtons = null, this.analogSticks = null, this._connectionState = null
            }, s
        }(EventEmitter);
        t.GamepadControl = a
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.CLICK = "click", t
        }();
        t.MouseEventType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this.type = t
            }
            return t.prototype.toString = function() {
                return "{ " + this.type + " }"
            }, t.ENTER = new t("control.ENTER"), t.TAP_TO_PLAY = new t("game.TAP_TO_PLAY"), t.UP_ARROW = new t("control.up_arrow"), t.DOWN_ARROW = new t("control.down_arrow"), t.LEFT_ARROW = new t("control.left_arrow"), t.RIGHT_ARROW = new t("control.right_arrow"), t.JUMP_TRACK = new t("control.JUMP_TRACK"), t.PAUSE_TOGGLE = new t("control.PAUSE_TOGGLE"), t.PAUSE_RESUME = new t("control.PAUSE_RESUME"), t.PAUSE_EXIT_TO_MENU = new t("control.PAUSE_EXIT_TO_MENU"), t.MUTE_TOGGLE = new t("control.MUTE_TOGGLE"), t.GAME_OVER_PLAY_AGAIN = new t("control.GAME_OVER_PLAY_AGAIN"), t.GAME_OVER_MORE_GAMES = new t("control.GAME_OVER_MORE_GAMES"), t.GAME_OVER_EXIT_TO_MENU = new t("control.GAME_OVER_EXIT_TO_MENU"), t.START_GAME = new t("control.START_GAME"), t.CREDITS = new t("control.CREDITS"), t.CREDITS_CONTINUE = new t("control.CREDITS_CONTINUE"), t.LABRAT_MOBI = new t("control.LABRAT_MOBI"), t.BRAND_LOGO = new t("control.BRAND_LOGO"), t
        }();
        t.InputHitRectID = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t(t) {
                this.type = t
            }
            return t.SCRIPT = new t("script"), t.GRAPHICS = new t("graphics"), t.SFX = new t("sfx"), t
        }();
        t.LoadingState = n;
        var o = function(o) {
            function i() {
                var e = o.call(this) || this;
                return e._canShowFullScreenCheckbox = !1, e._isLoading = !0, e._reqAnimationFrameId = 0, e._enableTapToPlay = !1, e._container = document.getElementById("loader-container"), e._progressBarContainer = document.getElementById("loader-progress"), e._loadCompleteContainer = document.getElementById("loader-complete"), e._playButtonContainer = document.getElementById("loader-tap-to-play"), e._playButton = document.getElementById("loader-tap-to-play-btn"), e._fullscreenCheckboxContainer = document.getElementById("fullscreen-option"), e._fullscreenCheckbox = document.getElementById("fullscreen-opt"), e._percentElement = {
                    graphics: document.getElementById("loader-pct-graphics"),
                    sounds: document.getElementById("loader-pct-sound")
                }, e.updateFullscreenCheckbox(), t.DOMUtils.setVisible(e._container, !0), t.DOMUtils.setVisible(e._progressBarContainer, !0), e.mapBinds(), e
            }
            return e(i, o), i.prototype.setEnableTapToPlay = function(t) {
                this._enableTapToPlay = t
            }, i.prototype.setCanShowFullScreenCheckbox = function(t) {
                this._canShowFullScreenCheckbox != t && (this._canShowFullScreenCheckbox = t, this.updateFullscreenCheckbox())
            }, i.prototype.setLoaderPercent = function(t, e) {
                switch (e = e + .5 | 0, e >= 100 && (e = 100), t) {
                    case n.GRAPHICS:
                        return void(this._percentElement.graphics.textContent = e.toString());
                    case n.SFX:
                        return void(this._percentElement.sounds.textContent = e.toString())
                }
            }, i.prototype.onFullscreenChange = function() {
                this._isLoading && this.updateFullscreenCheckbox()
            }, i.prototype.updateFullscreenCheckbox = function() {
                var e = this,
                    n = t.FullscreenUtils.isGameInFullscreen(),
                    o = this._canShowFullScreenCheckbox && !n;
                if (t.DOMUtils.setVisible(this._fullscreenCheckboxContainer, o), this._fullscreenCheckbox.checked = !1, o) {
                    var i = t.FullscreenUtils.isFullscreenAvailable;
                    i && this._canShowFullScreenCheckbox && t.LocalStorageUtils.getBoolean(t.LocalKey.FULLSCREEN_CHECKBOX).then(function(t) {
                        e._fullscreenCheckbox.checked = t
                    }).catch(function() {
                        e._fullscreenCheckbox.checked = !0
                    })
                }
            }, i.prototype.updateFSCheckboxFromLocalStorage = function(t, e) {
                this._fullscreenCheckbox.checked = e
            }, i.prototype.mapBinds = function() {
                this.updateFSCheckboxFromLocalStorage = this.updateFSCheckboxFromLocalStorage.bind(this), this.onLoaderTapToPlayClickHL = this.onLoaderTapToPlayClickHL.bind(this), this.dispatchLaunchEvent = this.dispatchLaunchEvent.bind(this), this.onKeyPressHL = this.onKeyPressHL.bind(this), this.loop = this.loop.bind(this), this.onGamepadButtonDownHL = this.onGamepadButtonDownHL.bind(this)
            }, i.prototype.updateViewPort = function(e, n) {
                t.DOMUtils.setWidthHeight(this._container, e, n)
            }, i.prototype.onLoadComplete = function() {
                t.DOMUtils.setVisible(this._progressBarContainer, !1), t.DOMUtils.setVisible(this._loadCompleteContainer, !0), 0 == this._enableTapToPlay ? this.launchGame() : this.addLoaderListeners(!0)
            }, i.prototype.addLoaderListeners = function(e) {
                this._playButton.removeEventListener(t.MouseEventType.CLICK, this.onLoaderTapToPlayClickHL), document.removeEventListener("keypress", this.onKeyPressHL, !1), cancelAnimationFrame(this._reqAnimationFrameId), this._gamePadControl && (this._gamePadControl.removeListener(t.GamepadControlEvent.BUTTON_DOWN, this.onGamepadButtonDownHL, this), this._gamePadControl.dispose(), this._gamePadControl = null), e && (this._playButton.addEventListener(t.MouseEventType.CLICK, this.onLoaderTapToPlayClickHL), document.addEventListener("keypress", this.onKeyPressHL, !1), t.DeviceUtils.supportsGamePad() && (this._gamePadControl = new t.GamepadControl,
                    this._gamePadControl.addButtonMonitor([t.GamepadButtonIndex.START_BUTTON, t.GamepadButtonIndex.A_BUTTON, t.GamepadButtonIndex.B_BUTTON], t.InputHitRectID.TAP_TO_PLAY), this._gamePadControl.addListener(t.GamepadControlEvent.BUTTON_DOWN, this.onGamepadButtonDownHL, this), this.loop()))
            }, i.prototype.onGamepadButtonDownHL = function(e) {
                e.keyID == t.InputHitRectID.TAP_TO_PLAY && this.launchGame()
            }, i.prototype.loop = function() {
                this._reqAnimationFrameId = requestAnimationFrame(this.loop), this._gamePadControl && this._gamePadControl.update(0)
            }, i.prototype.onKeyPressHL = function(t) {
                13 != t.keyCode && 32 != t.keyCode || (this.launchGame(), t.preventDefault())
            }, i.prototype.onLoaderTapToPlayClickHL = function(t) {
                this.launchGame(), t.preventDefault(), t.stopPropagation()
            }, i.prototype.launchGame = function() {
                if (t.DOMUtils.setVisible(this._playButtonContainer, !1), t.DOMUtils.setVisible(this._fullscreenCheckboxContainer, !1), this.addLoaderListeners(!1), t.DOMUtils.setVisibleByDivID("initializing-message", document, !0), this._isLoading = !1, 1 == this._enableTapToPlay)
                    if (1 == this._fullscreenCheckbox.checked) {
                        var e = t.FullscreenUtils.triggerFullscreen();
                        e || alert("Your browser doesn't support fullscreen! Too Bad!"), t.LocalStorageUtils.save(t.LocalKey.FULLSCREEN_CHECKBOX, "true", this.dispatchLaunchEvent)
                    } else t.LocalStorageUtils.save(t.LocalKey.FULLSCREEN_CHECKBOX, "false", this.dispatchLaunchEvent);
                else this.dispatchLaunchEvent()
            }, i.prototype.dispatchLaunchEvent = function() {
                var e = this;
                setTimeout(function() {
                    e.emit(t.CoreEventType.LAUNCH_GAME)
                }, 100)
            }, i.prototype.hide = function() {
                t.DOMUtils.setVisible(this._container, !1)
            }, Object.defineProperty(i.prototype, "isLoading", {
                get: function() {
                    return this._isLoading
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.updateLoadingState = function(e) {
                t.DOMUtils.setVisibleByDivID("loader-message", document, !1), t.DOMUtils.setVisibleByDivID("loader-message-sfx", document, !1), t.DOMUtils.setVisibleByDivID("loader-message-graphics", document, !1), e == n.GRAPHICS ? t.DOMUtils.setVisibleByDivID("loader-message-graphics", document, !0) : e == n.SFX ? t.DOMUtils.setVisibleByDivID("loader-message-sfx", document, !0) : e == n.SCRIPT && t.DOMUtils.setVisibleByDivID("loader-message", document, !0)
            }, i
        }(EventEmitter);
        t.LoaderScreen = o
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e(t) {
                this.spriteData = t, this.type = this.spriteData.type, this.loop = this.spriteData.loop
            }
            return e.CLICK = new e(t.Res.audio.click), e.PLAYER_DIE = new e(t.Res.audio.die), e.JUMP = new e(t.Res.audio.jump), e.BUTTON_ROLL_OVER = new e(t.Res.audio.rollover), e.SPEECH_READY = new e(t.Res.audio.ready_speech), e.SPEECH_GO = new e(t.Res.audio.go_speech), e.SPEECH_LEVEL_UP = new e(t.Res.audio.levelup), e
        }();
        t.SFXType = e;
        var n = function() {
            function e() {}
            return e.init = function() {
                1 != e.isSFXLoaded && 1 != e.isSFXLoadError && (Howler.mobileAutoEnable = !1, e.loadSFX(), window.addEventListener("blur", e.onWindowBlur, !1), window.addEventListener("focus", e.onWindowFocus, !1), document.addEventListener(visibilityChange, e.handleVisibilityChange, !1))
            }, e.onGameLaunch = function() {
                e.isSFXLoadError && e.loadSFX()
            }, e.onWindowBlur = function(t) {
                e.mute(!0)
            }, e.onWindowFocus = function(t) {
                0 == e.userMuteState && e.mute(!1)
            }, e.handleVisibilityChange = function() {
                document[hidden] ? e.mute(!0) : 0 == e.userMuteState && e.mute(!1)
            }, e.loadSFX = function() {
                if (!e.isSFXLoaded) {
                    var n = this,
                        o = {
                            src: [d + "/assets/sfx.ogg", d + "/assets/sfx.mp3"],
                            sprite: t.Res.audio.howlerData,
                            onplay: function() {
                                e.isSFXPlaying = !0
                            },
                            onend: function(t, o) {
                                e.isSFXPlaying = !1, o && o.indexOf("loop") >= 0 && n._sfx.play(t)
                            },
                            onload: function() {
                                e.isSFXLoaded = !0, e.event.emit(t.CoreEventType.SOUND_LOADED)
                            },
                            onloaderror: function() {
                                e.isSFXLoaded = !1, e.isSFXLoadError = !0, e.event.emit(t.CoreEventType.SOUND_ERROR)
                            },
                            onprogress: function(n) {
                                var o = n.loaded / n.total * 100 | 0;
                                e.event.emit(t.CoreEventType.SOUND_PROGRESS, o)
                            }
                        };
                    this._sfx = new Howl(o)
                }
            }, e.playSFX = function(t) {
                if (t && e.isSFXLoaded) return "number" == typeof t ? this._sfx.play(t) : this._sfx.play(t.type)
            }, e.stop = function(t) {
                e.isSFXLoaded && this._sfx.stop(t)
            }, e.pause = function(t) {
                e.isSFXLoaded && this._sfx.pause(t)
            }, e.mute = function(t) {
                e.muteState = t, Howler.mute(t)
            }, e.toggleUserMute = function() {
                var t = !e.userMuteState;
                return e.setUserMute(t), t
            }, e.setUserMute = function(n) {
                e.userMuteState != n && (e.userMuteState = n, e.mute(n), t.LocalStorageUtils.save(t.LocalKey.MUTE_KEY, e.userMuteState.toString(), function() {}))
            }, e.event = new EventEmitter, e.isSFXPlaying = !1, e.isSFXLoaded = !1, e.isSFXLoadError = !1, e.muteState = !1, e.userMuteState = !1, e
        }();
        t.SoundManager = n
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.convertToBoolean = function(t) {
                return null != t && void 0 !== t && ("true" == t || "1" == t)
            }, t.removeChar = function(t, e, n) {
                return t.substr(0, e) + t.substr(e + n)
            }, t
        }();
        t.StringUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.isRectColliding = function(t, e) {
                return !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y)
            }, t.isCircleColliding = function(t, e) {
                var n = t.x - e.x,
                    o = t.y - e.y,
                    i = Math.sqrt(n * n + o * o);
                return i < t.radius + e.radius
            }, t
        }();
        t.CollisionUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.getLocationHash = function() {
                return window.location ? window.location.hash : ""
            }, e.getParamValue = function(t) {
                var e = window.location.search.substring(1);
                if (e.indexOf(t) > -1)
                    for (var n = e.split("&"), o = n.length, i = 0; i < o; i++) {
                        var r = n[i].split("=");
                        if (r[0] == t) return r[1]
                    }
                return null
            }, e.getParamValueAsBoolean = function(n, o) {
                var i = e.getParamValue(n);
                return i ? t.StringUtils.convertToBoolean(i) : o
            }, e
        }();
        t.URLUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.setEnabled = function(e) {
                t.isEnabled = e
            }, t.vibrate = function(e) {
                t.isSupported && t.isEnabled && navigator.vibrate(e)
            }, t.vibrateForTap = function() {
                t.vibrate(30)
            }, t.death = function() {
                t.vibrate([60, 100, 50, 30])
            }, t.isSupported = "vibrate" in navigator, t.isEnabled = !0, t
        }();
        t.VibrateUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.isGameInFullscreen = function() {
                var t = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                if ("undefined" != typeof t) return !0;
                var e = Math.abs(window.screen.width - window.innerWidth),
                    n = Math.abs(window.screen.height - window.innerHeight);
                return (e >= 0 || e <= 2) && (0 == n || n <= 2)
            }, t.triggerFullscreen = function() {
                var e = t.isGameInFullscreen();
                if (e) return !0;
                var n = t.isFullscreenAvailable && !e;
                return n && (document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.requestFullscreen && document.documentElement.requestFullscreen()), n
            }, t.exitFullscreen = function() {
                document.webkitExitFullscreen && document.webkitExitFullscreen()
            }, t.isFullscreenAvailable = "boolean" == typeof(document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled), t
        }();
        t.FullscreenUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.setData = function(t, n, o) {
                e.container = t, e.VALUE ? e.VALUE.length = 0 : e.VALUE = [], e.VALUE.push({
                    posX: n - 10,
                    posY: o
                }), e.VALUE.push({
                    posX: n + 10,
                    posY: o - 10
                }), e.VALUE.push({
                    posX: n,
                    posY: o + 10
                }), e.VALUE.push({
                    posX: n - 10,
                    posY: o - 10
                }), e.VALUE.push({
                    posX: n,
                    posY: o
                })
            }, e.shake = function() {
                if (1 != e.inProgress && e.VALUE) {
                    e.inProgress = !0, e.currentCount = 0;
                    var n = e.VALUE.length,
                        o = window.setInterval(function() {
                            var i = e.VALUE[e.currentCount].posX,
                                r = e.VALUE[e.currentCount].posY;
                            t.DOMUtils.setTransformTranslate(e.container, i, r), e.currentCount++, e.currentCount >= n && (window.clearInterval(o), e.currentCount = 0, e.inProgress = !1)
                        }, 20)
                }
            }, e.inProgress = !1, e.currentCount = 0, e
        }();
        t.HarlemShake = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.RESIZE = "resize", t.ORIENTATION_CHANGE = "orientationchange", t.CONTEXT_MENU = "contextmenu", t
        }();
        t.WindowEventType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.FULLSCREEN_CHANGE = "fullscreenchange", t.FULLSCREEN_CHANGE_MOZ = "mozfullscreenchange", t.FULLSCREEN_CHANGE_WEBKIT = "webkitfullscreenchange", t.FULLSCREEN_CHANGE_MS = "msfullscreenchange", t
        }();
        t.DocumentEventType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t, e) {
                this.name = t, this.code = e, this._codeString = e.toString()
            }
            return t.prototype.isHigherThan = function(t) {
                var e = this;
                return e.code >= t.code
            }, t.fromString = function(e) {
                if (!e) return null;
                var n = e.toUpperCase();
                return n == t.HIGH.name || n == t.HIGH._codeString ? t.HIGH : n == t.MEDIUM.name || n == t.MEDIUM._codeString ? t.MEDIUM : n == t.LOW.name || n == t.LOW._codeString ? t.LOW : void 0
            }, t.HIGH = new t("HIGH", 2), t.MEDIUM = new t("MEDIUM", 1), t.LOW = new t("LOW", 0), t
        }();
        t.GraphicsQuality = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t, e) {
                this._type = t, this._controlName = e
            }
            return t.fromName = function(t) {
                return t == this.TOUCH._controlName ? this.TOUCH : t == this.GYRO._controlName ? this.GYRO : this.KEYBOARD_GAMEPAD
            }, Object.defineProperty(t.prototype, "controlName", {
                get: function() {
                    return this._controlName
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.toString = function() {
                return "InputType { " + this._type + " }"
            }, t.TOUCH = new t("com.goldenratio.InputType.TOUCH", "touch"), t.KEYBOARD_GAMEPAD = new t("com.goldenratio.InputType.KEYBOARD_GAMEPAD", "keyboard_gamepad"), t.GYRO = new t("com.goldenratio.InputType.GYRO", "gyro"), t
        }();
        t.InputType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this.type = t
            }
            return t.prototype.toString = function() {
                return "ScaleType { " + this.type + " }"
            }, t.NO_SCALE = new t("com.goldenratio.ScaleType.NO_SCALE"), t.SCALE_TO_FIT = new t("com.goldenratio.ScaleType.SCALE_TO_FIT"), t
        }();
        t.ScaleType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t, e, n) {
                this.mode = t, this.width = e, this.height = n
            }
            return t.PORTRAIT = new t("PORTRAIT", 506, 900), t.LANDSCAPE = new t("LANDSCAPE", 900, 500), t
        }();
        t.GameOrientationMode = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {
                this._gameOrientation = t.GameOrientationMode.PORTRAIT, this._inputType = t.InputType.KEYBOARD_GAMEPAD, this._scaleType = t.ScaleType.NO_SCALE, this._graphicsQuality = t.GraphicsQuality.HIGH
            }
            return e.prototype.updateGameRect = function() {
                this._gameRect || (this._gameRect = new PIXI.Rectangle(0, 0, 0, 0)), this._gameRect.width = this._gameOrientation.width, this._gameRect.height = this._gameOrientation.height
            }, e.prototype.setGameOrientationMode = function(t) {
                this._gameOrientation = t, this.updateGameRect()
            }, e.prototype.setScaleType = function(t) {
                this._scaleType = t
            }, Object.defineProperty(e.prototype, "scaleType", {
                get: function() {
                    return this._scaleType
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setInputType = function(t) {
                this._inputType = t
            }, Object.defineProperty(e.prototype, "inputType", {
                get: function() {
                    return this._inputType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "gameRect", {
                get: function() {
                    return this._gameRect
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "gameOrientation", {
                get: function() {
                    return this._gameOrientation
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "graphicsQuality", {
                get: function() {
                    return this._graphicsQuality
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setGraphicsQuality = function(t) {
                this._graphicsQuality = t
            }, e.prototype.dispose = function() {
                this._gameRect = null, this._inputType = null, this._scaleType = null, this._gameOrientation = null
            }, e
        }();
        t.CoreInfoModel = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.HOMESCREEN_APP = "#/homescreen", t.CHROME_APP = "#/chromeapp", t
        }();
        t.LocationHashType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.init = function() {
                this.SCORE_TEXT = {
                    0: t.Res.frame.score_0_txt,
                    1: t.Res.frame.score_1_txt,
                    2: t.Res.frame.score_2_txt,
                    3: t.Res.frame.score_3_txt,
                    4: t.Res.frame.score_4_txt,
                    5: t.Res.frame.score_5_txt,
                    6: t.Res.frame.score_6_txt,
                    7: t.Res.frame.score_7_txt,
                    8: t.Res.frame.score_8_txt,
                    9: t.Res.frame.score_9_txt
                }, this.GAMEOVER_SCORE_TEXT = {
                    0: t.Res.frame.go_score_0,
                    1: t.Res.frame.go_score_1,
                    2: t.Res.frame.go_score_2,
                    3: t.Res.frame.go_score_3,
                    4: t.Res.frame.go_score_4,
                    5: t.Res.frame.go_score_5,
                    6: t.Res.frame.go_score_6,
                    7: t.Res.frame.go_score_7,
                    8: t.Res.frame.go_score_8,
                    9: t.Res.frame.go_score_9
                }
            }, e.getGameOverScoreNumberSprite = function(t) {
                if (!t) throw new Error("text cannot be null");
                for (var e = new PIXI.Container, n = t.length, o = 0, i = 0; i < n; i++) {
                    var r = t.charAt(i);
                    if (" " != r) {
                        var a = this.GAMEOVER_SCORE_TEXT[r];
                        if (a) {
                            var s = PIXI.Sprite.fromFrame(a);
                            s.position.x = o, e.addChild(s), o += s.width + 1
                        }
                    } else o += 6
                }
                return e
            }, e.getScoreNumberSprite = function(t) {
                if (!t) throw new Error("text cannot be null");
                for (var e = new PIXI.Container, n = t.length, o = 0, i = 0; i < n; i++) {
                    var r = t.charAt(i);
                    if (" " != r) {
                        var a = this.SCORE_TEXT[r];
                        if (a) {
                            var s = PIXI.Sprite.fromFrame(a);
                            s.position.x = o, e.addChild(s), o += s.width + 1
                        }
                    } else o += 6
                }
                return e
            }, e.SCORE_TEXT = {}, e.GAMEOVER_SCORE_TEXT = {}, e
        }();
        t.SpriteFont = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.get = function(t, e) {
                if (!this._tweenList.get(t)) {
                    var n = new TWEEN.Tween(t);
                    this._tweenList.set(t, n);
                    var o = this._contextMap.get(e) || [];
                    return o.push(t), this._contextMap.set(e, o), n
                }
                return this._tweenList.get(t)
            }, t.removeTween = function(t) {
                if (t) {
                    var e = this._tweenList.get(t);
                    e && (e.stop(), this._tweenList.delete(t))
                }
            }, t.removeAll = function(t) {
                var e = this._contextMap.get(t);
                if (e) {
                    for (var n = e.length, o = 0; o < n; o++) this.removeTween(e[o]);
                    this._contextMap.delete(t)
                }
            }, t._tweenList = new Map, t._contextMap = new Map, t
        }();
        t.Eaze = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.rotatePoint = function(t, e, n, o, i) {
                var r = Math.cos(i) * (t - n) - Math.sin(i) * (e - o) + n,
                    a = Math.sin(i) * (t - n) + Math.cos(i) * (e - o) + o;
                return new PIXI.Point(r, a)
            }, t.getCurvePoints = function(t, e, n, o) {
                "use strict";

                function i(t, e, o, i) {
                    for (var r, a = 2; a < o; a += 2) {
                        var s, c, h, d, p = t[a],
                            m = t[a + 1],
                            _ = t[a + 2],
                            f = t[a + 3],
                            v = (_ - t[a - 2]) * i,
                            y = (f - t[a - 1]) * i,
                            g = (t[a + 4] - p) * i,
                            C = (t[a + 5] - m) * i,
                            E = 0;
                        for (r = 0; r < n; r++) s = e[E++], c = e[E++], h = e[E++], d = e[E++], l[u++] = s * p + c * _ + h * v + d * g, l[u++] = s * m + c * f + h * y + d * C
                    }
                }
                if (void 0 === e && (e = .5), void 0 === n && (n = 25), void 0 === o && (o = !1), "undefined" == typeof t || t.length < 2) return new Float32Array(0);
                e = "number" == typeof e ? e : .5, n = "number" == typeof n ? n : 25;
                var r, a = 1,
                    s = t.length,
                    u = 0,
                    c = (s - 2) * n + 2 + (o ? 2 * n : 0),
                    l = new Float32Array(c),
                    h = new Float32Array(n + 2 << 2),
                    d = 4;
                for (r = t.slice(0), o ? (r.unshift(t[s - 1]), r.unshift(t[s - 2]), r.push(t[0], t[1])) : (r.unshift(t[1]), r.unshift(t[0]), r.push(t[s - 2], t[s - 1])), h[0] = 1; a < n; a++) {
                    var p = a / n,
                        m = p * p,
                        _ = m * p,
                        f = 2 * _,
                        v = 3 * m;
                    h[d++] = f - v + 1, h[d++] = v - f, h[d++] = _ - 2 * m + p, h[d++] = _ - m
                }
                return h[++d] = 1, i(r, h, s, e), o && (r = [], r.push(t[s - 4], t[s - 3], t[s - 2], t[s - 1], t[0], t[1], t[2], t[3]), i(r, h, 4, e)), s = o ? 0 : t.length - 2, l[u++] = t[s++], l[u] = t[s], l
            }, t
        }();
        t.PointUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                return t.call(this) || this
            }
            return e(n, t), n.prototype.beforeAddedToWorld = function(t) {}, n.prototype.afterAddedToWorld = function() {}, n.prototype.addedToWorld = function(e) {
                this.beforeAddedToWorld(e), t.prototype.addedToWorld.call(this, e), this.afterAddedToWorld()
            }, n.prototype.removedFromWorld = function(e) {
                this.cleanup(), t.prototype.removedFromWorld.call(this, e)
            }, n.prototype.cleanup = function() {}, n.prototype.update = function(t) {}, n
        }(CES.System);
        t.AbstractSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t) {
                var e = n.call(this) || this;
                return e._container = t, e
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                this.addSprite = this.addSprite.bind(this), this.removeSprite = this.removeSprite.bind(this), this.world.entityAdded(t.SpriteComponent.CNAME).add(this.addSprite), this.world.entityRemoved(t.SpriteComponent.CNAME).add(this.removeSprite)
            }, o.prototype.addSprite = function(e) {
                var n = e.getComponent(t.SpriteComponent.CNAME);
                for (var o in n.canvasList)
                    if (n.canvasList.hasOwnProperty(o)) {
                        var i = n.canvasList[o];
                        this._container.addChild(i)
                    }
            }, o.prototype.removeSprite = function(e) {
                var n = e.getComponent(t.SpriteComponent.CNAME);
                for (var o in n.canvasList)
                    if (n.canvasList.hasOwnProperty(o)) {
                        var i = n.canvasList[o];
                        t.Eaze.removeTween(i), this._container.removeChild(i)
                    }
            }, o
        }(t.AbstractSystem);
        t.SceneGraphSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.drawRect2 = function(t, e, n, o, i) {
                i.lineStyle(1, 255), i.drawRect(t, e, n, o)
            }, t.drawRect = function(t, e) {
                e.lineStyle(1, 255), e.drawRect(t.x, t.y, t.width, t.height)
            }, t.drawCircle = function(t, e, n, o) {
                o.lineStyle(1, 255), o.drawCircle(t, e, n)
            }, t
        }();
        t.GraphicUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t) {
                var e = n.call(this) || this;
                return e._debugContainer = t, e._debugGfx = new PIXI.Graphics, e._debugContainer.addChild(e._debugGfx), e
            }
            return e(o, n), o.prototype.update = function(e) {
                this._debugGfx.clear();
                var n;
                n = this.world.getEntities(t.HitBoundsComponent.CNAME);
                for (var o = n.length - 1; o >= 0; o--) {
                    var i = n[o].getComponent(t.HitBoundsComponent.CNAME);
                    t.GraphicUtils.drawRect(i.value, this._debugGfx)
                }
            }, o
        }(t.AbstractSystem);
        t.DebugSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e, o, i, r) {
                var a = t.call(this) || this;
                return a.name = n.CNAME, a.value = new PIXI.Rectangle(e, o, i, r), a.offset = new PIXI.Point(0, 0), a
            }
            return e(n, t), n.CNAME = "HitBoundsComponent", n
        }(CES.Component);
        t.HitBoundsComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.canvasList = {}, e.name = n.CNAME, e
            }
            return e(n, t), n.prototype.addGfx = function(t, e) {
                return void 0 === e && (e = "default"), this.canvasList[e] = t, this
            }, n.CNAME = "SpriteComponent", n
        }(CES.Component);
        t.SpriteComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e, o) {
                var i = t.call(this) || this;
                return i.name = n.CNAME, i.value = new PIXI.Point(e, o), i
            }
            return e(n, t), n.CNAME = "PositionComponent", n
        }(CES.Component);
        t.PositionComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e) {
                var o = t.call(this) || this;
                return o.name = n.CNAME, o.laneType = e, o
            }
            return e(n, t), n.CNAME = "TrackChangedComponent", n
        }(CES.Component);
        t.TrackChangedComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                return null !== n && n.apply(this, arguments) || this
            }
            return e(o, n), o.prototype.update = function(e) {
                for (var n = this.world.getEntities(t.PositionComponent.CNAME, t.SpriteComponent.CNAME), o = n.length - 1; o >= 0; o--) {
                    var i = n[o],
                        r = i.getComponent(t.PositionComponent.CNAME),
                        a = i.getComponent(t.SpriteComponent.CNAME);
                    for (var s in a.canvasList)
                        if (a.canvasList.hasOwnProperty(s)) {
                            var u = a.canvasList[s];
                            u.position.set(r.value.x, r.value.y)
                        }
                }
            }, o
        }(t.AbstractSystem);
        t.SpritePositionSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.getPlayerEntity = function(e) {
                var n = e.getEntities(t.HeroComponent.CNAME, t.PositionComponent.CNAME, t.PlayerInputComponent.CNAME);
                return n ? n[0] : null
            }, e.getGameEntity = function(e) {
                var n = e.getEntities(t.GameComponent.CNAME);
                return n ? n[0] : null
            }, e.getTrackEntity = function(e) {
                var n = e.getEntities(t.TrackComponent.CNAME).filter(function(e) {
                    var n = e.getComponent(t.TrackComponent.CNAME);
                    return n.points && !e.hasComponent(t.DestroyComponent.CNAME)
                });
                return n ? n[0] : null
            }, e.isPlayerCollidingWithDangerPoint = function(n) {
                var o = e.getPlayerEntity(n);
                if (!o) return !1;
                var i = e.getTrackEntity(n);
                if (!i) return !1;
                var r = o.getComponent(t.HeroComponent.CNAME),
                    a = i.getComponent(t.TrackComponent.CNAME),
                    s = a.dangerPoints[r.currentLaneType.name],
                    u = s[r.currentPointIndexInTrack] || 0,
                    c = s[r.currentPointIndexInTrack + 1] || 0,
                    l = 0 != u && 0 != c;
                return l
            }, e
        }();
        t.EntityUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "DestroyComponent", n
        }(CES.Component);
        t.DestroyComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "LevelCompletedComponent", n
        }(CES.Component);
        t.LevelCompletedComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "ReachedTrackEndComponent", n
        }(CES.Component);
        t.ReachedTrackEndComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e) {
                var o = t.call(this) || this;
                return o.pause = !1, o.name = n.CNAME, o.pause = e, o
            }
            return e(n, t), n.CNAME = "PauseComponent", n
        }(CES.Component);
        t.PauseComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t._isPaused = !1, t
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.onTrackAdded = this.onTrackAdded.bind(this), this.world.entityAdded(t.TrackComponent.CNAME).add(this.onTrackAdded), this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    e._isPaused = o.pause
                }), this.world.entityAdded(t.ReachedTrackEndComponent.CNAME).add(function(e) {
                    if (e.hasComponent(t.SpriteComponent.CNAME)) {
                        var n = e.getComponent(t.SpriteComponent.CNAME),
                            o = n.canvasList.default;
                        o && (o.alpha = 0)
                    }
                }), this.world.entityRemoved(t.ReachedTrackEndComponent.CNAME).add(function(e) {
                    if (e.hasComponent(t.SpriteComponent.CNAME)) {
                        var n = e.getComponent(t.SpriteComponent.CNAME),
                            o = n.canvasList.default;
                        o && (o.alpha = 1)
                    }
                })
            }, o.prototype.onTrackAdded = function(e) {
                this._isPaused = !1;
                var n = this.world.getEntities(t.HeroComponent.CNAME, t.PositionComponent.CNAME),
                    o = n ? n[0] : null;
                if (o) {
                    var i = o.getComponent(t.HeroComponent.CNAME),
                        r = o.getComponent(t.PositionComponent.CNAME),
                        a = e.getComponent(t.TrackComponent.CNAME),
                        s = a.points[i.currentLaneType.name],
                        u = i.currentPointIndexInTrack,
                        c = i.currentPointIndexInTrack + 1,
                        l = s[u],
                        h = s[c];
                    r.value.set(l, h)
                }
            }, o.prototype.update = function(e) {
                if (!this._isPaused) {
                    var n = t.EntityUtils.getPlayerEntity(this.world);
                    if (n) {
                        var o = t.EntityUtils.getTrackEntity(this.world);
                        if (o) {
                            var i = n.getComponent(t.HeroComponent.CNAME),
                                r = n.getComponent(t.PositionComponent.CNAME),
                                a = o.getComponent(t.TrackComponent.CNAME),
                                s = a.points[i.currentLaneType.name],
                                u = s.length,
                                c = i.currentPointIndexInTrack,
                                l = i.currentPointIndexInTrack + 1,
                                h = l > a.endPointIndex + 1 || l > u;
                            if (h) return n.addComponent(new t.ReachedTrackEndComponent), void n.removeComponent(t.PlayerInputComponent.CNAME);
                            var d = s[c],
                                p = s[l];
                            r.value.set(d, p), i.currentPointIndexInTrack += 2
                        }
                    }
                }
            }, o
        }(t.AbstractSystem);
        t.PlayerMovementSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.jump = !1, e.pause = !1, e.mute = !1, e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "PlayerInputComponent", n
        }(CES.Component);
        t.PlayerInputComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.points = {}, e.dangerPoints = {}, e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "TrackComponent", n
        }(CES.Component);
        t.TrackComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t) {
                var e = n.call(this) || this;
                return e._container = t, e
            }
            return e(o, n), o.prototype.cleanup = function() {
                this._container = null, this._lastPointIndex = null, n.prototype.cleanup.call(this)
            }, o.prototype.addedToWorld = function(t) {
                n.prototype.addedToWorld.call(this, t), this._lastPointIndex = {}, this.reset()
            }, o.prototype.reset = function() {
                this._lastPointIndex[t.LaneType.LANE_A.name] = 0, this._lastPointIndex[t.LaneType.LANE_B.name] = 0, this._drawNewTrackCount = 200
            }, o.prototype.createContainer = function() {
                this.clearContainer(), this._trackContainer = new PIXI.Container, this._container.addChild(this._trackContainer)
            }, o.prototype.clearContainer = function() {
                t.Eaze.removeAll(this), this._trackContainer && (t.DisplayObjectUtils.removeFromParent(this._trackContainer), this._trackContainer = null)
            }, o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.world.entityAdded(t.TrackComponent.CNAME).add(function(n) {
                    e.createContainer(), e.reset(), e.drawTracks(n);
                    var o = e.world.getEntities(t.HeroComponent.CNAME, t.SpriteComponent.CNAME),
                        i = o ? o[0] : null;
                    if (i) {
                        var r = i.getComponent(t.SpriteComponent.CNAME);
                        for (var a in r.canvasList)
                            if (r.canvasList.hasOwnProperty(a)) {
                                var s = r.canvasList[a];
                                e._container.addChild(s)
                            }
                    }
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.ReachedTrackEndComponent.CNAME).add(function() {
                    e._trackContainer && t.TimerUtils.delay(1e3).then(function() {
                        t.Eaze.get(e._trackContainer, e).to({
                            alpha: 0
                        }, 200).easing(TWEEN.Easing.Linear.None).start()
                    })
                }), this.world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e._trackContainer && (e._trackContainer.alpha = 1)
                })
            }, o.prototype.drawTracks = function(e) {
                var n = e.getComponent(t.TrackComponent.CNAME),
                    o = new PIXI.Container,
                    i = this.generateTrackGfx(n, t.LaneType.LANE_A);
                i && o.addChild(i), i = this.generateTrackGfx(n, t.LaneType.LANE_B), i && o.addChild(i), this._trackContainer.addChild(o)
            }, o.prototype.update = function(e) {
                var n = t.EntityUtils.getPlayerEntity(this.world);
                if (n) {
                    var i = n.getComponent(t.HeroComponent.CNAME);
                    if (0 != i.currentPointIndexInTrack && i.currentPointIndexInTrack == this._drawNewTrackCount) {
                        var r = this.world.getEntities(t.TrackComponent.CNAME),
                            a = r ? r[0] : null;
                        if (!a) return;
                        if (this._trackContainer.children.length >= 4) {
                            var s = this._trackContainer.removeChildAt(0);
                            s.destroy()
                        }
                        this.drawTracks(a), this._drawNewTrackCount += o.DRAW_TILL_POINTS
                    }
                }
            }, o.prototype.generateTrackGfx = function(e, n) {
                var i = e.points[n.name],
                    r = e.dangerPoints[n.name];
                if (!i || !r) return null;
                var a = this._lastPointIndex[n.name],
                    s = i.length;
                if (s < 2 || a >= s - 1) return null;
                var u = a + o.DRAW_TILL_POINTS;
                u >= s && (u = s);
                var c = 6776936,
                    l = new PIXI.Graphics;
                l.lineStyle(4, c, 1), l.moveTo(i[a], i[a + 1]);
                var h = 16450051,
                    d = new PIXI.Graphics;
                d.lineStyle(4, h, 1), d.moveTo(i[a], i[a + 1]);
                for (var p = e.endPointIndex >= a + 2 && e.endPointIndex <= u, m = a + 2; m <= u; m += 2) {
                    var _ = i[m],
                        f = i[m + 1];
                    l.lineTo(_, f);
                    var v = r[m] || 0,
                        y = r[m + 1] || 0;
                    0 != v && 0 != y ? d.lineTo(_, f) : d.moveTo(_, f)
                }
                this._lastPointIndex[n.name] = u;
                var g = new PIXI.Container;
                if (g.addChild(l), g.addChild(d), p) {
                    var C = i[e.endPointIndex],
                        E = i[e.endPointIndex + 1],
                        T = t.Res.sprite.particle();
                    T.anchor.set(.5, .5), T.scale.set(.2, .2), T.position.set(C, E), g.addChild(T)
                }
                return g
            }, o.DRAW_TILL_POINTS = 600, o
        }(t.AbstractSystem);
        t.TrackRenderSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var e = n.call(this) || this;
                return e.currentLaneType = t.LaneType.LANE_A, e.currentPointIndexInTrack = 200, e.name = o.CNAME, e
            }
            return e(o, n), o.CNAME = "HeroComponent", o.START_POINT_LANE = 200, o
        }(CES.Component);
        t.HeroComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this.name = t
            }
            return t.LANE_A = new t("LANE_A"), t.LANE_B = new t("LANE_B"), t
        }();
        t.LaneType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t) {
                var e = n.call(this) || this;
                return e._isPaused = !1, e._container = t, e
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this._trackOffset = {}, this._trackOffset[t.LaneType.LANE_A.name] = 100, this._trackOffset[t.LaneType.LANE_B.name] = -50, this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    e._isPaused = o.pause
                })
            }, o.prototype.update = function(e) {
                if (!this._isPaused) {
                    var n = this.world.getEntities(t.HeroComponent.CNAME, t.PositionComponent.CNAME),
                        o = n ? n[0] : null;
                    if (o) {
                        var i = this.getTrackEndPointIndex(),
                            r = o.getComponent(t.HeroComponent.CNAME),
                            a = !isNaN(i) && r.currentPointIndexInTrack + 50 >= i;
                        if (!a) {
                            var s = o.getComponent(t.PositionComponent.CNAME),
                                u = this._trackOffset[r.currentLaneType.name] || 0,
                                c = -(s.value.x - u - 220),
                                l = -(s.value.y - 600),
                                h = this._container.position,
                                d = 100;
                            h.x -= (h.x - c) / d, h.y = l
                        }
                    }
                }
            }, o.prototype.getTrackEndPointIndex = function() {
                var e, n = t.EntityUtils.getTrackEntity(this.world);
                if (n) {
                    var o = n.getComponent(t.TrackComponent.CNAME);
                    e = o.endPointIndex
                }
                return e
            }, o.prototype.cleanup = function() {
                this._trackOffset = null, this._container = null, n.prototype.cleanup.call(this)
            }, o
        }(t.AbstractSystem);
        t.CameraSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "RemoveFromWorldComponent", n
        }(CES.Component);
        t.RemoveFromWorldComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                return null !== n && n.apply(this, arguments) || this
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                this.world.entityAdded(t.TrackComponent.CNAME, t.DestroyComponent.CNAME).add(function(e) {
                    var n = e.getComponent(t.TrackComponent.CNAME);
                    n.points = null, e.removeComponent(t.TrackComponent.CNAME), e.addComponent(new t.RemoveFromWorldComponent)
                })
            }, o
        }(t.AbstractSystem);
        t.DestroyTrackSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                return null !== n && n.apply(this, arguments) || this
            }
            return e(o, n), o.prototype.update = function(e) {
                for (var n = this.world.getEntities(t.RemoveFromWorldComponent.CNAME), o = n.length - 1; o >= 0; o--) {
                    var i = n[o];
                    this.world.removeEntity(i)
                }
            }, o
        }(t.AbstractSystem);
        t.RemoveFromWorldSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.score = 0, e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "GameComponent", n
        }(CES.Component);
        t.GameComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this.type = t
            }
            return t.DOWN = "KeyboardControl.event.down", t.UP = "KeyboardControl.event.up", t
        }();
        t.KeyboardControlEvent = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t() {
                this.isPressed = !1
            }
            return t.prototype.toString = function() {
                return "{ id: " + this.id.type + " }"
            }, t.prototype.dispose = function() {
                this.keys && (this.keys.length = 0, this.keys = null), this.id = null
            }, t
        }();
        t.KeyboardKeyData = n;
        var o = function(o) {
            function i() {
                var t = o.call(this) || this;
                return t._hitList = [], t._isEnabled = !1, t.mapBinds(), t.setEnabled(!1), t
            }
            return e(i, o), i.prototype.mapBinds = function() {
                this.onKeyDownHL = this.onKeyDownHL.bind(this), this.onKeyUpHL = this.onKeyUpHL.bind(this)
            }, i.prototype.addKeyMonitor = function(t, e) {
                var o, i = this.getKeyDataIndex(e);
                i > -1 ? (o = this._hitList[i], o.id = e, o.keys = t) : (o = new n, o.id = e, o.keys = t, this._hitList.push(o))
            }, i.prototype.removeKeyMonitor = function(t) {
                for (var e = this._hitList.length, n = e; n >= 0; n--) this._hitList[n] && this._hitList[n].id == t && (this._hitList[n].dispose(), this._hitList[n] = null, this._hitList.splice(n, 1))
            }, i.prototype.getKeyDataIndex = function(t) {
                for (var e = this._hitList.length, n = 0; n < e; n++)
                    if (t == this._hitList[n].id) return n;
                return -1
            }, i.prototype.getValidKey = function(t) {
                if (t == -1) return null;
                for (var e = this._hitList.length, n = 0; n < e; n++)
                    for (var o = this._hitList[n].keys.length, i = 0; i < o; i++)
                        if (this._hitList[n].keys[i] == t) return this._hitList[n];
                return null
            }, i.prototype.setEnabled = function(t) {
                if (this._isEnabled != t) {
                    this._isEnabled = t;
                    for (var e = this._hitList.length, n = 0; n < e; n++) this._hitList[n].isPressed = !1;
                    document.removeEventListener("keydown", this.onKeyDownHL, !1), document.removeEventListener("keyup", this.onKeyUpHL, !1), t && (document.addEventListener("keydown", this.onKeyDownHL, !1), document.addEventListener("keyup", this.onKeyUpHL, !1))
                }
            }, i.prototype.onKeyDownHL = function(e) {
                var n = "string" == typeof e.code ? t.KeyCode.codeToKeyCode(e.code) : e.keyCode,
                    o = this.getValidKey(n),
                    i = null != o;
                if (i) {
                    if (!o.isPressed) {
                        o.isPressed = !0;
                        var r = e.shiftKey;
                        this.dispatchKeyDownEvent(o.id, r)
                    }
                    e.stopPropagation(), e.preventDefault()
                }
            }, i.prototype.onKeyUpHL = function(e) {
                var n = "string" == typeof e.code ? t.KeyCode.codeToKeyCode(e.code) : e.keyCode,
                    o = this.getValidKey(n),
                    i = null != o;
                i && (o.isPressed && (o.isPressed = !1, this.dispatchKeyUpEvent(o.id, e.shiftKey)), e.stopPropagation(), e.preventDefault())
            }, i.prototype.dispatchKeyUpEvent = function(e, n) {
                var o = new t.KeyboardControlEvent(t.KeyboardControlEvent.UP);
                o.keyID = e, o.isShiftkeyPressed = n, this.emit(o.type, o)
            }, i.prototype.dispatchKeyDownEvent = function(e, n) {
                var o = new t.KeyboardControlEvent(t.KeyboardControlEvent.DOWN);
                o.keyID = e, o.isShiftkeyPressed = n, this.emit(o.type, o)
            }, i.prototype.dispose = function() {
                if (this.setEnabled(!1), this._hitList) {
                    for (var t = this._hitList.length - 1, e = t; e >= 0; e--) this._hitList[e] && (this._hitList[e].dispose(), this._hitList[e] = null);
                    this._hitList.length = 0, this._hitList = null
                }
            }, i
        }(EventEmitter);
        t.KeyboardControl = o
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.codeToKeyCode = function(e) {
                return t.CODE_MAPS.hasOwnProperty(e) ? t.CODE_MAPS[e] : -1
            }, t.UP_ARROW = 38, t.DOWN_ARROW = 40, t.LEFT_ARROW = 37, t.RIGHT_ARROW = 39, t.W = 87, t.S = 83, t.A = 65, t.D = 68, t.L = 76, t.Z = 90, t.P = 80, t.R = 82, t.H = 72, t.M = 77, t.ESCAPE = 27, t.ENTER = 13, t.SPACE = 32, t.SHIFT = 16, t.CODE_MAPS = {
                ArrowUp: t.UP_ARROW,
                ArrowDown: t.DOWN_ARROW,
                ArrowLeft: t.LEFT_ARROW,
                ArrowRight: t.RIGHT_ARROW,
                KeyW: t.W,
                KeyS: t.S,
                KeyA: t.A,
                KeyD: t.D,
                KeyP: t.P,
                KeyR: t.R,
                KeyH: t.H,
                KeyL: t.L,
                KeyM: t.M,
                KeyZ: t.Z,
                Escape: t.ESCAPE,
                Enter: t.ENTER,
                Space: t.SPACE,
                ShiftLeft: t.SHIFT,
                ShiftRight: t.SHIFT,
                NumpadEnter: t.ENTER
            }, t
        }();
        t.KeyCode = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t() {}
            return t.CLICKED = "mobi.labrat.SimpleButtonEvent.CLICKED", t
        }();
        t.SimpleButtonEvent = n;
        var o = function(o) {
            function i(t, e, n, i, r) {
                void 0 === i && (i = 0), void 0 === r && (r = -1);
                var a = o.call(this) || this;
                return a._canPlaySfx = !0, a._isDown = !1, a._hitRect = e, a._canPlaySfx = n, a._gfx = t, a._gfx.position.x = e.x, a._gfx.position.y = e.y, a._defaultPosition = new PIXI.Point(a._gfx.position.x, a._gfx.position.y), r = r == -1 ? i : r, a._downPos = a._gfx.position.y + 2, a._upPos = a._gfx.position.y - 2, a._hitRect.width += i, a._hitRect.height += r, a._hitRect.x -= .5 * i, a._hitRect.y -= .5 * r, a.drawHitBounds(), a
            }
            return e(i, o), i.prototype.drawHitBounds = function() {}, i.prototype.addToContainer = function(t) {
                t.addChild(this._gfx), this.drawHitBounds()
            }, i.prototype.removeFromContainer = function() {
                t.DisplayObjectUtils.removeFromParent(this._gfx)
            }, i.prototype.resetPosition = function() {
                this._gfx && this._defaultPosition && this._gfx.position.set(this._defaultPosition.x, this._defaultPosition.y), this._isDown = !1
            }, i.prototype.onButtonDown = function() {
                this._gfx && this._gfx.visible && !this._isDown && (this._gfx.position.y = this._downPos, this._isDown = !0, this._canPlaySfx && (t.SoundManager.playSFX(t.SFXType.CLICK), t.VibrateUtils.vibrate(30)))
            }, i.prototype.onButtonUp = function() {
                this._gfx && this._gfx.visible && this._isDown && (this._gfx.position.y = this._upPos, this._isDown = !1, this._canPlaySfx && this.emit(n.CLICKED))
            }, i.prototype.update = function(t) {}, i.prototype.dispose = function() {
                this._gfx && t.DisplayObjectUtils.removeFromParent(this._gfx), this._gfx = null, this._hitRect = null, this._defaultPosition = null
            }, Object.defineProperty(i.prototype, "hitRect", {
                get: function() {
                    return this._hitRect
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "canvas", {
                get: function() {
                    return this._gfx
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.setAnchor = function(t, e) {
                this._gfx && this._gfx.anchor.set(t, e)
            }, i.prototype.setPosition = function(t, e) {
                this._gfx && (this._gfx.position.set(t, e), this._downPos = this._gfx.position.y + 2, this._upPos = this._gfx.position.y - 2)
            }, i.prototype.setVisible = function(t) {
                this._gfx && (this._gfx.visible = t)
            }, i
        }(EventEmitter);
        t.SimpleButton = o
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.hideMouse = function(t) {
                "undefined" == typeof t && (t = document.body), t.style.cursor = "none"
            }, t.showMouse = function(t) {
                "undefined" == typeof t && (t = document.body), t.style.cursor = "default"
            }, t.getMouseX = function(t, e, n) {
                var o = n.offsetX ? n.offsetX : n.clientX - t.left;
                return o / t.width * e >> 0
            }, t.getMouseY = function(t, e, n) {
                var o = n.offsetY ? n.offsetY : n.clientY - t.top;
                return o / t.height * e >> 0
            }, t.getTouchX = function(t, e, n) {
                var o = n.clientX - t.left;
                return o / t.width * e >> 0
            }, t.getTouchY = function(t, e, n) {
                var o = n.clientY - t.top;
                return o / t.height * e >> 0
            }, t
        }();
        t.MouseUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this.type = t, this.position = new PIXI.Point(0, 0)
            }
            return t.DOWN = "MouseTouchEvent.mousetouch.event.down", t.UP = "MouseTouchEvent.mousetouch.event.up", t.ROLL_OVER = "MouseTouchEvent.mousetouch.event.roll_over", t.ROLL_OUT = "MouseTouchEvent.mousetouch.event.roll_out", t.TOUCH_MOVE = "MouseTouchEvent.mousetouch.event.touch_move", t.MOVED_LEFT_AFTER_DOWN = "MouseTouchEvent.mousetouch.event.MOVED_LEFT_AFTER_DOWN", t.MOVED_RIGHT_AFTER_DOWN = "MouseTouchEvent.mousetouch.event.MOVED_RIGHT_AFTER_DOWN", t
        }();
        t.MouseTouchEvent = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t() {
                this.touchId = -1, this.buttonIndex = -1, this.isPressed = !1
            }
            return t.prototype.toString = function() {
                return "{ id: " + this.id.type + ", buttonIndex: " + this.buttonIndex + " }"
            }, t.prototype.dispose = function() {
                this.rect = null, this.id = null
            }, t
        }();
        t.MouseTouchHitRect = n;
        var i = function(i) {
            function r(t) {
                var e = i.call(this) || this;
                return e._isEnabled = !1, e._hitList = [], e._validTouchMoveIdentifiers = {}, e._enableMovedLeftOrRightAfterDown = !1, e._enableTouchMove = !0, e._rollOverMap = new Map, e._gameRect = t, e.mapBinds(), e.setEnable(!1), e
            }
            return e(r, i), r.prototype.mapBinds = function() {
                this.onMouseDownHL = this.onMouseDownHL.bind(this), this.onMouseUpHL = this.onMouseUpHL.bind(this), this.onMouseUpOutsideHL = this.onMouseUpOutsideHL.bind(this), this.onMouseMoveRollOverHL = this.onMouseMoveRollOverHL.bind(this), this.onMouseMoveOutsideRollOverHL = this.onMouseMoveOutsideRollOverHL.bind(this), this.onMouseMoveHL = this.onMouseMoveHL.bind(this), this.onTouchMoveHL = this.onTouchMoveHL.bind(this), this.onTouchStartHL = this.onTouchStartHL.bind(this), this.onTouchEndHL = this.onTouchEndHL.bind(this), this.onTouchEndOutsideHL = this.onTouchEndOutsideHL.bind(this)
            }, r.prototype.addHitRect = function(t, e, o) {
                void 0 === o && (o = -1);
                var i, r = this.getRectIndex(e);
                this._rollOverMap.set(e, !1), r > -1 && o == -1 ? (i = this._hitList[r], i.rect = t, i.buttonIndex = o) : (i = new n, i.rect = t, i.id = e, i.buttonIndex = o, this._hitList.push(i))
            }, r.prototype.removeHitRect = function(t, e) {
                void 0 === e && (e = -1), this._rollOverMap.delete(t);
                for (var n = this._hitList.length - 1, o = n; o >= 0; o--) e == -1 ? this._hitList[o].id == t && (this._hitList[o].dispose(), this._hitList[o] = null, this._hitList.splice(o, 1)) : this._hitList[o].id == t && e == this._hitList[o].buttonIndex && (this._hitList[o].dispose(), this._hitList[o] = null, this._hitList.splice(o, 1))
            }, r.prototype.setEnable = function(t) {
                if (this._isEnabled != t) {
                    this._isEnabled = t;
                    for (var e = this._hitList.length, n = 0; n < e; n++) this._hitList[n].isPressed = !1;
                    var i = !1;
                    o.removeEventListener("touchstart", this.onTouchStartHL, i), o.removeEventListener("touchend", this.onTouchEndHL, i), o.removeEventListener("mousedown", this.onMouseDownHL, i), o.removeEventListener("mouseup", this.onMouseUpHL, i), o.removeEventListener("mousemove", this.onMouseMoveRollOverHL, i), o.removeEventListener("mousemove", this.onMouseMoveHL, i), o.removeEventListener("touchmove", this.onTouchMoveHL, i), document.removeEventListener("mousemove", this.onMouseMoveOutsideRollOverHL, i), document.removeEventListener("mouseup", this.onMouseUpOutsideHL, i), t && (o.addEventListener("touchstart", this.onTouchStartHL, i), o.addEventListener("touchend", this.onTouchEndHL, i), document.addEventListener("touchend", this.onTouchEndOutsideHL, i), o.addEventListener("mousedown", this.onMouseDownHL, i), o.addEventListener("mouseup", this.onMouseUpHL, i), o.addEventListener("mousemove", this.onMouseMoveRollOverHL, i), document.addEventListener("mousemove", this.onMouseMoveOutsideRollOverHL, i), document.addEventListener("mouseup", this.onMouseUpOutsideHL, i))
                }
            }, r.prototype.onMouseUpOutsideHL = function(t) {
                this.onMouseUpHL(t)
            }, r.prototype.onMouseUpHL = function(t) {
                o.removeEventListener("mousemove", this.onMouseMoveHL, !1);
                for (var e = this._hitList.length, n = 0; n < e; n++) {
                    var i = this._hitList[n];
                    this.handleUPState(i, NaN, NaN)
                }
            }, r.prototype.onMouseDownHL = function(e) {
                var n = o.getBoundingClientRect(),
                    i = t.MouseUtils.getMouseX(n, this._gameRect.width, e),
                    r = t.MouseUtils.getMouseY(n, this._gameRect.height, e),
                    a = !1,
                    s = this.getMouseTouchHitRect(i, r);
                s && (s.isPressed = !0, a = !0), this._validTouchMoveIdentifiers.mouse = {
                    x: i,
                    y: r
                }, this._activeMouseTouchRect = s, this.handleDOWNState(s, i, r), o.removeEventListener("mousemove", this.onMouseMoveHL, !1), a && o.addEventListener("mousemove", this.onMouseMoveHL, !1)
            }, r.prototype.onMouseMoveRollOverHL = function(e) {
                var n = this,
                    i = o.getBoundingClientRect(),
                    r = t.MouseUtils.getMouseX(i, this._gameRect.width, e),
                    a = t.MouseUtils.getMouseY(i, this._gameRect.height, e),
                    s = this.getMouseTouchHitRect(r, a);
                this._rollOverMap.forEach(function(t, e, o) {
                    var i = !(!s || !s.id) && s.id.type == e.type;
                    n.setRollOver(e, i)
                }), e.stopPropagation()
            }, r.prototype.onMouseMoveOutsideRollOverHL = function(t) {
                this.setAllButtonsRollOut()
            }, r.prototype.setRollOver = function(e, n) {
                var o = this._rollOverMap.get(e) || !1;
                if (o != n) {
                    this._rollOverMap.set(e, n);
                    var i = n ? t.MouseTouchEvent.ROLL_OVER : t.MouseTouchEvent.ROLL_OUT,
                        r = new t.MouseTouchEvent(i);
                    r.id = e, this.emit(r.type, r)
                }
            }, r.prototype.setAllButtonsRollOut = function() {
                var t = this;
                this._rollOverMap.forEach(function(e, n, o) {
                    t.setRollOver(n, !1)
                })
            }, r.prototype.onMouseMoveHL = function(e) {
                var n = o.getBoundingClientRect(),
                    i = t.MouseUtils.getMouseX(n, this._gameRect.width, e),
                    r = t.MouseUtils.getMouseY(n, this._gameRect.height, e);
                this.handleMoveState(this._activeMouseTouchRect, i, r, "mouse")
            }, r.prototype.onTouchEndOutsideHL = function(t) {
                this.onTouchEndHL(t)
            }, r.prototype.onTouchEndHL = function(t) {
                o.removeEventListener("touchmove", this.onTouchMoveHL, !1);
                for (var e = t.changedTouches, n = e.length, i = n - 1; i >= 0; i--) {
                    var r = e[i];
                    this._validTouchMoveIdentifiers && this._validTouchMoveIdentifiers[r.identifier] && delete this._validTouchMoveIdentifiers[r.identifier]
                }
                if (this._hitList)
                    for (var a = this._hitList.length, i = n - 1; i >= 0; i--)
                        for (var r = e[i], s = 0; s < a; s++) {
                            var u = this._hitList[s];
                            if (u.touchId == r.identifier) {
                                this.handleUPState(u, NaN, NaN);
                                break
                            }
                        }
                var c = t.currentTarget == document;
                c || (t.stopPropagation(), t.preventDefault())
            }, r.prototype.onTouchStartHL = function(e) {
                for (var n = e.changedTouches, i = n.length, r = o.getBoundingClientRect(), a = !1, s = i - 1; s >= 0; s--) {
                    var u = n[s],
                        c = t.MouseUtils.getTouchX(r, this._gameRect.width, u),
                        l = t.MouseUtils.getTouchY(r, this._gameRect.height, u),
                        h = this.getMouseTouchHitRect(c, l);
                    if (h) {
                        h.touchId = u.identifier, h.isPressed = !0, a = !0, this._validTouchMoveIdentifiers[u.identifier] = {
                            x: c,
                            y: l
                        }, this._activeMouseTouchRect = h, this.handleDOWNState(h, c, l);
                        break
                    }
                    this.handleDOWNState(h, c, l)
                }
                o.removeEventListener("touchmove", this.onTouchMoveHL, !1), a && o.addEventListener("touchmove", this.onTouchMoveHL, !1), e.stopPropagation(), e.preventDefault()
            }, r.prototype.onTouchMoveHL = function(e) {
                for (var n = o.getBoundingClientRect(), i = e.changedTouches, r = i.length, a = r - 1; a >= 0; a--) {
                    var s = i[a],
                        u = this._validTouchMoveIdentifiers[s.identifier];
                    if (u) {
                        var c = t.MouseUtils.getTouchX(n, this._gameRect.width, s),
                            l = t.MouseUtils.getTouchY(n, this._gameRect.height, s);
                        this.handleMoveState(this._activeMouseTouchRect, c, l, s.identifier)
                    }
                }
            }, r.prototype.getMouseTouchHitRect = function(t, e) {
                if (!this._hitList) return null;
                for (var n = this._hitList.length, o = 0; o < n; o++) {
                    var i = this._hitList[o];
                    if (i.rect && i.rect.contains(t, e)) return i
                }
                return null
            }, r.prototype.handleMoveState = function(e, n, o, i) {
                var r = this._validTouchMoveIdentifiers[i];
                if (r && e && (!e || e.isPressed)) {
                    if (this._enableTouchMove) {
                        var a = new t.MouseTouchEvent(t.MouseTouchEvent.TOUCH_MOVE);
                        a.id = e.id, a.position.set(n, o), this.emit(a.type, a)
                    }
                    if (this._enableMovedLeftOrRightAfterDown) {
                        var s = t.MathUtils.distanceBetweenTwoPoints(r.x, r.y, n, o);
                        if (s >= 40) {
                            var u = n < r.x;
                            r.x = n, r.y = o;
                            var c;
                            c = u ? new t.MouseTouchEvent(t.MouseTouchEvent.MOVED_LEFT_AFTER_DOWN) : new t.MouseTouchEvent(t.MouseTouchEvent.MOVED_RIGHT_AFTER_DOWN), c.id = e.id, c.position.set(n, o), this.emit(c.type, c)
                        }
                    }
                }
            }, r.prototype.handleDOWNState = function(e, n, o) {
                if (e && 1 == e.isPressed) {
                    var i = new t.MouseTouchEvent(t.MouseTouchEvent.DOWN);
                    e.buttonIndex >= 0 ? (i.id = e.id, i.buttonIndex = e.buttonIndex) : i.id = e.id, i.position.set(n, o), this.emit(i.type, i)
                }
            }, r.prototype.handleUPState = function(e, n, o) {
                if (e && 1 == e.isPressed) {
                    e.isPressed = !1, e.touchId = -1;
                    var i = new t.MouseTouchEvent(t.MouseTouchEvent.UP);
                    e.buttonIndex >= 0 ? (i.id = e.id, i.buttonIndex = e.buttonIndex) : i.id = e.id, i.position.set(n, o), this.emit(i.type, i), this.setAllButtonsRollOut()
                }
            }, r.prototype.getRectIndex = function(t) {
                for (var e = this._hitList.length, n = 0; n < e; n++)
                    if (t == this._hitList[n].id) return n;
                return -1
            }, r.prototype.dispose = function() {
                if (this.setEnable(!1), this._hitList) {
                    for (var t = this._hitList.length, e = 0; e < t; e++) this._hitList[e].dispose(), this._hitList[e] = null;
                    this._hitList.length = 0
                }
                this._hitList = null, this._gameRect = null, this._validTouchMoveIdentifiers = null, this._rollOverMap && this._rollOverMap.clear(), this._rollOverMap = null
            }, r
        }(EventEmitter);
        t.MouseTouchControl = i
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(e, i) {
                var r = n.call(this) || this;
                r._touchPositionOffset = 0, r._isPaused = !1, r._gameRect = e, r._halfGameWidth = .5 * r._gameRect.width | 0, r._inputType = i;
                var a = r._inputType == t.InputType.TOUCH;
                return r._touchPositionOffset = a ? o.SHIP_TOUCH_MOVE_OFFSET : 0, r
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this._keyboard = new t.KeyboardControl, this._keyboard.addListener(t.KeyboardControlEvent.DOWN, this.onKeyDownHL, this), this._keyboard.addListener(t.KeyboardControlEvent.UP, this.onKeyUpHL, this), this._mouseTouch = new t.MouseTouchControl(this._gameRect), this._mouseTouch.addListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._gamePad = new t.GamepadControl, this._gamePad.addListener(t.GamepadControlEvent.BUTTON_DOWN, this.onGamepadKeyDownHL, this), this._gamePad.addListener(t.GamepadControlEvent.BUTTON_UP, this.onGamepadKeyUpHL, this), this.setEnabled(!0), this.onHeroAdded = this.onHeroAdded.bind(this), this.onHeroRemoved = this.onHeroRemoved.bind(this), this.world.entityAdded(t.HeroComponent.CNAME).add(this.onHeroAdded), this.world.entityRemoved(t.HeroComponent.CNAME).add(this.onHeroRemoved), this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    e._isPaused = o.pause
                })
            }, o.prototype.onHeroAdded = function(t) {
                this._isPaused = !1, this.setEnabled(!0)
            }, o.prototype.onHeroRemoved = function(t) {
                this.setEnabled(!1)
            }, o.prototype.setEnabled = function(t) {
                this._keyboard.setEnabled(t), this._mouseTouch.setEnable(t), this._gamePad.setEnabled(t), this.removeRects(), t && this.addRects()
            }, o.prototype.addRects = function() {
                this._keyboard.addKeyMonitor([t.KeyCode.Z, t.KeyCode.SPACE], t.InputHitRectID.JUMP_TRACK), this._keyboard.addKeyMonitor([t.KeyCode.P, t.KeyCode.ESCAPE], t.InputHitRectID.PAUSE_TOGGLE), this._keyboard.addKeyMonitor([t.KeyCode.M], t.InputHitRectID.MUTE_TOGGLE), this._mouseTouch.addHitRect(new PIXI.Rectangle(0, 200, 506, 900), t.InputHitRectID.JUMP_TRACK), this._gamePad.addButtonMonitor([t.GamepadButtonIndex.A_BUTTON], t.InputHitRectID.JUMP_TRACK), this._gamePad.addButtonMonitor([t.GamepadButtonIndex.START_BUTTON, t.GamepadButtonIndex.BACK_BUTTON], t.InputHitRectID.PAUSE_TOGGLE)
            }, o.prototype.removeRects = function() {
                this._keyboard.removeKeyMonitor(t.InputHitRectID.JUMP_TRACK), this._keyboard.removeKeyMonitor(t.InputHitRectID.PAUSE_TOGGLE), this._mouseTouch.removeHitRect(t.InputHitRectID.JUMP_TRACK), this._mouseTouch.removeHitRect(t.InputHitRectID.PAUSE_TOGGLE)
            }, o.prototype.onGamepadKeyDownHL = function(t) {
                var e = !0,
                    n = null;
                this.handleInputs(t.keyID, e, n)
            }, o.prototype.onGamepadKeyUpHL = function(t) {
                var e = !1,
                    n = null;
                this.handleInputs(t.keyID, e, n)
            }, o.prototype.onKeyDownHL = function(t) {
                var e = !0,
                    n = null;
                this.handleInputs(t.keyID, e, n)
            }, o.prototype.onKeyUpHL = function(t) {
                var e = !1,
                    n = null;
                this.handleInputs(t.keyID, e, n)
            }, o.prototype.onTouchDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.id, e, t.position)
            }, o.prototype.onTouchUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.id, e, t.position)
            }, o.prototype.handleInputs = function(e, n, o, i) {
                void 0 === o && (o = null), void 0 === i && (i = 1);
                var r = this.world.getEntities(t.PlayerInputComponent.CNAME);
                switch (e) {
                    case t.InputHitRectID.PAUSE_TOGGLE:
                        for (var a = r.length - 1; a >= 0; a--) {
                            var s = r[a],
                                u = s.getComponent(t.PlayerInputComponent.CNAME);
                            u.pause = !n, n && t.SoundManager.playSFX(t.SFXType.CLICK)
                        }
                        break;
                    case t.InputHitRectID.JUMP_TRACK:
                        if (this._isPaused) return;
                        for (var a = r.length - 1; a >= 0; a--) {
                            var s = r[a],
                                u = s.getComponent(t.PlayerInputComponent.CNAME);
                            u.jump = n
                        }
                        break;
                    case t.InputHitRectID.MUTE_TOGGLE:
                        for (var a = r.length - 1; a >= 0; a--) {
                            var s = r[a],
                                u = s.getComponent(t.PlayerInputComponent.CNAME);
                            u.mute = n, n && t.SoundManager.playSFX(t.SFXType.CLICK)
                        }
                }
            }, o.prototype.cleanup = function() {
                this._keyboard && (this._keyboard.removeListener(t.KeyboardControlEvent.DOWN, this.onKeyDownHL, this), this._keyboard.removeListener(t.KeyboardControlEvent.UP, this.onKeyUpHL, this), this._keyboard.dispose(), this._keyboard = null), this._mouseTouch && (this._mouseTouch.removeListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.dispose(), this._mouseTouch = null), this._gamePad && (this._gamePad.removeListener(t.GamepadControlEvent.BUTTON_DOWN, this.onGamepadKeyDownHL, this), this._gamePad.removeListener(t.GamepadControlEvent.BUTTON_UP, this.onGamepadKeyUpHL, this), this._gamePad.dispose(), this._gamePad = null), n.prototype.cleanup.call(this)
            }, o.SHIP_TOUCH_MOVE_OFFSET = 100, o
        }(t.AbstractSystem);
        t.PlayerInputSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(e, o) {
                void 0 === o && (o = !0);
                var i = n.call(this) || this;
                i._trailAlphaReducer = .01, i._showParticle = !1, i._isPaused = !1, i._container = e;
                var r = .9;
                if (r < 0 || r > 1) throw new Error("invalid trail size");
                return i._trailAlphaReducer = 0 == r ? 1 : t.MathUtils.mapRange(r, 0, 1, .2, .01), i._trailAlphaReducer > 1 && (i._trailAlphaReducer = 1), i._showParticle = o, i
            }
            return e(o, n), o.prototype.cleanup = function() {
                this.clearContainers(), this._previousPosition = null, this._container = null, n.prototype.cleanup.call(this)
            }, o.prototype.addedToWorld = function(e) {
                var o = this;
                n.prototype.addedToWorld.call(this, e), 1 != this._trailAlphaReducer && (this.reset(), this.world.entityAdded(t.TrackComponent.CNAME).add(function(e) {
                    o._isPaused = !1, o.createContainers();
                    var n = o.world.getEntities(t.HeroComponent.CNAME, t.PositionComponent.CNAME),
                        i = n ? n[0] : null;
                    if (i) {
                        var r = e.getComponent(t.TrackComponent.CNAME),
                            a = i.getComponent(t.HeroComponent.CNAME),
                            s = r.points[a.currentLaneType.name];
                        o._previousPosition.set(s[a.currentPointIndexInTrack], s[a.currentPointIndexInTrack + 1])
                    }
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.DestroyComponent.CNAME, t.PositionComponent.CNAME).add(function() {
                    o._particleEmitter && (o._particleEmitter.emit = !1)
                }), this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(e) {
                    var n = e.getComponent(t.PauseComponent.CNAME);
                    o._isPaused = n.pause, o._particleEmitter && (o._particleEmitter.autoUpdate = !n.pause)
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.ReachedTrackEndComponent.CNAME).add(function() {
                    o._particleEmitter && (o._particleEmitter.emit = !1)
                }), this.world.entityAdded(t.GameComponent.CNAME, t.RestartGameComponent.CNAME).add(function() {
                    o.clearContainers()
                }))
            }, o.prototype.createContainers = function() {
                if (this.clearContainers(), this._trailContainer = new PIXI.Container, this._container.addChild(this._trailContainer), this._showParticle) {
                    var e = 100;
                    this._particleContainer = new PIXI.particles.ParticleContainer(e, {
                        scale: !0,
                        position: !0,
                        rotation: !0,
                        uvs: !0,
                        alpha: !0
                    }), this._container.addChild(this._particleContainer);
                    var n = [t.Res.texture.particle()],
                        o = t.ParticleConfigs.heroParticle(e);
                    this._particleEmitter = new PIXI.particles.Emitter(this._particleContainer, n, o), this._particleEmitter.autoUpdate = !0, this._particleEmitter.emit = !0
                }
            }, o.prototype.clearContainers = function() {
                this._trailContainer && (t.DisplayObjectUtils.removeFromParent(this._trailContainer), this._trailContainer = null), this._particleEmitter && (this._particleEmitter.emit = !1, this._particleEmitter.destroy(), this._particleEmitter = null), this._particleContainer && (t.DisplayObjectUtils.removeFromParent(this._particleContainer), this._particleContainer = null)
            }, o.prototype.reset = function() {
                this._previousPosition || (this._previousPosition = new PIXI.Point(0, 0)), this._previousPosition.set(0, 0)
            }, o.prototype.update = function(e) {
                if (!this._isPaused && this._trailContainer) {
                    this.removeOldTrails();
                    var n = this.world.getEntities(t.HeroComponent.CNAME, t.PositionComponent.CNAME),
                        o = n ? n[0] : null;
                    if (o) {
                        var i = o.getComponent(t.PositionComponent.CNAME),
                            r = i.value.x,
                            a = i.value.y,
                            s = this.generateTrail(r, a);
                        this._trailContainer.addChild(s), this._particleEmitter && this._particleEmitter.updateSpawnPos(r, a), this._previousPosition.set(r, a)
                    }
                }
            }, o.prototype.removeOldTrails = function() {
                for (var t = this._trailContainer.children.length, e = t - 1; e >= 0; e--) {
                    var n = this._trailContainer.getChildAt(e);
                    if (n.alpha -= this._trailAlphaReducer, n.alpha <= 0) {
                        var o = this._trailContainer.removeChild(n);
                        o.destroy()
                    }
                }
            }, o.prototype.generateTrail = function(t, e) {
                var n = new PIXI.Graphics;
                return n.lineStyle(5, 16777215, 1), n.moveTo(this._previousPosition.x, this._previousPosition.y), n.lineTo(t, e), n
            }, o
        }(t.AbstractSystem);
        t.TrailSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                return null !== n && n.apply(this, arguments) || this
            }
            return e(o, n), o.prototype.update = function(e) {
                var n = t.EntityUtils.isPlayerCollidingWithDangerPoint(this.world);
                if (n) {
                    var o = t.EntityUtils.getPlayerEntity(this.world);
                    if (!o) return;
                    o.removeComponent(t.PlayerInputComponent.CNAME), o.addComponent(new t.DestroyComponent)
                }
            }, o
        }(t.AbstractSystem);
        t.CollisionSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t._jump = !1, t._isPaused = !1, t
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.world.entityAdded(t.HeroComponent.CNAME).add(function(t) {
                    e._jump = !1
                }), this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    e._isPaused = o.pause
                })
            }, o.prototype.update = function(e) {
                if (!this._isPaused) {
                    var n = t.EntityUtils.getPlayerEntity(this.world);
                    if (n) {
                        n.hasComponent(t.TrackChangedComponent.CNAME) && n.removeComponent(t.TrackChangedComponent.CNAME);
                        var o = n.getComponent(t.PlayerInputComponent.CNAME);
                        this.setJump(o.jump)
                    }
                }
            }, o.prototype.setJump = function(t) {
                this._jump != t && (this._jump = t, this._jump && this.performJump())
            }, o.prototype.performJump = function() {
                var e = t.EntityUtils.getPlayerEntity(this.world);
                if (e) {
                    var n = e.getComponent(t.HeroComponent.CNAME),
                        o = n.currentLaneType == t.LaneType.LANE_A ? t.LaneType.LANE_B : t.LaneType.LANE_A;
                    n.currentLaneType = o, t.SoundManager.playSFX(t.SFXType.JUMP);
                    var i = t.EntityUtils.isPlayerCollidingWithDangerPoint(this.world);
                    i || e.addComponent(new t.TrackChangedComponent(o))
                }
            }, o
        }(t.AbstractSystem);
        t.PlayerTrackChangeSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.trackChangeConfig = function(e, n) {
                var o = {
                    alpha: {
                        start: 1,
                        end: 1
                    },
                    scale: {
                        start: .07,
                        end: .01,
                        minimumScaleMultiplier: .5
                    },
                    color: {
                        start: "#e4f9ff",
                        end: "#3fcbff"
                    },
                    speed: {
                        start: 600,
                        end: 400,
                        minimumSpeedMultiplier: 1
                    },
                    acceleration: {
                        x: 0,
                        y: 0
                    },
                    maxSpeed: 0,
                    noRotation: !0,
                    rotationSpeed: {
                        min: 0,
                        max: 0
                    },
                    lifetime: {
                        min: 1,
                        max: 1.2
                    },
                    blendMode: "normal",
                    frequency: .001,
                    emitterLifetime: 1,
                    maxParticles: n,
                    pos: {
                        x: 0,
                        y: 0
                    },
                    addAtBack: !1,
                    spawnType: "circle",
                    spawnCircle: {
                        x: 0,
                        y: 0,
                        r: 0
                    }
                };
                return e == t.LaneType.LANE_A ? o.startRotation = {
                    min: -45,
                    max: 45
                } : e == t.LaneType.LANE_B && (o.startRotation = {
                    min: 90,
                    max: 270
                }), o
            }, e.fallingSquare = function(t) {
                return void 0 === t && (t = 100), {
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    scale: {
                        start: .05,
                        end: .05,
                        minimumScaleMultiplier: 1
                    },
                    color: {
                        start: "#ffffff",
                        end: "#ffffff"
                    },
                    speed: {
                        start: 50,
                        end: 1e3,
                        minimumSpeedMultiplier: .6
                    },
                    acceleration: {
                        x: 0,
                        y: 0
                    },
                    maxSpeed: 0,
                    startRotation: {
                        min: 90,
                        max: 90
                    },
                    noRotation: !0,
                    rotationSpeed: {
                        min: 0,
                        max: 0
                    },
                    lifetime: {
                        min: 2,
                        max: 20
                    },
                    blendMode: "normal",
                    frequency: .1,
                    emitterLifetime: -1,
                    maxParticles: t,
                    pos: {
                        x: 0,
                        y: 0
                    },
                    addAtBack: !1,
                    spawnType: "rect",
                    spawnRect: {
                        x: 0,
                        y: 0,
                        w: 506,
                        h: 900
                    }
                }
            }, e.heroParticle = function(t) {
                return {
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    scale: {
                        start: .04,
                        end: .01,
                        minimumScaleMultiplier: 1
                    },
                    color: {
                        start: "#e4f9ff",
                        end: "#3fcbff"
                    },
                    speed: {
                        start: 200,
                        end: 50,
                        minimumSpeedMultiplier: 1
                    },
                    acceleration: {
                        x: 0,
                        y: 0
                    },
                    maxSpeed: 0,
                    startRotation: {
                        min: 0,
                        max: 360
                    },
                    noRotation: !0,
                    rotationSpeed: {
                        min: 0,
                        max: 0
                    },
                    lifetime: {
                        min: .2,
                        max: 1
                    },
                    blendMode: "normal",
                    frequency: .001,
                    emitterLifetime: -1,
                    maxParticles: t,
                    pos: {
                        x: 0,
                        y: 0
                    },
                    addAtBack: !1,
                    spawnType: "circle",
                    spawnCircle: {
                        x: 0,
                        y: 0,
                        r: 0
                    }
                }
            }, e.backgroundSquare = function(t) {
                return {
                    alpha: {
                        start: .5,
                        end: 0
                    },
                    scale: {
                        start: .1,
                        end: 1,
                        minimumScaleMultiplier: .5
                    },
                    color: {
                        start: "#ffffff",
                        end: "#ffffff"
                    },
                    speed: {
                        start: 0,
                        end: 0,
                        minimumSpeedMultiplier: 1
                    },
                    acceleration: {
                        x: 0,
                        y: 0
                    },
                    maxSpeed: 0,
                    startRotation: {
                        min: 0,
                        max: 360
                    },
                    noRotation: !1,
                    rotationSpeed: {
                        min: 0,
                        max: 180
                    },
                    lifetime: {
                        min: 1,
                        max: 3
                    },
                    blendMode: "normal",
                    frequency: .001,
                    emitterLifetime: -1,
                    maxParticles: t,
                    pos: {
                        x: 0,
                        y: 0
                    },
                    addAtBack: !1,
                    spawnType: "rect",
                    spawnRect: {
                        x: 0,
                        y: 0,
                        w: 506,
                        h: 900
                    }
                }
            }, e.playerDie = function(t) {
                return void 0 === t && (t = 100), {
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    scale: {
                        start: .05,
                        end: .2,
                        minimumScaleMultiplier: .5
                    },
                    color: {
                        start: "#ffffff",
                        end: "#ffffff"
                    },
                    speed: {
                        start: 500,
                        end: 200,
                        minimumSpeedMultiplier: 1
                    },
                    acceleration: {
                        x: 0,
                        y: 0
                    },
                    maxSpeed: 0,
                    startRotation: {
                        min: 0,
                        max: 0
                    },
                    noRotation: !1,
                    rotationSpeed: {
                        min: 0,
                        max: 0
                    },
                    lifetime: {
                        min: 1,
                        max: 1
                    },
                    blendMode: "normal",
                    frequency: .01,
                    emitterLifetime: .5,
                    maxParticles: t,
                    pos: {
                        x: 0,
                        y: 0
                    },
                    addAtBack: !1,
                    spawnType: "burst",
                    particlesPerWave: 50,
                    particleSpacing: 0,
                    angleStart: 0
                }
            }, e
        }();
        t.ParticleConfigs = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t) {
                var e = n.call(this) || this;
                return e._emitterList = {}, e._particleCount = 50, e._container = t, e
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this._emitterList[t.LaneType.LANE_A.name] = [], this._emitterList[t.LaneType.LANE_B.name] = [];
                var n = {
                        scale: !0,
                        position: !0,
                        rotation: !0,
                        uvs: !0,
                        alpha: !0
                    },
                    o = this._particleCount;
                this._particleContainer = new PIXI.particles.ParticleContainer(o, n), this._container.addChild(this._particleContainer), this.world.entityAdded(t.TrackChangedComponent.CNAME, t.HeroComponent.CNAME).add(function(n) {
                    var o = t.EntityUtils.getTrackEntity(e.world);
                    if (o) {
                        var i = n.getComponent(t.HeroComponent.CNAME),
                            r = o.getComponent(t.TrackComponent.CNAME),
                            a = i.currentLaneType.name,
                            s = r.points[a],
                            u = s[i.currentPointIndexInTrack],
                            c = s[i.currentPointIndexInTrack + 1];
                        e.showParticleAnimation(i.currentLaneType, u, c)
                    }
                }), this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    for (var o = n.getComponent(t.PauseComponent.CNAME), i = t.LaneType.LANE_A.name, r = e._emitterList[i].length, a = 0; a < r; a++) {
                        var s = e._emitterList[i][a];
                        s.autoUpdate = !o.pause
                    }
                    i = t.LaneType.LANE_B.name, r = e._emitterList[i].length;
                    for (var a = 0; a < r; a++) {
                        var s = e._emitterList[i][a];
                        s.autoUpdate = !o.pause
                    }
                }), this.world.entityAdded(t.GameComponent.CNAME, t.RestartGameComponent.CNAME).add(function() {
                    e.destroyEmitters()
                })
            }, o.prototype.destroyEmitters = function() {
                for (var e = t.LaneType.LANE_A.name, n = this._emitterList[e].length, o = 0; o < n; o++) {
                    var i = this._emitterList[e][o];
                    i.destroy()
                }
                e = t.LaneType.LANE_B.name, n = this._emitterList[e].length;
                for (var o = 0; o < n; o++) {
                    var i = this._emitterList[e][o];
                    i.destroy()
                }
                this._emitterList[t.LaneType.LANE_A.name].length = 0, this._emitterList[t.LaneType.LANE_B.name].length = 0
            }, o.prototype.cleanup = function() {
                this.destroyEmitters(), this._emitterList = null, this._particleContainer && (t.DisplayObjectUtils.removeFromParent(this._particleContainer), this._particleContainer = null), this._container = null, n.prototype.cleanup.call(this)
            }, o.prototype.showParticleAnimation = function(e, n, o) {
                var i = this.getEmitterFromPool(e);
                if (!i) {
                    var r = [t.Res.texture.particle()],
                        a = t.ParticleConfigs.trackChangeConfig(e, this._particleCount);
                    i = new PIXI.particles.Emitter(this._container, r, a), this._emitterList[e.name].push(i)
                }
                i.updateOwnerPos(n, o), i.autoUpdate = !0, i.emit = !0
            }, o.prototype.getEmitterFromPool = function(t) {
                for (var e = this._emitterList[t.name], n = e.length, o = 0; o < n; o++) {
                    var i = e[o];
                    if (!i.emit) return i
                }
                return null
            }, o
        }(t.AbstractSystem);
        t.TrackChangeAnimationSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.shuffle = function(t) {
                for (var e = t.length - 1; e > 0; e--) {
                    var n = Math.floor(Math.random() * (e + 1)),
                        o = t[e];
                    t[e] = t[n], t[n] = o
                }
            }, t
        }();
        t.ArrayUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {
                this._regularData = new n([
                    function(t, e) {
                        t.fill(1, 0, 100), e.fill(1, 150, 180), t.fill(1, 400, 430)
                    },
                    function(t, e) {
                        e.fill(1, 0, 150), t.fill(1, 300, 330), e.fill(1, 400, 450)
                    },
                    function(t, e) {
                        e.fill(1, 0, 30), t.fill(1, 100, 130), e.fill(1, 200, 230), t.fill(1, 300, 330), e.fill(1, 400, 430)
                    },
                    function(t, e) {
                        t.fill(1, 0, 50), e.fill(1, 100, 120), t.fill(1, 300, 370)
                    },
                    function(t, e) {
                        e.fill(1, 0, 20), t.fill(1, 150, 170), t.fill(1, 200, 220), e.fill(1, 280, 350)
                    }
                ]), this._hardData = new n([
                    function(t, e) {
                        e.fill(1, 0, 50), t.fill(1, 90, 100), e.fill(1, 150, 200), t.fill(1, 240, 250), e.fill(1, 300, 350), t.fill(1, 390, 400)
                    },
                    function(t, e) {
                        e.fill(1, 0, 150), t.fill(1, 200, 250), e.fill(1, 300, 350), t.fill(1, 400, 450)
                    },
                    function(t, e) {
                        e.fill(1, 0, 20), t.fill(1, 100, 120), e.fill(1, 200, 220), t.fill(1, 300, 320), e.fill(1, 400, 420)
                    },
                    function(t, e) {
                        t.fill(1, 0, 100), e.fill(1, 150, 180), t.fill(1, 400, 430)
                    },
                    function(t, e) {
                        e.fill(1, 0, 150), t.fill(1, 300, 330), e.fill(1, 400, 450)
                    },
                    function(t, e) {
                        e.fill(1, 0, 30), t.fill(1, 100, 130), e.fill(1, 200, 230), t.fill(1, 300, 330), e.fill(1, 400, 430)
                    },
                    function(t, e) {
                        t.fill(1, 0, 50), e.fill(1, 100, 120), t.fill(1, 300, 370)
                    },
                    function(t, e) {
                        e.fill(1, 0, 20), t.fill(1, 150, 170), t.fill(1, 200, 220), e.fill(1, 280, 350)
                    }
                ])
            }
            return e.prototype.randomize = function() {
                this._regularData.reset(), this._hardData.reset()
            }, e.prototype.generate = function(e) {
                e = t.TrackDifficultyType.HARD;
                var n = new Float32Array(500),
                    o = new Float32Array(500),
                    i = e == t.TrackDifficultyType.REGULAR ? this._regularData : this._hardData,
                    r = i.getNextFunction();
                return r(n, o), new t.TrackFloat32Array(n, o)
            }, e.prototype.dispose = function() {
                this._regularData && (this._regularData.dispose(), this._regularData = null), this._hardData && (this._hardData.dispose(), this._hardData = null)
            }, e
        }();
        t.DangerPointsGenerator = e;
        var n = function() {
            function e(t) {
                this._randomIndexes = [], this._len = 0, this._data = t;
                for (var e = this._data.length; this._randomIndexes.length < 100;)
                    for (var n = 0; n < e; n++) this._randomIndexes.push(n);
                this._len = this._randomIndexes.length, this.reset()
            }
            return e.prototype.reset = function() {
                this._currentIndexOfRandomList = 0, t.ArrayUtils.shuffle(this._randomIndexes)
            }, e.prototype.getNextFunction = function() {
                var t = this._randomIndexes[this._currentIndexOfRandomList],
                    e = this._data[t] || this._data[0];
                return this._currentIndexOfRandomList++, this._currentIndexOfRandomList >= this._len && this.reset(), e
            }, Object.defineProperty(e.prototype, "data", {
                get: function() {
                    return this._data
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function() {
                this._data && (this._data.length = 0, this._data = null), this._randomIndexes && (this._randomIndexes.length = 0, this._randomIndexes = null)
            }, e
        }()
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t, e) {
                this.laneA = t, this.laneB = e
            }
            return t
        }();
        t.TrackFloat32Array = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {}
            return t.REGULAR = new t("REGULAR"), t.HARD = new t("HARD"), t
        }();
        t.TrackDifficultyType = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {
                this._dangerPoints = new t.DangerPointsGenerator
            }
            return e.prototype.getTrackComponent = function() {
                var e = this;
                return new Promise(function(n) {
                    var o = window.performance.now(),
                        i = new t.TrackComponent,
                        r = e.generateTrackPoints();
                    i.points[t.LaneType.LANE_A.name] = r.laneA, i.points[t.LaneType.LANE_B.name] = r.laneB;
                    var a = e.getDangerPoints(r);
                    i.dangerPoints[t.LaneType.LANE_A.name] = a.laneA, i.dangerPoints[t.LaneType.LANE_B.name] = a.laneB, i.endPointIndex = r.laneA.length - 300;
                    window.performance.now() - o;
                    n(i)
                })
            }, e.prototype.generateTrackPoints = function() {
                for (var e = .5, n = 20, o = !1, i = [], r = [], a = 0, s = 0, u = 300, c = 250, l = 100, h = 900, d = 0; d < h; d++) {
                    var p = d >= 150;
                    p && (u > 250 && u--, c < 300 && c++), s -= l, a = t.MathUtils.randomInt(u, 400), i.push(a), i.push(s), a = t.MathUtils.randomInt(150, c), r.push(a), r.push(s)
                }
                var m = new t.TrackFloat32Array(t.PointUtils.getCurvePoints(i, e, n, o), t.PointUtils.getCurvePoints(r, e, n, o));
                return m
            }, e.prototype.getDangerPoints = function(e) {
                var n = e.laneA.length - 500,
                    o = new Float32Array(n),
                    i = new Float32Array(n),
                    r = 600,
                    a = 0;
                for (this._dangerPoints.randomize(); r < n;) {
                    for (var s = r < 7e3 ? t.TrackDifficultyType.REGULAR : t.TrackDifficultyType.HARD, u = this._dangerPoints.generate(s), c = u.laneA.length, l = 0, h = r; l < c && (o[h] = u.laneA[l], o[h + 1] = u.laneA[l + 1], i[h] = u.laneB[l], i[h + 1] = u.laneB[l + 1], !(h > n)); l += 2, h += 2);
                    r += c, a++
                }
                return new t.TrackFloat32Array(o, i)
            }, e.prototype.dispose = function() {
                this._dangerPoints && this._dangerPoints.dispose(), this._dangerPoints = null
            }, e
        }();
        t.TrackGenerator = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t, e) {
                var o = n.call(this) || this;
                return o._isPaused = !1, o._animate = e, o._backgroundContainer = new PIXI.Container, t.addChild(o._backgroundContainer), o
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this,
                    n = t.Res.sprite.bg_square();
                n.width = 506, n.height = 900, n.alpha = .8, this._backgroundContainer.addChild(n);
                var o = t.Res.texture.grid_bg();
                if (this._tilingSprite = new PIXI.extras.TilingSprite(o, 506, 900), this._tilingSprite.alpha = .4, this._backgroundContainer.addChild(this._tilingSprite), this._animate) {
                    this._particleContainer = new PIXI.particles.ParticleContainer(500, {
                        scale: !0,
                        position: !0,
                        rotation: !0,
                        uvs: !0,
                        alpha: !0
                    }), this._backgroundContainer.addChild(this._particleContainer);
                    var i = [t.Res.texture.bg_square()],
                        r = t.ParticleConfigs.backgroundSquare(45);
                    this._spinningSquareEmitter = new PIXI.particles.Emitter(this._particleContainer, i, r), this._spinningSquareEmitter.autoUpdate = !0, this._spinningSquareEmitter.emit = !0, this._fallingSquareContainer = new PIXI.particles.ParticleContainer(500, {
                        scale: !0,
                        position: !0,
                        rotation: !0,
                        uvs: !0,
                        alpha: !0
                    }), this._backgroundContainer.addChild(this._fallingSquareContainer);
                    var a = [t.Res.texture.bg_square()],
                        s = t.ParticleConfigs.fallingSquare(200);
                    this._fallingSquareEmitter = new PIXI.particles.Emitter(this._fallingSquareContainer, a, s), this._fallingSquareEmitter.autoUpdate = !0, this._fallingSquareEmitter.emit = !0
                }
                this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    e._isPaused = o.pause, e._spinningSquareEmitter && (e._spinningSquareEmitter.autoUpdate = !e._isPaused), e._fallingSquareEmitter && (e._fallingSquareEmitter.autoUpdate = !e._isPaused)
                })
            }, o.prototype.update = function(t) {
                if (!this._isPaused && this._animate) {
                    var e = this._tilingSprite.tilePosition;
                    e.x -= 1, e.y += 1, e.x < -80 && (e.x = 0), e.y > 80 && (e.y = 0)
                }
            }, o.prototype.cleanup = function() {
                this._tilingSprite = null, this._backgroundContainer && (t.DisplayObjectUtils.removeAllChildren(this._backgroundContainer), t.DisplayObjectUtils.removeFromParent(this._backgroundContainer)), this._backgroundContainer = null, this._spinningSquareEmitter && (this._spinningSquareEmitter.destroy(), this._spinningSquareEmitter = null), this._particleContainer && (t.DisplayObjectUtils.removeAllChildren(this._particleContainer), this._particleContainer = null), this._fallingSquareEmitter && (this._fallingSquareEmitter.destroy(), this._fallingSquareEmitter = null), this._fallingSquareContainer && (t.DisplayObjectUtils.removeAllChildren(this._fallingSquareContainer), this._fallingSquareContainer = null), n.prototype.cleanup.call(this)
            }, o
        }(t.AbstractSystem);
        t.BackgroundSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e() {}
            return e.getTrailSize = function(e) {
                return e == t.GraphicsQuality.LOW ? .1 : .9
            }, e
        }();
        t.FeatureConfig = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t, e, o) {
                var i = n.call(this) || this;
                return i._container = t, i._worldFilter = e, i._showShockWaveAnimation = o, i
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.world.entityAdded(t.HeroComponent.CNAME, t.DestroyComponent.CNAME, t.PositionComponent.CNAME).add(function(t) {
                    e.showDeathAnimation(t)
                })
            }, o.prototype.showDeathAnimation = function(e) {
                var n = this,
                    o = e.getComponent(t.PositionComponent.CNAME);
                if (this.addDeathParticleAnimationGfx(o.value), this._showShockWaveAnimation) {
                    var i = this.createRGBSplitter();
                    this._worldFilter.appendFilter(i, "rgb-split");
                    var r = this.createShockwaveFilter();
                    this._worldFilter.appendFilter(r, "shockwave"), t.Eaze.get(i.red, this).to({
                        x: [-20, 0, 20, 0]
                    }, 100).easing(TWEEN.Easing.Linear.None).repeat(2).start(), t.Eaze.get(r, this).to({
                        time: 3
                    }, 2e3).easing(TWEEN.Easing.Linear.None).start().onComplete(function() {
                        n.clearFilters()
                    })
                } else t.TimerUtils.delay(2e3).then(function() {
                    n.clearFilters()
                });
                t.VibrateUtils.death(), t.SoundManager.playSFX(t.SFXType.PLAYER_DIE), t.HarlemShake.shake()
            }, o.prototype.clearFilters = function() {
                this._worldFilter && this._worldFilter.removeFilters("rgb-split", "shockwave")
            }, o.prototype.createRGBSplitter = function() {
                var t = new PIXI.filters.RGBSplitFilter;
                return t.red = new PIXI.Point(0, 0), t.green = new PIXI.Point(0, 0), t.blue = new PIXI.Point(0, 0), t
            }, o.prototype.createShockwaveFilter = function() {
                var t = {
                        amplitude: 30,
                        wavelength: 160,
                        brightness: 1.2,
                        radius: 100
                    },
                    e = new PIXI.filters.ShockwaveFilter;
                return e.center = new PIXI.Point(253, 450), e.options = t, e.time = 0, e
            }, o.prototype.addDeathParticleAnimationGfx = function(e) {
                var n = 100,
                    o = this.createParticleContainer(n);
                this._container.addChild(o);
                var i = [t.Res.texture.particle()],
                    r = t.ParticleConfigs.playerDie(n);
                this._emitter = new PIXI.particles.Emitter(o, i, r), this._emitter.updateOwnerPos(e.x, e.y), this._emitter.autoUpdate = !0, this._emitter.playOnceAndDestroy()
            }, o.prototype.createParticleContainer = function(t) {
                var e = {
                    scale: !0,
                    position: !0,
                    rotation: !0,
                    uvs: !0,
                    alpha: !0
                };
                return new PIXI.particles.ParticleContainer(t, e)
            }, o.prototype.cleanup = function() {
                t.Eaze.removeAll(this), this.clearFilters(), this._emitter && (this._emitter.destroy(), this._emitter = null), this._worldFilter = null, this._container = null, n.prototype.cleanup.call(this)
            }, o
        }(t.AbstractSystem);
        t.PlayerDeathAnimationSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t(t) {
                this._list = {}, this._gfx = t
            }
            return t.prototype.appendFilter = function(t, e) {
                this._list[e] = t, this.apply()
            }, t.prototype.removeFilters = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (this._list && t && 0 != t.length) {
                    for (var n = t.length, o = 0; o < n; o++) {
                        var i = t[o];
                        this._list && this._list.hasOwnProperty(i) && delete this._list[i]
                    }
                    this.apply()
                }
            }, t.prototype.apply = function() {
                var t = [];
                for (var e in this._list)
                    if (this._list.hasOwnProperty(e)) {
                        var n = this._list[e];
                        t.push(n)
                    }
                t && t.length > 0 ? this._gfx.filters = t : this.clearFilter()
            }, t.prototype.clearFilter = function() {
                if (this._list)
                    for (var t in this._list) this._list.hasOwnProperty(t) && delete this._list[t];
                this._gfx && (this._gfx.filters = null)
            }, t.prototype.dispose = function() {
                this.clearFilter(), this._list = null, this._gfx = null
            }, t
        }();
        t.FilterApplier = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                return null !== n && n.apply(this, arguments) || this
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                this.world.entityAdded(t.HeroComponent.CNAME, t.DestroyComponent.CNAME).add(function(e) {
                    e.removeComponent(t.HeroComponent.CNAME), e.addComponent(new t.RemoveFromWorldComponent)
                })
            }, o
        }(t.AbstractSystem);
        t.DestroyPlayerSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e) {
                var o = t.call(this) || this;
                return o.name = n.CNAME, o.comboChainValue = e, o
            }
            return e(n, t), n.CNAME = "ScoreComboComponent", n
        }(CES.Component);
        t.ScoreComboComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t._comboChain = 0, t._timeoutId = -1, t
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.resetScore(), this.world.entityAdded(t.HeroComponent.CNAME).add(function() {
                    e.resetScore()
                }), this.world.entityAdded(t.TrackChangedComponent.CNAME, t.HeroComponent.CNAME).add(function() {
                    e.addScore(1), clearTimeout(e._timeoutId), e._comboChain++, 0 != e._comboChain && e._comboChain % 5 == 0 && e.addComboScore(e._comboChain), e._timeoutId = setTimeout(function() {
                        e._comboChain = 0
                    }, 500)
                })
            }, o.prototype.resetScore = function() {
                var e = t.EntityUtils.getGameEntity(this.world);
                if (e) {
                    var n = e.getComponent(t.GameComponent.CNAME);
                    n.score = 0
                }
            }, o.prototype.addScore = function(e) {
                var n = t.EntityUtils.getGameEntity(this.world);
                if (n) {
                    var o = n.getComponent(t.GameComponent.CNAME);
                    o.score += e
                }
            }, o.prototype.addComboScore = function(e) {
                this.addScore(e);
                var n = t.EntityUtils.getGameEntity(this.world);
                n && (n.hasComponent(t.ScoreComboComponent.CNAME) && n.removeComponent(t.ScoreComboComponent.CNAME), n.addComponent(new t.ScoreComboComponent(e)))
            }, o
        }(t.AbstractSystem);
        t.UpdateScoreSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t, e) {
                var o = n.call(this) || this;
                return o._currentScore = 0, o._plusOneGfxList = [], o._comboGfx = {}, o._showPlusOneAnimation = e, o._scoreContainer = new PIXI.Container, o._scoreContainer.position.set(253, 30), t.addChild(o._scoreContainer), o._plusOneContainer = new PIXI.Container, t.addChild(o._plusOneContainer), o._comboContainer = new PIXI.Container, t.addChild(o._comboContainer), o
            }
            return e(o, n), o.prototype.cleanup = function() {
                t.Eaze.removeAll(this), this._plusOneGfxList && (this._plusOneGfxList.length = 0, this._plusOneGfxList = null), this._comboContainer && (t.DisplayObjectUtils.removeAllChildren(this._comboContainer), t.DisplayObjectUtils.removeFromParent(this._comboContainer), this._comboContainer = null), this._plusOneContainer && (t.DisplayObjectUtils.removeAllChildren(this._plusOneContainer), t.DisplayObjectUtils.removeFromParent(this._plusOneContainer), this._plusOneContainer = null), this._scoreContainer && (t.DisplayObjectUtils.removeAllChildren(this._scoreContainer), t.DisplayObjectUtils.removeFromParent(this._scoreContainer), this._scoreContainer = null), this._comboGfx = null, n.prototype.cleanup.call(this)
            }, o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e._currentScore = 0, e.draw(), e.setVisible(!0)
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.DestroyComponent.CNAME).add(function() {
                    e.draw()
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.ReachedTrackEndComponent.CNAME).add(function() {
                    e.setVisible(!1)
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.DestroyComponent.CNAME).add(function() {
                    e.setVisible(!1)
                }), this._showPlusOneAnimation && this.world.entityAdded(t.TrackChangedComponent.CNAME, t.HeroComponent.CNAME).add(function(n) {
                    var o = t.EntityUtils.getTrackEntity(e.world);
                    if (o) {
                        var i = n.getComponent(t.HeroComponent.CNAME);
                        e.showPlusOneScoreGfx(i.currentLaneType)
                    }
                }), this.world.entityAdded(t.ScoreComboComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.ScoreComboComponent.CNAME),
                        i = o.comboChainValue;
                    e.showComboGfx(i)
                })
            }, o.prototype.update = function(e) {
                var n = t.EntityUtils.getGameEntity(this.world);
                if (n) {
                    var o = n.getComponent(t.GameComponent.CNAME);
                    this._currentScore != o.score && (this._currentScore = o.score, this.draw())
                }
                if (this._plusOneGfxList)
                    for (var i = 0, r = this._plusOneGfxList.length - 1; r >= 0; r--) {
                        var a = this._plusOneGfxList[r];
                        0 != a.alpha && (a.position.y -= 1 + i, a.position.x += i + a.mDirection, i += .4, i > 2 && (i = 2))
                    }
            }, o.prototype.setVisible = function(e) {
                var n = this,
                    o = e ? 100 : 400,
                    i = e ? 1 : 0;
                t.Eaze.get(this._scoreContainer, this).to({
                    alpha: i
                }, o).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    n._scoreContainer.visible = e
                }).start()
            }, o.prototype.showPlusOneScoreGfx = function(e) {
                var n = e == t.LaneType.LANE_A ? 1 : -1,
                    o = 253 + 100 * n,
                    i = 600,
                    r = this.getPlusOneGfxFromCache();
                t.Eaze.removeTween(r.scale), t.Eaze.removeTween(r), r.mDirection = n, r.anchor.set(.5, .5), r.scale.set(0, 0), r.alpha = 1, r.position.set(o, i), this._plusOneContainer.addChild(r), t.Eaze.get(r.scale, this).to({
                    x: 1,
                    y: 1
                }, 500).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(r, this).to({
                    alpha: 0
                }, 1e3).delay(600).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    t.DisplayObjectUtils.removeFromParent(r)
                }).start()
            }, o.prototype.getPlusOneGfxFromCache = function() {
                if (this._plusOneGfxList)
                    for (var e = this._plusOneGfxList.length - 1; e >= 0; e--) {
                        var n = this._plusOneGfxList[e];
                        if (0 == n.alpha) return n
                    }
                var o = t.Res.sprite.plusone();
                return this._plusOneGfxList.push(o), o
            }, o.prototype.showComboGfx = function(e) {
                var n = this._comboGfx[e] || null;
                n || (n = this.createComboGfx(e), this._comboGfx[e] = n), t.Eaze.removeTween(n.scale), t.Eaze.removeTween(n), t.Eaze.removeTween(n.position), n.position.set(253, 100), n.scale.set(0, 0), n.alpha = 1, this._comboContainer.addChild(n), t.Eaze.get(n.scale, this).to({
                    x: [1.6, 1],
                    y: [1.6, 1]
                }, 600).easing(TWEEN.Easing.Back.Out).start();
                var o = 1e3;
                t.Eaze.get(n, this).delay(o).to({
                    alpha: 0
                }, 200).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(n.position, this).delay(o).to({
                    y: 200
                }, 200).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    t.DisplayObjectUtils.removeFromParent(n)
                }).start()
            }, o.prototype.createComboGfx = function(e) {
                var n = new PIXI.Container,
                    o = t.Res.sprite.combo();
                n.addChild(o);
                var i = t.SpriteFont.getGameOverScoreNumberSprite(e.toString());
                i.position.x = n.width + 2, n.addChild(i), n.position.x = -(n.width >> 1), n.position.y = -(n.height >> 1);
                var r = new PIXI.Container;
                return r.addChild(n), r
            }, o.prototype.draw = function() {
                if (this._scoreContainer) {
                    t.DisplayObjectUtils.removeAllChildren(this._scoreContainer);
                    var e = t.SpriteFont.getScoreNumberSprite(this._currentScore.toString());
                    e.position.x = -(.5 * e.width), e.position.y = -(.5 * e.height), this._scoreContainer.addChild(e)
                }
            }, o
        }(t.AbstractSystem);
        t.RenderScoreSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(n) {
    var o;
    ! function(n) {
        var o = function(o) {
            function i(t, e, n) {
                var i = o.call(this) || this;
                return i._container = new PIXI.Container, t.addChild(i._container), i._gameRect = e, i._hasCRTFilter = n, i
            }
            return e(i, o), i.prototype.cleanup = function() {
                n.Eaze.removeAll(this), this._mouseTouch && (this._mouseTouch.removeListener(n.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.removeListener(n.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.removeListener(n.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.removeListener(n.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this), this._mouseTouch.dispose(), this._mouseTouch = null), this._keyboard && (this._keyboard.removeListener(n.KeyboardControlEvent.DOWN, this.onKeyDownHL, this), this._keyboard.removeListener(n.KeyboardControlEvent.UP, this.onKeyUpHL, this), this._keyboard.dispose(), this._keyboard = null), this._container && (n.DisplayObjectUtils.removeAllChildren(this._container), n.DisplayObjectUtils.removeFromParent(this._container), this._container = null), this._playAgainButton && (this._playAgainButton.dispose(), this._playAgainButton = null), this._moreGamesButton && (this._moreGamesButton.dispose(), this._moreGamesButton = null), this._youWinInfo = null, this._youWinTitle = null, this._gameOverTitle = null, this._gameRect = null, o.prototype.cleanup.call(this)
            }, i.prototype.afterAddedToWorld = function() {
                var t = this;
                this.show = this.show.bind(this), this.world.entityAdded(n.HeroComponent.CNAME, n.DestroyComponent.CNAME).add(function() {
                    t.show(!1)
                }), this.world.entityAdded(n.HeroComponent.CNAME, n.ReachedTrackEndComponent.CNAME).add(function() {
                    t.show(!0)
                }), this._mouseTouch = new n.MouseTouchControl(this._gameRect), this._mouseTouch.addListener(n.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.addListener(n.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.addListener(n.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.addListener(n.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this), this._keyboard = new n.KeyboardControl, this._keyboard.addListener(n.KeyboardControlEvent.DOWN, this.onKeyDownHL, this), this._keyboard.addListener(n.KeyboardControlEvent.UP, this.onKeyUpHL, this)
            }, i.prototype.setEnableInput = function(t) {
                this._mouseTouch.setEnable(t), this._keyboard.setEnabled(t), t ? (this._mouseTouch.addHitRect(this._playAgainButton.hitRect, n.InputHitRectID.GAME_OVER_PLAY_AGAIN), this._mouseTouch.addHitRect(this._moreGamesButton.hitRect, n.InputHitRectID.GAME_OVER_MORE_GAMES), this._keyboard.addKeyMonitor([n.KeyCode.ENTER, n.KeyCode.SPACE], n.InputHitRectID.GAME_OVER_PLAY_AGAIN)) : (this._mouseTouch.removeHitRect(n.InputHitRectID.GAME_OVER_PLAY_AGAIN), this._mouseTouch.removeHitRect(n.InputHitRectID.GAME_OVER_MORE_GAMES), this._keyboard.removeKeyMonitor(n.InputHitRectID.GAME_OVER_PLAY_AGAIN))
            }, i.prototype.onKeyDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.keyID, e)
            }, i.prototype.onKeyUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.keyID, e)
            }, i.prototype.onTouchDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.id, e)
            }, i.prototype.onTouchUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.id, e)
            }, i.prototype.onMouseRollOverHL = function(t) {
                this.handleRollOverAndOut(t.id, !0)
            }, i.prototype.onMouseRollOutHL = function(t) {
                this.handleRollOverAndOut(t.id, !1)
            }, i.prototype.handleRollOverAndOut = function(t, e) {
                var o = e ? 9356278 : 16777215;
                switch (t) {
                    case n.InputHitRectID.GAME_OVER_PLAY_AGAIN:
                        this._playAgainButton.canvas.tint = o, e && n.SoundManager.playSFX(n.SFXType.BUTTON_ROLL_OVER);
                        break;
                    case n.InputHitRectID.GAME_OVER_MORE_GAMES:
                        this._moreGamesButton.canvas.tint = o, e && n.SoundManager.playSFX(n.SFXType.BUTTON_ROLL_OVER)
                }
            }, i.prototype.handleInputs = function(t, e) {
                var o = this;
                switch (t) {
                    case n.InputHitRectID.GAME_OVER_PLAY_AGAIN:
                        e ? this._playAgainButton.onButtonDown() : this._playAgainButton.onButtonUp(), e || (this._mouseTouch.setEnable(!1), this._keyboard.setEnabled(!1), this.hide().then(function() {
                            o.restartGame()
                        }));
                        break;
                    case n.InputHitRectID.GAME_OVER_MORE_GAMES:
                        // e ? this._moreGamesButton.onButtonDown() : this._moreGamesButton.onButtonUp(), e || window.open(p, "_blank")
                }
            }, i.prototype.submitScore = function(t) {
                // var e = {};
                // e.score = t, e.board = "cardinaal_runr_hsbxrds", LaggedAPI.Scores.save(e, function(t) {
                    // t.success
                // })
            }, i.prototype.submitAward = function(t) {
                // var e = [];
                // t >= 100 && e.push("cardin_runnr_vsa001"), t >= 150 && e.push("cardin_runnr_vsa002"), t >= 200 && e.push("cardin_runnr_vsa003"), t >= 300 && e.push("cardin_runnr_vsa004"), 0 != e.length && LaggedAPI.Achievements.save(e, function(t) {
                    // t.success
                // })
            }, i.prototype.showAD = function() {
                // 0 != m && "undefined" != typeof prerollStart && n.TimerUtils.delay(1e3).then(function() {
                    // LaggedAPI.APIAds.show("interstitial", "cardinal-run", "cardinal-run-game.jpg", function(t) {
                        // t.success
                    // }), t()
                // })
            }, i.prototype.show = function(t) {
                var e = this,
                    o = n.EntityUtils.getGameEntity(this.world),
                    i = o.getComponent(n.GameComponent.CNAME),
                    r = i.score,
                    a = 0,
                    s = !1;
                n.LocalStorageUtils.getNumber(n.LocalKey.SCORE).then(function(t) {
                    a = t
                }).catch(function(t) {}).then(function() {
                    if (r > a) return a = r, s = !0, n.LocalStorageUtils.saveAsPromise(n.LocalKey.SCORE, a.toString())
                }).then(function() {
                    n.Eaze.removeAll(e);
                    var o = 253,
                        i = 250;
                    if (e._gameOverTitle || (e._gameOverTitle = n.Res.sprite.gameover_txt(), e._gameOverTitle.anchor.set(.5, .5), e._gameOverTitle.position.set(o, i), e._gameOverTitle.originalPosition = new PIXI.Point(o, i)), t && !e._youWinTitle) {
                        var u = o,
                            c = i - 80;
                        e._youWinTitle = n.Res.sprite.youwin_txt(), e._youWinTitle.anchor.set(.5, .5), e._youWinTitle.position.set(u, c), e._youWinTitle.originalPosition = new PIXI.Point(u, c)
                    }
                    if (t && !e._youWinInfo) {
                        var u = o,
                            c = i + 150;
                        e._youWinInfo = n.Res.sprite.wininfo_txt(), e._youWinInfo.anchor.set(.5, .5), e._youWinInfo.position.set(u, c), e._youWinInfo.originalPosition = new PIXI.Point(u, c)
                    }
                    if (!e._playAgainButton) {
                        var l = n.Res.sprite.playagain_txt(),
                            u = o,
                            c = i + 400,
                            h = new PIXI.Rectangle(u - (l.width >> 1), c - (l.height >> 1), l.width, l.height);
                        e._hasCRTFilter && (h.y += 10, h.height += 30), e._playAgainButton = new n.SimpleButton(l, h, (!0), 0, (-80)), e._playAgainButton.setPosition(o, c), e._playAgainButton.originalPosition = new PIXI.Point(o, c), e._playAgainButton.setAnchor(.5, .5)
                    }
                    if (!e._moreGamesButton) {
                        var l = n.Res.sprite.more_games_txt(),
                            u = o,
                            c = i + 500,
                            h = new PIXI.Rectangle(u - (l.width >> 1), c - (l.height >> 1), l.width, l.height);
                        e._hasCRTFilter && (h.y += 30, h.height += 4), e._moreGamesButton = new n.SimpleButton(l, h, (!0), 0, (-80)), e._moreGamesButton.setPosition(o, c), e._moreGamesButton.originalPosition = new PIXI.Point(o, c), e._moreGamesButton.setAnchor(.5, .5)
                    }
                    return new Promise(function(u) {
                        n.TimerUtils.delay(600).then(function() {
                            var c = t ? e._youWinTitle : e._gameOverTitle;
                            c.alpha = 0, c.position.y = c.originalPosition.y + 100, e._container.addChild(c), n.Eaze.get(c, e).to({
                                alpha: 1
                            }, 200).easing(TWEEN.Easing.Linear.None).start(), n.Eaze.get(c.position, e).to({
                                y: c.originalPosition.y
                            }, 400).easing(TWEEN.Easing.Back.Out).start(), t && (e._youWinInfo.alpha = 0, e._container.addChild(e._youWinInfo), n.Eaze.get(e._youWinInfo, e).delay(300).to({
                                alpha: 1
                            }, 200).easing(TWEEN.Easing.Linear.None).start());
                            var l = i + 180;
                            t && (l += 110);
                            var h = e.scoreInfoView(r);
                            if (h.position.set(o - (h.width >> 1), l), h.alpha = 0, e._container.addChild(h), n.Eaze.get(h, e).delay(300).to({
                                alpha: 1
                            }, 200).easing(TWEEN.Easing.Linear.None).start(), !t) {
                                l += 50;
                                var d = s ? 30 : 0,
                                    p = e.bestScoreInfoView(a, s);
                                p.position.set(o - (p.width >> 1) - d, l), p.alpha = 0, e._container.addChild(p), n.Eaze.get(p, e).delay(500).to({
                                    alpha: 1
                                }, 200).easing(TWEEN.Easing.Linear.None).start()
                            }
                            e._playAgainButton.canvas.position.x = -300, e._playAgainButton.addToContainer(e._container), n.Eaze.get(e._playAgainButton.canvas, e).delay(600).to({
                                x: e._playAgainButton.originalPosition.x
                            }, 200).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                                e.setEnableInput(!0)
                            }).start(), e._moreGamesButton.canvas.position.x = 650, e._moreGamesButton.addToContainer(e._container), n.Eaze.get(e._moreGamesButton.canvas, e).delay(600).to({
                                x: e._moreGamesButton.originalPosition.x
                            }, 200).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                                u()
                            }).start()
                        })
                    })
                }).then(function() {
                    s && n.TimerUtils.delay(500).then(function() {
                        e.submitScore(r)
                    }), e.submitAward(r), e.showAD()
                })
            }, i.prototype.hide = function() {
                var t = this;
                return new Promise(function(e) {
                    n.Eaze.removeAll(t), n.Eaze.get(t._container, t).to({
                        alpha: 0
                    }, 200).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                        t.setEnableInput(!1), n.DisplayObjectUtils.removeAllChildren(t._container), t._container.alpha = 1, e()
                    }).start()
                })
            }, i.prototype.scoreInfoView = function(t) {
                var e = new PIXI.Container,
                    o = n.Res.sprite.score_txt();
                e.addChild(o);
                var i = n.SpriteFont.getGameOverScoreNumberSprite(t.toString());
                return i.position.x = o.width + 10, e.addChild(i), e
            }, i.prototype.bestScoreInfoView = function(t, e) {
                var o = new PIXI.Container,
                    i = 0;
                if (e) {
                    var r = n.Res.sprite.new_score();
                    o.addChild(r), i = r.width + 10
                }
                var a = n.Res.sprite.bestscore_txt();
                a.position.x = i, o.addChild(a), i = i + a.width + 10;
                var s = n.SpriteFont.getGameOverScoreNumberSprite(t.toString());
                return s.position.x = i, o.addChild(s), o
            }, i.prototype.restartGame = function() {
                var t = n.EntityUtils.getGameEntity(this.world);
                t.addComponent(new n.RestartGameComponent)
            }, i
        }(n.AbstractSystem);
        n.GameOverSystem = o
    }(o = n.goldenratio || (n.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "RestartGameComponent", n
        }(CES.Component);
        t.RestartGameComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t._pauseKeyPressed = !1, t._isPause = !1, t._isWindowBlur = !1, t._isGameActive = !1, t
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.onWindowFocus = this.onWindowFocus.bind(this), this.onWindowBlur = this.onWindowBlur.bind(this), this.onTabVisibilityChange = this.onTabVisibilityChange.bind(this), this.world.entityAdded(t.HeroComponent.CNAME, t.PlayerInputComponent.CNAME).add(function() {
                    e._isGameActive = !0;
                    var t = e._isWindowBlur;
                    e.setPaused(t)
                }), this.world.entityRemoved(t.PlayerInputComponent.CNAME).add(function() {
                    e._isGameActive = !1, e._isPause = !1
                }), this.addListeners()
            }, o.prototype.addListeners = function() {
                this.removeListeners(), window.addEventListener("blur", this.onWindowBlur, !1), window.addEventListener("focus", this.onWindowFocus, !1), window.addEventListener(visibilityChange, this.onTabVisibilityChange, !1)
            }, o.prototype.removeListeners = function() {
                window.removeEventListener("blur", this.onWindowBlur, !1), window.removeEventListener("focus", this.onWindowFocus, !1), window.removeEventListener(visibilityChange, this.onTabVisibilityChange, !1)
            }, o.prototype.cleanup = function() {
                this.removeListeners(), n.prototype.cleanup.call(this)
            }, o.prototype.update = function(e) {
                var n = this.world.getEntities(t.PlayerInputComponent.CNAME),
                    o = n ? n[0] : null;
                if (o) {
                    var i = o.getComponent(t.PlayerInputComponent.CNAME);
                    this._pauseKeyPressed != i.pause && (this._pauseKeyPressed = i.pause, this._pauseKeyPressed && this.togglePause())
                }
            }, o.prototype.togglePause = function() {
                this.setPaused(!this._isPause)
            }, o.prototype.setPaused = function(e) {
                if (this._isPause != e && this._isGameActive) {
                    this._isPause = e;
                    var n = t.EntityUtils.getGameEntity(this.world);
                    n && (n.hasComponent(t.PauseComponent.CNAME) && n.removeComponent(t.PauseComponent.CNAME), n.addComponent(new t.PauseComponent(this._isPause)))
                }
            }, o.prototype.onWindowBlur = function(t) {
                void 0 === t && (t = null), this._isWindowBlur = !0, this.setPaused(!0)
            }, o.prototype.onWindowFocus = function(t) {
                void 0 === t && (t = null), this._isWindowBlur = !1
            }, o.prototype.onTabVisibilityChange = function(t) {
                document[hidden] ? (this._isWindowBlur = !0, this.onWindowBlur()) : this._isWindowBlur = !1
            }, o
        }(t.AbstractSystem);
        t.PauseSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t, e, o) {
                var i = n.call(this) || this;
                return i._pauseContainer = new PIXI.Container, t.addChild(i._pauseContainer), i._gameRect = e, i._hasCRTFilter = o, i
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    o.pause ? e.show() : e.hide()
                }), this._mouseTouch = new t.MouseTouchControl(this._gameRect), this._mouseTouch.addListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this)
            }, o.prototype.show = function() {
                var e = this;
                t.Eaze.removeAll(this);
                var n = 253,
                    o = 300;
                if (!this._blackBackground) {
                    var i = -this._pauseContainer.parent.y,
                        r = -this._pauseContainer.parent.x;
                    this._blackBackground = new PIXI.Graphics, this._blackBackground.beginFill(0, .7), this._blackBackground.drawRect(r, i, 600 - r, 900 - i), this._blackBackground.endFill(), this._blackBackground.cacheAsBitmap = !0
                }
                if (this._titleGfx || (this._titleGfx = t.Res.sprite.paused_txt(), this._titleGfx.anchor.set(.5, .5), this._titleGfx.position.set(n, o), this._titleGfx.originalPosition = new PIXI.Point(n, o)), !this._resumeButton) {
                    var a = t.Res.sprite.resume_txt(),
                        s = n,
                        u = o + 200,
                        c = new PIXI.Rectangle(s - (a.width >> 1), u - (a.height >> 1), a.width, a.height);
                    this._hasCRTFilter && (c.height += 30), this._resumeButton = new t.SimpleButton(a, c, (!0), 0, (-80)), this._resumeButton.setPosition(s, u), this._resumeButton.originalPosition = new PIXI.Point(s, u), this._resumeButton.setAnchor(.5, .5)
                }
                this._blackBackground.alpha = 0, this._pauseContainer.addChild(this._blackBackground), t.Eaze.get(this._blackBackground, this).to({
                    alpha: 1
                }, 100).easing(TWEEN.Easing.Linear.None).start(), this._titleGfx.alpha = 0, this._titleGfx.position.y = this._titleGfx.originalPosition.y + 80, this._pauseContainer.addChild(this._titleGfx);
                var l = 150;
                t.Eaze.get(this._titleGfx, this).delay(l).to({
                    alpha: 1
                }, 100).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(this._titleGfx.position, this).delay(l).to({
                    y: this._titleGfx.originalPosition.y
                }, 200).easing(TWEEN.Easing.Back.Out).start(), l += 100, this._resumeButton.canvas.position.x = -300, t.Eaze.get(this._resumeButton.canvas, this).delay(l).to({
                    x: this._resumeButton.originalPosition.x
                }, 200).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                    e.setEnableInput(!0)
                }).start(), this._resumeButton.addToContainer(this._pauseContainer)
            }, o.prototype.setEnableInput = function(e) {
                this._mouseTouch.setEnable(e), e ? this._mouseTouch.addHitRect(this._resumeButton.hitRect, t.InputHitRectID.PAUSE_RESUME) : this._mouseTouch.removeHitRect(t.InputHitRectID.PAUSE_RESUME)
            }, o.prototype.hide = function() {
                var e = this;
                this.setEnableInput(!1), t.Eaze.removeAll(this), t.Eaze.get(this._resumeButton.canvas, this).to({
                    x: -300
                }, 200).easing(TWEEN.Easing.Back.Out).start(), this._resumeButton.addToContainer(this._pauseContainer);
                var n = 100;
                t.Eaze.get(this._titleGfx, this).delay(n).to({
                    alpha: 0
                }, 100).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(this._titleGfx.position, this).delay(n).to({
                    y: this._titleGfx.originalPosition.y - 80
                }, 200).easing(TWEEN.Easing.Back.Out).start(), t.Eaze.get(this._blackBackground, this).to({
                    alpha: 0
                }, 200).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    t.DisplayObjectUtils.removeAllChildren(e._pauseContainer)
                }).start()
            }, o.prototype.onTouchDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.id, e)
            }, o.prototype.onTouchUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.id, e)
            }, o.prototype.onMouseRollOverHL = function(t) {
                this.handleRollOverAndOut(t.id, !0)
            }, o.prototype.onMouseRollOutHL = function(t) {
                this.handleRollOverAndOut(t.id, !1)
            }, o.prototype.handleRollOverAndOut = function(e, n) {
                var o = n ? 9356278 : 16777215;
                switch (e) {
                    case t.InputHitRectID.PAUSE_RESUME:
                        this._resumeButton.canvas.tint = o, n && t.SoundManager.playSFX(t.SFXType.BUTTON_ROLL_OVER)
                }
            }, o.prototype.handleInputs = function(e, n) {
                switch (e) {
                    case t.InputHitRectID.PAUSE_RESUME:
                        n ? this._resumeButton.onButtonDown() : this._resumeButton.onButtonUp();
                        for (var o = this.world.getEntities(t.PlayerInputComponent.CNAME), i = o.length - 1; i >= 0; i--) {
                            var r = o[i],
                                a = r.getComponent(t.PlayerInputComponent.CNAME);
                            a.pause = !n
                        }
                }
                n || this._mouseTouch.setEnable(!1)
            }, o.prototype.cleanup = function() {
                t.Eaze.removeAll(this), this._mouseTouch && (this._mouseTouch.removeListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this), this._mouseTouch.dispose(), this._mouseTouch = null), this._pauseContainer && (t.DisplayObjectUtils.removeAllChildren(this._pauseContainer), t.DisplayObjectUtils.removeFromParent(this._pauseContainer), this._pauseContainer = null), this._resumeButton && (this._resumeButton.dispose(), this._resumeButton = null), this._blackBackground = null, this._titleGfx = null, this._gameRect = null, n.prototype.cleanup.call(this)
            }, o
        }(t.AbstractSystem);
        t.PauseHUDSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t() {}
            return t.CLICKED = "com.goldenratio.SimpleCheckboxEvent.CLICKED", t
        }();
        t.SimpleCheckboxEvent = n;
        var o = function(o) {
            function i(t, e, n, i) {
                void 0 === i && (i = 0);
                var r = o.call(this) || this;
                return r._isChecked = !1, r._isDown = !1, r._isHidden = !1, r._hitRect = n, r._uncheckedGfx = t, r._checkedGfx = e, r._checkedGfx.visible = !1, r._hitRect.width += i, r._hitRect.height += i, r._hitRect.x -= .5 * i, r._hitRect.y -= .5 * i, r.updateCheckboxState(), r
            }
            return e(i, o), i.prototype.updateCheckboxState = function() {
                this._checkedGfx.visible = !1, this._uncheckedGfx.visible = !1, this._isChecked ? this._checkedGfx.visible = !0 : this._uncheckedGfx.visible = !0
            }, i.prototype.hide = function() {
                this._checkedGfx && this._uncheckedGfx && !this._isHidden && (this._isHidden = !0, this._checkedGfx.visible = this._uncheckedGfx.visible = !1)
            }, i.prototype.show = function() {
                this._checkedGfx && this._uncheckedGfx && this._isHidden && (this._isHidden = !1, this.updateCheckboxState())
            }, i.prototype.setAnchor = function(t, e) {
                this._checkedGfx && this._uncheckedGfx && (this._checkedGfx.anchor.set(t, e), this._uncheckedGfx.anchor.set(t, e))
            }, i.prototype.setPosition = function(t, e) {
                this._checkedGfx && this._uncheckedGfx && (this._checkedGfx.position.set(t, e), this._uncheckedGfx.position.set(t, e))
            }, Object.defineProperty(i.prototype, "position", {
                get: function() {
                    return this._uncheckedGfx.position
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "width", {
                get: function() {
                    return this._uncheckedGfx.width
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.onButtonDown = function() {
                this._checkedGfx && this._uncheckedGfx && !this._isDown && (this._checkedGfx.position.y += 2, this._uncheckedGfx.position.y += 2, this._isDown = !0, t.VibrateUtils.vibrateForTap(), t.SoundManager.playSFX(t.SFXType.CLICK))
            }, i.prototype.onButtonUp = function(t) {
                void 0 === t && (t = !0), this._checkedGfx && this._uncheckedGfx && (this._checkedGfx.position.y -= 2, this._uncheckedGfx.position.y -= 2, this._isDown = !1, t && (this.toggle(), this.emit(n.CLICKED)))
            }, i.prototype.showHandCursor = function(t) {
                this._checkedGfx && this._uncheckedGfx && (this._checkedGfx.interactive = t, this._checkedGfx.buttonMode = t, this._uncheckedGfx.interactive = t, this._uncheckedGfx.buttonMode = t)
            }, i.prototype.setTint = function(t) {
                this._checkedGfx && this._uncheckedGfx && (this._checkedGfx.tint = t, this._uncheckedGfx.tint = t)
            }, i.prototype.update = function(t) {}, i.prototype.dispose = function() {
                this.removeFromContainer(), this._checkedGfx = null, this._uncheckedGfx = null, this._hitRect = null
            }, Object.defineProperty(i.prototype, "isChecked", {
                get: function() {
                    return this._isChecked
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.setChecked = function(t) {
                this._isHidden || this._isChecked == t || (this._isChecked = t, this.updateCheckboxState())
            }, i.prototype.toggle = function() {
                this.setChecked(!this._isChecked)
            }, Object.defineProperty(i.prototype, "hitRect", {
                get: function() {
                    return this._hitRect
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.addToContainer = function(t) {
                t.addChild(this._checkedGfx), t.addChild(this._uncheckedGfx)
            }, i.prototype.removeFromContainer = function() {
                t.DisplayObjectUtils.removeFromParent(this._checkedGfx), t.DisplayObjectUtils.removeFromParent(this._uncheckedGfx), this._isDown = !1, this._isChecked = !1
            }, i
        }(EventEmitter);
        t.SimpleCheckbox = o
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t, e) {
                var o = n.call(this) || this;
                return o._container = new PIXI.Container, t.addChild(o._container), o._gameRect = e, o
            }
            return e(o, n), o.prototype.cleanup = function() {
                t.Eaze.removeAll(this), this._mouseTouch && (this._mouseTouch.removeListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this), this._mouseTouch.dispose(), this._mouseTouch = null), this._muteCheckbox && (this._muteCheckbox.dispose(), this._muteCheckbox = null), this._pauseButton && (this._pauseButton.dispose(), this._pauseButton = null), this._container && (t.DisplayObjectUtils.removeAllChildren(this._container), t.DisplayObjectUtils.removeFromParent(this._container)), this._helpInfo = null, this._container = null, this._gameRect = null, n.prototype.cleanup.call(this)
            }, o.prototype.afterAddedToWorld = function() {
                var e = this;
                this._pauseButton = new t.SimpleButton(t.Res.sprite.pause_button(), new PIXI.Rectangle(430, 20, 60, 60), (!0), 60, 20), this._pauseButton.setPosition(430, 20), this._pauseButton.addToContainer(this._container), this._muteCheckbox = new t.SimpleCheckbox(t.Res.sprite.unmute_button(), t.Res.sprite.mute_button(), new PIXI.Rectangle(18, 20, 60, 60), 60), this._muteCheckbox.setPosition(18, 20), this._muteCheckbox.setChecked(t.SoundManager.userMuteState), this._muteCheckbox.addToContainer(this._container), this._mouseTouch = new t.MouseTouchControl(this._gameRect), this._mouseTouch.addListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.addListener(t.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this), this._mouseTouch.addHitRect(this._pauseButton.hitRect, t.InputHitRectID.PAUSE_TOGGLE), this._mouseTouch.addHitRect(this._muteCheckbox.hitRect, t.InputHitRectID.MUTE_TOGGLE), this._helpInfo = c.isMobileDevice ? t.Res.sprite.tapinfo() : t.Res.sprite.clickinfo(), this._helpInfo.anchor.set(.5, .5), this._helpInfo.position.set(253, 750), this._container.visible = !1, this.world.entityAdded(t.GameComponent.CNAME, t.MuteComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.MuteComponent.CNAME);
                    e._muteCheckbox.setChecked(o.muted)
                }), this.world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e.setVisible(!0), e._muteCheckbox.setChecked(t.SoundManager.userMuteState)
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.ReachedTrackEndComponent.CNAME).add(function() {
                    e.setVisible(!1)
                }), this.world.entityAdded(t.HeroComponent.CNAME, t.DestroyComponent.CNAME).add(function() {
                    e.setVisible(!1)
                }), this.world.entityAdded(t.GameComponent.CNAME, t.PauseComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.PauseComponent.CNAME);
                    e._mouseTouch.setEnable(!o.pause)
                })
            }, o.prototype.displayHelpInfo = function() {
                var e = this;
                t.Eaze.removeTween(this._helpInfo), this._helpInfo.alpha = 0, this._container.addChild(this._helpInfo), t.Eaze.get(this._helpInfo, this).to({
                    alpha: 1
                }, 400).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    t.TimerUtils.delay(2e3).then(function() {
                        e.hideHelpInfo()
                    })
                }).start()
            }, o.prototype.hideHelpInfo = function() {
                var e = this;
                t.Eaze.removeTween(this._helpInfo), t.Eaze.get(this._helpInfo, this).to({
                    alpha: 0
                }, 400).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    t.DisplayObjectUtils.removeFromParent(e._helpInfo)
                }).start()
            }, o.prototype.setVisible = function(e) {
                var n = this;
                this._mouseTouch.setEnable(e);
                var o = e ? 100 : 400,
                    i = e ? 1 : 0;
                t.Eaze.get(this._container, this).to({
                    alpha: i
                }, o).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                    n._container.visible = e
                }).start(), e && t.TimerUtils.delay(2e3).then(function() {
                    n.displayHelpInfo()
                })
            }, o.prototype.onTouchDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.id, e)
            }, o.prototype.onTouchUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.id, e)
            }, o.prototype.onMouseRollOverHL = function(t) {
                this.handleRollOverAndOut(t.id, !0)
            }, o.prototype.onMouseRollOutHL = function(t) {
                this.handleRollOverAndOut(t.id, !1)
            }, o.prototype.handleRollOverAndOut = function(e, n) {
                var o = n ? 9356278 : 16777215;
                switch (e) {
                    case t.InputHitRectID.PAUSE_TOGGLE:
                        this._pauseButton.canvas.tint = o, n && t.SoundManager.playSFX(t.SFXType.BUTTON_ROLL_OVER);
                        break;
                    case t.InputHitRectID.MUTE_TOGGLE:
                        this._muteCheckbox.setTint(o), n && t.SoundManager.playSFX(t.SFXType.BUTTON_ROLL_OVER)
                }
            }, o.prototype.handleInputs = function(e, n) {
                var o = this.world.getEntities(t.PlayerInputComponent.CNAME);
                switch (e) {
                    case t.InputHitRectID.PAUSE_TOGGLE:
                        n ? this._pauseButton.onButtonDown() : this._pauseButton.onButtonUp();
                        for (var i = o.length - 1; i >= 0; i--) {
                            var r = o[i],
                                a = r.getComponent(t.PlayerInputComponent.CNAME);
                            a.pause = !n
                        }
                        break;
                    case t.InputHitRectID.MUTE_TOGGLE:
                        n ? this._muteCheckbox.onButtonDown() : this._muteCheckbox.onButtonUp(!1);
                        for (var i = o.length - 1; i >= 0; i--) {
                            var r = o[i],
                                a = r.getComponent(t.PlayerInputComponent.CNAME);
                            a.mute = n
                        }
                }
            }, o
        }(t.AbstractSystem);
        t.ButtonsHUDSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e) {
                var o = t.call(this) || this;
                return o.muted = !1, o.name = n.CNAME, o.muted = e, o
            }
            return e(n, t), n.CNAME = "MuteComponent", n
        }(CES.Component);
        t.MuteComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t._isMute = !1, t._isMuteKeyPressed = !1, t
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.setMute(t.SoundManager.userMuteState), this.world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e.setMute(t.SoundManager.userMuteState)
                })
            }, o.prototype.update = function(e) {
                var n = this.world.getEntities(t.PlayerInputComponent.CNAME),
                    o = n ? n[0] : null;
                if (o) {
                    var i = o.getComponent(t.PlayerInputComponent.CNAME);
                    this._isMuteKeyPressed != i.mute && (this._isMuteKeyPressed = i.mute, this._isMuteKeyPressed && this.toggleMute())
                }
            }, o.prototype.toggleMute = function() {
                this.setMute(!this._isMute)
            }, o.prototype.setMute = function(e) {
                if (this._isMute != e) {
                    this._isMute = e, t.SoundManager.setUserMute(this._isMute);
                    var n = t.EntityUtils.getGameEntity(this.world);
                    n && (n.hasComponent(t.MuteComponent.CNAME) && n.removeComponent(t.MuteComponent.CNAME), n.addComponent(new t.MuteComponent(this._isMute)))
                }
            }, o
        }(t.AbstractSystem);
        t.MuteSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.name = n.CNAME, e
            }
            return e(n, t), n.CNAME = "QuitGameComponent", n
        }(CES.Component);
        t.QuitGameComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function e(t, e) {
                this._isBusy = !1, this._gfxContainer = new PIXI.Container, t.addChild(this._gfxContainer);
                var n = new PIXI.Graphics;
                n.beginFill(0, 1), n.drawRect(0, 0, e.width, e.height), n.endFill(), n.cacheAsBitmap = !0, this._gfxContainer.addChild(n)
            }
            return e.prototype.hide = function(e, n) {
                void 0 === n && (n = 500);
                for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                if (!this._isBusy) {
                    t.DisplayObjectUtils.moveToTop(this._gfxContainer), this._gfxContainer.alpha = 1, this._gfxContainer.visible = !0, this._isBusy = !0;
                    var r = this;
                    t.Eaze.get(this._gfxContainer, this).to({
                        alpha: 0
                    }, n).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                        r._gfxContainer.visible = !1, r._isBusy = !1, e && "function" == typeof e && e(o)
                    }).start()
                }
            }, e.prototype.show = function(e, n) {
                void 0 === n && (n = 500);
                for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                if (!this._isBusy) {
                    t.DisplayObjectUtils.moveToTop(this._gfxContainer), this._gfxContainer.alpha = 0, this._gfxContainer.visible = !0, this._isBusy = !0;
                    var r = this;
                    t.Eaze.get(this._gfxContainer, this).to({
                        alpha: 1
                    }, n).easing(TWEEN.Easing.Linear.None).onComplete(function() {
                        r._isBusy = !1, e && "function" == typeof e && e(o)
                    }).start()
                }
            }, e.prototype.update = function(t) {}, e.prototype.dispose = function() {
                t.Eaze.removeAll(this), this._gfxContainer = null
            }, e
        }();
        t.BlackOutScreenView = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {}
            return t.delay = function(t) {
                return new Promise(function(e) {
                    if (t > 0) {
                        var n = window.performance.now(),
                            o = n + t,
                            i = function(t) {
                                var n = window.requestAnimationFrame(i);
                                if (t >= o) return window.cancelAnimationFrame(n), void e()
                            };
                        i(n)
                    } else e()
                })
            }, t
        }();
        t.TimerUtils = e
    }(e = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var e = n.call(this) || this;
                return e._readyGfx = t.Res.sprite.ready_txt(), e._readyGfx.anchor.set(.5, .5), e._readyGfx.position.set(253, 400), e._goGfx = t.Res.sprite.go_txt(), e._goGfx.anchor.set(.5, .5), e._goGfx.position.set(253, 400), e
            }
            return e(o, n), o.prototype.show = function() {
                var e = this;
                return t.Eaze.removeAll(this), new Promise(function(t) {
                    e.showReady().then(function() {
                        return e.showGo()
                    }).then(function() {
                        t()
                    })
                })
            }, o.prototype.showReady = function() {
                var e = this;
                return t.Eaze.removeAll(this), new Promise(function(n) {
                    e._readyGfx.alpha = 0, e._readyGfx.scale.set(.7, .7), e.addChild(e._readyGfx), t.Eaze.get(e._readyGfx, e).to({
                        alpha: 1
                    }, 200).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(e._readyGfx.scale, e).to({
                        x: 1,
                        y: 1
                    }, 400).easing(TWEEN.Easing.Back.Out).start(), t.SoundManager.playSFX(t.SFXType.SPEECH_READY), t.TimerUtils.delay(500).then(function() {
                        t.Eaze.get(e._readyGfx, e).to({
                            alpha: 0
                        }, 300).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(e._readyGfx.scale, e).to({
                            x: 1.4,
                            y: 1.4
                        }, 500).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                            e.removeChild(e._readyGfx), n()
                        }).start()
                    })
                })
            }, o.prototype.showGo = function() {
                var e = this;
                return t.Eaze.removeAll(this), new Promise(function(n) {
                    e._goGfx.alpha = 0, e._goGfx.scale.set(.7, .7), e.addChild(e._goGfx), t.Eaze.get(e._goGfx, e).to({
                        alpha: 1
                    }, 200).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(e._goGfx.scale, e).to({
                        x: 1,
                        y: 1
                    }, 400).easing(TWEEN.Easing.Back.Out).start(), t.SoundManager.playSFX(t.SFXType.SPEECH_GO), t.TimerUtils.delay(400).then(function() {
                        t.Eaze.get(e._goGfx, e).to({
                            alpha: 0
                        }, 300).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(e._goGfx.scale, e).to({
                            x: 1.4,
                            y: 1.4
                        }, 500).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                            e.removeChild(e._goGfx)
                        }).start(), n()
                    })
                })
            }, o.prototype.dispose = function() {
                t.Eaze.removeAll(this), t.DisplayObjectUtils.removeAllChildren(this), this._readyGfx = null, this._goGfx = null
            }, o
        }(PIXI.Container);
        t.ReadyGoView = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function() {
            function t() {}
            return t.START_GAME = "TitleViewEvent.START_GAME", t
        }();
        t.TitleViewEvent = n;
        var o = function(o) {
            function i(e) {
                var n = o.call(this) || this;
                return n._mouseTouch = new t.MouseTouchControl(e), n._mouseTouch.addListener(t.MouseTouchEvent.DOWN, n.onTouchDownHL, n), n._mouseTouch.addListener(t.MouseTouchEvent.UP, n.onTouchUpHL, n), n._mouseTouch.addListener(t.MouseTouchEvent.ROLL_OVER, n.onMouseRollOverHL, n), n._mouseTouch.addListener(t.MouseTouchEvent.ROLL_OUT, n.onMouseRollOutHL, n), n._keyboard = new t.KeyboardControl, n._keyboard.addListener(t.KeyboardControlEvent.DOWN, n.onKeyDownHL, n), n._keyboard.addListener(t.KeyboardControlEvent.UP, n.onKeyUpHL, n), n.addListener("added", n.show, n), n.addListener("removed", n.onRemovedFromContainer, n), n
            }
            return e(i, o), i.prototype.show = function() {
                var e = this;
                if (!this._startButton) {
                    var n = t.Res.sprite.startgame(),
                        o = 253,
                        i = 620,
                        r = new PIXI.Rectangle(o - (n.width >> 1), i - (n.height >> 1), n.width, n.height);
                    this._startButton = new t.SimpleButton(n, r, (!0), (-80), (-80)), this._startButton.setAnchor(.5, .5), this._startButton.setPosition(o, i)
                }
                if (this._titleGfx || (this._titleGfx = t.Res.sprite.title_txt(), this._titleGfx.anchor.set(.5, .5), this._titleGfx.position.set(253, 280), this._titleGfx.originalPosition = new PIXI.Point(253, 280)), this._copyInfo || (this._copyInfo = t.Res.sprite.copy_labrat(), this._copyInfo.position.set(20, 860)), !this._brandLogo) {
                    var a = PIXI.Texture.fromImage("brandLogo");
                    this._brandLogo = new PIXI.Sprite(a), this._brandLogo.anchor.x = .5, this._brandLogo.anchor.y = .5, this._brandLogo.position.x = 253, this._brandLogo.position.y = 100
                }
                t.Eaze.removeAll(this), t.LocalStorageUtils.getNumber(t.LocalKey.SCORE).then(function(t) {
                    e.startAnimation(t)
                }).catch(function(t) {
                    e.startAnimation(0)
                })
            }, i.prototype.startAnimation = function(e) {
                var n = this;
                this.addChild(this._copyInfo), this._titleGfx.alpha = 0, this._titleGfx.position.y = this._titleGfx.originalPosition.y + 200, this.addChild(this._titleGfx), this._brandLogo.alpha = 0, this.addChild(this._brandLogo), t.Eaze.get(this._titleGfx, this).to({
                    alpha: 1
                }, 400).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(this._brandLogo, this).to({
                    alpha: 1
                }, 200).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(this._titleGfx.position, this).to({
                    y: this._titleGfx.originalPosition.y
                }, 400).easing(TWEEN.Easing.Back.Out).start();
                var o = 400,
                    i = this.bestScoreInfoView(e);
                i.position.set(253 - (i.width >> 1), 420), i.alpha = 0, this.addChild(i), t.Eaze.get(i, this).delay(o).to({
                    alpha: 1
                }, 200).easing(TWEEN.Easing.Linear.None).start(), o += 100, this._startButton.canvas.scale.set(0, 0), this._startButton.addToContainer(this), t.Eaze.get(this._startButton.canvas.scale, this).delay(o).to({
                    x: [1.4, 1],
                    y: [1.4, 1]
                }, 400).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                    n.setEnabled(!0)
                }).start()
            }, i.prototype.bestScoreInfoView = function(e) {
                var n = new PIXI.Container,
                    o = 0,
                    i = t.Res.sprite.bestscore_txt();
                i.position.x = o, n.addChild(i), o = o + i.width + 10;
                var r = t.SpriteFont.getGameOverScoreNumberSprite(e.toString());
                return r.position.x = o, n.addChild(r), n
            }, i.prototype.hideWithAnimation = function() {
                this.setEnabled(!1)
            }, i.prototype.onRemovedFromContainer = function() {
                this.setEnabled(!1)
            }, i.prototype.setEnabled = function(e) {
                if (this._mouseTouch.setEnable(e), this._keyboard.setEnabled(e), e) {
                    this._mouseTouch.addHitRect(this._startButton.hitRect, t.InputHitRectID.START_GAME);
                    var n = new PIXI.Rectangle(this._copyInfo.position.x, this._copyInfo.position.y - 5, this._copyInfo.width, this._copyInfo.height + 10);
                    this._mouseTouch.addHitRect(n, t.InputHitRectID.LABRAT_MOBI);
                    var o = new PIXI.Rectangle(this._brandLogo.position.x - (this._brandLogo.width >> 1), this._brandLogo.position.y - (this._brandLogo.height >> 1), this._brandLogo.width, this._brandLogo.height);
                    this._mouseTouch.addHitRect(o, t.InputHitRectID.BRAND_LOGO), this._keyboard.addKeyMonitor([t.KeyCode.ENTER], t.InputHitRectID.START_GAME)
                } else this._mouseTouch.removeHitRect(t.InputHitRectID.START_GAME), this._mouseTouch.removeHitRect(t.InputHitRectID.LABRAT_MOBI), this._mouseTouch.removeHitRect(t.InputHitRectID.BRAND_LOGO), this._keyboard.removeKeyMonitor(t.InputHitRectID.START_GAME)
            }, i.prototype.onTouchDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.id, e)
            }, i.prototype.onTouchUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.id, e)
            }, i.prototype.onMouseRollOverHL = function(t) {
                this.handleRollOverAndOut(t.id, !0)
            }, i.prototype.onMouseRollOutHL = function(t) {
                this.handleRollOverAndOut(t.id, !1)
            }, i.prototype.onKeyDownHL = function(t) {
                var e = !0;
                this.handleInputs(t.keyID, e)
            }, i.prototype.onKeyUpHL = function(t) {
                var e = !1;
                this.handleInputs(t.keyID, e)
            }, i.prototype.handleRollOverAndOut = function(e, n) {
                var o = n ? 9356278 : 16777215;
                switch (e) {
                    case t.InputHitRectID.START_GAME:
                        this._startButton.canvas.tint = o, n && t.SoundManager.playSFX(t.SFXType.BUTTON_ROLL_OVER);
                        break;
                    case t.InputHitRectID.LABRAT_MOBI:
                        this._copyInfo.tint = o, n && t.SoundManager.playSFX(t.SFXType.BUTTON_ROLL_OVER);
                        break;
                    case t.InputHitRectID.BRAND_LOGO:
                        this._brandLogo.tint = o, n && t.SoundManager.playSFX(t.SFXType.BUTTON_ROLL_OVER)
                }
            }, i.prototype.handleInputs = function(e, o) {
                switch (e) {
                    case t.InputHitRectID.START_GAME:
                        o ? this._startButton.onButtonDown() : (this._startButton.onButtonUp(), this.hideWithAnimation(), this.emit(n.START_GAME));
                        break;
                    case t.InputHitRectID.LABRAT_MOBI:
                        // o ? t.SoundManager.playSFX(t.SFXType.CLICK) : window.open("https://labrat.mobi", "_blank");
                        break;
                    case t.InputHitRectID.BRAND_LOGO:
                        // o ? t.SoundManager.playSFX(t.SFXType.CLICK) : window.open(p, "_blank")
                }
            }, i.prototype.dispose = function() {
                this.setEnabled(!1), t.Eaze.removeAll(this), t.DisplayObjectUtils.removeAllChildren(this), this.removeListener("added", this.show, this), this.removeListener("removed", this.onRemovedFromContainer, this), this._startButton && (this._startButton.dispose(), this._startButton = null), this._mouseTouch && (this._mouseTouch.removeListener(t.MouseTouchEvent.DOWN, this.onTouchDownHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.UP, this.onTouchUpHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.ROLL_OVER, this.onMouseRollOverHL, this), this._mouseTouch.removeListener(t.MouseTouchEvent.ROLL_OUT, this.onMouseRollOutHL, this), this._mouseTouch.dispose(), this._mouseTouch = null), this._keyboard && (this._keyboard.removeListener(t.KeyboardControlEvent.DOWN, this.onKeyDownHL, this), this._keyboard.removeListener(t.KeyboardControlEvent.UP, this.onKeyUpHL, this), this._keyboard.dispose(), this._keyboard = null), this._titleGfx = null, this._copyInfo = null, this._brandLogo = null
            }, i
        }(PIXI.Container);
        t.TitleView = o
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(t) {
            function n(e) {
                var o = t.call(this) || this;
                return o.currentLevel = 0, o.name = n.CNAME, o.currentLevel = e, o
            }
            return e(n, t), n.CNAME = "LevelUpComponent", n
        }(CES.Component);
        t.LevelUpComponent = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t._currentLevel = 0, t._levelUpCount = 2e3, t
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this.world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e.reset()
                })
            }, o.prototype.update = function(e) {
                var n = this.world.getEntities(t.HeroComponent.CNAME, t.PositionComponent.CNAME),
                    o = n ? n[0] : null;
                if (o) {
                    var i = o.getComponent(t.HeroComponent.CNAME),
                        r = i.currentPointIndexInTrack;
                    0 != r && r % this._levelUpCount == 0 && (this.levelUp(), this._currentLevel <= 1 ? this._levelUpCount += 3e3 : this._currentLevel >= 7 ? this._levelUpCount = 8e3 : this._levelUpCount = 5e3)
                }
            }, o.prototype.reset = function() {
                var e = t.EntityUtils.getGameEntity(this.world);
                e && (e.hasComponent(t.LevelUpComponent.CNAME) && e.removeComponent(t.LevelUpComponent.CNAME), this._currentLevel = 0, this._levelUpCount = 2e3)
            }, o.prototype.levelUp = function() {
                var e = t.EntityUtils.getGameEntity(this.world);
                e && (e.hasComponent(t.LevelUpComponent.CNAME) && e.removeComponent(t.LevelUpComponent.CNAME), this._currentLevel++, e.addComponent(new t.LevelUpComponent(this._currentLevel)))
            }, o
        }(t.AbstractSystem);
        t.LevelUpSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t) {
                var e = n.call(this) || this;
                return e._container = new PIXI.Container, t.addChild(e._container), e
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this._levelUpGfx = t.Res.sprite.levelup_txt(), this._levelUpGfx.anchor.set(.5, .5), this._levelUpGfx.position.set(253, 200), this.world.entityAdded(t.GameComponent.CNAME, t.LevelUpComponent.CNAME).add(function() {
                    e.showLevelUpGfx()
                })
            }, o.prototype.cleanup = function() {
                n.prototype.cleanup.call(this), t.Eaze.removeAll(this), this._container && (t.DisplayObjectUtils.removeAllChildren(this._container), t.DisplayObjectUtils.removeFromParent(this._container), this._container = null), this._levelUpGfx = null
            }, o.prototype.showLevelUpGfx = function() {
                var e = this;
                t.Eaze.removeTween(this._levelUpGfx.scale), t.Eaze.removeTween(this._levelUpGfx), this._levelUpGfx.alpha = 1, this._levelUpGfx.scale.set(0, 0), this._container.addChild(this._levelUpGfx), t.Eaze.get(this._levelUpGfx.scale, this).to({
                    x: [1.4, 1],
                    y: [1.4, 1]
                }, 600).easing(TWEEN.Easing.Back.Out).onComplete(function() {
                    e.hideGfx()
                }).start(), t.TimerUtils.delay(300).then(function() {
                    t.SoundManager.playSFX(t.SFXType.SPEECH_LEVEL_UP)
                })
            }, o.prototype.hideGfx = function() {
                t.Eaze.removeTween(this._levelUpGfx.scale), t.Eaze.removeTween(this._levelUpGfx);
                var e = 1e3;
                t.Eaze.get(this._levelUpGfx.scale, this).delay(e).to({
                    x: 0,
                    y: 0
                }, 300).easing(TWEEN.Easing.Linear.None).start(), t.Eaze.get(this._levelUpGfx, this).delay(e).to({
                    alpha: 0
                }, 200).easing(TWEEN.Easing.Linear.None).start()
            }, o
        }(t.AbstractSystem);
        t.LevelUpHUDSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function o(t, e) {
                var o = n.call(this) || this;
                return o._colorsLevel = {
                    0: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    1: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    2: [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    3: [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    4: [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
                    5: [1, 0, 0, .2, 0, 0, 1, .2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    6: [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    7: [1, 0, 0, .2, 0, 0, 1, 0, 0, 0, 0, .2, 1, 0, 0, 0, 0, 0, 1, 0]
                }, o._backgroundContainer = t, o._hudContainer = e, o
            }
            return e(o, n), o.prototype.afterAddedToWorld = function() {
                var e = this;
                this._colorMatrixFilter = new PIXI.filters.ColorMatrixFilter, this.world.entityAdded(t.GameComponent.CNAME, t.LevelUpComponent.CNAME).add(function(n) {
                    var o = n.getComponent(t.LevelUpComponent.CNAME);
                    e.setTint(o.currentLevel)
                }), this.world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e._backgroundContainer.filters = null, e._hudContainer.filters = null, e._colorMatrixFilter.reset()
                })
            }, o.prototype.cleanup = function() {
                n.prototype.cleanup.call(this), this._backgroundContainer && (this._backgroundContainer.filters = null, this._backgroundContainer = null), this._hudContainer && (this._hudContainer.filters = null, this._hudContainer = null), this._colorMatrixFilter = null
            }, o.prototype.setTint = function(t) {
                if (this._colorMatrixFilter) {
                    var e = t.toString();
                    this._colorsLevel.hasOwnProperty(e) && (this._colorMatrixFilter.reset(), this._colorMatrixFilter.matrix = this._colorsLevel[e], this._backgroundContainer.filters || (this._backgroundContainer.filters = [this._colorMatrixFilter]), this._hudContainer.filters || (this._hudContainer.filters = [this._colorMatrixFilter]))
                }
            }, o
        }(t.AbstractSystem);
        t.LevelUpTintSystem = n
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(t) {
    var n;
    ! function(t) {
        var n = function(n) {
            function i(e, o, i) {
                var r = n.call(this) || this;
                r._renderer = e, r._coreInfo = i, r.mapBinds();
                var a = new PIXI.Container;
                if (o.addChild(a), r._backgroundContainer = new PIXI.Container, a.addChild(r._backgroundContainer), r._gameContainer = new PIXI.Container, a.addChild(r._gameContainer), r._hudContainer = new PIXI.Container, a.addChild(r._hudContainer), o.addChild(t.Res.sprite.crt_frame_scanlines()), r._world = new CES.World, r._readyGoView = new t.ReadyGoView, r._blackoutScreen = new t.BlackOutScreenView(o, i.gameRect), r._worldFilter = new t.FilterApplier(a), r._trackGenerator = new t.TrackGenerator, r._applyCRTFilter = !c.isMobileDevice && h, r._applyCRTFilter) {
                    r._hudContainer.position.y = 100, r._hudContainer.position.x = 50;
                    var s = .8;
                    r._hudContainer.scale.x = s, r._hudContainer.scale.y = s;
                    var u = new PIXI.filters.BulgePinchFilter([.5, .5], 700, .4);
                    r._worldFilter.appendFilter(u, "bulge")
                }
                return r.initializeSystems(), r.initListeners(), r.showTitleScreen(), r
            }
            return e(i, n), i.prototype.mapBinds = function() {
                this.restartGame = this.restartGame.bind(this)
            }, i.prototype.initializeSystems = function() {
                var e = this._coreInfo.graphicsQuality,
                    n = this._coreInfo.gameRect;
                this._world.addSystem(new t.SceneGraphSystem(this._gameContainer)), this._world.addSystem(new t.SpritePositionSystem), this._world.addSystem(new t.CameraSystem(this._gameContainer)), this._world.addSystem(new t.TrackRenderSystem(this._gameContainer));
                var o = e.isHigherThan(t.GraphicsQuality.HIGH);
                this._world.addSystem(new t.TrailSystem(this._gameContainer, o));
                var i = e.isHigherThan(t.GraphicsQuality.MEDIUM);
                if (this._world.addSystem(new t.BackgroundSystem(this._backgroundContainer, i)), e.isHigherThan(t.GraphicsQuality.HIGH) && (this._world.addSystem(new t.TrackChangeAnimationSystem(this._gameContainer)), c.isEdge || this._world.addSystem(new t.LevelUpTintSystem(this._backgroundContainer, this._hudContainer))), e.isHigherThan(t.GraphicsQuality.MEDIUM)) {
                    var r = !c.isEdge;
                    this._world.addSystem(new t.PlayerDeathAnimationSystem(this._gameContainer, this._worldFilter, r))
                }
                this._world.addSystem(new t.ButtonsHUDSystem(this._hudContainer, n));
                var a = e.isHigherThan(t.GraphicsQuality.HIGH);
                this._world.addSystem(new t.RenderScoreSystem(this._hudContainer, a)), this._world.addSystem(new t.LevelUpHUDSystem(this._hudContainer)), this._world.addSystem(new t.PauseHUDSystem(this._hudContainer, n, this._applyCRTFilter)), this._world.addSystem(new t.GameOverSystem(this._hudContainer, n, this._applyCRTFilter)), this._world.addSystem(new t.CollisionSystem), this._world.addSystem(new t.PauseSystem), this._world.addSystem(new t.MuteSystem), this._world.addSystem(new t.PlayerTrackChangeSystem), this._world.addSystem(new t.UpdateScoreSystem), this._world.addSystem(new t.PlayerMovementSystem), this._world.addSystem(new t.LevelUpSystem), this._world.addSystem(new t.PlayerInputSystem(n, this._coreInfo.inputType)), this._world.addSystem(new t.DestroyTrackSystem), this._world.addSystem(new t.DestroyPlayerSystem), this._world.addSystem(new t.RemoveFromWorldSystem)
            }, i.prototype.initializeEntities = function(e) {
                this.removeAllEntities();
                var n = new CES.Entity;
                n.addComponent(new t.GameComponent), this._world.addEntity(n);
                var o = t.Res.sprite.particle();
                o.scale.set(.1, .1), o.anchor.set(.5, .5);
                var i = new CES.Entity;
                i.addComponent(new t.PositionComponent(200, 0)), i.addComponent(new t.HeroComponent), i.addComponent((new t.SpriteComponent).addGfx(o)), this._world.addEntity(i);
                var r = new CES.Entity;
                r.addComponent(e), this._world.addEntity(r)
            }, i.prototype.initListeners = function() {
                var e = this;
                this._world.entityAdded(t.GameComponent.CNAME, t.RestartGameComponent.CNAME).add(function() {
                    e._blackoutScreen.show(function() {
                        e.restartGame()
                    })
                }), this._world.entityAdded(t.GameComponent.CNAME, t.QuitGameComponent.CNAME).add(function() {
                    e._blackoutScreen.show(function() {
                        e.emit(o.SHOW_TITLE)
                    })
                }), this._world.entityAdded(t.TrackComponent.CNAME).add(function() {
                    e._titleView && (e._titleView.removeListener(t.TitleViewEvent.START_GAME, e.startGameFromTitle, e), t.DisplayObjectUtils.removeFromParent(e._titleView), e._titleView.dispose(), e._titleView = null), e._blackoutScreen.hide(function() {
                        e._hudContainer.addChild(e._readyGoView), e._readyGoView.show().then(function() {
                            var n = e._world.getEntities(t.HeroComponent.CNAME),
                                o = n[0];
                            o.addComponent(new t.PlayerInputComponent)
                        })
                    })
                })
            }, i.prototype.update = function(t) {
                this._world.update(t)
            }, i.prototype.showTitleScreen = function() {
                var e = this;
                this._titleView || (this._titleView = new t.TitleView(this._coreInfo.gameRect)), this._blackoutScreen.hide(function() {
                    e._titleView.addListener(t.TitleViewEvent.START_GAME, e.startGameFromTitle, e), e._hudContainer.addChild(e._titleView)
                })
            }, i.prototype.startGameFromTitle = function() {
                var e = this;
                this._titleView.removeListener(t.TitleViewEvent.START_GAME, this.startGameFromTitle, this), this._blackoutScreen.show(function() {
                    e.restartGame()
                })
            }, i.prototype.restartGame = function() {
                var self = this;
                if (!window.IS_FIRST) {
                    window.IS_FIRST = true;

                    self.restartGame2();
                }
                else {
                    setLoadingVisible(true, false, function () {
                        self.restartGame2();
                    })
                }
            }, i.prototype.restartGame2 = function() {
                console.log(111111)
                var e = this;
                this.removeAllEntities(), t.DisplayObjectUtils.removeAllChildren(this._gameContainer), this._gameContainer.position.x = 0, this._gameContainer.position.y = 900, this._trackGenerator.getTrackComponent().then(function(t) {
                    e.initializeEntities(t)
                })
            }, i.prototype.removeAllEntities = function() {
                for (var t = this._world.getEntities(), e = t.length - 1; e >= 0; e--) {
                    var n = t[e];
                    this._world.removeEntity(n)
                }
            }, i.prototype.dispose = function() {
                this._titleView && (this._titleView.removeListener(t.TitleViewEvent.START_GAME, this.startGameFromTitle, this), this._titleView.dispose(), this._titleView = null), this._blackoutScreen && (this._blackoutScreen.dispose(), this._blackoutScreen = null), this._readyGoView && (this._readyGoView.dispose(), this._readyGoView = null), this._worldFilter && (this._worldFilter.dispose(), this._worldFilter = null), this._world && (this._world.removeAllSystems(), this._world = null), this._renderer.plugins && this._renderer.plugins.sprite && this._renderer.plugins.sprite.sprites && (this._renderer.plugins.sprite.sprites.length = 0), this._trackGenerator && (this._trackGenerator.dispose(), this._trackGenerator = null)
            }, i
        }(EventEmitter);
        t.GameArea = n;
        var o = function() {
            function t() {}
            return t.SHOW_TITLE = "gameArea.SHOW_TITLE", t
        }();
        t.GameEvent = o
    }(n = t.goldenratio || (t.goldenratio = {}))
}(n || (n = {}));
var n;
! function(e) {
    var n;
    ! function(e) {
        var n = function() {
            function n() {
                this._scaledGameRect = new PIXI.Rectangle(0, 0, 0, 0), this._rotateDeviceInfoTimeoutId = -1, this._isGameLaunched = !1, e.DOMUtils.setVisible(o, !0), this.onDOMLoadComplete()
            }
            return n.prototype.onDOMLoadComplete = function() {
                this.mapBinds(), this._coreInfo = new e.CoreInfoModel;
                var t = e.URLUtils.getLocationHash();
                c.isMobileDevice = e.DeviceUtils.isMobileDevice(), c.isConsoleDevice = e.DeviceUtils.isConsoleDevice(), c.isEdge = window.navigator.userAgent.indexOf("Edge") >= 0, c.isChromeApp = t == e.LocationHashType.CHROME_APP, c.isHomeScreenApp = t == e.LocationHashType.HOMESCREEN_APP || "undefined" != typeof window.navigator.standalone && 1 == window.navigator.standalone, e.DOMUtils.setBackgroundColor(document.body, "#000000");
                var n = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                n && !c.isConsoleDevice || localforage.setDriver(localforage.LOCALSTORAGE), c.isChromeApp && this.preInitializeChromeApp(), c.isMobileDevice && this.preInitializeMobile(), this.configureDefaultScale(), this.configureDefaultInput(), this.configureGameOrientation(), window.addEventListener(e.WindowEventType.CONTEXT_MENU, this.onContextMenu, !1), window.addEventListener(e.WindowEventType.RESIZE, this.onResizeWindowHandler, !1);
                var o = window.screen.orientation || null;
                o && "function" == typeof o.addEventListener ? o.addEventListener("change", this.onOrientationChangeHandler, !1) : window.addEventListener(e.WindowEventType.ORIENTATION_CHANGE, this.onOrientationChangeHandler, !1), document.addEventListener(e.DocumentEventType.FULLSCREEN_CHANGE, this.onFullscreenChangeHL, !1), document.addEventListener(e.DocumentEventType.FULLSCREEN_CHANGE_MOZ, this.onFullscreenChangeHL, !1), document.addEventListener(e.DocumentEventType.FULLSCREEN_CHANGE_WEBKIT, this.onFullscreenChangeHL, !1), document.addEventListener(e.DocumentEventType.FULLSCREEN_CHANGE_MS, this.onFullscreenChangeHL, !1), s.addEventListener(e.MouseEventType.CLICK, this.fullScreenCornerButtonClicked, !1), e.SoundManager.event.addListener(e.CoreEventType.SOUND_LOADED, this.onSoundLoadComplete), e.SoundManager.event.addListener(e.CoreEventType.SOUND_ERROR, this.onSoundLoadComplete), e.SoundManager.event.addListener(e.CoreEventType.SOUND_PROGRESS, this.onSoundProgress), this._loader = new e.LoaderScreen;
                var i = e.FullscreenUtils.isGameInFullscreen(),
                    r = e.FullscreenUtils.isFullscreenAvailable,
                    a = c.isMobileDevice && !c.isConsoleDevice && !i;
                if (a && c.isHomeScreenApp && !r && (a = !1), a) {
                    var u = this._coreInfo.scaleType == e.ScaleType.SCALE_TO_FIT;
                    this._loader.setCanShowFullScreenCheckbox(u), this._loader.setEnableTapToPlay(!0)
                } else this._loader.setCanShowFullScreenCheckbox(!1), this._loader.setEnableTapToPlay(!1);
                this._loader.addListener(e.CoreEventType.LAUNCH_GAME, this.onLaunchGameHL), this.resizeGame(), this.resizeGameWithDelay(), this._loader.updateViewPort(this._scaledGameRect.width, this._scaledGameRect.height), this._loader.updateLoadingState(e.LoadingState.GRAPHICS), PIXI.loader.on("progress", this.onGraphicsProgressHL), PIXI.loader.add("brandLogo", d + "/assets/ingame_logo.png").add(d + "/assets/sprite_data/crt_spritesheet.json").add(d + "/assets/sprite_data/game_spritesheet.json").add(d + "/assets/sprite_data/ui_spritesheet.json").add(d + "/assets/sprite_data/texts-en_spritesheet.json").load(this.onAssetsLoadComplete)
            }, n.prototype.onGraphicsProgressHL = function(t) {
                this._loader.setLoaderPercent(e.LoadingState.GRAPHICS, t.progress)
            }, n.prototype.configureDefaultInput = function() {
                var t = this;
                !c.isConsoleDevice && c.isMobileDevice && e.DeviceUtils.isTouchDevice() && this._coreInfo.setInputType(e.InputType.TOUCH), e.LocalStorageUtils.get(e.LocalKey.CONTROL_TYPE).then(function(n) {
                    var o = e.InputType.fromName(n);
                    t._coreInfo.setInputType(o)
                }).catch(function() {})
            }, n.prototype.configureDefaultScale = function() {
                var t = this;
                return c.isMobileDevice || c.isChromeApp || c.isConsoleDevice || c.isHomeScreenApp ? void this._coreInfo.setScaleType(e.ScaleType.SCALE_TO_FIT) : void e.LocalStorageUtils.getBoolean(e.LocalKey.OPTIONS_SCALE_FIT).then(function(n) {
                    t._coreInfo.setScaleType(n ? e.ScaleType.SCALE_TO_FIT : e.ScaleType.NO_SCALE), t.resizeGame()
                }).catch(function() {})
            }, n.prototype.configureGameOrientation = function() {
                this._coreInfo.setGameOrientationMode(e.GameOrientationMode.PORTRAIT), this._scaledGameRect.width = this._coreInfo.gameRect.width, this._scaledGameRect.height = this._coreInfo.gameRect.height
            }, n.prototype.preInitializeChromeApp = function() {}, n.prototype.onContextMenu = function(t) {
                t.preventDefault()
            }, n.prototype.preInitializeMobile = function() {
                e.DOMUtils.setBackgroundColor(document.body, "#000000")
            }, n.prototype.mapBinds = function() {
                this.onContextMenu = this.onContextMenu.bind(this), this.onAssetsLoadComplete = this.onAssetsLoadComplete.bind(this), this.onOrientationChangeHandler = this.onOrientationChangeHandler.bind(this), this.onResizeWindowHandler = this.onResizeWindowHandler.bind(this), this.onGraphicsProgressHL = this.onGraphicsProgressHL.bind(this), this.update = this.update.bind(this), this.onFullscreenChangeHL = this.onFullscreenChangeHL.bind(this), this.onLaunchGameHL = this.onLaunchGameHL.bind(this), this.lockOrientation = this.lockOrientation.bind(this), this.update = this.update.bind(this), this.onSoundLoadComplete = this.onSoundLoadComplete.bind(this), this.onSoundProgress = this.onSoundProgress.bind(this), this.onMuteStateReceived = this.onMuteStateReceived.bind(this)
            }, n.prototype.showFullscreenCornerButton = function(t) {
                !this._isGameLaunched || c.isChromeApp || c.isHomeScreenApp || e.DOMUtils.setVisible(s, t)
            }, n.prototype.fullScreenCornerButtonClicked = function(t) {
                var n = e.FullscreenUtils.triggerFullscreen();
                n || alert("Your web browser doesn't support fullscreen feature!")
            }, n.prototype.onFullscreenChangeHL = function(t) {
                setTimeout(this.lockOrientation, 200)
            }, n.prototype.lockOrientation = function() {
                var t = e.FullscreenUtils.isGameInFullscreen();
                t ? (this.showFullscreenCornerButton(!1), this._coreInfo.gameOrientation == e.GameOrientationMode.PORTRAIT ? e.DeviceUtils.lockScreenToPortrait() : e.DeviceUtils.lockScreenToLandscape()) : this.showFullscreenCornerButton(!0), this._isGameLaunched || this._loader.onFullscreenChange(), this.resizeGameWithDelay()
            }, n.prototype.onResizeWindowHandler = function(t) {
                this.resizeGameWithDelay()
            }, n.prototype.onOrientationChangeHandler = function(t) {
                if (this._coreInfo.gameOrientation == e.GameOrientationMode.LANDSCAPE) {
                    var n = e.DeviceUtils.isLandscapeMode();
                    n && e.FullscreenUtils.triggerFullscreen()
                }
                this.resizeGameWithDelay()
            }, n.prototype.onAssetsLoadComplete = function() {
                this.resizeGame(), this._loader.updateLoadingState(e.LoadingState.SFX), e.SoundManager.init()
            }, n.prototype.onSoundProgress = function(t) {
                this._loader.setLoaderPercent(e.LoadingState.SFX, t)
            }, n.prototype.onSoundLoadComplete = function(t) {
                e.SoundManager.event.removeListener(e.CoreEventType.SOUND_LOADED, this.onSoundLoadComplete), e.SoundManager.event.removeListener(e.CoreEventType.SOUND_ERROR, this.onSoundLoadComplete), this._loader.onLoadComplete()
            }, n.prototype.onLaunchGameHL = function(t) {
                this._loader.removeListener(e.CoreEventType.LAUNCH_GAME, this.onLaunchGameHL), this._loader.hide(), this._isGameLaunched = !0, e.SoundManager.onGameLaunch(), this.initRender()
            }, n.prototype.initRender = function() {
                var t = this;
                e.DOMUtils.setVisible(r, !0), e.FullscreenUtils.isGameInFullscreen() || this.showFullscreenCornerButton(!0);
                var n = document.getElementById("game_area"),
                    o = e.URLUtils.getParamValueAsBoolean("webgl", !0),
                    i = !o,
                    a = {
                        view: n,
                        width: this._coreInfo.gameRect.width,
                        height: this._coreInfo.gameRect.height,
                        antialias: !1,
                        backgroundColor: 0,
                        roundPixels: !1,
                        sharedTicker: !0,
                        forceCanvas: i,
                        forceFXAA: !0,
                        powerPreference: "high-performance"
                    };
                this._app = new PIXI.Application(a), this._stage = this._app.stage, h = this._app.renderer.type == PIXI.RENDERER_TYPE.WEBGL;
                var s = !h,
                    u = e.GraphicsQuality.fromString(e.URLUtils.getParamValue("quality"));
                null == u && s && c.isMobileDevice && (u = e.GraphicsQuality.MEDIUM), u && this._coreInfo.setGraphicsQuality(u), this.updateContainersWidthHeight(), this.resizeGame(), e.LocalStorageUtils.getBoolean(e.LocalKey.MUTE_KEY).then(function(e) {
                    t.onMuteStateReceived(e)
                }).catch(function() {
                    t.onMuteStateReceived(!1)
                })
            }, n.prototype.onMuteStateReceived = function(t) {
                e.SoundManager.setUserMute(t);
                this.init()
            }, n.prototype.init = function(n) {
                void 0 === n && (n = !1), e.SpriteFont.init(), 
				// LaggedAPI.init("cardinal_runn_gintis", "lagdevaF3001"), 
				t(), this._app.ticker.add(this.update), n ? this.initGamePlay() : this.initGamePlay()
            }, n.prototype.initGamePlay = function() {
                var t = this;
                this.disposeGameArea(), setTimeout(function() {
                    t._gameArea = new e.GameArea(t._app.renderer, t._stage, t._coreInfo), t._gameArea.addListener(e.GameEvent.SHOW_TITLE, t.showTitleFromGame, t)
                }, 200)
            }, n.prototype.disposeGameArea = function() {
                this._gameArea && (this._gameArea.removeListener(e.GameEvent.SHOW_TITLE, this.showTitleFromGame, this), this._gameArea.dispose(), this._gameArea = null), e.DisplayObjectUtils.removeAllChildren(this._stage)
            }, n.prototype.showTitleFromGame = function() {
                this.disposeGameArea(), this.initTitleArea()
            }, n.prototype.initTitleArea = function() {
                this.disposeTitleArea(), setTimeout(function() {}, 200)
            }, n.prototype.disposeTitleArea = function() {
                e.DisplayObjectUtils.removeAllChildren(this._stage)
            }, n.prototype.gotoGameScreenFromTitle = function() {
                this.disposeTitleArea(), this.initGamePlay()
            }, n.prototype.update = function(t) {
                this._gameArea && this._gameArea.update(t), TWEEN.update()
            }, n.prototype.resizeGameWithDelay = function() {
                var t = this;
                "undefined" != typeof this._resizeTimeout && clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(function() {
                    t.resizeGame()
                }, 100)
            }, n.prototype.resizeGame = function() {
                var t = 0,
                    n = 0;
                switch (this._coreInfo.scaleType) {
                    case e.ScaleType.SCALE_TO_FIT:
                        t = window.innerWidth, n = window.innerHeight;
                        break;
                    case e.ScaleType.NO_SCALE:
                        var o = this._coreInfo.gameRect,
                            i = window.innerWidth,
                            r = window.innerHeight,
                            a = i >= o.width && r >= o.height;
                        a && !e.FullscreenUtils.isGameInFullscreen() ? (t = o.width / devicePixelRatio | 0, n = o.height / devicePixelRatio | 0, t >= i && (t = i), n >= r && (n = r)) : (t = window.innerWidth, n = window.innerHeight);
                        break;
                    default:
                        throw new Error("unknown scale type")
                }
                this.resizeRender(t, n)
            }, n.prototype.resizeRender = function(t, n) {
                var i = t,
                    r = n,
                    a = this._scaledGameRect.width / this._scaledGameRect.height,
                    s = i / r;
                return s > a ? i = Math.round(r * a) : r = Math.round(i / a), this._scaledGameRect.width == i && this._scaledGameRect.height == r ? (e.DOMUtils.setWidthHeight(o, i, r), void this.updateVerticalAlignGameContainer()) : (this._scaledGameRect.width = i, this._scaledGameRect.height = r, this.updateContainersWidthHeight(), this.updateVerticalAlignGameContainer(), void this.displayRotateDeviceInfo())
            }, n.prototype.updateContainersWidthHeight = function() {
                o && e.DOMUtils.setWidthHeight(o, this._scaledGameRect.width, this._scaledGameRect.height), this._app && this._app.renderer && this._app.renderer.view && e.DOMUtils.setWidthHeight(this._app.renderer.view, this._scaledGameRect.width, this._scaledGameRect.height), this._loader && this._loader.updateViewPort(this._scaledGameRect.width, this._scaledGameRect.height)
            }, n.prototype.updateVerticalAlignGameContainer = function() {
                var t = window.innerHeight - this._scaledGameRect.height >> 1;
                if (e.DOMUtils.setTransformTranslate(o, 0, t), e.HarlemShake.setData(o, 0, t), this._isGameLaunched && !e.FullscreenUtils.isGameInFullscreen()) {
                    var n = window.innerWidth - this._scaledGameRect.width >> 1;
                    if (this._coreInfo.gameOrientation == e.GameOrientationMode.LANDSCAPE) {
                        var i = t >= 30 || n >= 30;
                        this.showFullscreenCornerButton(i)
                    } else {
                        var i = t >= 30 || n >= 10;
                        this.showFullscreenCornerButton(i)
                    }
                } else this.showFullscreenCornerButton(!1)
            }, n.prototype.displayRotateDeviceInfo = function() {
                if (c.isMobileDevice) {
                    window.clearTimeout(this._rotateDeviceInfoTimeoutId);
                    var t = e.DeviceUtils.isLandscapeMode();
                    this._coreInfo.gameOrientation == e.GameOrientationMode.PORTRAIT ? e.DOMUtils.setVisible(a, t) : this._coreInfo.gameOrientation == e.GameOrientationMode.LANDSCAPE && e.DOMUtils.setVisible(a, !t), this._rotateDeviceInfoTimeoutId = window.setTimeout(function() {
                        e.DOMUtils.setVisible(a, !1)
                    }, 5e3)
                }
            }, n
        }();
        e.Main = n
    }(n = e.goldenratio || (e.goldenratio = {}))
}(n || (n = {}));
var o, i, r, a, s, u = !1,
    c = {
        isMobileDevice: !1,
        isConsoleDevice: !1,
        isChromeApp: !1,
        isHomeScreenApp: !1,
        isEdge: !1
    },
    l, h = !1,
    BUILD_VERSION = "0.2",
    d = "f08a485810b185f392d1b8228cec6a25",
    p = "https://lagged.com/",
    m = !1;