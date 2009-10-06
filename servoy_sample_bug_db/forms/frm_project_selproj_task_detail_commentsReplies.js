/**
 * @properties={typeid:24,uuid:"dc480ede-1234-4a4f-ad09-69726da53f29"}
 */
function BtnDeleteComment()
{
	/*
	PURPOSE: Deleting comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	var action = 'Deleted reply "' + comment_text +	'" from comment "' + gcurrcomment_to_comment.comment_text + '"'
	globals.NewRecordAction(2, action, comment_to_task.ixproject, ixtask, null);
	
	//turn off autosave
	databaseManager.setAutoSave(true)
	controller.deleteRecord()
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
}

/**
 * @properties={typeid:24,uuid:"25de0c4e-bc69-40cc-b6a6-8c05d5534060"}
 */
function BtnEditComment()
{
	/*
	PURPOSE: Shows the dialog for editing comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.currCommentID = ixcomment
	globals.ShowDialogComment(null, globals.currCommentID);
}

/**
 * @properties={typeid:24,uuid:"846a8123-d3f0-44a5-8044-f0ff352a4b2b"}
 */
function BtnGoBack()
{
	/*
	PURPOSE: Shows comments
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	forms.frm_project_selproj_task_detail.elements.tabs_comments.tabIndex = 1
}

/**
 * @properties={typeid:24,uuid:"ae2fe0ce-9413-4b73-be72-eb1634583e64"}
 */
function BtnShowComment(arg0, arg1)
{
	/*
	PURPOSE: Showing comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
/**
	if (application.getApplicationType() == 5)
	{
		if (typeof arg1 == 'number')
			globals.currCommentID = arg1;
	}
	else
	{
	*/
		globals.currCommentID = ixcomment;
//	}
//	globals.ShowDialogCommentRead(null, ixcomment);
	globals.ShowDialogCommentRead(null, globals.currCommentID);
}

/**
 * @properties={typeid:24,uuid:"13440d55-1919-4ec1-831f-01b51e225db4"}
 */
function OnShow()
{
	controller.find()
	ixmastercomment = globals.currCommentReplyID
	controller.search()
	
	controller.sort ('ixreplytocomment')
}

/**
 * @properties={typeid:24,uuid:"3ade2467-8081-42f7-bbe4-d278bfaf2e29"}
 */
function BtnNewComment()
{
	forms.frm_project_selproj_task_detail_comments.BtnShowComment();
	OnShow();
}
