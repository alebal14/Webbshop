let orderId = 0;
class OrderFormular {

  constructor() {
    // OrderFormular.orderId = 0;
    this.submitButtonListener();
  }

  submitButtonListener() {
    $('body').on('submit', '#my-form', e => {
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
      orderData['månad'] = (m + 1);
      orderData['år'] = y;
      console.log(orderData);

      // if (localStorage.getItem("Orderformulär1") === null) {
      //   orderId = 1;
      // } else {
      //   orderId += 1;
      // }

      // localStorage.setItem(`Orderformulär${orderId}`, JSON.stringify(orderData));
      store.orderArray.push(orderData);
      store.save();
      document.getElementById("my-form").reset();
      this.fetchOrderData(orderData);
    });
  }

  fetchOrderData(orderData) {
    // let orderData = JSON.parse(localStorage.getItem(`Orderformulär${orderId}`));
    // $('.orderHistory').append("<p><strong>Namn: </strong> " + orderData.name + "<strong> Email: </strong>" + orderData.email + "<strong> Adress: </strong>" + orderData['adress'] + "<strong> Meddelande: </strong>" + orderData['message'] + "<strong> Datum: </strong>" + orderData.dag + "-" + orderData.månad + "-" + orderData.år + "</p>");
    
    
    for (let i = 0; i < store.orderArray.length; i++) {
      $('.orderHistory').append(`<p><strong>Namn: </strong> ${store.orderArray[i].name}
       <strong> Email: </strong> ${store.orderArray[i].email} 
       <strong> Adress: </strong> ${store.orderArray[i].adress} 
       <strong> Meddelande: </strong>${store.orderArray[i].message}
       <strong> Datum: </strong> ${store.orderArray[i].dag}-${store.orderArray[i].månad}-${store.orderArray[i].år}</p>`);
    }
  }

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