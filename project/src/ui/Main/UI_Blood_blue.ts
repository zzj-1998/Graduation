/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Blood_blue extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayg43eha";

	public static createInstance():UI_Blood_blue {
		return <UI_Blood_blue>(fgui.UIPackage.createObject("Main", "Blood_blue"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}