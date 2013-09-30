/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B124599C-FB4F-41FA-A48D-BDB33DA35F6D"}
 */
var searchTerm = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8DDD74A-9F77-42A5-A6A7-F2EDCB514483"}
 */
var resultMessage = "";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"510D4FCA-BADB-46CD-A8FC-4579F5A6DE5A"}
 * @AllowToRunInFind
 */
function onRemoteSearch(event) {
	
	/** @type {JSFoundset<db:/udm/products>} */
	var searchFoundset = databaseManager.getFoundSet("db:/udm/products")
	if (searchFoundset.find()) {
		// make it a full like search by placing it between %
		searchFoundset.product_name = '#%' + searchTerm + '%';
		resultMessage = "";
		$.mobile.loading('show', {text: "Calling the server to search for '" + searchTerm + "'", textVisible: true});
		plugins.mobile.remoteSearch(searchFoundset,successCallback,errorCallback);
	} else {
		resultMessage = "Foundset of products failed to go into find mode";
	}

}

/**
 * @param {JSFoundSet} fs the foundset that was given to remoteSearch
 *
 * @properties={typeid:24,uuid:"7D681717-7801-4935-9967-61F9D3025240"}
 */
function successCallback(fs) 
{
	$.mobile.loading('hide');
   if (fs.getSize() >0) {
     // something found on the server show it in the current form
	   forms.products.controller.showRecords(fs)
   }
   else {
	   resultMessage = "no results found for '" + searchTerm + "'";
   }
}

/**
 * @param {Number} statusCode The http status code 
 * @param {String} message The message of the error
 * @param {JSFoundSet} fs The foundset that was passed to remoteSearch
 *
 * @properties={typeid:24,uuid:"8C2DB72A-F77E-40EC-B0F3-6D926DC3890C"}
 */
function errorCallback(statusCode, message, fs) 
{
	$.mobile.loading('hide');
	resultMessage = "no results found for '" + searchTerm + "', error reported: " + message + ", code:" + statusCode;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"014C77EE-F472-4353-844D-49ADA4F54A62"}
 */
function onBack(event) {
	history.back();
}
