---
---

function submit_payment(amount_dollars, description, metadata) {
  var amount_cents = Math.round(parseFloat(amount_dollars) * 100);
  if (!amount_cents || amount_cents < 50) {
    alert('Please enter a valid amount (minimum $0.50).');
    return;
  }

  fetch('/.netlify/functions/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount_cents: amount_cents, description: description, metadata: metadata }),
  })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.url) {
        window.location = data.url;
      } else {
        alert('Payment error. Please try again or contact mitoc-bursar@mit.edu.');
      }
    })
    .catch(function() {
      alert('Payment error. Please try again or contact mitoc-bursar@mit.edu.');
    });
}

function init_payment_forms() {
  var gear_form = document.getElementById('gear_form');
  if (gear_form) {
    gear_form.addEventListener('submit', function(e) {
      e.preventDefault();
      var type = gear_form.querySelector('[name="payment_type"]').value;
      var renter = gear_form.querySelector('[name="renter_name"]').value;
      var amount = gear_form.querySelector('[name="amount"]').value;
      submit_payment(amount, 'Gear: ' + type, { payment_type: type, renter_name: renter });
    });
  }

  var trip_form = document.getElementById('trip_form');
  if (trip_form) {
    var prices = {
      {% for fee in site.data.trip_fees %}
        "{{ fee.name }}": {{ fee.price }},
      {% endfor %}
    };

    var calc_trip_amount = function() {
      var trip = trip_form.querySelector('[name="trip_name"]').value;
      var qty = parseInt(trip_form.querySelector('[name="quantity"]').value, 10) || 1;
      trip_form.querySelector('[name="amount"]').value =
        trip && prices[trip] ? (prices[trip] * qty).toFixed(2) : '0.00';
    };

    trip_form.querySelector('[name="trip_name"]').addEventListener('change', calc_trip_amount);
    trip_form.querySelector('[name="quantity"]').addEventListener('change', calc_trip_amount);
    trip_form.querySelector('[name="quantity"]').addEventListener('keyup', calc_trip_amount);

    trip_form.addEventListener('submit', function(e) {
      e.preventDefault();
      var trip = trip_form.querySelector('[name="trip_name"]').value;
      var qty = trip_form.querySelector('[name="quantity"]').value;
      var comments = trip_form.querySelector('[name="comments"]').value;
      var amount = trip_form.querySelector('[name="amount"]').value;
      if (!trip) { alert('Please select a trip.'); return; }
      submit_payment(amount, trip, { trip: trip, quantity: qty, comments: comments });
    });
  }

  var cabin_form = document.getElementById('cabin_form');
  if (cabin_form) {
    cabin_form.addEventListener('submit', function(e) {
      e.preventDefault();
      var cabin = cabin_form.querySelector('[name="cabin"]').value;
      var nights = cabin_form.querySelector('[name="person_nights"]').value;
      var keyholder = cabin_form.querySelector('[name="keyholder_name"]').value;
      var amount = cabin_form.querySelector('[name="amount"]').value;
      submit_payment(
        amount,
        'Cabin: ' + cabin + ' x ' + nights + ' person-nights',
        { cabin: cabin, person_nights: nights, keyholder_name: keyholder }
      );
    });
  }
}
