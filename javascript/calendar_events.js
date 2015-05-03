/* Loads the Google data JavaScript client library */
var apikey = "AIzaSyDHd5u-0ibLEzpkBDHq4D7NJdVX5RxX6rk";
//gapi.client.load('calendar', 'v3');
//google.load("gdata", "2.x");

function init() {
  // init the Google data JS client library with an error handler
  // google.gdata.client.init(handleGDError);
  // load the code.google.com developer calendar
  var apikey = "AIzaSyDHd5u-0ibLEzpkBDHq4D7NJdVX5RxX6rk";
  gapi.client.setApiKey(apikey);
  gapi.client.load('calendar', 'v3');
  //var i = 0;
}

/**
 * Adds a leading zero to a single-digit number.  Used for displaying dates.
 */
function padNumber(num) {
  if (num <= 9) {
	return "0" + num;
  }
  return num;
}

/**
 * Determines the full calendarUrl based upon the calendarAddress
 * argument and calls loadCalendar with the calendarUrl value.
 *
 * @param {string} calendarAddress is the email-style address for the calendar
 */ 
function loadCalendarByAddress(calendarAddress, events_id) {
  //gapi.client.setApiKey(apikey);
  //gapi.client.load('calendar', 'v3');
  var calendarUrl = 'https://www.google.com/calendar/feeds/' +
					calendarAddress + 
					'/public/full';
  loadCalendar(calendarUrl, events_id);
}

/**
 * Uses Google data JS client library to retrieve a calendar feed from the specified
 * URL.  The feed is controlled by several query parameters and a callback 
 * function is called to process the feed results.
 *
 * @param {string} calendarUrl is the URL for a public calendar feed
 */  
function loadCalendar(calendarUrl,events_id) {
  console.log(calendarUrl);
  //gapi.client.calendar.calendars.get({'calendarId': calendarUrl}, function(feedRoot){ console.log(feedRoot); }, handleGDError);
  //var service = new 
  //	  google.gdata.calendar.CalendarService('gdata-js-client-samples-simple');
  //var query = new google.gdata.calendar.CalendarEventQuery(calendarUrl);
  //query.setOrderBy('starttime');
  //query.setSortOrder('ascending');
  //query.setFutureEvents(true);
  //query.setSingleEvents(true);
  //query.setMaxResults(4);

  //service.getEventsFeed(query, function (feedRoot) { listEvents(feedRoot, events_id) }, handleGDError);
}

/**
 * Callback function for the Google data JS client library to call when an error
 * occurs during the retrieval of the feed.  Details available depend partly
 * on the web browser, but this shows a few basic examples. In the case of
 * a privileged environment using ClientLogin authentication, there may also
 * be an e.type attribute in some cases.
 *
 * @param {Error} e is an instance of an Error 
 */
function handleGDError(e) {
  if (e instanceof Error) {
	/* alert with the error line number, file and message */
	alert('Error at line ' + e.lineNumber +
		  ' in ' + e.fileName + '\n' +
		  'Message: ' + e.message);
	/* if available, output HTTP error code and status text */
	if (e.cause) {
	  var status = e.cause.status;
	  var statusText = e.cause.statusText;
	  alert('Root cause: HTTP error ' + status + ' with status text of: ' + 
			statusText);
	}
  } else {
	alert(e.toString());
  }
}

/**
 * Callback function for the Google data JS client library to call with a feed 
 * of events retrieved.
 *
 * Creates an unordered list of events in a human-readable form.  This list of
 * events is added into a div called 'events'.  The title for the calendar is
 * placed in a div called 'calendarTitle'
 *
 * @param {json} feedRoot is the root of the feed, containing all entries 
 */ 
function listEvents(feedRoot, events_id) {
  var entries = feedRoot.feed.getEntries();
  var eventDiv = document.getElementById(events_id);
  /*
  document.getElementById('calendarTitle').innerHTML = 
	"Calendar: " + feedRoot.feed.title.$t;
	*/
  /* loop through each event in the feed */
  var len = entries.length;
  for (var i = 0; i < len; i++) {
	var entry = entries[i];
	var title = entry.getTitle().getText();
	var startDateTime = null;
	var startJSDate = null;
	var times = entry.getTimes();
	if (times.length > 0) {
	  startDateTime = times[0].getStartTime();
	  startJSDate = startDateTime.getDate();
	}
	var entryLinkHref = null;
	if (entry.getHtmlLink() != null) {
	  entryLinkHref = entry.getHtmlLink().getHref();
	}
	var dateString = (startJSDate.getMonth() <= 10 ? "0" : "") + 
		(startJSDate.getMonth() + 1) + "/" + 
		(startJSDate.getDate() <= 10 ? "0" : "") +
		startJSDate.getDate();
	if (!startDateTime.isDateOnly()) {
	  dateString += " " + startJSDate.getHours() + ":" + 
		  padNumber(startJSDate.getMinutes());
	}

	/* if we have a link to the event, create an 'a' element */
	/*
	if (entryLinkHref != null) {
	  entryLink = document.createElement('a');
	  entryLink.setAttribute('href', entryLinkHref);
	  entryLink.appendChild(document.createTextNode(title));
	  li.appendChild(entryLink);
	  li.appendChild(document.createTextNode(' - ' + dateString));
	} else {
	  li.appendChild(document.createTextNode(title + ' - ' + dateString));
	}	    
	*/

	/* append the list item onto the unordered list */
	eventDiv.appendChild(document.createTextNode(dateString + ' - ' + title))
	eventDiv.appendChild(document.createElement('br'))
  }

  if(entries.length == 0)
  {
	eventDiv.appendChild(document.createTextNode("No upcoming events."));
	eventDiv.appendChild(document.createElement('br'))
	eventDiv.appendChild(document.createElement('br'))
	eventDiv.appendChild(document.createTextNode('Be sure to check back later!'))
  }
/*  eventDiv.appendChild(ul);*/
}


