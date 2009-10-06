/**
 * @properties={typeid:24,uuid:"c26c81fb-d5a1-4c6b-aa66-1557f40b15a8"}
 */
function newRecord()
{
	controller.newRecord()
}

/**
 * @properties={typeid:24,uuid:"ba8a840b-c0ba-4c8f-a1ac-112a05d1325c"}
 */
function deleteRecord()
{
	controller.deleteRecord()
}

/**
 * @properties={typeid:24,uuid:"fa241b87-52df-49c8-aed1-19053fffb802"}
 */
function loadAllRecords()
{
	controller.loadAllRecords()
}

/**
 * @properties={typeid:24,uuid:"5d285df9-536e-4d0b-9155-dcf91e190879"}
 */
function onShow()
{
	var entity_rec = null;
	var fs = databaseManager.getFoundSet('user_data', 'entities')
	if (fs.find())
	{
		var search_rec = fs.getRecord(1)
		search_rec.table_name = controller.getTableName()
		search_rec.entities_to_datasources.server_name = controller.getServerName()
		var count = fs.search();
		if (count > 0) entity_rec = fs.getRecord(1)
	}
	
	if (entity_rec != null)
	{
		if (entity_rec.allow_new_rec == 0)
		{
			elements.lbl_add.visible = false;
			elements.btn_add.visible = false;
		}
		if (entity_rec.allow_del_rec == 0)
		{
			elements.lbl_delete.visible = false;
			elements.btn_delete.visible = false;
		}
		if (controller.view == 0)
		{
			globals.heading = entity_rec.heading_single;
		}
		else
		{
			globals.heading = entity_rec.heading_plural;
		}
		elements.lbl_design.visible = (controller.view == 0)
		elements.btn_design.visible = (controller.view == 0)
	}
}

/**
 * @properties={typeid:24,uuid:"818ef877-70bb-4c67-a761-b8622cfbe59a"}
 */
function search()
{
			application.output('search '+globals.search)
	if (globals.search != null && globals.search != '')
	{
		var jstable = databaseManager.getTable(controller.getServerName(),controller.getTableName())
		if (controller.find())
		{
			var columnnames = jstable.getColumnNames();
			for (var cindex = 0; cindex < columnnames.length; cindex++) 
			{
				var cname = columnnames[cindex];
				var jscolumn = jstable.getColumn(cname);
				if (jscolumn.getTypeAsString() == 'TEXT')
				{
					controller.setDataProviderValue(jscolumn.getDataProviderID(), '#%'+globals.search+'%');
					controller.newRecord()
				}
			}
			var count = controller.search()
			application.output('results '+count)
			if (count > 0)
			{
				globals.search = ''
			}
		}
	}
}
