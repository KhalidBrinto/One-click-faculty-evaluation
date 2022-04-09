try {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      chrome.scripting.executeScript({
        files: ['content-script.js'],
        target: { tabId: tab.id },
      });
    }
  })

} catch (error) {
  console.log(error);
}