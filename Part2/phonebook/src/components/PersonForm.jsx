import personService from "../services/persons";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setFilteredPersons,
  setNotificationMessage,
  setNotificationError,
}) => {
  const addPerson = (e) => {
    e.preventDefault();
    const samePerson = persons.find((p) => p.name === newName);
    if (samePerson === undefined) {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setFilteredPersons(persons.concat(returnedPerson));
        console.log("returnedPerson", returnedPerson);
        setNotificationMessage(`Added ${returnedPerson.name} to the phonebook`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
      });
    } else {
      alert(`${newName} is already in the phonebook`);
      if (window.confirm(`Replace the old number with a new one?`)) {
        const changedPerson = { ...samePerson, number: newNumber };
        personService
          .update(samePerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== samePerson.id ? person : returnedPerson
              )
            );
            setFilteredPersons(
              persons.map((person) =>
                person.id !== samePerson.id ? person : returnedPerson
              )
            );
            setNotificationMessage(
              `Editted ${returnedPerson.name} in the phonebook`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
          })
          .catch(() => {
            setNotificationError(
              `The person ${samePerson.name} was already deleted from the server`
            );
            setFilteredPersons(persons.filter((person) => person.id !== samePerson.id));
            setTimeout(() => {
              setNotificationError(null);
            }, 5000);
          });
      }
    }
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  return (
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
  );
};

export default PersonForm;
