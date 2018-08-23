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

router.get('/:friends_ID', function(req, res, next) {
  var friends_id = req.params.friends_ID; // friends_code 페이지의 friends_ID 값을 받아와서 변수에 저장
  
  console.log('select * from friends_code where friends_ID = '+ friends_id);
  
  pool.getConnection(function(err, connection) {
     // friends_id 변수에 저장된 데이터베이스의 friends_ID를 검색해서 해당하는 모든 데이터를 표시하는 SQL문을 변수에 저장
      var select_sql = 'SELECT * FROM friends_code WHERE friends_ID = '+ friends_id;
      connection.query(select_sql, function(err, rows){
          if(err){
              connection.release();
              throw err;
          }
              res.render('code_read', { rows : rows });
          });
      });
});

module.exports = router;
