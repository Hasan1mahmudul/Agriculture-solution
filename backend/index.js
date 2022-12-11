const http = require('http');

const app = {}

app.config = {
    port : 3000
};

app.createServer = () =>{

    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`);
    });
};
app.handleReqRes = () => {
    res.end('hello world');
}

app.createServer();

