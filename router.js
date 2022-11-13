'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/books')
        .get(jsonku.bookitems);

    app.route('/books/:id')
        .get(jsonku.booksId);

    app.route('/books')
        .post(jsonku.addBooks);
}