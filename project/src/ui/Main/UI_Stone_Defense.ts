/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Stone_Defense extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayg43ehe";

	public static createInstance():UI_Stone_Defense {
		return <UI_Stone_Defense>(fgui.UIPackage.createObject("Main", "Stone_Defense"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}