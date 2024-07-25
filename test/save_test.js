// const { describe, it } = require('mocha');

const assert = require('assert');
const Char = require('../models/user')

// Describe tests
describe('Saving records', function () {
    
    //Create tests
    it('saves a record to database', function (done) {
        var char = new Char({
            name: 'Black'
        })

        //is async
        char.save().then(function () {
            //returns true(when database is created locally,
            // but not saved locally)
            assert(char.isNew === false);
            done();
        })
    });
});
















// // const { describe, it } = require('mocha');

// const assert = require('assert');
// const Char = require('../models/car')

// // Describe tests
// describe('Saving records', function () {
//     //Create tests

//     it('saves a record to database', function (done) {
//         var char = new Char({
//             name: 'Black'
//         })

//         //is async
//         char.save().then(function () {
//             //returns true(when database is created locally,
//             // but not saved locally)
//             assert(char.isNew === false);
//             done();
//         })
//     });
// });