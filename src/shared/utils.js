export const loadPageFinish = async () => {
  return new Promise((resolve) => {
    chrome.tabs.getSelected((tab) => resolve(tab.status));
  });
};

export const waitPageFinish = async () => {
  return new Promise((resolve) => {
    window.addEventListener("DOMContentLoaded", () => resolve());
  });
};
