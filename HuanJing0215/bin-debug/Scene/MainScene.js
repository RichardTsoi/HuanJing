var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.selectedPlayer = "";
        return _this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //初始化场景
    MainScene.prototype.init = function () {
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
        this.btnShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
        this.btnSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClick, this);
        this.selectPanel.visible = false;
        this.mainPanel.visible = true;
    };
    MainScene.prototype.onStartClick = function () {
        //切换场景
        SceneManager.GetInstance().ChangeScene("gameScene");
    };
    MainScene.prototype.onShopClick = function () {
        this.mainPanel.visible = false;
        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
        this.btnShop.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
        this.btnSound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClick, this);
        this.selectPanel.visible = true;
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.imgDefault.touchEnabled = true;
        this.imgNinja.touchEnabled = true;
        this.imgHobbit.touchEnabled = true;
        this.imgZombie.touchEnabled = true;
        this.imgDefault.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDefaultClick, this);
        this.imgNinja.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNinjaClick, this);
        this.imgHobbit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHobbitClick, this);
        this.imgZombie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZombieClick, this);
        if (!this.selectedPlayer) {
            this.selectedPlayer = "characters_01_png";
        }
        this.imgShow.source = this.selectedPlayer;
    };
    MainScene.prototype.onSoundClick = function () {
    };
    MainScene.prototype.onDefaultClick = function () {
        this.changePlayer(this.imgDefault);
    };
    MainScene.prototype.onNinjaClick = function () {
        this.changePlayer(this.imgNinja);
    };
    MainScene.prototype.onHobbitClick = function () {
        this.changePlayer(this.imgHobbit);
    };
    MainScene.prototype.onZombieClick = function () {
        this.changePlayer(this.imgZombie);
    };
    MainScene.prototype.changePlayer = function (player) {
        this.selectedPlayer = player.source.toString();
        this.imgShow.source = this.selectedPlayer;
    };
    MainScene.prototype.onBackClick = function () {
        this.mainPanel.visible = true;
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
        this.btnShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
        this.btnSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClick, this);
        this.selectPanel.visible = false;
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.imgDefault.touchEnabled = false;
        this.imgNinja.touchEnabled = false;
        this.imgHobbit.touchEnabled = false;
        this.imgZombie.touchEnabled = false;
        this.imgDefault.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDefaultClick, this);
        this.imgNinja.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNinjaClick, this);
        this.imgHobbit.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHobbitClick, this);
        this.imgZombie.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onZombieClick, this);
        if (this.selectedPlayer == "") {
            this.selectedPlayer = "character_01_png";
        }
        SceneManager.GetInstance().SetSelectPlayer(this.selectedPlayer);
    };
    //释放资源
    MainScene.prototype.release = function () {
        if (this.btnStart.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
        }
        if (this.btnShop.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btnShop.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
        }
        if (this.btnSound.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btnSound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClick, this);
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
