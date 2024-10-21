import Button from "./Button";
const Person = ({ p }) => (
  <p>
    {p.name} {p.number}
    <Button />
  </p>
);

export default Person;
