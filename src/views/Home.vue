<template>
  <div class="row m-0">

    <!-- badge derive suburbane -->
    <div class="col-md-6 col-lg-6 p-0 d-none d-md-block pt-5 pb-5 mt-5 h-75">
        <img class="img-fluid img-overlay h-100 w-100" src="assets/derivesuburbane_screen_web.png">
        <div class="overlay position-relative"></div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 px-5 pt-5 pb-5 mt-5 h-75">
        <div class="d-block pt-5 pb-5 store-badge h-100">

          <h1 class="text-overlay font-weight-bold">Derive suburbane new tab</h1>
          <p class="lead lead-absolute">Customize your browser home screen experience with urbex wallpapers from <a href="https://derivesuburbane.it">https://derivesuburbane.it</a></p>

          <a href="#" class="chrome-badge" target="_blank">
            <img src="assets/ChromeWebStore_Badge_v2_496x150.png" class="" width="180">
          </a>
          <a href="#" class="moz-badge">
            <img src="assets/get-the-addon.png" class="" width="180">
          </a>  
        </div>
    </div>

    <div class="col-md-12 col-lg-12 text-left px-5">
      <h4 class="font-weight-bold">Products showcase</h4>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 pt-5 pb-5 mt-5 p-0 product-overview vh-75">
      <h2><img src="assets/raiplay_party.png" width="60"> Raiplay downloader</h2>
      <p class="lead">Create video party with friends while watching raiplay!<p>
      
      <div class="d-block mt-5 pt-5 pb-5">
        <a href="https://chrome.google.com/webstore/detail/raiplay-downloader/mjmldbaenmnkmefmakoiefnkcbhckbpe" target="_blank">
          <img src="assets/ChromeWebStore_Badge_v2_496x150.png" class="" width="180">
        </a>
        <a href="#">
          <img src="assets/get-the-addon.png" class="" width="180">
        </a>  
      </div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 pt-5 pb-5 mt-5 p-0 product-overview vh-75">
      <h2><img src="assets/instagram_watcher_icon.png" width="60"> Instagram watcher</h2>
      <p class="lead">Watch public Instagram profiles without login</p>
      
      <div class="d-block mt-5 pt-5 pb-5">
        <a href="https://chrome.google.com/webstore/detail/instagram-watcher/plbmepbldbcfnjekckmcemchpakiofdd" target="_blank">
          <img src="assets/ChromeWebStore_Badge_v2_496x150.png" class="" width="180">
        </a>
        <a href="#">
          <img src="assets/get-the-addon.png" class="" width="180">
        </a>  
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.product-overview {
  background: gainsboro;
}
.featured-product-overview {
  background: white;
  .img-overlay {
    left: 0;
  }
  .text-overlay {
    z-index: 1;
    left: 0;
    right: 0;
    margin: 1em 0 0 0;
  }
  .store-badge {
    right: 0;
    z-index: 1;
    text-align: end;
    background-color: white;
    a.chrome-badge {
      z-index: 2;
    }
    a.moz-badge {
      z-index: 2;
    }
  }
  .overlay {
  top: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
}
}

</style>