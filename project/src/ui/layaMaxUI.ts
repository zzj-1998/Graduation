/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.game {
    export class explainUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/explain");
        }
    }
    REG("ui.game.explainUI",explainUI);
    export class gameUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/game");
        }
    }
    REG("ui.game.gameUI",gameUI);
    export class homeUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/home");
        }
    }
    REG("ui.game.homeUI",homeUI);
    export class transitionUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/transition");
        }
    }
    REG("ui.game.transitionUI",transitionUI);
}