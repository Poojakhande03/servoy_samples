/**
 * @properties={typeid:24,uuid:"ce38ea32-4490-4177-8973-d437682bca14"}
 */
function BtnDeleteComment()
{
	/*
	PURPOSE: Deleting comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	var action = 'Deleted comment "' + comment_text +	'"'
	globals.NewRecordAction(2, action, comment_to_task.ixproject, ixtask, null);
	
	//turn off autosave
	databaseManager.setAutoSave(true)
	controller.deleteRecord()
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
}

/**
 * @properties={typeid:24,uuid:"37b7064f-336c-4afb-91ef-92d6d6efd8d4"}
 */
function BtnEditComment()
{
	/*
	PURPOSE: Shows the dialog for editing comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.currCommentID = ixcomment
	globals.ShowDialogComment(null, globals.currCommentID, null, null);
}

/**
 * @properties={typeid:24,uuid:"ae3a49eb-4d4b-440b-ac2e-9e7bc2ae8cc1"}
 */
function BtnShowComment(arg0, arg1)
{
	/*
	PURPOSE: Showing comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	if (application.getApplicationType() == 5){
		if (typeof arg1 == 'number')
			globals.currCommentID = arg1;
	}
	else
	{
		application.output(ixcomment);
		globals.currCommentID = ixcomment;
	}
	
	globals.ShowDialogCommentRead(null, globals.currCommentID);
}

/**
 * @properties={typeid:24,uuid:"abc3e879-25c1-4bd4-b631-2022f47a5025"}
 * @AllowToRunInFind
 */
function OnShow()
{
	/*
	PURPOSE: Show only "master" comments
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
		
	//find only the "master" comments - not the replies
	controller.find()
	ixtask = globals.currTaskID
	ixreplytocomment = 0
	controller.search()
}

/**
 * @properties={typeid:24,uuid:"e46a8a32-d0e1-4b2b-9ddd-9d228d21883a"}
 */
function ShowReplies()
{
	/*
	PURPOSE: Shows the replies to a commment
	
	PARAMETERS: ixcomment int (optional - web client only)
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(application.getApplicationType() == 5) { // web client
		globals.currCommentID = arguments[0]
		application.output(arguments[0]);
	}
	else {
		globals.currCommentID = ixcomment
	}
	
	globals.currCommentReplyID = globals.currCommentID
	
	forms.frm_project_selproj_task_detail_commentsReplies.controller.sort('ixreplytocomment, dt_created')
	
	forms.frm_project_selproj_task_detail.elements.tabs_comments.tabIndex = 2
}

/**
 * @properties={typeid:24,uuid:"8ef3fde2-3e52-42ac-b1b5-4e26a835516f"}
 */
function sort()
{
	controller.sort('ixreplytocomment asc, dt_created asc');
}
