/**
 * @properties={typeid:24,uuid:"c9a406d9-af84-4b27-b5a6-fc661a8898b9"}
 */
function BtnAttachFile()
{
/*
PURPOSE: This method adds a comment to the task

PARAMETERS: NONE
OUTPUTS: NONE

CREATED: 04/14/08 BC
MODIFIED: NONE
********************************************/

if(application.getApplicationType() == 5) //web client
{
	forms.dlg_file.controller.newRecord(true)
	forms.dlg_file.dt_created = new Date()
	forms.dlg_file.ixpersoncreated = globals.currUserID
	//forms.dlg_file.ixtenant = globals.currTenantID
	forms.dlg_file.ixproject = globals.currProjectID
	forms.dlg_file.status = 0
	
	//see what tabindex is showing and set appropriate keys //1=task, 2=document
	if(elements.tabs_files.tabIndex == 1) {
		forms.dlg_file.ixtask = globals.currTaskID
	}
	else if(elements.tabs_files.tabIndex == 2) {
		forms.dlg_file.ixdocument = globals.currDocumentID
	}
	
	globals.ShowDialogFile(i18n.getI18NMessage('lbl.addFile'), null, 1);
}
else
{
	//smart client
	//show choose file dialog

	var file = plugins.file.showFileOpenDialog(1,null,false);
	
	if(file) //they didn't click "cancel"
	{
		forms.dlg_file.controller.newRecord(true)
		forms.dlg_file.dt_created = new Date()
		forms.dlg_file.ixpersoncreated = globals.currUserID
		//forms.dlg_file.ixtenant = globals.currTenantID
		forms.dlg_file.file_data = plugins.file.readFile(file)
		forms.dlg_file.file_name = file.getName()
		forms.dlg_file.file_size = file.size()
		forms.dlg_file.ixproject = globals.currProjectID
		forms.dlg_file.status = 0
		
		//update the modified of the task
		gcurrtask_to_task.dt_modified = new Date()
		gcurrtask_to_task.ixmodifiedperson = globals.currUserID
		
		//see what tabindex is showing and set appropriate keys //1=task, 2=document
		if(elements.tabs_files.tabIndex == 1) {
			forms.dlg_file.ixtask = globals.currTaskID
			var taskID = globals.currTaskID
		}
		else if(elements.tabs_files.tabIndex == 2) {
			forms.dlg_file.ixdocument = globals.currDocumentID
			var taskID = null
		}
		
		//show the dialog for the description
		var desc = plugins.dialogs.showInputDialog( 'i18n:lbl.fileDescription',  'i18n:msg.enterFileDescription', null)
		
		if(desc)
		{
			forms.dlg_file.description = desc
		}
		
		globals.NewRecordAction(0,'Added file "' + file.getName() + '"', globals.currProjectID, taskID, gcurrproject_to_project.ixcompany);
		
		//turn on the auto save, save, then turn off again
		databaseManager.setAutoSave(true)
		databaseManager.saveData()
		databaseManager.setAutoSave(false)
	}

}
}
