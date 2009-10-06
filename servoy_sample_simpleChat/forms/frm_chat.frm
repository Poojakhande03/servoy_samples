borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/example_data/chat_users",
items:[
{
formIndex:10200,
location:"490,84",
mediaOptions:14,
size:"289,491",
styleClass:"list",
tabSeq:-1,
text:"<html>
  <head>
    
  <\/head>
  <body>
    <b>UDP Plug-In<\/b><br>The UDP (User Datagram Protocol) Plug-In sends 
    packets of information to a specific IP address on a specific port. This 
    example file has been hard-coded to send traffic on port 2828. For this 
    solution to work correctly, you must be on a local area network - and have 
    the ability to send traffic over port 2828 (you can change the port, if 
    you want to - by modifying the global method called &quot;startUDP&quot;).<br><br><b>How 
    It Works:<\/b> The plug-in is hard-coded to look for a global field called 
    &quot;received&quot; - where it will dump the results of a received packet. You 
    don't have to send just text - you can send whatever kind of data you 
    want. Sending is very simple - check out the method &quot;send_msg&quot; on the form 
    &quot;frm_chat&quot;.<br><br>You can view the methods by choosing &quot;Editor&quot; 
    from the &quot;Tools&quot; menu.<br><br><b>Technical Note:<\/b> You can't 
    work with the UDP plug-in over the Internet (at least not easily) - so 
    this solution doesn't work in Web Client. You would have to figure out how 
    to do some NAT (Network Address Translation) work to get to an individual 
    machine behind router.<br><br>You can talk to anyone else on the list at 
    any time by typing one or more characters of their name, followed by a 
    colon (:) then the message.<br><br>For example, if you were taking to 
    Jill, but wanted to say something to Tim real quick, you could type: 
    T:what time is lunch and Tim would get the message. It IS case sensitive.
  <\/body>
<\/html>",
transparent:true,
typeid:7,
uuid:"21cad4ad-b5d6-46fe-a0d3-2e0ecfd3fe87",
verticalAlignment:1
},
{
dataProviderID:"globals.beepOnNewMessage",
displayType:4,
formIndex:10800,
location:"235,85",
size:"230,19",
styleClass:"noborder",
tabSeq:-2,
text:"Beep when new message received",
transparent:true,
typeid:4,
uuid:"2fdb7298-aa8a-41d9-8da6-9f26e7f1e197"
},
{
height:600,
partType:5,
typeid:19,
uuid:"65adcabf-61be-4c85-b999-34c2db3ab32f"
},
{
dataProviderID:"globals.received",
displayType:8,
editable:false,
formIndex:10600,
location:"20,106",
name:"fld_chatText",
scrollbars:33,
size:"450,437",
tabSeq:2,
typeid:4,
uuid:"826c44de-24d9-453c-b1c9-dc914ac432dd"
},
{
formIndex:10100,
location:"23,10",
mediaOptions:14,
name:"lbl_section",
size:"420,30",
styleClass:"whtlg",
tabSeq:-1,
text:"UDP Plug-In Example",
transparent:true,
typeid:7,
uuid:"89bc86db-a9d4-4566-8992-a8fe3087173d"
},
{
displaysTags:true,
formIndex:10500,
location:"28,85",
mediaOptions:14,
size:"200,20",
styleClass:"darkgrc",
tabSeq:-1,
text:"Discussion %%globals.chatToUserNameDisplay%%",
transparent:true,
typeid:7,
uuid:"9366988b-d320-439d-9bf6-a750e23ace4e"
},
{
dataProviderID:"globals.chatMsg",
formIndex:10700,
location:"20,556",
name:"fld_message",
onDataChangeMethodID:"171de8ad-dc84-4f20-8899-dbb15a57a707",
scrollbars:33,
size:"450,22",
tabSeq:1,
typeid:4,
uuid:"95c9931d-7469-4847-9af6-5124e17da0ee"
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
uuid:"a5d648c4-ce9d-4eb9-ba7e-b338901a8312"
},
{
formIndex:10400,
location:"160,104",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"310,2",
styleClass:"solidgrc",
tabSeq:-1,
typeid:7,
uuid:"c3e9886d-bc74-4401-8bec-4da3045c77c7"
},
{
formIndex:10300,
location:"20,85",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"210,21",
styleClass:"darkgrc",
tabSeq:-1,
typeid:7,
uuid:"f39f4337-1f38-440c-af4d-b7facf9e41de"
}
],
name:"frm_chat",
navigatorID:"-1",
onShowMethodID:"-1",
paperPrintScale:100,
scrollbars:36,
size:"800,600",
styleName:"svyWebCrm",
typeid:3,
uuid:"6a71abed-421d-43d3-8b4b-46500309a379"