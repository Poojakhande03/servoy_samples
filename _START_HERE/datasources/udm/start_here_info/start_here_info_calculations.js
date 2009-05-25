/**
 * @properties={type:12,typeid:36,uuid:"ae0ebae4-8464-4542-9414-bb20a57dd584"}
 */
function bgRowColor_ltGrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return globals.core_color_bgRowColor; // light grey for the selected row
}else{ 
	return globals.core_color_defaultBgColor; //white
}
}

/**
 * @properties={type:12,typeid:36,uuid:"e6e416f1-c5d3-4a91-b8f2-ca1e55fbe7f8"}
 */
function icon_display()
{
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
