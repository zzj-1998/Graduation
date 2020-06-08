/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_OperationComp from "./UI_OperationComp";
import UI_PanelComp from "./UI_PanelComp";
import UI_KeyPanelComp from "./UI_KeyPanelComp";
import UI_LayerComp from "./UI_LayerComp";
import UI_KnapsackComp from "./UI_KnapsackComp";
import UI_BadgeBar from "./UI_BadgeBar";
import UI_WheelBar from "./UI_WheelBar";

export default class UI_GameScreen extends fgui.GComponent {

	public m_operation:UI_OperationComp;
	public m_mapList:fgui.GList;
	public m_panel:UI_PanelComp;
	public m_keyPanel:UI_KeyPanelComp;
	public m_layer:UI_LayerComp;
	public m_btnSave:fgui.GButton;
	public m_blood_red:UI_KnapsackComp;
	public m_blood_blue:UI_KnapsackComp;
	public m_badgeBtn:UI_BadgeBar;
	public m_WheelBtn:UI_WheelBar;
	public static URL:string = "ui://n1eyqnayh7ng1x";

	public static createInstance():UI_GameScreen {
		return <UI_GameScreen>(fgui.UIPackage.createObject("Main", "GameScreen"));
	}

	protected onConstruct():void {
		this.m_operation = <UI_OperationComp>(this.getChildAt(1));
		this.m_mapList = <fgui.GList>(this.getChildAt(2));
		this.m_panel = <UI_PanelComp>(this.getChildAt(4));
		this.m_keyPanel = <UI_KeyPanelComp>(this.getChildAt(5));
		this.m_layer = <UI_LayerComp>(this.getChildAt(6));
		this.m_btnSave = <fgui.GButton>(this.getChildAt(7));
		this.m_blood_red = <UI_KnapsackComp>(this.getChildAt(8));
		this.m_blood_blue = <UI_KnapsackComp>(this.getChildAt(9));
		this.m_badgeBtn = <UI_BadgeBar>(this.getChildAt(10));
		this.m_WheelBtn = <UI_WheelBar>(this.getChildAt(11));
	}
}