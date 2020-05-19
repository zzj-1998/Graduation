/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AttributeComp extends fgui.GComponent {

	public m_attribute:fgui.GTextField;
	public m_num:fgui.GTextField;
	public static URL:string = "ui://n1eyqnayh6hqgi";

	public static createInstance():UI_AttributeComp {
		return <UI_AttributeComp>(fgui.UIPackage.createObject("Main", "AttributeComp"));
	}

	protected onConstruct():void {
		this.m_attribute = <fgui.GTextField>(this.getChildAt(0));
		this.m_num = <fgui.GTextField>(this.getChildAt(1));
	}
}