/**
 * @type String
 *
 * @properties={typeid:35,uuid:"86BB4BA4-7BBF-4E22-93DB-C9E6E94DA24F",variableType:12}
 */
var pass = null;

/**
 * @type String
 *
 * @properties={typeid:35,uuid:"432E3478-9C69-4273-A79C-AFAE020B75F9",variableType:12}
 */
var user = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E38E2743-A907-4947-B95D-0AA334D79150"}
 */
function login(event) {
	security.authenticate('servoy_sample_solutionModel_auth', 'auth', [user, pass]);
	globals.login_user_uid = security.getUserUID();
}
