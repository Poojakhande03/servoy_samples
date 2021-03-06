/**
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"100F2020-6FD6-4D53-BFC1-1DE535CA80EB"}
 */
function syncronizeWithDB(event)
{
	if (utils.hasRecords(foundset) && utils.hasRecords(entities_to_datasources))
	{
		var m = event.getModifiers();
		
		forms.navigation.syncronizeWithDB(entities_to_datasources.datasource_id,table_name, ((m & 1) == 1));
	}
	else
	{
		forms.navigation.checkForSampleData();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01B15EE2-3038-4524-834D-D3F69A041517"}
 */
function deleteEntity(event)
{
	controller.deleteRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A681997-D341-4420-8C91-8CA2A770C79A"}
 * @AllowToRunInFind
 */
function deleteAllEntities(event)
{
	forms.datasources.controller.loadAllRecords()
	forms.datasources.controller.deleteAllRecords()
}
