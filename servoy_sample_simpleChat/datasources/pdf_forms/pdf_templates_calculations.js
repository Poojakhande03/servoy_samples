/**
 * @properties={type:12,typeid:36,uuid:"37c616cc-cfdf-4cf2-a838-f454c73a3752"}
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
 * @properties={type:12,typeid:36,uuid:"7f367103-0789-498e-ba37-0025dd0ddf7c"}
 */
function delete_text()
{
return 'Are you sure you really want to delete the template\n"' + template_name + 
	'"?\n\nNOTE: This will also DELETE the form from the database.'
}
