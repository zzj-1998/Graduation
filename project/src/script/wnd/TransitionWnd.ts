import { ui } from "../../ui/layaMaxUI";
import UI_TransitionWnd from "../../ui/Main/UI_TransitionWnd";
import { DataUtil } from "../util/DataUtil";

export default class TransitionWnd extends ui.game.gameUI {
    private _view: UI_TransitionWnd;
    protected _layer: number;
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
        this._view = <UI_TransitionWnd>fairygui.UIPackage.createObjectFromURL(UI_TransitionWnd.URL, UI_TransitionWnd);
        this._view.makeFullScreen();
        fairygui.GRoot.inst.addChild(this._view);
        this.showOriginalLayer(this._layer);
        Laya.timer.once(1500, this, this.changeLayer);
        Laya.timer.once(2500, this, this.hide);
    }

    onOpened(data) {
        this._layer = data;
    }

    protected hide() {
        Laya.Scene.close("game/transition.scene");
        this._view.removeFromParent();
    }

    protected changeLayer() {
        if (DataUtil.player.layer <= 0) {
            this._view.m_type.selectedIndex = 0;
        }
        else {
            this._view.m_type.selectedIndex = 1;
            this._view.m_layer.text = "" + DataUtil.player.layer;
        }
    }

    protected showOriginalLayer(Orlayer: number) {
        if (Orlayer <= 0) {
            this._view.m_type.selectedIndex = 0;
        }
        else {
            this._view.m_type.selectedIndex = 1;
            this._view.m_layer.text = "" + Orlayer;
        }
    }
}