let orderId = 0;
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
  <input class="btn rounded-0 btn-warning my-2" type="submit" value="Beställ">
</form>
    </div>
  </div>
  <div class="row">
      <div class="col-12 mt-5">
      <h5>Tidigare beställningar:</h5>
      <div class="orderHistory col-12">

      </div>
      </div>
  </div> 
</div>
        `);
      }
}

$('body').on('submit', '#my-form', readFormorderData)
function readFormorderData(e){
  e.preventDefault()
  let day = new Date();
  let d = day.getDate();
  let month = new Date();
  let m = month.getMonth();
  let year = new Date();
  let y = year.getFullYear();
  let time = Date.now();

  let orderData = {}
  orderData['name'] = $('#name').val()
  orderData['email'] = $('#email').val()
  orderData['adress'] = $('#adress').val()
  orderData['message'] = $('#message').val() 
  orderData['dag'] = d; 
  orderData['månad'] = (m+1); 
  orderData['år'] = y; 
console.log(orderData);

if (localStorage.getItem("Orderformulär1") === null) {
  orderId = 1;
} else {
  orderId += 1;
}

localStorage.setItem(`Orderformulär${orderId}`,JSON.stringify(orderData));
document.getElementById("my-form").reset();
// console.log(Date.now())
}

function fetchOrderData(){
  let day = new Date();
  let d = day.getDate();
  let month = new Date();
  let m = month.getMonth();
  let year = new Date();
  let y = year.getFullYear();
  let time = Date.now();
  console.log("Tid: " + time + ",  Dag: " + d + ", Månad: " + (m+1) + ", År: " +y);
}