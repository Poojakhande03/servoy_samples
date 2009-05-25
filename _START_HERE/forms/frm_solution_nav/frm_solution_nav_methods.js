/**
 * @properties={typeid:24,uuid:"1237187c-f2b4-4dbb-889d-bf20175f4af2"}
 */
function btn_goRecord()
{
	//update global
	globals.cur_infoId = info_id

	//setup the HTML
	globals.setupHTML();

	if(application.getApplicationType() == 5)
	{
		//needed for web client only
		var myRecID = new Array()
		myRecID[0] = info_id
		forms.frm_info.controller.loadRecords(info_id)
	}
}
