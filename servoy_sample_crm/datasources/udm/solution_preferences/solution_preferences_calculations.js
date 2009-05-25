/**
 * @properties={type:12,typeid:36,uuid:"d2a318ba-222c-47a2-8447-bb0099706f36"}
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
