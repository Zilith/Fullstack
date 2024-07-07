import { useState } from "react";

const Button = ({ text, handleEvent }) => (
  <button onClick={handleEvent}>{text}</button>
);

const Title = ({ text }) => <h1>{text}</h1>;

const MostVotes = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const index = votes.indexOf(maxVotes);
  return (
    <>
      <div>{anecdotes[index]}</div>
      <div>has {votes[index]} votes</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [votes, setVotes] = useState(anecdotes.map(_ => 0));

  const random = (min, max) => {
    const randomValue = Math.floor(Math.random() * (max - min) + min);
    console.log(randomValue);
    setSelected(randomValue);
  };

  const handleVotes = (votes, selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    console.log(votes);
    console.log(copy);
    setVotes(copy);
  };

  return (
    <>
      <Title text="anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button text="vote" handleEvent={() => handleVotes(votes, selected)} />
      <Button text="next anecdote" handleEvent={() => random(0, 8)} />
      <Title text="anecdote with most votes" />
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </>
  );
};

export default App;
