import Vue from "vue";
import App from "./App.vue";
import store from "../../shared/store/store";

store.dispatch("domainActions/mountSiteDomain");
store.dispatch("sitesPaywall/removePaywall");

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
