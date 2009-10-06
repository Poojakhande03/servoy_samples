borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/udm/solution_navigation",
items:[
{
formIndex:12300,
location:"658,52",
mediaOptions:14,
name:"btn_cancel",
onActionMethodID:"c331adf4-5625-428a-8cd0-1e6018aac2be",
rolloverCursor:12,
size:"70,26",
tabSeq:2,
text:"Cancel",
typeid:7,
uuid:"1960507b-0e30-4527-aa08-a6ceae3573e2"
},
{
borderType:"SpecialMatteBorder,1.0,0.0,1.0,0.0,#666666,#999999,#666666,#000000,0.0,",
formIndex:10500,
location:"0,50",
mediaOptions:14,
size:"800,31",
styleClass:"ltgrc",
tabSeq:-1,
typeid:7,
uuid:"378baf09-2909-46f7-aae9-844774f7bb8a"
},
{
formIndex:11400,
location:"20,224",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"140,21",
styleClass:"darkgrc",
tabSeq:-1,
typeid:7,
uuid:"3db35ee5-2098-4ec7-a190-98a4fefe6c7d"
},
{
formIndex:10900,
location:"330,95",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"140,21",
styleClass:"darkgrc",
tabSeq:-1,
typeid:7,
uuid:"54c81b59-b55d-4bc5-9e8e-6bd57f4d5243"
},
{
formIndex:11000,
location:"470,114",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"310,2",
styleClass:"solidgrc",
tabSeq:-1,
typeid:7,
uuid:"5b1f4db1-0978-4ed7-b040-bb5a05b14af8"
},
{
formIndex:10200,
location:"20,95",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"140,21",
styleClass:"darkgrc",
tabSeq:-1,
typeid:7,
uuid:"6eb93fbc-cc67-4568-a85d-56fb4298cfab"
},
{
formIndex:10400,
location:"28,95",
mediaOptions:14,
size:"130,20",
styleClass:"darkgrc",
tabSeq:-1,
text:"Solution Preferences",
transparent:true,
typeid:7,
uuid:"7296c3e4-a564-4c61-844c-dd2d9a88cfde"
},
{
formIndex:10800,
location:"330,119",
mediaOptions:14,
size:"100,20",
tabSeq:-1,
text:"SQL Query",
transparent:true,
typeid:7,
uuid:"832402dc-ae60-428b-8995-bfc5d2b72b40"
},
{
formIndex:12400,
location:"728,52",
mediaOptions:14,
name:"btn_save",
onActionMethodID:"3dc28fec-2e28-4d68-8579-1db5bdfa8c0d",
rolloverCursor:12,
size:"70,26",
tabSeq:1,
text:"SAVE",
typeid:7,
uuid:"838d0c2a-ec60-4c41-b415-347b34438de1"
},
{
formIndex:11600,
location:"330,223",
mediaOptions:14,
size:"100,20",
tabSeq:-1,
text:"Query Result",
transparent:true,
typeid:7,
uuid:"886cf71f-7f05-426a-aa10-48abba93e557"
},
{
dataProviderID:"globals.core_sql_sqlQuery",
displayType:1,
formIndex:11300,
location:"330,138",
name:"sqlQuery",
scrollbars:33,
size:"450,65",
tabSeq:8,
typeid:4,
uuid:"8cdb2a3f-fefe-443d-97fe-bdbba540f34d",
valuelistID:"44c92cb8-1dfb-4f20-b20a-a206c21a5480"
},
{
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:11800,
items:[
{
containsFormID:"6461e7c1-f1f4-4028-bc8a-82d41e56ad2b",
location:"80,146",
relationName:"gthis_solutionid_to_solution_preferences",
text:"lst_admin_solutionPrefs",
typeid:15,
uuid:"53ca8357-d959-4495-9bdd-0158b4e6617c"
}
],
location:"20,116",
name:"tabs_prefs",
printable:false,
size:"290,87",
tabOrientation:-1,
tabSeq:4,
typeid:16,
uuid:"8e07dbec-6665-4e4f-a757-0c87af45e424"
},
{
height:600,
partType:5,
typeid:19,
uuid:"93fc30ea-2652-4d78-907b-09ca77004c82"
},
{
formIndex:12200,
imageMediaID:"eb7d5f0e-950e-49d6-8b67-67d48159efce",
location:"655,6",
mediaOptions:14,
name:"btn_edit",
onActionMethodID:"8d9a59ef-b880-4e5b-a287-563a107c285d",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"24,24",
tabSeq:3,
toolTipText:"Edit this record",
transparent:true,
typeid:7,
uuid:"a1901498-a59d-4f4d-864d-cf6fa0323a8a"
},
{
formIndex:11500,
location:"28,224",
mediaOptions:14,
size:"130,20",
styleClass:"darkgrc",
tabSeq:-1,
text:"Value Lists",
transparent:true,
typeid:7,
uuid:"a25d1295-f278-454f-ac62-cd89bdf05f33"
},
{
formIndex:12000,
location:"667,210",
mediaOptions:14,
name:"btn_performQuery",
onActionMethodID:"1251746d-f682-4c1f-9b48-7dcf18c6480d",
size:"114,26",
tabSeq:5,
text:"Perform Query",
typeid:7,
uuid:"b54c72b9-fa7d-4c84-807f-a3ed80675239"
},
{
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:10600,
items:[
{
containsFormID:"77542fd3-8ee1-43fa-8085-0b303b6d2f3c",
location:"40,295",
text:"frm_admin_vl_choice",
typeid:15,
uuid:"eb6c3266-8b5d-4199-a7ea-b9513457f941"
}
],
location:"20,245",
name:"tabs_valueLists",
printable:false,
size:"290,336",
tabOrientation:-1,
tabSeq:6,
typeid:16,
uuid:"b83392ea-221f-46b9-bc10-ff6eb7457370"
},
{
displaysTags:true,
formIndex:10100,
location:"20,10",
mediaOptions:14,
name:"lbl_section",
size:"494,30",
styleClass:"whtlg",
tabSeq:-1,
text:"Administration",
transparent:true,
typeid:7,
uuid:"bc536d48-bd18-45b7-8830-44f5c71492d5"
},
{
formIndex:10300,
location:"160,114",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"150,2",
styleClass:"solidgrc",
tabSeq:-1,
typeid:7,
uuid:"cb41ca5f-f8ac-4f7a-a423-b93eb31a0fee"
},
{
dataProviderID:"globals.core_sql_sqlResult",
displayType:8,
editable:false,
formIndex:11700,
location:"330,242",
name:"sqlResult",
size:"450,339",
tabSeq:7,
typeid:4,
uuid:"d634df8f-63f8-48f2-949a-00b58f82077b",
valuelistID:"44c92cb8-1dfb-4f20-b20a-a206c21a5480"
},
{
formIndex:12100,
location:"638,29",
mediaOptions:14,
name:"lbl_edit",
size:"50,17",
styleClass:"whtctr",
tabSeq:-1,
text:"Edit",
transparent:true,
typeid:7,
uuid:"f7097dfb-a29f-42b9-95a2-61e480acb3fb"
},
{
formIndex:11100,
location:"338,95",
mediaOptions:14,
size:"130,20",
styleClass:"darkgrc",
tabSeq:-1,
text:"Ad Hoc SQL",
transparent:true,
typeid:7,
uuid:"f85a983f-4597-4736-8814-7a9daac1df01"
},
{
formIndex:11200,
location:"20,243",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"290,2",
styleClass:"solidgrc",
tabSeq:-1,
typeid:7,
uuid:"fc1603a5-bfe2-45da-9dee-31f201e6316b"
},
{
formIndex:10000,
location:"0,0",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"800,50",
styleClass:"darkgrc",
tabSeq:-1,
typeid:7,
uuid:"fdf3e9a7-7b7c-429b-9d54-4e54c8f30596"
}
],
name:"frm_admin",
navigatorID:"-1",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"9e49caec-dd04-4386-8c98-60d96c32b3c0",
paperPrintScale:100,
scrollbars:36,
size:"800,600",
styleName:"svyWebCrm",
typeid:3,
uuid:"f14bb9eb-3404-4f12-a059-02c4e5ea7302"