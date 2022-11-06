import React from 'react'
import "./SynonymCard.css"

export const SynonymCard = ({props}) => {

  const {word, score} = props.synonym

  return (
    <div className='container card my_card'>
      <div className="card-body">
      <h5 className="card-title">{word}</h5>
      <p className="card-text">With score: {score}</p>
      </div>
    </div>
  )
}
