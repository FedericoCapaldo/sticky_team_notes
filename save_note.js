// "marcos" available from background.js

if (LAST_ELEMENT == null || LAST_ELEMENT == undefined) {
    // do whatever you want with the element that has been right-clicked
    console.error("StickyNote -> no selected element found. Cannote create note.")
}

if (LAST_SELECTION == null || LAST_SELECTION == undefined) {
    // do whatever you want with the information contained in the selection object
    console.error("StickyNote -> No selection found. Cannot create note.");
}


// example of changing css of the selection
var selected = LAST_SELECTION;
var range = selected.getRangeAt(0);

document.designMode = "on";
selected.removeAllRanges();
selected.addRange(range);

var colour = "green";

if (!document.execCommand("HiliteColor", false, colour)) {
    document.execCommand("BackColor", false, colour);
}

document.designMode = "off";
