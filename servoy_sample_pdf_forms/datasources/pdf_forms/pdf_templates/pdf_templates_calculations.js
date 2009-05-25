/**
 * @properties={type:12,typeid:36,uuid:"04748193-8901-4082-9719-2b575ea4d98c"}
 */
function bgRowColor_ltGrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return "#f0f0f0"; // light grey for the selected row
}else{ 
	return "#FFFFFF"; //white
}
}

/**
 * @properties={type:12,typeid:36,uuid:"8de03910-6522-4674-89f3-0fc32010fee7"}
 */
function delete_text()
{
return 'Are you sure you really want to delete the template\n"' + template_name + 
	'"?\n\nNOTE: This will also DELETE the form from the database.'
}

/**
 * @properties={type:12,typeid:36,uuid:"f01156f4-b6f8-46f1-8073-dcc875e57509"}
 */
function icon_display()
{
var top = '<html><img border=0 src="media:///'

if(template_id == globals.curID_template)
{
	return top + 'nav_right_red_whiteBg.gif"></html>'
}
else
{
	return top + 'greyNav_right.gif"></html>'
}
}
