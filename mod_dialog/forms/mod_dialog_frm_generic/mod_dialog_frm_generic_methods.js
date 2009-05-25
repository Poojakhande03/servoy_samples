/**
 * @properties={typeid:24,uuid:"46004cf2-b714-4234-a7cd-12554cb6935c"}
 */
function close()
{
	var frm = globals.core_dlg_formName
	var elmt = globals.core_dlg_elementName

	//set the global to the text of the pressed button
	var btn = elements[application.getMethodTriggerElementName()].text

	//close the form in dialog
	application.closeFormDialog("Dialog")

	//we also set a global - just in case you need it later
	globals.mod_dialog_buttonPressed = btn

	//execute the method to be executed, then clear the global
	if(globals.mod_dialog_methodToExecute)
	{
		eval(globals.mod_dialog_methodToExecute)
		globals.mod_dialog_methodToExecute = null
	}

	return btn
}

/**
 * @properties={typeid:24,uuid:"7352be5a-e815-4d4e-988c-e209cbf4b7d5"}
 */
function hide_allIcons()
{
	elements.icn_error.visible = false
	elements.icn_forbidden.visible = false
	elements.icn_info.visible = false
	elements.icn_question.visible = false
	elements.icn_warning.visible = false
}

/**
 * @properties={typeid:24,uuid:"fa22d5fc-af1e-4e17-a0c9-38a1b4db7ba1"}
 */
function setup_buttons()
{
	var btn1 = arguments[0]
	var btn2 = arguments[1]
	var btn3 = arguments[2]
	var btn4 = arguments[3]

	if(btn1 != undefined)
	{
		elements.btn_1.text = btn1
	}
	else
	{
		elements.btn_1.text = 'OK'
	}

	if(btn2 != undefined)
	{
		elements.btn_2.visible = true
		elements.btn_2.text = btn2
	}
	else
	{
		elements.btn_2.visible = false
	}

	if(btn3 != undefined)
	{
		elements.btn_3.visible = true
		elements.btn_3.text = btn3
	}
	else
	{
		elements.btn_3.visible = false
	}

	if(btn4 != undefined)
	{
		elements.btn_4.visible = true
		elements.btn_4.text = btn4
	}
	else
	{
		elements.btn_4.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"3f8af328-73ef-4a25-a046-07668f65cedc"}
 */
function show_iconError()
{
	elements.icn_error.visible = true
}

/**
 * @properties={typeid:24,uuid:"55b640ce-dfef-4009-b1c5-69247ea9d73c"}
 */
function show_iconForbidden()
{
	elements.icn_forbidden.visible = true
}

/**
 * @properties={typeid:24,uuid:"f0003601-108e-4d44-8bb4-0ba086b2efc8"}
 */
function show_iconInfo()
{
	elements.icn_info.visible = true
}

/**
 * @properties={typeid:24,uuid:"1d4c7150-e6b1-4421-90e0-9e5a3f956bf5"}
 */
function show_iconQuestion()
{
	elements.icn_question.visible= true
}

/**
 * @properties={typeid:24,uuid:"caf60ae3-4d7d-4bc5-a751-4b68079ca948"}
 */
function show_iconWarning()
{
	elements.icn_warning.visible = true
}
