/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_AttributeComp from "./UI_AttributeComp";

export default class UI_PanelComp extends fgui.GComponent {

	public m_grade:fgui.GTextField;
	public m_life:UI_AttributeComp;
	public m_attack:UI_AttributeComp;
	public m_defense:UI_AttributeComp;
	public m_hit:UI_AttributeComp;
	public m_crit:UI_AttributeComp;
	public m_dodge:UI_AttributeComp;
	public m_gold:UI_AttributeComp;
	public m_experience:UI_AttributeComp;
	public static URL:string = "ui://n1eyqnayh6hqgj";

	public static createInstance():UI_PanelComp {
		return <UI_PanelComp>(fgui.UIPackage.createObject("Main", "PanelComp"));
	}

	protected onConstruct():void {
		this.m_grade = <fgui.GTextField>(this.getChildAt(2));
		this.m_life = <UI_AttributeComp>(this.getChildAt(4));
		this.m_attack = <UI_AttributeComp>(this.getChildAt(5));
		this.m_defense = <UI_AttributeComp>(this.getChildAt(6));
		this.m_hit = <UI_AttributeComp>(this.getChildAt(7));
		this.m_crit = <UI_AttributeComp>(this.getChildAt(8));
		this.m_dodge = <UI_AttributeComp>(this.getChildAt(9));
		this.m_gold = <UI_AttributeComp>(this.getChildAt(10));
		this.m_experience = <UI_AttributeComp>(this.getChildAt(11));
	}
}