
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
}


saveCart(){
localStorage.setItem('Cart',JSON.stringify(this.myCart));
}

render() {
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
}

  

}