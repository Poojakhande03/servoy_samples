/**
 * @properties={type:12,typeid:36,uuid:"cbd97599-7eac-4180-807f-8f9a1b35d00b"}
 */
function icon_display()
{
var x = '<html><img src="'
if(globals.chatToUserID == chat_user_id)
{
	return x + 'media:///person.gif' + '" border=0></html>'
}
else
{
	return x + 'media:///greyNav_right.gif' + '" border=0></html>'
}
}
