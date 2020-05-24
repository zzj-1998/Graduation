import { DataUtil } from "./DataUtil";

export interface mapItem {
    npc: number[];
    npcIndex: number[];
    door: number[];
    doorIndex: number[];
    monster: number[];
    monsterIndex: number[];
    prop: number[];
    propIndex: number[];
}

export default class Player {
    public grade: number;//等级
    public life: number;//生命
    public attack: number;//攻击
    public defense: number;//防御
    public hit: number;//命中
    public crit: number;//暴击
    public dodge: number;//闪避
    public gold: number;//金币
    public experience: number;//经验
    public layer: number;//层数
    public key: Array<number>;//黄，蓝，红的钥匙数量数组
    public blood_red: number;//红血瓶数量
    public blood_blue: number;//蓝血瓶数量
    public characterIndex: number;//角色位置
    public map: Array<mapItem>;//地图信息

    init() {
        this.grade = 1;
        this.life = 10000;
        this.attack = 1000;
        this.defense = 1000;
        this.hit = 1;
        this.crit = 1;
        this.dodge = 1;
        this.gold = 1000;
        this.experience = 1000;
        this.layer = 19;
        this.key = [10, 10, 10];
        this.blood_red = 0;
        this.blood_blue = 0;
        this.characterIndex = 0;
        this.map = [];
        this.initMap();
    }

    initByData(data) {
        this.grade = data.grade;
        this.life = data.life;
        this.attack = data.attack;
        this.defense = data.defense;
        this.hit = data.hit;
        this.crit = data.crit;
        this.dodge = data.dodge;
        this.gold = data.gold;
        this.experience = data.experience;
        this.layer = data.layer;
        this.key = data.key;
        this.blood_red = data.blood_red;
        this.blood_blue = data.blood_blue;
        this.characterIndex = data,this.characterIndex;
        this.map = data.map;
    }

    initMap() {
        let mapList = DataUtil.getMapList();
        for (let i = 0; i < mapList.length; i++) {
            let item = {
                npc: [],
                npcIndex: [],
                door: [],
                doorIndex: [],
                monster: [],
                monsterIndex: [],
                prop: [],
                propIndex: []
            };
            item.npc = DataUtil.getNPC(i);
            item.npcIndex = DataUtil.getNPCIndex(i);
            item.door = DataUtil.getDoor(i);
            item.doorIndex = DataUtil.getDoorIndex(i);
            item.monster = DataUtil.getMonster(i);
            item.monsterIndex = DataUtil.getMonsterIndex(i);
            item.prop = DataUtil.getProp(i);
            item.propIndex = DataUtil.getPropIndex(i);
            this.map.push(item);
        }
    }

    public useGold(gold: number) {
        if (this.gold >= gold) {
            this.gold -= gold;
            return true;
        }
        return false;
    }

    public useExperience(experience: number) {
        if (this.experience >= experience) {
            this.experience -= experience;
            return true;
        }
        return false;
    }

}