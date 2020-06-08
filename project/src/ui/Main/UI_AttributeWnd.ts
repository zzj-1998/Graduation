/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AttributeWnd extends fgui.GComponent {

	public m_AttributeList:fgui.GList;
	public m_btnClose:fgui.GButton;
	public static URL:string = "ui://n1eyqnaye5g7j8";

	public static createInstance():UI_AttributeWnd {
		return <UI_AttributeWnd>(fgui.UIPackage.createObject("Main", "AttributeWnd"));
	}

	protected onConstruct():void {
		this.m_AttributeList = <fgui.GList>(this.getChildAt(1));
		this.m_btnClose = <fgui.GButton>(this.getChildAt(2));
	}
}