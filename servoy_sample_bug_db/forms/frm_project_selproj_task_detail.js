/**
 * @properties={typeid:24,uuid:"e641e81b-73c5-45ed-a2dc-f3b03331f029"}
 */
function BtnAddComment()
{
	/*
	PURPOSE: This method adds a comment to the task
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	forms.dlg_comment.controller.newRecord(true)
	forms.dlg_comment.ixtask = globals.currTaskID
	forms.dlg_comment.ixtenant = globals.currTenantID
	forms.dlg_comment.ixproject = globals.currProjectID
	forms.dlg_comment.ixreplytocomment = 0
	forms.dlg_comment.ixmastercomment = 0
	forms.dlg_comment.dt_created = new Date()
	forms.dlg_comment.ixpersoncreated = globals.currUserID
	
	globals.ShowDialogComment(i18n.getI18NMessage('lbl.addComment'), null, null, 1);
}

/**
 * @properties={typeid:24,uuid:"9860aac6-13d2-4151-8b4f-d2db46dc4b82"}
 */
function OnHide()
{
	/*
	PURPOSE: Run when hiding the task detail
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	//hide edit task button
	
	forms.frm_project_selproj.elements.btn_editTask.visible = false
	forms.frm_project_selproj.elements.grc_editTask.visible = false
	forms.frm_project_selproj.elements.lbl_editTask.visible = false
	
	//hide delete task button
	forms.frm_project_selproj.elements.btn_deleteTask.visible = false
	forms.frm_project_selproj.elements.grc_deleteTask.visible = false
	forms.frm_project_selproj.elements.lbl_deleteTask.visible = false
	
	//show delete project button
	forms.frm_project_selproj.elements.btn_deleteProject.visible = true
	forms.frm_project_selproj.elements.grc_deleteProject.visible = true
	forms.frm_project_selproj.elements.lbl_deleteProject.visible = true
}

/**
 * @properties={typeid:24,uuid:"e316e00f-4f59-4318-b875-84a7cd82bf25"}
 */
function OnShow()
{
	/*
	PURPOSE: Run when showing the task detail
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	//set up dynamic value lists
	globals.SetUpDynamicValueLists();
	
	//hide delete project button
	forms.frm_project_selproj.elements.btn_deleteProject.visible = false
	forms.frm_project_selproj.elements.grc_deleteProject.visible = false
	forms.frm_project_selproj.elements.lbl_deleteProject.visible = false
	
	//show edit task button
	forms.frm_project_selproj.elements.btn_editTask.visible = true
	forms.frm_project_selproj.elements.grc_editTask.visible = true
	forms.frm_project_selproj.elements.lbl_editTask.visible = true
	
	//show delete task button
	forms.frm_project_selproj.elements.btn_deleteTask.visible = true
	forms.frm_project_selproj.elements.grc_deleteTask.visible = true
	forms.frm_project_selproj.elements.lbl_deleteTask.visible = true
	
	//switch the tabpanel in attached files to the first one
	forms.frm_attached_files.elements.tabs_files.tabIndex = 1
}
