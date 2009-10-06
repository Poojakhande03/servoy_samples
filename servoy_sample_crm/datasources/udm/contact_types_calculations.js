/**
 * @properties={type:12,typeid:36,uuid:"5a21e7b6-d5c3-47dd-a9cf-7723e3559688"}
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
