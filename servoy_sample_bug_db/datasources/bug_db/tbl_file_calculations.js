/**
 * @properties={type:12,typeid:36,uuid:"36fb35e4-6c68-44de-9ba5-696387c8ee20"}
 */
function background_rowColor()
{
	var index = arguments[0]; // gets the index of the record
	var selected = arguments[1]; //checks if this record is currently selected

	if(application.getApplicationType() == 5) //web client
	{
		if (index % 2 == 0) //odd row
		{
			return '#ffffff'
		}
		else
		{
			return '#f0f0f0'
		}
	}
	else
	{
		return '#ffffff'
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"f2c7b93d-107b-49fb-87a9-1f9ec67d4236"}
 */
function display_attachedTo()
{
	var attachedTo;
	if(application.getApplicationType() == 5) { //web client

	if(ixtask) {
		attachedTo = globals.htmlHoverStyle + '<i>TASK:</i> <a href="javascript:globals.GoTask(\'' + ixtask +
		'\')">' + file_to_task.task_name + '</a></body></html>'
	}
	else if(ixdocument) {
		attachedTo = globals.htmlHoverStyle + '<i>DOC:</i> <a href="javascript:globals.GoDoc(\'' + ixdocument +
		'\')">' + file_to_document.doc_name + '</a></body></html>'
	}
	else if(ixproject) {
		attachedTo = globals.htmlHoverStyle + '<i>PROJECT:</i> <a href="javascript:globals.GoProject(\'' + ixproject +
		'\')">' + file_to_project.proj_name + '</a></body></html>'
	}
	}
	else {
		if(ixtask) {
			attachedTo = globals.htmlHoverStyle + '<span style="font-size:11pt;"><i>TASK:</i> ' + file_to_task.task_name + '</span></body></html>'
		}
		else if(ixdocument) {
			attachedTo = globals.htmlHoverStyle + '<span style="font-size:11pt;"><i>DOC:</i> ' + file_to_document.doc_name + '</span></body></html>'
		}
	}

	return attachedTo
}

/**
 * @properties={type:12,typeid:36,uuid:"87f3911e-ccf9-4d63-8a1c-bb8853fdd188"}
 */
function display_dt_created()
{
	if(dt_created) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixpersoncreated)
		var dateFormatted = utils.dateFormat(dt_created, i18n.getDefaultDateFormat())

		if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ixpersoncreated + '\')">' +
		person + '</a></span></body></html>'
		}
		else {
			return globals.htmlHoverStyle + '<span style="font-size:11pt">' + dateFormatted + ' / ' + person +
			'</span></body></html>'
		}
	}
	else {
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"3a3c4c93-07dd-44ba-8cb5-d27860847a23"}
 */
function display_dt_modified()
{
	if(dt_modified) {
		var person = application.getValueListDisplayValue('PeopleLoginInternalOnly', ixpersonmodified)
		var dateFormatted = utils.dateFormat(dt_modified, i18n.getDefaultDateFormat())

		if(application.getApplicationType() == 5) { //web client
		return  globals.htmlHoverStyle  + '<span class="text">' +  dateFormatted + ' / ' + 
		'<a href="javascript:globals.GoPerson(\'' + ixpersonmodified + '\')">' +
		person + '</a></span></body></html>'
		}
		else {
			return globals.htmlHoverStyle + '<span style="font-size:11pt">' + dateFormatted + ' / ' + person +
			'</span></body></html>'
		}
	}
	else {
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"c90b55a7-fbee-4db2-b773-127f6dcac491"}
 */
function display_fileDetails()
{
	if(file_name)
	{
		var fileType = ''
		var fileDesc = ''
		var fName = file_name

		if(file_type){
			fileType = 'type: ' + file_type + '; ';
		}
		if(description){
			fileDesc = description + '<br>';
		}

		if(fName.length > 30) {
			fName = utils.stringLeft(fName, 30) + '...';
		}

		if(application.getApplicationType() == 5) //web client
		{
			if(fileDesc.length > 35) {
				fileDesc = utils.stringLeft(fileDesc, 35) + '...<br>';
			}
			var ds = getDataSource();
			var srv_ar = ds.split('/');
			var htmlMethod = '<a href="media:///servoy_blobloader?servername=' + srv_ar[1] + 
			'&tablename=tbl_file&dataprovider=file_data&rowid1=' + ixfile + '&rnd=' + Math.random() + '" target="' + Math.random() + '">'

			return globals.htmlHoverStyle + htmlMethod + '<b>' + fName + '</b></a><br>' +
			'<font class="xsmtext">' + fileDesc + fileType +
			'uploaded: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '</font></body></html>';
		}
		else
		{
			if(fileDesc.length > 45){
				fileDesc = utils.stringLeft(fileDesc, 42) + '...<br>';
			}

			return '<html><body><span style="font-size:11pt;"><b>' + fName + '</b></span><br>' +
			'<span style="font-size:9pt;">' + fileDesc + fileType +
			'uploaded: ' + utils.dateFormat(dt_created, i18n.getDefaultDateFormat()) + '</span></body></html>';
		}
	}
	else
	{
		return undefined;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"40d73956-d9ae-40c9-95dd-d481b5dd91ea"}
 */
function display_fileName()
{
	if(file_name) {
		var fName = file_name
		if(fName.length > 20) {
			fName = utils.stringLeft(fName, 20) + '...';
		}
		if(application.getApplicationType() == 5) //web client
		{
			return globals.htmlHoverStyle + '<span class="text">' + fName + '</span></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;">' + fName + '</span></body></html>'
		}
	}	
	else {
		return undefined;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"88a38f28-c9f3-4db5-b1fa-9054da8c0903"}
 */
function display_fileName_bold()
{
	if(file_name) {
		var fName = file_name
		if(fName.length > 23) {
			fName = utils.stringLeft(fName, 23) + '...';
		}
		if(application.getApplicationType() == 5) //web client
		{
			var ds = getDataSource();
			var srv_ar = ds.split('/');
			var htmlMethod = '<a href="media:///servoy_blobloader?servername=' + srv_ar[1] + 
			'&tablename=tbl_file&dataprovider=file_data&rowid1=' + ixfile + '&rnd=' + Math.random() + '" target="' + Math.random() + '">'

			return globals.htmlHoverStyle + htmlMethod + '<b class="text">' + fName + '</b></a></body></html>';
		}
		else
		{
			return '<html><body><span style="font-size:11pt;"><b>' + fName + '</b></span></body></html>'
		}
	}
	else {
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"22c05f2d-4131-4b0b-a495-bf11d68b8b48"}
 */
function display_status() {
	var mystatus;
	if(status != null && status != '')
	{
		mystatus = application.getValueListDisplayValue('TaskStatus', status)
	}
	else
	{
		mystatus = i18n.getI18NMessage('lbl.undefinedQ')
	}
	if(application.getApplicationType() == 5) //web client
	{
		return globals.htmlHoverStyle + '<a href="javascript:BtnGoFile(\'' + ixfile + '\');">' + mystatus + '</a></body></html>';
	}
	else
	{
		return '<html><head></head><body><span style="font-size:11pt;">' + mystatus + '</span></body></html>'
	}
}
