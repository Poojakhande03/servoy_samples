/**
 * @properties={typeid:24,uuid:"7a65b755-76f4-415c-bfb0-f0d773ed9233"}
 */
function OnShow()
{
	/*
	PURPOSE: When showing files setup lists
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/21/08 BC
	MODIFIED: NONE
	********************************************/
	
	//switch the tabpanel in attached files to the second one
	
	forms.frm_attached_files.elements.tabs_files.tabIndex = 3
	if(gcurrproject_to_file && gcurrproject_to_file.getSize() > 0) {
		forms.frm_project_selproj_files_filelist.BtnGoFile(undefined);
	}
}
