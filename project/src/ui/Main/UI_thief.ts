/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_thief extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz3o";

	public static createInstance():UI_thief {
		return <UI_thief>(fgui.UIPackage.createObject("Main", "thief"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}