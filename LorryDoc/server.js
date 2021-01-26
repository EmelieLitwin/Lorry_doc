const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const mysql = require('mysql');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
})

app.use(express.static(path.resolve(__dirname, "client")));


server.listen(
    process.env.PORT || 3000,
    function () {
        var addr = server.address();
        console.log(
            "All ready! Server listening at port:" + addr.port
        );
    }
);

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

con.query("SELECT *FROM Symptoms", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});