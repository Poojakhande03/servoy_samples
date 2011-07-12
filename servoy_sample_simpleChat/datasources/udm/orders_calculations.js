/**
 * @properties={type:12,typeid:36,uuid:"be216e16-27d6-4e00-bd0c-307ed6885193"}
 */
function paid_display() {
	if(is_paid == 1)
	{
		return "<HTML><font color='#009900'>&nbsp;&nbsp;PAID</font></HTML>"
	}
	else
	{
		return "<HTML><font color='#cc0000'>&nbsp;&nbsp;PENDING</font></HTML>"
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"9C455C89-AAEE-48E5-AB83-B9A65D42034E"}
 */
function rowbgcolor_ltgrey(index, selected) {
	if (selected){
	   return "#f0f0f0"; // light grey for the selected row
	}else{ 
		return "#FFFFFF"; //white
	}
}
