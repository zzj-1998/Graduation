/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster26 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza0";

	public static createInstance():UI_Monster26 {
		return <UI_Monster26>(fgui.UIPackage.createObject("Main", "Monster26"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}