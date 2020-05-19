/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster15 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9p";

	public static createInstance():UI_Monster15 {
		return <UI_Monster15>(fgui.UIPackage.createObject("Main", "Monster15"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}