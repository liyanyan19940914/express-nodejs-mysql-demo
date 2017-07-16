const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '199409',
    database: 'users',
    port: 3306
});
connection.connect();

const modSql = "update user set name=?,sex=?,age=?,tel=?,mail=?,note=? where id = ?";
const modSqlParams = ["李妍","woman",32,"345678","ndsajvn@qq.com","adsvfadsv",2];
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('UPDATE ERROR - ',err.message);
        return;
    }
    console.log('UPDATE SUCCESS',result.rowsAffected);
});

connection.end();
