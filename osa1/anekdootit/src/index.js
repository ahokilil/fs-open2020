import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  //App komponentilla on tila jonka kenttinä toimii valitun, sekä parhaimman anekdootin indeksi ja pistetaulukko
  const [indexes, setIndexes] = useState({
    selected: 0,
    best: 0,
    points: new Array(6).fill(0)
  })

  //tapahtumankäsittelijä nappulalle
  const handleNext = () => {
    /* 
    luodaan olio selectRandom,
    generoidaan selected kentälle random luku perustuen pistetaulukon pituuteen
    muut tilan kentät pysyvät samoina
    */
    const selectRandom = {
      selected: Math.floor(Math.random() * indexes.points.length),
      best: indexes.best,
      points: indexes.points
    }
    //asetetaan tila uuden luodun olion mukaiseksi
    setIndexes(selectRandom)
  }

  //tapahtumankäsittelijä nappulalle
  const handleVote = () => {
    //luodaan pistetaulukosta kopio ja kasvatetaan valinta -indeksin mukaista arvoa yhdellä
    const copy = [...indexes.points]
    copy[indexes.selected]++
    /*
    luodaan tilalle uusi olio setPoints,
    pistetaulukko saa uuden kopioidun taulukon arvokseen
    parhaimman anekdootin indeksi etsitään Array.findIndex ja Math.max metodeilla
    */
    const setPoints = {
      selected: indexes.selected,
      best: copy.findIndex(k => k===Math.max(...copy)),
      points: copy
    }

    //asetetaan tila uuden luodun olion mukaiseksi
    setIndexes(setPoints)
  }

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <div>
        {props.anecdotes[indexes.selected]}
        <br/>
        has {indexes.points[indexes.selected]} votes
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </div>
      <div>
        <h1>
          Anecdote with most votes
        </h1>
        {props.anecdotes[indexes.best]}
        <br/>
        has {indexes.points[indexes.best]} votes
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)