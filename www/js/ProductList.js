class ProductList {

  constructor(products) {
    this.products = products;
  }

  render() {
  	$('#link3').addClass('active')
    $('main').removeClass('startsida');
    $('main').html(`
      <section class="row">
        <div class="col">
          <h1>Våra produkter</h1>
        </div>
      </section>
      <section class="row">
        <!-- Notice the "loop" using the array map method -->
        ${this.products.map(product => product.renderInList()).join('')}
      </section>
    `);
  }

}