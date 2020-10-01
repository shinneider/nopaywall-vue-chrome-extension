import store from "../store/store";

store.commit("domainActions/addUrl", {
  domain: location.hostname,
  path: location.pathname,
});
