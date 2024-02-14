let express = require("express");
let ourServer = express();

ourServer.get('/', function (req, res) {
    res.send(`
    <form action="/answer" method="POST">
       <p> What is 2 + 3 ? </p>
       <input  type="text" autocomplete="off"/>
       <button> Submit </button>
    </form>
    `)
})


ourServer.post("/answer", function (req, res) {
    res.send('Thank you for answer');
});

ourServer.get("/answer", function (req, res) {
    res.send('hey.. u are u lost');
})

ourServer.listen(3000);
