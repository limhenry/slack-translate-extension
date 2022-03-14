chrome.action.setPopup({ popup:'' })

chrome.action.onClicked.addListener(()=>{
  chrome.tabs.create({ url:'options.html' })
})
