/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"75D50A59-9D6C-411A-B87D-BB44205DFF79",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"be4cee31-712b-4514-be06-34ea00b8a7a8"}
 */
function BtnGoProject()
{
	/*
	PURPOSE: Go to this project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.GoProject(ixproject);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 * 
 * @properties={typeid:24,uuid:"8FB1E824-7E00-4AFA-8C2F-934BE4C024EC"}
 */
function BtnSort(event, arg1) {
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	
	var isInitial, btnName;
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'status_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('status_asc:::status asc',
								'status_desc:::status desc',
								'project_name_asc:::proj_name asc',
								'project_name_desc:::proj_name desc');
	
	//form name                            
	var formName = controller.getName()
	
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
		globals.SortColumns(sortImages, formName, 3);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
