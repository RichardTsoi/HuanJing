var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.bgImage = new egret.Bitmap();
        this.bgImage.texture = RES.getRes("bg4_png");
        this.bgImage.width = 640;
        this.bgImage.height = 1136;
        this.bgImage.x = 0;
        this.bgImage.y = 0;
        this.bgImage.anchorOffsetX = 0;
        this.bgImage.anchorOffsetY = 0;
        this.addChild(this.bgImage);
        this.logoImage = new egret.Bitmap();
        this.logoImage.texture = RES.getRes("logo_png");
        this.logoImage.width = 350;
        this.logoImage.height = 388;
        this.logoImage.anchorOffsetX = 175;
        this.logoImage.anchorOffsetY = 194;
        this.logoImage.x = this.width / 2;
        this.logoImage.y = 300;
        this.addChild(this.logoImage);
        this.textField.x = 200;
        this.textField.y = 700;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.anchorOffsetX = 0;
        this.textField.anchorOffsetY = 0;
        this.textField.textColor = 0xFF0000;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        //加载loading资源组
                        return [4 /*yield*/, RES.loadGroup("loading")];
                    case 2:
                        //加载loading资源组
                        _a.sent();
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, this.loadTheme()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 4:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.addChild(SceneManager.GetInstance());
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
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
        //是否播放音乐
        _this.canPlaySound = true;
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
        //初始化音频
        this.jumpVoice = RES.getRes("jump_mp3");
        this.playerShowArr = ["characters_01_png", "characters_03_png", "characters_05_png", "characters_07_png"];
        this.playerGameArr = ["characters_02_png", "characters_04_png", "characters_06_png", "characters_08_png"];
        this.blockSourceArr = ["Elements_01_png", "Elements_02_png", "Elements_03_png", "Elements_07_png"];
        //添加按钮点击事件绑定
        this.gamePanel.touchEnabled = true;
        this.gamePanel.touchChildren = true;
        this.gamePanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onScreenClick, this);
        //重新开始按钮点击事件
        this.btnRestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestartClick, this);
        //切换角色按钮事件
        this.btnChangePlayer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeClick, this);
        //添加音频是否播放按钮事件
        this.btnSoundOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundOnClick, this);
        this.btnSoundOff.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundOffClick, this);
        //设置玩家锚点
        this.player.anchorOffsetX = this.player.width / 2;
        this.player.anchorOffsetY = this.player.height - 8;
        console.log(this.canPlaySound);
    };
    //调整音频是否播放逻辑
    GameScene.prototype.onSoundOnClick = function () {
        this.btnSoundOn.visible = false;
        this.btnSoundOff.visible = true;
        this.canPlaySound = false;
    };
    GameScene.prototype.onSoundOffClick = function () {
        this.btnSoundOn.visible = true;
        this.btnSoundOff.visible = false;
        this.canPlaySound = true;
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
        this.player.scaleX = 1;
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
        //播放跳跃音频
        if (this.canPlaySound) {
            this.jumpVoice.play(0, 1);
        }
        //调整角色转向
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
    //重新开始游戏
    GameScene.prototype.onRestartClick = function () {
        //隐藏结束面板
        this.overPanel.visible = false;
        this.score = 0;
        this.scoreLabel.text = this.score.toString();
        this.reset();
        this.gamePanel.touchEnabled = true;
        this.gamePanel.touchChildren = true;
    };
    //切换角色
    GameScene.prototype.onChangeClick = function () {
        this.showPanel.visible = true;
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.default.touchEnabled = true;
        this.ninja.touchEnabled = true;
        this.hobbit.touchEnabled = true;
        this.zombie.touchEnabled = true;
        this.default.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDefaultClick, this);
        this.ninja.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNinjaClick, this);
        this.hobbit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHobbitClick, this);
        this.zombie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZombieClick, this);
        this.show.source = this.selectedPlayer;
    };
    GameScene.prototype.onDefaultClick = function () {
        this.changePlayer(this.default);
    };
    GameScene.prototype.onNinjaClick = function () {
        this.changePlayer(this.ninja);
    };
    GameScene.prototype.onHobbitClick = function () {
        this.changePlayer(this.hobbit);
    };
    GameScene.prototype.onZombieClick = function () {
        this.changePlayer(this.zombie);
    };
    GameScene.prototype.changePlayer = function (image) {
        this.selectedPlayer = image.source.toString();
        this.show.source = this.selectedPlayer;
    };
    //选定角色后返回结束界面
    GameScene.prototype.onBackClick = function () {
        this.showPanel.visible = false;
    };
    //回到主页
    GameScene.prototype.onBackMainClick = function () {
        SceneManager.GetInstance().ChangeScene("mainScene");
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
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.selectPanel.visible = false;
        this.mainPanel.visible = true;
    };
    MainScene.prototype.onStartClick = function () {
        //切换场景
        SceneManager.GetInstance().ChangeScene("gameScene");
    };
    MainScene.prototype.onShopClick = function () {
        this.mainPanel.visible = false;
        this.selectPanel.visible = true;
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
        this.selectPanel.visible = false;
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
        if (this.btnBack.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
;window.Main = Main;