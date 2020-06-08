/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_BadgeBar extends fgui.GButton {

	public m_type:fgui.Controller;
	public static URL:string = "ui://n1eyqnaye5g7ja";

	public static createInstance():UI_BadgeBar {
		return <UI_BadgeBar>(fgui.UIPackage.createObject("Main", "BadgeBar"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
	}
}