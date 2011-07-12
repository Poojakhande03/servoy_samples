/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"A76D98C8-5674-4962-9D05-B6D1902C596D"}
 */
function bgRowColor_ltGrey(index, selected) {
	if (selected){
	   return "#f0f0f0"; // light grey for the selected row
	}else{ 
		return "#FFFFFF"; //white
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"1fcca035-1c57-404e-8432-e6944588ce6a"}
 */
function icon_display()
{
var top = '<html><img border=0 src="media:///'

if(form_id == globals.curID_form)
{
	return top + 'nav_right_red_whiteBg.gif"></html>'
}
else
{
	return top + 'greyNav_right.gif"></html>'
}
}
