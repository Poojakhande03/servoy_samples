/**
 * @properties={type:12,typeid:36,uuid:"ce2e82d9-31b2-436f-8192-feaf5c5bb467"}
 */
function display_docInfo()
{
	if(doc_name)
	{
		var txt = doc_name
		var desc = description
		var person = application.getValueListDisplayValue('PeopleNames', ixcreatedperson)

		if(txt.length > 35)
		{
			txt = utils.stringLeft(txt, 35) + '...'
		}

		if(desc.length > 40)
		{
			desc = utils.stringLeft(desc, 40) + '...'
		}

		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:GoDocument(\'' + ixdocument + '\');"><b>' + txt + '</b></a><br>' +
			'<span class="smtext">' + desc + '</span><span class="xsmtext"><br>created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '; by: ' +
			person + '</span></body></html>';
		}
		else
		{
			return '<html><head></head><body><span style="font-size:11pt;"><b>' + txt + '</b></span><br>' +
			'<span style="font-size:10pt;">' + desc + '</span><span style="font-size:9pt;"><br>created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '; by: ' +
			person + '</span></body></html>';
		}
	}
	else
	{
		return '?';
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"fe3cf77e-a97a-484b-9ed1-0150c8f49fd6"}
 */
function display_docName()
{
	if(doc_name)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.GoDocument(\'' + ixdocument +
			'\');">' + doc_name + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + doc_name + '</span></body></html>'
		}
	}
	else
	{
		return 'UNKNOWN Company'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"2d06b88d-11ec-4fb0-a109-c8839568776e"}
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
 * @properties={type:12,typeid:36,uuid:"d55d1ccb-d6ad-48f1-baef-4f9490efcc2d"}
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
