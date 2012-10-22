/**
 * @properties={typeid:24,uuid:"27723024-7f7d-4ad4-8165-0479827b478b"}
 */
function BtnCancel()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.DialogCloseCancel('version');
}

/**
 * @properties={typeid:24,uuid:"e0d0f5ce-00f8-42f5-b36c-60c5838165b1"}
 */
function BtnOk()
{
	/*
	PURPOSE: This method runs when the OK button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.flagIsNew == 0) {
		globals.NewRecordAction(1,'Updated version "' + version_name +
			 '"', ixproject, null, null);
	}
	else {
		globals.NewRecordAction(0,'Added version "' + version_name +
			 '"', ixproject, null, null);
	}
	
	//update the modified of the document
	dt_modified = new Date();
	ixpersonmodified = globals.currUserID;
	globals.DialogCloseOk('version');
}

/**
 * @properties={typeid:24,uuid:"eefc07da-1ebf-483f-8c79-e524d0ab7079"}
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
