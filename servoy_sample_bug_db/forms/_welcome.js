/**
 * @properties={typeid:24,uuid:"6210f063-9a2d-4ac0-ae2e-8428b752f446"}
 */
function btn_closeDialog()
{
//	application.closeFormDialog('welcome'); closeFormDialog is deprecated
	application.getWindow('welcome').close();
	forms.frm_login.elements.login_user_name.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"91bf2c50-217d-4ec1-a750-9bc44dbf7a3b"}
 */
function onShow()
{
	elements.btn_ok.requestFocus();
}
