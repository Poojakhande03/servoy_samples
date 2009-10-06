/**
 * @properties={type:12,typeid:36,uuid:"df720679-41c4-44a0-8d77-ae5c6f61e249"}
 */
function bgRowColor_ltGrey()
{
var index    = arguments[0];
var selected = arguments[1];

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
