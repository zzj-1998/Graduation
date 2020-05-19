/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_door_steel_blue extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz2v";

	public static createInstance():UI_door_steel_blue {
		return <UI_door_steel_blue>(fgui.UIPackage.createObject("Main", "door_steel_blue"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}