/**
 * @properties={typeid:24,uuid:"92610739-6f78-48fb-a8ba-f0eb7f1e95a9"}
 */
function btn_addValue()
{
	if(!databaseManager.hasTransaction()) databaseManager.startTransaction()

	forms.dlg_template_values.controller.newRecord()

	forms.dlg_template_values.template_id = forms.frm_templates.template_id

	//show the dialog
	globals.showDialog('Add New Default Value', null, null, null, null, null, null, null, null, null);

	forms.dlg_template_values.controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"58fd004b-b36b-4aa4-9edd-2c1f5f89e8fd"}
 */
function btn_editValue()
{
	forms.dlg_template_values.foundset.selectRecord(kval_id);

	globals.dialog_performMethod = 'forms.dlg_template_values.deleteRow()';

	if(!databaseManager.hasTransaction()) databaseManager.startTransaction();

	//show the dialog
	globals.showDialog('Edit Default Value', 1, null,null,true,'Delete Value', null, null, null, null);

	forms.dlg_template_values.controller.focusFirstField();
}
