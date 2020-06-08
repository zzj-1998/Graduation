/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LayerBtn extends fgui.GComponent {

	public m_btnLayer:fgui.GButton;
	public static URL:string = "ui://n1eyqnaye5g7j7";

	public static createInstance():UI_LayerBtn {
		return <UI_LayerBtn>(fgui.UIPackage.createObject("Main", "LayerBtn"));
	}

	protected onConstruct():void {
		this.m_btnLayer = <fgui.GButton>(this.getChildAt(0));
	}
}