class orderformular{

    render() {
        $('#link5').addClass('active')
        $('main').removeClass('startsida');
        $('main').html(/*html*/`
          <div class="col orderform">
          <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">Förnamn</label>
      <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Efternamn</label>
      <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
    <label for="validationCustom01">Email address</label>
        <input type="email" class="form-control" id="validationCustom01" placeholder="name@example.com" required>
            <div class="invalid-tooltip">
                Please provide a valid email.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">Gatuadress</label>
      <input type="text" class="form-control" id="validationTooltip03" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <select class="custom-select" id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-tooltip">
        Please select a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Postnummer</label>
      <input type="text" class="form-control" id="validationTooltip05" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
    </div>
        `);
      }





















}