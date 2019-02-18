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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    SceneManager.prototype.init = function () {
        this.mainScene = new MainScene();
        //默认添加开始界面
        this.addChild(this.mainScene);
    };
    SceneManager.GetInstance = function () {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    SceneManager.prototype.ChangeScene = function (type) {
        if (type == "gameScene") {
            this.mainScene.release();
            console.log(this.selectedPlayer);
            if (!this.selectedPlayer) {
                this.selectedPlayer = "characters_01_png";
            }
            this.gameScene = new GameScene(this.selectedPlayer);
        }
        this.removeChildren();
        this.addChild(this[type]);
    };
    SceneManager.prototype.SetSelectPlayer = function (name) {
        this.selectedPlayer = name;
    };
    return SceneManager;
}(egret.Sprite));
__reflect(SceneManager.prototype, "SceneManager");
