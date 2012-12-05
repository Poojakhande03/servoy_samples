/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"A4FB49DA-5309-44C1-B3F3-098C5BF55500",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"93c85c13-f594-4e47-8c7e-b1ad23564fba"}
 */
function BtnGoTask()
{
	/*
	PURPOSE: Go to this task
	
	PARAMETERS: ixtask int (required)
				ixproject int (optional - web client only)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	if(ixtask) {
		
		globals.GoTask(ixtask);
	}
	else if(ixcompany)
	{
		globals.GoCompany(ixcompany);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 * 
 * @properties={typeid:24,uuid:"8D37340B-6361-46FF-9FFC-7BBA408DE5E0"}
 */
function BtnSort(event, arg1) {
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	var isInitial, btnName;
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'date_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('date_asc:::dt_created asc',
								'date_desc:::dt_created desc',
								'person_asc:::action_to_people.name_full asc',
								'person_desc:::action_to_people.name_full desc',
								'action_asc:::action_text asc',
								'action_desc:::action_text desc'
								);
	
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
