/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_shop2 extends fgui.GComponent {

	public m_item:fgui.GLoader;
	public m_common:fgui.Transition;
	public static URL:string = "ui://n1eyqnayoyj7hy";

	public static createInstance():UI_shop2 {
		return <UI_shop2>(fgui.UIPackage.createObject("Main", "shop2"));
	}

	protected onConstruct():void {
		this.m_item = <fgui.GLoader>(this.getChildAt(0));
		this.m_common = this.getTransitionAt(0);
	}
}