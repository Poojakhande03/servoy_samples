/**
 * @properties={typeid:24,uuid:"ff46e141-2f74-47dd-9bd6-72c10a7b9448"}
 */
function btn_goRec()
{
	globals.curID_order = order_id
}

/**
 * @properties={typeid:24,uuid:"509725d3-4719-4db9-adf2-d43e4c46ea57"}
 */
function btn_sortAsc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_blk.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_grey.gif')
	controller.sort("order_number asc")
}

/**
 * @properties={typeid:24,uuid:"1cd8d45a-ce6f-4fc3-86e5-175e11fe2215"}
 */
function btn_sortDesc()
{
	elements.btn_sortAsc.setImageURL('media:///sort_asc_grey.gif')
	elements.btn_sortDesc.setImageURL('media:///sort_desc_blk.gif')
	controller.sort('order_number desc')
}
