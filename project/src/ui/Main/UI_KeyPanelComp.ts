/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_KeyPanelComp extends fgui.GComponent {

	public m_key_yellow:fgui.GLabel;
	public m_key_blue:fgui.GLabel;
	public m_key_red:fgui.GLabel;
	public static URL:string = "ui://n1eyqnayh6hqgq";

	public static createInstance():UI_KeyPanelComp {
		return <UI_KeyPanelComp>(fgui.UIPackage.createObject("Main", "KeyPanelComp"));
	}

	protected onConstruct():void {
		this.m_key_yellow = <fgui.GLabel>(this.getChildAt(1));
		this.m_key_blue = <fgui.GLabel>(this.getChildAt(2));
		this.m_key_red = <fgui.GLabel>(this.getChildAt(3));
	}
}