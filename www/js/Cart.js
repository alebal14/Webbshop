let myCart = [];
class Cart {

 

  /*

    I am a Cart.

    I want to be a shopping-cart
    but so far I am really stupid... 😢
  */
convertAsString(myCart) {
  return myCart.length.toString();
}
 
 
add(product) {

  let CartItem = product;
  myCart.push(product);
  
  console.log(CartItem);
  console.log(myCart);
  this.saveCart();
  document.getElementById("cartValue").innerHTML = myCart.length;
}

saveCart(){
  localStorage.setItem("items", JSON.stringify(myCart));
  localStorage.setItem("quantity", JSON.stringify(myCart.length));
  console.log('Nånting');
// =======

 

 
 
// add(product) {
//   let CartItem = product;
//   myCart.push(product); 
//   this.saveCart();
//   console.log(myCart);  
// }

// saveCart(){
//   localStorage.setItem('Cart',JSON.stringify(myCart));
// >>>>>>> f498e8a5844152de282f29a0564c1dc08c1d434c
}

cartlist(){

}

loadCart(){

}

deleteCartItem(){
  localStorage.clear();
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