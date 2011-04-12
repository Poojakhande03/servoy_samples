/**
 * @properties={typeid:24,uuid:"eb011eab-9fa6-4c11-9e41-ebccdd58d21b"}
 */
function BtnDeleteDocument()
{
	/*
	PURPOSE: Create delete this docuemnt with err checking
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.currDocumentID = ixdocument;
	
	//get number of files
	var numFiles = gcurrdocument_to_file.getSize();
	var msg = i18n.getI18NMessage('msg.deleteRecord', new Array('document',gcurrdocument_to_document.doc_name));
	
	if(numFiles > 0)
	{
		msg = i18n.getI18NMessage('msg.deleteDocumentRecord', new Array(gcurrdocument_to_document.doc_name, numFiles));
	}
	
	//confirm the delete of the task
	globals.core_showWcGenericDialog(i18n.getI18NMessage('lbl.deleteDocument'), msg, 'forms.frm_project_selproj_docs_docList.DoDelete()', 'warning', i18n.getI18NMessage('lbl.ok'), i18n.getI18NMessage('lbl.cancel'), null, null);
}

/**
 * @properties={typeid:24,uuid:"1f8635cc-fa93-4250-b056-30f3e9ff1def"}
 */
function BtnShowDocument()
{
	/*
	PURPOSE: Need this for the web client to set the cur doc id
	
	PARAMETERS: ixdocument int (optional - only web client)
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	/**
	if (application.getApplicationType() == 5){
		globals.currDocumentID = arguments[0];
	}
	else
	{
	*/
		globals.currDocumentID = ixdocument;
//	}
	
	globals.ShowDialogDocument(null, globals.currDocumentID, null);
}

/**
 * @properties={typeid:24,uuid:"249708e7-0908-4514-9809-b650a91d3236"}
 */
function DoDelete()
{
	/*
	PURPOSE: Deleting document
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.mod_dialog_buttonPressed == i18n.getI18NMessage('lbl.ok'))
	{
		var action = 'Deleted document "' + doc_name +	'"';
		globals.NewRecordAction(2, action, globals.currProjectID, null, gcurrproject_to_project.ixcompany);
		
		//turn off autosave
		databaseManager.setAutoSave(true);
		controller.deleteRecord();
		databaseManager.saveData();
		databaseManager.setAutoSave(false);
		
		forms.frm_project_selproj_docs.OnShow();
	}
}

/**
 * @properties={typeid:24,uuid:"1f2c4b48-ab24-4231-a1ce-c46f2eb3a5a1"}
 */
function GoDocument()
{
	/*
	PURPOSE: Need this for the web client to set the cur doc id
	
	PARAMETERS: ixdocument int (optional - only web client)
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/

	/**
	if((arg0) && (typeof(arg0 == 'number'))) {
		globals.currDocumentID = arg0;
	}
	else {
	*/
		globals.currDocumentID = ixdocument;
//	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} arg1
 *
 * @properties={typeid:24,uuid:"684B4B7A-D78A-4329-A36A-98E5547F6941"}
 */
function BtnSort(event, arg1) {
	/*
	PURPOSE: Sort the list in a generic way
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/

	var ftsort, btnName;
	if (arg1 != null) {
		var isInitial = arg1;
		ftsort = false;
		event = 'details_asc';
	}
	if (ftsort == true) {
		isInitial = 'initial';
		ftsort = false;
	}
	else {
		ftsort = false;
	}
	
	//load sort images for all columns
	var sortImages = new Array('details_asc:::doc_name asc',
								'details_desc:::doc_name desc');
	//form name                            
	var formName = controller.getName();
	
	//column number
	if (arg1 != null)
		btnName = event;
	else
		btnName = event.getElementName();
	var columnNum = utils.stringRight(btnName, 1);
	
	if (columnNum.charAt(0) == '_')
	{
	    columnNum = columnNum.substr(1,2);
	}
	
	if((isInitial) && (typeof isInitial != 'object'))
	{
		//initial sort - use the 3rd option
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, 1);
	}
	else
	{
		//fx to perform sort and display column sort direction graphics
		globals.SortColumns(sortImages, formName, columnNum);
	}
}
