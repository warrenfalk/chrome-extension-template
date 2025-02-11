chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed", Date.now());
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.action === "inject-script") {
    const { tabId } = request;
    chrome.scripting
      .executeScript({ target: { tabId }, files: ["dist/content.js"] })
      .then(() => {
        console.log("Script injected");
        sendResponse({ success: true });
      })
      .catch((e) => {
        console.error("Script injection failed", e);
        sendResponse({ error: e });
      });
  }
});
