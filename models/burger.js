const connection = require("../config/connection");

const orm = {
    selectALL : function(cb){
        connection.query("select * from burgers", function(err, data){
            if (err) cb(err, null);
            console.log("data",data);
            cb(null, data);
        })
    }
}

module.exports = orm;