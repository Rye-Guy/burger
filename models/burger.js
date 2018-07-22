var orm = require('../config/orm.js');

var burgers = {
    all: function(res){
        orm.all(function(response){
            res(response);
        });
    },
    insert: function(cols, vals, cb){
        orm.insert('burgers', cols, vals, function(res){
            cb(res);
        })
    }
}

module.exports = burgers;