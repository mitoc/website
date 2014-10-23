
function ajaxRequest(strURL,func) {
    var xmlHttpReq = false;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttpReq.open('GET', strURL, true);
/*    xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');*/
    xmlHttpReq.onreadystatechange = function() {
        if (xmlHttpReq.readyState == 4) {
            func(xmlHttpReq.responseText);
        }
    }
    xmlHttpReq.send(null);
}

function ajaxReplace(strURL, destid) {
    return ajaxRequest(strURL, function(str) { document.getElementById(destid).innerHTML = str; });
}

function ajaxAppend(strURL, destid) {
    return ajaxRequest(strURL, function(str) { document.getElementById(destid).innerHTML += str; });
}

var column_name = "name";
var column_email = "email";
var column_position = "position";
var column_photo = "photo";
var column_description = "description";

function load_sheet_callback_into_element(json, element)
{
    var list = document.getElementById(element)
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        var name = entry["gsx$" + column_name].$t;
        var email = entry["gsx$" + column_email].$t;
        var position = entry["gsx$" + column_position].$t;
        var photo = entry["gsx$" + column_photo].$t;
        var description = entry["gsx$" + column_description].$t;

        if(position == "category")
        {
            var category = document.createElement("H3");
            var spacer = document.createElement("DIV");
            spacer.style.clear = "both";
            category.innerHTML = name;
            list.appendChild(spacer);
            list.appendChild(category);
        }
        else
        {
            var leader_div = document.createElement("DIV");
            leader_div.className = "leader";

            var leader_pic = document.createElement("IMG");
            leader_pic.className = "leader_pic";
            if(photo != "")
            {
                leader_pic.src = "images/profile/" + photo;
            }

            var leader_text = document.createElement("DIV");
            leader_text.className = "leader_text";

            var leader_info = document.createElement("DIV");
            leader_info.className = "leader_info";

            leader_info.innerHTML = name + "<br /><i>" + position + "</i>";

            var leader_desc = document.createElement("DIV");
            leader_desc.className = "leader_description";
            leader_desc.innerHTML = description;

            leader_text.appendChild(leader_info);
            leader_text.appendChild(leader_desc);

            leader_div.appendChild(leader_pic);
            leader_div.appendChild(leader_text);

            list.appendChild(leader_div);
/*           list.appendChild(document.createElement("HR")); */
        }
    }
}

function load_sheet_callback_leader_list(json)
{
    load_sheet_callback_into_element(json, 'leader_list')
}

function load_sheet_callback_climber_list(json)
{
    load_sheet_callback_into_element(json, 'climber_list')
}

function load_sheet_callback_3s_list(json)
{
    load_sheet_callback_into_element(json, '3s_list')
}

function load_sheet_callback_ws_list(json)
{
    load_sheet_callback_into_element(json, 'ws_list')
}

function load_sheet_to_element(doc_id, sheet_id, element_id)
{
    var script = document.createElement('script');
    script.setAttribute('src', 'http://spreadsheets.google.com/feeds/list'
            + '/' + doc_id + '/' + sheet_id + '/public/values' +
            '?alt=json-in-script&callback=load_sheet_callback' + '_' + element_id);
    script.setAttribute('id', 'jsonScript');
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);
}

function load_sheet(doc_id, sheet_id)
{
    load_sheet_to_element(doc_id, sheet_id, "leader_list");
}

function show_trips(triplist)
{
	var triplist_nav = document.getElementById('triplist_nav');
	for(var trip in triplist)
	{
		var li = document.createElement('li');
		var a = document.createElement('a');
		var tripname = trip;
		if(tripname.length > 23)
		{
			tripname = trip.substr(0,23) + "...";
		}
		a.setAttribute("href", '#trip?id=' + triplist[trip]);
		a.setAttribute("title", trip);
		a.appendChild(document.createTextNode(tripname));
		li.appendChild(a);
		triplist_nav.appendChild(li);
	}
}

function get_trips()
{
	var script = document.createElement('script');
	script.setAttribute('src', 'http://scripts.mit.edu/~mitoc/signup/index.php?&action=show_trip_list')
	script.setAttribute('id', 'jsonScript');
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script);
}

function show_special()
{
    var special = document.getElementById("special");
    var main = document.getElementById("main");
	if(special.innerHTML == "")
	{
		special.style.display = 'none'
		main.style.top = '172px';
	} else {
		special.style.display = 'block';
		main.style.top = '234px';
	}
}

function do_analytics()
{
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40282392-1', 'mit.edu');
  ga('send', 'pageview');
}
