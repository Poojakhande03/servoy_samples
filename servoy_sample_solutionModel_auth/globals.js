/**
 * @param {String} arg0
 * @param {String} arg1
 * 
 * @properties={typeid:24,uuid:"BFE7E5D9-88C2-4850-8164-1B6C113CB598"}
 */
function auth(arg0, arg1) {
	var check = security.checkPassword(security.getUserUID(arg0), arg1);
	var logg = security.login(arg0, security.getUserUID(arg0), ['Administrators']);
	return check && logg;
}
