/**
 * REST GET method
 * @param {String} version
 * @param {String} method
 *
 *
 * @properties={typeid:24,uuid:"73F48DD6-B4E6-4A4F-8584-BEBBE7957F2C"}
 */
function ws_read(version,method) 
{
	var questionParams = arguments[arguments.length-1];

	if (method == 'list')
	{
		/** 
		 * @type {String}
		 */	
		var ids = questionParams.ids[0];
		if (ids != null && ids != '')
		{
			/** 
			 * @type {Array<Object>}
			 */	
			var idsa = ids.split(',', -1);
			if (idsa.length > 0)
			{
				foundset.loadAllRecords();
				var json = plugins.mobileservice.getRowDescriptions(foundset, idsa)
				return json;
			}
		}
	}
	
	throw 404;
}