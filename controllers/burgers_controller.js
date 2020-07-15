const express = require("express");

const router = express.Router();

const burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.select(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insert(["burger_name"], [req.body.name], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows === 0)
            return res.status(404).end();
        res.status(200).end();
    });
});
module.exports = router;