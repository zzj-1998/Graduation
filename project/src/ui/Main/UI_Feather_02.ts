/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Feather_02 extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnay9xpgig";

	public static createInstance():UI_Feather_02 {
		return <UI_Feather_02>(fgui.UIPackage.createObject("Main", "Feather_02"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
		this.m_common = this.getTransitionAt(0);
	}
}