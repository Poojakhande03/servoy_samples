/**
 * @properties={type:12,typeid:36,uuid:"9d5d39b7-e09f-4195-9ffe-a1ba079cd088"}
 */
function display_icon() {
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
function display_row() {
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
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"44FB9DE4-FEAD-4386-BB65-291D8308DC84"}
 */
function rowBgcolor_ltgrey(index, selected) {
	if (selected){
	   return "#f0f0f0"; // light grey for the selected row
	}else{ 
		return "#FFFFFF"; //white
	}
}
