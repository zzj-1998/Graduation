/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster29 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza3";

	public static createInstance():UI_Monster29 {
		return <UI_Monster29>(fgui.UIPackage.createObject("Main", "Monster29"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}