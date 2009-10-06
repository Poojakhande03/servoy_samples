/**
 * @properties={typeid:24,uuid:"1ca484fe-c291-4a85-9e35-88b6cdc9b8ad"}
 */
function BtnDelete()
{
	/*
	PURPOSE: Delete this person from the project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.NewRecordAction(2,'Deleted person ' + project_people_to_people.name_full +
		' from project ' + project_people_to_project.proj_name, ixproject, null, project_people_to_project.ixcompany);
	
	//turn off autosave
	databaseManager.setAutoSave(true)
	controller.deleteRecord()
	databaseManager.saveData()
	databaseManager.setAutoSave(false)
	
	//reset the dynamic "assigned to" value list
	globals.SetUpDynamicValueLists();
}

/**
 * @properties={typeid:24,uuid:"d560370f-2db1-466a-81ae-cb20ad11789b"}
 */
function BtnGoPerson()
{
	/*
	PURPOSE: Go to a specified team member
	
	PARAMETERS: ixproject int (requried)
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.currPersonID = ixpeople
	
	//find right person
	forms.frm_people_selperson.controller.find()
	forms.frm_people_selperson.ixpeople = ixpeople
	forms.frm_people_selperson.controller.search()
	
	//dim tabs
	forms.frm_submain.TabsDimAll();
	
	//set the current tab to dark grey
	forms.frm_submain.elements.btn_people.bgcolor = '#666666'
	
	if(forms.frm_submain.elements.tabs_main.tabIndex != 5)
	{
		forms.frm_submain.elements.tabs_main.tabIndex = 5
	}
}

/**
 * @properties={typeid:24,uuid:"958663ed-d83e-4ae7-848f-e3261cacc20f"}
 */
function onShow()
{
//	BtnSort('initial');
//	application.output(foundset.getCurrentSort());
//	if (project_people_to_people) project_people_to_people.sort(project_people_to_people.name_full);
//	if (project_people_to_people) application.output(project_people_to_people.getSize());
//	if (gcurrproject_to_project_people) gcurrproject_to_project_people.sort('gcurrproject_to_project_people.ixprojectperson asc');
//	if (gcurrproject_to_project_people) application.output(gcurrproject_to_project_people.getSize());
	if (gcurrproject_to_project_people)
	{	
		elements.person_asc.visible = false;
		elements.person_desc.visible = false;
		elements.login_asc.visible = false;
		elements.login_desc.visible = false;
	}
	else
	{
		elements.person_asc.visible = false;
		elements.person_desc.visible = false;
		elements.login_asc.visible = false;
		elements.login_desc.visible = false;
	}
}

/**
 * @properties={typeid:24,uuid:"8fe0d314-d320-4c92-aea9-6830103272c7"}
 */
function Sort_name()
{
	if (gcurrproject_to_project_people)
		if (elements.person_asc.visible == true)
		{
			foundset.sort('project_people_to_people.name_full desc');
			elements.person_asc.visible = false;
			elements.person_desc.visible = true;
			elements.login_asc.visible = false;
			elements.login_desc.visible = false;
		}
		else
	{
			foundset.sort('project_people_to_people.name_full asc');
			elements.person_asc.visible = true;
			elements.person_desc.visible = false;
			elements.login_asc.visible = false;
			elements.login_desc.visible = false;
	}
}

/**
 * @properties={typeid:24,uuid:"c0b3ca1c-d46d-4091-ac02-fb5baa6cbea0"}
 */
function Sort_login()
{
	if (gcurrproject_to_project_people)
		if (elements.login_asc.visible == true)
		{
			foundset.sort('project_people_to_people.last_login desc');
			elements.person_asc.visible = false;
			elements.person_desc.visible = false;
			elements.login_asc.visible = false;
			elements.login_desc.visible = true;
		}
		else
		{
			foundset.sort('project_people_to_people.last_login asc');
			elements.person_asc.visible = false;
			elements.person_desc.visible = false;
			elements.login_asc.visible = true;
			elements.login_desc.visible = false;
		}
}
