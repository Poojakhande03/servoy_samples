/**
 * @properties={typeid:24,uuid:"13b9cb77-67f3-45b1-a660-3e0e747ea803"}
 */
function cmd_deleteRecord()
{
forms.frm_buttons.btn_delete();
}

/**
 * @properties={typeid:24,uuid:"b09c8a88-1901-470c-a0d9-c5dfc9b4c55b"}
 */
function cmd_find()
{
forms.frm_nav_main.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"6cf32097-c9ea-4c4e-b917-bcff6f277794"}
 */
function cmd_newRecord()
{
forms.frm_buttons.btn_add();
}

/**
 * @properties={typeid:24,uuid:"3196e98c-b6c1-4b16-b857-76264fff2e66"}
 */
function cmd_showAll()
{
forms.frm_buttons.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"3eff9220-1b58-477a-95be-5d5ddd643796"}
 */
function onShow()
{
elements.tabs_dialog.visible = false
}
