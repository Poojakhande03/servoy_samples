/**
 * @properties={typeid:24,uuid:"15e37465-d08b-4617-a4db-a531bbe570d1"}
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
 * @properties={typeid:24,uuid:"0583b5e3-0732-4567-b9e7-9cbcf4340ce9"}
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
	var sortImages = new Array('status_asc:::project_people_to_project.status asc',
								'status_desc:::project_people_to_project.status desc',
								'project_name_asc:::project_people_to_project.proj_name asc',
								'project_name_desc:::project_people_to_project.proj_name desc');
	
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
