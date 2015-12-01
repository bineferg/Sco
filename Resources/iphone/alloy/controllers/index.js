function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onSelect(e) {
        "use strict";
        var model = e.model;
        var win = Alloy.createController("detail", {
            model: model
        }).getView();
        $.navWin.openWindow(win);
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
    if (true && !Alloy.isTablet) {
        $.__views.__alloyId0 = Alloy.createController("master", {
            id: "__alloyId0"
        });
        onSelect ? $.__views.__alloyId0.on("select", onSelect) : __defers["$.__views.__alloyId0!select!onSelect"] = true;
        $.__views.navWin = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.__alloyId0.getViewEx({
                recurse: true
            }),
            id: "navWin"
        });
        $.__views.navWin && $.addTopLevelView($.__views.navWin);
    }
    if (true && Alloy.isTablet) {
        $.__views.__alloyId4 = Alloy.createController("master", {
            id: "__alloyId4"
        });
        onSelect ? $.__views.__alloyId4.on("select", onSelect) : __defers["$.__views.__alloyId4!select!onSelect"] = true;
        $.__views.__alloyId3 = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.__alloyId4.getViewEx({
                recurse: true
            }),
            id: "__alloyId3"
        });
        $.__views.__alloyId7 = Ti.UI.createWindow({
            backgroundColor: "#FFF",
            barColor: "#000",
            navTintColor: "#FFF",
            translucent: false,
            titleAttributes: {
                color: "#FFF"
            },
            id: "__alloyId7"
        });
        $.__views.__alloyId8 = Ti.UI.createLabel({
            color: "#000",
            text: "Select an article.",
            id: "__alloyId8"
        });
        $.__views.__alloyId7.add($.__views.__alloyId8);
        $.__views.navWin = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.__alloyId7,
            id: "navWin"
        });
        $.__views.splitWin = Ti.UI.iPad.createSplitWindow({
            masterView: $.__views.__alloyId3,
            detailView: $.__views.navWin,
            id: "splitWin",
            showMasterInPortrait: "true"
        });
        $.__views.splitWin && $.addTopLevelView($.__views.splitWin);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    !function() {
        "use strict";
        Alloy.isTablet ? $.splitWin.open() : $.navWin.open();
    }(arguments[0] || {});
    __defers["$.__views.__alloyId0!select!onSelect"] && $.__views.__alloyId0.on("select", onSelect);
    __defers["$.__views.__alloyId4!select!onSelect"] && $.__views.__alloyId4.on("select", onSelect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;