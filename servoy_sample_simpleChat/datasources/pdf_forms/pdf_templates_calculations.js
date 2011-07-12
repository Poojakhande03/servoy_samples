/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} index
 * @param {Object} selected
 *
 * @properties={typeid:36,uuid:"811DFE29-877F-49B0-928E-57939ADEAD2C"}
 */
function bgRowColor_ltGrey(index, selected) {
	if (selected){
	   return "#f0f0f0"; // light grey for the selected row
	}else{ 
		return "#FFFFFF"; //white
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"7f367103-0789-498e-ba37-0025dd0ddf7c"}
 */
function delete_text()
{
return 'Are you sure you really want to delete the template\n"' + template_name + 
	'"?\n\nNOTE: This will also DELETE the form from the database.'
}
