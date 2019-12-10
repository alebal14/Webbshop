class OrderFormular{

    render() {
        $('#link5').addClass('active')
        $('main').removeClass('startsida');
        $('main').html(/*html*/`
          
  <div class="container text-center">
  <div class="row" id="formrow">
    <div class="col-12 mt-5">
    <form id="my-form" class="h-100">
  <div class="mb-3">
    <input class="col-12 col-md-8" id="name" placeholder="Namn">
  </div>
  <div class="mb-3">
    <input class="col-12 col-md-8" id="email" type="email" placeholder="Email-adress">
  </div>
  <div class="mb-3">
  <input class="col-12 col-md-8" id="adress" type="adress" placeholder="Adress">
</div>
  <div class="mb-3">
    <textarea class="col-12 col-md-8" id="message" placeholder="Meddelande till avsändare"></textarea>
  </div>
  <input type="submit" value="Skicka">
</form>
    </div>
  </div>
  <div class="row">
      <div class="col-12 mt-5">
      <h6>Tidigare beställningar:</h6>
      </div>
  </div> 
</div>
     
        `);
      }
}

$('body').on('submit', '#my-form', readFormorderData)

// event-handler
function readFormorderData(e){
  e.preventDefault() // inte ladda om sidan..
  let orderData = {}

  // "vanliga" input-fält:
  orderData['name'] = $('#name').val()
  orderData['email'] = $('#email').val()
  orderData['adress'] = $('#adress').val();
  // text area
  orderData['message'] = $('#message').val() 
console.log(orderData);
}
