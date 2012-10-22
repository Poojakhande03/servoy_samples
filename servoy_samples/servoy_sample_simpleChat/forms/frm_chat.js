/**
 * @properties={typeid:24,uuid:"171de8ad-dc84-4f20-8899-dbb15a57a707"}
 */
function send_msg() {
	if(globals.chatMsg) {
		var toIP = globals.toIP;
		var msg = globals.chatMsg;
		var localUser = globals.localUserName;
		var fontColor = '#666666';
		if(msg.indexOf(':') != -1) {
			//trying to send this message to someone else
			var user = utils.stringLeft(msg, utils.stringPosition(msg, ':', 1, 1)-1);

			//try to find the other person
			forms.lst_control_usersLogin.controller.find();
			forms.lst_control_usersLogin.user_name =  user + '%';
			var found = forms.lst_control_usersLogin.controller.search();
			if(found == 1) //NO MORE THAN ONE PERSON CAN BE FOUND
			{
				toIP = forms.lst_control_usersLogin.ip_address;
				user = forms.lst_control_usersLogin.user_name;
				localUser += ' (to ' + user + ')';
				msg = utils.stringRight(msg, msg.length - (msg.indexOf(':')+1));
				fontColor = '#9999ff';
			}
		}
		else {
			if(globals.lastChatUserIP != globals.toIP) {
				//started conversation with someone new
				globals.received = '<html><table border=0 width=100%><tr bgcolor=#666666><td><font color=#ffffff>' +
				'Started conversation with ' + gchattouserid_to_chat_users.user_name + ' at ' + 
				utils.dateFormat(new Date(), 'HH:mm') + '</font></td></tr></table><br>' + globals.received;
			}
			globals.lastChatUserIP = globals.toIP;
		}

		var packet = plugins.udp.createNewPacket();
		
		packet.writeUTF(utils.stringTrim(msg));
		plugins.udp.sendPacket(toIP, packet);
		globals.received = '<html><font color="' + fontColor + '">' + localUser +' - ' + utils.dateFormat(new Date(), 'HH:mm') + ': ' + msg + '</font><br>' + globals.received;
	}
	globals.chatMsg = '';
}
