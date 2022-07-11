
// TOKEN AND JPDB API URL
var conn_token = "90938692|-31949287340685910|90939628";
var db = "Employee";
var rel = "emp-rel";
var user_rel = "user_rel"
var baseUrl = "http://api.login2explore.com:5577";
var iml_url = "/api/iml";
var irl_url = "/api/irl";


function checksession(){

	jQuery.ajaxSetup({async: false});
	var sessionStatus = isJpdbSessionTokenExists(conn_token, db, user_rel);
	jQuery.ajaxSetup({async: true});


	if(sessionStatus == 200)
	{
	
		if(myStatus == "out")
		{
			window.location.href = "home.html";
		}

		else
		{
			
			return ;
		}
	}

	else if(sessionStatus == 400)
	{
		if(myStatus == "in")
		{
			window.location.href = "login.html";
		}

		else
		{
			return;
		}
	}

	else
	{
		alert("Something went wrong!!!");
		return;
	}

}

function deleteSession()
{	
	var removesessionStatus = removeSessionTokenFromJPDB(conn_token, db, user_rel);
	
	if( removesessionStatus == 200)
	{
		alert("SuccesFully removed Session Token");
		window.location.href = 'login.html'
	}
	else
	{
		alert("Something went wrong!!!");
		return ; 
	}

}