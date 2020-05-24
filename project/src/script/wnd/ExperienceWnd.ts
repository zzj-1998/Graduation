import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_ExperienceWnd from "../../ui/Main/UI_ExperienceWnd";

export class ExperienceWnd extends UI_ExperienceWnd {
    _callBack: Function;
    _finish: Function;
    static create(): ExperienceWnd {
        let scene = <ExperienceWnd>fairygui.UIPackage.createObjectFromURL(UI_ExperienceWnd.URL, ExperienceWnd);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        this.m_btnGrade.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.grade += 1;
                DataUtil.player.attack += 10;
                DataUtil.player.defense += 10;
                DataUtil.player.life += 1000;
                DataUtil.player.hit += 0.5;
                DataUtil.player.crit += 0.5;
                DataUtil.player.dodge += 0.5;
                if (!!this._callBack) this._callBack();
            },100)
        })
        this.m_btnAttack.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.attack += 5;
                if (!!this._callBack) this._callBack();
            },30)
        })
        this.m_btnDefense.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.defense += 5;
                if (!!this._callBack) this._callBack();
            },30)
        })
        this.m_btnHit.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.hit += 0.25;
                if (!!this._callBack) this._callBack();
            },30)
        })
        this.m_btnCrit.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.crit += 0.25;
                if (!!this._callBack) this._callBack();
            },30)
        })
        this.m_btnDodge.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.dodge += 0.25;
                if (!!this._callBack) this._callBack();
            },30)
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

    protected useExperience(success: Function,experience: number) {
        if (DataUtil.player.useExperience(experience)) {
            success();
        }
        else {
            FlyMsgBox.showTip("经验不足");
        }
    }

    static showExperienceWnd(cb: Function,comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initScene(cb,finish);
    }
}
