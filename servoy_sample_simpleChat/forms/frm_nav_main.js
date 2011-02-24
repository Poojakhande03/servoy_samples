/**
 * @properties={typeid:24,uuid:"9d7cd50b-e76d-42db-945c-c563036b8bba"}
 * @AllowToRunInFind
 */
function btn_login_logOut() {
	//see if we're already logged in
	if(elements.btn_login.text == 'Login') {
		if(globals.localUserName) {
			//we're not logged in yet
			forms.lst_control_usersLogin.controller.newRecord(false)
			forms.lst_control_usersLogin.ip_address = application.getIPAddress()
			forms.lst_control_usersLogin.login_time = new Date()
			forms.lst_control_usersLogin.status = 1
			forms.lst_control_usersLogin.user_name = globals.localUserName

			//start the udp stuff
			globals.startUDP();

			globals.loginID = forms.lst_control_usersLogin.chat_user_id
			elements.fld_login.enabled = false
			elements.btn_login.text = 'Logout'

			if(globals.chatToUserID && globals.toIP) {
				//someone selected to login
				globals.enableBgElements()
			}
			else {
				//just enable the list so they can choose someone
				forms.frm_nav_main.elements.tabs_recList.enabled = true
			}

			databaseManager.saveData(); //so it registers
			forms.lst_chatUsers.controller.loadRecords(mylogin_not_equal_chat_users)
		}
		else {
			globals.showErrorDialog('You need to specify a user name before logging in.', null, 'OK', null, null, null)
		}
	}
	else {
		//we're logged in - so log us out
		forms.lst_control_usersLogin.controller.find()
		forms.lst_control_usersLogin.chat_user_id = globals.loginID
		var found = forms.lst_control_usersLogin.controller.search()

		if(found > 0) {
			forms.lst_control_usersLogin.controller.deleteRecord()
			forms.lst_chatUsers.controller.loadRecords(mylogin_not_equal_chat_users)
		}

		//keep track of the last conversation in case they decide to log back in
		globals.lastChatFromUserID = globals.chatFromUserID

		globals.chatFromUserID = null
		globals.chatMsg = null
		globals.chatToUserID = null

		//send a "logged out" message to the person they are chatting with
		var packet = plugins.udp.createNewPacket()
		msg = '<font color="#990000">-- ' + globals.localUserName + ' logged out -- </font>'
		packet.writeUTF(msg)
		plugins.udp.sendPacket(globals.toIP,packet)
		elements.fld_login.enabled = true
		elements.btn_login.text = 'Login'

		//stop the UDP
		globals.stopUDP();
	}
}

/**
 * @properties={typeid:24,uuid:"451a29e6-f305-4cdf-be90-0d1e6fa6a348"}
 */
function sub_toggleRecList() {
	//make the rec list bigger or smaller
	var lh = elements.tabs_recList.getHeight()
	var lw = elements.tabs_recList.getWidth()

	var nx = elements.tabs_solNav.getLocationX()
	var ny = elements.tabs_solNav.getLocationY()

	if(lh > 23) {
		//records currently showing - so hide
		elements.tabs_recList.setSize(lw, 23)
	}
	else {
		//records not showing - so show list
		elements.tabs_recList.setSize(lw, 346)
	}

	elements.tabs_solNav.setLocation(nx, elements.tabs_recList.getHeight()+ 2)
}
