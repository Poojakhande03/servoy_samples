/**
 * @properties={type:12,typeid:36,uuid:"ac375b38-ef40-486b-bf16-ab0ce6254588"}
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
