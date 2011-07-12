/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"4F0D3A5E-7523-4C21-A485-5E2FDF3CE342"}
 */
function bgRowColor_ltGrey(index, selected) {
	if (selected){
	   return globals.core_color_bgRowColor; // light grey for the selected row
	}else{ 
		return globals.core_color_defaultBgColor; //white
	}
}
