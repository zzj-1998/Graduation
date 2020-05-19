/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster14 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz9a";

	public static createInstance():UI_Monster14 {
		return <UI_Monster14>(fgui.UIPackage.createObject("Main", "Monster14"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}