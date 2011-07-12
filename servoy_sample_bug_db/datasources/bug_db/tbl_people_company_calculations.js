/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"466583F1-1BD0-4C05-85DD-8A2D22589D11"}
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
 * @properties={type:12,typeid:36,uuid:"f2f1b319-0012-4c6d-b092-ea43ab17c15c"}
 */
function display_company_name()
{
	if(people_company_to_company && people_company_to_company.company_name)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.GoCompany(\'' +
			ixcompany + '\');">' + people_company_to_company.company_name + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + people_company_to_company.company_name + '</span></body></html>'
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"d7c2657e-f087-4421-9d3d-7e56d04bcc87"}
 */
function display_companyListRawHTML()
{
	if(people_company_to_company && people_company_to_company.company_name)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return '<a href="javascript:globals.GoCompany(\'' +
			ixcompany + '\');">' + people_company_to_company.company_name + '</a>';
		}
		else
		{
			return people_company_to_company.company_name
		}
	}
	else
	{
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"f0920590-8a45-470b-86c9-c4cda06ffb9d"}
 */
function display_person_name()
{
	if(people_company_to_people && people_company_to_people.name_full)
	{
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<a href="javascript:globals.GoPerson(\'' +
			ixpeople + '\');">' + people_company_to_people.name_full + '</a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + people_company_to_people.name_full + '</span></body></html>'
		}
	}
	else
	{
		return null;
	}
}
