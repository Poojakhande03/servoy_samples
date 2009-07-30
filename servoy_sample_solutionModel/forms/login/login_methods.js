/**
 * @properties={typeid:35,uuid:"15E979E4-DC92-46C7-AF81-F50A8F78D8E4"}
 */
var password = null;

/**
 * @properties={typeid:35,uuid:"9CB6FDAE-8CC1-4901-B28E-454156DB9BD5"}
 */
var username = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E0A7F3D3-5A3E-409B-8EE1-ADAAD52ABB9B"}
 */
function login(event)
{
	if (username == null) return;
	var groups = new Array()
	groups[0] = 'Administrators'; //normally these groups are for example received from LDAP based on name and password
	var ok = security.login(username,utils.stringReplace(username.toLowerCase(), ' ', ''), groups)
}
