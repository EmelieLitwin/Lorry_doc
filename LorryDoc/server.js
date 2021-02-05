const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const mysql = require('mysql');

// Present root file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/start.html');
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
    password: "1234",
    database: "LorryDoc_database"
});

con.connect (function(err) {
    if (err) throw err;
    console.log("Connected!");
});


// Endpoint for fetched data table "Symptoms2"
app.get('/getdata', (req, res) => {
    // MySQL query
    var queryString = "SELECT idSymptoms2, Description, Symptoms_idSymptoms FROM Symptoms2";

    con.query(queryString, function (err, rows, fields) {
        if (err) throw err;
        else {
            var symptoms2Table = [];

            // Loop query results
            rows.forEach(function(entry) {

                // Focus on the row data, push onto previously empty array
                symptoms2Table.push({idSymptoms2:entry.idSymptoms2, description:entry.Description, symptoms_id:entry.Symptoms_idSymptoms});
            });

            // Respond with JSON result
            res.json(symptoms2Table);
            console.log('symptom2');
            console.log(symptoms2Table);
        }
    });
        
});


// Endpoint for fetched data table "Symptoms2"
app.get('/getnextdata', (req, res) => {
    // MySQL query
    var queryString1 = "SELECT idSymptoms3, Description, Symptoms2_idSymptoms2, Solution_idSymptoms31 FROM Symptoms3";

    con.query(queryString1, function (err, rows, fields) {
        if (err) throw err;
        else {
            var symptoms3Table = [];

            // Loop query results
            rows.forEach(function(entry) {

                // Focus on the row data, push onto previously empty array
                symptoms3Table.push({description:entry.Description, idSymptoms3:entry.idSymptoms3, symptoms2_id:entry.Symptoms2_idSymptoms2, solution_id:entry.Solution_idSymptoms31});
            });

            // Respond with JSON result
            res.json(symptoms3Table);
            console.log('symptom3  ')
            console.log(symptoms3Table);
        }
    });
        
});

// Endpoint for fetched data table "Solution"
app.get('/getlastdata', (req, res) => {
    // MySQL query
    var queryString3 = "SELECT idSolution, Suggestion, Description, idSymptoms3 FROM Solution";

    con.query(queryString3, function (err, rows, fields) {
        if (err) throw err;
        else {
            var resolution = [];

            // Loop query results
            rows.forEach(function(entry) {

                // Focus on the row data, push onto previously empty array
                resolution.push({description:entry.Description, idSymptoms3:entry.idSymptoms3, idSolution:entry.idSolution, suggestion:entry.Suggestion});
            });

            // Respond with JSON result
            res.json(resolution);
            console.log('resolution ')
            console.log(resolution);
        }
    });
        
});