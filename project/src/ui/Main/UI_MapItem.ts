/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_MapItem extends fgui.GComponent {

	public m_map:fgui.GLoader;
	public static URL:string = "ui://n1eyqnayaie1fr";

	public static createInstance():UI_MapItem {
		return <UI_MapItem>(fgui.UIPackage.createObject("Main", "MapItem"));
	}

	protected onConstruct():void {
		this.m_map = <fgui.GLoader>(this.getChildAt(0));
	}
}