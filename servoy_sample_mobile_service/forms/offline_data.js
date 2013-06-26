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