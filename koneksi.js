var mysql = require('mysql');


//koneksi ke database
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Mysql terkoneksi');
});


module.exports = con;

