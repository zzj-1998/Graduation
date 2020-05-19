/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Monster34 extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnaybhkza8";

	public static createInstance():UI_Monster34 {
		return <UI_Monster34>(fgui.UIPackage.createObject("Main", "Monster34"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}