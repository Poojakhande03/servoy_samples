/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} index
 * @param {Boolean} selected
 *
 * @properties={typeid:36,uuid:"43D36ECD-6BA0-4BD1-800E-1406C67B9632"}
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
