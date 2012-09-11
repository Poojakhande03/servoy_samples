/**
 * Handle REST POST event.
 * <p>
 * plugin.rest_ws example, this method is called via http request 
 * <pre>POST /servoy-service/rest_ws/servoy_sample_rest_ws/ws_employees</pre>
 * the post body is expected to be an object with firstName and lastName properties:
 * {"firstName":"John","lastName":"Doe"}
 *
 * @param {JSRecord} emp employee object deserialized from http body
 *
 * @returns {Object} employee id to be put in http response body
 *
 * @properties={typeid:24,uuid:"c5bb446b-f1da-4bec-83fb-797e6cba8dcf"}
 */
function ws_create(emp)
{
	var index = foundset.newRecord();
	var record = foundset.getRecord(index);
	record.firstname = emp['firstName'];
	record.lastname = emp['lastName'];
	if (databaseManager.saveData(record))
	{
		var ret = new Object();
		ret.id = record.employeeid;
		return ret; // response body
	}
	return null;
}

/**
 * Handle REST DELETE event.
 * <p>
 * plugin.rest_ws example, this method is called via http request 
 * <pre>DELETE /servoy-service/rest_ws/servoy_sample_rest_ws/ws_employees/123</pre>
 *
 * @param {Number} id employee id to delete (from http request)
 *
 * @returns {Boolean} true for success (http response 200), false for error (http response 404)
 *
 * @properties={typeid:24,uuid:"e2c75337-1174-4286-8a26-026ab0a12287"}
 * @AllowToRunInFind
 */
function ws_delete(id)
{
	// delete 1 employee
	if (id && foundset.find())
	{
		foundset.employeeid = id
		if (foundset.search() == 1)
		{
			return foundset.deleteRecord(1) // response code 200/404
		}
	}
	// not found or cannot search
	return false // response code 404
}

/**
 * Handle REST GET event.
 * <p>
 * plugin.rest_ws example, this method is called via http request 
 * <pre>GET /servoy-service/rest_ws/servoy_sample_rest_ws/ws_employees</pre>
 * to get all employees
 * or <pre>GET /servoy-service/rest_ws/servoy_sample_rest_ws/ws_employees/123</pre>
 * to get employee 123
 *
 * @param {Number} id optional employee id to get (from http request)
 *
 * @returns {Object} emp employee object or list of employee ids serialized into http response body
 *
 * @properties={typeid:24,uuid:"2b108b10-b103-414f-8baf-7d7bee6c1034"}
 * @AllowToRunInFind
 */
function ws_read(id)
{
	var i;
	if (id)
	{
		// read 1 employee
		if (foundset.find())
		{
			foundset.employeeid = id
			if (foundset.search() == 1)
			{
				var emp = new Object()
				emp.id = foundset.employeeid
				emp.firstName = foundset.firstname
				emp.lastName = foundset.lastname
				return emp // response body
			}
		}
	}
	else
	{
		// list employee ids
		foundset.sort("employeeid asc")
		if (foundset.loadAllRecords())
		{
			var empids = new Array()
			for (i = 1; i <= foundset.getSize(); i++)
			{
				empids[i] = foundset.getRecord(i).employeeid
			}
			return empids // response body
		}
	}

	// not found or cannot search
	return null;
}

/**
 * Handle REST PUT event.
 * <p>
 * plugin.rest_ws example, this method is called via http request 
 * <pre>PUT /servoy-service/rest_ws/servoy_sample_rest_ws/ws_employees/123</pre>
 * the post body is expected to be an object with firstName and/or lastName properties:
 * {"firstName":"Jane"}
 *
 * @param {Object} emp employee object deserialized from http body
 * 
 * @param {Number} id employee id to update (from http request)
 *
 * @returns {Boolean} true for success (http response 200), false for error (http response 404)
 *
 * @properties={typeid:24,uuid:"0f04bba3-043f-425b-8891-d3900fe862a5"}
 * @AllowToRunInFind
 */
function ws_update(emp, id)
{
	// update 1 employee
	if (emp && id && foundset.find())
	{
		foundset.employeeid = id
		if (foundset.search() == 1)
		{
			var record = foundset.getRecord(1);
			if (emp.id && id != emp['id']) record.employeeid = emp['id'];
			if (emp.firstName) record.firstname = emp['firstName'];
			if (emp.lastName) record.lastname = emp['lastName'];
			return databaseManager.saveData(record) // response code 200/404
		}
	}
	
	// not found or cannot search
	return false // response code 404
}
