class AboutUs {

  /*
    I am an About Us page.
    I display info about us.
  */

  render() {
    $('#link2').addClass('active')
    $('main').removeClass('startsida');
    $('main').html(/*html*/`
    <section class="container omossbg">
    <section class="row">
      <section class="col-sm-12 col-md-6 col-lg-4 text-center ">
        <div class="omossbild" id="bild1"><img class ="img-about" src="https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111" alt="jerry1"></div>
        <div class="omosstext">
          <h1>Alexandra</h1>
          <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the dude talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </div>
      </section>
      <section class="col-sm-12 col-md-6 col-lg-4 text-center">
        <div class="omossbild" id="bild2"><img class ="img-about" src="https://pixel.nymag.com/imgs/daily/vulture/2017/08/18/recaps/18-rick-and-morty-305.w700.h700.jpg" alt="jerry2"></div>
        <div class="omosstext">
          <h1>Marcus</h1>
          <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. </p>
        </div>
      </section>
      <section class="col-sm-12 col-md-6 col-lg-4 text-center">
        <div class="omossbild" id="bild3"><img class ="img-about" src="https://media0dk-a.akamaihd.net/87/63/fedc6fee714d51890e5955f20ffa968d.jpg" alt="jerry"></div>
        <div class="omosstext">
          <h1>Anton</h1>
          <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
        </div>
      </section>
    </section>
  </section>
    `);

  }

}