/**
 * @properties={typeid:24,uuid:"432942ef-5353-4dc4-93f0-514fdc592964"}
 */
function BtnDeleteVersion()
{
	/*
	PURPOSE: Create delete this version with err checking
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.currVersionID = ixversion
	
	//get number of files
	var numFiles = gcurrversion_to_task_resolvedin.getSize()
	var msg = i18n.getI18NMessage('msg.deleteRecord', new Array('version',gcurrversion_to_version.version_name))
	
	if(numFiles > 0)
	{
		msg = i18n.getI18NMessage('msg.deleteVersionRecord', new Array(gcurrversion_to_version.version_name, numFiles))
	}
	
	//confirm the delete of the task
	globals.core_showWcGenericDialog(i18n.getI18NMessage('lbl.deleteVersion'), msg, 'forms.frm_project_selproj_versions_versionList.DoDelete()', 'warning', i18n.getI18NMessage('lbl.ok'), i18n.getI18NMessage('lbl.cancel'), null, null);
}

/**
 * @properties={typeid:24,uuid:"7fe617e3-07bd-4358-90d8-de5364a05bb8"}
 */
function BtnShowVersion()
{
	/*
	PURPOSE: Need this for the web client to set the cur version id
	
	PARAMETERS: ixdocument int (optional - only web client)
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
//	if(application.getApplicationType() == 5) {  //web client
//		globals.currVersionID = arguments[0]
//	}
//	else
	{
		globals.currVersionID = ixversion
	}
	
	globals.ShowDialogVersion(null, globals.currVersionID, null);
}

/**
 * @properties={typeid:24,uuid:"22085649-25c4-466e-a657-75457774277f"}
 */
function DoDelete()
{
	/*
	PURPOSE: Deleting version
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.mod_dialog_buttonPressed == i18n.getI18NMessage('lbl.ok'))
	{
		var action = 'Deleted version "' + version_name +	'"'
		globals.NewRecordAction(2, action, globals.currProjectID, null, gcurrproject_to_project.ixcompany);
		
		//re-assign any "resolved in" values in related tasks
		var numFiles = gcurrversion_to_task_resolvedin.getSize()
		if(numFiles > 0) {
			//reassign any task resolved in
			var fsUpdater = databaseManager.getFoundSetUpdater(gcurrversion_to_task_resolvedin)
			fsUpdater.setColumn('resolved_in',0)
			fsUpdater.performUpdate()
		}
		
		//turn off autosave
		databaseManager.setAutoSave(true)
		controller.deleteRecord()
		databaseManager.saveData()
		databaseManager.setAutoSave(false)
		
		forms.frm_project_selproj_versions.OnShow();
		
//		application.closeFormDialog('version');
		application.getWindow('version').hide();
		
		//reset value list
		globals.SetUpDynamicValueLists();
	}
}

/**
 * @properties={typeid:24,uuid:"ef4b8b41-4c47-4ecc-aa1d-21a9598dd2fa"}
 */
function GoVersion()
{
	/*
	PURPOSE: Need this for the web client to set the cur version id
	
	PARAMETERS: ixversion int (optional - only web client)
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/

	globals.GoVersion(ixversion);
//	globals.currVersionID = ixversion
}
