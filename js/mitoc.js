---
---

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
