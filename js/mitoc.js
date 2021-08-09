---
---

//Helper function to see if a URL returns a 404
function urlExists(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

//Load leader lists from mitoc-trips.mit.edu and populate the table
function loadLeadersFromTripsWebsite(activityId, divId) {
    $.getJSON('https://mitoc-trips.mit.edu/leaders.json/' + activityId, function(data) {
        //Format the data into HTML
        var leaderListEntries = '';
        var leaders = data.leaders;
        var l = leaders.length;
        for(var i = 0; i < l; i++) {
		    // Try to get the user's Gravatar; otherwise, use the beaver as a fallback
            var gravUrl = new URL(leaders[i].gravatar);
            gravUrl.searchParams.set("d", "404"); // return a 404 if not found
            if(urlExists(gravUrl)){
                leaders[i].gravatar = gravUrl;
            } else {
                leaders[i].gravatar = 'https://mitoc.mit.edu/images/leaders/Beaver.jpg';
            }

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
