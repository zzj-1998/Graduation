/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster18 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9s";

	public static createInstance():UI_Monster18 {
		return <UI_Monster18>(fgui.UIPackage.createObject("Main", "Monster18"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}