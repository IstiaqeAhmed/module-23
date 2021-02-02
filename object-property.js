const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaa'},
    {id: 41, name: 'kabila'},
    {id: 71, name: 'dipjol'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id );
const bigger = students.filter( s => s.id > 40);
console.log(bigger);