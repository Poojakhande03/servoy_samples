/**
 * @properties={typeid:24,uuid:"ae69242d-e459-4e22-8378-659c98b6f482"}
 */
function cmd_deleteRecord()
{
	forms.frm_buttons.btn_delete();
}

/**
 * @properties={typeid:24,uuid:"cceb3126-36c8-42fe-a2f9-912d2db082cd"}
 */
function cmd_find()
{
	forms.frm_nav_main.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"caed5756-45d0-458d-8b66-63f29e09e874"}
 */
function cmd_newRecord()
{
	forms.frm_buttons.btn_add();
}

/**
 * @properties={typeid:24,uuid:"4baa1d72-b7fd-443b-9781-33b368a0b3e9"}
 */
function cmd_showAll()
{
	forms.frm_buttons.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"364cb9e1-4973-467f-a635-763032826ea6"}
 */
function onShow()
{
	elements.tabs_dialog.visible = false
	if(forms.frm_nav_main.elements.btn_login.text == 'Login')
	{
		//not logged in yet
		globals.disableAllButLogin();
	}
	else
	{
		//already logged in
		globals.enableBgElements();
	}
}
