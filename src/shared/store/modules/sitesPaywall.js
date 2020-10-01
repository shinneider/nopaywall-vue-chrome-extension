import { loadPageFinish, waitPageFinish } from "../../../shared/utils";

export default {
  namespaced: true,
  state: {
    sites: [
      {
        domain: "super.abril.com.br",
        steps: [
          "document.querySelector('body').classList.remove('disabledByPaywall');",
          "document.getElementById('piano_offer').remove();",
          "Array.from(document.getElementsByClassName('piano-offer-overlay')).forEach(el => el.remove())",
          // remove ads
          "Array.from(document.getElementsByClassName('ads')).forEach(el => el.remove())",
          "document.getElementById('taboola-below-article-thumbnails').remove()",
        ],
      },
      {
        domain: "oglobo.globo.com",
        steps: [
          "Array.from(document.getElementsByClassName('paywall-cpt')).forEach(el => el.remove())",
          "document.body.style = 'unset'",
          // remove ads
          "document.getElementById('footerOgloboPianoId').remove()",
          "Array.from(document.getElementsByClassName('block--advertising')).forEach(el => el.remove())",
          "document.getElementById('pub-vitrine').remove()",
        ],
      },
    ],
  },
  mutations: {},
  getters: {
    domain: (_, __, ___, rootGetters) => rootGetters["domainActions/domain"],
    blockedDomain: (_, __, ___, rootGetters) =>
      rootGetters["domainActions/blockedDomain"],
    blockedPath: (_, __, ___, rootGetters) =>
      rootGetters["domainActions/blockedPath"],
    fake: (state) => state.sites[0],
    thisSite: (state, getters) => {
      return state.sites.find((site) => site.domain === getters.domain);
    },
  },
  actions: {
    async removePaywallBackground({ getters }) {
      await waitPageFinish();
      if (!getters.thisSite) return;

      getters.fake.steps.forEach((step) => {
        eval(step);
      });
    },
    async removePaywall({ getters }) {
      await loadPageFinish();
      if (!getters.thisSite || getters.blockedDomain || getters.blockedPath)
        return;

      getters.thisSite.steps.forEach((step) => {
        chrome.tabs.executeScript({
          code: step,
          runAt: "document_end",
        });
      });
    },
  },
};
