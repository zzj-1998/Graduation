/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Sword_01 extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgi7";

	public static createInstance():UI_Sword_01 {
		return <UI_Sword_01>(fgui.UIPackage.createObject("Main", "Sword_01"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}