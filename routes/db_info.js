var host = 'localhost';
var port = 3306;
var user = 'root';
var password = '1234';
var database = 'my_portfolio';

exports.getHost = function(){
    return host;
};
exports.getPort = function(){
    return port;
};
exports.getUser = function(){
    return user;
};
exports.getPassword = function(){
    return password;
};
exports.getDatabase = function(){
    return database;
};