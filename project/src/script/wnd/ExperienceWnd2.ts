import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_ExperienceWnd2 from "../../ui/Main/UI_ExperienceWnd2";
import { SoundUtil } from "../util/SoundUtil";

export class ExperienceWnd2 extends UI_ExperienceWnd2 {
    _callBack: Function;
    _finish: Function;
    static create(): ExperienceWnd2 {
        let scene = <ExperienceWnd2>fairygui.UIPackage.createObjectFromURL(UI_ExperienceWnd2.URL, ExperienceWnd2);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        this.m_btnGrade.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.grade += 3;
                DataUtil.player.attack += 30;
                DataUtil.player.defense += 30;
                DataUtil.player.life += 3000;
                DataUtil.player.hit += 1.5;
                DataUtil.player.crit += 1.5;
                DataUtil.player.dodge += 1.5;
                SoundUtil.playSound(SoundUtil.sound5);
                if (!!this._callBack) this._callBack();
            },270)
        })
        this.m_btnAttack.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.attack += 17;
                if (!!this._callBack) this._callBack();
            },95)
        })
        this.m_btnDefense.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.defense += 17;
                if (!!this._callBack) this._callBack();
            },95)
        })
        this.m_btnHit.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.hit += 0.85;
                if (!!this._callBack) this._callBack();
            },95)
        })
        this.m_btnCrit.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.crit += 0.85;
                if (!!this._callBack) this._callBack();
            },95)
        })
        this.m_btnDodge.onClick(this, ()=>{
            this.useExperience(()=>{
                DataUtil.player.dodge += 0.85;
                if (!!this._callBack) this._callBack();
            },95)
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
