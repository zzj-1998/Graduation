import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_AttributeWnd from "../../ui/Main/UI_AttributeWnd";
import UI_AttributeBar from "../../ui/Main/UI_AttributeBar";
import { MonsterUtil } from "../util/MonsterUtil";

export class AttributeWnd extends UI_AttributeWnd {
    _finish: Function;
    static create(): AttributeWnd {
        let scene = <AttributeWnd>fairygui.UIPackage.createObjectFromURL(UI_AttributeWnd.URL, AttributeWnd);
        return scene;
    }

    initScene(finish: Function) {
        this._finish = finish;
        let temp = DataUtil.player.map[DataUtil.player.layer];
        let monsterList = temp.monster.filter(function (item, index, self) {
            return self.indexOf(item) == index;
        });
        for (let i = 0; i < monsterList.length; i++) {
            let item = this.m_AttributeList.addItemFromPool() as UI_AttributeBar;
            let data = DataUtil.getMonsterInformationById(monsterList[i]);
            item.getChild('icon').asLoader.url = MonsterUtil.getMonsterURLById(monsterList[i]);
            item.getChild('name').asTextField.text = "" + data.name;
            item.getChild('attack').asTextField.text = "" + data.attack;
            item.getChild('defense').asTextField.text = "" + data.defense;
            item.getChild('life').asTextField.text = "" + data.life
            item.getChild('goldAndExe').asTextField.text = "" + data.gold + "·" + data.experience;
            if (DataUtil.player.attack <= data.defense) {
                item.getChild('loss').asTextField.text = "???";
            }
            else if (data.attack <= DataUtil.player.defense) {
                item.getChild('loss').asTextField.text = "0";
            }
            else {
                item.getChild('loss').asTextField.text = "" + Math.floor(data.life / (DataUtil.player.attack - data.defense)) * (data.attack - DataUtil.player.defense);
            }
        }
        this.m_btnClose.onClick(this, ()=>{
            this.recover();
        })
    }
    
    public recover() {
        if (this.parent) {
            this.removeFromParent();
            DataUtil.isOpenBadge = false;
        }
        if (!!this._finish) this._finish();
    }

    static showAttributeWnd(comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initScene(finish);
    }
}
