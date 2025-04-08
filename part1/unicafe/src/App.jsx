import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td> 
          <td>{props.good + props.neutral + props.bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(props.good * 100 / (props.good + props.neutral + props.bad))}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App