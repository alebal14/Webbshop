class CartItem {

    constructor(id, name, image, price, unit ){       
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
    
    loadCart(){
      let mydata = JSON.parse(localStorage.getItem('Cart'));
      this.negCartCounter(mydata);
      this.cartCounter(mydata);
      return mydata;
    }


      clearCartitem(){        
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
                    
            const item = this;
            item.unit--
            mydata.splice(
              mydata.findIndex(item => item.id === this.id),
              item
            );     
            mydata.push(item);
            localStorage.setItem('Cart',JSON.stringify(mydata));
            this.newCart();
          });  
        }

        cartCounter(mydata){
          $('body').on('click', `#cartCounter-${this.id}`, e => { 
              e.preventDefault();             
                       
              const item = this;
              item.unit++
                 
              mydata.push(item);
              localStorage.setItem('Cart',JSON.stringify(mydata));
             
            });  
          }
     
       newCart(){
        let cart = new Cart();
        return cart;
       }
        

   render(){
    return `
    <div class="col-12">
    <ul class="cartlist list-inline">
        <li class="list-inline-item"><img class="img-fluid border border-primary" src="${this.image}"></li>  
        <li class="list-inline-item"><p>${this.name}</p></li>
        <button onclick="negCartCounter()"><i class="fas fa-minus"></i></button>
        <li class="list-inline-item"><p>${this.unit}</p></li>
        <button id="cartCounter-${this.id}"><i class="fas fa-plus"></i></button>  
        <li class="list-inline-item"><p>${this.price}<span>:-/st</span></p></li>
        <li class="list-inline-item"><p>Totalt: ${this.prodTotal()}<span>:-</span></li>                     
    </ul>
    </div>`  
}

renderCartItemonDropdown(){
  return `
  <div class="col-12 sm-3">
  <table class="table table-striped">
  <tbody>
    <tr>
      <td id="bild1"><img class="img-fluid border border-primary" src="${this.image}"></td>
      <td id="cell">${this.name}</td>
      <td id="cell">${this.price}:-</td>
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


 
      
