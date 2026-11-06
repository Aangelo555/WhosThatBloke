import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'
import players from './data/players'
import './App.css'

function App() {
  const [screen, setScreen] = useState("welcome")
  const [finalScore, setFinalScore] = useState(0)

  function handleFinish(score) {
    setFinalScore(score)
    setScreen("results")
  }

  return (
    <div className="app">
      {screen === "welcome" && <WelcomeScreen onStart={() => setScreen("game")} />}
      {screen === "game" && <GameScreen onFinish={handleFinish} />}
      {screen === "results" && (
        <ResultsScreen
          score={finalScore}
          total={players.length}
          onRestart={() => setScreen("welcome")}
        />
      )}
    </div>
  )
}

export default App