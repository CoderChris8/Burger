// Review Session Notes
var express = require('express');
var bodyParser = require('body-parser');
var Burger = require('/models/Burger');

connection.connect();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// //imports models
// var Note

// // Think about mailbox. sending data to 
// app.post('/burger' function(request, response){
//     connection.query()

// });


app.post('/burger', function(request, response){
    Burger.create(response, request.body ); // <-- passing actual data to 'burger.js'
    // when someone sends data from a form to the backend, how do you get that data? it is 'request.body'
});

// // STEP 1
// function test(str, num) {;
//     console.log(str);
// }

// // STEP 2 
// test('Some string', 10); //FUTURE DATA
