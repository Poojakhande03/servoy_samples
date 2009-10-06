/**
 * @properties={typeid:24,uuid:"6bb00ece-6781-4b43-919a-21faae627a17"}
 */
function BtnEditFile()
{
	/*
	PURPOSE: Go to this file edit dialog
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	
	********************************************/
	BtnGoFile();
	globals.ShowDialogFile(null,ixfile); 
}

/**
 * @properties={typeid:24,uuid:"5aba4e07-c525-49a4-842b-363ebb155ac0"}
 */
function BtnGoFile(arg0)
{
	/*
	PURPOSE: Go to this file
	
	PARAMETERS: ixfile int (optional - web client)
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	
	********************************************/
//	if(! myFile) myFile = ixfile;

	var myFile = arg0;
	if((!myFile) || (typeof arguments[0] == 'object')) myFile = ixfile;
	
	globals.currFileID = myFile;
}

/**
 * @properties={typeid:24,uuid:"53d216c0-33f8-4919-8189-343ee03eab1c"}
 */
function BtnSort(arg0)
{
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	
	var isInitial = arg0;
	
	//load sort images for all columns
	var sortImages = new Array('status_asc:::status asc',
								'status_desc:::status desc',
								'file_name_asc:::file_name asc',
								'file_name_desc:::file_name desc');
	
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
		globals.SortColumns(sortImages, formName, 3);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
