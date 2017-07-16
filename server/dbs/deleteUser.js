const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '199409',
    database: 'users',
    port: 3306
});
connection.connect();

const deleteId = 'delete from user where id="1"';

connection.query(deleteId,function(err,result){
    if(err){
        console.log('insert err :',err.message);
        return;
    }
    console.log('delete success:',result.rowsAffected);
});

connection.end();