/**
 * @properties={typeid:24,uuid:"c734e9f3-ef0e-4dbe-9993-56f7cc7a5e37"}
 * @AllowToRunInFind
 */
function btn_search()
{
	var frm = forms.main.elements.tabs_main.getTabFormNameAt(forms.main.elements.tabs_main.tabIndex)
	var search = globals.nav_search

	if(search)
	{
		var dataType = 'str'
		var searchStr = '%' + search + '%'
		var op = ""

		//see if there are any operators (< > = !=) entered
		if(search.indexOf('!=') != -1)
		{
			op = '!='
		}
		else if(search.indexOf('>=') != -1)
		{
			op = '>='
		}
		else if(search.indexOf('>') != -1)
		{
			op = '>'
		}
		else if(search.indexOf('<=') != -1)
		{
			op = '<='
		}
		else if(search.indexOf('<') != -1)
		{
			op = '<'
		}
		else if(search.indexOf('=') != -1)
		{
			op = '='
		}

		if(op) search = utils.stringReplace(search, op, '') //take off the operator to see if date or num

		//try to guess what type of data is entered in the search
		if(search.indexOf('/') != -1 || search.indexOf('-') != -1)
		{
			dataType = 'date' //probably a date
			search = new Date(search)
			searchStr = op + search
		}
		else if(search.indexOf('.') != -1 && !isNaN(parseFloat(search)))
		{
			dataType = 'number' //probably a number
			search = parseFloat(search)
			searchStr = op + search
		}
		else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
		{
			dataType = 'int' //probably an integer
			search = parseInt(search)
			searchStr = op + search
		}

		//TEMPLATE FIND
		if(frm.indexOf('templates') >= 0)
		{
			forms[frm].controller.find()

			if(dataType == 'int')
			{
				forms[frm].template_id = searchStr
			}
			else if(dataType == 'number')
			{
				globals.showErrorDialog('There is no numeric data to search by in the templates table.',null,'OK', null, null, null)
			}
			else if(dataType == 'date')
			{
				globals.showErrorDialog('There is no date data to search by in the templates table.',null,'OK', null, null, null)
			}
			else //string
			{
				forms[frm].category = searchStr
				forms[frm].controller.newRecord()
				forms[frm].description = searchStr
				forms[frm].controller.newRecord()
				forms[frm].filename = searchStr
				forms[frm].controller.newRecord()
				forms[frm].template_name = searchStr
			}
		}
		//FORMS FIND
		if(frm.indexOf('forms') >= 0)
		{
			forms[frm].controller.find()

			if(dataType == 'int')
			{
				forms[frm].form_id = searchStr
			}
			else if(dataType == 'number')
			{
				globals.showErrorDialog('There is no numeric data to search by in the forms table.',null,'OK', null, null, null)
			}
			else if(dataType == 'date')
			{
				globals.showErrorDialog('There is no date data to search by in the forms table.',null,'OK', null, null, null)
			}
			else //string
			{
				forms[frm].note = searchStr
				forms[frm].controller.newRecord()
				forms.frm_forms.pdf_forms_to_pdf_templates.template_name = searchStr
			}
		}

		//perform the search
		var found = forms[frm].controller.search()

		//see if anything was found
		if(found == 0)
		{
			globals.showErrorDialog('No records were found matching your search request.', null, null, null, null, null)
			forms[frm].controller.loadAllRecords()
		}
		else
		{
			//show the "show all" button
			forms.frm_buttons.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_buttons.btn_showAll()
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @properties={typeid:24,uuid:"65c97399-f4e8-48c4-ae9e-2fd6f982fae3"}
 */
function sub_toggleRecList()
{
	//make the rec list bigger or smaller
	var lh = elements.tabs_recList.getHeight()
	var lw = elements.tabs_recList.getWidth()

	var nx = elements.tabs_solNav.getLocationX()
	var ny = elements.tabs_solNav.getLocationY()

	if(lh > 23)
	{
		//records currently showing - so hide
		elements.tabs_recList.setSize(lw, 23)
	}
	else
	{
		//records not showing - so show list
		elements.tabs_recList.setSize(lw, 346)
	}

	elements.tabs_solNav.setLocation(nx, elements.tabs_recList.getHeight()+ 2)
}
