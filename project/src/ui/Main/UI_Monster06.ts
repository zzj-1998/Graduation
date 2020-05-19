/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster06 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz92";

	public static createInstance():UI_Monster06 {
		return <UI_Monster06>(fgui.UIPackage.createObject("Main", "Monster06"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}