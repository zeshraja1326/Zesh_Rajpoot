//  Setting up the server with express

var express = require('express');
var fs = require('fs');
 var app = express();
 var port = 8080;


app.use(express.static('public')); // If we run this line it will not let the app.GET line run

// Database Operations
// var sqlite3 = require('sqlite3');
// var db = new sqlite3.Database('newDB.db');
// Hardcode to insert a row into the database (Just a test)
//db.run("INSERT INTO Contacts VALUES (1,'Thomas', 'Axen', 'taxen@email.com', '111-111-1111', '90110')");


// app.get(`/Contacts`, function(request, response){
//
//    db.all("SELECT * FROM Contacts", function(err, rows){
//         console.log("GET Contacts: The database currently contains the following: " , rows);
//
//         response.send(rows);
//     });
// });
//
// app.get(`/Contacts/:id`, function(request, response){
//
//    db.all("SELECT * FROM Contacts WHERE id = ?", [request.params.id], function(err, rows){
//         console.log("GET Request for author: " + request.params.id);
//
//         response.send(rows);
//     });
// });
//
// app.post('/Contacts', function(req, response) {
//     console.log('Here in POST: ', req.body);
//     db.run("INSERT INTO Contacts VALUES ?", req.body)
// });

// Database End


 app.get('/', function(request, response){
    console.log('Hey there Its GET Request ');
    fs.readFile("public/index.html", function (error, pgResp) {
            if (error) {
                response.writeHead(404);
                response.write('<h1>Contents you are looking are Not Found</h1>');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(pgResp);
            }

            response.end();
        });
    // response.send('Hello, World! GET');
});

// POST PUT DELETE Operations

// app.post('/users', function(request, response){
//    console.log('Hey there Its POST Request ');
//    response.send('Hello, World! POST');
// });
//
// app.put('/user', function(request, response){
//    console.log('Hey there Its PUT Request ');
//    response.send('Hello, World! PUT');
// });
//
// app.delete('/user', function(request, response){
//    console.log('Hey there Its DELETE Request ');
//    response.send('Hello, World! DELETE');
// });

 app.listen(port, function(){
     console.log('Express app listening on port ' + port);
 });
