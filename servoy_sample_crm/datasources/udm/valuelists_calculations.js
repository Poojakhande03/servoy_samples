/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"8CE4E3F9-786E-4B3D-A096-AF91D18CF11A"}
 */
function bgRowColor_ltGrey(index, selected) {
	if (selected){
	   return globals.core_color_bgRowColor; // light grey for the selected row
	}else{ 
		return globals.core_color_defaultBgColor; //white
	}
}
