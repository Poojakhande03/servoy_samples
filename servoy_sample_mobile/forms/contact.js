
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
