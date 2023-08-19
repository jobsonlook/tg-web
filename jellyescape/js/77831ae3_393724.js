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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/default/ButtonScaleSkin.exml","eui.ProgressBar":"resource/eui_skins/default/ProgressBarSkin.exml","eui.Scroller":"resource/eui_skins/default/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/default/ToggleSwitchSkin.exml","two.ComboChooseItem":"resource/eui_skins/default/ComboChooseItemSkin.exml","two.RedPoint":"resource/eui_skins/default/RedPointSkin.exml","two.Stars":"resource/eui_skins/default/StarsSkin.exml","two.Footer":"resource/eui_skins/default/StarsSkin.exml","two.ComboSelectedItem":"resource/eui_skins/default/ComboSelectedItemSkin.exml","two.ResultBox":"resource/eui_skins/ResultBoxSkin.exml","two.LevelPage":"resource/eui_skins/LevelPageSkin.exml","two.LevelItem":"resource/eui_skins/LevelItemSkin.exml","two.PauseBox":"resource/eui_skins/PauseBoxSkin.exml"};generateEUI.paths['resource/eui_skins/default/BoxBgSkin.exml'] = window.BoxBgSkin = (function (_super) {
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
		var t = new two.AnchorBitmapLabel();
		this.txt_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.font = "txtwhite_black_fraseig_fnt";
		t.text = "ABCDE";
		t.x = 0;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map1Skin.exml'] = window.Map1Skin = (function (_super) {
	__extends(Map1Skin, _super);
	function Map1Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsItem2_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this.role_i()];
	}
	var _proto = Map1Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 16.5;
		t.y = 249;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 12.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 25;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 725.5;
		t.y = 247;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 14.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.type = 2;
		t.width = 26;
		t.x = 17;
		t.y = 22.5;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 23;
		t.x = 724.5;
		t.y = 35;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 356.5;
		t.anchorOffsetY = 12.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 25;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 713;
		t.x = 369;
		t.y = 17.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 23;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 376.5;
		t.y = 476.5;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 629;
		t.y = 197;
		t.elementsContent = [this._Image4_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 64;
		t.y = 104;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 431.5;
		t.y = 218.6;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 241;
		t.y = 429;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 431;
		t.y = 40;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 22;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 242;
		t.y = 291;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 22;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 258;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 516;
		t.x = 463.5;
		t.y = 264.5;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 608;
		t.y = 339;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map1Skin;
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
					new eui.SetProperty("_Image1","source","si_2_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",1),
					new eui.SetProperty("_Image1","source","no_1_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",1),
					new eui.SetProperty("_Image1","source","no_2_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",1),
					new eui.SetProperty("_Image1","source","no_1_png")
				])
		];
	}
	var _proto = SoundCheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i()];
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
		t.fillMode = "scale";
		t.source = "si_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SoundCheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/HomePageSkin.exml'] = window.HomePageSkin = (function (_super) {
	__extends(HomePageSkin, _super);
	var HomePageSkin$Skin4 = 	(function (_super) {
		__extends(HomePageSkin$Skin4, _super);
		function HomePageSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","btn_pausa_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePageSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_pausa_1_png";
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
		return HomePageSkin$Skin4;
	})(eui.Skin);

	function HomePageSkin() {
		_super.call(this);
		this.skinParts = ["gp_map","btn_pause","flag_stars","txt_level"];
		
		this.height = 640;
		this.width = 1134;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i()];
	}
	var _proto = HomePageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "bggame_1_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scaleX = -1;
		t.source = "bggame_1_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "cell_b1_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.gp_map_i(),this.btn_pause_i(),this._SoundButton1_i(),this.flag_stars_i(),this._BitmapLabel1_i(),this.txt_level_i()];
		return t;
	};
	_proto.gp_map_i = function () {
		var t = new eui.Group();
		this.gp_map = t;
		t.height = 490;
		t.scaleX = 1.31;
		t.scaleY = 1.31;
		t.width = 743;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Map1_i()];
		return t;
	};
	_proto._Map1_i = function () {
		var t = new two.Map();
		t.skinName = "Map1Skin";
		return t;
	};
	_proto.btn_pause_i = function () {
		var t = new eui.Button();
		this.btn_pause = t;
		t.height = 58;
		t.label = "";
		t.width = 58;
		t.x = 869;
		t.y = 43;
		t.skinName = HomePageSkin$Skin4;
		return t;
	};
	_proto._SoundButton1_i = function () {
		var t = new two.SoundButton();
		t.height = 58;
		t.label = "";
		t.skinName = "SoundCheckBoxSkin";
		t.type = "all";
		t.width = 58;
		t.x = 807;
		t.y = 43;
		return t;
	};
	_proto.flag_stars_i = function () {
		var t = new eui.Image();
		this.flag_stars = t;
		t.horizontalCenter = 0;
		t.source = "ui_stars_1_png";
		t.y = 42;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "txtwhite_black_fnt";
		t.letterSpacing = 4;
		t.text = "LEVEL:";
		t.x = 46;
		t.y = 42;
		return t;
	};
	_proto.txt_level_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_level = t;
		t.font = "txtwhite_black_fnt";
		t.letterSpacing = 4;
		t.text = "120";
		t.x = 207;
		t.y = 42;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/LoadingAssetsPanelSkin.exml'] = window.LoadingAssetsPanelSkin = (function (_super) {
	__extends(LoadingAssetsPanelSkin, _super);
	var LoadingAssetsPanelSkin$Skin5 = 	(function (_super) {
		__extends(LoadingAssetsPanelSkin$Skin5, _super);
		function LoadingAssetsPanelSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["thumb","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
		}
		var _proto = LoadingAssetsPanelSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(13,9,7,2);
			t.source = "loading_bar_bg_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.scale9Grid = new egret.Rectangle(7,3,6,2);
			t.source = "loading_bar_2_png";
			t.verticalCenter = -3;
			t.percentWidth = 98.6;
			t.x = 6.2;
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
		return LoadingAssetsPanelSkin$Skin5;
	})(eui.Skin);

	function LoadingAssetsPanelSkin() {
		_super.call(this);
		this.skinParts = ["gp_bar","txt_progress"];
		
		this.height = 557;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LoadingAssetsPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 177;
		t.horizontalCenter = -2;
		t.width = 618.33;
		t.elementsContent = [this.gp_bar_i(),this._Label1_i(),this.txt_progress_i()];
		return t;
	};
	_proto.gp_bar_i = function () {
		var t = new eui.ProgressBar();
		this.gp_bar = t;
		t.height = 26;
		t.left = 0;
		t.right = 0;
		t.value = 0;
		t.y = 0;
		t.skinName = LoadingAssetsPanelSkin$Skin5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -0.5;
		t.size = 24;
		t.text = "资源加载完成后，进入游戏很快哦！";
		t.textColor = 0x4F72B4;
		t.y = 54.33;
		return t;
	};
	_proto.txt_progress_i = function () {
		var t = new eui.Label();
		this.txt_progress = t;
		t.horizontalCenter = -7;
		t.size = 24;
		t.text = "正在加载：0%";
		t.textColor = 0x4F72B4;
		t.y = 88;
		return t;
	};
	return LoadingAssetsPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/LoadingProxyPanelSkin.exml'] = window.LoadingProxyPanelSkin = (function (_super) {
	__extends(LoadingProxyPanelSkin, _super);
	function LoadingProxyPanelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._CircleImage1_i()];
	}
	var _proto = LoadingProxyPanelSkin.prototype;

	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_indicator_png";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingProxyPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map0Skin.exml'] = window.Map0Skin = (function (_super) {
	__extends(Map0Skin, _super);
	function Map0Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsItem2_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this.role_i()];
	}
	var _proto = Map0Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 16.5;
		t.y = 249;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 12.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 25;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 725.5;
		t.y = 247;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 33.5;
		t.anchorOffsetY = 14.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.type = 2;
		t.width = 67;
		t.x = 57.5;
		t.y = 22.5;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceY = 1;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 23;
		t.x = 344.5;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceY = -1;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 23;
		t.x = 234.5;
		t.y = 470;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 356.5;
		t.anchorOffsetY = 12.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 25;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 713;
		t.x = 369;
		t.y = 17.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 23;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 376.5;
		t.y = 476.5;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 629;
		t.y = 197;
		t.elementsContent = [this._Image4_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 64;
		t.y = 104;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 481.5;
		t.y = 218.6;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 311;
		t.y = 429;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 131.5;
		t.y = 452;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 481;
		t.y = 40;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 22;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 135;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 270;
		t.x = 586.5;
		t.y = 264.5;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 608;
		t.y = 339;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map0Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map10Skin.exml'] = window.Map10Skin = (function (_super) {
	__extends(Map10Skin, _super);
	function Map10Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsLaser1_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsItem7_i(),this._PhysicsStar1_i(),this._PhysicsItem8_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem9_i(),this.role_i()];
	}
	var _proto = Map10Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 258;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 327;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 320;
		t.y = 453;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 448;
		t.y = 238;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 499;
		t.y = 296;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 62.5;
		t.anchorOffsetY = 11.5;
		t.groupId = 2;
		t.height = 23;
		t.maskId = 1;
		t.type = 2;
		t.width = 125;
		t.x = 332;
		t.y = 37.5;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 127;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 62.5;
		t.anchorOffsetY = 11.5;
		t.groupId = 2;
		t.height = 23;
		t.maskId = 1;
		t.type = 2;
		t.width = 125;
		t.x = 542;
		t.y = 37.5;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 127;
		t.y = 24;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 62.5;
		t.anchorOffsetY = 10.5;
		t.density = 0;
		t.groupId = 2;
		t.height = 21;
		t.isSensor = false;
		t.maskId = 1;
		t.rotation = 90;
		t.tranRo = 90;
		t.type = 2;
		t.width = 125;
		t.x = 131;
		t.y = 289.5;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 658;
		t.y = 412.5;
		t.elementsContent = [this._Image12_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 80;
		t.x = 228.5;
		t.y = 429;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 80;
		t.x = 68;
		t.y = 340;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 80;
		t.x = 182;
		t.y = 72;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 80;
		t.x = 440;
		t.y = 72;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 93;
		t.x = 326;
		t.y = 247;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 542;
		t.y = 313.5;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem8_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 148;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 296;
		t.x = 580.5;
		t.y = 267;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = -2;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 68;
		t.y = 62;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 230.5;
		t.y = 381.5;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem9_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image22_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 615.5;
		t.y = 90;
		t.elementsContent = [this._Image23_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map10Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map11Skin.exml'] = window.Map11Skin = (function (_super) {
	__extends(Map11Skin, _super);
	function Map11Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem2_i(),this._PhysicsIce1_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem6_i(),this.role_i(),this._PhysicsNeedle5_i()];
	}
	var _proto = Map11Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 431;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 182;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 220;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 465;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 440;
		t.y = 453;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 358;
		t.y = 208;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 206;
		t.y = 38;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 85;
		t.y = 261;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 114;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 228;
		t.x = 614.5;
		t.y = 234;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = -2;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 128;
		t.x = 435.5;
		t.y = 234;
		t.elementsContent = [this._DynamicFramesImage1_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 6;
		t.isPausing = true;
		t.left = 0;
		t.right = -4;
		t.source = "end_1_png";
		t.times = 1;
		t.y = -1;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 177.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 355;
		t.x = 195.5;
		t.y = 234;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 104;
		t.y = 412.5;
		t.elementsContent = [this._Image10_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 48.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 97;
		t.x = 443;
		t.y = 337;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 609.5;
		t.y = 289;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 138;
		t.y = 172;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 229.5;
		t.y = 281.5;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 615.5;
		t.y = 90;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 92.5;
		t.groupId = 2;
		t.height = 185;
		t.maskId = 1;
		t.type = 2;
		t.width = 22;
		t.x = 701;
		t.y = 123.5;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.y = 64;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.x = 0;
		t.y = 125;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.x = 0;
		t.y = 187;
		return t;
	};
	return Map11Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map12Skin.exml'] = window.Map12Skin = (function (_super) {
	__extends(Map12Skin, _super);
	function Map12Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map12Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 431;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 142;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 431;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 179;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 470;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 465;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 457;
		t.y = 453;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 323;
		t.y = 165;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 183;
		t.y = 453;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 324;
		t.y = 221;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 146;
		t.y = 38;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 178;
		t.x = 639.5;
		t.y = 224;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = -2;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 177.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 355;
		t.x = 195.5;
		t.y = 194;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 634;
		t.y = 156.5;
		t.elementsContent = [this._Image12_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 48.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 97;
		t.x = 453;
		t.y = 337;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 48.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 97;
		t.x = 182;
		t.y = 337;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 669.5;
		t.y = 269;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 138;
		t.y = 143;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 78.5;
		t.y = 424.5;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 615.5;
		t.y = 280;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map12Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map13Skin.exml'] = window.Map13Skin = (function (_super) {
	__extends(Map13Skin, _super);
	function Map13Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem6_i(),this.role_i()];
	}
	var _proto = Map13Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 281;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 431;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 470;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 236;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 548;
		t.y = 453;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 473;
		t.y = 195;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 474;
		t.y = 251;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 66;
		t.y = 38;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 166;
		t.y = 327;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 300;
		t.x = 578.5;
		t.y = 224;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = -2;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 634;
		t.y = 156.5;
		t.elementsContent = [this._Image10_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 48.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 97;
		t.x = 315.5;
		t.y = 192.5;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 48.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 97;
		t.x = 166.5;
		t.y = 300.5;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 669.5;
		t.y = 428;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 166;
		t.y = 256;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 315.5;
		t.y = 240;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = 4;
		t.type = 2;
		t.width = 41;
		t.x = 75.5;
		t.y = 130;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map13Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map14Skin.exml'] = window.Map14Skin = (function (_super) {
	__extends(Map14Skin, _super);
	function Map14Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map14Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 152;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 431;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 245;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 21;
		t.x = 25.5;
		t.y = 289;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 190;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 467;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 424;
		t.y = 453;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 220.5;
		t.y = 267;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 451;
		t.y = 231;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 540;
		t.y = 38;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 183;
		t.x = 121;
		t.y = 36;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 185;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 157;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 314;
		t.x = 571.5;
		t.y = 204;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = -2;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 94.5;
		t.y = 414;
		t.elementsContent = [this._Image13_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 82;
		t.x = 228;
		t.y = 152.5;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 156;
		t.x = 425;
		t.y = 342.5;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 121.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 243;
		t.x = 136.5;
		t.y = 296.5;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 638;
		t.y = 269;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 233;
		t.y = 103;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 669.5;
		t.y = 109;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = 4;
		t.type = 2;
		t.width = 41;
		t.x = 75.5;
		t.y = 130;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map14Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map15Skin.exml'] = window.Map15Skin = (function (_super) {
	__extends(Map15Skin, _super);
	function Map15Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsLaser1_i(),this._PhysicsIce1_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem6_i(),this.role_i()];
	}
	var _proto = Map15Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 431;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 466;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 405;
		t.y = 450;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 188;
		t.y = 451;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 178;
		t.y = 283;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 319;
		t.y = 37;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 96;
		t.x = 99;
		t.y = 165.5;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 408;
		t.y = 277;
		t.elementsContent = [this._DynamicFramesImage2_i()];
		return t;
	};
	_proto._DynamicFramesImage2_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 6;
		t.isPausing = true;
		t.left = 0;
		t.right = -4;
		t.source = "end_1_png";
		t.times = 1;
		t.y = -1;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 153.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 307;
		t.x = 171.5;
		t.y = 314;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 90;
		t.y = 412.5;
		t.elementsContent = [this._Image11_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 72.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 145;
		t.x = 240.5;
		t.y = 165;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 72.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 145;
		t.x = 537;
		t.y = 277;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 535;
		t.y = 332;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 240;
		t.y = 115;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 283.5;
		t.y = 371.5;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 405.5;
		t.y = 101;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map15Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map16Skin.exml'] = window.Map16Skin = (function (_super) {
	__extends(Map16Skin, _super);
	function Map16Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsLaser1_i(),this._PhysicsLaser2_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map16Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 366;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 366;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 325;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 326;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 541;
		t.y = 450;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 151;
		t.y = 451;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 319;
		t.y = 37;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 86;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 172;
		t.x = 137;
		t.y = 185.5;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsLaser2_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 134;
		t.x = 414;
		t.y = 315.5;
		t.elementsContent = [this._DynamicFramesImage2_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._DynamicFramesImage2_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 153.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 307;
		t.x = 171.5;
		t.y = 314;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 111.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 223;
		t.x = 613.5;
		t.y = 314;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 468;
		t.y = 101;
		t.elementsContent = [this._Image14_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 72.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 145;
		t.x = 316.5;
		t.y = 185;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 72.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 145;
		t.x = 467;
		t.y = 168;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 647;
		t.y = 429.5;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 319;
		t.y = 138;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 63.5;
		t.y = 429.5;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 612.5;
		t.y = 89;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map16Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map17Skin.exml'] = window.Map17Skin = (function (_super) {
	__extends(Map17Skin, _super);
	function Map17Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsLaser1_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map17Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 263;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 301;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 93.5;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 187;
		t.x = 125.5;
		t.y = 451;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		t.x = 61;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		t.x = 123;
		t.y = 0;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 418;
		t.y = 37;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 169;
		t.y = 37;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 134;
		t.x = 414;
		t.y = 315.5;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 95;
		t.x = 277.5;
		t.y = 314;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 95;
		t.x = 167.5;
		t.y = 204;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 111.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 223;
		t.x = 613.5;
		t.y = 314;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 652;
		t.y = 412.5;
		t.elementsContent = [this._Image14_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 72.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 145;
		t.x = 417;
		t.y = 155;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 537;
		t.y = 362.5;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 671;
		t.y = 80;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 282.5;
		t.y = 266.5;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 612.5;
		t.y = 149;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map17Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map18Skin.exml'] = window.Map18Skin = (function (_super) {
	__extends(Map18Skin, _super);
	function Map18Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsLaser1_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this._PhysicsIce1_i(),this.role_i()];
	}
	var _proto = Map18Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 263;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 429;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 467;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 301;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 386.5;
		t.y = 343;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 483.5;
		t.y = 283;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 259.5;
		t.y = 283;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 501.5;
		t.y = 450;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 267.5;
		t.y = 450;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 74.5;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 149;
		t.x = 127.5;
		t.y = 158.5;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 95;
		t.x = 479;
		t.y = 158.5;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 81;
		t.x = 264.5;
		t.y = 159;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 249.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 499;
		t.x = 475.5;
		t.y = 314;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 652;
		t.y = 412.5;
		t.elementsContent = [this._Image15_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 87;
		t.x = 63.5;
		t.y = 314;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 177;
		t.y = 372.5;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 261;
		t.y = 110;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 478;
		t.y = 111;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 167;
		t.y = 314;
		t.elementsContent = [this._DynamicFramesImage2_i()];
		return t;
	};
	_proto._DynamicFramesImage2_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 6;
		t.height = 43;
		t.isPausing = true;
		t.left = -1;
		t.right = -5;
		t.source = "end_1_png";
		t.times = 1;
		t.y = -1;
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 612.5;
		t.y = 99;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map18Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map19Skin.exml'] = window.Map19Skin = (function (_super) {
	__extends(Map19Skin, _super);
	function Map19Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsItem2_i(),this._PhysicsLaser1_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this._PhysicsIce1_i(),this.role_i()];
	}
	var _proto = Map19Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 393;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 429;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 467;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 351;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 302.5;
		t.y = 37;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 331.5;
		t.y = 450;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 632;
		t.y = 272.5;
		t.elementsContent = [this._Image7_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 128;
		t.x = 479;
		t.y = 342;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 95;
		t.x = 468;
		t.y = 227.5;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 81;
		t.x = 73.5;
		t.y = 110;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 161;
		t.x = 644.5;
		t.y = 340;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 127;
		t.x = 333.5;
		t.y = 340;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 74;
		t.y = 165.5;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 180;
		t.y = 62;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 467;
		t.y = 149;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 194;
		t.y = 184;
		t.elementsContent = [this._DynamicFramesImage2_i()];
		return t;
	};
	_proto._DynamicFramesImage2_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 6;
		t.height = 43;
		t.isPausing = true;
		t.left = -1;
		t.right = -5;
		t.source = "end_1_png";
		t.times = 1;
		t.y = -1;
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 332.5;
		t.y = 151;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map19Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map20Skin.exml'] = window.Map20Skin = (function (_super) {
	__extends(Map20Skin, _super);
	function Map20Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem2_i(),this._PhysicsLaser1_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsItem7_i(),this._PhysicsItem8_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem9_i(),this.role_i()];
	}
	var _proto = Map20Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 393;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 429;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 467;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 351;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 183;
		t.x = 393;
		t.y = 36;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 185;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 363.5;
		t.y = 162;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 331.5;
		t.y = 452;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 661.5;
		t.y = 311;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 622;
		t.y = 182.5;
		t.elementsContent = [this._Image11_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 10;
		t.density = 0;
		t.groupId = 2;
		t.height = 20;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 114;
		t.x = 486;
		t.y = 342;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 95;
		t.x = 480;
		t.y = 250;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 73.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 147;
		t.x = 340;
		t.y = 135.5;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 81;
		t.x = 164.5;
		t.y = 242;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 161;
		t.x = 644.5;
		t.y = 340;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 134;
		t.x = 621;
		t.y = 250;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem8_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 127;
		t.x = 343.5;
		t.y = 340;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 164.5;
		t.y = 190.5;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 327;
		t.y = 88;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 619.5;
		t.y = 429;
		t.elementsContent = [this._Image22_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem9_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image23_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = 4;
		t.type = 2;
		t.width = 41;
		t.x = 72.5;
		t.y = 123;
		t.elementsContent = [this._Image24_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map20Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map21Skin.exml'] = window.Map21Skin = (function (_super) {
	__extends(Map21Skin, _super);
	function Map21Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2ForceImage3_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsItem6_i(),this._PhysicsItem7_i(),this._PhysicsItem8_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem9_i(),this.role_i()];
	}
	var _proto = Map21Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 703;
		t.y = 429;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleY = -1;
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 61;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 429;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 467;
		return t;
	};
	_proto._P2ForceImage3_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 467;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 331.5;
		t.y = 453;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 183;
		t.x = 558;
		t.y = 36;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 185;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 196;
		t.y = 39;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 236;
		t.y = 208;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 551;
		t.y = 200;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 632;
		t.y = 272.5;
		t.elementsContent = [this._Image12_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 140;
		t.x = 500.5;
		t.y = 227.5;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 81;
		t.x = 551.5;
		t.y = 72;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 161;
		t.x = 644.5;
		t.y = 340;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 65.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 131;
		t.x = 194.5;
		t.y = 180;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 63;
		t.x = 65.5;
		t.y = 390;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem8_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 74.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 149;
		t.x = 325.5;
		t.y = 320;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 190;
		t.y = 236.5;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 335;
		t.y = 83.5;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 327;
		t.y = 371;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem9_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image22_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = 4;
		t.type = 2;
		t.width = 41;
		t.x = 62.5;
		t.y = 129;
		t.elementsContent = [this._Image23_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map21Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map2Skin.exml'] = window.Map2Skin = (function (_super) {
	__extends(Map2Skin, _super);
	function Map2Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsItem2_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this.role_i()];
	}
	var _proto = Map2Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 473;
		t.x = 14.5;
		t.y = 249.5;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 238.5;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 477;
		t.x = 726;
		t.y = 246.5;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12.5;
		t.anchorOffsetY = 14.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.type = 2;
		t.width = 25;
		t.x = 15.5;
		t.y = 22.5;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 35;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 24;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 362;
		t.y = 18;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 24;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 374.5;
		t.y = 477;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 218;
		t.y = 293;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 402;
		t.y = 238;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 627;
		t.y = 198;
		t.elementsContent = [this._Image6_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 342.5;
		t.y = 94;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 236;
		t.y = 219;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 116;
		t.y = 404;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 399.5;
		t.y = 455;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 250;
		t.y = 40;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 22;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 258;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 516;
		t.x = 461.5;
		t.y = 264.5;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 606;
		t.y = 339;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map3Skin.exml'] = window.Map3Skin = (function (_super) {
	__extends(Map3Skin, _super);
	function Map3Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem6_i(),this.role_i()];
	}
	var _proto = Map3Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 240.5;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 481;
		t.x = 726;
		t.y = 247.5;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 14.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 21.5;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 24;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 476;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 419.5;
		t.y = 454;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 312.5;
		t.y = 389;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 496;
		t.y = 203;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 660;
		t.y = 200.5;
		t.elementsContent = [this._Image6_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 22.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 45;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 138;
		t.x = 658.5;
		t.y = 270.5;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.top = 0;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 210;
		t.x = 425.5;
		t.y = 176.5;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 154;
		t.x = 276.5;
		t.y = 417.5;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 344.5;
		t.y = 226;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 667.9;
		t.y = 71;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 64;
		t.y = 432;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 392;
		t.y = 39;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 668;
		t.y = 338;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map4Skin.exml'] = window.Map4Skin = (function (_super) {
	__extends(Map4Skin, _super);
	function Map4Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle3_i(),this._PhysicsItem6_i(),this.role_i()];
	}
	var _proto = Map4Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 16;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 23;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 25;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 561.5;
		t.y = 188;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 226;
		t.y = 39;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 369;
		t.y = 250.5;
		t.elementsContent = [this._Image6_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 89.5;
		t.anchorOffsetY = 19.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 39;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 179;
		t.x = 369;
		t.y = 317.5;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.y = 0;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 210;
		t.x = 625.5;
		t.y = 216.5;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 154;
		t.x = 199.5;
		t.y = 193;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 424.5;
		t.y = 371;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 667.9;
		t.y = 165;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 364;
		t.y = 155;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 124;
		t.x = 199;
		t.y = 219;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 126;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 668;
		t.y = 338;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map4Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map5Skin.exml'] = window.Map5Skin = (function (_super) {
	__extends(Map5Skin, _super);
	function Map5Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsIce1_i(),this._PhysicsItem4_i(),this._PhysicsStar1_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem5_i(),this.role_i()];
	}
	var _proto = Map5Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 16;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 23;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 25;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 65;
		t.y = 453;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 333;
		t.y = 307;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 462;
		t.y = 454;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 404;
		t.y = 210.5;
		t.elementsContent = [this._Image7_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 89.5;
		t.anchorOffsetY = 19.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 39;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 179;
		t.x = 404;
		t.y = 277.5;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.y = 0;
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 17.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 35;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 181;
		t.y = 150.5;
		t.elementsContent = [this._DynamicFramesImage1_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 12;
		t.isPausing = true;
		t.source = "end_1_png";
		t.times = 1;
		t.x = -1;
		t.y = -1;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 93;
		t.x = 613;
		t.y = 162;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 399;
		t.y = 332.5;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 613.5;
		t.y = 109;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 180;
		t.y = 201;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 184;
		t.x = 403;
		t.y = 38;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 126;
		t.y = 24;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 187;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 610;
		t.y = 239;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map5Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map6Skin.exml'] = window.Map6Skin = (function (_super) {
	__extends(Map6Skin, _super);
	function Map6Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsIce1_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsItem6_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map6Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 156;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 16;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 139;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 25;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 180;
		t.y = 453;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 510;
		t.y = 453;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 351;
		t.y = 114.5;
		t.elementsContent = [this._Image6_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 19.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 39;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 140;
		t.x = 349.5;
		t.y = 181.5;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.y = -1;
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 17.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 35;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 180;
		t.y = 279.5;
		t.elementsContent = [this._DynamicFramesImage1_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 12;
		t.isPausing = true;
		t.source = "end_1_png";
		t.times = 1;
		t.x = -1;
		t.y = -1;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 93;
		t.x = 503;
		t.y = 143;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 64.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 129;
		t.x = 95.5;
		t.y = 131;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 503.5;
		t.y = 85;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 93;
		t.x = 609.5;
		t.y = 400;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 610;
		t.y = 352;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 183;
		t.y = 235;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 184;
		t.x = 343;
		t.y = 38;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 126;
		t.y = 24;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 187;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 62.5;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 125;
		t.x = 349.5;
		t.y = 209;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 126;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 349;
		t.y = 290;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map6Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map7Skin.exml'] = window.Map7Skin = (function (_super) {
	__extends(Map7Skin, _super);
	function Map7Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsItem6_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsNeedle5_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map7Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 16;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 139;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 25;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 377;
		t.y = 336;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 332;
		t.y = 336;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 500;
		t.y = 453;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 203;
		t.y = 453;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 439;
		t.y = 242;
		t.elementsContent = [this._Image8_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 86;
		t.x = 332;
		t.y = 94.5;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 73.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 147;
		t.x = 270;
		t.y = 309;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 73.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 147;
		t.x = 439;
		t.y = 309;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 330.5;
		t.y = 146;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 74;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 148;
		t.x = 627;
		t.y = 182;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 620;
		t.y = 134;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 70.5;
		t.y = 428;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 63;
		t.x = 330.5;
		t.y = 36;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 625;
		t.y = 254;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map7Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map8Skin.exml'] = window.Map8Skin = (function (_super) {
	__extends(Map8Skin, _super);
	function Map8Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsNeedle4_i(),this._PhysicsLaser1_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsStar1_i(),this._PhysicsItem5_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem6_i(),this.role_i()];
	}
	var _proto = Map8Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 36;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 22;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 255;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 452;
		t.y = 453;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 442;
		t.y = 243;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 31.5;
		t.groupId = 2;
		t.height = 63;
		t.maskId = 1;
		t.type = 2;
		t.width = 22;
		t.x = 701;
		t.y = 62.5;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.y = 64;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 65;
		t.x = 259.5;
		t.y = 266;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 10.5;
		t.density = 0;
		t.groupId = 2;
		t.height = 21;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 109;
		t.x = 104.5;
		t.y = 242.5;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 620.9;
		t.y = 226;
		t.elementsContent = [this._Image9_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 20;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 40;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 140;
		t.x = 619.4;
		t.y = 293.5;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.y = 0;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 97;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 194;
		t.x = 441.5;
		t.y = 270.5;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 528.5;
		t.y = 66;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 81.5;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 163;
		t.x = 261;
		t.y = 239;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 266.5;
		t.y = 192;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 109;
		t.y = 405.5;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 615.5;
		t.y = 370;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map8Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/Map9Skin.exml'] = window.Map9Skin = (function (_super) {
	__extends(Map9Skin, _super);
	function Map9Skin() {
		_super.call(this);
		this.skinParts = ["gp_floor","role"];
		
		this.elementsContent = [this._PhysicsItem1_i(),this._P2Image1_i(),this._P2Image2_i(),this._P2ForceImage1_i(),this._P2ForceImage2_i(),this._P2Image3_i(),this._P2Image4_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsLaser1_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsItem4_i(),this._PhysicsItem5_i(),this._PhysicsStar1_i(),this._PhysicsItem6_i(),this._PhysicsStar2_i(),this._PhysicsStar3_i(),this._PhysicsItem7_i(),this.role_i()];
	}
	var _proto = Map9Skin.prototype;

	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gp_floor_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "flecha_1_png";
		t.x = 44;
		t.y = 418;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "flecha_1_png";
		t.x = 697;
		t.y = 35;
		return t;
	};
	_proto.gp_floor_i = function () {
		var t = new eui.Group();
		this.gp_floor = t;
		return t;
	};
	_proto._P2Image1_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 472;
		t.x = 17;
		t.y = 248;
		return t;
	};
	_proto._P2Image2_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 239;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 26;
		t.maskId = 1;
		t.rotation = 90;
		t.source = "";
		t.tranRo = 90;
		t.type = 2;
		t.width = 478;
		t.x = 726;
		t.y = 246;
		return t;
	};
	_proto._P2ForceImage1_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 13;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.forceX = 4;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "llegada_1_png";
		t.type = 2;
		t.width = 24;
		t.x = 18;
		t.y = 464;
		return t;
	};
	_proto._P2ForceImage2_i = function () {
		var t = new two.P2ForceImage();
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 12;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.density = 0;
		t.forceX = -4;
		t.height = 24;
		t.isSensor = true;
		t.mass = 0;
		t.source = "";
		t.type = 2;
		t.width = 21;
		t.x = 723.5;
		t.y = 26;
		return t;
	};
	_proto._P2Image3_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 361.5;
		t.anchorOffsetY = 13.5;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 27;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 723;
		t.x = 364;
		t.y = 15.5;
		return t;
	};
	_proto._P2Image4_i = function () {
		var t = new two.P2Image();
		t.alpha = 0;
		t.anchorOffsetX = 366.5;
		t.anchorOffsetY = 11;
		t.anchorX = 0.5;
		t.anchorY = 0.5;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.source = "";
		t.type = 2;
		t.width = 733;
		t.x = 371.5;
		t.y = 475;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 260;
		t.y = 453;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 62.5;
		t.anchorOffsetY = 11.5;
		t.groupId = 2;
		t.height = 23;
		t.maskId = 1;
		t.type = 2;
		t.width = 125;
		t.x = 182;
		t.y = 37.5;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 65;
		t.y = 24;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 127;
		t.y = 24;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 79;
		t.anchorOffsetY = 10.5;
		t.density = 0;
		t.groupId = 2;
		t.height = 21;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 158;
		t.x = 613;
		t.y = 169;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 444.5;
		t.y = 99;
		t.elementsContent = [this._Image9_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 20;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 40;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 140;
		t.x = 443;
		t.y = 166.5;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.y = 0;
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 80;
		t.x = 542;
		t.y = 267;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsItem5_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 80;
		t.x = 392;
		t.y = 425;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 542;
		t.y = 323.5;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem6_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 18.5;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 37;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 140;
		t.x = 257.5;
		t.y = 239;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsStar2_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 65;
		t.y = 62;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsStar3_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 394.5;
		t.y = 374.5;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem7_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto.role_i = function () {
		var t = new two.Role();
		this.role = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 20.5;
		t.density = 0;
		t.fixedRotation = true;
		t.height = 41;
		t.mass = 0;
		t.startSpeedX = -4;
		t.type = 2;
		t.width = 41;
		t.x = 259.5;
		t.y = 90;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 21;
		t.source = "player_1_png";
		t.x = 21;
		t.y = 21;
		return t;
	};
	return Map9Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/maps/MapTempSkin.exml'] = window.MapTempSkin = (function (_super) {
	__extends(MapTempSkin, _super);
	function MapTempSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 484;
		this.width = 720;
		this.elementsContent = [this._PhysicsStar1_i(),this._PhysicsItem1_i(),this._PhysicsLaser1_i(),this._PhysicsNeedle1_i(),this._PhysicsNeedle2_i(),this._PhysicsNeedle3_i(),this._PhysicsItem2_i(),this._PhysicsItem3_i(),this._PhysicsNeedle4_i(),this._PhysicsNeedle5_i(),this._PhysicsNeedle6_i(),this._PhysicsItem4_i(),this._PhysicsNeedle7_i(),this._PhysicsIce1_i(),this._PhysicsNeedle8_i()];
	}
	var _proto = MapTempSkin.prototype;

	_proto._PhysicsStar1_i = function () {
		var t = new two.PhysicsStar();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.density = 0;
		t.height = 50;
		t.isSensor = true;
		t.type = 2;
		t.width = 50;
		t.x = 266.5;
		t.y = 192;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 53;
		t.source = "star_ui_selector_1_png";
		t.x = 24;
		t.y = 25.5;
		return t;
	};
	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 148.5;
		t.y = 92.5;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.left = -1;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(18,12,108,17);
		t.source = "suelo3_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsLaser1_i = function () {
		var t = new two.PhysicsLaser();
		t.alpha = 1;
		t.anchorOffsetX = 79;
		t.anchorOffsetY = 10.5;
		t.density = 0;
		t.groupId = 2;
		t.height = 21;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 2;
		t.width = 158;
		t.x = 126;
		t.y = 246;
		t.elementsContent = [this._DynamicFramesImage1_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._DynamicFramesImage1_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1,2,3";
		t.animation = "idle";
		t.fileName = "rayo";
		t.frameRate = 24;
		t.isPausing = false;
		t.left = -15;
		t.right = -15;
		t.source = "rayo_1_png";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = -43;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -43;
		t.scaleX = -1;
		t.source = "base_rayo_1_png";
		t.y = -7;
		return t;
	};
	_proto._PhysicsNeedle1_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 121;
		t.x = 211;
		t.y = 26;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle2_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 183;
		t.x = 252;
		t.y = 136;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 185;
		t.y = 24;
		return t;
	};
	_proto._PhysicsNeedle3_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 30.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 61;
		t.x = 360;
		t.y = 28;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_1_png";
		t.x = 63;
		t.y = 24;
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49;
		t.blockType = 3;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 98;
		t.isSensor = true;
		t.maskId = 1;
		t.type = 2;
		t.width = 100;
		t.x = 513;
		t.y = 163;
		t.elementsContent = [this._Image11_i(),this._CircleImage1_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "llegada_1_png";
		t.top = 0;
		return t;
	};
	_proto._CircleImage1_i = function () {
		var t = new two.CircleImage();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.second = 2;
		t.source = "spawner_llegada_1_png";
		t.x = 48.5;
		t.y = 57;
		return t;
	};
	_proto._PhysicsItem3_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 140;
		t.x = 511.5;
		t.y = 229.5;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.source = "suelo3_1_png";
		t.y = 0;
		return t;
	};
	_proto._PhysicsNeedle4_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 276;
		t.y = 69;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "spike_2_png";
		t.x = 23;
		t.y = 20;
		return t;
	};
	_proto._PhysicsNeedle5_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 11;
		t.groupId = 2;
		t.height = 22;
		t.maskId = 1;
		t.type = 2;
		t.width = 64;
		t.x = 471.5;
		t.y = 28;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "spike_1_png";
		return t;
	};
	_proto._PhysicsNeedle6_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11.5;
		t.anchorOffsetY = 10;
		t.groupId = 2;
		t.height = 20;
		t.maskId = 1;
		t.type = 2;
		t.width = 23;
		t.x = 342;
		t.y = 84;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "spike_2_png";
		return t;
	};
	_proto._PhysicsItem4_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 105.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 211;
		t.x = 592;
		t.y = 338;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = -2;
		t.right = -2;
		t.scale9Grid = new egret.Rectangle(24,0,455,45);
		t.source = "suelo1_1_png";
		t.y = -2;
		return t;
	};
	_proto._PhysicsNeedle7_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 31.5;
		t.groupId = 2;
		t.height = 63;
		t.maskId = 1;
		t.type = 2;
		t.width = 22;
		t.x = 701;
		t.y = 62.5;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.y = 64;
		return t;
	};
	_proto._PhysicsIce1_i = function () {
		var t = new two.PhysicsIce();
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 19;
		t.fixedRotation = true;
		t.groupId = 2;
		t.height = 38;
		t.maskId = 1;
		t.mass = 0;
		t.type = 2;
		t.width = 113;
		t.x = 180;
		t.y = 300;
		t.elementsContent = [this._DynamicFramesImage2_i()];
		return t;
	};
	_proto._DynamicFramesImage2_i = function () {
		var t = new two.DynamicFramesImage();
		t.allFrames = "idle:1;run:1,2,3,4";
		t.animation = "idle";
		t.fileName = "end";
		t.frameRate = 6;
		t.height = 43;
		t.isPausing = true;
		t.left = -1;
		t.right = -5;
		t.source = "end_1_png";
		t.times = 1;
		t.y = -1;
		return t;
	};
	_proto._PhysicsNeedle8_i = function () {
		var t = new two.PhysicsNeedle();
		t.alpha = 1;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 92.5;
		t.groupId = 2;
		t.height = 185;
		t.maskId = 1;
		t.type = 2;
		t.width = 22;
		t.x = 641;
		t.y = 133.5;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.y = 64;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.x = 0;
		t.y = 125;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "spike_1_png";
		t.x = 0;
		t.y = 187;
		return t;
	};
	return MapTempSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/default/MenuPageSkin.exml'] = window.MenuPageSkin = (function (_super) {
	__extends(MenuPageSkin, _super);
	var MenuPageSkin$Skin6 = 	(function (_super) {
		__extends(MenuPageSkin$Skin6, _super);
		function MenuPageSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","menu_play_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuPageSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_play_1_png";
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
		return MenuPageSkin$Skin6;
	})(eui.Skin);

	function MenuPageSkin() {
		_super.call(this);
		this.skinParts = ["map","gp_map","btn_start"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this.btn_start_i()];
	}
	var _proto = MenuPageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bggame_1_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.31;
		t.scaleY = 1.31;
		t.verticalCenter = 0;
		t.elementsContent = [this.gp_map_i(),this._SoundButton1_i()];
		return t;
	};
	_proto.gp_map_i = function () {
		var t = new eui.Group();
		this.gp_map = t;
		t.height = 490;
		t.width = 743;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.map_i()];
		return t;
	};
	_proto.map_i = function () {
		var t = new two.Map();
		this.map = t;
		t.skinName = "Map0Skin";
		return t;
	};
	_proto._SoundButton1_i = function () {
		var t = new two.SoundButton();
		t.height = 58;
		t.label = "";
		t.skinName = "SoundCheckBoxSkin";
		t.type = "all";
		t.width = 58;
		t.x = 652.43;
		t.y = 32.09;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 199;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -141.5;
		t.width = 363;
		t.elementsContent = [this._TweenGroup1_i()];
		return t;
	};
	_proto._TweenGroup1_i = function () {
		var t = new two.TweenGroup();
		t.runningProps = "[{'type':1,'props':{'y':0}},{'type':2,'props':{'y':20},'time':1200},{'type':2,'props':{'y':0},'time':1200}]";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "titulo_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetX = 66;
		t.anchorOffsetY = 71;
		t.height = 142;
		t.horizontalCenter = 5.5;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 165.5;
		t.width = 142;
		t.skinName = MenuPageSkin$Skin6;
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
	var PreLoadingSkin$Skin7 = 	(function (_super) {
		__extends(PreLoadingSkin$Skin7, _super);
		function PreLoadingSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["thumb","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
		}
		var _proto = PreLoadingSkin$Skin7.prototype;

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
		return PreLoadingSkin$Skin7;
	})(eui.Skin);

	function PreLoadingSkin() {
		_super.call(this);
		this.skinParts = ["bar","txt_loading"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = PreLoadingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bggame_1_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 169;
		t.width = 618.33;
		t.elementsContent = [this.bar_i(),this.txt_loading_i()];
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
		t.skinName = PreLoadingSkin$Skin7;
		return t;
	};
	_proto.txt_loading_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_loading = t;
		t.anchorOffsetX = 0;
		t.font = "txtwhite_black_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -10;
		t.text = "LOADING: 100%";
		t.y = 28.75;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 199;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -121.5;
		t.width = 363;
		t.elementsContent = [this._TweenGroup1_i()];
		return t;
	};
	_proto._TweenGroup1_i = function () {
		var t = new two.TweenGroup();
		t.runningProps = "[{'type':1,'props':{'y':0}},{'type':2,'props':{'y':20},'time':1200},{'type':2,'props':{'y':0},'time':1200}]";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "titulo_1_png";
		t.x = 0;
		t.y = 0;
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
	var SettingBoxSkin$Skin8 = 	(function (_super) {
		__extends(SettingBoxSkin$Skin8, _super);
		function SettingBoxSkin$Skin8() {
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
		var _proto = SettingBoxSkin$Skin8.prototype;

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
		return SettingBoxSkin$Skin8;
	})(eui.Skin);

	var SettingBoxSkin$Skin9 = 	(function (_super) {
		__extends(SettingBoxSkin$Skin9, _super);
		function SettingBoxSkin$Skin9() {
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
		var _proto = SettingBoxSkin$Skin9.prototype;

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
		return SettingBoxSkin$Skin9;
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
		t.skinName = SettingBoxSkin$Skin8;
		return t;
	};
	_proto.btn_effect_i = function () {
		var t = new eui.CheckBox();
		this.btn_effect = t;
		t.label = "";
		t.x = 290.5;
		t.y = 170.5;
		t.skinName = SettingBoxSkin$Skin9;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelItemSkin.exml'] = window.LevelItemSkin = (function (_super) {
	__extends(LevelItemSkin, _super);
	var LevelItemSkin$Skin10 = 	(function (_super) {
		__extends(LevelItemSkin$Skin10, _super);
		function LevelItemSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","rojo_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelItemSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "rojo_1_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "txtwhite_black_fnt";
			t.horizontalCenter = -1;
			t.letterSpacing = 4;
			t.text = "33";
			t.verticalCenter = -3;
			return t;
		};
		return LevelItemSkin$Skin10;
	})(eui.Skin);

	function LevelItemSkin() {
		_super.call(this);
		this.skinParts = ["btn_level","flag_stars","flag_lock"];
		
		this.elementsContent = [this.btn_level_i(),this.flag_stars_i(),this.flag_lock_i()];
	}
	var _proto = LevelItemSkin.prototype;

	_proto.btn_level_i = function () {
		var t = new eui.Button();
		this.btn_level = t;
		t.anchorOffsetX = 0;
		t.label = "33";
		t.width = 75;
		t.x = 0;
		t.y = 0;
		t.skinName = LevelItemSkin$Skin10;
		return t;
	};
	_proto.flag_stars_i = function () {
		var t = new eui.Image();
		this.flag_stars = t;
		t.source = "starssel_1_png";
		t.x = 0;
		t.y = 83;
		return t;
	};
	_proto.flag_lock_i = function () {
		var t = new eui.Image();
		this.flag_lock = t;
		t.source = "rojo_3_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelPageSkin.exml'] = window.LevelPageSkin = (function (_super) {
	__extends(LevelPageSkin, _super);
	var LevelPageSkin$Skin11 = 	(function (_super) {
		__extends(LevelPageSkin$Skin11, _super);
		function LevelPageSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","btn_menuwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelPageSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_menuwin_1_png";
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
		return LevelPageSkin$Skin11;
	})(eui.Skin);

	function LevelPageSkin() {
		_super.call(this);
		this.skinParts = ["txt_stars","list","btn_menu"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group2_i()];
	}
	var _proto = LevelPageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "bggame_1_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scaleX = -1;
		t.source = "bggame_1_png";
		t.top = 0;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.31;
		t.scaleY = 1.31;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.elementsContent = [this._PhysicsItem1_i(),this._PhysicsItem2_i(),this._Group1_i(),this._Scroller1_i(),this.btn_menu_i(),this._SoundButton1_i()];
		return t;
	};
	_proto._PhysicsItem1_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bggame_1_png";
		return t;
	};
	_proto._PhysicsItem2_i = function () {
		var t = new two.PhysicsItem();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.density = 0;
		t.fixedRotation = true;
		t.groupId = 2;
		t.isSensor = false;
		t.maskId = 1;
		t.type = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "suelo_redondo_1_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 8.39;
		t.elementsContent = [this._Image5_i(),this._BitmapLabel1_i(),this.txt_stars_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "star_ui_selector_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "txtwhite_black_fnt";
		t.text = ":";
		t.x = 83.55;
		t.y = 22.12;
		return t;
	};
	_proto.txt_stars_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_stars = t;
		t.font = "txtwhite_black_fnt";
		t.letterSpacing = 4;
		t.text = "63/63";
		t.x = 108.05;
		t.y = 24.49;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 365.18;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "off";
		t.width = 683.91;
		t.x = 29.21;
		t.y = 89.11;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.itemRenderer = two.LevelItem;
		t.itemRendererSkinName = LevelItemSkin;
		t.width = 631.3;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 16;
		t.paddingBottom = 12;
		t.paddingLeft = 22;
		t.paddingRight = 22;
		t.paddingTop = 12;
		t.requestedColumnCount = 7;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.dd = "null";
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new eui.Button();
		this.btn_menu = t;
		t.height = 58;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.width = 58;
		t.x = 34.76;
		t.y = 32.09;
		t.skinName = LevelPageSkin$Skin11;
		return t;
	};
	_proto._SoundButton1_i = function () {
		var t = new two.SoundButton();
		t.height = 58;
		t.label = "";
		t.skinName = "SoundCheckBoxSkin";
		t.type = "all";
		t.width = 58;
		t.x = 652.43;
		t.y = 32.09;
		return t;
	};
	return LevelPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PauseBoxSkin.exml'] = window.PauseBoxSkin = (function (_super) {
	__extends(PauseBoxSkin, _super);
	var PauseBoxSkin$Skin12 = 	(function (_super) {
		__extends(PauseBoxSkin$Skin12, _super);
		function PauseBoxSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","btn_playwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PauseBoxSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_playwin_1_png";
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
		return PauseBoxSkin$Skin12;
	})(eui.Skin);

	var PauseBoxSkin$Skin13 = 	(function (_super) {
		__extends(PauseBoxSkin$Skin13, _super);
		function PauseBoxSkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","btn_menuwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PauseBoxSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_menuwin_1_png";
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
		return PauseBoxSkin$Skin13;
	})(eui.Skin);

	var PauseBoxSkin$Skin14 = 	(function (_super) {
		__extends(PauseBoxSkin$Skin14, _super);
		function PauseBoxSkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","btn_resetwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PauseBoxSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_resetwin_1_png";
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
		return PauseBoxSkin$Skin14;
	})(eui.Skin);

	function PauseBoxSkin() {
		_super.call(this);
		this.skinParts = ["rect","btn_next","btn_menu","btn_restart","gp_center"];
		
		this.elementsContent = [this.rect_i(),this.gp_center_i()];
	}
	var _proto = PauseBoxSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Image();
		this.rect = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "cell_b1_png";
		t.top = 0;
		return t;
	};
	_proto.gp_center_i = function () {
		var t = new eui.Group();
		this.gp_center = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 234;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.width = 293;
		t.elementsContent = [this._Image1_i(),this.btn_next_i(),this.btn_menu_i(),this.btn_restart_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pausa_bg_1_png";
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.anchorOffsetX = 51.5;
		t.anchorOffsetY = 51.5;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.x = 147.18;
		t.y = 139.52;
		t.skinName = PauseBoxSkin$Skin12;
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new eui.Button();
		this.btn_menu = t;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.x = 18.68;
		t.y = 151.02;
		t.skinName = PauseBoxSkin$Skin13;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.x = 202.68;
		t.y = 151.02;
		t.skinName = PauseBoxSkin$Skin14;
		return t;
	};
	return PauseBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ResultBoxSkin.exml'] = window.ResultBoxSkin = (function (_super) {
	__extends(ResultBoxSkin, _super);
	var ResultBoxSkin$Skin15 = 	(function (_super) {
		__extends(ResultBoxSkin$Skin15, _super);
		function ResultBoxSkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","btn_playwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResultBoxSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_playwin_1_png";
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
		return ResultBoxSkin$Skin15;
	})(eui.Skin);

	var ResultBoxSkin$Skin16 = 	(function (_super) {
		__extends(ResultBoxSkin$Skin16, _super);
		function ResultBoxSkin$Skin16() {
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
						new eui.SetProperty("_Image1","source","btn_menuwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResultBoxSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_menuwin_1_png";
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
		return ResultBoxSkin$Skin16;
	})(eui.Skin);

	var ResultBoxSkin$Skin17 = 	(function (_super) {
		__extends(ResultBoxSkin$Skin17, _super);
		function ResultBoxSkin$Skin17() {
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
						new eui.SetProperty("_Image1","source","btn_resetwin_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResultBoxSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_resetwin_1_png";
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
		return ResultBoxSkin$Skin17;
	})(eui.Skin);

	function ResultBoxSkin() {
		_super.call(this);
		this.skinParts = ["rect","btn_next","btn_menu","btn_restart","gp_stars","gp_center"];
		
		this.elementsContent = [this.rect_i(),this.gp_center_i()];
	}
	var _proto = ResultBoxSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Image();
		this.rect = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "cell_b1_png";
		t.top = 0;
		return t;
	};
	_proto.gp_center_i = function () {
		var t = new eui.Group();
		this.gp_center = t;
		t.anchorOffsetX = 0;
		t.height = 408;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.width = 299;
		t.elementsContent = [this._Image1_i(),this.btn_next_i(),this.btn_menu_i(),this.btn_restart_i(),this.gp_stars_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bgwin_1_png";
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.anchorOffsetX = 51.5;
		t.anchorOffsetY = 51.5;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.x = 150.5;
		t.y = 299.5;
		t.skinName = ResultBoxSkin$Skin15;
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new eui.Button();
		this.btn_menu = t;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.x = 22;
		t.y = 311;
		t.skinName = ResultBoxSkin$Skin16;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.icon = "btn_startgame_png";
		t.label = "";
		t.x = 206;
		t.y = 311;
		t.skinName = ResultBoxSkin$Skin17;
		return t;
	};
	_proto.gp_stars_i = function () {
		var t = new eui.Group();
		this.gp_stars = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 132;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 66.5;
		t.anchorOffsetY = 66;
		t.source = "star_complete_1_png";
		t.x = 68;
		t.y = 86;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 66.5;
		t.anchorOffsetY = 66;
		t.source = "star_complete_1_png";
		t.x = 156;
		t.y = 67;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 66.5;
		t.anchorOffsetY = 66;
		t.source = "star_complete_1_png";
		t.x = 243;
		t.y = 85;
		return t;
	};
	return ResultBoxSkin;
})(eui.Skin);
var __reflect=this&&this.__reflect||function(t,e,o){t.__class__=e,o?o.push(e):o=[e],t.__types__=t.__types__?o.concat(t.__types__):o},__extends=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);o.prototype=e.prototype,t.prototype=new o},two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.blockType=0,t.style=0,t.density=1,t.type=0,t.tranRo=0,t.mass=0,t.groupId=0,t.maskId=0,t.damping=0,t.angularDamping=0,t.fixedRotation=!1,t.isSensor=!1,t.blockType=0,t}return __extends(o,e),o.prototype.collideStart=function(t,e){return!1},o.prototype.collideEnd=function(t,e){return!1},o.prototype.getSpeed=function(){return this.body.getVelocity()},o.prototype.updateSpeedX=function(t){this.body.setVelocity(t,this.body.getVelocity().y)},o.prototype.updateSpeedY=function(t){this.body.setVelocity(this.body.getVelocity().x,t)},o.prototype.updateSpeed=function(t,e){this.body.setVelocity(t,e)},o.prototype.force=function(t,e){this.body.body.ApplyImpulse(new Box2D.Common.Math.b2Vec2(t,e),new Box2D.Common.Math.b2Vec2(0,0))},o.prototype.removed=function(){e.prototype.removed.call(this),this.body=null},o.prototype.destroy=function(){t.removeSelf(this),this.body=null},o}(t.BaseGroup);t.PhysicsItem=e,__reflect(e.prototype,"two.PhysicsItem",["two.IBlock","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(){function e(){this.urlType=0,this.netType=0,this.needMsg=!1,this.apis=[];var t=egret.getQualifiedClassName(this);this.apiName=t.substring(4,t.length-5)}return e.prototype.responseBefore=function(){},e.prototype.responseAfter=function(){},e.prototype.register=function(t,e){this.requestProxyKey=t,this.requestCode=e},e.prototype.send=function(e,o,n){var i=this;if(this.sendData=e,this.call=o,this.needMsg=n!==!1,this.urlType="1"==one.getOption("noNet")?0:this.urlType,0==this.netType||1==this.netType&&"1"==one.getOption("noNet")){var r=t.net.singleServer.setData(this.apiName,e);one.callLater(function(){i.onResponse(r)},1)}else t.HttpOperator.Instance().onSendCommonRequest(this.apiName,e,this.urlType,this.onResponse.bind(this))},e.prototype.getRequest=function(){return this.sendData},e.prototype.getResponse=function(){return this.proxyData},e.prototype.addRefreshApi=function(t){this.apis.indexOf(t)<0&&this.apis.push(t)},e.prototype.onResponse=function(e){if(0==e.code){this.proxyData=e.data,this.apis=[this.apiName],this.responseBefore();for(var o=this.apis,n=0;n<o.length;n++)t.onRefreshApi(o[n]);this.responseAfter()}else this.needMsg;if(this.call){var i=this.call;this.call=null,i(e)}},e.prototype.dealChange=function(t){this.proxyData.changeGoods=[];for(var e=0;e<t.length;e++){var o=t[e],n=(o.sqlId,void 0);n&&this.proxyData.changeGoods.push(n)}},e.prototype.saveLocal=function(e,o){egret.localStorage.setItem(t.Storage.getStorageKey(e),JSON.stringify({code:0,msg:"OK",data:o}))},e}();t.BaseProxy=e,__reflect(e.prototype,"two.BaseProxy")}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function e(){}return e.prototype.saveMapLevel=function(t,e,o){for(var n=this.getUser(t),i=n.maps,r=!1,s=0;s<i.length;s++)if(i[s].mapId==e){i[s].star=Math.max(i[s].star,o),r=!0;break}r||i.push({mapId:e,star:o}),this.$saveUser(n)},e.prototype.getUser=function(e){var o=t.Storage.getItem("users");return o?JSON.parse(o):RES.getRes("allApis_json").User_getUser_json.data},e.prototype.$saveUser=function(e){t.Storage.setItem("users",JSON.stringify(e))},e.prototype.clear=function(){t.Storage.removeItem("users")},e}();e.ServerUserObj=o,__reflect(o.prototype,"two.net.ServerUserObj")}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.blockType=0,t.type=0,t.style=0,t.density=1,t.tranRo=0,t.mass=0,t.groupId=0,t.maskId=0,t.damping=0,t.angularDamping=0,t.fixedRotation=!1,t.isSensor=!1,t.blockType=0,t}return __extends(o,e),o.prototype.collideStart=function(t,e){return!1},o.prototype.collideEnd=function(t,e){return!1},o.prototype.updateSpeedX=function(t){this.body.setVelocity(t,this.body.getVelocity().y)},o.prototype.updateSpeedY=function(t){this.body.setVelocity(this.body.getVelocity().x,t)},o.prototype.updateSpeed=function(t,e){this.body.setVelocity(t,e)},o.prototype.getSpeed=function(){return this.body.getVelocity()},o.prototype.force=function(t,e){this.body.body.ApplyImpulse(new Box2D.Common.Math.b2Vec2(t,e),new Box2D.Common.Math.b2Vec2(0,0))},o.prototype.removed=function(){e.prototype.removed.call(this),this.body=null},o.prototype.destroy=function(){t.removeSelf(this),this.body=null},o}(t.AnchorImage);t.P2Image=e,__reflect(e.prototype,"two.P2Image",["two.IBlock","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.blockType=0,e.blockType=5,e}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this)},e}(t.PhysicsItem);t.PhysicsNeedle=e,__reflect(e.prototype,"two.PhysicsNeedle")}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.getSizes=function(){var t=this;RES.getResAsync(this.fileName+"_png",function(){for(var e=RES.getRes(t.fileName+"_png"),o=e.getPixels(0,0,e.textureWidth,e.textureHeight),n={file:t.fileName+".png",frames:{}},i=0;i<t.row;i++)for(var r=0;r<t.col;r++){var s=t.str.charAt(i*t.col+r);n.frames[s]=t.ansSize(o,r,i,s)}console.log(JSON.stringify(n,null,4))},this)},t.ansSize=function(t,e,o,n){for(var i=-1,r=0;r<this.itemW;r+=1){for(var s=!0,a=0;a<this.itemH;a++){var l=4*r+this.itemW*e*4+(a+o*this.itemH)*this.W*4;if(0!=t[l]||0!=t[l+1]||0!=t[l+2]||0!=t[l+3]){s=!1;break}}if(s){if(i>=0)return{x:i+e*this.itemW,y:o*this.itemH,w:r-i+1,h:this.itemH,offX:0,offY:0,sourceW:r-i+1,sourceH:this.itemH}}else-1==i&&(i=r)}},t.str="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@°+=*$£€<>%",t.row=9,t.col=11,t.itemW=46,t.itemH=55,t.W=512,t.fileName="txtwhite_black",t}();t.FontUtils=e,__reflect(e.prototype,"two.FontUtils")}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.prototype.getTheme=function(t,e,o,n){function i(t){e.call(n,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),o.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT))},t}();t.ThemeAdapter=e,__reflect(e.prototype,"two.ThemeAdapter",["eui.IThemeAdapter"])}(two||(two={}));var two;!function(t){function e(e,i,r){null==o&&(o=new n),i.length>0&&(RES.createGroup("tempGp",i,!0),e.push("tempGp")),t.showBox(o,void 0,!0),o.setProgress(0,100),one.loaderManager.loadGroups(e,100,function(e,n){o.setProgress(Math.floor(e/n*100),100),e==n&&(t.closeBox(o,!0),r())})}var o;t.showAssetsLoading=e;var n=function(t){function e(){return t.call(this,"LoadingAssetsPanel")||this}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this),this.setProgress(0,100)},e.prototype.setProgress=function(t,e){this.txt_progress.text=t+"/"+e,this.gp_bar.value=Math.floor(t/e*100)},e}(t.BaseComponent);__reflect(n.prototype,"LoadingAssetsPanel")}(two||(two={}));var two;!function(t){function e(e,o){void 0===o&&(o=0),null==n&&(n=new r),i.push(e),null==n.parent&&o>0?1==i.length&&one.setTimeout(function(){i.length>0&&t.showBox(n,0,!0)},o):t.showBox(n,0,!0)}function o(e){var o=i.indexOf(e);o>=0&&i.splice(o,1),n&&n.parent&&0==i.length&&t.closeBox(n,!0)}var n,i=[];t.showProxyLoading=e,t.closeProxyLoading=o;var r=function(t){function e(){return t.call(this,"LoadingProxyPanel")||this}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this)},e}(t.BaseComponent);__reflect(r.prototype,"LoadingProxyPanel")}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(){function e(){this.localUId="1",this.userObj=new t.ServerUserObj}return e.prototype.setData=function(t,e){switch(t+"Proxy"){case"Games_loginProxy":var o={userId:this.localUId,openId:"sdaflafsdfsdfsdf",json:JSON.stringify({}),user:JSON.stringify(e.user)};return{code:0,uniqueHashCode:"",msg:"success",data:o};case"User_getUserProxy":var n=e.uId,i=this.userObj.getUser(n);return{code:0,uniqueHashCode:"",msg:"success",data:i};case"User_setInfoProxy":var r=e;return i=this.userObj.getUser(this.localUId),one.copyToObj(i,r),this.userObj.$saveUser(i),{code:0,uniqueHashCode:"",msg:"success",data:{}};case"User_passLevelProxy":var s=e;return i=this.userObj.getUser(this.localUId),one.copyToObj(i,r),this.userObj.saveMapLevel(i.uId,s.mapId,s.star),{code:0,uniqueHashCode:"",msg:"success",data:{}}}return{code:0,uniqueHashCode:e.uniqueHashCode,msg:"success",data:{}}},e}();t.SingleServer=e,__reflect(e.prototype,"two.net.SingleServer"),t.singleServer=new e}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){function e(t,e){if(void 0===e&&(e=1),t=Math.floor(t),1e3>t)return t+"";for(var o=0,n=t;n>=10;)n/=10,o++;var i=o%3;o-=i;for(var r=0;o>r;r++)t/=10;t=Math.floor(t*Math.pow(10,e))/Math.pow(10,e);var s=["","k","m","b","t","a","b","c","d","e","f","g","h"];return t+s[o/3]}t.formatCash=e}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.Instance=function(){return this.instance||(this.instance=new e),this.instance},e.prototype.sendRequest=function(t,e,o){var n="";for(var i in e){var r=e[i].replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"");n+=i+"="+r+"&"}if(0!=n.length){n=n.substring(0,n.length-1);var s=new egret.HttpRequest;s.responseType=egret.HttpResponseType.TEXT,s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.open(t,egret.HttpMethod.POST),s.send(n),s.addEventListener(egret.Event.COMPLETE,function(e){if(!s.response)return void console.log("error "+t);var n=JSON.parse(s.response);o&&o(n)},this),s.addEventListener(egret.IOErrorEvent.IO_ERROR,function(){console.log("get error : "+event)},this),s.addEventListener(egret.ProgressEvent.PROGRESS,function(t){console.log("get progress : "+Math.floor(100*t.bytesLoaded/t.bytesTotal)+"%")},this)}},e.prototype.onSendCommonRequest=function(e,o,n,i){if(console.log(e,o),0==n){var r,s=egret.localStorage.getItem(t.Storage.getStorageKey(e));r=s?JSON.parse(s):RES.getRes("allApis_json")[e+"_json"],one.callLater(function(){i(r)},1)}else if(1==n){var a={};a.data=JSON.stringify(o),e=e.charAt(0).toLowerCase()+e.substr(1);var l=e.replace(/_/g,"/");this.sendRequest(one.getOption("rankUrl")+l,o,i)}else if(2==n){var a={};a.data=JSON.stringify(o),e=e.charAt(0).toLowerCase()+e.substr(1);var l=e.replace(/_/g,"/");this.sendRequest(one.getOption("apiUrl")+l,o,i)}},e.instance=null,e}();t.HttpOperator=e,__reflect(e.prototype,"two.HttpOperator"),t.operator=new e}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["userId","openId","json","user"],e.netType=1,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Games_loginProxy=e,__reflect(e.prototype,"two.Games_loginProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.netType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Games_updateProxy=e,__reflect(e.prototype,"two.Games_updateProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["rankList","myInfo"],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Rank_getRankProxy=e,__reflect(e.prototype,"two.Rank_getRankProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Rank_setRankProxy=e,__reflect(e.prototype,"two.Rank_setRankProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["uId","name","avatar","sex","maps"],e.netType=1,e.needSend=!0,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e.prototype.passLevel=function(t,e){for(var o=this.getResponse().maps,n=0;n<o.length;n++)if(o[n].mapId==t)return void(o[n].star=Math.max(o[n].star,e));o.push({mapId:t,star:e})},e.Channel_Id=0,e.Game_Id=0,e}(t.BaseProxy);t.User_getUserProxy=e,__reflect(e.prototype,"two.User_getUserProxy")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.responseKeys=[],t.netType=1,t.needSend=!0,t}return __extends(o,e),o.getInstance=function(){return null==o._instance&&(o._instance=new o),o._instance},o.prototype.responseBefore=function(){t.User_getUserProxy.getInstance().passLevel(this.getRequest().mapId,this.getRequest().star)},o}(t.BaseProxy);t.User_passLevelProxy=e,__reflect(e.prototype,"two.User_passLevelProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.netType=0,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e.prototype.responseBefore=function(){},e}(t.BaseProxy);t.User_setInfoProxy=e,__reflect(e.prototype,"two.User_setInfoProxy")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this,"BoxBg")||this;return t._title="",t._hide=!1,t}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeTopBox(),o.dispatchEventWith("onClose")},this),this.btn_close.visible=!this._hide,this.txt_title.text=this._title},Object.defineProperty(o.prototype,"title",{get:function(){return this._title},set:function(t){this._title=t,this.txt_title&&(this.txt_title.text=this._title)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"hide",{get:function(){return this._hide},set:function(t){this._hide=t,this.btn_close&&(this.btn_close.visible=!this._hide)},enumerable:!0,configurable:!0}),o}(t.BaseComponent);t.BoxBg=e,__reflect(e.prototype,"two.BoxBg")}(two||(two={}));var two;!function(t){function e(e){var n=new o("关闭","OK",e,"");return n.once("onButton1",function(){},this),n.once("onButton2",function(){n.dispatchEventWith("onOK")},this),t.showBox(n),n}t.showConfirm=e;var o=function(e){function o(t,o,n,i,r,s,a){void 0===r&&(r="ConfirmBox"),void 0===s&&(s=""),void 0===a&&(a="");var l=e.call(this,r)||this;return l.lb1=t,l.lb2=o,l.btnSkin1=s,l.btnSkin2=a,l.msg=n,l.title=i,l}return __extends(o,e),o.prototype.created=function(){var e=this;null==this.lb1?this.btn1.parent.removeChild(this.btn1):(""!=this.lb1&&(this.btn1.label=this.lb1),""!=this.btnSkin1&&(this.btn1.skinName=this.btnSkin1),this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(e),e.dispatchEventWith("onButton1")},this)),null==this.lb2?this.btn2.parent.removeChild(this.btn2):(""!=this.lb2&&(this.btn2.label=this.lb2),""!=this.btnSkin2&&(this.btn2.skinName=this.btnSkin2),this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(e),e.dispatchEventWith("onButton2")},this)),this.txt_msg&&(this.txt_msg.text=this.msg),this.icon_title&&(this.icon_title.source=this.title)},o.prototype.added=function(){},o.prototype.removed=function(){},o}(t.BaseComponent);t.ConfirmBox=o,__reflect(o.prototype,"two.ConfirmBox")}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.getConfigByID=function(e){return t.LocalMap.getDataByNameAndID("Share",e)},e.getAllCfgs=function(){return t.LocalMap.getJsonList("Share")},e}();t.ShareConfig=e,__reflect(e.prototype,"two.ShareConfig")}(two||(two={}));var two;!function(t){function e(e,o){var n=new eui.Image("cell_b1_png");t.sceneLayer.parent.addChild(n),n.percentWidth=n.percentHeight=100,n.alpha=0,egret.Tween.get(n).to({alpha:1},500).call(function(){t.closeAllBoxes(!0),e()}).wait(100).to({alpha:0},500).call(function(){t.removeSelf(n),o&&o()})}function o(t,e,o,n){t&&(t.text=one.formatSecond(e,o));var i=one.secondUtils.addSecond(e,function(e){t&&(t.text=one.formatSecond(e,o)),0>=e&&(one.secondUtils.removeSecond(i),n&&n())});return i}var n=function(){function e(){}return e.init=function(o){o.addEventListener(egret.Event.ACTIVATE,function(){one.setTimeout(function(){},100)},e),o.addEventListener(egret.Event.DEACTIVATE,function(){"HomePage"==t.currentPageType},e)},e.saveLocalGame=function(){var e=this,o=t.User_getUserProxy.getInstance().getResponse();if(o){var n={maps:o.maps},i=Date.now();if(i<this.nextSaveTime)return void(this.hasSaveChanged=!0);t.User_setInfoProxy.getInstance().send(n),this.nextSaveTime=i+1e3,this.saveSecId=one.setTimeout(function(){e.hasSaveChanged&&(e.hasSaveChanged=!1,e.saveLocalGame())},1e3)}},e.saveServerGame=function(){t.Games_updateProxy.getInstance().send({gameId:t.User_getUserProxy.Game_Id,chanId:t.User_getUserProxy.Channel_Id,userId:t.User_getUserProxy.getInstance().getResponse().uId,json:JSON.stringify(t.User_setInfoProxy.getInstance().getRequest())})},e.saveSecId=-1,e.nextSaveTime=0,e.hasSaveChanged=!1,e}();t.GameCtr=n,__reflect(n.prototype,"two.GameCtr"),t.transitAnimation=e,t.addSecondTimer=o}(two||(two={}));var two;!function(t){function e(e,n,i){if("MenuPage"!=t.currentPageType){var r=new o(e);t.showTipView(r),r.x=n,r.y=i,r.touchEnabled=r.touchChildren=!1}}t.showMessageTip=e;var o=function(t){function e(e){var o=t.call(this,"GoldGainTip")||this;return o.tipStr=e,o}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.txt_gold.text=this.tipStr+"",this.gp.alpha=0,egret.Tween.get(this.gp).to({y:-100},800).call(function(){e.parent&&e.parent.removeChild(e)}),egret.Tween.get(this.gp).to({alpha:1},200).wait(400).to({alpha:0},200)},e}(t.BaseComponent);t.GoldGainTip=o,__reflect(o.prototype,"two.GoldGainTip")}(two||(two={}));var two;!function(t){var e=function(e){function o(t){void 0===t&&(t=1);var o=e.call(this,"HomePage")||this;return o.level=t,o.stars=0,o}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),one.soundManager.playMusic("background"),this.txt_level.text=this.level+"",this.reset(),this.setStars(),this.gp_map.removeChildren(),this.map=new t.Map("Map"+this.level),this.gp_map.addChild(this.map),t.addTap(this.btn_pause,function(){one.soundManager.playSound("btnclick"),o.map.pause();var e=new t.PauseBox;t.showBox(e,0,!0),e.once("onNext",function(){o.map.resume()},null),e.once("onRestart",function(){t.getFreeGift("RestartLevel",function(t){t&&o.resetMap(o.level)})},null)})},o.prototype.start=function(){this.map.start()},o.prototype.reset=function(){this.stars=0},o.prototype.setStars=function(){this.flag_stars.source="ui_stars_"+(this.stars+1)+"_png"},o.prototype.added=function(){e.prototype.added.call(this),one.monitor.on("onNextLevel",this.onNextLevel,this),one.monitor.on("onReborn",this.onReborn,this),one.monitor.on("onGainStar",this.onGainStar,this)},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("onNextLevel",this.onNextLevel,this),one.monitor.off("onReborn",this.onReborn,this),one.monitor.off("onGainStar",this.onGainStar,this)},o.prototype.onReborn=function(e){var o=this;one.soundManager.playSound("gameover"),one.setTimeout(function(){t.getFreeGift("RestartLevel",function(t){t&&o.resetMap(o.level)})},500)},o.prototype.onNextLevel=function(e){var o=this;one.soundManager.playSound("ganarmusica"),t.User_passLevelProxy.getInstance().send({mapId:this.level,star:this.stars},function(e){var n=new t.ResultBox(o.stars);t.showBox(n,0,!0),n.once("onNext",function(){t.getFreeGift("NextLevel",function(t){t&&o.resetMap(o.level+1)})},null),n.once("onRestart",function(){t.getFreeGift("RestartLevel",function(t){t&&o.resetMap(o.level)})},null)})},o.prototype.resetMap=function(e){var o=this;return this.level=e,this.level>21?void t.transitAnimation(function(){t.changePage("LevelPage")}):void t.transitAnimation(function(){o.gp_map.removeChildren(),o.reset(),o.setStars(),o.txt_level.text=o.level+"",o.map=new t.Map("Map"+o.level),o.gp_map.addChild(o.map)},function(){o.start()})},o.prototype.onGainStar=function(){this.stars++,this.setStars()},o.prototype.refreshApi=function(t){switch(e.prototype.refreshApi.call(this,t),t){case"":}},o.prototype.refreshData=function(t,o){switch(e.prototype.refreshData.call(this,t,o),t){case"":}},o}(t.BaseComponent);t.HomePage=e,__reflect(e.prototype,"two.HomePage"),t.setClassMap("HomePage","two.HomePage")}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this)},e.prototype.dataChanged=function(){t.prototype.dataChanged.call(this),null!=this.data.level&&(this.flag_lock.visible=this.data.isLock,this.enabled=!this.data.isLock,this.btn_level.label=this.data.level+"",this.flag_stars.source="starssel_"+(this.data.stars+1)+"_png")},e}(t.BaseItemRenderer);t.LevelItem=e,__reflect(e.prototype,"two.LevelItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this,"LevelPage")||this}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),t.addTap(this.btn_menu,function(){t.transitAnimation(function(){t.changePage("MenuPage")})});var n=this.list.dataProvider;n.removeAll();for(var i=0,r=t.User_getUserProxy.getInstance().getResponse().maps,s=0;21>s;s++){var a=r[s]?r[s].star:0;i+=a,n.addItem({level:s+1,stars:a,isLock:!r[s]&&s!=r.length})}t.addChange(this.list,function(){t.getFreeGift("StartLevel",function(e){one.soundManager.playSound("btnclick"),e&&t.transitAnimation(function(){var e=t.changePage("HomePage",void 0,o.list.selectedItem.level);e.start()})})}),this.txt_stars.text=i+"/63"},o}(t.BaseComponent);t.LevelPage=e,__reflect(e.prototype,"two.LevelPage",["eui.UIComponent","egret.DisplayObject"]),t.setClassMap("LevelPage","two.LevelPage")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.world=new t.World;for(var n=0;n<this.numChildren;n++){var i=this.getChildAt(n);0!=i.type&&this.world.addItem(i.width,i.height,i,{x:i.x,y:i.y,tranRo:i.tranRo,mass:i.mass,groupId:i.groupId,maskId:i.maskId,damping:i.damping,angularDamping:i.angularDamping,fixedRotation:i.fixedRotation,isSensor:i.isSensor,density:i.density},i.type)}this.world.start(),t.addTap(this,function(){o.role.canJump()&&(one.soundManager.playSound("rafaga"),o.world.setGravity(0,-o.world.getGravity().y))}),one.keyCtr.addMonitor(this,[],[{code:one.KeyCodeType.enterCode,item:this},{code:one.KeyCodeType.leftCode,item:this,call:function(){o.role.updateSpeedX(-4)}},{code:one.KeyCodeType.rightCode,item:this,call:function(){o.role.updateSpeedX(4)}},{code:one.KeyCodeType.upCode,item:this,call:function(){o.world.setGravity(0,-10),o.role.updateSpeedY(0),o.role.force(0,-10)}},{code:one.KeyCodeType.downCode,item:this,call:function(){o.world.setGravity(0,10),o.role.updateSpeedY(0),o.role.force(0,10)}}]),this.initView()},o.prototype.pause=function(){this.world.pause()},o.prototype.resume=function(){this.world.resume()},o.prototype.start=function(){this.role.start(),this.shake=new one.Shake,this.shake.initTarget(this)},o.prototype.initView=function(){this.gp_floor.removeChildren()},o.prototype.added=function(){e.prototype.added.call(this),one.monitor.on("onShowBlood",this.onShowBlood,this),one.monitor.on("onShowStart",this.onShowStart,this),one.monitor.on("onShake",this.onShake,this)},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("onShowBlood",this.onShowBlood,this),one.monitor.off("onShowStart",this.onShowStart,this),one.monitor.off("onShake",this.onShake,this),one.keyCtr.removeMonitor(this),this.world&&(this.world.stop(),this.world=null)},o.prototype.onShake=function(){this.shake.stop(),this.shake.shake(.1,12,0,4)},o.prototype.onShowBlood=function(e){var o=new t.AnchorImage("mancha_1_png");o.anchorX=o.anchorY=.5,this.gp_floor.addChild(o),o.x=this.role.x,o.y=this.role.y,o.alpha=0,egret.Tween.get(o).to({alpha:1},300)},o.prototype.onShowStart=function(e){var o=new t.AnchorImage("spawner_menu_1_png");o.anchorX=o.anchorY=.5,o.x=e.x,o.y=e.y,o.alpha=0,o.second=2,this.gp_floor.addChild(o),egret.Tween.get(o).to({alpha:1},200).wait(300).to({alpha:0},200).call(function(){t.removeSelf(o)})},o.prototype.refreshApi=function(t){switch(e.prototype.refreshApi.call(this,t),t){case"":}},o.prototype.refreshData=function(t,o){switch(e.prototype.refreshData.call(this,t,o),t){case"":}},o}(t.BaseComponent);t.Map=e,__reflect(e.prototype,"two.Map"),t.setClassMap("Map","two.Map")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this,"MenuPage")||this;return t.timeId=-1,t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this),t.addTap(this.btn_start,function(){one.soundManager.playSound("btnclick"),t.transitAnimation(function(){t.changePage("LevelPage")})}),this.btn_start.scaleX=this.btn_start.scaleY=1.5,this.btn_start.rotation=5,egret.Tween.get(this.btn_start,{loop:!0}).to({scaleX:1.55,scaleY:1.55},600).to({scaleX:this.btn_start.scaleX,scaleY:this.btn_start.scaleY},600),egret.Tween.get(this.btn_start,{loop:!0}).to({rotation:-this.btn_start.rotation},300).to({rotation:this.btn_start.rotation},300),this.start()},o.prototype.start=function(){var t=this;this.timeId=one.setTimeout(function(){t.map.start()},1e3)},o.prototype.added=function(){e.prototype.added.call(this),one.monitor.on("onNextLevel",this.onNextLevel,this)},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("onNextLevel",this.onNextLevel,this),one.clearTimeout(this.timeId),egret.Tween.removeTweens(this.btn_start)},o.prototype.onNextLevel=function(e){this.gp_map.removeChildren(),this.map=new t.Map("Map0"),this.gp_map.addChild(this.map),this.start()},o}(t.BaseComponent);t.MenuPage=e,__reflect(e.prototype,"two.MenuPage"),t.setClassMap("MenuPage","two.MenuPage")}(two||(two={}));var two;!function(t){function e(e){var n=new o(e);return n.percentWidth=n.percentHeight=100,t.showTipView(n),n}t.showTip=e;var o=function(t){function e(e){var o=t.call(this,"MessageTip")||this;return o.message=e,o}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.messageTxt.text=this.message,this.alpha=0,egret.Tween.get(this).to({alpha:1},200).wait(1e3).to({alpha:0},200).call(function(){e.parent.removeChild(e)},this)},e}(t.BaseComponent);t.MessageTip=o,__reflect(o.prototype,"two.MessageTip")}(two||(two={}));var two;!function(t){var e=function(){function t(t,e,o){this.body=t,this.item=e,this.world=o,e.body=this,t.SetUserData({displays:[e]})}return t.prototype.getBlock=function(){var t=this.body.GetUserData();return t&&t.displays?t.displays[0]:null},t.prototype.getVelocity=function(){var t=this.body.GetLinearVelocity();return{x:t.x,y:t.y}},t.prototype.setVelocity=function(t,e){this.body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(t,e))},t.prototype.changeSensor=function(t){this.body.GetFixtureList().SetSensor(t)},t.prototype.getPosition=function(){var t=this.body.GetPosition();return{x:30*t.x,y:30*t.y}},t.prototype.removeSelfFromWorld=function(){this.world&&(this.world.removeBody(this),this.world=null)},t.prototype.changeType=function(t){1==t?t=Box2D.Dynamics.b2Body.b2_dynamicBody:2==t&&(t=Box2D.Dynamics.b2Body.b2_staticBody),this.body.SetType(t)},t.prototype.changeDensity=function(t){this.body.GetFixtureList().SetDensity(1)},t.prototype.destroy=function(){this.body.SetUserData(null),this.body=null,this.world=null,this.item=null},t}();t.P2Body=e,__reflect(e.prototype,"two.P2Body")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.isSensor=!0,e.density=0,e._forceX=0,e._forceY=0,e.blockType=4,e}return __extends(e,t),e.prototype.collideStart=function(t,e){if(0!=this._forceX)0!=this._forceX&&t.updateSpeedX(this._forceX);else if(0!=this._forceY){var o=this.body.body.GetWorld();o.SetGravity(new Box2D.Common.Math.b2Vec2(0,-o.GetGravity().y))}return!1},e.prototype.created=function(){t.prototype.created.call(this),this.visible=!1},Object.defineProperty(e.prototype,"forceX",{get:function(){return this._forceX},set:function(t){this._forceX=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"forceY",{get:function(){return this._forceY},set:function(t){this._forceY=t},enumerable:!0,configurable:!0}),e}(t.P2Image);t.P2ForceImage=e,__reflect(e.prototype,"two.P2ForceImage")}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.prototype.getAsset=function(t,e,o){function n(n){e.call(o,n,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?n(i):one.loaderManager.load([t],100,function(){n(RES.getRes(t))})}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();t.AssetAdapter=e,__reflect(e.prototype,"two.AssetAdapter",["eui.IAssetAdapter"])}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this,"PauseBox")||this}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.gp_center.verticalCenter=-640,egret.Tween.get(this.gp_center).to({verticalCenter:0},800,egret.Ease.backOut),t.addTap(this.btn_next,function(){one.soundManager.playSound("btnclick"),o.closeBox(function(){o.dispatchEventWith("onNext")})}),t.addTap(this.btn_menu,function(){one.soundManager.playSound("btnclick"),t.transitAnimation(function(){t.changePage("LevelPage")})}),t.addTap(this.btn_restart,function(){one.soundManager.playSound("btnclick"),o.dispatchEventWith("onRestart")}),this.btn_next.scaleX=this.btn_next.scaleY=1,this.btn_next.rotation=5,egret.Tween.get(this.btn_next,{loop:!0}).to({scaleX:1.1,scaleY:1.1},600).to({scaleX:1,scaleY:1},600),egret.Tween.get(this.btn_next,{loop:!0}).to({rotation:-this.btn_next.rotation},300).to({rotation:this.btn_next.rotation},300)},o.prototype.closeBox=function(e){var o=this;this.rect.visible=!1,egret.Tween.get(this.gp_center).to({verticalCenter:-640},800,egret.Ease.backIn).call(function(){t.closeBox(o,!0),e()})},o.prototype.removed=function(){e.prototype.removed.call(this),egret.Tween.removeTweens(this.btn_next)},o}(t.BaseComponent);t.PauseBox=e,__reflect(e.prototype,"two.PauseBox",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.isCollide=!1,t.blockType=6,t}return __extends(o,e),o.prototype.collideStart=function(e,o){var n=this;if(1==e.blockType){if(this.isCollide)return!1;this.isCollide=!0;var i=this.getChildAt(0);i.play("run",1),i.once(egret.Event.COMPLETE,function(){n.body.removeSelfFromWorld(),one.soundManager.playSound("hielobreack");var e=new one.DynamicPT("colliside","ice_particle");n.parent.addChild(e),e.play(100),e.x=n.x,e.y=n.y,t.removeSelf(i)},this)}return!1},o}(t.PhysicsItem);t.PhysicsIce=e,__reflect(e.prototype,"two.PhysicsIce")}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this,"PreLoadingSkin")||this}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this),one.monitor.on("onLoadingProgress",this.onSetProgress,this)},e.prototype.removed=function(){t.prototype.removed.call(this),one.monitor.off("onLoadingProgress",this.onSetProgress,this),this.bar.value=0},e.prototype.onSetProgress=function(t){this.setProgress(t.current,t.total)},e.prototype.setProgress=function(t,e){var o=Math.floor(100*t/e);this.bar.value=o,this.txt_loading.text=one.langUtils.getStatement(1,o)
},e}(t.BaseComponent);t.LoadingUI=e,__reflect(e.prototype,"two.LoadingUI"),t.setClassMap("loading","two.LoadingUI")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.blockType=0,e.isLighting=!0,e.blockType=7,e}return __extends(e,t),e.prototype.created=function(){var e=this;t.prototype.created.call(this);var o=this.getChildAt(0);this.body.changeSensor(!0),this.isLighting=!0,one.soundManager.playSound("rayo"),egret.Tween.get(this,{loop:!0}).wait(1e3).call(function(){o.visible=!1,e.isLighting=!1}).wait(1e3).call(function(){return o.visible=!0,e.isLighting=!0,one.soundManager.playSound("rayo"),e.collideRole?(e.collideRole.collideLaser(!0),!0):void 0})},e.prototype.collideStart=function(t,e){return 1==t.blockType&&(this.collideRole=t),!1},e.prototype.collideEnd=function(t,e){return 1==t.blockType?(this.collideRole=null,!1):!1},e.prototype.removed=function(){t.prototype.removed.call(this),egret.Tween.removeTweens(this)},e}(t.PhysicsNeedle);t.PhysicsLaser=e,__reflect(e.prototype,"two.PhysicsLaser")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.prototype.initGameBefore=function(){t.initScene(this),t.initBox(this)},o.prototype.createChildren=function(){var o=this;e.prototype.createChildren.call(this),this.initGameBefore(),egret.Capabilities.isMobile||(this.stage.scaleMode=egret.StageScaleMode.SHOW_ALL,this.stage.orientation=egret.OrientationMode.AUTO),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){one.soundManager.stop(egret.Sound.MUSIC),one.soundManager.stop(egret.Sound.EFFECT)},egret.lifecycle.onResume=function(){one.soundManager.playLastMusic()},egret.TextField.default_fontFamily="Microsoft YaHei,SimHei";var n=new t.AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",n),egret.registerImplementation("eui.IThemeAdapter",new t.ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/393b394a_23858.json","resource/");var i=new eui.Theme("resource/36d73032_58.json",this.stage);i.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this),this.threads=new one.Threads,this.threads.addMonitor(2,function(){o.gamesingOver()})},o.prototype.onThemeLoadComplete=function(){this.threads.finish("1")},o.prototype.onConfigComplete=function(t){var e=this;RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);var o=function(){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,o,e),RES.setMaxLoadingThread(10),e.threads.finish("2")},n=one.getOption("language")||"cn";"cn"!=n?(RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,o,this),RES.loadConfig("resource_"+n+"/default.res.json","resource_"+n+"/")):o()},o.prototype.gamesingOver=function(){var e=this;one.loaderManager.maxLoadingThread=10,one.loaderManager.loadGroup("loading",100,function(o,n){if(o==n){one.getOption("language")||"cn";RES.getResAsync("language_json",function(){one.langUtils.setLanguage(""),egret.ImageLoader.crossOrigin="anonymous",t.changePage("loading");var o=["games","sounds"];("1"==one.getOption("debug")||"1"==one.getOption("noNet"))&&o.push("apis"),one.loaderManager.loadGroups(o,100,function(t,o){one.monitor.emit("onLoadingProgress",{current:t,total:o}),t==o&&e.startCreateScene()})},e)}})},o.prototype.startCreateScene=function(){t.Storage.game=RES.getRes("gameCfg_json").game,t.Storage.UID="1",one.guideManager.setSetting({ProxyCall:function(t,e){},NotifyCall:function(t){one.monitor.emit("onGuideNotify",{key:t})},UIRoot:this,Arrow:new t.GuideArrow,TalkPanel:new t.GuideTalkPanel,TouchAreaCall:function(t,e,o,n){var i=RES.getRes("cell_b2_png"),r=new egret.Bitmap(i);return r.scale9Grid=new egret.Rectangle(30,30,40,40),r.alpha=n,r.width=e,r.height=o,r.anchorOffsetX=e/2,r.anchorOffsetY=o/2,r}}),one.soundManager.init(t.Storage.game),one.soundManager.playMusic("background"),one.soundManager.setVolume(egret.Sound.MUSIC,.5),this.stage.once(egret.TouchEvent.TOUCH_TAP,function(){one.soundManager.playLastMusic()},this),t.GameCtr.init(this.stage),window.sdkInit(function(e){var o="";e.authorize&&e.plat.code&&e.plat.name&&(o=JSON.stringify({name:e.plat.name,avatar:e.plat.avatar,sex:e.plat.sex})),console.log(e),t.User_getUserProxy.Channel_Id=e.channelId,t.User_getUserProxy.Game_Id=RES.getRes("gameCfg_json").rankId,t.Games_loginProxy.getInstance().send({gameId:t.User_getUserProxy.Game_Id,chanId:t.User_getUserProxy.Channel_Id,deviceId:e.openId,code:e.plat.code,user:o},function(o){0==o.code&&(console.log(o),t.Storage.UID=o.data.userId,t.User_getUserProxy.getInstance().send({uId:o.data.userId},function(n){var i=t.User_getUserProxy.getInstance().getResponse();if(o.data.json){var r=JSON.parse(o.data.json);for(var s in r)i[s]=r[s]}if(o.data.user){var a=JSON.parse(o.data.user);for(var s in a)i[s]=a[s]}else i.name=e.plat.name||i.name,i.avatar=e.plat.avatar||i.avatar,i.sex=e.plat.sex||i.sex;t.changePage("MenuPage")}))})})},o}(eui.UILayer);t.Main=e,__reflect(e.prototype,"two.Main")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.blockType=0,t.type=2,t.blockType=2,t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this);var t=this.getChildAt(0);t.scaleX=t.scaleY=0,egret.Tween.get(t).to({scaleX:1,scaleY:1},500).call(function(){egret.Tween.get(t,{loop:!0}).to({scaleX:1.2,scaleY:1.2},600).to({scaleX:1,scaleY:1},600),t.rotation=0,egret.Tween.get(t,{loop:!0}).to({rotation:-10},150).to({rotation:10},300).to({rotation:0},150)})},o.prototype.removed=function(){e.prototype.removed.call(this);var t=this.getChildAt(0);egret.Tween.removeTweens(t)},o.prototype.collideStart=function(e,o){if(1==e.blockType){one.soundManager.playSound("star");var n=new one.DynamicPT("dead","dead");this.parent.addChild(n),n.play(100),n.x=this.x,n.y=this.y;var i=new t.AnchorImage("emiter_blanco_1_png");i.anchorX=i.anchorY=.5,i.x=this.x,i.y=this.y,this.parent.addChild(i),i.scaleX=1,i.scaleY=1,i.alpha=0,egret.Tween.get(i).to({scaleX:2,scaleY:2,alpha:1},300).to({scaleX:1,scaleY:1,alpha:0},300).call(function(){t.removeSelf(i)});var r=this.parent.localToGlobal(this.x,this.y);return t.showMessageTip("GREAT!",r.x,r.y),one.monitor.emit("onGainStar",{}),!0}return!1},o}(t.PhysicsItem);t.PhysicsStar=e,__reflect(e.prototype,"two.PhysicsStar")}(two||(two={}));var two;!function(t){var e=function(e){function o(t){var o=e.call(this,"ResultBox")||this;return o.stars=t,o}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.gp_center.verticalCenter=-640,egret.Tween.get(this.gp_center).to({verticalCenter:0},800,egret.Ease.backOut),t.addTap(this.btn_next,function(){one.soundManager.playSound("btnclick"),o.dispatchEventWith("onNext")}),t.addTap(this.btn_menu,function(){one.soundManager.playSound("btnclick"),t.transitAnimation(function(){t.changePage("LevelPage")})}),t.addTap(this.btn_restart,function(){one.soundManager.playSound("btnclick"),o.dispatchEventWith("onRestart")}),this.btn_next.scaleX=this.btn_next.scaleY=1,this.btn_next.rotation=10,egret.Tween.get(this.btn_next,{loop:!0}).to({scaleX:1.1,scaleY:1.1},600).to({scaleX:1,scaleY:1},600),egret.Tween.get(this.btn_next,{loop:!0}).to({rotation:-5},300).to({rotation:5},300);for(var n=0;3>n;n++)this.gp_stars.getChildAt(n).visible=!1;this.stars>=1&&this.runStar(this.gp_stars.getChildAt(0),200,-500,600,0),this.stars>=2&&this.runStar(this.gp_stars.getChildAt(1),600,-0,600,0),this.stars>=3&&this.runStar(this.gp_stars.getChildAt(2),1e3,500,600,0)},o.prototype.runStar=function(e,o,n,i,r){var s=this;e.visible=!1;var a=e.x,l=e.y;e.x=n+a,e.y=i+l,e.rotation=r,e.scaleX=e.scaleY=2,egret.Tween.get(e).wait(o).call(function(){e.visible=!0}).to({x:a,y:l,rotation:720},500).call(function(){var e=new one.DynamicPT("dead","dead");s.parent.addChild(e),e.play(100),e.x=a,e.y=l,s.gp_stars.addChildAt(e,0);var o=new t.AnchorImage("emiter_blanco_1_png");o.anchorX=o.anchorY=.5,o.x=a,o.y=l,s.gp_stars.addChildAt(o,0),o.scaleX=1,o.scaleY=1,o.alpha=0,egret.Tween.get(o).to({scaleX:2,scaleY:2,alpha:1},300).to({scaleX:1,scaleY:1,alpha:0},300).call(function(){t.removeSelf(o)})}).to({scaleX:1,scaleY:1},200)},o.prototype.closeBox=function(e){var o=this;this.rect.visible=!1,egret.Tween.get(this.gp_center).to({verticalCenter:-640},800,egret.Ease.backIn).call(function(){t.closeBox(o,!0),e()})},o.prototype.removed=function(){e.prototype.removed.call(this),egret.Tween.removeTweens(this.btn_next)},o}(t.BaseComponent);t.ResultBox=e,__reflect(e.prototype,"two.ResultBox",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t._startSpeedX=0,t.destroyType=0,t.blocks=[],t.tempSpeedX=0,t.blockType=1,t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this);var t=this.getChildAt(0);t.scaleX=0,t.scaleY=0,t.anchorOffsetX=20.5,t.anchorOffsetY=41,t.x=t.anchorOffsetX,t.y=t.anchorOffsetY},o.prototype.removed=function(){e.prototype.removed.call(this),egret.Tween.removeTweens(this.getChildAt(0))},o.prototype.canJump=function(){if(!this.body)return!1;var t=this.getSpeed();return 0==t.y&&this.blocks.length>0?!0:!1},o.prototype.start=function(){var e=this;one.soundManager.playSound("spawner_show");var o=this.getChildAt(0);one.monitor.emit("onShowStart",{x:this.x,y:this.y}),o.scaleX=0,o.scaleY=0,egret.Tween.get(o).wait(200).to({scaleX:1,scaleY:1},300).call(function(){var o=e.parent.localToGlobal(e.x,e.y);t.showMessageTip("HELLO",o.x,o.y),one.soundManager.playSound("hello"),e.body.changeType(1),e.body.changeDensity(1);var n=e.getChildAt(0);n.scaleX=1.2,n.scaleY=1.2,egret.Tween.get(n,{loop:!0}).to({scaleX:1.1,scaleY:1},250).to({scaleX:1.05,scaleY:1.2},250).to({scaleY:1,scaleX:1.05},250).to({scaleX:1.2,scaleY:1.2},250)})},Object.defineProperty(o.prototype,"startSpeedX",{get:function(){return this._startSpeedX},set:function(t){this._startSpeedX=t},enumerable:!0,configurable:!0}),o.prototype.collideStart=function(t,e){if(0==this.tempSpeedX&&this.updateSpeedX(this._startSpeedX),0==t.blockType){this.blocks.push(t),one.monitor.emit("onShake",{}),one.monitor.emit("onShowBlood",{dic:this.tempSpeedX>0?1:-1});var o=new one.DynamicPT("colliside","colliside");this.parent.addChild(o),o.play(100),o.x=this.x,o.y=this.y,one.soundManager.playSound("mancha2")}if(6==t.blockType&&this.blocks.push(t),3==t.blockType){this.destroyType=1;var n=t.body.getPosition();return this.endPoint={x:n.x,y:n.y},!0}return 5==t.blockType?(this.destroyType=2,one.soundManager.playSound("kill"),this.collideLaser(!1),!0):7==t.blockType&&t.isLighting?(this.destroyType=2,one.soundManager.playSound("kill"),this.collideLaser(!1),!0):!1},o.prototype.collideEnd=function(t,e){return(0==t.blockType||6==t.blockType)&&one.spliceOne(this.blocks,t),0==this.body.getVelocity().x&&this.updateSpeedX(this.tempSpeedX),!1},o.prototype.updateSpeedX=function(t){e.prototype.updateSpeedX.call(this,t),0!=t&&(this.tempSpeedX=t)},o.prototype.updateSpeed=function(t,o){e.prototype.updateSpeed.call(this,t,o),0!=t&&(this.tempSpeedX=t)},o.prototype.collideLaser=function(t){this.destroyType=2,one.soundManager.playSound("kill");var e=new one.DynamicPT("colliside","colliside");this.parent.addChild(e),e.play(100),e.x=this.x,e.y=this.y,t&&(this.body.removeSelfFromWorld(),this.destroy())},o.prototype.destroy=function(){var e=this;if(this.body=null,1==this.destroyType){var o=this.parent.localToGlobal(this.x,this.y);t.showMessageTip("WIN!",o.x,o.y),egret.Tween.get(this).to({x:this.endPoint.x,y:this.endPoint.y+26},300).call(function(){one.soundManager.playSound("spawner_ganar")}).to({alpha:0},300).call(function(){t.removeSelf(e),one.monitor.emit("onNextLevel",{})})}else 2==this.destroyType&&(t.removeSelf(this),one.monitor.emit("onReborn",{}))},o}(t.PhysicsItem);t.Role=e,__reflect(e.prototype,"two.Role")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this,"SettingBox")||this}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(o)},this),this.btn_music.selected=one.soundManager.isOpened(egret.Sound.MUSIC),this.btn_effect.selected=one.soundManager.isOpened(egret.Sound.EFFECT),this.btn_music.addEventListener(egret.Event.CHANGE,function(){o.btn_music.selected?one.soundManager.open(egret.Sound.MUSIC):one.soundManager.close(egret.Sound.MUSIC)},this),this.btn_effect.addEventListener(egret.Event.CHANGE,function(){o.btn_effect.selected?one.soundManager.open(egret.Sound.EFFECT):one.soundManager.close(egret.Sound.EFFECT)},this)},o}(t.BaseComponent);t.SettingBox=e,__reflect(e.prototype,"two.SettingBox")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.prototype.onTap=function(o){e.prototype.onTap.call(this,o),t.showBox(new t.SettingBox)},o}(t.BaseButton);t.SettingButton=e,__reflect(e.prototype,"two.SettingButton")}(two||(two={}));var two;!function(t){function e(e,o){var n=1;t.VideoAd.VideoGapSecond=1,1==n?t.VideoAd.show(e,function(e){0==e.code?o(!0):2==e.code||3==e.code?(t.showTip("视频播放有问题！"),o(!1)):(t.showTip("视频未播放完，不可以领取奖励哦！"),o(!1))}):2==n&&t.shareToFriend(e,function(t){one.callLater(function(){one.callLater(function(){o(t)},1)},10)})}function o(t,e){var o="",n="";window.share({title:o,imageUrl:n},function(t){console.log(JSON.stringify(t)),e(t.isComplete?!0:!1)})}t.getFreeGift=e,t.shareToFriend=o}(two||(two={}));var two;!function(t){var e=function(){function e(t){void 0===t&&(t=0),this.bodyRemoved=[],this.isOver=!1,this.timeScale=10,this.isStarted=!1,this.lastTime=0,this.factor=30;var e=new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0,10),!1);this.world=e;var o=this.fixDef=new Box2D.Dynamics.b2FixtureDef;o.density=1,o.friction=0,o.restitution=0;var n=this.bodyDef=new Box2D.Dynamics.b2BodyDef;n.fixedRotation=!0}return e.prototype.setGravity=function(t,e){this.world.SetGravity(new Box2D.Common.Math.b2Vec2(t,e))},e.prototype.getGravity=function(){return this.world.GetGravity()},e.prototype.dealRemoved=function(){for(var t=0;t<this.bodyRemoved.length;t++){var e=this.bodyRemoved[t].body,o=this.getBlock(e);o.destroy(),this.bodyRemoved[t].destroy(),this.world.DestroyBody(e)}this.bodyRemoved.length=0},e.prototype.removeBody=function(t){var e=this.bodyRemoved.indexOf(t)>=0;e||this.bodyRemoved.push(t)},e.prototype.start=function(){var t=this;this.isStarted||(this.isStarted=!0,this.isOver=!1,this.bodyRemoved.length=0,this.resume(),this.lister=new Box2D.Dynamics.b2ContactListener,this.world.SetContactListener(this.lister),this.lister.BeginContact=function(e){if(!t.isOver){var o=e.GetFixtureA().GetBody(),n=e.GetFixtureB().GetBody(),i=t.getBlock(o),r=t.getBlock(n),s=t.bodyRemoved.indexOf(i.body)>=0,a=i.collideStart(r,s);return a&&!s&&t.bodyRemoved.push(i.body),s=t.bodyRemoved.indexOf(r.body)>=0,a=r.collideStart(i,s),a&&!s&&t.bodyRemoved.push(r.body),!0}},this.lister.EndContact=function(e){if(!t.isOver){var o=e.GetFixtureA().GetBody(),n=e.GetFixtureB().GetBody(),i=t.getBlock(o),r=t.getBlock(n);if(i&&r){var s=t.bodyRemoved.indexOf(i.body)>=0;return s||i.collideEnd(r,s),s=t.bodyRemoved.indexOf(r.body)>=0,s||r.collideEnd(i,s),!0}}})},e.prototype.stop=function(){if(this.isStarted&&(this.isStarted=!1,!this.isOver)){this.isOver=!0,this.pause();for(var t=this.world.GetBodyCount(),e=this.world.GetBodyList(),o=0;t>o;o++){var n=this.getBlock(e);null!=n?(n.body.destroy(),this.world.DestroyBody(e),e=e.GetNext()):e=e.GetNext()}this.world=null}},e.prototype.pause=function(){egret.stopTick(this.onTicker,this)},e.prototype.resume=function(){this.isOver||(egret.stopTick(this.onTicker,this),this.lastTime=Date.now(),egret.startTick(this.onTicker,this))},e.prototype.getBlock=function(t){var e=t.GetUserData();return e&&e.displays?e.displays[0]:null},e.prototype.onTicker=function(){var t=Date.now(),e=t-this.lastTime;return 10>e?void 0:(this.dealRemoved(),this.lastTime=t,this.world.Step(1/30,10,10),this.drawDebug(),!1)},e.prototype.addItem=function(e,o,n,i,r){1==r?r=Box2D.Dynamics.b2Body.b2_dynamicBody:2==r&&(r=Box2D.Dynamics.b2Body.b2_staticBody);var s;if(this.fixDef.isSensor=i.isSensor,this.fixDef.density=i.density,0==n.style){var a=new Box2D.Collision.Shapes.b2PolygonShape;this.fixDef.shape=a,a.SetAsBox(e/this.factor/2,o/this.factor/2),this.bodyDef.type=r,this.bodyDef.fixedRotation=i.fixedRotation,this.bodyDef.position.Set(i.x/this.factor,i.y/this.factor),this.bodyDef.angle=i.tranRo/180*Math.PI,s=this.world.CreateBody(this.bodyDef),s.CreateFixture(this.fixDef)}else if(1==n.style){var a=new Box2D.Collision.Shapes.b2CircleShape(e/this.factor/2);this.fixDef.shape=a,this.bodyDef.type=r,this.bodyDef.position.Set(i.x/this.factor,i.y/this.factor),this.bodyDef.fixedRotation=i.fixedRotation,this.bodyDef.angle=i.tranRo/180*Math.PI,s=this.world.CreateBody(this.bodyDef),s.CreateFixture(this.fixDef)}if(s&&n){new t.P2Body(s,n,this)}return s},e.prototype.drawDebug=function(){for(var t=this.factor,e=(Date.now(),this.world.GetBodyCount()),o=this.world.GetBodyList(),n=0;e>n;n++){var i=this.getBlock(o);if(i&&!i.otherRun){var r=o.GetPosition().x*t,s=o.GetPosition().y*t,a=o.GetAngle()*(180/Math.PI);i.x=r,i.y=s,i.tranRo?i.tranRo=a:i.rotation=a,o=o.GetNext()}}this.world.DrawDebugData()},e}();t.World=e,__reflect(e.prototype,"two.World")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"ComboBox")||this;return e.isChoose=!1,e._allowMultipleSelection=!1,e._dataProvider=null,e._selectedIndices=[],e}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.currentTarget==t.target&&(e.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,e.onCancel,e),e.contentList=null)},this),this.isChoose=!1,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){e.isChoose=!0},this),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onCancel,this),this.select.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!0,e.btn_down.visible=!1,e.btn_up.visible=!0},this),this.btn_down.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!e.scroller.visible,e.btn_down.visible=!1,e.btn_up.visible=!0},this),this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!e.scroller.visible,e.btn_down.visible=!0,e.btn_up.visible=!1},this),this.list.addEventListener(egret.Event.CHANGE,function(t){e.select.data=e.selectedItems,e._allowMultipleSelection||(e.scroller.visible=!1,e.btn_down.visible=!0,e.btn_up.visible=!1),e.onSort(),e.dispatchEvent(t)},this),this.list.allowMultipleSelection=this._allowMultipleSelection,this.scroller.visible=!1,this.btn_up.visible=!1,this.btn_down.visible=!0,this.setCombo()},Object.defineProperty(e.prototype,"selectedSkin",{set:function(t){this.select.skinName=t},enumerable:!0,configurable:!0}),e.prototype.onCancel=function(){return this.isChoose?void(this.isChoose=!1):(this.isChoose=!1,this.scroller.visible=!1,this.btn_down.visible=!0,void(this.btn_up.visible=!1))},Object.defineProperty(e.prototype,"allowMultipleSelection",{get:function(){return this._allowMultipleSelection},set:function(t){this._allowMultipleSelection=t,this.list&&(this.list.allowMultipleSelection=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataProvider",{get:function(){return this._dataProvider},set:function(t){this._dataProvider=t,this.list.selectedIndices=[],this.setCombo()},enumerable:!0,configurable:!0}),e.prototype.bind=function(t){this.contentList=t,this.onSort()},e.prototype.unbind=function(){this.contentList=null},e.prototype.onSort=function(){if(null!=this.contentList&&this._allowMultipleSelection){var t=this.contentList.dataProvider,e=t.source,o=this.selectedItems;e.sort(function(t,e){for(var n=o.length-1;n>=0;n--){if(t[o[n].key]>e[o[n].key])return o[n].ascending?1:-1;if(t[o[n].key]<e[o[n].key])return o[n].ascending?-1:1}return 0}),t.refresh()}},e.prototype.setCombo=function(){this._dataProvider&&(this.select&&(this.select.data=this.selectedItems),this.list&&(this.list.dataProvider=this._dataProvider))},Object.defineProperty(e.prototype,"selectedIndices",{get:function(){return this.list?this.list.selectedIndices:this._selectedIndices},set:function(t){this._selectedIndices=t,this._dataProvider&&(this.list.selectedIndices=t,this.select&&(this.select.data=this.selectedItems),this.onSort())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedItems",{get:function(){return this.list?this.list.selectedItems:[]},enumerable:!0,configurable:!0}),e}(t.BaseComponent);t.ComboBox=e,__reflect(e.prototype,"two.ComboBox")}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,o){t.prototype.partAdded.call(this,e,o)},e.prototype.dataChanged=function(){t.prototype.dataChanged.call(this),this.data.label&&(this.labelDisplay.text=this.data.label)},e}(eui.ItemRenderer);t.ComboChooseItem=e,__reflect(e.prototype,"two.ComboChooseItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.dataChanged=function(){if(t.prototype.dataChanged.call(this),this.data){for(var e="",o=this.data.length-1;o>=0;o--)e+=this.data[o].label,o>0&&(e+=",");this.labelDisplay.text=e}},e}(eui.ItemRenderer);t.ComboSelectedItem=e,__reflect(e.prototype,"two.ComboSelectedItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e._fileName="",e._arName="",e._frame="",e}return __extends(e,t),Object.defineProperty(e.prototype,"fileName",{set:function(t){this._fileName=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"arName",{set:function(t){this._arName=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{set:function(t){this._frame=t},enumerable:!0,configurable:!0}),e.prototype.created=function(){t.prototype.created.call(this),this.zRole=new one.DynamicDB(this.fileName,this.arName),this.addChild(this.zRole),this.zRole.play(this._frame,-1)},e}(t.BaseGroup);t.EUIDB=e,__reflect(e.prototype,"two.EUIDB")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isFirst=!0,e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.commitProperties=function(){if(t.prototype.commitProperties.call(this),"down"==this.currentState){if(this.iconDisplay){egret.Tween.removeTweens(this.iconDisplay),this.iconDisplay.scaleX=this.iconDisplay.scaleY=.8;var e=egret.Tween.get(this.iconDisplay);e.to({scaleX:1,scaleY:1},500,egret.Ease.bounceOut)}}else if(this.iconDisplay){if(this.isFirst)return void(this.isFirst=!1);egret.Tween.removeTweens(this.iconDisplay),this.iconDisplay.scaleX=this.iconDisplay.scaleY=1.2;var e=egret.Tween.get(this.iconDisplay);e.to({scaleX:1,scaleY:1},500,egret.Ease.bounceOut)}},e}(t.BaseButton);t.ScaleButton=e,__reflect(e.prototype,"two.ScaleButton")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"GuideArrow")||this;return e.touchEnabled=e.touchChildren=!1,e}return __extends(e,t),e.prototype.partAdded=function(e,o){t.prototype.partAdded.call(this,e,o)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(t.BaseComponent);t.GuideArrow=e,__reflect(e.prototype,"two.GuideArrow")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"GuideTalkPanel")||this;return e.percentWidth=e.percentHeight=100,e}return __extends(e,t),e.prototype.init=function(t,e,o){this.call=e,this.context=o,this.txt_msg.text=t.message_s,this.touchEnabled=this.touchChildren="talk"==t.type_s},e.prototype.created=function(){var e=this;t.prototype.created.call(this),this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.call.call(e.context)},this)},e}(t.BaseComponent);t.GuideTalkPanel=e,__reflect(e.prototype,"two.GuideTalkPanel",["eui.UIComponent","egret.DisplayObject","one.guide.IGuidTalk"])}(two||(two={}));
