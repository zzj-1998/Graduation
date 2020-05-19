/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_master extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz3m";

	public static createInstance():UI_master {
		return <UI_master>(fgui.UIPackage.createObject("Main", "master"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}