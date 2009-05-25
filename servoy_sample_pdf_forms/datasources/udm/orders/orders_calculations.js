/**
 * @properties={type:12,typeid:36,uuid:"053baf73-777a-4563-8c57-3a9028068c00"}
 */
function paid_display()
{
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
 * @properties={type:12,typeid:36,uuid:"194edcd3-9ac3-4bc1-9a14-57e29824eef6"}
 */
function rowbgcolor_ltgrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return "#f0f0f0"; // light grey for the selected row
}else{ 
	return "#FFFFFF"; //white
}
}
