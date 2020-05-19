/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Blood_red extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayg43eh9";

	public static createInstance():UI_Blood_red {
		return <UI_Blood_red>(fgui.UIPackage.createObject("Main", "Blood_red"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}