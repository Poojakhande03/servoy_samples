/**
 * @properties={typeid:35,uuid:"e64339a8-9313-4136-ada1-9c4da7454ea6",variableType:4}
 */
var cur_infoId;

/**
 * @properties={typeid:35,uuid:"79553b89-053c-44e4-9636-e53f8a414ce9"}
 */
var display_HTML = '';

/**
 * @properties={typeid:35,uuid:"e6e26354-6ab0-4952-a074-870b99a82063"}
 */
var print_HTML = '';

/**
 * @properties={typeid:24,uuid:"7a037b4b-d4e5-4616-968f-4920c1077c83"}
 */
function openSolution()
{
}

/**
 * @properties={typeid:24,uuid:"c8f605b1-d0e9-48b8-a3ab-ea33cf3c33d5"}
 */
function setupHTML()
{
	globals.cur_infoId = forms.frm_info.info_id

	var html = '<html><body>'

	if(forms.frm_solution_nav.solution_name || forms.frm_solution_nav.image || forms.frm_solution_nav.file_name)
	{
		var txt01 = ''
		var txt02 = ''
		var txt03 = ''
		var spacing = 0
		var maxWidth = forms.frm_info.elements.fld_info.getWidth()-40

		if(application.getApplicationType() == 5) spacing=20

		html += '<table width=' + maxWidth + ' border=0 cellpadding=0 cellspacing=' + spacing + '><tr width=100%>'

		if(forms.frm_info.solution_name)
		{
			txt01 = 'Solution name:<br><b>' + forms.frm_info.solution_name + '</b>'
		}

		if(forms.frm_info.file_name)
		{
			txt02 = 'File name on disk:<br><b>' + forms.frm_info.file_name + '</b>'
		}

		if(forms.frm_info.overview)
		{
			txt03 = '<b><font size=4>Overview</font></b><br>' + forms.frm_info.overview
		}

		if(forms.frm_info.thumbnail)
		{
			var src = 'media:///servoy_blobloader?servername=' + currentcontroller.getServerName()+'&tablename='+forms.frm_info.controller.getTableName() +
			'&dataprovider=thumbnail&rowid1='+ forms.frm_info.info_id + "&rnd=" + (Math.random() * 100000000).toFixed(0)
			src = '<td align=right><img height=212 width=312 src=' + src + ' border=0></td>'
		}

		if(forms.frm_info.thumbnail && application.getApplicationType() != 5)
		{
			html += '<td valign=bottom>' + txt01 + '<br><br>' + txt02 + '<br><br>' + txt03 + '</td><td width=15>&nbsp;</td>' + src +
			'</td></tr></table><p>'
		}
		else
		{
			html += '<td valign=top width=' + (maxWidth*.3) + '>' + txt01 + '</td><td width=10' + 
			'></td><td valign=top width=' + (maxWidth * .5) + '>' + txt02 + '</td></tr></table><p>' + txt03 + '<p>'
		}
	}

	if(forms.frm_info.unique_features)
	{
		html += '<b><font size=4>Unique Features</font></b><br>' + forms.frm_info.unique_features + '<p>'
	}

	if(forms.frm_info.how_to_use)
	{
		html += '<b><font size=4>How To Use It</font></b><br>' + forms.frm_info.how_to_use + '<p>'
	}

	html += '</body></html>'

	//do html substitutions	
	//html = utils.stringReplace(html, '"', '&quot;')
	//changed to work with HTML tags
	var position = 0;
	for ( var i = 0 ; i < utils.stringPatternCount(html, '"') ; i++ )
	{
		position = utils.stringPosition(html, '"', position, 1);
		if (utils.stringMiddle(html, position - 1, 1)!= '=')
		{
			utils.stringIndexReplace(html, position, 1, '&quot;');
		}
	}

	html = utils.stringReplace(html, '\n', '<br>')

	globals.display_HTML = html
}
