/**
 * @properties={type:12,typeid:36,uuid:"6a3b42e9-4887-45c8-8a57-e11db25c04e7"}
 */
function address_csz()
{
var address = ''

if(city || state || zip)
{
	if(city && state)
	{
		address += city + ', ' + state
	}
	else if(city && !state)
	{
		address += city
	}
	else if(state && !city)
	{
		address += state
	}
	
	if(zipcode) address += ' ' + zipcode
}

return address
}

/**
 * @properties={type:12,typeid:36,uuid:"11e90526-739b-413f-bae9-b9430d37431b"}
 */
function address_display_calc()
{
var address = null

if(line_1) address = line_1

if(line_2 && address)
{
	address += '\n' + line_2
}
else if(line_2 && !address)
{
	address = line_2
}

if(line_3 && address)
{
	address += '\n' + line_3
}
else if(line_3 && !address)
{
	address = line_3
}

if(line_4 && address)
{
	address += '\n' + line_4
}
else if(line_4 && !address)
{
	address = line_4
}

if(line_5 && address)
{
	address += '\n' + line_5
}
else if(line_5 && !address)
{
	address = line_5
}

if(city || state || zip) address += '\n' + address_csz

return address
}

/**
 * @properties={type:12,typeid:36,uuid:"a2ecd4ad-ceee-4836-a34c-3fee416aa51a"}
 */
function bgRowcolor_ltgrey()
{
var index    = arguments[0];
var selected = arguments[1];

if (selected){
   return globals.core_color_bgRowColor; // light grey for the selected row
}else{ 
	return globals.core_color_defaultBgColor; //white
}
}
