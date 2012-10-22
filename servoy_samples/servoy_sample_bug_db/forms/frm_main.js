/**
 * @properties={typeid:24,uuid:"a1818b0d-4b51-4fa2-b8fc-cdbc52f98a71"}
 */
function Exit()
{
	if(application.getApplicationType() == 5) //web
	{
		application.exit();
	}
	else
	{
//		application.closeSolution() - In 6.1 returns an error dialog
		application.exit();
	}
}
