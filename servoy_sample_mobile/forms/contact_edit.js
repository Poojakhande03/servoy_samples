
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @private 
 * @properties={typeid:24,uuid:"1B73E3A2-4004-44B8-8277-DFC3589EB16A"}
 */
function test(event) 
{
	plugins.dialogs.showWarningDialog("Check","Are we online: "+plugins.mobile.isOnline());
}

/**
 * @properties={typeid:24,uuid:"054AB7B3-1CA1-4B50-9ED0-63EE3CD99D27"}
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
 * @properties={typeid:24,uuid:"22F09139-0180-44DA-84E7-CDE12C2AC89E"}
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
 * @properties={typeid:24,uuid:"1FC496E1-AE4D-4829-A652-A33C5BFB9AA5"}
 */
function onSaveAction(event) 
{
	databaseManager.saveData();
	history.back();
}
