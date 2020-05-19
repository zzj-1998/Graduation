/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_TransitionWnd extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_layer:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://n1eyqnaynfqthf";

	public static createInstance():UI_TransitionWnd {
		return <UI_TransitionWnd>(fgui.UIPackage.createObject("Main", "TransitionWnd"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_layer = <fgui.GTextField>(this.getChildAt(3));
		this.m_t0 = this.getTransitionAt(0);
	}
}