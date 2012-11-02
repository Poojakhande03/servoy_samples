
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DC3B0396-1D65-46E8-B7DD-15C7B8A57BAA"}
 */
function onBackAction(event) 
{
	history.back();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3EF25AC0-199B-4A9F-A304-CCEECB8E6D61"}
 */
function onEditAction(event) 
{
	forms.contact_edit.showContact(foundset);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param fs
 *
 * @properties={typeid:24,uuid:"770562A2-C877-4C2F-9129-AA9E9C699091"}
 */
function showContact(fs) 
{
	controller.showRecords(fs)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A665808B-CDF8-465A-83C8-FE1DBFBC3762"}
 */
function onCall(event) {
	var rec = foundset.getSelectedRecord();
	if(rec.phone_direct) plugins.mobile.call(rec.phone_direct);
	else plugins.dialogs.showWarningDialog("Warning", "Missing phone number");
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2AF6A1BD-3BF3-436B-8998-DCF0C57FDDFE"}
 */
function onEmail(event) {
	var rec = foundset.getSelectedRecord();
	if(rec.email) plugins.mobile.email(rec.email);
	else plugins.dialogs.showWarningDialog("Warning", "Missing email address");
}
