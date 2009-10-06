dataSource:"db:/bug_db/tbl_project",
items:[
{
location:"20,59",
mediaOptions:14,
size:"481,272",
styleClass:"reportsm",
tabSeq:-1,
text:"<html><head><\/head><body>
This example file is a multi-tenant, web-based bug tracking system. There are 4 logins already created:
<br><br><b>admin/admin<\/b>
<br>The main login that will allow you to set everything up (admin for the \"Servoy\" tenant)
<br><br><b>dev/dev<\/b><br>This is the a developer with the main company
<br><br><b>client/client<\/b>
<br>An example client login (admin for client - who is in the \"Servoy\" tenant)
<br><br><b>client2/client2<\/b>
<br>An example of someone who works for the client

<br><br>As admin, you can create projects, people and companies. If you make a person's profile \"Admin\" - then 
they will be able to create people and projects (within their own company). If you attach a person to a company 
in the \"Admin\" profile.
<br><br>
That means if you create a person, and attach them to the main tenant (in this case \"Servoy\") - then they will see 
all projects and people and will be able to act like an admin for that tenant.

<br><br>To disable this dialog - open the \"SolutionOpen\" global method and comment out the line that shows this dialog.
<\/body><\/html>",
transparent:true,
typeid:7,
uuid:"08b36597-b9d8-4f34-b675-c9ac5b43b271",
verticalAlignment:1
},
{
formIndex:10300,
location:"0,0",
mediaOptions:14,
name:"null_copy561",
size:"524,50",
styleClass:"darkgrc",
tabSeq:-1,
typeid:7,
uuid:"1d3e851a-535a-4692-87c6-0b00c02a3721"
},
{
height:380,
partType:5,
typeid:19,
uuid:"c856fe14-039b-4e20-ae75-b570b9ff7ac0"
},
{
location:"430,340",
mediaOptions:14,
name:"btn_ok",
onActionMethodID:"6210f063-9a2d-4ac0-ae2e-8428b752f446",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,24",
text:"OK",
typeid:7,
uuid:"d33648d1-6451-439d-97fb-192bed0edcd2"
},
{
formIndex:10400,
location:"13,12",
mediaOptions:14,
name:"null_copy24",
size:"140,26",
styleClass:"whtlg",
tabSeq:-1,
text:"i18n:lbl.bugTracker",
transparent:true,
typeid:7,
uuid:"e24d61d8-9707-45fa-a21d-625fa4d07c28"
}
],
name:"_welcome",
navigatorID:"-1",
onShowMethodID:"91bf2c50-217d-4ec1-a750-9bc44dbf7a3b",
paperPrintScale:100,
showInMenu:true,
size:"524,380",
styleName:"svyWebCrm",
typeid:3,
uuid:"b4c86f29-9876-4d96-9e37-4903f86d6f76"