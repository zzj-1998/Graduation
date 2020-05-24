/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Hammer extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgj1";

	public static createInstance():UI_Hammer {
		return <UI_Hammer>(fgui.UIPackage.createObject("Main", "Hammer"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}