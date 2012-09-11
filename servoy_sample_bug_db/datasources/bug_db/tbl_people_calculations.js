/**
 * @properties={type:12,typeid:36,uuid:"0802daad-7b36-4ebb-a7d5-3c7551ec38f3"}
 */
function diaplsy_email_personal()
{
	if(email_personal)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.OpenUrl(\'mailto:' +
			email_personal + '\');">' + email_personal + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + email_personal + '</span></body></html>'
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"5314211e-60ec-41fd-9705-1b2c3af3c3dd"}
 */
function display_companiesWorksFor()
{
	if(people_to_people_company && people_to_people_company.getSize() > 0) { //they work for at least one company
	//var compList = databaseManager.getFoundSetDataProviderAsArray(people_to_people_company, 'ixcompany')
	var max = people_to_people_company.getSize()
	var htmlList = null
	for ( var i = 1 ; i <= max ; i++ )  //NOT the best idea to do in a calc!! DO NOT COPY THIS TECHNIQUE!
	{
		people_to_people_company.setSelectedIndex(i)
		if(!htmlList) {
			htmlList = people_to_people_company.display_companyListRawHTML
		} else {
			htmlList += ', ' + people_to_people_company.display_companyListRawHTML
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
 * @properties={type:12,typeid:36,uuid:"5db444d7-2256-4aed-b6bf-d99b1e2c5883"}
 */
function display_email_office()
{
	if(email_off)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.OpenUrl(\'mailto:' +
			email_off + '\');">' + email_off + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + email_off + '</span></body></html>'
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"2ef08312-4cb0-46d5-ad9c-94645e5a21fc"}
 */
function display_name_full()
{
	if(name_full)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:BtnGoPerson(\'' + ixpeople + '\');"><b>' + name_full + '</b></a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;"><b>' + name_full + '</b></span></body></html>'
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"cad66530-0a08-4f46-8671-c65d03f786f3"}
 */
function display_nickname()
{
	if(name_full)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:BtnGoPerson(\'' + ixpeople + '\');">' + nickname + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + nickname + '</span></body></html>'
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:4,typeid:36,uuid:"40cae252-98e4-49b1-abc6-640c6889af29"}
 */
function mutiselection_checkbox()
{
	if(!globals.SelectMutiplePeopleArray)
		return 0;
	if(globals.SelectMutiplePeopleArray['_'+ixpeople])
		return 1;

	return 0;
}
