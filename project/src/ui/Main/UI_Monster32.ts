/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster32 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza6";

	public static createInstance():UI_Monster32 {
		return <UI_Monster32>(fgui.UIPackage.createObject("Main", "Monster32"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}