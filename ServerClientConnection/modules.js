// const {userName: user, sayHi} = require('./test');

// //console.log(user);

// const name = 'Tommy';

// console.log(sayHi(name)); 

const os = require('os');
const { userName: user, sayHi } = require('./test');

const name = 'Timmy';

console.log(os.platform(), os.release());
module.exports = name;