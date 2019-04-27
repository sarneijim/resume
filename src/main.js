import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom-style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slick from 'vue-slick';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
