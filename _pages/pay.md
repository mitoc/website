---
    permalink: /pay
    title: Pay MITOC
---

<div class="alert alert-warning">
  <p>Please be advised that we have been having <strong>issues processing payments from PayPal</strong>.</p>
  <p>We recommend that you use a credit or debit card for online payment (we always accept personal checks in the office).</p>
</div>

This page can be used to pay money to MITOC using PayPal or a credit/debit card. Payments can also be made by check at the [MITOC office](/where-is-mitoc) during [office hours](/calendar). **All payments are final and non-refundable.**

If you are having trouble with the payment system, contact [mitoc-bursar@mit.edu](mailto:mitoc-bursar@mit.edu). The most common issue is that the billing address must exactly match what your bank has on file, so if your card is declined, double-check the address you entered.

### Financial Assistance
We provide need-blind financial assistance to any MIT undergrad, upon request. 
If finances are at all a factor in your participation, please don’t hesitate to use this resource. MITOC trip and rental fees will be waived upon request (ask your trip leader and/or desk worker). Gas/travel can be reimbursed (details under [get reimbursed](/about/get-reimbursed)).
For assistance with membership or other costs, please email [mitoc-owner@mit.edu](mailto:mitoc-owner@mit.edu) to ask about this fee being waived. If you are a non-MIT student please feel free to email to ask about financial assistance options.

### Membership Fees

See the signup page [here](/join).

### Gear Rentals and Purchases

<div style="width:300px;">
  <form
    action="https://shopmitprd.mit.edu/controller/index.php"
    method="POST"
    target="_blank"
  >
    <input type="hidden" name="merchant_id" value="mit_sao_mitoc" />
    <input type="hidden" name="merchantDefinedData2" value="" />
    <div class="form-group">
      <label for="merchantDefinedData1gear">Type of Payment</label>
      <select
        name="merchantDefinedData1"
        id="merchantDefinedData1gear"
        class="form-control"
      >
        <option value="rental">Gear rental (not boats)</option>
        <option value="gear">Gear purchase</option>
        <option value="canoe">Canoe</option>
        <option value="whitewaterkayak">White Water Kayak</option>
        <option value="seakayak">Sea Kayak</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="merchantDefinedData3gear">Renter Name</label>
      <input
        name="merchantDefinedData3"
        id="merchantDefinedData3gear"
        value=""
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="amount">Amount ($)</label>
      <input name="amount" id="amount-gear" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Pay</button>
  </form>
</div>

### Trip and Event Fees

<div style="width:300px;">
  <form
    action="https://shopmitprd.mit.edu/controller/index.php"
    method="POST"
    id="trip_form"
    target="_blank"
  >
    <input
      type="hidden"
      name="merchant_id"
      id="merchant_id"
      value="mit_sao_mitoc"
    />
    <input type="hidden" name="merchantDefinedData1" value="" />
    <div class="form-group">
      <label for="merchantDefinedData2trip">Trip/Event</label>
      <select
        name="merchantDefinedData2"
        id="merchantDefinedData2trip"
        class="form-control"
      >
        <option>Select one</option>
        {% for fee in site.data.trip_fees %}
          <option value="{{ fee.name }}">{{ fee.name }}</option>
        {% endfor %}
      </select>
    </div>
    <div class="form-group">
      <label for="merchantDefinedData4trip">Quantity</label>
      <input
        name="merchantDefinedData4"
        id="merchantDefinedData4trip"
        type="number"
        value="1"
        min="1"
        step="1"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="merchantDefinedData3trip">Comments</label>
      <input
        name="merchantDefinedData3"
        id="merchantDefinedData3trip"
        value=""
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="amount">Amount ($)</label>
      <input
        name="amount"
        id="amount"
        value="0"
        class="form-control"
        readonly
      />
    </div>

    <button type="submit" class="btn btn-primary">Pay</button>
  </form>
</div>

### Cabin Rentals

Be sure to fill out the visitor log ([Camelot](https://docs.google.com/spreadsheet/viewform?formkey=dGdFZ1puZ2JiZktNeDNIZ0JXQ09OR1E6MQ#gid=0) or [Intervale](https://docs.google.com/spreadsheet/viewform?formkey=dFE4QTY2XzRLVVllY1VXcVNzWUxHYVE6MQ#gid=0)) when you pay for cabin rental.

Days spent on-site but not in the cabin (e.g. Yurt / Lean-to / camping) cost 0.5 person-days (i.e. half price of using the cabin.) Enter the total number of fractional days spent outside and full days spent inside in the form below.

<div style="width:300px;">
  <form
    action="https://shopmitprd.mit.edu/controller/index.php"
    method="POST"
    id="cabin_form"
    target="_blank"
  >
    <input
      type="hidden"
      name="merchant_id"
      id="merchant_id-cabins"
      value="mit_sao_mitoc"
    />
    <div class="form-group">
      <label for="merchantDefinedData1cabin">Cabin</label>
      <select
        name="merchantDefinedData1"
        id="merchantDefinedData1cabin"
        class="form-control"
      >
        <option value="camelot">Camelot ($10/person/night)</option>
        <option value="intervale">Intervale ($10/person/night)</option>
      </select>
    </div>
    <div class="form-group">
      <label for="merchantDefinedData2cabin">Number of Person-Nights</label>
      <input
        name="merchantDefinedData2"
        id="merchantDefinedData2cabin"
        type="number"
        value="1"
        min="0.5"
        step="0.5"
        class="form-control"
        onkeyup="document.forms['cabin_form'].amount.value = document.forms['cabin_form'].merchantDefinedData2.value * 10.0;"
        onchange="document.forms['cabin_form'].merchantDefinedData2.onkeyup();"
      />
    </div>
    <div class="form-group">
      <label for="merchantDefinedData3cabin">Keyholder Name</label>
      <input
        name="merchantDefinedData3"
        id="merchantDefinedData3cabin"
        value=""
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="amount">Amount ($)</label>
      <input
        name="amount"
        id="amount-cabins"
        value="10"
        class="form-control"
        readonly
      />
    </div>
    <button type="submit" class="btn btn-primary">Pay</button>
  </form>
</div>

<script>
    window.addEventListener('DOMContentLoaded', function() {
      load_trip_fees();
    });
</script>
