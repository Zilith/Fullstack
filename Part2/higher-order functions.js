const animals = [
  { name: "Toby", species: "rabbit" },
  { name: "Perla", species: "dog" },
  { name: "Percy", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Josh", species: "cat" },
  { name: "Eiren", species: "fish" },
];

//Use of filter and reject (Transform an array into a smoller array)
//Use of find (Same as filter but only return the fist item, so convert an array into a single item)

const isOther = (animal) => animal.species !== "dog";

const dogs = animals.filter((animal) => animal.species === "dog"); // Se estan usando funciones de orden alto (filter) que itera el array y como parametro toma la condicion del callback (la funcion anonima)

const otherAnimals = animals.filter(isOther);

console.log(dogs);
console.log(otherAnimals);

//Use of map (sale lenght, but you can do changes in each item)

const names = animals.map((animal) => animal.name + " is a " + animal.species); //Modificar el contenido dentro de un array usando callbacks
console.log(names);

//Use of reduce

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);

import fs from "fs";

const output = fs
  .readFileSync(
    "D:/iCloudDrive/Proyectos/Fullstack/Fullstack/Part2/data.txt",
    "utf-8"
  )
  .trim()
  .split("\n")
  .map((line) => line.split("  "))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3],
    });
    console.log(line);
    return customers;
  }, {});

console.log("output", JSON.stringify(output, null, 2));

//Use of clouseres

const me = "Bruce Wayne"

function greetMe() {
    console.log("hello " + me + "!")
}
greetMe()

//Use of Currying


