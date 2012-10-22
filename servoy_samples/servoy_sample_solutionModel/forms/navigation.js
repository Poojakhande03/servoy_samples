/**
 * @properties={typeid:24,uuid:"2497884a-5745-4d11-b2da-c2f3d61414df"}
 */
function configureModel()
{
	if (currentcontroller.getName() == "configure_entities")
	{
		//escape config mode
		forms.datasources.controller.show()
		
		//change label to indicate other mode
		elements.lbl_configure.text = 'Configure'
		
		//clear tree selection
		elements.treeview.selectionPath = null;
		return
	}
	
	//change label to indicate other mode
	elements.lbl_configure.text = 'Edit'
	
	//test if first time, if no records found genereate for example data
	checkForSampleData()
	
	var fs = databaseManager.getFoundSet('user_data', 'entities')
	//start with no selection, user should select in tree 
	fs.clear()
	forms.configure_entities.controller.showRecords(fs)
	//clear tree selection
	elements.treeview.selectionPath = null;
}

/**
 * @properties={typeid:24,uuid:"77aeaa26-a85e-4a0f-8878-6089e988fc22"}
 */
function selectDatasourceNode()
{
	var d_id = arguments[0]
	globals.selectEntityNode(0)
	//forms.datasources.controller.show()
}

/**
 * @properties={typeid:24,uuid:"b1ded561-996c-4e57-a394-c5f04411cdb6"}
 */
function initTree()
{
	//Create a binding object for a database table used to set data bindings for nodes
	var binding = elements.treeview.createBinding('user_data', 'datasources');
	binding.setCallBackInfo(selectDatasourceNode, 'datasource_id');
	binding.setTextDataprovider('server_name');
	binding.setNRelationDataprovider('child_relation_name');
	binding = elements.treeview.createBinding('user_data', 'entities');
	binding.setCallBackInfo(globals.selectEntityNode, 'entity_id');
	binding.setTextDataprovider('table_name');
	fillTree();
}

/**
 * @properties={typeid:24,uuid:"06093344-df1d-482c-8e97-6cf84fd4f84f"}
 */
function fillTree()
{
	elements.treeview.removeAllRoots();
	elements.treeview.addRoots(foundset);
}

/**
 * @AllowToRunInFind
 * 
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"C1D12BB7-5B88-43F4-9F58-940A500E7B5D"}
 */
function syncronizeWithDB(arg0, arg1, arg2)
{
	var i;
	var datasource_id_to_sync = arg0;
	var tblname_filter = arg1;
	var recreate = arg2;
	var fs = foundset.duplicateFoundSet();
	if (fs.find())
	{
		/** @type JSRecord */
		var ds_rec = fs.getRecord(1)
		ds_rec['datasource_id'] = datasource_id_to_sync;

		if (fs.search() > 0)
		{
			ds_rec = fs.getRecord(1)
			var srv_ar = ds_rec.getDataSource().split('/');
			globals.gotoDetail(); 
			var servername = srv_ar[1];
			var tablenames = databaseManager.getTableNames(servername);
			for (var tindex = 0; tindex < tablenames.length; tindex++) 
			{
				var tname = tablenames[tindex];
				if (tblname_filter != null && tname != tblname_filter) continue; 
				
				var jstable = databaseManager.getTable(servername,tname)
				var entity_rec = null;
				for (var trindex = 1; trindex <= ds_rec['datasources_to_entities'].getSize(); trindex++) 
				{
					entity_rec = ds_rec['datasources_to_entities'].getRecord(trindex)
					if (entity_rec.table_name == tname)
					{
						break;
					}
					entity_rec = null;
				}
				if (entity_rec == null)
				{
					//not found create
					i = ds_rec['datasources_to_entities'].newRecord()
					entity_rec = ds_rec['datasources_to_entities'].getRecord(i)
					entity_rec.table_name = tname
					entity_rec.heading_single = makeSingle(tname)
					entity_rec.heading_plural = makePlural(tname)
					
					entity_rec.allow_del_rec = 1
					entity_rec.allow_new_rec = 1
					entity_rec.allow_search_rec = 1 
					
					databaseManager.saveData();
				}
				
				if (recreate)
				{
					entity_rec['entities_to_elements_all'].deleteAllRecords()
				}
				var x = 40;
				var y = 60;
				var vtypes = new Array(JSForm.RECORD_VIEW,JSForm.LOCKED_TABLE_VIEW)
				for (var vindex = 0; vindex < vtypes.length; vindex++)
				{
					var vtype = vtypes[vindex];
					if (vtype == JSForm.LOCKED_TABLE_VIEW) y = 60;
					if (vtype == JSForm.RECORD_VIEW) x = 140;
					var columnnames = jstable.getColumnNames();
					for (var cindex = 0; cindex < columnnames.length; cindex++) 
					{
						var cname = columnnames[cindex];
						var jscolumn = jstable.getColumn(cname)
						var column_dataprovider_id = jscolumn.getDataProviderID()
						var field_rec = null;
						for (var crindex = 1; crindex <= entity_rec['entities_to_elements_all'].getSize(); crindex++) 
						{
							field_rec = entity_rec['entities_to_elements_all'].getRecord(crindex)
							if (field_rec.dataprovider_id == column_dataprovider_id && field_rec.view_type == vtype)
							{
								break;
							}
							field_rec = null;
						}
						if (field_rec == null)
						{
							//not found create
							i = entity_rec['entities_to_elements_all'].newRecord()
							field_rec = entity_rec['entities_to_elements_all'].getRecord(i)
							field_rec.view_type = vtype
							field_rec.label = utils.stringReplace(utils.stringInitCap(cname),"_"," ");
							field_rec.dataprovider_id = column_dataprovider_id;
							field_rec.element_name = column_dataprovider_id; 
							field_rec.field_type = JSField.TEXT_FIELD;
							if (jscolumn.getType() == JSColumn.DATETIME)
							{
								field_rec.field_type = JSField.CALENDAR;
							}
							field_rec.display_options = 0;
							
							if (vtype == JSForm.LOCKED_TABLE_VIEW) x = x + 25;
							if (vtype == JSForm.RECORD_VIEW) y = y + 25;
							
							field_rec.xlocation = x, field_rec.ylocation = y 
							field_rec.width = 150;
							field_rec.height = 20

							if (jscolumn.getRowIdentifierType() != JSColumn.NONE)
							{
								field_rec.display_options = 1;
								field_rec.label = 'ID'
								if (vtype == JSForm.LOCKED_TABLE_VIEW)							
								{
									field_rec.width = 50;
								}
							}
							databaseManager.saveData();
						}
					}
				}
			}
		}
	}
	
	fillTree();
}

/**
 * @param {String} arg0 // name
 * 
 * @properties={typeid:24,uuid:"be382e9b-7520-48c6-a40c-116332f9eb00"}
 */
function makeSingle(arg0)
{
	var name = arg0;
	if (name.charAt(name.length-1) == 's')
	{
		name = name.substring(0, name.length-1)
	}
	name = utils.stringReplace(name, '_', ' ')
	return utils.stringInitCap(name);
}

/**
 * @param {String} arg0 // name
 * 
 * @properties={typeid:24,uuid:"d21bab25-9f23-4b10-8394-636111d7c9c6"}
 */
function makePlural(arg0)
{
	var name = arg0;
	if (name.charAt(name.length-1) != 's')
	{
		name = name + 's';
	}
	name = utils.stringReplace(name, '_', ' ');
	return utils.stringInitCap(name);
}

/**
 *
 * @properties={typeid:24,uuid:"4E3362A3-90E4-409F-9ED4-005307CF503F"}
 * @AllowToRunInFind
 */
function checkForSampleData()
{
	controller.loadAllRecords()
	if (controller.getMaxRecordIndex() == 0)
	{
		controller.newRecord()
		server_name = 'example_data';
		databaseManager.saveData();
		
		syncronizeWithDB(datasource_id, null, null);
	}
}
