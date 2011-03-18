/**
 * @properties={type:12,typeid:36,uuid:"38be6fe8-9557-4026-980c-f23ce9b946a1"}
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
 * @properties={type:12,typeid:36,uuid:"916a55de-c64f-4e34-bcf4-df1f91703177"}
 */
function display_dt_created()
{
	if(dt_created) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixpersoncreated)
		var dateFormatted = utils.dateFormat(dt_created, i18n.getDefaultDateFormat())

		if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle + '<span class="text">' + dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ixpersoncreated + '\')">' +
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
 * @properties={type:12,typeid:36,uuid:"1787513e-4133-4a8a-8e9a-e9d0c09f66be"}
 */
function display_dt_modified()
{
	if(dt_modified) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixpersonmodified)
		var dateFormatted = utils.dateFormat(dt_modified, i18n.getDefaultDateFormat())

		if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ixpersonmodified + '\')">' + 
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
 * @properties={type:12,typeid:36,uuid:"62e75a4d-c3fc-439f-b3e4-4b5f8abf6c89"}
 */
function display_versionDetails()
{
	if(version_name)
	{
		var fileDesc = ''
		var fName = version_name
		var person = application.getValueListDisplayValue('PeopleNames', ixpersoncreated)
	
		if(description){
			fileDesc = description + '<br>';
		}
		
		if(fName.length > 30) {
			fName = utils.stringLeft(fName, 30) + '...';
		}
			
		if(application.getApplicationType() == 5) //web client
		{
		
			if(fileDesc.length > 35) {
				fileDesc = utils.stringLeft(fileDesc, 35) + '...<br>';
			}
			
			var htmlMethod = '<a href="javascript:globals.GoVersion(' + "'" + ixversion + "'" + ')">'
	
			return globals.htmlHoverStyle + htmlMethod + '<b>' + fName + '</b></a><br>' +
			'<font class="xsmtext">' + fileDesc +
			 'created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + 
			'; by: ' + person + '</font></body></html>';
		}
		else
		{
			if(fileDesc.length > 45){
				fileDesc = utils.stringLeft(fileDesc, 42) + '...<br>';
			}
			
			return '<html><body><span style="font-size:11pt;"><b>' + fName + '</b></span><br>' +
			'<span style="font-size:9pt;">' + fileDesc +
			 'created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + 
			'; by: ' + person + '</span></body></html>';
		}
	}
	else
	{
		return null;
	}
}
