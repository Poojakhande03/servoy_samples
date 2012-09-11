/**
 *
 * @properties={typeid:24,uuid:"d0e3fbfd-f1c2-4e66-be05-c1129cb6e0cf"}
 */
function newRecord()
{
controller.newRecord()
}

/**
 *
 * @properties={typeid:24,uuid:"938f9cd8-db0d-41e7-b232-647c9a5d8eed"}
 */
function nextRecord()
{
controller.setSelectedIndex(controller.getSelectedIndex()+1)
}

/**
 *
 * @properties={typeid:24,uuid:"8bfa562e-a162-4971-9d69-59a0f8bc6dda"}
 */
function prevRecord()
{
controller.setSelectedIndex(controller.getSelectedIndex()-1)
}

/**
 *
 * @properties={typeid:24,uuid:"49ab23ef-5b79-41a4-b4de-aff784482ce4"}
 */
function showURL()
{
application.showURL(application.getServerURL()+'/examples/headless_client_formtest.jsp')
}
