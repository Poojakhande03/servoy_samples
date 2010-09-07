/**
 * @properties={typeid:35,uuid:"A1C586EB-6518-44D0-85E1-7294D84B0DE3"}
 */
var password = null;

/**
 * @properties={typeid:35,uuid:"B000715F-85B4-4413-969A-30BB0D0666F2"}
 */
var username = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"890BBC24-A2AD-4DD7-B159-24EFD0B8437A"}
 */
function login(event) {
	var creds = new Array(username, password);
	var auth = security.authenticate('servoy_sample_solutionModel_auth', 'auth', creds);
	return auth;
}
