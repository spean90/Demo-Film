var express = require('express');
var router = express.Router();
var user = require('../model/User')
/* GET users listing. */
router.get('/signup', function(req, res) {
    console.log('in..user....');
    res.render("addUser",{title:'注册',user:{
        name : "",
        password : "",
        pic : ""
    }});
});

/* GET signup. */
router.post('/signup', function(req, res) {
    console.dir(req);
    console.log(req.body['file_name']);
    var ued = new user({
        name: req.body.name,
        password: req.body.password,
        pic: req.files
    });
    ued.save(function(err){
        if (err) return console.log("save err: " + err);
        user.fetch(function(err,cursor) {
           if(err) return new Error('error.....');
            console.dir(cursor);
            res.redirect('/');
        });

    });
});

module.exports = router;
