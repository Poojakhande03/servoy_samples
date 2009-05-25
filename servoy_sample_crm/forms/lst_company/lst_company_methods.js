/**
 * @properties={typeid:24,uuid:"e089f750-4819-4532-8ff9-8013fc421101"}
 */
function btn_goRec()
{
	globals.curID_company = company_id
}

/**
 * @properties={typeid:24,uuid:"b8388198-425c-4294-9b0c-4159140724b1"}
 */
function btn_sortAsc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_blk.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_grey.gif')
	controller.sort("company_name asc")
}

/**
 * @properties={typeid:24,uuid:"d238fe2c-9849-471f-a795-82d6e4e1a6f7"}
 */
function btn_sortDesc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_grey.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_blk.gif')
	controller.sort('company_name desc')
}

/**
 * @properties={typeid:24,uuid:"3f6bb56d-7a40-4ffa-9f41-4aa87f4b81c5"}
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
