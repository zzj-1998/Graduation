/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_MsgBox extends fgui.GComponent {

	public m_txt:fgui.GTextField;
	public static URL:string = "ui://n1eyqnayl5czh8";

	public static createInstance():UI_MsgBox {
		return <UI_MsgBox>(fgui.UIPackage.createObject("Main", "MsgBox"));
	}

	protected onConstruct():void {
		this.m_txt = <fgui.GTextField>(this.getChildAt(1));
	}
}