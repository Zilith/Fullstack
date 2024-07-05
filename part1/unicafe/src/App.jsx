import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

function App() {
  // Save the clicks of each button on a different state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <>
      <Title text="give feedback" />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Title text="statistics" />
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="avarege" value={(good - bad) / all} />
      <Statistics text="positive" value={[(good / all) * 100, "%"]} />
    </>
  );
}

export default App;
