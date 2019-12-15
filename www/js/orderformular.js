class OrderFormular {

  constructor() {
    // OrderFormular.orderId = 0  
    this.submitButtonListener();
    this.sortBtn();
  }


  submitButtonListener(a, b, c, d) {
    $('body').on('submit', '#my-form', e => {
      e.preventDefault()    
      console.log(a);
      let mydata;
      try {mydata = JSON.parse(localStorage.Cart); }
      catch(e){mydata = {}};  
      let day = new Date();
      let d = day.getDate();
      let month = new Date();
      let m = month.getMonth();
      let year = new Date();
      let y = year.getFullYear();
      let orderData = {}
      orderData['name'] = $('#name').val()
      orderData['email'] = $('#email').val()
      orderData['adress'] = $('#adress').val()
      orderData['message'] = $('#message').val()
      orderData['day'] = d;
      orderData['month'] = (m + 1);
      orderData['year'] = y;   
      orderData['product'] = mydata;
      Object.assign(orderData, store.cartInfo);
      console.log(orderData)
      store.orderArray.push(orderData);            
      store.save();
      localStorage.removeItem('Cart');
      $("#my-form").trigger('reset');
      this.fetchOrderData();
    });
  }

  sortBtn(){
    $('body').on('click', '.sortOrder', () => {
      this.reverse = !this.reverse;
      this.fetchOrderData()
    });
  }

  fetchOrderData() {
    
    $('.orderHistory').empty();
    let toList = [...store.orderArray];
    this.reverse && toList.reverse();
    $('.orderHistory').append(`<section class="sortOrder btn rounded-0 btn-warning my-2"><i class="fas fa-arrow-circle-down"></i> Sortera <i class="fas fa-arrow-circle-up"></i></section>`)
  
    for (let order of toList) {

      // Find where you push an empty object into product
      // AND product is a bad name for a list of products...
      if(order.product.constructor !== Array){order.product = []}

      $('.orderHistory').append(`<section class="orderDisplay"><p><strong>Namn: </strong> ${order.name}
       <strong> Email: </strong> ${order.email} 
       <strong> Adress: </strong> ${order.adress} 
       <strong> Meddelande: </strong>${order.message} 
       <strong> Beställning: </strong> ${order.product.map(product => `
       <strong> Vara: </strong> ${product.name};
       <strong> Pris: </strong> ${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(product.price)};
       <strong> Antal: </strong>${product.unit}
       `)}   
       <br>     
       <strong> Summa: </strong>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(order.summa)}
       <strong> Moms: </strong>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(order.moms)} 
       <strong> Frakt: </strong>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(order.frakt)} 
       <strong> Totalt: </strong>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(order.total)}  
       <br><strong> Datum: </strong> ${order.day}-${order.month}-${order.year} ,   
       
       </p></section>`);          
      } 
  }



  render() {
    $('#link5').addClass('active')
    $('main').removeClass('startsida');
    $('main').html(/*html*/`
          
  <div class="container text-center">
  <div class="row" id="formrow">
    <div class="col-12 mt-4">
    <h2 class="mb-4">Fyll i din information</h2>
    <form id="my-form" class="h-100">
  <div class="mb-3">
    <input class="col-12 col-md-8" id="name" placeholder="Namn" required>
  </div>
  <div class="mb-3">
    <input class="col-12 col-md-8" id="email" type="email" placeholder="Email-adress" required>
  </div>
  <div class="mb-3">
  <input class="col-12 col-md-8" id="adress" type="adress" placeholder="Adress" required>
</div>
  <div class="mb-3">
    <textarea class="col-12 col-md-8" id="message" placeholder="Meddelande till avsändare: (Det här fältet är frivilligt. Meddelande kan komma att bidra med längre behandlingstid för din beställning.)"></textarea>
  </div>
  <input class="btn rounded-0 btn-warning my-2" type="submit" value="Beställ">
</form>
    </div>
  </div>
  <div class="row">
      <div class="col-12 mt-5">
      <h5>Tidigare beställningar: </h5>
      <div class="orderHistory col-12">

      </div>
      </div>
  </div> 
</div>
        `);
        this.fetchOrderData();
  }
}