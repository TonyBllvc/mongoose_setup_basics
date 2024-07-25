const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise

//Connect to the database before test run
before(function (done) {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/test')

    mongoose.connection.once('open', function () {
        console.log('connection has been made');
        done()
    }).on('error', function (error) {
        console.log('connection error:'.error);
    })

})

// Drop the characters collection for each test
beforeEach(function(done){
    // Drop the collection 
    mongoose.connection.collections.blacks.drop(function(){
        done()
    })
})








// // Default
// const mongoose = require('mongoose');

// // Connect to mongodb
// mongoose.connect('mongodb://localhost/test')

// mongoose.connection.once('open', function(){
//     console.log('connection has been made');
// } ).on('error', function(error){
//     console.log('connection error:'. error );
// })