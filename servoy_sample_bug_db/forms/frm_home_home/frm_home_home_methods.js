/**
 * @properties={typeid:24,uuid:"b79de579-4e67-45ba-8aaa-654bd1005ee3"}
 */
function BtnEditProfile()
{
	/*
	PURPOSE: This method shows a dialog to edit the user's profile
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/09/08 BC
	MODIFIED: NONE
	********************************************/
	
	//find the right profile - then show it in a dialog
	forms.dlg_profile.controller.find()
	forms.dlg_profile.ixpeople = globals.currUserID
	var found = forms.dlg_profile.controller.search()
	
	if(found != 0)
	{
		globals.ShowDialogPerson()
	}
}
