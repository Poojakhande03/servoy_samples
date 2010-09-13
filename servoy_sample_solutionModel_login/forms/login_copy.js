/**
 * @properties={typeid:35,uuid:"34C8E4BE-379A-4351-B2C1-081A01111980"}
 */
var password = null;

/**
 * @properties={typeid:35,uuid:"7C26FE24-73F1-4E29-B7F9-8B1120245E23"}
 */
var username = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B6BD13E-E2F5-42B1-A7F6-D5FF7301F3A5"}
 */
function login(event) {
	var creds = new Array(username, password);
	var auth = security.authenticate('servoy_sample_solutionModel_auth', 'auth', [username, password]);
	return auth;
}
