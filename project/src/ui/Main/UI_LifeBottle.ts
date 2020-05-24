/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LifeBottle extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgik";

	public static createInstance():UI_LifeBottle {
		return <UI_LifeBottle>(fgui.UIPackage.createObject("Main", "LifeBottle"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}