/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_door_yellow extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz2r";

	public static createInstance():UI_door_yellow {
		return <UI_door_yellow>(fgui.UIPackage.createObject("Main", "door_yellow"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}