/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Cross extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgij";

	public static createInstance():UI_Cross {
		return <UI_Cross>(fgui.UIPackage.createObject("Main", "Cross"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}