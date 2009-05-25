/**
 * @properties={type:12,typeid:36,uuid:"9d5d39b7-e09f-4195-9ffe-a1ba079cd088"}
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
 * @properties={type:12,typeid:36,uuid:"a6be3cf7-89fd-4c30-9037-88fe4836a067"}
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

/**
 * @properties={type:12,typeid:36,uuid:"538db8d4-7794-4fa0-99a7-389922ddc61b"}
 */
function rowBgcolor_ltgrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return "#f0f0f0"; // light grey for the selected row
}else{ 
	return "#FFFFFF"; //white
}
}
