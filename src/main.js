import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./axios";

Vue.config.productionTip = false;

Vue.prototype.env = process.env.NODE_ENV;
Vue.prototype.dev = process.env.NODE_ENV === "development" ? true : false;
Vue.prototype.window = window;
Vue.prototype.hostURL = window.location.protocol + "//" + window.location.host;
Vue.prototype.$Plyr = Plyr;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");