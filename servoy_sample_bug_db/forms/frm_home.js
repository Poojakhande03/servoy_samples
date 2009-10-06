/**
 * @properties={typeid:24,uuid:"50fa6e78-6785-4eaa-afce-52870c095da0"}
 */
function TabHome()
{
	/*
	PURPOSE: Tab for going to the "home" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_home.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 1)
	{
		elements.tabs_main.tabIndex = 1
	}
}

/**
 * @properties={typeid:24,uuid:"bf3442cf-655d-4686-89c0-9121c40c960e"}
 */
function TabOverallHistory()
{
	/*
	PURPOSE: Tab for going to the "overall history" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_overallHistory.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 4)
	{
		elements.tabs_main.tabIndex = 4
	}
}

/**
 * @properties={typeid:24,uuid:"70f4906e-03c3-45c1-b23b-97c6523e698f"}
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
	
	elements.tab_home.bgcolor = '#EBEBEB'
	elements.tab_yourProjects.bgcolor = '#EBEBEB'
	elements.tab_yourTasks.bgcolor = '#EBEBEB'
	elements.tab_overallHistory.bgcolor = '#EBEBEB'
}

/**
 * @properties={typeid:24,uuid:"c0b0fdcf-dfa3-475c-877a-ccc33f79bce0"}
 */
function TabYourProjects()
{
	/*
	PURPOSE: Tab for going to the "your projects" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_yourProjects.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 2)
	{
		elements.tabs_main.tabIndex = 2
	}
}

/**
 * @properties={typeid:24,uuid:"d0d97a1d-50ca-46c5-a97d-811933def5a4"}
 */
function TabYourTasks()
{
	/*
	PURPOSE: Tab for going to the "your tasks" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_yourTasks.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 3)
	{
		elements.tabs_main.tabIndex = 3
	}
}
