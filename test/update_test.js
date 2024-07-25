// const { describe, it } = require('mocha');

const assert = require('assert');
const Char = require('../models/char')

// Describe tests
describe('Updating records', function () {

    var char;

    beforeEach(function (done) {
        char = new Char({
            name: 'Black',
            weight: 50
        })

        //is async
        char.save().then(function () {
            done();
        })
    })

    it('Update a record from database', function (done) {
        Char.findOneAndUpdate({
            name: 'Uncle'
        }, { name: 'Black' }).then(function () {
            Char.findById(char._id)

                //or

                // Char.findOne({_id: char._id})

                .then(function (result) {
                    assert(result.name === 'Black');
                    done();
                })
        })
    });

    it('Increments the weight by 1', function (done) {
        Char.updateOne({}, { $inc: { weight: 1 } }).then(function () {
            Char.findOne({ name: 'Uncle' }).then(function (record) {
                assert(record.weight === 51);
                done();
            })
            // why put done here in mine for no errors??
            done();
        })
    });

});
