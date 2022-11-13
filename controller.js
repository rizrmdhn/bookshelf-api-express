'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API Berjalan!", res);
};


//menampilkan semua data buku
exports.bookitems = function (req, res) {
    connection.query('SELECT * FROM booksitem', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
};

//menampilkan buku berdasarkan id
exports.booksId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM booksitem WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        }
    );
}