/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster05 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz91";

	public static createInstance():UI_Monster05 {
		return <UI_Monster05>(fgui.UIPackage.createObject("Main", "Monster05"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}