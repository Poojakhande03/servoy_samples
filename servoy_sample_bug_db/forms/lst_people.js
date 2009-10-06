/**
 * @properties={typeid:24,uuid:"c7f75705-413c-480e-a4b7-4ff57bc58cae"}
 */
function BtnGoPerson(arg0)
{
	/*
	PURPOSE: View the details of a specific person
	
	PARAMETERS: personID int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	var personID = arg0; //this is for the web client links to work right
	if((!personID) || (typeof personID == 'object') || (typeof personID == 'undefined'))
	{
		personID = ixpeople;
	}
	
	//from the web client - do the search
	globals.currPersonID = personID;
	forms.frm_people_selperson.controller.find();
	forms.frm_people_selperson.ixpeople = personID;
	forms.frm_people_selperson.controller.search();
	
	forms.frm_submain.elements.tabs_main.tabIndex = 5;
}

/**
 * @properties={typeid:24,uuid:"05359f39-1ecd-4f8e-9dbb-393d8f475026"}
 */
function BtnSort(arg0)
{
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	
	var isInitial = arg0;
	
	//load sort images for all columns
	var sortImages = new Array('nickname_asc:::nickname',
								'nickname_desc:::nickname desc',
								'name_full_asc:::name_full asc',
								'name_full_desc:::name_full desc');
	
	//form name                            
	var formName = 'lst_people';
	
	//column number
	var btnName = application.getMethodTriggerElementName();
	var columnNum = utils.stringRight(btnName, 2);
	
	if (columnNum.charAt(0) == '_')
	{
	    columnNum = columnNum.substr(1,2);
	}
	
	if((isInitial) && (typeof isInitial != 'object'))
	{
		//initial sort - use the 3rd option
		//fx to perform sort and display column sort direction graphics
		controller.loadAllRecords();
		globals.SortColumns(sortImages, formName, 3);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
