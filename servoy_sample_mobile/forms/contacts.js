
/**
 * @properties={typeid:24,uuid:"BCD0E0A7-94CD-41D4-A4E1-645E5E462A50"}
 */
function showContacts(fs) 
{
	controller.showRecords(fs);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D0BBE9AF-41BF-497F-AD84-5C75978618A2"}
 */
function onDetailAction(event) 
{
	forms.contact.showContact(foundset);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D02CF83F-0F1E-4898-878B-15517AC5D8E8"}
 */
function back(event) 
{
	history.back()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"097325C7-003F-479A-8138-6A5CF3F7ADD9"}
 */
function onNewAction(event) 
{
	foundset.newRecord();
	forms.contact_edit.showContact(foundset);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"90268929-8B65-4991-99CF-BCA34FFB647B"}
 */
function onDetailsAction(event) 
{
	forms.contact.showContact(foundset);
}

