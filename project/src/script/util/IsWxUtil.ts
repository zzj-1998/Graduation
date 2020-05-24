import { FlyMsgBox } from "../wnd/FlyMsgBox";

export class IsWxUtil {
    public static isWxEnvironment() {
        if (window.navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1) {
            return true;
        }
        return false;
    }
}

export class WxUtil {
    public static saveNow(saveData) {
        wx.setStorage({
            key: "data",
            data: saveData,
            success: function () {
                console.log("成功")
            },
            fail: function () {
                console.log("失败")
            },
            complete: function () {
                console.log("完成")
            }
        });
    }

    public static removeNow(key: string) {
        try {
            wx.removeStorageSync(key);
        } catch (e) {
            console.log(e);
        }
    }

    public static getData() {
        let value = JSON.parse(JSON.stringify(wx.getStorageSync("data")));
        return value;
    }
}