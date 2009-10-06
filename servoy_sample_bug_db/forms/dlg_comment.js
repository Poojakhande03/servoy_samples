/**
 * @properties={typeid:24,uuid:"1971c3de-c05a-4be2-af41-d070301180d3"}
 */
function BtnCancel()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.DialogCloseCancel('comment');
}

/**
 * @properties={typeid:24,uuid:"7bf93775-9390-4cbe-afab-783903d911b9"}
 */
function BtnOk()
{
	/*
	PURPOSE: This method runs when the OK button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.flagIsNew == 0) {
		globals.NewRecordAction(1,'Updated comment "' + comment_text +
			 '"', comment_to_task.ixproject, ixtask, comment_to_task.task_to_project.ixcompany);
	}
	else {
		globals.NewRecordAction(0,'Added comment "' + comment_text +
			 '"', comment_to_task.ixproject, ixtask, comment_to_task.task_to_project.ixcompany);
	}
	
	//update the modified of the task
	gcurrtask_to_task.dt_modified = new Date()
	gcurrtask_to_task.ixmodifiedperson = globals.currUserID
	
	globals.DialogCloseOk('comment');
	
	//update the comment list
	forms.frm_project_selproj_task_detail_comments.OnShow();
}

/**
 * @properties={typeid:24,uuid:"7b2aa0e0-4416-4d3e-a1b9-24c4d0b9503d"}
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
