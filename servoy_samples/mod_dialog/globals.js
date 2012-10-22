/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"a2b80e73-92b9-476b-9dd4-db60a8b78d09",variableType:4}
 */
var mod_dialog_appTypeInt;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"67a0346c-dca8-4dd2-83c2-7a3018cf48c8",variableType:12}
 */
var mod_dialog_appTypeWords = '';

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"369cdb3c-039c-463a-ab81-631c6cc5758d",variableType:12}
 */
var mod_dialog_buttonPressed = '';

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"3634ad5d-0ac4-4e67-8208-10f7107c1307",variableType:12}
 */
var mod_dialog_methodToExecute = '';

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"6762bb7e-aa00-4d41-809c-dd8cd5a4bbe7",variableType:12}
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
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"AF25FA3C-400B-4FB2-9E25-C01E35A6F892"}
 */
function core_showWcGenericDialog(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7)
{
	var title = arg0;
	var msg = arg1;
	var mthd = arg2; //method to execute after the dialog closes
	var icon = arg3; //can be 'error, info, question, warning, forbidden'
	var btn1 = arg4; //btn1
	var btn2 = arg5; //btn2
	var btn3 = arg6; //btn3
	var btn4 = arg7; //btn4

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
		
		if(!title || title == undefined) title = '';
		if(!msg || msg == undefined) msg = '';
		
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
//		application.showFormInDialog(forms.mod_dialog_frm_generic, -1,-1,-1,-1, title,  false, false, "Dialog", true)
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(-1, -1, -1, -1);
		win.title= title;
		win.show(forms.mod_dialog_frm_generic);
	}
}
