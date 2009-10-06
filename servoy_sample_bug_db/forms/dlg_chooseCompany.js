/**
 * @properties={typeid:24,uuid:"b95aedba-a791-4df4-95a5-5885ef748124"}
 */
function BtnCancel()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.DialogCloseCancel('companyChooser');
}

/**
 * @properties={typeid:24,uuid:"93b48f33-64c9-4167-85a2-b86a30128208"}
 */
function BtnNewCompany()
{
	/*
	PURPOSE: This method runs when the New... button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.ShowDialogCompany(i18n.getI18NMessage('lbl.newCompany'));
}

/**
 * @properties={typeid:24,uuid:"21b73c15-cafa-46cd-8c02-ba0eeaa670ae"}
 */
function BtnOk()
{
	/*
	PURPOSE: This method runs when the OK button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	//turn off autosave
	databaseManager.setAutoSave(false)
	
	//make the related row
	forms.z_tbl_peopleCompany.controller.newRecord(true)
	forms.z_tbl_peopleCompany.ixcompany = globals.tempChooseInt
	forms.z_tbl_peopleCompany.ixpeople = globals.currPersonID
	forms.z_tbl_peopleCompany.ixtenant = globals.currTenantID
	
	globals.NewRecordAction(1,'Added ' + forms.z_tbl_peopleCompany.people_company_to_people.name_full + ' to company ' +
						 forms.z_tbl_peopleCompany.people_company_to_company.company_name, null, null, globals.tempChooseInt);
	
	//update the modified of the task
	gcurrtask_to_task.dt_modified = new Date()
	gcurrtask_to_task.ixmodifiedperson = globals.currUserID
	
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
	application.closeFormDialog('companyChooser')
}
