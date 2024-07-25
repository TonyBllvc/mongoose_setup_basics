const assert = require('assert');
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe our tests
describe('Nesting record', function () {


    beforeEach(function (done) {
        // this function is not work
        mongoose.connection.collections.authors.drop(function () {
            done();
        });
    })

    // Create tests
    it('Creates an author with sub-docs', function (done) {
        var unc = new Author({
            name: 'Uncle Black',
            books: [{
                title: ' Name of the wind', pages: 400
            }]
        })

        unc.save().then(function () {
            Author.findOne({ name: 'Uncle Black' }).then(function (record) {
                assert(record.books.length === 1);
                done()
            })
        })
    });

    it('Add new book', function (done) {
        var unc = new Author({
            name: 'Uncle Black',
            books: [{
                title: ' Name of the wind', pages: 400
            }]
        });

        unc.save().then(function () {
            Author.findOne({ name: 'Uncle Black' }).then(function (record) {

                // Add a book to the array
                record.books.push({ title: 'Wise man', pages: 500 })
                record.save().then(function () {
                    Author.findOne({ name: 'Uncle Black' }).then(function (result) {
                        assert(result.books.length === 2);
                        done()
                    })
                })
                // done()
            })
        })
    })

})