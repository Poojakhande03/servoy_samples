/**
 * @properties={typeid:35,uuid:"C721BCD4-30CD-4F77-88E5-AC2803591DC3",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"8620c6a8-3018-459c-beea-2efad04861d7"}
 */
function BtnGoCompany()
{
	/*
	PURPOSE: Go to this company
	
	PARAMETERS: ixcompany int (required)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	GoCompany(ixcompany);
}

/**
 * @properties={typeid:24,uuid:"1843244b-2030-4855-8584-2612c4e76c77"}
 */
function GoCompany(arg0)
{
	/**
	if (application.getApplicationType() == 5) 
		{
			globals.GoCompany(arg0);
		}
	else 
		{
		*/
	globals.GoCompany(ixcompany);
//		}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBF8A0B8-C448-4E28-A2E7-D93843706BA4"}
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
	
	if (arg1 != null) {
		var isInitial = arg1;
		ftsort = false;
		event = 'short_name_asc';
	}
	if (ftsort == true) {
		var isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('short_name_asc:::company_name_short asc',
								'short_name_desc:::company_name_short desc',
								'company_name_asc:::company_name asc',
								'company_name_desc:::company_name desc');
	
	//form name                            
	var formName = controller.getName();

	//column number
	if (arg1 != null)
		var btnName = event;
	else
		var btnName = event.getElementName();
	var columnNum = utils.stringRight(btnName, 1);
	
	if (columnNum.charAt(0) == '_')
	{
	    columnNum = columnNum.substr(1,2);
	}
	
	if((isInitial) && (typeof isInitial != 'object'))
	{
		//initial sort - use the 2rd option
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, 3);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
