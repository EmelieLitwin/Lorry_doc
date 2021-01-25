const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");

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

