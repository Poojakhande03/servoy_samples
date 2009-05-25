/**
 * @properties={typeid:24,uuid:"1d09eae2-d16a-4f3c-afcc-ab69d606ec46"}
 */
function btn_cancel()
{
databaseManager.rollbackTransaction()
hide_btn_reset_fields();
}

/**
 * @properties={typeid:24,uuid:"43f10f5f-a4d0-44c9-af48-b42ef0c23f85"}
 */
function btn_editValues()
{
globals.btn_viewPDF('doc', template_id, 1)

}

/**
 * @properties={typeid:24,uuid:"8b8378fe-1095-431d-b6f0-cc2a67b77db1"}
 */
function btn_save()
{
if(template_id)
{
	databaseManager.commitTransaction()
	hide_btn_reset_fields();
	
	onRecordSelect(); //to refresh buttons
}
else
{
	globals.showErrorDialog('You must fill in the template.', null, 'OK');
}
}

/**
 * @properties={typeid:24,uuid:"a8c604f5-d417-493f-b893-ee1d7e9eea29"}
 */
function btn_viewPDF()
{
globals.btn_viewPDF('doc', template_id)

}

/**
 * @properties={typeid:24,uuid:"311ea647-2241-413c-8da5-48aacb2d4d94"}
 */
function doEdit()
{
databaseManager.startTransaction()

var allNames = elements.allnames

for ( var i = 0 ; i < allNames.length ; i++ )
{
    //work on fields only - starting with name "fld_"
    if(allNames[i].indexOf('fld_') >= 0)
    {
        //if it's a field - then change color and make editable
        elements[allNames[i]].bgcolor = '#feffe4'
        elements[allNames[i]].readOnly = false
    }
}

//show buttons
elements.btn_save.visible = true
elements.btn_cancel.visible = true

//show popup menu field
elements.fld_templateNamec.visible = true

//hide the view button
elements.btn_view.visible = false
}

/**
 * @properties={typeid:24,uuid:"e50db244-b326-4587-9676-7f8e7dd9c33e"}
 */
function hide_btn_reset_fields()
{
var allNames = elements.allnames

for ( var i = 0 ; i < allNames.length ; i++ )
{
	//work on fields only - starting with name "fld_"
	if(allNames[i].indexOf('fld_') >= 0)
	{
		//if it's a field - then change color and make editable
		elements[allNames[i]].bgcolor = '#f0f0f0'
		elements[allNames[i]].readOnly = true
	}
}

//hide buttons
elements.btn_save.visible = false
elements.btn_cancel.visible = false

//hide popup menu field
elements.fld_templateNamec.visible = false


//show the view button
elements.btn_view.visible = true

var id = form_id

//sort
forms.lst_pdf_forms.btn_sortAsc();

forms.lst_pdf_forms.foundset.selectRecord(id)
}

/**
 * @properties={typeid:24,uuid:"36dda966-b729-4ba9-a74d-16fc2a260132"}
 */
function onRecordSelect()
{
//update the record status
globals.setupRecordStatus();
}

/**
 * @properties={typeid:24,uuid:"a87a39c0-1501-4343-8d95-25d1349c8c37"}
 */
function onShow()
{
//show the add button
if(application.getApplicationType() == 5)
{
	forms.frm_buttons.elements.btn_add.visible = true
	forms.frm_buttons.elements.lbl_add.visible = true
}

//make read only
controller.readOnly = true

//hide save/cancel btsn
elements.btn_save.visible = false
elements.btn_cancel.visible = false

//update record status
globals.setupRecordStatus();

//hide popup menu field
elements.fld_templateNamec.visible = false
}

/**
 * @properties={typeid:24,uuid:"9dccc12b-7ef7-4808-a5eb-a091dc88ea6b"}
 */
function sub_doDelete()
{
if(globals.core_dlg_buttonPressed == 'Delete')
{
	controller.deleteRecord()
}
}

/**
 * @properties={typeid:24,uuid:"42ba0271-3583-455d-9060-60f9b75fe4fe"}
 */
function validate_beforeDelete()
{
//there are no validations needed for this form
return 0
}
