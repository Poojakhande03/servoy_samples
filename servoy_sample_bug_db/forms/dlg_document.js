/**
 * @properties={typeid:24,uuid:"7086c3f9-33b9-49c0-9845-5d9586734181"}
 */
function BtnCancel()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.DialogCloseCancel('document');
}

/**
 * @properties={typeid:24,uuid:"d9aab6ad-90c7-4a56-88a3-07e15ef15322"}
 */
function BtnOk()
{
	/*
	PURPOSE: This method runs when the OK button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.flagIsNew == 0) {
		globals.NewRecordAction(1,'Updated document "' + doc_name +
			 '"', ixproject, null, document_to_project.ixcompany);
	}
	else {
		globals.NewRecordAction(0,'Added document "' + doc_name +
			 '"', ixproject, null, document_to_project.ixcompany);
	}
	
	//update the modified of the document
	dt_modified = new Date()
	ixmodifiedperson = globals.currUserID
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
	globals.DialogCloseOk('document');
	
	forms.frm_project_selproj_docs_docList.GoDocument();
}

/**
 * @properties={typeid:24,uuid:"a514e1e6-1829-40c6-81e0-3bfa782e2de6"}
 */
function OnShow()
{
	/*
	PURPOSE: OnShow of document dialog
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	controller.focusFirstField()
}
