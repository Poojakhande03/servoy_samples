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
function toggleSelection()
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
	if(arguments[1])
		globals.SelectMutiplePeopleArray['_'+ixpeople] = true;
	else
	globals.SelectMutiplePeopleArray['_'+ixpeople] = null;
}

/**
 * @properties={typeid:24,uuid:"22bfec2b-7f4a-492e-a0d0-1eeb4043672c"}
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
	var sortImages = new Array('person_asc:::name_full asc',
								'person_desc:::name_full desc',
								'phone_asc:::ph_office asc',
								'phone_desc:::ph_office desc');
	
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
