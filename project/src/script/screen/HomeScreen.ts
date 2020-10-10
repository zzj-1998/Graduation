import { ui } from "../../ui/layaMaxUI";
import UI_HomeScreen from "../../ui/Main/UI_HomeScreen";

export default class HomeScreen extends ui.game.homeUI {
    private _view: UI_HomeScreen;           //主界面的一个实例，这里就代表了一个界面UI，里面有界面上的一级组件，可以用m_xxx直接使用
    constructor() {
        super();                            //这里是函数的构造，当HomeScreen被创建的时候执行这里
        var res: Array<any> = [
            { url: "res/UI/Main_atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/UI/Main.bin", type: Laya.Loader.BUFFER }
        ]   //res内表示这个界面需要加载的资源，没有加载资源就进入是看不到东西的
        Laya.loader.load(res, Laya.Handler.create(this, this.init));        //这里表示加载，load函数加载res列表内的资源，加载完之后，进行init函数初始化
    }

    init() {
        fairygui.UIConfig.packageFileExtension = 'bin';         //fgui的默认后缀名修改为bin
        fairygui.UIPackage.addPackage("res/UI/Main");           //这里表示我需要用到Main这个资源包
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject); //向Laya舞台添加fairygui的实例精灵
        this._view = <UI_HomeScreen>fairygui.UIPackage.createObjectFromURL(UI_HomeScreen.URL, UI_HomeScreen); //这里通过UI_HomeScreen在资源包的地址创建一个UI_HomeScreen的实例，即主界面
        this._view.makeFullScreen();                            //使主界面充斥整个屏幕
        fairygui.GRoot.inst.addChild(this._view);               //在fairygui的实例精灵上添加这个界面
        this._view.m_btnExplain.onClick(this, this._explain);   //btnExplain按钮，点击触发_explain函数
        this._view.m_btnLeave.onClick(this, this._leave);       //btnLeave按钮，点击触发_leave函数
        this._view.m_btnStart.onClick(this, this._gameStart);   //btnStart按钮，点击触发_gameStart函数
    }

    /**跳转说明界面 */
    protected _explain() {
        Laya.Scene.open("game/explain.scene", true);        //打开说明界面，true表示关闭现在的home界面
    }

    /**跳转游戏界面 */
    protected _gameStart() {
        Laya.Scene.open("game/game.scene", true);           //打开游戏界面，true表示关闭现在的game界面
    }

    /**离开（未实现） */
    protected _leave() {
        //游戏结束
    }
}