/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_KeyBox extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgie";

	public static createInstance():UI_KeyBox {
		return <UI_KeyBox>(fgui.UIPackage.createObject("Main", "KeyBox"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}