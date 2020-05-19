/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster28 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza2";

	public static createInstance():UI_Monster28 {
		return <UI_Monster28>(fgui.UIPackage.createObject("Main", "Monster28"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}