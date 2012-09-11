/**
 * @properties={typeid:24,uuid:"039c405f-79d7-4008-ad3b-be8d1eae4d3a"}
 */
function btn_add()
{
	//see what form is front-most
	/** @type Number*/
	var idx = forms.main.elements.tabs_main.tabIndex
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(idx);

	//if there's no transaction, start one - so they can "cancel"
	if(!databaseManager.hasTransaction()) databaseManager.startTransaction()

	//make a new record
	forms[frm].controller.newRecord(true)

	//see if there is an auto-enter method to be performed on that form
	if(forms[frm].validate_autoEnter != undefined) forms[frm].validate_autoEnter()

	//ALL forms must have a method "doEdit" for this to work
	forms[frm].doEdit()

	//tell the first field in the tab order to receive focus
	forms[frm].controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"75b667c5-49dc-497a-85e6-94d7f11585d0"}
 */
function btn_delete()
{
	//see what form is front-most
	/** @type Number*/
	var idx = forms.main.elements.tabs_main.tabIndex;
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(idx);
	if(forms[frm].validate_beforeDelete() != 0) return;

	var msg = forms[frm].delete_text

	if(!msg) msg = 'Are you sure you want to delete this record?'

	//tell it what method to execute when dialog closes
	var methd = 'forms.' + frm + '.sub_doDelete()'

	//show the tabpanel "dialog"
	globals.showWarningDialog(msg, methd, 'Cancel', 'Delete', null, null);
}

/**
 * @properties={typeid:24,uuid:"dd51b40b-160d-4e2d-a67b-8a50b251906c"}
 */
function btn_edit()
{
	//only do edit if there is no existing transaction
	if(!databaseManager.hasTransaction())
	{
		//see what form is front-most
		/** @type Number*/
		var idx = forms.main.elements.tabs_main.tabIndex;
		var frm = forms.main.elements.tabs_main.getTabFormNameAt(idx);

		//ALL forms must have a method "doEdit" for this to work
		forms[frm].doEdit()

		//tell the first field in the tab order to receive focus
		forms[frm].controller.focusFirstField()
	}
}

/**
 * @properties={typeid:24,uuid:"df22eef4-7f25-48bd-bfce-327c5267aade"}
 * @AllowToRunInFind
 */
function btn_showAll()
{
	//see what form is front-most
	/** @type Number*/
	var idx = forms.main.elements.tabs_main.tabIndex;
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(idx);
	var frm2 = utils.stringReplace(frm, 'frm', 'lst_pdf')

	//load all records
	forms[frm].controller.loadAllRecords()
	forms[frm2].controller.loadAllRecords()
	forms[frm2].btn_sortAsc()

	//hide the "show all" button
	sub_hideShowAll();
}

/**
 * @properties={typeid:24,uuid:"48ca7fef-4617-49e6-80f7-e9154722ce75"}
 */
function onShow()
{
	//see if the record status has as "(" in it - if so, it's a foundset
	if(globals.record_status.indexOf("(") > 0)
	{
		sub_showShowAll();
	}
	else
	{
		sub_hideShowAll();
	}
}

/**
 * @properties={typeid:24,uuid:"f6be25f7-aaf8-4d5e-8e03-70d023f74df1"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		/** @type Number*/
		var idx = forms.main.elements.tabs_main.tabIndex;
		var frm = forms.main.elements.tabs_main.getTabFormNameAt(idx);
		forms[frm].controller.deleteRecord()

		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * @properties={typeid:24,uuid:"9e74f42e-10c7-4b30-8f9a-8af739f75b67"}
 */
function sub_hideShowAll()
{
	elements.lbl_divLine.visible = false
	elements.lbl_showAll.visible = false
	elements.btn_showAll.visible = false
}

/**
 * @properties={typeid:24,uuid:"3c334594-04bc-491e-b4c8-ffc1ab04d0c0"}
 */
function sub_showShowAll()
{
	elements.lbl_divLine.visible = true
	elements.lbl_showAll.visible = true
	elements.btn_showAll.visible = true
}
