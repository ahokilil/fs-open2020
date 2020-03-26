import React from 'react'
import ReactDOM from 'react-dom'

const Header = (proppi) => {
  return (
  <div>
      <h1>{proppi.course.name}</h1>
  </div>
  )
}

const Content = (proppi) => {
  return (
  <div>
    <Part name={proppi.course.parts[0].name} exercise={proppi.course.parts[0].exercises}/>
    <Part name={proppi.course.parts[1].name} exercise={proppi.course.parts[1].exercises}/>
    <Part name={proppi.course.parts[2].name} exercise={proppi.course.parts[2].exercises}/>
  </div>
  )
}

const Part = (proppi) => {
  return (
    <div>
      <p>
      {proppi.name} {proppi.exercise}
      </p>
    </div>
  )
}

const Total = (proppi) => {
  return (
  <div>
    <p>
    Number of exercises {proppi.course.parts[0].exercises + proppi.course.parts[1].exercises + proppi.course.parts[2].exercises}
    </p>
  </div>
  )
}

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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))