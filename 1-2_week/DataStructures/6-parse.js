'use strict';

console.log(parseInt('11', 2)); // 3
console.log(parseInt('11', 8)); // 9
console.log(parseInt('11', 16)); // 17

console.log(parseInt(5, 10)); // 5
console.log(parseInt(+5, 10)); // 5
console.log(parseInt('5', 10)); // 5
console.log(parseInt('5mm', 10)); // 5

console.log(parseInt('(5)', 10)); // NaN
console.log(parseInt('"5"', 10)); // NaN
console.log(parseInt('[5]', 10)); // NaN

console.log(parseInt(NaN, 10)); // NaN
console.log(parseInt(Infinity, 10));
console.log(parseInt('Infinity', 10));
console.log(parseInt('-Infinity', 10));