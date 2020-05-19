/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster33 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza7";

	public static createInstance():UI_Monster33 {
		return <UI_Monster33>(fgui.UIPackage.createObject("Main", "Monster33"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}