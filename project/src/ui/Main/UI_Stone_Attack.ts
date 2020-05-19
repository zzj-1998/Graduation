/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Stone_Attack extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayg43ehd";

	public static createInstance():UI_Stone_Attack {
		return <UI_Stone_Attack>(fgui.UIPackage.createObject("Main", "Stone_Attack"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}