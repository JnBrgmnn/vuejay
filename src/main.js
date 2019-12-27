import Vue from 'vue'
import App from './App.vue'
import VueCircleSlider from 'vue-circle-slider'

Vue.use(VueCircleSlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
