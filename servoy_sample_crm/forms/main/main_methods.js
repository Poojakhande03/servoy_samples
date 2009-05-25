/**
 * @properties={typeid:24,uuid:"bf53acc4-b35b-486f-b8df-bd23bb8b5908"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 * @properties={typeid:24,uuid:"2ff67bd0-c130-4563-bd6b-b2028eba469f"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons.btn_delete();
}

/**
 * @properties={typeid:24,uuid:"a9784706-24d6-4c8f-ad9c-a7023f470484"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons.btn_add();
}

/**
 * @properties={typeid:24,uuid:"03ae54ed-d3bd-496b-b84d-b7969ca35da1"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons.btn_print();
}

/**
 * @properties={typeid:24,uuid:"8e2ca382-20f8-4309-b687-017765500cc4"}
 */
function cmd_search()
{
	forms.frm_nav_main.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"b7cc0511-6e09-4a15-a52c-5d926b24fab7"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"3d77148d-e6ec-4a19-817d-a85cd92bdc19"}
 */
function evt_find()
{
	forms.frm_nav_main.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"60d0b02b-d4ff-47c2-b094-ea94673ffa2c"}
 */
function onShow()
{
}

/**
 * @properties={typeid:24,uuid:"2d1862e4-d790-46ce-8ac6-ad098659bbd9"}
 */
function showDialog()
{
	globals.showDialog('Bob Tester')
}

/**
 * @properties={typeid:24,uuid:"3a129578-8eef-47d5-8d3e-73c7d3fb5dee"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav','forms.main.elements.tabs_nav','forms.main.elements.tabs_main')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error');	
}

/**
 * @properties={typeid:24,uuid:"bd41ba9a-8f1f-4ff3-aaca-c2c0b5fdccc1"}
 */
function showInfo()
{
	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}
