/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_door_red extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz2t";

	public static createInstance():UI_door_red {
		return <UI_door_red>(fgui.UIPackage.createObject("Main", "door_red"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}