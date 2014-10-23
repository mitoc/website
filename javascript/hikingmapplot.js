
//<![CDATA[

var g_hikingMapMarkers = [];
var g_hikingMapHTMLS = [];
//var infoWindow = new google.maps.InfoWindow();
//var g_map;


// Change these parameters to customize map
var param_titleColumn = "name";
var param_typeColumn = "type";
var param_difficultyColumn = "difficulty";
var param_wsColumn = "ws";
var param_perksColumn = "perks";
var param_winterColumn = "winter";
var param_descriptionColumn = "description";
var param_distanceColumn = "distance";
var param_elevationColumn = "elevationgain";
var param_cabinColumn = "cabin";
var param_parkColumn = "parking";
var param_summitColumn = "summit";
var param_album1Column = "album1";
var param_album2Column = "album2";
var param_album3Column = "album3";
var param_authorColumn = "author";
var param_rankColumn = "";
var param_iconType = "green";
var param_iconOverType = "orange";

/**
 * Function called when marker on the map is clicked.
 * Opens an info window (bubble) above the marker.
 * @param {Number} markerNum Number of marker in global array
 */
function cm_hikingMarkerClicked(markerNum) {
	infoWindow.setContent(g_hikingMapHTMLS[markerNum]);
	infoWindow.open(g_map, g_hikingMapMarkers[markerNum]);
}

/**
 * Function that sorts 2 worksheet rows from JSON feed
 * based on their rank column. Only called if column is defined.
 * @param {rowA} Object Represents row in JSON feed
 * @param {rowB} Object Represents row in JSON feed
 * @return {Number} Difference between row values
 */
function cm_hikingSortRows(rowA, rowB) {
	var difficulty_hash = {
		"Easy" : 0,
		"Easy-Moderate" : 1,
		"Moderate" : 2,
		"Moderate-Hard": 3,
		"Hard": 4,
		"Very-Hard": 5 }
	var rowAValue = difficulty_hash[rowA["gsx$" + param_difficultyColumn].$t];
	var rowBValue = difficulty_hash[rowB["gsx$" + param_difficultyColumn].$t];

	return rowAValue - rowBValue;
}

/** 
 * Called when JSON is loaded. Creates sidebar if param_sideBar is true.
 * Sorts rows if param_rankColumn is valid column. Iterates through worksheet rows, 
 * creating marker and sidebar entries for each row.
 * @param {JSON} json Worksheet feed
 */       
function cm_loadHikingMapJSON(json) {
	g_hikingMapMarkers = [];
	g_hikingMapHTMLS = [];

	var sidebarDIV = document.createElement("div");
	var mainSidebar = sidebarDIV;
	document.getElementById("sidebar").appendChild(sidebarDIV);
	var bounds = new google.maps.LatLngBounds();

	json.feed.entry.sort(cm_hikingSortRows);
	var sidebarEntries = {}

	for (var i = 0; i < json.feed.entry.length; i++) {
		var entry = json.feed.entry[i];
		if(entry["gsx$" + param_parkColumn] && entry["gsx$" + param_parkColumn].$t.length > 0) {
			var summit = entry["gsx$" + param_summitColumn].$t;
			var latlng = summit.split(",")
			var lat = parseFloat(latlng[0]);
			var lng = parseFloat(latlng[1]);
			if(entry["gsx$" + param_parkColumn].$t.length > 0)
			{
				var parklatlng = entry["gsx$" + param_parkColumn].$t.split(",")
				var parklat = parseFloat(parklatlng[0]);
				var parklng = parseFloat(parklatlng[1]);
			}
			var difficulty = entry["gsx$" + param_difficultyColumn].$t;
			var elevation = entry["gsx$" + param_elevationColumn].$t
			var distance = entry["gsx$" + param_distanceColumn].$t
			var cabin = entry["gsx$" + param_cabinColumn].$t
			var album1 = entry["gsx$" + param_album1Column].$t
			var album2 = entry["gsx$" + param_album2Column].$t
			var album3 = entry["gsx$" + param_album3Column].$t
			var perks = entry["gsx$" + param_perksColumn].$t
			var author = entry["gsx$" + param_authorColumn].$t
			var hiketype = entry["gsx$" + param_typeColumn].$t
			var ws = entry["gsx$" + param_wsColumn].$t
			var type = "hiking"
			var point = new google.maps.LatLng(lat,lng);
			var html = "<div class=\"map_popup\">";
			html += "<strong>" + entry["gsx$"+param_titleColumn].$t 
				+ "</strong><br />";
			var label = entry["gsx$"+param_titleColumn].$t;
			var rank = 0;
			if(entry["gsx$" + param_descriptionColumn]) {
				html += "<br/><b>Description:</b> " + entry["gsx$"+param_descriptionColumn].$t;
			}
			html += "<br />"
			html += "<br /><b>Perks:</b> " + perks
			html += "<br /><b>Elevation Gain:</b> " + elevation + "'"
			html += "<br /><b>Distance:</b> " + distance + " mi"
			html += "<br /><b>WS Rating:</b> " + ws
			html += "<br /><b>Cabin:</b> " + cabin
			if(album1.length > 0)
			{
				html += "<br /><b>Albums:</b> ";
				html += "<a href=\"" + album1 + "\">1</a> ";
				if(album2.length > 0)
					html += "<a href=\"" + album2 + "\">2</a> ";
				if(album3.length > 0)
					html += "<a href=\"" + album3 + "\">3</a> ";
			}

			html += "<br /><i>Submitted by: " + author + "</i>"
			if(parklatlng.length > 0)
				html += "<br /><br />(<a href = \"http://maps.google.com/maps?saddr=boston,ma&daddr=" + parklat + "," + parklng + "\">gmaps directions</a>)";
			html += "</div>";

			var difficultySidebar = document.getElementById("sidebar-" + difficulty);
			if(!difficultySidebar)
			{
				difficultySidebar = document.createElement("div");
				difficultySidebar.id = "sidebar-" + difficulty;
				difficultySidebar.className = "state";
				difficultyLabel = document.createElement("div");
				difficultyLabel.className = "state-label";
				difficultyLabel.appendChild(document.createTextNode(difficulty));
				difficultySidebar.appendChild(difficultyLabel);
				mainSidebar.appendChild(difficultySidebar);
			}

			// create the marker
			var marker = cm_createHikingMarker(point,label,html,g_hikingMapMarkers.length,type);
			g_hikingMapMarkers.push(marker);
			g_hikingMapHTMLS.push(html);
			if(summit.length > 0)
				bounds.extend(point);

			var markerADIV = document.createElement("div"); 
			var markerA = document.createElement("a");
			markerADIV.className = "entry"
				markerADIV.appendChild(markerA);
			sidebarEntries[label] = markerADIV;
			markerA.setAttribute("href","javascript:cm_hikingMarkerClicked('" + (g_hikingMapMarkers.length - 1) +"')");
			var sidebarText= "";
			sidebarText += label;
			markerA.appendChild(document.createTextNode(sidebarText));
			difficultySidebar.appendChild(markerADIV);


			if(parklatlng.length > 0)
			{
				html = "Parking for: " + label
				html += "<br /><br />(<a href = \"http://maps.google.com/maps?saddr=boston,ma&daddr=" + parklat + "," + parklng + "\">gmaps directions</a>)";
				var point = new google.maps.LatLng(parklat,parklng);
				var parking_marker = cm_createHikingMarker(point,label,html,g_hikingMapMarkers.length,"parking");
				g_hikingMapMarkers.push(parking_marker);
				g_hikingMapHTMLS.push(html);
				bounds.extend(point);

				var sidebarEntry = sidebarEntries[label];
				markerADIV = document.createElement("span"); 
				var markerA = document.createElement("a");
				markerADIV.className = "parking"
				markerADIV.appendChild(document.createTextNode(" ("));
				markerADIV.appendChild(markerA);
				markerADIV.appendChild(document.createTextNode(")"));
				markerA.setAttribute("href","javascript:cm_hikingMarkerClicked('" + (g_hikingMapMarkers.length - 1) +"')");
				markerA.appendChild(document.createTextNode("P"));
				sidebarEntry.appendChild(markerADIV);
			}
		}
	}

	g_map.fitBounds(bounds);
	g_map.setCenter(bounds.getCenter());

}

/**
 * Creates marker with ranked Icon or blank icon,
 * depending if rank is defined. Assigns onclick function.
 * @param {GLatLng} point Point to create marker at
 * @param {String} title Tooltip title to display for marker
 * @param {String} html HTML to display in InfoWindow
 * @param {Number} rank Number rank of marker, used in creating icon
 * @return {GMarker} Marker created
 */

function cm_createHikingMarker(point, title, html, index, marker_type)
{
	var icon;
	var shadow;
	if(marker_type == "parking")
	{
		icon = "http://maps.google.com/mapfiles/ms/micons/parkinglot.png";
		shadow = "http://maps.google.com/mapfiles/ms/micons/parkinglot.shadow.png";
	}
	else
	{
		//shadow = "http://www.google.com/mapfiles/ms/micons/hiker.shadow.png";
		//icon = "http://maps.google.com/mapfiles/ms/micons/hiker.png";
		//shadow = "http://www.google.com/mapfiles/ms/micons/trail.shadow.png";
		//icon = "http://maps.google.com/mapfiles/ms/micons/trail.png";
		shadow = "http://www.google.com/mapfiles/shadow50.png";
		icon = "http://maps.google.com/mapfiles/ms/icons/red.png";
	}
	var marker = new google.maps.Marker({
		position: point,
		title:title,
		map: g_map,
		icon: new google.maps.MarkerImage (
					icon,
					new google.maps.Size(34, 34),
					new google.maps.Point(0,0),
					new google.maps.Point(0, 32)
					),
		shadow: new google.maps.MarkerImage (
				shadow,
				new google.maps.Size(37, 34),
				new google.maps.Point(0,0),
				new google.maps.Point(-5, 32)
				)
	});

	google.maps.event.addListener(marker, "click", function() {
			cm_hikingMarkerClicked(index)
			});
	return marker;
}

/**
 * Creates a script tag in the page that loads in the 
 * JSON feed for the specified key/ID. 
 * Once loaded, it calls cm_loadMapJSON.
 */
function cm_getHikingJSON() {

	// Retrieve the JSON feed.
	var script = document.createElement('script');
	script.setAttribute('src', 'http://spreadsheets.google.com/feeds/list'
			+ '/' + param_ssKey + '/' + param_wsId + '/public/values' +
			'?alt=json-in-script&callback=cm_loadHikingMapJSON');
	script.setAttribute('id', 'jsonScript');
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script);
}


function initialize_hiking_map(id) {
	var myOptions = {
		center: new google.maps.LatLng(43.907787,-79.359741),
		zoom: 2,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	g_map = new google.maps.Map(document.getElementById(id),
			myOptions);
	cm_getHikingJSON();
}

//]]>
