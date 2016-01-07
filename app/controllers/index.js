function doClick(e) {
    alert($.label.text);
}

$.index.open();

//Nav
function openMonday() {
	$.index.openWindow(Alloy.createController('monday').getView());
}
function openMondayPopUp() {
	$.mondayPopUpView.visible=true;
	$.menuTable.opacity=.25;
}
function closeMondayPopUp() {
	$.mondayPopUpView.visible=true;
}

function openTuesday () {
    $.index.openWindow(Alloy.createController('tuesday').getView());
}

function openWednesday () {
    $.index.openWindow(Alloy.createController('wednesday').getView());
}

function openThursday () {
    $.index.openWindow(Alloy.createController('thursday').getView());
}

function openFriday () {
    $.index.openWindow(Alloy.createController('friday').getView());
}

//End Nav
