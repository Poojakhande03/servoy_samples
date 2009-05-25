/**
 * @properties={type:12,typeid:36,uuid:"793fce45-9a98-4c98-843f-9765795fca83"}
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
