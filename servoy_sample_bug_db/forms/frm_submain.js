/**
 * @properties={typeid:24,uuid:"6c9019db-201d-4579-9a3c-8da154f8863f"}
 */
function BtnCompanies()
{
	/*
	PURPOSE: Used to activate the "Companies" tab
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	//dim all tabs
	TabsDimAll();
	
	//set the current tab to dark grey
	elements.btn_companies.bgcolor = '#666666'
	
	if(elements.tabs_main.tabIndex != 4)
	{
		elements.tabs_main.tabIndex = 4
	}
	
	if(forms.frm_company.elements.tabs_main.tabIndex != 1)
	{
		forms.frm_company.elements.tabs_main.tabIndex = 1
	}
}

/**
 * @properties={typeid:24,uuid:"7c1168a8-9f86-47ec-860b-aa9e15601327"}
 */
function BtnHome()
{
	/*
	PURPOSE: Used to activate the "Home" tab
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	//dim all tabs
	TabsDimAll();
	
	//set the current tab to dark grey
	elements.btn_home.bgcolor = '#666666'
	
	if(elements.tabs_main.tabIndex != 1)
	{
		elements.tabs_main.tabIndex = 1
	}
}

/**
 * @properties={typeid:24,uuid:"17cd841f-dd9a-47ef-b4ef-09e15f1fc914"}
 */
function BtnPeople()
{
	/*
	PURPOSE: Used to activate the "People" tab
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	//dim all tabs
	TabsDimAll();
	
	//set the current tab to dark grey
	elements.btn_people.bgcolor = '#666666'
	
	if(elements.tabs_main.tabIndex != 3)
	{
		elements.tabs_main.tabIndex = 3
	}
}

/**
 * @properties={typeid:24,uuid:"503b96d7-1f55-4106-ac63-5e81b9d885b2"}
 */
function BtnProjects()
{
	/*
	PURPOSE: Used to activate the "Projects" tab
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	//dim all tabs
	TabsDimAll();
	
	//set the current tab to dark grey
	elements.btn_projects.bgcolor = '#666666'
	
	if(elements.tabs_main.tabIndex != 2)
	{
		elements.tabs_main.tabIndex = 2
	}
}

/**
 * @properties={typeid:24,uuid:"5ac41672-0eb0-4e1d-998e-3f88c721b6d9"}
 */
function TabsDimAll()
{
	/*
	PURPOSE: Used as a central method for making all "tab" labels light grey
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	elements.btn_home.bgcolor = '#afafaf'
	elements.btn_projects.bgcolor = '#afafaf'
	elements.btn_people.bgcolor = '#afafaf'
	elements.btn_companies.bgcolor = '#afafaf'
}
