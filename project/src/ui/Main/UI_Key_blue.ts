/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Key_blue extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayu1oph3";

	public static createInstance():UI_Key_blue {
		return <UI_Key_blue>(fgui.UIPackage.createObject("Main", "Key_blue"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}