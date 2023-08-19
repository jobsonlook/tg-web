var __reflect=this&&this.__reflect||function(t,r,h){t.__class__=r,h?h.push(r):h=[r],t.__types__=t.__types__?h.concat(t.__types__):h},md5=function(){function t(){this.hexcase=0,this.b64pad=""}return t.prototype.hex_md5=function(t){return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))},t.prototype.b64_md5=function(t){return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))},t.prototype.any_md5=function(t,r){return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)),r)},t.prototype.hex_hmac_md5=function(t,r){return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t),this.str2rstr_utf8(r)))},t.prototype.b64_hmac_md5=function(t,r){return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t),this.str2rstr_utf8(r)))},t.prototype.any_hmac_md5=function(t,r,h){return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t),this.str2rstr_utf8(r)),h)},t.prototype.md5_vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"==this.hex_md5("abc").toLowerCase()},t.prototype.rstr_md5=function(t){return this.binl2rstr(this.binl_md5(this.rstr2binl(t),8*t.length))},t.prototype.rstr_hmac_md5=function(t,r){var h=this.rstr2binl(t);h.length>16&&(h=this.binl_md5(h,8*t.length));for(var i=Array(16),s=Array(16),_=0;16>_;_++)i[_]=909522486^h[_],s[_]=1549556828^h[_];var d=this.binl_md5(i.concat(this.rstr2binl(r)),512+8*r.length);return this.binl2rstr(this.binl_md5(s.concat(d),640))},t.prototype.rstr2hex=function(t){try{this.hexcase}catch(r){this.hexcase=0}for(var h,i=this.hexcase?"0123456789ABCDEF":"0123456789abcdef",s="",_=0;_<t.length;_++)h=t.charCodeAt(_),s+=i.charAt(h>>>4&15)+i.charAt(15&h);return s},t.prototype.rstr2b64=function(t){try{this.b64pad}catch(r){this.b64pad=""}for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i="",s=t.length,_=0;s>_;_+=3)for(var d=t.charCodeAt(_)<<16|(s>_+1?t.charCodeAt(_+1)<<8:0)|(s>_+2?t.charCodeAt(_+2):0),n=0;4>n;n++)i+=8*_+6*n>8*t.length?this.b64pad:h.charAt(d>>>6*(3-n)&63);return i},t.prototype.rstr2any=function(t,r){var h,i,s,_,d,n=r.length,e=Array(Math.ceil(t.length/2));for(h=0;h<e.length;h++)e[h]=t.charCodeAt(2*h)<<8|t.charCodeAt(2*h+1);var o=Math.ceil(8*t.length/(Math.log(r.length)/Math.log(2))),m=Array(o);for(i=0;o>i;i++){for(d=Array(),_=0,h=0;h<e.length;h++)_=(_<<16)+e[h],s=Math.floor(_/n),_-=s*n,(d.length>0||s>0)&&(d[d.length]=s);m[i]=_,e=d}var f="";for(h=m.length-1;h>=0;h--)f+=r.charAt(m[h]);return f},t.prototype.str2rstr_utf8=function(t){for(var r,h,i="",s=-1;++s<t.length;)r=t.charCodeAt(s),h=s+1<t.length?t.charCodeAt(s+1):0,r>=55296&&56319>=r&&h>=56320&&57343>=h&&(r=65536+((1023&r)<<10)+(1023&h),s++),127>=r?i+=String.fromCharCode(r):2047>=r?i+=String.fromCharCode(192|r>>>6&31,128|63&r):65535>=r?i+=String.fromCharCode(224|r>>>12&15,128|r>>>6&63,128|63&r):2097151>=r&&(i+=String.fromCharCode(240|r>>>18&7,128|r>>>12&63,128|r>>>6&63,128|63&r));return i},t.prototype.str2rstr_utf16le=function(t){for(var r="",h=0;h<t.length;h++)r+=String.fromCharCode(255&t.charCodeAt(h),t.charCodeAt(h)>>>8&255);return r},t.prototype.str2rstr_utf16be=function(t){for(var r="",h=0;h<t.length;h++)r+=String.fromCharCode(t.charCodeAt(h)>>>8&255,255&t.charCodeAt(h));return r},t.prototype.rstr2binl=function(t){for(var r=Array(t.length>>2),h=0;h<r.length;h++)r[h]=0;for(var h=0;h<8*t.length;h+=8)r[h>>5]|=(255&t.charCodeAt(h/8))<<h%32;return r},t.prototype.binl2rstr=function(t){for(var r="",h=0;h<32*t.length;h+=8)r+=String.fromCharCode(t[h>>5]>>>h%32&255);return r},t.prototype.binl_md5=function(t,r){t[r>>5]|=128<<r%32,t[(r+64>>>9<<4)+14]=r;for(var h=1732584193,i=-271733879,s=-1732584194,_=271733878,d=0;d<t.length;d+=16){var n=h,e=i,o=s,m=_;h=this.md5_ff(h,i,s,_,t[d+0],7,-680876936),_=this.md5_ff(_,h,i,s,t[d+1],12,-389564586),s=this.md5_ff(s,_,h,i,t[d+2],17,606105819),i=this.md5_ff(i,s,_,h,t[d+3],22,-1044525330),h=this.md5_ff(h,i,s,_,t[d+4],7,-176418897),_=this.md5_ff(_,h,i,s,t[d+5],12,1200080426),s=this.md5_ff(s,_,h,i,t[d+6],17,-1473231341),i=this.md5_ff(i,s,_,h,t[d+7],22,-45705983),h=this.md5_ff(h,i,s,_,t[d+8],7,1770035416),_=this.md5_ff(_,h,i,s,t[d+9],12,-1958414417),s=this.md5_ff(s,_,h,i,t[d+10],17,-42063),i=this.md5_ff(i,s,_,h,t[d+11],22,-1990404162),h=this.md5_ff(h,i,s,_,t[d+12],7,1804603682),_=this.md5_ff(_,h,i,s,t[d+13],12,-40341101),s=this.md5_ff(s,_,h,i,t[d+14],17,-1502002290),i=this.md5_ff(i,s,_,h,t[d+15],22,1236535329),h=this.md5_gg(h,i,s,_,t[d+1],5,-165796510),_=this.md5_gg(_,h,i,s,t[d+6],9,-1069501632),s=this.md5_gg(s,_,h,i,t[d+11],14,643717713),i=this.md5_gg(i,s,_,h,t[d+0],20,-373897302),h=this.md5_gg(h,i,s,_,t[d+5],5,-701558691),_=this.md5_gg(_,h,i,s,t[d+10],9,38016083),s=this.md5_gg(s,_,h,i,t[d+15],14,-660478335),i=this.md5_gg(i,s,_,h,t[d+4],20,-405537848),h=this.md5_gg(h,i,s,_,t[d+9],5,568446438),_=this.md5_gg(_,h,i,s,t[d+14],9,-1019803690),s=this.md5_gg(s,_,h,i,t[d+3],14,-187363961),i=this.md5_gg(i,s,_,h,t[d+8],20,1163531501),h=this.md5_gg(h,i,s,_,t[d+13],5,-1444681467),_=this.md5_gg(_,h,i,s,t[d+2],9,-51403784),s=this.md5_gg(s,_,h,i,t[d+7],14,1735328473),i=this.md5_gg(i,s,_,h,t[d+12],20,-1926607734),h=this.md5_hh(h,i,s,_,t[d+5],4,-378558),_=this.md5_hh(_,h,i,s,t[d+8],11,-2022574463),s=this.md5_hh(s,_,h,i,t[d+11],16,1839030562),i=this.md5_hh(i,s,_,h,t[d+14],23,-35309556),h=this.md5_hh(h,i,s,_,t[d+1],4,-1530992060),_=this.md5_hh(_,h,i,s,t[d+4],11,1272893353),s=this.md5_hh(s,_,h,i,t[d+7],16,-155497632),i=this.md5_hh(i,s,_,h,t[d+10],23,-1094730640),h=this.md5_hh(h,i,s,_,t[d+13],4,681279174),_=this.md5_hh(_,h,i,s,t[d+0],11,-358537222),s=this.md5_hh(s,_,h,i,t[d+3],16,-722521979),i=this.md5_hh(i,s,_,h,t[d+6],23,76029189),h=this.md5_hh(h,i,s,_,t[d+9],4,-640364487),_=this.md5_hh(_,h,i,s,t[d+12],11,-421815835),s=this.md5_hh(s,_,h,i,t[d+15],16,530742520),i=this.md5_hh(i,s,_,h,t[d+2],23,-995338651),h=this.md5_ii(h,i,s,_,t[d+0],6,-198630844),_=this.md5_ii(_,h,i,s,t[d+7],10,1126891415),s=this.md5_ii(s,_,h,i,t[d+14],15,-1416354905),i=this.md5_ii(i,s,_,h,t[d+5],21,-57434055),h=this.md5_ii(h,i,s,_,t[d+12],6,1700485571),_=this.md5_ii(_,h,i,s,t[d+3],10,-1894986606),s=this.md5_ii(s,_,h,i,t[d+10],15,-1051523),i=this.md5_ii(i,s,_,h,t[d+1],21,-2054922799),h=this.md5_ii(h,i,s,_,t[d+8],6,1873313359),_=this.md5_ii(_,h,i,s,t[d+15],10,-30611744),s=this.md5_ii(s,_,h,i,t[d+6],15,-1560198380),i=this.md5_ii(i,s,_,h,t[d+13],21,1309151649),h=this.md5_ii(h,i,s,_,t[d+4],6,-145523070),_=this.md5_ii(_,h,i,s,t[d+11],10,-1120210379),s=this.md5_ii(s,_,h,i,t[d+2],15,718787259),i=this.md5_ii(i,s,_,h,t[d+9],21,-343485551),h=this.safe_add(h,n),i=this.safe_add(i,e),s=this.safe_add(s,o),_=this.safe_add(_,m)}return[h,i,s,_]},t.prototype.md5_cmn=function(t,r,h,i,s,_){return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(r,t),this.safe_add(i,_)),s),h)},t.prototype.md5_ff=function(t,r,h,i,s,_,d){return this.md5_cmn(r&h|~r&i,t,r,s,_,d)},t.prototype.md5_gg=function(t,r,h,i,s,_,d){return this.md5_cmn(r&i|h&~i,t,r,s,_,d)},t.prototype.md5_hh=function(t,r,h,i,s,_,d){return this.md5_cmn(r^h^i,t,r,s,_,d)},t.prototype.md5_ii=function(t,r,h,i,s,_,d){return this.md5_cmn(h^(r|~i),t,r,s,_,d)},t.prototype.safe_add=function(t,r){var h=(65535&t)+(65535&r),i=(t>>16)+(r>>16)+(h>>16);return i<<16|65535&h},t.prototype.bit_rol=function(t,r){return t<<r|t>>>32-r},t}();__reflect(md5.prototype,"md5");
var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},one;!function(t){var e;!function(t){var e=function(){function t(){}return t.prototype.setGuideData=function(t){this._data=t},t.prototype.execute=function(t,e){void 0===e&&(e=null),this._sel=t,this._context=e},t.prototype.update=function(t){},t.prototype.getUI=function(){var t=new eui.Group;return t.touchEnabled=!1,t},t.prototype.finish=function(){var t=this._sel,e=this._context;this.dispose(),t&&t.call(e)},t.prototype.dispose=function(){this._sel=this._context=this._data=null},t}();t.GuideCommand=e,__reflect(e.prototype,"one.guide.GuideCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},one;!function(t){var e;!function(t){var e=function(e){function i(){return e.apply(this,arguments)||this}return __extends(i,e),i.prototype.execute=function(i,n){var s=this;void 0===n&&(n=null),e.prototype.execute.call(this,i,n),t.Setting.getInstance().getSetting().ProxyCall(this._data.key_s,this._data.next_s),egret.setTimeout(function(){s.finish()},this,100)},i}(t.GuideCommand);t.GuideProxyCommand=e,__reflect(e.prototype,"one.guide.GuideProxyCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},one;!function(t){var e;!function(t){var e=function(t){function e(){return t.apply(this,arguments)||this}return __extends(e,t),e.prototype.execute=function(e,i){var n=this;void 0===i&&(i=null),t.prototype.execute.call(this,e,i),egret.setTimeout(function(){n.finish()},this,this._data.delay_i)},e}(t.GuideCommand);t.GuideDelayCommand=e,__reflect(e.prototype,"one.guide.GuideDelayCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},one;!function(t){var e;!function(t){var e=function(e){function i(){return e.apply(this,arguments)||this}return __extends(i,e),i.prototype.execute=function(i,n){var s=this;void 0===n&&(n=null),e.prototype.execute.call(this,i,n),t.Setting.getInstance().getSetting().NotifyCall(this._data.key_s),egret.setTimeout(function(){s.finish()},this,100)},i}(t.GuideCommand);t.GuideNotifyCommand=e,__reflect(e.prototype,"one.guide.GuideNotifyCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},one;!function(t){var e;!function(t){var e=function(){function t(){}return t}();e.Touch="touch",e.Talk="talk",e.Delay="delay",e.Wait="wait",e.Proxy="proxy",e.Notify="notify",t.GuideType=e,__reflect(e.prototype,"one.guide.GuideType")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},one;!function(t){var e;!function(t){var e=function(e){function i(){return e.apply(this,arguments)||this}return __extends(i,e),i.prototype.execute=function(t,i){e.prototype.execute.call(this,t,i)},i.prototype.getUI=function(){var e=this,i=new eui.Group;i.touchEnabled=!1,i.percentWidth=i.percentHeight=100;var n=t.Setting.getInstance().getTalkPanel();return n.init(this._data,function(){e.finish()},this),i.addChild(n),i},i}(t.GuideCommand);t.GuideTalkCommand=e,__reflect(e.prototype,"one.guide.GuideTalkCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},one;!function(t){var e;!function(t){var e=function(t){function e(){return t.apply(this,arguments)||this}return __extends(e,t),e.prototype.update=function(t){this._data.key_s==t.key&&this.finish()},e.prototype.getUI=function(){return this.ui=new eui.Group,this.ui.touchEnabled=!1,this.ui},e}(t.GuideCommand);t.GuideWaitCommand=e,__reflect(e.prototype,"one.guide.GuideWaitCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},one;!function(t){var e;!function(e){var i=function(i){function n(){var t=i.apply(this,arguments)||this;return t.timeId=-1,t.isUpdate=!1,t.lastWidth=0,t.lastHeight=0,t.lastPx=0,t.lastPy=0,t.isCreated=!1,t}return __extends(n,i),n.prototype.execute=function(t,e){var n=this;i.prototype.execute.call(this,t,e),this.timeId=egret.setInterval(function(){n.updateView()},this,100)},n.prototype.update=function(t){this.arrow=e.Setting.getInstance().getSetting().Arrow,this.arrow.touchEnabled=!1,this.isUpdate,this.isUpdate=!0,this.tempBtn=t.btn,this._data.key_s==t.key&&this.updateView()},n.prototype.updateView=function(){var i=this;if(this.tempBtn&&this.tempBtn.stage&&0!=this.tempBtn.width&&0!=this.tempBtn.height){null==this._data.size_l[1]&&(this._data.size_l[1]=this.tempBtn.width/2,this._data.size_l[2]=this.tempBtn.height/2,this._data.size_l[3]=this.tempBtn.width,this._data.size_l[4]=this.tempBtn.height);var n=this.tempBtn.localToGlobal(this._data.size_l[1],this._data.size_l[2]);if(n.x!=this.lastPx||n.y!=this.lastPy||this.tempBtn.width!=this.lastWidth||this.tempBtn.height!=this.lastHeight){var s=this._data.size_l[3],a=this._data.size_l[4];this.ui.removeChildren(),this.isCreated||(this.isCreated=!0,this.touchSha=this.getMaskBtn(this._data.size_l[0],s,a,0),this.touchSha.touchEnabled=!0,this.touchSha.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){u=!0;var e=new egret.TouchEvent(t.type,t.bubbles,t.cancelable,t.stageX,t.stageY,t.touchPointID);i.tempBtn.dispatchEvent(e),i.arrow&&i.arrow.parent&&i.arrow.parent.removeChild(i.arrow),i.finish()},this.touchSha),this.touchSha.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){if(!u&&i.tempBtn.stage){var e=new egret.TouchEvent(t.type,t.bubbles,t.cancelable,t.stageX,t.stageY,t.touchPointID);i.tempBtn.dispatchEvent(e)}},this.touchSha),this.touchSha.addEventListener(egret.TouchEvent.TOUCH_END,function(t){if(!u&&i.tempBtn.stage){var e=new egret.TouchEvent(t.type,t.bubbles,t.cancelable,t.stageX,t.stageY,t.touchPointID);i.tempBtn.dispatchEvent(e)}},this.touchSha)),this.lastWidth=this.tempBtn.width,this.lastHeight=this.tempBtn.height,this.lastPx=n.x,this.lastPy=n.y;var o=e.Setting.getInstance().getSetting().UIRoot,h=this.getMaskBtn(this._data.size_l[0],s,a,e.Setting.getInstance().getMaskAlpha());h.x=n.x,h.y=n.y;var r=t.getTouchMask(h,o.width,o.height,e.Setting.getInstance().getMaskAlpha());this.touchSha.x=n.x,this.touchSha.y=n.y,this.ui.addChild(r),this.ui.addChild(this.touchSha),this.ui.addChild(this.arrow),this.arrow.x=this.touchSha.x,this.touchSha.y>o.stage.stageHeight/2?this.arrow.rotation=180:this.arrow.rotation=0,this.arrow.y=this.touchSha.y;var u=!1}}},n.prototype.getUI=function(){return this.ui=new eui.Group,this.ui.touchEnabled=!1,this.ui},n.prototype.getMaskBtn=function(t,i,n,s){if(1!=t&&2!=t)return e.Setting.getInstance().getSetting().TouchAreaCall(t,i,n,s);var a=new egret.Shape;return a.graphics.beginFill(0,s),1==t?(a.graphics.drawCircle(0,0,i/2),a.scaleY=n/i):2==t&&a.graphics.drawRect(-i/2,-n/2,i,n),a.graphics.endFill(),a},n.prototype.finish=function(){-1!=this.timeId&&egret.clearInterval(this.timeId),this.tempBtn=null,i.prototype.finish.call(this)},n}(e.GuideCommand);e.GuideTouchCommand=i,__reflect(i.prototype,"one.guide.GuideTouchCommand")}(e=t.guide||(t.guide={}))}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},one;!function(t){var e;!function(t){function e(t,e){s[t]=e}function i(t){var e=s[t.type_s];if(e){var i=new e;return i.setGuideData(t),i}return null}var n=function(){function n(){this._cmdDatas=[],this.btns={}}return n.prototype.start=function(t,e,i,n){for(this._cmdDatas=e;this._cmdDatas.length>0&&this._cmdDatas[0].key_s!=t;)this._cmdDatas.shift();this._sel=i,this._context=n,this.run()},n.prototype.run=function(){if(this.ui&&(this.ui.removeChildren(),this.ui.parent&&this.ui.parent.removeChild(this.ui)),this.data&&(this.hasGuideInLefts(this.data.key_s)||this.removeTouch(this.data.key_s)),this.cmd=null,this._cmdDatas.length>0){if(this.data&&null!=this.data.next_step_s&&""!=this.data.next_step_s)for(var e=this.data.next_step_s;;){if(this.data=this._cmdDatas.shift(),this.data.key_s==e)break;this.hasGuideInLefts(this.data.key_s)||this.removeTouch(this.data.key_s)}else this.data=this._cmdDatas.shift();if(this.cmd=i(this.data),this.ui=new eui.Group,this.ui.touchEnabled=!1,this.ui.percentWidth=this.ui.percentHeight=100,this.data.type_s==t.GuideType.Talk)this.data.mask_i&&this.ui.addChild(this.getMask(t.Setting.getInstance().getMaskAlpha())),this.ui.addChild(this.cmd.getUI());else if(this.data.type_s==t.GuideType.Touch){if(this.ui.addChild(this.getMask(0)),this.ui.addChild(this.cmd.getUI()),this.btns[this.data.key_s]&&this.cmd.update({key:this.data.key_s,btn:this.btns[this.data.key_s]}),null!=this.data.message_s&&""!=this.data.message_s){var n=t.Setting.getInstance().getTalkPanel();n.init(this.data,null,null),this.ui.addChild(n)}}else this.data.mask_i&&(this.ui.addChild(this.getMask(t.Setting.getInstance().getMaskAlpha())),this.ui.addChild(this.cmd.getUI()));t.Setting.getInstance().getSetting().UIRoot.addChild(this.ui),this.cmd.execute(this.run,this)}else this.data=null,this._sel&&this._sel.call(this._context)},n.prototype.getMask=function(e){void 0===e&&(e=.6);var i=new egret.Shape;return i.touchEnabled=!0,i.graphics.beginFill(0,e),i.graphics.drawRect(0,0,t.Setting.getInstance().getSetting().UIRoot.width,t.Setting.getInstance().getSetting().UIRoot.height),i.graphics.endFill(),i},n.prototype.addTouch=function(t,e){var i=this;egret.setTimeout(function(){i.addToTouches(t,e)},this,200)},n.prototype.addToTouches=function(e,i){if(this.data&&this.data.type_s==t.GuideType.Touch&&this.data.key_s==e)return this.btns[e]=i,void this.cmd.update({key:e,btn:i});for(var n=0;n<this._cmdDatas.length;n++)if(this._cmdDatas[n].type_s==t.GuideType.Touch&&this._cmdDatas[n].key_s==e){this.btns[e]=i;break}},n.prototype.hasGuide=function(t){return this.data&&this.data.key_s==t?!0:this.hasGuideInLefts(t)},n.prototype.hasGuideInLefts=function(t){for(var e=0;e<this._cmdDatas.length;e++)if(this._cmdDatas[e].key_s==t)return!0;return!1},n.prototype.removeTouch=function(t){delete this.btns[t]},n.prototype.sendWait=function(e){this.data&&this.data.type_s==t.GuideType.Wait&&this.data.key_s==e&&this.cmd.update({key:e})},n.prototype.setSetting=function(e){t.Setting.getInstance().init(e)},n.getInstantce=function(){return null==n.instance&&(n.instance=new n,e(t.GuideType.Touch,t.GuideTouchCommand),e(t.GuideType.Talk,t.GuideTalkCommand),e(t.GuideType.Wait,t.GuideWaitCommand),e(t.GuideType.Delay,t.GuideDelayCommand),e(t.GuideType.Proxy,t.GuideProxyCommand),e(t.GuideType.Notify,t.GuideNotifyCommand)),n.instance},n}();t.GuideManager=n,__reflect(n.prototype,"one.guide.GuideManager");var s={};t.registerCommand=e}(e=t.guide||(t.guide={})),t.guideManager=t.guide.GuideManager.getInstantce()}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},one;!function(t){var e;!function(t){var e=function(){function t(){}return t.prototype.init=function(t){this._setting=t},t.prototype.getSetting=function(){return this._setting},t.prototype.getTalkPanel=function(){return this._setting.TalkPanel},t.prototype.getMaskAlpha=function(){return null!=this._setting.MaskAlpha?this._setting.MaskAlpha:.6},t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t}();t.Setting=e,__reflect(e.prototype,"one.guide.Setting")}(e=t.guide||(t.guide={}))}(one||(one={}));var one;!function(t){function e(t,e,i,n){void 0===n&&(n=.6);var s=new egret.DisplayObjectContainer,a=new egret.Shape;a.graphics.beginFill(0,n),a.graphics.drawRect(0,0,e,i),a.graphics.endFill(),s.addChild(a),0!=n&&(s.addChild(t),t.blendMode=egret.BlendMode.ERASE);var o=new egret.RenderTexture;o.drawToTexture(s);var h=new egret.Bitmap(o);return h.touchEnabled=!0,h}t.getTouchMask=e}(one||(one={}));var one;!function(t){var e;!function(t){var e;!function(t){t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.Top=3]="Top"}(e=t.GuideDirection||(t.GuideDirection={}))}(e=t.guide||(t.guide={}))}(one||(one={}));
var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},two;!function(t){var e=function(e){function n(){return e.apply(this,arguments)||this}return __extends(n,e),n.prototype.show=function(){t.sceneLayer.stage.addChild(this)},n.prototype.hide=function(){t.removeSelf(this)},n.prototype.destroy=function(){t.removeSelf(this)},n}(eui.Rect);__reflect(e.prototype,"TempAd");var n=function(){function n(){}return n.show=function(e){this.hashes.indexOf(e)<0&&(this.hashes.push(e),this.W=510,this.H=170,this.X=t.sceneLayer.stage.stageWidth/2-this.W/2,this.Y=t.sceneLayer.stage.stageHeight-this.H,this.hideOne(),this.showAd())},n.hide=function(t){var e=this.hashes.indexOf(t);e>=0&&this.hashes.splice(e,1),this.hideOne(),this.hashes.length>0&&this.showAd()},n.getBanner=function(t,n){var i=this;if(window.createBannerAd){var o=window.createBannerAd("",{left:this.X,top:this.Y,width:this.W,height:this.H},function(e){return 0!=e.code?void i.getBanner(t,function(){n&&n()}):(i.opened.push(o),i.currentBanner==o&&i.currentBanner.show(),void(n&&one.callLater(function(){n()},1)))});if(o)return this.banners[t]={banner:o,count:0},o}n&&one.callLater(function(){n()},1);var s=new e(this.W,this.H,100*Math.floor(one.randomInt(0,16777215)/100));this.opened.push(s),s.x=this.X,s.y=this.Y,this.banners[t]={banner:s,count:0}},n.showAd=function(){var t=this;if(!(this.showId>0))if(0==this.banners.length){this.index=0;var e=this.getBanner(0,function(){e=t.getBanner(1,function(){}),t.hashes.length>0&&t.showOne()})}else this.showOne()},n.hideOne=function(){if(this.currentBanner){for(var t=0;t<this.banners.length;t++)if(this.banners[t]&&this.banners[t].banner==this.currentBanner&&(this.banners[t].banner.hide(),this.banners[t].count>=this.Max_Count)){var e=this.opened.indexOf(this.currentBanner);e>=0&&this.opened.splice(e,1),this.banners[t].banner.destroy(),this.getBanner(t,function(){})}this.currentBanner=null}},n.showOne=function(){var t=this.banners[this.index].banner;this.currentBanner=t,this.opened.indexOf(t)>=0&&(t.show(),this.banners[this.index].count++),this.index++,this.index=this.index%this.banners.length},n}();n.banners=[],n.index=0,n.W=0,n.H=0,n.X=0,n.Y=0,n.Max_Count=30,n.hashes=[],n.opened=[],n.showId=-1,t.BannerAd=n,__reflect(n.prototype,"two.BannerAd")}(two||(two={})),function(t){var e=function(e){function n(t){return e.call(this,t)||this}return __extends(n,e),n.prototype.added=function(){e.prototype.added.call(this),t.BannerAd.show(this.hashCode)},n.prototype.removed=function(){e.prototype.removed.call(this),t.BannerAd.hide(this.hashCode)},n}(t.BaseComponent);t.BannerComponent=e,__reflect(e.prototype,"two.BannerComponent")}(two||(two={}));var one;!function(t){function e(e,n){t.plat=e,t.plat.canUse()&&e.init(n)}t.initPlatform=e}(one||(one={}));var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},two;!function(t){function e(t){if(window.setUserCloudStorage){var e=[];for(var n in t)e.push({key:n,value:t[n]});window.setUserCloudStorage({KVDataList:e,success:function(){},fail:function(){},complete:function(t){console.log(JSON.stringify(t))}})}}t.saveShareData=e;var n=function(t){function e(n){var i=t.call(this)||this;return i.isDown=!1,i.texture=e.getBitmap(),i.fillMode=egret.BitmapFillMode.CLIP,i.page=n,i.addEventListener(egret.Event.ADDED_TO_STAGE,i.onAddToStage,i),i.addEventListener(egret.Event.REMOVED_FROM_STAGE,i.onRemoveFromStage,i),i}return __extends(e,t),e.canShowDisplay=function(){return!!window.setUserCloudStorage},e.getBitmap=function(){return this._inBmp?this._inBmp:(e.canShowDisplay()&&(e.bitmapdata=new egret.BitmapData(window.sharedCanvas),e.bitmapdata.$deleteSource=!1,this._inBmp=new egret.Texture,this._inBmp.bitmapData=e.bitmapdata),this._inBmp)},e.postMessage=function(t,e){window.getOpenDataContext&&window.getOpenDataContext().postMessage({data:e,type:t})},e.setOpenId=function(t){this.openId=t},e.prototype.onTouchBegin=function(t){var n=this.globalToLocal(t.stageX,t.stageY);e.postMessage(t.type,{x:n.x,y:n.y})},e.prototype.onAddToStage=function(t){t.target==t.currentTarget&&(egret.startTick(this.onTicker,this),this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchBegin,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchBegin,this),e.postMessage("open",{openid:e.openId,page:this.page,fixRap:0}))},e.prototype.onRemoveFromStage=function(t){t.target==t.currentTarget&&(egret.stopTick(this.onTicker,this),this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchBegin,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchBegin,this),e.postMessage("close",{}))},e.prototype.onTicker=function(t){return e.bitmapdata&&(egret.WebGLUtils.deleteWebGLTexture(e.bitmapdata.webGLTexture),e.bitmapdata.webGLTexture=null),!1},e.prototype.updateDisplayList=function(n,i){t.prototype.updateDisplayList.call(this,n,i),e.postMessage("resize",{width:n,height:i})},e}(eui.Image);t.ShareDisplay=n,__reflect(n.prototype,"two.ShareDisplay")}(two||(two={}));var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},two;!function(t){var e=function(t){function e(e){var n=t.call(this)||this;return n.source=e,n.isAddBtn=!1,n}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.target==t.currentTarget&&e.removed()},this)},e.prototype.removed=function(){this.loginBtn&&(this.loginBtn.hide(),this.loginBtn.destroy())},e.prototype.hide=function(){this.loginBtn?this.loginBtn.hide():this.visible=!1},e.prototype.show=function(){this.loginBtn?this.loginBtn.show():this.visible=!0},e.prototype.updateDisplayList=function(e,n){var i=this;t.prototype.updateDisplayList.call(this,e,n),e>0&&n>0&&!this.isAddBtn&&(this.isAddBtn=!0,window.createUserInfoButton&&(this.loginBtn=window.createUserInfoButton({image:this.source,left:this.x,top:this.y,width:this.width,height:this.height},function(t){t&&i.dispatchEventWith(egret.TouchEvent.TOUCH_TAP)})),this.loginBtn?this.visible=!1:this.visible=!0)},e}(eui.Button);t.UserInfoButton=e,__reflect(e.prototype,"two.UserInfoButton")}(two||(two={}));var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},two;!function(t){var e=-1;t.VideoGapSecond=20;var n=function(){function n(){}return n.show=function(n,i){if(window.createRewardedVideoAd){if(Date.now()-e<=1e3*t.VideoGapSecond)return void i({code:9999});one.soundManager.isOpened(egret.Sound.MUSIC);one.soundManager.stop(egret.Sound.MUSIC);var o=one.soundManager.isOpened(egret.Sound.EFFECT);one.soundManager.close(egret.Sound.EFFECT),window.createRewardedVideoAd(n,function(t){0==t.code&&(e=Date.now()),one.callLater(function(){one.soundManager.playLastMusic(),o&&one.soundManager.open(egret.Sound.EFFECT),i(t)},1)})}else i&&i({code:0})},n}();t.VideoAd=n,__reflect(n.prototype,"two.VideoAd")}(two||(two={}));var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},two;!function(t){var e=function(t){function e(e){var n=t.call(this)||this;return n.source=e,n.isAddBtn=!1,n}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.target==t.currentTarget&&e.removed()},this)},e.prototype.removed=function(){this.loginBtn&&(this.loginBtn.hide(),this.loginBtn.destroy())},e.prototype.hide=function(){this.loginBtn?this.loginBtn.hide():this.visible=!1},e.prototype.show=function(){this.loginBtn?this.loginBtn.show():this.visible=!0},e.prototype.updateDisplayList=function(e,n){t.prototype.updateDisplayList.call(this,e,n),e>0&&n>0&&!this.isAddBtn&&(this.isAddBtn=!0,window.createGameClubButton&&(this.loginBtn=window.createGameClubButton({image:this.source,left:this.x,top:this.y,width:this.width,height:this.height})),this.loginBtn?this.visible=!1:this.visible=!0)},e}(eui.Button);t.CustomButton=e,__reflect(e.prototype,"two.CustomButton")}(two||(two={}));