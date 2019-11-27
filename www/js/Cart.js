
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
  let totalmoms;
  for(var i=0; i<this.myCart.length; i++){
      total += this.myCart[i].price * this.myCart[i].unit;
      console.log(total);      
  }
  totalmoms = total * 0.25; 
      console.log(totalmoms);
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
    <button id="removeBtn" class="btn btn-primary my-2">Remove</button>
  `);
    $('main').removeClass('startsida')
}
}