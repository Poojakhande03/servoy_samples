/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"2EAE3204-B345-4064-8F3E-B85FD9E6E334"}
 */
function bgRowColor_ltGrey(index, selected) {
//	var index    = arguments[0];
//	var selected = arguments[1];
	
	if (selected){
	   return "#f0f0f0"; // light grey for the selected row
	}else{ 
		return "#FFFFFF"; //white
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"cbd97599-7eac-4180-807f-8f9a1b35d00b"}
 */
function icon_display()
{
var x = '<html><img src="'
if(globals.chatToUserID == chat_user_id)
{
	return x + 'media:///person.gif' + '" border=0></html>'
}
else
{
	return x + 'media:///greyNav_right.gif' + '" border=0></html>'
}
}
