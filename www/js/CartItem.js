class CartItem {

    constructor(id, name, image, price, unit){       
        this.id = id;
        this.name = name;        
        this.price = price;
        this.unit = unit;  
        this.image = image;
        this.loadCart();  
        this.deleteItem();  
        
}
    
loadCart(){

  try{ 
    let mydata = JSON.parse(localStorage.getItem('Cart'));
  this.negCartCounter(mydata);
  this.cartCounter(mydata);       
          
  } catch(e){
    
  } 
   
}


    negCartCounter(mydata){
      $('body').on('click', `#negCartCounter-${this.id}`, e => { 
          e.preventDefault();
                  
          const item = this;
          item.unit--

          if(this.unit > 0){
            mydata.splice(
              mydata.findIndex(item => item.id === this.id),
              item);  
                       
          } else {
             localStorage.removeItem('Cart'); 
          }
          
          localStorage.setItem('Cart', JSON.stringify(mydata));
          Cart.render();
          
          //mydata.push(item);
          //localStorage.setItem('Cart',JSON.stringify(mydata)); 
          
        });  
      }

      cartCounter(mydata){
        $('body').on('click', `#cartCounter-${this.id}`, e => { 
            e.preventDefault();             
                     
            const item = this;
            item.unit++
            
            Cart.render();

            //mydata.push(item);
            //localStorage.setItem('Cart',JSON.stringify(mydata));  
                         
          });  
        }

        deleteItem(){
          $('body').on('click', `#deleteitem-${this.id}`, e => { 
            e.preventDefault();

            localStorage.removeItem('Cart');
            

          }); 
        }
       

        priceFormat(){
          let fprice = this.price;
          let numberfprice = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(fprice)        
          return numberfprice
        }
        
        clearCartitem(){        
          localStorage.removeItem('cartItem');
        }
    
        prodTotal(){
          //summering av alla priser
          let totalprice = 0;  
          totalprice = this.unit * this.price; 
          let numbertotalprice = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(totalprice)        
          return numbertotalprice 
        }
     

   render(){
    return `
    <div class="row">
    <div class="col-12 col-sm-2">
    <li class="list-inline-item"><img class="img-fluid border border-primary" src="${this.image}"></li>
    </div>
    <div class="test2 col-12 col-sm-3">
    <li class="list-inline-item"><p>${this.name}</p></li>
    </div>
    <div class="test2 col-12 col-sm-2"><button id="negCartCounter-${this.id}">
    <i id="minus" class="fas fa-minus"></i></button>
 <span>${this.unit}</span>
 <button id="cartCounter-${this.id}">
 <i id="plus" class="fas fa-plus"></i></button> 
    </div>
    <div class="col-12 col-sm-2">
    <li class="test2 list-inline-item"><p>${this.priceFormat()}<span>:-/st</span></p></li>
    </div>
    <div class="test2 col-12 col-sm-2">
    <li class="list-inline-item"><p>Totalt: ${this.prodTotal()}<span>:-</span></li>
    </div>
    <div class="test2 col-12 col-sm-1"><button id="deleteitem-${this.id}">
    <i class="fas fa-trash-alt"></i></button>
    </div>
    </div>
  `  
}

renderCartItemonDropdown(){
  return `
  <div class="col-12 sm-3">
  <table class="table table-striped">
  <tbody>
    <tr>
      <td id="bild1"><img class="img-fluid border border-primary" src="${this.image}"></td>
      <td id="cell">${this.name}</td>
      <td id="cell">${this.priceFormat()}:-</td>
      <td id="cell"><span onclick="negCartCounter()">
      <i id="minus" class="fas fa-minus"></i>
 </span>${this.unit}<span onclick="cartCounter()">
 <i id="plus" class="fas fa-plus"></i>
</span> </td>
    </tr>
  </table>
  </div>
  `
}
}
function popUpCall() {
  let popup = document.getElementById("myPopup");
  let executed = localStorage.getItem('executed');
  
if (executed) {
  popup.classList.remove("show");
} else {
  popup.classList.toggle("show");
  localStorage.setItem('executed', true);
}
}


 
      
