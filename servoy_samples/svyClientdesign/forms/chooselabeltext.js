/**
 * @type String
 *
 * @properties={typeid:35,uuid:"92727947-D459-4BF8-8900-50004A945D0B",variableType:12}
 */
var labelText = null;

/**
 * @properties={typeid:24,uuid:"407562A0-2A0A-4C72-B1D1-5F441710636A"}
 */
function okAction()
{
	_super.okAction(null);
	callback(labelText);
}
