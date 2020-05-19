/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster30 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza4";

	public static createInstance():UI_Monster30 {
		return <UI_Monster30>(fgui.UIPackage.createObject("Main", "Monster30"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}