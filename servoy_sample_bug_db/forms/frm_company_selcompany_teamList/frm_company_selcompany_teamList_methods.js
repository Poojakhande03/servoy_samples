/**
 * @properties={typeid:24,uuid:"89b8f45b-ab2a-47ad-b906-55113fc5332f"}
 */
function BtnDelete()
{
	/*
	PURPOSE: Delete person linked to a company
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		controller.deleteRecord()
	}
	else
	{
		globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noDeleteAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
}

/**
 * @properties={typeid:24,uuid:"ba737374-d8ec-442b-b8e0-2a6862fe24eb"}
 */
function BtnGoPerson()
{
	/*
	PURPOSE: Go to the selected person
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.GoPerson(ixpeople);
}

/**
 * @properties={typeid:24,uuid:"0294f18c-d4f0-4796-9fb3-98a82247c8c9"}
 */
function onShow()
{
	elements.person_asc.visible = true;
	elements.person_desc.visible = false;
	elements.login_asc.visible = false;
	elements.login_desc.visible = false;
}

/**
 * @properties={typeid:24,uuid:"7113f4d7-057e-4dd3-8e70-700171dce92b"}
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
	var sortImages = new Array('person_asc:::people_company_to_people.name_full asc',
								'person_desc:::people_company_to_people.name_full desc',
								'login_asc:::people_company_to_people.last_login asc',
								'login_desc:::people_company_to_people.last_login desc');

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
