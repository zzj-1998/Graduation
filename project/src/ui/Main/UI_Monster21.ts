/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster21 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9v";

	public static createInstance():UI_Monster21 {
		return <UI_Monster21>(fgui.UIPackage.createObject("Main", "Monster21"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}