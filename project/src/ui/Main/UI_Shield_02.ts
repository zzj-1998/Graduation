/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Shield_02 extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://n1eyqnay9xpgib";

	public static createInstance():UI_Shield_02 {
		return <UI_Shield_02>(fgui.UIPackage.createObject("Main", "Shield_02"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}