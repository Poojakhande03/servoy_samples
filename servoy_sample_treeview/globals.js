/**
 * @properties={typeid:35,uuid:"2686080b-0a8d-4c61-9a08-0738572b8380"}
 */
var display_HTML = null;

/**
 * @properties={typeid:35,uuid:"978838e2-ad4d-4c68-91ea-1e7a50ed7dac",variableType:6}
 */
var lastid = 5;

/**
 * @properties={typeid:35,uuid:"391b535a-baec-4f62-a913-73e93f3e0ef2"}
 */
var myStyle = 'treeview { background-color: transparent; color: #000000; border-style: none; }';

/**
 * @properties={typeid:35,uuid:"e44436fc-de66-44ae-b1d2-081d2f9bc0fc",variableType:-4}
 */
var treeviewDataSet;

/**
 * @properties={typeid:24,uuid:"908f0597-cef6-499e-b046-b4af6eb0b33c"}
 */
function fillGlobals()
{
	globals.display_HTML = '<html>'+
	'The Treeview bean is a tree-table control, that uses a dataset as data model.<br>'+
	'In order to use a dataset as a treeview model, it has to satisfy the following requirements:<br>'+

	'The column names are used as internal identifiers by the treeview control to read the dataset entries;'+
 	'all the data for a column are used by the identiier specified in the column name; here are all the possible identifiers<br>'+
	'<br>'+
	'- id (int) [required] : row id<br>'+
	'- pid (int) [required] : parent row id<br>'+
	'- treeColumn (string) [required] : tree nodes label<br>'+
	'- column1, ... n (string) [optional] : row columns label/data<br>'+
	'- icon (string) [optional] : servoy media file name<br>'+
	'- editable (string) [optional] : "false" | null row columns editable flag, null means editable<br>'+
	'- type (string) [optional] : ""folder"| null tree node type, null means it depends on the number of children<br>'+
	'<br>'+
	'the first row in the dataset contains the treeview header labels<br>'+
	'<br>'+
	'An example of a dataset might look like:<br>'+createDataSet().getAsHTML();
}

/**
 * @properties={typeid:24,uuid:"b9eb4cb8-1f87-4a63-9e4c-e52cb2195d3c"}
 */
function createDataSet()
{
	// create initial dataset
	treeviewDataSet = databaseManager.createEmptyDataSet( 0,  ['id', 'pid', 'treeColumn', 'column1', 'column2', 'column3', 'icon', 'editable']);
	treeviewDataSet.addRow([null,	null,	'Person/Group',	'Age',		'Profession',	'Note']);	// header labels
	treeviewDataSet.addRow([1,		null,	'Main group',	'',			'',				'',					'group.png',	'false']);
	treeviewDataSet.addRow([2,		null,	'Second group',	'',			'',				'',					'group.png',	'false']);
	treeviewDataSet.addRow([3,		2,		'Subgroup',		'',			'',				'',					'group.png',	'false']);
	treeviewDataSet.addRow([4,		3,		'Mark',			'40',		'Manager',		'about Mark ...',	'user.png',		'true']);
	treeviewDataSet.addRow([5,		3,		'George',		'42',		'Assistant',		'some note ...',	'user.png',		'true']);
	return treeviewDataSet;
}
