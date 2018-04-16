   <script>
	  var map;
	  var marker;
	  var current;
	  var chicago = {lat: 41.887855, lng: -87.630347};
      var blacksburg = {lat: 37.235761, lng: -80.414351};
      var huntington = {lat: 40.823368, lng: -73.396623};
      var saigon = {lat: 10.854488, lng: 106.626527};
	  
	  var places=["Chicago","Blacksburg","Huntington","Saigon"];
      function initMap() {
          current = {lat: 41.887855, lng: -87.630347};
		  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: current
        });
          marker = new google.maps.Marker({
          position: current,
          map: map
        });
      }
	  
	  function goto(location, title){
            map.panTo(location);
            map.setZoom(12);
			marker = new google.maps.Marker({
          position: location,
          map: map
        });
		if (title==places[0]){
			document.getElementById("demo").innerHTML = "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. I have lived here since 2017 for attending Illionis Tech.";
			}
			else if (title==places[1]){
			document.getElementById("demo").innerHTML = "Blacksburg is an incorporated town in Montgomery County, Virginia, United States. I have been here for 2 years attending Virginia Tech in 2015-2017.";
			}
			else if (title==places[2]){
			document.getElementById("demo").innerHTML = "South Huntington is a hamlet and census-designated place within the Town of Huntington in Suffolk County, New York, United States. I have been here for 2 years attending St.Anthony Hish School in 2013-2015.";
			}
			else if (title==places[3]){
			document.getElementById("demo").innerHTML = "Saigon is a city in southern Vietnam where I was born at aand I have spent 16 years here.";
			}
			else
			{
			document.getElementById("demo").innerHTML = null;
			}
		}
		
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcGgYMjWSomCfJHGkYRKGw7J_IswjAPrI&callback=initMap">
    </script>