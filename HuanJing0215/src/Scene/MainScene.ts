class MainScene extends eui.Component implements  eui.UIComponent {
	
	public imgBg:eui.Image;

	public mainPanel:eui.Group;
	public btnStart:eui.Button;
	public btnShop:eui.Button;
	public btnSoundOff:eui.Button;
	public btnSoundOn:eui.Button;

	public selectPanel:eui.Group;
	public imgDefault:eui.Image;
	public imgNinja:eui.Image;
	public imgHobbit:eui.Image;
	public imgZombie:eui.Image;
	public imgShow:eui.Image;
	public btnBack:eui.Button;

	private selectedPlayer: string = "";
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	//初始化场景
	private init(){
		this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
		this.btnShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
		this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this)
		this.selectPanel.visible = false;
		this.mainPanel.visible = true;
	}

	private onStartClick(){
		//切换场景
		SceneManager.GetInstance().ChangeScene("gameScene");
	}

	private onShopClick(){
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
		if(!this.selectedPlayer){
			this.selectedPlayer = "characters_01_png";
		}
		this.imgShow.source = this.selectedPlayer;
	}

	private onDefaultClick(){
		this.changePlayer(this.imgDefault);
	}

	private onNinjaClick(){
		this.changePlayer(this.imgNinja);
	}

	private onHobbitClick(){
		this.changePlayer(this.imgHobbit);
	}

	private onZombieClick(){
		this.changePlayer(this.imgZombie);
	}

	private changePlayer(player: eui.Image){
		this.selectedPlayer = player.source.toString();
		this.imgShow.source = this.selectedPlayer;
	}

	private onBackClick(){
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
		if(this.selectedPlayer == ""){
			this.selectedPlayer = "character_01_png";
		}
		SceneManager.GetInstance().SetSelectPlayer(this.selectedPlayer);
	}

	//释放资源
	public release(){
		if(this.btnStart.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
			this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
		}
		if(this.btnShop.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
			this.btnShop.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
		}
		if(this.btnBack.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
			this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
		}
	}
	
}