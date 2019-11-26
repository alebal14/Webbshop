class CartList {

     
    constructor(cartlist) {
      this.cartlist = cartlist;
    }
  
    render() {
      $('main').html(`
        <section class="row">
          <div class="col">
            <h1>Våra produkter</h1>
          </div>
        </section>
        <section class="row">
          <!-- Notice the "loop" using the array map method -->
          ${this.cartlist.map(cartlists => cartlists.renderInList()).join('')}
        </section>
      `);
    }
  
  }