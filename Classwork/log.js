const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const now = new Date().toISOString();   
    const method = req.method;              
    const url = req.url;                    

    const log = `new log - ${now} ${method} ${url}\n`;

    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            res.writeHead(500);
            res.end("Error writing log");
        } else {
            res.writeHead(200);
            res.end("Log saved");
        }
    });
});

server.listen(4000, () => {
    console.log("Server is running on 3000 port");
});
