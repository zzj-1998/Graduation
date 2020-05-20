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
        this.life = 1000;
        this.attack = 10;
        this.defense = 10;
        this.hit = 1;
        this.crit = 1;
        this.dodge = 1;
        this.gold = 0;
        this.experience = 0;
        this.layer = 0;
        this.key = [41, 41, 41];
        this.blood_red = 0;
        this.blood_blue = 0;
        this.characterIndex = 0;
        this.map = [];
        this.initMap();
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

    useGold(gold: number) {
        if (this.gold >= gold) {
            this.gold -= gold;
            return true;
        }
        return false;
    }

    addGold(gold: number) {
        this.gold += gold;
    }

}