/**
 * @properties={typeid:24,uuid:"9f3b6f69-2c9a-4ffc-b48d-173534e31203"}
 */
function BtnGoTaskDetail()
{
	/*
	PURPOSE: Go to this task
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currTaskID = ixtask
	
	if(forms.frm_project_selproj.elements.tab_tasks.bgcolor != '#ffffff')
	{
		TabsAllTransparent();
		
		forms.frm_project_selproj.elements.tab_tasks.bgcolor = '#ffffff'
	}
	
	if(forms.frm_project_selproj.elements.tabs_main.tabIndex != 6)
	{
		forms.frm_project_selproj.elements.tabs_main.tabIndex = 6
	}
}

/**
 * @properties={typeid:24,uuid:"e7d0b337-e887-4528-8307-39b65be4a2fa"}
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
	var sortImages = new Array('status_asc:::status asc',
								'status_desc:::status desc',
								'label_asc:::label asc',
								'label_desc:::label desc',
								'task_asc:::task_name asc',
								'task_desc:::task_name desc',
								'project_name_asc:::task_to_project.proj_name',
								'project_name_desc:::task_to_project.proj_name',
								'assignedto_asc:::taskassigned_to_people.name_full asc',
								'assignedto_desc:::taskassigned_to_people.name_full desc',
								'modified_asc:::dt_modified asc',
								'modified_desc:::dt_modified desc');
	
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
		globals.SortColumns(sortImages, formName, 5);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
