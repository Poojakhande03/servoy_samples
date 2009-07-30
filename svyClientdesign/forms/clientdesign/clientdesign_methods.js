/**
 * @properties={typeid:35,uuid:"DFD5679D-501D-4F45-A0DA-3BE220EAE2AF"}
 */
var selectedDesignFormName = null;

/**
 * @properties={typeid:35,uuid:"186CA2D8-D560-4CF4-98F4-49AE59A895FE",variableType:4}
 */
var newComponentsCounter = 0;

/**
 * @properties={typeid:35,uuid:"49680BD0-ADEC-48A8-B04D-47FFB8217DA9",variableType:-4}
 */
var changedElements = null;

/**
 * @properties={typeid:35,uuid:"6AC0FFEC-DEE1-4A49-A4CD-2D702A03233E",variableType:-4}
 */
var callbackFunction = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @properties={typeid:24,uuid:"B6429733-2826-451E-A5F9-B86E14D24D43"}
 */
function loadForms()
{
	var array = forms.allnames.filter ( function( element )
		{
			return element != "clientdesign" && element != "chooselabeltext"
			&& element != "basedialogform" && element != "choosedataprovider"
		} );
	array.sort();
	application.setValueListItems ( "formlist", array );
}

/**
 * Handle changed data.
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 *
 * @returns {Boolean} valid value
 *
 * @properties={typeid:24,uuid:"B09C4094-F3D4-4D9A-93E3-E879596029D4"}
 */
function _showFormInDesign()
{
	var form = forms[selectedDesignFormName];
	if (form.controller.getDesignMode())
	{
		_callBack();
	}
	form.controller.setDesignMode ( false );
	changedElements = new Array();
	elements.selectedDesignForm.enabled = false;
	_ableButtons(true)
	elements.designTab.removeAllTabs();
	elements.designTab.addTab ( form );
	controller.show();
	form.controller.setDesignMode ( onDrag, onDrop, onSelect, onResize );
	return;
}

/**
 * @properties={typeid:24,uuid:"DF4C1BB1-371B-4484-ADE6-12D9DCCCEAF2"}
 */
function _ableButtons(state)
{
	elements.saveButton.enabled = state;
	elements.saveAndShow.enabled = state;
	elements.newField.enabled = state
	elements.newLabel.enabled = state;
}

/**
 * @properties={typeid:24,uuid:"80A6AB9F-36FE-403B-B0F7-93A55323596E"}
 */
function _callBack()
{
	if (callbackFunction && callbackFunction != null) callbackFunction(selectedDesignFormName,changedElements);
	changedElements = new Array();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8C36E15-9C76-48E2-AFFA-AF6EB1F9F8F2"}
 */
function closeDesign( event )
{
	var form = forms[selectedDesignFormName];
	if (form.controller.getDesignMode())
	{
		_callBack();
	}
	form.controller.setDesignMode ( false );
	elements.selectedDesignForm.enabled = true;
	_ableButtons(false)
	selectedDesignFormName = null;
	elements.designTab.removeAllTabs();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D28E716-2C4E-4CA1-B1F5-F4BB86D5D00C"}
 */
function saveAndShow( event )
{
	var formToShow = selectedDesignFormName;
	closeDesign ( event );
	forms[formToShow].controller.show();
}

/**
 *
 * @properties={typeid:24,uuid:"D26CC339-C95E-48DB-9ABE-E32311AAD55F"}
 */
function showDesign(current,cf)
{
	callbackFunction = cf
	if (forms[current] && current != "clientdesign" && current != "chooselabeltext"
	&& current != "basedialogform" && current != "choosedataprovider" )
	{
		_ableButtons(false)
		selectedDesignFormName = current;
		_showFormInDesign();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43CBAA0C-93F9-49C6-8537-1AEFA63D3A03"}
 */
function newLabel( event )
{
	// ask for a nice label
	forms.chooselabeltext.show ( newLabelImpl );

}

/**
 * @properties={typeid:24,uuid:"7E314FFD-84E7-4D43-9845-373E3C2EA199"}
 */
function newLabelImpl( label )
{
	if ( label != null )
	{
		// if label found then create the new label with default sizes on the design/solutionmodel form.
		var form = solutionModel.getForm ( selectedDesignFormName );
		var component = form.newLabel ( label, 50, 100, 80, 20 );
		component.transparent = true;
		// give it a name so that you can move/change it later on.
		component.name = "label_" + newComponentsCounter++;
		// recreate the ui of the runtime instance
		forms[selectedDesignFormName].controller.recreateUI();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1232C686-05B1-4CA8-B29D-80374B8AF8BA"}
 */
function newField( event )
{
	// ask for a dataprovider.
	forms.choosedataprovider.show ( selectedDesignFormName, newFieldImpl );
}

/**
 * @properties={typeid:24,uuid:"1DD7D9A4-0F4F-4CD1-B151-DCAF6830A2C2"}
 */
function newFieldImpl( dataprovider, fieldtype )
{
	if ( dataprovider != null && fieldtype != null )
	{
		// if a dataprovider is given get the design/solution model form.
		var form = solutionModel.getForm ( selectedDesignFormName );
		var field = form.newField ( dataprovider, forms.choosedataprovider.fieldtype, 50, 100, 80, 20 );
		// give it a name so that you can move/change it later on.
		field.name = "field_" + newComponentsCounter++;
		// recreate the ui of the runtime instance
		forms[selectedDesignFormName].controller.recreateUI();
	}
}

/**
 * Called when the design mode drag is started.
 * can return true if the drag can happen or false when it shouldnt.
 *
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"2F5E9661-93C8-4E29-AEA3-BD45AAF21FE1"}
 */
function onDrag( event )
{
	var droppedElements = event.data;
	// only allow drag on named components
	for (var index = 0; index < droppedElements.length; index++)
	{
		if ( droppedElements[index].getName() == null )
		{
			return false;
		}
	}
	return true;
}

/**
 * Called when a drop happens, the event.data has an array of all the elements that where in the selection.
 * and are dropped.
 *
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"14539D49-4BE9-4B35-95ED-78F409E49141"}
 */
function onDrop( event )
{
	// store the location of all the dropped elements in the solution model.
	// take the form out of the solution model
	var form = solutionModel.getForm ( selectedDesignFormName );
	// event.data is an array of the dropped elements.
	var droppedElements = event.data;

	// walk through all the dropped elements and copy there current location in the solution model.
	for (var index = 0; index < droppedElements.length; index++)
	{
		var component = form.getComponent ( droppedElements[index].getName() );
		if (component != null)
		{
			changedElements.push(component)
	
			component.x = droppedElements[index].getLocationX();
			component.y = droppedElements[index].getLocationY();
		}
	}
}

/**
 *  On select, to be able to return false if some selections are not allowed
 *  currently not supported in the webclient. (this is not called)
 *
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"9765C06A-28B4-4077-8F51-913CE4F2E3CE"}
 */
function onSelect( event )
{
	var droppedElements = event.data;

	// only allow selection on named components
	for (var index = 0; index < droppedElements.length; index++)
	{
		if ( droppedElements[index].getName() == null )
		{
			return false;
		}
	}
	return true;
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"D3363237-A984-40E8-9776-CCBA35137602"}
 */
function onResize( event )
{
	// store the sizes of all the dropped elements in the solution model.
	// take the form out of the solution model
	var form = solutionModel.getForm ( selectedDesignFormName );
	// event.data is an array of the resized elements.
	var droppedElements = event.data;

	// walk through all the resized elements and copy there current width and height in the solution model.
	for (var index = 0; index < droppedElements.length; index++)
	{
		if ( droppedElements[index].getName() != null )
		{
			var component = form.getComponent ( droppedElements[index].getName() );
			if (component != null)
			{
				changedElements.push(component)
	
				component.width = droppedElements[index].getWidth();
				component.height = droppedElements[index].getHeight();
			}
		}
	}
}
