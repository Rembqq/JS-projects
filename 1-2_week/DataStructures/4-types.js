'use strict';

const i = 5;
const f = 10.3;
const s = 'Hello';
const b = true;

const person = {
    name: 'Marcus Aurelius',
    born: 121,
    city: 'Roma',
    position: 'Emperor'
}

person.city = 'Odessa';

const cities = ['Athens', 'Roma', 'Milan', 'London', 'Beijing', 'Kiev', 'Riga'];

cities.push('Odessa');
cities.unshift('New York')

console.log('shift: ' + cities.shift());
console.log('pop: ' + cities.pop());

console.log({i}, typeof i);
console.timeLog({s}, typeof s);
console.log({b}, typeof b);
console.log({f}, typeof f);

console.log({person}, typeof person);
console.log({isArray: Array.isArray(person)});

console.log({ cities }, typeof cities); 
console.log({ isArray: Array.isArray(cities) });

console.log({ instanceofArray: cities instanceof Array });