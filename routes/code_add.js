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
  res.render('code_add');
});

router.post('/', function(req, res, next) {
	// 클라이언트로 부터 전달 받은 데이터들(데이터베이스로 넣을 데이터들)
	var id = req.body.idInput; // 사용자의 계정 아이디
	var flatform = req.body.flatformInput; // 사용자의 플랫폼
	var main_time = req.body.main_timeInput; // 사용자의 주요 플레이 시간대
	var location = req.body.locationInput; // 사용자가 사는 지역
  var age = req.body.ageInput; // 사용자의 나이
  var comment = req.body.commentInput; // 사용자의 코멘트
  var code_password = req.body.code_passwordInput; // 글 삭제 할 때 본인 확인 여부를 위한 패스워드
	console.log(id, flatform, main_time, location, age, comment);

  pool.getConnection(function(err, connection) {
  // 데이터베이스와 서버가 연결될 때 에러가 발생하면 실행되는 부분이다.
  if(err) {
    console.log("getConnection Error");
    throw err;
  }
  
  // sql문을 작성한다.(데이터베이스에 넣을 데이터와 sql문을 조합한 형태이다.)
  var sql = "INSERT INTO friends_code (ID, flatform, Main_time, location, age, comment, code_password) VALUES ('"+id+"', '"+flatform+"', '"+main_time+"', '"+location+"', '"+age+"', '"+comment+"', '"+code_password+"')";
  console.log(sql);

  // 데이터베이스 연결을 통해서 sql문을 실행한다.
  // 실행한 결과는 rows에 에러가 발생하면 err 객체에 정보가 나타난다.
  var query = connection.query(sql, function(err, rows) {
    if(err) {
      console.log("query Error");
      connection.release();
      throw err;
    }
    // 데이터 베이스 처리를 마치고 해당 페이지(http://localhost:3000/friends_code)로 이동한다.
  res.redirect('friends_code');
  });
});
});

module.exports = router;
