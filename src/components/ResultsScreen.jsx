function ResultsScreen({ score, total, onRestart }) {
  let message = ""

  if (score === total) {
    message = "Perfect. True Red Devil."
  } else if (score >= 6) {
    message = "So close. You know your stuff."
  } else if (score >= 3) {
    message = "Not bad. Watch a few more matches."
  } else {
    message = "Are you even a United fan?"
  }

  return (
    <div className="results">
      <div className="welcome-bg"></div>
      <div className="welcome-overlay"></div>

      <div className="results-content">
        <span className="welcome-label">Final Score</span>
        <h1 className="results-score">{score} / {total}</h1>
        <p>{message}</p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  )
}

export default ResultsScreen