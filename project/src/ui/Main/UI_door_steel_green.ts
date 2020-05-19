/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_door_steel_green extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz2y";

	public static createInstance():UI_door_steel_green {
		return <UI_door_steel_green>(fgui.UIPackage.createObject("Main", "door_steel_green"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}