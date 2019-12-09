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
    <div class="row">
    <div class="hej2 col-2">
    <li class="list-inline-item"><img class="img-fluid border border-primary" src="${this.image}"></li>
    </div>
    <div class="hej col-3">
    <li class="list-inline-item"><p>${this.name}</p></li>
    </div>
    <div class="hej col-2">
    <i id="minus" class="fas fa-minus"></i>
 </span>${this.unit}<span onclick="cartCounter()">
 <i id="plus" class="fas fa-plus"></i> 
    </div>
    <div class="hej col-2">
    <li class="list-inline-item"><p>${this.price}<span>:-/st</span></p></li>
    </div>
    <div class="hej col-2">
    <li class="list-inline-item"><p>Totalt: ${this.prodTotal()}<span>:-</span></li>
    </div>
    <div class="hej col-1">
    <i class="fas fa-trash-alt"></i>
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


 
      
