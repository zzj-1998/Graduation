/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Feather_01 extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgif";

	public static createInstance():UI_Feather_01 {
		return <UI_Feather_01>(fgui.UIPackage.createObject("Main", "Feather_01"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}