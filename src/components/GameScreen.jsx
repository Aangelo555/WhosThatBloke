import { useState } from 'react'
import players from '../data/players'

function GameScreen({ onFinish }) {
  const [current, setCurrent] = useState(0)
  const [guess, setGuess] = useState("")
  const [score, setScore] = useState(0)
  const [result, setResult] = useState("")

  const player = players[current]

  function handleGuess() {
    const cleanGuess = guess.trim().toLowerCase()

    if (cleanGuess === player.name.toLowerCase()) {
      setResult("correct")
      setScore(score + 1)
    } else {
      setResult("wrong")
    }
  }

  function handleNext() {
    if (current === players.length - 1) {
      onFinish(score)
    } else {
      setCurrent(current + 1)
      setGuess("")
      setResult("")
    }
  }

  return (
    <div className="game">
      <div className="game-top">
        <span>Player {current + 1} / {players.length}</span>
        <span>Score: {score}</span>
      </div>

      <img className="game-img" src={player.image} alt="Mystery player" />

      {result === "" && (
        <p className="game-hint">Type their first and last name</p>
      )}

      {result === "" && (
        <div className="game-guess">
          <input
            type="text"
            placeholder="First and last name"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button onClick={handleGuess}>Guess</button>
        </div>
      )}

      {result !== "" && (
        <div className="game-result">
          <p>{result === "correct" ? "Correct!" : "Wrong!"} It's {player.name}.</p>
          <button onClick={handleNext}>
            {current === players.length - 1 ? "See Results" : "Next"}
          </button>
        </div>
      )}
    </div>
  )
}

export default GameScreen