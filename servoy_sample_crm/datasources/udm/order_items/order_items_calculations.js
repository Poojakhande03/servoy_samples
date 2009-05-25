/**
 * @properties={type:12,typeid:36,uuid:"4cf8d859-f80e-4a36-a674-0b5044db644d"}
 */
function bgRowColor_ltGrey()
{
var index    = arguments[0];
var selected = arguments[1];

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
