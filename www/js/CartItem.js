class CartItem {

    constructor(id, name, image, price, unit, vikt, discount){       
      this.id = id;
      this.name = name;        
      this.price = price;
      this.unit = unit;  
      this.image = image;
      this.vikt = vikt;
      this.discount = discount;          
      this.cartCounter(); 
      this.negCartCounter();
      this.deleteItem();
        
}
    
    negCartCounter(){
      $('body').on('click', `#negCartCounter-${this.id}`, e => { 
          this.unit--;
          this.unit < 1 &&  $(`#deleteitem-${this.id}`).click();
          Cart.currentCart.update();          
        });  
      }

      cartCounter(){
        $('body').on('click', `#cartCounter-${this.id}`, e => { 
            this.unit++     
            Cart.currentCart.update();                          
          });  
        }

        deleteItem(){
          $('body').on('click', `#deleteitem-${this.id}`, e => { 
            let mydata = Cart.currentCart.myCart
            let delitem = mydata.findIndex(item => item.id === this.id);
            mydata.splice(delitem, 1);
            Cart.currentCart.update();
          }); 
        }
       
        prodTotal(){
          //summering av alla priser
          
          let total = 0;
          let rowSum = this.price * this.unit;
            let [discountQuantity, _for] = this.discount || [];
              if (discountQuantity) {  
                let tclass =  $(`.tclass-${this.id}`); 
                     
              let numberOfDiscounts = Math.floor(this.unit / discountQuantity);
              let discountSum = numberOfDiscounts * this.price * (discountQuantity - _for);               
              rowSum -= discountSum;             
              
            }
            
            total += rowSum;  
            return total
            
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
    <li class="test2 list-inline-item"><p>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.price)}<span>/st</span></p></li>
    </div>
    <div class="test2 col-12 col-sm-2">    
    <li class="list-inline-item tclass-${this.id}" style="background-color: white;"><p>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.prodTotal())}<span></span></li>    
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
      <td id="cell">${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.price)}</td>
      <td id="cell"> <span>${this.unit}
</span> </td>
    </tr>
  </table>
  </div>
  `
}
}



 
      
