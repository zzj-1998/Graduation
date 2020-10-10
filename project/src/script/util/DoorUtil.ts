import UI_door_yellow from "../../ui/Main/UI_door_yellow";
import UI_door_blue from "../../ui/Main/UI_door_blue";
import UI_door_red from "../../ui/Main/UI_door_red";
import { DataUtil } from "./DataUtil";
import UI_door_steel_green from "../../ui/Main/UI_door_steel_green";
import UI_wall_steel from "../../ui/Main/UI_wall_steel";
import { SoundUtil } from "./SoundUtil";

export class DoorUtil {
    /**根据门的id获取对应门的实例对象 */
    static getDoorById(id: number) {
        switch (id) {
            case 1:
                return <UI_door_yellow>fairygui.UIPackage.createObjectFromURL(UI_door_yellow.URL, UI_door_yellow);
            case 2:
                return <UI_door_blue>fairygui.UIPackage.createObjectFromURL(UI_door_blue.URL, UI_door_blue);
            case 3:
                return <UI_door_red>fairygui.UIPackage.createObjectFromURL(UI_door_red.URL, UI_door_red);
            case 4:
                return <UI_door_steel_green>fairygui.UIPackage.createObjectFromURL(UI_door_steel_green.URL, UI_door_steel_green);
            case 5:
                return <UI_wall_steel>fairygui.UIPackage.createObjectFromURL(UI_wall_steel.URL, UI_wall_steel);
            case 6:
                return <UI_wall_steel>fairygui.UIPackage.createObjectFromURL(UI_wall_steel.URL, UI_wall_steel);
        }
    }

    /**根据门的id判断门是否能被打开 */
    static judgeOpenDoorOrNot(id: number) {
        if (id > 3) {
            if (id == 4) return DataUtil.player.meetThief;      //返回有没有遇见过小偷，有遇见过小偷，返回true，否则返回false
            if (id == 5) return true;        //遇见5号门就直接打开
            if (id == 6) {
                if (DataUtil.player.map[DataUtil.player.layer].monster[0]) {    //对应楼层的怪物还没有被消灭完，则不能开门，执行return false
                    return false;   //返回不能开门
                }
                return true;        //否则，返回能开门
            }
        }
        if (DataUtil.player.key[id - 1]) {           //对应门的钥匙数量有剩余，则执行if内的函数
            DataUtil.player.key[id - 1]--;           //对应门的钥匙数量-1
            SoundUtil.playSound(SoundUtil.sound6);   //播放sound6开门声音
            return true;  //返回能开门
        }
        return false;    //没有钥匙，返回不能开门
    }
}