import UI_door_yellow from "../../ui/Main/UI_door_yellow";
import UI_door_blue from "../../ui/Main/UI_door_blue";
import UI_door_red from "../../ui/Main/UI_door_red";
import { DataUtil } from "./DataUtil";

export class DoorUtil {
    static getDoorById(id: number) {
        switch (id) {
            case 1:
                return <UI_door_yellow>fairygui.UIPackage.createObjectFromURL(UI_door_yellow.URL, UI_door_yellow);
            case 2:
                return <UI_door_blue>fairygui.UIPackage.createObjectFromURL(UI_door_blue.URL, UI_door_blue);
            case 3:
                return <UI_door_red>fairygui.UIPackage.createObjectFromURL(UI_door_red.URL, UI_door_red);
        }
    }

    static judgeOpenDoorOrNot(id: number) {
        if (id > 3) return false;
        if (DataUtil.player.key[id - 1]) {
            DataUtil.player.key[id - 1]--;
            return true;
        }
        return false;
    }
}