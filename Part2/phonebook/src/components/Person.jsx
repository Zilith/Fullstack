import Button from "./Button";

const Person = ({ p, handleDelete }) => {
  return (
    <p>
      {p.name} {p.number}
      <Button onClick={() => handleDelete(p)}/>
    </p>
  );
};

export default Person;
