/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_shop3 extends fgui.GComponent {

	public m_item:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayoyj7hz";

	public static createInstance():UI_shop3 {
		return <UI_shop3>(fgui.UIPackage.createObject("Main", "shop3"));
	}

	protected onConstruct():void {
		this.m_item = <fgui.GLoader>(this.getChildAt(0));
	}
}