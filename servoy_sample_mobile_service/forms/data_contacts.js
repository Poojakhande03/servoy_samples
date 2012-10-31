/**
 * @properties={typeid:24,uuid:"0449FDA9-4E04-4EB8-AC4A-47B8B75C988B"}
 * @AllowToRunInFind
 */
function ws_update(data,version,pk)
{
	if (foundset.find())
	{
		foundset.contact_id = pk;
		foundset.search();
		foundset.name_first = data.name_first;
		foundset.name_last = data.name_last;
		foundset.email = data.email;
		foundset.phone_cell = data.phone_cell;
		foundset.loadAllRecords();
	}
}