/**
 * @properties={typeid:24,uuid:"2bed360b-8f96-4abd-90cb-3f1a023ae2a2"}
 */
function BtnNewTask()
{
	globals.NewRecordTask();
}

/**
 * @properties={typeid:24,uuid:"a20cef16-c84d-42a1-bb03-18589edab438"}
 */
function OnShow()
{
	/*
	PURPOSE: Run when showing the list of "your" tasks
	
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
