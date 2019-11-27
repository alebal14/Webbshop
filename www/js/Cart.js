
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

clearCart(){
  //lägg till en knapp
  localStorage.clear()
}

saveCart(){
localStorage.setItem('Cart',JSON.stringify(this.myCart));
}

allSum(){
  //summering av alla priser
}

showOnDropDown(){
  //render varukorg på dropdown i nav
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

  render() {
    // This is how I render myself on a product-detail page
    // there it only me
    $('#link4').addClass('active')
    $('main').html(/*html*/`
     <section class="row">
        <h1> This is a Cart!!</h1>
      </section>
      <section class="row">
        <div class="col">
          <h1>${this.name}</h1>
        </div>
      </section>
      <section class="row">
        <div class="col-12 col-lg-9">
          <p>${this.description}</p>
          <h4>${this.price} kr</p>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2">Köp</button>
        </div>
        <div class="col-12 col-lg-3">
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </div>
      </section>   `);
      $('main').removeClass('startsida')
  }

}