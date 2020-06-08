import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_SellKeyWnd from "../../ui/Main/UI_SellKeyWnd";

export class SellKeyWnd extends UI_SellKeyWnd {
    _callBack: Function;
    _finish: Function;
    static create(): SellKeyWnd {
        let scene = <SellKeyWnd>fairygui.UIPackage.createObjectFromURL(UI_SellKeyWnd.URL, SellKeyWnd);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        this.m_btnYellowKey.onClick(this, ()=>{
            this.getMoney(()=>{
                DataUtil.player.gold += 7;
                if (!!this._callBack) this._callBack();
            },0)
        })
        this.m_btnBlueKey.onClick(this, ()=>{
            this.getMoney(()=>{
                DataUtil.player.gold += 35;
                if (!!this._callBack) this._callBack();
            },1)
        })
        this.m_btnRedKey.onClick(this, ()=>{
            this.getMoney(()=>{
                DataUtil.player.gold += 70;
                if (!!this._callBack) this._callBack();
            },2)
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

    protected getMoney(success: Function,key: number) {
        if (DataUtil.player.key[key] > 0) {
            DataUtil.player.key[key]--;
            success();
        }
        else {
            FlyMsgBox.showTip("钥匙数量不足");
        }
    }

    static showSellKeyWnd(cb: Function,comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initScene(cb,finish);
    }
}
