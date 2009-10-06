/**
 * @properties={typeid:24,uuid:"5dbad6e3-a04e-4092-9826-efd68cc774b9"}
 */
function LoadPeople()
{
	/*
	PURPOSE: Filter people list based on the companies the person works for
	
	PARAMETERS: ixdocument int (optional - only web client)
	OUTPUTS: NONE
	
	CREATED: 04/22/08 BC
	MODIFIED: NONE
	********************************************/
	
	if(globals.isAdmin == 1) { //admin - show everyone
			forms.lst_people.controller.loadAllRecords()
	}
	else { //show only the people from current user's company
		//Get a dataset based on query
		var maxReturnedRows = 1000;
		var args = globals.currUserCompanyArray
		var questionMarks = globals.ReturnSqlWhereQuestionMarks(globals.currUserCompanyArray);
		var query = 'SELECT a.ixpeople FROM tbl_people a, tbl_people_company b ' +
					'WHERE a.ixpeople = b.ixpeople AND b.ixcompany IN (' + questionMarks + ')'
		var dataset = databaseManager.getDataSetByQuery(controller.getServerName(), query, args, maxReturnedRows);
		
		forms.lst_people.controller.loadRecords(dataset)
	
	}
	
	//set initial sort
	forms.lst_people.elements.name_full_asc.visible =  false;
	forms.lst_people.BtnSort('initial');
}
