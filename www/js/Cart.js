
class Cart {

 constructor(){
   this.myCart = [];
   store.currentCartValue = 0;
 }
 
  
add(cartItem) {
   this.myCart.push(cartItem);     
   this.saveCart();
   cartCounter();
}



saveCart(){
localStorage.setItem('Cart',JSON.stringify(this.myCart));
localStorage.setItem('currentCartValue', store.currentCartValue);
}

allSum(){
  //summering av alla priser
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
    <button onclick="clearCart()">Clear local</button>
  `);
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