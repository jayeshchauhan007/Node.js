const http = require('http');
const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'jayesh'
    },
    {
        id: 1,
        name: 'bhavik'
    },
    {
        id: 2,
        name: 'yuvraj'
    }
];
server.on('request', (req, res) => {
    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // });
    let params = req.url.split('/');
    if (params[1] === 'friends') {
        if (req.method === 'GET') {

            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            if (params.length == 3) {
                let seacrhIndex = Number(params[2]);
                if (friends[seacrhIndex] != undefined) {
                    res.end(JSON.stringify(friends[seacrhIndex]));
                } else {
                    res.statusCode = 404;
                    res.end();
                }
            } else {
                res.end(JSON.stringify(friends));
            }
        } else if (req.method === 'POST') {
            req.on('data', (data) => {
                let friend = data.toString();
                console.log('Request:', friend);
                friends.push(JSON.parse(friend));
            });
            req.pipe(res);
        }
    } else if (params[1] === 'html') {
        res.setHeader('Content-type', 'text/html');
        const html = '<h1>This is HTML</h1>';
        res.write(html);
        res.end();
    } else if (params[1] === 'text') {
        res.setHeader('Content-type', 'text/plain');
        const text = 'This is text';
        res.write(text);
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log('Listening to server at port : ' + PORT);
});