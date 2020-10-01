export default {
  namespaced: true,
  state: {
    site: {
      domain: null,
      path: null,
    },
    blockedDomains: JSON.parse(localStorage.getItem("blockedDomains") || "[]"),
    blockedPaths: JSON.parse(localStorage.getItem("blockedPaths") || "[]"),
    refreshNeeded: false,
  },
  mutations: {
    addUrl(state, { url }) {
      const parser = document.createElement("a");
      parser.href = url;

      (state.site.domain = parser.hostname),
        (state.site.path = parser.pathname);
    },
    blockDomain(state, domain) {
      domain
        ? state.blockedDomains.push(state.site.domain)
        : (state.blockedDomains = state.blockedDomains.filter(
            (e) => e !== state.site.domain
          ));

      localStorage.setItem(
        "blockedDomains",
        JSON.stringify(state.blockedDomains)
      );
      state.refreshNeeded = true;
    },
    blockPath(state, path) {
      path
        ? state.blockedPaths.push(state.site.path)
        : (state.blockedPaths = state.blockedPaths.filter(
            (e) => e !== state.site.path
          ));

      localStorage.setItem("blockedPaths", JSON.stringify(state.blockedPaths));
      state.refreshNeeded = true;
    },
  },
  getters: {
    domain: (state) => state.site.domain,
    path: (state) => state.site.path,
    blockedDomain: (state, getters) =>
      state.blockedDomains.includes(getters.domain),
    blockedPath: (state, getters) => state.blockedPaths.includes(getters.path),
    refreshNeeded: (state) => state.refreshNeeded,
  },
  actions: {
    async mountSiteDomain({ commit }) {
      await chrome.tabs.getSelected((tab) =>
        commit("addUrl", { url: tab.url })
      );
    },
    async refreshPage() {
      chrome.tabs.executeScript({
        code: "window.location.reload();",
        runAt: "document_end",
      });
    },
  },
};
