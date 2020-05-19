/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wall_steel extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz33";

	public static createInstance():UI_wall_steel {
		return <UI_wall_steel>(fgui.UIPackage.createObject("Main", "wall_steel"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}