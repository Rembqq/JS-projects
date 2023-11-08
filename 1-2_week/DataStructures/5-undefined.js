'use strict';

//undefined
let emptyScalar;
console.log({emptyScalar}, typeof emptyScalar);

//null
const emptyObject = null;
console.log({emptyObject}, typeof emptyObject)

//NaN (Not a Number)
let count  = NaN;
console.log({count}, typeof count);

count = undefined + 1;
console.dir({count});

console.log(Infinity, -Infinity, typeof Infinity);

const s = (
    emptyObject === null ?
    'emptyObkect is null' :
    'EmptyObject is not null'
)

console.log(s);
