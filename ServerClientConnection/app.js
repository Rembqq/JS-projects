const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server Request');
    console.log(req.url, req.method);
    
    // // or text/plain for usual text or text/html for html
    // application/json for json
     res.setHeader('Content-Type', 'application/json');
    // res.write('<head><link rel="stylesheet" href = "#"></head>')
    // res.write('<h1>Hello, World!</h1>');
    // res.write('<p>My name is Nikitos1k</p>');

    const data = JSON.stringify([
        { name: 'Timmy', age: 35 },
        { name: 'Arthur', age: 40 },
    ]);

    res.end(data);
    //res.end() (without args) if we dont want to pass marking only, but the data.
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log('Error') : console.log(`listening port ${PORT}`);
});
