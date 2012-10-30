/**
 * @properties={typeid:24,uuid:"bad16c66-c710-4178-8bee-2daff6568d27"}
 * @SuppressWarnings(unused)
 */
function btn_pickUser() {
	var a = databaseManager.getFoundSetCount(foundset)

	if(controller.getMaxRecordIndex() > 0) {
		globals.chatToUserID = chat_user_id
		globals.chatFromUserID = globals.chatToUserID
		globals.toIP = gchattouserid_to_chat_users.ip_address

		//enable the background elements
		globals.enableBgElements()

		//go to the message field
		forms.frm_chat.elements.fld_message.requestFocus(false)
	}
}

/**
 * @properties={typeid:24,uuid:"252c8c17-4e73-4697-a02e-c3349a70addb"}
 */
function btn_sortAsc() {
	elements.btn_sortAsc.imageURL = 'media:///sort_asc_blk.gif';
	elements.btn_sortDesc.imageURL = 'media:///sort_desc_grey.gif';
	controller.sort("company_name asc")
}

/**
 * @properties={typeid:24,uuid:"bfa83194-45ac-48e6-aae2-5a3adbbc03c0"}
 */
function btn_sortDesc() {
	elements.btn_sortAsc.imageURL = 'media:///sort_asc_grey.gif';
	elements.btn_sortDesc.imageURL = 'media:///sort_desc_blk.gif';
	controller.sort("company_name desc")
}

/**
 * @properties={typeid:24,uuid:"6751cbca-f981-40e8-a93e-82d1e0194875"}
 */
function btn_toggleList() {
	//zoom the record list open and closed
	//make the rec list bigger or smaller
	var lh = forms.frm_nav_main.elements.tabs_recList.getHeight()

	if(lh > 23) {
		//expanded - so make smaller
//		elements.btn_triangle.setImageURL('media:///arrow_closed.gif')
	}
	else {
		//not expanded - so make bigger
//		elements.btn_triangle.setImageURL('media:///arrow_open.gif')
	}

	forms.frm_nav_main.sub_toggleRecList();
}
