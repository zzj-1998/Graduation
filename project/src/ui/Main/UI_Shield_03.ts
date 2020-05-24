/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Shield_03 extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgic";

	public static createInstance():UI_Shield_03 {
		return <UI_Shield_03>(fgui.UIPackage.createObject("Main", "Shield_03"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}