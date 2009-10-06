/**
 * @properties={typeid:24,uuid:"0b733258-7821-4bfa-8bdd-68dab92df7cd"}
 */
function btn_goRec()
{
	globals.curID_product = product_id
}

/**
 * @properties={typeid:24,uuid:"ea313167-ef69-461f-bd2a-d920bc193bd4"}
 */
function btn_sortAsc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_blk.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_grey.gif')
	controller.sort("product_number asc")
}

/**
 * @properties={typeid:24,uuid:"2878e384-1250-431c-875e-8ad3d74404fc"}
 */
function btn_sortDesc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_grey.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_blk.gif')
	controller.sort('product_number desc')
}
