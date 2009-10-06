/**
 * @properties={typeid:24,uuid:"966f95cc-4a41-4302-8fbb-6d67f0f1bca8"}
 */
function BtnGoItem()
{
	/*
	PURPOSE: Go to this item - based on the data we have
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	if(ixtask) {
		globals.GoTask(ixtask);
	}
	else if (ixproject) {
		globals.GoProject(ixproject);
	}
	else if (ixcompany) {
		globals.GoCompany(ixcompany);
	}
	else if(ixperson) {
		globals.GoPerson(ixperson);
	}
}

/**
 * @properties={typeid:24,uuid:"45bd7b2f-7dc3-4d16-be0d-7f69162a8401"}
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
	var sortImages = new Array('date_asc:::dt_created asc',
								'date_desc:::dt_created desc',
								'project_name_asc:::ixproject asc',
								'project_name_desc:::ixproject desc',
								'person_asc:::action_to_people.name_full asc',
								'person_desc:::action_to_people.name_full desc');
	
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
		globals.SortColumns(sortImages, formName, 1);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
