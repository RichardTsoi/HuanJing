class GameScene extends eui.Component implements  eui.UIComponent {
	
	public player:eui.Image;
	public imgBg:eui.Image;
	public gamePanel:eui.Group;
	public scoreLabel:eui.Label;
	public btnSoundOff:eui.Button;
	public btnSoundOn:eui.Button;

	public overPanel:eui.Group;
	public overScoreLabel:eui.Label;
	public btnRestart:eui.Button;
	public btnChangePlayer:eui.Button;

	public showPanel:eui.Group;
	public btnBack:eui.Button;
	public show:eui.Image;
	public default:eui.Image;
	public ninja:eui.Image;
	public hobbit:eui.Image;
	public zombie:eui.Image;

	//保存所有方块数据
	private blockSourceArr: Array<string> = [];
	//保存所有在屏幕内的方块
	private blockArr: Array<eui.Image> = [];
	//回收所有超出屏幕的方块
	private recoverBlcokArr: Array<eui.Image> = [];
	//最新创建的方块
	private currentBlock: eui.Image;
	//创建方块的位置
	private dir: number = 1;
	//下个方块生成的位置
	private nextBlockX: number = 69;
	private nextBlockY: number = 80;
	//分数
	private score: number = 0;
	//玩家跳跃方向
	private jumpDir: number = 1;
	//玩家需要跳到的目标位置
	private jumpTargetBlcok: egret.Point;
	//角色初始位置
	private playerOriginalX: number;
	private PlayerOriginalY: number;
	//用户选定的角色
	private selectedPlayer: string = "";
	//所有角色用于展示资源数组
	private playerShowArr: Array<string> = [];
	//所有角色用于游戏资源数组
	private playerGameArr: Array<string> = [];
	//判断游戏是否结束
	private isGameOver: boolean = false;
	//跳跃音频
	private jumpVoice: egret.Sound;
	//是否播放音乐
	private canPlaySound: boolean = true;
	
	public constructor(player: string) {
		super();
		this.selectedPlayer = player;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
		this.reset();
	}

	//初始化场景
	private init(){
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
	}

	//调整音频是否播放逻辑
	private onSoundOnClick(){
		this.btnSoundOn.visible = false;
		this.btnSoundOff.visible = true;
		this.canPlaySound = false;
	}

	private onSoundOffClick(){
		this.btnSoundOn.visible = true;
		this.btnSoundOff.visible = false;
		this.canPlaySound = true;
	}

	//清空重置舞台
	private reset(){
		this.gamePanel.removeChildren();
		//添加背景
		this.gamePanel.addChild(this.imgBg);
		//清空方块数组
		this.blockArr = [];
		this.recoverBlcokArr = [];
		//创建最开始的方块
		let blockNode = this.createBlock();
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
	}

	private createBlock(): eui.Image{
		let blockNode = null;
		if(this.recoverBlcokArr.length > 0){
			blockNode = this.recoverBlcokArr.splice(0, 1)[0];
		}else{
			blockNode = new eui.Image();
		}
		let n = Math.floor(Math.random() * this.blockSourceArr.length);
		blockNode.source =this.blockSourceArr[n];
		this.gamePanel.addChild(blockNode);
		blockNode.anchorOffsetX = 128;
		blockNode.anchorOffsetY = 120;
		this.blockArr.push(blockNode);
		return blockNode;
	}

	private addBlock(){
		//生成一个方块
		let blockNode = this.createBlock();
		//设置随机方向和位置
		this.dir = Math.random() > 0.5? 1 : -1;
		if(this.dir > 0){
			//右边生成
			blockNode.x = 320 + this.nextBlockX;
			blockNode.y = 748 - this.nextBlockY;
		}else{
			//左边生成
			blockNode.x = 320 - this.nextBlockX;
			blockNode.y = 748 - this.nextBlockY;
		}
		this.currentBlock = blockNode;
	}
	
	//用户点击屏幕 游戏核心逻辑
	private onScreenClick(event){
		if(!this.isGameOver){
			this.gamePanel.touchEnabled = false;
			this.gamePanel.touchChildren = false;
			if(event.stageX > this.width / 2){
				this.jumpDir = 1;
				this.jump(this.jumpDir);
			}else{
				this.jumpDir = -1;
				this.jump(this.jumpDir);
			}
		}
	}

	private jump(dir: number){
		//播放跳跃音频
		if(this.canPlaySound){
			this.jumpVoice.play(0, 1);
		}
		//调整角色转向
		this.player.scaleX = dir;
		//设置目标位置
		this.jumpTargetBlcok = new egret.Point();
		if(dir > 0){
			this.jumpTargetBlcok.x = this.player.x + this.nextBlockX;
		}else{
			this.jumpTargetBlcok.x = this.player.x - this.nextBlockX;
		}
		this.jumpTargetBlcok.y = this.player.y - this.nextBlockY;
		egret.Tween.get(this).to({factor: 1}, 100).call(()=>{
			this.judgeResult(dir);
		});
	}

	private judgeResult(dir: number){
		if(this.jumpTargetBlcok.x == this.currentBlock.x && this.jumpTargetBlcok.y == this.currentBlock.y){
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
			}, 50).call(()=>{
				this.addBlock();
				//将角色层级设为最上级
				this.gamePanel.addChild(this.player);
			});
			this.gamePanel.touchEnabled = true;
			this.gamePanel.touchChildren = true;
		}else{
			//失败
			console.log("失败");
			this.isGameOver = true;
			this.overPanel.visible = true;
			this.overScoreLabel.text = this.score.toString();
		}
	}

	//重新开始游戏
	private onRestartClick(){
		//隐藏结束面板
		this.overPanel.visible = false;
		this.score = 0;
		this.scoreLabel.text = this.score.toString();
		this.reset();
		this.gamePanel.touchEnabled = true;
		this.gamePanel.touchChildren = true;
	}

	//切换角色
	private onChangeClick(){
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
	}

	private onDefaultClick(){
		this.changePlayer(this.default);
	}

	private onNinjaClick(){
		this.changePlayer(this.ninja);
	}

	private onHobbitClick(){
		this.changePlayer(this.hobbit);
	}

	private onZombieClick(){
		this.changePlayer(this.zombie);
	}

	private changePlayer(image: eui.Image){
		this.selectedPlayer = image.source.toString();
		this.show.source = this.selectedPlayer;
	}

	//选定角色后返回结束界面
	private onBackClick(){
		this.showPanel.visible = false;
	}

	//回到主页
	private onBackMainClick(){
		SceneManager.GetInstance().ChangeScene("mainScene");
	}

	private update(x: number, y: number){
		egret.Tween.removeAllTweens();
		for(var i: number = this.blockArr.length - 1; i >= 0; i--){
			var blockNode = this.blockArr[i];
			if(blockNode.x + (blockNode.width / 2) < 0 || blockNode.x - (blockNode.width / 2) > this.width || blockNode.y - 136 > this.height){
				//方块超出屏幕范围
				console.log(blockNode.x + " / " + blockNode.y);
				this.gamePanel.removeChild(blockNode);
				this.blockArr.splice(i, 1);
				this.recoverBlcokArr.push(blockNode);
			}else{
				//没有超出屏幕范围 则移动位置
				egret.Tween.get(blockNode).to({
					x: blockNode.x + x,
					y: blockNode.y + y
				}, 50);
				//移动位置后新生成的方块会有位移偏差
			}
		}
	}

	public get factor(): number{
		return 0;
	}

	public set factor(value: number){
		this.player.x = (1 - value) * (1 - value) * this.player.x + 2 * value * (1 - value) * (this.player.x + this.jumpTargetBlcok.x) / 2 + value * value * (this.jumpTargetBlcok.x);
		this.player.y = (1 - value) * (1 - value) * this.player.y + 2 * value * (1 - value) * (this.jumpTargetBlcok.y - 80) + value * value * (this.jumpTargetBlcok.y);
	}
}