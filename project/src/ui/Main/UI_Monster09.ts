/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster09 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz95";

	public static createInstance():UI_Monster09 {
		return <UI_Monster09>(fgui.UIPackage.createObject("Main", "Monster09"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}