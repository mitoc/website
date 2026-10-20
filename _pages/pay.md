---
    permalink: /pay
    title: Pay MITOC
---

This page can be used to pay MITOC by credit or debit card. Payments can also be made by check at the [MITOC office](/where-is-mitoc) during [office hours](/calendar). **All payments are final and non-refundable.**

If you are having trouble with the payment system, contact [mitoc-bursar@mit.edu](mailto:mitoc-bursar@mit.edu). The most common issue is that the billing address must exactly match what your bank has on file.

### Financial Assistance
We can provide need-blind financial assistance to any MIT undergrad, upon request. 
This includes membership waivers, rental and trip fee waivers, gas/travel reimbursements, and starter kits.

More information is available on our [financial aid page](/about/financial-aid).

### Membership Fees

See the signup page [here](/join).

### Gear Rentals and Purchases

<div style="width:300px;">
  <form id="gear_form">
    <div class="form-group">
      <label for="gear-payment-type">Type of Payment</label>
      <select name="payment_type" id="gear-payment-type" class="form-control">
        <option value="rental">Gear rental (not boats)</option>
        <option value="gear">Gear purchase</option>
        <option value="canoe">Canoe</option>
        <option value="whitewaterkayak">White Water Kayak</option>
        <option value="seakayak">Sea Kayak</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="gear-renter-name">Renter Name</label>
      <input name="renter_name" id="gear-renter-name" class="form-control" />
    </div>
    <div class="form-group">
      <label for="gear-amount">Amount ($)</label>
      <input name="amount" id="gear-amount" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Pay</button>
  </form>
</div>

### Trip and Event Fees

<div style="width:300px;">
  <form id="trip_form">
    <div class="form-group">
      <label for="trip-name">Trip/Event</label>
      <select name="trip_name" id="trip-name" class="form-control">
        <option value="">Select one</option>
        {% for fee in site.data.trip_fees %}
          <option value="{{ fee.name }}" data-price="{{ fee.price }}">{{ fee.name }}</option>
        {% endfor %}
      </select>
    </div>
    <div class="form-group">
      <label for="trip-quantity">Quantity</label>
      <input
        name="quantity"
        id="trip-quantity"
        type="number"
        value="1"
        min="1"
        step="1"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="trip-comments">Comments</label>
      <input name="comments" id="trip-comments" class="form-control" />
    </div>
    <div class="form-group">
      <label for="trip-amount">Amount ($)</label>
      <input name="amount" id="trip-amount" value="0.00" class="form-control" readonly />
    </div>
    <button type="submit" class="btn btn-primary">Pay</button>
  </form>
</div>

### Cabin Rentals

Be sure to fill out the visitor log ([Camelot](https://docs.google.com/spreadsheet/viewform?formkey=dGdFZ1puZ2JiZktNeDNIZ0JXQ09OR1E6MQ#gid=0) or [Intervale](https://docs.google.com/spreadsheet/viewform?formkey=dFE4QTY2XzRLVVllY1VXcVNzWUxHYVE6MQ#gid=0)) when you pay for cabin rental.

Days spent on-site but not in the cabin (e.g. Yurt / Lean-to / camping) cost 0.5 person-days (i.e. half price of using the cabin.) Enter the total number of fractional days spent outside and full days spent inside in the form below.

<div style="width:300px;">
  <form id="cabin_form">
    <div class="form-group">
      <label for="cabin-name">Cabin</label>
      <select name="cabin" id="cabin-name" class="form-control">
        <option value="camelot">Camelot ($10/person/night)</option>
        <option value="intervale">Intervale ($10/person/night)</option>
      </select>
    </div>
    <div class="form-group">
      <label for="cabin-person-nights">Number of Person-Nights</label>
      <input
        name="person_nights"
        id="cabin-person-nights"
        type="number"
        value="1"
        min="0.5"
        step="0.5"
        class="form-control"
        onkeyup="document.getElementById('cabin-amount').value = (this.value * 10.0).toFixed(2);"
        onchange="this.onkeyup();"
      />
    </div>
    <div class="form-group">
      <label for="cabin-keyholder">Keyholder Name</label>
      <input name="keyholder_name" id="cabin-keyholder" class="form-control" />
    </div>
    <div class="form-group">
      <label for="cabin-amount">Amount ($)</label>
      <input name="amount" id="cabin-amount" value="10.00" class="form-control" readonly />
    </div>
    <button type="submit" class="btn btn-primary">Pay</button>
  </form>
</div>

<script>
  window.addEventListener('DOMContentLoaded', function() {
    init_payment_forms();
  });
</script>
