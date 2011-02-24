/**
 * @properties={typeid:24,uuid:"8754203e-c32f-448e-99c1-93f91361d926"}
 */
function BtnNewProject()
{
	/*
	PURPOSE: Create project linked to a specific person
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	//new record
	globals.NewRecordProject(null, null);
}

/**
 * @properties={typeid:24,uuid:"671c10cb-0fba-467c-876a-389dc4c48215"}
 */
function OnShow()
{
	/*
	PURPOSE: Run when the projects form is opened
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabActive();
}

/**
 * @properties={typeid:24,uuid:"b33a97f6-d6da-4d8c-8aa4-a362bfc294df"}
 */
function TabActive()
{
	/*
	PURPOSE: Tab for going to the "active" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_active.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 1)
	{
		elements.tabs_main.tabIndex = 1
	}
}

/**
 * @properties={typeid:24,uuid:"2e5858ab-fe67-4a4e-b6a3-28c79a80bf88"}
 */
function TabClosed()
{
	/*
	PURPOSE: Tab for going to the "closed" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_closed.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 2)
	{
		elements.tabs_main.tabIndex = 2
	}
}

/**
 * @properties={typeid:24,uuid:"f38ba628-121f-4d0d-b7fb-5299661958c2"}
 */
function TabsAllTransparent()
{
	/*
	PURPOSE: Used as a central method for making all "tab" labels light grey
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	elements.tab_active.bgcolor = '#EBEBEB'
	elements.tab_closed.bgcolor = '#EBEBEB'
}
