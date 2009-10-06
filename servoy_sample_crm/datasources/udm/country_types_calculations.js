/**
 * @properties={type:12,typeid:36,uuid:"add70fef-fc6f-4aec-9075-5c238ec202b4"}
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
