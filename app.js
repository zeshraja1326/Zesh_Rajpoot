//  Setting up the server with express

var express = require('express');
var fs = require('fs');
 var app = express();
 
 var port = process.env.PORT || 8000


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

 app.get( '/',function(request, response){
    console.log('Hey there Its GET Request ');
    
            try 
            {             
                fs.createReadStream('public/index.html').pipe(response);
            } 
            catch(e) 
            {
                response.writeHead(404);
                response.write('<h1>Contents you are looking are Not Found</h1>');
                response.end();
            }

});

// Process All requests in the URL no matter what querystring is comming
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = {
                message : "<div style= "position: fixed;top: 50%;left:50%;"><h1>Resource Not Found !!!</h1><p>404</p></div>",
                status: 404
            };
 
  next(err);
});

// error handler
app.use(function(err, req, res, next) {     
                res.writeHead(err.status);
                res.write(err.message);
                res.end();
});

 app.listen(port, function(){
     console.log('Express app listening on port ' + port);
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


