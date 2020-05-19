import { ui } from "../../ui/layaMaxUI";
import UI_ExplainScreen from "../../ui/Main/UI_ExplainScreen";

export default class ExplainScreen extends ui.game.explainUI {
    private _view: UI_ExplainScreen;
    constructor() {
        super();
        var res: Array<any> = [
            { url: "res/UI/Main_atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/UI/Main.bin", type: Laya.Loader.BUFFER }
        ]
        Laya.loader.load(res, Laya.Handler.create(this, this.init));
    }

    init() {
        fairygui.UIPackage.addPackage("res/UI/Main");
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this._view = <UI_ExplainScreen>fairygui.UIPackage.createObjectFromURL(UI_ExplainScreen.URL, UI_ExplainScreen);
        this._view.makeFullScreen();
        fairygui.GRoot.inst.addChild(this._view);
        this._view.m_btnClose.onClick(this, this._home);
    }

    protected _home() {
        Laya.Scene.open("game/home.scene", true);
    }
}