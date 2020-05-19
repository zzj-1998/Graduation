import { ui } from "../../ui/layaMaxUI";
import UI_HomeScreen from "../../ui/Main/UI_HomeScreen";

export default class HomeScreen extends ui.game.homeUI {
    private _view: UI_HomeScreen;
    constructor() {
        super();
        var res: Array<any> = [
            { url: "res/UI/Main_atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/UI/Main.bin", type: Laya.Loader.BUFFER }
        ]
        Laya.loader.load(res, Laya.Handler.create(this, this.init));
    }

    init() {
        fairygui.UIConfig.packageFileExtension = 'bin';
        fairygui.UIPackage.addPackage("res/UI/Main");
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this._view = <UI_HomeScreen>fairygui.UIPackage.createObjectFromURL(UI_HomeScreen.URL, UI_HomeScreen);
        this._view.makeFullScreen();
        fairygui.GRoot.inst.addChild(this._view);
        this._view.m_btnExplain.onClick(this, this._explain);
        this._view.m_btnLeave.onClick(this, this._leave);
        this._view.m_btnStart.onClick(this, this._gameStart);
    }

    protected _explain() {
        Laya.Scene.open("game/explain.scene", true);
    }

    protected _gameStart() {
        Laya.Scene.open("game/game.scene", true);
    }

    protected _leave() {
        //游戏结束
    }
}