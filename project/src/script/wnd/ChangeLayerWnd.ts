import { DataUtil } from "../util/DataUtil";
import { FlyMsgBox } from "./FlyMsgBox";
import UI_ChangeLayerWnd from "../../ui/Main/UI_ChangeLayerWnd";

export class ChangeLayerWnd extends UI_ChangeLayerWnd {
    _callBack: Function;
    _finish: Function;


    static create(): ChangeLayerWnd {
        let scene = <ChangeLayerWnd>fairygui.UIPackage.createObjectFromURL(UI_ChangeLayerWnd.URL, ChangeLayerWnd);
        return scene;
    }

    initScene(cb: Function,finish: Function) {
        this._callBack = cb;
        this._finish = finish;
        for (let i = 0; i < this.m_layerList._children.length; i++) {
            this.m_layerList._children[i].asCom.getChild('btnLayer').text = "第 " + (i+1) + " 层";
            this.m_layerList._children[i].asCom['$idx'] = i+1;
            this.m_layerList._children[i].asCom.onClick(this, ()=>{
                this.changeLayer(cb,this.m_layerList._children[i].asCom['$idx']);
            })
        }
        this.m_btnClose.onClick(this, ()=>{
            this.recover();
        })
    }
    
    /**回收界面,点关闭就把这个界面回收掉 */
    public recover() {
        if (this.parent) {
            this.removeFromParent();
            DataUtil.isOpenWheel = false;
        }
        if (!!this._finish) this._finish();
    }

    //具体的楼层跳转功能
    protected changeLayer(success: Function,layer: number) {
        DataUtil.isOpenWheel = false;
        if (layer == DataUtil.player.layer || layer > DataUtil.player.maxLayer) {
            if (this.parent) {
                this.removeFromParent();
            }
        }
        else {
            success();
            if (this.parent) {
                this.removeFromParent();
            }
            Laya.timer.once(500,this,()=>{
                DataUtil.player.layer = layer;
            })
        }
    }

    static showChangeLayer(cb: Function,comp:fairygui.GComponent,finish: Function) {
        let temp = this.create();
        temp.setXY(comp.x, comp.y);
        fairygui.GRoot.inst.addChild(temp);
        temp.initScene(cb,finish);
    }
}
