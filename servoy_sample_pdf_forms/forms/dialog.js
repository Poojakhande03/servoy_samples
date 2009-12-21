/**
 * @properties={typeid:24,uuid:"a2570be6-57a0-4bea-b820-fb9aa2df2a8b"}
 */
function btn_3()
{
	//set a global to the text of the button pressed
	globals.dialog_buttonPressed = elements.btn_3.text
	
	btn_ok();
	
	if(globals.dialog_performMethod)
	{
		//perform whatever method is in the global
		eval(globals.dialog_performMethod)
		globals.dialog_performMethod = null
	}
}

/**
 * @properties={typeid:24,uuid:"8b782fa2-233a-496d-ad95-d9fd574beff5"}
 */
function btn_cancel()
{
	if(databaseManager.hasTransaction()) databaseManager.rollbackTransaction()
	forms.main.elements.tabs_dialog.visible = false
	globals.enableBgElements();
}

/**
 * @properties={typeid:24,uuid:"473d0db1-9ea9-40a8-a16d-9a66cb0a3b0b"}
 */
function btn_ok() {
	if(databaseManager.hasTransaction()) {
		databaseManager.commitTransaction();
	}
	
	forms.main.elements.tabs_dialog.visible = false;
	globals.enableBgElements();
}
