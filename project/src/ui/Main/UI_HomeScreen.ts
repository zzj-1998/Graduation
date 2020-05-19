/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_HomeScreen extends fgui.GComponent {

	public m_btnExplain:fgui.GButton;
	public m_btnStart:fgui.GButton;
	public m_btnLeave:fgui.GButton;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://n1eyqnayprsq1";

	public static createInstance():UI_HomeScreen {
		return <UI_HomeScreen>(fgui.UIPackage.createObject("Main", "HomeScreen"));
	}

	protected onConstruct():void {
		this.m_btnExplain = <fgui.GButton>(this.getChildAt(2));
		this.m_btnStart = <fgui.GButton>(this.getChildAt(3));
		this.m_btnLeave = <fgui.GButton>(this.getChildAt(4));
		this.m_t0 = this.getTransitionAt(0);
	}
}