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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(player) {
        var _this = _super.call(this) || this;
        //保存所有方块数据
        _this.blockSourceArr = [];
        //保存所有在屏幕内的方块
        _this.blockArr = [];
        //回收所有超出屏幕的方块
        _this.recoverBlcokArr = [];
        //创建方块的位置
        _this.dir = 1;
        //下个方块生成的位置
        _this.nextBlockX = 69;
        _this.nextBlockY = 80;
        //分数
        _this.score = 0;
        //玩家跳跃方向
        _this.jumpDir = 1;
        //用户选定的角色
        _this.selectedPlayer = "";
        //所有角色用于展示资源数组
        _this.playerShowArr = [];
        //所有角色用于游戏资源数组
        _this.playerGameArr = [];
        //判断游戏是否结束
        _this.isGameOver = false;
        _this.selectedPlayer = player;
        return _this;
    }
    GameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.reset();
    };
    //初始化场景
    GameScene.prototype.init = function () {
        this.playerShowArr = ["characters_01_png", "characters_03_png", "characters_05_png", "characters_07_png"];
        this.playerGameArr = ["characters_02_png", "characters_04_png", "characters_06_png", "characters_08_png"];
        this.blockSourceArr = ["Elements_01_png", "Elements_02_png", "Elements_03_png", "Elements_07_png"];
        //添加按钮点击事件绑定
        this.gamePanel.touchEnabled = true;
        this.gamePanel.touchChildren = true;
        this.gamePanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onScreenClick, this);
        //重新开始按钮点击事件
        this.btnRestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestartClick, this);
        //设置玩家锚点
        this.player.anchorOffsetX = this.player.width / 2;
        this.player.anchorOffsetY = this.player.height - 8;
        console.log(this.selectedPlayer);
    };
    //清空重置舞台
    GameScene.prototype.reset = function () {
        this.gamePanel.removeChildren();
        //添加背景
        this.gamePanel.addChild(this.imgBg);
        //清空方块数组
        this.blockArr = [];
        this.recoverBlcokArr = [];
        //创建最开始的方块
        var blockNode = this.createBlock();
        blockNode.x = this.width / 2;
        blockNode.y = 748;
        this.currentBlock = blockNode;
        this.addBlock();
        //将角色位置摆正
        var index = this.playerShowArr.indexOf(this.selectedPlayer);
        this.player.source = this.playerGameArr[index];
        this.player.x = blockNode.x;
        this.player.y = blockNode.y;
        this.playerOriginalX = this.player.x;
        this.PlayerOriginalY = this.player.y;
        this.gamePanel.addChild(this.player);
        this.scoreLabel.text = this.score.toString();
        this.gamePanel.addChild(this.scoreLabel);
        this.isGameOver = false;
    };
    GameScene.prototype.createBlock = function () {
        var blockNode = null;
        if (this.recoverBlcokArr.length > 0) {
            blockNode = this.recoverBlcokArr.splice(0, 1)[0];
        }
        else {
            blockNode = new eui.Image();
        }
        var n = Math.floor(Math.random() * this.blockSourceArr.length);
        blockNode.source = this.blockSourceArr[n];
        this.gamePanel.addChild(blockNode);
        blockNode.anchorOffsetX = 128;
        blockNode.anchorOffsetY = 120;
        this.blockArr.push(blockNode);
        return blockNode;
    };
    GameScene.prototype.addBlock = function () {
        //生成一个方块
        var blockNode = this.createBlock();
        //设置随机方向和位置
        this.dir = Math.random() > 0.5 ? 1 : -1;
        if (this.dir > 0) {
            //右边生成
            blockNode.x = 320 + this.nextBlockX;
            blockNode.y = 748 - this.nextBlockY;
        }
        else {
            //左边生成
            blockNode.x = 320 - this.nextBlockX;
            blockNode.y = 748 - this.nextBlockY;
        }
        this.currentBlock = blockNode;
    };
    //用户点击屏幕 游戏核心逻辑
    GameScene.prototype.onScreenClick = function (event) {
        if (!this.isGameOver) {
            this.gamePanel.touchEnabled = false;
            this.gamePanel.touchChildren = false;
            if (event.stageX > this.width / 2) {
                this.jumpDir = 1;
                this.jump(this.jumpDir);
            }
            else {
                this.jumpDir = -1;
                this.jump(this.jumpDir);
            }
        }
    };
    GameScene.prototype.jump = function (dir) {
        var _this = this;
        this.player.scaleX = dir;
        //设置目标位置
        this.jumpTargetBlcok = new egret.Point();
        if (dir > 0) {
            this.jumpTargetBlcok.x = this.player.x + this.nextBlockX;
        }
        else {
            this.jumpTargetBlcok.x = this.player.x - this.nextBlockX;
        }
        this.jumpTargetBlcok.y = this.player.y - this.nextBlockY;
        egret.Tween.get(this).to({ factor: 1 }, 100).call(function () {
            _this.judgeResult(dir);
        });
    };
    GameScene.prototype.judgeResult = function (dir) {
        var _this = this;
        if (this.jumpTargetBlcok.x == this.currentBlock.x && this.jumpTargetBlcok.y == this.currentBlock.y) {
            //成功
            console.log("成功");
            //更新分数显示
            this.score++;
            this.scoreLabel.text = this.score.toString();
            //更新方块和角色位置
            var playerX, playerY;
            playerX = this.playerOriginalX;
            playerY = this.PlayerOriginalY;
            this.update(this.nextBlockX * -dir, this.nextBlockY);
            egret.Tween.get(this.player).to({
                x: playerX,
                y: playerY
            }, 50).call(function () {
                _this.addBlock();
                //将角色层级设为最上级
                _this.gamePanel.addChild(_this.player);
            });
            this.gamePanel.touchEnabled = true;
            this.gamePanel.touchChildren = true;
        }
        else {
            //失败
            console.log("失败");
            this.isGameOver = true;
            this.overPanel.visible = true;
            this.overScoreLabel.text = this.score.toString();
        }
    };
    GameScene.prototype.onRestartClick = function () {
        //隐藏结束面板
        this.overPanel.visible = false;
        this.score = 0;
        this.scoreLabel.text = this.score.toString();
        this.reset();
        this.gamePanel.touchEnabled = true;
        this.gamePanel.touchChildren = true;
    };
    GameScene.prototype.update = function (x, y) {
        egret.Tween.removeAllTweens();
        for (var i = this.blockArr.length - 1; i >= 0; i--) {
            var blockNode = this.blockArr[i];
            if (blockNode.x + (blockNode.width / 2) < 0 || blockNode.x - (blockNode.width / 2) > this.width || blockNode.y - 136 > this.height) {
                //方块超出屏幕范围
                console.log(blockNode.x + " / " + blockNode.y);
                this.gamePanel.removeChild(blockNode);
                this.blockArr.splice(i, 1);
                this.recoverBlcokArr.push(blockNode);
            }
            else {
                //没有超出屏幕范围 则移动位置
                egret.Tween.get(blockNode).to({
                    x: blockNode.x + x,
                    y: blockNode.y + y
                }, 50);
                //移动位置后新生成的方块会有位移偏差
            }
        }
        console.log("所有方块数量： " + this.blockArr.length);
        console.log(this.recoverBlcokArr.length);
    };
    Object.defineProperty(GameScene.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            this.player.x = (1 - value) * (1 - value) * this.player.x + 2 * value * (1 - value) * (this.player.x + this.jumpTargetBlcok.x) / 2 + value * value * (this.jumpTargetBlcok.x);
            this.player.y = (1 - value) * (1 - value) * this.player.y + 2 * value * (1 - value) * (this.jumpTargetBlcok.y - 80) + value * value * (this.jumpTargetBlcok.y);
        },
        enumerable: true,
        configurable: true
    });
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene", ["eui.UIComponent", "egret.DisplayObject"]);
