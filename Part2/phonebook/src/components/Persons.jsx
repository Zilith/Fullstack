import Person from "./Person";

const Persons = ({ filteredPersons }) => (
  <>
    {filteredPersons.map((p) => (
      <Person key={p.id} p={p} />
    ))}
  </>
);

export default Persons;
