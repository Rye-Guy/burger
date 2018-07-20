var orm = require('../config/orm.js');

var burgers = {
    all: function(res){
        orm.all(function(response){
            res(response);
        });
    },
    insert: function(value, res){
        orm.insert(value, res, function(response){
            res(response);
        })
    }
}