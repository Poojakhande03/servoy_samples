/**
 * @properties={typeid:35,uuid:"76cde0f3-5f9e-4718-b00c-200fd701a41c"}
 */
var age = '';

/**
 * @properties={typeid:35,uuid:"871459f0-4ef9-4f3b-aeb2-7d101483cf45"}
 */
var name = '';

/**
 * @properties={typeid:35,uuid:"5f25fb2a-028b-4194-b828-8435a2e781f7"}
 */
var note = '';

/**
 * @properties={typeid:35,uuid:"b49587c9-2711-4b73-914c-f54e6085a1b4"}
 */
var profession = '';

/**
 * @properties={typeid:24,uuid:"79a4f55d-7359-4619-b549-b4e25fba793f"}
 */
function getRowForId()
{
	// find the dataset row for the argument id
	for (var i = 2; i <= globals.treeviewDataSet.getMaxRowIndex(); i++)
	{
		var row = globals.treeviewDataSet.getRowAsArray(i);
		if(arguments[0] == row[0])
		{
			return i;
		}
	}
	
	return -1;
}

/**
 * @properties={typeid:24,uuid:"adf1023b-f046-43a7-ad54-3f62a3d22a9e"}
 */
function initTreeview()
{
	elements.treeview.setDataSet(globals.createDataSet());
	//apply css style
	elements.treeview.setStyleSheet(globals.myStyle);
	
	// setup columns size and format
	elements.treeview.setColumnWidth('treeColumn', 250);
	elements.treeview.setColumnWidth('column1', 50);
	elements.treeview.setColumnWidth('column2', 100);
	elements.treeview.setColumnWidth('column3', 200);
	elements.treeview.setColumnHeaderTextFormat('column2', '<html><b>$text</b></html>');
	elements.treeview.setColumnTextFormat('column3', '<html><i>$text</i></html>');	
	elements.treeview.setRowHeight(16);
	
	// set callback when edit finished
	elements.treeview.onEditFinished(onEditFinished)
	elements.treeview.onNodeClicked(onNodeClicked);
	
}

/**
 * @properties={typeid:24,uuid:"37a957ea-c7be-4fa9-9a1f-230046ce68a1"}
 */
function onAdd()
{
	// get the selected row, and add a new child
	var selectedNodes = elements.treeview.getSeletedNodes();
	if(selectedNodes)
	{
		globals.lastid = globals.lastid + 1;
		globals.treeviewDataSet.addRow([globals.lastid, selectedNodes[0], name, age,	profession,	note,	'user.png',	'true']);
		elements.treeview.refresh();
		elements.treeview.expandNode(globals.lastid);
		elements.treeview.setSelectedNodes([globals.lastid]);
	}
}

/**
 * @properties={typeid:24,uuid:"c2a311f1-ac40-4d51-a000-5393c9a5f31f"}
 */
function onEditFinished()
{
	// find edited row, get changed column, and update the dataset
	var row = getRowForId(arguments[0]);
	
	if(row > -1)
	{
		for(var j = 1; j <= globals.treeviewDataSet.getMaxColumnIndex(); j++)
		{
			var columnName = globals.treeviewDataSet.getColumnName(j);

			if(columnName == arguments[1])
			{
				globals.treeviewDataSet.setValue(row, j, arguments[2]);
				return;
			}
		}
	}	
}

/**
 * @properties={typeid:24,uuid:"d0dc8abf-2c57-43cd-8773-c32e23eaf8fa"}
 */
function onNodeClicked()
{
	var row = getRowForId(arguments[0])
	if(row > -1)
	{
		elements.lselected.text = globals.treeviewDataSet.getValue(row, 3);
	}
}

/**
 * @properties={typeid:24,uuid:"bc9dc9f9-f35c-4ccf-a90e-b7975998e820"}
 */
function onRemove()
{
	//find selected row and remove it	
	var selectedNodes = elements.treeview.getSeletedNodes();
	if(selectedNodes)
	{
		var row = getRowForId(selectedNodes[0])
		if(row > -1)
		{
			globals.treeviewDataSet.removeRow(row)
			elements.treeview.refresh();
		}
	}	
}
