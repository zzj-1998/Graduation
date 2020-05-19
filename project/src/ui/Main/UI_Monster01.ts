/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster01 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz8w";

	public static createInstance():UI_Monster01 {
		return <UI_Monster01>(fgui.UIPackage.createObject("Main", "Monster01"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}