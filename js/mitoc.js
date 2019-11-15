---
---

//Load leader lists from Google Sheets and populate the table
function loadLeadersFromSpreadsheet(spreadsheetId, sheetId, divId) {
    $.getJSON('https://spreadsheets.google.com/feeds/list/' + spreadsheetId + '/' + sheetId
        + '/public/values?alt=json', function(data) {
        //Format the data into HTML, with special treatment for category headings
        var leaderListEntries = '';
        var leaders = data.feed.entry;
        var l = leaders.length;
        for(var i = 0; i < l; i++) {
            if(leaders[i].gsx$position.$t == 'category') {
                leaderListEntries = leaderListEntries
                    + '</div>\n<h3>' + leaders[i].gsx$name.$t + '</h3>\n<div class="row is-flex">\n';
            } else {
                leaderListEntries = leaderListEntries
                    + '<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"><img height="100" width="100" src="images/leaders/'
                    + (leaders[i].gsx$photo.$t || 'beaver.jpg') + '"><em>'
                    + leaders[i].gsx$name.$t + '<br>'
                    + (leaders[i].gsx$position.$t ? leaders[i].gsx$position.$t + '<br>' : '') + '</em>'
                    + leaders[i].gsx$description.$t + '</div>\n';
            }
        }
        //Write into div with id="leader-list"
        $(divId).html(leaderListEntries);
    });
}

//Load leader lists from mitoc-trips.mit.edu and populate the table
function loadLeadersFromTripsWebsite(activityId, divId) {
    $.getJSON('https://mitoc-trips.mit.edu/leaders.json/' + activityId, function(data) {
        //Format the data into HTML
        var leaderListEntries = '';
        var leaders = data.leaders;
        var l = leaders.length;
        for(var i = 0; i < l; i++) {
		    //Use the cute beaver instead of the Gravatar default pic
			leaders[i].gravatar = leaders[i].gravatar.substr(0, leaders[i].gravatar.length - 2) + 'http%3A%2F%2Fmitoc.mit.edu%2Fimages%2Fleaders%2Fbeaver.jpg';
            leaderListEntries = leaderListEntries
                    + '<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"><img height="100" width="100" src="'
                    + leaders[i].gravatar + '">'
                    + leaders[i].name + '</div>\n';
        }
        //Write into div with id=divId
        $(divId).html(leaderListEntries);
    });
}

//Load trip fee schedule from Google Sheets on the payment page
function load_trip_fees() {
    //Populate dropdown menu and list of prices
    var form = document.forms['trip_form'];
    var options = form.merchantDefinedData2.options;
    var prices = {
        {% for fee in site.data.trip_fees %}
            "{{fee.name}}": { "price": "{{ fee.price }}", "category": "{{ fee.category }}" },
        {% endfor %}
    };
    //Add handler to calculate price when quantity changes
    var calculate_amount = function() {
        if(form.merchantDefinedData2.value) {
            form.amount.value = form.merchantDefinedData4.value * prices[form.merchantDefinedData2.value].price;
        }
    };
    $('#merchantDefinedData4trip').keyup(calculate_amount);
    $('#merchantDefinedData4trip').change(calculate_amount);

    //Add handler to calculate price and populate category when trip selection changes
    $('#merchantDefinedData2trip').change(function() {
        if(form.merchantDefinedData2.value) {
            calculate_amount();
            form.merchantDefinedData1.value = prices[form.merchantDefinedData2.value].category;
        }
    });
}
