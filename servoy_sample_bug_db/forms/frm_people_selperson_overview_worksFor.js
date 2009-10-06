/**
 * @properties={typeid:24,uuid:"249b37a4-9683-4879-9978-bfaf1d8134a0"}
 */
function BtnDelete()
{
	/*
	PURPOSE: Delete person from company
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.NewRecordAction(2,'Deleted person ' + people_company_to_people.name_full +
		' from company ' + people_company_to_company.company_name, null, null, ixcompany);
	
	//update the modified of the task
	gcurrtask_to_task.dt_modified = new Date()
	gcurrtask_to_task.ixmodifiedperson = globals.currUserID
	
	//turn off autosave
	databaseManager.setAutoSave(true)
	controller.deleteRecord()
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
}

/**
 * @properties={typeid:24,uuid:"a69e5b02-5e33-4160-99d9-63cc0724cafe"}
 */
function BtnGoCompany()
{
	/*
	PURPOSE: View the details of a specific company
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.GoCompany(ixcompany);
}

/**
 * @properties={typeid:24,uuid:"aecb13d5-bd0e-4575-b7a5-a797d99a47c9"}
 */
function onShow()
{
	elements.company_asc.visible = true;
	elements.company_desc.visible = false;
	elements.phone_asc.visible = false;
	elements.phone_desc.visible = false;
}

/**
 * @properties={typeid:24,uuid:"ee5caffb-883d-4320-b55e-9e82bfca9418"}
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
	var sortImages = new Array('company_asc:::people_company_to_company.company_name asc',
								'company_desc:::people_company_to_company.company_name desc',
								'phone_asc:::people_company_to_company.phone asc',
								'phone_desc:::people_company_to_company.phone desc');

	//form name                            
	var formName = controller.getName()
	
	//column number
	var btnName = application.getMethodTriggerElementName();
	var columnNum = utils.stringRight(btnName, 1);
	
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
