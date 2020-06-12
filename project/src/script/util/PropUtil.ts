import UI_Key_yellow from "../../ui/Main/UI_Key_yellow";
import UI_Key_blue from "../../ui/Main/UI_Key_blue";
import UI_Key_red from "../../ui/Main/UI_Key_red";
import { DataUtil } from "./DataUtil";
import { FlyMsgBox } from "../wnd/FlyMsgBox";
import UI_Blood_red from "../../ui/Main/UI_Blood_red";
import UI_Blood_blue from "../../ui/Main/UI_Blood_blue";
import UI_Stone_Attack from "../../ui/Main/UI_Stone_Attack";
import UI_Stone_Defense from "../../ui/Main/UI_Stone_Defense";
import UI_Shield_01 from "../../ui/Main/UI_Shield_01";
import UI_KeyBox from "../../ui/Main/UI_KeyBox";
import UI_Sword_01 from "../../ui/Main/UI_Sword_01";
import UI_Shield_02 from "../../ui/Main/UI_Shield_02";
import UI_Feather_01 from "../../ui/Main/UI_Feather_01";
import UI_Nugget from "../../ui/Main/UI_Nugget";
import UI_Badge from "../../ui/Main/UI_Badge";
import UI_Wheel from "../../ui/Main/UI_Wheel";
import UI_Cross from "../../ui/Main/UI_Cross";
import UI_Sword_02 from "../../ui/Main/UI_Sword_02";
import UI_Feather_02 from "../../ui/Main/UI_Feather_02";
import UI_Hammer from "../../ui/Main/UI_Hammer";
import UI_Shield_03 from "../../ui/Main/UI_Shield_03";
import UI_Sword_03 from "../../ui/Main/UI_Sword_03";
import UI_LifeBottle from "../../ui/Main/UI_LifeBottle";
import { SoundUtil } from "./SoundUtil";

export class PropUtil {

    public static getPropById(id: number) {
        switch (id) {
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
            case 8:
                return <UI_Shield_01>fairygui.UIPackage.createObjectFromURL(UI_Shield_01.URL, UI_Shield_01);
            case 9:
                return <UI_KeyBox>fairygui.UIPackage.createObjectFromURL(UI_KeyBox.URL, UI_KeyBox);
            case 10:
                return <UI_Sword_01>fairygui.UIPackage.createObjectFromURL(UI_Sword_01.URL, UI_Sword_01);
            case 11:
                return <UI_Shield_02>fairygui.UIPackage.createObjectFromURL(UI_Shield_02.URL, UI_Shield_02);
            case 12:
                return <UI_Feather_01>fairygui.UIPackage.createObjectFromURL(UI_Feather_01.URL, UI_Feather_01);
            case 13:
                return <UI_Nugget>fairygui.UIPackage.createObjectFromURL(UI_Nugget.URL, UI_Nugget);
            case 14:
                return <UI_Badge>fairygui.UIPackage.createObjectFromURL(UI_Badge.URL, UI_Badge);
            case 15:
                return <UI_Wheel>fairygui.UIPackage.createObjectFromURL(UI_Wheel.URL, UI_Wheel);
            case 16:
                return <UI_Cross>fairygui.UIPackage.createObjectFromURL(UI_Cross.URL, UI_Cross);
            case 17:
                return <UI_Sword_02>fairygui.UIPackage.createObjectFromURL(UI_Sword_02.URL, UI_Sword_02);
            case 18:
                return <UI_Feather_02>fairygui.UIPackage.createObjectFromURL(UI_Feather_02.URL, UI_Feather_02);
            case 19:
                return <UI_Hammer>fairygui.UIPackage.createObjectFromURL(UI_Hammer.URL, UI_Hammer);
            case 20:
                return <UI_Shield_03>fairygui.UIPackage.createObjectFromURL(UI_Shield_03.URL, UI_Shield_03);
            case 21:
                return <UI_Sword_03>fairygui.UIPackage.createObjectFromURL(UI_Sword_03.URL, UI_Sword_03);
            case 22:
                return <UI_LifeBottle>fairygui.UIPackage.createObjectFromURL(UI_LifeBottle.URL, UI_LifeBottle);
            default:
                console.log("理论不会走到这里，有错误 函数名:getPropById", id);
                break;
        }












    }

    public static addProp(id: number) {
        SoundUtil.playSound(SoundUtil.sound7);
        switch (id) {
            case 1:
                DataUtil.player.key[0]++;
                FlyMsgBox.showTip("得到一把 黄钥匙！");
                return false;
            case 2:
                DataUtil.player.key[1]++;
                FlyMsgBox.showTip("得到一把 蓝钥匙！");
                return false;
            case 3:
                DataUtil.player.key[2]++;
                FlyMsgBox.showTip("得到一把 红钥匙！");
                return false;
            case 4:
                FlyMsgBox.showTip("得到一个 小血瓶！");
                return true;
            case 5:
                FlyMsgBox.showTip("得到一个 大血瓶！");
                return true;
            case 6:
                DataUtil.player.attack += 3;
                FlyMsgBox.showTip("得到一个红宝石 攻击力加 3 ！");
                return false;
            case 7:
                DataUtil.player.defense += 3;
                FlyMsgBox.showTip("得到一个蓝宝石 防御力加 3 ！");
                return false;
            case 8:
                DataUtil.player.attack += 10;
                FlyMsgBox.showTip("得到 铁剑 攻击加 10 ！");
                return false;
            case 9:
                DataUtil.player.key[0]++;
                DataUtil.player.key[1]++;
                DataUtil.player.key[2]++;
                FlyMsgBox.showTip("得到 钥匙盒 各种钥匙数加 1 ！");
                return false;
            case 10:
                DataUtil.player.defense += 10;
                FlyMsgBox.showTip("得到 铁盾 防御加 10 ！");
                return false;
            case 11:
                DataUtil.player.attack += 70;
                FlyMsgBox.showTip("得到 青峰剑 攻击加 70 ！");
                return false;
            case 12:
                DataUtil.player.grade += 1;
                DataUtil.player.attack += 10;
                DataUtil.player.defense += 10;
                DataUtil.player.life += 1000;
                DataUtil.player.hit += 0.5;
                DataUtil.player.crit += 0.5;
                DataUtil.player.dodge += 0.5;
                FlyMsgBox.showTip("得到 小飞羽 等级提升一级 ！");
                return false;
            case 13:
                DataUtil.player.gold += 300;
                FlyMsgBox.showTip("得到 金块 金币数加 300 ！");
                return false;
            case 14:
                DataUtil.player.isHaveBadge = true;
                FlyMsgBox.showTip("得到 圣光徽 点击右侧图标即可使用 ！");
                return false;
            case 15:
                DataUtil.player.isHaveWheel = true;
                FlyMsgBox.showTip("得到 风之轮盘 点击右侧图标即可使用 ！");
                return false;
            case 16:
                DataUtil.player.life += Math.floor(DataUtil.player.life / 3);
                DataUtil.player.attack += Math.floor(DataUtil.player.attack / 3);
                DataUtil.player.defense += Math.floor(DataUtil.player.defense / 3);
                FlyMsgBox.showTip("得到 幸运十字架 血攻防提升三分之一 ！");
                return false;
            case 17:
                DataUtil.player.defense += 85;
                FlyMsgBox.showTip("得到 黄金盾 防御加 85 ！");
                return false;
            case 18:
                DataUtil.player.grade += 3;
                DataUtil.player.attack += 30;
                DataUtil.player.defense += 30;
                DataUtil.player.life += 3000;
                DataUtil.player.hit += 1.5;
                DataUtil.player.crit += 1.5;
                DataUtil.player.dodge += 1.5;
                FlyMsgBox.showTip("得到 大飞羽 等级提升三级 ！");
                return false;
            case 19:
                DataUtil.player.isHaveHammer = true;
                FlyMsgBox.showTip("得到 星光神锒 18层门已经开启 ！");
                return false;
            case 20:
                DataUtil.player.attack += 150;
                FlyMsgBox.showTip("得到 星光神剑 攻击加 150 ！");
                return false;
            case 21:
                DataUtil.player.defense += 190;
                FlyMsgBox.showTip("得到 光芒神盾 防御加 190 ！");
                return false;
            case 22:
                DataUtil.player.life += DataUtil.player.life;
                FlyMsgBox.showTip("得到 圣水瓶 生命力翻倍 ！");
                return false;
            default:
                console.log("理论不会走到这里，有错误 函数名:addProp", id);
                return false;
        }
    }
}