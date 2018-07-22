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
    insert: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " ("; 
        queryString += cols.toString();
        queryString += ") "; 
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") "; 
        
        console.log(queryString);


        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
     }
    // update: function(res){
    //     query = "UPDATE burgers SET burger"
    // }
}

module.exports = orm; 