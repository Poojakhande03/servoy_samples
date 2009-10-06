/**
 * @properties={typeid:24,uuid:"5652ba62-4923-4917-ba54-8016fd40c2f9"}
 */
function BtnEditComment()
{
	/*
	PURPOSE: Close comment read dialog
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.ShowDialogComment(null, ixcomment);
}

/**
 * @properties={typeid:24,uuid:"6d680461-44f0-49f2-b58f-9b758f1869fa"}
 */
function BtnOk()
{
	/*
	PURPOSE: Close comment read dialog
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	//update replies
	if(forms.frm_project_selproj_task_detail.elements.tabs_comments.tabIndex == 1) { //showing master comments
		forms.frm_project_selproj_task_detail_comments.OnShow();
	}
	else {
		forms.frm_project_selproj_task_detail_commentsReplies.OnShow();
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
	globals.DialogCloseOk('comment_read');
}

/**
 * @properties={typeid:24,uuid:"63c36dba-b2c7-4f8c-bb63-2182e5937d49"}
 */
function BtnReply()
{
	/*
	PURPOSE: Button to reply to a comment
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	//the person has a reply to a comment
	
	//add comment record and fill it out
	var mstrid = ixmastercomment
	controller.newRecord(true)
	var replyid = ixcomment
	comment_text = globals.tempTextDisplay2
	comment_desc = globals.tempTextDisplay
	ixpersoncreated = globals.currUserID
	dt_created = new Date()
	ixreplytocomment = globals.currCommentID
	ixtask = globals.currTaskID
	ixproject = globals.currProjectID
	//ixmastercomment = gcurrcommentreply_to_comment.ixcomment
	if (mstrid == 0)
		ixmastercomment = globals.currCommentID;
	else
		ixmastercomment = mstrid;	
	
	globals.NewRecordAction(0,'Added reply to comment "' + gcurrcomment_to_comment.comment_text +
	 '"', comment_to_task.task_to_project.ixproject, ixtask, comment_to_task.task_to_project.ixcompany);
	
	//close and save
	BtnOk();
}

/**
 * @properties={typeid:24,uuid:"163fac1e-06f8-425d-99e0-a47f79af61b6"}
 */
function OnShow()
{
	/*
	PURPOSE: On show the read dialog
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.tempTextDisplay = null //reply text
	
	//get the current title of the current comment
	var title = gcurrcomment_to_comment.comment_text
	title = utils.stringReplace(title, 'RE: ', '')
	var dashes = utils.stringPatternCount(title, '-') + 1
	title = utils.stringReplace(title, '-', '')
	var dashList = '---------------------------'
	
	globals.tempTextDisplay2 = utils.stringLeft(dashList, dashes) + 'RE: ' + title //reply text title
	controller.focusFirstField();
}
