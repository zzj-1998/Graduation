import { DataUtil } from "../util/DataUtil";
import UI_ShopWnd2 from "../../ui/Main/UI_ShopWnd2";
import { FlyMsgBox } from "./FlyMsgBox";

export class ShopWnd2 extends UI_ShopWnd2 {
    _callBack: Function;
    _finish: Function;
    static create(): ShopWnd2 {
        let scene = <ShopWnd2>fairygui.UIPackage.createObjectFromURL(UI_ShopWnd2.URL, ShopWnd2);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        this.m_btnLife.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.life += 4000;
                if (!!this._callBack) this._callBack();
            })
        })
        this.m_btnAttack.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.attack += 20;
                if (!!this._callBack) this._callBack();
            })
            
        })
        this.m_btnDefense.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.defense += 20;
                if (!!this._callBack) this._callBack();
            })
            
        })
        this.m_btnHit.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.hit += 1;
                if (!!this._callBack) this._callBack();
            })
            
        })
        this.m_btnCrit.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.crit += 1;
                if (!!this._callBack) this._callBack();
            })
        })
        this.m_btnDodge.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.dodge += 1;
                if (!!this._callBack) this._callBack();
            })
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

    protected useMoney(success: Function) {
        if (DataUtil.player.useGold(100)) {
            success();
        }
        else {
            FlyMsgBox.showTip("金币不足");
        }
    }

    static showShop(cb: Function,comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initScene(cb,finish);
    }
}
