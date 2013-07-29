/**
 * @properties={typeid:24,uuid:"0449FDA9-4E04-4EB8-AC4A-47B8B75C988B"}
 * @AllowToRunInFind
 */
function ws_update(data,version,pk)
{
	if (foundset.find())
	{
		foundset.contact_id = pk;
		var count = foundset.search();
		if (count > 0)
		{
			var rec = foundset.getRecord(1);
			databaseManager.copyMatchingFields(data,rec, true);
			databaseManager.saveData(rec);
		}
	}
}

/**
 * @properties={typeid:24,uuid:"CC4DD13E-AB76-4280-A7E9-BB7608A025CE"}
 */
function ws_create(data,version,pk)
{
	var rec = foundset.getRecord(foundset.newRecord());
	rec.name_first = data.name_first;
	rec.name_last = data.name_last;
	rec.email = data.email;
	rec.phone_cell = data.phone_cell;
	rec.company_id = data.company_id;
	databaseManager.saveData(rec);
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"8A267F18-ED12-4B5F-8633-A0985794F7F6"}
 */
function ws_delete(version,pk)
{
	if (foundset.find())
	{
		foundset.contact_id = pk;
		var count = foundset.search();
		if (count > 0)
		{
			var rec = foundset.getRecord(1);
			foundset.deleteRecord(rec);
		}
	}
}
