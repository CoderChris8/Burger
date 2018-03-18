// Capitalize constructors
// Created a function.
// function Note(db) {
//     db.query();
// }


var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'marvel08',
  database : 'burger_db'
});

db.connect();

// {} = object
// This method is to create a new note.
var Burger = {
    // Step 1
    create: function(response, data) { // <-- reference to future arguments. Requesting a 'res' and 'data' object (which is tied to request.body).
        db.query('INSERT INTO burgers SET ?', data, function(err, result) {
            if ( err ) return console.log(err);
            
            response.send('Successfully added note!'); // <-- message to the frontend. Successfully added note.
        });
    }
}

// var Burger = {
//     create: function() {
//         db.query('INSERT INTO burgers (burger_name, devour) VALUES?', ['some burger', 'true/false']); {
//             if ( err ) return console.log(err);
//             response
//         });
//     }
// }

// var Burger = {
//     create: function() {
//         db.query('INSERT INTO burgers SET ?', {title: 'Some title', details: 'some details'} data. function(err, result) {
//         });
//     }

// var Burger = {
//     create: function(data) {
//         db.query('INSERT INTO burgers SET ?', data, function(err, result) {
//             if ( err ) throw err;
//         });
//     }
// }

// var Burger = {
//     create: function(data) {
//         db.query('INSERT INTO burgers SET ?', data, function(err, result) {
//             if ( err ) return console.log(err); // <-- This is for non-detailed information. This will only console log the basic error messages.
//         });
//     }
// }

// // exporting this function.
module.exports = Burger;


// Step 1
// passed in parameters.
// function test (num, str) {
//     console.log(num);
// }

// // arguments
// test('Some string', 10);
