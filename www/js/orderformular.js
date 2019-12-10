class orderformular{

    render() {
        $('#link5').addClass('active')
        $('main').removeClass('startsida');
        $('main').html(/*html*/`
          
          <div class="container">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-6 pt-5 pb-5 d-flex justify-content-center">
    <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-12 mb-3">
      <label for="validationTooltip01">Förnamn</label>
      <input type="text" class="form-control" id="validationTooltip02" required>
      <div class="invalid-tooltip">
        Ange namn.
      </div>
    </div>
    <div class="col-12 mb-3">
      <label for="validationTooltip02">Efternamn</label>
      <input type="text" class="form-control" id="validationTooltip02" required>
      <div class="invalid-tooltip">
        Ange Efternamn.
      </div>
    </div>
    <div class="col-12 mb-3">
    <label for="validationCustom01">Email</label>
        <input type="email" class="form-control" id="validationCustom01" placeholder="name@example.com" required>
            <div class="invalid-tooltip">
                Ange en giltig email.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-12 mb-3">
      <label for="validationTooltip03">Gatuadress</label>
      <input type="text" class="form-control" id="validationTooltip02" required>
      <div class="invalid-tooltip">
        Ange en giltig Gatuadress.
      </div>
    </div>
    <div class="col-12 mb-3">
      <label for="validationTooltip05">Postnummer</label>
      <input type="text" class="form-control" id="validationTooltip05" required>
      <div class="invalid-tooltip">
        Ange giltigt Postnummer.
      </div>
    </div>
    <div class="col-12 mb-3">
      <label for="validationTooltip02">Ort</label>
      <input type="text" class="form-control" id="validationTooltip02" required>
      <div class="invalid-tooltip">
        Ange en ort.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Skicka beställning</button>
</form>
    </div>
    <div class="col">
    
    </div>
  </div>

  <div class="row">
      <div class="col-12">
      hejhej
      </div>
  </div> 
</div>
     
          
        `);
      }





















}