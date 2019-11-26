class CartItem{

    constructor(id,name, img, price, unit){
        this.id = id;
        this.name = name;        
        this.price = price;
        this.unit = unit;  
         
    }
    
    loadCart(){
        let mydata= JSON.parse(localStorage.getItem(this.myCart));
      }

   render(){
    return `
    <div class="col-12">
    <ul class="cartlist list-inline">
        <li class="list-inline-item"><p>${this.id}</p></li>
        <li class="list-inline-item"><p>${this.name}</p></li>
        <li class="list-inline-item"><p>${this.price}</p></li>
        <li class="list-inline-item"><p>${this.unit}</p></li>        
    </ul>      
    </div>
  `
}
}
 
      
