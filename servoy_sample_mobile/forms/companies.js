
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"57C28910-4418-42A8-A890-CA420A747F07"}
 */
function onSyncAction(event) 
{
	plugins.mobile.syncData();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD94EACF-7893-4A29-91F1-FA24074BF9A5"}
 */
function onShow(firstShow, event)
{
	if (application.isInDeveloper() && firstShow && foundset['find'+'']())
	{
		// developer-only code to fill the initial foundset with data for 1 contact
		foundset.email = 'yboom@servoy.com'
		foundset['search'+'']()
	}
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DFB966A7-FA63-430E-94DC-7C5E2A646210"}
 */
function onDetailAction(event) 
{
	forms.contacts.showContacts(accountmanager_to_companies.companies_to_contacts);
}

