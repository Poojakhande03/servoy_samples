/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"945F8DE4-CDA4-4350-9756-E0BE15CC8FEA"}
 */
function bgRowColor_ltGrey(index, selected) {
	if (selected){
	   return globals.core_color_bgRowColor; // light grey for the selected row
	}else{ 
		return globals.core_color_defaultBgColor; //white
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"e6e416f1-c5d3-4a91-b8f2-ca1e55fbe7f8"}
 */
function icon_display() {
	var top = '<html><img border=0 src="media:///'
	
	if(info_id == globals.cur_infoId)
	{
		return top + 'nav_right_red_whiteBg.gif"></html>'
	}
	else
	{
		return top + 'greyNav_right.gif"></html>'
	}
}
