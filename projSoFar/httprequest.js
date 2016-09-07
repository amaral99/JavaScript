// synchronous moade halts all javascript code form executing until a response is received from the server

function HttpRequest(sUrl, fpCallback)
{
  this.request = this.createXmlHttpRequest();
  this.request.open("GET", sUrl, true);

  var tempRequest = this.request;
  function request_readystatechange()
  {
	if (tempRequest.readyState == 4)
 	{
	  if (tempRequest.status == 200)
	  {
	 	fpCallback(tempRequest.responseText);
	  }
	  else
	  {
		alert("an error occorred trying to contact the server.");
	  }
	}
  }

  this.request.onreadystatechange = request_readystatechange;
}

HttpRequest.prototype.createXmlHttpRequest = function ()
{
  if (window.XMLHttpRequest());
  {
  var oHttp = new XMLHttpRequest();
  return oHttp;
  }
  else if (window.ActiveXObject)
  {
  	var versions = 
	[
	  "MSXML2.XmlHttp.6.0",
	  "MSXML2.XmlHttp.3.0"
  	];
	
	for (var i = 0; i < version.length; i++)
	{
	  try
	  {
		var oHttp = new ActiveXObject(version[i]);
		return oHttp;
	  }
	  catch (error)
	  {
		//do nothing here
	  }
	}
  }
  return null;
}

HttpRequest.prototype.sent = function ()
{
  this.request.sent(null);
}
}

