/**
 * @properties={typeid:24,uuid:"4B79A423-33B4-40E9-A7B2-654CEEE9E2A5"}
 */
function auth() {
	var check = security.checkPassword(security.getUserUID(arguments[0]),arguments[1]);
	var logg = security.login(arguments[0], security.getUserUID(arguments[0]), ['Administrators']);
	
	return (check && logg);
}
