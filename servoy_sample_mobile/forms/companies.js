
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
function onShow(firstShow, event) {
	if (foundset.loadRecords) foundset.loadRecords(39)
}
