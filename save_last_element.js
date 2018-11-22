var LAST_SELECTION,
    LAST_ELEMENT;

// this will update your last element every time you right click on some element in the page
document.body.addEventListener('contextmenu', function(e) {
    LAST_SELECTION = window.getSelection();
    LAST_ELEMENT = e.target;
}, false);