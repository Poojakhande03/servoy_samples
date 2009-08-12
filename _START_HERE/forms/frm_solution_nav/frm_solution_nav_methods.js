/**
 * @properties={typeid:24,uuid:"1237187c-f2b4-4dbb-889d-bf20175f4af2"}
 */
function btn_goRecord() {
	//update global
	globals.cur_infoId = info_id

	//setup the HTML
	globals.setupHTML();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D85D2B6-F241-40B3-8E0A-EFA423677E09"}
 */
function onShowForm(firstShow, event) {
	controller.sort('item_name asc');
}
