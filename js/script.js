// Функции в коде
colorMenuAct();
infoTeamASL();


// Глобальные* переменные
var tag, attr;


// Глобальные* функции:
// *Функция поиска нужного tag/id/class, а так же их атрибутов
function globAttr(a,b)
{
	/*
	*   a - tag/id/class
	*   b - атрибуты
	*/
	if(a != null && b != null)
		return document.querySelector(a).getAttribute(b);
	else if(a != null && b == null)
		return document.querySelector(a);
	else
		console.log("Ошибка!!.\n Не пришли переменные!"); 
}

// *Функция измененеия слова
function removeEl(word)
{
	// word - изменяемое слово
	var modifWord = word.replace(/0/g, "");
	return modifWord;
}


// $Работа с контентной частью:
// $Функция окрашивает пункт меню в соотвествии на какой вкладке находится user
function colorMenuAct()
{
	var indexPage, arrlinksid, styleMenu;

	attr = "id";
	tag = "body";
	indexPage = globAttr(tag,attr);
	indexPage = removeEl(indexPage) - 1;

	arrlinksid = new Array("#new","#med","#ab","#wik");

	styleMenu =  globAttr(arrlinksid[indexPage]).setAttribute("style", "background-color: #464E6E;");
}

// $Функция добваления информации об команде проекта
function infoTeamASL()
{
	var text;
	var requestURL = "js/json/infoUsers.json";

	var userId, userLinks, userPowers;
	var	sizeArrAdmin;
	var userId, userName, userImage, userAltImg, userSecretId;

    var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var jsonUsers = request.response;
	  dataUsers(jsonUsers);
	  //deduceInfoUser(jsonUsers);
    }

    function dataUsers(jsonObj) {
    	var creatBlockUsers, i;

    	sizeArrAdmin = jsonObj['Admins'].length;
    	tag = ".attach__block_users";
    	creatBlockUsers = globAttr(tag);

    	for(i = 0; i < sizeArrAdmin; i++){
	    	userId = jsonObj['Admins'][i]['id'];
	    	userName = jsonObj['Admins'][i]['name'];
	    	userImage = jsonObj['Admins'][i]['imager'];
	    	userAltImg = jsonObj['Admins'][i]['alt_imager'];
			userSecretId = jsonObj['Admins'][i]['secretIdentity'];
			
			userLinks = jsonObj['Admins'][i]['links'];
	    	userPowers = jsonObj['Admins'][i]['powers'];
			
	   		//console.log(userId, userName, userImage, userAltImg, userSecretId);
			text = '<div class="block__user" onclick="showInfoUser('+userId+');" id='+userId+'><div class="imager__us"><img src='+userImage+' alt='+userAltImg+'><div class="username">'+userName+'</div><div class="nikname">'+userSecretId+'</div></div></div>';
			creatBlockUsers.innerHTML += text;
		}
	}
}
	function showInfoUser(userid)
	{
		var arre = new Array(111,2222,3,444,666,7);
		alert("Всё робит!  ID = "+userid + "   Arr: "+ arre[userid]);
	}
	function hiddenInfoUser() {
		
	
	}
/*
listUserId += userId;
listUserLinks += userLinks;
listUserPowers += userPowers;
*/
