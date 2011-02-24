/**
 * @properties={typeid:24,uuid:"4855f8e9-fe18-49b3-800b-12dfee8a98a9"}
 */
function BtnCancel()
{
/*
PURPOSE: This method runs cancel button is clicked

PARAMETERS: NONE
OUTPUTS: NONE

CREATED: 04/19/08 BC
MODIFIED: NONE
********************************************/

	globals.tempInt2 = null
	globals.DialogCloseCancel('personChooser');
}

/**
 * @properties={typeid:24,uuid:"d8fe25d3-d224-49f7-8d37-648ba33d55e4"}
 */
function BtnNewPerson()
{
/*
PURPOSE: This method runs when the New... button is clicked

PARAMETERS: NONE
OUTPUTS: NONE

CREATED: 04/19/08 BC
MODIFIED: NONE
********************************************/

	globals.NewRecordPerson(1);
}

/**
 * @properties={typeid:24,uuid:"c684b5f0-27e5-482d-8d54-2368a99d091a"}
 */
function BtnOk()
{
/*
PURPOSE: This method runs when the OK button is clicked

PARAMETERS: NONE
OUTPUTS: NONE

CREATED: 04/19/08 BC
MODIFIED: NONE
********************************************/

	//turn off autosave
	databaseManager.setAutoSave(true)
	
	//reset the dynamic "assigned to" valuelists
	globals.SetUpDynamicValueLists();
	
	// this is for a project person
	if(globals.tempInt2 == 1){
	
		//	iterate by selected people
		for(i in globals.SelectMutiplePeopleArray){
			var id = i.substring(1);
			//	make the related row - for a project
			forms.z_tbl_projectPeople.controller.newRecord(true)
			forms.z_tbl_projectPeople.ixproject = globals.currProjectID
			forms.z_tbl_projectPeople.ixpeople = id;
			forms.z_tbl_projectPeople.ixtenant = globals.currTenantID
			
			//	log change
			forms.dlg_choosePerson_list.foundset.selectRecord(id);
			globals.NewRecordAction(1,'Added "' + forms.dlg_choosePerson_list.name_full +
			 '" to project "' + gcurrproject_to_project.proj_name + '"', globals.currProjectID, null, gcurrproject_to_project.ixcompany);
		}	
		globals.tempInt2 = null
		
	} else {
	
		//	iterate by selected people
		for(i in globals.SelectMutiplePeopleArray){
			var id = i.substring(1);
	
			//	make the related row - for a company
			forms.z_tbl_peopleCompany.controller.newRecord(true)
			forms.z_tbl_peopleCompany.ixcompany = globals.currCompanyID
			forms.z_tbl_peopleCompany.ixpeople = id;
			forms.z_tbl_peopleCompany.ixtenant = globals.currTenantID
			
			//	log change
			forms.dlg_choosePerson_list.foundset.selectRecord(id);
			globals.NewRecordAction(1,'Added "' + forms.dlg_choosePerson_list.name_full + '" to company "' +
			 gcurrcompany_to_company.company_name + '"', null, null, globals.currCompanyID);
		}
	}
	
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
//	application.closeFormDialog('personChooser')
	application.getWindow('personChooser').close();
}
