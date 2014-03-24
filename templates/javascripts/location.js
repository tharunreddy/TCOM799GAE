function getLocation()
{
	if (navigator.geolocation)
  	{
  		navigator.geolocation.getCurrentPosition(showPosition);
  	}
	else
  	{ 
  		document.getElementById("map-canvas").innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position)
{	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);	
	var mapOptions = {center: pos , zoom: 8 };
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);	
	var marker = new google.maps.Marker({
		position: pos,
		map: map
	});
	document.getElementById("html.net").style.display = 'none';
	//document.getElementById("html.net").innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

//google.maps.event.addDomListener(window, 'load', getLocation);