/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster35 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza9";

	public static createInstance():UI_Monster35 {
		return <UI_Monster35>(fgui.UIPackage.createObject("Main", "Monster35"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}