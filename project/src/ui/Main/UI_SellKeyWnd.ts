/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_SellKeyWnd extends fgui.GComponent {

	public m_btnYellowKey:fgui.GButton;
	public m_btnBlueKey:fgui.GButton;
	public m_btnRedKey:fgui.GButton;
	public m_btnClose:fgui.GButton;
	public static URL:string = "ui://n1eyqnay9pu8j3";

	public static createInstance():UI_SellKeyWnd {
		return <UI_SellKeyWnd>(fgui.UIPackage.createObject("Main", "SellKeyWnd"));
	}

	protected onConstruct():void {
		this.m_btnYellowKey = <fgui.GButton>(this.getChildAt(4));
		this.m_btnBlueKey = <fgui.GButton>(this.getChildAt(5));
		this.m_btnRedKey = <fgui.GButton>(this.getChildAt(6));
		this.m_btnClose = <fgui.GButton>(this.getChildAt(7));
	}
}