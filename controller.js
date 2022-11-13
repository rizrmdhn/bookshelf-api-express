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

//menambah buku
exports.addBooks = function (req, res) {
    var name = req.body.name;
    var year = req.body.year;
    var author = req.body.author;
    var summary = req.body.summary;
    var publisher = req.body.publisher;
    var pageCount = req.body.pageCount;
    var readPage = req.body.readPage;
    var finished = req.body.finished;
    var reading = req.body.reading;
    var insertedAt = req.body.insertedAt;
    var updatedAt = req.body.updatedAt;

    connection.query('INSERT INTO booksitem (name,year,author,summary,publisher,pageCount,readPage,finished,reading,insertedAt,updatedAt) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
    [name,year,author,summary,publisher,pageCount,readPage,finished,reading,insertedAt,updatedAt],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
}