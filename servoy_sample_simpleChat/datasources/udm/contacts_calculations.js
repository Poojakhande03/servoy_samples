/**
 * @properties={type:12,typeid:36,uuid:"251d8fbf-b5be-49ec-a530-97fd5a893141"}
 */
function bgRowcolor_ltgrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return "#f0f0f0"; // light grey for the selected row
}else{ 
	return "#FFFFFF"; //white
}
}

/**
 * @properties={type:12,typeid:36,uuid:"fd5bd70b-6b4e-41a0-a126-9675295f78a4"}
 */
function email_link()
{
if(email)
{
	return '<html><a href="mailto:' + email + '">Email</a></html>'
}
else
{
	return "No Email"
}
}

/**
 * @properties={type:12,typeid:36,uuid:"0f0697df-8811-4352-86ff-7a9552e7e845"}
 */
function name_fl() {
	if(name_first && name_last)
	{
		return name_first + " " + name_last
	}
	else if(name_last)
	{
		return name_last
	}
	else if(name_first)
	{
		return name_first
	}
	return null;
}

/**
 * @properties={type:12,typeid:36,uuid:"16ab53ed-2c07-471c-8952-9aa793f35a26"}
 */
function name_lf()
{
if(name_first && name_last)
{
	return name_last + ", " + name_first
}
else if(name_last & !name_first)
{
	return name_last
}
else
{
	return "?, " + name_first
}
}
