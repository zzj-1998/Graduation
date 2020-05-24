/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Wheel extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgii";

	public static createInstance():UI_Wheel {
		return <UI_Wheel>(fgui.UIPackage.createObject("Main", "Wheel"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}