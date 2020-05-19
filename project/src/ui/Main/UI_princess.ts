/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_princess extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz3p";

	public static createInstance():UI_princess {
		return <UI_princess>(fgui.UIPackage.createObject("Main", "princess"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}