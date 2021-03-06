/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98AFAEFE-CCD6-47D4-B85A-D82014258C17"}
 */
var selected_user_uid = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19ade47b-b781-4e81-ae00-fa8dc1d26410"}
 */
var heading = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ed38f152-e865-4e2f-9b7b-d5661773e1dd"}
 */
var search = '';

/**
 * @AllowToRunInFind
 * 
 * @param {Number} arg0
 *
 * @properties={typeid:24,uuid:"F3E0506D-1AE9-44F3-88A5-4D6F1E905A14"}
 */
function selectEntityNode(arg0)
{
	var e_id = arg0;

	/** @type {JSRecord<db:/user_data/entities>}*/
	var entity_rec = null;
	/** @type {JSFoundset<db:/user_data/entities>}*/
	var fs = databaseManager.getFoundSet('user_data', 'entities')
	if (fs.find())
	{
		/** @type {JSRecord<db:/user_data/entities>}*/
		var search_entity_rec = fs.getRecord(1)
		search_entity_rec['entity_id'] = e_id
		var count = fs.search();
		if (count > 0)
			entity_rec = fs.getRecord(1)
	}

	if (entity_rec != null)
	{
		var fname = entity_rec['table_name'] +'_tableview'

		if (currentcontroller.getName() == "configure_entities")
		{
			forms.configure_entities.controller.loadAllRecords()
			forms.configure_entities.foundset.selectRecord(e_id)
				
			history.removeForm(fname)
			solutionModel.removeForm(fname)
			
			fname = entity_rec['table_name']+'_recordview'
			
			history.removeForm(fname)
			solutionModel.removeForm(fname)
			
			return;
		}
	
		if (!forms[fname] && solutionModel.getForm(fname) == null)
		{
			createForm(entity_rec,fname,JSForm.LOCKED_TABLE_VIEW)
		}
		forms[fname].controller.show()
	}
	else
	{
		if (currentcontroller.getName() == "configure_entities")
		{
			forms.configure_entities.foundset.clear();
		}
	}
}

/**
 * @param {JSRecord<db:/user_data/entities>} entity_rec
 * @param {String} fname 
 * @param {Number} vtype 
 *
 * @properties={typeid:24,uuid:"F7FD68DC-4CF4-486F-A908-1DFE9DFB1327"}
 */
function createForm(entity_rec,fname,vtype)
{
	var crindex;
	var jscomponent;
	
	/** @type {JSForm}*/
	var jsform = solutionModel.newForm(fname, entity_rec['entities_to_datasources'].server_name, entity_rec['table_name'], null, true, 600, 300)
	var jsbody = jsform.getBodyPart()
	jsform.navigator = solutionModel.getForm('navigation')
	jsform.view = vtype;
	jsform.extendsForm = solutionModel.getForm('base_data_form');
	if (vtype == JSForm.LOCKED_TABLE_VIEW) 
	{
		var button = jsform.newButton('', 0, 50, 20, 20, globals.gotoDetail)
		button.imageMedia = solutionModel.getMedia("nav_right_red_whiteBg.gif");
		button.mediaOptions = SM_MEDIAOPTION.CROP
		button.showClick = false
		button.transparent = true
	}
	if (entity_rec['allow_new_rec'] == 0)
	{
		jsform.onNewRecordCmd = SM_DEFAULTS.NONE;
	}
	if (entity_rec['allow_del_rec'] == 0)
	{
		SM_DEFAULTS.NONE
		jsform.onDeleteRecordCmd = SM_DEFAULTS.NONE;
		jsform.onDeleteAllRecordsCmd = SM_DEFAULTS.NONE;
	}

	var total_height = 100;
	var element_rec = null;
	globals.selected_user_uid = null; // set to null so we get the NON user specific records
	for (crindex = 1; crindex <= entity_rec['entities_to_elements_specific'].getSize(); crindex++) 
	{
		element_rec = entity_rec['entities_to_elements_specific'].getRecord(crindex)
		if (element_rec.view_type == vtype && element_rec.display_options < 4)
		{
			/**@type {JSComponent}*/
			jscomponent = createElement(element_rec,jsform,vtype)
			total_height = Math.max(total_height, element_rec.ylocation + element_rec['height'] + 10)
		}
	}
	
	//add elements or change user specific element properties
	for (crindex = 1; crindex <= entity_rec['entities_to_elements_login_user'].getSize(); crindex++) 
	{
		element_rec = entity_rec['entities_to_elements_login_user'].getRecord(crindex);
		if (element_rec.view_type == vtype)
		{
			jscomponent = jsform.getComponent(element_rec['element_name']);
			if (jscomponent == null)
			{
				jscomponent = createElement(element_rec,jsform,vtype)
			}
			if (jscomponent != null)
			{
				if (element_rec.xlocation != null) jscomponent.x = element_rec['xlocation'];
				if (element_rec.ylocation != null) jscomponent.y = element_rec['ylocation'];
				if (element_rec.width != null) jscomponent.width = element_rec['width'];
				if (element_rec.height != null) jscomponent.height = element_rec['height'];
				//TODO handle more properties
			}
			if (element_rec.display_options == 4)//is deleted by user but not by admin
			{
				jsform.removeComponent(jscomponent.name);
			}
			total_height = Math.max(total_height, element_rec.ylocation + element_rec['height'] + 10)
		}
	}
	
	//create recordView labels
	if (vtype == JSForm.RECORD_VIEW) 
	{
		var smFields = jsform.getFields();
		for (var index = 0; index < smFields.length; index++) 
		{
			/** @type {JSField}*/
			var field = smFields[index];

			var n = 'lbl_'+field.name
			if (jsform.getLabel(n) == null) //prevent duplication, would be nicer to check/use 'labelFor' via otherProperties 
			{
				var jslabel = jsform.newLabel(field['text'], field.x - 110, field.y, 100, field.height,null);
				jslabel.name = n;
				jslabel.labelFor = field.name;
				jslabel.transparent = true
			}
		}
	}

	if (vtype == JSForm.LOCKED_TABLE_VIEW && total_height < 800) 
	{
		total_height = 800;
	}
	jsbody.height = total_height
}

/**
 * @param {JSRecord<db:/user_data/elements>} element_rec
 * @param {JSForm} jsform
 * @param {Number} vtype
 *
 * @properties={typeid:24,uuid:"A5FEC540-4EF5-4FA5-AA83-5A154D4AD0E9"}
 */
function createElement(element_rec,jsform,vtype)
{
	/** @type {JSComponent}*/ 
	var jscomponent;
	if (element_rec.element_type == 0)
	{
		var jsfield = jsform.newField(element_rec['dataprovider_id'], element_rec['field_type'], element_rec['xlocation'], element_rec['ylocation'], element_rec['width'], element_rec['height'])
		if (element_rec.display_options == 1) jsfield.editable = false;
		jsfield.titleText = element_rec['label'];
		jscomponent = jsfield;
	}
	else if (element_rec.element_type == 1)
	{
		var jslabel = jsform.newLabel(element_rec['label'], element_rec['xlocation'], element_rec['ylocation'], element_rec['width'], element_rec['height'], null);
		jslabel.transparent = true
		jslabel.text = element_rec['label'];
		jscomponent = jslabel;
	}
	//TODO handle more new elements

	jscomponent.name = element_rec['element_name'];
	if (vtype == JSForm.LOCKED_TABLE_VIEW) 
	{
		jscomponent.anchors = (SM_ANCHOR.NORTH+SM_ANCHOR.EAST+SM_ANCHOR.WEST);
	}
	return jscomponent;
}

/**
 * @properties={typeid:24,uuid:"084a7202-dbea-4757-8e7d-5f017bfc5d75"}
 * @AllowToRunInFind
 */
function gotoDetail()
{
	/** @type {JSRecord<db:/user_data/entities>}*/
	var entity_rec = null;
	/** @type {JSFoundSet<db:/user_data/entities>}*/
	var fs = databaseManager.getFoundSet('user_data', 'entities')
	if (fs.find())
	{
		/** @type {JSRecord<db:/user_data/entities>}*/
		var search_entity_rec = fs.getRecord(1);
		var ds = currentcontroller.getDataSource().split('/');
		
		search_entity_rec['table_name'] = ds[2];
		var count = fs.search();
		if (count > 0) 
		{ 
			entity_rec = fs.getRecord(1);
		}
	}
	if (entity_rec != null)
	{
		var fname = entity_rec['table_name']+'_recordview'
		if (!forms[fname] && solutionModel.getForm(fname) == null)
		{
			createForm(entity_rec,fname,JSForm.RECORD_VIEW)
		}
		forms[fname].controller.show()
		forms.navigation.elements.treeview.selectionPath = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5955CA4-D24B-4B37-B9DE-8FEC23743F92"}
 */
function showFormInDesignMode(event)
{
	forms.clientdesign.showDesign(currentcontroller.getName(),changedElements);
}

/**
 * Recieves the changed solutionModel objects from clientdesign which has to be stored persistent in elements table with a user_uid 
 * so when an enduser logsin again his changes from last time are seen
 * 
 * @param {String} formName
 * @param {Array} changedElementsArray
 * 
 * @properties={typeid:24,uuid:"A77BF540-9A7F-49AB-889F-25F22B500969"}
 * @AllowToRunInFind
 */
function changedElements(formName, changedElementsArray)
{
	/** @type JSRecord<db:/user_data/entities> */
	var entity_rec = null;
	var count;
	/** @type JSFoundset<db:/user_data/entities> */
	var fs = databaseManager.getFoundSet('user_data', 'entities'); 
	if (fs.find())
	{
		var search_entity_rec = fs.getRecord(1);
		var ds = forms[formName].controller.getDataSource().split('/');
		search_entity_rec.table_name = ds[2];
		count = fs.search();
		if (count > 0) entity_rec = fs.getRecord(1)
	}
	if (entity_rec != null)
	{
		var form = solutionModel.getForm(formName);
		var element_rec = null;
		var relatedFs = entity_rec.entities_to_elements_login_user;
		for (var index = 0; index < changedElementsArray.length; index++)
		{
			/** @type {JSComponent}*/
			var comp = changedElementsArray[index];
			if ( comp != null )
			{
				if (relatedFs.find())
				{
					var search_elements_rec = relatedFs.getRecord(1)
					search_elements_rec.element_name = comp.name;
					search_elements_rec.view_type = JSForm.RECORD_VIEW;
					count = relatedFs.search();
					if (count > 0) 
					{
	 					element_rec = relatedFs.getRecord(1);
						if (form.getComponent(comp.name) == null)
						{
							//is deleted and found new/modified record
//							element_rec.deleteRecord();
							element_rec.foundset.deleteRecord();
							
							continue;
						}
					}
					else
					{
						//new element
						var idx = relatedFs.newRecord();
						element_rec = relatedFs.getRecord(idx);
						element_rec.element_name = comp.name;
						element_rec.user_uid = security.getUserUID()
						element_rec.view_type = JSForm.RECORD_VIEW;
						if (form.getComponent(comp.name) == null)
						{
							//is deleted no custom record found, insert as hidden
							element_rec.display_options = 4;
							continue;
						}

						if (comp['dataProviderID'])
						{
							element_rec.dataprovider_id = comp['dataProviderID'];
						}
						if (comp['text'])
						{
							element_rec.label = comp['text'];
						}
						if (comp['displayType'])
						{
							element_rec.field_type = comp['displayType'];
						}
						if (comp instanceof JSLabel)
						{
							element_rec.element_type = 1
						}
						if (comp instanceof JSButton)
						{
							element_rec.element_type = 2
						}
	 				}
					element_rec.xlocation = comp.x;
					element_rec.ylocation = comp.y;
					element_rec.width = comp.width;
					element_rec.height = comp.height;
				}
			}
		}
		databaseManager.saveData();
	}
}

/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stopable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"24BB894A-23DC-4286-96ED-CA8050A73A5B"}
 */
function onSolutionClose(force) 
{
	security.logout();
	return true;
}
