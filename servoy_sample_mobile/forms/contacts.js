
/**
 * @properties={typeid:24,uuid:"BCD0E0A7-94CD-41D4-A4E1-645E5E462A50"}
 */
function showContacts(fs) 
{
	controller.showRecords(fs);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D0BBE9AF-41BF-497F-AD84-5C75978618A2"}
 */
function onDetailAction(event) 
{
	forms.contact.showContact(foundset);
}