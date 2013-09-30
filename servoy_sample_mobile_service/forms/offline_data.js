/**
 * REST GET method
 * @param {String} version
 * @param {String} name
 *
 *
 * @properties={typeid:24,uuid:"33227A0C-B424-4D04-9B9B-2937F33DF809"}
 */
function ws_read(version, name) 
{
	var questionParams = arguments[arguments.length-1];
	
	/** 
	 * @type {Array<String>}
	 */	
	var retval = plugins.mobileservice.createOfflineDataDescription('data_');

	//setting the key for user_select relation
	var authenticate_info = questionParams['ws_authenticate'][0];
	globals.username = authenticate_info['username']; // set in ws_authenticate()
	
	//prepare personal data
	var fs_contact = globals.accountmanager_contacts; // contains the account manager contact

	retval.addFoundSet(fs_contact);
	
	//prepare data for remote search
	/** @type {JSFoundSet<db:/udm/products>}  */
	var fs_products = databaseManager.getFoundSet("udm","products");
	retval.addFoundSet(fs_products);
	
	return retval;
}

/**
 * @param {String} useruid
 * @param {String} password
 *
 *
 * @properties={typeid:24,uuid:"F1992D63-D51E-4CD0-9633-BA685E97BB14"}
 */
function ws_authenticate(useruid, password)
{
	if (useruid == null || useruid == 'demo')
	{
		useruid = 'yboom@servoy.com';
		if (password == 'demo')
		{
			//TODO check password (against pwhash column)
			var retval = new Object();
			retval.username = useruid;
			return retval; // will be last argument in ws_read()
		}
	}
	return false;
}

/**
 * @param data The data that the client send over in the body 
 * @param version The version number of this request
 * @param method What kind of create must be done 
 * @param authenticateResult Object that is created in the ws_authenticate method.
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3D71713B-80AC-498E-9806-D199E603EC7B"}
 */
function ws_create(data,version,method,authenticateResult) 
{
    // Test if it is a remoteSearch call
    if (method == "search") {
        // Create the FoundSet from the data that is send over from the mobile client
        var fs = plugins.mobileservice.createRemoteSearchFoundSet(data);
        // This FoundSet is in find mode, more stuff could be added to it if you want to filter even more. Then call search()
        fs.search();
        // Create the OfflineDataDescription that will be returned for this remoteSearch
        var retval = plugins.mobileservice.createOfflineDataDescription('data_');
        retval.addFoundSet(fs);
        return retval;
    }
}
