/**
 * @properties={type:12,typeid:36,uuid:"3cb9424a-ae9b-4088-b1e9-f491304f9b24"}
 */
function display_comment()
{
	if(comment_text)
	{
		var txt = comment_text
		var desc = comment_desc
		var person = application.getValueListDisplayValue('PeopleNames', ixpersoncreated)
		
		if(comment_text.length > 35)
		{
			txt = utils.stringLeft(comment_text, 35) + '...'
		}
		
		if(comment_desc.length > 40)
		{
			desc = utils.stringLeft(comment_desc, 40) + '...'
		}
		
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:BtnShowComment(' + 0 + "," + ixcomment + ');"><b>' + txt + '</b></a><br>' +
			'<span class="smtext">' + desc + '</span><span class="xsmtext"><br>created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '; by: ' +
			person + '</span></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;"><b>' + txt + '</b></span><br>' +
			'<span style="font-size:10pt;">' + desc + '</span><span style="font-size:9pt;"><br>created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '; by: ' +
			person + '</span></body></html>';
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"c50846a1-164d-42a7-8d89-1d7ad8e1117d"}
 */
function display_comment_withreplycount()
{
	if(comment_text)
	{
		var txt = '<b>' + comment_text + '</b>'
		var desc = comment_desc
		var replies = ' (0 replies)'
		var linkReplies = replies

		if(comment_to_commentreplies && comment_to_commentreplies.getSize() > 0)
		{
			var count = comment_to_commentreplies.getSize()
			if(count == 1) {
				replies = ' (1 reply)'
			}
			else {
				replies = ' (' + count + ' replies)'
			}

			linkReplies = '<a href="javascript:ShowReplies(' + 0 + "," + ixcomment + ')">' + replies + '</a>'
		}
		else
		{
			linkReplies = replies
		}

		var person = application.getValueListDisplayValue('PeopleNames', ixpersoncreated)

		if(comment_text.length > (35 - replies.length))
		{
			txt = utils.stringLeft(comment_text, 35 - replies.length) + '...'
		}

		if ((comment_desc != undefined) && (comment_desc != null))
		if(comment_desc.length > 40)
		{
			desc = utils.stringLeft(comment_desc, 40) + '...'
		}

		if(application.getApplicationType() == 5) //web client
		{
			txt = '<a href="javascript:BtnShowComment(' + 0 + "," + ixcomment + ');">' + txt + '</a>' + linkReplies

			return globals.htmlHoverStyle + txt + '<br>' +
			'<span class="smtext">' + desc + '</span><span class="xsmtext"><br>created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '; by: ' +
			person + '</span></body></html>';
		}
		else
		{
			txt += linkReplies
			return '<html><body><span style="font-size:11pt;">' + txt + '</span><br>' +
			'<span style="font-size:10pt;">' + desc + '</span><span style="font-size:9pt;"><br>created: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '; by: ' +
			person + '</span></body></html>';
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"93965150-6deb-41c8-bee8-c518b78a7080"}
 */
function display_dt_created()
{
	if(dt_created) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixpersoncreated)
		var dateFormatted = utils.dateFormat(dt_created, i18n.getDefaultDateFormat())
		
		if(application.getApplicationType() == 5) { //web client
			return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
			'<a href="javascript:globals.GoPerson(' + "'" + ixpersoncreated + "'" + ')">' +
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
 * @properties={type:12,typeid:36,uuid:"7f987212-771e-44b4-93bd-9d2bb4f2a40e"}
 */
function display_dt_modified()
{
	if(dt_modified) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixpersonmodified)
		var dateFormatted = utils.dateFormat(dt_modified, i18n.getDefaultDateFormat())
		
		if(application.getApplicationType() == 5) { //web client
			return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
			'<a href="javascript:globals.GoPerson(' + "'" + ixpersonmodified + "'" + ')">' +
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
