/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_WheelBar extends fgui.GButton {

	public m_type:fgui.Controller;
	public static URL:string = "ui://n1eyqnaye5g7jb";

	public static createInstance():UI_WheelBar {
		return <UI_WheelBar>(fgui.UIPackage.createObject("Main", "WheelBar"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
	}
}