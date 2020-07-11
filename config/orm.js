const connection = require("./connection.js");

printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++)
        arr.push("?");
    return arr.toString();
}

var orm = {
    selectAll: function (table, cb) {
        var queryString = `SELECT * FROM " + ${table}`;
        connection.query(queryString, function (err, res) {
            if (err)
                throw err;
            cb(res);
        });
    },

    insertOne: function (table, cols, values, cb) {
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES(${printQuestionMarks(values.length)})`;
        console.log(queryString);

        connection.query(queryString, values, function (err, res) {
            if (err)
                throw err;
            cb(res);
        });
    },

    updateOne: function (table, objColVals, condition, cb)
}