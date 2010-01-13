borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/udm/companies",
initialSort:"company_id asc",
items:[
{
formIndex:10100,
location:"1,2",
mediaOptions:14,
name:"lbl_search",
size:"50,17",
styleClass:"whtctr",
tabSeq:-1,
text:"Search",
transparent:true,
typeid:7,
uuid:"0dca4d93-342a-4eaa-9d74-5fe8b1f065e1"
},
{
height:599,
partType:5,
typeid:19,
uuid:"1a2b9863-f061-4b3e-bb04-a5566a5906e3"
},
{
anchors:12,
borderType:"EmptyBorder,0,0,0,0",
formIndex:10200,
items:[
{
containsFormID:"38838bd1-3299-4b2d-aea3-1a74320875b9",
location:"0,0",
relationName:"gthissolutionid_to_solution_navigation",
text:"lst_solution_navigation",
typeid:15,
uuid:"c2d4a55a-726a-45e3-85da-91fa8c5f9a7b"
}
],
location:"0,399",
name:"tabs_solNav",
printable:false,
size:"192,200",
tabOrientation:-1,
typeid:16,
uuid:"90bb5bdf-1dba-4502-a10c-c6e2840bf4a1"
},
{
background:"#ebebeb",
borderType:"LineBorder,1,#969696",
dataProviderID:"globals.nav_search",
formIndex:11000,
location:"8,20",
name:"fld_search",
onActionMethodID:"a0c21699-fea8-4445-81e4-8494edb62c56",
size:"146,22",
toolTipText:"Enter search critiera and click the magnifying glass icon or press enter",
typeid:4,
uuid:"98fab461-c7b3-4628-964d-2233e9fb1eca"
},
{
formIndex:10000,
horizontalAlignment:0,
imageMediaID:"44ba5f7e-9ebd-4d7d-b556-244e37c83ede",
location:"159,18",
mediaOptions:1,
name:"btn_search",
onActionMethodID:"a0c21699-fea8-4445-81e4-8494edb62c56",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"24,24",
toolTipText:"Perform search",
transparent:true,
typeid:7,
uuid:"b193b7f3-3da3-49b7-8099-12ab8f9c72a8",
verticalAlignment:0
},
{
anchors:13,
borderType:"EmptyBorder,0,0,0,0",
formIndex:10400,
items:[
{
containsFormID:"c737db43-df79-40f2-9370-e1535cb9df46",
location:"0,100",
text:"lst_company",
typeid:15,
uuid:"381a0c38-8694-4d15-8e20-bd43fe4a7026"
},
{
containsFormID:"02ed4c6e-5dea-4107-8124-1c2345d0b97e",
location:"110,271",
text:"lst_admin",
typeid:15,
uuid:"7175e873-40d7-4e3f-a1a4-8e00b9e384b8"
},
{
containsFormID:"053292c1-b138-440d-8549-7c6e1d029b2c",
location:"82,241",
text:"lst_products",
typeid:15,
uuid:"777fe152-b8f7-4e85-9f0c-e5fc57e82288"
},
{
containsFormID:"3e6ad69c-398e-4603-8df3-1fd93a606f2b",
location:"32,181",
text:"lst_contact",
typeid:15,
uuid:"d8584b5e-e6db-4ff1-8183-dbff8e783616"
},
{
containsFormID:"b3621b3b-fd54-4882-a5bf-4b3cc8100890",
location:"62,211",
text:"lst_orders",
typeid:15,
uuid:"f5cf74b9-e3e3-459c-a1e1-fca781f241b8"
}
],
location:"0,51",
name:"tabs_recList",
printable:false,
size:"192,348",
tabOrientation:-1,
typeid:16,
uuid:"bee54e54-2c0c-4cdc-a424-84f85c773800"
},
{
background:"#999999",
height:50,
partType:2,
typeid:19,
uuid:"c2ae1a95-2418-407e-91cf-ca2af91a6d2c"
}
],
name:"frm_nav_main",
navigatorID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
paperPrintScale:100,
rowBGColorCalculation:"bgRowColor_ltgrey",
scrollbars:36,
size:"192,599",
styleName:"svyWebCrm",
typeid:3,
uuid:"e6a4c8a0-9d4f-4100-be67-2d2b63e66ae3",
view:5