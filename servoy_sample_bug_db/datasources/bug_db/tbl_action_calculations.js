/**
 * @properties={type:12,typeid:36,uuid:"a5797bc7-a4fd-4ae4-8af8-ad9617d22ad0"}
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
 * @properties={type:12,typeid:36,uuid:"b6d7fd48-857f-4fcf-9f2d-d28a8b98e296"}
 */
function display_project()
{
	if(ixproject && action_to_project) {
		return action_to_project.display_project;
	}
	else {
		return ' ';
	}
}
