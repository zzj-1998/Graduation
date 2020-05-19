/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Key_red extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayu1oph4";

	public static createInstance():UI_Key_red {
		return <UI_Key_red>(fgui.UIPackage.createObject("Main", "Key_red"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}