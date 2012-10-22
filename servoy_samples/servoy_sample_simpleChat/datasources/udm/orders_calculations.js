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
