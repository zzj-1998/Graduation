/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import ExplainScreen from "./script/screen/ExplainScreen"
import GameScreen from "./script/screen/GameScreen"
import HomeScreen from "./script/screen/HomeScreen"
import TransitionWnd from "./script/wnd/TransitionWnd"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1334;
    static height:number=750;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="game/home.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/screen/ExplainScreen.ts",ExplainScreen);
        reg("script/screen/GameScreen.ts",GameScreen);
        reg("script/screen/HomeScreen.ts",HomeScreen);
        reg("script/wnd/TransitionWnd.ts",TransitionWnd);
    }
}
GameConfig.init();