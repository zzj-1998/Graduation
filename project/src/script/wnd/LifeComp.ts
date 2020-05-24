import UI_LifeComp from "../../ui/Main/UI_LifeComp";

export class LifeComp extends UI_LifeComp {
    static _pool: LifeComp[];
    static create(): LifeComp {
        if (this._pool && this._pool.length > 0) {
            return this._pool.shift();
        }
        let msg = <LifeComp>fairygui.UIPackage.createObjectFromURL(UI_LifeComp.URL, LifeComp);
        return msg;
    }

    static LossLife(life: number, type: number,item: fairygui.GObject) {
        let temp = this.create();
        temp.setXY(item.x + item.width - temp.width, item.y);
        temp.m_life.text = "-" + life;
        temp.m_type.selectedIndex = type;
        if (type == 0) {
            temp.m_life.text = "MISS";
        }
        fairygui.GRoot.inst.addChild(temp);
        temp.getTransition("t0").play(Laya.Handler.create(this, () => {
            if (temp.parent) {
                temp.removeFromParent();
            }
            !LifeComp._pool && (LifeComp._pool = []);
            LifeComp._pool.push(temp);
        }));
    }
}
