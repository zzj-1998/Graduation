/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_KnapsackComp extends fgui.GProgressBar {

	public m_nums:fgui.Controller;
	public m_gray:fgui.Controller;
	public m_type:fgui.Controller;
	public m_icon:fgui.GLoader;
	public m_num:fgui.GTextField;
	public static URL:string = "ui://n1eyqnayh6hqgr";

	public static createInstance():UI_KnapsackComp {
		return <UI_KnapsackComp>(fgui.UIPackage.createObject("Main", "KnapsackComp"));
	}

	protected onConstruct():void {
		this.m_nums = this.getControllerAt(0);
		this.m_gray = this.getControllerAt(1);
		this.m_type = this.getControllerAt(2);
		this.m_icon = <fgui.GLoader>(this.getChildAt(1));
		this.m_num = <fgui.GTextField>(this.getChildAt(2));
	}
}