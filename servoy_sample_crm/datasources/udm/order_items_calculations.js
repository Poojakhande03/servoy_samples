/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} index
 * @param {Object} selected
 *
 * @properties={typeid:36,uuid:"748A701A-C44B-4EFA-8C07-E0AC5C2771A3"}
 */
function bgRowColor_ltGrey(index, selected) {
//	var index    = arguments[0];
//	var selected = arguments[1];
	
	if (selected){
	   return globals.core_color_bgRowColor; // light grey for the selected row
	}else{ 
		return globals.core_color_defaultBgColor; //white
	}
}

/**
 * @properties={type:6,typeid:36,uuid:"8a2e6b10-2a63-44ac-86f5-dd4f819bb991"}
 */
function extended_cost()
{
if(quantity && cost_each)
{
	return cost_each * quantity
}
else
{
	return null
}
}

/**
 * @properties={type:6,typeid:36,uuid:"36adc0d0-5964-4d04-969e-89c3f9000319"}
 */
function extended_price()
{
if(quantity && price_each)
{
	return price_each * quantity
}
else
{
	return null
}
}

/**
 * @properties={type:12,typeid:36,uuid:"1101196a-ca9c-48d9-b24c-afc7a2d8cb4d"}
 */
function order_number()
{
return order_items_to_orders.order_number;
}
