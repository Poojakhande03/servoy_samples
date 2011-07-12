/**
 * @properties={typeid:24,uuid:"5512b8b7-68b6-48db-b8cb-da371df596fe"}
 */
function BtnToggleSummary()
{
	/*
	PURPOSE: Show/Hide the summary area
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(elements.tabs_summary.visible)
	{
		//need to "hide" it and move the "works for" up
		elements.btn_arrowSummary.imageURL = 'media:///arrow_closed.gif';
		elements.tabs_summary.visible = false
		elements.lbl_worksFor.setLocation(710,29)
		elements.btn_linkCompany.setLocation(959,33)
		elements.tabs_worksFor.setLocation(710,53)
	}
	else
	{
		//need to "show" it and move the "works for" down
		elements.btn_arrowSummary.imageURL = 'media:///arrow_open.gif';
		elements.lbl_worksFor.setLocation(710,279)
		elements.btn_linkCompany.setLocation(959,283)
		elements.tabs_worksFor.setLocation(710,303)
		elements.tabs_summary.visible = true
	}
}
