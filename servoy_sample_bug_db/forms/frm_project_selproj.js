/**
 * @properties={typeid:24,uuid:"07ff135c-c753-4270-9be0-eda28151fc7a"}
 */
function BtnDeleteProject()
{
	/*
	PURPOSE: Create delete this project with err checking
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/19/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin)
	{
		//see how many tasks there are
		var numTasks = gcurrproject_to_task.getSize()
		
		//get number of comments
		var numComments = gcurrproject_to_comment.getSize()
		
		//get number of files
		var numFiles = gcurrproject_to_file.getSize()
		
		var msg = i18n.getI18NMessage('msg.deleteProjectRecord', new Array(proj_name, numTasks, numComments, numFiles))
		
		//confirm the delete of the task
		globals.core_showWcGenericDialog(i18n.getI18NMessage('lbl.deleteProject'), msg, 'forms.frm_project_selproj.DoDelete(0)', 'warning', i18n.getI18NMessage('lbl.ok'), i18n.getI18NMessage('lbl.cancel'));
	
	}
	else
	{
			globals.core_showWcGenericDialog( i18n.getI18NMessage('lbl.error'), i18n.getI18NMessage('servoy.foundSet.error.noDeleteAccess'), null, 'error', i18n.getI18NMessage('lbl.ok'));
	}
}

/**
 * @properties={typeid:24,uuid:"5f2e6e49-3a35-4c4b-ac65-87a917b51b9e"}
 */
function BtnDeleteTask()
{
	/*
	PURPOSE: Create delete this task with err checking
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	//confirm the delete of the task
	globals.core_showWcGenericDialog(i18n.getI18NMessage('lbl.deleteTask'), i18n.getI18NMessage('msg.deleteRecord', new Array('task',gcurrtask_to_task.task_name)), 'forms.frm_project_selproj.DoDelete(1)', 'warning', i18n.getI18NMessage('lbl.ok'), i18n.getI18NMessage('lbl.cancel'));
}

/**
 * @properties={typeid:24,uuid:"26766226-74da-4eb7-a6ad-243235ec268e"}
 */
function BtnEditProject()
{
	/*
	PURPOSE: Go to a specified project
	
	PARAMETERS: ixproject int (requried)
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	
	********************************************/
	
	globals.ShowDialogProject( null, globals.currProjectID);
}

/**
 * @properties={typeid:24,uuid:"6bbc6ab9-15f4-4200-9c5f-b1c0a7e6a8b6"}
 */
function BtnEditTask()
{
	/*
	PURPOSE: Run when editing the current task
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/10/08 BC
	MODIFIED: 05/30/08 JM
	********************************************/
	//changing to allow for bug edit screen
	if (gcurrtask_to_task.label == 1)
		globals.ShowDialogBug(null, globals.currTaskID);
	else
		globals.ShowDialogTask(null, globals.currTaskID);
}

/**
 * @properties={typeid:24,uuid:"97cd750b-3007-46ab-8be7-be789aaa50e1"}
 */
function BtnNewBug()
{
	/*
	PURPOSE: Create a new bug and assign it to current project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.NewRecordBug();
}

/**
 * @properties={typeid:24,uuid:"ab686922-48ce-47d4-9222-256e0726e07b"}
 */
function BtnNewTask()
{
	/*
	PURPOSE: Create a new task and assign it to current project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	globals.NewRecordTask();
}

/**
 * @properties={typeid:24,uuid:"0c237e3b-cf39-4741-b879-20cf20166f3b"}
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
		if(arguments[0] == '1') //task
		{
			//make a log entry
			globals.NewRecordAction(2,'Deleted task "' + gcurrtask_to_task.task_name + '" from project "' +
			proj_name + '"', ixproject, globals.currTaskID, null);
			
			//ok to delete
			gcurrtask_to_task.deleteRecord()
		}
		else if (arguments[0] == 0) // project
		{
			//make a log entry
			globals.NewRecordAction(2,'Deleted project "' +
			proj_name + '"', ixproject, null, null);
			
			//ok to delete
			gcurrproject_to_project.deleteRecord()
		}
		
		//save the actions & delete
		databaseManager.setAutoSave(true)
		databaseManager.saveData()
		databaseManager.setAutoSave(false)
		
		if(arguments[0] == '1') //task
		{
			//switch back to the task list
			elements.tabs_main.tabIndex = 2
		}
		else //project
		{
			//show main projects tab - showing active projects
			forms.frm_submain.elements.tabs_main.tabIndex = 2
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"5f6a8850-377b-47a9-9124-775e6bbc6677"}
 */
function OnShow()
{
	/*
	PURPOSE: Run when showing the selected project
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/14/08 BC
	MODIFIED: NONE
	********************************************/
	
	//reset flag
	globals.tempInt = 0
	
	//reset other globals
	globals.currDocumentID = 0
	globals.currVersionID = 0
	
	//hide edit task button
	elements.btn_editTask.visible = false
	elements.grc_editTask.visible = false
	elements.lbl_editTask.visible = false
	
	//hide delete task button
	elements.btn_deleteTask.visible = false
	elements.grc_deleteTask.visible = false
	elements.lbl_deleteTask.visible = false
	
	//show delete project button
	elements.btn_deleteProject.visible = true
	elements.grc_deleteProject.visible = true
	elements.lbl_deleteProject.visible = true
}

/**
 * @properties={typeid:24,uuid:"69206a66-c10a-4a2e-934f-f16e7e65a831"}
 */
function TabDocuments()
{
	/*
	PURPOSE: Tab for going to the "documents" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_documents.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 3)
	{
		elements.tabs_main.tabIndex = 3
	}
}

/**
 * @properties={typeid:24,uuid:"e5afd646-405f-4270-a61b-527d644501cc"}
 */
function TabFiles()
{
	/*
	PURPOSE: Tab for going to the "files" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_files.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 5)
	{
		elements.tabs_main.tabIndex = 5
	}
}

/**
 * @properties={typeid:24,uuid:"0fe4c3fd-ed60-4567-a2e2-dcfa5759cd29"}
 */
function TabOverview()
{
	/*
	PURPOSE: Tab for going to the "documents" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
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
 * @properties={typeid:24,uuid:"2e21befa-0a02-42de-83dc-ba59382392a4"}
 */
function TabsAllTransparent()
{
	/*
	PURPOSE: Used as a central method for making all "tab" labels light grey
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	elements.tab_overview.bgcolor = '#EBEBEB'
	elements.tab_tasks.bgcolor = '#EBEBEB'
	elements.tab_documents.bgcolor = '#EBEBEB'
	elements.tab_versions.bgcolor = '#EBEBEB'
	elements.tab_files.bgcolor = '#EBEBEB'
}

/**
 * @properties={typeid:24,uuid:"b6000aa8-f509-48e0-aa5e-5522a72adf4a"}
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
	
	if(elements.tabs_main.tabIndex != 2)
	{
		elements.tabs_main.tabIndex = 2
	}
}

/**
 * @properties={typeid:24,uuid:"a1e510c1-6dab-4b10-9f81-c2523c6f3cfb"}
 */
function TabVersions()
{
	/*
	PURPOSE: Tab for going to the "versions" section
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	TabsAllTransparent();
	
	elements.tab_versions.bgcolor = '#ffffff'
	
	if(elements.tabs_main.tabIndex != 4)
	{
		elements.tabs_main.tabIndex = 4
	}
}
