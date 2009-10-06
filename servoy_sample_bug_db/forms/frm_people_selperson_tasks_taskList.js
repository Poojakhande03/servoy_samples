/**
 * @properties={typeid:24,uuid:"cd9c3fea-72e3-4709-9d71-3250ddb63c3b"}
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
	
	globals.currTaskID = ixtask
	
	globals.ShowDialogTask(null, ixtask);
}

/**
 * @properties={typeid:24,uuid:"1dafd216-81d4-4cad-9234-d8b43bde9196"}
 */
function BtnSort(arg0)
{
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	
	var isInitial = arg0;
	
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
		globals.SortColumns(sortImages, formName, 3);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
