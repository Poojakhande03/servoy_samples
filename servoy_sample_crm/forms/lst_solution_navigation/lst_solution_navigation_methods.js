/**
 * @properties={typeid:24,uuid:"d8232e5e-ca61-4b51-8a40-a7c5a8746a6f"}
 */
function btn_goForm()
{
	//switch tabs in the main form - and the list form
	var rightTab = controller.getSelectedIndex()

	forms.main.elements.tabs_main.tabIndex = rightTab
	forms.frm_nav_main.elements.tabs_recList.tabIndex = rightTab

	if(item_name.indexOf('Admin') == -1)
	{
		//update the record information
		globals.setupRecordStatus();

		//hide search stuff
		forms.frm_nav_main.elements.lbl_search.visible = true
		forms.frm_nav_main.elements.fld_search.visible = true
		forms.frm_nav_main.elements.btn_search.visible = true
	}
	else
	{
		//hide search stuff
		forms.frm_nav_main.elements.lbl_search.visible = false
		forms.frm_nav_main.elements.fld_search.visible = false
		forms.frm_nav_main.elements.btn_search.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"746c8df6-cc97-4b7e-9d40-127943096979"}
 */
function btn_showDialog()
{
	globals.showDialog('Bob Tester')
}

/**
 * @properties={typeid:24,uuid:"615159a6-36cf-45c1-a7b7-5ffa1144c81f"}
 */
function btn_showNewErrorDialog()
{
	//plugins.dialogs.showErrorDialog( 'My Title',  "Here is the message, it can be very long!",  'OK', "Cancel","No Way")
	
	//globals.showIconDialog2('Error', 'There has been a TERRIBLE error!!','error');
	
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!','error', 'Cancel', 'OK');
}

/**
 * @properties={typeid:24,uuid:"237b37d8-f5ec-4ae6-aa1b-76c419292008"}
 */
function nav()
{
	globals.nav_itemName = item_name
	application.updateUI()
}

/**
 * @properties={typeid:24,uuid:"8bfac57f-7f6b-40f7-a6b4-2187bd85fa9d"}
 */
function setupNav()
{
	//get all the rows of the current foundset
	var dataset = databaseManager.getFoundSetDataProviderAsArray(foundset, 'item_name')
	var dataset2 = databaseManager.getFoundSetDataProviderAsArray(foundset, 'icon_name')
	var max = dataset.length
	var item = ''
	var html = '<html><body>'

	if(max > 0)
	{
		html += '<table width="100%" border=0 cellpadding=0 cellspacing=0>\n'

		for( var i = 0 ; i < max ; i++ )
		{
			if(globals.nav_node == i+1)
			{
				/*
			html += '<tr bgcolor="#666666"><td height=25 valign="middle"><font face="Verdana, sans-serif" color="#ffffff">' +
			'<img src="media:///' + dataset2[i] + '" border=0>&nbsp;&nbsp;<b>' + dataset[i] + '</b></font></td></tr>\n'
				 */
			html += '<tr bgcolor="#666666"><td height=25 valign="bottom"><font face="Verdana, sans-serif" color="#ffffff">' +
			'&nbsp;&nbsp;<b>' + dataset[i] + '</b></font></td></tr>\n'
			}
			else
			{
				html += '<tr><td height=20 valign="middle"><img src="media:///' + dataset2[i] + '" border=0>&nbsp;' + dataset[i] + '</td></tr>\n'
			}
		}
	}

	html += '</table>\n</body>\n</html>'

	globals.nav_solution = html
}
