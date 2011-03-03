/**
 * @properties={typeid:24,uuid:"27bfaf68-c9a5-48e8-a9f0-cb982b16d995"}
 */
function BtnCancel()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/08/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.DialogCloseCancel('profile');
}

/**
 * @properties={typeid:24,uuid:"f1e4d458-0f3f-483c-8f8c-2a3cbb4fb819"}
 */
function BtnOk()
{
	/*
	PURPOSE: This method runs cancel button is clicked
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.NewRecordAction(1,'Updated profile for ' + login_name, null, null, null);
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 0
	
	globals.DialogCloseOk('profile');
	
	//if there it's the initial load - open the company window
	if(globals.tempInt == 1)
	{
		globals.tempInt = 0
		
		//set the global so that if they click the "X" close it won't close
		globals.isDialogOpen = 1
		application.showFormInDialog(forms.dlg_company, -1,-1,-1,-1, "i18n:lbl.company", false, false, 'company', true)

/**
		var win = application.createWindow("company", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(-1, -1, -1, -1);
		win.setTitle("i18n:lbl.company");
		controller.show(win);
		// create and show a non-modal dialog with default initial bounds/
		var nmd = application.createWindow("nonModalDialogName", JSWindow.DIALOG);
		controller.showRecords(forms.dlg_company.foundset, win); // 15 is a single-number pk in
		*/
	}
	else
	{
		globals.tempChooseInt = ixpeople
		globals.tempTextDisplay = i18n.getI18NMessage('msg.choosePersonN', new Array(name_full))
		forms.dlg_choosePerson_list.controller.sort('name_full')
		//reload person list
		forms.lst_people.foundset.loadAllRecords()
		var sort = forms.lst_people.foundset.getCurrentSort();
		forms.lst_people.controller.sort(sort);
	}
}

/**
 * @properties={typeid:24,uuid:"d9d76c83-7aca-4384-9fb5-3dd3d04b7b3f"}
 */
function evt_loginName_onDataChange(arg0, arg1)
{
	var prevValue = arg0;
	var newValue = arg1;

	var isValidName = globals.ValidateUserName(newValue);

	if(!isValidName)
	{
		login_name = prevValue
		globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), "That username is already in use.  Please try another.", null, 'error', i18n.getI18NMessage('lbl.ok'), null, null, null);
	}

	return true
}

/**
 * @properties={typeid:24,uuid:"6e8c1be7-0bad-49c5-9d64-4596f413310f"}
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
	
	controller.focusFirstField()
}
