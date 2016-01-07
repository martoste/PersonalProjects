function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tuesday";
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
    $.__views.tuesday = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tuesday",
        id: "tuesday"
    });
    $.__views.tuesday && $.addTopLevelView($.__views.tuesday);
    $.__views.view = Ti.UI.createView({
        id: "view",
        borderRadius: "10",
        backgroundColor: "red",
        width: "50",
        height: "50",
        visible: "false"
    });
    $.__views.tuesday.add($.__views.view);
    $.__views.Label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Tuesday",
        id: "Label"
    });
    $.__views.tuesday.add($.__views.Label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;