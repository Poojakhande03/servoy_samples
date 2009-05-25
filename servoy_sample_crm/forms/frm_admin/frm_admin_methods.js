/**
 * @properties={typeid:24,uuid:"c331adf4-5625-428a-8cd0-1e6018aac2be"}
 */
function btn_cancel()
{
	globals.cancelEditing()
	evt_onShow();
}

/**
 * @properties={typeid:24,uuid:"1251746d-f682-4c1f-9b48-7dcf18c6480d"}
 */
function btn_performSQL()
{
	if(! globals.core_sql_sqlQuery)
	{
		//no query entered
		globals.showErrorDialog('No SQL query entered.',null,'OK')
		return
	}

	//set the variable to the entered query
	var query = globals.core_sql_sqlQuery

	//if only a part of the query is hilighted - then use that
	if(elements.fld_sqlQuery.getSelectedText()) query = elements.fld_sqlQuery.getSelectedText()

	//there is a query - so try to run it
	//Get a dataset based on query
	var maxReturnedRows = 1000;//useful to limit number of rows
	var dataset = databaseManager.getDataSetByQuery(controller.getServerName(), query, null, maxReturnedRows);
	var err = dataset.getException()

	if(err != null && err.getMessage() != undefined)
	{
		globals.showErrorDialog('An error occurred with your query:\n\n' + err.getMessage(),null,'OK')
		return
	}

	//setup the top HTML
	var myHTML = globals.getTopHTML()
	if(application.getApplicationType() == 5) myHTML = '<html>'

	globals.core_sql_sqlResult = myHTML + '<b>QUERY: </b>' + query + '<br><br>' + dataset.getAsHTML() + '</html>';
}

/**
 * @properties={typeid:24,uuid:"3dc28fec-2e28-4d68-8579-1db5bdfa8c0d"}
 */
function btn_save()
{
	globals.saveEdits()

	evt_onShow()
}

/**
 * @properties={typeid:24,uuid:"8d9a59ef-b880-4e5b-a287-563a107c285d"}
 */
function doEdit()
{
	if(!globals.isEditing()) globals.startEditing()

	forms.lst_admin_solutionPrefs.controller.readOnly = false
	forms.frm_admin_vl_choice.controller.readOnly = false

	elements.btn_save.visible = true
	elements.btn_cancel.visible = true

	//show add & delete buttons on the value list
	forms.frm_admin_vl_choice.elements.btn_add.visible = true
	forms.frm_admin_vl_choice.elements.btn_delete.visible = true
}

/**
 * @properties={typeid:24,uuid:"9e49caec-dd04-4386-8c98-60d96c32b3c0"}
 */
function evt_onShow()
{
	elements.btn_cancel.visible = false
	elements.btn_save.visible = false

	elements.tabs_prefs.readOnly = true
	elements.tabs_valueLists.readOnly = true

	//hide add & delete buttons on the value list
	forms.frm_admin_vl_choice.elements.btn_add.visible = false
	forms.frm_admin_vl_choice.elements.btn_delete.visible = false
}
