/**
 * @properties={type:12,typeid:36,uuid:"e7d027bd-6a9d-48cd-936b-29a4d371b20d"}
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
