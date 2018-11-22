function onClickHandler(info, tab) {
	chrome.tabs.executeScript(tab.id, {file: 'save_note.js', allFrames: true});
}

chrome.contextMenus.create({
	"title": "Write a Sticky Note",
	"contexts": ["all"],
	"documentUrlPatterns": ["*://*/*"],
	"onclick": onClickHandler
});


