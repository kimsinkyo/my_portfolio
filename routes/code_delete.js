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

router.post('/', function(req, res, next) {
   // 데이터베이스의 기본키가되는 작성글의 아이디 데이터를 받아와서 변수에 저장
  var friends_id = req.body.confirm_id; 
  // 데이터베이스의 계정 아이디 데이터를 받아올 변수를 선언 
  var code_password; 
   // 데이터베이스의 패스워드와 비교하기 위한 code_read쪽에서 입력한 패스워드를 받아와서 변수에 저장
  var code_password_confirm = req.body.code_passwordConfirm;
  
  pool.getConnection(function(err, connection) {
    // 작성글의 아이디와 같은 열에 위치한 패스워드를 검색해서 저장하는 변수
    var sql1 = "SELECT code_password FROM friends_code WHERE friends_ID = " + friends_id;
    // sql1 쿼리문을 실행
    var query = connection.query(sql1, function(err, rows) {
      if(err) {
        console.log("query Error");
        connection.release();
        throw err;
        
    }
    // 데이터베이스의 패스워드를 code_password 변수에 저장
    code_password = rows[0].code_password;
    // 작성글의 아이디를 검색해서 아이디가 포함된 한 열을 삭제하는 SQL문을 변수에 저장 
    sql2 = "DELETE FROM friends_code WHERE friends_ID = " + friends_id;
    // 데이터베이스의 패스워드와 code_read에서 입력한 패스워드가 일치한다면
    if(code_password == code_password_confirm){
      console.log(code_password);
      // sql2에 입력된 SQL문을 실행
      var query2 = connection.query(sql2, function(err, rows) {
          if(err) {
              console.log("query Error");
              connection.release();
              throw err;
          }
          // 성공적으로 실행되면 friends_code 페이지로 이동 
          res.redirect('friends_code');
          connection.release();
      });
    }
    else{
      // 일치하지 않으면 아무런 이벤트도 발생하지 않고 code_read 페이지로 이동
      res.redirect('code_read/' + friends_id);
      connection.release();
    }
  });
});
});

module.exports = router;
