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
 * @properties={typeid:24,uuid:"e91aec7e-d486-46e1-97c6-01c56fa37c72"}
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
	var sortImages = new Array('short_name_asc:::company_name_short asc',
								'short_name_desc:::company_name_short desc',
								'company_name_asc:::company_name asc',
								'company_name_desc:::company_name desc');
	
	//form name                            
	var formName = controller.getName();

	//column number
	var btnName = application.getMethodTriggerElementName();
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
