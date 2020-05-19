/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_TxtBtnComp extends fgui.GLabel {

	public m_btnSave:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayh6hqgk";

	public static createInstance():UI_TxtBtnComp {
		return <UI_TxtBtnComp>(fgui.UIPackage.createObject("Main", "TxtBtnComp"));
	}

	protected onConstruct():void {
		this.m_btnSave = <fgui.GLoader>(this.getChildAt(0));
	}
}