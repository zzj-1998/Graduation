/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_fairy extends fgui.GComponent {

	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnayh7ng1y";

	public static createInstance():UI_fairy {
		return <UI_fairy>(fgui.UIPackage.createObject("Main", "fairy"));
	}

	protected onConstruct():void {
		this.m_common = this.getTransitionAt(0);
	}
}