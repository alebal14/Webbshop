
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
   this.myCart.push(cartItem);     
   this.saveCart();
   this.allSum();
   
}

clearCart(){
  //lägg till en knapp
  localStorage.clear()
}

saveCart(){
localStorage.setItem('Cart',JSON.stringify(this.myCart));
}

allSum(){
  //summering av alla priser
  let total = 0;
  let totalmoms;
  for(var i=0; i<this.myCart.length; i++){
      total += this.myCart[i].price;
      console.log(total);

      totalmoms = total * 0.25; 
      console.log(totalmoms);
  }
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
  `);
    $('main').removeClass('startsida')
}

  

}