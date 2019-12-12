class Cart {
 
  constructor(){
    
    this.myCart = [];
    this.addclearCartbtn();  
    this.load();
    this.renderOnDropdown();    
    this.renderTotalUnit();
    Cart.render =()=>this.render();    
 }
 
  load(){
    
    try{ 
      let data = JSON.parse(localStorage.Cart);
      for (let {id, name, image, price, unit} of data){
        this.myCart.push(new CartItem(id, name, image, price, unit));      
      }       
    } catch(e){
      
    }      
  }

  addclearCartbtn(){
   $('body').on('click', `#removeBtn`, e => {    
     e.preventDefault();
     this.clearCart();
   });  
 }
 
 clearCart(){
   localStorage.clear(); 
   let newApp = new App();
   return newApp   
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
    this.renderOnDropdown();
    this.TotalUnit();
    this.renderTotalUnit();
 }
 
 
 
 increaseUnit(existingProduct){
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
   let total = 0;  
   for(var i=0; i<this.myCart.length; i++){
       total += this.myCart[i].price * this.myCart[i].unit;     
   }  
     
   let numbertotal = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(total)        
  return numbertotal 
 }
 
 allMoms(){
   let totalmoms = 0;
   let total = 0;
   for(var i=0; i<this.myCart.length; i++){
     total += this.myCart[i].price * this.myCart[i].unit;   
     }  
     totalmoms = total * 0.25; 

     let numbertotalmoms = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(totalmoms)        
    return numbertotalmoms     
 }
 
 TotalUnit(){
     let totalunit = 0;
     for(var i=0; i<this.myCart.length; i++){
       totalunit += this.myCart[i].unit;   
       }  

      
      return totalunit;
 }

 renderTotalUnit(){
  document.getElementById('cartValue').innerHTML = this.TotalUnit();
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
    <div class="test">
      <div class="col"><p class="totalsumma">Total Summa: ${this.allSum()}:-</p>
    <p class="totalsumma">Moms: ${this.allMoms()}:-</p>
    <a type="button" class="btn btn-warning" href="#varukorg">Gå till kundkorgen</a></div>
    </div>
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
    <section class="col">
      <h1>Tomt</h1>
    </section>
    </section>
  `);
    } else {
      $('main').html(`
      <div class="container">
  <div class="row pt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
    <div class="row">
    
    <div class="col-2">
        
    </div>
    <div class="kundkorgTop col-3">
        Namn
    </div>
    <div class="kundkorgTop col-2">
        Antal
    </div>
    <div class="kundkorgTop col-2">
        Pris/st
    </div>
    <div class="kundkorgTop col-2">
        Totalt
    </div>
    <div class="col-1">
        
    </div>
    </div>
    
   <div class="row">
      <div class="col-12 pt-5">
      ${this.myCart.map(item => item.render()).join('')}
      </div>
   </div>
    
    
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
    <div class="hej3 row">
    <div class="col-12">
    <div class="float-right">Total Summa: <span>${this.allSum()}</span><span>:-</span></div><br>
    <div class="float-right">Moms: <span>${this.allMoms()}</span><span>:-</span></div><br>
    <button id="removeBtn" class="btn btn-warning my-2 rounded-0 float-right"><i class="far fa-trash-alt"></i> Töm varukorg</button>
    <a type="button" id="orderBtn" class="btn btn-warning my-2 mr-3 rounded-0 float-right" href="#orderformular">Gå till kassan</a>
    </div>
  </div>
  </div>
  </div>
</div>



  `);
    } 
    
    $('main').removeClass('startsida')
}
}

