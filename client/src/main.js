import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFlashMessage from 'vue-flash-message'
import 'animate.css/animate.css'
import VueSignaturePad from 'vue-signature-pad'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueSignaturePad);
Vue.use(ElementUI);
Vue.use(VueFlashMessage, {
  messageOptions: {
   timeout: 6000
 }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
