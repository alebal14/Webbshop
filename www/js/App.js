class App {

  constructor() {
    this.routes = {
      '': new StartPage(),
      'omoss': new AboutUs(),      
      'page404': new Page404(),
      'orderformular': new OrderFormular()
    };
    this.cart = new Cart();
    $(window).on('hashchange', () => this.changeRoute());
    this.loadProducts();    
    store.orderArray = store.orderArray || [];
    this.navbarAnimationListener();
    this.smallNavbarAnimationListener();
  }
  navbarAnimationListener(){
  $('li').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
}

smallNavbarAnimationListener(){
$('.navbar-nav>li>a').on('click', () => {
  if (matchMedia('only screen and (max-width: 992px)').matches) {
  setTimeout(() =>  $('.navbar-collapse').collapse('hide'), 600);
  setTimeout(() =>  $('.slide').hide(), 600);
  $('.slide').show(); }
});
}

  changeRoute() {
    let hash = location.hash.replace(/#/g, '');
    let hashFirstPart = hash.split('-')[0];
    let pageToShow = this.routes[hash] || this.routes.page404;
    $('header nav a').removeClass('active');
    $(`header nav a[href="#${hashFirstPart}"]`).addClass('active');
    pageToShow.render();
  }

  async loadProducts() {
    let productsData = await $.getJSON('/json/products.json');
    this.products = [];
    for (let productData of productsData) {
      let product = new Product(productData, this.cart);
      this.products.push(product);
      this.routes[product.slug] = product;
    }
    this.routes.produkter = new ProductList(this.products);
    this.routes.varukorg = this.cart;   
    this.changeRoute();
  }
}

