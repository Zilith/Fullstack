const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </>
  );
};

const Total = (props) => {
  // console.log(props.course.parts[0]);
  return (
    <p>
      Number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

// import { useState } from "react";

// const Display = ({ counter }) => <>{counter}</>;

// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// );

// const Display = props => <div>{props.value}</div>

// const History = ({allClicks}) => {
//   if (allClicks.length === 0) {
//     return (
//       <p>the app is used by pressing the buttons</p>
//     )
//   }
//   return (
//     <p>
//       Button press history: {allClicks.join (' ')}
//     </p>
//   )
// }

// const App = () => {
// const [clicks, setClicks] = useState({
//   left: 0,
//   right: 0,
// });
// const [left, setLeft] = useState(0);
// const [right, setRight] = useState(0);
// const [allClicks, setAll] = useState([]);
// const [total, setTotal] = useState(0);

// const handleLeftClick = () => {
//   setAll(allClicks.concat("L"));
//   // console.log('left before' + left)
//   const updatedLeft = left + 1
//   setLeft(updatedLeft);
//   // console.log('left after ' + left)
//   setTotal(updatedLeft + right);
// };

// const handleRightClick = () => {
//   setAll(allClicks.concat("R"));
//   const updatedRight = right + 1
//   setRight(updatedRight);
//   setTotal(left + updatedRight);
// };
// console.log("rendering with counter value..." + counter);

// const increaseByOne = () => {
//   // console.log("increasing the value before: " + counter);
//   setCounter(counter + 1);
// };
// const setToZero = () => {
//   // console.log("resetting to zero the value before: " + counter);
//   setCounter(0);
// };
// const decreaseByOne = () => {
//   // console.log("decreasing te value before: " + counter);
//   setCounter(counter - 1);
// };

// setTimeout(    () => setCounter(counter + 1),    1000  )
// console.log('rendering...', counter)

// const hello = (who) => {
//   const handler = () => {
//     console.log("hello", who);
//     setValue(who);
//   };
//   return handler;
// };

// const [value, setValue] = useState(10);

// const setToValue = (newValue) => {
//   console.log("value now", newValue);
//   setValue(newValue);
// };

// return (
//   <>
{
  /* <Display counter={left} />
      <Button onClick={handleLeftClick} title={"left"} />
      <Button onClick={handleRightClick} title={"right"} />
      <Display counter={right} />
      <History allClicks={allClicks}/>
      <p>total {total}</p> */
}
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </>
//   );
// };

export default App;
