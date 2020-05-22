import Vue from 'vue';

import router from 'D:/import ubuntu/SF/JS/vueproj/completed/client/src/router.js';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import reactiveStorage from "vue-reactive-storage";
import VueLocalStorage from "vue-localstorage"
import Todos from 'D:/import ubuntu/SF/JS/vueproj/completed/client/src/Todos.vue';

Vue.use(BootstrapVue);
Vue.use(reactiveStorage, {
  'todos': []
});
Vue.use(VueLocalStorage, {
  name: 'vls',
  bind: true
})


Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(Todos),
}).$mount('#todo');
