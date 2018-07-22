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

router.post('/api/burgers', function(res, req){
    burgers.insert([
        'burger_name'
    ],[
        req.body.name   
    ], function(result){
        console.log(result);
        res.json(result);   
        res.redirect('/');
       
    }); 
});

router.put('/api/burgers/:id', function(res, req){
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