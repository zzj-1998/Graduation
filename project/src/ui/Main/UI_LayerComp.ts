/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LayerComp extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_layer:fgui.GTextField;
	public static URL:string = "ui://n1eyqnayh6hqgl";

	public static createInstance():UI_LayerComp {
		return <UI_LayerComp>(fgui.UIPackage.createObject("Main", "LayerComp"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_layer = <fgui.GTextField>(this.getChildAt(3));
	}
}