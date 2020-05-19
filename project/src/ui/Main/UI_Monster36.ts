/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster36 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkzaa";

	public static createInstance():UI_Monster36 {
		return <UI_Monster36>(fgui.UIPackage.createObject("Main", "Monster36"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}