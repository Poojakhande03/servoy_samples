/**
 * @properties={typeid:24,uuid:"6eceb73c-1761-4666-9333-de7b5f270d9a"}
 */
function goToForm()
{
	//switch tabs in the main form - and the list form
	var rightTab = controller.getSelectedIndex()

	forms.main.elements.tabs_main.tabIndex = rightTab
	forms.frm_nav_main.elements.tabs_recList.tabIndex = rightTab
}

/**
 * @properties={typeid:24,uuid:"b2097cbb-2d75-4ded-a1ae-1cabccd1c137"}
 */
function sort()
{
	controller.sort('sort_order asc')
}
