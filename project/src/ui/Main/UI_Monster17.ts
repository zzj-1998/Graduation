/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster17 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9r";

	public static createInstance():UI_Monster17 {
		return <UI_Monster17>(fgui.UIPackage.createObject("Main", "Monster17"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}