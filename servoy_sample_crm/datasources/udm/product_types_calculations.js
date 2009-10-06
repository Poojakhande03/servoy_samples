/**
 * @properties={type:12,typeid:36,uuid:"1bb2336d-ee19-48ea-b003-8a4a769c21b9"}
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
