/**
 * @properties={typeid:24,uuid:"eb3d891d-ec1b-4c60-8f62-40b8fd151756"}
 */
function btn_print()
{
	var maxWidth = forms.frm_info.elements.fld_info.getWidth()-40
	globals.print_HTML = utils.stringReplace(globals.display_HTML, '<table width=' + maxWidth, '<table width=300')
	//globals.print_HTML = globals.display_HTML
	forms.frm_print.controller.showPrintPreview(true)
}
