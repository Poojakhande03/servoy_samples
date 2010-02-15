/**
 *
 * @properties={type:12,typeid:36,uuid:"70E853BC-24F9-4888-AC5D-028889864E3A"}
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
