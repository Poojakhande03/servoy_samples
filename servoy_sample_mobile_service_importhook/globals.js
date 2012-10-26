
/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"1A75EDFE-02D0-4888-B622-B73199E68C3B"}
 */
function onSolutionOpen() 
{
	var ds = databaseManager.getDataSetByQuery("udm", "select * from companies where accountmanager_id is not null", arguments, 100);
	if (ds.getMaxRowIndex() <= 0)
	{
		plugins.rawSQL.executeSQL("udm", "companies", "update companies set accountmanager_id = 39");
	}
}
