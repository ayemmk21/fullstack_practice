//1.1 + 1.2
/*
const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Part =({part, exercises}) => {
  return(
    <p>{part} {exercises}</p>
  )
}

const Content =({parts}) => {
  return(
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
*/

//1.3
/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name}: {part1.exercises}</p>
      <p>{part2.name}: {part2.exercises}</p>
      <p>{part3.name}: {part3.exercises}</p>
      <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App
*/

//1.4
/*
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      <p>{parts[0].name}: {parts[0].exercises}</p>
      <p>{parts[1].name}: {parts[1].exercises}</p>
      <p>{parts[2].name}: {parts[2].exercises}</p>
      <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}
export default App
*/

//1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name}: {course.parts[0].exercises}</p>
      <p>{course.parts[1].name}: {course.parts[1].exercises}</p>
      <p>{course.parts[2].name}: {course.parts[2].exercises}</p>
      <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}
export default App