import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "3147553490" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const addPerson = (e) => {
    e.preventDefault();
    console.log(e.target);
    const sameName = persons.find((p) => p.name === newName);
    if (sameName === undefined) {
      const personObject = {
        name: newName,
        number: newNumber,
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
      noFilter ? persons : persons.filter((p) => p.name === e.target.value)
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
      {filteredPersons.map((p, i) => (
        <p key={i}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
