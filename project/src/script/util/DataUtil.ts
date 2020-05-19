import Player from "./PlayerUtil";

const event: Array<any> = require('../data/event.json').list;
const map: Array<any> = require('../data/map.json').list;
export class DataUtil {
    public static player: Player;
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
}