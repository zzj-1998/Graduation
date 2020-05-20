/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FightWnd extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_monster:fgui.GLoader;
	public m_life:fgui.GTextField;
	public m_attack:fgui.GTextField;
	public m_defense:fgui.GTextField;
	public m_myLife:fgui.GTextField;
	public m_myAttack:fgui.GTextField;
	public m_myDefense:fgui.GTextField;
	public static URL:string = "ui://n1eyqnayz6mtho";

	public static createInstance():UI_FightWnd {
		return <UI_FightWnd>(fgui.UIPackage.createObject("Main", "FightWnd"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_monster = <fgui.GLoader>(this.getChildAt(4));
		this.m_life = <fgui.GTextField>(this.getChildAt(14));
		this.m_attack = <fgui.GTextField>(this.getChildAt(15));
		this.m_defense = <fgui.GTextField>(this.getChildAt(16));
		this.m_myLife = <fgui.GTextField>(this.getChildAt(17));
		this.m_myAttack = <fgui.GTextField>(this.getChildAt(18));
		this.m_myDefense = <fgui.GTextField>(this.getChildAt(19));
	}
}