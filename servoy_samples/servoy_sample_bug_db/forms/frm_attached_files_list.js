/**
 * @properties={typeid:24,uuid:"246092c7-0f3e-4abf-b667-89bc42ed39fd"}
 */
function BtnDelete()
{
	/*
	PURPOSE: Delete the file record
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	var action;
	//see what tabindex is showing and set appropriate keys //1=task, 2=document
	if(forms.frm_attached_files.elements.tabs_files.tabIndex == 1) {
		action = 'Deleted file "' + file_name +	'" from task "' + file_to_task.task_name + '"'
		
		//update the modified of the task
		gcurrtask_to_task.dt_modified = new Date()
		gcurrtask_to_task.ixmodifiedperson = globals.currUserID
	}
	else if(forms.frm_attached_files.elements.tabs_files.tabIndex == 2) {
		action = 'Deleted file "' + file_name +	'" from document "' + file_to_document.doc_name + '"'
		
		//update the modified of the document
		gcurrdocument_to_document.dt_modified = new Date()
		gcurrdocument_to_document.ixmodifiedperson = globals.currUserID
	}
		
	
	globals.NewRecordAction(2, action, ixproject, ixtask, null);
	
	
	//turn off autosave
	databaseManager.setAutoSave(true)
	controller.deleteRecord()
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
}

/**
 * @properties={typeid:24,uuid:"a2893530-7248-42f0-8d07-645d0eb4dbee"}
 */
function BtnViewFile()
{
	/*
	PURPOSE: View the file record
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.currFileID = ixfile
	var ext = ''
	
	if(application.getApplicationType() == 5) //web client
	{
		globals.ShowDialogFile(null, ixfile, null);
	}
	else if(application.getApplicationType() == 2 || application.getApplicationType() == 3) //client or developer
	{
		//smart client
		var filename = gcurrfileid_to_file.file_name
		
		if(file_type)
		{
			ext = file_type
			if(utils.stringPatternCount(filename, '.') == 0)
			{
				ext = "." + ext
			}
		}
		else if(utils.stringPatternCount(filename, '.') > 0)
		{
			//there is an extension in the file name
			var periodPos = utils.stringPosition(filename, '.', 1, 1)
			ext = utils.stringMiddle(filename, periodPos + 1, filename.length - periodPos)
		}
		
		//create tempfile
		/** @param {Object} tmpfile */
		var tmpfile = plugins.file.createTempFile('temp', '.' + ext)
		
		//write data to the temp file
		plugins.file.writeFile(tmpfile,gcurrfileid_to_file.file_data)
		
		if(utils.stringMiddle(application.getOSName(),1,7) == "Windows")
		{
		   application.executeProgram('rundll32', 'url.dll,FileProtocolHandler',tmpfile)
		}
		//FreeBSD or Linux
		else if(utils.stringMiddle(application.getOSName(),1,7) == "FreeBSD"||utils.stringMiddle(application.getOSName(),1,5) == "Linux")
		{
		   application.executeProgram('mozilla', tmpfile);
		}
		//Mac OSX
		else if(application.getOSName().match("Mac"))
		{
		   application.executeProgram('open', tmpfile)
		}
	}
}
