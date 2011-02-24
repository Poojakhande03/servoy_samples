/**
 * @properties={typeid:24,uuid:"9454eec6-ba59-43aa-89eb-75f870144f5c"}
 */
function BtnDeletePerson()
{
	/*
	PURPOSE: Create delete this person with err checking
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		var assignedTasks = gcurrperson_to_task.getSize()
		var msg = i18n.getI18NMessage('msg.deleteRecord', new Array('person',name_full))
		
		if(assignedTasks > 0) {
			//there are assigned tasks - so setup the message
			msg = i18n.getI18NMessage('msg.deletePersonRecord', new Array(name_full, assignedTasks))
		}
		
		globals.core_showWcGenericDialog(i18n.getI18NMessage('lbl.deleteTask'), msg, 'forms.frm_people_selperson.DoDelete()', 'warning', i18n.getI18NMessage('lbl.ok'), i18n.getI18NMessage('lbl.cancel'), '', '');
	}
	else {
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noDeleteAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'), null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"67eba98a-60ad-403d-b4d5-daf2ab2d58ac"}
 */
function BtnEditPerson()
{
	/*
	PURPOSE: Edit profile of specific person
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.ShowDialogPerson(null, globals.currPersonID, null);
}

/**
 * @properties={typeid:24,uuid:"7bf62650-1bec-494b-b7c1-aa49a7b45b84"}
 */
function BtnNewProject()
{
	/*
	PURPOSE: Create project linked to a specific person
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	//new record
	globals.NewRecordProject(1, null);
}

/**
 * @properties={typeid:24,uuid:"3f2bf117-4532-46ca-aeab-8d12f82ebb90"}
 */
function BtnNewTask()
{
	/*
	PURPOSE: Create a new task and assign it to current person
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/11/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.NewRecordTask();
}

/**
 * @properties={typeid:24,uuid:"b652c0c1-db53-469f-9a4a-fde2f457748e"}
 */
function DoDelete()
{
	/*
	PURPOSE: Actual deletion of project record
	
	PARAMETERS: whatTypeToDelete int (REQUIRED)
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.mod_dialog_buttonPressed == i18n.getI18NMessage('lbl.ok'))
	{
	
		var assignedTasks = gcurrperson_to_task.getSize()
		if(assignedTasks > 0) {
			//reassign any tasks to no one
			var fsUpdater = databaseManager.getFoundSetUpdater(gcurrperson_to_task)
			fsUpdater.setColumn('ixpersonassigned',0)
			fsUpdater.performUpdate()
		}
	
		//make a log entry
		globals.NewRecordAction(2,'Deleted person "' + name_full + '"', null, null, null);
		
		//ok to delete
		gcurrpersonid_to_people.deleteRecord()
		
		//save the actions & delete
		databaseManager.setAutoSave(true)
		databaseManager.saveData()
		databaseManager.setAutoSave(false)
		
		//reset the dynamic "assigned to" valuelist
		globals.SetUpDynamicValueLists();
		
		//color "people" button
		if(forms.frm_submain.elements.btn_people.bgcolor != '#666666')
		{
			forms.frm_submain.TabsDimAll();
			forms.frm_submain.elements.btn_people.bgcolor = '#666666'
		}
		
		//show main projects tab - showing active projects
		forms.frm_submain.elements.tabs_main.tabIndex = 3
	}
}

/**
 * @properties={typeid:24,uuid:"1db5e016-844c-40ca-9f99-5e6dd2dc88ce"}
 */
function OnShow()
{
/*
PURPOSE: Perform this every time the person is selected

PARAMETERS: NONE
OUTPUTS: NONE

CREATED: 04/14/08 BC
MODIFIED: NONE
********************************************/

}

/**
 * @properties={typeid:24,uuid:"dfd54c7d-fd34-4263-adae-4bb431fcbdf5"}
 */
function TabOverview()
{
	/*
	PURPOSE: Tab for going to the "projects" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_overview.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 1)
	{
		elements.tabs_main.tabIndex = 1
	}
}

/**
 * @properties={typeid:24,uuid:"c8110b39-8645-4f69-a746-3817ed6df928"}
 */
function TabProjects()
{
	/*
	PURPOSE: Tab for going to the "projects" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_projects.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 2)
	{
		elements.tabs_main.tabIndex = 2
	}
}

/**
 * @properties={typeid:24,uuid:"67406399-91b5-4896-b7a3-da3eac246d4a"}
 */
function TabsAllTransparent()
{
	/*
	PURPOSE: Used as a central method for making all "tab" labels light grey
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: NONE
	********************************************/
	
	elements.tab_overview.bgcolor = '#EBEBEB'
	elements.tab_projects.bgcolor = '#EBEBEB'
	elements.tab_tasks.bgcolor = '#EBEBEB'
}

/**
 * @properties={typeid:24,uuid:"874ec269-9bc9-49ec-b84e-4ffbc1d511c7"}
 */
function TabTasks()
{
	/*
	PURPOSE: Tab for going to the "tasks" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_tasks.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 3)
	{
		elements.tabs_main.tabIndex = 3
	}
}
