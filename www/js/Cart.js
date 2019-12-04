
class Cart {
  /*

    I am a Cart.

    I want to be a shopping-cart
    but so far I am really stupid... 😢
  */
 constructor(){
   this.myCart = [];   
   store.currentCartValue = 0;
   this.clearCart();     
 }


 clearCart(){
  $('body').on('click', `#removeBtn`, e => {    
    e.preventDefault();
    localStorage.clear();    
    new App();
  });  
}

 add(cartItem) {
  const existingProduct = this.myCart.length && this.myCart[this.myCart.findIndex(product => product.id === cartItem.id)];

    if(existingProduct) {
      this.increaseUnit(existingProduct);
    }
    else {
      cartItem.unit = 1;
      this.myCart.push(cartItem); 
    }
   this.saveCart(); 
   cartCounter();   
   this.allSum();  
   this.allMoms();   
   this.renderOnDropdown();
  //  this.pass();
}

increaseUnit(existingProduct)
{
  existingProduct.unit++;
  this.myCart.splice(
    this.myCart.findIndex(product => product.id === existingProduct.id),
    existingProduct
  );
}


saveCart(){
localStorage.setItem('Cart',JSON.stringify(this.myCart));
localStorage.setItem('currentCartValue', store.currentCartValue);
}

allSum(){
  //summering av alla priser
  let total = 0;  
  for(var i=0; i<this.myCart.length; i++){
      total += this.myCart[i].price * this.myCart[i].unit;     
  }  
  return total  
}

allMoms(){
  let totalmoms = 0;
  let total = 0;
  for(var i=0; i<this.myCart.length; i++){
    total += this.myCart[i].price * this.myCart[i].unit;   
    }  
    totalmoms = total * 0.25; 
    return totalmoms
}

renderOnDropdown(){
  //render varukorg på dropdown i nav
  $('#cartdropdown').html(` 
  <div class="col">  
  <table class="table mb-0">
  <thead>
    <tr>
      <th id="bild1" scope="col"></th>
      <th id="cell" scope="col">Artikel</th>
      <th id="cell" scope="col">pris</th>
      <th id="cell" scope="col">Antal</th>
    </tr>
  </thead>
  </table>
  </div>
  
      ${this.myCart.map(item => item.renderCartItemonDropdown()).join('')}
    <div class="col"><p class="totalsumma">Total Summa: ${this.allSum()}:-</p>
    <p class="totalsumma">Moms: ${this.allMoms()}:-</p>
    <a type="button" class="btn btn-warning" href="#varukorg">Gå till kundkorgen</a></div>
  `);
}

render() {
  $('#link4').addClass('active')
    if(this.myCart.length === 0){
      $('main').html(`
    <section class="row">
      <div class="col">
        <h1>Varukorgen</h1>
      </div>
    </section>    
    <section class="row">
      <h1>Tomt</h1>
    </section>
    
  `);
    } else {
      $('main').html(`
    <section class="row">
      <div class="col">
        <h1>Varukorgen</h1>
      </div>
    </section>    
    <section class="row">
      <!-- Notice the "loop" using the array map method -->      
      ${this.myCart.map(item => item.render()).join('')}
    </section>
    <div class="float-right">Total Summa: <span>${this.allSum()}</span><span>:-</span></div><br>
    <div class="float-right">Moms: <span>${this.allMoms()}</span><span>:-</span></div><br>
    <button id="removeBtn" class="btn btn-warning my-2 rounded-0 float-right">Töm varukorg</button>
    <button type="button" id="orderBtn" class="btn btn-warning my-2 mr-3 rounded-0 float-right" href="#orderformular">Gå till kassan</button>
  `);
    } 
    
    $('main').removeClass('startsida')
}
}

function clearCart(){
  localStorage.clear();
  alert('Local storage rensat lol');
  document.getElementById('cartValue').innerHTML = (store.currentCartValue = 0);
}
function cartCounter(){
  store.currentCartValue++
  document.getElementById('cartValue').innerHTML = (store.currentCartValue);
}
function negCartCounter(){
  if (store.currentCartValue > 0){
  store.currentCartValue--
  document.getElementById('cartValue').innerHTML = (store.currentCartValue);
}
else{
  store.currentCartValue = 0;
  alert('Inga varor i varukorgen!');
}
}



