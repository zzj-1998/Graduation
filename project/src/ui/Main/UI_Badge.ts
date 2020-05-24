/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Badge extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgih";

	public static createInstance():UI_Badge {
		return <UI_Badge>(fgui.UIPackage.createObject("Main", "Badge"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}