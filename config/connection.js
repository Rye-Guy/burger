var mysql = require('mysql');

function login(){
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'somepassword',
        database: 'burgers_db',
        multipleStatements: true
    })
}

module.exports = login;