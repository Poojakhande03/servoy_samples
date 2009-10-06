/**
 * @properties={typeid:24,uuid:"cd20c197-a5d5-442c-92a4-9d995853aeec"}
 */
function BtnGoProject()
{
	/*
	PURPOSE: Go to this project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.GoProject(ixproject);
}

/**
 * @properties={typeid:24,uuid:"fba667f9-a2c9-467d-af23-5380e53e0414"}
 */
function BtnSort(arg0)
{
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	
	var isInitial = arg0;
	
	//load sort images for all columns
	var sortImages = new Array('status_asc:::staus asc',
								'status_desc:::status desc',
								'project_name_asc:::proj_name asc',
								'project_name_desc:::proj_name desc');
	
	//form name                            
	var formName = controller.getName();
	
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

/**
 * @properties={typeid:24,uuid:"3a789a75-e026-4529-8eb9-fc591ca6425a"}
 */
function FilterProjects()
{
	/*
	PURPOSE: This method runs when the closed projects form is shown
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	//perform a find for open projects that user is a member of
	
	var query = 'select a.ixproject from tbl_project a ' +
				'where a.ixcompany = ? and a.status = 7'
	
	//Get a dataset based on query
	var maxReturnedRows = 1000;//useful to limit number of rows
	var args = new Array()
	args[0] = globals.currCompanyID
	var dataset = databaseManager.getDataSetByQuery(controller.getServerName(), query, args, maxReturnedRows);
	
	controller.loadRecords(dataset)
	
	//active projects
	elements.project_name_asc.visible = false
	BtnSort('initial');
}
