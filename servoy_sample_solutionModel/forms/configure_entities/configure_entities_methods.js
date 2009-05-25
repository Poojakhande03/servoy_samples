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
}
