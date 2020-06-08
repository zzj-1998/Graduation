/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ChangeLayerWnd extends fgui.GComponent {

	public m_btnClose:fgui.GButton;
	public m_layerList:fgui.GList;
	public static URL:string = "ui://n1eyqnaye5g7j4";

	public static createInstance():UI_ChangeLayerWnd {
		return <UI_ChangeLayerWnd>(fgui.UIPackage.createObject("Main", "ChangeLayerWnd"));
	}

	protected onConstruct():void {
		this.m_btnClose = <fgui.GButton>(this.getChildAt(3));
		this.m_layerList = <fgui.GList>(this.getChildAt(4));
	}
}