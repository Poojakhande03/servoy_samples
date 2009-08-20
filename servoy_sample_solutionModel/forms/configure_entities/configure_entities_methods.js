/**
 * @properties={typeid:24,uuid:"f2dc2f58-8d78-4357-b604-621365892d5c"}
 */
function syncronizeWithDB()
{
	if (utils.hasRecords(foundset) && utils.hasRecords(entities_to_datasources))
	{
		var m = application.getLastKeyModifiers();
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
 */
function deleteAllEntities(event)
{
	forms.datasources.controller.loadAllRecords()
	forms.datasources.controller.deleteAllRecords()
}
