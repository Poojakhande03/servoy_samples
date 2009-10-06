/**
 * @properties={type:12,typeid:36,uuid:"dca04861-c540-46be-b454-48125ecf4d0b"}
 */
function bgRowColor_ltGrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return globals.core_color_bgRowColor; // light grey for the selected row
}else{ 
	return globals.core_color_defaultBgColor; //white
}
}
