/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"529e99e1-4df8-441a-975f-bd01515e7b3c",variableType:12}
 */
var cheboxes = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"356a9d6f-67c3-444e-93e3-57d906b385d4",variableType:12}
 */
var curStyle = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7a997421-56ee-4dca-bd10-720985f6997a",variableType:12}
 */
var fieldData = 'Field Data';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7fecc22d-c55d-49c3-9717-e50cd2d10791",variableType:12}
 */
var formName = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"406c2a24-a589-4cb8-a263-0d5f8eef582f",variableType:12}
 */
var radios = '';

/**
 * @properties={typeid:24,uuid:"4d4577cc-4679-47e0-ab31-39369fb4b5c3"}
 */
function btn_next()
{
	formName = globals.getNextForm(currentcontroller.getName(),'next')
	globals.curStyle = formName
	globals.goForm()
}

/**
 * @properties={typeid:24,uuid:"f0558988-f709-43da-9499-70d399aed360"}
 */
function btn_prev()
{
	formName = globals.getNextForm(currentcontroller.getName(),'prev')
	globals.curStyle = formName;
	globals.goForm()
}

/**
 * @param {String} arg0 //current formname
 * 
 * @param {String} arg1 //direction
 * 
 * @properties={typeid:24,uuid:"de81118a-6501-49cd-bd9a-6e6a65d3b2bc"}
 */
function getNextForm(arg0, arg1)
{
	var curForm = arg0;
	var direction = arg1;
	var myForms = forms.allnames.sort()
	for (var i=0; i<myForms.length; i++)
	{
		if(myForms[i] == curForm)
		{
			if(direction == 'next')
			{
				if(i < myForms.length-1)
				{
					return myForms[i+1]
				}
				else
				{
					return myForms[0]
				}
			}
			else
			{
				if(i == 0)
				{
					return myForms[myForms.length-1]
				}
				else
				{
					return myForms[i-1]
				}
			}
		}
	}
	return false;
}

/**
 * @properties={typeid:24,uuid:"12af6f9b-d7d5-4672-be06-527502834d62"}
 */
function goForm()
{
	var frmName = globals.curStyle
	frmName = utils.stringReplace(frmName,'\r','')
	forms[frmName].controller.show()
	globals.formName = 'svy_'+ frmName
}

/**
 * @properties={typeid:24,uuid:"6f250c67-38a1-47bf-8693-b175204aadfe"}
 */
function onShow()
{
}

/**
 * @properties={typeid:24,uuid:"0b33b3a4-0a27-4d0e-b66d-f179d59671b4"}
 */
function solutionOpen()
{
	globals.formName = "svy_Autumn"
	globals.curStyle = 'Autumn'
}
