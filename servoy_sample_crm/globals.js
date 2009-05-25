/**
 * @properties={typeid:35,uuid:"d63336f0-7f12-4bd2-b65d-4ed061b6846d",variableType:4}
 */
var const_one = 1;

/**
 * @properties={typeid:35,uuid:"a31e0b69-0efd-4814-bcc6-a11a1bada467",variableType:4}
 */
var const_two = 2;

/**
 * @properties={typeid:35,uuid:"485af478-fbef-4388-8d1f-b7e3afaf2010",variableType:4}
 */
var curID_company;

/**
 * @properties={typeid:35,uuid:"1a83e330-4535-40ce-aa25-a0a271bc697b",variableType:4}
 */
var curID_contact;

/**
 * @properties={typeid:35,uuid:"e2cc93b6-7175-4513-8c02-a36eaac1d641",variableType:4}
 */
var curID_order;

/**
 * @properties={typeid:35,uuid:"4b8a4485-25d2-44a8-94aa-175e65226061",variableType:4}
 */
var curID_product;

/**
 * @properties={typeid:35,uuid:"29732ca9-062b-4e59-8691-a43a8b63b627"}
 */
var default_image_directory = '';

/**
 * @properties={typeid:35,uuid:"e458710a-d3e2-4931-918d-fe327438ce70"}
 */
var dialog_buttonPressed = '';

/**
 * @properties={typeid:35,uuid:"51b3cd2e-4cb6-464e-b44c-e205c7a4c0fb"}
 */
var dialog_instructions01 = '';

/**
 * @properties={typeid:35,uuid:"8a87d0fb-ab71-4097-a36f-04f6a8630319"}
 */
var dialog_instructions02 = '';

/**
 * @properties={typeid:35,uuid:"6107241d-675f-4b30-b9e1-ccbb24dfe319"}
 */
var dialog_performMethod = '';

/**
 * @properties={typeid:35,uuid:"52cddad2-0898-4662-876c-ef3b1c35cb95"}
 */
var dialog_text = '';

/**
 * @properties={typeid:35,uuid:"91d80373-3811-4f07-95b8-367eaff687d8"}
 */
var nav_itemName = '';

/**
 * @properties={typeid:35,uuid:"226fe763-1a5f-4bb8-a3c0-062818923dd6",variableType:4}
 */
var nav_node = 1;

/**
 * @properties={typeid:35,uuid:"5261cd46-d762-403b-89da-0dcce2a9061d"}
 */
var nav_search = '';

/**
 * @properties={typeid:35,uuid:"0e1fcd8b-27a9-4e2b-ad37-5e5a7d915735"}
 */
var nav_solution = '';

/**
 * @properties={typeid:35,uuid:"27a6a53e-adae-41b7-9a3f-9a7c3dd4a55a",variableType:4}
 */
var okToCommit = 1;

/**
 * @properties={typeid:35,uuid:"e91fefcc-7922-4191-94f2-525824466186"}
 */
var record_status = '';

/**
 * @properties={typeid:35,uuid:"c2139aac-c505-4472-9c6b-19a67ad6805c"}
 */
var tempHTML = '';

/**
 * @properties={typeid:35,uuid:"f69d2b05-72e1-40aa-8a30-ee227f8d8445",variableType:4}
 */
var thisSolution_ID = 2;

/**
 * @properties={typeid:35,uuid:"442205bc-2c0d-4262-8716-ed2c9e244997",variableType:4}
 */
var vl_editNum = 1;

/**
 * @properties={typeid:24,uuid:"4dd0e476-1aa0-4884-8a5a-d77fea0e6bdb"}
 */
function cancelEditing()
{
	databaseManager.rollbackEditedRecords();
	databaseManager.setAutoSave(true);
}

/**
 * @properties={typeid:24,uuid:"7fb83008-1c69-4f81-a4ae-62d75c97b237"}
 */
function disableBgElements()
{
	//disable all the background elements when showing the dialog
	forms.frm_nav_main.elements.tabs_recList.enabled = false
	forms.frm_nav_main.elements.tabs_solNav.enabled = false
	forms.main.elements.tabs_nav.enabled = false
	forms.main.elements.tabs_main.enabled = false
}

/**
 * @properties={typeid:24,uuid:"750b1f73-54fa-4f6c-9bbd-635fc4a64ce9"}
 */
function enableBgElements()
{
	//enable all the background elements when showing the dialog
	forms.frm_nav_main.elements.tabs_recList.enabled = true
	forms.frm_nav_main.elements.tabs_solNav.enabled = true
	forms.main.elements.tabs_nav.enabled = true
	forms.main.elements.tabs_main.enabled = true
}

/**
 * @properties={typeid:24,uuid:"d1bf1c79-823e-4bc5-b093-45de2175bfb6"}
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
 * @properties={typeid:24,uuid:"74bbdc29-5aef-4454-98a8-1b25887ba926"}
 */
function isEditing()
{
	return !databaseManager.getAutoSave();
}

/**
 * @properties={typeid:24,uuid:"711162e6-235f-4bb8-9e28-705996c31de2"}
 */
function nav_nextRecord()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)

	forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() + 1)
}

/**
 * @properties={typeid:24,uuid:"93ba9df2-20a3-4d79-b05f-fca7643a974e"}
 */
function nav_prevRecord()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)

	forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() - 1)
}

/**
 * @properties={typeid:24,uuid:"401e1980-8939-475f-ad23-631c05cd60c8"}
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

	//setup the admin global settings
	if(gconst2_to_solution_preferences.getSize() > 0)
	{
		//the sample CRM ID is 2
		forms.lst_admin_solutionPrefs.controller.loadRecords(gconst2_to_solution_preferences)
		forms.lst_admin_solutionPrefs.controller.sort('seq asc')

		/*
	There are more "robust" ways to do this - the loading of the preferences.
	You should probabably do a "find" for each preference to ensure they exist
		 ***********/
		var record =forms.lst_admin_solutionPrefs.foundset.getRecord(1)
		if(record.preference_name == 'Background Row Color') globals.core_color_bgRowColor = record.preference_value
		record = forms.lst_admin_solutionPrefs.foundset.getRecord(2)
		if(record.preference_name == 'Default Background Color') globals.core_color_defaultBgColor = record.preference_value
	}
}

/**
 * @properties={typeid:24,uuid:"9ed894f8-ee2b-4234-8634-3ef4a85b78db"}
 */
function printRoutine()
{
	var frm = arguments[0]
	var oneRecord = arguments[1]

	if(!oneRecord) oneRecord = false

	if(!frm) return;

	forms[frm].controller.showPrintPreview(oneRecord)
}

/**
 * @properties={typeid:24,uuid:"42ed74b3-f9e4-4c7d-8391-5dccd05d5c90"}
 */
function saveEdits()
{
	databaseManager.saveData();
	databaseManager.setAutoSave(true);
}

/**
 * @properties={typeid:24,uuid:"95705e1f-e75f-4524-a9e3-412f3214b5d0"}
 */
function setupRecordStatus()
{
	//see what form is front-most
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)

	var fs = databaseManager.getFoundSetCount(forms[frm].foundset)
	var tc = databaseManager.getTableCount(forms[frm].foundset)
	var cr = forms[frm].controller.getSelectedIndex()

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

	globals.record_status += '</html>'

	if(cr == 1) //current record 1 - so hide the "previous" button
	{
		forms[frm].elements.btn_prev.visible = false
	}
	else
	{
		forms[frm].elements.btn_prev.visible = true
	}

	if(cr == fs || cr == tc) //current is last one - so hide the "next" button
	{
		forms[frm].elements.btn_next.visible = false
	}
	else
	{
		forms[frm].elements.btn_next.visible = true
	}
}

/**
 * @properties={typeid:24,uuid:"a5254fae-24e6-4c5e-ae3b-3ae6bfd62e77"}
 */
function setupWcValueList()
{
	//this routine will examine a value list for "-" items - and remove them
	var listName = arguments[0]
	if(!listName) return;

	var dataset = application.getValueListItems(listName)

	if(dataset)
	{
		var myArray = new Array()
		var max = dataset.getMaxRowIndex()
		var temp = ''

		for ( var i = 1 ; i <= max  ; i++ )
		{
			temp = dataset.getValue(i, 1)
			if(temp != '-') myArray.push(temp)
		}

		application.setValueListItems( listName, myArray)
	}
}

/**
 * @properties={typeid:24,uuid:"d639f9c2-5cb6-4a65-ab17-bbdac0253c73"}
 */
function showDialog()
{
	var title = arguments[0]
	var whatTab = arguments[1]
	var showCancelBtnOnly = arguments[2] //anything that is not null is a vaid value
	var cancelBtnLabel = arguments[3]
	var showBtn3 = arguments[4] //anything that is not null is valid value
	var btn3Label = arguments[5]
	var x = arguments[6]
	var y = arguments[7]
	var width = arguments[8]
	var height = arguments[9]

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

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//show the tabpanel "dialog"
	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
}

/**
 * @properties={typeid:24,uuid:"a7dbcfca-8a24-4468-8680-c62f173f9d7b"}
 */
function showErrorDialog()
{
	var msg = arguments[0]  //accept the error message as an argument
	var methd = arguments[1] //method to execute after dialog closes
	var btn1 = arguments[2]
	var btn2 = arguments[3]
	var btn3 = arguments[4]
	var btn4 = arguments[5]

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Error', msg, methd, 'error', btn1, btn2, btn3, btn4);	
}

/**
 * @properties={typeid:24,uuid:"128c1c44-ec93-42f5-9012-0b6bb7e28722"}
 */
function showForbiddenDialog()
{
	var msg = arguments[0]  //accept the error message as an argument
	var methd = arguments[1] //method to execute after dialog closes
	var btn1 = arguments[2]
	var btn2 = arguments[3]
	var btn3 = arguments[4]
	var btn4 = arguments[5]

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('No Access', msg, methd, 'forbidden', btn1, btn2, btn3, btn4);	
}

/**
 * @properties={typeid:24,uuid:"87be16c7-25f5-4610-9907-ecacc0d76981"}
 */
function showInfoDialog()
{
	var msg = arguments[0]  //accept the error message as an argument
	var methd = arguments[1] //method to execute after dialog closes
	var btn1 = arguments[2]
	var btn2 = arguments[3]
	var btn3 = arguments[4]
	var btn4 = arguments[5]

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Info', msg, methd, 'info', btn1, btn2, btn3, btn4);	
}

/**
 * @properties={typeid:24,uuid:"7721b557-837b-4828-aafa-f691296d3837"}
 */
function showQuestionDialog()
{
	var msg = arguments[0]  //accept the error message as an argument
	var methd = arguments[1] //method to execute after dialog closes
	var btn1 = arguments[2]
	var btn2 = arguments[3]
	var btn3 = arguments[4]
	var btn4 = arguments[5]

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Input Required', msg, methd, 'question', btn1, btn2, btn3, btn4);	
}

/**
 * @properties={typeid:24,uuid:"b352be74-f8ad-4c82-93c0-9cf7e9629d45"}
 */
function showWarningDialog()
{
	var msg = arguments[0]  //accept the error message as an argument
	var methd = arguments[1] //method to execute after dialog closes
	var btn1 = arguments[2]
	var btn2 = arguments[3]
	var btn3 = arguments[4]
	var btn4 = arguments[5]

	//disable all the background elements when showing the dialog
	globals.disableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Warning!', msg, methd, 'warning', btn1, btn2, btn3, btn4);	
}

/**
 * @properties={typeid:24,uuid:"f3fdf8a0-ebb9-4c07-bd0c-764cdb56e7f0"}
 */
function startEditing()
{
	databaseManager.setAutoSave(false);
}