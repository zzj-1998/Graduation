import Player from "./PlayerUtil";
import { IsWxUtil, WxUtil } from "./IsWxUtil";

const event: Array<any> = require('../data/event.json').list;
const map: Array<any> = require('../data/map.json').list;
const monster: Array<any> = require('../data/monster.json').list;
export class DataUtil {
    public static player: Player;
    public static isOpenWheel: boolean;
    public static isOpenBadge: boolean;
    
    public static initPlayer() {
        this.player = new Player();
        if (IsWxUtil.isWxEnvironment()) {
            if (WxUtil.getData()) {
                this.player.initByData(WxUtil.getData());
            }
            else {
                this.player.init();
            }
        }
        else {
            // if (Laya.LocalStorage.getJSON('data')) {
            //     this.player.initByData(JSON.parse(JSON.stringify(Laya.LocalStorage.getJSON('data'))));
            // }
            // else {
                this.player.init();
            // }
        }
        this.isOpenBadge = false;
        this.isOpenWheel = false;
    }

    public static saveNow() {
        if (IsWxUtil.isWxEnvironment()) {
            WxUtil.saveNow(this.player);
        }
        else {
            Laya.LocalStorage.setJSON("data", this.player);
        }
    }

    public static removeNow() {
        if (IsWxUtil.isWxEnvironment()) {
            WxUtil.removeNow("data");
        }
        else {
            Laya.LocalStorage.removeItem("data");
        }
        Laya.Scene.open("game/home.scene", true);
    }

    public static getMap(layer: number) {
        return map.filter(a => a.layer == layer)[0];
    }

    public static getMapList() {
        return map;
    }

    public static getEvent(id: number) {
        return event.filter(a => a.id == id)[0];
    }

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

    public static getMonsterInformationById(id: number) {
        return monster.filter(a => a.id == id)[0];
    }
}