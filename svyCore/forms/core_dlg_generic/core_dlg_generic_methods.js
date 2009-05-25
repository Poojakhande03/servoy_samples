/**
 * @properties={typeid:24,uuid:"45209a89-0673-47a3-a134-b8cc92030206"}
 */
function close()
{
	var frm = globals.core_dlg_formName
	var elmt = globals.core_dlg_elementName

	//set the global to the text of the pressed button
	globals.core_dlg_buttonPressed = elements[application.getMethodTriggerElementName()].text

	//close the form in dialog
	application.closeFormDialog("Dialog")

	globals.enableBgElements();

	//re-enable anything behind the dialog
	globals.core_enableDisableElements();

	//execute the method to be executed, then clear the global
	if(globals.core_dlg_methodToExecute)
	{
		eval(globals.core_dlg_methodToExecute)
		globals.core_dlg_methodToExecute = null
	}
}

/**
 * @properties={typeid:24,uuid:"7639999a-c7fb-453f-a101-13382ce64208"}
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
 * @properties={typeid:24,uuid:"cf0dd9fd-3a92-4f93-86e3-f949ee44178d"}
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
 * @properties={typeid:24,uuid:"fd5599e4-e2f9-4a6f-a8ed-9752932bfada"}
 */
function show_iconError()
{
	elements.icn_error.visible = true
}

/**
 * @properties={typeid:24,uuid:"f5ae04de-16b5-4bbb-bb59-e4373f15a6fa"}
 */
function show_iconForbidden()
{
	elements.icn_forbidden.visible = true
}

/**
 * @properties={typeid:24,uuid:"ca35b234-baa4-41e5-914c-a708da2f4e5c"}
 */
function show_iconInfo()
{
	elements.icn_info.visible = true
}

/**
 * @properties={typeid:24,uuid:"6d83dd39-d422-49d1-a5bf-394276a3d6eb"}
 */
function show_iconQuestion()
{
	elements.icn_question.visible= true
}

/**
 * @properties={typeid:24,uuid:"994b7b0c-3579-49a8-a05a-54ef696b16e3"}
 */
function show_iconWarning()
{
	elements.icn_warning.visible = true
}
