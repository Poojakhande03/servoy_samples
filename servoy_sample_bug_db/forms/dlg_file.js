/**
 * @properties={typeid:24,uuid:"f7649d12-92d2-4562-9132-decc909f96f9"}
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
	
	globals.DialogCloseCancel('file');
}

/**
 * @properties={typeid:24,uuid:"b85a69c3-eb8a-47f8-a58c-af6ccc456061"}
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
	
	if(file_type)
	{
		var image = plugins.images.getImage(file_data)
		var bytes = image.getData() 
		file_size = bytes.length;
		
		if(globals.flagIsNew == 0) {
			globals.NewRecordAction(1,'Updated file "' + file_name + '"', ixproject, ixtask, null);
		}
		else {
			globals.NewRecordAction(0,'Added file "' + file_name + '"', ixproject, ixtask, null);
		}
		
		//update the modified of the task
		gcurrtask_to_task.dt_modified = new Date()
		gcurrtask_to_task.ixmodifiedperson = globals.currUserID
		
		//set the global so that if they click the "X" close it won't close
		globals.isDialogOpen = 0
	
		globals.DialogCloseOk('file');
	}
	else {
		//no file type - show error
		globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('msg.missingFileType'), null, 'error', i18n.getI18NMessage('lbl.ok'), null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"62bbe89b-368a-4e7f-b4c4-f5d3e091aece"}
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
	
	if(application.getApplicationType() == 5) { //web client
		elements.lbl_smartclient.visible = false
		elements.lbl_upload.visible = true
		elements.fld_upload.visible = true
	}
	else {
		elements.lbl_smartclient.visible = true
		elements.lbl_upload.visible = false
		elements.fld_upload.visible = false
	}
	
	controller.focusFirstField()
}
