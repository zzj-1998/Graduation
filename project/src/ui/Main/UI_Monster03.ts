/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster03 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz8z";

	public static createInstance():UI_Monster03 {
		return <UI_Monster03>(fgui.UIPackage.createObject("Main", "Monster03"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}