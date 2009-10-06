/**
 * @properties={typeid:24,uuid:"41cd6bdb-dc46-4868-b1cc-bc4294baa253"}
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
	
	globals.DialogCloseCancel('task');
}

/**
 * @properties={typeid:24,uuid:"f3a7558c-53ef-48a8-ac00-c0602a992948"}
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
		globals.NewRecordAction(1,'Updated task "' + task_name + '"', ixproject, ixtask, task_to_project.ixcompany);
	}
	else {
		globals.NewRecordAction(0,'Added task "' + task_name + '"', ixproject, ixtask, task_to_project.ixcompany);
	}
	
	globals.DialogCloseOk('task');
	//added refresh
	forms.lst_task.foundset.loadAllRecords()
	var sort = forms.lst_task.foundset.getCurrentSort();
	forms.lst_task.controller.sort(sort);
}

/**
 * @properties={typeid:24,uuid:"6cb115e4-3a9f-464f-8d40-34c498d7bbfa"}
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
