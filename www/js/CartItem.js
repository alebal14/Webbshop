class CartItem {

    constructor(id, name, image, price, unit){       
        this.id = id;
        this.name = name;        
        this.price = price;
        this.unit = unit;  
        this.image = image;        
        this.loadCart();    
        this.negCartCounter();      
        
    }
    
      loadCart(){
        let mydata= JSON.parse(localStorage.getItem(this.myCart));
        return mydata;
      }

      clearCartitem(){
        //lägg till knapp+knyta till localstorages 
        localStorage.removeItem('cartItem');
      }

      prodTotal(){
        //summering av alla priser
        let totalprice = 0;  
        totalprice = this.unit * this.price;         
        return totalprice  
      }

      negCartCounter(){
        $('body').on('click', `#negCartCounter-${this.id}`, e => { 
            e.preventDefault();             
              //let amount = this.unit;
              //amount--
              //this.myCart.splice(this.unit, amount);              
              //console.log(this.unit);         
          });  
        }
     

   render(){
    return `
    <div class="col-12">
    <ul class="cartlist list-inline">
        <li class="list-inline-item"><img class="img-fluid border border-primary" src="${this.image}"></li>  
        <li class="list-inline-item"><p>${this.name}</p></li>
        <button onclick="negCartCounter()"><i class="fas fa-minus"></i></button>
        <li class="list-inline-item"><p>${this.unit}</p></li>
        <button onclick="cartCounter()"><i class="fas fa-plus"></i></button>  
        <li class="list-inline-item"><p>${this.price}<span>:-/st</span></p></li>
        <li class="list-inline-item"><p>Totalt: ${this.prodTotal()}<span>:-</span></li>                     
    </ul>
    </div>`  
}

renderCartItemonDropdown(){
  return `
  <div class="col-9 mb-1">
  <ul class="cartDrop list-inline">
      <li class="list-inline-item"><img class="img-fluid border border-primary" src="${this.image}"></li>  
      <li class="list-inline-item"><p class="cartp">${this.name}</p></li>
      <button onclick="negCartCounter()"><i class="fas fa-minus"></i></button>
      <li class="list-inline-item"><p class="cartp">${this.unit}</p></li>
      <button onclick="cartCounter()"><i class="fas fa-plus"></i></button> 
      <li class="list-inline-item"><p class="cartp">${this.price}<span>:-/st</span></p></li>
      <li class="list-inline-item"><p class="cartp">Totalt: ${this.prodTotal()}<span>:-</span></p></li>             
  </ul>      
  </div>`
}

}


 
      
