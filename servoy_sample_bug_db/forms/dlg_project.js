/**
 * @properties={typeid:24,uuid:"565b85a9-7f63-4ef9-b935-952ce7c5b0c4"}
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
	
	//reset flag
	globals.tempInt = 0
	globals.DialogCloseCancel('project');
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
}

/**
 * @properties={typeid:24,uuid:"53863e15-06dd-4470-819b-7ba052ed9a4d"}
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
	
	//turn off autosave
	databaseManager.setAutoSave(true)
	
	if(globals.tempInt != 0) //we're looking at a person
	{
		//make the related row
		forms.z_tbl_projectPeople.controller.newRecord(true)
		forms.z_tbl_projectPeople.ixpeople = globals.currPersonID
		forms.z_tbl_projectPeople.ixproject = ixproject
		//forms.z_tbl_projectPeople.ixtenant = globals.currTenantID
		globals.tempInt = 0
		
		globals.NewRecordAction(0,'Added person ' + gcurrperson_to_people.name_full + ' to project "' +
				proj_name + '"', ixproject, null, ixcompany);
	}
	
	if(globals.flagIsNew == 0) {
		globals.NewRecordAction(1,'Updated project "' + proj_name + '"', ixproject, null, ixcompany);
	}
	else {
		globals.NewRecordAction(0,'Added project "' + proj_name + '"', ixproject, null, ixcompany);
	}
	
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
//	application.closeFormDialog('project')
	application.getWindow('project').hide();
	
	if(globals.flagIsNew == 1) { //show the add people dialog
		globals.currProjectID = ixproject
		
		globals.ShowDialogPersonChooser(null,1);
	}
	//load records
	forms.lst_project.foundset.loadAllRecords();
	var sort = forms.lst_project.foundset.getCurrentSort();
	forms.lst_project.controller.sort(sort);
}

/**
 * @properties={typeid:24,uuid:"fdafc805-b083-450a-9b87-00a2d6af9401"}
 */
function OnShow()
{
	/*
	PURPOSE: This method runs when the dialog is shown
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	controller.focusFirstField();
}
