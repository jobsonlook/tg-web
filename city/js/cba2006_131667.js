window.skins=window.skins||{};
                __extends=this&&this.__extends||function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/default/ButtonScaleSkin.exml","eui.ProgressBar":"resource/eui_skins/default/ProgressBarSkin.exml","eui.Scroller":"resource/eui_skins/default/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/default/ToggleSwitchSkin.exml","two.ComboChooseItem":"resource/eui_skins/default/ComboChooseItemSkin.exml","two.RedPoint":"resource/eui_skins/default/RedPointSkin.exml","two.Stars":"resource/eui_skins/default/StarsSkin.exml","two.Footer":"resource/eui_skins/default/StarsSkin.exml","two.ComboSelectedItem":"resource/eui_skins/default/ComboSelectedItemSkin.exml","two.City":"resource/eui_skins/CitySkin.exml","two.CityBlock":"resource/eui_skins/CityBlockSkin.exml","two.SuccessBox":"resource/eui_skins/SuccessBoxSkin.exml","two.CityLevelPage":"resource/eui_skins/CityLevelPageSkin.exml","two.CityLevelItem":"resource/eui_skins/CityLevelItemSkin.exml","two.CityDifficultyPage":"resource/eui_skins/CityDifficultyPageSkin.exml","two.CityDifficultyItem":"resource/eui_skins/CityDifficultyItemSkin.exml","two.LoginPage":"resource/eui_skins/LoginPageSkin.exml"};generateEUI.paths['resource/eui_skins/CityBlockSkin.exml'] = window.CityBlockSkin = (function (_super) {
	__extends(CityBlockSkin, _super);
	function CityBlockSkin() {
		_super.call(this);
		this.skinParts = ["gp_content","rect2","rect0","rect1"];
		
		this.width = 120;
		this.elementsContent = [this.gp_content_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = CityBlockSkin.prototype;

	_proto.gp_content_i = function () {
		var t = new eui.Group();
		this.gp_content = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.source = "1_tile_0_0_l_png";
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.source = "1_tile_house_0_png";
		t.x = 60;
		t.y = -44;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.alpha = 0;
		t.scaleY = 0.6;
		t.touchEnabled = false;
		t.x = 60.4;
		t.y = 0.21;
		t.elementsContent = [this.rect2_i()];
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.rotation = 45;
		t.width = 84;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.alpha = 0;
		t.skewY = -31;
		t.touchEnabled = false;
		t.x = 61;
		t.y = 71;
		t.elementsContent = [this.rect0_i()];
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.width = 65.63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.alpha = 0;
		t.skewY = 31;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 34;
		t.elementsContent = [this.rect1_i()];
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.width = 73.8;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CityBlockSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CityDifficultyItemSkin.exml'] = window.CityDifficultyItemSkin = (function (_super) {
	__extends(CityDifficultyItemSkin, _super);
	function CityDifficultyItemSkin() {
		_super.call(this);
		this.skinParts = ["txt_level","txt_tip","icon"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9)
				])
		];
	}
	var _proto = CityDifficultyItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.txt_level_i(),this.txt_tip_i(),this.icon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 176;
		t.scale9Grid = new egret.Rectangle(36,43,128,44);
		t.source = "button_chapter_png";
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_level_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_level = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "14/30";
		t.x = 32.2;
		t.y = 94.2;
		return t;
	};
	_proto.txt_tip_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_tip = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "VERY EASY.";
		t.x = 40;
		t.y = 18.2;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "1_tile_1_0_png";
		t.x = 130;
		t.y = 75;
		return t;
	};
	return CityDifficultyItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ButtonScale3Skin.exml'] = window.ButtonScale3Skin = (function (_super) {
	__extends(ButtonScale3Skin, _super);
	function ButtonScale3Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonScale3Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "button_next_win_ingame_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.font = "font_titlebar_46_fnt";
		t.horizontalCenter = 24.5;
		t.text = "LEVEL 1";
		t.verticalCenter = -3.5;
		return t;
	};
	return ButtonScale3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CityDifficultyPageSkin.exml'] = window.CityDifficultyPageSkin = (function (_super) {
	__extends(CityDifficultyPageSkin, _super);
	function CityDifficultyPageSkin() {
		_super.call(this);
		this.skinParts = ["begin","btn_back","image","image0","group","list"];
		
		this.height = 979;
		this.width = 640;
		this.begin_i();
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.image_i(),this.image0_i(),this.group_i(),this._Scroller1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-45],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [86],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [158],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [640],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [438],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [86],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleY");
	}
	var _proto = CityDifficultyPageSkin.prototype;

	_proto.begin_i = function () {
		var t = new egret.tween.TweenGroup();
		this.begin = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._Wait1_i(),this._Set4_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.ease = "bounceOut";
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "panel_bottom_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.horizontalCenter = 0.5;
		t.elementsContent = [this.btn_back_i()];
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.height = 75;
		t.icon = "button_bottom_back_png";
		t.label = "BACK";
		t.skinName = "ButtonScale3Skin";
		t.width = 235;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "titlebar_arrow_left_png";
		t.x = 135.5;
		t.y = 91;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.source = "titlebar_arrow_right_png";
		t.x = 460;
		t.y = 91;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 59;
		t.x = 320;
		t.y = 110;
		t.elementsContent = [this._BitmapLabel1_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_button_54_fnt";
		t.text = "CHOOSE";
		t.x = 30.5;
		t.y = 0;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_button_54_fnt";
		t.text = "DIFFICULTY";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 29;
		t.y = 219;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRenderer = two.CityDifficultyItem;
		t.itemRendererSkinName = CityDifficultyItemSkin;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 40;
		t.paddingBottom = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		t.requestedColumnCount = 2;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	return CityDifficultyPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CityLevelItemSkin.exml'] = window.CityLevelItemSkin = (function (_super) {
	__extends(CityLevelItemSkin, _super);
	function CityLevelItemSkin() {
		_super.call(this);
		this.skinParts = ["icon","txt_level","flag"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = CityLevelItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.icon_i(),this.txt_level_i(),this.flag_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Button();
		this.icon = t;
		t.height = 105;
		t.icon = "button_level_unlocked_png";
		t.label = "";
		t.scaleX = 1.54;
		t.scaleY = 1.54;
		t.width = 105;
		return t;
	};
	_proto.txt_level_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_level = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.horizontalCenter = -0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "14/30";
		t.y = 53.9;
		return t;
	};
	_proto.flag_i = function () {
		var t = new eui.Image();
		this.flag = t;
		t.source = "ingame_perfect_badge_png";
		t.x = 110.4;
		t.y = 93;
		return t;
	};
	return CityLevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CityLevelPageSkin.exml'] = window.CityLevelPageSkin = (function (_super) {
	__extends(CityLevelPageSkin, _super);
	function CityLevelPageSkin() {
		_super.call(this);
		this.skinParts = ["begin","image1","btn_back","image","image0","group","list"];
		
		this.height = 1136;
		this.width = 640;
		this.begin_i();
		this.elementsContent = [this.image1_i(),this._Group1_i(),this.image_i(),this.image0_i(),this.group_i(),this._Scroller1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-45],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [86],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [158],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [640],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [438],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [86],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleY");
	}
	var _proto = CityLevelPageSkin.prototype;

	_proto.begin_i = function () {
		var t = new egret.tween.TweenGroup();
		this.begin = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._Wait1_i(),this._Set4_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.ease = "bounceOut";
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "panel_bottom_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.horizontalCenter = 0.5;
		t.elementsContent = [this.btn_back_i()];
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.height = 75;
		t.icon = "button_bottom_back_png";
		t.label = "BACK";
		t.skinName = "ButtonScale3Skin";
		t.width = 235;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "titlebar_arrow_left_png";
		t.x = 135.5;
		t.y = 91;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.source = "titlebar_arrow_right_png";
		t.x = 460;
		t.y = 91;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 59;
		t.x = 320;
		t.y = 110;
		t.elementsContent = [this._BitmapLabel1_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_button_54_fnt";
		t.text = "CHOOSE";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_button_54_fnt";
		t.text = "LEVEL";
		t.x = 21;
		t.y = 65;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 105;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.top = 219;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRenderer = two.CityLevelItem;
		t.itemRendererSkinName = CityLevelItemSkin;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 40;
		t.paddingBottom = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		t.requestedColumnCount = 3;
		t.verticalGap = 40;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	return CityLevelPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CitySkin.exml'] = window.CitySkin = (function (_super) {
	__extends(CitySkin, _super);
	function CitySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = CitySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.source = "1_tile_0_0_l_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.source = "1_tile_0_0_l_png";
		t.x = 179;
		t.y = 150;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.source = "1_tile_house_0_png";
		t.x = 179;
		t.y = 97;
		return t;
	};
	return CitySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/BoxBgSkin.exml'] = window.BoxBgSkin = (function (_super) {
	__extends(BoxBgSkin, _super);
	var BoxBgSkin$Skin1 = 	(function (_super) {
		__extends(BoxBgSkin$Skin1, _super);
		function BoxBgSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Group1","scaleX",0.9),
						new eui.SetProperty("_Group1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("iconDisplay","alpha",0.5)
					])
			];
		}
		var _proto = BoxBgSkin$Skin1.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			return t;
		};
		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.source = "button_shop_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "";
			t.verticalCenter = 0;
			return t;
		};
		return BoxBgSkin$Skin1;
	})(eui.Skin);

	function BoxBgSkin() {
		_super.call(this);
		this.skinParts = ["btn_close","txt_title"];
		
		this.height = 483;
		this.width = 522;
		this.elementsContent = [this._Group1_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.AddItems("_Image2","_Group1",2,"btn_close"),
					new eui.SetProperty("_Image2","scale9Grid",new egret.Rectangle(61,60,59,56)),
					new eui.SetProperty("","width",555)
				])
		];
	}
	var _proto = BoxBgSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.txt_title_i(),this._Button1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(74,70,87,103);
		t.source = "box_bg_1_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 60;
		t.left = 52;
		t.right = 35;
		t.scale9Grid = new egret.Rectangle(60,57,57,55);
		t.source = "box_bg_2_png";
		t.top = 97;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.height = 63;
		t.icon = "btn_close_0_png";
		t.label = "";
		t.right = -10;
		t.width = 63;
		t.y = -14.5;
		t.skinName = BoxBgSkin$Skin1;
		return t;
	};
	_proto.txt_title_i = function () {
		var t = new eui.Label();
		this.txt_title = t;
		t.horizontalCenter = -11;
		t.text = "标题";
		t.y = 27;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "Button";
		t.x = 108;
		t.y = 142;
		return t;
	};
	return BoxBgSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ButtonScale2Skin.exml'] = window.ButtonScale2Skin = (function (_super) {
	__extends(ButtonScale2Skin, _super);
	function ButtonScale2Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",95),
					new eui.SetProperty("_Image1","percentHeight",95),
					new eui.SetProperty("_Group1","scaleX",0.95),
					new eui.SetProperty("_Group1","scaleY",0.95)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonScale2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(29,26,65,15);
		t.source = "btn_bg_green_0_up_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.labelDisplay_i(),this.iconDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x3B9115;
		t.text = "OK";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.x = 7;
		t.y = 83.35;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "icon_go_png";
		t.x = 11;
		t.y = 0;
		return t;
	};
	return ButtonScale2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ButtonScaleSkin.exml'] = window.ButtonScaleSkin = (function (_super) {
	__extends(ButtonScaleSkin, _super);
	function ButtonScaleSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonScaleSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "btn_bg_green_0_up_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "asdfsadf";
		t.verticalCenter = 0;
		return t;
	};
	return ButtonScaleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group2_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",1,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",1,"")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "check_0_unselect_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "check_0_select_png";
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 20;
		t.text = "哈哈哈哈";
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ComboBoxSkin.exml'] = window.ComboBoxSkin = (function (_super) {
	__extends(ComboBoxSkin, _super);
	var ComboBoxSkin$Skin2 = 	(function (_super) {
		__extends(ComboBoxSkin$Skin2, _super);
		function ComboBoxSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_up_0_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ComboBoxSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_up_0_up_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ComboBoxSkin$Skin2;
	})(eui.Skin);

	var ComboBoxSkin$Skin3 = 	(function (_super) {
		__extends(ComboBoxSkin$Skin3, _super);
		function ComboBoxSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_down_0_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ComboBoxSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_down_0_up_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ComboBoxSkin$Skin3;
	})(eui.Skin);

	function ComboBoxSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller","select","btn_up","btn_down"];
		
		this.height = 37;
		this.width = 121;
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("down",
				[
					new eui.SetProperty("scroller","width",121),
					new eui.SetProperty("scroller","y",34),
					new eui.SetProperty("btn_up","width",35),
					new eui.SetProperty("btn_up","height",35),
					new eui.SetProperty("btn_down","width",35),
					new eui.SetProperty("btn_down","height",35),
					new eui.SetProperty("","height",38)
				])
			,
			new eui.State ("up",
				[
					new eui.SetProperty("list","width",67),
					new eui.SetProperty("scroller","left",0),
					new eui.SetProperty("scroller","right",0),
					new eui.SetProperty("scroller","bottom",38),
					new eui.SetProperty("btn_up","right",0),
					new eui.SetProperty("btn_up","y",2),
					new eui.SetProperty("btn_down","right",0),
					new eui.SetProperty("btn_down","y",3),
					new eui.SetProperty("_Group1","y",0),
					new eui.SetProperty("_Group1","left",0),
					new eui.SetProperty("_Group1","right",0),
					new eui.SetProperty("_Group2","y",80),
					new eui.SetProperty("_Group2","anchorOffsetX",0),
					new eui.SetProperty("_Group2","width",121)
				])
		];
	}
	var _proto = ComboBoxSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.scroller_i(),this._Group1_i()];
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.maxHeight = 300;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ComboChooseItemSkin;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.label = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.label = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.label = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.label = "null";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.select_i(),this.btn_up_i(),this.btn_down_i()];
		return t;
	};
	_proto.select_i = function () {
		var t = new two.ComboSelectedItem();
		this.select = t;
		t.anchorOffsetX = 0;
		t.height = 36;
		t.left = 0;
		t.right = 36;
		t.y = 0;
		return t;
	};
	_proto.btn_up_i = function () {
		var t = new eui.Button();
		this.btn_up = t;
		t.label = "";
		t.x = 86;
		t.y = 2;
		t.skinName = ComboBoxSkin$Skin2;
		return t;
	};
	_proto.btn_down_i = function () {
		var t = new eui.Button();
		this.btn_down = t;
		t.label = "";
		t.x = 86;
		t.y = 3;
		t.skinName = ComboBoxSkin$Skin3;
		return t;
	};
	return ComboBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ComboChooseItemSkin.exml'] = window.ComboChooseItemSkin = (function (_super) {
	__extends(ComboChooseItemSkin, _super);
	function ComboChooseItemSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 42;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","cell_47_png"),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(24,15,96,16))
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.labelDisplay,"text");
	}
	var _proto = ComboChooseItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(19,23,259,18);
		t.source = "cell_32_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 7;
		t.right = 9;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x96460A;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ComboChooseItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ComboSelectedItem2Skin.exml'] = window.ComboSelectedItem2Skin = (function (_super) {
	__extends(ComboSelectedItem2Skin, _super);
	function ComboSelectedItem2Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.labelDisplay,"text");
	}
	var _proto = ComboSelectedItem2Skin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x99421d;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ComboSelectedItem2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ComboSelectedItemSkin.exml'] = window.ComboSelectedItemSkin = (function (_super) {
	__extends(ComboSelectedItemSkin, _super);
	function ComboSelectedItemSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.labelDisplay,"text");
	}
	var _proto = ComboSelectedItemSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xfcfcfc;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ComboSelectedItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ConfirmBoxSkin.exml'] = window.ConfirmBoxSkin = (function (_super) {
	__extends(ConfirmBoxSkin, _super);
	function ConfirmBoxSkin() {
		_super.call(this);
		this.skinParts = ["btn1","btn2","txt_msg"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ConfirmBoxSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.txt_msg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 325;
		t.scale9Grid = new egret.Rectangle(88,77,73,76);
		t.source = "box_bg_1_png";
		t.width = 525;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 116;
		t.left = 24;
		t.right = 23;
		t.scale9Grid = new egret.Rectangle(60,57,57,55);
		t.source = "box_bg_2_png";
		t.top = 27;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 25;
		t.y = 216;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.btn1_i(),this.btn2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 46;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "关闭";
		t.skinName = "skins.ButtonRedSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Button();
		this.btn2 = t;
		t.label = "OK";
		t.skinName = "skins.ButtonGreenSkin";
		t.x = 222;
		t.y = 0;
		return t;
	};
	_proto.txt_msg_i = function () {
		var t = new eui.Label();
		this.txt_msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143;
		t.size = 26;
		t.text = "是否消耗 ";
		t.textAlign = "center";
		t.textColor = 0x9b5826;
		t.verticalAlign = "middle";
		t.width = 431;
		t.x = 44;
		t.y = 44.5;
		return t;
	};
	return ConfirmBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/GoldGainTipSkin.exml'] = window.GoldGainTipSkin = (function (_super) {
	__extends(GoldGainTipSkin, _super);
	function GoldGainTipSkin() {
		_super.call(this);
		this.skinParts = ["txt_gold","gp"];
		
		this.elementsContent = [this.gp_i()];
	}
	var _proto = GoldGainTipSkin.prototype;

	_proto.gp_i = function () {
		var t = new eui.Group();
		this.gp = t;
		t.x = 0;
		t.elementsContent = [this.txt_gold_i()];
		return t;
	};
	_proto.txt_gold_i = function () {
		var t = new eui.Label();
		this.txt_gold = t;
		t.stroke = 1;
		t.text = "23";
		t.textColor = 0xffffff;
		t.y = 0;
		return t;
	};
	return GoldGainTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/GuideArrowSkin.exml'] = window.GuideArrowSkin = (function (_super) {
	__extends(GuideArrowSkin, _super);
	function GuideArrowSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = GuideArrowSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "icon_finger_png";
		t.x = -5;
		t.y = -6;
		return t;
	};
	return GuideArrowSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/GuideTalkPanelSkin.exml'] = window.GuideTalkPanelSkin = (function (_super) {
	__extends(GuideTalkPanelSkin, _super);
	function GuideTalkPanelSkin() {
		_super.call(this);
		this.skinParts = ["txt_msg","gp"];
		
		this.elementsContent = [this.gp_i()];
	}
	var _proto = GuideTalkPanelSkin.prototype;

	_proto.gp_i = function () {
		var t = new eui.Group();
		this.gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 341;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 408;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.txt_msg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(74,70,87,103);
		t.source = "box_bg_1_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 34;
		t.left = 38;
		t.right = 35;
		t.scale9Grid = new egret.Rectangle(61,60,59,56);
		t.source = "box_bg_2_png";
		t.top = 97;
		return t;
	};
	_proto.txt_msg_i = function () {
		var t = new eui.Label();
		this.txt_msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 84;
		t.left = 55;
		t.right = 59;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x7c460c;
		t.top = 141;
		t.verticalAlign = "middle";
		return t;
	};
	return GuideTalkPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/SoundCheckBoxSkin.exml'] = window.SoundCheckBoxSkin = (function (_super) {
	__extends(SoundCheckBoxSkin, _super);
	function SoundCheckBoxSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","alpha",1)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",1),
					new eui.SetProperty("_Image1","source","button_sound_on_ingame_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",1),
					new eui.SetProperty("_Image1","source","button_sound_on_ingame_png"),
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",1),
					new eui.SetProperty("_Image1","source","button_sound_on_ingame_png")
				])
		];
	}
	var _proto = SoundCheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "scale";
		t.source = "button_sound_off_ingame_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SoundCheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/HomePageSkin.exml'] = window.HomePageSkin = (function (_super) {
	__extends(HomePageSkin, _super);
	function HomePageSkin() {
		_super.call(this);
		this.skinParts = ["bg","city","scroller","btn_pause","btn_home","btn_restart","btn_last","btn_next","gp_bottom","txt_tip","txt_level","flag_left","txt_link","txt_step","txt_left","flag","gp_left"];
		
		this.height = 904;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._CloudsPanel1_i(),this.scroller_i(),this.btn_pause_i(),this.gp_bottom_i(),this.gp_left_i()];
	}
	var _proto = HomePageSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background_png";
		t.top = 0;
		return t;
	};
	_proto._CloudsPanel1_i = function () {
		var t = new two.CloudsPanel();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "on";
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.city_i()];
		return t;
	};
	_proto.city_i = function () {
		var t = new two.City();
		this.city = t;
		t.scaleX = 1;
		t.scaleY = 1;
		return t;
	};
	_proto.btn_pause_i = function () {
		var t = new eui.Button();
		this.btn_pause = t;
		t.height = 68;
		t.icon = "button_pause_png";
		t.width = 65;
		t.x = 555.5;
		t.y = 34;
		return t;
	};
	_proto.gp_bottom_i = function () {
		var t = new eui.Group();
		this.gp_bottom = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "panel_bottom_png";
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 15;
		t.elementsContent = [this.btn_home_i(),this._SoundButton1_i(),this.btn_restart_i(),this.btn_last_i(),this.btn_next_i()];
		return t;
	};
	_proto.btn_home_i = function () {
		var t = new eui.Button();
		this.btn_home = t;
		t.height = 85;
		t.icon = "button_menu_ingame_png";
		t.width = 85;
		t.x = 230;
		t.y = 15;
		return t;
	};
	_proto._SoundButton1_i = function () {
		var t = new two.SoundButton();
		t.height = 80;
		t.icon = "button_sound_on_ingame_png";
		t.skinName = "SoundCheckBoxSkin";
		t.width = 80;
		t.x = 113;
		t.y = 18;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.height = 80;
		t.icon = "button_restart_ingame_png";
		t.width = 80;
		t.x = 353.67;
		t.y = 18;
		return t;
	};
	_proto.btn_last_i = function () {
		var t = new eui.Button();
		this.btn_last = t;
		t.height = 75;
		t.icon = "button_previous_ingame_png";
		t.width = 75;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.height = 75;
		t.icon = "button_next_ingame_png";
		t.width = 75;
		t.x = 470.9;
		t.y = 20;
		return t;
	};
	_proto.gp_left_i = function () {
		var t = new eui.Group();
		this.gp_left = t;
		t.left = 0;
		t.y = 8;
		t.elementsContent = [this._Image2_i(),this.txt_tip_i(),this.txt_level_i(),this._Image3_i(),this._Image4_i(),this.flag_left_i(),this.txt_link_i(),this.txt_step_i(),this.txt_left_i(),this.flag_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(31,18,188,20);
		t.source = "toolbar_ingame_png";
		t.width = 319;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_tip_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_tip = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "VERY EASY.";
		t.x = 10;
		t.y = 6.2;
		return t;
	};
	_proto.txt_level_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_level = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "14/30";
		t.x = 164.85;
		t.y = 6.2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_connections_ingame_png";
		t.x = 8;
		t.y = 54;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_level_ingame_png";
		t.x = 95;
		t.y = 54;
		return t;
	};
	_proto.flag_left_i = function () {
		var t = new eui.Image();
		this.flag_left = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_perfect_ingame_png";
		t.x = 171.85;
		t.y = 54;
		return t;
	};
	_proto.txt_link_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_link = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0/3";
		t.x = 38.3;
		t.y = 44;
		return t;
	};
	_proto.txt_step_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_step = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "4";
		t.x = 122.5;
		t.y = 44;
		return t;
	};
	_proto.txt_left_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_left = t;
		t.anchorOffsetY = 0;
		t.font = "font_titlebar_46_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "11";
		t.x = 199.85;
		t.y = 44;
		return t;
	};
	_proto.flag_i = function () {
		var t = new eui.Image();
		this.flag = t;
		t.source = "ingame_perfect_badge_png";
		t.x = 20;
		t.y = 123.5;
		return t;
	};
	return HomePageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.scale9Grid = new egret.Rectangle(34,4,208,27);
		t.source = "pro_11_0_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.scale9Grid = new egret.Rectangle(10,3,253,24);
		t.source = "pro_11_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 0;
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 18;
		t.anchorOffsetY = 26;
		t.source = "ui_bar_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/MenuPageSkin.exml'] = window.MenuPageSkin = (function (_super) {
	__extends(MenuPageSkin, _super);
	var MenuPageSkin$Skin4 = 	(function (_super) {
		__extends(MenuPageSkin$Skin4, _super);
		function MenuPageSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Group1","scaleX",0.9),
						new eui.SetProperty("_Group1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuPageSkin$Skin4.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i(),this._Image1_i()];
			return t;
		};
		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.source = "button_play_main_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "font_titlebar_46_fnt";
			t.horizontalCenter = 40;
			t.text = "PLAY";
			t.verticalCenter = -3.5;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "button_play_main_arrow_png";
			t.x = 15;
			t.y = 26;
			return t;
		};
		return MenuPageSkin$Skin4;
	})(eui.Skin);

	function MenuPageSkin() {
		_super.call(this);
		this.skinParts = ["btn_start","gp_city"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.btn_start_i(),this._EUIMC1_i(),this._EUIMC2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Group1_i(),this.gp_city_i()];
	}
	var _proto = MenuPageSkin.prototype;

	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.horizontalCenter = 1;
		t.icon = "button_play_main_png";
		t.label = "PLAY";
		t.verticalCenter = 200.5;
		t.skinName = MenuPageSkin$Skin4;
		return t;
	};
	_proto._EUIMC1_i = function () {
		var t = new two.EUIMC();
		t.fileName = "logo_arrow_left";
		t.frameRate = 24;
		t.frames = "1,2,3,4,5,6,7,8,9,10,11,12,13,14";
		t.x = 143;
		t.y = 113;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "logo_arrow_left_1_png";
		return t;
	};
	_proto._EUIMC2_i = function () {
		var t = new two.EUIMC();
		t.fileName = "logo_arrow_right";
		t.frameRate = 24;
		t.frames = "1,2,3,4,5,6,7,8,9,10,11,12,13,14";
		t.x = 409;
		t.y = 113;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "logo_arrow_right_1_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "logo_main_city_png";
		t.x = 221;
		t.y = 76;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "logo_main_connect_png";
		t.x = 221;
		t.y = 179;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "panel_bottom_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this._SoundButton1_i()];
		return t;
	};
	_proto._SoundButton1_i = function () {
		var t = new two.SoundButton();
		t.height = 80;
		t.icon = "button_sound_on_ingame_png";
		t.skinName = "SoundCheckBoxSkin";
		t.width = 80;
		return t;
	};
	_proto.gp_city_i = function () {
		var t = new eui.Group();
		this.gp_city = t;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.y = 324.98;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_4_3_png";
		t.x = 252.8;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_1_2_png";
		t.x = 323.6;
		t.y = 43.2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_1_1_png";
		t.x = 180.8;
		t.y = 43;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_0_3_png";
		t.x = 251.8;
		t.y = 85.59;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_4_2_png";
		t.x = 110;
		t.y = 84.99;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_4_0_png";
		t.x = 394.6;
		t.y = 85.2;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_1_3_png";
		t.x = 323.6;
		t.y = 127.99;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_3_0_png";
		t.x = 182;
		t.y = 127.2;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_4_1_png";
		t.x = 251.8;
		t.y = 169.2;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "1_tile_house_0_png";
		t.x = 254;
		t.y = 18;
		return t;
	};
	return MenuPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/MessageTipSkin.exml'] = window.MessageTipSkin = (function (_super) {
	__extends(MessageTipSkin, _super);
	function MessageTipSkin() {
		_super.call(this);
		this.skinParts = ["messageTxt"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MessageTipSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.messageTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,24,3);
		t.source = "bg_tip_0_png";
		t.top = 0;
		return t;
	};
	_proto.messageTxt_i = function () {
		var t = new eui.Label();
		this.messageTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.left = 15;
		t.lineSpacing = 6;
		t.maxWidth = 500;
		t.right = 15;
		t.size = 24;
		t.text = "阿水电费防守打法萨德发了静安寺两地分居类似电机";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 15;
		t.verticalAlign = "middle";
		return t;
	};
	return MessageTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/PreLoadingSkin.exml'] = window.PreLoadingSkin = (function (_super) {
	__extends(PreLoadingSkin, _super);
	var PreLoadingSkin$Skin5 = 	(function (_super) {
		__extends(PreLoadingSkin$Skin5, _super);
		function PreLoadingSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["thumb","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
		}
		var _proto = PreLoadingSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(13,0,13,18);
			t.source = "loading_bar_bg_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.left = 5;
			t.right = 5;
			t.scale9Grid = new egret.Rectangle(7,3,6,2);
			t.source = "loading_bar_2_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 15;
			t.textAlign = "center";
			t.textColor = 0x707070;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return PreLoadingSkin$Skin5;
	})(eui.Skin);

	function PreLoadingSkin() {
		_super.call(this);
		this.skinParts = ["bar","txt_loading"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image2_i(),this._Image3_i(),this._EUIMC1_i(),this._EUIMC2_i()];
	}
	var _proto = PreLoadingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 177;
		t.horizontalCenter = 0;
		t.width = 618.33;
		t.elementsContent = [this.bar_i(),this._Label1_i(),this.txt_loading_i()];
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.ProgressBar();
		this.bar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1;
		t.left = 0;
		t.right = 0;
		t.slideDuration = 0;
		t.value = 0;
		t.y = 0;
		t.skinName = PreLoadingSkin$Skin5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -0.5;
		t.size = 24;
		t.text = "资源加载完成后，进入游戏很快哦！";
		t.textColor = 0xf7f7f7;
		t.y = 54.33;
		return t;
	};
	_proto.txt_loading_i = function () {
		var t = new eui.Label();
		this.txt_loading = t;
		t.horizontalCenter = -7;
		t.size = 24;
		t.text = "正在加载：0%";
		t.textColor = 0xf7f7f7;
		t.y = 88;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "logo_main_city_png";
		t.x = 221;
		t.y = 76;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "logo_main_connect_png";
		t.x = 221;
		t.y = 179;
		return t;
	};
	_proto._EUIMC1_i = function () {
		var t = new two.EUIMC();
		t.fileName = "logo_arrow_left";
		t.frameRate = 24;
		t.frames = "1,2,3,4,5,6,7,8,9,10,11,12,13,14";
		t.x = 143;
		t.y = 113;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "logo_arrow_left_1_png";
		return t;
	};
	_proto._EUIMC2_i = function () {
		var t = new two.EUIMC();
		t.fileName = "logo_arrow_right";
		t.frameRate = 24;
		t.frames = "1,2,3,4,5,6,7,8,9,10,11,12,13,14";
		t.x = 409;
		t.y = 113;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "logo_arrow_right_1_png";
		return t;
	};
	return PreLoadingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("p_0",
				[
					new eui.SetProperty("thumb","source","pro_0_1_png")
				])
		];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pro_0_0_png";
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "pro_0_1_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "323";
		t.textAlign = "center";
		t.textColor = 0x843c0a;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group2_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",1,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",1,"")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "check_0_unselect_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "check_0_select_png";
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 20;
		t.text = "哈哈哈哈";
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/RedPointSkin.exml'] = window.RedPointSkin = (function (_super) {
	__extends(RedPointSkin, _super);
	function RedPointSkin() {
		_super.call(this);
		this.skinParts = ["txt_count"];
		
		this.height = 30;
		this.width = 30;
		this.elementsContent = [this._Image1_i(),this.txt_count_i()];
	}
	var _proto = RedPointSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "dian_0_png";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_count_i = function () {
		var t = new eui.Label();
		this.txt_count = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.stroke = 1;
		t.text = "23";
		t.textAlign = "center";
		t.width = 30;
		t.x = 0;
		t.y = 6;
		return t;
	};
	return RedPointSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 20;
		this.minWidth = 20;
	}
	var _proto = ScrollerSkin.prototype;

	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/SettingBoxSkin.exml'] = window.SettingBoxSkin = (function (_super) {
	__extends(SettingBoxSkin, _super);
	var SettingBoxSkin$Skin6 = 	(function (_super) {
		__extends(SettingBoxSkin$Skin6, _super);
		function SettingBoxSkin$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group2_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image2","_Group1",1,"")
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.SetProperty("_Image1","alpha",0.7)
					])
				,
				new eui.State ("disabled",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.SetProperty("_Image1","alpha",0.5)
					])
				,
				new eui.State ("upAndSelected",
					[
					])
				,
				new eui.State ("downAndSelected",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
					])
			];
		}
		var _proto = SettingBoxSkin$Skin6.prototype;

		_proto._Group2_i = function () {
			var t = new eui.Group();
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Group1_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.fillMode = "scale";
			t.source = "btn_music_png";
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.source = "icon_close_png";
			t.x = 138.5;
			t.y = 33.01;
			return t;
		};
		return SettingBoxSkin$Skin6;
	})(eui.Skin);

	var SettingBoxSkin$Skin7 = 	(function (_super) {
		__extends(SettingBoxSkin$Skin7, _super);
		function SettingBoxSkin$Skin7() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group2_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image2","_Group1",1,"")
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.SetProperty("_Image1","alpha",0.7)
					])
				,
				new eui.State ("disabled",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.SetProperty("_Image1","alpha",0.5)
					])
				,
				new eui.State ("upAndSelected",
					[
					])
				,
				new eui.State ("downAndSelected",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
					])
			];
		}
		var _proto = SettingBoxSkin$Skin7.prototype;

		_proto._Group2_i = function () {
			var t = new eui.Group();
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Group1_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.fillMode = "scale";
			t.source = "btn_sound_png";
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.source = "icon_close_png";
			t.x = 138.5;
			t.y = 33.01;
			return t;
		};
		return SettingBoxSkin$Skin7;
	})(eui.Skin);

	function SettingBoxSkin() {
		_super.call(this);
		this.skinParts = ["btn_ok","btn_music","btn_effect"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SettingBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._BoxBg1_i(),this.btn_ok_i(),this._Label1_i(),this._Label2_i(),this.btn_music_i(),this.btn_effect_i()];
		return t;
	};
	_proto._BoxBg1_i = function () {
		var t = new two.BoxBg();
		t.anchorOffsetY = 0;
		t.height = 448;
		t.skinName = "BoxBgSkin";
		t.title = "设置";
		t.width = 557;
		return t;
	};
	_proto.btn_ok_i = function () {
		var t = new eui.Button();
		this.btn_ok = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.label = "O K";
		t.skinName = "ButtonScale2Skin";
		t.width = 213;
		t.x = 172;
		t.y = 389;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "音乐";
		t.textColor = 0xe26e0f;
		t.x = 138.51;
		t.y = 275.53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "音效";
		t.textColor = 0xE26E0F;
		t.x = 355;
		t.y = 275.53;
		return t;
	};
	_proto.btn_music_i = function () {
		var t = new eui.CheckBox();
		this.btn_music = t;
		t.label = "";
		t.x = 89.5;
		t.y = 170.5;
		t.skinName = SettingBoxSkin$Skin6;
		return t;
	};
	_proto.btn_effect_i = function () {
		var t = new eui.CheckBox();
		this.btn_effect = t;
		t.label = "";
		t.x = 290.5;
		t.y = 170.5;
		t.skinName = SettingBoxSkin$Skin7;
		return t;
	};
	return SettingBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/StarsSkin.exml'] = window.StarsSkin = (function (_super) {
	__extends(StarsSkin, _super);
	function StarsSkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","gp_star"];
		
		this.elementsContent = [this.gp_bg_i(),this.gp_star_i()];
	}
	var _proto = StarsSkin.prototype;

	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 6;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_di_png";
		return t;
	};
	_proto.gp_star_i = function () {
		var t = new eui.Group();
		this.gp_star = t;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 6;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "icon_quan_0_bar_png";
		return t;
	};
	return StarsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/TabDataButtonSkin.exml'] = window.TabDataButtonSkin = (function (_super) {
	__extends(TabDataButtonSkin, _super);
	function TabDataButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","textColor",0x660a0a)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","btn_tab_0_down_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = TabDataButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "btn_tab_0_up_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0xc34618;
		t.verticalCenter = 0;
		return t;
	};
	return TabDataButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/TabImageButtonSkin.exml'] = window.TabImageButtonSkin = (function (_super) {
	__extends(TabImageButtonSkin, _super);
	function TabImageButtonSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.elementsContent = [this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.down"],[0],this.iconDisplay,"source")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.up"],[0],this.iconDisplay,"source");
	}
	var _proto = TabImageButtonSkin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	return TabImageButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/TabLabelButtonSkin.exml'] = window.TabLabelButtonSkin = (function (_super) {
	__extends(TabLabelButtonSkin, _super);
	function TabLabelButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","textColor",0x660a0a)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","btn_tab_0_down_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.labelDisplay,"text");
	}
	var _proto = TabLabelButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "btn_tab_0_up_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0xc34618;
		t.verticalCenter = 0;
		return t;
	};
	return TabLabelButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginPageSkin.exml'] = window.LoginPageSkin = (function (_super) {
	__extends(LoginPageSkin, _super);
	function LoginPageSkin() {
		_super.call(this);
		this.skinParts = ["gp_scene"];
		
		this.elementsContent = [this._Image1_i(),this._CloudsPanel1_i(),this.gp_scene_i()];
	}
	var _proto = LoginPageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background_png";
		t.top = 0;
		return t;
	};
	_proto._CloudsPanel1_i = function () {
		var t = new two.CloudsPanel();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gp_scene_i = function () {
		var t = new eui.Group();
		this.gp_scene = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	return LoginPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SuccessBoxSkin.exml'] = window.SuccessBoxSkin = (function (_super) {
	__extends(SuccessBoxSkin, _super);
	function SuccessBoxSkin() {
		_super.call(this);
		this.skinParts = ["txt_level","flag","group","btn_menu","btn_restart","btn_next","gp_bottom"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.group_i(),this.gp_bottom_i()];
	}
	var _proto = SuccessBoxSkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.y = 468;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.txt_level_i(),this._BitmapLabel1_i(),this.flag_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,33,16,204);
		t.source = "panel_credits_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "titlebar_arrow_left_png";
		t.x = 137;
		t.y = 78;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "titlebar_arrow_right_png";
		t.x = 460;
		t.y = 78;
		return t;
	};
	_proto.txt_level_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_level = t;
		t.font = "font_button_54_fnt";
		t.horizontalCenter = 0;
		t.text = "LEVEL 1";
		t.y = 33;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_button_54_fnt";
		t.horizontalCenter = 0.5;
		t.text = "COMPLETED";
		t.y = 109;
		return t;
	};
	_proto.flag_i = function () {
		var t = new eui.Image();
		this.flag = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 30;
		t.source = "level_complete_perfect_badge_png";
		t.x = 542.5;
		t.y = 183;
		return t;
	};
	_proto.gp_bottom_i = function () {
		var t = new eui.Group();
		this.gp_bottom = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image4_i(),this._Group1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "panel_bottom_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 115;
		t.y = 17;
		t.elementsContent = [this.btn_menu_i(),this.btn_restart_i(),this.btn_next_i()];
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new eui.Button();
		this.btn_menu = t;
		t.height = 75;
		t.icon = "button_bottom_home_png";
		t.label = "MENU";
		t.skinName = "ButtonScale3Skin";
		t.width = 235;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.height = 80;
		t.icon = "button_restart_ingame_png";
		t.width = 80;
		t.x = 265;
		t.y = 17.5;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.height = 75;
		t.icon = "button_next_win_ingame_png";
		t.label = "NEXT";
		t.skinName = "ButtonScale3Skin";
		t.width = 235;
		t.x = 376;
		t.y = 20;
		return t;
	};
	return SuccessBoxSkin;
})(eui.Skin);
var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);n.prototype=e.prototype,t.prototype=new n},two;!function(t){var e=function(){function e(){this.needSend=!0,this.urlType=0,this.needMsg=!1,this.apis=[];var t=egret.getQualifiedClassName(this);this.apiName=t.substring(4,t.length-5)}return e.prototype.responseBefore=function(){},e.prototype.responseAfter=function(){},e.prototype.register=function(t,e){this.requestProxyKey=t,this.requestCode=e},e.prototype.send=function(e,n,o){var i=this;this.sendData=e,this.call=n,this.needMsg=o!==!1,this.needSend?t.HttpOperator.Instance().onSendCommonRequest(this.apiName,e,this.urlType,this.onResponse.bind(this)):one.callLater(function(){i.onResponse({code:0,data:{}})},1)},e.prototype.getRequest=function(){return this.sendData},e.prototype.getResponse=function(){return this.proxyData},e.prototype.addRefreshApi=function(t){this.apis.indexOf(t)<0&&this.apis.push(t)},e.prototype.onResponse=function(e){if(0==e.code){this.proxyData=e.data,this.apis=[this.apiName],this.responseBefore();for(var n=this.apis,o=0;o<n.length;o++)t.onRefreshApi(n[o]);this.responseAfter()}else this.needMsg;if(this.call){var i=this.call;this.call=null,i(e)}},e.prototype.dealChange=function(t){this.proxyData.changeGoods=[];for(var e=0;e<t.length;e++){var n=t[e],o=(n.sqlId,void 0);o&&this.proxyData.changeGoods.push(o)}},e.prototype.saveLocal=function(e,n){egret.localStorage.setItem(t.Storage.getStorageKey(e),JSON.stringify({code:0,msg:"OK",data:n}))},e}();t.BaseProxy=e,__reflect(e.prototype,"two.BaseProxy")}(two||(two={}));var two;!function(t){var e=function(e){function n(){var t=e.call(this,"City")||this;return t.timeId=-1,t.items=[],t.centers=[],t.citys=[],t.linkCnt=0,t.currentDiffId=1,t.currentLevel=1,t.screenW=0,t.screenH=0,t.mapData=RES.getRes("mp_json"),t}return __extends(n,e),n.prototype.created=function(){e.prototype.created.call(this)},n.prototype.removed=function(){e.prototype.removed.call(this),one.clearTimeout(this.timeId)},n.prototype.changeView=function(){for(var e=this,n=0;n<this.items.length;n++)for(var o=0;o<this.items[n].length;o++){var i=this.items[n][o];i&&i.leave(100*(this.items.length-n-1))}this.timeId=one.setTimeout(function(){e.createCity(e.currentDiffId,e.currentLevel)},100*this.items.length+600),t.VideoAd.show("gamerestart",function(t){0==t.code||2==t.code||3==t.code})},n.prototype.onBlockChange=function(){for(var t=this.checkLinks(),e=[],n=0;n<this.centers.length;n++){var o=t[this.centers[n].l][this.centers[n].r];e.push(o)}for(var i=0;i<this.items.length;i++)for(var s=0;s<this.items[i].length;s++){var r=this.items[i][s];r&&r.light(e.indexOf(t[i][s])>=0)}this.linkCnt=0;for(var a=!0,n=0;n<this.citys.length;n++){var o=t[this.citys[n].l][this.citys[n].r];e.indexOf(o)<0?a=!1:this.linkCnt++}if(a){for(var c=!1,i=0;i<this.items.length;i++)for(var s=0;s<this.items[i].length;s++){var r=this.items[i][s];r&&e.indexOf(t[i][s])<0&&(c=!0,r.drop(),this.items[i][s]=null)}this.linkSuccess(c?500:40)}},n.prototype.linkSuccess=function(t){var e=this;this.touchChildren=!1,this.timeId=one.setTimeout(function(){e.touchChildren=!0,one.monitor.emit("onSuccessLink",{})},t)},n.prototype.setScreenSize=function(t,e){this.screenW=t,this.screenH=e},n.prototype.createCity=function(e,n){this.currentDiffId=e,this.currentLevel=n,this.removeChildren();var o=this.mapData[e-1][n-1],i=(o.c,o.t.split(",")),s=o.r,r=o.l,a=(e-1)%3+1;this.centers=[],this.citys=[];var c=Math.max(60*(s+r)+120,this.screenW),l=Math.max(36*(s+r)+72,this.screenH);this.width=c,this.height=l,one.monitor.emit("onCityCreated",{});for(var h=0;r>h;h++){this.items[h]=[];for(var p=0;s>p;p++){var u=i[h*s+p],d=u.split(":"),f=parseInt(d[0]);if(13!=f){var g=parseInt(d[1]),v=d[2]?parseInt(d[2]):0,y=new t.CityBlock(f,g,v,a);this.addChild(y),y.top=36*p+36*h-36*(s+r)/2+l/2,y.join(60*p-60*h+60*(r-s)/2+c/2-60,100*(r-h-1)),this.items[h][p]=y,2==v?this.centers.push({l:h,r:p}):1==v&&this.citys.push({l:h,r:p})}}}this.onBlockChange()},n.prototype.getLinkCnt=function(){return{count:this.linkCnt,total:this.citys.length}},n.prototype.checkLinks=function(){function t(t,e){for(var o=0;o<n.length;o++)for(var i=0;n[o]&&i<n[o].length;i++)n[o][i]==t&&(n[o][i]=e)}for(var e=1,n=[],o=0;o<this.items.length;o++){n[o]=[];for(var i=0;i<this.items[o].length;i++){var s=this.items[o][i];if(s){var r=!1,a=!1,c=s.getBlock();if(this.items[o][i-1]){var l=this.items[o][i-1].getBlock();1==l[2]&&1==c[0]&&(r=!0)}if(this.items[o-1]&&this.items[o-1][i]){var h=this.items[o-1][i].getBlock();1==h[3]&&1==c[1]&&(a=!0)}r&&a?(t(n[o-1][i],n[o][i-1]),n[o][i]=n[o][i-1]):r?n[o][i]=n[o][i-1]:a?n[o][i]=n[o-1][i]:(n[o][i]=e,e++)}}}return n},n}(t.BaseComponent);t.City=e,__reflect(e.prototype,"two.City",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function o(o){e.call(n,o,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?o(i):one.loaderManager.load([t],100,function(){o(RES.getRes(t))})}else RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_IMAGE)},t}();t.AssetAdapter=e,__reflect(e.prototype,"two.AssetAdapter",["eui.IAssetAdapter"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this,"PreLoadingSkin")||this}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this),one.monitor.on("onLoadingProgress",this.onSetProgress,this)},e.prototype.removed=function(){t.prototype.removed.call(this),one.monitor.off("onLoadingProgress",this.onSetProgress,this),this.bar.value=0},e.prototype.onSetProgress=function(t){this.setProgress(t.current,t.total)},e.prototype.setProgress=function(t,e){var n=Math.floor(100*t/e);this.bar.value=n,this.txt_loading.text="正在加载："+n+"% "},e}(t.BaseComponent);t.LoadingUI=e,__reflect(e.prototype,"two.LoadingUI"),t.setClassMap("loading","two.LoadingUI")}(two||(two={}));var two;!function(t){var e=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.isThemeLoadEnd=!1,t.isResConfigLoaded=!1,t.isResourceLoadEnd=!1,t}return __extends(n,e),n.prototype.createChildren=function(){e.prototype.createChildren.call(this),this.initGameBefore(),egret.Capabilities.isMobile||(this.stage.scaleMode=egret.StageScaleMode.SHOW_ALL,this.stage.orientation=egret.OrientationMode.AUTO),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){},egret.TextField.default_fontFamily="Microsoft YaHei";var n=new t.AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",n),egret.registerImplementation("eui.IThemeAdapter",new t.ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/7981f307_39623.json","resource/");var o=new eui.Theme("resource/36d73032_58.json",this.stage);o.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this)},n.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.gamesingOver()},n.prototype.gamesingOver=function(){var e=this;this.isThemeLoadEnd&&this.isResConfigLoaded&&(one.loaderManager.maxLoadingThread=10,one.loaderManager.loadGroup("loading",100,function(n,o){n==o&&(egret.ImageLoader.crossOrigin="anonymous",t.changePage("loading"),one.loaderManager.loadGroup("loading2",100,function(t,n){if(t==n){var o=["games","sounds"];("1"==one.getOption("debug")||"1"==one.getOption("noNet"))&&o.push("apis"),one.loaderManager.loadGroups(o,100,function(t,n){one.monitor.emit("onLoadingProgress",{current:t,total:n}),t==n&&(e.isResourceLoadEnd=!0,e.createScene())})}}))}))},n.prototype.onConfigComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),this.isResConfigLoaded=!0,RES.setMaxLoadingThread(10),this.gamesingOver()},n.prototype.createScene=function(){this.isResourceLoadEnd&&this.startCreateScene()},n.prototype.initGameBefore=function(){t.Storage.game="citylink",t.Storage.UID="1",t.initScene(this),t.initBox(this)},n.prototype.startCreateScene=function(){one.guideManager.setSetting({ProxyCall:function(t,e){},NotifyCall:function(t){one.monitor.emit("onGuideNotify",{key:t})},UIRoot:this,Arrow:new t.GuideArrow,TalkPanel:new t.GuideTalkPanel,TouchAreaCall:function(t,e,n,o){var i=RES.getRes("cell_b2_png"),s=new egret.Bitmap(i);return s.scale9Grid=new egret.Rectangle(30,30,40,40),s.alpha=o,s.width=e,s.height=n,s.anchorOffsetX=e/2,s.anchorOffsetY=n/2,s}}),one.soundManager.init(t.Storage.game),one.soundManager.playMusic("background"),this.stage.once(egret.TouchEvent.TOUCH_TAP,function(){one.soundManager.playMusic("background")},this),t.GameCtr.init(this.stage),window.sdkInit(function(e){var n="";e.authorize&&e.plat.code&&e.plat.name&&(n=JSON.stringify({name:e.plat.name,avatar:e.plat.avatar,sex:e.plat.sex})),console.log(e),t.User_getUserProxy.Channel_Id=e.channelId,t.User_getUserProxy.Game_Id=RES.getRes("gameCfg_json").rankId,t.Games_loginProxy.getInstance().send({gameId:t.User_getUserProxy.Game_Id,chanId:t.User_getUserProxy.Channel_Id,deviceId:e.openId,code:e.plat.code,user:n},function(n){0==n.code&&(console.log(n),t.Storage.UID=n.data.userId,t.User_getUserProxy.getInstance().send({uId:n.data.userId},function(){var o=t.User_getUserProxy.getInstance().getResponse();if(o.uId=n.data.userId,n.data.json){var i=JSON.parse(n.data.json);for(var s in i)o[s]=i[s]}if(n.data.user){var r=JSON.parse(n.data.user);for(var s in r)o[s]=r[s]}else o.name=e.plat.name,o.avatar=e.plat.avatar,o.sex=e.plat.sex;t.changePage("LoginPage")}))})})},n}(eui.UILayer);t.Main=e,__reflect(e.prototype,"two.Main")}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.prototype.getTheme=function(t,e,n,o){function i(t){e.call(o,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),n.call(o))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(o,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT))},t}();t.ThemeAdapter=e,__reflect(e.prototype,"two.ThemeAdapter",["eui.IThemeAdapter"])}(two||(two={}));var two;!function(t){function e(e,n){var o=new eui.Image(e);return o.y=one.randomInt(Math.floor(t.getStageHeight()/8),Math.floor(t.getStageHeight()+t.getStageWith())),n?o.x=t.getStageWith():o.x=one.randomInt(0,t.getStageWith()),o.alpha=one.randomInt(30,80)/100,o.scaleX=o.scaleY=one.randomInt(50,150)/100,egret.Tween.get(o).to({x:-600,y:o.y-(o.x+600)},40*(o.x+600)).call(function(){t.removeSelf(o)}),o}t.getCloud=e}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.Instance=function(){return this.instance||(this.instance=new e),this.instance},e.prototype.sendHeardbeat=function(){},e.prototype.sendRequest=function(t,e,n){var o="";for(var i in e)o+=i+"="+e[i]+"&";if(0!=o.length){o=o.substring(0,o.length-1);var s=new egret.HttpRequest;s.responseType=egret.HttpResponseType.TEXT,s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.open(t,egret.HttpMethod.POST),s.send(o),s.addEventListener(egret.Event.COMPLETE,function(e){if(!s.response)return void console.log("error "+t);var o=JSON.parse(s.response);n&&n(o)},this),s.addEventListener(egret.IOErrorEvent.IO_ERROR,function(){console.log("get error : "+event)},this),s.addEventListener(egret.ProgressEvent.PROGRESS,function(t){console.log("get progress : "+Math.floor(100*t.bytesLoaded/t.bytesTotal)+"%")},this)}},e.prototype.onSendCommonRequest=function(e,n,o,i){if(console.log(e,n),0==o){var s,r=egret.localStorage.getItem(t.Storage.getStorageKey(e));s=r?JSON.parse(r):RES.getRes("allApis_json")[e+"_json"],one.callLater(function(){i(s)},1)}else if(1==o){var a={};a.data=JSON.stringify(n),e=e.charAt(0).toLowerCase()+e.substr(1);var c=e.replace(/_/g,"/");this.sendRequest(one.getOption("rankUrl")+c,n,i)}else if(2==o){var a={};a.data=JSON.stringify(n),e=e.charAt(0).toLowerCase()+e.substr(1);var c=e.replace(/_/g,"/");this.sendRequest(one.getOption("apiUrl")+c,n,i)}},e.instance=null,e}();t.HttpOperator=e,__reflect(e.prototype,"two.HttpOperator"),t.operator=new e}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["userId","openId","json","user"],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Games_loginProxy=e,__reflect(e.prototype,"two.Games_loginProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Games_updateProxy=e,__reflect(e.prototype,"two.Games_updateProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["rankList","myInfo"],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Rank_getRankProxy=e,__reflect(e.prototype,"two.Rank_getRankProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Rank_setRankProxy=e,__reflect(e.prototype,"two.Rank_setRankProxy")}(two||(two={}));var two;!function(t){var e=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.responseKeys=["uId","name","avatar","sex","maps"],t.needSend=!0,t}return __extends(n,e),n.getInstance=function(){return null==n._instance&&(n._instance=new n),n._instance},n.prototype.responseBefore=function(){var t=this.getResponse();t.maps||(t.maps=[])},n.prototype.setMapData=function(e,n,o,i){var s=this.getResponse().maps,r=this.getMapData(e,n);null==r?(r={mapId:e,childMapId:n,step:o,flag:i},s.push(r)):(r.flag=r.flag||i,r.step=Math.min(r.step,o)),t.GameCtr.saveGame()},n.prototype.getMapData=function(t,e){for(var n=this.getResponse().maps,o=0;o<n.length;o++)if(n[o].mapId==t&&n[o].childMapId==e)return n[o];return null},n.prototype.getMaxMap=function(t){for(var e=this.getResponse().maps,n=0,o=0;o<e.length;o++)e[o].mapId==t&&e[o].childMapId>n&&(n=e[o].childMapId);return n},n.Channel_Id=0,n.Game_Id=0,n}(t.BaseProxy);t.User_getUserProxy=e,__reflect(e.prototype,"two.User_getUserProxy")}(two||(two={}));var two;!function(t){var e=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.responseKeys=[],t.needSend=!1,t}return __extends(n,e),n.getInstance=function(){return null==n._instance&&(n._instance=new n),n._instance},n.prototype.responseBefore=function(){var e=this.getRequest(),n=t.User_getUserProxy.getInstance().getResponse();for(var o in e)n[o]=e[o];this.saveLocal("User_getUser",n)},n}(t.BaseProxy);t.User_setInfoProxy=e,__reflect(e.prototype,"two.User_setInfoProxy")}(two||(two={}));var two;!function(t){var e=function(e){function n(){var t=e.call(this,"BoxBg")||this;return t._title="",t._hide=!1,t}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeTopBox(),n.dispatchEventWith("onClose")},this),this.btn_close.visible=!this._hide,this.txt_title.text=this._title},Object.defineProperty(n.prototype,"title",{get:function(){return this._title},set:function(t){this._title=t,this.txt_title&&(this.txt_title.text=this._title)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hide",{get:function(){return this._hide},set:function(t){this._hide=t,this.btn_close&&(this.btn_close.visible=!this._hide)},enumerable:!0,configurable:!0}),n}(t.BaseComponent);t.BoxBg=e,__reflect(e.prototype,"two.BoxBg")}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.getConfigByID=function(e){return t.LocalMap.getDataByNameAndID("Share",e)},e.getAllCfgs=function(){return t.LocalMap.getJsonList("Share")},e}();t.ShareConfig=e,__reflect(e.prototype,"two.ShareConfig")}(two||(two={}));var two;!function(t){var e=function(e){function n(t,n,o,i){var s=e.call(this,"CityBlock")||this;return s.blockId=t,s.idx=n,s.type=o,s.lvId=i,s}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),this.gp_content.removeChildren();var o=new t.AnchorImage(this.lvId+"_tile_"+this.blockId+"_"+this.idx+"_png");if(o.anchorX=.5,o.anchorY=1,this.gp_content.addChild(o),o.x=60,o.y=98,o.touchEnabled=!1,1==this.type){var i=new t.AnchorImage(this.lvId+"_tile_house_"+this.idx+"_png");i.anchorX=.5,i.anchorY=1,i.y=o.y-26,i.x=o.x,this.gp_content.addChild(i),i.touchEnabled=!1}else if(2==this.type){var i=new t.AnchorImage("tile_factory_"+this.idx+"_png");i.anchorX=.5,i.anchorY=1,i.y=o.y-26,i.x=o.x,this.gp_content.addChild(i),i.touchEnabled=!1}this.touchEnabled=!1,this.gp_content.touchEnabled=!1,t.addTap(this.rect0,function(){n.change()}),t.addTap(this.rect1,function(){n.change()}),t.addTap(this.rect2,function(){n.change()})},n.prototype.change=function(){this.idx++,this.idx=this.idx%4,one.monitor.emit("onBlockChange",{})},n.prototype.light=function(t){this.resetItem(t)},n.prototype.resetItem=function(t){var e=this.gp_content.getChildAt(0);if(t?e.source=this.lvId+"_tile_"+this.blockId+"_"+this.idx+"_l_png":e.source=this.lvId+"_tile_"+this.blockId+"_"+this.idx+"_png",1==this.type){var n=this.gp_content.getChildAt(1);t?n.source=this.lvId+"_tile_house_"+this.idx+"_l_png":n.source=this.lvId+"_tile_house_"+this.idx+"_png"}else if(2==this.type){var n=this.gp_content.getChildAt(1);n.source="tile_factory_"+this.idx+"_png"}},n.prototype.join=function(e,n){this.left=t.getStageWith()+400,egret.Tween.removeTweens(this),egret.Tween.get(this).wait(n).to({left:e},500,egret.Ease.circOut).call(function(){})},n.prototype.leave=function(e){var n=this;egret.Tween.removeTweens(this),egret.Tween.get(this).wait(e).to({left:this.x-t.getStageWith()},500,egret.Ease.circIn).call(function(){t.removeSelf(n)})},n.prototype.drop=function(){var e=this;egret.Tween.removeTweens(this),egret.Tween.get(this).to({top:this.y+600},500,egret.Ease.circIn).call(function(){t.removeSelf(e)})},n.prototype.getBlock=function(){var t=[];t[0]=[1,0,0,0],t[1]=[1,0,1,0],t[2]=[1,1,1,1],t[3]=[1,1,1,0],t[4]=[1,0,0,1],t[13]=[0,0,0,0];for(var e=t[this.blockId],n=0;n<this.idx;n++)e.unshift(e.pop());return e},n}(t.BaseComponent);t.CityBlock=e,__reflect(e.prototype,"two.CityBlock",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function n(){return e.call(this)||this}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),t.addTap(this,function(){t.changeLoginScene("CityLevelPage",void 0,n.data.diffId)})},n.prototype.dataChanged=function(){if(e.prototype.dataChanged.call(this),this.data.diffId){this.txt_tip.text=t.getDiffTip(this.data.diffId);var n=t.User_getUserProxy.getInstance().getMaxMap(this.data.diffId);this.txt_level.text=Math.min(n+1,30)+"/30",this.icon.source=(this.data.diffId-1)%3+1+"_tile_1_0_png"}},n}(t.BaseItemRenderer);t.CityDifficultyItem=e,__reflect(e.prototype,"two.CityDifficultyItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function n(){return e.call(this,"CityDifficultyPage")||this}return __extends(n,e),n.prototype.created=function(){e.prototype.created.call(this),t.addTap(this.btn_back,function(){t.changeLoginScene("MenuPage")});var n=this.list.dataProvider;n.removeAll();for(var o=0;6>o;o++)n.addItem({diffId:o+1});this.begin.play(0)},n}(t.BaseComponent);t.CityDifficultyPage=e,__reflect(e.prototype,"two.CityDifficultyPage",["eui.UIComponent","egret.DisplayObject"]),t.setClassMap("CityDifficultyPage","two.CityDifficultyPage")}(two||(two={}));var two;!function(t){var e=function(e){function n(){return e.call(this)||this}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),t.addTap(this,function(){n.data.level<=n.data.maxChildId+1&&t.changeLoginScene("HomePage",void 0,n.data.diffId,n.data.level)})},n.prototype.dataChanged=function(){if(e.prototype.dataChanged.call(this),this.data.diffId)if(this.txt_level.text=this.data.level+"",this.icon.icon="button_level_unlocked_png",this.flag.visible=!1,this.data.level==this.data.maxChildId+1);else if(this.data.level<=this.data.maxChildId){var n=t.User_getUserProxy.getInstance().getMapData(this.data.diffId,this.data.level);n&&(this.flag.visible=n.flag)}else this.icon.icon="button_level_locked_png",this.txt_level.text=""},n}(t.BaseItemRenderer);t.CityLevelItem=e,__reflect(e.prototype,"two.CityLevelItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function n(t){var n=e.call(this,"CityLevelPage")||this;return n.diffId=t,n}return __extends(n,e),n.prototype.created=function(){e.prototype.created.call(this),t.addTap(this.btn_back,function(){t.changeLoginScene("CityDifficultyPage")});var n=this.list.dataProvider;n.removeAll();for(var o=RES.getRes("mp_json")[this.diffId-1],i=t.User_getUserProxy.getInstance().getMaxMap(this.diffId),s=0;s<o.length;s++)n.addItem({level:s+1,diffId:this.diffId,maxChildId:i});this.begin.play(0)},n}(t.BaseComponent);t.CityLevelPage=e,__reflect(e.prototype,"two.CityLevelPage",["eui.UIComponent","egret.DisplayObject"]),t.setClassMap("CityLevelPage","two.CityLevelPage")}(two||(two={}));var two;!function(t){var e=function(e){function n(){var t=e.call(this)||this;return t.interId=-1,t.percentWidth=t.percentHeight=100,t}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this);for(var o=0;10>o;o++){var i=t.getCloud("cloud_"+one.randomInt(1,3)+"_png",!1);this.addChild(i)}this.interId=one.setInterval(function(){var e=t.getCloud("cloud_"+one.randomInt(1,3)+"_png",!0);n.addChild(e)},5e3)},n.prototype.removed=function(){e.prototype.removed.call(this),one.clearInterval(this.interId)},n}(t.BaseGroup);t.CloudsPanel=e,__reflect(e.prototype,"two.CloudsPanel"),t.setClassMap("LoginPage","two.LoginPage")}(two||(two={}));var two;!function(t){function e(e){var o=new n("关闭","OK",e,"");return o.once("onButton1",function(){},this),o.once("onButton2",function(){o.dispatchEventWith("onOK")},this),t.showBox(o),o}t.showConfirm=e;var n=function(e){function n(t,n,o,i,s,r,a){void 0===s&&(s="ConfirmBox"),void 0===r&&(r=""),void 0===a&&(a="");var c=e.call(this,s)||this;return c.lb1=t,c.lb2=n,c.btnSkin1=r,c.btnSkin2=a,c.msg=o,c.title=i,c}return __extends(n,e),n.prototype.created=function(){var e=this;null==this.lb1?this.btn1.parent.removeChild(this.btn1):(""!=this.lb1&&(this.btn1.label=this.lb1),""!=this.btnSkin1&&(this.btn1.skinName=this.btnSkin1),this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(e),e.dispatchEventWith("onButton1")},this)),null==this.lb2?this.btn2.parent.removeChild(this.btn2):(""!=this.lb2&&(this.btn2.label=this.lb2),""!=this.btnSkin2&&(this.btn2.skinName=this.btnSkin2),this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(e),e.dispatchEventWith("onButton2")},this)),this.txt_msg&&(this.txt_msg.text=this.msg),this.icon_title&&(this.icon_title.source=this.title)},n.prototype.added=function(){},n.prototype.removed=function(){},n}(t.BaseComponent);t.ConfirmBox=n,__reflect(n.prototype,"two.ConfirmBox")}(two||(two={}));var two;!function(t){function e(t,e,n,o){t&&(t.text=one.formatSecond(e,n));var i=one.secondUtils.addSecond(e,function(e){t&&(t.text=one.formatSecond(e,n)),0>=e&&(one.secondUtils.removeSecond(i),o&&o())});return i}var n=function(){function e(){}return e.init=function(n){n.addEventListener(egret.Event.ACTIVATE,function(){one.setTimeout(function(){},100)},e),n.addEventListener(egret.Event.DEACTIVATE,function(){"HomePage"==t.currentPageType},e)},e.saveGame=function(){var e=t.User_getUserProxy.getInstance().getResponse();if(e){var n={maps:e.maps};"1"==one.getOption("noNet")?t.User_setInfoProxy.getInstance().send(n):t.Games_updateProxy.getInstance().send({gameId:t.User_getUserProxy.Game_Id,chanId:t.User_getUserProxy.Channel_Id,userId:t.User_getUserProxy.getInstance().getResponse().uId,json:JSON.stringify(n)})}},e}();t.GameCtr=n,__reflect(n.prototype,"two.GameCtr"),t.addSecondTimer=e}(two||(two={}));var two;!function(t){function e(e,o,i){var s=new n(e);t.showTipView(s),s.x=o,s.y=i,s.touchEnabled=s.touchChildren=!1}t.showScoreAddTip=e;var n=function(t){function e(e){var n=t.call(this,"GoldGainTip")||this;return n.gold=e,n}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.gold>0?this.txt_gold.text="+"+this.gold:this.txt_gold.text=""+this.gold,this.gp.anchorOffsetX=20,this.gp.anchorOffsetY=15,egret.Tween.get(this.gp).to({y:-20},500,egret.Ease.bounceOut).wait(500).call(function(){e.parent&&e.parent.removeChild(e)})},e}(t.BaseComponent);t.GoldGainTip=n,__reflect(n.prototype,"two.GoldGainTip")}(two||(two={}));var two;!function(t){var e=function(e){function n(t,n){var o=e.call(this,"HomePage")||this;return o.diffId=t,o.level=n,o.timeId=-1,o.step=0,o}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),one.soundManager.playMusic("background"),this.gp_left.left=-320,egret.Tween.get(this.gp_left).to({left:0},300),this.gp_bottom.bottom=-120,t.addTap(this.btn_pause,function(){egret.Tween.removeTweens(n.gp_bottom),n.gp_bottom.bottom<0?egret.Tween.get(n.gp_bottom).to({bottom:0},200):egret.Tween.get(n.gp_bottom).to({bottom:-120},200)}),t.addTap(this.btn_home,function(){t.changePage("LoginPage"),t.changeLoginScene("CityLevelPage",void 0,n.diffId)}),t.addTap(this.btn_restart,function(){n.onRestart()}),t.addTap(this.btn_next,function(){n.onNextLevel(),RES.getRes("mp_json")[n.city.currentDiffId-1][n.city.currentLevel]&&t.User_getUserProxy.getInstance().getMapData(n.city.currentDiffId,n.city.currentLevel)||(n.btn_next.visible=!1),n.btn_last.visible=!0}),t.addTap(this.btn_last,function(){n.onLastLevel(),1==n.city.currentLevel&&(n.btn_last.visible=!1),n.btn_next.visible=!0}),this.btn_next.visible=!!t.User_getUserProxy.getInstance().getMapData(this.diffId,this.level),this.flag.visible=!1,this.city.setScreenSize(t.getStageWith(),t.getStageHeight()),this.city.createCity(this.diffId,this.level),one.callLater(function(){n.onCityCreated()},2),one.monitor.on("onCityCreated",this.onCityCreated,this),one.monitor.on("onBlockChange",this.onBlockChange,this),one.monitor.on("onNextLevel",this.onNextLevel,this),one.monitor.on("onRestart",this.onRestart,this),one.monitor.on("onSuccessLink",this.onSuccessLink,this)},n.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("onCityCreated",this.onCityCreated,this),one.monitor.off("onRestart",this.onRestart,this),one.monitor.off("onBlockChange",this.onBlockChange,this),one.monitor.off("onNextLevel",this.onNextLevel,this),one.monitor.off("onSuccessLink",this.onSuccessLink,this)},n.prototype.onSuccessLink=function(){var e=RES.getRes("mp_json")[this.city.currentDiffId-1][this.city.currentLevel-1];t.showBox(new t.SuccessBox(this.city.currentDiffId,this.city.currentLevel,this.step,e.c>=this.step),void 0,!0)},n.prototype.resetInfo=function(){this.level=this.city.currentLevel,this.txt_tip.text=t.getDiffTip(this.diffId)+".",this.txt_level.text=this.level+"/30";var e=this.city.getLinkCnt();this.txt_link.text=e.count+"/"+e.total,this.txt_step.text=this.step+"";var n=RES.getRes("mp_json")[this.city.currentDiffId-1][this.city.currentLevel-1];n.c<=this.step?(this.txt_left.visible=!1,this.flag_left.visible=!1):(this.txt_left.text=n.c-this.step+"",this.txt_left.visible=!0,this.flag_left.visible=!0);var o=t.User_getUserProxy.getInstance().getMapData(this.city.currentDiffId,this.city.currentLevel);this.flag.visible=o?o.flag:!1},n.prototype.onBlockChange=function(){this.city.onBlockChange(),this.step++,this.resetInfo()},n.prototype.onLastLevel=function(){this.city.currentLevel--,RES.getRes("mp_json")[this.city.currentDiffId-1][this.city.currentLevel-1]?(this.step=0,this.city.changeView()):this.levelOver()},n.prototype.onNextLevel=function(){egret.Tween.removeTweens(this.gp_left),egret.Tween.get(this.gp_left).to({left:-320},200),this.city.currentLevel++,RES.getRes("mp_json")[this.city.currentDiffId-1][this.city.currentLevel-1]?(this.step=0,this.city.changeView()):this.levelOver()},n.prototype.levelOver=function(){t.changePage("LoginPage"),t.changeLoginScene("CityDifficultyPage",void 0,this.diffId)},n.prototype.onRestart=function(){egret.Tween.removeTweens(this.gp_left),egret.Tween.get(this.gp_left).to({left:-320},200),this.step=0,this.city.changeView()},n.prototype.onCityCreated=function(){this.scroller.viewport.scrollH=(this.scroller.viewport.contentWidth-this.scroller.width)/2,this.scroller.viewport.scrollV=(this.scroller.viewport.contentHeight-this.scroller.height)/2,this.resetInfo(),egret.Tween.removeTweens(this.gp_left),egret.Tween.get(this.gp_left).to({left:0},200)},n.prototype.refreshApi=function(t){switch(e.prototype.refreshApi.call(this,t),t){case"":}},n.prototype.refreshData=function(t,n){switch(e.prototype.refreshData.call(this,t,n),t){case"":}},n}(t.BaseComponent);t.HomePage=e,__reflect(e.prototype,"two.HomePage"),t.setClassMap("HomePage","two.HomePage")}(two||(two={}));var two;!function(t){function e(t,e){void 0===e&&(e=0);for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];if(n){var s=n.changeScene.apply(n,arguments);return s.refreshData("onShow",{}),s}return null}var n;t.changeLoginScene=e;var o=function(e){function o(){var t=e.call(this,"LoginPage")||this;return t.currScene="",t.childScenes=[],t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this),n=this,this.changeScene("MenuPage")},o.prototype.removed=function(){e.prototype.removed.call(this),n=null},o.prototype.refreshData=function(t,n){switch(e.prototype.refreshData.call(this,t,n),t){case"":}},o.prototype.changeScene=function(e,n){void 0===n&&(n=0);for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];if(this.currScene==e){for(;this.gp_scene.numChildren>1;)this.gp_scene.removeChildAt(this.gp_scene.numChildren-1);return this.gp_scene.getChildAt(0).visible=!0,this.gp_scene.getChildAt(0)}if(this.currScene=e,this.gp_scene.numChildren>0){if(0==n)this.gp_scene.removeChildren();else{var s=t.fixedLayer(this.gp_scene,one.randomInt(1,5),this.gp_scene.width,this.gp_scene.height);t.sceneLayer.removeChildren(),t.sceneLayer.addChild(s)}this.childScenes.length=0}var r=t.getClassObj.apply(null,[e].concat(o));return r&&(r.touchEnabled=!1,r.percentWidth=r.percentHeight=100,this.gp_scene.addChildAt(r,0),this.childScenes.push(e)),r},o}(t.BaseComponent);t.LoginPage=o,__reflect(o.prototype,"two.LoginPage"),t.setClassMap("LoginPage","two.LoginPage")}(two||(two={}));var two;!function(t){function e(){for(var t=RES.getRes("map_json"),e=[],n=0;n<t.length;n++){e.push([]);for(var o=t[n],i=0;i<o.length;i++){var s=o[i],r=s[0],a=s[1],c=r.split(","),l=c[0].split(":"),h=parseInt(l[0]),p=parseInt(l[1]);c.shift();for(var u=[],d=0;d<c.length;d++){var f=c[d].split(":"),g=parseInt(f[0]),v=parseInt(f[1]);if([0,1,2,3,11].indexOf(g)>=0){switch(g){case 11:g=4}u[d]=g+":"+v+":1"}else if([7,8,9,10,12].indexOf(g)>=0){switch(g){case 7:g=0;break;case 8:g=1;break;case 9:g=3;break;case 10:g=4;break;case 12:g=2}u[d]=g+":"+v+":2"}else{switch(g){case 5:g=1;break;case 6:g=3}u[d]=g+":"+v}}e[n][i]={l:p,r:h,t:u.join(","),c:a}}}return console.log(e),e}function n(t){return["VERY EASY","EASY","MEDIUM","HARD","VERY HARD","EXTREME"][t-1]}t.ansMap=e,t.getDiffTip=n}(two||(two={}));var two;!function(t){var e=function(e){function n(){return e.call(this,"MenuPage")||this}return __extends(n,e),n.prototype.created=function(){e.prototype.created.call(this),this.gp_city.removeChildren(),t.addTap(this.btn_start,function(){t.changeLoginScene("CityDifficultyPage")
}),this.createCity()},n.prototype.createCity=function(){var e={l:3,r:3,t:"4:3,1:2,4:0,1:1,0:3:1,1:3,4:2,3:0,4:1",c:4},n=(e.c,e.t.split(",")),o=e.r,i=e.l;one.monitor.emit("onCityCreated",{});for(var s=60,r=36,a=Math.max((o+i)*s+2*s,t.getStageWith()),c=(Math.max((o+i)*r+2*r,t.getStageHeight()),0);i>c;c++)for(var l=0;o>l;l++){var h=n[c*o+l],p=h.split(":"),u=parseInt(p[0]);if(13!=u){var d=parseInt(p[1]),f=p[2]?parseInt(p[2]):0,g=new t.CityBlock(u,d,f,1);this.gp_city.addChild(g),g.top=r*l+c*r,g.join(s*l-c*s+(i-o)*s/2-s+a/2/this.gp_city.scaleX,100*(i-c-1))}}},n.prototype.removed=function(){e.prototype.removed.call(this)},n}(t.BaseComponent);t.MenuPage=e,__reflect(e.prototype,"two.MenuPage"),t.setClassMap("MenuPage","two.MenuPage")}(two||(two={}));var two;!function(t){function e(e){var o=new n(e);return o.percentWidth=o.percentHeight=100,t.showTipView(o),o}t.showTip=e;var n=function(t){function e(e){var n=t.call(this,"MessageTip")||this;return n.message=e,n}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.messageTxt.text=this.message,this.alpha=0,egret.Tween.get(this).to({alpha:1},200).wait(1e3).to({alpha:0},200).call(function(){e.parent.removeChild(e)},this)},e}(t.BaseComponent);t.MessageTip=n,__reflect(n.prototype,"two.MessageTip")}(two||(two={}));var two;!function(t){var e=function(e){function n(){return e.call(this,"SettingBox")||this}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(n)},this),this.btn_music.selected=one.soundManager.isOpened(egret.Sound.MUSIC),this.btn_effect.selected=one.soundManager.isOpened(egret.Sound.EFFECT),this.btn_music.addEventListener(egret.Event.CHANGE,function(){n.btn_music.selected?one.soundManager.open(egret.Sound.MUSIC):one.soundManager.close(egret.Sound.MUSIC)},this),this.btn_effect.addEventListener(egret.Event.CHANGE,function(){n.btn_effect.selected?one.soundManager.open(egret.Sound.EFFECT):one.soundManager.close(egret.Sound.EFFECT)},this)},n}(t.BaseComponent);t.SettingBox=e,__reflect(e.prototype,"two.SettingBox")}(two||(two={}));var two;!function(t){var e=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return __extends(n,e),n.prototype.onTap=function(n){e.prototype.onTap.call(this,n),t.showBox(new t.SettingBox)},n}(t.BaseButton);t.SettingButton=e,__reflect(e.prototype,"two.SettingButton")}(two||(two={}));var two;!function(t){function e(e,n){var o=1;1==o?t.VideoAd.show("333",function(e){0==e.code?n(!0):2==e.code||3==e.code?(t.showTip("视频播放有问题！"),n(!1)):(t.showTip("视频未播放完，不可以领取奖励哦！"),n(!1))}):2==o&&t.shareToFriend(e,function(t){one.callLater(function(){one.callLater(function(){n(t)},1)},10)})}function n(t,e){var n="",o="";window.share({title:n,imageUrl:o},function(t){console.log(JSON.stringify(t)),e(t.isComplete?!0:!1)})}t.getFreeGift=e,t.shareToFriend=n}(two||(two={}));var two;!function(t){var e=function(e){function n(t,n,o,i){var s=e.call(this,"SuccessBox")||this;return s.diffId=t,s.level=n,s.step=o,s.hasFlag=i,s}return __extends(n,e),n.prototype.created=function(){var n=this;e.prototype.created.call(this),t.addTap(this.btn_restart,function(){t.closeBox(n,!0),one.monitor.emit("onRestart",{})}),t.addTap(this.btn_menu,function(){n.close(function(){t.closeBox(n,!0),t.changePage("LoginPage"),t.changeLoginScene("CityDifficultyPage",void 0,n.diffId)})}),t.addTap(this.btn_next,function(){n.close(function(){t.closeBox(n,!0),one.monitor.emit("onNextLevel",{})})});var o=t.User_getUserProxy.getInstance().getMapData(this.diffId,this.level),i=!o||!o.flag;this.txt_level.text="LEVEL "+this.level,this.flag.visible=!1,egret.Tween.get(this.flag).wait(500).call(function(){n.flag.visible=n.hasFlag&&i}).set({scaleX:2,scaleY:2}).to({scaleX:1,scaleY:1},300,egret.Ease.bounceOut),this.group.y=t.getStageHeight(),egret.Tween.get(this.group).to({y:t.getStageHeight()/2-100},300),this.gp_bottom.bottom=-120,egret.Tween.get(this.gp_bottom).to({bottom:0},300),t.User_getUserProxy.getInstance().setMapData(this.diffId,this.level,this.step,this.hasFlag)},n.prototype.close=function(e){egret.Tween.get(this.group).to({y:t.getStageHeight()},300),egret.Tween.get(this.gp_bottom).to({bottom:-120},300).call(e)},n}(t.BaseComponent);t.SuccessBox=e,__reflect(e.prototype,"two.SuccessBox",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"ComboBox")||this;return e.isChoose=!1,e._allowMultipleSelection=!1,e._dataProvider=null,e._selectedIndices=[],e}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.currentTarget==t.target&&(e.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,e.onCancel,e),e.contentList=null)},this),this.isChoose=!1,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){e.isChoose=!0},this),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onCancel,this),this.select.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!0,e.btn_down.visible=!1,e.btn_up.visible=!0},this),this.btn_down.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!e.scroller.visible,e.btn_down.visible=!1,e.btn_up.visible=!0},this),this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!e.scroller.visible,e.btn_down.visible=!0,e.btn_up.visible=!1},this),this.list.addEventListener(egret.Event.CHANGE,function(t){e.select.data=e.selectedItems,e._allowMultipleSelection||(e.scroller.visible=!1,e.btn_down.visible=!0,e.btn_up.visible=!1),e.onSort(),e.dispatchEvent(t)},this),this.list.allowMultipleSelection=this._allowMultipleSelection,this.scroller.visible=!1,this.btn_up.visible=!1,this.btn_down.visible=!0,this.setCombo()},Object.defineProperty(e.prototype,"selectedSkin",{set:function(t){this.select.skinName=t},enumerable:!0,configurable:!0}),e.prototype.onCancel=function(){return this.isChoose?void(this.isChoose=!1):(this.isChoose=!1,this.scroller.visible=!1,this.btn_down.visible=!0,void(this.btn_up.visible=!1))},Object.defineProperty(e.prototype,"allowMultipleSelection",{get:function(){return this._allowMultipleSelection},set:function(t){this._allowMultipleSelection=t,this.list&&(this.list.allowMultipleSelection=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataProvider",{get:function(){return this._dataProvider},set:function(t){this._dataProvider=t,this.list.selectedIndices=[],this.setCombo()},enumerable:!0,configurable:!0}),e.prototype.bind=function(t){this.contentList=t,this.onSort()},e.prototype.unbind=function(){this.contentList=null},e.prototype.onSort=function(){if(null!=this.contentList&&this._allowMultipleSelection){var t=this.contentList.dataProvider,e=t.source,n=this.selectedItems;e.sort(function(t,e){for(var o=n.length-1;o>=0;o--){if(t[n[o].key]>e[n[o].key])return n[o].ascending?1:-1;if(t[n[o].key]<e[n[o].key])return n[o].ascending?-1:1}return 0}),t.refresh()}},e.prototype.setCombo=function(){this._dataProvider&&(this.select&&(this.select.data=this.selectedItems),this.list&&(this.list.dataProvider=this._dataProvider))},Object.defineProperty(e.prototype,"selectedIndices",{get:function(){return this.list?this.list.selectedIndices:this._selectedIndices},set:function(t){this._selectedIndices=t,this._dataProvider&&(this.list.selectedIndices=t,this.select&&(this.select.data=this.selectedItems),this.onSort())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedItems",{get:function(){return this.list?this.list.selectedItems:[]},enumerable:!0,configurable:!0}),e}(t.BaseComponent);t.ComboBox=e,__reflect(e.prototype,"two.ComboBox")}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.dataChanged=function(){t.prototype.dataChanged.call(this),this.data.label&&(this.labelDisplay.text=this.data.label)},e}(eui.ItemRenderer);t.ComboChooseItem=e,__reflect(e.prototype,"two.ComboChooseItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.dataChanged=function(){if(t.prototype.dataChanged.call(this),this.data){for(var e="",n=this.data.length-1;n>=0;n--)e+=this.data[n].label,n>0&&(e+=",");this.labelDisplay.text=e}},e}(eui.ItemRenderer);t.ComboSelectedItem=e,__reflect(e.prototype,"two.ComboSelectedItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e._fileName="",e._arName="",e._frame="",e}return __extends(e,t),Object.defineProperty(e.prototype,"fileName",{set:function(t){this._fileName=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"arName",{set:function(t){this._arName=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{set:function(t){this._frame=t},enumerable:!0,configurable:!0}),e.prototype.created=function(){t.prototype.created.call(this),this.zRole=new one.DynamicDB(this.fileName,this.arName),this.addChild(this.zRole),this.zRole.play(this._frame,-1)},e}(t.BaseGroup);t.EUIDB=e,__reflect(e.prototype,"two.EUIDB")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isFirst=!0,e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.commitProperties=function(){if(t.prototype.commitProperties.call(this),"down"==this.currentState){if(this.iconDisplay){egret.Tween.removeTweens(this.iconDisplay),this.iconDisplay.scaleX=this.iconDisplay.scaleY=.8;var e=egret.Tween.get(this.iconDisplay);e.to({scaleX:1,scaleY:1},500,egret.Ease.bounceOut)}}else if(this.iconDisplay){if(this.isFirst)return void(this.isFirst=!1);egret.Tween.removeTweens(this.iconDisplay),this.iconDisplay.scaleX=this.iconDisplay.scaleY=1.2;var e=egret.Tween.get(this.iconDisplay);e.to({scaleX:1,scaleY:1},500,egret.Ease.bounceOut)}},e}(t.BaseButton);t.ScaleButton=e,__reflect(e.prototype,"two.ScaleButton")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"GuideArrow")||this;return e.touchEnabled=e.touchChildren=!1,e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(t.BaseComponent);t.GuideArrow=e,__reflect(e.prototype,"two.GuideArrow")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"GuideTalkPanel")||this;return e.percentWidth=e.percentHeight=100,e}return __extends(e,t),e.prototype.init=function(t,e,n){this.call=e,this.context=n,this.txt_msg.text=t.message_s,this.touchEnabled=this.touchChildren="talk"==t.type_s},e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.call.call(e.context)},this)},e}(t.BaseComponent);t.GuideTalkPanel=e,__reflect(e.prototype,"two.GuideTalkPanel",["eui.UIComponent","egret.DisplayObject","one.guide.IGuidTalk"])}(two||(two={}));
