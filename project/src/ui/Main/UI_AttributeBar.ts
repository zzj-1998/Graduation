/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AttributeBar extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_life:fgui.GTextField;
	public m_attack:fgui.GTextField;
	public m_defense:fgui.GTextField;
	public m_goldAndExe:fgui.GTextField;
	public m_loss:fgui.GTextField;
	public static URL:string = "ui://n1eyqnaye5g7j9";

	public static createInstance():UI_AttributeBar {
		return <UI_AttributeBar>(fgui.UIPackage.createObject("Main", "AttributeBar"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
		this.m_name = <fgui.GTextField>(this.getChildAt(7));
		this.m_life = <fgui.GTextField>(this.getChildAt(8));
		this.m_attack = <fgui.GTextField>(this.getChildAt(9));
		this.m_defense = <fgui.GTextField>(this.getChildAt(10));
		this.m_goldAndExe = <fgui.GTextField>(this.getChildAt(11));
		this.m_loss = <fgui.GTextField>(this.getChildAt(12));
	}
}