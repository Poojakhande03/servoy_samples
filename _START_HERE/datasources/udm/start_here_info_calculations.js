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
