import Vue from 'vue'
import App from './App.vue'
import Apptest from './Apptest.vue'
import App_Slide from './App_Slide.vue'
import App_Nav from './App_Nav.vue'
import App_Page from './App_Page.vue'
import animated from 'animate.css'
Vue.config.productionTip = false
Vue.use(animated)
new Vue({
  // render: h => h(Apptest),
  // render: h => h(App),
  render: h => h(App_Page),
  // render: h => h(App_Slide),
  // render: h => h(App_Nav),
}).$mount('#app')
