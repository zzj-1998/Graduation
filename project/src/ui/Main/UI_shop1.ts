/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_shop1 extends fgui.GComponent {

	public m_item:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayoyj7hx";

	public static createInstance():UI_shop1 {
		return <UI_shop1>(fgui.UIPackage.createObject("Main", "shop1"));
	}

	protected onConstruct():void {
		this.m_item = <fgui.GLoader>(this.getChildAt(0));
	}
}