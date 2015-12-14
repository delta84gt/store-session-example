var express = require('express');
var router = express.Router();

router.post('/', function (req, res){
    console.log('user.......: ' + req.body.user_email);
    console.log('password...: ' + req.body.user_password);
    console.log('session....: ' + req.session);
    var user = req.body.user_email;
    var pass = req.body.user_password;
    if (pass === 'admin') {
        req.session.key = true;
        req.session.key_name = user;
        req.session.paramientras = 'un valor para el rato';
        res.json({'redirect': '/users'})
    } else {
        res.json({
            'error':'true',
            'message': 'Login failed ! Please register'
        })
    };
});

module.exports = router;