/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C670ED3C-9D3D-4081-A50F-7EF94DA24A74"}
 */
var dataprovider = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3719ABA0-124D-43CC-8235-95D60C2F5F15",variableType:4}
 */
var fieldtype = null;

/**
 * @param {String} formname The formname for which this dataprovider should be called.
 * @param {Function} callback // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"7A4DCE15-D591-4C38-8718-69587F3B2F9E"}
 */
function show(formname, callback)
{
	var array = forms[formname].alldataproviders;
	array = array.concat(forms[formname].allvariables);
		
	application.setValueListItems("dataproviders",array);
	
	_super.show(callback)
}

/**
 * @properties={typeid:24,uuid:"FAEEF147-1AC4-4D78-8174-EBAD4A96E380"}
 */
function okAction()
{
	_super.okAction(null);
	callback(dataprovider,fieldtype);
}

/**
 * fills the fieldtype valuelist
 *
 * @properties={typeid:24,uuid:"E27CFFA0-FD76-4BA4-9D37-F29E8A42119B"}
 */
function fillFieldType()
{
	var display = new Array();
	var real = new Array();
	display[display.length] = "Calendar";
	real[real.length] = JSField.CALENDAR;
	display[display.length] = "Checks";
	real[real.length] = JSField.CHECKS;
	display[display.length] = "Combobox";
	real[real.length] = JSField.COMBOBOX;
	display[display.length] = "HTML Area";
	real[real.length] = JSField.HTML_AREA;
	display[display.length] = "Image Media";
	real[real.length] = JSField.IMAGE_MEDIA;
	display[display.length] = "Password";
	real[real.length] = JSField.PASSWORD;
	display[display.length] = "Radios";
	real[real.length] = JSField.RADIOS;
	display[display.length] = "RTF Area";
	real[real.length] = JSField.RTF_AREA;
	display[display.length] = "TextArea";
	real[real.length] = JSField.TEXT_AREA;
	display[display.length] = "TextField";
	real[real.length] = JSField.TEXT_FIELD;
	display[display.length] = "TypeAhead";
	real[real.length] = JSField.TYPE_AHEAD;
	application.setValueListItems("fieldtype",display,real);
}
