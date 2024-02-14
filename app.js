let http = require("http");

let serverApp = http.createServer(function (req, res) {
    console.log(req.url)

    if (req.url == '/') {
        res.end("Hello from Node Server World! - Home Page")
    }


    if (req.url == '/about') {
        res.end("Hello from Node Server World! - About Page")
    }

    res.end("No page found for this address")
});


serverApp.listen(3000);