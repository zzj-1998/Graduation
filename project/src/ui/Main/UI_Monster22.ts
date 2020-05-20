/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster22 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnayz6mthn";

	public static createInstance():UI_Monster22 {
		return <UI_Monster22>(fgui.UIPackage.createObject("Main", "Monster22"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}