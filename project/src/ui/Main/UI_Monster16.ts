/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster16 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9q";

	public static createInstance():UI_Monster16 {
		return <UI_Monster16>(fgui.UIPackage.createObject("Main", "Monster16"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}