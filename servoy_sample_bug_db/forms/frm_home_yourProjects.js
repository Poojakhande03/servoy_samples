/**
 * @properties={typeid:24,uuid:"1b5c7a88-639b-4cb3-9144-f7d456fac53c"}
 */
function OnShow()
{
	/*
	PURPOSE: Run when showing the list of "your" projects
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin == 1) {
		elements.tabs_main.tabIndex = 1
	}
	else {
		elements.tabs_main.tabIndex = 2
	}
}
