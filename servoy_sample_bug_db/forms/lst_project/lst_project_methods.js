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
 * @properties={typeid:24,uuid:"27ec63b8-6476-4aa2-a3ba-af37f6ba1cb3"}
 */
function BtnSort()
{
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/

	var isInitial = arguments[0]
	
	//load sort images for all columns
	var sortImages = new Array('status_asc:::status asc',
								'status_desc:::status desc',
								'project_name_asc:::proj_name asc',
								'project_name_desc:::proj_name desc');
	
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
