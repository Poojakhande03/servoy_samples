/**
 * @properties={typeid:35,uuid:"a2b80e73-92b9-476b-9dd4-db60a8b78d09",variableType:4}
 */
var mod_dialog_appTypeInt;

/**
 * @properties={typeid:35,uuid:"67a0346c-dca8-4dd2-83c2-7a3018cf48c8"}
 */
var mod_dialog_appTypeWords = '';

/**
 * @properties={typeid:35,uuid:"369cdb3c-039c-463a-ab81-631c6cc5758d"}
 */
var mod_dialog_buttonPressed = '';

/**
 * @properties={typeid:35,uuid:"3634ad5d-0ac4-4e67-8208-10f7107c1307"}
 */
var mod_dialog_methodToExecute = '';

/**
 * @properties={typeid:35,uuid:"6762bb7e-aa00-4d41-809c-dd8cd5a4bbe7"}
 */
var mod_dialog_msg = '';

/**
 * @properties={typeid:24,uuid:"acfdfb1f-5267-4179-9e9e-fcd0fb4fc57b"}
 */
function core_setupAppType()
{
	var appName = 'Servoy '
	var appType = application.getApplicationType()

	if(appType != 1 && appType != 6 && appType != 3)
	{
		appName += 'Server'
	}
	else if(appType == 3)
	{
		appName += 'Developer'
	}
	else if(appType == 1)
	{
		appName += 'Server (1)'
	}
	else if(appType == 6)
	{
		appName += 'Runtime'
	}

	globals.mod_dialog_appTypeInt = appType
	globals.mod_dialog_appTypeWords = appName
}

/**
 * @properties={typeid:24,uuid:"cbf93c2f-7fdf-43c0-84bb-ff43a2b6cd45"}
 */
function core_showWcGenericDialog()
{
	var title = arguments[0]
	var msg = arguments[1]
	var mthd = arguments[2] //method to execute after the dialog closes
	var icon = arguments[3] //can be 'error, info, question, warning, forbidden'
	var btn1 = arguments[4] //btn1
	var btn2 = arguments[5] //btn2
	var btn3 = arguments[6] //btn3
	var btn4 = arguments[7] //btn4

	if(!btn1) btn1 = 'OK'
	if(!btn2) btn2 = null
	if(!btn3) btn3 = null
	if(!btn4) btn4 = null

	//method to execute after dismissal of dialog
	globals.mod_dialog_methodToExecute = mthd


	//NOTE: Change "-1" to "3" if you want to use the built-in dialog
	if(application.getApplicationType() <= -1)  //smart client/developer/server
	{
		//show the "real" dialog type
		switch( icon )
		{
		case 'error': plugins.dialogs.showErrorDialog( title,  msg, btn1, btn2, btn3, btn4); break;
		case 'info': plugins.dialogs.showInfoDialog( title,  msg, btn1, btn2, btn3, btn4); break;
		case 'question': plugins.dialogs.showQuestionDialog( title,  msg, btn1, btn2, btn3, btn4); break;
		case 'warning': plugins.dialogs.showWarningDialog( title,  msg, btn1, btn2, btn3, btn4); break;
		default: plugins.dialogs.showInfoDialog( title,  msg, btn1, btn2, btn3, btn4);
		}
	}
	else
	{
		//setup buttons
		forms.mod_dialog_frm_generic.setup_buttons(btn1, btn2, btn3, btn4)
		
		if(!title || title == undefined) title = ''
		if(!msg || msg == undefined) msg = ''
		
		
		forms.mod_dialog_frm_generic.hide_allIcons();
		
		//store the message in a global - just in case you need it
		globals.mod_dialog_msg = msg
		
		//show the right message box - either HTML or text based on message
		if(msg.indexOf('<html>') > 0)
		{
			forms.mod_dialog_frm_generic.elements.fld_dlgHTML.visible = true
			forms.mod_dialog_frm_generic.elements.fld_dlgText.visible = false
		}
		else
		{
			forms.mod_dialog_frm_generic.elements.fld_dlgHTML.visible = false
			forms.mod_dialog_frm_generic.elements.fld_dlgText.visible = true
		}
		
		switch( icon )
		{
			case 'error': forms.mod_dialog_frm_generic.show_iconError(); break;
			case 'info': forms.mod_dialog_frm_generic.show_iconInfo(); break;
			case 'question': forms.mod_dialog_frm_generic.show_iconQuestion(); break;
			case 'warning': forms.mod_dialog_frm_generic.show_iconWarning(); break;
			case 'forbidden': forms.mod_dialog_frm_generic.show_iconForbidden(); break;
			default: forms.mod_dialog_frm_generic.show_iconInfo();
		}
		application.showFormInDialog(forms.mod_dialog_frm_generic, -1,-1,-1,-1,  title,  false, false, "Dialog", true)
	}
}
