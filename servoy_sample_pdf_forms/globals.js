/**
 * @type String
 *
 * @properties={typeid:35,uuid:"be1ee73c-2aa5-4172-94ac-dd072cf14f9e",variableType:12}
 */
var appType_forError = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"d1a87378-c99b-4ace-a2ed-0e6861aaea5c",variableType:4}
 */
var curID_form;

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"45a787fe-d779-445e-9c34-08edcd3bf150",variableType:4}
 */
var curID_template;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"beea0c12-ab33-4fbd-b1b8-6adc76bd526b",variableType:12}
 */
var dialog_performMethod = '';

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"4b4db217-13cb-4a95-b8b1-70bd5623d76d",variableType:12}
 */
var nav_itemName = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"d02d2175-80b1-4a75-8c17-57aa0ad68eca",variableType:4}
 */
var nav_node = 1;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"cce99e1a-7424-463e-ab0b-0c2ee6712a07",variableType:12}
 */
var nav_search = '';

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"83eff97a-d939-4c59-80d1-5eb86e1dcb05",variableType:12}
 */
var nav_solution = '';

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"1fb777fa-3e43-4941-a107-36c13147c087",variableType:12}
 */
var record_status = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"983e1d56-9af2-43ce-aa53-ae08176c2fe1",variableType:4}
 */
var thisSolutionID = 4;

/**
 * @properties={typeid:24,uuid:"f3f80a3a-11ea-4979-bd8a-cda134c49a95"}
 */
function _dev_temp()
{
	forms.main.elements.tabs_dialog.addTab( forms.core_dlg_generic,  'bob',  'bob',  '',  null,  '#ffffff', '#ffffff')
	forms.main.elements.tabs_dialog.tabIndex = forms.main.elements.tabs_dialog.getMaxTabIndex()
	forms.main.elements.tabs_dialog.visible = true
}

/**
 * @properties={typeid:24,uuid:"1e18949b-bf32-4345-b5de-8700d1dd7fe0"}
 */
function btn_delete()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)
	if(forms[frm].validate_beforeDelete() != 0) return;

	var msg = forms[frm].delete_text

	if(!msg) msg = 'Are you sure you want to delete this record?'

	//tell it what method to execute when dialog closes
	var methd = 'forms.' + frm + '.sub_doDelete()'

	//show the tabpanel "dialog"
	globals.showWarningDialog(msg, methd, 'Cancel', 'Delete', null, null);
}

/**
 * @param {String} arg0 // Type
 * 
 * @param {Number} arg1  //template_id
 * 
 * @param {Number} arg2  //actionType
 * 
 * @properties={typeid:24,uuid:"4916a21e-2774-4593-8164-1af9785fac80"}
 */
function btn_viewPDF(arg0, arg1, arg2)
{
	var type = arg0;
	var template_id = arg1;
	var actionType = arg2;

	if(!actionType) actionType = 0 //view

	if(type=='template')
	{
		application.showURL(application.getServerURL()+'/servoy-service/pdf_forms/pdf_template/'+forms.frm_templates.filename+'?template_id='+template_id,'_self')
	}
	else
	{
		//it's a document
		//create action
		forms.frm_forms.pdf_forms_to_pdf_actions.newRecord();
		forms.frm_forms.pdf_forms_to_pdf_actions.template_id = template_id;
		//forms.frm_forms.pdf_forms_to_pdf_actions.redirect_url = application.getServerURL() + '/servoy-service/pdf_forms/pdf_form/load.fdf?action_id=' + action_id
		forms.frm_forms.pdf_forms_to_pdf_actions.action_type = actionType;//==edit = 1, view = 0
		if(application.getApplicationType()==5)
		{
			forms.frm_forms.pdf_forms_to_pdf_actions.redirect_url = application.getServerURL() + '/servoy-webclient/solutions/solution/' + application.getSolutionName();
		}

		//get the new record id
		var action_id = forms.frm_forms.pdf_forms_to_pdf_actions.action_id;

		databaseManager.saveData();//so changes are seen by servlet	

		if(application.getApplicationType()==5)
		{
			application.showURL('/servoy-service/pdf_forms/pdf_form/load.fdf?action_id=' + action_id,'_self');
		}
		else
		{
			application.showURL(application.getServerURL() + '/servoy-service/pdf_forms/pdf_form/load.-fdf?action_id=' + action_id,'_blank');
		}
	}
}

/**
 * @properties={typeid:24,uuid:"bd294eb6-9031-4ba2-b896-b24d26914837"}
 */
function disableBgElements()
{
	//disable all the background elements when showing the dialog
	forms.frm_nav_main.elements.tabs_recList.enabled = false
	forms.frm_nav_main.elements.tabs_solNav.enabled = false
	forms.main.elements.tabs_nav.enabled = false
	forms.main.elements.tabs_main.enabled = false

	/*
//disable all the background elements when showing the dialog
globals.core_dlg_elementDisableEnable = new Array('forms.frm_templates','forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav','forms.main.elements.tabs_nav','forms.main.elements.tabs_main')
	 */
}

/**
 * @properties={typeid:24,uuid:"897b2729-34bc-4277-945c-871fb9d222cb"}
 */
function enableBgElements()
{
	//disable all the background elements when showing the dialog
	forms.frm_nav_main.elements.tabs_recList.enabled = true
	forms.frm_nav_main.elements.tabs_solNav.enabled = true
	forms.main.elements.tabs_nav.enabled = true
	forms.main.elements.tabs_main.enabled = true
}

/**
 * @properties={typeid:24,uuid:"b1efdaa6-d0ec-4e85-aec3-52a185cf67eb"}
 */
function getTopHTML()
{
	if(application.getApplicationType() == 5)
	{
		//web client
		return '<html><body>'
	}
	else
	{
		return '<html>\n<head>\n<style type="text/css">\n.body {font-family: "Verdana, sans-serif"; font-size: 11pt;}\n' +
		'\n.red {font-family: "Verdana, sans-serif"; font-size: 11pt; color:#990000;}\n' +
		'\n.largeRed {font-family: "Verdana, sans-serif"; font-size: 12pt; color:#990000;}\n' +
		'\n.navList {font-family: "Verdana, sans-serif"; font-size: 12pt; font-weight: bold}' +
		'\n.navListWhite {font-family: "Verdana, sans-serif"; font-size: 12pt; font-weight: bold; color: #ffffff;}' +
		'</style>\n</head>\n<body class="body">\n\n'
	}
}

/**
 * @properties={typeid:24,uuid:"4dd96143-7918-4c44-b3f0-0cacecbb19f0"}
 */
function nav_nextRecord()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)

	forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() + 1)
}

/**
 * @properties={typeid:24,uuid:"2e1a513f-40f2-462d-a566-2b24c257250d"}
 */
function nav_prevRecord()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)

	forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() - 1)
}

/**
 * @properties={typeid:24,uuid:"c3bfa974-6814-44d0-86d1-bddf0c2f4840"}
 */
function openSolution()
{
	//use the right style sheet
	//substitute style sheet if we're on a mac
	if(utils.stringLeft(application.getOSName(), 3) == 'Mac')
	{
		//we're on the mac - exchange style sheets
		application.overrideStyle('svyWebCrm', 'svyWebCrm_mac')
	}

	//setup the apptype globals
	globals.core_setupAppType();

	//setup the right verbiage for the error
	if(application.getApplicationType() == 3) //developer
	{
		globals.appType_forError = 'restart ' + globals.core_appTypeWords
	}
	else
	{
		globals.appType_forError = 'have an administrator restart the ' + globals.core_appTypeWords +	' application'
	}

	//check for pdf plugin if we arent in web client or headless client
	if(!(application.getApplicationType() == 5) || (!(application.getApplicationType() == 4)))
	{
		if(!plugins.pdf_output)
		{
			//plug-in NOT installed - can't use solution
			forms.frm_noplug.controller.show()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1d70d040-bb79-4ca4-a280-476c5e13bdce"}
 */
function setupRecordStatus()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)

	var fs = databaseManager.getFoundSetCount(forms[frm].foundset)
	var tc = databaseManager.getTableCount(forms[frm].foundset)
	var cr = forms[frm].controller.getSelectedIndex()

	if(tc > 0) //there are some records
	{
		globals.record_status = '<html><b>Record:</b> ' + cr + ' of ' + fs + '</b>'

		if( tc > fs)
		{
			globals.record_status += ' (' + tc + ' total records)'
		}

		if(globals.nav_search)
		{
			globals.record_status += " - SEARCH TERM: '" + globals.nav_search + "'"
			globals.nav_search = ''
		}
		var datasource = forms[frm].foundset.getDataSource(); 
		globals.record_status += '</html>'
		
		if(cr == 1) //current record 1 - so hide the "previous" button
		{
			
			forms[frm].elements['btn_prev'].visible = false
		}
		else
		{
			forms[frm].elements['btn_prev'].visible = true
		}

		if(cr == fs || cr == tc) //current is last one - so hide the "next" button
		{
			forms[frm].elements['btn_next'].visible = false
		}
		else
		{
			forms[frm].elements['btn_next'].visible = true
		}
	}
	else
	{
		globals.record_status = '<html><b>No Records</b>'
			
		forms[frm].elements['btn_next'].visible = false
		forms[frm].elements['btn_prev'].visible = false
	}
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
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"5D8FF029-A439-45EC-8962-5CF85167DBE1"}
 */
function showDialog(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog.elements.btn_3.text = btn3Label
		forms.dialog.elements.btn_3.visible = true
	}
	else
	{
		forms.dialog.elements.btn_3.visible = false
	}

	var screenWidth = forms.main.elements.tabs_main.getWidth()
	var screenHeight = forms.main.elements.tabs_main.getHeight();
	
	var dlgWidth = forms.main.elements.tabs_dialog.getWidth()
	var dlgHeight = forms.main.elements.tabs_dialog.getHeight()

	if(!whatTab || whatTab == undefined) whatTab = 1
	if(!width || width == undefined) width = dlgWidth
	if(!height || height == undefined) height = dlgHeight

	if(!title || title == undefined) title = ''
	if(!x || x == undefined) x = ((screenWidth/2) - (width/2)) + 200
	if(!y || y == undefined) y = ((screenHeight/2) - (height/2))

	forms.dialog.elements.tabs_dlg.tabIndex = whatTab
	forms.main.elements.tabs_dialog.setLocation(x, y)
	forms.dialog.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//show the tabpanel "dialog"
	forms.main.elements.tabs_dialog.visible = true
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"32B2FBDB-28EA-4F58-85AD-8BB689C6B280"}
 */
function showErrorDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Error', msg, methd, 'error', btn1, btn2, btn3, btn4);	
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"F1C01973-843B-4EF2-9BD7-BC88B610BACA"}
 */
function showWarningDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Warning!', msg, methd, 'warning', btn1, btn2, btn3, btn4);	
}
