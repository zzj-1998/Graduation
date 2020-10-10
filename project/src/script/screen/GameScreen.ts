import { ui } from "../../ui/layaMaxUI";
import UI_character from "../../ui/Main/UI_character";
import UI_DownStairs from "../../ui/Main/UI_DownStairs";
import UI_GameScreen from "../../ui/Main/UI_GameScreen";
import UI_MapItem from "../../ui/Main/UI_MapItem";
import UI_UpStairs from "../../ui/Main/UI_UpStairs";
import { DataUtil } from "../util/DataUtil";
import { DoorUtil } from "../util/DoorUtil";
import { FlyUtil } from "../util/FlyUtil";
import { MonsterUtil } from "../util/MonsterUtil";
import { NPCUtil } from "../util/NPCUtil";
import { PropUtil } from "../util/PropUtil";
import { ResUrlUtil } from "../util/ResUrlUtil";
import { SoundUtil } from "../util/SoundUtil";
import { AttributeWnd } from "../wnd/AttributeWnd";
import { ChangeLayerWnd } from "../wnd/ChangeLayerWnd";
import { FightWnd } from "../wnd/FightWnd";
import { FlyMsgBox } from "../wnd/FlyMsgBox";

export default class GameScreen extends ui.game.gameUI {
    private _view: UI_GameScreen;        //游戏界面的一个实例，这里就代表了一个游戏界面UI，里面有游戏界面上的一级组件，可以用m_xxx直接使用
    protected _walking: boolean;         //行走状态，当玩家处于行走的状态时为true，不在行走时为false，这是为了防止还在播放行走动画时人物就跑到别的地方去了
    protected _isFighting: boolean;      //战斗状态，判断玩家是否在战斗中，战斗中禁止使用血瓶，楼层跳跃，查看怪物信息等功能
    constructor() {
        super();      //这里是函数的构造，当GameScreen被创建的时候执行这里
        var res: Array<any> = [
            { url: "res/UI/Main_atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/UI/Main.bin", type: Laya.Loader.BUFFER }
        ]    //res内表示这个界面需要加载的资源，没有加载资源就进入是看不到东西的
        Laya.loader.load(res, Laya.Handler.create(this, this.init));      //这里表示加载，load函数加载res列表内的资源，加载完之后，进行init函数初始化
    }

    /**初始化 */
    init() {
        fairygui.UIPackage.addPackage("res/UI/Main");   //这里表示我需要用到Main这个资源包
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);   //向Laya舞台添加fairygui的实例精灵
        this._view = <UI_GameScreen>fairygui.UIPackage.createObjectFromURL(UI_GameScreen.URL, UI_GameScreen); //这里通过UI_GameScreen在资源包的地址创建一个UI_GameScreen的实例，即游戏界面
        //<UI_GameScreen>······其实就相当于······ as UI_GameScreen
        this._view.makeFullScreen();    //使游戏界面充斥整个屏幕
        fairygui.GRoot.inst.addChild(this._view);     //在fairygui的实例精灵上添加这个界面
        DataUtil.initPlayer();       //初始化游戏玩家
        this.initPanel();            //初始化玩家面板信息
        this.initMapList();          //初始化当前地图信息
        this.initOperation();        //初始化操作盘
        this._walking = false;       //玩家行走状态设置为不在行走中
        this._isFighting = false;    //玩家战斗状态设置为不在战斗中
        this._view.m_btnSave.onClick(this, () => { //点击GameScreen中的btnSave按钮进行的操作
            DataUtil.saveNow();                 //立即执行一遍保存
            FlyMsgBox.showTip("保存成功");       //飘窗提示“保存成功”
        });//保存按钮
        this._view.m_blood_red.onClick(this, this._useBloodRed);//喝200血药的按钮
        this._view.m_blood_blue.onClick(this, this._useBloodBlue);//喝500血药的按钮
        this._view.m_badgeBtn.onClick(this, this._showBadgeWnd);//显示怪物属性的按钮，点击触发_showBadgeWnd函数
        this._view.m_WheelBtn.onClick(this, this._showWheelWnd);//楼层跳转的按钮，点击触发_showWheelWnd函数
        SoundUtil.playBgm();             //播放背景音乐
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
        // 以上函数均为设置对应文本框的text,也可直接在UI内改后导出发布时不清空
        this.flushPlayerPanel();      //刷新面板
    }

    /** 刷新面板,数据改变（比如通过打怪改变了数据，比如金币变多）就保存一次，一次保存所有的信息 */
    protected flushPlayerPanel() {
        //DataUtil.player中对应了玩家的各种属性，这里需要将对应的属性写到text中
        this._view.m_panel.getChild('grade').asTextField.text = "" + DataUtil.player.grade;            //玩家等级
        this._view.m_panel.getChild('life').asCom.getChild('num').asTextField.text = "" + DataUtil.player.life;                    //玩家生命值
        this._view.m_panel.getChild('attack').asCom.getChild('num').asTextField.text = "" + DataUtil.player.attack;                //玩家攻击力
        this._view.m_panel.getChild('defense').asCom.getChild('num').asTextField.text = "" + DataUtil.player.defense;              //玩家防御力
        this._view.m_panel.getChild('hit').asCom.getChild('num').asTextField.text = "" + DataUtil.player.hit;                      //玩家命中率
        this._view.m_panel.getChild('crit').asCom.getChild('num').asTextField.text = "" + DataUtil.player.crit;                    //玩家闪避率
        this._view.m_panel.getChild('dodge').asCom.getChild('num').asTextField.text = "" + DataUtil.player.dodge;                  //玩家暴击率
        this._view.m_panel.getChild('gold').asCom.getChild('num').asTextField.text = "" + DataUtil.player.gold;                    //玩家金币数量
        this._view.m_panel.getChild('experience').asCom.getChild('num').asTextField.text = "" + DataUtil.player.experience;        //玩家经验值
        this._view.m_keyPanel.getChild('key_yellow').asTextField.text = "" + DataUtil.player.key[0];                               //玩家拥有的黄钥匙数量
        this._view.m_keyPanel.getChild('key_blue').asTextField.text = "" + DataUtil.player.key[1];                                 //玩家拥有的蓝钥匙数量
        this._view.m_keyPanel.getChild('key_red').asTextField.text = "" + DataUtil.player.key[2];                                  //玩家拥有的红钥匙数量
        if (DataUtil.player.layer) {     //判断玩家在不在序章层
            this._view.m_layer.getController('type').selectedIndex = 1;      //玩家不在序章层，layer组件的type控制器的编号为1
            this._view.m_layer.getChild('layer').asTextField.text = "" + DataUtil.player.layer;      //玩家所在层数
        }
        else {
            this._view.m_layer.getController('type').selectedIndex = 0;      //玩家在序章层，layer组件的type控制器的编号为0
        }
        this.flushKnapsack();           //刷新玩家背包
        DataUtil.saveNow();             //保存一下
    }

    /** 刷新背包 */
    protected flushKnapsack() {
        if (DataUtil.player.blood_red == 0) {            //当玩家没有红药水时
            this._view.m_blood_red.getController('gray').selectedIndex = 1;    //组件blood_red的gray控制器的编号为1，这里起到变灰的效果
        }
        else {
            this._view.m_blood_red.getController('gray').selectedIndex = 0;    //组件blood_red的gray控制器的编号为0，这里起到变回原样的效果
            if (DataUtil.player.blood_red == 1) {       //玩家红药水数量为1时
                this._view.m_blood_red.getController('nums').selectedIndex = 0;    //组件blood_red的nums控制器的编号为0，这里起到隐藏数量显示的效果
            }
            else {
                this._view.m_blood_red.getController('nums').selectedIndex = 1;    //组件blood_red的nums控制器的编号为1，这里起到显示数量显示的效果
                this._view.m_blood_red.getChild('num').asTextField.text = "" + DataUtil.player.blood_red;      //玩家拥有的红药水数量写入进blood_red组件的num组件
            }
        }
        if (DataUtil.player.blood_blue == 0) {          //当玩家没有蓝药水时
            this._view.m_blood_blue.getController('gray').selectedIndex = 1;    //组件blood_blue的gray控制器的编号为1，这里起到变灰的效果
        }
        else {
            this._view.m_blood_blue.getController('gray').selectedIndex = 0;    //组件blood_blue的gray控制器的编号为0，这里起到变回原样的效果
            if (DataUtil.player.blood_blue == 1) {       //玩家蓝药水数量为1时
                this._view.m_blood_blue.getController('nums').selectedIndex = 0;    //组件blood_blue的nums控制器的编号为0，这里起到隐藏数量显示的效果
            }
            else {
                this._view.m_blood_blue.getController('nums').selectedIndex = 1;    //组件blood_blue的nums控制器的编号为1，这里起到显示数量显示的效果
                this._view.m_blood_blue.getChild('num').asTextField.text = "" + DataUtil.player.blood_blue;      //玩家拥有的蓝药水数量写入进blood_blue组件的num组件
            }
        }
        if (DataUtil.player.isHaveBadge) {    //判断玩家是否拥有圣光徽
            this._view.m_badgeBtn.getController('type').selectedIndex = 1;    //玩家拥有圣光徽，badgeBtn中的type控制器的编号为1，这里起到变回原样的效果
        }
        else {
            this._view.m_badgeBtn.getController('type').selectedIndex = 0;    //玩家没有圣光徽，badgeBtn中的type控制器的编号为0，这里起到变灰的效果
        }
        if (DataUtil.player.isHaveWheel) {    //判断玩家是否拥有风之轮盘
            this._view.m_WheelBtn.getController('type').selectedIndex = 1;    //玩家拥有风之轮盘，WheelBtn中的type控制器的编号为1，这里起到变回原样的效果
        }
        else {
            this._view.m_WheelBtn.getController('type').selectedIndex = 0;    //玩家没有风之轮盘，WheelBtn中的type控制器的编号为0，这里起到变灰的效果
        }
    }

    /** 初始化地图 */
    protected initMapList(type?: number) {
        this._view.m_mapList.removeChildren(0, 120);   //将地图列表中的121个元素清空
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;    //获取当前玩家的该层的地图信息
        for (let i = 0; i < mapList.length; i++) {                   //循环渲染地图列表上的每一个元素
            let item = this._view.m_mapList.addItemFromPool() as UI_MapItem;          //创建一个UI_MapItem实例添加到列表中,同时把这个实例对象赋值给item
            item.getChild('map').asLoader.url = ResUrlUtil.getEventUrl(DataUtil.getEvent(mapList[i]).icon);    //设置item中的map组件的图片源地址，DataUtil.getEvent(mapList[i]).icon为获得map表中的该层map中的地图数组的第i个元素对应的event表中的id的icon值
            //角色位置 type为1时为下楼位置
            if (!type && DataUtil.getMap(DataUtil.player.layer).character[0] == i) {   //这是如果当前是上楼触发的刷新地图列表且当前i值为角色上楼时所在位置的index值，在当前位置添加角色
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);   //这里通过UI_character在资源包的地址创建一个UI_character的实例，即角色组件
                character.setScale(2, 2);               //角色放大为2倍
                item.addChild(character);               //在item中添加角色
                DataUtil.player.characterIndex = i;     //游戏角色位置设置为i
            }
            if (type && DataUtil.getMap(DataUtil.player.layer).character[1] == i) {    //这是如果当前是下楼触发的刷新地图列表且当前i值为角色下楼时所在位置的index值，在当前位置添加角色
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);   //这里通过UI_character在资源包的地址创建一个UI_character的实例，即角色组件
                character.setScale(2, 2);               //角色放大为2倍
                item.addChild(character);               //在item中添加角色
                DataUtil.player.characterIndex = i;     //游戏角色位置设置为i
            }
            //上下楼梯位置，map表内的floor元素为一个数组，第0个元素为上楼位置，第1个元素为下楼位置，当当前楼层没有上楼或下楼位置时，配置为-1即可
            if (DataUtil.getMap(DataUtil.player.layer).floor[0] >= 0 && DataUtil.getMap(DataUtil.player.layer).floor[0] == i) {   //如果当前有上楼位置且当前i值为上楼位置的index值，在当前位置添加上楼组件
                if (DataUtil.player.layer == 18) {        //如果当前玩家在第18层，需要一个特殊判断，第18层是一个救公主的层数
                    if (DataUtil.player.isHaveHammer) {   //如果当前玩家拥有星光神锒道具
                        let upStairs = <UI_UpStairs>fairygui.UIPackage.createObjectFromURL(UI_UpStairs.URL, UI_UpStairs);  //同理创建一个上楼的组件，不做解释
                        item.addChild(upStairs);       //在item中添加上楼位置
                    }     //这里表示在第18层的时候，如果玩家此时没有获得星光神锒道具，则不显示上楼
                }
                else {       //如果玩家不在第18层
                    let upStairs = <UI_UpStairs>fairygui.UIPackage.createObjectFromURL(UI_UpStairs.URL, UI_UpStairs);  //同理创建一个上楼的组件，不做解释
                    item.addChild(upStairs);       //在item中添加上楼位置
                }
            }
            if (DataUtil.getMap(DataUtil.player.layer).floor[1] >= 0 && DataUtil.getMap(DataUtil.player.layer).floor[1] == i) {   //如果当前有下楼位置且当前i值为下楼位置的index值，在当前位置添加下楼组件
                let downStairs = <UI_DownStairs>fairygui.UIPackage.createObjectFromURL(UI_DownStairs.URL, UI_DownStairs);  //同理创建一个下楼的组件，不做解释
                item.addChild(downStairs);        //在item中添加下楼位置
            }
            this._addNPC(i, item);                //添加npc，将当前位置与对应的item传过去
            this._addDoor(i, item);               //添加门，将当前位置与对应的item传过去
            this._addMonster(i, item);            //添加怪物，将当前位置与对应的item传过去
            this._addProp(i, item);               //添加道具，将当前位置与对应的item传过去
        }
    }

    /** NPC位置 */
    protected _addNPC(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];              //获取当前玩家的该层的全部信息
        for (let i = 0; i < temp.npc.length; i++) {                         //循环玩家在该层的NPC信息
            if (temp.npcIndex[i] == index) {                                //当NPC的位置信息与当前地图要渲染的位置相等
                let npc = NPCUtil.getNPCById(temp.npc[i]);                  //根据NPC的id创建一个NPC实例对象
                npc.setScale(2, 2);                                         //将当前npc放大两倍
                item.addChild(npc);                                         //在item中添加npc
            }
        }
    }

    /** 门位置 */
    protected _addDoor(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];               //获取当前玩家的该层的全部信息
        for (let i = 0; i < temp.door.length; i++) {                         //循环玩家在该层的门信息
            if (temp.doorIndex[i] == index) {                                //当门的位置信息与当前地图要渲染的位置相等
                let door = DoorUtil.getDoorById(temp.door[i]);               //根据门的id创建一个门实例
                door.setScale(2, 2);                                         //将当前门放大两倍
                item.addChild(door);                                         //在item中添加门
            }
        }
    }

    /** 怪物位置 */
    protected _addMonster(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];                    //获取当前玩家的该层的全部信息
        for (let i = 0; i < temp.monster.length; i++) {                           //循环玩家在该层的怪物信息
            if (temp.monsterIndex[i] == index) {                                  //当怪物的位置信息与当前地图要渲染的位置相等
                let monster = MonsterUtil.getMonsterById(temp.monster[i]);        //根据怪物的id创建一个怪物实例
                monster.setScale(2, 2);                                           //将当前怪物放大两倍
                item.addChild(monster);                                           //在item中添加怪物
            }
        }
    }

    /** 道具位置 */
    protected _addProp(index: number, item: UI_MapItem) {
        let temp = DataUtil.player.map[DataUtil.player.layer];                    //获取当前玩家的该层的全部信息
        for (let i = 0; i < temp.prop.length; i++) {                              //循环玩家在该层的怪物信息
            if (temp.propIndex[i] == index) {                                     //当道具的位置信息与当前地图要渲染的位置相等
                let prop = PropUtil.getPropById(temp.prop[i]);                    //根据道具的id创建一个道具实例
                item.addChild(prop);                                              //在item中添加道具
            }
        }
    }

    /** 操作上下左右 */
    protected initOperation() {
        this._view.m_operation.getChild('btnUp').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartUp);//上移动按钮的点击事件
        this._view.m_operation.getChild('btnDown').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartDown);//下移动按钮的点击事件
        this._view.m_operation.getChild('btnRight').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartRight);//右移动按钮的点击事件
        this._view.m_operation.getChild('btnLeft').asGraph.on(Laya.Event.MOUSE_DOWN, this, this._moveStartLeft);//左移动按钮的点击事件
    }

    /**移动之前要做的事 */
    protected _beforeMove() {
        this._view.m_operation.getChild('btnUp').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartUp);//取消监听点击上按钮事件
        this._view.m_operation.getChild('btnDown').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartDown);//取消监听点击下按钮事件
        this._view.m_operation.getChild('btnRight').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartRight);//取消监听点击右按钮事件
        this._view.m_operation.getChild('btnLeft').asGraph.off(Laya.Event.MOUSE_DOWN, this, this._moveStartLeft);//取消监听点击左按钮事件
        this._view.m_operation.on(Laya.Event.MOUSE_OUT, this, this._moveReturn);//监听手指移出操作盘上的事件
        this._view.m_operation.on(Laya.Event.MOUSE_UP, this, this._moveReturn);//监听手指拿起来的事件，只要手指不在操做盘，就停止移动
        this._view.m_operation.getChild('btnUp').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveUp);//监听鼠标停留在操作盘上的上按钮区域，保持移动
        this._view.m_operation.getChild('btnDown').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveDown);//监听鼠标停留在操作盘上的下按钮区域，保持移动
        this._view.m_operation.getChild('btnRight').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveRight);//监听鼠标停留在操作盘上的右按钮区域，保持移动
        this._view.m_operation.getChild('btnLeft').asGraph.on(Laya.Event.MOUSE_OVER, this, this._moveLeft);//监听鼠标停留在操作盘上的左按钮区域，保持移动
    }

    /**开始向上移动 */
    protected _moveStartUp() {
        this._beforeMove();       //移动前要做的事
        this._moveUp();           //向上移动
    }

    /**开始向下移动 */
    protected _moveStartDown() {
        this._beforeMove();       //移动前要做的事
        this._moveDown();         //向下移动
    }

    /**开始向右移动 */
    protected _moveStartRight() {
        this._beforeMove();       //移动前要做的事
        this._moveRight();        //向右移动
    }

    /**开始向左移动 */
    protected _moveStartLeft() {
        this._beforeMove();      //移动前要做的事
        this._moveLeft();        //向左移动
    }

    /**向上移动 */
    protected _moveUp() {
        this._view.m_operation.getController('type').selectedIndex = 1;       //操作盘的type控制器index为1
        if (this._walking) return;                                            //如果正在行走，返回
        if (this._judgeCharacterUp(DataUtil.player.characterIndex, DataUtil.player.characterIndex - 11)) {               //判断角色是否能向上走，判断角色上方是路还是墙或超出地图外，能走才执行以下函数
            if (this._judgeCollision(DataUtil.player.characterIndex - 11)) return;                                       //判断角色是否向上有碰撞反应，有碰撞则函数返回
            this._walking = true;                                                                                        //行走状态修改为正在行走
            SoundUtil.playSound(SoundUtil.sound1);                                                                       //播放sound1行走音效
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.getTransition('back').play();           //播放角色组件上的back动画
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom, { y: -64 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {            //角色在330毫秒内向上移动一格的距离64px，移动结束执行以下函数
                this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();            //将角色在原来的位置上删除
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);                   //创建一个角色的组件
                character.setScale(2, 2);                                                                                               //角色放大两倍
                character.getController('type').selectedIndex = 3;                                                                      //角色组件的type控制器修改index值为3
                this._view.m_mapList._children[DataUtil.player.characterIndex - 11].asCom.addChild(character);                          //在原来角色位置的前11格的元素上添加一个角色
                DataUtil.player.characterIndex -= 11;                                                                                   //角色位置-11，即向上移动了一格
                this._walking = false;                                                                                                  //角色行走状态修改为不在行走中
                this._walkNext();                                                                                                       //继续行走，因为玩家可能一直按着操作盘不放，这里需要判断一下在行走结束后玩家是否还按着操作盘，如果按着，要继续行走
            }));
        }
    }

    /**向下移动 */
    protected _moveDown() {
        this._view.m_operation.getController('type').selectedIndex = 2;       //操作盘的type控制器index为2
        if (this._walking) return;                                            //如果正在行走，返回
        if (this._judgeCharacterDown(DataUtil.player.characterIndex, DataUtil.player.characterIndex + 11)) {               //判断角色是否能向下走，判断角色下方是路还是墙或超出地图外，能走才执行以下函数
            if (this._judgeCollision(DataUtil.player.characterIndex + 11)) return;                                         //判断角色是否向下有碰撞反应，有碰撞则函数返回
            this._walking = true;                                                                                          //行走状态修改为正在行走
            SoundUtil.playSound(SoundUtil.sound1);                                                                         //播放sound1行走音效
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();   //将角色在原来的位置上删除
            let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);          //创建一个角色的组件
            character.setScale(2, 2);                                                                                      //角色放大两倍
            character.setXY(0, -64);                                                                                       //角色位置调整y为-64，即角色位置的上一格
            this._view.m_mapList._children[DataUtil.player.characterIndex + 11].asCom.addChild(character);                 //在角色的后11格，即下一排的这一格上创建一个角色，由于角色位置是y=-64，在显示上就会在原来的位置上换了一个相同的角色
            //这里要注意一下，从下往上走，角色是从高层级往低层级走，所以先播放行走动画位置移动，再进行重创建角色的操作，但是从下往上走，是低层级往高层级走，如果采用原方式，角色会走到地图下方，所以采用先在下方重建一个在上方的角色，再播放行走动画与位置移动让角色到正确的位置，左右走由于层级问题同理
            this._view.m_mapList._children[DataUtil.player.characterIndex + 11].asCom.getChildAt(1).asCom.getTransition('front').play();       //播放角色组件上的front动画
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex + 11].asCom.getChildAt(1).asCom, { y: 0 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {            //角色在330毫秒内向下移动一格的距离64px，这里意思是从-64px移动到0px的位置，移动结束执行以下函数
                DataUtil.player.characterIndex += 11;                                                                      //角色位置+11，即向下移动了一格
                this._walking = false;                                                                                     //行走状态修改为不在行走中
                this._walkNext();                                                                                          //继续行走，因为玩家可能一直按着操作盘不放，这里需要判断一下在行走结束后玩家是否还按着操作盘，如果按着，要继续行走
            }));
        }
    }

    /**向右移动 */
    protected _moveRight() {
        this._view.m_operation.getController('type').selectedIndex = 4;       //操作盘的type控制器index为4
        if (this._walking) return;                                            //如果正在行走，返回
        if (this._judgeCharacterRight(DataUtil.player.characterIndex, DataUtil.player.characterIndex + 1)) {               //判断角色是否能向右走，判断角色右方是路还是墙或超出地图外，能走才执行以下函数
            if (this._judgeCollision(DataUtil.player.characterIndex + 1)) return;                                          //判断角色是否向右有碰撞反应，有碰撞则函数返回
            this._walking = true;                                                                                          //行走状态修改为正在行走
            SoundUtil.playSound(SoundUtil.sound1);                                                                         //播放sound1行走音效
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();   //将角色在原来的位置上删除
            let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);          //创建一个角色的组件
            character.setScale(2, 2);                                                                                      //角色放大两倍
            character.setXY(-64, 0);                                                                                       //角色位置调整x为-64，即角色位置的左边一格
            this._view.m_mapList._children[DataUtil.player.characterIndex + 1].asCom.addChild(character);                  //在角色的后1格，即右一格上创建一个角色，由于角色位置是x=-64，在显示上就会在原来的位置上换了一个相同的角色
            this._view.m_mapList._children[DataUtil.player.characterIndex + 1].asCom.getChildAt(1).asCom.getTransition('right').play();       //播放角色组件上的right动画
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex + 1].asCom.getChildAt(1).asCom, { x: 0 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {            //角色在330毫秒内向右移动一格的距离64px，这里意思是从-64px移动到0px的位置，移动结束执行以下函数
                DataUtil.player.characterIndex += 1;                                                                      //角色位置+11，即向右移动了一格
                this._walking = false;                                                                                     //行走状态修改为不在行走中
                this._walkNext();                                                                                          //继续行走，因为玩家可能一直按着操作盘不放，这里需要判断一下在行走结束后玩家是否还按着操作盘，如果按着，要继续行走
            }));
        }
    }

    /**向左移动 */
    protected _moveLeft() {
        this._view.m_operation.getController('type').selectedIndex = 3;       //操作盘的type控制器index为4
        if (this._walking) return;                                            //如果正在行走，返回
        if (this._judgeCharacterLeft(DataUtil.player.characterIndex, DataUtil.player.characterIndex - 1)) {               //判断角色是否能向左走，判断角色左方是路还是墙或超出地图外，能走才执行以下函数
            if (this._judgeCollision(DataUtil.player.characterIndex - 1)) return;                                         //判断角色是否向左有碰撞反应，有碰撞则函数返回
            this._walking = true;                                                                                         //行走状态修改为正在行走
            SoundUtil.playSound(SoundUtil.sound1);                                                                        //播放sound1行走音效
            this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.getTransition('left').play();       //播放角色组件上的left动画
            Laya.Tween.to(this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom, { x: -64 }, 330, Laya.Ease.linearIn, Laya.Handler.create(this, () => {            //角色在330毫秒内向左移动一格的距离64px，移动结束执行以下函数
                this._view.m_mapList._children[DataUtil.player.characterIndex].asCom.getChildAt(1).asCom.removeFromParent();             //将角色在原来的位置上删除
                let character = <UI_character>fairygui.UIPackage.createObjectFromURL(UI_character.URL, UI_character);                    //创建一个角色的组件
                character.setScale(2, 2);                                                                                                //角色放大两倍
                character.getController('type').selectedIndex = 1;                                                                       //角色组件的type控制器修改index值为1
                this._view.m_mapList._children[DataUtil.player.characterIndex - 1].asCom.addChild(character);                            //在原来角色位置的前1格的元素上添加一个角色
                DataUtil.player.characterIndex -= 1;                                                                                     //角色位置-1，即向左移动了一格
                this._walking = false;                                                                                                   //行走状态修改为不在行走中
                this._walkNext();                                                                                                        //继续行走，因为玩家可能一直按着操作盘不放，这里需要判断一下在行走结束后玩家是否还按着操作盘，如果按着，要继续行走
            }));
        }
    }

    /**继续行走 */
    protected _walkNext() {
        switch (this._view.m_operation.getController('type').selectedIndex) {       //操作盘的type控制器现在的index值为多少
            case 1:                                                                 //如果为1
                this._moveUp();                                                     //执行向上移动
                break;
            case 2:                                                                 //如果为2
                this._moveDown();                                                   //执行向下移动
                break;
            case 3:                                                                 //如果是3
                this._moveLeft();                                                   //执行向左移动
                break;
            case 4:                                                                 //如果是4
                this._moveRight();                                                  //执行向右移动
                break;
        }
    }

    /**还原移动 */
    protected _moveReturn() {
        this._moveStop();               //取消监听手指移除操作盘，手指在操作盘上弹起，手指停留在操作盘上的事件
        this.initOperation();           //初始化操作盘
    }

    /**停止移动，取消监听 */
    protected _moveStop() {
        this._view.m_operation.off(Laya.Event.MOUSE_OUT, this, this._moveReturn);          //取消监听手指移出操作盘的事件
        this._view.m_operation.off(Laya.Event.MOUSE_UP, this, this._moveReturn);           //取消监听手指拿起来的事件
        this._view.m_operation.getChild('btnUp').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveUp);             //取消监听手指停留在操作盘的上按钮区域事件
        this._view.m_operation.getChild('btnDown').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveDown);         //取消监听手指停留在操作盘的下按钮区域事件
        this._view.m_operation.getChild('btnRight').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveRight);       //取消监听手指停留在操作盘的右按钮区域事件
        this._view.m_operation.getChild('btnLeft').asGraph.off(Laya.Event.MOUSE_OVER, this, this._moveLeft);         //取消监听手指停留在操作盘的左按钮区域事件
        this._view.m_operation.getController('type').selectedIndex = 0;       //操作盘的type控制器index为0
    }

    /**判断角色上方是否是路 */
    protected _judgeCharacterUp(characterIndex: number, itemIndex: number) {
        if (itemIndex < 0) {                                        //如果要移动的位置小于0，返回为false
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;   //获取当前玩家的该层的地图信息
        if (mapList[itemIndex] != 1) {                              //如果要移动的位置的地图不等于1，即不为路遇到的是墙或者其它不能移动的物体，返回为false
            return false;
        }
        return true;
    }

    /**判断角色下方是否是路 */
    protected _judgeCharacterDown(characterIndex: number, itemIndex: number) {
        if (itemIndex > 120) {                                        //如果要移动的位置大于120，返回为false
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;     //获取当前玩家的该层的地图信息
        if (mapList[itemIndex] != 1) {                                //如果要移动的位置的地图不等于1，即不为路遇到的是墙或者其它不能移动的物体，返回为false
            return false;
        }
        return true;
    }

    /**判断角色右方是否是路 */
    protected _judgeCharacterRight(characterIndex: number, itemIndex: number) {
        if (characterIndex % 11 == 10) {                            //如果当前角色位置除以11的余数为10，即角色在最右边了，返回为false
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;   //获取当前玩家的该层的地图信息
        if (mapList[itemIndex] != 1) {                              //如果要移动的位置的地图不等于1，即不为路遇到的是墙或者其它不能移动的物体，返回为false
            return false;
        }
        return true;
    }

    /**判断角色左方是否是路 */
    protected _judgeCharacterLeft(characterIndex: number, itemIndex: number) {
        if (characterIndex % 11 == 0) {                             //如果当前角色位置除以11的余数为0，即角色在最左边了，返回为false
            return false;
        }
        let mapList = DataUtil.getMap(DataUtil.player.layer).map;   //获取当前玩家的该层的地图信息
        if (mapList[itemIndex] != 1) {                              //如果要移动的位置的地图不等于1，即不为路遇到的是墙或者其它不能移动的物体，返回为false
            return false;
        }
        return true;
    }

    /** 判断碰撞 */
    protected _judgeCollision(index: number) {
        if (this._view.m_mapList._children[index].asCom._children.length == 1) return false;                  //如果要移动的地图的index值上面只有一个元素，即只有地图，直接可以确认没有发生碰撞
        if (this._judgeStairs(index)) return true;                                                            //判断玩家是否上下楼，是上下楼则返回发生了碰撞不进行走动
        if (this._judgeNPC(index)) return true;                                                               //判断玩家是否碰撞到NPC，是NPC则发生了碰撞不进行行走
        if (this._judgeProp(index)) return true;                                                              //判断玩家是否碰到了道具，是道具也不算碰撞但要执行拾取道具的操作
        if (this._judgeDoor(index)) return true;                                                              //判断玩家是否碰撞到了门，是门则发生了碰撞不进行行走且要进行开门判定
        if (this._judgeMonster(index)) return true;                                                           //判断玩家是否碰到了怪物，是怪物则发生了碰撞不进行行走且要进行战斗
        return false;                                                                                         //以上都没有，返回没有发生碰撞
    }

    /** 判断上下楼 */
    protected _judgeStairs(index: number) {
        if (index == DataUtil.getMap(DataUtil.player.layer).floor[0]) {                      //如果当前index值与上楼位置相等
            DataUtil.player.layer++;                                                         //玩家当前楼层数+1
            if (DataUtil.player.layer > DataUtil.player.maxLayer) {                          //如果当前楼层大于玩家最大的楼层，执行下面的函数
                DataUtil.player.maxLayer = DataUtil.player.layer;                            //玩家最大的楼层等于当前楼层
            }
            Laya.Scene.open("game/transition.scene", false, DataUtil.player.layer - 1);      //打开过渡界面，false表示不关闭现在的game界面，把现在的层数传过去
            Laya.timer.once(1000, this, this.initMapList);                                   //一秒后，执行刷新地图渲染的函数
            Laya.timer.once(2000, this, this.flushPlayerPanel);                              //两秒后，执行刷新面板的函数
            this._moveReturn();                                                              //还原移动
            return true;                                                                     //返回发生了碰撞
        }
        else if (index == DataUtil.getMap(DataUtil.player.layer).floor[1]) {                 //如果当前index值与下楼位置相等
            DataUtil.player.layer--;                                                         //玩家当前楼层数-1
            Laya.Scene.open("game/transition.scene", false, DataUtil.player.layer + 1);      //打开过渡界面，false表示不关闭现在的game界面，把现在的层数传过去
            Laya.timer.once(1000, this, this.initMapList, [1]);                              //一秒后，执行刷新地图渲染的函数，传值1表示玩家是下楼触发的刷新地图
            Laya.timer.once(2000, this, this.flushPlayerPanel);                              //两秒后，执行刷新面板的函数
            this._moveReturn();                                                              //还原移动
            return true;                                                                     //返回发生了碰撞
        }
        return false;                                                                        //以上都没有，返回没有发生碰撞
    }

    /** 判断NPC */
    protected _judgeNPC(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].npcIndex.length; i++) {         //循环该层现在的npc位置
            if (index == DataUtil.player.map[DataUtil.player.layer].npcIndex[i]) {                     //如果当前index值等于npc的位置
                NPCUtil.judgeNPCEvent(DataUtil.player.map[DataUtil.player.layer].npc[i], this.flushPlayerPanel.bind(this), this._view.m_mapList, this.initOperation.bind(this));           //判断NPC事件,传入npc的id值,刷新面板方法，mapList组件(主要用其位置)，初始化操作盘方法
                this._moveStop();           //停止移动
                return true;                //返回发生了碰撞
            }
        }
        return false;                       //以上都没有，返回没有发生碰撞
    }

    /** 判断道具 */
    protected _judgeProp(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].propIndex.length; i++) {      //循环该层现在的道具位置
            if (index == DataUtil.player.map[DataUtil.player.layer].propIndex[i]) {                  //如果当前index值等于道具的位置
                if (PropUtil.addProp(DataUtil.player.map[DataUtil.player.layer].prop[i])) {          //添加道具，addprop函数里判断是否为血瓶，如果返回true，则执行下面的贝塞尔动画
                    //血瓶动画(贝塞尔)
                    let { x, y } = this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.localToGlobal();         //获取血瓶在舞台上的位置，保存为x,y
                    let temp = this._view.m_mapList._children[index].asCom.getChildAt(1).asCom;                             //获取这个血瓶，保存为temp
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();                     //在列表中的index的元素上删除血瓶，即删除原来的血瓶
                    temp.setXY(x, y)                                                                                        //血瓶的位置设置为x,y
                    this._view.addChild(temp);                                                                              //在大的游戏画面（GameScreen的实例）中添加这个血瓶
                    let targetComp = this._view.m_blood_red;                                                                //设置目标组件为blood_red组件
                    let rewardType = 0;                                                                                     //设置奖励类型为0
                    if (DataUtil.player.map[DataUtil.player.layer].prop[i] == 5) {                                          //如果道具的id为5，执行if内的代码
                        targetComp = this._view.m_blood_blue;                                                               //设置目标组件为blood_blue组件
                        rewardType = 1;                                                                                     //设置奖励类型为1
                    }
                    FlyUtil.flyObject(temp, targetComp, () => {                                                             //执行贝塞尔，将要飞的物体与要飞到的物体传过去
                        //动画后增加数据，防止连续获得背包显示异常
                        if (rewardType) {                       //如果奖励类型为1，1转换为布尔值为true，0为false 所以只有这两种情况下忽略==1
                            DataUtil.player.blood_blue++;       //玩家500的血瓶数量加1
                        }
                        else {
                            DataUtil.player.blood_red++;        //玩家200的血瓶数量加1
                        }
                        this.flushPlayerPanel();                //刷新玩家面板且保存
                    })
                }
                else {                              //如果不是血瓶道具，执行下面else代码
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();                     //将道具从地图中移除
                    this.flushPlayerPanel();                    //刷新玩家面板且保存
                }
                DataUtil.player.map[DataUtil.player.layer].propIndex.splice(i, 1);                                          //将该道具的index值从玩家信息中移除
                DataUtil.player.map[DataUtil.player.layer].prop.splice(i, 1);                                               //将该道具的id从玩家信息中移除
                return false;      //由于道具拾取到就消失，这里是可以进行行走的，也返回没有发生碰撞
            }
        }
        return false;              //以上都没有，返回没有发生碰撞
    }

    /** 判断门 */
    protected _judgeDoor(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].doorIndex.length; i++) {         //循环该层现在的门位置
            if (index == DataUtil.player.map[DataUtil.player.layer].doorIndex[i]) {                     //如果当前index值等于门的位置
                if (DoorUtil.judgeOpenDoorOrNot(DataUtil.player.map[DataUtil.player.layer].door[i])) {  //判断当前玩家能否开的了这个门，能开则执行if内的代码
                    this._walking = true;                                                               //将玩家的行走状态置为正在行走，保证玩家在开门期间不乱走
                    DataUtil.player.map[DataUtil.player.layer].doorIndex.splice(i, 1);                  //将该门的index值从玩家信息中移除
                    DataUtil.player.map[DataUtil.player.layer].door.splice(i, 1);                       //将该门的id从玩家信息中移除
                    this.flushPlayerPanel();                                                            //刷新玩家面板并保存
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.getTransition("common").play(Laya.Handler.create(this, () => {    //执行开门动画,就是这个门组件的common动效，播放完毕后执行下面的函数
                        this._walking = false;                                                                      //将玩家的行走状态置为不在行走，可移动
                        this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();         //将该门从地图中删除
                        this._walkNext();                                                                           //继续行走，因为玩家可能一直按着操作盘不放，这里需要判断一下在开门结束后玩家是否还按着操作盘，如果按着，要继续行走
                    }));
                }
                return true;       //返回发生了碰撞
            }
        }
        return false;              //以上都没有，返回没有发生碰撞
    }

    /** 判断怪物 */
    protected _judgeMonster(index: number) {
        for (let i = 0; i < DataUtil.player.map[DataUtil.player.layer].monsterIndex.length; i++) {           //循环该层现在的怪物位置
            if (index == DataUtil.player.map[DataUtil.player.layer].monsterIndex[i]) {                       //如果当前index值等于怪物的位置
                FightWnd.startFight(DataUtil.player.map[DataUtil.player.layer].monster[i], () => {           //进入战斗，这里与传统魔塔不同，传统魔塔打不过就不触发战斗，这里打不过且背包里没有血药账号就清除游戏数据重玩
                    //战斗胜利后的回调，战斗胜利执行这里
                    this._view.m_mapList._children[index].asCom.getChildAt(1).asCom.removeFromParent();      //将该怪物从地图中删除
                    DataUtil.player.map[DataUtil.player.layer].monsterIndex.splice(i, 1);                    //将该怪物的index值从玩家信息中移除
                    DataUtil.player.map[DataUtil.player.layer].monster.splice(i, 1);                         //将该怪物的id从玩家信息中移除
                    this.flushPlayerPanel();        //刷新面板并保存
                    this.initOperation();           //初始化操作盘，可点击移动
                    this._isFighting = false;       //将角色的战斗状态置为不在战斗
                }, () => {
                    this.flushPlayerPanel();        //刷新面板并保存
                    this.initOperation();           //初始化操作盘，可点击移动
                    this._isFighting = false;       //将角色的战斗状态置为不在战斗
                }, this._view.m_panel);             //将panel组件传过去，使用panel的xy信息作为战斗画面的xy
                this._isFighting = true;            //将角色的战斗状态置为正在战斗
                this._moveStop();                   //停止移动
                return true;                        //返回发生了碰撞
            }
        }
        return false;                               //以上都没有，返回没有发生碰撞
    }

    /**使用蓝色500血瓶 */
    protected _useBloodBlue() {
        if (this._isFighting) return;                   //如果当前玩家正在战斗，则不能使用回血
        if (this._view.m_blood_blue.value > 0) return;  //如果当前血药正在CD中，则不能使用回血
        if (DataUtil.player.blood_blue <= 0) return;    //如果当前玩家的500血药数量小于等于0，则不能使用回血
        //以上不能使用回血直接返回，以下为开始使用回血
        DataUtil.player.blood_blue--;                   //玩家500血药的数量-1
        DataUtil.player.life += 500;                    //玩家生命值+500
        SoundUtil.playSound(SoundUtil.sound2);          //播放回血音效sound2
        this._view.m_blood_blue.value = 100;            //blood_blue组件的value为100，即500血药的CD值置为100
        this.flushPlayerPanel();                        //刷新玩家面板并保存
        Laya.timer.loop(20, this, this.cdBloodBlue);    //开始循环20毫秒循环一次CD-1的效果，即2秒后血药CD为0
    }

    /**蓝色(500)血药CD减少 */
    protected cdBloodBlue() {
        this._view.m_blood_blue.value--;                //blood_blue组件的value-1，即500血药的CD值-1
        if (this._view.m_blood_blue.value <= 0) {       //当CD小于等于0时，执行下面的函数
            Laya.timer.clear(this, this.cdBloodBlue);   //清空循环，停止循环CD减少函数
        }
    }

    /**使用红色200血瓶 */
    protected _useBloodRed() {
        if (this._isFighting) return;                    //如果当前玩家正在战斗，则不能使用回血
        if (this._view.m_blood_red.value > 0) return;    //如果当前血药正在CD中，则不能使用回血
        if (DataUtil.player.blood_red <= 0) return;      //如果当前玩家的200血药数量小于等于0，则不能使用回血
        //以上不能使用回血直接返回，以下为开始使用回血
        DataUtil.player.blood_red--;                     //玩家200血药的数量-1
        DataUtil.player.life += 200;                     //玩家生命值+200
        SoundUtil.playSound(SoundUtil.sound2);           //播放回血音效sound2
        this._view.m_blood_red.value = 100;              //blood_red组件的value为100，即200血药的CD值置为100
        this.flushPlayerPanel();                         //刷新玩家面板并保存
        Laya.timer.loop(20, this, this.cdBloodRed);      //开始循环20毫秒循环一次CD-1的效果，即2秒后血药CD为0
    }

    /**红色(200)血药CD减少 */
    protected cdBloodRed() {
        this._view.m_blood_red.value--;                 //blood_red组件的value-1，即200血药的CD值-1
        if (this._view.m_blood_red.value <= 0) {        //当CD小于等于0时，执行下面的函数
            Laya.timer.clear(this, this.cdBloodRed);    //清空循环，停止循环CD减少函数
        }
    }

    /**显示怪物属性的二级界面 */
    protected _showBadgeWnd() {
        if (this._isFighting) return;             //如果玩家正在战斗，则直接返回
        if (!DataUtil.player.isHaveBadge) {       //如果玩家不能打开怪物属性二级界面，需要获得圣光徽道具，则提示返回
            FlyMsgBox.showTip("暂时无法使用")      //提示飘字“暂时无法使用”
            return;         //返回
        }
        if (DataUtil.isOpenBadge || DataUtil.isOpenWheel) return;       //如果当前已经打开了怪物属性二级界面或楼层跳转界面，则直接返回
        DataUtil.isOpenBadge = true;             //打开怪物属性界面状态置为true
        AttributeWnd.showAttributeWnd(this._view.m_mapList, this.initOperation.bind(this));//显示怪物属性二级界面，传过去mapList组件(其是gamescreen中的组件，即中间最大的方框中的列表)和初始化操作盘的函数(在关闭界面时调用用的)
        this._moveStop();                        //停止移动
    }

    /**显示楼层跳转的二级界面 */
    protected _showWheelWnd() {
        if (this._isFighting) return;             //如果玩家正在战斗，则直接返回
        if (!DataUtil.player.isHaveWheel || DataUtil.player.layer == 21) {       //如果玩家不能打开楼层跳转二级界面，需要获得风之轮盘道具，则提示返回
            FlyMsgBox.showTip("暂时无法使用")      //提示飘字“暂时无法使用”
            return;         //返回
        }
        if (DataUtil.isOpenWheel || DataUtil.isOpenBadge) return;       //如果当前已经打开了怪物属性二级界面或楼层跳转界面，则直接返回
        DataUtil.isOpenWheel = true;             //打开楼层跳转界面状态置为true
        ChangeLayerWnd.showChangeLayer(this.jumpLayer.bind(this), this._view.m_mapList, this.initOperation.bind(this));//显示楼层跳转二级界面，传过去楼层跳转实现的函数(点击楼层时使用),mapList组件(其是gamescreen中的组件，即中间最大的方框中的列表)和初始化操作盘的函数(在关闭界面时调用用的)
        this._moveStop();                        //停止移动
    }

    /**楼层跳转实现 */
    protected jumpLayer() {
        Laya.Scene.open("game/transition.scene", false, DataUtil.player.layer);     //打开过渡界面，false表示不关闭现在的game界面，把现在的层数传过去
        Laya.timer.once(1000, this, this.initMapList);                              //一秒后，执行刷新地图渲染的函数
        Laya.timer.once(2000, this, this.flushPlayerPanel);                         //两秒后，执行刷新面板的函数
        this._moveReturn();                                                         //还原移动
    }
}