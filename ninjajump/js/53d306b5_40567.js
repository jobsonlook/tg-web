window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/BallSkin.exml'] = window.BallSkin = (function (_super) {
	__extends(BallSkin, _super);
	function BallSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = BallSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ball_0_png";
		return t;
	};
	return BallSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonScaleSkin.exml'] = window.ButtonScaleSkin = (function (_super) {
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
					new eui.SetProperty("iconDisplay","alpha",0.5)
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
		t.source = "btn_cl_png";
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
	return ButtonScaleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
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
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CenterBallTipSkin.exml'] = window.CenterBallTipSkin = (function (_super) {
	__extends(CenterBallTipSkin, _super);
	function CenterBallTipSkin() {
		_super.call(this);
		this.skinParts = ["icon","txt_gold","gp"];
		
		this.elementsContent = [this.gp_i()];
	}
	var _proto = CenterBallTipSkin.prototype;

	_proto.gp_i = function () {
		var t = new eui.Group();
		this.gp = t;
		t.x = 0;
		t.elementsContent = [this.icon_i(),this.txt_gold_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "good_png";
		t.x = 0;
		t.y = -4.5;
		return t;
	};
	_proto.txt_gold_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_gold = t;
		t.font = "font4_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "23";
		t.x = 291.6;
		t.y = 6;
		return t;
	};
	return CenterBallTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
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
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameOverSkin.exml'] = window.GameOverSkin = (function (_super) {
	__extends(GameOverSkin, _super);
	function GameOverSkin() {
		_super.call(this);
		this.skinParts = ["btn_restart","lb_score_over","lb_score_best","gp_paper","img_z","gp_over","ani_over"];
		
		this.ani_over_i();
		this.elementsContent = [this.gp_over_i()];
		
		eui.Binding.$bindProperties(this, ["gp_over"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [600],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["gp_paper"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["img_z"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [105.5],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [422],[],this._Object5,"y");
	}
	var _proto = GameOverSkin.prototype;

	_proto.ani_over_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ani_over = t;
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
		t.duration = 500;
		t.ease = "backOut";
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
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto.gp_over_i = function () {
		var t = new eui.Group();
		this.gp_over = t;
		t.height = 580;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.gp_paper_i(),this._Image2_i(),this.img_z_i()];
		return t;
	};
	_proto.gp_paper_i = function () {
		var t = new eui.Group();
		this.gp_paper = t;
		t.horizontalCenter = 0;
		t.scaleY = 0;
		t.y = 105.5;
		t.elementsContent = [this._Image1_i(),this.btn_restart_i(),this.lb_score_over_i(),this.lb_score_best_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cw_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Image();
		this.btn_restart = t;
		t.source = "an_2_png";
		t.x = 139;
		t.y = 258;
		return t;
	};
	_proto.lb_score_over_i = function () {
		var t = new eui.Label();
		this.lb_score_over = t;
		t.anchorOffsetX = 0;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.width = 324;
		t.x = 70.5;
		t.y = 105;
		return t;
	};
	_proto.lb_score_best_i = function () {
		var t = new eui.Label();
		this.lb_score_best = t;
		t.anchorOffsetX = 0;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.width = 238;
		t.x = 160;
		t.y = 189.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cw_1_png";
		t.y = 81.5;
		return t;
	};
	_proto.img_z_i = function () {
		var t = new eui.Image();
		this.img_z = t;
		t.horizontalCenter = 0;
		t.source = "cw_1_png";
		t.y = 105.5;
		return t;
	};
	return GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginPageSkin.exml'] = window.LoginPageSkin = (function (_super) {
	__extends(LoginPageSkin, _super);
	function LoginPageSkin() {
		_super.call(this);
		this.skinParts = ["btn_start"];
		
		this.elementsContent = [this._Image1_i(),this.btn_start_i()];
	}
	var _proto = LoginPageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bj_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.height = 69;
		t.icon = "ball_9_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 212;
		t.x = 214;
		t.y = 602;
		return t;
	};
	return LoginPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MatchPageSkin.exml'] = window.MatchPageSkin = (function (_super) {
	__extends(MatchPageSkin, _super);
	function MatchPageSkin() {
		_super.call(this);
		this.skinParts = ["ani_over","img_wuding","gp_wall","_hero","gp_actors","lb_score"];
		
		this.height = 1136;
		this.width = 640;
		this.ani_over_i();
		this.elementsContent = [this._Image1_i(),this.img_wuding_i(),this.gp_wall_i(),this.gp_actors_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.gp_over"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [600],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.gp_paper"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.img_z1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [105.5],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [422],[],this._Object5,"y");
	}
	var _proto = MatchPageSkin.prototype;

	_proto.ani_over_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ani_over = t;
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
		t.duration = 500;
		t.ease = "backOut";
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
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "di_png";
		t.top = 0;
		return t;
	};
	_proto.img_wuding_i = function () {
		var t = new eui.Image();
		this.img_wuding = t;
		t.bottom = 0;
		t.source = "di_1_png";
		t.x = 10;
		return t;
	};
	_proto.gp_wall_i = function () {
		var t = new eui.Group();
		this.gp_wall = t;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "q_1_png";
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.source = "q_2_png";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.source = "q_2_png";
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "q_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_actors_i = function () {
		var t = new eui.Group();
		this.gp_actors = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._hero_i()];
		return t;
	};
	_proto._hero_i = function () {
		var t = new two.Hero();
		this._hero = t;
		t.x = 533;
		t.y = 330;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 43;
		t.source = "role_1_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 100;
		t.x = 0;
		t.elementsContent = [this._Image7_i(),this.lb_score_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "l_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_score_i = function () {
		var t = new eui.Label();
		this.lb_score = t;
		t.anchorOffsetX = 0;
		t.size = 50;
		t.text = "0";
		t.textAlign = "center";
		t.width = 168;
		t.x = 32;
		t.y = 18;
		return t;
	};
	return MatchPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "pro_1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
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
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScoreGainTipSkin.exml'] = window.ScoreGainTipSkin = (function (_super) {
	__extends(ScoreGainTipSkin, _super);
	function ScoreGainTipSkin() {
		_super.call(this);
		this.skinParts = ["txt_gold","gp"];
		
		this.elementsContent = [this.gp_i()];
	}
	var _proto = ScoreGainTipSkin.prototype;

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
		t.size = 50;
		t.stroke = 1;
		t.text = "23";
		t.textColor = 0xffffff;
		t.y = 0;
		return t;
	};
	return ScoreGainTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
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
})(eui.Skin);
var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i},two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.actorType=0,e.left_x=107,e.right_x=533,e.CollisionDistance=0,e}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this),this.removeChildren()},e.prototype.onUpdate=function(t){},e}(t.BaseGroup);t.Actor=e,__reflect(e.prototype,"two.Actor")}(two||(two={}));var two;!function(t){function e(){var e={};t.Trans.getInstance().trans("onInit",e)}function i(e,i){({result:e,localTime:Date.now()});t.Trans.getInstance().stopGame(e,i)}t.init=e,t.setWin=i}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.actorType=4,t.dic=0,t}return __extends(i,e),i.prototype.created=function(){e.prototype.created.call(this);var t={run:[1,2,3,4]},i=this.role=new one.DynamicFrames(t,"bird");i.play("run",-1),i.frameRate=12,i.verticalCenter=50,i.horizontalCenter=50,this.addChild(i),this.dic=one.randomDic(),-1==this.dic?this.x=680:this.x=-40,this.role.scaleX=this.dic,this.y=-84,this.CollisionDistance=90},i.prototype.onUpdate=function(i){e.prototype.onUpdate.call(this,i),this.x+=200*i*this.dic,this.y+=350*i,this.y>=t.getMapHeight()&&this.parent.removeChild(this)},i}(t.Actor);t.Bird=e,__reflect(e.prototype,"two.Bird")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.actorType=2,t}return __extends(i,e),i.prototype.created=function(){e.prototype.created.call(this);var t={run:[1,2,3,4]},i=this.role=new one.DynamicFrames(t,"enemy");i.play("run",-1),i.frameRate=12,i.verticalCenter=50,i.horizontalCenter=50,this.addChild(i),Math.random()<.5?(this.x=this.left_x,i.scaleX=-1):this.x=this.right_x,this.y=-84,this.CollisionDistance=48},i.prototype.onUpdate=function(i){e.prototype.onUpdate.call(this,i),this.y+=800*i,this.y>=t.getMapHeight()&&this.parent.removeChild(this)},i}(t.Actor);t.Enemy=e,__reflect(e.prototype,"two.Enemy")}(two||(two={}));var two;!function(t){var e=function(e){function i(){return e.call(this,"GameOver")||this}return __extends(i,e),i.prototype.created=function(){var o=this;e.prototype.created.call(this),setBannerVisible(0,!0),setBannerVisible(1,!0),this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){1==i.Win_Count?(t.closeBox(o),t.platAdapter.onRestart()):window.createRewardedVideoAd?t.createRewardedVideoAd("adunit-efcd8ea72d11d855",function(e){0==e.code?(i.Win_Count=0,t.closeBox(o),t.platAdapter.onRestart()):t.showTip("观看完视频后可再来一局!","")}):(i.Win_Count=0,t.closeBox(o),t.platAdapter.onRestart())},this);var r=new t.BannerAd("adunit-efcd8ea72d11d855");r.width=350,r.height=100,r.bottom=0,r.horizontalCenter=0,this.addChild(r),this.ani_over.play(0)},i.prototype.setResult=function(t){this._score=t,this.lb_score_over.text=this._score+"";var e=this.BestScore;t>e&&(this.BestScore=t,e=t),this.lb_score_best.text=e+"",i.Win_Count++,one.soundManager.playSound("fail",0,1)},Object.defineProperty(i.prototype,"BestScore",{get:function(){var t=egret.localStorage.getItem("JUMPNINJA_BESTSCORE");return""!=t&&null!=t?parseInt(t):0},set:function(t){egret.localStorage.setItem("JUMPNINJA_BESTSCORE",t.toString()),this.lb_score_best.text=t.toString()},enumerable:!0,configurable:!0}),i.Win_Count=0,i}(t.BaseComponent);t.GameOver=e,__reflect(e.prototype,"two.GameOver")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.setProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);t.LoadingUI=e,__reflect(e.prototype,"two.LoadingUI")}(two||(two={}));var two;!function(t){function e(){return t.getStageHeight()/1}t.getMapHeight=e}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.actorType=1,t.isJumping=!1,t.CollisionDistance=24,t}return __extends(i,e),i.prototype.created=function(){e.prototype.created.call(this);var t={run:[1,2,3,4],jump:[11,12,13,14],die:[21,22]},i=this.role=new one.DynamicFrames(t,"role");i.play("run",-1),i.frameRate=12,i.verticalCenter=50,i.horizontalCenter=50,this.addChild(i)},i.prototype.JumpAttack=function(){if(!this.isJumping){this.isJumping=!0;var t=this.left_x;this.x<160&&(t=this.right_x),this.role.play("jump",-1),egret.Tween.get(this).to({x:t},500).call(this.jumpOver,this)}},i.prototype.jumpOver=function(){egret.Tween.removeTweens(this),this.isJumping=!1,this.x<160?this.role.scaleX=-1:this.role.scaleX=1,this.role.play("run",-1)},i.prototype.die=function(){var e=this.right_x;this.x<160&&(e=this.left_x),egret.Tween.get(this).to({y:t.getMapHeight()+80},500).set({x:e}),this.role.play("die",-1)},i}(t.Actor);t.Hero=e,__reflect(e.prototype,"two.Hero")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t._ogrin_y=0,t._level_time=0,t.create_enmey_time=0,t._score=0,t.isPaused=!0,t._last_timestamp=0,t.skinName="MatchPageSkin",t}return __extends(i,e),i.prototype.removeMonitors=function(){e.prototype.removeMonitors.call(this),egret.stopTick(this.onUpdate,this)},i.prototype.created=function(){e.prototype.created.call(this),setBannerVisible(0,!1),setBannerVisible(1,!0),this.registerOp(1,t.BaseOp),this.registerOp(2,t.BaseOp),this.registerOp(3,t.BaseOp),one.soundManager.playMusic("bg"),this._ogrin_y=0,this._last_timestamp=0,this._level_time=3,this.create_enmey_time=0,this.isPaused=!0,this._score=0,this._ogrin_y=.6*t.getMapHeight(),this._hero.y=t.getMapHeight()+40,this.gp_wall.getChildAt(0).y=-0,this.gp_wall.getChildAt(1).y=-0,this.gp_wall.getChildAt(2).y=-t.getMapHeight(),this.gp_wall.getChildAt(3).y=-t.getMapHeight(),this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_jump,this)},i.prototype.onStartGame=function(){this.onclick_begin()},i.prototype.onclick_begin=function(){this.isPaused=!1,egret.Tween.get(this._hero).to({y:this._ogrin_y},500).call(function(){}),this._last_timestamp=Date.now(),egret.startTick(this.onUpdate,this)},i.prototype.onUpdate=function(e){var i=Date.now(),o=(i-this._last_timestamp)/1e3;if(this._last_timestamp=i,this.isPaused)return!1;this.create_enmey(o),this.gp_wall.y+=400*o,this.gp_wall.y>=t.getMapHeight()&&(this.gp_wall.y-=t.getMapHeight());for(var r=this.gp_actors.numChildren-1;r>=0;r--){var n=this.gp_actors.getChildAt(r);if(n.onUpdate(o),n!=this._hero){var s=egret.Point.distance(new egret.Point(n.x,n.y),new egret.Point(this._hero.x,this._hero.y)),a=s<n.CollisionDistance+this._hero.CollisionDistance;if(a)if(3!=n.actorType&&this._hero.isJumping){n.parent.removeChild(n);var h=this.lb_score.localToGlobal(this.lb_score.width/2,0);t.showScoreAddTip(this.getScore(20),h.x,h.y),this.Score+=20}else this.heroDead()}}return this.Score+=o,this._level_time-=o/20,this._level_time<=1&&(this._level_time=1),!1},i.prototype.create_enmey=function(e){if(this.create_enmey_time+=e,this.create_enmey_time>=this._level_time){this.create_enmey_time=0;var i,o=one.randomInt(1,100);i=40>o?new t.Wuding:80>o?new t.Enemy:new t.Bird,this.gp_actors.addChild(i)}},i.prototype.onclick_jump=function(){this.isPaused||this._hero.JumpAttack()},i.prototype.heroDead=function(){this.isPaused=!0,this._hero.jumpOver(),this._hero.die(),t.setWin(1)},i.prototype.resetGame=function(){for(var e=this.gp_actors.numChildren-1;e>=0;e--){var i=this.gp_actors.getChildAt(e);i!=this._hero&&this.gp_actors.removeChildAt(e)}this._hero.y=t.getMapHeight()+40,this.Score=0,this._level_time=3},Object.defineProperty(i.prototype,"Score",{get:function(){return this._score},set:function(t){this._score=t,this.lb_score.text=this.getScore(t).toString()},enumerable:!0,configurable:!0}),i.prototype.getScore=function(t){return Math.floor(10*t)},i.prototype.showOverBox=function(i){var o=this;e.prototype.showOverBox.call(this,i),setLoadingVisible(!0,!0,function(){var e=new t.GameOver;t.showBox(e,void 0,!0),e.setResult(o.getScore(o._score))})},i}(t.BaseGame);t.MatchPage=e,__reflect(e.prototype,"two.MatchPage"),t.setClassMap("match","two.MatchPage")}(two||(two={}));var two;!function(t){function e(e,o,r){var n=new i(e);t.showTipView(n),n.x=o,n.y=r-80,n.touchEnabled=n.touchChildren=!1}t.showScoreAddTip=e;var i=function(t){function e(e){var i=t.call(this,"ScoreGainTip")||this;return i.gold=e,i}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.gold>0?this.txt_gold.text="+"+this.gold:this.txt_gold.text=""+this.gold,one.callLater(function(){e.gp.anchorOffsetX=e.gp.width/2,e.gp.anchorOffsetY=e.gp.height/2,egret.Tween.get(e.gp).to({scaleX:2,scaleY:2},500,egret.Ease.bounceOut).to({scaleX:1,scaleY:1,y:0},500,egret.Ease.bounceOut).wait(200).call(function(){e.parent&&e.parent.removeChild(e)})},2)},e}(t.BaseComponent);t.ScoreGainTip=i,__reflect(i.prototype,"two.ScoreGainTip")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.actorType=3,t}return __extends(i,e),i.prototype.created=function(){e.prototype.created.call(this);var t={left:[2],right:[1]},i=this.role=new one.DynamicFrames(t,"za");i.play("left",1),i.frameRate=12,i.verticalCenter=50,i.horizontalCenter=50,this.addChild(i),this.CollisionDistance=60;var o=one.randomInt(1,100);50>o?(this.x=96,this.role.play("left",1)):(this.x=544,this.role.play("right",1)),this.y=-200},i.prototype.onUpdate=function(i){e.prototype.onUpdate.call(this,i),this.y+=400*i,this.y>=t.getMapHeight()&&this.parent.removeChild(this)},i}(t.Actor);t.Wuding=e,__reflect(e.prototype,"two.Wuding")}(two||(two={}));
