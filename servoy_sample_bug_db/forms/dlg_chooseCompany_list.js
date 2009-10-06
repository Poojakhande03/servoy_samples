/**
 * @properties={typeid:24,uuid:"2c2a6530-2643-4c16-ab24-f8ef371d709e"}
 */
function BtnChooseCompany()
{
	/*
	PURPOSE: Choose or create a new company
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.tempChooseInt = ixcompany
	globals.tempInt = 0
	globals.tempTextDisplay = i18n.getI18NMessage('msg.chooseCompanyN', new Array(company_name))
}

/**
 * @properties={typeid:24,uuid:"02458624-3ed8-4cc8-8302-475e908c8665"}
 */
function OnShow()
{
	elements.company_asc.visible = false;
	elements.company_desc.visible = false;
	elements.phone_asc.visible = false;
	elements.phone_desc.visible = false;
	controller.sort('company_name');
}

/**
 * @properties={typeid:24,uuid:"ce9ea843-29e7-417d-b586-d989b4cf16b0"}
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
	var sortImages = new Array('company_asc:::company_name asc',
								'company_desc:::company_name desc',
								'phone_asc:::phone asc',
								'phone_desc:::phone desc');
	
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
