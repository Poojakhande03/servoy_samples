dataSource:"db:/example_data/orders",
items:[
{
background:"#ffffff",
borderType:"LineBorder,1,#00ccff",
formIndex:12400,
location:"150,350",
mediaOptions:14,
name:"rate",
size:"380,20",
tabSeq:-1,
typeid:7,
uuid:"001f332d-2e99-4f80-9cff-f956ba196511"
},
{
background:"#ffffff",
borderType:"LineBorder,1,#00ccff",
formIndex:12500,
location:"150,380",
mediaOptions:14,
name:"rest_balance",
size:"380,20",
tabSeq:-1,
typeid:7,
uuid:"03a18faa-d2d6-494f-a05f-9e2174c54cff"
},
{
formIndex:10400,
horizontalAlignment:4,
location:"10,100",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"Loan date:",
transparent:true,
typeid:7,
uuid:"068b95cd-4b08-46c2-a701-bdce743c8980"
},
{
dataProviderID:"globals.payment_period",
displayType:2,
editable:false,
formIndex:10900,
horizontalAlignment:2,
location:"150,190",
onDataChangeMethodID:"d1877d6b-e59d-4870-8055-079ee1549de5",
size:"170,20",
typeid:4,
uuid:"081601fe-3303-4ac1-9f65-52e9262a79bc",
valuelistID:"ab888ba2-7c63-4155-88b0-70b3022e4539"
},
{
formIndex:11200,
horizontalAlignment:4,
location:"10,220",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"Payment start date:",
transparent:true,
typeid:7,
uuid:"0a5c76ec-1f52-42b4-945e-7746a334ac74"
},
{
formIndex:11700,
horizontalAlignment:2,
location:"330,190",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"(eg monthly)",
transparent:true,
typeid:7,
uuid:"1622e579-6b08-41f5-893e-e66c7459fa9f"
},
{
formIndex:10200,
horizontalAlignment:4,
location:"10,70",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"Loan amount:",
transparent:true,
typeid:7,
uuid:"31735d07-1456-46ef-8716-e370d94b5443"
},
{
formIndex:11300,
horizontalAlignment:2,
location:"330,70",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"(eg 2000)",
transparent:true,
typeid:7,
uuid:"327c562f-91f2-4453-a0cc-ff2841775770"
},
{
formIndex:10600,
horizontalAlignment:4,
location:"10,130",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"Payment amount:",
transparent:true,
typeid:7,
uuid:"3c20aa61-6762-4a79-8fa0-597b49d0a5ae"
},
{
background:"#ffffff",
borderType:"LineBorder,1,#00ccff",
formIndex:12600,
location:"150,410",
mediaOptions:14,
name:"error",
size:"380,20",
tabSeq:-1,
typeid:7,
uuid:"4d2317b1-b449-47e3-a458-3ec4fb76159a"
},
{
background:"#ffffff",
borderType:"LineBorder,1,#00ccff",
dataProviderID:"globals.amortization_schedule",
displayType:8,
editable:false,
formIndex:12700,
horizontalAlignment:0,
location:"40,440",
size:"640,280",
transparent:true,
typeid:4,
uuid:"5fe0fcae-b1bd-476c-b595-4910e1bc4765"
},
{
dataProviderID:"globals.payment_number",
formIndex:10700,
horizontalAlignment:4,
location:"150,160",
onDataChangeMethodID:"d1877d6b-e59d-4870-8055-079ee1549de5",
selectOnEnter:true,
size:"170,20",
typeid:4,
uuid:"61d61471-6280-48c7-b9f2-b25bb2fdb177"
},
{
borderType:"SpecialMatteBorder,0.0,0.0,1.0,0.0,#000000,#000000,#000000,#000000,0.0,",
fontType:"Tahoma,0,24",
formIndex:12000,
location:"10,290",
mediaOptions:14,
size:"690,30",
tabSeq:-1,
text:"2) Amortization schedule:",
transparent:true,
typeid:7,
uuid:"644adf8b-9dd0-428e-a956-e3726bc1de80"
},
{
dataProviderID:"globals.loan_amount",
formIndex:10100,
horizontalAlignment:4,
location:"150,70",
onDataChangeMethodID:"d1877d6b-e59d-4870-8055-079ee1549de5",
selectOnEnter:true,
size:"170,20",
typeid:4,
uuid:"851ef64e-e2de-41e9-b5a8-1e5e4a90bac5"
},
{
formIndex:11600,
horizontalAlignment:2,
location:"330,160",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"(eg 5)",
transparent:true,
typeid:7,
uuid:"89a29019-8831-4abc-9ec7-d7c11b6ec5e2"
},
{
dataProviderID:"globals.payment_start_date",
displayType:5,
formIndex:11100,
location:"150,220",
onDataChangeMethodID:"d1877d6b-e59d-4870-8055-079ee1549de5",
selectOnEnter:true,
size:"170,20",
typeid:4,
uuid:"9c1bf62c-09d8-4248-a953-242d8b3bf371"
},
{
formIndex:12300,
horizontalAlignment:4,
location:"60,380",
mediaOptions:14,
size:"80,20",
tabSeq:-1,
text:"rest balance:",
transparent:true,
typeid:7,
uuid:"a045dc85-ecf0-440d-a0a0-87d613f2e3c5"
},
{
formIndex:11400,
horizontalAlignment:2,
location:"330,100",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"(eg 28 feb 2004)",
transparent:true,
typeid:7,
uuid:"ab1a4a2c-9791-4575-b552-78dfcd164bef"
},
{
background:"#ffffff",
foreground:"#ffffff",
formIndex:10000,
lineSize:1,
location:"40,440",
shapeType:1,
size:"640,280",
typeid:21,
uuid:"ab8a30e3-0aba-45a0-889e-d7573e2ccfac"
},
{
formIndex:12200,
horizontalAlignment:4,
location:"60,410",
mediaOptions:14,
size:"80,20",
tabSeq:-1,
text:"error:",
transparent:true,
typeid:7,
uuid:"ada352a3-08d3-4235-ac27-0ecff9120989"
},
{
dataProviderID:"globals.payment_amount",
formIndex:10500,
horizontalAlignment:4,
location:"150,130",
onDataChangeMethodID:"d1877d6b-e59d-4870-8055-079ee1549de5",
selectOnEnter:true,
size:"170,20",
typeid:4,
uuid:"b30c8d47-fa5d-4709-8d88-874886b2829c"
},
{
formIndex:12100,
horizontalAlignment:4,
location:"100,350",
mediaOptions:14,
size:"40,20",
tabSeq:-1,
text:"rate:",
transparent:true,
typeid:7,
uuid:"b4759010-169f-4715-b749-5929dd270944"
},
{
formIndex:11800,
horizontalAlignment:2,
location:"330,220",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"(eg 1 may 2005)",
transparent:true,
typeid:7,
uuid:"b96df9fc-811c-4fec-b743-5c5de389c150"
},
{
formIndex:11000,
horizontalAlignment:4,
location:"10,190",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"Payment frequency:",
transparent:true,
typeid:7,
uuid:"c020161a-1760-4ab4-b62b-53751be16975"
},
{
dataProviderID:"globals.loan_date",
displayType:5,
formIndex:10300,
location:"150,100",
onDataChangeMethodID:"d1877d6b-e59d-4870-8055-079ee1549de5",
selectOnEnter:true,
size:"170,20",
typeid:4,
uuid:"c76d1277-376c-42b3-a0e1-43369c6fc759"
},
{
formIndex:11500,
horizontalAlignment:2,
location:"330,130",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"(eg 500)",
transparent:true,
typeid:7,
uuid:"d1ae4eb5-f0a7-4b65-8683-9b42df819bc2"
},
{
background:"#c0c0c0",
borderType:"SpecialMatteBorder,0.0,0.0,1.0,0.0,#000000,#000000,#000000,#000000,0.0,",
fontType:"Tahoma,0,24",
formIndex:11900,
location:"10,20",
mediaOptions:14,
size:"689,30",
tabSeq:-1,
text:"1) Amortization data:",
transparent:true,
typeid:7,
uuid:"d82bc002-a249-459d-b130-e6ae9602d4eb"
},
{
formIndex:10800,
horizontalAlignment:4,
location:"10,160",
mediaOptions:14,
size:"130,20",
tabSeq:-1,
text:"Number of payments:",
transparent:true,
typeid:7,
uuid:"d878f68f-5013-4a9a-af33-83b3eaf338d3"
},
{
background:"#f9feff",
height:740,
partType:5,
typeid:19,
uuid:"e9bf40b5-6b9c-4905-a8c3-8d915c05e4c5"
}
],
name:"amortization_calculation",
navigatorID:"-1",
paperPrintScale:100,
showInMenu:true,
size:"700,740",
styleName:"svyWebCrm",
typeid:3,
uuid:"100f7ec2-16ff-409a-b258-360a7bda4710"