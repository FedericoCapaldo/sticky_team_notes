function onClickHandler(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}

let context = "all"
chrome.contextMenus.create({
	"title": "Write a Sticky Note",
	"contexts": [context],
	"onclick": onClickHandler
});


