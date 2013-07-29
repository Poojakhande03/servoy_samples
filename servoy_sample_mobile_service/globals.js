/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5D902702-5582-4CC2-8FD8-8FA42590012A"}
 */
var username = null;


/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"0323582E-1B81-4C15-B4D0-7B6AA5D87047"}
 */
function onSolutionOpen() {
	// prevent prefilling of form foundsets with default query
	databaseManager.setCreateEmptyFormFoundsets()
}
