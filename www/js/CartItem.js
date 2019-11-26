class CartItem{

    constructor(id,name, img, price, unit){
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.unit = unit;
        console.log("myid", id);
    }

    render() {
        // This is how I render myself on a product-detail page
        // there it only me
        return this.id;
      
      }



}