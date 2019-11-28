class CartItem{

    constructor(id, name, image, price, unit){
        this.id = id;
        this.name = name;        
        this.price = price;
        this.unit = unit;  
        this.image = image;  
        this.loadCart();
                  
    }
    
      loadCart(){
        let mydata= JSON.parse(localStorage.getItem(this.myCart));
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
     
   render(){
    return `
    <div class="col-12">
    <ul class="cartlist list-inline">
        <li class="list-inline-item"><img class="img-fluid border border-primary rounded" src="${this.image}"></li>  
        <li class="list-inline-item"><p>${this.name}</p></li>
        <button onclick="negCartCounter()"><i class="fas fa-minus"></i></button>
        <li class="list-inline-item"><p>${this.unit}</p></li>
        <button onclick="cartCounter()"><i class="fas fa-plus"></i></button> 
        <li class="list-inline-item"><p>${this.price}<span> Kr</span></p></li>
        <li class="list-inline-item"><p>${this.prodTotal()}<span> Kr</span></li>
                     
    </ul>      
    </div>
  `
} 
}
