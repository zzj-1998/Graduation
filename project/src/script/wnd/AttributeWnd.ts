

import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_AttributeWnd from "../../ui/Main/UI_AttributeWnd";
import UI_AttributeBar from "../../ui/Main/UI_AttributeBar";
import { MonsterUtil } from "../util/MonsterUtil";

export class AttributeWnd extends UI_AttributeWnd {
    _finish: Function;


    /**创建函数，创建了AttributeWnd类 */
    static create(): AttributeWnd {//create 创建函数,从fgui调取图片保存在attributeWnd里作为二级界面
        let scene = <AttributeWnd>fairygui.UIPackage.createObjectFromURL(UI_AttributeWnd.URL, AttributeWnd);//读取UI_AttributeWnd的地址，创建出AttributeWnd类
        return scene;
    }



    /**初始化当前界面 */
    initScene(finish: Function) {
        this._finish = finish;
        let temp = DataUtil.player.map[DataUtil.player.layer];//map是指整个魔塔二十几层的地图，layer是当前玩家的层数，这句话的意思是 获取玩家所在层数的地图上的一切信息
        let monsterList = temp.monster.filter(function (item, index, self) {
            return self.indexOf(item) == index;
        });
        for (let i = 0; i < monsterList.length; i++) {//把当前存在于地图的怪物循环，显示每一个怪物的信息
            let item = this.m_AttributeList.addItemFromPool() as UI_AttributeBar;
            let data = DataUtil.getMonsterInformationById(monsterList[i]);//得到怪物信息,保存在data;
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

    /**显示二级界面的函数 */
    static showAttributeWnd(comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();//创建
        temp.setXY(comp.x, comp.y);//调取传过来组件m_mapList（画框）的x和y，调整其界面位置
        fairygui.GRoot.inst.addChild(temp);//把界面加到舞台上的m_mapList画框里，
        temp.initScene(finish);//初始化当前界面
    }
}
