/**
 * @properties={typeid:35,uuid:"19ade47b-b781-4e81-ae00-fa8dc1d26410"}
 */
var heading = '';

/**
 * @properties={typeid:35,uuid:"ed38f152-e865-4e2f-9b7b-d5661773e1dd"}
 */
var search = '';

/**
 * @properties={typeid:24,uuid:"2cb5c5ac-5a16-45cb-9a8a-862745d9a0b6"}
 */
function selectEntityNode()
{
	var e_id = arguments[0];

	var entity_rec = null;
	var fs = databaseManager.getFoundSet('user_data', 'entities')
	if (fs.find())
	{
		var search_entity_rec = fs.getRecord(1)
		search_entity_rec.entity_id = e_id
		var count = fs.search();
		if (count > 0) entity_rec = fs.getRecord(1)
	}

	if (entity_rec != null)
	{
		var fname = entity_rec.table_name+'_tableview'

		if (currentcontroller.getName() == "configure_entities")
		{
			forms.configure_entities.controller.loadAllRecords()
			forms.configure_entities.foundset.selectRecord(e_id)
				
			history.removeForm(fname)
			solutionModel.removeForm(fname)
			
			fname = entity_rec.table_name+'_recordview'
			
			history.removeForm(fname)
			solutionModel.removeForm(fname)
			
			return;
		}
	
		if (!forms[fname] && solutionModel.getForm(fname) == null)
		{
			createForm(entity_rec,fname,SM_VIEW.LOCKED_TABLE_VIEW)
		}
		forms[fname].controller.show()
	}
}

/**
 * @properties={typeid:24,uuid:"cb254c25-3eea-4523-bc30-c4b931d0c1dd"}
 */
function createForm()
{
	var entity_rec = arguments[0];
	var fname = arguments[1]
	var vtype = arguments[2]
	                      
	var jsform = solutionModel.newForm(fname, entity_rec.entities_to_datasources.server_name, entity_rec.table_name, null, true, 300, 300)
	var jsbody = jsform.getBodyPart()
	jsform.navigator = solutionModel.getForm('navigation')
	jsform.view = vtype;
	jsform.extendsForm = solutionModel.getForm('base_data_form');
	if (vtype == SM_VIEW.LOCKED_TABLE_VIEW) 
	{
		var button = jsform.newButton('', 0, 50, 20, 20, globals.gotoDetail)
		button.imageMedia = solutionModel.getMedia("nav_right_red_whiteBg.gif");
		button.mediaOptions = SM_MEDIAOPTION.CROP
		button.showClick = false
		button.transparent = true
	}
	if (entity_rec.allow_new_rec == 0)
	{
		jsform.setOnNewRecordCmdMethod(SM_DEFAULTS.NONE);
	}
	if (entity_rec.allow_del_rec == 0)
	{
		jsform.setOnDeleteRecordCmdMethod(SM_DEFAULTS.NONE);
		jsform.setOnDeleteAllRecordsCmdMethod(SM_DEFAULTS.NONE);
	}

	var total_heigth = 100;
	var field_rec = null;
	for (var crindex = 1; crindex <= entity_rec.entities_to_fields.getSize(); crindex++) 
	{
		field_rec = entity_rec.entities_to_fields.getRecord(crindex)
		if (field_rec.view_type == vtype && field_rec.display_options < 4)
		{
			var jsfield = jsform.newField(field_rec.dataprovider_id, field_rec.field_type, field_rec.xlocation, field_rec.ylocation, field_rec.width, field_rec.heigth)
			if (vtype == SM_VIEW.LOCKED_TABLE_VIEW) 
			{
				jsfield.text = field_rec.label;
				jsfield.anchors = (SM_ANCHOR.NORTH+SM_ANCHOR.EAST+SM_ANCHOR.WEST);
			}
			else
			{
				var jslabel = jsform.newLabel(field_rec.label, field_rec.xlocation - 110, field_rec.ylocation, 100, field_rec.heigth,null)
				jslabel.transparent = true
			}
			total_heigth = Math.max(total_heigth, field_rec.ylocation + field_rec.heigth + 10)
		}
	}
	if (vtype == SM_VIEW.LOCKED_TABLE_VIEW && total_heigth < 800) 
	{
		total_heigth = 800;
	}
	jsbody.height = total_heigth
}

/**
 * @properties={typeid:24,uuid:"084a7202-dbea-4757-8e7d-5f017bfc5d75"}
 */
function gotoDetail()
{
	var entity_rec = null;
	var fs = databaseManager.getFoundSet('user_data', 'entities')
	if (fs.find())
	{
		var search_entity_rec = fs.getRecord(1)
		search_entity_rec.table_name = currentcontroller.getTableName()
		var count = fs.search();
		if (count > 0) entity_rec = fs.getRecord(1)
	}
	if (entity_rec != null)
	{
		var fname = entity_rec.table_name+'_recordview'
		if (!forms[fname] && solutionModel.getForm(fname) == null)
		{
			createForm(entity_rec,fname,SM_VIEW.RECORD_VIEW)
		}
		forms[fname].controller.show()
		forms.navigation.elements.treeview.selectionPath = null;
	}
}
