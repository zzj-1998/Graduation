/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster11 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz97";

	public static createInstance():UI_Monster11 {
		return <UI_Monster11>(fgui.UIPackage.createObject("Main", "Monster11"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}