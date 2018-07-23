var express = require('express');
var router = express.Router();

var burgers = require('../models/burger.js');

router.get('/', function(req, res){
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

router.post('/burgers', function(req, res){
    burgers.insert([
        'burger_name'
    ],[
        req.body.burger_name
    ], function(data){
        console.log(data);
        res.json(data);   
        res.redirect('/');
       
    }); 
});

router.put('/burgers/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    burger.update({
        devoured: true
    }, condition, function(data){
        res.redirect('/');
     }
)
});


// Export 
module.exports = router;