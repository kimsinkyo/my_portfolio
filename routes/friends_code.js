var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db_info = require('./db_info');

var pool = mysql.createPool({
    host : db_info.getHost(),
    port : db_info.getPort(),
    user : db_info.getUser(),
    password : db_info.getPassword(),
    database : db_info.getDatabase(),
    connectionLimit : 20,
    waitForConnections : false
});


router.get('/', function(req, res, next) {
  
    pool.getConnection(function(err, connection) {
       
        var query = connection.query('select * from friends_code', function(err, rows) {
            if(err) {
                connection.release();
                throw err;
            }
           
                res.render('friends_code', { rows : rows});
            });  
           connection.release();  
        });
    });



module.exports = router;