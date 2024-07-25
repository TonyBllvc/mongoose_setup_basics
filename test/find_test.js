// const { describe, it } = require('mocha');

const assert = require('assert');
const Char = require('../models/char')

// Describe tests
describe('Finding records', function () {

    var char

    beforeEach(function (done) {
        char = new Char({
            name: 'Black'
        })

        //is async
        char.save().then(function () {
            //returns true(when database is created locally,
            // but not saved locally)
            assert(char.isNew === false);
            done();
        })
    })

    it('Finds a record from database', function (done) {
        Char.findOne({
            name: 'Black'
        }).then(function (result) {
            done();
        })
    });

    it('Finds a record by ID to database', function (done) {
        Char.findOne({
            _id: char._id
        }).then(function (result) {
            assert(result._id.toString() === char._id.toString());
            // console.log(char._id.toString())
            // console.log(result._id.toString())
            done();
        })
    });

});
