
class Cart {
  /*

    I am a Cart.

    I want to be a shopping-cart
    but so far I am really stupid... 😢
  */
 constructor(){
   this.myCart = [];   
   
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
 
   this.allSum();  
   this.allMoms();
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

showOnDropDown(){
  //render varukorg på dropdown i nav
}

render() {
  $('#link4').addClass('active')
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
    <div class="float-right">Total Summa: <span>${this.allSum()}</span><span>KR</span></div><br>
    <div class="float-right">Moms: <span>${this.allMoms()}</span><span>KR</span></div><br>
    <button id="removeBtn" class="btn btn-primary my-2 float-right">Remove</button>
  `);
    $('main').removeClass('startsida')
}
}