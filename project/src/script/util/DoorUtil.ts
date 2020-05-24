import UI_door_yellow from "../../ui/Main/UI_door_yellow";
import UI_door_blue from "../../ui/Main/UI_door_blue";
import UI_door_red from "../../ui/Main/UI_door_red";
import { DataUtil } from "./DataUtil";
import UI_door_steel_green from "../../ui/Main/UI_door_steel_green";
import UI_wall_steel from "../../ui/Main/UI_wall_steel";

export class DoorUtil {
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

    static judgeOpenDoorOrNot(id: number) {
        if (id > 3) {
            if (id == 4) return false;
            if (id == 5) return true;
            if (id == 6) {
                if (DataUtil.player.map[DataUtil.player.layer].monster[0]) {
                    return false;
                }
                return true;
            }
        }
        if (DataUtil.player.key[id - 1]) {
            DataUtil.player.key[id - 1]--;
            return true;
        }
        return false;
    }
}