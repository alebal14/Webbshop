class CartItem{

    constructor(id, name, image, price, unit){
        this.id = id;
        this.name = name;        
        this.price = price;
        this.unit = unit;  
        this.image = image;
    }

    loadCart(){
        let mydata= JSON.parse(localStorage.getItem(this.myCart));
      }

      clearCartitem(){
        //lägg till knapp+knyta till localstorages 
        localStorage.removeItem('myItem');
      }
     
   render(){
    return `
    <div class="col-12 text-center">
    <ul class="cartlist d-flex justify-content-between">
        <li class="list-inline-item"><p>#ID: ${this.id}</p></li>
        <li class="list-inline-item"><p>Produkt: ${this.name}</p></li>
        <li class="list-inline-item"><p>Pris: ${this.price}:-</p></li>
        <button onclick="negCartCounter()"><i class="fas fa-minus"></i></button>
        <li class="list-inline-item"><p>Antal: ${this.unit}</p></li>  
        <button onclick="cartCounter()"><i class="fas fa-plus"></i></button>
        <li class="list-inline-item"><img class="img-fluid border border-primary rounded" src="${this.image}"></li>      
    </ul>      
    </div>
  `
} 
}
