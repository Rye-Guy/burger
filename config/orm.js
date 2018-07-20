var connection = require("./connection.js");

var orm = {
    //function that selects everything from the burger table
    all: function(res){
        var query = "SELECT * FROM burgers;"
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            res(result);
        });
    },
    insert: function(value, res){
        var query = "INSERT INTO burgers (burger_name) VALUES (" + value + ");"
        
        console.log(query);

        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            res(result);
        })
     }
    // update: function(res){
    //     query = "UPDATE burgers SET burger"
    // }
}

module.exports = orm; 