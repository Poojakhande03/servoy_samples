dataSource:"db:/example_data/book_nodes",
items:[
{
formIndex:10500,
items:[
{
containsFormID:"029722b2-d475-4ee5-8415-7654568cd978",
location:"40,95",
text:"book_treeview",
typeid:15,
uuid:"a7678555-b0d3-4858-8277-12a016a17fa6"
}
],
location:"0,47",
name:"treeview",
printable:false,
size:"200,493",
typeid:16,
uuid:"0c2d420d-79cb-4a84-9c0a-f7648cd868a9"
},
{
fontType:"Tahoma,1,24",
foreground:"#ffffff",
formIndex:10100,
horizontalAlignment:2,
location:"15,7",
mediaOptions:14,
name:"lbl_title",
size:"570,32",
tabSeq:-1,
text:"Example - Resizeable Panes & Tree Control",
transparent:true,
typeid:7,
uuid:"3140f8f6-7a35-4acf-9f0b-eb5fe478fdb2"
},
{
beanClassName:"javax.swing.JSplitPane",
beanXML:"<?xml version=\"1.0\" encoding=\"UTF-8\"?> 
<java version=\"1.6.0_02\" class=\"java.beans.XMLDecoder\"> 
 <object class=\"javax.swing.JSplitPane\"> 
  <int>1<\/int> 
  <void property=\"size\"> 
   <object class=\"java.awt.Dimension\"> 
    <int>80<\/int> 
    <int>80<\/int> 
   <\/object> 
  <\/void> 
  <void property=\"border\"> 
   <object class=\"javax.swing.border.EmptyBorder\"> 
    <object class=\"java.awt.Insets\"> 
     <int>0<\/int> 
     <int>0<\/int> 
     <int>0<\/int> 
     <int>0<\/int> 
    <\/object> 
   <\/object> 
  <\/void> 
  <void property=\"dividerLocation\"> 
   <int>0<\/int> 
  <\/void> 
  <void property=\"name\"> 
   <string>bean_625<\/string> 
  <\/void> 
 <\/object> 
<\/java> 
",
formIndex:10400,
location:"675,305",
name:"bean_625",
size:"80,80",
typeid:12,
usesUI:true,
uuid:"356866ff-8dc4-4cb4-92cd-bbb0f9f08b9a"
},
{
formIndex:10900,
items:[
{
containsFormID:"ef346da0-26bc-4dbe-8dd9-661ac940d054",
location:"240,65",
relationName:"book_nodes_to_book_text",
text:"book_text",
typeid:15,
uuid:"541a0606-ba6d-4e27-9bd9-52c3230b2660"
},
{
containsFormID:"62729925-7edc-4afc-87b9-7e1c10f5fe1f",
location:"310,77",
relationName:"book_nodes_to_book_text",
text:"book_text_web",
typeid:15,
uuid:"9cace5d4-1fec-4360-82d1-905c52b691e2"
}
],
location:"202,47",
name:"text",
printable:false,
size:"402,365",
tabOrientation:-1,
typeid:16,
uuid:"63541f5e-7866-48cc-b38a-6062cf096e2b"
},
{
background:"#666666",
height:47,
partType:1,
typeid:19,
uuid:"8bb01e61-bb21-4a62-9a51-4ea6fc68b103"
},
{
formIndex:10700,
items:[
{
containsFormID:"580f9b6c-d372-451d-a08e-0368923cc088",
location:"279,462",
relationName:"book_nodes_to_book_text",
text:"book_notes",
typeid:15,
uuid:"626523da-0a6f-49d3-92bb-0683c3d6d8d1"
}
],
location:"202,411",
name:"notes",
printable:false,
size:"698,129",
typeid:16,
uuid:"90667ee6-31ca-44d7-a51e-3ed47eee8733"
},
{
height:540,
partType:5,
typeid:19,
uuid:"ba378125-5b2c-430a-b37e-69be0063bb15"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:10200,
horizontalAlignment:4,
location:"0,43",
mediaOptions:14,
size:"900,4",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"cd6b17d1-cba7-4561-8dd2-a527b7b8182b"
},
{
formIndex:11200,
items:[
{
containsFormID:"9396d5f7-61e5-4d46-8f10-df03d7c44ae7",
location:"650,67",
relationName:"book_nodes_to_book_text",
text:"book_comment",
typeid:15,
uuid:"babc5984-72a0-4c4a-a0fe-9f4acfcd6a9b"
},
{
containsFormID:"b04b0208-e3da-4904-8d24-18f16c47c650",
location:"725,77",
relationName:"book_nodes_to_book_text",
text:"book_comment_web",
typeid:15,
uuid:"f0894ab8-f45f-4e89-868a-943bef1896b6"
}
],
location:"606,47",
name:"comment",
printable:false,
size:"291,365",
tabOrientation:-1,
typeid:16,
uuid:"d39d4242-9ca0-4611-8336-304a2080a2fc"
},
{
anchors:15,
beanClassName:"javax.swing.JSplitPane",
beanXML:"<?xml version=\"1.0\" encoding=\"UTF-8\"?> 
<java version=\"1.6.0_02\" class=\"java.beans.XMLDecoder\"> 
 <object class=\"javax.swing.JSplitPane\"> 
  <int>1<\/int> 
  <void property=\"size\"> 
   <object class=\"java.awt.Dimension\"> 
    <int>899<\/int> 
    <int>493<\/int> 
   <\/object> 
  <\/void> 
  <void property=\"border\"> 
   <object class=\"javax.swing.border.EmptyBorder\"> 
    <object class=\"java.awt.Insets\"> 
     <int>0<\/int> 
     <int>0<\/int> 
     <int>0<\/int> 
     <int>0<\/int> 
    <\/object> 
   <\/object> 
  <\/void> 
  <void property=\"dividerLocation\"> 
   <int>0<\/int> 
  <\/void> 
  <void property=\"name\"> 
   <string>bean_882<\/string> 
  <\/void> 
 <\/object> 
<\/java> 
",
formIndex:10000,
location:"1,47",
name:"bean_882",
size:"899,493",
typeid:12,
usesUI:true,
uuid:"daac8171-73ba-495c-a4e5-2be8d7e071d5"
},
{
beanClassName:"javax.swing.JSplitPane",
beanXML:"<?xml version=\"1.0\" encoding=\"UTF-8\"?> 
<java version=\"1.6.0_02\" class=\"java.beans.XMLDecoder\"> 
 <object class=\"javax.swing.JSplitPane\"> 
  <int>1<\/int> 
  <void property=\"size\"> 
   <object class=\"java.awt.Dimension\"> 
    <int>80<\/int> 
    <int>80<\/int> 
   <\/object> 
  <\/void> 
  <void property=\"border\"> 
   <object class=\"javax.swing.border.EmptyBorder\"> 
    <object class=\"java.awt.Insets\"> 
     <int>0<\/int> 
     <int>0<\/int> 
     <int>0<\/int> 
     <int>0<\/int> 
    <\/object> 
   <\/object> 
  <\/void> 
  <void property=\"dividerLocation\"> 
   <int>0<\/int> 
  <\/void> 
  <void property=\"name\"> 
   <string>bean_667<\/string> 
  <\/void> 
 <\/object> 
<\/java> 
",
formIndex:10300,
location:"765,305",
name:"bean_667",
size:"80,80",
typeid:12,
usesUI:true,
uuid:"f9fefe00-d293-4671-8eb8-58fd0dec4207"
}
],
name:"main",
navigatorID:"-1",
onLoadMethodID:"e6b63cd7-e894-43be-84da-5a867091d89c",
paperPrintScale:100,
showInMenu:true,
size:"900,540",
styleName:"svyWebCrm",
titleText:"Example",
typeid:3,
uuid:"379d3709-9da3-4521-9d0a-83c7915a089e",
view:5