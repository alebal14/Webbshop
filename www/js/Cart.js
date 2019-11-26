
class Cart {

 

  /*

    I am a Cart.

    I want to be a shopping-cart
    but so far I am really stupid... 😢
  */


 constructor() {
  // Object.assign is used to copy all properties from data to me
  this.myCart = [];
}
 
 
add(product) {
  let CartItem = product;
  this.myCart.push(product); 
  this.saveCart();
  document.getElementById("cartValue").innerHTML = this.myCart.length;
  console.log(this.myCart);  
}

saveCart(){
  localStorage.setItem('Cart',JSON.stringify(this.myCart));
}

cartlist(){

}



deleteCartItem(){

}
  
  

render() {
  // This is how I render myself on a product-detail page
  // there it only me
  $('main').html/*html*/
    for (var i = 0; i < localStorage.length; i++){
    $('body').append(localStorage.getItem(localStorage.key(i)));
}
  ;
}

  

}