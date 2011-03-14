/**
 * @type String
 *
 * @properties={typeid:35,uuid:"D4A3A8BE-D6BE-4D60-AC9E-DBB768E1E5AB",variableType:12}
 */
var nav_itemName = null;

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"8C3399C9-3414-4BD2-AD78-50B3C26E8983",variableType:8}
 */
var lastChatUserIP = null;

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"ac4799fb-cb7e-4e65-b9c4-6e0ce74016c8",variableType:4}
 */
var beepOnNewMessage = 0;

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"124066ef-b58b-45dd-8fb5-589425522e1b",variableType:4}
 */
var chatFromUserID;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"e6311ca6-05fb-40a0-80e1-7d4867dfa99e",variableType:12}
 */
var chatMsg = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"c183d6b6-b668-4abe-a3be-91d47f5dfd0a",variableType:4}
 */
var chatToUserID;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"dcd0d84e-f6db-4042-834b-52e391175615",variableType:12}
 */
var chatToUserNameDisplay = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"98f08cd8-226d-4c91-ae68-68dedf8b602e",variableType:4}
 */
var lastChatFromUserID;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"091b6bd2-059d-4b21-9c1f-233e89b335ca",variableType:12}
 */
var localUserName = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"838c5b21-ca95-4e66-914d-c790ae1c963b",variableType:4}
 */
var loginID;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"c53cada0-e080-44ef-af5c-c91a597c9af0",variableType:12}
 */
var received = '';

/**
 * @type Number
 *
 * @properties={typeid:35,uuid:"c8c6c661-bda0-490e-8631-341e435a1c07",variableType:4}
 */
var thisSolutionID = 3;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"602eabd7-dfab-498f-9856-50927466e2c3",variableType:12}
 */
var toIP = '';

/**
 * @properties={typeid:24,uuid:"f7ed618e-46e3-407f-9955-4cc3296a2090"}
 */
function closeSolution() {
	if(forms.frm_nav_main.elements.btn_login.text == 'Logout') forms.frm_nav_main.btn_login_logOut()

	//stop the UDP
	globals.stopUDP();
}

/**
 * @properties={typeid:24,uuid:"6dc01228-1a0d-4614-a0a1-0e9aea332634"}
 */
function disableAllButLogin() {
	forms.main.elements.tabs_main.enabled = false;
	forms.frm_nav_main.elements.tabs_recList.enabled = false;
	forms.frm_nav_main.elements.fld_login.requestFocus(false);
}

/**
 * @properties={typeid:24,uuid:"038ef84e-f676-4500-9702-d6b3f9bf85e7"}
 */
function disableBgElements() {
}

/**
 * @properties={typeid:24,uuid:"f7bc27c2-bba5-43d3-9c4d-5afbe96004a1"}
 */
function enableAll() {
}

/**
 * @properties={typeid:24,uuid:"2075715d-9aac-49ca-add1-ab3b22d43447"}
 */
function enableBgElements() {
	forms.main.elements.tabs_main.enabled = true;
	forms.frm_nav_main.elements.tabs_recList.enabled = true;
}

/**
 * @properties={typeid:24,uuid:"b09755fe-3326-4873-901d-28d12eebefb2"}
 */
function openSolution() {
	//use the right style sheet
	//substitute style sheet if we're on a mac
	if(utils.stringLeft(application.getOSName(), 3) == 'Mac') {
		//we're on the mac - exchange style sheets
		application.overrideStyle('svyWebCrm', 'svyWebCrm_mac');
	}

	globals.disableBgElements();
}

/**
 * @properties={typeid:24,uuid:"4036fa64-a1fe-4af5-b851-012aab17825a"}
 * @AllowToRunInFind
 */
function packetReceived() {
	if(globals.beepOnNewMessage == 1) 
		application.beep();
	toIP = '';
	var packet;
	var fontColor = '#666666';
	while ( (packet = plugins.udp.getReceivedPacket()) != null) {
		var msg = packet.readUTF();
		var fromUser = packet.getHost();

		if(fromUser != globals.toIP) 
		{
			toIP = fromUser;

			//find the user and store their ID
			forms.lst_control_usersLogin.controller.find();
			forms.lst_control_usersLogin.ip_address = toIP;
			var found = forms.lst_control_usersLogin.controller.search();

			if(found > 0)
			{
				fromUser = forms.lst_control_usersLogin.user_name;
				fontColor = '#9999ff';
			}

		}
		else
		{
			fromUser = gfromchatuserid_to_chat_users.user_name;
		}

		if (msg != null && msg.length > 0)
		{
			globals.received = '<html><font color="' + fontColor + '"><b>' + fromUser +' - ' + utils.dateFormat(new Date(), 'HH:mm') + ': ' + msg + '</b></font><br>' + globals.received;
			forms.frm_chat.elements.fld_message.requestFocus(false);
		}
	}
}

/**
 * @properties={typeid:24,uuid:"ee070c23-b2e7-46fd-b496-46a544e9630e"}
 */
function showDialog()
{
	var title = arguments[0];
	var whatTab = arguments[1];
	var showCancelBtnOnly = arguments[2]; //anything that is not null is a vaid value
	var cancelBtnLabel = arguments[3];
	var showBtn3 = arguments[4]; //anything that is not null is valid value
	var btn3Label = arguments[5];
	var x = arguments[6];
	var y = arguments[7];
	var width = arguments[8];
	var height = arguments[9];

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog.elements.btn_ok.visible = false;

		if(cancelBtnLabel) forms.dialog.elements.btn_cancel.text = cancelBtnLabel;
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog.elements.btn_3.text = btn3Label;
		forms.dialog.elements.btn_3.visible = true;

	}
	else
	{
		forms.dialog.elements.btn_3.visible = false;
	}

	var screenWidth = forms.main.elements.tabs_main.getWidth();
	var screenHeight = forms.main.elements.tabs_main.getHeight();
	var dlgWidth = forms.main.elements.tabs_dialog.getWidth();
	var dlgHeight = forms.main.elements.tabs_dialog.getHeight();

	if(!whatTab || whatTab == undefined) whatTab = 1;
	if(!width || width == undefined) width = dlgWidth;
	if(!height || height == undefined) height = dlgHeight;

	if(!title || title == undefined) title = '';
	if(!x || x == undefined) x = ((screenWidth/2) - (width/2)) + 200;
	if(!y || y == undefined) y = ((screenHeight/2) - (height/2));

	forms.dialog.elements.tabs_dlg.tabIndex = whatTab;
	forms.main.elements.tabs_dialog.setLocation(x, y);
	forms.dialog.elements.lbl_title.text = title;

	//disable all the background elements when showing the dialog
	globals.disableBgElements();

	//show the tabpanel "dialog"
	forms.main.elements.tabs_dialog.visible = true;
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"CA6F82E3-0C06-488B-9DD9-17240ADA07B1"}
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
	globals.disableBgElements();

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Error', msg, methd, 'error', btn1, btn2, btn3, btn4);	
}

/**
 * @properties={typeid:24,uuid:"759850af-06a4-46f6-b9b7-f8c464ac1cda"}
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
 * @properties={typeid:24,uuid:"6b2b26e5-c3e7-4626-9d06-062a65cd775b"}
 */
function startUDP()
{
	plugins.udp.startSocket(2828, globals.packetReceived);
}

/**
 * @properties={typeid:24,uuid:"bf6c9520-b928-4676-bd36-5840f7ac778f"}
 */
function stopUDP()
{
	plugins.udp.stopSocket();
}
