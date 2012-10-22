/**
 * @properties={typeid:24,uuid:"5591a618-570d-4009-8cb0-4c8124225212"}
 */
function BtnGoTask()
{
	/*
	PURPOSE: Go to this task
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.GoTask(ixtask);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 *
 * @properties={typeid:24,uuid:"EC41F509-2F98-404E-9461-A138FF0F48FA"}
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
	var ftsort, isInitial, btnName;
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'project_name_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('project_name_asc:::task_to_project.proj_name asc',
								'project_name_desc:::task_to_project.proj_name desc',
								'status_asc:::status asc',
								'status_desc:::status desc',
								'label_asc:::status asc',
								'label_desc:::status desc');
	
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
		globals.SortColumns(sortImages, formName, 1);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
