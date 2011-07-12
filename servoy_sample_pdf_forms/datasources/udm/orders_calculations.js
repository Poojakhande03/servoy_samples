/**
 * @properties={type:12,typeid:36,uuid:"053baf73-777a-4563-8c57-3a9028068c00"}
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
 * @properties={typeid:36,uuid:"A6D90A78-5FAA-45AD-87FB-57572FC09490"}
 */
function rowbgcolor_ltgrey(index, selected) {
	if (selected){
	   return "#f0f0f0"; // light grey for the selected row
	}else{ 
		return "#FFFFFF"; //white
	}
}
