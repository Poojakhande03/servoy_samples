/**
 * @properties={typeid:35,uuid:"d316ef1d-af3b-48ce-8fbe-5be024639f31",variableType:4}
 */
var book_id;

/**
 * @properties={typeid:35,uuid:"6eace679-4f4d-4449-9e44-13656ee0ca21",variableType:4}
 */
var chapter_id;

/**
 * @properties={typeid:35,uuid:"1c751603-ff25-498a-b97d-b6c858e840aa",variableType:4}
 */
var didTreeViewInit = 0;

/**
 * @properties={typeid:35,uuid:"73846e14-b06e-4a1e-b255-6b2ced22cd28",variableType:4}
 */
var sub_id;

/**
 * @properties={typeid:24,uuid:"d8e98824-36a5-463a-9b8d-39344ca9f0b4"}
 */
function node_selected()
{
	
	//the dbtreeview bean passes the row pk id from the selected node to this method
	//since the dbtreeview only can call global methods,we forward the call to a specific form
	forms.book_treeview.node_selected(arguments[0])
}

/**
 * @properties={typeid:24,uuid:"097276c9-3ea5-4582-b8e6-c5a3c7da2c90"}
 */
function openSolution()
{
	if(application.getApplicationType() == 5) //WebClient
	{
		forms.main.elements.bean_625.visible = false
		forms.main.elements.bean_667.visible = false
		forms.main.elements.bean_882.visible = false

		forms.main.elements.comment.tabIndex = 2

		forms.main.elements.text.tabIndex = 2

		forms.main.elements.lbl_title.text = "Example - Ajax Tree Control"
	}
}
