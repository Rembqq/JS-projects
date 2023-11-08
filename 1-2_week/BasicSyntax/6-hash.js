const welcome = person => {
    console.log(`Ave, ${person.name}!`);
}

const people = {
    marcus: { name: 'Marcus Aurelius' },
    mao: { name: 'Mao Zedong' },
    rene: { name: 'Rene Descartes' },
};

for(const name in people)
{
    const person = people[name];
    welcome(person);
}