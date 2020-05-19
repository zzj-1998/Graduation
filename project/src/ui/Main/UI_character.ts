/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_character extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_front:fgui.Transition;
	public m_back:fgui.Transition;
	public m_left:fgui.Transition;
	public m_right:fgui.Transition;
	public static URL:string = "ui://n1eyqnayh7ng11";

	public static createInstance():UI_character {
		return <UI_character>(fgui.UIPackage.createObject("Main", "character"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_front = this.getTransitionAt(0);
		this.m_back = this.getTransitionAt(1);
		this.m_left = this.getTransitionAt(2);
		this.m_right = this.getTransitionAt(3);
	}
}