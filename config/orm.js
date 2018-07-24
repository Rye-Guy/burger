var connection = require("./connection.js");

//Function that builds the sql syntax
function printQuestionMarks(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for(var key in ob){
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}


var orm = {
    //function that selects everything from the burger table
    all: function(tableInput, cb){
        var query = "SELECT * FROM " + tableInput +  ";"
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    insert: function(table, cols, vals, cb){
        table = 'burger';
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
     },
     
     update: function(table, objColVals, condition, cb){
         table = 'burger';
         var queryString = "UPDATE " + table; 

         queryString += " SET ";
         queryString += objToSql(objColVals);
         queryString += " WHERE "; 
         queryString += condition;


         console.log(queryString);

         connection.query(queryString, function(err, result){
             if(err){
                 throw err; 
             }

             cb(result);
         });

     }

}

module.exports = orm; 