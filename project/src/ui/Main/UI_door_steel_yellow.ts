/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_door_steel_yellow extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz2w";

	public static createInstance():UI_door_steel_yellow {
		return <UI_door_steel_yellow>(fgui.UIPackage.createObject("Main", "door_steel_yellow"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}