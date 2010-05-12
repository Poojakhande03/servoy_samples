/**
 * @properties={typeid:35,uuid:"D3A78ED2-289A-443F-94E0-EE1BD247C049",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"fdda5689-78b9-4e96-860c-2d3354481c88"}
 */
function BtnGoTask()
{
	/*
	PURPOSE: This method runs when the task nav button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	GoTask(ixtask, ixproject);
}

/**
 * @properties={typeid:24,uuid:"7d6bfa74-e988-4a99-8d7a-87d17af01f44"}
 */
function GoTask()
{
	/*
	PURPOSE: Go to this task
	
	PARAMETERS: ixtask int (web client only - optional)
				ixproject int (web client only - optional)
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	/**
	if(application.getApplicationType() == 5)
	{
		globals.currTaskID = arguments[0]
		globals.currProjectID = arguments[1]
	}
	else
	{
		*/
		globals.currTaskID = ixtask;
		globals.currProjectID = ixproject;
//	}
	globals.GoTask(globals.currTaskID);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA59FF33-6760-4D20-A8B3-41E1D0AE8C32"}
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
	
	if (arg1 != null) {
		var isInitial = arg1;
		ftsort = false;
		event = 'status_asc';
	}
	if (ftsort == true) {
		var isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}

	//load sort images for all columns
	var sortImages = new Array('status_asc:::status asc',
								'status_desc:::status desc',
								'label_asc:::label asc',
								'label_desc:::label desc',
								'task_asc:::task_name asc',
								'task_desc:::task_name desc',
								'project_name_asc:::task_to_project.proj_name asc',
								'project_name_desc:::task_to_project.proj_name desc',
								'modified_asc:::dt_modified asc',
								'modified_desc:::dt_modified desc');
	
	//form name                            
	var formName = controller.getName();
	
	//column number
	if (arg1 != null)
		var btnName = event;
	else
		var btnName = event.getElementName();
	
	var columnNum = utils.stringRight(btnName, 2);
	
	if (columnNum.charAt(0) == '_')
	{
	    columnNum = columnNum.substr(1,2);
	}
	
	if(isInitial)
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
