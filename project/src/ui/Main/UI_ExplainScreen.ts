/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ExplainScreen extends fgui.GComponent {

	public m_btnClose:fgui.GButton;
	public static URL:string = "ui://n1eyqnayb9orfn";

	public static createInstance():UI_ExplainScreen {
		return <UI_ExplainScreen>(fgui.UIPackage.createObject("Main", "ExplainScreen"));
	}

	protected onConstruct():void {
		this.m_btnClose = <fgui.GButton>(this.getChildAt(1));
	}
}