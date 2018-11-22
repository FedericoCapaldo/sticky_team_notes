if (LAST_ELEMENT == null || LAST_ELEMENT == undefined) {
    // do whatever you want with the element that has been right-clicked
    console.error("StickyNote -> no selected element found. Cannote create note.")
}

if (LAST_SELECTION == null || LAST_SELECTION == undefined) {
    // do whatever you want with the information contained in the selection object
    console.error("StickyNote -> No selection found. Cannot create note.");
}


console.log(LAST_ELEMENT);
console.log(LAST_SELECTION.toString());