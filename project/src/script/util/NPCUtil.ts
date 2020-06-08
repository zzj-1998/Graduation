import UI_fairy from "../../ui/Main/UI_fairy";
import UI_shop1 from "../../ui/Main/UI_shop1";
import UI_shop2 from "../../ui/Main/UI_shop2";
import UI_shop3 from "../../ui/Main/UI_shop3";
import UI_master from "../../ui/Main/UI_master";
import { ShopWnd } from "../wnd/ShopWnd";
import { ShopWnd2 } from "../wnd/ShopWnd2";
import UI_trader from "../../ui/Main/UI_trader";
import UI_thief from "../../ui/Main/UI_thief";
import UI_princess from "../../ui/Main/UI_princess";
import { ExperienceWnd } from "../wnd/ExperienceWnd";
import { ExperienceWnd2 } from "../wnd/ExperienceWnd2";
import { BuyKeyWnd } from "../wnd/BuyKeyWnd";
import { SellKeyWnd } from "../wnd/SellKeyWnd";

export class NPCUtil {

    static getNPCById(id: number) {
        switch (id) {
            case 1:
                return <UI_fairy>fairygui.UIPackage.createObjectFromURL(UI_fairy.URL, UI_fairy);
            case 2:
                return <UI_shop1>fairygui.UIPackage.createObjectFromURL(UI_shop1.URL, UI_shop1);
            case 3:
                return <UI_shop2>fairygui.UIPackage.createObjectFromURL(UI_shop2.URL, UI_shop2);
            case 4:
                return <UI_shop3>fairygui.UIPackage.createObjectFromURL(UI_shop3.URL, UI_shop3);
            case 5:
                return <UI_shop1>fairygui.UIPackage.createObjectFromURL(UI_shop1.URL, UI_shop1);
            case 6:
                return <UI_shop2>fairygui.UIPackage.createObjectFromURL(UI_shop2.URL, UI_shop2);
            case 7:
                return <UI_shop3>fairygui.UIPackage.createObjectFromURL(UI_shop3.URL, UI_shop3);
            case 8:
                return <UI_master>fairygui.UIPackage.createObjectFromURL(UI_master.URL, UI_master);
            case 9:
                return <UI_master>fairygui.UIPackage.createObjectFromURL(UI_master.URL, UI_master);
            case 10:
                return <UI_master>fairygui.UIPackage.createObjectFromURL(UI_master.URL, UI_master);
            case 11:
                return <UI_trader>fairygui.UIPackage.createObjectFromURL(UI_trader.URL, UI_trader);
            case 12:
                return <UI_thief>fairygui.UIPackage.createObjectFromURL(UI_thief.URL, UI_thief);
            case 13:
                return <UI_trader>fairygui.UIPackage.createObjectFromURL(UI_trader.URL, UI_trader);
            case 14:
                return <UI_trader>fairygui.UIPackage.createObjectFromURL(UI_trader.URL, UI_trader);
            case 15:
                return <UI_master>fairygui.UIPackage.createObjectFromURL(UI_master.URL, UI_master);
            case 16:
                return <UI_trader>fairygui.UIPackage.createObjectFromURL(UI_trader.URL, UI_trader);
            case 17:
                return <UI_princess>fairygui.UIPackage.createObjectFromURL(UI_princess.URL, UI_princess);
        }












    }

    static judgeNPCEvent(id: number, cb: Function, comp: fairygui.GComponent, finish: Function) {
        switch (id) {
            case 1:
                if (!!finish) finish();
                break;
            case 2:
            case 3:
            case 4:
                ShopWnd.showShop(cb, comp, finish);
                break;
            case 5:
            case 6:
            case 7:
                ShopWnd2.showShop(cb, comp, finish);
                break;
            case 8:
                ExperienceWnd.showExperienceWnd(cb,comp,finish);
                break;
            case 9:
                ExperienceWnd2.showExperienceWnd(cb,comp,finish);
                break;
            case 10:
                //二层大师
                break;
            case 11:
                //二层商人
                break;
            case 12:
                //小偷
                break;
            case 13:
                BuyKeyWnd.showBuyKeyWnd(cb,comp,finish);
                break;
            case 14:
                SellKeyWnd.showSellKeyWnd(cb,comp,finish);
                break;
            case 15:
                //15层大师
                break;
            case 16:
                //15层商人
                break;
            case 17:
                //18层公主
                break;
        }
    }
}