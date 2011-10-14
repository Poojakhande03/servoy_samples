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
