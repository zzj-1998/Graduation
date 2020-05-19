/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Key_yellow extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayu1oph2";

	public static createInstance():UI_Key_yellow {
		return <UI_Key_yellow>(fgui.UIPackage.createObject("Main", "Key_yellow"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}