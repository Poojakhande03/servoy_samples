/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"F058A708-638F-46E4-9A02-F61F72FA67B7",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"c7f75705-413c-480e-a4b7-4ff57bc58cae"}
 * @AllowToRunInFind
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 *
 * @properties={typeid:24,uuid:"2E74D546-5A09-46DA-935B-8C9820C9B758"}
 * @AllowToRunInFind
 */
function BtnSort(event, arg1) {
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	var isInitial, btnName;
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'nickname_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('nickname_asc:::nickname',
								'nickname_desc:::nickname desc',
								'name_full_asc:::name_full asc',
								'name_full_desc:::name_full desc');
	
	//form name                            
	var formName = 'lst_people';
	
	//column number
	if (arg1 != null)
		btnName = event;
	else
		btnName = event.getElementName();
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
