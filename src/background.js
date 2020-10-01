import store from "./shared/store/store";

console.log(chrome.tabs);
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  store.dispatch("sitesPaywall/removePaywall");
});
// console.log('Hello from the background', document)

// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('Hello from the background', document)
// })

// chrome.runtime.getBackgroundPage(function(backgroundPage) {
//   console = backgroundPage.console;
//   console.log(2222, backgroundPage)
// })

// console.log(11111)
