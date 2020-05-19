/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster27 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza1";

	public static createInstance():UI_Monster27 {
		return <UI_Monster27>(fgui.UIPackage.createObject("Main", "Monster27"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}