/**
 * @properties={typeid:35,uuid:"b465ac0f-bfd5-4c2e-bf54-add5e9a670f8",variableType:4}
 */
var const_0 = 0;

/**
 * @properties={typeid:35,uuid:"821a85b9-281a-4c72-aed1-88110371cbbf",variableType:4}
 */
var currCommentID;

/**
 * @properties={typeid:35,uuid:"f6de807c-d60c-4d33-af10-254614855d6f",variableType:4}
 */
var currCommentReplyID;

/**
 * @properties={typeid:35,uuid:"3e016322-b00b-4b72-adb2-250d1786b98a",variableType:4}
 */
var currCompanyID;

/**
 * @properties={typeid:35,uuid:"a948ba2c-3966-4370-a89c-91ac9caa8f57",variableType:93}
 */
var currDateAtMidNight;

/**
 * @properties={typeid:35,uuid:"467e423d-7754-466b-a2e3-24330991ffcf",variableType:4}
 */
var currDocumentID;

/**
 * @properties={typeid:35,uuid:"add5fc38-b6c8-4caa-a28d-4c4e4ab7a5e8",variableType:4}
 */
var currFileID;

/**
 * @properties={typeid:35,uuid:"2e5d1006-7fd0-48f8-a54f-94175537ab36",variableType:4}
 */
var currPersonID;

/**
 * @properties={typeid:35,uuid:"460504da-9dec-49a1-a8f4-659d75a3a3e5",variableType:4}
 */
var currProjectID;

/**
 * @properties={typeid:35,uuid:"e0266d7b-722a-4526-8e40-9f12b05782ee",variableType:4}
 */
var currTaskID;

/**
 * @properties={typeid:35,uuid:"e16a8d70-33e6-4573-af7f-e0a3495e458e",variableType:4}
 */
var currTenantID;

/**
 * @properties={typeid:35,uuid:"ef7abac6-2edd-4d93-9935-2cfb14dc4aa6",variableType:-4}
 */
var currUserCompanyArray;

/**
 * @properties={typeid:35,uuid:"cc633638-63a1-45e8-b630-6b53b6f0ecf7",variableType:4}
 */
var currUserCompanyID;

/**
 * @properties={typeid:35,uuid:"26d8ec02-9ff8-432b-9c27-c5bb411451a8",variableType:4}
 */
var currUserID;

/**
 * @properties={typeid:35,uuid:"deaecd6e-3814-4014-8bbd-5284979062e5",variableType:4}
 */
var currVersionID;

/**
 * @properties={typeid:35,uuid:"6c27adb6-3fa3-496a-8d79-98ba81f8a7f6"}
 */
var errorText = '';

/**
 * @properties={typeid:35,uuid:"5d38a80f-cb76-4297-a63e-d79f70f1ae52",variableType:4}
 */
var flagIsNew = 0;

/**
 * @properties={typeid:35,uuid:"bcab4941-28e1-4952-ba40-cb19489ca900"}
 */
var htmlHoverStyle = '';

/**
 * @properties={typeid:35,uuid:"3c931134-0e45-4904-89a3-b1ba6ec9b07f",variableType:4}
 */
var isAdmin = 0;

/**
 * @properties={typeid:35,uuid:"d394788a-d8ab-4aa8-950a-c01fd7a064ca",variableType:4}
 */
var isDialogOpen = 0;

/**
 * @properties={typeid:35,uuid:"ccaee3b1-a9ee-4a94-a149-e9b52bfaf84a"}
 */
var loginDisplay = '';

/**
 * @properties={typeid:35,uuid:"65e36d55-6ef6-49ce-9042-d18722655616"}
 */
var loginFullName = '';

/**
 * @properties={typeid:35,uuid:"153637ca-791f-4c87-8bb9-c6a8aa5defbc"}
 */
var loginMessageText = '';

/**
 * @properties={typeid:35,uuid:"1359536e-c6b2-413c-b0f9-ca494e0c41a0"}
 */
var loginTenantName = '';

/**
 * @properties={typeid:35,uuid:"42aa30c6-ad75-43a7-bf6b-875c87246329"}
 */
var loginUserName = '';

/**
 * @properties={typeid:35,uuid:"dd6a7ae9-62e9-4577-b871-25e1c07cb72d"}
 */
var loginUserPass = '';

/**
 * @properties={typeid:35,uuid:"34f42c8e-aa3c-42f9-9303-73a72b7dae83",variableType:-4}
 */
var SelectMutiplePeopleArray;

/**
 * @properties={typeid:35,uuid:"f82d3c17-30da-450b-b146-ce70e8c5af31",variableType:4}
 */
var tempChooseInt;

/**
 * @properties={typeid:35,uuid:"f6798ea6-b7cf-497b-999e-94d2b4c9146a",variableType:4}
 */
var tempInt = 0;

/**
 * @properties={typeid:35,uuid:"5c231fd9-0f56-4dc6-8bc4-88b4fb98874b",variableType:4}
 */
var tempInt2;

/**
 * @properties={typeid:35,uuid:"f65badcd-5fc2-487e-9d4e-9f6cfabb6414"}
 */
var tempTextDisplay = '';

/**
 * @properties={typeid:35,uuid:"b36fb20f-944c-4540-9c10-491575ec1c70"}
 */
var tempTextDisplay2 = '';

/**
 * @properties={typeid:24,uuid:"99b9383f-5529-4b74-a2e4-8c474758c121"}
 */
function ArrayIsInArray(arg0, arg1)
{
	/*
	PURPOSE: See if a value is in an array
	
	PARAMETERS: targetArray array (required)
				value any (required)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	var myArray = arg0;
	var value = arg1;
	
	if(!myArray || !value) {
		return false
	}
	else {
		//loop through array
		for ( var i = 0 ; i < myArray.length ; i++ )
		{
			if(myArray[i] == value) {
				return true;
			}
		}
		
		return false
	}
}

/**
 * @properties={typeid:24,uuid:"f27c8f89-0032-4126-a613-26b03061dce1"}
 */
function ArrayRemoveFromArray()
{
	/*
	PURPOSE: See if a value is in an array
	
	PARAMETERS: targetArray array (required)
				value any (required)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	var myArray = arguments[0]
	var value = arguments[1]
	var returnArray = new Array()
	
	if(!myArray || !value) {
		return null;
	}
	else {
		//loop through array
		for ( var i = 0 ; i < myArray.length ; i++ )
		{
			if(myArray[i] != value) {
				returnArray.push(myArray[i])
			}
		}
		
		return returnArray
	}
}

/**
 * @properties={typeid:24,uuid:"065a7049-1ecf-4a96-830e-9d4b74b86932"}
 */
function DialogCheckBeforeClose()
{
	/*
	PURPOSE: For dialogs - in case they click the "X" to close
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/23/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isDialogOpen == 1) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * @properties={typeid:24,uuid:"706245f8-3713-4f79-b3fe-b6bae08df133"}
 */
function DialogCloseCancel()
{
	/*
	PURPOSE: Used as a central method for closing a dialog with cancel
	
	PARAMETERS: string (name of window to close)
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(arguments[0])
	{
		//rollback edited record
		databaseManager.rollbackEditedRecords()
		
		//set the global so that if they click the "X" close it won't close
		globals.isDialogOpen = 0
		
		application.closeFormDialog(arguments[0])
	}
}

/**
 * @properties={typeid:24,uuid:"a0eb772d-30e9-46f6-8370-8e49a1973ef9"}
 */
function DialogCloseOk()
{
	/*
	PURPOSE: Used as a central method for closing a dialog with save
	
	PARAMETERS: string (name of window to close)
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(arguments[0])
	{
		//turn on the auto save, save, then turn off again
		databaseManager.setAutoSave(true)
		databaseManager.saveData()
		databaseManager.setAutoSave(false)
		
		//set the global so that if they click the "X" close it won't close
		globals.isDialogOpen = 0
		
		application.closeFormDialog(arguments[0])
	}
}

/**
 * @properties={typeid:24,uuid:"16082873-d29a-46c4-9ab1-68b3e34bf37f"}
 */
function GoCompany()
{
	/*
	PURPOSE: Go to this company
	
	PARAMETERS: ixcompany int (required)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currCompanyID = arguments[0];
	
	//filter the project lists
	forms.frm_company_selcompany_activeProjects.FilterProjects();
	forms.frm_company_selcompany_closedProjects.FilterProjects();
	
	if(forms.frm_submain.elements.btn_companies.bgcolor != '#666666')
	{
		forms.frm_submain.TabsDimAll();
		
		//hilight the correct tab
		forms.frm_submain.elements.btn_companies.bgcolor = '#666666'
	}
	
	//go to the selected project form
	if(forms.frm_submain.elements.tabs_main.tabIndex != 7)
	{
		forms.frm_submain.elements.tabs_main.tabIndex = 7
	}
}

/**
 * @properties={typeid:24,uuid:"48c3e7ca-ee98-4f61-acb7-5e2537ad15fc"}
 */
function GoDoc()
{
	/*
	PURPOSE: Go to this document
	
	PARAMETERS: ixdocument int (required))
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currDocumentID = arguments[0]
	
	forms.frm_submain.TabsDimAll();
	
	//hilight the correct tab
	if(forms.frm_submain.elements.btn_projects.bgcolor != '#666666') {
		forms.frm_submain.elements.btn_projects.bgcolor = '#666666'
	}
	
	//go to the selected project form
	if(forms.frm_submain.elements.tabs_main.tabIndex != 6)
	{
		forms.frm_submain.elements.tabs_main.tabIndex = 6
	}
	
	if(forms.frm_project_selproj.elements.tab_documents.bgcolor != '#ffffff')
	{
		forms.frm_project_selproj.TabsAllTransparent();
		
		forms.frm_project_selproj.elements.tab_documents.bgcolor = '#ffffff'
	}
	
	if(forms.frm_project_selproj.elements.tabs_main.tabIndex != 3)
	{
		forms.frm_project_selproj.elements.tabs_main.tabIndex = 3
	}
}

/**
 * @properties={typeid:24,uuid:"59248159-553c-42b4-902c-0f9acf967334"}
 */
function GoPerson()
{
	/*
	PURPOSE: Go to this person
	
	PARAMETERS: ixpeople int (required)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currPersonID = arguments[0]
	
	//find the right row
	forms.frm_people_selperson.controller.find()
	forms.frm_people_selperson.ixpeople = globals.currPersonID
	forms.frm_people_selperson.controller.search()
	
	if(forms.frm_submain.elements.btn_people.bgcolor != '#666666')
	{
		forms.frm_submain.TabsDimAll();
		
		//hilight the correct tab
		forms.frm_submain.elements.btn_people.bgcolor = '#666666'
	}
	
	//go to the selected project form
	if(forms.frm_submain.elements.tabs_main.tabIndex != 5)
	{
		forms.frm_submain.elements.tabs_main.tabIndex = 5
	}
}

/**
 * @properties={typeid:24,uuid:"5b727c3c-4218-4c93-806b-f6382502ff85"}
 */
function GoProject()
{
	/*
	PURPOSE: Go to a specified project
	
	PARAMETERS: ixproject int (requried)
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currProjectID = arguments[0]
	
	if(forms.frm_submain.elements.btn_projects.bgcolor != '#666666')
	{
		forms.frm_submain.TabsDimAll();
		
		//go to the selected project form
		forms.frm_submain.elements.btn_projects.bgcolor = '#666666'
	}
	
	if(forms.frm_submain.elements.tabs_main.tabIndex != 6)
	{
		forms.frm_submain.elements.tabs_main.tabIndex = 6
	}
	
	forms.frm_project_selproj.TabsAllTransparent();
	forms.frm_project_selproj.elements.tab_overview.bgcolor = '#ffffff'
	
	if(forms.frm_project_selproj.elements.tabs_main.tabIndex != 1)
	{
		forms.frm_project_selproj.elements.tabs_main.tabIndex = 1
	}
}

/**
 * @properties={typeid:24,uuid:"512a7ff5-af92-4553-8536-1bb7428421a3"}
 */
function GoTask()
{
	/*
	PURPOSE: Go to this task
	
	PARAMETERS: ixtask int (required)
				ixproject int (optional - web client only)
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currTaskID = arguments[0]
	
	forms.frm_submain.TabsDimAll();
	
	//hilight the correct tab
	forms.frm_submain.elements.btn_projects.bgcolor = '#666666'
	
	//go to the selected project form
	if(forms.frm_submain.elements.tabs_main.tabIndex != 6)
	{
		forms.frm_submain.elements.tabs_main.tabIndex = 6
	}
	
	if(forms.frm_project_selproj.elements.tab_tasks.bgcolor != '#ffffff')
	{
		forms.frm_project_selproj.TabsAllTransparent();
		
		forms.frm_project_selproj.elements.tab_tasks.bgcolor = '#ffffff'
	}
	
	if(forms.frm_project_selproj.elements.tabs_main.tabIndex != 6)
	{
		forms.frm_project_selproj.elements.tabs_main.tabIndex = 6
	}
}

/**
 * @properties={typeid:24,uuid:"375f1872-1b92-4ad0-a198-7cde9a5059f9"}
 */
function Logout()
{
	forms.frm_main.controller.show()
	if(application.getApplicationType() == 5) //web client
	{
		application.exit()
	}
}

/**
 * @properties={typeid:24,uuid:"365f2042-3634-46a9-aad8-417fdf2ef9f6"}
 */
function NewRecordAction()
{
	/*
	PURPOSE: Create a new tracking action
	
	PARAMETERS: actionType int (required) //0 = insert, 1= update, 2 = delete
				actionText text (required) //describes what the action is
				ixproject int (optional)
				ixtask int (optional)
				ixcompany int (optional)
				
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	var actionType = arguments[0]
	var actionText = arguments[1]
	var projectID = arguments[2]
	var taskID = arguments[3]
	var companyID = arguments[4]
	
	forms.z_tbl_action.controller.newRecord(true)
	forms.z_tbl_action.action_text = actionText
	forms.z_tbl_action.action_type = actionType
	forms.z_tbl_action.dt_created = new Date()
	forms.z_tbl_action.ixcompany = companyID
	forms.z_tbl_action.ixperson = globals.currUserID
	forms.z_tbl_action.ixproject = projectID
	forms.z_tbl_action.ixtask = taskID
	//forms.z_tbl_action.ixtenant = globals.currTenantID
}

/**
 * @properties={typeid:24,uuid:"4dfee34c-2b03-43f8-bc49-e4c7141265e0"}
 */
function NewRecordBug()
{
	/*
	PURPOSE: Create a new bug
	
	PARAMETERS: setTempInt int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	if((arguments[0]) && (typeof arguments[0] != 'object'))
	{
		//set flag so we assign to current person
		globals.tempInt = 1
	}
	
	//new record
	forms.dlg_bug.controller.newRecord(true)
	forms.dlg_bug.ixcreatedperson = globals.currUserID
	forms.dlg_bug.ixmodifiedperson = null
	forms.dlg_bug.ixpersonassigned = null
	//forms.dlg_bug.ixtenant = globals.currTenantID
	forms.dlg_bug.ixproject = globals.currProjectID
	forms.dlg_bug.label = 1 //bug
	forms.dlg_bug.status = 0 //undefined
	
	//setup the "assigned to" dialog
	globals.SetUpDynamicValueLists();
	
	globals.ShowDialogBug(i18n.getI18NMessage('lbl.newBug'), null, 1);
}

/**
 * @properties={typeid:24,uuid:"0aab2af3-aea9-4158-bbb0-15d7e72a848c"}
 */
function NewRecordCompany(arg0)
{
	/*
	PURPOSE: Create new company
	
	PARAMETERS: setTempInt int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		if((arg0) && (typeof arg0 != 'object'))
		{
			//set flag so we assign to current person
			globals.tempInt = 1;
		}
		
		//new record
		forms.dlg_company.controller.newRecord(true);
		forms.dlg_company.ixcreatedperson = globals.currUserID;
		forms.dlg_company.dt_created = new Date();
		forms.dlg_company.ixmodifiedperson = null;
		forms.dlg_company.dt_modififed = null;
		forms.dlg_company.category = 0;
		
		globals.ShowDialogCompany(i18n.getI18NMessage('lbl.newCompany'), null, 1);
	}
	else
	{
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noCreateAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
}

/**
 * @properties={typeid:24,uuid:"1be9e30f-b942-4019-94ff-de9b9eba0c36"}
 */
function NewRecordDocument(arg0)
{
	/*
	PURPOSE: Create new document
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	if((arg0) && (typeof arg0 != 'object'))
	{
		//set flag so we assign to current person
		globals.tempInt = 1;
	}
	
	//new record
	forms.dlg_document.controller.newRecord(true);
	forms.dlg_document.ixcreatedperson = globals.currUserID;
	forms.dlg_document.dt_created = new Date();
	forms.dlg_document.ixmodifiedperson = null;
	forms.dlg_document.dt_modififed = null;
	forms.dlg_document.ixproject = globals.currProjectID;
	//forms.dlg_document.ixtenant = globals.currTenantID
	
	globals.ShowDialogDocument(i18n.getI18NMessage('lbl.newDocument'),null,1);
}

/**
 * @properties={typeid:24,uuid:"71619be1-297f-46e5-9c69-f12e078ab68e"}
 */
function NewRecordPerson(arg0)
{
	/*
	PURPOSE: Create new person
	
	PARAMETERS: setTempInt int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		if((arg0) && (typeof arg0 != 'object'))
		{
			//set flag so we assign to current company
			globals.tempInt = 1
		}
		
		//new record
		forms.dlg_profile.controller.newRecord(true)
		forms.dlg_profile.dt_created = new Date()
		forms.dlg_profile.ix_personcreated = globals.currUserID
		forms.dlg_profile.profile = 0
		
		globals.ShowDialogPerson(i18n.getI18NMessage('lbl.newPerson'), null, 1);
	}
	else
	{
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noCreateAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
}

/**
 * @properties={typeid:24,uuid:"929a9b5d-a3c6-4d26-951d-9c1cfa07dadd"}
 */
function NewRecordProject(arg0, arg1)
{
	/*
	PURPOSE: Create new project
	
	PARAMETERS: setTempInt int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		if((arg0) && (typeof arg0 != 'object'))
		{
			//set flag so we assign to current person
			globals.tempInt = 1
		}
		
		var isNew = arg1;
		
		if(isNew) {
			globals.flagIsNew = 1;
		}
		else {
			globals.flagIsNew = 0;
		}
		
		//new record
		forms.dlg_project.controller.newRecord(true);
		forms.dlg_project.dt_created = new Date();
		forms.dlg_project.ixcreatedperson = globals.currUserID;
		forms.dlg_project.status = 1; //open
		globals.ShowDialogProject(i18n.getI18NMessage('lbl.newProject'), null, 1);
	}
	else
	{
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noCreateAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
}

/**
 * @properties={typeid:24,uuid:"4c1833d1-7cbe-4858-a030-27990abc3d40"}
 */
function NewRecordTask()
{
	/*
	PURPOSE: Create project linked to a specific person
	
	PARAMETERS: setTempInt int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	if((arguments[0]) && (typeof arguments[0] != 'object'))
	{
		//set flag so we assign to current person
		globals.tempInt = 1
	}
	
	//new record
	forms.dlg_task.controller.newRecord(true)
	forms.dlg_task.ixcreatedperson = globals.currUserID
	forms.dlg_task.ixmodifiedperson = null
	forms.dlg_task.ixpersonassigned = 0
	forms.dlg_task.ixproject = globals.currProjectID
	forms.dlg_task.ixtenant = globals.currTenantID
	forms.dlg_task.label = 2 //task
	forms.dlg_task.status = 0 //undefined
	
	//setup the "assigned to" dialog
	globals.SetUpDynamicValueLists();
	
	globals.ShowDialogTask(i18n.getI18NMessage('lbl.newTask'), null, 1);
}

/**
 * @properties={typeid:24,uuid:"d4c4d6e7-f183-4e8a-b0cd-1578990b5b0d"}
 */
function NewRecordVersion()
{
	/*
	PURPOSE: Create new version
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	if((arg0) && (typeof arg0 != 'object'))
	{
		//set flag so we assign to current person
		globals.tempInt = 1;
	}
	
	//new record
	forms.dlg_version.controller.newRecord(true);
	forms.dlg_version.ixcreatedperson = globals.currUserID;
	forms.dlg_version.dt_created = new Date();
	forms.dlg_version.ixmodifiedperson = null;
	forms.dlg_version.dt_modififed = null;
	forms.dlg_version.ixproject = globals.currProjectID;
	//forms.dlg_version.ixtenant = globals.currTenantID
	forms.dlg_version.status = 0;
	forms.dlg_version.release_as = 0;
	
	globals.ShowDialogVersion(i18n.getI18NMessage('lbl.newVersion'),null,1);
	
}

/**
 * @properties={typeid:24,uuid:"fce97a92-dfb2-4968-9eea-9da514c6a25a"}
 */
function OpenUrl(arg0)
{
	var url = arg0;
	if(url)
	{
		application.showURL(url);
	}
}

/**
 * @properties={typeid:24,uuid:"9c5f0766-0e88-4eb5-8ba1-965dc433f038"}
 */
function ReturnSqlWhereQuestionMarks(arg0)
{
	/*
	PURPOSE: Used for SQL queries with an IN clause
	
	PARAMETERS: whatArray array (required)
	OUTPUTS: NONE
	
	CREATED: 04/22/08 BC
	MODIFIED: NONE
	********************************************/
	
	var myArray = arg0;
	var output = null;
	
	if(myArray && myArray.length > 0) {
		for ( var i = 0 ; i < myArray.length ; i++ )
		{
			if(!output){
				output = '?';
			}
			else {
				output += ', ?';
			}
		}
	}
	
	return output;
}

/**
 * @properties={typeid:24,uuid:"5c1bc407-6ad1-48a4-a58a-3e5705a88e08"}
 */
function SetUpDynamicValueLists()
{
	/*
	PURPOSE: Setup the dynamic "assigned to" value list for tasks
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	//PersonAssignedTo - based on current project
	if(!globals.currProjectID) // there is no project ID
	{
		//Get all values from a custom or database type value list as dataset (with columns displayValue,realValue)
		//Note:see databaseManager.JSDataSet for full details of dataset
		var dataset = application.getValueListItems('PersonAssignedToDynamic');
		var displayValues = dataset.getColumnAsArray(1)
		var realValues = dataset.getColumnAsArray(2)
	}
	else
	{
		//there is a current project id get the people assigned to the current task
		var realValues = databaseManager.getFoundSetDataProviderAsArray(gcurrproject_to_project_people, 'ixpeople');
		var displayValues = new Array()
		
		//loop through and get the person's name from the other value list
		for ( var i = 0 ; i < realValues.length ; i++ )
		{
			displayValues[i] = application.getValueListDisplayValue('PersonAssignedToDynamic', realValues[i])
		}
	}
	
	//add "unassigned" to the top of the list
	displayValues.unshift('<unassigned>')
	realValues.unshift(0)
	
	application.setValueListItems('PersonAssignedTo', displayValues, realValues)
	
	
	//task "resolved in" - list of hard coded + version list
	//reset the list
	dataset = application.getValueListItems('TaskResolvedInHardCoded');
	var displayValues = dataset.getColumnAsArray(1)
	var realValues = dataset.getColumnAsArray(2)
	
	//get the list of items
	dataset = application.getValueListItems('VersionListDynamic');
	
	if(dataset.getMaxRowIndex() > 0) {
		var displayValues2 = dataset.getColumnAsArray(1)
		var realValues2 = dataset.getColumnAsArray(2)
		application.setValueListItems('TaskResolvedIn', displayValues.concat(displayValues2), realValues.concat(realValues2))
	}
	else
	{
		application.setValueListItems('TaskResolvedIn', displayValues, realValues)
	}
}

/**
 * @properties={typeid:24,uuid:"bc2505b2-97d7-46cd-a2d7-21b35996f097"}
 */
function SetupInitialSorts()
{
	/*
	PURPOSE: At startup - do all the default sorting of the lists
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	//task list - your tasks
	forms.lst_task.elements.label_asc.visible = false
	forms.lst_task.BtnSort(null,'initial');
	
	//people overview list sort
	forms.frm_people_selperson_overview_personProjects.elements.project_name_asc.visible = false
	forms.frm_people_selperson_overview_personProjects.BtnSort(null, 'initial');
	
	//task overview list sort
	forms.frm_people_selperson_overview_personTasks.elements.project_name_asc.visible = false
	forms.frm_people_selperson_overview_personTasks.BtnSort(null, 'initial');
	
	//project list sort
	forms.frm_people_selperson_projects_projList.elements.project_name_asc.visible = false
	forms.frm_people_selperson_projects_projList.BtnSort(null, 'initial');
	
	//project list sort
	forms.frm_people_selperson_projects_projList2.elements.project_name_asc.visible = false
	forms.frm_people_selperson_projects_projList2.BtnSort(null, 'initial');
	
	//task list sort
	forms.frm_people_selperson_tasks_taskList.elements.project_name_asc.visible = false
	forms.frm_people_selperson_tasks_taskList.BtnSort(null, 'initial');
	
	//home - recent activity
	forms.lst_actions.elements.date_desc.visible = false
	forms.lst_actions.BtnSort(null, 'initial');
	
	//company list
	forms.lst_company.elements.company_name_asc.visible = false
	forms.lst_company.BtnSort(null, 'initial');
	
	//project overview actions
	forms.frm_project_selroj_overview_actions.elements.date_desc.visible = false
	forms.frm_project_selroj_overview_actions.BtnSort(null, 'initial');
	
	//project overview task list
	forms.frm_project_selproj_task_list.elements.task_asc.visible = false
	forms.frm_project_selproj_task_list.BtnSort(null, 'initial');
	
	//project overview files
	forms.frm_project_selproj_files_filelist.elements.file_name_asc.visible = false
	forms.frm_project_selproj_files_filelist.BtnSort(null, 'initial');
}

/**
 * @properties={typeid:24,uuid:"2cbf5950-d22b-4ec4-a9cf-5775ffa22515"}
 */
function SetUpInitialTabHilights()
{
	/*
	PURPOSE: Sets the "active" tab on each form
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/18/08 BC
	MODIFIED:5/30/08 JM
	
	********************************************/
	
	//forms.frm_submain.BtnHome();
	forms.frm_home.TabHome();
	forms.frm_project.TabActive();
	forms.frm_people_selperson.TabOverview();
	forms.frm_project_selproj.TabOverview();
}

/**
 * @properties={typeid:24,uuid:"dd9c14e8-df5f-4553-9b95-7696c9a29ea0"}
 */
function ShowDialogBug()
{
	/*
	PURPOSE: Shows the dialog for editing/adding a bug
	
	PARAMETERS: i18n string (dialog title)
				taskID int (optional)
				isNewFlag int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var bugID = arguments[1]
	var isNew = arguments[2]
	
	if(isNew) {
		globals.flagIsNew = 1
	}
	else {
		globals.flagIsNew = 0
	}
	
	if(bugID)
	{
		//find the task
		forms.dlg_bug.controller.find()
		forms.dlg_bug.ixtask = bugID
		forms.dlg_bug.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editBug')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_bug, -1,-1,-1,-1, title, false, false, 'bug', true)
}

/**
 * @properties={typeid:24,uuid:"c9516076-7de0-463a-8889-62970b07aecf"}
 */
function ShowDialogComment()
{
	/*
	PURPOSE: Shows the dialog for editing profile/adding a person
	
	PARAMETERS: i18n string (dialog title) OPTIONAL
				commentID int (optional)
				replyID int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var commentID = arguments[1]
	var replyTaskID = arguments[2]
	var isNew = arguments[3]
	
	if(isNew) {
		globals.flagIsNew = 1
	}
	else {
		globals.flagIsNew = 0
	}
	
	if(commentID)
	{
		forms.dlg_comment.controller.find()
		forms.dlg_comment.ixcomment = commentID
		forms.dlg_comment.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editComment')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_comment, -1,-1,-1,-1, title, false, false, 'comment', true)
}

/**
 * @properties={typeid:24,uuid:"ec8775cd-30ea-4047-85ec-769e03bdd39e"}
 */
function ShowDialogCommentRead()
{
	/*
	PURPOSE: Shows the dialog for editing profile/adding a person
	
	PARAMETERS: i18n string (dialog title) OPTIONAL
				commentID int OPTIONAL
				replyID in OPTIONAL
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var commentID = arguments[1]
	
	if(commentID)
	{
		forms.dlg_comment_read.controller.find()
		forms.dlg_comment_read.ixcomment = commentID
		forms.dlg_comment_read.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.viewComment')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_comment_read, -1,-1,-1,-1, title, false, false, 'comment_read', true)
}

/**
 * @properties={typeid:24,uuid:"04f1a065-2aab-47d5-8c53-0b4961965711"}
 */
function ShowDialogCompany()
{
	/*
	PURPOSE: Shows the dialog for editing/adding a company
	
	PARAMETERS: i18n string (dialog title)
				companyID int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var companyID = arguments[1]
	var isNew = arguments[2]
	
	if(isNew) {
		globals.flagIsNew = 1
	}
	else {
		globals.flagIsNew = 0
	}
	
	if(companyID)
	{
		//find company
		forms.dlg_company.controller.find()
		forms.dlg_company.ixcompany = companyID
		forms.dlg_company.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editCompany')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_company, -1,-1,-1,-1, title, false, false, 'company', true)
}

/**
 * @properties={typeid:24,uuid:"00a31c19-6d69-497e-912a-3652eb9e2c27"}
 */
function ShowDialogCompanyChooser(arg0)
{
	/*
	PURPOSE: Shows the dialog for choosing a company
	
	PARAMETERS: i18n string (dialog title)
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arg0;
	globals.tempTextDisplay = null
	globals.tempChooseInt = null
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.chooseCompany')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_chooseCompany, -1,-1,-1,-1, title, false, false, 'companyChooser', true)
}

/**
 * @properties={typeid:24,uuid:"c713fda7-290b-4bcc-8f35-a2695630d199"}
 */
function ShowDialogDocument(arg0, arg1, arg2)
{
	/*
	PURPOSE: Shows the dialog for editing profile/adding a document
	
	PARAMETERS: i18n string (dialog title) OPTIONAL
				ixdocument int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arg0;
	var docID = arg1;
	var isNew = arg2;
	
	if(isNew) {
		globals.flagIsNew = 1;
	}
	else {
		globals.flagIsNew = 0;
	}
	
	if(docID) { //find the doc
		forms.dlg_document.controller.find();
		forms.dlg_document.ixdocument = docID;
		forms.dlg_document.controller.search();
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editDocument');
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1;
	
	application.showFormInDialog(forms.dlg_document, -1,-1,-1,-1, title, false, false, 'document', true);
}

/**
 * @properties={typeid:24,uuid:"40c4db06-ba86-44e1-95e1-782a41d82034"}
 */
function ShowDialogFile()
{
	/*
	PURPOSE: Shows the dialog for editing profile/adding a person
	
	PARAMETERS: i18n string (dialog title) OPTIONAL
				fileID int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var fileID = arguments[1]
	var isNew = arguments[2]
	
	if(isNew) {
		globals.flagIsNew = 1
	}
	else {
		globals.flagIsNew = 0
	}
	
	if(fileID)
	{
		forms.dlg_file.controller.find()
		forms.dlg_file.ixfile = fileID
		forms.dlg_file.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editFile')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_file, -1,-1,-1,-1, title, false, false, 'file', true)
}

/**
 * @properties={typeid:24,uuid:"4cb71e76-6b35-41ac-8bef-80e6c084a83b"}
 */
function ShowDialogPerson()
{
	/*
	PURPOSE: Shows the dialog for editing profile/adding a person
	
	PARAMETERS: i18n string (dialog title) OPTIONAL
				personID int OPTIONAL
				flagIsNew int OPTIONAL
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
	
		var title = arguments[0]
		var personID = arguments[1]
		var isNew = arguments[2]
		
		if(isNew) {
			globals.flagIsNew = 1
		}
		else {
			globals.flagIsNew = 0
		}
		
		if(personID)
		{
			forms.dlg_profile.controller.find()
			forms.dlg_profile.ixpeople = personID
			forms.dlg_profile.controller.search()
		}
		
		if(!title) //no title was specified
		{
			title = i18n.getI18NMessage('lbl.editProfile')
		}
		
		//set the global so that if they click the "X" close it won't close
		globals.isDialogOpen = 1
		
		application.showFormInDialog(forms.dlg_profile, -1,-1,-1,-1, title, false, false, 'profile', true)
	}
	else
	{
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noCreateAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
}

/**
 * @properties={typeid:24,uuid:"06538b17-a55f-4472-a50e-ce6d4bfa7df2"}
 */
function ShowDialogPersonChooser(arg0, arg1)
{
	/*
	PURPOSE: Shows the dialog for choosing a person
	
	PARAMETERS: i18n string (dialog title)
				isProject int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arg0;
	var isProject = arg1;
	
	
	if(globals.isAdmin)
	{
	
		globals.tempInt2 = isProject
		
		globals.tempTextDisplay = null
		globals.tempChooseInt = null
		
		if(!title && !isProject) //no title was specified and not a project
		{
			title = i18n.getI18NMessage('lbl.assignPersonToCompany')
		}
		else if(!title && isProject) //no title was specified and IS a project
		{
			title = i18n.getI18NMessage('lbl.assignPersonToProject')
		}
		
		//set the global so that if they click the "X" close it won't close
		globals.isDialogOpen = 1
		
		application.showFormInDialog(forms.dlg_choosePerson, -1,-1,-1,-1, title, false, false, 'personChooser', true)
	}
	else
	{
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noCreateAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
	
}

/**
 * @properties={typeid:24,uuid:"be62ff44-5a02-496a-8937-43debbdcaa64"}
 */
function ShowDialogProject()
{
	/*
	PURPOSE: Shows the dialog for editing/adding a project
	
	PARAMETERS: i18n string (dialog title)
				projectID int OPTIONAL
				flagIsNew int OPTIONAL
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var projectID = arguments[1]
	var isNew = arguments[2]
	
	if(isNew) {
		globals.flagIsNew = 1
	}
	else {
		globals.flagIsNew = 0
	}
	
	if(projectID)
	{
		//find the project
		forms.dlg_project.controller.find()
		forms.dlg_project.ixproject = projectID
		forms.dlg_project.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editProject')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_project, -1,-1,-1,-1, title, false, false, 'project', true)
}

/**
 * @properties={typeid:24,uuid:"09c48f66-efbc-4043-88f7-862c16a17d06"}
 */
function ShowDialogTask()
{
	/*
	PURPOSE: Shows the dialog for editing/adding a project
	
	PARAMETERS: i18n string (dialog title)
				taskID int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0]
	var taskID = arguments[1]
	var isNew = arguments[2]
	
	if(isNew) {
		globals.flagIsNew = 1
	}
	else {
		globals.flagIsNew = 0
	}
	
	if(taskID)
	{
		//find the task
		forms.dlg_task.controller.find()
		forms.dlg_task.ixtask = taskID
		forms.dlg_task.controller.search()
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editTask')
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1
	
	application.showFormInDialog(forms.dlg_task, -1,-1,-1,-1, title, false, false, 'task', true)
}

/**
 * @properties={typeid:24,uuid:"afa2b88a-eae9-4d49-9a48-07df33f53151"}
 */
function ShowDialogVersion()
{
	/*
	PURPOSE: Shows the dialog for editing profile/adding a version
	
	PARAMETERS: i18n string (dialog title) OPTIONAL
				ixversion int (optional)
				flagIsNew int (optional)
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	var title = arguments[0];
	var versID = arguments[1];
	var isNew = arguments[2];
	
	if(isNew) {
		globals.flagIsNew = 1;
	}
	else {
		globals.flagIsNew = 0;
	}
	
	if(versID) { //find the doc
		forms.dlg_version.controller.find();
		forms.dlg_version.ixversion = versID;
		forms.dlg_version.controller.search();
	}
	
	if(!title) //no title was specified
	{
		title = i18n.getI18NMessage('lbl.editVersion');
	}
	
	//set the global so that if they click the "X" close it won't close
	globals.isDialogOpen = 1;
	
	application.showFormInDialog(forms.dlg_version, -1,-1,-1,-1, title, false, false, 'version', true);
}

/**
 * @properties={typeid:24,uuid:"00dce958-0406-434b-9075-e65cf2b971b1"}
 */
function SolutionAfterLogin()
{
	/*
	PURPOSE: This method runs after login
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/08/08 BC
	MODIFIED: NONE
	********************************************/
	//set global for today at midnight
	globals.currDateAtMidNight = new Date();
	
	//setup all the initial sorts
	globals.SetupInitialSorts();
	
	//set up initial hilights on the tabs
	globals.SetUpInitialTabHilights();
	
	//setup dyanamic lists
	globals.SetUpDynamicValueLists();
	
	//set the initial view for the homne screen
	forms.frm_submain.BtnHome();
}

/**
 * @properties={typeid:24,uuid:"41a877d1-f337-46ea-a133-fde51bd337f8"}
 */
function SolutionClose()
{
/*
PURPOSE: This method runs when the solution is closed

PARAMETERS: NONE
OUTPUTS: NONE

CREATED: 04/08/08 BC
MODIFIED: NONE
********************************************/

//placeholder for code that will be run when the solution is closed

}

/**
 * @properties={typeid:24,uuid:"10aa7c8f-6f99-4741-b0e7-131c1068c488"}
 */
function SolutionOnError()
{
	/*
	PURPOSE: This method runs when the solution is opened
	
	PARAMETERS: incoming error (passed by Servoy)
	OUTPUTS: NONE
	
	CREATED: 04/08/08 BC
	MODIFIED: NONE
	********************************************/
	
	//this sample script should be attached to onError method handler in the solution settings
	var e = arguments[0];
	application.output("Exception Object: "+e)
	application.output("MSG: "+e.getMessage())
	if (e.isServoyException)
	{
		application.output("is a ServoyException")
		application.output("Errorcode: "+e.getErrorCode())
	  if (e.getErrorCode() == ServoyException.SAVE_FAILED)
	  {
		  plugins.dialogs.showErrorDialog( "Error",  "It seems you did not fill in a required field", 'OK');
		  
		  //Get the failed records after a save
		  var array = databaseManager.getFailedRecords()
		  for( var i = 0 ; i < array.length ; i++ )
		  {
			  var record = array[i];
			  application.output(record.exception);
			  if (record.exception.isDataException)
			  {
				  application.output("SQL: "+record.exception.getSQL())
				  application.output("SQLState: "+record.exception.getSQLState())
				  application.output("VendorErrorCode: "+record.exception.getVendorErrorCode())
			  }
		  }
	  }
	}
}

/**
 * @properties={typeid:24,uuid:"a8931a3d-1088-4d3d-a8ac-ddb981627346"}
 */
function SolutionOpen()
{
	/*
	PURPOSE: This method runs when the solution is opened
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/08/08 BC
	MODIFIED: NONE
	********************************************/
	
	//set the global to contain the style information for the rollovers in lists in the web
	globals.htmlHoverStyle = '<html><head><style type="text/css">a:link{color:#000000;text-decoration:none;}' +
	'a:visited{color:#000000;text-decoration:none;} a:active{color:#000000;text-decoration:none;}' +
	'a:hover{color:blue;text-decoration:underline;}smtext{font-size: 9pt;} xsmtext{font-size: 8pt;}</style></head><body>'
	
	//comment out - or delete the line below to supress the opening dialog
	application.showFormInDialog(forms._welcome,-1,-1,-1,-1,'Welcome',false,false,"welcome",true)
}

/**
 * @properties={typeid:24,uuid:"524cbdd9-11dd-4e00-ba1f-fd02513bd223"}
 */
function SortColumns()
{
	/*
	PURPOSE: Master sorting routine show the graphics as well
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	
	SPECIAL THANKS to David Workman of http://www.servoymagazine.com
	********************************************/
	
	var sortImages = arguments[0];
	var formName = arguments[1];
	var columnNum = arguments[2];
	
	var displayImages = new Array();
	var tempString = new Array();
	
	for ( var i = 0 ; i < sortImages.length ; i++ )
	{
	    tempString = sortImages[i].split(':::');
	    displayImages[i] = tempString[0];
	}
	
	//sort id column
	var columnAsc = sortImages[columnNum - 1].split(':::');
	var columnDesc = sortImages[columnNum].split(':::');
	
	if (forms[formName].elements[columnAsc[0]].visible == false)
	{
	    forms[formName].controller.sort(columnAsc[1]);
	
	    for ( var j = 0 ; j < displayImages.length ; j++ )
	    {
	        forms[formName].elements[displayImages[j]].visible = false
	    }
	
	    forms[formName].elements[columnAsc[0]].visible = true;
	}
	else
	{
	    forms[formName].controller.sort(columnDesc[1]);
	
	    for ( var j = 0 ; j < displayImages.length ; j++ )
	    {
	        forms[formName].elements[displayImages[j]].visible = false
	    }
	
	    forms[formName].elements[columnDesc[0]].visible = true;
	} 
}

/**
 * @properties={typeid:24,uuid:"63fe8531-1a09-4de8-850d-3752e44eb900"}
 */
function ValidateUserName()
{
	var userName = arguments[0]
	
	var query = 'SELECT login_name FROM tbl_people WHERE login_name = ?'
	var args = new Array();
	args[0] = userName
	var dataset = databaseManager.getDataSetByQuery(currentcontroller.getServerName(), query, args, 1);
	
	return dataset.getMaxRowIndex() == 0
}

/**
 * @properties={typeid:24,uuid:"cb70433b-09b3-48d3-8a02-9d9304f18bdb"}
 */
function GoVersion(arg0)
{
	var ixvers = arg0;
	if (application.getApplicationType() == 5)
	{
		globals.currVersionID = arg0;
	}
	else
	{
		globals.currVersionID = ixvers;
	}
}
