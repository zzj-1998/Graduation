/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LifeComp extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_life:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://n1eyqnayoyj7ht";

	public static createInstance():UI_LifeComp {
		return <UI_LifeComp>(fgui.UIPackage.createObject("Main", "LifeComp"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_life = <fgui.GTextField>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}