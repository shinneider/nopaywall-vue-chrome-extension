import Vue from "vue";
import Vuex from "vuex";

import sitesPaywall from "./modules/sitesPaywall";
import domainActions from "./modules/domainActions";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    sitesPaywall: sitesPaywall,
    domainActions: domainActions,
  },
});

export default store;
