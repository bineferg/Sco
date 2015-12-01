function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId28(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId28.opts || {};
        var models = __alloyId27.models;
        var len = models.length;
        var __alloyId23 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId24 = models[i];
            __alloyId24.__transform = transform(__alloyId24);
            var __alloyId26 = {
                properties: {
                    itemId: "undefined" != typeof __alloyId24.__transform["guid"] ? __alloyId24.__transform["guid"] : __alloyId24.get("guid")
                },
                image: {
                    image: "undefined" != typeof __alloyId24.__transform["image"] ? __alloyId24.__transform["image"] : __alloyId24.get("image")
                },
                title: {
                    text: "undefined" != typeof __alloyId24.__transform["title"] ? __alloyId24.__transform["title"] : __alloyId24.get("title")
                },
                subtitle: {
                    text: "undefined" != typeof __alloyId24.__transform["pubDate"] ? __alloyId24.__transform["pubDate"] : __alloyId24.get("pubDate")
                }
            };
            __alloyId23.push(__alloyId26);
        }
        opts.animation ? $.__views.__alloyId22.setItems(__alloyId23, opts.animation) : $.__views.__alloyId22.setItems(__alloyId23);
    }
    function refresh(e) {
        "use strict";
        function afterFetch() {
            $.refreshControl.endRefreshing();
        }
        true && !e && $.refreshControl.beginRefreshing();
        var url = Alloy.CFG.url;
        Alloy.Collections.feed.fetch({
            url: url,
            success: afterFetch,
            error: afterFetch
        });
    }
    function transform(model) {
        "use strict";
        return {
            pubDate: moment(model.get("pubDate"), "DD MMM YYYY HH:mm:ss ZZ").format("LLL")
        };
    }
    function select(e) {
        "use strict";
        var guid = e.itemId;
        var model = Alloy.Collections.feed.get(guid);
        console.log(model.title);
        $.trigger("select", {
            model: model
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
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
    Alloy.Collections.instance("feed");
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        barColor: "#000",
        navTintColor: "#FFF",
        translucent: false,
        titleAttributes: {
            color: "#FFF"
        },
        title: "Sco",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.refreshControl = Ti.UI.createRefreshControl({
        id: "refreshControl"
    });
    refresh ? $.__views.refreshControl.addEventListener("refreshstart", refresh) : __defers["$.__views.refreshControl!refreshstart!refresh"] = true;
    var __alloyId12 = {};
    var __alloyId15 = [];
    var __alloyId17 = {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            color: "#000",
            left: 10,
            height: 25,
            wordWrap: false,
            ellipsize: true,
            top: 5,
            font: {
                fontSize: 18
            },
            bindId: "title"
        }
    };
    __alloyId15.push(__alloyId17);
    var __alloyId19 = {
        type: "Ti.UI.Label",
        bindId: "subtitle",
        properties: {
            color: "#999",
            left: 10,
            height: 25,
            wordWrap: false,
            ellipsize: true,
            top: 30,
            font: {
                fontSize: 18
            },
            bindId: "subtitle"
        }
    };
    __alloyId15.push(__alloyId19);
    var __alloyId21 = {
        type: "Ti.UI.ImageView",
        properties: {
            left: 10,
            height: 25,
            wordWrap: false,
            ellipsize: true,
            backgroundColor: "transparent",
            display: "block",
            bindID: "image"
        }
    };
    __alloyId15.push(__alloyId21);
    var __alloyId14 = {
        properties: {
            height: 60,
            name: "template"
        },
        childTemplates: __alloyId15
    };
    __alloyId12["template"] = __alloyId14;
    $.__views.__alloyId22 = Ti.UI.createListSection({
        id: "__alloyId22"
    });
    var __alloyId27 = Alloy.Collections["feed"] || feed;
    __alloyId27.on("fetch destroy change add remove reset", __alloyId28);
    var __alloyId29 = [];
    __alloyId29.push($.__views.__alloyId22);
    $.__views.__alloyId11 = Ti.UI.createListView({
        sections: __alloyId29,
        templates: __alloyId12,
        refreshControl: $.__views.refreshControl,
        defaultItemTemplate: "template",
        id: "__alloyId11"
    });
    $.__views.master.add($.__views.__alloyId11);
    select ? $.__views.__alloyId11.addEventListener("itemclick", select) : __defers["$.__views.__alloyId11!itemclick!select"] = true;
    exports.destroy = function() {
        __alloyId27.off("fetch destroy change add remove reset", __alloyId28);
    };
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    !function() {
        "use strict";
        refresh();
    }(arguments[0] || {});
    __defers["$.__views.refreshControl!refreshstart!refresh"] && $.__views.refreshControl.addEventListener("refreshstart", refresh);
    __defers["$.__views.__alloyId11!itemclick!select"] && $.__views.__alloyId11.addEventListener("itemclick", select);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;