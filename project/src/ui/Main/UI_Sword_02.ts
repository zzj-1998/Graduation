/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Sword_02 extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgi8";

	public static createInstance():UI_Sword_02 {
		return <UI_Sword_02>(fgui.UIPackage.createObject("Main", "Sword_02"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}