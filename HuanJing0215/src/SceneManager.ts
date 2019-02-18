class SceneManager extends egret.Sprite {

	private mainScene: MainScene;
	private gameScene: GameScene;

	private static instance: SceneManager;

	private selectedPlayer: string;

	public constructor() {
		super();
		this.init();
	}

	private init(){
		this.mainScene = new MainScene();
		//默认添加开始界面
		this.addChild(this.mainScene);
	}

	public static GetInstance(): SceneManager{
		if(this.instance == null){
			this.instance = new SceneManager();
		}
		return this.instance;
	}

	public ChangeScene(type){

		if(type == "gameScene"){
			this.mainScene.release();
			if(!this.selectedPlayer){
				this.selectedPlayer = "characters_01_png";
			}
			this.gameScene = new GameScene(this.selectedPlayer);
		}

		this.removeChildren();
		this.addChild(this[type]);
	}

	public SetSelectPlayer(name: string){
		this.selectedPlayer = name;
	}
}