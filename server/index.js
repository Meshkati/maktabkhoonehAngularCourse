const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

let tasks;

app.post('/tasks/store', (req, res) => {
    console.log("LOG");
    console.log(req.body);
    tasks = req.body;
    res.send({"ok": true});
});

app.get('/tasks', (req, res) => {
    res.send(tasks);
})

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`API is running on port: ${port}`);
});