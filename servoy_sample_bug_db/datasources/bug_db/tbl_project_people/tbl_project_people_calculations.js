/**
 * @properties={type:12,typeid:36,uuid:"c46bc157-b758-4385-955d-bddf06ab6226"}
 */
function background_rowColor()
{
	var index = arguments[0]; // gets the index of the record
	var selected = arguments[1]; //checks if this record is currently selected

	if(application.getApplicationType() == 5) //web client
	{
		if (index % 2 == 0) //odd row
		{
			return '#ffffff'
		}
		else
		{
			return '#f0f0f0'
		}
	}
	else
	{
		return '#ffffff'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"81903c94-20e5-4fad-a99a-d389cf94bb81"}
 */
function display_peopleListRawHTML()
{
	if(project_people_to_people && project_people_to_people.name_full)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return '<a href="javascript:globals.GoPerson(\'' +
			ixpeople + '\');">' + project_people_to_people.name_full + '</a>';
		}
		else
		{
			return project_people_to_people.name_full
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"5b0b5e79-15cb-40cd-aa77-4b38c86f5318"}
 */
function display_person()
{
	if(project_people_to_people)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:BtnGoPerson(' + ixpeople + ');">' + project_people_to_people.name_full + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + project_people_to_people.name_full + '</span></body></html>'
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"13cbd350-8262-4359-9fe3-3744fbad4caa"}
 */
function display_project()
{
	if(project_people_to_project && project_people_to_project.proj_name)
	{
		var proj = project_people_to_project.proj_name
	}
	else
	{
		var proj = "Untitled Project"
	}

	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:globals.GoProject(\'' + ixproject + '\');">' + proj + '</a></body></html>';
	}
	else
	{
		return '<html><body><span style="font-size:11pt;">' + proj + '</span></body></html>'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"d7e5a3be-77c1-4cf9-b902-cf51283bd87a"}
 */
function display_project_bold()
{
	if(project_people_to_project && project_people_to_project.proj_name)
	{
		var proj = project_people_to_project.proj_name
	}
	else
	{
		var proj = "Untitled Project"
	}

	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:globals.GoProject(\'' + ixproject + '\');"><b>' + proj + '</b></a></body></html>';
	}
	else
	{
		return '<html><body><span style="font-size:11pt;"><b>' + proj + '</b></span></body></html>'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"67200564-12c8-4458-82d6-1da123861388"}
 */
function display_status()
{
	if(project_people_to_project && project_people_to_project.status)
	{
		var mystatus = application.getValueListDisplayValue('ProjectStatus', project_people_to_project.status)
	}
	else
	{
		var mystatus = 'UNKNOWN'
	}

	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:globals.GoProject(\'' + ixproject + '\');">' + mystatus + '</a></body></html>';
	}
	else
	{
		return '<html><body><span style="font-size:11pt;">' + mystatus + '</span></body></html>'
	}
}
