const http = require('http');
const fs = require('fs');
const path = require('path');
// path help shape the correct path.
// also path helps to distinguish differences between 
// slash and back slash in directory paths, as a result
// server works cross-platform.

const PORT = 3000;

// everything else explained in app.js comments
const server = http.createServer((req, res) => {
    console.log('Server Request');

    res.setHeader('Content-Type', 'text/html');

    if(req.url = '/') {
        fs.readFile('./views/index.html', (err, data) => {
            if(err) {
                console.log(err);
                // even in error case we write end()
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        })
    }
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log('Error') : console.log(`listening port ${PORT}`);
});
