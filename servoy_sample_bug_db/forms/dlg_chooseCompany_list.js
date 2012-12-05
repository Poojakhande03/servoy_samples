/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"9DD18759-7578-4E9A-9118-268C0B1DF262",variableType:-4}
 */
var ftsort = true;

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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 * 
 * @properties={typeid:24,uuid:"FC18738A-1064-4BF7-963F-14DB206138E8"}
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
	var isInitial, btnName;
	
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'company_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('company_asc:::company_name asc',
								'company_desc:::company_name desc',
								'phone_asc:::phone asc',
								'phone_desc:::phone desc');
	
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
		globals.SortColumns(sortImages, formName, 1);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6AFC766-7DE6-4CB5-8F8F-4B120408674E"}
 */
function onShow(firstShow, event) {
	elements.company_asc.visible = false;
	elements.company_desc.visible = false;
	elements.phone_asc.visible = false;
	elements.phone_desc.visible = false;
	controller.sort('company_name');
}
