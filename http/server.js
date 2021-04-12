const http = require('http');

const data = {
    name: "a",
    role: "admin",
    age: 30
}


const server = http.createServer((req,res) => {


    switch (req.url){
        case "/data" :
            res.write(JSON.stringify(data))
            break;
        case "/service" :
            res.write("service")
            break;
        default:
            res.write("bah rien")
            break;
    }
    res.end();
}).listen(8080);
