import Vue from 'vue'
import App from './App.vue'
import Apptest from './Apptest.vue'
import App_Slide from './App_Slide.vue'
import App_Nav from './App_Nav.vue'
import App_Page from './App_Page.vue'
import App_Table from './App_Table.vue'
import App_Upload from './App_Upload.vue'
import App_Sticky from './App_Sticky.vue'
import animated from 'animate.css'
import {WButton} from './index'
// Vue.use(WButton)

Vue.config.productionTip = false
Vue.use(animated)
new Vue({
  // render: h => h(Apptest),
  // render: h => h(App),
  render: h => h(App_Sticky),
  // render: h => h(App_Upload),
  // render: h => h(App_Table),
  // render: h => h(App_Page),
  // render: h => h(App_Slide),
  // render: h => h(App_Nav),
}).$mount('#app')
