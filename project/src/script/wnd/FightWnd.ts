import UI_FightWnd from "../../ui/Main/UI_FightWnd";
import { DataUtil } from "../util/DataUtil";
import { MonsterUtil } from "../util/MonsterUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import { LifeComp } from "./LifeComp";

export class FightWnd extends UI_FightWnd {
    data: any;
    _callBack: Function;
    static create(): FightWnd {
        let scene = <FightWnd>fairygui.UIPackage.createObjectFromURL(UI_FightWnd.URL, FightWnd);
        return scene;
    }

    initFightScene(id: number, cb: Function) {
        this.m_type.selectedIndex = 0;
        this.data = DataUtil.getMonsterInformationById(id);
        this.m_life.text = "" + this.data.life;
        this.m_attack.text = "" + this.data.attack;
        this.m_defense.text = "" + this.data.defense;
        this.m_myLife.text = "" + DataUtil.player.life;
        this.m_myAttack.text = "" + DataUtil.player.attack;
        this.m_myDefense.text = "" + DataUtil.player.defense;
        this.m_monster.url = MonsterUtil.getMonsterURLById(id);
        Laya.timer.loop(500, this, this.fightMonster);
        Laya.timer.once(250, this, () => {
            Laya.timer.loop(500, this, this.fightSelf);
        })
        this._callBack = cb;
    }
    
    public recover() {
        if (this.parent) {
            this.removeFromParent();
        }
        DataUtil.player.gold += this.data.gold;
        DataUtil.player.experience += this.data.experience;
        FlyMsgBox.showTip("得到金币数 " + this.data.gold + " 经验值 " + this.data.experience);
        if (!!this._callBack) this._callBack();
    }

    fightMonster() {
        if (DataUtil.player.attack <= this.data.defense) {
            return;
        }
        if (DataUtil.player.hit < this.data.dodge) {
            if (Math.floor(Math.random() * 100) < (this.data.dodge - DataUtil.player.hit)) {
                LifeComp.LossLife(0, 0, this.m_monster);
                return;
            }
        }
        let times = 1;
        if (Math.floor(Math.random() * 100) < DataUtil.player.crit) {
            times = 2;
        }
        let life = Number(this.m_life.text) - ((DataUtil.player.attack - this.data.defense) * times);
        LifeComp.LossLife((DataUtil.player.attack - this.data.defense) * times, times, this.m_monster);
        if (life > 0) {
            this.m_life.text = "" + life;
        }
        else {
            Laya.timer.clearAll(this);
            this.m_type.selectedIndex = 1;
            Laya.timer.once(1000, this, () => {
                this.recover();
            })
        }
    }

    fightSelf() {
        if (this.data.attack <= DataUtil.player.defense) {
            return;
        }
        if (this.data.hit < DataUtil.player.dodge) {
            if (Math.floor(Math.random() * 100) < (DataUtil.player.dodge - this.data.hit)) {
                LifeComp.LossLife(0, 0, this.getChild('n13'));
                return;
            }
        }
        let times = 1;
        if (Math.floor(Math.random() * 100) < this.data.crit) {
            times = 2;
        }
        let life = Number(this.m_myLife.text) - ((this.data.attack - DataUtil.player.defense) * times);
        LifeComp.LossLife((this.data.attack - DataUtil.player.defense) * times, times, this.getChild('n13'));
        if (life > 0) {
            DataUtil.player.life = life;
            this.m_myLife.text = "" + life;
        }
        else {
            Laya.timer.clearAll(this);
            DataUtil.removeNow();
        }
    }

    static startFight(id: number, cb: Function,comp:fairygui.GComponent) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initFightScene(id, cb);
    }
}
