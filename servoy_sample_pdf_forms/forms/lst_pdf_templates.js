/**
 * @properties={typeid:24,uuid:"e181fc19-07c1-4167-b292-0a46614b4d21"}
 */
function btn_goRec()
{
	globals.curID_template = template_id
}

/**
 * @properties={typeid:24,uuid:"11cec0f8-581a-4ba5-a445-c88b9a029b98"}
 */
function btn_sortAsc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_blk.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_grey.gif')
	controller.sort("template_name asc")
}

/**
 * @properties={typeid:24,uuid:"1dafb3c5-1522-47b2-a8e9-36887d850dcb"}
 */
function btn_sortDesc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_grey.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_blk.gif')
	controller.sort("template_name desc")
}

/**
 * @properties={typeid:24,uuid:"d9c95114-5b10-49b9-a89f-d275a5addfc9"}
 */
function btn_toggleList()
{
	//zoom the record list open and closed
	//make the rec list bigger or smaller
	var lh = forms.frm_nav_main.elements.tabs_recList.getHeight()

	if(lh > 23)
	{
		//expanded - so make smaller
//		elements.btn_triangle.setImageURL('media:///arrow_closed.gif')
	}
	else
	{
		//not expanded - so make bigger
//		elements.btn_triangle.setImageURL('media:///arrow_open.gif')
	}

	forms.frm_nav_main.sub_toggleRecList();
}
