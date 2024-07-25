// const { describe, it } = require('mocha');

const assert = require('assert');
const Char = require('../models/char')

// Describe tests
describe('deleting records', function () {

    var char;

    beforeEach(function (done) {
        char = new Char({
            name: 'Black'
        })

        //is async
        char.save().then(function () {
            done();
        })
    })

    it('Delete a record from database', function (done) {
        Char.findOneAndRemove({
            name: "Black"
        }).then(function () {
            Char.findOne({
                name: 'Black'
            }).then(function (result) {
                assert(result === null)
                done();
            })
        })
    });

});
