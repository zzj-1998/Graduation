/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster07 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz93";

	public static createInstance():UI_Monster07 {
		return <UI_Monster07>(fgui.UIPackage.createObject("Main", "Monster07"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}