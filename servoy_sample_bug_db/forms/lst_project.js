/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"33E0BB53-828B-4E03-9A1C-AB90471A809E",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"c6d983f5-6077-48d1-a8d1-4a2e3a019e40"}
 */
function BtnGoProject()
{
	/*
	PURPOSE: Go to this project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
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
 * @properties={typeid:24,uuid:"A3BA1096-2191-4CB3-B674-AF811200DC35"}
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
		btnName = event.toString();
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
