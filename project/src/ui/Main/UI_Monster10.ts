/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster10 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz96";

	public static createInstance():UI_Monster10 {
		return <UI_Monster10>(fgui.UIPackage.createObject("Main", "Monster10"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}