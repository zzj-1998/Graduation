import UI_Key_yellow from "../../ui/Main/UI_Key_yellow";
import UI_Key_blue from "../../ui/Main/UI_Key_blue";
import UI_Key_red from "../../ui/Main/UI_Key_red";
import { DataUtil } from "./DataUtil";
import { FlyMsgBox } from "../wnd/FlyMsgBox";
import UI_Blood_red from "../../ui/Main/UI_Blood_red";
import UI_Blood_blue from "../../ui/Main/UI_Blood_blue";
import UI_Stone_Attack from "../../ui/Main/UI_Stone_Attack";
import UI_Stone_Defense from "../../ui/Main/UI_Stone_Defense";

export class PropUtil {

    public static getPropById(id: number) {
        switch(id) {
            case 1:
                return <UI_Key_yellow>fairygui.UIPackage.createObjectFromURL(UI_Key_yellow.URL, UI_Key_yellow);
            case 2:
                return <UI_Key_blue>fairygui.UIPackage.createObjectFromURL(UI_Key_blue.URL, UI_Key_blue);
            case 3:
                return <UI_Key_red>fairygui.UIPackage.createObjectFromURL(UI_Key_red.URL, UI_Key_red);
            case 4:
                return <UI_Blood_red>fairygui.UIPackage.createObjectFromURL(UI_Blood_red.URL, UI_Blood_red);
            case 5:
                return <UI_Blood_blue>fairygui.UIPackage.createObjectFromURL(UI_Blood_blue.URL, UI_Blood_blue);
            case 6:
                return <UI_Stone_Attack>fairygui.UIPackage.createObjectFromURL(UI_Stone_Attack.URL, UI_Stone_Attack);
            case 7:
                return <UI_Stone_Defense>fairygui.UIPackage.createObjectFromURL(UI_Stone_Defense.URL, UI_Stone_Defense);
            default:
                console.log("理论不会走到这里，有错误 函数名:getPropById",id);
                break;
        }












    }

    public static addProp(id: number) {
        switch (id) {
            case 1:
                DataUtil.player.key[0]++;
                FlyMsgBox.showTip("获得黄钥匙*1");
                return false;
            case 2:
                DataUtil.player.key[1]++;
                FlyMsgBox.showTip("获得蓝钥匙*1");
                return false;
            case 3:
                DataUtil.player.key[2]++;
                FlyMsgBox.showTip("获得红钥匙*1");
                return false;
            case 4:
                FlyMsgBox.showTip("获得红血瓶*1");
                return true;
            case 5:
                FlyMsgBox.showTip("获得蓝血瓶*1");
                return true;
            case 6:
                DataUtil.player.attack += 3;
                FlyMsgBox.showTip("获得红宝石,攻击力提升3");
                return false;
            case 7:
                DataUtil.player.defense += 3;
                FlyMsgBox.showTip("获得蓝宝石,防御力提升3");
                return false;
            default:
                console.log("理论不会走到这里，有错误 函数名:addProp",id);
                return false;
        }
    }
}