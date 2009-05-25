/**
 * @properties={type:12,typeid:36,uuid:"e85f7eab-e610-4cf1-8ffc-53308a07c35b"}
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
 * @properties={type:12,typeid:36,uuid:"a0667412-8d9f-4831-8252-ea608106fc6d"}
 */
function display_company()
{
	if(company_name)
	{
	
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.GoCompany(\'' + ixcompany +
			'\');">' + company_name + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + company_name + '</span></body></html>'
		}
	}
	else
	{
		return 'UNKNOWN Company'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"80794c60-2d74-4509-b9df-d5953028cf4d"}
 */
function display_company_bold()
{
	if(company_name)
	{
	
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.GoCompany(\'' + ixcompany +
			'\');"><b>' + company_name + '</b></a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;"><b>' + company_name + '</b></span></body></html>'
		}
	}
	else
	{
		return 'UNKNOWN Company'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"04ec21be-e503-4a98-997b-ac66371c5a3c"}
 */
function display_company_shortname()
{
	if(company_name_short)
	{
	
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.GoCompany(\'' + ixcompany +
			'\');">' + company_name_short + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + company_name_short + '</span></body></html>'
		}
	}
	else
	{
		return null
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"becbbe5d-3e2e-4f99-99df-4ee08df818df"}
 */
function display_dt_created()
{
	if(dt_created) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ix_personcreated)
		var dateFormatted = utils.dateFormat(dt_created, i18n.getDefaultDateFormat())

		if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ix_personcreated + '\')">' +
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
 * @properties={type:12,typeid:36,uuid:"0ec54f46-4685-48f5-87f8-b3bcc69eca14"}
 */
function display_dt_modified()
{
	if(dt_modified) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ix_personmodified)
		var dateFormatted = utils.dateFormat(dt_modified, i18n.getDefaultDateFormat())
		
		if(application.getApplicationType() == 5) { //web client
			return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
			'<a href="javascript:globals.GoPerson(\'' + ix_personmodified + '\')">' +
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
 * @properties={type:12,typeid:36,uuid:"100f5825-ba87-49fe-b46f-e62bf12681f4"}
 */
function display_website()
{
	if(website)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.OpenUrl(' + "'" + website + "'" + ')">' + website + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + website + '</span></body></html>'
		}
	}
	else
	{
		return null
	}
}
