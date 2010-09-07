/**
 * @properties={typeid:24,uuid:"4B79A423-33B4-40E9-A7B2-654CEEE9E2A5"}
 */
function auth() {
	var groups = new Array('Administrators');
	var create = security.createUser(arguments[0], arguments[1]);
	var add = security.addUserToGroup(security.getUserUID(arguments[0]), groups[0]);
	var check = security.checkPassword(security.getUserUID(arguments[0]),arguments[1]);
	var logg = security.login(arguments[0], security.getUserUID(arguments[0]), groups);
	
	return (create && add && check && logg);
}
