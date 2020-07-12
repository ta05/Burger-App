const connection = require("./connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++)
        arr.push("?");
    return arr.toString();
}

function objToSQL(obj) {
    var arr = [];

    for (var key in obj) {
        var val = obj[key];
        
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof val === "string" && val.indexOf(" " >= 0))
                val = "'" + val + "'";
            arr.push(key + "=" + val);
        }
    }
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

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = `UPDATE ${table} SET ${objToSQL(objColVals)} WHERE ${condition}`;
        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err)
                throw err;
            cb(res);
        });
    }
};

module.exports = orm;