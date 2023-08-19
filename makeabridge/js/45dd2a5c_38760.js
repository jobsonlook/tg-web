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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","two.MatchPage":"resource/eui_skins/MatchPageSkin.exml","two.GameOver":"resource/eui_skins/GameOverSkin.exml"};generateEUI.paths['resource/eui_skins/BannerSkin.exml'] = window.BannerSkin = (function (_super) {
	__extends(BannerSkin, _super);
	function BannerSkin() {
		_super.call(this);
		this.skinParts = ["bg_head1","icon_sex_1","head_1","txt_name_1","bg_head2","icon_sex_2","head_2","txt_name_2","txt_score1","txt_score2"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BannerSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 8;
		t.y = 0;
		t.elementsContent = [this.bg_head1_i(),this._Image1_i(),this.icon_sex_1_i(),this.head_1_i(),this.txt_name_1_i(),this._Label1_i(),this.bg_head2_i(),this._Image2_i(),this.icon_sex_2_i(),this.head_2_i(),this.txt_name_2_i(),this._Label2_i(),this.txt_score1_i(),this.txt_score2_i()];
		return t;
	};
	_proto.bg_head1_i = function () {
		var t = new eui.Image();
		this.bg_head1 = t;
		t.source = "bg_head_di_png";
		t.x = 44.68;
		t.y = 2;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.source = "bian_png";
		t.width = 86;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.icon_sex_1_i = function () {
		var t = new eui.Image();
		this.icon_sex_1 = t;
		t.source = "sex_1_png";
		t.visible = false;
		t.x = 226.33;
		t.y = 5;
		return t;
	};
	_proto.head_1_i = function () {
		var t = new two.HeadImage();
		this.head_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.isCircle = true;
		t.width = 78;
		t.x = 4;
		t.y = 5;
		return t;
	};
	_proto.txt_name_1_i = function () {
		var t = new eui.Label();
		this.txt_name_1 = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x464233;
		t.visible = false;
		t.width = 134;
		t.x = 90.33;
		t.y = 14.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "me";
		t.textAlign = "center";
		t.textColor = 0x464233;
		t.width = 134;
		t.x = 90.5;
		t.y = 14.5;
		return t;
	};
	_proto.bg_head2_i = function () {
		var t = new eui.Image();
		this.bg_head2 = t;
		t.source = "bg_head_di_png";
		t.x = 366.68;
		t.y = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.source = "bian_png";
		t.width = 86;
		t.x = 536.67;
		t.y = 1;
		return t;
	};
	_proto.icon_sex_2_i = function () {
		var t = new eui.Image();
		this.icon_sex_2 = t;
		t.source = "sex_1_png";
		t.visible = false;
		t.x = 377.56;
		t.y = 5;
		return t;
	};
	_proto.head_2_i = function () {
		var t = new two.HeadImage();
		this.head_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.isCircle = true;
		t.width = 78;
		t.x = 541;
		t.y = 5;
		return t;
	};
	_proto.txt_name_2_i = function () {
		var t = new eui.Label();
		this.txt_name_2 = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x343c46;
		t.visible = false;
		t.width = 126.5;
		t.x = 409.06;
		t.y = 14.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "Opponent";
		t.textAlign = "center";
		t.textColor = 0x464233;
		t.width = 134;
		t.x = 405.31;
		t.y = 14.5;
		return t;
	};
	_proto.txt_score1_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_score1 = t;
		t.font = "font_fnt";
		t.horizontalCenter = -154;
		t.text = "23";
		t.y = 46.44;
		return t;
	};
	_proto.txt_score2_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_score2 = t;
		t.font = "font_fnt";
		t.horizontalCenter = 161;
		t.text = "23";
		t.y = 46.44;
		return t;
	};
	return BannerSkin;
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
					new eui.SetProperty("_Group1","scaleX",1.1),
					new eui.SetProperty("_Group1","scaleY",1.05)
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
		t.source = "btn_regret_png";
		t.x = 0;
		t.y = 0;
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
		this.skinParts = ["btn_restart"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("win",
				[
					new eui.SetProperty("_Image1","source","result_win_png")
				])
			,
			new eui.State ("fail",
				[
				])
			,
			new eui.State ("draw",
				[
					new eui.SetProperty("_Image1","source","result_draw_png")
				])
		];
	}
	var _proto = GameOverSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.btn_restart_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "result_fail_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.icon = "restart_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 200;
		t.x = 152;
		t.y = 381;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/MatchPageSkin.exml'] = window.MatchPageSkin = (function (_super) {
	__extends(MatchPageSkin, _super);
	function MatchPageSkin() {
		_super.call(this);
		this.skinParts = ["banner"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.banner_i()];
	}
	var _proto = MatchPageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.banner_i = function () {
		var t = new two.Banner();
		this.banner = t;
		t.skinName = "BannerSkin";
		return t;
	};
	return MatchPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MessageTipSkin.exml'] = window.MessageTipSkin = (function (_super) {
	__extends(MessageTipSkin, _super);
	function MessageTipSkin() {
		_super.call(this);
		this.skinParts = ["txt_message"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("kind0",
				[
				])
			,
			new eui.State ("kind1",
				[
					new eui.SetProperty("_Image1","source","bg_tip1_png")
				])
		];
	}
	var _proto = MessageTipSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -2.5;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.txt_message_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "bg_tip0_png";
		t.x = 5.5;
		t.y = 0;
		return t;
	};
	_proto.txt_message_i = function () {
		var t = new eui.Label();
		this.txt_message = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 298;
		t.x = 0;
		t.y = 16;
		return t;
	};
	return MessageTipSkin;
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
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
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
var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i},two;!function(t){var e=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.canGrow=!1,t.buildCnt=0,t}return __extends(i,e),i.prototype.initBridge=function(t,e){this.bridge=t,this.shores=e,this.canGrow=!0},i.prototype.build=function(e,i){this.canGrow=!1,t.onGrow(this.uid,e,i)},i.prototype.buildOver=function(t){t&&this.buildCnt++},i.prototype.createdShore=function(t){this.buildCnt==t-1&&(this.canGrow=!0)},i}(t.BaseOp);t.BaseBridgeOp=e,__reflect(e.prototype,"two.BaseBridgeOp")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this,"GameOver")||this;return t.percentWidth=t.percentHeight=100,t}return __extends(i,e),i.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this),this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){1==i.Win_Count?(t.closeBox(o),t.platAdapter.onRestart()):window.createRewardedVideoAd?t.createRewardedVideoAd("adunit-efcd8ea72d11d855",function(e){0==e.code?(i.Win_Count=0,t.closeBox(o),t.platAdapter.onRestart()):t.showTip("观看完视频后可再来一局!","")}):(i.Win_Count=0,t.closeBox(o),t.platAdapter.onRestart())},this);var r=new t.BannerAd("adunit-efcd8ea72d11d855");r.width=350,r.height=100,r.bottom=0,r.horizontalCenter=0,this.addChild(r)},i.prototype.setResult=function(t){1==t?(i.Win_Count++,this.currentState="win",one.soundManager.playSound("win",0,1)):-1==t?(i.Win_Count=0,this.currentState="fail",one.soundManager.playSound("lose",0,1)):(i.Win_Count=0,this.currentState="draw",one.soundManager.playSound("win",0,1))},i.Win_Count=0,i}(t.BaseComponent);t.GameOver=e,__reflect(e.prototype,"two.GameOver")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.myScore=0,t.otherScore=0,t}return __extends(i,e),i.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},i.prototype.init=function(t,e,i){this.ownId=e,this.kinds={};for(var o in i)this.kinds[o]=t[0]==o?0:1,o==e?(this.head_1.source=i[o].avatar||"head1_jpg",this.txt_name_1.text=i[o].name,this.icon_sex_1.source="sex_"+i[o].sex+"_png",this.bg_head1.source="bg_head"+this.kinds[o]+"_png"):(this.head_2.source=i[o].avatar||"head2_jpg",this.txt_name_2.text=i[o].name,this.icon_sex_2.source="sex_"+i[o].sex+"_png",this.bg_head2.source="bg_head"+this.kinds[o]+"_png");this.txt_score1.text="0",this.txt_score2.text="0"},i.prototype.addScore=function(e,i){if(e==this.ownId){if(this.myScore+=i,this.txt_score1.text=this.myScore+"",this.myScore>=t.MatchPage.MaxIdx)return!0}else if(this.otherScore+=i,this.txt_score2.text=this.otherScore+"",this.otherScore>=t.MatchPage.MaxIdx)return!0;return!1},i}(eui.Component);t.Banner=e,__reflect(e.prototype,"two.Banner",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.setProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);t.LoadingUI=e,__reflect(e.prototype,"two.LoadingUI")}(two||(two={}));var two;!function(t){var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.height=100,this.width=6,this.bridge=new eui.Image,this.addChild(this.bridge),this.bridge.source="bridge_png",this.bridge.height=100,this.bridge.anchorOffsetY=100,this.bridge.width=6,this.bridge.anchorOffsetX=3,this.bridge.scaleY=0},e.prototype.clear=function(){this.bridge.scaleY=0,this.bridge.rotation=0},e.prototype.grow=function(){this.bridge.scaleY=0,this.bridge.rotation=0,egret.Tween.get(this.bridge).to({scaleY:6},1e3)},e.prototype.stop=function(){egret.Tween.removeTweens(this.bridge)},e.prototype.build=function(t,e,i,o){egret.Tween.removeTweens(this.bridge);var r=egret.Tween.get(this.bridge);i&&(this.bridge.scaleY=0,this.bridge.rotation=0,r.to({scaleY:e/this.bridge.height},t)),r.to({rotation:90},300).call(function(){o()},this)},e.prototype.drop=function(t,e){var i=egret.Tween.get(this.bridge);i.to({rotation:180},t).call(function(){e()},this)},e.prototype.getGrowHeight=function(){return this.bridge.scaleY*this.bridge.height},e.prototype.getTime=function(t){return t/this.bridge.height/6*1e3},e}(eui.Component);t.Bridge=e,__reflect(e.prototype,"two.Bridge")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.timeId=-1,e}return __extends(e,t),e.prototype.addMonitor=function(t){var e=this;this.timeId=one.setTimeout(function(){if(e.canGrow&&!e.isOver){var i=e.shores[t].x-e.shores[t-1].x-e.shores[t].width/2,o=e.bridge.getTime(i);e.timeId=one.setTimeout(function(){e.canGrow&&(e.isOver||e.build(i,o))},o)}},one.randomInt(300,600))},e.prototype.createdShore=function(e){t.prototype.createdShore.call(this,e),this.canGrow&&this.addMonitor(e)},e.prototype.setOver=function(){t.prototype.setOver.call(this),one.clearTimeout(this.timeId)},e}(t.BaseBridgeOp);t.AIOp=e,__reflect(e.prototype,"two.AIOp")}(two||(two={}));var two;!function(t){function e(t){for(var e=[],i=0;t>i;i++)e.push({height:200,width:one.randomInt(40,200),rap:one.randomInt(40,240)});return console.log(JSON.stringify(e)),e}function i(){var i={shores:e(2)};t.Trans.getInstance().trans("onInit",i)}function o(i,o){var r={uid:i,shores:e(4)};t.Trans.getInstance().trans("onAddShore",r)}function r(e,i,o){var r={uid:e,height:i,time:o};t.Trans.getInstance().trans("onGrow",r)}function s(e,i){({result:e,localTime:Date.now()});t.Trans.getInstance().stopGame(e,i)}t.init=i,t.onAddShore=o,t.onGrow=r,t.setWin=s}(two||(two={}));var two;!function(t){var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.addMonitor=function(t){var e=this,i=-1;t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){if(!e.isOver){if(!e.canGrow)return void(i=-1);i=Date.now(),e.bridge.grow()}},null),t.addEventListener(egret.TouchEvent.TOUCH_END,function(t){e.isOver||-1!=i&&(e.bridge.stop(),e.build(e.bridge.getGrowHeight(),Date.now()-i))},null)},e}(t.BaseBridgeOp);t.ManualOp=e,__reflect(e.prototype,"two.ManualOp")}(two||(two={}));var two;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.tempMaxIdx=-1,t.createIdx=0,t.skinName="MatchPageSkin",t}return __extends(i,e),i.prototype.created=function(){e.prototype.created.call(this),this.registerOp(3,t.BaseBridgeOp),this.registerOp(1,t.AIOp),this.registerOp(2,t.ManualOp),this.gp_map=new eui.Group,this.addChild(this.gp_map),this.gp_map.top=this.gp_map.bottom=0,this.gp_shores=new eui.Group,this.gp_map.addChild(this.gp_shores),this.gp_bridges=new eui.Group,this.gp_map.addChild(this.gp_bridges),this.gp_roles=new eui.Group,this.gp_map.addChild(this.gp_roles),this.gp_shores.height=100,this.gp_shores.bottom=0,this.gp_bridges.height=100,this.gp_bridges.bottom=200,this.gp_roles.height=100,this.gp_roles.bottom=200,this.shores=[],this.roles={},this.bridges={},this.shoreCnts={}},i.prototype.initMatch=function(){e.prototype.initMatch.call(this),this.banner.init(this.uIds,this.ownID,this.users);for(var i=0;i<this.uIds.length;i++){var o=this.uIds[i];this.roles[o]=new t.Role,this.gp_roles.addChild(this.roles[o]);var r=o==this.ownID?0:1;this.roles[o].init(i+1,o==this.ownID),this.roles[o].setY(-80*r-10+this.gp_roles.height),this.bridges[o]=new t.Bridge,this.gp_bridges.addChild(this.bridges[o]),this.bridges[o].y=-80*r-10+this.gp_bridges.height,this.shoreCnts[o]=0,this.bridges[o].x=this.roles[o].getPosX()}},i.prototype.addMonitors=function(){e.prototype.addMonitors.call(this),one.monitor.on("onGrow",this.onGrow,this),one.monitor.on("onAddShore",this.onAddShore,this)},i.prototype.removeMonitors=function(){e.prototype.removeMonitors.call(this),one.monitor.off("onGrow",this.onGrow,this),one.monitor.off("onAddShore",this.onAddShore,this)},i.prototype.initOp=function(t,i){e.prototype.initOp.call(this,t,i),i.initBridge(this.bridges[t],this.shores),this.isManual(t)&&i.addMonitor(this)},i.prototype.showOverBox=function(i){e.prototype.showOverBox.call(this,i);var o=new t.GameOver;t.showBox(o),o.setResult(i.win)},i.prototype.onInitGame=function(t){e.prototype.onInitGame.call(this,t);for(var i=0,o=0;o<t.shores.length;o++)this.shores.length>0&&(i+=t.shores[o].rap),i+=t.shores[o].width,this.shores.push({x:i,width:t.shores[o].width,height:t.shores[o].height,rap:t.shores[o].rap});this.addShore(0),this.addShore(1),this.setFocus(this.ownID)},i.prototype.onAddShore=function(t){for(var e=(this.shores.length,this.shores[this.shores.length-1].x),i=0;i<t.shores.length;i++)e+=t.shores[i].rap,e+=t.shores[i].width,this.shores.push({x:e,width:t.shores[i].width,height:t.shores[i].height,rap:t.shores[i].rap});this.addShore(this.tempMaxIdx)},i.prototype.onGrow=function(t){var e=this;this.bridges[t.uid].build(t.time,t.height,!this.isManual(t.uid),function(){e.run(t.uid,t.height)})},i.prototype.run=function(e,i){var o=this,r=this.shoreCnts[e]+1,s=this.shores[r].x-this.shores[r-1].x,n=!0,h=0;i>s?(n=!1,h=this.shores[r-1].x+i):i<s-this.shores[r].width?(n=!1,h=this.shores[r-1].x+i):(this.shoreCnts[e]++,h=this.shores[r].x),this.getOp(e).buildOver(n);var a=5*(h-this.shores[r-1].x),d=this.roles[e];egret.Tween.get(d).to({x:h},a).call(function(){if(n){d.stand(),o.bridges[e].x=d.getPosX(),o.bridges[e].clear();var i=o.banner.addScore(e,1);i?o.canSendData()&&(e==o.ownID?t.setWin(3):t.setWin(1)):o.nextShore(e)}else d.drop(300),o.bridges[e].drop(300,function(){d.x=o.shores[r-1].x,o.bridges[e].clear(),d.stand(),o.getOp(e).createdShore(o.shoreCnts[e]+1)})},this),d.run()},i.prototype.setFocus=function(t){var e=this.roles[t],i=e.localToGlobal(0,0);egret.Tween.get(this.gp_map).to({x:this.gp_map.x-(i.x-100)},400)},i.prototype.nextShore=function(e){e==this.ownID&&this.setFocus(this.ownID);var i=this.shoreCnts[e]+1;this.tempMaxIdx=Math.max(this.tempMaxIdx,i),this.shores.length<=i?this.canSendData()&&t.onAddShore(this.ownID,3):this.createIdx<i?this.addShore(i):this.refreshOPs(i)},i.prototype.refreshOPs=function(t){for(var e=0;e<this.uIds.length;e++)this.getOp(this.uIds[e]).createdShore(t)},i.prototype.addShore=function(e){for(var i=this;this.gp_shores.numChildren;){var o=this.gp_shores.getChildAt(0);if(!(o.x+this.gp_map.x<-100))break;this.gp_shores.removeChildAt(0)}if(0==this.gp_shores.numChildren){var r=this.shores[e],o=new t.Shore;this.gp_shores.addChild(o),o.create(e,r.width,r.height),o.x=this.shores[e].x-this.shores[e].width,o.bottom=0;for(var s in this.roles)this.roles[s].x=this.shores[e].x,this.bridges[s].x=this.roles[s].getPosX();this.createIdx=e}else{var n=this.gp_shores.getChildAt(this.gp_shores.numChildren-1);if(n.index>=e)return;var r=this.shores[e],o=new t.Shore;this.gp_shores.addChild(o),o.create(e,r.width,r.height);var h=n.index+1;o.x=this.shores[h].x-this.shores[h].width+640,egret.Tween.get(o).to({x:this.shores[h].x-this.shores[h].width},400).call(function(){for(var t=0;t<i.uIds.length;t++)i.refreshOPs(e);i.createIdx=e},this)}},i.MaxIdx=10,i}(t.BaseGame);t.MatchPage=e,__reflect(e.prototype,"two.MatchPage"),t.setClassMap("match","two.MatchPage")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.type=1,e.initY=0,e}return __extends(e,t),e.prototype.init=function(t,e){this.roleID=t,this.width=100,this.height=100;var i=RES.getRes("hero"+t+"_json"),o=RES.getRes("hero"+t+"_png"),r=new egret.MovieClipDataFactory(i,o),s=this.role=new egret.MovieClip(r.generateMovieClipData("hero"));this.addChild(s),s.gotoAndPlay("stay",-1),s.y=0,e||(s.x=30)},e.prototype.getPosX=function(){return this.x+this.role.x},e.prototype.setY=function(t){this.initY=t,this.y=t},e.prototype.run=function(){this.role.gotoAndPlay("walk",-1)},e.prototype.stand=function(){this.role.gotoAndPlay("stay",-1)},e.prototype.drop=function(t){var e=this;egret.Tween.get(this).to({y:this.initY+300},300).call(function(){e.y=e.initY},this)},e}(egret.DisplayObjectContainer);t.Role=e,__reflect(e.prototype,"two.Role")}(two||(two={}));var two;!function(t){var e=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.bridge2=new eui.Image,this.addChild(this.bridge2),this.bridge2.source="shore1_png",this.bridge2.y=-100,this.bridge2.x=40,this.bridge1=new eui.Image,this.addChild(this.bridge1),this.bridge1.source="shore2_png",this.bridge3=new eui.Image,this.addChild(this.bridge3),this.bridge3.source="shore_png",this.bridge3.height=110,this.bridge3.y=-100,this.bridge3.x=40,this.bridge3.skewX=22,this.bottom=0},Object.defineProperty(i.prototype,"index",{get:function(){return this._index},enumerable:!0,configurable:!0}),i.prototype.create=function(e,i,o){if(this._index=e,this.bridge1.height=o,this.bridge1.width=i,this.bridge2.height=o,this.bridge2.width=i,this.bridge3.width=i,e==t.MatchPage.MaxIdx){var r=new eui.Image;r.source=RES.getRes("end_png"),this.addChild(r),r.x=i-r.width/2,r.y=-r.height}},i.prototype.getShoreWidth=function(){return this.bridge1.width},i}(eui.Component);t.Shore=e,__reflect(e.prototype,"two.Shore")}(two||(two={}));
