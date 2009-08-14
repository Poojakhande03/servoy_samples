/**
 * @properties={typeid:24,uuid:"e25bbdb3-a73a-4716-9b23-9d785bcbf6fe"}
 */
function goToForm() {
	//switch tabs in the main form - and the list form
	var rightTab = controller.getSelectedIndex();

	forms.main.elements.tabs_main.tabIndex = rightTab;
	forms.frm_nav_main.elements.tabs_recList.tabIndex = rightTab;
}

/**
 * @properties={typeid:24,uuid:"ed4bafe0-e304-41b6-a75e-54cd838bc67a"}
 */
function sort() {
	controller.sort('sort_order asc');
}
