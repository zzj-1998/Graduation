/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ExperienceWnd2 extends fgui.GComponent {

	public m_btnGrade:fgui.GButton;
	public m_btnAttack:fgui.GButton;
	public m_btnDefense:fgui.GButton;
	public m_btnHit:fgui.GButton;
	public m_btnCrit:fgui.GButton;
	public m_btnDodge:fgui.GButton;
	public m_btnClose:fgui.GButton;
	public static URL:string = "ui://n1eyqnay9xpgi6";

	public static createInstance():UI_ExperienceWnd2 {
		return <UI_ExperienceWnd2>(fgui.UIPackage.createObject("Main", "ExperienceWnd2"));
	}

	protected onConstruct():void {
		this.m_btnGrade = <fgui.GButton>(this.getChildAt(4));
		this.m_btnAttack = <fgui.GButton>(this.getChildAt(5));
		this.m_btnDefense = <fgui.GButton>(this.getChildAt(6));
		this.m_btnHit = <fgui.GButton>(this.getChildAt(7));
		this.m_btnCrit = <fgui.GButton>(this.getChildAt(8));
		this.m_btnDodge = <fgui.GButton>(this.getChildAt(9));
		this.m_btnClose = <fgui.GButton>(this.getChildAt(10));
	}
}