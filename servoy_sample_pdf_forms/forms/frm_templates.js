/**
 * @properties={typeid:24,uuid:"accd6ab7-74f4-4a03-a64e-3fd2c5ecb36a"}
 */
function btn_addTemplate()
{
	var fname = application.showFileOpenDialog();
<<<<<<< .working
	if(fname)
	{
		var filedata = plugins.file.readFile(fname);
=======
	if(fname) {
		var filedata = plugins.file.readFile(fname);
>>>>>>> .merge-right.r196
		if ( filedata != null )
		{
			//store data
			actual_pdf_form = filedata;
			filedata = null; //clear

			//set the name field
			var i1 = fname.lastIndexOf('/');
			var i2 = fname.lastIndexOf('\\');
			var index = Math.max(i1,i2);
			if (index > 0) {
				fname = fname.substring(index+1);
			}
			fname = utils.stringReplace(fname," ","_");//name may NOT contain spaces
			filename = fname;

			globals.setupRecordStatus();
			controller.saveData()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"cd357404-2530-4742-8aa4-ebefdd8ba2c7"}
 */
function btn_cancel()
{
	databaseManager.rollbackTransaction()
	hide_btn_reset_fields();
}

/**
 * @properties={typeid:24,uuid:"06ff3d13-dd0e-473c-b130-c1e440920608"}
 */
function btn_save()
{
	if(template_name)
	{
		databaseManager.commitTransaction();
		hide_btn_reset_fields();

		onRecordSelect(); //to refresh buttons
	}
	else
	{
		globals.showErrorDialog('You must fill in the template name.', null, 'OK');
	}
}

/**
 * @properties={typeid:24,uuid:"28e5a027-60d2-405b-b6e2-7c2786f1aa22"}
 */
function btn_viewTemplate()
{
	globals.btn_viewPDF('template', template_id)
}

/**
 * @properties={typeid:24,uuid:"0719da65-ea46-49df-8fca-1185754be6d5"}
 */
function doEdit()
{
	databaseManager.startTransaction();

	var allNames = elements.allnames;

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make editable
			elements[allNames[i]].bgcolor = '#feffe4';
			elements[allNames[i]].readOnly = false;
		}
	}

	elements.btn_save.visible = true;
	elements.btn_cancel.visible = true;

	//hide view PDF button
	elements.btn_viewPDF.visible = false;

	if(application.getApplicationType() != 5) //anything BUT the web client
	{
		//show upload PDF button
		elements.btn_addTemplate.visible = true;
	}
}

/**
 * @properties={typeid:24,uuid:"998c67dc-5536-452c-ac38-e5654ebe9f6b"}
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

	elements.btn_save.visible = false;
	elements.btn_cancel.visible = false;

	//hide upload PDF button
	elements.btn_addTemplate.visible = false;

//	if(application.getApplicationType() != 5) //anything BUT the web client
//	{
		//show view PDF button - for everything EXCEPT web client
	elements.btn_viewPDF.visible = true;
//	}
}

/**
 * @properties={typeid:24,uuid:"40fbe705-bbcc-4d73-be2e-2906914efd88"}
 */
function onLoad()
{
	//if we're in the web client - hide the "add" button
	if(application.getApplicationType() == 5)
	{
		forms.frm_buttons.elements.btn_add.visible = false;
		forms.frm_buttons.elements.lbl_add.visible = false;
	}
	else
	{
		forms.frm_buttons.elements.btn_add.visible = true;
		forms.frm_buttons.elements.lbl_add.visible = true;
	}
}

/**
 * @properties={typeid:24,uuid:"d0282692-3c76-44f0-a448-c4728325cdae"}
 */
function onRecordSelect()
{
	//update the record status
	globals.setupRecordStatus();

	//show or hide the "view" icon
//	if(application.getApplicationType() != 5) //anything BUT the web client
	{
		if(actual_pdf_form)
		{
			elements.btn_viewPDF.visible = true;
		}
		else
		{
			elements.btn_viewPDF.visible = false;
		}
	}
//	else
	/**
	{
		if(actual_pdf_form)
		{
			elements.pdf_btns_wc.visible = true
		}
		else
		{
			elements.pdf_btns_wc.visible = false
		}
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"9839377c-2bb9-45e6-ad49-2f74e9a8e539"}
 */
function onShow()
{
	//hide or show the "add" button
	onLoad();

	//make read only
	controller.readOnly = true;

	//hide save/cancel btsn
	elements.btn_save.visible = false;
	elements.btn_cancel.visible = false;

	//hide upload PDF button
	elements.btn_addTemplate.visible = false;

	//update record status
	globals.setupRecordStatus();
/**
	if(application.getApplicationType() == 5) //web client
	{
		//show buttons for viewing and saving PDF
		elements.pdf_btns_wc.visible = true;

		//hide smart client view PDF button
		elements.btn_viewPDF.visible = false;
	}
	else
	*/
//	{
	//hide web client buttons for viewing and saving PDF
	elements.pdf_btns_wc.visible = false;

	//show smart client view PDF button
	elements.btn_viewPDF.visible = true;
//	}
}

/**
 * @properties={typeid:24,uuid:"b630e431-ce39-4b22-bc78-e69fe3d75f10"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		controller.deleteRecord()
	}
}

/**
 * @properties={typeid:24,uuid:"abdc4ead-35dd-4e08-8eb3-b77cdef29a24"}
 */
function validate_beforeDelete()
{
	//see if there are any filled out forms that rely on this template
	var frmCount = pdf_templates_to_pdf_forms.getSize();

	if(frmCount > 0)
	{
		var msg = 'There are filled out forms that require this template. ' +
		'To delete this template, first delete all the existing filled-in forms that use this template.'
		globals.showErrorDialog(msg, null, 'OK');
		return 1;
	}
	else
	{
		return 0;
	}
}
