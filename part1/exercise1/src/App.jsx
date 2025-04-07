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
      <p>{part1.name} exercises: {part1.exercises}</p>
      <p>{part2.name} exercises: {part2.exercises}</p>
      <p>{part3.name} exercises: {part3.exercises}</p>
    </div>
  )
}

export default App

