const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const mysql = require('mysql');

// Present root file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
})

// Path to client folder
app.use(express.static(path.resolve(__dirname, "client")));


// Server connection
server.listen(
    process.env.PORT || 3000,
    function () {
        var addr = server.address();
        console.log(
            "All ready! Server listening at port:" + addr.port
        );
    }
);


// Database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "LorryDoc_database"
});

con.connect (function(err) {
    if (err) throw err;
    console.log("Connected!");
});


// Endpoint for fetched data table "Symptoms2"
app.get('/getdata', (req, res) => {
    // MySQL query
    var queryString = "SELECT Description FROM Symptoms2";

    con.query(queryString, function (err, rows, fields) {
        if (err) throw err;
        else {
            var symptoms2Table = [];

            // Loop query results
            rows.forEach(function(entry) {

                // Focus on the row data, push onto previously empty array
                symptoms2Table.push(entry.Description);
            });

            // Respond with JSON result
            res.json(symptoms2Table);
            console.log(symptoms2Table);
        }
    });
        
});


// Endpoint for fetched data table "Symptoms2"
app.get('/getnextdata', (req, res) => {
    // MySQL query
    var queryString1 = "SELECT Description FROM Symptoms3";

    con.query(queryString1, function (err, rows, fields) {
        if (err) throw err;
        else {
            var symptoms3Table = [];

            // Loop query results
            rows.forEach(function(entry) {

                // Focus on the row data, push onto previously empty array
                symptoms3Table.push(entry.Description);
            });

            // Respond with JSON result
            res.json(symptoms3Table);
            console.log(symptoms3Table);
        }
    });
        
});

// Endpoint for fetched data table "Solution"
app.get('/getlastdata', (req, res) => {
    // MySQL query
    // var queryString2 = "SELECT Suggestion FROM Solution";

    // con.query(queryString2, function (err, rows, fields) {
    //     if (err) throw err;
    //     else {
    //         var suggestion = [];

    //         // Loop query results
    //         rows.forEach(function(entry) {

    //             // Focus on the row data, push onto previously empty array
    //             suggestion.push(entry.Description);
    //         });

    //         // Respond with JSON result
    //         res.json(suggestion);
    //         console.log(suggestion);
    //     }
    // });

    var queryString3 = "SELECT Description FROM Solution";

    con.query(queryString3, function (err, rows, fields) {
        if (err) throw err;
        else {
            var resolution = [];

            // Loop query results
            rows.forEach(function(entry) {

                // Focus on the row data, push onto previously empty array
                resolution.push(entry.Description);
            });

            // Respond with JSON result
            res.json(resolution);
            console.log(resolution);
        }
    });
        
});