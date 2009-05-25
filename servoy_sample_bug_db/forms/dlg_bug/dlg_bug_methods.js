/**
 * @properties={typeid:24,uuid:"bcdaf3e7-220a-4a1e-95a1-a3bd6dbd49da"}
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
	
	globals.DialogCloseCancel('bug');
}

/**
 * @properties={typeid:24,uuid:"d07c9308-3de0-4952-9efd-1e7fcf583842"}
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
	
	globals.currTaskID = ixtask
	if(globals.flagIsNew == 0) {
		globals.NewRecordAction(1,'Updated bug "' + task_name + '"', ixproject, ixtask, task_to_project.ixcompany);
	}
	else {
		globals.NewRecordAction(0,'Added bug "' + task_name + '"', ixproject, ixtask, task_to_project.ixcompany);
	}
	globals.DialogCloseOk('bug');
}

/**
 * @properties={typeid:24,uuid:"65d16705-c066-4e8c-862d-f574af0297b5"}
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
	
	controller.focusFirstField()
}
