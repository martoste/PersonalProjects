function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openMonday() {
        $.index.openWindow(Alloy.createController("monday").getView());
    }
    function openMondayPopUp() {
        $.mondayPopUpView.visible = true;
        $.menuTable.opacity = .25;
    }
    function closeMondayPopUp() {
        $.mondayPopUpView.visible = true;
    }
    function openTuesday() {
        $.index.openWindow(Alloy.createController("tuesday").getView());
    }
    function openWednesday() {
        $.index.openWindow(Alloy.createController("wednesday").getView());
    }
    function openThursday() {
        $.index.openWindow(Alloy.createController("thursday").getView());
    }
    function openFriday() {
        $.index.openWindow(Alloy.createController("friday").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "black",
        title: "Workout Log",
        id: "__alloyId0"
    });
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        title: "Monday",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    openMondayPopUp ? $.addListener($.__views.__alloyId2, "click", openMondayPopUp) : __defers["$.__views.__alloyId2!click!openMondayPopUp"] = true;
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "Tuesday",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    openTuesday ? $.addListener($.__views.__alloyId3, "click", openTuesday) : __defers["$.__views.__alloyId3!click!openTuesday"] = true;
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Wednesday",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4);
    openWednesday ? $.addListener($.__views.__alloyId4, "click", openWednesday) : __defers["$.__views.__alloyId4!click!openWednesday"] = true;
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Thursday",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5);
    openThursday ? $.addListener($.__views.__alloyId5, "click", openThursday) : __defers["$.__views.__alloyId5!click!openThursday"] = true;
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Friday",
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6);
    openFriday ? $.addListener($.__views.__alloyId6, "click", openFriday) : __defers["$.__views.__alloyId6!click!openFriday"] = true;
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId1,
        id: "menuTable",
        rowHeight: "60"
    });
    $.__views.__alloyId0.add($.__views.menuTable);
    $.__views.mondayPopUpView = Ti.UI.createView({
        backgroundColor: "white",
        borderRadius: "10",
        borderWidth: "2.5",
        borderColor: "#5ac8fa",
        visible: "false",
        width: "300",
        height: "400",
        id: "mondayPopUpView"
    });
    $.__views.__alloyId0.add($.__views.mondayPopUpView);
    $.__views.mondayHeader = Ti.UI.createView({
        height: "30",
        top: "0%",
        backgroundColor: "#5ac8fa",
        id: "mondayHeader"
    });
    $.__views.mondayPopUpView.add($.__views.mondayHeader);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Enter Your Exercise Info",
        id: "__alloyId7"
    });
    $.__views.mondayHeader.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Exercise Name:",
        top: "13%",
        left: "5%",
        id: "__alloyId8"
    });
    $.__views.mondayPopUpView.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "11%",
        height: "35",
        width: "155",
        platform: "ios",
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        borderColor: "black",
        borderRadius: "5",
        textAlign: "center",
        clearOnEdit: "true",
        hintText: "Bicep Curls",
        right: "3%",
        id: "__alloyId9"
    });
    $.__views.mondayPopUpView.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Rest Time:",
        top: "23%",
        left: "5%",
        id: "__alloyId10"
    });
    $.__views.mondayPopUpView.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "22%",
        height: "35",
        width: "155",
        platform: "ios",
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        borderColor: "black",
        borderRadius: "5",
        textAlign: "center",
        clearOnEdit: "true",
        hintText: "60 seconds",
        right: "3%",
        id: "__alloyId11"
    });
    $.__views.mondayPopUpView.add($.__views.__alloyId11);
    $.__views.restPicker = Ti.UI.createPicker({
        id: "restPicker",
        top: "10%",
        selectionIndicator: "true",
        useSpinner: "true",
        visible: "false"
    });
    $.__views.mondayPopUpView.add($.__views.restPicker);
    var __alloyId12 = [];
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        title: "30 seconds",
        id: "__alloyId13"
    });
    __alloyId12.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        title: "45 seconds",
        id: "__alloyId14"
    });
    __alloyId12.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        title: "60 seconds",
        id: "__alloyId15"
    });
    __alloyId12.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerRow({
        title: "90 seconds",
        id: "__alloyId16"
    });
    __alloyId12.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createPickerRow({
        title: "120 seconds",
        id: "__alloyId17"
    });
    __alloyId12.push($.__views.__alloyId17);
    $.__views.restPicker.add(__alloyId12);
    $.__views.addExercise = Ti.UI.createButton({
        top: "33%",
        borderColor: "#5ac8fa",
        width: "50",
        height: "30",
        right: "3%",
        borderRadius: "10",
        title: "Add",
        id: "addExercise"
    });
    $.__views.mondayPopUpView.add($.__views.addExercise);
    $.__views.__alloyId18 = Ti.UI.createTableView({
        rowHeight: "30",
        top: "41%",
        height: "45%",
        headerTitle: "Exercises",
        id: "__alloyId18"
    });
    $.__views.mondayPopUpView.add($.__views.__alloyId18);
    $.__views.save = Ti.UI.createButton({
        title: "Save",
        id: "save"
    });
    $.__views.mondayPopUpView.add($.__views.save);
    openMonday ? $.addListener($.__views.save, "click", openMonday) : __defers["$.__views.save!click!openMonday"] = true;
    $.__views.cancel = Ti.UI.createButton({
        title: "Cancel",
        id: "cancel"
    });
    $.__views.mondayPopUpView.add($.__views.cancel);
    closeMondayPopUp ? $.addListener($.__views.cancel, "click", closeMondayPopUp) : __defers["$.__views.cancel!click!closeMondayPopUp"] = true;
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId2!click!openMondayPopUp"] && $.addListener($.__views.__alloyId2, "click", openMondayPopUp);
    __defers["$.__views.__alloyId3!click!openTuesday"] && $.addListener($.__views.__alloyId3, "click", openTuesday);
    __defers["$.__views.__alloyId4!click!openWednesday"] && $.addListener($.__views.__alloyId4, "click", openWednesday);
    __defers["$.__views.__alloyId5!click!openThursday"] && $.addListener($.__views.__alloyId5, "click", openThursday);
    __defers["$.__views.__alloyId6!click!openFriday"] && $.addListener($.__views.__alloyId6, "click", openFriday);
    __defers["$.__views.save!click!openMonday"] && $.addListener($.__views.save, "click", openMonday);
    __defers["$.__views.cancel!click!closeMondayPopUp"] && $.addListener($.__views.cancel, "click", closeMondayPopUp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;