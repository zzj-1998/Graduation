/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_DownStairs extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayxz9qh1";

	public static createInstance():UI_DownStairs {
		return <UI_DownStairs>(fgui.UIPackage.createObject("Main", "DownStairs"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}