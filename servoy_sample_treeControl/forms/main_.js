/**
 * @properties={typeid:24,uuid:"64CC95D3-E664-43E4-ACAB-C08FEA35D03B"}
 */
function node_selected()
{
	//the dbtreeview bean passes the row pk id from the selected node to this method
	var selected_node_id = arguments[0]

	//Search for the row we have selected in the dbtreeview
	controller.find();
	node_id = selected_node_id;
	var recordCount = controller.search();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7AFAD97E-2066-4C24-827A-326F6BBA651F"}
 */
function onShow(firstShow, event) {
	elements.main.dividerLocation = 0.25;
}
