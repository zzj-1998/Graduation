import { ui } from "../../ui/layaMaxUI";
import UI_GameScreen from "../../ui/Main/UI_GameScreen";
import Player, { mapItem } from "../util/PlayerUtil";
import { DataUtil } from "../util/DataUtil";
import UI_MapItem from "../../ui/Main/UI_MapItem";
import { ResUrlUtil } from "../util/ResUrlUtil";
import UI_character from "../../ui/Main/UI_character";
import UI_UpStairs from "../../ui/Main/UI_UpStairs";
import UI_DownStairs from "../../ui/Main/UI_DownStairs";
import { NPCUtil } from "../util/NPCUtil";
import { DoorUtil } from "../util/DoorUtil";
import { MonsterUtil } from "../util/MonsterUtil";
import { PropUtil } from "../util/PropUtil";
import { IsWxUtil, WxUtil } from "../util/IsWxUtil";
import { FlyUtil } from "../util/FlyUtil";
import { FlyMsgBox } from "../wnd/FlyMsgBox";
import { FightWnd } from "../wnd/FightWnd";
import { ChangeLayerWnd } from "../wnd/ChangeLayerWnd";
import { AttributeWnd } from "../wnd/AttributeWnd";
import { SoundUtil } from "../util/SoundUtil";

export default class GameScreen extends ui.game.gameUI {
    private _view: UI_GameScreen;
    protected _walking: boolean;         //行走状态
    protected _isFighting: boolean;      //战斗状态
    constructor() {
        super();
        var res: Array<any> = [
            { url: "res/UI/Main_atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/UI/Main.bin", type: Laya.Loader.BUFFER }
        ]
        Laya.loader.load(res, Laya.Handler.create(this, this.init));
    }

    init() {
        fairygui.UIPackage.addPackage("res/UI/Main");
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this._view = <UI_GameScreen>fairygui.UIPackage.createObjectFromURL(UI_GameScreen.URL, UI_GameScreen);
        this._view.makeFullScreen();
        fairygui.GRoot.inst.addChild(this._view);
        DataUtil.initPlayer();
        this.initPanel();
        this.initMapList();
        this.initOperation();
        this._walking = false;
        this._isFighting = false;


        this._view.m_btnSave.onClick(this, ()=>{
            DataUtil.saveNow();
            FlyMsgBox.showTip("保存成功");
        });//保存按钮
        this._view.m_blood_red.onClick(this, this._useBloodRed);//喝200血药的按钮
        this._view.m_blood_blue.onClick(this, this._useBloodBlue);//喝500血药的按钮
        this._view.m_badgeBtn.onClick(this, this._showBadgeWnd);//显示怪物属性的按钮，点击触发_showBadgeWnd函数
        this._view.m_WheelBtn.onClick(this, this._showWheelWnd);//楼层跳转的按钮，点击触发_showWheelWnd函数
        SoundUtil.playBgm();
    }

    /** 初始化面板 */
    protected initPanel() {
        this._view.m_panel.getChild('life').asCom.getChild('attribute').asTextField.text = "生命";
        this._view.m_panel.getChild('attack').asCom.getChild('attribute').asTextField.text = "攻击";
        this._view.m_panel.getChild('defense').asCom.getChild('attribute').asTextField.text = "防御";
        this._view.m_panel.getChild('hit').asCom.getChild('attribute').asTextField.text = "命中";
        this._view.m_panel.getChild('crit').asCom.getChild('attribute').asTextField.text = "暴击";
        this._view.m_panel.getChild('dodge').asCom.getChild('attribute').asTextField.text = "闪避";
        this._view.m_panel.getChild('gold').asCom.getChild('attribute').asTextField.text = "金币";
        this._view.m_panel.getChild('experience').asCom.getChild('attribute').asTextField.text = "经验";
        this.flushPlayerPanel();
    }

    /** 刷新面板,数据改变（比如通过打怪改变了数据，比如金币变多）就保存一次，一次保存所有的信息 */
    protected flushPlayerPanel() {
        this._view.m_panel.getChild('grade').asTextField.text = "" + DataUtil.player.grade;
        this._view.m_panel.getChild('life').asCom.getChild('num').asTextField.text = "" + DataUtil.player.life;
        this._view.m_panel.getChild('attack').asCom.getChild('num').asTextField.text = "" + DataUtil.player.attack;
        this._view.m_panel.getChild('defense').asCom.getChild('num').asTextField.text = "" + DataUtil.player.defense;
        this._view.m_panel.getChild('hit').asCom.getChild('num').asTextField.text = "" + DataUtil.player.hit;
        this._view.m_panel.getChild('crit').asCom.getChild('num').asTextField.text = "" + DataUtil.player.crit;
        this._view.m_panel.getChild('dodge').asCom.getChild('num').asTextField.text = "" + DataUtil.player.dodge;
        this._view.m_panel.getChild('gold').asCom.getChild('num').asTextField.text = "" + DataUtil.player.gold;
        this._view.m_panel.getChild('experience').asCom.getChild('num').asTextField.text = "" + DataUtil.player.experience;
        this._view.m_keyPanel.getChild('key_yellow').asTextField.text = "" + DataUtil.player.key[0];
        this._view.m_keyPanel.getChild('key_blue').asTextField.text = "" + DataUtil.player.key[1];
        this._view.m_keyPanel.getChild('key_red').asTextField.text = "" + DataUtil.player.key[2];
        if (DataUtil.player.layer) {
            this._view.m_layer.getController('type').selectedIndex = 1;
            this._view.m_layer.getChild('layer').asTextField.text = "" + DataUtil.player.layer;
        }
        else {
            this._view.m_layer.getController('type').selectedIndex = 0;
        }
        this.flushKnapsack();
        DataUtil.saveNow();
    }

    /** 刷新背包 */
    protected flushKnapsack() {
        if (DataUtil.player.blood_red == 0) {
            this._view.m_blood_red.getController('gray').selectedIndex = 1;
        }
        else {
            this._view.m_blood_red.getController('gray').selectedIndex = 0;
            if (DataUtil.player.blood_red == 1) {
                this._view.m_blood_red.getController('nums').selectedIndex = 0;
            }
            else {
                this._view.m_blood_red.getController('nums').selectedIndex = 1;
                this._view.m_blood_red.getChild('num').asTextField.text = "" + DataUtil.player.blood_red;
            }
        }
        if (DataUtil.player.blood_blue == 0) {
            this._view.m_blood_blue.getController('gray').selectedIndex = 1;
        }
        else {
            this._view.m_blood_blue.getController('gray').selectedIndex = 0;
            if (DataUtil.player.blood_blue == 1) {
                this._view.m_blood_blue.getController('nums').selectedIndex = 0;
            }
            else {
                this._view.m_blood_blue.getController('nums').selectedIndex = 1;
                this._view.m_blood_blue.getChild('num').asTextField.text = "" + DataUtil.player.blood_blue;
            }
        }
        if (DataUtil.player.isHaveBadge) {
            this._view.m_badgeBtn.getController('type').selectedIndex = 1;
        }
        else {
            this._view.m_badgeBtn.getController('type').selectedIndex = 0;
        }
        if (DataUtil.player.isHaveWheel) {
            this._view.m_WheelBtn.getController('type').selectedIndex = 1;
        }
        else {
            this._view.m_WheelBtn.getController('type').selectedIndex = 0;
        }
    }

    /** 初始化地图 */
    protected initMapList(type?: number) {
        this._view.m_mapList.removeChildren(0, 120);
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;//获取当前这层存储的地图
        for (let i = 0; i < mapList.length; i++) {
            let item = this._view.m_mapList.addItemFromPool() as UI_MapItem;
            item.getChild('map').asLoader.url = ResUrlUtil.getEventUrl(DataUtil.getEvent(mapList[i]).icon);
            //角色位置 type为1时为下楼位置
            if (!type && DataUtil.getMap(DataUtil.player.layer).character[0] == i) {
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);
                character.setScale(2, 2);
                item.addChild(character);
                DataUtil.player.characterIndex = i;
            }
            if (type && DataUtil.getMap(DataUtil.player.layer).character[1] == i) {
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);
                character.setScale(2, 2);
                item.addChild(character);
                DataUtil.player.characterIndex = i;
            }
            //上下楼梯位置
            if (DataUtil.getMap(DataUtil.player.layer).floor[0] >= 0 && DataUtil.getMap(DataUtil.player.layer).floor[0] == i) {
                if (DataUtil.player.layer == 18) {
                    if (DataUtil.player.isHaveHammer) {
                        let upStairs = <UI_UpStairs>fairygui.UIPackage.createObjectFromURL(UI_UpStairs.URL, UI_UpStairs);
                        item.addChild(upStairs);
                    }
                }
                else {
                    let upStairs = <UI_UpStairs>fairygui.UIPackage.createObjectFromURL(UI_UpStairs.URL, UI_UpStairs);
                    item.addChild(upStairs);
                }
            }
            if (DataUtil.getMap(DataUtil.player.layer).floor[1] >= 0 && DataUtil.getMap(DataUtil.player.layer).floor[1] == i) {
                let downStairs = <UI_DownStairs>fairygui.UIPackage.createObjectFromURL(UI_DownStairs.URL, UI_DownStairs);
                item.addChild(downStairs);
            }
            this._addNPC(i, item);
            this._addDoor(i, item);
            this._addMonster(i, item);
            this._addProp(i, item);
        }
    }

    /** NPC位置 */
    protected _addNPC(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];
        for (let i = 0; i < temp.npc.length; i++) {
            if (temp.npcIndex[i] == index) {
                let npc = NPCUtil.getNPCById(temp.npc[i]);
                npc.setScale(2, 2);
                item.addChild(npc);
            }
        }
    }

    /** 门位置 */
    protected _addDoor(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];
        for (let i = 0; i < temp.door.length; i++) {
            if (temp.doorIndex[i] == index) {
                let door = DoorUtil.getDoorById(temp.door[i]);
                door.setScale(2, 2);
                item.addChild(door);
            }
        }
    }

    /** 怪物位置 */
    protected _addMonster(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];
        for (let i = 0; i < temp.monster.length; i++) {
            if (temp.monsterIndex[i] == index) {
                let monster = MonsterUtil.getMonsterById(temp.monster[i]);//加载怪物ui
                monster.setScale(2, 2);
                item.addChild(monster);
            }
        }
    }

    /** 道具位置 */
    protected _addProp(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];
        for (let i = 0; i < temp.prop.length; i++) {
            if (temp.propIndex[i] == index) {
                let prop = PropUtil.getPropById(temp.prop[i]);//加载道具ui
                item.addChild(prop);
            }
        }
    }

    /** 操作上下左右 */
    protected initOperation() {
        this._view.m_operation.getChild('btnUp').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartUp);//移动按钮的点击事件
        this._view.m_operation.getChild('btnDown').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartDown);
        this._view.m_operation.getChild('btnRight').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartRight);
        this._view.m_operation.getChild('btnLeft').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartLeft);
    }

    /**移动前需要做的事情 */
    protected _beforeMove() {
        this._view.m_operation.getChild('btnUp').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartUp);
        this._view.m_operation.getChild('btnDown').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartDown);
        this._view.m_operation.getChild('btnRight').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartRight);
        this._view.m_operation.getChild('btnLeft').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartLeft);//前四步取消监听点击事件
        this._view.m_operation.on(Laya.Event.MOUSE_OUT, this, this._moveReturn);//监听手指移除操作盘上的事件
        this._view.m_operation.on(Laya.Event.MOUSE_UP, this, this._moveReturn);//监听手指拿起来的事件，只要手指不在操做盘，就停止移动
        this._view.m_operation.getChild('btnUp').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveUp);
        this._view.m_operation.getChild('btnDown').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveDown);
        this._view.m_operation.getChild('btnRight').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveRight);
        this._view.m_operation.getChild('btnLeft').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveLeft);//监听鼠标停留在操作盘上，保持移动
    }

    /**开始向上运动 */
    protected _moveStartUp() {
        this._beforeMove();
        this._moveUp();
    }

    protected _moveStartDown() {
        this._beforeMove();
        this._moveDown();
    }

    protected _moveStartRight() {
        this._beforeMove();
        this._moveRight();
    }

    protected _moveStartLeft() {
        this._beforeMove();
        this._moveLeft();
    }

    /**人物向上移动 */
    protected _moveUp() {
        this._view.m_operation.getController('type').selectedIndex = 1;
        if (this._walking) return;
        if (this._judgeCharacterUp(DataUtil.player.characterIndex, DataUtil.player.characterIndex - 11)) {
            if (this._judgeCollision(DataUtil.player.characterIndex - 11)) return;
            this._walking = true;
            SoundUtil.playSound(SoundUtil.sound1);
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.getTransition('back').play();
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom, { y: -64 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);
                character.setScale(2, 2);
                character.getController('type').selectedIndex = 3;
                this._view.m_mapList._children[DataUtil.player.characterIndex - 11].asCom.addChild(character);
                DataUtil.player.characterIndex -= 11;
                this._walking = false;
                this._walkNext();
            }));
        }
    }

    protected _moveDown() {
        this._view.m_operation.getController('type').selectedIndex = 2;
        if (this._walking) return;
        if (this._judgeCharacterDown(DataUtil.player.characterIndex, DataUtil.player.characterIndex + 11)) {
            if (this._judgeCollision(DataUtil.player.characterIndex + 11)) return;
            this._walking = true;
            SoundUtil.playSound(SoundUtil.sound1);
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();
            let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);
            character.setScale(2, 2);
            character.setXY(0, -64);
            this._view.m_mapList._children[DataUtil.player.characterIndex + 11].asCom.addChild(character);
            this._view.m_mapList._children[DataUtil.player.characterIndex + 11].asCom.getChildAt(1).asCom.getTransition('front').play();
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex + 11].asCom.getChildAt(1).asCom, { y: 0 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                DataUtil.player.characterIndex += 11;
                this._walking = false;
                this._walkNext();
            }));
        }
    }

    protected _moveRight() {
        this._view.m_operation.getController('type').selectedIndex = 4;
        if (this._walking) return;
        if (this._judgeCharacterRight(DataUtil.player.characterIndex, DataUtil.player.characterIndex + 1)) {
            if (this._judgeCollision(DataUtil.player.characterIndex + 1)) return;
            this._walking = true;
            SoundUtil.playSound(SoundUtil.sound1);
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();
            let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);
            character.setScale(2, 2);
            character.setXY(-64, 0);
            this._view.m_mapList._children[DataUtil.player.characterIndex + 1].asCom.addChild(character);
            this._view.m_mapList._children[DataUtil.player.characterIndex + 1].asCom.getChildAt(1).asCom.getTransition('right').play();
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex + 1].asCom.getChildAt(1).asCom, { x: 0 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                DataUtil.player.characterIndex += 1;
                this._walking = false;
                this._walkNext();
            }));
        }
    }

    protected _moveLeft() {
        this._view.m_operation.getController('type').selectedIndex = 3;
        if (this._walking) return;
        if (this._judgeCharacterLeft(DataUtil.player.characterIndex, DataUtil.player.characterIndex - 1)) {
            if (this._judgeCollision(DataUtil.player.characterIndex - 1)) return;
            this._walking = true;
            SoundUtil.playSound(SoundUtil.sound1);
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.getTransition('left').play();
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom, { x: -64 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);
                character.setScale(2, 2);
                character.getController('type').selectedIndex = 1;
                this._view.m_mapList._children[DataUtil.player.characterIndex - 1].asCom.addChild(character);
                DataUtil.player.characterIndex -= 1;
                this._walking = false;
                this._walkNext();
            }));
        }
    }

    protected _walkNext() {
        switch (this._view.m_operation.getController('type').selectedIndex) {
            case 1:
                this._moveUp();
                break;
            case 2:
                this._moveDown();
                break;
            case 3:
                this._moveLeft();
                break;
            case 4:
                this._moveRight();
                break;
        }
    }

    protected _moveReturn() {
        this._moveStop();
        this.initOperation();
    }

    protected _moveStop() {
        this._view.m_operation.off(Laya.Event.MOUSE_OUT, this, this._moveReturn);
        this._view.m_operation.off(Laya.Event.MOUSE_UP, this, this._moveReturn);
        this._view.m_operation.getChild('btnUp').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveUp);
        this._view.m_operation.getChild('btnDown').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveDown);
        this._view.m_operation.getChild('btnRight').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveRight);
        this._view.m_operation.getChild('btnLeft').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveLeft);
        this._view.m_operation.getController('type').selectedIndex = 0;
    }

    protected _judgeCharacterUp(characterIndex: number, itemIndex: number) {
        if (itemIndex < 0) {
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;
        if (mapList[itemIndex] != 1) {
            return false;
        }
        return true;
    }

    protected _judgeCharacterDown(characterIndex: number, itemIndex: number) {
        if (itemIndex > 120) {
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;
        if (mapList[itemIndex] != 1) {
            return false;
        }
        return true;
    }

    protected _judgeCharacterRight(characterIndex: number, itemIndex: number) {
        if (characterIndex % 11 == 10) {
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;
        if (mapList[itemIndex] != 1) {
            return false;
        }
        return true;
    }

    protected _judgeCharacterLeft(characterIndex: number, itemIndex: number) {
        if (characterIndex % 11 == 0) {
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;
        if (mapList[itemIndex] != 1) {
            return false;
        }
        return true;
    }

    /** 判断碰撞 */
    protected _judgeCollision(index: number) {
        if (this._view.m_mapList._children[index].asCom._children.length == 1) return false;
        if (this._judgeStairs(index)) return true;
        if (this._judgeNPC(index)) return true;
        if (this._judgeProp(index)) return true;
        if (this._judgeDoor(index)) return true;
        if (this._judgeMonster(index)) return true;
        return false;
    }

    /** 判断上下楼 */
    protected _judgeStairs(index: number) {
        if (index == DataUtil.getMap(DataUtil.player.layer).floor[0]) {
            DataUtil.player.layer++;
            if (DataUtil.player.layer > DataUtil.player.maxLayer) {
                DataUtil.player.maxLayer = DataUtil.player.layer;
            }
            Laya.Scene.open("game/transition.scene", false, DataUtil.player.layer - 1);
            Laya.timer.once(1000, this, this.initMapList);
            Laya.timer.once(2000, this, this.flushPlayerPanel);
            this._moveReturn();
            return true;
        }
        else if (index == DataUtil.getMap(DataUtil.player.layer).floor[1]) {
            DataUtil.player.layer--;
            Laya.Scene.open("game/transition.scene", false, DataUtil.player.layer + 1);
            Laya.timer.once(1000, this, this.initMapList, [1]);
            Laya.timer.once(2000, this, this.flushPlayerPanel);
            this._moveReturn();
            return true;
        }
        return false;
    }

    /** 判断NPC */
    protected _judgeNPC(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].npcIndex.length; i++) {
            if (index == DataUtil.player.map[DataUtil.player.layer].npcIndex[i]) {
                NPCUtil.judgeNPCEvent(DataUtil.player.map[DataUtil.player.layer].npc[i],this.flushPlayerPanel.bind(this),this._view.m_mapList,this.initOperation.bind(this));
                this._moveStop();
                return true;
            }
        }
        return false;
    }

    /** 判断道具 */
    protected _judgeProp(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].propIndex.length; i++) {
            if (index == DataUtil.player.map[DataUtil.player.layer].propIndex[i]) {
                if (PropUtil.addProp(DataUtil.player.map[DataUtil.player.layer].prop[i])) {//添加道具，addprop函数里判断是否为血瓶，如果返回true，则执行下面的贝塞尔动画
                    //血瓶动画(贝塞尔)
                    let { x, y } = this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.localToGlobal();
                    let temp = this._view.m_mapList._children[index].asCom.getChildAt(1).asCom;
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();
                    temp.setXY(x, y)
                    this._view.addChild(temp);
                    let targetComp = this._view.m_blood_red;
                    let rewardType = 0;
                    if (DataUtil.player.map[DataUtil.player.layer].prop[i] == 5) {
                        targetComp = this._view.m_blood_blue;
                        rewardType = 1;
                    }
                    FlyUtil.flyObject(temp, targetComp, () => {
                        //动画后增加数据，防止连续获得背包显示异常
                        if (rewardType) {
                            DataUtil.player.blood_blue++;
                        }
                        else {
                            DataUtil.player.blood_red++;
                        }
                        this.flushPlayerPanel();
                    })
                }
                else {
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();
                    this.flushPlayerPanel();
                }
                DataUtil.player.map[DataUtil.player.layer].propIndex.splice(i, 1);
                DataUtil.player.map[DataUtil.player.layer].prop.splice(i, 1);
                return false;
            }
        }
        return false;
    }

    /** 判断门 */
    protected _judgeDoor(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].doorIndex.length; i++) {
            if (index == DataUtil.player.map[DataUtil.player.layer].doorIndex[i]) {
                if (DoorUtil.judgeOpenDoorOrNot(DataUtil.player.map[DataUtil.player.layer].door[i])) {
                    this._walking = true;
                    DataUtil.player.map[DataUtil.player.layer].doorIndex.splice(i, 1);
                    DataUtil.player.map[DataUtil.player.layer].door.splice(i, 1);
                    this.flushPlayerPanel();
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.getTransition("common").play(Laya.Handler.create(this, () => {
                        this._walking = false;
                        this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();
                        this._walkNext();
                    }));
                }
                return true;
            }
        }
        return false;
    }

    /** 判断怪物 */
    protected _judgeMonster(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].monsterIndex.length; i++) {
            if (index == DataUtil.player.map[DataUtil.player.layer].monsterIndex[i]) {
                FightWnd.startFight(DataUtil.player.map[DataUtil.player.layer].monster[i], ()=>{
                    //战斗胜利后的回调
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();
                    DataUtil.player.map[DataUtil.player.layer].monsterIndex.splice(i, 1);
                    DataUtil.player.map[DataUtil.player.layer].monster.splice(i, 1);
                    this.flushPlayerPanel();
                    this.initOperation();
                    this._isFighting = false;
                },()=>{
                    this.flushPlayerPanel();
                    this.initOperation();
                    this._isFighting = false;
                },this._view.m_panel);
                this._isFighting = true;
                this._moveStop();
                return true;
            }
        }
        return false;
    }

    protected _useBloodBlue() {
        if (this._isFighting) return;
        if (this._view.m_blood_blue.value > 0) return;
        if (DataUtil.player.blood_blue <= 0) return;
        DataUtil.player.blood_blue--;
        DataUtil.player.life += 500;
        SoundUtil.playSound(SoundUtil.sound2);
        this._view.m_blood_blue.value = 100;
        this.flushPlayerPanel();
        Laya.timer.loop(20, this, this.cdBloodBlue);
    }

    protected cdBloodBlue() {
        this._view.m_blood_blue.value--;
        if (this._view.m_blood_blue.value <= 0) {
            Laya.timer.clear(this, this.cdBloodBlue);
        }
    }

    protected _useBloodRed() {
        if (this._isFighting) return;
        if (this._view.m_blood_red.value > 0) return;
        if (DataUtil.player.blood_red <= 0) return;
        DataUtil.player.blood_red--;
        DataUtil.player.life += 200;
        SoundUtil.playSound(SoundUtil.sound2);
        this._view.m_blood_red.value = 100;
        this.flushPlayerPanel();
        Laya.timer.loop(20, this, this.cdBloodRed);
    }

    protected cdBloodRed() {
        this._view.m_blood_red.value--;
        if (this._view.m_blood_red.value <= 0) {
            Laya.timer.clear(this, this.cdBloodRed);
        }
    }

    /**显示怪物属性界面 */
    protected _showBadgeWnd() {
        if (this._isFighting) return;
        if (!DataUtil.player.isHaveBadge) {
            FlyMsgBox.showTip("暂时无法使用")
            return;
        }
        if (DataUtil.isOpenBadge || DataUtil.isOpenWheel) return;
        DataUtil.isOpenBadge = true;
        AttributeWnd.showAttributeWnd(this._view.m_mapList,this.initOperation.bind(this));//显示怪物属性二级界面，传过去m_mapList组件，其是gamescreen中的组件，即中间最大的方框
        this._moveStop();
    }

    /**显示楼层跳转界面 */
    protected _showWheelWnd() {
        if (this._isFighting) return;
        if (!DataUtil.player.isHaveWheel || DataUtil.player.layer == 21) {
            FlyMsgBox.showTip("暂时无法使用")
            return;
        }
        if (DataUtil.isOpenWheel || DataUtil.isOpenBadge) return;
        DataUtil.isOpenWheel = true;
        ChangeLayerWnd.showChangeLayer(this.jumpLayer.bind(this),this._view.m_mapList,this.initOperation.bind(this));
        this._moveStop();
    }

    protected jumpLayer() {
        Laya.Scene.open("game/transition.scene", false, DataUtil.player.layer);
        Laya.timer.once(1000, this, this.initMapList);
        Laya.timer.once(2000, this, this.flushPlayerPanel);
        this._moveReturn();
    }
}