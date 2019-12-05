class ProductList {

  constructor(products) {
    this.products = products;
  }

  render() {
  	$('#link3').addClass('active')
    $('main').removeClass('startsida');
    $('main').html(`
      <section class="row">
        <div class="col text-center mt-3">
          <h1 class ="productRubrik">Våra produkter</h1>
        </div>
      </section>
      <section class="row">
        ${this.products.map(product => product.renderInList()).join('')}
      </section>
    `);
  }

}