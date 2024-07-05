import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return <p>no feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="avarege" value={(good - bad) / all} />
        <StatisticsLine text="positive" value={[(good / all) * 100, "%"]} />
      </tbody>
    </table>
  );
};

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  );
}

export default App;
