/**
 * @properties={typeid:24,uuid:"136b3512-b435-46e3-9cf5-c8f0fffeff42"}
 */
function btn_3() {
	//set a global to the text of the button pressed
	globals.dialog_buttonPressed = elements.btn_3.text

	btn_ok();

	if(globals.dialog_performMethod) {
		//perform whatever method is in the global
		eval(globals.dialog_performMethod)
		globals.dialog_performMethod = null
	}
}

/**
 * @properties={typeid:24,uuid:"0500998c-572f-430f-9d1a-95d5811c24fb"}
 */
function btn_cancel() {
	if(databaseManager.hasTransaction()) 
		databaseManager.rollbackTransaction()
	forms.main.elements.tabs_dialog.visible = false;
	globals.enableBgElements();
}

/**
 * @properties={typeid:24,uuid:"bd986d44-74f3-45cd-81a9-b4972ff55200"}
 */
function btn_ok() {
	if(databaseManager.hasTransaction()) 
		databaseManager.commitTransaction();
	forms.main.elements.tabs_dialog.visible = false;
	globals.enableBgElements();
}
