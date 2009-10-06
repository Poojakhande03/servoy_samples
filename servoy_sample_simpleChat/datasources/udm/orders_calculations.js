/**
 * @properties={type:12,typeid:36,uuid:"be216e16-27d6-4e00-bd0c-307ed6885193"}
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
 * @properties={type:12,typeid:36,uuid:"4a0189c9-f8d9-42de-90a3-3de2106bb1fa"}
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
