/**
 * @properties={type:12,typeid:36,uuid:"730a1594-cc4e-40a6-a0a9-0506cd665d67"}
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
 * @properties={type:12,typeid:36,uuid:"bda51415-345d-4d94-98d5-43deb5eaad5b"}
 */
function display_company()
{
if(project_to_company)
{
	var company = project_to_company.company_name
}
else
{
	var company = i18n.getI18NMessage('lbl.unassigned')
}

if(application.getApplicationType() == 5) //web client
{
	return globals.htmlHoverStyle + '<a href="javascript:globals.GoCompany(\'' + ixcompany + '\');">' + company + '</a></body></html>';
}
else
{
	return '<html><body><span style="font-size:11pt;">' + company + '</span></body></html>'
}
}

/**
 * @properties={type:12,typeid:36,uuid:"7d2c2c8a-124d-4e91-a1cc-2535dc86e013"}
 */
function display_dt_created()
{
if(dt_created) {
	var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixcreatedperson)
	var dateFormatted = utils.dateFormat(dt_created, i18n.getDefaultDateFormat())
	
	if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ixcreatedperson + '\')">' +
		 person + '</a></span></body></html>'
	}
	else {
		return globals.htmlHoverStyle + '<span style="font-size:11pt">' + dateFormatted + ' / ' + person +
		'</span></body></html>'
	}
}
else {
	return null;
}
}

/**
 * @properties={type:12,typeid:36,uuid:"3b91ce4a-24ab-4289-bc54-396cfae6918d"}
 */
function display_dt_modified()
{
if(dt_modified) {
	var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixmodifiedperson)
	var dateFormatted = utils.dateFormat(dt_modified, i18n.getDefaultDateFormat())
	
	if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ixmodifiedperson + '\')">' +
		 person + '</a></span></body></html>'
	}
	else {
		return globals.htmlHoverStyle + '<span style="font-size:11pt">' + dateFormatted + ' / ' + person +
		'</span></body></html>'
	}
}
else {
	return null;
}
}

/**
 * @properties={type:12,typeid:36,uuid:"2a560ac5-6444-4b1c-b457-3642a3c55302"}
 */
function display_peopleOnProject()
{
if(project_to_project_people && project_to_project_people.getSize() > 0) { //at least one person on project

	var max = project_to_project_people.getSize()
	var htmlList = null
	for ( var i = 1 ; i <= max ; i++ )  //NOT the best idea to do in a calc!! DO NOT COPY THIS TECHNIQUE!
	{
		project_to_project_people.setSelectedIndex(i)
		if(!htmlList) {
			htmlList = project_to_project_people.display_peopleListRawHTML
		} else {
			htmlList += ', ' + project_to_project_people.display_peopleListRawHTML
		}
	}
	
	if(application.getApplicationType() == 5) { //web client
		htmlList = '<span class="text">' + htmlList
	} else {
		htmlList = '<span style="font-size:11pt;">' + htmlList
	}
	
	return globals.htmlHoverStyle + htmlList + '</span></body></html>'
}
else {
	return null;
}
}

/**
 * @properties={type:12,typeid:36,uuid:"3dfc9d3c-efc4-4481-810a-f95143ceb6ab"}
 */
function display_project()
{
if(proj_name)
{
	var proj = proj_name
}
else
{
	var proj = "Untitled Project"
}

if(application.getApplicationType() == 5) //web client
{
	return globals.htmlHoverStyle + '<a href="javascript:BtnGoProject(\'' + ixproject + '\');">' + proj + '</a></body></html>';
}
else
{
	return '<html><body><span style="font-size:11pt;">' + proj + '</span></body></html>'
}
}

/**
 * @properties={type:12,typeid:36,uuid:"c17dc04d-03b0-4386-9e64-fbdace277ab7"}
 */
function display_project_bold()
{
if(proj_name)
{
	var proj = proj_name
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
}return 1;
}

/**
 * @properties={type:12,typeid:36,uuid:"345662ba-d934-4c54-82c2-2030f0458264"}
 */
function display_status()
{
if(status)
{
	var mystatus = application.getValueListDisplayValue('ProjectStatus', status)
}
else
{
	var mystatus = i18n.getI18NMessage('lbl.undefined')
}


if(application.getApplicationType() == 5) //web client
{
	return globals.htmlHoverStyle + '<a href="javascript:BtnGoProject(\'' + ixproject + '\');">' + mystatus + '</a></body></html>';
}
else
{
	return '<html><body><span style="font-size:11pt;">' + mystatus + '</span></body></html>'
}
}
