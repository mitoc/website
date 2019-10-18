
//<![CDATA[
var g_mapMarkers = [];
var g_mapHTMLS = [];
var infoWindow = new google.maps.InfoWindow();
var g_map;

// Change these parameters to customize map
var param_titleColumn = "name";
var param_descriptionColumn = "description";
var param_latColumn = "latitude";
var param_lngColumn = "longitude";
var param_stateColumn = "state";
var param_typeColumn = "type";
var param_rankColumn = "";
var param_iconType = "green";
var param_iconOverType = "orange";

/**
 * Function called when marker on the map is clicked.
 * Opens an info window (bubble) above the marker.
 * @param {Number} markerNum Number of marker in global array
 */
function cm_markerClicked(markerNum) {
	infoWindow.setContent(g_mapHTMLS[markerNum]);
	infoWindow.open(g_map, g_mapMarkers[markerNum]);
}

/**
 * Function that sorts 2 worksheet rows from JSON feed
 * based on their rank column. Only called if column is defined.
 * @param {rowA} Object Represents row in JSON feed
 * @param {rowB} Object Represents row in JSON feed
 * @return {Number} Difference between row values
 */
function cm_sortRows(rowA, rowB) {
	var rowAValue = parseFloat(rowA["gsx$" + param_rankColumn].$t);
	var rowBValue = parseFloat(rowB["gsx$" + param_rankColumn].$t);

	return rowAValue - rowBValue;
}

/**
 * Called when JSON is loaded. Creates sidebar if param_sideBar is true.
 * Sorts rows if param_rankColumn is valid column. Iterates through worksheet rows,
 * creating marker and sidebar entries for each row.
 * @param {JSON} json Worksheet feed
 */
function cm_loadMapJSON(json) {
	g_mapMarkers = [];
	g_mapHTMLS = [];

	var usingRank = false;

	var sidebarDIV = document.createElement("div");
	var mainSidebar = sidebarDIV;
	document.getElementById("sidebar").appendChild(sidebarDIV);
	var bounds = new google.maps.LatLngBounds();

	if(json.feed.entry[0]["gsx$" + param_rankColumn]) {
		usingRank = true;
		json.feed.entry.sort(cm_sortRows);
	}

	var sidebarEntries = {}

	for (var i = 0; i < json.feed.entry.length; i++) {
		var entry = json.feed.entry[i];
		if(entry["gsx$" + param_latColumn]) {
			var lat = parseFloat(entry["gsx$" + param_latColumn].$t);
			var lng = parseFloat(entry["gsx$" + param_lngColumn].$t);
			var state = entry["gsx$" + param_stateColumn].$t;
			var type = entry["gsx$" + param_typeColumn].$t;
			var point = new google.maps.LatLng(lat,lng);
			var html = "<div class=\"map_popup\">";
			html += "<strong>" + entry["gsx$"+param_titleColumn].$t
				+ "</strong><br />";
			var label = entry["gsx$"+param_titleColumn].$t;
			var rank = 0;
			if(entry["gsx$" + param_descriptionColumn]) {
				html += "<br/>" + entry["gsx$"+param_descriptionColumn].$t;
			}
			html += "<br /><br />(<a href = \"http://maps.google.com/maps?saddr=boston,ma&daddr=" + lat + "," + lng + "\">gmaps directions</a>)"
				html += "</div>";

			var stateSidebar = document.getElementById("sidebar-" + state);
			if(!stateSidebar)
			{
				stateSidebar = document.createElement("div");
				stateSidebar.id = "sidebar-" + state;
				stateSidebar.className = "state";
				stateLabel = document.createElement("div");
				stateLabel.className = "state-label";
				stateLabel.appendChild(document.createTextNode(state));
				stateSidebar.appendChild(stateLabel);
				mainSidebar.appendChild(stateSidebar);
			}

			// create the marker
			var marker = cm_createMarker(point,label,html,g_mapMarkers.length,type);
			g_mapMarkers.push(marker);
			g_mapHTMLS.push(html);
			bounds.extend(point);

			if(type == "parking")
			{
				var sidebarEntry = sidebarEntries[label];
				var markerADIV = document.createElement("span");
				var markerA = document.createElement("a");
				markerADIV.className = "parking"
					markerADIV.appendChild(document.createTextNode(" ("));
				markerADIV.appendChild(markerA);
				markerADIV.appendChild(document.createTextNode(")"));
				markerA.setAttribute("href","javascript:cm_markerClicked('" + i +"')");
				markerA.appendChild(document.createTextNode("parking"));
				sidebarEntry.appendChild(markerADIV);
			}
			else
			{
				var markerADIV = document.createElement("div");
				var markerA = document.createElement("a");
				markerADIV.className = "entry"
					markerADIV.appendChild(markerA);
				sidebarEntries[label] = markerADIV;
				markerA.setAttribute("href","javascript:cm_markerClicked('" + i +"')");
				var sidebarText= "";
				if(usingRank) {
					sidebarText += rank + ") ";
				}
				sidebarText += label;
				markerA.appendChild(document.createTextNode(sidebarText));
				stateSidebar.appendChild(markerADIV);
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

function cm_createMarker(point, title, html, index, marker_type)
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
			cm_markerClicked(index)
			});
	return marker;
}

/**
 * Creates a script tag in the page that loads in the
 * JSON feed for the specified key/ID.
 * Once loaded, it calls cm_loadMapJSON.
 */
function cm_getJSON() {

	// Retrieve the JSON feed.
	var script = document.createElement('script');
	script.setAttribute('src', 'https://spreadsheets.google.com/feeds/list'
			+ '/' + param_ssKey + '/' + param_wsId + '/public/values' +
			'?alt=json-in-script&callback=cm_loadMapJSON');
	script.setAttribute('id', 'jsonScript');
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script);
}


function initialize_map(id) {
	var myOptions = {
		center: new google.maps.LatLng(43.907787,-79.359741),
		zoom: 2,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	g_map = new google.maps.Map(document.getElementById(id),
			myOptions);
	cm_getJSON();
}

//]]>
