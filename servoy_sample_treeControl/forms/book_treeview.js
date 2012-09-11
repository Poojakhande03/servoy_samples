/**
 * @properties={typeid:24,uuid:"3ba5493a-2e04-4e5d-af35-493fff1c7048"}
 */
function initTreeView()
{

	if (globals.didTreeViewInit == 0)
	{
		//A binding object is needed for tree initialization
		//set the relation to discover other nodes (when clicked open)
		var binding = elements.dbtreeview.createBinding(controller.getDataSource());

		binding.setNRelationName('book_nodes_to_book_nodes_parent_childs');
		
		//set the name of dataprovider to use for text display on a node
		binding.setTextDataprovider('label_text');

		//set the method to call and dataprovider value to pass when node clicked
		binding.setCallBackInfo(globals.node_selected,'node_id');

		refreshTreeView();
		globals.didTreeViewInit = 1
		var pathAr = new Array(1,2,3);
		
		elements.dbtreeview.setExpandNode(pathAr,true);
		elements.dbtreeview.selectionPath = pathAr;
	}
//For more information on dbtreeview bean use,
//please read here: http://forum.servoy.com/viewtopic.php?f=22&t=9957
}

/**
 * @AllowToRunInFind
 * 
 * @param {Object} arg0 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"905DEE44-EAE1-4F64-8D9F-4971F3125E6E"}
 */
function node_selected(arg0)
{

	//the dbtreeview bean passes the row pk id from the selected node to this method
	var selected_node_id = arg0;

	//search for the row we have been passed in the dbtreeview
	controller.find()
	node_id = selected_node_id
	var recordCount = controller.search()
}

/**
 * @properties={typeid:24,uuid:"04fa66e3-2a71-415d-b02e-8aa8b9d019fe"}
 * @AllowToRunInFind
 */
function refreshTreeView()
{

	//search the root node(s)
	controller.find();
	parent_id = 0;
	controller.search();

	//set the root node(s) and set the name of dataprovider to use for text display on a node
	elements.dbtreeview.addRoots(foundset);
}
