/**
 * @properties={typeid:24,uuid:"37678323-e206-448a-b54f-91f7636beeb1"}
 */
function BtnChoosePerson()
{
	/*
	PURPOSE: Choose or create a new person
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	 
	globals.tempChooseInt = ixpeople
	globals.tempInt = 0
	globals.tempTextDisplay = i18n.getI18NMessage('msg.choosePersonN', new Array(name_full))
}

/**
 * @properties={typeid:24,uuid:"e481b777-1210-4ff5-8273-04ec8c8d96fe"}
 */
function SortPerson()
{
	var csort = foundset.getCurrentSort();
	if (csort == 'name_full asc')
		controller.sort('name_full desc');
	else if (csort == 'name_full desc')
		controller.sort('name_full asc');
	else controller.sort('name_full asc');
}

/**
 * @properties={typeid:24,uuid:"f666438f-b564-42f7-8ac5-d043cba53e41"}
 */
function SortPhone()
{
	var csort = foundset.getCurrentSort();
	if (csort == 'ph_office asc')
		controller.sort('ph_office desc');
	else if (csort == 'ph_office desc')
		controller.sort('ph_office asc');
	else controller.sort('ph_office asc');
}
