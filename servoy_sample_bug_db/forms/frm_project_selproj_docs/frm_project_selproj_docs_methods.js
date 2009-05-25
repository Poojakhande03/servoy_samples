/**
 * @properties={typeid:24,uuid:"7270e178-8434-43da-9bd4-b059f666a7c4"}
 */
function OnShow()
{
	/*
	PURPOSE: When showing documents setup lists
	
	PARAMETERS: NONE
	OUTPUTS: NONE
	
	CREATED: 04/20/08 BC
	MODIFIED: NONE
	********************************************/
	
	//switch the tabpanel in attached files to the second one
	forms.frm_attached_files.elements.tabs_files.tabIndex = 2
	
	//if there are related files - show the first on
	if(gcurrproject_to_document && gcurrproject_to_document.getSize() > 0)
	{
		forms.frm_project_selproj_docs_docList.GoDocument();
	}
}
