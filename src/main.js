import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Button,  Collapse, CollapseItem  } from 'vant';
Vue.use(Button);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
