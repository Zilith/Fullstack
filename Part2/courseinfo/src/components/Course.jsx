const Header = ({ header }) => <h1>{header}</h1>;

const Content = ({ parts }) => (
  <>
    {parts.map((p) => (
      <Part key={p.id} part={p} />
    ))}
  </>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = (course) => (
  <p>
    <strong>
      exercises {course.parts.reduce((s, p) => s + p.exercises, 0)}
    </strong>
  </p>
);

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      {courses.map((c) => (
        <>
          <Header key={c.id} header={c.name} />
          <Content parts={c.parts} />
          <Total parts={c.parts} />
        </>
      ))}
    </>
  );
};

export default Course;
