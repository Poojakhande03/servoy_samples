/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"D9D57ACA-D105-4F36-8F7B-EF7C0B45FB94",variableType:-4}
 */
var ftsort = true;

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
	
	if(forms.frm_project_selproj.elements.tab_tasks['bgcolor'] != '#ffffff')
	{
//	if(forms.frm_project_selproj.elements.tab_tasks.bgcolor = ['bgcolor'] != '#ffffff')
//		TabsAllTransparent();
		
		forms.frm_project_selproj.elements.tab_tasks['bgcolor'] = '#ffffff'
	}
	
	if(forms.frm_project_selproj.elements.tabs_main['tabIndex'] != 6)
	{
		forms.frm_project_selproj.elements.tabs_main['tabIndex'] = 6
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 *
 * @properties={typeid:24,uuid:"26B5ED0A-59BF-4E21-8946-DD534B459EA7"}
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
	var isInitial;
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'task_asc';
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
