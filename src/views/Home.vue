<template>
  <div class="row m-0">

    <!-- badge derive suburbane -->
    <div class="col-md-6 col-lg-6 p-0 d-none d-md-block pt-5 pb-5 mt-5 h-75">
        <img class="img-fluid img-overlay h-100 w-100" src="assets/derivesuburbane_screen_web.png">
        <div class="overlay position-relative"></div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 px-lg-5 pt-lg-5 pb-5 mt-lg-5 h-75">
        <div class="d-block pt-5 pb-3 store-badge h-100">
          <h1 class="text-overlay text-left font-weight-bold">Derive suburbane new tab</h1>
          <p class="lead text-left">Customize your browser home screen experience with urbex wallpapers from <a href="https://derivesuburbane.it">https://derivesuburbane.it</a></p>
          
          <div class="row m-0">
            <div class="col-6 p-0 text-left">
            <a href="#" class="chrome-badge" target="_blank">
              <img src="assets/ChromeWebStore_Badge_v2_496x150.png" class="img-fluid chrome" width="180">
            </a>
            </div>
            <div class="col-6 p-0">
            <a href="#" class="moz-badge">
              <img src="assets/get-the-addon.png" class="img-fluid moz" width="180">
            </a> 
            </div>
          </div>

        </div>
        <small class="text-left d-block"><a ref="" @click.prevent="detailsPanel($event.target)" data-extension-name="derive-suburbane">Description</a></small>
    </div>

    <div class="col-md-12 col-lg-12 text-left px-lg-5">
      <h4 class="font-weight-bold">Products showcase</h4>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 pt-5 pb-5 mt-md-5 p-0 product-overview vh-75">
      <h2 class="text-left text-lg-center px-3"><img class="img-fluid d-none d-md-inline-block ext-icon" src="assets/raiplay_party.png" width="45"> Raiplay downloader</h2>
      <p class="lead text-left text-lg-center px-3">Create video party with friends while watching raiplay!<p>
      
      <div class="row m-0">
        <div class="col-6 px-sm-2 p-md-0 text-left text-lg-center">
        <a href="https://chrome.google.com/webstore/detail/raiplay-downloader/mjmldbaenmnkmefmakoiefnkcbhckbpe" target="_blank">
          <img src="assets/ChromeWebStore_Badge_v2_496x150.png" class="img-fluid" width="180">
        </a>
        </div>
        <div class="col-6 px-sm-2 p-md-0 text-lg-center">
        <a href="#">
          <img class="img-fluid" src="assets/get-the-addon.png" width="180">
        </a>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 pt-5 pb-5 mt-md-5 p-0 product-overview vh-75">
      <h2 class="text-left text-lg-center px-3"><img class="img-fluid d-none d-md-inline-block ext-icon" src="assets/instagram_watcher_icon.png" width="45"> Instagram watcher</h2>
      <p class="lead text-left text-lg-center px-3">Watch public Instagram profiles without login</p>
      
      <div class="row m-0">
        <div class="col-6 px-sm-2 p-md-0 text-left text-lg-center">
        <a href="https://chrome.google.com/webstore/detail/instagram-watcher/plbmepbldbcfnjekckmcemchpakiofdd" target="_blank">
          <img class="img-fluid" src="assets/ChromeWebStore_Badge_v2_496x150.png" width="180">
        </a>
        </div>
        <div class="col-6 px-sm-2 p-md-0 text-lg-center">
        <a href="#">
          <img src="assets/get-the-addon.png" class="img-fluid" width="180">
        </a>
        </div>  
      </div>
    </div>

    <transition name="slide">
      <div class="col-sm-12 col-md-12 col-lg-12 description-panel position-fixed text-white px-lg-5 pt-lg-5 pb-lg-5" ref="elementDescription" v-if="isVisible">
        <button type="button" class="close" aria-label="Close" @click.prevent="closePanel()">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="" v-show="isVisible" v-for="(item, index) in details" :key="index">
        <h1 class="text-capitalize" v-if="item.title">{{ item.title }}</h1>
        <p class="lead" v-if="item.description">{{ item.description }}</p>
        </div>      
      </div>
    </transition>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      isVisible: false,
      details: []
    }
  },
  methods: {
    detailsPanel(evt) {
      this.isVisible ? this.isVisible = false : this.isVisible = true;
      let extension = evt.dataset.extensionName.split('-').join(' ');
      fetch('products.json')
      .then( (res) => res.json() )
      .then( (data) => { 
        console.log(data.products);
        this.details = data.products.filter( (item) => {
          console.log(item);
          if( item.title === extension ){
            return item;
          }
        });
      })
    },
    closePanel() {
      this.isVisible ? this.isVisible = false : this.isVisible = true;
    }
  }
}
</script>

<style lang="scss" scoped>

.description-panel {
    background: rgba(0,0,0,0.5);
    height: 100%;
    top: 0;
    width: 100%;
}


.slide-enter-active {
  transition: transform 1s;
  animation: slide-in;
  animation-duration: 1s;
}
.slide-leave-active {
  animation: slide-out;
  animation-duration: 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

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