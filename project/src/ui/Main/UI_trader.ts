/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_trader extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkz3n";

	public static createInstance():UI_trader {
		return <UI_trader>(fgui.UIPackage.createObject("Main", "trader"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}