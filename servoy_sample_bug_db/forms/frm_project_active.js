/**
 * @properties={typeid:24,uuid:"43d82238-f15f-437f-8536-9812bb82bdfe"}
 */
function OnShow()
{
	/*
	PURPOSE: This method runs when the active projects form is shown
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/16/08 BC
	MODIFIED: NONE
	********************************************/
	
	//perform a find for open projects that user is a member of the project team - or ALL for admin
	var args = new Array()
	
	if(globals.isAdmin == 1) {
		//var query = 'select a.ixproject from tbl_project a where a.status < 7' 
		var query = 'select a.ixproject from tbl_project a where a.status < 7 and a.ixtenant = ?'; 
		args[0] = globals.currTenantID;
	}
	else {
		var query = 'select a.ixproject from tbl_project_people a, tbl_project b ' +
					'where a.ixproject = b.ixproject and a.ixpeople = ? and b.status < 7'
		args[0] = globals.currUserID
	}
	
	//Get a dataset based on query
	var maxReturnedRows = 1000;//useful to limit number of rows
	var ds = controller.getDataSource().split('/');
	var dataset = databaseManager.getDataSetByQuery(ds[1], query, args, maxReturnedRows);
	
	forms.lst_project.controller.loadRecords(dataset)
	
	//active projects
	forms.lst_project.elements.project_name_asc.visible = false
	forms.lst_project.BtnSort(null, 'initial');
}
