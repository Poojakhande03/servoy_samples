/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"3B62A09C-B72F-4E3E-A086-D0A16E194898"}
 */
function background_rowColor(index, selected) {
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
 * @properties={type:12,typeid:36,uuid:"6649ee23-0728-47f7-a27a-a2f2e9fd8668"}
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
 * @properties={type:12,typeid:36,uuid:"f17dc2c3-4399-4896-8b2f-3ffa658fd12f"}
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
 * @properties={type:12,typeid:36,uuid:"d7c047ad-4545-4568-9f8c-7bb7b3c45c92"}
 */
function display_projectName()
{
if(task_to_project)
{
	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:globals.GoProject(\'' + ixproject + '\');">' + task_to_project.proj_name + '</a></body></html>';
	}
	else
	{
		return '<html><body><span style="font-size:11pt;">' + task_to_project.proj_name + '</span></body></html>'
	}
}
else
{
	return null;
}
}

/**
 * @properties={type:12,typeid:36,uuid:"03c670de-1c87-4375-b4af-625e1655930d"}
 */
function display_taskName()
{
if(task_name)
{
	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:GoTask(\'' + ixtask + ',' + ixproject + '\');">' + task_name + '</a></body></html>';
	}
	else
	{
		return '<html><body><span style="font-size:11pt;">' + task_name + '</span></body></html>'
	}
}
else
{
	return null;
}
}

/**
 * @properties={type:12,typeid:36,uuid:"5c2e45b1-7f69-4793-b8a1-aa517b0f1660"}
 */
function display_taskName_bold()
{
if(task_name)
{
	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:globals.GoTask(' + ixtask + "," + ixproject + ')"><b>' + task_name + '</b></a></body></html>';
	}
	else
	{
		return '<html><body><span style="font-size:11pt;"><b>' + task_name + '</b></span></body></html>'
	}
}
else
{
	return null;
}
}
