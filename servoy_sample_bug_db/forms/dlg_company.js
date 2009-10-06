/**
 * @properties={typeid:24,uuid:"8d25864e-f553-4bd7-9245-21eb62543510"}
 */
function BtnCancel()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.DialogCloseCancel('company');
}

/**
 * @properties={typeid:24,uuid:"c7ca5670-63e0-412d-880f-9b14db841efb"}
 */
function BtnOk()
{
	/*
	PURPOSE: This method runs when the OK button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
	globals.DialogCloseOk('company')
	
	if(globals.flagIsNew == 0) {
		globals.NewRecordAction(1,'Updated company "' + company_name + '"', null, null, ixcompany);
	}
	else {
		globals.NewRecordAction(0,'Added company "' + company_name + '"', null, null, ixcompany);
	}
	
	globals.tempChooseInt = ixcompany
	globals.tempTextDisplay = i18n.getI18NMessage('msg.chooseCompanyN', new Array(company_name))
	forms.dlg_chooseCompany_list.controller.sort('company_name')
	
	databaseManager.saveData();
	forms.lst_company.foundset.loadAllRecords();
	forms.lst_company.controller.loadAllRecords();
	var sort = forms.lst_company.foundset.getCurrentSort();
	forms.lst_company.controller.sort(sort);
}
