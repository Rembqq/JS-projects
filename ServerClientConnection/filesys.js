const fs = require('fs');

fs.readFile('./README.txt', (error, data) => {
    console.log(data.toString());
});
// or

fs.readFile('./README.txt', 'utf8', (error, data) => {
    console.log(data);
});

fs.readFileSync('./README.txt', 'utf8', (error, data) => {
    fs.mkdirSync('./files', () => {
        fs.writeFileSync('./files/WRITEME.txt', `${data} New text!`, (error) => {
            error ? console.log(error) : null;
        });
    });
});

setTimeout(() => {
    if(fs.existsSync('./files/WRITEME.txt')) {
        fs.unlink('./files/WRITEME.txt', () => {});
    }
}, 4000);

setTimeout(() => {
    if(fs.existsSync('./files')) {
        fs.rmdir('./files', () => {});
    }
}, 4000);