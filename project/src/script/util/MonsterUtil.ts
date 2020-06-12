import UI_Monster01 from "../../ui/Main/UI_Monster01";
import UI_Monster02 from "../../ui/Main/UI_Monster02";
import UI_Monster03 from "../../ui/Main/UI_Monster03";
import UI_Monster04 from "../../ui/Main/UI_Monster04";
import UI_Monster05 from "../../ui/Main/UI_Monster05";
import UI_Monster06 from "../../ui/Main/UI_Monster06";
import UI_Monster07 from "../../ui/Main/UI_Monster07";
import UI_Monster08 from "../../ui/Main/UI_Monster08";
import UI_Monster09 from "../../ui/Main/UI_Monster09";
import UI_Monster10 from "../../ui/Main/UI_Monster10";
import UI_Monster11 from "../../ui/Main/UI_Monster11";
import UI_Monster12 from "../../ui/Main/UI_Monster12";
import UI_Monster13 from "../../ui/Main/UI_Monster13";
import UI_Monster14 from "../../ui/Main/UI_Monster14";
import UI_Monster15 from "../../ui/Main/UI_Monster15";
import UI_Monster16 from "../../ui/Main/UI_Monster16";
import UI_Monster17 from "../../ui/Main/UI_Monster17";
import UI_Monster18 from "../../ui/Main/UI_Monster18";
import UI_Monster19 from "../../ui/Main/UI_Monster19";
import UI_Monster20 from "../../ui/Main/UI_Monster20";
import UI_Monster21 from "../../ui/Main/UI_Monster21";
import UI_Monster22 from "../../ui/Main/UI_Monster22";
import UI_Monster25 from "../../ui/Main/UI_Monster25";
import UI_Monster26 from "../../ui/Main/UI_Monster26";
import UI_Monster27 from "../../ui/Main/UI_Monster27";
import UI_Monster28 from "../../ui/Main/UI_Monster28";
import UI_Monster30 from "../../ui/Main/UI_Monster30";
import UI_Monster32 from "../../ui/Main/UI_Monster32";
import UI_Monster33 from "../../ui/Main/UI_Monster33";
import UI_Monster34 from "../../ui/Main/UI_Monster34";
import UI_Monster35 from "../../ui/Main/UI_Monster35";

export class MonsterUtil {

    // 无23 24 29 31
    static getMonsterById(id: number) {
        switch(id) {
            case 1:
                return <UI_Monster01>fairygui.UIPackage.createObjectFromURL(UI_Monster01.URL, UI_Monster01);
            case 2:
                return <UI_Monster02>fairygui.UIPackage.createObjectFromURL(UI_Monster02.URL, UI_Monster02);
            case 3:
                return <UI_Monster03>fairygui.UIPackage.createObjectFromURL(UI_Monster03.URL, UI_Monster03);
            case 4:
                return <UI_Monster04>fairygui.UIPackage.createObjectFromURL(UI_Monster04.URL, UI_Monster04);
            case 5:
                return <UI_Monster05>fairygui.UIPackage.createObjectFromURL(UI_Monster05.URL, UI_Monster05);
            case 6:
                return <UI_Monster06>fairygui.UIPackage.createObjectFromURL(UI_Monster06.URL, UI_Monster06);
            case 7:
                return <UI_Monster07>fairygui.UIPackage.createObjectFromURL(UI_Monster07.URL, UI_Monster07);
            case 8:
                return <UI_Monster08>fairygui.UIPackage.createObjectFromURL(UI_Monster08.URL, UI_Monster08);
            case 9:
                return <UI_Monster09>fairygui.UIPackage.createObjectFromURL(UI_Monster09.URL, UI_Monster09);
            case 10:
                return <UI_Monster10>fairygui.UIPackage.createObjectFromURL(UI_Monster10.URL, UI_Monster10);
            case 11:
                return <UI_Monster11>fairygui.UIPackage.createObjectFromURL(UI_Monster11.URL, UI_Monster11);
            case 12:
                return <UI_Monster12>fairygui.UIPackage.createObjectFromURL(UI_Monster12.URL, UI_Monster12);
            case 13:
                return <UI_Monster13>fairygui.UIPackage.createObjectFromURL(UI_Monster13.URL, UI_Monster13);
            case 14:
                return <UI_Monster14>fairygui.UIPackage.createObjectFromURL(UI_Monster14.URL, UI_Monster14);
            case 15:
                return <UI_Monster15>fairygui.UIPackage.createObjectFromURL(UI_Monster15.URL, UI_Monster15);
            case 16:
                return <UI_Monster16>fairygui.UIPackage.createObjectFromURL(UI_Monster16.URL, UI_Monster16);
            case 17:
                return <UI_Monster17>fairygui.UIPackage.createObjectFromURL(UI_Monster17.URL, UI_Monster17);
            case 18:
                return <UI_Monster18>fairygui.UIPackage.createObjectFromURL(UI_Monster18.URL, UI_Monster18);
            case 19:
                return <UI_Monster19>fairygui.UIPackage.createObjectFromURL(UI_Monster19.URL, UI_Monster19);
            case 20:
                return <UI_Monster20>fairygui.UIPackage.createObjectFromURL(UI_Monster20.URL, UI_Monster20);
            case 21:
                return <UI_Monster21>fairygui.UIPackage.createObjectFromURL(UI_Monster21.URL, UI_Monster21);
            case 22:
                return <UI_Monster22>fairygui.UIPackage.createObjectFromURL(UI_Monster22.URL, UI_Monster22);
            case 25:
                return <UI_Monster25>fairygui.UIPackage.createObjectFromURL(UI_Monster25.URL, UI_Monster25);
            case 26:
                return <UI_Monster26>fairygui.UIPackage.createObjectFromURL(UI_Monster26.URL, UI_Monster26);
            case 27:
                return <UI_Monster27>fairygui.UIPackage.createObjectFromURL(UI_Monster27.URL, UI_Monster27);
            case 28:
                return <UI_Monster28>fairygui.UIPackage.createObjectFromURL(UI_Monster28.URL, UI_Monster28);
            case 30:
                return <UI_Monster30>fairygui.UIPackage.createObjectFromURL(UI_Monster30.URL, UI_Monster30);
            case 32:
                return <UI_Monster32>fairygui.UIPackage.createObjectFromURL(UI_Monster32.URL, UI_Monster32);
            case 33:
                return <UI_Monster33>fairygui.UIPackage.createObjectFromURL(UI_Monster33.URL, UI_Monster33);
            case 34:
                return <UI_Monster34>fairygui.UIPackage.createObjectFromURL(UI_Monster34.URL, UI_Monster34);
            case 35:
                return <UI_Monster35>fairygui.UIPackage.createObjectFromURL(UI_Monster35.URL, UI_Monster35);
            case 36:
                return <UI_Monster12>fairygui.UIPackage.createObjectFromURL(UI_Monster12.URL, UI_Monster12);
        }














    }
    static getMonsterURLById(id: number) {
        switch(id) {
            case 1:
                return UI_Monster01.URL;
            case 2:
                return UI_Monster02.URL;
            case 3:
                return UI_Monster03.URL;
            case 4:
                return UI_Monster04.URL;
            case 5:
                return UI_Monster05.URL;
            case 6:
                return UI_Monster06.URL;
            case 7:
                return UI_Monster07.URL;
            case 8:
                return UI_Monster08.URL;
            case 9:
                return UI_Monster09.URL;
            case 10:
                return UI_Monster10.URL;
            case 11:
                return UI_Monster11.URL;
            case 12:
                return UI_Monster12.URL;
            case 13:
                return UI_Monster13.URL;
            case 14:
                return UI_Monster14.URL;
            case 15:
                return UI_Monster15.URL;
            case 16:
                return UI_Monster16.URL;
            case 17:
                return UI_Monster17.URL;
            case 18:
                return UI_Monster18.URL;
            case 19:
                return UI_Monster19.URL;
            case 20:
                return UI_Monster20.URL;
            case 21:
                return UI_Monster21.URL;
            case 22:
                return UI_Monster22.URL;
            case 25:
                return UI_Monster25.URL;
            case 26:
                return UI_Monster26.URL;
            case 27:
                return UI_Monster27.URL;
            case 28:
                return UI_Monster28.URL;
            case 30:
                return UI_Monster30.URL;
            case 32:
                return UI_Monster32.URL;
            case 33:
                return UI_Monster33.URL;
            case 34:
                return UI_Monster34.URL;
            case 35:
                return UI_Monster35.URL;
            case 36:
                return UI_Monster12.URL;
        }
    }
}