var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            weight: "int",
            reps: "int",
            exercise: "text",
            time: "datetime"
        },
        adapter: {
            type: "sql",
            collection_name: "monday"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("monday", exports.definition, []);

collection = Alloy.C("monday", exports.definition, model);

exports.Model = model;

exports.Collection = collection;