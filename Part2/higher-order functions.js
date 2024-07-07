const animals = [
    {name:'Toby', species: 'rabbit'},
    {name: 'Perla', species: 'dog'},
    {name: 'Percy', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Josh', species: 'cat'},
    {name: 'Eiren', species: 'fish'}
]

const isOther = (animal) => (
    animal.species !== 'dog'
)

const dogs = animals.filter((animal) => animal.species === 'dog') // Se estan usando funciones de orden alto (filter) que itera el array y como parametro toma la condicion del callback (la funcion anonima)

const otherAnimals = animals.filter(isOther)

console.log(dogs);
console.log(otherAnimals);