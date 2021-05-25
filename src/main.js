import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MyCard from "./components/MyCard";
import navigation_bar from "./components/navigation_bar";
import banner_img from "./components/banner_img";
import login_form from "./components/login_form";
import list_name from "./components/list_name";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.component("my-card", MyCard);
Vue.component("navigation-bar", navigation_bar);
Vue.component("banner-img", banner_img);
Vue.component("login-form", login_form);
Vue.component("list-name", list_name);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
