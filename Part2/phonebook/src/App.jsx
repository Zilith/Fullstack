import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const addPerson = (e) => {
    e.preventDefault();
    const sameName = persons.find((p) => p.name === newName);
    if (sameName === undefined) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
      setFilteredPersons(persons.concat(personObject));
    } else {
      alert(`${newName} is already in the phonebook`);
    }
  };

  const handleNewName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    const noFilter = e.target.value === "";
    setFilteredPersons(
      noFilter
        ? persons
        : persons.filter((p) =>
            p.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleFilter} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {filteredPersons.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
