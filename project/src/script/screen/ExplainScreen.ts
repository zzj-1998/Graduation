import { ui } from "../../ui/layaMaxUI";
import UI_ExplainScreen from "../../ui/Main/UI_ExplainScreen";

export default class ExplainScreen extends ui.game.explainUI {
    private _view: UI_ExplainScreen;            //说明界面的一个实例，这里就代表了一个界面UI，里面有界面上的一级组件，可以用m_xxx直接使用
    constructor() {
        super();                                //这里是函数的构造，当ExplainScreen被创建的时候执行这里
        var res: Array<any> = [
            { url: "res/UI/Main_atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/UI/Main.bin", type: Laya.Loader.BUFFER }
        ]   //res内表示这个界面需要加载的资源，没有加载资源就进入是看不到东西的
        Laya.loader.load(res, Laya.Handler.create(this, this.init));        //这里表示加载，load函数加载res列表内的资源，加载完之后，进行init函数初始化
    }

    init() {
        fairygui.UIPackage.addPackage("res/UI/Main");               //这里表示我需要用到Main这个资源包
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);     //向Laya舞台添加fairygui的实例精灵
        this._view = <UI_ExplainScreen>fairygui.UIPackage.createObjectFromURL(UI_ExplainScreen.URL, UI_ExplainScreen);   //这里通过UI_HomeScreen在资源包的地址创建一个UI_HomeScreen的实例，即主界面
        this._view.makeFullScreen();                                //使说明界面充斥整个屏幕
        fairygui.GRoot.inst.addChild(this._view);                   //在fairygui的实例精灵上添加这个界面
        this._view.m_btnClose.onClick(this, this._home);            //btnClose按钮，点击触发_home函数
    }

    /**回到主界面 */
    protected _home() {
        Laya.Scene.open("game/home.scene", true);                   //打开主界面，true表示关闭现在的说明界面
    }
}