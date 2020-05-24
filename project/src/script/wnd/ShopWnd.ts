import { DataUtil } from "../util/DataUtil";
import UI_ShopWnd from "../../ui/Main/UI_ShopWnd";
import { FlyMsgBox } from "./FlyMsgBox";

export class ShopWnd extends UI_ShopWnd {
    _callBack: Function;
    _finish: Function;
    static create(): ShopWnd {
        let scene = <ShopWnd>fairygui.UIPackage.createObjectFromURL(UI_ShopWnd.URL, ShopWnd);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        this.m_btnLife.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.life += 800;
                if (!!this._callBack) this._callBack();
            })
        })
        this.m_btnAttack.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.attack += 4;
                if (!!this._callBack) this._callBack();
            })
            
        })
        this.m_btnDefense.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.defense += 4;
                if (!!this._callBack) this._callBack();
            })
            
        })
        this.m_btnHit.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.hit += 0.2;
                if (!!this._callBack) this._callBack();
            })
            
        })
        this.m_btnCrit.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.crit += 0.2;
                if (!!this._callBack) this._callBack();
            })
        })
        this.m_btnDodge.onClick(this, ()=>{
            this.useMoney(()=>{
                DataUtil.player.dodge += 0.2;
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
        if (DataUtil.player.useGold(25)) {
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
