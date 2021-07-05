setTimeout(() => {
    
    chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        state: "maximized"
    });
   
}, 500);
