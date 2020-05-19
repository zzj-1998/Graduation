import UI_MsgBox from "../../ui/Main/UI_MsgBox";

export class FlyMsgBox extends UI_MsgBox {
	static _pool: FlyMsgBox[];
	static create(): FlyMsgBox {
		if (this._pool && this._pool.length > 0) {
			return this._pool.shift();
		}
		let msg = <FlyMsgBox>fairygui.UIPackage.createObjectFromURL(UI_MsgBox.URL, FlyMsgBox);
		msg.setPivot(0.5, 0.5, true);
		return msg;
	}

	show(msg: string) {
		this.x = Laya.stage.width / 2;
		this.y = Laya.stage.height / 2;//这里可以控制飞起的高度位置
		this.alpha = 1;
		this.m_txt.text = msg;
		Laya.Tween.to(this, { y: this.y - 200, alpha: 0 }, 1600)
	}

	public recover() {
		if (this.parent) {
			this.removeFromParent();
		}
		!FlyMsgBox._pool && (FlyMsgBox._pool = []);
		FlyMsgBox._pool.push(this);
	}

	/** FlyMsgBox.showTip("") */
	static showTip(msg: string) {
		let temp = FlyMsgBox.create();
		fairygui.GRoot.inst.addChild(temp);
		temp.show(msg);
	}
}
