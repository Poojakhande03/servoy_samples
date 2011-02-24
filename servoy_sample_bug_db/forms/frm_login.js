/**
 * @properties={typeid:24,uuid:"5164f319-b02a-487f-a3a4-2571d0770885"}
 */
function BtnNewUser()
{
	//show the tenant fields
	SubShowNewTenantFields(true);
}

/**
 * @properties={typeid:24,uuid:"d97fbac3-8637-483c-af14-e8c7f4496d5e"}
 */
function BtnOk()
{
	if(elements.fld_companyName.visible)
	{
		var isValidUser = globals.ValidateUserName(globals.loginUserName);
		if(isValidUser)
		{
			//create new tenant, company, people, and people_company records
			SubNewTenant();

			//attempt to login
			SubLogin();
		}
		else
		{
			globals.errorText = '<html><center><font color="red"><b>ERROR!</b> That username is already in use.  Please try another username.</font></center></html>'
		}
	}
	else
	{
		//existing user.  attempt to authenticate
		SubLogin();
	}
}

/**
 * @properties={typeid:24,uuid:"8f649112-0dca-49b5-80df-f5b7ae0523ec"}
 */
function OnShow()
{
	/*
	PURPOSE: This method runs when the main login form is shown
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/08/08 BC
	MODIFIED: NONE
	********************************************/
	
	//turn off auto-save by default (for dialogs, etc.)
	databaseManager.setAutoSave(false)
	
	//TESTING
	//globals.SolutionOpen();
	
	//empty out globals (mainly just when testing)
	globals.loginUserName = null
	globals.loginUserPass = null
	globals.errorText = null
	
	//initialize all the global variables
	globals.loginMessageText = i18n.getI18NMessage('msg.bugTrackWelcome')
	
	elements.fld_companyName.visible = false
	elements.fld_fullName.visible = false
	
	//put cursor in first field
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"82ac19c0-f610-4751-bb1f-d4edfb2742e0"}
 */
function SubLogin()
{
	globals.errorText = null;
	globals.tempInt = 0
	var server = databaseManager.getServerNames();
	var query;
	
	//search for the user
	query = 'SELECT tbl_tenant.tenant_id, tbl_people.ixpeople, tbl_people.profile, tbl_tenant.is_master_tenant, tbl_company.category, tbl_company.ixcompany \
				 FROM tbl_tenant, tbl_company, tbl_people, tbl_people_company \
				 WHERE tbl_tenant.tenant_id = tbl_company.ixtenant \
				 AND tbl_people_company.ixpeople = tbl_people.ixpeople \
				 AND tbl_company.ixcompany = tbl_people_company.ixcompany \
				 AND tbl_people.login_name = ? \
				 AND tbl_people.login_pw = ? \
				 AND tbl_people.account_active = ? \
				 AND tbl_tenant.is_active = ?'
				
	var argm = new Array();
	argm[0] = globals.loginUserName;
	argm[1] = globals.loginUserPass;
	argm[2] = 1;
	argm[3] = 1;
	
//	if ((argm[0] == '') || (argm[0] == null) || (argm[1] == '') || (argm[1] == null)) {
//		globals.loginUserName = 'admin';
//		globals.loginUserPass = 'admin';
//	}
	
	var dataset = databaseManager.getDataSetByQuery('bug_db', query, argm, 1);
	
	var found = dataset.getMaxRowIndex()
	
	//see if they're just not authorized
	if(found < 1)
	{
		//set the error message
		globals.errorText = i18n.getI18NMessage('msg.loginError')
		
		//try finding without active flag
		query = 'SELECT tbl_tenant.tenant_id, tbl_tenant.is_master_tenant \
					 FROM tbl_tenant, tbl_company, tbl_people, tbl_people_company \
					 WHERE tbl_tenant.tenant_id = tbl_company.ixtenant \
					 AND tbl_company.ixcompany = tbl_people_company.ixcompany \
					 AND tbl_people_company.ixpeople = tbl_people.ixpeople \
					 AND tbl_people.login_name = ? \
					 AND tbl_people.login_pw = ? \
					 AND (tbl_people.account_active = ? \
					 OR tbl_tenant.is_active = ?)'
					
		var argn = new Array();
		argn[0] = globals.loginUserName;
		argn[1] = globals.loginUserPass;
		argn[2] = 0;
		argn[3] = 0;
		dataset = databaseManager.getDataSetByQuery('bug_db', query, argn, 1);
		
		var found2 = dataset.getMaxRowIndex()
		if(found2 == 1)
		{
			//there were disabled - so let them know in the error
			globals.errorText = i18n.getI18NMessage('msg.notAuthorized')
		}
		
		//user or password not found - so show error
		controller.focusFirstField()
	}
	else
	{
		//correct password.  begin to log them in
		
		//setup globals
		globals.currTenantID = dataset.getValue(1, 1) //ixtenant
		globals.currUserID = dataset.getValue(1, 2) //ixpeople
		var profile = dataset.getValue(1, 3) //profile
		if(profile == 1) globals.isAdmin = 1;
		
		//filter tables by tenant
		var isMasterAdmin = dataset.getValue(1, 4)
		if(isMasterAdmin)
			var success = true
		else
			var success = databaseManager.addTableFilterParam('bug_db', null, 'ixtenant', '=', globals.currTenantID)
		
		if(success)
		{
			//filter tables by company
			var isCompanyAdmin = dataset.getValue(1, 5) == 1
			if(!isCompanyAdmin && !isMasterAdmin)
			{
				var companyID = dataset.getValue(1, 6)
				//only show the companies that the user is part of
				success = databaseManager.addTableFilterParam('bug_db', null, 'ixcompany', 'IN', "SELECT ixcompany FROM tbl_people_company WHERE ixpeople = '" + globals.currUserID + "'")
				//only show people that are part of the sampe company the loged in user is part of
				success = databaseManager.addTableFilterParam('bug_db', 'tbl_people', 'ixpeople', 'IN', "SELECT p1.ixpeople FROM tbl_people p1,  tbl_people_company pc1 WHERE pc1.ixpeople = p1.ixpeople AND pc1.ixcompany IN (SELECT pc2.ixcompany FROM tbl_people_company pc2 WHERE pc2.ixpeople = '" + 	globals.currUserID + "')")
			}
			
			//continue to login
			globals.SolutionAfterLogin();
			
			globals.currUserCompanyArray = databaseManager.getFoundSetDataProviderAsArray(gcurruser_to_people_company.foundset, 'ixcompany')
			gcurruser_to_people.last_login = new Date()
			globals.loginDisplay = '<html><body><align="right">Logged in as <b>' + gcurruser_to_people.name_full + '</b></align></body></html>'
		
			
			forms.frm_people.LoadPeople();
				
			//go to the submain form
			forms.frm_main.elements.tabs_main.tabIndex = 2
		}
		else
		{
			//Stop the login process.  Could be showing incorrect data to our users
			globals.errorText = "Error filtering records. Unable to login."
		}
	}
}

/**
 * @properties={typeid:24,uuid:"77ff70c1-769a-46b2-8523-8de80a9b4343"}
 */
function SubNewTenant()
{
	var server = databaseManager.getServerNames();
	if(!globals.loginUserName || !globals.loginUserPass || !globals.loginTenantName || !globals.loginFullName)
	{
		globals.errorText = "All fields must be filled out."
		return
	}
	else
	{
		//add a tenant record
		var tenantFS = databaseManager.getFoundSet('bug_db', 'tbl_tenant')
		tenantFS.clear()
		var tenantRec = tenantFS.getRecord(tenantFS.newRecord(true, true))
		tenantRec.tenant_name = globals.loginTenantName
		globals.currTenantID = tenantRec.tenant_id
		tenantRec.ixtenant = tenantRec.tenant_id
			tenantRec.is_active = 1;
		
		//add a company record
		var companyFS = databaseManager.getFoundSet('bug_db', 'tbl_company')
		var companyRec = companyFS.getRecord(companyFS.newRecord(true, true))
		companyFS.clear()
		companyRec.company_name = globals.loginTenantName
		companyRec.category = 1 //need to make it admin
			companyRec.ixtenant = globals.currTenantID;
				
		globals.currCompanyID = companyRec.ixcompany
		
		//add a person record
		var personFS = databaseManager.getFoundSet('bug_db', 'tbl_people')
		personFS.clear()
		var personRec = personFS.getRecord(personFS.newRecord(true, true))
		personRec.login_name = globals.loginUserName
		personRec.login_pw = globals.loginUserPass
		personRec.account_active = 1
		personRec.name_full = globals.loginFullName
		personRec.category = 0
		personRec.last_login = new Date()
			personRec.ixtenant = globals.currTenantID;
		globals.currPersonID = personRec.ixpeople
		globals.currUserID = personRec.ixpeople
		
		//add a person_company record
		var pcFS = databaseManager.getFoundSet('bug_db', 'tbl_people_company')
		pcFS.clear()
		var pcRec = pcFS.getRecord(pcFS.newRecord(true, true))
		pcRec.ixcompany = globals.currCompanyID
		pcRec.ixpeople = globals.currPersonID
			pcRec.ixtenant = globals.currTenantID;
		
		databaseManager.saveData()
	}
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"CEF64FDC-6172-4ECA-91D9-1FD8278345E4"}
 */
function SubShowNewTenantFields(arg0)
{
	var shouldShow = arg0;

	elements.fld_companyName.visible = shouldShow
	elements.fld_fullName.visible = shouldShow
	elements.lbl_newUser.visible = !shouldShow

	if(shouldShow)
	{
		globals.loginMessageText = "Fill out all the fields to the left to create your new account."
	}
	else
	{
		globals.loginMessageText = i18n.getI18NMessage('msg.bugTrackWelcome')
	}
}
