const Header = ({ header }) => <h1>{header}</h1>;

const Content = ({ parts }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Course = ({ course }) => {
  console.log(course);
  return (
    <>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
