const orm = require("../config/orm");

const burger = {
    select: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (cols, values, cb) {
        orm.insertOne("burgers", cols, values, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;