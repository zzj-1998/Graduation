/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Nugget extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgid";

	public static createInstance():UI_Nugget {
		return <UI_Nugget>(fgui.UIPackage.createObject("Main", "Nugget"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}