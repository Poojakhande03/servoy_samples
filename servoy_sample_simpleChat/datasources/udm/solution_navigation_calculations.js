/**
 * @properties={type:12,typeid:36,uuid:"776a9c11-1347-434d-83e2-949c49b7624b"}
 */
function display_icon()
{
if(icon_name)
{
	return '<html><div align="center"><img src="media:///' + icon_name + '" border=0></div></html>'
}
else
{
	return '<html>&nbsp;</html>'
}
}

/**
 * @properties={type:12,typeid:36,uuid:"bee35dc6-69e1-41b9-aaac-50e3874c9b8e"}
 */
function display_row()
{
var HTML = '<html><table border="0" cellpadding="0" cellspacing="0" with="195">'

if(globals.nav_itemName != '' && globals.nav_itemName != null && item_name == globals.nav_itemName)
{
	HTML += '<tr bgcolor="#f0f0f0" width="195" height="25">'
}
else
{
	HTML += '<tr bgcolor="#ffffff" width="195" height="25">'
}

var icon = '&nbsp;&nbsp;'

/*
if(icon_name) icon += '<img src="media:///' + icon_name + '" border=0>&nbsp;'
*/

if(globals.nav_itemName != '' && globals.nav_itemName != null && item_name == globals.nav_itemName)
{
	HTML += '<td width="175" height="25" valign="bottom">' + icon + '<b>&nbsp;' + item_name + '</b>'
}
else if(item_name)
{
	HTML += '<td width="175" height="25" valign="bottom">' + icon + '&nbsp;'  + item_name 
}


return HTML + '</td></tr></table></html>'
}
