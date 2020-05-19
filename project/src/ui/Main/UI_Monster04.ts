/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster04 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz90";

	public static createInstance():UI_Monster04 {
		return <UI_Monster04>(fgui.UIPackage.createObject("Main", "Monster04"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}