import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_BuyKeyWnd from "../../ui/Main/UI_BuyKeyWnd";

export class BuyKeyWnd extends UI_BuyKeyWnd {
    _callBack: Function;
    _finish: Function;
    static create(): BuyKeyWnd {
        let scene = <BuyKeyWnd>fairygui.UIPackage.createObjectFromURL(UI_BuyKeyWnd.URL, BuyKeyWnd);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        this.m_btnYellowKey.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.key[0]++;
                if (!!this._callBack) this._callBack();
            },10)
        })
        this.m_btnBlueKey.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.key[1]++;
                if (!!this._callBack) this._callBack();
            },50)
        })
        this.m_btnRedKey.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.key[2]++;
                if (!!this._callBack) this._callBack();
            },100)
        })
        this.m_btnClose.onClick(this, ()=>{
            this.recover();
        })
    }
    
    public recover() {
        if (this.parent) {
            this.removeFromParent();
        }
        if (!!this._finish) this._finish();
    }

    protected useMoney(success: Function,gold: number) {
        if (DataUtil.player.useGold(gold)) {
            success();
        }
        else {
            FlyMsgBox.showTip("金币不足");
        }
    }

    static showBuyKeyWnd(cb: Function,comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initScene(cb,finish);
    }
}
