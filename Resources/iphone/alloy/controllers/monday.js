function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId42(e) {
        if (e && e.fromAdapter) return;
        __alloyId42.opts || {};
        var models = __alloyId41.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId38 = models[i];
            __alloyId38.__transform = transformFunction(__alloyId38);
            var __alloyId40 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId38.__transform["custom"] ? __alloyId38.__transform["custom"] : __alloyId38.get("custom"),
                height: "40"
            });
            rows.push(__alloyId40);
        }
        $.__views.dataLog.setData(rows);
    }
    function logMonday() {
        if ("" === $.weightTextBox.value || "" === $.repsTextBox.value) alert("Please fill in both fields."); else if (isNaN(parseInt($.weightTextBox.value)) || isNaN(parseInt($.repsTextBox.value))) alert("Please fill in both fields with numbers only."); else {
            var myMonday = Alloy.createModel("monday", {
                weight: $.weightTextBox.value,
                reps: $.repsTextBox.value
            });
            monday.add(myMonday);
            myMonday.save();
        }
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        Ti.API.info(transform);
        i++;
        transform.custom = "Set " + i + " : " + transform.weight + " lbs X " + transform.reps + " reps";
        i === monday.length && (i = 0);
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "monday";
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
    Alloy.Collections.instance("monday");
    $.__views.monday = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        title: "Monday",
        id: "monday"
    });
    $.__views.monday && $.addTopLevelView($.__views.monday);
    var __alloyId22 = [];
    $.__views.__alloyId23 = Ti.UI.createView({
        id: "__alloyId23"
    });
    __alloyId22.push($.__views.__alloyId23);
    $.__views.exercise = Ti.UI.createLabel({
        top: "2%",
        left: "5%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "20"
        },
        text: "Incline Bench Press",
        id: "exercise"
    });
    $.__views.__alloyId23.add($.__views.exercise);
    var __alloyId27 = [];
    $.__views.__alloyId28 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.CANCEL,
        id: "__alloyId28"
    });
    __alloyId27.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId27.push($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createButton({
        title: "Done",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        id: "__alloyId30"
    });
    __alloyId27.push($.__views.__alloyId30);
    $.__views.__alloyId25 = Ti.UI.iOS.createToolbar({
        items: __alloyId27,
        id: "__alloyId25"
    });
    $.__views.weightTextBox = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "10%",
        height: "35",
        width: "100",
        platform: "ios",
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        left: "5%",
        hintText: "Weight",
        keyboardToolbar: $.__views.__alloyId25,
        id: "weightTextBox"
    });
    $.__views.__alloyId23.add($.__views.weightTextBox);
    $.__views.__alloyId25 = Ti.UI.iOS.createToolbar({
        keyboardToolbar: $.__views.__alloyId25,
        id: "weightTextBox",
        hintText: "Weight"
    });
    var __alloyId34 = [];
    $.__views.__alloyId35 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.CANCEL,
        id: "__alloyId35"
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId34.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createButton({
        title: "Done",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        id: "__alloyId37"
    });
    __alloyId34.push($.__views.__alloyId37);
    $.__views.__alloyId32 = Ti.UI.iOS.createToolbar({
        items: __alloyId34,
        id: "__alloyId32"
    });
    $.__views.repsTextBox = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "10%",
        height: "35",
        width: "100",
        platform: "ios",
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        left: "40%",
        hintText: "Reps",
        keyboardToolbar: $.__views.__alloyId32,
        id: "repsTextBox"
    });
    $.__views.__alloyId23.add($.__views.repsTextBox);
    $.__views.__alloyId32 = Ti.UI.iOS.createToolbar({
        keyboardToolbar: $.__views.__alloyId32,
        id: "repsTextBox",
        hintText: "Reps"
    });
    $.__views.addButton = Ti.UI.createButton({
        top: "25%",
        borderColor: "#5ac8fa",
        width: "90",
        height: "30",
        right: "15%",
        borderRadius: "10",
        title: "Add to Log",
        id: "addButton"
    });
    $.__views.__alloyId23.add($.__views.addButton);
    logMonday ? $.addListener($.__views.addButton, "click", logMonday) : __defers["$.__views.addButton!click!logMonday"] = true;
    $.__views.dataLog = Ti.UI.createTableView({
        height: Ti.UI.FILL,
        backgroundColor: "white",
        editable: "true",
        id: "dataLog",
        headerTitle: "History",
        top: "40%"
    });
    $.__views.__alloyId23.add($.__views.dataLog);
    var __alloyId41 = Alloy.Collections["monday"] || monday;
    __alloyId41.on("fetch destroy change add remove reset", __alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        id: "__alloyId43"
    });
    __alloyId22.push($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        text: "Test",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId21 = Ti.UI.createScrollableView({
        views: __alloyId22,
        id: "__alloyId21"
    });
    $.__views.monday.add($.__views.__alloyId21);
    exports.destroy = function() {
        __alloyId41.off("fetch destroy change add remove reset", __alloyId42);
    };
    _.extend($, $.__views);
    var monday = Alloy.Collections.monday, i = 0;
    monday.fetch();
    __defers["$.__views.addButton!click!logMonday"] && $.addListener($.__views.addButton, "click", logMonday);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;