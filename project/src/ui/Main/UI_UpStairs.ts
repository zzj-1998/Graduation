/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_UpStairs extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayxz9qh0";

	public static createInstance():UI_UpStairs {
		return <UI_UpStairs>(fgui.UIPackage.createObject("Main", "UpStairs"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}