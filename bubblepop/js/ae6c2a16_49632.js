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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","two.MatchPage":"resource/eui_skins/MatchPageSkin.exml","two.LoginPage":"resource/eui_skins/LoginPageSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonScaleSkin.exml'] = window.ButtonScaleSkin = (function (_super) {
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
		this.skinParts = ["txt_score","btn_restart"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameOverSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.txt_score_i(),this.btn_restart_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "box_bg_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.txt_score_i = function () {
		var t = new eui.Label();
		this.txt_score = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 1;
		t.strokeColor = 0x1f4c0f;
		t.text = "a'fa'fa";
		t.textColor = 0x215a60;
		t.y = 164.5;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.icon = "restart_png";
		t.skinName = "ButtonScaleSkin";
		t.width = 200;
		t.x = 184.5;
		t.y = 340;
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
		t.source = "bg_match_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.height = 69;
		t.icon = "btn_jxyx_png";
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
	var MatchPageSkin$Skin1 = 	(function (_super) {
		__extends(MatchPageSkin$Skin1, _super);
		function MatchPageSkin$Skin1() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MatchPageSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_pause_png";
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
		return MatchPageSkin$Skin1;
	})(eui.Skin);

	var MatchPageSkin$Skin2 = 	(function (_super) {
		__extends(MatchPageSkin$Skin2, _super);
		function MatchPageSkin$Skin2() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MatchPageSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_voice_png";
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
		return MatchPageSkin$Skin2;
	})(eui.Skin);

	function MatchPageSkin() {
		_super.call(this);
		this.skinParts = ["gp_next","icon_fire","gp_fire","gp_bobbles","txt_score","btn_pause","btn_voice"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.gp_next_i(),this._Image2_i(),this._Group1_i(),this.gp_bobbles_i(),this._Group2_i()];
	}
	var _proto = MatchPageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_match_jpg";
		t.top = 0;
		return t;
	};
	_proto.gp_next_i = function () {
		var t = new eui.Group();
		this.gp_next = t;
		t.bottom = 107;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 270;
		t.source = "line_png";
		t.x = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 112;
		t.height = 66;
		t.horizontalCenter = 0.5;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 141;
		t.elementsContent = [this._Image3_i(),this.gp_fire_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "pao_3_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.gp_fire_i = function () {
		var t = new eui.Group();
		this.gp_fire = t;
		t.x = 71;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.icon_fire_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 100;
		t.source = "icon_battery_png";
		return t;
	};
	_proto.icon_fire_i = function () {
		var t = new eui.Image();
		this.icon_fire = t;
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 31.5;
		t.source = "bobble_2_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "pao_1_png";
		t.x = 25;
		t.y = 25;
		return t;
	};
	_proto.gp_bobbles_i = function () {
		var t = new two.BobbleTiles();
		this.gp_bobbles = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 600;
		t.x = 21;
		t.y = 88;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "bobble_3_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bobble_1_png";
		t.x = 54;
		t.y = 2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "bobble_3_png";
		t.x = 128;
		t.y = 16;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bobble_2_png";
		t.x = 204;
		t.y = 19;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bobble_4_png";
		t.x = 280;
		t.y = 27;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "bobble_3_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "bobble_1_png";
		t.x = 64;
		t.y = 15;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "bobble_3_png";
		t.x = 138;
		t.y = 26;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "bobble_2_png";
		t.x = 214;
		t.y = 29;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "bobble_4_png";
		t.x = 290;
		t.y = 37;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image16_i(),this.txt_score_i(),this.btn_pause_i(),this.btn_voice_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "ui_top_png";
		return t;
	};
	_proto.txt_score_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_score = t;
		t.font = "font3_fnt";
		t.horizontalCenter = 0;
		t.text = "2329";
		t.y = 63;
		return t;
	};
	_proto.btn_pause_i = function () {
		var t = new eui.Button();
		this.btn_pause = t;
		t.label = "";
		t.visible = false;
		t.x = 27;
		t.y = 4;
		t.skinName = MatchPageSkin$Skin1;
		return t;
	};
	_proto.btn_voice_i = function () {
		var t = new eui.Button();
		this.btn_voice = t;
		t.label = "";
		t.visible = false;
		t.x = 551.5;
		t.y = 4;
		t.skinName = MatchPageSkin$Skin2;
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
		
		this.height = 31;
		this.elementsContent = [this.gp_i()];
	}
	var _proto = ScoreGainTipSkin.prototype;

	_proto.gp_i = function () {
		var t = new eui.Group();
		this.gp = t;
		t.anchorOffsetX = 0;
		t.height = 31;
		t.width = 84.6;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.txt_gold_i(),this._Label1_i()];
		return t;
	};
	_proto.txt_gold_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_gold = t;
		t.font = "font3_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "333";
		t.x = 19;
		t.y = 1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "+";
		t.textColor = 0xf6efd2;
		t.verticalAlign = "middle";
		t.x = 0;
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
var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i},two;!function(t){var e=function(){function t(){}return t.ITEM_SIZE=60,t.MAX_ROW=9,t.SCREEN_WIDTH=t.ITEM_SIZE*(t.MAX_ROW-.5),t.BALL_COUNT=9,t.CURRENT_COUNT=5,t}();t.MapUtils=e,__reflect(e.prototype,"two.MapUtils")}(two||(two={}));var one;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.initX=0,e.initY=0,e.minW=0,e.maxW=0,e.minH=0,e.maxH=0,e.dic=1,e.kind=0,e.total=10,e.items=[],e}return __extends(e,t),e.prototype.init=function(t,e,i,o,n,s,r){this.initX=t,this.initY=e,this.minW=i,this.maxW=o,this.minH=n,this.maxH=s,this.dic=r},e.prototype.update=function(t,e){this.kind!=e&&(this.removeChildren(),this.items.length=0),this.kind=e,this.showLine(t)},e.prototype.showLine=function(t){var e=4*Math.cos(t/180*Math.PI),i=(4*Math.sin(t/180*Math.PI),Math.tan(t/180*Math.PI)),o=[];this.arr=o,this.tro=t,this.addLine(o,this.initX,this.initY);for(var n=this.initX,s=this.initY;;)if(0>e){var r=n-this.minW,a=Math.abs(i*r);if(this.dic>0){if(a+s>this.maxH){a=this.maxH-s,r=Math.abs(a/i),this.addLine(o,n-r,a+s);break}this.addLine(o,n-r,a+s),s=a+s}else{if(s-a<this.minH){a=s-this.minH,r=Math.abs(a/i),this.addLine(o,n-r,s-a);break}this.addLine(o,n-r,s-a),s-=a}e*=-1,n=this.minW}else{if(!(e>0)){this.dic>0?this.addLine(o,n,this.maxH):this.addLine(o,n,this.minH);break}var r=this.maxW-n,a=Math.abs(i*r);if(this.dic>0){if(a+s>this.maxH){a=this.maxH-s,r=Math.abs(a/i),this.addLine(o,n+r,s+a);break}this.addLine(o,n+r,s+a),s=a+s}else{if(s-a<this.minH){a=s-this.minH,r=Math.abs(a/i),this.addLine(o,n+r,s-a);break}this.addLine(o,n+r,s-a),s-=a}e*=-1,n=this.maxW}this.recycle();for(var h=32,l=0;l<o.length-1;l++)for(var u=o[l].x,d=o[l].y,c=d,p=o[l+1].x,f=o[l+1].y,b=Math.sqrt(Math.pow(p-u,2)+Math.pow(f-d,2)),m=(p-u)/b,g=(f-d)/b;;){var v=this.getCube();v.x=u,v.y=d,this.addChild(v),this.numChildren>=this.total;var w=u+m*h,y=d+g*h;if(0>(y-d)/(f-y)){w=p,y=f;break}if(u+=m*h*2,d+=g*h*2,(d-f)/(f-c)>=0)break}},e.prototype.addLine=function(t,e,i){t.push({x:e,y:i})},e.prototype.getCube=function(){if(this.items.length>0)return this.items.pop();var t=(this.kind,new egret.Bitmap);return t.texture=RES.getRes("bobble_s_11_png"),t.anchorOffsetX=t.width/2,t.anchorOffsetY=t.height/2,t},e.prototype.recycle=function(){for(;this.numChildren>0;)this.items.push(this.removeChildAt(0))},e}(egret.Sprite);t.LineShape=e,__reflect(e.prototype,"one.LineShape")}(one||(one={}));var two;!function(t){var e=function(e){function i(i){var o=e.call(this)||this;return o._isFire=!1,o.midX=4,o.initX=4,o.initY=4,o.speed=1,o.w=t.MapUtils.SCREEN_WIDTH,o.kind=0,o.tranvRO=0,o.dur=0,o.lastDealCnt=0,o.isFire=i,o}return __extends(i,e),Object.defineProperty(i.prototype,"isFire",{get:function(){return this._isFire},set:function(t){this._isFire=t},enumerable:!0,configurable:!0}),i.prototype.getKind=function(){return this.kind},i.prototype.init=function(e,i,o,n,s,r){this.addChild(t.getCube(e)),this.tranvRO=270+i,this.speed=o,this.initX=s,this.midX=n,this.initY=r,this.kind=e,this.touchEnabled=!0,this.touchChildren=!1,this.dur=128},i.prototype.update=function(e){for(var i=32,o=this.dur+e*this.speed,n=Math.floor(o/i),s=this.lastDealCnt+1;n>=s;s++){var r=this.getPos(this.tranvRO,s*i);if(this.x=r.x,this.y=r.y,r.y<=t.BobbleTiles.Diameter/2){this.dispatchEventWith("isCollide");break}if(t.isCollide(r.x,r.y)){this.dispatchEventWith("isCollide");break}}this.lastDealCnt=n,this.dur=o},i.prototype.getPos=function(e,i){i/=16;var o=Math.tan(e/180*Math.PI),n=this.initX,s=this.initY,r=t.BobbleTiles.Diameter/2,a=s,h=a-r,l=this.midX-this.w/2,u=this.midX+this.w/2,d=2*Math.abs(Math.sin(e/180*Math.PI)*i);d=Math.min(d,h);for(var c=Math.abs(d/o),p=o>0?1:-1;;)if(p>0){if(!(l>n-c)){n-=c;break}c-=n-l,n=l,p*=-1}else{if(!(n+c>u)){n+=c;break}c-=u-n,n=u,p*=-1}return{x:n,y:s-d}},i}(egret.DisplayObjectContainer);t.FireItem=e,__reflect(e.prototype,"two.FireItem")}(two||(two={}));var two;!function(t){var e=function(e){function i(){return e.call(this,"GameOver")||this}return __extends(i,e),i.prototype.created=function(){var o=this;e.prototype.created.call(this),setBannerVisible(0,!0),setBannerVisible(1,!0),i.Play_Count++,window.refreshRound&&window.refreshRound(i.Play_Count),this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){1==i.Win_Count?(t.closeBox(o),t.platAdapter.onRestart()):window.createRewardedVideoAd?t.createRewardedVideoAd("adunit-efcd8ea72d11d855",function(e){0==e.code?(i.Win_Count=0,t.closeBox(o),t.platAdapter.onRestart()):t.showTip("观看完视频后可再来一局!","")}):(i.Win_Count=0,t.closeBox(o),t.platAdapter.onRestart())},this);var n=new t.BannerAd("adunit-efcd8ea72d11d855");n.width=350,n.height=100,n.bottom=0,n.horizontalCenter=0,this.addChild(n)},i.prototype.setResult=function(t){this.score=t,this.txt_score.text=this.score+"",i.Win_Count++,one.soundManager.playSound("fail",0,1)},i.Win_Count=0,i.Play_Count=0,i}(t.BaseComponent);t.GameOver=e,__reflect(e.prototype,"two.GameOver")}(two||(two={}));var two;!function(t){function e(){var e={};t.Trans.getInstance().trans("onInit",e)}function i(e,i){({result:e,localTime:Date.now()});t.Trans.getInstance().stopGame(e,i)}t.init=e,t.setWin=i}(two||(two={}));var two;!function(t){function e(t){var e=new egret.Bitmap;return e.texture=RES.getRes("bobble_"+t+"_png"),e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e}t.getCube=e;var i=function(i){function o(){var t=i.call(this)||this;return t.kind=0,t._row=0,t._column=0,t}return __extends(o,i),o.prototype.init=function(t,i,o){this.row=t,this.column=i,this.kind=o,this.ball=e(o),this.addChild(this.ball),this.touchEnabled=!0,this.touchChildren=!1},o.prototype.hit=function(t){egret.Tween.removeTweens(this.ball),egret.Tween.get(this.ball).to({scaleX:1.1,scaleY:.9},100).to({scaleX:1,scaleY:1,y:-10},100).to({y:0},100)},o.prototype.disappear=function(e){var i=this;egret.Tween.get(this).wait(50*e+80).call(function(){var o=new one.DynamicDB("bomb","ArmatureName");i.addChild(o),i.removeChildAt(0),o.addEventListener(one.DynamicDB.LOOP_COMPLETE,function(){i.dispatchEventWith("onRemovedItem",!0),i.parent.removeChild(i)},i),o.play("bomb",1);var n=i.localToGlobal(0,0);t.showMoneyAddTip(20+10*e,n.x,n.y)},this)},Object.defineProperty(o.prototype,"row",{get:function(){return this._row},set:function(t){this._row=t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"column",{get:function(){return this._column},set:function(t){this._column=t},enumerable:!0,configurable:!0}),o}(egret.DisplayObjectContainer);t.Item=i,__reflect(i.prototype,"two.Item")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.maxRow=20,t.bobbles=[],t.otherID=-1,t}return __extends(i,e),i.prototype.removed=function(){e.prototype.removed.call(this),this.removeEvent(),one.clearTimeout(this.otherID)},i.prototype.created=function(){e.prototype.created.call(this),this.removeChildren(),this.utils=new t.LineUtils,this.utils.init(23,10),this.tilesGp=new egret.DisplayObjectContainer,this.addChild(this.tilesGp),this.fireGp=new egret.DisplayObjectContainer,this.addChild(this.fireGp),this.addEvent(),this.addOtherBalls()},i.prototype.addLineBobbles=function(e){for(var o=this.utils.addLineBobbles(e),n=i.Diameter*Math.sin(60/180*Math.PI),s=0;s<this.bobbles.length;s++)for(var r=0;r<this.bobbles[s].length;r++)this.bobbles[s][r].y+=n,this.bobbles[s][r].row++;for(var a=[],h=0;h<e.length;h++){var l=new t.Item;l.init(0,e[h].x,e[h].kind),o?l.x=e[h].x*i.Diameter+i.Diameter/2:l.x=e[h].x*i.Diameter+i.Diameter,l.y=i.Diameter/2,this.tilesGp.addChild(l),a.push(l)}this.bobbles.unshift(a)},i.prototype.addFire=function(e,o,n,s,r,a){var h=this,l=new t.FireItem(a);l.init(e,o,n,300,s,r),this.fireGp.addChild(l),l.x=s,l.y=r,l.addEventListener("isCollide",function(){var t=h.isCollide(l.x,l.y);l.isFire?t?(h.addFireBobbles(t.row,t.column,l.getKind()),h.removeBobbles(t.row,t.column)):l.y<=i.Diameter/2&&(t=h.addTop(l.x),h.addFireBobbles(t.row,t.column,l.getKind()),h.removeBobbles(t.row,t.column)):t?(h.addFireBobbles(t.row,t.column,l.getKind()),h.onHits(t.row,t.column)):l.y<=i.Diameter/2&&(t=h.addTop(l.x),h.addFireBobbles(t.row,t.column,l.getKind()),h.onHits(t.row,t.column)),l.parent.removeChild(l),h.onSizeHandler(null),h.utils.currentRow>=h.maxRow&&(one.clearTimeout(h.otherID),h.dispatchEventWith("onGameOver"))},l)},i.prototype.addOtherBalls=function(){var e=this;this.otherID=one.setTimeout(function(){for(var o=[e.stage.stageHeight-320+60,e.stage.stageHeight-320+120,e.stage.stageHeight-320+180,e.stage.stageHeight-320+240,e.stage.stageHeight-320+300],n=[10,70,140,630,550],s=i.Diameter*Math.sin(60/180*Math.PI),r=s*(e.maxRow+1),a=0;5>a;a++){var h=o[a],l=0,u=one.randomDic(),d=0;-1==u?(l=-40,d=one.randomInt(10,45)):(l=700,d=one.randomInt(-45,-10)),e.tilesGp.height>r-400&&(l=n[a],h=e.stage.stageHeight+100);var c=e.globalToLocal(l,h);e.addFire(one.randomInt(1,t.MapUtils.CURRENT_COUNT),d,10,c.x,c.y,!1)}e.addOtherBalls()},2e4)},i.prototype.addEvent=function(){this.tilesGp.addEventListener("onRemovedItem",this.onSizeHandler,this)},i.prototype.removeEvent=function(){this.tilesGp.removeEventListener("onRemovedItem",this.onSizeHandler,this)},i.prototype.onSizeHandler=function(t){var e=this;t&&t.stopImmediatePropagation(),one.callLater(function(){var t=i.Diameter*Math.sin(60/180*Math.PI),o=t*(e.maxRow+1);egret.Tween.removeTweens(e);var n=0;e.tilesGp.height+7*t>=o?n=e.stage.stageHeight-230-o:(n=e.stage.stageHeight-230-(e.tilesGp.height+7*t),n=Math.min(88,n)),egret.Tween.get(e).to({y:n},200)},1)},i.prototype.update=function(t){for(var e=[],i=0;i<this.fireGp.numChildren;i++)e.push(this.fireGp.getChildAt(i));for(var i=0;i<e.length;i++)e[i].update(t)},i.prototype.addFireBobbles=function(e,o,n){this.utils.addFireBobbles(e,o,n),null==this.bobbles[e]&&(this.bobbles[e]=[]);var s=new t.Item;s.init(e,o,n);var r=this.utils.getIsDouble();r&&e%2==0||!r&&e%2==1?s.x=o*i.Diameter+i.Diameter/2:s.x=o*i.Diameter+i.Diameter;var a=i.Diameter*Math.sin(60/180*Math.PI);s.y=i.Diameter/2+e*a,this.tilesGp.addChild(s),this.bobbles[e][o]=s},i.prototype.removeBobbles=function(t,e){this.onHits(t,e);var i=this.utils.remove(t,e);if(i.length>0){one.soundManager.playSound("clear",0,1);for(var o=0;o<i.length;o++)this.clearItem(i[o].row,i[o].column,o);this.dispatchEventWith("onConnected",!1,{count:i.length}),console.log(i)}else this.dispatchEventWith("onHited")},i.prototype.onHits=function(t,e){for(var i=this.utils.getNearBobbles(t,e,1),o=0;o<i.length;o++){var n=this.bobbles[i[o].row][i[o].column];n&&n.hit(i[o].layer)}one.soundManager.playSound("hit",0,1)},i.prototype.clearItem=function(t,e,i){var o=this.bobbles[t][e];o?o.disappear(i):console.log("error"),this.bobbles[t][e]=null},i.prototype.isCollide=function(t,e){for(var o=i.Diameter*Math.sin(60/180*Math.PI),n=Math.floor((e-i.Diameter/2)/o),s=Math.max(n-1,0);n+3>s;s++){var r=0;r=this.utils.getIsDouble()&&n%2==0||!this.utils.getIsDouble()&&n%2==1?Math.floor(t/i.Diameter):Math.floor((t-i.Diameter/2)/i.Diameter);for(var a=Math.max(r-1,0);r+3>a;a++)if(null!=this.bobbles[s]&&null!=this.bobbles[s][a]){var h=this.bobbles[s][a],l=-1,u=-1;if(Math.pow(h.x-t,2)+Math.pow(h.y-e,2)<=Math.pow(.9*i.Diameter,2)&&(Math.abs(h.y-e)<i.Diameter/5?(l=h.row,u=h.x>t?Math.max(h.column-1,0):Math.min(h.column+1,this.utils.getMaxColumn()-1)):e>h.y?(l=h.row+1,u=this.utils.getIsDouble()&&h.row%2==0||!this.utils.getIsDouble()&&h.row%2==1?h.x<t?h.column:Math.max(0,h.column-1):h.x<t?Math.min(h.column+1,this.utils.getMaxColumn()-1):h.column):(l=h.row-1,0>=l?l=-1:u=this.utils.getIsDouble()&&h.row%2==0||!this.utils.getIsDouble()&&h.row%2==1?h.x<t?h.column:Math.max(0,h.column-1):h.x<t?Math.min(h.column+1,this.utils.getMaxColumn()-1):h.column)),-1!=l&&-1!=u&&(null==this.bobbles[l]||null==this.bobbles[l][u]))return{row:l,column:u}}}return null},i.prototype.addTop=function(t){var e=0,o=0;return o=this.utils.getIsDouble()&&e%2==0||!this.utils.getIsDouble()&&e%2==1?Math.floor(t/i.Diameter):Math.floor((t-i.Diameter/2)/i.Diameter),{row:0,column:o}},i.Diameter=t.MapUtils.ITEM_SIZE,i}(t.BaseGroup);t.BobbleTiles=e,__reflect(e.prototype,"two.BobbleTiles")}(two||(two={}));var two;!function(t){var e=function(){function t(){this.row=15,this.column=30,this.isDouble=!1,this._currentRow=0}return t.prototype.getMaxRow=function(){return this.row},t.prototype.getMaxColumn=function(){return this.column},t.prototype.init=function(t,e){this.row=t,this.column=e,this.tiles=[]},t.prototype.reset=function(){this.tiles=[]},t.prototype.isEmpty=function(t,e){return 0>t||0>e?!1:t>=this.row||e>=this.column?!1:0!=this.tiles[t][e]?!1:!0},t.prototype.getIsDouble=function(){return this.isDouble},t.prototype.addLineBobbles=function(t){for(var e=[],i=0;i<t.length;i++)e[t[i].x]=t[i].kind;return this.tiles.unshift(e),this.isDouble=!this.isDouble,this.isDouble},Object.defineProperty(t.prototype,"currentRow",{get:function(){return this._currentRow},enumerable:!0,configurable:!0}),t.prototype.addFireBobbles=function(t,e,i){null==this.tiles[t]&&(this.tiles[t]=[]),this.tiles[t][e]=i,this._currentRow=t},t.prototype.getIdx=function(t,e){return this.column*t+e},t.prototype.getNearBobbles=function(t,e,i){if(null==this.tiles[t]||null==this.tiles[t][e]||0==this.tiles[t][e])return[];var o=[],n=one.clone(this.tiles),s=function(t,e,i){return n[t]&&n[t][e]>0?(r.push({row:t,column:e,layer:i}),n[t][e]=0,!0):!1},r=[];for(r.push({row:t,column:e,layer:0});r.length>0;){var a=r.shift();if(o.push(a),!(a.layer>=i)){var h=a.row,l=a.column,u=a.layer+1;this.isDouble&&h%2==0||!this.isDouble&&h%2==1?(s(h,l-1,u),s(h,l+1,u),s(h-1,l,u),s(h-1,l-1,u),s(h+1,l,u),s(h+1,l-1,u)):(s(h,l-1,u),s(h,l+1,u),s(h-1,l+1,u),s(h-1,l,u),s(h+1,l+1,u),s(h+1,l,u))}}return o},t.prototype.remove=function(t,e){if(null==this.tiles[t]||null==this.tiles[t][e]||0==this.tiles[t][e])return[];var i=this.tiles[t][e],o=[],n=one.clone(this.tiles),s=function(t){o.push(t),n[t.row][t.column]=0},r=[];for(r.push({row:t,column:e}),s(r[0]);r.length>0;)for(var a=r.shift(),h=this.findSames(a.row,a.column,i,n),l=0;l<h.length;l++){var u=h[l];r.push(u),s(u)}return o.length>=3?(o=o.concat(this.checkInSky(n)),this.tiles=n,o):[]},t.prototype.checkInSky=function(t){for(var e=[],i=function(t){e.push(t),o[t.row][t.column]=0},o=one.clone(t),n=0;n<t[0].length;n++)null!=t[0][n]&&0!=t[0][n]&&i({row:0,column:n});for(;e.length>0;)for(var s=e.shift(),r=this.findBobbles(s.row,s.column,o),a=0;a<r.length;a++){var h=r[a];i(h)}for(var l=[],u=0;u<o.length;u++)for(var n=0;o[u]&&n<o[u].length;n++)o[u][n]&&(l.push({row:u,column:n}),t[u][n]=0);return l},t.prototype.findBobbles=function(t,e,i){var o=[];return this.isDouble&&t%2==0||!this.isDouble&&t%2==1?(this.addBobble(t,e-1,o,i),this.addBobble(t,e+1,o,i),this.addBobble(t-1,e,o,i),this.addBobble(t-1,e-1,o,i),this.addBobble(t+1,e,o,i),this.addBobble(t+1,e-1,o,i)):(this.addBobble(t,e-1,o,i),this.addBobble(t,e+1,o,i),this.addBobble(t-1,e+1,o,i),this.addBobble(t-1,e,o,i),this.addBobble(t+1,e+1,o,i),this.addBobble(t+1,e,o,i)),o},t.prototype.addBobble=function(t,e,i,o){o[t]&&o[t][e]&&i.push({row:t,column:e})},t.prototype.findSames=function(t,e,i,o){var n=[];return this.isDouble&&t%2==0||!this.isDouble&&t%2==1?(this.addSame(t,e-1,i,n,o),this.addSame(t,e+1,i,n,o),this.addSame(t-1,e,i,n,o),this.addSame(t-1,e-1,i,n,o),this.addSame(t+1,e,i,n,o),this.addSame(t+1,e-1,i,n,o)):(this.addSame(t,e-1,i,n,o),this.addSame(t,e+1,i,n,o),this.addSame(t-1,e+1,i,n,o),this.addSame(t-1,e,i,n,o),this.addSame(t+1,e+1,i,n,o),this.addSame(t+1,e,i,n,o)),n},t.prototype.addSame=function(t,e,i,o,n){this.isSame(t,e,i,n)&&o.push({row:t,column:e})},t.prototype.isSame=function(t,e,i,o){return o[t]&&o[t][e]==i?!0:!1},t}();t.LineUtils=e,__reflect(e.prototype,"two.LineUtils")}(two||(two={}));var two;!function(t){var e=function(e){function i(){return e.call(this,"LoginPage")||this}return __extends(i,e),i.prototype.created=function(){e.prototype.created.call(this),this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.changePage("match")},this)},i}(t.BaseComponent);t.LoginPage=e,__reflect(e.prototype,"two.LoginPage")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.setProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);t.LoadingUI=e,__reflect(e.prototype,"two.LoadingUI")}(two||(two={}));var two;!function(t){function e(t,e){return null!=o.gp_bobbles.isCollide(t,e)}var i=function(e){function i(){var t=e.call(this)||this;return t.score=0,t.lastT=0,t.fireID=1,t.nextID=1,t.skinName="MatchPageSkin",t}return __extends(i,e),i.prototype.removeMonitors=function(){e.prototype.removeMonitors.call(this),egret.stopTick(this.onTicker,this),one.monitor.off("onAddScore",this.onAddScore,this)},i.prototype.onAddScore=function(t){this.score+=t.score,this.txt_score.text=this.score+""},i.prototype.created=function(){var i=this;e.prototype.created.call(this),setBannerVisible(0,!1),setBannerVisible(1,!0),this.registerOp(1,t.BaseOp),this.registerOp(2,t.BaseOp),this.registerOp(3,t.BaseOp),one.soundManager.playMusic("bg"),one.monitor.on("onAddScore",this.onAddScore,this),this.shape=new one.LineShape,this.shape.touchEnabled=this.touchChildren=!1,this.gp_fire.parent.addChild(this.shape),this.shape.init(this.gp_fire.x,this.gp_fire.y,this.gp_fire.x-t.MapUtils.SCREEN_WIDTH/2,this.gp_fire.x+t.MapUtils.SCREEN_WIDTH/2,-500,this.gp_fire.y,-1),o=this;for(var n=0;4>n;n++){var s=[];s.push({x:0,kind:one.randomInt(1,5)}),s.push({x:1,kind:one.randomInt(1,5)}),s.push({x:2,kind:one.randomInt(1,5)}),s.push({x:3,kind:one.randomInt(1,5)}),s.push({x:4,kind:one.randomInt(1,5)}),s.push({x:5,kind:one.randomInt(1,5)}),s.push({x:6,kind:one.randomInt(1,5)}),s.push({x:7,kind:one.randomInt(1,5)}),s.push({x:8,kind:one.randomInt(1,5)}),this.gp_bobbles.addLineBobbles(s)}this.gp_bobbles.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_END,function(t){if(-1!=i.fireID){r=!0;var e=i.gp_fire.localToGlobal(0,0);e=i.gp_bobbles.globalToLocal(e.x,e.y),i.setFireRO(t.stageX,t.stageY,function(){i.gp_bobbles.addFire(i.fireID,i.gp_fire.rotation,10,e.x,e.y,!0),i.clearFire()})}},this);var r=!1;this.gp_bobbles.addEventListener("onConnected",function(t){r=!1,i.setNext(!1),i.setCount()},this),this.gp_bobbles.addEventListener("onHited",function(t){r=!1,i.setNext(!1)},this);var a=!1;this.gp_bobbles.addEventListener("onGameOver",function(e){a||t.setWin(1),a=!0},this),this.txt_score.text=this.score+"",this.addEventListener(egret.TouchEvent.TOUCH_MOVE,function(t){i.setFireRO(t.stageX,t.stageY,function(){})},this),this.gp_next.touchEnabled=!0,this.gp_next.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){r||t.stopPropagation()},this),this.xiong=new one.DynamicDB("xiong","ArmatureName"),this.xiong.once(one.DynamicDB.LOAD_COMPLETE,function(){i.waitBall=new eui.Image,i.xiong.changeSlotByDisplay("ball",i.waitBall),i.waitBall.anchorOffsetX=31.5,i.waitBall.anchorOffsetY=31.5,i.lastT=Date.now(),egret.startTick(i.onTicker,i),i.nextID=one.randomInt(1,t.MapUtils.CURRENT_COUNT),i.waitBall.source=RES.getRes("bobble_"+i.nextID+"_png"),i.setNext(!0)},this),this.gp_next.addChild(this.xiong),this.xiong.play("idle",0)},i.prototype.setCount=function(){for(var e=[1e3,2e3,4e3,7e3,1e4,15e3],i=5;e.length>0&&this.score>=e[0];)i++,e.shift();i=Math.min(i,t.MapUtils.BALL_COUNT),t.MapUtils.CURRENT_COUNT=i},i.prototype.setFireRO=function(t,e,i){var o=this,n=this.gp_fire.parent.globalToLocal(t,e),s=Math.asin((n.x-this.gp_fire.x)/Math.sqrt(Math.pow(n.x-this.gp_fire.x,2)+Math.pow(n.y-this.gp_fire.y,2))),r=Math.round(s/Math.PI*180);r=Math.min(80,r),r=Math.max(-80,r);var a=10*Math.abs(r-this.gp_fire.rotation)/2;a=Math.min(a,200),egret.Tween.removeTweens(this.gp_fire),egret.Tween.get(this.gp_fire,{onChange:function(){o.shape.update(o.gp_fire.rotation+270,o.fireID)}}).to({rotation:r},a).call(i)},i.prototype.onTicker=function(){var t=Date.now();return this.gp_bobbles.update(t-this.lastT),this.lastT=t,!1},i.prototype.clearFire=function(){this.icon_fire.source=RES.getRes(""),this.fireID=-1},i.prototype.showOverBox=function(i){var o=this;e.prototype.showOverBox.call(this,i),egret.stopTick(this.onTicker,this),setLoadingVisible(!0,!0,function(){var e=new t.GameOver;t.showBox(e),e.setResult(o.score)})},i.prototype.setNext=function(e){var i=this;this.fireID=this.nextID,this.touchChildren=this.touchEnabled=!0,this.nextID=one.randomInt(1,t.MapUtils.CURRENT_COUNT),console.log(this.fireID,this.nextID),this.shape.update(this.gp_fire.rotation+270,this.fireID),this.shape.visible=!0,e?(this.icon_fire.source=RES.getRes("bobble_"+this.fireID+"_png"),this.waitBall.source=RES.getRes("bobble_"+this.nextID+"_png")):(this.xiong.play("drop",1),this.icon_fire.source=RES.getRes("bobble_"+this.fireID+"_png"),this.waitBall.source=RES.getRes("bobble_"+this.nextID+"_png"),egret.Tween.removeTweens(this.icon_fire),egret.Tween.get(this.icon_fire).set({y:-50}).to({y:0},200),this.xiong.once(one.DynamicDB.LOOP_COMPLETE,function(){i.xiong.play("idle",0)},this))},i}(t.BaseGame);t.MatchPage=i,__reflect(i.prototype,"two.MatchPage"),t.setClassMap("match","two.MatchPage");var o;t.isCollide=e}(two||(two={}));var two;!function(t){function e(e,o,n){var s=new i(e);t.showTipView(s),s.x=o-s.width/2,s.y=n-20,s.touchEnabled=s.touchChildren=!1}t.showMoneyAddTip=e;var i=function(t){function e(e){var i=t.call(this,"ScoreGainTip")||this;return i.gold=0,i.gold=e,i}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.txt_gold.text=one.formatCount2(this.gold,1),egret.Tween.get(this.gp).to({y:-10},200).wait(500).call(function(){e.parent&&(e.parent.removeChild(e),one.monitor.emit("onAddScore",{score:e.gold}))})},e}(t.BaseComponent);t.ScoreGainTip=i,__reflect(i.prototype,"two.ScoreGainTip")}(two||(two={}));
