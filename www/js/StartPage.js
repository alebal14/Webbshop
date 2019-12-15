class StartPage {
  render() {
    $('#link1').addClass('active')
    $('main').addClass('startsida')
    $('main').html(/*html*/`
      <section class="row startrow align-items-center">
        <div class="col text-center">
          <h1 class="logotext">Välkommen!</h1>
          <img class="col-4 logotypestart" src="images/SpiksonaPNG/Spiksonaoutline.png">
        </div>
      </section>
    `);

  }

}