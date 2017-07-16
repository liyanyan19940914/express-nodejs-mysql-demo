const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '199409',
    database: 'users',
    port: 3306
});
connection.connect();

const insertUser = 'insert user (id,name,sex,age,tel,mail,note)values(?,?,?,?,?,?,?)';
const insertUserParams = [null,"liyan","woman",13,"12345678945","9877743381@qq.com","fsg"];
connection.query(insertUser,insertUserParams,function(err,result){
    if(err){
        console.log('insert err :',err.message);
        return;
    }
    console.log('insert id:',result);
});

connection.end();