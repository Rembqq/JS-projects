const welcome = person => {
    console.log(`Ave, ${person.name}!`);
}

const people = [
    { name: 'Marcus Aurelius' },
    { name: 'Mao Zedong' },
    { name: 'Rene Descartes' },
];

for(const person of people)
{
    welcome(person);
}