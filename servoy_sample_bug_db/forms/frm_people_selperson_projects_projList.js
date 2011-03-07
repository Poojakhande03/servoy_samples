/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"B6296148-B1DC-482E-BE65-52C6CE268585",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"a4421385-e4ff-4d02-a503-7abc9acb939f"}
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
 * @properties={typeid:24,uuid:"EAE2332E-56D8-40FD-BA0D-61AF352B806E"}
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
	var sortImages = new Array('status_asc:::project_people_to_project.status asc',
								'status_desc:::project_people_to_project.status desc',
								'project_name_asc:::project_people_to_project.proj_name asc',
								'project_name_desc:::project_people_to_project.proj_name desc');
	
	//form name                            
	var formName = controller.getName()
	
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
