/**
 * @type Object
 *
 * @properties={typeid:35,uuid:"366B6F4D-8A95-424E-93AC-12CCD4E5E298",variableType:-4}
 */
var callback;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EEB79AD-DD83-43F8-830C-0E0522491BAC"}
 */
function okAction(event)
{
	cancelAction(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7285303-5420-4BD2-8887-5670410BF626"}
 */
function cancelAction(event)
{
//	application.closeFormDialog("dialog");
	application.getWindow('dialog').close();
}

/**
 * @return {Boolean} true if the dialog wasnt canceled.
 * 
 * @properties={typeid:24,uuid:"0DD2B7CF-D859-461D-954A-BBD5ED9B479F"}
 */
function show(callbackFunction)
{
	callback = callbackFunction;
	controller.show("dialog",true);
}
