/**
 * @properties={typeid:24,uuid:"BFE7E5D9-88C2-4850-8164-1B6C113CB598"}
 */
function auth() {
	var groups = new Array('Administrators');
	var create = security.createUser(arguments[0], arguments[1]);
	var add = security.addUserToGroup(security.getUserUID(arguments[0]), groups[0]);
	var check = security.checkPassword(security.getUserUID(arguments[0]),arguments[1]);
	var logg = security.login(arguments[0], security.getUserUID(arguments[0]), groups);
	
	return (create && add && check && logg);
}
