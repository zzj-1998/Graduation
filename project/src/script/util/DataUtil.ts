import Player from "./PlayerUtil";
import { IsWxUtil, WxUtil } from "./IsWxUtil";

/**从json中获取list字段，即xlsx中的数据，保存为数组 */
const event: Array<any> = require('../data/event.json').list;
const map: Array<any> = require('../data/map.json').list;
const monster: Array<any> = require('../data/monster.json').list;
export class DataUtil {
    public static player: Player;         //玩家
    public static isOpenWheel: boolean;   //是否打开风之轮盘，就是当前是否在楼层跳跃界面
    public static isOpenBadge: boolean;   //是否打开圣光徽，就是当前是否在查看该层怪物属性界面
    
    /**初始化角色 */
    public static initPlayer() {
        this.player = new Player();      //创建一个玩家类
        if (IsWxUtil.isWxEnvironment()) {     //判断是否在微信环境
            if (WxUtil.getData()) {      //判断当前微信环境下，是否有数据存储
                this.player.initByData(WxUtil.getData());       //根据微信已经存储的数据来初始化当前玩家
            }
            else {
                this.player.init();      //初始化一个新的玩家
            }
        }
        else {
            if (Laya.LocalStorage.getJSON('data')) {     //判断网页端是否有存储data数据
                this.player.initByData(JSON.parse(JSON.stringify(Laya.LocalStorage.getJSON('data'))));  //根据已经存储的数据来初始化当前玩家
            }
            else {
               this.player.init();       //初始化一个新的玩家
            }
        }
        this.isOpenBadge = false;        //游戏刚开始，没有打开圣光徽
        this.isOpenWheel = false;        //游戏刚开始，没有打开风之轮盘
    }

    /**立即保存 */
    public static saveNow() {
        if (IsWxUtil.isWxEnvironment()) {         //判断是否在微信环境
            WxUtil.saveNow(this.player);          //微信环境下存储玩家信息
        }
        else {
            Laya.LocalStorage.setJSON("data", this.player);     //非微信环境下(网页)存储玩家信息
        }
    }

    /**清除数据 */
    public static removeNow() {
        if (IsWxUtil.isWxEnvironment()) {         //判断是否在微信环境
            WxUtil.removeNow("data");             //微信环境下删除玩家信息
        }
        else {
            Laya.LocalStorage.removeItem("data"); //非微信环境下(网页)删除玩家信息
        }
        Laya.Scene.open("game/home.scene", true); //进入主界面，关闭当前界面
    }

    /**根据楼层返回map表中这一层的数据 */
    public static getMap(layer: number) {
        return map.filter(a => a.layer == layer)[0];
    }

    /**返回整个map表的数据 */
    public static getMapList() {
        return map;
    }

    /**根据eventId返回event表中 */
    public static getEvent(id: number) {
        return event.filter(a => a.id == id)[0];
    }

    /**根据楼层返回当前楼层的npc的id数组 */
    public static getNPC(layer: number) {
        let npc = map.filter(a => a.layer == layer)[0].npc;
        let arr = [];
        for (let i = 0; i < npc.length; i++) {
            if (i % 2 == 1) {
                arr.push(npc[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的npc的index(位置)数组 */
    public static getNPCIndex(layer: number) {
        let npc = map.filter(a => a.layer == layer)[0].npc;
        let arr = [];
        for (let i = 0; i < npc.length; i++) {
            if (i % 2 == 0) {
                arr.push(npc[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的门的id数组 */
    public static getDoor(layer: number) {
        let door = map.filter(a => a.layer == layer)[0].door;
        let arr = [];
        for (let i = 0; i < door.length; i++) {
            if (i % 2 == 1) {
                arr.push(door[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的门的index(位置)数组 */
    public static getDoorIndex(layer: number) {
        let door = map.filter(a => a.layer == layer)[0].door;
        let arr = [];
        for (let i = 0; i < door.length; i++) {
            if (i % 2 == 0) {
                arr.push(door[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的怪物的id数组 */
    public static getMonster(layer: number) {
        let monster = map.filter(a => a.layer == layer)[0].monster;
        let arr = [];
        for (let i = 0; i < monster.length; i++) {
            if (i % 2 == 1) {
                arr.push(monster[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的怪物的index(位置)数组 */
    public static getMonsterIndex(layer: number) {
        let monster = map.filter(a => a.layer == layer)[0].monster;
        let arr = [];
        for (let i = 0; i < monster.length; i++) {
            if (i % 2 == 0) {
                arr.push(monster[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的道具的id数组 */
    public static getProp(layer: number) {
        let prop = map.filter(a => a.layer == layer)[0].prop;
        let arr = [];
        for (let i = 0; i < prop.length; i++) {
            if (i % 2 == 1) {
                arr.push(prop[i]);
            }
        }
        return arr;
    }

    /**根据楼层返回当前楼层的道具的index(位置)数组 */
    public static getPropIndex(layer: number) {
        let prop = map.filter(a => a.layer == layer)[0].prop;
        let arr = [];
        for (let i = 0; i < prop.length; i++) {
            if (i % 2 == 0) {
                arr.push(prop[i]);
            }
        }
        return arr;
    }

    /**从转成json的list(monster)中，通过怪物id获取怪物信息 */
    public static getMonsterInformationById(id: number) {
        return monster.filter(a => a.id == id)[0];
    }
}