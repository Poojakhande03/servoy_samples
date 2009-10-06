/**
 * @properties={typeid:24,uuid:"c2306aad-205c-471f-8ca9-90b73eadef0f"}
 */
function btn_goRec()
{
	globals.curID_form = form_id;
}

/**
 * @properties={typeid:24,uuid:"12a3f948-985f-4a57-a572-0af74035f98f"}
 */
function btn_sortAsc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_blk.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_grey.gif')
	controller.sort("company_name asc")
}

/**
 * @properties={typeid:24,uuid:"446f23a9-ebb8-4058-a703-d903b3e7c9a4"}
 */
function btn_sortDesc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_grey.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_blk.gif')
	controller.sort("company_name desc")
}

/**
 * @properties={typeid:24,uuid:"1b92de1a-8f33-471f-bf2f-c30abcd17c08"}
 */
function btn_toggleList()
{
	//zoom the record list open and closed
	//make the rec list bigger or smaller
	var lh = forms.frm_nav_main.elements.tabs_recList.getHeight()

	if(lh > 23)
	{
		//expanded - so make smaller
		elements.btn_triangle.setImageURL('media:///arrow_closed.gif')
	}
	else
	{
		//not expanded - so make bigger
		elements.btn_triangle.setImageURL('media:///arrow_open.gif')
	}

	forms.frm_nav_main.sub_toggleRecList();
}
