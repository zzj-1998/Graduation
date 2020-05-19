/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster08 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz94";

	public static createInstance():UI_Monster08 {
		return <UI_Monster08>(fgui.UIPackage.createObject("Main", "Monster08"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}