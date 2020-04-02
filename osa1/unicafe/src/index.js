import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = ({value, text}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, bad, neutral, all}) => {

  if(all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
  <div>
    <table>
      <thead>
        <tr>
          <th><h1>statistics</h1></th>
        </tr>
      </thead>
      <tbody>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={(good - bad) / all}/>
      <StatisticLine text='positive' value={(good / all) * 100 + ' %'}/>
      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
      </div>
      <div>
        <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)