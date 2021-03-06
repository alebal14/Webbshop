class Cart {

  constructor() {
    this.myCart = [];
    this.load();
    this.orderbtn();
    this.addclearCartbtn();
    this.renderOnDropdown();
    this.renderTotalUnit();
    Cart.currentCart = this;
  }

  load() {
    try {
      let data = JSON.parse(localStorage.Cart);
      for (let { id, name, image, price, unit, vikt, discount } of data) {
        this.myCart.push(new CartItem(id, name, image, price, unit, vikt, discount));
      }
    } catch (e) {
    }
  }

  update() {
    this.saveCart();
    this.render();
  }

  addclearCartbtn() {
    $('body').on('click', `#removeBtn`, e => {
      e.preventDefault();
      this.clearCart();
    });
  }

  clearCart() {
    localStorage.clear();
    let newApp = new App();
    return newApp
  }

  add(cartItem) {
    const existingProduct = this.myCart.length && this.myCart[this.myCart.findIndex(product => product.id === cartItem.id)];

    if (existingProduct) {
      this.increaseUnit(existingProduct);
    }
    else {
      cartItem.unit = 1;
      this.myCart.push(cartItem);
    }
    this.saveCart();
    this.allSum();
    this.allMoms();
    this.TotalUnit();
    this.allFrakt();
    this.allTotal();
    this.renderOnDropdown();
    this.renderTotalUnit();
  }



  increaseUnit(existingProduct) {
    existingProduct.unit++;
    this.myCart.splice(
      this.myCart.findIndex(product => product.id === existingProduct.id),
      existingProduct
    );
  }


  saveCart(cartInfo) {
    store.cartInfo = cartInfo;
    store.save();
    localStorage.setItem('Cart', JSON.stringify(this.myCart));
  }

  allSum() {
    let total = 0;
    let cart = this.myCart;
    for (let item of cart) {
      let rowSum = item.price * item.unit;
      let [discountQuantity, _for] = item.discount || [];
      if (discountQuantity) {
        let numberOfDiscounts = Math.floor(item.unit / discountQuantity);
        let discountSum = numberOfDiscounts * item.price * (discountQuantity - _for);
        rowSum -= discountSum;
      }
      total += rowSum;
    }
    return total
  }

  allMoms() {
    let total = this.allSum();
    let totalmoms = total * 0.25;
    return totalmoms
  }

  allFrakt() {
    let frakt = 0;
    let fraktTotal = 0;
    for (var i = 0; i < this.myCart.length; i++) {
      frakt += this.myCart[i].vikt * this.myCart[i].unit;
    }
    fraktTotal = frakt * 40;
    return fraktTotal
  }

  allTotal() {
    let allfrakt = this.allFrakt();
    let allsum = this.allSum();
    let alltotal = allfrakt + allsum;
    return alltotal
  }


  TotalUnit() {
    let totalunit = 0;
    for (var i = 0; i < this.myCart.length; i++) {
      totalunit += this.myCart[i].unit;
    }

    return totalunit;
  }

  renderTotalUnit() {
    document.getElementById('cartValue').innerHTML = this.TotalUnit();
  }

  orderbtn() {
    $('body').on('click', `#orderBtn`, e => {
      let a = this.allFrakt();
      let b = this.allMoms();
      let c = this.allSum();
      let d = this.allTotal();
      let cartinfo = {};
      cartinfo['frakt'] = a;
      cartinfo['moms'] = b;
      cartinfo['summa'] = c;
      cartinfo['total'] = d;
      this.saveCart(cartinfo);
    });
  }

  renderOnDropdown() {
    if (this.myCart.length === 0) {

    } else {
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
      <div class="col"><p class="totalsumma">Summa: ${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.allSum())}</p>
    <p class="totalsumma">Moms: ${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.allMoms())}</p>
    <a type="button" class="btn btn-warning" href="#varukorg">Gå till kundkorgen</a></div>
    </div>
  `);
    }
  }

  render() {
    $('#link4').addClass('active')
    if (this.myCart.length === 0) {
      $('main').html(`
    <section class="row">
      <div class="tom col pt-3">
        <h1>Varukorgen</h1>
      </div>
    </section>    
    <section class="row">
    <section class="tom col pt-3">
      <p>Här var det tomt.</p>
    </section>
    </section>
  `);
    } else {
      $('main').html(`
      <div class="container">
      <h1>Varukorgen</h1>
      <p>Köper du 3 exemplar av samma vara så bjuder Spiksona på den 3e. Alltid! Bra va?</p>
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
    <div class="float-right">Summa: <span>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.allSum())}</span></div><br>
     <div class="float-right">Moms: <span>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.allMoms())}</span></div><br>
     <div class="float-right">Frakt: <span>${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.allFrakt())}</span></div><br>
     <div class="float-right">Totalt: ${new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(this.allTotal())} <span></span></div><br>
    <button id="removeBtn" class="btn btn-warning my-2 rounded-0 float-right"><i class="far fa-trash-alt"></i> Töm varukorg</button>
    <a type="button" id="orderBtn" class="btn btn-warning my-2 mr-3 rounded-0 float-right" href="#orderformular" >Gå till kassan</a>
    </div>
  </div>
  </div>
  </div>
</div>`);
    }

    $('main').removeClass('startsida')
  }
}

