/**
 * @properties={typeid:24,uuid:"9fc7518f-a1c5-419a-892b-9bd45a1d82a1"}
 */
function OnShow()
{
	/*
	PURPOSE: When showing versions setup lists
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	//if there are related versions - show the first one
	if(gcurrproject_to_version && gcurrproject_to_version.getSize() > 0) {
		forms.frm_project_selproj_versions_versionList.GoVersion();
	}
}
