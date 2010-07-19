/**
 * @properties={typeid:24,uuid:"49D438CF-05D4-4403-89E9-AE1613F96ACB"}
 */
function loadFormsInBean()
{
	//modified for Servoy 3.5 to use tabs in WebClient and JSplitPane in SmartClient
	if(application.getApplicationType() != 5)
	{
		//here we assign elements to the JSplitPane beans
		elements.bean_882.orientation = 1
		elements.bean_882.dividerLocation = 200
		elements.bean_882.leftComponent = elements.treeview //the dbtreeview far left
		elements.bean_882.rightComponent = elements.bean_625 //another JSplitPane bean on right


		elements.bean_625.orientation = 0
		elements.bean_625.dividerLocation = 400
		elements.bean_625.topComponent = elements.bean_667 //another JSplitPane bean top
		elements.bean_625.bottomComponent =  elements.notes //tabless-tabpanel with Servoy Form bottom


		elements.bean_667.orientation = 1
		elements.bean_667.dividerLocation = 400
		elements.bean_667.leftComponent =  elements.text //tabless-tabpanel with Servoy Form bottom
		elements.bean_667.rightComponent =  elements.comment //tabless-tabpanel with Servoy Form bottom
	}
}

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
	elements.main.dividerLocation = 0.3;
}
