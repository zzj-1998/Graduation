/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster19 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9t";

	public static createInstance():UI_Monster19 {
		return <UI_Monster19>(fgui.UIPackage.createObject("Main", "Monster19"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}