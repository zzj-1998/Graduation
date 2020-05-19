import UI_fairy from "../../ui/Main/UI_fairy";

export class NPCUtil {

    static getNPCById(id: number) {
        switch(id) {
            case 1:
                return <UI_fairy>fairygui.UIPackage.createObjectFromURL(UI_fairy.URL, UI_fairy);
        }












    }
}