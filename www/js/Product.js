class Product {

  constructor(data, cart) {
    Object.assign(this, data);
    this.cart = cart;
    this.addBuyButtonListener();
  }

  addBuyButtonListener() {
 
    $('body').on('click', `#buy-button-${this.id}`, e => {
      e.preventDefault();
      
      this.cart.add(new CartItem(this.id, this.name, this.image, this.price));  

      $(`#animationImage-${this.id}`).animate({
        top: "-20%", left: "120%",width: "1px", height: "1px", borderRadius: "50%"
      }, 
      500, function () { $(this).removeAttr('style'); });
    });

  }

  render() {
    $('main').removeClass('startsida');
    $('main').html(/*html*/ `<section class="row">
        <div class="col">
          <h1>${this.name}</h1>
        </div>
      </section>
      <section class="row">
        <div class="col-12 col-lg-9">
          <p>${this.description}</p>
          <h4>${this.price}:-</p>
          <button id="buy-button-${this.id}" class="btn rounded-0 btn-warning my-2">Köp</button>
        </div>
        <div class="col-12 col-lg-3 view overlay">
        <img class="img-fluid border border-primary animationImage" id="animationImage-${this.id}" src="${this.image}">
        </div>
      </section>
    `);
  }

  renderInList() {
    return `
      <div class="col-12 col-md-6 col-lg-4 mt-5">
        <a href="#${this.slug}">
          <h4>${this.name} ${this.price}:-</h4>
          <button id="buy-button-${this.id}" class="btn rounded-0 float-right btn-warning my-2">Köp</button>
          <section class="productImage">
          <img class="img-fluid border border-primary displayImage" src="${this.image}">
          <img class="img-fluid border border-primary animationImage" id="animationImage-${this.id}" src="${this.image}">
          </section>
        </a>
      </div>
    `
  }  
}