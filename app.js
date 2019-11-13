let http = require("http");

http.createServer(function(req, res) {

res.writeHead(200, {"Content-Type": "text/plain"});

switch(req.url) {
    case "/":
        res.end("Bienvenido a mi homepage");

    case "/productos":
        res.end("Estos son nuestro productos");
        break;

    default:
        res.end("Error");
        break;
    
}

res.end("Terminado");

}) .listen(2020, "localhost");
