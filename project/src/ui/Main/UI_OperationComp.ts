/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_OperationComp extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_operation:fgui.GLoader;
	public m_btnUp:fgui.GGraph;
	public m_btnDown:fgui.GGraph;
	public m_btnRight:fgui.GGraph;
	public m_btnLeft:fgui.GGraph;
	public static URL:string = "ui://n1eyqnayz4k5gd";

	public static createInstance():UI_OperationComp {
		return <UI_OperationComp>(fgui.UIPackage.createObject("Main", "OperationComp"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_operation = <fgui.GLoader>(this.getChildAt(0));
		this.m_btnUp = <fgui.GGraph>(this.getChildAt(1));
		this.m_btnDown = <fgui.GGraph>(this.getChildAt(2));
		this.m_btnRight = <fgui.GGraph>(this.getChildAt(3));
		this.m_btnLeft = <fgui.GGraph>(this.getChildAt(4));
	}
}