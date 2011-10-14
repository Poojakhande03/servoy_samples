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
