/**
 * @properties={typeid:24,uuid:"5868696e-88ef-4006-8ed4-fdaf2f9c191e"}
 */
function BtnDeleteCompany()
{
	/*
	PURPOSE: Create delete this company with err checking
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		controller.deleteRecord();
		forms.lst_company.BtnGoCompany();
	}
	else
	{
		globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noDeleteAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'), null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"bff52404-31cd-4c53-938a-d33e2e2e0601"}
 */
function BtnEditCompany()
{
	/*
	PURPOSE: Edit profile of specific company
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.ShowDialogCompany(null, globals.currCompanyID, null);
}

/**
 * @properties={typeid:24,uuid:"bc5a84de-d7d2-433f-84d3-bfaeddf4df47"}
 */
function BtnNewCompany()
{
	/*
	PURPOSE: Create new company
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.NewRecordCompany(null);
}
