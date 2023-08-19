window.skins={};
function __extends(d, b) {
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
            generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/BackGround/BackGroundSkin.exml'] = window.BackGroundSkin = (function (_super) {
	__extends(BackGroundSkin, _super);
	function BackGroundSkin() {
		_super.call(this);
		this.skinParts = ["exml_map1","exml_map0","exml_contentGroup0","exml_BGGroup","exml_score","exml_sound"];
		
		this.height = 900;
		this.width = 480;
		this.elementsContent = [this.exml_BGGroup_i(),this.exml_score_i(),this.exml_sound_i()];
	}
	var _proto = BackGroundSkin.prototype;

	_proto.exml_BGGroup_i = function () {
		var t = new eui.Group();
		this.exml_BGGroup = t;
		t.anchorOffsetX = 0;
		t.height = 1000;
		t.width = 1000;
		t.x = -1085;
		t.y = -780;
		t.elementsContent = [this.exml_map1_i(),this.exml_map0_i(),this.exml_contentGroup0_i()];
		return t;
	};
	_proto.exml_map1_i = function () {
		var t = new eui.Image();
		this.exml_map1 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "level1_png";
		t.x = 819;
		t.y = -1414;
		return t;
	};
	_proto.exml_map0_i = function () {
		var t = new eui.Image();
		this.exml_map0 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "level1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_contentGroup0_i = function () {
		var t = new eui.Group();
		this.exml_contentGroup0 = t;
		t.x = 0;
		t.y = 1964;
		return t;
	};
	_proto.exml_score_i = function () {
		var t = new eui.BitmapLabel();
		this.exml_score = t;
		t.font = "number1_fnt";
		t.horizontalCenter = -168.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "000";
		t.y = 15;
		return t;
	};
	_proto.exml_sound_i = function () {
		var t = new eui.Image();
		this.exml_sound = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "seet_other_json.nomute_png";
		t.x = 135;
		t.y = -56;
		return t;
	};
	return BackGroundSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BackGround/GameMenuSkin.exml'] = window.GameMenuSkin = (function (_super) {
	__extends(GameMenuSkin, _super);
	function GameMenuSkin() {
		_super.call(this);
		this.skinParts = ["exml_rect0","exml_time","exml_group1","exml_rect","exml_label","exml_rectBg","exml_sound","exml_select","exml_image","exml_group0"];
		
		this.height = 900;
		this.width = 480;
		this.elementsContent = [this.exml_group1_i(),this.exml_group0_i()];
	}
	var _proto = GameMenuSkin.prototype;

	_proto.exml_group1_i = function () {
		var t = new eui.Group();
		this.exml_group1 = t;
		t.alpha = 0;
		t.height = 900;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.exml_rect0_i(),this.exml_time_i(),this._Image1_i()];
		return t;
	};
	_proto.exml_rect0_i = function () {
		var t = new eui.Rect();
		this.exml_rect0 = t;
		t.fillAlpha = 0.3;
		t.fillColor = 0xffffff;
		t.height = 900;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_time_i = function () {
		var t = new eui.BitmapLabel();
		this.exml_time = t;
		t.font = "number2_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "3";
		t.y = 240;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tip_png";
		t.y = 372;
		return t;
	};
	_proto.exml_group0_i = function () {
		var t = new eui.Group();
		this.exml_group0 = t;
		t.height = 900;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.exml_rect_i(),this.exml_label_i(),this.exml_rectBg_i(),this.exml_sound_i(),this.exml_select_i(),this.exml_image_i()];
		return t;
	};
	_proto.exml_rect_i = function () {
		var t = new eui.Rect();
		this.exml_rect = t;
		t.alpha = 1;
		t.fillAlpha = 0.3;
		t.height = 900;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_label_i = function () {
		var t = new eui.Label();
		this.exml_label = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "——Tap the screen to start——";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = 24;
		t.y = 627;
		return t;
	};
	_proto.exml_rectBg_i = function () {
		var t = new eui.Rect();
		this.exml_rectBg = t;
		t.alpha = 0;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.height = 900;
		t.touchEnabled = false;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_sound_i = function () {
		var t = new eui.Image();
		this.exml_sound = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "seet_other_json.nomute_png";
		t.x = 150;
		t.y = -56;
		return t;
	};
	_proto.exml_select_i = function () {
		var t = new eui.Image();
		this.exml_select = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "selectBtn_png";
		t.x = -120;
		t.y = 789.6;
		return t;
	};
	_proto.exml_image_i = function () {
		var t = new eui.Image();
		this.exml_image = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "biaoti_2_png";
		t.touchEnabled = false;
		t.y = -232;
		return t;
	};
	return GameMenuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BackGround/GameOverSkin.exml'] = window.GameOverSkin = (function (_super) {
	__extends(GameOverSkin, _super);
	function GameOverSkin() {
		_super.call(this);
		this.skinParts = ["exml_startGame","exml_select","exml_score","exml_maxScore","exml_targetScore","exml_scoreGroup"];
		
		this.height = 900;
		this.width = 480;
		this.elementsContent = [this.exml_startGame_i(),this.exml_select_i(),this.exml_scoreGroup_i()];
	}
	var _proto = GameOverSkin.prototype;

	_proto.exml_startGame_i = function () {
		var t = new eui.Image();
		this.exml_startGame = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ks_png";
		t.x = 480;
		t.y = 789.6;
		return t;
	};
	_proto.exml_select_i = function () {
		var t = new eui.Image();
		this.exml_select = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "selectBtn_png";
		t.x = -120;
		t.y = 789.6;
		return t;
	};
	_proto.exml_scoreGroup_i = function () {
		var t = new eui.Group();
		this.exml_scoreGroup = t;
		t.x = 0;
		t.y = -221;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.exml_score_i(),this.exml_maxScore_i(),this._Label2_i(),this.exml_targetScore_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "dizi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 0.2;
		t.strokeColor = 0xffffff;
		t.text = "Current score：";
		t.textColor = 0xffffff;
		t.x = 23;
		t.y = 23;
		return t;
	};
	_proto.exml_score_i = function () {
		var t = new eui.Label();
		this.exml_score = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 0.2;
		t.strokeColor = 0xFFFFFF;
		t.text = "006";
		t.textColor = 0xFFFFFF;
		t.x = 323;
		t.y = 23;
		return t;
	};
	_proto.exml_maxScore_i = function () {
		var t = new eui.Label();
		this.exml_maxScore = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 0.2;
		t.strokeColor = 0xFFFFFF;
		t.text = "006";
		t.textColor = 0xFFFFFF;
		t.x = 323;
		t.y = 101;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 0.2;
		t.strokeColor = 0xFFFFFF;
		t.text = "Personal best：";
		t.textColor = 0xFFFFFF;
		t.x = 23;
		t.y = 101;
		return t;
	};
	_proto.exml_targetScore_i = function () {
		var t = new eui.Label();
		this.exml_targetScore = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 0.2;
		t.strokeColor = 0xFFFFFF;
		t.text = "006";
		t.textColor = 0xFFFFFF;
		t.x = 323;
		t.y = 170;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 0.2;
		t.strokeColor = 0xFFFFFF;
		t.text = "Target score：";
		t.textColor = 0xFFFFFF;
		t.x = 23;
		t.y = 170;
		return t;
	};
	return GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BackGround/OverWaitSkin.exml'] = window.OverWaitSkin = (function (_super) {
	__extends(OverWaitSkin, _super);
	function OverWaitSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 900;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
	}
	var _proto = OverWaitSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 900;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "点击";
		t.x = 135;
		t.y = 291;
		return t;
	};
	return OverWaitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BackGround/PlayerChooseSkin.exml'] = window.PlayerChooseSkin = (function (_super) {
	__extends(PlayerChooseSkin, _super);
	function PlayerChooseSkin() {
		_super.call(this);
		this.skinParts = ["exml_select","exml_rect0","exml_rect1","exml_rect2","exml_rect3","exml_rect4","exml_rect5","exml_group","exml_back"];
		
		this.height = 900;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.exml_group_i(),this.exml_back_i()];
	}
	var _proto = PlayerChooseSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_group_i = function () {
		var t = new eui.Group();
		this.exml_group = t;
		t.x = 0;
		t.y = -171;
		t.elementsContent = [this._Image1_i(),this.exml_select_i(),this.exml_rect0_i(),this.exml_rect1_i(),this.exml_rect2_i(),this.exml_rect3_i(),this.exml_rect4_i(),this.exml_rect5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "select_png";
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_select_i = function () {
		var t = new eui.Image();
		this.exml_select = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "select_animal_png";
		t.x = 17;
		t.y = 73;
		return t;
	};
	_proto.exml_rect0_i = function () {
		var t = new eui.Rect();
		this.exml_rect0 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 66;
		t.x = 17;
		t.y = 73;
		return t;
	};
	_proto.exml_rect1_i = function () {
		var t = new eui.Rect();
		this.exml_rect1 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 66;
		t.x = 96;
		t.y = 73;
		return t;
	};
	_proto.exml_rect2_i = function () {
		var t = new eui.Rect();
		this.exml_rect2 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 66;
		t.x = 170;
		t.y = 73;
		return t;
	};
	_proto.exml_rect3_i = function () {
		var t = new eui.Rect();
		this.exml_rect3 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 66;
		t.x = 246;
		t.y = 73;
		return t;
	};
	_proto.exml_rect4_i = function () {
		var t = new eui.Rect();
		this.exml_rect4 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 66;
		t.x = 321;
		t.y = 73;
		return t;
	};
	_proto.exml_rect5_i = function () {
		var t = new eui.Rect();
		this.exml_rect5 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 66;
		t.x = 396;
		t.y = 73;
		return t;
	};
	_proto.exml_back_i = function () {
		var t = new eui.Image();
		this.exml_back = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "fanhui_png";
		t.x = -120;
		t.y = 789.6;
		return t;
	};
	return PlayerChooseSkin;
})(eui.Skin);