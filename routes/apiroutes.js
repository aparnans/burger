const express =require('express');
const router = express.Router();

const burger = require("../models/orm");

router.get("/", function(req, res){
    burger.selectALL(function(err,burgers){
        if(err) {
            return res.status(501).json({
                message : "Error - not able to query the database"
            })
        }
        console.log("burgers",burgers);
        res.render("index");
    })
});


module.exports = router;