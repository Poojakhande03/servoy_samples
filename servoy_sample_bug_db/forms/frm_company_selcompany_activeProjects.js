/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"07A20FC9-FC30-40E7-8AB8-6BD26D1C7282",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"1bf16db6-306d-4bda-a997-8f31316d7e57"}
 */
function BtnGoProject()
{
	/*
	PURPOSE: Go to this project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.GoProject(ixproject);
}

/**
 * @properties={typeid:24,uuid:"2490ab9f-1410-4c0b-8eab-d87c61986e70"}
 */
function FilterProjects()
{
	/*
	PURPOSE: This method runs when the active projects form is shown
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	//perform a find for open projects that user is a member of
	
	var query = 'select a.ixproject from tbl_project a ' +
				'where a.ixcompany = ? and a.status < 7'
	
	//Get a dataset based on query
	var maxReturnedRows = 1000;//useful to limit number of rows
	var args = new Array();
	args[0] = globals.currCompanyID;
	var ds = controller.getDataSource().split('/');
	var dataset = databaseManager.getDataSetByQuery(ds[1], query, args, maxReturnedRows);
	
	controller.loadRecords(dataset)
	
	//active projects
	elements.project_name_asc.visible = false
	BtnSort(null, 'initial');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"483C26AB-872C-46EC-A9FB-7A5BA0F2F0A1"}
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
	var sortImages = new Array('status_asc:::staus asc',
								'status_desc:::status desc',
								'project_name_asc:::proj_name asc',
								'project_name_desc:::proj_name desc');
	
	//form name                            
	var formName = controller.getName();
	
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
