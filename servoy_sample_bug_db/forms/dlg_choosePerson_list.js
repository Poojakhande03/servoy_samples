/**
 * @type Boolean
 *
 * @properties={typeid:35,uuid:"F2155385-AE24-4B2A-8C90-6B73CE785311",variableType:-4}
 */
var ftsort = true;

/**
 * @properties={typeid:24,uuid:"56f183ba-63e3-4a91-828f-12dd89556928"}
 */
function onLoad()
{
	//	create the selection array
	globals.SelectMutiplePeopleArray = new Object();
}

/**
 * @properties={typeid:24,uuid:"e39501be-c04d-45f4-8d7d-d6cbc46e882e"}
 */
function onShow()
{
//	controller.sort('name_full asc');
	elements.phone_asc.visible = false;
	elements.phone_desc.visible = false;
	elements.person_asc.visible = false;
	elements.person_desc.visible = false;
	globals.SelectMutiplePeopleArray = new Object();

	//	filter by people NOT already in project
	if(globals.tempInt2 == 1){
		var filter = gcurrproject_to_project_people;

		//	filter by people NOT already in company
	} else {
		var filter = gcurrcompany_to_people_company;
	}

	//	filter
	var ids = databaseManager.getFoundSetDataProviderAsArray(filter, 'ixpeople');
	controller.loadRecords(databaseManager.convertToDataSet(ids));
	controller.invertRecords();
	databaseManager.recalculate(foundset);
}

/**
 * @properties={typeid:24,uuid:"8c28c386-4528-4b03-abb9-051e3e552534"}
 */
function toggleSelection(arg0, arg1)
{
		/*
	PURPOSE: This method handles the datachange event
			 It toggles the selected state of the row
	
	PARAMETERS:
		[0] - Object - old value
		[1] - Object new value
	OUTPUTS: NONE
	
	CREATED: 04/08/08 BC
	MODIFIED: NONE
		 ********************************************/
	if(arg1)
		globals.SelectMutiplePeopleArray['_'+ixpeople] = true;
	else
	globals.SelectMutiplePeopleArray['_'+ixpeople] = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7095D80-46F2-4EEE-BF23-87E3A33EB701"}
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
	var isInitial;
	if (arg1 != null) {
		isInitial = arg1;
		ftsort = false;
		event = 'person_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('person_asc:::name_full asc',
								'person_desc:::name_full desc',
								'phone_asc:::ph_office asc',
								'phone_desc:::ph_office desc');
	
	//form name                            
	var formName = controller.getName()
	
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
		globals.SortColumns(sortImages, formName, 1);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
